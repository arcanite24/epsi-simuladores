<<<<<<< HEAD
webpackJsonp([16],{

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsPageModule", function() { return RatingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ratings__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(472);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RatingsPageModule = /** @class */ (function () {
    function RatingsPageModule() {
    }
    RatingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ratings__["a" /* RatingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ratings__["a" /* RatingsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */],
            ],
        })
    ], RatingsPageModule);
    return RatingsPageModule;
}());

//# sourceMappingURL=ratings.module.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingsPage; });
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



var RatingsPage = /** @class */ (function () {
    function RatingsPage(navCtrl, navParams, back, toast, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.toast = toast;
        this.viewCtrl = viewCtrl;
        this.id = this.navParams.get('id');
        this.type = this.navParams.get('type');
    }
    RatingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.back.getClase(this.id, this.type).subscribe(function (data) {
            _this.clase = data;
            _this.clase.c = data.ratings ? data.ratings[_this.back.uid] ? data.ratings[_this.back.uid].c : 0 : 0;
            _this.clase.d = data.ratings ? data.ratings[_this.back.uid] ? data.ratings[_this.back.uid].d : 0 : 0;
            _this.clase.e = data.ratings ? data.ratings[_this.back.uid] ? data.ratings[_this.back.uid].e : 0 : 0;
        }, function (err) {
            _this.toast.create({ message: 'No se pudo cargar la calificación de la clase...', duration: 2000 }).present();
            if (_this.navCtrl.canGoBack())
                _this.navCtrl.pop();
        });
    };
    RatingsPage.prototype.saveRating = function (e) {
        var _this = this;
        if (!this.clase.ratings)
            this.clase.ratings = {};
        if (!this.clase.ratings[this.back.uid])
            this.clase.ratings[this.back.uid] = {};
        this.clase.ratings[this.back.uid].c = this.clase.c;
        this.clase.ratings[this.back.uid].d = this.clase.d;
        this.clase.ratings[this.back.uid].e = this.clase.d;
        this.back.updateClase(this.id, this.type, { ratings: this.clase.ratings }).subscribe(function (data) { return console.log; }, function (err) { return _this.toast.create({ message: 'No se pudo actualizar tu calificación...', duration: 2000 }).present(); });
    };
    RatingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ratings',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\ratings\ratings.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Calificar</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n  \n\n  <div class="flex-col" *ngIf="!clase">\n\n    <img src="assets/imgs/rings.svg">\n\n  </div>\n\n\n\n  <div class="flex-col" *ngIf="clase">\n\n    <h2>Contenido {{clase.c | number}} / 5</h2>\n\n    <rating [(ngModel)]="clase.c" (ngModelChange)="saveRating($event)"></rating>\n\n\n\n    <h2>Diseño {{clase.d | number}} / 5</h2>\n\n    <rating [(ngModel)]="clase.d" (ngModelChange)="saveRating($event)"></rating>\n\n\n\n    <h2>Entendible {{clase.e | number}} / 5</h2>\n\n    <rating [(ngModel)]="clase.e" (ngModelChange)="saveRating($event)"></rating>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\ratings\ratings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
    ], RatingsPage);
    return RatingsPage;
}());

//# sourceMappingURL=ratings.js.map

