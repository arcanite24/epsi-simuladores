webpackJsonp([51],{

/***/ 1164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsesoriaDetailPageModule", function() { return AsesoriaDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asesoria_detail__ = __webpack_require__(1244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AsesoriaDetailPageModule = class AsesoriaDetailPageModule {
};
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

//# sourceMappingURL=asesoria-detail.module.js.map

/***/ }),

/***/ 1244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsesoriaDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_back_back__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_models__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(7);
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







let AsesoriaDetailPage = class AsesoriaDetailPage {
    constructor(navCtrl, navParams, back, sanitize, toast, afs) {
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
    ionViewDidLoad() {
        this.loadAsesoria();
    }
    loadAsesoria() {
        return __awaiter(this, void 0, void 0, function* () {
            this.live$ = yield this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].LIVESTREAM).doc(this.id).valueChanges()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["tap"])(a => this.chat = this.sanitize.bypassSecurityTrustResourceUrl(`https://www.youtube.com/live_chat?v=${this.YouTubeGetID(a.url)}&embed_domain=${document.domain}`)));
        });
    }
    sanitizeUrl(url) {
        return this.sanitize.bypassSecurityTrustResourceUrl(`https://youtube.com/embed/${this.YouTubeGetID(url)}`);
    }
    YouTubeGetID(url) {
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
    }
    addNota(title, text) {
        this.lc = true;
        this.back.addNota(title, text, 'asesoria', this.id).subscribe(data => {
            /* this.a.notas.push(data) */
            this.toast.create({ message: 'Nota agregada correctamente.', duration: 2000 }).present();
            this.lc = false;
            this.newNota = { text: '', title: '' };
        }, err => {
            this.lc = false;
            this.toast.create({ message: 'No se pudo agregar tu nota...', duration: 2000 }).present();
        });
    }
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

//# sourceMappingURL=asesoria-detail.js.map

/***/ })

});
//# sourceMappingURL=51.js.map