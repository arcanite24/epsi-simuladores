<<<<<<< HEAD
webpackJsonp([3],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriasPageModule", function() { return GaleriasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__galerias__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(781);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GaleriasPageModule = /** @class */ (function () {
    function GaleriasPageModule() {
    }
    GaleriasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__galerias__["a" /* GaleriasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__galerias__["a" /* GaleriasPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], GaleriasPageModule);
    return GaleriasPageModule;
}());

//# sourceMappingURL=galerias.module.js.map

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

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_list_accordion_list__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timer_timer__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__zamna_feed_zamna_feed__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gallery_item_gallery_item__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__media_item_media_item__ = __webpack_require__(786);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__accordion_list_accordion_list__["a" /* AccordionListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__timer_timer__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__zamna_feed_zamna_feed__["a" /* ZamnaFeedComponent */],
                __WEBPACK_IMPORTED_MODULE_7__gallery_item_gallery_item__["a" /* GalleryItemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__media_item_media_item__["a" /* MediaItemComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_6_angular2_moment__["MomentModule"]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__accordion_list_accordion_list__["a" /* AccordionListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__timer_timer__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__zamna_feed_zamna_feed__["a" /* ZamnaFeedComponent */],
                __WEBPACK_IMPORTED_MODULE_7__gallery_item_gallery_item__["a" /* GalleryItemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__media_item_media_item__["a" /* MediaItemComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccordionListComponent = /** @class */ (function () {
    function AccordionListComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AccordionListComponent.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    AccordionListComponent.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    AccordionListComponent.prototype.openClase = function (item, type) {
        if (!item.video)
            return;
        this.navCtrl.push('ClaseDetailPage', { id: item.id, type: type });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], AccordionListComponent.prototype, "information", void 0);
    AccordionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'accordion-list',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\components\accordion-list\accordion-list.html"*/'<ion-list class="accordion-list">\n\n  <!-- First Level -->\n\n  <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n\n    <!-- Toggle Button -->\n\n    <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n\n      <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n\n      <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n\n        {{ item.name }}\n\n    </button>\n\n\n\n    <ion-list *ngIf="item.children && item.open" no-lines>\n\n      <!-- Second Level -->\n\n      <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n\n        <!-- Toggle Button -->\n\n        <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>\n\n          <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>\n\n          <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>\n\n          {{ child.name }}\n\n        </button>\n\n\n\n        <!-- Direct Add Button as Fallback -->\n\n        <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap (click)="openClase(child, \'tema\')">\n\n          <h2>{{ child.name }}</h2>\n\n          <!--<p text-lowercase>{{ child.information }}</p>-->\n\n          <!--<button ion-button outline item-end (click)="buyItem(child)">{{ child.price }}</button>-->\n\n        </ion-item>\n\n\n\n        <ion-list *ngIf="child.children && child.open">\n\n          <!-- Third Level -->\n\n          <ion-item *ngFor="let item of child.children; let k = index" detail-none class="child-item" text-wrap (click)="openClase(item, \'subtema\')">\n\n            <h2>{{ item.name }}</h2>\n\n            <!--<p text-lowercase>{{ item.information }}</p>-->\n\n            <!-- Direct Add Button -->\n\n            <!--<button ion-button outline item-end (click)="buyItem(item)">{{ item.price }}</button>-->\n\n          </ion-item>\n\n        </ion-list>\n\n\n\n      </ion-list-header>\n\n    </ion-list>\n\n    \n\n  </ion-list-header>\n\n</ion-list>'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\components\accordion-list\accordion-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], AccordionListComponent);
    return AccordionListComponent;
}());

