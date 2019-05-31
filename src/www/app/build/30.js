<<<<<<< HEAD
webpackJsonp([30],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForosPageModule", function() { return ForosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foros__ = __webpack_require__(798);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForosPageModule = /** @class */ (function () {
    function ForosPageModule() {
    }
    ForosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__foros__["a" /* ForosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__foros__["a" /* ForosPage */]),
            ],
        })
    ], ForosPageModule);
    return ForosPageModule;
}());

//# sourceMappingURL=foros.module.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_models__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForosPage = /** @class */ (function () {
    function ForosPage(navCtrl, navParams, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.cats$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].THREAD_CATEGORY).valueChanges();
    }
    ForosPage.prototype.ionViewDidLoad = function () {
    };
    ForosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-foros',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\foros\foros.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Categorías</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n\n\n  <ng-template #loader>\n\n    <div class="flex-col">\n\n      <img src="assets/imgs/rings.svg">\n\n    </div>\n\n  </ng-template>\n\n\n\n  <ion-list *ngIf="cats$ | async as foros else loader">\n\n    <ion-item *ngFor="let c of foros" (click)="navCtrl.push(\'ForoDetailPage\', {id: c.id})">\n\n      <h2>{{c.name}}</h2>\n\n      <!--<p>{{c.desc}}</p>-->\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\foros\foros.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"]])
    ], ForosPage);
    return ForosPage;
}());

//# sourceMappingURL=foros.js.map

