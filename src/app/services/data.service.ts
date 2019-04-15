import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import {Collections, User} from "../app.models";

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

  getCollectionAlt<T>(collection: string): Promise<any[]> {
    return new Promise<any[]>(async (resolve, reject) => {
      const data = await this.afs.firestore.collection(collection).get()
      resolve(data.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })))
    })
  }

  getCollectionQuery<T>(collection: string, query: (ref: firebase.firestore.CollectionReference) => any): Promise<T[]> {
    return this.afs.collection<T>(collection, ref => query(ref))
      .valueChanges()
      .pipe(take(1))
      .toPromise()
  }

  async updateUserByEmail(email: string, payload: Partial<User>) {

    const users = await this.getCollectionQuery<User>(Collections.USER, ref => ref.where('email', '==', email))
    const user = users[0]

    if (!user) return false

    return this.afs.collection(Collections.USER).doc(user.uid).update(payload)

  }

}