//# sourceMappingURL=accordion-list.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
    }
    TimerComponent.prototype.ngOnInit = function () {
        this.initTimer();
    };
    TimerComponent.prototype.hasFinished = function () {
        return this.timer.hasFinished;
    };
    TimerComponent.prototype.initTimer = function () {
        if (!this.timeInSeconds) {
            this.timeInSeconds = 0;
        }
        this.timer = {
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    };
    TimerComponent.prototype.startTimer = function () {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    };
    TimerComponent.prototype.pauseTimer = function () {
        this.timer.runTimer = false;
    };
    TimerComponent.prototype.resumeTimer = function () {
        this.startTimer();
    };
    TimerComponent.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.timer.runTimer) {
                return;
            }
            _this.timer.secondsRemaining--;
            _this.timer.displayTime = _this.getSecondsAsDigitalClock(_this.timer.secondsRemaining);
            if (_this.timer.secondsRemaining > 0) {
                _this.timerTick();
            }
            else {
                _this.timer.hasFinished = true;
            }
        }, 1000);
    };
    TimerComponent.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours = Math.floor(secNum / 3600);
        var minutes = Math.floor((secNum - (hours * 3600)) / 60);
        var seconds = secNum - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? '0' + hours : hours.toString();
        minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
        secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "timeInSeconds", void 0);
    TimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timer',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\components\timer\timer.html"*/'<ion-card *ngIf="timer">\n\n	<ion-card-header>\n\n		<button ion-button *ngIf="timeInSeconds && timeInSeconds > 0" large block clear class="timer-button x-large">{{timer.displayTime}}</button>\n\n		<button ion-button *ngIf="!timeInSeconds || timeInSeconds == 0" large block clear class="timer-button">Formato de tiempo erroneo</button>\n\n	</ion-card-header>\n\n	<ion-item *ngIf="timeInSeconds && timeInSeconds > 0">\n\n		<button ion-button clear class="large" color="danger" (click)="initTimer()" item-start *ngIf="!timer.runTimer && (timer.hasStarted || timer.hasFinished) || timer.hasFinished">\n\n            <ion-icon name="refresh"></ion-icon>\n\n            Restart\n\n        </button>\n\n		<button ion-button clear class="large" (click)="pauseTimer()" item-end *ngIf="timer.runTimer && timer.hasStarted && !timer.hasFinished">\n\n            <ion-icon name="pause"></ion-icon>\n\n            Pause\n\n        </button>\n\n		<button ion-button clear class="large" (click)="resumeTimer()" item-end *ngIf="!timer.runTimer && timer.hasStarted && !timer.hasFinished">\n\n            <ion-icon name="play"></ion-icon>\n\n            Resume\n\n        </button>\n\n		<button ion-button clear class="large" (click)="startTimer()" item-end *ngIf="!timer.hasStarted">\n\n            <ion-icon name="play"></ion-icon>\n\n            Start\n\n        </button>\n\n	</ion-item>\n\n</ion-card>'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\components\timer\timer.html"*/
        })
    ], TimerComponent);
    return TimerComponent;
}());

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZamnaFeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(465);
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






