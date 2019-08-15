webpackJsonp([47],{

/***/ 1167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar__ = __webpack_require__(1247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let CalendarPageModule = class CalendarPageModule {
};
CalendarPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__calendar__["a" /* CalendarPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__calendar__["a" /* CalendarPage */]),
        ],
    })
], CalendarPageModule);

//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ 1247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
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






let CalendarPage = class CalendarPage {
    constructor(navCtrl, navParams, load, afs, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.load = load;
        this.afs = afs;
        this.auth = auth;
        this.calendar = [];
        this.uid = localStorage.getItem('uid');
    }
    ionViewDidLoad() {
        const l = this.load.create({ content: 'Cargando calendario...' });
        l.present();
        let loaded = false;
        this.auth.user$.subscribe(user => {
            if (user && !loaded) {
                this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].EVENT)
                    .valueChanges()
                    .subscribe(events => {
                    l.dismiss();
                    this.calendar = events.filter((e) => __WEBPACK_IMPORTED_MODULE_4_moment___default()(e.date).startOf('day').format('DD-MM-YYYY') == __WEBPACK_IMPORTED_MODULE_4_moment___default()().startOf('day').format('DD-MM-YYYY'));
                    this.calendar = this.calendar.filter(e => {
                        if (e.unlockedBy) {
                            return user[e.unlockedBy];
                        }
                    });
                    console.log(this.calendar);
                });
            }
        });
    }
    onChangeTask(completed, id, i, ii, evento) {
        if (completed) {
            localStorage.setItem(`evento-${evento}-${id}-${this.uid}`, `${completed}`);
        }
        else {
            localStorage.removeItem(`evento-${evento}-${id}-${this.uid}`);
        }
        this.calendar[ii].tareas[i].completed = completed;
    }
    openVideo(c) {
        console.log(c);
        this.navCtrl.push('ClaseDetailPage', { id: c.link_video_1, type: c.type_video_1 });
    }
    openSlide(c) {
        this.navCtrl.push('SlideDetailPage', { id: c.link_slide_1 });
    }
};
CalendarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-calendar',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/calendar/calendar.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Programa paso a paso</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-list *ngFor="let c of calendar; let ii = index" class="mt-3">\n    <ion-list-header class="calendar-header" text-wrap>{{c.title}}</ion-list-header>\n    <div class="calendar-item" *ngFor="let task of c.tasks; let i = index">\n      <ion-item>\n        <ion-label>{{task.label}}</ion-label>\n        <ion-checkbox [(ngModel)]="task.completed" (ionChange)="onChangeTask(task.completed, task.id, i, ii, c.id)"></ion-checkbox>\n      </ion-item>\n    </div>\n    <!-- <ion-item>\n      <button ion-button *ngIf="c.link_video_1" (click)="openVideo(c)">Ver VideoClase</button>\n      <button ion-button *ngIf="c.link_slide_1" (click)="openSlide(c)">Ver Presentación</button>\n    </ion-item> -->\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/calendar/calendar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
], CalendarPage);

//# sourceMappingURL=calendar.js.map

/***/ })

});
//# sourceMappingURL=47.js.map