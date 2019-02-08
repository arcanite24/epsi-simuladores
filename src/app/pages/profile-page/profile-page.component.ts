import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'epsi-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor(
    private stats: StatsService
  ) { }

  ngOnInit() {
    this.stats.modifyCounter('visitas_perfil', 1)
  }

}
