webpackJsonp([15],{

/***/ 1165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartCalendarPageModule", function() { return SmartCalendarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smart_calendar__ = __webpack_require__(1241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SmartCalendarPageModule = class SmartCalendarPageModule {
};
SmartCalendarPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__smart_calendar__["a" /* SmartCalendarPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__smart_calendar__["a" /* SmartCalendarPage */]),
        ],
    })
], SmartCalendarPageModule);

//# sourceMappingURL=smart-calendar.module.js.map

/***/ }),

/***/ 1241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartCalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_data__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_models__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
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








let SmartCalendarPage = class SmartCalendarPage {
    constructor(navCtrl, navParams, auth, afs, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.afs = afs;
        this.data = data;
        this.completedTasks = [];
        this.events = [];
        this.loadedEvents = [];
    }
    ionViewDidLoad() {
        this.auth.user$.subscribe(user => {
            if (user) {
                this.afs
                    .collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].USER)
                    .doc(user.uid)
                    .valueChanges()
                    .subscribe(u => (this.completedTasks = u.completedTasks ? u.completedTasks : []));
                if (!this.events$)
                    this.loadEvents(user.uid);
            }
        });
    }
    loadEvents(uid) {
        this.userSub = this.afs
            .collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].USER)
            .doc(uid)
            .valueChanges()
            .subscribe((user) => __awaiter(this, void 0, void 0, function* () {
            if (!user.customCalendar)
                return;
            const events = Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["flattenDeep"])(Object.values(user.customCalendar)).filter((e) => e.start.substr(0, 10) === __WEBPACK_IMPORTED_MODULE_7_moment___default()().format('YYYY-MM-DD'));
            if (!user.completedTasks)
                user.completedTasks = [];
            this.completedTasks = user.completedTasks;
            /*let formatedEvents = []*/
            if (this.events.length > 0)
                return;
            for (let e of events) {
                if (e.event && !this.loadedEvents.includes(e.event)) {
                    const eventDoc = yield this.data.getDocAlt(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].EVENT, e.event);
                    setTimeout(() => {
                        this.events.push(Object.assign({}, e, { id: eventDoc.id, start: new Date(e.start), title: e.content_name, desc: eventDoc.desc, date: new Date().toISOString(), tasks: eventDoc.tasks, links: eventDoc.links, color: this.completedTasks.indexOf(eventDoc.id) >= 0
                                ? { primary: '#5e4b8b', secondary: '#5e4b8b' }
                                : { primary: '#CF4747', secondary: '#CF4747' } }));
                        this.loadedEvents.push(e.event);
                    }, 100);
                }
            }
        }));
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
            const userKey = `${__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].USER}/${this.auth.user.uid}`;
            const _user = yield this.data.getDocAlt(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].USER, this.auth.user.uid);
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
SmartCalendarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-smart-calendar',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/smart-calendar/smart-calendar.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Smart Calendar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  class="bg-eee">\n\n  <ion-card *ngFor="let e of events">\n\n    <ion-card-header>{{e.title}}</ion-card-header>\n\n    <ion-card-content>\n      <p>{{e.desc}}</p>\n    </ion-card-content>\n\n    <ion-list>\n\n      <ion-item *ngFor="let task of e.tasks">\n        <ion-label>{{task.label}}</ion-label>\n        <ion-checkbox (click)="toggleCompleted(task.id)" [checked]="completedTasks.includes(task.id)"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Terminé de estudiar éste tema</ion-label>\n        <ion-checkbox (click)="toggleCompleted(e.id)" [checked]="completedTasks.includes(e.id)"></ion-checkbox>\n      </ion-item>\n\n      <ion-item-divider></ion-item-divider>\n\n      <ion-item *ngFor="let link of e.links">\n        <button (click)="openLink(link.url)" ion-button>{{link.label}}</button>\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/smart-calendar/smart-calendar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"],
        __WEBPACK_IMPORTED_MODULE_0__providers_data_data__["a" /* DataProvider */]])
], SmartCalendarPage);

//# sourceMappingURL=smart-calendar.js.map

/***/ })

});
//# sourceMappingURL=15.js.map