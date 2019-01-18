import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Gallery } from 'src/app/app.models';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-admin-galleries',
  templateUrl: './admin-galleries.component.html',
  styleUrls: ['./admin-galleries.component.scss']
})
export class AdminGalleriesComponent implements OnInit {

  public tempGallery: Gallery

  public configGallery: CrudTableConfig = {
    collection: 'gallery',
    disableEdit: true,
    documentDefaults: {
      name: 'Nueva Galería',
      desc: '.',
      fotos: []
    },
    headers: [
      {field: 'name', type: 'text', label: 'Nombre'},
      {field: 'desc', type: 'textarea', label: 'Descripción'},
      {field: 'fotos', type: 'number', label: 'Fotos', customRender: (row, i) => row.fotos.length}
    ],
    customActions: [
      {iconClasses: 'fa fa-edit', handler: (row, i) => this.openEditGallery(row)}
    ]
  }

  public configCategory: CrudTableConfig = {
    collection: 'gallery-cat',
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

  openEditGallery(gallery: Gallery) {
    this.tempGallery = gallery
    this.modal.getModal('galleryEditModal').open()
  }

}
