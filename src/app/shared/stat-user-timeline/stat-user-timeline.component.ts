import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StatView, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-stat-user-timeline',
  templateUrl: './stat-user-timeline.component.html',
  styleUrls: ['./stat-user-timeline.component.scss']
})
export class StatUserTimelineComponent implements OnInit {

  public views$: Observable<StatView[]>
  public tempView: StatView

  constructor(
    private afs: AngularFirestore,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {
    this.views$ = this.afs.collection<StatView>(Collections.STAT_VIEW).valueChanges()
  }

  openViewDetail(view: StatView) {
    this.tempView = view
    this.modal.getModal('viewDetailModal').open()
  }

}
