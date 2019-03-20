import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User, Collections } from 'src/app/app.models';
import { StatsService } from 'src/app/services/stats.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { sortBy } from 'lodash'

@Component({
  selector: 'epsi-stat-user-tags-average',
  templateUrl: './stat-user-tags-average.component.html',
  styleUrls: ['./stat-user-tags-average.component.scss']
})
export class StatUserTagsAverageComponent implements OnInit {

  public user: User

  constructor(
    public auth: AuthService,
    private stats: StatsService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if (!user) return
      /* if (!user.average_list) */ this.updateAverageList(user)
      this.user = user
    })
  }

  async updateAverageList(user: User) {
    const list = await this.stats.computeUserAverageList(user)
    await this.afs.doc(`${Collections.USER}/${user.uid}`).update({average_list: list})
    this.user.average_list = sortBy(list.filter(t => t.promedio <= 0.6), 'promedio')
  }

}
