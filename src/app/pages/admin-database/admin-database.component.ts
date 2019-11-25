import { Component, OnInit } from '@angular/core';
import { Collections, DatabaseSync } from 'src/app/app.models';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'epsi-admin-database',
  templateUrl: './admin-database.component.html',
  styleUrls: ['./admin-database.component.scss']
})
export class AdminDatabaseComponent implements OnInit {

  public Collections = Object.entries(Collections);
  public dbSync$: Observable<DatabaseSync[]>;

  public ignoreOnSync: Collections[] = [
    Collections.EXAM_RESULT,
    Collections.ANSWER,
  ];

  public l = false;
  public message: string;

  constructor(
    private afs: AngularFirestore,
    private data: DataService,
  ) { }

  ngOnInit() {
    this.dbSync$ = this.afs.collection<DatabaseSync>(Collections.DatabaseSync).valueChanges();
  }

  async setDefaultSync() {

    this.l = true;

    for (const [name, collection] of this.Collections) {
      if (this.ignoreOnSync.includes(collection)) {
        await this.afs.collection(Collections.DatabaseSync).doc<DatabaseSync>(collection).set({
          id: collection,
          collection,
          last: null,
          lastUpdate: null,
          total: 0,
        });
      } else {
        await this.syncCollection(name, collection);
      }
    }

    this.l = false;
    this.message = 'Completed default sync';

  }

  async syncCollection(name: string, collection: string) {
    this.l = true;
    this.message = `Setting up ${name}`;
    const data = await this.data.getCollectionAlt(collection);
    this.message = `Found ${data.length} entries on ${collection}`;

    await this.afs.collection(Collections.DatabaseSync).doc<DatabaseSync>(collection).set({
      id: collection,
      collection,
      last: null,
      lastUpdate: null,
      total: data.length,
    });

    this.l = false;
  }

}
