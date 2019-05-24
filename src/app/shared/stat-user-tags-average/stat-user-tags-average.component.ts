import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User, Collections } from 'src/app/app.models';
import { StatsService } from 'src/app/services/stats.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { sortBy } from 'lodash'
import {DataService} from "../../services/data.service";

@Component({
  selector: 'epsi-stat-user-tags-average',
  templateUrl: './stat-user-tags-average.component.html',
  styleUrls: ['./stat-user-tags-average.component.scss']
})
export class StatUserTagsAverageComponent implements OnInit {

  public user: User

  @Input() public uid: string;

  constructor(
    public auth: AuthService,
    private stats: StatsService,
    private afs: AngularFirestore,
    private data: DataService,
  ) { }

  ngOnInit() {

    if (this.uid) {
      this.loadUser();
    } else {
      this.auth.user$.subscribe(user => {
        if (!user) return
        /* if (!user.average_list) */ this.updateAverageList(user)
        this.user = user
      })
    }

  }

  async loadUser() {
    const user = await this.data.getDocAlt<User>(Collections.USER, this.uid);
    this.updateAverageList(user)
    this.user = user
  }

  async updateAverageList(user: User) {
    const list = await this.stats.computeUserAverageList(user)
    await this.afs.doc(`${Collections.USER}/${user.uid}`).update({average_list: list})
    this.user.average_list = sortBy(list.filter(t => t.promedio <= 0.6 && t.promedio > 0), 'promedio')
  }

}
