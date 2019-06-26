webpackJsonp([42],{

/***/ 1130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaseDetailPageModule", function() { return ClaseDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clase_detail__ = __webpack_require__(1206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_progressbar_core__ = __webpack_require__(599);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ClaseDetailPageModule = class ClaseDetailPageModule {
};
ClaseDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__clase_detail__["a" /* ClaseDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__ngx_progressbar_core__["b" /* NgProgressModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__clase_detail__["a" /* ClaseDetailPage */]),
        ],
    })
], ClaseDetailPageModule);

//# sourceMappingURL=clase-detail.module.js.map

/***/ }),

/***/ 1206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaseDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_back_back__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_models__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_progressbar_core__ = __webpack_require__(599);
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










let ClaseDetailPage = class ClaseDetailPage {
    constructor(navCtrl, navParams, back, toast, modal, data, file, transfer, load, afs, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.toast = toast;
        this.modal = modal;
        this.data = data;
        this.file = file;
        this.transfer = transfer;
        this.load = load;
        this.afs = afs;
        this.auth = auth;
        this.resultados = [];
        this.type = this.navParams.get("type");
        this.id = this.navParams.get("id");
        this.newComentario = "";
        this.lc = false;
        this.addData = {
            title: "",
            text: ""
        };
    }
    ionViewDidLoad() {
        this.loadClase(this.id);
        this.comentarios = this.afs
            .collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].COMMENT, ref => ref.where("parent_id", "==", this.id))
            .valueChanges();
        /* this.back.getComentarios(this.id, this.type).subscribe(data => this.comentarios = data.reverse())
        this.back.getResultados(this.type, this.back.uid, this.id).subscribe(data => {
          this.resultados = data ? data : []
        }) */
    }
    openModal(id, type, modal) {
        const m = this.modal.create(modal, { id, type });
        m.present();
    }
    openExamen(type, id) {
        if (!this.resultados || this.resultados.length <= 0) {
            const m = this.modal.create("ExamenDetailPage", { type, id });
            m.present();
            m.onDidDismiss(data => {
                if (!data)
                    return;
                this.back
                    .getResultados(this.type, this.back.uid, this.id)
                    .subscribe(data => (this.resultados = data ? data : []));
            });
        }
        else {
            const m = this.modal.create("ResultadosExamenPage", {
                type,
                id,
                user: this.back.uid
            });
            m.present();
        }
    }
    deleteResultados(type, id) {
        this.back.deleteResultados(type, this.back.uid, id).subscribe(() => {
            this.ionViewDidLoad();
        });
    }
    sendComentario(text) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!text)
                return;
            this.lc = true;
            const comment = {
                id: this.afs.createId(),
                text,
                user: this.auth.user.uid,
                user_name: this.auth.user.displayName,
                user_photo: this.auth.user.photoURL,
                parent_id: this.id,
                date: new Date().toISOString()
            };
            yield this.afs
                .collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].COMMENT)
                .doc(comment.id)
                .set(comment);
            this.newComentario = "";
            this.lc = false;
        });
    }
    goto(marker) {
        const horas = parseInt(marker.time.hour.toString()) * 3600;
        const minInSecs = parseInt(marker.time.minute.toString()) * 60;
        const t = parseInt(marker.time.second.toString()) + minInSecs + horas;
        this.video.nativeElement.currentTime = t;
    }
    loadClase(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.clase = yield this.data.getDoc(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].CONTENT, id);
        });
    }
    downloadVideo() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.progressBar.start();
                const l = this.load.create({
                    content: "Descargando clase, por favor no cierres la aplicación"
                });
                l.present();
                const fileTransfer = this.transfer.create();
                fileTransfer
                    .download(this.clase.video, `${this.file.dataDirectory}/.zamna-cache/${this.clase.id}`)
                    .then(entry => {
                    this.debug = entry;
                    localStorage.setItem(`offline-${this.clase.id}`, JSON.stringify(this.clase));
                    this.progressBar.complete();
                    l.dismiss();
                    this.toast
                        .create({
                        message: "La clase se descargó correctamente, la puedes ver desde la página de descargas.",
                        duration: 2000
                    })
                        .present();
                })
                    .catch(error => {
                    this.toast.create({
                        message: "Ocurrió un error al descargar la clase..."
                    });
                    this.debug = error;
                });
                fileTransfer.onProgress(e => this.downloadProgress(e));
            }
            catch (error) {
                this.toast.create({
                    message: "Ocurrió un error al descargar la clase..."
                });
                this.debug = error;
            }
        });
    }
    downloadProgress(e) {
        console.log(e);
        this.debug = e;
    }
    listDir() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.file.checkDir(this.file.dataDirectory, ".zamna-cache");
                this.debug = { message: ".zamna-cache dir exists" };
                const list = yield this.file.listDir(this.file.dataDirectory, ".zamna-cache");
                this.debug = list;
            }
            catch (error) {
                this.debug = error;
            }
        });
    }
    loadPreclase() {
        return __awaiter(this, void 0, void 0, function* () {
            /*const exam = await this.getExamByContentName(this.content.name)*/
            const exam = yield this.afs
                .collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].EXAM, ref => ref
                .where("content.id", "==", this.id)
                .where("type", "==", __WEBPACK_IMPORTED_MODULE_4__app_app_models__["b" /* ExamTypes */].PRECLASE))
                .valueChanges()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["take"])(1), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(exams => (exams ? exams[0] : null)))
                .toPromise();
            if (exam) {
                const resuelto = yield this.preclaseResuelto(this.auth.user.uid, exam.id);
                console.log("preclase", exam, "resuelto:", resuelto);
                if (!resuelto)
                    this.navCtrl.push("ExamenDetailPage", {
                        id: exam.id,
                        type: "preclase"
                    });
            }
        });
    }
    preclaseResuelto(uid, exam) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.afs
                .collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].EXAM_RESULT, ref => ref.where("exam", "==", exam).where("user", "==", uid))
                .valueChanges()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["take"])(1), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["tap"])(console.log), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(results => results && results.length > 0))
                .toPromise();
        });
    }
    addNota(title, text) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!title)
                return this.toast
                    .create({ message: "Ingresa un titulo", duration: 2000 })
                    .present();
            if (!text)
                return this.toast
                    .create({ message: "Ingresa un text", duration: 2000 })
                    .present();
            const l = this.load.create({ content: "Agregando..." });
            l.present();
            const id = this.afs.createId();
            yield this.afs
                .collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].NOTE)
                .doc(id)
                .set({
                id,
                title,
                text,
                parent_id: this.id,
                user: this.auth.user.uid
            });
            l.dismiss();
            this.addData = {
                title: "",
                text: ""
            };
            /* this.back.addNota(title, text, this.type, this.id).subscribe(data => {}, err => {
              this.toast.create({message: 'No se pudo agregar tu nota...', duration: 2000}).present()
              l.dismiss()
            }) */
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_9__ngx_progressbar_core__["a" /* NgProgressComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__ngx_progressbar_core__["a" /* NgProgressComponent */])
], ClaseDetailPage.prototype, "progressBar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("zamnaPlayer"),
    __metadata("design:type", Object)
], ClaseDetailPage.prototype, "video", void 0);
ClaseDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-clase-detail",template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/clase-detail/clase-detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{clase ? clase.name : \'Cargando...\'}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ng-progress #progressBar></ng-progress>\n\n  <div class="flex-col" *ngIf="!clase">\n    <img src="assets/imgs/rings.svg">\n  </div>\n\n  <div class="zamna-player" *ngIf="clase">\n    <video controls controlsList="nodownload" class="zamna-player" #zamnaPlayer>\n      <source [src]="clase.video">\n    </video>\n  </div>\n\n  <!-- <div class="w-100" *ngIf="debug">\n    <pre>{{debug | json}}</pre>\n  </div> -->\n\n  <ion-list *ngIf="clase && clase.markers">\n    <ion-list-header>Marcadores</ion-list-header>\n    <ion-item *ngFor="let m of clase.markers" (click)="goto(m)" >\n      <h2>{{m.tag}}</h2>\n      <p>{{m.time.hour}}:{{m.time.minute}}:{{m.time.second}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Titulo" [(ngModel)]="addData.title"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-textarea placeholder="Texto" [(ngModel)]="addData.text"></ion-textarea>\n    </ion-item>\n\n  </ion-list>\n\n  <div class="flex-col">\n    <button ion-button (click)="addNota(addData.title, addData.text)">Agregar Nota</button>\n  </div>\n\n  <ion-list class="mt-3" *ngIf="clase">\n    <ion-list-header>Comentarios</ion-list-header>\n    <ion-item>\n      <ion-input placeholder="Agregar comentario" [(ngModel)]="newComentario" [disabled]="lc"></ion-input>\n      <button ion-button clear item-end (click)="sendComentario(newComentario)" [disabled]="!newComentario || newComentario.length <= 0" *ngIf="!lc">\n        <ion-icon name="send"></ion-icon>\n      </button>\n      <ion-thumbnail item-end *ngIf="lc">\n        <img src="assets/imgs/rings.svg">\n      </ion-thumbnail>\n    </ion-item>\n    <ion-item *ngFor="let c of comentarios | async" text-wrap>\n      <ion-avatar item-start>\n        <img [src]="c.user_photo ? c.user_photo : \'assets/imgs/profile.jpg\'">\n      </ion-avatar>\n      <h2>{{c.user_name}}</h2>\n      <p>{{c.text}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab right bottom *ngIf="clase">\n    <button ion-fab color="rojito"><ion-icon name="arrow-dropup"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab (click)="openModal(clase.id, navParams.get(\'type\'), \'NotasPage\')">\n        <ion-label>Notas</ion-label>\n        <ion-icon name="document"></ion-icon>\n      </button>\n      <button ion-fab (click)="openModal(clase.id, navParams.get(\'type\'), \'RatingsPage\')">\n      <ion-label>Calificación</ion-label>\n        <ion-icon name="star"></ion-icon>\n      </button>\n      <button ion-fab (click)="openExamen(type, id)" *ngIf="resultados.length <= 0">\n        <ion-label>Evaluación</ion-label>\n        <ion-icon name="archive"></ion-icon>\n      </button>\n      <button ion-fab (click)="downloadVideo()">\n        <ion-label>Descargar Clase</ion-label>\n        <ion-icon name="cloud-download"></ion-icon>\n      </button>\n      <!-- <button ion-fab (click)="listDir()">\n        <ion-label>List Dir</ion-label>\n        <ion-icon name="cloud-download"></ion-icon>\n      </button> -->\n      <!--<button ion-fab (click)="deleteResultados(type, id)" *ngIf="auth.isAdmin">\n        <ion-label>Borrar Resultados</ion-label>\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>-->\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/clase-detail/clase-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["AngularFirestore"],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], ClaseDetailPage);

//# sourceMappingURL=clase-detail.js.map

/***/ })

});
//# sourceMappingURL=42.js.map