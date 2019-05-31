<<<<<<< HEAD
webpackJsonp([11],{

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideDetailPageModule", function() { return SlideDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_detail__ = __webpack_require__(822);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlideDetailPageModule = /** @class */ (function () {
    function SlideDetailPageModule() {
    }
    SlideDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__slide_detail__["a" /* SlideDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__slide_detail__["a" /* SlideDetailPage */]),
            ],
        })
    ], SlideDetailPageModule);
    return SlideDetailPageModule;
}());

//# sourceMappingURL=slide-detail.module.js.map

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_models__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SlideDetailPage = /** @class */ (function () {
    function SlideDetailPage(navCtrl, navParams, afs, imgCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.imgCtrl = imgCtrl;
        this.id = this.navParams.get('id');
        this.lc = false;
        this.newNota = { title: '', text: '' };
    }
    SlideDetailPage.prototype.ionViewDidLoad = function () {
        this.slide$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].SLIDE).doc(this.id).valueChanges();
    };
    SlideDetailPage.prototype.openSlide = function (img) {
        this.imgCtrl.create(img).present();
    };
    SlideDetailPage.prototype.addNota = function (title, text) {
        this.lc = true;
    };
    SlideDetailPage.prototype.onSlideChange = function () {
        //this.index = this.slides.getActiveIndex()
        //
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Slides */])
    ], SlideDetailPage.prototype, "slides", void 0);
    SlideDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slide-detail',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\slide-detail\slide-detail.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Presentación</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n\n\n  <ng-template #loader>\n\n    <div class="flex-col">\n\n      <img src="assets/imgs/rings.svg">\n\n    </div>\n\n  </ng-template>\n\n\n\n  <ion-slides *ngIf="slide$ | async as s" (ionSlideDidChange)="onSlideChange()">\n\n    <ion-slide *ngFor="let slide of s.images">\n\n      <img [src]="slide" #img (click)="openSlide(img)">\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <!-- <ion-list *ngIf="s">\n\n    <ion-list-header class="flex-row">Notas</ion-list-header>\n\n    <ion-item>\n\n      <ion-input placeholder="Titulo de la nota" [(ngModel)]="newNota.title" [disabled]="lc"></ion-input>\n\n      <button ion-button clear item-end (click)="addNota(newNota.title, newNota.text)" [disabled]="(newNota.title.length <= 0 && newNota.text.length <= 0) || newNota.title.length <= 0 || newNota.text.length <= 0">\n\n        <ion-icon name="send"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-textarea placeholder="Texto de la nota" [(ngModel)]="newNota.text"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item *ngFor="let nota of notas" text-wrap>\n\n      <h2>{{nota.title}}</h2>\n\n      <p>{{nota.text}}</p>\n\n    </ion-item>\n\n  </ion-list> -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\slide-detail\slide-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], SlideDetailPage);
    return SlideDetailPage;
}());

//# sourceMappingURL=slide-detail.js.map

