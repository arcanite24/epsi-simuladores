webpackJsonp([26],{

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasPageModule", function() { return NotasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notas__ = __webpack_require__(843);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotasPageModule = /** @class */ (function () {
    function NotasPageModule() {
    }
    NotasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notas__["a" /* NotasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notas__["a" /* NotasPage */]),
            ],
        })
    ], NotasPageModule);
    return NotasPageModule;
}());

//# sourceMappingURL=notas.module.js.map

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_back_back__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_models__ = __webpack_require__(112);
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





var NotasPage = /** @class */ (function () {
    function NotasPage(navCtrl, navParams, modal, back, toast, viewCtrl, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.back = back;
        this.toast = toast;
        this.viewCtrl = viewCtrl;
        this.data = data;
        this.id = this.navParams.get('id');
        this.type = this.navParams.get('type');
        this.notas = [];
    }
    NotasPage.prototype.ionViewDidLoad = function () {
        this.loadNotas(this.id);
        /* this.back.getNotas(this.id, this.type).subscribe(data => {
          this.notas = data
        }, err => {
          this.toast.create({message: 'No se pudieron cargar tus notas...', duration: 2000}).present()
          if (this.navCtrl.canGoBack()) this.navCtrl.pop()
        }) */
    };
    NotasPage.prototype.loadNotas = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.data.getCollectionQuery(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].NOTE, function (ref) { return ref.where('parent_id', '==', id); })];
                    case 1:
                        _a.notas = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotasPage.prototype.openAdd = function (id, type) {
        var _this = this;
        var m = this.modal.create('NotasAddPage', { id: id, type: type });
        m.present();
        m.onDidDismiss(function (data) {
            if (!data)
                return;
            _this.ionViewDidLoad();
        });
    };
    NotasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notas',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/notas/notas.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Notas</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <div class="flex-col" *ngIf="!notas">\n    <img src="assets/imgs/rings.svg">\n  </div>\n\n  <ion-card *ngFor="let nota of notas">\n    <ion-card-header>{{nota.title}}</ion-card-header>\n    <ion-card-content>{{nota.text}}</ion-card-content>\n  </ion-card>\n  \n  <ion-fab right bottom>\n    <button (click)="openAdd(id, type)" ion-fab color="rojito"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/notas/notas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]])
    ], NotasPage);
    return NotasPage;
}());

//# sourceMappingURL=notas.js.map

/***/ })

});
//# sourceMappingURL=26.js.map