import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'epsi-zona-enarm-panel',
  templateUrl: './zona-enarm-panel.component.html',
  styleUrls: ['./zona-enarm-panel.component.scss']
})
export class ZonaEnarmPanelComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  isBlur() {
    if (this.auth.isAdmin) return false
    if (this.auth.isZamna360_2019) return true
    return true
  }

}
