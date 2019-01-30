import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User, Collections } from 'src/app/app.models';
import { take } from 'rxjs/operators';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'epsi-top-users-panel',
  templateUrl: './top-users-panel.component.html',
  styleUrls: ['./top-users-panel.component.scss']
})
export class TopUsersPanelComponent implements OnInit {

  public users$: Observable<User[]>

  constructor(
    public auth: AuthService,
    private afs: AngularFirestore,
    private stats: StatsService
  ) { }

  ngOnInit() {

    this.users$ = this.afs.collection<User>(Collections.USER, ref => ref
      .where('promedio', '>', 0)
      .orderBy('promedio', 'desc')
      .limit(5))
      .valueChanges()

  }

  async reloadUsers() {
    
    const users: User[] = await this.afs.collection<User>(Collections.USER).valueChanges().pipe(take(1)).toPromise()

    for (const user of users) {
      const promedio = await this.stats.computeUserAverage(user.uid)
      console.log(user.displayName, promedio)
    }

  }

}
