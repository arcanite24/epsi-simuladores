webpackJsonp([2],{

/***/ 1185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPageModule", function() { return MediaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media__ = __webpack_require__(1265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(1232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let MediaPageModule = class MediaPageModule {
};
MediaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__media__["a" /* MediaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__media__["a" /* MediaPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
        ],
    })
], MediaPageModule);

//# sourceMappingURL=media.module.js.map

/***/ }),

/***/ 1216:
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

/***/ 1217:
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

/***/ 1218:
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

/***/ 1219:
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

/***/ 1220:
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

/***/ 1221:
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

/***/ 1222:
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

/***/ 1223:
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

/***/ 1224:
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

/***/ 1225:
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

/***/ 1226:
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

/***/ 1227:
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

/***/ 1228:
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

/***/ 1229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var add_pipe_1 = __webpack_require__(1216);
exports.AddPipe = add_pipe_1.AddPipe;
var calendar_pipe_1 = __webpack_require__(1217);
exports.CalendarPipe = calendar_pipe_1.CalendarPipe;
var date_format_pipe_1 = __webpack_require__(1218);
exports.DateFormatPipe = date_format_pipe_1.DateFormatPipe;
var difference_pipe_1 = __webpack_require__(1219);
exports.DifferencePipe = difference_pipe_1.DifferencePipe;
var duration_pipe_1 = __webpack_require__(1220);
exports.DurationPipe = duration_pipe_1.DurationPipe;
var from_unix_pipe_1 = __webpack_require__(1221);
exports.FromUnixPipe = from_unix_pipe_1.FromUnixPipe;
var parse_pipe_1 = __webpack_require__(1222);
exports.ParsePipe = parse_pipe_1.ParsePipe;
var moment_module_1 = __webpack_require__(1230);
exports.MomentModule = moment_module_1.MomentModule;
var subtract_pipe_1 = __webpack_require__(1223);
exports.SubtractPipe = subtract_pipe_1.SubtractPipe;
var time_ago_pipe_1 = __webpack_require__(1224);
exports.TimeAgoPipe = time_ago_pipe_1.TimeAgoPipe;
var utc_pipe_1 = __webpack_require__(1225);
exports.UtcPipe = utc_pipe_1.UtcPipe;
var from_utc_pipe_1 = __webpack_require__(1226);
exports.FromUtcPipe = from_utc_pipe_1.FromUtcPipe;
var local_pipe_1 = __webpack_require__(1227);
exports.LocalTimePipe = local_pipe_1.LocalTimePipe;
var locale_pipe_1 = __webpack_require__(1228);
exports.LocalePipe = locale_pipe_1.LocalePipe;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1230:
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
var add_pipe_1 = __webpack_require__(1216);
var calendar_pipe_1 = __webpack_require__(1217);
var date_format_pipe_1 = __webpack_require__(1218);
var difference_pipe_1 = __webpack_require__(1219);
var duration_pipe_1 = __webpack_require__(1220);
var from_unix_pipe_1 = __webpack_require__(1221);
var parse_pipe_1 = __webpack_require__(1222);
var subtract_pipe_1 = __webpack_require__(1223);
var time_ago_pipe_1 = __webpack_require__(1224);
var utc_pipe_1 = __webpack_require__(1225);
var from_utc_pipe_1 = __webpack_require__(1226);
var local_pipe_1 = __webpack_require__(1227);
var locale_pipe_1 = __webpack_require__(1228);
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

