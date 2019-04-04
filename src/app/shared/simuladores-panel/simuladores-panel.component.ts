import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Collections, Exam, ExamTypes } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import moment from 'moment'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'epsi-simuladores-panel',
  templateUrl: './simuladores-panel.component.html',
  styleUrls: ['./simuladores-panel.component.scss']
})
export class SimuladoresPanelComponent implements OnInit {

  @Input() public showContent: boolean = false
  public exams$: Observable<any[]>

  constructor(
    private afs: AngularFirestore,
    public auth: AuthService
  ) { }

  ngOnInit() {

    this.exams$ = this.afs.collection<Exam>(Collections.EXAM, ref => ref
      .where('type', '==', ExamTypes.SIMULADOR)
      .where('date', '<=', moment().endOf('day').toISOString()))
      .valueChanges()
      .pipe(
        /* map(list => list.filter(exam => moment(exam.date).isSameOrBefore(moment().endOf('day'))).reverse()), */
        map(list => list.reverse()),
      )

    /* this.exams$ = this.afs.doc<List>(`${Collections.LIST}/${HomeLists.SimuladoresList}`)
      .valueChanges()
      .pipe(
        map(list => sortBy(list.list, item => item.date ? moment(item.date.substr(0, 10)).format('YYYYMMDD') : moment())),
        map(list => list.filter(exam => moment(exam.date).isSameOrBefore(moment().endOf('day'))).reverse()),
      ) */

  }

}
