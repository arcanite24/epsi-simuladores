webpackJsonp([14],{

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideDetailPageModule", function() { return SlideDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_detail__ = __webpack_require__(835);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlideDetailPageModule = /** @class */ (function () {
    function SlideDetailPageModule() {
    }
    SlideDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__slide_detail__["a" /* SlideDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__slide_detail__["a" /* SlideDetailPage */]),
            ],
        })
    ], SlideDetailPageModule);
    return SlideDetailPageModule;
}());

//# sourceMappingURL=slide-detail.module.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_models__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SlideDetailPage = /** @class */ (function () {
    function SlideDetailPage(navCtrl, navParams, afs, imgCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.imgCtrl = imgCtrl;
        this.id = this.navParams.get('id');
        this.lc = false;
        this.newNota = { title: '', text: '' };
    }
    SlideDetailPage.prototype.ionViewDidLoad = function () {
        this.slide$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].SLIDE).doc(this.id).valueChanges();
    };
    SlideDetailPage.prototype.openSlide = function (img) {
        this.imgCtrl.create(img).present();
    };
    SlideDetailPage.prototype.addNota = function (title, text) {
        this.lc = true;
    };
    SlideDetailPage.prototype.onSlideChange = function () {
        //this.index = this.slides.getActiveIndex()
        //
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Slides */])
    ], SlideDetailPage.prototype, "slides", void 0);
    SlideDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slide-detail',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/slide-detail/slide-detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Presentación</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ng-template #loader>\n    <div class="flex-col">\n      <img src="assets/imgs/rings.svg">\n    </div>\n  </ng-template>\n\n  <ion-slides *ngIf="slide$ | async as s" (ionSlideDidChange)="onSlideChange()">\n    <ion-slide *ngFor="let slide of s.images">\n      <img [src]="slide" #img (click)="openSlide(img)">\n    </ion-slide>\n  </ion-slides>\n\n  <!-- <ion-list *ngIf="s">\n    <ion-list-header class="flex-row">Notas</ion-list-header>\n    <ion-item>\n      <ion-input placeholder="Titulo de la nota" [(ngModel)]="newNota.title" [disabled]="lc"></ion-input>\n      <button ion-button clear item-end (click)="addNota(newNota.title, newNota.text)" [disabled]="(newNota.title.length <= 0 && newNota.text.length <= 0) || newNota.title.length <= 0 || newNota.text.length <= 0">\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-textarea placeholder="Texto de la nota" [(ngModel)]="newNota.text"></ion-textarea>\n    </ion-item>\n    <ion-item *ngFor="let nota of notas" text-wrap>\n      <h2>{{nota.title}}</h2>\n      <p>{{nota.text}}</p>\n    </ion-item>\n  </ion-list> -->\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/slide-detail/slide-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], SlideDetailPage);
    return SlideDetailPage;
}());

//# sourceMappingURL=slide-detail.js.map

/***/ })

});
//# sourceMappingURL=14.js.map