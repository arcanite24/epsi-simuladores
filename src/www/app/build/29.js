<<<<<<< HEAD
webpackJsonp([29],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaDetailPageModule", function() { return GaleriaDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__galeria_detail__ = __webpack_require__(799);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GaleriaDetailPageModule = /** @class */ (function () {
    function GaleriaDetailPageModule() {
    }
    GaleriaDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__galeria_detail__["a" /* GaleriaDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__galeria_detail__["a" /* GaleriaDetailPage */]),
            ],
        })
    ], GaleriaDetailPageModule);
    return GaleriaDetailPageModule;
}());

//# sourceMappingURL=galeria-detail.module.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaleriaDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_back_back__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_models__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GaleriaDetailPage = /** @class */ (function () {
    function GaleriaDetailPage(navCtrl, navParams, back, toast, imgCtrl, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.toast = toast;
        this.imgCtrl = imgCtrl;
        this.afs = afs;
        this.id = this.navParams.get('id');
        this.uid = localStorage.getItem('uid');
        this.newNota = { text: '', title: '' };
        this.lc = false;
    }
    GaleriaDetailPage.prototype.ionViewDidLoad = function () {
        this.gallery$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].GALLERY).doc(this.id).valueChanges();
    };
    GaleriaDetailPage.prototype.openImg = function (img) {
        this.imgCtrl.create(img).present();
    };
    GaleriaDetailPage.prototype.addNota = function (title, text) {
        var _this = this;
        this.lc = true;
        this.back.addNota(title, text, 'galeria', this.id).subscribe(function (data) {
            _this.g.notas.push(data);
            _this.toast.create({ message: 'Nota agregada correctamente.', duration: 2000 }).present();
            _this.lc = false;
            _this.newNota = { text: '', title: '' };
        }, function (err) {
            _this.lc = false;
            _this.toast.create({ message: 'No se pudo agregar tu nota...', duration: 2000 }).present();
        });
    };
    GaleriaDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-galeria-detail',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\galeria-detail\galeria-detail.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Galería</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n\n\n  <ng-template #loader>\n\n    <div class="flex-col" *ngIf="!g">\n\n      <img src="assets/imgs/rings.svg">\n\n      </div>\n\n  </ng-template>\n\n\n\n  <div *ngIf="gallery$ | async as g else loader">\n\n    \n\n    <ion-slides>\n\n      <ion-slide *ngFor="let img of g.fotos">\n\n        <img [src]="img" #imagen (click)="openImg(imagen)">\n\n      </ion-slide>\n\n    </ion-slides>\n\n\n\n    <ion-item style="margin-bottom:2rem">\n\n      <h2>{{g.name}}</h2>\n\n      <p>{{g.desc}}</p>\n\n    </ion-item>\n\n\n\n    <ion-list>\n\n      <ion-list-header><strong>Notas</strong></ion-list-header>\n\n      <ion-item>\n\n        <ion-input placeholder="Titulo de la nota" [(ngModel)]="newNota.title" [disabled]="lc"></ion-input>\n\n        <button ion-button clear item-end (click)="addNota(newNota.title, newNota.text)" [disabled]="(newNota.title.length <= 0 && newNota.text.length <= 0) || newNota.title.length <= 0 || newNota.text.length <= 0">\n\n          <ion-icon name="send"></ion-icon>\n\n        </button>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-textarea placeholder="Texto de la nota" [(ngModel)]="newNota.text"></ion-textarea>\n\n      </ion-item>\n\n      <ion-item *ngFor="let n of g.notas" text-wrap>\n\n        <h2>{{n.title}}</h2>\n\n        <p>{{n.text}}</p>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\galeria-detail\galeria-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["AngularFirestore"]])
    ], GaleriaDetailPage);
    return GaleriaDetailPage;
}());

//# sourceMappingURL=galeria-detail.js.map

