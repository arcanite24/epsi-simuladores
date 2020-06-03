webpackJsonp([43],{

/***/ 1172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspecialidadesPageModule", function() { return EspecialidadesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__especialidades__ = __webpack_require__(1253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let EspecialidadesPageModule = class EspecialidadesPageModule {
};
EspecialidadesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__especialidades__["a" /* EspecialidadesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__especialidades__["a" /* EspecialidadesPage */]),
        ],
    })
], EspecialidadesPageModule);

//# sourceMappingURL=especialidades.module.js.map

/***/ }),

/***/ 1253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EspecialidadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let EspecialidadesPage = class EspecialidadesPage {
    constructor(navCtrl, navParams, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.isPrograma = this.navParams.get('isPrograma');
    }
    ionViewDidLoad() {
        /* this.back.getAllMaterias().subscribe(data => this.materias = data.filter(m => m.name.includes('Temprano')), err => this.toast.create({message: 'No se pudieron cargar las materias...', duration: 2000}).present()) */
        this.materias$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].CONTENT)
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(materias => materias.filter(m => m.name.includes('Temprano'))));
    }
    openMateria(id) {
        this.navCtrl.push(this.isPrograma ? 'ProgramaMateriaPage' : 'MateriaPage', { id });
    }
};
EspecialidadesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-especialidades',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/especialidades/especialidades.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Especialidades</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ng-template #loader>\n    <div class="flex-col">\n      <img src="assets/imgs/rings.svg">\n    </div>\n  </ng-template>\n\n  <div class="home-grid" *ngIf="materias$ | async as materias">\n    <div class="home-tile" *ngFor="let m of materias">\n      <ion-card (click)="openMateria(m.id)">\n        <img [src]="m.cover">\n        <!--<ion-card-content>\n          <ion-card-title>{{m.name}}</ion-card-title>\n          <p>{{m.desc}}</p>\n        </ion-card-content>-->\n      </ion-card>\n    </div>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/especialidades/especialidades.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"]])
], EspecialidadesPage);

//# sourceMappingURL=especialidades.js.map

/***/ })

});
//# sourceMappingURL=43.js.map