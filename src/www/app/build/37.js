webpackJsonp([37],{

/***/ 1112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForosPageModule", function() { return ForosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foros__ = __webpack_require__(1188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForosPageModule = /** @class */ (function () {
    function ForosPageModule() {
    }
    ForosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__foros__["a" /* ForosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__foros__["a" /* ForosPage */]),
            ],
        })
    ], ForosPageModule);
    return ForosPageModule;
}());

//# sourceMappingURL=foros.module.js.map

/***/ }),

/***/ 1188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_models__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForosPage = /** @class */ (function () {
    function ForosPage(navCtrl, navParams, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.cats$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].THREAD_CATEGORY).valueChanges();
    }
    ForosPage.prototype.ionViewDidLoad = function () {
    };
    ForosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-foros',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/foros/foros.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Categorías</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ng-template #loader>\n    <div class="flex-col">\n      <img src="assets/imgs/rings.svg">\n    </div>\n  </ng-template>\n\n  <ion-list *ngIf="cats$ | async as foros else loader">\n    <ion-item *ngFor="let c of foros" (click)="navCtrl.push(\'ForoDetailPage\', {id: c.id})">\n      <h2>{{c.name}}</h2>\n      <!--<p>{{c.desc}}</p>-->\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/foros/foros.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"]])
    ], ForosPage);
    return ForosPage;
}());

//# sourceMappingURL=foros.js.map

/***/ })

});
//# sourceMappingURL=37.js.map