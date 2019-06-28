webpackJsonp([20],{

/***/ 1159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulacrosPageModule", function() { return SimulacrosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simulacros__ = __webpack_require__(1235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SimulacrosPageModule = class SimulacrosPageModule {
};
SimulacrosPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__simulacros__["a" /* SimulacrosPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__simulacros__["a" /* SimulacrosPage */]),
        ],
    })
], SimulacrosPageModule);

//# sourceMappingURL=simulacros.module.js.map

/***/ }),

/***/ 1235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimulacrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let SimulacrosPage = class SimulacrosPage {
    constructor(navCtrl, navParams, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.isOffline = false;
    }
    ionViewDidLoad() {
        this.exams$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].EXAM, ref => ref
            .where('type', '==', __WEBPACK_IMPORTED_MODULE_3__app_app_models__["b" /* ExamTypes */].SIMULACRO))
            .valueChanges()
            .pipe(
        /* map(list => list.filter(exam => moment(exam.date).isSameOrBefore(moment().endOf('day'))).reverse()), */
        Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(list => list.filter(e => e.liberado).reverse()));
        /* this.back.getSimuladoresHome().subscribe(data => this.sims = data.reverse(), err => {
          const list = JSON.parse(localStorage.getItem('zamnademy-cache-list'))
          this.downloadList = list ? list : []
          this.isOffline = true
        }) */
    }
};
SimulacrosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-simulacros',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/simulacros/simulacros.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Simulacros</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ng-template #loader>\n    <div class="flex-col">\n      <img src="assets/imgs/rings.svg">\n    </div>\n  </ng-template>\n\n  <ion-list *ngIf="exams$ | async as sims else loader">\n    <ion-item *ngFor="let s of sims" (click)="navCtrl.push(\'ExamenDetailPage\', {id: s.id, type: \'simulador\'})">\n      <h2>{{s.name}}</h2>\n      <!--<p>{{s.desc}}</p>-->\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/simulacros/simulacros.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"]])
], SimulacrosPage);

//# sourceMappingURL=simulacros.js.map

/***/ })

});
//# sourceMappingURL=20.js.map