/***/ })

});
//# sourceMappingURL=29.js.map
=======
webpackJsonp([29],{556:function(l,n,e){"use strict";function u(l){return o["ɵvid"](0,[(l()(),o["ɵted"](-1,null,["\n    "])),(l()(),o["ɵeld"](1,0,null,null,3,"div",[["class","flex-col"]],null,null,null,null,null)),(l()(),o["ɵted"](-1,null,["\n      "])),(l()(),o["ɵeld"](3,0,null,null,0,"img",[["src","assets/imgs/rings.svg"]],null,null,null,null,null)),(l()(),o["ɵted"](-1,null,["\n    "])),(l()(),o["ɵted"](-1,null,["\n  "]))],null,null)}function t(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,null,null,10,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.navCtrl.push("ForoDetailPage",{id:l.context.$implicit.id})&&u}return u},h.b,h.a)),o["ɵdid"](1,1097728,null,3,y.a,[E.a,_.a,o.ElementRef,o.Renderer,[2,k.a]],null,null),o["ɵqud"](335544320,1,{contentLabel:0}),o["ɵqud"](603979776,2,{_buttons:1}),o["ɵqud"](603979776,3,{_icons:1}),o["ɵdid"](5,16384,null,0,F.a,[],null,null),(l()(),o["ɵted"](-1,2,["\n      "])),(l()(),o["ɵeld"](7,0,null,2,1,"h2",[],null,null,null,null,null)),(l()(),o["ɵted"](8,null,["",""])),(l()(),o["ɵted"](-1,2,["\n      "])),(l()(),o["ɵted"](-1,2,["\n    "]))],null,function(l,n){l(n,8,0,n.context.$implicit.name)})}function a(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,null,null,5,"ion-list",[],null,null,null,null,null)),o["ɵdid"](1,16384,null,0,D.a,[_.a,o.ElementRef,o.Renderer,I.a,x.l,P.a],null,null),(l()(),o["ɵted"](-1,null,["\n    "])),(l()(),o["ɵand"](16777216,null,null,1,null,t)),o["ɵdid"](4,802816,null,0,q.j,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),o["ɵted"](-1,null,["\n  "]))],function(l,n){l(n,4,0,n.context.ngIf)},null)}function d(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,null,null,10,"ion-header",[],null,null,null,null,null)),o["ɵdid"](1,16384,null,0,w.a,[_.a,o.ElementRef,o.Renderer,[2,O.a]],null,null),(l()(),o["ɵted"](-1,null,["\n\n  "])),(l()(),o["ɵeld"](3,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,j.b,j.a)),o["ɵdid"](4,49152,null,0,A.a,[L.a,[2,O.a],[2,T.a],_.a,o.ElementRef,o.Renderer],{color:[0,"color"]},null),(l()(),o["ɵted"](-1,3,["\n    "])),(l()(),o["ɵeld"](6,0,null,3,2,"ion-title",[],null,null,null,V.b,V.a)),o["ɵdid"](7,49152,null,0,$.a,[_.a,o.ElementRef,o.Renderer,[2,M.a],[2,A.a]],null,null),(l()(),o["ɵted"](-1,0,["Categorías"])),(l()(),o["ɵted"](-1,3,["\n  "])),(l()(),o["ɵted"](-1,null,["\n\n"])),(l()(),o["ɵted"](-1,null,["\n\n\n"])),(l()(),o["ɵeld"](12,0,null,null,8,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,N.b,N.a)),o["ɵdid"](13,4374528,null,0,G.a,[_.a,I.a,P.a,o.ElementRef,o.Renderer,L.a,H.a,o.NgZone,[2,O.a],[2,T.a]],null,null),(l()(),o["ɵted"](-1,1,["\n\n  "])),(l()(),o["ɵand"](0,[["loader",2]],1,0,null,u)),(l()(),o["ɵted"](-1,1,["\n\n  "])),(l()(),o["ɵand"](16777216,null,1,2,null,a)),o["ɵdid"](18,16384,null,0,q.k,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),o["ɵpid"](131072,q.b,[o.ChangeDetectorRef]),(l()(),o["ɵted"](-1,1,["\n\n"])),(l()(),o["ɵted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,4,0,"primary");l(n,18,0,o["ɵunv"](n,18,0,o["ɵnov"](n,19).transform(e.cats$)),o["ɵnov"](n,15))},function(l,n){l(n,3,0,o["ɵnov"](n,4)._hidden,o["ɵnov"](n,4)._sbPadding);l(n,12,0,o["ɵnov"](n,13).statusbarPadding,o["ɵnov"](n,13)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var o=e(0),i=(e(1),e(28),e(457)),r=(e(458),function(){function l(l,n,e){this.navCtrl=l,this.navParams=n,this.afs=e,this.cats$=this.afs.collection(i.a.THREAD_CATEGORY).valueChanges()}return l.prototype.ionViewDidLoad=function(){},l}()),c=function(){return function(){}}(),s=e(447),f=e(448),m=e(449),p=e(450),v=e(451),g=e(452),b=e(453),R=e(454),C=e(455),h=e(459),y=e(29),E=e(23),_=e(3),k=e(74),F=e(131),D=e(96),I=e(6),x=e(8),P=e(14),q=e(16),w=e(130),O=e(7),j=e(456),A=e(53),L=e(13),T=e(31),V=e(582),$=e(196),M=e(95),N=e(581),G=e(40),H=e(61),J=e(15),K=e(132),Y=o["ɵcrt"]({encapsulation:2,styles:[],data:{}}),Z=o["ɵccf"]("page-foros",r,function(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,null,null,1,"page-foros",[],null,null,null,d,Y)),o["ɵdid"](1,49152,null,0,r,[T.a,J.a,K.AngularFirestore],null,null)],null,null)},{},{},[]),z=e(22),B=e(197),Q=e(62);e.d(n,"ForosPageModuleNgFactory",function(){return S});var S=o["ɵcmf"](c,[],function(l){return o["ɵmod"]([o["ɵmpd"](512,o.ComponentFactoryResolver,o["ɵCodegenComponentFactoryResolver"],[[8,[s.a,f.a,m.a,p.a,v.a,g.a,b.a,R.a,C.a,Z]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["ɵmpd"](4608,q.m,q.l,[o.LOCALE_ID,[2,q.w]]),o["ɵmpd"](4608,z.k,z.k,[]),o["ɵmpd"](4608,z.c,z.c,[]),o["ɵmpd"](512,q.c,q.c,[]),o["ɵmpd"](512,z.j,z.j,[]),o["ɵmpd"](512,z.d,z.d,[]),o["ɵmpd"](512,z.i,z.i,[]),o["ɵmpd"](512,B.a,B.a,[]),o["ɵmpd"](512,B.b,B.b,[]),o["ɵmpd"](512,c,c,[]),o["ɵmpd"](256,Q.a,r,[])])})},581:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[t["ɵqud"](402653184,1,{_fixedContent:0}),t["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),t["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t["ɵncd"](null,1),t["ɵncd"](null,2)],null,null)}e.d(n,"a",function(){return a}),n.b=u;var t=e(0),a=(e(3),e(6),e(14),e(61),e(7),e(31),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,a.i,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}e.d(n,"a",function(){return d}),n.b=u;var t=e(0),a=e(16),d=(e(3),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
