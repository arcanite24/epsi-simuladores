import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'epsi-stat-user-performance',
  templateUrl: './stat-user-performance.component.html',
  styleUrls: ['./stat-user-performance.component.scss']
})
export class StatUserPerformanceComponent implements OnInit {

  public view: any[] = undefined

  constructor() { }

  ngOnInit() {
  }

}
