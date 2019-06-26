webpackJsonp([41],{

/***/ 1132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComoTeSientesHoyPageModule", function() { return ComoTeSientesHoyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__como_te_sientes_hoy__ = __webpack_require__(1208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ComoTeSientesHoyPageModule = class ComoTeSientesHoyPageModule {
};
ComoTeSientesHoyPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__como_te_sientes_hoy__["a" /* ComoTeSientesHoyPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__como_te_sientes_hoy__["a" /* ComoTeSientesHoyPage */]),
        ],
    })
], ComoTeSientesHoyPageModule);

//# sourceMappingURL=como-te-sientes-hoy.module.js.map

/***/ }),

/***/ 1208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComoTeSientesHoyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_models__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(263);
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







let ComoTeSientesHoyPage = class ComoTeSientesHoyPage {
    constructor(auth, afs, data, viewCtrl) {
        this.auth = auth;
        this.afs = afs;
        this.data = data;
        this.viewCtrl = viewCtrl;
        this.mood = {
            mood: 1,
            text: ''
        };
        this.loaded = false;
    }
    ngOnInit() {
        /*this.buildModels();*/
        /* this.buildLists() */
        this.auth.user$.subscribe(user => {
            if (user && !this.loaded) {
                this.loadMoodRates(user.uid);
                this.loaded = true;
            }
        });
    }
    loadMoodRates(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const rates = yield this.data.getCollectionQuery(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].MOOD_RATE, ref => ref.where('user', '==', uid));
            const today = __WEBPACK_IMPORTED_MODULE_4_moment___default()().format('DD-MM-YYYY');
            console.log(rates, today);
            /*
                if (canOpen) this.modal.getModal('moodAddModal').open()
                if (canOpenDaily) this.openDaily(uid, today) */
        });
    }
    openDaily(uid, date) {
        return __awaiter(this, void 0, void 0, function* () {
            const dailys = yield this.data.getCollection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].DAILY);
            if (!dailys || dailys.length <= 0)
                return;
            this.daily = dailys[Math.floor(Math.random() * dailys.length)];
            const noti_id = this.afs.createId();
            yield this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].NOTIFICATION).doc(noti_id).set({
                id: noti_id,
                title: this.daily.title,
                text: this.daily.text,
                date: new Date().toISOString(),
                isGlobal: false,
                user: uid
            });
            const id = this.afs.createId();
            yield this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].DAILY_REGISTER).doc(id).set({
                id,
                user: uid,
                date,
                daily: Object.assign({}, this.daily)
            });
        });
    }
    sendMood(mood, text) {
        if (mood === -1) {
            this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].MOOD_RATE).add({
                text,
                mood,
                user: this.auth.user.uid,
                date: __WEBPACK_IMPORTED_MODULE_4_moment___default()().format('DD-MM-YYYY'),
            });
            this.viewCtrl.dismiss();
        }
        else {
            this.selectedMood = mood;
        }
    }
    sendFinalMood(mood, text) {
        return __awaiter(this, void 0, void 0, function* () {
            this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].MOOD_RATE).add({
                text,
                mood,
                user: this.auth.user.uid,
                date: __WEBPACK_IMPORTED_MODULE_4_moment___default()().format('DD-MM-YYYY'),
            });
            this.viewCtrl.dismiss();
        });
    }
};
ComoTeSientesHoyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-como-te-sientes-hoy',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/como-te-sientes-hoy/como-te-sientes-hoy.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>¿Cómo te sientes hoy?</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-eee">\n  <div class="col-md-12" *ngIf="!selectedMood">\n    <h4>¿Cómo te sientes hoy?</h4>\n  </div>\n\n  <div class="col-md-12" *ngIf="!selectedMood">\n    <ul class="list-group">\n      <li class="list-group-item">\n        <button ion-button color="muyMal" class="btn btn-danger" type="button" (click)="sendMood(1, mood.text)">Muy Mal</button>\n        <!--<input type="radio" [value]="1" id="mood-1" [(ngModel)]="mood.mood">\n              <label class="ml-2" for="mood-1">Muy Mal</label>-->\n      </li>\n      <li class="list-group-item">\n        <button ion-button color="mal" class="btn btn-warning" type="button" (click)="sendMood(2, mood.text)">Mal</button>\n        <!--<input type="radio" [value]="2" id="mood-2" [(ngModel)]="mood.mood">\n              <label class="ml-2" for="mood-2">Mal</label>-->\n      </li>\n      <li class="list-group-item">\n        <button ion-button color="regular" class="btn btn-secondary btn-orange" type="button" (click)="sendMood(3, mood.text)">Regular</button>\n      </li>\n      <li class="list-group-item">\n        <button ion-button color="bien" class="btn btn-success" type="button" (click)="sendMood(4, mood.text)">Bien</button>\n      </li>\n      <li class="list-group-item">\n        <button ion-button color="muyBien" class="btn btn-info" type="button" (click)="sendMood(5, mood.text)">Muy Bien</button>\n      </li>\n      <li class="list-group-item">\n        <button ion-button color="excelente" class="btn btn-primary" type="button" (click)="sendMood(6, mood.text)">Excelente</button>\n      </li>\n    </ul>\n  </div>\n\n  <div class="col-md-12 form-group mt-3" *ngIf="selectedMood">\n    <label for="">¿Por qué te sientes así?</label>\n    <textarea [(ngModel)]="mood.text" class="form-control"></textarea>\n  </div>\n\n  <div class="col-md-12" *ngIf="selectedMood">\n    <button type="button" class="btn btn-primary" (click)="sendFinalMood(selectedMood, mood.text)">Enviar</button>\n  </div>\n\n  <div class="col-md-12" *ngIf="!selectedMood">\n    <!--<button class="btn btn-success" [disabled]="!mood.mood && !mood.text" (click)="sendMood()">Enviar</button>-->\n    <button ion-button color="danger" class="btn btn-danger ml-2" type="button" (click)="sendMood(-1, mood.text)">No quiero contestar hoy</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/como-te-sientes-hoy/como-te-sientes-hoy.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
        __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
], ComoTeSientesHoyPage);

//# sourceMappingURL=como-te-sientes-hoy.js.map

/***/ })

});
//# sourceMappingURL=41.js.map