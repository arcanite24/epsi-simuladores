webpackJsonp([46],{

/***/ 1126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvanceExamenPageModule", function() { return AvanceExamenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avance_examen__ = __webpack_require__(1202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AvanceExamenPageModule = class AvanceExamenPageModule {
};
AvanceExamenPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__avance_examen__["a" /* AvanceExamenPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__avance_examen__["a" /* AvanceExamenPage */]),
        ],
    })
], AvanceExamenPageModule);

//# sourceMappingURL=avance-examen.module.js.map

/***/ }),

/***/ 1202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvanceExamenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_exam_reducer__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(595);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AvanceExamenPage = class AvanceExamenPage {
    constructor(store, navParams, viewCtrl) {
        this.store = store;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.isGroup = false;
        this.completed = [];
        this.activeIndex = 0;
        this.examState$ = this.store.select('exam');
    }
    ngOnInit() {
        // Load questions
        const questions = this.navParams.get('questions');
        if (questions[0] instanceof Array)
            this.isGroup = true;
        console.log(questions, this.isGroup);
        this.qList = questions;
        this.examState$.subscribe(state => {
            if (state.results && state.results.questions)
                this.completed = Object.keys(state.results.questions);
            if (state.finished)
                this.completed = [];
            this.activeIndex = state.index;
        });
    }
    gotoQuestion(index) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__reducers_exam_reducer__["e" /* SetIndex */](index));
        this.viewCtrl.dismiss();
    }
};
AvanceExamenPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-avance-examen',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/avance-examen/avance-examen.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Avance</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <!-- <pre>{{ completed | json }}</pre> -->\n\n  <ul *ngIf="!isGroup && qList" class="list-group m-4">\n    <li *ngFor="let question of qList; let i = index" class="list-group-item manita-list-item"\n      (click)="gotoQuestion(i, question)">\n      <ion-icon name="checkmark" color="bien" *ngIf="completed.indexOf(question[0].id) >= 0"></ion-icon>\n      <a [ngClass]="{\'active-question\': i == activeIndex}">{{i + 1}}.- {{question.text.substr(0, 100)}}\n        {{question.text.length > 100 ? \'...\' : \'\'}}</a>\n    </li>\n  </ul>\n\n  <ul *ngIf="isGroup && qList" class="list-group m-4">\n    <li *ngFor="let question of qList; let i = index" class="list-group-item manita-list-item"\n      (click)="gotoQuestion(i, question[0])">\n      <ion-icon name="checkmark" color="bien" *ngIf="completed.indexOf(question[0].id) >= 0"></ion-icon>\n      <a [ngClass]="{\'active-question\': i == activeIndex}">{{i + 1}}.- {{question[0].text.substr(0, 100)}}\n        {{question[0].text.length > 100 ? \'...\' : \'\'}}</a>\n    </li>\n  </ul>\n\n  <style>\n    .active-question {\n      font-weight: bolder;\n    }\n  </style>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/avance-examen/avance-examen.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
], AvanceExamenPage);

//# sourceMappingURL=avance-examen.js.map

/***/ })

});
//# sourceMappingURL=46.js.map