(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-shell-module"],{

/***/ "./node_modules/@angular/flex-layout/esm5/core.es5.js":
/*!************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm5/core.es5.js ***!
  \************************************************************/
/*! exports provided: removeStyles, BROWSER_PROVIDER, CLASS_NAME, CoreModule, MediaChange, StylesheetMap, STYLESHEET_MAP_PROVIDER_FACTORY, STYLESHEET_MAP_PROVIDER, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, BaseDirective, BaseDirectiveAdapter, BaseFxDirective, RESPONSIVE_ALIASES, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MatchMedia, MockMatchMedia, MockMediaQueryList, MockMatchMediaProvider, ServerMediaQueryList, ServerMatchMedia, MediaMonitor, MEDIA_MONITOR_PROVIDER_FACTORY, MEDIA_MONITOR_PROVIDER, ObservableMedia, MediaService, ObservableMediaProvider, OBSERVABLE_MEDIA_PROVIDER_FACTORY, OBSERVABLE_MEDIA_PROVIDER, KeyOptions, ResponsiveActivation, StyleUtils, validateBasis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStyles", function() { return removeStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function() { return BROWSER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function() { return CLASS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaChange", function() { return MediaChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesheetMap", function() { return StylesheetMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLESHEET_MAP_PROVIDER_FACTORY", function() { return STYLESHEET_MAP_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLESHEET_MAP_PROVIDER", function() { return STYLESHEET_MAP_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function() { return DEFAULT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function() { return LAYOUT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function() { return SERVER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function() { return BREAKPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDirective", function() { return BaseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDirectiveAdapter", function() { return BaseDirectiveAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseFxDirective", function() { return BaseFxDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSIVE_ALIASES", function() { return RESPONSIVE_ALIASES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function() { return DEFAULT_BREAKPOINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenTypes", function() { return ScreenTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function() { return ORIENTATION_BREAKPOINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function() { return BreakPointRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function() { return BREAKPOINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchMedia", function() { return MatchMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockMatchMedia", function() { return MockMatchMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockMediaQueryList", function() { return MockMediaQueryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockMatchMediaProvider", function() { return MockMatchMediaProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerMediaQueryList", function() { return ServerMediaQueryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerMatchMedia", function() { return ServerMatchMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaMonitor", function() { return MediaMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_MONITOR_PROVIDER_FACTORY", function() { return MEDIA_MONITOR_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_MONITOR_PROVIDER", function() { return MEDIA_MONITOR_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMedia", function() { return ObservableMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return MediaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMediaProvider", function() { return ObservableMediaProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBSERVABLE_MEDIA_PROVIDER_FACTORY", function() { return OBSERVABLE_MEDIA_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBSERVABLE_MEDIA_PROVIDER", function() { return OBSERVABLE_MEDIA_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyOptions", function() { return KeyOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveActivation", function() { return ResponsiveActivation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleUtils", function() { return StyleUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateBasis", function() { return validateBasis; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Find all of the server-generated stylings, if any, and remove them
 * This will be in the form of inline classes and the style block in the
 * head of the DOM
 * @param {?} _document
 * @param {?} platformId
 * @return {?}
 */
function removeStyles(_document, platformId) {
    return function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
            /** @type {?} */
            var elements = Array.from(_document.querySelectorAll("[class*=" + CLASS_NAME + "]"));
            /** @type {?} */
            var classRegex_1 = /\bflex-layout-.+?\b/g;
            elements.forEach(function (el) {
                el.classList.contains(CLASS_NAME + "ssr") && el.parentNode ?
                    el.parentNode.removeChild(el) : el.className.replace(classRegex_1, '');
            });
        }
    };
}
/** *
 *  Provider to remove SSR styles on the browser
  @type {?} */
var BROWSER_PROVIDER = {
    provide: /** @type {?} */ (_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"]),
    useFactory: removeStyles,
    deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]],
    multi: true
};
/** @type {?} */
var CLASS_NAME = 'flex-layout-';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, collect all breakpoints into one provider', {
    providedIn: 'root',
    factory: function () { return null; }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var RESPONSIVE_ALIASES = [
    'xs', 'gt-xs', 'sm', 'gt-sm', 'md', 'gt-md', 'lg', 'gt-lg', 'xl'
];
/** @type {?} */
var DEFAULT_BREAKPOINTS = [
    {
        alias: 'xs',
        mediaQuery: '(min-width: 0px) and (max-width: 599px)'
    },
    {
        alias: 'gt-xs',
        overlapping: true,
        mediaQuery: '(min-width: 600px)'
    },
    {
        alias: 'lt-sm',
        overlapping: true,
        mediaQuery: '(max-width: 599px)'
    },
    {
        alias: 'sm',
        mediaQuery: '(min-width: 600px) and (max-width: 959px)'
    },
    {
        alias: 'gt-sm',
        overlapping: true,
        mediaQuery: '(min-width: 960px)'
    },
    {
        alias: 'lt-md',
        overlapping: true,
        mediaQuery: '(max-width: 959px)'
    },
    {
        alias: 'md',
        mediaQuery: '(min-width: 960px) and (max-width: 1279px)'
    },
    {
        alias: 'gt-md',
        overlapping: true,
        mediaQuery: '(min-width: 1280px)'
    },
    {
        alias: 'lt-lg',
        overlapping: true,
        mediaQuery: '(max-width: 1279px)'
    },
    {
        alias: 'lg',
        mediaQuery: '(min-width: 1280px) and (max-width: 1919px)'
    },
    {
        alias: 'gt-lg',
        overlapping: true,
        mediaQuery: '(min-width: 1920px)'
    },
    {
        alias: 'lt-xl',
        overlapping: true,
        mediaQuery: '(max-width: 1919px)'
    },
    {
        alias: 'xl',
        mediaQuery: '(min-width: 1920px) and (max-width: 5000px)'
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */
var HANDSET_PORTRAIT = '(orientation: portrait) and (max-width: 599px)';
/** @type {?} */
var HANDSET_LANDSCAPE = '(orientation: landscape) and (max-width: 959px)';
/** @type {?} */
var TABLET_LANDSCAPE = '(orientation: landscape) and (min-width: 960px) and (max-width: 1279px)';
/** @type {?} */
var TABLET_PORTRAIT = '(orientation: portrait) and (min-width: 600px) and (max-width: 839px)';
/** @type {?} */
var WEB_PORTRAIT = '(orientation: portrait) and (min-width: 840px)';
/** @type {?} */
var WEB_LANDSCAPE = '(orientation: landscape) and (min-width: 1280px)';
/** @type {?} */
var ScreenTypes = {
    'HANDSET': HANDSET_PORTRAIT + ", " + HANDSET_LANDSCAPE,
    'TABLET': TABLET_PORTRAIT + " , " + TABLET_LANDSCAPE,
    'WEB': WEB_PORTRAIT + ", " + WEB_LANDSCAPE + " ",
    'HANDSET_PORTRAIT': "" + HANDSET_PORTRAIT,
    'TABLET_PORTRAIT': TABLET_PORTRAIT + " ",
    'WEB_PORTRAIT': "" + WEB_PORTRAIT,
    'HANDSET_LANDSCAPE': HANDSET_LANDSCAPE + "]",
    'TABLET_LANDSCAPE': "" + TABLET_LANDSCAPE,
    'WEB_LANDSCAPE': "" + WEB_LANDSCAPE
};
/** *
 * Extended Breakpoints for handset/tablets with landscape or portrait orientations
  @type {?} */
var ORIENTATION_BREAKPOINTS = [
    { 'alias': 'handset', 'mediaQuery': ScreenTypes.HANDSET },
    { 'alias': 'handset.landscape', 'mediaQuery': ScreenTypes.HANDSET_LANDSCAPE },
    { 'alias': 'handset.portrait', 'mediaQuery': ScreenTypes.HANDSET_PORTRAIT },
    { 'alias': 'tablet', 'mediaQuery': ScreenTypes.TABLET },
    { 'alias': 'tablet.landscape', 'mediaQuery': ScreenTypes.TABLET },
    { 'alias': 'tablet.portrait', 'mediaQuery': ScreenTypes.TABLET_PORTRAIT },
    { 'alias': 'web', 'mediaQuery': ScreenTypes.WEB, overlapping: true },
    { 'alias': 'web.landscape', 'mediaQuery': ScreenTypes.WEB_LANDSCAPE, overlapping: true },
    { 'alias': 'web.portrait', 'mediaQuery': ScreenTypes.WEB_PORTRAIT, overlapping: true }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ALIAS_DELIMITERS = /(\.|-|_)/g;
/**
 * @param {?} part
 * @return {?}
 */
function firstUpperCase(part) {
    /** @type {?} */
    var first = part.length > 0 ? part.charAt(0) : '';
    /** @type {?} */
    var remainder = (part.length > 1) ? part.slice(1) : '';
    return first.toUpperCase() + remainder;
}
/**
 * Converts snake-case to SnakeCase.
 * @param {?} name Text to UpperCamelCase
 * @return {?}
 */
function camelCase(name) {
    return name
        .replace(ALIAS_DELIMITERS, '|')
        .split('|')
        .map(firstUpperCase)
        .join('');
}
/**
 * For each breakpoint, ensure that a Suffix is defined;
 * fallback to UpperCamelCase the unique Alias value
 * @param {?} list
 * @return {?}
 */
function validateSuffixes(list) {
    list.forEach(function (bp) {
        if (!bp.suffix) {
            bp.suffix = camelCase(bp.alias); // create Suffix value based on alias
            bp.overlapping = !!bp.overlapping; // ensure default value
        }
    });
    return list;
}
/**
 * Merge a custom breakpoint list with the default list based on unique alias values
 *  - Items are added if the alias is not in the default list
 *  - Items are merged with the custom override if the alias exists in the default list
 * @param {?} defaults
 * @param {?=} custom
 * @return {?}
 */
function mergeByAlias(defaults, custom) {
    if (custom === void 0) { custom = []; }
    /** @type {?} */
    var dict = {};
    defaults.forEach(function (bp) {
        dict[bp.alias] = bp;
    });
    // Merge custom breakpoints
    custom.forEach(function (bp) {
        if (dict[bp.alias]) {
            extendObject(dict[bp.alias], bp);
        }
        else {
            dict[bp.alias] = bp;
        }
    });
    return validateSuffixes(Object.keys(dict).map(function (k) { return dict[k]; }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_CONFIG = {
    addFlexToParent: true,
    addOrientationBps: false,
    disableDefaultBps: false,
    disableVendorPrefixes: false,
    serverLoaded: false,
    useColumnBasisZero: true,
};
/** @type {?} */
var LAYOUT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, config options for the library', {
    providedIn: 'root',
    factory: function () { return DEFAULT_CONFIG; }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 *  Injection token unique to the flex-layout library.
 *  Use this token when build a custom provider (see below).
  @type {?} */
var BREAKPOINTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Token (@angular/flex-layout) Breakpoints', {
    providedIn: 'root',
    factory: function () {
        /** @type {?} */
        var breakpoints = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BREAKPOINT);
        /** @type {?} */
        var layoutConfig = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(LAYOUT_CONFIG);
        /** @type {?} */
        var bpFlattenArray = [].concat.apply([], (breakpoints || [])
            .map(function (v) { return Array.isArray(v) ? v : [v]; }));
        /** @type {?} */
        var builtIns = (layoutConfig.disableDefaultBps ? [] : DEFAULT_BREAKPOINTS)
            .concat(layoutConfig.addOrientationBps ? ORIENTATION_BREAKPOINTS : []);
        return mergeByAlias(builtIns, bpFlattenArray);
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Registry of 1..n MediaQuery breakpoint ranges
 * This is published as a provider and may be overridden from custom, application-specific ranges
 *
 */
var BreakPointRegistry = /** @class */ (function () {
    function BreakPointRegistry(_registry) {
        this._registry = _registry;
    }
    Object.defineProperty(BreakPointRegistry.prototype, "items", {
        /**
         * Accessor to raw list
         */
        get: /**
         * Accessor to raw list
         * @return {?}
         */
        function () {
            return this._registry.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakPointRegistry.prototype, "sortedItems", {
        /**
         * Accessor to sorted list used for registration with matchMedia API
         *
         * NOTE: During breakpoint registration, we want to register the overlaps FIRST
         *       so the non-overlaps will trigger the MatchMedia:BehaviorSubject last!
         *       And the largest, non-overlap, matching breakpoint should be the lastReplay value
         */
        get: /**
         * Accessor to sorted list used for registration with matchMedia API
         *
         * NOTE: During breakpoint registration, we want to register the overlaps FIRST
         *       so the non-overlaps will trigger the MatchMedia:BehaviorSubject last!
         *       And the largest, non-overlap, matching breakpoint should be the lastReplay value
         * @return {?}
         */
        function () {
            /** @type {?} */
            var overlaps = this._registry.filter(function (it) { return it.overlapping === true; });
            /** @type {?} */
            var nonOverlaps = this._registry.filter(function (it) { return it.overlapping !== true; });
            return overlaps.concat(nonOverlaps);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Search breakpoints by alias (e.g. gt-xs)
     */
    /**
     * Search breakpoints by alias (e.g. gt-xs)
     * @param {?} alias
     * @return {?}
     */
    BreakPointRegistry.prototype.findByAlias = /**
     * Search breakpoints by alias (e.g. gt-xs)
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        return this._registry.find(function (bp) { return bp.alias == alias; }) || null;
    };
    /**
     * @param {?} query
     * @return {?}
     */
    BreakPointRegistry.prototype.findByQuery = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return this._registry.find(function (bp) { return bp.mediaQuery == query; }) || null;
    };
    Object.defineProperty(BreakPointRegistry.prototype, "overlappings", {
        /**
         * Get all the breakpoints whose ranges could overlapping `normal` ranges;
         * e.g. gt-sm overlaps md, lg, and xl
         */
        get: /**
         * Get all the breakpoints whose ranges could overlapping `normal` ranges;
         * e.g. gt-sm overlaps md, lg, and xl
         * @return {?}
         */
        function () {
            return this._registry.filter(function (it) { return it.overlapping == true; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakPointRegistry.prototype, "aliases", {
        /**
         * Get list of all registered (non-empty) breakpoint aliases
         */
        get: /**
         * Get list of all registered (non-empty) breakpoint aliases
         * @return {?}
         */
        function () {
            return this._registry.map(function (it) { return it.alias; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakPointRegistry.prototype, "suffixes", {
        /**
         * Aliases are mapped to properties using suffixes
         * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
         * for property layoutGtSM.
         */
        get: /**
         * Aliases are mapped to properties using suffixes
         * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
         * for property layoutGtSM.
         * @return {?}
         */
        function () {
            return this._registry.map(function (it) { return !!it.suffix ? it.suffix : ''; });
        },
        enumerable: true,
        configurable: true
    });
    BreakPointRegistry.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    BreakPointRegistry.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [BREAKPOINTS,] }] }
    ]; };
    /** @nocollapse */ BreakPointRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function BreakPointRegistry_Factory() { return new BreakPointRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BREAKPOINTS)); }, token: BreakPointRegistry, providedIn: "root" });
    return BreakPointRegistry;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Class instances emitted [to observers] for each mql notification
 */
var  /**
 * Class instances emitted [to observers] for each mql notification
 */
MediaChange = /** @class */ (function () {
    function MediaChange(matches, mediaQuery, mqAlias, suffix // e.g.   GtSM, Md, GtLg
    ) {
        if (matches === void 0) { matches = false; }
        if (mediaQuery === void 0) { mediaQuery = 'all'; }
        if (mqAlias === void 0) { mqAlias = ''; }
        if (suffix === void 0) { suffix = ''; }
        this.matches = matches;
        this.mediaQuery = mediaQuery;
        this.mqAlias = mqAlias;
        this.suffix = suffix;
    }
    /**
     * @return {?}
     */
    MediaChange.prototype.clone = /**
     * @return {?}
     */
    function () {
        return new MediaChange(this.matches, this.mediaQuery, this.mqAlias, this.suffix);
    };
    return MediaChange;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * MediaMonitor configures listeners to mediaQuery changes and publishes an Observable facade to
 * convert mediaQuery change callbacks to subscriber notifications. These notifications will be
 * performed within the ng Zone to trigger change detections and component updates.
 *
 * NOTE: both mediaQuery activations and de-activations are announced in notifications
 */
var MatchMedia = /** @class */ (function () {
    function MatchMedia(_zone, _platformId, _document) {
        this._zone = _zone;
        this._platformId = _platformId;
        this._document = _document;
        this._registry = new Map();
        this._source = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new MediaChange(true));
        this._observable$ = this._source.asObservable();
    }
    /**
     * For the specified mediaQuery?
     */
    /**
     * For the specified mediaQuery?
     * @param {?} mediaQuery
     * @return {?}
     */
    MatchMedia.prototype.isActive = /**
     * For the specified mediaQuery?
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        /** @type {?} */
        var mql = this._registry.get(mediaQuery);
        return !!mql ? mql.matches : false;
    };
    /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * NOTE: if a mediaQuery is not specified, then ALL mediaQuery activations will
     *       be announced.
     */
    /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * NOTE: if a mediaQuery is not specified, then ALL mediaQuery activations will
     *       be announced.
     * @param {?=} mediaQuery
     * @return {?}
     */
    MatchMedia.prototype.observe = /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * NOTE: if a mediaQuery is not specified, then ALL mediaQuery activations will
     *       be announced.
     * @param {?=} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        if (mediaQuery) {
            this.registerQuery(mediaQuery);
        }
        return this._observable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (change) {
            return mediaQuery ? (change.mediaQuery === mediaQuery) : true;
        }));
    };
    /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     */
    /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     * @param {?} mediaQuery
     * @return {?}
     */
    MatchMedia.prototype.registerQuery = /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        var _this = this;
        /** @type {?} */
        var list = normalizeQuery(mediaQuery);
        if (list.length > 0) {
            this._prepareQueryCSS(list, this._document);
            list.forEach(function (query) {
                /** @type {?} */
                var mql = _this._registry.get(query);
                /** @type {?} */
                var onMQLEvent = function (e) {
                    _this._zone.run(function () {
                        /** @type {?} */
                        var change = new MediaChange(e.matches, query);
                        _this._source.next(change);
                    });
                };
                if (!mql) {
                    mql = _this._buildMQL(query);
                    mql.addListener(onMQLEvent);
                    _this._registry.set(query, mql);
                }
                if (mql.matches) {
                    onMQLEvent(mql); // Announce activate range for initial subscribers
                }
            });
        }
    };
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     */
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    MatchMedia.prototype._buildMQL = /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    function (query) {
        /** @type {?} */
        var canListen = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) &&
            !!(/** @type {?} */ (window)).matchMedia('all').addListener;
        return canListen ? (/** @type {?} */ (window)).matchMedia(query) : /** @type {?} */ ({
            matches: query === 'all' || query === '',
            media: query,
            addListener: function () {
            },
            removeListener: function () {
            }
        });
    };
    /**
     * For Webkit engines that only trigger the MediaQueryList Listener
     * when there is at least one CSS selector for the respective media query.
     *
     * @param query string The mediaQuery used to create a faux CSS selector
     *
     */
    /**
     * For Webkit engines that only trigger the MediaQueryList Listener
     * when there is at least one CSS selector for the respective media query.
     *
     * @param {?} mediaQueries
     * @param {?} _document
     * @return {?}
     */
    MatchMedia.prototype._prepareQueryCSS = /**
     * For Webkit engines that only trigger the MediaQueryList Listener
     * when there is at least one CSS selector for the respective media query.
     *
     * @param {?} mediaQueries
     * @param {?} _document
     * @return {?}
     */
    function (mediaQueries, _document) {
        /** @type {?} */
        var list = mediaQueries.filter(function (it) { return !ALL_STYLES[it]; });
        if (list.length > 0) {
            /** @type {?} */
            var query = list.join(', ');
            try {
                /** @type {?} */
                var styleEl_1 = _document.createElement('style');
                styleEl_1.setAttribute('type', 'text/css');
                if (!styleEl_1['styleSheet']) {
                    /** @type {?} */
                    var cssText = "\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media " + query + " {.fx-query-test{ }}\n";
                    styleEl_1.appendChild(_document.createTextNode(cssText));
                }
                _document.head.appendChild(styleEl_1);
                // Store in private global registry
                list.forEach(function (mq) { return ALL_STYLES[mq] = styleEl_1; });
            }
            catch (e) {
                console.error(e);
            }
        }
    };
    MatchMedia.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    MatchMedia.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ MatchMedia.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MatchMedia_Factory() { return new MatchMedia(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); }, token: MatchMedia, providedIn: "root" });
    return MatchMedia;
}());
/** *
 * Private global registry for all dynamically-created, injected style tags
 * @see prepare(query)
  @type {?} */
var ALL_STYLES = {};
/**
 * Always convert to unique list of queries; for iteration in ::registerQuery()
 * @param {?} mediaQuery
 * @return {?}
 */
function normalizeQuery(mediaQuery) {
    return (typeof mediaQuery === 'undefined') ? [] :
        (typeof mediaQuery === 'string') ? [mediaQuery] : unique(/** @type {?} */ (mediaQuery));
}
/**
 * Filter duplicate mediaQueries in the list
 * @param {?} list
 * @return {?}
 */
function unique(list) {
    /** @type {?} */
    var seen = {};
    return list.filter(function (item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * For the specified MediaChange, make sure it contains the breakpoint alias
 * and suffix (if available).
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function mergeAlias(dest, source) {
    return extendObject(dest, source ? {
        mqAlias: source.alias,
        suffix: source.suffix
    } : {});
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Base class for MediaService and pseudo-token for
 * @abstract
 */
var  /**
 * Base class for MediaService and pseudo-token for
 * @abstract
 */
ObservableMedia = /** @class */ (function () {
    function ObservableMedia() {
    }
    return ObservableMedia;
}());
/**
 * Class internalizes a MatchMedia service and exposes an Subscribable and Observable interface.
 * This an Observable with that exposes a feature to subscribe to mediaQuery
 * changes and a validator method (`isActive(<alias>)`) to test if a mediaQuery (or alias) is
 * currently active.
 *
 * !! Only mediaChange activations (not de-activations) are announced by the ObservableMedia
 *
 * This class uses the BreakPoint Registry to inject alias information into the raw MediaChange
 * notification. For custom mediaQuery notifications, alias information will not be injected and
 * those fields will be ''.
 *
 * !! This is not an actual Observable. It is a wrapper of an Observable used to publish additional
 * methods like `isActive(<alias>). To access the Observable and use RxJS operators, use
 * `.asObservable()` with syntax like media.asObservable().map(....).
 *
 * \@usage
 *
 *  // RxJS
 *  import {filter} from 'rxjs/operators/filter';
 *  import { ObservableMedia } from '\@angular/flex-layout';
 *
 * \@Component({ ... })
 *  export class AppComponent {
 *    status : string = '';
 *
 *    constructor(  media:ObservableMedia ) {
 *      let onChange = (change:MediaChange) => {
 *        this.status = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
 *      };
 *
 *      // Subscribe directly or access observable to use filter/map operators
 *      // e.g.
 *      //      media.subscribe(onChange);
 *
 *      media.asObservable()
 *        .pipe(
 *          filter((change:MediaChange) => true)   // silly noop filter
 *        ).subscribe(onChange);
 *    }
 *  }
 */
var MediaService = /** @class */ (function () {
    function MediaService(breakpoints, mediaWatcher) {
        this.breakpoints = breakpoints;
        this.mediaWatcher = mediaWatcher;
        /**
         * Should we announce gt-<xxx> breakpoint activations ?
         */
        this.filterOverlaps = true;
        this._registerBreakPoints();
        this.observable$ = this._buildObservable();
    }
    /**
     * Test if specified query/alias is active.
     */
    /**
     * Test if specified query/alias is active.
     * @param {?} alias
     * @return {?}
     */
    MediaService.prototype.isActive = /**
     * Test if specified query/alias is active.
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        /** @type {?} */
        var query = this._toMediaQuery(alias);
        return this.mediaWatcher.isActive(query);
    };
    /**
     * Proxy to the Observable subscribe method
     */
    /**
     * Proxy to the Observable subscribe method
     * @param {?=} observerOrNext
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    MediaService.prototype.subscribe = /**
     * Proxy to the Observable subscribe method
     * @param {?=} observerOrNext
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    function (observerOrNext, error, complete) {
        if (observerOrNext) {
            if (typeof observerOrNext === 'object') {
                return this.observable$.subscribe(observerOrNext.next, observerOrNext.error, observerOrNext.complete);
            }
        }
        return this.observable$.subscribe(observerOrNext, error, complete);
    };
    /**
     * Access to observable for use with operators like
     * .filter(), .map(), etc.
     */
    /**
     * Access to observable for use with operators like
     * .filter(), .map(), etc.
     * @return {?}
     */
    MediaService.prototype.asObservable = /**
     * Access to observable for use with operators like
     * .filter(), .map(), etc.
     * @return {?}
     */
    function () {
        return this.observable$;
    };
    /**
     * Register all the mediaQueries registered in the BreakPointRegistry
     * This is needed so subscribers can be auto-notified of all standard, registered
     * mediaQuery activations
     * @return {?}
     */
    MediaService.prototype._registerBreakPoints = /**
     * Register all the mediaQueries registered in the BreakPointRegistry
     * This is needed so subscribers can be auto-notified of all standard, registered
     * mediaQuery activations
     * @return {?}
     */
    function () {
        /** @type {?} */
        var queries = this.breakpoints.sortedItems.map(function (bp) { return bp.mediaQuery; });
        this.mediaWatcher.registerQuery(queries);
    };
    /**
     * Prepare internal observable
     *
     * NOTE: the raw MediaChange events [from MatchMedia] do not
     *       contain important alias information; as such this info
     *       must be injected into the MediaChange
     * @return {?}
     */
    MediaService.prototype._buildObservable = /**
     * Prepare internal observable
     *
     * NOTE: the raw MediaChange events [from MatchMedia] do not
     *       contain important alias information; as such this info
     *       must be injected into the MediaChange
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var media$ = this.mediaWatcher.observe();
        /** @type {?} */
        var activationsOnly = function (change) {
            return change.matches === true;
        };
        /** @type {?} */
        var addAliasInformation = function (change) {
            return mergeAlias(change, _this._findByQuery(change.mediaQuery));
        };
        /** @type {?} */
        var excludeOverlaps = function (change) {
            /** @type {?} */
            var bp = _this.breakpoints.findByQuery(change.mediaQuery);
            return !bp ? true : !(self.filterOverlaps && bp.overlapping);
        };
        /**
             * Only pass/announce activations (not de-activations)
             * Inject associated (if any) alias information into the MediaChange event
             * Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
             */
        return media$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(activationsOnly), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(excludeOverlaps), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(addAliasInformation));
    };
    /**
     * Breakpoint locator by alias
     * @param {?} alias
     * @return {?}
     */
    MediaService.prototype._findByAlias = /**
     * Breakpoint locator by alias
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        return this.breakpoints.findByAlias(alias);
    };
    /**
     * Breakpoint locator by mediaQuery
     * @param {?} query
     * @return {?}
     */
    MediaService.prototype._findByQuery = /**
     * Breakpoint locator by mediaQuery
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return this.breakpoints.findByQuery(query);
    };
    /**
     * Find associated breakpoint (if any)
     * @param {?} query
     * @return {?}
     */
    MediaService.prototype._toMediaQuery = /**
     * Find associated breakpoint (if any)
     * @param {?} query
     * @return {?}
     */
    function (query) {
        /** @type {?} */
        var bp = this._findByAlias(query) || this._findByQuery(query);
        return bp ? bp.mediaQuery : query;
    };
    MediaService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    MediaService.ctorParameters = function () { return [
        { type: BreakPointRegistry },
        { type: MatchMedia }
    ]; };
    /** @nocollapse */ MediaService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MediaService_Factory() { return new MediaService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MatchMedia)); }, token: MediaService, providedIn: "root" });
    return MediaService;
}());
/** @type {?} */
var ObservableMediaProvider = {
    // tslint:disable-line:variable-name
    provide: ObservableMedia,
    useClass: MediaService
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * *****************************************************************
 * Define module for the MediaQuery API
 * *****************************************************************
 */
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [ObservableMediaProvider, BROWSER_PROVIDER]
                },] },
    ];
    return CoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Utility to emulate a CSS stylesheet
 *
 * This utility class stores all of the styles for a given HTML element
 * as a readonly `stylesheet` map.
 */
