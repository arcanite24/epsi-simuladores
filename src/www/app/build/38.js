webpackJsonp([38],{

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComoTeSientesHoyPageModule", function() { return ComoTeSientesHoyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__como_te_sientes_hoy__ = __webpack_require__(825);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComoTeSientesHoyPageModule = /** @class */ (function () {
    function ComoTeSientesHoyPageModule() {
    }
    ComoTeSientesHoyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__como_te_sientes_hoy__["a" /* ComoTeSientesHoyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__como_te_sientes_hoy__["a" /* ComoTeSientesHoyPage */]),
            ],
        })
    ], ComoTeSientesHoyPageModule);
    return ComoTeSientesHoyPageModule;
}());

//# sourceMappingURL=como-te-sientes-hoy.module.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComoTeSientesHoyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_models__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(198);
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







var ComoTeSientesHoyPage = /** @class */ (function () {
    function ComoTeSientesHoyPage(auth, afs, data, viewCtrl) {
        this.auth = auth;
        this.afs = afs;
        this.data = data;
        this.viewCtrl = viewCtrl;
        this.mood = {
            mood: 1,
            text: ''
        };
    }
    ComoTeSientesHoyPage.prototype.ngOnInit = function () {
        /*this.buildModels();*/
        /* this.buildLists() */
        var _this = this;
        this.auth.user$.subscribe(function (user) {
            if (user) {
                _this.loadMoodRates(user.uid);
            }
        });
    };
    ComoTeSientesHoyPage.prototype.loadMoodRates = function (uid) {
        return __awaiter(this, void 0, void 0, function () {
            var rates, today;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data.getCollectionQuery(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].MOOD_RATE, function (ref) { return ref.where('user', '==', uid); })];
                    case 1:
                        rates = _a.sent();
                        today = __WEBPACK_IMPORTED_MODULE_4_moment___default()().format('DD-MM-YYYY');
                        console.log(rates, today);
                        return [2 /*return*/];
                }
            });
        });
    };
    ComoTeSientesHoyPage.prototype.openDaily = function (uid, date) {
        return __awaiter(this, void 0, void 0, function () {
            var dailys, noti_id, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data.getCollection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].DAILY)];
                    case 1:
                        dailys = _a.sent();
                        if (!dailys || dailys.length <= 0)
                            return [2 /*return*/];
                        this.daily = dailys[Math.floor(Math.random() * dailys.length)];
                        noti_id = this.afs.createId();
                        return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].NOTIFICATION).doc(noti_id).set({
                                id: noti_id,
                                title: this.daily.title,
                                text: this.daily.text,
                                date: new Date().toISOString(),
                                isGlobal: false,
                                user: uid
                            })];
                    case 2:
                        _a.sent();
                        id = this.afs.createId();
                        return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].DAILY_REGISTER).doc(id).set({
                                id: id,
                                user: uid,
                                date: date,
                                daily: __assign({}, this.daily)
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ComoTeSientesHoyPage.prototype.sendMood = function (mood, text) {
        if (mood === -1) {
            this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].MOOD_RATE).add({
                text: text,
                mood: mood,
                user: this.auth.user.uid,
                date: __WEBPACK_IMPORTED_MODULE_4_moment___default()().format('DD-MM-YYYY'),
            });
            this.viewCtrl.dismiss();
        }
        else {
            this.selectedMood = mood;
        }
    };
    ComoTeSientesHoyPage.prototype.sendFinalMood = function (mood, text) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].MOOD_RATE).add({
                    text: text,
                    mood: mood,
                    user: this.auth.user.uid,
                    date: __WEBPACK_IMPORTED_MODULE_4_moment___default()().format('DD-MM-YYYY'),
                });
                this.viewCtrl.dismiss();
                return [2 /*return*/];
            });
        });
    };
    ComoTeSientesHoyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-como-te-sientes-hoy',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/como-te-sientes-hoy/como-te-sientes-hoy.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>¿Cómo te sientes hoy?</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-eee">\n  <div class="col-md-12" *ngIf="!selectedMood">\n    <h4>¿Cómo te sientes hoy?</h4>\n  </div>\n\n  <div class="col-md-12" *ngIf="!selectedMood">\n    <ul class="list-group">\n      <li class="list-group-item">\n        <button ion-button color="muyMal" class="btn btn-danger" type="button" (click)="sendMood(1, mood.text)">Muy Mal</button>\n        <!--<input type="radio" [value]="1" id="mood-1" [(ngModel)]="mood.mood">\n              <label class="ml-2" for="mood-1">Muy Mal</label>-->\n      </li>\n      <li class="list-group-item">\n        <button ion-button color="mal" class="btn btn-warning" type="button" (click)="sendMood(2, mood.text)">Mal</button>\n        <!--<input type="radio" [value]="2" id="mood-2" [(ngModel)]="mood.mood">\n              <label class="ml-2" for="mood-2">Mal</label>-->\n      </li>\n      <li class="list-group-item">\n        <button ion-button color="regular" class="btn btn-secondary btn-orange" type="button" (click)="sendMood(3, mood.text)">Regular</button>\n      </li>\n      <li class="list-group-item">\n        <button ion-button color="bien" class="btn btn-success" type="button" (click)="sendMood(4, mood.text)">Bien</button>\n      </li>\n      <li class="list-group-item">\n        <button ion-button color="muyBien" class="btn btn-info" type="button" (click)="sendMood(5, mood.text)">Muy Bien</button>\n      </li>\n      <li class="list-group-item">\n        <button ion-button color="excelente" class="btn btn-primary" type="button" (click)="sendMood(6, mood.text)">Excelente</button>\n      </li>\n    </ul>\n  </div>\n\n  <div class="col-md-12 form-group mt-3" *ngIf="selectedMood">\n    <label for="">¿Por qué te sientes así?</label>\n    <textarea [(ngModel)]="mood.text" class="form-control"></textarea>\n  </div>\n\n  <div class="col-md-12" *ngIf="selectedMood">\n    <button type="button" class="btn btn-primary" (click)="sendFinalMood(selectedMood, mood.text)">Enviar</button>\n  </div>\n\n  <div class="col-md-12" *ngIf="!selectedMood">\n    <!--<button class="btn btn-success" [disabled]="!mood.mood && !mood.text" (click)="sendMood()">Enviar</button>-->\n    <button ion-button color="danger" class="btn btn-danger ml-2" type="button" (click)="sendMood(-1, mood.text)">No quiero contestar hoy</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/como-te-sientes-hoy/como-te-sientes-hoy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
    ], ComoTeSientesHoyPage);
    return ComoTeSientesHoyPage;
}());

//# sourceMappingURL=como-te-sientes-hoy.js.map

/***/ })

});
//# sourceMappingURL=38.js.map