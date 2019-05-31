<<<<<<< HEAD
webpackJsonp([7],{

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopUsersPageModule", function() { return TopUsersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__top_users__ = __webpack_require__(827);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TopUsersPageModule = /** @class */ (function () {
    function TopUsersPageModule() {
    }
    TopUsersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__top_users__["a" /* TopUsersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__top_users__["a" /* TopUsersPage */]),
            ],
        })
    ], TopUsersPageModule);
    return TopUsersPageModule;
}());

//# sourceMappingURL=top-users.module.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopUsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_models__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_stats_stats__ = __webpack_require__(473);
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






var TopUsersPage = /** @class */ (function () {
    function TopUsersPage(auth, afs, stats) {
        this.auth = auth;
        this.afs = afs;
        this.stats = stats;
    }
    TopUsersPage.prototype.ngOnInit = function () {
        this.users$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].USER, function (ref) { return ref
            .where('promedio', '>', 0)
            .orderBy('promedio', 'desc')
            .limit(5); })
            .valueChanges();
        this.reloadUsers();
    };
    TopUsersPage.prototype.reloadUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users, _i, users_1, user, promedio;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].USER).valueChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["take"])(1)).toPromise()];
                    case 1:
                        users = _a.sent();
                        _i = 0, users_1 = users;
                        _a.label = 2;
                    case 2:
                        if (!(_i < users_1.length)) return [3 /*break*/, 6];
                        user = users_1[_i];
                        return [4 /*yield*/, this.stats.computeUserAverage(user.uid)];
                    case 3:
                        promedio = _a.sent();
                        return [4 /*yield*/, this.afs.doc(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].USER + "/" + user.uid).update({ promedio: promedio })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 2];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    TopUsersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-top-users',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\top-users\top-users.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Cuadro de Honor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-list *ngIf="users$ | async as users">\n    <ion-item *ngFor="let user of users">\n      <ion-avatar item-start>\n        <img [src]="user.photoURL">\n      </ion-avatar>\n      <h2>{{user.displayName}}</h2>\n      <p>\n        <strong>{{user.promedio | number}}</strong>\n      </p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\top-users\top-users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_5__providers_stats_stats__["a" /* StatsProvider */]])
    ], TopUsersPage);
    return TopUsersPage;
}());

//# sourceMappingURL=top-users.js.map

