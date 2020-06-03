import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';

@Component({
  selector: 'epsi-admin-daily',
  templateUrl: './admin-daily.component.html',
  styleUrls: ['./admin-daily.component.scss']
})
export class AdminDailyComponent implements OnInit {

  public config: CrudTableConfig = {
    collection: Collections.DAILY,
    headers: [
      {field: 'title', type: 'text'},
      {field: 'text', type: 'textarea'},
    ],
    fullEdit: true,
  }

  constructor() { }

  ngOnInit() {
  }

}
