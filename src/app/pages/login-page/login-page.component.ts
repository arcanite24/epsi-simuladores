import { Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
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

  public loading = false;
  public mode: 'login' | 'register' | 'admin' = 'login';
  public loginForm: FormGroup;
  public registerForm: FormGroup;

  public hideLoader = false;

  public helpForm = {
    name: '',
    email: '',
    text: '',
    date: new Date().toISOString(),
  };

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    public auth: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {

    this.checkForAuth();

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', [Validators.required]],
      displayName: ['', Validators.required],
    });

  }

  async onLogin() {

    if (this.loginForm.valid) {

      // TODO: Customize toast appareance
      // TODO: Find a new toast library
      this.loading = true;

      try {
        const user = await this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password);
        const _user = await this.afAuth.user.pipe(take(1)).toPromise();
        this.auth.setUser({
          email: _user.email,
          displayName: _user.displayName,
          photoURL: _user.photoURL,
          uid: _user.uid,
        });
        this.router.navigate(['/home']);
        this.toastr.success(`Bienvenido ${user.user.displayName}`);
        this.loginForm.reset();
        this.loading = false;
      } catch (error) {
        this.toastr.error(error.message);
        this.loading = false;
      }

    } else {
      this.toastr.error('Por favor ingresa información válida...');
    }

  }

  async onRegister() {

    if (this.registerForm.valid) {

      if (this.registerForm.value.password !== this.registerForm.value.repassword) {
        return this.toastr.error('Las contraeñas no coinciden...');
      }

      this.loading = true;
      this.hideLoader = false;

      try {
        const user = await this.afAuth.auth.createUserWithEmailAndPassword(this.registerForm.value.email, this.registerForm.value.password);
        await user.user.updateProfile({
          displayName: this.registerForm.value.displayName,
          photoURL: environment.ui.defaultAvatar
        });

        const _user = await this.afAuth.user.pipe(take(1)).toPromise();
        this.auth.setUser({
          email: _user.email,
          displayName: _user.displayName,
          photoURL: _user.photoURL,
          uid: _user.uid,
        });

        this.toastr.success('Tu cuente se acaba de crear correctamente.');
        this.mode = 'login';
        this.registerForm.reset();
        this.loading = false;
        this.hideLoader = true;
      } catch (error) {
        this.toastr.error(error.message);
        this.loading = false;
        this.hideLoader = true;
      }

    } else {
      this.toastr.error('Por favor ingresa información válida...');
    }

  }

  checkForAuth() {
    // if (this.auth.loggedIn) return this.router.navigate(['/home'])
    this.auth.user$.subscribe(user => {
      setTimeout(() => {
        this.hideLoader = true;
        if (user) { this.router.navigate(['/home']) }
      }, 3000);
    });
  }

  async loginGoogle() {
    try {
      const user = await this.auth.loginGoogle();
      // await this.auth.migrateOldUser(user.email, user.uid)
      this.toastr.success(`Bienvenido de nuevo ${user.displayName}`);
      this.router.navigate(['/home']);
    } catch (error) {
      console.log(error);
      this.toastr.error('Algo ocurrió al iniciar sesión con tu cuenta de Google. Contacta con un administrador.');
    }
  }

  async loginFacebook() {
    try {
      const user = await this.auth.loginFacebook();
      // await this.auth.migrateOldUser(user.email, user.uid)
      this.toastr.success(`Bienvenido de nuevo ${user.displayName}`);
      this.router.navigate(['/home']);
    } catch (error) {
      console.log(error);
      this.toastr.error('Algo ocurrió al iniciar sesión con tu cuenta de Facebook. Contacta con un administrador.');
    }
  }

  async sendHelpRequest() {

    try {
      await this.afs.collection(Collections.HelpRequest).add(this.helpForm);
      this.toastr.success('Gracias por enviar tu información, a la brevedad nos pondremos en contacto contigo.');
      this.helpForm = {
        name: '',
        email: '',
        text: '',
        date: new Date().toISOString(),
      };
    } catch (error) {
      this.toastr.error('Oops, algo ocurrió al enviar tu información, intentalo más tarde');
    }

  }

}
