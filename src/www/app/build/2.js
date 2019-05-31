<<<<<<< HEAD
webpackJsonp([2],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(781);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

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

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_in_app_browser__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_back_back__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(465);
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







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, back, toast, modal, iap, network, afAuth, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = back;
        this.toast = toast;
        this.modal = modal;
        this.iap = iap;
        this.network = network;
        this.afAuth = afAuth;
        this.auth = auth;
        this.notRead = 0;
        this.uid = localStorage.getItem('uid');
        this.tempranoUnlock = [
            'MediaPage',
            'ForosPage',
            'AsesoriasPage',
            'SimuladoresPage'
        ];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadNotis();
        this.checkForInternet();
    };
    HomePage.prototype.openNotis = function () {
        var _this = this;
        var m = this.modal.create('NotificationsPage');
        m.present();
        m.onDidDismiss(function (data) { return _this.loadNotis(); });
    };
    HomePage.prototype.loadNotis = function () {
        var _this = this;
        this.back.getNotisUser(this.uid).subscribe(function (data) {
            _this.notRead = data.filter(function (n) { return !n.read; }).length;
        }, function (err) { /* this.toast.create({message: 'No se pudo cargar la cantidad de notificaciones no leídas...', duration: 2000}).present() */ return null; });
    };
    HomePage.prototype.checkForInternet = function () {
        this.network.onDisconnect().subscribe(function () {
            console.log('no connection');
        });
    };
    HomePage.prototype.reload = function (r) {
        setTimeout(function () { return r.complete(); }, 1000);
    };
    HomePage.prototype.openChecklist = function () {
        this.navCtrl.push('ChecklistPage');
    };
    HomePage.prototype.goto = function (page) {
        this.navCtrl.push(page);
        /* if (this.back.isTemprano && this.tempranoUnlock.indexOf(page) >= 0) {
          this.navCtrl.push(page)
        } else if (page == 'lock') {
          this.toast.create({message: 'Disponible en Abril', duration: 2000}).present()
        } else if (!this.back.isTemprano && this.tempranoUnlock.indexOf(page) >= 0) {
          this.toast.create({message: 'Disponible en Abril', duration: 2000}).present()
        } else {
          this.navCtrl.push(page)
        } */
    };
    HomePage.prototype.openVideos = function (isPrograma) {
        if (isPrograma === void 0) { isPrograma = false; }
        // EspecialidadesPage
        if (this.auth.isTemprano)
            return this.navCtrl.push('EspecialidadesPage', { isPrograma: isPrograma });
        return this.toast.create({ message: 'Disponible en Abril', duration: 2000 }).present();
        //this.toast.create({message: 'Debes adquirir el curso premium.', duration: 2000}).present()
    };
    HomePage.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    /* localStorage.removeItem('user')
                    localStorage.removeItem('token')
                    localStorage.removeItem('uid')
                    this.navCtrl.setRoot('LoginPage') */
                    return [4 /*yield*/, this.afAuth.auth.signOut()];
                    case 1:
                        /* localStorage.removeItem('user')
                        localStorage.removeItem('token')
                        localStorage.removeItem('uid')
                        this.navCtrl.setRoot('LoginPage') */
                        _a.sent();
                        this.navCtrl.setRoot('LoginPage');
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.openZamna = function (link) {
        this.iap.create('https://zamnademy.com').show();
    };
    HomePage.prototype.purge = function () {
        this.back.purgeGoogle().subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); });
    };
    HomePage.prototype.openCalendar = function () {
        if (this.auth.isSmartCalendar && !this.auth.user.noCalendar)
            return this.navCtrl.push('SmartCalendarPage');
        this.navCtrl.push('CalendarPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\home\home.html"*/'<div class="home-loader" *ngIf="!auth.loggedIn">\n  <img src="assets/imgs/weon.png">\n</div>\n\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Zamnademy</ion-title>\n    <ion-buttons end hidden>\n      <button ion-button icon-only (click)="openNotis()">\n        <ion-icon name="notifications"></ion-icon>\n        <ion-badge color="danger" class="noti-badge" *ngIf="notRead > 0" >{{notRead | number}}</ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!--<ion-refresher (ionRefresh)="reload($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>-->\n\n  <!--\n    6.-All Your Recorded Songs Are Stuffed Animals - The Yu-Yi Band\n    9.-Phanerozoic I: Paleozoic - The Ocean\n    2-.Postcards from St. Evenage - The Yu-Yi Band\n    1.- Alba, les ombres errantes - A Backward Glance on a Travel Road\n    3.-From the gallery of Sleep - Night Verses\n    7.-Vector - Haken\n    4.-Sonder - TesseracT\n    5.-Hago - Hago\n    8.-Applause Of A Distant Crowd - VOLA\n    10.-Time Will Die and Love Will Bury It - Rolo Tomassi\n  -->\n\n  <!-- <pre class="w100" *ngIf="auth.loggedIn">\n    <pre>{{ auth.user$ | async | json }}</pre>\n  </pre> -->\n\n  <zamna-feed *ngIf="auth.isComprado" class="w100"></zamna-feed>\n\n   <div class="flex flex-col text-center" padding (click)="openZamna()" *ngIf="!auth.isComprado">\n    <h2>No tienes ningún curso comprado, puedes adquirir el <strong>Curso ENARM Esencial</strong> o <strong>Curso ENARM Premium</strong> en:</h2>\n    <h3 class="c54">zamnademy.com</h3>\n  </div>\n\n  <div class="home-grid" *ngIf="auth.isComprado">\n\n    <!-- <div class="home-tile" (click)="openVideos()">\n      <ion-card class="flex-col">\n        <img src="assets/imgs/Especialidades.svg">\n        <span>Streaming</span>\n      </ion-card>\n    </div>\n\n    <div class="home-tile" (click)="openVideos(true)" *ngIf="auth.isAdmin">\n      <ion-card class="flex-col">\n        <img src="assets/imgs/Especialidades.svg">\n        <span>Programa</span>\n      </ion-card>\n    </div> -->\n\n    <div class="home-tile" (click)="goto(\'MiCursoPage\')">\n      <ion-card class="flex-col">\n        <img src="assets/imgs/youtube.png">\n        <span>Mi Curso</span>\n      </ion-card>\n    </div>\n\n    <div class="home-tile" (click)="goto(\'GaleriasPage\')">\n      <ion-card class="flex-col">\n        <img src="assets/imgs/Infografias.png">\n        <span>Mi colección de Infografías</span>\n      </ion-card>\n    </div>\n\n    <div class="home-tile" (click)="goto(\'MediaPage\')">\n      <ion-card class="flex-col">\n        <img src="assets/imgs/media.svg">\n        <span>Material Extra</span>\n      </ion-card>\n    </div>\n\n    <div class="home-tile" (click)="goto(\'AsesoriasPage\')">\n      <ion-card class="flex-col">\n        <img src="assets/imgs/ase.svg">\n        <span>Asesorías en vivo</span>\n      </ion-card>\n    </div>\n\n    <div class="home-tile" (click)="goto(\'ForosPage\')">\n      <ion-card class="flex-col">\n        <img src="assets/imgs/Foro.png">\n        <span>Mi asesor personal</span>\n      </ion-card>\n    </div>\n\n    <div class="home-tile" (click)="goto(\'SlidesPage\')">\n    <!-- <div class="home-tile" (click)="goto(\'lock\')"> -->\n      <ion-card class="flex-col">\n        <img src="assets/imgs/presentaciones.svg">\n        <span>Presentaciones</span>\n      </ion-card>\n    </div>\n\n    <!-- <div class="home-tile" (click)="goto(\'SimuladoresPage\')">\n      <ion-card class="flex-col">\n        <img src="assets/imgs/simulador.svg">\n        <span>Mi simulador diario ENARM</span>\n      </ion-card>\n    </div>\n\n    <div class="home-tile" (click)="goto(\'lock\')">\n      <ion-card class="flex-col">\n        <img src="assets/imgs/simulacro.png">\n        <span>Simulacro de examen real</span>\n      </ion-card>\n    </div> -->\n\n    <div class="home-tile" (click)="goto(\'ZonaEnarmPage\')">\n      <ion-card class="flex-col">\n        <img src="assets/imgs/simulacro.png">\n        <span>Zona Enarm</span>\n      </ion-card>\n    </div>\n\n  </div>\n\n  <div class="flex-col" padding>\n    <button ion-button (click)="navCtrl.push(\'CalendarPage\')">¿Qué vamos a hacer hoy?</button>\n  </div>\n\n  <ion-fab right bottom>\n    <button ion-fab color="rojito"><ion-icon name="menu"></ion-icon></button>\n    <ion-fab-list side="top">\n\n      <button ion-fab (click)="logout()">\n        <ion-label>Cerrar Sesión</ion-label>\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n\n      <button ion-fab (click)="openChecklist()" *ngIf="auth.isComprado">\n        <ion-label>Checklist</ion-label>\n        <ion-icon name="checkbox"></ion-icon>\n      </button>\n\n      <button ion-fab (click)="openCalendar()" *ngIf="auth.isComprado">\n        <ion-label>Programa paso a paso</ion-label>\n        <ion-icon name="calendar"></ion-icon>\n      </button>\n\n      <button ion-fab (click)="goto(\'NotasPage\')" *ngIf="auth.isComprado">\n        <ion-label>Notas</ion-label>\n        <ion-icon name="paper"></ion-icon>\n      </button>\n\n      <button ion-fab (click)="goto(\'TopUsersPage\')" *ngIf="auth.isComprado">\n        <ion-label>Cuadro de Honor</ion-label>\n        <ion-icon name="star"></ion-icon>\n      </button>\n\n      <button ion-fab (click)="goto(\'MisResultadosPage\')" *ngIf="auth.isComprado">\n        <ion-label>Mis Resultados</ion-label>\n        <ion-icon name="copy"></ion-icon>\n      </button>\n\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_back_back__["a" /* BackProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=2.js.map
=======
webpackJsonp([2],{561:function(n,e,l){"use strict";function t(n){return v["ɵvid"](0,[(n()(),v["ɵeld"](0,0,null,null,1,"ion-icon",[["item-left",""],["name","arrow-forward"],["role","img"]],[[2,"hide",null]],null,null,null,null)),v["ɵdid"](1,147456,[[6,4]],0,W.a,[D.a,v.ElementRef,v.Renderer],{name:[0,"name"]},null)],function(n,e){n(e,1,0,"arrow-forward")},function(n,e){n(e,0,0,v["ɵnov"](e,1)._hidden)})}function i(n){return v["ɵvid"](0,[(n()(),v["ɵeld"](0,0,null,null,1,"ion-icon",[["item-left",""],["name","arrow-down"],["role","img"]],[[2,"hide",null]],null,null,null,null)),v["ɵdid"](1,147456,[[6,4]],0,W.a,[D.a,v.ElementRef,v.Renderer],{name:[0,"name"]},null)],function(n,e){n(e,1,0,"arrow-down")},function(n,e){n(e,0,0,v["ɵnov"](e,1)._hidden)})}function u(n){return v["ɵvid"](0,[(n()(),v["ɵeld"](0,0,null,null,1,"ion-icon",[["item-left",""],["name","add"],["role","img"]],[[2,"hide",null]],null,null,null,null)),v["ɵdid"](1,147456,[[12,4]],0,W.a,[D.a,v.ElementRef,v.Renderer],{name:[0,"name"]},null)],function(n,e){n(e,1,0,"add")},function(n,e){n(e,0,0,v["ɵnov"](e,1)._hidden)})}function r(n){return v["ɵvid"](0,[(n()(),v["ɵeld"](0,0,null,null,1,"ion-icon",[["item-left",""],["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),v["ɵdid"](1,147456,[[12,4]],0,W.a,[D.a,v.ElementRef,v.Renderer],{name:[0,"name"]},null)],function(n,e){n(e,1,0,"close")},function(n,e){n(e,0,0,v["ɵnov"](e,1)._hidden)})}function o(n){return v["ɵvid"](0,[(n()(),v["ɵeld"](0,0,null,null,12,"button",[["class","child item item-block"],["detail-none",""],["ion-item",""]],null,[[null,"click"]],function(n,e,l){var t=!0;if("click"===e){t=!1!==n.component.toggleItem(n.parent.parent.parent.context.index,n.parent.context.index)&&t}return t},X.b,X.a)),v["ɵdid"](1,1097728,null,3,nn.a,[en.a,D.a,v.ElementRef,v.Renderer,[2,ln.a]],null,null),v["ɵqud"](335544320,10,{contentLabel:0}),v["ɵqud"](603979776,11,{_buttons:1}),v["ɵqud"](603979776,12,{_icons:1}),v["ɵdid"](5,16384,null,0,tn.a,[],null,null),(n()(),v["ɵted"](-1,2,["\n          "])),(n()(),v["ɵand"](16777216,null,0,1,null,u)),v["ɵdid"](8,16384,null,0,U.k,[v.ViewContainerRef,v.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),v["ɵted"](-1,2,["\n          "])),(n()(),v["ɵand"](16777216,null,0,1,null,r)),v["ɵdid"](11,16384,null,0,U.k,[v.ViewContainerRef,v.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),v["ɵted"](12,2,["\n          ","\n        "]))],function(n,e){n(e,8,0,!e.parent.context.$implicit.open);n(e,11,0,e.parent.context.$implicit.open)},function(n,e){n(e,12,0,e.parent.context.$implicit.name)})}function a(n){return v["ɵvid"](0,[(n()(),v["ɵeld"](0,0,null,null,11,"ion-item",[["class","child-item item item-block"],["detail-none",""],["ion-item",""],["text-wrap",""]],null,[[null,"click"]],function(n,e,l){var t=!0;if("click"===e){t=!1!==n.component.openClase(n.parent.context.$implicit,"tema")&&t}return t},X.b,X.a)),v["ɵdid"](1,1097728,null,3,nn.a,[en.a,D.a,v.ElementRef,v.Renderer,[2,ln.a]],null,null),v["ɵqud"](335544320,13,{contentLabel:0}),v["ɵqud"](603979776,14,{_buttons:1}),v["ɵqud"](603979776,15,{_icons:1}),v["ɵdid"](5,16384,null,0,tn.a,[],null,null),(n()(),v["ɵted"](-1,2,["\n          "])),(n()(),v["ɵeld"](7,0,null,2,1,"h2",[],null,null,null,null,null)),(n()(),v["ɵted"](8,null,["",""])),(n()(),v["ɵted"](-1,2,["\n          "])),(n()(),v["ɵted"](-1,2,["\n          "])),(n()(),v["ɵted"](-1,2,["\n        "]))],null,function(n,e){n(e,8,0,e.parent.context.$implicit.name)})}function c(n){return v["ɵvid"](0,[(n()(),v["ɵeld"](0,0,null,null,12,"ion-item",[["class","child-item item item-block"],["detail-none",""],["text-wrap",""]],null,[[null,"click"]],function(n,e,l){var t=!0;if("click"===e){t=!1!==n.component.openClase(n.context.$implicit,"subtema")&&t}return t},X.b,X.a)),v["ɵdid"](1,1097728,null,3,nn.a,[en.a,D.a,v.ElementRef,v.Renderer,[2,ln.a]],null,null),v["ɵqud"](335544320,16,{contentLabel:0}),v["ɵqud"](603979776,17,{_buttons:1}),v["ɵqud"](603979776,18,{_icons:1}),v["ɵdid"](5,16384,null,0,tn.a,[],null,null),(n()(),v["ɵted"](-1,2,["\n            "])),(n()(),v["ɵeld"](7,0,null,2,1,"h2",[],null,null,null,null,null)),(n()(),v["ɵted"](8,null,["",""])),(n()(),v["ɵted"](-1,2,["\n            "])),(n()(),v["ɵted"](-1,2,["\n            "])),(n()(),v["ɵted"](-1,2,["\n            "])),(n()(),v["ɵted"](-1,2,["\n          "]))],null,function(n,e){n(e,8,0,e.context.$implicit.name)})}function d(n){return v["ɵvid"](0,[(n()(),v["ɵeld"](0,0,null,null,6,"ion-list",[],null,null,null,null,null)),v["ɵdid"](1,16384,null,0,un.a,[D.a,v.ElementRef,v.Renderer,z.a,rn.l,B.a],null,null),(n()(),v["ɵted"](-1,null,["\n          "])),(n()(),v["ɵted"](-1,null,["\n          "])),(n()(),v["ɵand"](16777216,null,null,1,null,c)),v["ɵdid"](5,802816,null,0,U.j,[v.ViewContainerRef,v.TemplateRef,v.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),v["ɵted"](-1,null,["\n        "]))],function(n,e){n(e,5,0,e.parent.context.$implicit.children)},null)}function s(n){return v["ɵvid"](0,[(n()(),v["ɵeld"](0,0,null,null,17,"ion-list-header",[["class","item"],["no-padding",""]],null,null,null,X.b,X.a)),v["ɵdid"](1,1097728,null,3,nn.a,[en.a,D.a,v.ElementRef,v.Renderer,[2,ln.a]],null,null),v["ɵqud"](335544320,7,{contentLabel:0}),v["ɵqud"](603979776,8,{_buttons:1}),v["ɵqud"](603979776,9,{_icons:1}),v["ɵdid"](5,16384,null,0,on.a,[D.a,v.Renderer,v.ElementRef,[8,null]],null,null),(n()(),v["ɵted"](-1,2,["\n        "])),(n()(),v["ɵted"](-1,2,["\n        "])),(n()(),v["ɵand"](16777216,null,2,1,null,o)),v["ɵdid"](9,16384,null,0,U.k,[v.ViewContainerRef,v.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),v["ɵted"](-1,2,["\n\n        "])),(n()(),v["ɵted"](-1,2,["\n        "])),(n()(),v["ɵand"](16777216,null,2,1,null,a)),v["ɵdid"](13,16384,null,0,U.k,[v.ViewContainerRef,v.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),v["ɵted"](-1,2,["\n\n        "])),(n()(),v["ɵand"](16777216,null,2,1,null,d)),v["ɵdid"](16,16384,null,0,U.k,[v.ViewContainerRef,v.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),v["ɵted"](-1,2,["\n\n      "]))],function(n,e){n(e,9,0,e.context.$implicit.children);n(e,13,0,!e.context.$implicit.children);n(e,16,0,e.context.$implicit.children&&e.context.$implicit.open)},null)}function f(n){return v["ɵvid"](0,[(n()(),v["ɵeld"](0,0,null,null,6,"ion-list",[["no-lines",""]],null,null,null,null,null)),v["ɵdid"](1,16384,null,0,un.a,[D.a,v.ElementRef,v.Renderer,z.a,rn.l,B.a],null,null),(n()(),v["ɵted"](-1,null,["\n      "])),(n()(),v["ɵted"](-1,null,["\n      "])),(n()(),v["ɵand"](16777216,null,null,1,null,s)),v["ɵdid"](5,802816,null,0,U.j,[v.ViewContainerRef,v.TemplateRef,v.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),v["ɵted"](-1,null,["\n    "]))],function(n,e){n(e,5,0,e.parent.context.$implicit.children)},null)}function p(n){return v["ɵvid"](0,[(n()(),v["ɵeld"](0,0,null,null,26,"ion-list-header",[["class","item"],["no-lines",""],["no-padding",""]],null,null,null,X.b,X.a)),v["ɵdid"](1,1097728,null,3,nn.a,[en.a,D.a,v.ElementRef,v.Renderer,[2,ln.a]],null,null),v["ɵqud"](335544320,1,{contentLabel:0}),v["ɵqud"](603979776,2,{_buttons:1}),v["ɵqud"](603979776,3,{_icons:1}),v["ɵdid"](5,16384,null,0,on.a,[D.a,v.Renderer,v.ElementRef,[8,null]],null,null),(n()(),v["ɵted"](-1,2,["\n    "])),(n()(),v["ɵted"](-1,2,["\n    "])),(n()(),v["ɵeld"](8,0,null,2,14,"button",[["class","item item-block"],["detail-none",""],["ion-item",""]],null,[[null,"click"]],function(n,e,l){var t=!0;if("click"===e){t=!1!==n.component.toggleSection(n.context.index)&&t}return t},X.b,X.a)),v["ɵdid"](9,278528,null,0,U.i,[v.IterableDiffers,v.KeyValueDiffers,v.ElementRef,v.Renderer2],{ngClass:[0,"ngClass"]},null),v["ɵpod"](10,{"section-active":0,section:1}),v["ɵdid"](11,1097728,null,3,nn.a,[en.a,D.a,v.ElementRef,v.Renderer,[2,ln.a]],null,null),v["ɵqud"](335544320,4,{contentLabel:0}),v["ɵqud"](603979776,5,{_buttons:1}),v["ɵqud"](603979776,6,{_icons:1}),v["ɵdid"](15,16384,null,0,tn.a,[],null,null),(n()(),v["ɵted"](-1,2,["\n      "])),(n()(),v["ɵand"](16777216,null,0,1,null,t)),v["ɵdid"](18,16384,null,0,U.k,[v.ViewContainerRef,v.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),v["ɵted"](-1,2,["\n      "])),(n()(),v["ɵand"](16777216,null,0,1,null,i)),v["ɵdid"](21,16384,null,0,U.k,[v.ViewContainerRef,v.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),v["ɵted"](22,2,["\n        ","\n    "])),(n()(),v["ɵted"](-1,2,["\n\n    "])),(n()(),v["ɵand"](16777216,null,2,1,null,f)),v["ɵdid"](25,16384,null,0,U.k,[v.ViewContainerRef,v.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),v["ɵted"](-1,2,["\n    \n  "]))],function(n,e){n(e,9,0,n(e,10,0,e.context.$implicit.open,!e.context.$implicit.open));n(e,18,0,!e.context.$implicit.open);n(e,21,0,e.context.$implicit.open);n(e,25,0,e.context.$implicit.children&&e.context.$implicit.open)},function(n,e){n(e,22,0,e.context.$implicit.name)})}function h(n){return v["ɵvid"](0,[(n()(),v["ɵeld"](0,0,null,null,6,"ion-list",[["class","accordion-list"]],null,null,null,null,null)),v["ɵdid"](1,16384,null,0,un.a,[D.a,v.ElementRef,v.Renderer,z.a,rn.l,B.a],null,null),(n()(),v["ɵted"](-1,null,["\n  "])),(n()(),v["ɵted"](-1,null,["\n  "])),(n()(),v["ɵand"](16777216,null,null,1,null,p)),v["ɵdid"](5,802816,null,0,U.j,[v.ViewContainerRef,v.TemplateRef,v.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),v["ɵted"](-1,null,["\n"]))],function(n,e){n(e,5,0,e.component.information)},null)}function m(n){return v["ɵvid"](0,[(n()(),v["ɵeld"](0,0,null,null,3,"div",[["class","flex-col"]],null,null,null,null,null)),(n()(),v["ɵted"](-1,null,["\n    "])),(n()(),v["ɵeld"](2,0,null,null,0,"img",[["src","assets/imgs/rings.svg"]],null,null,null,null,null)),(n()(),v["ɵted"](-1,null,["\n  "]))],null,null)}function b(n){return v["ɵvid"](0,[(n()(),v["ɵeld"](0,0,null,null,10,"ion-header",[],null,null,null,null,null)),v["ɵdid"](1,16384,null,0,S.a,[D.a,v.ElementRef,v.Renderer,[2,N.a]],null,null),(n()(),v["ɵted"](-1,null,["\n\n  "])),(n()(),v["ɵeld"](3,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,j.b,j.a)),v["ɵdid"](4,49152,null,0,F.a,[G.a,[2,N.a],[2,A.a],D.a,v.ElementRef,v.Renderer],{color:[0,"color"]},null),(n()(),v["ɵted"](-1,3,["\n    "])),(n()(),v["ɵeld"](6,0,null,3,2,"ion-title",[],null,null,null,Q.b,Q.a)),v["ɵdid"](7,49152,null,0,K.a,[D.a,v.ElementRef,v.Renderer,[2,J.a],[2,F.a]],null,null),(n()(),v["ɵted"](-1,0,["Materia"])),(n()(),v["ɵted"](-1,3,["\n  "])),(n()(),v["ɵted"](-1,null,["\n\n"])),(n()(),v["ɵted"](-1,null,["\n\n\n"])),(n()(),v["ɵeld"](12,0,null,null,8,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,Y.b,Y.a)),v["ɵdid"](13,4374528,null,0,Z.a,[D.a,z.a,B.a,v.ElementRef,v.Renderer,G.a,H.a,v.NgZone,[2,N.a],[2,A.a]],null,null),(n()(),v["ɵted"](-1,1,["\n  "])),(n()(),v["ɵand"](16777216,null,1,1,null,m)),v["ɵdid"](16,16384,null,0,U.k,[v.ViewContainerRef,v.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),v["ɵted"](-1,1,["\n  "])),(n()(),v["ɵeld"](18,0,null,1,1,"accordion-list",[],null,null,null,h,cn)),v["ɵdid"](19,49152,null,0,an.a,[A.a],{information:[0,"information"]},null),(n()(),v["ɵted"](-1,1,["\n"])),(n()(),v["ɵted"](-1,null,["\n"]))],function(n,e){var l=e.component;n(e,4,0,"primary");n(e,16,0,l.loader);n(e,19,0,l.information)},function(n,e){n(e,3,0,v["ɵnov"](e,4)._hidden,v["ɵnov"](e,4)._sbPadding);n(e,12,0,v["ɵnov"](e,13).statusbarPadding,v["ɵnov"](e,13)._hasRefresher)})}Object.defineProperty(e,"__esModule",{value:!0});var v=l(0),g=(l(1),l(28),l(73)),y=(l(458),l(457)),w=l(198),R=this&&this.__assign||Object.assign||function(n){for(var e,l=1,t=arguments.length;l<t;l++){e=arguments[l];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},x=this&&this.__awaiter||function(n,e,l,t){return new(l||(l=Promise))(function(i,u){function r(n){try{a(t.next(n))}catch(n){u(n)}}function o(n){try{a(t.throw(n))}catch(n){u(n)}}function a(n){n.done?i(n.value):new l(function(e){e(n.value)}).then(r,o)}a((t=t.apply(n,e||[])).next())})},k=this&&this.__generator||function(n,e){function l(l){return function(r){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,i&&(u=i[2&l[0]?"return":l[0]?"throw":"next"])&&!(u=u.call(i,l[1])).done)return u;switch(i=0,u&&(l=[0,u.value]),l[0]){case 0:case 1:u=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,i=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(u=o.trys,!(u=u.length>0&&u[u.length-1])&&(6===l[0]||2===l[0])){o=0;continue}if(3===l[0]&&(!u||l[1]>u[0]&&l[1]<u[3])){o.label=l[1];break}if(6===l[0]&&o.label<u[1]){o.label=u[1],u=l;break}if(u&&o.label<u[2]){o.label=u[2],o.ops.push(l);break}u[2]&&o.ops.pop(),o.trys.pop();continue}l=e.call(n,o)}catch(n){l=[6,n],i=0}finally{t=u=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,r])}}var t,i,u,r,o={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r},C=function(){function n(n,e,l,t,i,u){this.navCtrl=n,this.navParams=e,this.back=l,this.toast=t,this.afs=i,this.data=u,this.information=[],this.loader=!1}return n.prototype.ionViewDidLoad=function(){this.loader=!0;var n=this.navParams.get("id");this.loadContent(n)},n.prototype.loadContent=function(n){return x(this,void 0,void 0,function(){var e,l,t,i,u,r,o;return k(this,function(a){switch(a.label){case 0:return[4,this.data.getDoc(y.a.CONTENT,n)];case 1:return e=a.sent(),l=e,[4,this.data.getCollectionQuery(y.a.CONTENT,function(n){return n.where("parent_id","==",e.id)})];case 2:l.children=a.sent(),e.children=e.children.map(function(n){return R({},n,{children:[]})}),t=function(n){var e,l,t,u,r;return k(this,function(o){switch(o.label){case 0:return e=n,[4,i.data.getCollectionQuery(y.a.CONTENT,function(e){return e.where("parent_id","==",n.id)})];case 1:e.children=o.sent(),l=function(n){var e;return k(this,function(l){switch(l.label){case 0:return e=n,[4,i.data.getCollectionQuery(y.a.CONTENT,function(e){return e.where("parent_id","==",n.id)})];case 1:return e.children=l.sent(),[2]}})},t=0,u=n.children,o.label=2;case 2:return t<u.length?(r=u[t],[5,l(r)]):[3,5];case 3:o.sent(),o.label=4;case 4:return t++,[3,2];case 5:return[2]}})},i=this,u=0,r=e.children,a.label=3;case 3:return u<r.length?(o=r[u],[5,t(o)]):[3,6];case 4:a.sent(),a.label=5;case 5:return u++,[3,3];case 6:return this.loader=!1,this.information=e.children,console.log(e),[2]}})})},n}(),_=l(584),E=function(){return function(){}}(),I=l(447),T=l(448),O=l(449),P=l(450),$=l(451),q=l(452),M=l(453),V=l(454),L=l(455),S=l(130),D=l(3),N=l(7),j=l(456),F=l(53),G=l(13),A=l(31),Q=l(582),K=l(196),J=l(95),Y=l(581),Z=l(40),z=l(6),B=l(14),H=l(61),U=l(16),W=l(63),X=l(459),nn=l(29),en=l(23),ln=l(74),tn=l(131),un=l(96),rn=l(8),on=l(133),an=l(587),cn=v["ɵcrt"]({encapsulation:2,styles:[],data:{}}),dn=l(15),sn=l(97),fn=l(132),pn=v["ɵcrt"]({encapsulation:2,styles:[],data:{}}),hn=v["ɵccf"]("page-materia",C,function(n){return v["ɵvid"](0,[(n()(),v["ɵeld"](0,0,null,null,1,"page-materia",[],null,null,null,b,pn)),v["ɵdid"](1,49152,null,0,C,[A.a,dn.a,g.a,sn.a,fn.AngularFirestore,w.a],null,null)],null,null)},{},{},[]),mn=l(22),bn=l(197),vn=l(204),gn=l(62);l.d(e,"MateriaPageModuleNgFactory",function(){return yn});var yn=v["ɵcmf"](E,[],function(n){return v["ɵmod"]([v["ɵmpd"](512,v.ComponentFactoryResolver,v["ɵCodegenComponentFactoryResolver"],[[8,[I.a,T.a,O.a,P.a,$.a,q.a,M.a,V.a,L.a,hn]],[3,v.ComponentFactoryResolver],v.NgModuleRef]),v["ɵmpd"](4608,U.m,U.l,[v.LOCALE_ID,[2,U.w]]),v["ɵmpd"](4608,mn.k,mn.k,[]),v["ɵmpd"](4608,mn.c,mn.c,[]),v["ɵmpd"](512,U.c,U.c,[]),v["ɵmpd"](512,mn.j,mn.j,[]),v["ɵmpd"](512,mn.d,mn.d,[]),v["ɵmpd"](512,mn.i,mn.i,[]),v["ɵmpd"](512,bn.a,bn.a,[]),v["ɵmpd"](512,bn.b,bn.b,[]),v["ɵmpd"](512,vn.MomentModule,vn.MomentModule,[]),v["ɵmpd"](512,_.a,_.a,[]),v["ɵmpd"](512,E,E,[]),v["ɵmpd"](256,gn.a,C,[])])})},581:function(n,e,l){"use strict";function t(n){return i["ɵvid"](2,[i["ɵqud"](402653184,1,{_fixedContent:0}),i["ɵqud"](402653184,2,{_scrollContent:0}),(n()(),i["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),i["ɵncd"](null,0),(n()(),i["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),i["ɵncd"](null,1),i["ɵncd"](null,2)],null,null)}l.d(e,"a",function(){return u}),e.b=t;var i=l(0),u=(l(3),l(6),l(14),l(61),l(7),l(31),i["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(n,e,l){"use strict";function t(n){return i["ɵvid"](2,[(n()(),i["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),i["ɵdid"](1,278528,null,0,u.i,[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i["ɵncd"](null,0)],function(n,e){n(e,1,0,"toolbar-title","toolbar-title-"+e.component._mode)},null)}l.d(e,"a",function(){return r}),e.b=t;var i=l(0),u=l(16),r=(l(3),i["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},584:function(n,e,l){"use strict";l(1),l(0),l(587),l(16),l(28),l(588),l(460),l(589),l(590);l.d(e,"a",function(){return t});var t=function(){return function(){}}()},587:function(n,e,l){"use strict";l.d(e,"a",function(){return t});l(1),l(28);var t=function(){function n(n){this.navCtrl=n}return n.prototype.toggleSection=function(n){this.information[n].open=!this.information[n].open},n.prototype.toggleItem=function(n,e){this.information[n].children[e].open=!this.information[n].children[e].open},n.prototype.openClase=function(n,e){n.video&&this.navCtrl.push("ClaseDetailPage",{id:n.id,type:e})},n}()},588:function(n,e,l){"use strict";l.d(e,"a",function(){return a});l(1),l(28);var t=l(458),i=(l.n(t),l(457)),u=(l(198),l(24)),r=this&&this.__awaiter||function(n,e,l,t){return new(l||(l=Promise))(function(i,u){function r(n){try{a(t.next(n))}catch(n){u(n)}}function o(n){try{a(t.throw(n))}catch(n){u(n)}}function a(n){n.done?i(n.value):new l(function(e){e(n.value)}).then(r,o)}a((t=t.apply(n,e||[])).next())})},o=this&&this.__generator||function(n,e){function l(l){return function(r){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,i&&(u=i[2&l[0]?"return":l[0]?"throw":"next"])&&!(u=u.call(i,l[1])).done)return u;switch(i=0,u&&(l=[0,u.value]),l[0]){case 0:case 1:u=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,i=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(u=o.trys,!(u=u.length>0&&u[u.length-1])&&(6===l[0]||2===l[0])){o=0;continue}if(3===l[0]&&(!u||l[1]>u[0]&&l[1]<u[3])){o.label=l[1];break}if(6===l[0]&&o.label<u[1]){o.label=u[1],u=l;break}if(u&&o.label<u[2]){o.label=u[2],o.ops.push(l);break}u[2]&&o.ops.pop(),o.trys.pop();continue}l=e.call(n,o)}catch(n){l=[6,n],i=0}finally{t=u=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,r])}}var t,i,u,r,o={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r},a=function(){function n(n,e,l){this.modal=n,this.afs=e,this.auth=l,this.feed$=this.afs.collection(i.a.POST).valueChanges(),this.loader=!1}return n.prototype.openComments=function(n){return r(this,void 0,void 0,function(){var e;return o(this,function(l){switch(l.label){case 0:return this.loader=!0,[4,this.afs.collection(i.a.POST_COMMENT,function(e){return e.where("post","==",n.id)}).valueChanges().pipe(Object(u.take)(1)).toPromise()];case 1:return e=l.sent(),this.modal.create("PostCommentsPage",{comments:e}).present(),this.loader=!1,[2]}})})},n.prototype.isLiked=function(n){return!!this.auth.user&&(!!n&&(!!n.likes&&n.likes.indexOf(this.auth.user.uid)>=0))},n.prototype.toggleLike=function(n,e,l){void 0===l&&(l=[]),this.isLiked(n)?l.splice(l.indexOf(this.auth.user.uid),1):l.push(this.auth.user.uid),this.afs.doc(i.a.POST+"/"+e).update({likes:l})},n.prototype.removePost=function(n){this.afs.doc(i.a.POST+"/"+n).delete()},n}()},589:function(n,e,l){"use strict";l.d(e,"a",function(){return a});l(1);var t=l(457),i=l(458),u=(l.n(i),l(24)),r=this&&this.__awaiter||function(n,e,l,t){return new(l||(l=Promise))(function(i,u){function r(n){try{a(t.next(n))}catch(n){u(n)}}function o(n){try{a(t.throw(n))}catch(n){u(n)}}function a(n){n.done?i(n.value):new l(function(e){e(n.value)}).then(r,o)}a((t=t.apply(n,e||[])).next())})},o=this&&this.__generator||function(n,e){function l(l){return function(r){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,i&&(u=i[2&l[0]?"return":l[0]?"throw":"next"])&&!(u=u.call(i,l[1])).done)return u;switch(i=0,u&&(l=[0,u.value]),l[0]){case 0:case 1:u=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,i=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(u=o.trys,!(u=u.length>0&&u[u.length-1])&&(6===l[0]||2===l[0])){o=0;continue}if(3===l[0]&&(!u||l[1]>u[0]&&l[1]<u[3])){o.label=l[1];break}if(6===l[0]&&o.label<u[1]){o.label=u[1],u=l;break}if(u&&o.label<u[2]){o.label=u[2],o.ops.push(l);break}u[2]&&o.ops.pop(),o.trys.pop();continue}l=e.call(n,o)}catch(n){l=[6,n],i=0}finally{t=u=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,r])}}var t,i,u,r,o={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r},a=function(){function n(n,e){this.afs=n,this.navCtrl=e,this.galleries=[]}return n.prototype.ngOnInit=function(){this.gallery&&this.loadGalleries(this.gallery.id)},n.prototype.loadGalleries=function(n){return r(this,void 0,void 0,function(){var e;return o(this,function(l){switch(l.label){case 0:return[4,this.afs.collection(t.a.GALLERY,function(e){return e.where("cat_id","==",n)}).valueChanges().pipe(Object(u.take)(1)).toPromise()];case 1:return e=l.sent(),this.galleries=e,[2]}})})},n}()},590:function(n,e,l){"use strict";l.d(e,"a",function(){return a});l(1);var t=l(457),i=(l(202),l(458)),u=(l.n(i),l(24)),r=this&&this.__awaiter||function(n,e,l,t){return new(l||(l=Promise))(function(i,u){function r(n){try{a(t.next(n))}catch(n){u(n)}}function o(n){try{a(t.throw(n))}catch(n){u(n)}}function a(n){n.done?i(n.value):new l(function(e){e(n.value)}).then(r,o)}a((t=t.apply(n,e||[])).next())})},o=this&&this.__generator||function(n,e){function l(l){return function(r){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,i&&(u=i[2&l[0]?"return":l[0]?"throw":"next"])&&!(u=u.call(i,l[1])).done)return u;switch(i=0,u&&(l=[0,u.value]),l[0]){case 0:case 1:u=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,i=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(u=o.trys,!(u=u.length>0&&u[u.length-1])&&(6===l[0]||2===l[0])){o=0;continue}if(3===l[0]&&(!u||l[1]>u[0]&&l[1]<u[3])){o.label=l[1];break}if(6===l[0]&&o.label<u[1]){o.label=u[1],u=l;break}if(u&&o.label<u[2]){o.label=u[2],o.ops.push(l);break}u[2]&&o.ops.pop(),o.trys.pop();continue}l=e.call(n,o)}catch(n){l=[6,n],i=0}finally{t=u=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,r])}}var t,i,u,r,o={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r},a=function(){function n(n,e){this.iab=n,this.afs=e,this.medias=[]}return n.prototype.ngOnInit=function(){this.loadMedias(this.media.id)},n.prototype.openMedia=function(n){this.iab.create(n,"_system")},n.prototype.loadMedias=function(n){return r(this,void 0,void 0,function(){var e;return o(this,function(l){switch(l.label){case 0:return[4,this.afs.collection(t.a.MEDIA,function(e){return e.where("categoria.id","==",n)}).valueChanges().pipe(Object(u.take)(1)).toPromise()];case 1:return e=l.sent(),this.medias=e,[2]}})})},n}()}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
