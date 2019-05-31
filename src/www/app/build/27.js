<<<<<<< HEAD
webpackJsonp([27],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateriaAltPageModule", function() { return MateriaAltPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materia_alt__ = __webpack_require__(805);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MateriaAltPageModule = /** @class */ (function () {
    function MateriaAltPageModule() {
    }
    MateriaAltPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__materia_alt__["a" /* MateriaAltPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__materia_alt__["a" /* MateriaAltPage */]),
            ],
        })
    ], MateriaAltPageModule);
    return MateriaAltPageModule;
}());

//# sourceMappingURL=materia-alt.module.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriaAltPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_models__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
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




var MateriaAltPage = /** @class */ (function () {
    function MateriaAltPage(navCtrl, navParams, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.id = this.navParams.get('id');
    }
    MateriaAltPage.prototype.ionViewDidLoad = function () {
        this.loadContent(this.id);
        this.loadChildren(this.id);
    };
    MateriaAltPage.prototype.loadContent = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.data.getDocAlt(__WEBPACK_IMPORTED_MODULE_0__app_app_models__["a" /* Collections */].CONTENT, id)];
                    case 1:
                        _a.materia = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MateriaAltPage.prototype.loadChildren = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var children;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data.getCollectionQuery(__WEBPACK_IMPORTED_MODULE_0__app_app_models__["a" /* Collections */].CONTENT, function (ref) { return ref.where('parent_id', '==', id); })];
                    case 1:
                        children = _a.sent();
                        this.children = children.filter(function (c) { return c.liberadoInPrograma; });
                        return [2 /*return*/];
                }
            });
        });
    };
    MateriaAltPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-materia-alt',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\materia-alt\materia-alt.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{materia ? materia.name : \'...\'}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-grid *ngIf="children">\n    <ion-row>\n\n      <ion-col col-6 *ngFor="let child of children">\n        <ion-card (click)="navCtrl.push(\'BloqueAltPage\', {id: child.id})">\n          <img [src]="child.cover" alt="Children">\n          <ion-card-content>\n            <ion-card-title>{{child.name}}</ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\materia-alt\materia-alt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */]])
    ], MateriaAltPage);
    return MateriaAltPage;
}());

//# sourceMappingURL=materia-alt.js.map

