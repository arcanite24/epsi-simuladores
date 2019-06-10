webpackJsonp([4],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamFeedbackPageModule", function() { return ExamFeedbackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exam_feedback__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(788);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExamFeedbackPageModule = /** @class */ (function () {
    function ExamFeedbackPageModule() {
    }
    ExamFeedbackPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exam_feedback__["a" /* ExamFeedbackPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exam_feedback__["a" /* ExamFeedbackPage */]),
            ],
        })
    ], ExamFeedbackPageModule);
    return ExamFeedbackPageModule;
}());

//# sourceMappingURL=exam-feedback.module.js.map

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

/***/ 775:
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

/***/ 778:
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

/***/ 779:
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

/***/ 780:
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

/***/ 781:
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

/***/ 782:
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

/***/ 783:
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

/***/ 784:
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

/***/ 785:
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

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var add_pipe_1 = __webpack_require__(773);
exports.AddPipe = add_pipe_1.AddPipe;
var calendar_pipe_1 = __webpack_require__(774);
exports.CalendarPipe = calendar_pipe_1.CalendarPipe;
var date_format_pipe_1 = __webpack_require__(775);
exports.DateFormatPipe = date_format_pipe_1.DateFormatPipe;
var difference_pipe_1 = __webpack_require__(776);
exports.DifferencePipe = difference_pipe_1.DifferencePipe;
var duration_pipe_1 = __webpack_require__(777);
exports.DurationPipe = duration_pipe_1.DurationPipe;
var from_unix_pipe_1 = __webpack_require__(778);
exports.FromUnixPipe = from_unix_pipe_1.FromUnixPipe;
var parse_pipe_1 = __webpack_require__(779);
exports.ParsePipe = parse_pipe_1.ParsePipe;
var moment_module_1 = __webpack_require__(787);
exports.MomentModule = moment_module_1.MomentModule;
var subtract_pipe_1 = __webpack_require__(780);
exports.SubtractPipe = subtract_pipe_1.SubtractPipe;
var time_ago_pipe_1 = __webpack_require__(781);
exports.TimeAgoPipe = time_ago_pipe_1.TimeAgoPipe;
var utc_pipe_1 = __webpack_require__(782);
exports.UtcPipe = utc_pipe_1.UtcPipe;
var from_utc_pipe_1 = __webpack_require__(783);
exports.FromUtcPipe = from_utc_pipe_1.FromUtcPipe;
var local_pipe_1 = __webpack_require__(784);
exports.LocalTimePipe = local_pipe_1.LocalTimePipe;
var locale_pipe_1 = __webpack_require__(785);
exports.LocalePipe = locale_pipe_1.LocalePipe;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 787:
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
var add_pipe_1 = __webpack_require__(773);
var calendar_pipe_1 = __webpack_require__(774);
var date_format_pipe_1 = __webpack_require__(775);
var difference_pipe_1 = __webpack_require__(776);
var duration_pipe_1 = __webpack_require__(777);
var from_unix_pipe_1 = __webpack_require__(778);
var parse_pipe_1 = __webpack_require__(779);
var subtract_pipe_1 = __webpack_require__(780);
var time_ago_pipe_1 = __webpack_require__(781);
var utc_pipe_1 = __webpack_require__(782);
var from_utc_pipe_1 = __webpack_require__(783);
var local_pipe_1 = __webpack_require__(784);
var locale_pipe_1 = __webpack_require__(785);
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

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_list_accordion_list__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timer_timer__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__zamna_feed_zamna_feed__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gallery_item_gallery_item__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__media_item_media_item__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__exam_feedback_modal_exam_feedback_modal__ = __webpack_require__(794);
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
                __WEBPACK_IMPORTED_MODULE_8__media_item_media_item__["a" /* MediaItemComponent */],
                __WEBPACK_IMPORTED_MODULE_9__exam_feedback_modal_exam_feedback_modal__["a" /* ExamFeedbackModalComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_6_angular2_moment__["MomentModule"]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__accordion_list_accordion_list__["a" /* AccordionListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__timer_timer__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__zamna_feed_zamna_feed__["a" /* ZamnaFeedComponent */],
                __WEBPACK_IMPORTED_MODULE_7__gallery_item_gallery_item__["a" /* GalleryItemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__media_item_media_item__["a" /* MediaItemComponent */],
                __WEBPACK_IMPORTED_MODULE_9__exam_feedback_modal_exam_feedback_modal__["a" /* ExamFeedbackModalComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 789:
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
            selector: 'accordion-list',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/components/accordion-list/accordion-list.html"*/'<ion-list class="accordion-list">\n  <!-- First Level -->\n  <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n    <!-- Toggle Button -->\n    <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n      <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n      <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n        {{ item.name }}\n    </button>\n\n    <ion-list *ngIf="item.children && item.open" no-lines>\n      <!-- Second Level -->\n      <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n        <!-- Toggle Button -->\n        <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>\n          <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>\n          <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>\n          {{ child.name }}\n        </button>\n\n        <!-- Direct Add Button as Fallback -->\n        <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap (click)="openClase(child, \'tema\')">\n          <h2>{{ child.name }}</h2>\n          <!--<p text-lowercase>{{ child.information }}</p>-->\n          <!--<button ion-button outline item-end (click)="buyItem(child)">{{ child.price }}</button>-->\n        </ion-item>\n\n        <ion-list *ngIf="child.children && child.open">\n          <!-- Third Level -->\n          <ion-item *ngFor="let item of child.children; let k = index" detail-none class="child-item" text-wrap (click)="openClase(item, \'subtema\')">\n            <h2>{{ item.name }}</h2>\n            <!--<p text-lowercase>{{ item.information }}</p>-->\n            <!-- Direct Add Button -->\n            <!--<button ion-button outline item-end (click)="buyItem(item)">{{ item.price }}</button>-->\n          </ion-item>\n        </ion-list>\n\n      </ion-list-header>\n    </ion-list>\n    \n  </ion-list-header>\n</ion-list>'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/components/accordion-list/accordion-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */]])
    ], AccordionListComponent);
    return AccordionListComponent;
}());

