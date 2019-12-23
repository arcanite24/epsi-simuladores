import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'epsi-zona-enarm-panel',
  templateUrl: './zona-enarm-panel.component.html',
  styleUrls: ['./zona-enarm-panel.component.scss']
})
export class ZonaEnarmPanelComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public pay: PaymentService,
    public roles: RolesService,
  ) { }

  ngOnInit() {
  }

  isBlur() {
    return !this.pay.isComplete();
    // if (this.auth.isAdmin) { return false; }
    // if (this.auth.isPremium2020) { return false; }
    // return true;
  }

}
