webpackJsonp([27],{

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiAnaliticaPageModule", function() { return MiAnaliticaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mi_analitica__ = __webpack_require__(809);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MiAnaliticaPageModule = /** @class */ (function () {
    function MiAnaliticaPageModule() {
    }
    MiAnaliticaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mi_analitica__["a" /* MiAnaliticaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mi_analitica__["a" /* MiAnaliticaPage */]),
            ],
        })
    ], MiAnaliticaPageModule);
    return MiAnaliticaPageModule;
}());

//# sourceMappingURL=mi-analitica.module.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiAnaliticaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_models__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_config__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_stats_stats__ = __webpack_require__(471);
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










var MiAnaliticaPage = /** @class */ (function () {
    function MiAnaliticaPage(navCtrl, navParams, afs, auth, stats) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.auth = auth;
        this.stats = stats;
    }
    MiAnaliticaPage.prototype.ionViewDidLoad = function () {
        this.loadInfo();
    };
    MiAnaliticaPage.prototype.loadInfo = function () {
        var _this = this;
        this.auth.user$.subscribe(function (user) {
            if (user) {
                _this.calculateAverage(user.uid);
                _this.calculateAverageGeneral(user.uid);
                _this.loadTimeline();
                _this.loadLowAverage(user);
                _this.loadStruct();
            }
        });
    };
    MiAnaliticaPage.prototype.calculateAverage = function (uid) {
        var _this = this;
        var start = __WEBPACK_IMPORTED_MODULE_2_moment___default()().startOf('month').toISOString();
        var end = __WEBPACK_IMPORTED_MODULE_2_moment___default()().endOf('month').toISOString();
        this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].EXAM_RESULT, function (ref) { return ref
            .where('user', '==', uid)
            .where('date', '>=', start)
            .where('date', '<=', end); })
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (results) {
            var total = results.length;
            return results.map(function (r) { return r.promedio; }).reduce(function (a, b) { return a + b; }, 0) / total * __WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* averageMultiplier */];
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["tap"])(function (average) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.promedioMes = average;
                this.afs.doc(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].USER_STAT + "/stat-" + uid).update({ monthAverage: average });
                return [2 /*return*/];
            });
        }); })).subscribe();
    };
    MiAnaliticaPage.prototype.calculateAverageGeneral = function (uid) {
        var _this = this;
        this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].EXAM_RESULT, function (ref) { return ref.where('user', '==', uid); })
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (results) {
            var total = results.length;
            return results.map(function (r) { return r.promedio; }).reduce(function (a, b) { return a + b; }, 0) / total * __WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* averageMultiplier */];
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["tap"])(function (average) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.promedioGeneral = average;
                this.afs.doc(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].USER_STAT + "/stat-" + uid).update({ generalAverage: average });
                return [2 /*return*/];
            });
        }); })).subscribe();
    };
    MiAnaliticaPage.prototype.loadTimeline = function () {
        this.timeline$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].STAT_VIEW, function (ref) { return ref.where('isTimeline', '==', true); }).valueChanges();
    };
    MiAnaliticaPage.prototype.loadLowAverage = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stats.computeUserAverageList(user)];
                    case 1:
                        list = _a.sent();
                        return [4 /*yield*/, this.afs.doc(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].USER + "/" + user.uid).update({ average_list: list })];
                    case 2:
                        _a.sent();
                        this.lowAverageList = Object(__WEBPACK_IMPORTED_MODULE_8_lodash__["sortBy"])(list.filter(function (t) { return t.promedio <= 0.6 && t.promedio > 0; }), 'promedio');
                        console.log(this.lowAverageList);
                        return [2 /*return*/];
                }
            });
        });
    };
    MiAnaliticaPage.prototype.loadStruct = function () {
        this.struct$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].STAT_VIEW, function (ref) { return ref
            .where('isTimeline', '==', false); })
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (views) { return views.filter(function (v) { return !v.parent; }); }));
    };
    MiAnaliticaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mi-analitica',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/mi-analitica/mi-analitica.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Mi Analítica Personal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-card>\n    <ion-card-title>Promedio General</ion-card-title>\n    <p>{{promedioGeneral | number}}</p>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-title>Promedio del Mes</ion-card-title>\n    <p>{{promedioMes | number}}</p>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-title>Timeline</ion-card-title>\n    <ion-list *ngIf="timeline$ | async as timeline">\n      <ion-item *ngFor="let view of timeline">{{view.name}}</ion-item>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-title>Materias que debes estudiar</ion-card-title>\n    <ion-list *ngIf="lowAverageList">\n      <ion-item *ngFor="let view of lowAverageList">\n        <h2>{{view.tag}}</h2>\n        <p>{{view.promedio * 100 | number}}/100</p>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-title>Rendimiento</ion-card-title>\n    <ion-list>\n\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-title>Promedios</ion-card-title>\n    <ion-list *ngIf="struct$ | async as struct">\n      <ion-item *ngFor="let view of struct">{{view.name}}</ion-item>\n    </ion-list>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/mi-analitica/mi-analitica.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_stats_stats__["a" /* StatsProvider */]])
    ], MiAnaliticaPage);
    return MiAnaliticaPage;
}());

//# sourceMappingURL=mi-analitica.js.map

/***/ })

});
//# sourceMappingURL=27.js.map