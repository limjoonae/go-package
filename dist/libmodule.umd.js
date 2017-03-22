(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("@angular/platform-browser"), require("@angular/http"), require("rxjs/add/operator/map"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/forms", "@angular/platform-browser", "@angular/http", "rxjs/add/operator/map"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("@angular/platform-browser"), require("@angular/http"), require("rxjs/add/operator/map")) : factory(root["@angular/core"], root["@angular/common"], root["@angular/forms"], root["@angular/platform-browser"], root["@angular/http"], root["rxjs/add/operator/map"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_75__) {
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 507);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 23:
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
/** Default values provider for tooltip */
var TooltipConfig = (function () {
    function TooltipConfig() {
        /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
        this.placement = 'top';
        /** array of event names which triggers tooltip opening */
        this.triggers = 'hover focus';
    }
    TooltipConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TooltipConfig);
    return TooltipConfig;
}());
exports.TooltipConfig = TooltipConfig;


/***/ }),

/***/ 264:
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
var common_1 = __webpack_require__(2);
var forms_1 = __webpack_require__(4);
var index_1 = __webpack_require__(268);
var ng2_select_1 = __webpack_require__(297);
var index_2 = __webpack_require__(285);
var index_3 = __webpack_require__(287);
var index_4 = __webpack_require__(34);
var index_5 = __webpack_require__(35);
var LibModule = (function () {
    function LibModule() {
    }
    LibModule.forRoot = function () {
        return {
            ngModule: LibModule,
            providers: [
                index_1.Ng2AutoComplete,
                index_2.TabsetConfig,
                index_3.TooltipConfig, index_4.ComponentLoaderFactory, index_5.PositioningService
            ]
        };
    };
    LibModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [
                index_1.Ng2AutoCompleteComponent, index_1.Ng2AutoCompleteDirective,
                ng2_select_1.HighlightPipe, ng2_select_1.OffClickDirective, ng2_select_1.SelectComponent,
                index_2.NgTranscludeDirective, index_2.TabDirective, index_2.TabsetComponent, index_2.TabHeadingDirective,
                index_3.TooltipContainerComponent, index_3.TooltipDirective,
            ],
            exports: [
                index_1.Ng2AutoCompleteComponent, index_1.Ng2AutoCompleteDirective,
                ng2_select_1.HighlightPipe, ng2_select_1.OffClickDirective, ng2_select_1.SelectComponent,
                index_2.NgTranscludeDirective, index_2.TabDirective, index_2.TabsetComponent, index_2.TabHeadingDirective,
                index_3.TooltipDirective,
            ],
            entryComponents: [index_1.Ng2AutoCompleteComponent, index_3.TooltipContainerComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], LibModule);
    return LibModule;
}());
exports.LibModule = LibModule;


/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng2_auto_complete_1 = __webpack_require__(33);
exports.Ng2AutoComplete = ng2_auto_complete_1.Ng2AutoComplete;
var ng2_auto_complete_module_1 = __webpack_require__(269);
exports.Ng2AutoCompleteModule = ng2_auto_complete_module_1.Ng2AutoCompleteModule;
var ng2_auto_complete_component_1 = __webpack_require__(32);
exports.Ng2AutoCompleteComponent = ng2_auto_complete_component_1.Ng2AutoCompleteComponent;
var ng2_auto_complete_directive_1 = __webpack_require__(77);
exports.Ng2AutoCompleteDirective = ng2_auto_complete_directive_1.Ng2AutoCompleteDirective;


/***/ }),

/***/ 269:
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
var common_1 = __webpack_require__(2);
var forms_1 = __webpack_require__(4);
var ng2_auto_complete_component_1 = __webpack_require__(32);
var ng2_auto_complete_directive_1 = __webpack_require__(77);
var ng2_auto_complete_1 = __webpack_require__(33);
var Ng2AutoCompleteModule = (function () {
    function Ng2AutoCompleteModule() {
    }
    Ng2AutoCompleteModule.forRoot = function () {
        return {
            ngModule: Ng2AutoCompleteModule,
            providers: [ng2_auto_complete_1.Ng2AutoComplete]
        };
    };
    Ng2AutoCompleteModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [ng2_auto_complete_component_1.Ng2AutoCompleteComponent, ng2_auto_complete_directive_1.Ng2AutoCompleteDirective],
            exports: [ng2_auto_complete_component_1.Ng2AutoCompleteComponent, ng2_auto_complete_directive_1.Ng2AutoCompleteDirective],
            entryComponents: [ng2_auto_complete_component_1.Ng2AutoCompleteComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2AutoCompleteModule);
    return Ng2AutoCompleteModule;
}());
exports.Ng2AutoCompleteModule = Ng2AutoCompleteModule;


/***/ }),

/***/ 283:
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
var component_loader_class_1 = __webpack_require__(79);
var positioning_1 = __webpack_require__(35);
var ComponentLoaderFactory = (function () {
    function ComponentLoaderFactory(componentFactoryResolver, ngZone, injector, posService) {
        this._ngZone = ngZone;
        this._injector = injector;
        this._posService = posService;
        this._componentFactoryResolver = componentFactoryResolver;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     * @returns {ComponentLoader}
     */
    ComponentLoaderFactory.prototype.createLoader = function (_elementRef, _viewContainerRef, _renderer) {
        return new component_loader_class_1.ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._posService);
    };
    ComponentLoaderFactory = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, core_1.NgZone, core_1.Injector, positioning_1.PositioningService])
    ], ComponentLoaderFactory);
    return ComponentLoaderFactory;
}());
exports.ComponentLoaderFactory = ComponentLoaderFactory;


/***/ }),

/***/ 284:
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
var ng_positioning_1 = __webpack_require__(81);
var PositioningService = (function () {
    function PositioningService() {
    }
    PositioningService.prototype.position = function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        ng_positioning_1.positionElements(this._getHtmlElement(target), this._getHtmlElement(element), attachment, appendToBody);
    };
    PositioningService.prototype._getHtmlElement = function (element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return document.querySelector(element);
        }
        if (element instanceof core_1.ElementRef) {
            return element.nativeElement;
        }
        return element;
    };
    PositioningService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PositioningService);
    return PositioningService;
}());
exports.PositioningService = PositioningService;


/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng_transclude_directive_1 = __webpack_require__(82);
exports.NgTranscludeDirective = ng_transclude_directive_1.NgTranscludeDirective;
var tab_directive_1 = __webpack_require__(36);
exports.TabDirective = tab_directive_1.TabDirective;
var tab_heading_directive_1 = __webpack_require__(83);
exports.TabHeadingDirective = tab_heading_directive_1.TabHeadingDirective;
var tabset_component_1 = __webpack_require__(37);
exports.TabsetComponent = tabset_component_1.TabsetComponent;
var tabset_config_1 = __webpack_require__(38);
exports.TabsetConfig = tabset_config_1.TabsetConfig;
var tabs_module_1 = __webpack_require__(286);
exports.TabsModule = tabs_module_1.TabsModule;


/***/ }),

/***/ 286:
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
var common_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var ng_transclude_directive_1 = __webpack_require__(82);
var tab_heading_directive_1 = __webpack_require__(83);
var tab_directive_1 = __webpack_require__(36);
var tabset_component_1 = __webpack_require__(37);
var tabset_config_1 = __webpack_require__(38);
var TabsModule = (function () {
    function TabsModule() {
    }
    TabsModule.forRoot = function () {
        return {
            ngModule: TabsModule,
            providers: [tabset_config_1.TabsetConfig]
        };
    };
    TabsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [ng_transclude_directive_1.NgTranscludeDirective, tab_directive_1.TabDirective, tabset_component_1.TabsetComponent, tab_heading_directive_1.TabHeadingDirective],
            exports: [tab_directive_1.TabDirective, tabset_component_1.TabsetComponent, tab_heading_directive_1.TabHeadingDirective, ng_transclude_directive_1.NgTranscludeDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], TabsModule);
    return TabsModule;
}());
exports.TabsModule = TabsModule;


/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tooltip_container_component_1 = __webpack_require__(39);
exports.TooltipContainerComponent = tooltip_container_component_1.TooltipContainerComponent;
var tooltip_directive_1 = __webpack_require__(84);
exports.TooltipDirective = tooltip_directive_1.TooltipDirective;
var tooltip_module_1 = __webpack_require__(288);
exports.TooltipModule = tooltip_module_1.TooltipModule;
var tooltip_config_1 = __webpack_require__(23);
exports.TooltipConfig = tooltip_config_1.TooltipConfig;


/***/ }),

