import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public navHideRoutes: string[] = [
    '/'
  ]
  
  constructor(
    public router: Router,
    private modal: NgxSmartModalService,
  ) {

    if (window.location.hash) window.location.href = `https://zamnademy.com/exam/demo/${window.location.hash.replace('#/simulador/prueba/', '')}`;

    this.modal

  }

}
