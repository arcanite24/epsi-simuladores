webpackJsonp([2],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BecasPageModule", function() { return BecasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__becas__ = __webpack_require__(737);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BecasPageModule = /** @class */ (function () {
    function BecasPageModule() {
    }
    BecasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__becas__["a" /* BecasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__becas__["a" /* BecasPage */]),
            ],
        })
    ], BecasPageModule);
    return BecasPageModule;
}());

//# sourceMappingURL=becas.module.js.map

/***/ }),

/***/ 725:
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

/***/ 726:
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

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(728);
var v4 = __webpack_require__(729);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(725);
var bytesToUuid = __webpack_require__(726);

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

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(725);
var bytesToUuid = __webpack_require__(726);

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

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BecasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_back_back__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid__ = __webpack_require__(727);
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




var BecasPage = /** @class */ (function () {
    function BecasPage(navCtrl, navParams, back, toast, load) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.toast = toast;
        this.load = load;
        this.becas = [];
        this.newBeca = {};
    }
    BecasPage.prototype.ionViewDidLoad = function () {
        this.loadTeams();
    };
    BecasPage.prototype.loadTeams = function () {
        var _this = this;
        //this.back.getUserDetail(this.back.uid).subscribe(data => this.becas = data.teams)
        this.back.getUserBecas(this.back.uid).subscribe(function (data) { return _this.becas = data; }, function (err) { return _this.toast.create({ message: 'No se pudo cargar la información de becas...', duration: 2000 }).present(); });
    };
    BecasPage.prototype.deleteTeam = function (id) {
        var _this = this;
        this.back.deleteBeca(id).subscribe(function (data) { return _this.loadTeams(); });
    };
    BecasPage.prototype.addTeam = function () {
        var _this = this;
        var l = this.load.create({ content: 'Creando grupo...' });
        l.present();
        this.back.addBeca({
            name: this.newBeca.name,
            creator: this.back.uid,
            code: "ZAMNA-" + __WEBPACK_IMPORTED_MODULE_3_uuid___default.a.v4()
        }).subscribe(function (data) {
            _this.back.joinToTeam(_this.back.uid, data.id).subscribe(function (_team) {
                _this.toast.create({ message: 'Grupo creado correctamente', duration: 2000 }).present();
                _this.loadTeams();
                l.dismiss();
            });
        }, function (err) {
            l.dismiss();
            _this.toast.create({ message: 'No se pudo crear tu grupo...', duration: 2000 }).present();
        });
    };
    BecasPage.prototype.joinTeam = function (code) {
        var _this = this;
        var l = this.load.create({ content: 'Creando grupo...' });
        l.present();
        this.back.joinTeamByCode(code, this.back.uid).subscribe(function (data) {
            _this.toast.create({ message: 'Te uniste correctamente.', duration: 2000 }).present();
            _this.loadTeams();
            l.dismiss();
        }, function (err) {
            l.dismiss();
            _this.toast.create({ message: 'Ocurrió un error al unirte al grupo.', duration: 2000 }).present();
        });
    };
    BecasPage.prototype.getDescuento = function (team) {
        if (!team)
            return 0;
        if (!team.members)
            return 0;
        if (team.members.length <= 0)
            return 0;
        if (team.members.length == 2)
            return 5;
        if (team.members.length == 3)
            return 8;
        if (team.members.length == 4)
            return 10;
        if (team.members.length == 5)
            return 13;
        if (team.members.length == 6)
            return 15;
        return 'Contacta con el Admin';
    };
    BecasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-becas',template:/*ion-inline-start:"/home/neri/code/zamna-pagos/src/pages/becas/becas.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Becas Grupales</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n\n  <ion-grid fixed>\n\n    <ion-card *ngIf="becas.length <= 0">\n      <ion-card-content>\n        <p>Parece que no tienes ningún grupo para aplicar a una beca. Crea una a continuación:</p>\n      </ion-card-content>\n      <ion-list text-wrap>\n        <ion-list-header>Si eres el capitán del equipo, crea el equipo, y comparte el código de equipo para que tus amigos lo ingresen en la parte de abajo:</ion-list-header>\n        <ion-item>\n          <ion-input placeholder="Nombre del equipo" [(ngModel)]="newBeca.name"></ion-input>\n        </ion-item>\n        <ion-item>\n          <button ion-button (click)="addTeam()" >Crear Equipo</button>\n        </ion-item>\n      </ion-list>\n    </ion-card>\n\n    <ion-card *ngIf="becas.length <= 0">\n      <ion-card-content>\n        <p>También puedes unirte a un equipo ya existente:</p>\n      </ion-card-content>\n      <ion-list>\n        <ion-list-header>Unirse a grupo</ion-list-header>\n        <ion-item>\n        <ion-input placeholder="Código de Equipo" [(ngModel)]="newBeca.code"></ion-input>\n        </ion-item>\n        <ion-item>\n          <button ion-button (click)="joinTeam(newBeca.code)" >Unirse a Equipo</button>\n        </ion-item>\n      </ion-list>\n    </ion-card>\n\n    <ion-card *ngFor="let team of becas">\n      <ion-card-header>\n        <ion-card-title>{{team.name}}</ion-card-title>\n      </ion-card-header>\n      <ion-list text-wrap>\n        <ion-list-header>Integrantes</ion-list-header>\n        <ion-item style="user-select:text">\n          <strong>Código de equipo para unir a los otros miembros: </strong> {{team.code}}\n        </ion-item>\n        <ion-item>\n          Recuerden que el % de descuento, no se verá reflejado en la cantidad del saldo pendiente hasta que sepamos el número de alumnos  que se inscribió realmente en el equipo, el equipo tiene 10 dias para completar la inscripción del 30%, de lo contrario, el sistema cerrará las inscripciones para los integrantes del equipo que falten, y no podrán ser parte del mismo, tendrán que inscribirse aparte del equipo y a los miembros ya inscritos, les reajustará el % de descuento al número final de integrantes\n        </ion-item>\n        <ion-item>\n          <strong>Descuento: {{getDescuento(team)}}%</strong>\n        </ion-item>\n        <ion-item *ngFor="let user of team.members" >\n          <ion-icon item-start color="success" name="checkmark" *ngIf="(user.deudaTotal - user.deuda) >= user.deudaTotal * 0.3"></ion-icon>\n          <h2>{{user.name}} {{user.lastName}}</h2>\n          <p>$ {{user.deudaTotal - user.deuda | number}} de $ {{user.deudaTotal | number}}</p>\n        </ion-item>\n        <ion-item *ngIf="auth.isAdmin" >\n          <button ion-button (click)="deleteTeam(team.id)" color="danger">Borrar Equipo</button>\n        </ion-item>\n      </ion-list>\n    </ion-card>\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamna-pagos/src/pages/becas/becas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], BecasPage);
    return BecasPage;
}());

//# sourceMappingURL=becas.js.map

/***/ })

});
//# sourceMappingURL=2.js.map