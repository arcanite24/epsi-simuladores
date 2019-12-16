import { Injectable } from '@angular/core';
import { AngularFirestore, FieldPath } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import {Collections, Roles, User} from '../app.models';

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
      .toPromise();
  }

  getDocAlt<T>(collection: string, id: string): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      const doc = await this.afs.firestore.doc(`${collection}/${id}`).get();
      resolve({
        id: doc.id,
        ...doc.data()
      } as any);
    });
  }

  getCollection<T>(collection: string): Promise<T[]> {
    return this.afs.collection<T>(collection)
      .valueChanges()
      .pipe(take(1))
      .toPromise();
  }

  getCollectionAlt<T>(collection: string): Promise<any[]> {
    return new Promise<any[]>(async (resolve, reject) => {
      const data = await this.afs.firestore.collection(collection).get();
      resolve(data.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));
    });
  }

  getCollectionQuery<T>(collection: string, query: (ref: firebase.firestore.CollectionReference) => any): Promise<T[]> {
    return this.afs.collection<T>(collection, ref => query(ref))
      .valueChanges()
      .pipe(take(1))
      .toPromise();
  }

  public getCollectionQueryAlt<T extends { id?: any, uid?: any }>(
    collection: string,
    fieldPath: string | FieldPath,
    opStr: '<' | '<=' | '==' | '>=' | '>' | 'array-contains',
    value: any
  ) {
    return new Promise<T[]>(async (resolve, reject) => {

      const data = await this.afs.firestore
        .collection(collection)
        .where(fieldPath, opStr, value)
        .get();

      resolve(data.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as T[]);

    });
  }

  public getCollectionQueryAltLimit<T extends { id?: any, uid?: any }>(
    collection: string,
    fieldPath: string | FieldPath,
    opStr: '<' | '<=' | '==' | '>=' | '>' | 'array-contains',
    value: any,
    limit: number,
  ) {
    return new Promise<T[]>(async (resolve, reject) => {

      const data = await this.afs.firestore
        .collection(collection)
        .where(fieldPath, opStr, value)
        .limit(limit)
        .get();

      resolve(data.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as T[]);

    });
  }

  async updateUserByEmail(email: string, payload: Partial<User>) {

    const users = await this.getCollectionQuery<User>(Collections.USER, ref => ref.where('email', '==', email));
    const user = users[0];

    if (!user) { return false; }

    return this.afs.collection(Collections.USER).doc(user.uid).update(payload);

  }

  async getAllAdmins(): Promise<string[]> {

    const users = await this.getCollectionQuery<User>(Collections.USER, ref => ref.where(Roles.Admin, '==', true));
    return users.map(u => u.uid);

  }

}
