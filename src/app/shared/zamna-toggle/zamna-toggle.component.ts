import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'epsi-zamna-toggle',
  templateUrl: './zamna-toggle.component.html',
  styleUrls: ['./zamna-toggle.component.scss'],
})
export class ZamnaToggleComponent implements OnInit {

  @Input() public leftText = 'No';
  @Input() public rightText = 'Si';

  @Output() public change: EventEmitter<boolean> = new EventEmitter();

  public mode = false;

  constructor() {}

  ngOnInit() {}

  emitChange() {
    this.mode = !this.mode;
    this.change.next(this.mode);
  }

}
