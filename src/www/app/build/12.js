<<<<<<< HEAD
webpackJsonp([12],{

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimuladoresPageModule", function() { return SimuladoresPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simuladores__ = __webpack_require__(821);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SimuladoresPageModule = /** @class */ (function () {
    function SimuladoresPageModule() {
    }
    SimuladoresPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__simuladores__["a" /* SimuladoresPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__simuladores__["a" /* SimuladoresPage */]),
            ],
        })
    ], SimuladoresPageModule);
    return SimuladoresPageModule;
}());

//# sourceMappingURL=simuladores.module.js.map

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimuladoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SimuladoresPage = /** @class */ (function () {
    function SimuladoresPage(navCtrl, navParams, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.isOffline = false;
    }
    SimuladoresPage.prototype.ionViewDidLoad = function () {
        this.exams$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].EXAM, function (ref) { return ref
            .where('type', '==', __WEBPACK_IMPORTED_MODULE_3__app_app_models__["b" /* ExamTypes */].SIMULADOR)
            .where('date', '<=', __WEBPACK_IMPORTED_MODULE_4_moment___default()().endOf('day').toISOString()); })
            .valueChanges()
            .pipe(
        /* map(list => list.filter(exam => moment(exam.date).isSameOrBefore(moment().endOf('day'))).reverse()), */
        Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (list) { return list.reverse(); }));
        /* this.back.getSimuladoresHome().subscribe(data => this.sims = data.reverse(), err => {
          const list = JSON.parse(localStorage.getItem('zamnademy-cache-list'))
          this.downloadList = list ? list : []
          this.isOffline = true
        }) */
    };
    SimuladoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-simuladores',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\simuladores\simuladores.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Simuladores</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n\n\n  <ng-template #loader>\n\n    <div class="flex-col">\n\n      <img src="assets/imgs/rings.svg">\n\n    </div>\n\n  </ng-template>\n\n\n\n  <ion-list *ngIf="exams$ | async as sims else loader">\n\n    <ion-item *ngFor="let s of sims" (click)="navCtrl.push(\'ExamenDetailPage\', {id: s.id, type: \'simulador\'})">\n\n      <h2>{{s.name}}</h2>\n\n      <!--<p>{{s.desc}}</p>-->\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list *ngIf="isOffline">\n\n    <ion-list-header>Simuladores Offline</ion-list-header>\n\n    <ion-item *ngFor="let s of downloadList" (click)="navCtrl.push(\'ExamenDetailPage\', {id: s.id, type: \'simulador\', offline: true, data: s})">\n\n      <h2>{{s.name}}</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\simuladores\simuladores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"]])
    ], SimuladoresPage);
    return SimuladoresPage;
}());

//# sourceMappingURL=simuladores.js.map

