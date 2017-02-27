/**
 * angular2-data-table v"0.0.8" (https://github.com/swimlane/angular2-data-table)
 * Copyright 2016
 * Licensed under MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/platform-browser"));
	else if(typeof define === 'function' && define.amd)
		define("angular2-data-table", ["@angular/core", "@angular/common", "@angular/platform-browser"], factory);
	else if(typeof exports === 'object')
		exports["angular2-data-table"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/platform-browser"));
	else
		root["angular2-data-table"] = factory(root["@angular/core"], root["@angular/common"], root["@angular/platform-browser"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@angular/http/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__("./node_modules/@angular/http/src/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserXhr", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPBackend", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPConnection", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CookieXSRFStrategy", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "XHRBackend", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "XHRConnection", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequestOptions", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOptions", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponseOptions", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseOptions", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyState", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseContentType", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["n"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["o"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["p"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Jsonp", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["q"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["r"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpModule", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["s"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["t"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionBackend", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["u"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "XSRFStrategy", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["v"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["w"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["x"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEncoder", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["y"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "URLSearchParams", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["z"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["A"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the http package.
 */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular/http/src/backends/browser_jsonp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* unused harmony export JSONP_HOME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserJsonp; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var /** @type {?} */ _nextRequestId = 0;
var /** @type {?} */ JSONP_HOME = '__ng_jsonp__';
var /** @type {?} */ _jsonpConnections = null;
/**
 * @return {?}
 */
function _getJsonpConnections() {
    var /** @type {?} */ w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
var BrowserJsonp = (function () {
    function BrowserJsonp() {
    }
    /**
     * @param {?} url
     * @return {?}
     */
    BrowserJsonp.prototype.build = function (url) {
        var /** @type {?} */ node = document.createElement('script');
        node.src = url;
        return node;
    };
    /**
     * @return {?}
     */
    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
    /**
     * @param {?} id
     * @return {?}
     */
    BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
    /**
     * @param {?} id
     * @param {?} connection
     * @return {?}
     */
    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
        var /** @type {?} */ connections = _getJsonpConnections();
        connections[id] = connection;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    BrowserJsonp.prototype.removeConnection = function (id) {
        var /** @type {?} */ connections = _getJsonpConnections();
        connections[id] = null;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserJsonp.prototype.send = function (node) { document.body.appendChild(/** @type {?} */ ((node))); };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserJsonp.prototype.cleanup = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild(/** @type {?} */ ((node)));
        }
    };
    BrowserJsonp.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BrowserJsonp.ctorParameters = function () { return []; };
    return BrowserJsonp;
}());
function BrowserJsonp_tsickle_Closure_declarations() {
    /** @type {?} */
    BrowserJsonp.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    BrowserJsonp.ctorParameters;
}
//# sourceMappingURL=browser_jsonp.js.map

/***/ }),

/***/ "./node_modules/@angular/http/src/backends/browser_xhr.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserXhr; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * \@experimental
 */
var BrowserXhr = (function () {
    function BrowserXhr() {
    }
    /**
     * @return {?}
     */
    BrowserXhr.prototype.build = function () { return ((new XMLHttpRequest())); };
    BrowserXhr.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BrowserXhr.ctorParameters = function () { return []; };
    return BrowserXhr;
}());
function BrowserXhr_tsickle_Closure_declarations() {
    /** @type {?} */
    BrowserXhr.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    BrowserXhr.ctorParameters;
}
//# sourceMappingURL=browser_xhr.js.map

/***/ }),

/***/ "./node_modules/@angular/http/src/backends/jsonp_backend.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_response_options__ = __webpack_require__("./node_modules/@angular/http/src/base_response_options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums__ = __webpack_require__("./node_modules/@angular/http/src/enums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces__ = __webpack_require__("./node_modules/@angular/http/src/interfaces.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_response__ = __webpack_require__("./node_modules/@angular/http/src/static_response.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__browser_jsonp__ = __webpack_require__("./node_modules/@angular/http/src/backends/browser_jsonp.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return JSONPConnection; });
/* unused harmony export JSONPConnection_ */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return JSONPBackend_; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};







var /** @type {?} */ JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var /** @type {?} */ JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Abstract base class for an in-flight JSONP request.
 *
 * \@experimental
 * @abstract
 */
var JSONPConnection = (function () {
    function JSONPConnection() {
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     * @abstract
     * @param {?=} data
     * @return {?}
     */
    JSONPConnection.prototype.finished = function (data) { };
    return JSONPConnection;
}());
function JSONPConnection_tsickle_Closure_declarations() {
    /**
     * The {\@link ReadyState} of this request.
     * @type {?}
     */
    JSONPConnection.prototype.readyState;
    /**
     * The outgoing HTTP request.
     * @type {?}
     */
    JSONPConnection.prototype.request;
    /**
     * An observable that completes with the response, when the request is finished.
     * @type {?}
     */
    JSONPConnection.prototype.response;
}
var JSONPConnection_ = (function (_super) {
    __extends(JSONPConnection_, _super);
    /**
     * @param {?} req
     * @param {?} _dom
     * @param {?=} baseResponseOptions
     */
    function JSONPConnection_(req, _dom, baseResponseOptions) {
        var _this = this;
        _super.call(this);
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (responseObserver) {
            _this.readyState = __WEBPACK_IMPORTED_MODULE_3__enums__["a" /* ReadyState */].Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === __WEBPACK_IMPORTED_MODULE_3__enums__["a" /* ReadyState */].Cancelled)
                    return;
                _this.readyState = __WEBPACK_IMPORTED_MODULE_3__enums__["a" /* ReadyState */].Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new __WEBPACK_IMPORTED_MODULE_2__base_response_options__["b" /* ResponseOptions */]({ body: JSONP_ERR_NO_CALLBACK, type: __WEBPACK_IMPORTED_MODULE_3__enums__["d" /* ResponseType */].Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new __WEBPACK_IMPORTED_MODULE_5__static_response__["a" /* Response */](responseOptions_1));
                    return;
                }
                var responseOptions = new __WEBPACK_IMPORTED_MODULE_2__base_response_options__["b" /* ResponseOptions */]({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new __WEBPACK_IMPORTED_MODULE_5__static_response__["a" /* Response */](responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === __WEBPACK_IMPORTED_MODULE_3__enums__["a" /* ReadyState */].Cancelled)
                    return;
                _this.readyState = __WEBPACK_IMPORTED_MODULE_3__enums__["a" /* ReadyState */].Done;
                _dom.cleanup(script);
                var responseOptions = new __WEBPACK_IMPORTED_MODULE_2__base_response_options__["b" /* ResponseOptions */]({ body: error.message, type: __WEBPACK_IMPORTED_MODULE_3__enums__["d" /* ResponseType */].Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new __WEBPACK_IMPORTED_MODULE_5__static_response__["a" /* Response */](responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = __WEBPACK_IMPORTED_MODULE_3__enums__["a" /* ReadyState */].Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    JSONPConnection_.prototype.finished = function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === __WEBPACK_IMPORTED_MODULE_3__enums__["a" /* ReadyState */].Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection_;
}(JSONPConnection));
function JSONPConnection__tsickle_Closure_declarations() {
    /** @type {?} */
    JSONPConnection_.prototype._id;
    /** @type {?} */
    JSONPConnection_.prototype._script;
    /** @type {?} */
    JSONPConnection_.prototype._responseData;
    /** @type {?} */
    JSONPConnection_.prototype._finished;
    /** @type {?} */
    JSONPConnection_.prototype._dom;
    /** @type {?} */
    JSONPConnection_.prototype.baseResponseOptions;
}
/**
 * A {\@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * \@experimental
 * @abstract
 */
var JSONPBackend = (function (_super) {
    __extends(JSONPBackend, _super);
    function JSONPBackend() {
        _super.apply(this, arguments);
    }
    return JSONPBackend;
}(__WEBPACK_IMPORTED_MODULE_4__interfaces__["b" /* ConnectionBackend */]));
var JSONPBackend_ = (function (_super) {
    __extends(JSONPBackend_, _super);
    /**
     * @param {?} _browserJSONP
     * @param {?} _baseResponseOptions
     */
    function JSONPBackend_(_browserJSONP, _baseResponseOptions) {
        _super.call(this);
        this._browserJSONP = _browserJSONP;
        this._baseResponseOptions = _baseResponseOptions;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    JSONPBackend_.prototype.createConnection = function (request) {
        return new JSONPConnection_(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend_.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    JSONPBackend_.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_6__browser_jsonp__["a" /* BrowserJsonp */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__base_response_options__["b" /* ResponseOptions */], },
    ]; };
    return JSONPBackend_;
}(JSONPBackend));
function JSONPBackend__tsickle_Closure_declarations() {
    /** @type {?} */
    JSONPBackend_.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    JSONPBackend_.ctorParameters;
    /** @type {?} */
    JSONPBackend_.prototype._browserJSONP;
    /** @type {?} */
    JSONPBackend_.prototype._baseResponseOptions;
}
//# sourceMappingURL=jsonp_backend.js.map

/***/ }),

/***/ "./node_modules/@angular/http/src/backends/xhr_backend.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_response_options__ = __webpack_require__("./node_modules/@angular/http/src/base_response_options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enums__ = __webpack_require__("./node_modules/@angular/http/src/enums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__headers__ = __webpack_require__("./node_modules/@angular/http/src/headers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__http_utils__ = __webpack_require__("./node_modules/@angular/http/src/http_utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__interfaces__ = __webpack_require__("./node_modules/@angular/http/src/interfaces.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_response__ = __webpack_require__("./node_modules/@angular/http/src/static_response.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__browser_xhr__ = __webpack_require__("./node_modules/@angular/http/src/backends/browser_xhr.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return XHRConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return XHRBackend; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */










var /** @type {?} */ XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {\@link MockConnection} may be interacted with in tests.
 *
 * \@experimental
 */
var XHRConnection = (function () {
    /**
     * @param {?} req
     * @param {?} browserXHR
     * @param {?=} baseResponseOptions
     */
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (responseObserver) {
            var _xhr = browserXHR.build();
            _xhr.open(__WEBPACK_IMPORTED_MODULE_4__enums__["b" /* RequestMethod */][req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = _xhr.status === 1223 ? 204 : _xhr.status;
                var body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var headers = __WEBPACK_IMPORTED_MODULE_5__headers__["a" /* Headers */].fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var url = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__http_utils__["c" /* getResponseURL */])(_xhr) || req.url;
                var statusText = _xhr.statusText || 'OK';
                var responseOptions = new __WEBPACK_IMPORTED_MODULE_3__base_response_options__["b" /* ResponseOptions */]({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var response = new __WEBPACK_IMPORTED_MODULE_8__static_response__["a" /* Response */](responseOptions);
                response.ok = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__http_utils__["d" /* isSuccess */])(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var onError = function (err) {
                var responseOptions = new __WEBPACK_IMPORTED_MODULE_3__base_response_options__["b" /* ResponseOptions */]({
                    body: err,
                    type: __WEBPACK_IMPORTED_MODULE_4__enums__["d" /* ResponseType */].Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new __WEBPACK_IMPORTED_MODULE_8__static_response__["a" /* Response */](responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new __WEBPACK_IMPORTED_MODULE_5__headers__["a" /* Headers */]();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case __WEBPACK_IMPORTED_MODULE_4__enums__["c" /* ResponseContentType */].ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_4__enums__["c" /* ResponseContentType */].Json:
                        _xhr.responseType = 'json';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_4__enums__["c" /* ResponseContentType */].Text:
                        _xhr.responseType = 'text';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_4__enums__["c" /* ResponseContentType */].Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    /**
     * @param {?} req
     * @param {?} _xhr
     * @return {?}
     */
    XHRConnection.prototype.setDetectedContentType = function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case __WEBPACK_IMPORTED_MODULE_4__enums__["e" /* ContentType */].NONE:
                break;
            case __WEBPACK_IMPORTED_MODULE_4__enums__["e" /* ContentType */].JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case __WEBPACK_IMPORTED_MODULE_4__enums__["e" /* ContentType */].FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case __WEBPACK_IMPORTED_MODULE_4__enums__["e" /* ContentType */].TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case __WEBPACK_IMPORTED_MODULE_4__enums__["e" /* ContentType */].BLOB:
                var /** @type {?} */ blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
function XHRConnection_tsickle_Closure_declarations() {
    /** @type {?} */
    XHRConnection.prototype.request;
    /**
     * Response {\@link EventEmitter} which emits a single {\@link Response} value on load event of
     * `XMLHttpRequest`.
     * @type {?}
     */
    XHRConnection.prototype.response;
    /** @type {?} */
    XHRConnection.prototype.readyState;
}
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * \@experimental
 */
var CookieXSRFStrategy = (function () {
    /**
     * @param {?=} _cookieName
     * @param {?=} _headerName
     */
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    CookieXSRFStrategy.prototype.configureRequest = function (req) {
        var /** @type {?} */ xsrfToken = __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["__platform_browser_private__"].getDOM().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
function CookieXSRFStrategy_tsickle_Closure_declarations() {
    /** @type {?} */
    CookieXSRFStrategy.prototype._cookieName;
    /** @type {?} */
    CookieXSRFStrategy.prototype._headerName;
}
/**
 * Creates {\@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '\@angular/http';
 * \@Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * \@experimental
 */
var XHRBackend = (function () {
    /**
     * @param {?} _browserXHR
     * @param {?} _baseResponseOptions
     * @param {?} _xsrfStrategy
     */
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    XHRBackend.prototype.createConnection = function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    XHRBackend.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_9__browser_xhr__["a" /* BrowserXhr */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__base_response_options__["b" /* ResponseOptions */], },
        { type: __WEBPACK_IMPORTED_MODULE_7__interfaces__["c" /* XSRFStrategy */], },
    ]; };
    return XHRBackend;
}());
function XHRBackend_tsickle_Closure_declarations() {
    /** @type {?} */
    XHRBackend.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    XHRBackend.ctorParameters;
    /** @type {?} */
    XHRBackend.prototype._browserXHR;
    /** @type {?} */
    XHRBackend.prototype._baseResponseOptions;
    /** @type {?} */
    XHRBackend.prototype._xsrfStrategy;
}
//# sourceMappingURL=xhr_backend.js.map

/***/ }),

/***/ "./node_modules/@angular/http/src/base_request_options.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums__ = __webpack_require__("./node_modules/@angular/http/src/enums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__headers__ = __webpack_require__("./node_modules/@angular/http/src/headers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_utils__ = __webpack_require__("./node_modules/@angular/http/src/http_utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__url_search_params__ = __webpack_require__("./node_modules/@angular/http/src/url_search_params.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseRequestOptions; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





/**
 * Creates a request options object to be optionally provided when instantiating a
 * {\@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {\@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ### Example ([live demo](http://plnkr.co/edit/7Wvi3lfLq41aQPKlxB4O?p=preview))
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * var options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * var req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * \@experimental
 */
var RequestOptions = (function () {
    /**
     * @param {?=} __0
     */
    function RequestOptions(_a) {
        var _b = _a === void 0 ? {} : _a, method = _b.method, headers = _b.headers, body = _b.body, url = _b.url, search = _b.search, withCredentials = _b.withCredentials, responseType = _b.responseType;
        this.method = method != null ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__http_utils__["b" /* normalizeMethodName */])(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.search =
            search != null ? (typeof search === 'string' ? new __WEBPACK_IMPORTED_MODULE_4__url_search_params__["b" /* URLSearchParams */](search) : search) : null;
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ### Example ([live demo](http://plnkr.co/edit/6w8XA8YTkDRcPYpdB9dk?p=preview))
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
     *
     * var options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * var req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    RequestOptions.prototype.merge = function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new __WEBPACK_IMPORTED_MODULE_2__headers__["a" /* Headers */](this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            search: options && options.search != null ?
                (typeof options.search === 'string' ? new __WEBPACK_IMPORTED_MODULE_4__url_search_params__["b" /* URLSearchParams */](options.search) :
                    options.search.clone()) :
                this.search,
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    return RequestOptions;
}());
function RequestOptions_tsickle_Closure_declarations() {
    /**
     * Http method with which to execute a {\@link Request}.
     * Acceptable methods are defined in the {\@link RequestMethod} enum.
     * @type {?}
     */
    RequestOptions.prototype.method;
    /**
     * {\@link Headers} to be attached to a {\@link Request}.
     * @type {?}
     */
    RequestOptions.prototype.headers;
    /**
     * Body to be used when creating a {\@link Request}.
     * @type {?}
     */
    RequestOptions.prototype.body;
    /**
     * Url with which to perform a {\@link Request}.
     * @type {?}
     */
    RequestOptions.prototype.url;
    /**
     * Search parameters to be included in a {\@link Request}.
     * @type {?}
     */
    RequestOptions.prototype.search;
    /**
     * Enable use credentials for a {\@link Request}.
     * @type {?}
     */
    RequestOptions.prototype.withCredentials;
    /** @type {?} */
    RequestOptions.prototype.responseType;
}
/**
 * Subclass of {\@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {\@link RequestMethod RequestMethod.Get}
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link RequestOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create and send {\@link Request Requests}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/LEKVSx?p=preview))
 *
 * ```typescript
 * import {provide} from '\@angular/core';
 * import {bootstrap} from '\@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Http, BaseRequestOptions, RequestOptions} from '\@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: RequestOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {\@link Request}
 * object.
 *
 * ### Example ([live demo](http://plnkr.co/edit/oyBoEvNtDhOSfi9YxaVb?p=preview))
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * var options = new BaseRequestOptions();
 * var req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * \@experimental
 */
var BaseRequestOptions = (function (_super) {
    __extends(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        _super.call(this, { method: __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* RequestMethod */].Get, headers: new __WEBPACK_IMPORTED_MODULE_2__headers__["a" /* Headers */]() });
    }
    BaseRequestOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BaseRequestOptions.ctorParameters = function () { return []; };
    return BaseRequestOptions;
}(RequestOptions));
function BaseRequestOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    BaseRequestOptions.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    BaseRequestOptions.ctorParameters;
}
//# sourceMappingURL=base_request_options.js.map

/***/ }),

/***/ "./node_modules/@angular/http/src/base_response_options.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums__ = __webpack_require__("./node_modules/@angular/http/src/enums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__headers__ = __webpack_require__("./node_modules/@angular/http/src/headers.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseResponseOptions; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Creates a response options object to be optionally provided when instantiating a
 * {\@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {\@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {\@link Response Responses} for
 * mock responses (see {\@link MockBackend}).
 *
 * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
 *
 * ```typescript
 * import {ResponseOptions, Response} from '\@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * \@experimental
 */
var ResponseOptions = (function () {
    /**
     * @param {?=} __0
     */
    function ResponseOptions(_a) {
        var _b = _a === void 0 ? {} : _a, body = _b.body, status = _b.status, headers = _b.headers, statusText = _b.statusText, type = _b.type, url = _b.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '\@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    ResponseOptions.prototype.merge = function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
function ResponseOptions_tsickle_Closure_declarations() {
    /**
     * String, Object, ArrayBuffer or Blob representing the body of the {\@link Response}.
     * @type {?}
     */
    ResponseOptions.prototype.body;
    /**
     * Http {\@link http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html status code}
     * associated with the response.
     * @type {?}
     */
    ResponseOptions.prototype.status;
    /**
     * Response {\@link Headers headers}
     * @type {?}
     */
    ResponseOptions.prototype.headers;
    /**
     * \@internal
     * @type {?}
     */
    ResponseOptions.prototype.statusText;
    /**
     * \@internal
     * @type {?}
     */
    ResponseOptions.prototype.type;
    /** @type {?} */
    ResponseOptions.prototype.url;
}
/**
 * Subclass of {\@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link ResponseOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create {\@link Response Responses}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
 *
 * ```typescript
 * import {provide} from '\@angular/core';
 * import {bootstrap} from '\@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '\@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {\@link Response}
 * object.
 *
 * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
 *
 * ```
 * import {BaseResponseOptions, Response} from '\@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * \@experimental
 */
var BaseResponseOptions = (function (_super) {
    __extends(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        _super.call(this, { status: 200, statusText: 'Ok', type: __WEBPACK_IMPORTED_MODULE_1__enums__["d" /* ResponseType */].Default, headers: new __WEBPACK_IMPORTED_MODULE_2__headers__["a" /* Headers */]() });
    }
    BaseResponseOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BaseResponseOptions.ctorParameters = function () { return []; };
    return BaseResponseOptions;
}(ResponseOptions));
function BaseResponseOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    BaseResponseOptions.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    BaseResponseOptions.ctorParameters;
}
//# sourceMappingURL=base_response_options.js.map

/***/ }),

/***/ "./node_modules/@angular/http/src/body.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_utils__ = __webpack_require__("./node_modules/@angular/http/src/http_utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__url_search_params__ = __webpack_require__("./node_modules/@angular/http/src/url_search_params.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Body; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * HTTP request body used by both {\@link Request} and {\@link Response}
 * https://fetch.spec.whatwg.org/#body
 * @abstract
 */
var Body = (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     * @return {?}
     */
    Body.prototype.json = function () {
        if (typeof this._body === 'string') {
            return JSON.parse(/** @type {?} */ (this._body));
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     * @return {?}
     */
    Body.prototype.text = function () {
        if (this._body instanceof __WEBPACK_IMPORTED_MODULE_1__url_search_params__["b" /* URLSearchParams */]) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            return String.fromCharCode.apply(null, new Uint16Array(/** @type {?} */ (this._body)));
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     * @return {?}
     */
    Body.prototype.arrayBuffer = function () {
        if (this._body instanceof ArrayBuffer) {
            return (this._body);
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__http_utils__["a" /* stringToArrayBuffer */])(this.text());
    };
    /**
     * Returns the request's body as a Blob, assuming that body exists.
     * @return {?}
     */
    Body.prototype.blob = function () {
        if (this._body instanceof Blob) {
            return (this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());
function Body_tsickle_Closure_declarations() {
    /**
     * \@internal
     * @type {?}
     */
    Body.prototype._body;
}
//# sourceMappingURL=body.js.map

/***/ }),

/***/ "./node_modules/@angular/http/src/enums.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ResponseContentType; });
var RequestMethod = {};
RequestMethod.Get = 0;
RequestMethod.Post = 1;
RequestMethod.Put = 2;
RequestMethod.Delete = 3;
RequestMethod.Options = 4;
RequestMethod.Head = 5;
RequestMethod.Patch = 6;
RequestMethod[RequestMethod.Get] = "Get";
RequestMethod[RequestMethod.Post] = "Post";
RequestMethod[RequestMethod.Put] = "Put";
RequestMethod[RequestMethod.Delete] = "Delete";
RequestMethod[RequestMethod.Options] = "Options";
RequestMethod[RequestMethod.Head] = "Head";
RequestMethod[RequestMethod.Patch] = "Patch";
var ReadyState = {};
ReadyState.Unsent = 0;
ReadyState.Open = 1;
ReadyState.HeadersReceived = 2;
ReadyState.Loading = 3;
ReadyState.Done = 4;
ReadyState.Cancelled = 5;
ReadyState[ReadyState.Unsent] = "Unsent";
ReadyState[ReadyState.Open] = "Open";
ReadyState[ReadyState.HeadersReceived] = "HeadersReceived";
ReadyState[ReadyState.Loading] = "Loading";
ReadyState[ReadyState.Done] = "Done";
ReadyState[ReadyState.Cancelled] = "Cancelled";
var ResponseType = {};
ResponseType.Basic = 0;
ResponseType.Cors = 1;
ResponseType.Default = 2;
ResponseType.Error = 3;
ResponseType.Opaque = 4;
ResponseType[ResponseType.Basic] = "Basic";
ResponseType[ResponseType.Cors] = "Cors";
ResponseType[ResponseType.Default] = "Default";
ResponseType[ResponseType.Error] = "Error";
ResponseType[ResponseType.Opaque] = "Opaque";
var ContentType = {};
ContentType.NONE = 0;
ContentType.JSON = 1;
ContentType.FORM = 2;
ContentType.FORM_DATA = 3;
ContentType.TEXT = 4;
ContentType.BLOB = 5;
ContentType.ARRAY_BUFFER = 6;
ContentType[ContentType.NONE] = "NONE";
ContentType[ContentType.JSON] = "JSON";
ContentType[ContentType.FORM] = "FORM";
ContentType[ContentType.FORM_DATA] = "FORM_DATA";
ContentType[ContentType.TEXT] = "TEXT";
ContentType[ContentType.BLOB] = "BLOB";
ContentType[ContentType.ARRAY_BUFFER] = "ARRAY_BUFFER";
var ResponseContentType = {};
ResponseContentType.Text = 0;
ResponseContentType.Json = 1;
ResponseContentType.ArrayBuffer = 2;
ResponseContentType.Blob = 3;
ResponseContentType[ResponseContentType.Text] = "Text";
ResponseContentType[ResponseContentType.Json] = "Json";
ResponseContentType[ResponseContentType.ArrayBuffer] = "ArrayBuffer";
ResponseContentType[ResponseContentType.Blob] = "Blob";
//# sourceMappingURL=enums.js.map

/***/ }),

/***/ "./node_modules/@angular/http/src/headers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Headers; });
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * ### Example
 *
 * ```
 * import {Headers} from '\@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * \@experimental
 */
var Headers = (function () {
    /**
     * @param {?=} headers
     */
    function Headers(headers) {
        var _this = this;
        /** @internal header names are lower case */
        this._headers = new Map();
        /** @internal map lower case names to actual names */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     * @param {?} headersString
     * @return {?}
     */
    Headers.fromResponseHeaderString = function (headersString) {
        var /** @type {?} */ headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var /** @type {?} */ index = line.indexOf(':');
            if (index > 0) {
                var /** @type {?} */ name_1 = line.slice(0, index);
                var /** @type {?} */ value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Headers.prototype.append = function (name, value) {
        var /** @type {?} */ values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.delete = function (name) {
        var /** @type {?} */ lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    Headers.prototype.forEach = function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.get = function (name) {
        var /** @type {?} */ values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     * @return {?}
     */
    Headers.prototype.keys = function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Headers.prototype.set = function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     * @return {?}
     */
    Headers.prototype.values = function () { return Array.from(this._headers.values()); };
    /**
     * @return {?}
     */
    Headers.prototype.toJSON = function () {
        var _this = this;
        var /** @type {?} */ serialized = {};
        this._headers.forEach(function (values, name) {
            var /** @type {?} */ split = [];
            values.forEach(function (v) { return split.push.apply(split, v.split(',')); });
            serialized[_this._normalizedNames.get(name)] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.getAll = function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) : null;
    };
    /**
     * This method is not implemented.
     * @return {?}
     */
    Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
    /**
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.mayBeSetNormalizedName = function (name) {
        var /** @type {?} */ lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());
function Headers_tsickle_Closure_declarations() {
    /**
     * \@internal header names are lower case
     * @type {?}
     */
    Headers.prototype._headers;
    /**
     * \@internal map lower case names to actual names
     * @type {?}
     */
    Headers.prototype._normalizedNames;
}
//# sourceMappingURL=headers.js.map

/***/ }),

/***/ "./node_modules/@angular/http/src/http.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_request_options__ = __webpack_require__("./node_modules/@angular/http/src/base_request_options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums__ = __webpack_require__("./node_modules/@angular/http/src/enums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces__ = __webpack_require__("./node_modules/@angular/http/src/interfaces.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_request__ = __webpack_require__("./node_modules/@angular/http/src/static_request.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Jsonp; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





/**
 * @param {?} backend
 * @param {?} request
 * @return {?}
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
/**
 * @param {?} defaultOpts
 * @param {?} providedOpts
 * @param {?} method
 * @param {?} url
 * @return {?}
 */
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var /** @type {?} */ newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return newOptions.merge(new __WEBPACK_IMPORTED_MODULE_1__base_request_options__["b" /* RequestOptions */]({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        }));
    }
    return newOptions.merge(new __WEBPACK_IMPORTED_MODULE_1__base_request_options__["b" /* RequestOptions */]({ method: method, url: url }));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {\@link Response} when a
 * response is received.
 *
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '\@angular/http';
 * import 'rxjs/add/operator/map'
 * \@Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .map(res => res.json())
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {\@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {\@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '\@angular/http';
 * import {MockBackend} from '\@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * \@experimental
 */
var Http = (function () {
    /**
     * @param {?} _backend
     * @param {?} _defaultOptions
     */
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.request = function (url, options) {
        var /** @type {?} */ responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_2__enums__["b" /* RequestMethod */].Get, /** @type {?} */ (url))));
        }
        else if (url instanceof __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */]) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.get = function (url, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_2__enums__["b" /* RequestMethod */].Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.post = function (url, body, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */](mergeOptions(this._defaultOptions.merge(new __WEBPACK_IMPORTED_MODULE_1__base_request_options__["b" /* RequestOptions */]({ body: body })), options, __WEBPACK_IMPORTED_MODULE_2__enums__["b" /* RequestMethod */].Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.put = function (url, body, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */](mergeOptions(this._defaultOptions.merge(new __WEBPACK_IMPORTED_MODULE_1__base_request_options__["b" /* RequestOptions */]({ body: body })), options, __WEBPACK_IMPORTED_MODULE_2__enums__["b" /* RequestMethod */].Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.delete = function (url, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_2__enums__["b" /* RequestMethod */].Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.patch = function (url, body, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */](mergeOptions(this._defaultOptions.merge(new __WEBPACK_IMPORTED_MODULE_1__base_request_options__["b" /* RequestOptions */]({ body: body })), options, __WEBPACK_IMPORTED_MODULE_2__enums__["b" /* RequestMethod */].Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.head = function (url, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_2__enums__["b" /* RequestMethod */].Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.options = function (url, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_2__enums__["b" /* RequestMethod */].Options, url)));
    };
    Http.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Http.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__interfaces__["b" /* ConnectionBackend */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__base_request_options__["b" /* RequestOptions */], },
    ]; };
    return Http;
}());
function Http_tsickle_Closure_declarations() {
    /** @type {?} */
    Http.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    Http.ctorParameters;
    /** @type {?} */
    Http.prototype._backend;
    /** @type {?} */
    Http.prototype._defaultOptions;
}
/**
 * \@experimental
 */
var Jsonp = (function (_super) {
    __extends(Jsonp, _super);
    /**
     * @param {?} backend
     * @param {?} defaultOptions
     */
    function Jsonp(backend, defaultOptions) {
        _super.call(this, backend, defaultOptions);
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     *
     * \@security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Jsonp.prototype.request = function (url, options) {
        var /** @type {?} */ responseObservable;
        if (typeof url === 'string') {
            url =
                new __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_2__enums__["b" /* RequestMethod */].Get, /** @type {?} */ (url)));
        }
        if (url instanceof __WEBPACK_IMPORTED_MODULE_4__static_request__["a" /* Request */]) {
            if (url.method !== __WEBPACK_IMPORTED_MODULE_2__enums__["b" /* RequestMethod */].Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Jsonp.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__interfaces__["b" /* ConnectionBackend */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__base_request_options__["b" /* RequestOptions */], },
    ]; };
    return Jsonp;
}(Http));
function Jsonp_tsickle_Closure_declarations() {
    /** @type {?} */
    Jsonp.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    Jsonp.ctorParameters;
}
//# sourceMappingURL=http.js.map

/***/ }),

/***/ "./node_modules/@angular/http/src/http_module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backends_browser_jsonp__ = __webpack_require__("./node_modules/@angular/http/src/backends/browser_jsonp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backends_browser_xhr__ = __webpack_require__("./node_modules/@angular/http/src/backends/browser_xhr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backends_jsonp_backend__ = __webpack_require__("./node_modules/@angular/http/src/backends/jsonp_backend.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__backends_xhr_backend__ = __webpack_require__("./node_modules/@angular/http/src/backends/xhr_backend.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_request_options__ = __webpack_require__("./node_modules/@angular/http/src/base_request_options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_response_options__ = __webpack_require__("./node_modules/@angular/http/src/base_response_options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http__ = __webpack_require__("./node_modules/@angular/http/src/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interfaces__ = __webpack_require__("./node_modules/@angular/http/src/interfaces.js");
/* unused harmony export _createDefaultCookieXSRFStrategy */
/* unused harmony export httpFactory */
/* unused harmony export jsonpFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return JsonpModule; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @return {?}
 */
function _createDefaultCookieXSRFStrategy() {
    return new __WEBPACK_IMPORTED_MODULE_4__backends_xhr_backend__["a" /* CookieXSRFStrategy */]();
}
/**
 * @param {?} xhrBackend
 * @param {?} requestOptions
 * @return {?}
 */
function httpFactory(xhrBackend, requestOptions) {
    return new __WEBPACK_IMPORTED_MODULE_7__http__["a" /* Http */](xhrBackend, requestOptions);
}
/**
 * @param {?} jsonpBackend
 * @param {?} requestOptions
 * @return {?}
 */
function jsonpFactory(jsonpBackend, requestOptions) {
    return new __WEBPACK_IMPORTED_MODULE_7__http__["b" /* Jsonp */](jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * \@experimental
 */
var HttpModule = (function () {
    function HttpModule() {
    }
    HttpModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: __WEBPACK_IMPORTED_MODULE_7__http__["a" /* Http */], useFactory: httpFactory, deps: [__WEBPACK_IMPORTED_MODULE_4__backends_xhr_backend__["b" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_5__base_request_options__["b" /* RequestOptions */]] },
                        __WEBPACK_IMPORTED_MODULE_2__backends_browser_xhr__["a" /* BrowserXhr */],
                        { provide: __WEBPACK_IMPORTED_MODULE_5__base_request_options__["b" /* RequestOptions */], useClass: __WEBPACK_IMPORTED_MODULE_5__base_request_options__["a" /* BaseRequestOptions */] },
                        { provide: __WEBPACK_IMPORTED_MODULE_6__base_response_options__["b" /* ResponseOptions */], useClass: __WEBPACK_IMPORTED_MODULE_6__base_response_options__["a" /* BaseResponseOptions */] },
                        __WEBPACK_IMPORTED_MODULE_4__backends_xhr_backend__["b" /* XHRBackend */],
                        { provide: __WEBPACK_IMPORTED_MODULE_8__interfaces__["c" /* XSRFStrategy */], useFactory: _createDefaultCookieXSRFStrategy },
                    ],
                },] },
    ];
    /** @nocollapse */
    HttpModule.ctorParameters = function () { return []; };
    return HttpModule;
}());
function HttpModule_tsickle_Closure_declarations() {
    /** @type {?} */
    HttpModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    HttpModule.ctorParameters;
}
/**
 * The module that includes jsonp's providers
 *
 * \@experimental
 */
var JsonpModule = (function () {
    function JsonpModule() {
    }
    JsonpModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: __WEBPACK_IMPORTED_MODULE_7__http__["b" /* Jsonp */], useFactory: jsonpFactory, deps: [__WEBPACK_IMPORTED_MODULE_3__backends_jsonp_backend__["a" /* JSONPBackend */], __WEBPACK_IMPORTED_MODULE_5__base_request_options__["b" /* RequestOptions */]] },
                        __WEBPACK_IMPORTED_MODULE_1__backends_browser_jsonp__["a" /* BrowserJsonp */],
                        { provide: __WEBPACK_IMPORTED_MODULE_5__base_request_options__["b" /* RequestOptions */], useClass: __WEBPACK_IMPORTED_MODULE_5__base_request_options__["a" /* BaseRequestOptions */] },
                        { provide: __WEBPACK_IMPORTED_MODULE_6__base_response_options__["b" /* ResponseOptions */], useClass: __WEBPACK_IMPORTED_MODULE_6__base_response_options__["a" /* BaseResponseOptions */] },
                        { provide: __WEBPACK_IMPORTED_MODULE_3__backends_jsonp_backend__["a" /* JSONPBackend */], useClass: __WEBPACK_IMPORTED_MODULE_3__backends_jsonp_backend__["c" /* JSONPBackend_ */] },
                    ],
                },] },
    ];
    /** @nocollapse */
    JsonpModule.ctorParameters = function () { return []; };
    return JsonpModule;
}());
function JsonpModule_tsickle_Closure_declarations() {
    /** @type {?} */
    JsonpModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    JsonpModule.ctorParameters;
}
//# sourceMappingURL=http_module.js.map

/***/ }),

/***/ "./node_modules/@angular/http/src/http_utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums__ = __webpack_require__("./node_modules/@angular/http/src/enums.js");
/* harmony export (immutable) */ __webpack_exports__["b"] = normalizeMethodName;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isSuccess; });
/* harmony export (immutable) */ __webpack_exports__["c"] = getResponseURL;
/* harmony export (immutable) */ __webpack_exports__["a"] = stringToArrayBuffer;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @param {?} method
 * @return {?}
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["b" /* RequestMethod */].Get;
        case 'POST':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["b" /* RequestMethod */].Post;
        case 'PUT':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["b" /* RequestMethod */].Put;
        case 'DELETE':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["b" /* RequestMethod */].Delete;
        case 'OPTIONS':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["b" /* RequestMethod */].Options;
        case 'HEAD':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["b" /* RequestMethod */].Head;
        case 'PATCH':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["b" /* RequestMethod */].Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var /** @type {?} */ isSuccess = function (status) { return (status >= 200 && status < 300); };
/**
 * @param {?} xhr
 * @return {?}
 */
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return;
}
/**
 * @param {?} input
 * @return {?}
 */
function stringToArrayBuffer(input) {
    var /** @type {?} */ view = new Uint16Array(input.length);
    for (var /** @type {?} */ i = 0, /** @type {?} */ strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}
//# sourceMappingURL=http_utils.js.map

/***/ }),

/***/ "./node_modules/@angular/http/src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__backends_browser_xhr__ = __webpack_require__("./node_modules/@angular/http/src/backends/browser_xhr.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__backends_browser_xhr__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backends_jsonp_backend__ = __webpack_require__("./node_modules/@angular/http/src/backends/jsonp_backend.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__backends_jsonp_backend__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__backends_jsonp_backend__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backends_xhr_backend__ = __webpack_require__("./node_modules/@angular/http/src/backends/xhr_backend.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__backends_xhr_backend__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__backends_xhr_backend__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__backends_xhr_backend__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_request_options__ = __webpack_require__("./node_modules/@angular/http/src/base_request_options.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__base_request_options__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__base_request_options__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_response_options__ = __webpack_require__("./node_modules/@angular/http/src/base_response_options.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__base_response_options__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_4__base_response_options__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums__ = __webpack_require__("./node_modules/@angular/http/src/enums.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_5__enums__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__enums__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__enums__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_5__enums__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__headers__ = __webpack_require__("./node_modules/@angular/http/src/headers.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_6__headers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http__ = __webpack_require__("./node_modules/@angular/http/src/http.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_7__http__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_7__http__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__http_module__ = __webpack_require__("./node_modules/@angular/http/src/http_module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_8__http_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_8__http_module__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__interfaces__ = __webpack_require__("./node_modules/@angular/http/src/interfaces.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_9__interfaces__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_9__interfaces__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_9__interfaces__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__static_request__ = __webpack_require__("./node_modules/@angular/http/src/static_request.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_10__static_request__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__static_response__ = __webpack_require__("./node_modules/@angular/http/src/static_response.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_11__static_response__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__url_search_params__ = __webpack_require__("./node_modules/@angular/http/src/url_search_params.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_12__url_search_params__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_12__url_search_params__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__version__ = __webpack_require__("./node_modules/@angular/http/src/version.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_13__version__["a"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */














//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular/http/src/interfaces.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ConnectionBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return XSRFStrategy; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {\@link Request}.
 *
 * \@experimental
 * @abstract
 */
var ConnectionBackend = (function () {
    function ConnectionBackend() {
    }
    /**
     * @abstract
     * @param {?} request
     * @return {?}
     */
    ConnectionBackend.prototype.createConnection = function (request) { };
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * \@experimental
 * @abstract
 */
var Connection = (function () {
    function Connection() {
    }
    return Connection;
}());
function Connection_tsickle_Closure_declarations() {
    /** @type {?} */
    Connection.prototype.readyState;
    /** @type {?} */
    Connection.prototype.request;
    /** @type {?} */
    Connection.prototype.response;
}
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * \@experimental
 * @abstract
 */
var XSRFStrategy = (function () {
    function XSRFStrategy() {
    }
    /**
     * @abstract
     * @param {?} req
     * @return {?}
     */
    XSRFStrategy.prototype.configureRequest = function (req) { };
    return XSRFStrategy;
}());
//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ "./node_modules/@angular/http/src/static_request.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__body__ = __webpack_require__("./node_modules/@angular/http/src/body.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums__ = __webpack_require__("./node_modules/@angular/http/src/enums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__headers__ = __webpack_require__("./node_modules/@angular/http/src/headers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_utils__ = __webpack_require__("./node_modules/@angular/http/src/http_utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__url_search_params__ = __webpack_require__("./node_modules/@angular/http/src/url_search_params.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Request; });
/* unused harmony export ArrayBuffer */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {\@link Http} and
 * {\@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {\@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '\@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '\@angular/http';
 *
 * \@Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * \@experimental
 */
var Request = (function (_super) {
    __extends(Request, _super);
    /**
     * @param {?} requestOptions
     */
    function Request(requestOptions) {
        _super.call(this);
        // TODO: assert that url is present
        var url = requestOptions.url;
        this.url = requestOptions.url;
        if (requestOptions.search) {
            var search = requestOptions.search.toString();
            if (search.length > 0) {
                var prefix = '?';
                if (this.url.indexOf('?') != -1) {
                    prefix = (this.url[this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                this.url = url + prefix + search;
            }
        }
        this._body = requestOptions.body;
        this.method = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__http_utils__["b" /* normalizeMethodName */])(requestOptions.method);
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__headers__["a" /* Headers */](requestOptions.headers);
        this.contentType = this.detectContentType();
        this.withCredentials = requestOptions.withCredentials;
        this.responseType = requestOptions.responseType;
    }
    /**
     * Returns the content type enum based on header options.
     * @return {?}
     */
    Request.prototype.detectContentType = function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return __WEBPACK_IMPORTED_MODULE_1__enums__["e" /* ContentType */].JSON;
            case 'application/x-www-form-urlencoded':
                return __WEBPACK_IMPORTED_MODULE_1__enums__["e" /* ContentType */].FORM;
            case 'multipart/form-data':
                return __WEBPACK_IMPORTED_MODULE_1__enums__["e" /* ContentType */].FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return __WEBPACK_IMPORTED_MODULE_1__enums__["e" /* ContentType */].TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer ? __WEBPACK_IMPORTED_MODULE_1__enums__["e" /* ContentType */].ARRAY_BUFFER : __WEBPACK_IMPORTED_MODULE_1__enums__["e" /* ContentType */].BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     * @return {?}
     */
    Request.prototype.detectContentTypeFromBody = function () {
        if (this._body == null) {
            return __WEBPACK_IMPORTED_MODULE_1__enums__["e" /* ContentType */].NONE;
        }
        else if (this._body instanceof __WEBPACK_IMPORTED_MODULE_4__url_search_params__["b" /* URLSearchParams */]) {
            return __WEBPACK_IMPORTED_MODULE_1__enums__["e" /* ContentType */].FORM;
        }
        else if (this._body instanceof FormData) {
            return __WEBPACK_IMPORTED_MODULE_1__enums__["e" /* ContentType */].FORM_DATA;
        }
        else if (this._body instanceof Blob) {
            return __WEBPACK_IMPORTED_MODULE_1__enums__["e" /* ContentType */].BLOB;
        }
        else if (this._body instanceof ArrayBuffer) {
            return __WEBPACK_IMPORTED_MODULE_1__enums__["e" /* ContentType */].ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return __WEBPACK_IMPORTED_MODULE_1__enums__["e" /* ContentType */].JSON;
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1__enums__["e" /* ContentType */].TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     * @return {?}
     */
    Request.prototype.getBody = function () {
        switch (this.contentType) {
            case __WEBPACK_IMPORTED_MODULE_1__enums__["e" /* ContentType */].JSON:
                return this.text();
            case __WEBPACK_IMPORTED_MODULE_1__enums__["e" /* ContentType */].FORM:
                return this.text();
            case __WEBPACK_IMPORTED_MODULE_1__enums__["e" /* ContentType */].FORM_DATA:
                return this._body;
            case __WEBPACK_IMPORTED_MODULE_1__enums__["e" /* ContentType */].TEXT:
                return this.text();
            case __WEBPACK_IMPORTED_MODULE_1__enums__["e" /* ContentType */].BLOB:
                return this.blob();
            case __WEBPACK_IMPORTED_MODULE_1__enums__["e" /* ContentType */].ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(__WEBPACK_IMPORTED_MODULE_0__body__["a" /* Body */]));
function Request_tsickle_Closure_declarations() {
    /**
     * Http method with which to perform the request.
     * @type {?}
     */
    Request.prototype.method;
    /**
     * {\@link Headers} instance
     * @type {?}
     */
    Request.prototype.headers;
    /**
     * Url of the remote resource
     * @type {?}
     */
    Request.prototype.url;
    /**
     * Type of the request body *
     * @type {?}
     */
    Request.prototype.contentType;
    /**
     * Enable use credentials
     * @type {?}
     */
    Request.prototype.withCredentials;
    /**
     * Buffer to store the response
     * @type {?}
     */
    Request.prototype.responseType;
}
var /** @type {?} */ noop = function () { };
var /** @type {?} */ w = typeof window == 'object' ? window : noop;
var /** @type {?} */ FormData = ((w) /** TODO #9100 */)['FormData'] || noop;
var /** @type {?} */ Blob = ((w) /** TODO #9100 */)['Blob'] || noop;
var /** @type {?} */ ArrayBuffer = ((w) /** TODO #9100 */)['ArrayBuffer'] || noop;
//# sourceMappingURL=static_request.js.map

/***/ }),

/***/ "./node_modules/@angular/http/src/static_response.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__body__ = __webpack_require__("./node_modules/@angular/http/src/body.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Response; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * \@experimental
 */
var Response = (function (_super) {
    __extends(Response, _super);
    /**
     * @param {?} responseOptions
     */
    function Response(responseOptions) {
        _super.call(this);
        this._body = responseOptions.body;
        this.status = responseOptions.status;
        this.ok = (this.status >= 200 && this.status <= 299);
        this.statusText = responseOptions.statusText;
        this.headers = responseOptions.headers;
        this.type = responseOptions.type;
        this.url = responseOptions.url;
    }
    /**
     * @return {?}
     */
    Response.prototype.toString = function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(__WEBPACK_IMPORTED_MODULE_0__body__["a" /* Body */]));
function Response_tsickle_Closure_declarations() {
    /**
     * One of "basic", "cors", "default", "error", or "opaque".
     *
     * Defaults to "default".
     * @type {?}
     */
    Response.prototype.type;
    /**
     * True if the response's status is within 200-299
     * @type {?}
     */
    Response.prototype.ok;
    /**
     * URL of response.
     *
     * Defaults to empty string.
     * @type {?}
     */
    Response.prototype.url;
    /**
     * Status code returned by server.
     *
     * Defaults to 200.
     * @type {?}
     */
    Response.prototype.status;
    /**
     * Text representing the corresponding reason phrase to the `status`, as defined in [ietf rfc 2616
     * section 6.1.1](https://tools.ietf.org/html/rfc2616#section-6.1.1)
     *
     * Defaults to "OK"
     * @type {?}
     */
    Response.prototype.statusText;
    /**
     * Non-standard property
     *
     * Denotes how many of the response body's bytes have been loaded, for example if the response is
     * the result of a progress event.
     * @type {?}
     */
    Response.prototype.bytesLoaded;
    /**
     * Non-standard property
     *
     * Denotes how many bytes are expected in the final response body.
     * @type {?}
     */
    Response.prototype.totalBytes;
    /**
     * Headers object based on the `Headers` class in the [Fetch
     * Spec](https://fetch.spec.whatwg.org/#headers-class).
     * @type {?}
     */
    Response.prototype.headers;
}
//# sourceMappingURL=static_response.js.map

/***/ }),

/***/ "./node_modules/@angular/http/src/url_search_params.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return URLSearchParams; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @param {?=} rawParams
 * @return {?}
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var /** @type {?} */ map = new Map();
    if (rawParams.length > 0) {
        var /** @type {?} */ params = rawParams.split('&');
        params.forEach(function (param) {
            var /** @type {?} */ eqIdx = param.indexOf('=');
            var _a = eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], key = _a[0], val = _a[1];
            var /** @type {?} */ list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * \@experimental
 *
 */
var QueryEncoder = (function () {
    function QueryEncoder() {
    }
    /**
     * @param {?} k
     * @return {?}
     */
    QueryEncoder.prototype.encodeKey = function (k) { return standardEncoding(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    QueryEncoder.prototype.encodeValue = function (v) { return standardEncoding(v); };
    return QueryEncoder;
}());
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${\@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '\@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * \@experimental
 */
var URLSearchParams = (function () {
    /**
     * @param {?=} rawParams
     * @param {?=} queryEncoder
     */
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    /**
     * @return {?}
     */
    URLSearchParams.prototype.clone = function () {
        var /** @type {?} */ clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.get = function (param) {
        var /** @type {?} */ storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    URLSearchParams.prototype.set = function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var /** @type {?} */ list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.setAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    URLSearchParams.prototype.append = function (param, val) {
        if (val === void 0 || val === null)
            return;
        var /** @type {?} */ list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.appendAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.replaceAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @return {?}
     */
    URLSearchParams.prototype.toString = function () {
        var _this = this;
        var /** @type {?} */ paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
        });
        return paramsList.join('&');
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());
function URLSearchParams_tsickle_Closure_declarations() {
    /** @type {?} */
    URLSearchParams.prototype.paramsMap;
    /** @type {?} */
    URLSearchParams.prototype.rawParams;
    /** @type {?} */
    URLSearchParams.prototype.queryEncoder;
}
//# sourceMappingURL=url_search_params.js.map

/***/ }),

/***/ "./node_modules/@angular/http/src/version.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VERSION; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @stable
 */
var /** @type {?} */ VERSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Version"]('2.4.8');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/@angular/router/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__("./node_modules/@angular/router/src/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouterLink", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouterLinkWithHref", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouterLinkActive", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouterOutlet", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouteReuseStrategy", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationCancel", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationEnd", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationError", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationStart", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesRecognized", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_CONFIGURATION", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_INITIALIZER", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouterModule", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["n"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "provideRoutes", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["o"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouterOutletMap", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["p"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NoPreloading", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["q"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PreloadAllModules", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["r"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PreloadingStrategy", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["s"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouterPreloader", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["t"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ActivatedRoute", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["u"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ActivatedRouteSnapshot", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["v"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouterState", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["w"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouterStateSnapshot", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["x"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_OUTLET", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["y"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UrlHandlingStrategy", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["z"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultUrlSerializer", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["A"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UrlSegment", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["B"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UrlSegmentGroup", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["C"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UrlSerializer", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["D"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UrlTree", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["E"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["F"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "__router_private__", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["G"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the router package.
 */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/apply_redirects.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_from__ = __webpack_require__("./node_modules/rxjs/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch__ = __webpack_require__("./node_modules/rxjs/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_concatAll__ = __webpack_require__("./node_modules/rxjs/operator/concatAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_concatAll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_concatAll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_first__ = __webpack_require__("./node_modules/rxjs/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__ = __webpack_require__("./node_modules/rxjs/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_util_EmptyError__ = __webpack_require__("./node_modules/rxjs/util/EmptyError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_util_EmptyError___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_util_EmptyError__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router_config_loader__ = __webpack_require__("./node_modules/@angular/router/src/router_config_loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared__ = __webpack_require__("./node_modules/@angular/router/src/shared.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__url_tree__ = __webpack_require__("./node_modules/@angular/router/src/url_tree.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_collection__ = __webpack_require__("./node_modules/@angular/router/src/utils/collection.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = applyRedirects;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













var NoMatch = (function () {
    /**
     * @param {?=} segmentGroup
     */
    function NoMatch(segmentGroup) {
        if (segmentGroup === void 0) { segmentGroup = null; }
        this.segmentGroup = segmentGroup;
    }
    return NoMatch;
}());
function NoMatch_tsickle_Closure_declarations() {
    /** @type {?} */
    NoMatch.prototype.segmentGroup;
}
var AbsoluteRedirect = (function () {
    /**
     * @param {?} urlTree
     */
    function AbsoluteRedirect(urlTree) {
        this.urlTree = urlTree;
    }
    return AbsoluteRedirect;
}());
function AbsoluteRedirect_tsickle_Closure_declarations() {
    /** @type {?} */
    AbsoluteRedirect.prototype.urlTree;
}
/**
 * @param {?} segmentGroup
 * @return {?}
 */
function noMatch(segmentGroup) {
    return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (obs) { return obs.error(new NoMatch(segmentGroup)); });
}
/**
 * @param {?} newTree
 * @return {?}
 */
function absoluteRedirect(newTree) {
    return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (obs) { return obs.error(new AbsoluteRedirect(newTree)); });
}
/**
 * @param {?} redirectTo
 * @return {?}
 */
function namedOutletsRedirect(redirectTo) {
    return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (obs) { return obs.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + redirectTo + "'")); });
}
/**
 * @param {?} route
 * @return {?}
 */
function canLoadFails(route) {
    return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (obs) { return obs.error(new __WEBPACK_IMPORTED_MODULE_10__shared__["b" /* NavigationCancelingError */]("Cannot load children because the guard of the route \"path: '" + route.path + "'\" returned false")); });
}
/**
 * @param {?} injector
 * @param {?} configLoader
 * @param {?} urlSerializer
 * @param {?} urlTree
 * @param {?} config
 * @return {?}
 */
function applyRedirects(injector, configLoader, urlSerializer, urlTree, config) {
    return new ApplyRedirects(injector, configLoader, urlSerializer, urlTree, config).apply();
}
var ApplyRedirects = (function () {
    /**
     * @param {?} injector
     * @param {?} configLoader
     * @param {?} urlSerializer
     * @param {?} urlTree
     * @param {?} config
     */
    function ApplyRedirects(injector, configLoader, urlSerializer, urlTree, config) {
        this.injector = injector;
        this.configLoader = configLoader;
        this.urlSerializer = urlSerializer;
        this.urlTree = urlTree;
        this.config = config;
        this.allowRedirects = true;
    }
    /**
     * @return {?}
     */
    ApplyRedirects.prototype.apply = function () {
        var _this = this;
        var /** @type {?} */ expanded$ = this.expandSegmentGroup(this.injector, this.config, this.urlTree.root, __WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]);
        var /** @type {?} */ urlTrees$ = __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(expanded$, function (rootSegmentGroup) { return _this.createUrlTree(rootSegmentGroup, _this.urlTree.queryParams, _this.urlTree.fragment); });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch__["_catch"].call(urlTrees$, function (e) {
            if (e instanceof AbsoluteRedirect) {
                // after an absolute redirect we do not apply any more redirects!
                _this.allowRedirects = false;
                // we need to run matching, so we can fetch all lazy-loaded modules
                return _this.match(e.urlTree);
            }
            else if (e instanceof NoMatch) {
                throw _this.noMatchError(e);
            }
            else {
                throw e;
            }
        });
    };
    /**
     * @param {?} tree
     * @return {?}
     */
    ApplyRedirects.prototype.match = function (tree) {
        var _this = this;
        var /** @type {?} */ expanded$ = this.expandSegmentGroup(this.injector, this.config, tree.root, __WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]);
        var /** @type {?} */ mapped$ = __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(expanded$, function (rootSegmentGroup) {
            return _this.createUrlTree(rootSegmentGroup, tree.queryParams, tree.fragment);
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch__["_catch"].call(mapped$, function (e) {
            if (e instanceof NoMatch) {
                throw _this.noMatchError(e);
            }
            else {
                throw e;
            }
        });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    ApplyRedirects.prototype.noMatchError = function (e) {
        return new Error("Cannot match any routes. URL Segment: '" + e.segmentGroup + "'");
    };
    /**
     * @param {?} rootCandidate
     * @param {?} queryParams
     * @param {?} fragment
     * @return {?}
     */
    ApplyRedirects.prototype.createUrlTree = function (rootCandidate, queryParams, fragment) {
        var /** @type {?} */ root = rootCandidate.segments.length > 0 ?
            new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */]([], (_a = {}, _a[__WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]] = rootCandidate, _a)) :
            rootCandidate;
        return new __WEBPACK_IMPORTED_MODULE_11__url_tree__["e" /* UrlTree */](root, queryParams, fragment);
        var _a;
    };
    /**
     * @param {?} injector
     * @param {?} routes
     * @param {?} segmentGroup
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.expandSegmentGroup = function (injector, routes, segmentGroup, outlet) {
        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(this.expandChildren(injector, routes, segmentGroup), function (children) { return new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */]([], children); });
        }
        else {
            return this.expandSegment(injector, segmentGroup, routes, segmentGroup.segments, outlet, true);
        }
    };
    /**
     * @param {?} injector
     * @param {?} routes
     * @param {?} segmentGroup
     * @return {?}
     */
    ApplyRedirects.prototype.expandChildren = function (injector, routes, segmentGroup) {
        var _this = this;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_collection__["h" /* waitForMap */])(segmentGroup.children, function (childOutlet, child) { return _this.expandSegmentGroup(injector, routes, child, childOutlet); });
    };
    /**
     * @param {?} injector
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} segments
     * @param {?} outlet
     * @param {?} allowRedirects
     * @return {?}
     */
    ApplyRedirects.prototype.expandSegment = function (injector, segmentGroup, routes, segments, outlet, allowRedirects) {
        var _this = this;
        var /** @type {?} */ routes$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"].apply(void 0, routes);
        var /** @type {?} */ processedRoutes$ = __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(routes$, function (r) {
            var /** @type {?} */ expanded$ = _this.expandSegmentAgainstRoute(injector, segmentGroup, routes, r, segments, outlet, allowRedirects);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch__["_catch"].call(expanded$, function (e) {
                if (e instanceof NoMatch)
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(null);
                else
                    throw e;
            });
        });
        var /** @type {?} */ concattedProcessedRoutes$ = __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_concatAll__["concatAll"].call(processedRoutes$);
        var /** @type {?} */ first$ = __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_first__["first"].call(concattedProcessedRoutes$, function (s) { return !!s; });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch__["_catch"].call(first$, function (e, _) {
            if (e instanceof __WEBPACK_IMPORTED_MODULE_8_rxjs_util_EmptyError__["EmptyError"]) {
                if (_this.noLeftoversInUrl(segmentGroup, segments, outlet)) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */]([], {}));
                }
                else {
                    throw new NoMatch(segmentGroup);
                }
            }
            else {
                throw e;
            }
        });
    };
    /**
     * @param {?} segmentGroup
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.noLeftoversInUrl = function (segmentGroup, segments, outlet) {
        return segments.length === 0 && !segmentGroup.children[outlet];
    };
    /**
     * @param {?} injector
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} route
     * @param {?} paths
     * @param {?} outlet
     * @param {?} allowRedirects
     * @return {?}
     */
    ApplyRedirects.prototype.expandSegmentAgainstRoute = function (injector, segmentGroup, routes, route, paths, outlet, allowRedirects) {
        if (getOutlet(route) !== outlet)
            return noMatch(segmentGroup);
        if (route.redirectTo !== undefined && !(allowRedirects && this.allowRedirects))
            return noMatch(segmentGroup);
        if (route.redirectTo === undefined) {
            return this.matchSegmentAgainstRoute(injector, segmentGroup, route, paths);
        }
        else {
            return this.expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, paths, outlet);
        }
    };
    /**
     * @param {?} injector
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} route
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.expandSegmentAgainstRouteUsingRedirect = function (injector, segmentGroup, routes, route, segments, outlet) {
        if (route.path === '**') {
            return this.expandWildCardWithParamsAgainstRouteUsingRedirect(injector, routes, route, outlet);
        }
        else {
            return this.expandRegularSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, segments, outlet);
        }
    };
    /**
     * @param {?} injector
     * @param {?} routes
     * @param {?} route
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function (injector, routes, route, outlet) {
        var _this = this;
        var /** @type {?} */ newTree = this.applyRedirectCommands([], route.redirectTo, {});
        if (route.redirectTo.startsWith('/')) {
            return absoluteRedirect(newTree);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap__["mergeMap"].call(this.lineralizeSegments(route, newTree), function (newSegments) {
                var /** @type {?} */ group = new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](newSegments, {});
                return _this.expandSegment(injector, group, routes, newSegments, outlet, false);
            });
        }
    };
    /**
     * @param {?} injector
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} route
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function (injector, segmentGroup, routes, route, segments, outlet) {
        var _this = this;
        var _a = match(segmentGroup, route, segments), matched = _a.matched, consumedSegments = _a.consumedSegments, lastChild = _a.lastChild, positionalParamSegments = _a.positionalParamSegments;
        if (!matched)
            return noMatch(segmentGroup);
        var /** @type {?} */ newTree = this.applyRedirectCommands(consumedSegments, route.redirectTo, /** @type {?} */ (positionalParamSegments));
        if (route.redirectTo.startsWith('/')) {
            return absoluteRedirect(newTree);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap__["mergeMap"].call(this.lineralizeSegments(route, newTree), function (newSegments) {
                return _this.expandSegment(injector, segmentGroup, routes, newSegments.concat(segments.slice(lastChild)), outlet, false);
            });
        }
    };
    /**
     * @param {?} injector
     * @param {?} rawSegmentGroup
     * @param {?} route
     * @param {?} segments
     * @return {?}
     */
    ApplyRedirects.prototype.matchSegmentAgainstRoute = function (injector, rawSegmentGroup, route, segments) {
        var _this = this;
        if (route.path === '**') {
            if (route.loadChildren) {
                return __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(this.configLoader.load(injector, route.loadChildren), function (r) {
                    ((route))._loadedConfig = r;
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](segments, {}));
                });
            }
            else {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](segments, {}));
            }
        }
        else {
            var _a = match(rawSegmentGroup, route, segments), matched = _a.matched, consumedSegments_1 = _a.consumedSegments, lastChild = _a.lastChild;
            if (!matched)
                return noMatch(rawSegmentGroup);
            var /** @type {?} */ rawSlicedSegments_1 = segments.slice(lastChild);
            var /** @type {?} */ childConfig$ = this.getChildConfig(injector, route);
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap__["mergeMap"].call(childConfig$, function (routerConfig) {
                var /** @type {?} */ childInjector = routerConfig.injector;
                var /** @type {?} */ childConfig = routerConfig.routes;
                var _a = split(rawSegmentGroup, consumedSegments_1, rawSlicedSegments_1, childConfig), segmentGroup = _a.segmentGroup, slicedSegments = _a.slicedSegments;
                if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
                    var /** @type {?} */ expanded$ = _this.expandChildren(childInjector, childConfig, segmentGroup);
                    return __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(expanded$, function (children) { return new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](consumedSegments_1, children); });
                }
                else if (childConfig.length === 0 && slicedSegments.length === 0) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](consumedSegments_1, {}));
                }
                else {
                    var /** @type {?} */ expanded$ = _this.expandSegment(childInjector, segmentGroup, childConfig, slicedSegments, __WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */], true);
                    return __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(expanded$, function (cs) { return new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](consumedSegments_1.concat(cs.segments), cs.children); });
                }
            });
        }
    };
    /**
     * @param {?} injector
     * @param {?} route
     * @return {?}
     */
    ApplyRedirects.prototype.getChildConfig = function (injector, route) {
        var _this = this;
        if (route.children) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_9__router_config_loader__["c" /* LoadedRouterConfig */](route.children, injector, null, null));
        }
        else if (route.loadChildren) {
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap__["mergeMap"].call(runGuards(injector, route), function (shouldLoad) {
                if (shouldLoad) {
                    if (((route))._loadedConfig) {
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(((route))._loadedConfig);
                    }
                    else {
                        return __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(_this.configLoader.load(injector, route.loadChildren), function (r) {
                            ((route))._loadedConfig = r;
                            return r;
                        });
                    }
                }
                else {
                    return canLoadFails(route);
                }
            });
        }
        else {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_9__router_config_loader__["c" /* LoadedRouterConfig */]([], injector, null, null));
        }
    };
    /**
     * @param {?} route
     * @param {?} urlTree
     * @return {?}
     */
    ApplyRedirects.prototype.lineralizeSegments = function (route, urlTree) {
        var /** @type {?} */ res = [];
        var /** @type {?} */ c = urlTree.root;
        while (true) {
            res = res.concat(c.segments);
            if (c.numberOfChildren === 0) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(res);
            }
            else if (c.numberOfChildren > 1 || !c.children[__WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]]) {
                return namedOutletsRedirect(route.redirectTo);
            }
            else {
                c = c.children[__WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]];
            }
        }
    };
    /**
     * @param {?} segments
     * @param {?} redirectTo
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.applyRedirectCommands = function (segments, redirectTo, posParams) {
        var /** @type {?} */ t = this.urlSerializer.parse(redirectTo);
        return this.applyRedirectCreatreUrlTree(redirectTo, this.urlSerializer.parse(redirectTo), segments, posParams);
    };
    /**
     * @param {?} redirectTo
     * @param {?} urlTree
     * @param {?} segments
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.applyRedirectCreatreUrlTree = function (redirectTo, urlTree, segments, posParams) {
        var /** @type {?} */ newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
        return new __WEBPACK_IMPORTED_MODULE_11__url_tree__["e" /* UrlTree */](newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
    };
    /**
     * @param {?} redirectToParams
     * @param {?} actualParams
     * @return {?}
     */
    ApplyRedirects.prototype.createQueryParams = function (redirectToParams, actualParams) {
        var /** @type {?} */ res = {};
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_collection__["d" /* forEach */])(redirectToParams, function (v, k) {
            if (v.startsWith(':')) {
                res[k] = actualParams[v.substring(1)];
            }
            else {
                res[k] = v;
            }
        });
        return res;
    };
    /**
     * @param {?} redirectTo
     * @param {?} group
     * @param {?} segments
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.createSegmentGroup = function (redirectTo, group, segments, posParams) {
        var _this = this;
        var /** @type {?} */ updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
        var /** @type {?} */ children = {};
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_collection__["d" /* forEach */])(group.children, function (child, name) {
            children[name] = _this.createSegmentGroup(redirectTo, child, segments, posParams);
        });
        return new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](updatedSegments, children);
    };
    /**
     * @param {?} redirectTo
     * @param {?} redirectToSegments
     * @param {?} actualSegments
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.createSegments = function (redirectTo, redirectToSegments, actualSegments, posParams) {
        var _this = this;
        return redirectToSegments.map(function (s) { return s.path.startsWith(':') ? _this.findPosParam(redirectTo, s, posParams) :
            _this.findOrReturn(s, actualSegments); });
    };
    /**
     * @param {?} redirectTo
     * @param {?} redirectToUrlSegment
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.findPosParam = function (redirectTo, redirectToUrlSegment, posParams) {
        var /** @type {?} */ pos = posParams[redirectToUrlSegment.path.substring(1)];
        if (!pos)
            throw new Error("Cannot redirect to '" + redirectTo + "'. Cannot find '" + redirectToUrlSegment.path + "'.");
        return pos;
    };
    /**
     * @param {?} redirectToUrlSegment
     * @param {?} actualSegments
     * @return {?}
     */
    ApplyRedirects.prototype.findOrReturn = function (redirectToUrlSegment, actualSegments) {
        var /** @type {?} */ idx = 0;
        for (var _i = 0, actualSegments_1 = actualSegments; _i < actualSegments_1.length; _i++) {
            var s = actualSegments_1[_i];
            if (s.path === redirectToUrlSegment.path) {
                actualSegments.splice(idx);
                return s;
            }
            idx++;
        }
        return redirectToUrlSegment;
    };
    return ApplyRedirects;
}());
function ApplyRedirects_tsickle_Closure_declarations() {
    /** @type {?} */
    ApplyRedirects.prototype.allowRedirects;
    /** @type {?} */
    ApplyRedirects.prototype.injector;
    /** @type {?} */
    ApplyRedirects.prototype.configLoader;
    /** @type {?} */
    ApplyRedirects.prototype.urlSerializer;
    /** @type {?} */
    ApplyRedirects.prototype.urlTree;
    /** @type {?} */
    ApplyRedirects.prototype.config;
}
/**
 * @param {?} injector
 * @param {?} route
 * @return {?}
 */
function runGuards(injector, route) {
    var /** @type {?} */ canLoad = route.canLoad;
    if (!canLoad || canLoad.length === 0)
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(true);
    var /** @type {?} */ obs = __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_from__["from"])(canLoad), function (c) {
        var /** @type {?} */ guard = injector.get(c);
        if (guard.canLoad) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_collection__["b" /* wrapIntoObservable */])(guard.canLoad(route));
        }
        else {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_collection__["b" /* wrapIntoObservable */])(guard(route));
        }
    });
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_collection__["g" /* andObservables */])(obs);
}
/**
 * @param {?} segmentGroup
 * @param {?} route
 * @param {?} segments
 * @return {?}
 */
function match(segmentGroup, route, segments) {
    var /** @type {?} */ noMatch = { matched: false, consumedSegments: /** @type {?} */ ([]), lastChild: 0, positionalParamSegments: {} };
    if (route.path === '') {
        if ((route.pathMatch === 'full') && (segmentGroup.hasChildren() || segments.length > 0)) {
            return { matched: false, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        }
        else {
            return { matched: true, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        }
    }
    var /** @type {?} */ matcher = route.matcher || __WEBPACK_IMPORTED_MODULE_10__shared__["c" /* defaultUrlMatcher */];
    var /** @type {?} */ res = matcher(segments, segmentGroup, route);
    if (!res)
        return noMatch;
    return {
        matched: true,
        consumedSegments: res.consumed,
        lastChild: res.consumed.length,
        positionalParamSegments: res.posParams
    };
}
/**
 * @param {?} segmentGroup
 * @param {?} consumedSegments
 * @param {?} slicedSegments
 * @param {?} config
 * @return {?}
 */
function split(segmentGroup, consumedSegments, slicedSegments, config) {
    if (slicedSegments.length > 0 &&
        containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, slicedSegments, config)) {
        var /** @type {?} */ s = new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](consumedSegments, createChildrenForEmptySegments(config, new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](slicedSegments, segmentGroup.children)));
        return { segmentGroup: mergeTrivialChildren(s), slicedSegments: [] };
    }
    else if (slicedSegments.length === 0 &&
        containsEmptyPathRedirects(segmentGroup, slicedSegments, config)) {
        var /** @type {?} */ s = new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](segmentGroup.segments, addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
        return { segmentGroup: mergeTrivialChildren(s), slicedSegments: slicedSegments };
    }
    else {
        return { segmentGroup: segmentGroup, slicedSegments: slicedSegments };
    }
}
/**
 * @param {?} s
 * @return {?}
 */
