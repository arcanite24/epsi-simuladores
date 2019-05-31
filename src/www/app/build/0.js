<<<<<<< HEAD
webpackJsonp([0],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPageModule", function() { return MediaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(781);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MediaPageModule = /** @class */ (function () {
    function MediaPageModule() {
    }
    MediaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__media__["a" /* MediaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__media__["a" /* MediaPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], MediaPageModule);
    return MediaPageModule;
}());

//# sourceMappingURL=media.module.js.map

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

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaPage; });
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




var MediaPage = /** @class */ (function () {
    function MediaPage(navCtrl, navParams, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.medias$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].MEDIA_CATEGORY).valueChanges();
    }
    MediaPage.prototype.ionViewDidLoad = function () { };
    MediaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-media',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\media\media.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Material Extra</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n  \n\n  <ng-template #loader>\n\n    <div class="flex-col">\n\n      <img src="assets/imgs/rings.svg">\n\n    </div>\n\n  </ng-template>\n\n\n\n  <div class="medias-container" *ngIf="medias$ | async as medias else loader">\n\n    <media-item *ngFor="let media of medias" [media]="media"></media-item>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\media\media.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"]])
    ], MediaPage);
    return MediaPage;
}());

//# sourceMappingURL=media.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
=======
webpackJsonp([0],{562:function(l,n,e){"use strict";function u(l){return y["ɵvid"](0,[(l()(),y["ɵeld"](0,0,null,null,19,"ion-item",[["class","item item-block"]],null,null,null,j.b,j.a)),y["ɵdid"](1,1097728,null,3,G.a,[Z.a,q.a,y.ElementRef,y.Renderer,[2,z.a]],null,null),y["ɵqud"](335544320,1,{contentLabel:0}),y["ɵqud"](603979776,2,{_buttons:1}),y["ɵqud"](603979776,3,{_icons:1}),y["ɵdid"](5,16384,null,0,U.a,[],null,null),(l()(),y["ɵted"](-1,2,["\n          "])),(l()(),y["ɵeld"](7,0,null,0,4,"ion-avatar",[["item-start",""]],null,null,null,null,null)),y["ɵdid"](8,16384,null,0,B.a,[],null,null),(l()(),y["ɵted"](-1,null,["\n            "])),(l()(),y["ɵeld"](10,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),y["ɵted"](-1,null,["\n          "])),(l()(),y["ɵted"](-1,2,["\n          "])),(l()(),y["ɵeld"](13,0,null,2,1,"h2",[],null,null,null,null,null)),(l()(),y["ɵted"](14,null,[""," ",""])),(l()(),y["ɵted"](-1,2,["\n          "])),(l()(),y["ɵeld"](16,0,null,2,2,"p",[],null,null,null,null,null)),(l()(),y["ɵted"](17,null,["",""])),y["ɵpid"](131072,H.CalendarPipe,[y.ChangeDetectorRef,y.NgZone]),(l()(),y["ɵted"](-1,2,["\n        "]))],null,function(l,n){l(n,10,0,n.parent.context.$implicit.user.photoURL);l(n,14,0,n.parent.context.$implicit.user.displayName,n.parent.context.$implicit.user.lastName);l(n,17,0,y["ɵunv"](n,17,0,y["ɵnov"](n,18).transform(n.parent.context.$implicit.date)))})}function t(l){return y["ɵvid"](0,[(l()(),y["ɵeld"](0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.img)})}function i(l){return y["ɵvid"](0,[(l()(),y["ɵeld"](0,0,null,null,5,"ion-card-content",[],null,null,null,null,null)),y["ɵdid"](1,16384,null,0,J.a,[q.a,y.ElementRef,y.Renderer],null,null),(l()(),y["ɵted"](-1,null,["\n          "])),(l()(),y["ɵeld"](3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),y["ɵted"](4,null,["",""])),(l()(),y["ɵted"](-1,null,["\n        "]))],null,function(l,n){l(n,4,0,n.parent.context.$implicit.text)})}function o(l){return y["ɵvid"](0,[(l()(),y["ɵeld"](0,0,null,null,46,"div",[["class","feed-post"]],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["\n      \n      "])),(l()(),y["ɵeld"](2,0,null,null,43,"ion-card",[],null,null,null,null,null)),y["ɵdid"](3,16384,null,0,K.a,[q.a,y.ElementRef,y.Renderer],null,null),(l()(),y["ɵted"](-1,null,["\n\n        "])),(l()(),y["ɵand"](16777216,null,null,1,null,u)),y["ɵdid"](6,16384,null,0,Q.k,[y.ViewContainerRef,y.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),y["ɵted"](-1,null,["\n\n        "])),(l()(),y["ɵand"](16777216,null,null,1,null,t)),y["ɵdid"](9,16384,null,0,Q.k,[y.ViewContainerRef,y.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),y["ɵted"](-1,null,["\n\n        "])),(l()(),y["ɵand"](16777216,null,null,1,null,i)),y["ɵdid"](12,16384,null,0,Q.k,[y.ViewContainerRef,y.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),y["ɵted"](-1,null,["\n\n        "])),(l()(),y["ɵeld"](14,0,null,null,30,"ion-row",[["class","row"]],null,null,null,null,null)),y["ɵdid"](15,16384,null,0,Y.a,[],null,null),(l()(),y["ɵted"](-1,null,["\n          "])),(l()(),y["ɵeld"](17,0,null,null,12,"ion-col",[["class","col"]],null,null,null,null,null)),y["ɵdid"](18,16384,null,0,W.a,[],null,null),(l()(),y["ɵted"](-1,null,["\n            "])),(l()(),y["ɵeld"](20,0,null,null,8,"button",[["clear",""],["icon-start",""],["ion-button",""],["small",""]],[[8,"disabled",0]],[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.toggleLike(l.context.$implicit,l.context.$implicit.id,l.context.$implicit.likes)&&u}return u},X.b,X.a)),y["ɵdid"](21,1097728,null,0,ll.a,[[8,""],q.a,y.ElementRef,y.Renderer],{color:[0,"color"],small:[1,"small"],clear:[2,"clear"]},null),(l()(),y["ɵted"](-1,0,["\n              "])),(l()(),y["ɵeld"](23,0,null,0,1,"ion-icon",[["name","thumbs-up"],["role","img"]],[[2,"hide",null]],null,null,null,null)),y["ɵdid"](24,147456,null,0,nl.a,[q.a,y.ElementRef,y.Renderer],{name:[0,"name"]},null),(l()(),y["ɵted"](-1,0,["\n              "])),(l()(),y["ɵeld"](26,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),y["ɵted"](27,null,[""," Likes"])),(l()(),y["ɵted"](-1,0,["\n            "])),(l()(),y["ɵted"](-1,null,["\n          "])),(l()(),y["ɵted"](-1,null,["\n          "])),(l()(),y["ɵeld"](31,0,null,null,12,"ion-col",[["class","col"]],null,null,null,null,null)),y["ɵdid"](32,16384,null,0,W.a,[],null,null),(l()(),y["ɵted"](-1,null,["\n            "])),(l()(),y["ɵeld"](34,0,null,null,8,"button",[["clear",""],["icon-start",""],["ion-button",""],["small",""]],[[8,"disabled",0]],[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.openComments(l.context.$implicit)&&u}return u},X.b,X.a)),y["ɵdid"](35,1097728,null,0,ll.a,[[8,""],q.a,y.ElementRef,y.Renderer],{small:[0,"small"],clear:[1,"clear"]},null),(l()(),y["ɵted"](-1,0,["\n              "])),(l()(),y["ɵeld"](37,0,null,0,1,"ion-icon",[["name","text"],["role","img"]],[[2,"hide",null]],null,null,null,null)),y["ɵdid"](38,147456,null,0,nl.a,[q.a,y.ElementRef,y.Renderer],{name:[0,"name"]},null),(l()(),y["ɵted"](-1,0,["\n              "])),(l()(),y["ɵeld"](40,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["Comentarios"])),(l()(),y["ɵted"](-1,0,["\n            "])),(l()(),y["ɵted"](-1,null,["\n          "])),(l()(),y["ɵted"](-1,null,["\n        "])),(l()(),y["ɵted"](-1,null,["\n\n      "])),(l()(),y["ɵted"](-1,null,["\n    "]))],function(l,n){var e=n.component;l(n,6,0,n.context.$implicit.user);l(n,9,0,n.context.$implicit.img);l(n,12,0,n.context.$implicit.text);l(n,21,0,n.context.$implicit.likes.indexOf(e.auth.user.uid)>=0?"primary":"disabled","","");l(n,24,0,"thumbs-up");l(n,35,0,"","");l(n,38,0,"text")},function(l,n){var e=n.component;l(n,20,0,e.loader);l(n,23,0,y["ɵnov"](n,24)._hidden);l(n,27,0,n.context.$implicit.likes.length);l(n,34,0,e.loader);l(n,37,0,y["ɵnov"](n,38)._hidden)})}function a(l){return y["ɵvid"](0,[(l()(),y["ɵeld"](0,0,null,null,4,"div",[["class","feed-list"]],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["\n\n    "])),(l()(),y["ɵand"](16777216,null,null,1,null,o)),y["ɵdid"](3,802816,null,0,Q.j,[y.ViewContainerRef,y.TemplateRef,y.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),y["ɵted"](-1,null,["\n\n  "]))],function(l,n){l(n,3,0,n.context.ngIf.reverse())},null)}function r(l){return y["ɵvid"](0,[(l()(),y["ɵeld"](0,0,null,null,8,"div",[["class","zamna-feed"]],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["\n\n  "])),(l()(),y["ɵeld"](2,0,null,null,1,"div",[["class","feed-input"]],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["\n\n  "])),(l()(),y["ɵted"](-1,null,["\n\n  "])),(l()(),y["ɵand"](16777216,null,null,2,null,a)),y["ɵdid"](6,16384,null,0,Q.k,[y.ViewContainerRef,y.TemplateRef],{ngIf:[0,"ngIf"]},null),y["ɵpid"](131072,Q.b,[y.ChangeDetectorRef]),(l()(),y["ɵted"](-1,null,["\n  \n"]))],function(l,n){var e=n.component;l(n,6,0,y["ɵunv"](n,6,0,y["ɵnov"](n,7).transform(e.feed$)))},null)}function d(l){return y["ɵvid"](0,[(l()(),y["ɵand"](16777216,null,null,1,null,r)),y["ɵdid"](1,16384,null,0,Q.k,[y.ViewContainerRef,y.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,n.component.auth.loggedIn)},null)}function c(l){return y["ɵvid"](0,[(l()(),y["ɵeld"](0,0,null,null,3,"div",[["class","home-loader"]],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["\n  "])),(l()(),y["ɵeld"](2,0,null,null,0,"img",[["src","assets/imgs/weon.png"]],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["\n"]))],null,null)}function s(l){return y["ɵvid"](0,[(l()(),y["ɵeld"](0,0,null,null,3,"ion-badge",[["class","noti-badge"],["color","danger"]],null,null,null,null,null)),y["ɵdid"](1,16384,null,0,F.a,[q.a,y.ElementRef,y.Renderer],{color:[0,"color"]},null),(l()(),y["ɵted"](2,null,["",""])),y["ɵppd"](3,1)],function(l,n){l(n,1,0,"danger")},function(l,n){var e=n.component;l(n,2,0,y["ɵunv"](n,2,0,l(n,3,0,y["ɵnov"](n.parent,0),e.notRead)))})}function f(l){return y["ɵvid"](0,[(l()(),y["ɵeld"](0,0,null,null,1,"zamna-feed",[["class","w100"]],null,null,null,d,il)),y["ɵdid"](1,49152,null,0,el.a,[ul.a,tl.AngularFirestore,x.a],null,null)],null,null)}function m(l){return y["ɵvid"](0,[(l()(),y["ɵeld"](0,0,null,null,13,"div",[["class","flex flex-col text-center"],["padding",""]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.openZamna()&&u}return u},null,null)),(l()(),y["ɵted"](-1,null,["\n    "])),(l()(),y["ɵeld"](2,0,null,null,7,"h2",[],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["No tienes ningún curso comprado, puedes adquirir el "])),(l()(),y["ɵeld"](4,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["Curso ENARM Esencial"])),(l()(),y["ɵted"](-1,null,[" o "])),(l()(),y["ɵeld"](7,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["Curso ENARM Premium"])),(l()(),y["ɵted"](-1,null,[" en:"])),(l()(),y["ɵted"](-1,null,["\n    "])),(l()(),y["ɵeld"](11,0,null,null,1,"h3",[["class","c54"]],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["zamnademy.com"])),(l()(),y["ɵted"](-1,null,["\n  "]))],null,null)}function p(l){return y["ɵvid"](0,[(l()(),y["ɵeld"](0,0,null,null,10,"div",[["class","home-tile"]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.openVideos(!0)&&u}return u},null,null)),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵeld"](2,0,null,null,7,"ion-card",[["class","flex-col"]],null,null,null,null,null)),y["ɵdid"](3,16384,null,0,K.a,[q.a,y.ElementRef,y.Renderer],null,null),(l()(),y["ɵted"](-1,null,["\n        "])),(l()(),y["ɵeld"](5,0,null,null,0,"img",[["src","assets/imgs/Especialidades.svg"]],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["\n        "])),(l()(),y["ɵeld"](7,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["Programa"])),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵted"](-1,null,["\n    "]))],null,null)}function h(l){return y["ɵvid"](0,[(l()(),y["ɵeld"](0,0,null,null,101,"div",[["class","home-grid"]],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["\n\n    "])),(l()(),y["ɵeld"](2,0,null,null,10,"div",[["class","home-tile"]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.openVideos()&&u}return u},null,null)),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵeld"](4,0,null,null,7,"ion-card",[["class","flex-col"]],null,null,null,null,null)),y["ɵdid"](5,16384,null,0,K.a,[q.a,y.ElementRef,y.Renderer],null,null),(l()(),y["ɵted"](-1,null,["\n        "])),(l()(),y["ɵeld"](7,0,null,null,0,"img",[["src","assets/imgs/Especialidades.svg"]],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["\n        "])),(l()(),y["ɵeld"](9,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["Streaming"])),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵted"](-1,null,["\n    "])),(l()(),y["ɵted"](-1,null,["\n\n    "])),(l()(),y["ɵand"](16777216,null,null,1,null,p)),y["ɵdid"](15,16384,null,0,Q.k,[y.ViewContainerRef,y.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),y["ɵted"](-1,null,["\n\n    "])),(l()(),y["ɵeld"](17,0,null,null,10,"div",[["class","home-tile"]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.goto("GaleriasPage")&&u}return u},null,null)),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵeld"](19,0,null,null,7,"ion-card",[["class","flex-col"]],null,null,null,null,null)),y["ɵdid"](20,16384,null,0,K.a,[q.a,y.ElementRef,y.Renderer],null,null),(l()(),y["ɵted"](-1,null,["\n        "])),(l()(),y["ɵeld"](22,0,null,null,0,"img",[["src","assets/imgs/Infografias.png"]],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["\n        "])),(l()(),y["ɵeld"](24,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["Mi colección de Infografías"])),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵted"](-1,null,["\n    "])),(l()(),y["ɵted"](-1,null,["\n\n    "])),(l()(),y["ɵeld"](29,0,null,null,10,"div",[["class","home-tile"]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.goto("MediaPage")&&u}return u},null,null)),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵeld"](31,0,null,null,7,"ion-card",[["class","flex-col"]],null,null,null,null,null)),y["ɵdid"](32,16384,null,0,K.a,[q.a,y.ElementRef,y.Renderer],null,null),(l()(),y["ɵted"](-1,null,["\n        "])),(l()(),y["ɵeld"](34,0,null,null,0,"img",[["src","assets/imgs/media.svg"]],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["\n        "])),(l()(),y["ɵeld"](36,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["Material Extra"])),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵted"](-1,null,["\n    "])),(l()(),y["ɵted"](-1,null,["\n\n    "])),(l()(),y["ɵeld"](41,0,null,null,10,"div",[["class","home-tile"]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.goto("AsesoriasPage")&&u}return u},null,null)),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵeld"](43,0,null,null,7,"ion-card",[["class","flex-col"]],null,null,null,null,null)),y["ɵdid"](44,16384,null,0,K.a,[q.a,y.ElementRef,y.Renderer],null,null),(l()(),y["ɵted"](-1,null,["\n        "])),(l()(),y["ɵeld"](46,0,null,null,0,"img",[["src","assets/imgs/ase.svg"]],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["\n        "])),(l()(),y["ɵeld"](48,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["Asesorías en vivo"])),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵted"](-1,null,["\n    "])),(l()(),y["ɵted"](-1,null,["\n\n    "])),(l()(),y["ɵeld"](53,0,null,null,10,"div",[["class","home-tile"]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.goto("ForosPage")&&u}return u},null,null)),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵeld"](55,0,null,null,7,"ion-card",[["class","flex-col"]],null,null,null,null,null)),y["ɵdid"](56,16384,null,0,K.a,[q.a,y.ElementRef,y.Renderer],null,null),(l()(),y["ɵted"](-1,null,["\n        "])),(l()(),y["ɵeld"](58,0,null,null,0,"img",[["src","assets/imgs/Foro.png"]],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["\n        "])),(l()(),y["ɵeld"](60,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["Mi asesor personal"])),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵted"](-1,null,["\n    "])),(l()(),y["ɵted"](-1,null,["\n\n    "])),(l()(),y["ɵeld"](65,0,null,null,11,"div",[["class","home-tile"]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.goto("SlidesPage")&&u}return u},null,null)),(l()(),y["ɵted"](-1,null,["\n    "])),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵeld"](68,0,null,null,7,"ion-card",[["class","flex-col"]],null,null,null,null,null)),y["ɵdid"](69,16384,null,0,K.a,[q.a,y.ElementRef,y.Renderer],null,null),(l()(),y["ɵted"](-1,null,["\n        "])),(l()(),y["ɵeld"](71,0,null,null,0,"img",[["src","assets/imgs/presentaciones.svg"]],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["\n        "])),(l()(),y["ɵeld"](73,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["Presentaciones"])),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵted"](-1,null,["\n    "])),(l()(),y["ɵted"](-1,null,["\n\n    "])),(l()(),y["ɵeld"](78,0,null,null,10,"div",[["class","home-tile"]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.goto("SimuladoresPage")&&u}return u},null,null)),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵeld"](80,0,null,null,7,"ion-card",[["class","flex-col"]],null,null,null,null,null)),y["ɵdid"](81,16384,null,0,K.a,[q.a,y.ElementRef,y.Renderer],null,null),(l()(),y["ɵted"](-1,null,["\n        "])),(l()(),y["ɵeld"](83,0,null,null,0,"img",[["src","assets/imgs/simulador.svg"]],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["\n        "])),(l()(),y["ɵeld"](85,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["Mi simulador diario ENARM"])),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵted"](-1,null,["\n    "])),(l()(),y["ɵted"](-1,null,["\n\n    "])),(l()(),y["ɵeld"](90,0,null,null,10,"div",[["class","home-tile"]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.goto("lock")&&u}return u},null,null)),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵeld"](92,0,null,null,7,"ion-card",[["class","flex-col"]],null,null,null,null,null)),y["ɵdid"](93,16384,null,0,K.a,[q.a,y.ElementRef,y.Renderer],null,null),(l()(),y["ɵted"](-1,null,["\n        "])),(l()(),y["ɵeld"](95,0,null,null,0,"img",[["src","assets/imgs/simulacro.png"]],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["\n        "])),(l()(),y["ɵeld"](97,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["Simulacro de examen real"])),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵted"](-1,null,["\n    "])),(l()(),y["ɵted"](-1,null,["\n    \n  "]))],function(l,n){l(n,15,0,n.component.auth.isAdmin)},null)}function g(l){return y["ɵvid"](0,[(l()(),y["ɵeld"](0,0,null,null,9,"button",[["ion-fab",""]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.openChecklist()&&u}return u},ol.b,ol.a)),y["ɵdid"](1,49152,[[4,4],[2,4]],0,al.a,[q.a,y.ElementRef,y.Renderer],null,null),(l()(),y["ɵted"](-1,0,["\n        "])),(l()(),y["ɵeld"](3,0,null,0,2,"ion-label",[],null,null,null,null,null)),y["ɵdid"](4,16384,null,0,rl.a,[q.a,y.ElementRef,y.Renderer,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),y["ɵted"](-1,null,["Checklist"])),(l()(),y["ɵted"](-1,0,["\n        "])),(l()(),y["ɵeld"](7,0,null,0,1,"ion-icon",[["name","checkbox"],["role","img"]],[[2,"hide",null]],null,null,null,null)),y["ɵdid"](8,147456,null,0,nl.a,[q.a,y.ElementRef,y.Renderer],{name:[0,"name"]},null),(l()(),y["ɵted"](-1,0,["\n      "]))],function(l,n){l(n,8,0,"checkbox")},function(l,n){l(n,7,0,y["ɵnov"](n,8)._hidden)})}function v(l){return y["ɵvid"](0,[(l()(),y["ɵeld"](0,0,null,null,9,"button",[["ion-fab",""]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.navCtrl.push("CalendarPage")&&u}return u},ol.b,ol.a)),y["ɵdid"](1,49152,[[4,4],[2,4]],0,al.a,[q.a,y.ElementRef,y.Renderer],null,null),(l()(),y["ɵted"](-1,0,["\n        "])),(l()(),y["ɵeld"](3,0,null,0,2,"ion-label",[],null,null,null,null,null)),y["ɵdid"](4,16384,null,0,rl.a,[q.a,y.ElementRef,y.Renderer,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),y["ɵted"](-1,null,["Programa paso a paso"])),(l()(),y["ɵted"](-1,0,["\n        "])),(l()(),y["ɵeld"](7,0,null,0,1,"ion-icon",[["name","calendar"],["role","img"]],[[2,"hide",null]],null,null,null,null)),y["ɵdid"](8,147456,null,0,nl.a,[q.a,y.ElementRef,y.Renderer],{name:[0,"name"]},null),(l()(),y["ɵted"](-1,0,["\n      "]))],function(l,n){l(n,8,0,"calendar")},function(l,n){l(n,7,0,y["ɵnov"](n,8)._hidden)})}function b(l){return y["ɵvid"](0,[(l()(),y["ɵeld"](0,0,null,null,9,"button",[["ion-fab",""]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.goto("NotasPage")&&u}return u},ol.b,ol.a)),y["ɵdid"](1,49152,[[4,4],[2,4]],0,al.a,[q.a,y.ElementRef,y.Renderer],null,null),(l()(),y["ɵted"](-1,0,["\n        "])),(l()(),y["ɵeld"](3,0,null,0,2,"ion-label",[],null,null,null,null,null)),y["ɵdid"](4,16384,null,0,rl.a,[q.a,y.ElementRef,y.Renderer,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),y["ɵted"](-1,null,["Notas"])),(l()(),y["ɵted"](-1,0,["\n        "])),(l()(),y["ɵeld"](7,0,null,0,1,"ion-icon",[["name","paper"],["role","img"]],[[2,"hide",null]],null,null,null,null)),y["ɵdid"](8,147456,null,0,nl.a,[q.a,y.ElementRef,y.Renderer],{name:[0,"name"]},null),(l()(),y["ɵted"](-1,0,["\n      "]))],function(l,n){l(n,8,0,"paper")},function(l,n){l(n,7,0,y["ɵnov"](n,8)._hidden)})}function R(l){return y["ɵvid"](0,[y["ɵpid"](0,Q.e,[y.LOCALE_ID]),(l()(),y["ɵand"](16777216,null,null,1,null,c)),y["ɵdid"](2,16384,null,0,Q.k,[y.ViewContainerRef,y.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),y["ɵted"](-1,null,["\n\n"])),(l()(),y["ɵeld"](4,0,null,null,25,"ion-header",[],null,null,null,null,null)),y["ɵdid"](5,16384,null,0,dl.a,[q.a,y.ElementRef,y.Renderer,[2,cl.a]],null,null),(l()(),y["ɵted"](-1,null,["\n\n  "])),(l()(),y["ɵeld"](7,0,null,null,21,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,sl.b,sl.a)),y["ɵdid"](8,49152,null,0,fl.a,[ml.a,[2,cl.a],[2,pl.a],q.a,y.ElementRef,y.Renderer],{color:[0,"color"]},null),(l()(),y["ɵted"](-1,3,["\n    "])),(l()(),y["ɵeld"](10,0,null,3,2,"ion-title",[],null,null,null,hl.b,hl.a)),y["ɵdid"](11,49152,null,0,gl.a,[q.a,y.ElementRef,y.Renderer,[2,vl.a],[2,fl.a]],null,null),(l()(),y["ɵted"](-1,0,["Zamnademy"])),(l()(),y["ɵted"](-1,3,["\n    "])),(l()(),y["ɵeld"](14,0,null,2,13,"ion-buttons",[["end",""],["hidden",""]],null,null,null,null,null)),y["ɵdid"](15,16384,null,1,bl.a,[q.a,y.ElementRef,y.Renderer,[2,vl.a],[2,fl.a]],null,null),y["ɵqud"](603979776,1,{_buttons:1}),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵeld"](18,0,null,null,8,"button",[["icon-only",""],["ion-button",""]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.openNotis()&&u}return u},X.b,X.a)),y["ɵdid"](19,1097728,[[1,4]],0,ll.a,[[8,""],q.a,y.ElementRef,y.Renderer],null,null),(l()(),y["ɵted"](-1,0,["\n        "])),(l()(),y["ɵeld"](21,0,null,0,1,"ion-icon",[["name","notifications"],["role","img"]],[[2,"hide",null]],null,null,null,null)),y["ɵdid"](22,147456,null,0,nl.a,[q.a,y.ElementRef,y.Renderer],{name:[0,"name"]},null),(l()(),y["ɵted"](-1,0,["\n        "])),(l()(),y["ɵand"](16777216,null,0,1,null,s)),y["ɵdid"](25,16384,null,0,Q.k,[y.ViewContainerRef,y.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),y["ɵted"](-1,0,["\n      "])),(l()(),y["ɵted"](-1,null,["\n    "])),(l()(),y["ɵted"](-1,3,["\n  "])),(l()(),y["ɵted"](-1,null,["\n\n"])),(l()(),y["ɵted"](-1,null,["\n\n\n"])),(l()(),y["ɵeld"](31,0,null,null,57,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,Rl.b,Rl.a)),y["ɵdid"](32,4374528,null,0,yl.a,[q.a,kl.a,wl.a,y.ElementRef,y.Renderer,ml.a,El.a,y.NgZone,[2,cl.a],[2,pl.a]],null,null),(l()(),y["ɵted"](-1,1,["\n\n  "])),(l()(),y["ɵted"](-1,1,["\n  \n  "])),(l()(),y["ɵted"](-1,1,["\n\n  "])),(l()(),y["ɵted"](-1,1,["\n\n  "])),(l()(),y["ɵand"](16777216,null,1,1,null,f)),y["ɵdid"](38,16384,null,0,Q.k,[y.ViewContainerRef,y.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),y["ɵted"](-1,1,["\n\n   "])),(l()(),y["ɵand"](16777216,null,1,1,null,m)),y["ɵdid"](41,16384,null,0,Q.k,[y.ViewContainerRef,y.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),y["ɵted"](-1,1,["\n\n  "])),(l()(),y["ɵand"](16777216,null,1,1,null,h)),y["ɵdid"](44,16384,null,0,Q.k,[y.ViewContainerRef,y.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),y["ɵted"](-1,1,["\n\n  "])),(l()(),y["ɵeld"](46,0,null,1,5,"div",[["class","flex-col"],["padding",""]],null,null,null,null,null)),(l()(),y["ɵted"](-1,null,["\n    "])),(l()(),y["ɵeld"](48,0,null,null,2,"button",[["ion-button",""]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.navCtrl.push("CalendarPage")&&u}return u},X.b,X.a)),y["ɵdid"](49,1097728,null,0,ll.a,[[8,""],q.a,y.ElementRef,y.Renderer],null,null),(l()(),y["ɵted"](-1,0,["¿Qué vamos a hacer hoy?"])),(l()(),y["ɵted"](-1,null,["\n  "])),(l()(),y["ɵted"](-1,1,["\n\n  "])),(l()(),y["ɵeld"](53,0,null,0,34,"ion-fab",[["bottom",""],["right",""]],null,null,null,xl.b,xl.a)),y["ɵdid"](54,1228800,null,2,Cl.a,[kl.a],null,null),y["ɵqud"](603979776,2,{_mainButton:0}),y["ɵqud"](603979776,3,{_fabLists:1}),(l()(),y["ɵted"](-1,0,["\n    "])),(l()(),y["ɵeld"](58,0,null,0,3,"button",[["color","rojito"],["ion-fab",""]],null,null,null,ol.b,ol.a)),y["ɵdid"](59,49152,[[2,4]],0,al.a,[q.a,y.ElementRef,y.Renderer],{color:[0,"color"]},null),(l()(),y["ɵeld"](60,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),y["ɵdid"](61,147456,null,0,nl.a,[q.a,y.ElementRef,y.Renderer],{name:[0,"name"]},null),(l()(),y["ɵted"](-1,0,["\n    "])),(l()(),y["ɵeld"](63,0,null,0,23,"ion-fab-list",[["side","top"]],null,null,null,null,null)),y["ɵdid"](64,16384,[[3,4]],1,Pl.a,[y.ElementRef,y.Renderer,q.a,kl.a],null,null),y["ɵqud"](603979776,4,{_setbuttons:1}),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵeld"](67,0,null,null,9,"button",[["ion-fab",""]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.logout()&&u}return u},ol.b,ol.a)),y["ɵdid"](68,49152,[[4,4],[2,4]],0,al.a,[q.a,y.ElementRef,y.Renderer],null,null),(l()(),y["ɵted"](-1,0,["\n        "])),(l()(),y["ɵeld"](70,0,null,0,2,"ion-label",[],null,null,null,null,null)),y["ɵdid"](71,16384,null,0,rl.a,[q.a,y.ElementRef,y.Renderer,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),y["ɵted"](-1,null,["Cerrar Sesión"])),(l()(),y["ɵted"](-1,0,["\n        "])),(l()(),y["ɵeld"](74,0,null,0,1,"ion-icon",[["name","log-out"],["role","img"]],[[2,"hide",null]],null,null,null,null)),y["ɵdid"](75,147456,null,0,nl.a,[q.a,y.ElementRef,y.Renderer],{name:[0,"name"]},null),(l()(),y["ɵted"](-1,0,["\n      "])),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵand"](16777216,null,null,1,null,g)),y["ɵdid"](79,16384,null,0,Q.k,[y.ViewContainerRef,y.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵand"](16777216,null,null,1,null,v)),y["ɵdid"](82,16384,null,0,Q.k,[y.ViewContainerRef,y.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),y["ɵted"](-1,null,["\n      "])),(l()(),y["ɵand"](16777216,null,null,1,null,b)),y["ɵdid"](85,16384,null,0,Q.k,[y.ViewContainerRef,y.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),y["ɵted"](-1,null,["\n    "])),(l()(),y["ɵted"](-1,0,["\n  "])),(l()(),y["ɵted"](-1,1,["\n\n"])),(l()(),y["ɵted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,2,0,!e.auth.loggedIn);l(n,8,0,"primary");l(n,22,0,"notifications");l(n,25,0,e.notRead>0);l(n,38,0,e.auth.isEsencial||e.auth.isPremium);l(n,41,0,!e.auth.isEsencial&&!e.auth.isPremium);l(n,44,0,e.auth.isEsencial||e.auth.isPremium);l(n,59,0,"rojito");l(n,61,0,"menu");l(n,75,0,"log-out");l(n,79,0,e.auth.isEsencial||e.auth.isPremium);l(n,82,0,e.auth.isEsencial||e.auth.isPremium);l(n,85,0,e.auth.isEsencial||e.auth.isPremium)},function(l,n){l(n,7,0,y["ɵnov"](n,8)._hidden,y["ɵnov"](n,8)._sbPadding);l(n,21,0,y["ɵnov"](n,22)._hidden);l(n,31,0,y["ɵnov"](n,32).statusbarPadding,y["ɵnov"](n,32)._hasRefresher);l(n,60,0,y["ɵnov"](n,61)._hidden);l(n,74,0,y["ɵnov"](n,75)._hidden)})}Object.defineProperty(n,"__esModule",{value:!0});var y=e(0),k=(e(1),e(28),e(202)),w=e(73),E=e(215),x=(e(462),e(198)),C=this&&this.__awaiter||function(l,n,e,u){return new(e||(e=Promise))(function(t,i){function o(l){try{r(u.next(l))}catch(l){i(l)}}function a(l){try{r(u.throw(l))}catch(l){i(l)}}function r(l){l.done?t(l.value):new e(function(n){n(l.value)}).then(o,a)}r((u=u.apply(l,n||[])).next())})},P=this&&this.__generator||function(l,n){function e(e){return function(o){return function(e){if(u)throw new TypeError("Generator is already executing.");for(;a;)try{if(u=1,t&&(i=t[2&e[0]?"return":e[0]?"throw":"next"])&&!(i=i.call(t,e[1])).done)return i;switch(t=0,i&&(e=[0,i.value]),e[0]){case 0:case 1:i=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,t=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!i||e[1]>i[0]&&e[1]<i[3])){a.label=e[1];break}if(6===e[0]&&a.label<i[1]){a.label=i[1],i=e;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(e);break}i[2]&&a.ops.pop(),a.trys.pop();continue}e=n.call(l,a)}catch(l){e=[6,l],t=0}finally{u=i=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,o])}}var u,t,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},I=function(){function l(l,n,e,u,t,i,o,a,r){this.navCtrl=l,this.navParams=n,this.back=e,this.toast=u,this.modal=t,this.iap=i,this.network=o,this.afAuth=a,this.auth=r,this.notRead=0,this.uid=localStorage.getItem("uid"),this.tempranoUnlock=["MediaPage","ForosPage","AsesoriasPage","SimuladoresPage"]}return l.prototype.ionViewDidLoad=function(){this.loadNotis(),this.checkForInternet()},l.prototype.openNotis=function(){var l=this,n=this.modal.create("NotificationsPage");n.present(),n.onDidDismiss(function(n){return l.loadNotis()})},l.prototype.loadNotis=function(){var l=this;this.back.getNotisUser(this.uid).subscribe(function(n){l.notRead=n.filter(function(l){return!l.read}).length},function(l){return null})},l.prototype.checkForInternet=function(){this.network.onDisconnect().subscribe(function(){console.log("no connection")})},l.prototype.reload=function(l){setTimeout(function(){return l.complete()},1e3)},l.prototype.openChecklist=function(){this.navCtrl.push("ChecklistPage")},l.prototype.goto=function(l){this.navCtrl.push(l)},l.prototype.openVideos=function(l){return void 0===l&&(l=!1),this.auth.isTemprano?this.navCtrl.push("EspecialidadesPage",{isPrograma:l}):this.toast.create({message:"Disponible en Abril",duration:2e3}).present()},l.prototype.logout=function(){return C(this,void 0,void 0,function(){return P(this,function(l){switch(l.label){case 0:return[4,this.afAuth.auth.signOut()];case 1:return l.sent(),this.navCtrl.setRoot("LoginPage"),[2]}})})},l.prototype.openZamna=function(l){this.iap.create("https://zamnademy.com").show()},l.prototype.purge=function(){this.back.purgeGoogle().subscribe(function(l){return console.log(l)},function(l){return console.log(l)})},l}(),_=e(584),T=function(){return function(){}}(),M=e(447),N=e(448),S=e(449),V=e(450),O=e(451),A=e(452),$=e(453),L=e(454),D=e(455),F=e(217),q=e(3),j=e(459),G=e(29),Z=e(23),z=e(74),U=e(131),B=e(205),H=e(214),J=e(209),K=e(203),Q=e(16),Y=e(211),W=e(210),X=e(64),ll=e(32),nl=e(63),el=e(588),ul=e(135),tl=e(132),il=y["ɵcrt"]({encapsulation:2,styles:[],data:{}}),ol=e(586),al=e(98),rl=e(75),dl=e(130),cl=e(7),sl=e(456),fl=e(53),ml=e(13),pl=e(31),hl=e(582),gl=e(196),vl=e(95),bl=e(201),Rl=e(581),yl=e(40),kl=e(6),wl=e(14),El=e(61),xl=e(585),Cl=e(200),Pl=e(137),Il=e(15),_l=e(97),Tl=e(139),Ml=y["ɵcrt"]({encapsulation:2,styles:[],data:{}}),Nl=y["ɵccf"]("page-home",I,function(l){return y["ɵvid"](0,[(l()(),y["ɵeld"](0,0,null,null,1,"page-home",[],null,null,null,R,Ml)),y["ɵdid"](1,49152,null,0,I,[pl.a,Il.a,w.a,_l.a,ul.a,k.a,E.a,Tl.AngularFireAuth,x.a],null,null)],null,null)},{},{},[]),Sl=e(22),Vl=e(197),Ol=e(204),Al=e(62);e.d(n,"HomePageModuleNgFactory",function(){return $l});var $l=y["ɵcmf"](T,[],function(l){return y["ɵmod"]([y["ɵmpd"](512,y.ComponentFactoryResolver,y["ɵCodegenComponentFactoryResolver"],[[8,[M.a,N.a,S.a,V.a,O.a,A.a,$.a,L.a,D.a,Nl]],[3,y.ComponentFactoryResolver],y.NgModuleRef]),y["ɵmpd"](4608,Q.m,Q.l,[y.LOCALE_ID,[2,Q.w]]),y["ɵmpd"](4608,Sl.k,Sl.k,[]),y["ɵmpd"](4608,Sl.c,Sl.c,[]),y["ɵmpd"](512,Q.c,Q.c,[]),y["ɵmpd"](512,Sl.j,Sl.j,[]),y["ɵmpd"](512,Sl.d,Sl.d,[]),y["ɵmpd"](512,Sl.i,Sl.i,[]),y["ɵmpd"](512,Vl.a,Vl.a,[]),y["ɵmpd"](512,Vl.b,Vl.b,[]),y["ɵmpd"](512,Ol.MomentModule,Ol.MomentModule,[]),y["ɵmpd"](512,_.a,_.a,[]),y["ɵmpd"](512,T,T,[]),y["ɵmpd"](256,Al.a,I,[])])})},581:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[t["ɵqud"](402653184,1,{_fixedContent:0}),t["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),t["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t["ɵncd"](null,1),t["ɵncd"](null,2)],null,null)}e.d(n,"a",function(){return i}),n.b=u;var t=e(0),i=(e(3),e(6),e(14),e(61),e(7),e(31),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,i.i,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}e.d(n,"a",function(){return o}),n.b=u;var t=e(0),i=e(16),o=(e(3),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},584:function(l,n,e){"use strict";e(1),e(0),e(587),e(16),e(28),e(588),e(460),e(589),e(590);e.d(n,"a",function(){return u});var u=function(){return function(){}}()},585:function(l,n,e){"use strict";function u(l){return t["ɵvid"](0,[t["ɵncd"](null,0)],null,null)}e.d(n,"a",function(){return i}),n.b=u;var t=e(0),i=(e(6),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},586:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,1,"ion-icon",[["class","fab-close-icon"],["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t["ɵdid"](1,147456,null,0,i.a,[o.a,t.ElementRef,t.Renderer],{name:[0,"name"]},null),(l()(),t["ɵeld"](2,0,null,null,1,"span",[["class","button-inner"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,null,null,0,"div",[["class","button-effect"]],null,null,null,null,null))],function(l,n){l(n,1,0,"close")},function(l,n){l(n,0,0,t["ɵnov"](n,1)._hidden)})}e.d(n,"a",function(){return a}),n.b=u;var t=e(0),i=e(63),o=e(3),a=t["ɵcrt"]({encapsulation:2,styles:[],data:{}})},587:function(l,n,e){"use strict";e.d(n,"a",function(){return u});e(1),e(28);var u=function(){function l(l){this.navCtrl=l}return l.prototype.toggleSection=function(l){this.information[l].open=!this.information[l].open},l.prototype.toggleItem=function(l,n){this.information[l].children[n].open=!this.information[l].children[n].open},l.prototype.openClase=function(l,n){l.video&&this.navCtrl.push("ClaseDetailPage",{id:l.id,type:n})},l}()},588:function(l,n,e){"use strict";e.d(n,"a",function(){return r});e(1),e(28);var u=e(458),t=(e.n(u),e(457)),i=(e(198),e(24)),o=this&&this.__awaiter||function(l,n,e,u){return new(e||(e=Promise))(function(t,i){function o(l){try{r(u.next(l))}catch(l){i(l)}}function a(l){try{r(u.throw(l))}catch(l){i(l)}}function r(l){l.done?t(l.value):new e(function(n){n(l.value)}).then(o,a)}r((u=u.apply(l,n||[])).next())})},a=this&&this.__generator||function(l,n){function e(e){return function(o){return function(e){if(u)throw new TypeError("Generator is already executing.");for(;a;)try{if(u=1,t&&(i=t[2&e[0]?"return":e[0]?"throw":"next"])&&!(i=i.call(t,e[1])).done)return i;switch(t=0,i&&(e=[0,i.value]),e[0]){case 0:case 1:i=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,t=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!i||e[1]>i[0]&&e[1]<i[3])){a.label=e[1];break}if(6===e[0]&&a.label<i[1]){a.label=i[1],i=e;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(e);break}i[2]&&a.ops.pop(),a.trys.pop();continue}e=n.call(l,a)}catch(l){e=[6,l],t=0}finally{u=i=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,o])}}var u,t,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},r=function(){function l(l,n,e){this.modal=l,this.afs=n,this.auth=e,this.feed$=this.afs.collection(t.a.POST).valueChanges(),this.loader=!1}return l.prototype.openComments=function(l){return o(this,void 0,void 0,function(){var n;return a(this,function(e){switch(e.label){case 0:return this.loader=!0,[4,this.afs.collection(t.a.POST_COMMENT,function(n){return n.where("post","==",l.id)}).valueChanges().pipe(Object(i.take)(1)).toPromise()];case 1:return n=e.sent(),this.modal.create("PostCommentsPage",{comments:n}).present(),this.loader=!1,[2]}})})},l.prototype.isLiked=function(l){return!!this.auth.user&&(!!l&&(!!l.likes&&l.likes.indexOf(this.auth.user.uid)>=0))},l.prototype.toggleLike=function(l,n,e){void 0===e&&(e=[]),this.isLiked(l)?e.splice(e.indexOf(this.auth.user.uid),1):e.push(this.auth.user.uid),this.afs.doc(t.a.POST+"/"+n).update({likes:e})},l.prototype.removePost=function(l){this.afs.doc(t.a.POST+"/"+l).delete()},l}()},589:function(l,n,e){"use strict";e.d(n,"a",function(){return r});e(1);var u=e(457),t=e(458),i=(e.n(t),e(24)),o=this&&this.__awaiter||function(l,n,e,u){return new(e||(e=Promise))(function(t,i){function o(l){try{r(u.next(l))}catch(l){i(l)}}function a(l){try{r(u.throw(l))}catch(l){i(l)}}function r(l){l.done?t(l.value):new e(function(n){n(l.value)}).then(o,a)}r((u=u.apply(l,n||[])).next())})},a=this&&this.__generator||function(l,n){function e(e){return function(o){return function(e){if(u)throw new TypeError("Generator is already executing.");for(;a;)try{if(u=1,t&&(i=t[2&e[0]?"return":e[0]?"throw":"next"])&&!(i=i.call(t,e[1])).done)return i;switch(t=0,i&&(e=[0,i.value]),e[0]){case 0:case 1:i=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,t=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!i||e[1]>i[0]&&e[1]<i[3])){a.label=e[1];break}if(6===e[0]&&a.label<i[1]){a.label=i[1],i=e;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(e);break}i[2]&&a.ops.pop(),a.trys.pop();continue}e=n.call(l,a)}catch(l){e=[6,l],t=0}finally{u=i=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,o])}}var u,t,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},r=function(){function l(l,n){this.afs=l,this.navCtrl=n,this.galleries=[]}return l.prototype.ngOnInit=function(){this.gallery&&this.loadGalleries(this.gallery.id)},l.prototype.loadGalleries=function(l){return o(this,void 0,void 0,function(){var n;return a(this,function(e){switch(e.label){case 0:return[4,this.afs.collection(u.a.GALLERY,function(n){return n.where("cat_id","==",l)}).valueChanges().pipe(Object(i.take)(1)).toPromise()];case 1:return n=e.sent(),this.galleries=n,[2]}})})},l}()},590:function(l,n,e){"use strict";e.d(n,"a",function(){return r});e(1);var u=e(457),t=(e(202),e(458)),i=(e.n(t),e(24)),o=this&&this.__awaiter||function(l,n,e,u){return new(e||(e=Promise))(function(t,i){function o(l){try{r(u.next(l))}catch(l){i(l)}}function a(l){try{r(u.throw(l))}catch(l){i(l)}}function r(l){l.done?t(l.value):new e(function(n){n(l.value)}).then(o,a)}r((u=u.apply(l,n||[])).next())})},a=this&&this.__generator||function(l,n){function e(e){return function(o){return function(e){if(u)throw new TypeError("Generator is already executing.");for(;a;)try{if(u=1,t&&(i=t[2&e[0]?"return":e[0]?"throw":"next"])&&!(i=i.call(t,e[1])).done)return i;switch(t=0,i&&(e=[0,i.value]),e[0]){case 0:case 1:i=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,t=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!i||e[1]>i[0]&&e[1]<i[3])){a.label=e[1];break}if(6===e[0]&&a.label<i[1]){a.label=i[1],i=e;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(e);break}i[2]&&a.ops.pop(),a.trys.pop();continue}e=n.call(l,a)}catch(l){e=[6,l],t=0}finally{u=i=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,o])}}var u,t,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},r=function(){function l(l,n){this.iab=l,this.afs=n,this.medias=[]}return l.prototype.ngOnInit=function(){this.loadMedias(this.media.id)},l.prototype.openMedia=function(l){this.iab.create(l,"_system")},l.prototype.loadMedias=function(l){return o(this,void 0,void 0,function(){var n;return a(this,function(e){switch(e.label){case 0:return[4,this.afs.collection(u.a.MEDIA,function(n){return n.where("categoria.id","==",l)}).valueChanges().pipe(Object(i.take)(1)).toPromise()];case 1:return n=e.sent(),this.medias=n,[2]}})})},l}()}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