/***/ })

});
//# sourceMappingURL=30.js.map
=======
webpackJsonp([30],{557:function(l,n,e){"use strict";function u(l){return i["ɵvid"](0,[(l()(),i["ɵted"](-1,null,["\n    "])),(l()(),i["ɵeld"](1,0,null,null,3,"div",[["class","flex-col"]],null,null,null,null,null)),(l()(),i["ɵted"](-1,null,["\n      "])),(l()(),i["ɵeld"](3,0,null,null,0,"img",[["src","assets/imgs/rings.svg"]],null,null,null,null,null)),(l()(),i["ɵted"](-1,null,["\n      "])),(l()(),i["ɵted"](-1,null,["\n  "]))],null,null)}function t(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,0,null,null,9,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.navCtrl.push("HiloDetailPage",{id:l.context.$implicit.id})&&u}return u},C.b,C.a)),i["ɵdid"](1,1097728,null,3,_.a,[y.a,E.a,i.ElementRef,i.Renderer,[2,k.a]],null,null),i["ɵqud"](335544320,4,{contentLabel:0}),i["ɵqud"](603979776,5,{_buttons:1}),i["ɵqud"](603979776,6,{_icons:1}),i["ɵdid"](5,16384,null,0,D.a,[],null,null),(l()(),i["ɵted"](-1,2,["\n      "])),(l()(),i["ɵeld"](7,0,null,2,1,"h2",[],null,null,null,null,null)),(l()(),i["ɵted"](8,null,["",""])),(l()(),i["ɵted"](-1,2,["\n    "]))],null,function(l,n){l(n,8,0,n.context.$implicit.title)})}function a(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,0,null,null,13,"ion-list",[],null,null,null,null,null)),i["ɵdid"](1,16384,null,0,I.a,[E.a,i.ElementRef,i.Renderer,q.a,F.l,x.a],null,null),(l()(),i["ɵted"](-1,null,["\n    "])),(l()(),i["ɵeld"](3,0,null,null,6,"ion-list-header",[["class","item"]],null,null,null,C.b,C.a)),i["ɵdid"](4,1097728,null,3,_.a,[y.a,E.a,i.ElementRef,i.Renderer,[2,k.a]],null,null),i["ɵqud"](335544320,1,{contentLabel:0}),i["ɵqud"](603979776,2,{_buttons:1}),i["ɵqud"](603979776,3,{_icons:1}),i["ɵdid"](8,16384,null,0,P.a,[E.a,i.Renderer,i.ElementRef,[8,null]],null,null),(l()(),i["ɵted"](-1,2,["Hilos"])),(l()(),i["ɵted"](-1,null,["\n    "])),(l()(),i["ɵand"](16777216,null,null,1,null,t)),i["ɵdid"](12,802816,null,0,w.j,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),i["ɵted"](-1,null,["\n  "]))],function(l,n){l(n,12,0,n.context.ngIf)},null)}function d(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,0,null,null,10,"ion-header",[],null,null,null,null,null)),i["ɵdid"](1,16384,null,0,L.a,[E.a,i.ElementRef,i.Renderer,[2,O.a]],null,null),(l()(),i["ɵted"](-1,null,["\n\n  "])),(l()(),i["ɵeld"](3,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,j.b,j.a)),i["ɵdid"](4,49152,null,0,V.a,[$.a,[2,O.a],[2,A.a],E.a,i.ElementRef,i.Renderer],{color:[0,"color"]},null),(l()(),i["ɵted"](-1,3,["\n    "])),(l()(),i["ɵeld"](6,0,null,3,2,"ion-title",[],null,null,null,H.b,H.a)),i["ɵdid"](7,49152,null,0,M.a,[E.a,i.ElementRef,i.Renderer,[2,N.a],[2,V.a]],null,null),(l()(),i["ɵted"](-1,0,["Categoría"])),(l()(),i["ɵted"](-1,3,["\n  "])),(l()(),i["ɵted"](-1,null,["\n\n"])),(l()(),i["ɵted"](-1,null,["\n\n\n"])),(l()(),i["ɵeld"](12,0,null,null,8,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,T.b,T.a)),i["ɵdid"](13,4374528,null,0,J.a,[E.a,q.a,x.a,i.ElementRef,i.Renderer,$.a,K.a,i.NgZone,[2,O.a],[2,A.a]],null,null),(l()(),i["ɵted"](-1,1,["\n\n  "])),(l()(),i["ɵand"](0,[["loader",2]],1,0,null,u)),(l()(),i["ɵted"](-1,1,["\n\n  "])),(l()(),i["ɵand"](16777216,null,1,2,null,a)),i["ɵdid"](18,16384,null,0,w.k,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),i["ɵpid"](131072,w.b,[i.ChangeDetectorRef]),(l()(),i["ɵted"](-1,1,["\n\n"])),(l()(),i["ɵted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,4,0,"primary");l(n,18,0,i["ɵunv"](n,18,0,i["ɵnov"](n,19).transform(e.thread$)),i["ɵnov"](n,15))},function(l,n){l(n,3,0,i["ɵnov"](n,4)._hidden,i["ɵnov"](n,4)._sbPadding);l(n,12,0,i["ɵnov"](n,13).statusbarPadding,i["ɵnov"](n,13)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var i=e(0),o=(e(1),e(28),e(457)),r=(e(458),function(){function l(l,n,e){this.navCtrl=l,this.navParams=n,this.afs=e}return l.prototype.ngOnInit=function(){},l.prototype.ionViewDidLoad=function(){var l=this.navParams.get("id");this.thread$=this.afs.collection(o.a.THREAD,function(n){return n.where("cat_id","==",l)}).valueChanges()},l}()),c=function(){return function(){}}(),s=e(447),f=e(448),m=e(449),p=e(450),v=e(451),g=e(452),b=e(453),R=e(454),h=e(455),C=e(459),_=e(29),y=e(23),E=e(3),k=e(74),D=e(131),I=e(96),q=e(6),F=e(8),x=e(14),P=e(133),w=e(16),L=e(130),O=e(7),j=e(456),V=e(53),$=e(13),A=e(31),H=e(582),M=e(196),N=e(95),T=e(581),J=e(40),K=e(61),Z=e(15),z=e(132),B=i["ɵcrt"]({encapsulation:2,styles:[],data:{}}),G=i["ɵccf"]("page-foro-detail",r,function(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,0,null,null,1,"page-foro-detail",[],null,null,null,d,B)),i["ɵdid"](1,114688,null,0,r,[A.a,Z.a,z.AngularFirestore],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),Q=e(22),S=e(197),U=e(62);e.d(n,"ForoDetailPageModuleNgFactory",function(){return W});var W=i["ɵcmf"](c,[],function(l){return i["ɵmod"]([i["ɵmpd"](512,i.ComponentFactoryResolver,i["ɵCodegenComponentFactoryResolver"],[[8,[s.a,f.a,m.a,p.a,v.a,g.a,b.a,R.a,h.a,G]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["ɵmpd"](4608,w.m,w.l,[i.LOCALE_ID,[2,w.w]]),i["ɵmpd"](4608,Q.k,Q.k,[]),i["ɵmpd"](4608,Q.c,Q.c,[]),i["ɵmpd"](512,w.c,w.c,[]),i["ɵmpd"](512,Q.j,Q.j,[]),i["ɵmpd"](512,Q.d,Q.d,[]),i["ɵmpd"](512,Q.i,Q.i,[]),i["ɵmpd"](512,S.a,S.a,[]),i["ɵmpd"](512,S.b,S.b,[]),i["ɵmpd"](512,c,c,[]),i["ɵmpd"](256,U.a,r,[])])})},581:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[t["ɵqud"](402653184,1,{_fixedContent:0}),t["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),t["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t["ɵncd"](null,1),t["ɵncd"](null,2)],null,null)}e.d(n,"a",function(){return a}),n.b=u;var t=e(0),a=(e(3),e(6),e(14),e(61),e(7),e(31),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,a.i,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}e.d(n,"a",function(){return d}),n.b=u;var t=e(0),a=e(16),d=(e(3),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