function mergeTrivialChildren(s) {
    if (s.numberOfChildren === 1 && s.children[__WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]]) {
        var /** @type {?} */ c = s.children[__WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]];
        return new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */](s.segments.concat(c.segments), c.children);
    }
    else {
        return s;
    }
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @param {?} children
 * @return {?}
 */
function addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
    var /** @type {?} */ res = {};
    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
        var r = routes_1[_i];
        if (emptyPathRedirect(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
            res[getOutlet(r)] = new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */]([], {});
        }
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_collection__["e" /* merge */])(children, res);
}
/**
 * @param {?} routes
 * @param {?} primarySegmentGroup
 * @return {?}
 */
function createChildrenForEmptySegments(routes, primarySegmentGroup) {
    var /** @type {?} */ res = {};
    res[__WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]] = primarySegmentGroup;
    for (var _i = 0, routes_2 = routes; _i < routes_2.length; _i++) {
        var r = routes_2[_i];
        if (r.path === '' && getOutlet(r) !== __WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]) {
            res[getOutlet(r)] = new __WEBPACK_IMPORTED_MODULE_11__url_tree__["c" /* UrlSegmentGroup */]([], {});
        }
    }
    return res;
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @return {?}
 */
function containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, slicedSegments, routes) {
    return routes
        .filter(function (r) { return emptyPathRedirect(segmentGroup, slicedSegments, r) &&
        getOutlet(r) !== __WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */]; })
        .length > 0;
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @return {?}
 */
function containsEmptyPathRedirects(segmentGroup, slicedSegments, routes) {
    return routes.filter(function (r) { return emptyPathRedirect(segmentGroup, slicedSegments, r); }).length > 0;
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} r
 * @return {?}
 */
function emptyPathRedirect(segmentGroup, slicedSegments, r) {
    if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === 'full')
        return false;
    return r.path === '' && r.redirectTo !== undefined;
}
/**
 * @param {?} route
 * @return {?}
 */
function getOutlet(route) {
    return route.outlet ? route.outlet : __WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PRIMARY_OUTLET */];
}
//# sourceMappingURL=apply_redirects.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared__ = __webpack_require__("./node_modules/@angular/router/src/shared.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = validateConfig;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @param {?} config
 * @param {?=} parentPath
 * @return {?}
 */
function validateConfig(config, parentPath) {
    if (parentPath === void 0) { parentPath = ''; }
    // forEach doesn't iterate undefined values
    for (var /** @type {?} */ i = 0; i < config.length; i++) {
        var /** @type {?} */ route = config[i];
        var /** @type {?} */ fullPath = getFullPath(parentPath, route);
        validateNode(route, fullPath);
    }
}
/**
 * @param {?} route
 * @param {?} fullPath
 * @return {?}
 */
function validateNode(route, fullPath) {
    if (!route) {
        throw new Error("\n      Invalid configuration of route '" + fullPath + "': Encountered undefined route.\n      The reason might be an extra comma.\n       \n      Example: \n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ");
    }
    if (Array.isArray(route)) {
        throw new Error("Invalid configuration of route '" + fullPath + "': Array cannot be specified");
    }
    if (!route.component && (route.outlet && route.outlet !== __WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */])) {
        throw new Error("Invalid configuration of route '" + fullPath + "': a componentless route cannot have a named outlet set");
    }
    if (route.redirectTo && route.children) {
        throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and children cannot be used together");
    }
    if (route.redirectTo && route.loadChildren) {
        throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and loadChildren cannot be used together");
    }
    if (route.children && route.loadChildren) {
        throw new Error("Invalid configuration of route '" + fullPath + "': children and loadChildren cannot be used together");
    }
    if (route.redirectTo && route.component) {
        throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and component cannot be used together");
    }
    if (route.path && route.matcher) {
        throw new Error("Invalid configuration of route '" + fullPath + "': path and matcher cannot be used together");
    }
    if (route.redirectTo === void 0 && !route.component && !route.children && !route.loadChildren) {
        throw new Error("Invalid configuration of route '" + fullPath + "'. One of the following must be provided: component, redirectTo, children or loadChildren");
    }
    if (route.path === void 0 && route.matcher === void 0) {
        throw new Error("Invalid configuration of route '" + fullPath + "': routes must have either a path or a matcher specified");
    }
    if (typeof route.path === 'string' && route.path.charAt(0) === '/') {
        throw new Error("Invalid configuration of route '" + fullPath + "': path cannot start with a slash");
    }
    if (route.path === '' && route.redirectTo !== void 0 && route.pathMatch === void 0) {
        var /** @type {?} */ exp = "The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.";
        throw new Error("Invalid configuration of route '{path: \"" + fullPath + "\", redirectTo: \"" + route.redirectTo + "\"}': please provide 'pathMatch'. " + exp);
    }
    if (route.pathMatch !== void 0 && route.pathMatch !== 'full' && route.pathMatch !== 'prefix') {
        throw new Error("Invalid configuration of route '" + fullPath + "': pathMatch can only be set to 'prefix' or 'full'");
    }
    if (route.children) {
        validateConfig(route.children, fullPath);
    }
}
/**
 * @param {?} parentPath
 * @param {?} currentRoute
 * @return {?}
 */
