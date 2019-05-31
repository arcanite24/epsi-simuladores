<<<<<<< HEAD
webpackJsonp([1],{

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateriaPageModule", function() { return MateriaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materia__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(781);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MateriaPageModule = /** @class */ (function () {
    function MateriaPageModule() {
    }
    MateriaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__materia__["a" /* MateriaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__materia__["a" /* MateriaPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], MateriaPageModule);
    return MateriaPageModule;
}());

//# sourceMappingURL=materia.module.js.map

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

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_models__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(465);
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




var MateriaPage = /** @class */ (function () {
    function MateriaPage(navCtrl, navParams, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.information = [];
        this.loader = false;
    }
    MateriaPage.prototype.ionViewDidLoad = function () {
        this.loader = true;
        var id = this.navParams.get('id');
        this.loadContent(id);
        /* this.back.getTemario(this.navParams.get('id')).subscribe(data => {
          console.log(data)
          this.information = data.map(b => ({
            name: b.name,
            children: b.temas.map(t => ({
              id: t.id,
              name: t.name,
              information: t.desc,
              video: t.video,
              children: !t.video ? t.subs.map(s => ({
                id: s.id,
                name: s.name,
                information: s.desc,
                video: s.video})) : null
              }))
            }))
          this.loader = false
        }, err => {
          this.toast.create({message: 'No se pudo cargar el temario...', duration: 2000}).present()
          this.loader = false
          if (this.navCtrl.canGoBack()) this.navCtrl.pop()
        }) */
    };
    MateriaPage.prototype.loadContent = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var materia, _a, _loop_1, this_1, _i, _b, bloque;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.data.getDoc(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].CONTENT, id)];
                    case 1:
                        materia = _c.sent();
                        _a = materia;
                        return [4 /*yield*/, this.data.getCollectionQuery(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].CONTENT, function (ref) { return ref
                                .where('parent_id', '==', materia.id); })];
                    case 2:
                        _a.children = _c.sent();
                        materia.children = materia.children.map(function (m) { return (__assign({}, m, { children: [] })); });
                        _loop_1 = function (bloque) {
                            var _a, _loop_2, _i, _b, tema;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _a = bloque;
                                        return [4 /*yield*/, this_1.data.getCollectionQuery(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].CONTENT, function (ref) { return ref
                                                .where('parent_id', '==', bloque.id); })
                                            // Load subtemas
                                        ];
                                    case 1:
                                        _a.children = _c.sent();
                                        _loop_2 = function (tema) {
                                            var _a;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        _a = tema;
                                                        return [4 /*yield*/, this_1.data.getCollectionQuery(__WEBPACK_IMPORTED_MODULE_2__app_app_models__["a" /* Collections */].CONTENT, function (ref) { return ref
                                                                .where('parent_id', '==', tema.id); })];
                                                    case 1:
                                                        _a.children = _b.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        };
                                        _i = 0, _b = bloque.children;
                                        _c.label = 2;
                                    case 2:
                                        if (!(_i < _b.length)) return [3 /*break*/, 5];
                                        tema = _b[_i];
                                        return [5 /*yield**/, _loop_2(tema)];
                                    case 3:
                                        _c.sent();
                                        _c.label = 4;
                                    case 4:
                                        _i++;
                                        return [3 /*break*/, 2];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, _b = materia.children;
                        _c.label = 3;
                    case 3:
                        if (!(_i < _b.length)) return [3 /*break*/, 6];
                        bloque = _b[_i];
                        return [5 /*yield**/, _loop_1(bloque)];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        this.loader = false;
                        this.information = materia.children;
                        console.log(materia);
                        return [2 /*return*/];
                }
            });
        });
    };
    MateriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-materia',template:/*ion-inline-start:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\materia\materia.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Materia</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-eee">\n\n  <div class="flex-col" *ngIf="loader">\n\n    <img src="assets/imgs/rings.svg">\n\n  </div>\n\n  <accordion-list [information]="information"></accordion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Brandon G. Neri\code\zamnademy-app-v1\src\pages\materia\materia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], MateriaPage);
    return MateriaPage;
}());

