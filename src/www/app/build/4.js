<<<<<<< HEAD
webpackJsonp([4],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisResultadosPageModule", function() { return MisResultadosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_moment__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mis_resultados__ = __webpack_require__(808);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MisResultadosPageModule = /** @class */ (function () {
    function MisResultadosPageModule() {
    }
    MisResultadosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__mis_resultados__["a" /* MisResultadosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__mis_resultados__["a" /* MisResultadosPage */]),
                __WEBPACK_IMPORTED_MODULE_0_angular2_moment__["MomentModule"],
            ],
        })
    ], MisResultadosPageModule);
    return MisResultadosPageModule;
}());

//# sourceMappingURL=mis-resultados.module.js.map

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
var AddPipe = /** @class */ (function () {
    function AddPipe() {
    }
    AddPipe.prototype.transform = function (value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('AddPipe: missing required arguments');
        }
        return moment(value).add(amount, unit);
    };
    AddPipe = __decorate([
        core_1.Pipe({ name: 'amAdd' })
    ], AddPipe);
    return AddPipe;
}());
exports.AddPipe = AddPipe;
//# sourceMappingURL=add.pipe.js.map

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var CalendarPipe = /** @class */ (function () {
    function CalendarPipe(cdRef, ngZone) {
        var _this = this;
        this.cdRef = cdRef;
        this.ngZone = ngZone;
        // using a single static timer for all instances of this pipe for performance reasons
        CalendarPipe_1.initTimer(ngZone);
        CalendarPipe_1.refs++;
        // values such as Today will need to be replaced with Yesterday after midnight,
        // so make sure we subscribe to an EventEmitter that we set up to emit at midnight
        this.midnightSub = CalendarPipe_1.midnight.subscribe(function () {
            _this.ngZone.run(function () { return _this.cdRef.markForCheck(); });
        });
    }
    CalendarPipe_1 = CalendarPipe;
    CalendarPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var formats = null;
        var referenceTime = null;
        for (var i = 0, len = args.length; i < len; i++) {
            if (args[i] !== null) {
                if (typeof args[i] === 'object' && !moment.isMoment(args[i])) {
                    formats = args[i];
                }
                else {
                    referenceTime = momentConstructor(args[i]);
                }
            }
        }
        return momentConstructor(value).calendar(referenceTime, formats);
    };
    CalendarPipe.prototype.ngOnDestroy = function () {
        if (CalendarPipe_1.refs > 0) {
            CalendarPipe_1.refs--;
        }
        if (CalendarPipe_1.refs === 0) {
            CalendarPipe_1.removeTimer();
        }
        this.midnightSub.unsubscribe();
    };
    CalendarPipe.initTimer = function (ngZone) {
        // initialize the timer
        if (!CalendarPipe_1.midnight) {
            CalendarPipe_1.midnight = new core_1.EventEmitter();
            if (typeof window !== 'undefined') {
                var timeToUpdate_1 = CalendarPipe_1._getMillisecondsUntilUpdate();
                CalendarPipe_1.timer = ngZone.runOutsideAngular(function () {
                    return window.setTimeout(function () {
                        // emit the current date
                        CalendarPipe_1.midnight.emit(new Date());
                        // refresh the timer
                        CalendarPipe_1.removeTimer();
                        CalendarPipe_1.initTimer(ngZone);
                    }, timeToUpdate_1);
                });
            }
        }
    };
    CalendarPipe.removeTimer = function () {
        if (CalendarPipe_1.timer) {
            window.clearTimeout(CalendarPipe_1.timer);
            CalendarPipe_1.timer = null;
            CalendarPipe_1.midnight = null;
        }
    };
    CalendarPipe._getMillisecondsUntilUpdate = function () {
        var now = momentConstructor();
        var tomorrow = momentConstructor().startOf('day').add(1, 'days');
        var timeToMidnight = tomorrow.valueOf() - now.valueOf();
        return timeToMidnight + 1000; // 1 second after midnight
    };
    /**
     * @private Internal reference counter, so we can clean up when no instances are in use
     * @type {number}
     */
    CalendarPipe.refs = 0;
    CalendarPipe = CalendarPipe_1 = __decorate([
        core_1.Pipe({ name: 'amCalendar', pure: false }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.NgZone])
    ], CalendarPipe);
    return CalendarPipe;
    var CalendarPipe_1;
}());
exports.CalendarPipe = CalendarPipe;
//# sourceMappingURL=calendar.pipe.js.map

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var DateFormatPipe = /** @class */ (function () {
    function DateFormatPipe() {
    }
    DateFormatPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!value)
            return '';
        return momentConstructor(value).format(args[0]);
    };
    DateFormatPipe = __decorate([
        core_1.Pipe({ name: 'amDateFormat' })
    ], DateFormatPipe);
    return DateFormatPipe;
}());
exports.DateFormatPipe = DateFormatPipe;
//# sourceMappingURL=date-format.pipe.js.map

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var DifferencePipe = /** @class */ (function () {
    function DifferencePipe() {
    }
    DifferencePipe.prototype.transform = function (value, otherValue, unit, precision) {
        var date = momentConstructor(value);
        var date2 = (otherValue !== null) ? momentConstructor(otherValue) : momentConstructor();
        return date.diff(date2, unit, precision);
    };
    DifferencePipe = __decorate([
        core_1.Pipe({ name: 'amDifference' })
    ], DifferencePipe);
    return DifferencePipe;
}());
exports.DifferencePipe = DifferencePipe;
//# sourceMappingURL=difference.pipe.js.map

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
var DurationPipe = /** @class */ (function () {
    function DurationPipe() {
    }
    DurationPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof args === 'undefined' || args.length !== 1) {
            throw new Error('DurationPipe: missing required time unit argument');
        }
        return moment.duration(value, args[0]).humanize();
    };
    DurationPipe = __decorate([
        core_1.Pipe({ name: 'amDuration' })
    ], DurationPipe);
    return DurationPipe;
}());
exports.DurationPipe = DurationPipe;
//# sourceMappingURL=duration.pipe.js.map

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
var FromUnixPipe = /** @class */ (function () {
    function FromUnixPipe() {
    }
    FromUnixPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof value === 'string') {
            value = +value;
        }
        return moment.unix(value);
    };
    FromUnixPipe = __decorate([
        core_1.Pipe({ name: 'amFromUnix' })
    ], FromUnixPipe);
    return FromUnixPipe;
}());
exports.FromUnixPipe = FromUnixPipe;
//# sourceMappingURL=from-unix.pipe.js.map

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var ParsePipe = /** @class */ (function () {
    function ParsePipe() {
    }
    ParsePipe.prototype.transform = function (value, format) {
        return moment(value, format);
    };
    ParsePipe = __decorate([
        core_1.Pipe({ name: 'amParse' })
    ], ParsePipe);
    return ParsePipe;
}());
exports.ParsePipe = ParsePipe;
//# sourceMappingURL=parse.pipe.js.map

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
var SubtractPipe = /** @class */ (function () {
    function SubtractPipe() {
    }
    SubtractPipe.prototype.transform = function (value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('SubtractPipe: missing required arguments');
        }
        return moment(value).subtract(amount, unit);
    };
    SubtractPipe = __decorate([
        core_1.Pipe({ name: 'amSubtract' })
    ], SubtractPipe);
    return SubtractPipe;
}());
exports.SubtractPipe = SubtractPipe;
//# sourceMappingURL=subtract.pipe.js.map

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var TimeAgoPipe = /** @class */ (function () {
    function TimeAgoPipe(cdRef, ngZone) {
        this.cdRef = cdRef;
        this.ngZone = ngZone;
    }
    TimeAgoPipe.prototype.transform = function (value, omitSuffix) {
        if (this.hasChanged(value, omitSuffix)) {
            this.lastTime = this.getTime(value);
            this.lastValue = value;
            this.lastOmitSuffix = omitSuffix;
            this.lastLocale = this.getLocale(value);
            this.removeTimer();
            this.createTimer();
            this.lastText = momentConstructor(value).from(momentConstructor(), omitSuffix);
        }
        else {
            this.createTimer();
        }
        return this.lastText;
    };
    TimeAgoPipe.prototype.ngOnDestroy = function () {
        this.removeTimer();
    };
    TimeAgoPipe.prototype.createTimer = function () {
        var _this = this;
        if (this.currentTimer) {
            return;
        }
        var momentInstance = momentConstructor(this.lastValue);
        var timeToUpdate = this.getSecondsUntilUpdate(momentInstance) * 1000;
        this.currentTimer = this.ngZone.runOutsideAngular(function () {
            if (typeof window !== 'undefined') {
                return window.setTimeout(function () {
                    _this.lastText = momentConstructor(_this.lastValue).from(momentConstructor(), _this.lastOmitSuffix);
                    _this.currentTimer = null;
                    _this.ngZone.run(function () { return _this.cdRef.markForCheck(); });
                }, timeToUpdate);
            }
        });
    };
    TimeAgoPipe.prototype.removeTimer = function () {
        if (this.currentTimer) {
            window.clearTimeout(this.currentTimer);
            this.currentTimer = null;
        }
    };
    TimeAgoPipe.prototype.getSecondsUntilUpdate = function (momentInstance) {
        var howOld = Math.abs(momentConstructor().diff(momentInstance, 'minute'));
        if (howOld < 1) {
            return 1;
        }
        else if (howOld < 60) {
            return 30;
        }
        else if (howOld < 180) {
            return 300;
        }
        else {
            return 3600;
        }
    };
    TimeAgoPipe.prototype.hasChanged = function (value, omitSuffix) {
        return this.getTime(value) !== this.lastTime
            || this.getLocale(value) !== this.lastLocale
            || omitSuffix !== this.lastOmitSuffix;
    };
    TimeAgoPipe.prototype.getTime = function (value) {
        if (moment.isDate(value)) {
            return value.getTime();
        }
        else if (moment.isMoment(value)) {
            return value.valueOf();
        }
        else {
            return momentConstructor(value).valueOf();
        }
    };
    TimeAgoPipe.prototype.getLocale = function (value) {
        return moment.isMoment(value) ? value.locale() : null;
    };
    TimeAgoPipe = __decorate([
        core_1.Pipe({ name: 'amTimeAgo', pure: false }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.NgZone])
    ], TimeAgoPipe);
    return TimeAgoPipe;
}());
exports.TimeAgoPipe = TimeAgoPipe;
//# sourceMappingURL=time-ago.pipe.js.map

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var UtcPipe = /** @class */ (function () {
    function UtcPipe() {
    }
    UtcPipe.prototype.transform = function (value) {
        return moment(value).utc();
    };
    UtcPipe = __decorate([
        core_1.Pipe({ name: 'amUtc' })
    ], UtcPipe);
    return UtcPipe;
}());
exports.UtcPipe = UtcPipe;
//# sourceMappingURL=utc.pipe.js.map

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
var FromUtcPipe = /** @class */ (function () {
    function FromUtcPipe() {
    }
    FromUtcPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return moment.utc(value);
    };
    FromUtcPipe = __decorate([
        core_1.Pipe({ name: 'amFromUtc' })
    ], FromUtcPipe);
    return FromUtcPipe;
}());
exports.FromUtcPipe = FromUtcPipe;
//# sourceMappingURL=from-utc.pipe.js.map

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var LocalTimePipe = /** @class */ (function () {
    function LocalTimePipe() {
    }
    LocalTimePipe.prototype.transform = function (value) {
        return moment(value).local();
    };
    LocalTimePipe = __decorate([
        core_1.Pipe({ name: 'amLocal' })
    ], LocalTimePipe);
    return LocalTimePipe;
}());
exports.LocalTimePipe = LocalTimePipe;
//# sourceMappingURL=local.pipe.js.map

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var LocalePipe = /** @class */ (function () {
    function LocalePipe() {
    }
    LocalePipe.prototype.transform = function (value, locale) {
        return moment(value).locale(locale);
    };
    LocalePipe = __decorate([
        core_1.Pipe({ name: 'amLocale' })
    ], LocalePipe);
    return LocalePipe;
}());
exports.LocalePipe = LocalePipe;
//# sourceMappingURL=locale.pipe.js.map