/***/ 1231:
/***/ (function(module, exports) {

/*global window */
/**
 * @license countdown.js v2.6.0 http://countdownjs.org
 * Copyright (c)2006-2014 Stephen M. McKamey.
 * Licensed under The MIT License.
 */
/*jshint bitwise:false */

/**
 * @public
 * @type {Object|null}
 */
var module;

/**
 * API entry
 * @public
 * @param {function(Object)|Date|number} start the starting date
 * @param {function(Object)|Date|number} end the ending date
 * @param {number} units the units to populate
 * @return {Object|number}
 */
var countdown = (

/**
 * @param {Object} module CommonJS Module
 */
function(module) {
	/*jshint smarttabs:true */

	'use strict';

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var MILLISECONDS	= 0x001;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var SECONDS			= 0x002;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var MINUTES			= 0x004;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var HOURS			= 0x008;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var DAYS			= 0x010;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var WEEKS			= 0x020;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var MONTHS			= 0x040;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var YEARS			= 0x080;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var DECADES			= 0x100;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var CENTURIES		= 0x200;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var MILLENNIA		= 0x400;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var DEFAULTS		= YEARS|MONTHS|DAYS|HOURS|MINUTES|SECONDS;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var MILLISECONDS_PER_SECOND = 1000;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var SECONDS_PER_MINUTE = 60;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var MINUTES_PER_HOUR = 60;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var HOURS_PER_DAY = 24;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var MILLISECONDS_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR * SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var DAYS_PER_WEEK = 7;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var MONTHS_PER_YEAR = 12;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var YEARS_PER_DECADE = 10;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var DECADES_PER_CENTURY = 10;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var CENTURIES_PER_MILLENNIUM = 10;

	/**
	 * @private
	 * @param {number} x number
	 * @return {number}
	 */
	var ceil = Math.ceil;

	/**
	 * @private
	 * @param {number} x number
	 * @return {number}
	 */
	var floor = Math.floor;

	/**
	 * @private
	 * @param {Date} ref reference date
	 * @param {number} shift number of months to shift
	 * @return {number} number of days shifted
	 */
	function borrowMonths(ref, shift) {
		var prevTime = ref.getTime();

		// increment month by shift
		ref.setMonth( ref.getMonth() + shift );

		// this is the trickiest since months vary in length
		return Math.round( (ref.getTime() - prevTime) / MILLISECONDS_PER_DAY );
	}

	/**
	 * @private
	 * @param {Date} ref reference date
	 * @return {number} number of days
	 */
	function daysPerMonth(ref) {
		var a = ref.getTime();

		// increment month by 1
		var b = new Date(a);
		b.setMonth( ref.getMonth() + 1 );

		// this is the trickiest since months vary in length
		return Math.round( (b.getTime() - a) / MILLISECONDS_PER_DAY );
	}

	/**
	 * @private
	 * @param {Date} ref reference date
	 * @return {number} number of days
	 */
	function daysPerYear(ref) {
		var a = ref.getTime();

		// increment year by 1
		var b = new Date(a);
		b.setFullYear( ref.getFullYear() + 1 );

		// this is the trickiest since years (periodically) vary in length
		return Math.round( (b.getTime() - a) / MILLISECONDS_PER_DAY );
	}

	/**
	 * Applies the Timespan to the given date.
	 * 
	 * @private
	 * @param {Timespan} ts
	 * @param {Date=} date
	 * @return {Date}
	 */
	function addToDate(ts, date) {
		date = (date instanceof Date) || ((date !== null) && isFinite(date)) ? new Date(+date) : new Date();
		if (!ts) {
			return date;
		}

		// if there is a value field, use it directly
		var value = +ts.value || 0;
		if (value) {
			date.setTime(date.getTime() + value);
			return date;
		}

		value = +ts.milliseconds || 0;
		if (value) {
			date.setMilliseconds(date.getMilliseconds() + value);
		}

		value = +ts.seconds || 0;
		if (value) {
			date.setSeconds(date.getSeconds() + value);
		}

		value = +ts.minutes || 0;
		if (value) {
			date.setMinutes(date.getMinutes() + value);
		}

		value = +ts.hours || 0;
		if (value) {
			date.setHours(date.getHours() + value);
		}

		value = +ts.weeks || 0;
		if (value) {
			value *= DAYS_PER_WEEK;
		}

		value += +ts.days || 0;
		if (value) {
			date.setDate(date.getDate() + value);
		}

		value = +ts.months || 0;
		if (value) {
			date.setMonth(date.getMonth() + value);
		}

		value = +ts.millennia || 0;
		if (value) {
			value *= CENTURIES_PER_MILLENNIUM;
		}

		value += +ts.centuries || 0;
		if (value) {
			value *= DECADES_PER_CENTURY;
		}

		value += +ts.decades || 0;
		if (value) {
			value *= YEARS_PER_DECADE;
		}

		value += +ts.years || 0;
		if (value) {
			date.setFullYear(date.getFullYear() + value);
		}

		return date;
	}

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var LABEL_MILLISECONDS	= 0;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var LABEL_SECONDS		= 1;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var LABEL_MINUTES		= 2;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var LABEL_HOURS			= 3;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var LABEL_DAYS			= 4;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var LABEL_WEEKS			= 5;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var LABEL_MONTHS		= 6;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var LABEL_YEARS			= 7;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var LABEL_DECADES		= 8;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var LABEL_CENTURIES		= 9;

	/**
	 * @private
	 * @const
	 * @type {number}
	 */
	var LABEL_MILLENNIA		= 10;

	/**
	 * @private
	 * @type {Array}
	 */
	var LABELS_SINGLUAR;

	/**
	 * @private
	 * @type {Array}
	 */
	var LABELS_PLURAL;

	/**
	 * @private
	 * @type {string}
	 */
	var LABEL_LAST;

	/**
	 * @private
	 * @type {string}
	 */
	var LABEL_DELIM;

	/**
	 * @private
	 * @type {string}
	 */
	var LABEL_NOW;

	/**
	 * Formats a number & unit as a string
	 * 
	 * @param {number} value
	 * @param {number} unit
	 * @return {string}
	 */
	var formatter;

	/**
	 * Formats a number as a string
	 * 
	 * @private
	 * @param {number} value
	 * @return {string}
	 */
	var formatNumber;

	/**
	 * @private
	 * @param {number} value
	 * @param {number} unit unit index into label list
	 * @return {string}
	 */
	function plurality(value, unit) {
		return formatNumber(value)+((value === 1) ? LABELS_SINGLUAR[unit] : LABELS_PLURAL[unit]);
	}

	/**
	 * Formats the entries with singular or plural labels
	 * 
	 * @private
	 * @param {Timespan} ts
	 * @return {Array}
	 */
	var formatList;

	/**
	 * Timespan representation of a duration of time
	 * 
	 * @private
	 * @this {Timespan}
	 * @constructor
	 */
	function Timespan() {}

	/**
	 * Formats the Timespan as a sentence
	 * 
	 * @param {string=} emptyLabel the string to use when no values returned
	 * @return {string}
	 */
	Timespan.prototype.toString = function(emptyLabel) {
		var label = formatList(this);

		var count = label.length;
		if (!count) {
			return emptyLabel ? ''+emptyLabel : LABEL_NOW;
		}
		if (count === 1) {
			return label[0];
		}

		var last = LABEL_LAST+label.pop();
		return label.join(LABEL_DELIM)+last;
	};

	/**
	 * Formats the Timespan as a sentence in HTML
	 * 
	 * @param {string=} tag HTML tag name to wrap each value
	 * @param {string=} emptyLabel the string to use when no values returned
	 * @return {string}
	 */
	Timespan.prototype.toHTML = function(tag, emptyLabel) {
		tag = tag || 'span';
		var label = formatList(this);

		var count = label.length;
		if (!count) {
			emptyLabel = emptyLabel || LABEL_NOW;
			return emptyLabel ? '<'+tag+'>'+emptyLabel+'</'+tag+'>' : emptyLabel;
		}
		for (var i=0; i<count; i++) {
			// wrap each unit in tag
			label[i] = '<'+tag+'>'+label[i]+'</'+tag+'>';
		}
		if (count === 1) {
			return label[0];
		}

		var last = LABEL_LAST+label.pop();
		return label.join(LABEL_DELIM)+last;
	};

	/**
	 * Applies the Timespan to the given date
	 * 
	 * @param {Date=} date the date to which the timespan is added.
	 * @return {Date}
	 */
	Timespan.prototype.addTo = function(date) {
		return addToDate(this, date);
	};

	/**
	 * Formats the entries as English labels
	 * 
	 * @private
	 * @param {Timespan} ts
	 * @return {Array}
	 */
	formatList = function(ts) {
		var list = [];

		var value = ts.millennia;
		if (value) {
			list.push(formatter(value, LABEL_MILLENNIA));
		}

		value = ts.centuries;
		if (value) {
			list.push(formatter(value, LABEL_CENTURIES));
		}

		value = ts.decades;
		if (value) {
			list.push(formatter(value, LABEL_DECADES));
		}

		value = ts.years;
		if (value) {
			list.push(formatter(value, LABEL_YEARS));
		}

		value = ts.months;
		if (value) {
			list.push(formatter(value, LABEL_MONTHS));
		}

		value = ts.weeks;
		if (value) {
			list.push(formatter(value, LABEL_WEEKS));
		}

		value = ts.days;
		if (value) {
			list.push(formatter(value, LABEL_DAYS));
		}

		value = ts.hours;
		if (value) {
			list.push(formatter(value, LABEL_HOURS));
		}

		value = ts.minutes;
		if (value) {
			list.push(formatter(value, LABEL_MINUTES));
		}

		value = ts.seconds;
		if (value) {
			list.push(formatter(value, LABEL_SECONDS));
		}

		value = ts.milliseconds;
		if (value) {
			list.push(formatter(value, LABEL_MILLISECONDS));
		}

		return list;
	};

	/**
	 * Borrow any underflow units, carry any overflow units
	 * 
	 * @private
	 * @param {Timespan} ts
	 * @param {string} toUnit
	 */
	function rippleRounded(ts, toUnit) {
		switch (toUnit) {
			case 'seconds':
				if (ts.seconds !== SECONDS_PER_MINUTE || isNaN(ts.minutes)) {
					return;
				}
				// ripple seconds up to minutes
				ts.minutes++;
				ts.seconds = 0;

				/* falls through */
			case 'minutes':
				if (ts.minutes !== MINUTES_PER_HOUR || isNaN(ts.hours)) {
					return;
				}
				// ripple minutes up to hours
				ts.hours++;
				ts.minutes = 0;

				/* falls through */
			case 'hours':
				if (ts.hours !== HOURS_PER_DAY || isNaN(ts.days)) {
					return;
				}
				// ripple hours up to days
				ts.days++;
				ts.hours = 0;

				/* falls through */
			case 'days':
				if (ts.days !== DAYS_PER_WEEK || isNaN(ts.weeks)) {
					return;
				}
				// ripple days up to weeks
				ts.weeks++;
				ts.days = 0;

				/* falls through */
			case 'weeks':
				if (ts.weeks !== daysPerMonth(ts.refMonth)/DAYS_PER_WEEK || isNaN(ts.months)) {
					return;
				}
				// ripple weeks up to months
				ts.months++;
				ts.weeks = 0;

				/* falls through */
			case 'months':
				if (ts.months !== MONTHS_PER_YEAR || isNaN(ts.years)) {
					return;
				}
				// ripple months up to years
				ts.years++;
				ts.months = 0;

				/* falls through */
			case 'years':
				if (ts.years !== YEARS_PER_DECADE || isNaN(ts.decades)) {
					return;
				}
				// ripple years up to decades
				ts.decades++;
				ts.years = 0;

				/* falls through */
			case 'decades':
				if (ts.decades !== DECADES_PER_CENTURY || isNaN(ts.centuries)) {
					return;
				}
				// ripple decades up to centuries
				ts.centuries++;
				ts.decades = 0;

				/* falls through */
			case 'centuries':
				if (ts.centuries !== CENTURIES_PER_MILLENNIUM || isNaN(ts.millennia)) {
					return;
				}
				// ripple centuries up to millennia
				ts.millennia++;
				ts.centuries = 0;
				/* falls through */
			}
	}

	/**
	 * Ripple up partial units one place
	 * 
	 * @private
	 * @param {Timespan} ts timespan
	 * @param {number} frac accumulated fractional value
	 * @param {string} fromUnit source unit name
	 * @param {string} toUnit target unit name
	 * @param {number} conversion multiplier between units
	 * @param {number} digits max number of decimal digits to output
	 * @return {number} new fractional value
	 */
	function fraction(ts, frac, fromUnit, toUnit, conversion, digits) {
		if (ts[fromUnit] >= 0) {
			frac += ts[fromUnit];
			delete ts[fromUnit];
		}

		frac /= conversion;
		if (frac + 1 <= 1) {
			// drop if below machine epsilon
			return 0;
		}

		if (ts[toUnit] >= 0) {
			// ensure does not have more than specified number of digits
			ts[toUnit] = +(ts[toUnit] + frac).toFixed(digits);
			rippleRounded(ts, toUnit);
			return 0;
		}

		return frac;
	}

	/**
	 * Ripple up partial units to next existing
	 * 
	 * @private
	 * @param {Timespan} ts
	 * @param {number} digits max number of decimal digits to output
	 */
	function fractional(ts, digits) {
		var frac = fraction(ts, 0, 'milliseconds', 'seconds', MILLISECONDS_PER_SECOND, digits);
		if (!frac) { return; }

		frac = fraction(ts, frac, 'seconds', 'minutes', SECONDS_PER_MINUTE, digits);
		if (!frac) { return; }

		frac = fraction(ts, frac, 'minutes', 'hours', MINUTES_PER_HOUR, digits);
		if (!frac) { return; }

		frac = fraction(ts, frac, 'hours', 'days', HOURS_PER_DAY, digits);
		if (!frac) { return; }

		frac = fraction(ts, frac, 'days', 'weeks', DAYS_PER_WEEK, digits);
		if (!frac) { return; }

		frac = fraction(ts, frac, 'weeks', 'months', daysPerMonth(ts.refMonth)/DAYS_PER_WEEK, digits);
		if (!frac) { return; }

		frac = fraction(ts, frac, 'months', 'years', daysPerYear(ts.refMonth)/daysPerMonth(ts.refMonth), digits);
		if (!frac) { return; }

		frac = fraction(ts, frac, 'years', 'decades', YEARS_PER_DECADE, digits);
		if (!frac) { return; }

		frac = fraction(ts, frac, 'decades', 'centuries', DECADES_PER_CENTURY, digits);
		if (!frac) { return; }

		frac = fraction(ts, frac, 'centuries', 'millennia', CENTURIES_PER_MILLENNIUM, digits);

		// should never reach this with remaining fractional value
		if (frac) { throw new Error('Fractional unit overflow'); }
	}

	/**
	 * Borrow any underflow units, carry any overflow units
	 * 
	 * @private
	 * @param {Timespan} ts
	 */
	function ripple(ts) {
		var x;

		if (ts.milliseconds < 0) {
			// ripple seconds down to milliseconds
			x = ceil(-ts.milliseconds / MILLISECONDS_PER_SECOND);
			ts.seconds -= x;
			ts.milliseconds += x * MILLISECONDS_PER_SECOND;

		} else if (ts.milliseconds >= MILLISECONDS_PER_SECOND) {
			// ripple milliseconds up to seconds
			ts.seconds += floor(ts.milliseconds / MILLISECONDS_PER_SECOND);
			ts.milliseconds %= MILLISECONDS_PER_SECOND;
		}

		if (ts.seconds < 0) {
			// ripple minutes down to seconds
			x = ceil(-ts.seconds / SECONDS_PER_MINUTE);
			ts.minutes -= x;
			ts.seconds += x * SECONDS_PER_MINUTE;

		} else if (ts.seconds >= SECONDS_PER_MINUTE) {
			// ripple seconds up to minutes
			ts.minutes += floor(ts.seconds / SECONDS_PER_MINUTE);
			ts.seconds %= SECONDS_PER_MINUTE;
		}

		if (ts.minutes < 0) {
			// ripple hours down to minutes
			x = ceil(-ts.minutes / MINUTES_PER_HOUR);
			ts.hours -= x;
			ts.minutes += x * MINUTES_PER_HOUR;

		} else if (ts.minutes >= MINUTES_PER_HOUR) {
			// ripple minutes up to hours
			ts.hours += floor(ts.minutes / MINUTES_PER_HOUR);
			ts.minutes %= MINUTES_PER_HOUR;
		}

		if (ts.hours < 0) {
			// ripple days down to hours
			x = ceil(-ts.hours / HOURS_PER_DAY);
			ts.days -= x;
			ts.hours += x * HOURS_PER_DAY;

		} else if (ts.hours >= HOURS_PER_DAY) {
			// ripple hours up to days
			ts.days += floor(ts.hours / HOURS_PER_DAY);
			ts.hours %= HOURS_PER_DAY;
		}

		while (ts.days < 0) {
			// NOTE: never actually seen this loop more than once

			// ripple months down to days
			ts.months--;
			ts.days += borrowMonths(ts.refMonth, 1);
		}

		// weeks is always zero here

		if (ts.days >= DAYS_PER_WEEK) {
			// ripple days up to weeks
			ts.weeks += floor(ts.days / DAYS_PER_WEEK);
			ts.days %= DAYS_PER_WEEK;
		}

		if (ts.months < 0) {
			// ripple years down to months
			x = ceil(-ts.months / MONTHS_PER_YEAR);
			ts.years -= x;
			ts.months += x * MONTHS_PER_YEAR;

		} else if (ts.months >= MONTHS_PER_YEAR) {
			// ripple months up to years
			ts.years += floor(ts.months / MONTHS_PER_YEAR);
			ts.months %= MONTHS_PER_YEAR;
		}

		// years is always non-negative here
		// decades, centuries and millennia are always zero here

		if (ts.years >= YEARS_PER_DECADE) {
			// ripple years up to decades
			ts.decades += floor(ts.years / YEARS_PER_DECADE);
			ts.years %= YEARS_PER_DECADE;

			if (ts.decades >= DECADES_PER_CENTURY) {
				// ripple decades up to centuries
				ts.centuries += floor(ts.decades / DECADES_PER_CENTURY);
				ts.decades %= DECADES_PER_CENTURY;

				if (ts.centuries >= CENTURIES_PER_MILLENNIUM) {
					// ripple centuries up to millennia
					ts.millennia += floor(ts.centuries / CENTURIES_PER_MILLENNIUM);
					ts.centuries %= CENTURIES_PER_MILLENNIUM;
				}
			}
		}
	}

	/**
	 * Remove any units not requested
	 * 
	 * @private
	 * @param {Timespan} ts
	 * @param {number} units the units to populate
	 * @param {number} max number of labels to output
	 * @param {number} digits max number of decimal digits to output
	 */
	function pruneUnits(ts, units, max, digits) {
		var count = 0;

		// Calc from largest unit to smallest to prevent underflow
		if (!(units & MILLENNIA) || (count >= max)) {
			// ripple millennia down to centuries
			ts.centuries += ts.millennia * CENTURIES_PER_MILLENNIUM;
			delete ts.millennia;

		} else if (ts.millennia) {
			count++;
		}

		if (!(units & CENTURIES) || (count >= max)) {
			// ripple centuries down to decades
			ts.decades += ts.centuries * DECADES_PER_CENTURY;
			delete ts.centuries;

		} else if (ts.centuries) {
			count++;
		}

		if (!(units & DECADES) || (count >= max)) {
			// ripple decades down to years
			ts.years += ts.decades * YEARS_PER_DECADE;
			delete ts.decades;

		} else if (ts.decades) {
			count++;
		}

		if (!(units & YEARS) || (count >= max)) {
			// ripple years down to months
			ts.months += ts.years * MONTHS_PER_YEAR;
			delete ts.years;

		} else if (ts.years) {
			count++;
		}

		if (!(units & MONTHS) || (count >= max)) {
			// ripple months down to days
			if (ts.months) {
				ts.days += borrowMonths(ts.refMonth, ts.months);
			}
			delete ts.months;

			if (ts.days >= DAYS_PER_WEEK) {
				// ripple day overflow back up to weeks
				ts.weeks += floor(ts.days / DAYS_PER_WEEK);
				ts.days %= DAYS_PER_WEEK;
			}

		} else if (ts.months) {
			count++;
		}

		if (!(units & WEEKS) || (count >= max)) {
			// ripple weeks down to days
			ts.days += ts.weeks * DAYS_PER_WEEK;
			delete ts.weeks;

		} else if (ts.weeks) {
			count++;
		}

		if (!(units & DAYS) || (count >= max)) {
			//ripple days down to hours
			ts.hours += ts.days * HOURS_PER_DAY;
			delete ts.days;

		} else if (ts.days) {
			count++;
		}

		if (!(units & HOURS) || (count >= max)) {
			// ripple hours down to minutes
			ts.minutes += ts.hours * MINUTES_PER_HOUR;
			delete ts.hours;

		} else if (ts.hours) {
			count++;
		}

		if (!(units & MINUTES) || (count >= max)) {
			// ripple minutes down to seconds
			ts.seconds += ts.minutes * SECONDS_PER_MINUTE;
			delete ts.minutes;

		} else if (ts.minutes) {
			count++;
		}

		if (!(units & SECONDS) || (count >= max)) {
			// ripple seconds down to milliseconds
			ts.milliseconds += ts.seconds * MILLISECONDS_PER_SECOND;
			delete ts.seconds;

		} else if (ts.seconds) {
			count++;
		}

		// nothing to ripple milliseconds down to
		// so ripple back up to smallest existing unit as a fractional value
		if (!(units & MILLISECONDS) || (count >= max)) {
			fractional(ts, digits);
		}
	}

	/**
	 * Populates the Timespan object
	 * 
	 * @private
	 * @param {Timespan} ts
	 * @param {?Date} start the starting date
	 * @param {?Date} end the ending date
	 * @param {number} units the units to populate
	 * @param {number} max number of labels to output
	 * @param {number} digits max number of decimal digits to output
	 */
	function populate(ts, start, end, units, max, digits) {
		var now = new Date();

		ts.start = start = start || now;
		ts.end = end = end || now;
		ts.units = units;

		ts.value = end.getTime() - start.getTime();
		if (ts.value < 0) {
			// swap if reversed
			var tmp = end;
			end = start;
			start = tmp;
		}

		// reference month for determining days in month
		ts.refMonth = new Date(start.getFullYear(), start.getMonth(), 15, 12, 0, 0);
		try {
			// reset to initial deltas
			ts.millennia = 0;
			ts.centuries = 0;
			ts.decades = 0;
			ts.years = end.getFullYear() - start.getFullYear();
			ts.months = end.getMonth() - start.getMonth();
			ts.weeks = 0;
			ts.days = end.getDate() - start.getDate();
			ts.hours = end.getHours() - start.getHours();
			ts.minutes = end.getMinutes() - start.getMinutes();
			ts.seconds = end.getSeconds() - start.getSeconds();
			ts.milliseconds = end.getMilliseconds() - start.getMilliseconds();

			ripple(ts);
			pruneUnits(ts, units, max, digits);

		} finally {
			delete ts.refMonth;
		}

		return ts;
	}

	/**
	 * Determine an appropriate refresh rate based upon units
	 * 
	 * @private
	 * @param {number} units the units to populate
	 * @return {number} milliseconds to delay
	 */
	function getDelay(units) {
		if (units & MILLISECONDS) {
			// refresh very quickly
			return MILLISECONDS_PER_SECOND / 30; //30Hz
		}

		if (units & SECONDS) {
			// refresh every second
			return MILLISECONDS_PER_SECOND; //1Hz
		}

		if (units & MINUTES) {
			// refresh every minute
			return MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE;
		}

		if (units & HOURS) {
			// refresh hourly
			return MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR;
		}
		
		if (units & DAYS) {
			// refresh daily
			return MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY;
		}

		// refresh the rest weekly
		return MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY * DAYS_PER_WEEK;
	}

	/**
	 * API entry point
	 * 
	 * @public
	 * @param {Date|number|Timespan|null|function(Timespan,number)} start the starting date
	 * @param {Date|number|Timespan|null|function(Timespan,number)} end the ending date
	 * @param {number=} units the units to populate
	 * @param {number=} max number of labels to output
	 * @param {number=} digits max number of decimal digits to output
	 * @return {Timespan|number}
	 */
	function countdown(start, end, units, max, digits) {
		var callback;

		// ensure some units or use defaults
		units = +units || DEFAULTS;
		// max must be positive
		max = (max > 0) ? max : NaN;
		// clamp digits to an integer between [0, 20]
		digits = (digits > 0) ? (digits < 20) ? Math.round(digits) : 20 : 0;

		// ensure start date
		var startTS = null;
		if ('function' === typeof start) {
			callback = start;
			start = null;

		} else if (!(start instanceof Date)) {
			if ((start !== null) && isFinite(start)) {
				start = new Date(+start);
			} else {
				if ('object' === typeof startTS) {
					startTS = /** @type{Timespan} */(start);
				}
				start = null;
			}
		}

		// ensure end date
		var endTS = null;
		if ('function' === typeof end) {
			callback = end;
			end = null;

		} else if (!(end instanceof Date)) {
			if ((end !== null) && isFinite(end)) {
				end = new Date(+end);
			} else {
				if ('object' === typeof end) {
					endTS = /** @type{Timespan} */(end);
				}
				end = null;
			}
		}

		// must wait to interpret timespans until after resolving dates
		if (startTS) {
			start = addToDate(startTS, end);
		}
		if (endTS) {
			end = addToDate(endTS, start);
		}

		if (!start && !end) {
			// used for unit testing
			return new Timespan();
		}

		if (!callback) {
			return populate(new Timespan(), /** @type{Date} */(start), /** @type{Date} */(end), /** @type{number} */(units), /** @type{number} */(max), /** @type{number} */(digits));
		}

		// base delay off units
		var delay = getDelay(units),
			timerId,
			fn = function() {
				callback(
					populate(new Timespan(), /** @type{Date} */(start), /** @type{Date} */(end), /** @type{number} */(units), /** @type{number} */(max), /** @type{number} */(digits)),
					timerId
				);
			};

		fn();
		return (timerId = setInterval(fn, delay));
	}

	/**
	 * @public
	 * @const
	 * @type {number}
	 */
	countdown.MILLISECONDS = MILLISECONDS;

	/**
	 * @public
	 * @const
	 * @type {number}
	 */
	countdown.SECONDS = SECONDS;

	/**
	 * @public
	 * @const
	 * @type {number}
	 */
	countdown.MINUTES = MINUTES;

	/**
	 * @public
	 * @const
	 * @type {number}
	 */
	countdown.HOURS = HOURS;

	/**
	 * @public
	 * @const
	 * @type {number}
	 */
	countdown.DAYS = DAYS;

	/**
	 * @public
	 * @const
	 * @type {number}
	 */
	countdown.WEEKS = WEEKS;

	/**
	 * @public
	 * @const
	 * @type {number}
	 */
	countdown.MONTHS = MONTHS;

	/**
	 * @public
	 * @const
	 * @type {number}
	 */
	countdown.YEARS = YEARS;

	/**
	 * @public
	 * @const
	 * @type {number}
	 */
	countdown.DECADES = DECADES;

	/**
	 * @public
	 * @const
	 * @type {number}
	 */
	countdown.CENTURIES = CENTURIES;

	/**
	 * @public
	 * @const
	 * @type {number}
	 */
	countdown.MILLENNIA = MILLENNIA;

	/**
	 * @public
	 * @const
	 * @type {number}
	 */
	countdown.DEFAULTS = DEFAULTS;

	/**
	 * @public
	 * @const
	 * @type {number}
	 */
	countdown.ALL = MILLENNIA|CENTURIES|DECADES|YEARS|MONTHS|WEEKS|DAYS|HOURS|MINUTES|SECONDS|MILLISECONDS;

	/**
	 * Customize the format settings.
	 * @public
	 * @param {Object} format settings object
	 */
	var setFormat = countdown.setFormat = function(format) {
		if (!format) { return; }

		if ('singular' in format || 'plural' in format) {
			var singular = format.singular || [];
			if (singular.split) {
				singular = singular.split('|');
			}
			var plural = format.plural || [];
			if (plural.split) {
				plural = plural.split('|');
			}

			for (var i=LABEL_MILLISECONDS; i<=LABEL_MILLENNIA; i++) {
				// override any specified units
				LABELS_SINGLUAR[i] = singular[i] || LABELS_SINGLUAR[i];
				LABELS_PLURAL[i] = plural[i] || LABELS_PLURAL[i];
			}
		}

		if ('string' === typeof format.last) {
			LABEL_LAST = format.last;
		}
		if ('string' === typeof format.delim) {
			LABEL_DELIM = format.delim;
		}
		if ('string' === typeof format.empty) {
			LABEL_NOW = format.empty;
		}
		if ('function' === typeof format.formatNumber) {
			formatNumber = format.formatNumber;
		}
		if ('function' === typeof format.formatter) {
			formatter = format.formatter;
		}
	};

	/**
	 * Revert to the default formatting.
	 * @public
	 */
	var resetFormat = countdown.resetFormat = function() {
		LABELS_SINGLUAR = ' millisecond| second| minute| hour| day| week| month| year| decade| century| millennium'.split('|');
		LABELS_PLURAL = ' milliseconds| seconds| minutes| hours| days| weeks| months| years| decades| centuries| millennia'.split('|');
		LABEL_LAST = ' and ';
		LABEL_DELIM = ', ';
		LABEL_NOW = '';
		formatNumber = function(value) { return value; };
		formatter = plurality;
	};

	/**
	 * Override the unit labels.
	 * @public
	 * @param {string|Array=} singular a pipe ('|') delimited list of singular unit name overrides
	 * @param {string|Array=} plural a pipe ('|') delimited list of plural unit name overrides
	 * @param {string=} last a delimiter before the last unit (default: ' and ')
	 * @param {string=} delim a delimiter to use between all other units (default: ', ')
	 * @param {string=} empty a label to use when all units are zero (default: '')
	 * @param {function(number):string=} formatNumber a function which formats numbers as a string
	 * @param {function(number,number):string=} formatter a function which formats a number/unit pair as a string
	 * @deprecated since version 2.6.0
	 */
	countdown.setLabels = function(singular, plural, last, delim, empty, formatNumber, formatter) {
		setFormat({
			singular: singular,
			plural: plural,
			last: last,
			delim: delim,
			empty: empty,
			formatNumber: formatNumber,
			formatter: formatter
		});
	};

	/**
	 * Revert to the default unit labels.
	 * @public
	 * @deprecated since version 2.6.0
	 */
	countdown.resetLabels = resetFormat;

	resetFormat();

	if (module && module.exports) {
		module.exports = countdown;

	} else if (typeof window.define === 'function' && typeof window.define.amd !== 'undefined') {
		window.define('countdown', [], function() {
			return countdown;
		});
	}

	return countdown;

})(module);


/***/ }),

