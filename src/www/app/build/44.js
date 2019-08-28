webpackJsonp([44],{

/***/ 1173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPageModule", function() { return DownloadsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__downloads__ = __webpack_require__(1254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let DownloadsPageModule = class DownloadsPageModule {
};
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

//# sourceMappingURL=downloads.module.js.map

/***/ }),

/***/ 1254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(612);
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



let DownloadsPage = class DownloadsPage {
    constructor(navCtrl, navParams, file, toast, load) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.file = file;
        this.toast = toast;
        this.load = load;
        this.clases = [];
    }
    ionViewDidLoad() {
        this.loadClases();
    }
    loadClases() {
        return __awaiter(this, void 0, void 0, function* () {
            const l = this.load.create({ content: 'Cargando clases descargadas...' });
            l.present();
            try {
                this.clases = [];
                const list = yield this.file.listDir(this.file.dataDirectory, '.zamna-cache');
                this.debug = list;
                for (const file of list) {
                    if (file.isFile) {
                        const data = localStorage.getItem(`offline-${file.name}`);
                        this.debug = { json: data };
                        if (data) {
                            const clase = JSON.parse(data);
                            this.debug = clase;
                            this.clases.push({
                                name: clase.name,
                                path: file.nativeURL,
                                id: clase.id,
                                file: file.name,
                            });
                        }
                    }
                }
                l.dismiss();
            }
            catch (error) {
                this.toast.create({ message: error.message, duration: 2000 }).present();
                l.dismiss();
                this.debug = error;
            }
        });
    }
    removeFile(name) {
        localStorage.removeItem(`offline-${name}`);
        this.toast.create({ message: 'Clase borrada correctamente', duration: 2000 }).present();
        this.loadClases();
    }
};
DownloadsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-downloads',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/downloads/downloads.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Descargas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n  <ion-list>\n    <ion-list-header>Clases Descargadas</ion-list-header>\n    <!-- <ion-item *ngIf="debug">\n      <pre>{{ debug | json }}</pre>\n    </ion-item> -->\n    <ion-item *ngFor="let c of clases" text-wrap>\n      <h2 (click)="navCtrl.push(\'OfflineVideoPage\', {clase: c})">{{c.name}}</h2>\n      <button ion-button item-end (click)="removeFile(c.file)">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/downloads/downloads.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
], DownloadsPage);

//# sourceMappingURL=downloads.js.map

/***/ })

});
//# sourceMappingURL=44.js.map