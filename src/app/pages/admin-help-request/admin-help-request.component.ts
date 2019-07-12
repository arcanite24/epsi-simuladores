import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';

@Component({
  selector: 'epsi-admin-help-request',
  templateUrl: './admin-help-request.component.html',
  styleUrls: ['./admin-help-request.component.scss']
})
export class AdminHelpRequestComponent implements OnInit {

  public config: CrudTableConfig = {
    collection: Collections.HelpRequest,
    headers: [
      { field: 'email', type: 'text' },
      { field: 'name', type: 'text' },
      { field: 'text', type: 'text' },
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