function getFullPath(parentPath, currentRoute) {
    if (!currentRoute) {
        return parentPath;
    }
    if (!parentPath && !currentRoute.path) {
        return '';
    }
    else if (parentPath && !currentRoute.path) {
        return parentPath + "/";
    }
    else if (!parentPath && currentRoute.path) {
        return currentRoute.path;
    }
    else {
        return parentPath + "/" + currentRoute.path;
    }
}
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/create_router_state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_state__ = __webpack_require__("./node_modules/@angular/router/src/router_state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_tree__ = __webpack_require__("./node_modules/@angular/router/src/utils/tree.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = createRouterState;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @param {?} routeReuseStrategy
 * @param {?} curr
 * @param {?} prevState
 * @return {?}
 */
function createRouterState(routeReuseStrategy, curr, prevState) {
    var /** @type {?} */ root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : undefined);
    return new __WEBPACK_IMPORTED_MODULE_1__router_state__["c" /* RouterState */](root, curr);
}
/**
 * @param {?} routeReuseStrategy
 * @param {?} curr
 * @param {?=} prevState
 * @return {?}
 */
function createNode(routeReuseStrategy, curr, prevState) {
    // reuse an activated route that is currently displayed on the screen
    if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
        var /** @type {?} */ value = prevState.value;
        value._futureSnapshot = curr.value;
        var /** @type {?} */ children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
        return new __WEBPACK_IMPORTED_MODULE_2__utils_tree__["b" /* TreeNode */](value, children);
    }
    else if (routeReuseStrategy.retrieve(curr.value)) {
        var /** @type {?} */ tree = ((routeReuseStrategy.retrieve(curr.value))).route;
        setFutureSnapshotsOfActivatedRoutes(curr, tree);
        return tree;
    }
    else {
        var /** @type {?} */ value = createActivatedRoute(curr.value);
        var /** @type {?} */ children = curr.children.map(function (c) { return createNode(routeReuseStrategy, c); });
        return new __WEBPACK_IMPORTED_MODULE_2__utils_tree__["b" /* TreeNode */](value, children);
    }
}
/**
 * @param {?} curr
 * @param {?} result
 * @return {?}
 */
function setFutureSnapshotsOfActivatedRoutes(curr, result) {
    if (curr.value.routeConfig !== result.value.routeConfig) {
        throw new Error('Cannot reattach ActivatedRouteSnapshot created from a different route');
    }
    if (curr.children.length !== result.children.length) {
        throw new Error('Cannot reattach ActivatedRouteSnapshot with a different number of children');
    }
    result.value._futureSnapshot = curr.value;
    for (var /** @type {?} */ i = 0; i < curr.children.length; ++i) {
        setFutureSnapshotsOfActivatedRoutes(curr.children[i], result.children[i]);
    }
}
/**
 * @param {?} routeReuseStrategy
 * @param {?} curr
 * @param {?} prevState
 * @return {?}
 */
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
    return curr.children.map(function (child) {
        for (var _i = 0, _a = prevState.children; _i < _a.length; _i++) {
            var p = _a[_i];
            if (routeReuseStrategy.shouldReuseRoute(p.value.snapshot, child.value)) {
                return createNode(routeReuseStrategy, child, p);
            }
        }
        return createNode(routeReuseStrategy, child);
    });
}
/**
 * @param {?} c
 * @return {?}
 */
function createActivatedRoute(c) {
    return new __WEBPACK_IMPORTED_MODULE_1__router_state__["a" /* ActivatedRoute */](new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](c.url), new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](c.params), new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](c.queryParams), new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](c.fragment), new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](c.data), c.outlet, c.component, c);
}
//# sourceMappingURL=create_router_state.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/create_url_tree.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared__ = __webpack_require__("./node_modules/@angular/router/src/shared.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__url_tree__ = __webpack_require__("./node_modules/@angular/router/src/url_tree.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_collection__ = __webpack_require__("./node_modules/@angular/router/src/utils/collection.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = createUrlTree;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @param {?} route
 * @param {?} urlTree
 * @param {?} commands
 * @param {?} queryParams
 * @param {?} fragment
 * @return {?}
 */
function createUrlTree(route, urlTree, commands, queryParams, fragment) {
    if (commands.length === 0) {
        return tree(urlTree.root, urlTree.root, urlTree, queryParams, fragment);
    }
    var /** @type {?} */ nav = computeNavigation(commands);
    if (nav.toRoot()) {
        return tree(urlTree.root, new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */]([], {}), urlTree, queryParams, fragment);
    }
    var /** @type {?} */ startingPosition = findStartingPosition(nav, urlTree, route);
    var /** @type {?} */ segmentGroup = startingPosition.processChildren ?
        updateSegmentGroupChildren(startingPosition.segmentGroup, startingPosition.index, nav.commands) :
        updateSegmentGroup(startingPosition.segmentGroup, startingPosition.index, nav.commands);
    return tree(startingPosition.segmentGroup, segmentGroup, urlTree, queryParams, fragment);
}
/**
 * @param {?} command
 * @return {?}
 */
function isMatrixParams(command) {
    return typeof command === 'object' && !command.outlets && !command.segmentPath;
}
/**
 * @param {?} oldSegmentGroup
 * @param {?} newSegmentGroup
 * @param {?} urlTree
 * @param {?} queryParams
 * @param {?} fragment
 * @return {?}
 */
function tree(oldSegmentGroup, newSegmentGroup, urlTree, queryParams, fragment) {
    if (urlTree.root === oldSegmentGroup) {
        return new __WEBPACK_IMPORTED_MODULE_1__url_tree__["e" /* UrlTree */](newSegmentGroup, stringify(queryParams), fragment);
    }
    return new __WEBPACK_IMPORTED_MODULE_1__url_tree__["e" /* UrlTree */](replaceSegment(urlTree.root, oldSegmentGroup, newSegmentGroup), stringify(queryParams), fragment);
}
/**
 * @param {?} current
 * @param {?} oldSegment
 * @param {?} newSegment
 * @return {?}
 */
function replaceSegment(current, oldSegment, newSegment) {
    var /** @type {?} */ children = {};
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_collection__["d" /* forEach */])(current.children, function (c, outletName) {
        if (c === oldSegment) {
            children[outletName] = newSegment;
        }
        else {
            children[outletName] = replaceSegment(c, oldSegment, newSegment);
        }
    });
    return new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */](current.segments, children);
}
var Navigation = (function () {
    /**
     * @param {?} isAbsolute
     * @param {?} numberOfDoubleDots
     * @param {?} commands
     */
    function Navigation(isAbsolute, numberOfDoubleDots, commands) {
        this.isAbsolute = isAbsolute;
        this.numberOfDoubleDots = numberOfDoubleDots;
        this.commands = commands;
        if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
            throw new Error('Root segment cannot have matrix parameters');
        }
        var cmdWithOutlet = commands.find(function (c) { return typeof c === 'object' && c.outlets; });
        if (cmdWithOutlet && cmdWithOutlet !== __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_collection__["i" /* last */])(commands)) {
            throw new Error('{outlets:{}} has to be the last command');
        }
    }
    /**
     * @return {?}
     */
    Navigation.prototype.toRoot = function () {
        return this.isAbsolute && this.commands.length === 1 && this.commands[0] == '/';
    };
    return Navigation;
}());
function Navigation_tsickle_Closure_declarations() {
    /** @type {?} */
    Navigation.prototype.isAbsolute;
    /** @type {?} */
    Navigation.prototype.numberOfDoubleDots;
    /** @type {?} */
    Navigation.prototype.commands;
}
/**
 *  Transforms commands to a normalized `Navigation`
 * @param {?} commands
 * @return {?}
 */
function computeNavigation(commands) {
    if ((typeof commands[0] === 'string') && commands.length === 1 && commands[0] === '/') {
        return new Navigation(true, 0, commands);
    }
    var /** @type {?} */ numberOfDoubleDots = 0;
    var /** @type {?} */ isAbsolute = false;
    var /** @type {?} */ res = commands.reduce(function (res, cmd, cmdIdx) {
        if (typeof cmd === 'object') {
            if (cmd.outlets) {
                var /** @type {?} */ outlets_1 = {};
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_collection__["d" /* forEach */])(cmd.outlets, function (commands, name) {
                    outlets_1[name] = typeof commands === 'string' ? commands.split('/') : commands;
                });
                return res.concat([{ outlets: outlets_1 }]);
            }
            if (cmd.segmentPath) {
                return res.concat([cmd.segmentPath]);
            }
        }
        if (!(typeof cmd === 'string')) {
            return res.concat([cmd]);
        }
        if (cmdIdx === 0) {
            cmd.split('/').forEach(function (urlPart, partIndex) {
                if (partIndex == 0 && urlPart === '.') {
                }
                else if (partIndex == 0 && urlPart === '') {
                    isAbsolute = true;
                }
                else if (urlPart === '..') {
                    numberOfDoubleDots++;
                }
                else if (urlPart != '') {
                    res.push(urlPart);
                }
            });
            return res;
        }
        return res.concat([cmd]);
    }, []);
    return new Navigation(isAbsolute, numberOfDoubleDots, res);
}
var Position = (function () {
    /**
     * @param {?} segmentGroup
     * @param {?} processChildren
     * @param {?} index
     */
    function Position(segmentGroup, processChildren, index) {
        this.segmentGroup = segmentGroup;
        this.processChildren = processChildren;
        this.index = index;
    }
    return Position;
}());
function Position_tsickle_Closure_declarations() {
    /** @type {?} */
    Position.prototype.segmentGroup;
    /** @type {?} */
    Position.prototype.processChildren;
    /** @type {?} */
    Position.prototype.index;
}
/**
 * @param {?} nav
 * @param {?} tree
 * @param {?} route
 * @return {?}
 */
function findStartingPosition(nav, tree, route) {
    if (nav.isAbsolute) {
        return new Position(tree.root, true, 0);
    }
    if (route.snapshot._lastPathIndex === -1) {
        return new Position(route.snapshot._urlSegment, true, 0);
    }
    var /** @type {?} */ modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
    var /** @type {?} */ index = route.snapshot._lastPathIndex + modifier;
    return createPositionApplyingDoubleDots(route.snapshot._urlSegment, index, nav.numberOfDoubleDots);
}
/**
 * @param {?} group
 * @param {?} index
 * @param {?} numberOfDoubleDots
 * @return {?}
 */
function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
    var /** @type {?} */ g = group;
    var /** @type {?} */ ci = index;
    var /** @type {?} */ dd = numberOfDoubleDots;
    while (dd > ci) {
        dd -= ci;
        g = g.parent;
        if (!g) {
            throw new Error('Invalid number of \'../\'');
        }
        ci = g.segments.length;
    }
    return new Position(g, false, ci - dd);
}
/**
 * @param {?} command
 * @return {?}
 */
function getPath(command) {
    if (typeof command === 'object' && command.outlets)
        return command.outlets[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]];
    return "" + command;
}
/**
 * @param {?} commands
 * @return {?}
 */
function getOutlets(commands) {
    if (!(typeof commands[0] === 'object'))
        return (_a = {}, _a[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]] = commands, _a);
    if (commands[0].outlets === undefined)
        return (_b = {}, _b[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]] = commands, _b);
    return commands[0].outlets;
    var _a, _b;
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function updateSegmentGroup(segmentGroup, startIndex, commands) {
    if (!segmentGroup) {
        segmentGroup = new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */]([], {});
    }
    if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
        return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
    }
    var /** @type {?} */ m = prefixedWith(segmentGroup, startIndex, commands);
    var /** @type {?} */ slicedCommands = commands.slice(m.commandIndex);
    if (m.match && m.pathIndex < segmentGroup.segments.length) {
        var /** @type {?} */ g = new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */](segmentGroup.segments.slice(0, m.pathIndex), {});
        g.children[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]] =
            new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */](segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
        return updateSegmentGroupChildren(g, 0, slicedCommands);
    }
    else if (m.match && slicedCommands.length === 0) {
        return new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */](segmentGroup.segments, {});
    }
    else if (m.match && !segmentGroup.hasChildren()) {
        return createNewSegmentGroup(segmentGroup, startIndex, commands);
    }
    else if (m.match) {
        return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
    }
    else {
        return createNewSegmentGroup(segmentGroup, startIndex, commands);
    }
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
    if (commands.length === 0) {
        return new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */](segmentGroup.segments, {});
    }
    else {
        var /** @type {?} */ outlets_2 = getOutlets(commands);
        var /** @type {?} */ children_1 = {};
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_collection__["d" /* forEach */])(outlets_2, function (commands, outlet) {
            if (commands !== null) {
                children_1[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands);
            }
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_collection__["d" /* forEach */])(segmentGroup.children, function (child, childOutlet) {
            if (outlets_2[childOutlet] === undefined) {
                children_1[childOutlet] = child;
            }
        });
        return new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */](segmentGroup.segments, children_1);
    }
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function prefixedWith(segmentGroup, startIndex, commands) {
    var /** @type {?} */ currentCommandIndex = 0;
    var /** @type {?} */ currentPathIndex = startIndex;
    var /** @type {?} */ noMatch = { match: false, pathIndex: 0, commandIndex: 0 };
    while (currentPathIndex < segmentGroup.segments.length) {
        if (currentCommandIndex >= commands.length)
            return noMatch;
        var /** @type {?} */ path = segmentGroup.segments[currentPathIndex];
        var /** @type {?} */ curr = getPath(commands[currentCommandIndex]);
        var /** @type {?} */ next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
        if (currentPathIndex > 0 && curr === undefined)
            break;
        if (curr && next && (typeof next === 'object') && next.outlets === undefined) {
            if (!compare(curr, next, path))
                return noMatch;
            currentCommandIndex += 2;
        }
        else {
            if (!compare(curr, {}, path))
                return noMatch;
            currentCommandIndex++;
        }
        currentPathIndex++;
    }
    return { match: true, pathIndex: currentPathIndex, commandIndex: currentCommandIndex };
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
    var /** @type {?} */ paths = segmentGroup.segments.slice(0, startIndex);
    var /** @type {?} */ i = 0;
    while (i < commands.length) {
        if (typeof commands[i] === 'object' && commands[i].outlets !== undefined) {
            var /** @type {?} */ children = createNewSegmentChildren(commands[i].outlets);
            return new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */](paths, children);
        }
        // if we start with an object literal, we need to reuse the path part from the segment
        if (i === 0 && isMatrixParams(commands[0])) {
            var /** @type {?} */ p = segmentGroup.segments[startIndex];
            paths.push(new __WEBPACK_IMPORTED_MODULE_1__url_tree__["b" /* UrlSegment */](p.path, commands[0]));
            i++;
            continue;
        }
        var /** @type {?} */ curr = getPath(commands[i]);
        var /** @type {?} */ next = (i < commands.length - 1) ? commands[i + 1] : null;
        if (curr && next && isMatrixParams(next)) {
            paths.push(new __WEBPACK_IMPORTED_MODULE_1__url_tree__["b" /* UrlSegment */](curr, stringify(next)));
            i += 2;
        }
        else {
            paths.push(new __WEBPACK_IMPORTED_MODULE_1__url_tree__["b" /* UrlSegment */](curr, {}));
            i++;
        }
    }
    return new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */](paths, {});
}
/**
 * @param {?} outlets
 * @return {?}
 */
function createNewSegmentChildren(outlets) {
    var /** @type {?} */ children = {};
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_collection__["d" /* forEach */])(outlets, function (commands, outlet) {
        if (commands !== null) {
            children[outlet] = createNewSegmentGroup(new __WEBPACK_IMPORTED_MODULE_1__url_tree__["c" /* UrlSegmentGroup */]([], {}), 0, commands);
        }
    });
    return children;
}
/**
 * @param {?} params
 * @return {?}
 */
function stringify(params) {
    var /** @type {?} */ res = {};
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_collection__["d" /* forEach */])(params, function (v, k) { return res[k] = "" + v; });
    return res;
}
/**
 * @param {?} path
 * @param {?} params
 * @param {?} segment
 * @return {?}
 */
function compare(path, params, segment) {
    return path == segment.path && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_collection__["c" /* shallowEqual */])(params, segment.parameters);
}
//# sourceMappingURL=create_url_tree.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/directives/router_link.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("./node_modules/@angular/router/src/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_state__ = __webpack_require__("./node_modules/@angular/router/src/router_state.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RouterLinkWithHref; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/**
 *  *
  * *
  * Consider the following route configuration:
  * `[{ path: 'user/:name', component: UserCmp }]`
  * *
  * When linking to this `user/:name` route, you can write:
  * `<a routerLink='/user/bob'>link to user component</a>`
  * *
  * *
  * The RouterLink directives let you link to specific parts of your app.
  * *
  * When the link is static, you can use the directive as follows:
  * `<a routerLink="/user/bob">link to user component</a>`
  * *
  * If you use dynamic values to generate the link, you can pass an array of path
  * segments, followed by the params for each segment.
  * *
  * For instance `['/team', teamId, 'user', userName, {details: true}]`
  * means that we want to generate a link to `/team/11/user/bob;details=true`.
  * *
  * Multiple static segments can be merged into one
  * (e.g., `['/team/11/user', userName, {details: true}]`).
  * *
  * The first segment name can be prepended with `/`, `./`, or `../`:
  * * If the first segment begins with `/`, the router will look up the route from the root of the
  * app.
  * * If the first segment begins with `./`, or doesn't begin with a slash, the router will
  * instead look in the children of the current activated route.
  * * And if the first segment begins with `../`, the router will go up one level.
  * *
  * You can set query params and fragment as follows:
  * *
  * ```
  * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" fragment="education">
  * link to user component
  * </a>
  * ```
  * RouterLink will use these to generate this link: `/user/bob#education?debug=true`.
  * *
  * You can also tell the directive to preserve the current query params and fragment:
  * *
  * ```
  * <a [routerLink]="['/user/bob']" preserveQueryParams preserveFragment>
  * link to user component
  * </a>
  * ```
  * *
  * The router link directive always treats the provided input as a delta to the current url.
  * *
  * For instance, if the current url is `/user/(box//aux:team)`.
  * *
  * Then the following link `<a [routerLink]="['/user/jim']">Jim</a>` will generate the link
  * `/user/(jim//aux:team)`.
  * *
  * *
  * See {@link Router.createUrlTree} for more information.
  * *
 */
var RouterLink = (function () {
    /**
     * @param {?} router
     * @param {?} route
     */
    function RouterLink(router, route) {
        this.router = router;
        this.route = route;
        this.commands = [];
    }
    Object.defineProperty(RouterLink.prototype, "routerLink", {
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            if (Array.isArray(data)) {
                this.commands = data;
            }
            else {
                this.commands = [data];
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RouterLink.prototype.onClick = function () {
        var /** @type {?} */ extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl),
        };
        this.router.navigateByUrl(this.urlTree, extras);
        return true;
    };
    Object.defineProperty(RouterLink.prototype, "urlTree", {
        /**
         * @return {?}
         */
        get: function () {
            return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: attrBoolValue(this.preserveQueryParams),
                preserveFragment: attrBoolValue(this.preserveFragment),
            });
        },
        enumerable: true,
        configurable: true
    });
    RouterLink.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: ':not(a)[routerLink]' },] },
    ];
    /** @nocollapse */
    RouterLink.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__router__["e" /* Router */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__router_state__["a" /* ActivatedRoute */], },
    ]; };
    RouterLink.propDecorators = {
        'queryParams': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'fragment': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'preserveQueryParams': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'preserveFragment': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'skipLocationChange': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'replaceUrl': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'routerLink': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"], args: ['click', [],] },],
    };
    return RouterLink;
}());
function RouterLink_tsickle_Closure_declarations() {
    /** @type {?} */
    RouterLink.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    RouterLink.ctorParameters;
    /** @type {?} */
    RouterLink.propDecorators;
    /** @type {?} */
    RouterLink.prototype.queryParams;
    /** @type {?} */
    RouterLink.prototype.fragment;
    /** @type {?} */
    RouterLink.prototype.preserveQueryParams;
    /** @type {?} */
    RouterLink.prototype.preserveFragment;
    /** @type {?} */
    RouterLink.prototype.skipLocationChange;
    /** @type {?} */
    RouterLink.prototype.replaceUrl;
    /** @type {?} */
    RouterLink.prototype.commands;
    /** @type {?} */
    RouterLink.prototype.router;
    /** @type {?} */
    RouterLink.prototype.route;
}
/**
 *  *
  * See {@link RouterLink} for more information.
  * *
  * *
 */
var RouterLinkWithHref = (function () {
    /**
     * @param {?} router
     * @param {?} route
     * @param {?} locationStrategy
     */
    function RouterLinkWithHref(router, route, locationStrategy) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.locationStrategy = locationStrategy;
        this.commands = [];
        this.subscription = router.events.subscribe(function (s) {
            if (s instanceof __WEBPACK_IMPORTED_MODULE_2__router__["b" /* NavigationEnd */]) {
                _this.updateTargetUrlAndHref();
            }
        });
    }
    Object.defineProperty(RouterLinkWithHref.prototype, "routerLink", {
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            if (Array.isArray(data)) {
                this.commands = data;
            }
            else {
                this.commands = [data];
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    RouterLinkWithHref.prototype.ngOnChanges = function (changes) { this.updateTargetUrlAndHref(); };
    /**
     * @return {?}
     */
    RouterLinkWithHref.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
    /**
     * @param {?} button
     * @param {?} ctrlKey
     * @param {?} metaKey
     * @return {?}
     */
    RouterLinkWithHref.prototype.onClick = function (button, ctrlKey, metaKey) {
        if (button !== 0 || ctrlKey || metaKey) {
            return true;
        }
        if (typeof this.target === 'string' && this.target != '_self') {
            return true;
        }
        var /** @type {?} */ extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl),
        };
        this.router.navigateByUrl(this.urlTree, extras);
        return false;
    };
    /**
     * @return {?}
     */
    RouterLinkWithHref.prototype.updateTargetUrlAndHref = function () {
        this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
    };
    Object.defineProperty(RouterLinkWithHref.prototype, "urlTree", {
        /**
         * @return {?}
         */
        get: function () {
            return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: attrBoolValue(this.preserveQueryParams),
                preserveFragment: attrBoolValue(this.preserveFragment),
            });
        },
        enumerable: true,
        configurable: true
    });
    RouterLinkWithHref.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: 'a[routerLink]' },] },
    ];
    /** @nocollapse */
    RouterLinkWithHref.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__router__["e" /* Router */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__router_state__["a" /* ActivatedRoute */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_common__["LocationStrategy"], },
    ]; };
    RouterLinkWithHref.propDecorators = {
        'target': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'queryParams': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'fragment': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'preserveQueryParams': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'preserveFragment': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'skipLocationChange': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'replaceUrl': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'href': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["HostBinding"] },],
        'routerLink': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"], args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey'],] },],
    };
    return RouterLinkWithHref;
}());
function RouterLinkWithHref_tsickle_Closure_declarations() {
    /** @type {?} */
    RouterLinkWithHref.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    RouterLinkWithHref.ctorParameters;
    /** @type {?} */
    RouterLinkWithHref.propDecorators;
    /** @type {?} */
    RouterLinkWithHref.prototype.target;
    /** @type {?} */
    RouterLinkWithHref.prototype.queryParams;
    /** @type {?} */
    RouterLinkWithHref.prototype.fragment;
    /** @type {?} */
    RouterLinkWithHref.prototype.preserveQueryParams;
    /** @type {?} */
    RouterLinkWithHref.prototype.preserveFragment;
    /** @type {?} */
    RouterLinkWithHref.prototype.skipLocationChange;
    /** @type {?} */
    RouterLinkWithHref.prototype.replaceUrl;
    /** @type {?} */
    RouterLinkWithHref.prototype.commands;
    /** @type {?} */
    RouterLinkWithHref.prototype.subscription;
    /** @type {?} */
    RouterLinkWithHref.prototype.href;
    /** @type {?} */
    RouterLinkWithHref.prototype.router;
    /** @type {?} */
    RouterLinkWithHref.prototype.route;
    /** @type {?} */
    RouterLinkWithHref.prototype.locationStrategy;
}
/**
 * @param {?} s
 * @return {?}
 */
function attrBoolValue(s) {
    return s === '' || !!s;
}
//# sourceMappingURL=router_link.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/directives/router_link_active.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__("./node_modules/@angular/router/src/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_link__ = __webpack_require__("./node_modules/@angular/router/src/directives/router_link.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterLinkActive; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 *  *
  * *
  * ```
  * <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
  * ```
  * *
  * *
  * The RouterLinkActive directive lets you add a CSS class to an element when the link's route
  * becomes active.
  * *
  * Consider the following example:
  * *
  * ```
  * <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
  * ```
  * *
  * When the url is either '/user' or '/user/bob', the active-link class will
  * be added to the `a` tag. If the url changes, the class will be removed.
  * *
  * You can set more than one class, as follows:
  * *
  * ```
  * <a routerLink="/user/bob" routerLinkActive="class1 class2">Bob</a>
  * <a routerLink="/user/bob" [routerLinkActive]="['class1', 'class2']">Bob</a>
  * ```
  * *
  * You can configure RouterLinkActive by passing `exact: true`. This will add the classes
  * only when the url matches the link exactly.
  * *
  * ```
  * <a routerLink="/user/bob" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:
  * true}">Bob</a>
  * ```
  * *
  * You can assign the RouterLinkActive instance to a template variable and directly check
  * the `isActive` status.
  * ```
  * <a routerLink="/user/bob" routerLinkActive #rla="routerLinkActive">
  * Bob {{ rla.isActive ? '(already open)' : ''}}
  * </a>
  * ```
  * *
  * Finally, you can apply the RouterLinkActive directive to an ancestor of a RouterLink.
  * *
  * ```
  * <div routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">
  * <a routerLink="/user/jim">Jim</a>
  * <a routerLink="/user/bob">Bob</a>
  * </div>
  * ```
  * *
  * This will set the active-link class on the div tag if the url is either '/user/jim' or
  * '/user/bob'.
  * *
  * *
 */
var RouterLinkActive = (function () {
    /**
     * @param {?} router
     * @param {?} element
     * @param {?} renderer
     */
    function RouterLinkActive(router, element, renderer) {
        var _this = this;
        this.router = router;
        this.element = element;
        this.renderer = renderer;
        this.classes = [];
        this.routerLinkActiveOptions = { exact: false };
        this.subscription = router.events.subscribe(function (s) {
            if (s instanceof __WEBPACK_IMPORTED_MODULE_1__router__["b" /* NavigationEnd */]) {
                _this.update();
            }
        });
    }
    Object.defineProperty(RouterLinkActive.prototype, "isActive", {
        /**
         * @return {?}
         */
        get: function () { return this.hasActiveLink(); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RouterLinkActive.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.links.changes.subscribe(function (s) { return _this.update(); });
        this.linksWithHrefs.changes.subscribe(function (s) { return _this.update(); });
        this.update();
    };
    Object.defineProperty(RouterLinkActive.prototype, "routerLinkActive", {
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            if (Array.isArray(data)) {
                this.classes = (data);
            }
            else {
                this.classes = data.split(' ');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    RouterLinkActive.prototype.ngOnChanges = function (changes) { this.update(); };
    /**
     * @return {?}
     */
    RouterLinkActive.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
    /**
     * @return {?}
     */
    RouterLinkActive.prototype.update = function () {
        var _this = this;
        if (!this.links || !this.linksWithHrefs || !this.router.navigated)
            return;
        var /** @type {?} */ isActive = this.hasActiveLink();
        this.classes.forEach(function (c) {
            if (c) {
                _this.renderer.setElementClass(_this.element.nativeElement, c, isActive);
            }
        });
    };
    /**
     * @param {?} router
     * @return {?}
     */
    RouterLinkActive.prototype.isLinkActive = function (router) {
        var _this = this;
        return function (link) {
            return router.isActive(link.urlTree, _this.routerLinkActiveOptions.exact);
        };
    };
    /**
     * @return {?}
     */
    RouterLinkActive.prototype.hasActiveLink = function () {
        return this.links.some(this.isLinkActive(this.router)) ||
            this.linksWithHrefs.some(this.isLinkActive(this.router));
    };
    RouterLinkActive.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[routerLinkActive]',
                    exportAs: 'routerLinkActive',
                },] },
    ];
    /** @nocollapse */
    RouterLinkActive.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__router__["e" /* Router */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    ]; };
    RouterLinkActive.propDecorators = {
        'links': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [__WEBPACK_IMPORTED_MODULE_2__router_link__["a" /* RouterLink */], { descendants: true },] },],
        'linksWithHrefs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [__WEBPACK_IMPORTED_MODULE_2__router_link__["b" /* RouterLinkWithHref */], { descendants: true },] },],
        'routerLinkActiveOptions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'routerLinkActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return RouterLinkActive;
}());
function RouterLinkActive_tsickle_Closure_declarations() {
    /** @type {?} */
    RouterLinkActive.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    RouterLinkActive.ctorParameters;
    /** @type {?} */
    RouterLinkActive.propDecorators;
    /** @type {?} */
    RouterLinkActive.prototype.links;
    /** @type {?} */
    RouterLinkActive.prototype.linksWithHrefs;
    /** @type {?} */
    RouterLinkActive.prototype.classes;
    /** @type {?} */
    RouterLinkActive.prototype.subscription;
    /** @type {?} */
    RouterLinkActive.prototype.routerLinkActiveOptions;
    /** @type {?} */
    RouterLinkActive.prototype.router;
    /** @type {?} */
    RouterLinkActive.prototype.element;
    /** @type {?} */
    RouterLinkActive.prototype.renderer;
}
//# sourceMappingURL=router_link_active.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/directives/router_outlet.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_outlet_map__ = __webpack_require__("./node_modules/@angular/router/src/router_outlet_map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./node_modules/@angular/router/src/shared.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterOutlet; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 *  state.
  * *
  * *
  * ```
  * <router-outlet></router-outlet>
  * <router-outlet name='left'></router-outlet>
  * <router-outlet name='right'></router-outlet>
  * ```
  * *
  * A router outlet will emit an activate event any time a new component is being instantiated,
  * and a deactivate event when it is being destroyed.
  * *
  * ```
  * <router-outlet
  * (activate)='onActivate($event)'
  * (deactivate)='onDeactivate($event)'></router-outlet>
  * ```
  * *
 */
var RouterOutlet = (function () {
    /**
     * @param {?} parentOutletMap
     * @param {?} location
     * @param {?} resolver
     * @param {?} name
     */
    function RouterOutlet(parentOutletMap, location, resolver, name) {
        this.parentOutletMap = parentOutletMap;
        this.location = location;
        this.resolver = resolver;
        this.name = name;
        this.activateEvents = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deactivateEvents = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        parentOutletMap.registerOutlet(name ? name : __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* PRIMARY_OUTLET */], this);
    }
    /**
     * @return {?}
     */
    RouterOutlet.prototype.ngOnDestroy = function () { this.parentOutletMap.removeOutlet(this.name ? this.name : __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* PRIMARY_OUTLET */]); };
    Object.defineProperty(RouterOutlet.prototype, "locationInjector", {
        /**
         * @return {?}
         */
        get: function () { return this.location.injector; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "locationFactoryResolver", {
        /**
         * @return {?}
         */
        get: function () { return this.resolver; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "isActivated", {
        /**
         * @return {?}
         */
        get: function () { return !!this.activated; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "component", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this.activated)
                throw new Error('Outlet is not activated');
            return this.activated.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "activatedRoute", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this.activated)
                throw new Error('Outlet is not activated');
            return this._activatedRoute;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RouterOutlet.prototype.detach = function () {
        if (!this.activated)
            throw new Error('Outlet is not activated');
        this.location.detach();
        var /** @type {?} */ r = this.activated;
        this.activated = null;
        this._activatedRoute = null;
        return r;
    };
    /**
     * @param {?} ref
     * @param {?} activatedRoute
     * @return {?}
     */
    RouterOutlet.prototype.attach = function (ref, activatedRoute) {
        this.activated = ref;
        this._activatedRoute = activatedRoute;
        this.location.insert(ref.hostView);
    };
    /**
     * @return {?}
     */
    RouterOutlet.prototype.deactivate = function () {
        if (this.activated) {
            var /** @type {?} */ c = this.component;
            this.activated.destroy();
            this.activated = null;
            this._activatedRoute = null;
            this.deactivateEvents.emit(c);
        }
    };
    /**
     * @param {?} activatedRoute
     * @param {?} resolver
     * @param {?} injector
     * @param {?} providers
     * @param {?} outletMap
     * @return {?}
     */
    RouterOutlet.prototype.activate = function (activatedRoute, resolver, injector, providers, outletMap) {
        if (this.isActivated) {
            throw new Error('Cannot activate an already activated outlet');
        }
        this.outletMap = outletMap;
        this._activatedRoute = activatedRoute;
        var /** @type {?} */ snapshot = activatedRoute._futureSnapshot;
        var /** @type {?} */ component = (snapshot._routeConfig.component);
        var /** @type {?} */ factory = resolver.resolveComponentFactory(component);
        var /** @type {?} */ inj = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].fromResolvedProviders(providers, injector);
        this.activated = this.location.createComponent(factory, this.location.length, inj, []);
        this.activated.changeDetectorRef.detectChanges();
        this.activateEvents.emit(this.activated.instance);
    };
    RouterOutlet.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'router-outlet' },] },
    ];
    /** @nocollapse */
    RouterOutlet.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__router_outlet_map__["a" /* RouterOutletMap */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"], args: ['name',] },] },
    ]; };
    RouterOutlet.propDecorators = {
        'activateEvents': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['activate',] },],
        'deactivateEvents': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['deactivate',] },],
    };
    return RouterOutlet;
}());
function RouterOutlet_tsickle_Closure_declarations() {
    /** @type {?} */
    RouterOutlet.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    RouterOutlet.ctorParameters;
    /** @type {?} */
    RouterOutlet.propDecorators;
    /** @type {?} */
    RouterOutlet.prototype.activated;
    /** @type {?} */
    RouterOutlet.prototype._activatedRoute;
    /** @type {?} */
    RouterOutlet.prototype.outletMap;
    /** @type {?} */
    RouterOutlet.prototype.activateEvents;
    /** @type {?} */
    RouterOutlet.prototype.deactivateEvents;
    /** @type {?} */
    RouterOutlet.prototype.parentOutletMap;
    /** @type {?} */
    RouterOutlet.prototype.location;
    /** @type {?} */
    RouterOutlet.prototype.resolver;
    /** @type {?} */
    RouterOutlet.prototype.name;
}
//# sourceMappingURL=router_outlet.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_router_link__ = __webpack_require__("./node_modules/@angular/router/src/directives/router_link.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__directives_router_link__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__directives_router_link__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_router_link_active__ = __webpack_require__("./node_modules/@angular/router/src/directives/router_link_active.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__directives_router_link_active__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_router_outlet__ = __webpack_require__("./node_modules/@angular/router/src/directives/router_outlet.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__directives_router_outlet__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__route_reuse_strategy__ = __webpack_require__("./node_modules/@angular/router/src/route_reuse_strategy.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__route_reuse_strategy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__("./node_modules/@angular/router/src/router.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router_module__ = __webpack_require__("./node_modules/@angular/router/src/router_module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__router_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__router_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_5__router_module__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_5__router_module__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router_outlet_map__ = __webpack_require__("./node_modules/@angular/router/src/router_outlet_map.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_6__router_outlet_map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router_preloader__ = __webpack_require__("./node_modules/@angular/router/src/router_preloader.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_7__router_preloader__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_7__router_preloader__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_7__router_preloader__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_7__router_preloader__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router_state__ = __webpack_require__("./node_modules/@angular/router/src/router_state.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_8__router_state__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_8__router_state__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_8__router_state__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_8__router_state__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared__ = __webpack_require__("./node_modules/@angular/router/src/shared.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_9__shared__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__url_handling_strategy__ = __webpack_require__("./node_modules/@angular/router/src/url_handling_strategy.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_10__url_handling_strategy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__url_tree__ = __webpack_require__("./node_modules/@angular/router/src/url_tree.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_11__url_tree__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_11__url_tree__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_11__url_tree__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_11__url_tree__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_11__url_tree__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__version__ = __webpack_require__("./node_modules/@angular/router/src/version.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_12__version__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__private_export__ = __webpack_require__("./node_modules/@angular/router/src/private_export.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_13__private_export__["a"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */














//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/private_export.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_config_loader__ = __webpack_require__("./node_modules/@angular/router/src/router_config_loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_module__ = __webpack_require__("./node_modules/@angular/router/src/router_module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_collection__ = __webpack_require__("./node_modules/@angular/router/src/utils/collection.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __router_private__; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



var /** @type {?} */ __router_private__ = {
    ROUTER_PROVIDERS: __WEBPACK_IMPORTED_MODULE_1__router_module__["e" /* ROUTER_PROVIDERS */],
    ROUTES: __WEBPACK_IMPORTED_MODULE_0__router_config_loader__["a" /* ROUTES */],
    flatten: __WEBPACK_IMPORTED_MODULE_2__utils_collection__["a" /* flatten */],
};
//# sourceMappingURL=private_export.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/private_import_platform-browser.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDOM; });

var /** @type {?} */ getDOM = __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["__platform_browser_private__"].getDOM;
//# sourceMappingURL=private_import_platform-browser.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/recognize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_state__ = __webpack_require__("./node_modules/@angular/router/src/router_state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("./node_modules/@angular/router/src/shared.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__url_tree__ = __webpack_require__("./node_modules/@angular/router/src/url_tree.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_collection__ = __webpack_require__("./node_modules/@angular/router/src/utils/collection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_tree__ = __webpack_require__("./node_modules/@angular/router/src/utils/tree.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = recognize;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







var NoMatch = (function () {
    function NoMatch() {
    }
    return NoMatch;
}());
/**
 * @param {?} rootComponentType
 * @param {?} config
 * @param {?} urlTree
 * @param {?} url
 * @return {?}
 */
