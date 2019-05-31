import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { StatView, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'epsi-stat-user-timeline',
  templateUrl: './stat-user-timeline.component.html',
  styleUrls: ['./stat-user-timeline.component.scss']
})
export class StatUserTimelineComponent implements OnInit {

  public views$: Observable<StatView[]>
  public tempView: StatView

  @Input() public uid: string;

  constructor(
    private afs: AngularFirestore,
    private modal: NgxSmartModalService,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.views$ = this.afs.collection<StatView>(Collections.STAT_VIEW, ref => ref.where('isTimeline', '==', true)).valueChanges()
  }

  openViewDetail(view: StatView) {
    this.tempView = view
    this.modal.getModal('viewDetailModal').open()
  }

}
