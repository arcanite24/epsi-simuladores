<<<<<<< HEAD
webpackJsonp([17],{

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramaMateriaPageModule", function() { return ProgramaMateriaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__programa_materia__ = __webpack_require__(816);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProgramaMateriaPageModule = /** @class */ (function () {
    function ProgramaMateriaPageModule() {
    }
    ProgramaMateriaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__programa_materia__["a" /* ProgramaMateriaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__programa_materia__["a" /* ProgramaMateriaPage */]),
            ],
        })
    ], ProgramaMateriaPageModule);
    return ProgramaMateriaPageModule;
}());

//# sourceMappingURL=programa-materia.module.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramaMateriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_models__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProgramaMateriaPage = /** @class */ (function () {
    function ProgramaMateriaPage(afs, navParams, navCtrl) {
        this.afs = afs;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.id = this.navParams.get('id');
    }
    ProgramaMateriaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.materia$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].CONTENT).doc(this.id).valueChanges();
        this.bloques$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].CONTENT, function (ref) { return ref.where('parent_id', '==', _this.id); }).valueChanges();
    };
    ProgramaMateriaPage.prototype.openBloque = function (id) {
        this.navCtrl.push('ProgramaBloquePage', { id: id });
    };
    ProgramaMateriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-programa-materia',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\programa-materia\programa-materia.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Materia</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n  <ion-grid>\n\n\n\n    <ion-row *ngIf="materia$ | async as materia">\n\n      <ion-col col-12>\n\n        <h4 text-center>{{materia.name}}</h4>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="bloques$ | async as bloques">\n\n      <ion-col col-6 *ngFor="let bloque of bloques" (click)="openBloque(bloque.id)">\n\n        <div class="flex flex-col flex-center">\n\n          <img [src]="bloque.cover || \'https://via.placeholder.com/128\'" alt="" class="w-100">\n\n          <strong text-center="">{{bloque.name}}</strong>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\programa-materia\programa-materia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], ProgramaMateriaPage);
    return ProgramaMateriaPage;
}());

//# sourceMappingURL=programa-materia.js.map

