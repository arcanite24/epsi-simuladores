webpackJsonp([22],{

/***/ 1135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsPageModule", function() { return RatingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ratings__ = __webpack_require__(1211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(602);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ratings__["a" /* RatingsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */],
            ],
        })
    ], RatingsPageModule);
    return RatingsPageModule;
}());

//# sourceMappingURL=ratings.module.js.map

/***/ }),

/***/ 1211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_back_back__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_models__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_data__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators__ = __webpack_require__(12);
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









var RatingsPage = /** @class */ (function () {
    function RatingsPage(navCtrl, navParams, back, toast, viewCtrl, afs, auth, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.toast = toast;
        this.viewCtrl = viewCtrl;
        this.afs = afs;
        this.auth = auth;
        this.data = data;
        this.id = this.navParams.get('id');
        this.type = this.navParams.get('type');
        this.contentRatings = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["c" /* contentRatings */].slice();
        this.ratingsModel = {};
    }
    RatingsPage.prototype.ionViewDidLoad = function () {
        this.loadRatings();
        this.loadContent();
        /* this.back.getClase(this.id, this.type).subscribe(data => {
          this.clase = data
          this.clase.c = data.ratings ? data.ratings[this.back.uid] ? data.ratings[this.back.uid].c : 0 : 0
          this.clase.d = data.ratings ? data.ratings[this.back.uid] ? data.ratings[this.back.uid].d : 0 : 0
          this.clase.e = data.ratings ? data.ratings[this.back.uid] ? data.ratings[this.back.uid].e : 0 : 0
        },
        err => {
          this.toast.create({message: 'No se pudo cargar la calificación de la clase...', duration: 2000}).present()
          if (this.navCtrl.canGoBack()) this.navCtrl.pop()
        }) */
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
    RatingsPage.prototype.loadContent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.data.getDocAlt(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].CONTENT, this.id)];
                    case 1:
                        _a.content = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RatingsPage.prototype.loadRatings = function () {
        var _this = this;
        this.auth.user$.subscribe(function (user) {
            if (!user && !_this.rating$) {
                return;
            }
            // console.log(this.parent_type, this.parent_id, this.content_type, this.content)
            // Generates the key for the userRating
            _this.ratingKey = _this.id + "-" + user.uid;
            _this.rating$ = _this.afs.doc(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].RATING + "/" + _this.ratingKey).valueChanges();
            // This loads the current user rating for the specific content
            _this.rating$.subscribe(function (ratings) {
                _this.ratingsModel = ratings ? ratings : { id: _this.ratingKey };
            });
        });
    };
    RatingsPage.prototype.updateRating = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, content;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (isNaN(value)) {
                            return [2 /*return*/];
                        }
                        console.log("updateing rating \"" + key + "\" to \"" + value + "\"");
                        return [4 /*yield*/, this.afs.doc(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].CONTENT + "/" + this.id).valueChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["take"])(1)).toPromise()];
                    case 1:
                        content = _c.sent();
                        if (!content.totalRatings) {
                            content.totalRatings = 0;
                        }
                        if (!content.ratings) {
                            content.ratings = {};
                        }
                        if (!content.ratings[key]) {
                            content.ratings[key] = 0;
                        }
                        content.totalRatings++;
                        // content.ratings[key] = (content.ratings[key] + value) / content.totalRatings
                        console.log((_a = {
                                id: this.ratingKey
                            },
                            _a[key] = value,
                            _a.parent = this.id,
                            _a));
                        return [4 /*yield*/, this.afs.doc(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].RATING + "/" + this.ratingKey).set((_b = {
                                    id: this.ratingKey
                                },
                                _b[key] = value,
                                _b.parent = this.id,
                                _b), { merge: true })];
                    case 2:
                        _c.sent();
                        /* this.toastr.success('Gracias por tu calificación.'); */
                        // Calculate rating every update (might not be the best idea until we find another thing)
                        this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].RATING, function (ref) { return ref
                            .where('parent', '==', _this.id); })
                            .valueChanges()
                            .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["map"])(function (ratings) { return ratings.map(function (r) { return r[key]; }).reduce(function (a, b) { return a + b; }, 0) / ratings.length; })).subscribe(function (rating) {
                            content.ratings[key] = parseFloat(rating.toString());
                            _this.afs.doc(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].CONTENT + "/" + _this.id).update({ ratings: content.ratings, totalRatings: content.totalRatings });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RatingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ratings',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/ratings/ratings.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Calificar</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <!-- <div class="flex-col" *ngIf="clase">\n    <h2>Contenido {{clase.c | number}} / 5</h2>\n    <rating [(ngModel)]="clase.c" (ngModelChange)="saveRating($event)"></rating>\n\n    <h2>Diseño {{clase.d | number}} / 5</h2>\n    <rating [(ngModel)]="clase.d" (ngModelChange)="saveRating($event)"></rating>\n\n    <h2>Entendible {{clase.e | number}} / 5</h2>\n    <rating [(ngModel)]="clase.e" (ngModelChange)="saveRating($event)"></rating>\n  </div> -->\n\n  <div class="ratings-panel p-3" *ngIf="ratingsModel">\n\n    <div class="content-rating" *ngFor="let rating of contentRatings">\n      <h4>{{rating.label}} <span\n          *ngIf="content && content.ratings && content.ratings[rating.key]">{{content.ratings[rating.key].toFixed(2)}}/{{rating.max}}</span>\n      </h4>\n      <rating [(ngModel)]="ratingsModel[rating.key]" (ngModelChange)="updateRating(rating.key, ratingsModel[rating.key])"></rating>\n      <!-- <ngb-rating [(rate)]="ratingsModel[rating.key]" (rateChange)="updateRating(rating.key, ratingsModel[rating.key])"\n        [max]="rating.max"></ngb-rating> -->\n    </div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/ratings/ratings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_data_data__["a" /* DataProvider */]])
    ], RatingsPage);
    return RatingsPage;
}());

//# sourceMappingURL=ratings.js.map

/***/ })

});
//# sourceMappingURL=22.js.map