<<<<<<< HEAD
webpackJsonp([8],{

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemaAltPageModule", function() { return TemaAltPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tema_alt__ = __webpack_require__(825);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TemaAltPageModule = /** @class */ (function () {
    function TemaAltPageModule() {
    }
    TemaAltPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tema_alt__["a" /* TemaAltPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tema_alt__["a" /* TemaAltPage */]),
            ],
        })
    ], TemaAltPageModule);
    return TemaAltPageModule;
}());

//# sourceMappingURL=tema-alt.module.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemaAltPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var TemaAltPage = /** @class */ (function () {
    function TemaAltPage(navCtrl, navParams, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.id = this.navParams.get('id');
    }
    TemaAltPage.prototype.ionViewDidLoad = function () {
        this.loadContent(this.id);
        this.loadChildren(this.id);
    };
    TemaAltPage.prototype.loadContent = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.data.getDocAlt(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].CONTENT, id)];
                    case 1:
                        _a.tema = _b.sent();
                        if (this.tema && this.tema.event)
                            this.loadEvent(this.tema.event);
                        return [2 /*return*/];
                }
            });
        });
    };
    TemaAltPage.prototype.loadChildren = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var children;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data.getCollectionQuery(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].CONTENT, function (ref) { return ref.where('parent_id', '==', id); })];
                    case 1:
                        children = _a.sent();
                        this.children = children.filter(function (c) { return c.liberadoInPrograma; });
                        return [2 /*return*/];
                }
            });
        });
    };
    TemaAltPage.prototype.loadEvent = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.data.getDocAlt(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].EVENT, id)];
                    case 1:
                        _a.event = _b.sent();
                        console.log(this.event);
                        return [2 /*return*/];
                }
            });
        });
    };
    TemaAltPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tema-alt',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\tema-alt\tema-alt.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{tema ? tema.name : \'...\'}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-card *ngIf="event as e">\n\n    <ion-card-header>{{e.title}}</ion-card-header>\n    <ion-card-content>{{e.desc}}</ion-card-content>\n\n    <ion-list>\n\n      <ion-item *ngFor="let task of e.tasks">\n        <ion-label>{{task.label}}</ion-label>\n        <ion-checkbox></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Terminé de estudiar éste tema</ion-label>\n        <ion-checkbox></ion-checkbox>\n      </ion-item>\n\n      <ion-item-divider></ion-item-divider>\n\n      <ion-item *ngFor="let link of e.links">\n        <button ion-button>{{link.label}}</button>\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\tema-alt\tema-alt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], TemaAltPage);
    return TemaAltPage;
}());

//# sourceMappingURL=tema-alt.js.map