/***/ 288:
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
var common_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var tooltip_container_component_1 = __webpack_require__(39);
var tooltip_directive_1 = __webpack_require__(84);
var tooltip_config_1 = __webpack_require__(23);
var component_loader_1 = __webpack_require__(34);
var positioning_1 = __webpack_require__(35);
var TooltipModule = (function () {
    function TooltipModule() {
    }
    TooltipModule.forRoot = function () {
        return {
            ngModule: TooltipModule,
            providers: [tooltip_config_1.TooltipConfig, component_loader_1.ComponentLoaderFactory, positioning_1.PositioningService]
        };
    };
    ;
    TooltipModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [tooltip_directive_1.TooltipDirective, tooltip_container_component_1.TooltipContainerComponent],
            exports: [tooltip_directive_1.TooltipDirective],
            entryComponents: [tooltip_container_component_1.TooltipContainerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TooltipModule);
    return TooltipModule;
}());
exports.TooltipModule = TooltipModule;


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*tslint:disable:no-invalid-this */
function OnChange(defaultValue) {
    var sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            get: function () { return this[_key]; },
            set: function (value) {
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
exports.OnChange = OnChange;
/* tslint:enable */


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = typeof window !== 'undefined' && window || {};
exports.window = win;
exports.document = win.document;
exports.location = win.location;
exports.gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
exports.performance = win['performance'] ? win['performance'] : null;
exports.Event = win['Event'];
exports.MouseEvent = win['MouseEvent'];
exports.KeyboardEvent = win['KeyboardEvent'];
exports.EventTarget = win['EventTarget'];
exports.History = win['History'];
exports.Location = win['Location'];
exports.EventListener = win['EventListener'];


/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var browser_1 = __webpack_require__(290);
function isBs3() {
    return browser_1.window.__theme !== 'bs4';
}
exports.isBs3 = isBs3;


/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */

var Trigger = (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());
exports.Trigger = Trigger;


/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var trigger_class_1 = __webpack_require__(292);
var DEFAULT_ALIASES = {
    hover: ['mouseenter', 'mouseleave'],
    focus: ['focusin', 'focusout']
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers.split(/\s+/)
        .map(function (trigger) { return trigger.split(':'); })
        .map(function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new trigger_class_1.Trigger(alias[0], alias[1]);
    });
    var manualTriggers = parsedTriggers
        .filter(function (triggerPair) { return triggerPair.isManual(); });
    if (manualTriggers.length > 1) {
        throw 'Triggers parse error: only one manual trigger is allowed';
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
    }
    return parsedTriggers;
}
exports.parseTriggers = parseTriggers;
function listenToTriggers(renderer, target, triggers, showFn, hideFn, toggleFn) {
    var parsedTriggers = parseTriggers(triggers);
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    });
    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
}
exports.listenToTriggers = listenToTriggers;


/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(40));
__export(__webpack_require__(85));
__export(__webpack_require__(298));
__export(__webpack_require__(87));
__export(__webpack_require__(86));
__export(__webpack_require__(41));


/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(296));


/***/ }),

/***/ 298:
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
var common_1 = __webpack_require__(2);
var select_1 = __webpack_require__(87);
var select_pipes_1 = __webpack_require__(41);
var off_click_1 = __webpack_require__(85);
var SelectModule = (function () {
    function SelectModule() {
    }
    SelectModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective],
            exports: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], SelectModule);
    return SelectModule;
}());
exports.SelectModule = SelectModule;


/***/ }),

/***/ 32:
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
var ng2_auto_complete_1 = __webpack_require__(33);
/**
 * show a selected date in monthly calendar
 * Each filteredList item has the following property in addition to data itself
 *   1. displayValue as string e.g. Allen Kim
 *   2. dataValue as any e.g.
 */
var Ng2AutoCompleteComponent = (function () {
    /**
     * constructor
     */
    function Ng2AutoCompleteComponent(elementRef, autoComplete) {
        var _this = this;
        this.autoComplete = autoComplete;
        this.minChars = 0;
        this.loadingText = "Loading";
        this.showInputTag = true;
        this.showDropdownOnInit = false;
        this.tabToSelect = true;
        this.valueSelected = new core_1.EventEmitter();
        this.dropdownVisible = false;
        this.isLoading = false;
        this.filteredList = [];
        this.minCharsEntered = false;
        this.itemIndex = 0;
        this.reloadListInDelay = function (evt) {
            var delayMs = _this.isSrcArr() ? 10 : 500;
            var keyword = evt.target.value;
            // executing after user stopped typing
            _this.delay(function () { return _this.reloadList(keyword); }, delayMs);
        };
        this.inputElKeyHandler = function (evt) {
            var totalNumItem = _this.filteredList.length;
            switch (evt.keyCode) {
                case 27:
                    break;
                case 38:
                    _this.itemIndex = (totalNumItem + _this.itemIndex - 1) % totalNumItem;
                    break;
                case 40:
                    _this.dropdownVisible = true;
                    _this.itemIndex = (totalNumItem + _this.itemIndex + 1) % totalNumItem;
                    break;
                case 13:
                    if (_this.filteredList.length > 0) {
                        _this.selectOne(_this.filteredList[_this.itemIndex]);
                    }
                    evt.preventDefault();
                    break;
                case 9:
                    if (_this.tabToSelect && _this.filteredList.length > 0) {
                        _this.selectOne(_this.filteredList[_this.itemIndex]);
                    }
                    break;
            }
        };
        this.delay = (function () {
            var timer = 0;
            return function (callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
        })();
        this.el = elementRef.nativeElement;
    }
    Ng2AutoCompleteComponent.prototype.isSrcArr = function () {
        return (this.source.constructor.name === "Array");
    };
    /**
     * user enters into input el, shows list to select, then select one
     */
    Ng2AutoCompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.autoComplete.source = this.source;
        this.autoComplete.pathToData = this.pathToData;
        setTimeout(function () {
            if (_this.autoCompleteInput) {
                _this.autoCompleteInput.nativeElement.focus();
            }
            if (_this.showDropdownOnInit) {
                _this.showDropdownList({ target: { value: '' } });
            }
        });
    };
    Ng2AutoCompleteComponent.prototype.showDropdownList = function (event) {
        this.dropdownVisible = true;
        this.reloadList(event.target.value);
    };
    Ng2AutoCompleteComponent.prototype.hideDropdownList = function () {
        this.dropdownVisible = false;
    };
    Ng2AutoCompleteComponent.prototype.findItemFromSelectValue = function (selectText) {
        var matchingItems = this.filteredList
            .filter(function (item) { return ('' + item) === selectText; });
        return matchingItems.length ? matchingItems[0] : null;
    };
    Ng2AutoCompleteComponent.prototype.reloadList = function (keyword) {
        var _this = this;
        this.filteredList = [];
        if (keyword.length < (this.minChars || 0)) {
            this.minCharsEntered = false;
            return;
        }
        else {
            this.minCharsEntered = true;
        }
        if (this.isSrcArr()) {
            this.isLoading = false;
            this.filteredList = this.autoComplete.filter(this.source, keyword);
            if (this.maxNumList) {
                this.filteredList = this.filteredList.slice(0, this.maxNumList);
            }
        }
        else {
            this.isLoading = true;
            if (typeof this.source === "function") {
                // custom function that returns observable
                this.source(keyword).subscribe(function (resp) {
                    if (_this.pathToData) {
                        var paths = _this.pathToData.split(".");
                        paths.forEach(function (prop) { return resp = resp[prop]; });
                    }
                    _this.filteredList = resp;
                    if (_this.maxNumList) {
                        _this.filteredList = _this.filteredList.slice(0, _this.maxNumList);
                    }
                }, function (error) { return null; }, function () { return _this.isLoading = false; } // complete
                );
            }
            else {
                // remote source
                this.autoComplete.getRemoteData(keyword).subscribe(function (resp) {
                    _this.filteredList = resp;
                    if (_this.maxNumList) {
                        _this.filteredList = _this.filteredList.slice(0, _this.maxNumList);
                    }
                }, function (error) { return null; }, function () { return _this.isLoading = false; } // complete
                );
            }
        }
    };
    Ng2AutoCompleteComponent.prototype.selectOne = function (data) {
        this.valueSelected.emit(data);
    };
    ;
    Ng2AutoCompleteComponent.prototype.getFormattedList = function (data) {
        var formatted;
        var formatter = this.listFormatter || '(id) value';
        if (typeof formatter === 'function') {
            formatted = formatter.apply(this, [data]);
        }
        else if (typeof data !== 'object') {
            formatted = data;
        }
        else if (typeof formatter === 'string') {
            formatted = formatter;
            var matches = formatter.match(/[a-zA-Z0-9_\$]+/g);
            if (matches && typeof data !== 'string') {
                matches.forEach(function (key) {
                    formatted = formatted.replace(key, data[key]);
                });
            }
        }
        return formatted;
    };
    Object.defineProperty(Ng2AutoCompleteComponent.prototype, "emptyList", {
        get: function () {
            return !(this.isLoading ||
                (this.minCharsEntered && !this.isLoading && !this.filteredList.length) ||
                (this.filteredList.length));
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input("list-formatter"), 
        __metadata('design:type', Function)
    ], Ng2AutoCompleteComponent.prototype, "listFormatter", void 0);
    __decorate([
        core_1.Input("source"), 
        __metadata('design:type', Object)
    ], Ng2AutoCompleteComponent.prototype, "source", void 0);
    __decorate([
        core_1.Input("path-to-data"), 
        __metadata('design:type', String)
    ], Ng2AutoCompleteComponent.prototype, "pathToData", void 0);
    __decorate([
        core_1.Input("min-chars"), 
        __metadata('design:type', Number)
    ], Ng2AutoCompleteComponent.prototype, "minChars", void 0);
    __decorate([
        core_1.Input("placeholder"), 
        __metadata('design:type', String)
    ], Ng2AutoCompleteComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input("blank-option-text"), 
        __metadata('design:type', String)
    ], Ng2AutoCompleteComponent.prototype, "blankOptionText", void 0);
    __decorate([
        core_1.Input("no-match-found-text"), 
        __metadata('design:type', String)
    ], Ng2AutoCompleteComponent.prototype, "noMatchFoundText", void 0);
    __decorate([
        core_1.Input("accept-user-input"), 
        __metadata('design:type', Boolean)
    ], Ng2AutoCompleteComponent.prototype, "acceptUserInput", void 0);
    __decorate([
        core_1.Input("loading-text"), 
        __metadata('design:type', String)
    ], Ng2AutoCompleteComponent.prototype, "loadingText", void 0);
    __decorate([
        core_1.Input("max-num-list"), 
        __metadata('design:type', Number)
    ], Ng2AutoCompleteComponent.prototype, "maxNumList", void 0);
    __decorate([
        core_1.Input("show-input-tag"), 
        __metadata('design:type', Boolean)
    ], Ng2AutoCompleteComponent.prototype, "showInputTag", void 0);
    __decorate([
        core_1.Input("show-dropdown-on-init"), 
        __metadata('design:type', Boolean)
    ], Ng2AutoCompleteComponent.prototype, "showDropdownOnInit", void 0);
    __decorate([
        core_1.Input("tab-to-select"), 
        __metadata('design:type', Boolean)
    ], Ng2AutoCompleteComponent.prototype, "tabToSelect", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Ng2AutoCompleteComponent.prototype, "valueSelected", void 0);
    __decorate([
        core_1.ViewChild('autoCompleteInput'), 
        __metadata('design:type', core_1.ElementRef)
    ], Ng2AutoCompleteComponent.prototype, "autoCompleteInput", void 0);
    Ng2AutoCompleteComponent = __decorate([
        core_1.Component({
            selector: "ng2-auto-complete",
            template: "\n  <div class=\"ng2-auto-complete\">\n\n    <!-- keyword input -->\n    <input *ngIf=\"showInputTag\"\n           #autoCompleteInput class=\"keyword\"\n           placeholder=\"{{placeholder}}\"\n           (focus)=\"showDropdownList($event)\"\n           (blur)=\"hideDropdownList()\"\n           (keydown)=\"inputElKeyHandler($event)\"\n           (input)=\"reloadListInDelay($event)\"\n           [(ngModel)]=\"keyword\" />\n\n    <!-- dropdown that user can select -->\n    <ul *ngIf=\"dropdownVisible\" [class.empty]=\"emptyList\">\n      <li *ngIf=\"isLoading\" class=\"loading\">{{loadingText}}</li>\n      <li *ngIf=\"minCharsEntered && !isLoading && !filteredList.length\"\n           (mousedown)=\"selectOne('')\"\n           class=\"no-match-found\">{{noMatchFoundText || 'No Result Found'}}</li>\n      <li *ngIf=\"blankOptionText && filteredList.length\"\n          (mousedown)=\"selectOne('')\"\n          class=\"blank-item\">{{blankOptionText}}</li>\n      <li class=\"item\"\n          *ngFor=\"let item of filteredList; let i=index\"\n          (mousedown)=\"selectOne(item)\"\n          [ngClass]=\"{selected: i === itemIndex}\"\n          [innerHtml]=\"getFormattedList(item)\">\n      </li>\n    </ul>\n\n  </div>",
            providers: [ng2_auto_complete_1.Ng2AutoComplete],
            styles: ["\n  @keyframes slideDown {\n    0% {\n      transform:  translateY(-10px);\n    }\n    100% {\n      transform: translateY(0px);\n    }\n  }\n  .ng2-auto-complete {\n    background-color: transparent;\n  }\n  .ng2-auto-complete > input {\n    outline: none;\n    border: 0;\n    padding: 2px; \n    box-sizing: border-box;\n    background-clip: content-box;\n  }\n\n  .ng2-auto-complete > ul {\n    background-color: #fff;\n    margin: 0;\n    width : 100%;\n    overflow-y: auto;\n    list-style-type: none;\n    padding: 0;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    animation: slideDown 0.1s;\n  }\n  .ng2-auto-complete > ul.empty {\n    display: none;\n  }\n\n  .ng2-auto-complete > ul li {\n    padding: 2px 5px;\n    border-bottom: 1px solid #eee;\n  }\n\n  .ng2-auto-complete > ul li.selected {\n    background-color: #ccc;\n  }\n\n  .ng2-auto-complete > ul li:last-child {\n    border-bottom: none;\n  }\n\n  .ng2-auto-complete > ul li:hover {\n    background-color: #ccc;\n  }"
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, ng2_auto_complete_1.Ng2AutoComplete])
    ], Ng2AutoCompleteComponent);
    return Ng2AutoCompleteComponent;
}());
exports.Ng2AutoCompleteComponent = Ng2AutoCompleteComponent;


/***/ }),

