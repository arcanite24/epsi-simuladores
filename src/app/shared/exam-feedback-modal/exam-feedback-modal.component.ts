import { Component, OnInit, Input } from '@angular/core';
import { Question, QuestionStat, Collections } from 'src/app/app.models';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-exam-feedback-modal',
  templateUrl: './exam-feedback-modal.component.html',
  styleUrls: ['./exam-feedback-modal.component.scss']
})
export class ExamFeedbackModalComponent implements OnInit {

  public q: Question
  public stats: {q: Question, stat$: Observable<QuestionStat>}[] = []

  @Input()
  public set lastQuestion(qs: Question[]) {

    for (const q of qs) {
      
      let payload = {
        q,
        stat$: this.afs.collection(Collections.QUESTION_STAT).doc<QuestionStat>(q.id)
          .valueChanges()
          .pipe(
            map(stat => stat ? ({...stat, stat: Object.entries(stat.stat)}) : ({id: `${Collections.QUESTION_STAT}/${q.id}`, question: q, stat: [], total: 0}))
          )
      }

      this.stats.push(payload)

    }

  }
  public get lastQuestion(): Question[] { return [] }

  @Input() lastSelected: string

  constructor(
    private afs: AngularFirestore,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modal.getModal('examFeedbackModal').close()
  }

}
