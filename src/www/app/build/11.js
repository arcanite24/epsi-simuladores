webpackJsonp([11],{

/***/ 1146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopUsersPageModule", function() { return TopUsersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__top_users__ = __webpack_require__(1222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TopUsersPageModule = /** @class */ (function () {
    function TopUsersPageModule() {
    }
    TopUsersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__top_users__["a" /* TopUsersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__top_users__["a" /* TopUsersPage */]),
            ],
        })
    ], TopUsersPageModule);
    return TopUsersPageModule;
}());

//# sourceMappingURL=top-users.module.js.map

/***/ }),

/***/ 1222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopUsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_models__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_stats_stats__ = __webpack_require__(590);
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






var TopUsersPage = /** @class */ (function () {
    function TopUsersPage(auth, afs, stats) {
        this.auth = auth;
        this.afs = afs;
        this.stats = stats;
    }
    TopUsersPage.prototype.ngOnInit = function () {
        this.users$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].USER, function (ref) { return ref
            .where('promedio', '>', 0)
            .orderBy('promedio', 'desc')
            .limit(5); })
            .valueChanges();
        this.reloadUsers();
    };
    TopUsersPage.prototype.reloadUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users, _i, users_1, user, promedio;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].USER).valueChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["take"])(1)).toPromise()];
                    case 1:
                        users = _a.sent();
                        _i = 0, users_1 = users;
                        _a.label = 2;
                    case 2:
                        if (!(_i < users_1.length)) return [3 /*break*/, 6];
                        user = users_1[_i];
                        return [4 /*yield*/, this.stats.computeUserAverage(user.uid)];
                    case 3:
                        promedio = _a.sent();
                        return [4 /*yield*/, this.afs.doc(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].USER + "/" + user.uid).update({ promedio: promedio })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 2];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    TopUsersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-top-users',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/top-users/top-users.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Cuadro de Honor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-list *ngIf="users$ | async as users">\n    <ion-item *ngFor="let user of users">\n      <ion-avatar item-start>\n        <img [src]="user.photoURL">\n      </ion-avatar>\n      <h2>{{user.displayName}}</h2>\n      <p>\n        <strong>{{user.promedio | number}}</strong>\n      </p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/top-users/top-users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_5__providers_stats_stats__["a" /* StatsProvider */]])
    ], TopUsersPage);
    return TopUsersPage;
}());

//# sourceMappingURL=top-users.js.map

/***/ })

});
//# sourceMappingURL=11.js.map