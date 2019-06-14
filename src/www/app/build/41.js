webpackJsonp([41],{

/***/ 1105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar__ = __webpack_require__(1177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CalendarPageModule = /** @class */ (function () {
    function CalendarPageModule() {
    }
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
    return CalendarPageModule;
}());

//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ 1177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalendarPage = /** @class */ (function () {
    function CalendarPage(navCtrl, navParams, load, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.load = load;
        this.afs = afs;
        this.calendar = [];
        this.uid = localStorage.getItem('uid');
    }
    CalendarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var l = this.load.create({ content: 'Cargando calendario...' });
        l.present();
        this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].EVENT)
            .valueChanges()
            .subscribe(function (events) {
            l.dismiss();
            _this.calendar = events.filter(function (e) { return __WEBPACK_IMPORTED_MODULE_4_moment___default()(e.date).startOf('day').format('DD-MM-YYYY') == __WEBPACK_IMPORTED_MODULE_4_moment___default()().startOf('day').format('DD-MM-YYYY'); });
            console.log(_this.calendar);
        });
        /* this.back.getEventosDay().subscribe(data => {
          const c = data.map(day => {
            day.tareas = day.tareas.map(task => {
              if (localStorage.getItem(`evento-${day.id}-${task.id}-${this.uid}`)) task.completed = true
              return task
            })
            return day
          })
          this.calendar = c
          l.dismiss()
        }, err => {
          this.toast.create({message: 'No se pudo cargar el calendario...', duration: 2000}).present()
          l.dismiss()
        }) */
    };
    CalendarPage.prototype.onChangeTask = function (completed, id, i, ii, evento) {
        if (completed) {
            localStorage.setItem("evento-" + evento + "-" + id + "-" + this.uid, "" + completed);
        }
        else {
            localStorage.removeItem("evento-" + evento + "-" + id + "-" + this.uid);
        }
        this.calendar[ii].tareas[i].completed = completed;
    };
    CalendarPage.prototype.openVideo = function (c) {
        console.log(c);
        this.navCtrl.push('ClaseDetailPage', { id: c.link_video_1, type: c.type_video_1 });
    };
    CalendarPage.prototype.openSlide = function (c) {
        this.navCtrl.push('SlideDetailPage', { id: c.link_slide_1 });
    };
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-calendar',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/calendar/calendar.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Programa paso a paso</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-list *ngFor="let c of calendar; let ii = index" class="mt-3">\n    <ion-list-header class="calendar-header" text-wrap>{{c.title}}</ion-list-header>\n    <div class="calendar-item" *ngFor="let task of c.tasks; let i = index">\n      <ion-item>\n        <ion-label>{{task.label}}</ion-label>\n        <ion-checkbox [(ngModel)]="task.completed" (ionChange)="onChangeTask(task.completed, task.id, i, ii, c.id)"></ion-checkbox>\n      </ion-item>\n    </div>\n    <!-- <ion-item>\n      <button ion-button *ngIf="c.link_video_1" (click)="openVideo(c)">Ver VideoClase</button>\n      <button ion-button *ngIf="c.link_slide_1" (click)="openSlide(c)">Ver Presentación</button>\n    </ion-item> -->\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/calendar/calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ })

});
//# sourceMappingURL=41.js.map