/***/ })

});
//# sourceMappingURL=12.js.map
=======
webpackJsonp([12],{560:function(l,n,e){"use strict";function u(l){return s["ɵvid"](0,[(l()(),s["ɵeld"](0,0,null,null,3,"div",[["class","flex-col"]],null,null,null,null,null)),(l()(),s["ɵted"](-1,null,["\n      "])),(l()(),s["ɵeld"](2,0,null,null,0,"img",[["src","assets/imgs/rings.svg"]],null,null,null,null,null)),(l()(),s["ɵted"](-1,null,["\n    "]))],null,null)}function t(l){return s["ɵvid"](0,[(l()(),s["ɵted"](-1,null,["\n    "])),(l()(),s["ɵand"](16777216,null,null,1,null,u)),s["ɵdid"](2,16384,null,0,E.k,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),s["ɵted"](-1,null,["\n  "]))],function(l,n){l(n,2,0,!n.component.h)},null)}function a(l){return s["ɵvid"](0,[(l()(),s["ɵeld"](0,0,null,null,36,"ion-card",[],null,null,null,null,null)),s["ɵdid"](1,16384,null,0,k.a,[D.a,s.ElementRef,s.Renderer],null,null),(l()(),s["ɵted"](-1,null,["\n      "])),(l()(),s["ɵeld"](3,0,null,null,21,"ion-item",[["class","item item-block"]],null,null,null,T.b,T.a)),s["ɵdid"](4,1097728,null,3,q.a,[V.a,D.a,s.ElementRef,s.Renderer,[2,P.a]],null,null),s["ɵqud"](335544320,1,{contentLabel:0}),s["ɵqud"](603979776,2,{_buttons:1}),s["ɵqud"](603979776,3,{_icons:1}),s["ɵdid"](8,16384,null,0,M.a,[],null,null),(l()(),s["ɵted"](-1,2,["\n        "])),(l()(),s["ɵeld"](10,0,null,0,4,"ion-avatar",[["item-start",""]],null,null,null,null,null)),s["ɵdid"](11,16384,null,0,S.a,[],null,null),(l()(),s["ɵted"](-1,null,["\n          "])),(l()(),s["ɵeld"](13,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),s["ɵted"](-1,null,["\n        "])),(l()(),s["ɵted"](-1,2,["\n        "])),(l()(),s["ɵeld"](16,0,null,2,1,"h2",[],null,null,null,null,null)),(l()(),s["ɵted"](17,null,[""," ",""])),(l()(),s["ɵted"](-1,2,["\n        "])),(l()(),s["ɵeld"](19,0,null,2,4,"p",[],null,null,null,null,null)),(l()(),s["ɵted"](-1,null,[" "])),(l()(),s["ɵeld"](21,0,null,null,1,"ion-icon",[["class","mr-1"],["name","star"],["role","img"]],[[2,"hide",null]],null,null,null,null)),s["ɵdid"](22,147456,[[3,4]],0,F.a,[D.a,s.ElementRef,s.Renderer],{name:[0,"name"]},null),(l()(),s["ɵted"](-1,null,["Mejor respuesta"])),(l()(),s["ɵted"](-1,2,["\n      "])),(l()(),s["ɵted"](-1,null,["\n      "])),(l()(),s["ɵeld"](26,0,null,null,2,"ion-card-content",[],null,null,null,null,null)),s["ɵdid"](27,16384,null,0,L.a,[D.a,s.ElementRef,s.Renderer],null,null),(l()(),s["ɵted"](28,null,["",""])),(l()(),s["ɵted"](-1,null,["\n      "])),(l()(),s["ɵeld"](30,0,null,null,5,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),s["ɵted"](-1,null,["\n        "])),(l()(),s["ɵeld"](32,0,null,null,2,"span",[["class","c54 small-text"]],null,null,null,null,null)),(l()(),s["ɵted"](33,null,["",""])),s["ɵpid"](131072,N.CalendarPipe,[s.ChangeDetectorRef,s.NgZone]),(l()(),s["ɵted"](-1,null,["\n      "])),(l()(),s["ɵted"](-1,null,["\n    "]))],function(l,n){l(n,22,0,"star")},function(l,n){l(n,13,0,n.parent.context.ngIf.best.user.avatar?"https://zamnademy.com"+n.parent.context.ngIf.best.user.avatar:"assets/imgs/profile.jpg");l(n,17,0,n.parent.context.ngIf.best.user.name,n.parent.context.ngIf.best.user.lastName);l(n,21,0,s["ɵnov"](n,22)._hidden);l(n,28,0,n.parent.context.ngIf.best.text);l(n,33,0,s["ɵunv"](n,33,0,s["ɵnov"](n,34).transform(n.parent.context.ngIf.createdAt)))})}function d(l){return s["ɵvid"](0,[(l()(),s["ɵeld"](0,0,null,null,22,"ion-item",[["class","item item-block"],["text-wrap",""]],null,null,null,T.b,T.a)),s["ɵdid"](1,1097728,null,3,q.a,[V.a,D.a,s.ElementRef,s.Renderer,[2,P.a]],null,null),s["ɵqud"](335544320,10,{contentLabel:0}),s["ɵqud"](603979776,11,{_buttons:1}),s["ɵqud"](603979776,12,{_icons:1}),s["ɵdid"](5,16384,null,0,M.a,[],null,null),(l()(),s["ɵted"](-1,2,["\n        "])),(l()(),s["ɵeld"](7,0,null,0,4,"ion-avatar",[["item-start",""]],null,null,null,null,null)),s["ɵdid"](8,16384,null,0,S.a,[],null,null),(l()(),s["ɵted"](-1,null,["\n          "])),(l()(),s["ɵeld"](10,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),s["ɵted"](-1,null,["\n        "])),(l()(),s["ɵted"](-1,2,["\n        "])),(l()(),s["ɵeld"](13,0,null,2,1,"h2",[],null,null,null,null,null)),(l()(),s["ɵted"](14,null,["",""])),(l()(),s["ɵted"](-1,2,["\n        "])),(l()(),s["ɵeld"](16,0,null,2,2,"p",[["class","small-text"],["style","font-size:1.25rem !important;"]],null,null,null,null,null)),(l()(),s["ɵted"](17,null,["",""])),s["ɵpid"](131072,N.CalendarPipe,[s.ChangeDetectorRef,s.NgZone]),(l()(),s["ɵted"](-1,2,["\n        "])),(l()(),s["ɵeld"](20,0,null,2,1,"p",[["class","respuesta-text"]],null,null,null,null,null)),(l()(),s["ɵted"](21,null,["",""])),(l()(),s["ɵted"](-1,2,["\n      "]))],null,function(l,n){l(n,10,0,n.context.$implicit.user.photoURL?n.context.$implicit.user.photoURL:"assets/imgs/profile.jpg");l(n,14,0,n.context.$implicit.user.displayName);l(n,17,0,s["ɵunv"](n,17,0,s["ɵnov"](n,18).transform(n.context.$implicit.date)));l(n,21,0,n.context.$implicit.text)})}function i(l){return s["ɵvid"](0,[(l()(),s["ɵeld"](0,0,null,null,35,"ion-list",[],null,null,null,null,null)),s["ɵdid"](1,16384,null,0,O.a,[D.a,s.ElementRef,s.Renderer,$.a,j.l,A.a],null,null),(l()(),s["ɵted"](-1,null,["\n      "])),(l()(),s["ɵeld"](3,0,null,null,7,"ion-list-header",[["class","item"]],null,null,null,T.b,T.a)),s["ɵdid"](4,1097728,null,3,q.a,[V.a,D.a,s.ElementRef,s.Renderer,[2,P.a]],null,null),s["ɵqud"](335544320,4,{contentLabel:0}),s["ɵqud"](603979776,5,{_buttons:1}),s["ɵqud"](603979776,6,{_icons:1}),s["ɵdid"](8,16384,null,0,H.a,[D.a,s.Renderer,s.ElementRef,[8,null]],null,null),(l()(),s["ɵeld"](9,0,null,2,1,"strong",[],null,null,null,null,null)),(l()(),s["ɵted"](-1,null,["Respuestas"])),(l()(),s["ɵted"](-1,null,["\n      "])),(l()(),s["ɵeld"](12,0,null,null,19,"ion-item",[["class","item item-block"]],null,null,null,T.b,T.a)),s["ɵdid"](13,1097728,null,3,q.a,[V.a,D.a,s.ElementRef,s.Renderer,[2,P.a]],null,null),s["ɵqud"](335544320,7,{contentLabel:0}),s["ɵqud"](603979776,8,{_buttons:1}),s["ɵqud"](603979776,9,{_icons:1}),s["ɵdid"](17,16384,null,0,M.a,[],null,null),(l()(),s["ɵted"](-1,2,["\n        "])),(l()(),s["ɵeld"](19,0,null,3,4,"ion-input",[["placeholder","Responder al post"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var u=!0;if("ngModelChange"===n){u=!1!==(l.component.tempR=e)&&u}return u},K.b,K.a)),s["ɵdid"](20,671744,null,0,U.h,[[8,null],[8,null],[8,null],[8,null]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),s["ɵprd"](2048,null,U.f,null,[U.h]),s["ɵdid"](22,16384,null,0,U.g,[U.f],null,null),s["ɵdid"](23,5423104,null,0,Z.a,[D.a,$.a,V.a,z.a,s.ElementRef,s.Renderer,[2,B.a],[2,q.a],[2,U.f],A.a],{disabled:[0,"disabled"],placeholder:[1,"placeholder"]},null),(l()(),s["ɵted"](-1,2,["\n        "])),(l()(),s["ɵeld"](25,0,null,4,5,"button",[["clear",""],["ion-button",""],["item-end",""]],[[8,"disabled",0]],[[null,"click"]],function(l,n,e){var u=!0,t=l.component;if("click"===n){u=!1!==t.addRespuesta(t.tempR)&&u}return u},G.b,G.a)),s["ɵdid"](26,1097728,[[8,4]],0,J.a,[[8,""],D.a,s.ElementRef,s.Renderer],{clear:[0,"clear"]},null),(l()(),s["ɵted"](-1,0,["\n          "])),(l()(),s["ɵeld"](28,0,null,0,1,"ion-icon",[["name","send"],["role","img"]],[[2,"hide",null]],null,null,null,null)),s["ɵdid"](29,147456,null,0,F.a,[D.a,s.ElementRef,s.Renderer],{name:[0,"name"]},null),(l()(),s["ɵted"](-1,0,["\n        "])),(l()(),s["ɵted"](-1,2,["\n      "])),(l()(),s["ɵted"](-1,null,["\n      "])),(l()(),s["ɵand"](16777216,null,null,1,null,d)),s["ɵdid"](34,802816,null,0,E.j,[s.ViewContainerRef,s.TemplateRef,s.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),s["ɵted"](-1,null,["\n    "]))],function(l,n){var e=n.component;l(n,20,0,e.lc,e.tempR);l(n,23,0,e.lc,"Responder al post");l(n,26,0,"");l(n,29,0,"send");l(n,34,0,n.context.ngIf.reverse())},function(l,n){var e=n.component;l(n,19,0,s["ɵnov"](n,22).ngClassUntouched,s["ɵnov"](n,22).ngClassTouched,s["ɵnov"](n,22).ngClassPristine,s["ɵnov"](n,22).ngClassDirty,s["ɵnov"](n,22).ngClassValid,s["ɵnov"](n,22).ngClassInvalid,s["ɵnov"](n,22).ngClassPending);l(n,25,0,!e.tempR||e.tempR.length<=0);l(n,28,0,s["ɵnov"](n,29)._hidden)})}function o(l){return s["ɵvid"](0,[(l()(),s["ɵeld"](0,0,null,null,21,"div",[],null,null,null,null,null)),(l()(),s["ɵted"](-1,null,["\n\n    "])),(l()(),s["ɵeld"](2,0,null,null,11,"ion-card",[],null,null,null,null,null)),s["ɵdid"](3,16384,null,0,k.a,[D.a,s.ElementRef,s.Renderer],null,null),(l()(),s["ɵted"](-1,null,["\n      "])),(l()(),s["ɵeld"](5,0,null,null,3,"ion-card-header",[["text-wrap",""]],null,null,null,null,null)),s["ɵdid"](6,16384,null,0,Q.a,[D.a,s.ElementRef,s.Renderer],null,null),(l()(),s["ɵeld"](7,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),s["ɵted"](8,null,["",""])),(l()(),s["ɵted"](-1,null,["\n      "])),(l()(),s["ɵeld"](10,0,null,null,2,"ion-card-content",[],null,null,null,null,null)),s["ɵdid"](11,16384,null,0,L.a,[D.a,s.ElementRef,s.Renderer],null,null),(l()(),s["ɵted"](12,null,["",""])),(l()(),s["ɵted"](-1,null,["\n    "])),(l()(),s["ɵted"](-1,null,["\n\n    "])),(l()(),s["ɵand"](16777216,null,null,1,null,a)),s["ɵdid"](16,16384,null,0,E.k,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),s["ɵted"](-1,null,["\n\n    "])),(l()(),s["ɵand"](16777216,null,null,2,null,i)),s["ɵdid"](19,16384,null,0,E.k,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),s["ɵpid"](131072,E.b,[s.ChangeDetectorRef]),(l()(),s["ɵted"](-1,null,["\n\n  "]))],function(l,n){var e=n.component;l(n,16,0,n.context.ngIf.best);l(n,19,0,s["ɵunv"](n,19,0,s["ɵnov"](n,20).transform(e.responses$)),s["ɵnov"](n.parent,16))},function(l,n){l(n,8,0,n.context.ngIf.title);l(n,12,0,n.context.ngIf.text)})}function r(l){return s["ɵvid"](0,[(l()(),s["ɵted"](-1,null,["¡"])),(l()(),s["ɵeld"](1,0,null,null,10,"ion-header",[],null,null,null,null,null)),s["ɵdid"](2,16384,null,0,W.a,[D.a,s.ElementRef,s.Renderer,[2,X.a]],null,null),(l()(),s["ɵted"](-1,null,["\n\n  "])),(l()(),s["ɵeld"](4,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Y.b,Y.a)),s["ɵdid"](5,49152,null,0,ll.a,[z.a,[2,X.a],[2,nl.a],D.a,s.ElementRef,s.Renderer],{color:[0,"color"]},null),(l()(),s["ɵted"](-1,3,["\n    "])),(l()(),s["ɵeld"](7,0,null,3,2,"ion-title",[],null,null,null,el.b,el.a)),s["ɵdid"](8,49152,null,0,ul.a,[D.a,s.ElementRef,s.Renderer,[2,tl.a],[2,ll.a]],null,null),(l()(),s["ɵted"](-1,0,["Hilo"])),(l()(),s["ɵted"](-1,3,["\n  "])),(l()(),s["ɵted"](-1,null,["\n\n"])),(l()(),s["ɵted"](-1,null,["\n\n\n"])),(l()(),s["ɵeld"](13,0,null,null,8,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,al.b,al.a)),s["ɵdid"](14,4374528,null,0,B.a,[D.a,$.a,A.a,s.ElementRef,s.Renderer,z.a,dl.a,s.NgZone,[2,X.a],[2,nl.a]],null,null),(l()(),s["ɵted"](-1,1,["\n\n  "])),(l()(),s["ɵand"](0,[["loader",2]],1,0,null,t)),(l()(),s["ɵted"](-1,1,["\n  \n  "])),(l()(),s["ɵand"](16777216,null,1,2,null,o)),s["ɵdid"](19,16384,null,0,E.k,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),s["ɵpid"](131072,E.b,[s.ChangeDetectorRef]),(l()(),s["ɵted"](-1,1,["\n\n"])),(l()(),s["ɵted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,5,0,"primary");l(n,19,0,s["ɵunv"](n,19,0,s["ɵnov"](n,20).transform(e.thread$)),s["ɵnov"](n,16))},function(l,n){l(n,4,0,s["ɵnov"](n,5)._hidden,s["ɵnov"](n,5)._sbPadding);l(n,13,0,s["ɵnov"](n,14).statusbarPadding,s["ɵnov"](n,14)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var s=e(0),c=(e(1),e(28),e(457)),f=(e(458),e(198)),p=this&&this.__awaiter||function(l,n,e,u){return new(e||(e=Promise))(function(t,a){function d(l){try{o(u.next(l))}catch(l){a(l)}}function i(l){try{o(u.throw(l))}catch(l){a(l)}}function o(l){l.done?t(l.value):new e(function(n){n(l.value)}).then(d,i)}o((u=u.apply(l,n||[])).next())})},m=this&&this.__generator||function(l,n){function e(e){return function(d){return function(e){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,t&&(a=t[2&e[0]?"return":e[0]?"throw":"next"])&&!(a=a.call(t,e[1])).done)return a;switch(t=0,a&&(e=[0,a.value]),e[0]){case 0:case 1:a=e;break;case 4:return i.label++,{value:e[1],done:!1};case 5:i.label++,t=e[1],e=[0];continue;case 7:e=i.ops.pop(),i.trys.pop();continue;default:if(a=i.trys,!(a=a.length>0&&a[a.length-1])&&(6===e[0]||2===e[0])){i=0;continue}if(3===e[0]&&(!a||e[1]>a[0]&&e[1]<a[3])){i.label=e[1];break}if(6===e[0]&&i.label<a[1]){i.label=a[1],a=e;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(e);break}a[2]&&i.ops.pop(),i.trys.pop();continue}e=n.call(l,i)}catch(l){e=[6,l],t=0}finally{u=a=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,d])}}var u,t,a,d,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return d={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(d[Symbol.iterator]=function(){return this}),d},g=function(){function l(l,n,e,u){this.navCtrl=l,this.navParams=n,this.afs=e,this.auth=u,this.id=this.navParams.get("id"),this.tempR="",this.lc=!1}return l.prototype.ionViewDidLoad=function(){var l=this;this.thread$=this.afs.collection(c.a.THREAD).doc(this.id).valueChanges(),this.responses$=this.afs.collection(c.a.THREAD_RESPONSE,function(n){return n.where("thread","==",l.id)}).valueChanges()},l.prototype.addRespuesta=function(l){return p(this,void 0,void 0,function(){var n;return m(this,function(e){switch(e.label){case 0:return this.lc=!0,n=this.afs.createId(),[4,this.afs.collection(c.a.THREAD_RESPONSE).doc(n).set({id:n,text:l,user:this.auth.user,user_id:this.auth.user.uid,thread:this.id,date:(new Date).toISOString()})];case 1:return e.sent(),this.tempR="",[2]}})})},l}(),h=(e(460),function(){return function(){}}()),v=e(447),R=e(448),b=e(449),x=e(450),y=e(451),I=e(452),_=e(453),C=e(454),w=e(455),E=e(16),k=e(203),D=e(3),T=e(459),q=e(29),V=e(23),P=e(74),M=e(131),S=e(205),F=e(63),L=e(209),N=e(214),O=e(96),$=e(6),j=e(8),A=e(14),H=e(133),K=e(583),U=e(22),Z=e(199),z=e(13),B=e(40),G=e(64),J=e(32),Q=e(206),W=e(130),X=e(7),Y=e(456),ll=e(53),nl=e(31),el=e(582),ul=e(196),tl=e(95),al=e(581),dl=e(61),il=e(15),ol=e(132),rl=s["ɵcrt"]({encapsulation:2,styles:[],data:{}}),sl=s["ɵccf"]("page-hilo-detail",g,function(l){return s["ɵvid"](0,[(l()(),s["ɵeld"](0,0,null,null,1,"page-hilo-detail",[],null,null,null,r,rl)),s["ɵdid"](1,49152,null,0,g,[nl.a,il.a,ol.AngularFirestore,f.a],null,null)],null,null)},{},{},[]),cl=e(197),fl=e(204),pl=e(62);e.d(n,"HiloDetailPageModuleNgFactory",function(){return ml});var ml=s["ɵcmf"](h,[],function(l){return s["ɵmod"]([s["ɵmpd"](512,s.ComponentFactoryResolver,s["ɵCodegenComponentFactoryResolver"],[[8,[v.a,R.a,b.a,x.a,y.a,I.a,_.a,C.a,w.a,sl]],[3,s.ComponentFactoryResolver],s.NgModuleRef]),s["ɵmpd"](4608,E.m,E.l,[s.LOCALE_ID,[2,E.w]]),s["ɵmpd"](4608,U.k,U.k,[]),s["ɵmpd"](4608,U.c,U.c,[]),s["ɵmpd"](512,E.c,E.c,[]),s["ɵmpd"](512,U.j,U.j,[]),s["ɵmpd"](512,U.d,U.d,[]),s["ɵmpd"](512,U.i,U.i,[]),s["ɵmpd"](512,cl.a,cl.a,[]),s["ɵmpd"](512,cl.b,cl.b,[]),s["ɵmpd"](512,fl.MomentModule,fl.MomentModule,[]),s["ɵmpd"](512,h,h,[]),s["ɵmpd"](256,pl.a,g,[])])})},581:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[t["ɵqud"](402653184,1,{_fixedContent:0}),t["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),t["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t["ɵncd"](null,1),t["ɵncd"](null,2)],null,null)}e.d(n,"a",function(){return a}),n.b=u;var t=e(0),a=(e(3),e(6),e(14),e(61),e(7),e(31),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,a.i,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}e.d(n,"a",function(){return d}),n.b=u;var t=e(0),a=e(16),d=(e(3),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},583:function(l,n,e){"use strict";function u(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,[[1,0],["textInput",1]],null,1,"input",[["class","text-input"],["dir","auto"]],[[8,"type",0],[1,"aria-labelledby",0],[1,"min",0],[1,"max",0],[1,"step",0],[1,"autocomplete",0],[1,"autocorrect",0],[8,"placeholder",0],[8,"disabled",0],[8,"readOnly",0]],[[null,"input"],[null,"blur"],[null,"focus"],[null,"keydown"]],function(l,n,e){var u=!0,t=l.component;if("input"===n){u=!1!==t.onInput(e)&&u}if("blur"===n){u=!1!==t.onBlur(e)&&u}if("focus"===n){u=!1!==t.onFocus(e)&&u}if("keydown"===n){u=!1!==t.onKeydown(e)&&u}return u},null,null)),o["ɵdid"](1,278528,null,0,r.i,[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(l,n){l(n,1,0,"text-input","text-input-"+n.component._mode)},function(l,n){var e=n.component;l(n,0,0,e._type,e._labelId,e.min,e.max,e.step,e.autocomplete,e.autocorrect,e.placeholder,e._disabled,e._readonly)})}function t(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,[[1,0],["textInput",1]],null,1,"textarea",[["class","text-input"]],[[1,"aria-labelledby",0],[1,"autocomplete",0],[1,"autocorrect",0],[8,"placeholder",0],[8,"disabled",0],[8,"readOnly",0]],[[null,"input"],[null,"blur"],[null,"focus"],[null,"keydown"]],function(l,n,e){var u=!0,t=l.component;if("input"===n){u=!1!==t.onInput(e)&&u}if("blur"===n){u=!1!==t.onBlur(e)&&u}if("focus"===n){u=!1!==t.onFocus(e)&&u}if("keydown"===n){u=!1!==t.onKeydown(e)&&u}return u},null,null)),o["ɵdid"](1,278528,null,0,r.i,[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(l,n){l(n,1,0,"text-input","text-input-"+n.component._mode)},function(l,n){var e=n.component;l(n,0,0,e._labelId,e.autocomplete,e.autocorrect,e.placeholder,e._disabled,e._readonly)})}function a(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,null,null,1,"button",[["class","text-input-clear-icon"],["clear",""],["ion-button",""],["tabindex","-1"],["type","button"]],null,[[null,"click"],[null,"mousedown"]],function(l,n,e){var u=!0,t=l.component;if("click"===n){u=!1!==t.clearTextInput(e)&&u}if("mousedown"===n){u=!1!==t.clearTextInput(e)&&u}return u},s.b,s.a)),o["ɵdid"](1,1097728,null,0,c.a,[[8,""],f.a,o.ElementRef,o.Renderer],{clear:[0,"clear"]},null)],function(l,n){l(n,1,0,"")},null)}function d(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,null,null,0,"div",[["class","input-cover"]],null,[[null,"touchstart"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"]],function(l,n,e){var u=!0,t=l.component;if("touchstart"===n){u=!1!==t._pointerStart(e)&&u}if("touchend"===n){u=!1!==t._pointerEnd(e)&&u}if("mousedown"===n){u=!1!==t._pointerStart(e)&&u}if("mouseup"===n){u=!1!==t._pointerEnd(e)&&u}return u},null,null))],null,null)}function i(l){return o["ɵvid"](2,[o["ɵqud"](671088640,1,{_native:0}),(l()(),o["ɵand"](16777216,null,null,1,null,u)),o["ɵdid"](2,16384,null,0,r.k,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["ɵand"](16777216,null,null,1,null,t)),o["ɵdid"](4,16384,null,0,r.k,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["ɵand"](16777216,null,null,1,null,a)),o["ɵdid"](6,16384,null,0,r.k,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["ɵand"](16777216,null,null,1,null,d)),o["ɵdid"](8,16384,null,0,r.k,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,2,0,!e._isTextarea);l(n,4,0,e._isTextarea);l(n,6,0,e._clearInput);l(n,8,0,e._useAssist)},null)}e.d(n,"a",function(){return p}),n.b=i;var o=e(0),r=e(16),s=e(64),c=e(32),f=e(3),p=(e(6),e(23),e(14),o["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
