import { Component, OnInit, Input } from '@angular/core';
import { Content } from 'src/app/app.models';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'epsi-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.scss']
})
export class ContentItemComponent implements OnInit {

  @Input() public item: Content
  @Input() public blur: boolean = false
  @Input() public isPrograma: boolean = false

  constructor(
    public router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  get unlocked() {

    if (!this.auth.loggedIn) return false
    if (!this.item.roles) return true
    if (this.item.roles.length <= 0) return true

    const user = this.auth.user

    for (const role of this.item.roles) {
      if (!user[role]) return false
      if (user[role] === false) return false
    }

    return true

  }

}
