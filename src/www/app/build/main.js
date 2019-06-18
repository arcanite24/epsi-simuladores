webpackJsonp([50],{

/***/ 1090:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
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
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 1091:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_device__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_back_back__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_fcm_fcm__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_rxjs_operators__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, push, device, back, menuCtrl, statusBar, splashScreen, fcm, toast) {
        var _this = this;
        this.platform = platform;
        this.push = push;
        this.device = device;
        this.back = back;
        this.menuCtrl = menuCtrl;
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            if (!_this.platform.is('cordova'))
                return;
            fcm.getToken();
            fcm.listenToNotifications().pipe(Object(__WEBPACK_IMPORTED_MODULE_8__node_modules_rxjs_operators__["tap"])(function (msg) {
                toast.create({ message: msg.body, duration: 2000 }).present();
            })).subscribe();
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.logout = function () {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('uid');
        this.nav.setRoot('LoginPage');
    };
    MyApp.prototype.goto = function (page) {
        this.nav.push(page);
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('contenido'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/app/app.html"*/'<!--<ion-menu [content]="contenido">\n  <ion-content class="sidenav-container">\n    <ul>\n      <li (click)="goto(\'EspecialidadesPage\')"><img src="assets/imgs/Especialidades.svg">Especialidades</li>\n      <li (click)="goto(\'EspecialidadesPage\')"><img src="assets/imgs/Infografias.png">Infografías</li>\n      <li (click)="goto(\'EspecialidadesPage\')"><img src="assets/imgs/media.svg">Material Extra</li>\n      <li (click)="goto(\'EspecialidadesPage\')"><img src="assets/imgs/ase.svg">Asesorías</li>\n      <li (click)="goto(\'EspecialidadesPage\')"><img src="assets/imgs/Foro.png">Foro</li>\n      <li (click)="goto(\'EspecialidadesPage\')"><img src="assets/imgs/presentaciones.svg">Presentaciones</li>\n      <li (click)="goto(\'EspecialidadesPage\')"><img src="assets/imgs/simulador.svg">Simulador</li>\n      <li (click)="goto(\'EspecialidadesPage\')"><img src="assets/imgs/simulacro.png">Simulacro</li>\n      <li (click)="goto(\'EspecialidadesPage\')"><ion-icon name="person"></ion-icon>Perfil</li>\n      <li (click)="logout()"><ion-icon name="exit"></ion-icon>Cerrar Sesión</li>\n    </ul>\n  </ion-content>\n</ion-menu>-->\n\n<ion-nav #contenido [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_fcm_fcm__["a" /* FcmProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["v" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1094:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* unused harmony export JwtInterceptor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_back_back__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(1095);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(25);
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
                'x-token': this.auth.getToken() || ''
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["v" /* ToastController */]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());

//# sourceMappingURL=app.auth.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ContentTypes */
/* unused harmony export HomeLists */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Collections; });
/* unused harmony export PaymentStatus */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Roles; });
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ExamTypes; });
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
    Collections["NOTIFICATION_RESPONSE"] = "notification-response";
    Collections["NOTIFICATION_COMMENT"] = "notification-comment";
    Collections["COUPON"] = "coupon";
    Collections["MERCADOPAGO_IPN"] = "mercadopago-ipn";
    Collections["PROGRAMA"] = "programa";
    Collections["STAT_COUNTER"] = "stat-counter";
    Collections["LIST"] = "list";
    Collections["QUESTION_STAT"] = "question-stat";
    Collections["CONTENT_ERROR"] = "content-error";
    Collections["EXAM_RANKING"] = "exam-ranking";
    Collections["LANDING_FIELD"] = "landing-field";
    Collections["TAG_POOL"] = "tag-pool";
    Collections["AD_TEXT"] = "ad-text";
    Collections["MOOD_RATE"] = "mood-rate";
    Collections["TUTORIAL"] = "tutorial";
    Collections["DAILY"] = "daily-noti";
    Collections["DAILY_REGISTER"] = "daily-register";
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
    Roles["Temprano"] = "isTemprano";
    Roles["Premium2019"] = "isPremium2019";
    Roles["Zamna360_2019"] = "is3602019";
    Roles["Esencial360"] = "isEsencial360";
    Roles["Premium360"] = "isPremium360";
    Roles["Presencial"] = "isPresencial";
    Roles["Content"] = "isContent";
    Roles["Checklist"] = "isChecklist";
    Roles["Calendar"] = "isCalendar";
    Roles["SmartCalendar"] = "isSmartCalendar";
    Roles["TopUsers"] = "isTopUsers";
    Roles["Galleries"] = "isGalleries";
    Roles["Simuladores"] = "isSimuladores";
    Roles["Forum"] = "isForum";
    Roles["Streaming"] = "isStreaming";
    Roles["Media"] = "isMedia";
    Roles["Slides"] = "isSlides";
    Roles["Simulacros"] = "isSimulacros";
    Roles["Feed"] = "isFeed";
    Roles["Programa"] = "isPrograma";
    Roles["Pool"] = "isPool";
    Roles["TagPool"] = "isTagPool";
    Roles["ZonaEnarm"] = "isZonaEnarm";
})(Roles || (Roles = {}));
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

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

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(129);
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


