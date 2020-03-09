webpackJsonp([12],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoAddPageModule", function() { return PagoAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pago_add__ = __webpack_require__(744);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PagoAddPageModule = /** @class */ (function () {
    function PagoAddPageModule() {
    }
    PagoAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pago_add__["a" /* PagoAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pago_add__["a" /* PagoAddPage */]),
            ],
        })
    ], PagoAddPageModule);
    return PagoAddPageModule;
}());

//# sourceMappingURL=pago-add.module.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagoAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_back_back__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_models__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pay_pay__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_config__ = __webpack_require__(191);
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








var PagoAddPage = /** @class */ (function () {
    function PagoAddPage(navCtrl, navParams, back, toast, load, modal, afs, auth, pay) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.toast = toast;
        this.load = load;
        this.modal = modal;
        this.afs = afs;
        this.auth = auth;
        this.pay = pay;
        this.control = this.navParams.get('control');
        this.Math = Math;
        this.cards = [];
        this.method = 'card';
        this.isPlan = false;
        this.sess_id = OpenPay.deviceData.setup();
    }
    PagoAddPage.prototype.ionViewDidLoad = function () {
        if (!this.control)
            return this.navCtrl.setRoot('HomePage');
        /* this.loadCards() */
    };
    /* loadCards() {
      this.back.getUserTarjetas(this.back.uid).subscribe(data => this.cards = data, err => this.toast.create({message: 'No se pudieron cargar las tarjetas...', duration: 2000}).present())
    } */
    PagoAddPage.prototype.enableButton = function () {
        if (this.method == 'card') {
            /* if (!this.selectedCard) return false */
            if (this.amount < 5)
                return false;
            if (this.amount > this.control.amountLeft)
                return false;
            return true;
        }
        return true;
    };
    PagoAddPage.prototype.pagar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var m, l, id, _control, pagoPayload, mercado, id, _control, pagoPayload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.amount)
                            return [2 /*return*/, this.toast.create({ message: 'Recuerda ingresar un monto para pagar...', duration: 2000 }).present()];
                        if (this.method == 'paypal') {
                            m = this.modal.create('PaypalCheckoutPage', { amount: this.amount });
                            m.present();
                            m.onDidDismiss(function (data) { return _this.handlePaypal(data); });
                            return [2 /*return*/];
                        }
                        l = this.load.create({ content: 'Generando pago...' });
                        l.present();
                        if (!(this.method == 'tienda')) return [3 /*break*/, 1];
                        this.back.pagarPaynet(this.back.uid, this.amount, 'Pago Zamná', this.control.id, this.method).subscribe(function (data) {
                            console.log(data);
                            l.dismiss();
                            _this.recibo = data.recibo;
                        }, function (err) {
                            _this.toast.create({ message: 'No se pudo generar tu pago de Zamná', duration: 2000 }).present();
                            l.dismiss();
                        });
                        return [3 /*break*/, 6];
                    case 1:
                        if (!(this.method == 'card')) return [3 /*break*/, 4];
                        id = this.afs.createId();
                        _control = __assign({}, this.control);
                        delete _control.pagos$;
                        pagoPayload = {
                            id: id,
                            user: this.auth.user.uid,
                            control: _control.id,
                            amount: parseFloat(this.amount.toString()),
                            method: this.method,
                            plan: this.plan ? this.plan : null,
                            status: 'waiting',
                            createdAt: new Date().toISOString(),
                            pago: {
                                status: 'waiting',
                                restado: false
                            }
                        };
                        console.log(pagoPayload);
                        return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].ZAMNA_PAGO).doc(id).set(pagoPayload)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.pay.generatePaymentUrlZamnaPagos(this.control.id, id, this.control.name, parseFloat(this.amount.toString()), __WEBPACK_IMPORTED_MODULE_7__app_app_config__["e" /* production */] ? this.auth.user.email : 'test@test.com', __WEBPACK_IMPORTED_MODULE_7__app_app_config__["e" /* production */])];
                    case 3:
                        mercado = _a.sent();
                        console.log(mercado.init_point);
                        window.location.href = mercado.init_point;
                        l.dismiss();
                        return [3 /*break*/, 6];
                    case 4:
                        id = this.afs.createId();
                        _control = __assign({}, this.control);
                        delete _control.pagos$;
                        pagoPayload = {
                            id: id,
                            user: this.auth.user.uid,
                            control: _control.id,
                            amount: parseFloat(this.amount.toString()),
                            method: this.method,
                            plan: this.plan ? this.plan : null,
                            status: 'uploading',
                            pago: {
                                status: 'uploading',
                                restado: false
                            }
                        };
                        console.log(pagoPayload);
                        return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].ZAMNA_PAGO).doc(id).set(pagoPayload)];
                    case 5:
                        _a.sent();
                        this.navCtrl.pop();
                        l.dismiss();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /* openTarjetaAdd() {
  
      const m = this.modal.create('TarjetaAddPage')
      m.present()
  
      m.onDidDismiss(data => this.loadCards())
  
    } */
    PagoAddPage.prototype.handlePaypal = function (payment) {
        return __awaiter(this, void 0, void 0, function () {
            var l, id, _control, pagoPayload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!payment)
                            return [2 /*return*/];
                        l = this.load.create({ content: 'Generando pago...' });
                        l.present();
                        id = this.afs.createId();
                        _control = __assign({}, this.control);
                        delete _control.pagos$;
                        pagoPayload = {
                            id: id,
                            user: this.auth.user.uid,
                            control: _control.id,
                            amount: parseFloat(this.amount.toString()),
                            method: this.method,
                            plan: this.plan ? this.plan : null,
                            status: 'approved',
                            pago: {
                                status: 'approved',
                                restado: true
                            }
                        };
                        console.log(pagoPayload);
                        return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].ZAMNA_PAGO).doc(id).set(pagoPayload)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].CONTROL_PAGO).doc(this.control.id).update({
                                amountLeft: this.control.amountLeft - pagoPayload.amount
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PagoAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-pago-add',template:/*ion-inline-start:"C:\Users\arcan\code\zamna-pagos\src\pages\pago-add\pago-add.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Pagar</ion-title>\n\n    <ion-buttons end>\n\n      <a ion-button icon-only href="https://wa.me/525575717513" target="_blank">\n\n        <ion-icon name="logo-whatsapp"></ion-icon>\n\n      </a>\n\n      <a ion-button icon-only href="https://enarmzamna.com/inscripcion.html" target="_blank">\n\n        ¿Tienes preguntas de cómo pagar?\n\n      </a>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n\n\n  <ion-grid fixed>\n\n\n\n    <ion-card *ngIf="control">\n\n\n\n      <ion-list>\n\n        <ion-item>\n\n          <strong>Saldo pendiente: $ {{control.amountLeft | number}} </strong>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input\n\n            placeholder="Ingresa aquí la cantidad que quieras pagar hoy, evita ingresar $ , o . Solo ingresa numeros"\n\n            type="number" [(ngModel)]="amount"></ion-input>\n\n        </ion-item>\n\n        <ion-item text-wrap>\n\n          <small class="text-center c54 w-100">El 30% del costo total es: $ {{Math.ceil(control.price * 0.3) | number}}\n\n            que es la cantidad mínima que deberás ingresar en tu primer pago, para poder Inscribirte y asegurar tu\n\n            lugar</small>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-list radio-group [(ngModel)]="method" class="mt-2">\n\n        <ion-list-header>Método de Pago</ion-list-header>\n\n        <!-- <ion-item>\n\n          <ion-radio value="card"></ion-radio>\n\n          <ion-label>Tarjeta de Crédito/Débito ó Pago en Tienda</ion-label>\n\n        </ion-item> -->\n\n        <ion-item>\n\n          <ion-radio value="deposito"></ion-radio>\n\n          <ion-label>Depósito Bancario</ion-label>\n\n        </ion-item>\n\n        <!-- <ion-item>\n\n          <ion-radio value="efectivo_cu"></ion-radio>\n\n          <ion-label>Pago en efectivo en CU</ion-label>\n\n        </ion-item> -->\n\n        <ion-item>\n\n          <ion-radio value="efectivo_centromedico"></ion-radio>\n\n          <ion-label>Pago en efectivo en Centro Médico</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-radio value="transferencia"></ion-radio>\n\n          <ion-label>Transferencia</ion-label>\n\n        </ion-item>\n\n        <!-- <ion-item>\n\n          <ion-radio value="paypal"></ion-radio>\n\n          <ion-label>PayPal</ion-label>\n\n        </ion-item> -->\n\n        <!-- <ion-item>\n\n          <ion-radio value="tienda"></ion-radio>\n\n          <ion-label>Pago en tienda</ion-label>\n\n        </ion-item> -->\n\n      </ion-list>\n\n\n\n    </ion-card>\n\n\n\n    <!-- <ion-card *ngIf="method == \'card\'" >\n\n      <ion-list radio-group [(ngModel)]="selectedCard">\n\n        <ion-list-header>Mis Tarjetas</ion-list-header>\n\n        <ion-item *ngFor="let card of cards" >\n\n          <ion-radio [value]="card.id"></ion-radio>\n\n          <ion-label>\n\n            <h2><strong>{{card.card_openpay.bank_name}}</strong> {{card.card_openpay.card_number}}</h2>\n\n            <p>{{card.card_openpay.holder_name}} | {{card.card_openpay.brand}}</p>\n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <button ion-button (click)="openTarjetaAdd()" >Agregar Tarjeta</button>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-card> -->\n\n\n\n    <ion-card *ngIf="method == \'tienda\'">\n\n      <img src="https://www.zamnademy.com/static/marcas.png" alt="">\n\n    </ion-card>\n\n\n\n    <!-- <ion-card *ngIf="method == \'card\'" >\n\n      <ion-card-content>\n\n        <div class="col-xs-12">\n\n          <strong>MSI:</strong>\n\n          <div class="checkbox">\n\n            <label><input type="checkbox" [(ngModel)]="isPlan">¿Requiere facilidades de pago?</label>\n\n          </div>\n\n        </div>\n\n        <div class="col-xs-12" *ngIf="isPlan" >\n\n          <div class="radio">\n\n            <label><input type="radio" [(ngModel)]="plan" [value]="3">3 meses | Tasa: Visa/MasterCard - 4.80% | Amex - 3.80%</label>\n\n          </div>\n\n          <div class="radio">\n\n            <label><input type="radio" [(ngModel)]="plan" [value]="6">6 meses | Tasa: Visa/MasterCard - 7.80% | Amex - 5.80%</label>\n\n          </div>\n\n          <div class="radio">\n\n            <label><input type="radio" [(ngModel)]="plan" [value]="9">9 meses | Tasa: Visa/MasterCard - 10.80% | Amex - 7.80%</label>\n\n          </div>\n\n          <div class="radio">\n\n            <label><input type="radio" [(ngModel)]="plan" [value]="12">12 meses | Tasa: Visa/MasterCard - 13.80% | Amex - 9.80%</label>\n\n          </div>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card> -->\n\n\n\n    <ion-card *ngIf="method == \'deposito\'">\n\n      <ion-card-content>\n\n        <ion-item>\n\n          <strong>Número de Cuenta: </strong> 0465048958\n\n        </ion-item>\n\n        Depósito a la cuenta de Bancomer número: 0465048958. Sucursal: 3544 (a veces la preguntan)\n\n        A nombre de <strong>Constantino Hernández</strong>\n\n        Haz click en el botón "Pagar" para crear un pago pendiente. Cuando hayas realizado tu depósito sube una foto de\n\n        tu comprobante para que sea aceptado tu pago.\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card *ngIf="method == \'transferencia\'">\n\n      <ion-card-content>\n\n        <ion-item>\n\n          <strong>Transferencia con CLABE Interbancaria: </strong> 012180004650489587\n\n        </ion-item>\n\n        A nombre de <strong>Constantino Hernández</strong> <br>\n\n        Haz click en el botón "Pagar" para crear un pago pendiente. Cuando hayas realizado tu depósito sube una foto de\n\n        tu comprobante para que sea aceptado tu pago.\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card *ngIf="method == \'efectivo_cu\' || method == \'efectivo_centromedico\'">\n\n      <ion-card-content>\n\n        Para pagar en efectivo directamente con los coordinadores, solo envianos un mensaje por WhatsApp a nuestro\n\n        nùmero de atención: +52 55 6429 0902, para coordinar una cita y te entregaremos un comprobante de pago, que será\n\n        tan válido como el del depósito bancario, con el que podrás actualizar tu pago en el sistema. <br>\n\n        Haz click en el botón "Pagar" para crear un pago pendiente. Cuando hayas realizado el pago directamente con\n\n        nosotros, sube una foto de tu comprobante para que sea aceptado tu pago.\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <div class="flex flex-col justify-center align-center" *ngIf="control">\n\n      <p class="c-error" *ngIf="amount < 5">El monto a pagar debe ser mayor a $ 5</p>\n\n      <p class="c-error" *ngIf="amount > control.amountLeft">El monto a pagar NO PUEDE ser mayor a $\n\n        {{control.amountLeft | number}}</p>\n\n      <button ion-button (click)="pagar()" [disabled]="!enableButton()">\n\n        <span *ngIf="method != \'tienda\'">Pagar</span>\n\n        <span *ngIf="method == \'tienda\'">Obtener recibo para cualquier tienda</span>\n\n      </button>\n\n      <a [href]="recibo" target="_blank" ion-button *ngIf="recibo">Descargar comprobante para pagar</a>\n\n    </div>\n\n\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\arcan\code\zamna-pagos\src\pages\pago-add\pago-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_pay_pay__["a" /* PayProvider */]])
    ], PagoAddPage);
    return PagoAddPage;
}());

//# sourceMappingURL=pago-add.js.map

/***/ })

});
//# sourceMappingURL=12.js.map