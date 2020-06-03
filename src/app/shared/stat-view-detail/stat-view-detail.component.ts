import { Component, OnInit, Input } from '@angular/core';
import { StatView, Collections } from 'src/app/app.models';
import { StatsService } from 'src/app/services/stats.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { averageMultiplier } from 'src/app/app.config';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'epsi-stat-view-detail',
  templateUrl: './stat-view-detail.component.html',
  styleUrls: ['./stat-view-detail.component.scss']
})
export class StatViewDetailComponent implements OnInit {

  public _view: StatView
  public chartData: any[]

  @Input()
  public set view(v: StatView) { this.viewChanged(v) }
  public get view(): StatView { return this._view }

  @Input() public uid: string;

  constructor(
    private stats: StatsService,
    private afs: AngularFirestore,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    
  }

  async viewChanged(v: StatView) {

    this._view = v
    if (!v) return

    /*console.log(v, this.uid);
    const cache = await this.stats.computeTimeline(v.includeTags[0], this.uid ? this.uid : this.auth.user.uid)
    /!* await this.afs.doc(`${Collections.STAT_VIEW}/${v.id}`).update({cache}) *!/
    v.cache = cache
    console.log('cache', v.cache)

    if (!v.cache.promedio) {
      v.cache.promedio = v.cache.timeline.map((m: any) => m.promedio).reduce((a, b) => a + b, 0)
      /!* await this.afs.doc(`${Collections.STAT_VIEW}/${v.id}`).update({cache: v.cache}) *!/
    }*/

    this.reloadData(v)

  }

  async reloadData(v: StatView) {
    const cache = await this.stats.computeTimeline(v.includeTags[0], this.uid ? this.uid : this.auth.user.uid)
    v.cache = cache
    v.cache.promedio = v.cache.timeline.map((m: any) => m.promedio).reduce((a, b) => a + b, 0)
    this._view = v;

    this.chartData = [
      {
        name: 'Promedio',
        series: v.cache.timeline.map(m => ({
          name: m.mes.label,
          value: m.promedio * 100
        }))
      }
    ]

    /* await this.afs.doc(`${Collections.STAT_VIEW}/${v.id}`).update({cache: v.cache}) */
  }

}
