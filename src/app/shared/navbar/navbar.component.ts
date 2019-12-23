import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Collections, Notification, User, UserTimer } from 'src/app/app.models';
import { take, map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { PaymentService } from 'src/app/services/payment.service';
import { Subscription } from '../../app.models';
import { orderBy } from 'lodash';
const moment = require('moment');
const countdown = require('countdown');
countdown.setLabels(
	' <small>milissegundo</small>| <small>segundo</small>| <small>minuto</small>| <small>hora</small>| <small>día</small>| <small>semana</small>| <small>mes</small>| <small>año</small>| <small>decada</small>| <small>siglo</small>| <small>milenio</small>',
	' <small>milisegundos</small>| <small>segundos</small>| <small>minutos</small>| <small>horas</small>| <small>días</small>| <small>semanas</small>| <small>meses</small>| <small>años</small>| <small>décadas</small>| <small>siglos</small>| <small>milenios</small>',
	' ',
	' ',
  'ahora');
moment.locale('es');
require('moment-countdown');

@Component({
  selector: 'epsi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public currentUrl: string;

  public timerDate = '2019-04-15T12:30';
  public timerLabel = '';
  public userTimerLabel = '';

  private hiddenOn: string[] = ['/'];

  private readNotis: string[];
  public notReadCount = 0;

  public userTimer: UserTimer;
  public userTimerDate: string;

  constructor(
    public auth: AuthService,
    public router: Router,
    public payment: PaymentService,
    private afs: AngularFirestore,
    private data: DataService,
    private modal: NgxSmartModalService,
  ) {
    this.router.events.subscribe(res => {
      this.currentUrl = this.router.url;
    });
  }

  ngOnInit() {
    this.loadNotis();

    this.auth.user$.subscribe(user => {
      if (user && !this.userTimer) {
        this.loadUserTimer(user);
        this.loadTimer(user.uid);
      }
    });

    /* setInterval(
      () =>
        (this.timerLabel = `
    <div class="navbar-timer-label">
      <div class="flex-center" style="margin-bottom:-1rem;margin-top:-1rem;"><small class="m-0 p-0">Inicio Oficial del Curso</small></div>
      ${countdown(
        moment(this.timerDate).toDate(),
        null,
        ~countdown.WEEKS & ~countdown.MILLISECONDS & ~countdown.SECONDS
      ).toHTML('strong')}
    </div>`),
      1000
    ); */
  }

  public get hideNavbar(): boolean {
    if (!this.currentUrl) {
      return true;
    }
    if (!this.hiddenOn) {
      return true;
    }
    return this.hiddenOn.indexOf(this.currentUrl) >= 0;
  }

  async loadTimer(uid: string) {

    const subs = await this.data.getCollectionQueryAlt<Subscription>(Collections.Subscription, 'user.uid', '==', uid);
    console.log(subs);

    if (subs && subs.length > 0) {

      const sub = orderBy(subs, 'limit').reverse()[0];
      console.log(sub)

      setInterval(
        () => {

          const down = countdown(
            moment(sub.limit).toDate(),
            null,
            // tslint:disable-next-line: no-bitwise
            countdown.MONTHS | countdown.DAYS
          );

          this.timerLabel = `
            <div class="navbar-timer-label">
              <div class="flex-center" style="margin-bottom:-1rem;margin-top:-1rem;">
                <small class="m-0 p-0">Finaliza tu suscripcion el:</small>
              </div>
              ${down.months > 0 ? `<span>${down.months} <small>meses</small></span>` : null}
              ${down.days > 0 ? `<span>${down.days} <small>días</small></span>` : null}
            </div>`;

        },
        1000
      );
    }

  }

  async loadUserTimer(user: User) {
    const timer = await this.data.getDocAlt<UserTimer>(Collections.UserTimer, user.uid);
    if (timer.date) {
      this.userTimer = timer;
      setInterval(
        () => {

          const down = countdown(
            moment(timer.date).toDate(),
            null,
            // tslint:disable-next-line: no-bitwise
            countdown.MONTHS | countdown.DAYS
          );

          this.userTimerLabel = `
            <div class="navbar-timer-label">
              <div class="flex-center" style="margin-bottom:-1rem;margin-top:-1rem;">
                <small class="m-0 p-0">Fecha de tu examen:</small>
              </div>
              ${down.months > 0 ? `<span>${down.months} <small>meses</small></span>` : null}
              ${down.days > 0 ? `<span>${down.days} <small>días</small></span>` : null}
            </div>`;

        },
        1000
      );
    }
  }

  openTimerSelector() {
    this.modal.getModal('userTimeSelector').open();
  }

  openProfile() {
    if (this.payment.isComprado()) {
      this.router.navigate(['/profile']);
    } else {
      this.payment.redirectToPayment();
    }
  }

  async setUserTimer(date: string) {
    this.afs.collection(Collections.UserTimer).doc(this.auth.user.uid).set({
      id: this.auth.user.uid,
      date,
      user: this.auth.user.uid,
    });
    this.modal.getModal('userTimeSelector').close();
    this.loadUserTimer(this.auth.user);
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
          this.afs
            .collection<Notification>(Collections.NOTIFICATION, ref =>
              ref.where('isGlobal', '==', true)
            )
            .valueChanges(),
          this.afs
            .collection<Notification>(Collections.NOTIFICATION, ref =>
              ref.where('user', '==', _user.uid)
            )
            .valueChanges(),
          this.afs
            .collection(Collections.USER)
            .doc<User>(_user.uid)
            .valueChanges()
        )
          .pipe(
            map(([global, local, user]) => {
              return {
                notis: [...global, ...local],
                read: user.completedTasks ? user.completedTasks : []
              };
            })
          )
          .subscribe(info => {
            let counter = 0;

            for (const noti of info.notis) {
              if (!info.read.includes(noti.id)) {
                counter++;
              }
            }

            this.notReadCount = counter;
          });
      }
    });
  }
}