/***/ 33:
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(74);
__webpack_require__(75);
/**
 * provides auto-complete related utility functions
 */
var Ng2AutoComplete = (function () {
    function Ng2AutoComplete(http) {
        this.http = http;
        // ...
    }
    Ng2AutoComplete.prototype.filter = function (list, keyword) {
        return list.filter(function (el) {
            var objStr = JSON.stringify(el).toLowerCase();
            keyword = keyword.toLowerCase();
            //console.log(objStr, keyword, objStr.indexOf(keyword) !== -1);
            return objStr.indexOf(keyword) !== -1;
        });
    };
    /**
     * return remote data from the given source and options, and data path
     */
    Ng2AutoComplete.prototype.getRemoteData = function (keyword) {
        var _this = this;
        if (typeof this.source !== 'string') {
            throw "Invalid type of source, must be a string. e.g. http://www.google.com?q=:my_keyword";
        }
        else if (!this.http) {
            throw "Http is required.";
        }
        var matches = this.source.match(/:[a-zA-Z_]+/);
        if (matches === null) {
            throw "Replacement word is missing.";
        }
        var replacementWord = matches[0];
        var url = this.source.replace(replacementWord, keyword);
        return this.http.get(url)
            .map(function (resp) { return resp.json(); })
            .map(function (resp) {
            var list = resp.data || resp;
            if (_this.pathToData) {
                var paths = _this.pathToData.split(".");
                paths.forEach(function (prop) { return list = list[prop]; });
            }
            return list;
        });
    };
    ;
    Ng2AutoComplete = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Ng2AutoComplete);
    return Ng2AutoComplete;
}());
exports.Ng2AutoComplete = Ng2AutoComplete;


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var component_loader_class_1 = __webpack_require__(79);
exports.ComponentLoader = component_loader_class_1.ComponentLoader;
var component_loader_factory_1 = __webpack_require__(283);
exports.ComponentLoaderFactory = component_loader_factory_1.ComponentLoaderFactory;
var content_ref_class_1 = __webpack_require__(80);
exports.ContentRef = content_ref_class_1.ContentRef;


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng_positioning_1 = __webpack_require__(81);
exports.positionElements = ng_positioning_1.positionElements;
exports.Positioning = ng_positioning_1.Positioning;
var positioning_service_1 = __webpack_require__(284);
exports.PositioningService = positioning_service_1.PositioningService;


/***/ }),

