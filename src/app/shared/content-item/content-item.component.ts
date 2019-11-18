import { Component, OnInit, Input } from '@angular/core';
import {Collections, Content} from 'src/app/app.models';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import { modularUrl } from 'src/app/app.config';

@Component({
  selector: 'epsi-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.scss']
})
export class ContentItemComponent implements OnInit {

  @Input() public item: Content;
  @Input() public blur = false;
  @Input() public isPrograma = false;

  public modularUrl = modularUrl;

  constructor(
    public router: Router,
    public auth: AuthService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
  }

  get unlocked() {

    if (!this.auth.loggedIn) { return false; }
    // if (!this.item.roles) { return true; }
    // if (this.item.roles.length <= 0) { return true; }

    const user = this.auth.user;

    if (this.item.name.includes('Temprano')) {
      if (user.isLight2020) {  return true; }
      if (user.isPremium2020) {  return true; }
    }

    for (const role of this.item.roles) {
      if (user[role]) { return true; }
    }

    return false;

  }

  updateItem(payload: Partial<Content>) {
    this.afs.collection(Collections.CONTENT).doc(this.item.id).update(payload);
  }

}
