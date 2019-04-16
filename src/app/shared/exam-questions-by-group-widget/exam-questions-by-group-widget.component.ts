import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Answer, Collections, Exam, ExamResults, ExamTypes, Question} from 'src/app/app.models';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {AuthService} from 'src/app/services/auth.service';
import {Store} from '@ngrx/store';
import {AppState} from 'src/app/app.state';
import {
  FinishExam,
  IExamReducer,
  ResetExam,
  SetAnswer,
  SetIndex,
  SetQuestion,
  SetResults
} from 'src/app/reducers/exam.reducer';
import {ToastrService} from 'ngx-toastr';
import _ from 'lodash'
import {Router} from '@angular/router';
import {StatsService} from 'src/app/services/stats.service';
import {NgxSmartModalService} from 'ngx-smart-modal';
import moment from 'moment'
import {DataService} from "../../services/data.service";

const countdown = require('countdown')
countdown.setLabels(
	' milissegundo| segundo| minuto| hora| día| semana| mes| año| decada| siglo| milenio',
	' milisegundos| segundos| minutos| horas| días| semanas| meses| años| décadas| siglos| milenios',
	' ',
	' ',
	'ahora');

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

  public lastQuestion: Question[]
  public lastSelected: string

  public results: ExamResults
  public duration: number
  public duration_label: string

  public startTime: number = 0

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private store: Store<AppState>,
    private toastr: ToastrService,
    private router: Router,
    private stats: StatsService,
    private modal: NgxSmartModalService,
    private stat: StatsService,
    private data: DataService
  ) {
    this.examState$ = this.store.select('exam')
  }

  ngOnInit() {

    /*const lastExam = localStorage.getItem('last-exam')
    if (lastExam && lastExam != this.exam.id) {
      this.store.dispatch(new ResetExam())
      localStorage.setItem('last-exam', this.exam.id)
    }*/

    this.question = this.exam.formattedQuestions[0]
    this.setInitialResults()

    // Si ya lo resolvio

    this.examState$.subscribe(examState => {
      /* if (examState.index && this.lastIndex != examState.index) this.handleIndexChange(examState) */
      if (examState.index != null && this.lastIndex != examState.index) this.handleIndexChange(examState)
      if (examState.finished) this.handleExamFinish(examState)
      if (examState.timer && !this.duration) this.handleSetTimer(examState.timer * 60 * 1000)
      this.lastIndex = examState.index
    })

    if (this.exam.type == ExamTypes.SIMULACRO) setTimeout(() => this.checkIfResuelto(this.exam.id), 1000);

  }

  private async checkIfResuelto(examId: string) {

    const results = await this.data.getCollectionQuery<ExamResults>(Collections.EXAM_RESULT, ref => ref
      .where('exam', '==', examId)
      .where('user', '==', this.auth.user.uid))

    if (results && results.length > 0) {
      this.toastr.error('No puedes volver a resolver éste Exámen Simulacro')
      this.router.navigate(['/'])
    }

  }

  private handleIndexChange(state: IExamReducer) {
    console.log('New Exam Index: ' + state.index)
    this.setQuestion(state.index);
  }

  private async handleExamFinish(state: IExamReducer) {
    console.log('Handling Exam Finish', state.results)

    // Set final time
    this.results.completedIn = (Date.now() - this.startTime) / 1000;

    // Save last question
    this.saveCache(this.question, state.index, state.selectedAnswer, true)

    // Calculate Average
    const questions: Question[] = Object.values(state.results.questions)
    this.results.promedio = questions.filter(q => q.correcta).length / questions.length

    // Re-set exam type
    this.results.exam_type = this.exam.type

    // Save all question tags in one place
    this.results.tags = _.uniq(_.flattenDeep(questions.map(q => q.raw.tags)))
    console.log(this.results.tags, questions.map(q => q.raw.tags))

    // Create result doc
    console.log(state.results, this.results)
    await this.afs.doc(`${Collections.EXAM_RESULT}/${state.results.id}`).set(this.results)
    this.toastr.success('Haz completado tu exámen.')
    this.store.dispatch(new ResetExam())
    /*this.setInitialResults()*/
    this.selectedAnswer = null
    this.lastIndex = 0
    this.question = this.exam.formattedQuestions[this.lastIndex]

    // Register ranking in DEMO type
    if (this.exam.type == ExamTypes.PRUEBA) {
      console.log('abriendo modal ranking');
      this.modal.getModal('examRankingAdd').open()
      this.stats.modifyCounter(this.exam.id, 1, this.exam)
    }

    // If exam is pool delete the exam
    if (this.exam.type == ExamTypes.POOL) {
      await this.afs.doc(`${Collections.EXAM}/${this.exam.id}`).delete()
    }

    // Redirect to exam results in all exam types except Preclase
    if (this.exam.type != ExamTypes.PRECLASE) {
      this.router.navigate(['/result', state.results.id])
    } else {
      this.modal.getModal('preclaseExamModal').close()
    }

  }

  private handleSetTimer(duration: number) {

    this.duration = duration
    console.log('duration', duration);

    let timer = setInterval(() => {
      if (this.duration > 0) this.duration -= 1000

      /*const time_format = this.exam.type == ExamTypes.SIMULACRO ? countdown.HOURS | countdown.MINUTES | countdown.SECONDS : countdown.MINUTES | countdown.SECONDS*/
      const time_format = countdown.HOURS | countdown.MINUTES | countdown.SECONDS;

      this.duration_label = countdown(moment().add(this.duration, 'milliseconds').toDate(), null, time_format)
        .toString()
        .replace(/<small>|<\/small>/g, '')

      /* this.duration_label = moment()
        .startOf('day')
        .seconds(this.duration * 60)
        .format('H:mm:ss') */
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

  answerChanged(answer: Answer, question: Question) {
    this.store.dispatch(new SetAnswer(answer))
    question.selectedAnswer = answer
  }

  setInitialResults() {

    const id = this.afs.createId()
    console.log('set initila result', id)

    this.results = {
      id,
      questions: {},
      lastIndex: 0,
      user: null,
      exam: this.exam.id,
      date: new Date().toISOString(),
      promedio: 0,
      tags: [],
      exam_type: this.exam.type
    }

    // Set startTime
    this.startTime = Date.now();

    this.auth.user$.subscribe(user => {
      if (!user) return
      this.results.user = user.uid
    })
  }

  setQuestion(index: number) {

    if (!this.exam) return
    if (!this.exam.questions) return
    if (!this.exam.questions[index]) return

    this.lastQuestion = this.question

    this.question = this.exam.formattedQuestions[index]
    this.results.lastIndex = index

    this.store.dispatch(new SetQuestion(this.question))

    this.loadCachedAnswer(this.question)

  }

  nextQuestion(currentIndex: number, selectedAnswer: Answer) {

    this.lastSelected = selectedAnswer.id

    this.saveCache(this.question, currentIndex, selectedAnswer)

    this.store.dispatch(new SetIndex(currentIndex + 1))

    if (this.exam.type != ExamTypes.PRECLASE && this.exam.type != ExamTypes.SIMULACRO) this.modal.getModal('examFeedbackModal').open()

    this.stat.updateQuestionStat(this.lastQuestion, selectedAnswer)
    // this.store.dispatch(new SetAnswer(null)) removed because we load the cached answer

  }

  prevQuestion(currentIndex: number, selectedAnswer: Answer) {
    this.saveCache(this.question, currentIndex, selectedAnswer)
    this.store.dispatch(new SetIndex(currentIndex - 1))
  }

  loadCachedAnswer(questions: Question[]) {

    for (let [i, q] of Object.entries(questions)) {
      const cachedAnswer = localStorage.getItem(q.id)
      if (cachedAnswer) {
        console.log(this.question[i])
        this.question[i].selectedAnswer = JSON.parse(cachedAnswer)
        this.question[i].selectedAnswerId = JSON.parse(cachedAnswer).id
      }
    }

    /*if (q instanceof Array) {

      for (const qq of q) {

        console.log(qq.selectedAnswer)

        // Load cached answer
        const cachedAnswer = localStorage.getItem(qq.id)
        console.log(cachedAnswer)
        if (cachedAnswer) {
          this.store.dispatch(new SetAnswer(JSON.parse(cachedAnswer)))
        }

      }

    } else {

      // Load cached answer
      const cachedAnswer = localStorage.getItem(q.id)
      console.log(cachedAnswer)
      if (cachedAnswer) {
        this.store.dispatch(new SetAnswer(JSON.parse(cachedAnswer)))
      }

    }*/
  }

  saveCache(q: Question | Question[], index: number, answer: Answer, noDispatch: boolean = false) {

    if (!answer) return
    if (!q) return
    /*if (!this.results) this.setInitialResults()*/

    if (q instanceof Array) {

      for (const qq of q) {

        console.log(qq.selectedAnswer)

        this.results.questions[qq.id] = {
          raw: qq,
          correcta: qq.selectedAnswer ? qq.selectedAnswer.id == qq.correcta : false,
          lastModified: new Date().toISOString(),
          selected: qq.selectedAnswer,
          index,
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
