webpackJsonp([25],{

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasPageModule", function() { return NotasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notas__ = __webpack_require__(820);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotasPageModule = /** @class */ (function () {
    function NotasPageModule() {
    }
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
    return NotasPageModule;
}());

//# sourceMappingURL=notas.module.js.map

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_back_back__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotasPage = /** @class */ (function () {
    function NotasPage(navCtrl, navParams, modal, back, toast, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.back = back;
        this.toast = toast;
        this.viewCtrl = viewCtrl;
        this.id = this.navParams.get('id');
        this.type = this.navParams.get('type');
        this.notas = [];
    }
    NotasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.back.getNotas(this.id, this.type).subscribe(function (data) {
            _this.notas = data;
        }, function (err) {
            _this.toast.create({ message: 'No se pudieron cargar tus notas...', duration: 2000 }).present();
            if (_this.navCtrl.canGoBack())
                _this.navCtrl.pop();
        });
    };
    NotasPage.prototype.openAdd = function (id, type) {
        var _this = this;
        var m = this.modal.create('NotasAddPage', { id: id, type: type });
        m.present();
        m.onDidDismiss(function (data) {
            if (!data)
                return;
            _this.ionViewDidLoad();
        });
    };
    NotasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notas',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/notas/notas.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Notas</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <div class="flex-col" *ngIf="!notas">\n    <img src="assets/imgs/rings.svg">\n  </div>\n\n  <ion-card *ngFor="let nota of notas">\n    <ion-card-header>{{nota.title}}</ion-card-header>\n    <ion-card-content>{{nota.text}}</ion-card-content>\n  </ion-card>\n  \n  <ion-fab right bottom>\n    <button (click)="openAdd(id, type)" ion-fab color="rojito"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/notas/notas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
    ], NotasPage);
    return NotasPage;
}());

//# sourceMappingURL=notas.js.map

/***/ })

});
//# sourceMappingURL=25.js.map