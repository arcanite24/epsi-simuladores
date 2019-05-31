<<<<<<< HEAD
webpackJsonp([23],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasGlobalPageModule", function() { return NotasGlobalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notas_global__ = __webpack_require__(812);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotasGlobalPageModule = /** @class */ (function () {
    function NotasGlobalPageModule() {
    }
    NotasGlobalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notas_global__["a" /* NotasGlobalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notas_global__["a" /* NotasGlobalPage */]),
            ],
        })
    ], NotasGlobalPageModule);
    return NotasGlobalPageModule;
}());

//# sourceMappingURL=notas-global.module.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasGlobalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_back_back__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotasGlobalPage = /** @class */ (function () {
    function NotasGlobalPage(navCtrl, navParams, back, toast, load) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.toast = toast;
        this.load = load;
        this.nTema = [];
        this.nSubtema = [];
        this.nGaleria = [];
        this.nAsesoria = [];
        this.nSlide = [];
    }
    NotasGlobalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var l = this.load.create({ content: 'Cargando notas...' });
        l.present();
        this.back.getMyNotas(localStorage.getItem('uid')).subscribe(function (data) {
            _this.nTema = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.uniqBy(data.filter(function (n) { return n.tema; }), function (n) { return n.tema.id; });
            _this.nSubtema = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.uniqBy(data.filter(function (n) { return n.subtema; }), function (n) { return n.subtema.id; });
            _this.nGaleria = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.uniqBy(data.filter(function (n) { return n.galeria; }), function (n) { return n.galeria.id; });
            _this.nAsesoria = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.uniqBy(data.filter(function (n) { return n.asesoria; }), function (n) { return n.asesoria.id; });
            _this.nSlide = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.uniqBy(data.filter(function (n) { return n.slide; }), function (n) { return n.slide.id; });
            console.log(_this.nTema);
            l.dismiss();
        }, function (err) {
            l.dismiss();
            _this.toast.create({ message: 'No se pudieron cargar las notas...', duration: 2000 }).present();
            _this.navCtrl.setRoot('HomePage');
        });
    };
    NotasGlobalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-notas-global',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\notas-global\notas-global.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Mis Notas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n\n\n  <ion-list>\n\n    <ion-list-header>Temas</ion-list-header>\n\n    <ion-item *ngFor="let t of nTema" (click)="navCtrl.push(\'NotasGlobalDetailPage\', {rest: \'tema\', id: t.tema.id})" >{{t.tema ? t.tema.name : \'Sin Tema\'}}</ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list class="mt-3">\n\n    <ion-list-header>Subtemas</ion-list-header>\n\n    <ion-item *ngFor="let t of nSubtema" (click)="navCtrl.push(\'NotasGlobalDetailPage\', {rest: \'subtema\', id: t.subtema.id})" >{{t.subtema ? t.subtema.name : \'Sin Subtema\'}}</ion-item>\n\n    <ion-item *ngIf="nSubtema.length <= 0" >No hay notas que mostrar</ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list class="mt-3">\n\n    <ion-list-header>Galerías</ion-list-header>\n\n    <ion-item *ngFor="let t of nGaleria" (click)="navCtrl.push(\'NotasGlobalDetailPage\', {rest: \'galeria\', id: t.galeria.id})" >{{t.galeria ? t.galeria.name : \'Sin Galería\'}}</ion-item>\n\n    <ion-item *ngIf="nGaleria.length <= 0" >No hay notas que mostrar</ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list class="mt-3">\n\n    <ion-list-header>Asesorías</ion-list-header>\n\n    <ion-item *ngFor="let t of nAsesoria" (click)="navCtrl.push(\'NotasGlobalDetailPage\', {rest: \'asesoria\', id: t.asesoria.id})" >{{t.asesoria ? t.asesoria.name : \'Sin Asesoría\'}}</ion-item>\n\n    <ion-item *ngIf="nAsesoria.length <= 0" >No hay notas que mostrar</ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list class="mt-3">\n\n    <ion-list-header>Presentaciones</ion-list-header>\n\n    <ion-item *ngFor="let t of nSlide" (click)="navCtrl.push(\'NotasGlobalDetailPage\', {rest: \'slide\', id: t.slide.id})" >{{t.slide ? t.slide.name : \'Sin Presentación\'}}</ion-item>\n\n    <ion-item *ngIf="nSlide.length <= 0" >No hay notas que mostrar</ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\notas-global\notas-global.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* LoadingController */]])
    ], NotasGlobalPage);
    return NotasGlobalPage;
}());

