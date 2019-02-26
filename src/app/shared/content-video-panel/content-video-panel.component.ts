import { Component, OnInit, Input } from '@angular/core';
import { Content } from 'src/app/app.models';
import { VgAPI } from 'videogular2/core';
import { Router } from '@angular/router';

@Component({
  selector: 'epsi-content-video-panel',
  templateUrl: './content-video-panel.component.html',
  styleUrls: ['./content-video-panel.component.scss']
})
export class ContentVideoPanelComponent implements OnInit {

  private _seek: number

  @Input() public content: Content
  @Input() public set seekTime(time: number) { this.seekChanged(time) }
  public get seekTime() { return this._seek }

  private videoApi: VgAPI

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  onPlayerReady(api: VgAPI) {
    this.videoApi = api
  }

  seekChanged(time: number) {
    if (!time) return
    this._seek = time
    this.videoApi.play()
    this.videoApi.seekTime(time)
    this._seek = null
  }

}
