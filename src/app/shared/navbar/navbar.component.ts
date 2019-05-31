import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Collections, Notification, User } from 'src/app/app.models';
import { take, map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
const moment = require('moment')
const countdown = require('countdown')
countdown.setLabels(
	' <small>milissegundo</small>| <small>segundo</small>| <small>minuto</small>| <small>hora</small>| <small>día</small>| <small>semana</small>| <small>mes</small>| <small>año</small>| <small>decada</small>| <small>siglo</small>| <small>milenio</small>',
	' <small>milisegundos</small>| <small>segundos</small>| <small>minutos</small>| <small>horas</small>| <small>días</small>| <small>semanas</small>| <small>meses</small>| <small>años</small>| <small>décadas</small>| <small>siglos</small>| <small>milenios</small>',
	' ',
	' ',
	'ahora');
moment.locale('es')
require('moment-countdown')

@Component({
  selector: 'epsi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public currentUrl: string

  public timerDate: string = '2019-04-15T12:30'
  public timerLabel: string = ''

  private hiddenOn: string[] = [
    '/'
  ]

  private readNotis: string[]
  public notReadCount: number = 0

  constructor(
    public auth: AuthService,
    public router: Router,
    private afs: AngularFirestore
  ) {
    this.router.events.subscribe((res) => { 
      this.currentUrl = this.router.url
    })
  }

  ngOnInit() {

    this.loadNotis()

    /* this.timerLabel = `<div class="navbar-timer-label">${countdown(moment(this.timerDate).toDate(), null, ~countdown.MONTHS & ~countdown.MILLISECONDS).toHTML('strong')}</div>` */
    /* this.timerLabel = this.timerLabel = `
    <div class="navbar-timer-label">
      <div class="flex-center" style="margin-bottom:-1rem;margin-top:-1rem;"><small class="m-0 p-0">Inicio Oficial del Curso</small></div>
      ${countdown(moment(this.timerDate).toDate(), null, ~countdown.MONTHS & ~countdown.MILLISECONDS).toHTML('strong')}
    </div>` */
    setInterval(() => this.timerLabel = `
    <div class="navbar-timer-label">
      <div class="flex-center" style="margin-bottom:-1rem;margin-top:-1rem;"><small class="m-0 p-0">Inicio Oficial del Curso</small></div>
      ${countdown(moment(this.timerDate).toDate(), null, ~countdown.WEEKS & ~countdown.MILLISECONDS & ~countdown.SECONDS).toHTML('strong')}
    </div>`, 1000)

  }

  public get hideNavbar(): boolean {
    if (!this.currentUrl) return true
    if (!this.hiddenOn) return true
    return this.hiddenOn.indexOf(this.currentUrl) >= 0
  }

  /* private async loadNotis() {

    this.afs.collection<Notification>(Collections.NOTIFICATION)
      .valueChanges()
      .subscribe(notis => {

        let counter = 0

        for (const noti of notis) {
          if (!this.readNotis) return this.notReadCount = 0
          if (this.readNotis.indexOf(noti.id) < 0) counter++
        }

        this.notReadCount = counter
        
      })

    this.auth.user$.subscribe(_user => {
      if (_user) {
        this.afs.collection(Collections.USER).doc<User>(_user.uid).valueChanges().subscribe(async user => {

          this.readNotis = user.completedTasks
          const notis = await this.afs.collection<Notification>(Collections.NOTIFICATION).valueChanges().pipe(take(1)).toPromise()

          let counter = 0

          for (const noti of notis) {
            if (!this.readNotis) return this.notReadCount = 0
            if (this.readNotis.indexOf(noti.id) < 0) counter++
          }

          this.notReadCount = counter


        })
      }
    })

  } */

  private loadNotis() {
    this.auth.user$.subscribe(_user => {
      if (_user) {

        combineLatest(
          this.afs.collection<Notification>(Collections.NOTIFICATION, ref => ref.where('isGlobal', '==', true)).valueChanges(),
          this.afs.collection<Notification>(Collections.NOTIFICATION, ref => ref.where('user', '==', _user.uid)).valueChanges(),
          this.afs.collection(Collections.USER).doc<User>(_user.uid).valueChanges(),
        ).pipe(
          map(([global, local, user]) => {
            return {
              notis: [...global, ...local],
              read: user.completedTasks ? user.completedTasks : []
            }
          })
        ).subscribe(info => {

          let counter = 0

          for (const noti of info.notis) {
            if (!info.read.includes(noti.id)) counter++
          }

          this.notReadCount = counter

        })

      }
    })
  }

}
