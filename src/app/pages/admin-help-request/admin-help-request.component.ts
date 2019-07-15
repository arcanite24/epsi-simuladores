import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import moment from 'moment';

@Component({
  selector: 'epsi-admin-help-request',
  templateUrl: './admin-help-request.component.html',
  styleUrls: ['./admin-help-request.component.scss']
})
export class AdminHelpRequestComponent implements OnInit {

  public config: CrudTableConfig = {
    dataSource: this.afs.collection(Collections.HelpRequest, ref => ref.orderBy('date', 'desc')).valueChanges(),
    collection: Collections.HelpRequest,
    headers: [
      { field: 'email', type: 'text' },
      { field: 'name', type: 'text' },
      { field: 'text', type: 'text' },
      { field: 'date', type: 'text', customRender: row => row.date ? moment(row.date).calendar() : '-' },
    ]
  };

  constructor(
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
  }

}
