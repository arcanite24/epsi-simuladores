import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { List, Collections, HomeLists } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'epsi-simulacros-panel',
  templateUrl: './simulacros-panel.component.html',
  styleUrls: ['./simulacros-panel.component.scss']
})
export class SimulacrosPanelComponent implements OnInit {

  public exams$: Observable<any[]>

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    //this.exams$ = this.afs.collection<Exam>(Collections.EXAM, ref => ref.where('type', '==', ExamTypes.SIMULACRO)).valueChanges()
    this.exams$ = this.afs.doc<List>(`${Collections.LIST}/${HomeLists.SimulacrosList}`)
      .valueChanges()
      .pipe(
        map(list => list.list)
      )
  }

}
