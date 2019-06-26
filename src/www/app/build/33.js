webpackJsonp([33],{

/***/ 1145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiCursoPageModule", function() { return MiCursoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mi_curso__ = __webpack_require__(1221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let MiCursoPageModule = class MiCursoPageModule {
};
MiCursoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__mi_curso__["a" /* MiCursoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mi_curso__["a" /* MiCursoPage */]),
        ],
    })
], MiCursoPageModule);

//# sourceMappingURL=mi-curso.module.js.map

/***/ }),

/***/ 1221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiCursoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_models__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let MiCursoPage = class MiCursoPage {
    constructor(afs, auth, navCtrl) {
        this.afs = afs;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.mainContent = [...__WEBPACK_IMPORTED_MODULE_3__app_app_config__["b" /* contentHierarchy */]].shift();
    }
    ngOnInit() {
        this.content$ = this.afs
            .collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].CONTENT, ref => ref.where('type', '==', this.mainContent))
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(content => content
            .filter(c => !c.name.includes('Temprano'))
            .filter(c => !c.ignoreOnSmartCalendar)
            .filter(c => c.liberadoInPrograma)));
    }
    isBlur(name) {
        if (!this.auth.user)
            return true;
        if (!name)
            return true;
        if (this.auth.isAdmin)
            return false;
        if (this.auth.isZamna360_2019)
            return false;
        if (this.auth.isPremium2019)
            return false;
        if (name.toLowerCase().includes('temprano')) {
            return !this.auth.isTemprano;
        }
        return false;
    }
    isLiberado(content) {
        if (!this.auth.user)
            return false;
        if (this.auth.user.isAdmin)
            return true;
        if (this.auth.user.isPremium2019)
            return true;
        return content.liberadoInPrograma;
    }
};
MiCursoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-mi-curso',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/mi-curso/mi-curso.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Mi Curso</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-grid *ngIf="content$ | async as content">\n    <ion-row>\n\n      <ion-col *ngFor="let m of content" col-6>\n        <ion-card (click)="navCtrl.push(\'MateriaAltPage\', {id: m.id})">\n          <img [src]="m.cover" alt="Content">\n          <ion-card-content>\n            <ion-card-title>{{m.name}}</ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/mi-curso/mi-curso.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["AngularFirestore"],
        __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */]])
], MiCursoPage);

//# sourceMappingURL=mi-curso.js.map

/***/ })

});
//# sourceMappingURL=33.js.map