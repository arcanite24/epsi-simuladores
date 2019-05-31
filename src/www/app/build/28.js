<<<<<<< HEAD
webpackJsonp([28],{

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(828);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_back_back__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(466);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, back, afAuth, auth, platform, iap) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.afAuth = afAuth;
        this.auth = auth;
        this.platform = platform;
        this.iap = iap;
        this.email = '';
        this.password = '';
        this.admin = false;
        this.isBrowser = !this.platform.is('cordova');
        this.auth.user$.subscribe(function (user) {
            _this.user = true;
            if (user)
                _this.navCtrl.setRoot('HomePage');
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var uid = localStorage.getItem('uid');
        if (uid) {
            this.back.saveFcmToken(uid, localStorage.getItem('fcm_token')).then(function (data) {
                _this.navCtrl.setRoot('HomePage');
            }).catch(function (err) {
                var list = JSON.parse(localStorage.getItem('zamnademy-cache-list'));
                if (list)
                    _this.navCtrl.setRoot('SimuladoresPage');
            });
        }
    };
    LoginPage.prototype.loginGoogleFirebase = function () {
        this.auth.loginGoogle(this.isBrowser);
    };
    LoginPage.prototype.loginFacebookFirebase = function () {
        this.auth.loginFacebook(this.isBrowser);
    };
    LoginPage.prototype.loginEmailFirebase = function (email, password) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\login\login.html"*/'<!--<div class="login-loader">\n\n  <img src="assets/imgs/update-cover.png" (click)="iap.create(\'https://zamnademy.com\', \'_system\').show()">\n\n</div>-->\n\n\n\n<div class="login-loader" *ngIf="!user">\n\n  <img src="assets/imgs/weon.png">\n\n</div>\n\n\n\n<ion-content class="login-bg">\n\n\n\n  <div class="h100 flex-col login-col" padding *ngIf="admin" >\n\n    <div class="login-inputs flex-col w100" padding>\n\n      <input placeholder="Email" type="text" class="mb-1 w100 login-input" [(ngModel)]="email" >\n\n      <input placeholder="Contraseña" type="password" class="w100 login-input" [(ngModel)]="password">\n\n    </div>\n\n    <div class="flex-col">\n\n      <button ion-button color="secondary" (click)="loginEmailFirebase(email, password)">Iniciar Sesión</button>\n\n      <button clear ion-button color="secondary" (click)="admin = false">Regresar</button>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="h100 flex-col login-col" padding *ngIf="!admin" >\n\n    <div class="flex-col" style="color:white; text-align:center">\n\n      <h1 style="font-size:2rem">¡Hola!<br>Qué gusto vernos otra vez</h1>\n\n    </div>\n\n    <div class="flex-col" style="color:white; text-align:center;font-size:2rem">\n\n      <h1>Ingresar a Mi<br>ENARM 2019<br></h1>\n\n      <img src="assets/imgs/texto.png" style="width:90%">\n\n      <h1>con:</h1>\n\n    </div>\n\n       <div class="login-buttons flex-col">\n\n        <div class="flex-col social-buttons">\n\n          <button class="btn-facebook" (click)="loginFacebookFirebase()">\n\n            <ion-icon name="logo-facebook"></ion-icon>\n\n            <span>Iniciar sesión con Facebook</span>\n\n          </button>\n\n          <button class="btn-google" (click)="loginGoogleFirebase()">\n\n            <ion-icon name="logo-google"></ion-icon>\n\n            <span>Iniciar sesión con Google</span>\n\n          </button>\n\n        </div>\n\n\n\n      </div>\n\n\n\n      <div class="flex-row-no-wrap w100">\n\n        <img src="assets/imgs/weon.png" style="margin-left:auto;width:64px" (click)="admin = true">\n\n      </div>\n\n      \n\n      <!-- <pre style="width:100%; background-color: white; color: black;">\n\n        {{user | json}}\n\n      </pre> -->\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=28.js.map
=======
webpackJsonp([28],{565:function(l,n,e){"use strict";function t(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,0,null,null,12,"ion-item",[["class","item item-block"],["text-wrap",""]],null,null,null,h.b,h.a)),a["ɵdid"](1,1097728,null,3,R.a,[C.a,y.a,a.ElementRef,a.Renderer,[2,_.a]],null,null),a["ɵqud"](335544320,1,{contentLabel:0}),a["ɵqud"](603979776,2,{_buttons:1}),a["ɵqud"](603979776,3,{_icons:1}),a["ɵdid"](5,16384,null,0,k.a,[],null,null),(l()(),a["ɵted"](-1,2,["\n      "])),(l()(),a["ɵeld"](7,0,null,2,1,"h2",[],null,null,null,null,null)),(l()(),a["ɵted"](8,null,["",""])),(l()(),a["ɵted"](-1,2,["\n      "])),(l()(),a["ɵeld"](10,0,null,2,1,"p",[],null,null,null,null,null)),(l()(),a["ɵted"](11,null,["",""])),(l()(),a["ɵted"](-1,2,["\n    "]))],null,function(l,n){l(n,8,0,n.context.$implicit.title);l(n,11,0,n.context.$implicit.text)})}function u(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,0,null,null,10,"ion-header",[],null,null,null,null,null)),a["ɵdid"](1,16384,null,0,E.a,[y.a,a.ElementRef,a.Renderer,[2,P.a]],null,null),(l()(),a["ɵted"](-1,null,["\n\n  "])),(l()(),a["ɵeld"](3,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,x.b,x.a)),a["ɵdid"](4,49152,null,0,N.a,[D.a,[2,P.a],[2,F.a],y.a,a.ElementRef,a.Renderer],{color:[0,"color"]},null),(l()(),a["ɵted"](-1,3,["\n    "])),(l()(),a["ɵeld"](6,0,null,3,2,"ion-title",[],null,null,null,q.b,q.a)),a["ɵdid"](7,49152,null,0,w.a,[y.a,a.ElementRef,a.Renderer,[2,j.a],[2,N.a]],null,null),(l()(),a["ɵted"](-1,0,["Notas"])),(l()(),a["ɵted"](-1,3,["\n  "])),(l()(),a["ɵted"](-1,null,["\n\n"])),(l()(),a["ɵted"](-1,null,["\n\n\n"])),(l()(),a["ɵeld"](12,0,null,null,9,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,I.b,I.a)),a["ɵdid"](13,4374528,null,0,L.a,[y.a,O.a,M.a,a.ElementRef,a.Renderer,D.a,V.a,a.NgZone,[2,P.a],[2,F.a]],null,null),(l()(),a["ɵted"](-1,1,["\n\n  "])),(l()(),a["ɵeld"](15,0,null,1,5,"ion-list",[],null,null,null,null,null)),a["ɵdid"](16,16384,null,0,$.a,[y.a,a.ElementRef,a.Renderer,O.a,A.l,M.a],null,null),(l()(),a["ɵted"](-1,null,["\n    "])),(l()(),a["ɵand"](16777216,null,null,1,null,t)),a["ɵdid"](19,802816,null,0,G.j,[a.ViewContainerRef,a.TemplateRef,a.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),a["ɵted"](-1,null,["\n  "])),(l()(),a["ɵted"](-1,1,["\n\n"])),(l()(),a["ɵted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,4,0,"primary");l(n,19,0,e.notas)},function(l,n){l(n,3,0,a["ɵnov"](n,4)._hidden,a["ɵnov"](n,4)._sbPadding);l(n,12,0,a["ɵnov"](n,13).statusbarPadding,a["ɵnov"](n,13)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var a=e(0),d=(e(1),e(28),e(73)),o=function(){function l(l,n,e,t){this.navCtrl=l,this.navParams=n,this.toast=e,this.back=t,this.id=this.navParams.get("id"),this.rest=this.navParams.get("rest"),this.uid=localStorage.getItem("uid"),this.notas=[]}return l.prototype.ionViewDidLoad=function(){var l=this;this.back.getNotasRest(this.id,this.rest,this.uid).subscribe(function(n){l.notas=n,console.log(n)},function(n){l.toast.create({message:"No se pudieron cargar las notas...",duration:2e3}).present(),l.navCtrl.setRoot("HomePage")})},l}(),i=function(){return function(){}}(),r=e(447),s=e(448),c=e(449),f=e(450),m=e(451),p=e(452),b=e(453),v=e(454),g=e(455),h=e(459),R=e(29),C=e(23),y=e(3),_=e(74),k=e(131),E=e(130),P=e(7),x=e(456),N=e(53),D=e(13),F=e(31),q=e(582),w=e(196),j=e(95),I=e(581),L=e(40),O=e(6),M=e(14),V=e(61),$=e(96),A=e(8),G=e(16),H=e(15),J=e(97),K=a["ɵcrt"]({encapsulation:2,styles:[],data:{}}),S=a["ɵccf"]("page-notas-global-detail",o,function(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,0,null,null,1,"page-notas-global-detail",[],null,null,null,u,K)),a["ɵdid"](1,49152,null,0,o,[F.a,H.a,J.a,d.a],null,null)],null,null)},{},{},[]),T=e(22),Z=e(197),z=e(62);e.d(n,"NotasGlobalDetailPageModuleNgFactory",function(){return B});var B=a["ɵcmf"](i,[],function(l){return a["ɵmod"]([a["ɵmpd"](512,a.ComponentFactoryResolver,a["ɵCodegenComponentFactoryResolver"],[[8,[r.a,s.a,c.a,f.a,m.a,p.a,b.a,v.a,g.a,S]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["ɵmpd"](4608,G.m,G.l,[a.LOCALE_ID,[2,G.w]]),a["ɵmpd"](4608,T.k,T.k,[]),a["ɵmpd"](4608,T.c,T.c,[]),a["ɵmpd"](512,G.c,G.c,[]),a["ɵmpd"](512,T.j,T.j,[]),a["ɵmpd"](512,T.d,T.d,[]),a["ɵmpd"](512,T.i,T.i,[]),a["ɵmpd"](512,Z.a,Z.a,[]),a["ɵmpd"](512,Z.b,Z.b,[]),a["ɵmpd"](512,i,i,[]),a["ɵmpd"](256,z.a,o,[])])})},581:function(l,n,e){"use strict";function t(l){return u["ɵvid"](2,[u["ɵqud"](402653184,1,{_fixedContent:0}),u["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),u["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),u["ɵncd"](null,0),(l()(),u["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),u["ɵncd"](null,1),u["ɵncd"](null,2)],null,null)}e.d(n,"a",function(){return a}),n.b=t;var u=e(0),a=(e(3),e(6),e(14),e(61),e(7),e(31),u["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(l,n,e){"use strict";function t(l){return u["ɵvid"](2,[(l()(),u["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),u["ɵdid"](1,278528,null,0,a.i,[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["ɵncd"](null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}e.d(n,"a",function(){return d}),n.b=t;var u=e(0),a=e(16),d=(e(3),u["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