var ZamnaFeedComponent = /** @class */ (function () {
    function ZamnaFeedComponent(modal, afs, auth) {
        this.modal = modal;
        this.afs = afs;
        this.auth = auth;
        /* public feed$: Observable<any[]> = this.back.loadFeed().pipe(map(feed => feed.filter(f => f.user))) */
        this.feed$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].POST).valueChanges();
        this.loader = false;
    }
    ZamnaFeedComponent.prototype.openComments = function (post) {
        return __awaiter(this, void 0, void 0, function () {
            var comments, m;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader = true;
                        return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].POST_COMMENT, function (ref) { return ref
                                .where('post', '==', post.id); })
                                .valueChanges()
                                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["take"])(1))
                                .toPromise()];
                    case 1:
                        comments = _a.sent();
                        m = this.modal.create('PostCommentsPage', { comments: comments });
                        m.present();
                        this.loader = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    /* async toggleLike(post, uid: string, isLiked: boolean) {
  
      this.loader = true
  
      if (isLiked) {
        await this.back.removePostLike(post.id, uid).toPromise()
        post.likes.splice(post.likes.indexOf(uid), 1)
      } else {
        await this.back.addPostLike(post.id, uid).toPromise()
        post.likes.push(uid)
      }
  
      this.loader = false
  
    } */
    ZamnaFeedComponent.prototype.isLiked = function (post) {
        if (!this.auth.user)
            return false;
        if (!post)
            return false;
        if (!post.likes)
            return false;
        return post.likes.indexOf(this.auth.user.uid) >= 0;
    };
    ZamnaFeedComponent.prototype.toggleLike = function (post, id, likes) {
        if (likes === void 0) { likes = []; }
        this.isLiked(post) ? likes.splice(likes.indexOf(this.auth.user.uid), 1) : likes.push(this.auth.user.uid);
        this.afs.doc(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].POST + "/" + id).update({ likes: likes });
    };
    ZamnaFeedComponent.prototype.removePost = function (id) {
        this.afs.doc(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].POST + "/" + id).delete();
    };
    ZamnaFeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'zamna-feed',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\components\zamna-feed\zamna-feed.html"*/'<div class="zamna-feed" *ngIf="auth.loggedIn">\n\n\n\n  <div class="feed-input">\n\n\n\n  </div>\n\n\n\n  <div class="feed-list" *ngIf="feed$ | async as feed">\n\n\n\n    <div class="feed-post" *ngFor="let post of feed.reverse()">\n\n      \n\n      <ion-card>\n\n\n\n        <ion-item *ngIf="post.user">\n\n          <ion-avatar item-start>\n\n            <img [src]="post.user.photoURL">\n\n          </ion-avatar>\n\n          <h2>{{post.user.displayName}} {{post.user.lastName}}</h2>\n\n          <p>{{post.date | amCalendar}}</p>\n\n        </ion-item>\n\n\n\n        <img [src]="post.img" *ngIf="post.img">\n\n\n\n        <ion-card-content *ngIf="post.text">\n\n          <p>{{post.text}}</p>\n\n        </ion-card-content>\n\n\n\n        <ion-row>\n\n          <ion-col>\n\n            <button ion-button icon-start clear small [color]="post.likes.indexOf(auth.user.uid) >= 0 ? \'primary\' : \'disabled\'" (click)="toggleLike(post, post.id, post.likes)" [disabled]="loader">\n\n              <ion-icon name="thumbs-up"></ion-icon>\n\n              <div>{{post.likes.length}} Likes</div>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col>\n\n            <button ion-button icon-start clear small (click)="openComments(post)" [disabled]="loader">\n\n              <ion-icon name="text"></ion-icon>\n\n              <div>Comentarios</div>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      </ion-card>\n\n    </div>\n\n\n\n  </div>\n\n  \n\n</div>'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\components\zamna-feed\zamna-feed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], ZamnaFeedComponent);
    return ZamnaFeedComponent;
}());

//# sourceMappingURL=zamna-feed.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_models__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(23);
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





var GalleryItemComponent = /** @class */ (function () {
    function GalleryItemComponent(afs, navCtrl) {
        this.afs = afs;
        this.navCtrl = navCtrl;
        this.galleries = [];
    }
    GalleryItemComponent.prototype.ngOnInit = function () {
        if (this.gallery) {
            this.loadGalleries(this.gallery.id);
        }
    };
    GalleryItemComponent.prototype.loadGalleries = function (cat_id) {
        return __awaiter(this, void 0, void 0, function () {
            var galleries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].GALLERY, function (ref) { return ref
                            .where('cat_id', '==', cat_id); })
                            .valueChanges()
                            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["take"])(1))
                            .toPromise()];
                    case 1:
                        galleries = _a.sent();
                        this.galleries = galleries;
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GalleryItemComponent.prototype, "gallery", void 0);
    GalleryItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'gallery-item',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\components\gallery-item\gallery-item.html"*/'<ion-list style="margin-bottom:3rem">\n\n  <ion-list-header><strong style="font-size:1.75rem;">{{gallery.name}}</strong></ion-list-header>\n\n  <ion-item *ngFor="let g of galleries" (click)="navCtrl.push(\'GaleriaDetailPage\', {id: g.id})">\n\n    <h2>{{g.name}}</h2>\n\n    <!--<p>{{g.desc}}</p>-->\n\n  </ion-item>\n\n</ion-list>'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\components\gallery-item\gallery-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* NavController */]])
    ], GalleryItemComponent);
    return GalleryItemComponent;
}());

//# sourceMappingURL=gallery-item.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_models__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(18);
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





