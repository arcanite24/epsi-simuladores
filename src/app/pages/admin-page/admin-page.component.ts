import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {Collections, EsencialModel, MoodRate, Roles, User} from 'src/app/app.models';
import { groupBy } from 'lodash'
import {AngularFirestore} from "@angular/fire/firestore";
import {excluded_users} from "../../app.utils";

@Component({
  selector: 'epsi-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  public rates: any[]
  public loading: boolean = false

  constructor(
    private data: DataService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {

    this.loadRates()

  }

  async loadRates() {

    const rates = await this.data.getCollection<MoodRate>(Collections.MOOD_RATE)

    if (!rates) return []
    let payload = {}

    const group = groupBy(rates, 'mood')

    for (const [key, value] of Object.entries(group)) {
      payload[key] = {mood: key, total: value.length}
    }

    this.rates = Object.values(payload)

  }

  async setEsencialToPresenciales() {

    let payload = {}

    for (let role of EsencialModel) {
      payload[role] = true;
    }

    console.log(payload)

    const sub = this.afs.collection<User>(Collections.USER, ref => ref.where(Roles.Presencial, '==', true)).valueChanges().subscribe(async users => {
      if (users.length > 3 && !this.loading) {

        this.loading = true

        for (let user of users) {
          console.log(`updating user: ${user.email} ${user.uid}`);
          await this.afs.collection(Collections.USER).doc(user.uid).update(payload);
        }

        this.loading = false;
        sub.unsubscribe();
        console.log('setting roles finished');

      }
    })



  }

  async removeRolesToExcludedUsers() {

    this.loading = true;
    const payload = {};

    for (let role of Object.values(Roles)) {
      payload[role] = false
    }

    console.log(payload)

    for (let user of excluded_users) {
      console.log('updating user', user)
      await this.data.updateUserByEmail(user, payload);
    }

    this.loading = false
    console.log('updated', excluded_users.length, 'users')

  }

}
