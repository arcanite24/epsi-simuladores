<<<<<<< HEAD
webpackJsonp([31],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForoDetailPageModule", function() { return ForoDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foro_detail__ = __webpack_require__(797);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForoDetailPageModule = /** @class */ (function () {
    function ForoDetailPageModule() {
    }
    ForoDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__foro_detail__["a" /* ForoDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__foro_detail__["a" /* ForoDetailPage */]),
            ],
        })
    ], ForoDetailPageModule);
    return ForoDetailPageModule;
}());

//# sourceMappingURL=foro-detail.module.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForoDetailPage; });
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




var ForoDetailPage = /** @class */ (function () {
    function ForoDetailPage(navCtrl, navParams, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
    }
    ForoDetailPage.prototype.ngOnInit = function () {
    };
    ForoDetailPage.prototype.ionViewDidLoad = function () {
        var id = this.navParams.get('id');
        this.thread$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].THREAD, function (ref) { return ref.where('cat_id', '==', id); }).valueChanges();
    };
    ForoDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-foro-detail',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\foro-detail\foro-detail.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Categoría</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n\n\n  <ng-template #loader>\n\n    <div class="flex-col">\n\n      <img src="assets/imgs/rings.svg">\n\n      </div>\n\n  </ng-template>\n\n\n\n  <ion-list *ngIf="thread$ | async as threads else loader">\n\n    <ion-list-header>Hilos</ion-list-header>\n\n    <ion-item *ngFor="let h of threads" (click)="navCtrl.push(\'HiloDetailPage\', {id: h.id})">\n\n      <h2>{{h.title}}</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\foro-detail\foro-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"]])
    ], ForoDetailPage);
    return ForoDetailPage;
}());

//# sourceMappingURL=foro-detail.js.map

