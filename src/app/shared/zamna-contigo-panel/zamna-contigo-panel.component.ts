import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'epsi-zamna-contigo-panel',
  templateUrl: './zamna-contigo-panel.component.html',
  styleUrls: ['./zamna-contigo-panel.component.scss']
})
export class ZamnaContigoPanelComponent implements OnInit {

  constructor(
    public auth: AuthService,
  ) { }

  ngOnInit() {
  }

}
