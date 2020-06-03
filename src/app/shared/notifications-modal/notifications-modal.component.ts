import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { Notification, Collections, User } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'epsi-notifications-modal',
  templateUrl: './notifications-modal.component.html',
  styleUrls: ['./notifications-modal.component.scss']
})
export class NotificationsModalComponent implements OnInit {

  public notis$: Observable<Notification[]>
  public readNotis: string[] = []

  public notiRes: string

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    /* this.notis$ = this.afs.collection<Notification>(Collections.NOTIFICATION).valueChanges() */
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

        this.notis$ = combineLatest(
          this.afs.collection<Notification>(Collections.NOTIFICATION, ref => ref.where('isGlobal', '==', true)).valueChanges(),
          this.afs.collection<Notification>(Collections.NOTIFICATION, ref => ref.where('user', '==', _user.uid)).valueChanges(),
        ).pipe(
          map(([global, local]) => {
            return [...global, ...local]
          })
        )

        this.afs.collection(Collections.USER).doc<User>(_user.uid).valueChanges().subscribe(user => {
          this.readNotis = user.completedTasks ? user.completedTasks : []
        })

      }
    })
  }

  async sendResponse(text: string, noti: string) {

    const id = this.afs.createId()
    await this.afs.collection(Collections.NOTIFICATION_RESPONSE).doc(id).set({
      id,
      text,
      noti,
      user: this.auth.user.uid,
      date: new Date().toISOString(),
      username: this.auth.user.displayName,
    })

    this.toastr.success('Gracias por tu respuesta')
    text = ''

  }

}
