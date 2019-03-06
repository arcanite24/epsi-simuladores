import { Component, OnInit, Input } from '@angular/core';
import { Event, Collections, User, EventTask } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'epsi-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  @Input() public event: Event

  public completedTasks: string[] = []

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService
  ) { }

  ngOnInit() {

    this.auth.user$.subscribe(user => {
      if (!user) return
      const userKey = `${Collections.USER}/${user.uid}`
      this.afs.doc<User>(userKey).valueChanges().subscribe(_user => {
        if (!_user.completedTasks) return
        this.completedTasks = user.completedTasks
      })
    })

  }

  async toggleCompleted(id: string) {

    const userKey = `${Collections.USER}/${this.auth.user.uid}`
    const _user = await this.afs.doc<User>(userKey).valueChanges().pipe(take(1)).toPromise()
    const completedTasks: string[] = _user.completedTasks || []

    if (completedTasks.indexOf(id) < 0) {  

      completedTasks.push(id)
      await this.afs.doc(userKey).update({completedTasks})

    } else {
      if (completedTasks.length > 0) completedTasks.splice(completedTasks.indexOf(id), 1)
      await this.afs.doc(userKey).update({completedTasks})
    }

  }

  trackByFn(i: number, item: any) {
    return item.id
  }

}
