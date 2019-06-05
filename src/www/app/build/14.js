webpackJsonp([14],{

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadosExamenPageModule", function() { return ResultadosExamenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resultados_examen__ = __webpack_require__(825);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResultadosExamenPageModule = /** @class */ (function () {
    function ResultadosExamenPageModule() {
    }
    ResultadosExamenPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__resultados_examen__["a" /* ResultadosExamenPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__resultados_examen__["a" /* ResultadosExamenPage */]),
            ],
        })
    ], ResultadosExamenPageModule);
    return ResultadosExamenPageModule;
}());

//# sourceMappingURL=resultados-examen.module.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadosExamenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_back_back__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




__WEBPACK_IMPORTED_MODULE_3_moment___default.a.locale('es');
var ResultadosExamenPage = /** @class */ (function () {
    function ResultadosExamenPage(navCtrl, navParams, back, toast, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.toast = toast;
        this.viewCtrl = viewCtrl;
        this.type = this.navParams.get('type');
        this.id = this.navParams.get('id');
    }
    ResultadosExamenPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.back.getResultados(this.type, this.back.uid, this.id).subscribe(function (data) {
            _this.resultados = data.map(function (r) {
                var rr = r;
                rr.resultados = Object.keys(rr.resultados).map(function (key) { return rr.resultados[key]; });
                rr.resultados = rr.resultados.map(function (rrr) { return (__assign({ isCorrecta: rrr.selected == rrr.pregunta.correcta }, rrr)); });
                return rr;
            }).reverse();
        }, function (err) {
            _this.toast.create({ message: 'No se pudieron cargar los resultados...', duration: 2000 }).present();
        });
    };
    ResultadosExamenPage.prototype.formatDate = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3_moment___default()(date).fromNow();
    };
    ResultadosExamenPage.prototype.getCorrectas = function (r) {
        if (!r)
            return 0;
        return Object.keys(r).map(function (key) { return r[key]; }).map(function (rr) { return rr.selected == rr.pregunta.correcta; }).filter(function (rr) { return rr; }).length;
    };
    ResultadosExamenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-resultados-examen',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/resultados-examen/resultados-examen.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Resultados</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <div class="flex-col" *ngIf="!resultados">\n    <img src="assets/imgs/rings.svg">\n  </div>\n\n  <div *ngIf="resultados">\n    <ion-card *ngFor="let r of resultados">\n      <ion-card-header text-wrap>Resultados de <strong>{{r.simulador.name}}</strong> de {{formatDate(r.createdAt)}}</ion-card-header>\n      <ion-list>\n        <ion-item><strong>Preguntas: </strong> {{r.simulador.preguntas.length}}</ion-item>\n        <ion-item>Correctas: {{getCorrectas(r.resultados)}}/{{r.simulador.preguntas.length}}</ion-item>\n        <ion-list-header><strong>Resultados:</strong></ion-list-header>\n        <ion-item *ngFor="let rr of r.resultados" text-wrap>\n          <ion-icon name="checkmark" color="primary" *ngIf="rr.isCorrecta" item-start></ion-icon>\n          <ion-icon name="close" color="danger" *ngIf="!rr.isCorrecta" item-start></ion-icon>\n          <h2>{{rr.pregunta.text}}</h2>\n          <p *ngIf="!rr.isCorrecta && rr.pregunta.feedback">{{rr.pregunta.feedback}}</p>\n        </ion-item>\n      </ion-list>\n    </ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/resultados-examen/resultados-examen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ViewController */]])
    ], ResultadosExamenPage);
    return ResultadosExamenPage;
}());

//# sourceMappingURL=resultados-examen.js.map

/***/ })

});
//# sourceMappingURL=14.js.map