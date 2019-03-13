import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(
    private auth: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!environment.production) return true
    if (this.auth.loggedIn) return true

    return this.auth.user$
      .pipe(
        take(1),
        map(user => !!user && user.isAdmin),
        tap(loggedIn => {
          if (!loggedIn) {
            console.log('bitch ur no admin')
            this.router.navigate(['/'])
          }
        })
      )

  }

}
