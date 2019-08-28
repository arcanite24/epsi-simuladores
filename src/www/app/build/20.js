webpackJsonp([20],{

/***/ 1206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimuladoresPageModule", function() { return SimuladoresPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simuladores__ = __webpack_require__(1287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SimuladoresPageModule = class SimuladoresPageModule {
};
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

//# sourceMappingURL=simuladores.module.js.map

/***/ }),

/***/ 1287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimuladoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(603);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let SimuladoresPage = class SimuladoresPage {
    constructor(navCtrl, navParams, afs, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.auth = auth;
        this.isOffline = false;
    }
    ionViewDidLoad() {
        this.auth.user$.subscribe(user => {
            if (user && !this.completed)
                this.completed = user.completedExams || [];
            if (user && !this.exams$) {
                this.loadExams(user);
            }
        });
    }
    loadExams(user) {
        this.exams$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].EXAM, ref => ref
            .where('type', '==', __WEBPACK_IMPORTED_MODULE_3__app_app_models__["b" /* ExamTypes */].SIMULADOR)
            .where('date', '<=', __WEBPACK_IMPORTED_MODULE_4_moment___default()().endOf('day').toISOString()))
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(list => this.filterWithRoles(list.reverse().filter(e => this.isUnlocked(user, e)), user)));
    }
    isUnlocked(user, exam) {
        if (user.isPremium2019 && !exam.isPresencial)
            return true;
        if (user.isPresencial && exam.isPresencial)
            return true;
        if (user.is3602019 && exam.isPresencial)
            return true;
        return false;
    }
    filterWithRoles(exams = [], user) {
        return exams.filter(e => {
            if (e.unlockedBy) {
                console.log(e.unlockedBy, user[e.unlockedBy]);
                return !!user[e.unlockedBy];
            }
            else {
                return true;
            }
        });
    }
};
SimuladoresPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-simuladores',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/simuladores/simuladores.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Simuladores</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ng-template #loader>\n    <div class="flex-col">\n      <img src="assets/imgs/rings.svg">\n    </div>\n  </ng-template>\n\n  <!-- <pre>{{ completed | json }}</pre> -->\n\n  <ion-list *ngIf="exams$ | async as sims else loader">\n    <ion-item *ngFor="let s of sims" (click)="navCtrl.push(\'ExamenDetailPage\', {id: s.id, type: \'simulador\'})">\n      <ion-icon item-start name="checkmark" color="bien" *ngIf="completed && completed[s.id]"></ion-icon>\n      <h2>{{s.name}}</h2>\n      <!--<p>{{s.desc}}</p>-->\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf="isOffline">\n    <ion-list-header>Simuladores Offline</ion-list-header>\n    <ion-item *ngFor="let s of downloadList" (click)="navCtrl.push(\'ExamenDetailPage\', {id: s.id, type: \'simulador\', offline: true, data: s})">\n      <h2>{{s.name}}</h2>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/simuladores/simuladores.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
        __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]])
], SimuladoresPage);

//# sourceMappingURL=simuladores.js.map

/***/ })

});
//# sourceMappingURL=20.js.map