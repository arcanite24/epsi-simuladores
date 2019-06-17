webpackJsonp([44],{

/***/ 1104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloqueAltPageModule", function() { return BloqueAltPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bloque_alt__ = __webpack_require__(1178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BloqueAltPageModule = /** @class */ (function () {
    function BloqueAltPageModule() {
    }
    BloqueAltPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bloque_alt__["a" /* BloqueAltPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bloque_alt__["a" /* BloqueAltPage */]),
            ],
        })
    ], BloqueAltPageModule);
    return BloqueAltPageModule;
}());

//# sourceMappingURL=bloque-alt.module.js.map

/***/ }),

/***/ 1178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloqueAltPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(588);
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






var BloqueAltPage = /** @class */ (function () {
    function BloqueAltPage(navCtrl, navParams, data, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.auth = auth;
        this.id = this.navParams.get('id');
        this.contentIds = [];
    }
    BloqueAltPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadContent(this.id);
        this.loadChildren(this.id);
        this.auth.user$.subscribe(function (user) {
            if (user && !_this.completed)
                _this.completed = user.completedTasks;
        });
    };
    Object.defineProperty(BloqueAltPage.prototype, "completedContent", {
        get: function () {
            if (!this.completed) {
                return 0;
            }
            if (!this.contentIds) {
                return 0;
            }
            var counter = 0;
            for (var _i = 0, _a = this.contentIds; _i < _a.length; _i++) {
                var content = _a[_i];
                if (this.completed.includes(content)) {
                    counter++;
                }
            }
            return counter;
        },
        enumerable: true,
        configurable: true
    });
    BloqueAltPage.prototype.loadContent = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.data.getDocAlt(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].CONTENT, id)];
                    case 1:
                        _a.bloque = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BloqueAltPage.prototype.loadChildren = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var children;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data.getCollectionQuery(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].CONTENT, function (ref) { return ref.where('parent_id', '==', id); })];
                    case 1:
                        children = _a.sent();
                        this.children = children.filter(function (c) { return c.liberadoInPrograma; });
                        this.contentIds = Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["sortBy"])(children, 'sortIndex').map(function (t) { return t.event || 'NULL'; });
                        return [2 /*return*/];
                }
            });
        });
    };
    BloqueAltPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bloque-alt',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/bloque-alt/bloque-alt.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{bloque ? bloque.name : \'...\'}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-card *ngIf="bloque">\n\n    <img [src]="bloque.cover" alt="Bloque">\n\n    <ion-card-content>\n      <ion-card-title>{{bloque.name}}</ion-card-title>\n      <small>{{completedContent}}/{{children.length}}</small>\n      <!-- <pre>{{ completed | json }}</pre> -->\n    </ion-card-content>\n\n    <ion-list *ngIf="children">\n      <button ion-item *ngFor="let child of children" (click)="navCtrl.push(\'TemaAltPage\', {id: child.id})">\n        <ion-icon name="checkmark" color="primary" item-start *ngIf="completed.includes(child.event)"></ion-icon>\n        {{child.name}}\n      </button>\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/bloque-alt/bloque-alt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
    ], BloqueAltPage);
    return BloqueAltPage;
}());

//# sourceMappingURL=bloque-alt.js.map

/***/ })

});
//# sourceMappingURL=44.js.map