/***/ 36:
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
var tabset_component_1 = __webpack_require__(37);
var TabDirective = (function () {
    function TabDirective(tabset) {
        /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
        this.select = new core_1.EventEmitter();
        /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
        this.deselect = new core_1.EventEmitter();
        /** fired before tab will be removed */
        this.removed = new core_1.EventEmitter();
        this.addClass = true;
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabDirective.prototype, "active", {
        /** tab active state toggle */
        get: function () {
            return this._active;
        },
        set: function (active) {
            var _this = this;
            if (this.disabled && active || !active) {
                if (!active) {
                    this._active = active;
                }
                this.deselect.emit(this);
                return;
            }
            this._active = active;
            this.select.emit(this);
            this.tabset.tabs.forEach(function (tab) {
                if (tab !== _this) {
                    tab.active = false;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    TabDirective.prototype.ngOnInit = function () {
        this.removable = this.removable;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TabDirective.prototype, "heading", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TabDirective.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TabDirective.prototype, "removable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TabDirective.prototype, "customClass", void 0);
    __decorate([
        core_1.HostBinding('class.active'),
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TabDirective.prototype, "active", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TabDirective.prototype, "select", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TabDirective.prototype, "deselect", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TabDirective.prototype, "removed", void 0);
    __decorate([
        core_1.HostBinding('class.tab-pane'), 
        __metadata('design:type', Boolean)
    ], TabDirective.prototype, "addClass", void 0);
    TabDirective = __decorate([
        core_1.Directive({ selector: 'tab, [tab]' }), 
        __metadata('design:paramtypes', [tabset_component_1.TabsetComponent])
    ], TabDirective);
    return TabDirective;
}());
exports.TabDirective = TabDirective;


/***/ }),

/***/ 37:
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
var tabset_config_1 = __webpack_require__(38);
// todo: add active event to tab
// todo: fix? mixing static and dynamic tabs position tabs in order of creation
var TabsetComponent = (function () {
    function TabsetComponent(config) {
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        /** if true tabs will be placed vertically */
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        /** if true tabs fill the container and have a consistent width */
        get: function () {
            return this._justified;
        },
        set: function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        /** navigation context class: 'tabs' or 'pills' */
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    TabsetComponent.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
    };
    TabsetComponent.prototype.addTab = function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && tab.active !== false;
    };
    TabsetComponent.prototype.removeTab = function (tab) {
        var index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (tab.active && this.hasAvailableTabs(index)) {
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        tab.removed.emit(tab);
        this.tabs.splice(index, 1);
    };
    TabsetComponent.prototype.getClosestTabIndex = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var step = 1; step <= tabsLength; step += 1) {
            var prevIndex = index - step;
            var nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    TabsetComponent.prototype.hasAvailableTabs = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    TabsetComponent.prototype.setClassMap = function () {
        this.classMap = (_a = {
                'nav-stacked': this.vertical,
                'nav-justified': this.justified
            },
            _a["nav-" + this.type] = true,
            _a
        );
        var _a;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TabsetComponent.prototype, "vertical", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TabsetComponent.prototype, "justified", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TabsetComponent.prototype, "type", null);
    __decorate([
        core_1.HostBinding('class.tab-container'), 
        __metadata('design:type', Boolean)
    ], TabsetComponent.prototype, "clazz", void 0);
    TabsetComponent = __decorate([
        core_1.Component({
            selector: 'tabset',
            template: "\n    <ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\">\n        <li *ngFor=\"let tabz of tabs\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\n          [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n          <a href=\"javascript:void(0);\" class=\"nav-link\"\n            [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n            (click)=\"tabz.active = true\">\n            <span [ngTransclude]=\"tabz.headingRef\">{{tabz.heading}}</span>\n            <span *ngIf=\"tabz.removable\">\n              <span (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"glyphicon glyphicon-remove-circle\"></span>\n            </span>\n          </a>\n        </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-content></ng-content>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [tabset_config_1.TabsetConfig])
    ], TabsetComponent);
    return TabsetComponent;
}());
exports.TabsetComponent = TabsetComponent;


/***/ }),

/***/ 38:
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
var TabsetConfig = (function () {
    function TabsetConfig() {
        /** provides default navigation context class: 'tabs' or 'pills' */
        this.type = 'tabs';
    }
    TabsetConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TabsetConfig);
    return TabsetConfig;
}());
exports.TabsetConfig = TabsetConfig;


/***/ }),

/***/ 39:
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
var tooltip_config_1 = __webpack_require__(23);
var ng2_bootstrap_config_1 = __webpack_require__(291);
var TooltipContainerComponent = (function () {
    function TooltipContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        get: function () {
            return ng2_bootstrap_config_1.isBs3();
        },
        enumerable: true,
        configurable: true
    });
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap['tooltip-' + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.popupClass) {
            this.classMap[this.popupClass] = true;
        }
    };
    TooltipContainerComponent = __decorate([
        core_1.Component({
            selector: 'bs-tooltip-container',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            // tslint:disable-next-line
            host: {
                '[class]': '"tooltip in tooltip-" + placement + " " + placement',
                '[class.show]': '!isBs3',
                role: 'tooltip'
            },
            template: "\n    <div class=\"tooltip-arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    "
        }), 
        __metadata('design:paramtypes', [tooltip_config_1.TooltipConfig])
    ], TooltipContainerComponent);
    return TooltipContainerComponent;
}());
exports.TooltipContainerComponent = TooltipContainerComponent;


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function escapeRegexp(queryToEscape) {
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
exports.escapeRegexp = escapeRegexp;


/***/ }),

/***/ 41:
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
var common_1 = __webpack_require__(40);
var HighlightPipe = (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (value, query) {
        if (query.length < 1) {
            return value;
        }
        if (query) {
            var tagRE = new RegExp('<[^<>]*>', 'ig');
            // get ist of tags
            var tagList = value.match(tagRE);
            // Replace tags with token
            var tmpValue = value.replace(tagRE, '$!$');
            // Replace search words
            value = tmpValue.replace(new RegExp(common_1.escapeRegexp(query), 'gi'), '<strong>$&</strong>');
            // Reinsert HTML
            for (var i = 0; value.indexOf('$!$') > -1; i++) {
                value = value.replace('$!$', tagList[i]);
            }
        }
        return value;
    };
    HighlightPipe = __decorate([
        core_1.Pipe({ name: 'highlight' }), 
        __metadata('design:paramtypes', [])
    ], HighlightPipe);
    return HighlightPipe;
}());
exports.HighlightPipe = HighlightPipe;
function stripTags(input) {
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '').replace(tags, '');
}
exports.stripTags = stripTags;


/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var lib_module_1 = __webpack_require__(264);
exports.LibModule = lib_module_1.LibModule;


/***/ }),

/***/ 74:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_74__;

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_75__;

/***/ }),

/***/ 77:
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var ng2_auto_complete_component_1 = __webpack_require__(32);
var forms_1 = __webpack_require__(4);
/**
 * display auto-complete section with input and dropdown list when it is clicked
 */
