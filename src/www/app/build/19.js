webpackJsonp([19],{

/***/ 1206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideDetailPageModule", function() { return SlideDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_detail__ = __webpack_require__(1286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SlideDetailPageModule = class SlideDetailPageModule {
};
SlideDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__slide_detail__["a" /* SlideDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__slide_detail__["a" /* SlideDetailPage */]),
        ],
    })
], SlideDetailPageModule);

//# sourceMappingURL=slide-detail.module.js.map

/***/ }),

/***/ 1286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_models__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(603);
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






let SlideDetailPage = class SlideDetailPage {
    constructor(navCtrl, navParams, afs, imgCtrl, toast, auth, load) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.imgCtrl = imgCtrl;
        this.toast = toast;
        this.auth = auth;
        this.load = load;
        this.id = this.navParams.get("id");
        this.lc = false;
        this.newNota = { title: "", text: "" };
    }
    ionViewDidLoad() {
        this.slide$ = this.afs
            .collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].SLIDE)
            .doc(this.id)
            .valueChanges();
        this.auth.user$.subscribe(user => {
            if (user && !this.notas$) {
                this.notas$ = this.afs
                    .collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].NOTE, ref => ref.where("parent_id", "==", this.id).where("user", "==", user.uid))
                    .valueChanges();
            }
        });
    }
    openSlide(img) {
        this.imgCtrl.create(img).present();
    }
    addNota(title, text) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!title)
                return this.toast
                    .create({ message: "Ingresa un titulo", duration: 2000 })
                    .present();
            if (!text)
                return this.toast
                    .create({ message: "Ingresa un text", duration: 2000 })
                    .present();
            const l = this.load.create({ content: "Agregando..." });
            l.present();
            const id = this.afs.createId();
            yield this.afs
                .collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].NOTE)
                .doc(id)
                .set({
                id,
                title,
                text,
                parent_id: this.id,
                user: this.auth.user.uid
            });
            l.dismiss();
            this.newNota = { title: '', text: '' };
        });
    }
    onSlideChange() {
        //this.index = this.slides.getActiveIndex()
        //
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Slides */])
], SlideDetailPage.prototype, "slides", void 0);
SlideDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-slide-detail",template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/slide-detail/slide-detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Presentación</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ng-template #loader>\n    <div class="flex-col">\n      <img src="assets/imgs/rings.svg">\n    </div>\n  </ng-template>\n\n  <ion-slides *ngIf="slide$ | async as s" (ionSlideDidChange)="onSlideChange()">\n    <ion-slide *ngFor="let slide of s.images">\n      <img [src]="slide" #img (click)="openSlide(img)">\n    </ion-slide>\n  </ion-slides>\n\n  <ion-list>\n    <ion-list-header class="flex-row">Notas</ion-list-header>\n    <ion-item>\n      <ion-input placeholder="Titulo de la nota" [(ngModel)]="newNota.title" [disabled]="lc"></ion-input>\n      <button ion-button clear item-end (click)="addNota(newNota.title, newNota.text)" [disabled]="(newNota.title.length <= 0 && newNota.text.length <= 0) || newNota.title.length <= 0 || newNota.text.length <= 0">\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-textarea placeholder="Texto de la nota" [(ngModel)]="newNota.text"></ion-textarea>\n    </ion-item>\n    <ion-item *ngFor="let nota of notas$ | async" text-wrap>\n      <h2>{{nota.title}}</h2>\n      <p>{{nota.text}}</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/slide-detail/slide-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
        __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
], SlideDetailPage);

//# sourceMappingURL=slide-detail.js.map

/***/ })

});
//# sourceMappingURL=19.js.map