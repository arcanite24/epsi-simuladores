webpackJsonp([14],{

/***/ 1210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreadAddPageModule", function() { return ThreadAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thread_add__ = __webpack_require__(1290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ThreadAddPageModule = class ThreadAddPageModule {
};
ThreadAddPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__thread_add__["a" /* ThreadAddPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__thread_add__["a" /* ThreadAddPage */]),
        ],
    })
], ThreadAddPageModule);

//# sourceMappingURL=thread-add.module.js.map

/***/ }),

/***/ 1290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_models__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(273);
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





let ThreadAddPage = class ThreadAddPage {
    constructor(navCtrl, navParams, afs, viewCtrl, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.viewCtrl = viewCtrl;
        this.data = data;
        this.thread = {};
        this.cat_id = this.navParams.get('cat');
    }
    addThread() {
        return __awaiter(this, void 0, void 0, function* () {
            this.cat = yield this.data.getDocAlt(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].THREAD_CATEGORY, this.cat_id);
            this.thread.id = this.afs.createId();
            this.thread.date = new Date().toISOString();
            this.thread.cat_id = this.cat_id;
            this.thread.cat_name = this.cat.name;
            yield this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].THREAD).doc(this.thread.id).set(Object.assign({}, this.thread));
            this.viewCtrl.dismiss();
        });
    }
};
ThreadAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-thread-add',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/thread-add/thread-add.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Hacer una pregunta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n  <ion-list>\n    <ion-item>\n      <ion-input placeholder="Tema de la pregunta" [(ngModel)]="thread.title"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-textarea placeholder="Pregunta" [(ngModel)]="thread.text"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <button ion-button (click)="addThread()">Agregar</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/thread-add/thread-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */]])
], ThreadAddPage);

//# sourceMappingURL=thread-add.js.map

/***/ })

});
//# sourceMappingURL=14.js.map