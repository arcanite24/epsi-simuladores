import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Collections, Exam, ExamTypes } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-simulacros-panel',
  templateUrl: './simulacros-panel.component.html',
  styleUrls: ['./simulacros-panel.component.scss']
})
export class SimulacrosPanelComponent implements OnInit {

  @Input() public showContent: boolean = false
  public exams$: Observable<any[]>

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.exams$ = this.afs.collection<Exam>(Collections.EXAM, ref => ref
      .where('type', '==', ExamTypes.SIMULACRO)
      .where('liberado', '==', true))
      .valueChanges()
  }

}
