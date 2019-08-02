import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User, Collections } from 'src/app/app.models';
import { take } from 'rxjs/operators';
import { StatsService } from 'src/app/services/stats.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'epsi-top-users-panel',
  templateUrl: './top-users-panel.component.html',
  styleUrls: ['./top-users-panel.component.scss']
})
export class TopUsersPanelComponent implements OnInit {

  public users$: Observable<User[]>;

  constructor(
    public auth: AuthService,
    private afs: AngularFirestore,
    private stats: StatsService,
    private data: DataService,
  ) { }

  ngOnInit() {

    this.users$ = this.afs.collection<User>(Collections.USER, ref => ref
      .where('promedio', '>', 0)
      .orderBy('promedio', 'desc')
      .limit(5))
      .valueChanges();

    const dice = Math.random();

    if (dice <= 0.2) { this.reloadUsers(); } else { console.log('u lucky bitch, not updating top users panel'); }

  }

  async reloadUsers() {

    /* const users: User[] = await this.afs.collection<User>(Collections.USER).valueChanges().pipe(take(1)).toPromise(); */
    const users: User[] = await this.data.getCollectionAlt<User>(Collections.USER);
    const qa = users.filter(user => !!user.uid).map(user => this.stats.cloudComputeUserAverage(user.uid, true));

    const res = await Promise.all(qa);
    console.log(res);

  }

}