/***/ 1232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_list_accordion_list__ = __webpack_require__(1233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timer_timer__ = __webpack_require__(1234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__zamna_feed_zamna_feed__ = __webpack_require__(1235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment__ = __webpack_require__(1229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gallery_item_gallery_item__ = __webpack_require__(1236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__media_item_media_item__ = __webpack_require__(1237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__exam_feedback_modal_exam_feedback_modal__ = __webpack_require__(1238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stat_structure_item_stat_structure_item_component__ = __webpack_require__(1239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__exam_questions_widget_exam_questions_widget__ = __webpack_require__(1240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__exam_results_tag_structure_exam_results_tag_structure__ = __webpack_require__(1241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__zamna_radio_zamna_radio__ = __webpack_require__(1242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__accordion_list_accordion_list__["a" /* AccordionListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__timer_timer__["a" /* TimerComponent */],
            __WEBPACK_IMPORTED_MODULE_5__zamna_feed_zamna_feed__["a" /* ZamnaFeedComponent */],
            __WEBPACK_IMPORTED_MODULE_7__gallery_item_gallery_item__["a" /* GalleryItemComponent */],
            __WEBPACK_IMPORTED_MODULE_8__media_item_media_item__["a" /* MediaItemComponent */],
            __WEBPACK_IMPORTED_MODULE_9__exam_feedback_modal_exam_feedback_modal__["a" /* ExamFeedbackModalComponent */],
            __WEBPACK_IMPORTED_MODULE_10__stat_structure_item_stat_structure_item_component__["a" /* StatStructureItemComponent */],
            __WEBPACK_IMPORTED_MODULE_11__exam_questions_widget_exam_questions_widget__["a" /* ExamQuestionsWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_12__exam_results_tag_structure_exam_results_tag_structure__["a" /* ExamResultsTagStructureComponent */],
            __WEBPACK_IMPORTED_MODULE_9__exam_feedback_modal_exam_feedback_modal__["a" /* ExamFeedbackModalComponent */],
            __WEBPACK_IMPORTED_MODULE_13__zamna_radio_zamna_radio__["a" /* ZamnaRadioComponent */],
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_6_angular2_moment__["MomentModule"]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__accordion_list_accordion_list__["a" /* AccordionListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__timer_timer__["a" /* TimerComponent */],
            __WEBPACK_IMPORTED_MODULE_5__zamna_feed_zamna_feed__["a" /* ZamnaFeedComponent */],
            __WEBPACK_IMPORTED_MODULE_7__gallery_item_gallery_item__["a" /* GalleryItemComponent */],
            __WEBPACK_IMPORTED_MODULE_8__media_item_media_item__["a" /* MediaItemComponent */],
            __WEBPACK_IMPORTED_MODULE_9__exam_feedback_modal_exam_feedback_modal__["a" /* ExamFeedbackModalComponent */],
            __WEBPACK_IMPORTED_MODULE_10__stat_structure_item_stat_structure_item_component__["a" /* StatStructureItemComponent */],
            __WEBPACK_IMPORTED_MODULE_11__exam_questions_widget_exam_questions_widget__["a" /* ExamQuestionsWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_12__exam_results_tag_structure_exam_results_tag_structure__["a" /* ExamResultsTagStructureComponent */],
            __WEBPACK_IMPORTED_MODULE_9__exam_feedback_modal_exam_feedback_modal__["a" /* ExamFeedbackModalComponent */],
            __WEBPACK_IMPORTED_MODULE_13__zamna_radio_zamna_radio__["a" /* ZamnaRadioComponent */],
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 1233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AccordionListComponent = class AccordionListComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    toggleSection(i) {
        this.information[i].open = !this.information[i].open;
    }
    toggleItem(i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    }
    openClase(item, type) {
        if (!item.video)
            return;
        this.navCtrl.push('ClaseDetailPage', { id: item.id, type });
    }
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

//# sourceMappingURL=accordion-list.js.map

/***/ }),

/***/ 1234:
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

let TimerComponent = class TimerComponent {
    ngOnInit() {
        this.initTimer();
    }
    hasFinished() {
        return this.timer.hasFinished;
    }
    initTimer() {
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
    }
    startTimer() {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    }
    pauseTimer() {
        this.timer.runTimer = false;
    }
    resumeTimer() {
        this.startTimer();
    }
    timerTick() {
        setTimeout(() => {
            if (!this.timer.runTimer) {
                return;
            }
            this.timer.secondsRemaining--;
            this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
            if (this.timer.secondsRemaining > 0) {
                this.timerTick();
            }
            else {
                this.timer.hasFinished = true;
            }
        }, 1000);
    }
    getSecondsAsDigitalClock(inputSeconds) {
        const secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        const hours = Math.floor(secNum / 3600);
        const minutes = Math.floor((secNum - (hours * 3600)) / 60);
        const seconds = secNum - (hours * 3600) - (minutes * 60);
        let hoursString = '';
        let minutesString = '';
        let secondsString = '';
        hoursString = (hours < 10) ? '0' + hours : hours.toString();
        minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
        secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    }
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

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 1235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZamnaFeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_models__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(7);
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






let ZamnaFeedComponent = class ZamnaFeedComponent {
    constructor(modal, afs, auth, toast) {
        this.modal = modal;
        this.afs = afs;
        this.auth = auth;
        this.toast = toast;
        /* public feed$: Observable<any[]> = this.back.loadFeed().pipe(map(feed => feed.filter(f => f.user))) */
        this.feed$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].POST).valueChanges();
        this.loader = false;
        this.post = {};
    }
    openComments(post) {
        return __awaiter(this, void 0, void 0, function* () {
            this.loader = true;
            const comments = yield this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].POST_COMMENT, ref => ref
                .where('post', '==', post.id))
                .valueChanges()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["take"])(1))
                .toPromise();
            const m = this.modal.create('PostCommentsPage', { comments, post: post.id });
            m.present();
            this.loader = false;
        });
    }
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
    isLiked(post) {
        if (!this.auth.user)
            return false;
        if (!post)
            return false;
        if (!post.likes)
            return false;
        return post.likes.indexOf(this.auth.user.uid) >= 0;
    }
    toggleLike(post, id, likes = []) {
        this.isLiked(post) ? likes.splice(likes.indexOf(this.auth.user.uid), 1) : likes.push(this.auth.user.uid);
        this.afs.doc(`${__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].POST}/${id}`).update({ likes });
    }
    removePost(id) {
        this.afs.doc(`${__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].POST}/${id}`).delete();
    }
    addPost() {
        return __awaiter(this, void 0, void 0, function* () {
            this.post = Object.assign({}, this.post, { id: this.afs.createId(), user: this.auth.user, likes: [], date: new Date().toISOString(), image: null });
            yield this.afs.collection(__WEBPACK_IMPORTED_MODULE_3__app_app_models__["a" /* Collections */].POST).doc(this.post.id).set(this.post);
            this.toast.create({ message: 'Post creado correctamente', duration: 2000 }).present();
        });
    }
};
ZamnaFeedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'zamna-feed',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/components/zamna-feed/zamna-feed.html"*/'<div class="zamna-feed" *ngIf="auth.loggedIn">\n\n  <div class="feed-input">\n    <ion-card>\n      <ion-list>\n        <ion-item>\n          <ion-textarea [(ngModel)]="post.text" placeholder="¿Quieres compartir o preguntar algo con tus compañeros Zamná? :)"></ion-textarea>\n        </ion-item>\n        <ion-item>\n          <button (click)="addPost()" ion-button block>Compartir</button>\n        </ion-item>\n      </ion-list>\n    </ion-card>\n  </div>\n\n  <div class="feed-list" *ngIf="feed$ | async as feed">\n\n    <div class="feed-post" *ngFor="let post of feed.reverse()">\n\n      <ion-card>\n\n        <ion-item *ngIf="post.user">\n          <ion-avatar item-start>\n            <img [src]="post.user.photoURL">\n          </ion-avatar>\n          <h2>{{post.user.displayName}} {{post.user.lastName}}</h2>\n          <p>{{post.date | amCalendar}}</p>\n        </ion-item>\n\n        <img [src]="post.img" *ngIf="post.img">\n\n        <ion-card-content *ngIf="post.text">\n          <p>{{post.text}}</p>\n        </ion-card-content>\n\n        <ion-row>\n          <ion-col>\n            <button ion-button icon-start clear small [color]="post.likes.indexOf(auth.user.uid) >= 0 ? \'primary\' : \'disabled\'" (click)="toggleLike(post, post.id, post.likes)" [disabled]="loader">\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>{{post.likes.length}} Likes</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-start clear small (click)="openComments(post)" [disabled]="loader">\n              <ion-icon name="text"></ion-icon>\n              <div>Comentarios</div>\n            </button>\n          </ion-col>\n        </ion-row>\n\n      </ion-card>\n    </div>\n\n  </div>\n\n</div>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/components/zamna-feed/zamna-feed.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */]])
], ZamnaFeedComponent);

//# sourceMappingURL=zamna-feed.js.map

/***/ }),

