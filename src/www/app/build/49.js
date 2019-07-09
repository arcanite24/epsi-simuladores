webpackJsonp([49],{

/***/ 1125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsesoriasPageModule", function() { return AsesoriasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asesorias__ = __webpack_require__(1203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AsesoriasPageModule = class AsesoriasPageModule {
};
AsesoriasPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__asesorias__["a" /* AsesoriasPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asesorias__["a" /* AsesoriasPage */]),
        ],
    })
], AsesoriasPageModule);

//# sourceMappingURL=asesorias.module.js.map

/***/ }),

/***/ 1203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsesoriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_back_back__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_models__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let AsesoriasPage = class AsesoriasPage {
    constructor(navCtrl, navParams, back, modal, auth, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.modal = modal;
        this.auth = auth;
        this.afs = afs;
        this.asesorias$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].LIVESTREAM).valueChanges();
    }
    ionViewDidLoad() {
    }
    openAdd() {
        const m = this.modal.create('AsesoriaAddPage');
        m.present();
        m.onDidDismiss(data => {
            if (data)
                this.ionViewDidLoad();
        });
    }
};
AsesoriasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-asesorias',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/asesorias/asesorias.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Asesorias</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n  \n  <ng-template #loader>\n    <div class="flex-col">\n      <img src="assets/imgs/rings.svg">\n    </div>\n  </ng-template>\n\n  <ion-list *ngIf="asesorias$ | async as asesorias else loader">\n    <ion-item *ngFor="let a of asesorias" (click)="navCtrl.push(\'AsesoriaDetailPage\', {id: a.id})">\n      <h2>{{a.name}}</h2>\n      <!--<p>{{a.desc}}</p>-->\n    </ion-item>\n  </ion-list>\n  \n  <ion-fab right bottom *ngIf="auth.isAdmin" >\n    <button ion-fab color="rojito" (click)="openAdd()" ><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n  \n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/asesorias/asesorias.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["AngularFirestore"]])
], AsesoriasPage);

//# sourceMappingURL=asesorias.js.map

/***/ })

});
//# sourceMappingURL=49.js.map