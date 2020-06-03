import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';
import moment from 'moment'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-admin-ipn',
  templateUrl: './admin-ipn.component.html',
  styleUrls: ['./admin-ipn.component.scss']
})
export class AdminIpnComponent implements OnInit {

  public dataSource$ = this.afs.collection<any>(Collections.MERCADOPAGO_IPN, ref => ref
    .orderBy('date_created', 'desc'))
    .valueChanges();

  public config: CrudTableConfig = {
    collection: Collections.MERCADOPAGO_IPN,
    fullEdit: true,
    headers: [
      {field: 'date_created', type: 'text', customRender: row => moment(row.date_created).format('LLL')}
    ]
  }

  constructor(
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
  }

}