/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var add_pipe_1 = __webpack_require__(766);
exports.AddPipe = add_pipe_1.AddPipe;
var calendar_pipe_1 = __webpack_require__(767);
exports.CalendarPipe = calendar_pipe_1.CalendarPipe;
var date_format_pipe_1 = __webpack_require__(768);
exports.DateFormatPipe = date_format_pipe_1.DateFormatPipe;
var difference_pipe_1 = __webpack_require__(769);
exports.DifferencePipe = difference_pipe_1.DifferencePipe;
var duration_pipe_1 = __webpack_require__(770);
exports.DurationPipe = duration_pipe_1.DurationPipe;
var from_unix_pipe_1 = __webpack_require__(771);
exports.FromUnixPipe = from_unix_pipe_1.FromUnixPipe;
var parse_pipe_1 = __webpack_require__(772);
exports.ParsePipe = parse_pipe_1.ParsePipe;
var moment_module_1 = __webpack_require__(780);
exports.MomentModule = moment_module_1.MomentModule;
var subtract_pipe_1 = __webpack_require__(773);
exports.SubtractPipe = subtract_pipe_1.SubtractPipe;
var time_ago_pipe_1 = __webpack_require__(774);
exports.TimeAgoPipe = time_ago_pipe_1.TimeAgoPipe;
var utc_pipe_1 = __webpack_require__(775);
exports.UtcPipe = utc_pipe_1.UtcPipe;
var from_utc_pipe_1 = __webpack_require__(776);
exports.FromUtcPipe = from_utc_pipe_1.FromUtcPipe;
var local_pipe_1 = __webpack_require__(777);
exports.LocalTimePipe = local_pipe_1.LocalTimePipe;
var locale_pipe_1 = __webpack_require__(778);
exports.LocalePipe = locale_pipe_1.LocalePipe;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var add_pipe_1 = __webpack_require__(766);
var calendar_pipe_1 = __webpack_require__(767);
var date_format_pipe_1 = __webpack_require__(768);
var difference_pipe_1 = __webpack_require__(769);
var duration_pipe_1 = __webpack_require__(770);
var from_unix_pipe_1 = __webpack_require__(771);
var parse_pipe_1 = __webpack_require__(772);
var subtract_pipe_1 = __webpack_require__(773);
var time_ago_pipe_1 = __webpack_require__(774);
var utc_pipe_1 = __webpack_require__(775);
var from_utc_pipe_1 = __webpack_require__(776);
var local_pipe_1 = __webpack_require__(777);
var locale_pipe_1 = __webpack_require__(778);
var ANGULAR_MOMENT_PIPES = [
    add_pipe_1.AddPipe,
    calendar_pipe_1.CalendarPipe,
    date_format_pipe_1.DateFormatPipe,
    difference_pipe_1.DifferencePipe,
    duration_pipe_1.DurationPipe,
    from_unix_pipe_1.FromUnixPipe,
    parse_pipe_1.ParsePipe,
    subtract_pipe_1.SubtractPipe,
    time_ago_pipe_1.TimeAgoPipe,
    utc_pipe_1.UtcPipe,
    from_utc_pipe_1.FromUtcPipe,
    local_pipe_1.LocalTimePipe,
    locale_pipe_1.LocalePipe
];
var MomentModule = /** @class */ (function () {
    function MomentModule() {
    }
    MomentModule = __decorate([
        core_1.NgModule({
            declarations: ANGULAR_MOMENT_PIPES,
            exports: ANGULAR_MOMENT_PIPES
        })
    ], MomentModule);
    return MomentModule;
}());
exports.MomentModule = MomentModule;
//# sourceMappingURL=moment.module.js.map

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisResultadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_models__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(194);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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