/***/ })

});
//# sourceMappingURL=27.js.map
=======
webpackJsonp([27],{568:function(l,n,e){"use strict";function u(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,2,"div",[["class","refresher-pulling-icon"]],null,null,null,null,null)),(l()(),r["ɵeld"](1,0,null,null,1,"ion-icon",[["role","img"]],[[2,"hide",null]],null,null,null,null)),r["ɵdid"](2,147456,null,0,S.a,[w.a,r.ElementRef,r.Renderer],{name:[0,"name"]},null)],function(l,n){l(n,2,0,n.component.pullingIcon)},function(l,n){l(n,1,0,r["ɵnov"](n,2)._hidden)})}function t(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,0,"div",[["class","refresher-pulling-text"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.pullingText)})}function i(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,0,"div",[["class","refresher-refreshing-text"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.refreshingText)})}function o(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,4,"div",[["class","refresher-pulling"]],null,null,null,null,null)),(l()(),r["ɵand"](16777216,null,null,1,null,u)),r["ɵdid"](2,16384,null,0,E.k,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),r["ɵand"](16777216,null,null,1,null,t)),r["ɵdid"](4,16384,null,0,E.k,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),r["ɵeld"](5,0,null,null,5,"div",[["class","refresher-refreshing"]],null,null,null,null,null)),(l()(),r["ɵeld"](6,0,null,null,2,"div",[["class","refresher-refreshing-icon"]],null,null,null,null,null)),(l()(),r["ɵeld"](7,0,null,null,1,"ion-spinner",[],[[2,"spinner-paused",null]],null,null,W.b,W.a)),r["ɵdid"](8,114688,null,0,X.a,[w.a,r.ElementRef,r.Renderer],{name:[0,"name"]},null),(l()(),r["ɵand"](16777216,null,null,1,null,i)),r["ɵdid"](10,16384,null,0,E.k,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,2,0,e.pullingIcon);l(n,4,0,e.pullingText);l(n,8,0,e.refreshingSpinner);l(n,10,0,e.refreshingText)},function(l,n){l(n,7,0,r["ɵnov"](n,8)._paused)})}function a(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,17,"ion-item",[["class","item item-block"],["text-wrap",""]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;if("click"===n){t.setRead(l.context.$implicit.id,l.context.index,l.context.$implicit.read);u=!1!==t.handleClick(l.context.$implicit)&&u}return u},_.b,_.a)),r["ɵdid"](1,278528,null,0,E.i,[r.IterableDiffers,r.KeyValueDiffers,r.ElementRef,r.Renderer2],{ngClass:[0,"ngClass"]},null),r["ɵpod"](2,{read:0}),r["ɵdid"](3,1097728,null,3,N.a,[I.a,w.a,r.ElementRef,r.Renderer,[2,D.a]],null,null),r["ɵqud"](335544320,2,{contentLabel:0}),r["ɵqud"](603979776,3,{_buttons:1}),r["ɵqud"](603979776,4,{_icons:1}),r["ɵdid"](7,16384,null,0,T.a,[],null,null),(l()(),r["ɵted"](-1,2,["\n      "])),(l()(),r["ɵeld"](9,0,null,2,4,"h2",[],null,null,null,null,null)),(l()(),r["ɵted"](10,null,[""," "])),(l()(),r["ɵeld"](11,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),r["ɵted"](12,null,["",""])),(l()(),r["ɵted"](-1,null,[" "])),(l()(),r["ɵted"](-1,2,["\n      "])),(l()(),r["ɵeld"](15,0,null,2,1,"p",[],null,null,null,null,null)),(l()(),r["ɵted"](16,null,["",""])),(l()(),r["ɵted"](-1,2,["\n    "]))],function(l,n){l(n,1,0,l(n,2,0,n.context.$implicit.read))},function(l,n){var e=n.component;l(n,10,0,n.context.$implicit.title);l(n,12,0,e.getDate(n.context.$implicit.createdAt));l(n,16,0,n.context.$implicit.desc)})}function d(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,22,"ion-header",[],null,null,null,null,null)),r["ɵdid"](1,16384,null,0,V.a,[w.a,r.ElementRef,r.Renderer,[2,$.a]],null,null),(l()(),r["ɵted"](-1,null,["\n\n  "])),(l()(),r["ɵeld"](3,0,null,null,18,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,q.b,q.a)),r["ɵdid"](4,49152,null,0,F.a,[L.a,[2,$.a],[2,P.a],w.a,r.ElementRef,r.Renderer],{color:[0,"color"]},null),(l()(),r["ɵted"](-1,3,["\n    "])),(l()(),r["ɵeld"](6,0,null,3,2,"ion-title",[],null,null,null,M.b,M.a)),r["ɵdid"](7,49152,null,0,j.a,[w.a,r.ElementRef,r.Renderer,[2,O.a],[2,F.a]],null,null),(l()(),r["ɵted"](-1,0,["Notificaciones"])),(l()(),r["ɵted"](-1,3,["\n    "])),(l()(),r["ɵeld"](10,0,null,2,10,"ion-buttons",[["end",""]],null,null,null,null,null)),r["ɵdid"](11,16384,null,1,H.a,[w.a,r.ElementRef,r.Renderer,[2,O.a],[2,F.a]],null,null),r["ɵqud"](603979776,1,{_buttons:1}),(l()(),r["ɵted"](-1,null,["\n      "])),(l()(),r["ɵeld"](14,0,null,null,5,"button",[["icon-only",""],["ion-button",""]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.viewCtrl.dismiss()&&u}return u},A.b,A.a)),r["ɵdid"](15,1097728,[[1,4]],0,K.a,[[8,""],w.a,r.ElementRef,r.Renderer],null,null),(l()(),r["ɵted"](-1,0,["\n        "])),(l()(),r["ɵeld"](17,0,null,0,1,"ion-icon",[["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r["ɵdid"](18,147456,null,0,S.a,[w.a,r.ElementRef,r.Renderer],{name:[0,"name"]},null),(l()(),r["ɵted"](-1,0,["\n      "])),(l()(),r["ɵted"](-1,null,["\n    "])),(l()(),r["ɵted"](-1,3,["\n  "])),(l()(),r["ɵted"](-1,null,["\n\n"])),(l()(),r["ɵted"](-1,null,["\n\n\n"])),(l()(),r["ɵeld"](24,0,null,null,16,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,Z.b,Z.a)),r["ɵdid"](25,4374528,null,0,J.a,[w.a,U.a,z.a,r.ElementRef,r.Renderer,L.a,B.a,r.NgZone,[2,$.a],[2,P.a]],null,null),(l()(),r["ɵted"](-1,1,["\n\n  "])),(l()(),r["ɵeld"](27,0,null,2,5,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(l,n,e){var u=!0;if("ionRefresh"===n){u=!1!==l.component.reload(e)&&u}return u},null,null)),r["ɵdid"](28,212992,null,0,G.a,[U.a,J.a,r.NgZone,Q.l],null,{ionRefresh:"ionRefresh"}),(l()(),r["ɵted"](-1,null,["\n    "])),(l()(),r["ɵeld"](30,0,null,null,1,"ion-refresher-content",[],[[1,"state",0]],null,null,o,ll)),r["ɵdid"](31,114688,null,0,Y.a,[G.a,w.a],null,null),(l()(),r["ɵted"](-1,null,["\n  "])),(l()(),r["ɵted"](-1,1,["\n\n  "])),(l()(),r["ɵeld"](34,0,null,1,5,"ion-list",[],null,null,null,null,null)),r["ɵdid"](35,16384,null,0,nl.a,[w.a,r.ElementRef,r.Renderer,U.a,Q.l,z.a],null,null),(l()(),r["ɵted"](-1,null,["\n    "])),(l()(),r["ɵand"](16777216,null,null,1,null,a)),r["ɵdid"](38,802816,null,0,E.j,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),r["ɵted"](-1,null,["\n  "])),(l()(),r["ɵted"](-1,1,["\n\n"])),(l()(),r["ɵted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,4,0,"primary");l(n,18,0,"close"),l(n,28,0),l(n,31,0);l(n,38,0,e.notis.reverse())},function(l,n){l(n,3,0,r["ɵnov"](n,4)._hidden,r["ɵnov"](n,4)._sbPadding);l(n,17,0,r["ɵnov"](n,18)._hidden);l(n,24,0,r["ɵnov"](n,25).statusbarPadding,r["ɵnov"](n,25)._hasRefresher);l(n,27,0,"inactive"!==r["ɵnov"](n,28).state,r["ɵnov"](n,28)._top);l(n,30,0,r["ɵnov"](n,31).r.state)})}Object.defineProperty(n,"__esModule",{value:!0});var r=e(0),s=(e(1),e(28),e(73)),c=e(2),f=e.n(c),p=function(){function l(l,n,e,u,t,i){this.navCtrl=l,this.navParams=n,this.back=e,this.toast=u,this.load=t,this.viewCtrl=i,this.notis=[],this.uid=localStorage.getItem("uid")}return l.prototype.ionViewDidLoad=function(){this.loadNotis()},l.prototype.reload=function(l){this.loadNotis(function(){return l.complete()})},l.prototype.loadNotis=function(l){var n=this,e=this.load.create({content:"Cargando notificaciones..."});e.present(),this.back.getNotisUser(this.uid).subscribe(function(u){n.notis=u,e.dismiss(),l&&l()},function(l){e.dismiss(),n.toast.create({message:"No se pudieron cargar las notificaciones",duration:2e3}).present(),n.viewCtrl.dismiss()})},l.prototype.setRead=function(l,n,e){var u=this;e||(this.notis[n].read=!0,this.back.updateNoti(l,{read:this.notis[n].read}).subscribe(function(l){console.log(l)},function(l){u.notis[n].read=e,u.toast.create({message:"No se pudo marcar como leída la notificación...",duration:2e3}).present()}))},l.prototype.getDate=function(l){return f()(l).fromNow()},l.prototype.handleClick=function(l){l.hilo&&this.navCtrl.push("HiloDetailPage",{id:l.hilo.id})},l}(),m=function(){return function(){}}(),h=e(447),v=e(448),g=e(449),R=e(450),b=e(451),C=e(452),y=e(453),x=e(454),k=e(455),_=e(459),E=e(16),N=e(29),I=e(23),w=e(3),D=e(74),T=e(131),V=e(130),$=e(7),q=e(456),F=e(53),L=e(13),P=e(31),M=e(582),j=e(196),O=e(95),H=e(201),A=e(64),K=e(32),S=e(63),Z=e(581),J=e(40),U=e(6),z=e(14),B=e(61),G=e(138),Q=e(8),W=e(463),X=e(100),Y=e(213),ll=r["ɵcrt"]({encapsulation:2,styles:[],data:{}}),nl=e(96),el=e(15),ul=e(97),tl=e(134),il=r["ɵcrt"]({encapsulation:2,styles:[],data:{}}),ol=r["ɵccf"]("page-notifications",p,function(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,1,"page-notifications",[],null,null,null,d,il)),r["ɵdid"](1,49152,null,0,p,[P.a,el.a,s.a,ul.a,tl.a,$.a],null,null)],null,null)},{},{},[]),al=e(22),dl=e(197),rl=e(62);e.d(n,"NotificationsPageModuleNgFactory",function(){return sl});var sl=r["ɵcmf"](m,[],function(l){return r["ɵmod"]([r["ɵmpd"](512,r.ComponentFactoryResolver,r["ɵCodegenComponentFactoryResolver"],[[8,[h.a,v.a,g.a,R.a,b.a,C.a,y.a,x.a,k.a,ol]],[3,r.ComponentFactoryResolver],r.NgModuleRef]),r["ɵmpd"](4608,E.m,E.l,[r.LOCALE_ID,[2,E.w]]),r["ɵmpd"](4608,al.k,al.k,[]),r["ɵmpd"](4608,al.c,al.c,[]),r["ɵmpd"](512,E.c,E.c,[]),r["ɵmpd"](512,al.j,al.j,[]),r["ɵmpd"](512,al.d,al.d,[]),r["ɵmpd"](512,al.i,al.i,[]),r["ɵmpd"](512,dl.a,dl.a,[]),r["ɵmpd"](512,dl.b,dl.b,[]),r["ɵmpd"](512,m,m,[]),r["ɵmpd"](256,rl.a,p,[])])})},581:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[t["ɵqud"](402653184,1,{_fixedContent:0}),t["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),t["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t["ɵncd"](null,1),t["ɵncd"](null,2)],null,null)}e.d(n,"a",function(){return i}),n.b=u;var t=e(0),i=(e(3),e(6),e(14),e(61),e(7),e(31),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,i.i,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}e.d(n,"a",function(){return o}),n.b=u;var t=e(0),i=e(16),o=(e(3),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
