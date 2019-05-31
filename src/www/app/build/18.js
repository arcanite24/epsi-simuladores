<<<<<<< HEAD
webpackJsonp([18],{

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramaBloquePageModule", function() { return ProgramaBloquePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__programa_bloque__ = __webpack_require__(815);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProgramaBloquePageModule = /** @class */ (function () {
    function ProgramaBloquePageModule() {
    }
    ProgramaBloquePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__programa_bloque__["a" /* ProgramaBloquePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__programa_bloque__["a" /* ProgramaBloquePage */]),
            ],
        })
    ], ProgramaBloquePageModule);
    return ProgramaBloquePageModule;
}());

//# sourceMappingURL=programa-bloque.module.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramaBloquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProgramaBloquePage = /** @class */ (function () {
    function ProgramaBloquePage(navCtrl, navParams, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.id = this.navParams.get('id');
    }
    ProgramaBloquePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.bloque$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].CONTENT).doc(this.id).valueChanges();
        this.temas$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].CONTENT, function (ref) { return ref.where('parent_id', '==', _this.id); }).valueChanges();
    };
    ProgramaBloquePage.prototype.openTema = function (id) {
        this.navCtrl.push('ClaseDetailPage', { type: 'tema', id: id });
    };
    ProgramaBloquePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-programa-bloque',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\programa-bloque\programa-bloque.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Bloque</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n  <ion-grid>\n\n\n\n    <ion-row *ngIf="bloque$ | async as bloque">\n\n      <ion-col col-12>\n\n        <h4>{{bloque.name}}</h4>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="temas$ | async as temas">\n\n      <ion-col col-12>\n\n        <ion-list>\n\n          <ion-list-header>Temas</ion-list-header>\n\n          <ion-item (click)="openTema(tema.id)" *ngFor="let tema of temas">{{tema.name}}</ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\programa-bloque\programa-bloque.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["AngularFirestore"]])
    ], ProgramaBloquePage);
    return ProgramaBloquePage;
}());

//# sourceMappingURL=programa-bloque.js.map

