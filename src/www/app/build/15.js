webpackJsonp([15],{

/***/ 1211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemaAltPageModule", function() { return TemaAltPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tema_alt__ = __webpack_require__(1292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TemaAltPageModule = class TemaAltPageModule {
};
TemaAltPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tema_alt__["a" /* TemaAltPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tema_alt__["a" /* TemaAltPage */]),
        ],
    })
], TemaAltPageModule);

//# sourceMappingURL=tema-alt.module.js.map

/***/ }),

/***/ 1292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemaAltPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__);
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






let TemaAltPage = class TemaAltPage {
    constructor(navCtrl, navParams, data, auth, afs, load) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.auth = auth;
        this.afs = afs;
        this.load = load;
        this.id = this.navParams.get('id');
        this.completedTasks = [];
        this.loaded = false;
    }
    ionViewDidLoad() {
        this.l = this.load.create({ content: 'Cargando...' });
        this.l.present();
        this.loadContent(this.id);
        this.auth.user$.subscribe(user => {
            if (this.loaded)
                return;
            if (!user) {
                return;
            }
            const userKey = `${__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].USER}/${user.uid}`;
            this.afs.doc(userKey).valueChanges().subscribe(_user => {
                if (!_user.completedTasks) {
                    return;
                }
                this.completedTasks = user.completedTasks;
            });
            this.loaded = true;
        });
    }
    loadContent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.tema = yield this.data.getDocAlt(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].CONTENT, id);
            if (this.tema && this.tema.event)
                this.loadEvent(this.tema.event);
            this.l.dismiss();
        });
    }
    loadEvent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.event = yield this.data.getDocAlt(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].EVENT, id);
            console.log(this.event);
        });
    }
    openLink(url) {
        console.log(url);
        // Content Detail
        if (url.includes('/content')) {
            const [, , type, id] = url.split('/');
            this.navCtrl.push('ClaseDetailPage', { type, id });
        }
    }
    toggleCompleted(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            const userKey = `${__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].USER}/${this.auth.user.uid}`;
            const _user = yield this.data.getDocAlt(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].USER, this.auth.user.uid);
            const completedTasks = _user.completedTasks || [];
            if (completedTasks.indexOf(id) < 0) {
                completedTasks.push(id);
                yield this.afs.doc(userKey).update({ completedTasks });
                /* this.checkChanged.next({ id, added: true }); */
            }
            else {
                if (completedTasks.length > 0)
                    completedTasks.splice(completedTasks.indexOf(id), 1);
                yield this.afs.doc(userKey).update({ completedTasks });
                /* this.checkChanged.next({ id, added: false }); */
            }
            // this.stats.modifyCustomCounter(`event-${id}`, this.event.title, 1)
        });
    }
};
TemaAltPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tema-alt',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/tema-alt/tema-alt.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{tema ? tema.name : \'...\'}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-card *ngIf="event as e">\n\n    <ion-card-header>{{e.title}}</ion-card-header>\n    <ion-card-content>{{e.desc}}</ion-card-content>\n\n    <ion-list>\n\n      <ion-item *ngFor="let task of e.tasks">\n        <ion-label>{{task.label}}</ion-label>\n        <ion-checkbox (click)="toggleCompleted(task.id)" [checked]="completedTasks.includes(task.id)"></ion-checkbox>\n      </ion-item>\n\n      <ion-item-divider></ion-item-divider>\n\n      <ion-item>\n        <ion-label>Terminé de estudiar éste tema</ion-label>\n        <ion-checkbox (click)="toggleCompleted(e.id)" [checked]="completedTasks.includes(e.id)"></ion-checkbox>\n      </ion-item>\n\n      <ion-item-divider></ion-item-divider>\n\n      <ion-item *ngFor="let link of e.links" class="item-center">\n        <button class="btn-gordo" ion-button (click)="openLink(link.url)">{{link.label}}</button>\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/tema-alt/tema-alt.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["AngularFirestore"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
], TemaAltPage);

//# sourceMappingURL=tema-alt.js.map

/***/ })

});
//# sourceMappingURL=15.js.map