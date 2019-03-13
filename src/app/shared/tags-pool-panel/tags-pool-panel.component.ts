import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'epsi-tags-pool-panel',
  templateUrl: './tags-pool-panel.component.html',
  styleUrls: ['./tags-pool-panel.component.scss']
})
export class TagsPoolPanelComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

}