var StylesheetMap = /** @class */ (function () {
    function StylesheetMap() {
        this.stylesheet = new Map();
    }
    /**
     * Add an individual style to an HTML element
     */
    /**
     * Add an individual style to an HTML element
     * @param {?} element
     * @param {?} style
     * @param {?} value
     * @return {?}
     */
    StylesheetMap.prototype.addStyleToElement = /**
     * Add an individual style to an HTML element
     * @param {?} element
     * @param {?} style
     * @param {?} value
     * @return {?}
     */
    function (element, style, value) {
        /** @type {?} */
        var stylesheet = this.stylesheet.get(element);
        if (stylesheet) {
            stylesheet.set(style, value);
        }
        else {
            this.stylesheet.set(element, new Map([[style, value]]));
        }
    };
    /**
     * Clear the virtual stylesheet
     */
    /**
     * Clear the virtual stylesheet
     * @return {?}
     */
    StylesheetMap.prototype.clearStyles = /**
     * Clear the virtual stylesheet
     * @return {?}
     */
    function () {
        this.stylesheet.clear();
    };
    /**
     * Retrieve a given style for an HTML element
     */
    /**
     * Retrieve a given style for an HTML element
     * @param {?} el
     * @param {?} styleName
     * @return {?}
     */
    StylesheetMap.prototype.getStyleForElement = /**
     * Retrieve a given style for an HTML element
     * @param {?} el
     * @param {?} styleName
     * @return {?}
     */
    function (el, styleName) {
        /** @type {?} */
        var styles = this.stylesheet.get(el);
        /** @type {?} */
        var value = '';
        if (styles) {
            /** @type {?} */
            var style = styles.get(styleName);
            if (typeof style === 'number' || typeof style === 'string') {
                value = style + '';
            }
        }
        return value;
    };
    StylesheetMap.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ StylesheetMap.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function StylesheetMap_Factory() { return new StylesheetMap(); }, token: StylesheetMap, providedIn: "root" });
    return StylesheetMap;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Ensure a single global service provider
 * @deprecated
 * \@deletion-target v6.0.0-beta.16
 * @param {?} parentSheet
 * @return {?}
 */
function STYLESHEET_MAP_PROVIDER_FACTORY(parentSheet) {
    return parentSheet || new StylesheetMap();
}
/** *
 * Export provider that uses a global service factory (above)
 * @deprecated
 * \@deletion-target v6.0.0-beta.16
  @type {?} */
var STYLESHEET_MAP_PROVIDER = {
    provide: StylesheetMap,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), StylesheetMap],
    ],
    useFactory: STYLESHEET_MAP_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Token that is provided to tell whether the FlexLayoutServerModule
 * has been included in the bundle
 *
 * NOTE: This can be manually provided to disable styles when using SSR
  @type {?} */
var SERVER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('FlexLayoutServerLoaded', {
    providedIn: 'root',
    factory: function () { return false; }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
  @type {?} */
var INLINE = 'inline';
/** @type {?} */
var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
 * @param {?} value
 * @return {?}
 */
function buildLayoutCSS(value) {
    var _a = validateValue(value), direction = _a[0], wrap = _a[1], isInline = _a[2];
    return buildCSS(direction, wrap, isInline);
}
/**
 * Validate the value to be one of the acceptable value options
 * Use default fallback of 'row'
 * @param {?} value
 * @return {?}
 */
function validateValue(value) {
    value = value ? value.toLowerCase() : '';
    var _a = value.split(' '), direction = _a[0], wrap = _a[1], inline = _a[2];
    // First value must be the `flex-direction`
    if (!LAYOUT_VALUES.find(function (x) { return x === direction; })) {
        direction = LAYOUT_VALUES[0];
    }
    if (wrap === INLINE) {
        wrap = (inline !== INLINE) ? inline : '';
        inline = INLINE;
    }
    return [direction, validateWrapValue(wrap), !!inline];
}
/**
 * Convert layout-wrap='<value>' to expected flex-wrap style
 * @param {?} value
 * @return {?}
 */
function validateWrapValue(value) {
    if (!!value) {
        switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
                value = 'wrap-reverse';
                break;
            case 'no':
            case 'none':
            case 'nowrap':
                value = 'nowrap';
                break;
            // All other values fallback to 'wrap'
            default:
                value = 'wrap';
                break;
        }
    }
    return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 * @param {?} direction
 * @param {?=} wrap
 * @param {?=} inline
 * @return {?}
 */
function buildCSS(direction, wrap, inline) {
    if (wrap === void 0) { wrap = null; }
    if (inline === void 0) { inline = false; }
    return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KeyOptions = /** @class */ (function () {
    function KeyOptions(baseKey, defaultValue, inputKeys) {
        this.baseKey = baseKey;
        this.defaultValue = defaultValue;
        this.inputKeys = inputKeys;
    }
    return KeyOptions;
}());
/**
 * ResponsiveActivation acts as a proxy between the MonitorMedia service (which emits mediaQuery
 * changes) and the fx API directives. The MQA proxies mediaQuery change events and notifies the
 * directive via the specified callback.
 *
 * - The MQA also determines which directive property should be used to determine the
 *   current change 'value'... BEFORE the original `onMediaQueryChanges()` method is called.
 * - The `ngOnDestroy()` method is also head-hooked to enable auto-unsubscribe from the
 *   MediaQueryServices.
 *
 * NOTE: these interceptions enables the logic in the fx API directives to remain terse and clean.
 */
var  /**
 * ResponsiveActivation acts as a proxy between the MonitorMedia service (which emits mediaQuery
 * changes) and the fx API directives. The MQA proxies mediaQuery change events and notifies the
 * directive via the specified callback.
 *
 * - The MQA also determines which directive property should be used to determine the
 *   current change 'value'... BEFORE the original `onMediaQueryChanges()` method is called.
 * - The `ngOnDestroy()` method is also head-hooked to enable auto-unsubscribe from the
 *   MediaQueryServices.
 *
 * NOTE: these interceptions enables the logic in the fx API directives to remain terse and clean.
 */
ResponsiveActivation = /** @class */ (function () {
    /**
     * Constructor
     */
    function ResponsiveActivation(_options, _mediaMonitor, _onMediaChanges) {
        this._options = _options;
        this._mediaMonitor = _mediaMonitor;
        this._onMediaChanges = _onMediaChanges;
        this._subscribers = [];
        this._registryMap = this._buildRegistryMap();
        this._subscribers = this._configureChangeObservers();
    }
    Object.defineProperty(ResponsiveActivation.prototype, "registryFromLargest", {
        /**
         * Get a readonly sorted list of the breakpoints corresponding to the directive properties
         * defined in the HTML markup: the sorting is done from largest to smallest. The order is
         * important when several media queries are 'registered' and from which, the browser uses the
         * first matching media query.
         */
        get: /**
         * Get a readonly sorted list of the breakpoints corresponding to the directive properties
         * defined in the HTML markup: the sorting is done from largest to smallest. The order is
         * important when several media queries are 'registered' and from which, the browser uses the
         * first matching media query.
         * @return {?}
         */
        function () {
            return this._registryMap.slice().reverse();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveActivation.prototype, "mediaMonitor", {
        /**
         * Accessor to the DI'ed directive property
         * Each directive instance has a reference to the MediaMonitor which is
         * used HERE to subscribe to mediaQuery change notifications.
         */
        get: /**
         * Accessor to the DI'ed directive property
         * Each directive instance has a reference to the MediaMonitor which is
         * used HERE to subscribe to mediaQuery change notifications.
         * @return {?}
         */
        function () {
            return this._mediaMonitor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveActivation.prototype, "activatedInputKey", {
        /**
         * Determine which directive @Input() property is currently active (for the viewport size):
         * The key must be defined (in use) or fallback to the 'closest' overlapping property key
         * that is defined; otherwise the default property key will be used.
         * e.g.
         *      if `<div fxHide fxHide.gt-sm="false">` is used but the current activated mediaQuery alias
         *      key is `.md` then `.gt-sm` should be used instead
         */
        get: /**
         * Determine which directive \@Input() property is currently active (for the viewport size):
         * The key must be defined (in use) or fallback to the 'closest' overlapping property key
         * that is defined; otherwise the default property key will be used.
         * e.g.
         *      if `<div fxHide fxHide.gt-sm="false">` is used but the current activated mediaQuery alias
         *      key is `.md` then `.gt-sm` should be used instead
         * @return {?}
         */
        function () {
            return this._activatedInputKey || this._options.baseKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveActivation.prototype, "activatedInput", {
        /**
         * Get the currently activated @Input value or the fallback default @Input value
         */
        get: /**
         * Get the currently activated \@Input value or the fallback default \@Input value
         * @return {?}
         */
        function () {
            /** @type {?} */
            var key = this.activatedInputKey;
            return this.hasKeyValue(key) ? this._lookupKeyValue(key) : this._options.defaultValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Fast validator for presence of attribute on the host element
     */
    /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    ResponsiveActivation.prototype.hasKeyValue = /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var value = this._options.inputKeys[key];
        return typeof value !== 'undefined';
    };
    /**
     * Remove interceptors, restore original functions, and forward the onDestroy() call
     */
    /**
     * Remove interceptors, restore original functions, and forward the onDestroy() call
     * @return {?}
     */
    ResponsiveActivation.prototype.destroy = /**
     * Remove interceptors, restore original functions, and forward the onDestroy() call
     * @return {?}
     */
    function () {
        this._subscribers.forEach(function (link) {
            link.unsubscribe();
        });
        this._subscribers = [];
    };
    /**
     * For each *defined* API property, register a callback to `_onMonitorEvents( )`
     * Cache 1..n subscriptions for internal auto-unsubscribes when the the directive destructs
     * @return {?}
     */
    ResponsiveActivation.prototype._configureChangeObservers = /**
     * For each *defined* API property, register a callback to `_onMonitorEvents( )`
     * Cache 1..n subscriptions for internal auto-unsubscribes when the the directive destructs
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var subscriptions = [];
        this._registryMap.forEach(function (bp) {
            if (_this._keyInUse(bp.key)) {
                /** @type {?} */
                var buildChanges = function (change) {
                    change = change.clone();
                    change.property = _this._options.baseKey;
                    return change;
                };
                subscriptions.push(_this.mediaMonitor
                    .observe(bp.alias)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(buildChanges))
                    .subscribe(function (change) {
                    _this._onMonitorEvents(change);
                }));
            }
        });
        return subscriptions;
    };
    /**
     * Build mediaQuery key-hashmap; only for the directive properties that are actually defined/used
     * in the HTML markup
     * @return {?}
     */
    ResponsiveActivation.prototype._buildRegistryMap = /**
     * Build mediaQuery key-hashmap; only for the directive properties that are actually defined/used
     * in the HTML markup
     * @return {?}
     */
    function () {
        var _this = this;
        return this.mediaMonitor.breakpoints
            .map(function (bp) {
            return /** @type {?} */ (extendObject({}, bp, {
                baseKey: _this._options.baseKey,
                // e.g. layout, hide, self-align, flex-wrap
                key: _this._options.baseKey + bp.suffix // e.g.  layoutGtSm, layoutMd, layoutGtLg
            }));
        })
            .filter(function (bp) { return _this._keyInUse(bp.key); });
    };
    /**
     * Synchronizes change notifications with the current mq-activated @Input and calculates the
     * mq-activated input value or the default value
     */
    /**
     * Synchronizes change notifications with the current mq-activated \@Input and calculates the
     * mq-activated input value or the default value
     * @param {?} change
     * @return {?}
     */
    ResponsiveActivation.prototype._onMonitorEvents = /**
     * Synchronizes change notifications with the current mq-activated \@Input and calculates the
     * mq-activated input value or the default value
     * @param {?} change
     * @return {?}
     */
    function (change) {
        if (change.property == this._options.baseKey) {
            change.value = this._calculateActivatedValue(change);
            this._onMediaChanges(change);
        }
    };
    /**
     * Has the key been specified in the HTML markup and thus is intended
     * to participate in activation processes.
     * @param {?} key
     * @return {?}
     */
    ResponsiveActivation.prototype._keyInUse = /**
     * Has the key been specified in the HTML markup and thus is intended
     * to participate in activation processes.
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._lookupKeyValue(key) !== undefined;
    };
    /**
     *  Map input key associated with mediaQuery activation to closest defined input key
     *  then return the values associated with the targeted input property
     *
     *  !! change events may arrive out-of-order (activate before deactivate)
     *     so make sure the deactivate is used ONLY when the keys match
     *     (since a different activate may be in use)
     * @param {?} current
     * @return {?}
     */
    ResponsiveActivation.prototype._calculateActivatedValue = /**
     *  Map input key associated with mediaQuery activation to closest defined input key
     *  then return the values associated with the targeted input property
     *
     *  !! change events may arrive out-of-order (activate before deactivate)
     *     so make sure the deactivate is used ONLY when the keys match
     *     (since a different activate may be in use)
     * @param {?} current
     * @return {?}
     */
    function (current) {
        /** @type {?} */
        var currentKey = this._options.baseKey + current.suffix;
        /** @type {?} */
        var newKey = this._activatedInputKey; // e.g. newKey == hideGtSm
        newKey = current.matches ? currentKey : ((newKey == currentKey) ? '' : newKey);
        this._activatedInputKey = this._validateInputKey(newKey);
        return this.activatedInput;
    };
    /**
     * For the specified input property key, validate it is defined (used in the markup)
     * If not see if a overlapping mediaQuery-related input key fallback has been defined
     *
     * NOTE: scans in the order defined by activeOverLaps (largest viewport ranges -> smallest ranges)
     * @param {?} inputKey
     * @return {?}
     */
    ResponsiveActivation.prototype._validateInputKey = /**
     * For the specified input property key, validate it is defined (used in the markup)
     * If not see if a overlapping mediaQuery-related input key fallback has been defined
     *
     * NOTE: scans in the order defined by activeOverLaps (largest viewport ranges -> smallest ranges)
     * @param {?} inputKey
     * @return {?}
     */
    function (inputKey) {
        var _this = this;
        /** @type {?} */
        var isMissingKey = function (key) { return !_this._keyInUse(key); };
        if (isMissingKey(inputKey)) {
            this.mediaMonitor.activeOverlaps.some(function (bp) {
                /** @type {?} */
                var key = _this._options.baseKey + bp.suffix;
                if (!isMissingKey(key)) {
                    inputKey = key;
                    return true; // exit .some()
                }
                return false;
            });
        }
        return inputKey;
    };
    /**
     * Get the value (if any) for the directive instances \@Input property (aka key)
     * @param {?} key
     * @return {?}
     */
    ResponsiveActivation.prototype._lookupKeyValue = /**
     * Get the value (if any) for the directive instances \@Input property (aka key)
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._options.inputKeys[key];
    };
    return ResponsiveActivation;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Abstract base class for the Layout API styling directives.
 * @abstract
 */
var  /**
 * Abstract base class for the Layout API styling directives.
 * @abstract
 */
BaseDirective = /** @class */ (function () {
    function BaseDirective(_mediaMonitor, _elementRef, _styler) {
        this._mediaMonitor = _mediaMonitor;
        this._elementRef = _elementRef;
        this._styler = _styler;
        /**
         * Dictionary of input keys with associated values
         */
        this._inputMap = {};
        /**
         * Has the `ngOnInit()` method fired
         *
         * Used to allow *ngFor tasks to finish and support queries like
         * getComputedStyle() during ngOnInit().
         */
        this._hasInitialized = false;
    }
    Object.defineProperty(BaseDirective.prototype, "hasMediaQueryListener", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this._mqActivation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDirective.prototype, "activatedValue", {
        /**
         * Imperatively determine the current activated [input] value;
         * if called before ngOnInit() this will return `undefined`
         */
        get: /**
         * Imperatively determine the current activated [input] value;
         * if called before ngOnInit() this will return `undefined`
         * @return {?}
         */
        function () {
            return this._mqActivation ? this._mqActivation.activatedInput : undefined;
        },
        /**
         * Change the currently activated input value and force-update
         * the injected CSS (by-passing change detection).
         *
         * NOTE: Only the currently activated input value will be modified;
         *       other input values will NOT be affected.
         */
        set: /**
         * Change the currently activated input value and force-update
         * the injected CSS (by-passing change detection).
         *
         * NOTE: Only the currently activated input value will be modified;
         *       other input values will NOT be affected.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _a;
            /** @type {?} */
            var key = 'baseKey';
            /** @type {?} */
            var previousVal;
            if (this._mqActivation) {
                key = this._mqActivation.activatedInputKey;
                previousVal = this._inputMap[key];
                this._inputMap[key] = value;
            }
            /** @type {?} */
            var change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SimpleChange"](previousVal, value, false);
            this.ngOnChanges(/** @type {?} */ (_a = {}, _a[key] = change, _a));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     */
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @param {?} baseKey
     * @return {?}
     */
    BaseDirective.prototype.hasResponsiveAPI = /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @param {?} baseKey
     * @return {?}
     */
    function (baseKey) {
        /** @type {?} */
        var totalKeys = Object.keys(this._inputMap).length;
        /** @type {?} */
        var baseValue = this._inputMap[baseKey];
        return (totalKeys - (!!baseValue ? 1 : 0)) > 0;
    };
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     */
    /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     * @return {?}
     */
    BaseDirective.prototype.ngOnInit = /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     * @return {?}
     */
    function () {
        this._hasInitialized = true;
    };
    /**
     * @param {?} change
     * @return {?}
     */
    BaseDirective.prototype.ngOnChanges = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        throw new Error("BaseDirective::ngOnChanges should be overridden in subclass: " + change);
    };
    /**
     * @return {?}
     */
    BaseDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._mqActivation) {
            this._mqActivation.destroy();
        }
        delete this._mediaMonitor;
    };
    Object.defineProperty(BaseDirective.prototype, "parentElement", {
        // *********************************************
        // Protected Methods
        // *********************************************
        /** Access to host element's parent DOM node */
        get: /**
         * Access to host element's parent DOM node
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement.parentNode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDirective.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /** Access the current value (if any) of the @Input property */
    /**
     * Access the current value (if any) of the \@Input property
     * @param {?} key
     * @return {?}
     */
    BaseDirective.prototype._queryInput = /**
     * Access the current value (if any) of the \@Input property
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._inputMap[key];
    };
    /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     */
    /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     * @param {?} key
     * @param {?} fallbackVal
     * @return {?}
     */
    BaseDirective.prototype._getDefaultVal = /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     * @param {?} key
     * @param {?} fallbackVal
     * @return {?}
     */
    function (key, fallbackVal) {
        /** @type {?} */
        var val = this._queryInput(key);
        /** @type {?} */
        var hasDefaultVal = (val !== undefined && val !== null);
        return (hasDefaultVal && val !== '') ? val : fallbackVal;
    };
    /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     */
    /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     * @param {?=} source
     * @return {?}
     */
    BaseDirective.prototype._getDisplayStyle = /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     * @param {?=} source
     * @return {?}
     */
    function (source) {
        if (source === void 0) { source = this.nativeElement; }
        /** @type {?} */
        var query = 'display';
        return this._styler.lookupStyle(source, query);
    };
    /** Quick accessor to raw attribute value on the target DOM element */
    /**
     * Quick accessor to raw attribute value on the target DOM element
     * @param {?} attribute
     * @param {?=} source
     * @return {?}
     */
    BaseDirective.prototype._getAttributeValue = /**
     * Quick accessor to raw attribute value on the target DOM element
     * @param {?} attribute
     * @param {?=} source
     * @return {?}
     */
    function (attribute, source) {
        if (source === void 0) { source = this.nativeElement; }
        return this._styler.lookupAttributeValue(source, attribute);
    };
    /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     */
    /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     * @param {?} target
     * @param {?=} addIfMissing
     * @return {?}
     */
    BaseDirective.prototype._getFlexFlowDirection = /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     * @param {?} target
     * @param {?=} addIfMissing
     * @return {?}
     */
    function (target, addIfMissing) {
        if (addIfMissing === void 0) { addIfMissing = false; }
        var _a;
        /** @type {?} */
        var value = 'row';
        /** @type {?} */
        var hasInlineValue = '';
        if (target) {
            _a = this._styler.getFlowDirection(target), value = _a[0], hasInlineValue = _a[1];
            if (!hasInlineValue && addIfMissing) {
                /** @type {?} */
                var style = buildLayoutCSS(value);
                /** @type {?} */
                var elements = [target];
                this._styler.applyStyleToElements(style, elements);
            }
        }
        return value.trim() || 'row';
    };
    /** Applies styles given via string pair or object map to the directive element */
    /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} style
     * @param {?=} value
     * @param {?=} element
     * @return {?}
     */
    BaseDirective.prototype._applyStyleToElement = /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} style
     * @param {?=} value
     * @param {?=} element
     * @return {?}
     */
    function (style, value, element) {
        if (element === void 0) { element = this.nativeElement; }
        this._styler.applyStyleToElement(element, style, value);
    };
    /** Applies styles given via string pair or object map to the directive's element */
    /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?} elements
     * @return {?}
     */
    BaseDirective.prototype._applyStyleToElements = /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?} elements
     * @return {?}
     */
    function (style, elements) {
        this._styler.applyStyleToElements(style, elements);
    };
    /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     */
    /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseDirective.prototype._cacheInput = /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (typeof source === 'object') {
            for (var prop in source) {
                this._inputMap[prop] = source[prop];
            }
        }
        else {
            if (!!key) {
                this._inputMap[key] = source;
            }
        }
    };
    /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     */
    /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    BaseDirective.prototype._listenForMediaQueryChanges = /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    function (key, defaultValue, onMediaQueryChange) {
        // tslint:disable-line:max-line-length
        if (!this._mqActivation) {
            /** @type {?} */
            var keyOptions = new KeyOptions(key, defaultValue, this._inputMap);
            this._mqActivation = new ResponsiveActivation(keyOptions, this._mediaMonitor, function (change) { return onMediaQueryChange(change); });
        }
        return this._mqActivation;
    };
    Object.defineProperty(BaseDirective.prototype, "childrenNodes", {
        /** Special accessor to query for all child 'element' nodes regardless of type, class, etc */
        get: /**
         * Special accessor to query for all child 'element' nodes regardless of type, class, etc
         * @return {?}
         */
        function () {
            /** @type {?} */
            var obj = this.nativeElement.children;
            /** @type {?} */
            var buffer = [];
            // iterate backwards ensuring that length is an UInt32
            for (var i = obj.length; i--;) {
                buffer[i] = obj[i];
            }
            return buffer;
        },
        enumerable: true,
        configurable: true
    });
    /** Fast validator for presence of attribute on the host element */
    /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    BaseDirective.prototype.hasKeyValue = /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._mqActivation.hasKeyValue(key);
    };
    Object.defineProperty(BaseDirective.prototype, "hasInitialized", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasInitialized;
        },
        enumerable: true,
        configurable: true
    });
    return BaseDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Adapter to the BaseDirective abstract class so it can be used via composition.
 * @see BaseDirective
 */
var  /**
 * Adapter to the BaseDirective abstract class so it can be used via composition.
 * @see BaseDirective
 */
BaseDirectiveAdapter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(BaseDirectiveAdapter, _super);
    /**
     * BaseDirectiveAdapter constructor
     */
    function BaseDirectiveAdapter(_baseKey, // non-responsive @Input property name
    // non-responsive @Input property name
    _mediaMonitor, _elementRef, _styler) {
        var _this = _super.call(this, _mediaMonitor, _elementRef, _styler) || this;
        _this._baseKey = _baseKey;
        _this._mediaMonitor = _mediaMonitor;
        _this._elementRef = _elementRef;
        _this._styler = _styler;
        return _this;
    }
    Object.defineProperty(BaseDirectiveAdapter.prototype, "activeKey", {
        /**
         * Accessor to determine which @Input property is "active"
         * e.g. which property value will be used.
         */
        get: /**
         * Accessor to determine which \@Input property is "active"
         * e.g. which property value will be used.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var mqa = this._mqActivation;
            /** @type {?} */
            var key = mqa ? mqa.activatedInputKey : this._baseKey;
            // Note: ClassDirective::SimpleChanges uses 'klazz' instead of 'class' as a key
            return (key === 'class') ? 'klazz' : key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDirectiveAdapter.prototype, "inputMap", {
        /** Hash map of all @Input keys/values defined/used */
        get: /**
         * Hash map of all \@Input keys/values defined/used
         * @return {?}
         */
        function () {
            return this._inputMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDirectiveAdapter.prototype, "mqActivation", {
        /**
         * @see BaseDirective._mqActivation
         */
        get: /**
         * @see BaseDirective._mqActivation
         * @return {?}
         */
        function () {
            return this._mqActivation;
        },
        enumerable: true,
        configurable: true
    });
    /**
      * Does this directive have 1 or more responsive keys defined
      * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
      */
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @return {?}
     */
    BaseDirectiveAdapter.prototype.hasResponsiveAPI = /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @return {?}
     */
    function () {
        return _super.prototype.hasResponsiveAPI.call(this, this._baseKey);
    };
    /**
     * @see BaseDirective._queryInput
     */
    /**
     * @see BaseDirective._queryInput
     * @param {?} key
     * @return {?}
     */
    BaseDirectiveAdapter.prototype.queryInput = /**
     * @see BaseDirective._queryInput
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return key ? this._queryInput(key) : undefined;
    };
    /**
     *  Save the property value.
     */
    /**
     *  Save the property value.
     * @param {?=} key
     * @param {?=} source
     * @param {?=} cacheRaw
     * @return {?}
     */
    BaseDirectiveAdapter.prototype.cacheInput = /**
     *  Save the property value.
     * @param {?=} key
     * @param {?=} source
     * @param {?=} cacheRaw
     * @return {?}
     */
    function (key, source, cacheRaw) {
        if (cacheRaw === void 0) { cacheRaw = false; }
        if (cacheRaw) {
            this._cacheInputRaw(key, source);
        }
        else if (Array.isArray(source)) {
            this._cacheInputArray(key, source);
        }
        else if (typeof source === 'object') {
            this._cacheInputObject(key, source);
        }
        else if (typeof source === 'string') {
            this._cacheInputString(key, source);
        }
        else {
            throw new Error("Invalid class value '" + key + "' provided. Did you want to cache the raw value?");
        }
    };
    /**
     * @see BaseDirective._listenForMediaQueryChanges
     */
    /**
     * @see BaseDirective._listenForMediaQueryChanges
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    BaseDirectiveAdapter.prototype.listenForMediaQueryChanges = /**
     * @see BaseDirective._listenForMediaQueryChanges
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    function (key, defaultValue, onMediaQueryChange) {
        return this._listenForMediaQueryChanges(key, defaultValue, onMediaQueryChange);
    };
    // ************************************************************
    // Protected Methods
    // ************************************************************
    /**
     * No implicit transforms of the source.
     * Required when caching values expected later for KeyValueDiffers
     */
    /**
     * No implicit transforms of the source.
     * Required when caching values expected later for KeyValueDiffers
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseDirectiveAdapter.prototype._cacheInputRaw = /**
     * No implicit transforms of the source.
     * Required when caching values expected later for KeyValueDiffers
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key) {
            this._inputMap[key] = source;
        }
    };
    /**
     *  Save the property value for Array values.
     */
    /**
     *  Save the property value for Array values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseDirectiveAdapter.prototype._cacheInputArray = /**
     *  Save the property value for Array values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key === void 0) { key = ''; }
        this._inputMap[key] = source ? source.join(' ') : '';
    };
    /**
     *  Save the property value for key/value pair values.
     */
    /**
     *  Save the property value for key/value pair values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseDirectiveAdapter.prototype._cacheInputObject = /**
     *  Save the property value for key/value pair values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key === void 0) { key = ''; }
        /** @type {?} */
        var classes = [];
        if (source) {
            for (var prop in source) {
                if (!!source[prop]) {
                    classes.push(prop);
                }
            }
        }
        this._inputMap[key] = classes.join(' ');
    };
    /**
     *  Save the property value for string values.
     */
    /**
     *  Save the property value for string values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseDirectiveAdapter.prototype._cacheInputString = /**
     *  Save the property value for string values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key === void 0) { key = ''; }
        this._inputMap[key] = source;
    };
    return BaseDirectiveAdapter;
}(BaseDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @deprecated
 * \@deletion-target v6.0.0-beta.17
 * Abstract base class for the Layout API styling directives.
 * @abstract
 */
var  /**
 * @deprecated
 * \@deletion-target v6.0.0-beta.17
 * Abstract base class for the Layout API styling directives.
 * @abstract
 */
BaseFxDirective = /** @class */ (function () {
    /**
     * Constructor
     */
    function BaseFxDirective(_mediaMonitor, _elementRef, _styler) {
        this._mediaMonitor = _mediaMonitor;
        this._elementRef = _elementRef;
        this._styler = _styler;
        /**
         *  Dictionary of input keys with associated values
         */
        this._inputMap = {};
        /**
         * Has the `ngOnInit()` method fired
         *
         * Used to allow *ngFor tasks to finish and support queries like
         * getComputedStyle() during ngOnInit().
         */
        this._hasInitialized = false;
    }
    Object.defineProperty(BaseFxDirective.prototype, "hasMediaQueryListener", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this._mqActivation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFxDirective.prototype, "activatedValue", {
        /**
         * Imperatively determine the current activated [input] value;
         * if called before ngOnInit() this will return `undefined`
         */
        get: /**
         * Imperatively determine the current activated [input] value;
         * if called before ngOnInit() this will return `undefined`
         * @return {?}
         */
        function () {
            return this._mqActivation ? this._mqActivation.activatedInput : undefined;
        },
        /**
         * Change the currently activated input value and force-update
         * the injected CSS (by-passing change detection).
         *
         * NOTE: Only the currently activated input value will be modified;
         *       other input values will NOT be affected.
         */
        set: /**
         * Change the currently activated input value and force-update
         * the injected CSS (by-passing change detection).
         *
         * NOTE: Only the currently activated input value will be modified;
         *       other input values will NOT be affected.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _a;
            /** @type {?} */
            var key = 'baseKey';
            /** @type {?} */
            var previousVal;
            if (this._mqActivation) {
                key = this._mqActivation.activatedInputKey;
                previousVal = this._inputMap[key];
                this._inputMap[key] = value;
            }
            /** @type {?} */
            var change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SimpleChange"](previousVal, value, false);
            this.ngOnChanges(/** @type {?} */ (_a = {}, _a[key] = change, _a));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFxDirective.prototype, "parentElement", {
        // *********************************************
        // Accessor Methods
        // *********************************************
        /**
         * Access to host element's parent DOM node
         */
        get: /**
         * Access to host element's parent DOM node
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement.parentNode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFxDirective.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Access the current value (if any) of the @Input property.
     */
    /**
     * Access the current value (if any) of the \@Input property.
     * @param {?} key
     * @return {?}
     */
    BaseFxDirective.prototype._queryInput = /**
     * Access the current value (if any) of the \@Input property.
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._inputMap[key];
    };
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     */
    /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     * @return {?}
     */
    BaseFxDirective.prototype.ngOnInit = /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     * @return {?}
     */
    function () {
        this._display = this._getDisplayStyle();
        this._hasInitialized = true;
    };
    /**
     * @param {?} change
     * @return {?}
     */
    BaseFxDirective.prototype.ngOnChanges = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        throw new Error("BaseFxDirective::ngOnChanges should be overridden in subclass: " + change);
    };
    /**
     * @return {?}
     */
    BaseFxDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._mqActivation) {
            this._mqActivation.destroy();
        }
        delete this._mediaMonitor;
    };
    // *********************************************
    // Protected Methods
    // *********************************************
    /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     */
    /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     * @param {?} key
     * @param {?} fallbackVal
     * @return {?}
     */
    BaseFxDirective.prototype._getDefaultVal = /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     * @param {?} key
     * @param {?} fallbackVal
     * @return {?}
     */
    function (key, fallbackVal) {
        /** @type {?} */
        var val = this._queryInput(key);
        /** @type {?} */
        var hasDefaultVal = (val !== undefined && val !== null);
        return (hasDefaultVal && val !== '') ? val : fallbackVal;
    };
    /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     */
    /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirective.prototype._getDisplayStyle = /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     * @param {?=} source
     * @return {?}
     */
    function (source) {
        if (source === void 0) { source = this.nativeElement; }
        /** @type {?} */
        var query = 'display';
        return this._styler.lookupStyle(source, query);
    };
    /**
     * Quick accessor to raw attribute value on the target DOM element
     */
    /**
     * Quick accessor to raw attribute value on the target DOM element
     * @param {?} attribute
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirective.prototype._getAttributeValue = /**
     * Quick accessor to raw attribute value on the target DOM element
     * @param {?} attribute
     * @param {?=} source
     * @return {?}
     */
    function (attribute, source) {
        if (source === void 0) { source = this.nativeElement; }
        return this._styler.lookupAttributeValue(source, attribute);
    };
    /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     */
    /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     * @param {?} target
     * @param {?=} addIfMissing
     * @return {?}
     */
    BaseFxDirective.prototype._getFlowDirection = /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     * @param {?} target
     * @param {?=} addIfMissing
     * @return {?}
     */
    function (target, addIfMissing) {
        if (addIfMissing === void 0) { addIfMissing = false; }
        var _a;
        /** @type {?} */
        var value = 'row';
        /** @type {?} */
        var hasInlineValue = '';
        if (target) {
            _a = this._styler.getFlowDirection(target), value = _a[0], hasInlineValue = _a[1];
            if (!hasInlineValue && addIfMissing) {
                /** @type {?} */
                var style = buildLayoutCSS(value);
                /** @type {?} */
                var elements = [target];
                this._styler.applyStyleToElements(style, elements);
            }
        }
        return value.trim() || 'row';
    };
    /**
     * Applies styles given via string pair or object map to the directive element.
     */
    /**
     * Applies styles given via string pair or object map to the directive element.
     * @param {?} style
     * @param {?=} value
     * @param {?=} element
     * @return {?}
     */
    BaseFxDirective.prototype._applyStyleToElement = /**
     * Applies styles given via string pair or object map to the directive element.
     * @param {?} style
     * @param {?=} value
     * @param {?=} element
     * @return {?}
     */
    function (style, value, element) {
        if (element === void 0) { element = this.nativeElement; }
        this._styler.applyStyleToElement(element, style, value);
    };
    /**
     * Applies styles given via string pair or object map to the directive's element.
     */
    /**
     * Applies styles given via string pair or object map to the directive's element.
     * @param {?} style
     * @param {?} elements
     * @return {?}
     */
    BaseFxDirective.prototype._applyStyleToElements = /**
     * Applies styles given via string pair or object map to the directive's element.
     * @param {?} style
     * @param {?} elements
     * @return {?}
     */
    function (style, elements) {
        this._styler.applyStyleToElements(style, elements);
    };
    /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     */
    /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirective.prototype._cacheInput = /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (typeof source === 'object') {
            for (var prop in source) {
                this._inputMap[prop] = source[prop];
            }
        }
        else {
            if (!!key) {
                this._inputMap[key] = source;
            }
        }
    };
    /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     */
    /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    BaseFxDirective.prototype._listenForMediaQueryChanges = /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    function (key, defaultValue, onMediaQueryChange) {
        // tslint:disable-line:max-line-length
        if (!this._mqActivation) {
            /** @type {?} */
            var keyOptions = new KeyOptions(key, defaultValue, this._inputMap);
            this._mqActivation = new ResponsiveActivation(keyOptions, this._mediaMonitor, function (change) { return onMediaQueryChange(change); });
        }
        return this._mqActivation;
    };
    Object.defineProperty(BaseFxDirective.prototype, "childrenNodes", {
        /**
         * Special accessor to query for all child 'element' nodes regardless of type, class, etc.
         */
        get: /**
         * Special accessor to query for all child 'element' nodes regardless of type, class, etc.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var obj = this.nativeElement.children;
            /** @type {?} */
            var buffer = [];
            // iterate backwards ensuring that length is an UInt32
            for (var i = obj.length; i--;) {
                buffer[i] = obj[i];
            }
            return buffer;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     */
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @param {?} baseKey
     * @return {?}
     */
    BaseFxDirective.prototype.hasResponsiveAPI = /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @param {?} baseKey
     * @return {?}
     */
    function (baseKey) {
        /** @type {?} */
        var totalKeys = Object.keys(this._inputMap).length;
        /** @type {?} */
        var baseValue = this._inputMap[baseKey];
        return (totalKeys - (!!baseValue ? 1 : 0)) > 0;
    };
    /**
     * Fast validator for presence of attribute on the host element
     */
    /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    BaseFxDirective.prototype.hasKeyValue = /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._mqActivation.hasKeyValue(key);
    };
    Object.defineProperty(BaseFxDirective.prototype, "hasInitialized", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasInitialized;
        },
        enumerable: true,
        configurable: true
    });
    return BaseFxDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * MockMatchMedia mocks calls to the Window API matchMedia with a build of a simulated
 * MockMediaQueryListener. Methods are available to simulate an activation of a mediaQuery
 * range and to clearAll mediaQuery listeners.
 */
var MockMatchMedia = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(MockMatchMedia, _super);
    function MockMatchMedia(_zone, _platformId, _document, _breakpoints) {
        var _this = _super.call(this, _zone, _platformId, _document) || this;
        _this._breakpoints = _breakpoints;
        /**
         * Special flag used to test BreakPoint registrations with MatchMedia
         */
        _this.autoRegisterQueries = true;
        /**
         * Allow fallback to overlapping mediaQueries to determine
         * activatedInput(s).
         */
        _this.useOverlaps = false;
        _this._actives = [];
        _this._actives = [];
        return _this;
    }
    /** Easy method to clear all listeners for all mediaQueries */
    /**
     * Easy method to clear all listeners for all mediaQueries
     * @return {?}
     */
    MockMatchMedia.prototype.clearAll = /**
     * Easy method to clear all listeners for all mediaQueries
     * @return {?}
     */
    function () {
        this._registry.forEach(function (mql) {
            mql.destroy();
        });
        this._registry.clear();
        this.useOverlaps = false;
    };
    /** Feature to support manual, simulated activation of a mediaQuery. */
    /**
     * Feature to support manual, simulated activation of a mediaQuery.
     * @param {?} mediaQuery
     * @param {?=} useOverlaps
     * @return {?}
     */
    MockMatchMedia.prototype.activate = /**
     * Feature to support manual, simulated activation of a mediaQuery.
     * @param {?} mediaQuery
     * @param {?=} useOverlaps
     * @return {?}
     */
    function (mediaQuery, useOverlaps) {
        if (useOverlaps === void 0) { useOverlaps = false; }
        useOverlaps = useOverlaps || this.useOverlaps;
        mediaQuery = this._validateQuery(mediaQuery);
        if (useOverlaps || !this.isActive(mediaQuery)) {
            this._deactivateAll();
            this._registerMediaQuery(mediaQuery);
            this._activateWithOverlaps(mediaQuery, useOverlaps);
        }
        return this.hasActivated;
    };
    /** Converts an optional mediaQuery alias to a specific, valid mediaQuery */
    /**
     * Converts an optional mediaQuery alias to a specific, valid mediaQuery
     * @param {?} queryOrAlias
     * @return {?}
     */
    MockMatchMedia.prototype._validateQuery = /**
     * Converts an optional mediaQuery alias to a specific, valid mediaQuery
     * @param {?} queryOrAlias
     * @return {?}
     */
    function (queryOrAlias) {
        /** @type {?} */
        var bp = this._breakpoints.findByAlias(queryOrAlias);
        if (bp) {
            queryOrAlias = bp.mediaQuery;
        }
        return queryOrAlias;
    };
    /**
     * Manually activate any overlapping mediaQueries to simulate
     * similar functionality in the window.matchMedia()
     * @param {?} mediaQuery
     * @param {?} useOverlaps
     * @return {?}
     */
    MockMatchMedia.prototype._activateWithOverlaps = /**
     * Manually activate any overlapping mediaQueries to simulate
     * similar functionality in the window.matchMedia()
     * @param {?} mediaQuery
     * @param {?} useOverlaps
     * @return {?}
     */
    function (mediaQuery, useOverlaps) {
        if (useOverlaps) {
            /** @type {?} */
            var bp = this._breakpoints.findByQuery(mediaQuery);
            /** @type {?} */
            var alias = bp ? bp.alias : 'unknown';
            // Simulate activation of overlapping lt-<XXX> ranges
            switch (alias) {
                case 'lg':
                    this._activateByAlias('lt-xl');
                    break;
                case 'md':
                    this._activateByAlias('lt-xl, lt-lg');
                    break;
                case 'sm':
                    this._activateByAlias('lt-xl, lt-lg, lt-md');
                    break;
                case 'xs':
                    this._activateByAlias('lt-xl, lt-lg, lt-md, lt-sm');
                    break;
            }
            // Simulate activate of overlapping gt-<xxxx> mediaQuery ranges
            switch (alias) {
                case 'xl':
                    this._activateByAlias('gt-lg, gt-md, gt-sm, gt-xs');
                    break;
                case 'lg':
                    this._activateByAlias('gt-md, gt-sm, gt-xs');
                    break;
                case 'md':
                    this._activateByAlias('gt-sm, gt-xs');
                    break;
                case 'sm':
                    this._activateByAlias('gt-xs');
                    break;
            }
        }
        // Activate last since the responsiveActivation is watching *this* mediaQuery
        return this._activateByQuery(mediaQuery);
    };
    /**
     *
     * @param {?} aliases
     * @return {?}
     */
    MockMatchMedia.prototype._activateByAlias = /**
     *
     * @param {?} aliases
     * @return {?}
     */
    function (aliases) {
        var _this = this;
        /** @type {?} */
        var activate = function (alias) {
            /** @type {?} */
            var bp = _this._breakpoints.findByAlias(alias);
            _this._activateByQuery(bp ? bp.mediaQuery : alias);
        };
        aliases.split(',').forEach(function (alias) { return activate(alias.trim()); });
    };
    /**
     *
     * @param {?} mediaQuery
     * @return {?}
     */
    MockMatchMedia.prototype._activateByQuery = /**
     *
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        /** @type {?} */
        var mql = /** @type {?} */ (this._registry.get(mediaQuery));
        /** @type {?} */
        var alreadyAdded = this._actives.reduce(function (found, it) {
            return found || (mql && (it.media === mql.media));
        }, false);
        if (mql && !alreadyAdded) {
            this._actives.push(mql.activate());
        }
        return this.hasActivated;
    };
    /**
     * Deactivate all current Mock MQLs
     * @return {?}
     */
    MockMatchMedia.prototype._deactivateAll = /**
     * Deactivate all current Mock MQLs
     * @return {?}
     */
    function () {
        if (this._actives.length) {
            // Deactivate all current MQLs and reset the buffer
            for (var _i = 0, _a = this._actives; _i < _a.length; _i++) {
                var it = _a[_i];
                it.deactivate();
            }
            this._actives = [];
        }
        return this;
    };
    /**
     * Insure the mediaQuery is registered with MatchMedia
     * @param {?} mediaQuery
     * @return {?}
     */
    MockMatchMedia.prototype._registerMediaQuery = /**
     * Insure the mediaQuery is registered with MatchMedia
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        if (!this._registry.has(mediaQuery) && this.autoRegisterQueries) {
            this.registerQuery(mediaQuery);
        }
    };
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     */
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    MockMatchMedia.prototype._buildMQL = /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return new MockMediaQueryList(query);
    };
    Object.defineProperty(MockMatchMedia.prototype, "hasActivated", {
        get: /**
         * @return {?}
         */
        function () {
            return (this._actives.length > 0);
        },
        enumerable: true,
        configurable: true
    });
    MockMatchMedia.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    MockMatchMedia.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: BreakPointRegistry }
    ]; };
    return MockMatchMedia;
}(MatchMedia));
/**
 * Special internal class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
var  /**
 * Special internal class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
MockMediaQueryList = /** @class */ (function () {
    function MockMediaQueryList(_mediaQuery) {
        this._mediaQuery = _mediaQuery;
        this._isActive = false;
        this._listeners = [];
    }
    Object.defineProperty(MockMediaQueryList.prototype, "matches", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockMediaQueryList.prototype, "media", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaQuery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     */
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    MockMediaQueryList.prototype.destroy = /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    function () {
        this.deactivate();
        this._listeners = [];
    };
    /** Notify all listeners that 'matches === TRUE' */
    /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    MockMediaQueryList.prototype.activate = /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._isActive) {
            this._isActive = true;
            this._listeners.forEach(function (callback) {
                callback(_this);
            });
        }
        return this;
    };
    /** Notify all listeners that 'matches === false' */
    /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    MockMediaQueryList.prototype.deactivate = /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._isActive) {
            this._isActive = false;
            this._listeners.forEach(function (callback) {
                callback(_this);
            });
        }
        return this;
    };
    /** Add a listener to our internal list to activate later */
    /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    MockMediaQueryList.prototype.addListener = /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    function (listener) {
        if (this._listeners.indexOf(listener) === -1) {
            this._listeners.push(listener);
        }
        if (this._isActive) {
            listener(this);
        }
    };
    /** Don't need to remove listeners in the testing environment */
    /**
     * Don't need to remove listeners in the testing environment
     * @param {?} _
     * @return {?}
     */
    MockMediaQueryList.prototype.removeListener = /**
     * Don't need to remove listeners in the testing environment
     * @param {?} _
     * @return {?}
     */
    function (_) {
    };
    return MockMediaQueryList;
}());
/** *
 * Pre-configured provider for MockMatchMedia
  @type {?} */
