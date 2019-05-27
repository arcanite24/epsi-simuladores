import { Observable } from 'rxjs';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ExamResults, Collections } from 'src/app/app.models';
import { tap } from 'rxjs/operators';
import { meanBy } from 'lodash';

@Component({
  selector: 'epsi-user-exam-results',
  templateUrl: './user-exam-results.component.html',
  styleUrls: ['./user-exam-results.component.scss']
})
export class UserExamResultsComponent implements OnInit {

  private _exam: string;

  @Input() public user: string;
  @Input() public set exam(exam: string) {
    this._exam = exam;
    if (this.user && exam) { this.loadResults(this.user, exam); }
  }

  @Output() public computedMean: EventEmitter<number> = new EventEmitter();

  public get exam(): string { return this._exam; }
  public results$: Observable<ExamResults[]>;

  constructor(
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
    console.log(this.exam, this.user);
    if (this.exam && this.user) { this.loadResults(this.user, this.exam); }
  }

  loadResults(user: string, exam: string) {
    this.results$ = this.afs.collection<ExamResults>(Collections.EXAM_RESULT, ref => ref
      .where('user', '==', user)
      .where('exam', '==', exam))
      .valueChanges()
      .pipe(tap(results => this.computedMean.next(meanBy(results, 'promedio'))));
  }

}