var MisResultadosPage = /** @class */ (function () {
    function MisResultadosPage(navCtrl, navParams, auth, data, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.data = data;
        this.afs = afs;
    }
    MisResultadosPage.prototype.ionViewDidLoad = function () {
        this.loadResults();
    };
    MisResultadosPage.prototype.loadResults = function () {
        var _this = this;
        this.auth.user$.subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
            var results;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(user && !this.results)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.data
                                .getCollectionQuery(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].EXAM_RESULT, function (ref) { return ref.where('user', '==', user.uid); })];
                    case 1:
                        results = _a.sent();
                        this.results = results.filter(function (r) { return r.exam; }).map(function (r) { return (__assign({}, r, { exam$: _this.afs
                                .collection(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].EXAM)
                                .doc(r.exam)
                                .valueChanges() })); });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    MisResultadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-mis-resultados',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\mis-resultados\mis-resultados.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Mis Resultados</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n  <ion-list *ngIf="results">\n    <ion-list-header>\n      Mis Resultados\n    </ion-list-header>\n    <ion-item *ngFor="let r of results">\n      <h2 *ngIf="r.exam$ | async as exam">{{exam.name}}</h2>\n      <p>{{r.date | amCalendar}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\mis-resultados\mis-resultados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["AngularFirestore"]])
    ], MisResultadosPage);
    return MisResultadosPage;
}());

