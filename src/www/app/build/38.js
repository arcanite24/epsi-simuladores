webpackJsonp([38],{

/***/ 1184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualZamnaPageModule", function() { return ManualZamnaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manual_zamna__ = __webpack_require__(1265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ManualZamnaPageModule = class ManualZamnaPageModule {
};
ManualZamnaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__manual_zamna__["a" /* ManualZamnaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__manual_zamna__["a" /* ManualZamnaPage */]),
        ],
    })
], ManualZamnaPageModule);

//# sourceMappingURL=manual-zamna.module.js.map

/***/ }),

/***/ 1265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManualZamnaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_models__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(273);
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




let ManualZamnaPage = class ManualZamnaPage {
    constructor(data, navCtrl) {
        this.data = data;
        this.navCtrl = navCtrl;
        this.list = [];
    }
    ngOnInit() {
        this.loadList();
    }
    loadList() {
        return __awaiter(this, void 0, void 0, function* () {
            const parents = yield this.data.getCollectionQueryAlt(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].CONTENT, 'isPdf', '==', true);
            const filter = parents.filter(p => !p.parent_id);
            for (const parent of filter) {
                const children = yield this.data.getCollectionQueryAlt(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].CONTENT, 'parent_id', '==', parent.id);
                parent.children = children;
                parent.showChildren = false;
                this.list.push(parent);
            }
        });
    }
};
ManualZamnaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-manual-zamna',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/manual-zamna/manual-zamna.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Manual Zamná</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ul class="list-group">\n    <!-- Parents -->\n    <li class="list-group-item" *ngFor="let parent of list">\n      <button\n        ion-button\n        class="btn btn-primary mr-2"\n        (click)="parent.showChildren = !parent.showChildren"\n        *ngIf="parent.children"\n      >\n        <ion-icon name="add" *ngIf="!parent.showChildren"></ion-icon>\n        <ion-icon name="remove" *ngIf="parent.showChildren"></ion-icon>\n      </button>\n\n      <ng-container *ngIf="!parent.pdf">{{ parent.name }}</ng-container>\n      <a (click)="navCtrl.push(\'PdfDetailPage\', { pdf: parent })" *ngIf="parent.pdf">{{ parent.name }}</a>\n\n      <ul *ngIf="parent.showChildren && parent.children" class="mt-1">\n        <li class="list-group-item" *ngFor="let child of parent.children">\n          <ng-container *ngIf="!child.pdf">{{ child.name }}</ng-container>\n          <a (click)="navCtrl.push(\'PdfDetailPage\', { pdf: child })" *ngIf="child.pdf">{{ child.name }}</a>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/manual-zamna/manual-zamna.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */]])
], ManualZamnaPage);

//# sourceMappingURL=manual-zamna.js.map

/***/ })

});
//# sourceMappingURL=38.js.map