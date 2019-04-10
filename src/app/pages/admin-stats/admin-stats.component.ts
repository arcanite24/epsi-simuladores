import { Component, OnInit } from '@angular/core';
import {NgxSmartModalService} from "ngx-smart-modal";
import {ToastrService} from "ngx-toastr";
import {AngularFirestore} from "@angular/fire/firestore";
import {Collections} from "../../app.models";

@Component({
  selector: 'epsi-admin-stats',
  templateUrl: './admin-stats.component.html',
  styleUrls: ['./admin-stats.component.scss']
})
export class AdminStatsComponent implements OnInit {

  public tempId: string

  constructor(
    private modal: NgxSmartModalService,
    private toastr: ToastrService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
  }

  openRemove(id: string) {
    this.tempId = id;
    this.modal.getModal('removeModal').open();
  }

  async removeStat(id: string) {
    this.afs.collection(Collections.STAT_VIEW).doc(id).delete();
    this.toastr.success('Elemento eliminado correctamente.');
    this.modal.getModal('removeModal').close();
  }

}
