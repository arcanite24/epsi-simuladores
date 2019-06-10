webpackJsonp([37],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPageModule", function() { return DownloadsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__downloads__ = __webpack_require__(804);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DownloadsPageModule = /** @class */ (function () {
    function DownloadsPageModule() {
    }
    DownloadsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__downloads__["a" /* DownloadsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__downloads__["a" /* DownloadsPage */]),
            ],
        })
    ], DownloadsPageModule);
    return DownloadsPageModule;
}());

//# sourceMappingURL=downloads.module.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(468);
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



var DownloadsPage = /** @class */ (function () {
    function DownloadsPage(navCtrl, navParams, file, toast, load) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.file = file;
        this.toast = toast;
        this.load = load;
        this.clases = [];
    }
    DownloadsPage.prototype.ionViewDidLoad = function () {
        this.loadClases();
    };
    DownloadsPage.prototype.loadClases = function () {
        return __awaiter(this, void 0, void 0, function () {
            var l, list, _i, list_1, file, data, clase, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        l = this.load.create({ content: 'Cargando clases descargadas...' });
                        l.present();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.file.listDir(this.file.dataDirectory, '.zamna-cache')];
                    case 2:
                        list = _a.sent();
                        this.debug = list;
                        for (_i = 0, list_1 = list; _i < list_1.length; _i++) {
                            file = list_1[_i];
                            if (file.isFile) {
                                data = localStorage.getItem("offline-" + file.name);
                                this.debug = { json: data };
                                if (data) {
                                    clase = JSON.parse(data);
                                    this.debug = clase;
                                    this.clases.push({
                                        name: clase.name,
                                        path: file.nativeURL,
                                        id: clase.id
                                    });
                                }
                            }
                        }
                        l.dismiss();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.toast.create({ message: error_1.message, duration: 2000 }).present();
                        l.dismiss();
                        this.debug = error_1;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DownloadsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-downloads',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/downloads/downloads.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Descargas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n  <ion-list>\n    <ion-list-header>Clases Descargadas</ion-list-header>\n    <!-- <ion-item *ngIf="debug">\n      <pre>{{ debug | json }}</pre>\n    </ion-item> -->\n    <ion-item *ngFor="let c of clases" text-wrap (click)="navCtrl.push(\'OfflineVideoPage\', {clase: c})">\n      <h2>{{c.name}}</h2>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/downloads/downloads.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
    ], DownloadsPage);
    return DownloadsPage;
}());

//# sourceMappingURL=downloads.js.map

/***/ })

});
//# sourceMappingURL=37.js.map