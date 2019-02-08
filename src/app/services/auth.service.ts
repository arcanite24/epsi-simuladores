import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators'
import { User, Roles, Collections } from '../app.models';
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

  // Role Shorthands
  get isAdmin() { return this.loggedIn && this.user[Roles.Admin] }
  get isEsencial() { return this.loggedIn && this.user[Roles.Esencial] }
  get isPremium() { return this.loggedIn && this.user[Roles.Premium] }
  get isContent() { return this.loggedIn && this.user[Roles.Content] }
  get isChecklist() { return this.loggedIn && this.user[Roles.Checklist] }
  get isCalendar() { return this.loggedIn && this.user[Roles.Calendar] }
  get isTopUsers() { return this.loggedIn && this.user[Roles.TopUsers] }
  get isGalleries() { return this.loggedIn && this.user[Roles.Galleries] }
  get isSimuladores() { return this.loggedIn && this.user[Roles.Simuladores] }
  get isForum() { return this.loggedIn && this.user[Roles.Forum] }
  get isStreaming() { return this.loggedIn && this.user[Roles.Streaming] }
  get isMedia() { return this.loggedIn && this.user[Roles.Media] }
  get isSlides() { return this.loggedIn && this.user[Roles.Slides] }
  get isSimulacros() { return this.loggedIn && this.user[Roles.Simulacros] }
  get isFeed() { return this.loggedIn && this.user[Roles.Feed] }

  setUser(user: any) {
    console.log(user)
    if (user) return this.afs.doc(`user/${user.uid}`).set(Object.assign({}, user), {merge: true})
  }

  async getUser(): Promise<User> {
    return this.afs.doc<User>(`${Collections.USER}/${this.user.uid}`)
      .valueChanges()
      .pipe(
        take(1),
      )
      .toPromise()
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
