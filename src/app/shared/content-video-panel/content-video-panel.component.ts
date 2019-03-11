import { Component, OnInit, Input } from '@angular/core';
import { Content, Exam, Collections } from 'src/app/app.models';
import { VgAPI } from 'videogular2/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

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
  public preclase$: Observable<Exam>

  constructor(
    public router: Router,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.getExamByContentName(this.content.name).subscribe(exam => exam ? this.router.navigate(['/exam/preclase', exam.id]) : null)
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

  getExamByContentName(name: string): Observable<Exam> {
    return this.afs.collection<Exam>(Collections.EXAM, ref => ref
      .where('name', '==', name))
      .valueChanges()
      .pipe(map(exams => exams ? exams[0] : null))
  }

}
