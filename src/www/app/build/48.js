webpackJsonp([48],{

/***/ 1168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloqueAltPageModule", function() { return BloqueAltPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bloque_alt__ = __webpack_require__(1248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let BloqueAltPageModule = class BloqueAltPageModule {
};
BloqueAltPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bloque_alt__["a" /* BloqueAltPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bloque_alt__["a" /* BloqueAltPage */]),
        ],
    })
], BloqueAltPageModule);

//# sourceMappingURL=bloque-alt.module.js.map

/***/ }),

/***/ 1248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloqueAltPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(603);
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






let BloqueAltPage = class BloqueAltPage {
    constructor(navCtrl, navParams, data, auth, load) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.auth = auth;
        this.load = load;
        this.id = this.navParams.get('id');
        this.contentIds = [];
    }
    ionViewDidLoad() {
        this.l = this.load.create({ content: 'Cargando...' });
        this.l.present();
        this.loadContent(this.id);
        this.auth.user$.subscribe(user => {
            if (user && !this.completed)
                this.completed = user.completedTasks;
            if (user && !this.children)
                this.loadChildren(this.id, user);
        });
    }
    get completedContent() {
        if (!this.completed) {
            return 0;
        }
        if (!this.contentIds) {
            return 0;
        }
        let counter = 0;
        for (const content of this.contentIds) {
            if (this.completed.includes(content)) {
                counter++;
            }
        }
        return counter;
    }
    loadContent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.bloque = yield this.data.getDocAlt(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].CONTENT, id);
        });
    }
    loadChildren(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const children = yield this.data.getCollectionQuery(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].CONTENT, ref => ref.where('parent_id', '==', id).orderBy('sortIndex', 'asc'));
            this.children = children.filter(c => user.isPremium2019 ? true : c.liberadoInPrograma).filter(c => !c.ignoreOnSmartCalendar);
            this.contentIds = Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["sortBy"])(children, 'sortIndex').map(t => t.event || 'NULL');
            this.l.dismiss();
        });
    }
};
BloqueAltPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-bloque-alt',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/bloque-alt/bloque-alt.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{bloque ? bloque.name : \'...\'}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-card *ngIf="bloque">\n\n    <img [src]="bloque.cover" alt="Bloque">\n\n    <ion-card-content>\n      <ion-card-title>{{bloque.name}}</ion-card-title>\n      <small>{{completedContent}}/{{children.length}}</small>\n      <!-- <pre>{{ completed | json }}</pre> -->\n    </ion-card-content>\n\n    <ion-list *ngIf="children">\n      <button ion-item *ngFor="let child of children" (click)="navCtrl.push(\'TemaAltPage\', {id: child.id})">\n        <ion-icon name="checkmark" color="bien" item-start *ngIf="completed.includes(child.event)"></ion-icon>\n        <ion-icon name="play" color="rojito" item-start *ngIf="!completed.includes(child.event)"></ion-icon>\n        {{child.name}}\n      </button>\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/bloque-alt/bloque-alt.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
], BloqueAltPage);

//# sourceMappingURL=bloque-alt.js.map

/***/ })

});
//# sourceMappingURL=48.js.map