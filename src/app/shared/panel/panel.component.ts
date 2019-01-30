import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'epsi-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() public title: string
  @Input() public showContent: boolean = false

  constructor() { }

  ngOnInit() {
  }

}
