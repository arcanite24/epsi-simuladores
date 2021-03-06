import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'epsi-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loading: boolean = false
  public mode: 'login' | 'register' = 'login'
  public loginForm: FormGroup
  public registerForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    public auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    this.checkForAuth()

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', [Validators.required]],
      displayName: ['', Validators.required],
    })

  }

  async onLogin() {

    if (this.loginForm.valid) {

      // TODO: Customize toast appareance
      // TODO: Find a new toast library
      this.loading = true

      try {
        const user = await this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
        const _user = await this.afAuth.user.pipe(take(1)).toPromise()
        this.auth.setUser({
          email: _user.email,
          displayName: _user.displayName,
          photoURL: _user.photoURL,
          uid: _user.uid,
        })
        this.router.navigate(['/home'])
        this.toastr.success(`Bienvenido ${user.user.displayName}`)
        this.loginForm.reset()
        this.loading = false
      } catch (error) {
        this.toastr.error(error.message)
        this.loading = false
      }

    } else {
      this.toastr.error('Por favor ingresa información válida...')
    }

  }

  async onRegister() {

    if (this.registerForm.valid) {

      if (this.registerForm.value.password != this.registerForm.value.repassword) return this.toastr.error('Las contraeñas no coinciden...')

      this.loading = true

      try {
        const user = await this.afAuth.auth.createUserWithEmailAndPassword(this.registerForm.value.email, this.registerForm.value.password)
        await user.user.updateProfile({
          displayName: this.registerForm.value.displayName,
          photoURL: environment.ui.defaultAvatar
        })

        const _user = await this.afAuth.user.pipe(take(1)).toPromise()
        this.auth.setUser({
          email: _user.email,
          displayName: _user.displayName,
          photoURL: _user.photoURL,
          uid: _user.uid,
        })
        
        this.toastr.success('Tu cuente se acaba de crear correctamente.')
        this.mode = 'login'
        this.registerForm.reset()
        this.loading = false
      } catch (error) {
        this.toastr.error(error.message)
        this.loading = false
      }

    } else {
      this.toastr.error('Por favor ingresa información válida...') 
    }

  }

  checkForAuth() {
    if (this.auth.loggedIn) return this.router.navigate(['/home'])
  }

  async loginGoogle() {
    try {
      const user = await this.auth.loginGoogle()
      this.toastr.success(`Bienvenido de nuevo ${user.displayName}`)
      this.router.navigate(['/home'])
    } catch (error) {
      this.toastr.error('Algo ocurrió al iniciar sesión con tu cuenta de Google. Contacta con un administrador.')
    }
  }

}
