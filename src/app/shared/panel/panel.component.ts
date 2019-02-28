import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'epsi-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() public title: string
  @Input() public showContent: boolean = true
  @Input() public blur: boolean = false
  @Input() public img: string
  @Input() public height: string

  constructor() { }

  ngOnInit() {
  }

}