function recognize(rootComponentType, config, urlTree, url) {
    return new Recognizer(rootComponentType, config, urlTree, url).recognize();
}
var Recognizer = (function () {
    /**
     * @param {?} rootComponentType
     * @param {?} config
     * @param {?} urlTree
     * @param {?} url
     */
    function Recognizer(rootComponentType, config, urlTree, url) {
        this.rootComponentType = rootComponentType;
        this.config = config;
        this.urlTree = urlTree;
        this.url = url;
    }
    /**
     * @return {?}
     */
    Recognizer.prototype.recognize = function () {
        try {
            var /** @type {?} */ rootSegmentGroup = split(this.urlTree.root, [], [], this.config).segmentGroup;
            var /** @type {?} */ children = this.processSegmentGroup(this.config, rootSegmentGroup, __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */]);
            var /** @type {?} */ root = new __WEBPACK_IMPORTED_MODULE_2__router_state__["b" /* ActivatedRouteSnapshot */]([], Object.freeze({}), Object.freeze(this.urlTree.queryParams), this.urlTree.fragment, {}, __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */], this.rootComponentType, null, this.urlTree.root, -1, {});
            var /** @type {?} */ rootNode = new __WEBPACK_IMPORTED_MODULE_6__utils_tree__["b" /* TreeNode */](root, children);
            var /** @type {?} */ routeState = new __WEBPACK_IMPORTED_MODULE_2__router_state__["d" /* RouterStateSnapshot */](this.url, rootNode);
            this.inheriteParamsAndData(routeState._root);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(routeState);
        }
        catch (e) {
            return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (obs) { return obs.error(e); });
        }
    };
    /**
     * @param {?} routeNode
     * @return {?}
     */
    Recognizer.prototype.inheriteParamsAndData = function (routeNode) {
        var _this = this;
        var /** @type {?} */ route = routeNode.value;
        var /** @type {?} */ i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__router_state__["g" /* inheritedParamsDataResolve */])(route);
        route.params = Object.freeze(i.params);
        route.data = Object.freeze(i.data);
        routeNode.children.forEach(function (n) { return _this.inheriteParamsAndData(n); });
    };
    /**
     * @param {?} config
     * @param {?} segmentGroup
     * @param {?} outlet
     * @return {?}
     */
    Recognizer.prototype.processSegmentGroup = function (config, segmentGroup, outlet) {
        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
            return this.processChildren(config, segmentGroup);
        }
        else {
            return this.processSegment(config, segmentGroup, segmentGroup.segments, outlet);
        }
    };
    /**
     * @param {?} config
     * @param {?} segmentGroup
     * @return {?}
     */
    Recognizer.prototype.processChildren = function (config, segmentGroup) {
        var _this = this;
        var /** @type {?} */ children = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__url_tree__["i" /* mapChildrenIntoArray */])(segmentGroup, function (child, childOutlet) { return _this.processSegmentGroup(config, child, childOutlet); });
        checkOutletNameUniqueness(children);
        sortActivatedRouteSnapshots(children);
        return children;
    };
    /**
     * @param {?} config
     * @param {?} segmentGroup
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    Recognizer.prototype.processSegment = function (config, segmentGroup, segments, outlet) {
        for (var _i = 0, config_1 = config; _i < config_1.length; _i++) {
            var r = config_1[_i];
            try {
                return this.processSegmentAgainstRoute(r, segmentGroup, segments, outlet);
            }
            catch (e) {
                if (!(e instanceof NoMatch))
                    throw e;
            }
        }
        if (this.noLeftoversInUrl(segmentGroup, segments, outlet)) {
            return [];
        }
        else {
            throw new NoMatch();
        }
    };
    /**
     * @param {?} segmentGroup
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    Recognizer.prototype.noLeftoversInUrl = function (segmentGroup, segments, outlet) {
        return segments.length === 0 && !segmentGroup.children[outlet];
    };
    /**
     * @param {?} route
     * @param {?} rawSegment
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    Recognizer.prototype.processSegmentAgainstRoute = function (route, rawSegment, segments, outlet) {
        if (route.redirectTo)
            throw new NoMatch();
        if ((route.outlet ? route.outlet : __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */]) !== outlet)
            throw new NoMatch();
        if (route.path === '**') {
            var /** @type {?} */ params = segments.length > 0 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_collection__["i" /* last */])(segments).parameters : {};
            var /** @type {?} */ snapshot_1 = new __WEBPACK_IMPORTED_MODULE_2__router_state__["b" /* ActivatedRouteSnapshot */](segments, params, Object.freeze(this.urlTree.queryParams), this.urlTree.fragment, getData(route), outlet, route.component, route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + segments.length, getResolve(route));
            return [new __WEBPACK_IMPORTED_MODULE_6__utils_tree__["b" /* TreeNode */](snapshot_1, [])];
        }
        var _a = match(rawSegment, route, segments), consumedSegments = _a.consumedSegments, parameters = _a.parameters, lastChild = _a.lastChild;
        var /** @type {?} */ rawSlicedSegments = segments.slice(lastChild);
        var /** @type {?} */ childConfig = getChildConfig(route);
        var _b = split(rawSegment, consumedSegments, rawSlicedSegments, childConfig), segmentGroup = _b.segmentGroup, slicedSegments = _b.slicedSegments;
        var /** @type {?} */ snapshot = new __WEBPACK_IMPORTED_MODULE_2__router_state__["b" /* ActivatedRouteSnapshot */](consumedSegments, parameters, Object.freeze(this.urlTree.queryParams), this.urlTree.fragment, getData(route), outlet, route.component, route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + consumedSegments.length, getResolve(route));
        if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
            var /** @type {?} */ children = this.processChildren(childConfig, segmentGroup);
            return [new __WEBPACK_IMPORTED_MODULE_6__utils_tree__["b" /* TreeNode */](snapshot, children)];
        }
        else if (childConfig.length === 0 && slicedSegments.length === 0) {
            return [new __WEBPACK_IMPORTED_MODULE_6__utils_tree__["b" /* TreeNode */](snapshot, [])];
        }
        else {
            var /** @type {?} */ children = this.processSegment(childConfig, segmentGroup, slicedSegments, __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */]);
            return [new __WEBPACK_IMPORTED_MODULE_6__utils_tree__["b" /* TreeNode */](snapshot, children)];
        }
    };
    return Recognizer;
}());
function Recognizer_tsickle_Closure_declarations() {
    /** @type {?} */
    Recognizer.prototype.rootComponentType;
    /** @type {?} */
    Recognizer.prototype.config;
    /** @type {?} */
    Recognizer.prototype.urlTree;
    /** @type {?} */
    Recognizer.prototype.url;
}
/**
 * @param {?} nodes
 * @return {?}
 */
function sortActivatedRouteSnapshots(nodes) {
    nodes.sort(function (a, b) {
        if (a.value.outlet === __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */])
            return -1;
        if (b.value.outlet === __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */])
            return 1;
        return a.value.outlet.localeCompare(b.value.outlet);
    });
}
/**
 * @param {?} route
 * @return {?}
 */
function getChildConfig(route) {
    if (route.children) {
        return route.children;
    }
    else if (route.loadChildren) {
        return ((route))._loadedConfig.routes;
    }
    else {
        return [];
    }
}
/**
 * @param {?} segmentGroup
 * @param {?} route
 * @param {?} segments
 * @return {?}
 */
function match(segmentGroup, route, segments) {
    if (route.path === '') {
        if (route.pathMatch === 'full' && (segmentGroup.hasChildren() || segments.length > 0)) {
            throw new NoMatch();
        }
        else {
            return { consumedSegments: [], lastChild: 0, parameters: {} };
        }
    }
    var /** @type {?} */ matcher = route.matcher || __WEBPACK_IMPORTED_MODULE_3__shared__["c" /* defaultUrlMatcher */];
    var /** @type {?} */ res = matcher(segments, segmentGroup, route);
    if (!res)
        throw new NoMatch();
    var /** @type {?} */ posParams = {};
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_collection__["d" /* forEach */])(res.posParams, function (v, k) { posParams[k] = v.path; });
    var /** @type {?} */ parameters = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_collection__["e" /* merge */])(posParams, res.consumed[res.consumed.length - 1].parameters);
    return { consumedSegments: res.consumed, lastChild: res.consumed.length, parameters: parameters };
}
/**
 * @param {?} nodes
 * @return {?}
 */
function checkOutletNameUniqueness(nodes) {
    var /** @type {?} */ names = {};
    nodes.forEach(function (n) {
        var /** @type {?} */ routeWithSameOutletName = names[n.value.outlet];
        if (routeWithSameOutletName) {
            var /** @type {?} */ p = routeWithSameOutletName.url.map(function (s) { return s.toString(); }).join('/');
            var /** @type {?} */ c = n.value.url.map(function (s) { return s.toString(); }).join('/');
            throw new Error("Two segments cannot have the same outlet name: '" + p + "' and '" + c + "'.");
        }
        names[n.value.outlet] = n.value;
    });
}
/**
 * @param {?} segmentGroup
 * @return {?}
 */
function getSourceSegmentGroup(segmentGroup) {
    var /** @type {?} */ s = segmentGroup;
    while (s._sourceSegment) {
        s = s._sourceSegment;
    }
    return s;
}
/**
 * @param {?} segmentGroup
 * @return {?}
 */
function getPathIndexShift(segmentGroup) {
    var /** @type {?} */ s = segmentGroup;
    var /** @type {?} */ res = (s._segmentIndexShift ? s._segmentIndexShift : 0);
    while (s._sourceSegment) {
        s = s._sourceSegment;
        res += (s._segmentIndexShift ? s._segmentIndexShift : 0);
    }
    return res - 1;
}
/**
 * @param {?} segmentGroup
 * @param {?} consumedSegments
 * @param {?} slicedSegments
 * @param {?} config
 * @return {?}
 */
function split(segmentGroup, consumedSegments, slicedSegments, config) {
    if (slicedSegments.length > 0 &&
        containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
        var /** @type {?} */ s = new __WEBPACK_IMPORTED_MODULE_4__url_tree__["c" /* UrlSegmentGroup */](consumedSegments, createChildrenForEmptyPaths(segmentGroup, consumedSegments, config, new __WEBPACK_IMPORTED_MODULE_4__url_tree__["c" /* UrlSegmentGroup */](slicedSegments, segmentGroup.children)));
        s._sourceSegment = segmentGroup;
        s._segmentIndexShift = consumedSegments.length;
        return { segmentGroup: s, slicedSegments: [] };
    }
    else if (slicedSegments.length === 0 &&
        containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
        var /** @type {?} */ s = new __WEBPACK_IMPORTED_MODULE_4__url_tree__["c" /* UrlSegmentGroup */](segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
        s._sourceSegment = segmentGroup;
        s._segmentIndexShift = consumedSegments.length;
        return { segmentGroup: s, slicedSegments: slicedSegments };
    }
    else {
        var /** @type {?} */ s = new __WEBPACK_IMPORTED_MODULE_4__url_tree__["c" /* UrlSegmentGroup */](segmentGroup.segments, segmentGroup.children);
        s._sourceSegment = segmentGroup;
        s._segmentIndexShift = consumedSegments.length;
        return { segmentGroup: s, slicedSegments: slicedSegments };
    }
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @param {?} children
 * @return {?}
 */
function addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
    var /** @type {?} */ res = {};
    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
        var r = routes_1[_i];
        if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
            var /** @type {?} */ s = new __WEBPACK_IMPORTED_MODULE_4__url_tree__["c" /* UrlSegmentGroup */]([], {});
            s._sourceSegment = segmentGroup;
            s._segmentIndexShift = segmentGroup.segments.length;
            res[getOutlet(r)] = s;
        }
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_collection__["e" /* merge */])(children, res);
}
/**
 * @param {?} segmentGroup
 * @param {?} consumedSegments
 * @param {?} routes
 * @param {?} primarySegment
 * @return {?}
 */
function createChildrenForEmptyPaths(segmentGroup, consumedSegments, routes, primarySegment) {
    var /** @type {?} */ res = {};
    res[__WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */]] = primarySegment;
    primarySegment._sourceSegment = segmentGroup;
    primarySegment._segmentIndexShift = consumedSegments.length;
    for (var _i = 0, routes_2 = routes; _i < routes_2.length; _i++) {
        var r = routes_2[_i];
        if (r.path === '' && getOutlet(r) !== __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */]) {
            var /** @type {?} */ s = new __WEBPACK_IMPORTED_MODULE_4__url_tree__["c" /* UrlSegmentGroup */]([], {});
            s._sourceSegment = segmentGroup;
            s._segmentIndexShift = consumedSegments.length;
            res[getOutlet(r)] = s;
        }
    }
    return res;
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @return {?}
 */
function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes) {
    return routes
        .filter(function (r) { return emptyPathMatch(segmentGroup, slicedSegments, r) &&
        getOutlet(r) !== __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */]; })
        .length > 0;
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @return {?}
 */
function containsEmptyPathMatches(segmentGroup, slicedSegments, routes) {
    return routes.filter(function (r) { return emptyPathMatch(segmentGroup, slicedSegments, r); }).length > 0;
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} r
 * @return {?}
 */
function emptyPathMatch(segmentGroup, slicedSegments, r) {
    if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === 'full')
        return false;
    return r.path === '' && r.redirectTo === undefined;
}
/**
 * @param {?} route
 * @return {?}
 */
function getOutlet(route) {
    return route.outlet ? route.outlet : __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* PRIMARY_OUTLET */];
}
/**
 * @param {?} route
 * @return {?}
 */
function getData(route) {
    return route.data ? route.data : {};
}
/**
 * @param {?} route
 * @return {?}
 */
function getResolve(route) {
    return route.resolve ? route.resolve : {};
}
//# sourceMappingURL=recognize.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/route_reuse_strategy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteReuseStrategy; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 *  *
 * @abstract
 */
var RouteReuseStrategy = (function () {
    function RouteReuseStrategy() {
    }
    /**
     *  Determines if this route (and its subtree) should be detached to be reused later
     * @abstract
     * @param {?} route
     * @return {?}
     */
    RouteReuseStrategy.prototype.shouldDetach = function (route) { };
    /**
     *  Stores the detached route
     * @abstract
     * @param {?} route
     * @param {?} handle
     * @return {?}
     */
    RouteReuseStrategy.prototype.store = function (route, handle) { };
    /**
     *  Determines if this route (and its subtree) should be reattached
     * @abstract
     * @param {?} route
     * @return {?}
     */
    RouteReuseStrategy.prototype.shouldAttach = function (route) { };
    /**
     *  Retrieves the previously stored route
     * @abstract
     * @param {?} route
     * @return {?}
     */
    RouteReuseStrategy.prototype.retrieve = function (route) { };
    /**
     *  Determines if a route should be reused
     * @abstract
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    RouteReuseStrategy.prototype.shouldReuseRoute = function (future, curr) { };
    return RouteReuseStrategy;
}());
//# sourceMappingURL=route_reuse_strategy.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/router.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__ = __webpack_require__("./node_modules/rxjs/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_concatMap__ = __webpack_require__("./node_modules/rxjs/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_concatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_every__ = __webpack_require__("./node_modules/rxjs/operator/every.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_every___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_every__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_first__ = __webpack_require__("./node_modules/rxjs/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__ = __webpack_require__("./node_modules/rxjs/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_reduce__ = __webpack_require__("./node_modules/rxjs/operator/reduce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_operator_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__apply_redirects__ = __webpack_require__("./node_modules/@angular/router/src/apply_redirects.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__config__ = __webpack_require__("./node_modules/@angular/router/src/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__create_router_state__ = __webpack_require__("./node_modules/@angular/router/src/create_router_state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__create_url_tree__ = __webpack_require__("./node_modules/@angular/router/src/create_url_tree.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__recognize__ = __webpack_require__("./node_modules/@angular/router/src/recognize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__router_config_loader__ = __webpack_require__("./node_modules/@angular/router/src/router_config_loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__router_outlet_map__ = __webpack_require__("./node_modules/@angular/router/src/router_outlet_map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__router_state__ = __webpack_require__("./node_modules/@angular/router/src/router_state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared__ = __webpack_require__("./node_modules/@angular/router/src/shared.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__url_handling_strategy__ = __webpack_require__("./node_modules/@angular/router/src/url_handling_strategy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__url_tree__ = __webpack_require__("./node_modules/@angular/router/src/url_tree.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__utils_collection__ = __webpack_require__("./node_modules/@angular/router/src/utils/collection.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NavigationStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavigationEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NavigationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return RoutesRecognized; });
/* unused harmony export DefaultRouteReuseStrategy */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Router; });
/* unused harmony export PreActivation */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */























/**
 *  *
 */
var NavigationStart = (function () {
    /**
     * @param {?} id
     * @param {?} url
     */
    function NavigationStart(id, url) {
        this.id = id;
        this.url = url;
    }
    /**
     * @return {?}
     */
    NavigationStart.prototype.toString = function () { return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')"; };
    return NavigationStart;
}());
function NavigationStart_tsickle_Closure_declarations() {
    /** @type {?} */
    NavigationStart.prototype.id;
    /** @type {?} */
    NavigationStart.prototype.url;
}
/**
 *  *
 */
var NavigationEnd = (function () {
    /**
     * @param {?} id
     * @param {?} url
     * @param {?} urlAfterRedirects
     */
    function NavigationEnd(id, url, urlAfterRedirects) {
        this.id = id;
        this.url = url;
        this.urlAfterRedirects = urlAfterRedirects;
    }
    /**
     * @return {?}
     */
    NavigationEnd.prototype.toString = function () {
        return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')";
    };
    return NavigationEnd;
}());
function NavigationEnd_tsickle_Closure_declarations() {
    /** @type {?} */
    NavigationEnd.prototype.id;
    /** @type {?} */
    NavigationEnd.prototype.url;
    /** @type {?} */
    NavigationEnd.prototype.urlAfterRedirects;
}
/**
 *  *
 */
var NavigationCancel = (function () {
    /**
     * @param {?} id
     * @param {?} url
     * @param {?} reason
     */
    function NavigationCancel(id, url, reason) {
        this.id = id;
        this.url = url;
        this.reason = reason;
    }
    /**
     * @return {?}
     */
    NavigationCancel.prototype.toString = function () { return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')"; };
    return NavigationCancel;
}());
function NavigationCancel_tsickle_Closure_declarations() {
    /** @type {?} */
    NavigationCancel.prototype.id;
    /** @type {?} */
    NavigationCancel.prototype.url;
    /** @type {?} */
    NavigationCancel.prototype.reason;
}
/**
 *  *
 */
var NavigationError = (function () {
    /**
     * @param {?} id
     * @param {?} url
     * @param {?} error
     */
    function NavigationError(id, url, error) {
        this.id = id;
        this.url = url;
        this.error = error;
    }
    /**
     * @return {?}
     */
    NavigationError.prototype.toString = function () {
        return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")";
    };
    return NavigationError;
}());
function NavigationError_tsickle_Closure_declarations() {
    /** @type {?} */
    NavigationError.prototype.id;
    /** @type {?} */
    NavigationError.prototype.url;
    /** @type {?} */
    NavigationError.prototype.error;
}
/**
 *  *
 */
var RoutesRecognized = (function () {
    /**
     * @param {?} id
     * @param {?} url
     * @param {?} urlAfterRedirects
     * @param {?} state
     */
    function RoutesRecognized(id, url, urlAfterRedirects, state) {
        this.id = id;
        this.url = url;
        this.urlAfterRedirects = urlAfterRedirects;
        this.state = state;
    }
    /**
     * @return {?}
     */
    RoutesRecognized.prototype.toString = function () {
        return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
    };
    return RoutesRecognized;
}());
function RoutesRecognized_tsickle_Closure_declarations() {
    /** @type {?} */
    RoutesRecognized.prototype.id;
    /** @type {?} */
    RoutesRecognized.prototype.url;
    /** @type {?} */
    RoutesRecognized.prototype.urlAfterRedirects;
    /** @type {?} */
    RoutesRecognized.prototype.state;
}
/**
 * @param {?} error
 * @return {?}
 */
function defaultErrorHandler(error) {
    throw error;
}
/**
 *  Does not detach any subtrees. Reuses routes as long as their route config is the same.
 */
var DefaultRouteReuseStrategy = (function () {
    function DefaultRouteReuseStrategy() {
    }
    /**
     * @param {?} route
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.shouldDetach = function (route) { return false; };
    /**
     * @param {?} route
     * @param {?} detachedTree
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.store = function (route, detachedTree) { };
    /**
     * @param {?} route
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.shouldAttach = function (route) { return false; };
    /**
     * @param {?} route
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.retrieve = function (route) { return null; };
    /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return future.routeConfig === curr.routeConfig;
    };
    return DefaultRouteReuseStrategy;
}());
/**
 *  *
  * See {@link Routes} for more details and examples.
  * *
  * *
 */
var Router = (function () {
    /**
     * @param {?} rootComponentType
     * @param {?} urlSerializer
     * @param {?} outletMap
     * @param {?} location
     * @param {?} injector
     * @param {?} loader
     * @param {?} compiler
     * @param {?} config
     */
    function Router(rootComponentType, urlSerializer, outletMap, location, injector, loader, compiler, config) {
        this.rootComponentType = rootComponentType;
        this.urlSerializer = urlSerializer;
        this.outletMap = outletMap;
        this.location = location;
        this.injector = injector;
        this.config = config;
        this.navigations = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.routerEvents = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.navigationId = 0;
        /**
         * Error handler that is invoked when a navigation errors.
         *
         * See {@link ErrorHandler} for more information.
         */
        this.errorHandler = defaultErrorHandler;
        /**
         * Indicates if at least one navigation happened.
         */
        this.navigated = false;
        /**
         * Extracts and merges URLs. Used for Angular 1 to Angular 2 migrations.
         */
        this.urlHandlingStrategy = new __WEBPACK_IMPORTED_MODULE_20__url_handling_strategy__["b" /* DefaultUrlHandlingStrategy */]();
        this.routeReuseStrategy = new DefaultRouteReuseStrategy();
        this.resetConfig(config);
        this.currentUrlTree = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21__url_tree__["g" /* createEmptyUrlTree */])();
        this.rawUrlTree = this.currentUrlTree;
        this.configLoader = new __WEBPACK_IMPORTED_MODULE_16__router_config_loader__["b" /* RouterConfigLoader */](loader, compiler);
        this.currentRouterState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__router_state__["e" /* createEmptyState */])(this.currentUrlTree, this.rootComponentType);
        this.processNavigations();
    }
    /**
     *  TODO: this should be removed once the constructor of the router made internal
     * @param {?} rootComponentType
     * @return {?}
     */
    Router.prototype.resetRootComponentType = function (rootComponentType) {
        this.rootComponentType = rootComponentType;
        // TODO: vsavkin router 4.0 should make the root component set to null
        // this will simplify the lifecycle of the router.
        this.currentRouterState.root.component = this.rootComponentType;
    };
    /**
     *  Sets up the location change listener and performs the initial navigation.
     * @return {?}
     */
    Router.prototype.initialNavigation = function () {
        this.setUpLocationChangeListener();
        this.navigateByUrl(this.location.path(true), { replaceUrl: true });
    };
    /**
     *  Sets up the location change listener.
     * @return {?}
     */
    Router.prototype.setUpLocationChangeListener = function () {
        var _this = this;
        // Zone.current.wrap is needed because of the issue with RxJS scheduler,
        // which does not work properly with zone.js in IE and Safari
        if (!this.locationSubscription) {
            this.locationSubscription = (this.location.subscribe(Zone.current.wrap(function (change) {
                var /** @type {?} */ rawUrlTree = _this.urlSerializer.parse(change['url']);
                var /** @type {?} */ lastNavigation = _this.navigations.value;
                // If the user triggers a navigation imperatively (e.g., by using navigateByUrl),
                // and that navigation results in 'replaceState' that leads to the same URL,
                // we should skip those.
                if (lastNavigation && lastNavigation.imperative &&
                    lastNavigation.rawUrl.toString() === rawUrlTree.toString()) {
                    return;
                }
                setTimeout(function () {
                    _this.scheduleNavigation(rawUrlTree, false, { skipLocationChange: change['pop'], replaceUrl: true });
                }, 0);
            })));
        }
    };
    Object.defineProperty(Router.prototype, "routerState", {
        /**
         *  The current route state
         * @return {?}
         */
        get: function () { return this.currentRouterState; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "url", {
        /**
         *  The current url
         * @return {?}
         */
        get: function () { return this.serializeUrl(this.currentUrlTree); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "events", {
        /**
         *  An observable of router events
         * @return {?}
         */
        get: function () { return this.routerEvents; },
        enumerable: true,
        configurable: true
    });
    /**
     *  Resets the configuration used for navigation and generating links.
      * *
      * ### Usage
      * *
      * ```
      * router.resetConfig([
      * { path: 'team/:id', component: TeamCmp, children: [
      * { path: 'simple', component: SimpleCmp },
      * { path: 'user/:name', component: UserCmp }
      * ]}
      * ]);
      * ```
     * @param {?} config
     * @return {?}
     */
    Router.prototype.resetConfig = function (config) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__config__["a" /* validateConfig */])(config);
        this.config = config;
    };
    /**
     * @return {?}
     */
    Router.prototype.ngOnDestroy = function () { this.dispose(); };
    /**
     *  Disposes of the router
     * @return {?}
     */
    Router.prototype.dispose = function () {
        if (this.locationSubscription) {
            this.locationSubscription.unsubscribe();
            this.locationSubscription = null;
        }
    };
    /**
     *  Applies an array of commands to the current url tree and creates a new url tree.
      * *
      * When given an activate route, applies the given commands starting from the route.
      * When not given a route, applies the given command starting from the root.
      * *
      * ### Usage
      * *
      * ```
      * // create /team/33/user/11
      * router.createUrlTree(['/team', 33, 'user', 11]);
      * *
      * // create /team/33;expand=true/user/11
      * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
      * *
      * // you can collapse static segments like this (this works only with the first passed-in value):
      * router.createUrlTree(['/team/33/user', userId]);
      * *
      * // If the first segment can contain slashes, and you do not want the router to split it, you
      * // can do the following:
      * *
      * router.createUrlTree([{segmentPath: '/one/two'}]);
      * *
      * // create /team/33/(user/11//right:chat)
      * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
      * *
      * // remove the right secondary node
      * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
      * *
      * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
      * *
      * // navigate to /team/33/user/11/details
      * router.createUrlTree(['details'], {relativeTo: route});
      * *
      * // navigate to /team/33/user/22
      * router.createUrlTree(['../22'], {relativeTo: route});
      * *
      * // navigate to /team/44/user/22
      * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
      * ```
     * @param {?} commands
     * @param {?=} __1
     * @return {?}
     */
    Router.prototype.createUrlTree = function (commands, _a) {
        var _b = _a === void 0 ? {} : _a, relativeTo = _b.relativeTo, queryParams = _b.queryParams, fragment = _b.fragment, preserveQueryParams = _b.preserveQueryParams, preserveFragment = _b.preserveFragment;
        var /** @type {?} */ a = relativeTo || this.routerState.root;
        var /** @type {?} */ q = preserveQueryParams ? this.currentUrlTree.queryParams : queryParams;
        var /** @type {?} */ f = preserveFragment ? this.currentUrlTree.fragment : fragment;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__create_url_tree__["a" /* createUrlTree */])(a, this.currentUrlTree, commands, q, f);
    };
    /**
     *  Navigate based on the provided url. This navigation is always absolute.
      * *
      * Returns a promise that:
      * - resolves to 'true' when navigation succeeds,
      * - resolves to 'false' when navigation fails,
      * - is rejected when an error happens.
      * *
      * ### Usage
      * *
      * ```
      * router.navigateByUrl("/team/33/user/11");
      * *
      * // Navigate without updating the URL
      * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
      * ```
      * *
      * In opposite to `navigate`, `navigateByUrl` takes a whole URL
      * and does not apply any delta to the current one.
     * @param {?} url
     * @param {?=} extras
     * @return {?}
     */
    Router.prototype.navigateByUrl = function (url, extras) {
        if (extras === void 0) { extras = { skipLocationChange: false }; }
        if (url instanceof __WEBPACK_IMPORTED_MODULE_21__url_tree__["e" /* UrlTree */]) {
            return this.scheduleNavigation(this.urlHandlingStrategy.merge(url, this.rawUrlTree), true, extras);
        }
        var /** @type {?} */ urlTree = this.urlSerializer.parse(url);
        return this.scheduleNavigation(this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree), true, extras);
    };
    /**
     *  Navigate based on the provided array of commands and a starting point.
      * If no starting route is provided, the navigation is absolute.
      * *
      * Returns a promise that:
      * - resolves to 'true' when navigation succeeds,
      * - resolves to 'false' when navigation fails,
      * - is rejected when an error happens.
      * *
      * ### Usage
      * *
      * ```
      * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
      * *
      * // Navigate without updating the URL
      * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
      * ```
      * *
      * In opposite to `navigateByUrl`, `navigate` always takes a delta that is applied to the current
      * URL.
     * @param {?} commands
     * @param {?=} extras
     * @return {?}
     */
    Router.prototype.navigate = function (commands, extras) {
        if (extras === void 0) { extras = { skipLocationChange: false }; }
        if (typeof extras.queryParams === 'object' && extras.queryParams !== null) {
            extras.queryParams = this.removeEmptyProps(extras.queryParams);
        }
        return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
    };
    /**
     *  Serializes a {@link UrlTree} into a string
     * @param {?} url
     * @return {?}
     */
    Router.prototype.serializeUrl = function (url) { return this.urlSerializer.serialize(url); };
    /**
     *  Parses a string into a {@link UrlTree}
     * @param {?} url
     * @return {?}
     */
    Router.prototype.parseUrl = function (url) { return this.urlSerializer.parse(url); };
    /**
     *  Returns whether the url is activated
     * @param {?} url
     * @param {?} exact
     * @return {?}
     */
    Router.prototype.isActive = function (url, exact) {
        if (url instanceof __WEBPACK_IMPORTED_MODULE_21__url_tree__["e" /* UrlTree */]) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21__url_tree__["h" /* containsTree */])(this.currentUrlTree, url, exact);
        }
        else {
            var /** @type {?} */ urlTree = this.urlSerializer.parse(url);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21__url_tree__["h" /* containsTree */])(this.currentUrlTree, urlTree, exact);
        }
    };
    /**
     * @param {?} params
     * @return {?}
     */
    Router.prototype.removeEmptyProps = function (params) {
        return Object.keys(params).reduce(function (result, key) {
            var /** @type {?} */ value = params[key];
            if (value !== null && value !== undefined) {
                result[key] = value;
            }
            return result;
        }, {});
    };
    /**
     * @return {?}
     */
    Router.prototype.processNavigations = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_concatMap__["concatMap"]
            .call(this.navigations, function (nav) {
            if (nav) {
                _this.executeScheduledNavigation(nav);
                // a failed navigation should not stop the router from processing
                // further navigations => the catch
                return nav.promise.catch(function () { });
            }
            else {
                return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(null));
            }
        })
            .subscribe(function () { });
    };
    /**
     * @param {?} rawUrl
     * @param {?} imperative
     * @param {?} extras
     * @return {?}
     */
    Router.prototype.scheduleNavigation = function (rawUrl, imperative, extras) {
        var /** @type {?} */ resolve = null;
        var /** @type {?} */ reject = null;
        var /** @type {?} */ promise = new Promise(function (res, rej) {
            resolve = res;
            reject = rej;
        });
        var /** @type {?} */ id = ++this.navigationId;
        this.navigations.next({ id: id, imperative: imperative, rawUrl: rawUrl, extras: extras, resolve: resolve, reject: reject, promise: promise });
        // Make sure that the error is propagated even though `processNavigations` catch
        // handler does not rethrow
        return promise.catch(function (e) { return Promise.reject(e); });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    Router.prototype.executeScheduledNavigation = function (_a) {
        var _this = this;
        var id = _a.id, rawUrl = _a.rawUrl, extras = _a.extras, resolve = _a.resolve, reject = _a.reject;
        var /** @type {?} */ url = this.urlHandlingStrategy.extract(rawUrl);
        var /** @type {?} */ urlTransition = !this.navigated || url.toString() !== this.currentUrlTree.toString();
        if (urlTransition && this.urlHandlingStrategy.shouldProcessUrl(rawUrl)) {
            this.routerEvents.next(new NavigationStart(id, this.serializeUrl(url)));
            Promise.resolve()
                .then(function (_) { return _this.runNavigate(url, rawUrl, extras.skipLocationChange, extras.replaceUrl, id, null); })
                .then(resolve, reject);
        }
        else if (urlTransition && this.rawUrlTree &&
            this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
            this.routerEvents.next(new NavigationStart(id, this.serializeUrl(url)));
            Promise.resolve()
                .then(function (_) { return _this.runNavigate(url, rawUrl, false, false, id, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__router_state__["e" /* createEmptyState */])(url, _this.rootComponentType).snapshot); })
                .then(resolve, reject);
        }
        else {
            this.rawUrlTree = rawUrl;
            resolve(null);
        }
    };
    /**
     * @param {?} url
     * @param {?} rawUrl
     * @param {?} shouldPreventPushState
     * @param {?} shouldReplaceUrl
     * @param {?} id
     * @param {?} precreatedState
     * @return {?}
     */
    Router.prototype.runNavigate = function (url, rawUrl, shouldPreventPushState, shouldReplaceUrl, id, precreatedState) {
        var _this = this;
        if (id !== this.navigationId) {
            this.location.go(this.urlSerializer.serialize(this.currentUrlTree));
            this.routerEvents.next(new NavigationCancel(id, this.serializeUrl(url), "Navigation ID " + id + " is not equal to the current navigation id " + this.navigationId));
            return Promise.resolve(false);
        }
        return new Promise(function (resolvePromise, rejectPromise) {
            // create an observable of the url and route state snapshot
            // this operation do not result in any side effects
            var /** @type {?} */ urlAndSnapshot$;
            if (!precreatedState) {
                var /** @type {?} */ redirectsApplied$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__apply_redirects__["a" /* applyRedirects */])(_this.injector, _this.configLoader, _this.urlSerializer, url, _this.config);
                urlAndSnapshot$ = __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap__["mergeMap"].call(redirectsApplied$, function (appliedUrl) {
                    return __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__["map"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__recognize__["a" /* recognize */])(_this.rootComponentType, _this.config, appliedUrl, _this.serializeUrl(appliedUrl)), function (snapshot) {
                        _this.routerEvents.next(new RoutesRecognized(id, _this.serializeUrl(url), _this.serializeUrl(appliedUrl), snapshot));
                        return { appliedUrl: appliedUrl, snapshot: snapshot };
                    });
                });
            }
            else {
                urlAndSnapshot$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])({ appliedUrl: url, snapshot: precreatedState });
            }
            // run preactivation: guards and data resolvers
            var /** @type {?} */ preActivation;
            var /** @type {?} */ preactivationTraverse$ = __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__["map"].call(urlAndSnapshot$, function (_a) {
                var appliedUrl = _a.appliedUrl, snapshot = _a.snapshot;
                preActivation =
                    new PreActivation(snapshot, _this.currentRouterState.snapshot, _this.injector);
                preActivation.traverse(_this.outletMap);
                return { appliedUrl: appliedUrl, snapshot: snapshot };
            });
            var /** @type {?} */ preactivationCheckGuards = __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap__["mergeMap"].call(preactivationTraverse$, function (_a) {
                var appliedUrl = _a.appliedUrl, snapshot = _a.snapshot;
                if (_this.navigationId !== id)
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(false);
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__["map"].call(preActivation.checkGuards(), function (shouldActivate) {
                    return { appliedUrl: appliedUrl, snapshot: snapshot, shouldActivate: shouldActivate };
                });
            });
            var /** @type {?} */ preactivationResolveData$ = __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap__["mergeMap"].call(preactivationCheckGuards, function (p) {
                if (_this.navigationId !== id)
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(false);
                if (p.shouldActivate) {
                    return __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__["map"].call(preActivation.resolveData(), function () { return p; });
                }
                else {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(p);
                }
            });
            // create router state
            // this operation has side effects => route state is being affected
            var /** @type {?} */ routerState$ = __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__["map"].call(preactivationResolveData$, function (_a) {
                var appliedUrl = _a.appliedUrl, snapshot = _a.snapshot, shouldActivate = _a.shouldActivate;
                if (shouldActivate) {
                    var /** @type {?} */ state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__create_router_state__["a" /* createRouterState */])(_this.routeReuseStrategy, snapshot, _this.currentRouterState);
                    return { appliedUrl: appliedUrl, state: state, shouldActivate: shouldActivate };
                }
                else {
                    return { appliedUrl: appliedUrl, state: null, shouldActivate: shouldActivate };
                }
            });
            // applied the new router state
            // this operation has side effects
            var /** @type {?} */ navigationIsSuccessful;
            var /** @type {?} */ storedState = _this.currentRouterState;
            var /** @type {?} */ storedUrl = _this.currentUrlTree;
            routerState$
                .forEach(function (_a) {
                var appliedUrl = _a.appliedUrl, state = _a.state, shouldActivate = _a.shouldActivate;
                if (!shouldActivate || id !== _this.navigationId) {
                    navigationIsSuccessful = false;
                    return;
                }
                _this.currentUrlTree = appliedUrl;
                _this.rawUrlTree = _this.urlHandlingStrategy.merge(_this.currentUrlTree, rawUrl);
                _this.currentRouterState = state;
                if (!shouldPreventPushState) {
                    var /** @type {?} */ path = _this.urlSerializer.serialize(_this.rawUrlTree);
                    if (_this.location.isCurrentPathEqualTo(path) || shouldReplaceUrl) {
                        _this.location.replaceState(path);
                    }
                    else {
                        _this.location.go(path);
                    }
                }
                new ActivateRoutes(_this.routeReuseStrategy, state, storedState)
                    .activate(_this.outletMap);
                navigationIsSuccessful = true;
            })
                .then(function () {
                _this.navigated = true;
                if (navigationIsSuccessful) {
                    _this.routerEvents.next(new NavigationEnd(id, _this.serializeUrl(url), _this.serializeUrl(_this.currentUrlTree)));
                    resolvePromise(true);
                }
                else {
                    _this.resetUrlToCurrentUrlTree();
                    _this.routerEvents.next(new NavigationCancel(id, _this.serializeUrl(url), ''));
                    resolvePromise(false);
                }
            }, function (e) {
                if (e instanceof __WEBPACK_IMPORTED_MODULE_19__shared__["b" /* NavigationCancelingError */]) {
                    _this.resetUrlToCurrentUrlTree();
                    _this.navigated = true;
                    _this.routerEvents.next(new NavigationCancel(id, _this.serializeUrl(url), e.message));
                    resolvePromise(false);
                }
                else {
                    _this.routerEvents.next(new NavigationError(id, _this.serializeUrl(url), e));
                    try {
                        resolvePromise(_this.errorHandler(e));
                    }
                    catch (ee) {
                        rejectPromise(ee);
                    }
                }
                _this.currentRouterState = storedState;
                _this.currentUrlTree = storedUrl;
                _this.rawUrlTree = _this.urlHandlingStrategy.merge(_this.currentUrlTree, rawUrl);
                _this.location.replaceState(_this.serializeUrl(_this.rawUrlTree));
            });
        });
    };
    /**
     * @return {?}
     */
    Router.prototype.resetUrlToCurrentUrlTree = function () {
        var /** @type {?} */ path = this.urlSerializer.serialize(this.rawUrlTree);
        this.location.replaceState(path);
    };
    return Router;
}());
function Router_tsickle_Closure_declarations() {
    /** @type {?} */
    Router.prototype.currentUrlTree;
    /** @type {?} */
    Router.prototype.rawUrlTree;
    /** @type {?} */
    Router.prototype.navigations;
    /** @type {?} */
    Router.prototype.routerEvents;
    /** @type {?} */
    Router.prototype.currentRouterState;
    /** @type {?} */
    Router.prototype.locationSubscription;
    /** @type {?} */
    Router.prototype.navigationId;
    /** @type {?} */
    Router.prototype.configLoader;
    /**
     * Error handler that is invoked when a navigation errors.
     * *
     * See {@link ErrorHandler} for more information.
     * @type {?}
     */
    Router.prototype.errorHandler;
    /**
     * Indicates if at least one navigation happened.
     * @type {?}
     */
    Router.prototype.navigated;
    /**
     * Extracts and merges URLs. Used for Angular 1 to Angular 2 migrations.
     * @type {?}
     */
    Router.prototype.urlHandlingStrategy;
    /** @type {?} */
    Router.prototype.routeReuseStrategy;
    /** @type {?} */
    Router.prototype.rootComponentType;
    /** @type {?} */
    Router.prototype.urlSerializer;
    /** @type {?} */
    Router.prototype.outletMap;
    /** @type {?} */
    Router.prototype.location;
    /** @type {?} */
    Router.prototype.injector;
    /** @type {?} */
    Router.prototype.config;
}
var CanActivate = (function () {
    /**
     * @param {?} path
     */
    function CanActivate(path) {
        this.path = path;
    }
    Object.defineProperty(CanActivate.prototype, "route", {
        /**
         * @return {?}
         */
        get: function () { return this.path[this.path.length - 1]; },
        enumerable: true,
        configurable: true
    });
    return CanActivate;
}());
function CanActivate_tsickle_Closure_declarations() {
    /** @type {?} */
    CanActivate.prototype.path;
}
var CanDeactivate = (function () {
    /**
     * @param {?} component
     * @param {?} route
     */
    function CanDeactivate(component, route) {
        this.component = component;
        this.route = route;
    }
    return CanDeactivate;
}());
function CanDeactivate_tsickle_Closure_declarations() {
    /** @type {?} */
    CanDeactivate.prototype.component;
    /** @type {?} */
    CanDeactivate.prototype.route;
}
var PreActivation = (function () {
    /**
     * @param {?} future
     * @param {?} curr
     * @param {?} injector
     */
    function PreActivation(future, curr, injector) {
        this.future = future;
        this.curr = curr;
        this.injector = injector;
        this.checks = [];
    }
    /**
     * @param {?} parentOutletMap
     * @return {?}
     */
    PreActivation.prototype.traverse = function (parentOutletMap) {
        var /** @type {?} */ futureRoot = this.future._root;
        var /** @type {?} */ currRoot = this.curr ? this.curr._root : null;
        this.traverseChildRoutes(futureRoot, currRoot, parentOutletMap, [futureRoot.value]);
    };
    /**
     * @return {?}
     */
    PreActivation.prototype.checkGuards = function () {
        var _this = this;
        if (this.checks.length === 0)
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(true);
        var /** @type {?} */ checks$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__["from"])(this.checks);
        var /** @type {?} */ runningChecks$ = __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap__["mergeMap"].call(checks$, function (s) {
            if (s instanceof CanActivate) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["g" /* andObservables */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__["from"])([_this.runCanActivateChild(s.path), _this.runCanActivate(s.route)]));
            }
            else if (s instanceof CanDeactivate) {
                // workaround https://github.com/Microsoft/TypeScript/issues/7271
                var /** @type {?} */ s2 = (s);
                return _this.runCanDeactivate(s2.component, s2.route);
            }
            else {
                throw new Error('Cannot be reached');
            }
        });
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_every__["every"].call(runningChecks$, function (result) { return result === true; });
    };
    /**
     * @return {?}
     */
    PreActivation.prototype.resolveData = function () {
        var _this = this;
        if (this.checks.length === 0)
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(null);
        var /** @type {?} */ checks$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__["from"])(this.checks);
        var /** @type {?} */ runningChecks$ = __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_concatMap__["concatMap"].call(checks$, function (s) {
            if (s instanceof CanActivate) {
                return _this.runResolve(s.route);
            }
            else {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(null);
            }
        });
        return __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_reduce__["reduce"].call(runningChecks$, function (_, __) { return _; });
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} outletMap
     * @param {?} futurePath
     * @return {?}
     */
    PreActivation.prototype.traverseChildRoutes = function (futureNode, currNode, outletMap, futurePath) {
        var _this = this;
        var /** @type {?} */ prevChildren = nodeChildrenAsMap(currNode);
        futureNode.children.forEach(function (c) {
            _this.traverseRoutes(c, prevChildren[c.value.outlet], outletMap, futurePath.concat([c.value]));
            delete prevChildren[c.value.outlet];
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["d" /* forEach */])(prevChildren, function (v, k) { return _this.deactiveRouteAndItsChildren(v, outletMap._outlets[k]); });
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} parentOutletMap
     * @param {?} futurePath
     * @return {?}
     */
    PreActivation.prototype.traverseRoutes = function (futureNode, currNode, parentOutletMap, futurePath) {
        var /** @type {?} */ future = futureNode.value;
        var /** @type {?} */ curr = currNode ? currNode.value : null;
        var /** @type {?} */ outlet = parentOutletMap ? parentOutletMap._outlets[futureNode.value.outlet] : null;
        // reusing the node
        if (curr && future._routeConfig === curr._routeConfig) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__router_state__["f" /* equalParamsAndUrlSegments */])(future, curr)) {
                this.checks.push(new CanDeactivate(outlet.component, curr), new CanActivate(futurePath));
            }
            else {
                // we need to set the data
                future.data = curr.data;
                future._resolvedData = curr._resolvedData;
            }
            // If we have a component, we need to go through an outlet.
            if (future.component) {
                this.traverseChildRoutes(futureNode, currNode, outlet ? outlet.outletMap : null, futurePath);
            }
            else {
                this.traverseChildRoutes(futureNode, currNode, parentOutletMap, futurePath);
            }
        }
        else {
            if (curr) {
                this.deactiveRouteAndItsChildren(currNode, outlet);
            }
            this.checks.push(new CanActivate(futurePath));
            // If we have a component, we need to go through an outlet.
            if (future.component) {
                this.traverseChildRoutes(futureNode, null, outlet ? outlet.outletMap : null, futurePath);
            }
            else {
                this.traverseChildRoutes(futureNode, null, parentOutletMap, futurePath);
            }
        }
    };
    /**
     * @param {?} route
     * @param {?} outlet
     * @return {?}
     */
    PreActivation.prototype.deactiveRouteAndItsChildren = function (route, outlet) {
        var _this = this;
        var /** @type {?} */ prevChildren = nodeChildrenAsMap(route);
        var /** @type {?} */ r = route.value;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["d" /* forEach */])(prevChildren, function (v, k) {
            if (!r.component) {
                _this.deactiveRouteAndItsChildren(v, outlet);
            }
            else if (!!outlet) {
                _this.deactiveRouteAndItsChildren(v, outlet.outletMap._outlets[k]);
            }
            else {
                _this.deactiveRouteAndItsChildren(v, null);
            }
        });
        if (!r.component) {
            this.checks.push(new CanDeactivate(null, r));
        }
        else if (outlet && outlet.isActivated) {
            this.checks.push(new CanDeactivate(outlet.component, r));
        }
        else {
            this.checks.push(new CanDeactivate(null, r));
        }
    };
    /**
     * @param {?} future
     * @return {?}
     */
    PreActivation.prototype.runCanActivate = function (future) {
        var _this = this;
        var /** @type {?} */ canActivate = future._routeConfig ? future._routeConfig.canActivate : null;
        if (!canActivate || canActivate.length === 0)
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(true);
        var /** @type {?} */ obs = __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__["map"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__["from"])(canActivate), function (c) {
            var /** @type {?} */ guard = _this.getToken(c, future);
            var /** @type {?} */ observable;
            if (guard.canActivate) {
                observable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["b" /* wrapIntoObservable */])(guard.canActivate(future, _this.future));
            }
            else {
                observable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["b" /* wrapIntoObservable */])(guard(future, _this.future));
            }
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_first__["first"].call(observable);
        });
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["g" /* andObservables */])(obs);
    };
    /**
     * @param {?} path
     * @return {?}
     */
    PreActivation.prototype.runCanActivateChild = function (path) {
        var _this = this;
        var /** @type {?} */ future = path[path.length - 1];
        var /** @type {?} */ canActivateChildGuards = path.slice(0, path.length - 1)
            .reverse()
            .map(function (p) { return _this.extractCanActivateChild(p); })
            .filter(function (_) { return _ !== null; });
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["g" /* andObservables */])(__WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__["map"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__["from"])(canActivateChildGuards), function (d) {
            var /** @type {?} */ obs = __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__["map"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__["from"])(d.guards), function (c) {
                var /** @type {?} */ guard = _this.getToken(c, c.node);
                var /** @type {?} */ observable;
                if (guard.canActivateChild) {
                    observable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["b" /* wrapIntoObservable */])(guard.canActivateChild(future, _this.future));
                }
                else {
                    observable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["b" /* wrapIntoObservable */])(guard(future, _this.future));
                }
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_first__["first"].call(observable);
            });
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["g" /* andObservables */])(obs);
        }));
    };
    /**
     * @param {?} p
     * @return {?}
     */
    PreActivation.prototype.extractCanActivateChild = function (p) {
        var /** @type {?} */ canActivateChild = p._routeConfig ? p._routeConfig.canActivateChild : null;
        if (!canActivateChild || canActivateChild.length === 0)
            return null;
        return { node: p, guards: canActivateChild };
    };
    /**
     * @param {?} component
     * @param {?} curr
     * @return {?}
     */
    PreActivation.prototype.runCanDeactivate = function (component, curr) {
        var _this = this;
        var /** @type {?} */ canDeactivate = curr && curr._routeConfig ? curr._routeConfig.canDeactivate : null;
        if (!canDeactivate || canDeactivate.length === 0)
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(true);
        var /** @type {?} */ canDeactivate$ = __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap__["mergeMap"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__["from"])(canDeactivate), function (c) {
            var /** @type {?} */ guard = _this.getToken(c, curr);
            var /** @type {?} */ observable;
            if (guard.canDeactivate) {
                observable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["b" /* wrapIntoObservable */])(guard.canDeactivate(component, curr, _this.curr));
            }
            else {
                observable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["b" /* wrapIntoObservable */])(guard(component, curr, _this.curr));
            }
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_first__["first"].call(observable);
        });
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_every__["every"].call(canDeactivate$, function (result) { return result === true; });
    };
    /**
     * @param {?} future
     * @return {?}
     */
    PreActivation.prototype.runResolve = function (future) {
        var /** @type {?} */ resolve = future._resolve;
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__["map"].call(this.resolveNode(resolve, future), function (resolvedData) {
            future._resolvedData = resolvedData;
            future.data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["e" /* merge */])(future.data, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__router_state__["g" /* inheritedParamsDataResolve */])(future).resolve);
            return null;
        });
    };
    /**
     * @param {?} resolve
     * @param {?} future
     * @return {?}
     */
    PreActivation.prototype.resolveNode = function (resolve, future) {
        var _this = this;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["h" /* waitForMap */])(resolve, function (k, v) {
            var /** @type {?} */ resolver = _this.getToken(v, future);
            return resolver.resolve ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["b" /* wrapIntoObservable */])(resolver.resolve(future, _this.future)) :
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["b" /* wrapIntoObservable */])(resolver(future, _this.future));
        });
    };
    /**
     * @param {?} token
     * @param {?} snapshot
     * @return {?}
     */
    PreActivation.prototype.getToken = function (token, snapshot) {
        var /** @type {?} */ config = closestLoadedConfig(snapshot);
        var /** @type {?} */ injector = config ? config.injector : this.injector;
        return injector.get(token);
    };
    return PreActivation;
}());
function PreActivation_tsickle_Closure_declarations() {
    /** @type {?} */
    PreActivation.prototype.checks;
    /** @type {?} */
    PreActivation.prototype.future;
    /** @type {?} */
    PreActivation.prototype.curr;
    /** @type {?} */
    PreActivation.prototype.injector;
}
var ActivateRoutes = (function () {
    /**
     * @param {?} routeReuseStrategy
     * @param {?} futureState
     * @param {?} currState
     */
    function ActivateRoutes(routeReuseStrategy, futureState, currState) {
        this.routeReuseStrategy = routeReuseStrategy;
        this.futureState = futureState;
        this.currState = currState;
    }
    /**
     * @param {?} parentOutletMap
     * @return {?}
     */
    ActivateRoutes.prototype.activate = function (parentOutletMap) {
        var /** @type {?} */ futureRoot = this.futureState._root;
        var /** @type {?} */ currRoot = this.currState ? this.currState._root : null;
        this.deactivateChildRoutes(futureRoot, currRoot, parentOutletMap);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__router_state__["h" /* advanceActivatedRoute */])(this.futureState.root);
        this.activateChildRoutes(futureRoot, currRoot, parentOutletMap);
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} outletMap
     * @return {?}
     */
    ActivateRoutes.prototype.deactivateChildRoutes = function (futureNode, currNode, outletMap) {
        var _this = this;
        var /** @type {?} */ prevChildren = nodeChildrenAsMap(currNode);
        futureNode.children.forEach(function (c) {
            _this.deactivateRoutes(c, prevChildren[c.value.outlet], outletMap);
            delete prevChildren[c.value.outlet];
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["d" /* forEach */])(prevChildren, function (v, k) { return _this.deactiveRouteAndItsChildren(v, outletMap); });
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} outletMap
     * @return {?}
     */
    ActivateRoutes.prototype.activateChildRoutes = function (futureNode, currNode, outletMap) {
        var _this = this;
        var /** @type {?} */ prevChildren = nodeChildrenAsMap(currNode);
        futureNode.children.forEach(function (c) { _this.activateRoutes(c, prevChildren[c.value.outlet], outletMap); });
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} parentOutletMap
     * @return {?}
     */
    ActivateRoutes.prototype.deactivateRoutes = function (futureNode, currNode, parentOutletMap) {
        var /** @type {?} */ future = futureNode.value;
        var /** @type {?} */ curr = currNode ? currNode.value : null;
        // reusing the node
        if (future === curr) {
            // If we have a normal route, we need to go through an outlet.
            if (future.component) {
                var /** @type {?} */ outlet = getOutlet(parentOutletMap, future);
                this.deactivateChildRoutes(futureNode, currNode, outlet.outletMap);
            }
            else {
                this.deactivateChildRoutes(futureNode, currNode, parentOutletMap);
            }
        }
        else {
            if (curr) {
                this.deactiveRouteAndItsChildren(currNode, parentOutletMap);
            }
        }
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} parentOutletMap
     * @return {?}
     */
    ActivateRoutes.prototype.activateRoutes = function (futureNode, currNode, parentOutletMap) {
        var /** @type {?} */ future = futureNode.value;
        var /** @type {?} */ curr = currNode ? currNode.value : null;
        // reusing the node
        if (future === curr) {
            // advance the route to push the parameters
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__router_state__["h" /* advanceActivatedRoute */])(future);
            // If we have a normal route, we need to go through an outlet.
            if (future.component) {
                var /** @type {?} */ outlet = getOutlet(parentOutletMap, future);
                this.activateChildRoutes(futureNode, currNode, outlet.outletMap);
            }
            else {
                this.activateChildRoutes(futureNode, currNode, parentOutletMap);
            }
        }
        else {
            // if we have a normal route, we need to advance the route
            // and place the component into the outlet. After that recurse.
            if (future.component) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__router_state__["h" /* advanceActivatedRoute */])(future);
                var /** @type {?} */ outlet = getOutlet(parentOutletMap, futureNode.value);
                if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
                    var /** @type {?} */ stored = ((this.routeReuseStrategy.retrieve(future.snapshot)));
                    this.routeReuseStrategy.store(future.snapshot, null);
                    outlet.attach(stored.componentRef, stored.route.value);
                    advanceActivatedRouteNodeAndItsChildren(stored.route);
                }
                else {
                    var /** @type {?} */ outletMap = new __WEBPACK_IMPORTED_MODULE_17__router_outlet_map__["a" /* RouterOutletMap */]();
                    this.placeComponentIntoOutlet(outletMap, future, outlet);
                    this.activateChildRoutes(futureNode, null, outletMap);
                }
            }
            else {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__router_state__["h" /* advanceActivatedRoute */])(future);
                this.activateChildRoutes(futureNode, null, parentOutletMap);
            }
        }
    };
    /**
     * @param {?} outletMap
     * @param {?} future
     * @param {?} outlet
     * @return {?}
     */
    ActivateRoutes.prototype.placeComponentIntoOutlet = function (outletMap, future, outlet) {
        var /** @type {?} */ resolved = ([{ provide: __WEBPACK_IMPORTED_MODULE_18__router_state__["a" /* ActivatedRoute */], useValue: future }, {
                provide: __WEBPACK_IMPORTED_MODULE_17__router_outlet_map__["a" /* RouterOutletMap */],
                useValue: outletMap
            }]);
        var /** @type {?} */ config = parentLoadedConfig(future.snapshot);
        var /** @type {?} */ resolver = null;
        var /** @type {?} */ injector = null;
        if (config) {
            injector = config.injectorFactory(outlet.locationInjector);
            resolver = config.factoryResolver;
            resolved.push({ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], useValue: resolver });
        }
        else {
            injector = outlet.locationInjector;
            resolver = outlet.locationFactoryResolver;
        }
        outlet.activate(future, resolver, injector, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolve(resolved), outletMap);
    };
    /**
     * @param {?} route
     * @param {?} parentOutletMap
     * @return {?}
     */
    ActivateRoutes.prototype.deactiveRouteAndItsChildren = function (route, parentOutletMap) {
        if (this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
            this.detachAndStoreRouteSubtree(route, parentOutletMap);
        }
        else {
            this.deactiveRouteAndOutlet(route, parentOutletMap);
        }
    };
    /**
     * @param {?} route
     * @param {?} parentOutletMap
     * @return {?}
     */
    ActivateRoutes.prototype.detachAndStoreRouteSubtree = function (route, parentOutletMap) {
        var /** @type {?} */ outlet = getOutlet(parentOutletMap, route.value);
        var /** @type {?} */ componentRef = outlet.detach();
        this.routeReuseStrategy.store(route.value.snapshot, { componentRef: componentRef, route: route });
    };
    /**
     * @param {?} route
     * @param {?} parentOutletMap
     * @return {?}
     */
    ActivateRoutes.prototype.deactiveRouteAndOutlet = function (route, parentOutletMap) {
        var _this = this;
        var /** @type {?} */ prevChildren = nodeChildrenAsMap(route);
        var /** @type {?} */ outlet = null;
        // getOutlet throws when cannot find the right outlet,
        // which can happen if an outlet was in an NgIf and was removed
        try {
            outlet = getOutlet(parentOutletMap, route.value);
        }
        catch (e) {
            return;
        }
        var /** @type {?} */ childOutletMap = outlet.outletMap;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__utils_collection__["d" /* forEach */])(prevChildren, function (v, k) {
            if (route.value.component) {
                _this.deactiveRouteAndItsChildren(v, childOutletMap);
            }
            else {
                _this.deactiveRouteAndItsChildren(v, parentOutletMap);
            }
        });
        if (outlet && outlet.isActivated) {
            outlet.deactivate();
        }
    };
    return ActivateRoutes;
}());
function ActivateRoutes_tsickle_Closure_declarations() {
    /** @type {?} */
    ActivateRoutes.prototype.routeReuseStrategy;
    /** @type {?} */
    ActivateRoutes.prototype.futureState;
    /** @type {?} */
    ActivateRoutes.prototype.currState;
}
/**
 * @param {?} node
 * @return {?}
 */