/***/ })

});
//# sourceMappingURL=17.js.map
=======
webpackJsonp([17],{579:function(l,n,e){"use strict";function u(l){return r["ɵvid"](0,[(l()(),r["ɵted"](-1,null,["\n    "])),(l()(),r["ɵeld"](1,0,null,null,6,"div",[["class","flex-col"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n      "])),(l()(),r["ɵeld"](3,0,null,null,0,"img",[["src","assets/imgs/rings.svg"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n      "])),(l()(),r["ɵeld"](5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["Cargar las infografías puede llevar más de lo esperado."])),(l()(),r["ɵted"](-1,null,["\n    "])),(l()(),r["ɵted"](-1,null,["\n  "]))],null,null)}function t(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,6,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.navCtrl.push("SlideDetailPage",{id:l.context.$implicit.id})&&u}return u},E.b,E.a)),r["ɵdid"](1,1097728,null,3,O.a,[D.a,I.a,r.ElementRef,r.Renderer,[2,j.a]],null,null),r["ɵqud"](335544320,4,{contentLabel:0}),r["ɵqud"](603979776,5,{_buttons:1}),r["ɵqud"](603979776,6,{_icons:1}),r["ɵdid"](5,16384,null,0,k.a,[],null,null),(l()(),r["ɵted"](6,2,["",""]))],null,function(l,n){l(n,6,0,n.context.$implicit.name)})}function a(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,15,"ion-list",[],null,null,null,null,null)),r["ɵdid"](1,16384,null,0,x.a,[I.a,r.ElementRef,r.Renderer,F.a,q.l,w.a],null,null),(l()(),r["ɵted"](-1,null,["\n      "])),(l()(),r["ɵeld"](3,0,null,null,7,"ion-list-header",[["class","item"],["style","font-size:1.75rem"]],null,null,null,E.b,E.a)),r["ɵdid"](4,1097728,null,3,O.a,[D.a,I.a,r.ElementRef,r.Renderer,[2,j.a]],null,null),r["ɵqud"](335544320,1,{contentLabel:0}),r["ɵqud"](603979776,2,{_buttons:1}),r["ɵqud"](603979776,3,{_icons:1}),r["ɵdid"](8,16384,null,0,P.a,[I.a,r.Renderer,r.ElementRef,[8,null]],null,null),(l()(),r["ɵeld"](9,0,null,2,1,"strong",[],null,null,null,null,null)),(l()(),r["ɵted"](10,null,["",""])),(l()(),r["ɵted"](-1,null,["\n      "])),(l()(),r["ɵand"](16777216,null,null,2,null,t)),r["ɵdid"](13,802816,null,0,$.j,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),r["ɵpid"](131072,$.b,[r.ChangeDetectorRef]),(l()(),r["ɵted"](-1,null,["\n    "]))],function(l,n){l(n,13,0,r["ɵunv"](n,13,0,r["ɵnov"](n,14).transform(n.context.$implicit.children$)))},function(l,n){l(n,10,0,n.context.$implicit.name)})}function d(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n    "])),(l()(),r["ɵand"](16777216,null,null,1,null,a)),r["ɵdid"](3,802816,null,0,$.j,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),r["ɵted"](-1,null,["\n  "]))],function(l,n){l(n,3,0,n.context.ngIf)},null)}function i(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,10,"ion-header",[],null,null,null,null,null)),r["ɵdid"](1,16384,null,0,L.a,[I.a,r.ElementRef,r.Renderer,[2,V.a]],null,null),(l()(),r["ɵted"](-1,null,["\n\n  "])),(l()(),r["ɵeld"](3,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,S.b,S.a)),r["ɵdid"](4,49152,null,0,T.a,[A.a,[2,V.a],[2,M.a],I.a,r.ElementRef,r.Renderer],{color:[0,"color"]},null),(l()(),r["ɵted"](-1,3,["\n    "])),(l()(),r["ɵeld"](6,0,null,3,2,"ion-title",[],null,null,null,N.b,N.a)),r["ɵdid"](7,49152,null,0,z.a,[I.a,r.ElementRef,r.Renderer,[2,G.a],[2,T.a]],null,null),(l()(),r["ɵted"](-1,0,["Presentaciones"])),(l()(),r["ɵted"](-1,3,["\n  "])),(l()(),r["ɵted"](-1,null,["\n\n"])),(l()(),r["ɵted"](-1,null,["\n\n\n"])),(l()(),r["ɵeld"](12,0,null,null,8,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,J.b,J.a)),r["ɵdid"](13,4374528,null,0,K.a,[I.a,F.a,w.a,r.ElementRef,r.Renderer,A.a,Y.a,r.NgZone,[2,V.a],[2,M.a]],null,null),(l()(),r["ɵted"](-1,1,["\n\n  "])),(l()(),r["ɵand"](0,[["loader",2]],1,0,null,u)),(l()(),r["ɵted"](-1,1,["\n\n  "])),(l()(),r["ɵand"](16777216,null,1,2,null,d)),r["ɵdid"](18,16384,null,0,$.k,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),r["ɵpid"](131072,$.b,[r.ChangeDetectorRef]),(l()(),r["ɵted"](-1,1,["\n\n"])),(l()(),r["ɵted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,4,0,"primary");l(n,18,0,r["ɵunv"](n,18,0,r["ɵnov"](n,19).transform(e.slides$)),r["ɵnov"](n,15))},function(l,n){l(n,3,0,r["ɵnov"](n,4)._hidden,r["ɵnov"](n,4)._sbPadding);l(n,12,0,r["ɵnov"](n,13).statusbarPadding,r["ɵnov"](n,13)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var r=e(0),o=(e(1),e(28),e(457)),s=(e(458),e(24)),c=this&&this.__assign||Object.assign||function(l){for(var n,e=1,u=arguments.length;e<u;e++){n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(l[t]=n[t])}return l},f=function(){function l(l,n,e){this.navCtrl=l,this.navParams=n,this.afs=e}return l.prototype.ionViewDidLoad=function(){var l=this;this.slides$=this.afs.collection(o.a.SLIDE_CATEGORY).valueChanges().pipe(Object(s.map)(function(n){return n.map(function(n){return c({},n,{children$:l.afs.collection(o.a.SLIDE,function(l){return l.where("cat_id","==",n.id)}).valueChanges()})})}),Object(s.tap)(console.log))},l}(),m=function(){return function(){}}(),p=e(447),v=e(448),g=e(449),b=e(450),R=e(451),h=e(452),C=e(453),_=e(454),y=e(455),E=e(459),O=e(29),D=e(23),I=e(3),j=e(74),k=e(131),x=e(96),F=e(6),q=e(8),w=e(14),P=e(133),$=e(16),L=e(130),V=e(7),S=e(456),T=e(53),A=e(13),M=e(31),N=e(582),z=e(196),G=e(95),J=e(581),K=e(40),Y=e(61),Z=e(15),B=e(132),H=r["ɵcrt"]({encapsulation:2,styles:[],data:{}}),Q=r["ɵccf"]("page-slides",f,function(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,1,"page-slides",[],null,null,null,i,H)),r["ɵdid"](1,49152,null,0,f,[M.a,Z.a,B.AngularFirestore],null,null)],null,null)},{},{},[]),U=e(22),W=e(197),X=e(62);e.d(n,"SlidesPageModuleNgFactory",function(){return ll});var ll=r["ɵcmf"](m,[],function(l){return r["ɵmod"]([r["ɵmpd"](512,r.ComponentFactoryResolver,r["ɵCodegenComponentFactoryResolver"],[[8,[p.a,v.a,g.a,b.a,R.a,h.a,C.a,_.a,y.a,Q]],[3,r.ComponentFactoryResolver],r.NgModuleRef]),r["ɵmpd"](4608,$.m,$.l,[r.LOCALE_ID,[2,$.w]]),r["ɵmpd"](4608,U.k,U.k,[]),r["ɵmpd"](4608,U.c,U.c,[]),r["ɵmpd"](512,$.c,$.c,[]),r["ɵmpd"](512,U.j,U.j,[]),r["ɵmpd"](512,U.d,U.d,[]),r["ɵmpd"](512,U.i,U.i,[]),r["ɵmpd"](512,W.a,W.a,[]),r["ɵmpd"](512,W.b,W.b,[]),r["ɵmpd"](512,m,m,[]),r["ɵmpd"](256,X.a,f,[])])})},581:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[t["ɵqud"](402653184,1,{_fixedContent:0}),t["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),t["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t["ɵncd"](null,1),t["ɵncd"](null,2)],null,null)}e.d(n,"a",function(){return a}),n.b=u;var t=e(0),a=(e(3),e(6),e(14),e(61),e(7),e(31),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,a.i,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}e.d(n,"a",function(){return d}),n.b=u;var t=e(0),a=e(16),d=(e(3),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
