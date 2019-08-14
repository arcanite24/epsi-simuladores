webpackJsonp([15],{

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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


var BackProvider = /** @class */ (function () {
    function BackProvider(http) {
        this.http = http;
        //public api: string = 'http://localhost:1337/api/v1'
        /* public api: string = 'https://zamnademy.com/api/v1' */
        this.api = 'http://167.99.12.186:1337/api/v1';
        this.admin = '5b69cb5d300d766aae22ac68';
    }
    BackProvider.prototype.isRole = function (role) {
        if (!role)
            return false;
        var user = JSON.parse(localStorage.getItem('user'));
        if (!user)
            return false;
        if (!user.roles)
            return false;
        return user.roles.indexOf(role) >= 0;
    };
    // shorthands
    BackProvider.prototype.isA = function () {
        return this.isRole('ROLE_ADMIN');
    };
    BackProvider.prototype.isU = function () {
        return this.isRole('ROLE_USER');
    };
    Object.defineProperty(BackProvider.prototype, "token", {
        get: function () {
            return localStorage.getItem('token');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackProvider.prototype, "uid", {
        get: function () {
            return localStorage.getItem('uid');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackProvider.prototype, "user", {
        get: function () {
            return JSON.parse(localStorage.getItem('user'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackProvider.prototype, "isAdmin", {
        get: function () {
            return this.isRole('ROLE_ADMIN');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackProvider.prototype, "isViewPagos", {
        get: function () {
            return this.isRole('ROLE_VIEW_PAGOS');
        },
        enumerable: true,
        configurable: true
    });
    // auth
    BackProvider.prototype.login = function (email, password) {
        return this.http.post(this.api + "/user/login", {
            email: email,
            password: password
        });
    };
    BackProvider.prototype.register = function (data) {
        return this.http.post(this.api + "/user/register", data);
    };
    BackProvider.prototype.facebookApp = function (token) {
        return this.http.post(this.api + "/user/facebookApp", {
            token: token
        });
    };
    BackProvider.prototype.googleApp = function (profile) {
        return this.http.post(this.api + "/user/googleApp", {
            profile: profile
        });
    };
    BackProvider.prototype.socialAuthWeb = function (data) {
        return this.http.post(this.api + "/user/socialAuthWeb", data);
    };
    BackProvider.prototype.reloadAuth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserDetail(this.uid).toPromise()];
                    case 1:
                        user = _a.sent();
                        console.log(user);
                        localStorage.setItem('user', JSON.stringify(user));
                        return [2 /*return*/];
                }
            });
        });
    };
    BackProvider.prototype.validate = function (data, fields, toast) {
        if (!data) {
            toast.create({
                message: 'Los datos no pueden ser vacios...',
                duration: 2000
            }).present();
            return false;
        }
        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
            var field = fields_1[_i];
            if (!data[field]) {
                console.log(field);
                toast.create({
                    message: "El campo \"" + field + "\" no puede estar vac\u00EDo...",
                    duration: 2000
                }).present();
                return false;
            }
        }
        return true;
    };
    // ControlPago
    BackProvider.prototype.getUserControlesPago = function (uid) {
        return this.http.get(this.api + "/ControlPago?user=" + uid);
    };
    BackProvider.prototype.getAllControles = function () {
        return this.http.get(this.api + "/ControlPago");
    };
    BackProvider.prototype.getControlDetail = function (id) {
        return this.http.get(this.api + "/ControlPago/" + id);
    };
    BackProvider.prototype.addControlPago = function (control) {
        return this.http.post(this.api + "/ControlPago", control);
    };
    BackProvider.prototype.updateControlPago = function (id, data) {
        return this.http.put(this.api + "/ControlPago/" + id, data);
    };
    BackProvider.prototype.deleteControlPago = function (id) {
        return this.http.delete(this.api + "/ControlPago/" + id);
    };
    BackProvider.prototype.createPagoZamna = function (controlId, amount, cardId, userId, sess, method, payment, plan) {
        return this.http.post(this.api + "/ControlPago/crearPagoZamna", {
            controlId: controlId,
            amount: amount,
            cardId: cardId,
            userId: userId,
            sess: sess,
            method: method,
            payment: payment,
            plan: plan
        });
    };
    BackProvider.prototype.pagarPaynet = function (id, amount, desc, controlId, method) {
        return this.http.post(this.api + "/ControlPago/pagarPaynet", { id: id, amount: amount, desc: desc, controlId: controlId, method: method });
    };
    BackProvider.prototype.restarAmount = function (id, amount, pago) {
        return this.http.put(this.api + "/ControlPago/restarAmount/" + id, { amount: amount, pagoId: pago });
    };
    // User
    BackProvider.prototype.updateUser = function (id, data) {
        return this.http.put(this.api + "/User/" + id, data);
    };
    BackProvider.prototype.getUserDetail = function (id) {
        return this.http.get(this.api + "/User/" + id);
    };
    // Cards
    BackProvider.prototype.getUserTarjetas = function (user) {
        return this.http.get(this.api + "/Tarjeta/getUserTarjetas/" + user);
    };
    BackProvider.prototype.addTarjeta = function (data) {
        return this.http.post(this.api + "/Tarjeta/crearTarjeta", data);
    };
    BackProvider.prototype.uploadImage = function (archivo) {
        var data = new FormData();
        data.append('image', archivo);
        return this.http.post(this.api + "/ControlPago/uploadImage", data);
    };
    // Pago Zamna
    BackProvider.prototype.updatePagoZamna = function (id, data) {
        return this.http.put(this.api + "/PagoZamna/" + id, data);
    };
    // Becas
    BackProvider.prototype.getUserBecas = function (id) {
        return this.http.get(this.api + "/BecaTeam/getUserTeams/" + id);
    };
    BackProvider.prototype.addBeca = function (data) {
        return this.http.post(this.api + "/BecaTeam", data);
    };
    BackProvider.prototype.joinToTeam = function (userId, teamId) {
        return this.http.post(this.api + "/BecaTeam/joinToTeam", { userId: userId, teamId: teamId });
    };
    BackProvider.prototype.joinTeamByCode = function (code, userId) {
        return this.http.post(this.api + "/BecaTeam/joinTeamByCode", { code: code, userId: userId });
    };
    BackProvider.prototype.deleteBeca = function (id) {
        return this.http.delete(this.api + "/BecaTeam/" + id);
    };
    BackProvider.prototype.getAllTeams = function () {
        return this.http.get(this.api + "/BecaTeam");
    };
    BackProvider.prototype.getTeamDetail = function (id) {
        return this.http.get(this.api + "/BecaTeam/" + id);
    };
    BackProvider.prototype.sumarDeuda = function (id, amount) {
        return this.http.put(this.api + "/User/sumarDeuda", { id: id, amount: amount });
    };
    BackProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], BackProvider);
    return BackProvider;
}());

//# sourceMappingURL=back.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return production; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return functionsEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return paypalSandbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return paypalProduction; });
var production = true;
var firebaseConfig = {
    fire: {
        apiKey: "AIzaSyAkRoZR2ihUIsS6Z7Dt8EF5LY5AgKdcS-I",
        authDomain: "epsi-simuladores.firebaseapp.com",
        databaseURL: "https://epsi-simuladores.firebaseio.com",
        projectId: "epsi-simuladores",
        storageBucket: "epsi-simuladores.appspot.com",
        messagingSenderId: "109307489918"
    }
};
var functionsEndpoint = 'https://us-central1-epsi-simuladores.cloudfunctions.net';
var paypalSandbox = 'AXD_aOCopqUyduDmDGWXJ0HbBhquAANCu37LEt3yXn40T3gU0ns-12nDt-zdvB4tIUSYBembxZ84UcSC';
var paypalProduction = 'AWHs7gj9JnaTbF9LIhZOjC7lQ_uH-adbN4zWhVfFzA_zy7EpLz091PjEsGzQSjaEaQuCDHOxe7GMvK5L';
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 225;

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin-control-detail/admin-control-detail.module": [
		710,
		14
	],
	"../pages/admin-control-edit/admin-control-edit.module": [
		711,
		13
	],
	"../pages/admin/admin.module": [
		712,
		3
	],
	"../pages/becas/becas.module": [
		713,
		2
	],
	"../pages/home/home.module": [
		714,
		12
	],
	"../pages/howto/howto.module": [
		715,
		11
	],
	"../pages/login/login.module": [
		716,
		10
	],
	"../pages/pago-add/pago-add.module": [
		717,
		9
	],
	"../pages/pago-detail/pago-detail.module": [
		719,
		1
	],
	"../pages/paypal-checkout/paypal-checkout.module": [
		720,
		8
	],
	"../pages/profile-edit/profile-edit.module": [
		718,
		7
	],
	"../pages/profile/profile.module": [
		721,
		0
	],
	"../pages/tarjeta-add/tarjeta-add.module": [
		724,
		6
	],
	"../pages/team-detail/team-detail.module": [
		722,
		5
	],
	"../pages/teams/teams.module": [
		723,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 268;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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







var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth, afs) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.userSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.afAuth.authState.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["switchMap"])(function (user) { return user ? _this.afs.doc("user/" + user.uid).valueChanges() : Object(__WEBPACK_IMPORTED_MODULE_1_rxjs__["of"])(null); })).subscribe(function (user) {
            _this.userSubject.next(user);
        });
    }
    Object.defineProperty(AuthProvider.prototype, "user", {
        get: function () {
            return this.userSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "loggedIn", {
        get: function () {
            return !!this.userSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "user$", {
        get: function () {
            return this.userSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isAdmin", {
        // Role Shorthands
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["d" /* Roles */].Admin]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isEsencial", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["d" /* Roles */].Esencial]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isPremium", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["d" /* Roles */].Premium]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isViewPagos", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["d" /* Roles */].ViewPagos]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isContent", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["d" /* Roles */].Content]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isTemprano", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["d" /* Roles */].Temprano]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isChecklist", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["d" /* Roles */].Checklist]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isCalendar", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["d" /* Roles */].Calendar]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isTopUsers", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["d" /* Roles */].TopUsers]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isGalleries", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["d" /* Roles */].Galleries]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isSimuladores", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["d" /* Roles */].Simuladores]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isForum", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["d" /* Roles */].Forum]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isStreaming", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["d" /* Roles */].Streaming]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isMedia", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["d" /* Roles */].Media]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isSlides", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["d" /* Roles */].Slides]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isSimulacros", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["d" /* Roles */].Simulacros]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isFeed", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["d" /* Roles */].Feed]; },
        enumerable: true,
        configurable: true
    });
    AuthProvider.prototype.setUser = function (user) {
        console.log(user);
        if (user)
            return this.afs.doc("user/" + user.uid).set(Object.assign({}, user), { merge: true });
    };
    AuthProvider.prototype.getUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.afs.doc(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].USER + "/" + this.user.uid)
                        .valueChanges()
                        .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["take"])(1))
                        .toPromise()];
            });
        });
    };
    AuthProvider.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthProvider.prototype.loginGoogle = function (browser) {
        var _this = this;
        if (browser === void 0) { browser = true; }
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var redirect, u, credentials, u, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        if (!!browser) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.afAuth.auth.signInWithRedirect(new __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"].GoogleAuthProvider())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.afAuth.auth.getRedirectResult()];
                    case 2:
                        redirect = _a.sent();
                        u = redirect.user;
                        this.setUser({
                            email: u.email,
                            displayName: u.displayName,
                            photoURL: u.photoURL,
                            uid: u.uid,
                        });
                        return [2 /*return*/, resolve(u)];
                    case 3: return [4 /*yield*/, this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"].GoogleAuthProvider())];
                    case 4:
                        credentials = _a.sent();
                        u = credentials.user;
                        this.setUser({
                            email: u.email,
                            displayName: u.displayName,
                            photoURL: u.photoURL,
                            uid: u.uid,
                        });
                        return [2 /*return*/, resolve(credentials.user)];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        return [2 /*return*/, reject(error_1)];
                    case 7: return [2 /*return*/];
                }
            });
        }); });
    };
    AuthProvider.prototype.loginFacebook = function (browser) {
        var _this = this;
        if (browser === void 0) { browser = true; }
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var redirect, u, credentials, u, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        if (!!browser) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.afAuth.auth.signInWithRedirect(new __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"].FacebookAuthProvider())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.afAuth.auth.getRedirectResult()];
                    case 2:
                        redirect = _a.sent();
                        u = redirect.user;
                        this.setUser({
                            email: u.email,
                            displayName: u.displayName,
                            photoURL: u.photoURL,
                            uid: u.uid,
                        });
                        return [2 /*return*/, resolve(u)];
                    case 3: return [4 /*yield*/, this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"].FacebookAuthProvider())];
                    case 4:
                        credentials = _a.sent();
                        u = credentials.user;
                        this.setUser({
                            email: u.email,
                            displayName: u.displayName,
                            photoURL: u.photoURL,
                            uid: u.uid,
                        });
                        return [2 /*return*/, resolve(credentials.user)];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_2 = _a.sent();
                        return [2 /*return*/, reject(error_2)];
                    case 7: return [2 /*return*/];
                }
            });
        }); });
    };
    AuthProvider.prototype.findUserByEmail = function (email) {
        return this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].USER, function (ref) { return ref
            .where('email', '==', email); })
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (users) { return users[0]; }));
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ContentTypes */
/* unused harmony export HomeLists */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Collections; });
/* unused harmony export PaymentStatus */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Roles; });
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EsencialModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PremiumModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TempranoModel; });
/* unused harmony export ExamTypes */
// TODO: Find a better way to enumerate globally the content types
// Singletons
var ContentTypes = [
    'materia',
    'bloque',
    'tema',
    'submtema'
];
var HomeLists;
(function (HomeLists) {
    HomeLists["SimuladoresList"] = "simuladores-list";
    HomeLists["SimulacrosList"] = "simulacros-list";
})(HomeLists || (HomeLists = {}));
var Collections;
(function (Collections) {
    // TODO: Add remaining collections
    Collections["USER"] = "user";
    Collections["USER_STAT"] = "user-stat";
    Collections["EXAM"] = "exam";
    Collections["ASESORIA"] = "livestream";
    Collections["SLIDE"] = "slide";
    Collections["SLIDE_CATEGORY"] = "slide-cat";
    Collections["TODO"] = "todo";
    Collections["CONTENT"] = "content";
    Collections["NOTE"] = "note";
    Collections["COMMENT"] = "comment";
    Collections["RATING"] = "rating";
    Collections["SUGGESTION"] = "suggestion";
    Collections["EVENT"] = "event";
    Collections["GALLERY"] = "gallery";
    Collections["GALLERY_CATEGORY"] = "gallery-cat";
    Collections["THREAD_CATEGORY"] = "thread-cat";
    Collections["THREAD"] = "thread";
    Collections["THREAD_RESPONSE"] = "thread-response";
    Collections["LIVESTREAM"] = "livestream";
    Collections["MEDIA"] = "media";
    Collections["MEDIA_CATEGORY"] = "media-cat";
    Collections["QUESTION"] = "question";
    Collections["ANSWER"] = "answer";
    Collections["EXAM_RESULT"] = "exam-result";
    Collections["POST"] = "post";
    Collections["POST_COMMENT"] = "post-comment";
    Collections["TAG"] = "tag";
    Collections["STAT_VIEW"] = "stat-view";
    Collections["PAYMENT_MODEL"] = "payment-model";
    Collections["PAYMENT_REQUEST"] = "payment-request";
    Collections["NOTIFICATION"] = "notification";
    Collections["NOTIFICATION_COMMENT"] = "notification-comment";
    Collections["COUPON"] = "coupon";
    Collections["MERCADOPAGO_IPN"] = "mercadopago-ipn";
    Collections["PROGRAMA"] = "programa";
    Collections["STAT_COUNTER"] = "stat-counter";
    Collections["LIST"] = "list";
    Collections["CONTROL_PAGO"] = "control-pago";
    Collections["ZAMNA_PAGO"] = "zamna-pago";
})(Collections || (Collections = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Approved"] = "approved";
    PaymentStatus["Failed"] = "rejected";
    PaymentStatus["Pending"] = "pending";
})(PaymentStatus || (PaymentStatus = {}));
var Roles;
(function (Roles) {
    Roles["Admin"] = "isAdmin";
    Roles["Esencial"] = "isEsencial";
    Roles["Premium"] = "isPremium";
    Roles["Content"] = "isContent";
    Roles["Checklist"] = "isChecklist";
    Roles["Calendar"] = "isCalendar";
    Roles["TopUsers"] = "isTopUsers";
    Roles["Galleries"] = "isGalleries";
    Roles["Simuladores"] = "isSimuladores";
    Roles["Forum"] = "isForum";
    Roles["Streaming"] = "isStreaming";
    Roles["Media"] = "isMedia";
    Roles["Slides"] = "isSlides";
    Roles["Simulacros"] = "isSimulacros";
    Roles["Feed"] = "isFeed";
    Roles["Temprano"] = "isTemprano";
    Roles["ViewPagos"] = "isViewPagos";
    Roles["Esencial360"] = "isEsencial360";
    Roles["Premium360"] = "isPremium360";
    Roles["Presencial"] = "isPresencial";
    Roles["Programa"] = "isPrograma";
    Roles["Pool"] = "isPool";
    Roles["TagPool"] = "isTagPool";
})(Roles || (Roles = {}));
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var EsencialModel = [
    Roles.Esencial,
    Roles.Checklist,
    Roles.Calendar,
    Roles.TopUsers,
    Roles.Galleries,
    Roles.Feed,
    Roles.Simuladores,
    Roles.Forum,
    Roles.Streaming,
    Roles.Media,
    Roles.Slides,
    Roles.Simulacros,
];
var PremiumModel = [
    Roles.Checklist,
    Roles.Calendar,
    Roles.TopUsers,
    Roles.Galleries,
    Roles.Feed,
    Roles.Simuladores,
    Roles.Forum,
    Roles.Streaming,
    Roles.Media,
    Roles.Slides,
    Roles.Simulacros,
    Roles.Premium,
    Roles.Content,
    Roles.Programa,
    Roles.Pool,
    Roles.TagPool
];
var TempranoModel = [
    Roles.Temprano
];
var ExamTypes;
(function (ExamTypes) {
    ExamTypes["SIMULADOR"] = "simulador";
    ExamTypes["SIMULACRO"] = "simulacro";
    ExamTypes["PRECLASE"] = "preclase";
    ExamTypes["CONTENIDO"] = "contenido";
    ExamTypes["POOL"] = "pool";
    ExamTypes["TAGS"] = "tags";
    ExamTypes["PRUEBA"] = "demo";
})(ExamTypes || (ExamTypes = {}));
//# sourceMappingURL=app.models.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PayProvider = /** @class */ (function () {
    function PayProvider(http) {
        this.http = http;
    }
    PayProvider.prototype.generatePaymentUrl = function (model_id, request_id, title, amount, email, isProd) {
        if (isProd === void 0) { isProd = false; }
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_config__["b" /* functionsEndpoint */] + "/pay/generate_payment", {
            model_id: model_id,
            request_id: request_id,
            title: title,
            amount: amount,
            email: email,
            isProd: isProd
        }).toPromise();
    };
    PayProvider.prototype.generatePaymentUrlZamnaPagos = function (control_id, pago_id, title, amount, email, isProd) {
        if (isProd === void 0) { isProd = false; }
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_config__["b" /* functionsEndpoint */] + "/pay/generate_payment_zamna_pagos", {
            control_id: control_id,
            pago_id: pago_id,
            title: title,
            amount: amount,
            email: email,
            isProd: isProd
        }).toPromise();
    };
    PayProvider.prototype.generatePaypalButton = function (el, amount, cb) {
        paypal.Button.render({
            env: __WEBPACK_IMPORTED_MODULE_2__app_app_config__["e" /* production */] ? 'production' : 'sandbox',
            commit: true,
            style: {
                color: 'gold',
                size: 'small'
            },
            client: {
                sandbox: __WEBPACK_IMPORTED_MODULE_2__app_app_config__["d" /* paypalSandbox */],
                production: __WEBPACK_IMPORTED_MODULE_2__app_app_config__["c" /* paypalProduction */]
            },
            payment: function (_, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [
                            {
                                amount: { total: amount, currency: 'MXN' }
                            }
                        ]
                    }
                });
            },
            onAuthorize: function (data, actions) {
                return actions.payment.execute().then(function (payment) {
                    cb(payment);
                });
            },
        }, el);
    };
    PayProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PayProvider);
    return PayProvider;
}());

