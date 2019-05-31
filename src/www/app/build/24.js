<<<<<<< HEAD
webpackJsonp([24],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasGlobalDetailPageModule", function() { return NotasGlobalDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notas_global_detail__ = __webpack_require__(809);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotasGlobalDetailPageModule = /** @class */ (function () {
    function NotasGlobalDetailPageModule() {
    }
    NotasGlobalDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notas_global_detail__["a" /* NotasGlobalDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notas_global_detail__["a" /* NotasGlobalDetailPage */]),
            ],
        })
    ], NotasGlobalDetailPageModule);
    return NotasGlobalDetailPageModule;
}());

//# sourceMappingURL=notas-global-detail.module.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasGlobalDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_back_back__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotasGlobalDetailPage = /** @class */ (function () {
    function NotasGlobalDetailPage(navCtrl, navParams, toast, back) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.back = back;
        this.id = this.navParams.get('id');
        this.rest = this.navParams.get('rest');
        this.uid = localStorage.getItem('uid');
        this.notas = [];
    }
    NotasGlobalDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.back.getNotasRest(this.id, this.rest, this.uid).subscribe(function (data) {
            _this.notas = data;
            console.log(data);
        }, function (err) {
            _this.toast.create({ message: 'No se pudieron cargar las notas...', duration: 2000 }).present();
            _this.navCtrl.setRoot('HomePage');
        });
    };
    NotasGlobalDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notas-global-detail',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\notas-global-detail\notas-global-detail.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Notas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let n of notas" text-wrap>\n\n      <h2>{{n.title}}</h2>\n\n      <p>{{n.text}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\notas-global-detail\notas-global-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */]])
    ], NotasGlobalDetailPage);
    return NotasGlobalDetailPage;
}());

//# sourceMappingURL=notas-global-detail.js.map

