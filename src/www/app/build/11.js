webpackJsonp([11],{

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideDetailPageModule", function() { return SlideDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_detail__ = __webpack_require__(822);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__slide_detail__["a" /* SlideDetailPage */]),
            ],
        })
    ], SlideDetailPageModule);
    return SlideDetailPageModule;
}());

//# sourceMappingURL=slide-detail.module.js.map

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(467);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Slides */])
    ], SlideDetailPage.prototype, "slides", void 0);
    SlideDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slide-detail',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\slide-detail\slide-detail.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Presentación</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n\n\n  <ng-template #loader>\n\n    <div class="flex-col">\n\n      <img src="assets/imgs/rings.svg">\n\n    </div>\n\n  </ng-template>\n\n\n\n  <ion-slides *ngIf="slide$ | async as s" (ionSlideDidChange)="onSlideChange()">\n\n    <ion-slide *ngFor="let slide of s.images">\n\n      <img [src]="slide" #img (click)="openSlide(img)">\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <!-- <ion-list *ngIf="s">\n\n    <ion-list-header class="flex-row">Notas</ion-list-header>\n\n    <ion-item>\n\n      <ion-input placeholder="Titulo de la nota" [(ngModel)]="newNota.title" [disabled]="lc"></ion-input>\n\n      <button ion-button clear item-end (click)="addNota(newNota.title, newNota.text)" [disabled]="(newNota.title.length <= 0 && newNota.text.length <= 0) || newNota.title.length <= 0 || newNota.text.length <= 0">\n\n        <ion-icon name="send"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-textarea placeholder="Texto de la nota" [(ngModel)]="newNota.text"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item *ngFor="let nota of notas" text-wrap>\n\n      <h2>{{nota.title}}</h2>\n\n      <p>{{nota.text}}</p>\n\n    </ion-item>\n\n  </ion-list> -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\slide-detail\slide-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], SlideDetailPage);
    return SlideDetailPage;
}());

//# sourceMappingURL=slide-detail.js.map

/***/ })

});
//# sourceMappingURL=11.js.map