function advanceActivatedRouteNodeAndItsChildren(node) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__router_state__["h" /* advanceActivatedRoute */])(node.value);
    node.children.forEach(advanceActivatedRouteNodeAndItsChildren);
}
/**
 * @param {?} snapshot
 * @return {?}
 */
function parentLoadedConfig(snapshot) {
    var /** @type {?} */ s = snapshot.parent;
    while (s) {
        var /** @type {?} */ c = s._routeConfig;
        if (c && c._loadedConfig)
            return c._loadedConfig;
        if (c && c.component)
            return null;
        s = s.parent;
    }
    return null;
}
/**
 * @param {?} snapshot
 * @return {?}
 */
function closestLoadedConfig(snapshot) {
    if (!snapshot)
        return null;
    var /** @type {?} */ s = snapshot.parent;
    while (s) {
        var /** @type {?} */ c = s._routeConfig;
        if (c && c._loadedConfig)
            return c._loadedConfig;
        s = s.parent;
    }
    return null;
}
/**
 * @param {?} node
 * @return {?}
 */
function nodeChildrenAsMap(node) {
    return node ? node.children.reduce(function (m, c) {
        m[c.value.outlet] = c;
        return m;
    }, {}) : {};
}
/**
 * @param {?} outletMap
 * @param {?} route
 * @return {?}
 */
function getOutlet(outletMap, route) {
    var /** @type {?} */ outlet = outletMap._outlets[route.outlet];
    if (!outlet) {
        var /** @type {?} */ componentName = ((route.component)).name;
        if (route.outlet === __WEBPACK_IMPORTED_MODULE_19__shared__["a" /* PRIMARY_OUTLET */]) {
            throw new Error("Cannot find primary outlet to load '" + componentName + "'");
        }
        else {
            throw new Error("Cannot find the outlet " + route.outlet + " to load '" + componentName + "'");
        }
    }
    return outlet;
}
//# sourceMappingURL=router.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/router_config_loader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise__ = __webpack_require__("./node_modules/rxjs/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__ = __webpack_require__("./node_modules/rxjs/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_collection__ = __webpack_require__("./node_modules/@angular/router/src/utils/collection.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoadedRouterConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RouterConfigLoader; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @experimental
 */
var /** @type {?} */ ROUTES = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('ROUTES');
var LoadedRouterConfig = (function () {
    /**
     * @param {?} routes
     * @param {?} injector
     * @param {?} factoryResolver
     * @param {?} injectorFactory
     */
    function LoadedRouterConfig(routes, injector, factoryResolver, injectorFactory) {
        this.routes = routes;
        this.injector = injector;
        this.factoryResolver = factoryResolver;
        this.injectorFactory = injectorFactory;
    }
    return LoadedRouterConfig;
}());
function LoadedRouterConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    LoadedRouterConfig.prototype.routes;
    /** @type {?} */
    LoadedRouterConfig.prototype.injector;
    /** @type {?} */
    LoadedRouterConfig.prototype.factoryResolver;
    /** @type {?} */
    LoadedRouterConfig.prototype.injectorFactory;
}
var RouterConfigLoader = (function () {
    /**
     * @param {?} loader
     * @param {?} compiler
     */
    function RouterConfigLoader(loader, compiler) {
        this.loader = loader;
        this.compiler = compiler;
    }
    /**
     * @param {?} parentInjector
     * @param {?} loadChildren
     * @return {?}
     */
    RouterConfigLoader.prototype.load = function (parentInjector, loadChildren) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__["map"].call(this.loadModuleFactory(loadChildren), function (r) {
            var /** @type {?} */ ref = r.create(parentInjector);
            var /** @type {?} */ injectorFactory = function (parent) { return r.create(parent).injector; };
            return new LoadedRouterConfig(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_collection__["a" /* flatten */])(ref.injector.get(ROUTES)), ref.injector, ref.componentFactoryResolver, injectorFactory);
        });
    };
    /**
     * @param {?} loadChildren
     * @return {?}
     */
    RouterConfigLoader.prototype.loadModuleFactory = function (loadChildren) {
        var _this = this;
        if (typeof loadChildren === 'string') {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise__["fromPromise"])(this.loader.load(loadChildren));
        }
        else {
            var /** @type {?} */ offlineMode_1 = this.compiler instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"];
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_mergeMap__["mergeMap"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_collection__["b" /* wrapIntoObservable */])(loadChildren()), function (t) { return offlineMode_1 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(/** @type {?} */ (t)) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise__["fromPromise"])(_this.compiler.compileModuleAsync(t)); });
        }
    };
    return RouterConfigLoader;
}());
function RouterConfigLoader_tsickle_Closure_declarations() {
    /** @type {?} */
    RouterConfigLoader.prototype.loader;
    /** @type {?} */
    RouterConfigLoader.prototype.compiler;
}
//# sourceMappingURL=router_config_loader.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/router_module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_router_link__ = __webpack_require__("./node_modules/@angular/router/src/directives/router_link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_router_link_active__ = __webpack_require__("./node_modules/@angular/router/src/directives/router_link_active.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_router_outlet__ = __webpack_require__("./node_modules/@angular/router/src/directives/router_outlet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__private_import_platform_browser__ = __webpack_require__("./node_modules/@angular/router/src/private_import_platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__route_reuse_strategy__ = __webpack_require__("./node_modules/@angular/router/src/route_reuse_strategy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router__ = __webpack_require__("./node_modules/@angular/router/src/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router_config_loader__ = __webpack_require__("./node_modules/@angular/router/src/router_config_loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router_outlet_map__ = __webpack_require__("./node_modules/@angular/router/src/router_outlet_map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__router_preloader__ = __webpack_require__("./node_modules/@angular/router/src/router_preloader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__router_state__ = __webpack_require__("./node_modules/@angular/router/src/router_state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__url_handling_strategy__ = __webpack_require__("./node_modules/@angular/router/src/url_handling_strategy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__url_tree__ = __webpack_require__("./node_modules/@angular/router/src/url_tree.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_collection__ = __webpack_require__("./node_modules/@angular/router/src/utils/collection.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTER_CONFIGURATION; });
/* unused harmony export ROUTER_FORROOT_GUARD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ROUTER_PROVIDERS; });
/* unused harmony export routerNgProbeToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RouterModule; });
/* unused harmony export provideLocationStrategy */
/* unused harmony export provideForRootGuard */
/* harmony export (immutable) */ __webpack_exports__["d"] = provideRoutes;
/* unused harmony export setupRouter */
/* unused harmony export rootRoute */
/* unused harmony export initialRouterNavigation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ROUTER_INITIALIZER; });
/* unused harmony export provideRouterInitializer */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */















/**
 * @whatItDoes Contains a list of directives
 * @stable
 */
var /** @type {?} */ ROUTER_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_4__directives_router_outlet__["a" /* RouterOutlet */], __WEBPACK_IMPORTED_MODULE_2__directives_router_link__["a" /* RouterLink */], __WEBPACK_IMPORTED_MODULE_2__directives_router_link__["b" /* RouterLinkWithHref */], __WEBPACK_IMPORTED_MODULE_3__directives_router_link_active__["a" /* RouterLinkActive */]];
/**
 * @whatItDoes Is used in DI to configure the router.
 * @stable
 */
var /** @type {?} */ ROUTER_CONFIGURATION = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["OpaqueToken"]('ROUTER_CONFIGURATION');
/**
 * @docsNotRequired
 */
var /** @type {?} */ ROUTER_FORROOT_GUARD = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["OpaqueToken"]('ROUTER_FORROOT_GUARD');
var /** @type {?} */ ROUTER_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__angular_common__["Location"],
    { provide: __WEBPACK_IMPORTED_MODULE_13__url_tree__["d" /* UrlSerializer */], useClass: __WEBPACK_IMPORTED_MODULE_13__url_tree__["a" /* DefaultUrlSerializer */] },
    {
        provide: __WEBPACK_IMPORTED_MODULE_7__router__["e" /* Router */],
        useFactory: setupRouter,
        deps: [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_13__url_tree__["d" /* UrlSerializer */], __WEBPACK_IMPORTED_MODULE_9__router_outlet_map__["a" /* RouterOutletMap */], __WEBPACK_IMPORTED_MODULE_0__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModuleFactoryLoader"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["Compiler"], __WEBPACK_IMPORTED_MODULE_8__router_config_loader__["a" /* ROUTES */], ROUTER_CONFIGURATION, [__WEBPACK_IMPORTED_MODULE_12__url_handling_strategy__["a" /* UrlHandlingStrategy */], new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"]()],
            [__WEBPACK_IMPORTED_MODULE_6__route_reuse_strategy__["a" /* RouteReuseStrategy */], new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"]()]
        ]
    },
    __WEBPACK_IMPORTED_MODULE_9__router_outlet_map__["a" /* RouterOutletMap */],
    { provide: __WEBPACK_IMPORTED_MODULE_11__router_state__["a" /* ActivatedRoute */], useFactory: rootRoute, deps: [__WEBPACK_IMPORTED_MODULE_7__router__["e" /* Router */]] },
    { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModuleFactoryLoader"], useClass: __WEBPACK_IMPORTED_MODULE_1__angular_core__["SystemJsNgModuleLoader"] },
    __WEBPACK_IMPORTED_MODULE_10__router_preloader__["d" /* RouterPreloader */],
    __WEBPACK_IMPORTED_MODULE_10__router_preloader__["a" /* NoPreloading */],
    __WEBPACK_IMPORTED_MODULE_10__router_preloader__["b" /* PreloadAllModules */],
    { provide: ROUTER_CONFIGURATION, useValue: { enableTracing: false } },
];
/**
 * @return {?}
 */
function routerNgProbeToken() {
    return new __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgProbeToken"]('Router', __WEBPACK_IMPORTED_MODULE_7__router__["e" /* Router */]);
}
/**
 *  *
  * *
  * RouterModule can be imported multiple times: once per lazily-loaded bundle.
  * Since the router deals with a global shared resource--location, we cannot have
  * more than one router service active.
  * *
  * That is why there are two ways to create the module: `RouterModule.forRoot` and
  * `RouterModule.forChild`.
  * *
  * * `forRoot` creates a module that contains all the directives, the given routes, and the router
  * service itself.
  * * `forChild` creates a module that contains all the directives and the given routes, but does not
  * include the router service.
  * *
  * When registered at the root, the module should be used as follows
  * *
  * ```
  * imports: [RouterModule.forRoot(ROUTES)]
  * })
  * class MyNgModule {}
  * ```
  * *
  * For submodules and lazy loaded submodules the module should be used as follows:
  * *
  * ```
  * imports: [RouterModule.forChild(ROUTES)]
  * })
  * class MyNgModule {}
  * ```
  * *
  * *
  * Managing state transitions is one of the hardest parts of building applications. This is
  * especially true on the web, where you also need to ensure that the state is reflected in the URL.
  * In addition, we often want to split applications into multiple bundles and load them on demand.
  * Doing this transparently is not trivial.
  * *
  * The Angular 2 router solves these problems. Using the router, you can declaratively specify
  * application states, manage state transitions while taking care of the URL, and load bundles on
  * demand.
  * *
  * [Read this developer guide](https://angular.io/docs/ts/latest/guide/router.html) to get an
  * overview of how the router should be used.
  * *
 */
var RouterModule = (function () {
    /**
     * @param {?} guard
     */
    function RouterModule(guard) {
    }
    /**
     *  Creates a module with all the router providers and directives. It also optionally sets up an
      * application listener to perform an initial navigation.
      * *
      * Options:
      * * `enableTracing` makes the router log all its internal events to the console.
      * * `useHash` enables the location strategy that uses the URL fragment instead of the history
      * API.
      * * `initialNavigation` disables the initial navigation.
      * * `errorHandler` provides a custom error handler.
     * @param {?} routes
     * @param {?=} config
     * @return {?}
     */
    RouterModule.forRoot = function (routes, config) {
        return {
            ngModule: RouterModule,
            providers: [
                ROUTER_PROVIDERS,
                provideRoutes(routes),
                {
                    provide: ROUTER_FORROOT_GUARD,
                    useFactory: provideForRootGuard,
                    deps: [[__WEBPACK_IMPORTED_MODULE_7__router__["e" /* Router */], new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_1__angular_core__["SkipSelf"]()]]
                },
                { provide: ROUTER_CONFIGURATION, useValue: config ? config : {} },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_common__["LocationStrategy"],
                    useFactory: provideLocationStrategy,
                    deps: [
                        __WEBPACK_IMPORTED_MODULE_0__angular_common__["PlatformLocation"], [new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"](__WEBPACK_IMPORTED_MODULE_0__angular_common__["APP_BASE_HREF"]), new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"]()], ROUTER_CONFIGURATION
                    ]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_10__router_preloader__["c" /* PreloadingStrategy */],
                    useExisting: config && config.preloadingStrategy ? config.preloadingStrategy :
                        __WEBPACK_IMPORTED_MODULE_10__router_preloader__["a" /* NoPreloading */]
                },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgProbeToken"], multi: true, useFactory: routerNgProbeToken },
                provideRouterInitializer(),
            ],
        };
    };
    /**
     *  Creates a module with all the router directives and a provider registering routes.
     * @param {?} routes
     * @return {?}
     */
    RouterModule.forChild = function (routes) {
        return { ngModule: RouterModule, providers: [provideRoutes(routes)] };
    };
    RouterModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{ declarations: ROUTER_DIRECTIVES, exports: ROUTER_DIRECTIVES },] },
    ];
    /** @nocollapse */
    RouterModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [ROUTER_FORROOT_GUARD,] },] },
    ]; };
    return RouterModule;
}());
function RouterModule_tsickle_Closure_declarations() {
    /** @type {?} */
    RouterModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    RouterModule.ctorParameters;
}
/**
 * @param {?} platformLocationStrategy
 * @param {?} baseHref
 * @param {?=} options
 * @return {?}
 */
function provideLocationStrategy(platformLocationStrategy, baseHref, options) {
    if (options === void 0) { options = {}; }
    return options.useHash ? new __WEBPACK_IMPORTED_MODULE_0__angular_common__["HashLocationStrategy"](platformLocationStrategy, baseHref) :
        new __WEBPACK_IMPORTED_MODULE_0__angular_common__["PathLocationStrategy"](platformLocationStrategy, baseHref);
}
/**
 * @param {?} router
 * @return {?}
 */
function provideForRootGuard(router) {
    if (router) {
        throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
    }
    return 'guarded';
}
/**
 *  *
  * *
  * ```
  * imports: [RouterModule.forChild(ROUTES)],
  * providers: [provideRoutes(EXTRA_ROUTES)]
  * })
  * class MyNgModule {}
  * ```
  * *
 * @param {?} routes
 * @return {?}
 */
function provideRoutes(routes) {
    return [
        { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ANALYZE_FOR_ENTRY_COMPONENTS"], multi: true, useValue: routes },
        { provide: __WEBPACK_IMPORTED_MODULE_8__router_config_loader__["a" /* ROUTES */], multi: true, useValue: routes },
    ];
}
/**
 * @param {?} ref
 * @param {?} urlSerializer
 * @param {?} outletMap
 * @param {?} location
 * @param {?} injector
 * @param {?} loader
 * @param {?} compiler
 * @param {?} config
 * @param {?=} opts
 * @param {?=} urlHandlingStrategy
 * @param {?=} routeReuseStrategy
 * @return {?}
 */
function setupRouter(ref, urlSerializer, outletMap, location, injector, loader, compiler, config, opts, urlHandlingStrategy, routeReuseStrategy) {
    if (opts === void 0) { opts = {}; }
    var /** @type {?} */ router = new __WEBPACK_IMPORTED_MODULE_7__router__["e" /* Router */](null, urlSerializer, outletMap, location, injector, loader, compiler, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils_collection__["a" /* flatten */])(config));
    if (urlHandlingStrategy) {
        router.urlHandlingStrategy = urlHandlingStrategy;
    }
    if (routeReuseStrategy) {
        router.routeReuseStrategy = routeReuseStrategy;
    }
    if (opts.errorHandler) {
        router.errorHandler = opts.errorHandler;
    }
    if (opts.enableTracing) {
        var /** @type {?} */ dom_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__private_import_platform_browser__["a" /* getDOM */])();
        router.events.subscribe(function (e) {
            dom_1.logGroup("Router Event: " + ((e.constructor)).name);
            dom_1.log(e.toString());
            dom_1.log(e);
            dom_1.logGroupEnd();
        });
    }
    return router;
}
/**
 * @param {?} router
 * @return {?}
 */
function rootRoute(router) {
    return router.routerState.root;
}
/**
 * @param {?} router
 * @param {?} ref
 * @param {?} preloader
 * @param {?} opts
 * @return {?}
 */
function initialRouterNavigation(router, ref, preloader, opts) {
    return function (bootstrappedComponentRef) {
        if (bootstrappedComponentRef !== ref.components[0]) {
            return;
        }
        router.resetRootComponentType(ref.componentTypes[0]);
        preloader.setUpPreloading();
        if (opts.initialNavigation === false) {
            router.setUpLocationChangeListener();
        }
        else {
            router.initialNavigation();
        }
    };
}
/**
 * A token for the router initializer that will be called after the app is bootstrapped.
 *
 * @experimental
 */
var /** @type {?} */ ROUTER_INITIALIZER = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["OpaqueToken"]('Router Initializer');
/**
 * @return {?}
 */
