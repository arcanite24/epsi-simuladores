import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';

@Component({
  selector: 'epsi-admin-landing-fields',
  templateUrl: './admin-landing-fields.component.html',
  styleUrls: ['./admin-landing-fields.component.scss']
})
export class AdminLandingFieldsComponent implements OnInit {

  public config: CrudTableConfig = {
    collection: Collections.LANDING_FIELD,
    headers: [
      {field: 'key', type: 'text'},
      {field: 'value', type: 'text'},
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
