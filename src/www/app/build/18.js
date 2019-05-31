webpackJsonp([18],{

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramaBloquePageModule", function() { return ProgramaBloquePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__programa_bloque__ = __webpack_require__(815);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProgramaBloquePageModule = /** @class */ (function () {
    function ProgramaBloquePageModule() {
    }
    ProgramaBloquePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__programa_bloque__["a" /* ProgramaBloquePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__programa_bloque__["a" /* ProgramaBloquePage */]),
            ],
        })
    ], ProgramaBloquePageModule);
    return ProgramaBloquePageModule;
}());

//# sourceMappingURL=programa-bloque.module.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramaBloquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProgramaBloquePage = /** @class */ (function () {
    function ProgramaBloquePage(navCtrl, navParams, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.id = this.navParams.get('id');
    }
    ProgramaBloquePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.bloque$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].CONTENT).doc(this.id).valueChanges();
        this.temas$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].CONTENT, function (ref) { return ref.where('parent_id', '==', _this.id); }).valueChanges();
    };
    ProgramaBloquePage.prototype.openTema = function (id) {
        this.navCtrl.push('ClaseDetailPage', { type: 'tema', id: id });
    };
    ProgramaBloquePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-programa-bloque',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\programa-bloque\programa-bloque.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Bloque</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n  <ion-grid>\n\n\n\n    <ion-row *ngIf="bloque$ | async as bloque">\n\n      <ion-col col-12>\n\n        <h4>{{bloque.name}}</h4>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="temas$ | async as temas">\n\n      <ion-col col-12>\n\n        <ion-list>\n\n          <ion-list-header>Temas</ion-list-header>\n\n          <ion-item (click)="openTema(tema.id)" *ngFor="let tema of temas">{{tema.name}}</ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\programa-bloque\programa-bloque.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["AngularFirestore"]])
    ], ProgramaBloquePage);
    return ProgramaBloquePage;
}());

//# sourceMappingURL=programa-bloque.js.map

/***/ })

});
//# sourceMappingURL=18.js.map