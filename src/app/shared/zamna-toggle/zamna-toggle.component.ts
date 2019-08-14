import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'epsi-zamna-toggle',
  templateUrl: './zamna-toggle.component.html',
  styleUrls: ['./zamna-toggle.component.scss'],
})
export class ZamnaToggleComponent implements OnInit {
  @Input() public leftText = 'No';
  @Input() public rightText = 'Si';

  public mode = false;

  constructor() {}

  ngOnInit() {}
}
