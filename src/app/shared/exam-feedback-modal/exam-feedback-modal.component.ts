import { Component, OnInit, Input } from '@angular/core';
import { Question, QuestionStat, Collections } from 'src/app/app.models';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'epsi-exam-feedback-modal',
  templateUrl: './exam-feedback-modal.component.html',
  styleUrls: ['./exam-feedback-modal.component.scss']
})
export class ExamFeedbackModalComponent implements OnInit {

  public q: Question
  public stat$: Observable<QuestionStat>

  @Input()
  public set lastQuestion(q: Question) {
    this.q = q
    this.stat$ = this.afs.collection(Collections.QUESTION_STAT).doc<QuestionStat>(q.id)
      .valueChanges()
      .pipe(
        map(stat => stat ? ({...stat, stat: Object.entries(stat.stat)}) : ({id: `${Collections.QUESTION_STAT}/${q.id}`, question: q, stat: [], total: 0}))
      )
  }
  public get lastQuestion(): Question { return this.q }

  @Input() lastSelected: string

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
  }

}
