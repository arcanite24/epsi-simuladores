import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification, Collections, User } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'epsi-notifications-modal',
  templateUrl: './notifications-modal.component.html',
  styleUrls: ['./notifications-modal.component.scss']
})
export class NotificationsModalComponent implements OnInit {

  public notis$: Observable<Notification[]>
  public readNotis: string[] = []

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.notis$ = this.afs.collection<Notification>(Collections.NOTIFICATION).valueChanges()
    this.loadNotis()
  }

  readNoti(noti: Notification) {

    const user = this.auth.user
    if (user.completedTasks && !user.completedTasks.includes(noti.id)) user.completedTasks.push(noti.id)
    this.afs.collection(Collections.USER).doc(user.uid).update({completedTasks: user.completedTasks})

  }

  private loadNotis() {
    this.auth.user$.subscribe(_user => {
      if (_user) {
        this.afs.collection(Collections.USER).doc<User>(_user.uid).valueChanges().subscribe(user => {
          this.readNotis = user.completedTasks ? user.completedTasks : []
        })
      }
    })
  }

}
