import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { User, Collections } from 'src/app/app.models';
import { take } from 'rxjs/operators';
import { StatsService } from 'src/app/services/stats.service';
import { DataService } from 'src/app/services/data.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { LoadTopUsers } from 'src/app/reducers/zamnademy.reducer';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'epsi-top-users-panel',
  templateUrl: './top-users-panel.component.html',
  styleUrls: ['./top-users-panel.component.scss']
})
export class TopUsersPanelComponent implements OnInit {

  public users: User[];

  constructor(
    public auth: AuthService,
    public pay: PaymentService,
    private afs: AngularFirestore,
    private stats: StatsService,
    private data: DataService,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.loadTopUsers();

    const dice = Math.random();
    if (dice <= 0.2) { this.reloadUsers(); } else { console.log('u lucky bitch, not updating top users panel'); }
  }

  async loadTopUsers() {

    const topUsers = await this.store.select(store => store.zamna.topUsers)
      .pipe(take(1))
      .toPromise();
    console.log('topUsers', topUsers);

    if (!topUsers || topUsers.length <= 0) {
      const users = await this.getTopUsers();
      console.log(users);
      this.store.dispatch(new LoadTopUsers(users));
      this.users = users;
    } else {
      this.users = topUsers;
    }

  }

  async getTopUsers() {

    const users = await this.afs.collection<User>(Collections.USER, ref => ref
      .where('promedio', '>', 0)
      .orderBy('promedio', 'desc')
      .limit(5))
      .valueChanges()
      .pipe(take(1))
      .toPromise();

    return users;

  }

  async reloadUsers() {

    /* const users: User[] = await this.afs.collection<User>(Collections.USER).valueChanges().pipe(take(1)).toPromise(); */
    const users: User[] = await this.data.getCollectionAlt<User>(Collections.USER);
    const qa = users.filter(user => !!user.uid).map(user => this.stats.cloudComputeUserAverage(user.uid, true));

    const res = await Promise.all(qa);
    console.log(res);

  }

}
