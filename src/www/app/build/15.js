webpackJsonp([15],{

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimuladoresPageModule", function() { return SimuladoresPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simuladores__ = __webpack_require__(854);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SimuladoresPageModule = /** @class */ (function () {
    function SimuladoresPageModule() {
    }
    SimuladoresPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__simuladores__["a" /* SimuladoresPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__simuladores__["a" /* SimuladoresPage */]),
            ],
        })
    ], SimuladoresPageModule);
    return SimuladoresPageModule;
}());

//# sourceMappingURL=simuladores.module.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimuladoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SimuladoresPage = /** @class */ (function () {
    function SimuladoresPage(navCtrl, navParams, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.isOffline = false;
    }
    SimuladoresPage.prototype.ionViewDidLoad = function () {
        this.exams$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].EXAM, function (ref) { return ref
            .where('type', '==', __WEBPACK_IMPORTED_MODULE_3__app_app_models__["b" /* ExamTypes */].SIMULADOR)
            .where('date', '<=', __WEBPACK_IMPORTED_MODULE_4_moment___default()().endOf('day').toISOString()); })
            .valueChanges()
            .pipe(
        /* map(list => list.filter(exam => moment(exam.date).isSameOrBefore(moment().endOf('day'))).reverse()), */
        Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (list) { return list.reverse(); }));
        /* this.back.getSimuladoresHome().subscribe(data => this.sims = data.reverse(), err => {
          const list = JSON.parse(localStorage.getItem('zamnademy-cache-list'))
          this.downloadList = list ? list : []
          this.isOffline = true
        }) */
    };
    SimuladoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-simuladores',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/simuladores/simuladores.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Simuladores</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ng-template #loader>\n    <div class="flex-col">\n      <img src="assets/imgs/rings.svg">\n    </div>\n  </ng-template>\n\n  <ion-list *ngIf="exams$ | async as sims else loader">\n    <ion-item *ngFor="let s of sims" (click)="navCtrl.push(\'ExamenDetailPage\', {id: s.id, type: \'simulador\'})">\n      <h2>{{s.name}}</h2>\n      <!--<p>{{s.desc}}</p>-->\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf="isOffline">\n    <ion-list-header>Simuladores Offline</ion-list-header>\n    <ion-item *ngFor="let s of downloadList" (click)="navCtrl.push(\'ExamenDetailPage\', {id: s.id, type: \'simulador\', offline: true, data: s})">\n      <h2>{{s.name}}</h2>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/simuladores/simuladores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"]])
    ], SimuladoresPage);
    return SimuladoresPage;
}());

//# sourceMappingURL=simuladores.js.map

/***/ })

});
//# sourceMappingURL=15.js.map