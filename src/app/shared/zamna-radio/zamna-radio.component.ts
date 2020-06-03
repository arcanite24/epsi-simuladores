import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'epsi-zamna-radio',
  templateUrl: './zamna-radio.component.html',
  styleUrls: ['./zamna-radio.component.scss']
})
export class ZamnaRadioComponent implements OnInit {

  @Input() public checked = false;

  constructor() { }

  ngOnInit() {
  }

}
