import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exam, Question, Answer, Collections, ExamResults, ExamTypes } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { SetAnswer, IExamReducer, SetIndex, SetQuestion, SetResults, FinishExam, ResetExam, SetFeedback } from 'src/app/reducers/exam.reducer';
import { ToastrService } from 'ngx-toastr';
import _ from 'lodash'
import { Router } from '@angular/router';
import { StatsService } from 'src/app/services/stats.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import moment from 'moment'

@Component({
  selector: 'epsi-exam-questions-by-group-widget',
  templateUrl: './exam-questions-by-group-widget.component.html',
  styleUrls: ['./exam-questions-by-group-widget.component.scss']
})
export class ExamQuestionsByGroupWidgetComponent implements OnInit {

  @Input() public exam: Exam
  @Output() public questionChanged: EventEmitter<{question: Question, index: number, results: ExamResults}> = new EventEmitter()
  @Output() public answerSelected: EventEmitter<{question: Question, answer: Answer}> = new EventEmitter()

  private lastIndex: number
  public questions$: Observable<Question[]>
  public examState$: Observable<IExamReducer>
  public question: Question[]
  public selectedAnswer: Answer

  public lastQuestion: Question
  public lastSelected: string

  public results: ExamResults
  public duration: number
  public duration_label: string

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private store: Store<AppState>,
    private toastr: ToastrService,
    private router: Router,
    private stats: StatsService,
    private modal: NgxSmartModalService,
    private stat: StatsService
  ) {
    this.examState$ = this.store.select('exam')
  }

  ngOnInit() {

    this.question = this.exam.formattedQuestions[0]
    this.setInitialResults()

    this.examState$.subscribe(examState => {
      /* if (examState.index && this.lastIndex != examState.index) this.handleIndexChange(examState) */
      if (examState.index != null && this.lastIndex != examState.index) this.handleIndexChange(examState)
      if (examState.finished) this.handleExamFinish(examState)
      if (examState.timer && !this.duration) this.handleSetTimer(examState.timer * 60 * 1000)
      this.lastIndex = examState.index
    })

  }

  private handleIndexChange(state: IExamReducer) {
    console.log('New Exam Index: ' + state.index)
    this.setQuestion(state.index)
  }

  private async handleExamFinish(state: IExamReducer) {
    console.log('Handling Exam Finish')

    // Save last question
    this.saveCache(this.question, state.index, state.selectedAnswer, true)

    // Calculate Average
    const questions: Question[] = Object.values(this.results.questions)
    this.results.promedio = questions.filter(q => q.correcta).length / questions.length

    // Save all question tags in one place
    this.results.tags = _.uniq(_.flattenDeep(questions.map(q => q.raw.tags)))
    console.log(this.results.tags, questions.map(q => q.raw.tags))

    // Create result doc
    await this.afs.doc(`${Collections.EXAM_RESULT}/${state.results.id}`).set(this.results)
    this.toastr.success('Haz completado tu exámen.')
    this.store.dispatch(new ResetExam())
    this.setInitialResults()
    this.selectedAnswer = null
    this.lastIndex = 0
    this.question = this.exam.formattedQuestions[this.lastIndex]

    // If exam is pool delete the exam and show results
    if (this.exam.type == ExamTypes.POOL || this.exam.type == ExamTypes.TAGS || this.exam.type == ExamTypes.PRUEBA) {
      // Decide if we keep the exam pool, maybe that inefficient and redundant
      if (this.exam.type == ExamTypes.PRUEBA) this.stats.modifyCounter(this.exam.id, 1, this.exam)
      await this.afs.doc(`${Collections.EXAM}/${this.exam.id}`).delete()
    }

    // Redirect to exam results in all exam types
    this.router.navigate(['/result', state.results.id])

  }

  private handleSetTimer(duration: number) {

    this.duration = duration
    console.log('duration', duration);
    

    let timer = setInterval(() => {
      if (this.duration > 0) this.duration--
      this.duration_label = moment()
        .startOf('day')
        .seconds(this.duration)
        .format('H:mm:ss')
    }, 1000)

    setTimeout(() => {
      this.finishExam()
      clearInterval(timer)
    }, duration)
    
  }

  public get questionsLeft(): boolean {
    if (!this.exam) return false
    if (!this.exam.formattedQuestions) return false
    if (this.exam.formattedQuestions.length < 0) return false
    return this.lastIndex < this.exam.formattedQuestions.length
  }

  public get isLastQuestion(): boolean {
    if (!this.exam) return false
    if (!this.exam.formattedQuestions) return false
    if (this.exam.formattedQuestions.length < 0) return false
    return this.lastIndex + 1 == this.exam.formattedQuestions.length
  }

  public get canGoBack(): boolean {
    if (!this.exam) return false
    if (!this.exam.formattedQuestions) return false
    if (this.exam.formattedQuestions.length < 0) return false
    return this.lastIndex > 0
  }

  answerChanged(answer: Answer) {
    this.store.dispatch(new SetAnswer(answer))
  }

  setInitialResults() {

    const id = this.afs.createId()

    this.results = {
      id,
      questions: {},
      lastIndex: 0,
      user: null,
      exam: this.exam.id,
      date: new Date().toISOString(),
      promedio: 0,
      tags: []
    }

    this.auth.user$.subscribe(user => {
      if (!user) return
      this.results.user = user.uid
    })
  }

  setQuestion(index: number) {

    if (!this.exam) return
    if (!this.exam.questions) return
    if (!this.exam.questions[index]) return

    this.lastQuestion = this.question[0]

    this.question = this.exam.formattedQuestions[index]
    this.results.lastIndex = index

    this.store.dispatch(new SetQuestion(this.question))

  }

  nextQuestion(currentIndex: number, selectedAnswer: Answer) {
    this.lastSelected = selectedAnswer.id
    this.saveCache(this.question, currentIndex, selectedAnswer)
    this.store.dispatch(new SetIndex(currentIndex + 1))
    this.modal.getModal('examFeedbackModal').open()
    this.stat.updateQuestionStat(this.lastQuestion, selectedAnswer)
    this.store.dispatch(new SetAnswer(null))
  }

  prevQuestion(currentIndex: number, selectedAnswer: Answer) {
    this.saveCache(this.question, currentIndex, selectedAnswer)
    this.store.dispatch(new SetIndex(currentIndex - 1))
  }

  saveCache(q: Question | Question[], index: number, answer: Answer, noDispatch: boolean = false) {

    if (!answer) return
    if (!q) return
    if (!this.results) this.setInitialResults()

    if (q instanceof Array) {

      for (const qq of q) {
        this.results.questions[qq.id] = {
          raw: qq,
          correcta: answer.id == qq.correcta,
          lastModified: new Date().toISOString(),
          selected: qq.selectedAnswer
        }
      }

    } else {

      this.results.questions[q.id] = {
        raw: q,
        correcta: answer.id == q.correcta,
        lastModified: new Date().toISOString(),
        selected: answer
      }

    }

    if (!noDispatch) this.store.dispatch(new SetResults(this.results))

  }

  finishExam() {
    this.store.dispatch(new FinishExam())
  }

}
