import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'epsi-user-roles-panel',
  templateUrl: './user-roles-panel.component.html',
  styleUrls: ['./user-roles-panel.component.scss']
})
export class UserRolesPanelComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

}
