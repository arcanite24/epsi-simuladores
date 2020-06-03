import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Collections, Exam, ExamTypes, User } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'epsi-simulacros-panel',
  templateUrl: './simulacros-panel.component.html',
  styleUrls: ['./simulacros-panel.component.scss']
})
export class SimulacrosPanelComponent implements OnInit {

  @Input() public showContent = false;
  public exams$: Observable<any[]>;

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if (user && !this.exams$) { this.loadExams(user); }
    })
  }

  private loadExams(user: User) {
    this.exams$ = this.afs.collection<Exam>(Collections.EXAM, ref => ref
      .where('type', '==', ExamTypes.SIMULACRO)
      .where('liberado', '==', true))
      .valueChanges()
      .pipe(map(exams => this.filterWithRoles(exams, user)));
  }

  private filterWithRoles(exams: Exam[] = [], user: User) {
    return exams.filter(e => {
      if (e.unlockedBy) {
        console.log(e.unlockedBy, user[e.unlockedBy]);
        return !!user[e.unlockedBy];
      } else {
        return true;
      }
    });
  }

}
