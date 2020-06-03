import { Component, OnInit } from '@angular/core';
import { groupBy } from 'lodash'
import { Observable } from 'rxjs';
import { ExamRanking, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'epsi-admin-exam-rankings',
  templateUrl: './admin-exam-rankings.component.html',
  styleUrls: ['./admin-exam-rankings.component.scss']
})
export class AdminExamRankingsComponent implements OnInit {

  public exams$: Observable<ExamRanking[][]> = this.afs.collection<ExamRanking>(Collections.EXAM_RANKING)
    .valueChanges()
    .pipe(
      map(rakings => Object.values(groupBy(rakings, r => r.exam.id)))
    )

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
  }

}
