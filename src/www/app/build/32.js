<<<<<<< HEAD
webpackJsonp([32],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenDetailPageModule", function() { return ExamenDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__examen_detail__ = __webpack_require__(796);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExamenDetailPageModule = /** @class */ (function () {
    function ExamenDetailPageModule() {
    }
    ExamenDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__examen_detail__["a" /* ExamenDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__examen_detail__["a" /* ExamenDetailPage */]),
            ],
        })
    ], ExamenDetailPageModule);
    return ExamenDetailPageModule;
}());

//# sourceMappingURL=examen-detail.module.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamenDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_back_back__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__);
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






var ExamenDetailPage = /** @class */ (function () {
    function ExamenDetailPage(navCtrl, navParams, back, toast, viewCtrl, modal, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.toast = toast;
        this.viewCtrl = viewCtrl;
        this.modal = modal;
        this.afs = afs;
        this.id = this.navParams.get('id');
        this.type = this.navParams.get('type');
        this.isOffline = this.navParams.get('offline');
        this.l = false;
        this.index = 0;
        this.cacheKey = "examen-download-" + this.type + "-" + this.id;
        this.cacheList = [];
        this.testCache = !!localStorage.getItem(this.cacheKey);
        this.s = this.navParams.get('s') ? JSON.parse(this.navParams.get('s')) : null;
    }
    ExamenDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.exam$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].EXAM).doc(this.id)
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["tap"])(function (data) {
            _this.test = { name: data.name, preguntas: data.questions };
        }));
        /* if (this.s) return this.test = this.s.test
        
        this.back.getClase(this.id, this.type).subscribe(data => {
          if (!data.preguntas || data.preguntas.length <= 0) {
            this.toast.create({message: 'No existe un exámen para ésta clase...', duration: 2000}).present()
            this.viewCtrl.dismiss()
          } else {
            this.test = {name: data.name, preguntas: data.preguntas}
            const cache = JSON.parse(localStorage.getItem(`examen-cache-${this.type}-${this.id}`))
            if (cache) {
              this.index = cache.index
              this.test.preguntas[this.index].s = cache.selected
            }
          }
        }, err => {
          this.toast.create({message: 'No se pudo cargar el exámen...', duration: 2000}).present()
        })
    
        this.loadCacheList() */
    };
    ExamenDetailPage.prototype.enviarResultados = function () {
        var _this = this;
        this.l = true;
        var resultados = {};
        this.test.preguntas.forEach(function (p) {
            resultados[p.id] = {
                selected: p.s,
                pregunta: p
            };
        });
        if (this.isOffline) {
            var list = JSON.parse(localStorage.getItem('offline-results'));
            var offlineResults = list ? list : [];
            offlineResults.push(resultados);
            localStorage.setItem('offline-results', JSON.stringify(offlineResults));
            this.toast.create({ message: 'Tus resultados se guardaron correctamente.', duration: 2000 }).present();
            this.viewCtrl.dismiss(resultados);
        }
        else {
            this.back.addResultado(this.type, this.back.uid, this.id, resultados).subscribe(function (data) {
                _this.toast.create({ message: 'Resultados registrados correctamente.', duration: 2000 }).present();
                _this.viewCtrl.dismiss(data);
            }, function (err) {
                _this.l = false;
                _this.toast.create({ message: 'No se pudieron agregar tus resultados...', duration: 2000 }).present();
            });
        }
    };
    ExamenDetailPage.prototype.openResultados = function (id, type) {
        var m = this.modal.create('ResultadosExamenPage', { type: type, id: id });
        m.present();
    };
    ExamenDetailPage.prototype.next = function () {
        if (this.index == this.test.preguntas.length - 1) {
            this.enviarResultados();
        }
        else {
            this.saveCache();
            this.index++;
        }
    };
    ExamenDetailPage.prototype.saveCache = function () {
        var resultados = {};
        var selected = this.test.preguntas[this.index].s;
        this.test.preguntas.forEach(function (p) {
            resultados[p.id] = {
                selected: p.s,
                pregunta: p
            };
        });
        localStorage.setItem("examen-cache-" + this.type + "-" + this.id, JSON.stringify({
            index: this.index,
            resultados: resultados,
            selected: selected
        }));
        localStorage.setItem("examen-selected-" + this.type + "-" + this.id + "-" + this.index, this.test.preguntas[this.index].s);
    };
    ExamenDetailPage.prototype.prev = function () {
        this.index--;
        var selected = localStorage.getItem("examen-selected-" + this.type + "-" + this.id + "-" + this.index);
        if (selected)
            this.test.preguntas[this.index].s = selected;
    };
    ExamenDetailPage.prototype.openAvance = function () {
        var _this = this;
        var m = this.modal.create('AvanceExamenPage', { preguntas: this.test.preguntas });
        m.present();
        m.onDidDismiss(function (index) {
            if (!index)
                return;
            _this.index = index;
        });
    };
    ExamenDetailPage.prototype.loadCacheList = function () {
        var list = JSON.parse(localStorage.getItem('zamnademy-cache-list'));
        this.cacheList = list ? list : [];
    };
    ExamenDetailPage.prototype.downloadExamen = function () {
        var cache = {
            id: this.id,
            type: this.type,
            test: this.test
        };
        this.cacheList.push({
            id: cache.id,
            name: cache.test.name,
            type: cache.type
        });
        localStorage.setItem('zamnademy-cache-list', JSON.stringify(this.cacheList));
        localStorage.setItem(this.cacheKey, JSON.stringify(cache));
        this.testCache = cache;
        this.toast.create({ message: 'Exámen descargado correctamente.', duration: 2000 }).present();
    };
    ExamenDetailPage.prototype.removeExamen = function () {
        var _this = this;
        localStorage.removeItem(this.cacheKey);
        this.cacheList = this.cacheList.filter(function (test) { return test.id != _this.id; });
        localStorage.setItem('zamnademy-cache-list', JSON.stringify(this.cacheList));
        this.testCache = null;
    };
    ExamenDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-examen-detail',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\examen-detail\examen-detail.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{test ? test.name : \'Exámen\'}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee" *ngIf="(exam$ | async)">\n\n\n\n  <div class="flex-col" *ngIf="!test">\n\n    <img src="assets/imgs/rings.svg">\n\n  </div>\n\n\n\n  <div *ngIf="test">\n\n\n\n    <!--<ion-card *ngFor="let p of test.preguntas">\n\n      <img [src]="p.img" *ngIf="p.img">\n\n      <ion-card-header>{{p.text}}</ion-card-header>\n\n      <ion-list radio-group [(ngModel)]="p.s" [disabled]="l">\n\n        <ion-list-header>Respuestas</ion-list-header>\n\n        <ion-item *ngFor="let r of p.respuestas">\n\n          <ion-label>{{r.text}}</ion-label>\n\n          <ion-radio [value]="r.id"></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-card>-->\n\n\n\n    <ion-card>\n\n      <ion-list-header>Pregunta {{index + 1 | number}} de {{test ? test.preguntas.length : 0}}</ion-list-header>\n\n      <img [src]="test.preguntas[index].img" *ngIf="test.preguntas[index].img">\n\n      <ion-card-header text-wrap>{{test.preguntas[index].text}}</ion-card-header>\n\n\n\n      <ion-list radio-group [(ngModel)]="test.preguntas[index].s" [disabled]="l">\n\n        <ion-list-header>Respuestas</ion-list-header>\n\n        <ion-item *ngFor="let r of test.preguntas[index].respuestas" text-wrap>\n\n          <ion-label>{{r.text}}</ion-label>\n\n          <ion-radio [value]="r.id"></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-list *ngIf="test.preguntas[index].feedback && index > 0" class="mt-1">\n\n        <ion-list-header>Feedback Pregunta Anterior</ion-list-header>\n\n        <ion-item text-wrap>{{test.preguntas[index - 1].feedback}}</ion-item>\n\n      </ion-list>\n\n\n\n    </ion-card>\n\n\n\n    <div class="flex-row mb-1" *ngIf="test">\n\n      <button ion-button (click)="prev()" *ngIf="index > 0" ><ion-icon name="arrow-back"></ion-icon></button>\n\n      <button ion-button (click)="next()" [disabled]="l">{{index == test.preguntas.length - 1 ? \'Enviar Resultados\' : \'Siguiente Pregunta\'}}</button>  \n\n    </div>\n\n\n\n  </div>\n\n\n\n  <ion-fab right bottom *ngIf="type == \'simulador\'">\n\n    <button ion-fab color="rojito"><ion-icon name="menu"></ion-icon></button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab (click)="openResultados(id, type)">\n\n        <ion-label>Ver Resultados</ion-label>\n\n        <ion-icon name="checkbox"></ion-icon>\n\n      </button>\n\n      <button ion-fab (click)="openAvance()">\n\n        <ion-label>Avance</ion-label>\n\n        <ion-icon name="bookmark"></ion-icon>\n\n      </button>\n\n      <button ion-fab (click)="downloadExamen()" *ngIf="!testCache">\n\n        <ion-label>Descargar</ion-label>\n\n        <ion-icon name="cloud-download"></ion-icon>\n\n      </button>\n\n      <button ion-fab (click)="removeExamen()" *ngIf="testCache">\n\n        <ion-label>Borrar</ion-label>\n\n        <ion-icon name="trash"></ion-icon>\n\n      </button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\examen-detail\examen-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["AngularFirestore"]])
    ], ExamenDetailPage);
    return ExamenDetailPage;
}());

