import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Content, Exam, Collections, ExamTypes } from 'src/app/app.models';
import { VgAPI } from 'videogular2/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, combineAll, take } from 'rxjs/operators';
import { NgxSmartModalService } from 'ngx-smart-modal';

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

  @Output() public openContentExam: EventEmitter<any> = new EventEmitter()

  private videoApi: VgAPI
  public preclase$: Observable<Exam>
  public examId: string

  constructor(
    public router: Router,
    private afs: AngularFirestore,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {
    this.loadPreclase()
  }

  async loadPreclase() {
    const exam = await this.getExamByContentName(this.content.name)
    if (exam) {
      this.examId = exam.id
      this.modal.getModal('preclaseExamModal').open()
    }
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

  async getExamByContentName(name: string): Promise<Exam> {

    const nameExam = await this.afs.collection<Exam>(Collections.EXAM, ref => ref
      .where('name', '==', name))
      .valueChanges()
      .pipe(take(1), map(exams => exams ? exams[0] : null))
      .toPromise()

    if (nameExam) return nameExam

    const contentExam = await this.afs.collection<Exam>(Collections.EXAM, ref => ref
      .where('type', '==', ExamTypes.PRECLASE)
      .where('content.id', '==', this.content.id))
      .valueChanges()
      .pipe(take(1), map(exams => exams ? exams[0] : null))
      .toPromise()

    return contentExam

  }

}
