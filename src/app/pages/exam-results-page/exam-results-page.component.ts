import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ExamResults, Collections, Question, Answer } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'epsi-exam-results-page',
  templateUrl: './exam-results-page.component.html',
  styleUrls: ['./exam-results-page.component.scss']
})
export class ExamResultsPageComponent implements OnInit {

  private id: string = this.route.snapshot.paramMap.get('id')
  public result$: Observable<ExamResults>
  private _result: ExamResults

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.result$ = this.afs.doc<ExamResults>(`${Collections.EXAM_RESULT}/${this.id}`)
      .valueChanges()
      .pipe(
        tap(result => this._result = result)
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

  getCorrectaText(id: string, respuestas: Answer[]): string {
    return respuestas.filter(r => r.id == id)[0].text
  }

}
