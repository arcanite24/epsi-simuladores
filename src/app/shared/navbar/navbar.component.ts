import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'epsi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public currentUrl: string

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
  }

  public get hideNavbar(): boolean {
    if (!this.currentUrl) return true
    if (!this.hiddenOn) return true
    return this.hiddenOn.indexOf(this.currentUrl) >= 0
  }

}