var MockMatchMediaProvider = {
    // tslint:disable-line:variable-name
    provide: MatchMedia,
    useClass: MockMatchMedia
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Special server-only class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
var  /**
 * Special server-only class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
ServerMediaQueryList = /** @class */ (function () {
    function ServerMediaQueryList(_mediaQuery) {
        this._mediaQuery = _mediaQuery;
        this._isActive = false;
        this._listeners = [];
    }
    Object.defineProperty(ServerMediaQueryList.prototype, "matches", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerMediaQueryList.prototype, "media", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaQuery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     */
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    ServerMediaQueryList.prototype.destroy = /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    function () {
        this.deactivate();
        this._listeners = [];
    };
    /** Notify all listeners that 'matches === TRUE' */
    /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    ServerMediaQueryList.prototype.activate = /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._isActive) {
            this._isActive = true;
            this._listeners.forEach(function (callback) {
                callback(_this);
            });
        }
        return this;
    };
    /** Notify all listeners that 'matches === false' */
    /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    ServerMediaQueryList.prototype.deactivate = /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._isActive) {
            this._isActive = false;
            this._listeners.forEach(function (callback) {
                callback(_this);
            });
        }
        return this;
    };
    /** Add a listener to our internal list to activate later */
    /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    ServerMediaQueryList.prototype.addListener = /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    function (listener) {
        if (this._listeners.indexOf(listener) === -1) {
            this._listeners.push(listener);
        }
        if (this._isActive) {
            listener(this);
        }
    };
    /** Don't need to remove listeners in the server environment */
    /**
     * Don't need to remove listeners in the server environment
     * @param {?} _
     * @return {?}
     */
    ServerMediaQueryList.prototype.removeListener = /**
     * Don't need to remove listeners in the server environment
     * @param {?} _
     * @return {?}
     */
    function (_) {
    };
    return ServerMediaQueryList;
}());
/**
 * Special server-only implementation of MatchMedia that uses the above
 * ServerMediaQueryList as its internal representation
 *
 * Also contains methods to activate and deactivate breakpoints
 */
var ServerMatchMedia = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(ServerMatchMedia, _super);
    function ServerMatchMedia(_zone, _platformId, _document) {
        var _this = _super.call(this, _zone, _platformId, _document) || this;
        _this._zone = _zone;
        _this._platformId = _platformId;
        _this._document = _document;
        _this._registry = new Map();
        _this._source = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new MediaChange(true));
        _this._observable$ = _this._source.asObservable();
        return _this;
    }
    /** Activate the specified breakpoint if we're on the server, no-op otherwise */
    /**
     * Activate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    ServerMatchMedia.prototype.activateBreakpoint = /**
     * Activate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    function (bp) {
        /** @type {?} */
        var lookupBreakpoint = this._registry.get(bp.mediaQuery);
        if (lookupBreakpoint) {
            lookupBreakpoint.activate();
        }
    };
    /** Deactivate the specified breakpoint if we're on the server, no-op otherwise */
    /**
     * Deactivate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    ServerMatchMedia.prototype.deactivateBreakpoint = /**
     * Deactivate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    function (bp) {
        /** @type {?} */
        var lookupBreakpoint = this._registry.get(bp.mediaQuery);
        if (lookupBreakpoint) {
            lookupBreakpoint.deactivate();
        }
    };
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     */
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    ServerMatchMedia.prototype._buildMQL = /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return new ServerMediaQueryList(query);
    };
    ServerMatchMedia.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ServerMatchMedia.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    return ServerMatchMedia;
}(MatchMedia));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * MediaMonitor uses the MatchMedia service to observe mediaQuery changes (both activations and
 * deactivations). These changes are are published as MediaChange notifications.
 *
 * Note: all notifications will be performed within the
 * ng Zone to trigger change detections and component updates.
 *
 * It is the MediaMonitor that:
 *  - auto registers all known breakpoints
 *  - injects alias information into each raw MediaChange event
 *  - provides accessor to the currently active BreakPoint
 *  - publish list of overlapping BreakPoint(s); used by ResponsiveActivation
 */
var MediaMonitor = /** @class */ (function () {
    function MediaMonitor(_breakpoints, _matchMedia) {
        this._breakpoints = _breakpoints;
        this._matchMedia = _matchMedia;
        this._registerBreakpoints();
    }
    Object.defineProperty(MediaMonitor.prototype, "breakpoints", {
        /**
         * Read-only accessor to the list of breakpoints configured in the BreakPointRegistry provider
         */
        get: /**
         * Read-only accessor to the list of breakpoints configured in the BreakPointRegistry provider
         * @return {?}
         */
        function () {
            return this._breakpoints.items.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaMonitor.prototype, "activeOverlaps", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var items = this._breakpoints.overlappings.reverse();
            return items.filter(function (bp) {
                return _this._matchMedia.isActive(bp.mediaQuery);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaMonitor.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var found = null;
            /** @type {?} */
            var items = this.breakpoints.reverse();
            items.forEach(function (bp) {
                if (bp.alias !== '') {
                    if (!found && _this._matchMedia.isActive(bp.mediaQuery)) {
                        found = bp;
                    }
                }
            });
            /** @type {?} */
            var first = this.breakpoints[0];
            return found || (this._matchMedia.isActive(first.mediaQuery) ? first : null);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * For the specified mediaQuery alias, is the mediaQuery range active?
     */
    /**
     * For the specified mediaQuery alias, is the mediaQuery range active?
     * @param {?} alias
     * @return {?}
     */
    MediaMonitor.prototype.isActive = /**
     * For the specified mediaQuery alias, is the mediaQuery range active?
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        /** @type {?} */
        var bp = this._breakpoints.findByAlias(alias) || this._breakpoints.findByQuery(alias);
        return this._matchMedia.isActive(bp ? bp.mediaQuery : alias);
    };
    /**
     * External observers can watch for all (or a specific) mql changes.
     * If specific breakpoint is observed, only return *activated* events
     * otherwise return all events for BOTH activated + deactivated changes.
     */
    /**
     * External observers can watch for all (or a specific) mql changes.
     * If specific breakpoint is observed, only return *activated* events
     * otherwise return all events for BOTH activated + deactivated changes.
     * @param {?=} alias
     * @return {?}
     */
    MediaMonitor.prototype.observe = /**
     * External observers can watch for all (or a specific) mql changes.
     * If specific breakpoint is observed, only return *activated* events
     * otherwise return all events for BOTH activated + deactivated changes.
     * @param {?=} alias
     * @return {?}
     */
    function (alias) {
        /** @type {?} */
        var bp = this._breakpoints.findByAlias(alias || '') ||
            this._breakpoints.findByQuery(alias || '');
        /** @type {?} */
        var hasAlias = function (change) { return (bp ? change.mqAlias !== '' : true); };
        /** @type {?} */
        var media$ = this._matchMedia.observe(bp ? bp.mediaQuery : alias);
        return media$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (change) { return mergeAlias(change, bp); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(hasAlias));
    };
    /**
     * Immediate calls to matchMedia() to establish listeners
     * and prepare for immediate subscription notifications
     * @return {?}
     */
    MediaMonitor.prototype._registerBreakpoints = /**
     * Immediate calls to matchMedia() to establish listeners
     * and prepare for immediate subscription notifications
     * @return {?}
     */
    function () {
        /** @type {?} */
        var queries = this._breakpoints.sortedItems.map(function (bp) { return bp.mediaQuery; });
        this._matchMedia.registerQuery(queries);
    };
    MediaMonitor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    MediaMonitor.ctorParameters = function () { return [
        { type: BreakPointRegistry },
        { type: MatchMedia }
    ]; };
    /** @nocollapse */ MediaMonitor.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MediaMonitor_Factory() { return new MediaMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MatchMedia)); }, token: MediaMonitor, providedIn: "root" });
    return MediaMonitor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Ensure a single global service provider
 * @deprecated
 * \@deletion-target v6.0.0-beta.16
 * @param {?} parentMonitor
 * @param {?} breakpoints
 * @param {?} matchMedia
 * @return {?}
 */
function MEDIA_MONITOR_PROVIDER_FACTORY(parentMonitor, breakpoints, matchMedia) {
    return parentMonitor || new MediaMonitor(breakpoints, matchMedia);
}
/** *
 * Export provider that uses a global service factory (above)
 * @deprecated
 * \@deletion-target v6.0.0-beta.16
  @type {?} */
var MEDIA_MONITOR_PROVIDER = {
    provide: MediaMonitor,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MediaMonitor],
        BreakPointRegistry,
        MatchMedia,
    ],
    useFactory: MEDIA_MONITOR_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Ensure a single global ObservableMedia service provider
 * @deprecated
 * \@deletion-target v6.0.0-beta.16
 * @param {?} parentService
 * @param {?} matchMedia
 * @param {?} breakpoints
 * @return {?}
 */
function OBSERVABLE_MEDIA_PROVIDER_FACTORY(parentService, matchMedia, breakpoints) {
    return parentService || new MediaService(breakpoints, matchMedia);
}
/** *
 *  Provider to return global service for observable service for all MediaQuery activations
 * @deprecated
 * \@deletion-target v6.0.0-beta.16
  @type {?} */
var OBSERVABLE_MEDIA_PROVIDER = {
    // tslint:disable-line:variable-name
    provide: ObservableMedia,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ObservableMedia],
        MatchMedia,
        BreakPointRegistry
    ],
    useFactory: OBSERVABLE_MEDIA_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * Applies CSS prefixes to appropriate style keys.
 *
 * Note: `-ms-`, `-moz` and `-webkit-box` are no longer supported. e.g.
 *    {
 *      display: -webkit-flex;     NEW - Safari 6.1+. iOS 7.1+, BB10
 *      display: flex;             NEW, Spec - Firefox, Chrome, Opera
 *      // display: -webkit-box;   OLD - iOS 6-, Safari 3.1-6, BB7
 *      // display: -ms-flexbox;   TWEENER - IE 10
 *      // display: -moz-flexbox;  OLD - Firefox
 *    }
 * @param {?} target
 * @return {?}
 */
