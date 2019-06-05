webpackJsonp([17],{

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramaMateriaPageModule", function() { return ProgramaMateriaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__programa_materia__ = __webpack_require__(820);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProgramaMateriaPageModule = /** @class */ (function () {
    function ProgramaMateriaPageModule() {
    }
    ProgramaMateriaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__programa_materia__["a" /* ProgramaMateriaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__programa_materia__["a" /* ProgramaMateriaPage */]),
            ],
        })
    ], ProgramaMateriaPageModule);
    return ProgramaMateriaPageModule;
}());

//# sourceMappingURL=programa-materia.module.js.map

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramaMateriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_models__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProgramaMateriaPage = /** @class */ (function () {
    function ProgramaMateriaPage(afs, navParams, navCtrl) {
        this.afs = afs;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.id = this.navParams.get('id');
    }
    ProgramaMateriaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.materia$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].CONTENT).doc(this.id).valueChanges();
        this.bloques$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].CONTENT, function (ref) { return ref.where('parent_id', '==', _this.id); }).valueChanges();
    };
    ProgramaMateriaPage.prototype.openBloque = function (id) {
        this.navCtrl.push('ProgramaBloquePage', { id: id });
    };
    ProgramaMateriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-programa-materia',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/programa-materia/programa-materia.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Materia</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n  <ion-grid>\n\n    <ion-row *ngIf="materia$ | async as materia">\n      <ion-col col-12>\n        <h4 text-center>{{materia.name}}</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="bloques$ | async as bloques">\n      <ion-col col-6 *ngFor="let bloque of bloques" (click)="openBloque(bloque.id)">\n        <div class="flex flex-col flex-center">\n          <img [src]="bloque.cover || \'https://via.placeholder.com/128\'" alt="" class="w-100">\n          <strong text-center="">{{bloque.name}}</strong>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/programa-materia/programa-materia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], ProgramaMateriaPage);
    return ProgramaMateriaPage;
}());

//# sourceMappingURL=programa-materia.js.map

/***/ })

});
//# sourceMappingURL=17.js.map