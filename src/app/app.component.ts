import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  ) {
  }

}