var BackProvider = /** @class */ (function () {
    function BackProvider(http) {
        this.http = http;
        this.API = 'http://167.99.12.186:1337/api/v1';
        //public API: string = 'http://localhost:1337/api/v1'
        this.uid = localStorage.getItem('uid');
    }
    Object.defineProperty(BackProvider.prototype, "_uid", {
        get: function () { return localStorage.getItem('uid'); },
        enumerable: true,
        configurable: true
    });
    // auth
    BackProvider.prototype.facebookApp = function (token, email) {
        return this.http.post(this.API + "/user/facebookApp", { token: token, email: email });
    };
    BackProvider.prototype.googleApp = function (profile) {
        return this.http.post(this.API + "/user/googleApp", { profile: profile });
    };
    BackProvider.prototype.login = function (email, password) {
        return this.http.post(this.API + "/user/login", { email: email, password: password });
    };
    BackProvider.prototype.purgeGoogle = function () {
        return this.http.get(this.API + "/user/purgeGoogleAccounts");
    };
    BackProvider.prototype.isRole = function (role) {
        var user = JSON.parse(localStorage.getItem('user'));
        if (!user)
            return false;
        return user.roles.indexOf(role) >= 0;
    };
    Object.defineProperty(BackProvider.prototype, "isAdmin", {
        get: function () { return this.isRole('ROLE_ADMIN'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackProvider.prototype, "isEnarm", {
        get: function () { return this.isRole('ROLE_ENARM'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackProvider.prototype, "isPocket", {
        get: function () { return this.isRole('ROLE_POCKET'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackProvider.prototype, "isPremium", {
        get: function () { return this.isRole('ROLE_PREMIUM'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackProvider.prototype, "isTemprano", {
        get: function () { return this.isRole('ROLE_TEMPRANO'); },
        enumerable: true,
        configurable: true
    });
    BackProvider.prototype.getToken = function () {
        return localStorage.getItem('token') || null;
    };
    // asesorias
    BackProvider.prototype.getAllAsesorias = function () {
        return this.http.get(this.API + "/asesoria/getAsesoriasHome");
    };
    BackProvider.prototype.getAsesoriaDetail = function (id) {
        return this.http.get(this.API + "/asesoria/" + id);
    };
    BackProvider.prototype.addAsesoria = function (data) {
        return this.http.post(this.API + "/asesoria", data);
    };
    // materias
    BackProvider.prototype.getAllMaterias = function () {
        return this.http.get(this.API + "/materia");
    };
    BackProvider.prototype.getMateriaDetail = function (id) {
        return this.http.get(this.API + "/materia/" + id);
    };
    BackProvider.prototype.getTemario = function (id) {
        return this.http.get(this.API + "/materia/getTemario/" + id);
    };
    // tema
    BackProvider.prototype.getTemaDetail = function (id) {
        return this.http.get(this.API + "/tema/" + id);
    };
    // subtema
    BackProvider.prototype.getSubtemaDetail = function (id) {
        return this.http.get(this.API + "/subtema/" + id);
    };
    // clase (generalizacion de tema y subtema)
    BackProvider.prototype.getClase = function (id, type) {
        return this.http.get(this.API + "/" + type + "/" + id);
    };
    BackProvider.prototype.updateClase = function (id, type, data) {
        return this.http.put(this.API + "/" + type + "/" + id, data);
    };
    // comentarios
    BackProvider.prototype.getComentarios = function (id, type) {
        return this.http.get(this.API + "/comentario?" + type + "=" + id);
    };
    BackProvider.prototype.addComentario = function (type, id, user, text) {
        // back.post('comentario/addComentario/'+this.id, {text, type: this.type, uid: localStorage.getItem('uid')})
        return this.http.post(this.API + "/Comentario/addComentario/" + id, { text: text, type: type, uid: user });
    };
    // notas
    BackProvider.prototype.getNotas = function (id, type) {
        return this.http.get(this.API + "/nota?" + type + "=" + id + "&user=" + this.uid);
    };
    BackProvider.prototype.getMyNotas = function (id) {
        return this.http.get(this.API + "/nota/getMyNotas/" + id);
    };
    BackProvider.prototype.getNotasRest = function (id, rest, uid) {
        return this.http.get(this.API + "/nota?" + rest + "=" + id + "&user=" + uid);
    };
    BackProvider.prototype.addNota = function (title, text, type, id) {
        var _a;
        return this.http.post(this.API + "/nota", (_a = { title: title, text: text }, _a[type] = id, _a.user = this.uid, _a));
    };
    // examen test
    BackProvider.prototype.getExamen = function (id, type) {
        return this.http.get(this.API + "/" + type + "/" + id);
    };
    // resultados
    BackProvider.prototype.getResultados = function (type, user, id) {
        return this.http.get(this.API + "/Resultado" + type + "?user=" + user + "&" + type + "=" + id);
    };
    BackProvider.prototype.deleteResultados = function (type, user, id) {
        return this.http.delete(this.API + "/Resultado" + type + "/" + id + "?user=" + user);
    };
    BackProvider.prototype.addResultado = function (type, user, id, resultados) {
        var _a;
        return this.http.post(this.API + "/Resultado" + type, (_a = {}, _a[type] = id, _a.user = user, _a.resultados = resultados, _a));
    };
    // slides infografias
    BackProvider.prototype.getSlides = function () {
        return this.http.get(this.API + "/slide/getSlideList");
    };
    BackProvider.prototype.getSlideDetail = function (id) {
        return this.http.get(this.API + "/slide/" + id);
    };
    BackProvider.prototype.getSlideChild = function (id) {
        return this.http.get(this.API + "/SlideChild/" + id);
    };
    BackProvider.prototype.getGroupedSlides = function () {
        return this.http.get(this.API + "/Slide/getGroupedSlides");
    };
    // media material extra descargables
    BackProvider.prototype.getAllMedias = function () {
        return this.http.get(this.API + "/media");
    };
    // galerias infografias
    BackProvider.prototype.getAllGalerias = function () {
        return this.http.get(this.API + "/galeria/getGaleriasHome");
    };
    BackProvider.prototype.getGaleriaDetaul = function (id) {
        return this.http.get(this.API + "/galeria/" + id);
    };
    BackProvider.prototype.getGroupedMedia = function () {
        return this.http.get(this.API + "/media/getGroupedMedia");
    };
    // simuladores
    BackProvider.prototype.getSimuladoresHome = function () {
        return this.http.get(this.API + "/simulador/getSimuladoresHome");
    };
    BackProvider.prototype.getSimuladorDetail = function (id) {
        return this.http.get(this.API + "/simulador/" + id);
    };
    // foro
    BackProvider.prototype.getAllForos = function () {
        return this.http.get(this.API + "/CatHilo");
    };
    BackProvider.prototype.getForoDetail = function (id) {
        return this.http.get(this.API + "/CatHilo/" + id);
    };
    BackProvider.prototype.getHiloDetail = function (id) {
        return this.http.get(this.API + "/Hilo/" + id);
    };
    BackProvider.prototype.getRespuestasHilo = function (id) {
        return this.http.get(this.API + "/RespuestaHilo?hilo=" + id);
    };
    BackProvider.prototype.addRespuesta = function (id, text, user) {
        return this.http.post(this.API + "/RespuestaHilo", { hilo: id, text: text, user: user });
    };
    // checklist todo
    BackProvider.prototype.getAllTodos = function () {
        return this.http.get(this.API + "/Todo");
    };
    BackProvider.prototype.updateTodo = function (id, data) {
        return this.http.put(this.API + "/Todo/" + id, data);
    };
    // calendar
    BackProvider.prototype.getEventosDay = function () {
        return this.http.get(this.API + "/Evento/getEventosDay");
    };
    // notis notifications
    BackProvider.prototype.getNotisUser = function (id) {
        return this.http.get(this.API + "/Notifcation?user=" + id);
    };
    BackProvider.prototype.updateNoti = function (id, data) {
        return this.http.put(this.API + "/Notifcation/" + id, data);
    };
    // device
    BackProvider.prototype.registerDevice = function (registrationId, model, platform, uuid, version, manufacturer) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API + "/Device", { registrationId: registrationId, model: model, platform: platform, uuid: uuid, version: version, manufacturer: manufacturer }).subscribe(function (data) {
            }, function (err) {
            });
        });
    };
    BackProvider.prototype.saveFcmToken = function (uid, token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.API + "/user/saveFcmToken/" + uid, { token: token }).subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
        });
    };
    // feed
    BackProvider.prototype.loadFeed = function () {
        return this.http.get(this.API + "/Post");
    };
    BackProvider.prototype.getPostComments = function (post) {
        return this.http.get(this.API + "/PostComment/getPostComments/" + post);
    };
    BackProvider.prototype.addPostLike = function (id, user) {
        return this.http.post(this.API + "/Post/addLike", { id: id, user: user });
    };
    BackProvider.prototype.removePostLike = function (id, user) {
        return this.http.post(this.API + "/Post/removeLike", { id: id, user: user });
    };
    BackProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], BackProvider);
    return BackProvider;
}());

//# sourceMappingURL=back.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_models__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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




var DataProvider = /** @class */ (function () {
    function DataProvider(afs) {
        this.afs = afs;
    }
    DataProvider.prototype.getDoc = function (collection, id) {
        return this.afs.collection(collection).doc(id)
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["take"])(1))
            .toPromise();
    };
    DataProvider.prototype.getDocAlt = function (collection, id) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var doc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afs.firestore.doc(collection + "/" + id).get()];
                    case 1:
                        doc = _a.sent();
                        resolve(__assign({ id: doc.id }, doc.data()));
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DataProvider.prototype.getCollection = function (collection) {
        return this.afs.collection(collection)
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["take"])(1))
            .toPromise();
    };
    DataProvider.prototype.getCollectionAlt = function (collection) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afs.firestore.collection(collection).get()];
                    case 1:
                        data = _a.sent();
                        resolve(data.docs.map(function (doc) { return (__assign({ id: doc.id }, doc.data())); }));
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DataProvider.prototype.getCollectionQuery = function (collection, query) {
        return this.afs.collection(collection, function (ref) { return query(ref); })
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["take"])(1))
            .toPromise();
    };
    DataProvider.prototype.updateUserByEmail = function (email, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var users, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCollectionQuery(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].USER, function (ref) { return ref.where('email', '==', email); })];
                    case 1:
                        users = _a.sent();
                        user = users[0];
                        if (!user)
                            return [2 /*return*/, false];
                        return [2 /*return*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].USER).doc(user.uid).update(payload)];
                }
            });
        });
    };
    DataProvider.prototype.getAllAdmins = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCollectionQuery(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].USER, function (ref) { return ref.where(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["c" /* Roles */].Admin, '==', true); })];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users.map(function (u) { return u.uid; })];
                }
            });
        });
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__["AngularFirestore"]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 293:
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
webpackEmptyAsyncContext.id = 293;

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/asesoria-add/asesoria-add.module": [
		1100,
		49
	],
	"../pages/asesoria-detail/asesoria-detail.module": [
		1101,
		48
	],
	"../pages/asesorias/asesorias.module": [
		1102,
		47
	],
	"../pages/avance-examen/avance-examen.module": [
		1103,
		46
	],
	"../pages/bloque-alt/bloque-alt.module": [
		1104,
		45
	],
	"../pages/calendar/calendar.module": [
		1105,
		44
	],
	"../pages/checklist/checklist.module": [
		1106,
		43
	],
	"../pages/clase-detail/clase-detail.module": [
		1107,
		42
	],
	"../pages/como-te-sientes-hoy/como-te-sientes-hoy.module": [
		1108,
		41
	],
	"../pages/downloads/downloads.module": [
		1109,
		40
	],
	"../pages/especialidades/especialidades.module": [
		1110,
		39
	],
	"../pages/exam-feedback/exam-feedback.module": [
		1111,
		6
	],
	"../pages/examen-detail/examen-detail.module": [
		1148,
		5
	],
	"../pages/foro-detail/foro-detail.module": [
		1112,
		38
	],
	"../pages/foros/foros.module": [
		1113,
		37
	],
	"../pages/galeria-detail/galeria-detail.module": [
		1114,
		36
	],
	"../pages/galerias/galerias.module": [
		1115,
		4
	],
	"../pages/hilo-detail/hilo-detail.module": [
		1116,
		8
	],
	"../pages/home/home.module": [
		1117,
		3
	],
	"../pages/login/login.module": [
		1149,
		35
	],
	"../pages/materia-alt/materia-alt.module": [
		1118,
		34
	],
	"../pages/materia/materia.module": [
		1119,
		2
	],
	"../pages/media/media.module": [
		1120,
		1
	],
	"../pages/mi-analitica/mi-analitica.module": [
		1121,
		0
	],
	"../pages/mi-curso/mi-curso.module": [
		1122,
		33
	],
	"../pages/mis-resultados/mis-resultados.module": [
		1123,
		7
	],
	"../pages/notas-add/notas-add.module": [
		1124,
		32
	],
	"../pages/notas-global-detail/notas-global-detail.module": [
		1125,
		31
	],
	"../pages/notas-global/notas-global.module": [
		1126,
		30
	],
	"../pages/notas/notas.module": [
		1127,
		29
	],
	"../pages/notifications/notifications.module": [
		1128,
		28
	],
	"../pages/offline-video/offline-video.module": [
		1129,
		27
	],
	"../pages/post-comments/post-comments.module": [
		1130,
		26
	],
	"../pages/profile/profile.module": [
		1131,
		25
	],
	"../pages/programa-bloque/programa-bloque.module": [
		1132,
		24
	],
	"../pages/programa-materia/programa-materia.module": [
		1133,
		23
	],
	"../pages/ratings/ratings.module": [
		1134,
		22
	],
	"../pages/resultado-detail/resultado-detail.module": [
		1135,
		21
	],
	"../pages/resultados-examen/resultados-examen.module": [
		1136,
		20
	],
	"../pages/simulacros/simulacros.module": [
		1137,
		19
	],
	"../pages/simulador-detail/simulador-detail.module": [
		1138,
		18
	],
	"../pages/simuladores/simuladores.module": [
		1139,
		17
	],
	"../pages/slide-detail/slide-detail.module": [
		1140,
		16
	],
	"../pages/slides/slides.module": [
		1141,
		15
	],
	"../pages/smart-calendar/smart-calendar.module": [
		1142,
		14
	],
	"../pages/stat-view-detail/stat-view-detail.module": [
		1143,
		13
	],
	"../pages/tema-alt/tema-alt.module": [
		1144,
		12
	],
	"../pages/thread-add/thread-add.module": [
		1145,
		11
	],
	"../pages/top-users/top-users.module": [
		1146,
		10
	],
	"../pages/zona-enarm/zona-enarm.module": [
		1147,
		9
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
webpackAsyncContext.id = 335;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
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



var FcmProvider = /** @class */ (function () {
    function FcmProvider(firebaseNative, platform) {
        this.firebaseNative = firebaseNative;
        this.platform = platform;
    }
    // Get permission from the user
    FcmProvider.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 1:
                        token = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 3:
                        token = _a.sent();
                        return [4 /*yield*/, this.firebaseNative.grantPermission()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        //this.toast.create({message: token, duration: 2000}).present()
                        this.saveToken(token);
                        return [2 /*return*/, token];
                }
            });
        });
    };
    // Save the token to backend
    FcmProvider.prototype.saveToken = function (token, cb) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                localStorage.setItem('fcm_token', token);
                //const _token = await this.back.addToken(token)
                if (cb)
                    cb(token);
                return [2 /*return*/, token];
            });
        });
    };
    // Listen to incoming FCM messages
    FcmProvider.prototype.listenToNotifications = function () {
        return this.firebaseNative.onNotificationOpen();
    };
    FcmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* Platform */]])
    ], FcmProvider);
    return FcmProvider;
}());

