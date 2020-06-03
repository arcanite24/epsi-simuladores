import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Observable } from 'rxjs';
import { StatView, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-stat-structure-admin-panel',
  templateUrl: './stat-structure-admin-panel.component.html',
  styleUrls: ['./stat-structure-admin-panel.component.scss']
})
export class StatStructureAdminPanelComponent implements OnInit {

  public views$: Observable<StatView[]>
  public tempView: StatView

  @Output() public remove: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {
    this.views$ = this.afs.collection<StatView>(Collections.STAT_VIEW, ref => ref.where('isTimeline', '==', false)).valueChanges()
  }

  async addView() {
    const id = this.afs.createId()
    await this.afs.doc<StatView>(`${Collections.STAT_VIEW}/${id}`).set({
      id,
      name: 'Nueva Estructura',
      includeTags: [],
      excludeTags: [],
      isTimeline: false
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
    this.modal.getModal('viewEditModal2').open()
  }

}
