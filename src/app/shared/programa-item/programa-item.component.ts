import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Programa, Collections, User } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { take, takeLast } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'epsi-programa-item',
  templateUrl: './programa-item.component.html',
  styleUrls: ['./programa-item.component.scss']
})
export class ProgramaItemComponent implements OnInit {

  @Input() public programa: Programa
  @Output() public childrenLoad: EventEmitter<Programa[]> = new EventEmitter()

  public children: Programa[]
  public user$: Observable<User>

  constructor(
    private afs: AngularFirestore,
    private auth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.user$ = this.afs.doc<User>(`${Collections.USER}/${this.auth.auth.currentUser.uid}`).valueChanges()
  }

  async loadChildren(p: Programa) {
    
    const children = await this.afs.collection<Programa>(Collections.PROGRAMA, ref => ref
      .where('parent.id', '==', p.id))
      .valueChanges()
      .pipe(take(1))
      .toPromise()

    this.childrenLoad.next(children)
    this.children = children

  }

  toggleCheck(user: User, programa_id: string) {

    if (user.completedTasks.indexOf(programa_id) >= 0) {
      user.completedTasks.splice(user.completedTasks.indexOf(programa_id), 1)
      this.updateUserTasks(user.uid, user.completedTasks)
    } else {
      user.completedTasks.push(programa_id)
      this.updateUserTasks(user.uid, user.completedTasks)
    }

  }

  updateUserTasks(id: string, tasks: string[]) {
    this.afs.doc(`${Collections.USER}/${id}`).update({completedTasks: tasks})
  }

}
