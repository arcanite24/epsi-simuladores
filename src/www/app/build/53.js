webpackJsonp([53],{

/***/ 1163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsesoriaAddPageModule", function() { return AsesoriaAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asesoria_add__ = __webpack_require__(1244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AsesoriaAddPageModule = class AsesoriaAddPageModule {
};
AsesoriaAddPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__asesoria_add__["a" /* AsesoriaAddPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asesoria_add__["a" /* AsesoriaAddPage */]),
        ],
    })
], AsesoriaAddPageModule);

//# sourceMappingURL=asesoria-add.module.js.map

/***/ }),

/***/ 1244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsesoriaAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(157);
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




let AsesoriaAddPage = class AsesoriaAddPage {
    constructor(navCtrl, navParams, load, viewCtrl, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.load = load;
        this.viewCtrl = viewCtrl;
        this.afs = afs;
        this.addData = { name: '', desc: '', url: '' };
    }
    ionViewDidLoad() {
    }
    addAsesoria() {
        return __awaiter(this, void 0, void 0, function* () {
            const l = this.load.create({ content: 'Agregando Asesoría...' });
            l.present();
            const id = this.afs.createId();
            yield this.afs.doc(`${__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].LIVESTREAM}/${id}`).set(Object.assign({ id }, this.addData, { date: new Date().toISOString() }));
            l.dismiss();
            this.viewCtrl.dismiss();
        });
    }
};
AsesoriaAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-asesoria-add',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/asesoria-add/asesoria-add.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Agregar Asesoría</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n  \n  <ion-list>\n    <ion-item>\n      <ion-label>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="addData.name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Descripción</ion-label>\n      <ion-input type="text" [(ngModel)]="addData.desc"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>URL de YouTube</ion-label>\n      <ion-input type="text" [(ngModel)]="addData.url"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding class="flex-col">\n    <button ion-button color="secondary" (click)="addAsesoria()">Agregar Asesoría</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/asesoria-add/asesoria-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"]])
], AsesoriaAddPage);

//# sourceMappingURL=asesoria-add.js.map

/***/ })

});
//# sourceMappingURL=53.js.map