//# sourceMappingURL=mis-resultados.js.map

/***/ })

});
//# sourceMappingURL=4.js.map
=======
webpackJsonp([4],{558:function(l,n,e){"use strict";function u(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,3,"div",[["class","flex-col"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n      "])),(l()(),r["ɵeld"](2,0,null,null,0,"img",[["src","assets/imgs/rings.svg"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n      "]))],null,null)}function t(l){return r["ɵvid"](0,[(l()(),r["ɵted"](-1,null,["\n    "])),(l()(),r["ɵand"](16777216,null,null,1,null,u)),r["ɵdid"](2,16384,null,0,_.k,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),r["ɵted"](-1,null,["\n  "]))],function(l,n){l(n,2,0,!n.component.g)},null)}function a(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,4,"ion-slide",[],null,null,null,w.b,w.a)),r["ɵdid"](1,180224,null,0,I.a,[r.ElementRef,r.Renderer,k.a],null,null),(l()(),r["ɵted"](-1,0,["\n        "])),(l()(),r["ɵeld"](3,0,[["imagen",1]],0,0,"img",[],[[8,"src",4]],[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.openImg(r["ɵnov"](l,3))&&u}return u},null,null)),(l()(),r["ɵted"](-1,0,["\n      "]))],null,function(l,n){l(n,3,0,n.context.$implicit)})}function d(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,12,"ion-item",[["class","item item-block"],["text-wrap",""]],null,null,null,E.b,E.a)),r["ɵdid"](1,1097728,null,3,N.a,[q.a,T.a,r.ElementRef,r.Renderer,[2,D.a]],null,null),r["ɵqud"](335544320,13,{contentLabel:0}),r["ɵqud"](603979776,14,{_buttons:1}),r["ɵqud"](603979776,15,{_icons:1}),r["ɵdid"](5,16384,null,0,V.a,[],null,null),(l()(),r["ɵted"](-1,2,["\n        "])),(l()(),r["ɵeld"](7,0,null,2,1,"h2",[],null,null,null,null,null)),(l()(),r["ɵted"](8,null,["",""])),(l()(),r["ɵted"](-1,2,["\n        "])),(l()(),r["ɵeld"](10,0,null,2,1,"p",[],null,null,null,null,null)),(l()(),r["ɵted"](11,null,["",""])),(l()(),r["ɵted"](-1,2,["\n      "]))],null,function(l,n){l(n,8,0,n.context.$implicit.title);l(n,11,0,n.context.$implicit.text)})}function i(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,73,"div",[],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n    \n    "])),(l()(),r["ɵeld"](2,0,null,null,5,"ion-slides",[],null,null,null,F.b,F.a)),r["ɵdid"](3,1228800,null,0,k.a,[T.a,L.a,r.NgZone,[2,P.a],r.ElementRef,r.Renderer],null,null),(l()(),r["ɵted"](-1,0,["\n      "])),(l()(),r["ɵand"](16777216,null,0,1,null,a)),r["ɵdid"](6,802816,null,0,_.j,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),r["ɵted"](-1,0,["\n    "])),(l()(),r["ɵted"](-1,null,["\n\n    "])),(l()(),r["ɵeld"](9,0,null,null,12,"ion-item",[["class","item item-block"],["style","margin-bottom:2rem"]],null,null,null,E.b,E.a)),r["ɵdid"](10,1097728,null,3,N.a,[q.a,T.a,r.ElementRef,r.Renderer,[2,D.a]],null,null),r["ɵqud"](335544320,1,{contentLabel:0}),r["ɵqud"](603979776,2,{_buttons:1}),r["ɵqud"](603979776,3,{_icons:1}),r["ɵdid"](14,16384,null,0,V.a,[],null,null),(l()(),r["ɵted"](-1,2,["\n      "])),(l()(),r["ɵeld"](16,0,null,2,1,"h2",[],null,null,null,null,null)),(l()(),r["ɵted"](17,null,["",""])),(l()(),r["ɵted"](-1,2,["\n      "])),(l()(),r["ɵeld"](19,0,null,2,1,"p",[],null,null,null,null,null)),(l()(),r["ɵted"](20,null,["",""])),(l()(),r["ɵted"](-1,2,["\n    "])),(l()(),r["ɵted"](-1,null,["\n\n    "])),(l()(),r["ɵeld"](23,0,null,null,49,"ion-list",[],null,null,null,null,null)),r["ɵdid"](24,16384,null,0,M.a,[T.a,r.ElementRef,r.Renderer,L.a,O.l,j.a],null,null),(l()(),r["ɵted"](-1,null,["\n      "])),(l()(),r["ɵeld"](26,0,null,null,7,"ion-list-header",[["class","item"]],null,null,null,E.b,E.a)),r["ɵdid"](27,1097728,null,3,N.a,[q.a,T.a,r.ElementRef,r.Renderer,[2,D.a]],null,null),r["ɵqud"](335544320,4,{contentLabel:0}),r["ɵqud"](603979776,5,{_buttons:1}),r["ɵqud"](603979776,6,{_icons:1}),r["ɵdid"](31,16384,null,0,K.a,[T.a,r.Renderer,r.ElementRef,[8,null]],null,null),(l()(),r["ɵeld"](32,0,null,2,1,"strong",[],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["Notas"])),(l()(),r["ɵted"](-1,null,["\n      "])),(l()(),r["ɵeld"](35,0,null,null,19,"ion-item",[["class","item item-block"]],null,null,null,E.b,E.a)),r["ɵdid"](36,1097728,null,3,N.a,[q.a,T.a,r.ElementRef,r.Renderer,[2,D.a]],null,null),r["ɵqud"](335544320,7,{contentLabel:0}),r["ɵqud"](603979776,8,{_buttons:1}),r["ɵqud"](603979776,9,{_icons:1}),r["ɵdid"](40,16384,null,0,V.a,[],null,null),(l()(),r["ɵted"](-1,2,["\n        "])),(l()(),r["ɵeld"](42,0,null,3,4,"ion-input",[["placeholder","Titulo de la nota"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var u=!0;if("ngModelChange"===n){u=!1!==(l.component.newNota.title=e)&&u}return u},$.b,$.a)),r["ɵdid"](43,671744,null,0,A.h,[[8,null],[8,null],[8,null],[8,null]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),r["ɵprd"](2048,null,A.f,null,[A.h]),r["ɵdid"](45,16384,null,0,A.g,[A.f],null,null),r["ɵdid"](46,5423104,null,0,G.a,[T.a,L.a,q.a,S.a,r.ElementRef,r.Renderer,[2,B.a],[2,N.a],[2,A.f],j.a],{disabled:[0,"disabled"],placeholder:[1,"placeholder"]},null),(l()(),r["ɵted"](-1,2,["\n        "])),(l()(),r["ɵeld"](48,0,null,4,5,"button",[["clear",""],["ion-button",""],["item-end",""]],[[8,"disabled",0]],[[null,"click"]],function(l,n,e){var u=!0,t=l.component;if("click"===n){u=!1!==t.addNota(t.newNota.title,t.newNota.text)&&u}return u},U.b,U.a)),r["ɵdid"](49,1097728,[[8,4]],0,Z.a,[[8,""],T.a,r.ElementRef,r.Renderer],{clear:[0,"clear"]},null),(l()(),r["ɵted"](-1,0,["\n          "])),(l()(),r["ɵeld"](51,0,null,0,1,"ion-icon",[["name","send"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r["ɵdid"](52,147456,null,0,z.a,[T.a,r.ElementRef,r.Renderer],{name:[0,"name"]},null),(l()(),r["ɵted"](-1,0,["\n        "])),(l()(),r["ɵted"](-1,2,["\n      "])),(l()(),r["ɵted"](-1,null,["\n      "])),(l()(),r["ɵeld"](56,0,null,null,12,"ion-item",[["class","item item-block"]],null,null,null,E.b,E.a)),r["ɵdid"](57,1097728,null,3,N.a,[q.a,T.a,r.ElementRef,r.Renderer,[2,D.a]],null,null),r["ɵqud"](335544320,10,{contentLabel:0}),r["ɵqud"](603979776,11,{_buttons:1}),r["ɵqud"](603979776,12,{_icons:1}),r["ɵdid"](61,16384,null,0,V.a,[],null,null),(l()(),r["ɵted"](-1,2,["\n        "])),(l()(),r["ɵeld"](63,0,null,3,4,"ion-textarea",[["placeholder","Texto de la nota"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var u=!0;if("ngModelChange"===n){u=!1!==(l.component.newNota.text=e)&&u}return u},$.b,$.a)),r["ɵdid"](64,671744,null,0,A.h,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),r["ɵprd"](2048,null,A.f,null,[A.h]),r["ɵdid"](66,16384,null,0,A.g,[A.f],null,null),r["ɵdid"](67,5423104,null,0,G.a,[T.a,L.a,q.a,S.a,r.ElementRef,r.Renderer,[2,B.a],[2,N.a],[2,A.f],j.a],{placeholder:[0,"placeholder"]},null),(l()(),r["ɵted"](-1,2,["\n      "])),(l()(),r["ɵted"](-1,null,["\n      "])),(l()(),r["ɵand"](16777216,null,null,1,null,d)),r["ɵdid"](71,802816,null,0,_.j,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),r["ɵted"](-1,null,["\n    "])),(l()(),r["ɵted"](-1,null,["\n\n  "]))],function(l,n){var e=n.component;l(n,6,0,n.context.ngIf.fotos);l(n,43,0,e.lc,e.newNota.title);l(n,46,0,e.lc,"Titulo de la nota");l(n,49,0,"");l(n,52,0,"send");l(n,64,0,e.newNota.text);l(n,67,0,"Texto de la nota");l(n,71,0,n.context.ngIf.notas)},function(l,n){var e=n.component;l(n,17,0,n.context.ngIf.name);l(n,20,0,n.context.ngIf.desc);l(n,42,0,r["ɵnov"](n,45).ngClassUntouched,r["ɵnov"](n,45).ngClassTouched,r["ɵnov"](n,45).ngClassPristine,r["ɵnov"](n,45).ngClassDirty,r["ɵnov"](n,45).ngClassValid,r["ɵnov"](n,45).ngClassInvalid,r["ɵnov"](n,45).ngClassPending);l(n,48,0,e.newNota.title.length<=0&&e.newNota.text.length<=0||e.newNota.title.length<=0||e.newNota.text.length<=0);l(n,51,0,r["ɵnov"](n,52)._hidden);l(n,63,0,r["ɵnov"](n,66).ngClassUntouched,r["ɵnov"](n,66).ngClassTouched,r["ɵnov"](n,66).ngClassPristine,r["ɵnov"](n,66).ngClassDirty,r["ɵnov"](n,66).ngClassValid,r["ɵnov"](n,66).ngClassInvalid,r["ɵnov"](n,66).ngClassPending)})}function o(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,10,"ion-header",[],null,null,null,null,null)),r["ɵdid"](1,16384,null,0,J.a,[T.a,r.ElementRef,r.Renderer,[2,P.a]],null,null),(l()(),r["ɵted"](-1,null,["\n\n  "])),(l()(),r["ɵeld"](3,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Y.b,Y.a)),r["ɵdid"](4,49152,null,0,H.a,[S.a,[2,P.a],[2,Q.a],T.a,r.ElementRef,r.Renderer],{color:[0,"color"]},null),(l()(),r["ɵted"](-1,3,["\n    "])),(l()(),r["ɵeld"](6,0,null,3,2,"ion-title",[],null,null,null,W.b,W.a)),r["ɵdid"](7,49152,null,0,X.a,[T.a,r.ElementRef,r.Renderer,[2,ll.a],[2,H.a]],null,null),(l()(),r["ɵted"](-1,0,["Galería"])),(l()(),r["ɵted"](-1,3,["\n  "])),(l()(),r["ɵted"](-1,null,["\n\n"])),(l()(),r["ɵted"](-1,null,["\n\n\n"])),(l()(),r["ɵeld"](12,0,null,null,8,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,nl.b,nl.a)),r["ɵdid"](13,4374528,null,0,B.a,[T.a,L.a,j.a,r.ElementRef,r.Renderer,S.a,el.a,r.NgZone,[2,P.a],[2,Q.a]],null,null),(l()(),r["ɵted"](-1,1,["\n\n  "])),(l()(),r["ɵand"](0,[["loader",2]],1,0,null,t)),(l()(),r["ɵted"](-1,1,["\n\n  "])),(l()(),r["ɵand"](16777216,null,1,2,null,i)),r["ɵdid"](18,16384,null,0,_.k,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),r["ɵpid"](131072,_.b,[r.ChangeDetectorRef]),(l()(),r["ɵted"](-1,1,["\n\n"])),(l()(),r["ɵted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,4,0,"primary");l(n,18,0,r["ɵunv"](n,18,0,r["ɵnov"](n,19).transform(e.gallery$)),r["ɵnov"](n,15))},function(l,n){l(n,3,0,r["ɵnov"](n,4)._hidden,r["ɵnov"](n,4)._sbPadding);l(n,12,0,r["ɵnov"](n,13).statusbarPadding,r["ɵnov"](n,13)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var r=e(0),s=(e(1),e(28),e(73)),c=(e(461),e(457)),f=(e(458),function(){function l(l,n,e,u,t,a){this.navCtrl=l,this.navParams=n,this.back=e,this.toast=u,this.imgCtrl=t,this.afs=a,this.id=this.navParams.get("id"),this.uid=localStorage.getItem("uid"),this.newNota={text:"",title:""},this.lc=!1}return l.prototype.ionViewDidLoad=function(){this.gallery$=this.afs.collection(c.a.GALLERY).doc(this.id).valueChanges()},l.prototype.openImg=function(l){this.imgCtrl.create(l).present()},l.prototype.addNota=function(l,n){var e=this;this.lc=!0,this.back.addNota(l,n,"galeria",this.id).subscribe(function(l){e.g.notas.push(l),e.toast.create({message:"Nota agregada correctamente.",duration:2e3}).present(),e.lc=!1,e.newNota={text:"",title:""}},function(l){e.lc=!1,e.toast.create({message:"No se pudo agregar tu nota...",duration:2e3}).present()})},l}()),p=function(){return function(){}}(),m=e(447),g=e(448),v=e(449),b=e(450),h=e(451),R=e(452),C=e(453),y=e(454),x=e(455),_=e(16),w=e(592),I=e(208),k=e(136),E=e(459),N=e(29),q=e(23),T=e(3),D=e(74),V=e(131),F=e(593),L=e(6),P=e(7),M=e(96),O=e(8),j=e(14),K=e(133),$=e(583),A=e(22),G=e(199),S=e(13),B=e(40),U=e(64),Z=e(32),z=e(63),J=e(130),Y=e(456),H=e(53),Q=e(31),W=e(582),X=e(196),ll=e(95),nl=e(581),el=e(61),ul=e(15),tl=e(97),al=e(99),dl=e(132),il=r["ɵcrt"]({encapsulation:2,styles:[],data:{}}),ol=r["ɵccf"]("page-galeria-detail",f,function(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,1,"page-galeria-detail",[],null,null,null,o,il)),r["ɵdid"](1,49152,null,0,f,[Q.a,ul.a,s.a,tl.a,al.a,dl.AngularFirestore],null,null)],null,null)},{},{},[]),rl=e(197),sl=e(62);e.d(n,"GaleriaDetailPageModuleNgFactory",function(){return cl});var cl=r["ɵcmf"](p,[],function(l){return r["ɵmod"]([r["ɵmpd"](512,r.ComponentFactoryResolver,r["ɵCodegenComponentFactoryResolver"],[[8,[m.a,g.a,v.a,b.a,h.a,R.a,C.a,y.a,x.a,ol]],[3,r.ComponentFactoryResolver],r.NgModuleRef]),r["ɵmpd"](4608,_.m,_.l,[r.LOCALE_ID,[2,_.w]]),r["ɵmpd"](4608,A.k,A.k,[]),r["ɵmpd"](4608,A.c,A.c,[]),r["ɵmpd"](512,_.c,_.c,[]),r["ɵmpd"](512,A.j,A.j,[]),r["ɵmpd"](512,A.d,A.d,[]),r["ɵmpd"](512,A.i,A.i,[]),r["ɵmpd"](512,rl.a,rl.a,[]),r["ɵmpd"](512,rl.b,rl.b,[]),r["ɵmpd"](512,p,p,[]),r["ɵmpd"](256,sl.a,f,[])])})},581:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[t["ɵqud"](402653184,1,{_fixedContent:0}),t["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),t["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t["ɵncd"](null,1),t["ɵncd"](null,2)],null,null)}e.d(n,"a",function(){return a}),n.b=u;var t=e(0),a=(e(3),e(6),e(14),e(61),e(7),e(31),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,a.i,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}e.d(n,"a",function(){return d}),n.b=u;var t=e(0),a=e(16),d=(e(3),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},583:function(l,n,e){"use strict";function u(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,[[1,0],["textInput",1]],null,1,"input",[["class","text-input"],["dir","auto"]],[[8,"type",0],[1,"aria-labelledby",0],[1,"min",0],[1,"max",0],[1,"step",0],[1,"autocomplete",0],[1,"autocorrect",0],[8,"placeholder",0],[8,"disabled",0],[8,"readOnly",0]],[[null,"input"],[null,"blur"],[null,"focus"],[null,"keydown"]],function(l,n,e){var u=!0,t=l.component;if("input"===n){u=!1!==t.onInput(e)&&u}if("blur"===n){u=!1!==t.onBlur(e)&&u}if("focus"===n){u=!1!==t.onFocus(e)&&u}if("keydown"===n){u=!1!==t.onKeydown(e)&&u}return u},null,null)),o["ɵdid"](1,278528,null,0,r.i,[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(l,n){l(n,1,0,"text-input","text-input-"+n.component._mode)},function(l,n){var e=n.component;l(n,0,0,e._type,e._labelId,e.min,e.max,e.step,e.autocomplete,e.autocorrect,e.placeholder,e._disabled,e._readonly)})}function t(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,[[1,0],["textInput",1]],null,1,"textarea",[["class","text-input"]],[[1,"aria-labelledby",0],[1,"autocomplete",0],[1,"autocorrect",0],[8,"placeholder",0],[8,"disabled",0],[8,"readOnly",0]],[[null,"input"],[null,"blur"],[null,"focus"],[null,"keydown"]],function(l,n,e){var u=!0,t=l.component;if("input"===n){u=!1!==t.onInput(e)&&u}if("blur"===n){u=!1!==t.onBlur(e)&&u}if("focus"===n){u=!1!==t.onFocus(e)&&u}if("keydown"===n){u=!1!==t.onKeydown(e)&&u}return u},null,null)),o["ɵdid"](1,278528,null,0,r.i,[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(l,n){l(n,1,0,"text-input","text-input-"+n.component._mode)},function(l,n){var e=n.component;l(n,0,0,e._labelId,e.autocomplete,e.autocorrect,e.placeholder,e._disabled,e._readonly)})}function a(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,null,null,1,"button",[["class","text-input-clear-icon"],["clear",""],["ion-button",""],["tabindex","-1"],["type","button"]],null,[[null,"click"],[null,"mousedown"]],function(l,n,e){var u=!0,t=l.component;if("click"===n){u=!1!==t.clearTextInput(e)&&u}if("mousedown"===n){u=!1!==t.clearTextInput(e)&&u}return u},s.b,s.a)),o["ɵdid"](1,1097728,null,0,c.a,[[8,""],f.a,o.ElementRef,o.Renderer],{clear:[0,"clear"]},null)],function(l,n){l(n,1,0,"")},null)}function d(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,null,null,0,"div",[["class","input-cover"]],null,[[null,"touchstart"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"]],function(l,n,e){var u=!0,t=l.component;if("touchstart"===n){u=!1!==t._pointerStart(e)&&u}if("touchend"===n){u=!1!==t._pointerEnd(e)&&u}if("mousedown"===n){u=!1!==t._pointerStart(e)&&u}if("mouseup"===n){u=!1!==t._pointerEnd(e)&&u}return u},null,null))],null,null)}function i(l){return o["ɵvid"](2,[o["ɵqud"](671088640,1,{_native:0}),(l()(),o["ɵand"](16777216,null,null,1,null,u)),o["ɵdid"](2,16384,null,0,r.k,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["ɵand"](16777216,null,null,1,null,t)),o["ɵdid"](4,16384,null,0,r.k,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["ɵand"](16777216,null,null,1,null,a)),o["ɵdid"](6,16384,null,0,r.k,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["ɵand"](16777216,null,null,1,null,d)),o["ɵdid"](8,16384,null,0,r.k,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,2,0,!e._isTextarea);l(n,4,0,e._isTextarea);l(n,6,0,e._clearInput);l(n,8,0,e._useAssist)},null)}e.d(n,"a",function(){return p}),n.b=i;var o=e(0),r=e(16),s=e(64),c=e(32),f=e(3),p=(e(6),e(23),e(14),o["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},592:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,1,"div",[["class","slide-zoom"]],null,null,null,null,null)),t["ɵncd"](null,0)],null,null)}e.d(n,"a",function(){return a}),n.b=u;var t=e(0),a=t["ɵcrt"]({encapsulation:2,styles:[],data:{}})},593:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,3,"div",[["class","swiper-container"]],[[1,"dir",0]],null,null,null,null)),(l()(),t["ɵeld"](1,0,null,null,1,"div",[["class","swiper-wrapper"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](3,0,null,null,0,"div",[["class","swiper-pagination"]],[[2,"hide",null]],null,null,null,null))],null,function(l,n){var e=n.component;l(n,0,0,e._rtl?"rtl":null);l(n,3,0,!e.pager)})}e.d(n,"a",function(){return a}),n.b=u;var t=e(0),a=(e(3),e(6),e(7),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
