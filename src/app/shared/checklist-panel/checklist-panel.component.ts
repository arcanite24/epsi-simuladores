import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, Collections, User } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'epsi-checklist-panel',
  templateUrl: './checklist-panel.component.html',
  styleUrls: ['./checklist-panel.component.scss']
})
export class ChecklistPanelComponent implements OnInit {

  public checklist$: Observable<Todo[]> = this.afs.collection<Todo>(Collections.TODO, ref => ref.orderBy('sortIndex')).valueChanges()
  public completedTasks: string[] = []

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {

    this.afAuth.user.subscribe(user => {
      if (user) {
        this.afs.doc<User>(`${Collections.USER}/${user.uid}`)
          .valueChanges()
          .subscribe(user => this.completedTasks = user.completedTasks ? user.completedTasks : [])
      }
    })

  }

}
