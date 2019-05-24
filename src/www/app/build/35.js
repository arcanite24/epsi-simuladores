webpackJsonp([35],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistPageModule", function() { return ChecklistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checklist__ = __webpack_require__(793);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChecklistPageModule = /** @class */ (function () {
    function ChecklistPageModule() {
    }
    ChecklistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checklist__["a" /* ChecklistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checklist__["a" /* ChecklistPage */]),
            ],
        })
    ], ChecklistPageModule);
    return ChecklistPageModule;
}());

//# sourceMappingURL=checklist.module.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_back_back__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_models__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChecklistPage = /** @class */ (function () {
    function ChecklistPage(navCtrl, navParams, toast, back, load, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.back = back;
        this.load = load;
        this.afs = afs;
        this.uid = localStorage.getItem('uid');
    }
    ChecklistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var l = this.load.create({ content: 'Cargando checklist...' });
        l.present();
        this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].TODO)
            .valueChanges()
            .subscribe(function (data) {
            _this.checklist = data;
            l.dismiss();
        });
        /* this.back.getAllTodos().subscribe(data => {
          this.checklist = data.map(t => t.users ? t : ({users: {}, ...t}))
          l.dismiss()
        }, err => {
          this.toast.create({message: 'No se pudo cargar el checklist...', duration: 2000}).present()
          l.dismiss()
          this.navCtrl.setRoot('HomePage')
        }) */
    };
    ChecklistPage.prototype.onChangeTodo = function (completed, users, id) {
        var _this = this;
        var _a;
        if (!users)
            users = (_a = {}, _a[this.uid] = completed, _a);
        users[this.uid] = completed;
        this.back.updateTodo(id, { users: users }).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            _this.toast.create({ message: 'No se pudo actualizar el checklist...', duration: 2000 }).present();
        });
    };
    ChecklistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-checklist',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\checklist\checklist.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Mi checklist diario</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n\n\n  <ion-list>\n\n    <div *ngFor="let c of checklist" class="checklist-item">\n\n      <ion-item text-wrap>\n\n        <ion-label>{{c.text}}</ion-label>\n\n        <!-- <ion-checkbox [(ngModel)]="c.users[uid]" [checked]="c.users[uid]" (ionChange)="onChangeTodo(c.users[uid], c.users, c.id)"></ion-checkbox> -->\n\n        <ion-checkbox></ion-checkbox>\n\n      </ion-item>\n\n    </div>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\checklist\checklist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"]])
    ], ChecklistPage);
    return ChecklistPage;
}());

//# sourceMappingURL=checklist.js.map

/***/ })

});
//# sourceMappingURL=35.js.map