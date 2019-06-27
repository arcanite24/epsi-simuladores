webpackJsonp([28],{

/***/ 1151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications__ = __webpack_require__(1227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */]),
        ],
    })
], NotificationsPageModule);

//# sourceMappingURL=notifications.module.js.map

/***/ }),

/***/ 1227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_back_back__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let NotificationsPage = class NotificationsPage {
    constructor(navCtrl, navParams, back, toast, load, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.toast = toast;
        this.load = load;
        this.viewCtrl = viewCtrl;
        this.notis = [];
        this.uid = localStorage.getItem('uid');
    }
    ionViewDidLoad() {
        this.loadNotis();
    }
    reload(e) { this.loadNotis(() => e.complete()); }
    loadNotis(cb) {
        const l = this.load.create({ content: 'Cargando notificaciones...' });
        l.present();
        this.back.getNotisUser(this.uid).subscribe(data => {
            this.notis = data;
            l.dismiss();
            if (cb)
                cb();
        }, err => {
            l.dismiss();
            this.toast.create({ message: 'No se pudieron cargar las notificaciones', duration: 2000 }).present();
            this.viewCtrl.dismiss();
        });
    }
    setRead(id, i, read) {
        if (read)
            return;
        this.notis[i].read = true;
        this.back.updateNoti(id, { read: this.notis[i].read }).subscribe(data => {
            console.log(data);
        }, err => {
            this.notis[i].read = read;
            this.toast.create({ message: 'No se pudo marcar como leída la notificación...', duration: 2000 }).present();
        });
    }
    getDate(date) {
        return __WEBPACK_IMPORTED_MODULE_3_moment___default()(date).fromNow();
    }
    handleClick(noti) {
        if (noti.hilo)
            this.navCtrl.push('HiloDetailPage', { id: noti.hilo.id });
    }
};
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-notifications',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/notifications/notifications.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Notificaciones</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-refresher (ionRefresh)="reload($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item *ngFor="let n of notis.reverse(); let i = index" [ngClass]="{\'read\': n.read}" (click)="setRead(n.id, i, n.read); handleClick(n)" text-wrap>\n      <h2>{{n.title}} <small>{{getDate(n.createdAt)}}</small> </h2>\n      <p>{{n.desc}}</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/notifications/notifications.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_back_back__["a" /* BackProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* ViewController */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ })

});
//# sourceMappingURL=28.js.map