function applyCssPrefixes(target) {
    for (var key in target) {
        /** @type {?} */
        var value = target[key] || '';
        switch (key) {
            case 'display':
                if (value === 'flex') {
                    target['display'] = [
                        '-webkit-flex',
                        'flex'
                    ];
                }
                else if (value === 'inline-flex') {
                    target['display'] = [
                        '-webkit-inline-flex',
                        'inline-flex'
                    ];
                }
                else {
                    target['display'] = value;
                }
                break;
            case 'align-items':
            case 'align-self':
            case 'align-content':
            case 'flex':
            case 'flex-basis':
            case 'flex-flow':
            case 'flex-grow':
            case 'flex-shrink':
            case 'flex-wrap':
            case 'justify-content':
                target['-webkit-' + key] = value;
                break;
            case 'flex-direction':
                value = value || 'row';
                target['-webkit-flex-direction'] = value;
                target['flex-direction'] = value;
                break;
            case 'order':
                target['order'] = target['-webkit-' + key] = isNaN(value) ? '0' : value;
                break;
        }
    }
    return target;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var StyleUtils = /** @class */ (function () {
    function StyleUtils(_serverStylesheet, _serverModuleLoaded, _platformId, layoutConfig) {
        this._serverStylesheet = _serverStylesheet;
        this._serverModuleLoaded = _serverModuleLoaded;
        this._platformId = _platformId;
        this.layoutConfig = layoutConfig;
    }
    /**
     * Applies styles given via string pair or object map to the directive element
     */
    /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} element
     * @param {?} style
     * @param {?=} value
     * @return {?}
     */
    StyleUtils.prototype.applyStyleToElement = /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} element
     * @param {?} style
     * @param {?=} value
     * @return {?}
     */
    function (element, style, value) {
        /** @type {?} */
        var styles = {};
        if (typeof style === 'string') {
            styles[style] = value;
            style = styles;
        }
        styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);
        this._applyMultiValueStyleToElement(styles, element);
    };
    /**
     * Applies styles given via string pair or object map to the directive's element
     */
    /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?=} elements
     * @return {?}
     */
    StyleUtils.prototype.applyStyleToElements = /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?=} elements
     * @return {?}
     */
    function (style, elements) {
        var _this = this;
        if (elements === void 0) { elements = []; }
        /** @type {?} */
        var styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);
        elements.forEach(function (el) {
            _this._applyMultiValueStyleToElement(styles, el);
        });
    };
    /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     */
    /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     * @param {?} target
     * @return {?}
     */
    StyleUtils.prototype.getFlowDirection = /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     * @param {?} target
     * @return {?}
     */
    function (target) {
        /** @type {?} */
        var query = 'flex-direction';
        /** @type {?} */
        var value = this.lookupStyle(target, query);
        if (value === FALLBACK_STYLE) {
            value = '';
        }
        /** @type {?} */
        var hasInlineValue = this.lookupInlineStyle(target, query) ||
            (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this._platformId) && this._serverModuleLoaded) ? value : '';
        return [value || 'row', hasInlineValue];
    };
    /**
     * Find the DOM element's raw attribute value (if any)
     */
    /**
     * Find the DOM element's raw attribute value (if any)
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    StyleUtils.prototype.lookupAttributeValue = /**
     * Find the DOM element's raw attribute value (if any)
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    function (element, attribute) {
        return element.getAttribute(attribute) || '';
    };
    /**
     * Find the DOM element's inline style value (if any)
     */
    /**
     * Find the DOM element's inline style value (if any)
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    StyleUtils.prototype.lookupInlineStyle = /**
     * Find the DOM element's inline style value (if any)
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    function (element, styleName) {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) ?
            element.style[styleName] : this._getServerStyle(element, styleName);
    };
    /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     */
    /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     * @param {?} element
     * @param {?} styleName
     * @param {?=} inlineOnly
     * @return {?}
     */
    StyleUtils.prototype.lookupStyle = /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     * @param {?} element
     * @param {?} styleName
     * @param {?=} inlineOnly
     * @return {?}
     */
    function (element, styleName, inlineOnly) {
        if (inlineOnly === void 0) { inlineOnly = false; }
        /** @type {?} */
        var value = '';
        if (element) {
            /** @type {?} */
            var immediateValue = value = this.lookupInlineStyle(element, styleName);
            if (!immediateValue) {
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId)) {
                    if (!inlineOnly) {
                        value = getComputedStyle(element).getPropertyValue(styleName);
                    }
                }
                else {
                    if (this._serverModuleLoaded) {
                        value = this._serverStylesheet.getStyleForElement(element, styleName);
                    }
                }
            }
        }
        // Note: 'inline' is the default of all elements, unless UA stylesheet overrides;
        //       in which case getComputedStyle() should determine a valid value.
        return value ? value.trim() : FALLBACK_STYLE;
    };
    /**
     * Applies the styles to the element. The styles object map may contain an array of values
     * Each value will be added as element style
     * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
     * @param {?} styles
     * @param {?} element
     * @return {?}
     */
    StyleUtils.prototype._applyMultiValueStyleToElement = /**
     * Applies the styles to the element. The styles object map may contain an array of values
     * Each value will be added as element style
     * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
     * @param {?} styles
     * @param {?} element
     * @return {?}
     */
    function (styles, element) {
        var _this = this;
        Object.keys(styles).sort().forEach(function (key) {
            /** @type {?} */
            var values = Array.isArray(styles[key]) ? styles[key] : [styles[key]];
            values.sort();
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this._platformId) || !_this._serverModuleLoaded) {
                    Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this._platformId) ?
                        element.style.setProperty(key, value) : _this._setServerStyle(element, key, value);
                }
                else {
                    _this._serverStylesheet.addStyleToElement(element, key, value);
                }
            }
        });
    };
    /**
     * @param {?} element
     * @param {?} styleName
     * @param {?=} styleValue
     * @return {?}
     */
    StyleUtils.prototype._setServerStyle = /**
     * @param {?} element
     * @param {?} styleName
     * @param {?=} styleValue
     * @return {?}
     */
    function (element, styleName, styleValue) {
        styleName = styleName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        /** @type {?} */
        var styleMap = this._readStyleAttribute(element);
        styleMap[styleName] = styleValue || '';
        this._writeStyleAttribute(element, styleMap);
    };
    /**
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    StyleUtils.prototype._getServerStyle = /**
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    function (element, styleName) {
        /** @type {?} */
        var styleMap = this._readStyleAttribute(element);
        return styleMap[styleName] || '';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    StyleUtils.prototype._readStyleAttribute = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var styleMap = {};
        /** @type {?} */
        var styleAttribute = element.getAttribute('style');
        if (styleAttribute) {
            /** @type {?} */
            var styleList = styleAttribute.split(/;+/g);
            for (var i = 0; i < styleList.length; i++) {
                /** @type {?} */
                var style = styleList[i].trim();
                if (style.length > 0) {
                    /** @type {?} */
                    var colonIndex = style.indexOf(':');
                    if (colonIndex === -1) {
                        throw new Error("Invalid CSS style: " + style);
                    }
                    /** @type {?} */
                    var name_1 = style.substr(0, colonIndex).trim();
                    styleMap[name_1] = style.substr(colonIndex + 1).trim();
                }
            }
        }
        return styleMap;
    };
    /**
     * @param {?} element
     * @param {?} styleMap
     * @return {?}
     */
    StyleUtils.prototype._writeStyleAttribute = /**
     * @param {?} element
     * @param {?} styleMap
     * @return {?}
     */
    function (element, styleMap) {
        /** @type {?} */
        var styleAttrValue = '';
        for (var key in styleMap) {
            /** @type {?} */
            var newValue = styleMap[key];
            if (newValue) {
                styleAttrValue += key + ':' + styleMap[key] + ';';
            }
        }
        element.setAttribute('style', styleAttrValue);
    };
    StyleUtils.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    StyleUtils.ctorParameters = function () { return [
        { type: StylesheetMap, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SERVER_TOKEN,] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LAYOUT_CONFIG,] }] }
    ]; };
    /** @nocollapse */ StyleUtils.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function StyleUtils_Factory() { return new StyleUtils(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(StylesheetMap, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVER_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(LAYOUT_CONFIG)); }, token: StyleUtils, providedIn: "root" });
    return StyleUtils;
}());
/** @type {?} */
var FALLBACK_STYLE = 'block';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * The flex API permits 3 or 1 parts of the value:
 *    - `flex-grow flex-shrink flex-basis`, or
 *    - `flex-basis`
 * @param {?} basis
 * @param {?=} grow
 * @param {?=} shrink
 * @return {?}
 */
function validateBasis(basis, grow, shrink) {
    if (grow === void 0) { grow = '1'; }
    if (shrink === void 0) { shrink = '1'; }
    /** @type {?} */
    var parts = [grow, shrink, basis];
    /** @type {?} */
    var j = basis.indexOf('calc');
    if (j > 0) {
        parts[2] = _validateCalcValue(basis.substring(j).trim());
        /** @type {?} */
        var matches = basis.substr(0, j).trim().split(' ');
        if (matches.length == 2) {
            parts[0] = matches[0];
            parts[1] = matches[1];
        }
    }
    else if (j == 0) {
        parts[2] = _validateCalcValue(basis.trim());
    }
    else {
        /** @type {?} */
        var matches = basis.split(' ');
        parts = (matches.length === 3) ? matches : [
            grow, shrink, basis
        ];
    }
    return parts;
}
/**
 * Calc expressions require whitespace before & after any expression operators
 * This is a simple, crude whitespace padding solution.
 *   - '3 3 calc(15em + 20px)'
 *   - calc(100% / 7 * 2)
 *   - 'calc(15em + 20px)'
 *   - 'calc(15em+20px)'
 *   - '37px'
 *   = '43%'
 * @param {?} calc
 * @return {?}
 */
function _validateCalcValue(calc) {
    return calc.replace(/[\s]/g, '').replace(/[\/\*\+\-]/g, ' $& ');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=core.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm5/extended.es5.js":
/*!****************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm5/extended.es5.js ***!
  \****************************************************************/
/*! exports provided: ExtendedModule, ClassDirective, ImgSrcDirective, negativeOf, ShowHideDirective, StyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedModule", function() { return ExtendedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return ClassDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function() { return ImgSrcDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negativeOf", function() { return negativeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function() { return ShowHideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return StyleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * This directive provides a responsive API for the HTML <img> 'src' attribute
 * and will update the img.src property upon each responsive activation.
 *
 * e.g.
 *      <img src="defaultScene.jpg" src.xs="mobileScene.jpg"></img>
 *
 * @see https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-src/
 */
var ImgSrcDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ImgSrcDirective, _super);
    /* tslint:enable */
    function ImgSrcDirective(_elRef, _monitor, _styler, _platformId, _serverModuleLoaded) {
        var _this = _super.call(this, _monitor, _elRef, _styler) || this;
        _this._elRef = _elRef;
        _this._monitor = _monitor;
        _this._styler = _styler;
        _this._platformId = _platformId;
        _this._serverModuleLoaded = _serverModuleLoaded;
        _this._cacheInput('src', _elRef.nativeElement.getAttribute('src') || '');
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(_this._platformId) && _this._serverModuleLoaded) {
            _this.nativeElement.setAttribute('src', '');
        }
        return _this;
    }
    Object.defineProperty(ImgSrcDirective.prototype, "srcBase", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this.cacheDefaultSrc(val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtLg', val); },
        enumerable: true,
        configurable: true
    });
    /**
     * Listen for responsive changes to update the img.src attribute
     */
    /**
     * Listen for responsive changes to update the img.src attribute
     * @return {?}
     */
    ImgSrcDirective.prototype.ngOnInit = /**
     * Listen for responsive changes to update the img.src attribute
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        if (this.hasResponsiveKeys) {
            // Listen for responsive changes
            this._listenForMediaQueryChanges('src', this.defaultSrc, function () {
                _this._updateSrcFor();
            });
        }
        this._updateSrcFor();
    };
    /**
     * Update the 'src' property of the host <img> element
     */
    /**
     * Update the 'src' property of the host <img> element
     * @return {?}
     */
    ImgSrcDirective.prototype.ngOnChanges = /**
     * Update the 'src' property of the host <img> element
     * @return {?}
     */
    function () {
        if (this.hasInitialized) {
            this._updateSrcFor();
        }
    };
    /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     */
    /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     * @return {?}
     */
    ImgSrcDirective.prototype._updateSrcFor = /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     * @return {?}
     */
    function () {
        if (this.hasResponsiveKeys) {
            /** @type {?} */
            var url = this.activatedValue || this.defaultSrc;
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this._platformId) && this._serverModuleLoaded) {
                this._styler.applyStyleToElement(this.nativeElement, { 'content': url ? "url(" + url + ")" : '' });
            }
            else {
                this.nativeElement.setAttribute('src', String(url));
            }
        }
    };
    /**
     * Cache initial value of 'src', this will be used as fallback when breakpoint
     * activations change.
     * NOTE: The default 'src' property is not bound using @Input(), so perform
     * a post-ngOnInit() lookup of the default src value (if any).
     */
    /**
     * Cache initial value of 'src', this will be used as fallback when breakpoint
     * activations change.
     * NOTE: The default 'src' property is not bound using \@Input(), so perform
     * a post-ngOnInit() lookup of the default src value (if any).
     * @param {?=} value
     * @return {?}
     */
    ImgSrcDirective.prototype.cacheDefaultSrc = /**
     * Cache initial value of 'src', this will be used as fallback when breakpoint
     * activations change.
     * NOTE: The default 'src' property is not bound using \@Input(), so perform
     * a post-ngOnInit() lookup of the default src value (if any).
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        this._cacheInput('src', value || '');
    };
    Object.defineProperty(ImgSrcDirective.prototype, "defaultSrc", {
        /**
         * Empty values are maintained, undefined values are exposed as ''
         */
        get: /**
         * Empty values are maintained, undefined values are exposed as ''
         * @return {?}
         */
        function () {
            return this._queryInput('src') || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "hasResponsiveKeys", {
        /**
         * Does the <img> have 1 or more src.<xxx> responsive inputs
         * defined... these will be mapped to activated breakpoints.
         */
        get: /**
         * Does the <img> have 1 or more src.<xxx> responsive inputs
         * defined... these will be mapped to activated breakpoints.
         * @return {?}
         */
        function () {
            return Object.keys(this._inputMap).length > 1;
        },
        enumerable: true,
        configurable: true
    });
    ImgSrcDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "\n  img[src.xs],    img[src.sm],    img[src.md],    img[src.lg],   img[src.xl],\n  img[src.lt-sm], img[src.lt-md], img[src.lt-lg], img[src.lt-xl],\n  img[src.gt-xs], img[src.gt-sm], img[src.gt-md], img[src.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    ImgSrcDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"],] }] }
    ]; };
    ImgSrcDirective.propDecorators = {
        srcBase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src',] }],
        srcXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.xs',] }],
        srcSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.sm',] }],
        srcMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.md',] }],
        srcLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.lg',] }],
        srcXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.xl',] }],
        srcLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.lt-sm',] }],
        srcLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.lt-md',] }],
        srcLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.lt-lg',] }],
        srcLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.lt-xl',] }],
        srcGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.gt-xs',] }],
        srcGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.gt-sm',] }],
        srcGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.gt-md',] }],
        srcGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.gt-lg',] }]
    };
    return ImgSrcDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Directive to add responsive support for ngClass.
 * This maintains the core functionality of 'ngClass' and adds responsive API
 * Note: this class is a no-op when rendered on the server
 */
var ClassDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClassDirective, _super);
    /* tslint:enable */
    function ClassDirective(monitor, _iterableDiffers, _keyValueDiffers, _ngEl, _renderer, _ngClassInstance, _styler) {
        var _this = _super.call(this, monitor, _ngEl, _styler) || this;
        _this.monitor = monitor;
        _this._iterableDiffers = _iterableDiffers;
        _this._keyValueDiffers = _keyValueDiffers;
        _this._ngEl = _ngEl;
        _this._renderer = _renderer;
        _this._ngClassInstance = _ngClassInstance;
        _this._styler = _styler;
        _this._configureAdapters();
        return _this;
    }
    Object.defineProperty(ClassDirective.prototype, "ngClassBase", {
        /**
         * Intercept ngClass assignments so we cache the default classes
         * which are merged with activated styles or used as fallbacks.
         * Note: Base ngClass values are applied during ngDoCheck()
         */
        set: /**
         * Intercept ngClass assignments so we cache the default classes
         * which are merged with activated styles or used as fallbacks.
         * Note: Base ngClass values are applied during ngDoCheck()
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var key = 'ngClass';
            this._base.cacheInput(key, val, true);
            this._ngClassInstance.ngClass = this._base.queryInput(key);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "klazz", {
        /**
         * Capture class assignments so we cache the default classes
         * which are merged with activated styles and used as fallbacks.
         */
        set: /**
         * Capture class assignments so we cache the default classes
         * which are merged with activated styles and used as fallbacks.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var key = 'class';
            this._base.cacheInput(key, val);
            this._ngClassInstance.klass = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassXs", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    // ******************************************************************
    // Lifecycle Hooks
    // ******************************************************************
    /**
     * For @Input changes on the current mq activation property
     */
    /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    ClassDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._base.activeKey in changes) {
            this._ngClassInstance.ngClass = this._base.mqActivation.activatedInput || '';
        }
    };
    /**
     * @return {?}
     */
    ClassDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._configureMQListener();
    };
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     */
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    ClassDirective.prototype.ngDoCheck = /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    function () {
        this._ngClassInstance.ngDoCheck();
    };
    /**
     * @return {?}
     */
    ClassDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._base.ngOnDestroy();
        delete this._ngClassInstance;
    };
    // ******************************************************************
    // Internal Methods
    // ******************************************************************
    /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     */
    /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     * @return {?}
     */
    ClassDirective.prototype._configureAdapters = /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     * @return {?}
     */
    function () {
        this._base = new _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirectiveAdapter"]('ngClass', this.monitor, this._ngEl, this._styler);
        if (!this._ngClassInstance) {
            // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been defined on
            // the same host element; since the responsive variations may be defined...
            this._ngClassInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"](this._iterableDiffers, this._keyValueDiffers, this._ngEl, this._renderer);
        }
    };
    /**
     * Build an mqActivation object that bridges mql change events to onMediaQueryChange handlers
     * NOTE: We delegate subsequent activity to the NgClass logic
     *       Identify the activated input value and update the ngClass iterables...
     *       Use ngDoCheck() to actually apply the values to the element
     */
    /**
     * Build an mqActivation object that bridges mql change events to onMediaQueryChange handlers
     * NOTE: We delegate subsequent activity to the NgClass logic
     *       Identify the activated input value and update the ngClass iterables...
     *       Use ngDoCheck() to actually apply the values to the element
     * @param {?=} baseKey
     * @return {?}
     */
    ClassDirective.prototype._configureMQListener = /**
     * Build an mqActivation object that bridges mql change events to onMediaQueryChange handlers
     * NOTE: We delegate subsequent activity to the NgClass logic
     *       Identify the activated input value and update the ngClass iterables...
     *       Use ngDoCheck() to actually apply the values to the element
     * @param {?=} baseKey
     * @return {?}
     */
    function (baseKey) {
        var _this = this;
        if (baseKey === void 0) { baseKey = 'ngClass'; }
        /** @type {?} */
        var fallbackValue = this._base.queryInput(baseKey);
        this._base.listenForMediaQueryChanges(baseKey, fallbackValue, function (changes) {
            _this._ngClassInstance.ngClass = changes.value || '';
            _this._ngClassInstance.ngDoCheck();
        });
    };
    ClassDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "\n    [ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl],\n    [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl],\n    [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]\n  "
                },] },
    ];
    /** @nocollapse */
    ClassDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] }
    ]; };
    ClassDirective.propDecorators = {
        ngClassBase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass',] }],
        klazz: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['class',] }],
        ngClassXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.xs',] }],
        ngClassSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.sm',] }],
        ngClassMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.md',] }],
        ngClassLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.lg',] }],
        ngClassXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.xl',] }],
        ngClassLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.lt-sm',] }],
        ngClassLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.lt-md',] }],
        ngClassLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.lt-lg',] }],
        ngClassLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.lt-xl',] }],
        ngClassGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.gt-xs',] }],
        ngClassGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.gt-sm',] }],
        ngClassGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.gt-md',] }],
        ngClassGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.gt-lg',] }]
    };
    return ClassDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var FALSY = ['false', false, 0];
/**
 * For fxHide selectors, we invert the 'value'
 * and assign to the equivalent fxShow selector cache
 *  - When 'hide' === '' === true, do NOT show the element
 *  - When 'hide' === false or 0... we WILL show the element
 * @param {?} hide
 * @return {?}
 */
function negativeOf(hide) {
    return (hide === '') ? false :
        ((hide === 'false') || (hide === 0)) ? true : !hide;
}
/**
 * 'show' Layout API directive
 *
 */
var ShowHideDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ShowHideDirective, _super);
    /* tslint:enable */
    function ShowHideDirective(monitor, layout, elRef, styleUtils, platformId, serverModuleLoaded) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this.layout = layout;
        _this.elRef = elRef;
        _this.styleUtils = styleUtils;
        _this.platformId = platformId;
        _this.serverModuleLoaded = serverModuleLoaded;
        if (layout) {
            /**
                   * The Layout can set the display:flex (and incorrectly affect the Hide/Show directives.
                   * Whenever Layout [on the same element] resets its CSS, then update the Hide/Show CSS
                   */
            /**
             * The Layout can set the display:flex (and incorrectly affect the Hide/Show directives.
             * Whenever Layout [on the same element] resets its CSS, then update the Hide/Show CSS
             */
            _this._layoutWatcher = layout.layout$.subscribe(function () { return _this._updateWithValue(); });
        }
        return _this;
    }
    Object.defineProperty(ShowHideDirective.prototype, "show", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('show', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hide", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('show', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXs', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showSm', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showMd', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLg', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXl', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtSm', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtMd', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtLg', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtXl', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtXs', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtSm', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtMd', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtLg', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     */
    /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     * @return {?}
     */
    ShowHideDirective.prototype._getDisplayStyle = /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     * @return {?}
     */
    function () {
        return this.layout ? 'flex' : _super.prototype._getDisplayStyle.call(this);
    };
    /**
     * On changes to any @Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     */
    /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    ShowHideDirective.prototype.ngOnChanges = /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.hasInitialized && (changes['show'] != null || this._mqActivation)) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ShowHideDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._display = this._getDisplayStyle();
        /** @type {?} */
        var value = this._getDefaultVal('show', true);
        // Build _mqActivation controller
        this._listenForMediaQueryChanges('show', value, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    /**
     * @return {?}
     */
    ShowHideDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /** Validate the visibility value and then update the host's inline display style */
    /**
     * Validate the visibility value and then update the host's inline display style
     * @param {?=} value
     * @return {?}
     */
    ShowHideDirective.prototype._updateWithValue = /**
     * Validate the visibility value and then update the host's inline display style
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._getDefaultVal('show', true);
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        /** @type {?} */
        var shouldShow = this._validateTruthy(value);
        this._applyStyleToElement(this._buildCSS(shouldShow));
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this.platformId) && this.serverModuleLoaded) {
            this.nativeElement.style.setProperty('display', '');
        }
    };
    /** Build the CSS that should be assigned to the element instance */
    /**
     * Build the CSS that should be assigned to the element instance
     * @param {?} show
     * @return {?}
     */
    ShowHideDirective.prototype._buildCSS = /**
     * Build the CSS that should be assigned to the element instance
     * @param {?} show
     * @return {?}
     */
    function (show) {
        return { 'display': show ? this._display : 'none' };
    };
    /**  Validate the to be not FALSY */
    /**
     * Validate the to be not FALSY
     * @param {?} show
     * @return {?}
     */
    ShowHideDirective.prototype._validateTruthy = /**
     * Validate the to be not FALSY
     * @param {?} show
     * @return {?}
     */
    function (show) {
        return (FALSY.indexOf(show) == -1);
    };
    ShowHideDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "\n  [fxShow],\n  [fxShow.xs], [fxShow.sm], [fxShow.md], [fxShow.lg], [fxShow.xl],\n  [fxShow.lt-sm], [fxShow.lt-md], [fxShow.lt-lg], [fxShow.lt-xl],\n  [fxShow.gt-xs], [fxShow.gt-sm], [fxShow.gt-md], [fxShow.gt-lg],\n  [fxHide],\n  [fxHide.xs], [fxHide.sm], [fxHide.md], [fxHide.lg], [fxHide.xl],\n  [fxHide.lt-sm], [fxHide.lt-md], [fxHide.lt-lg], [fxHide.lt-xl],\n  [fxHide.gt-xs], [fxHide.gt-sm], [fxHide.gt-md], [fxHide.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    ShowHideDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"] },
        { type: _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"],] }] }
    ]; };
    ShowHideDirective.propDecorators = {
        show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow',] }],
        showXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.xs',] }],
        showSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.sm',] }],
        showMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.md',] }],
        showLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.lg',] }],
        showXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.xl',] }],
        showLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.lt-sm',] }],
        showLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.lt-md',] }],
        showLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.lt-lg',] }],
        showLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.lt-xl',] }],
        showGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.gt-xs',] }],
        showGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.gt-sm',] }],
        showGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.gt-md',] }],
        showGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.gt-lg',] }],
        hide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide',] }],
        hideXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.xs',] }],
        hideSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.sm',] }],
        hideMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.md',] }],
        hideLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.lg',] }],
        hideXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.xl',] }],
        hideLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.lt-sm',] }],
        hideLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.lt-md',] }],
        hideLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.lt-lg',] }],
        hideLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.lt-xl',] }],
        hideGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.gt-xs',] }],
        hideGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.gt-sm',] }],
        hideGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.gt-md',] }],
        hideGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.gt-lg',] }]
    };
    return ShowHideDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * NgStyle allowed inputs
 */
