import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam, Collections, ExamTypes } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-simulacros-panel',
  templateUrl: './simulacros-panel.component.html',
  styleUrls: ['./simulacros-panel.component.scss']
})
export class SimulacrosPanelComponent implements OnInit {

  public exams$: Observable<Exam[]>

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.exams$ = this.afs.collection<Exam>(Collections.EXAM, ref => ref.where('type', '==', ExamTypes.SIMULACRO)).valueChanges()
  }

}
