webpackJsonp([43],{

/***/ 1106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistPageModule", function() { return ChecklistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checklist__ = __webpack_require__(1182);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checklist__["a" /* ChecklistPage */]),
            ],
        })
    ], ChecklistPageModule);
    return ChecklistPageModule;
}());

//# sourceMappingURL=checklist.module.js.map

/***/ }),

/***/ 1182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_back_back__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_models__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(588);
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ChecklistPage = /** @class */ (function () {
    function ChecklistPage(navCtrl, navParams, toast, back, load, afs, data, auth) {
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
        this.auth.user$.subscribe(function (user) {
            if (user && user.completedTasks && !_this.completed)
                _this.completed = user.completedTasks;
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
    ChecklistPage.prototype.toggleCompleted = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var userKey, _user, completedTasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(id);
                        userKey = __WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].USER + "/" + this.auth.user.uid;
                        return [4 /*yield*/, this.data.getDocAlt(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].USER, this.auth.user.uid)];
                    case 1:
                        _user = _a.sent();
                        completedTasks = _user.completedTasks || [];
                        if (!(completedTasks.indexOf(id) < 0)) return [3 /*break*/, 3];
                        completedTasks.push(id);
                        return [4 /*yield*/, this.afs.doc(userKey).update({ completedTasks: completedTasks })
                            /* this.checkChanged.next({ id, added: true }); */
                        ];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        if (completedTasks.length > 0)
                            completedTasks.splice(completedTasks.indexOf(id), 1);
                        return [4 /*yield*/, this.afs.doc(userKey).update({ completedTasks: completedTasks })
                            /* this.checkChanged.next({ id, added: false }); */
                        ];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ChecklistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-checklist',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/checklist/checklist.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Mi checklist diario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-list>\n    <div *ngFor="let c of checklist" class="checklist-item">\n      <ion-item text-wrap>\n        <ion-label>{{c.text}}</ion-label>\n        <!-- <ion-checkbox [(ngModel)]="c.users[uid]" [checked]="c.users[uid]" (ionChange)="onChangeTodo(c.users[uid], c.users, c.id)"></ion-checkbox> -->\n        <ion-checkbox (click)="toggleCompleted(c.id)" [checked]="completed && completed.includes(c.id)"></ion-checkbox>\n      </ion-item>\n    </div>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/checklist/checklist.html"*/,
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
    return ChecklistPage;
}());

//# sourceMappingURL=checklist.js.map

/***/ })

});
//# sourceMappingURL=43.js.map