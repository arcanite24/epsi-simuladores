import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
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

  constructor(
    public auth: AuthService,
    public router: Router
  ) {
    this.router.events.subscribe((res) => { 
      this.currentUrl = this.router.url
    })
  }

  ngOnInit() {
    /* this.timerLabel = `<div class="navbar-timer-label">${countdown(moment(this.timerDate).toDate(), null, ~countdown.MONTHS & ~countdown.MILLISECONDS).toHTML('strong')}</div>` */
    setInterval(() => this.timerLabel = `<div class="navbar-timer-label">${countdown(moment(this.timerDate).toDate(), null, ~countdown.MONTHS & ~countdown.MILLISECONDS).toHTML('strong')}</div>`, 1000)
  }

  public get hideNavbar(): boolean {
    if (!this.currentUrl) return true
    if (!this.hiddenOn) return true
    return this.hiddenOn.indexOf(this.currentUrl) >= 0
  }

}
