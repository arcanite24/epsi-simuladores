webpackJsonp([17],{

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminControlDetailPageModule", function() { return AdminControlDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_control_detail__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_moment__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdminControlDetailPageModule = /** @class */ (function () {
    function AdminControlDetailPageModule() {
    }
    AdminControlDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_control_detail__["a" /* AdminControlDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ngx_moment__["a" /* MomentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_control_detail__["a" /* AdminControlDetailPage */]),
            ],
        })
    ], AdminControlDetailPageModule);
    return AdminControlDetailPageModule;
}());

//# sourceMappingURL=admin-control-detail.module.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminControlDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_back_back__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_models__ = __webpack_require__(455);
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






var AdminControlDetailPage = /** @class */ (function () {
    function AdminControlDetailPage(navCtrl, navParams, toast, back, load, modal, viewCtrl, auth, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.back = back;
        this.load = load;
        this.modal = modal;
        this.viewCtrl = viewCtrl;
        this.auth = auth;
        this.afs = afs;
        this.control = this.navParams.get('control');
        this.lightModel = __WEBPACK_IMPORTED_MODULE_5__app_app_models__["b" /* EsencialModel */];
        this.premiumModel = __WEBPACK_IMPORTED_MODULE_5__app_app_models__["c" /* PremiumModel */];
        this.tempranoModel = __WEBPACK_IMPORTED_MODULE_5__app_app_models__["e" /* TempranoModel */];
    }
    AdminControlDetailPage.prototype.ionViewDidLoad = function () {
        if (!this.control)
            this.navCtrl.setRoot('AdminPage');
        this.loadControl();
    };
    AdminControlDetailPage.prototype.loadControl = function () {
        var _this = this;
        this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].CONTROL_PAGO).doc(this.control.id).valueChanges().subscribe(function (data) {
            _this.control = data;
            _this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].ZAMNA_PAGO, function (ref) { return ref
                .where('control', '==', _this.control.id); })
                .valueChanges()
                .subscribe(function (pagos) {
                console.log(_this.control.id, pagos);
                _this.pagos = pagos;
                _this.user$ = _this.auth.findUserByEmail(_this.control.user.email);
            });
        });
    };
    Object.defineProperty(AdminControlDetailPage.prototype, "totalPagado", {
        get: function () {
            if (!this.pagos)
                return 0;
            if (!this.control)
                return 0;
            if (!this.control.pagos)
                return 0;
            if (this.control.pagos.length <= 0)
                return 0;
            console.log(this.pagos);
            return this.pagos
                .filter(function (p) { return p.status === 'approved' || p.pago.status === 'approved' || p.pago.status === 'completed'; })
                .map(function (p) { return parseInt(p.amount.toString()); })
                .reduce(function (a, b) { return a + b; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    AdminControlDetailPage.prototype.updateControlField = function (field, editField) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].CONTROL_PAGO).doc(this.control.id).update((_a = {}, _a[field] = this.control[field], _a))];
                    case 1:
                        _b.sent();
                        this.control[editField] = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminControlDetailPage.prototype.openPagoDetail = function (pago) {
        var m = this.modal.create('PagoDetailPage', { pago: pago });
        m.present();
        /* m.onDidDismiss(data => this.loadControl()) */
    };
    AdminControlDetailPage.prototype.deleteControl = function (id) {
        this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].CONTROL_PAGO).doc(id).delete();
        /* this.back.deleteControlPago(id).subscribe(data => this.navCtrl.setRoot('AdminPage'), err => this.toast.create({message: 'No se pudo borrar el control de pago...', duration: 2000}).present()) */
    };
    AdminControlDetailPage.prototype.setRole = function (roles, uid) {
        var payload = {};
        for (var _i = 0, roles_1 = roles; _i < roles_1.length; _i++) {
            var role = roles_1[_i];
            payload[role] = true;
        }
        this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].USER).doc(uid).update(payload);
    };
    AdminControlDetailPage.prototype.removeRole = function (roles, uid) {
        var payload = {};
        for (var _i = 0, roles_2 = roles; _i < roles_2.length; _i++) {
            var role = roles_2[_i];
            payload[role] = false;
        }
        this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].USER).doc(uid).update(payload);
    };
    AdminControlDetailPage.prototype.isRole = function (role) {
        if (!this.control)
            return false;
        if (!this.control.user)
            return false;
        return this.control.user.roles.indexOf(role) >= 0;
    };
    AdminControlDetailPage.prototype.saveRoles = function (roles) {
        var _this = this;
        this.back.updateUser(this.control.user.id, { roles: roles }).subscribe(function (data) { return _this.toast.create({ message: 'Permisos guardados correctamente...', duration: 2000 }).present(); });
    };
    AdminControlDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin-control-detail',template:/*ion-inline-start:"C:\Users\arcan\code\zamna-pagos\src\pages\admin-control-detail\admin-control-detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Control de Pago</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-grid fixed>\n\n    <div class="flex flex-col justify-center align-center">\n      <img [src]="control.user.avatar" *ngIf="control && control.user && control.user.avatar" class="user-avatar">\n    </div>\n\n    <ion-card *ngIf="control" >\n\n      <ion-list *ngIf="control.user">\n        <ion-list-header>Alumno</ion-list-header>\n        <ion-item>\n          <strong>Nombre: </strong> {{control.user.displayName ? control.user.displayName : control.user.name + \' \' + control.user.lastName}}\n        </ion-item>\n        <ion-item>\n          <strong>Email: </strong> {{control.user ? control.user.new_email : \'\'}}\n        </ion-item>\n        <ion-item>\n          <strong>Fecha de registro: </strong> {{control.user ? control.user.createdAt: \'\' | amDateFormat:\'LL\'}}\n        </ion-item>\n      </ion-list>\n\n      <ion-list class="mt-2">\n        <ion-list-header>Control de Pago</ion-list-header>\n\n        <ion-item>\n          <strong>Tipo de pago: </strong> {{control.name}}\n        </ion-item>\n\n        <ion-item *ngIf="!control.editAmount" >\n          <button ion-button item-start clear icon-only *ngIf="auth.isAdmin" (click)="control.editAmount = true">\n            <ion-icon name="create" color="discreto"></ion-icon>\n          </button>\n          <strong>Monto restante: <span style="color:red">$ {{control.amountLeft | number}}</span></strong>\n        </ion-item>\n        <ion-item *ngIf="control.editAmount">\n          <button ion-icon item-start clear icon-only (click)="updateControlField(\'amountLeft\', \'editAmount\')">\n            <ion-icon name="checkmark-circle-outline" color="success"></ion-icon>\n          </button>\n          <ion-input [(ngModel)]="control.amountLeft" type="number" placeholder="Monto restante"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="!control.editLimitDate" >\n          <button ion-button item-start clear icon-only (click)="control.editLimitDate = true" *ngIf="auth.isAdmin">\n            <ion-icon name="create" color="discreto"></ion-icon>\n          </button>\n          <strong>Fecha límite: <span style="color:rgb(0, 132, 255)">{{control.limitDate | amDateFormat:\'LL\'}}</span></strong>\n        </ion-item>\n        <ion-item *ngIf="control.editLimitDate" >\n          <button ion-button item-start clear icon-only (click)="updateControlField(\'limitDate\', \'editLimitDate\')">\n            <ion-icon name="checkmark-circle-outline" color="success"></ion-icon>\n          </button>\n          <ion-input [(ngModel)]="control.limitDate" type="date" placeholder="Fecha límite de pago"></ion-input>\n        </ion-item>\n\n      </ion-list>\n\n      <ion-list class="mt-2">\n        <ion-list-header>Pagos</ion-list-header>\n        <ion-item *ngFor="let pago of pagos" >\n          <button ion-button item-start icon-only clear (click)="openPagoDetail(pago)" >\n            <ion-icon name="information-circle"></ion-icon>\n          </button>\n          <h2><strong>$ {{pago.amount | number}}</strong> pagados <span *ngIf="pago.createdAt">{{pago.createdAt | amCalendar}}</span> <span *ngIf="!pago.createdAt"> | fecha no asignada</span></h2>\n          <p>\n            Status:\n            <span *ngIf="pago.pago.status == \'completed\' || pago.pago.status == \'approved\'" style="color:green">Completado</span>\n            <span *ngIf="pago.pago.status == \'waiting\'" style="color:rgb(255, 208, 0)">Esperando Aprobación</span>\n            <span *ngIf="pago.pago.status == \'uploading\'" style="color:rgb(0, 183, 255)">Subir comprobante</span>\n            <span *ngIf="pago.pago.status == \'in_progress\'" style="color:rgb(0, 183, 255)">Esperando pago en tienda</span>\n            <span *ngIf="pago.pago.status == \'failed\'" style="color:red">Rechazado</span>\n          </p>\n        </ion-item>\n        <ion-item>\n          <strong>Total pagado: <span style="color:rgb(76, 212, 48)">$ {{totalPagado | number}}</span></strong>\n        </ion-item>\n      </ion-list>\n\n    </ion-card>\n\n    <ion-card *ngIf="user$ | async as user" >\n      <ion-card-content *ngIf="auth.isAdmin" >\n        <p>Permisos para {{user.displayName}} {{user.email}}</p>\n\n        <button ion-button (click)="setRole(premiumModel, user.uid)" *ngIf="!user.isPremium2020" >Conceder Premium 2020</button>\n        <button ion-button color="danger" (click)="removeRole(premiumModel, user.uid)"  *ngIf="user.isPremium2020">Quitar Premium 2020</button>\n\n        <button ion-button (click)="setRole(lightModel, user.uid)" *ngIf="!user.isLight2020" >Conceder Light</button>\n        <button ion-button color="danger" (click)="removeRole(lightModel, user.uid)"  *ngIf="user.isLight2020">Quitar Light</button>\n\n        <!-- <button ion-button (click)="setRole(tempranoModel, user.uid)" *ngIf="!user.isTemprano" >Conceder PIT</button>\n        <button ion-button color="danger" (click)="removeRole(tempranoModel, user.uid)"  *ngIf="user.isTemprano">Quitar PIT</button> -->\n\n      </ion-card-content>\n    </ion-card>\n\n    <div class="flex flex-col justify-center align-center">\n      <button ion-button (click)="navCtrl.push(\'ProfilePage\', {uid: control.user.id})" >Ver Perfil</button>\n      <button ion-button color="danger" (click)="deleteControl(control.id)" *ngIf="auth.isAdmin">Borrar Solicitud de Pago</button>\n    </div>\n\n    <ion-card *ngIf="control">\n      <pre>{{ control | json }}</pre>\n    </ion-card>\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\arcan\code\zamna-pagos\src\pages\admin-control-detail\admin-control-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], AdminControlDetailPage);
    return AdminControlDetailPage;
}());

//# sourceMappingURL=admin-control-detail.js.map

/***/ })

});
//# sourceMappingURL=17.js.map