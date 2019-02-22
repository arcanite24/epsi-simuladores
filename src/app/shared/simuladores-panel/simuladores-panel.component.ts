import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { List, Collections, HomeLists, Exam, ExamTypes } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { sortBy } from 'lodash'
import moment from 'moment'

@Component({
  selector: 'epsi-simuladores-panel',
  templateUrl: './simuladores-panel.component.html',
  styleUrls: ['./simuladores-panel.component.scss']
})
export class SimuladoresPanelComponent implements OnInit {

  public exams$: Observable<any[]>

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {

    /* this.exams$ = this.afs.collection<Exam>(Collections.EXAM, ref => ref
      .where('type', '==', ExamTypes.SIMULADOR)
      .where('date', '>=', moment().startOf('day').toDate())
      .orderBy('date', 'desc'))
      .valueChanges()
      .pipe(
        map(list => list.filter(exam => moment(exam.date).isSameOrBefore(moment().endOf('day'))).reverse()),
      ) */

    this.exams$ = this.afs.doc<List>(`${Collections.LIST}/${HomeLists.SimuladoresList}`)
      .valueChanges()
      .pipe(
        map(list => sortBy(list.list, item => moment(item.date.substr(0, 10)).format('YYYYMMDD'))),
        map(list => list.filter(exam => moment(exam.date).isSameOrBefore(moment().endOf('day'))).reverse()),
      )

  }

}
