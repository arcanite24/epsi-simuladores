import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';
import uuid from 'uuid'

@Component({
  selector: 'epsi-admin-coupons',
  templateUrl: './admin-coupons.component.html',
  styleUrls: ['./admin-coupons.component.scss']
})
export class AdminCouponsComponent implements OnInit {

  public config: CrudTableConfig = {
    collection: Collections.COUPON,
    headers: [
      {field: 'code', type: 'text', label: 'Código'},
      {field: 'date', type: 'date', label: 'Fecha de Uso', hideOnTable: true},
      {field: 'user', type: 'textarea', label: 'Usado por', hideOnTable: true},
      {field: 'used', type: 'checkbox', label: '¿Usado?'},
      {field: 'value', type: 'number', label: 'Valor del Cupón'},
    ],
    fullEdit: true,
    documentDefaults: {
      code: `ZAMNA-${uuid.v1().substr(0, 8)}`,
      date: null,
      user: null,
      used: false,
      value: 0
    },
    preCreate: row => {
      row.code = `ZAMNA-${uuid.v1().substr(0, 8)}`
      return row
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
