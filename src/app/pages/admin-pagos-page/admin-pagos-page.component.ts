import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';
import moment from 'moment';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-admin-pagos-page',
  templateUrl: './admin-pagos-page.component.html',
  styleUrls: ['./admin-pagos-page.component.scss']
})
export class AdminPagosPageComponent implements OnInit {

  public config: CrudTableConfig<PaymentRequest> = {
    collection: Collections.PAYMENT_REQUEST,
    dataSource: this.afs.collection<PaymentRequest>(Collections.PAYMENT_REQUEST, ref => ref
      .orderBy('model.createdAt', 'desc'))
      .valueChanges(),
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

  constructor(
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
  }

}
