import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, Collections, User } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { take } from 'rxjs/operators';
import { LoadChecklist } from 'src/app/reducers/zamnademy.reducer';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'epsi-checklist-panel',
  templateUrl: './checklist-panel.component.html',
  styleUrls: ['./checklist-panel.component.scss']
})
export class ChecklistPanelComponent implements OnInit {

  public checklist: Todo[];
  public completedTasks: string[] = [];

  constructor(
    public pay: PaymentService,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {

    this.loadCheckList();

    this.afAuth.user.subscribe(user => {
      if (user) {
        this.afs.doc<User>(`${Collections.USER}/${user.uid}`)
          .valueChanges()
          .subscribe(u => this.completedTasks = u.completedTasks ? u.completedTasks : []);
      }
    });

  }

  async loadCheckList() {

    const checklist = await this.store.select(store => store.zamna.checklist)
      .pipe(take(1))
      .toPromise();

    if (!checklist) {
      const todos = await this.getChecklist();
      this.store.dispatch(new LoadChecklist(todos));
      this.checklist = todos;
    } else {
      this.checklist = checklist;
    }

  }

  async getChecklist() {

    const checklist = await this.afs.collection<Todo>(Collections.TODO, ref => ref
      .orderBy('sortIndex'))
      .valueChanges()
      .pipe(take(1))
      .toPromise();

    return checklist;

  }

}
