<<<<<<< HEAD
webpackJsonp([22],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasPageModule", function() { return NotasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notas__ = __webpack_require__(810);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotasPageModule = /** @class */ (function () {
    function NotasPageModule() {
    }
    NotasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notas__["a" /* NotasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notas__["a" /* NotasPage */]),
            ],
        })
    ], NotasPageModule);
    return NotasPageModule;
}());

//# sourceMappingURL=notas.module.js.map

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasPage; });
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



var NotasPage = /** @class */ (function () {
    function NotasPage(navCtrl, navParams, modal, back, toast, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.back = back;
        this.toast = toast;
        this.viewCtrl = viewCtrl;
        this.id = this.navParams.get('id');
        this.type = this.navParams.get('type');
        this.notas = [];
    }
    NotasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.back.getNotas(this.id, this.type).subscribe(function (data) {
            _this.notas = data;
        }, function (err) {
            _this.toast.create({ message: 'No se pudieron cargar tus notas...', duration: 2000 }).present();
            if (_this.navCtrl.canGoBack())
                _this.navCtrl.pop();
        });
    };
    NotasPage.prototype.openAdd = function (id, type) {
        var _this = this;
        var m = this.modal.create('NotasAddPage', { id: id, type: type });
        m.present();
        m.onDidDismiss(function (data) {
            if (!data)
                return;
            _this.ionViewDidLoad();
        });
    };
    NotasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notas',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\notas\notas.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Notas</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n\n\n  <div class="flex-col" *ngIf="!notas">\n\n    <img src="assets/imgs/rings.svg">\n\n  </div>\n\n\n\n  <ion-card *ngFor="let nota of notas">\n\n    <ion-card-header>{{nota.title}}</ion-card-header>\n\n    <ion-card-content>{{nota.text}}</ion-card-content>\n\n  </ion-card>\n\n  \n\n  <ion-fab right bottom>\n\n    <button (click)="openAdd(id, type)" ion-fab color="rojito"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\notas\notas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
    ], NotasPage);
    return NotasPage;
}());

//# sourceMappingURL=notas.js.map

