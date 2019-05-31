webpackJsonp([29],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaDetailPageModule", function() { return GaleriaDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__galeria_detail__ = __webpack_require__(799);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GaleriaDetailPageModule = /** @class */ (function () {
    function GaleriaDetailPageModule() {
    }
    GaleriaDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__galeria_detail__["a" /* GaleriaDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__galeria_detail__["a" /* GaleriaDetailPage */]),
            ],
        })
    ], GaleriaDetailPageModule);
    return GaleriaDetailPageModule;
}());

//# sourceMappingURL=galeria-detail.module.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaleriaDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_back_back__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_models__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GaleriaDetailPage = /** @class */ (function () {
    function GaleriaDetailPage(navCtrl, navParams, back, toast, imgCtrl, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.toast = toast;
        this.imgCtrl = imgCtrl;
        this.afs = afs;
        this.id = this.navParams.get('id');
        this.uid = localStorage.getItem('uid');
        this.newNota = { text: '', title: '' };
        this.lc = false;
    }
    GaleriaDetailPage.prototype.ionViewDidLoad = function () {
        this.gallery$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].GALLERY).doc(this.id).valueChanges();
    };
    GaleriaDetailPage.prototype.openImg = function (img) {
        this.imgCtrl.create(img).present();
    };
    GaleriaDetailPage.prototype.addNota = function (title, text) {
        var _this = this;
        this.lc = true;
        this.back.addNota(title, text, 'galeria', this.id).subscribe(function (data) {
            _this.g.notas.push(data);
            _this.toast.create({ message: 'Nota agregada correctamente.', duration: 2000 }).present();
            _this.lc = false;
            _this.newNota = { text: '', title: '' };
        }, function (err) {
            _this.lc = false;
            _this.toast.create({ message: 'No se pudo agregar tu nota...', duration: 2000 }).present();
        });
    };
    GaleriaDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-galeria-detail',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\galeria-detail\galeria-detail.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Galería</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n\n\n  <ng-template #loader>\n\n    <div class="flex-col" *ngIf="!g">\n\n      <img src="assets/imgs/rings.svg">\n\n      </div>\n\n  </ng-template>\n\n\n\n  <div *ngIf="gallery$ | async as g else loader">\n\n    \n\n    <ion-slides>\n\n      <ion-slide *ngFor="let img of g.fotos">\n\n        <img [src]="img" #imagen (click)="openImg(imagen)">\n\n      </ion-slide>\n\n    </ion-slides>\n\n\n\n    <ion-item style="margin-bottom:2rem">\n\n      <h2>{{g.name}}</h2>\n\n      <p>{{g.desc}}</p>\n\n    </ion-item>\n\n\n\n    <ion-list>\n\n      <ion-list-header><strong>Notas</strong></ion-list-header>\n\n      <ion-item>\n\n        <ion-input placeholder="Titulo de la nota" [(ngModel)]="newNota.title" [disabled]="lc"></ion-input>\n\n        <button ion-button clear item-end (click)="addNota(newNota.title, newNota.text)" [disabled]="(newNota.title.length <= 0 && newNota.text.length <= 0) || newNota.title.length <= 0 || newNota.text.length <= 0">\n\n          <ion-icon name="send"></ion-icon>\n\n        </button>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-textarea placeholder="Texto de la nota" [(ngModel)]="newNota.text"></ion-textarea>\n\n      </ion-item>\n\n      <ion-item *ngFor="let n of g.notas" text-wrap>\n\n        <h2>{{n.title}}</h2>\n\n        <p>{{n.text}}</p>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\galeria-detail\galeria-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["AngularFirestore"]])
    ], GaleriaDetailPage);
    return GaleriaDetailPage;
}());

//# sourceMappingURL=galeria-detail.js.map

/***/ })

});
//# sourceMappingURL=29.js.map