//# sourceMappingURL=fcm.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__(337);
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
        // Role Shorthands
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Admin]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isEsencial", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Esencial]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isPremium", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Premium]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isTemprano", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Temprano]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isContent", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Content]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isChecklist", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Checklist]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isCalendar", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Calendar]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isTopUsers", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].TopUsers]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isGalleries", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Galleries]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isSimuladores", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Simuladores]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isForum", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Forum]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isStreaming", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Streaming]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isMedia", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Media]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isSlides", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Slides]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isSimulacros", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Simulacros]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isFeed", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Feed]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isPrograma", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Programa]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isPool", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Pool]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isTagPool", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].TagPool]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isZonaEnarm", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].ZonaEnarm]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isSmartCalendar", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].SmartCalendar]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isPresencial", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Presencial]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isEsencial360", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Esencial360]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isPremium360", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Premium360]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isPremium2019", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Premium2019]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isZamna360_2019", {
        get: function () { return this.loggedIn && this.user[__WEBPACK_IMPORTED_MODULE_3__app_app_models__["c" /* Roles */].Zamna360_2019]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "isComprado", {
        get: function () {
            if (!this.loggedIn)
                return false;
            if (this.isPremium2019)
                return true;
            if (this.isPresencial)
                return true;
            if (this.isZamna360_2019)
                return true;
            return false;
        },
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
    AuthProvider.prototype.getDoc = function (collection, id) {
        return this.afs.collection(collection).doc(id)
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["take"])(1))
            .toPromise();
    };
    AuthProvider.prototype.getCollection = function (collection) {
        return this.afs.collection(collection)
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["take"])(1))
            .toPromise();
    };
    AuthProvider.prototype.getCollectionQuery = function (collection, query) {
        return this.afs.collection(collection, function (ref) { return query(ref); })
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["take"])(1))
            .toPromise();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__["AngularFirestore"]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_models__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_data__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_config__ = __webpack_require__(594);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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