var /**
 * NgStyle allowed inputs
 */
NgStyleKeyValue = /** @class */ (function () {
    function NgStyleKeyValue(key, value, noQuotes) {
        if (noQuotes === void 0) { noQuotes = true; }
        this.key = key;
        this.value = value;
        this.key = noQuotes ? key.replace(/['"]/g, '').trim() : key.trim();
        this.value = noQuotes ? value.replace(/['"]/g, '').trim() : value.trim();
        this.value = this.value.replace(/;/, '');
    }
    return NgStyleKeyValue;
}());
/** *
 * Transform Operators for \@angular/flex-layout NgStyle Directive
  @type {?} */
var ngStyleUtils = {
    getType: getType,
    buildRawList: buildRawList,
    buildMapFromList: buildMapFromList,
    buildMapFromSet: buildMapFromSet
};
/**
 * @param {?} target
 * @return {?}
 */
function getType(target) {
    /** @type {?} */
    var what = typeof target;
    if (what === 'object') {
        return (target.constructor === Array) ? 'array' :
            (target.constructor === Set) ? 'set' : 'object';
    }
    return what;
}
/**
 * Split string of key:value pairs into Array of k-v pairs
 * e.g.  'key:value; key:value; key:value;' -> ['key:value',...]
 * @param {?} source
 * @param {?=} delimiter
 * @return {?}
 */
function buildRawList(source, delimiter) {
    if (delimiter === void 0) { delimiter = ';'; }
    return String(source)
        .trim()
        .split(delimiter)
        .map(function (val) { return val.trim(); })
        .filter(function (val) { return val !== ''; });
}
/**
 * Convert array of key:value strings to a iterable map object
 * @param {?} styles
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromList(styles, sanitize) {
    /** @type {?} */
    var sanitizeValue = function (it) {
        if (sanitize) {
            it.value = sanitize(it.value);
        }
        return it;
    };
    return styles
        .map(stringToKeyValue)
        .filter(function (entry) { return !!entry; })
        .map(sanitizeValue)
        .reduce(keyValuesToMap, {});
}
/**
 * Convert Set<string> or raw Object to an iterable NgStyleMap
 * @param {?} source
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromSet(source, sanitize) {
    /** @type {?} */
    var list = new Array();
    if (getType(source) == 'set') {
        source.forEach(function (entry) { return list.push(entry); });
    }
    else { // simple hashmap
        // simple hashmap
        Object.keys(source).forEach(function (key) {
            list.push(key + ":" + source[key]);
        });
    }
    return buildMapFromList(list, sanitize);
}
/**
 * Convert 'key:value' -> [key, value]
 * @param {?} it
 * @return {?}
 */
function stringToKeyValue(it) {
    var _a = it.split(':'), key = _a[0], val = _a[1];
    return new NgStyleKeyValue(key, val);
}
/**
 * Convert [ [key,value] ] -> { key : value }
 * @param {?} map
 * @param {?} entry
 * @return {?}
 */
function keyValuesToMap(map, entry) {
    if (!!entry.key) {
        map[entry.key] = entry.value;
    }
    return map;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Directive to add responsive support for ngStyle.
 *
 */
var StyleDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StyleDirective, _super);
    /* tslint:enable */
    /**
     *  Constructor for the ngStyle subclass; which adds selectors and
     *  a MediaQuery Activation Adapter
     */
    function StyleDirective(monitor, _sanitizer, _ngEl, _renderer, _differs, _ngStyleInstance, _styler) {
        var _this = _super.call(this, monitor, _ngEl, _styler) || this;
        _this.monitor = monitor;
        _this._sanitizer = _sanitizer;
        _this._ngEl = _ngEl;
        _this._renderer = _renderer;
        _this._differs = _differs;
        _this._ngStyleInstance = _ngStyleInstance;
        _this._styler = _styler;
        _this._configureAdapters();
        return _this;
    }
    Object.defineProperty(StyleDirective.prototype, "ngStyleBase", {
        /**
         * Intercept ngStyle assignments so we cache the default styles
         * which are merged with activated styles or used as fallbacks.
         */
        set: /**
         * Intercept ngStyle assignments so we cache the default styles
         * which are merged with activated styles or used as fallbacks.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var key = 'ngStyle';
            this._base.cacheInput(key, val, true); // convert val to hashmap
            this._ngStyleInstance.ngStyle = this._base.queryInput(key);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleXs", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    // ******************************************************************
    // Lifecycle Hooks
    // ******************************************************************
    /** For @Input changes on the current mq activation property */
    /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    StyleDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._base.activeKey in changes) {
            this._ngStyleInstance.ngStyle = this._base.mqActivation.activatedInput || '';
        }
    };
    /**
     * @return {?}
     */
    StyleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._configureMQListener();
    };
    /** For ChangeDetectionStrategy.onPush and ngOnChanges() updates */
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    StyleDirective.prototype.ngDoCheck = /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    function () {
        this._ngStyleInstance.ngDoCheck();
    };
    /**
     * @return {?}
     */
    StyleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._base.ngOnDestroy();
        delete this._ngStyleInstance;
    };
    // ******************************************************************
    // Internal Methods
    // ******************************************************************
    /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     */
    /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     * @return {?}
     */
    StyleDirective.prototype._configureAdapters = /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     * @return {?}
     */
    function () {
        this._base = new _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirectiveAdapter"]('ngStyle', this.monitor, this._ngEl, this._styler);
        if (!this._ngStyleInstance) {
            // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been
            // defined on the same host element; since the responsive variations may be defined...
            this._ngStyleInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"](this._differs, this._ngEl, this._renderer);
        }
        this._buildCacheInterceptor();
        this._fallbackToStyle();
    };
    /**
     * Build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * Build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @param {?=} baseKey
     * @return {?}
     */
    StyleDirective.prototype._configureMQListener = /**
     * Build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @param {?=} baseKey
     * @return {?}
     */
    function (baseKey) {
        var _this = this;
        if (baseKey === void 0) { baseKey = 'ngStyle'; }
        /** @type {?} */
        var fallbackValue = this._base.queryInput(baseKey);
        this._base.listenForMediaQueryChanges(baseKey, fallbackValue, function (changes) {
            _this._ngStyleInstance.ngStyle = changes.value || '';
            _this._ngStyleInstance.ngDoCheck();
        });
    };
    // ************************************************************************
    // Private Internal Methods
    // ************************************************************************
    /** Build intercept to convert raw strings to ngStyleMap */
    /**
     * Build intercept to convert raw strings to ngStyleMap
     * @return {?}
     */
    StyleDirective.prototype._buildCacheInterceptor = /**
     * Build intercept to convert raw strings to ngStyleMap
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var cacheInput = this._base.cacheInput.bind(this._base);
        this._base.cacheInput = function (key, source, cacheRaw, merge) {
            if (cacheRaw === void 0) { cacheRaw = false; }
            if (merge === void 0) { merge = true; }
            /** @type {?} */
            var styles = _this._buildStyleMap(source);
            if (merge) {
                styles = extendObject({}, _this._base.inputMap['ngStyle'], styles);
            }
            cacheInput(key, styles, cacheRaw);
        };
    };
    /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     */
    /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     * @param {?} styles
     * @return {?}
     */
    StyleDirective.prototype._buildStyleMap = /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     * @param {?} styles
     * @return {?}
     */
    function (styles) {
        var _this = this;
        /** @type {?} */
        var sanitizer = function (val) {
            // Always safe-guard (aka sanitize) style property values
            return _this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].STYLE, val) || '';
        };
        if (styles) {
            switch (ngStyleUtils.getType(styles)) {
                case 'string': return ngStyleUtils.buildMapFromList(ngStyleUtils.buildRawList(styles), sanitizer);
                case 'array': return ngStyleUtils.buildMapFromList(/** @type {?} */ (styles), sanitizer);
                case 'set': return ngStyleUtils.buildMapFromSet(styles, sanitizer);
                default: return ngStyleUtils.buildMapFromSet(styles, sanitizer);
            }
        }
        return styles;
    };
    /** Initial lookup of raw 'class' value (if any) */
    /**
     * Initial lookup of raw 'class' value (if any)
     * @return {?}
     */
    StyleDirective.prototype._fallbackToStyle = /**
     * Initial lookup of raw 'class' value (if any)
     * @return {?}
     */
    function () {
        if (!this._base.queryInput('ngStyle')) {
            this.ngStyleBase = this._getAttributeValue('style') || '';
        }
    };
    StyleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "\n    [ngStyle.xs], [ngStyle.sm], [ngStyle.md], [ngStyle.lg], [ngStyle.xl],\n    [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl],\n    [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg]\n  "
                },] },
    ];
    /** @nocollapse */
    StyleDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] }
    ]; };
    StyleDirective.propDecorators = {
        ngStyleBase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle',] }],
        ngStyleXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.xs',] }],
        ngStyleSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.sm',] }],
        ngStyleMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.md',] }],
        ngStyleLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.lg',] }],
        ngStyleXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.xl',] }],
        ngStyleLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.lt-sm',] }],
        ngStyleLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.lt-md',] }],
        ngStyleLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.lt-lg',] }],
        ngStyleLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.lt-xl',] }],
        ngStyleGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.gt-xs',] }],
        ngStyleGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.gt-sm',] }],
        ngStyleGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.gt-md',] }],
        ngStyleGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.gt-lg',] }]
    };
    return StyleDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ALL_DIRECTIVES = [
    ShowHideDirective,
    ClassDirective,
    StyleDirective,
    ImgSrcDirective
];
/**
 * *****************************************************************
 * Define module for the Extended API
 * *****************************************************************
 */
var ExtendedModule = /** @class */ (function () {
    function ExtendedModule() {
    }
    ExtendedModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]],
                    declarations: ALL_DIRECTIVES.slice(),
                    exports: ALL_DIRECTIVES.slice()
                },] },
    ];
    return ExtendedModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=extended.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js ***!
  \*******************************************************************/
/*! exports provided: removeStyles, BROWSER_PROVIDER, CLASS_NAME, CoreModule, MediaChange, StylesheetMap, STYLESHEET_MAP_PROVIDER_FACTORY, STYLESHEET_MAP_PROVIDER, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, BaseDirective, BaseDirectiveAdapter, BaseFxDirective, RESPONSIVE_ALIASES, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MatchMedia, MockMatchMedia, MockMediaQueryList, MockMatchMediaProvider, ServerMediaQueryList, ServerMatchMedia, MediaMonitor, MEDIA_MONITOR_PROVIDER_FACTORY, MEDIA_MONITOR_PROVIDER, ObservableMedia, MediaService, ObservableMediaProvider, OBSERVABLE_MEDIA_PROVIDER_FACTORY, OBSERVABLE_MEDIA_PROVIDER, KeyOptions, ResponsiveActivation, StyleUtils, validateBasis, ExtendedModule, ClassDirective, ImgSrcDirective, negativeOf, ShowHideDirective, StyleDirective, FlexModule, FlexDirective, FlexAlignDirective, FlexFillDirective, FlexOffsetDirective, FlexOrderDirective, LayoutDirective, LayoutAlignDirective, LayoutGapDirective, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵa, ɵj, ɵk, GridModule, VERSION, FlexLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexLayoutModule", function() { return FlexLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStyles", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["removeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BROWSER_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CLASS_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaChange", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesheetMap", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StylesheetMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STYLESHEET_MAP_PROVIDER_FACTORY", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["STYLESHEET_MAP_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STYLESHEET_MAP_PROVIDER", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["STYLESHEET_MAP_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDirective", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDirectiveAdapter", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirectiveAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseFxDirective", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseFxDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RESPONSIVE_ALIASES", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["RESPONSIVE_ALIASES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_BREAKPOINTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenTypes", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ScreenTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ORIENTATION_BREAKPOINTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BreakPointRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatchMedia", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MatchMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockMatchMedia", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MockMatchMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockMediaQueryList", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MockMediaQueryList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockMatchMediaProvider", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MockMatchMediaProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerMediaQueryList", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ServerMediaQueryList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerMatchMedia", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ServerMatchMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaMonitor", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MEDIA_MONITOR_PROVIDER_FACTORY", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MEDIA_MONITOR_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MEDIA_MONITOR_PROVIDER", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MEDIA_MONITOR_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableMedia", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableMediaProvider", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ObservableMediaProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OBSERVABLE_MEDIA_PROVIDER_FACTORY", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["OBSERVABLE_MEDIA_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OBSERVABLE_MEDIA_PROVIDER", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["OBSERVABLE_MEDIA_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyOptions", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["KeyOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveActivation", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ResponsiveActivation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleUtils", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateBasis", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["validateBasis"]; });

/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendedModule", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ClassDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ImgSrcDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "negativeOf", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["negativeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ShowHideDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["StyleDirective"]; });

/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexModule", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexAlignDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOffsetDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOrderDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutAlignDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutGapDirective"]; });

/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/esm5/grid.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵa"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]; });

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Current version of Angular Flex-Layout.
  @type {?} */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('6.0.0-beta.18');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * FlexLayoutModule -- the main import for all utilities in the Angular Layout library
 * * Will automatically provide Flex, Grid, and Extended modules for use in the application
 * * Can be configured using the static withConfig method, options viewable on the Wiki's
 *   Configuration page
 */
var FlexLayoutModule = /** @class */ (function () {
    function FlexLayoutModule(serverModuleLoaded, platformId) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(platformId) && !serverModuleLoaded) {
            console.warn('Warning: Flex Layout loaded on the server without FlexLayoutServerModule');
        }
    }
    /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     */
    /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     * @param {?} configOptions
     * @param {?=} breakpoints
     * @return {?}
     */
    FlexLayoutModule.withConfig = /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     * @param {?} configOptions
     * @param {?=} breakpoints
     * @return {?}
     */
    function (configOptions, breakpoints) {
        return {
            ngModule: FlexLayoutModule,
            providers: Array.isArray(breakpoints) ?
                configOptions.serverLoaded ?
                    [
                        { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], useValue: configOptions },
                        { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"], useValue: breakpoints, multi: true },
                        { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"], useValue: true },
                    ] : [
                    { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], useValue: configOptions },
                    { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"], useValue: breakpoints, multi: true },
                ]
                :
                    configOptions.serverLoaded ?
                        [
                            { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], useValue: configOptions },
                            { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"], useValue: true },
                        ] :
                        [
                            { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], useValue: configOptions },
                        ]
        };
    };
    FlexLayoutModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]],
                    exports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]]
                },] },
    ];
    /** @nocollapse */
    FlexLayoutModule.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"],] }] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
    ]; };
    return FlexLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=flex-layout.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm5/flex.es5.js":
/*!************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm5/flex.es5.js ***!
  \************************************************************/
/*! exports provided: FlexModule, FlexDirective, FlexAlignDirective, FlexFillDirective, FlexOffsetDirective, FlexOrderDirective, LayoutDirective, LayoutAlignDirective, LayoutGapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexModule", function() { return FlexModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexDirective", function() { return FlexDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function() { return FlexAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function() { return FlexFillDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function() { return FlexOffsetDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function() { return FlexOrderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDirective", function() { return LayoutDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function() { return LayoutAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function() { return LayoutGapDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
  @type {?} */
var INLINE = 'inline';
/** @type {?} */
var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
 * @param {?} value
 * @return {?}
 */
function buildLayoutCSS(value) {
    var _a = validateValue(value), direction = _a[0], wrap = _a[1], isInline = _a[2];
    return buildCSS(direction, wrap, isInline);
}
/**
 * Validate the value to be one of the acceptable value options
 * Use default fallback of 'row'
 * @param {?} value
 * @return {?}
 */
function validateValue(value) {
    value = value ? value.toLowerCase() : '';
    var _a = value.split(' '), direction = _a[0], wrap = _a[1], inline = _a[2];
    // First value must be the `flex-direction`
    if (!LAYOUT_VALUES.find(function (x) { return x === direction; })) {
        direction = LAYOUT_VALUES[0];
    }
    if (wrap === INLINE) {
        wrap = (inline !== INLINE) ? inline : '';
        inline = INLINE;
    }
    return [direction, validateWrapValue(wrap), !!inline];
}
/**
 * Determine if the validated, flex-direction value specifies
 * a horizontal/row flow.
 * @param {?} value
 * @return {?}
 */
function isFlowHorizontal(value) {
    var flow = validateValue(value)[0];
    return flow.indexOf('row') > -1;
}
/**
 * Convert layout-wrap='<value>' to expected flex-wrap style
 * @param {?} value
 * @return {?}
 */
function validateWrapValue(value) {
    if (!!value) {
        switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
                value = 'wrap-reverse';
                break;
            case 'no':
            case 'none':
            case 'nowrap':
                value = 'nowrap';
                break;
            // All other values fallback to 'wrap'
            default:
                value = 'wrap';
                break;
        }
    }
    return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 * @param {?} direction
 * @param {?=} wrap
 * @param {?=} inline
 * @return {?}
 */
function buildCSS(direction, wrap, inline) {
    if (wrap === void 0) { wrap = null; }
    if (inline === void 0) { inline = false; }
    return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'layout' flexbox styling directive
 * Defines the positioning flow direction for the child elements: row or column
 * Optional values: column or row (default)
 * @see https://css-tricks.com/almanac/properties/f/flex-direction/
 *
 */
var LayoutDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayoutDirective, _super);
    /* tslint:enable */
    function LayoutDirective(monitor, elRef, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._announcer = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        _this.layout$ = _this._announcer.asObservable();
        return _this;
    }
    Object.defineProperty(LayoutDirective.prototype, "layout", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layout', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * On changes to any @Input properties...
     * Default to use the non-responsive Input value ('fxLayout')
     * Then conditionally override with the mq-activated Input's current value
     */
    /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxLayout')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    LayoutDirective.prototype.ngOnChanges = /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxLayout')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['layout'] != null || this._mqActivation) {
            this._updateWithDirection();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    LayoutDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('layout', 'row', function (changes) {
            _this._updateWithDirection(changes.value);
        });
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /** Validate the direction value and then update the host's inline flexbox styles */
    /**
     * Validate the direction value and then update the host's inline flexbox styles
     * @param {?=} value
     * @return {?}
     */
    LayoutDirective.prototype._updateWithDirection = /**
     * Validate the direction value and then update the host's inline flexbox styles
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('layout') || 'row';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        /** @type {?} */
        var css = buildLayoutCSS(!!value ? value : '');
        this._applyStyleToElement(css);
        this._announcer.next({
            direction: css['flex-direction'],
            wrap: !!css['flex-wrap'] && css['flex-wrap'] !== 'nowrap'
        });
    };
    LayoutDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [fxLayout],\n  [fxLayout.xs], [fxLayout.sm], [fxLayout.md], [fxLayout.lg], [fxLayout.xl],\n  [fxLayout.lt-sm], [fxLayout.lt-md], [fxLayout.lt-lg], [fxLayout.lt-xl],\n  [fxLayout.gt-xs], [fxLayout.gt-sm], [fxLayout.gt-md], [fxLayout.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    LayoutDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    LayoutDirective.propDecorators = {
        layout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout',] }],
        layoutXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.xs',] }],
        layoutSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.sm',] }],
        layoutMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.md',] }],
        layoutLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.lg',] }],
        layoutXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.xl',] }],
        layoutGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.gt-xs',] }],
        layoutGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.gt-sm',] }],
        layoutGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.gt-md',] }],
        layoutGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.gt-lg',] }],
        layoutLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.lt-sm',] }],
        layoutLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.lt-md',] }],
        layoutLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.lt-lg',] }],
        layoutLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.lt-xl',] }]
    };
    return LayoutDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'layout-padding' styling directive
 *  Defines padding of child elements in a layout container
 */
var LayoutGapDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayoutGapDirective, _super);
    /* tslint:enable */
    function LayoutGapDirective(monitor, elRef, container, _zone, _directionality, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._zone = _zone;
        _this._directionality = _directionality;
        _this._layout = 'row';
        if (container) { // Subscribe to layout direction changes
            // Subscribe to layout direction changes
            _this._layoutWatcher = container.layout$.subscribe(_this._onLayoutChange.bind(_this));
        }
        _this._directionWatcher =
            _this._directionality.change.subscribe(_this._updateWithValue.bind(_this));
        return _this;
    }
    Object.defineProperty(LayoutGapDirective.prototype, "gap", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gap', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * @param {?} changes
     * @return {?}
     */
    LayoutGapDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['gap'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    LayoutGapDirective.prototype.ngAfterContentInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        this._watchContentChanges();
        this._listenForMediaQueryChanges('gap', '0', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    /**
     * @return {?}
     */
    LayoutGapDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
        if (this._observer) {
            this._observer.disconnect();
        }
        if (this._directionWatcher) {
            this._directionWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Watch for child nodes to be added... and apply the layout gap styles to each.
     * NOTE: this does NOT! differentiate between viewChildren and contentChildren
     */
    /**
     * Watch for child nodes to be added... and apply the layout gap styles to each.
     * NOTE: this does NOT! differentiate between viewChildren and contentChildren
     * @return {?}
     */
    LayoutGapDirective.prototype._watchContentChanges = /**
     * Watch for child nodes to be added... and apply the layout gap styles to each.
     * NOTE: this does NOT! differentiate between viewChildren and contentChildren
     * @return {?}
     */
    function () {
        var _this = this;
        this._zone.runOutsideAngular(function () {
            if (typeof MutationObserver !== 'undefined') {
                _this._observer = new MutationObserver(function (mutations) {
                    /** @type {?} */
                    var validatedChanges = function (it) {
                        return (it.addedNodes && it.addedNodes.length > 0) ||
                            (it.removedNodes && it.removedNodes.length > 0);
                    };
                    // update gap styles only for child 'added' or 'removed' events
                    if (mutations.some(validatedChanges)) {
                        _this._updateWithValue();
                    }
                });
                _this._observer.observe(_this.nativeElement, { childList: true });
            }
        });
    };
    /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     */
    /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     * @param {?} layout
     * @return {?}
     */
    LayoutGapDirective.prototype._onLayoutChange = /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     * @param {?} layout
     * @return {?}
     */
    function (layout) {
        var _this = this;
        this._layout = (layout.direction || '').toLowerCase();
        if (!LAYOUT_VALUES.find(function (x) { return x === _this._layout; })) {
            this._layout = 'row';
        }
        this._updateWithValue();
    };
    /**
     *
     */
    /**
     *
     * @param {?=} value
     * @return {?}
     */
    LayoutGapDirective.prototype._updateWithValue = /**
     *
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var gapValue = value || this._queryInput('gap') || '0';
        if (this._mqActivation) {
            gapValue = this._mqActivation.activatedInput;
        }
        /** @type {?} */
        var items = this.childrenNodes
            .filter(function (el) { return el.nodeType === 1 && _this._getDisplayStyle(el) != 'none'; })
            .sort(function (a, b) {
            /** @type {?} */
            var orderA = +_this._styler.lookupStyle(a, 'order');
            /** @type {?} */
            var orderB = +_this._styler.lookupStyle(b, 'order');
            if (isNaN(orderA) || isNaN(orderB) || orderA === orderB) {
                return 0;
            }
            else {
                return orderA > orderB ? 1 : -1;
            }
        });
        if (items.length > 0) {
            if (gapValue.endsWith(GRID_SPECIFIER)) {
                gapValue = gapValue.substring(0, gapValue.indexOf(GRID_SPECIFIER));
                // For each `element` children, set the padding
                this._applyStyleToElements(this._buildGridPadding(gapValue), items);
                // Add the margin to the host element
                this._applyStyleToElement(this._buildGridMargin(gapValue));
            }
            else {
                /** @type {?} */
                var lastItem = items.pop();
                // For each `element` children EXCEPT the last,
                // set the margin right/bottom styles...
                this._applyStyleToElements(this._buildCSS(gapValue), items);
                // Clear all gaps for all visible elements
                this._applyStyleToElements(this._buildCSS(), [lastItem]);
            }
        }
    };
    /**
     *
     * @param {?} value
     * @return {?}
     */
    LayoutGapDirective.prototype._buildGridPadding = /**
     *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var paddingTop = '0px';
        /** @type {?} */
        var paddingRight = '0px';
        /** @type {?} */
        var paddingBottom = value;
        /** @type {?} */
        var paddingLeft = '0px';
        if (this._directionality.value === 'rtl') {
            paddingLeft = value;
        }
        else {
            paddingRight = value;
        }
        return { 'padding': paddingTop + " " + paddingRight + " " + paddingBottom + " " + paddingLeft };
    };
    /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * Note: this will not work with calc values (negative calc values are invalid)
     * @param {?} value
     * @return {?}
     */
    LayoutGapDirective.prototype._buildGridMargin = /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * Note: this will not work with calc values (negative calc values are invalid)
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var marginTop = '0px';
        /** @type {?} */
        var marginRight = '0px';
        /** @type {?} */
        var marginBottom = '-' + value;
        /** @type {?} */
        var marginLeft = '0px';
        if (this._directionality.value === 'rtl') {
            marginLeft = '-' + value;
        }
        else {
            marginRight = '-' + value;
        }
        return { 'margin': marginTop + " " + marginRight + " " + marginBottom + " " + marginLeft };
    };
    /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * @param {?=} value
     * @return {?}
     */
    LayoutGapDirective.prototype._buildCSS = /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = null; }
        /** @type {?} */
        var key;
        /** @type {?} */
        var margins = {
            'margin-left': null,
            'margin-right': null,
            'margin-top': null,
            'margin-bottom': null
        };
        switch (this._layout) {
            case 'column':
                key = 'margin-bottom';
                break;
            case 'column-reverse':
                key = 'margin-top';
                break;
            case 'row':
                key = this._directionality.value === 'rtl' ? 'margin-left' : 'margin-right';
                break;
            case 'row-reverse':
                key = this._directionality.value === 'rtl' ? 'margin-right' : 'margin-left';
                break;
            default:
                key = this._directionality.value === 'rtl' ? 'margin-left' : 'margin-right';
                break;
        }
        margins[key] = value;
        return margins;
    };
    LayoutGapDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "\n  [fxLayoutGap],\n  [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md], [fxLayoutGap.lg], [fxLayoutGap.xl],\n  [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md], [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl],\n  [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm], [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    LayoutGapDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: LayoutDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    LayoutGapDirective.propDecorators = {
        gap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap',] }],
        gapXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.xs',] }],
        gapSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.sm',] }],
        gapMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.md',] }],
        gapLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.lg',] }],
        gapXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.xl',] }],
        gapGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.gt-xs',] }],
        gapGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.gt-sm',] }],
        gapGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.gt-md',] }],
        gapGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.gt-lg',] }],
        gapLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.lt-sm',] }],
        gapLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.lt-md',] }],
        gapLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.lt-lg',] }],
        gapLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.lt-xl',] }]
    };
    return LayoutGapDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));