function provideRouterInitializer() {
    return [
        {
            provide: ROUTER_INITIALIZER,
            useFactory: initialRouterNavigation,
            deps: [__WEBPACK_IMPORTED_MODULE_7__router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_10__router_preloader__["d" /* RouterPreloader */], ROUTER_CONFIGURATION]
        },
        { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["APP_BOOTSTRAP_LISTENER"], multi: true, useExisting: ROUTER_INITIALIZER },
    ];
}
//# sourceMappingURL=router_module.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/router_outlet_map.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterOutletMap; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 *  *
 */
var RouterOutletMap = (function () {
    function RouterOutletMap() {
        /** @internal */
        this._outlets = {};
    }
    /**
     *  Adds an outlet to this map.
     * @param {?} name
     * @param {?} outlet
     * @return {?}
     */
    RouterOutletMap.prototype.registerOutlet = function (name, outlet) { this._outlets[name] = outlet; };
    /**
     *  Removes an outlet from this map.
     * @param {?} name
     * @return {?}
     */
    RouterOutletMap.prototype.removeOutlet = function (name) { this._outlets[name] = undefined; };
    return RouterOutletMap;
}());
function RouterOutletMap_tsickle_Closure_declarations() {
    /** @type {?} */
    RouterOutletMap.prototype._outlets;
}
//# sourceMappingURL=router_outlet_map.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/router_preloader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_from__ = __webpack_require__("./node_modules/rxjs/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch__ = __webpack_require__("./node_modules/rxjs/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_concatMap__ = __webpack_require__("./node_modules/rxjs/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_concatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_filter__ = __webpack_require__("./node_modules/rxjs/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_mergeAll__ = __webpack_require__("./node_modules/rxjs/operator/mergeAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_mergeAll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_mergeAll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router__ = __webpack_require__("./node_modules/@angular/router/src/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router_config_loader__ = __webpack_require__("./node_modules/@angular/router/src/router_config_loader.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PreloadingStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PreloadAllModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoPreloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RouterPreloader; });
/**
*@license
*Copyright Google Inc. All Rights Reserved.
*
*Use of this source code is governed by an MIT-style license that can be
*found in the LICENSE file at https://angular.io/license
*/










/**
 *  *
 * @abstract
 */
var PreloadingStrategy = (function () {
    function PreloadingStrategy() {
    }
    /**
     * @abstract
     * @param {?} route
     * @param {?} fn
     * @return {?}
     */
    PreloadingStrategy.prototype.preload = function (route, fn) { };
    return PreloadingStrategy;
}());
/**
 *  *
  * *
  * ```
  * RouteModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  * ```
  * *
 */
var PreloadAllModules = (function () {
    function PreloadAllModules() {
    }
    /**
     * @param {?} route
     * @param {?} fn
     * @return {?}
     */
    PreloadAllModules.prototype.preload = function (route, fn) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_catch__["_catch"].call(fn(), function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(null); });
    };
    return PreloadAllModules;
}());
/**
 *  *
  * *
  * This strategy is enabled by default.
  * *
 */
var NoPreloading = (function () {
    function NoPreloading() {
    }
    /**
     * @param {?} route
     * @param {?} fn
     * @return {?}
     */
    NoPreloading.prototype.preload = function (route, fn) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(null); };
    return NoPreloading;
}());
/**
 *  The preloader optimistically loads all router configurations to
  * make navigations into lazily-loaded sections of the application faster.
  * *
  * The preloader runs in the background. When the router bootstraps, the preloader
  * starts listening to all navigation events. After every such event, the preloader
  * will check if any configurations can be loaded lazily.
  * *
  * If a route is protected by `canLoad` guards, the preloaded will not load it.
  * *
 */
var RouterPreloader = (function () {
    /**
     * @param {?} router
     * @param {?} moduleLoader
     * @param {?} compiler
     * @param {?} injector
     * @param {?} preloadingStrategy
     */
    function RouterPreloader(router, moduleLoader, compiler, injector, preloadingStrategy) {
        this.router = router;
        this.injector = injector;
        this.preloadingStrategy = preloadingStrategy;
        this.loader = new __WEBPACK_IMPORTED_MODULE_9__router_config_loader__["b" /* RouterConfigLoader */](moduleLoader, compiler);
    }
    ;
    /**
     * @return {?}
     */
    RouterPreloader.prototype.setUpPreloading = function () {
        var _this = this;
        var /** @type {?} */ navigations = __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_filter__["filter"].call(this.router.events, function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_8__router__["b" /* NavigationEnd */]; });
        this.subscription = __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_concatMap__["concatMap"].call(navigations, function () { return _this.preload(); }).subscribe(function (v) { });
    };
    /**
     * @return {?}
     */
    RouterPreloader.prototype.preload = function () { return this.processRoutes(this.injector, this.router.config); };
    /**
     * @return {?}
     */
    RouterPreloader.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
    /**
     * @param {?} injector
     * @param {?} routes
     * @return {?}
     */
    RouterPreloader.prototype.processRoutes = function (injector, routes) {
        var /** @type {?} */ res = [];
        for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
            var c = routes_1[_i];
            // we already have the config loaded, just recurce
            if (c.loadChildren && !c.canLoad && ((c))._loadedConfig) {
                var /** @type {?} */ childConfig = ((c))._loadedConfig;
                res.push(this.processRoutes(childConfig.injector, childConfig.routes));
            }
            else if (c.loadChildren && !c.canLoad) {
                res.push(this.preloadConfig(injector, c));
            }
            else if (c.children) {
                res.push(this.processRoutes(injector, c.children));
            }
        }
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_mergeAll__["mergeAll"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_from__["from"])(res));
    };
    /**
     * @param {?} injector
     * @param {?} route
     * @return {?}
     */
    RouterPreloader.prototype.preloadConfig = function (injector, route) {
        var _this = this;
        return this.preloadingStrategy.preload(route, function () {
            var /** @type {?} */ loaded = _this.loader.load(injector, route.loadChildren);
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeMap__["mergeMap"].call(loaded, function (config) {
                var /** @type {?} */ c = route;
                c._loadedConfig = config;
                return _this.processRoutes(config.injector, config.routes);
            });
        });
    };
    RouterPreloader.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    RouterPreloader.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_8__router__["e" /* Router */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleFactoryLoader"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
        { type: PreloadingStrategy, },
    ]; };
    return RouterPreloader;
}());
function RouterPreloader_tsickle_Closure_declarations() {
    /** @type {?} */
    RouterPreloader.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    RouterPreloader.ctorParameters;
    /** @type {?} */
    RouterPreloader.prototype.loader;
    /** @type {?} */
    RouterPreloader.prototype.subscription;
    /** @type {?} */
    RouterPreloader.prototype.router;
    /** @type {?} */
    RouterPreloader.prototype.injector;
    /** @type {?} */
    RouterPreloader.prototype.preloadingStrategy;
}
//# sourceMappingURL=router_preloader.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/router_state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("./node_modules/@angular/router/src/shared.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__url_tree__ = __webpack_require__("./node_modules/@angular/router/src/url_tree.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_collection__ = __webpack_require__("./node_modules/@angular/router/src/utils/collection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_tree__ = __webpack_require__("./node_modules/@angular/router/src/utils/tree.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RouterState; });
/* harmony export (immutable) */ __webpack_exports__["e"] = createEmptyState;
/* unused harmony export createEmptyStateSnapshot */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivatedRoute; });
/* harmony export (immutable) */ __webpack_exports__["g"] = inheritedParamsDataResolve;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActivatedRouteSnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RouterStateSnapshot; });
/* harmony export (immutable) */ __webpack_exports__["h"] = advanceActivatedRoute;
/* harmony export (immutable) */ __webpack_exports__["f"] = equalParamsAndUrlSegments;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





/**
 *  *
  * *
  * ```
  * class MyComponent {
  * constructor(router: Router) {
  * const state: RouterState = router.routerState;
  * const root: ActivatedRoute = state.root;
  * const child = root.firstChild;
  * const id: Observable<string> = child.params.map(p => p.id);
  * //...
  * }
  * }
  * ```
  * *
  * RouterState is a tree of activated routes. Every node in this tree knows about the "consumed" URL
  * segments,
  * the extracted parameters, and the resolved data.
  * *
  * See {@link ActivatedRoute} for more information.
  * *
 */
var RouterState = (function (_super) {
    __extends(RouterState, _super);
    /**
     * @param {?} root
     * @param {?} snapshot
     */
    function RouterState(root, snapshot) {
        _super.call(this, root);
        this.snapshot = snapshot;
        setRouterStateSnapshot(this, root);
    }
    /**
     * @return {?}
     */
    RouterState.prototype.toString = function () { return this.snapshot.toString(); };
    return RouterState;
}(__WEBPACK_IMPORTED_MODULE_4__utils_tree__["a" /* Tree */]));
function RouterState_tsickle_Closure_declarations() {
    /**
     * The current snapshot of the router state
     * @type {?}
     */
    RouterState.prototype.snapshot;
}
/**
 * @param {?} urlTree
 * @param {?} rootComponent
 * @return {?}
 */
function createEmptyState(urlTree, rootComponent) {
    var /** @type {?} */ snapshot = createEmptyStateSnapshot(urlTree, rootComponent);
    var /** @type {?} */ emptyUrl = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"]([new __WEBPACK_IMPORTED_MODULE_2__url_tree__["b" /* UrlSegment */]('', {})]);
    var /** @type {?} */ emptyParams = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    var /** @type {?} */ emptyData = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    var /** @type {?} */ emptyQueryParams = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    var /** @type {?} */ fragment = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"]('');
    var /** @type {?} */ activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* PRIMARY_OUTLET */], rootComponent, snapshot.root);
    activated.snapshot = snapshot.root;
    return new RouterState(new __WEBPACK_IMPORTED_MODULE_4__utils_tree__["b" /* TreeNode */](activated, []), snapshot);
}
/**
 * @param {?} urlTree
 * @param {?} rootComponent
 * @return {?}
 */
function createEmptyStateSnapshot(urlTree, rootComponent) {
    var /** @type {?} */ emptyParams = {};
    var /** @type {?} */ emptyData = {};
    var /** @type {?} */ emptyQueryParams = {};
    var /** @type {?} */ fragment = '';
    var /** @type {?} */ activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* PRIMARY_OUTLET */], rootComponent, null, urlTree.root, -1, {});
    return new RouterStateSnapshot('', new __WEBPACK_IMPORTED_MODULE_4__utils_tree__["b" /* TreeNode */](activated, []));
}
/**
 *  outlet.
  * An `ActivatedRoute` can also be used to traverse the router state tree.
  * *
  * *
  * ```
  * class MyComponent {
  * constructor(route: ActivatedRoute) {
  * const id: Observable<string> = route.params.map(p => p.id);
  * const url: Observable<string> = route.url.map(segments => segments.join(''));
  * // route.data includes both `data` and `resolve`
  * const user = route.data.map(d => d.user);
  * }
  * }
  * ```
  * *
 */
