import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Collections, UserStat, ExamResults } from 'src/app/app.models';
import { map, tap } from 'rxjs/operators';
import { averageMultiplier, statRefreshTimeout } from 'src/app/app.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'epsi-stat-user-general-average',
  templateUrl: './stat-user-general-average.component.html',
  styleUrls: ['./stat-user-general-average.component.scss']
})
export class StatUserGeneralAverageComponent implements OnInit {

  public promedio: number
  private canReload: boolean = true

  constructor(
    private afs: AngularFirestore,
    public auth: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.loadInfo()
  }

  loadInfo() {

    this.auth.user$.subscribe(async user => {

      if (!user) return
      const key = `${Collections.USER_STAT}/stat-${user.uid}`
      const stat = await this.afs.doc<UserStat>(key).get().toPromise()

      // TODO: Move this userstat initialization to a Service
      if (!stat.exists) {
        await this.afs.doc<UserStat>(key).set({
          id: key,
          user: user.uid,
          generalAverage: 0
        }, {merge: true})
        this.calculateAverage(user.uid)
      } else {
        this.promedio = stat.data()['generalAverage']
      }

    })

  }

  calculateAverage(uid: string) {

    if (!this.canReload) this.toastr.error('Por favor espera para poder recargar tus resultados...')

    this.afs.collection<ExamResults>(Collections.EXAM_RESULT, ref => ref.where('user', '==', uid))
      .valueChanges()
      .pipe(
        map(results => {
          const total = results.length
          return results.map((r: ExamResults) => r.promedio).reduce((a, b) => a + b, 0) / total * averageMultiplier
        }),
        tap(async (average: number) => {
          this.promedio = average
          this.afs.doc(`${Collections.USER_STAT}/stat-${uid}`).update({generalAverage: average})
        })
      ).subscribe()

    if (!this.auth.isAdmin) {
      this.canReload = false
      setTimeout(() => this.canReload = true, statRefreshTimeout)
    }

  }

}
