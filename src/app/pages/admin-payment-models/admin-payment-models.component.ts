import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';

@Component({
  selector: 'epsi-admin-payment-models',
  templateUrl: './admin-payment-models.component.html',
  styleUrls: ['./admin-payment-models.component.scss']
})
export class AdminPaymentModelsComponent implements OnInit {

  public config: CrudTableConfig = {
    collection: Collections.PAYMENT_MODEL,
    fullEdit: true,
    headers: [
      {field: 'name', type: 'text', label: 'Nombre'},
      {field: 'desc', type: 'textarea', label: 'Descripción'},
      {field: 'amount', type: 'number', label: 'Cantidad'},
      {field: 'slug', type: 'text', label: 'Slug', hideOnTable: true, editPlaceholder: 'El Slug debe ser único, es usado para ingresar por medio de la URL a la pantalla de pago'},
      {field: 'canCard', type: 'checkbox', label: 'Pago con Tarjeta', hideOnTable: true},
      {field: 'canPaypal', type: 'checkbox', label: 'PayPal', hideOnTable: true},
      {field: 'canStore', type: 'checkbox', label: 'Pago en Tienda', hideOnTable: true},
      {field: 'canMeses', type: 'checkbox', label: 'Meses sin Interéses', hideOnTable: true},
      {field: 'canDiscount', type: 'checkbox', label: 'Código de Descuento', hideOnTable: true},
    ],
    documentDefaults: {
      name: 'Nuevo Modelo de Pago',
      desc: '.',
      amount: 0,
      unlocks: [],
      canCard: false,
      canPaypal: false,
      canStore: false,
      canMeses: false,
      canDiscount: false,
      slug: 'nuevo-modelo-de-pago-' + Date.now()
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
