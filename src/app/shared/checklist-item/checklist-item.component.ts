import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo, User, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'epsi-checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.scss']
})
export class ChecklistItemComponent implements OnInit {

  @Input() public todo: Todo
  @Input() public completed: boolean = false

  @Output() public toggled: EventEmitter<{id: string, oldValue: boolean}> = new EventEmitter()

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  async toggleCompleted(id: string) {

    const userKey = `${Collections.USER}/${this.auth.user.uid}`
    const _user = await this.afs.doc<User>(userKey).valueChanges().pipe(take(1)).toPromise()
    const completedTasks: string[] = _user.completedTasks || []

    if (!this.completed) {  

      completedTasks.push(id)
      await this.afs.doc(userKey).update({completedTasks})
      this.toggled.next({id, oldValue: false})

      // TODO: Decide if completed todo counter need to be substracted after a "uncomplete" event
      const TODO_KEY = `${Collections.TODO}/${id}`
      const todo = await this.afs.doc<Todo>(TODO_KEY).valueChanges().pipe(take(1)).toPromise()
      await this.afs.doc<Todo>(TODO_KEY).update({completed: todo.completed ? todo.completed + 1 : 1})

    } else {
      if (completedTasks.length > 0) completedTasks.splice(completedTasks.indexOf(id), 1)
      await this.afs.doc(userKey).update({completedTasks})
      this.toggled.next({id, oldValue: true})
    }

  }

}
