import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamResults, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'epsi-exam-results-widget',
  templateUrl: './exam-results-widget.component.html',
  styleUrls: ['./exam-results-widget.component.scss']
})
export class ExamResultsWidgetComponent implements OnInit {

  public results$: Observable<ExamResults[]>
  @Input() public id: string

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if (!user) return
      this.results$ = this.afs.collection<ExamResults>(Collections.EXAM_RESULT, ref => ref.where('user', '==', user.uid).where('exam', '==', this.id)).valueChanges()
    })
  }

}
