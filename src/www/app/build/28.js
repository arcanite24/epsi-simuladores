webpackJsonp([28],{

/***/ 1197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCommentsPageModule", function() { return PostCommentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_comments__ = __webpack_require__(1278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let PostCommentsPageModule = class PostCommentsPageModule {
};
PostCommentsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__post_comments__["a" /* PostCommentsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post_comments__["a" /* PostCommentsPage */]),
        ],
    })
], PostCommentsPageModule);

//# sourceMappingURL=post-comments.module.js.map

/***/ }),

/***/ 1278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostCommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_models__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(603);
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





let PostCommentsPage = class PostCommentsPage {
    constructor(navCtrl, navParams, viewCtrl, afs, auth, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.afs = afs;
        this.auth = auth;
        this.toast = toast;
        this.comments = this.navParams.get('comments');
        this.post = this.navParams.get('post');
        this.comment = { text: '' };
    }
    addComment() {
        return __awaiter(this, void 0, void 0, function* () {
            this.comment.id = this.afs.createId();
            this.comment.likes = [];
            this.comment.date = new Date().toISOString();
            this.comment.post = this.post;
            this.comment.user = this.auth.user;
            console.log(this.comment);
            yield this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].POST_COMMENT).doc(this.comment.id).set(Object.assign({}, this.comment));
            this.toast.create({ message: 'Comentario agregado correctamente', duration: 2000 }).present();
            this.comments.push(this.comment);
        });
    }
};
PostCommentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-post-comments',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/post-comments/post-comments.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Comentarios</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-list>\n    <ion-item *ngIf="!comments || comments.length <= 0">No hay comentarios en ésta publicación...</ion-item>\n    <ion-item>\n      <ion-input placeholder="Ingresa tu comentario" [(ngModel)]="comment.text"></ion-input>\n      <button item-end ion-button>\n        <ion-icon name="send" (click)="addComment()"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item *ngFor="let c of comments" text-wrap>\n      <ion-avatar item-start>\n        <img [src]="c.user.photoURL ? c.user.photoURL : \'assets/imgs/profile.jpg\'">\n      </ion-avatar>\n      <h2>{{c.user.displayName}}</h2>\n      <p>{{c.text}}</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/post-comments/post-comments.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */]])
], PostCommentsPage);

//# sourceMappingURL=post-comments.js.map

/***/ })

});
//# sourceMappingURL=28.js.map