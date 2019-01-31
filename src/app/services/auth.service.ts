import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { User } from '../app.models';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<User> = new BehaviorSubject(null)

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {

    this.afAuth.authState.pipe(
      switchMap(user => user ? this.afs.doc<User>(`user/${user.uid}`).valueChanges() : of(null))
    ).subscribe((user: User) => {
      this.userSubject.next(user)
    })

  }

  get user(): User {
    return this.userSubject.value
  }

  get loggedIn() {
    return !!this.userSubject.value
  }

  get user$() {
    return this.userSubject.asObservable()
  }

  get isAdmin() {
    return this.loggedIn && this.user['isAdmin']
  }

  setUser(user: any) {
    console.log(user)
    if (user) return this.afs.doc(`user/${user.uid}`).set(Object.assign({}, user), {merge: true})
  }

  async logout() {
    await this.afAuth.auth.signOut()
    this.router.navigate(['/'])
  }

  loginGoogle() {
    return new Promise<firebase.UserInfo>(async (resolve, reject) => {
      try {
        const credentials = await this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        const u = credentials.user
        this.setUser({
          email: u.email,
          displayName: u.displayName,
          photoURL: u.photoURL,
          uid: u.uid,
        })
        return resolve(credentials.user)
      } catch (error) {
        return reject(error)
      }
    })
  }

  loginFacebook() {
    return new Promise<firebase.UserInfo>(async (resolve, reject) => {
      try {
        const credentials = await this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        const u = credentials.user
        this.setUser({
          email: u.email,
          displayName: u.displayName,
          photoURL: u.photoURL,
          uid: u.uid,
        })
        return resolve(credentials.user)
      } catch (error) {
        return reject(error)
      }
    })
  }

}
