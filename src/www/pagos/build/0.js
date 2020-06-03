webpackJsonp([0],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_moment__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(733);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3_ngx_moment__["a" /* MomentModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ 729:
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(731);
var v4 = __webpack_require__(732);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(728);
var bytesToUuid = __webpack_require__(729);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(728);
var bytesToUuid = __webpack_require__(729);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_upload_file_upload__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_uploader_storage_uploader_component__ = __webpack_require__(735);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__file_upload_file_upload__["a" /* FileUploadComponent */], __WEBPACK_IMPORTED_MODULE_3__storage_uploader_storage_uploader_component__["a" /* StorageUploaderComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPageModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__file_upload_file_upload__["a" /* FileUploadComponent */], __WEBPACK_IMPORTED_MODULE_3__storage_uploader_storage_uploader_component__["a" /* StorageUploaderComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_back_back__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_storage__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(22);
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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





var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(toast, load, back, storage) {
        this.toast = toast;
        this.load = load;
        this.back = back;
        this.storage = storage;
        this.text = 'Selecciona una imágen';
        this.upload = 'Subiendo imágen...';
        this.error = 'Ocurrió un error al subir la imágen';
        this.success = 'Modificar o agregar otra foto del comprobante';
        this.clear = true;
        this.showPreview = true;
        this.imageWidth = '40%';
        this.onFinish = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.loader = false;
    }
    FileUploadComponent.prototype.uploadFile = function (filename, file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var ref = _this.storage.ref("pagos/" + filename);
            var task = ref.put(file);
            task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["finalize"])(function () {
                ref.getDownloadURL().subscribe(function (url) { return resolve(url); });
            })).subscribe();
        });
    };
    FileUploadComponent.prototype.onImageSelected = function (files) {
        return __awaiter(this, void 0, void 0, function () {
            var l, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!files)
                            return [2 /*return*/];
                        if (files.length <= 0)
                            return [2 /*return*/];
                        l = this.load.create({ content: 'Subiendo imágen...' });
                        l.present();
                        this.loader = true;
                        this.text = this.upload;
                        return [4 /*yield*/, this.uploadFile(files[0].name, files[0])];
                    case 1:
                        url = _a.sent();
                        this.text = this.success;
                        this.loader = false;
                        l.dismiss();
                        this.resImage = url;
                        this.onFinish.emit(url);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FileUploadComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FileUploadComponent.prototype, "upload", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FileUploadComponent.prototype, "error", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FileUploadComponent.prototype, "success", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], FileUploadComponent.prototype, "clear", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], FileUploadComponent.prototype, "showPreview", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FileUploadComponent.prototype, "imageWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FileUploadComponent.prototype, "onFinish", void 0);
    FileUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'file-upload',template:/*ion-inline-start:"C:\Users\arcan\code\zamna-pagos\src\components\file-upload\file-upload.html"*/'<div class="flex-col">\n  <input type="file" hidden #fileInput (change)="onImageSelected(fileInput.files)">\n  <label>\n    <button ion-button [disabled]="loader" (click)="fileInput.click()" [clear]="clear">{{text}}</button>\n  </label>\n  <div class="flex-col">\n    <img [src]="resImage" *ngIf="resImage && showPreview" style="width:40%" class="mtb-1">\n  </div>\n</div>\n'/*ion-inline-end:"C:\Users\arcan\code\zamna-pagos\src\components\file-upload\file-upload.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_storage__["a" /* AngularFireStorage */]])
    ], FileUploadComponent);
    return FileUploadComponent;
}());

//# sourceMappingURL=file-upload.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageUploaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_storage__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StorageUploaderComponent = /** @class */ (function () {
    function StorageUploaderComponent(storage) {
        this.storage = storage;
        this.loading = false;
        this.percent = 0;
        this.finished = false;
        this.onFinish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    StorageUploaderComponent.prototype.ngOnInit = function () {
    };
    StorageUploaderComponent.prototype.onFileSelected = function (files) {
        if (!files)
            return;
        if (!files.item(0))
            return;
        this.file = files.item(0);
        this.loading = true;
        this.uploadFile(this.file);
    };
    StorageUploaderComponent.prototype.onFinishUpload = function (ref) {
        var _this = this;
        ref.getDownloadURL().subscribe(function (url) {
            _this.finished = false;
            _this.loading = false;
            _this.file = null;
            _this.urlResult = url;
            _this.fileInput.nativeElement.value = null;
            _this.onFinish.emit(url);
        });
    };
    StorageUploaderComponent.prototype.uploadFile = function (file) {
        var _this = this;
        var path = __WEBPACK_IMPORTED_MODULE_3_uuid___default.a.v4() + "-" + file.name;
        var ref = this.storage.ref(path);
        this.task = this.storage.upload(path, file);
        this.task.percentageChanges().subscribe(function (percent) { return _this.percent = percent; });
        this.task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["finalize"])(function () {
            _this.onFinishUpload(ref);
        })).subscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], StorageUploaderComponent.prototype, "onFinish", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileUploader'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], StorageUploaderComponent.prototype, "fileInput", void 0);
    StorageUploaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-storage-uploader',template:/*ion-inline-start:"C:\Users\arcan\code\zamna-pagos\src\components\storage-uploader\storage-uploader.component.html"*/'<div class="app-storage-uploader">\n  <input type="file" id="fileUploader" (change)="onFileSelected(fileUploader.files)" hidden #fileUploader>\n  <label for="fileUploader">\n    <button type="button" class="btn" [ngClass]="{\'btn-primary\': !finished, \'btn-success\': finished}"  [disabled]="loading" (click)="fileUploader.click()" >\n      <span *ngIf="!file && !loading && !finished" >Seleccionar Archivo</span>\n      <span *ngIf="file && loading && !finished" >Subiendo...</span>\n      <span *ngIf="file && !loading && finished" >Subida finalizada</span>\n      <div class="barra-container" *ngIf="file && loading" >\n        <div class="barra" [style.width]="percent + \'%\'"></div>\n      </div>\n    </button>\n  </label>\n</div>'/*ion-inline-end:"C:\Users\arcan\code\zamna-pagos\src\components\storage-uploader\storage-uploader.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_storage__["a" /* AngularFireStorage */]])
    ], StorageUploaderComponent);
    return StorageUploaderComponent;
}());

