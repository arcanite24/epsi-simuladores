import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';

@Component({
  selector: 'epsi-admin-livestreams',
  templateUrl: './admin-livestreams.component.html',
  styleUrls: ['./admin-livestreams.component.scss']
})
export class AdminLivestreamsComponent implements OnInit {

  public config: CrudTableConfig = {
    collection: Collections.LIVESTREAM,
    fullEdit: true,
    headers: [
      {field: 'title', type: 'text', label: 'Nombre'},
      {field: 'desc', type: 'textarea', label: 'Descripción'},
      {field: 'date', type: 'date', label: 'Fecha'},
      {field: 'url', type: 'text', label: 'URL de YouTube'},
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