/***/ 1236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_models__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(28);
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





let GalleryItemComponent = class GalleryItemComponent {
    constructor(afs, navCtrl) {
        this.afs = afs;
        this.navCtrl = navCtrl;
        this.galleries = [];
    }
    ngOnInit() {
        if (this.gallery) {
            this.loadGalleries(this.gallery.id);
        }
    }
    loadGalleries(cat_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const galleries = yield this.afs.collection(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].GALLERY, ref => ref
                .where('cat_id', '==', cat_id))
                .valueChanges()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["take"])(1))
                .toPromise();
            this.galleries = galleries;
        });
    }
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

//# sourceMappingURL=gallery-item.js.map

/***/ }),

/***/ 1237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_models__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(7);
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





let MediaItemComponent = class MediaItemComponent {
    constructor(iab, afs) {
        this.iab = iab;
        this.afs = afs;
        this.medias = [];
    }
    ngOnInit() {
        this.loadMedias(this.media.id);
    }
    openMedia(url) {
        //this.iab.create(this.back.API + url.replace('/file', '/fileNew'), '_system')
        this.iab.create(url, '_system');
    }
    loadMedias(cat_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const medias = yield this.afs.collection(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].MEDIA, ref => ref
                .where('categoria.id', '==', cat_id))
                .valueChanges()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["take"])(1))
                .toPromise();
            this.medias = medias;
        });
    }
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

