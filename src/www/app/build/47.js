webpackJsonp([47],{

/***/ 1169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistPageModule", function() { return ChecklistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checklist__ = __webpack_require__(1250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ChecklistPageModule = class ChecklistPageModule {
};
ChecklistPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__checklist__["a" /* ChecklistPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checklist__["a" /* ChecklistPage */]),
        ],
    })
], ChecklistPageModule);

//# sourceMappingURL=checklist.module.js.map

/***/ }),

/***/ 1250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_back_back__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_models__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(603);
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







let ChecklistPage = class ChecklistPage {
    constructor(navCtrl, navParams, toast, back, load, afs, data, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.back = back;
        this.load = load;
        this.afs = afs;
        this.data = data;
        this.auth = auth;
        this.uid = localStorage.getItem('uid');
    }
    ionViewDidLoad() {
        const l = this.load.create({ content: 'Cargando checklist...' });
        l.present();
        this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].TODO)
            .valueChanges()
            .subscribe(data => {
            this.checklist = data;
            l.dismiss();
        });
        this.auth.user$.subscribe(user => {
            if (user && user.completedTasks && !this.completed)
                this.completed = user.completedTasks;
        });
        /* this.back.getAllTodos().subscribe(data => {
          this.checklist = data.map(t => t.users ? t : ({users: {}, ...t}))
          l.dismiss()
        }, err => {
          this.toast.create({message: 'No se pudo cargar el checklist...', duration: 2000}).present()
          l.dismiss()
          this.navCtrl.setRoot('HomePage')
        }) */
    }
    toggleCompleted(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            const userKey = `${__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].USER}/${this.auth.user.uid}`;
            const _user = yield this.data.getDocAlt(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].USER, this.auth.user.uid);
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
ChecklistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-checklist',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/checklist/checklist.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Mi checklist diario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-list>\n    <div *ngFor="let c of checklist" class="checklist-item">\n      <ion-item text-wrap>\n        <ion-label>{{c.text}}</ion-label>\n        <ion-checkbox (click)="toggleCompleted(c.id)" [checked]="completed && completed.includes(c.id)"></ion-checkbox>\n      </ion-item>\n    </div>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/checklist/checklist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_back_back__["a" /* BackProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
        __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]])
], ChecklistPage);

//# sourceMappingURL=checklist.js.map

/***/ })

});
//# sourceMappingURL=47.js.map