var Ng2AutoCompleteDirective = (function () {
    function Ng2AutoCompleteDirective(resolver, renderer, viewContainerRef, parentForm) {
        var _this = this;
        this.resolver = resolver;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.parentForm = parentForm;
        this.loadingText = "Loading";
        this.tabToSelect = true;
        this.ngModelChange = new core_1.EventEmitter();
        this.valueChanged = new core_1.EventEmitter();
        //show auto-complete list below the current element
        this.showAutoCompleteDropdown = function (event) {
            var factory = _this.resolver.resolveComponentFactory(ng2_auto_complete_component_1.Ng2AutoCompleteComponent);
            _this.componentRef = _this.viewContainerRef.createComponent(factory);
            var component = _this.componentRef.instance;
            component.showInputTag = false; //Do NOT display autocomplete input tag separately
            component.pathToData = _this.pathToData;
            component.minChars = _this.minChars;
            component.source = _this.source;
            component.placeholder = _this.autoCompletePlaceholder;
            component.acceptUserInput = _this.acceptUserInput;
            component.maxNumList = parseInt(_this.maxNumList, 10);
            component.loadingText = _this.loadingText;
            component.listFormatter = _this.listFormatter;
            component.blankOptionText = _this.blankOptionText;
            component.noMatchFoundText = _this.noMatchFoundText;
            component.tabToSelect = _this.tabToSelect;
            component.valueSelected.subscribe(_this.selectNewValue);
            _this.acDropdownEl = _this.componentRef.location.nativeElement;
            _this.acDropdownEl.style.display = "none";
            // if this element is not an input tag, move dropdown after input tag
            // so that it displays correctly
            if (_this.el.tagName !== "INPUT" && _this.acDropdownEl) {
                _this.inputEl.parentElement.insertBefore(_this.acDropdownEl, _this.inputEl.nextSibling);
            }
            _this.revertValue = typeof _this.ngModel !== "undefined" ? _this.ngModel : _this.inputEl.value;
            setTimeout(function () {
                component.reloadList(_this.inputEl.value);
                _this.styleAutoCompleteDropdown();
                component.dropdownVisible = true;
            });
        };
        this.hideAutoCompleteDropdown = function (event) {
            if (_this.componentRef) {
                var currentItem = void 0;
                var hasRevertValue = (typeof _this.revertValue !== "undefined");
                if (_this.inputEl && hasRevertValue && _this.acceptUserInput === false) {
                    currentItem = _this.componentRef.instance.findItemFromSelectValue(_this.inputEl.value);
                }
                _this.componentRef.destroy();
                _this.componentRef = undefined;
                if (_this.inputEl &&
                    hasRevertValue &&
                    _this.acceptUserInput === false &&
                    currentItem === null) {
                    _this.selectNewValue(_this.revertValue);
                }
            }
        };
        this.styleAutoCompleteDropdown = function () {
            if (_this.componentRef) {
                var component = _this.componentRef.instance;
                /* setting width/height auto complete */
                var thisElBCR = _this.el.getBoundingClientRect();
                var thisInputElBCR = _this.inputEl.getBoundingClientRect();
                var closeToBottom = thisInputElBCR.bottom + 100 > window.innerHeight;
                _this.acDropdownEl.style.width = thisInputElBCR.width + "px";
                _this.acDropdownEl.style.position = "absolute";
                _this.acDropdownEl.style.zIndex = "1";
                _this.acDropdownEl.style.left = "0";
                _this.acDropdownEl.style.display = "inline-block";
                if (closeToBottom) {
                    _this.acDropdownEl.style.bottom = thisInputElBCR.height + "px";
                }
                else {
                    _this.acDropdownEl.style.top = thisInputElBCR.height + "px";
                }
            }
        };
        this.selectNewValue = function (item) {
            // make displayable value
            if (item && typeof item === "object") {
                item = _this.setToStringFunction(item);
            }
            _this.inputEl && (_this.inputEl.value = '' + item);
            // make return value
            var val = item;
            if (_this.selectValueOf && item[_this.selectValueOf]) {
                val = item[_this.selectValueOf];
            }
            if ((_this.parentForm && _this.formControlName) || _this.extFormControl) {
                if (!!val) {
                    _this.formControl.patchValue(val);
                }
            }
            (val !== _this.ngModel) && _this.ngModelChange.emit(val);
            _this.valueChanged.emit(val);
            _this.hideAutoCompleteDropdown();
        };
        this.keydownEventHandler = function (evt) {
            if (_this.componentRef) {
                var component = _this.componentRef.instance;
                component.inputElKeyHandler(evt);
            }
        };
        this.inputEventHandler = function (evt) {
            if (_this.componentRef) {
                var component = _this.componentRef.instance;
                component.dropdownVisible = true;
                component.reloadListInDelay(evt);
            }
            else {
                _this.showAutoCompleteDropdown();
            }
        };
        this.el = this.viewContainerRef.element.nativeElement;
    }
    Ng2AutoCompleteDirective.prototype.ngOnInit = function () {
        // wrap this element with <div class="ng2-auto-complete">
        this.wrapperEl = document.createElement("div");
        this.wrapperEl.className = "ng2-auto-complete-wrapper";
        this.wrapperEl.style.position = "relative";
        this.el.parentElement.insertBefore(this.wrapperEl, this.el.nextSibling);
        this.wrapperEl.appendChild(this.el);
        //Check if we were supplied with a [formControlName] and it is inside a [form]
        //else check if we are supplied with a [FormControl] regardless if it is inside a [form] tag
        if (this.parentForm && this.formControlName) {
            if (this.parentForm['form']) {
                this.formControl = this.parentForm['form'].get(this.formControlName);
            }
            else if (this.parentForm instanceof forms_1.FormGroupName) {
                this.formControl = this.parentForm.control.controls[this.formControlName];
            }
        }
        else if (this.extFormControl) {
            this.formControl = this.extFormControl;
        }
        // apply toString() method for the object
        if (!!this.ngModel) {
            this.selectNewValue(this.ngModel);
        }
        else if (!!this.formControl && this.formControl.value) {
            this.selectNewValue(this.formControl.value[this.displayPropertyName]);
        }
    };
    Ng2AutoCompleteDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        // if this element is not an input tag, move dropdown after input tag
        // so that it displays correctly
        this.inputEl = this.el.tagName === "INPUT" ?
            this.el : this.el.querySelector("input");
        this.inputEl.addEventListener('focus', function (e) { return _this.showAutoCompleteDropdown(e); });
        this.inputEl.addEventListener('blur', function (e) { return _this.hideAutoCompleteDropdown(e); });
        this.inputEl.addEventListener('keydown', function (e) { return _this.keydownEventHandler(e); });
        this.inputEl.addEventListener('input', function (e) { return _this.inputEventHandler(e); });
    };
    Ng2AutoCompleteDirective.prototype.ngOnDestroy = function () {
        if (this.componentRef) {
            this.componentRef.instance.valueSelected.unsubscribe();
        }
    };
    Ng2AutoCompleteDirective.prototype.ngOnChanges = function (changes) {
        if (changes['ngModel']) {
            this.ngModel = this.setToStringFunction(changes['ngModel'].currentValue);
        }
    };
    Ng2AutoCompleteDirective.prototype.setToStringFunction = function (item) {
        if (item && typeof item === "object") {
            var displayVal_1;
            if (typeof this.valueFormatter === 'string') {
                var matches = this.valueFormatter.match(/[a-zA-Z0-9_\$]+/g);
                var formatted_1 = this.valueFormatter;
                if (matches && typeof item !== 'string') {
                    matches.forEach(function (key) {
                        formatted_1 = formatted_1.replace(key, item[key]);
                    });
                }
                displayVal_1 = formatted_1;
            }
            else if (typeof this.valueFormatter === 'function') {
                displayVal_1 = this.valueFormatter(item);
            }
            else if (this.displayPropertyName) {
                displayVal_1 = item[this.displayPropertyName];
            }
            else if (typeof this.listFormatter === 'string' && this.listFormatter.match(/^\w+$/)) {
                displayVal_1 = item[this.listFormatter];
            }
            else {
                displayVal_1 = item.value;
            }
            item.toString = function () {
                return displayVal_1;
            };
        }
        return item;
    };
    __decorate([
        core_1.Input("auto-complete-placeholder"), 
        __metadata('design:type', String)
    ], Ng2AutoCompleteDirective.prototype, "autoCompletePlaceholder", void 0);
    __decorate([
        core_1.Input("source"), 
        __metadata('design:type', Object)
    ], Ng2AutoCompleteDirective.prototype, "source", void 0);
    __decorate([
        core_1.Input("path-to-data"), 
        __metadata('design:type', String)
    ], Ng2AutoCompleteDirective.prototype, "pathToData", void 0);
    __decorate([
        core_1.Input("min-chars"), 
        __metadata('design:type', Number)
    ], Ng2AutoCompleteDirective.prototype, "minChars", void 0);
    __decorate([
        core_1.Input("display-property-name"), 
        __metadata('design:type', String)
    ], Ng2AutoCompleteDirective.prototype, "displayPropertyName", void 0);
    __decorate([
        core_1.Input("accept-user-input"), 
        __metadata('design:type', Boolean)
    ], Ng2AutoCompleteDirective.prototype, "acceptUserInput", void 0);
    __decorate([
        core_1.Input("max-num-list"), 
        __metadata('design:type', String)
    ], Ng2AutoCompleteDirective.prototype, "maxNumList", void 0);
    __decorate([
        core_1.Input("select-value-of"), 
        __metadata('design:type', String)
    ], Ng2AutoCompleteDirective.prototype, "selectValueOf", void 0);
    __decorate([
        core_1.Input("list-formatter"), 
        __metadata('design:type', Object)
    ], Ng2AutoCompleteDirective.prototype, "listFormatter", void 0);
    __decorate([
        core_1.Input("loading-text"), 
        __metadata('design:type', String)
    ], Ng2AutoCompleteDirective.prototype, "loadingText", void 0);
    __decorate([
        core_1.Input("blank-option-text"), 
        __metadata('design:type', String)
    ], Ng2AutoCompleteDirective.prototype, "blankOptionText", void 0);
    __decorate([
        core_1.Input("no-match-found-text"), 
        __metadata('design:type', String)
    ], Ng2AutoCompleteDirective.prototype, "noMatchFoundText", void 0);
    __decorate([
        core_1.Input("value-formatter"), 
        __metadata('design:type', Object)
    ], Ng2AutoCompleteDirective.prototype, "valueFormatter", void 0);
    __decorate([
        core_1.Input("tab-to-select"), 
        __metadata('design:type', Boolean)
    ], Ng2AutoCompleteDirective.prototype, "tabToSelect", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Ng2AutoCompleteDirective.prototype, "ngModel", void 0);
    __decorate([
        core_1.Input('formControlName'), 
        __metadata('design:type', String)
    ], Ng2AutoCompleteDirective.prototype, "formControlName", void 0);
    __decorate([
        core_1.Input('formControl'), 
        __metadata('design:type', forms_1.FormControl)
    ], Ng2AutoCompleteDirective.prototype, "extFormControl", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Ng2AutoCompleteDirective.prototype, "ngModelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Ng2AutoCompleteDirective.prototype, "valueChanged", void 0);
    Ng2AutoCompleteDirective = __decorate([
        core_1.Directive({
            selector: "[auto-complete], [ng2-auto-complete]"
        }),
        __param(3, core_1.Optional()),
        __param(3, core_1.Host()),
        __param(3, core_1.SkipSelf()), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, core_1.Renderer, core_1.ViewContainerRef, forms_1.ControlContainer])
    ], Ng2AutoCompleteDirective);
    return Ng2AutoCompleteDirective;
}());
exports.Ng2AutoCompleteDirective = Ng2AutoCompleteDirective;


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// todo: add delay support
// todo: merge events onShow, onShown, etc...
// todo: add global positioning configuration?
var core_1 = __webpack_require__(0);
var content_ref_class_1 = __webpack_require__(80);
var triggers_1 = __webpack_require__(293);
var ComponentLoader = (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * @internal
     * @param _viewContainerRef
     * @param _elementRef
     * @param _injector
     * @param _renderer
     * @param _componentFactoryResolver
     * @param _ngZone
     * @param _posService
     */
    // tslint:disable-next-line
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _posService) {
        this.onBeforeShow = new core_1.EventEmitter();
        this.onShown = new core_1.EventEmitter();
        this.onBeforeHide = new core_1.EventEmitter();
        this.onHidden = new core_1.EventEmitter();
        this._providers = [];
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._posService = _posService;
        this._viewContainerRef = _viewContainerRef;
        this._componentFactoryResolver = _componentFactoryResolver;
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        get: function () {
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ComponentLoader.prototype.attach = function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    // todo: add behaviour: to target element, `body`, custom element
    ComponentLoader.prototype.to = function (container) {
        this.container = container || this.container;
        return this;
    };
    ComponentLoader.prototype.position = function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = opts.target || this._elementRef;
        return this;
    };
    ComponentLoader.prototype.provide = function (provider) {
        this._providers.push(provider);
        return this;
    };
    ComponentLoader.prototype.show = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content);
            var injector = core_1.ReflectiveInjector.resolveAndCreate(this._providers, this._injector);
            this._componentRef = this._viewContainerRef
                .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container === 'body' && typeof document !== 'undefined') {
                document.querySelector(this.container)
                    .appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            this._componentRef.changeDetectorRef.markForCheck();
            this.onShown.emit(this._componentRef.instance);
        }
        return this._componentRef;
    };
    ComponentLoader.prototype.hide = function () {
        if (this._componentRef) {
            this.onBeforeHide.emit(this._componentRef.instance);
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
            this._componentRef = null;
            if (this._contentRef.viewRef) {
                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
                this._contentRef = null;
            }
            this._componentRef = null;
            this.onHidden.emit();
        }
        return this;
    };
    ComponentLoader.prototype.toggle = function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    ComponentLoader.prototype.dispose = function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    ComponentLoader.prototype.listen = function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        listenOpts.target = listenOpts.target || this._elementRef;
        listenOpts.show = listenOpts.show || (function () { return _this.show(); });
        listenOpts.hide = listenOpts.hide || (function () { return _this.hide(); });
        listenOpts.toggle = listenOpts.toggle || (function () { return _this.isShown
            ? listenOpts.hide()
            : listenOpts.show(); });
        this._unregisterListenersFn = triggers_1.listenToTriggers(this._renderer, listenOpts.target.nativeElement, this.triggers, listenOpts.show, listenOpts.hide, listenOpts.toggle);
        return this;
    };
    ComponentLoader.prototype._subscribePositioning = function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone
            .onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    ComponentLoader.prototype._unsubscribePositioning = function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    ComponentLoader.prototype._getContentRef = function (content) {
        if (!content) {
            return new content_ref_class_1.ContentRef([]);
        }
        if (content instanceof core_1.TemplateRef) {
            var viewRef = this._viewContainerRef
                .createEmbeddedView(content);
            return new content_ref_class_1.ContentRef([viewRef.rootNodes], viewRef);
        }
        return new content_ref_class_1.ContentRef([[this._renderer.createText(null, "" + content)]]);
    };
    return ComponentLoader;
}());
exports.ComponentLoader = ComponentLoader;


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */

