import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';

@Component({
  selector: 'epsi-admin-tutorials',
  templateUrl: './admin-tutorials.component.html',
  styleUrls: ['./admin-tutorials.component.scss']
})
export class AdminTutorialsComponent implements OnInit {

  public config: CrudTableConfig = {
    collection: Collections.TUTORIAL,
    fullEdit: true,
    headers: [
      {field: 'id', type: 'text'},
      {field: 'label', type: 'text'},
      {field: 'text', type: 'textarea'},
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
