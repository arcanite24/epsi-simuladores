webpackJsonp([13],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(744);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_back_back__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, back, load, fb, toast, google, platform, 
        //private auth: AuthService,
        auth, modal, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.load = load;
        this.fb = fb;
        this.toast = toast;
        this.google = google;
        this.platform = platform;
        this.auth = auth;
        this.modal = modal;
        this.afAuth = afAuth;
        this.showAdmin = false;
        this.loginData = { email: '', password: '' };
    }
    /* async loginFacebook() {
  
      const l = this.load.create({content: 'Iniciando sesión con Facebook...'})
      l.present()
  
      if (this.platform.is('cordova')) {
  
        try {
          const res: FacebookLoginResponse = await this.fb.login(['public_profile', 'email'])
          this.back.facebookApp(res.authResponse.accessToken).subscribe(data => {
            if (data.err) return this.toast.create({message: data.err, duration: 2000}).present()
            localStorage.setItem('user', JSON.stringify(data.user))
            localStorage.setItem('token', data.token)
            localStorage.setItem('uid', data.user.id)
            //this.back.saveFcmToken(data.user.id, localStorage.getItem('fcm_token')).then(data => console.log(data)).catch(err => this.toast.create({message: 'No se pudo registrar tu dispositivo...', duration: 2000}).present())
            this.navCtrl.setRoot('HomePage')
            l.dismiss()
          }, err => {
            this.toast.create({message: 'No pudimos inicar sesión con tu Facebook', duration: 2000}).present()
            l.dismiss()
          })
        } catch (error) {
          l.dismiss()
          this.toast.create({message: 'No pudimos inicar sesión con tu Facebook', duration: 2000}).present()
        }
  
      } else {
  
        this.auth.signIn(FacebookLoginProvider.PROVIDER_ID)
          .then((data: SocialUser) => {
            this.handleSocial(data)
            l.dismiss()
          })
          .catch(err => {
            this.toast.create({message: 'Ocurrío un error al iniciar sesión con Facebook...', duration: 2000}).present()
            l.dismiss()
          })
  
      }
  
    }
  
    async loginGoogle() {
  
      const l = this.load.create({content: 'Iniciando sesión con Google...'})
      l.present()
  
      if (this.platform.is('cordova')) {
  
        try {
          const res = await this.google.login({})
          this.back.googleApp(res).subscribe(data => {
            if (data.err) return this.toast.create({message: data.err, duration: 2000}).present()
            localStorage.setItem('user', JSON.stringify(data.user))
            localStorage.setItem('token', data.token)
            localStorage.setItem('uid', data.user.id)
            //this.back.saveFcmToken(data.user.id, localStorage.getItem('fcm_token')).then(data => console.log(data)).catch(err => this.toast.create({message: 'No se pudo registrar tu dispositivo...', duration: 2000}).present())
            this.navCtrl.setRoot('HomePage')
            l.dismiss()
          }, err => {
            this.toast.create({message: 'No pudimos inicar sesión con tu cuenta de Google', duration: 2000}).present()
            l.dismiss()
          })
        } catch (error) {
          this.toast.create({message: 'No pudimos inicar sesión con tu cuenta de Google', duration: 2000}).present()
          l.dismiss()
        }
  
      } else {
  
        this.auth.signIn(GoogleLoginProvider.PROVIDER_ID)
          .then(data => {
            this.handleSocial(data)
            l.dismiss()
          })
          .catch(err => {
            this.toast.create({message: 'Ocurrío un error al iniciar sesión con Google...', duration: 2000}).present()
            l.dismiss()
          })
  
      }
  
    } */
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.auth.user$.subscribe(function (user) {
            if (user)
                _this.navCtrl.setRoot('HomePage');
        });
    };
    LoginPage.prototype.handleSocial = function (data) {
        var _this = this;
        this.back.socialAuthWeb(data).subscribe(function (authInfo) {
            if (authInfo.err)
                return _this.toast.create({ message: authInfo.err, duration: 2000 }).present();
            localStorage.setItem('uid', authInfo.user.id);
            localStorage.setItem('user', JSON.stringify(authInfo.user));
            localStorage.setItem('token', authInfo.token);
            _this.navCtrl.setRoot('HomePage');
        }, function (err) {
            _this.toast.create({ message: 'Ocurrió un error al iniciar sesión...', duration: 2000 }).present();
        });
    };
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var l, user, _user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        l = this.load.create({ content: 'Iniciando Sesión...' });
                        l.present();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)];
                    case 2:
                        user = _a.sent();
                        return [4 /*yield*/, this.afAuth.user.pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["take"])(1)).toPromise()];
                    case 3:
                        _user = _a.sent();
                        this.auth.setUser({
                            email: _user.email,
                            displayName: _user.displayName,
                            photoURL: _user.photoURL,
                            uid: _user.uid,
                        });
                        this.navCtrl.setRoot('HomePage');
                        this.toast.create({ message: "Bienvenido " + user.user.displayName, duration: 2000 }).present();
                        l.dismiss();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.toast.create({ message: error_1.message, duration: 2000 }).present();
                        l.dismiss();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.openHowto = function () {
        this.modal.create('HowtoPage').present();
    };
    LoginPage.prototype.loginGoogleFire = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.auth.loginGoogle()];
                    case 1:
                        user = _a.sent();
                        this.toast.create({ message: "Bienvenido de nuevo " + user.displayName, duration: 2000 }).present();
                        this.navCtrl.setRoot('HomePage');
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        this.toast.create({ message: 'Algo ocurrió al iniciar sesión con tu cuenta de Google. Contacta con un administrador.', duration: 2000 }).present();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.loginFacebookFire = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.auth.loginFacebook()];
                    case 1:
                        user = _a.sent();
                        this.toast.create({ message: "Bienvenido de nuevo " + user.displayName, duration: 2000 }).present();
                        this.navCtrl.setRoot('HomePage');
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        this.toast.create({ message: 'Algo ocurrió al iniciar sesión con tu cuenta de Facebook. Contacta con un administrador.', duration: 2000 }).present();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/neri/code/zamna-pagos/src/pages/login/login.html"*/'<ion-content class="bg-eee login-container">\n  <div class="flex flex-col login-container">\n\n    <h4 class="w-100 text-center" style="color:#2fb7ec">Plataforma de Pagos para el curso PRESENCIAL ENARM 2019</h4>\n\n    <img src="assets/imgs/weon_azul.png" style="width:12%">\n    <img src="assets/imgs/letras_azul.png" style="width:25%">\n\n    <div class="social-buttons mt-2 flex flex-col justify-center align-center" *ngIf="!showAdmin" >\n      <button ion-button (click)="loginFacebookFire()">\n        <ion-icon name="logo-facebook" class="mr-1"></ion-icon>\n        Iniciar Sesión con Facebook\n      </button>\n      <button ion-button (click)="loginGoogleFire()">\n        <ion-icon name="logo-google" class="mr-1"></ion-icon>\n        Iniciar Sesión con Google\n      </button>\n    </div>\n\n    <ion-list *ngIf="showAdmin" class="w-100">\n      <ion-item>\n        <ion-input placeholder="Email" [(ngModel)]="loginData.email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input placeholder="Password" type="password" [(ngModel)]="loginData.password"></ion-input>\n      </ion-item>\n      <div class="flex flex-col justify-center align-center mt-1">\n        <button ion-button (click)="login()" >Iniciar Sesión</button>\n      </div>\n    </ion-list>\n\n    <button ion-button clear (click)="openHowto()" >¿Cómo me inscribo?</button>\n\n    <small class="c54 mt-1" (click)="showAdmin = !showAdmin" *ngIf="!showAdmin" >Admin</small>\n    <small class="c54 mt-1" (click)="showAdmin = !showAdmin" *ngIf="showAdmin" >Alumno</small>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamna-pagos/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=13.js.map