/***/ })

});
//# sourceMappingURL=31.js.map
=======
webpackJsonp([31],{555:function(l,n,e){"use strict";function u(l){return i["ɵvid"](0,[(l()(),i["ɵted"](-1,null,["\n    "])),(l()(),i["ɵeld"](1,0,null,null,3,"div",[["class","flex-col"]],null,null,null,null,null)),(l()(),i["ɵted"](-1,null,["\n      "])),(l()(),i["ɵeld"](3,0,null,null,0,"img",[["src","assets/imgs/rings.svg"]],null,null,null,null,null)),(l()(),i["ɵted"](-1,null,["\n    "])),(l()(),i["ɵted"](-1,null,["\n  "]))],null,null)}function t(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,0,null,null,8,"div",[["class","home-tile"]],null,null,null,null,null)),(l()(),i["ɵted"](-1,null,["\n      "])),(l()(),i["ɵeld"](2,0,null,null,5,"ion-card",[],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.openMateria(l.context.$implicit.id)&&u}return u},null,null)),i["ɵdid"](3,16384,null,0,y.a,[P.a,i.ElementRef,i.Renderer],null,null),(l()(),i["ɵted"](-1,null,["\n        "])),(l()(),i["ɵeld"](5,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),i["ɵted"](-1,null,["\n        "])),(l()(),i["ɵted"](-1,null,["\n      "])),(l()(),i["ɵted"](-1,null,["\n    "]))],null,function(l,n){l(n,5,0,n.context.$implicit.cover)})}function a(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,0,null,null,4,"div",[["class","home-grid"]],null,null,null,null,null)),(l()(),i["ɵted"](-1,null,["\n    "])),(l()(),i["ɵand"](16777216,null,null,1,null,t)),i["ɵdid"](3,802816,null,0,E.j,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),i["ɵted"](-1,null,["\n  "]))],function(l,n){l(n,3,0,n.context.ngIf)},null)}function d(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,0,null,null,10,"ion-header",[],null,null,null,null,null)),i["ɵdid"](1,16384,null,0,_.a,[P.a,i.ElementRef,i.Renderer,[2,k.a]],null,null),(l()(),i["ɵted"](-1,null,["\n\n  "])),(l()(),i["ɵeld"](3,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,x.b,x.a)),i["ɵdid"](4,49152,null,0,F.a,[M.a,[2,k.a],[2,D.a],P.a,i.ElementRef,i.Renderer],{color:[0,"color"]},null),(l()(),i["ɵted"](-1,3,["\n    "])),(l()(),i["ɵeld"](6,0,null,3,2,"ion-title",[],null,null,null,I.b,I.a)),i["ɵdid"](7,49152,null,0,O.a,[P.a,i.ElementRef,i.Renderer,[2,j.a],[2,F.a]],null,null),(l()(),i["ɵted"](-1,0,["Especialidades"])),(l()(),i["ɵted"](-1,3,["\n  "])),(l()(),i["ɵted"](-1,null,["\n\n"])),(l()(),i["ɵted"](-1,null,["\n\n\n"])),(l()(),i["ɵeld"](12,0,null,null,8,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,w.b,w.a)),i["ɵdid"](13,4374528,null,0,N.a,[P.a,T.a,V.a,i.ElementRef,i.Renderer,M.a,$.a,i.NgZone,[2,k.a],[2,D.a]],null,null),(l()(),i["ɵted"](-1,1,["\n\n  "])),(l()(),i["ɵand"](0,[["loader",2]],1,0,null,u)),(l()(),i["ɵted"](-1,1,["\n\n  "])),(l()(),i["ɵand"](16777216,null,1,2,null,a)),i["ɵdid"](18,16384,null,0,E.k,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),i["ɵpid"](131072,E.b,[i.ChangeDetectorRef]),(l()(),i["ɵted"](-1,1,["\n  \n"])),(l()(),i["ɵted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,4,0,"primary");l(n,18,0,i["ɵunv"](n,18,0,i["ɵnov"](n,19).transform(e.materias$)))},function(l,n){l(n,3,0,i["ɵnov"](n,4)._hidden,i["ɵnov"](n,4)._sbPadding);l(n,12,0,i["ɵnov"](n,13).statusbarPadding,i["ɵnov"](n,13)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var i=e(0),r=(e(1),e(28),e(458),e(457)),o=e(24),s=function(){function l(l,n,e){this.navCtrl=l,this.navParams=n,this.afs=e,this.isPrograma=this.navParams.get("isPrograma")}return l.prototype.ionViewDidLoad=function(){this.materias$=this.afs.collection(r.a.CONTENT).valueChanges().pipe(Object(o.map)(function(l){return l.filter(function(l){return l.name.includes("Temprano")})}))},l.prototype.openMateria=function(l){this.navCtrl.push(this.isPrograma?"ProgramaMateriaPage":"MateriaPage",{id:l})},l}(),c=function(){return function(){}}(),f=e(447),m=e(448),p=e(449),v=e(450),g=e(451),b=e(452),R=e(453),h=e(454),C=e(455),y=e(203),P=e(3),E=e(16),_=e(130),k=e(7),x=e(456),F=e(53),M=e(13),D=e(31),I=e(582),O=e(196),j=e(95),w=e(581),N=e(40),T=e(6),V=e(14),$=e(61),L=e(15),q=e(132),A=i["ɵcrt"]({encapsulation:2,styles:[],data:{}}),J=i["ɵccf"]("page-especialidades",s,function(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,0,null,null,1,"page-especialidades",[],null,null,null,d,A)),i["ɵdid"](1,49152,null,0,s,[D.a,L.a,q.AngularFirestore],null,null)],null,null)},{},{},[]),K=e(22),Z=e(197),z=e(62);e.d(n,"EspecialidadesPageModuleNgFactory",function(){return B});var B=i["ɵcmf"](c,[],function(l){return i["ɵmod"]([i["ɵmpd"](512,i.ComponentFactoryResolver,i["ɵCodegenComponentFactoryResolver"],[[8,[f.a,m.a,p.a,v.a,g.a,b.a,R.a,h.a,C.a,J]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["ɵmpd"](4608,E.m,E.l,[i.LOCALE_ID,[2,E.w]]),i["ɵmpd"](4608,K.k,K.k,[]),i["ɵmpd"](4608,K.c,K.c,[]),i["ɵmpd"](512,E.c,E.c,[]),i["ɵmpd"](512,K.j,K.j,[]),i["ɵmpd"](512,K.d,K.d,[]),i["ɵmpd"](512,K.i,K.i,[]),i["ɵmpd"](512,Z.a,Z.a,[]),i["ɵmpd"](512,Z.b,Z.b,[]),i["ɵmpd"](512,c,c,[]),i["ɵmpd"](256,z.a,s,[])])})},581:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[t["ɵqud"](402653184,1,{_fixedContent:0}),t["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),t["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t["ɵncd"](null,1),t["ɵncd"](null,2)],null,null)}e.d(n,"a",function(){return a}),n.b=u;var t=e(0),a=(e(3),e(6),e(14),e(61),e(7),e(31),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,a.i,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}e.d(n,"a",function(){return d}),n.b=u;var t=e(0),a=e(16),d=(e(3),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
