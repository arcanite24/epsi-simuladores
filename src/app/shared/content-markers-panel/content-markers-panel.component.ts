import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Content, Marker } from 'src/app/app.models';

@Component({
  selector: 'epsi-content-markers-panel',
  templateUrl: './content-markers-panel.component.html',
  styleUrls: ['./content-markers-panel.component.scss']
})
export class ContentMarkersPanelComponent implements OnInit {

  @Input() public content: Content
  @Output() public seek: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  markerClicked(marker: Marker) {
    this.seek.next(
      (marker.time.hour * 60 * 60) +
      (marker.time.minute * 60) +
      marker.time.second
    )
  }

}
