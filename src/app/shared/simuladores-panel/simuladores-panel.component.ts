import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Collections, Exam, ExamTypes, User } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'epsi-simuladores-panel',
  templateUrl: './simuladores-panel.component.html',
  styleUrls: ['./simuladores-panel.component.scss']
})
export class SimuladoresPanelComponent implements OnInit {

  @Input() public showContent = false;
  public exams$: Observable<any[]>;

  public completed: any = {};

  constructor(
    private afs: AngularFirestore,
    public auth: AuthService,
    private data: DataService,
  ) { }

  ngOnInit() {

    this.auth.user$.subscribe(async user => {

      let isPresencial = false;
      if (user.is3602019) { isPresencial = true }
      if (user.isPresencial) { isPresencial = true }
      if (user.isPremium2019) { isPresencial = false }

      if (user && !this.exams$) { this.loadExams(isPresencial); }

      if (user) {
        const _user = await this.data.getDoc<User>(Collections.USER, user.uid);
        this.completed = _user.completedExams ? _user.completedExams : {};
      }

    });

    /* this.exams$ = this.afs.doc<List>(`${Collections.LIST}/${HomeLists.SimuladoresList}`)
      .valueChanges()
      .pipe(
        map(list => sortBy(list.list, item => item.date ? moment(item.date.substr(0, 10)).format('YYYYMMDD') : moment())),
        map(list => list.filter(exam => moment(exam.date).isSameOrBefore(moment().endOf('day'))).reverse()),
      ) */

  }

  loadExams(isPresencial: boolean = false) {

    /*if (isPresencial) {*/
    if (isPresencial) {
      this.exams$ = this.afs.collection<Exam>(Collections.EXAM, ref => ref
        .where('isPresencial', '==', true)
        .where('type', '==', ExamTypes.SIMULADOR)
        .where('date', '<=', moment().endOf('day').toISOString()))
        .valueChanges()
        .pipe(
          /* map(list => list.filter(exam => moment(exam.date).isSameOrBefore(moment().endOf('day'))).reverse()), */
          map(list => list.reverse()),
        );
    } else {
      this.exams$ = this.afs.collection<Exam>(Collections.EXAM, ref => ref
        .where('type', '==', ExamTypes.SIMULADOR)
        .where('date', '<=', moment().endOf('day').toISOString()))
        .valueChanges()
        .pipe(
          /* map(list => list.filter(exam => moment(exam.date).isSameOrBefore(moment().endOf('day'))).reverse()), */
          map(list => list.filter(e => !e.isPresencial).reverse()),
        );
    }

  }

  isBlur(): boolean {
    if (this.auth.isAdmin) { return false }
    if (this.auth.isPremium2019) { return false }
    if (this.auth.isZamna360_2019) { return false }
    return !this.auth.isTemprano && !this.auth.isPresencial;
  }

}
