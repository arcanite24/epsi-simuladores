import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';

@Component({
  selector: 'epsi-admin-users-page',
  templateUrl: './admin-users-page.component.html',
  styleUrls: ['./admin-users-page.component.scss']
})
export class AdminUsersPageComponent implements OnInit {

  public config: CrudTableConfig = {
    collection: 'user',
    disableAdd: true,
    disableEdit: true,
    showControls: false,
    headers: [
      {field: 'displayName', type: 'text', label: 'Nombre'},
      {field: 'email', type: 'email', label: 'Email'},
      {field: 'photoURL', type: 'text', label: 'Foto', customHTML: (row, i) => `<img src="${row.photoURL}" style="width:32px">`}
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
