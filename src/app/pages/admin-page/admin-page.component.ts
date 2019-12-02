import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {Collections, EsencialModel, MoodRate, Premium2019Model, Roles, User, ExamResults} from 'src/app/app.models';
import { groupBy } from 'lodash';
import {AngularFirestore} from '@angular/fire/firestore';
import {excluded_users} from '../../app.utils';
import { StatsService } from 'src/app/services/stats.service';
import { averageMultiplier } from 'src/app/app.config';

@Component({
  selector: 'epsi-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  public rates: any[];
  public loading = false;

  public l = false;
  public usersConCompra = localStorage.getItem('usersConCompra');

  constructor(
    private data: DataService,
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {

    this.loadRates();

  }

  async loadRates() {

    // remove
    /* const results = await this.data.getCollectionQuery<ExamResults>(Collections.EXAM_RESULT, ref => ref
      .where('user', '==', 'pcqGrTSEsaNKjiNJieLJOdjbspP2'));

    const total = results.length;
    const avg = results.map((r: ExamResults) => r.promedio).filter(n => !isNaN(n)).reduce((a, b) => a + b, 0) / total * averageMultiplier;
    console.log(avg) */

    const rates = await this.data.getCollection<MoodRate>(Collections.MOOD_RATE);

    if (!rates) { return [] }
    const payload = {};

    const group = groupBy(rates, 'mood');

    for (const [key, value] of Object.entries(group)) {
      payload[key] = {mood: key, total: value.length};
    }

    this.rates = Object.values(payload);

  }

  async setEsencialToPresenciales() {

    const payload = {};

    for (const role of EsencialModel) {
      payload[role] = true;
    }

    console.log(payload);

    const sub = this.afs.collection<User>(Collections.USER, ref => ref
      .where(Roles.Presencial, '==', true)).valueChanges().subscribe(async users => {
      if (users.length > 3 && !this.loading) {

        this.loading = true;

        for (const user of users) {
          console.log(`updating user: ${user.email} ${user.uid}`);
          await this.afs.collection(Collections.USER).doc(user.uid).update(payload);
        }

        this.loading = false;
        sub.unsubscribe();
        console.log('setting roles finished');

      }
    });



  }

  async removeRolesToExcludedUsers() {

    this.loading = true;
    const payload = {};

    for (const role of Object.values(Roles)) {
      payload[role] = false;
    }

    console.log(payload);

    for (const user of excluded_users) {
      console.log('updating user', user);
      await this.data.updateUserByEmail(user, payload);
    }

    this.loading = false;
    console.log('updated', excluded_users.length, 'users');

  }

  async migratePresencialYEsencial() {

    this.loading = true;

    const users: User[] = await this.data.getCollectionAlt<User>(Collections.USER);
    const filteredUsers = users.filter(u => {
      /*if (u.isPresencial) return true
      if (u.isEsencial) return true
      return false*/
      return true;
    });

    const removePayload = {};
    const newRolesPayload = {};

    for (const role of Object.values(Roles)) { removePayload[role] = false; }
    for (const role of Premium2019Model) { newRolesPayload[role] = true; }

    console.log(newRolesPayload);

    for (const user of filteredUsers) {
      console.log('removing all roles for', user.email);
      await this.afs.collection(Collections.USER).doc(user.uid).update(removePayload);
      await this.afs.collection(Collections.USER).doc(user.uid).update(newRolesPayload);
    }

    this.loading = false;
    console.log(JSON.stringify(filteredUsers.map(u => u.email)));

  }

  async loadUserConCompra() {

    this.l = true;

    const users = await this.data.getCollectionAlt<User>(Collections.USER);
    const conCompra = users.filter(user => {
      if (user[Roles.Premium]) { return true; }
      if (user[Roles.Premium2019]) { return true; }
      if (user[Roles.isPremium2020]) { return true; }
      if (user[Roles.isLight2020]) { return true; }
      if (user[Roles.Esencial]) { return true; }
      if (user[Roles.Temprano]) { return true; }
      if (user[Roles.Zamna360_2019]) { return true; }
      if (user[Roles.Esencial360]) { return true; }
      if (user[Roles.Premium360]) { return true; }
      if (user[Roles.Presencial]) { return true; }
      return false;
    });

    this.usersConCompra = conCompra.length.toString();
    localStorage.setItem('usersConCompra', this.usersConCompra);
    this.l = false;

  }

}
