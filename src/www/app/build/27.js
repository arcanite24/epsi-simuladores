webpackJsonp([27],{

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasGlobalPageModule", function() { return NotasGlobalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notas_global__ = __webpack_require__(848);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotasGlobalPageModule = /** @class */ (function () {
    function NotasGlobalPageModule() {
    }
    NotasGlobalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notas_global__["a" /* NotasGlobalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notas_global__["a" /* NotasGlobalPage */]),
            ],
        })
    ], NotasGlobalPageModule);
    return NotasGlobalPageModule;
}());

//# sourceMappingURL=notas-global.module.js.map

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasGlobalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_back_back__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotasGlobalPage = /** @class */ (function () {
    function NotasGlobalPage(navCtrl, navParams, back, toast, load) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.toast = toast;
        this.load = load;
        this.nTema = [];
        this.nSubtema = [];
        this.nGaleria = [];
        this.nAsesoria = [];
        this.nSlide = [];
    }
    NotasGlobalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var l = this.load.create({ content: 'Cargando notas...' });
        l.present();
        this.back.getMyNotas(localStorage.getItem('uid')).subscribe(function (data) {
            _this.nTema = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.uniqBy(data.filter(function (n) { return n.tema; }), function (n) { return n.tema.id; });
            _this.nSubtema = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.uniqBy(data.filter(function (n) { return n.subtema; }), function (n) { return n.subtema.id; });
            _this.nGaleria = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.uniqBy(data.filter(function (n) { return n.galeria; }), function (n) { return n.galeria.id; });
            _this.nAsesoria = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.uniqBy(data.filter(function (n) { return n.asesoria; }), function (n) { return n.asesoria.id; });
            _this.nSlide = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.uniqBy(data.filter(function (n) { return n.slide; }), function (n) { return n.slide.id; });
            console.log(_this.nTema);
            l.dismiss();
        }, function (err) {
            l.dismiss();
            _this.toast.create({ message: 'No se pudieron cargar las notas...', duration: 2000 }).present();
            _this.navCtrl.setRoot('HomePage');
        });
    };
    NotasGlobalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-notas-global',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/notas-global/notas-global.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Mis Notas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-list>\n    <ion-list-header>Temas</ion-list-header>\n    <ion-item *ngFor="let t of nTema" (click)="navCtrl.push(\'NotasGlobalDetailPage\', {rest: \'tema\', id: t.tema.id})" >{{t.tema ? t.tema.name : \'Sin Tema\'}}</ion-item>\n  </ion-list>\n\n  <ion-list class="mt-3">\n    <ion-list-header>Subtemas</ion-list-header>\n    <ion-item *ngFor="let t of nSubtema" (click)="navCtrl.push(\'NotasGlobalDetailPage\', {rest: \'subtema\', id: t.subtema.id})" >{{t.subtema ? t.subtema.name : \'Sin Subtema\'}}</ion-item>\n    <ion-item *ngIf="nSubtema.length <= 0" >No hay notas que mostrar</ion-item>\n  </ion-list>\n\n  <ion-list class="mt-3">\n    <ion-list-header>Galerías</ion-list-header>\n    <ion-item *ngFor="let t of nGaleria" (click)="navCtrl.push(\'NotasGlobalDetailPage\', {rest: \'galeria\', id: t.galeria.id})" >{{t.galeria ? t.galeria.name : \'Sin Galería\'}}</ion-item>\n    <ion-item *ngIf="nGaleria.length <= 0" >No hay notas que mostrar</ion-item>\n  </ion-list>\n\n  <ion-list class="mt-3">\n    <ion-list-header>Asesorías</ion-list-header>\n    <ion-item *ngFor="let t of nAsesoria" (click)="navCtrl.push(\'NotasGlobalDetailPage\', {rest: \'asesoria\', id: t.asesoria.id})" >{{t.asesoria ? t.asesoria.name : \'Sin Asesoría\'}}</ion-item>\n    <ion-item *ngIf="nAsesoria.length <= 0" >No hay notas que mostrar</ion-item>\n  </ion-list>\n\n  <ion-list class="mt-3">\n    <ion-list-header>Presentaciones</ion-list-header>\n    <ion-item *ngFor="let t of nSlide" (click)="navCtrl.push(\'NotasGlobalDetailPage\', {rest: \'slide\', id: t.slide.id})" >{{t.slide ? t.slide.name : \'Sin Presentación\'}}</ion-item>\n    <ion-item *ngIf="nSlide.length <= 0" >No hay notas que mostrar</ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/notas-global/notas-global.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* LoadingController */]])
    ], NotasGlobalPage);
    return NotasGlobalPage;
}());

//# sourceMappingURL=notas-global.js.map

/***/ })

});
//# sourceMappingURL=27.js.map