/***/ })

});
//# sourceMappingURL=16.js.map
=======
webpackJsonp([16],{551:function(l,n,e){"use strict";function t(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,20,"div",[["class","calendar-item"]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["\n      "])),(l()(),d["ɵeld"](2,0,null,null,17,"ion-item",[["class","item item-block"]],null,null,null,y.b,y.a)),d["ɵdid"](3,1097728,null,3,k.a,[x.a,E.a,d.ElementRef,d.Renderer,[2,D.a]],null,null),d["ɵqud"](335544320,4,{contentLabel:0}),d["ɵqud"](603979776,5,{_buttons:1}),d["ɵqud"](603979776,6,{_icons:1}),d["ɵdid"](7,16384,null,0,M.a,[],null,null),(l()(),d["ɵted"](-1,2,["\n        "])),(l()(),d["ɵeld"](9,0,null,1,2,"ion-label",[],null,null,null,null,null)),d["ɵdid"](10,16384,[[4,4]],0,P.a,[E.a,d.ElementRef,d.Renderer,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),d["ɵted"](11,null,["",""])),(l()(),d["ɵted"](-1,2,["\n        "])),(l()(),d["ɵeld"](13,0,null,0,5,"ion-checkbox",[],[[2,"checkbox-disabled",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"click"]],function(l,n,e){var t=!0,u=l.component;if("click"===n){t=!1!==d["ɵnov"](l,14)._click(e)&&t}if("ngModelChange"===n){t=!1!==(l.context.$implicit.completed=e)&&t}if("ionChange"===n){t=!1!==u.onChangeTask(l.context.$implicit.completed,l.context.$implicit.id,l.context.index,l.parent.context.index,l.parent.context.$implicit.id)&&t}return t},F.b,F.a)),d["ɵdid"](14,1228800,null,0,I.a,[E.a,x.a,[2,k.a],d.ElementRef,d.Renderer],null,{ionChange:"ionChange"}),d["ɵprd"](1024,null,q.e,function(l){return[l]},[I.a]),d["ɵdid"](16,671744,null,0,q.h,[[8,null],[8,null],[8,null],[2,q.e]],{model:[0,"model"]},{update:"ngModelChange"}),d["ɵprd"](2048,null,q.f,null,[q.h]),d["ɵdid"](18,16384,null,0,q.g,[q.f],null,null),(l()(),d["ɵted"](-1,2,["\n      "])),(l()(),d["ɵted"](-1,null,["\n    "]))],function(l,n){l(n,16,0,n.context.$implicit.completed)},function(l,n){l(n,11,0,n.context.$implicit.label);l(n,13,0,d["ɵnov"](n,14)._disabled,d["ɵnov"](n,18).ngClassUntouched,d["ɵnov"](n,18).ngClassTouched,d["ɵnov"](n,18).ngClassPristine,d["ɵnov"](n,18).ngClassDirty,d["ɵnov"](n,18).ngClassValid,d["ɵnov"](n,18).ngClassInvalid,d["ɵnov"](n,18).ngClassPending)})}function u(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,14,"ion-list",[["class","mt-3"]],null,null,null,null,null)),d["ɵdid"](1,16384,null,0,O.a,[E.a,d.ElementRef,d.Renderer,Y.a,$.l,V.a],null,null),(l()(),d["ɵted"](-1,null,["\n    "])),(l()(),d["ɵeld"](3,0,null,null,6,"ion-list-header",[["class","calendar-header item"],["text-wrap",""]],null,null,null,y.b,y.a)),d["ɵdid"](4,1097728,null,3,k.a,[x.a,E.a,d.ElementRef,d.Renderer,[2,D.a]],null,null),d["ɵqud"](335544320,1,{contentLabel:0}),d["ɵqud"](603979776,2,{_buttons:1}),d["ɵqud"](603979776,3,{_icons:1}),d["ɵdid"](8,16384,null,0,w.a,[E.a,d.Renderer,d.ElementRef,[8,null]],null,null),(l()(),d["ɵted"](9,2,["",""])),(l()(),d["ɵted"](-1,null,["\n    "])),(l()(),d["ɵand"](16777216,null,null,1,null,t)),d["ɵdid"](12,802816,null,0,T.j,[d.ViewContainerRef,d.TemplateRef,d.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),d["ɵted"](-1,null,["\n    "])),(l()(),d["ɵted"](-1,null,["\n  "]))],function(l,n){l(n,12,0,n.context.$implicit.tasks)},function(l,n){l(n,9,0,n.context.$implicit.title)})}function a(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,10,"ion-header",[],null,null,null,null,null)),d["ɵdid"](1,16384,null,0,j.a,[E.a,d.ElementRef,d.Renderer,[2,L.a]],null,null),(l()(),d["ɵted"](-1,null,["\n\n  "])),(l()(),d["ɵeld"](3,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,S.b,S.a)),d["ɵdid"](4,49152,null,0,N.a,[A.a,[2,L.a],[2,J.a],E.a,d.ElementRef,d.Renderer],{color:[0,"color"]},null),(l()(),d["ɵted"](-1,3,["\n    "])),(l()(),d["ɵeld"](6,0,null,3,2,"ion-title",[],null,null,null,K.b,K.a)),d["ɵdid"](7,49152,null,0,U.a,[E.a,d.ElementRef,d.Renderer,[2,Z.a],[2,N.a]],null,null),(l()(),d["ɵted"](-1,0,["Programa paso a paso"])),(l()(),d["ɵted"](-1,3,["\n  "])),(l()(),d["ɵted"](-1,null,["\n\n"])),(l()(),d["ɵted"](-1,null,["\n\n\n"])),(l()(),d["ɵeld"](12,0,null,null,5,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,z.b,z.a)),d["ɵdid"](13,4374528,null,0,B.a,[E.a,Y.a,V.a,d.ElementRef,d.Renderer,A.a,G.a,d.NgZone,[2,L.a],[2,J.a]],null,null),(l()(),d["ɵted"](-1,1,["\n\n  "])),(l()(),d["ɵand"](16777216,null,1,1,null,u)),d["ɵdid"](16,802816,null,0,T.j,[d.ViewContainerRef,d.TemplateRef,d.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),d["ɵted"](-1,1,["\n\n"])),(l()(),d["ɵted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,4,0,"primary");l(n,16,0,e.calendar)},function(l,n){l(n,3,0,d["ɵnov"](n,4)._hidden,d["ɵnov"](n,4)._sbPadding);l(n,12,0,d["ɵnov"](n,13).statusbarPadding,d["ɵnov"](n,13)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var d=e(0),i=(e(1),e(28),e(73)),o=(e(458),e(457)),r=e(2),c=e.n(r),s=function(){function l(l,n,e,t,u,a){this.navCtrl=l,this.navParams=n,this.toast=e,this.load=t,this.back=u,this.afs=a,this.calendar=[],this.uid=localStorage.getItem("uid")}return l.prototype.ionViewDidLoad=function(){var l=this,n=this.load.create({content:"Cargando calendario..."});n.present(),this.afs.collection(o.a.EVENT).valueChanges().subscribe(function(e){n.dismiss(),l.calendar=e.filter(function(l){return c()(l.date).startOf("day").format("DD-MM-YYYY")==c()().startOf("day").format("DD-MM-YYYY")}),console.log(l.calendar)})},l.prototype.onChangeTask=function(l,n,e,t,u){l?localStorage.setItem("evento-"+u+"-"+n+"-"+this.uid,""+l):localStorage.removeItem("evento-"+u+"-"+n+"-"+this.uid),this.calendar[t].tareas[e].completed=l},l.prototype.openVideo=function(l){console.log(l),this.navCtrl.push("ClaseDetailPage",{id:l.link_video_1,type:l.type_video_1})},l.prototype.openSlide=function(l){this.navCtrl.push("SlideDetailPage",{id:l.link_slide_1})},l}(),f=function(){return function(){}}(),p=e(447),m=e(448),g=e(449),v=e(450),b=e(451),h=e(452),C=e(453),R=e(454),_=e(455),y=e(459),k=e(29),x=e(23),E=e(3),D=e(74),M=e(131),P=e(75),F=e(591),I=e(207),q=e(22),O=e(96),Y=e(6),$=e(8),V=e(14),w=e(133),T=e(16),j=e(130),L=e(7),S=e(456),N=e(53),A=e(13),J=e(31),K=e(582),U=e(196),Z=e(95),z=e(581),B=e(40),G=e(61),H=e(15),Q=e(97),W=e(134),X=e(132),ll=d["ɵcrt"]({encapsulation:2,styles:[],data:{}}),nl=d["ɵccf"]("page-calendar",s,function(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,1,"page-calendar",[],null,null,null,a,ll)),d["ɵdid"](1,49152,null,0,s,[J.a,H.a,Q.a,W.a,i.a,X.AngularFirestore],null,null)],null,null)},{},{},[]),el=e(197),tl=e(62);e.d(n,"CalendarPageModuleNgFactory",function(){return ul});var ul=d["ɵcmf"](f,[],function(l){return d["ɵmod"]([d["ɵmpd"](512,d.ComponentFactoryResolver,d["ɵCodegenComponentFactoryResolver"],[[8,[p.a,m.a,g.a,v.a,b.a,h.a,C.a,R.a,_.a,nl]],[3,d.ComponentFactoryResolver],d.NgModuleRef]),d["ɵmpd"](4608,T.m,T.l,[d.LOCALE_ID,[2,T.w]]),d["ɵmpd"](4608,q.k,q.k,[]),d["ɵmpd"](4608,q.c,q.c,[]),d["ɵmpd"](512,T.c,T.c,[]),d["ɵmpd"](512,q.j,q.j,[]),d["ɵmpd"](512,q.d,q.d,[]),d["ɵmpd"](512,q.i,q.i,[]),d["ɵmpd"](512,el.a,el.a,[]),d["ɵmpd"](512,el.b,el.b,[]),d["ɵmpd"](512,f,f,[]),d["ɵmpd"](256,tl.a,s,[])])})},581:function(l,n,e){"use strict";function t(l){return u["ɵvid"](2,[u["ɵqud"](402653184,1,{_fixedContent:0}),u["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),u["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),u["ɵncd"](null,0),(l()(),u["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),u["ɵncd"](null,1),u["ɵncd"](null,2)],null,null)}e.d(n,"a",function(){return a}),n.b=t;var u=e(0),a=(e(3),e(6),e(14),e(61),e(7),e(31),u["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(l,n,e){"use strict";function t(l){return u["ɵvid"](2,[(l()(),u["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),u["ɵdid"](1,278528,null,0,a.i,[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["ɵncd"](null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}e.d(n,"a",function(){return d}),n.b=t;var u=e(0),a=e(16),d=(e(3),u["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},591:function(l,n,e){"use strict";function t(l){return u["ɵvid"](0,[(l()(),u["ɵeld"](0,0,null,null,1,"div",[["class","checkbox-icon"]],[[2,"checkbox-checked",null]],null,null,null,null)),(l()(),u["ɵeld"](1,0,null,null,0,"div",[["class","checkbox-inner"]],null,null,null,null,null)),(l()(),u["ɵeld"](2,0,null,null,2,"button",[["class","item-cover"],["ion-button","item-cover"],["role","checkbox"],["type","button"]],[[8,"id",0],[1,"aria-checked",0],[1,"aria-labelledby",0],[1,"aria-disabled",0]],null,null,a.b,a.a)),u["ɵdid"](3,1097728,null,0,d.a,[[8,"item-cover"],i.a,u.ElementRef,u.Renderer],null,null),(l()(),u["ɵted"](-1,0,[" "]))],null,function(l,n){var e=n.component;l(n,0,0,e._value);l(n,2,0,e.id,e._value,e._labelId,e._disabled)})}e.d(n,"a",function(){return o}),n.b=t;var u=e(0),a=e(64),d=e(32),i=e(3),o=(e(23),u["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
