import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';
import * as moment from 'moment'

@Component({
  selector: 'epsi-admin-asesorias',
  templateUrl: './admin-asesorias.component.html',
  styleUrls: ['./admin-asesorias.component.scss']
})
export class AdminAsesoriasComponent implements OnInit {

  public config: CrudTableConfig = {
    collection: Collections.ASESORIA,
    fullEdit: true,
    headers: [
      {field: 'name', type: 'text', label: 'Nombre'},
      {field: 'desc', type: 'textarea', label: 'Descripción'},
      {field: 'url', type: 'text', label: 'URL'},
      {field: 'date', type: 'date', label: 'Fecha', customRender: row => row.date ? moment(row.date).format('LL') : '-'}
    ],
    documentDefaults: {
      name: 'Nueva Asesoría',
      desc: '.',
      url: null,
      date: new Date().toISOString(),
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
