import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'epsi-admin-tile',
  templateUrl: './admin-tile.component.html',
  styleUrls: ['./admin-tile.component.scss']
})
export class AdminTileComponent implements OnInit {

  @Input() public title: string
  @Input() public icon: string
  @Input() public page: string = '/admin'

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

}
