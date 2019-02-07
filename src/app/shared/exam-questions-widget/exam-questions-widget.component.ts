import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exam, Question, Answer, Collections, ExamResults, ExamTypes } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { SetAnswer, IExamReducer, SetIndex, SetQuestion, SetResults, FinishExam, ResetExam } from 'src/app/reducers/exam.reducer';
import { ToastrService } from 'ngx-toastr';
import _ from 'lodash'
import { Router } from '@angular/router';

@Component({
  selector: 'epsi-exam-questions-widget',
  templateUrl: './exam-questions-widget.component.html',
  styleUrls: ['./exam-questions-widget.component.scss']
})
export class ExamQuestionsWidgetComponent implements OnInit {

  @Input() public exam: Exam
  @Output() public questionChanged: EventEmitter<{question: Question, index: number, results: ExamResults}> = new EventEmitter()
  @Output() public answerSelected: EventEmitter<{question: Question, answer: Answer}> = new EventEmitter()

  private lastIndex: number
  public questions$: Observable<Question[]>
  public examState$: Observable<IExamReducer>
  public question: Question
  public selectedAnswer: Answer

  public results: ExamResults

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private store: Store<AppState>,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.examState$ = this.store.select('exam')
  }

  ngOnInit() {

    // TODO: Find a better way to structure/filter questions
    const list = this.exam.questions.map(q => q.id)
    this.questions$ = this.afs.collection<Question>(Collections.QUESTION)
      .valueChanges()
      .pipe(
        map(questions => questions.filter(q => list.indexOf(q.id) >= 0)),
        tap(questions => {
          this.exam.questions = questions
          this.question = questions[0]
          this.questionChanged.next({question: this.question, index: 0, results: this.results})
          this.setInitialResults()
        })
      )

    this.examState$.subscribe(examState => {
      if (examState.index && this.lastIndex != examState.index) this.handleIndexChange(examState)
      if (examState.finished) this.handleExamFinish(examState)
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
    this.question = this.exam.questions[this.lastIndex]

    // If exam is pool delete the exam and show results
    if (this.exam.type == ExamTypes.POOL || this.exam.type == ExamTypes.TAGS) {
      // Decide if we keep the exam pool, maybe that inefficient and redundant
      await this.afs.doc(`${Collections.EXAM}/${this.exam.id}`).delete()
      this.router.navigate(['/result', state.results.id])
    }

  }

  public get questionsLeft(): boolean {
    if (!this.exam) return false
    if (!this.exam.questions) return false
    if (this.exam.questions.length < 0) return false
    return this.lastIndex < this.exam.questions.length
  }

  public get isLastQuestion(): boolean {
    if (!this.exam) return false
    if (!this.exam.questions) return false
    if (this.exam.questions.length < 0) return false
    return this.lastIndex + 1 == this.exam.questions.length
  }

  public get canGoBack(): boolean {
    if (!this.exam) return false
    if (!this.exam.questions) return false
    if (this.exam.questions.length < 0) return false
    return this.lastIndex > 0
  }

  answerChanged(answer: Answer, question: Question) {
    this.answerSelected.next({question, answer})
    this.store.dispatch(new SetAnswer(answer))
  }

  setInitialResults() {
    this.auth.user$.subscribe(user => {
      if (!user) return
      const id = this.afs.createId()
      this.results = {
        id,
        questions: {},
        lastIndex: 0,
        user: user.uid,
        exam: this.exam.id,
        date: new Date().toISOString(),
        promedio: 0,
        tags: []
      }
    })
  }

  setQuestion(index: number) {
    if (!this.exam) return
    if (!this.exam.questions) return
    if (!this.exam.questions[index]) return
    this.question = this.exam.questions[index]
    this.questionChanged.next({question: this.question, index, results: this.results})
    this.results.lastIndex = index
    this.store.dispatch(new SetQuestion(this.question))
  }

  nextQuestion(currentIndex: number, selectedAnswer: Answer) {
    this.saveCache(this.question, currentIndex, selectedAnswer)
    this.store.dispatch(new SetIndex(currentIndex + 1))
  }

  prevQuestion(currentIndex: number, selectedAnswer: Answer) {
    this.saveCache(this.question, currentIndex, selectedAnswer)
    this.store.dispatch(new SetIndex(currentIndex - 1))
  }

  saveCache(q: Question, index: number, answer: Answer, noDispatch: boolean = false) {

    if (!answer) return
    if (!q) return
    if (!this.results) this.setInitialResults()

    this.results.questions[q.id] = {
      raw: q,
      correcta: answer.id == q.correcta,
      lastModified: new Date().toISOString(),
      selected: answer
    }

    if (!noDispatch) this.store.dispatch(new SetResults(this.results))

  }

  finishExam() {
    this.store.dispatch(new FinishExam())
  }

}
