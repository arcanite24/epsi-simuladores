<<<<<<< HEAD
webpackJsonp([21],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications__ = __webpack_require__(811);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */]),
            ],
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());

//# sourceMappingURL=notifications.module.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_back_back__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navCtrl, navParams, back, toast, load, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.toast = toast;
        this.load = load;
        this.viewCtrl = viewCtrl;
        this.notis = [];
        this.uid = localStorage.getItem('uid');
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        this.loadNotis();
    };
    NotificationsPage.prototype.reload = function (e) { this.loadNotis(function () { return e.complete(); }); };
    NotificationsPage.prototype.loadNotis = function (cb) {
        var _this = this;
        var l = this.load.create({ content: 'Cargando notificaciones...' });
        l.present();
        this.back.getNotisUser(this.uid).subscribe(function (data) {
            _this.notis = data;
            l.dismiss();
            if (cb)
                cb();
        }, function (err) {
            l.dismiss();
            _this.toast.create({ message: 'No se pudieron cargar las notificaciones', duration: 2000 }).present();
            _this.viewCtrl.dismiss();
        });
    };
    NotificationsPage.prototype.setRead = function (id, i, read) {
        var _this = this;
        if (read)
            return;
        this.notis[i].read = true;
        this.back.updateNoti(id, { read: this.notis[i].read }).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            _this.notis[i].read = read;
            _this.toast.create({ message: 'No se pudo marcar como leída la notificación...', duration: 2000 }).present();
        });
    };
    NotificationsPage.prototype.getDate = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3_moment___default()(date).fromNow();
    };
    NotificationsPage.prototype.handleClick = function (noti) {
        if (noti.hilo)
            this.navCtrl.push('HiloDetailPage', { id: noti.hilo.id });
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-notifications',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\notifications\notifications.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Notificaciones</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n\n\n  <ion-refresher (ionRefresh)="reload($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let n of notis.reverse(); let i = index" [ngClass]="{\'read\': n.read}" (click)="setRead(n.id, i, n.read); handleClick(n)" text-wrap>\n\n      <h2>{{n.title}} <small>{{getDate(n.createdAt)}}</small> </h2>\n\n      <p>{{n.desc}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\notifications\notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ViewController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ })

});
//# sourceMappingURL=21.js.map
=======
webpackJsonp([21],{574:function(l,n,e){"use strict";function u(l){return t["ɵvid"](0,[(l()(),t["ɵted"](-1,null,["\n"])),(l()(),t["ɵeld"](1,0,null,null,10,"ion-header",[],null,null,null,null,null)),t["ɵdid"](2,16384,null,0,b.a,[R.a,t.ElementRef,t.Renderer,[2,g.a]],null,null),(l()(),t["ɵted"](-1,null,["\n\n  "])),(l()(),t["ɵeld"](4,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,C.b,C.a)),t["ɵdid"](5,49152,null,0,y.a,[h.a,[2,g.a],[2,_.a],R.a,t.ElementRef,t.Renderer],null,null),(l()(),t["ɵted"](-1,3,["\n    "])),(l()(),t["ɵeld"](7,0,null,3,2,"ion-title",[],null,null,null,D.b,D.a)),t["ɵdid"](8,49152,null,0,E.a,[R.a,t.ElementRef,t.Renderer,[2,P.a],[2,y.a]],null,null),(l()(),t["ɵted"](-1,0,["ResultadoDetail"])),(l()(),t["ɵted"](-1,3,["\n  "])),(l()(),t["ɵted"](-1,null,["\n\n"])),(l()(),t["ɵted"](-1,null,["\n\n\n"])),(l()(),t["ɵeld"](13,0,null,null,2,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,k.b,k.a)),t["ɵdid"](14,4374528,null,0,w.a,[R.a,F.a,L.a,t.ElementRef,t.Renderer,h.a,j.a,t.NgZone,[2,g.a],[2,_.a]],null,null),(l()(),t["ɵted"](-1,1,["\n\n"])),(l()(),t["ɵted"](-1,null,["\n"]))],null,function(l,n){l(n,4,0,t["ɵnov"](n,5)._hidden,t["ɵnov"](n,5)._sbPadding);l(n,13,0,t["ɵnov"](n,14).statusbarPadding,t["ɵnov"](n,14)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var t=e(0),a=(e(1),e(28),function(){function l(l,n){this.navCtrl=l,this.navParams=n}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad ResultadoDetailPage")},l}()),d=function(){return function(){}}(),o=e(447),i=e(448),r=e(449),s=e(450),c=e(451),f=e(452),p=e(453),m=e(454),v=e(455),b=e(130),R=e(3),g=e(7),C=e(456),y=e(53),h=e(13),_=e(31),D=e(582),E=e(196),P=e(95),k=e(581),w=e(40),F=e(6),L=e(14),j=e(61),x=e(15),M=t["ɵcrt"]({encapsulation:2,styles:[],data:{}}),N=t["ɵccf"]("page-resultado-detail",a,function(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,1,"page-resultado-detail",[],null,null,null,u,M)),t["ɵdid"](1,49152,null,0,a,[_.a,x.a],null,null)],null,null)},{},{},[]),V=e(16),q=e(22),I=e(197),O=e(62);e.d(n,"ResultadoDetailPageModuleNgFactory",function(){return A});var A=t["ɵcmf"](d,[],function(l){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[o.a,i.a,r.a,s.a,c.a,f.a,p.a,m.a,v.a,N]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,V.m,V.l,[t.LOCALE_ID,[2,V.w]]),t["ɵmpd"](4608,q.k,q.k,[]),t["ɵmpd"](4608,q.c,q.c,[]),t["ɵmpd"](512,V.c,V.c,[]),t["ɵmpd"](512,q.j,q.j,[]),t["ɵmpd"](512,q.d,q.d,[]),t["ɵmpd"](512,q.i,q.i,[]),t["ɵmpd"](512,I.a,I.a,[]),t["ɵmpd"](512,I.b,I.b,[]),t["ɵmpd"](512,d,d,[]),t["ɵmpd"](256,O.a,a,[])])})},581:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[t["ɵqud"](402653184,1,{_fixedContent:0}),t["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),t["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t["ɵncd"](null,1),t["ɵncd"](null,2)],null,null)}e.d(n,"a",function(){return a}),n.b=u;var t=e(0),a=(e(3),e(6),e(14),e(61),e(7),e(31),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,a.i,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}e.d(n,"a",function(){return d}),n.b=u;var t=e(0),a=e(16),d=(e(3),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