//# sourceMappingURL=accordion-list.js.map

/***/ }),

/***/ 790:
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
            selector: 'timer',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/components/timer/timer.html"*/'<ion-card *ngIf="timer">\n	<ion-card-header>\n		<button ion-button *ngIf="timeInSeconds && timeInSeconds > 0" large block clear class="timer-button x-large">{{timer.displayTime}}</button>\n		<button ion-button *ngIf="!timeInSeconds || timeInSeconds == 0" large block clear class="timer-button">Formato de tiempo erroneo</button>\n	</ion-card-header>\n	<ion-item *ngIf="timeInSeconds && timeInSeconds > 0">\n		<button ion-button clear class="large" color="danger" (click)="initTimer()" item-start *ngIf="!timer.runTimer && (timer.hasStarted || timer.hasFinished) || timer.hasFinished">\n            <ion-icon name="refresh"></ion-icon>\n            Restart\n        </button>\n		<button ion-button clear class="large" (click)="pauseTimer()" item-end *ngIf="timer.runTimer && timer.hasStarted && !timer.hasFinished">\n            <ion-icon name="pause"></ion-icon>\n            Pause\n        </button>\n		<button ion-button clear class="large" (click)="resumeTimer()" item-end *ngIf="!timer.runTimer && timer.hasStarted && !timer.hasFinished">\n            <ion-icon name="play"></ion-icon>\n            Resume\n        </button>\n		<button ion-button clear class="large" (click)="startTimer()" item-end *ngIf="!timer.hasStarted">\n            <ion-icon name="play"></ion-icon>\n            Start\n        </button>\n	</ion-item>\n</ion-card>'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/components/timer/timer.html"*/
        })
    ], TimerComponent);
    return TimerComponent;
}());

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 791:
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
            selector: 'zamna-feed',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/components/zamna-feed/zamna-feed.html"*/'<div class="zamna-feed" *ngIf="auth.loggedIn">\n\n  <div class="feed-input">\n\n  </div>\n\n  <div class="feed-list" *ngIf="feed$ | async as feed">\n\n    <div class="feed-post" *ngFor="let post of feed.reverse()">\n      \n      <ion-card>\n\n        <ion-item *ngIf="post.user">\n          <ion-avatar item-start>\n            <img [src]="post.user.photoURL">\n          </ion-avatar>\n          <h2>{{post.user.displayName}} {{post.user.lastName}}</h2>\n          <p>{{post.date | amCalendar}}</p>\n        </ion-item>\n\n        <img [src]="post.img" *ngIf="post.img">\n\n        <ion-card-content *ngIf="post.text">\n          <p>{{post.text}}</p>\n        </ion-card-content>\n\n        <ion-row>\n          <ion-col>\n            <button ion-button icon-start clear small [color]="post.likes.indexOf(auth.user.uid) >= 0 ? \'primary\' : \'disabled\'" (click)="toggleLike(post, post.id, post.likes)" [disabled]="loader">\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>{{post.likes.length}} Likes</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-start clear small (click)="openComments(post)" [disabled]="loader">\n              <ion-icon name="text"></ion-icon>\n              <div>Comentarios</div>\n            </button>\n          </ion-col>\n        </ion-row>\n\n      </ion-card>\n    </div>\n\n  </div>\n  \n</div>'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/components/zamna-feed/zamna-feed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], ZamnaFeedComponent);
    return ZamnaFeedComponent;
}());