/***/ })

});
//# sourceMappingURL=7.js.map
=======
webpackJsonp([7],{567:function(l,n,e){"use strict";function u(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,3,"div",[["class","flex-col"]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["\n    "])),(l()(),d["ɵeld"](2,0,null,null,0,"img",[["src","assets/imgs/rings.svg"]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["\n  "]))],null,null)}function t(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,10,"ion-card",[],null,null,null,null,null)),d["ɵdid"](1,16384,null,0,h.a,[y.a,d.ElementRef,d.Renderer],null,null),(l()(),d["ɵted"](-1,null,["\n    "])),(l()(),d["ɵeld"](3,0,null,null,2,"ion-card-header",[],null,null,null,null,null)),d["ɵdid"](4,16384,null,0,C.a,[y.a,d.ElementRef,d.Renderer],null,null),(l()(),d["ɵted"](5,null,["",""])),(l()(),d["ɵted"](-1,null,["\n    "])),(l()(),d["ɵeld"](7,0,null,null,2,"ion-card-content",[],null,null,null,null,null)),d["ɵdid"](8,16384,null,0,E.a,[y.a,d.ElementRef,d.Renderer],null,null),(l()(),d["ɵted"](9,null,["",""])),(l()(),d["ɵted"](-1,null,["\n  "]))],null,function(l,n){l(n,5,0,n.context.$implicit.title);l(n,9,0,n.context.$implicit.text)})}function a(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,22,"ion-header",[],null,null,null,null,null)),d["ɵdid"](1,16384,null,0,_.a,[y.a,d.ElementRef,d.Renderer,[2,k.a]],null,null),(l()(),d["ɵted"](-1,null,["\n\n  "])),(l()(),d["ɵeld"](3,0,null,null,18,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,w.b,w.a)),d["ɵdid"](4,49152,null,0,D.a,[N.a,[2,k.a],[2,P.a],y.a,d.ElementRef,d.Renderer],{color:[0,"color"]},null),(l()(),d["ɵted"](-1,3,["\n    "])),(l()(),d["ɵeld"](6,0,null,3,2,"ion-title",[],null,null,null,x.b,x.a)),d["ɵdid"](7,49152,null,0,j.a,[y.a,d.ElementRef,d.Renderer,[2,F.a],[2,D.a]],null,null),(l()(),d["ɵted"](-1,0,["Notas"])),(l()(),d["ɵted"](-1,3,["\n    "])),(l()(),d["ɵeld"](10,0,null,2,10,"ion-buttons",[["end",""]],null,null,null,null,null)),d["ɵdid"](11,16384,null,1,q.a,[y.a,d.ElementRef,d.Renderer,[2,F.a],[2,D.a]],null,null),d["ɵqud"](603979776,1,{_buttons:1}),(l()(),d["ɵted"](-1,null,["\n      "])),(l()(),d["ɵeld"](14,0,null,null,5,"button",[["icon-only",""],["ion-button",""]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.viewCtrl.dismiss()&&u}return u},I.b,I.a)),d["ɵdid"](15,1097728,[[1,4]],0,L.a,[[8,""],y.a,d.ElementRef,d.Renderer],null,null),(l()(),d["ɵted"](-1,0,["\n        "])),(l()(),d["ɵeld"](17,0,null,0,1,"ion-icon",[["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),d["ɵdid"](18,147456,null,0,V.a,[y.a,d.ElementRef,d.Renderer],{name:[0,"name"]},null),(l()(),d["ɵted"](-1,0,["\n      "])),(l()(),d["ɵted"](-1,null,["\n    "])),(l()(),d["ɵted"](-1,3,["\n  "])),(l()(),d["ɵted"](-1,null,["\n\n"])),(l()(),d["ɵted"](-1,null,["\n\n\n"])),(l()(),d["ɵeld"](24,0,null,null,19,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,A.b,A.a)),d["ɵdid"](25,4374528,null,0,O.a,[y.a,M.a,B.a,d.ElementRef,d.Renderer,N.a,T.a,d.NgZone,[2,k.a],[2,P.a]],null,null),(l()(),d["ɵted"](-1,1,["\n\n  "])),(l()(),d["ɵand"](16777216,null,1,1,null,u)),d["ɵdid"](28,16384,null,0,$.k,[d.ViewContainerRef,d.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),d["ɵted"](-1,1,["\n\n  "])),(l()(),d["ɵand"](16777216,null,1,1,null,t)),d["ɵdid"](31,802816,null,0,$.j,[d.ViewContainerRef,d.TemplateRef,d.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),d["ɵted"](-1,1,["\n  \n  "])),(l()(),d["ɵeld"](33,0,null,0,9,"ion-fab",[["bottom",""],["right",""]],null,null,null,G.b,G.a)),d["ɵdid"](34,1228800,null,2,J.a,[M.a],null,null),d["ɵqud"](335544320,2,{_mainButton:0}),d["ɵqud"](603979776,3,{_fabLists:1}),(l()(),d["ɵted"](-1,0,["\n    "])),(l()(),d["ɵeld"](38,0,null,0,3,"button",[["color","rojito"],["ion-fab",""]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;if("click"===n){u=!1!==t.openAdd(t.id,t.type)&&u}return u},K.b,K.a)),d["ɵdid"](39,49152,[[2,4]],0,Z.a,[y.a,d.ElementRef,d.Renderer],{color:[0,"color"]},null),(l()(),d["ɵeld"](40,0,null,0,1,"ion-icon",[["name","add"],["role","img"]],[[2,"hide",null]],null,null,null,null)),d["ɵdid"](41,147456,null,0,V.a,[y.a,d.ElementRef,d.Renderer],{name:[0,"name"]},null),(l()(),d["ɵted"](-1,0,["\n  "])),(l()(),d["ɵted"](-1,1,["\n\n"])),(l()(),d["ɵted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,4,0,"primary");l(n,18,0,"close");l(n,28,0,!e.notas);l(n,31,0,e.notas);l(n,39,0,"rojito");l(n,41,0,"add")},function(l,n){l(n,3,0,d["ɵnov"](n,4)._hidden,d["ɵnov"](n,4)._sbPadding);l(n,17,0,d["ɵnov"](n,18)._hidden);l(n,24,0,d["ɵnov"](n,25).statusbarPadding,d["ɵnov"](n,25)._hasRefresher);l(n,40,0,d["ɵnov"](n,41)._hidden)})}Object.defineProperty(n,"__esModule",{value:!0});var d=e(0),i=(e(1),e(28),e(73)),o=function(){function l(l,n,e,u,t,a){this.navCtrl=l,this.navParams=n,this.modal=e,this.back=u,this.toast=t,this.viewCtrl=a,this.id=this.navParams.get("id"),this.type=this.navParams.get("type"),this.notas=[]}return l.prototype.ionViewDidLoad=function(){var l=this;this.back.getNotas(this.id,this.type).subscribe(function(n){l.notas=n},function(n){l.toast.create({message:"No se pudieron cargar tus notas...",duration:2e3}).present(),l.navCtrl.canGoBack()&&l.navCtrl.pop()})},l.prototype.openAdd=function(l,n){var e=this,u=this.modal.create("NotasAddPage",{id:l,type:n});u.present(),u.onDidDismiss(function(l){l&&e.ionViewDidLoad()})},l}(),r=function(){return function(){}}(),s=e(447),c=e(448),f=e(449),m=e(450),p=e(451),v=e(452),b=e(453),R=e(454),g=e(455),h=e(203),y=e(3),C=e(206),E=e(209),_=e(130),k=e(7),w=e(456),D=e(53),N=e(13),P=e(31),x=e(582),j=e(196),F=e(95),q=e(201),I=e(64),L=e(32),V=e(63),A=e(581),O=e(40),M=e(6),B=e(14),T=e(61),$=e(16),G=e(585),J=e(200),K=e(586),Z=e(98),z=e(15),H=e(135),Q=e(97),S=d["ɵcrt"]({encapsulation:2,styles:[],data:{}}),U=d["ɵccf"]("page-notas",o,function(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,1,"page-notas",[],null,null,null,a,S)),d["ɵdid"](1,49152,null,0,o,[P.a,z.a,H.a,i.a,Q.a,k.a],null,null)],null,null)},{},{},[]),W=e(22),X=e(197),Y=e(62);e.d(n,"NotasPageModuleNgFactory",function(){return ll});var ll=d["ɵcmf"](r,[],function(l){return d["ɵmod"]([d["ɵmpd"](512,d.ComponentFactoryResolver,d["ɵCodegenComponentFactoryResolver"],[[8,[s.a,c.a,f.a,m.a,p.a,v.a,b.a,R.a,g.a,U]],[3,d.ComponentFactoryResolver],d.NgModuleRef]),d["ɵmpd"](4608,$.m,$.l,[d.LOCALE_ID,[2,$.w]]),d["ɵmpd"](4608,W.k,W.k,[]),d["ɵmpd"](4608,W.c,W.c,[]),d["ɵmpd"](512,$.c,$.c,[]),d["ɵmpd"](512,W.j,W.j,[]),d["ɵmpd"](512,W.d,W.d,[]),d["ɵmpd"](512,W.i,W.i,[]),d["ɵmpd"](512,X.a,X.a,[]),d["ɵmpd"](512,X.b,X.b,[]),d["ɵmpd"](512,r,r,[]),d["ɵmpd"](256,Y.a,o,[])])})},581:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[t["ɵqud"](402653184,1,{_fixedContent:0}),t["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),t["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t["ɵncd"](null,1),t["ɵncd"](null,2)],null,null)}e.d(n,"a",function(){return a}),n.b=u;var t=e(0),a=(e(3),e(6),e(14),e(61),e(7),e(31),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,a.i,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}e.d(n,"a",function(){return d}),n.b=u;var t=e(0),a=e(16),d=(e(3),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},585:function(l,n,e){"use strict";function u(l){return t["ɵvid"](0,[t["ɵncd"](null,0)],null,null)}e.d(n,"a",function(){return a}),n.b=u;var t=e(0),a=(e(6),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},586:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,1,"ion-icon",[["class","fab-close-icon"],["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t["ɵdid"](1,147456,null,0,a.a,[d.a,t.ElementRef,t.Renderer],{name:[0,"name"]},null),(l()(),t["ɵeld"](2,0,null,null,1,"span",[["class","button-inner"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,null,null,0,"div",[["class","button-effect"]],null,null,null,null,null))],function(l,n){l(n,1,0,"close")},function(l,n){l(n,0,0,t["ɵnov"](n,1)._hidden)})}e.d(n,"a",function(){return i}),n.b=u;var t=e(0),a=e(63),d=e(3),i=t["ɵcrt"]({encapsulation:2,styles:[],data:{}})}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
