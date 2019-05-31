<<<<<<< HEAD
webpackJsonp([33],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspecialidadesPageModule", function() { return EspecialidadesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__especialidades__ = __webpack_require__(795);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EspecialidadesPageModule = /** @class */ (function () {
    function EspecialidadesPageModule() {
    }
    EspecialidadesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__especialidades__["a" /* EspecialidadesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__especialidades__["a" /* EspecialidadesPage */]),
            ],
        })
    ], EspecialidadesPageModule);
    return EspecialidadesPageModule;
}());

//# sourceMappingURL=especialidades.module.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EspecialidadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EspecialidadesPage = /** @class */ (function () {
    function EspecialidadesPage(navCtrl, navParams, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.isPrograma = this.navParams.get('isPrograma');
    }
    EspecialidadesPage.prototype.ionViewDidLoad = function () {
        /* this.back.getAllMaterias().subscribe(data => this.materias = data.filter(m => m.name.includes('Temprano')), err => this.toast.create({message: 'No se pudieron cargar las materias...', duration: 2000}).present()) */
        this.materias$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].CONTENT)
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (materias) { return materias.filter(function (m) { return m.name.includes('Temprano'); }); }));
    };
    EspecialidadesPage.prototype.openMateria = function (id) {
        this.navCtrl.push(this.isPrograma ? 'ProgramaMateriaPage' : 'MateriaPage', { id: id });
    };
    EspecialidadesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-especialidades',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\especialidades\especialidades.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Especialidades</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <ng-template #loader>\n\n    <div class="flex-col">\n\n      <img src="assets/imgs/rings.svg">\n\n    </div>\n\n  </ng-template>\n\n\n\n  <div class="home-grid" *ngIf="materias$ | async as materias">\n\n    <div class="home-tile" *ngFor="let m of materias">\n\n      <ion-card (click)="openMateria(m.id)">\n\n        <img [src]="m.cover">\n\n        <!--<ion-card-content>\n\n          <ion-card-title>{{m.name}}</ion-card-title>\n\n          <p>{{m.desc}}</p>\n\n        </ion-card-content>-->\n\n      </ion-card>\n\n    </div>\n\n  </div>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\especialidades\especialidades.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"]])
    ], EspecialidadesPage);
    return EspecialidadesPage;
}());

//# sourceMappingURL=especialidades.js.map

