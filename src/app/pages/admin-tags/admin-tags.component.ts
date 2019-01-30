import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-admin-tags',
  templateUrl: './admin-tags.component.html',
  styleUrls: ['./admin-tags.component.scss']
})
export class AdminTagsComponent implements OnInit {

  public tempTag: string

  public config: CrudTableConfig = {
    collection: Collections.TAG,
    headers: [
      {field: 'value', type: 'text'},
      {field: 'display', type: 'text'},
    ],
    disableAdd: true
  }

  constructor(
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {
  }

  async addTag(text: string) {
    if (!text) return this.toastr.error('Ingresa un texto para el tag...')
    const id = this.afs.createId()
    await this.afs.doc(`${Collections.TAG}/${id}`).set({
      id,
      value: text,
      display: text
    })
    this.toastr.success('Tag agregado correctamente.')
    this.modal.getModal('tagAddModal').close()
  }

}
