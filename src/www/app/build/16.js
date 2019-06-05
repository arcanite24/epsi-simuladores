webpackJsonp([16],{

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsPageModule", function() { return RatingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ratings__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(473);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RatingsPageModule = /** @class */ (function () {
    function RatingsPageModule() {
    }
    RatingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ratings__["a" /* RatingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ratings__["a" /* RatingsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */],
            ],
        })
    ], RatingsPageModule);
    return RatingsPageModule;
}());

//# sourceMappingURL=ratings.module.js.map

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingsPage; });
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



var RatingsPage = /** @class */ (function () {
    function RatingsPage(navCtrl, navParams, back, toast, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.toast = toast;
        this.viewCtrl = viewCtrl;
        this.id = this.navParams.get('id');
        this.type = this.navParams.get('type');
    }
    RatingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.back.getClase(this.id, this.type).subscribe(function (data) {
            _this.clase = data;
            _this.clase.c = data.ratings ? data.ratings[_this.back.uid] ? data.ratings[_this.back.uid].c : 0 : 0;
            _this.clase.d = data.ratings ? data.ratings[_this.back.uid] ? data.ratings[_this.back.uid].d : 0 : 0;
            _this.clase.e = data.ratings ? data.ratings[_this.back.uid] ? data.ratings[_this.back.uid].e : 0 : 0;
        }, function (err) {
            _this.toast.create({ message: 'No se pudo cargar la calificación de la clase...', duration: 2000 }).present();
            if (_this.navCtrl.canGoBack())
                _this.navCtrl.pop();
        });
    };
    RatingsPage.prototype.saveRating = function (e) {
        var _this = this;
        if (!this.clase.ratings)
            this.clase.ratings = {};
        if (!this.clase.ratings[this.back.uid])
            this.clase.ratings[this.back.uid] = {};
        this.clase.ratings[this.back.uid].c = this.clase.c;
        this.clase.ratings[this.back.uid].d = this.clase.d;
        this.clase.ratings[this.back.uid].e = this.clase.d;
        this.back.updateClase(this.id, this.type, { ratings: this.clase.ratings }).subscribe(function (data) { return console.log; }, function (err) { return _this.toast.create({ message: 'No se pudo actualizar tu calificación...', duration: 2000 }).present(); });
    };
    RatingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ratings',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/ratings/ratings.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Calificar</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n  \n  <div class="flex-col" *ngIf="!clase">\n    <img src="assets/imgs/rings.svg">\n  </div>\n\n  <div class="flex-col" *ngIf="clase">\n    <h2>Contenido {{clase.c | number}} / 5</h2>\n    <rating [(ngModel)]="clase.c" (ngModelChange)="saveRating($event)"></rating>\n\n    <h2>Diseño {{clase.d | number}} / 5</h2>\n    <rating [(ngModel)]="clase.d" (ngModelChange)="saveRating($event)"></rating>\n\n    <h2>Entendible {{clase.e | number}} / 5</h2>\n    <rating [(ngModel)]="clase.e" (ngModelChange)="saveRating($event)"></rating>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/ratings/ratings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
    ], RatingsPage);
    return RatingsPage;
}());

//# sourceMappingURL=ratings.js.map

/***/ })

});
//# sourceMappingURL=16.js.map