/***/ })

});
//# sourceMappingURL=33.js.map
=======
webpackJsonp([33],{580:function(l,n,u){"use strict";function e(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,3,"div",[["class","login-loader"]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["\n  "])),(l()(),d["ɵeld"](2,0,null,null,0,"img",[["src","assets/imgs/weon.png"]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["\n"]))],null,null)}function t(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,29,"div",[["class","h100 flex-col login-col"],["padding",""]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["\n    "])),(l()(),d["ɵeld"](2,0,null,null,15,"div",[["class","login-inputs flex-col w100"],["padding",""]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["\n      "])),(l()(),d["ɵeld"](4,0,null,null,5,"input",[["class","mb-1 w100 login-input"],["placeholder","Email"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,t=l.component;if("input"===n){e=!1!==d["ɵnov"](l,5)._handleInput(u.target.value)&&e}if("blur"===n){e=!1!==d["ɵnov"](l,5).onTouched()&&e}if("compositionstart"===n){e=!1!==d["ɵnov"](l,5)._compositionStart()&&e}if("compositionend"===n){e=!1!==d["ɵnov"](l,5)._compositionEnd(u.target.value)&&e}if("ngModelChange"===n){e=!1!==(t.email=u)&&e}return e},null,null)),d["ɵdid"](5,16384,null,0,k.b,[d.Renderer2,d.ElementRef,[2,k.a]],null,null),d["ɵprd"](1024,null,k.e,function(l){return[l]},[k.b]),d["ɵdid"](7,671744,null,0,k.h,[[8,null],[8,null],[8,null],[2,k.e]],{model:[0,"model"]},{update:"ngModelChange"}),d["ɵprd"](2048,null,k.f,null,[k.h]),d["ɵdid"](9,16384,null,0,k.g,[k.f],null,null),(l()(),d["ɵted"](-1,null,["\n      "])),(l()(),d["ɵeld"](11,0,null,null,5,"input",[["class","w100 login-input"],["placeholder","Contraseña"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,t=l.component;if("input"===n){e=!1!==d["ɵnov"](l,12)._handleInput(u.target.value)&&e}if("blur"===n){e=!1!==d["ɵnov"](l,12).onTouched()&&e}if("compositionstart"===n){e=!1!==d["ɵnov"](l,12)._compositionStart()&&e}if("compositionend"===n){e=!1!==d["ɵnov"](l,12)._compositionEnd(u.target.value)&&e}if("ngModelChange"===n){e=!1!==(t.password=u)&&e}return e},null,null)),d["ɵdid"](12,16384,null,0,k.b,[d.Renderer2,d.ElementRef,[2,k.a]],null,null),d["ɵprd"](1024,null,k.e,function(l){return[l]},[k.b]),d["ɵdid"](14,671744,null,0,k.h,[[8,null],[8,null],[8,null],[2,k.e]],{model:[0,"model"]},{update:"ngModelChange"}),d["ɵprd"](2048,null,k.f,null,[k.h]),d["ɵdid"](16,16384,null,0,k.g,[k.f],null,null),(l()(),d["ɵted"](-1,null,["\n    "])),(l()(),d["ɵted"](-1,null,["\n    "])),(l()(),d["ɵeld"](19,0,null,null,9,"div",[["class","flex-col"]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["\n      "])),(l()(),d["ɵeld"](21,0,null,null,2,"button",[["color","secondary"],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;if("click"===n){e=!1!==t.loginEmailFirebase(t.email,t.password)&&e}return e},w.b,w.a)),d["ɵdid"](22,1097728,null,0,y.a,[[8,""],I.a,d.ElementRef,d.Renderer],{color:[0,"color"]},null),(l()(),d["ɵted"](-1,0,["Iniciar Sesión"])),(l()(),d["ɵted"](-1,null,["\n      "])),(l()(),d["ɵeld"](25,0,null,null,2,"button",[["clear",""],["color","secondary"],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!=(l.component.admin=!1)&&e}return e},w.b,w.a)),d["ɵdid"](26,1097728,null,0,y.a,[[8,""],I.a,d.ElementRef,d.Renderer],{color:[0,"color"],clear:[1,"clear"]},null),(l()(),d["ɵted"](-1,0,["Regresar"])),(l()(),d["ɵted"](-1,null,["\n    "])),(l()(),d["ɵted"](-1,null,["\n  "]))],function(l,n){var u=n.component;l(n,7,0,u.email);l(n,14,0,u.password);l(n,22,0,"secondary");l(n,26,0,"secondary","")},function(l,n){l(n,4,0,d["ɵnov"](n,9).ngClassUntouched,d["ɵnov"](n,9).ngClassTouched,d["ɵnov"](n,9).ngClassPristine,d["ɵnov"](n,9).ngClassDirty,d["ɵnov"](n,9).ngClassValid,d["ɵnov"](n,9).ngClassInvalid,d["ɵnov"](n,9).ngClassPending);l(n,11,0,d["ɵnov"](n,16).ngClassUntouched,d["ɵnov"](n,16).ngClassTouched,d["ɵnov"](n,16).ngClassPristine,d["ɵnov"](n,16).ngClassDirty,d["ɵnov"](n,16).ngClassValid,d["ɵnov"](n,16).ngClassInvalid,d["ɵnov"](n,16).ngClassPending)})}function o(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,53,"div",[["class","h100 flex-col login-col"],["padding",""]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["\n    "])),(l()(),d["ɵeld"](2,0,null,null,6,"div",[["class","flex-col"],["style","color:white; text-align:center"]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["\n      "])),(l()(),d["ɵeld"](4,0,null,null,3,"h1",[["style","font-size:2rem"]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["¡Hola!"])),(l()(),d["ɵeld"](6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["Qué gusto vernos otra vez"])),(l()(),d["ɵted"](-1,null,["\n    "])),(l()(),d["ɵted"](-1,null,["\n    "])),(l()(),d["ɵeld"](10,0,null,null,12,"div",[["class","flex-col"],["style","color:white; text-align:center;font-size:2rem"]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["\n      "])),(l()(),d["ɵeld"](12,0,null,null,4,"h1",[],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["Ingresar a Mi"])),(l()(),d["ɵeld"](14,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["ENARM 2019"])),(l()(),d["ɵeld"](16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["\n      "])),(l()(),d["ɵeld"](18,0,null,null,0,"img",[["src","assets/imgs/texto.png"],["style","width:90%"]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["\n      "])),(l()(),d["ɵeld"](20,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["con:"])),(l()(),d["ɵted"](-1,null,["\n    "])),(l()(),d["ɵted"](-1,null,["\n       "])),(l()(),d["ɵeld"](24,0,null,null,22,"div",[["class","login-buttons flex-col"]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["\n        "])),(l()(),d["ɵeld"](26,0,null,null,19,"div",[["class","flex-col social-buttons"]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["\n          "])),(l()(),d["ɵeld"](28,0,null,null,7,"button",[["class","btn-facebook"]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.loginFacebookFirebase()&&e}return e},null,null)),(l()(),d["ɵted"](-1,null,["\n            "])),(l()(),d["ɵeld"](30,0,null,null,1,"ion-icon",[["name","logo-facebook"],["role","img"]],[[2,"hide",null]],null,null,null,null)),d["ɵdid"](31,147456,null,0,x.a,[I.a,d.ElementRef,d.Renderer],{name:[0,"name"]},null),(l()(),d["ɵted"](-1,null,["\n            "])),(l()(),d["ɵeld"](33,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["Iniciar sesión con Facebook"])),(l()(),d["ɵted"](-1,null,["\n          "])),(l()(),d["ɵted"](-1,null,["\n          "])),(l()(),d["ɵeld"](37,0,null,null,7,"button",[["class","btn-google"]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.loginGoogleFirebase()&&e}return e},null,null)),(l()(),d["ɵted"](-1,null,["\n            "])),(l()(),d["ɵeld"](39,0,null,null,1,"ion-icon",[["name","logo-google"],["role","img"]],[[2,"hide",null]],null,null,null,null)),d["ɵdid"](40,147456,null,0,x.a,[I.a,d.ElementRef,d.Renderer],{name:[0,"name"]},null),(l()(),d["ɵted"](-1,null,["\n            "])),(l()(),d["ɵeld"](42,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["Iniciar sesión con Google"])),(l()(),d["ɵted"](-1,null,["\n          "])),(l()(),d["ɵted"](-1,null,["\n        "])),(l()(),d["ɵted"](-1,null,["\n\n      "])),(l()(),d["ɵted"](-1,null,["\n\n      "])),(l()(),d["ɵeld"](48,0,null,null,3,"div",[["class","flex-row-no-wrap w100"]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["\n        "])),(l()(),d["ɵeld"](50,0,null,null,0,"img",[["src","assets/imgs/weon.png"],["style","margin-left:auto;width:64px"]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!=(l.component.admin=!0)&&e}return e},null,null)),(l()(),d["ɵted"](-1,null,["\n      "])),(l()(),d["ɵted"](-1,null,["\n      \n      "])),(l()(),d["ɵted"](-1,null,["\n\n  "]))],function(l,n){l(n,31,0,"logo-facebook");l(n,40,0,"logo-google")},function(l,n){l(n,30,0,d["ɵnov"](n,31)._hidden);l(n,39,0,d["ɵnov"](n,40)._hidden)})}function i(l){return d["ɵvid"](0,[(l()(),d["ɵand"](16777216,null,null,1,null,e)),d["ɵdid"](1,16384,null,0,F.k,[d.ViewContainerRef,d.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),d["ɵted"](-1,null,["\n\n"])),(l()(),d["ɵeld"](3,0,null,null,8,"ion-content",[["class","login-bg"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,E.b,E.a)),d["ɵdid"](4,4374528,null,0,_.a,[I.a,P.a,M.a,d.ElementRef,d.Renderer,S.a,T.a,d.NgZone,[2,A.a],[2,V.a]],null,null),(l()(),d["ɵted"](-1,1,["\n\n  "])),(l()(),d["ɵand"](16777216,null,1,1,null,t)),d["ɵdid"](7,16384,null,0,F.k,[d.ViewContainerRef,d.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),d["ɵted"](-1,1,["\n\n  "])),(l()(),d["ɵand"](16777216,null,1,1,null,o)),d["ɵdid"](10,16384,null,0,F.k,[d.ViewContainerRef,d.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),d["ɵted"](-1,1,["\n"])),(l()(),d["ɵted"](-1,null,["\n"]))],function(l,n){var u=n.component;l(n,1,0,!u.user);l(n,7,0,u.admin);l(n,10,0,!u.admin)},function(l,n){l(n,3,0,d["ɵnov"](n,4).statusbarPadding,d["ɵnov"](n,4)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var d=u(0),a=(u(1),u(28),u(462),u(73)),s=u(198),r=function(){function l(l,n,u,e,t,o){var i=this;this.navCtrl=l,this.navParams=n,this.back=u,this.afAuth=e,this.auth=t,this.platform=o,this.email="",this.password="",this.admin=!1,this.isBrowser=!this.platform.is("cordova"),this.auth.user$.subscribe(function(l){i.user=!0,l&&i.navCtrl.setRoot("HomePage")})}return l.prototype.ionViewDidLoad=function(){var l=this,n=localStorage.getItem("uid");n&&this.back.saveFcmToken(n,localStorage.getItem("fcm_token")).then(function(n){l.navCtrl.setRoot("HomePage")}).catch(function(n){JSON.parse(localStorage.getItem("zamnademy-cache-list"))&&l.navCtrl.setRoot("SimuladoresPage")})},l.prototype.loginGoogleFirebase=function(){this.auth.loginGoogle(this.isBrowser)},l.prototype.loginFacebookFirebase=function(){this.auth.loginFacebook(this.isBrowser)},l.prototype.loginEmailFirebase=function(l,n){this.afAuth.auth.signInWithEmailAndPassword(l,n)},l}(),c=function(){return function(){}}(),g=u(447),f=u(448),p=u(449),m=u(450),v=u(451),h=u(452),b=u(453),C=u(454),R=u(455),k=u(22),w=u(64),y=u(32),I=u(3),x=u(63),F=u(16),E=u(581),_=u(40),P=u(6),M=u(14),S=u(13),T=u(61),A=u(7),V=u(31),N=u(15),z=u(139),D=d["ɵcrt"]({encapsulation:2,styles:[],data:{}}),G=d["ɵccf"]("page-login",r,function(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,1,"page-login",[],null,null,null,i,D)),d["ɵdid"](1,49152,null,0,r,[V.a,N.a,a.a,z.AngularFireAuth,s.a,P.a],null,null)],null,null)},{},{},[]),L=u(197),j=u(62);u.d(n,"LoginPageModuleNgFactory",function(){return B});var B=d["ɵcmf"](c,[],function(l){return d["ɵmod"]([d["ɵmpd"](512,d.ComponentFactoryResolver,d["ɵCodegenComponentFactoryResolver"],[[8,[g.a,f.a,p.a,m.a,v.a,h.a,b.a,C.a,R.a,G]],[3,d.ComponentFactoryResolver],d.NgModuleRef]),d["ɵmpd"](4608,F.m,F.l,[d.LOCALE_ID,[2,F.w]]),d["ɵmpd"](4608,k.k,k.k,[]),d["ɵmpd"](4608,k.c,k.c,[]),d["ɵmpd"](512,F.c,F.c,[]),d["ɵmpd"](512,k.j,k.j,[]),d["ɵmpd"](512,k.d,k.d,[]),d["ɵmpd"](512,k.i,k.i,[]),d["ɵmpd"](512,L.a,L.a,[]),d["ɵmpd"](512,L.b,L.b,[]),d["ɵmpd"](512,c,c,[]),d["ɵmpd"](256,j.a,r,[])])})},581:function(l,n,u){"use strict";function e(l){return t["ɵvid"](2,[t["ɵqud"](402653184,1,{_fixedContent:0}),t["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),t["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t["ɵncd"](null,1),t["ɵncd"](null,2)],null,null)}u.d(n,"a",function(){return o}),n.b=e;var t=u(0),o=(u(3),u(6),u(14),u(61),u(7),u(31),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
