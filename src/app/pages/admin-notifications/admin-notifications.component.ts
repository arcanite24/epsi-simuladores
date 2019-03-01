import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';
import moment from 'moment'

@Component({
  selector: 'epsi-admin-notifications',
  templateUrl: './admin-notifications.component.html',
  styleUrls: ['./admin-notifications.component.scss']
})
export class AdminNotificationsComponent implements OnInit {

  public config: CrudTableConfig = {
    collection: Collections.NOTIFICATION,
    headers: [
      {field: 'title', type: 'text', label: 'Título'},
      {field: 'text', type: 'textarea', label: 'Contenido'},
      {field: 'isGlobal', type: 'checkbox', label: '¿Global?', hideOnTable: true},
      /* {field: 'date', type: 'date', label: 'Fecha', customRender: row => moment(row.date).format('LL')}, */
    ],
    fullEdit: true,
    documentDefaults: {
      title: 'Nueva Notificación',
      text: '.',
      isGlobal: false,
      date: new Date().toISOString()
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