/***/ })

});
//# sourceMappingURL=24.js.map
=======
webpackJsonp([24],{571:function(l,n,u){"use strict";function e(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,0,null,null,9,"ion-row",[["class","row"]],null,null,null,null,null)),i["ɵdid"](1,16384,null,0,q.a,[],null,null),(l()(),i["ɵted"](-1,null,["\n      "])),(l()(),i["ɵeld"](3,0,null,null,5,"ion-col",[["class","col"],["col-12",""]],null,null,null,null,null)),i["ɵdid"](4,16384,null,0,_.a,[],null,null),(l()(),i["ɵted"](-1,null,["\n        "])),(l()(),i["ɵeld"](6,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),i["ɵted"](7,null,["",""])),(l()(),i["ɵted"](-1,null,["\n      "])),(l()(),i["ɵted"](-1,null,["\n    "]))],null,function(l,n){l(n,7,0,n.context.ngIf.name)})}function t(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,0,null,null,6,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.openTema(l.context.$implicit.id)&&e}return e},y.b,y.a)),i["ɵdid"](1,1097728,null,3,E.a,[w.a,k.a,i.ElementRef,i.Renderer,[2,T.a]],null,null),i["ɵqud"](335544320,4,{contentLabel:0}),i["ɵqud"](603979776,5,{_buttons:1}),i["ɵqud"](603979776,6,{_icons:1}),i["ɵdid"](5,16384,null,0,I.a,[],null,null),(l()(),i["ɵted"](6,2,["",""]))],null,function(l,n){l(n,6,0,n.context.$implicit.name)})}function a(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,0,null,null,21,"ion-row",[["class","row"]],null,null,null,null,null)),i["ɵdid"](1,16384,null,0,q.a,[],null,null),(l()(),i["ɵted"](-1,null,["\n      "])),(l()(),i["ɵeld"](3,0,null,null,17,"ion-col",[["class","col"],["col-12",""]],null,null,null,null,null)),i["ɵdid"](4,16384,null,0,_.a,[],null,null),(l()(),i["ɵted"](-1,null,["\n        "])),(l()(),i["ɵeld"](6,0,null,null,13,"ion-list",[],null,null,null,null,null)),i["ɵdid"](7,16384,null,0,D.a,[k.a,i.ElementRef,i.Renderer,P.a,x.l,F.a],null,null),(l()(),i["ɵted"](-1,null,["\n          "])),(l()(),i["ɵeld"](9,0,null,null,6,"ion-list-header",[["class","item"]],null,null,null,y.b,y.a)),i["ɵdid"](10,1097728,null,3,E.a,[w.a,k.a,i.ElementRef,i.Renderer,[2,T.a]],null,null),i["ɵqud"](335544320,1,{contentLabel:0}),i["ɵqud"](603979776,2,{_buttons:1}),i["ɵqud"](603979776,3,{_icons:1}),i["ɵdid"](14,16384,null,0,N.a,[k.a,i.Renderer,i.ElementRef,[8,null]],null,null),(l()(),i["ɵted"](-1,2,["Temas"])),(l()(),i["ɵted"](-1,null,["\n          "])),(l()(),i["ɵand"](16777216,null,null,1,null,t)),i["ɵdid"](18,802816,null,0,O.j,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),i["ɵted"](-1,null,["\n        "])),(l()(),i["ɵted"](-1,null,["\n      "])),(l()(),i["ɵted"](-1,null,["\n    "]))],function(l,n){l(n,18,0,n.context.ngIf)},null)}function d(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,0,null,null,10,"ion-header",[],null,null,null,null,null)),i["ɵdid"](1,16384,null,0,$.a,[k.a,i.ElementRef,i.Renderer,[2,L.a]],null,null),(l()(),i["ɵted"](-1,null,["\n\n  "])),(l()(),i["ɵeld"](3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,V.b,V.a)),i["ɵdid"](4,49152,null,0,j.a,[M.a,[2,L.a],[2,A.a],k.a,i.ElementRef,i.Renderer],null,null),(l()(),i["ɵted"](-1,3,["\n    "])),(l()(),i["ɵeld"](6,0,null,3,2,"ion-title",[],null,null,null,B.b,B.a)),i["ɵdid"](7,49152,null,0,J.a,[k.a,i.ElementRef,i.Renderer,[2,K.a],[2,j.a]],null,null),(l()(),i["ɵted"](-1,0,["Bloque"])),(l()(),i["ɵted"](-1,3,["\n  "])),(l()(),i["ɵted"](-1,null,["\n\n"])),(l()(),i["ɵted"](-1,null,["\n\n\n"])),(l()(),i["ɵeld"](12,0,null,null,14,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,Z.b,Z.a)),i["ɵdid"](13,4374528,null,0,z.a,[k.a,P.a,F.a,i.ElementRef,i.Renderer,M.a,G.a,i.NgZone,[2,L.a],[2,A.a]],null,null),(l()(),i["ɵted"](-1,1,["\n  "])),(l()(),i["ɵeld"](15,0,null,1,10,"ion-grid",[["class","grid"]],null,null,null,null,null)),i["ɵdid"](16,16384,null,0,H.a,[],null,null),(l()(),i["ɵted"](-1,null,["\n\n    "])),(l()(),i["ɵand"](16777216,null,null,2,null,e)),i["ɵdid"](19,16384,null,0,O.k,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),i["ɵpid"](131072,O.b,[i.ChangeDetectorRef]),(l()(),i["ɵted"](-1,null,["\n\n    "])),(l()(),i["ɵand"](16777216,null,null,2,null,a)),i["ɵdid"](23,16384,null,0,O.k,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),i["ɵpid"](131072,O.b,[i.ChangeDetectorRef]),(l()(),i["ɵted"](-1,null,["\n\n  "])),(l()(),i["ɵted"](-1,1,["\n"])),(l()(),i["ɵted"](-1,null,["\n"]))],function(l,n){var u=n.component;l(n,19,0,i["ɵunv"](n,19,0,i["ɵnov"](n,20).transform(u.bloque$)));l(n,23,0,i["ɵunv"](n,23,0,i["ɵnov"](n,24).transform(u.temas$)))},function(l,n){l(n,3,0,i["ɵnov"](n,4)._hidden,i["ɵnov"](n,4)._sbPadding);l(n,12,0,i["ɵnov"](n,13).statusbarPadding,i["ɵnov"](n,13)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var i=u(0),o=(u(1),u(28),u(132)),r=u(457),c=function(){function l(l,n,u){this.navCtrl=l,this.navParams=n,this.afs=u,this.id=this.navParams.get("id")}return l.prototype.ionViewDidLoad=function(){var l=this;this.bloque$=this.afs.collection(r.a.CONTENT).doc(this.id).valueChanges(),this.temas$=this.afs.collection(r.a.CONTENT,function(n){return n.where("parent_id","==",l.id)}).valueChanges()},l.prototype.openTema=function(l){this.navCtrl.push("ClaseDetailPage",{type:"tema",id:l})},l}(),s=function(){return function(){}}(),f=u(447),m=u(448),p=u(449),v=u(450),b=u(451),g=u(452),R=u(453),h=u(454),C=u(455),q=u(211),_=u(210),y=u(459),E=u(29),w=u(23),k=u(3),T=u(74),I=u(131),D=u(96),P=u(6),x=u(8),F=u(14),N=u(133),O=u(16),$=u(130),L=u(7),V=u(456),j=u(53),M=u(13),A=u(31),B=u(582),J=u(196),K=u(95),Z=u(581),z=u(40),G=u(61),H=u(212),Q=u(15),S=i["ɵcrt"]({encapsulation:2,styles:[],data:{}}),U=i["ɵccf"]("page-programa-bloque",c,function(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,0,null,null,1,"page-programa-bloque",[],null,null,null,d,S)),i["ɵdid"](1,49152,null,0,c,[A.a,Q.a,o.AngularFirestore],null,null)],null,null)},{},{},[]),W=u(22),X=u(197),Y=u(62);u.d(n,"ProgramaBloquePageModuleNgFactory",function(){return ll});var ll=i["ɵcmf"](s,[],function(l){return i["ɵmod"]([i["ɵmpd"](512,i.ComponentFactoryResolver,i["ɵCodegenComponentFactoryResolver"],[[8,[f.a,m.a,p.a,v.a,b.a,g.a,R.a,h.a,C.a,U]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["ɵmpd"](4608,O.m,O.l,[i.LOCALE_ID,[2,O.w]]),i["ɵmpd"](4608,W.k,W.k,[]),i["ɵmpd"](4608,W.c,W.c,[]),i["ɵmpd"](512,O.c,O.c,[]),i["ɵmpd"](512,W.j,W.j,[]),i["ɵmpd"](512,W.d,W.d,[]),i["ɵmpd"](512,W.i,W.i,[]),i["ɵmpd"](512,X.a,X.a,[]),i["ɵmpd"](512,X.b,X.b,[]),i["ɵmpd"](512,s,s,[]),i["ɵmpd"](256,Y.a,c,[])])})},581:function(l,n,u){"use strict";function e(l){return t["ɵvid"](2,[t["ɵqud"](402653184,1,{_fixedContent:0}),t["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),t["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t["ɵncd"](null,1),t["ɵncd"](null,2)],null,null)}u.d(n,"a",function(){return a}),n.b=e;var t=u(0),a=(u(3),u(6),u(14),u(61),u(7),u(31),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(l,n,u){"use strict";function e(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,a.i,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}u.d(n,"a",function(){return d}),n.b=e;var t=u(0),a=u(16),d=(u(3),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