//# sourceMappingURL=media-item.js.map

/***/ }),

/***/ 1238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamFeedbackModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_models__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let ExamFeedbackModalComponent = class ExamFeedbackModalComponent {
    constructor(afs, viewCtrl) {
        this.afs = afs;
        this.viewCtrl = viewCtrl;
        this.stats = [];
    }
    set lastQuestion(qs) {
        this.stats = [];
        for (const q of qs) {
            let payload = {
                q,
                stat$: this.afs
                    .collection(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].QUESTION_STAT)
                    .doc(q.id)
                    .valueChanges()
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(stat => stat
                    ? Object.assign({}, stat, { stat: Object.entries(stat.stat) }) : {
                    id: `${__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].QUESTION_STAT}/${q.id}`,
                    question: q,
                    stat: [],
                    total: 0
                }))
            };
            this.stats.push(payload);
        }
    }
    get lastQuestion() {
        return [];
    }
    ngOnInit() { }
    closeModal() {
        this.viewCtrl.dismiss();
    }
    filterStats(question, stats) {
        const ans = question && question.respuestas
            ? question.respuestas.map(r => r.text)
            : [];
        return stats ? stats.filter(s => ans.includes(s[0])) : [];
    }
    getPercent(total, n, stats) {
        const percentTotal = stats.map(s => s[1]).reduce((a, b) => a + b, 0);
        return n * 100 / percentTotal;
    }
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
        selector: "exam-feedback-modal",template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/components/exam-feedback-modal/exam-feedback-modal.html"*/'<ion-card class="w-100" *ngFor="let stat of stats" style="margin-bottom: 2rem">\n  <div class="row">\n\n    <div class="col-md-12 mb-2" style="max-height: 200px;overflow-y: auto;">\n      <p>\n        <strong>{{stat.q.text}}</strong>\n      </p>\n    </div>\n\n    <div class="col-md-12">\n      <h5 class="c-epsi-primary">¿Elegiste la correcta?</h5>\n    </div>\n\n    <ion-list *ngIf="stat.q.respuestas as rList" text-wrap>\n      <ion-item *ngFor="let r of rList">\n        <ion-icon item-start name="checkmark" *ngIf="stat.q.correcta == r.id" color="bien"></ion-icon>\n        <ion-icon item-start name="close" *ngIf="stat.q.correcta != r.id" color="muyMal"></ion-icon>\n        <h2 class="ml-2" [ngClass]="{\'c-epsi-primary text-bolder\': lastSelected == r.id}">{{r.text}}</h2>\n      </ion-item>\n    </ion-list>\n\n    <hr>\n\n    <div class="col-md-12 mt-4" *ngIf="stat.q.feedback">\n      <h5 class="m-0">Feedback</h5>\n      <p class="m-0 m-t1">{{stat.q.feedback}}</p>\n      <!--<pre>{{stat | json}}</pre>-->\n    </div>\n\n    <hr>\n\n    <div class="col-md-12 w-100 mt-4" *ngIf="stat.stat$ | async as _stat">\n      <h5 class="m-0 text-danger">Y los demás... ¿Qué eligieron?</h5>\n      <!-- <pre>{{_stat.stat | json}}</pre> -->\n      <ion-list class="list-group" *ngIf="_stat.stat">\n        <ion-item class="w-100 list-group-item flex flex-col flex-start" *ngFor="let s of filterStats(stat.q, _stat.stat)">\n          <strong> <span\n              class="c-epsi-primary">{{ getPercent(_stat.total, s[1], filterStats(stat.q, _stat.stat)) | number }}%</span>\n            {{s[0]}}</strong>\n          <!-- <pre>{{ s | json }}</pre> -->\n          <div class="barra-container" [style.width.%]="getPercent(_stat.total, s[1], filterStats(stat.q, _stat.stat))">\n            <div class="barra"></div>\n          </div>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <!-- <div class="col-md-12 mt-4" *ngIf="stat.stat$ | async as _stat">\n      <h5 class="m-0 text-danger">Y los demás... ¿Qué eligieron?</h5>\n      <ion-list class="list-group" *ngIf="_stat.stat">\n        <ion-item *ngFor="let s of filterStats(stat.q, _stat.stat)">\n          <strong> <span class="c-epsi-primary">{{(s[1] / _stat.total) * 100 | number}}%</span> {{s[0]}}</strong>\n          <div class="barra-container" [style.width.%]="(s[1] / _stat.total) * 100">\n            <div class="barra"></div>\n          </div>\n        </ion-item>\n      </ion-list>\n    </div> -->\n\n  </div>\n  <hr>\n</ion-card>\n\n<div class="col-md-12 flex-loader mt-2 w-100">\n  <button ion-button (click)="closeModal()">Seguir</button>\n</div>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/components/exam-feedback-modal/exam-feedback-modal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["x" /* ViewController */]])
], ExamFeedbackModalComponent);