var StatsProvider = /** @class */ (function () {
    function StatsProvider(afs, data) {
        this.afs = afs;
        this.data = data;
        this.months = [
            { key: '01', label: 'Enero' },
            { key: '02', label: 'Febrero' },
            { key: '03', label: 'Marzo' },
            { key: '04', label: 'Abril' },
            { key: '05', label: 'Mayo' },
            { key: '06', label: 'Junio' },
            { key: '07', label: 'Julio' },
            { key: '08', label: 'Agosto' },
            { key: '09', label: 'Septiembre' },
            { key: '10', label: 'Octubre' },
            { key: '11', label: 'Noviembre' },
            { key: '12', label: 'Diciembre' },
        ];
    }
    StatsProvider.prototype.modifyCustomCounter = function (key, label, delta) {
        return __awaiter(this, void 0, void 0, function () {
            var counter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data.getDoc(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].STAT_COUNTER, key)];
                    case 1:
                        counter = _a.sent();
                        if (!!counter) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].STAT_COUNTER).doc(key).set({
                                id: key,
                                key: key,
                                label: label,
                                value: 1,
                                lastModified: new Date().toISOString(),
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].STAT_COUNTER).doc(key).update({
                            value: counter.value += delta,
                            lastModified: new Date().toISOString(),
                        })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    // Stat Counter
    StatsProvider.prototype.modifyCounter = function (key, delta, exam) {
        return __awaiter(this, void 0, void 0, function () {
            var counter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].STAT_COUNTER, function (ref) { return ref
                            .where('key', '==', key); })
                            .valueChanges()
                            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["take"])(1), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (counters) { return counters[0]; }))
                            .toPromise()];
                    case 1:
                        counter = _a.sent();
                        if (!counter)
                            counter = { id: key, key: key, label: exam ? exam.name : key, value: 0, lastModified: new Date().toISOString() };
                        if (counter.value != null)
                            counter.value += delta;
                        return [4 /*yield*/, this.afs.doc(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].STAT_COUNTER + "/" + counter.id).set({
                                value: counter.value,
                                lastModified: new Date().toISOString(),
                                exam: exam ? exam.name : null,
                                id: counter.id,
                                label: counter.label,
                                key: counter.key
                            }, { merge: true })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Timeline
    StatsProvider.prototype.computeTimeline = function (tag, uid) {
        return __awaiter(this, void 0, void 0, function () {
            var year, cache, results, grouped, _i, _a, m, key, _b, _c, _d, _e, final;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        year = __WEBPACK_IMPORTED_MODULE_3_moment___default()().year();
                        cache = {
                            timeline: {},
                            total: 0,
                        };
                        return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].EXAM_RESULT, function (ref) { return ref
                                .where('tags', 'array-contains', tag)
                                .where('user', '==', uid); })
                                .valueChanges()
                                .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["take"])(1))
                                .toPromise()];
                    case 1:
                        results = _f.sent();
                        console.log('results timeline:', tag, results);
                        grouped = Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["groupBy"])(results, function (r) { return r.date.substr(0, 7); });
                        console.log('grouped timeline:', tag, grouped);
                        _i = 0, _a = this.months;
                        _f.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 7];
                        m = _a[_i];
                        key = year + "-" + m.key;
                        _b = cache.timeline;
                        _c = m.label;
                        _d = {
                            mes: m
                        };
                        if (!grouped[key]) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.computeUserTagAverageWithData(tag, uid, grouped[key])];
                    case 3:
                        _e = _f.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _e = 0;
                        _f.label = 5;
                    case 5:
                        _b[_c] = (_d.promedio = _e,
                            _d);
                        console.log('month', m, cache.timeline[m.label]);
                        _f.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 2];
                    case 7:
                        console.log('timeline', cache.timeline);
                        cache.total = results.length;
                        final = {
                            total: cache.total,
                            timeline: Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["sortBy"])(cache.timeline, function (m) { return m.mes.key; })
                        };
                        console.log(final);
                        return [2 /*return*/, final];
                }
            });
        });
    };
    StatsProvider.prototype.computeUserAverageList = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var tags, list, _i, tags_1, tag, tempAverage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllTags()];
                    case 1:
                        tags = _a.sent();
                        list = [];
                        _i = 0, tags_1 = tags;
                        _a.label = 2;
                    case 2:
                        if (!(_i < tags_1.length)) return [3 /*break*/, 5];
                        tag = tags_1[_i];
                        return [4 /*yield*/, this.computeUserTagAverage(tag, user.uid)];
                    case 3:
                        tempAverage = _a.sent();
                        list.push({ tag: tag, promedio: tempAverage });
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, list.filter(function (tag) { return !isNaN(tag.promedio) && tag.promedio <= 7; })];
                }
            });
        });
    };
    StatsProvider.prototype.computeUserTagAverage = function (tag, uid, start, end) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, total;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!tag)
                            return [2 /*return*/, 0];
                        if (!uid)
                            return [2 /*return*/, 0];
                        if (!!this.results) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].EXAM_RESULT, function (ref) { return ref
                                .where('user', '==', uid); })
                                .valueChanges()
                                .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (results) { return results.map(function (r) { return (__assign({}, r, { tags: r.tags ? r.tags.map(function (tag) {
                                    return tag ? typeof tag === 'object' ? tag.text : tag : null;
                                }).filter(function (t) { return t; }) : [] })); }); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (results) {
                                if (start && end) {
                                    return results.filter(function (r) { return __WEBPACK_IMPORTED_MODULE_3_moment___default()(r.date).isSameOrAfter(start) && __WEBPACK_IMPORTED_MODULE_3_moment___default()(r.date).isSameOrBefore(end); });
                                }
                                else {
                                    return results;
                                }
                            }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["take"])(1)).toPromise()
                            /* console.log(this.results.map(r => r.tags)) */
                        ];
                    case 1:
                        _a.results = _b.sent();
                        _b.label = 2;
                    case 2:
                        total = Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["flattenDeep"])(this.results.filter(function (r) { return r.tags && r.tags.includes(tag); }).map(function (r) {
                            return Object.values(r.questions).map(function (q) { return ({ tags: _this.formatTags(q.raw.tags), correcta: q.correcta }); });
                        })).filter(function (q) { return q.tags.includes(tag); });
                        /* console.log(tag, total.length, total.filter((q: any) => q.correcta).length, total) */
                        return [2 /*return*/, total.filter(function (q) { return q.correcta; }).length / total.length];
                }
            });
        });
    };
    StatsProvider.prototype.computeUserTagAverageWithData = function (tag, uid, results) {
        return __awaiter(this, void 0, void 0, function () {
            var total;
            var _this = this;
            return __generator(this, function (_a) {
                if (!tag)
                    return [2 /*return*/, 0];
                if (!uid)
                    return [2 /*return*/, 0];
                results = results.map(function (r) { return (__assign({}, r, { tags: r.tags ? r.tags.map(function (tag) {
                        return tag ? typeof tag === 'object' ? tag.text : tag : null;
                    }).filter(function (t) { return t; }) : [] })); });
                total = Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["flattenDeep"])(results.filter(function (r) { return r.tags && r.tags.includes(tag); }).map(function (r) {
                    return Object.values(r.questions).map(function (q) { return ({ tags: _this.formatTags(q.raw.tags), correcta: q.correcta }); });
                })).filter(function (q) { return q.tags.includes(tag); });
                /* console.log(tag, total.length, total.filter((q: any) => q.correcta).length, total) */
                return [2 /*return*/, total.filter(function (q) { return q.correcta; }).length / total.length];
            });
        });
    };
    StatsProvider.prototype.formatTags = function (tags) {
        return tags ? tags.map(function (tag) { return tag ? (typeof tag === 'object' ? tag.text : tag) : null; }).filter(function (t) { return t; }) : [];
    };
    StatsProvider.prototype.computeUserTagListAverage = function (tags, uid) {
        return __awaiter(this, void 0, void 0, function () {
            var promedios, _i, tags_2, tag, average;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promedios = [];
                        _i = 0, tags_2 = tags;
                        _a.label = 1;
                    case 1:
                        if (!(_i < tags_2.length)) return [3 /*break*/, 4];
                        tag = tags_2[_i];
                        return [4 /*yield*/, this.computeUserTagAverage(tag, uid)];
                    case 2:
                        average = _a.sent();
                        promedios.push(average);
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, promedios.reduce(function (a, b) { return a + b; }, 0) / promedios.length];
                }
            });
        });
    };
    StatsProvider.prototype.computeUserAverage = function (uid, month) {
        var _this = this;
        if (month === void 0) { month = false; }
        return this.afs.collection(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].EXAM_RESULT, function (ref) { return ref.where('user', '==', uid); })
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["take"])(1), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (results) {
            var total = results.length;
            if (month) {
                return results
                    .filter(function (r) { return __WEBPACK_IMPORTED_MODULE_3_moment___default()(r.date).isSameOrAfter(__WEBPACK_IMPORTED_MODULE_3_moment___default()().startOf('month')) && __WEBPACK_IMPORTED_MODULE_3_moment___default()(r.date).isSameOrBefore(__WEBPACK_IMPORTED_MODULE_3_moment___default()().endOf('month')); })
                    .map(function (r) { return r.promedio; })
                    .reduce(function (a, b) { return a + b; }, 0) / total * __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* averageMultiplier */];
            }
            else {
                return results.map(function (r) { return r.promedio; }).reduce(function (a, b) { return a + b; }, 0) / total * __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* averageMultiplier */];
            }
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (average) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.afs.doc(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].USER + "/" + uid).update({ promedio: average });
                return [2 /*return*/];
            });
        }); })).toPromise();
    };
    // Helpers
    StatsProvider.prototype.calculateAverage = function (results) {
        return results.map(function (r) { return r.promedio; }).reduce(function (a, b) { return a + b; }, 0) * __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* averageMultiplier */];
    };
    StatsProvider.prototype.getAllTags = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].TAG)
                        .valueChanges()
                        .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (tags) { return tags.map(function (t) { return t.value; }); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["take"])(1)).toPromise()];
            });
        });
    };
    StatsProvider.prototype.getAllTagPresenciales = function () {
        return __awaiter(this, void 0, void 0, function () {
            var exams, _tags;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data.getCollectionQuery(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].EXAM, function (ref) { return ref.where('isPresencial', '==', true); })];
                    case 1:
                        exams = _a.sent();
                        _tags = exams.map(function (e) { return e.questions; });
                        return [2 /*return*/, Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["uniq"])(Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["flattenDeep"])(Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["flattenDeep"])(_tags).map(function (q) { return q.tags; })))];
                }
            });
        });
    };
    // Optimization Helpers
    StatsProvider.prototype.addToList = function (list_id, item) {
        return __awaiter(this, void 0, void 0, function () {
            var key, list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key = __WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].LIST + "/" + list_id;
                        return [4 /*yield*/, this.afs.doc(key)
                                .valueChanges()
                                .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["take"])(1)).toPromise()];
                    case 1:
                        list = _a.sent();
                        list.list.push(item);
                        return [4 /*yield*/, this.afs.doc(key).update(list)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsProvider.prototype.updateListEntry = function (list_id, item, old_list_id, old_item) {
        return __awaiter(this, void 0, void 0, function () {
            var key, list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.removeFromList(old_list_id, old_item);
                        key = __WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].LIST + "/" + list_id;
                        return [4 /*yield*/, this.afs.doc(key)
                                .valueChanges()
                                .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["take"])(1)).toPromise()];
                    case 1:
                        list = _a.sent();
                        list.list = list.list.map(function (i) {
                            if (item.id == i.id)
                                return item;
                            return i;
                        });
                        return [4 /*yield*/, this.afs.doc(key).update(list)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsProvider.prototype.removeFromList = function (list_id, item) {
        return __awaiter(this, void 0, void 0, function () {
            var key, list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key = __WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].LIST + "/" + list_id;
                        return [4 /*yield*/, this.afs.doc(key)
                                .valueChanges()
                                .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["take"])(1)).toPromise()];
                    case 1:
                        list = _a.sent();
                        list.list = list.list.filter(function (i) { return i.id != item.id; });
                        return [4 /*yield*/, this.afs.doc(key).update(list)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsProvider.prototype.updateQuestionStat = function (questions, answer) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _i, questions_1, question, key, stat, _stat;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, questions_1 = questions;
                        _b.label = 1;
                    case 1:
                        if (!(_i < questions_1.length)) return [3 /*break*/, 7];
                        question = questions_1[_i];
                        key = __WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].QUESTION_STAT + "/" + question.id;
                        return [4 /*yield*/, this.afs.doc(key)
                                .valueChanges()
                                .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["take"])(1)).toPromise()];
                    case 2:
                        stat = _b.sent();
                        if (!!stat) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.afs.doc(key).set({
                                id: key,
                                question: question,
                                stat: (_a = {}, _a[answer.text] = 1, _a),
                                total: 1
                            })];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        _stat = __assign({}, stat.stat);
                        if (!_stat[answer.text]) {
                            _stat[answer.text] = 1;
                        }
                        else {
                            _stat[answer.text] += 1;
                        }
                        return [4 /*yield*/, this.afs.doc(key).update({
                                stat: _stat,
                                total: stat.total + 1
                            })];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/, true];
                }
            });
        });
    };
    StatsProvider.prototype.registerRanking = function (exam, user, promedio) {
        if (promedio === void 0) { promedio = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                id = this.afs.createId();
                this.afs.collection(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].EXAM_RANKING).doc(id).set({
                    id: id,
                    exam: {
                        id: exam.id,
                        name: exam.name,
                    },
                    user: {
                        displayName: user.displayName,
                        uid: user.uid,
                    },
                    promedio: promedio,
                    date: new Date().toISOString()
                });
                return [2 /*return*/, id];
            });
        });
    };
    StatsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_5__data_data__["a" /* DataProvider */]])
    ], StatsProvider);
    return StatsProvider;
}());

