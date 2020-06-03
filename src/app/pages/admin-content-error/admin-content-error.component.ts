import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { ContentError, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-admin-content-error',
  templateUrl: './admin-content-error.component.html',
  styleUrls: ['./admin-content-error.component.scss']
})
export class AdminContentErrorComponent implements OnInit {

  public config: CrudTableConfig<ContentError> = {
    collection: Collections.CONTENT_ERROR,
    dataSource: this.afs.collection<ContentError>(Collections.CONTENT_ERROR).valueChanges(),
    headers: [
      {field: 'text', type: 'textarea', label: 'Descripción'},
      {field: 'user', type: 'textarea', label: 'Usuario', noEdit: true, customRender: row => row.user ? row.user.displayName : '-'},
      {field: 'content', type: 'textarea', label: 'Contenido', noEdit: true, customRender: row => row.content ? row.content.name : '-'},
    ],
    fullEdit: true,
    disableAdd: true,
  }

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
  }

}
