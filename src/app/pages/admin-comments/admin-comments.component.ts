import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';
import moment from 'moment'

@Component({
  selector: 'epsi-admin-comments',
  templateUrl: './admin-comments.component.html',
  styleUrls: ['./admin-comments.component.scss']
})
export class AdminCommentsComponent implements OnInit {

  public config: CrudTableConfig = {
    collection: Collections.COMMENT,
    fullEdit: true,
    headers: [
      {field: 'user_name', label: 'Usuario', type: 'text'},
      {field: 'text', label: 'Comentario', type: 'textarea'},
      {field: 'date', type: 'date', label: 'Fecha', customRender: row => row.date ? moment(row.date).calendar() : '-'},
      //{field: 'parent_type', type: 'text', label: 'Padre', noEdit: true },
      {field: 'content_type', type: 'text', label: 'Contenido', noEdit: true },
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