//# sourceMappingURL=stats.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ExamActionTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SetQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SetIndex; });
/* unused harmony export SetFeedback */
/* unused harmony export SetTimer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SetAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SetResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinishExam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResetExam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ResetTimer; });
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["h"] = examReducer;
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var ExamActionTypes;
(function (ExamActionTypes) {
    ExamActionTypes["SetQuestion"] = "[Exam] SetQuestion";
    ExamActionTypes["SetIndex"] = "[Exam] SetIndex";
    ExamActionTypes["SetAnswer"] = "[Exam] SetAnswer";
    ExamActionTypes["SetResults"] = "[Exam] SetResults";
    ExamActionTypes["FinishExam"] = "[Exam] FinishExam";
    ExamActionTypes["ResetExam"] = "[Exam] ResetExam";
    ExamActionTypes["SetFeedback"] = "[Exam] SetFeedback";
    ExamActionTypes["SetTimer"] = "[Exam] SetTimer";
    ExamActionTypes["ResetTimer"] = "[Exam] ResetTimer";
})(ExamActionTypes || (ExamActionTypes = {}));
var SetQuestion = /** @class */ (function () {
    function SetQuestion(payload) {
        this.payload = payload;
        this.type = ExamActionTypes.SetQuestion;
    }
    return SetQuestion;
}());

