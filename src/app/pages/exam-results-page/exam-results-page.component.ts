import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ExamResults, Collections, Question, Answer, ExamTypes, ExamRanking } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';
import { NgxSmartModalService } from 'ngx-smart-modal';

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

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {

    this.result$ = this.afs.doc<ExamResults>(`${Collections.EXAM_RESULT}/${this.id}`)
      .valueChanges()
      .pipe(
        tap(result => {
          this._result = result
          if (result.exam_type == ExamTypes.PRUEBA) {
            this.modal.getModal('examRankingAdd').open()
            this.rankings$ = this.afs.collection<ExamRanking>(Collections.EXAM_RANKING, ref => ref
              .where('exam.id', '==', result.exam)
              .orderBy('promedio', 'desc')
              .limit(10))
              .valueChanges()
          }
          
        })
      )

    

  }

  get promedio(): number {
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

}
