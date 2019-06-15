import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';
import moment from 'moment';

@Component({
  selector: 'epsi-admin-pagos-page',
  templateUrl: './admin-pagos-page.component.html',
  styleUrls: ['./admin-pagos-page.component.scss']
})
export class AdminPagosPageComponent implements OnInit {

  public config: CrudTableConfig = {
    collection: Collections.PAYMENT_REQUEST,
    fullEdit: true,
    headers: [
      { field: 'user_name', type: 'text' },
      { field: 'email', type: 'text' },
      { field: 'status', type: 'text' },
      { field: 'delivered', type: 'text' },
      { field: 'amount', type: 'text', customRender: row => row.model ? row.model.amount : '' },
      { field: 'date', type: 'text', customRender: row => row.model ? moment(row.model.createdAt).format('MMMM Do YYYY, h:mm:ss a') : '' },
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
