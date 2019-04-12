import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Collections, ExamResults} from "../../app.models";
import {AngularFirestore} from "@angular/fire/firestore";
import {AuthService} from "../../services/auth.service";
import {map} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'epsi-admin-exam-results',
  templateUrl: './admin-exam-results.component.html',
  styleUrls: ['./admin-exam-results.component.scss']
})
export class AdminExamResultsComponent implements OnInit {

  public results$: Observable<ExamResults[] | any[]>;
  public id: string = this.route.snapshot.paramMap.get('id');

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if (user && !this.results$) this.results$ = this.afs.collection<ExamResults>(Collections.EXAM_RESULT, ref => ref
        .where('exam', '==', this.id))
        .valueChanges()
        .pipe(
          map(results => results.map(r => ({
            ...r,
            exam$: this.afs.collection(Collections.EXAM).doc(r.exam).valueChanges(),
            user$: this.afs.collection(Collections.USER).doc(r.user).valueChanges(),
          })))
        )
    })
  }

}
