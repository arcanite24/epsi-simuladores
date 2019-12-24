webpackJsonp([14],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowtoPageModule", function() { return HowtoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__howto__ = __webpack_require__(741);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HowtoPageModule = /** @class */ (function () {
    function HowtoPageModule() {
    }
    HowtoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__howto__["a" /* HowtoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__howto__["a" /* HowtoPage */]),
            ],
        })
    ], HowtoPageModule);
    return HowtoPageModule;
}());

//# sourceMappingURL=howto.module.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowtoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
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
 * Generated class for the HowtoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HowtoPage = /** @class */ (function () {
    function HowtoPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    HowtoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HowtoPage');
    };
    HowtoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-howto',template:/*ion-inline-start:"C:\Users\arcan\code\zamna-pagos\src\pages\howto\howto.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>¿Cómo me inscribo?</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee" padding>\n\n  <p class="w-100 c87 text-center">\n    Para inscribirte solo necesitas elegir tu cuenta con que quieres registrarte y te llevaremos a la sección de inscripción\n  </p>\n\n  <button ion-button clear (click)="viewCtrl.dismiss()" >Cerrar</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\arcan\code\zamna-pagos\src\pages\howto\howto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], HowtoPage);
    return HowtoPage;
}());

//# sourceMappingURL=howto.js.map

/***/ })

});
//# sourceMappingURL=14.js.map