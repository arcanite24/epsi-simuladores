import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {Collections, EsencialModel, MoodRate, Premium2019Model, Roles, User, Stat} from 'src/app/app.models';
import { groupBy } from 'lodash';
import {AngularFirestore} from '@angular/fire/firestore';
import {excluded_users} from '../../app.utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'epsi-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  public rates: any[];
  public loading = false;

  public stats: Observable<Stat[]> = this.afs.collection<Stat>(Collections.Stat).valueChanges();

  public userStats = {
    uni: '',
  };

  constructor(
    private data: DataService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.loadRates();
    this.loadUserProfiles();
  }

  async loadRates() {

    const rates = await this.data.getCollection<MoodRate>(Collections.MOOD_RATE);

    if (!rates) { return [] }
    const payload = {};

    const group = groupBy(rates, 'mood');

    for (const [key, value] of Object.entries(group)) {
      payload[key] = {mood: key, total: value.length};
    }

    this.rates = Object.values(payload);

  }

  async loadUserProfiles() {
    const users = await this.data.getCollectionAlt<User>(Collections.USER);
    const uni = users.filter(u => u.entrar_uni).map(u => u.entrar_uni);
    this.userStats.uni = `Entrar a la uni: si:${uni.filter(tag => tag === 'si').length} no:${uni.filter(tag => tag === 'no').length}`;
  }

  async setEsencialToPresenciales() {

    const payload = {};

    for (const role of EsencialModel) {
      payload[role] = true;
    }

    console.log(payload);

    const sub = this.afs.collection<User>(Collections.USER, ref => ref.where(Roles.Presencial, '==', true))
      .valueChanges().subscribe(async users => {
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

  async exportEntrarUni() {

    const users = await this.data.getCollectionQueryAlt<User>(Collections.USER, 'entrar_uni', '==', 'si');
    const csvData = users.map(user => `${user.email},${user.displayName}`).join('\n');

    const exportedFilenmae = `2guia-users-entrar-uni-si-${Date.now()}.csv`;

    const blob = new Blob([csvData], { type: 'text/csvcharset=utf-8' });
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
      const link = document.createElement('a');
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', exportedFilenmae);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }

  }

}