var SetIndex = /** @class */ (function () {
    function SetIndex(payload) {
        this.payload = payload;
        this.type = ExamActionTypes.SetIndex;
    }
    return SetIndex;
}());

var SetFeedback = /** @class */ (function () {
    function SetFeedback(payload) {
        this.payload = payload;
        this.type = ExamActionTypes.SetFeedback;
    }
    return SetFeedback;
}());

var SetTimer = /** @class */ (function () {
    function SetTimer(payload) {
        this.payload = payload;
        this.type = ExamActionTypes.SetTimer;
    }
    return SetTimer;
}());

var SetAnswer = /** @class */ (function () {
    function SetAnswer(payload) {
        this.payload = payload;
        this.type = ExamActionTypes.SetAnswer;
    }
    return SetAnswer;
}());

var SetResults = /** @class */ (function () {
    function SetResults(payload) {
        this.payload = payload;
        this.type = ExamActionTypes.SetResults;
    }
    return SetResults;
}());

var FinishExam = /** @class */ (function () {
    function FinishExam(payload) {
        this.payload = payload;
        this.type = ExamActionTypes.FinishExam;
    }
    return FinishExam;
}());

var ResetExam = /** @class */ (function () {
    function ResetExam(payload) {
        this.payload = payload;
        this.type = ExamActionTypes.ResetExam;
    }
    return ResetExam;
}());

var ResetTimer = /** @class */ (function () {
    function ResetTimer() {
        this.type = ExamActionTypes.ResetTimer;
    }
    return ResetTimer;
}());

var initialState = {
    question: null,
    index: 0,
    selectedAnswer: null,
    results: null,
    finished: false,
    feedback: null,
    timer: 0,
};
function examReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ExamActionTypes.SetIndex:
            return __assign({}, state, { index: action.payload });
        case ExamActionTypes.SetFeedback:
            return __assign({}, state, { feedback: action.payload });
        case ExamActionTypes.SetTimer:
            return __assign({}, state, { timer: action.payload });
        case ExamActionTypes.SetQuestion:
            return __assign({}, state, { question: action.payload });
        case ExamActionTypes.SetAnswer:
            if (action.payload) {
                localStorage.setItem(action.payload.parent, JSON.stringify(action.payload));
            }
            return __assign({}, state, { selectedAnswer: action.payload });
        case ExamActionTypes.SetResults:
            return __assign({}, state, { results: action.payload });
        case ExamActionTypes.FinishExam:
            return __assign({}, state, { finished: true });
        case ExamActionTypes.ResetExam:
            return initialState;
        case ExamActionTypes.ResetTimer:
            return __assign({}, state, { timer: null });
        default:
            return state;
    }
}
//# sourceMappingURL=exam.reducer.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export functionsEndpoint */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return contentHierarchy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return contentRatings; });
/* unused harmony export generalAverageTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return averageMultiplier; });
/* unused harmony export statRefreshTimeout */
/* unused harmony export performancePlotTags */
/*
  Epsi Simuladores
    Main Config File

  Here you need to customize almost every parameter in this file before compiling and deploying

*/
// Core
var functionsEndpoint = 'https://us-central1-epsi-simuladores.cloudfunctions.net';
// Content
var contentHierarchy = [
    'materia',
    'bloque',
    'tema',
    'subtema'
];
var contentRatings = [
    { key: 'content', label: 'Contenido', max: 5 },
    { key: 'design', label: 'Diseño', max: 5 },
    { key: 'understandable', label: 'Agradable/Entendible', max: 5 },
];
// Statistics
// General Average content type calculation. If false it will take all ExamResults associated with the user
var generalAverageTypes = false;
// Average Multiplier, normally the average is calculated in a model like x out of 1
var averageMultiplier = 100;
// Milliseconds to wait after each refresh
var statRefreshTimeout = 10000;
// Stat Performance Tags to use for the plot
var performancePlotTags = [
    'Vue',
    'Angular',
    'React'
];
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(727);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_push__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_moment__ = __webpack_require__(1088);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(1089);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__config__ = __webpack_require__(1090);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(1091);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_back_back__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_facebook__ = __webpack_require__(1092);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_plus__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic2_rating__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ionic_img_viewer__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_auth__ = __webpack_require__(1094);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_browser__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_device__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_fcm_fcm__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__node_modules_ionic_native_firebase__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_auth_auth__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_stats_stats__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_data_data__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_file_transfer__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_file__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ngrx_store__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__reducers_exam_reducer__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__swimlane_ngx_charts__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_platform_browser_animations__ = __webpack_require__(1098);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










