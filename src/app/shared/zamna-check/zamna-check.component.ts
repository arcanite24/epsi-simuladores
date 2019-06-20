import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'epsi-zamna-check',
  templateUrl: './zamna-check.component.html',
  styleUrls: ['./zamna-check.component.scss']
})
export class ZamnaCheckComponent implements OnInit {

  @Input() public checked = false;

  constructor() { }

  ngOnInit() {
  }

}