/** @type {?} */
var GRID_SPECIFIER = ' grid';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Directive to control the size of a flex item using flex-basis, flex-grow, and flex-shrink.
 * Corresponds to the css `flex` shorthand property.
 *
 * @see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */
var FlexDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexDirective, _super);
    /* tslint:enable */
    // Note: Explicitly @SkipSelf on LayoutDirective because we are looking
    //       for the parent flex container for this flex item.
    function FlexDirective(monitor, elRef, _container, styleUtils, layoutConfig) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._container = _container;
        _this.styleUtils = styleUtils;
        _this.layoutConfig = layoutConfig;
        _this._cacheInput('flex', '');
        _this._cacheInput('shrink', 1);
        _this._cacheInput('grow', 1);
        return _this;
    }
    Object.defineProperty(FlexDirective.prototype, "shrink", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('shrink', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "grow", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('grow', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flex", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flex', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtXl', val); },
        enumerable: true,
        configurable: true
    });
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['flex'] != null || this._mqActivation) {
            this._updateStyle();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('flex', '', function (changes) {
            _this._updateStyle(changes.value);
        });
        if (this._container) {
            // If this flex item is inside of a flex container marked with
            // Subscribe to layout immediate parent direction changes
            this._layoutWatcher = this._container.layout$.subscribe(function (layout) {
                // `direction` === null if parent container does not have a `fxLayout`
                // `direction` === null if parent container does not have a `fxLayout`
                _this._onLayoutChange(layout);
            });
        }
    };
    /**
     * @return {?}
     */
    FlexDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     */
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    FlexDirective.prototype._onLayoutChange = /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    function (layout) {
        this._layout = layout || this._layout || { direction: 'row', wrap: false };
        this._updateStyle();
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    FlexDirective.prototype._updateStyle = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var flexBasis = value || this._queryInput('flex') || '';
        if (this._mqActivation) {
            flexBasis = this._mqActivation.activatedInput;
        }
        /** @type {?} */
        var basis = String(flexBasis).replace(';', '');
        /** @type {?} */
        var parts = Object(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["validateBasis"])(basis, this._queryInput('grow'), this._queryInput('shrink'));
        this._applyStyleToElement(this._validateValue.apply(this, parts));
    };
    /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     */
    /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     * @param {?} grow
     * @param {?} shrink
     * @param {?} basis
     * @return {?}
     */
    FlexDirective.prototype._validateValue = /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     * @param {?} grow
     * @param {?} shrink
     * @param {?} basis
     * @return {?}
     */
    function (grow, shrink, basis) {
        /** @type {?} */
        var addFlexToParent = this.layoutConfig.addFlexToParent !== false;
        /** @type {?} */
        var layout = this._getFlexFlowDirection(this.parentElement, addFlexToParent);
        /** @type {?} */
        var direction = (layout.indexOf('column') > -1) ? 'column' : 'row';
        /** @type {?} */
        var max = isFlowHorizontal(direction) ? 'max-width' : 'max-height';
        /** @type {?} */
        var min = isFlowHorizontal(direction) ? 'min-width' : 'min-height';
        /** @type {?} */
        var hasCalc = String(basis).indexOf('calc') > -1;
        /** @type {?} */
        var usingCalc = hasCalc || (basis == 'auto');
        /** @type {?} */
        var isPercent = String(basis).indexOf('%') > -1 && !hasCalc;
        /** @type {?} */
        var hasUnits = String(basis).indexOf('px') > -1 || String(basis).indexOf('em') > -1 ||
            String(basis).indexOf('vw') > -1 || String(basis).indexOf('vh') > -1;
        /** @type {?} */
        var isPx = String(basis).indexOf('px') > -1 || usingCalc;
        /** @type {?} */
        var isValue = (hasCalc || hasUnits);
        grow = (grow == '0') ? 0 : grow;
        shrink = (shrink == '0') ? 0 : shrink;
        /** @type {?} */
        var isFixed = !grow && !shrink;
        /** @type {?} */
        var css = {};
        /** @type {?} */
        var clearStyles = {
            'max-width': null,
            'max-height': null,
            'min-width': null,
            'min-height': null
        };
        switch (basis || '') {
            case '':
                /** @type {?} */
                var useColumnBasisZero = this.layoutConfig.useColumnBasisZero !== false;
                basis = direction === 'row' ? '0%' : (useColumnBasisZero ? '0.000000001px' : 'auto');
                break;
            case 'initial': // default
            case 'nogrow':
                grow = 0;
                basis = 'auto';
                break;
            case 'grow':
                basis = '100%';
                break;
            case 'noshrink':
                shrink = 0;
                basis = 'auto';
                break;
            case 'auto':
                break;
            case 'none':
                grow = 0;
                shrink = 0;
                basis = 'auto';
                break;
            default:
                // Defaults to percentage sizing unless `px` is explicitly set
                if (!isValue && !isPercent && !isNaN(/** @type {?} */ (basis))) {
                    basis = basis + '%';
                }
                // Fix for issue 280
                if (basis === '0%') {
                    isValue = true;
                }
                if (basis === '0px') {
                    basis = '0%';
                }
                // fix issue #5345
                if (hasCalc) {
                    css = extendObject(clearStyles, {
                        'flex-grow': grow,
                        'flex-shrink': shrink,
                        'flex-basis': isValue ? basis : '100%'
                    });
                }
                else {
                    css = extendObject(clearStyles, {
                        'flex': grow + " " + shrink + " " + (isValue ? basis : '100%')
                    });
                }
                break;
        }
        if (!(css['flex'] || css['flex-grow'])) {
            if (hasCalc) {
                css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': basis
                });
            }
            else {
                css = extendObject(clearStyles, {
                    'flex': grow + " " + shrink + " " + basis
                });
            }
        }
        // Fix for issues 277, 534, and 728
        if (basis !== '0%' && basis !== '0px' && basis !== '0.000000001px' && basis !== 'auto') {
            css[min] = isFixed || (isPx && grow) ? basis : null;
            css[max] = isFixed || (!usingCalc && shrink) ? basis : null;
        }
        // Fix for issue 528
        if (!css[min] && !css[max]) {
            if (hasCalc) {
                css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': basis
                });
            }
            else {
                css = extendObject(clearStyles, {
                    'flex': grow + " " + shrink + " " + basis
                });
            }
        }
        else {
            // Fix for issue 660
            if (this._layout && this._layout.wrap) {
                css[hasCalc ? 'flex-basis' : 'flex'] = css[max] ?
                    (hasCalc ? css[max] : grow + " " + shrink + " " + css[max]) :
                    (hasCalc ? css[min] : grow + " " + shrink + " " + css[min]);
            }
        }
        return extendObject(css, { 'box-sizing': 'border-box' });
    };
    FlexDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [fxFlex],\n  [fxFlex.xs], [fxFlex.sm], [fxFlex.md], [fxFlex.lg], [fxFlex.xl],\n  [fxFlex.lt-sm], [fxFlex.lt-md], [fxFlex.lt-lg], [fxFlex.lt-xl],\n  [fxFlex.gt-xs], [fxFlex.gt-sm], [fxFlex.gt-md], [fxFlex.gt-lg],\n"
                },] },
    ];
    /** @nocollapse */
    FlexDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: LayoutDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"],] }] }
    ]; };
    FlexDirective.propDecorators = {
        shrink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShrink',] }],
        grow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxGrow',] }],
        flex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex',] }],
        flexXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.xs',] }],
        flexSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.sm',] }],
        flexMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.md',] }],
        flexLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.lg',] }],
        flexXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.xl',] }],
        flexGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.gt-xs',] }],
        flexGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.gt-sm',] }],
        flexGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.gt-md',] }],
        flexGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.gt-lg',] }],
        flexLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.lt-sm',] }],
        flexLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.lt-md',] }],
        flexLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.lt-lg',] }],
        flexLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.lt-xl',] }]
    };
    return FlexDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'flex-order' flexbox styling directive
 * Configures the positional ordering of the element in a sorted layout container
 * @see https://css-tricks.com/almanac/properties/o/order/
 */
var FlexOrderDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexOrderDirective, _super);
    /* tslint:enable */
    function FlexOrderDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(FlexOrderDirective.prototype, "order", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('order', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexOrderDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['order'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexOrderDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('order', '0', function (changes) {
            _this._updateWithValue(changes.value);
        });
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    FlexOrderDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('order') || '0';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FlexOrderDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = parseInt(value, 10);
        return { order: isNaN(value) ? 0 : value };
    };
    FlexOrderDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [fxFlexOrder],\n  [fxFlexOrder.xs], [fxFlexOrder.sm], [fxFlexOrder.md], [fxFlexOrder.lg], [fxFlexOrder.xl],\n  [fxFlexOrder.lt-sm], [fxFlexOrder.lt-md], [fxFlexOrder.lt-lg], [fxFlexOrder.lt-xl],\n  [fxFlexOrder.gt-xs], [fxFlexOrder.gt-sm], [fxFlexOrder.gt-md], [fxFlexOrder.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    FlexOrderDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    FlexOrderDirective.propDecorators = {
        order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder',] }],
        orderXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.xs',] }],
        orderSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.sm',] }],
        orderMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.md',] }],
        orderLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.lg',] }],
        orderXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.xl',] }],
        orderGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.gt-xs',] }],
        orderGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.gt-sm',] }],
        orderGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.gt-md',] }],
        orderGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.gt-lg',] }],
        orderLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.lt-sm',] }],
        orderLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.lt-md',] }],
        orderLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.lt-lg',] }],
        orderLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.lt-xl',] }]
    };
    return FlexOrderDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'flex-offset' flexbox styling directive
 * Configures the 'margin-left' of the element in a layout container
 */
var FlexOffsetDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexOffsetDirective, _super);
    /* tslint:enable */
    function FlexOffsetDirective(monitor, elRef, _container, _directionality, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._container = _container;
        _this._directionality = _directionality;
        /**
         * The flex-direction of this element's host container. Defaults to 'row'.
         */
        _this._layout = { direction: 'row', wrap: false };
        _this._directionWatcher =
            _this._directionality.change.subscribe(_this._updateWithValue.bind(_this));
        _this.watchParentFlow();
        return _this;
    }
    Object.defineProperty(FlexOffsetDirective.prototype, "offset", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offset', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtLg', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexOffsetDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['offset'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * Cleanup
     */
    /**
     * Cleanup
     * @return {?}
     */
    FlexOffsetDirective.prototype.ngOnDestroy = /**
     * Cleanup
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
        if (this._directionWatcher) {
            this._directionWatcher.unsubscribe();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexOffsetDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('offset', 0, function (changes) {
            _this._updateWithValue(changes.value);
        });
    };
    /**
     * If parent flow-direction changes, then update the margin property
     * used to offset
     */
    /**
     * If parent flow-direction changes, then update the margin property
     * used to offset
     * @return {?}
     */
    FlexOffsetDirective.prototype.watchParentFlow = /**
     * If parent flow-direction changes, then update the margin property
     * used to offset
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._container) {
            // Subscribe to layout immediate parent direction changes (if any)
            this._layoutWatcher = this._container.layout$.subscribe(function (layout) {
                // `direction` === null if parent container does not have a `fxLayout`
                // `direction` === null if parent container does not have a `fxLayout`
                _this._onLayoutChange(layout);
            });
        }
    };
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     */
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    FlexOffsetDirective.prototype._onLayoutChange = /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    function (layout) {
        this._layout = layout || this._layout || { direction: 'row', wrap: false };
        this._updateWithValue();
    };
    /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     */
    /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     * @param {?=} value
     * @return {?}
     */
    FlexOffsetDirective.prototype._updateWithValue = /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('offset') || 0;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} offset
     * @return {?}
     */
    FlexOffsetDirective.prototype._buildCSS = /**
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        var _a;
        /** @type {?} */
        var isPercent = String(offset).indexOf('%') > -1;
        /** @type {?} */
        var isPx = String(offset).indexOf('px') > -1;
        if (!isPx && !isPercent && !isNaN(offset)) {
            offset = offset + '%';
        }
        /** @type {?} */
        var isRtl = this._directionality.value === 'rtl';
        /** @type {?} */
        var layout = this._getFlexFlowDirection(this.parentElement, true);
        /** @type {?} */
        var horizontalLayoutKey = isRtl ? 'margin-right' : 'margin-left';
        return isFlowHorizontal(layout) ? (_a = {}, _a[horizontalLayoutKey] = "" + offset, _a) :
            { 'margin-top': "" + offset };
    };
    FlexOffsetDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [fxFlexOffset],\n  [fxFlexOffset.xs], [fxFlexOffset.sm], [fxFlexOffset.md], [fxFlexOffset.lg], [fxFlexOffset.xl],\n  [fxFlexOffset.lt-sm], [fxFlexOffset.lt-md], [fxFlexOffset.lt-lg], [fxFlexOffset.lt-xl],\n  [fxFlexOffset.gt-xs], [fxFlexOffset.gt-sm], [fxFlexOffset.gt-md], [fxFlexOffset.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    FlexOffsetDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: LayoutDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    FlexOffsetDirective.propDecorators = {
        offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset',] }],
        offsetXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.xs',] }],
        offsetSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.sm',] }],
        offsetMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.md',] }],
        offsetLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.lg',] }],
        offsetXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.xl',] }],
        offsetLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.lt-sm',] }],
        offsetLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.lt-md',] }],
        offsetLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.lt-lg',] }],
        offsetLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.lt-xl',] }],
        offsetGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.gt-xs',] }],
        offsetGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.gt-sm',] }],
        offsetGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.gt-md',] }],
        offsetGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.gt-lg',] }]
    };
    return FlexOffsetDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'flex-align' flexbox styling directive
 * Allows element-specific overrides for cross-axis alignments in a layout container
 * @see https://css-tricks.com/almanac/properties/a/align-self/
 */
var FlexAlignDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexAlignDirective, _super);
    /* tslint:enable */
    function FlexAlignDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(FlexAlignDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('align', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtLg', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexAlignDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['align'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexAlignDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('align', 'stretch', function (changes) {
            _this._updateWithValue(changes.value);
        });
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    FlexAlignDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('align') || 'stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} align
     * @return {?}
     */
    FlexAlignDirective.prototype._buildCSS = /**
     * @param {?} align
     * @return {?}
     */
    function (align) {
        /** @type {?} */
        var css = {};
        // Cross-axis
        switch (align) {
            case 'start':
                css['align-self'] = 'flex-start';
                break;
            case 'end':
                css['align-self'] = 'flex-end';
                break;
            default:
                css['align-self'] = align;
                break;
        }
        return css;
    };
    FlexAlignDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "\n  [fxFlexAlign],\n  [fxFlexAlign.xs], [fxFlexAlign.sm], [fxFlexAlign.md], [fxFlexAlign.lg], [fxFlexAlign.xl],\n  [fxFlexAlign.lt-sm], [fxFlexAlign.lt-md], [fxFlexAlign.lt-lg], [fxFlexAlign.lt-xl],\n  [fxFlexAlign.gt-xs], [fxFlexAlign.gt-sm], [fxFlexAlign.gt-md], [fxFlexAlign.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    FlexAlignDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    FlexAlignDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.xl',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.lt-xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.gt-lg',] }]
    };
    return FlexAlignDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var FLEX_FILL_CSS = {
    'margin': 0,
    'width': '100%',
    'height': '100%',
    'min-width': '100%',
    'min-height': '100%'
};
/**
 * 'fxFill' flexbox styling directive
 *  Maximizes width and height of element in a layout container
 *
 *  NOTE: fxFill is NOT responsive API!!
 */
var FlexFillDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexFillDirective, _super);
    function FlexFillDirective(monitor, elRef, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this.elRef = elRef;
        _this._applyStyleToElement(FLEX_FILL_CSS);
        return _this;
    }
    FlexFillDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [fxFill],\n  [fxFlexFill]\n" },] },
    ];
    /** @nocollapse */
    FlexFillDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    return FlexFillDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'layout-align' flexbox styling directive
 *  Defines positioning of child elements along main and cross axis in a layout container
 *  Optional values: {main-axis} values or {main-axis cross-axis} value pairs
 *
 * @see https://css-tricks.com/almanac/properties/j/justify-content/
 * @see https://css-tricks.com/almanac/properties/a/align-items/
 * @see https://css-tricks.com/almanac/properties/a/align-content/
 */
var LayoutAlignDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayoutAlignDirective, _super);
    /* tslint:enable */
    function LayoutAlignDirective(monitor, elRef, container, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._layout = 'row';
        if (container) { // Subscribe to layout direction changes
            // Subscribe to layout direction changes
            _this._layoutWatcher = container.layout$.subscribe(_this._onLayoutChange.bind(_this));
        }
        return _this;
    }
    Object.defineProperty(LayoutAlignDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('align', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * @param {?} changes
     * @return {?}
     */
    LayoutAlignDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['align'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    LayoutAlignDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('align', 'start stretch', function (changes) {
            _this._updateWithValue(changes.value);
        });
    };
    /**
     * @return {?}
     */
    LayoutAlignDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     *
     */
    /**
     *
     * @param {?=} value
     * @return {?}
     */
    LayoutAlignDirective.prototype._updateWithValue = /**
     *
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('align') || 'start stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
        this._allowStretching(value, !this._layout ? 'row' : this._layout);
    };
    /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     */
    /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     * @param {?} layout
     * @return {?}
     */
    LayoutAlignDirective.prototype._onLayoutChange = /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     * @param {?} layout
     * @return {?}
     */
    function (layout) {
        var _this = this;
        this._layout = (layout.direction || '').toLowerCase();
        if (!LAYOUT_VALUES.find(function (x) { return x === _this._layout; })) {
            this._layout = 'row';
        }
        /** @type {?} */
        var value = this._queryInput('align') || 'start stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._allowStretching(value, this._layout || 'row');
    };
    /**
     * @param {?} align
     * @return {?}
     */
    LayoutAlignDirective.prototype._buildCSS = /**
     * @param {?} align
     * @return {?}
     */
    function (align) {
        /** @type {?} */
        var css = {};
        var _a = align.split(' '), main_axis = _a[0], cross_axis = _a[1]; // tslint:disable-line:variable-name
        // Main axis
        switch (main_axis) {
            case 'center':
                css['justify-content'] = 'center';
                break;
            case 'space-around':
                css['justify-content'] = 'space-around';
                break;
            case 'space-between':
                css['justify-content'] = 'space-between';
                break;
            case 'space-evenly':
                css['justify-content'] = 'space-evenly';
                break;
            case 'end':
            case 'flex-end':
                css['justify-content'] = 'flex-end';
                break;
            case 'start':
            case 'flex-start':
            default:
                css['justify-content'] = 'flex-start'; // default main axis
                break;
        }
        // Cross-axis
        switch (cross_axis) {
            case 'start':
            case 'flex-start':
                css['align-items'] = css['align-content'] = 'flex-start';
                break;
            case 'baseline':
                css['align-items'] = 'baseline';
                break;
            case 'center':
                css['align-items'] = css['align-content'] = 'center';
                break;
            case 'end':
            case 'flex-end':
                css['align-items'] = css['align-content'] = 'flex-end';
                break;
            case 'stretch':
            default: // 'stretch'
                // 'stretch'
                css['align-items'] = css['align-content'] = 'stretch'; // default cross axis
                break;
        }
        return extendObject(css, {
            'display': 'flex',
            'flex-direction': this._layout || 'row',
            'box-sizing': 'border-box'
        });
    };
    /**
     * Update container element to 'stretch' as needed...
     * NOTE: this is only done if the crossAxis is explicitly set to 'stretch'
     */
    /**
     * Update container element to 'stretch' as needed...
     * NOTE: this is only done if the crossAxis is explicitly set to 'stretch'
     * @param {?} align
     * @param {?} layout
     * @return {?}
     */
    LayoutAlignDirective.prototype._allowStretching = /**
     * Update container element to 'stretch' as needed...
     * NOTE: this is only done if the crossAxis is explicitly set to 'stretch'
     * @param {?} align
     * @param {?} layout
     * @return {?}
     */
    function (align, layout) {
        var _a = align.split(' '), cross_axis = _a[1]; // tslint:disable-line:variable-name
        if (cross_axis == 'stretch') {
            // Use `null` values to remove style
            this._applyStyleToElement({
                'box-sizing': 'border-box',
                'max-width': !isFlowHorizontal(layout) ? '100%' : null,
                'max-height': isFlowHorizontal(layout) ? '100%' : null
            });
        }
    };
    LayoutAlignDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [fxLayoutAlign],\n  [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md], [fxLayoutAlign.lg],[fxLayoutAlign.xl],\n  [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md], [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl],\n  [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm], [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    LayoutAlignDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: LayoutDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    LayoutAlignDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.lt-xl',] }]
    };
    return LayoutAlignDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ALL_DIRECTIVES = [
    LayoutDirective,
    LayoutGapDirective,
    LayoutAlignDirective,
    FlexDirective,
    FlexOrderDirective,
    FlexOffsetDirective,
    FlexFillDirective,
    FlexAlignDirective,
];
/**
 * *****************************************************************
 * Define module for the Flex API
 * *****************************************************************
 */
var FlexModule = /** @class */ (function () {
    function FlexModule() {
    }
    FlexModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"]],
                    declarations: ALL_DIRECTIVES.slice(),
                    exports: ALL_DIRECTIVES.slice()
                },] },
    ];
    return FlexModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=flex.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm5/grid.es5.js":
/*!************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm5/grid.es5.js ***!
  \************************************************************/
/*! exports provided: GridModule, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵa, ɵj, ɵk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return GridModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return GridAlignColumnsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return GridAlignRowsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return GridAreaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return GridAreasDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return GridAutoDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return GridColumnDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return GridColumnsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return GridGapDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return GridAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return GridRowDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return GridRowsDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY = 'align';
/** @type {?} */
var ROW_DEFAULT = 'stretch';
/** @type {?} */
var COL_DEFAULT = 'stretch';
/**
 * 'align' CSS Grid styling directive for grid children
 *  Defines positioning of child elements along row and column axis in a grid container
 *  Optional values: {row-axis} values or {row-axis column-axis} value pairs
 *
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-self
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-self
 */
var GridAlignDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAlignDirective, _super);
    /* tslint:enable */
    function GridAlignDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridAlignDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * @param {?} changes
     * @return {?}
     */
    GridAlignDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridAlignDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY, ROW_DEFAULT, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     *
     */
    /**
     *
     * @param {?=} value
     * @return {?}
     */
    GridAlignDirective.prototype._updateWithValue = /**
     *
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY) || ROW_DEFAULT;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} align
     * @return {?}
     */
    GridAlignDirective.prototype._buildCSS = /**
     * @param {?} align
     * @return {?}
     */
    function (align) {
        /** @type {?} */
        var css = {};
        var _a = align.split(' '), rowAxis = _a[0], columnAxis = _a[1];
        // Row axis
        switch (rowAxis) {
            case 'end':
                css['justify-self'] = 'end';
                break;
            case 'center':
                css['justify-self'] = 'center';
                break;
            case 'stretch':
                css['justify-self'] = 'stretch';
                break;
            case 'start':
                css['justify-self'] = 'start';
                break;
            default:
                css['justify-self'] = ROW_DEFAULT; // default row axis
                break;
        }
        // Column axis
        switch (columnAxis) {
            case 'end':
                css['align-self'] = 'end';
                break;
            case 'center':
                css['align-self'] = 'center';
                break;
            case 'stretch':
                css['align-self'] = 'stretch';
                break;
            case 'start':
                css['align-self'] = 'start';
                break;
            default:
                css['align-self'] = COL_DEFAULT; // default column axis
                break;
        }
        return css;
    };
    GridAlignDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdGridAlign],\n  [gdGridAlign.xs], [gdGridAlign.sm], [gdGridAlign.md], [gdGridAlign.lg],[gdGridAlign.xl],\n  [gdGridAlign.lt-sm], [gdGridAlign.lt-md], [gdGridAlign.lt-lg], [gdGridAlign.lt-xl],\n  [gdGridAlign.gt-xs], [gdGridAlign.gt-sm], [gdGridAlign.gt-md], [gdGridAlign.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridAlignDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridAlignDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.lt-xl',] }]
    };
    return GridAlignDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$1 = 'alignColumns';
/** @type {?} */
var DEFAULT_MAIN = 'start';
/** @type {?} */
var DEFAULT_CROSS = 'stretch';
/**
 * 'column alignment' CSS Grid styling directive
 * Configures the alignment in the column direction
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-19
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-21
 */
var GridAlignColumnsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAlignColumnsDirective, _super);
    /* tslint:enable */
    function GridAlignColumnsDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridAlignColumnsDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$1, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridAlignColumnsDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$1] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridAlignColumnsDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$1, DEFAULT_MAIN + " " + DEFAULT_CROSS, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridAlignColumnsDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$1) || DEFAULT_MAIN + " " + DEFAULT_CROSS;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} align
     * @return {?}
     */
    GridAlignColumnsDirective.prototype._buildCSS = /**
     * @param {?} align
     * @return {?}
     */
    function (align) {
        /** @type {?} */
        var css = {};
        var _a = align.split(' '), mainAxis = _a[0], crossAxis = _a[1];
        // Main axis
        switch (mainAxis) {
            case 'center':
                css['align-content'] = 'center';
                break;
            case 'space-around':
                css['align-content'] = 'space-around';
                break;
            case 'space-between':
                css['align-content'] = 'space-between';
                break;
            case 'space-evenly':
                css['align-content'] = 'space-evenly';
                break;
            case 'end':
                css['align-content'] = 'end';
                break;
            case 'start':
                css['align-content'] = 'start';
                break;
            case 'stretch':
                css['align-content'] = 'stretch';
                break;
            default:
                css['align-content'] = DEFAULT_MAIN; // default main axis
                break;
        }
        // Cross-axis
        switch (crossAxis) {
            case 'start':
                css['align-items'] = 'start';
                break;
            case 'center':
                css['align-items'] = 'center';
                break;
            case 'end':
                css['align-items'] = 'end';
                break;
            case 'stretch':
                css['align-items'] = 'stretch';
                break;
            default: // 'stretch'
                // 'stretch'
                css['align-items'] = DEFAULT_CROSS; // default cross axis
                break;
        }
        return extendObject(css, { 'display': this._queryInput('inline') ? 'inline-grid' : 'grid' });
    };
    GridAlignColumnsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdAlignColumns],\n  [gdAlignColumns.xs], [gdAlignColumns.sm], [gdAlignColumns.md],\n  [gdAlignColumns.lg], [gdAlignColumns.xl], [gdAlignColumns.lt-sm],\n  [gdAlignColumns.lt-md], [gdAlignColumns.lt-lg], [gdAlignColumns.lt-xl],\n  [gdAlignColumns.gt-xs], [gdAlignColumns.gt-sm], [gdAlignColumns.gt-md],\n  [gdAlignColumns.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridAlignColumnsDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridAlignColumnsDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridAlignColumnsDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$2 = 'alignRows';
/** @type {?} */
var DEFAULT_MAIN$1 = 'start';
/** @type {?} */
var DEFAULT_CROSS$1 = 'stretch';
/**
 * 'row alignment' CSS Grid styling directive
 * Configures the alignment in the row direction
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-18
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-20
 */
var GridAlignRowsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAlignRowsDirective, _super);
    /* tslint:enable */
    function GridAlignRowsDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridAlignRowsDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$2, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridAlignRowsDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$2] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridAlignRowsDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$2, DEFAULT_MAIN$1 + " " + DEFAULT_CROSS$1, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridAlignRowsDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$2) || DEFAULT_MAIN$1 + " " + DEFAULT_CROSS$1;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} align
     * @return {?}
     */
    GridAlignRowsDirective.prototype._buildCSS = /**
     * @param {?} align
     * @return {?}
     */
    function (align) {
        /** @type {?} */
        var css = {};
        var _a = align.split(' '), mainAxis = _a[0], crossAxis = _a[1];
        // Main axis
        switch (mainAxis) {
            case 'center':
            case 'space-around':
            case 'space-between':
            case 'space-evenly':
            case 'end':
            case 'start':
            case 'stretch':
                css['justify-content'] = mainAxis;
                break;
            default:
                css['justify-content'] = DEFAULT_MAIN$1; // default main axis
                break;
        }
        // Cross-axis
        switch (crossAxis) {
            case 'start':
            case 'center':
            case 'end':
            case 'stretch':
                css['justify-items'] = crossAxis;
                break;
            default: // 'stretch'
                // 'stretch'
                css['justify-items'] = DEFAULT_CROSS$1; // default cross axis
                break;
        }
        return extendObject(css, { 'display': this._queryInput('inline') ? 'inline-grid' : 'grid' });
    };
    GridAlignRowsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdAlignRows],\n  [gdAlignRows.xs], [gdAlignRows.sm], [gdAlignRows.md],\n  [gdAlignRows.lg], [gdAlignRows.xl], [gdAlignRows.lt-sm],\n  [gdAlignRows.lt-md], [gdAlignRows.lt-lg], [gdAlignRows.lt-xl],\n  [gdAlignRows.gt-xs], [gdAlignRows.gt-sm], [gdAlignRows.gt-md],\n  [gdAlignRows.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridAlignRowsDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridAlignRowsDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridAlignRowsDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$3 = 'area';
/** @type {?} */
var DEFAULT_VALUE = 'auto';
/**
 * 'grid-area' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-27
 */
var GridAreaDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAreaDirective, _super);
    /* tslint:enable */
    function GridAreaDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridAreaDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$3, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridAreaDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$3] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridAreaDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$3, DEFAULT_VALUE, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridAreaDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$3) || DEFAULT_VALUE;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridAreaDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return { 'grid-area': value };
    };
    GridAreaDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdArea],\n  [gdArea.xs], [gdArea.sm], [gdArea.md], [gdArea.lg], [gdArea.xl],\n  [gdArea.lt-sm], [gdArea.lt-md], [gdArea.lt-lg], [gdArea.lt-xl],\n  [gdArea.gt-xs], [gdArea.gt-sm], [gdArea.gt-md], [gdArea.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridAreaDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridAreaDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.lt-xl',] }]
    };
    return GridAreaDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$4 = 'areas';
/** @type {?} */
var DEFAULT_VALUE$1 = 'none';
/** @type {?} */
var DELIMETER = '|';
/**
 * 'grid-template-areas' CSS Grid styling directive
 * Configures the names of elements within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-14
 */
var GridAreasDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAreasDirective, _super);
    /* tslint:enable */
    function GridAreasDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridAreasDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$4, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridAreasDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$4] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridAreasDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$4, DEFAULT_VALUE$1, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridAreasDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$4) || DEFAULT_VALUE$1;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridAreasDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var areas = value.split(DELIMETER).map(function (v) { return "\"" + v.trim() + "\""; });
        return {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-template-areas': areas.join(' ')
        };
    };
    GridAreasDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdAreas],\n  [gdAreas.xs], [gdAreas.sm], [gdAreas.md], [gdAreas.lg], [gdAreas.xl],\n  [gdAreas.lt-sm], [gdAreas.lt-md], [gdAreas.lt-lg], [gdAreas.lt-xl],\n  [gdAreas.gt-xs], [gdAreas.gt-sm], [gdAreas.gt-md], [gdAreas.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridAreasDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridAreasDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridAreasDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$5 = 'autoFlow';
/** @type {?} */
var DEFAULT_VALUE$2 = 'initial';
/**
 * 'grid-auto-flow' CSS Grid styling directive
 * Configures the auto placement algorithm for the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-23
 */
var GridAutoDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAutoDirective, _super);
    /* tslint:enable */
    function GridAutoDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridAutoDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$5, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridAutoDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$5] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridAutoDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$5, DEFAULT_VALUE$2, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridAutoDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$5) || DEFAULT_VALUE$2;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridAutoDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _a = value.split(' '), direction = _a[0], dense = _a[1];
        if (direction !== 'column' && direction !== 'row' && direction !== 'dense') {
            direction = 'row';
        }
        dense = (dense === 'dense' && direction !== 'dense') ? ' dense' : '';
        return {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-auto-flow': direction + dense
        };
    };
    GridAutoDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdAuto],\n  [gdAuto.xs], [gdAuto.sm], [gdAuto.md], [gdAuto.lg], [gdAuto.xl],\n  [gdAuto.lt-sm], [gdAuto.lt-md], [gdAuto.lt-lg], [gdAuto.lt-xl],\n  [gdAuto.gt-xs], [gdAuto.gt-sm], [gdAuto.gt-md], [gdAuto.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridAutoDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridAutoDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridAutoDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$6 = 'column';
/** @type {?} */
var DEFAULT_VALUE$3 = 'auto';
/**
 * 'grid-column' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
 */
var GridColumnDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridColumnDirective, _super);
    /* tslint:enable */
    function GridColumnDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridColumnDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$6, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridColumnDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$6] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridColumnDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$6, DEFAULT_VALUE$3, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridColumnDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$6) || DEFAULT_VALUE$3;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridColumnDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return { 'grid-column': value };
    };
    GridColumnDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdColumn],\n  [gdColumn.xs], [gdColumn.sm], [gdColumn.md], [gdColumn.lg], [gdColumn.xl],\n  [gdColumn.lt-sm], [gdColumn.lt-md], [gdColumn.lt-lg], [gdColumn.lt-xl],\n  [gdColumn.gt-xs], [gdColumn.gt-sm], [gdColumn.gt-md], [gdColumn.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridColumnDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridColumnDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.lt-xl',] }]
    };
    return GridColumnDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$7 = 'columns';
/** @type {?} */
var DEFAULT_VALUE$4 = 'none';
/** @type {?} */
var AUTO_SPECIFIER = '!';
/**
 * 'grid-template-columns' CSS Grid styling directive
 * Configures the sizing for the columns in the grid
 * Syntax: <column value> [auto]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
 */
var GridColumnsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridColumnsDirective, _super);
    /* tslint:enable */
    function GridColumnsDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridColumnsDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$7, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridColumnsDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$7] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridColumnsDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$7, DEFAULT_VALUE$4, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridColumnsDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$7) || DEFAULT_VALUE$4;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridColumnsDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var auto = false;
        if (value.endsWith(AUTO_SPECIFIER)) {
            value = value.substring(0, value.indexOf(AUTO_SPECIFIER));
            auto = true;
        }
        /** @type {?} */
        var css = {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-auto-columns': '',
            'grid-template-columns': '',
        };
        /** @type {?} */
        var key = (auto ? 'grid-auto-columns' : 'grid-template-columns');
        css[key] = value;
        return css;
    };
    GridColumnsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdColumns],\n  [gdColumns.xs], [gdColumns.sm], [gdColumns.md], [gdColumns.lg], [gdColumns.xl],\n  [gdColumns.lt-sm], [gdColumns.lt-md], [gdColumns.lt-lg], [gdColumns.lt-xl],\n  [gdColumns.gt-xs], [gdColumns.gt-sm], [gdColumns.gt-md], [gdColumns.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridColumnsDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridColumnsDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridColumnsDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$8 = 'gap';
/** @type {?} */
var DEFAULT_VALUE$5 = '0';
/**
 * 'grid-gap' CSS Grid styling directive
 * Configures the gap between items in the grid
 * Syntax: <row gap> [<column-gap>]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-17
 */
var GridGapDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridGapDirective, _super);
    /* tslint:enable */
    function GridGapDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridGapDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$8, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridGapDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$8] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridGapDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$8, DEFAULT_VALUE$5, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridGapDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$8) || DEFAULT_VALUE$5;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridGapDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-gap': value
        };
    };
    GridGapDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdGap],\n  [gdGap.xs], [gdGap.sm], [gdGap.md], [gdGap.lg], [gdGap.xl],\n  [gdGap.lt-sm], [gdGap.lt-md], [gdGap.lt-lg], [gdGap.lt-xl],\n  [gdGap.gt-xs], [gdGap.gt-sm], [gdGap.gt-md], [gdGap.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridGapDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridGapDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridGapDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$9 = 'row';
/** @type {?} */
var DEFAULT_VALUE$6 = 'auto';
/**
 * 'grid-row' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
 */
var GridRowDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridRowDirective, _super);
    /* tslint:enable */
    function GridRowDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridRowDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$9, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridRowDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$9] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridRowDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$9, DEFAULT_VALUE$6, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridRowDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$9) || DEFAULT_VALUE$6;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridRowDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return { 'grid-row': value };
    };
    GridRowDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdRow],\n  [gdRow.xs], [gdRow.sm], [gdRow.md], [gdRow.lg], [gdRow.xl],\n  [gdRow.lt-sm], [gdRow.lt-md], [gdRow.lt-lg], [gdRow.lt-xl],\n  [gdRow.gt-xs], [gdRow.gt-sm], [gdRow.gt-md], [gdRow.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridRowDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridRowDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.lt-xl',] }]
    };
    return GridRowDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$10 = 'rows';
/** @type {?} */
var DEFAULT_VALUE$7 = 'none';
/** @type {?} */
var AUTO_SPECIFIER$1 = '!';
/**
 * 'grid-template-rows' CSS Grid styling directive
 * Configures the sizing for the rows in the grid
 * Syntax: <row value> [auto]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
 */
var GridRowsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridRowsDirective, _super);
    /* tslint:enable */
    function GridRowsDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridRowsDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$10, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridRowsDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$10] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridRowsDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$10, DEFAULT_VALUE$7, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridRowsDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$10) || DEFAULT_VALUE$7;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridRowsDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var auto = false;
        if (value.endsWith(AUTO_SPECIFIER$1)) {
            value = value.substring(0, value.indexOf(AUTO_SPECIFIER$1));
            auto = true;
        }
        /** @type {?} */
        var css = {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-auto-rows': '',
            'grid-template-rows': '',
        };
        /** @type {?} */
        var key = (auto ? 'grid-auto-rows' : 'grid-template-rows');
        css[key] = value;
        return css;
    };
    GridRowsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdRows],\n  [gdRows.xs], [gdRows.sm], [gdRows.md], [gdRows.lg], [gdRows.xl],\n  [gdRows.lt-sm], [gdRows.lt-md], [gdRows.lt-lg], [gdRows.lt-xl],\n  [gdRows.gt-xs], [gdRows.gt-sm], [gdRows.gt-md], [gdRows.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridRowsDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridRowsDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridRowsDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ALL_DIRECTIVES = [
    GridAlignDirective,
    GridAlignColumnsDirective,
    GridAlignRowsDirective,
    GridAreaDirective,
    GridAreasDirective,
    GridAutoDirective,
    GridColumnDirective,
    GridColumnsDirective,
    GridGapDirective,
    GridRowDirective,
    GridRowsDirective,
];
/**
 * *****************************************************************
 * Define module for the CSS Grid API
 * *****************************************************************
 */
var GridModule = /** @class */ (function () {
    function GridModule() {
    }
    GridModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
                    declarations: ALL_DIRECTIVES.slice(),
                    exports: ALL_DIRECTIVES.slice()
                },] },
    ];
    return GridModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=grid.es5.js.map


/***/ }),

/***/ "./src/app/shell/components/apply-to-project/apply-to-project.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/shell/components/apply-to-project/apply-to-project.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!id\">\n  <mat-spinner></mat-spinner>\n</div>\n<div *ngIf=\"id\">\n  <mat-card>\n    <mat-card-header>\n      <mat-icon mat-card-avatar svgIcon=\"svg-1\"></mat-icon>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <p>\n        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n        bred for hunting.\n      </p>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/shell/components/apply-to-project/apply-to-project.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/shell/components/apply-to-project/apply-to-project.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shell/components/apply-to-project/apply-to-project.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shell/components/apply-to-project/apply-to-project.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ApplyToProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyToProjectComponent", function() { return ApplyToProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplyToProjectComponent = /** @class */ (function () {
    function ApplyToProjectComponent(route) {
        this.route = route;
    }
    ApplyToProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    };
    ApplyToProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apply-to-project',
            template: __webpack_require__(/*! ./apply-to-project.component.html */ "./src/app/shell/components/apply-to-project/apply-to-project.component.html"),
            styles: [__webpack_require__(/*! ./apply-to-project.component.scss */ "./src/app/shell/components/apply-to-project/apply-to-project.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ApplyToProjectComponent);
    return ApplyToProjectComponent;
}());



/***/ }),

/***/ "./src/app/shell/components/forgot-password/forgot-password.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/shell/components/forgot-password/forgot-password.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  forgot-password works!\n</p>\n"

/***/ }),

/***/ "./src/app/shell/components/forgot-password/forgot-password.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/shell/components/forgot-password/forgot-password.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shell/components/forgot-password/forgot-password.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shell/components/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/shell/components/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/shell/components/forgot-password/forgot-password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/shell/components/login/login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shell/components/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Material form login -->\n<mat-card>\n\n  <mat-card-header class=\"info-color white-text text-center py-4\">\n    <h5>\n      <strong>Sign in</strong>\n    </h5>\n  </mat-card-header>\n\n\n  <!--Card content-->\n  <mat-card-content class=\"px-lg-5 pt-0\">\n\n    <!-- Form -->\n    <form class=\"example-container\" [formGroup]=\"loginFormGroup\">\n\n      <!-- E-mail -->\n      <mat-form-field class=\"example-full-width\">\n        <!-- <mat-icon  #visibilityIcon class=\"tb-icon\" (click)=\"togglePassword()\" matSuffix>\n              {{showPassword ? visibility : visibility_off}}\n            </mat-icon> -->\n        <input matInput placeholder=\"Email\" [formControl]=\"loginFormGroup.controls.email\">\n        <!-- <mat-hint>Errors appear instantly!</mat-hint> -->\n        <mat-error *ngIf=\"loginFormGroup.controls.email.hasError('email') && !loginFormGroup.controls.email.hasError('required')\">\n          Please enter a valid email address\n        </mat-error>\n        <mat-error *ngIf=\"loginFormGroup.controls.email.hasError('required')\">\n          Email is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n\n      <!-- Password -->\n      <div class=\"row\">\n        <div class=\"col-lg-11\">\n          <mat-form-field>\n\n            <input [type]=\"showPassword.checked ? 'text' : 'password'\" matInput placeholder=\"New password\"\n              [formControl]=\"loginFormGroup.controls.password\">\n\n            <!-- <mat-icon *ngIf=\"!showPassword\" #visibilityIconOff class=\"tb-icon\" (click)=\"togglePassword()\" matSuffix>visibility_off</mat-icon> -->\n            <div class=\"mb10\">\n              <mat-error *ngIf=\"loginFormGroup.controls.password.hasError('minlength') && !loginFormGroup.controls.password.hasError('required')\">\n                minimum length of password is 8 characters\n              </mat-error>\n              <mat-error *ngIf=\"loginFormGroup.controls.password.hasError('invalidPassword') && !loginFormGroup.controls.password.hasError('required')\">\n                  password must be at least 8 characters and alphanumeric\n              </mat-error>\n              <mat-error *ngIf=\"loginFormGroup.controls.password.hasError('required')\">\n                Please enter your password\n              </mat-error>\n            </div>\n          </mat-form-field>\n        </div>\n        <div class=\"col-lg-1\">\n          <mat-checkbox #showPassword>Show password</mat-checkbox>\n        </div>\n      </div>\n      <div style=\"margin-bottom:20px;\">\n        <div>\n          <!-- Remember me -->\n          <!-- <mat-checkbox>Remember me</mat-checkbox> -->\n        </div>\n        <div>\n          <!-- Forgot password -->\n          <a matLine [routerLink]=\"['/shell/forgotPassword']\">Forgot Password?</a>\n        </div>\n      </div>\n\n      <!-- Sign in button -->\n      <div class=\"text-center\" style=\"margin-bottom:20px;\">\n        <button mat-raised-button color=\"primary\" (click)=\"loginUser()\" [disabled]=\"!loginFormGroup.valid\">Login</button>\n        <!-- <button mat-raised-button color=\"primary\" (click)=\"togglePassword()\">Test</button> -->\n      </div>\n\n      <mat-error *ngIf=\"(errorMessage)\">{{errorMessage}}</mat-error>\n\n      <!-- Register -->\n      <p>Not a member?\n        <a matLine [routerLink]=\"['/shell/register']\">Register</a>\n      </p>\n\n      <!-- Social login -->\n      <p style=\"margin-top:10px;\">or sign in with:</p>\n      <div class=\"col-md-4\">\n        <a>\n          <i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i>\n        </a>\n        <a>\n          <i class=\"fa fa-google\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n\n    </form>\n    <!-- Form -->\n\n  </mat-card-content>\n\n</mat-card>\n<!-- Material form login -->"

/***/ }),

