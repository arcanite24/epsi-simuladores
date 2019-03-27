import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ExamResults, Collections, Question, Answer, ExamTypes, ExamRanking, Exam } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap, take } from 'rxjs/operators';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { flattenDeep, uniq, uniqBy } from 'lodash'
import { StatsService } from 'src/app/services/stats.service';
import { DataService } from 'src/app/services/data.service';
import { findIndex } from 'lodash'
import uuid from 'uuid'

@Component({
  selector: 'epsi-exam-results-page',
  templateUrl: './exam-results-page.component.html',
  styleUrls: ['./exam-results-page.component.scss']
})
export class ExamResultsPageComponent implements OnInit {

  private id: string = this.route.snapshot.paramMap.get('id')
  public result$: Observable<ExamResults>
  public rankings$: Observable<ExamRanking[]>
  private _result: ExamResults

  public adEsencial$: Observable<any> = this.afs.collection(Collections.AD_TEXT).doc('AD_ESENCIAL').valueChanges()
  public adPremium$: Observable<any> = this.afs.collection(Collections.AD_TEXT).doc('AD_PREMIUM').valueChanges()
  public adResidente$: Observable<any> = this.afs.collection(Collections.AD_TEXT).doc('AD_RESIDENTE').valueChanges()

  public tags: {name: string, value: number}[] = []

  public myRanking: any
  public exam: Exam

  public tempPosition: number

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private modal: NgxSmartModalService,
    private stats: StatsService,
    private data: DataService
  ) { }

  ngOnInit() {

    this.result$ = this.afs.doc<ExamResults>(`${Collections.EXAM_RESULT}/${this.id}`)
      .valueChanges()
      .pipe(
        tap(async result => {
          
          this._result = result
          this.getTagsAvg(result)

          if (result.exam_type == ExamTypes.PRUEBA) {

            const exam = await this.data.getDoc<Exam>(Collections.EXAM, result.exam)
            this.exam = exam

            this.modal.getModal('examRankingAdd').open()
            if (exam.showAd || exam.adDesc) this.modal.getModal('adModal').open()

            if (result && result.exam) this.rankings$ = this.afs.collection<ExamRanking>(Collections.EXAM_RANKING, ref => ref
              .where('exam.id', '==', result.exam)
              .orderBy('promedio', 'desc')
              .limit(10))
              .valueChanges()
              .pipe(tap(rankings => {
                if (!this.tempPosition) this.computePosition(exam.id)
              }))

          }
          
        })
      )

  }

  get promedio(): number {
    if (!this._result) return 0
    const questions = Object.values(this._result.questions) as Question[]
    return questions.filter(q => q.correcta).length / questions.length * 100
  }

  get questions(): Question[] {
    return Object.values(this._result.questions) as Question[]
  }

  get correctas(): number {
    return this.questions.filter(q => q.correcta).length
  }

  getCorrectaText(id: string, respuestas: Answer[] = []): string {
    if (!respuestas) return '-'
    const r = respuestas.filter(r => r.id == id)[0]
    if (!r) return 'No se selecciono una respuesta correcta en el exámen, contacta con el administrador'
    return r && r.text ? r.text : '-'
  }

  async getTagsAvg(result: ExamResults) {

    const tags = uniq(flattenDeep(Object.values(result.questions).map((q: any) => q.raw.tags)))

    for (const tag of tags) {
      let avg = this.getPromedioByTag(tag, result)
      this.tags.push({name: tag, value: isNaN(avg) ? 0 : avg})
      console.log(tag, avg)
    }

    this.tags = uniqBy(this.tags, t => t.name)

  }

  private getPromedioByTag(tag: string, result: ExamResults) {

    const total = Object.values(result.questions)
      .map((q: any) => ({correcta: q.correcta, tags: q.raw.tags}))
      .filter((q: any) => q.tags && q.tags.includes(tag))

    const correctas = total.filter((q: any) => q.correcta).length

    return correctas / total.length

  }

  getMyPosition(rankings: ExamRanking[], myRanking: any): number {
    if (!rankings) return 1
    if (!myRanking) return 1
    return findIndex(rankings, r => r.user.displayName == myRanking.displayName) + 1
  }

  async computePosition(exam_id: string) {

    const exam = await this.afs.collection(Collections.EXAM).doc<Exam>(exam_id).valueChanges().pipe(take(1)).toPromise()

    const temp_id = await this.stats.registerRanking(exam, {
      displayName: 'Zamnademy',
      uid: uuid.v4()
    }, this.promedio)

    const rankings = await this.afs.collection<ExamRanking>(Collections.EXAM_RANKING, ref => ref
      .where('exam.id', '==', exam_id)
      .orderBy('promedio', 'desc')
      .limit(10))
      .valueChanges()
      .pipe(take(1))
      .toPromise()

    this.tempPosition = findIndex(rankings, r => r.id == temp_id) + 1
    console.log('computePosition',temp_id, this.tempPosition, this.promedio)

    this.afs.collection(Collections.EXAM_RANKING).doc(temp_id).delete()

  }

}