/***/ })

});
//# sourceMappingURL=11.js.map
=======
webpackJsonp([11],{564:function(l,n,e){"use strict";function u(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,22,"ion-header",[],null,null,null,null,null)),t["ɵdid"](1,16384,null,0,b.a,[h.a,t.ElementRef,t.Renderer,[2,R.a]],null,null),(l()(),t["ɵted"](-1,null,["\n\n  "])),(l()(),t["ɵeld"](3,0,null,null,18,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,C.b,C.a)),t["ɵdid"](4,49152,null,0,y.a,[_.a,[2,R.a],[2,k.a],h.a,t.ElementRef,t.Renderer],{color:[0,"color"]},null),(l()(),t["ɵted"](-1,3,["\n    "])),(l()(),t["ɵeld"](6,0,null,3,2,"ion-title",[],null,null,null,x.b,x.a)),t["ɵdid"](7,49152,null,0,I.a,[h.a,t.ElementRef,t.Renderer,[2,E.a],[2,y.a]],null,null),(l()(),t["ɵted"](-1,0,["Agregar Nota"])),(l()(),t["ɵted"](-1,3,["\n    "])),(l()(),t["ɵeld"](10,0,null,2,10,"ion-buttons",[["end",""]],null,null,null,null,null)),t["ɵdid"](11,16384,null,1,w.a,[h.a,t.ElementRef,t.Renderer,[2,E.a],[2,y.a]],null,null),t["ɵqud"](603979776,1,{_buttons:1}),(l()(),t["ɵted"](-1,null,["\n      "])),(l()(),t["ɵeld"](14,0,null,null,5,"button",[["icon-only",""],["ion-button",""]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.viewCtrl.dismiss()&&u}return u},D.b,D.a)),t["ɵdid"](15,1097728,[[1,4]],0,T.a,[[8,""],h.a,t.ElementRef,t.Renderer],null,null),(l()(),t["ɵted"](-1,0,["\n        "])),(l()(),t["ɵeld"](17,0,null,0,1,"ion-icon",[["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t["ɵdid"](18,147456,null,0,P.a,[h.a,t.ElementRef,t.Renderer],{name:[0,"name"]},null),(l()(),t["ɵted"](-1,0,["\n      "])),(l()(),t["ɵted"](-1,null,["\n    "])),(l()(),t["ɵted"](-1,3,["\n  "])),(l()(),t["ɵted"](-1,null,["\n\n"])),(l()(),t["ɵted"](-1,null,["\n\n\n"])),(l()(),t["ɵeld"](24,0,null,null,41,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,q.b,q.a)),t["ɵdid"](25,4374528,null,0,N.a,[h.a,M.a,V.a,t.ElementRef,t.Renderer,_.a,A.a,t.NgZone,[2,R.a],[2,k.a]],null,null),(l()(),t["ɵted"](-1,1,["\n\n  "])),(l()(),t["ɵeld"](27,0,null,1,30,"ion-list",[],null,null,null,null,null)),t["ɵdid"](28,16384,null,0,F.a,[h.a,t.ElementRef,t.Renderer,M.a,K.l,V.a],null,null),(l()(),t["ɵted"](-1,null,["\n\n    "])),(l()(),t["ɵeld"](30,0,null,null,12,"ion-item",[["class","item item-block"]],null,null,null,L.b,L.a)),t["ɵdid"](31,1097728,null,3,O.a,[j.a,h.a,t.ElementRef,t.Renderer,[2,B.a]],null,null),t["ɵqud"](335544320,2,{contentLabel:0}),t["ɵqud"](603979776,3,{_buttons:1}),t["ɵqud"](603979776,4,{_icons:1}),t["ɵdid"](35,16384,null,0,S.a,[],null,null),(l()(),t["ɵted"](-1,2,["\n      "])),(l()(),t["ɵeld"](37,0,null,3,4,"ion-input",[["placeholder","Titulo"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var u=!0;if("ngModelChange"===n){u=!1!==(l.component.addData.title=e)&&u}return u},U.b,U.a)),t["ɵdid"](38,671744,null,0,J.h,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),t["ɵprd"](2048,null,J.f,null,[J.h]),t["ɵdid"](40,16384,null,0,J.g,[J.f],null,null),t["ɵdid"](41,5423104,null,0,Z.a,[h.a,M.a,j.a,_.a,t.ElementRef,t.Renderer,[2,N.a],[2,O.a],[2,J.f],V.a],{type:[0,"type"],placeholder:[1,"placeholder"]},null),(l()(),t["ɵted"](-1,2,["\n    "])),(l()(),t["ɵted"](-1,null,["\n\n    "])),(l()(),t["ɵeld"](44,0,null,null,12,"ion-item",[["class","item item-block"]],null,null,null,L.b,L.a)),t["ɵdid"](45,1097728,null,3,O.a,[j.a,h.a,t.ElementRef,t.Renderer,[2,B.a]],null,null),t["ɵqud"](335544320,5,{contentLabel:0}),t["ɵqud"](603979776,6,{_buttons:1}),t["ɵqud"](603979776,7,{_icons:1}),t["ɵdid"](49,16384,null,0,S.a,[],null,null),(l()(),t["ɵted"](-1,2,["\n      "])),(l()(),t["ɵeld"](51,0,null,3,4,"ion-textarea",[["placeholder","Texto"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var u=!0;if("ngModelChange"===n){u=!1!==(l.component.addData.text=e)&&u}return u},U.b,U.a)),t["ɵdid"](52,671744,null,0,J.h,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),t["ɵprd"](2048,null,J.f,null,[J.h]),t["ɵdid"](54,16384,null,0,J.g,[J.f],null,null),t["ɵdid"](55,5423104,null,0,Z.a,[h.a,M.a,j.a,_.a,t.ElementRef,t.Renderer,[2,N.a],[2,O.a],[2,J.f],V.a],{placeholder:[0,"placeholder"]},null),(l()(),t["ɵted"](-1,2,["\n    "])),(l()(),t["ɵted"](-1,null,["\n\n  "])),(l()(),t["ɵted"](-1,1,["\n\n  "])),(l()(),t["ɵeld"](59,0,null,1,5,"div",[["class","flex-col"]],null,null,null,null,null)),(l()(),t["ɵted"](-1,null,["\n    "])),(l()(),t["ɵeld"](61,0,null,null,2,"button",[["block",""],["ion-button",""]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;if("click"===n){u=!1!==t.addNota(t.addData.title,t.addData.text)&&u}return u},D.b,D.a)),t["ɵdid"](62,1097728,null,0,T.a,[[8,""],h.a,t.ElementRef,t.Renderer],{block:[0,"block"]},null),(l()(),t["ɵted"](-1,0,["Agregar Nota"])),(l()(),t["ɵted"](-1,null,["\n  "])),(l()(),t["ɵted"](-1,1,["\n\n"])),(l()(),t["ɵted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,4,0,"primary");l(n,18,0,"close");l(n,38,0,e.addData.title);l(n,41,0,"text","Titulo");l(n,52,0,e.addData.text);l(n,55,0,"Texto");l(n,62,0,"")},function(l,n){l(n,3,0,t["ɵnov"](n,4)._hidden,t["ɵnov"](n,4)._sbPadding);l(n,17,0,t["ɵnov"](n,18)._hidden);l(n,24,0,t["ɵnov"](n,25).statusbarPadding,t["ɵnov"](n,25)._hasRefresher);l(n,37,0,t["ɵnov"](n,40).ngClassUntouched,t["ɵnov"](n,40).ngClassTouched,t["ɵnov"](n,40).ngClassPristine,t["ɵnov"](n,40).ngClassDirty,t["ɵnov"](n,40).ngClassValid,t["ɵnov"](n,40).ngClassInvalid,t["ɵnov"](n,40).ngClassPending);l(n,51,0,t["ɵnov"](n,54).ngClassUntouched,t["ɵnov"](n,54).ngClassTouched,t["ɵnov"](n,54).ngClassPristine,t["ɵnov"](n,54).ngClassDirty,t["ɵnov"](n,54).ngClassValid,t["ɵnov"](n,54).ngClassInvalid,t["ɵnov"](n,54).ngClassPending)})}Object.defineProperty(n,"__esModule",{value:!0});var t=e(0),a=(e(1),e(28),e(73)),d=function(){function l(l,n,e,u,t,a){this.navCtrl=l,this.navParams=n,this.viewCtrl=e,this.toast=u,this.back=t,this.load=a,this.addData={},this.id=this.navParams.get("id"),this.type=this.navParams.get("type")}return l.prototype.addNota=function(l,n){var e=this;if(!l)return this.toast.create({message:"Ingresa un titulo",duration:2e3}).present();if(!n)return this.toast.create({message:"Ingresa un text",duration:2e3}).present();var u=this.load.create({content:"Agregando..."});u.present(),this.back.addNota(l,n,this.type,this.id).subscribe(function(l){u.dismiss(),e.viewCtrl.dismiss(l)},function(l){e.toast.create({message:"No se pudo agregar tu nota...",duration:2e3}).present(),u.dismiss()})},l}(),o=function(){return function(){}}(),i=e(447),r=e(448),s=e(449),c=e(450),f=e(451),p=e(452),m=e(453),g=e(454),v=e(455),b=e(130),h=e(3),R=e(7),C=e(456),y=e(53),_=e(13),k=e(31),x=e(582),I=e(196),E=e(95),w=e(201),D=e(64),T=e(32),P=e(63),q=e(581),N=e(40),M=e(6),V=e(14),A=e(61),F=e(96),K=e(8),L=e(459),O=e(29),j=e(23),B=e(74),S=e(131),U=e(583),J=e(22),Z=e(199),z=e(15),G=e(97),H=e(134),Q=t["ɵcrt"]({encapsulation:2,styles:[],data:{}}),W=t["ɵccf"]("page-notas-add",d,function(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,1,"page-notas-add",[],null,null,null,u,Q)),t["ɵdid"](1,49152,null,0,d,[k.a,z.a,R.a,G.a,a.a,H.a],null,null)],null,null)},{},{},[]),X=e(16),Y=e(197),$=e(62);e.d(n,"NotasAddPageModuleNgFactory",function(){return ll});var ll=t["ɵcmf"](o,[],function(l){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[i.a,r.a,s.a,c.a,f.a,p.a,m.a,g.a,v.a,W]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,X.m,X.l,[t.LOCALE_ID,[2,X.w]]),t["ɵmpd"](4608,J.k,J.k,[]),t["ɵmpd"](4608,J.c,J.c,[]),t["ɵmpd"](512,X.c,X.c,[]),t["ɵmpd"](512,J.j,J.j,[]),t["ɵmpd"](512,J.d,J.d,[]),t["ɵmpd"](512,J.i,J.i,[]),t["ɵmpd"](512,Y.a,Y.a,[]),t["ɵmpd"](512,Y.b,Y.b,[]),t["ɵmpd"](512,o,o,[]),t["ɵmpd"](256,$.a,d,[])])})},581:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[t["ɵqud"](402653184,1,{_fixedContent:0}),t["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),t["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t["ɵncd"](null,1),t["ɵncd"](null,2)],null,null)}e.d(n,"a",function(){return a}),n.b=u;var t=e(0),a=(e(3),e(6),e(14),e(61),e(7),e(31),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,a.i,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}e.d(n,"a",function(){return d}),n.b=u;var t=e(0),a=e(16),d=(e(3),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},583:function(l,n,e){"use strict";function u(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,0,[[1,0],["textInput",1]],null,1,"input",[["class","text-input"],["dir","auto"]],[[8,"type",0],[1,"aria-labelledby",0],[1,"min",0],[1,"max",0],[1,"step",0],[1,"autocomplete",0],[1,"autocorrect",0],[8,"placeholder",0],[8,"disabled",0],[8,"readOnly",0]],[[null,"input"],[null,"blur"],[null,"focus"],[null,"keydown"]],function(l,n,e){var u=!0,t=l.component;if("input"===n){u=!1!==t.onInput(e)&&u}if("blur"===n){u=!1!==t.onBlur(e)&&u}if("focus"===n){u=!1!==t.onFocus(e)&&u}if("keydown"===n){u=!1!==t.onKeydown(e)&&u}return u},null,null)),i["ɵdid"](1,278528,null,0,r.i,[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(l,n){l(n,1,0,"text-input","text-input-"+n.component._mode)},function(l,n){var e=n.component;l(n,0,0,e._type,e._labelId,e.min,e.max,e.step,e.autocomplete,e.autocorrect,e.placeholder,e._disabled,e._readonly)})}function t(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,0,[[1,0],["textInput",1]],null,1,"textarea",[["class","text-input"]],[[1,"aria-labelledby",0],[1,"autocomplete",0],[1,"autocorrect",0],[8,"placeholder",0],[8,"disabled",0],[8,"readOnly",0]],[[null,"input"],[null,"blur"],[null,"focus"],[null,"keydown"]],function(l,n,e){var u=!0,t=l.component;if("input"===n){u=!1!==t.onInput(e)&&u}if("blur"===n){u=!1!==t.onBlur(e)&&u}if("focus"===n){u=!1!==t.onFocus(e)&&u}if("keydown"===n){u=!1!==t.onKeydown(e)&&u}return u},null,null)),i["ɵdid"](1,278528,null,0,r.i,[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(l,n){l(n,1,0,"text-input","text-input-"+n.component._mode)},function(l,n){var e=n.component;l(n,0,0,e._labelId,e.autocomplete,e.autocorrect,e.placeholder,e._disabled,e._readonly)})}function a(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,0,null,null,1,"button",[["class","text-input-clear-icon"],["clear",""],["ion-button",""],["tabindex","-1"],["type","button"]],null,[[null,"click"],[null,"mousedown"]],function(l,n,e){var u=!0,t=l.component;if("click"===n){u=!1!==t.clearTextInput(e)&&u}if("mousedown"===n){u=!1!==t.clearTextInput(e)&&u}return u},s.b,s.a)),i["ɵdid"](1,1097728,null,0,c.a,[[8,""],f.a,i.ElementRef,i.Renderer],{clear:[0,"clear"]},null)],function(l,n){l(n,1,0,"")},null)}function d(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,0,null,null,0,"div",[["class","input-cover"]],null,[[null,"touchstart"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"]],function(l,n,e){var u=!0,t=l.component;if("touchstart"===n){u=!1!==t._pointerStart(e)&&u}if("touchend"===n){u=!1!==t._pointerEnd(e)&&u}if("mousedown"===n){u=!1!==t._pointerStart(e)&&u}if("mouseup"===n){u=!1!==t._pointerEnd(e)&&u}return u},null,null))],null,null)}function o(l){return i["ɵvid"](2,[i["ɵqud"](671088640,1,{_native:0}),(l()(),i["ɵand"](16777216,null,null,1,null,u)),i["ɵdid"](2,16384,null,0,r.k,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),i["ɵand"](16777216,null,null,1,null,t)),i["ɵdid"](4,16384,null,0,r.k,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),i["ɵand"](16777216,null,null,1,null,a)),i["ɵdid"](6,16384,null,0,r.k,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),i["ɵand"](16777216,null,null,1,null,d)),i["ɵdid"](8,16384,null,0,r.k,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,2,0,!e._isTextarea);l(n,4,0,e._isTextarea);l(n,6,0,e._clearInput);l(n,8,0,e._useAssist)},null)}e.d(n,"a",function(){return p}),n.b=o;var i=e(0),r=e(16),s=e(64),c=e(32),f=e(3),p=(e(6),e(23),e(14),i["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
