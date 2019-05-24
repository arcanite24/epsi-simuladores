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