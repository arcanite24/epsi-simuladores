import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { switchMap, take, map } from 'rxjs/operators'
import { User, Roles, Collections, PremiumModel, EsencialModel } from '../app.models';
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
  get isTemprano() { return this.loggedIn && this.user[Roles.Temprano] }

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
  get isPrograma() { return this.loggedIn && this.user[Roles.Programa] }
  get isPool() { return this.loggedIn && this.user[Roles.Pool] }
  get isTagPool() { return this.loggedIn && this.user[Roles.TagPool] }

  setUser(user: any) {
    /* console.log(user) */
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

  async migrateOldUser(email: string, uid: string): Promise<boolean> {

    // Get old-user searching by email
    const oldUser: any | null = await this.afs.collection<User>('user-old', ref => ref
      .where('email', '==', email))
      .valueChanges()
      .pipe(
        take(1),
        map(users => users.length > 0 ? users[0] : null)
      ).toPromise()

    // Get current user
    const user = await this.afs.collection(Collections.USER).doc<User>(uid)
      .valueChanges()
      .pipe(take(1))
      .toPromise()

    console.log('user', user)
    console.log('old-user', oldUser)

    // if not oldUser return false
    if (!oldUser) return false
    
    // if the user is already migrated abort
    /* if (user && user.migrated) return true */
    if (user && user.migrated) console.log('user already migrated but ignoring')

    // build initial userPayload forming correctly the name
    let userPayload = {
      ...oldUser,
      id: uid,
      displayName: oldUser.displayName ? oldUser.displayName : 'Cargando nombre...',
      migrated: true,
    }

    // Give userPayload the corresponding roles
    if (oldUser.roles.indexOf('ROLE_PREMIUM') >= 0) {
      for (const role of PremiumModel) {
        userPayload[role] = true
      }
    }

    if (oldUser.roles.indexOf('ROLE_ENARM') >= 0) {
      for (const role of EsencialModel) {
        userPayload[role] = true
      }
    }

    if (oldUser.roles.indexOf('ROLE_TEMPRANO') >= 0) {
      userPayload[Roles.Temprano] = true
    }

    if (oldUser.roles.indexOf('CURSO_PRESENCIAL') >= 0) userPayload[Roles.Presencial] = true
    if (oldUser.roles.indexOf('CURSO_ESENCIAL_360') >= 0) userPayload[Roles.Esencial360] = true
    if (oldUser.roles.indexOf('CURSO_PREMIUM_360') >= 0) userPayload[Roles.Premium360] = true

    console.log('payload', userPayload)

    // delete old roles array
    delete userPayload.roles

    if (!user) {
      await this.afs.collection(Collections.USER).doc(uid).set(userPayload)
    } else {
      await this.afs.collection(Collections.USER).doc(uid).update(userPayload)
    }

    return true

  }

}
