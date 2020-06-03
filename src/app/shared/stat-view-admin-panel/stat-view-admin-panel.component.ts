import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Observable } from 'rxjs';
import { StatView, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-stat-view-admin-panel',
  templateUrl: './stat-view-admin-panel.component.html',
  styleUrls: ['./stat-view-admin-panel.component.scss']
})
export class StatViewAdminPanelComponent implements OnInit {

  public views$: Observable<StatView[]>
  public tempView: StatView

  @Output() public remove: EventEmitter<string> = new EventEmitter();

  constructor(
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {
    this.views$ = this.afs.collection<StatView>(Collections.STAT_VIEW, ref => ref.where('isTimeline', '==', true)).valueChanges()
  }

  async addView() {
    const id = this.afs.createId()
    await this.afs.doc<StatView>(`${Collections.STAT_VIEW}/${id}`).set({
      id,
      name: 'Nueva Vista',
      includeTags: [],
      excludeTags: [],
      isTimeline: true
    })
    this.toastr.success('Vista agregada correctamente, ahora puedes editarla.')
  }

  async removeView(id: string) {
    /*await this.afs.doc(`${Collections.STAT_VIEW}/${id}`).delete()
    this.toastr.success('La vista fue borrada correctamente.')*/
    this.remove.next(id);
  }

  openEditView(view: StatView) {
    this.tempView = view
    this.modal.getModal('viewEditModal').open()
  }

}