var ContentRef = (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());
exports.ContentRef = ContentRef;


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */

// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split(' ')[0] || 'top';
        var placementSecondary = placement.split(' ')[1] || 'center';
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    Positioning.prototype.getStyle = function (element, prop) { return window.getComputedStyle(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    return Positioning;
}());
exports.Positioning = Positioning;
var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
exports.positionElements = positionElements;


/***/ }),

/***/ 82:
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
var NgTranscludeDirective = (function () {
    function NgTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
        get: function () {
            return this._ngTransclude;
        },
        set: function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.TemplateRef), 
        __metadata('design:paramtypes', [core_1.TemplateRef])
    ], NgTranscludeDirective.prototype, "ngTransclude", null);
    NgTranscludeDirective = __decorate([
        core_1.Directive({
            selector: '[ngTransclude]'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], NgTranscludeDirective);
    return NgTranscludeDirective;
}());
exports.NgTranscludeDirective = NgTranscludeDirective;


/***/ }),

/***/ 83:
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
var tab_directive_1 = __webpack_require__(36);
/** Should be used to mark <template> element as a template for tab heading */
var TabHeadingDirective = (function () {
    function TabHeadingDirective(templateRef, tab) {
        tab.headingRef = templateRef;
    }
    TabHeadingDirective = __decorate([
        core_1.Directive({ selector: '[tabHeading]' }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, tab_directive_1.TabDirective])
    ], TabHeadingDirective);
    return TabHeadingDirective;
}());
exports.TabHeadingDirective = TabHeadingDirective;


/***/ }),