//# sourceMappingURL=notas-global.js.map

/***/ })

});
//# sourceMappingURL=23.js.map
=======
webpackJsonp([23],{572:function(l,n,u){"use strict";function e(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,null,null,9,"ion-row",[["class","row"]],null,null,null,null,null)),o["ɵdid"](1,16384,null,0,x.a,[],null,null),(l()(),o["ɵted"](-1,null,["\n      "])),(l()(),o["ɵeld"](3,0,null,null,5,"ion-col",[["class","col"],["col-12",""]],null,null,null,null,null)),o["ɵdid"](4,16384,null,0,w.a,[],null,null),(l()(),o["ɵted"](-1,null,["\n        "])),(l()(),o["ɵeld"](6,0,null,null,1,"h4",[["text-center",""]],null,null,null,null,null)),(l()(),o["ɵted"](7,null,["",""])),(l()(),o["ɵted"](-1,null,["\n      "])),(l()(),o["ɵted"](-1,null,["\n    "]))],null,function(l,n){l(n,7,0,n.context.ngIf.name)})}function t(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,null,null,10,"ion-col",[["class","col"],["col-6",""]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.openBloque(l.context.$implicit.id)&&e}return e},null,null)),o["ɵdid"](1,16384,null,0,w.a,[],null,null),(l()(),o["ɵted"](-1,null,["\n        "])),(l()(),o["ɵeld"](3,0,null,null,6,"div",[["class","flex flex-col flex-center"]],null,null,null,null,null)),(l()(),o["ɵted"](-1,null,["\n          "])),(l()(),o["ɵeld"](5,0,null,null,0,"img",[["alt",""],["class","w-100"]],[[8,"src",4]],null,null,null,null)),(l()(),o["ɵted"](-1,null,["\n          "])),(l()(),o["ɵeld"](7,0,null,null,1,"strong",[["text-center",""]],null,null,null,null,null)),(l()(),o["ɵted"](8,null,["",""])),(l()(),o["ɵted"](-1,null,["\n        "])),(l()(),o["ɵted"](-1,null,["\n      "]))],null,function(l,n){l(n,5,0,n.context.$implicit.cover||"https://via.placeholder.com/128");l(n,8,0,n.context.$implicit.name)})}function a(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,null,null,5,"ion-row",[["class","row"]],null,null,null,null,null)),o["ɵdid"](1,16384,null,0,x.a,[],null,null),(l()(),o["ɵted"](-1,null,["\n      "])),(l()(),o["ɵand"](16777216,null,null,1,null,t)),o["ɵdid"](4,802816,null,0,y.j,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),o["ɵted"](-1,null,["\n    "]))],function(l,n){l(n,4,0,n.context.ngIf)},null)}function d(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,null,null,10,"ion-header",[],null,null,null,null,null)),o["ɵdid"](1,16384,null,0,_.a,[k.a,o.ElementRef,o.Renderer,[2,I.a]],null,null),(l()(),o["ɵted"](-1,null,["\n\n  "])),(l()(),o["ɵeld"](3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,P.b,P.a)),o["ɵdid"](4,49152,null,0,E.a,[q.a,[2,I.a],[2,D.a],k.a,o.ElementRef,o.Renderer],null,null),(l()(),o["ɵted"](-1,3,["\n    "])),(l()(),o["ɵeld"](6,0,null,3,2,"ion-title",[],null,null,null,F.b,F.a)),o["ɵdid"](7,49152,null,0,N.a,[k.a,o.ElementRef,o.Renderer,[2,T.a],[2,E.a]],null,null),(l()(),o["ɵted"](-1,0,["Materia"])),(l()(),o["ɵted"](-1,3,["\n  "])),(l()(),o["ɵted"](-1,null,["\n\n"])),(l()(),o["ɵted"](-1,null,["\n\n\n"])),(l()(),o["ɵeld"](12,0,null,null,14,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,$.b,$.a)),o["ɵdid"](13,4374528,null,0,O.a,[k.a,M.a,V.a,o.ElementRef,o.Renderer,q.a,j.a,o.NgZone,[2,I.a],[2,D.a]],null,null),(l()(),o["ɵted"](-1,1,["\n  "])),(l()(),o["ɵeld"](15,0,null,1,10,"ion-grid",[["class","grid"]],null,null,null,null,null)),o["ɵdid"](16,16384,null,0,B.a,[],null,null),(l()(),o["ɵted"](-1,null,["\n\n    "])),(l()(),o["ɵand"](16777216,null,null,2,null,e)),o["ɵdid"](19,16384,null,0,y.k,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),o["ɵpid"](131072,y.b,[o.ChangeDetectorRef]),(l()(),o["ɵted"](-1,null,["\n\n    "])),(l()(),o["ɵand"](16777216,null,null,2,null,a)),o["ɵdid"](23,16384,null,0,y.k,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),o["ɵpid"](131072,y.b,[o.ChangeDetectorRef]),(l()(),o["ɵted"](-1,null,["\n  "])),(l()(),o["ɵted"](-1,1,["\n"])),(l()(),o["ɵted"](-1,null,["\n"]))],function(l,n){var u=n.component;l(n,19,0,o["ɵunv"](n,19,0,o["ɵnov"](n,20).transform(u.materia$)));l(n,23,0,o["ɵunv"](n,23,0,o["ɵnov"](n,24).transform(u.bloques$)))},function(l,n){l(n,3,0,o["ɵnov"](n,4)._hidden,o["ɵnov"](n,4)._sbPadding);l(n,12,0,o["ɵnov"](n,13).statusbarPadding,o["ɵnov"](n,13)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var o=u(0),i=(u(1),u(28),u(457)),r=u(132),c=function(){function l(l,n,u){this.afs=l,this.navParams=n,this.navCtrl=u,this.id=this.navParams.get("id")}return l.prototype.ionViewDidLoad=function(){var l=this;this.materia$=this.afs.collection(i.a.CONTENT).doc(this.id).valueChanges(),this.bloques$=this.afs.collection(i.a.CONTENT,function(n){return n.where("parent_id","==",l.id)}).valueChanges()},l.prototype.openBloque=function(l){this.navCtrl.push("ProgramaBloquePage",{id:l})},l}(),s=function(){return function(){}}(),f=u(447),m=u(448),p=u(449),v=u(450),g=u(451),h=u(452),b=u(453),R=u(454),C=u(455),x=u(211),w=u(210),y=u(16),_=u(130),k=u(3),I=u(7),P=u(456),E=u(53),q=u(13),D=u(31),F=u(582),N=u(196),T=u(95),$=u(581),O=u(40),M=u(6),V=u(14),j=u(61),B=u(212),L=u(15),A=o["ɵcrt"]({encapsulation:2,styles:[],data:{}}),J=o["ɵccf"]("page-programa-materia",c,function(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,null,null,1,"page-programa-materia",[],null,null,null,d,A)),o["ɵdid"](1,49152,null,0,c,[r.AngularFirestore,L.a,D.a],null,null)],null,null)},{},{},[]),K=u(22),Z=u(197),z=u(62);u.d(n,"ProgramaMateriaPageModuleNgFactory",function(){return G});var G=o["ɵcmf"](s,[],function(l){return o["ɵmod"]([o["ɵmpd"](512,o.ComponentFactoryResolver,o["ɵCodegenComponentFactoryResolver"],[[8,[f.a,m.a,p.a,v.a,g.a,h.a,b.a,R.a,C.a,J]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["ɵmpd"](4608,y.m,y.l,[o.LOCALE_ID,[2,y.w]]),o["ɵmpd"](4608,K.k,K.k,[]),o["ɵmpd"](4608,K.c,K.c,[]),o["ɵmpd"](512,y.c,y.c,[]),o["ɵmpd"](512,K.j,K.j,[]),o["ɵmpd"](512,K.d,K.d,[]),o["ɵmpd"](512,K.i,K.i,[]),o["ɵmpd"](512,Z.a,Z.a,[]),o["ɵmpd"](512,Z.b,Z.b,[]),o["ɵmpd"](512,s,s,[]),o["ɵmpd"](256,z.a,c,[])])})},581:function(l,n,u){"use strict";function e(l){return t["ɵvid"](2,[t["ɵqud"](402653184,1,{_fixedContent:0}),t["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),t["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t["ɵncd"](null,1),t["ɵncd"](null,2)],null,null)}u.d(n,"a",function(){return a}),n.b=e;var t=u(0),a=(u(3),u(6),u(14),u(61),u(7),u(31),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(l,n,u){"use strict";function e(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,a.i,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}u.d(n,"a",function(){return d}),n.b=e;var t=u(0),a=u(16),d=(u(3),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
