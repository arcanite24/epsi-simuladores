import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'epsi-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() public type: string = 'default'

  constructor() { }

  ngOnInit() {
  }

}
