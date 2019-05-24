import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections, Notification, NotificationResponse } from 'src/app/app.models';
import moment from 'moment'
import { DataService } from 'src/app/services/data.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-admin-notifications',
  templateUrl: './admin-notifications.component.html',
  styleUrls: ['./admin-notifications.component.scss']
})
export class AdminNotificationsComponent implements OnInit {

  public tempResponses: NotificationResponse[]

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
    },
    customActions: [
      {iconClasses: 'fa fa-comment', handler: noti => this.openResponses(noti)}
    ]
  }

  constructor(
    private data: DataService,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {
  }

  private async openResponses(noti: Notification) {
    const responses = await this.data.getCollectionQuery<NotificationResponse>(Collections.NOTIFICATION_RESPONSE, ref => ref.where('noti', '==', noti.id))
    this.tempResponses = responses
    this.modal.getModal('notiResponsesModal').open()
  }

}