//# sourceMappingURL=exam-feedback-modal.js.map

/***/ }),

/***/ 1239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatStructureItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_models__ = __webpack_require__(157);
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






let StatStructureItemComponent = class StatStructureItemComponent {
    constructor(afs, auth, stats) {
        this.afs = afs;
        this.auth = auth;
        this.stats = stats;
        this.children = [];
        this.haveChildren = false;
        this.showChildren = false;
        this.loaded = false;
    }
    ngOnInit() {
        if (!this.view)
            return;
        this.children$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].STAT_VIEW, ref => ref
            .where('parent', '==', this.view.id))
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(children => {
            this.haveChildren = children.length > 0;
            if (this.haveChildren)
                this.children = children;
        }));
        this.children$.subscribe();
        this.auth.user$.subscribe((_user) => __awaiter(this, void 0, void 0, function* () {
            if (this.loaded)
                return;
            if (!_user)
                return;
            if (this.promedio)
                return;
            const tag = this.view.includeTags[0];
            yield this.loadTagPromedio(tag, this.user ? this.user : _user.uid);
        }));
    }
    loadTagPromedio(tag, uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const promedio = yield this.stats.computeUserTagAverage(tag, uid);
            yield this.afs.doc(`${__WEBPACK_IMPORTED_MODULE_5__app_app_models__["a" /* Collections */].USER}/${uid}`).set({ structure: { [tag]: promedio } }, { merge: true });
            this.promedio = isNaN(promedio) ? 0 : promedio;
            console.log(tag, promedio);
            this.loaded = true;
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StatStructureItemComponent.prototype, "view", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatStructureItemComponent.prototype, "user", void 0);
StatStructureItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'epsi-stat-structure-item',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/components/stat-structure-item/stat-structure-item.component.html"*/'<div class="epsi-stat-structure-item" *ngIf="view">\n\n  <button type="button" (click)="showChildren = true" *ngIf="haveChildren && !showChildren">\n    <ion-icon name="add"></ion-icon>\n  </button>\n  <button type="button" (click)="showChildren = false" *ngIf="haveChildren && showChildren">\n    <ion-icon name="close"></ion-icon>\n  </button>\n\n  <span>{{view.name}}</span>\n  <strong class="ml-2">{{promedio * 100 | number}}%</strong>\n\n  <ul *ngIf="showChildren">\n    <li *ngFor="let v of children">\n      <epsi-stat-structure-item [view]="v"></epsi-stat-structure-item>\n    </li>\n  </ul>\n\n</div>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/components/stat-structure-item/stat-structure-item.component.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__["AngularFirestore"],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsProvider */]])
], StatStructureItemComponent);

//# sourceMappingURL=stat-structure-item.component.js.map

/***/ }),