var ActivatedRoute = (function () {
    /**
     * @param {?} url
     * @param {?} params
     * @param {?} queryParams
     * @param {?} fragment
     * @param {?} data
     * @param {?} outlet
     * @param {?} component
     * @param {?} futureSnapshot
     */
    function ActivatedRoute(url, params, queryParams, fragment, data, outlet, component, futureSnapshot) {
        this.url = url;
        this.params = params;
        this.queryParams = queryParams;
        this.fragment = fragment;
        this.data = data;
        this.outlet = outlet;
        this.component = component;
        this._futureSnapshot = futureSnapshot;
    }
    Object.defineProperty(ActivatedRoute.prototype, "routeConfig", {
        /**
         *  The configuration used to match this route
         * @return {?}
         */
        get: function () { return this._futureSnapshot.routeConfig; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "root", {
        /**
         *  The root of the router state
         * @return {?}
         */
        get: function () { return this._routerState.root; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "parent", {
        /**
         *  The parent of this route in the router state tree
         * @return {?}
         */
        get: function () { return this._routerState.parent(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "firstChild", {
        /**
         *  The first child of this route in the router state tree
         * @return {?}
         */
        get: function () { return this._routerState.firstChild(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "children", {
        /**
         *  The children of this route in the router state tree
         * @return {?}
         */
        get: function () { return this._routerState.children(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "pathFromRoot", {
        /**
         *  The path from the root of the router state tree to this route
         * @return {?}
         */
        get: function () { return this._routerState.pathFromRoot(this); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ActivatedRoute.prototype.toString = function () {
        return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")";
    };
    return ActivatedRoute;
}());
function ActivatedRoute_tsickle_Closure_declarations() {
    /**
     * The current snapshot of this route
     * @type {?}
     */
    ActivatedRoute.prototype.snapshot;
    /** @type {?} */
    ActivatedRoute.prototype._futureSnapshot;
    /** @type {?} */
    ActivatedRoute.prototype._routerState;
    /**
     * An observable of the URL segments matched by this route
     * @type {?}
     */
    ActivatedRoute.prototype.url;
    /**
     * An observable of the matrix parameters scoped to this route
     * @type {?}
     */
    ActivatedRoute.prototype.params;
    /**
     * An observable of the query parameters shared by all the routes
     * @type {?}
     */
    ActivatedRoute.prototype.queryParams;
    /**
     * An observable of the URL fragment shared by all the routes
     * @type {?}
     */
    ActivatedRoute.prototype.fragment;
    /**
     * An observable of the static and resolved data of this route.
     * @type {?}
     */
    ActivatedRoute.prototype.data;
    /**
     * The outlet name of the route. It's a constant
     * @type {?}
     */
    ActivatedRoute.prototype.outlet;
    /** @type {?} */
    ActivatedRoute.prototype.component;
}
/**
 * @param {?} route
 * @return {?}
 */
function inheritedParamsDataResolve(route) {
    var /** @type {?} */ pathToRoot = route.pathFromRoot;
    var /** @type {?} */ inhertingStartingFrom = pathToRoot.length - 1;
    while (inhertingStartingFrom >= 1) {
        var /** @type {?} */ current = pathToRoot[inhertingStartingFrom];
        var /** @type {?} */ parent_1 = pathToRoot[inhertingStartingFrom - 1];
        // current route is an empty path => inherits its parent's params and data
        if (current.routeConfig && current.routeConfig.path === '') {
            inhertingStartingFrom--;
        }
        else if (!parent_1.component) {
            inhertingStartingFrom--;
        }
        else {
            break;
        }
    }
    return pathToRoot.slice(inhertingStartingFrom).reduce(function (res, curr) {
        var /** @type {?} */ params = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_collection__["e" /* merge */])(res.params, curr.params);
        var /** @type {?} */ data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_collection__["e" /* merge */])(res.data, curr.data);
        var /** @type {?} */ resolve = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_collection__["e" /* merge */])(res.resolve, curr._resolvedData);
        return { params: params, data: data, resolve: resolve };
    }, /** @type {?} */ ({ params: {}, data: {}, resolve: {} }));
}
/**
 *  outlet
  * at a particular moment in time. ActivatedRouteSnapshot can also be used to traverse the router
  * state tree.
  * *
  * *
  * ```
  * class MyComponent {
  * constructor(route: ActivatedRoute) {
  * const id: string = route.snapshot.params.id;
  * const url: string = route.snapshot.url.join('');
  * const user = route.snapshot.data.user;
  * }
  * }
  * ```
  * *
 */
var ActivatedRouteSnapshot = (function () {
    /**
     * @param {?} url
     * @param {?} params
     * @param {?} queryParams
     * @param {?} fragment
     * @param {?} data
     * @param {?} outlet
     * @param {?} component
     * @param {?} routeConfig
     * @param {?} urlSegment
     * @param {?} lastPathIndex
     * @param {?} resolve
     */
    function ActivatedRouteSnapshot(url, params, queryParams, fragment, data, outlet, component, routeConfig, urlSegment, lastPathIndex, resolve) {
        this.url = url;
        this.params = params;
        this.queryParams = queryParams;
        this.fragment = fragment;
        this.data = data;
        this.outlet = outlet;
        this.component = component;
        this._routeConfig = routeConfig;
        this._urlSegment = urlSegment;
        this._lastPathIndex = lastPathIndex;
        this._resolve = resolve;
    }
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "routeConfig", {
        /**
         *  The configuration used to match this route
         * @return {?}
         */
        get: function () { return this._routeConfig; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "root", {
        /**
         *  The root of the router state
         * @return {?}
         */
        get: function () { return this._routerState.root; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "parent", {
        /**
         *  The parent of this route in the router state tree
         * @return {?}
         */
        get: function () { return this._routerState.parent(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "firstChild", {
        /**
         *  The first child of this route in the router state tree
         * @return {?}
         */
        get: function () { return this._routerState.firstChild(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "children", {
        /**
         *  The children of this route in the router state tree
         * @return {?}
         */
        get: function () { return this._routerState.children(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "pathFromRoot", {
        /**
         *  The path from the root of the router state tree to this route
         * @return {?}
         */
        get: function () { return this._routerState.pathFromRoot(this); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ActivatedRouteSnapshot.prototype.toString = function () {
        var /** @type {?} */ url = this.url.map(function (segment) { return segment.toString(); }).join('/');
        var /** @type {?} */ matched = this._routeConfig ? this._routeConfig.path : '';
        return "Route(url:'" + url + "', path:'" + matched + "')";
    };
    return ActivatedRouteSnapshot;
}());
function ActivatedRouteSnapshot_tsickle_Closure_declarations() {
    /** @type {?} */
    ActivatedRouteSnapshot.prototype._routeConfig;
    /** @type {?} */
    ActivatedRouteSnapshot.prototype._urlSegment;
    /** @type {?} */
    ActivatedRouteSnapshot.prototype._lastPathIndex;
    /** @type {?} */
    ActivatedRouteSnapshot.prototype._resolve;
    /** @type {?} */
    ActivatedRouteSnapshot.prototype._resolvedData;
    /** @type {?} */
    ActivatedRouteSnapshot.prototype._routerState;
    /**
     * The URL segments matched by this route
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.url;
    /**
     * The matrix parameters scoped to this route
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.params;
    /**
     * The query parameters shared by all the routes
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.queryParams;
    /**
     * The URL fragment shared by all the routes
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.fragment;
    /**
     * The static and resolved data of this route
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.data;
    /**
     * The outlet name of the route
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.outlet;
    /**
     * The component of the route
     * @type {?}
     */
    ActivatedRouteSnapshot.prototype.component;
}
/**
 *  *
  * *
  * ```
  * class MyComponent {
  * constructor(router: Router) {
  * const state: RouterState = router.routerState;
  * const snapshot: RouterStateSnapshot = state.snapshot;
  * const root: ActivatedRouteSnapshot = snapshot.root;
  * const child = root.firstChild;
  * const id: Observable<string> = child.params.map(p => p.id);
  * //...
  * }
  * }
  * ```
  * *
  * RouterStateSnapshot is a tree of activated route snapshots. Every node in this tree knows about
  * the "consumed" URL segments, the extracted parameters, and the resolved data.
  * *
 */
var RouterStateSnapshot = (function (_super) {
    __extends(RouterStateSnapshot, _super);
    /**
     * @param {?} url
     * @param {?} root
     */
    function RouterStateSnapshot(url, root) {
        _super.call(this, root);
        this.url = url;
        setRouterStateSnapshot(this, root);
    }
    /**
     * @return {?}
     */
    RouterStateSnapshot.prototype.toString = function () { return serializeNode(this._root); };
    return RouterStateSnapshot;
}(__WEBPACK_IMPORTED_MODULE_4__utils_tree__["a" /* Tree */]));
function RouterStateSnapshot_tsickle_Closure_declarations() {
    /**
     * The url from which this snapshot was created
     * @type {?}
     */
    RouterStateSnapshot.prototype.url;
}
/**
 * @param {?} state
 * @param {?} node
 * @return {?}
 */
function setRouterStateSnapshot(state, node) {
    node.value._routerState = state;
    node.children.forEach(function (c) { return setRouterStateSnapshot(state, c); });
}
/**
 * @param {?} node
 * @return {?}
 */
function serializeNode(node) {
    var /** @type {?} */ c = node.children.length > 0 ? " { " + node.children.map(serializeNode).join(", ") + " } " : '';
    return "" + node.value + c;
}
/**
 *  The expectation is that the activate route is created with the right set of parameters.
  * So we push new values into the observables only when they are not the initial values.
  * And we detect that by checking if the snapshot field is set.
 * @param {?} route
 * @return {?}
 */
function advanceActivatedRoute(route) {
    if (route.snapshot) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_collection__["c" /* shallowEqual */])(route.snapshot.queryParams, route._futureSnapshot.queryParams)) {
            ((route.queryParams)).next(route._futureSnapshot.queryParams);
        }
        if (route.snapshot.fragment !== route._futureSnapshot.fragment) {
            ((route.fragment)).next(route._futureSnapshot.fragment);
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_collection__["c" /* shallowEqual */])(route.snapshot.params, route._futureSnapshot.params)) {
            ((route.params)).next(route._futureSnapshot.params);
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_collection__["f" /* shallowEqualArrays */])(route.snapshot.url, route._futureSnapshot.url)) {
            ((route.url)).next(route._futureSnapshot.url);
        }
        if (!equalParamsAndUrlSegments(route.snapshot, route._futureSnapshot)) {
            ((route.data)).next(route._futureSnapshot.data);
        }
        route.snapshot = route._futureSnapshot;
    }
    else {
        route.snapshot = route._futureSnapshot;
        // this is for resolved data
        ((route.data)).next(route._futureSnapshot.data);
    }
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function equalParamsAndUrlSegments(a, b) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_collection__["c" /* shallowEqual */])(a.params, b.params) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__url_tree__["f" /* equalSegments */])(a.url, b.url);
}
//# sourceMappingURL=router_state.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/shared.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRIMARY_OUTLET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavigationCancelingError; });
/* harmony export (immutable) */ __webpack_exports__["c"] = defaultUrlMatcher;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @whatItDoes Name of the primary outlet.
 *
 * @stable
 */
var /** @type {?} */ PRIMARY_OUTLET = 'primary';
var NavigationCancelingError = (function (_super) {
    __extends(NavigationCancelingError, _super);
    /**
     * @param {?} message
     */
    function NavigationCancelingError(message) {
        _super.call(this, message);
        this.message = message;
        this.stack = (new Error(message)).stack;
    }
    /**
     * @return {?}
     */
    NavigationCancelingError.prototype.toString = function () { return this.message; };
    return NavigationCancelingError;
}(Error));
function NavigationCancelingError_tsickle_Closure_declarations() {
    /** @type {?} */
    NavigationCancelingError.prototype.stack;
    /** @type {?} */
    NavigationCancelingError.prototype.message;
}
/**
 * @param {?} segments
 * @param {?} segmentGroup
 * @param {?} route
 * @return {?}
 */
function defaultUrlMatcher(segments, segmentGroup, route) {
    var /** @type {?} */ path = route.path;
    var /** @type {?} */ parts = path.split('/');
    var /** @type {?} */ posParams = {};
    var /** @type {?} */ consumed = [];
    var /** @type {?} */ currentIndex = 0;
    for (var /** @type {?} */ i = 0; i < parts.length; ++i) {
        if (currentIndex >= segments.length)
            return null;
        var /** @type {?} */ current = segments[currentIndex];
        var /** @type {?} */ p = parts[i];
        var /** @type {?} */ isPosParam = p.startsWith(':');
        if (!isPosParam && p !== current.path)
            return null;
        if (isPosParam) {
            posParams[p.substring(1)] = current;
        }
        consumed.push(current);
        currentIndex++;
    }
    if (route.pathMatch === 'full' &&
        (segmentGroup.hasChildren() || currentIndex < segments.length)) {
        return null;
    }
    else {
        return { consumed: consumed, posParams: posParams };
    }
}
//# sourceMappingURL=shared.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/url_handling_strategy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlHandlingStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DefaultUrlHandlingStrategy; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 *  *
 * @abstract
 */
var UrlHandlingStrategy = (function () {
    function UrlHandlingStrategy() {
    }
    /**
     *  Tells the router if this URL should be processed.
      * *
      * When it returns true, the router will execute the regular navigation.
      * When it returns false, the router will set the router state to an empty state.
      * As a result, all the active components will be destroyed.
      * *
     * @abstract
     * @param {?} url
     * @return {?}
     */
    UrlHandlingStrategy.prototype.shouldProcessUrl = function (url) { };
    /**
     *  Extracts the part of the URL that should be handled by the router.
      * The rest of the URL will remain untouched.
     * @abstract
     * @param {?} url
     * @return {?}
     */
    UrlHandlingStrategy.prototype.extract = function (url) { };
    /**
     *  Merges the URL fragment with the rest of the URL.
     * @abstract
     * @param {?} newUrlPart
     * @param {?} rawUrl
     * @return {?}
     */
    UrlHandlingStrategy.prototype.merge = function (newUrlPart, rawUrl) { };
    return UrlHandlingStrategy;
}());
/**
 * @experimental
 */
var DefaultUrlHandlingStrategy = (function () {
    function DefaultUrlHandlingStrategy() {
    }
    /**
     * @param {?} url
     * @return {?}
     */
    DefaultUrlHandlingStrategy.prototype.shouldProcessUrl = function (url) { return true; };
    /**
     * @param {?} url
     * @return {?}
     */
    DefaultUrlHandlingStrategy.prototype.extract = function (url) { return url; };
    /**
     * @param {?} newUrlPart
     * @param {?} wholeUrl
     * @return {?}
     */
    DefaultUrlHandlingStrategy.prototype.merge = function (newUrlPart, wholeUrl) { return newUrlPart; };
    return DefaultUrlHandlingStrategy;
}());
//# sourceMappingURL=url_handling_strategy.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/url_tree.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared__ = __webpack_require__("./node_modules/@angular/router/src/shared.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_collection__ = __webpack_require__("./node_modules/@angular/router/src/utils/collection.js");
/* harmony export (immutable) */ __webpack_exports__["g"] = createEmptyUrlTree;
/* harmony export (immutable) */ __webpack_exports__["h"] = containsTree;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UrlTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UrlSegmentGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UrlSegment; });
/* harmony export (immutable) */ __webpack_exports__["f"] = equalSegments;
/* unused harmony export equalPath */
/* harmony export (immutable) */ __webpack_exports__["i"] = mapChildrenIntoArray;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UrlSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultUrlSerializer; });
/* unused harmony export serializePaths */
/* unused harmony export encode */
/* unused harmony export decode */
/* unused harmony export serializePath */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @return {?}
 */
function createEmptyUrlTree() {
    return new UrlTree(new UrlSegmentGroup([], {}), {}, null);
}
/**
 * @param {?} container
 * @param {?} containee
 * @param {?} exact
 * @return {?}
 */
function containsTree(container, containee, exact) {
    if (exact) {
        return equalQueryParams(container.queryParams, containee.queryParams) &&
            equalSegmentGroups(container.root, containee.root);
    }
    return containsQueryParams(container.queryParams, containee.queryParams) &&
        containsSegmentGroup(container.root, containee.root);
}
/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */
function equalQueryParams(container, containee) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_collection__["c" /* shallowEqual */])(container, containee);
}
/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */
function equalSegmentGroups(container, containee) {
    if (!equalPath(container.segments, containee.segments))
        return false;
    if (container.numberOfChildren !== containee.numberOfChildren)
        return false;
    for (var c in containee.children) {
        if (!container.children[c])
            return false;
        if (!equalSegmentGroups(container.children[c], containee.children[c]))
            return false;
    }
    return true;
}
/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */
function containsQueryParams(container, containee) {
    return Object.keys(containee) <= Object.keys(container) &&
        Object.keys(containee).every(function (key) { return containee[key] === container[key]; });
}
/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */
function containsSegmentGroup(container, containee) {
    return containsSegmentGroupHelper(container, containee, containee.segments);
}
/**
 * @param {?} container
 * @param {?} containee
 * @param {?} containeePaths
 * @return {?}
 */
function containsSegmentGroupHelper(container, containee, containeePaths) {
    if (container.segments.length > containeePaths.length) {
        var /** @type {?} */ current = container.segments.slice(0, containeePaths.length);
        if (!equalPath(current, containeePaths))
            return false;
        if (containee.hasChildren())
            return false;
        return true;
    }
    else if (container.segments.length === containeePaths.length) {
        if (!equalPath(container.segments, containeePaths))
            return false;
        for (var c in containee.children) {
            if (!container.children[c])
                return false;
            if (!containsSegmentGroup(container.children[c], containee.children[c]))
                return false;
        }
        return true;
    }
    else {
        var /** @type {?} */ current = containeePaths.slice(0, container.segments.length);
        var /** @type {?} */ next = containeePaths.slice(container.segments.length);
        if (!equalPath(container.segments, current))
            return false;
        if (!container.children[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]])
            return false;
        return containsSegmentGroupHelper(container.children[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]], containee, next);
    }
}
/**
 *  *
  * *
  * ```
  * class MyComponent {
  * constructor(router: Router) {
  * const tree: UrlTree =
  * router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
  * const f = tree.fragment; // return 'fragment'
  * const q = tree.queryParams; // returns {debug: 'true'}
  * const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
  * const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
  * g.children[PRIMARY_OUTLET].segments; // returns 2 segments 'user' and 'victor'
  * g.children['support'].segments; // return 1 segment 'help'
  * }
  * }
  * ```
  * *
  * *
  * Since a router state is a tree, and the URL is nothing but a serialized state, the URL is a
  * serialized tree.
  * UrlTree is a data structure that provides a lot of affordances in dealing with URLs
  * *
 */
var UrlTree = (function () {
    /**
     * @param {?} root
     * @param {?} queryParams
     * @param {?} fragment
     */
    function UrlTree(root, queryParams, fragment) {
        this.root = root;
        this.queryParams = queryParams;
        this.fragment = fragment;
    }
    /**
     * @return {?}
     */
    UrlTree.prototype.toString = function () { return new DefaultUrlSerializer().serialize(this); };
    return UrlTree;
}());
function UrlTree_tsickle_Closure_declarations() {
    /**
     * The root segment group of the URL tree
     * @type {?}
     */
    UrlTree.prototype.root;
    /**
     * The query params of the URL
     * @type {?}
     */
    UrlTree.prototype.queryParams;
    /**
     * The fragment of the URL
     * @type {?}
     */
    UrlTree.prototype.fragment;
}
/**
 *  *
  * See {@link UrlTree} for more information.
  * *
 */
var UrlSegmentGroup = (function () {
    /**
     * @param {?} segments
     * @param {?} children
     */
    function UrlSegmentGroup(segments, children) {
        var _this = this;
        this.segments = segments;
        this.children = children;
        /** The parent node in the url tree */
        this.parent = null;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_collection__["d" /* forEach */])(children, function (v, k) { return v.parent = _this; });
    }
    /**
     *  Wether the segment has child segments
     * @return {?}
     */
    UrlSegmentGroup.prototype.hasChildren = function () { return this.numberOfChildren > 0; };
    Object.defineProperty(UrlSegmentGroup.prototype, "numberOfChildren", {
        /**
         *  Number of child segments
         * @return {?}
         */
        get: function () { return Object.keys(this.children).length; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UrlSegmentGroup.prototype.toString = function () { return serializePaths(this); };
    return UrlSegmentGroup;
}());
function UrlSegmentGroup_tsickle_Closure_declarations() {
    /** @type {?} */
    UrlSegmentGroup.prototype._sourceSegment;
    /** @type {?} */
    UrlSegmentGroup.prototype._segmentIndexShift;
    /**
     * The parent node in the url tree
     * @type {?}
     */
    UrlSegmentGroup.prototype.parent;
    /**
     * The URL segments of this group. See {@link UrlSegment} for more information
     * @type {?}
     */
    UrlSegmentGroup.prototype.segments;
    /**
     * The list of children of this group
     * @type {?}
     */
    UrlSegmentGroup.prototype.children;
}
/**
 *  *
  * *
  * ```
  * class MyComponent {
  * constructor(router: Router) {
  * const tree: UrlTree = router.parseUrl('/team;id=33');
  * const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
  * const s: UrlSegment[] = g.segments;
  * s[0].path; // returns 'team'
  * s[0].parameters; // returns {id: 33}
  * }
  * }
  * ```
  * *
  * *
  * A UrlSegment is a part of a URL between the two slashes. It contains a path and the matrix
  * parameters associated with the segment.
  * *
 */
var UrlSegment = (function () {
    /**
     * @param {?} path
     * @param {?} parameters
     */
    function UrlSegment(path, parameters) {
        this.path = path;
        this.parameters = parameters;
    }
    /**
     * @return {?}
     */
    UrlSegment.prototype.toString = function () { return serializePath(this); };
    return UrlSegment;
}());
function UrlSegment_tsickle_Closure_declarations() {
    /**
     * The path part of a URL segment
     * @type {?}
     */
    UrlSegment.prototype.path;
    /**
     * The matrix parameters associated with a segment
     * @type {?}
     */
    UrlSegment.prototype.parameters;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function equalSegments(a, b) {
    if (a.length !== b.length)
        return false;
    for (var /** @type {?} */ i = 0; i < a.length; ++i) {
        if (a[i].path !== b[i].path)
            return false;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_collection__["c" /* shallowEqual */])(a[i].parameters, b[i].parameters))
            return false;
    }
    return true;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function equalPath(a, b) {
    if (a.length !== b.length)
        return false;
    for (var /** @type {?} */ i = 0; i < a.length; ++i) {
        if (a[i].path !== b[i].path)
            return false;
    }
    return true;
}
/**
 * @param {?} segment
 * @param {?} fn
 * @return {?}
 */
function mapChildrenIntoArray(segment, fn) {
    var /** @type {?} */ res = [];
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_collection__["d" /* forEach */])(segment.children, function (child, childOutlet) {
        if (childOutlet === __WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_collection__["d" /* forEach */])(segment.children, function (child, childOutlet) {
        if (childOutlet !== __WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    return res;
}
/**
 *  *
  * make all URLs case insensitive by providing a custom UrlSerializer.
  * *
  * See {@link DefaultUrlSerializer} for an example of a URL serializer.
  * *
 * @abstract
 */
var UrlSerializer = (function () {
    function UrlSerializer() {
    }
    /**
     *  Parse a url into a {@link UrlTree}
     * @abstract
     * @param {?} url
     * @return {?}
     */
    UrlSerializer.prototype.parse = function (url) { };
    /**
     *  Converts a {@link UrlTree} into a url
     * @abstract
     * @param {?} tree
     * @return {?}
     */
    UrlSerializer.prototype.serialize = function (tree) { };
    return UrlSerializer;
}());
/**
 *  *
  * *
  * Example URLs:
  * *
  * ```
  * /inbox/33(popup:compose)
  * /inbox/33;open=true/messages/44
  * ```
  * *
  * DefaultUrlSerializer uses parentheses to serialize secondary segments (e.g., popup:compose), the
  * colon syntax to specify the outlet, and the ';parameter=value' syntax (e.g., open=true) to
  * specify route specific parameters.
  * *
 */
var DefaultUrlSerializer = (function () {
    function DefaultUrlSerializer() {
    }
    /**
     *  Parses a url into a {@link UrlTree}
     * @param {?} url
     * @return {?}
     */
    DefaultUrlSerializer.prototype.parse = function (url) {
        var /** @type {?} */ p = new UrlParser(url);
        return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
    };
    /**
     *  Converts a {@link UrlTree} into a url
     * @param {?} tree
     * @return {?}
     */
    DefaultUrlSerializer.prototype.serialize = function (tree) {
        var /** @type {?} */ segment = "/" + serializeSegment(tree.root, true);
        var /** @type {?} */ query = serializeQueryParams(tree.queryParams);
        var /** @type {?} */ fragment = tree.fragment !== null && tree.fragment !== undefined ? "#" + encodeURI(tree.fragment) : '';
        return "" + segment + query + fragment;
    };
    return DefaultUrlSerializer;
}());
/**
 * @param {?} segment
 * @return {?}
 */
function serializePaths(segment) {
    return segment.segments.map(function (p) { return serializePath(p); }).join('/');
}
/**
 * @param {?} segment
 * @param {?} root
 * @return {?}
 */
function serializeSegment(segment, root) {
    if (segment.hasChildren() && root) {
        var /** @type {?} */ primary = segment.children[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]] ?
            serializeSegment(segment.children[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]], false) :
            '';
        var /** @type {?} */ children_1 = [];
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_collection__["d" /* forEach */])(segment.children, function (v, k) {
            if (k !== __WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]) {
                children_1.push(k + ":" + serializeSegment(v, false));
            }
        });
        if (children_1.length > 0) {
            return primary + "(" + children_1.join('//') + ")";
        }
        else {
            return "" + primary;
        }
    }
    else if (segment.hasChildren() && !root) {
        var /** @type {?} */ children = mapChildrenIntoArray(segment, function (v, k) {
            if (k === __WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]) {
                return [serializeSegment(segment.children[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]], false)];
            }
            else {
                return [(k + ":" + serializeSegment(v, false))];
            }
        });
        return serializePaths(segment) + "/(" + children.join('//') + ")";
    }
    else {
        return serializePaths(segment);
    }
}
/**
 * @param {?} s
 * @return {?}
 */
function encode(s) {
    return encodeURIComponent(s);
}
/**
 * @param {?} s
 * @return {?}
 */
function decode(s) {
    return decodeURIComponent(s);
}
/**
 * @param {?} path
 * @return {?}
 */
function serializePath(path) {
    return "" + encode(path.path) + serializeParams(path.parameters);
}
/**
 * @param {?} params
 * @return {?}
 */
function serializeParams(params) {
    return pairs(params).map(function (p) { return (";" + encode(p.first) + "=" + encode(p.second)); }).join('');
}
/**
 * @param {?} params
 * @return {?}
 */
function serializeQueryParams(params) {
    var /** @type {?} */ strParams = Object.keys(params).map(function (name) {
        var /** @type {?} */ value = params[name];
        return Array.isArray(value) ? value.map(function (v) { return (encode(name) + "=" + encode(v)); }).join('&') :
            encode(name) + "=" + encode(value);
    });
    return strParams.length ? "?" + strParams.join("&") : '';
}
var Pair = (function () {
    /**
     * @param {?} first
     * @param {?} second
     */
    function Pair(first, second) {
        this.first = first;
        this.second = second;
    }
    return Pair;
}());
function Pair_tsickle_Closure_declarations() {
    /** @type {?} */
    Pair.prototype.first;
    /** @type {?} */
    Pair.prototype.second;
}
/**
 * @param {?} obj
 * @return {?}
 */
function pairs(obj) {
    var /** @type {?} */ res = [];
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            res.push(new Pair(prop, obj[prop]));
        }
    }
    return res;
}
var /** @type {?} */ SEGMENT_RE = /^[^\/()?;=&#]+/;
/**
 * @param {?} str
 * @return {?}
 */
function matchSegments(str) {
    SEGMENT_RE.lastIndex = 0;
    var /** @type {?} */ match = str.match(SEGMENT_RE);
    return match ? match[0] : '';
}
var /** @type {?} */ QUERY_PARAM_RE = /^[^=?&#]+/;
/**
 * @param {?} str
 * @return {?}
 */
function matchQueryParams(str) {
    QUERY_PARAM_RE.lastIndex = 0;
    var /** @type {?} */ match = str.match(SEGMENT_RE);
    return match ? match[0] : '';
}
var /** @type {?} */ QUERY_PARAM_VALUE_RE = /^[^?&#]+/;
/**
 * @param {?} str
 * @return {?}
 */
function matchUrlQueryParamValue(str) {
    QUERY_PARAM_VALUE_RE.lastIndex = 0;
    var /** @type {?} */ match = str.match(QUERY_PARAM_VALUE_RE);
    return match ? match[0] : '';
}
var UrlParser = (function () {
    /**
     * @param {?} url
     */
    function UrlParser(url) {
        this.url = url;
        this.remaining = url;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    UrlParser.prototype.peekStartsWith = function (str) { return this.remaining.startsWith(str); };
    /**
     * @param {?} str
     * @return {?}
     */
    UrlParser.prototype.capture = function (str) {
        if (!this.remaining.startsWith(str)) {
            throw new Error("Expected \"" + str + "\".");
        }
        this.remaining = this.remaining.substring(str.length);
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseRootSegment = function () {
        if (this.remaining.startsWith('/')) {
            this.capture('/');
        }
        if (this.remaining === '' || this.remaining.startsWith('?') || this.remaining.startsWith('#')) {
            return new UrlSegmentGroup([], {});
        }
        return new UrlSegmentGroup([], this.parseChildren());
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseChildren = function () {
        if (this.remaining.length == 0) {
            return {};
        }
        if (this.peekStartsWith('/')) {
            this.capture('/');
        }
        var /** @type {?} */ paths = [];
        if (!this.peekStartsWith('(')) {
            paths.push(this.parseSegments());
        }
        while (this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(')) {
            this.capture('/');
            paths.push(this.parseSegments());
        }
        var /** @type {?} */ children = {};
        if (this.peekStartsWith('/(')) {
            this.capture('/');
            children = this.parseParens(true);
        }
        var /** @type {?} */ res = {};
        if (this.peekStartsWith('(')) {
            res = this.parseParens(false);
        }
        if (paths.length > 0 || Object.keys(children).length > 0) {
            res[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]] = new UrlSegmentGroup(paths, children);
        }
        return res;
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseSegments = function () {
        var /** @type {?} */ path = matchSegments(this.remaining);
        if (path === '' && this.peekStartsWith(';')) {
            throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
        }
        this.capture(path);
        var /** @type {?} */ matrixParams = {};
        if (this.peekStartsWith(';')) {
            matrixParams = this.parseMatrixParams();
        }
        return new UrlSegment(decode(path), matrixParams);
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseQueryParams = function () {
        var /** @type {?} */ params = {};
        if (this.peekStartsWith('?')) {
            this.capture('?');
            this.parseQueryParam(params);
            while (this.remaining.length > 0 && this.peekStartsWith('&')) {
                this.capture('&');
                this.parseQueryParam(params);
            }
        }
        return params;
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseFragment = function () {
        if (this.peekStartsWith('#')) {
            return decodeURI(this.remaining.substring(1));
        }
        return null;
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseMatrixParams = function () {
        var /** @type {?} */ params = {};
        while (this.remaining.length > 0 && this.peekStartsWith(';')) {
            this.capture(';');
            this.parseParam(params);
        }
        return params;
    };
    /**
     * @param {?} params
     * @return {?}
     */
    UrlParser.prototype.parseParam = function (params) {
        var /** @type {?} */ key = matchSegments(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        var /** @type {?} */ value = '';
        if (this.peekStartsWith('=')) {
            this.capture('=');
            var /** @type {?} */ valueMatch = matchSegments(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        params[decode(key)] = decode(value);
    };
    /**
     * @param {?} params
     * @return {?}
     */
    UrlParser.prototype.parseQueryParam = function (params) {
        var /** @type {?} */ key = matchQueryParams(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        var /** @type {?} */ value = '';
        if (this.peekStartsWith('=')) {
            this.capture('=');
            var /** @type {?} */ valueMatch = matchUrlQueryParamValue(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        var /** @type {?} */ decodedKey = decode(key);
        var /** @type {?} */ decodedVal = decode(value);
        if (params.hasOwnProperty(decodedKey)) {
            // Append to existing values
            var /** @type {?} */ currentVal = params[decodedKey];
            if (!Array.isArray(currentVal)) {
                currentVal = [currentVal];
                params[decodedKey] = currentVal;
            }
            currentVal.push(decodedVal);
        }
        else {
            // Create a new value
            params[decodedKey] = decodedVal;
        }
    };
    /**
     * @param {?} allowPrimary
     * @return {?}
     */
    UrlParser.prototype.parseParens = function (allowPrimary) {
        var /** @type {?} */ segments = {};
        this.capture('(');
        while (!this.peekStartsWith(')') && this.remaining.length > 0) {
            var /** @type {?} */ path = matchSegments(this.remaining);
            var /** @type {?} */ next = this.remaining[path.length];
            // if is is not one of these characters, then the segment was unescaped
            // or the group was not closed
            if (next !== '/' && next !== ')' && next !== ';') {
                throw new Error("Cannot parse url '" + this.url + "'");
            }
            var /** @type {?} */ outletName = void 0;
            if (path.indexOf(':') > -1) {
                outletName = path.substr(0, path.indexOf(':'));
                this.capture(outletName);
                this.capture(':');
            }
            else if (allowPrimary) {
                outletName = __WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */];
            }
            var /** @type {?} */ children = this.parseChildren();
            segments[outletName] = Object.keys(children).length === 1 ? children[__WEBPACK_IMPORTED_MODULE_0__shared__["a" /* PRIMARY_OUTLET */]] :
                new UrlSegmentGroup([], children);
            if (this.peekStartsWith('//')) {
                this.capture('//');
            }
        }
        this.capture(')');
        return segments;
    };
    return UrlParser;
}());
function UrlParser_tsickle_Closure_declarations() {
    /** @type {?} */
    UrlParser.prototype.remaining;
    /** @type {?} */
    UrlParser.prototype.url;
}
//# sourceMappingURL=url_tree.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/utils/collection.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise__ = __webpack_require__("./node_modules/rxjs/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_concatAll__ = __webpack_require__("./node_modules/rxjs/operator/concatAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_concatAll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_concatAll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_every__ = __webpack_require__("./node_modules/rxjs/operator/every.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_every___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_every__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_last__ = __webpack_require__("./node_modules/rxjs/operator/last.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_last___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_last__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__ = __webpack_require__("./node_modules/rxjs/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeAll__ = __webpack_require__("./node_modules/rxjs/operator/mergeAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeAll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeAll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("./node_modules/@angular/router/src/shared.js");
/* harmony export (immutable) */ __webpack_exports__["f"] = shallowEqualArrays;
/* harmony export (immutable) */ __webpack_exports__["c"] = shallowEqual;
/* harmony export (immutable) */ __webpack_exports__["a"] = flatten;
/* unused harmony export first */
/* harmony export (immutable) */ __webpack_exports__["i"] = last;
/* unused harmony export and */
/* harmony export (immutable) */ __webpack_exports__["e"] = merge;
/* harmony export (immutable) */ __webpack_exports__["d"] = forEach;
/* harmony export (immutable) */ __webpack_exports__["h"] = waitForMap;
/* harmony export (immutable) */ __webpack_exports__["g"] = andObservables;
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapIntoObservable;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function shallowEqualArrays(a, b) {
    if (a.length !== b.length)
        return false;
    for (var /** @type {?} */ i = 0; i < a.length; ++i) {
        if (!shallowEqual(a[i], b[i]))
            return false;
    }
    return true;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function shallowEqual(a, b) {
    var /** @type {?} */ k1 = Object.keys(a);
    var /** @type {?} */ k2 = Object.keys(b);
    if (k1.length != k2.length) {
        return false;
    }
    var /** @type {?} */ key;
    for (var /** @type {?} */ i = 0; i < k1.length; i++) {
        key = k1[i];
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} a
 * @return {?}
 */
function flatten(a) {
    var /** @type {?} */ target = [];
    for (var /** @type {?} */ i = 0; i < a.length; ++i) {
        for (var /** @type {?} */ j = 0; j < a[i].length; ++j) {
            target.push(a[i][j]);
        }
    }
    return target;
}
/**
 * @param {?} a
 * @return {?}
 */
function first(a) {
    return a.length > 0 ? a[0] : null;
}
/**
 * @param {?} a
 * @return {?}
 */
function last(a) {
    return a.length > 0 ? a[a.length - 1] : null;
}
/**
 * @param {?} bools
 * @return {?}
 */
function and(bools) {
    return !bools.some(function (v) { return !v; });
}
/**
 * @param {?} m1
 * @param {?} m2
 * @return {?}
 */
function merge(m1, m2) {
    var /** @type {?} */ m = {};
    for (var attr in m1) {
        if (m1.hasOwnProperty(attr)) {
            m[attr] = m1[attr];
        }
    }
    for (var attr in m2) {
        if (m2.hasOwnProperty(attr)) {
            m[attr] = m2[attr];
        }
    }
    return m;
}
/**
 * @param {?} map
 * @param {?} callback
 * @return {?}
 */
function forEach(map, callback) {
    for (var prop in map) {
        if (map.hasOwnProperty(prop)) {
            callback(map[prop], prop);
        }
    }
}
/**
 * @param {?} obj
 * @param {?} fn
 * @return {?}
 */
function waitForMap(obj, fn) {
    var /** @type {?} */ waitFor = [];
    var /** @type {?} */ res = {};
    forEach(obj, function (a, k) {
        if (k === __WEBPACK_IMPORTED_MODULE_8__shared__["a" /* PRIMARY_OUTLET */]) {
            waitFor.push(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(fn(k, a), function (_) {
                res[k] = _;
                return _;
            }));
        }
    });
    forEach(obj, function (a, k) {
        if (k !== __WEBPACK_IMPORTED_MODULE_8__shared__["a" /* PRIMARY_OUTLET */]) {
            waitFor.push(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(fn(k, a), function (_) {
                res[k] = _;
                return _;
            }));
        }
    });
    if (waitFor.length > 0) {
        var /** @type {?} */ concatted$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_concatAll__["concatAll"].call(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"].apply(void 0, waitFor));
        var /** @type {?} */ last$ = __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_last__["last"].call(concatted$);
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_map__["map"].call(last$, function () { return res; });
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(res);
}
/**
 * @param {?} observables
 * @return {?}
 */
function andObservables(observables) {
    var /** @type {?} */ merged$ = __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_mergeAll__["mergeAll"].call(observables);
    return __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_every__["every"].call(merged$, function (result) { return result === true; });
}
/**
 * @param {?} value
 * @return {?}
 */
function wrapIntoObservable(value) {
    if (value instanceof __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"]) {
        return value;
    }
    if (value instanceof Promise) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise__["fromPromise"])(value);
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(value);
}
//# sourceMappingURL=collection.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/utils/tree.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TreeNode; });
/**
 * @license undefined
  * Copyright Google Inc. All Rights Reserved.
  * *
  * Use of this source code is governed by an MIT-style license that can be
  * found in the LICENSE file at https://angular.io/license
 */
var Tree = (function () {
    /**
     * @param {?} root
     */
    function Tree(root) {
        this._root = root;
    }
    Object.defineProperty(Tree.prototype, "root", {
        /**
         * @return {?}
         */
        get: function () { return this._root.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.parent = function (t) {
        var /** @type {?} */ p = this.pathFromRoot(t);
        return p.length > 1 ? p[p.length - 2] : null;
    };
    /**
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.children = function (t) {
        var /** @type {?} */ n = findNode(t, this._root);
        return n ? n.children.map(function (t) { return t.value; }) : [];
    };
    /**
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.firstChild = function (t) {
        var /** @type {?} */ n = findNode(t, this._root);
        return n && n.children.length > 0 ? n.children[0].value : null;
    };
    /**
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.siblings = function (t) {
        var /** @type {?} */ p = findPath(t, this._root, []);
        if (p.length < 2)
            return [];
        var /** @type {?} */ c = p[p.length - 2].children.map(function (c) { return c.value; });
        return c.filter(function (cc) { return cc !== t; });
    };
    /**
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.pathFromRoot = function (t) { return findPath(t, this._root, []).map(function (s) { return s.value; }); };
    return Tree;
}());
function Tree_tsickle_Closure_declarations() {
    /** @type {?} */
    Tree.prototype._root;
}
/**
 * @param {?} expected
 * @param {?} c
 * @return {?}
 */
function findNode(expected, c) {
    if (expected === c.value)
        return c;
    for (var _i = 0, _a = c.children; _i < _a.length; _i++) {
        var cc = _a[_i];
        var /** @type {?} */ r = findNode(expected, cc);
        if (r)
            return r;
    }
    return null;
}
/**
 * @param {?} expected
 * @param {?} c
 * @param {?} collected
 * @return {?}
 */
function findPath(expected, c, collected) {
    collected.push(c);
    if (expected === c.value)
        return collected;
    for (var _i = 0, _a = c.children; _i < _a.length; _i++) {
        var cc = _a[_i];
        var /** @type {?} */ cloned = collected.slice(0);
        var /** @type {?} */ r = findPath(expected, cc, cloned);
        if (r.length > 0)
            return r;
    }
    return [];
}
var TreeNode = (function () {
    /**
     * @param {?} value
     * @param {?} children
     */
    function TreeNode(value, children) {
        this.value = value;
        this.children = children;
    }
    /**
     * @return {?}
     */
    TreeNode.prototype.toString = function () { return "TreeNode(" + this.value + ")"; };
    return TreeNode;
}());
function TreeNode_tsickle_Closure_declarations() {
    /** @type {?} */
    TreeNode.prototype.value;
    /** @type {?} */
    TreeNode.prototype.children;
}
//# sourceMappingURL=tree.js.map

/***/ }),

/***/ "./node_modules/@angular/router/src/version.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VERSION; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @stable
 */
var /** @type {?} */ VERSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Version"]('3.3.1');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js?sourceMap!./node_modules/sass-loader/index.js?sourceMap!./src/components/hw-app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ "./node_modules/rxjs/BehaviorSubject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("./node_modules/rxjs/Subject.js");
var ObjectUnsubscribedError_1 = __webpack_require__("./node_modules/rxjs/util/ObjectUnsubscribedError.js");
/**
 * @class BehaviorSubject<T>
 */
var BehaviorSubject = (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        _super.call(this);
        this._value = _value;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(Subject_1.Subject));
exports.BehaviorSubject = BehaviorSubject;
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/InnerSubscriber.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("./node_modules/rxjs/Subscriber.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var InnerSubscriber = (function (_super) {
    __extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        _super.call(this);
        this.parent = parent;
        this.outerValue = outerValue;
        this.outerIndex = outerIndex;
        this.index = 0;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(Subscriber_1.Subscriber));
exports.InnerSubscriber = InnerSubscriber;
//# sourceMappingURL=InnerSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/Notification.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
/**
 * Represents a push-based event or value that an {@link Observable} can emit.
 * This class is particularly useful for operators that manage notifications,
 * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
 * others. Besides wrapping the actual delivered value, it also annotates it
 * with metadata of, for instance, what type of push message it is (`next`,
 * `error`, or `complete`).
 *
 * @see {@link materialize}
 * @see {@link dematerialize}
 * @see {@link observeOn}
 *
 * @class Notification<T>
 */
var Notification = (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    /**
     * Delivers to the given `observer` the value wrapped by this Notification.
     * @param {Observer} observer
     * @return
     */
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    /**
     * Given some {@link Observer} callbacks, deliver the value represented by the
     * current Notification to the correctly corresponding callback.
     * @param {function(value: T): void} next An Observer `next` callback.
     * @param {function(err: any): void} [error] An Observer `error` callback.
     * @param {function(): void} [complete] An Observer `complete` callback.
     * @return {any}
     */
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    /**
     * Takes an Observer or its individual callback functions, and calls `observe`
     * or `do` methods accordingly.
     * @param {Observer|function(value: T): void} nextOrObserver An Observer or
     * the `next` callback.
     * @param {function(err: any): void} [error] An Observer `error` callback.
     * @param {function(): void} [complete] An Observer `complete` callback.
     * @return {any}
     */
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    /**
     * Returns a simple Observable that just delivers the notification represented
     * by this Notification instance.
     * @return {any}
     */
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return Observable_1.Observable.of(this.value);
            case 'E':
                return Observable_1.Observable.throw(this.error);
            case 'C':
                return Observable_1.Observable.empty();
        }
        throw new Error('unexpected notification kind value');
    };
    /**
     * A shortcut to create a Notification instance of the type `next` from a
     * given value.
     * @param {T} value The `next` value.
     * @return {Notification<T>} The "next" Notification representing the
     * argument.
     */
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return this.undefinedValueNotification;
    };
    /**
     * A shortcut to create a Notification instance of the type `error` from a
     * given error.
     * @param {any} [err] The `error` error.
     * @return {Notification<T>} The "error" Notification representing the
     * argument.
     */
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    /**
     * A shortcut to create a Notification instance of the type `complete`.
     * @return {Notification<any>} The valueless "complete" Notification.
     */
    Notification.createComplete = function () {
        return this.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}());
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ "./node_modules/rxjs/Observable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("./node_modules/rxjs/util/root.js");
var toSubscriber_1 = __webpack_require__("./node_modules/rxjs/util/toSubscriber.js");
var observable_1 = __webpack_require__("./node_modules/rxjs/symbol/observable.js");
/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is  called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this._subscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            var subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable_1.$$observable] = function () {
        return this;
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/Observer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/OuterSubscriber.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("./node_modules/rxjs/Subscriber.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var OuterSubscriber = (function (_super) {
    __extends(OuterSubscriber, _super);
    function OuterSubscriber() {
        _super.apply(this, arguments);
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(Subscriber_1.Subscriber));
exports.OuterSubscriber = OuterSubscriber;
//# sourceMappingURL=OuterSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/Subject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var Subscriber_1 = __webpack_require__("./node_modules/rxjs/Subscriber.js");
var Subscription_1 = __webpack_require__("./node_modules/rxjs/Subscription.js");
var ObjectUnsubscribedError_1 = __webpack_require__("./node_modules/rxjs/util/ObjectUnsubscribedError.js");
var SubjectSubscription_1 = __webpack_require__("./node_modules/rxjs/SubjectSubscription.js");
var rxSubscriber_1 = __webpack_require__("./node_modules/rxjs/symbol/rxSubscriber.js");
/**
 * @class SubjectSubscriber<T>
 */
var SubjectSubscriber = (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        _super.call(this, destination);
        this.destination = destination;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber));
exports.SubjectSubscriber = SubjectSubscriber;
/**
 * @class Subject<T>
 */
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        _super.call(this);
        this.observers = [];
        this.closed = false;
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
/**
 * @class AnonymousSubject<T>
 */
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        _super.call(this);
        this.destination = destination;
        this.source = source;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));
exports.AnonymousSubject = AnonymousSubject;
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/rxjs/SubjectSubscription.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__("./node_modules/rxjs/Subscription.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubjectSubscription = (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        _super.call(this);
        this.subject = subject;
        this.subscriber = subscriber;
        this.closed = false;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription));
exports.SubjectSubscription = SubjectSubscription;
//# sourceMappingURL=SubjectSubscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/Subscriber.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = __webpack_require__("./node_modules/rxjs/util/isFunction.js");
var Subscription_1 = __webpack_require__("./node_modules/rxjs/Subscription.js");
var Observer_1 = __webpack_require__("./node_modules/rxjs/Observer.js");
var rxSubscriber_1 = __webpack_require__("./node_modules/rxjs/symbol/rxSubscriber.js");
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parent, observerOrNext, error, complete) {
        _super.call(this);
        this._parent = _parent;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            context = observerOrNext;
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (isFunction_1.isFunction(context.unsubscribe)) {
                this.add(context.unsubscribe.bind(context));
            }
            context.unsubscribe = this.unsubscribe.bind(this);
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parent = this._parent;
            if (!_parent.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parent, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parent = this._parent;
            if (this._error) {
                if (!_parent.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parent, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parent.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parent.syncErrorValue = err;
                _parent.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var _parent = this._parent;
            if (this._complete) {
                if (!_parent.syncErrorThrowable) {
                    this.__tryOrUnsub(this._complete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parent, this._complete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parent = this._parent;
        this._context = null;
        this._parent = null;
        _parent.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/Subscription.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray_1 = __webpack_require__("./node_modules/rxjs/util/isArray.js");
var isObject_1 = __webpack_require__("./node_modules/rxjs/util/isObject.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/util/isFunction.js");
var tryCatch_1 = __webpack_require__("./node_modules/rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("./node_modules/rxjs/util/errorObject.js");
var UnsubscriptionError_1 = __webpack_require__("./node_modules/rxjs/util/UnsubscriptionError.js");
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        this.closed = true;
        var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this._subscriptions = null;
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                (errors = errors || []).push(errorObject_1.errorObject.e);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(err.errors);
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var sub = teardown;
        switch (typeof teardown) {
            case 'function':
                sub = new Subscription(teardown);
            case 'object':
                if (sub.closed || typeof sub.unsubscribe !== 'function') {
                    break;
                }
                else if (this.closed) {
                    sub.unsubscribe();
                }
                else {
                    (this._subscriptions || (this._subscriptions = [])).push(sub);
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        return sub;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        // HACK: This might be redundant because of the logic in `add()`
        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
            return;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/observable/ArrayLikeObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var ScalarObservable_1 = __webpack_require__("./node_modules/rxjs/observable/ScalarObservable.js");
var EmptyObservable_1 = __webpack_require__("./node_modules/rxjs/observable/EmptyObservable.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ArrayLikeObservable = (function (_super) {
    __extends(ArrayLikeObservable, _super);
    function ArrayLikeObservable(arrayLike, scheduler) {
        _super.call(this);
        this.arrayLike = arrayLike;
        this.scheduler = scheduler;
        if (!scheduler && arrayLike.length === 1) {
            this._isScalar = true;
            this.value = arrayLike[0];
        }
    }
    ArrayLikeObservable.create = function (arrayLike, scheduler) {
        var length = arrayLike.length;
        if (length === 0) {
            return new EmptyObservable_1.EmptyObservable();
        }
        else if (length === 1) {
            return new ScalarObservable_1.ScalarObservable(arrayLike[0], scheduler);
        }
        else {
            return new ArrayLikeObservable(arrayLike, scheduler);
        }
    };
    ArrayLikeObservable.dispatch = function (state) {
        var arrayLike = state.arrayLike, index = state.index, length = state.length, subscriber = state.subscriber;
        if (subscriber.closed) {
            return;
        }
        if (index >= length) {
            subscriber.complete();
            return;
        }
        subscriber.next(arrayLike[index]);
        state.index = index + 1;
        this.schedule(state);
    };
    ArrayLikeObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var _a = this, arrayLike = _a.arrayLike, scheduler = _a.scheduler;
        var length = arrayLike.length;
        if (scheduler) {
            return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
                arrayLike: arrayLike, index: index, length: length, subscriber: subscriber
            });
        }
        else {
            for (var i = 0; i < length && !subscriber.closed; i++) {
                subscriber.next(arrayLike[i]);
            }
            subscriber.complete();
        }
    };
    return ArrayLikeObservable;
}(Observable_1.Observable));
exports.ArrayLikeObservable = ArrayLikeObservable;
//# sourceMappingURL=ArrayLikeObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/observable/ArrayObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var ScalarObservable_1 = __webpack_require__("./node_modules/rxjs/observable/ScalarObservable.js");
var EmptyObservable_1 = __webpack_require__("./node_modules/rxjs/observable/EmptyObservable.js");
var isScheduler_1 = __webpack_require__("./node_modules/rxjs/util/isScheduler.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ArrayObservable = (function (_super) {
    __extends(ArrayObservable, _super);
    function ArrayObservable(array, scheduler) {
        _super.call(this);
        this.array = array;
        this.scheduler = scheduler;
        if (!scheduler && array.length === 1) {
            this._isScalar = true;
            this.value = array[0];
        }
    }
    ArrayObservable.create = function (array, scheduler) {
        return new ArrayObservable(array, scheduler);
    };
    /**
     * Creates an Observable that emits some values you specify as arguments,
     * immediately one after the other, and then emits a complete notification.
     *
     * <span class="informal">Emits the arguments you provide, then completes.
     * </span>
     *
     * <img src="./img/of.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the arguments given, and the complete notification thereafter. It can
     * be used for composing with other Observables, such as with {@link concat}.
     * By default, it uses a `null` Scheduler, which means the `next`
     * notifications are sent synchronously, although with a different Scheduler
     * it is possible to determine when those notifications will be delivered.
     *
     * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
     * var numbers = Rx.Observable.of(10, 20, 30);
     * var letters = Rx.Observable.of('a', 'b', 'c');
     * var interval = Rx.Observable.interval(1000);
     * var result = numbers.concat(letters).concat(interval);
     * result.subscribe(x => console.log(x));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link throw}
     *
     * @param {...T} values Arguments that represent `next` values to be emitted.
     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
     * the emissions of the `next` notifications.
     * @return {Observable<T>} An Observable that emits each given input value.
     * @static true
     * @name of
     * @owner Observable
     */
    ArrayObservable.of = function () {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i - 0] = arguments[_i];
        }
        var scheduler = array[array.length - 1];
        if (isScheduler_1.isScheduler(scheduler)) {
            array.pop();
        }
        else {
            scheduler = null;
        }
        var len = array.length;
        if (len > 1) {
            return new ArrayObservable(array, scheduler);
        }
        else if (len === 1) {
            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
        }
        else {
            return new EmptyObservable_1.EmptyObservable(scheduler);
        }
    };
    ArrayObservable.dispatch = function (state) {
        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(array[index]);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        this.schedule(state);
    };
    ArrayObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var array = this.array;
        var count = array.length;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ArrayObservable.dispatch, 0, {
                array: array, index: index, count: count, subscriber: subscriber
            });
        }
        else {
            for (var i = 0; i < count && !subscriber.closed; i++) {
                subscriber.next(array[i]);
            }
            subscriber.complete();
        }
    };
    return ArrayObservable;
}(Observable_1.Observable));
exports.ArrayObservable = ArrayObservable;
//# sourceMappingURL=ArrayObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/observable/EmptyObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var EmptyObservable = (function (_super) {
    __extends(EmptyObservable, _super);
    function EmptyObservable(scheduler) {
        _super.call(this);
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits a complete notification.
     *
     * <span class="informal">Just emits 'complete', and nothing else.
     * </span>
     *
     * <img src="./img/empty.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the complete notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then complete.</caption>
     * var result = Rx.Observable.empty().startWith(7);
     * result.subscribe(x => console.log(x));
     *
     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
     * );
     * result.subscribe(x => console.log(x));
     *
     * // Results in the following to the console:
     * // x is equal to the count on the interval eg(0,1,2,3,...)
     * // x will occur every 1000ms
     * // if x % 2 is equal to 1 print abc
     * // if x % 2 is not equal to 1 nothing will be output
     *
     * @see {@link create}
     * @see {@link never}
     * @see {@link of}
     * @see {@link throw}
     *
     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
     * the emission of the complete notification.
     * @return {Observable} An "empty" Observable: emits only the complete
     * notification.
     * @static true
     * @name empty
     * @owner Observable
     */
    EmptyObservable.create = function (scheduler) {
        return new EmptyObservable(scheduler);
    };
    EmptyObservable.dispatch = function (arg) {
        var subscriber = arg.subscriber;
        subscriber.complete();
    };
    EmptyObservable.prototype._subscribe = function (subscriber) {
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
        }
        else {
            subscriber.complete();
        }
    };
    return EmptyObservable;
}(Observable_1.Observable));
exports.EmptyObservable = EmptyObservable;
//# sourceMappingURL=EmptyObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/observable/FromObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isArray_1 = __webpack_require__("./node_modules/rxjs/util/isArray.js");
var isPromise_1 = __webpack_require__("./node_modules/rxjs/util/isPromise.js");
var PromiseObservable_1 = __webpack_require__("./node_modules/rxjs/observable/PromiseObservable.js");
var IteratorObservable_1 = __webpack_require__("./node_modules/rxjs/observable/IteratorObservable.js");
var ArrayObservable_1 = __webpack_require__("./node_modules/rxjs/observable/ArrayObservable.js");
var ArrayLikeObservable_1 = __webpack_require__("./node_modules/rxjs/observable/ArrayLikeObservable.js");
var iterator_1 = __webpack_require__("./node_modules/rxjs/symbol/iterator.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var observeOn_1 = __webpack_require__("./node_modules/rxjs/operator/observeOn.js");
var observable_1 = __webpack_require__("./node_modules/rxjs/symbol/observable.js");
var isArrayLike = (function (x) { return x && typeof x.length === 'number'; });
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var FromObservable = (function (_super) {
    __extends(FromObservable, _super);
    function FromObservable(ish, scheduler) {
        _super.call(this, null);
        this.ish = ish;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable from an Array, an array-like object, a Promise, an
     * iterable object, or an Observable-like object.
     *
     * <span class="informal">Converts almost anything to an Observable.</span>
     *
     * <img src="./img/from.png" width="100%">
     *
     * Convert various other objects and data types into Observables. `from`
     * converts a Promise or an array-like or an
     * [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
     * object into an Observable that emits the items in that promise or array or
     * iterable. A String, in this context, is treated as an array of characters.
     * Observable-like objects (contains a function named with the ES2015 Symbol
     * for Observable) can also be converted through this operator.
     *
     * @example <caption>Converts an array to an Observable</caption>
     * var array = [10, 20, 30];
     * var result = Rx.Observable.from(array);
     * result.subscribe(x => console.log(x));
     *
     * // Results in the following:
     * // 10 20 30
     *
     * @example <caption>Convert an infinite iterable (from a generator) to an Observable</caption>
     * function* generateDoubles(seed) {
     *   var i = seed;
     *   while (true) {
     *     yield i;
     *     i = 2 * i; // double it
     *   }
     * }
     *
     * var iterator = generateDoubles(3);
     * var result = Rx.Observable.from(iterator).take(10);
     * result.subscribe(x => console.log(x));
     *
     * // Results in the following:
     * // 3 6 12 24 48 96 192 384 768 1536
     *
     * @see {@link create}
     * @see {@link fromEvent}
     * @see {@link fromEventPattern}
     * @see {@link fromPromise}
     *
     * @param {ObservableInput<T>} ish A subscribable object, a Promise, an
     * Observable-like, an Array, an iterable or an array-like object to be
     * converted.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
     * emissions of values.
     * @return {Observable<T>} The Observable whose values are originally from the
     * input object that was converted.
     * @static true
     * @name from
     * @owner Observable
     */
    FromObservable.create = function (ish, scheduler) {
        if (ish != null) {
            if (typeof ish[observable_1.$$observable] === 'function') {
                if (ish instanceof Observable_1.Observable && !scheduler) {
                    return ish;
                }
                return new FromObservable(ish, scheduler);
            }
            else if (isArray_1.isArray(ish)) {
                return new ArrayObservable_1.ArrayObservable(ish, scheduler);
            }
            else if (isPromise_1.isPromise(ish)) {
                return new PromiseObservable_1.PromiseObservable(ish, scheduler);
            }
            else if (typeof ish[iterator_1.$$iterator] === 'function' || typeof ish === 'string') {
                return new IteratorObservable_1.IteratorObservable(ish, scheduler);
            }
            else if (isArrayLike(ish)) {
                return new ArrayLikeObservable_1.ArrayLikeObservable(ish, scheduler);
            }
        }
        throw new TypeError((ish !== null && typeof ish || ish) + ' is not observable');
    };
    FromObservable.prototype._subscribe = function (subscriber) {
        var ish = this.ish;
        var scheduler = this.scheduler;
        if (scheduler == null) {
            return ish[observable_1.$$observable]().subscribe(subscriber);
        }
        else {
            return ish[observable_1.$$observable]().subscribe(new observeOn_1.ObserveOnSubscriber(subscriber, scheduler, 0));
        }
    };
    return FromObservable;
}(Observable_1.Observable));
exports.FromObservable = FromObservable;
//# sourceMappingURL=FromObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/observable/IteratorObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__("./node_modules/rxjs/util/root.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var iterator_1 = __webpack_require__("./node_modules/rxjs/symbol/iterator.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IteratorObservable = (function (_super) {
    __extends(IteratorObservable, _super);
    function IteratorObservable(iterator, scheduler) {
        _super.call(this);
        this.scheduler = scheduler;
        if (iterator == null) {
            throw new Error('iterator cannot be null.');
        }
        this.iterator = getIterator(iterator);
    }
    IteratorObservable.create = function (iterator, scheduler) {
        return new IteratorObservable(iterator, scheduler);
    };
    IteratorObservable.dispatch = function (state) {
        var index = state.index, hasError = state.hasError, iterator = state.iterator, subscriber = state.subscriber;
        if (hasError) {
            subscriber.error(state.error);
            return;
        }
        var result = iterator.next();
        if (result.done) {
            subscriber.complete();
            return;
        }
        subscriber.next(result.value);
        state.index = index + 1;
        if (subscriber.closed) {
            if (typeof iterator.return === 'function') {
                iterator.return();
            }
            return;
        }
        this.schedule(state);
    };
    IteratorObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var _a = this, iterator = _a.iterator, scheduler = _a.scheduler;
        if (scheduler) {
            return scheduler.schedule(IteratorObservable.dispatch, 0, {
                index: index, iterator: iterator, subscriber: subscriber
            });
        }
        else {
            do {
                var result = iterator.next();
                if (result.done) {
                    subscriber.complete();
                    break;
                }
                else {
                    subscriber.next(result.value);
                }
                if (subscriber.closed) {
                    if (typeof iterator.return === 'function') {
                        iterator.return();
                    }
                    break;
                }
            } while (true);
        }
    };
    return IteratorObservable;
}(Observable_1.Observable));
exports.IteratorObservable = IteratorObservable;
var StringIterator = (function () {
    function StringIterator(str, idx, len) {
        if (idx === void 0) { idx = 0; }
        if (len === void 0) { len = str.length; }
        this.str = str;
        this.idx = idx;
        this.len = len;
    }
    StringIterator.prototype[iterator_1.$$iterator] = function () { return (this); };
    StringIterator.prototype.next = function () {
        return this.idx < this.len ? {
            done: false,
            value: this.str.charAt(this.idx++)
        } : {
            done: true,
            value: undefined
        };
    };
    return StringIterator;
}());
var ArrayIterator = (function () {
    function ArrayIterator(arr, idx, len) {
        if (idx === void 0) { idx = 0; }
        if (len === void 0) { len = toLength(arr); }
        this.arr = arr;
        this.idx = idx;
        this.len = len;
    }
    ArrayIterator.prototype[iterator_1.$$iterator] = function () { return this; };
    ArrayIterator.prototype.next = function () {
        return this.idx < this.len ? {
            done: false,
            value: this.arr[this.idx++]
        } : {
            done: true,
            value: undefined
        };
    };
    return ArrayIterator;
}());
function getIterator(obj) {
    var i = obj[iterator_1.$$iterator];
    if (!i && typeof obj === 'string') {
        return new StringIterator(obj);
    }
    if (!i && obj.length !== undefined) {
        return new ArrayIterator(obj);
    }
    if (!i) {
        throw new TypeError('object is not iterable');
    }
    return obj[iterator_1.$$iterator]();
}
var maxSafeInteger = Math.pow(2, 53) - 1;
function toLength(o) {
    var len = +o.length;
    if (isNaN(len)) {
        return 0;
    }
    if (len === 0 || !numberIsFinite(len)) {
        return len;
    }
    len = sign(len) * Math.floor(Math.abs(len));
    if (len <= 0) {
        return 0;
    }
    if (len > maxSafeInteger) {
        return maxSafeInteger;
    }
    return len;
}
function numberIsFinite(value) {
    return typeof value === 'number' && root_1.root.isFinite(value);
}
function sign(value) {
    var valueAsNumber = +value;
    if (valueAsNumber === 0) {
        return valueAsNumber;
    }
    if (isNaN(valueAsNumber)) {
        return valueAsNumber;
    }
    return valueAsNumber < 0 ? -1 : 1;
}
//# sourceMappingURL=IteratorObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/observable/PromiseObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__("./node_modules/rxjs/util/root.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var PromiseObservable = (function (_super) {
    __extends(PromiseObservable, _super);
    function PromiseObservable(promise, scheduler) {
        _super.call(this);
        this.promise = promise;
        this.scheduler = scheduler;
    }
    /**
     * Converts a Promise to an Observable.
     *
     * <span class="informal">Returns an Observable that just emits the Promise's
     * resolved value, then completes.</span>
     *
     * Converts an ES2015 Promise or a Promises/A+ spec compliant Promise to an
     * Observable. If the Promise resolves with a value, the output Observable
     * emits that resolved value as a `next`, and then completes. If the Promise
     * is rejected, then the output Observable emits the corresponding Error.
     *
     * @example <caption>Convert the Promise returned by Fetch to an Observable</caption>
     * var result = Rx.Observable.fromPromise(fetch('http://myserver.com/'));
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link bindCallback}
     * @see {@link from}
     *
     * @param {Promise<T>} promise The promise to be converted.
     * @param {Scheduler} [scheduler] An optional Scheduler to use for scheduling
     * the delivery of the resolved value (or the rejection).
     * @return {Observable<T>} An Observable which wraps the Promise.
     * @static true
     * @name fromPromise
     * @owner Observable
     */
    PromiseObservable.create = function (promise, scheduler) {
        return new PromiseObservable(promise, scheduler);
    };
    PromiseObservable.prototype._subscribe = function (subscriber) {
        var _this = this;
        var promise = this.promise;
        var scheduler = this.scheduler;
        if (scheduler == null) {
            if (this._isScalar) {
                if (!subscriber.closed) {
                    subscriber.next(this.value);
                    subscriber.complete();
                }
            }
            else {
                promise.then(function (value) {
                    _this.value = value;
                    _this._isScalar = true;
                    if (!subscriber.closed) {
                        subscriber.next(value);
                        subscriber.complete();
                    }
                }, function (err) {
                    if (!subscriber.closed) {
                        subscriber.error(err);
                    }
                })
                    .then(null, function (err) {
                    // escape the promise trap, throw unhandled errors
                    root_1.root.setTimeout(function () { throw err; });
                });
            }
        }
        else {
            if (this._isScalar) {
                if (!subscriber.closed) {
                    return scheduler.schedule(dispatchNext, 0, { value: this.value, subscriber: subscriber });
                }
            }
            else {
                promise.then(function (value) {
                    _this.value = value;
                    _this._isScalar = true;
                    if (!subscriber.closed) {
                        subscriber.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
                    }
                }, function (err) {
                    if (!subscriber.closed) {
                        subscriber.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
                    }
                })
                    .then(null, function (err) {
                    // escape the promise trap, throw unhandled errors
                    root_1.root.setTimeout(function () { throw err; });
                });
            }
        }
    };
    return PromiseObservable;
}(Observable_1.Observable));
exports.PromiseObservable = PromiseObservable;
function dispatchNext(arg) {
    var value = arg.value, subscriber = arg.subscriber;
    if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
    }
}
function dispatchError(arg) {
    var err = arg.err, subscriber = arg.subscriber;
    if (!subscriber.closed) {
        subscriber.error(err);
    }
}
//# sourceMappingURL=PromiseObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/observable/ScalarObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ScalarObservable = (function (_super) {
    __extends(ScalarObservable, _super);
    function ScalarObservable(value, scheduler) {
        _super.call(this);
        this.value = value;
        this.scheduler = scheduler;
        this._isScalar = true;
        if (scheduler) {
            this._isScalar = false;
        }
    }
    ScalarObservable.create = function (value, scheduler) {
        return new ScalarObservable(value, scheduler);
    };
    ScalarObservable.dispatch = function (state) {
        var done = state.done, value = state.value, subscriber = state.subscriber;
        if (done) {
            subscriber.complete();
            return;
        }
        subscriber.next(value);
        if (subscriber.closed) {
            return;
        }
        state.done = true;
        this.schedule(state);
    };
    ScalarObservable.prototype._subscribe = function (subscriber) {
        var value = this.value;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ScalarObservable.dispatch, 0, {
                done: false, value: value, subscriber: subscriber
            });
        }
        else {
            subscriber.next(value);
            if (!subscriber.closed) {
                subscriber.complete();
            }
        }
    };
    return ScalarObservable;
}(Observable_1.Observable));
exports.ScalarObservable = ScalarObservable;
//# sourceMappingURL=ScalarObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/observable/from.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FromObservable_1 = __webpack_require__("./node_modules/rxjs/observable/FromObservable.js");
exports.from = FromObservable_1.FromObservable.create;
//# sourceMappingURL=from.js.map

/***/ }),

/***/ "./node_modules/rxjs/observable/fromPromise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PromiseObservable_1 = __webpack_require__("./node_modules/rxjs/observable/PromiseObservable.js");
exports.fromPromise = PromiseObservable_1.PromiseObservable.create;
//# sourceMappingURL=fromPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/observable/of.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayObservable_1 = __webpack_require__("./node_modules/rxjs/observable/ArrayObservable.js");
exports.of = ArrayObservable_1.ArrayObservable.of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./node_modules/rxjs/operator/catch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("./node_modules/rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("./node_modules/rxjs/util/subscribeToResult.js");
/**
 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
 *  is returned by the `selector` will be used to continue the observable chain.
 * @return {Observable} an observable that originates from either the source or the observable returned by the
 *  catch `selector` function.
 * @method catch
 * @name catch
 * @owner Observable
 */
function _catch(selector) {
    var operator = new CatchOperator(selector);
    var caught = this.lift(operator);
    return (operator.caught = caught);
}
exports._catch = _catch;
var CatchOperator = (function () {
    function CatchOperator(selector) {
        this.selector = selector;
    }
    CatchOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
    };
    return CatchOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CatchSubscriber = (function (_super) {
    __extends(CatchSubscriber, _super);
    function CatchSubscriber(destination, selector, caught) {
        _super.call(this, destination);
        this.selector = selector;
        this.caught = caught;
    }
    // NOTE: overriding `error` instead of `_error` because we don't want
    // to have this flag this subscriber as `isStopped`.
    CatchSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var result = void 0;
            try {
                result = this.selector(err, this.caught);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.unsubscribe();
            this.destination.remove(this);
            subscribeToResult_1.subscribeToResult(this, result);
        }
    };
    return CatchSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ "./node_modules/rxjs/operator/concatAll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var mergeAll_1 = __webpack_require__("./node_modules/rxjs/operator/mergeAll.js");
/* tslint:disable:max-line-length */
/**
 * Converts a higher-order Observable into a first-order Observable by
 * concatenating the inner Observables in order.
 *
 * <span class="informal">Flattens an Observable-of-Observables by putting one
 * inner Observable after the other.</span>
 *
 * <img src="./img/concatAll.png" width="100%">
 *
 * Joins every Observable emitted by the source (a higher-order Observable), in
 * a serial fashion. It subscribes to each inner Observable only after the
 * previous inner Observable has completed, and merges all of their values into
 * the returned observable.
 *
 * __Warning:__ If the source Observable emits Observables quickly and
 * endlessly, and the inner Observables it emits generally complete slower than
 * the source emits, you can run into memory issues as the incoming Observables
 * collect in an unbounded buffer.
 *
 * Note: `concatAll` is equivalent to `mergeAll` with concurrency parameter set
 * to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map(ev => Rx.Observable.interval(1000).take(4));
 * var firstOrder = higherOrder.concatAll();
 * firstOrder.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link combineAll}
 * @see {@link concat}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 * @see {@link exhaust}
 * @see {@link mergeAll}
 * @see {@link switch}
 * @see {@link zipAll}
 *
 * @return {Observable} An Observable emitting values from all the inner
 * Observables concatenated.
 * @method concatAll
 * @owner Observable
 */
function concatAll() {
    return this.lift(new mergeAll_1.MergeAllOperator(1));
}
exports.concatAll = concatAll;
//# sourceMappingURL=concatAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/operator/concatMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var mergeMap_1 = __webpack_require__("./node_modules/rxjs/operator/mergeMap.js");
/* tslint:disable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, in a serialized fashion waiting for each one to complete before
 * merging the next.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link concatAll}.</span>
 *
 * <img src="./img/concatMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each new inner Observable is
 * concatenated with the previous inner Observable.
 *
 * __Warning:__ if source values arrive endlessly and faster than their
 * corresponding inner Observables can complete, it will result in memory issues
 * as inner Observables amass in an unbounded buffer waiting for their turn to
 * be subscribed to.
 *
 * Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set
 * to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.concatMap(ev => Rx.Observable.interval(1000).take(4));
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link concat}
 * @see {@link concatAll}
 * @see {@link concatMapTo}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): Observable} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} an observable of values merged from the projected
 * Observables as they were subscribed to, one at a time. Optionally, these
 * values may have been projected from a passed `projectResult` argument.
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking values from each projected inner
 * Observable sequentially.
 * @method concatMap
 * @owner Observable
 */
function concatMap(project, resultSelector) {
    return this.lift(new mergeMap_1.MergeMapOperator(project, resultSelector, 1));
}
exports.concatMap = concatMap;
//# sourceMappingURL=concatMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/operator/every.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("./node_modules/rxjs/Subscriber.js");
/**
 * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
 * @param {function} predicate a function for determining if an item meets a specified condition.
 * @param {any} [thisArg] optional object to use for `this` in the callback
 * @return {Observable} an Observable of booleans that determines if all items of the source Observable meet the condition specified.
 * @method every
 * @owner Observable
 */
function every(predicate, thisArg) {
    return this.lift(new EveryOperator(predicate, thisArg, this));
}
exports.every = every;
var EveryOperator = (function () {
    function EveryOperator(predicate, thisArg, source) {
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.source = source;
    }
    EveryOperator.prototype.call = function (observer, source) {
        return source.subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
    };
    return EveryOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var EverySubscriber = (function (_super) {
    __extends(EverySubscriber, _super);
    function EverySubscriber(destination, predicate, thisArg, source) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.source = source;
        this.index = 0;
        this.thisArg = thisArg || this;
    }
    EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
        this.destination.next(everyValueMatch);
        this.destination.complete();
    };
    EverySubscriber.prototype._next = function (value) {
        var result = false;
        try {
            result = this.predicate.call(this.thisArg, value, this.index++, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (!result) {
            this.notifyComplete(false);
        }
    };
    EverySubscriber.prototype._complete = function () {
        this.notifyComplete(true);
    };
    return EverySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=every.js.map

/***/ }),

/***/ "./node_modules/rxjs/operator/filter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("./node_modules/rxjs/Subscriber.js");
/* tslint:disable:max-line-length */
/**
 * Filter items emitted by the source Observable by only emitting those that
 * satisfy a specified predicate.
 *
 * <span class="informal">Like
 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
 * it only emits a value from the source if it passes a criterion function.</span>
 *
 * <img src="./img/filter.png" width="100%">
 *
 * Similar to the well-known `Array.prototype.filter` method, this operator
 * takes values from the source Observable, passes them through a `predicate`
 * function and only emits those values that yielded `true`.
 *
 * @example <caption>Emit only click events whose target was a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
 * clicksOnDivs.subscribe(x => console.log(x));
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 * @see {@link ignoreElements}
 * @see {@link partition}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted, if `false` the value is not passed to the output
 * Observable. The `index` parameter is the number `i` for the i-th source
 * emission that has happened since the subscription, starting from the number
 * `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of values from the source that were
 * allowed by the `predicate` function.
 * @method filter
 * @owner Observable
 */
function filter(predicate, thisArg) {
    return this.lift(new FilterOperator(predicate, thisArg));
}
exports.filter = filter;
var FilterOperator = (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var FilterSubscriber = (function (_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.count = 0;
        this.predicate = predicate;
    }
    // the try catch block below is left specifically for
    // optimization and perf reasons. a tryCatcher is not necessary here.
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs/operator/first.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("./node_modules/rxjs/Subscriber.js");
var EmptyError_1 = __webpack_require__("./node_modules/rxjs/util/EmptyError.js");
/**
 * Emits only the first value (or the first value that meets some condition)
 * emitted by the source Observable.
 *
 * <span class="informal">Emits only the first value. Or emits only the first
 * value that passes some test.</span>
 *
 * <img src="./img/first.png" width="100%">
 *
 * If called with no arguments, `first` emits the first value of the source
 * Observable, then completes. If called with a `predicate` function, `first`
 * emits the first value of the source that matches the specified condition. It
 * may also take a `resultSelector` function to produce the output value from
 * the input value, and a `defaultValue` to emit in case the source completes
 * before it is able to emit a valid value. Throws an error if `defaultValue`
 * was not provided and a matching element is not found.
 *
 * @example <caption>Emit only the first click that happens on the DOM</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.first();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Emits the first click that happens on a DIV</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.first(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link take}
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
 * An optional function called with each item to test for condition matching.
 * @param {function(value: T, index: number): R} [resultSelector] A function to
 * produce the value on the output Observable based on the values
 * and the indices of the source Observable. The arguments passed to this
 * function are:
 * - `value`: the value that was emitted on the source.
 * - `index`: the "index" of the value from the source.
 * @param {R} [defaultValue] The default value emitted in case no valid value
 * was found on the source.
 * @return {Observable<T|R>} an Observable of the first item that matches the
 * condition.
 * @method first
 * @owner Observable
 */
function first(predicate, resultSelector, defaultValue) {
    return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
}
exports.first = first;
var FirstOperator = (function () {
    function FirstOperator(predicate, resultSelector, defaultValue, source) {
        this.predicate = predicate;
        this.resultSelector = resultSelector;
        this.defaultValue = defaultValue;
        this.source = source;
    }
    FirstOperator.prototype.call = function (observer, source) {
        return source.subscribe(new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
    };
    return FirstOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var FirstSubscriber = (function (_super) {
    __extends(FirstSubscriber, _super);
    function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.resultSelector = resultSelector;
        this.defaultValue = defaultValue;
        this.source = source;
        this.index = 0;
        this.hasCompleted = false;
        this._emitted = false;
    }
    FirstSubscriber.prototype._next = function (value) {
        var index = this.index++;
        if (this.predicate) {
            this._tryPredicate(value, index);
        }
        else {
            this._emit(value, index);
        }
    };
    FirstSubscriber.prototype._tryPredicate = function (value, index) {
        var result;
        try {
            result = this.predicate(value, index, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this._emit(value, index);
        }
    };
    FirstSubscriber.prototype._emit = function (value, index) {
        if (this.resultSelector) {
            this._tryResultSelector(value, index);
            return;
        }
        this._emitFinal(value);
    };
    FirstSubscriber.prototype._tryResultSelector = function (value, index) {
        var result;
        try {
            result = this.resultSelector(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this._emitFinal(result);
    };
    FirstSubscriber.prototype._emitFinal = function (value) {
        var destination = this.destination;
        if (!this._emitted) {
            this._emitted = true;
            destination.next(value);
            destination.complete();
            this.hasCompleted = true;
        }
    };
    FirstSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
            destination.next(this.defaultValue);
            destination.complete();
        }
        else if (!this.hasCompleted) {
            destination.error(new EmptyError_1.EmptyError);
        }
    };
    return FirstSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=first.js.map

/***/ }),

/***/ "./node_modules/rxjs/operator/last.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("./node_modules/rxjs/Subscriber.js");
var EmptyError_1 = __webpack_require__("./node_modules/rxjs/util/EmptyError.js");
/* tslint:disable:max-line-length */
/**
 * Returns an Observable that emits only the last item emitted by the source Observable.
 * It optionally takes a predicate function as a parameter, in which case, rather than emitting
 * the last item from the source Observable, the resulting Observable will emit the last item
 * from the source Observable that satisfies the predicate.
 *
 * <img src="./img/last.png" width="100%">
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {function} predicate - the condition any source emitted item has to satisfy.
 * @return {Observable} an Observable that emits only the last item satisfying the given condition
 * from the source, or an NoSuchElementException if no such items are emitted.
 * @throws - Throws if no items that match the predicate are emitted by the source Observable.
 * @method last
 * @owner Observable
 */
function last(predicate, resultSelector, defaultValue) {
    return this.lift(new LastOperator(predicate, resultSelector, defaultValue, this));
}
exports.last = last;
var LastOperator = (function () {
    function LastOperator(predicate, resultSelector, defaultValue, source) {
        this.predicate = predicate;
        this.resultSelector = resultSelector;
        this.defaultValue = defaultValue;
        this.source = source;
    }
    LastOperator.prototype.call = function (observer, source) {
        return source.subscribe(new LastSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
    };
    return LastOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var LastSubscriber = (function (_super) {
    __extends(LastSubscriber, _super);
    function LastSubscriber(destination, predicate, resultSelector, defaultValue, source) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.resultSelector = resultSelector;
        this.defaultValue = defaultValue;
        this.source = source;
        this.hasValue = false;
        this.index = 0;
        if (typeof defaultValue !== 'undefined') {
            this.lastValue = defaultValue;
            this.hasValue = true;
        }
    }
    LastSubscriber.prototype._next = function (value) {
        var index = this.index++;
        if (this.predicate) {
            this._tryPredicate(value, index);
        }
        else {
            if (this.resultSelector) {
                this._tryResultSelector(value, index);
                return;
            }
            this.lastValue = value;
            this.hasValue = true;
        }
    };
    LastSubscriber.prototype._tryPredicate = function (value, index) {
        var result;
        try {
            result = this.predicate(value, index, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            if (this.resultSelector) {
                this._tryResultSelector(value, index);
                return;
            }
            this.lastValue = value;
            this.hasValue = true;
        }
    };
    LastSubscriber.prototype._tryResultSelector = function (value, index) {
        var result;
        try {
            result = this.resultSelector(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.lastValue = result;
        this.hasValue = true;
    };
    LastSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (this.hasValue) {
            destination.next(this.lastValue);
            destination.complete();
        }
        else {
            destination.error(new EmptyError_1.EmptyError);
        }
    };
    return LastSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=last.js.map

/***/ }),

/***/ "./node_modules/rxjs/operator/map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("./node_modules/rxjs/Subscriber.js");
/**
 * Applies a given `project` function to each value emitted by the source
 * Observable, and emits the resulting values as an Observable.
 *
 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
 * it passes each source value through a transformation function to get
 * corresponding output values.</span>
 *
 * <img src="./img/map.png" width="100%">
 *
 * Similar to the well known `Array.prototype.map` function, this operator
 * applies a projection to each value and emits that projection in the output
 * Observable.
 *
 * @example <caption>Map every every click to the clientX position of that click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks.map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link mapTo}
 * @see {@link pluck}
 *
 * @param {function(value: T, index: number): R} project The function to apply
 * to each `value` emitted by the source Observable. The `index` parameter is
 * the number `i` for the i-th emission that has happened since the
 * subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to define what `this` is in the
 * `project` function.
 * @return {Observable<R>} An Observable that emits the values from the source
 * Observable transformed by the given `project` function.
 * @method map
 * @owner Observable
 */
function map(project, thisArg) {
    if (typeof project !== 'function') {
        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }
    return this.lift(new MapOperator(project, thisArg));
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        _super.call(this, destination);
        this.project = project;
        this.count = 0;
        this.thisArg = thisArg || this;
    }
    // NOTE: This looks unoptimized, but it's actually purposefully NOT
    // using try/catch optimizations.
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/operator/mergeAll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("./node_modules/rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("./node_modules/rxjs/util/subscribeToResult.js");
/**
 * Converts a higher-order Observable into a first-order Observable which
 * concurrently delivers all values that are emitted on the inner Observables.
 *
 * <span class="informal">Flattens an Observable-of-Observables.</span>
 *
 * <img src="./img/mergeAll.png" width="100%">
 *
 * `mergeAll` subscribes to an Observable that emits Observables, also known as
 * a higher-order Observable. Each time it observes one of these emitted inner
 * Observables, it subscribes to that and delivers all the values from the
 * inner Observable on the output Observable. The output Observable only
 * completes once all inner Observables have completed. Any error delivered by
 * a inner Observable will be immediately emitted on the output Observable.
 *
 * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var firstOrder = higherOrder.mergeAll();
 * firstOrder.subscribe(x => console.log(x));
 *
 * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
 * var firstOrder = higherOrder.mergeAll(2);
 * firstOrder.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link merge}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 * @see {@link switch}
 * @see {@link zipAll}
 *
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits values coming from all the
 * inner Observables emitted by the source Observable.
 * @method mergeAll
 * @owner Observable
 */
function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return this.lift(new MergeAllOperator(concurrent));
}
exports.mergeAll = mergeAll;
var MergeAllOperator = (function () {
    function MergeAllOperator(concurrent) {
        this.concurrent = concurrent;
    }
    MergeAllOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeAllSubscriber(observer, this.concurrent));
    };
    return MergeAllOperator;
}());
exports.MergeAllOperator = MergeAllOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MergeAllSubscriber = (function (_super) {
    __extends(MergeAllSubscriber, _super);
    function MergeAllSubscriber(destination, concurrent) {
        _super.call(this, destination);
        this.concurrent = concurrent;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
    }
    MergeAllSubscriber.prototype._next = function (observable) {
        if (this.active < this.concurrent) {
            this.active++;
            this.add(subscribeToResult_1.subscribeToResult(this, observable));
        }
        else {
            this.buffer.push(observable);
        }
    };
    MergeAllSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
    };
    MergeAllSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeAllSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.MergeAllSubscriber = MergeAllSubscriber;
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/operator/mergeMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var subscribeToResult_1 = __webpack_require__("./node_modules/rxjs/util/subscribeToResult.js");
var OuterSubscriber_1 = __webpack_require__("./node_modules/rxjs/OuterSubscriber.js");
/* tslint:disable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link mergeAll}.</span>
 *
 * <img src="./img/mergeMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger.
 *
 * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
 * var letters = Rx.Observable.of('a', 'b', 'c');
 * var result = letters.mergeMap(x =>
 *   Rx.Observable.interval(1000).map(i => x+i)
 * );
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // a0
 * // b0
 * // c0
 * // a1
 * // b1
 * // c1
 * // continues to list a,b,c with respective ascending integers
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): Observable} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and merging the results of the Observables obtained
 * from this transformation.
 * @method mergeMap
 * @owner Observable
 */
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
        resultSelector = null;
    }
    return this.lift(new MergeMapOperator(project, resultSelector, concurrent));
}
exports.mergeMap = mergeMap;
var MergeMapOperator = (function () {
    function MergeMapOperator(project, resultSelector, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        this.project = project;
        this.resultSelector = resultSelector;
        this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent));
    };
    return MergeMapOperator;
}());
exports.MergeMapOperator = MergeMapOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MergeMapSubscriber = (function (_super) {
    __extends(MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, resultSelector, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        _super.call(this, destination);
        this.project = project;
        this.resultSelector = resultSelector;
        this.concurrent = concurrent;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    MergeMapSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapSubscriber.prototype._tryNext = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result, value, index);
    };
    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
    };
    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (this.resultSelector) {
            this._notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            this.destination.next(innerValue);
        }
    };
    MergeMapSubscriber.prototype._notifyResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
        var result;
        try {
            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.MergeMapSubscriber = MergeMapSubscriber;
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/operator/observeOn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("./node_modules/rxjs/Subscriber.js");
var Notification_1 = __webpack_require__("./node_modules/rxjs/Notification.js");
/**
 * @see {@link Notification}
 *
 * @param scheduler
 * @param delay
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method observeOn
 * @owner Observable
 */
function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return this.lift(new ObserveOnOperator(scheduler, delay));
}
exports.observeOn = observeOn;
var ObserveOnOperator = (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}());
exports.ObserveOnOperator = ObserveOnOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ObserveOnSubscriber = (function (_super) {
    __extends(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        _super.call(this, destination);
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(Notification_1.Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(Notification_1.Notification.createError(err));
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(Notification_1.Notification.createComplete());
    };
    return ObserveOnSubscriber;
}(Subscriber_1.Subscriber));
exports.ObserveOnSubscriber = ObserveOnSubscriber;
var ObserveOnMessage = (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());
exports.ObserveOnMessage = ObserveOnMessage;
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ "./node_modules/rxjs/operator/reduce.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("./node_modules/rxjs/Subscriber.js");
/* tslint:disable:max-line-length */
/**
 * Applies an accumulator function over the source Observable, and returns the
 * accumulated result when the source completes, given an optional seed value.
 *
 * <span class="informal">Combines together all values emitted on the source,
 * using an accumulator function that knows how to join a new source value into
 * the accumulation from the past.</span>
 *
 * <img src="./img/reduce.png" width="100%">
 *
 * Like
 * [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce),
 * `reduce` applies an `accumulator` function against an accumulation and each
 * value of the source Observable (from the past) to reduce it to a single
 * value, emitted on the output Observable. Note that `reduce` will only emit
 * one value, only when the source Observable completes. It is equivalent to
 * applying operator {@link scan} followed by operator {@link last}.
 *
 * Returns an Observable that applies a specified `accumulator` function to each
 * item emitted by the source Observable. If a `seed` value is specified, then
 * that value will be used as the initial value for the accumulator. If no seed
 * value is specified, the first item of the source is used as the seed.
 *
 * @example <caption>Count the number of click events that happened in 5 seconds</caption>
 * var clicksInFiveSeconds = Rx.Observable.fromEvent(document, 'click')
 *   .takeUntil(Rx.Observable.interval(5000));
 * var ones = clicksInFiveSeconds.mapTo(1);
 * var seed = 0;
 * var count = ones.reduce((acc, one) => acc + one, seed);
 * count.subscribe(x => console.log(x));
 *
 * @see {@link count}
 * @see {@link expand}
 * @see {@link mergeScan}
 * @see {@link scan}
 *
 * @param {function(acc: R, value: T): R} accumulator The accumulator function
 * called on each source value.
 * @param {R} [seed] The initial accumulation value.
 * @return {Observable<R>} An observable of the accumulated values.
 * @return {Observable<R>} An Observable that emits a single value that is the
 * result of accumulating the values emitted by the source Observable.
 * @method reduce
 * @owner Observable
 */
function reduce(accumulator, seed) {
    var hasSeed = false;
    // providing a seed of `undefined` *should* be valid and trigger
    // hasSeed! so don't use `seed !== undefined` checks!
    // For this reason, we have to check it here at the original call site
    // otherwise inside Operator/Subscriber we won't know if `undefined`
    // means they didn't provide anything or if they literally provided `undefined`
    if (arguments.length >= 2) {
        hasSeed = true;
    }
    return this.lift(new ReduceOperator(accumulator, seed, hasSeed));
}
exports.reduce = reduce;
var ReduceOperator = (function () {
    function ReduceOperator(accumulator, seed, hasSeed) {
        if (hasSeed === void 0) { hasSeed = false; }
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
    }
    ReduceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ReduceSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
    };
    return ReduceOperator;
}());
exports.ReduceOperator = ReduceOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ReduceSubscriber = (function (_super) {
    __extends(ReduceSubscriber, _super);
    function ReduceSubscriber(destination, accumulator, seed, hasSeed) {
        _super.call(this, destination);
        this.accumulator = accumulator;
        this.hasSeed = hasSeed;
        this.hasValue = false;
        this.acc = seed;
    }
    ReduceSubscriber.prototype._next = function (value) {
        if (this.hasValue || (this.hasValue = this.hasSeed)) {
            this._tryReduce(value);
        }
        else {
            this.acc = value;
            this.hasValue = true;
        }
    };
    ReduceSubscriber.prototype._tryReduce = function (value) {
        var result;
        try {
            result = this.accumulator(this.acc, value);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.acc = result;
    };
    ReduceSubscriber.prototype._complete = function () {
        if (this.hasValue || this.hasSeed) {
            this.destination.next(this.acc);
        }
        this.destination.complete();
    };
    return ReduceSubscriber;
}(Subscriber_1.Subscriber));
exports.ReduceSubscriber = ReduceSubscriber;
//# sourceMappingURL=reduce.js.map

/***/ }),

/***/ "./node_modules/rxjs/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("./node_modules/rxjs/util/root.js");
function symbolIteratorPonyfill(root) {
    var Symbol = root.Symbol;
    if (typeof Symbol === 'function') {
        if (!Symbol.iterator) {
            Symbol.iterator = Symbol('iterator polyfill');
        }
        return Symbol.iterator;
    }
    else {
        // [for Mozilla Gecko 27-35:](https://mzl.la/2ewE1zC)
        var Set_1 = root.Set;
        if (Set_1 && typeof new Set_1()['@@iterator'] === 'function') {
            return '@@iterator';
        }
        var Map_1 = root.Map;
        // required for compatability with es6-shim
        if (Map_1) {
            var keys = Object.getOwnPropertyNames(Map_1.prototype);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                // according to spec, Map.prototype[@@iterator] and Map.orototype.entries must be equal.
                if (key !== 'entries' && key !== 'size' && Map_1.prototype[key] === Map_1.prototype['entries']) {
                    return key;
                }
            }
        }
        return '@@iterator';
    }
}
exports.symbolIteratorPonyfill = symbolIteratorPonyfill;
exports.$$iterator = symbolIteratorPonyfill(root_1.root);
//# sourceMappingURL=iterator.js.map

/***/ }),

/***/ "./node_modules/rxjs/symbol/observable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("./node_modules/rxjs/util/root.js");
function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
exports.getSymbolObservable = getSymbolObservable;
exports.$$observable = getSymbolObservable(root_1.root);
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/symbol/rxSubscriber.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("./node_modules/rxjs/util/root.js");
var Symbol = root_1.root.Symbol;
exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/util/EmptyError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an Observable or a sequence was queried but has no
 * elements.
 *
 * @see {@link first}
 * @see {@link last}
 * @see {@link single}
 *
 * @class EmptyError
 */
var EmptyError = (function (_super) {
    __extends(EmptyError, _super);
    function EmptyError() {
        var err = _super.call(this, 'no elements in sequence');
        this.name = err.name = 'EmptyError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return EmptyError;
}(Error));
exports.EmptyError = EmptyError;
//# sourceMappingURL=EmptyError.js.map

/***/ }),

/***/ "./node_modules/rxjs/util/ObjectUnsubscribedError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an action is invalid because the object has been
 * unsubscribed.
 *
 * @see {@link Subject}
 * @see {@link BehaviorSubject}
 *
 * @class ObjectUnsubscribedError
 */
var ObjectUnsubscribedError = (function (_super) {
    __extends(ObjectUnsubscribedError, _super);
    function ObjectUnsubscribedError() {
        var err = _super.call(this, 'object unsubscribed');
        this.name = err.name = 'ObjectUnsubscribedError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ObjectUnsubscribedError;
}(Error));
exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ "./node_modules/rxjs/util/UnsubscriptionError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
exports.UnsubscriptionError = UnsubscriptionError;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/util/errorObject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// typeof any so that it we don't have to cast when comparing a result to the error object
exports.errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/util/isArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/util/isFunction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/util/isObject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/util/isPromise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isPromise(value) {
    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
exports.isPromise = isPromise;
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/util/isScheduler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
exports.isScheduler = isScheduler;
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/util/root.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * window: browser in DOM main thread
 * self: browser in WebWorker
 * global: Node.js/other
 */
exports.root = (typeof window == 'object' && window.window === window && window
    || typeof self == 'object' && self.self === self && self
    || typeof global == 'object' && global.global === global && global);
if (!exports.root) {
    throw new Error('RxJS could not find any global context (window, self, global)');
}
//# sourceMappingURL=root.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/rxjs/util/subscribeToResult.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("./node_modules/rxjs/util/root.js");
var isArray_1 = __webpack_require__("./node_modules/rxjs/util/isArray.js");
var isPromise_1 = __webpack_require__("./node_modules/rxjs/util/isPromise.js");
var isObject_1 = __webpack_require__("./node_modules/rxjs/util/isObject.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var iterator_1 = __webpack_require__("./node_modules/rxjs/symbol/iterator.js");
var InnerSubscriber_1 = __webpack_require__("./node_modules/rxjs/InnerSubscriber.js");
var observable_1 = __webpack_require__("./node_modules/rxjs/symbol/observable.js");
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    if (destination.closed) {
        return null;
    }
    if (result instanceof Observable_1.Observable) {
        if (result._isScalar) {
            destination.next(result.value);
            destination.complete();
            return null;
        }
        else {
            return result.subscribe(destination);
        }
    }
    else if (isArray_1.isArray(result)) {
        for (var i = 0, len = result.length; i < len && !destination.closed; i++) {
            destination.next(result[i]);
        }
        if (!destination.closed) {
            destination.complete();
        }
    }
    else if (isPromise_1.isPromise(result)) {
        result.then(function (value) {
            if (!destination.closed) {
                destination.next(value);
                destination.complete();
            }
        }, function (err) { return destination.error(err); })
            .then(null, function (err) {
            // Escaping the Promise trap: globally throw unhandled errors
            root_1.root.setTimeout(function () { throw err; });
        });
        return destination;
    }
    else if (result && typeof result[iterator_1.$$iterator] === 'function') {
        var iterator = result[iterator_1.$$iterator]();
        do {
            var item = iterator.next();
            if (item.done) {
                destination.complete();
                break;
            }
            destination.next(item.value);
            if (destination.closed) {
                break;
            }
        } while (true);
    }
    else if (result && typeof result[observable_1.$$observable] === 'function') {
        var obs = result[observable_1.$$observable]();
        if (typeof obs.subscribe !== 'function') {
            destination.error(new TypeError('Provided object does not correctly implement Symbol.observable'));
        }
        else {
            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
        }
    }
    else {
        var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = ("You provided " + value + " where a stream was expected.")
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        destination.error(new TypeError(msg));
    }
    return null;
}
exports.subscribeToResult = subscribeToResult;
//# sourceMappingURL=subscribeToResult.js.map

/***/ }),

/***/ "./node_modules/rxjs/util/toSubscriber.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Subscriber_1 = __webpack_require__("./node_modules/rxjs/Subscriber.js");
var rxSubscriber_1 = __webpack_require__("./node_modules/rxjs/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__("./node_modules/rxjs/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.$$rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/util/tryCatch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var errorObject_1 = __webpack_require__("./node_modules/rxjs/util/errorObject.js");
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
;
//# sourceMappingURL=tryCatch.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/components/abcd/abcd.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var AbcdComponent = (function () {
    function AbcdComponent() {
    }
    AbcdComponent.prototype.ngOnInit = function () {
    };
    AbcdComponent = __decorate([
        core_1.Component({
            selector: 'kee-app-abcd',
            template: "<p>\n    abcd works!\n  </p>",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], AbcdComponent);
    return AbcdComponent;
}());
exports.AbcdComponent = AbcdComponent;


/***/ }),

/***/ "./src/components/hello-world/hello-world-sub/hello-world-sub.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var HelloWorldSubComponent = (function () {
    function HelloWorldSubComponent() {
    }
    HelloWorldSubComponent.prototype.ngOnInit = function () {
    };
    HelloWorldSubComponent = __decorate([
        core_1.Component({
            selector: 'app-hello-world-sub',
            template: "<p>\n    Hello, World! from sub-componnt!\n  </p>",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], HelloWorldSubComponent);
    return HelloWorldSubComponent;
}());
exports.HelloWorldSubComponent = HelloWorldSubComponent;


/***/ }),

/***/ "./src/components/hello-world/hello-world.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var HelloWorldComponent = (function () {
    function HelloWorldComponent() {
    }
    HelloWorldComponent.prototype.ngOnInit = function () {
    };
    HelloWorldComponent = __decorate([
        core_1.Component({
            selector: 'kee-hello-world',
            template: "<p>\n    Hello, World! from a componnt!\n  </p>",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());
exports.HelloWorldComponent = HelloWorldComponent;


/***/ }),

/***/ "./src/components/hw-app.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js?sourceMap!./node_modules/sass-loader/index.js?sourceMap!./src/components/hw-app.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/components/hw-app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var HwAppComponent = (function () {
    function HwAppComponent() {
        //
    }
    HwAppComponent.prototype.ngOnInit = function () {
        //
    };
    HwAppComponent = __decorate([
        core_1.Component({
            selector: 'kee-hw-app',
            template: "<p>\n    hw-app works!\n    <kee-app-abcd></kee-app-abcd>\n  </p>\n  <nav>\n    <a routerLink=\"/kee-hw-app/hello-world\" routerLinkActive=\"active\">Kee Hello World Route!</a>\n  </nav>\n  <nav>\n    <a routerLink=\"/kee-hw-app/hello-world-sub\" routerLinkActive=\"active\">\n      Kee Hello World -:Sub:- Route!\n    </a>\n  </nav>\n  <router-outlet></router-outlet>",
            styles: [__webpack_require__("./src/components/hw-app.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], HwAppComponent);
    return HwAppComponent;
}());
exports.HwAppComponent = HwAppComponent;


/***/ }),

/***/ "./src/hw-app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(1);
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var hw_app_component_1 = __webpack_require__("./src/components/hw-app.component.ts");
var hello_world_component_1 = __webpack_require__("./src/components/hello-world/hello-world.component.ts");
var hello_world_sub_component_1 = __webpack_require__("./src/components/hello-world/hello-world-sub/hello-world-sub.component.ts");
var abcd_component_1 = __webpack_require__("./src/components/abcd/abcd.component.ts");
var hw_app_routing_module_1 = __webpack_require__("./src/hw-app.routing.module.ts");
var HwAppModule = (function () {
    function HwAppModule() {
    }
    HwAppModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                hw_app_routing_module_1.HwAppRoutingModule,
                http_1.HttpModule
            ],
            declarations: [
                hw_app_component_1.HwAppComponent,
                hello_world_component_1.HelloWorldComponent,
                hello_world_sub_component_1.HelloWorldSubComponent,
                abcd_component_1.AbcdComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HwAppModule);
    return HwAppModule;
}());
exports.HwAppModule = HwAppModule;


/***/ }),

/***/ "./src/hw-app.routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var hw_app_component_1 = __webpack_require__("./src/components/hw-app.component.ts");
var hello_world_component_1 = __webpack_require__("./src/components/hello-world/hello-world.component.ts");
var hello_world_sub_component_1 = __webpack_require__("./src/components/hello-world/hello-world-sub/hello-world-sub.component.ts");
var HwAppRoutingModule = (function () {
    function HwAppRoutingModule() {
    }
    HwAppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild([
                    { path: 'kee-hw-app', component: hw_app_component_1.HwAppComponent },
                    { path: 'kee-hw-app/hello-world', component: hello_world_component_1.HelloWorldComponent },
                    { path: 'kee-hw-app/hello-world-sub', component: hello_world_sub_component_1.HelloWorldSubComponent }
                ])],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], HwAppRoutingModule);
    return HwAppRoutingModule;
}());
exports.HwAppRoutingModule = HwAppRoutingModule;


/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/hw-app.module.ts"));
__export(__webpack_require__("./src/hw-app.routing.module.ts"));
__export(__webpack_require__("./src/components/hw-app.component.ts"));
__export(__webpack_require__("./src/components/hello-world/hello-world.component.ts"));
__export(__webpack_require__("./src/components/hello-world/hello-world-sub/hello-world-sub.component.ts"));
__export(__webpack_require__("./src/components/abcd/abcd.component.ts"));


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.map