import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';

@Component({
  selector: 'epsi-admin-ad-texts',
  templateUrl: './admin-ad-texts.component.html',
  styleUrls: ['./admin-ad-texts.component.scss']
})
export class AdminAdTextsComponent implements OnInit {

  public config: CrudTableConfig = {
    pk: 'key',
    fullEdit: true,
    disableAdd: true,
    collection: Collections.AD_TEXT,
    headers: [
      {field: 'key', type: 'text', noEdit: true},
      {field: 'value', type: 'textarea'},
      {field: 'button_text', type: 'text'},
      {field: 'href', type: 'text'},
    ],
  }

  constructor() { }

  ngOnInit() {
  }

}