/***/ "./src/app/shell/components/login/login.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shell/components/login/login.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n.fa-facebook-official {\n  color: #46629e;\n  font-size: 30px; }\n\n.fa-facebook-official:hover {\n  color: #46629e; }\n\n.fa-google {\n  color: #ea4335;\n  font-size: 30px; }\n\n.fa-google:hover {\n  color: #ea4335; }\n\n.fa {\n  padding-right: 5px; }\n\n.mat-form-field {\n  width: 100%; }\n\n.tb-icon {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/shell/components/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shell/components/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/register.service */ "./src/app/core/register.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _shared_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/validation.service */ "./src/app/shared/validation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, formBuilder, registerService, dataService, validationService, router) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.registerService = registerService;
        this.dataService = dataService;
        this.validationService = validationService;
        this.router = router;
        this.showPassword = true;
        this.errorMessage = null;
        this.buildFormGroup();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.route.queryParams.subscribe(function (params) {
            debugger;
            _this.entityId = Number(params['entityId']) || 0;
        });
    };
    LoginComponent.prototype.buildFormGroup = function () {
        this.loginFormGroup = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"].passwordValidator]]
        });
    };
    LoginComponent.prototype.togglePassword = function (toggle) {
        debugger;
        this.showPassword = !toggle;
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        debugger;
        this.user = this.loginFormGroup.value;
        this.registerService.loginUser(this.user)
            .subscribe(function (authResponse) {
            debugger;
            if (authResponse.auth) {
                localStorage.setItem('token', authResponse.token);
                if (_this.entityId === 1) { // its volunteer
                    var token = localStorage.getItem('token');
                    _this.dataService.getVolunteerByUser(_this.user.email)
                        .subscribe(function (volunteer) {
                        debugger;
                        _this.volunteer = volunteer[0];
                        if (_this.volunteer) {
                            _this.router.navigate(['shell/volunteerProfile']);
                        }
                        else {
                            _this.router.navigate(['shell/newVolunteer', '0']);
                        }
                    }, function (err) { return console.log(err); });
                }
                if (_this.entityId === 2) { // its organization
                    _this.router.navigate(['shell/organization']);
                }
            }
            else {
                // this.errorMessage = 'Unable to add customer';
            }
        }, function (err) {
            debugger;
            _this.errorMessage = 'Wrong credential. Try again or click Forgot password to reset it.';
            // if (err.status === 401) {
            //   this.errorMessage = 'Wrong credential. Try again or click Forgot password to reset it.';
            // }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIcon"])
    ], LoginComponent.prototype, "visibilityIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIcon"])
    ], LoginComponent.prototype, "visibilityIconOff", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/shell/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/shell/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"],
            _core_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _shared_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shell/components/main-content/main-content.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/shell/components/main-content/main-content.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-card>\n  <mat-card-header>\n    \n  </mat-card-header>\n  <mat-card-content>\n    <p>\n      <a matLine [routerLink]=\"['/shell/newVolunteer']\">\n        <mat-icon svgIcon=\"svg-1\"></mat-icon>Goto Volunteer\n      </a>\n    </p>\n  </mat-card-content>\n</mat-card> -->\n\n\n<mat-grid-list cols=\"4\" rowHeight=\"2:2\">\n  <mat-grid-tile class=\"my-class\" *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\"\n    [style.background]=\"tile.color\" (click)=\"onTileClicked(tile)\">\n    {{tile.text}}\n  </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/shell/components/main-content/main-content.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/shell/components/main-content/main-content.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-class {\n  border-radius: 50%;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/shell/components/main-content/main-content.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shell/components/main-content/main-content.component.ts ***!
  \*************************************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainContentComponent = /** @class */ (function () {
    function MainContentComponent(router) {
        this.router = router;
        this.tiles = [
            { id: 1, text: 'I am Volunteer', cols: 2, rows: 2, color: 'lightblue' },
            { id: 2, text: 'Looking for Volunteers', cols: 2, rows: 2, color: 'lightgreen' },
        ];
    }
    MainContentComponent.prototype.ngOnInit = function () {
    };
    MainContentComponent.prototype.onTileClicked = function (tile) {
        debugger;
        this.router.navigate(['shell/login'], { queryParams: { entityId: tile.id } });
    };
    MainContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-content',
            template: __webpack_require__(/*! ./main-content.component.html */ "./src/app/shell/components/main-content/main-content.component.html"),
            styles: [__webpack_require__(/*! ./main-content.component.scss */ "./src/app/shell/components/main-content/main-content.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/shell/components/new-volunteer/new-volunteer.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shell/components/new-volunteer/new-volunteer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currMode === 'edit' && !volunteer\">\r\n  <mat-spinner></mat-spinner>\r\n</div>\r\n\r\n<div *ngIf=\"currMode === 'add' || (currMode === 'edit' && volunteer)\">\r\n  <mat-card>\r\n    <mat-card-header class=\"info-color white-text text-center py-4\">\r\n      <h5>\r\n        <strong>{{title}} Volunteer (*Required)</strong>\r\n      </h5>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <form class=\"example-container\" [formGroup]=\"volunteerFormGroup\">\r\n\r\n        <div style=\"margin-top:20px;\">\r\n          <label>Prefix*: </label>\r\n          <mat-radio-group class=\"ml5\" [formControl]=\"volunteerFormGroup.controls.prefix\">\r\n            <mat-radio-button value=\"1\">Mr</mat-radio-button>\r\n            <mat-radio-button value=\"2\">Ms</mat-radio-button>\r\n            <mat-radio-button value=\"3\">Other</mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n\r\n        <mat-form-field>\r\n          <input matInput [formControl]=\"volunteerFormGroup.controls.dateOfBirth\" [matDatepicker]=\"dateOfBirth\" [max]=\"maxDate\"\r\n            placeholder=\"Date of Birth*\" [errorStateMatcher]=\"matcher\">\r\n          <mat-hint class=\"hint-fonts\">Minimum Age is 18 years!</mat-hint>\r\n          <mat-datepicker-toggle matSuffix [for]=\"dateOfBirth\"></mat-datepicker-toggle>\r\n          <mat-datepicker #dateOfBirth></mat-datepicker>\r\n          <mat-error *ngIf=\"volunteerFormGroup.controls.dateOfBirth.hasError('required')\">\r\n            Date of Birth is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n\r\n        <div class=\"mt10\">\r\n          <label>Gender*: </label>\r\n          <mat-radio-group class=\"ml5\" [formControl]=\"volunteerFormGroup.controls.gender\">\r\n            <mat-radio-button value=\"1\">Male</mat-radio-button>\r\n            <mat-radio-button value=\"2\">Female</mat-radio-button>\r\n            <mat-radio-button value=\"3\">Other</mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"I am interested to volunteer in*\" [formControl]=\"volunteerFormGroup.controls.workAreas\"\r\n            multiple>\r\n            <mat-option *ngFor=\"let workArea of workAreas\" [value]=\"workArea\">{{workArea.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Qualification*\" [formControl]=\"volunteerFormGroup.controls.qualification\"\r\n            (selectionChange)=\"qualificationChange($event)\">\r\n            <mat-option *ngFor=\"let qualification of qualifications\" [value]=\"qualification\">\r\n              {{qualification.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <textarea matInput [formControl]=\"volunteerFormGroup.controls.address1\" placeholder=\"Address 1\"></textarea>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <textarea matInput [formControl]=\"volunteerFormGroup.controls.address2\" placeholder=\"Address 2\"></textarea>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput [formControl]=\"volunteerFormGroup.controls.pincode\" (onkeypress)=\"pincodeKeyUp($event)\"\r\n            placeholder=\"Pincode*\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <mat-select [formControl]=\"volunteerFormGroup.controls.state\" placeholder=\"State*\" (selectionChange)=\"stateChange($event.value)\">\r\n            <mat-option *ngFor=\"let state of states\" [value]=\"state\">\r\n              {{state.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <mat-select [formControl]=\"volunteerFormGroup.controls.city\" placeholder=\"City*\">\r\n            <mat-option *ngFor=\"let city of cities\" [value]=\"city\">\r\n              {{city.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <!-- Finish up button -->\r\n        <div class=\"text-center\">\r\n          <button mat-raised-button color=\"primary\" (click)=\"submit()\">Finish</button>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/shell/components/new-volunteer/new-volunteer.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/shell/components/new-volunteer/new-volunteer.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n.hint-fonts {\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/shell/components/new-volunteer/new-volunteer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shell/components/new-volunteer/new-volunteer.component.ts ***!
  \***************************************************************************/
/*! exports provided: MyErrorStateMatcher, NewVolunteerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewVolunteerComponent", function() { return NewVolunteerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var NewVolunteerComponent = /** @class */ (function () {
    function NewVolunteerComponent(formBuilder, dataService, router, route) {
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.matcher = new MyErrorStateMatcher();
        this.toppingList = [];
        this.buildFormGroup();
    }
    NewVolunteerComponent.prototype.ngOnInit = function () {
        debugger;
        this.id = this.route.snapshot.params['id'];
        this.getQualifications();
        this.getStates();
        this.getWorkAreas();
        if (this.id !== '0') {
            this.currMode = 'edit';
            this.title = "Edit";
            this.getUserAndVolunteer();
        }
        else {
            this.currMode = 'add';
            this.title = "Create";
            this.getUser();
        }
        this.setMinDate();
    };
    NewVolunteerComponent.prototype.getUser = function () {
        var _this = this;
        debugger;
        var token = localStorage.getItem('token');
        this.dataService.getUser(token)
            .subscribe(function (user) {
            debugger;
            _this.user = user;
        }, function (err) { return console.log(err); });
    };
    NewVolunteerComponent.prototype.getUserAndVolunteer = function () {
        var _this = this;
        debugger;
        var token = localStorage.getItem('token');
        this.dataService.getUser(token)
            .subscribe(function (user) {
            debugger;
            _this.user = user;
            _this.dataService.getVolunteerByUser(_this.user.email)
                .subscribe(function (volunteer) {
                debugger;
                _this.volunteer = volunteer[0];
                if (_this.volunteer) {
                    _this.currQualification = _this.qualifications.filter(function (q) { return q.id === _this.volunteer.qualificationId; });
                    var state = _this.states.filter(function (s) { return s.id === _this.volunteer.stateId; });
                    _this.stateChange(state[0]);
                }
            }, function (err) { return console.log(err); });
        }, function (err) { return console.log(err); });
    };
    NewVolunteerComponent.prototype.patchVolunteer = function (state) {
        var _this = this;
        debugger;
        var city = this.cities.filter(function (c) { return c.id === _this.volunteer.cityId; });
        var selectedWorkAreas = this.workAreas.filter(function (wa) { return _this.volunteer.workAreas.some(function (v) { return v.id === wa.id; }); });
        this.volunteerFormGroup.patchValue({
            prefix: this.volunteer.prefix,
            dateOfBirth: this.volunteer.dateOfBirth,
            gender: this.volunteer.gender,
            workAreas: selectedWorkAreas,
            qualification: this.currQualification[0],
            address1: this.volunteer.address1,
            address2: this.volunteer.address2,
            pincode: this.volunteer.pincode,
            state: state,
            city: city[0]
        });
    };
    NewVolunteerComponent.prototype.qualificationChange = function (qualification) {
        debugger;
    };
    NewVolunteerComponent.prototype.setMinDate = function () {
        var currDate = new Date();
        var year = currDate.getFullYear() - 18;
        var month = currDate.getMonth();
        var day = currDate.getDay();
        this.maxDate = new Date(year, month, day);
    };
    NewVolunteerComponent.prototype.buildFormGroup = function () {
        this.volunteerFormGroup = this.formBuilder.group({
            prefix: ['2', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: ['2', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            workAreas: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            qualification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address1: [''],
            address2: [''],
            pincode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    NewVolunteerComponent.prototype.getStates = function () {
        var _this = this;
        this.dataService.getStates().subscribe(function (states) {
            return _this.states = states;
        });
    };
    NewVolunteerComponent.prototype.stateChange = function (state) {
        var _this = this;
        this.dataService.getCitiesForState(state.id)
            .subscribe(function (cities) {
            debugger;
            _this.cities = cities;
            if (_this.currMode === 'edit') {
                _this.patchVolunteer(state);
            }
        }, function (err) { return console.log(err); });
    };
    NewVolunteerComponent.prototype.getWorkAreas = function () {
        var _this = this;
        this.dataService.getWorkAreas().subscribe(function (workAreas) {
            return _this.workAreas = workAreas;
        });
    };
    NewVolunteerComponent.prototype.getQualifications = function () {
        var _this = this;
        this.dataService.getQualifications().subscribe(function (qualifications) {
            debugger;
            return _this.qualifications = qualifications;
        });
    };
    NewVolunteerComponent.prototype.pincodeKeyUp = function (event) {
        debugger;
        return (event.charCode >= 48 && event.charCode <= 57);
    };
    NewVolunteerComponent.prototype.submit = function () {
        var _this = this;
        debugger;
        var volunteer;
        volunteer = this.volunteerFormGroup.value;
        volunteer.stateId = volunteer.state.id;
        volunteer.cityId = volunteer.city.id;
        volunteer.qualificationId = volunteer.qualification.id;
        volunteer.user = this.user;
        if (this.currMode === 'edit') {
            debugger;
            volunteer._id = this.id;
            volunteer.updatedOn = new Date();
            this.dataService.updateVolunteer(volunteer)
                .subscribe(function (volunteer) {
                if (volunteer) {
                    _this.router.navigate(['shell/volunteerProfile']);
                }
                else {
                    //this.errorMessage = 'Unable to save customer';
                }
            }, function (err) { return console.log(err); });
        }
        else {
            this.dataService.insertVolunteer(volunteer)
                .subscribe(function (volunteer) {
                debugger;
                if (volunteer) {
                    _this.router.navigate(['shell/volunteerProfile']);
                }
                else {
                    //this.errorMessage = 'Unable to add customer';
                }
            }, function (err) { return console.log(err); });
        }
    };
    NewVolunteerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-volunteer',
            template: __webpack_require__(/*! ./new-volunteer.component.html */ "./src/app/shell/components/new-volunteer/new-volunteer.component.html"),
            styles: [__webpack_require__(/*! ./new-volunteer.component.scss */ "./src/app/shell/components/new-volunteer/new-volunteer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NewVolunteerComponent);
    return NewVolunteerComponent;
}());



/***/ }),

/***/ "./src/app/shell/components/organization/organization.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/shell/components/organization/organization.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  organization works!\n</p>\n"

/***/ }),

/***/ "./src/app/shell/components/organization/organization.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/shell/components/organization/organization.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shell/components/organization/organization.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shell/components/organization/organization.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationComponent", function() { return OrganizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrganizationComponent = /** @class */ (function () {
    function OrganizationComponent() {
    }
    OrganizationComponent.prototype.ngOnInit = function () {
    };
    OrganizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization',
            template: __webpack_require__(/*! ./organization.component.html */ "./src/app/shell/components/organization/organization.component.html"),
            styles: [__webpack_require__(/*! ./organization.component.scss */ "./src/app/shell/components/organization/organization.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OrganizationComponent);
    return OrganizationComponent;
}());



/***/ }),

/***/ "./src/app/shell/components/register/register.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shell/components/register/register.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Material form register -->\n<mat-card>\n\n  <mat-card-header class=\"info-color white-text text-center py-4\">\n    <h5>\n      <strong>Register</strong>\n    </h5>\n  </mat-card-header>\n\n  <!--Card content-->\n  <mat-card-content>\n\n    <!-- Form -->\n\n    <form class=\"example-container\" [formGroup]=\"registerFormGroup\">\n\n      <!-- First name -->\n      <mat-form-field>\n        <input matInput [formControl]=\"registerFormGroup.controls.firstName\" placeholder=\"First Name\">\n        <mat-error *ngIf=\"registerFormGroup.controls.firstName.hasError('required')\">\n          First Name is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n\n      <!-- Last name -->\n      <mat-form-field>\n        <input matInput [formControl]=\"registerFormGroup.controls.lastName\" placeholder=\"Last Name\">\n        <mat-error *ngIf=\"registerFormGroup.controls.lastName.hasError('required')\">\n          Last Name is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n\n      <!-- E-mail -->\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Email\" [formControl]=\"registerFormGroup.controls.email\">\n        <!-- <mat-hint>Errors appear instantly!</mat-hint> -->\n        <mat-error *ngIf=\"registerFormGroup.controls.email.hasError('invalidEmailAddress') && !registerFormGroup.controls.email.hasError('required')\">\n          Please enter a valid email address\n        </mat-error>\n        <mat-error *ngIf=\"registerFormGroup.controls.email.hasError('required')\">\n          Email is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n\n      <!-- Phone number -->\n      <mat-form-field>\n        <input matInput [formControl]=\"registerFormGroup.controls.phone\" placeholder=\"Phone\">\n        <mat-error *ngIf=\"registerFormGroup.controls.phone.hasError('minlength') && !registerFormGroup.controls.phone.hasError('required')\">\n          phone number must be 10 digits\n        </mat-error>\n        <mat-error *ngIf=\"registerFormGroup.controls.phone.hasError('maxlength') && !registerFormGroup.controls.phone.hasError('required')\">\n          phone number must be 10 digits\n        </mat-error>\n        <mat-error *ngIf=\"registerFormGroup.controls.phone.hasError('invalidPhoneNumber') && !registerFormGroup.controls.phone.hasError('required')\">\n          Please enter a valid phone number\n        </mat-error>\n        <mat-error *ngIf=\"registerFormGroup.controls.phone.hasError('required')\">\n          Phone is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n\n\n      <!-- Password -->\n      <div [formGroup]=\"registerFormGroup.controls.passwords\">\n        <mat-form-field>\n          <input matInput placeholder=\"New password\" [formControl]=\"registerFormGroup.controls.passwords.controls.password\">\n          <mat-error *ngIf=\"registerFormGroup.controls.passwords.controls.password.hasError('required')\">\n            Please enter your new password\n          </mat-error>\n        </mat-form-field>\n\n        <!-- Confirm -->\n        <mat-form-field>\n          <input matInput placeholder=\"Confirm password\" [formControl]=\"registerFormGroup.controls.passwords.controls.confirmPassword\">\n          <mat-error *ngIf=\"registerFormGroup.controls.passwords.controls.confirmPassword.hasError('required')\">\n            Please re-enter your password\n          </mat-error>\n          <mat-error *ngIf=\"registerFormGroup.controls.passwords.hasError('notSame')\">\n            Passwords do not match\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n\n\n      <!-- Newsletter -->\n      <!-- <mdb-checkbox>Subscribe to our newsletter</mdb-checkbox> -->\n\n      <!-- Sign up button -->\n      <div class=\"text-center\">\n        <button mat-raised-button color=\"primary\" (click)=\"registerUser()\">Register</button>\n        <button type=\"reset\" style=\"margin-left:10px;\" mat-raised-button color=\"warn\">Clear</button>\n      </div>\n\n      <!-- Social register -->\n      <p style=\"margin-top:10px;\">or sign up with:</p>\n      <div class=\"col-md-4\">\n        <a>\n          <i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i>\n        </a>\n        <a>\n          <i class=\"fa fa-google\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n\n      <hr>\n\n      <!-- Terms of service -->\n      <p>By clicking\n        <em>Sign up</em> you agree to our\n        <a href=\"\" target=\"_blank\">terms of service</a> and\n        <a href=\"\" target=\"_blank\">terms of service</a>. </p>\n\n    </form>\n\n    <!-- Form -->\n\n  </mat-card-content>\n\n</mat-card>\n<!-- Material form register -->"

/***/ }),

/***/ "./src/app/shell/components/register/register.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shell/components/register/register.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n.fa-facebook-official {\n  color: #46629e;\n  font-size: 30px; }\n\n.fa-facebook-official:hover {\n  color: #46629e; }\n\n.fa-google {\n  color: #ea4335;\n  font-size: 30px; }\n\n.fa-google:hover {\n  color: #ea4335; }\n\n.fa {\n  padding-right: 5px; }\n"

/***/ }),

/***/ "./src/app/shell/components/register/register.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shell/components/register/register.component.ts ***!
  \*****************************************************************/
/*! exports provided: MyErrorStateMatcher, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/register.service */ "./src/app/core/register.service.ts");
/* harmony import */ var _shared_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/validation.service */ "./src/app/shared/validation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        var invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
        return (invalidCtrl || invalidParent);
    };
    return MyErrorStateMatcher;
}());

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, registerService, router) {
        this.formBuilder = formBuilder;
        this.registerService = registerService;
        this.router = router;
        this.matcher = new MyErrorStateMatcher();
        this.buildFormGroup();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    // private buildFormGroup() {
    //   this.registerFormGroup = this.formBuilder.group({
    //     firstName: ['', Validators.required],
    //     lastName: ['', Validators.required],
    //     email: ['', [Validators.required, ValidationService.emailValidator]],
    //     phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), ValidationService.phoneNumberValidator]],
    //     password: ['', Validators.required],
    //     confirmPassword: ['', Validators.required]
    //   }, { validator: this.checkPasswords });
    // }
    RegisterComponent.prototype.buildFormGroup = function () {
        debugger;
        this.registerFormGroup = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"].emailValidator]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _shared_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"].phoneNumberValidator]],
            passwords: this.formBuilder.group({
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }, { validator: this.checkPasswords })
        });
    };
    RegisterComponent.prototype.checkPasswords = function (group) {
        debugger;
        var pass = group.controls.password.value;
        var confirmPass = group.controls.confirmPassword.value;
        return ((pass === confirmPass) ? null : { notSame: true });
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        debugger;
        this.user = this.registerFormGroup.value;
        this.registerService.registerUser(this.user)
            .subscribe(function (token) {
            debugger;
            if (token) {
                localStorage.setItem('token', token);
                _this.router.navigate(['/']);
            }
            else {
                // this.errorMessage = 'Unable to add customer';
            }
        }, function (err) { return console.log(err); });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/shell/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/shell/components/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _core_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/shell/components/sidenav/sidenav.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shell/components/sidenav/sidenav.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"app-sidenav-container\" autosize>\n    <mat-sidenav #sidenav class=\"app-sidenav mat-elevation-z10\" [opened]=\"!isScreenSmall()\" [mode]=\"isScreenSmall() ? 'over' : 'side'\">\n        <mat-toolbar color=\"primary\">Projects</mat-toolbar>\n        <mat-nav-list>\n            <mat-list-item *ngFor=\"let project of projects\">            \n                <a matLine [routerLink]=\"['/shell/applyToProject', project._id]\">\n                    <mat-icon svgIcon=\"svg-1\"></mat-icon>{{ project.projectName }}\n                </a>\n            </mat-list-item>\n        </mat-nav-list>\n    </mat-sidenav>\n\n    <div class=\"app-sidenav-content\">\n        <app-toolbar (toggleSidenav)=\"sidenav.toggle()\"></app-toolbar>\n\n        <div class=\"wrapper\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/shell/components/sidenav/sidenav.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shell/components/sidenav/sidenav.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .example-container {\r\n    width: 400px;\r\n    height: 200px;\r\n    margin: 10px;\r\n    border: 1px solid #555;\r\n  } */\n.app-sidenav-container {\n  flex: 1;\n  position: fixed;\n  width: 100%;\n  min-width: 100%;\n  height: 100%;\n  min-height: 100%; }\n.app-sidenav-content {\n  display: flex;\n  height: 100%;\n  flex-direction: column; }\n.app-sidenav {\n  width: 240px; }\n.wrapper {\n  margin: 50px; }\n"

/***/ }),

/***/ "./src/app/shell/components/sidenav/sidenav.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shell/components/sidenav/sidenav.component.ts ***!
  \***************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SMALL_WIDTH_BREAKPOINT = 720;
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(zone, router, dataService) {
        var _this = this;
        this.zone = zone;
        this.router = router;
        this.dataService = dataService;
        this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)");
        this.projects = [];
        this.filteredProjects = [];
        this.totalRecords = 0;
        this.pageSize = 10;
        this.mediaMatcher.addListener(function (mql) { return zone.run(function () { return _this.mediaMatcher = mql; }); });
    }
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProjectList(1);
        this.router.events.subscribe(function () {
            if (_this.isScreenSmall()) {
                _this.sidenav.close();
            }
        });
    };
    SidenavComponent.prototype.isScreenSmall = function () {
        return this.mediaMatcher.matches;
    };
    SidenavComponent.prototype.getProjectList = function (page) {
        var _this = this;
        this.dataService.getProjectsPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe(function (response) {
            _this.projects = _this.filteredProjects = response.results;
            _this.totalRecords = response.totalRecords;
        }, function (err) { return console.log(err); }, function () { return console.log('getCustomersPage() retrieved customers'); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"])
    ], SidenavComponent.prototype, "sidenav", void 0);
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/shell/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/shell/components/sidenav/sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/shell/components/toolbar/toolbar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shell/components/toolbar/toolbar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <button mat-button class=\"side-nav-toggle\" (click)=\"toggleSidenav.emit()\">\n        <mat-icon>menu</mat-icon>\n    </button>\n\n    <span>Contacts Manager</span>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/shell/components/toolbar/toolbar.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shell/components/toolbar/toolbar.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-nav-toggle {\n  display: none;\n  padding: 0px;\n  margin: 8px;\n  min-width: 56px; }\n  @media (max-width: 720px) {\n    .side-nav-toggle {\n      display: flex;\n      align-items: center;\n      justify-content: center; } }\n  .side-nav-toggle mat-icon {\n    font-size: 30px;\n    height: 56px;\n    width: 56px;\n    line-height: 56px;\n    color: white; }\n"

/***/ }),

/***/ "./src/app/shell/components/toolbar/toolbar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shell/components/toolbar/toolbar.component.ts ***!
  \***************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.toggleSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "toggleSidenav", void 0);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/shell/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/shell/components/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/shell/components/volunteer-profile/volunteer-profile.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/shell/components/volunteer-profile/volunteer-profile.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <mat-card>\r\n      <div class=\"row\" *ngIf=\"volunteer\">\r\n        <div class=\"col-md-12 text-center\">\r\n          <img [src]=\"((volunteer.gender === '1') ? '../../../../assets/images/male.png' : '../../../../assets/images/female.png')\"\r\n            class=\"img-avatar\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"volunteer\">\r\n        <div class=\"col-md-12 text-center\">\r\n          <p></p>\r\n          <h3><strong>{{volunteer.user.firstName}} {{volunteer.user.lastName}}</strong></h3>\r\n          <h5>{{volunteer.qualification.name}}</h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mb10 normalized\" *ngIf=\"volunteer\">\r\n        <div class=\"col-md-12\">\r\n          <hr>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 text-left\">\r\n              <h4 class=\"list-title\">Member Since</h4>\r\n            </div>\r\n            <div class=\"col-md-6 text-right\">\r\n              {{volunteer.createdOn | date: 'mediumDate'}}\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 text-left\">\r\n              <h4 class=\"list-title\">Projects Completed</h4>\r\n            </div>\r\n            <div class=\"col-md-6 text-right\">\r\n              4\r\n            </div>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"volunteer\">\r\n        <div class=\"col-md-12\">\r\n          <button mat-raised-button color=\"primary\" [routerLink]=\"['/shell/newVolunteer', volunteer._id]\">Edit</button>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n    <mat-card class=\"mt20\">\r\n      <h3>About Me</h3>\r\n      <hr>\r\n      <div class=\"row\" *ngIf=\"volunteer\">\r\n        <span class=\"normalized\">\r\n          <mat-icon class=\"mr5\">book</mat-icon> <span class=\"list-title\" style=\"margin-left:-3px;\">Education</span>\r\n          <p class=\"mr5\">{{volunteer.qualification.name}}</p>\r\n        </span>\r\n      </div>\r\n      <hr>\r\n      <div class=\"row\" *ngIf=\"volunteer\">\r\n        <span class=\"normalized\">\r\n          <mat-icon class=\"mr5\">location_on</mat-icon> <span class=\"list-title\" style=\"margin-left:-3px;\">Location</span>\r\n          <p class=\"mr5\">{{volunteer.city.name}}, {{volunteer.state.name}}</p>\r\n        </span>\r\n      </div>\r\n      <hr>\r\n      <div class=\"row\">\r\n        <span class=\"normalized\">\r\n          <mat-icon class=\"mr5\">create</mat-icon> <span class=\"list-title\" style=\"margin-left:-3px;\">Domains</span>\r\n          <div class=\"ml10\">\r\n            <mat-chip-list *ngIf=\"volunteer\">\r\n              <mat-chip *ngFor=\"let domain of volunteer.workAreas; let i = index\" style=\"font-size: 10px\" color=\"accent\">{{domain.name}}</mat-chip>\r\n            </mat-chip-list>\r\n          </div>\r\n        </span>\r\n      </div>\r\n      <hr>\r\n    </mat-card>\r\n\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <mat-card>\r\n      <mat-tab-group>\r\n        <mat-tab label=\"Applications\">\r\n          <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n\r\n            <!--- Note that these columns can be defined in any order.\r\n                      The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n            <!-- Position Column -->\r\n            <ng-container matColumnDef=\"position\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\r\n              <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"name\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Organization </th>\r\n              <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Weight Column -->\r\n            <ng-container matColumnDef=\"weight\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Project Name </th>\r\n              <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Symbol Column -->\r\n            <ng-container matColumnDef=\"symbol\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Applied On </th>\r\n              <td mat-cell *matCellDef=\"let element\"> {{element.symbol | date: 'mediumDate'}} </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n          </table>\r\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"row mt20\">\r\n  <div class=\"col-md-3\">\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/shell/components/volunteer-profile/volunteer-profile.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/shell/components/volunteer-profile/volunteer-profile.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-avatar {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  border: 2px solid;\n  padding: 3px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.mat-raised-button {\n  width: 100%; }\n\n.mat-card {\n  border-top: 3px solid #3f51b5; }\n\n.normalized {\n  font-size: 14px; }\n\n.mr5 {\n  vertical-align: bottom;\n  margin-left: 12px; }\n\n.list-title {\n  font-weight: bold; }\n\ntable {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/shell/components/volunteer-profile/volunteer-profile.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shell/components/volunteer-profile/volunteer-profile.component.ts ***!
  \***********************************************************************************/
/*! exports provided: VolunteerProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteerProfileComponent", function() { return VolunteerProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ELEMENT_DATA = [
    { position: 1, name: 'Organization 1', weight: 'Project 1', symbol: new Date() },
    { position: 2, name: 'Organization 2', weight: 'Project 2', symbol: new Date() },
    { position: 3, name: 'Organization 3', weight: 'Project 3', symbol: new Date() },
    { position: 4, name: 'Organization 4', weight: 'Project 4', symbol: new Date() },
    { position: 5, name: 'Organization 5', weight: 'Project 5', symbol: new Date() },
    { position: 6, name: 'Organization 6', weight: 'Project 6', symbol: new Date() },
    { position: 7, name: 'Organization 7', weight: 'Project 7', symbol: new Date() },
    { position: 8, name: 'Organization 8', weight: 'Project 8', symbol: new Date() },
    { position: 9, name: 'Organization 9', weight: 'Project 9', symbol: new Date() },
    { position: 10, name: 'Organization 10', weight: 'Project 10', symbol: new Date() },
];
var VolunteerProfileComponent = /** @class */ (function () {
    function VolunteerProfileComponent(formBuilder, dataService, router) {
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.router = router;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](ELEMENT_DATA);
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    }
    VolunteerProfileComponent.prototype.ngOnInit = function () {
        this.getUser();
        // this.getVolunteer();   
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    VolunteerProfileComponent.prototype.getUser = function () {
        var _this = this;
        debugger;
        var token = localStorage.getItem('token');
        this.dataService.getUser(token)
            .subscribe(function (user) {
            debugger;
            _this.user = user;
            _this.dataService.getVolunteerByUser(_this.user.email)
                .subscribe(function (volunteer) {
                debugger;
                _this.volunteer = volunteer[0];
            }, function (err) { return console.log(err); });
        }, function (err) { return console.log(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], VolunteerProfileComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], VolunteerProfileComponent.prototype, "sort", void 0);
    VolunteerProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-volunteer-profile',
            template: __webpack_require__(/*! ./volunteer-profile.component.html */ "./src/app/shell/components/volunteer-profile/volunteer-profile.component.html"),
            styles: [__webpack_require__(/*! ./volunteer-profile.component.scss */ "./src/app/shell/components/volunteer-profile/volunteer-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], VolunteerProfileComponent);
    return VolunteerProfileComponent;
}());



/***/ }),

/***/ "./src/app/shell/shell.component.css":
/*!*******************************************!*\
  !*** ./src/app/shell/shell.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shell/shell.component.html":
/*!********************************************!*\
  !*** ./src/app/shell/shell.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\n"

/***/ }),

/***/ "./src/app/shell/shell.component.ts":
/*!******************************************!*\
  !*** ./src/app/shell/shell.component.ts ***!
  \******************************************/
/*! exports provided: ShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return ShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShellComponent = /** @class */ (function () {
    function ShellComponent(iconRegistry, sanitizer) {
        this.iconRegistry = iconRegistry;
        iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/images/avatars.svg'));
    }
    ShellComponent.prototype.ngOnInit = function () {
    };
    ShellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shell',
            template: __webpack_require__(/*! ./shell.component.html */ "./src/app/shell/shell.component.html"),
            styles: [__webpack_require__(/*! ./shell.component.css */ "./src/app/shell/shell.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], ShellComponent);
    return ShellComponent;
}());



/***/ }),

/***/ "./src/app/shell/shell.module.ts":
/*!***************************************!*\
  !*** ./src/app/shell/shell.module.ts ***!
  \***************************************/
/*! exports provided: ShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellModule", function() { return ShellModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/shell/components/toolbar/toolbar.component.ts");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "./src/app/shell/components/sidenav/sidenav.component.ts");
/* harmony import */ var _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main-content/main-content.component */ "./src/app/shell/components/main-content/main-content.component.ts");
/* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shell.component */ "./src/app/shell/shell.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_apply_to_project_apply_to_project_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/apply-to-project/apply-to-project.component */ "./src/app/shell/components/apply-to-project/apply-to-project.component.ts");
/* harmony import */ var _components_new_volunteer_new_volunteer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/new-volunteer/new-volunteer.component */ "./src/app/shell/components/new-volunteer/new-volunteer.component.ts");
/* harmony import */ var _core_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/auth-guard.service */ "./src/app/core/auth-guard.service.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/shell/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/shell/components/login/login.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/shell/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_organization_organization_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/organization/organization.component */ "./src/app/shell/components/organization/organization.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_volunteer_profile_volunteer_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/volunteer-profile/volunteer-profile.component */ "./src/app/shell/components/volunteer-profile/volunteer-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    {
        path: '', component: _shell_component__WEBPACK_IMPORTED_MODULE_5__["ShellComponent"],
        children: [
            { path: 'volunteerProfile', component: _components_volunteer_profile_volunteer_profile_component__WEBPACK_IMPORTED_MODULE_19__["VolunteerProfileComponent"], canActivate: [_core_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] },
            { path: 'forgotPassword', component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"] },
            { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"] },
            { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"] },
            { path: 'newVolunteer/:id', component: _components_new_volunteer_new_volunteer_component__WEBPACK_IMPORTED_MODULE_11__["NewVolunteerComponent"], canActivate: [_core_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] },
            { path: 'organization', component: _components_organization_organization_component__WEBPACK_IMPORTED_MODULE_17__["OrganizationComponent"], canActivate: [_core_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] },
            { path: 'applyToProject/:id', component: _components_apply_to_project_apply_to_project_component__WEBPACK_IMPORTED_MODULE_10__["ApplyToProjectComponent"] },
            { path: ':id', component: _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_4__["MainContentComponent"] },
            { path: '', component: _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_4__["MainContentComponent"] }
        ]
    },
    { path: '**', redirectTo: '' }
];
var ShellModule = /** @class */ (function () {
    function ShellModule() {
    }
    ShellModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _shared_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["MDBBootstrapModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
            ],
            declarations: [
                _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"],
                _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"],
                _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_4__["MainContentComponent"],
                _shell_component__WEBPACK_IMPORTED_MODULE_5__["ShellComponent"],
                _components_apply_to_project_apply_to_project_component__WEBPACK_IMPORTED_MODULE_10__["ApplyToProjectComponent"],
                _components_new_volunteer_new_volunteer_component__WEBPACK_IMPORTED_MODULE_11__["NewVolunteerComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"],
                _components_organization_organization_component__WEBPACK_IMPORTED_MODULE_17__["OrganizationComponent"],
                _components_volunteer_profile_volunteer_profile_component__WEBPACK_IMPORTED_MODULE_19__["VolunteerProfileComponent"]
            ],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_18__["MAT_DATE_LOCALE"], useValue: 'en-GB' },
            ],
        })
    ], ShellModule);
    return ShellModule;
}());



/***/ })

}]);
//# sourceMappingURL=shell-shell-module.js.map