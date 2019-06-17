webpackJsonp([30],{

/***/ 1125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasGlobalDetailPageModule", function() { return NotasGlobalDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notas_global_detail__ = __webpack_require__(1199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotasGlobalDetailPageModule = /** @class */ (function () {
    function NotasGlobalDetailPageModule() {
    }
    NotasGlobalDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notas_global_detail__["a" /* NotasGlobalDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notas_global_detail__["a" /* NotasGlobalDetailPage */]),
            ],
        })
    ], NotasGlobalDetailPageModule);
    return NotasGlobalDetailPageModule;
}());

//# sourceMappingURL=notas-global-detail.module.js.map

/***/ }),

/***/ 1199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasGlobalDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_back_back__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotasGlobalDetailPage = /** @class */ (function () {
    function NotasGlobalDetailPage(navCtrl, navParams, toast, back) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.back = back;
        this.id = this.navParams.get('id');
        this.rest = this.navParams.get('rest');
        this.uid = localStorage.getItem('uid');
        this.notas = [];
    }
    NotasGlobalDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.back.getNotasRest(this.id, this.rest, this.uid).subscribe(function (data) {
            _this.notas = data;
            console.log(data);
        }, function (err) {
            _this.toast.create({ message: 'No se pudieron cargar las notas...', duration: 2000 }).present();
            _this.navCtrl.setRoot('HomePage');
        });
    };
    NotasGlobalDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notas-global-detail',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/notas-global-detail/notas-global-detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Notas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-list>\n    <ion-item *ngFor="let n of notas" text-wrap>\n      <h2>{{n.title}}</h2>\n      <p>{{n.text}}</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/notas-global-detail/notas-global-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */]])
    ], NotasGlobalDetailPage);
    return NotasGlobalDetailPage;
}());

//# sourceMappingURL=notas-global-detail.js.map

/***/ })

});
//# sourceMappingURL=30.js.map