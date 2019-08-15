webpackJsonp([31],{

/***/ 1192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasPageModule", function() { return NotasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notas__ = __webpack_require__(1272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let NotasPageModule = class NotasPageModule {
};
NotasPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__notas__["a" /* NotasPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notas__["a" /* NotasPage */]),
        ],
    })
], NotasPageModule);

//# sourceMappingURL=notas.module.js.map

/***/ }),

/***/ 1272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_models__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(7);
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








let NotasPage = class NotasPage {
    constructor(navCtrl, navParams, modal, viewCtrl, auth, afs, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.viewCtrl = viewCtrl;
        this.auth = auth;
        this.afs = afs;
        this.data = data;
        this.id = this.navParams.get('id');
    }
    ionViewDidLoad() {
        this.auth.user$.subscribe(user => {
            if (user && !this.notas)
                this.loadNotas(user.uid, true);
            if (this.id && user)
                this.loadNotas(this.id, false, user.uid);
        });
        /* this.back.getNotas(this.id, this.type).subscribe(data => {
          this.notas = data
        }, err => {
          this.toast.create({message: 'No se pudieron cargar tus notas...', duration: 2000}).present()
          if (this.navCtrl.canGoBack()) this.navCtrl.pop()
        }) */
    }
    loadNotas(id, user, uid) {
        return __awaiter(this, void 0, void 0, function* () {
            if (user) {
                const notas = yield this.data.getCollectionQuery(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].NOTE, ref => ref
                    .where('user', '==', id));
                this.sortNotas = Object.values(Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["groupBy"])(notas.filter(n => n.parent_type), 'parent_type'));
                this.noCatNotas = notas.filter(n => !n.parent_type);
            }
            else {
                this.notas = this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].NOTE, ref => ref
                    .where('parent_id', '==', id)).valueChanges()
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(notes => notes.filter(n => n.user === uid)));
            }
        });
    }
    openAdd(id, type) {
        const m = this.modal.create('NotasAddPage', { id, type });
        m.present();
        m.onDidDismiss(data => {
            if (!data)
                return;
            this.ionViewDidLoad();
        });
    }
};
NotasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-notas',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/notas/notas.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Notas</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <div class="flex-col" *ngIf="!notas && !sortNotas">\n    <img src="assets/imgs/rings.svg">\n  </div>\n\n  <ng-container *ngIf="sortNotas">\n    <!-- <pre>{{ sortNotas | json }}</pre> -->\n    <ion-list *ngFor="let cat of sortNotas" style="margin-bottom: 4rem">\n      <ion-list-header>\n        <strong>{{cat[0].parent_type == \'content\' ? cat[0].content_type : cat[0].parent_type}}</strong>\n      </ion-list-header>\n      <ion-item *ngFor="let note of cat" text-wrap>\n        <h2>{{note.title}}</h2>\n        <p>{{note.text}}</p>\n      </ion-item>\n    </ion-list>\n  </ng-container>\n\n  <ng-container *ngIf="notas">\n    <ion-card *ngFor="let nota of notas | async">\n      <ion-card-header>{{nota.title}}</ion-card-header>\n      <ion-card-content>{{nota.text}}</ion-card-content>\n    </ion-card>\n  </ng-container>\n\n  <ion-card *ngIf="noCatNotas">\n    <ion-list>\n      <ion-list-header>Sin Categoría</ion-list-header>\n      <ion-item *ngFor="let note of noCatNotas" text-wrap>\n        <h2>{{note.title}}</h2>\n        <p>{{note.text}}</p>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n  <!-- <ion-fab right bottom>\n    <button (click)="openAdd(id, \'\')" ion-fab color="rojito"><ion-icon name="add"></ion-icon></button>\n  </ion-fab> -->\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/notas/notas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["AngularFirestore"],
        __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */]])
], NotasPage);

//# sourceMappingURL=notas.js.map

/***/ })

});
//# sourceMappingURL=31.js.map