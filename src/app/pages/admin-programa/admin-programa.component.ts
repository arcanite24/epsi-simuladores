import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections, Programa } from 'src/app/app.models';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-admin-programa',
  templateUrl: './admin-programa.component.html',
  styleUrls: ['./admin-programa.component.scss']
})
export class AdminProgramaComponent implements OnInit {

  public tempPrograma: Programa

  public config: CrudTableConfig = {
    collection: Collections.PROGRAMA,
    fullEdit: true,
    disableEdit: true,
    headers: [
      {field: 'name', type: 'text', label: 'Nombre'},
      {field: 'text', type: 'textarea', label: 'Contenido'},
    ],
    documentDefaults: {
      name: 'Nuevo Programa',
      text: '',
      links: [],
      parent: null,
      unlockedBy: null,
    },
    customActions: [
      {iconClasses: 'fa fa-edit', handler: row => this.openEdit(row)}
    ]
  }

  constructor(
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {
  }

  openEdit(p: Programa) {
    this.tempPrograma = p
    this.modal.getModal('programaEditModal').open()
  }

}
