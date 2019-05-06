import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import {StatView, Collections, User} from 'src/app/app.models';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { StatsService } from 'src/app/services/stats.service';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'epsi-stat-user-performance',
  templateUrl: './stat-user-performance.component.html',
  styleUrls: ['./stat-user-performance.component.scss']
})
export class StatUserPerformanceComponent implements OnInit {

  public view: any[] = undefined
  public results: {name: string, value: number}[] = []

  @Input() public user: User

  constructor(
    private data: DataService,
    private stats: StatsService,
    private auth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.loadInfo()
  }

  async loadInfo() {

    const views = await this.data.getCollectionQuery<StatView>(Collections.STAT_VIEW, ref => ref.where('isTimeline', '==', false))
    const user = this.user ? this.user : this.auth.auth.currentUser;

    let results = []

    for (const v of views.filter(v => !v.parent)) {
      const tag = v.includeTags[0]
      const avg = await this.stats.computeUserTagAverage(tag, user.uid)
      results.push({name: v.name, value: isNaN(avg) ? 0 : avg * 100})
    }

    console.log(results)
    this.results = results

  }

}
