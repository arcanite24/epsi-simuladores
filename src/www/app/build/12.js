webpackJsonp([12],{

/***/ 1215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZamnaContigoPageModule", function() { return ZamnaContigoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zamna_contigo__ = __webpack_require__(1296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ZamnaContigoPageModule = class ZamnaContigoPageModule {
};
ZamnaContigoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__zamna_contigo__["a" /* ZamnaContigoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zamna_contigo__["a" /* ZamnaContigoPage */]),
        ],
    })
], ZamnaContigoPageModule);

//# sourceMappingURL=zamna-contigo.module.js.map

/***/ }),

/***/ 1296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZamnaContigoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ZamnaContigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ZamnaContigoPage = class ZamnaContigoPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ZamnaContigoPage');
    }
};
ZamnaContigoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-zamna-contigo',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/zamna-contigo/zamna-contigo.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Zamná Contigo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-grid>\n    <ion-row>\n\n      <ion-col col-6>\n        <div class="home-tile" (click)="navCtrl.push(\'GaleriasPage\')">\n          <ion-card class="flex-col">\n            <img src="assets/imgs/Infografias.png">\n            <span>Infografías</span>\n          </ion-card>\n        </div>\n      </ion-col>\n\n      <ion-col col-6>\n        <div class="home-tile" (click)="navCtrl.push(\'ForosPage\')">\n          <ion-card class="flex-col">\n            <img src="assets/imgs/Foro.png">\n            <span>Asesor</span>\n          </ion-card>\n        </div>\n      </ion-col>\n\n      <ion-col col-6>\n        <div class="home-tile" (click)="navCtrl.push(\'MediaPage\')">\n          <ion-card class="flex-col">\n            <img src="assets/imgs/media.svg">\n            <span>GPC</span>\n          </ion-card>\n        </div>\n      </ion-col>\n\n      <ion-col col-6>\n        <div class="home-tile" (click)="navCtrl.push(\'SlidesPage\')">\n          <ion-card class="flex-col">\n            <img src="assets/imgs/presentaciones.svg">\n            <span>Presentaciones</span>\n          </ion-card>\n        </div>\n      </ion-col>\n\n      <ion-col col-6>\n        <div class="home-tile" (click)="navCtrl.push(\'ManualZamnaPage\')">\n          <ion-card class="flex-col">\n            <img src="assets/imgs/manual.svg">\n            <span>Manual Zamná</span>\n          </ion-card>\n        </div>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/zamna-contigo/zamna-contigo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
], ZamnaContigoPage);

//# sourceMappingURL=zamna-contigo.js.map

/***/ })

});
//# sourceMappingURL=12.js.map