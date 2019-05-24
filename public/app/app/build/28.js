webpackJsonp([28],{

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(828);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_back_back__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(466);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, back, afAuth, auth, platform, iap) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.afAuth = afAuth;
        this.auth = auth;
        this.platform = platform;
        this.iap = iap;
        this.email = '';
        this.password = '';
        this.admin = false;
        this.isBrowser = !this.platform.is('cordova');
        this.auth.user$.subscribe(function (user) {
            _this.user = true;
            if (user)
                _this.navCtrl.setRoot('HomePage');
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var uid = localStorage.getItem('uid');
        if (uid) {
            this.back.saveFcmToken(uid, localStorage.getItem('fcm_token')).then(function (data) {
                _this.navCtrl.setRoot('HomePage');
            }).catch(function (err) {
                var list = JSON.parse(localStorage.getItem('zamnademy-cache-list'));
                if (list)
                    _this.navCtrl.setRoot('SimuladoresPage');
            });
        }
    };
    LoginPage.prototype.loginGoogleFirebase = function () {
        this.auth.loginGoogle(this.isBrowser);
    };
    LoginPage.prototype.loginFacebookFirebase = function () {
        this.auth.loginFacebook(this.isBrowser);
    };
    LoginPage.prototype.loginEmailFirebase = function (email, password) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\login\login.html"*/'<!--<div class="login-loader">\n\n  <img src="assets/imgs/update-cover.png" (click)="iap.create(\'https://zamnademy.com\', \'_system\').show()">\n\n</div>-->\n\n\n\n<div class="login-loader" *ngIf="!user">\n\n  <img src="assets/imgs/weon.png">\n\n</div>\n\n\n\n<ion-content class="login-bg">\n\n\n\n  <div class="h100 flex-col login-col" padding *ngIf="admin" >\n\n    <div class="login-inputs flex-col w100" padding>\n\n      <input placeholder="Email" type="text" class="mb-1 w100 login-input" [(ngModel)]="email" >\n\n      <input placeholder="Contraseña" type="password" class="w100 login-input" [(ngModel)]="password">\n\n    </div>\n\n    <div class="flex-col">\n\n      <button ion-button color="secondary" (click)="loginEmailFirebase(email, password)">Iniciar Sesión</button>\n\n      <button clear ion-button color="secondary" (click)="admin = false">Regresar</button>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="h100 flex-col login-col" padding *ngIf="!admin" >\n\n    <div class="flex-col" style="color:white; text-align:center">\n\n      <h1 style="font-size:2rem">¡Hola!<br>Qué gusto vernos otra vez</h1>\n\n    </div>\n\n    <div class="flex-col" style="color:white; text-align:center;font-size:2rem">\n\n      <h1>Ingresar a Mi<br>ENARM 2019<br></h1>\n\n      <img src="assets/imgs/texto.png" style="width:90%">\n\n      <h1>con:</h1>\n\n    </div>\n\n       <div class="login-buttons flex-col">\n\n        <div class="flex-col social-buttons">\n\n          <button class="btn-facebook" (click)="loginFacebookFirebase()">\n\n            <ion-icon name="logo-facebook"></ion-icon>\n\n            <span>Iniciar sesión con Facebook</span>\n\n          </button>\n\n          <button class="btn-google" (click)="loginGoogleFirebase()">\n\n            <ion-icon name="logo-google"></ion-icon>\n\n            <span>Iniciar sesión con Google</span>\n\n          </button>\n\n        </div>\n\n\n\n      </div>\n\n\n\n      <div class="flex-row-no-wrap w100">\n\n        <img src="assets/imgs/weon.png" style="margin-left:auto;width:64px" (click)="admin = true">\n\n      </div>\n\n      \n\n      <!-- <pre style="width:100%; background-color: white; color: black;">\n\n        {{user | json}}\n\n      </pre> -->\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=28.js.map