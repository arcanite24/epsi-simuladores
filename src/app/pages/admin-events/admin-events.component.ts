import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections, Event } from 'src/app/app.models';
import moment from 'moment'
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.scss']
})
export class AdminEventsComponent implements OnInit {

  public tempEvent: Event

  public config: CrudTableConfig = {
    collection: Collections.EVENT,
    fullEdit: true,
    disableEdit: true,
    headers: [
      {field: 'title', type: 'text', label: 'Titulo'},
      {field: 'desc', type: 'textarea', label: 'Descripción'},
      {field: 'date', type: 'date', label: 'Fecha', customRender: row => moment(row.date).format('LL')},
    ],
    documentDefaults: {
      title: 'Nuevo Evento',
      desc: '.',
      // date: new Date().toISOString(),
      date: null,
      tasks: [],
      links: []
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

  openEdit(event: Event) {
    this.tempEvent = event
    this.modal.getModal('eventEditModal').open()
  }

}
