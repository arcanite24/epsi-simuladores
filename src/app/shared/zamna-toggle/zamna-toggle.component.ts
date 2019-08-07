import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'epsi-zamna-toggle',
  templateUrl: './zamna-toggle.component.html',
  styleUrls: ['./zamna-toggle.component.scss']
})
export class ZamnaToggleComponent implements OnInit {

  public mode = false;

  constructor() { }

  ngOnInit() {
  }

}