/***/ 1240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamQuestionsWidgetComponent; });
/* unused harmony export ConnectionStatusEnum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_models__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers_exam_reducer__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_stats_stats__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_data_data__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_operators__ = __webpack_require__(7);
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














const countdown = __webpack_require__(1231);
countdown.setLabels(' milissegundo| segundo| minuto| hora| día| semana| mes| año| decada| siglo| milenio', ' milisegundos| segundos| minutos| horas| días| semanas| meses| años| décadas| siglos| milenios', ' ', ' ', 'ahora');
let ExamQuestionsWidgetComponent = class ExamQuestionsWidgetComponent {
    constructor(afs, auth, store, toast, stat, data, navCtrl, modal, alert, load, network, http, viewCtrl) {
        this.afs = afs;
        this.auth = auth;
        this.store = store;
        this.toast = toast;
        this.stat = stat;
        this.data = data;
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.alert = alert;
        this.load = load;
        this.network = network;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.isPreclase = false;
        this.questionChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.answerSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.timer = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.startTime = 0;
        this.lastStatus = ConnectionStatusEnum.Online;
        this.online = false;
        this.sending = false;
        this.examState$ = this.store.select('exam').pipe(Object(__WEBPACK_IMPORTED_MODULE_13_rxjs_operators__["tap"])(console.log));
        this.networkChanges();
    }
    ngOnDestroy() {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__reducers_exam_reducer__["c" /* ResetTimer */]());
    }
    ngOnInit() {
        if (this.exam.duration) {
            const alert = this.alert.create({
                message: '¿Quieres iniciar el exámen con tiempo?',
                buttons: [
                    { text: 'Sí', handler: () => this.handleSetTimer(this.exam.duration * 60 * 1000) },
                    { text: 'No', role: 'cancel' }
                ]
            });
            alert.present();
        }
        /*const lastExam = localStorage.getItem('last-exam')
        if (lastExam && lastExam != this.exam.id) {
          this.store.dispatch(new ResetExam())
          localStorage.setItem('last-exam', this.exam.id)
        }*/
        this.question = this.exam.formattedQuestions[0];
        this.setInitialResults();
        // Si ya lo resolvio
        this.examState$.subscribe(examState => {
            /* if (examState.index && this.lastIndex != examState.index) this.handleIndexChange(examState) */
            if (examState.index != null && this.lastIndex != examState.index) {
                this.handleIndexChange(examState);
            }
            if (examState.finished) {
                this.handleExamFinish(examState);
            }
            if (examState.timer && !this.duration) {
                this.handleSetTimer(examState.timer * 60 * 1000);
            }
            this.lastIndex = examState.index;
        });
        if (this.exam.type == __WEBPACK_IMPORTED_MODULE_1__app_app_models__["b" /* ExamTypes */].SIMULACRO) {
            setTimeout(() => this.checkIfResuelto(this.exam.id), 1000);
        }
    }
    networkChanges() {
        this.network.onchange().subscribe((data) => {
            console.log('network change', data);
        });
        this.network.onDisconnect().subscribe(() => {
            this.lastStatus = ConnectionStatusEnum.Offline;
        });
        this.network.onConnect().subscribe(() => {
            this.lastStatus = ConnectionStatusEnum.Online;
        });
    }
    checkConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.http.get('http://www.mocky.io/v2/5185415ba171ea3a00704eed').toPromise();
                this.lastStatus = ConnectionStatusEnum.Online;
            }
            catch (error) {
                this.lastStatus = ConnectionStatusEnum.Offline;
            }
            finally {
                console.log(this.lastStatus);
                console.log(this.lastStatus === ConnectionStatusEnum.Online);
            }
        });
    }
    checkIfResuelto(examId) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield this.data.getCollectionQuery(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].EXAM_RESULT, ref => ref
                .where('exam', '==', examId)
                .where('user', '==', this.auth.user.uid));
            if (results && results.length > 0) {
                this.toast.create({ message: 'No puedes volver a resolver éste Exámen Simulacro', duration: 4000 }).present();
                this.navCtrl.setRoot('HomePage');
            }
        });
    }
    handleIndexChange(state) {
        console.log('New Exam Index: ' + state.index);
        this.setQuestion(state.index);
        this.online = this.lastStatus === ConnectionStatusEnum.Online;
    }
    handleExamFinish(state) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.sending)
                return;
            this.sending = true;
            const l = this.load.create({ content: 'Enviando resultados...' });
            l.present();
            yield this.checkConnection();
            console.log(this.lastStatus);
            try {
                console.log('Handling Exam Finish', state.results);
                console.log('navigato.onLine', this.lastStatus === ConnectionStatusEnum.Online);
                // Set final time
                this.results.completedIn = (Date.now() - this.startTime) / 1000;
                // Save last question
                this.saveCache(this.question, state.index, state.selectedAnswer, true);
                // Calculate Average
                const questions = Object.values(state.results.questions);
                this.results.promedio = questions.filter(q => q.correcta).length / questions.length;
                // Re-set exam type
                this.results.exam_type = this.exam.type;
                // Save all question tags in one place
                this.results.tags = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.uniq(__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.flattenDeep(questions.map(q => q.raw.tags)));
                console.log(this.results.tags, questions.map(q => q.raw.tags));
                // Set completed on user
                if (this.auth.user && this.lastStatus === ConnectionStatusEnum.Online) {
                    const completed = this.auth.user.completedExams ? this.auth.user.completedExams : {};
                    completed[this.exam.id] = true;
                    yield this.afs.collection(__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].USER).doc(this.auth.user.uid).update({ completedExams: completed });
                }
                // Create result doc
                console.log(state.results, this.results);
                if (this.lastStatus === ConnectionStatusEnum.Online)
                    yield this.afs.doc(`${__WEBPACK_IMPORTED_MODULE_1__app_app_models__["a" /* Collections */].EXAM_RESULT}/${state.results.id}`).set(JSON.parse(JSON.stringify(this.results)));
                if (this.lastStatus !== ConnectionStatusEnum.Online)
                    localStorage.setItem('result-offline-' + state.results.id, JSON.stringify(this.results));
                /* this.toastr.success('Haz completado tu exámen.'); */
                this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__reducers_exam_reducer__["b" /* ResetExam */]());
                /*this.setInitialResults()*/
                this.selectedAnswer = null;
                this.lastIndex = 0;
                this.question = this.exam.formattedQuestions[this.lastIndex];
                l.dismiss();
                if (this.lastStatus !== ConnectionStatusEnum.Online) {
                    this.toast.create({ message: 'Tus resultados han sido guardados, serán enviado cuando se detecte conexión a internet.', duration: 4000 }).present();
                    this.viewCtrl.dismiss();
                    this.navCtrl.setRoot('HomePage');
                    this.sending = false;
                    return;
                }
                // Redirect to exam results in all exam types except Preclase
                if (this.exam.type != __WEBPACK_IMPORTED_MODULE_1__app_app_models__["b" /* ExamTypes */].PRECLASE) {
                    this.navCtrl.setPages([
                        { page: 'HomePage' },
                        { page: 'ResultadosExamenPage', params: { id: state.results.id } },
                    ]);
                    this.sending = false;
                }
                else {
                    /* this.modal.getModal('preclaseExamModal').close(); */
                    this.viewCtrl.dismiss();
                }
            }
            catch (error) {
                console.log(error);
                l.dismiss();
                this.sending = false;
            }
        });
    }
    handleSetTimer(duration) {
        this.duration = duration;
        console.log('duration', duration);
        const timer = setInterval(() => {
            if (this.duration > 0) {
                this.duration -= 1000;
            }
            /*const time_format = this.exam.type == ExamTypes.SIMULACRO ? countdown.HOURS | countdown.MINUTES | countdown.SECONDS : countdown.MINUTES | countdown.SECONDS*/
            const time_format = countdown.HOURS | countdown.MINUTES | countdown.SECONDS;
            this.duration_label = countdown(__WEBPACK_IMPORTED_MODULE_4_moment___default()().add(this.duration, 'milliseconds').toDate(), null, time_format)
                .toString()
                .replace(/<small>|<\/small>/g, '');
            this.timer.next(this.duration_label);
            /* this.duration_label = moment()
              .startOf('day')
              .seconds(this.duration * 60)
              .format('H:mm:ss') */
        }, 1000);
        setTimeout(() => {
            this.finishExam();
            clearInterval(timer);
        }, duration);
    }
    canGoNext(questions) {
        return !__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.every(questions, q => q.selectedAnswerId);
    }
    get questionsLeft() {
        if (!this.exam) {
            return false;
        }
        if (!this.exam.formattedQuestions) {
            return false;
        }
        if (this.exam.formattedQuestions.length < 0) {
            return false;
        }
        return this.lastIndex < this.exam.formattedQuestions.length;
    }
    get isLastQuestion() {
        if (!this.exam) {
            return false;
        }
        if (!this.exam.formattedQuestions) {
            return false;
        }
        if (this.exam.formattedQuestions.length < 0) {
            return false;
        }
        return this.lastIndex + 1 == this.exam.formattedQuestions.length;
    }
    get canGoBack() {
        if (!this.exam) {
            return false;
        }
        if (!this.exam.formattedQuestions) {
            return false;
        }
        if (this.exam.formattedQuestions.length < 0) {
            return false;
        }
        return this.lastIndex > 0;
    }
    answerChanged(answer, question) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__reducers_exam_reducer__["d" /* SetAnswer */](answer));
        question.selectedAnswer = answer;
    }
    setInitialResults() {
        const id = this.afs.createId();
        console.log('set initila result', id);
        this.results = {
            id,
            questions: {},
            lastIndex: 0,
            user: null,
            exam: this.exam.id,
            date: new Date().toISOString(),
            promedio: 0,
            tags: [],
            exam_type: this.exam.type
        };
        // Set startTime
        this.startTime = Date.now();
        this.auth.user$.subscribe(user => {
            if (!user) {
                return;
            }
            this.results.user = user.uid;
        });
        if (this.isPreclase) {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__reducers_exam_reducer__["g" /* SetResults */](this.results));
        }
    }
    setQuestion(index) {
        if (!this.exam) {
            return;
        }
        if (!this.exam.questions) {
            return;
        }
        if (!this.exam.questions[index]) {
            return;
        }
        this.lastQuestion = this.question;
        this.question = this.exam.formattedQuestions[index];
        this.results.lastIndex = index;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__reducers_exam_reducer__["f" /* SetQuestion */](this.question));
        this.loadCachedAnswer(this.question);
    }
    nextQuestion(currentIndex, selectedAnswer) {
        this.lastSelected = selectedAnswer.id;
        this.saveCache(this.question, currentIndex, selectedAnswer);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__reducers_exam_reducer__["e" /* SetIndex */](currentIndex + 1));
        if (this.exam.type != __WEBPACK_IMPORTED_MODULE_1__app_app_models__["b" /* ExamTypes */].PRECLASE && this.exam.type != __WEBPACK_IMPORTED_MODULE_1__app_app_models__["b" /* ExamTypes */].SIMULACRO) {
            /* this.modal.getModal('examFeedbackModal').open() */
            this.modal.create('ExamFeedbackPage', { q: this.lastQuestion, selected: this.lastSelected }).present();
        }
        this.stat.updateQuestionStat(this.lastQuestion, selectedAnswer);
        // this.store.dispatch(new SetAnswer(null)) removed because we load the cached answer
        /* setTimeout(() => this.scrollTo.scrollTo({ target: 'scrollAnchor' }), 500); */
    }
    prevQuestion(currentIndex, selectedAnswer) {
        this.saveCache(this.question, currentIndex, selectedAnswer);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__reducers_exam_reducer__["e" /* SetIndex */](currentIndex - 1));
    }
    loadCachedAnswer(questions = []) {
        for (const [i, q] of Object.entries(questions)) {
            const cachedAnswer = localStorage.getItem(q.id);
            if (cachedAnswer) {
                console.log(this.question[i]);
                this.question[i].selectedAnswer = JSON.parse(cachedAnswer);
                this.question[i].selectedAnswerId = JSON.parse(cachedAnswer).id;
            }
        }
        /*if (q instanceof Array) {
    
          for (const qq of q) {
    
            console.log(qq.selectedAnswer)
    
            // Load cached answer
            const cachedAnswer = localStorage.getItem(qq.id)
            console.log(cachedAnswer)
            if (cachedAnswer) {
              this.store.dispatch(new SetAnswer(JSON.parse(cachedAnswer)))
            }
    
          }
    
        } else {
    
          // Load cached answer
          const cachedAnswer = localStorage.getItem(q.id)
          console.log(cachedAnswer)
          if (cachedAnswer) {
            this.store.dispatch(new SetAnswer(JSON.parse(cachedAnswer)))
          }
    
        }*/
    }
    saveCache(q, index, answer, noDispatch = false) {
        if (!answer) {
            return;
        }
        if (!q) {
            return;
        }
        /*if (!this.results) this.setInitialResults()*/
        if (q instanceof Array) {
            for (const qq of q) {
                console.log(qq.selectedAnswer);
                this.results.questions[qq.id] = {
                    raw: qq,
                    correcta: qq.selectedAnswer ? qq.selectedAnswer.id == qq.correcta : false,
                    lastModified: new Date().toISOString(),
                    selected: qq.selectedAnswer,
                    index,
                };
            }
        }
        else {
            this.results.questions[q.id] = {
                raw: q,
                correcta: answer.id == q.correcta,
                lastModified: new Date().toISOString(),
                selected: answer
            };
        }
        if (!noDispatch) {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__reducers_exam_reducer__["g" /* SetResults */](this.results));
        }
    }
    finishExam() {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__reducers_exam_reducer__["a" /* FinishExam */]());
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ExamQuestionsWidgetComponent.prototype, "exam", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ExamQuestionsWidgetComponent.prototype, "isPreclase", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ExamQuestionsWidgetComponent.prototype, "questionChanged", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ExamQuestionsWidgetComponent.prototype, "answerSelected", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ExamQuestionsWidgetComponent.prototype, "timer", void 0);
ExamQuestionsWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exam-questions-widget',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/components/exam-questions-widget/exam-questions-widget.html"*/'<ion-card class="exam-questions mt-2" *ngIf="exam.formattedQuestions && (examState$ | async) as state" #scrollAnchor>\n\n  <!-- <pre>{{state | json}}</pre> -->\n\n  <ion-list>\n    <!-- <ion-list-header *ngIf="duration_label">Tiempo restante: {{duration_label}}</ion-list-header> -->\n    <ion-list-header class="text-primary">Pregunta {{state.index + 1}} de {{exam.formattedQuestions.length}}</ion-list-header>\n  </ion-list>\n\n  <ng-container class="question-group" *ngIf="question as group">\n\n    <ng-container class="question-body" *ngFor="let question of group">\n\n      <img [src]="question.img" *ngIf="question.img" class="w-100">\n\n      <ion-card-content style="padding-top: 0 !important; margin-top: -2rem;">\n        <p style="font-size: 1.65rem; border-bottom: 1px solid #ddd; padding-bottom: 0.5rem; white-space: pre-line">\n          <strong class="text-primary">{{question.text}}</strong>\n        </p>\n      </ion-card-content>\n\n      <ion-list [(ngModel)]="question.selectedAnswerId" radio-group *ngIf="question.respuestas as respuestas else loaderQuestions" text-wrap>\n        <ion-item *ngFor="let respuesta of respuestas">\n          <ion-label>{{respuesta.text}}</ion-label>\n          <ion-radio\n            [checked]="question.selectedAnswerId && respuesta.id == question.selectedAnswerId"\n            [value]="respuesta.id" [id]="respuesta.id"\n            (ionSelect)="answerChanged(respuesta, question)" [checked]="question.selectedAnswerId && respuesta.id == question.selectedAnswerId" value="go"></ion-radio>\n        </ion-item>\n      </ion-list>\n\n      <!-- <ul *ngIf="question.respuestas as respuestas else loaderQuestions" class="answer-list">\n        <li *ngFor="let respuesta of respuestas"\n          [ngClass]="{\'answer-selected\': question.selectedAnswerId && respuesta.id == question.selectedAnswerId}">\n          <input type="radio" [name]="question.id"\n            [checked]="question.selectedAnswerId && respuesta.id == question.selectedAnswerId"\n            [(ngModel)]="question.selectedAnswerId" [value]="respuesta.id" [id]="respuesta.id"\n            (change)="answerChanged(respuesta, question)">\n          <zamna-radio [checked]="question.selectedAnswerId && respuesta.id == question.selectedAnswerId"></zamna-radio>\n          <label class="ml-2" [for]="respuesta.id">{{respuesta.text}}</label>\n        </li>\n        <pre>{{question.selectedAnswer | json}}</pre>\n      </ul> -->\n\n    </ng-container>\n\n    <div class="question-actions flex flex-row flex-start">\n      <!--<pre>{{group | json}}</pre>-->\n      <button ion-button class="btn btn-secondary mr-2" type="button" *ngIf="canGoBack"\n        (click)="prevQuestion(state.index, state.selectedAnswer)"><-</button>\n      <button ion-button [disabled]="canGoNext(group)" type="button" *ngIf="questionsLeft && !isLastQuestion"\n        (click)="nextQuestion(state.index, state.selectedAnswer)">Siguiente</button>\n      <button ion-button class="btn btn-primary ml-2" type="button" *ngIf="isLastQuestion"\n        (click)="finishExam()">Finalizar</button>\n    </div>\n\n    <ng-template #loaderQuestions>\n      <small>Cargando...</small>\n    </ng-template>\n\n    <!-- <button ion-button (click)="checkConnection()">Test Connection</button> -->\n\n    <!--<pre class="mt-2 mb-2">{{state | json}}</pre>-->\n\n  </ng-container>\n\n</ion-card>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/components/exam-questions-widget/exam-questions-widget.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
        __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["v" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_9__providers_stats_stats__["a" /* StatsProvider */],
        __WEBPACK_IMPORTED_MODULE_10__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["p" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["x" /* ViewController */]])
], ExamQuestionsWidgetComponent);