var MediaItemComponent = /** @class */ (function () {
    function MediaItemComponent(iab, afs) {
        this.iab = iab;
        this.afs = afs;
        this.medias = [];
    }
    MediaItemComponent.prototype.ngOnInit = function () {
        this.loadMedias(this.media.id);
    };
    MediaItemComponent.prototype.openMedia = function (url) {
        //this.iab.create(this.back.API + url.replace('/file', '/fileNew'), '_system')
        this.iab.create(url, '_system');
    };
    MediaItemComponent.prototype.loadMedias = function (cat_id) {
        return __awaiter(this, void 0, void 0, function () {
            var medias;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afs.collection(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].MEDIA, function (ref) { return ref
                            .where('categoria.id', '==', cat_id); })
                            .valueChanges()
                            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["take"])(1))
                            .toPromise()];
                    case 1:
                        medias = _a.sent();
                        this.medias = medias;
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MediaItemComponent.prototype, "media", void 0);
    MediaItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'media-item',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\components\media-item\media-item.html"*/'<ion-list style="margin-bottom:3rem">\n\n  <ion-list-header><strong style="font-size:1.75rem;">{{media.name}}</strong></ion-list-header>\n\n  <ion-item *ngFor="let g of medias" (click)="openMedia(g.url)">\n\n    <h2>{{g.name}}</h2>\n\n    <!--<p>{{g.desc}}</p>-->\n\n  </ion-item>\n\n</ion-list>'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\components\media-item\media-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"]])
    ], MediaItemComponent);
    return MediaItemComponent;
}());

//# sourceMappingURL=media-item.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaleriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_models__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GaleriasPage = /** @class */ (function () {
    function GaleriasPage(navCtrl, navParams, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.galerias$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].GALLERY_CATEGORY).valueChanges();
    }
    GaleriasPage.prototype.ionViewDidLoad = function () {
    };
    GaleriasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-galerias',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\galerias\galerias.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Galerias</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n\n\n  <ng-template #loader>\n\n    <div class="flex-col" *ngIf="!galerias">\n\n      <img src="assets/imgs/rings.svg">\n\n    </div>\n\n  </ng-template>\n\n\n\n  <div *ngIf="galerias$ | async as galerias else loader">\n\n\n\n    <gallery-item *ngFor="let cat of galerias" [gallery]="cat"></gallery-item>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\galerias\galerias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"]])
    ], GaleriasPage);
    return GaleriasPage;
}());

