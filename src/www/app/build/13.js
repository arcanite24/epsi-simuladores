webpackJsonp([13],{

/***/ 1170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopUsersPageModule", function() { return TopUsersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__top_users__ = __webpack_require__(1248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TopUsersPageModule = class TopUsersPageModule {
};
TopUsersPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__top_users__["a" /* TopUsersPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__top_users__["a" /* TopUsersPage */]),
        ],
    })
], TopUsersPageModule);

//# sourceMappingURL=top-users.module.js.map

/***/ }),

/***/ 1248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopUsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_models__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_stats_stats__ = __webpack_require__(592);
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






let TopUsersPage = class TopUsersPage {
    constructor(auth, afs, stats) {
        this.auth = auth;
        this.afs = afs;
        this.stats = stats;
    }
    ngOnInit() {
        this.users$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].USER, ref => ref
            .where('promedio', '>', 0)
            .orderBy('promedio', 'desc')
            .limit(5))
            .valueChanges();
        this.reloadUsers();
    }
    reloadUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].USER).valueChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["take"])(1)).toPromise();
            for (const user of users) {
                const promedio = yield this.stats.computeUserAverage(user.uid);
                yield this.afs.doc(`${__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].USER}/${user.uid}`).update({ promedio: promedio });
            }
        });
    }
};
TopUsersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-top-users',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/top-users/top-users.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Cuadro de Honor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-list *ngIf="users$ | async as users">\n    <ion-item *ngFor="let user of users">\n      <ion-avatar item-start>\n        <img [src]="user.photoURL">\n      </ion-avatar>\n      <h2>{{user.displayName}}</h2>\n      <p>\n        <strong>{{user.promedio | number}}</strong>\n      </p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/top-users/top-users.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__["AngularFirestore"],
        __WEBPACK_IMPORTED_MODULE_5__providers_stats_stats__["a" /* StatsProvider */]])
], TopUsersPage);

//# sourceMappingURL=top-users.js.map

/***/ })

});
//# sourceMappingURL=13.js.map