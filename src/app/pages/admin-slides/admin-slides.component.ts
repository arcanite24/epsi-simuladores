import { Component, OnInit } from '@angular/core';
import { Slide, Collections } from 'src/app/app.models';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-admin-slides',
  templateUrl: './admin-slides.component.html',
  styleUrls: ['./admin-slides.component.scss']
})
export class AdminSlidesComponent implements OnInit {

  public tempSlide: Slide

  public configSlide: CrudTableConfig = {
    collection: Collections.SLIDE,
    dataSource: this.afs.collection<Slide>(Collections.SLIDE).valueChanges(),
    documentDefaults: {
      name: 'Nueva Presentación',
      desc: '.',
      images: []
    },
    disableEdit: true,
    headers: [
      {field: 'name', type: 'text', label: 'Nombre'},
      {field: 'desc', type: 'textarea', label: 'Descripción'},
      {field: 'cat_name', type: 'text', label: 'Categoría'},
      {field: 'images', type: 'number', label: 'Imágenes', customRender: row => row.images.length}
    ],
    customActions: [
      {iconClasses: 'fa fa-edit', handler: (row) => this.openEditSlide(row)}
    ]
  }

  public configCategory: CrudTableConfig = {
    collection: Collections.SLIDE_CATEGORY,
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
    private modal: NgxSmartModalService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
  }

  openEditSlide(slide: Slide) {
    this.tempSlide = slide
    this.modal.getModal('slideEditModal').open()
  }

}
