import { Component, OnInit, Input } from '@angular/core';
import { StatView, Collections, User } from 'src/app/app.models';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap, take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'epsi-stat-structure-item',
  templateUrl: './stat-structure-item.component.html',
  styleUrls: ['./stat-structure-item.component.scss']
})
export class StatStructureItemComponent implements OnInit {

  private children$: Observable<StatView[]>
  public children: StatView[] = []
  public haveChildren: boolean = false
  public showChildren: boolean = false

  public promedio: number

  @Input() public view: StatView
  @Input() public user: string;

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private stats: StatsService
  ) { }

  ngOnInit() {

    if (!this.view) return
    this.children$ = this.afs.collection<StatView>(Collections.STAT_VIEW, ref => ref
      .where('parent', '==', this.view.id))
      .valueChanges()
      .pipe(
        tap(children => {
          this.haveChildren = children.length > 0
          if (this.haveChildren) this.children = children
        })
      )

    this.children$.subscribe() 

    this.auth.user$.subscribe(async _user => {
      if (!_user) return
      if (this.promedio) return
      const tag = this.view.includeTags[0]
      await this.loadTagPromedio(tag, this.user ? this.user : _user.uid)
    })

  }

  async loadTagPromedio(tag: string, uid: string) {
    const promedio = await this.stats.computeUserTagAverage(tag, uid)
    await this.afs.doc(`${Collections.USER}/${uid}`).set({structure: {[tag]: promedio}}, {merge: true})
    this.promedio = isNaN(promedio) ? 0 : promedio
    console.log(tag, promedio)
  }

}