/***/ })

});
//# sourceMappingURL=22.js.map
=======
webpackJsonp([22],{573:function(n,l,e){"use strict";function u(n){return o["ɵvid"](0,[(n()(),o["ɵeld"](0,0,null,null,5,"li",[["tappable",""]],null,[[null,"click"]],function(n,l,e){var u=!0;if("click"===l){u=!1!==n.component.rate(n.context.$implicit+1)&&u}return u},null,null)),(n()(),o["ɵted"](-1,null,["\n        "])),(n()(),o["ɵeld"](2,0,null,null,2,"ion-icon",[["role","img"]],[[2,"hide",null]],null,null,null,null)),o["ɵdid"](3,147456,null,0,k.a,[y.a,o.ElementRef,o.Renderer],{name:[0,"name"]},null),(n()(),o["ɵted"](-1,null,["\n        "])),(n()(),o["ɵted"](-1,null,["\n      "]))],function(n,l){n(l,3,0,l.component.getStarIconName(l.context.$implicit))},function(n,l){n(l,2,0,o["ɵnov"](l,3)._hidden)})}function t(n){return o["ɵvid"](0,[(n()(),o["ɵted"](-1,null,["\n    "])),(n()(),o["ɵeld"](1,0,null,null,4,"ul",[["class","rating"]],null,[[null,"keydown"]],function(n,l,e){var u=!0;if("keydown"===l){u=!1!==n.component.onKeyDown(e)&&u}return u},null,null)),(n()(),o["ɵted"](-1,null,["\n      "])),(n()(),o["ɵand"](16777216,null,null,1,null,u)),o["ɵdid"](4,802816,null,0,M.j,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),o["ɵted"](-1,null,["\n    "]))],function(n,l){n(l,4,0,l.component.starIndexes)},null)}function a(n){return o["ɵvid"](0,[(n()(),o["ɵeld"](0,0,null,null,3,"div",[["class","flex-col"]],null,null,null,null,null)),(n()(),o["ɵted"](-1,null,["\n    "])),(n()(),o["ɵeld"](2,0,null,null,0,"img",[["src","assets/imgs/rings.svg"]],null,null,null,null,null)),(n()(),o["ɵted"](-1,null,["\n  "]))],null,null)}function i(n){return o["ɵvid"](0,[(n()(),o["ɵeld"](0,0,null,null,34,"div",[["class","flex-col"]],null,null,null,null,null)),(n()(),o["ɵted"](-1,null,["\n    "])),(n()(),o["ɵeld"](2,0,null,null,2,"h2",[],null,null,null,null,null)),(n()(),o["ɵted"](3,null,["Contenido "," / 5"])),o["ɵppd"](4,1),(n()(),o["ɵted"](-1,null,["\n    "])),(n()(),o["ɵeld"](6,0,null,null,5,"rating",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var u=!0,t=n.component;if("ngModelChange"===l){u=!1!==(t.clase.c=e)&&u}if("ngModelChange"===l){u=!1!==t.saveRating(e)&&u}return u},t,I)),o["ɵdid"](7,114688,null,0,_.a,[],null,null),o["ɵprd"](1024,null,P.e,function(n){return[n]},[_.a]),o["ɵdid"](9,671744,null,0,P.h,[[8,null],[8,null],[8,null],[2,P.e]],{model:[0,"model"]},{update:"ngModelChange"}),o["ɵprd"](2048,null,P.f,null,[P.h]),o["ɵdid"](11,16384,null,0,P.g,[P.f],null,null),(n()(),o["ɵted"](-1,null,["\n\n    "])),(n()(),o["ɵeld"](13,0,null,null,2,"h2",[],null,null,null,null,null)),(n()(),o["ɵted"](14,null,["Diseño "," / 5"])),o["ɵppd"](15,1),(n()(),o["ɵted"](-1,null,["\n    "])),(n()(),o["ɵeld"](17,0,null,null,5,"rating",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var u=!0,t=n.component;if("ngModelChange"===l){u=!1!==(t.clase.d=e)&&u}if("ngModelChange"===l){u=!1!==t.saveRating(e)&&u}return u},t,I)),o["ɵdid"](18,114688,null,0,_.a,[],null,null),o["ɵprd"](1024,null,P.e,function(n){return[n]},[_.a]),o["ɵdid"](20,671744,null,0,P.h,[[8,null],[8,null],[8,null],[2,P.e]],{model:[0,"model"]},{update:"ngModelChange"}),o["ɵprd"](2048,null,P.f,null,[P.h]),o["ɵdid"](22,16384,null,0,P.g,[P.f],null,null),(n()(),o["ɵted"](-1,null,["\n\n    "])),(n()(),o["ɵeld"](24,0,null,null,2,"h2",[],null,null,null,null,null)),(n()(),o["ɵted"](25,null,["Entendible "," / 5"])),o["ɵppd"](26,1),(n()(),o["ɵted"](-1,null,["\n    "])),(n()(),o["ɵeld"](28,0,null,null,5,"rating",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var u=!0,t=n.component;if("ngModelChange"===l){u=!1!==(t.clase.e=e)&&u}if("ngModelChange"===l){u=!1!==t.saveRating(e)&&u}return u},t,I)),o["ɵdid"](29,114688,null,0,_.a,[],null,null),o["ɵprd"](1024,null,P.e,function(n){return[n]},[_.a]),o["ɵdid"](31,671744,null,0,P.h,[[8,null],[8,null],[8,null],[2,P.e]],{model:[0,"model"]},{update:"ngModelChange"}),o["ɵprd"](2048,null,P.f,null,[P.h]),o["ɵdid"](33,16384,null,0,P.g,[P.f],null,null),(n()(),o["ɵted"](-1,null,["\n  "]))],function(n,l){var e=l.component;n(l,7,0);n(l,9,0,e.clase.c),n(l,18,0);n(l,20,0,e.clase.d),n(l,29,0);n(l,31,0,e.clase.e)},function(n,l){var e=l.component;n(l,3,0,o["ɵunv"](l,3,0,n(l,4,0,o["ɵnov"](l.parent,0),e.clase.c)));n(l,6,0,o["ɵnov"](l,11).ngClassUntouched,o["ɵnov"](l,11).ngClassTouched,o["ɵnov"](l,11).ngClassPristine,o["ɵnov"](l,11).ngClassDirty,o["ɵnov"](l,11).ngClassValid,o["ɵnov"](l,11).ngClassInvalid,o["ɵnov"](l,11).ngClassPending);n(l,14,0,o["ɵunv"](l,14,0,n(l,15,0,o["ɵnov"](l.parent,0),e.clase.d)));n(l,17,0,o["ɵnov"](l,22).ngClassUntouched,o["ɵnov"](l,22).ngClassTouched,o["ɵnov"](l,22).ngClassPristine,o["ɵnov"](l,22).ngClassDirty,o["ɵnov"](l,22).ngClassValid,o["ɵnov"](l,22).ngClassInvalid,o["ɵnov"](l,22).ngClassPending);n(l,25,0,o["ɵunv"](l,25,0,n(l,26,0,o["ɵnov"](l.parent,0),e.clase.e)));n(l,28,0,o["ɵnov"](l,33).ngClassUntouched,o["ɵnov"](l,33).ngClassTouched,o["ɵnov"](l,33).ngClassPristine,o["ɵnov"](l,33).ngClassDirty,o["ɵnov"](l,33).ngClassValid,o["ɵnov"](l,33).ngClassInvalid,o["ɵnov"](l,33).ngClassPending)})}function d(n){return o["ɵvid"](0,[o["ɵpid"](0,M.e,[o.LOCALE_ID]),(n()(),o["ɵeld"](1,0,null,null,22,"ion-header",[],null,null,null,null,null)),o["ɵdid"](2,16384,null,0,x.a,[y.a,o.ElementRef,o.Renderer,[2,E.a]],null,null),(n()(),o["ɵted"](-1,null,["\n\n  "])),(n()(),o["ɵeld"](4,0,null,null,18,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,w.b,w.a)),o["ɵdid"](5,49152,null,0,D.a,[O.a,[2,E.a],[2,V.a],y.a,o.ElementRef,o.Renderer],{color:[0,"color"]},null),(n()(),o["ɵted"](-1,3,["\n    "])),(n()(),o["ɵeld"](7,0,null,3,2,"ion-title",[],null,null,null,F.b,F.a)),o["ɵdid"](8,49152,null,0,N.a,[y.a,o.ElementRef,o.Renderer,[2,T.a],[2,D.a]],null,null),(n()(),o["ɵted"](-1,0,["Calificar"])),(n()(),o["ɵted"](-1,3,["\n    "])),(n()(),o["ɵeld"](11,0,null,2,10,"ion-buttons",[["end",""]],null,null,null,null,null)),o["ɵdid"](12,16384,null,1,L.a,[y.a,o.ElementRef,o.Renderer,[2,T.a],[2,D.a]],null,null),o["ɵqud"](603979776,1,{_buttons:1}),(n()(),o["ɵted"](-1,null,["\n      "])),(n()(),o["ɵeld"](15,0,null,null,5,"button",[["icon-only",""],["ion-button",""]],null,[[null,"click"]],function(n,l,e){var u=!0;if("click"===l){u=!1!==n.component.viewCtrl.dismiss()&&u}return u},j.b,j.a)),o["ɵdid"](16,1097728,[[1,4]],0,q.a,[[8,""],y.a,o.ElementRef,o.Renderer],null,null),(n()(),o["ɵted"](-1,0,["\n        "])),(n()(),o["ɵeld"](18,0,null,0,1,"ion-icon",[["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),o["ɵdid"](19,147456,null,0,k.a,[y.a,o.ElementRef,o.Renderer],{name:[0,"name"]},null),(n()(),o["ɵted"](-1,0,["\n      "])),(n()(),o["ɵted"](-1,null,["\n    "])),(n()(),o["ɵted"](-1,3,["\n  "])),(n()(),o["ɵted"](-1,null,["\n\n"])),(n()(),o["ɵted"](-1,null,["\n\n\n"])),(n()(),o["ɵeld"](25,0,null,null,8,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,U.b,U.a)),o["ɵdid"](26,4374528,null,0,z.a,[y.a,A.a,K.a,o.ElementRef,o.Renderer,O.a,$.a,o.NgZone,[2,E.a],[2,V.a]],null,null),(n()(),o["ɵted"](-1,1,["\n  \n  "])),(n()(),o["ɵand"](16777216,null,1,1,null,a)),o["ɵdid"](29,16384,null,0,M.k,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["ɵted"](-1,1,["\n\n  "])),(n()(),o["ɵand"](16777216,null,1,1,null,i)),o["ɵdid"](32,16384,null,0,M.k,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["ɵted"](-1,1,["\n\n"])),(n()(),o["ɵted"](-1,null,["\n"]))],function(n,l){var e=l.component;n(l,5,0,"primary");n(l,19,0,"close");n(l,29,0,!e.clase);n(l,32,0,e.clase)},function(n,l){n(l,4,0,o["ɵnov"](l,5)._hidden,o["ɵnov"](l,5)._sbPadding);n(l,18,0,o["ɵnov"](l,19)._hidden);n(l,25,0,o["ɵnov"](l,26).statusbarPadding,o["ɵnov"](l,26)._hasRefresher)})}Object.defineProperty(l,"__esModule",{value:!0});var o=e(0),s=(e(1),e(28),e(73)),r=function(){function n(n,l,e,u,t){this.navCtrl=n,this.navParams=l,this.back=e,this.toast=u,this.viewCtrl=t,this.id=this.navParams.get("id"),this.type=this.navParams.get("type")}return n.prototype.ionViewDidLoad=function(){var n=this;this.back.getClase(this.id,this.type).subscribe(function(l){n.clase=l,n.clase.c=l.ratings&&l.ratings[n.back.uid]?l.ratings[n.back.uid].c:0,n.clase.d=l.ratings&&l.ratings[n.back.uid]?l.ratings[n.back.uid].d:0,n.clase.e=l.ratings&&l.ratings[n.back.uid]?l.ratings[n.back.uid].e:0},function(l){n.toast.create({message:"No se pudo cargar la calificación de la clase...",duration:2e3}).present(),n.navCtrl.canGoBack()&&n.navCtrl.pop()})},n.prototype.saveRating=function(n){var l=this;this.clase.ratings||(this.clase.ratings={}),this.clase.ratings[this.back.uid]||(this.clase.ratings[this.back.uid]={}),this.clase.ratings[this.back.uid].c=this.clase.c,this.clase.ratings[this.back.uid].d=this.clase.d,this.clase.ratings[this.back.uid].e=this.clase.d,this.back.updateClase(this.id,this.type,{ratings:this.clase.ratings}).subscribe(function(n){return console.log},function(n){return l.toast.create({message:"No se pudo actualizar tu calificación...",duration:2e3}).present()})},n}(),c=(e(466),function(){return function(){}}()),g=e(447),f=e(448),p=e(449),v=e(450),h=e(451),m=e(452),C=e(453),b=e(454),R=e(455),k=e(63),y=e(3),M=e(16),P=e(22),_=e(216),I=o["ɵcrt"]({encapsulation:0,styles:["ul.rating[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      display: inline;\n      border: 0px;\n      background: none;\n      padding: 5px 10px;\n    }\n    ul.rating[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n      font-size: 30px;\n    }"],data:{}}),x=e(130),E=e(7),w=e(456),D=e(53),O=e(13),V=e(31),F=e(582),N=e(196),T=e(95),L=e(201),j=e(64),q=e(32),U=e(581),z=e(40),A=e(6),K=e(14),$=e(61),B=e(15),G=e(97),J=o["ɵcrt"]({encapsulation:2,styles:[],data:{}}),S=o["ɵccf"]("page-ratings",r,function(n){return o["ɵvid"](0,[(n()(),o["ɵeld"](0,0,null,null,1,"page-ratings",[],null,null,null,d,J)),o["ɵdid"](1,49152,null,0,r,[V.a,B.a,s.a,G.a,E.a],null,null)],null,null)},{},{},[]),Z=e(197),H=e(219),Q=e(62);e.d(l,"RatingsPageModuleNgFactory",function(){return W});var W=o["ɵcmf"](c,[],function(n){return o["ɵmod"]([o["ɵmpd"](512,o.ComponentFactoryResolver,o["ɵCodegenComponentFactoryResolver"],[[8,[g.a,f.a,p.a,v.a,h.a,m.a,C.a,b.a,R.a,S]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["ɵmpd"](4608,M.m,M.l,[o.LOCALE_ID,[2,M.w]]),o["ɵmpd"](4608,P.k,P.k,[]),o["ɵmpd"](4608,P.c,P.c,[]),o["ɵmpd"](512,M.c,M.c,[]),o["ɵmpd"](512,P.j,P.j,[]),o["ɵmpd"](512,P.d,P.d,[]),o["ɵmpd"](512,P.i,P.i,[]),o["ɵmpd"](512,Z.a,Z.a,[]),o["ɵmpd"](512,Z.b,Z.b,[]),o["ɵmpd"](512,H.a,H.a,[]),o["ɵmpd"](512,c,c,[]),o["ɵmpd"](256,Q.a,r,[])])})},581:function(n,l,e){"use strict";function u(n){return t["ɵvid"](2,[t["ɵqud"](402653184,1,{_fixedContent:0}),t["ɵqud"](402653184,2,{_scrollContent:0}),(n()(),t["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t["ɵncd"](null,0),(n()(),t["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t["ɵncd"](null,1),t["ɵncd"](null,2)],null,null)}e.d(l,"a",function(){return a}),l.b=u;var t=e(0),a=(e(3),e(6),e(14),e(61),e(7),e(31),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(n,l,e){"use strict";function u(n){return t["ɵvid"](2,[(n()(),t["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,a.i,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,0)],function(n,l){n(l,1,0,"toolbar-title","toolbar-title-"+l.component._mode)},null)}e.d(l,"a",function(){return i}),l.b=u;var t=e(0),a=e(16),i=(e(3),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
