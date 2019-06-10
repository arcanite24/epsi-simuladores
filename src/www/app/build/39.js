webpackJsonp([39],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaseDetailPageModule", function() { return ClaseDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clase_detail__ = __webpack_require__(802);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClaseDetailPageModule = /** @class */ (function () {
    function ClaseDetailPageModule() {
    }
    ClaseDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__clase_detail__["a" /* ClaseDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__clase_detail__["a" /* ClaseDetailPage */]),
            ],
        })
    ], ClaseDetailPageModule);
    return ClaseDetailPageModule;
}());

//# sourceMappingURL=clase-detail.module.js.map

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaseDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_back_back__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_models__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(473);
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







var ClaseDetailPage = /** @class */ (function () {
    function ClaseDetailPage(navCtrl, navParams, back, toast, modal, data, file, transfer, load) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.toast = toast;
        this.modal = modal;
        this.data = data;
        this.file = file;
        this.transfer = transfer;
        this.load = load;
        this.resultados = [];
        this.type = this.navParams.get('type');
        this.id = this.navParams.get('id');
        this.newComentario = '';
        this.lc = false;
    }
    ClaseDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadClase(this.id);
        this.back.getComentarios(this.id, this.type).subscribe(function (data) { return _this.comentarios = data.reverse(); });
        this.back.getResultados(this.type, this.back.uid, this.id).subscribe(function (data) {
            _this.resultados = data ? data : [];
        });
    };
    ClaseDetailPage.prototype.openModal = function (id, type, modal) {
        var m = this.modal.create(modal, { id: id, type: type });
        m.present();
    };
    ClaseDetailPage.prototype.openExamen = function (type, id) {
        var _this = this;
        if (!this.resultados || this.resultados.length <= 0) {
            var m = this.modal.create('ExamenDetailPage', { type: type, id: id });
            m.present();
            m.onDidDismiss(function (data) {
                if (!data)
                    return;
                _this.back.getResultados(_this.type, _this.back.uid, _this.id).subscribe(function (data) { return _this.resultados = data ? data : []; });
            });
        }
        else {
            var m = this.modal.create('ResultadosExamenPage', { type: type, id: id, user: this.back.uid });
            m.present();
        }
    };
    ClaseDetailPage.prototype.deleteResultados = function (type, id) {
        var _this = this;
        this.back.deleteResultados(type, this.back.uid, id).subscribe(function (data) {
            _this.ionViewDidLoad();
        });
    };
    ClaseDetailPage.prototype.sendComentario = function (text) {
        var _this = this;
        if (!text)
            return;
        this.lc = true;
        this.back.addComentario(this.type, this.id, this.back.uid, text).subscribe(function (data) {
            _this.ionViewDidLoad();
            _this.newComentario = '';
            _this.lc = false;
        }, function (err) {
            _this.toast.create({ message: 'No se pudo agregar tu comentario...', duration: 2000 }).present();
            _this.lc = false;
        });
    };
    ClaseDetailPage.prototype.goto = function (time) {
        var horas = parseInt(time.HH) * 3600;
        var minInSecs = parseInt(time.mm) * 60;
        var t = parseInt(time.ss) + minInSecs + horas;
        this.video.nativeElement.currentTime = t;
    };
    ClaseDetailPage.prototype.loadClase = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.data.getDoc(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].CONTENT, id)];
                    case 1:
                        _a.clase = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClaseDetailPage.prototype.downloadVideo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var l_1, fileTransfer;
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    l_1 = this.load.create({ content: 'Descargando clase, por favor no cierres la aplicación' });
                    l_1.present();
                    fileTransfer = this.transfer.create();
                    fileTransfer.download(this.clase.video, this.file.dataDirectory + "/.zamna-cache/" + this.clase.id).then(function (entry) {
                        _this.debug = entry;
                        localStorage.setItem("offline-" + _this.clase.id, JSON.stringify(_this.clase));
                        l_1.dismiss();
                        _this.toast.create({ message: 'La clase se descargó correctamente, la puedes ver desde la página de descargas.', duration: 2000 }).present();
                    }).catch(function (error) {
                        _this.toast.create({ message: 'Ocurrió un error al descargar la clase...' });
                        _this.debug = error;
                    });
                    fileTransfer.onProgress(function (e) { return _this.downloadProgress(e); });
                }
                catch (error) {
                    this.toast.create({ message: 'Ocurrió un error al descargar la clase...' });
                    this.debug = error;
                }
                return [2 /*return*/];
            });
        });
    };
    ClaseDetailPage.prototype.downloadProgress = function (e) {
        console.log(e);
        this.debug = e;
    };
    ClaseDetailPage.prototype.listDir = function () {
        return __awaiter(this, void 0, void 0, function () {
            var list, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.file.checkDir(this.file.dataDirectory, '.zamna-cache')];
                    case 1:
                        _a.sent();
                        this.debug = { message: '.zamna-cache dir exists' };
                        return [4 /*yield*/, this.file.listDir(this.file.dataDirectory, '.zamna-cache')];
                    case 2:
                        list = _a.sent();
                        this.debug = list;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.debug = error_1;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('zamnaPlayer'),
        __metadata("design:type", Object)
    ], ClaseDetailPage.prototype, "video", void 0);
    ClaseDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-clase-detail',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/clase-detail/clase-detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{clase ? clase.name : \'Cargando...\'}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <div class="flex-col" *ngIf="!clase">\n    <img src="assets/imgs/rings.svg">\n  </div>\n\n  <div class="zamna-player" *ngIf="clase">\n    <video controls controlsList="nodownload" class="zamna-player" #zamnaPlayer>\n      <source [src]="clase.video">\n    </video>\n  </div>\n\n  <!-- <div class="w-100" *ngIf="debug">\n    <pre>{{debug | json}}</pre>\n  </div> -->\n\n  <ion-list *ngIf="clase && clase.marks">\n    <ion-list-header>Marcadores</ion-list-header>\n    <ion-item *ngFor="let m of clase.marks" (click)="goto(m.time)" >\n      <h2>{{m.text}}</h2>\n      <p>{{m.time.HH}}:{{m.time.mm}}:{{m.time.ss}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class="mt-3" *ngIf="clase">\n    <ion-list-header>Comentarios</ion-list-header>\n    <ion-item>\n      <ion-input placeholder="Agregar comentario" [(ngModel)]="newComentario" [disabled]="lc"></ion-input>\n      <button ion-button clear item-end (click)="sendComentario(newComentario)" [disabled]="!newComentario || newComentario.length <= 0" *ngIf="!lc">\n        <ion-icon name="send"></ion-icon>\n      </button>\n      <ion-thumbnail item-end *ngIf="lc">\n        <img src="assets/imgs/rings.svg">\n      </ion-thumbnail>\n    </ion-item>\n    <ion-item *ngFor="let c of comentarios" text-wrap>\n      <ion-avatar item-start>\n        <img [src]="c.user.avatar ? c.user.avatar : \'assets/imgs/profile.jpg\'">\n      </ion-avatar>\n      <h2>{{c.user.name}} {{c.user.lastName}}</h2>\n      <p>{{c.text}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab right bottom *ngIf="clase">\n    <button ion-fab color="rojito"><ion-icon name="arrow-dropup"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab (click)="openModal(clase.id, navParams.get(\'type\'), \'NotasPage\')">\n        <ion-label>Notas</ion-label>\n        <ion-icon name="document"></ion-icon>\n      </button>\n      <button ion-fab (click)="openModal(clase.id, navParams.get(\'type\'), \'RatingsPage\')">\n      <ion-label>Calificación</ion-label>\n        <ion-icon name="star"></ion-icon>\n      </button>\n      <button ion-fab (click)="openExamen(type, id)" *ngIf="resultados.length <= 0">\n        <ion-label>Evaluación</ion-label>\n        <ion-icon name="archive"></ion-icon>\n      </button>\n      <button ion-fab (click)="downloadVideo()">\n        <ion-label>Descargar Clase</ion-label>\n        <ion-icon name="cloud-download"></ion-icon>\n      </button>\n      <button ion-fab (click)="listDir()">\n        <ion-label>List Dir</ion-label>\n        <ion-icon name="cloud-download"></ion-icon>\n      </button>\n      <!--<button ion-fab (click)="deleteResultados(type, id)" *ngIf="auth.isAdmin">\n        <ion-label>Borrar Resultados</ion-label>\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>-->\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/clase-detail/clase-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
    ], ClaseDetailPage);
    return ClaseDetailPage;
}());

//# sourceMappingURL=clase-detail.js.map

/***/ })

});
//# sourceMappingURL=39.js.map