import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
const moment = require('moment')
const countdown = require('countdown')
countdown.setLabels(
	' milissegundo| segundo| minuto| hora| día| semana| mes| año| decada| siglo| milenio',
	' milisegundos| segundos| minutos| horas| días| semanas| meses| años| décadas| siglos| milenios',
	' y ',
	', ',
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
    setInterval(() => this.timerLabel = `En ${moment(this.timerDate).countdown().toString()}`, 1000)
  }

  public get hideNavbar(): boolean {
    if (!this.currentUrl) return true
    if (!this.hiddenOn) return true
    return this.hiddenOn.indexOf(this.currentUrl) >= 0
  }

}
