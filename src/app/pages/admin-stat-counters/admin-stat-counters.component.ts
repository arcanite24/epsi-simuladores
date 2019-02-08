import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';
import uuid from 'uuid'

@Component({
  selector: 'epsi-admin-stat-counters',
  templateUrl: './admin-stat-counters.component.html',
  styleUrls: ['./admin-stat-counters.component.scss']
})
export class AdminStatCountersComponent implements OnInit {

  public config: CrudTableConfig = {
    collection: Collections.STAT_COUNTER,
    headers: [
      {field: 'key', type: 'text'},
      {field: 'label', type: 'text'},
      {field: 'value', type: 'number', noEdit: true},
      {field: 'lastModified', type: 'date', noEdit: true},
    ],
    documentDefaults: {
      label: 'Nuevo Contador',
      key: uuid.v4(),
      value: 0,
      lastModified: new Date().toISOString(),
    },
    preCreate: row => {
      row.key = uuid.v4()
      return row
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