//# sourceMappingURL=zamna-feed.js.map

/***/ }),

/***/ 792:
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
            selector: 'gallery-item',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/components/gallery-item/gallery-item.html"*/'<ion-list style="margin-bottom:3rem">\n  <ion-list-header><strong style="font-size:1.75rem;">{{gallery.name}}</strong></ion-list-header>\n  <ion-item *ngFor="let g of galleries" (click)="navCtrl.push(\'GaleriaDetailPage\', {id: g.id})">\n    <h2>{{g.name}}</h2>\n    <!--<p>{{g.desc}}</p>-->\n  </ion-item>\n</ion-list>'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/components/gallery-item/gallery-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavController */]])
    ], GalleryItemComponent);
    return GalleryItemComponent;
}());

//# sourceMappingURL=gallery-item.js.map

/***/ }),

/***/ 793:
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
            selector: 'media-item',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/components/media-item/media-item.html"*/'<ion-list style="margin-bottom:3rem">\n  <ion-list-header><strong style="font-size:1.75rem;">{{media.name}}</strong></ion-list-header>\n  <ion-item *ngFor="let g of medias" (click)="openMedia(g.url)">\n    <h2>{{g.name}}</h2>\n    <!--<p>{{g.desc}}</p>-->\n  </ion-item>\n</ion-list>'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/components/media-item/media-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"]])
    ], MediaItemComponent);
    return MediaItemComponent;
}());

//# sourceMappingURL=media-item.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamFeedbackModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_models__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(23);
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





