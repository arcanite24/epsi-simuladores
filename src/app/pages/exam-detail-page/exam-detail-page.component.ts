import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Exam, Collections, ExamResults, Question } from 'src/app/app.models';
import { IExamReducer, SetTimer } from 'src/app/reducers/exam.reducer';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { map, tap } from 'rxjs/operators';
import { groupBy } from 'lodash'
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-exam-detail-page',
  templateUrl: './exam-detail-page.component.html',
  styleUrls: ['./exam-detail-page.component.scss']
})
export class ExamDetailPageComponent implements OnInit {

  public id: string = this.route.snapshot.paramMap.get('id')
  public type: string = this.route.snapshot.paramMap.get('type')

  public exam$: Observable<Exam>
  public examState$: Observable<IExamReducer>

  public currentIndex: number = 0
  public results: ExamResults
  public activeQuestion: Question

  private duration: number

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private store: Store<AppState>,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {

    this.exam$ = this.afs.doc<Exam>(`${Collections.EXAM}/${this.id}`)
      .valueChanges()
      .pipe(
        map(exam => {

          const _questionsWithGroup = Object.values(groupBy(exam.questions.filter(q => q.group), 'group'))
          const _questions = exam.questions.filter(q => !q.group).map(q => [q])
          const _exam = {
            ...exam,
            formattedQuestions: [..._questionsWithGroup, ..._questions]
          }

          return _exam

        }),
        tap(exam => {
          if (exam.duration) this.openTimerModal(exam.duration)
        })
      )

    this.examState$ = this.store.select('exam')
    
  }

  public get completedQuestions(): string[] {
    if (!this.results) return []
    if (!this.results.questions) return []
    return Object.keys(this.results.questions)
  }

  openTimerModal(duration: number) {
    this.duration = duration
    this.modal.getModal('examTimerModal').open()
  }

  startTimer() {
    this.store.dispatch(new SetTimer(this.duration))
    this.modal.getModal('examTimerModal').close()
  }
 
}