//# sourceMappingURL=examen-detail.js.map

/***/ })

});
//# sourceMappingURL=32.js.map
=======
webpackJsonp([32],{550:function(l,n,e){"use strict";function u(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,0,null,null,6,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.viewCtrl.dismiss(l.context.index)&&u}return u},R.b,R.a)),a["ɵdid"](1,1097728,null,3,g.a,[C.a,h.a,a.ElementRef,a.Renderer,[2,_.a]],null,null),a["ɵqud"](335544320,5,{contentLabel:0}),a["ɵqud"](603979776,6,{_buttons:1}),a["ɵqud"](603979776,7,{_icons:1}),a["ɵdid"](5,16384,null,0,E.a,[],null,null),(l()(),a["ɵted"](6,2,["",".-",""]))],null,function(l,n){l(n,6,0,n.context.index+1,n.context.$implicit.text)})}function t(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,0,null,null,22,"ion-header",[],null,null,null,null,null)),a["ɵdid"](1,16384,null,0,x.a,[h.a,a.ElementRef,a.Renderer,[2,y.a]],null,null),(l()(),a["ɵted"](-1,null,["\n\n  "])),(l()(),a["ɵeld"](3,0,null,null,18,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,k.b,k.a)),a["ɵdid"](4,49152,null,0,q.a,[P.a,[2,y.a],[2,w.a],h.a,a.ElementRef,a.Renderer],{color:[0,"color"]},null),(l()(),a["ɵted"](-1,3,["\n    "])),(l()(),a["ɵeld"](6,0,null,3,2,"ion-title",[],null,null,null,F.b,F.a)),a["ɵdid"](7,49152,null,0,j.a,[h.a,a.ElementRef,a.Renderer,[2,D.a],[2,q.a]],null,null),(l()(),a["ɵted"](-1,0,["Avance"])),(l()(),a["ɵted"](-1,3,["\n    "])),(l()(),a["ɵeld"](10,0,null,2,10,"ion-buttons",[["end",""]],null,null,null,null,null)),a["ɵdid"](11,16384,null,1,L.a,[h.a,a.ElementRef,a.Renderer,[2,D.a],[2,q.a]],null,null),a["ɵqud"](603979776,1,{_buttons:1}),(l()(),a["ɵted"](-1,null,["\n      "])),(l()(),a["ɵeld"](14,0,null,null,5,"button",[["icon-only",""],["ion-button",""]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.viewCtrl.dismiss()&&u}return u},O.b,O.a)),a["ɵdid"](15,1097728,[[1,4]],0,A.a,[[8,""],h.a,a.ElementRef,a.Renderer],null,null),(l()(),a["ɵted"](-1,0,["\n        "])),(l()(),a["ɵeld"](17,0,null,0,1,"ion-icon",[["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a["ɵdid"](18,147456,null,0,I.a,[h.a,a.ElementRef,a.Renderer],{name:[0,"name"]},null),(l()(),a["ɵted"](-1,0,["\n      "])),(l()(),a["ɵted"](-1,null,["\n    "])),(l()(),a["ɵted"](-1,3,["\n  "])),(l()(),a["ɵted"](-1,null,["\n\n"])),(l()(),a["ɵted"](-1,null,["\n\n\n"])),(l()(),a["ɵeld"](24,0,null,null,17,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,M.b,M.a)),a["ɵdid"](25,4374528,null,0,N.a,[h.a,V.a,J.a,a.ElementRef,a.Renderer,P.a,K.a,a.NgZone,[2,y.a],[2,w.a]],null,null),(l()(),a["ɵted"](-1,1,["\n\n  "])),(l()(),a["ɵeld"](27,0,null,1,13,"ion-list",[],null,null,null,null,null)),a["ɵdid"](28,16384,null,0,T.a,[h.a,a.ElementRef,a.Renderer,V.a,Z.l,J.a],null,null),(l()(),a["ɵted"](-1,null,["\n    "])),(l()(),a["ɵeld"](30,0,null,null,6,"ion-list-header",[["class","item"]],null,null,null,R.b,R.a)),a["ɵdid"](31,1097728,null,3,g.a,[C.a,h.a,a.ElementRef,a.Renderer,[2,_.a]],null,null),a["ɵqud"](335544320,2,{contentLabel:0}),a["ɵqud"](603979776,3,{_buttons:1}),a["ɵqud"](603979776,4,{_icons:1}),a["ɵdid"](35,16384,null,0,$.a,[h.a,a.Renderer,a.ElementRef,[8,null]],null,null),(l()(),a["ɵted"](-1,2,["Preguntas"])),(l()(),a["ɵted"](-1,null,["\n    "])),(l()(),a["ɵand"](16777216,null,null,1,null,u)),a["ɵdid"](39,802816,null,0,z.j,[a.ViewContainerRef,a.TemplateRef,a.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),a["ɵted"](-1,null,["\n  "])),(l()(),a["ɵted"](-1,1,["\n\n"])),(l()(),a["ɵted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,4,0,"primary");l(n,18,0,"close");l(n,39,0,e.preguntas)},function(l,n){l(n,3,0,a["ɵnov"](n,4)._hidden,a["ɵnov"](n,4)._sbPadding);l(n,17,0,a["ɵnov"](n,18)._hidden);l(n,24,0,a["ɵnov"](n,25).statusbarPadding,a["ɵnov"](n,25)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var a=e(0),d=(e(1),e(28),function(){return function(l,n,e){this.navCtrl=l,this.navParams=n,this.viewCtrl=e,this.preguntas=this.navParams.get("preguntas")}}()),i=function(){return function(){}}(),o=e(447),r=e(448),c=e(449),s=e(450),f=e(451),m=e(452),p=e(453),v=e(454),b=e(455),R=e(459),g=e(29),C=e(23),h=e(3),_=e(74),E=e(131),x=e(130),y=e(7),k=e(456),q=e(53),P=e(13),w=e(31),F=e(582),j=e(196),D=e(95),L=e(201),O=e(64),A=e(32),I=e(63),M=e(581),N=e(40),V=e(6),J=e(14),K=e(61),T=e(96),Z=e(8),$=e(133),z=e(16),B=e(15),G=a["ɵcrt"]({encapsulation:2,styles:[],data:{}}),H=a["ɵccf"]("page-avance-examen",d,function(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,0,null,null,1,"page-avance-examen",[],null,null,null,t,G)),a["ɵdid"](1,49152,null,0,d,[w.a,B.a,y.a],null,null)],null,null)},{},{},[]),Q=e(22),S=e(197),U=e(62);e.d(n,"AvanceExamenPageModuleNgFactory",function(){return W});var W=a["ɵcmf"](i,[],function(l){return a["ɵmod"]([a["ɵmpd"](512,a.ComponentFactoryResolver,a["ɵCodegenComponentFactoryResolver"],[[8,[o.a,r.a,c.a,s.a,f.a,m.a,p.a,v.a,b.a,H]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["ɵmpd"](4608,z.m,z.l,[a.LOCALE_ID,[2,z.w]]),a["ɵmpd"](4608,Q.k,Q.k,[]),a["ɵmpd"](4608,Q.c,Q.c,[]),a["ɵmpd"](512,z.c,z.c,[]),a["ɵmpd"](512,Q.j,Q.j,[]),a["ɵmpd"](512,Q.d,Q.d,[]),a["ɵmpd"](512,Q.i,Q.i,[]),a["ɵmpd"](512,S.a,S.a,[]),a["ɵmpd"](512,S.b,S.b,[]),a["ɵmpd"](512,i,i,[]),a["ɵmpd"](256,U.a,d,[])])})},581:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[t["ɵqud"](402653184,1,{_fixedContent:0}),t["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),t["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t["ɵncd"](null,1),t["ɵncd"](null,2)],null,null)}e.d(n,"a",function(){return a}),n.b=u;var t=e(0),a=(e(3),e(6),e(14),e(61),e(7),e(31),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,a.i,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}e.d(n,"a",function(){return d}),n.b=u;var t=e(0),a=e(16),d=(e(3),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
