import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription, Collections, Premium2019Model } from '../../app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { CrudTableConfig } from '../../shared/crud-table/crud-table-models';
import { tap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'epsi-admin-subs',
  templateUrl: './admin-subs.component.html',
  styleUrls: ['./admin-subs.component.scss']
})
export class AdminSubsComponent implements OnInit {

  public dataSource: Observable<Subscription[]>;
  public config: CrudTableConfig = {
    collection: Collections.Subscription,
    dataSource: this.dataSource,
    fullEdit: true,
    disableAdd: true,
    headers: [
      { field: 'user', type: 'text', noEdit: true, customRender: row => row.user && row.user.displayName ? row.user.displayName : '-' },
      { field: 'limit', type: 'text', noEdit: true },
      { field: 'roles', type: 'text', noEdit: true, customRender: row => row.roles ? row.roles.join(',') : '-' },
    
    ],
  };

  public total: number;

  constructor(
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
    this.loadSubs();
  }

  async loadSubs() {
    this.dataSource = this.afs.collection<Subscription>(Collections.Subscription)
      .valueChanges()
      .pipe(tap(subs => this.total = subs.length));
  }

}