var ConnectionStatusEnum;
(function (ConnectionStatusEnum) {
    ConnectionStatusEnum[ConnectionStatusEnum["Online"] = 0] = "Online";
    ConnectionStatusEnum[ConnectionStatusEnum["Offline"] = 1] = "Offline";
})(ConnectionStatusEnum || (ConnectionStatusEnum = {}));
//# sourceMappingURL=exam-questions-widget.js.map

/***/ }),

/***/ 1241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamResultsTagStructureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ExamResultsTagStructureComponent = class ExamResultsTagStructureComponent {
    constructor() {
        this.colors = [];
        this.tags = [];
        this.tagColors = {};
        this.extraTags = [];
        this.ignored_tags = ['tagbloqueado', 'ignorartag'];
    }
    ngOnInit() {
        this.loadStruct(this.result);
        this.initTagColors();
    }
    initTagColors() {
        if (!this.colors)
            return {};
        let payload = {};
        for (let color of this.colors) {
            payload[color.tag] = color.color;
        }
        this.tagColors = payload;
    }
    loadStruct(r) {
        let struct = {};
        const allTags = Object.values(r.questions).map((q) => q.raw.tags).filter(t => t);
        /*console.log(allTags)*/
        // Get extra tags
        const withExtra = allTags.filter(t => t.length > 3).map(t => t[3]);
        const extraTags = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["uniq"])(Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["flattenDeep"])(withExtra));
        this.extraTags = extraTags.map(tag => ({
            tag,
            value: this.getPromedioByTag(tag, this.result)
        }));
        // Remove ignored tags
        const removedIgnored = allTags.map(t => t.filter(tt => !this.ignored_tags.includes(tt)));
        const removedExtras = removedIgnored.map(t => t.filter(tt => !extraTags.includes(tt)));
        /*console.log('removedExtras', removedExtras)*/
        // Set struct
        const _removedExtras = [...removedExtras];
        for (let family of _removedExtras) {
            // Get and set parent
            const parent = family.shift();
            if (!struct[parent])
                struct[parent] = { tag: parent, children: {} };
            // If have children, now set children
            if (family.length > 0) {
                const child = family.shift();
                if (!struct[parent].children[child])
                    struct[parent].children[child] = { tag: child, grandchildren: [] };
                /*console.log(struct[parent].children[child], family)*/
                // If have grandchildren, set those
                if (family.length > 0) {
                    const grandchildren = family.shift();
                    if (struct[parent].children[child].grandchildren && !struct[parent].children[child].grandchildren.includes(grandchildren))
                        struct[parent].children[child].grandchildren.push(grandchildren);
                }
            }
        }
        this.tags = Object.values(struct)
            .map((parent) => (Object.assign({}, parent, { value: this.getPromedioByTag(parent.tag, this.result), children: Object.values(parent.children).map((child) => (Object.assign({}, child, { value: this.getPromedioByTag(child.tag, this.result), grandchildren: Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["uniq"])(child.grandchildren).map((grandchild) => ({
                    value: this.getPromedioByTag(grandchild, this.result),
                    tag: grandchild
                })) }))) })));
    }
    getPromedioByTag(tag, result) {
        const total = Object.values(result.questions)
            .map((q) => ({ correcta: q.correcta, tags: q.raw.tags }))
            .filter((q) => q.tags && q.tags.includes(tag));
        const correctas = total.filter((q) => q.correcta).length;
        return correctas / total.length;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ExamResultsTagStructureComponent.prototype, "result", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ExamResultsTagStructureComponent.prototype, "colors", void 0);
ExamResultsTagStructureComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exam-results-tag-structure',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/components/exam-results-tag-structure/exam-results-tag-structure.html"*/'<ul class="list-group w-100">\n\n  <li class="list-group-item">Promedio por tema</li>\n\n  <!--<li>\n    <pre>{{tagColors | json}}</pre>\n  </li>-->\n\n  <li *ngFor="let parent of tags" class="list-group-item">\n\n    <strong>{{parent.value * 100 | number}}%</strong>\n    <span class="ml-2">{{parent.tag}}</span>\n    <div class="bar-container">\n      <div class="bar" [style.background-color]="tagColors[parent.tag]" [style.width.%]="parent.value * 100"></div>\n    </div>\n\n    <!-- Children -->\n    <ul class="list-group" *ngIf="parent.children as children">\n      <li *ngFor="let child of children" class="list-group-item">\n\n        <strong>{{child.value * 100 | number}}%</strong>\n        <span class="ml-2">{{child.tag}}</span>\n        <div class="bar-container">\n          <div class="bar" [style.background-color]="tagColors[child.tag]" [style.width.%]="child.value * 100"></div>\n        </div>\n\n        <!-- Grandchildren -->\n        <ul class="list-group" *ngIf="child.grandchildren as grandchildren">\n          <li *ngFor="let grand of grandchildren" class="list-group-item">\n\n            <strong>{{grand.value * 100 | number}}%</strong>\n            <span class="ml-2">{{grand.tag}}</span>\n            <div class="bar-container">\n              <div class="bar" [style.background-color]="tagColors[grand.tag]" [style.width.%]="grand.value * 100">\n              </div>\n            </div>\n\n          </li>\n        </ul>\n\n      </li>\n    </ul>\n\n  </li>\n\n  <li *ngFor="let tag of extraTags" class="list-group-item">\n\n    <strong>{{tag.value * 100 | number}}%</strong>\n    <span class="ml-2">{{tag.tag}}</span>\n    <div class="bar-container">\n      <div class="bar" [style.background-color]="tagColors[tag.tag]" [style.width.%]="tag.value * 100"></div>\n    </div>\n\n  </li>\n\n</ul>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/components/exam-results-tag-structure/exam-results-tag-structure.html"*/
    }),
    __metadata("design:paramtypes", [])
], ExamResultsTagStructureComponent);

//# sourceMappingURL=exam-results-tag-structure.js.map

/***/ }),

/***/ 1242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZamnaRadioComponent; });
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

/**
 * Generated class for the ZamnaRadioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let ZamnaRadioComponent = class ZamnaRadioComponent {
    constructor() {
        this.checked = false;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ZamnaRadioComponent.prototype, "checked", void 0);
ZamnaRadioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'zamna-radio',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/components/zamna-radio/zamna-radio.html"*/'<div class="zamna-radio" [ngClass]="{\'zamna-radio-checked\': checked, \'zamna-bg-primary\': checked}"></div>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/components/zamna-radio/zamna-radio.html"*/
    }),
    __metadata("design:paramtypes", [])
], ZamnaRadioComponent);

//# sourceMappingURL=zamna-radio.js.map

/***/ }),

/***/ 1265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_models__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(602);
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




let MediaPage = class MediaPage {
    constructor(navCtrl, navParams, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.medias$ = this.afs.collection(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].MEDIA_CATEGORY).valueChanges();
    }
    ionViewDidLoad() { }
};
MediaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-media',template:/*ion-inline-start:"/home/neri/code/zamnademy-app-v1/src/pages/media/media.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Material Extra</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-eee">\n  \n  <ng-template #loader>\n    <div class="flex-col">\n      <img src="assets/imgs/rings.svg">\n    </div>\n  </ng-template>\n\n  <div class="medias-container" *ngIf="medias$ | async as medias else loader">\n    <media-item *ngFor="let media of medias" [media]="media"></media-item>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/neri/code/zamnademy-app-v1/src/pages/media/media.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"]])
], MediaPage);

//# sourceMappingURL=media.js.map

/***/ })

});
//# sourceMappingURL=2.js.map