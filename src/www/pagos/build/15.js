webpackJsonp([15],{

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_moment__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ngx_moment__["a" /* MomentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_back_back__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_models__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_firestore__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(22);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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








__WEBPACK_IMPORTED_MODULE_3_moment___default.a.locale('es');
var HomePage = /** @class */ (function () {
    // public templates: any[] = [
    //   {
    //     tag: 'isPresencial2020',
    //     price: 16350,
    //     priceTag: '$ 16,350',
    //     name: 'Curso Presencial',
    //     limitDate: new Date('04-30-2020').toISOString()
    //   },
    //   {
    //     tag: 'isPresencial360_2020',
    //     price: 18600,
    //     priceTag: '$16,350 + $2,250',
    //     name: 'Curso Presencial 360',
    //     limitDate: new Date('04-30-2020').toISOString()
    //   }
    // ]
    /* {
    tag: 'isEsencial360',
      price: 18399,
        priceTag: '$17,480 + $919',
          name: 'Zamná 360 esencial',
            //limitDate: moment("20183006", "YYYYMMDD").toISOString()
            limitDate: new Date('06-30-2018').toISOString()
    //limitDate: moment('Tue Apr 30 2019 23:59:58 GMT-0500 (hora de verano central)').toISOString(),
  },
  {
    tag: 'isPresencial',
      price: 17480,
        priceTag: '$17,480',
          name: 'Zamná Presencial',
            //limitDate: moment("20183006", "YYYYMMDD").toISOString()
            limitDate: new Date('06-30-2018').toISOString()
    //limitDate: moment('Tue Apr 30 2019 23:59:58 GMT-0500 (hora de verano central)').toISOString(),
  },
  {
    tag: 'isPremium360',
      price: 20239,
        priceTag: '$17,480 + $2,759',
          name: 'Zamná 360 Premium',
            //limitDate: moment("20183006", "YYYYMMDD").toISOString()
            limitDate: new Date('06-30-2018').toISOString()
    //limitDate: moment('Tue Apr 30 2019 23:59:58 GMT-0500 (hora de verano central)').toISOString(),
  } */
    function HomePage(navCtrl, navParams, back, toast, load, modal, alert, auth, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.toast = toast;
        this.load = load;
        this.modal = modal;
        this.alert = alert;
        this.auth = auth;
        this.afs = afs;
        this.alertShown = false;
        this.controles = [];
    }
    Object.defineProperty(HomePage.prototype, "uid", {
        get: function () {
            return localStorage.getItem('uid');
        },
        enumerable: true,
        configurable: true
    });
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadTemplates();
        this.auth.user$.subscribe(function (user) {
            // if (user && this.auth.isViewPagos) return this.navCtrl.setRoot('AdminPage')
            if (user) {
                _this.checkForUserInfo(user);
                _this.loadControles(user.email);
            }
        });
    };
    HomePage.prototype.loadTemplates = function () {
        return __awaiter(this, void 0, void 0, function () {
            var templates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afs
                            .collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].PayTemplate)
                            .valueChanges()
                            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["take"])(1))
                            .toPromise()];
                    case 1:
                        templates = _a.sent();
                        this.templates = templates.map(function (t) { return (__assign({}, t, { limitDate: new Date(t.limitDate).toISOString() })); });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.loadControles = function (email) {
        var _this = this;
        /* this.back.getUserControlesPago(this.back.uid).subscribe(data => this.controles = data) */
        this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].CONTROL_PAGO, function (ref) { return ref
            .where('user.email', '==', email); })
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["tap"])(console.log))
            .subscribe(function (data) { return _this.controles = data.map(function (c) { return (__assign({}, c, { pagos$: _this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].ZAMNA_PAGO, function (ref) { return ref.where('control', '==', c.id); }).valueChanges() })); }); });
    };
    HomePage.prototype.formatDate = function (date) { return __WEBPACK_IMPORTED_MODULE_3_moment___default()(date).calendar(); };
    HomePage.prototype.gotoPagar = function (control) {
        this.navCtrl.push('PagoAddPage', { control: control });
    };
    HomePage.prototype.createControlPago = function (control_tag) {
        return __awaiter(this, void 0, void 0, function () {
            var l, control, deudaTotal, deuda, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        l = this.load.create({ content: 'Creando solicitud de pago...' });
                        l.present();
                        control = this.templates.filter(function (t) { return t.tag == control_tag; })[0];
                        control.id = this.afs.createId();
                        control.user = this.auth.user;
                        control.amountLeft = control.price;
                        deudaTotal = this.auth.user.deudaTotal ? this.auth.user.deudaTotal : 0;
                        deuda = this.auth.user.deuda ? this.auth.user.deuda : 0;
                        return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].USER).doc(this.auth.user.uid).update({ deudaTotal: deudaTotal + control.price })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].USER).doc(this.auth.user.uid).update({ deuda: deuda + control.price })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].CONTROL_PAGO).doc(control.id).set(control)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].USER).doc(this.auth.user.uid).update((_a = {}, _a[control_tag] = true, _a))];
                    case 4:
                        _b.sent();
                        this.toast.create({ message: 'Control de pago creado correctamente.', duration: 2000 }).present();
                        l.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.removeControlPago = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].CONTROL_PAGO).doc(id).delete()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].USER).doc(this.auth.user.uid).update({ deuda: 0, deudaTotal: 0 })];
                    case 2:
                        _a.sent();
                        this.toast.create({ message: 'Control de Pago eliminado correctamente, deuda y deudaTotal seteados a 0', duration: 2000 }).present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.logout()];
                    case 1:
                        _a.sent();
                        this.navCtrl.setRoot('LoginPage');
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.openPagoDetail = function (pago) {
        var m = this.modal.create('PagoDetailPage', { pago: pago });
        m.present();
    };
    HomePage.prototype.checkForUserInfo = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert_1;
            return __generator(this, function (_a) {
                // const user = await this.back.getUserDetail(this.back.uid).toPromise()
                if (!user.celular && !this.alertShown) {
                    alert_1 = this.alert.create({
                        title: 'Número de Celular',
                        subTitle: 'Parece que no haz llenado tu número de celular en tu perfil',
                        buttons: [
                            {
                                text: 'Ir a Perfil',
                                handler: function () {
                                    _this.navCtrl.push('ProfilePage');
                                }
                            },
                            {
                                text: 'Cerrar',
                                role: 'cancel'
                            }
                        ]
                    });
                    alert_1.present();
                    this.alertShown = true;
                }
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.openAdmin = function () {
        var _this = this;
        var alert = this.alert.create({
            title: 'Selecciona alumnos',
            buttons: [
                {
                    text: 'Alumnos 2019',
                    handler: function () {
                        _this.navCtrl.push('AdminPage', {
                            mode: 'roles',
                            method: null,
                            payload: ['isEsencial360', 'isPresencial', 'isPremium360'],
                        });
                    },
                },
                {
                    text: 'Alumnos 2020',
                    handler: function () {
                        _this.navCtrl.push('AdminPage', {
                            mode: 'roles',
                            method: null,
                            payload: ['isPresencial2020', 'isPresencial360_2020'],
                        });
                    },
                },
                {
                    text: 'Cerrar',
                    role: 'cancel',
                },
            ],
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\arcan\code\zamna-pagos\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Zamná Pagos</ion-title>\n    <ion-buttons end>\n      <a ion-button icon-only  href="https://wa.me/525575717513" target="_blank" color="success-claro">\n        <ion-icon name="logo-whatsapp"></ion-icon>\n      </a>\n      <a ion-button icon-only href="https://enarmzamna.com/inscripcion.html" target="_blank">\n        ¿Tienes preguntas de cómo pagar?\n      </a>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-grid fixed>\n\n    <ion-card *ngFor="let control of controles; let i = index">\n\n      <ion-card-content>\n        <h2 text-center>Saldo pendiente: <strong>${{control.amountLeft | number}}</strong></h2>\n        <p>Estás inscrito en: <strong *ngIf="control.tag == \'isEsencial360\'">Zamná 360 esencial</strong> <strong *ngIf="control.tag == \'isPresencial\'">Zamná Presencial</strong> <strong *ngIf="control.tag == \'isPremium360\'">Zamná 360 Premium</strong></p>\n        <p>Fecha limite para liquidar el 100%: {{control.limitDate | amDateFormat:\'LL\'}}</p>\n        <p class="c54">\n          <small>Recuerda actualizar tus datos en la sección "Mi Perfil"</small>\n        </p>\n        <button ion-button (click)="gotoPagar(control)">Hacer nuevo pago</button>\n        <button ion-button color="danger"  (click)="removeControlPago(control.id, i)" *ngIf="auth.isAdmin" >Quitar</button>\n        <!--<a href="https://zamnademy.com" ion-button color="secondary" *ngIf="control.tag == \'CURSO_ESENCIAL_360\' || control.tag == \'CURSO_PREMIUM_360\'">Zamnademy</a>-->\n        <hr>\n        <p *ngIf="control.amountLeft <= control.price * 0.7" >\n          Felicidades ya eres parte del equipo Zamná 2019, con el 30% que completaste ya tienes tu lugar asegurado. <br>\n          Y si eres miembro de Zamná 360, puedes acceder ya en este momento a tu plataforma tocando este link:  <a href="https://zamnademy.com" target="_blank">zamnademy</a> o este botón\n        </p>\n        <a ion-button href="https://zamnademy.com" target="_blank" *ngIf="control.amountLeft <= control.price * 0.7">Zamnademy</a>\n      </ion-card-content>\n\n      <ion-list>\n        <ion-list-header>Pagos realizados</ion-list-header>\n        <ng-container *ngFor="let pago of control.pagos$ | async">\n          <ion-item>\n            <button ion-button item-start icon-only clear *ngIf="pago.method != \'card\'" (click)="openPagoDetail(pago)">\n              <ion-icon name="information-circle"></ion-icon>\n            </button>\n            <h2><strong>$ {{pago.amount | number}}</strong> pagados {{pago.createdAt | amCalendar}}</h2>\n            <p>\n              Status:\n              <span *ngIf="pago.pago.status == \'completed\'" style="color:green">Completado</span>\n              <span *ngIf="pago.pago.status == \'waiting\'" style="color:rgb(255, 208, 0)">Esperando Aprobación</span>\n              <span *ngIf="pago.pago.status == \'uploading\'" style="color:rgb(0, 183, 255)">Subir comprobante</span>\n              <span *ngIf="pago.pago.status == \'in_progress\'" style="color:rgb(0, 183, 255)">Esperando pago en tienda</span>\n              <span *ngIf="pago.pago.status == \'failed\'" style="color:red">Rechazado</span>\n            </p>\n          </ion-item>\n          <button *ngIf="pago.pago.status == \'uploading\'" (click)="openPagoDetail(pago)" ion-button clear>Subir foto del comprobante para aprobación</button>\n        </ng-container>\n      </ion-list>\n\n    </ion-card>\n\n    <ion-list *ngIf="!controles || controles.length <= 0" radio-group [(ngModel)]="selectedTemplate">\n      <ion-list-header>Seleccionar plan a pagar</ion-list-header>\n      <ion-item *ngFor="let template of templates">\n        <ion-radio [value]="template.tag"></ion-radio>\n        <ion-label>\n          <h2><strong>{{template.priceTag}}</strong> {{template.name}}</h2>\n          <p>Pagar antes del {{formatDate(template.limitDate)}}</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <div class="flex flex-col justify-center align-center" *ngIf="!controles || controles.length <= 0">\n      <button ion-button *ngIf="selectedTemplate" (click)="createControlPago(selectedTemplate)" >Seleccionar plan</button>\n    </div>\n\n    <div class="flex flex-row justify-center align-center">\n      <button ion-button (click)="navCtrl.push(\'ProfilePage\')" >Ver Perfil</button>\n      <button ion-button (click)="navCtrl.push(\'BecasPage\')" >Becas Grupales</button>\n    </div>\n    <button ion-button clear (click)="logout()">Cerrar Sesión</button>\n    <button ion-button clear (click)="openAdmin()" *ngIf="auth.isAdmin" >Panel de Administración</button>\n    <button ion-button clear (click)="navCtrl.push(\'TeamsPage\')" *ngIf="auth.isAdmin" >Equipos de Beca</button>\n    <button ion-button clear (click)="navCtrl.push(\'PayTemplatesPage\')" *ngIf="auth.isAdmin" >Administrador de Costos</button>\n\n  </ion-grid>\n\n  <!-- <pre>{{ auth.user$ | async | json }}</pre> -->\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\arcan\code\zamna-pagos\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=15.js.map