/***/ })

});
//# sourceMappingURL=18.js.map
=======
webpackJsonp([18],{578:function(l,n,e){"use strict";function u(l){return r["ɵvid"](0,[(l()(),r["ɵted"](-1,null,["\n    "])),(l()(),r["ɵeld"](1,0,null,null,3,"div",[["class","flex-col"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n      "])),(l()(),r["ɵeld"](3,0,null,null,0,"img",[["src","assets/imgs/rings.svg"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n    "])),(l()(),r["ɵted"](-1,null,["\n  "]))],null,null)}function t(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,10,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.navCtrl.push("ExamenDetailPage",{id:l.context.$implicit.id,type:"simulador"})&&u}return u},k.b,k.a)),r["ɵdid"](1,1097728,null,3,I.a,[O.a,q.a,r.ElementRef,r.Renderer,[2,w.a]],null,null),r["ɵqud"](335544320,1,{contentLabel:0}),r["ɵqud"](603979776,2,{_buttons:1}),r["ɵqud"](603979776,3,{_icons:1}),r["ɵdid"](5,16384,null,0,D.a,[],null,null),(l()(),r["ɵted"](-1,2,["\n      "])),(l()(),r["ɵeld"](7,0,null,2,1,"h2",[],null,null,null,null,null)),(l()(),r["ɵted"](8,null,["",""])),(l()(),r["ɵted"](-1,2,["\n      "])),(l()(),r["ɵted"](-1,2,["\n    "]))],null,function(l,n){l(n,8,0,n.context.$implicit.name)})}function d(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,5,"ion-list",[],null,null,null,null,null)),r["ɵdid"](1,16384,null,0,F.a,[q.a,r.ElementRef,r.Renderer,L.a,P.l,$.a],null,null),(l()(),r["ɵted"](-1,null,["\n    "])),(l()(),r["ɵand"](16777216,null,null,1,null,t)),r["ɵdid"](4,802816,null,0,j.j,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),r["ɵted"](-1,null,["\n  "]))],function(l,n){l(n,4,0,n.context.ngIf)},null)}function a(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,9,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.navCtrl.push("ExamenDetailPage",{id:l.context.$implicit.id,type:"simulador",offline:!0,data:l.context.$implicit})&&u}return u},k.b,k.a)),r["ɵdid"](1,1097728,null,3,I.a,[O.a,q.a,r.ElementRef,r.Renderer,[2,w.a]],null,null),r["ɵqud"](335544320,7,{contentLabel:0}),r["ɵqud"](603979776,8,{_buttons:1}),r["ɵqud"](603979776,9,{_icons:1}),r["ɵdid"](5,16384,null,0,D.a,[],null,null),(l()(),r["ɵted"](-1,2,["\n      "])),(l()(),r["ɵeld"](7,0,null,2,1,"h2",[],null,null,null,null,null)),(l()(),r["ɵted"](8,null,["",""])),(l()(),r["ɵted"](-1,2,["\n    "]))],null,function(l,n){l(n,8,0,n.context.$implicit.name)})}function i(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,13,"ion-list",[],null,null,null,null,null)),r["ɵdid"](1,16384,null,0,F.a,[q.a,r.ElementRef,r.Renderer,L.a,P.l,$.a],null,null),(l()(),r["ɵted"](-1,null,["\n    "])),(l()(),r["ɵeld"](3,0,null,null,6,"ion-list-header",[["class","item"]],null,null,null,k.b,k.a)),r["ɵdid"](4,1097728,null,3,I.a,[O.a,q.a,r.ElementRef,r.Renderer,[2,w.a]],null,null),r["ɵqud"](335544320,4,{contentLabel:0}),r["ɵqud"](603979776,5,{_buttons:1}),r["ɵqud"](603979776,6,{_icons:1}),r["ɵdid"](8,16384,null,0,S.a,[q.a,r.Renderer,r.ElementRef,[8,null]],null,null),(l()(),r["ɵted"](-1,2,["Simuladores Offline"])),(l()(),r["ɵted"](-1,null,["\n    "])),(l()(),r["ɵand"](16777216,null,null,1,null,a)),r["ɵdid"](12,802816,null,0,j.j,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),r["ɵted"](-1,null,["\n  "]))],function(l,n){l(n,12,0,n.component.downloadList)},null)}function o(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,10,"ion-header",[],null,null,null,null,null)),r["ɵdid"](1,16384,null,0,V.a,[q.a,r.ElementRef,r.Renderer,[2,M.a]],null,null),(l()(),r["ɵted"](-1,null,["\n\n  "])),(l()(),r["ɵeld"](3,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,A.b,A.a)),r["ɵdid"](4,49152,null,0,T.a,[N.a,[2,M.a],[2,J.a],q.a,r.ElementRef,r.Renderer],{color:[0,"color"]},null),(l()(),r["ɵted"](-1,3,["\n    "])),(l()(),r["ɵeld"](6,0,null,3,2,"ion-title",[],null,null,null,K.b,K.a)),r["ɵdid"](7,49152,null,0,U.a,[q.a,r.ElementRef,r.Renderer,[2,X.a],[2,T.a]],null,null),(l()(),r["ɵted"](-1,0,["Simuladores"])),(l()(),r["ɵted"](-1,3,["\n  "])),(l()(),r["ɵted"](-1,null,["\n\n"])),(l()(),r["ɵted"](-1,null,["\n\n\n"])),(l()(),r["ɵeld"](12,0,null,null,11,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,Z.b,Z.a)),r["ɵdid"](13,4374528,null,0,z.a,[q.a,L.a,$.a,r.ElementRef,r.Renderer,N.a,B.a,r.NgZone,[2,M.a],[2,J.a]],null,null),(l()(),r["ɵted"](-1,1,["\n\n  "])),(l()(),r["ɵand"](0,[["loader",2]],1,0,null,u)),(l()(),r["ɵted"](-1,1,["\n\n  "])),(l()(),r["ɵand"](16777216,null,1,2,null,d)),r["ɵdid"](18,16384,null,0,j.k,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),r["ɵpid"](131072,j.b,[r.ChangeDetectorRef]),(l()(),r["ɵted"](-1,1,["\n\n  "])),(l()(),r["ɵand"](16777216,null,1,1,null,i)),r["ɵdid"](22,16384,null,0,j.k,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),r["ɵted"](-1,1,["\n\n"])),(l()(),r["ɵted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,4,0,"primary");l(n,18,0,r["ɵunv"](n,18,0,r["ɵnov"](n,19).transform(e.exams$)),r["ɵnov"](n,15));l(n,22,0,e.isOffline)},function(l,n){l(n,3,0,r["ɵnov"](n,4)._hidden,r["ɵnov"](n,4)._sbPadding);l(n,12,0,r["ɵnov"](n,13).statusbarPadding,r["ɵnov"](n,13)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var r=e(0),c=(e(1),e(28),e(458),e(457)),s=e(2),f=e.n(s),m=e(24),p=function(){function l(l,n,e){this.navCtrl=l,this.navParams=n,this.afs=e,this.isOffline=!1}return l.prototype.ionViewDidLoad=function(){this.exams$=this.afs.collection(c.a.EXAM,function(l){return l.where("type","==",c.b.SIMULADOR).where("date","<=",f()().endOf("day").toISOString())}).valueChanges().pipe(Object(m.map)(function(l){return l.reverse()}))},l}(),v=function(){return function(){}}(),R=e(447),b=e(448),g=e(449),h=e(450),C=e(451),E=e(452),y=e(453),_=e(454),x=e(455),k=e(459),I=e(29),O=e(23),q=e(3),w=e(74),D=e(131),F=e(96),L=e(6),P=e(8),$=e(14),j=e(16),S=e(133),V=e(130),M=e(7),A=e(456),T=e(53),N=e(13),J=e(31),K=e(582),U=e(196),X=e(95),Z=e(581),z=e(40),B=e(61),G=e(15),H=e(132),Q=r["ɵcrt"]({encapsulation:2,styles:[],data:{}}),W=r["ɵccf"]("page-simuladores",p,function(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,1,"page-simuladores",[],null,null,null,o,Q)),r["ɵdid"](1,49152,null,0,p,[J.a,G.a,H.AngularFirestore],null,null)],null,null)},{},{},[]),Y=e(22),ll=e(197),nl=e(62);e.d(n,"SimuladoresPageModuleNgFactory",function(){return el});var el=r["ɵcmf"](v,[],function(l){return r["ɵmod"]([r["ɵmpd"](512,r.ComponentFactoryResolver,r["ɵCodegenComponentFactoryResolver"],[[8,[R.a,b.a,g.a,h.a,C.a,E.a,y.a,_.a,x.a,W]],[3,r.ComponentFactoryResolver],r.NgModuleRef]),r["ɵmpd"](4608,j.m,j.l,[r.LOCALE_ID,[2,j.w]]),r["ɵmpd"](4608,Y.k,Y.k,[]),r["ɵmpd"](4608,Y.c,Y.c,[]),r["ɵmpd"](512,j.c,j.c,[]),r["ɵmpd"](512,Y.j,Y.j,[]),r["ɵmpd"](512,Y.d,Y.d,[]),r["ɵmpd"](512,Y.i,Y.i,[]),r["ɵmpd"](512,ll.a,ll.a,[]),r["ɵmpd"](512,ll.b,ll.b,[]),r["ɵmpd"](512,v,v,[]),r["ɵmpd"](256,nl.a,p,[])])})},581:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[t["ɵqud"](402653184,1,{_fixedContent:0}),t["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),t["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t["ɵncd"](null,1),t["ɵncd"](null,2)],null,null)}e.d(n,"a",function(){return d}),n.b=u;var t=e(0),d=(e(3),e(6),e(14),e(61),e(7),e(31),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,d.i,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}e.d(n,"a",function(){return a}),n.b=u;var t=e(0),d=e(16),a=(e(3),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
