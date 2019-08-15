webpackJsonp([36],{

/***/ 1186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateriaAltPageModule", function() { return MateriaAltPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materia_alt__ = __webpack_require__(1266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let MateriaAltPageModule = class MateriaAltPageModule {
};
MateriaAltPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__materia_alt__["a" /* MateriaAltPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__materia_alt__["a" /* MateriaAltPage */]),
        ],
    })
], MateriaAltPageModule);

//# sourceMappingURL=materia-alt.module.js.map

/***/ }),

/***/ 1266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriaAltPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_models__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(603);
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





let MateriaAltPage = class MateriaAltPage {
    constructor(navCtrl, navParams, data, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.auth = auth;
        this.id = this.navParams.get('id');
    }
    ionViewDidLoad() {
        this.loadContent(this.id);
        this.auth.user$.subscribe(user => {
            if (user && !this.completed)
                this.completed = user.completedTasks ? user.completedTasks : [];
            if (user && !this.children)
                this.loadChildren(this.id, user);
        });
    }
    loadContent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.materia = yield this.data.getDocAlt(__WEBPACK_IMPORTED_MODULE_0__app_app_models__["a" /* Collections */].CONTENT, id);
        });
    }
    loadChildren(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const children = yield this.data.getCollectionQuery(__WEBPACK_IMPORTED_MODULE_0__app_app_models__["a" /* Collections */].CONTENT, ref => ref
                .where('parent_id', '==', id)
                .orderBy('sortIndex', 'asc'));
            this.children = children
                .filter(c => user.isPremium2019 ? true : c.liberadoInPrograma)
                .map(c => (Object.assign({}, c, { temas$: this.data.getCollectionQuery(__WEBPACK_IMPORTED_MODULE_0__app_app_models__["a" /* Collections */].CONTENT, ref => ref.where('parent_id', '==', c.id)) })));
        });
    }
    getTemasCount(temas = []) {
        return temas.filter(t => t.liberadoInPrograma).length;
    }
    getCompletedTemas(temas = []) {
        return temas.filter(t => this.completed.includes(t.event)).length;
    }
};
MateriaAltPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-materia-alt',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/materia-alt/materia-alt.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{materia ? materia.name : \'...\'}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-grid *ngIf="children">\n    <ion-row>\n\n      <ion-col col-6 *ngFor="let child of children">\n        <ion-card (click)="navCtrl.push(\'BloqueAltPage\', {id: child.id})">\n          <img [src]="child.cover" alt="Children">\n          <ion-card-content>\n            <ion-card-title>{{child.name}}</ion-card-title>\n            <ion-card-content *ngIf="child.temas$ | async as temas">{{getCompletedTemas(temas)}}/{{getTemasCount(temas) | number}}</ion-card-content>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/materia-alt/materia-alt.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
], MateriaAltPage);

//# sourceMappingURL=materia-alt.js.map

/***/ })

});
//# sourceMappingURL=36.js.map