import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-notifications-modal',
  templateUrl: './notifications-modal.component.html',
  styleUrls: ['./notifications-modal.component.scss']
})
export class NotificationsModalComponent implements OnInit {

  public notis$: Observable<Notification[]>

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.notis$ = this.afs.collection<Notification>(Collections.NOTIFICATION).valueChanges()
  }

}
