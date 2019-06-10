webpackJsonp([28],{

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasAddPageModule", function() { return NotasAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notas_add__ = __webpack_require__(819);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotasAddPageModule = /** @class */ (function () {
    function NotasAddPageModule() {
    }
    NotasAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notas_add__["a" /* NotasAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notas_add__["a" /* NotasAddPage */]),
            ],
        })
    ], NotasAddPageModule);
    return NotasAddPageModule;
}());

//# sourceMappingURL=notas-add.module.js.map

/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasAddPage; });
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



var NotasAddPage = /** @class */ (function () {
    function NotasAddPage(navCtrl, navParams, viewCtrl, toast, back, load) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toast = toast;
        this.back = back;
        this.load = load;
        this.addData = {};
        this.id = this.navParams.get('id');
        this.type = this.navParams.get('type');
    }
    NotasAddPage.prototype.addNota = function (title, text) {
        var _this = this;
        if (!title)
            return this.toast.create({ message: 'Ingresa un titulo', duration: 2000 }).present();
        if (!text)
            return this.toast.create({ message: 'Ingresa un text', duration: 2000 }).present();
        var l = this.load.create({ content: 'Agregando...' });
        l.present();
        this.back.addNota(title, text, this.type, this.id).subscribe(function (data) { l.dismiss(); _this.viewCtrl.dismiss(data); }, function (err) {
            _this.toast.create({ message: 'No se pudo agregar tu nota...', duration: 2000 }).present();
            l.dismiss();
        });
    };
    NotasAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notas-add',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/notas-add/notas-add.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Agregar Nota</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-list>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Titulo" [(ngModel)]="addData.title"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-textarea placeholder="Texto" [(ngModel)]="addData.text"></ion-textarea>\n    </ion-item>\n\n  </ion-list>\n\n  <div class="flex-col">\n    <button ion-button block (click)="addNota(addData.title, addData.text)">Agregar Nota</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/notas-add/notas-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
    ], NotasAddPage);
    return NotasAddPage;
}());

//# sourceMappingURL=notas-add.js.map

/***/ })

});
//# sourceMappingURL=28.js.map