__WEBPACK_IMPORTED_MODULE_9_moment___default.a.locale('es');

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/asesoria-add/asesoria-add.module#AsesoriaAddPageModule', name: 'AsesoriaAddPage', segment: 'asesoria-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/asesoria-detail/asesoria-detail.module#AsesoriaDetailPageModule', name: 'AsesoriaDetailPage', segment: 'asesoria/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/asesorias/asesorias.module#AsesoriasPageModule', name: 'AsesoriasPage', segment: 'asesorias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/avance-examen/avance-examen.module#AvanceExamenPageModule', name: 'AvanceExamenPage', segment: 'avance-examen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bloque-alt/bloque-alt.module#BloqueAltPageModule', name: 'BloqueAltPage', segment: 'bloque-alt/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checklist/checklist.module#ChecklistPageModule', name: 'ChecklistPage', segment: 'checklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clase-detail/clase-detail.module#ClaseDetailPageModule', name: 'ClaseDetailPage', segment: 'clase/:id/:type', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/como-te-sientes-hoy/como-te-sientes-hoy.module#ComoTeSientesHoyPageModule', name: 'ComoTeSientesHoyPage', segment: 'como-te-sientes-hoy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/downloads/downloads.module#DownloadsPageModule', name: 'DownloadsPage', segment: 'downloads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/especialidades/especialidades.module#EspecialidadesPageModule', name: 'EspecialidadesPage', segment: 'especialidades', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exam-feedback/exam-feedback.module#ExamFeedbackPageModule', name: 'ExamFeedbackPage', segment: 'exam-feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/foro-detail/foro-detail.module#ForoDetailPageModule', name: 'ForoDetailPage', segment: 'foro/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/foros/foros.module#ForosPageModule', name: 'ForosPage', segment: 'foros', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/galeria-detail/galeria-detail.module#GaleriaDetailPageModule', name: 'GaleriaDetailPage', segment: 'galeria/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/galerias/galerias.module#GaleriasPageModule', name: 'GaleriasPage', segment: 'galerias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hilo-detail/hilo-detail.module#HiloDetailPageModule', name: 'HiloDetailPage', segment: 'hilo/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/materia-alt/materia-alt.module#MateriaAltPageModule', name: 'MateriaAltPage', segment: 'materia-alt/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/materia/materia.module#MateriaPageModule', name: 'MateriaPage', segment: 'materia/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/media/media.module#MediaPageModule', name: 'MediaPage', segment: 'media', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mi-analitica/mi-analitica.module#MiAnaliticaPageModule', name: 'MiAnaliticaPage', segment: 'mi-analitica', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mi-curso/mi-curso.module#MiCursoPageModule', name: 'MiCursoPage', segment: 'mi-curso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mis-resultados/mis-resultados.module#MisResultadosPageModule', name: 'MisResultadosPage', segment: 'mis-resultados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notas-add/notas-add.module#NotasAddPageModule', name: 'NotasAddPage', segment: 'notas-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notas-global-detail/notas-global-detail.module#NotasGlobalDetailPageModule', name: 'NotasGlobalDetailPage', segment: 'notas/:rest/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notas-global/notas-global.module#NotasGlobalPageModule', name: 'NotasGlobalPage', segment: 'notas-global', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notas/notas.module#NotasPageModule', name: 'NotasPage', segment: 'notas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offline-video/offline-video.module#OfflineVideoPageModule', name: 'OfflineVideoPage', segment: 'offline-video', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-comments/post-comments.module#PostCommentsPageModule', name: 'PostCommentsPage', segment: 'post-comments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/programa-bloque/programa-bloque.module#ProgramaBloquePageModule', name: 'ProgramaBloquePage', segment: 'programa-bloque', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/programa-materia/programa-materia.module#ProgramaMateriaPageModule', name: 'ProgramaMateriaPage', segment: 'programa-materia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ratings/ratings.module#RatingsPageModule', name: 'RatingsPage', segment: 'ratings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resultado-detail/resultado-detail.module#ResultadoDetailPageModule', name: 'ResultadoDetailPage', segment: 'resultado-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resultados-examen/resultados-examen.module#ResultadosExamenPageModule', name: 'ResultadosExamenPage', segment: 'resultado/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/simulacros/simulacros.module#SimulacrosPageModule', name: 'SimulacrosPage', segment: 'simulacros', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/simulador-detail/simulador-detail.module#SimuladorDetailPageModule', name: 'SimuladorDetailPage', segment: 'simulador-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/simuladores/simuladores.module#SimuladoresPageModule', name: 'SimuladoresPage', segment: 'simuladores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide-detail/slide-detail.module#SlideDetailPageModule', name: 'SlideDetailPage', segment: 'presentacion/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slides/slides.module#SlidesPageModule', name: 'SlidesPage', segment: 'slides', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/smart-calendar/smart-calendar.module#SmartCalendarPageModule', name: 'SmartCalendarPage', segment: 'smart-calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stat-view-detail/stat-view-detail.module#StatViewDetailPageModule', name: 'StatViewDetailPage', segment: 'stat-view-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tema-alt/tema-alt.module#TemaAltPageModule', name: 'TemaAltPage', segment: 'tema-alt/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thread-add/thread-add.module#ThreadAddPageModule', name: 'ThreadAddPage', segment: 'thread-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/top-users/top-users.module#TopUsersPageModule', name: 'TopUsersPage', segment: 'top-users', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/zona-enarm/zona-enarm.module#ZonaEnarmPageModule', name: 'ZonaEnarmPage', segment: 'zona-enarm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/examen-detail/examen-detail.module#ExamenDetailPageModule', name: 'ExamenDetailPage', segment: 'examen/:type/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_13__config__["a" /* firebaseConfig */].fire),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__["AngularFirestoreModule"].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_18_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_19_ionic_img_viewer__["b" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_moment__["a" /* MomentModule */],
                __WEBPACK_IMPORTED_MODULE_30__ngrx_store__["b" /* StoreModule */].forRoot({
                    exam: __WEBPACK_IMPORTED_MODULE_31__reducers_exam_reducer__["h" /* examReducer */]
                }),
                __WEBPACK_IMPORTED_MODULE_32__swimlane_ngx_charts__["a" /* NgxChartsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_20__app_auth__["a" /* TokenInterceptor */], multi: true },
                //{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
                __WEBPACK_IMPORTED_MODULE_15__providers_back_back__["a" /* BackProvider */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_23__providers_fcm_fcm__["a" /* FcmProvider */],
                __WEBPACK_IMPORTED_MODULE_24__node_modules_ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_25__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_stats_stats__["a" /* StatsProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_data_data__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_file_transfer__["a" /* FileTransfer */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 352,
	"./af.js": 352,
	"./ar": 353,
	"./ar-dz": 354,
	"./ar-dz.js": 354,
	"./ar-kw": 355,
	"./ar-kw.js": 355,
	"./ar-ly": 356,
	"./ar-ly.js": 356,
	"./ar-ma": 357,
	"./ar-ma.js": 357,
	"./ar-sa": 358,
	"./ar-sa.js": 358,
	"./ar-tn": 359,
	"./ar-tn.js": 359,
	"./ar.js": 353,
	"./az": 360,
	"./az.js": 360,
	"./be": 361,
	"./be.js": 361,
	"./bg": 362,
	"./bg.js": 362,
	"./bm": 363,
	"./bm.js": 363,
	"./bn": 364,
	"./bn.js": 364,
	"./bo": 365,
	"./bo.js": 365,
	"./br": 366,
	"./br.js": 366,
	"./bs": 367,
	"./bs.js": 367,
	"./ca": 368,
	"./ca.js": 368,
	"./cs": 369,
	"./cs.js": 369,
	"./cv": 370,
	"./cv.js": 370,
	"./cy": 371,
	"./cy.js": 371,
	"./da": 372,
	"./da.js": 372,
	"./de": 373,
	"./de-at": 374,
	"./de-at.js": 374,
	"./de-ch": 375,
	"./de-ch.js": 375,
	"./de.js": 373,
	"./dv": 376,
	"./dv.js": 376,
	"./el": 377,
	"./el.js": 377,
	"./en-SG": 378,
	"./en-SG.js": 378,
	"./en-au": 379,
	"./en-au.js": 379,
	"./en-ca": 380,
	"./en-ca.js": 380,
	"./en-gb": 381,
	"./en-gb.js": 381,
	"./en-ie": 382,
	"./en-ie.js": 382,
	"./en-il": 383,
	"./en-il.js": 383,
	"./en-nz": 384,
	"./en-nz.js": 384,
	"./eo": 385,
	"./eo.js": 385,
	"./es": 386,
	"./es-do": 387,
	"./es-do.js": 387,
	"./es-us": 388,
	"./es-us.js": 388,
	"./es.js": 386,
	"./et": 389,
	"./et.js": 389,
	"./eu": 390,
	"./eu.js": 390,
	"./fa": 391,
	"./fa.js": 391,
	"./fi": 392,
	"./fi.js": 392,
	"./fo": 393,
	"./fo.js": 393,
	"./fr": 394,
	"./fr-ca": 395,
	"./fr-ca.js": 395,
	"./fr-ch": 396,
	"./fr-ch.js": 396,
	"./fr.js": 394,
	"./fy": 397,
	"./fy.js": 397,
	"./ga": 398,
	"./ga.js": 398,
	"./gd": 399,
	"./gd.js": 399,
	"./gl": 400,
	"./gl.js": 400,
	"./gom-latn": 401,
	"./gom-latn.js": 401,
	"./gu": 402,
	"./gu.js": 402,
	"./he": 403,
	"./he.js": 403,
	"./hi": 404,
	"./hi.js": 404,
	"./hr": 405,
	"./hr.js": 405,
	"./hu": 406,
	"./hu.js": 406,
	"./hy-am": 407,
	"./hy-am.js": 407,
	"./id": 408,
	"./id.js": 408,
	"./is": 409,
	"./is.js": 409,
	"./it": 410,
	"./it-ch": 411,
	"./it-ch.js": 411,
	"./it.js": 410,
	"./ja": 412,
	"./ja.js": 412,
	"./jv": 413,
	"./jv.js": 413,
	"./ka": 414,
	"./ka.js": 414,
	"./kk": 415,
	"./kk.js": 415,
	"./km": 416,
	"./km.js": 416,
	"./kn": 417,
	"./kn.js": 417,
	"./ko": 418,
	"./ko.js": 418,
	"./ku": 419,
	"./ku.js": 419,
	"./ky": 420,
	"./ky.js": 420,
	"./lb": 421,
	"./lb.js": 421,
	"./lo": 422,
	"./lo.js": 422,
	"./lt": 423,
	"./lt.js": 423,
	"./lv": 424,
	"./lv.js": 424,
	"./me": 425,
	"./me.js": 425,
	"./mi": 426,
	"./mi.js": 426,
	"./mk": 427,
	"./mk.js": 427,
	"./ml": 428,
	"./ml.js": 428,
	"./mn": 429,
	"./mn.js": 429,
	"./mr": 430,
	"./mr.js": 430,
	"./ms": 431,
	"./ms-my": 432,
	"./ms-my.js": 432,
	"./ms.js": 431,
	"./mt": 433,
	"./mt.js": 433,
	"./my": 434,
	"./my.js": 434,
	"./nb": 435,
	"./nb.js": 435,
	"./ne": 436,
	"./ne.js": 436,
	"./nl": 437,
	"./nl-be": 438,
	"./nl-be.js": 438,
	"./nl.js": 437,
	"./nn": 439,
	"./nn.js": 439,
	"./pa-in": 440,
	"./pa-in.js": 440,
	"./pl": 441,
	"./pl.js": 441,
	"./pt": 442,
	"./pt-br": 443,
	"./pt-br.js": 443,
	"./pt.js": 442,
	"./ro": 444,
	"./ro.js": 444,
	"./ru": 445,
	"./ru.js": 445,
	"./sd": 446,
	"./sd.js": 446,
	"./se": 447,
	"./se.js": 447,
	"./si": 448,
	"./si.js": 448,
	"./sk": 449,
	"./sk.js": 449,
	"./sl": 450,
	"./sl.js": 450,
	"./sq": 451,
	"./sq.js": 451,
	"./sr": 452,
	"./sr-cyrl": 453,
	"./sr-cyrl.js": 453,
	"./sr.js": 452,
	"./ss": 454,
	"./ss.js": 454,
	"./sv": 455,
	"./sv.js": 455,
	"./sw": 456,
	"./sw.js": 456,
	"./ta": 457,
	"./ta.js": 457,
	"./te": 458,
	"./te.js": 458,
	"./tet": 459,
	"./tet.js": 459,
	"./tg": 460,
	"./tg.js": 460,
	"./th": 461,
	"./th.js": 461,
	"./tl-ph": 462,
	"./tl-ph.js": 462,
	"./tlh": 463,
	"./tlh.js": 463,
	"./tr": 464,
	"./tr.js": 464,
	"./tzl": 465,
	"./tzl.js": 465,
	"./tzm": 466,
	"./tzm-latn": 467,
	"./tzm-latn.js": 467,
	"./tzm.js": 466,
	"./ug-cn": 468,
	"./ug-cn.js": 468,
	"./uk": 469,
	"./uk.js": 469,
	"./ur": 470,
	"./ur.js": 470,
	"./uz": 471,
	"./uz-latn": 472,
	"./uz-latn.js": 472,
	"./uz.js": 471,
	"./vi": 473,
	"./vi.js": 473,
	"./x-pseudo": 474,
	"./x-pseudo.js": 474,
	"./yo": 475,
	"./yo.js": 475,
	"./zh-cn": 476,
	"./zh-cn.js": 476,
	"./zh-hk": 477,
	"./zh-hk.js": 477,
	"./zh-tw": 478,
	"./zh-tw.js": 478
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
webpackContext.id = 837;

/***/ })

},[602]);
//# sourceMappingURL=main.js.map