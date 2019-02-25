import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { ExamResults, Collections } from 'src/app/app.models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'epsi-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent implements OnInit {

  public results$: Observable<ExamResults[] | any[]>

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if (user && !this.results$) this.results$ = this.afs.collection<ExamResults>(Collections.EXAM_RESULT, ref => ref
        .where('user', '==', user.uid))
        .valueChanges()
        .pipe(
          map(results => results.map(r => ({
            ...r, 
            exam$: this.afs.collection(Collections.EXAM).doc(r.exam).valueChanges()
          })))
        )
    })
  }

}
