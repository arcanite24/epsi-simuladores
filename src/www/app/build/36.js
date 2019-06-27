webpackJsonp([36],{

/***/ 1138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaDetailPageModule", function() { return GaleriaDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__galeria_detail__ = __webpack_require__(1214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let GaleriaDetailPageModule = class GaleriaDetailPageModule {
};
GaleriaDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__galeria_detail__["a" /* GaleriaDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__galeria_detail__["a" /* GaleriaDetailPage */]),
        ],
    })
], GaleriaDetailPageModule);

//# sourceMappingURL=galeria-detail.module.js.map

/***/ }),

/***/ 1214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaleriaDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(590);
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






let GaleriaDetailPage = class GaleriaDetailPage {
    constructor(navCtrl, navParams, toast, imgCtrl, afs, load, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.imgCtrl = imgCtrl;
        this.afs = afs;
        this.load = load;
        this.auth = auth;
        this.id = this.navParams.get('id');
        this.uid = localStorage.getItem('uid');
        this.newNota = { text: '', title: '' };
        this.lc = false;
    }
    ionViewDidLoad() {
        this.gallery$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].GALLERY).doc(this.id).valueChanges();
        this.auth.user$.subscribe(user => {
            if (user && !this.notas$) {
                this.notas$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].NOTE, ref => ref
                    .where('parent_id', '==', this.id)
                    .where('user', '==', user.uid))
                    .valueChanges();
            }
        });
    }
    openImg(img) {
        this.imgCtrl.create(img).present();
    }
    addNota(title, text) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!title)
                return this.toast.create({ message: 'Ingresa un titulo', duration: 2000 }).present();
            if (!text)
                return this.toast.create({ message: 'Ingresa un text', duration: 2000 }).present();
            const l = this.load.create({ content: 'Agregando...' });
            l.present();
            const id = this.afs.createId();
            yield this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].NOTE).doc(id).set({
                id,
                title,
                text,
                parent_id: this.id,
                user: this.auth.user.uid,
            });
            l.dismiss();
            /* this.back.addNota(title, text, this.type, this.id).subscribe(data => {}, err => {
              this.toast.create({message: 'No se pudo agregar tu nota...', duration: 2000}).present()
              l.dismiss()
            }) */
        });
    }
};
GaleriaDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-galeria-detail',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/galeria-detail/galeria-detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Galería</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ng-template #loader>\n    <div class="flex-col" *ngIf="!g">\n      <img src="assets/imgs/rings.svg">\n      </div>\n  </ng-template>\n\n  <div *ngIf="gallery$ | async as g else loader">\n\n    <ion-slides>\n      <ion-slide *ngFor="let img of g.fotos">\n        <img [src]="img" #imagen (click)="openImg(imagen)">\n      </ion-slide>\n    </ion-slides>\n\n    <ion-item style="margin-bottom:2rem">\n      <h2>{{g.name}}</h2>\n      <p>{{g.desc}}</p>\n    </ion-item>\n\n    <ion-list>\n      <ion-list-header><strong>Notas</strong></ion-list-header>\n      <ion-item>\n        <ion-input placeholder="Titulo de la nota" [(ngModel)]="newNota.title" [disabled]="lc"></ion-input>\n        <button ion-button clear item-end (click)="addNota(newNota.title, newNota.text)" [disabled]="(newNota.title.length <= 0 && newNota.text.length <= 0) || newNota.title.length <= 0 || newNota.text.length <= 0">\n          <ion-icon name="send"></ion-icon>\n        </button>\n      </ion-item>\n      <ion-item>\n        <ion-textarea placeholder="Texto de la nota" [(ngModel)]="newNota.text"></ion-textarea>\n      </ion-item>\n      <ion-item *ngFor="let n of notas$ | async" text-wrap>\n        <h2>{{n.title}}</h2>\n        <p>{{n.text}}</p>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/galeria-detail/galeria-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["AngularFirestore"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
], GaleriaDetailPage);

//# sourceMappingURL=galeria-detail.js.map

/***/ })

});
//# sourceMappingURL=36.js.map