/***/ 84:
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
var tooltip_container_component_1 = __webpack_require__(39);
var tooltip_config_1 = __webpack_require__(23);
var component_loader_1 = __webpack_require__(34);
var decorators_1 = __webpack_require__(289);
var TooltipDirective = (function () {
    // tslint:disable-next-line
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
        /** Fired when tooltip content changes */
        this.tooltipChange = new core_1.EventEmitter();
        /** @deprecated - removed, will be added to configuration */
        this._animation = true;
        /** @deprecated */
        this._delay = 0;
        /** @deprecated */
        this._fadeDuration = 150;
        /** @deprecated */
        this.tooltipStateChanged = new core_1.EventEmitter();
        this._tooltip = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: tooltip_config_1.TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         */
        get: function () { return this._tooltip.isShown; },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "htmlContent", {
        /* tslint:disable */
        /** @deprecated - please use `tooltip` instead */
        set: function (value) {
            console.warn('tooltipHtml was deprecated, please use `tooltip` instead');
            this.tooltip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_placement", {
        /** @deprecated - please use `placement` instead */
        set: function (value) {
            console.warn('tooltipPlacement was deprecated, please use `placement` instead');
            this.placement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
        get: function () {
            console.warn('tooltipIsOpen was deprecated, please use `isOpen` instead');
            return this.isOpen;
        },
        /** @deprecated - please use `isOpen` instead*/
        set: function (value) {
            console.warn('tooltipIsOpen was deprecated, please use `isOpen` instead');
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_enable", {
        get: function () {
            console.warn('tooltipEnable was deprecated, please use `isDisabled` instead');
            return this.isDisabled === true;
        },
        /** @deprecated - please use `isDisabled` instead */
        set: function (value) {
            console.warn('tooltipEnable was deprecated, please use `isDisabled` instead');
            this.isDisabled = value === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
        get: function () {
            console.warn('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            return this.container === 'body';
        },
        /** @deprecated - please use `container="body"` instead */
        set: function (value) {
            console.warn('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            this.container = value ? 'body' : this.container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_popupClass", {
        /** @deprecated - will replaced with customClass */
        set: function (value) {
            console.warn('tooltipClass deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipContext", {
        /** @deprecated - removed */
        set: function (value) {
            console.warn('tooltipContext deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
        /** @deprecated -  please use `triggers` instead */
        get: function () {
            console.warn('tooltipTrigger was deprecated, please use `triggers` instead');
            return this.triggers;
        },
        set: function (value) {
            console.warn('tooltipTrigger was deprecated, please use `triggers` instead');
            this.triggers = (value || '').toString();
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    TooltipDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.tooltip) {
            return;
        }
        var showTooltip = function () { return _this._tooltip
            .attach(tooltip_container_component_1.TooltipContainerComponent)
            .to(_this.container)
            .position({ attachment: _this.placement })
            .show({
            content: _this.tooltip,
            placement: _this.placement
        }); };
        if (this._delay) {
            this._delayTimeoutId = setTimeout(function () { showTooltip(); }, this._delay);
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this._fadeDuration);
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        this._tooltip.dispose();
    };
    __decorate([
        decorators_1.OnChange(),
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TooltipDirective.prototype, "tooltip", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TooltipDirective.prototype, "tooltipChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TooltipDirective.prototype, "placement", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TooltipDirective.prototype, "triggers", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TooltipDirective.prototype, "container", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TooltipDirective.prototype, "isOpen", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TooltipDirective.prototype, "isDisabled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TooltipDirective.prototype, "onShown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TooltipDirective.prototype, "onHidden", void 0);
    __decorate([
        core_1.Input('tooltipHtml'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], TooltipDirective.prototype, "htmlContent", null);
    __decorate([
        core_1.Input('tooltipPlacement'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], TooltipDirective.prototype, "_placement", null);
    __decorate([
        core_1.Input('tooltipIsOpen'), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], TooltipDirective.prototype, "_isOpen", null);
    __decorate([
        core_1.Input('tooltipEnable'), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], TooltipDirective.prototype, "_enable", null);
    __decorate([
        core_1.Input('tooltipAppendToBody'), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], TooltipDirective.prototype, "_appendToBody", null);
    __decorate([
        core_1.Input('tooltipAnimation'), 
        __metadata('design:type', Boolean)
    ], TooltipDirective.prototype, "_animation", void 0);
    __decorate([
        core_1.Input('tooltipClass'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], TooltipDirective.prototype, "_popupClass", null);
    __decorate([
        core_1.Input('tooltipContext'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], TooltipDirective.prototype, "_tooltipContext", null);
    __decorate([
        core_1.Input('tooltipPopupDelay'), 
        __metadata('design:type', Number)
    ], TooltipDirective.prototype, "_delay", void 0);
    __decorate([
        core_1.Input('tooltipFadeDuration'), 
        __metadata('design:type', Number)
    ], TooltipDirective.prototype, "_fadeDuration", void 0);
    __decorate([
        core_1.Input('tooltipTrigger'), 
        __metadata('design:type', Object)
    ], TooltipDirective.prototype, "_tooltipTrigger", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TooltipDirective.prototype, "tooltipStateChanged", void 0);
    TooltipDirective = __decorate([
        core_1.Directive({
            selector: '[tooltip], [tooltipHtml]',
            exportAs: 'bs-tooltip'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.Renderer, core_1.ElementRef, component_loader_1.ComponentLoaderFactory, tooltip_config_1.TooltipConfig])
    ], TooltipDirective);
    return TooltipDirective;
}());
exports.TooltipDirective = TooltipDirective;


/***/ }),

/***/ 85:
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
var OffClickDirective = (function () {
    function OffClickDirective() {
    }
    /* tslint:enable */
    OffClickDirective.prototype.onClick = function ($event) {
        $event.stopPropagation();
    };
    OffClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { if (typeof document !== 'undefined') {
            document.addEventListener('click', _this.offClickHandler);
        } }, 0);
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        if (typeof document !== 'undefined') {
            document.removeEventListener('click', this.offClickHandler);
        }
    };
    __decorate([
        core_1.Input('offClick'), 
        __metadata('design:type', Object)
    ], OffClickDirective.prototype, "offClickHandler", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [MouseEvent]), 
        __metadata('design:returntype', void 0)
    ], OffClickDirective.prototype, "onClick", null);
    OffClickDirective = __decorate([
        core_1.Directive({
            selector: '[offClick]'
        }), 
        __metadata('design:paramtypes', [])
    ], OffClickDirective);
    return OffClickDirective;
}());
exports.OffClickDirective = OffClickDirective;


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var SelectItem = (function () {
    function SelectItem(source) {
        var _this = this;
        if (typeof source === 'string') {
            this.id = this.text = source;
        }
        if (typeof source === 'object') {
            this.id = source.id || source.text;
            this.text = source.text;
            if (source.children && source.text) {
                this.children = source.children.map(function (c) {
                    var r = new SelectItem(c);
                    r.parent = _this;
                    return r;
                });
                this.text = source.text;
            }
        }
    }
    SelectItem.prototype.fillChildrenHash = function (optionsMap, startIndex) {
        var i = startIndex;
        this.children.map(function (child) {
            optionsMap.set(child.id, i++);
        });
        return i;
    };
    SelectItem.prototype.hasChildren = function () {
        return this.children && this.children.length > 0;
    };
    SelectItem.prototype.getSimilar = function () {
        var r = new SelectItem(false);
        r.id = this.id;
        r.text = this.text;
        r.parent = this.parent;
        return r;
    };
    return SelectItem;
}());
exports.SelectItem = SelectItem;


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var platform_browser_1 = __webpack_require__(14);
var select_item_1 = __webpack_require__(86);
var select_pipes_1 = __webpack_require__(41);
var common_1 = __webpack_require__(40);
var styles = "\n  .ui-select-toggle {\n    position: relative;\n  }\n\n  /* Fix caret going into new line in Firefox */\n  .ui-select-placeholder {\n    float: left;\n  }\n  \n  /* Fix Bootstrap dropdown position when inside a input-group */\n  .input-group > .dropdown {\n    /* Instead of relative */\n    position: static;\n  }\n  \n  .ui-select-match > .btn {\n    /* Instead of center because of .btn */\n    text-align: left !important;\n  }\n  \n  .ui-select-match > .caret {\n    position: absolute;\n    top: 45%;\n    right: 15px;\n  }\n  \n  .ui-disabled {\n    background-color: #eceeef;\n    border-radius: 4px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 5;\n    opacity: 0.6;\n    top: 0;\n    left: 0;\n    cursor: not-allowed;\n  }\n  \n  .ui-select-choices {\n    width: 100%;\n    height: auto;\n    max-height: 200px;\n    overflow-x: hidden;\n    margin-top: 0;\n  }\n  \n  .ui-select-multiple .ui-select-choices {\n    margin-top: 1px;\n  }\n  .ui-select-choices-row>a {\n      display: block;\n      padding: 3px 20px;\n      clear: both;\n      font-weight: 400;\n      line-height: 1.42857143;\n      color: #333;\n      white-space: nowrap;\n  }\n  .ui-select-choices-row.active>a {\n      color: #fff;\n      text-decoration: none;\n      outline: 0;\n      background-color: #428bca;\n  }\n  \n  .ui-select-multiple {\n    height: auto;\n    padding:3px 3px 0 3px;\n  }\n  \n  .ui-select-multiple input.ui-select-search {\n    background-color: transparent !important; /* To prevent double background when disabled */\n    border: none;\n    outline: none;\n    box-shadow: none;\n    height: 1.6666em;\n    padding: 0;\n    margin-bottom: 3px;\n    \n  }\n  .ui-select-match .close {\n      font-size: 1.6em;\n      line-height: 0.75;\n  }\n  \n  .ui-select-multiple .ui-select-match-item {\n    outline: 0;\n    margin: 0 3px 3px 0;\n  }\n  .ui-select-toggle > .caret {\n      position: absolute;\n      height: 10px;\n      top: 50%;\n      right: 10px;\n      margin-top: -2px;\n  }\n";
var SelectComponent = (function () {
    function SelectComponent(element, sanitizer) {
        this.sanitizer = sanitizer;
        this.allowClear = false;
        this.placeholder = '';
        this.idField = 'id';
        this.textField = 'text';
        this.childrenField = 'children';
        this.multiple = false;
        this.data = new core_1.EventEmitter();
        this.selected = new core_1.EventEmitter();
        this.removed = new core_1.EventEmitter();
        this.typed = new core_1.EventEmitter();
        this.opened = new core_1.EventEmitter();
        this.options = [];
        this.itemObjects = [];
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inputMode = false;
        this._optionsOpened = false;
        this.inputValue = '';
        this._items = [];
        this._disabled = false;
        this._active = [];
        this.element = element;
        this.clickedOutside = this.clickedOutside.bind(this);
    }
    Object.defineProperty(SelectComponent.prototype, "items", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this._items = this.itemObjects = [];
            }
            else {
                this._items = value.filter(function (item) {
                    if ((typeof item === 'string') || (typeof item === 'object' && item && item[_this.textField] && item[_this.idField])) {
                        return item;
                    }
                });
                this.itemObjects = this._items.map(function (item) { return (typeof item === 'string' ? new select_item_1.SelectItem(item) : new select_item_1.SelectItem({ id: item[_this.idField], text: item[_this.textField], children: item[_this.childrenField] })); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
            if (this._disabled === true) {
                this.hideOptions();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (selectedItems) {
            var _this = this;
            if (!selectedItems || selectedItems.length === 0) {
                this._active = [];
            }
            else {
                var areItemsStrings_1 = typeof selectedItems[0] === 'string';
                this._active = selectedItems.map(function (item) {
                    var data = areItemsStrings_1
                        ? item
                        : { id: item[_this.idField], text: item[_this.textField] };
                    return new select_item_1.SelectItem(data);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "optionsOpened", {
        get: function () {
            return this._optionsOpened;
        },
        set: function (value) {
            this._optionsOpened = value;
            this.opened.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.sanitize = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SelectComponent.prototype.inputEvent = function (e, isUpMode) {
        if (isUpMode === void 0) { isUpMode = false; }
        // tab
        if (e.keyCode === 9) {
            return;
        }
        if (isUpMode && (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38 ||
            e.keyCode === 40 || e.keyCode === 13)) {
            e.preventDefault();
            return;
        }
        // backspace
        if (!isUpMode && e.keyCode === 8) {
            var el = this.element.nativeElement
                .querySelector('div.ui-select-container > input');
            if (!el.value || el.value.length <= 0) {
                if (this.active.length > 0) {
                    this.remove(this.active[this.active.length - 1]);
                }
                e.preventDefault();
            }
        }
        // esc
        if (!isUpMode && e.keyCode === 27) {
            this.hideOptions();
            this.element.nativeElement.children[0].focus();
            e.preventDefault();
            return;
        }
        // del
        if (!isUpMode && e.keyCode === 46) {
            if (this.active.length > 0) {
                this.remove(this.active[this.active.length - 1]);
            }
            e.preventDefault();
        }
        // left
        if (!isUpMode && e.keyCode === 37 && this._items.length > 0) {
            this.behavior.first();
            e.preventDefault();
            return;
        }
        // right
        if (!isUpMode && e.keyCode === 39 && this._items.length > 0) {
            this.behavior.last();
            e.preventDefault();
            return;
        }
        // up
        if (!isUpMode && e.keyCode === 38) {
            this.behavior.prev();
            e.preventDefault();
            return;
        }
        // down
        if (!isUpMode && e.keyCode === 40) {
            this.behavior.next();
            e.preventDefault();
            return;
        }
        // enter
        if (!isUpMode && e.keyCode === 13) {
            if (this.active.indexOf(this.activeOption) === -1) {
                this.selectActiveMatch();
                this.behavior.next();
            }
            e.preventDefault();
            return;
        }
        var target = e.target || e.srcElement;
        if (target && target.value) {
            this.inputValue = target.value;
            this.behavior.filter(new RegExp(common_1.escapeRegexp(this.inputValue), 'ig'));
            this.doEvent('typed', this.inputValue);
        }
        else {
            this.open();
        }
    };
    SelectComponent.prototype.ngOnInit = function () {
        this.behavior = (this.firstItemHasChildren) ?
            new ChildrenBehavior(this) : new GenericBehavior(this);
    };
    SelectComponent.prototype.remove = function (item) {
        if (this._disabled === true) {
            return;
        }
        if (this.multiple === true && this.active) {
            var index = this.active.indexOf(item);
            this.active.splice(index, 1);
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
        if (this.multiple === false) {
            this.active = [];
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
    };
    SelectComponent.prototype.doEvent = function (type, value) {
        if (this[type] && value) {
            this[type].next(value);
        }
        this.onTouched();
        if (type === 'selected' || type === 'removed') {
            this.onChange(this.active);
        }
    };
    SelectComponent.prototype.clickedOutside = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    Object.defineProperty(SelectComponent.prototype, "firstItemHasChildren", {
        get: function () {
            return this.itemObjects[0] && this.itemObjects[0].hasChildren();
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.writeValue = function (val) {
        this.active = val;
        this.data.emit(this.active);
    };
    SelectComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    SelectComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    SelectComponent.prototype.matchClick = function (e) {
        if (this._disabled === true) {
            return;
        }
        this.inputMode = !this.inputMode;
        if (this.inputMode === true && ((this.multiple === true && e) || this.multiple === false)) {
            this.focusToInput();
            this.open();
        }
    };
    SelectComponent.prototype.mainClick = function (event) {
        if (this.inputMode === true || this._disabled === true) {
            return;
        }
        if (event.keyCode === 46) {
            event.preventDefault();
            this.inputEvent(event);
            return;
        }
        if (event.keyCode === 8) {
            event.preventDefault();
            this.inputEvent(event, true);
            return;
        }
        if (event.keyCode === 9 || event.keyCode === 13 ||
            event.keyCode === 27 || (event.keyCode >= 37 && event.keyCode <= 40)) {
            event.preventDefault();
            return;
        }
        this.inputMode = true;
        var value = String
            .fromCharCode(96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)
            .toLowerCase();
        this.focusToInput(value);
        this.open();
        var target = event.target || event.srcElement;
        target.value = value;
        this.inputEvent(event);
    };
    SelectComponent.prototype.selectActive = function (value) {
        this.activeOption = value;
    };
    SelectComponent.prototype.isActive = function (value) {
        return this.activeOption.id === value.id;
    };
    SelectComponent.prototype.removeClick = function (value, event) {
        event.stopPropagation();
        this.remove(value);
    };
    SelectComponent.prototype.focusToInput = function (value) {
        var _this = this;
        if (value === void 0) { value = ''; }
        setTimeout(function () {
            var el = _this.element.nativeElement.querySelector('div.ui-select-container > input');
            if (el) {
                el.focus();
                el.value = value;
            }
        }, 0);
    };
    SelectComponent.prototype.open = function () {
        var _this = this;
        this.options = this.itemObjects
            .filter(function (option) { return (_this.multiple === false ||
            _this.multiple === true && !_this.active.find(function (o) { return option.text === o.text; })); });
        if (this.options.length > 0) {
            this.behavior.first();
        }
        this.optionsOpened = true;
    };
    SelectComponent.prototype.hideOptions = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    SelectComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this.activeOption);
    };
    SelectComponent.prototype.selectMatch = function (value, e) {
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.options.length <= 0) {
            return;
        }
        if (this.multiple === true) {
            this.active.push(value);
            this.data.next(this.active);
        }
        if (this.multiple === false) {
            this.active[0] = value;
            this.data.next(this.active[0]);
        }
        this.doEvent('selected', value);
        this.hideOptions();
        if (this.multiple === true) {
            this.focusToInput('');
        }
        else {
            this.focusToInput(select_pipes_1.stripTags(value.text));
            this.element.nativeElement.querySelector('.ui-select-container').focus();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SelectComponent.prototype, "allowClear", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SelectComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SelectComponent.prototype, "idField", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SelectComponent.prototype, "textField", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SelectComponent.prototype, "childrenField", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SelectComponent.prototype, "multiple", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], SelectComponent.prototype, "items", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], SelectComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], SelectComponent.prototype, "active", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SelectComponent.prototype, "data", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SelectComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SelectComponent.prototype, "removed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SelectComponent.prototype, "typed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SelectComponent.prototype, "opened", void 0);
    SelectComponent = __decorate([
        core_1.Component({
            selector: 'ng-select',
            styles: [styles],
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    /* tslint:disable */
                    useExisting: core_1.forwardRef(function () { return SelectComponent; }),
                    /* tslint:enable */
                    multi: true
                }
            ],
            template: "\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === false\"\n     (keyup)=\"mainClick($event)\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container dropdown open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <div class=\"ui-select-match\"\n         *ngIf=\"!inputMode\">\n      <span tabindex=\"-1\"\n          class=\"btn btn-default btn-secondary form-control ui-select-toggle\"\n          (click)=\"matchClick($event)\"\n          style=\"outline: 0;\">\n        <span *ngIf=\"active.length <= 0\" class=\"ui-select-placeholder text-muted\">{{placeholder}}</span>\n        <span *ngIf=\"active.length > 0\" class=\"ui-select-match-text pull-left\"\n              [ngClass]=\"{'ui-select-allow-clear': allowClear && active.length > 0}\"\n              [innerHTML]=\"sanitize(active[0].text)\"></span>\n        <i class=\"dropdown-toggle pull-right\"></i>\n        <i class=\"caret pull-right\"></i>\n        <a *ngIf=\"allowClear && active.length>0\" class=\"btn btn-xs btn-link pull-right\" style=\"margin-right: 10px; padding: 0;\" (click)=\"removeClick(active[0], $event)\">\n           <i class=\"glyphicon glyphicon-remove\"></i>\n        </a>\n      </span>\n    </div>\n    <input type=\"text\" autocomplete=\"false\" tabindex=\"-1\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           [disabled]=\"disabled\"\n           class=\"form-control ui-select-search\"\n           *ngIf=\"inputMode\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === true\"\n     (keyup)=\"mainClick($event)\"\n     (focus)=\"focusToInput('')\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container ui-select-multiple dropdown form-control open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <span class=\"ui-select-match\">\n        <span *ngFor=\"let a of active\">\n            <span class=\"ui-select-match-item btn btn-default btn-secondary btn-xs\"\n                  tabindex=\"-1\"\n                  type=\"button\"\n                  [ngClass]=\"{'btn-default': true}\">\n               <a class=\"close\"\n                  style=\"margin-left: 5px; padding: 0;\"\n                  (click)=\"removeClick(a, $event)\">&times;</a>\n               <span [innerHtml]=\"sanitize(a.text)\"></span>\n           </span>\n        </span>\n    </span>\n    <input type=\"text\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           (click)=\"matchClick($event)\"\n           [disabled]=\"disabled\"\n           autocomplete=\"false\"\n           autocorrect=\"off\"\n           autocapitalize=\"off\"\n           spellcheck=\"false\"\n           class=\"form-control ui-select-search\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\"\n           role=\"combobox\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, platform_browser_1.DomSanitizer])
    ], SelectComponent);
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
var Behavior = (function () {
    function Behavior(actor) {
        this.optionsMap = new Map();
        this.actor = actor;
    }
    Behavior.prototype.fillOptionsMap = function () {
        var _this = this;
        this.optionsMap.clear();
        var startPos = 0;
        this.actor.itemObjects
            .map(function (item) {
            startPos = item.fillChildrenHash(_this.optionsMap, startPos);
        });
    };
    Behavior.prototype.ensureHighlightVisible = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var container = this.actor.element.nativeElement.querySelector('.ui-select-choices-content');
        if (!container) {
            return;
        }
        var choices = container.querySelectorAll('.ui-select-choices-row');
        if (choices.length < 1) {
            return;
        }
        var activeIndex = this.getActiveIndex(optionsMap);
        if (activeIndex < 0) {
            return;
        }
        var highlighted = choices[activeIndex];
        if (!highlighted) {
            return;
        }
        var posY = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
        var height = container.offsetHeight;
        if (posY > height) {
            container.scrollTop += posY - height;
        }
        else if (posY < highlighted.clientHeight) {
            container.scrollTop -= highlighted.clientHeight - posY;
        }
    };
    Behavior.prototype.getActiveIndex = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var ai = this.actor.options.indexOf(this.actor.activeOption);
        if (ai < 0 && optionsMap !== void 0) {
            ai = optionsMap.get(this.actor.activeOption.id);
        }
        return ai;
    };
    return Behavior;
}());
exports.Behavior = Behavior;
var GenericBehavior = (function (_super) {
    __extends(GenericBehavior, _super);
    function GenericBehavior(actor) {
        _super.call(this, actor);
    }
    GenericBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.last = function () {
        this.actor.activeOption = this.actor.options[this.actor.options.length - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.prev = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index - 1 < 0 ? this.actor.options.length - 1 : index - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.next = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index + 1 > this.actor.options.length - 1 ? 0 : index + 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.filter = function (query) {
        var _this = this;
        var options = this.actor.itemObjects
            .filter(function (option) {
            return select_pipes_1.stripTags(option.text).match(query) &&
                (_this.actor.multiple === false ||
                    (_this.actor.multiple === true && _this.actor.active.map(function (item) { return item.id; }).indexOf(option.id) < 0));
        });
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0];
            _super.prototype.ensureHighlightVisible.call(this);
        }
    };
    return GenericBehavior;
}(Behavior));
exports.GenericBehavior = GenericBehavior;
var ChildrenBehavior = (function (_super) {
    __extends(ChildrenBehavior, _super);
    function ChildrenBehavior(actor) {
        _super.call(this, actor);
    }
    ChildrenBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0].children[0];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.last = function () {
        this.actor.activeOption =
            this.actor
                .options[this.actor.options.length - 1]
                .children[this.actor.options[this.actor.options.length - 1].children.length - 1];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.prev = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index - 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent - 1]) {
                this.actor.activeOption = this.actor
                    .options[indexParent - 1]
                    .children[this.actor.options[indexParent - 1].children.length - 1];
            }
        }
        if (!this.actor.activeOption) {
            this.last();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.next = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index + 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent + 1]) {
                this.actor.activeOption = this.actor.options[indexParent + 1].children[0];
            }
        }
        if (!this.actor.activeOption) {
            this.first();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.filter = function (query) {
        var options = [];
        var optionsMap = new Map();
        var startPos = 0;
        for (var _i = 0, _a = this.actor.itemObjects; _i < _a.length; _i++) {
            var si = _a[_i];
            var children = si.children.filter(function (option) { return query.test(option.text); });
            startPos = si.fillChildrenHash(optionsMap, startPos);
            if (children.length > 0) {
                var newSi = si.getSimilar();
                newSi.children = children;
                options.push(newSi);
            }
        }
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0].children[0];
            _super.prototype.ensureHighlightVisible.call(this, optionsMap);
        }
    };
    return ChildrenBehavior;
}(Behavior));
exports.ChildrenBehavior = ChildrenBehavior;


/***/ })

/******/ });
});