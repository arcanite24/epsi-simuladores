webpackJsonp([16],{

/***/ 1209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatViewDetailPageModule", function() { return StatViewDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stat_view_detail__ = __webpack_require__(1289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let StatViewDetailPageModule = class StatViewDetailPageModule {
};
StatViewDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__stat_view_detail__["a" /* StatViewDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__["a" /* NgxChartsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__stat_view_detail__["a" /* StatViewDetailPage */]),
        ],
    })
], StatViewDetailPageModule);

//# sourceMappingURL=stat-view-detail.module.js.map

/***/ }),

/***/ 1289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatViewDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(605);
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




let StatViewDetailPage = class StatViewDetailPage {
    constructor(stats, auth, navParams) {
        this.stats = stats;
        this.auth = auth;
        this.navParams = navParams;
        this.view = this.navParams.get('view');
        this.uid = this.navParams.get('uid');
    }
    ngOnInit() {
    }
    ionViewDidLoad() {
        this.reloadData(this.view);
    }
    reloadData(v) {
        return __awaiter(this, void 0, void 0, function* () {
            const cache = yield this.stats.computeTimeline(v.includeTags[0], this.uid ? this.uid : this.auth.user.uid);
            v.cache = cache;
            v.cache.promedio = v.cache.timeline.map((m) => m.promedio).reduce((a, b) => a + b, 0);
            this.chartData = [
                {
                    name: 'Promedio',
                    series: v.cache.timeline.map(m => ({
                        name: m.mes.label,
                        value: m.promedio * 100
                    }))
                }
            ];
        });
    }
};
StatViewDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-stat-view-detail',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/stat-view-detail/stat-view-detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ view ? view.name : \'...\' }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="container-fluid">\n    <div class="row" *ngIf="view as v">\n\n      <div class="col-md-12">\n        <h4>{{v.name}}</h4>\n      </div>\n\n      <div class="col-md-12">\n        <ul *ngIf="v.cache as c">\n          <li *ngIf="c.total">{{c.total | number}} resultados</li>\n          <li *ngIf="c.promedio">\n            <strong>Promedio: </strong> {{c.promedio * 100 | number}}/100\n          </li>\n        </ul>\n      </div>\n\n      <div class="col-md-12" *ngIf="chartData">\n        <div class="w-100 epsi-chart-container">\n          <ngx-charts-line-chart [view]="undefined" [yScaleMin]="0" [yScaleMax]="100" [legend]="true"\n            [legendTitle]="\'Materias\'" [legendPosition]="\'below\'" [showXAxisLabel]="true" [showYAxisLabel]="true"\n            [xAxisLabel]="\'Mes\'" [yAxisLabel]="\'Promedio\'" [xAxis]="true" [yAxis]="true" [results]="chartData">\n          </ngx-charts-line-chart>\n        </div>\n      </div>\n\n      <div class="col-md-12">\n        <button type="button" (click)="reloadData(v)">Recargar Información</button>\n      </div>\n\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/stat-view-detail/stat-view-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
], StatViewDetailPage);

//# sourceMappingURL=stat-view-detail.js.map

/***/ })

});
//# sourceMappingURL=16.js.map