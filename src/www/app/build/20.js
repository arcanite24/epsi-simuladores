webpackJsonp([20],{

/***/ 1136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadosExamenPageModule", function() { return ResultadosExamenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resultados_examen__ = __webpack_require__(1211);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__resultados_examen__["a" /* ResultadosExamenPage */]),
            ],
        })
    ], ResultadosExamenPageModule);
    return ResultadosExamenPageModule;
}());

//# sourceMappingURL=resultados-examen.module.js.map

/***/ }),

/***/ 1211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadosExamenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_models__ = __webpack_require__(146);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





__WEBPACK_IMPORTED_MODULE_2_moment___default.a.locale('es');
var ResultadosExamenPage = /** @class */ (function () {
    function ResultadosExamenPage(navCtrl, navParams, viewCtrl, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.data = data;
        this.id = this.navParams.get('id');
    }
    ResultadosExamenPage.prototype.ionViewDidLoad = function () {
        this.loadResultados();
        /* this.back.getResultados(this.type, this.back.uid, this.id).subscribe(data => {
          this.resultados = data.map(r => {
            let rr = r
            rr.resultados = Object.keys(rr.resultados).map(key => rr.resultados[key])
            rr.resultados = rr.resultados.map(rrr => ({isCorrecta: rrr.selected == rrr.pregunta.correcta, ...rrr}))
            return rr
          }).reverse()
        }, err => {
          this.toast.create({message: 'No se pudieron cargar los resultados...', duration: 2000}).present()
        }) */
    };
    ResultadosExamenPage.prototype.loadResultados = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data.getDoc(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].EXAM_RESULT, this.id)];
                    case 1:
                        result = _a.sent();
                        r = __assign({}, result, { preguntas: Object.values(result.questions) });
                        console.log(r);
                        this.resultados = [r];
                        return [2 /*return*/];
                }
            });
        });
    };
    ResultadosExamenPage.prototype.formatDate = function (date) {
        return __WEBPACK_IMPORTED_MODULE_2_moment___default()(date).fromNow();
    };
    ResultadosExamenPage.prototype.getCorrectas = function (r) {
        if (!r)
            return 0;
        return Object.keys(r).map(function (key) { return r[key]; }).map(function (rr) { return rr.selected == rr.pregunta.correcta; }).filter(function (rr) { return rr; }).length;
    };
    ResultadosExamenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-resultados-examen',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/resultados-examen/resultados-examen.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Resultados</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <div class="flex-col" *ngIf="!resultados">\n    <img src="assets/imgs/rings.svg">\n  </div>\n\n  <div *ngIf="resultados">\n    <ion-card *ngFor="let r of resultados">\n      <ion-card-header text-wrap>Resultados de <strong>{{r.exam_type}}</strong> de {{formatDate(r.date)}}</ion-card-header>\n      <ion-list>\n        <ion-list-header><strong>Resultados:</strong></ion-list-header>\n        <ion-item *ngFor="let rr of r.preguntas" text-wrap>\n          <ion-icon name="checkmark" color="primary" *ngIf="rr.correcta" item-start></ion-icon>\n          <ion-icon name="close" color="danger" *ngIf="!rr.correcta" item-start></ion-icon>\n          <h2>{{rr.raw.text}}</h2>\n          <p *ngIf="!rr.correcta && rr.raw.feedback">{{rr.raw.feedback}}</p>\n        </ion-item>\n      </ion-list>\n    </ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/resultados-examen/resultados-examen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]])
    ], ResultadosExamenPage);
    return ResultadosExamenPage;
}());

//# sourceMappingURL=resultados-examen.js.map

/***/ })

});
//# sourceMappingURL=20.js.map