//# sourceMappingURL=pay.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(584);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAuthServiceConfigs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_facebook__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_back_back__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular5_social_login__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_auth__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_moment__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire_auth__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_fire_firestore__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_config__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_pay_pay__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_fire_storage__ = __webpack_require__(458);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















function getAuthServiceConfigs() {
    var config = new __WEBPACK_IMPORTED_MODULE_10_angular5_social_login__["AuthServiceConfig"]([{
            id: __WEBPACK_IMPORTED_MODULE_10_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_10_angular5_social_login__["FacebookLoginProvider"]("313911162748778")
        },
        {
            id: __WEBPACK_IMPORTED_MODULE_10_angular5_social_login__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_10_angular5_social_login__["GoogleLoginProvider"]("1090173504117-gacr5s85vp9q1v2mtlgml92ica25s1nl.apps.googleusercontent.com")
        },
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_moment__["a" /* MomentModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_16__app_config__["a" /* firebaseConfig */].fire),
                __WEBPACK_IMPORTED_MODULE_14__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_fire_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_fire_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin-control-detail/admin-control-detail.module#AdminControlDetailPageModule', name: 'AdminControlDetailPage', segment: 'admin-control-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-control-edit/admin-control-edit.module#AdminControlEditPageModule', name: 'AdminControlEditPage', segment: 'admin-control-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/becas/becas.module#BecasPageModule', name: 'BecasPage', segment: 'becas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/howto/howto.module#HowtoPageModule', name: 'HowtoPage', segment: 'howto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pago-add/pago-add.module#PagoAddPageModule', name: 'PagoAddPage', segment: 'pago-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-edit/profile-edit.module#ProfileEditPageModule', name: 'ProfileEditPage', segment: 'profile-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pago-detail/pago-detail.module#PagoDetailPageModule', name: 'PagoDetailPage', segment: 'pago-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paypal-checkout/paypal-checkout.module#PaypalCheckoutPageModule', name: 'PaypalCheckoutPage', segment: 'paypal-checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/team-detail/team-detail.module#TeamDetailPageModule', name: 'TeamDetailPage', segment: 'team-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teams/teams.module#TeamsPageModule', name: 'TeamsPage', segment: 'teams', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tarjeta-add/tarjeta-add.module#TarjetaAddPageModule', name: 'TarjetaAddPage', segment: 'tarjeta-add', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"],
                    useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_10_angular5_social_login__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                },
                { provide: __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_11__app_auth__["a" /* TokenInterceptor */], multi: true },
                __WEBPACK_IMPORTED_MODULE_10_angular5_social_login__["AuthService"],
                __WEBPACK_IMPORTED_MODULE_8__providers_back_back__["a" /* BackProvider */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_pay_pay__["a" /* PayProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 283,
	"./af.js": 283,
	"./ar": 284,
	"./ar-dz": 285,
	"./ar-dz.js": 285,
	"./ar-kw": 286,
	"./ar-kw.js": 286,
	"./ar-ly": 287,
	"./ar-ly.js": 287,
	"./ar-ma": 288,
	"./ar-ma.js": 288,
	"./ar-sa": 289,
	"./ar-sa.js": 289,
	"./ar-tn": 290,
	"./ar-tn.js": 290,
	"./ar.js": 284,
	"./az": 291,
	"./az.js": 291,
	"./be": 292,
	"./be.js": 292,
	"./bg": 293,
	"./bg.js": 293,
	"./bm": 294,
	"./bm.js": 294,
	"./bn": 295,
	"./bn.js": 295,
	"./bo": 296,
	"./bo.js": 296,
	"./br": 297,
	"./br.js": 297,
	"./bs": 298,
	"./bs.js": 298,
	"./ca": 299,
	"./ca.js": 299,
	"./cs": 300,
	"./cs.js": 300,
	"./cv": 301,
	"./cv.js": 301,
	"./cy": 302,
	"./cy.js": 302,
	"./da": 303,
	"./da.js": 303,
	"./de": 304,
	"./de-at": 305,
	"./de-at.js": 305,
	"./de-ch": 306,
	"./de-ch.js": 306,
	"./de.js": 304,
	"./dv": 307,
	"./dv.js": 307,
	"./el": 308,
	"./el.js": 308,
	"./en-SG": 309,
	"./en-SG.js": 309,
	"./en-au": 310,
	"./en-au.js": 310,
	"./en-ca": 311,
	"./en-ca.js": 311,
	"./en-gb": 312,
	"./en-gb.js": 312,
	"./en-ie": 313,
	"./en-ie.js": 313,
	"./en-il": 314,
	"./en-il.js": 314,
	"./en-nz": 315,
	"./en-nz.js": 315,
	"./eo": 316,
	"./eo.js": 316,
	"./es": 317,
	"./es-do": 318,
	"./es-do.js": 318,
	"./es-us": 319,
	"./es-us.js": 319,
	"./es.js": 317,
	"./et": 320,
	"./et.js": 320,
	"./eu": 321,
	"./eu.js": 321,
	"./fa": 322,
	"./fa.js": 322,
	"./fi": 323,
	"./fi.js": 323,
	"./fo": 324,
	"./fo.js": 324,
	"./fr": 325,
	"./fr-ca": 326,
	"./fr-ca.js": 326,
	"./fr-ch": 327,
	"./fr-ch.js": 327,
	"./fr.js": 325,
	"./fy": 328,
	"./fy.js": 328,
	"./ga": 329,
	"./ga.js": 329,
	"./gd": 330,
	"./gd.js": 330,
	"./gl": 331,
	"./gl.js": 331,
	"./gom-latn": 332,
	"./gom-latn.js": 332,
	"./gu": 333,
	"./gu.js": 333,
	"./he": 334,
	"./he.js": 334,
	"./hi": 335,
	"./hi.js": 335,
	"./hr": 336,
	"./hr.js": 336,
	"./hu": 337,
	"./hu.js": 337,
	"./hy-am": 338,
	"./hy-am.js": 338,
	"./id": 339,
	"./id.js": 339,
	"./is": 340,
	"./is.js": 340,
	"./it": 341,
	"./it-ch": 342,
	"./it-ch.js": 342,
	"./it.js": 341,
	"./ja": 343,
	"./ja.js": 343,
	"./jv": 344,
	"./jv.js": 344,
	"./ka": 345,
	"./ka.js": 345,
	"./kk": 346,
	"./kk.js": 346,
	"./km": 347,
	"./km.js": 347,
	"./kn": 348,
	"./kn.js": 348,
	"./ko": 349,
	"./ko.js": 349,
	"./ku": 350,
	"./ku.js": 350,
	"./ky": 351,
	"./ky.js": 351,
	"./lb": 352,
	"./lb.js": 352,
	"./lo": 353,
	"./lo.js": 353,
	"./lt": 354,
	"./lt.js": 354,
	"./lv": 355,
	"./lv.js": 355,
	"./me": 356,
	"./me.js": 356,
	"./mi": 357,
	"./mi.js": 357,
	"./mk": 358,
	"./mk.js": 358,
	"./ml": 359,
	"./ml.js": 359,
	"./mn": 360,
	"./mn.js": 360,
	"./mr": 361,
	"./mr.js": 361,
	"./ms": 362,
	"./ms-my": 363,
	"./ms-my.js": 363,
	"./ms.js": 362,
	"./mt": 364,
	"./mt.js": 364,
	"./my": 365,
	"./my.js": 365,
	"./nb": 366,
	"./nb.js": 366,
	"./ne": 367,
	"./ne.js": 367,
	"./nl": 368,
	"./nl-be": 369,
	"./nl-be.js": 369,
	"./nl.js": 368,
	"./nn": 370,
	"./nn.js": 370,
	"./pa-in": 371,
	"./pa-in.js": 371,
	"./pl": 372,
	"./pl.js": 372,
	"./pt": 373,
	"./pt-br": 374,
	"./pt-br.js": 374,
	"./pt.js": 373,
	"./ro": 375,
	"./ro.js": 375,
	"./ru": 376,
	"./ru.js": 376,
	"./sd": 377,
	"./sd.js": 377,
	"./se": 378,
	"./se.js": 378,
	"./si": 379,
	"./si.js": 379,
	"./sk": 380,
	"./sk.js": 380,
	"./sl": 381,
	"./sl.js": 381,
	"./sq": 382,
	"./sq.js": 382,
	"./sr": 383,
	"./sr-cyrl": 384,
	"./sr-cyrl.js": 384,
	"./sr.js": 383,
	"./ss": 385,
	"./ss.js": 385,
	"./sv": 386,
	"./sv.js": 386,
	"./sw": 387,
	"./sw.js": 387,
	"./ta": 388,
	"./ta.js": 388,
	"./te": 389,
	"./te.js": 389,
	"./tet": 390,
	"./tet.js": 390,
	"./tg": 391,
	"./tg.js": 391,
	"./th": 392,
	"./th.js": 392,
	"./tl-ph": 393,
	"./tl-ph.js": 393,
	"./tlh": 394,
	"./tlh.js": 394,
	"./tr": 395,
	"./tr.js": 395,
	"./tzl": 396,
	"./tzl.js": 396,
	"./tzm": 397,
	"./tzm-latn": 398,
	"./tzm-latn.js": 398,
	"./tzm.js": 397,
	"./ug-cn": 399,
	"./ug-cn.js": 399,
	"./uk": 400,
	"./uk.js": 400,
	"./ur": 401,
	"./ur.js": 401,
	"./uz": 402,
	"./uz-latn": 403,
	"./uz-latn.js": 403,
	"./uz.js": 402,
	"./vi": 404,
	"./vi.js": 404,
	"./x-pseudo": 405,
	"./x-pseudo.js": 405,
	"./yo": 406,
	"./yo.js": 406,
	"./zh-cn": 407,
	"./zh-cn.js": 407,
	"./zh-hk": 408,
	"./zh-hk.js": 408,
	"./zh-tw": 409,
	"./zh-tw.js": 409
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 680;

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(453);
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





__WEBPACK_IMPORTED_MODULE_4_moment___default.a.locale('es');
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/neri/code/zamna-pagos/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/neri/code/zamna-pagos/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* unused harmony export JwtInterceptor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_back_back__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                'x-token': this.auth.token || ''
            }
        });
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(auth, navCtrl, toast) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.toast = toast;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpResponse */]) {
                console.log(request);
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                    console.log(err);
                    localStorage.removeItem('uid');
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                    _this.toast.create({ message: 'Necesitas iniciar sesión para ver éste contenido...', duration: 2000 }).present();
                    _this.navCtrl.setRoot('LoginPage');
                }
            }
        });
    };
    JwtInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());

//# sourceMappingURL=app.auth.js.map

/***/ })

},[463]);
//# sourceMappingURL=main.js.map