/***/ })

});
//# sourceMappingURL=8.js.map
=======
webpackJsonp([8],{554:function(l,n,e){"use strict";function u(l){return h["ɵvid"](0,[(l()(),h["ɵeld"](0,0,null,null,3,"div",[["class","flex-col"]],null,null,null,null,null)),(l()(),h["ɵted"](-1,null,["\n    "])),(l()(),h["ɵeld"](2,0,null,null,0,"img",[["src","assets/imgs/rings.svg"]],null,null,null,null,null)),(l()(),h["ɵted"](-1,null,["\n  "]))],null,null)}function t(l){return h["ɵvid"](0,[(l()(),h["ɵeld"](0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,function(l,n){var e=n.component;l(n,0,0,e.test.preguntas[e.index].img)})}function a(l){return h["ɵvid"](0,[(l()(),h["ɵeld"](0,0,null,null,13,"ion-item",[["class","item item-block"],["text-wrap",""]],null,null,null,L.b,L.a)),h["ɵdid"](1,1097728,null,3,P.a,[O.a,D.a,h.ElementRef,h.Renderer,[2,V.a]],null,null),h["ɵqud"](335544320,9,{contentLabel:0}),h["ɵqud"](603979776,10,{_buttons:1}),h["ɵqud"](603979776,11,{_icons:1}),h["ɵdid"](5,16384,null,0,T.a,[],null,null),(l()(),h["ɵted"](-1,2,["\n          "])),(l()(),h["ɵeld"](7,0,null,1,2,"ion-label",[],null,null,null,null,null)),h["ɵdid"](8,16384,[[9,4]],0,N.a,[D.a,h.ElementRef,h.Renderer,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),h["ɵted"](9,null,["",""])),(l()(),h["ɵted"](-1,2,["\n          "])),(l()(),h["ɵeld"](11,0,null,4,1,"ion-radio",[],[[2,"radio-disabled",null]],[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==h["ɵnov"](l,12)._click(e)&&u}return u},A.b,A.a)),h["ɵdid"](12,245760,null,0,J.a,[O.a,D.a,h.ElementRef,h.Renderer,[2,P.a],[2,F.a]],{value:[0,"value"]},null),(l()(),h["ɵted"](-1,2,["\n        "]))],function(l,n){l(n,12,0,n.context.$implicit.id)},function(l,n){l(n,9,0,n.context.$implicit.text);l(n,11,0,h["ɵnov"](n,12)._disabled)})}function i(l){return h["ɵvid"](0,[(l()(),h["ɵeld"](0,0,null,null,18,"ion-list",[["class","mt-1"]],null,null,null,null,null)),h["ɵdid"](1,16384,null,0,j.a,[D.a,h.ElementRef,h.Renderer,M.a,K.l,$.a],null,null),(l()(),h["ɵted"](-1,null,["\n        "])),(l()(),h["ɵeld"](3,0,null,null,6,"ion-list-header",[["class","item"]],null,null,null,L.b,L.a)),h["ɵdid"](4,1097728,null,3,P.a,[O.a,D.a,h.ElementRef,h.Renderer,[2,V.a]],null,null),h["ɵqud"](335544320,12,{contentLabel:0}),h["ɵqud"](603979776,13,{_buttons:1}),h["ɵqud"](603979776,14,{_icons:1}),h["ɵdid"](8,16384,null,0,z.a,[D.a,h.Renderer,h.ElementRef,[8,null]],null,null),(l()(),h["ɵted"](-1,2,["Feedback Pregunta Anterior"])),(l()(),h["ɵted"](-1,null,["\n        "])),(l()(),h["ɵeld"](11,0,null,null,6,"ion-item",[["class","item item-block"],["text-wrap",""]],null,null,null,L.b,L.a)),h["ɵdid"](12,1097728,null,3,P.a,[O.a,D.a,h.ElementRef,h.Renderer,[2,V.a]],null,null),h["ɵqud"](335544320,15,{contentLabel:0}),h["ɵqud"](603979776,16,{_buttons:1}),h["ɵqud"](603979776,17,{_icons:1}),h["ɵdid"](16,16384,null,0,T.a,[],null,null),(l()(),h["ɵted"](17,2,["",""])),(l()(),h["ɵted"](-1,null,["\n      "]))],null,function(l,n){var e=n.component;l(n,17,0,e.test.preguntas[e.index-1].feedback)})}function d(l){return h["ɵvid"](0,[(l()(),h["ɵeld"](0,0,null,null,3,"button",[["ion-button",""]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.prev()&&u}return u},B.b,B.a)),h["ɵdid"](1,1097728,null,0,U.a,[[8,""],D.a,h.ElementRef,h.Renderer],null,null),(l()(),h["ɵeld"](2,0,null,0,1,"ion-icon",[["name","arrow-back"],["role","img"]],[[2,"hide",null]],null,null,null,null)),h["ɵdid"](3,147456,null,0,X.a,[D.a,h.ElementRef,h.Renderer],{name:[0,"name"]},null)],function(l,n){l(n,3,0,"arrow-back")},function(l,n){l(n,2,0,h["ɵnov"](n,3)._hidden)})}function o(l){return h["ɵvid"](0,[(l()(),h["ɵeld"](0,0,null,null,8,"div",[["class","flex-row mb-1"]],null,null,null,null,null)),(l()(),h["ɵted"](-1,null,["\n      "])),(l()(),h["ɵand"](16777216,null,null,1,null,d)),h["ɵdid"](3,16384,null,0,Z.k,[h.ViewContainerRef,h.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),h["ɵted"](-1,null,["\n      "])),(l()(),h["ɵeld"](5,0,null,null,2,"button",[["ion-button",""]],[[8,"disabled",0]],[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.next()&&u}return u},B.b,B.a)),h["ɵdid"](6,1097728,null,0,U.a,[[8,""],D.a,h.ElementRef,h.Renderer],null,null),(l()(),h["ɵted"](7,0,["",""])),(l()(),h["ɵted"](-1,null,["  \n    "]))],function(l,n){l(n,3,0,n.component.index>0)},function(l,n){var e=n.component;l(n,5,0,e.l);l(n,7,0,e.index==e.test.preguntas.length-1?"Enviar Resultados":"Siguiente Pregunta")})}function r(l){return h["ɵvid"](0,[(l()(),h["ɵeld"](0,0,null,null,49,"div",[],null,null,null,null,null)),(l()(),h["ɵted"](-1,null,["\n\n    "])),(l()(),h["ɵted"](-1,null,["\n\n    "])),(l()(),h["ɵeld"](3,0,null,null,42,"ion-card",[],null,null,null,null,null)),h["ɵdid"](4,16384,null,0,G.a,[D.a,h.ElementRef,h.Renderer],null,null),(l()(),h["ɵted"](-1,null,["\n      "])),(l()(),h["ɵeld"](6,0,null,null,7,"ion-list-header",[["class","item"]],null,null,null,L.b,L.a)),h["ɵdid"](7,1097728,null,3,P.a,[O.a,D.a,h.ElementRef,h.Renderer,[2,V.a]],null,null),h["ɵqud"](335544320,2,{contentLabel:0}),h["ɵqud"](603979776,3,{_buttons:1}),h["ɵqud"](603979776,4,{_icons:1}),h["ɵdid"](11,16384,null,0,z.a,[D.a,h.Renderer,h.ElementRef,[8,null]],null,null),(l()(),h["ɵted"](12,2,["Pregunta "," de ",""])),h["ɵppd"](13,1),(l()(),h["ɵted"](-1,null,["\n      "])),(l()(),h["ɵand"](16777216,null,null,1,null,t)),h["ɵdid"](16,16384,null,0,Z.k,[h.ViewContainerRef,h.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),h["ɵted"](-1,null,["\n      "])),(l()(),h["ɵeld"](18,0,null,null,2,"ion-card-header",[["text-wrap",""]],null,null,null,null,null)),h["ɵdid"](19,16384,null,0,H.a,[D.a,h.ElementRef,h.Renderer],null,null),(l()(),h["ɵted"](20,null,["",""])),(l()(),h["ɵted"](-1,null,["\n\n      "])),(l()(),h["ɵeld"](22,0,null,null,19,"ion-list",[["radio-group",""],["role","radiogroup"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var u=!0,t=l.component;if("ngModelChange"===n){u=!1!==(t.test.preguntas[t.index].s=e)&&u}return u},null,null)),h["ɵdid"](23,1064960,null,1,F.a,[h.Renderer,h.ElementRef,h.ChangeDetectorRef],{disabled:[0,"disabled"]},null),h["ɵqud"](335544320,5,{_header:0}),h["ɵprd"](1024,null,Q.e,function(l){return[l]},[F.a]),h["ɵdid"](26,671744,null,0,Q.h,[[8,null],[8,null],[8,null],[2,Q.e]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),h["ɵprd"](2048,null,Q.f,null,[Q.h]),h["ɵdid"](28,16384,null,0,Q.g,[Q.f],null,null),h["ɵdid"](29,16384,null,0,j.a,[D.a,h.ElementRef,h.Renderer,M.a,K.l,$.a],null,null),(l()(),h["ɵted"](-1,null,["\n        "])),(l()(),h["ɵeld"](31,0,null,null,6,"ion-list-header",[["class","item"]],null,null,null,L.b,L.a)),h["ɵdid"](32,1097728,null,3,P.a,[O.a,D.a,h.ElementRef,h.Renderer,[2,V.a]],null,null),h["ɵqud"](335544320,6,{contentLabel:0}),h["ɵqud"](603979776,7,{_buttons:1}),h["ɵqud"](603979776,8,{_icons:1}),h["ɵdid"](36,16384,[[5,4]],0,z.a,[D.a,h.Renderer,h.ElementRef,[8,null]],null,null),(l()(),h["ɵted"](-1,2,["Respuestas"])),(l()(),h["ɵted"](-1,null,["\n        "])),(l()(),h["ɵand"](16777216,null,null,1,null,a)),h["ɵdid"](40,802816,null,0,Z.j,[h.ViewContainerRef,h.TemplateRef,h.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),h["ɵted"](-1,null,["\n      "])),(l()(),h["ɵted"](-1,null,["\n\n      "])),(l()(),h["ɵand"](16777216,null,null,1,null,i)),h["ɵdid"](44,16384,null,0,Z.k,[h.ViewContainerRef,h.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),h["ɵted"](-1,null,["\n\n    "])),(l()(),h["ɵted"](-1,null,["\n\n    "])),(l()(),h["ɵand"](16777216,null,null,1,null,o)),h["ɵdid"](48,16384,null,0,Z.k,[h.ViewContainerRef,h.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),h["ɵted"](-1,null,["\n\n  "]))],function(l,n){var e=n.component;l(n,16,0,e.test.preguntas[e.index].img);l(n,23,0,e.l);l(n,26,0,e.l,e.test.preguntas[e.index].s);l(n,40,0,e.test.preguntas[e.index].respuestas);l(n,44,0,e.test.preguntas[e.index].feedback&&e.index>0);l(n,48,0,e.test)},function(l,n){var e=n.component;l(n,12,0,h["ɵunv"](n,12,0,l(n,13,0,h["ɵnov"](n.parent.parent,0),e.index+1)),e.test?e.test.preguntas.length:0);l(n,20,0,e.test.preguntas[e.index].text);l(n,22,0,h["ɵnov"](n,28).ngClassUntouched,h["ɵnov"](n,28).ngClassTouched,h["ɵnov"](n,28).ngClassPristine,h["ɵnov"](n,28).ngClassDirty,h["ɵnov"](n,28).ngClassValid,h["ɵnov"](n,28).ngClassInvalid,h["ɵnov"](n,28).ngClassPending)})}function s(l){return h["ɵvid"](0,[(l()(),h["ɵeld"](0,0,null,null,9,"button",[["ion-fab",""]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.downloadExamen()&&u}return u},W.b,W.a)),h["ɵdid"](1,49152,[[20,4],[18,4]],0,Y.a,[D.a,h.ElementRef,h.Renderer],null,null),(l()(),h["ɵted"](-1,0,["\n        "])),(l()(),h["ɵeld"](3,0,null,0,2,"ion-label",[],null,null,null,null,null)),h["ɵdid"](4,16384,null,0,N.a,[D.a,h.ElementRef,h.Renderer,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),h["ɵted"](-1,null,["Descargar"])),(l()(),h["ɵted"](-1,0,["\n        "])),(l()(),h["ɵeld"](7,0,null,0,1,"ion-icon",[["name","cloud-download"],["role","img"]],[[2,"hide",null]],null,null,null,null)),h["ɵdid"](8,147456,null,0,X.a,[D.a,h.ElementRef,h.Renderer],{name:[0,"name"]},null),(l()(),h["ɵted"](-1,0,["\n      "]))],function(l,n){l(n,8,0,"cloud-download")},function(l,n){l(n,7,0,h["ɵnov"](n,8)._hidden)})}function c(l){return h["ɵvid"](0,[(l()(),h["ɵeld"](0,0,null,null,9,"button",[["ion-fab",""]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.removeExamen()&&u}return u},W.b,W.a)),h["ɵdid"](1,49152,[[20,4],[18,4]],0,Y.a,[D.a,h.ElementRef,h.Renderer],null,null),(l()(),h["ɵted"](-1,0,["\n        "])),(l()(),h["ɵeld"](3,0,null,0,2,"ion-label",[],null,null,null,null,null)),h["ɵdid"](4,16384,null,0,N.a,[D.a,h.ElementRef,h.Renderer,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),h["ɵted"](-1,null,["Borrar"])),(l()(),h["ɵted"](-1,0,["\n        "])),(l()(),h["ɵeld"](7,0,null,0,1,"ion-icon",[["name","trash"],["role","img"]],[[2,"hide",null]],null,null,null,null)),h["ɵdid"](8,147456,null,0,X.a,[D.a,h.ElementRef,h.Renderer],{name:[0,"name"]},null),(l()(),h["ɵted"](-1,0,["\n      "]))],function(l,n){l(n,8,0,"trash")},function(l,n){l(n,7,0,h["ɵnov"](n,8)._hidden)})}function f(l){return h["ɵvid"](0,[(l()(),h["ɵeld"](0,0,null,null,42,"ion-fab",[["bottom",""],["right",""]],null,null,null,ll.b,ll.a)),h["ɵdid"](1,1228800,null,2,nl.a,[M.a],null,null),h["ɵqud"](603979776,18,{_mainButton:0}),h["ɵqud"](603979776,19,{_fabLists:1}),(l()(),h["ɵted"](-1,0,["\n    "])),(l()(),h["ɵeld"](5,0,null,0,3,"button",[["color","rojito"],["ion-fab",""]],null,null,null,W.b,W.a)),h["ɵdid"](6,49152,[[18,4]],0,Y.a,[D.a,h.ElementRef,h.Renderer],{color:[0,"color"]},null),(l()(),h["ɵeld"](7,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),h["ɵdid"](8,147456,null,0,X.a,[D.a,h.ElementRef,h.Renderer],{name:[0,"name"]},null),(l()(),h["ɵted"](-1,0,["\n    "])),(l()(),h["ɵeld"](10,0,null,0,31,"ion-fab-list",[["side","top"]],null,null,null,null,null)),h["ɵdid"](11,16384,[[19,4]],1,el.a,[h.ElementRef,h.Renderer,D.a,M.a],null,null),h["ɵqud"](603979776,20,{_setbuttons:1}),(l()(),h["ɵted"](-1,null,["\n      "])),(l()(),h["ɵeld"](14,0,null,null,9,"button",[["ion-fab",""]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;if("click"===n){u=!1!==t.openResultados(t.id,t.type)&&u}return u},W.b,W.a)),h["ɵdid"](15,49152,[[20,4],[18,4]],0,Y.a,[D.a,h.ElementRef,h.Renderer],null,null),(l()(),h["ɵted"](-1,0,["\n        "])),(l()(),h["ɵeld"](17,0,null,0,2,"ion-label",[],null,null,null,null,null)),h["ɵdid"](18,16384,null,0,N.a,[D.a,h.ElementRef,h.Renderer,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),h["ɵted"](-1,null,["Ver Resultados"])),(l()(),h["ɵted"](-1,0,["\n        "])),(l()(),h["ɵeld"](21,0,null,0,1,"ion-icon",[["name","checkbox"],["role","img"]],[[2,"hide",null]],null,null,null,null)),h["ɵdid"](22,147456,null,0,X.a,[D.a,h.ElementRef,h.Renderer],{name:[0,"name"]},null),(l()(),h["ɵted"](-1,0,["\n      "])),(l()(),h["ɵted"](-1,null,["\n      "])),(l()(),h["ɵeld"](25,0,null,null,9,"button",[["ion-fab",""]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.openAvance()&&u}return u},W.b,W.a)),h["ɵdid"](26,49152,[[20,4],[18,4]],0,Y.a,[D.a,h.ElementRef,h.Renderer],null,null),(l()(),h["ɵted"](-1,0,["\n        "])),(l()(),h["ɵeld"](28,0,null,0,2,"ion-label",[],null,null,null,null,null)),h["ɵdid"](29,16384,null,0,N.a,[D.a,h.ElementRef,h.Renderer,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),h["ɵted"](-1,null,["Avance"])),(l()(),h["ɵted"](-1,0,["\n        "])),(l()(),h["ɵeld"](32,0,null,0,1,"ion-icon",[["name","bookmark"],["role","img"]],[[2,"hide",null]],null,null,null,null)),h["ɵdid"](33,147456,null,0,X.a,[D.a,h.ElementRef,h.Renderer],{name:[0,"name"]},null),(l()(),h["ɵted"](-1,0,["\n      "])),(l()(),h["ɵted"](-1,null,["\n      "])),(l()(),h["ɵand"](16777216,null,null,1,null,s)),h["ɵdid"](37,16384,null,0,Z.k,[h.ViewContainerRef,h.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),h["ɵted"](-1,null,["\n      "])),(l()(),h["ɵand"](16777216,null,null,1,null,c)),h["ɵdid"](40,16384,null,0,Z.k,[h.ViewContainerRef,h.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),h["ɵted"](-1,null,["\n    "])),(l()(),h["ɵted"](-1,0,["\n  "]))],function(l,n){var e=n.component;l(n,6,0,"rojito");l(n,8,0,"menu");l(n,22,0,"checkbox");l(n,33,0,"bookmark");l(n,37,0,!e.testCache);l(n,40,0,e.testCache)},function(l,n){l(n,7,0,h["ɵnov"](n,8)._hidden);l(n,21,0,h["ɵnov"](n,22)._hidden);l(n,32,0,h["ɵnov"](n,33)._hidden)})}function m(l){return h["ɵvid"](0,[(l()(),h["ɵeld"](0,0,null,null,11,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,ul.b,ul.a)),h["ɵdid"](1,4374528,null,0,tl.a,[D.a,M.a,$.a,h.ElementRef,h.Renderer,al.a,il.a,h.NgZone,[2,dl.a],[2,ol.a]],null,null),(l()(),h["ɵted"](-1,1,["\n\n  "])),(l()(),h["ɵand"](16777216,null,1,1,null,u)),h["ɵdid"](4,16384,null,0,Z.k,[h.ViewContainerRef,h.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),h["ɵted"](-1,1,["\n\n  "])),(l()(),h["ɵand"](16777216,null,1,1,null,r)),h["ɵdid"](7,16384,null,0,Z.k,[h.ViewContainerRef,h.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),h["ɵted"](-1,1,["\n\n  "])),(l()(),h["ɵand"](16777216,null,0,1,null,f)),h["ɵdid"](10,16384,null,0,Z.k,[h.ViewContainerRef,h.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),h["ɵted"](-1,1,["\n\n"]))],function(l,n){var e=n.component;l(n,4,0,!e.test);l(n,7,0,e.test);l(n,10,0,"simulador"==e.type)},function(l,n){l(n,0,0,h["ɵnov"](n,1).statusbarPadding,h["ɵnov"](n,1)._hasRefresher)})}function p(l){return h["ɵvid"](0,[h["ɵpid"](0,Z.e,[h.LOCALE_ID]),(l()(),h["ɵeld"](1,0,null,null,22,"ion-header",[],null,null,null,null,null)),h["ɵdid"](2,16384,null,0,rl.a,[D.a,h.ElementRef,h.Renderer,[2,dl.a]],null,null),(l()(),h["ɵted"](-1,null,["\n\n  "])),(l()(),h["ɵeld"](4,0,null,null,18,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,sl.b,sl.a)),h["ɵdid"](5,49152,null,0,cl.a,[al.a,[2,dl.a],[2,ol.a],D.a,h.ElementRef,h.Renderer],{color:[0,"color"]},null),(l()(),h["ɵted"](-1,3,["\n    "])),(l()(),h["ɵeld"](7,0,null,3,2,"ion-title",[],null,null,null,fl.b,fl.a)),h["ɵdid"](8,49152,null,0,ml.a,[D.a,h.ElementRef,h.Renderer,[2,pl.a],[2,cl.a]],null,null),(l()(),h["ɵted"](9,0,["",""])),(l()(),h["ɵted"](-1,3,["\n    "])),(l()(),h["ɵeld"](11,0,null,2,10,"ion-buttons",[["end",""]],null,null,null,null,null)),h["ɵdid"](12,16384,null,1,hl.a,[D.a,h.ElementRef,h.Renderer,[2,pl.a],[2,cl.a]],null,null),h["ɵqud"](603979776,1,{_buttons:1}),(l()(),h["ɵted"](-1,null,["\n      "])),(l()(),h["ɵeld"](15,0,null,null,5,"button",[["icon-only",""],["ion-button",""]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.viewCtrl.dismiss()&&u}return u},B.b,B.a)),h["ɵdid"](16,1097728,[[1,4]],0,U.a,[[8,""],D.a,h.ElementRef,h.Renderer],null,null),(l()(),h["ɵted"](-1,0,["\n        "])),(l()(),h["ɵeld"](18,0,null,0,1,"ion-icon",[["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),h["ɵdid"](19,147456,null,0,X.a,[D.a,h.ElementRef,h.Renderer],{name:[0,"name"]},null),(l()(),h["ɵted"](-1,0,["\n      "])),(l()(),h["ɵted"](-1,null,["\n    "])),(l()(),h["ɵted"](-1,3,["\n  "])),(l()(),h["ɵted"](-1,null,["\n\n"])),(l()(),h["ɵted"](-1,null,["\n\n\n"])),(l()(),h["ɵand"](16777216,null,null,2,null,m)),h["ɵdid"](26,16384,null,0,Z.k,[h.ViewContainerRef,h.TemplateRef],{ngIf:[0,"ngIf"]},null),h["ɵpid"](131072,Z.b,[h.ChangeDetectorRef]),(l()(),h["ɵted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,5,0,"primary");l(n,19,0,"close");l(n,26,0,h["ɵunv"](n,26,0,h["ɵnov"](n,27).transform(e.exam$)))},function(l,n){var e=n.component;l(n,4,0,h["ɵnov"](n,5)._hidden,h["ɵnov"](n,5)._sbPadding);l(n,9,0,e.test?e.test.name:"Exámen");l(n,18,0,h["ɵnov"](n,19)._hidden)})}Object.defineProperty(n,"__esModule",{value:!0});var h=e(0),g=(e(1),e(28),e(73)),R=e(457),v=(e(458),e(24)),b=function(){function l(l,n,e,u,t,a,i){this.navCtrl=l,this.navParams=n,this.back=e,this.toast=u,this.viewCtrl=t,this.modal=a,this.afs=i,this.id=this.navParams.get("id"),this.type=this.navParams.get("type"),this.isOffline=this.navParams.get("offline"),this.l=!1,this.index=0,this.cacheKey="examen-download-"+this.type+"-"+this.id,this.cacheList=[],this.testCache=!!localStorage.getItem(this.cacheKey),this.s=this.navParams.get("s")?JSON.parse(this.navParams.get("s")):null}return l.prototype.ionViewDidLoad=function(){var l=this;this.exam$=this.afs.collection(R.a.EXAM).doc(this.id).valueChanges().pipe(Object(v.tap)(function(n){l.test={name:n.name,preguntas:n.questions}}))},l.prototype.enviarResultados=function(){var l=this;this.l=!0;var n={};if(this.test.preguntas.forEach(function(l){n[l.id]={selected:l.s,pregunta:l}}),this.isOffline){var e=JSON.parse(localStorage.getItem("offline-results")),u=e||[];u.push(n),localStorage.setItem("offline-results",JSON.stringify(u)),this.toast.create({message:"Tus resultados se guardaron correctamente.",duration:2e3}).present(),this.viewCtrl.dismiss(n)}else this.back.addResultado(this.type,this.back.uid,this.id,n).subscribe(function(n){l.toast.create({message:"Resultados registrados correctamente.",duration:2e3}).present(),l.viewCtrl.dismiss(n)},function(n){l.l=!1,l.toast.create({message:"No se pudieron agregar tus resultados...",duration:2e3}).present()})},l.prototype.openResultados=function(l,n){this.modal.create("ResultadosExamenPage",{type:n,id:l}).present()},l.prototype.next=function(){this.index==this.test.preguntas.length-1?this.enviarResultados():(this.saveCache(),this.index++)},l.prototype.saveCache=function(){var l={},n=this.test.preguntas[this.index].s;this.test.preguntas.forEach(function(n){l[n.id]={selected:n.s,pregunta:n}}),localStorage.setItem("examen-cache-"+this.type+"-"+this.id,JSON.stringify({index:this.index,resultados:l,selected:n})),localStorage.setItem("examen-selected-"+this.type+"-"+this.id+"-"+this.index,this.test.preguntas[this.index].s)},l.prototype.prev=function(){this.index--;var l=localStorage.getItem("examen-selected-"+this.type+"-"+this.id+"-"+this.index);l&&(this.test.preguntas[this.index].s=l)},l.prototype.openAvance=function(){var l=this,n=this.modal.create("AvanceExamenPage",{preguntas:this.test.preguntas});n.present(),n.onDidDismiss(function(n){n&&(l.index=n)})},l.prototype.loadCacheList=function(){var l=JSON.parse(localStorage.getItem("zamnademy-cache-list"));this.cacheList=l||[]},l.prototype.downloadExamen=function(){var l={id:this.id,type:this.type,test:this.test};this.cacheList.push({id:l.id,name:l.test.name,type:l.type}),localStorage.setItem("zamnademy-cache-list",JSON.stringify(this.cacheList)),localStorage.setItem(this.cacheKey,JSON.stringify(l)),this.testCache=l,this.toast.create({message:"Exámen descargado correctamente.",duration:2e3}).present()},l.prototype.removeExamen=function(){var l=this;localStorage.removeItem(this.cacheKey),this.cacheList=this.cacheList.filter(function(n){return n.id!=l.id}),localStorage.setItem("zamnademy-cache-list",JSON.stringify(this.cacheList)),this.testCache=null},l}(),x=function(){return function(){}}(),E=e(447),y=e(448),C=e(449),k=e(450),I=e(451),_=e(452),w=e(453),q=e(454),S=e(455),L=e(459),P=e(29),O=e(23),D=e(3),V=e(74),T=e(131),N=e(75),A=e(464),J=e(101),F=e(76),j=e(96),M=e(6),K=e(8),$=e(14),z=e(133),B=e(64),U=e(32),X=e(63),Z=e(16),G=e(203),H=e(206),Q=e(22),W=e(586),Y=e(98),ll=e(585),nl=e(200),el=e(137),ul=e(581),tl=e(40),al=e(13),il=e(61),dl=e(7),ol=e(31),rl=e(130),sl=e(456),cl=e(53),fl=e(582),ml=e(196),pl=e(95),hl=e(201),gl=e(15),Rl=e(97),vl=e(135),bl=e(132),xl=h["ɵcrt"]({encapsulation:2,styles:[],data:{}}),El=h["ɵccf"]("page-examen-detail",b,function(l){return h["ɵvid"](0,[(l()(),h["ɵeld"](0,0,null,null,1,"page-examen-detail",[],null,null,null,p,xl)),h["ɵdid"](1,49152,null,0,b,[ol.a,gl.a,g.a,Rl.a,dl.a,vl.a,bl.AngularFirestore],null,null)],null,null)},{},{},[]),yl=e(197),Cl=e(62);e.d(n,"ExamenDetailPageModuleNgFactory",function(){return kl});var kl=h["ɵcmf"](x,[],function(l){return h["ɵmod"]([h["ɵmpd"](512,h.ComponentFactoryResolver,h["ɵCodegenComponentFactoryResolver"],[[8,[E.a,y.a,C.a,k.a,I.a,_.a,w.a,q.a,S.a,El]],[3,h.ComponentFactoryResolver],h.NgModuleRef]),h["ɵmpd"](4608,Z.m,Z.l,[h.LOCALE_ID,[2,Z.w]]),h["ɵmpd"](4608,Q.k,Q.k,[]),h["ɵmpd"](4608,Q.c,Q.c,[]),h["ɵmpd"](512,Z.c,Z.c,[]),h["ɵmpd"](512,Q.j,Q.j,[]),h["ɵmpd"](512,Q.d,Q.d,[]),h["ɵmpd"](512,Q.i,Q.i,[]),h["ɵmpd"](512,yl.a,yl.a,[]),h["ɵmpd"](512,yl.b,yl.b,[]),h["ɵmpd"](512,x,x,[]),h["ɵmpd"](256,Cl.a,b,[])])})},581:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[t["ɵqud"](402653184,1,{_fixedContent:0}),t["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),t["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t["ɵncd"](null,1),t["ɵncd"](null,2)],null,null)}e.d(n,"a",function(){return a}),n.b=u;var t=e(0),a=(e(3),e(6),e(14),e(61),e(7),e(31),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,a.i,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}e.d(n,"a",function(){return i}),n.b=u;var t=e(0),a=e(16),i=(e(3),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},585:function(l,n,e){"use strict";function u(l){return t["ɵvid"](0,[t["ɵncd"](null,0)],null,null)}e.d(n,"a",function(){return a}),n.b=u;var t=e(0),a=(e(6),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},586:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,1,"ion-icon",[["class","fab-close-icon"],["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t["ɵdid"](1,147456,null,0,a.a,[i.a,t.ElementRef,t.Renderer],{name:[0,"name"]},null),(l()(),t["ɵeld"](2,0,null,null,1,"span",[["class","button-inner"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,null,null,0,"div",[["class","button-effect"]],null,null,null,null,null))],function(l,n){l(n,1,0,"close")},function(l,n){l(n,0,0,t["ɵnov"](n,1)._hidden)})}e.d(n,"a",function(){return d}),n.b=u;var t=e(0),a=e(63),i=e(3),d=t["ɵcrt"]({encapsulation:2,styles:[],data:{}})}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
