import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private afs: AngularFirestore
  ) { }

  getDoc<T>(collection: string, id: string): Promise<T> {
    return this.afs.collection(collection).doc<T>(id)
      .valueChanges()
      .pipe(take(1))
      .toPromise()
  }

  getCollection<T>(collection: string): Promise<T[]> {
    return this.afs.collection<T>(collection)
      .valueChanges()
      .pipe(take(1))
      .toPromise()
  }

  getCollectionQuery<T>(collection: string, query: (ref: firebase.firestore.CollectionReference) => any): Promise<T[]> {
    return this.afs.collection<T>(collection, ref => query(ref))
      .valueChanges()
      .pipe(take(1))
      .toPromise()
  }

}
