webpackJsonp([11],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayTemplateAddPageModule", function() { return PayTemplateAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pay_template_add__ = __webpack_require__(745);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PayTemplateAddPageModule = /** @class */ (function () {
    function PayTemplateAddPageModule() {
    }
    PayTemplateAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pay_template_add__["a" /* PayTemplateAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pay_template_add__["a" /* PayTemplateAddPage */]),
            ],
        })
    ], PayTemplateAddPageModule);
    return PayTemplateAddPageModule;
}());

//# sourceMappingURL=pay-template-add.module.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayTemplateAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(455);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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




var PayTemplateAddPage = /** @class */ (function () {
    function PayTemplateAddPage(modal, view, afs, toast) {
        this.modal = modal;
        this.view = view;
        this.afs = afs;
        this.toast = toast;
        this.template = {};
    }
    PayTemplateAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PayTemplateAddPage');
    };
    PayTemplateAddPage.prototype.addTemplate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.template.id;
                        return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].PayTemplate).doc(id).set(__assign({}, this.template, { id: id }))];
                    case 1:
                        _a.sent();
                        this.toast.create({ message: 'Costo creado correctamente', duration: 4000 }).present();
                        this.view.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    PayTemplateAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pay-template-add',template:/*ion-inline-start:"/Users/elzombieisra/Documents/development/zamna-pagos/src/pages/pay-template-add/pay-template-add.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Agregar Costo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n\n    <ion-item>\n      <ion-input placeholder="ID" [(ngModel)]="template.id"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input placeholder="Tag" [(ngModel)]="template.tag"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input placeholder="Precio" [(ngModel)]="template.price" type="number"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input placeholder="Etiqueta Precio" [(ngModel)]="template.priceTag"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input placeholder="Nombre" [(ngModel)]="template.name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input placeholder="Fecha Limite" [(ngModel)]="template.limitDate"></ion-input>\n    </ion-item>\n\n    <div class="flex-loader">\n        <button ion-button  (click)="addTemplate()">Agregar</button>\n      <button ion-button clear color="danger" (click)="view.dismiss()">Cerrar</button>\n    </div>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/elzombieisra/Documents/development/zamna-pagos/src/pages/pay-template-add/pay-template-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], PayTemplateAddPage);
    return PayTemplateAddPage;
}());

//# sourceMappingURL=pay-template-add.js.map

/***/ })

});
//# sourceMappingURL=11.js.map