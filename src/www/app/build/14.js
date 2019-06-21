webpackJsonp([14],{

/***/ 1144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatViewDetailPageModule", function() { return StatViewDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stat_view_detail__ = __webpack_require__(1220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__ = __webpack_require__(595);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StatViewDetailPageModule = /** @class */ (function () {
    function StatViewDetailPageModule() {
    }
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
    return StatViewDetailPageModule;
}());

//# sourceMappingURL=stat-view-detail.module.js.map

/***/ }),

/***/ 1220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatViewDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(590);
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




var StatViewDetailPage = /** @class */ (function () {
    function StatViewDetailPage(stats, auth, navParams) {
        this.stats = stats;
        this.auth = auth;
        this.navParams = navParams;
        this.view = this.navParams.get('view');
        this.uid = this.navParams.get('uid');
    }
    StatViewDetailPage.prototype.ngOnInit = function () {
    };
    StatViewDetailPage.prototype.ionViewDidLoad = function () {
        this.reloadData(this.view);
    };
    StatViewDetailPage.prototype.reloadData = function (v) {
        return __awaiter(this, void 0, void 0, function () {
            var cache;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stats.computeTimeline(v.includeTags[0], this.uid ? this.uid : this.auth.user.uid)];
                    case 1:
                        cache = _a.sent();
                        v.cache = cache;
                        v.cache.promedio = v.cache.timeline.map(function (m) { return m.promedio; }).reduce(function (a, b) { return a + b; }, 0);
                        this.chartData = [
                            {
                                name: 'Promedio',
                                series: v.cache.timeline.map(function (m) { return ({
                                    name: m.mes.label,
                                    value: m.promedio * 100
                                }); })
                            }
                        ];
                        return [2 /*return*/];
                }
            });
        });
    };
    StatViewDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stat-view-detail',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/stat-view-detail/stat-view-detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ view ? view.name : \'...\' }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="container-fluid">\n    <div class="row" *ngIf="view as v">\n\n      <div class="col-md-12">\n        <h4>{{v.name}}</h4>\n      </div>\n\n      <div class="col-md-12">\n        <ul *ngIf="v.cache as c">\n          <li *ngIf="c.total">{{c.total | number}} resultados</li>\n          <li *ngIf="c.promedio">\n            <strong>Promedio: </strong> {{c.promedio * 100 | number}}/100\n          </li>\n        </ul>\n      </div>\n\n      <div class="col-md-12" *ngIf="chartData">\n        <div class="w-100 epsi-chart-container">\n          <ngx-charts-line-chart [view]="undefined" [yScaleMin]="0" [yScaleMax]="100" [legend]="true"\n            [legendTitle]="\'Materias\'" [legendPosition]="\'below\'" [showXAxisLabel]="true" [showYAxisLabel]="true"\n            [xAxisLabel]="\'Mes\'" [yAxisLabel]="\'Promedio\'" [xAxis]="true" [yAxis]="true" [results]="chartData">\n          </ngx-charts-line-chart>\n        </div>\n      </div>\n\n      <div class="col-md-12">\n        <button type="button" (click)="reloadData(v)">Recargar Información</button>\n      </div>\n\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/stat-view-detail/stat-view-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], StatViewDetailPage);
    return StatViewDetailPage;
}());

//# sourceMappingURL=stat-view-detail.js.map

/***/ })

});
//# sourceMappingURL=14.js.map