//# sourceMappingURL=galerias.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
=======
webpackJsonp([3],{559:function(n,l,e){"use strict";function t(n){return c["ɵvid"](0,[(n()(),c["ɵeld"](0,0,null,null,10,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(n,l,e){var t=!0;if("click"===l){t=!1!==n.component.navCtrl.push("GaleriaDetailPage",{id:n.context.$implicit.id})&&t}return t},x.b,x.a)),c["ɵdid"](1,1097728,null,3,E.a,[P.a,O.a,c.ElementRef,c.Renderer,[2,I.a]],null,null),c["ɵqud"](335544320,4,{contentLabel:0}),c["ɵqud"](603979776,5,{_buttons:1}),c["ɵqud"](603979776,6,{_icons:1}),c["ɵdid"](5,16384,null,0,M.a,[],null,null),(n()(),c["ɵted"](-1,2,["\n    "])),(n()(),c["ɵeld"](7,0,null,2,1,"h2",[],null,null,null,null,null)),(n()(),c["ɵted"](8,null,["",""])),(n()(),c["ɵted"](-1,2,["\n    "])),(n()(),c["ɵted"](-1,2,["\n  "]))],null,function(n,l){n(l,8,0,l.context.$implicit.name)})}function u(n){return c["ɵvid"](0,[(n()(),c["ɵeld"](0,0,null,null,14,"ion-list",[["style","margin-bottom:3rem"]],null,null,null,null,null)),c["ɵdid"](1,16384,null,0,T.a,[O.a,c.ElementRef,c.Renderer,L.a,G.l,S.a],null,null),(n()(),c["ɵted"](-1,null,["\n  "])),(n()(),c["ɵeld"](3,0,null,null,7,"ion-list-header",[["class","item"]],null,null,null,x.b,x.a)),c["ɵdid"](4,1097728,null,3,E.a,[P.a,O.a,c.ElementRef,c.Renderer,[2,I.a]],null,null),c["ɵqud"](335544320,1,{contentLabel:0}),c["ɵqud"](603979776,2,{_buttons:1}),c["ɵqud"](603979776,3,{_icons:1}),c["ɵdid"](8,16384,null,0,D.a,[O.a,c.Renderer,c.ElementRef,[8,null]],null,null),(n()(),c["ɵeld"](9,0,null,2,1,"strong",[["style","font-size:1.75rem;"]],null,null,null,null,null)),(n()(),c["ɵted"](10,null,["",""])),(n()(),c["ɵted"](-1,null,["\n  "])),(n()(),c["ɵand"](16777216,null,null,1,null,t)),c["ɵdid"](13,802816,null,0,_.j,[c.ViewContainerRef,c.TemplateRef,c.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),c["ɵted"](-1,null,["\n"]))],function(n,l){n(l,13,0,l.component.galleries)},function(n,l){n(l,10,0,l.component.gallery.name)})}function i(n){return c["ɵvid"](0,[(n()(),c["ɵeld"](0,0,null,null,3,"div",[["class","flex-col"]],null,null,null,null,null)),(n()(),c["ɵted"](-1,null,["\n      "])),(n()(),c["ɵeld"](2,0,null,null,0,"img",[["src","assets/imgs/rings.svg"]],null,null,null,null,null)),(n()(),c["ɵted"](-1,null,["\n    "]))],null,null)}function r(n){return c["ɵvid"](0,[(n()(),c["ɵted"](-1,null,["\n    "])),(n()(),c["ɵand"](16777216,null,null,1,null,i)),c["ɵdid"](2,16384,null,0,_.k,[c.ViewContainerRef,c.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),c["ɵted"](-1,null,["\n  "]))],function(n,l){n(l,2,0,!l.component.galerias)},null)}function o(n){return c["ɵvid"](0,[(n()(),c["ɵeld"](0,0,null,null,1,"gallery-item",[],null,null,null,u,A)),c["ɵdid"](1,114688,null,0,F.a,[j.AngularFirestore,q.a],{gallery:[0,"gallery"]},null)],function(n,l){n(l,1,0,l.context.$implicit)},null)}function a(n){return c["ɵvid"](0,[(n()(),c["ɵeld"](0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),c["ɵted"](-1,null,["\n\n    "])),(n()(),c["ɵand"](16777216,null,null,1,null,o)),c["ɵdid"](3,802816,null,0,_.j,[c.ViewContainerRef,c.TemplateRef,c.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),c["ɵted"](-1,null,["\n\n  "]))],function(n,l){n(l,3,0,l.context.ngIf)},null)}function s(n){return c["ɵvid"](0,[(n()(),c["ɵeld"](0,0,null,null,10,"ion-header",[],null,null,null,null,null)),c["ɵdid"](1,16384,null,0,V.a,[O.a,c.ElementRef,c.Renderer,[2,$.a]],null,null),(n()(),c["ɵted"](-1,null,["\n\n  "])),(n()(),c["ɵeld"](3,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,N.b,N.a)),c["ɵdid"](4,49152,null,0,Y.a,[z.a,[2,$.a],[2,q.a],O.a,c.ElementRef,c.Renderer],{color:[0,"color"]},null),(n()(),c["ɵted"](-1,3,["\n    "])),(n()(),c["ɵeld"](6,0,null,3,2,"ion-title",[],null,null,null,J.b,J.a)),c["ɵdid"](7,49152,null,0,K.a,[O.a,c.ElementRef,c.Renderer,[2,Z.a],[2,Y.a]],null,null),(n()(),c["ɵted"](-1,0,["Galerias"])),(n()(),c["ɵted"](-1,3,["\n  "])),(n()(),c["ɵted"](-1,null,["\n\n"])),(n()(),c["ɵted"](-1,null,["\n\n\n"])),(n()(),c["ɵeld"](12,0,null,null,8,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,B.b,B.a)),c["ɵdid"](13,4374528,null,0,H.a,[O.a,L.a,S.a,c.ElementRef,c.Renderer,z.a,Q.a,c.NgZone,[2,$.a],[2,q.a]],null,null),(n()(),c["ɵted"](-1,1,["\n\n  "])),(n()(),c["ɵand"](0,[["loader",2]],1,0,null,r)),(n()(),c["ɵted"](-1,1,["\n\n  "])),(n()(),c["ɵand"](16777216,null,1,2,null,a)),c["ɵdid"](18,16384,null,0,_.k,[c.ViewContainerRef,c.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),c["ɵpid"](131072,_.b,[c.ChangeDetectorRef]),(n()(),c["ɵted"](-1,1,["\n\n"])),(n()(),c["ɵted"](-1,null,["\n"]))],function(n,l){var e=l.component;n(l,4,0,"primary");n(l,18,0,c["ɵunv"](l,18,0,c["ɵnov"](l,19).transform(e.galerias$)),c["ɵnov"](l,15))},function(n,l){n(l,3,0,c["ɵnov"](l,4)._hidden,c["ɵnov"](l,4)._sbPadding);n(l,12,0,c["ɵnov"](l,13).statusbarPadding,c["ɵnov"](l,13)._hasRefresher)})}Object.defineProperty(l,"__esModule",{value:!0});var c=e(0),d=(e(1),e(28),e(457)),f=(e(458),function(){function n(n,l,e){this.navCtrl=n,this.navParams=l,this.afs=e,this.galerias$=this.afs.collection(d.a.GALLERY_CATEGORY).valueChanges()}return n.prototype.ionViewDidLoad=function(){},n}()),p=e(584),h=function(){return function(){}}(),m=e(447),v=e(448),b=e(449),g=e(450),y=e(451),w=e(452),R=e(453),C=e(454),k=e(455),_=e(16),x=e(459),E=e(29),P=e(23),O=e(3),I=e(74),M=e(131),T=e(96),L=e(6),G=e(8),S=e(14),D=e(133),F=e(589),j=e(132),q=e(31),A=c["ɵcrt"]({encapsulation:2,styles:[],data:{}}),V=e(130),$=e(7),N=e(456),Y=e(53),z=e(13),J=e(582),K=e(196),Z=e(95),B=e(581),H=e(40),Q=e(61),U=e(15),W=c["ɵcrt"]({encapsulation:2,styles:[],data:{}}),X=c["ɵccf"]("page-galerias",f,function(n){return c["ɵvid"](0,[(n()(),c["ɵeld"](0,0,null,null,1,"page-galerias",[],null,null,null,s,W)),c["ɵdid"](1,49152,null,0,f,[q.a,U.a,j.AngularFirestore],null,null)],null,null)},{},{},[]),nn=e(22),ln=e(197),en=e(204),tn=e(62);e.d(l,"GaleriasPageModuleNgFactory",function(){return un});var un=c["ɵcmf"](h,[],function(n){return c["ɵmod"]([c["ɵmpd"](512,c.ComponentFactoryResolver,c["ɵCodegenComponentFactoryResolver"],[[8,[m.a,v.a,b.a,g.a,y.a,w.a,R.a,C.a,k.a,X]],[3,c.ComponentFactoryResolver],c.NgModuleRef]),c["ɵmpd"](4608,_.m,_.l,[c.LOCALE_ID,[2,_.w]]),c["ɵmpd"](4608,nn.k,nn.k,[]),c["ɵmpd"](4608,nn.c,nn.c,[]),c["ɵmpd"](512,_.c,_.c,[]),c["ɵmpd"](512,nn.j,nn.j,[]),c["ɵmpd"](512,nn.d,nn.d,[]),c["ɵmpd"](512,nn.i,nn.i,[]),c["ɵmpd"](512,ln.a,ln.a,[]),c["ɵmpd"](512,ln.b,ln.b,[]),c["ɵmpd"](512,en.MomentModule,en.MomentModule,[]),c["ɵmpd"](512,p.a,p.a,[]),c["ɵmpd"](512,h,h,[]),c["ɵmpd"](256,tn.a,f,[])])})},581:function(n,l,e){"use strict";function t(n){return u["ɵvid"](2,[u["ɵqud"](402653184,1,{_fixedContent:0}),u["ɵqud"](402653184,2,{_scrollContent:0}),(n()(),u["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),u["ɵncd"](null,0),(n()(),u["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),u["ɵncd"](null,1),u["ɵncd"](null,2)],null,null)}e.d(l,"a",function(){return i}),l.b=t;var u=e(0),i=(e(3),e(6),e(14),e(61),e(7),e(31),u["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(n,l,e){"use strict";function t(n){return u["ɵvid"](2,[(n()(),u["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),u["ɵdid"](1,278528,null,0,i.i,[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["ɵncd"](null,0)],function(n,l){n(l,1,0,"toolbar-title","toolbar-title-"+l.component._mode)},null)}e.d(l,"a",function(){return r}),l.b=t;var u=e(0),i=e(16),r=(e(3),u["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},584:function(n,l,e){"use strict";e(1),e(0),e(587),e(16),e(28),e(588),e(460),e(589),e(590);e.d(l,"a",function(){return t});var t=function(){return function(){}}()},587:function(n,l,e){"use strict";e.d(l,"a",function(){return t});e(1),e(28);var t=function(){function n(n){this.navCtrl=n}return n.prototype.toggleSection=function(n){this.information[n].open=!this.information[n].open},n.prototype.toggleItem=function(n,l){this.information[n].children[l].open=!this.information[n].children[l].open},n.prototype.openClase=function(n,l){n.video&&this.navCtrl.push("ClaseDetailPage",{id:n.id,type:l})},n}()},588:function(n,l,e){"use strict";e.d(l,"a",function(){return a});e(1),e(28);var t=e(458),u=(e.n(t),e(457)),i=(e(198),e(24)),r=this&&this.__awaiter||function(n,l,e,t){return new(e||(e=Promise))(function(u,i){function r(n){try{a(t.next(n))}catch(n){i(n)}}function o(n){try{a(t.throw(n))}catch(n){i(n)}}function a(n){n.done?u(n.value):new e(function(l){l(n.value)}).then(r,o)}a((t=t.apply(n,l||[])).next())})},o=this&&this.__generator||function(n,l){function e(e){return function(r){return function(e){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,u&&(i=u[2&e[0]?"return":e[0]?"throw":"next"])&&!(i=i.call(u,e[1])).done)return i;switch(u=0,i&&(e=[0,i.value]),e[0]){case 0:case 1:i=e;break;case 4:return o.label++,{value:e[1],done:!1};case 5:o.label++,u=e[1],e=[0];continue;case 7:e=o.ops.pop(),o.trys.pop();continue;default:if(i=o.trys,!(i=i.length>0&&i[i.length-1])&&(6===e[0]||2===e[0])){o=0;continue}if(3===e[0]&&(!i||e[1]>i[0]&&e[1]<i[3])){o.label=e[1];break}if(6===e[0]&&o.label<i[1]){o.label=i[1],i=e;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(e);break}i[2]&&o.ops.pop(),o.trys.pop();continue}e=l.call(n,o)}catch(n){e=[6,n],u=0}finally{t=i=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,r])}}var t,u,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r},a=function(){function n(n,l,e){this.modal=n,this.afs=l,this.auth=e,this.feed$=this.afs.collection(u.a.POST).valueChanges(),this.loader=!1}return n.prototype.openComments=function(n){return r(this,void 0,void 0,function(){var l;return o(this,function(e){switch(e.label){case 0:return this.loader=!0,[4,this.afs.collection(u.a.POST_COMMENT,function(l){return l.where("post","==",n.id)}).valueChanges().pipe(Object(i.take)(1)).toPromise()];case 1:return l=e.sent(),this.modal.create("PostCommentsPage",{comments:l}).present(),this.loader=!1,[2]}})})},n.prototype.isLiked=function(n){return!!this.auth.user&&(!!n&&(!!n.likes&&n.likes.indexOf(this.auth.user.uid)>=0))},n.prototype.toggleLike=function(n,l,e){void 0===e&&(e=[]),this.isLiked(n)?e.splice(e.indexOf(this.auth.user.uid),1):e.push(this.auth.user.uid),this.afs.doc(u.a.POST+"/"+l).update({likes:e})},n.prototype.removePost=function(n){this.afs.doc(u.a.POST+"/"+n).delete()},n}()},589:function(n,l,e){"use strict";e.d(l,"a",function(){return a});e(1);var t=e(457),u=e(458),i=(e.n(u),e(24)),r=this&&this.__awaiter||function(n,l,e,t){return new(e||(e=Promise))(function(u,i){function r(n){try{a(t.next(n))}catch(n){i(n)}}function o(n){try{a(t.throw(n))}catch(n){i(n)}}function a(n){n.done?u(n.value):new e(function(l){l(n.value)}).then(r,o)}a((t=t.apply(n,l||[])).next())})},o=this&&this.__generator||function(n,l){function e(e){return function(r){return function(e){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,u&&(i=u[2&e[0]?"return":e[0]?"throw":"next"])&&!(i=i.call(u,e[1])).done)return i;switch(u=0,i&&(e=[0,i.value]),e[0]){case 0:case 1:i=e;break;case 4:return o.label++,{value:e[1],done:!1};case 5:o.label++,u=e[1],e=[0];continue;case 7:e=o.ops.pop(),o.trys.pop();continue;default:if(i=o.trys,!(i=i.length>0&&i[i.length-1])&&(6===e[0]||2===e[0])){o=0;continue}if(3===e[0]&&(!i||e[1]>i[0]&&e[1]<i[3])){o.label=e[1];break}if(6===e[0]&&o.label<i[1]){o.label=i[1],i=e;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(e);break}i[2]&&o.ops.pop(),o.trys.pop();continue}e=l.call(n,o)}catch(n){e=[6,n],u=0}finally{t=i=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,r])}}var t,u,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r},a=function(){function n(n,l){this.afs=n,this.navCtrl=l,this.galleries=[]}return n.prototype.ngOnInit=function(){this.gallery&&this.loadGalleries(this.gallery.id)},n.prototype.loadGalleries=function(n){return r(this,void 0,void 0,function(){var l;return o(this,function(e){switch(e.label){case 0:return[4,this.afs.collection(t.a.GALLERY,function(l){return l.where("cat_id","==",n)}).valueChanges().pipe(Object(i.take)(1)).toPromise()];case 1:return l=e.sent(),this.galleries=l,[2]}})})},n}()},590:function(n,l,e){"use strict";e.d(l,"a",function(){return a});e(1);var t=e(457),u=(e(202),e(458)),i=(e.n(u),e(24)),r=this&&this.__awaiter||function(n,l,e,t){return new(e||(e=Promise))(function(u,i){function r(n){try{a(t.next(n))}catch(n){i(n)}}function o(n){try{a(t.throw(n))}catch(n){i(n)}}function a(n){n.done?u(n.value):new e(function(l){l(n.value)}).then(r,o)}a((t=t.apply(n,l||[])).next())})},o=this&&this.__generator||function(n,l){function e(e){return function(r){return function(e){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,u&&(i=u[2&e[0]?"return":e[0]?"throw":"next"])&&!(i=i.call(u,e[1])).done)return i;switch(u=0,i&&(e=[0,i.value]),e[0]){case 0:case 1:i=e;break;case 4:return o.label++,{value:e[1],done:!1};case 5:o.label++,u=e[1],e=[0];continue;case 7:e=o.ops.pop(),o.trys.pop();continue;default:if(i=o.trys,!(i=i.length>0&&i[i.length-1])&&(6===e[0]||2===e[0])){o=0;continue}if(3===e[0]&&(!i||e[1]>i[0]&&e[1]<i[3])){o.label=e[1];break}if(6===e[0]&&o.label<i[1]){o.label=i[1],i=e;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(e);break}i[2]&&o.ops.pop(),o.trys.pop();continue}e=l.call(n,o)}catch(n){e=[6,n],u=0}finally{t=i=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,r])}}var t,u,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r},a=function(){function n(n,l){this.iab=n,this.afs=l,this.medias=[]}return n.prototype.ngOnInit=function(){this.loadMedias(this.media.id)},n.prototype.openMedia=function(n){this.iab.create(n,"_system")},n.prototype.loadMedias=function(n){return r(this,void 0,void 0,function(){var l;return o(this,function(e){switch(e.label){case 0:return[4,this.afs.collection(t.a.MEDIA,function(l){return l.where("categoria.id","==",n)}).valueChanges().pipe(Object(i.take)(1)).toPromise()];case 1:return l=e.sent(),this.medias=l,[2]}})})},n}()}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
