import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections, Thread } from 'src/app/app.models';

@Component({
  selector: 'epsi-admin-forum',
  templateUrl: './admin-forum.component.html',
  styleUrls: ['./admin-forum.component.scss']
})
export class AdminForumComponent implements OnInit {

  public configThread: CrudTableConfig = {
    collection: Collections.THREAD,
    fullEdit: true,
    documentDefaults: {
      text: 'Nuevo Hilo',
      date: new Date().toISOString()
    },
    headers: [
      {field: 'text', type: 'textarea', label: 'Contenido del hilo'},
      {field: 'date', type: 'date', label: 'Fecha', noEdit: true},
    ],
  }

  public configCategory: CrudTableConfig = {
    collection: Collections.THREAD_CATEGORY,
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

  constructor() { }

  ngOnInit() {
  }

}