//# sourceMappingURL=materia.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
=======
webpackJsonp([1],{563:function(n,e,l){"use strict";function t(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,0,null,null,10,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(n,e,l){var t=!0;if("click"===e){t=!1!==n.component.openMedia(n.context.$implicit.url)&&t}return t},C.b,C.a)),s["ɵdid"](1,1097728,null,3,_.a,[x.a,E.a,s.ElementRef,s.Renderer,[2,O.a]],null,null),s["ɵqud"](335544320,4,{contentLabel:0}),s["ɵqud"](603979776,5,{_buttons:1}),s["ɵqud"](603979776,6,{_icons:1}),s["ɵdid"](5,16384,null,0,P.a,[],null,null),(n()(),s["ɵted"](-1,2,["\n    "])),(n()(),s["ɵeld"](7,0,null,2,1,"h2",[],null,null,null,null,null)),(n()(),s["ɵted"](8,null,["",""])),(n()(),s["ɵted"](-1,2,["\n    "])),(n()(),s["ɵted"](-1,2,["\n  "]))],null,function(n,e){n(e,8,0,e.context.$implicit.name)})}function u(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,0,null,null,14,"ion-list",[["style","margin-bottom:3rem"]],null,null,null,null,null)),s["ɵdid"](1,16384,null,0,M.a,[E.a,s.ElementRef,s.Renderer,I.a,T.l,S.a],null,null),(n()(),s["ɵted"](-1,null,["\n  "])),(n()(),s["ɵeld"](3,0,null,null,7,"ion-list-header",[["class","item"]],null,null,null,C.b,C.a)),s["ɵdid"](4,1097728,null,3,_.a,[x.a,E.a,s.ElementRef,s.Renderer,[2,O.a]],null,null),s["ɵqud"](335544320,1,{contentLabel:0}),s["ɵqud"](603979776,2,{_buttons:1}),s["ɵqud"](603979776,3,{_icons:1}),s["ɵdid"](8,16384,null,0,D.a,[E.a,s.Renderer,s.ElementRef,[8,null]],null,null),(n()(),s["ɵeld"](9,0,null,2,1,"strong",[["style","font-size:1.75rem;"]],null,null,null,null,null)),(n()(),s["ɵted"](10,null,["",""])),(n()(),s["ɵted"](-1,null,["\n  "])),(n()(),s["ɵand"](16777216,null,null,1,null,t)),s["ɵdid"](13,802816,null,0,F.j,[s.ViewContainerRef,s.TemplateRef,s.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),s["ɵted"](-1,null,["\n"]))],function(n,e){n(e,13,0,e.component.medias)},function(n,e){n(e,10,0,e.component.media.name)})}function i(n){return s["ɵvid"](0,[(n()(),s["ɵted"](-1,null,["\n    "])),(n()(),s["ɵeld"](1,0,null,null,3,"div",[["class","flex-col"]],null,null,null,null,null)),(n()(),s["ɵted"](-1,null,["\n      "])),(n()(),s["ɵeld"](3,0,null,null,0,"img",[["src","assets/imgs/rings.svg"]],null,null,null,null,null)),(n()(),s["ɵted"](-1,null,["\n    "])),(n()(),s["ɵted"](-1,null,["\n  "]))],null,null)}function o(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,0,null,null,1,"media-item",[],null,null,null,u,A)),s["ɵdid"](1,114688,null,0,L.a,[j.a,q.AngularFirestore],{media:[0,"media"]},null)],function(n,e){n(e,1,0,e.context.$implicit)},null)}function r(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,0,null,null,4,"div",[["class","medias-container"]],null,null,null,null,null)),(n()(),s["ɵted"](-1,null,["\n    "])),(n()(),s["ɵand"](16777216,null,null,1,null,o)),s["ɵdid"](3,802816,null,0,F.j,[s.ViewContainerRef,s.TemplateRef,s.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),s["ɵted"](-1,null,["\n  "]))],function(n,e){n(e,3,0,e.context.ngIf)},null)}function a(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,0,null,null,10,"ion-header",[],null,null,null,null,null)),s["ɵdid"](1,16384,null,0,G.a,[E.a,s.ElementRef,s.Renderer,[2,$.a]],null,null),(n()(),s["ɵted"](-1,null,["\n\n  "])),(n()(),s["ɵeld"](3,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,V.b,V.a)),s["ɵdid"](4,49152,null,0,N.a,[Y.a,[2,$.a],[2,z.a],E.a,s.ElementRef,s.Renderer],{color:[0,"color"]},null),(n()(),s["ɵted"](-1,3,["\n    "])),(n()(),s["ɵeld"](6,0,null,3,2,"ion-title",[],null,null,null,J.b,J.a)),s["ɵdid"](7,49152,null,0,K.a,[E.a,s.ElementRef,s.Renderer,[2,Z.a],[2,N.a]],null,null),(n()(),s["ɵted"](-1,0,["Material Extra"])),(n()(),s["ɵted"](-1,3,["\n  "])),(n()(),s["ɵted"](-1,null,["\n\n"])),(n()(),s["ɵted"](-1,null,["\n\n\n"])),(n()(),s["ɵeld"](12,0,null,null,8,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,B.b,B.a)),s["ɵdid"](13,4374528,null,0,H.a,[E.a,I.a,S.a,s.ElementRef,s.Renderer,Y.a,Q.a,s.NgZone,[2,$.a],[2,z.a]],null,null),(n()(),s["ɵted"](-1,1,["\n  \n  "])),(n()(),s["ɵand"](0,[["loader",2]],1,0,null,i)),(n()(),s["ɵted"](-1,1,["\n\n  "])),(n()(),s["ɵand"](16777216,null,1,2,null,r)),s["ɵdid"](18,16384,null,0,F.k,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),s["ɵpid"](131072,F.b,[s.ChangeDetectorRef]),(n()(),s["ɵted"](-1,1,["\n\n"])),(n()(),s["ɵted"](-1,null,["\n"]))],function(n,e){var l=e.component;n(e,4,0,"primary");n(e,18,0,s["ɵunv"](e,18,0,s["ɵnov"](e,19).transform(l.medias$)),s["ɵnov"](e,15))},function(n,e){n(e,3,0,s["ɵnov"](e,4)._hidden,s["ɵnov"](e,4)._sbPadding);n(e,12,0,s["ɵnov"](e,13).statusbarPadding,s["ɵnov"](e,13)._hasRefresher)})}Object.defineProperty(e,"__esModule",{value:!0});var s=l(0),c=(l(1),l(28),l(457)),d=(l(458),function(){function n(n,e,l){this.navCtrl=n,this.navParams=e,this.afs=l,this.medias$=this.afs.collection(c.a.MEDIA_CATEGORY).valueChanges()}return n.prototype.ionViewDidLoad=function(){},n}()),f=l(584),p=function(){return function(){}}(),h=l(447),m=l(448),b=l(449),v=l(450),y=l(451),g=l(452),w=l(453),R=l(454),k=l(455),C=l(459),_=l(29),x=l(23),E=l(3),O=l(74),P=l(131),M=l(96),I=l(6),T=l(8),S=l(14),D=l(133),F=l(16),L=l(590),j=l(202),q=l(132),A=s["ɵcrt"]({encapsulation:2,styles:[],data:{}}),G=l(130),$=l(7),V=l(456),N=l(53),Y=l(13),z=l(31),J=l(582),K=l(196),Z=l(95),B=l(581),H=l(40),Q=l(61),U=l(15),W=s["ɵcrt"]({encapsulation:2,styles:[],data:{}}),X=s["ɵccf"]("page-media",d,function(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,0,null,null,1,"page-media",[],null,null,null,a,W)),s["ɵdid"](1,49152,null,0,d,[z.a,U.a,q.AngularFirestore],null,null)],null,null)},{},{},[]),nn=l(22),en=l(197),ln=l(204),tn=l(62);l.d(e,"MediaPageModuleNgFactory",function(){return un});var un=s["ɵcmf"](p,[],function(n){return s["ɵmod"]([s["ɵmpd"](512,s.ComponentFactoryResolver,s["ɵCodegenComponentFactoryResolver"],[[8,[h.a,m.a,b.a,v.a,y.a,g.a,w.a,R.a,k.a,X]],[3,s.ComponentFactoryResolver],s.NgModuleRef]),s["ɵmpd"](4608,F.m,F.l,[s.LOCALE_ID,[2,F.w]]),s["ɵmpd"](4608,nn.k,nn.k,[]),s["ɵmpd"](4608,nn.c,nn.c,[]),s["ɵmpd"](512,F.c,F.c,[]),s["ɵmpd"](512,nn.j,nn.j,[]),s["ɵmpd"](512,nn.d,nn.d,[]),s["ɵmpd"](512,nn.i,nn.i,[]),s["ɵmpd"](512,en.a,en.a,[]),s["ɵmpd"](512,en.b,en.b,[]),s["ɵmpd"](512,ln.MomentModule,ln.MomentModule,[]),s["ɵmpd"](512,f.a,f.a,[]),s["ɵmpd"](512,p,p,[]),s["ɵmpd"](256,tn.a,d,[])])})},581:function(n,e,l){"use strict";function t(n){return u["ɵvid"](2,[u["ɵqud"](402653184,1,{_fixedContent:0}),u["ɵqud"](402653184,2,{_scrollContent:0}),(n()(),u["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),u["ɵncd"](null,0),(n()(),u["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),u["ɵncd"](null,1),u["ɵncd"](null,2)],null,null)}l.d(e,"a",function(){return i}),e.b=t;var u=l(0),i=(l(3),l(6),l(14),l(61),l(7),l(31),u["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},582:function(n,e,l){"use strict";function t(n){return u["ɵvid"](2,[(n()(),u["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),u["ɵdid"](1,278528,null,0,i.i,[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["ɵncd"](null,0)],function(n,e){n(e,1,0,"toolbar-title","toolbar-title-"+e.component._mode)},null)}l.d(e,"a",function(){return o}),e.b=t;var u=l(0),i=l(16),o=(l(3),u["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},584:function(n,e,l){"use strict";l(1),l(0),l(587),l(16),l(28),l(588),l(460),l(589),l(590);l.d(e,"a",function(){return t});var t=function(){return function(){}}()},587:function(n,e,l){"use strict";l.d(e,"a",function(){return t});l(1),l(28);var t=function(){function n(n){this.navCtrl=n}return n.prototype.toggleSection=function(n){this.information[n].open=!this.information[n].open},n.prototype.toggleItem=function(n,e){this.information[n].children[e].open=!this.information[n].children[e].open},n.prototype.openClase=function(n,e){n.video&&this.navCtrl.push("ClaseDetailPage",{id:n.id,type:e})},n}()},588:function(n,e,l){"use strict";l.d(e,"a",function(){return a});l(1),l(28);var t=l(458),u=(l.n(t),l(457)),i=(l(198),l(24)),o=this&&this.__awaiter||function(n,e,l,t){return new(l||(l=Promise))(function(u,i){function o(n){try{a(t.next(n))}catch(n){i(n)}}function r(n){try{a(t.throw(n))}catch(n){i(n)}}function a(n){n.done?u(n.value):new l(function(e){e(n.value)}).then(o,r)}a((t=t.apply(n,e||[])).next())})},r=this&&this.__generator||function(n,e){function l(l){return function(o){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,u&&(i=u[2&l[0]?"return":l[0]?"throw":"next"])&&!(i=i.call(u,l[1])).done)return i;switch(u=0,i&&(l=[0,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,u=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(6===l[0]||2===l[0])){r=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(6===l[0]&&r.label<i[1]){r.label=i[1],i=l;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(l);break}i[2]&&r.ops.pop(),r.trys.pop();continue}l=e.call(n,r)}catch(n){l=[6,n],u=0}finally{t=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}var t,u,i,o,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},a=function(){function n(n,e,l){this.modal=n,this.afs=e,this.auth=l,this.feed$=this.afs.collection(u.a.POST).valueChanges(),this.loader=!1}return n.prototype.openComments=function(n){return o(this,void 0,void 0,function(){var e;return r(this,function(l){switch(l.label){case 0:return this.loader=!0,[4,this.afs.collection(u.a.POST_COMMENT,function(e){return e.where("post","==",n.id)}).valueChanges().pipe(Object(i.take)(1)).toPromise()];case 1:return e=l.sent(),this.modal.create("PostCommentsPage",{comments:e}).present(),this.loader=!1,[2]}})})},n.prototype.isLiked=function(n){return!!this.auth.user&&(!!n&&(!!n.likes&&n.likes.indexOf(this.auth.user.uid)>=0))},n.prototype.toggleLike=function(n,e,l){void 0===l&&(l=[]),this.isLiked(n)?l.splice(l.indexOf(this.auth.user.uid),1):l.push(this.auth.user.uid),this.afs.doc(u.a.POST+"/"+e).update({likes:l})},n.prototype.removePost=function(n){this.afs.doc(u.a.POST+"/"+n).delete()},n}()},589:function(n,e,l){"use strict";l.d(e,"a",function(){return a});l(1);var t=l(457),u=l(458),i=(l.n(u),l(24)),o=this&&this.__awaiter||function(n,e,l,t){return new(l||(l=Promise))(function(u,i){function o(n){try{a(t.next(n))}catch(n){i(n)}}function r(n){try{a(t.throw(n))}catch(n){i(n)}}function a(n){n.done?u(n.value):new l(function(e){e(n.value)}).then(o,r)}a((t=t.apply(n,e||[])).next())})},r=this&&this.__generator||function(n,e){function l(l){return function(o){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,u&&(i=u[2&l[0]?"return":l[0]?"throw":"next"])&&!(i=i.call(u,l[1])).done)return i;switch(u=0,i&&(l=[0,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,u=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(6===l[0]||2===l[0])){r=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(6===l[0]&&r.label<i[1]){r.label=i[1],i=l;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(l);break}i[2]&&r.ops.pop(),r.trys.pop();continue}l=e.call(n,r)}catch(n){l=[6,n],u=0}finally{t=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}var t,u,i,o,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},a=function(){function n(n,e){this.afs=n,this.navCtrl=e,this.galleries=[]}return n.prototype.ngOnInit=function(){this.gallery&&this.loadGalleries(this.gallery.id)},n.prototype.loadGalleries=function(n){return o(this,void 0,void 0,function(){var e;return r(this,function(l){switch(l.label){case 0:return[4,this.afs.collection(t.a.GALLERY,function(e){return e.where("cat_id","==",n)}).valueChanges().pipe(Object(i.take)(1)).toPromise()];case 1:return e=l.sent(),this.galleries=e,[2]}})})},n}()},590:function(n,e,l){"use strict";l.d(e,"a",function(){return a});l(1);var t=l(457),u=(l(202),l(458)),i=(l.n(u),l(24)),o=this&&this.__awaiter||function(n,e,l,t){return new(l||(l=Promise))(function(u,i){function o(n){try{a(t.next(n))}catch(n){i(n)}}function r(n){try{a(t.throw(n))}catch(n){i(n)}}function a(n){n.done?u(n.value):new l(function(e){e(n.value)}).then(o,r)}a((t=t.apply(n,e||[])).next())})},r=this&&this.__generator||function(n,e){function l(l){return function(o){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,u&&(i=u[2&l[0]?"return":l[0]?"throw":"next"])&&!(i=i.call(u,l[1])).done)return i;switch(u=0,i&&(l=[0,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,u=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(6===l[0]||2===l[0])){r=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(6===l[0]&&r.label<i[1]){r.label=i[1],i=l;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(l);break}i[2]&&r.ops.pop(),r.trys.pop();continue}l=e.call(n,r)}catch(n){l=[6,n],u=0}finally{t=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}var t,u,i,o,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},a=function(){function n(n,e){this.iab=n,this.afs=e,this.medias=[]}return n.prototype.ngOnInit=function(){this.loadMedias(this.media.id)},n.prototype.openMedia=function(n){this.iab.create(n,"_system")},n.prototype.loadMedias=function(n){return o(this,void 0,void 0,function(){var e;return r(this,function(l){switch(l.label){case 0:return[4,this.afs.collection(t.a.MEDIA,function(e){return e.where("categoria.id","==",n)}).valueChanges().pipe(Object(i.take)(1)).toPromise()];case 1:return e=l.sent(),this.medias=e,[2]}})})},n}()}});
>>>>>>> be0183bfac2199255ae37ce48235ca5626d4c558