//# sourceMappingURL=storage-uploader.component.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_back_back__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_models__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(22);
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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







var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, back, toast, load, auth, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.toast = toast;
        this.load = load;
        this.auth = auth;
        this.afs = afs;
        this.uid = this.navParams.get('uid');
        this.edit = false;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (!this.auth.user)
            return this.navCtrl.setRoot('LoginPage');
        if (!this.uid) {
            this.user = this.auth.user;
            this.auth.user$.subscribe(function (_user) {
                if (_user && !_this.user) {
                    _this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].USER).doc(_user.uid).valueChanges().subscribe(function (user) { return _this.user = user; });
                }
            });
        }
        else {
            this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].USER).doc(this.uid).valueChanges().subscribe(function (user) { return _this.user = user; });
        }
    };
    ProfilePage.prototype.loadUser = function (uid) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].USER).doc(uid).valueChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["take"])(1)).toPromise()];
                    case 1:
                        user = _a.sent();
                        this.user = user;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.onFinish = function (data) {
        this.user.credencial = data.secure_url;
    };
    ProfilePage.prototype.saveChanges = function () {
        return __awaiter(this, void 0, void 0, function () {
            var l;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        l = this.load.create({ content: 'Guardando cambios...' });
                        l.present();
                        return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_4__app_app_models__["a" /* Collections */].USER).doc(this.user.uid).update(this.user)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.openImage = function (url) {
        if (!this.auth.isAdmin)
            return;
        console.log(url);
        var w = window.open(url, '_blank');
        w.focus();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\arcan\code\zamna-pagos\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Perfil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-grid fixed>\n\n    <div class="flex flex-col justify-center align-center" *ngIf="user && user.photoURL">\n      <img [src]="user.photoURL" class="profile-avatar">\n    </div>\n\n    <ion-card *ngIf="user" >\n      <ion-list>\n        <ion-list-header>Información</ion-list-header>\n\n        <ion-item *ngIf="!edit" >\n          <strong>Nombre(s): </strong> {{user.displayName}}\n        </ion-item>\n        <ion-item *ngIf="edit" >\n          <ion-input [(ngModel)]="user.displayName" placeholder="Nombre(s)"></ion-input>\n        </ion-item>\n\n        <!-- <ion-item *ngIf="!edit" >\n          <strong>Apellidos: </strong> {{user.lastName}}\n        </ion-item>\n        <ion-item *ngIf="edit" >\n          <ion-input [(ngModel)]="user.lastName" placeholder="Apellidos"></ion-input>\n        </ion-item> -->\n\n        <ion-item *ngIf="!edit" >\n          <strong>Celular: </strong> {{user.celular}}\n        </ion-item>\n        <ion-item *ngIf="edit" >\n          <ion-input [(ngModel)]="user.celular" placeholder="Celular"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="!edit" >\n          <strong>Universidad: </strong> {{user.universidad}}\n        </ion-item>\n        <ion-item *ngIf="edit" >\n          <ion-input [(ngModel)]="user.universidad" placeholder="Universidad"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="!edit" >\n          <strong>Especialidad: </strong> {{user.especialidad}}\n        </ion-item>\n        <ion-item *ngIf="edit" >\n          <ion-input [(ngModel)]="user.especialidad" placeholder="Especialidad"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="!edit" >\n          <strong>Email: </strong> {{user.new_email}}\n        </ion-item>\n        <ion-item *ngIf="edit" >\n          <ion-input [(ngModel)]="user.new_email" placeholder="Correo electrónico"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <strong>Foto: </strong> {{user.foto}}\n        </ion-item>\n\n        <!-- <ion-item>\n          <strong>Fecha de inscripción: </strong> {{user.createdAt | amDateFormat:\'LL\'}}\n        </ion-item> -->\n\n        <ion-item *ngIf="!edit" >\n          <strong>Credencial: </strong>\n        </ion-item>\n        <img [src]="user.credencial" *ngIf="user.credencial" (click)="openImage(user.credencial)" >\n        <ion-item *ngIf="edit">\n          <strong>Credencial:</strong>\n          <file-upload (onFinish)="onFinish($event)"></file-upload>\n        </ion-item>\n\n      </ion-list>\n    </ion-card>\n\n    <button ion-button clear (click)="edit = true" *ngIf="user && !edit && (auth.isAdmin || user.uid == auth.user.uid)" >Editar Información</button>\n    <div class="flex flex-col justify-center align-center" *ngIf="edit" >\n      <button ion-button (click)="saveChanges()" >Guardar cambios</button>\n    </div>\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\arcan\code\zamna-pagos\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=0.js.map