var ExamFeedbackModalComponent = /** @class */ (function () {
    function ExamFeedbackModalComponent(afs, viewCtrl) {
        this.afs = afs;
        this.viewCtrl = viewCtrl;
        this.stats = [];
    }
    Object.defineProperty(ExamFeedbackModalComponent.prototype, "lastQuestion", {
        get: function () { return []; },
        set: function (qs) {
            this.stats = [];
            var _loop_1 = function (q) {
                var payload = {
                    q: q,
                    stat$: this_1.afs.collection(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].QUESTION_STAT).doc(q.id)
                        .valueChanges()
                        .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (stat) { return stat ? (__assign({}, stat, { stat: Object.entries(stat.stat) })) : ({ id: __WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].QUESTION_STAT + "/" + q.id, question: q, stat: [], total: 0 }); }))
                };
                this_1.stats.push(payload);
            };
            var this_1 = this;
            for (var _i = 0, qs_1 = qs; _i < qs_1.length; _i++) {
                var q = qs_1[_i];
                _loop_1(q);
            }
        },
        enumerable: true,
        configurable: true
    });
    ExamFeedbackModalComponent.prototype.ngOnInit = function () {
    };
    ExamFeedbackModalComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ExamFeedbackModalComponent.prototype.filterStats = function (question, stats) {
        var ans = question && question.respuestas ? question.respuestas.map(function (r) { return r.text; }) : [];
        return stats ? stats.filter(function (s) { return ans.includes(s[0]); }) : [];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ExamFeedbackModalComponent.prototype, "lastQuestion", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ExamFeedbackModalComponent.prototype, "lastSelected", void 0);
    ExamFeedbackModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'exam-feedback-modal',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/components/exam-feedback-modal/exam-feedback-modal.html"*/'<div class="container m-2">\n  <div class="row">\n\n    <div class="col-md-12" *ngFor="let stat of stats">\n      <div class="row">\n\n        <div class="col-md-12 mb-2" style="max-height: 200px;overflow-y: auto;">\n          <p>\n            <strong>{{stat.q.text}}</strong>\n          </p>\n        </div>\n\n        <div class="col-md-12">\n          <h5 class="c-epsi-primary">¿Elegiste la correcta?</h5>\n        </div>\n\n        <div class="col-md-12" *ngIf="stat.q.respuestas as rList">\n          <ul class="list-group">\n            <li class="list-group-item flex flex-row flex-start align-center" *ngFor="let r of rList">\n              <ion-icon name="checkmark" color="bien" *ngIf="stat.q.correcta == r.id"></ion-icon>\n              <ion-icon name="close" color="muyMal" *ngIf="stat.q.correcta != r.id"></ion-icon>\n              <span class="ml-2" [ngClass]="{\'c-epsi-primary text-bolder\': lastSelected == r.id}">{{r.text}}</span>\n            </li>\n          </ul>\n        </div>\n\n        <hr>\n\n        <div class="col-md-12 mt-4" *ngIf="stat.q.feedback">\n          <h5 class="m-0">Feedback</h5>\n          <p class="m-0 m-t1">{{stat.q.feedback}}</p>\n          <!--<pre>{{stat | json}}</pre>-->\n        </div>\n\n        <hr>\n\n        <div class="col-md-12 mt-4" *ngIf="stat.stat$ | async as _stat">\n          <h5 class="m-0 text-danger">Y los demás... ¿Qué eligieron?</h5>\n          <ul class="list-group" *ngIf="_stat.stat">\n            <li class="list-group-item flex flex-col flex-start" *ngFor="let s of filterStats(stat.q, _stat.stat)">\n              <strong> <span class="c-epsi-primary">{{(s[1] / _stat.total) * 100 | number}}%</span> {{s[0]}}</strong>\n              <!-- <pre>{{ s | json }}</pre> -->\n              <div class="barra-container" [style.width.%]="(s[1] / _stat.total) * 100">\n                <div class="barra"></div>\n              </div>\n            </li>\n          </ul>\n        </div>\n\n      </div>\n      <hr>\n    </div>\n\n    <div class="col-md-12 flex-loader mt-2">\n      <button ion-button color="primary" type="button" (click)="closeModal()">Seguir</button>\n    </div>\n\n    <!-- <div class="col-md-12">\n      <pre>{{ q | json }}</pre>\n    </div> -->\n\n  </div>\n</div>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/components/exam-feedback-modal/exam-feedback-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["x" /* ViewController */]])
    ], ExamFeedbackModalComponent);
    return ExamFeedbackModalComponent;
}());

//# sourceMappingURL=exam-feedback-modal.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamFeedbackPage; });
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


var ExamFeedbackPage = /** @class */ (function () {
    function ExamFeedbackPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.q = this.navParams.get('q');
        this.selected = this.navParams.get('selected');
    }
    ExamFeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExamFeedbackPage');
    };
    ExamFeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-exam-feedback',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/exam-feedback/exam-feedback.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Feedback</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <exam-feedback-modal *ngIf="q" [lastQuestion]="q" [lastSelected]="selected"></exam-feedback-modal>\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/exam-feedback/exam-feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], ExamFeedbackPage);
    return ExamFeedbackPage;
}());

//# sourceMappingURL=exam-feedback.js.map

/***/ })

});
//# sourceMappingURL=4.js.map