webpackJsonp([15],{

/***/ 1143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartCalendarPageModule", function() { return SmartCalendarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smart_calendar__ = __webpack_require__(1219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SmartCalendarPageModule = /** @class */ (function () {
    function SmartCalendarPageModule() {
    }
    SmartCalendarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__smart_calendar__["a" /* SmartCalendarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__smart_calendar__["a" /* SmartCalendarPage */]),
            ],
        })
    ], SmartCalendarPageModule);
    return SmartCalendarPageModule;
}());

//# sourceMappingURL=smart-calendar.module.js.map

/***/ }),

/***/ 1219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartCalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_data__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_models__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
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








var SmartCalendarPage = /** @class */ (function () {
    function SmartCalendarPage(navCtrl, navParams, auth, afs, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.afs = afs;
        this.data = data;
        this.completedTasks = [];
        this.events = [];
        this.loadedEvents = [];
    }
    SmartCalendarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.auth.user$.subscribe(function (user) {
            if (user) {
                _this.afs
                    .collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].USER)
                    .doc(user.uid)
                    .valueChanges()
                    .subscribe(function (u) {
                    return (_this.completedTasks = u.completedTasks ? u.completedTasks : []);
                });
                if (!_this.events$)
                    _this.loadEvents(user.uid);
            }
        });
    };
    SmartCalendarPage.prototype.loadEvents = function (uid) {
        var _this = this;
        this.userSub = this.afs
            .collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].USER)
            .doc(uid)
            .valueChanges()
            .subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
            var events, _loop_1, this_1, _i, events_1, e;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!user.customCalendar)
                            return [2 /*return*/];
                        events = Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["flattenDeep"])(Object.values(user.customCalendar)).filter(function (e) {
                            return e.start.substr(0, 10) === __WEBPACK_IMPORTED_MODULE_7_moment___default()().format('YYYY-MM-DD');
                        });
                        if (!user.completedTasks)
                            user.completedTasks = [];
                        this.completedTasks = user.completedTasks;
                        /*let formatedEvents = []*/
                        if (this.events.length > 0)
                            return [2 /*return*/];
                        _loop_1 = function (e) {
                            var eventDoc_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(e.event && !this_1.loadedEvents.includes(e.event))) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this_1.data.getDocAlt(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].EVENT, e.event)];
                                    case 1:
                                        eventDoc_1 = _a.sent();
                                        setTimeout(function () {
                                            _this.events.push(__assign({}, e, { id: eventDoc_1.id, start: new Date(e.start), title: e.content_name, desc: eventDoc_1.desc, date: new Date().toISOString(), tasks: eventDoc_1.tasks, links: eventDoc_1.links, color: _this.completedTasks.indexOf(eventDoc_1.id) >= 0
                                                    ? { primary: '#5e4b8b', secondary: '#5e4b8b' }
                                                    : { primary: '#CF4747', secondary: '#CF4747' } }));
                                            _this.loadedEvents.push(e.event);
                                        }, 100);
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, events_1 = events;
                        _a.label = 1;
                    case 1:
                        if (!(_i < events_1.length)) return [3 /*break*/, 4];
                        e = events_1[_i];
                        return [5 /*yield**/, _loop_1(e)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    SmartCalendarPage.prototype.openLink = function (url) {
        console.log(url);
        // Content Detail
        if (url.includes('/content')) {
            var _a = url.split('/'), type = _a[2], id = _a[3];
            this.navCtrl.push('ClaseDetailPage', { type: type, id: id });
        }
    };
    SmartCalendarPage.prototype.toggleCompleted = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var userKey, _user, completedTasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(id);
                        userKey = __WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].USER + "/" + this.auth.user.uid;
                        return [4 /*yield*/, this.data.getDocAlt(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].USER, this.auth.user.uid)];
                    case 1:
                        _user = _a.sent();
                        completedTasks = _user.completedTasks || [];
                        if (!(completedTasks.indexOf(id) < 0)) return [3 /*break*/, 3];
                        completedTasks.push(id);
                        return [4 /*yield*/, this.afs.doc(userKey).update({ completedTasks: completedTasks })
                            /* this.checkChanged.next({ id, added: true }); */
                        ];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        if (completedTasks.length > 0)
                            completedTasks.splice(completedTasks.indexOf(id), 1);
                        return [4 /*yield*/, this.afs.doc(userKey).update({ completedTasks: completedTasks })
                            /* this.checkChanged.next({ id, added: false }); */
                        ];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SmartCalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-smart-calendar',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/smart-calendar/smart-calendar.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Smart Calendar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  class="bg-eee">\n\n  <ion-card *ngFor="let e of events">\n\n    <ion-card-header>{{e.title}}</ion-card-header>\n\n    <ion-card-content>\n      <p>{{e.desc}}</p>\n    </ion-card-content>\n\n    <ion-list>\n\n      <ion-item *ngFor="let task of e.tasks">\n        <ion-label>{{task.label}}</ion-label>\n        <ion-checkbox (click)="toggleCompleted(task.id)" [checked]="completedTasks.includes(task.id)"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Terminé de estudiar éste tema</ion-label>\n        <ion-checkbox (click)="toggleCompleted(e.id)" [checked]="completedTasks.includes(e.id)"></ion-checkbox>\n      </ion-item>\n\n      <ion-item-divider></ion-item-divider>\n\n      <ion-item *ngFor="let link of e.links">\n        <button (click)="openLink(link.url)" ion-button>{{link.label}}</button>\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/smart-calendar/smart-calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_0__providers_data_data__["a" /* DataProvider */]])
    ], SmartCalendarPage);
    return SmartCalendarPage;
}());

//# sourceMappingURL=smart-calendar.js.map

/***/ })

});
//# sourceMappingURL=15.js.map