webpackJsonp([48],{

/***/ 1101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsesoriaDetailPageModule", function() { return AsesoriaDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asesoria_detail__ = __webpack_require__(1176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AsesoriaDetailPageModule = /** @class */ (function () {
    function AsesoriaDetailPageModule() {
    }
    AsesoriaDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__asesoria_detail__["a" /* AsesoriaDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asesoria_detail__["a" /* AsesoriaDetailPage */]),
            ],
        })
    ], AsesoriaDetailPageModule);
    return AsesoriaDetailPageModule;
}());

//# sourceMappingURL=asesoria-detail.module.js.map

/***/ }),

/***/ 1176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsesoriaDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_back_back__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_models__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(12);
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







var AsesoriaDetailPage = /** @class */ (function () {
    function AsesoriaDetailPage(navCtrl, navParams, back, sanitize, toast, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.sanitize = sanitize;
        this.toast = toast;
        this.afs = afs;
        this.id = this.navParams.get('id');
        this.uid = localStorage.getItem('uid');
        this.newNota = { text: '', title: '' };
        this.lc = false;
    }
    AsesoriaDetailPage.prototype.ionViewDidLoad = function () {
        this.loadAsesoria();
    };
    AsesoriaDetailPage.prototype.loadAsesoria = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].LIVESTREAM).doc(this.id).valueChanges()
                                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["tap"])(function (a) { return _this.chat = _this.sanitize.bypassSecurityTrustResourceUrl("https://www.youtube.com/live_chat?v=" + _this.YouTubeGetID(a.url) + "&embed_domain=" + document.domain); }))];
                    case 1:
                        _a.live$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AsesoriaDetailPage.prototype.sanitizeUrl = function (url) {
        return this.sanitize.bypassSecurityTrustResourceUrl("https://youtube.com/embed/" + this.YouTubeGetID(url));
    };
    AsesoriaDetailPage.prototype.YouTubeGetID = function (url) {
        var ID = '';
        url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if (url[2] !== undefined) {
            ID = url[2].split(/[^0-9a-z_\-]/i);
            ID = ID[0];
        }
        else {
            ID = url;
        }
        return ID;
    };
    AsesoriaDetailPage.prototype.addNota = function (title, text) {
        var _this = this;
        this.lc = true;
        this.back.addNota(title, text, 'asesoria', this.id).subscribe(function (data) {
            /* this.a.notas.push(data) */
            _this.toast.create({ message: 'Nota agregada correctamente.', duration: 2000 }).present();
            _this.lc = false;
            _this.newNota = { text: '', title: '' };
        }, function (err) {
            _this.lc = false;
            _this.toast.create({ message: 'No se pudo agregar tu nota...', duration: 2000 }).present();
        });
    };
    AsesoriaDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asesoria-detail',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/asesoria-detail/asesoria-detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Asesoría</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n  \n  <ng-template #loader>\n    <div class="flex-col">\n      <img src="assets/imgs/rings.svg">\n    </div>\n  </ng-template>\n\n  <div class="asesoria-container" *ngIf="live$ | async as a else loader">\n\n    <iframe *ngIf="a" [src]="sanitizeUrl(a.url)" frameborder="0" allowfullscreen class="main-video"></iframe>\n    <ion-item *ngIf="a">\n      <h2>{{a.name}}</h2>\n      <p>{{a.desc}}</p>\n    </ion-item>\n\n    <ion-list *ngIf="a" >\n      <ion-list-header><strong>Notas</strong></ion-list-header>\n      <ion-item>\n        <ion-input placeholder="Titulo de la nota" [(ngModel)]="newNota.title" [disabled]="lc"></ion-input>\n        <button ion-button clear item-end (click)="addNota(newNota.title, newNota.text)" [disabled]="(newNota.title.length <= 0 && newNota.text.length <= 0) || newNota.title.length <= 0 || newNota.text.length <= 0">\n          <ion-icon name="send"></ion-icon>\n        </button>\n      </ion-item>\n      <ion-item>\n        <ion-textarea placeholder="Texto de la nota" [(ngModel)]="newNota.text"></ion-textarea>\n      </ion-item>\n      <ion-item *ngFor="let n of notas" text-wrap>\n        <h2>{{n.title}}</h2>\n        <p>{{n.text}}</p>\n      </ion-item>\n    </ion-list>\n\n    <iframe *ngIf="chat" [src]="chat" frameborder="0" class="chat-frame"></iframe>\n\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/asesoria-detail/asesoria-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["AngularFirestore"]])
    ], AsesoriaDetailPage);
    return AsesoriaDetailPage;
}());

//# sourceMappingURL=asesoria-detail.js.map

/***/ })

});
//# sourceMappingURL=48.js.map