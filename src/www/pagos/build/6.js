webpackJsonp([6],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarjetaAddPageModule", function() { return TarjetaAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tarjeta_add__ = __webpack_require__(748);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TarjetaAddPageModule = /** @class */ (function () {
    function TarjetaAddPageModule() {
    }
    TarjetaAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tarjeta_add__["a" /* TarjetaAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tarjeta_add__["a" /* TarjetaAddPage */]),
            ],
        })
    ], TarjetaAddPageModule);
    return TarjetaAddPageModule;
}());

//# sourceMappingURL=tarjeta-add.module.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarjetaAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_back_back__ = __webpack_require__(188);
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



var TarjetaAddPage = /** @class */ (function () {
    function TarjetaAddPage(navCtrl, navParams, back, toast, load, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.toast = toast;
        this.load = load;
        this.viewCtrl = viewCtrl;
        this.sess_id = OpenPay.deviceData.setup();
        this.addData = {};
    }
    TarjetaAddPage.prototype.ionViewDidLoad = function () {
    };
    TarjetaAddPage.prototype.generateToken = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            OpenPay.token.create(data, function (token) {
                resolve(token);
            }, function (err) {
                console.log(err);
                _this.toast.create({ message: 'No se pudo generar el Token...', duration: 2000 }).present();
                reject(err);
            });
        });
    };
    TarjetaAddPage.prototype.addCard = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var l, token, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!data)
                            return [2 /*return*/];
                        l = this.load.create({ content: 'Agregando Tarjeta...' });
                        l.present();
                        if (!this.back.validate(data, ['holder_name', 'card_number', 'cvv2', 'expiration_month', 'expiration_year'], this.toast))
                            return [2 /*return*/, l.dismiss()];
                        if (!OpenPay.card.validateCardNumber(data.card_number)) {
                            l.dismiss();
                            return [2 /*return*/, this.toast.create({ message: 'El número de tarjeta es inválido...', duration: 2000 }).present()];
                        }
                        if (!OpenPay.card.validateCVC(data.cvv2)) {
                            l.dismiss();
                            return [2 /*return*/, this.toast.create({ message: 'El código de seguridad es inválido...', duration: 2000 }).present()];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.generateToken(data)];
                    case 2:
                        token = _a.sent();
                        console.log(token);
                        this.back.addTarjeta({
                            elputoid: this.back.uid,
                            token: token.data.id,
                            sess_id: this.sess_id
                        }).subscribe(function (newCard) {
                            console.log(newCard);
                            if (newCard.e) {
                                _this.toast.create({ message: 'Tarjeta inválida. Código ' + newCard.e.error_code, duration: 2000 }).present();
                                l.dismiss();
                            }
                            else {
                                _this.viewCtrl.dismiss(newCard);
                                l.dismiss();
                            }
                        }, function (err) {
                            console.log(err);
                            _this.toast.create({ message: 'Tarjeta inválida. Código 3001', duration: 2000 }).present();
                            l.dismiss();
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        l.dismiss();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TarjetaAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tarjeta-add',template:/*ion-inline-start:"/home/neri/code/zamna-pagos/src/pages/tarjeta-add/tarjeta-add.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Agregar Tarjeta</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-list>\n    <ion-item>\n      <ion-input placeholder="Nombre Completo" [(ngModel)]="addData.holder_name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Número de Tarjeta" type="number" [(ngModel)]="addData.card_number"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Código de Seguridad" [(ngModel)]="addData.cvv2" minlength="3" maxlength="4"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Mes de Expiración</ion-label>\n      <ion-select [(ngModel)]="addData.expiration_month">\n        <ion-option value="01">Enero</ion-option>\n        <ion-option value="02">Febrero</ion-option>\n        <ion-option value="03">Marzo</ion-option>\n        <ion-option value="04">Abril</ion-option>\n        <ion-option value="05">Mayo</ion-option>\n        <ion-option value="06">Junio</ion-option>\n        <ion-option value="07">Julio</ion-option>\n        <ion-option value="08">Agosto</ion-option>\n        <ion-option value="09">Septiembre</ion-option>\n        <ion-option value="10">Octubre</ion-option>\n        <ion-option value="11">Noviembre</ion-option>\n        <ion-option value="12">Diciembre</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Año de Expiración</ion-label>\n      <ion-select [(ngModel)]="addData.expiration_year">\n        <ion-option value="18">2018</ion-option>\n        <ion-option value="19">2019</ion-option>\n        <ion-option value="20">2020</ion-option>\n        <ion-option value="21">2021</ion-option>\n        <ion-option value="22">2022</ion-option>\n        <ion-option value="23">2023</ion-option>\n        <ion-option value="24">2024</ion-option>\n        <ion-option value="25">2025</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <div class="flex-col" padding>\n    <button ion-button block (click)="addCard(addData)">\n      <ion-icon name="add" class="mr-1"></ion-icon>\n      Agregar Tarjeta\n    </button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamna-pagos/src/pages/tarjeta-add/tarjeta-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], TarjetaAddPage);
    return TarjetaAddPage;
}());

//# sourceMappingURL=tarjeta-add.js.map

/***/ })

});
//# sourceMappingURL=6.js.map