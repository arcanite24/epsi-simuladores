import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User, Collections, Roles, Subscription } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import moment from 'moment';

@Component({
  selector: 'epsi-admin-migration2020',
  templateUrl: './admin-migration2020.component.html',
  styleUrls: ['./admin-migration2020.component.scss']
})
export class AdminMigration2020Component implements OnInit {

  public premium2020: User[];
  public log: { date: string, text: string }[] = [];
  public loader = false;

  constructor(
    private data: DataService,
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
    this.loadPremium2020();
  }

  isPremium(): boolean {
    return true;
  }

  async loadPremium2020() {
    this.premium2020 = await this.data.getCollectionQueryAlt<User>(Collections.USER, Roles.isPremium2020, '==', true);
  }

  async loadUsers() {
    return this.data.getCollectionAlt<User>(Collections.USER);
  }

  async grantPremium() {

    const start = Date.now();
    const subscription = moment().add(1, 'year').subtract(2, 'weeks').toISOString();
    this.loader = true;

    this.log.push({ date: new Date().toISOString(), text: 'Loading all users...' });
    const users = await this.loadUsers();
    this.log.push({ date: new Date().toISOString(), text: `Loaded ${users.length} users` });

    for (const user of users) {
      if (user && user.uid) {

        await this.afs.collection(Collections.USER).doc<User>(user.uid).update({
          [Roles.isPremium2020]: true,
          [Roles.isMedicinaInterna2020]: true,
          [Roles.isPediatria2020]: true,
          [Roles.isGineco2020]: true,
          [Roles.isCirugia2020]: true,
          [Roles.isUrgencias2020]: true,
          subscription,
        });

        this.log.push({ date: new Date().toISOString(), text: `Granted ${Roles.isPremium2020} to ${user.displayName}
          and subscription set to ${subscription}` });

        const sub: Subscription = {
          id: this.afs.createId(),
          user,
          roles: [
            Roles.isPremium2020,
            Roles.isMedicinaInterna2020,
            Roles.isPediatria2020,
            Roles.isGineco2020,
            Roles.isCirugia2020,
            Roles.isUrgencias2020,
          ],
          limit: subscription,
          date: new Date().toISOString(),
          isManual: true,
        };

        await this.afs.collection(Collections.Subscription).doc(sub.id).set({ ...sub });

        this.log.push({
          date: new Date().toISOString(), text: `Added subscription model to ${user.displayName}
          and set to ${subscription}`
        });

      }
    }

    const end = Date.now() - start;

    this.log.push({ date: new Date().toISOString(), text: `Granted ${Roles.isPremium2020} in ${end / 1000}s` });
    this.loader = false;

  }

  async removePremiumForNew() {

    const start = Date.now();
    const subscription = moment().add(1, 'year').subtract(2, 'weeks').toISOString();
    this.loader = true;

    const oldRoles = [
      Roles.Esencial,
      Roles.Premium,
      Roles.Temprano,
      Roles.Premium2019,
      Roles.Zamna360_2019,
      Roles.Esencial360,
      Roles.Premium360,
      Roles.Presencial,
      Roles.isLight2020,
    ];

    this.log.push({ date: new Date().toISOString(), text: 'Loading all users...' });
    let users = await this.loadUsers();
    users = users.filter(user => {
      for (const role of oldRoles) {
        if (user[role]) {
          return false;
        }
        return true;
      }
    });
    this.log.push({ date: new Date().toISOString(), text: `Loaded ${users.length} users` });

    for (const user of users) {
      if (user && user.uid) {

        await this.afs.collection(Collections.USER).doc<User>(user.uid).update({
          [Roles.isPremium2020]: false,
          [Roles.isMedicinaInterna2020]: false,
          [Roles.isPediatria2020]: false,
          [Roles.isGineco2020]: false,
          [Roles.isCirugia2020]: false,
          [Roles.isUrgencias2020]: false,
          subscription: null,
        });

        this.log.push({
          date: new Date().toISOString(), text: `Removed ${Roles.isPremium2020} to ${user.displayName}
          and subscription set to NULL`
        });

        const subs = await this.data.getCollectionQueryAlt<Subscription>(Collections.Subscription, 'user', '==', user.uid);

        for (const sub of subs) {
          await this.afs.collection(Collections.Subscription).doc(sub.id).delete();
          this.log.push({
            date: new Date().toISOString(), text: `Deleted sub "${sub.id}" from ${user.displayName}`
          });
        }

        this.log.push({
          date: new Date().toISOString(), text: `Deleted all subscriptions from ${user.displayName}`
        });

      }
    }

    const end = Date.now() - start;

    this.log.push({ date: new Date().toISOString(), text: `Granted ${Roles.isPremium2020} in ${end / 1000}s` });
    this.loader = false;

  }

}
