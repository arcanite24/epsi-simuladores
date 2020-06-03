import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';
import moment from 'moment'

@Component({
  selector: 'epsi-admin-suggestions',
  templateUrl: './admin-suggestions.component.html',
  styleUrls: ['./admin-suggestions.component.scss']
})
export class AdminSuggestionsComponent implements OnInit {

  public config: CrudTableConfig = {
    collection: Collections.SUGGESTION,
    fullEdit: true,
    headers: [
      {field: 'user_name', type: 'text', label: 'Usuario'},
      {field: 'content_type', type: 'text', label: 'Contenido'},
      {field: 'date', type: 'date', label: 'Fecha', customRender: row => moment(row.date).calendar()},
      {field: 'text', type: 'textarea', label: 'Sugerencia'},
      {field: 'content_name', type: 'text', label: '¿En dónde?'},
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
