import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { List, Collections, HomeLists } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

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
    //this.exams$ = this.afs.collection<Exam>(Collections.EXAM, ref => ref.where('type', '==', ExamTypes.SIMULADOR)).valueChanges()
    this.exams$ = this.afs.doc<List>(`${Collections.LIST}/${HomeLists.SimuladoresList}`)
      .valueChanges()
      .pipe(
        map(list => list.list)
      )
  }

}
