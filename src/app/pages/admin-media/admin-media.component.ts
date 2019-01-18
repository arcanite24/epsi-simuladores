import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Media } from 'src/app/app.models';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-admin-media',
  templateUrl: './admin-media.component.html',
  styleUrls: ['./admin-media.component.scss']
})
export class AdminMediaComponent implements OnInit {

  public tempMedia: Media

  public configMedia: CrudTableConfig = {
    collection: 'media',
    documentDefaults: {
      name: 'Nuevo Descargable',
      desc: '.',
    },
    disableEdit: true,
    headers: [
      {field: 'name', type: 'text', label: 'Nombre'},
      {field: 'desc', type: 'textarea', label: 'Descripción'},
      {field: 'cat_name', type: 'text', label: 'Categoría'},
      {field: 'url', type: 'text', label: 'Archivo', customHTML: (row) => `<a href="${row.url}">Descargar</a>`}
    ],
    customActions: [
      {iconClasses: 'fa fa-edit', handler: (row) => this.openEditMedia(row)}
    ]
  }

  public configCategory: CrudTableConfig = {
    collection: 'media-cat',
    fullEdit: true,
    documentDefaults: {
      name: 'Nueva Categoría',
      desc: '.'
    },
    headers: [
      {field: 'name', type: 'text', label: 'Nombre'},
      {field: 'desc', type: 'textarea', label: 'Descripción'},
    ]
  }

  constructor(
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {
  }

  openEditMedia(row: Media) {
    this.tempMedia = row
    this.modal.getModal('mediaEditModal').open()
  }

}
