/**
 * Vodafone Reboot Framework: Version 2.7.1. Generation Date: 2021-02-17T11:10:26.848Z
 */

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/family-bundles/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/family-bundles/resources/scripts/deepMerge.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/family-bundles/resources/scripts/deepMerge.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* thnks to: https://gist.github.com/Salakar/1d7137de9cb8b704e48a */

/**
 * Simple is object check.
 * @param item
 * @returns {boolean}
 */
var isObject = function isObject(item) {
  return item && _typeof(item) === 'object' && !Array.isArray(item) && item !== null;
};
/**
 * Deep merge two objects.
 * @param target
 * @param source
 */


var mergeDeep = function mergeDeep(target, source) {
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(function (key) {
      if (isObject(source[key])) {
        if (!target[key] || !isObject(target[key])) {
          target[key] = source[key];
        }

        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, _defineProperty({}, key, source[key]));
      }
    });
  }

  return target;
};

/* harmony default export */ __webpack_exports__["default"] = (mergeDeep);

/***/ }),

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/family-bundles/resources/scripts/keys.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/family-bundles/resources/scripts/keys.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var direction = {
  "ArrowLeft": -1,
  "ArrowDown": 1,
  "ArrowUp": -1,
  "ArrowRight": 1
};
/* harmony default export */ __webpack_exports__["default"] = ({
  direction: direction
});

/***/ }),

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/family-bundles/resources/scripts/main.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/family-bundles/resources/scripts/main.js ***!
  \*********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/family-bundles/resources/scripts/tools.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/family-bundles/resources/scripts/tabs.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var TabsFilter = /*#__PURE__*/function () {
  function TabsFilter(nodeElements) {
    _classCallCheck(this, TabsFilter);

    this.$elements = nodeElements;
  }

  _createClass(TabsFilter, [{
    key: "init",
    value: function init() {
      this.$elements.forEach(function (tabElement) {
        new _tabs__WEBPACK_IMPORTED_MODULE_1__["default"](tabElement, {
          classes: {
            tabActive: 'vf-tabs-button__active'
          }
        }).init();
      });
    }
  }]);

  return TabsFilter;
}();

var CardRateTicket = /*#__PURE__*/function () {
  function CardRateTicket(element) {
    _classCallCheck(this, CardRateTicket);

    this.$element = element.$element;
    this.tabs = [];
    this.tabs = _toConsumableArray(this.$element.querySelectorAll('[role="tablist"]')).map(function (tablist) {
      return new _tabs__WEBPACK_IMPORTED_MODULE_1__["default"](tablist, {
        selectors: {
          tabs: "[data-ws10-card-rate-ticket-tab]"
        }
      });
    });
  }

  _createClass(CardRateTicket, [{
    key: "init",
    value: function init() {
      this.tabs.forEach(function (tab) {
        tab.init();
      });
    }
  }]);

  return CardRateTicket;
}();
/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */


_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onStylesReady = function () {
  console.log("Site visually ready");
};
/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */


_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onFrameworkReady = function () {
  console.log("Site functionality ready");
  var width = document.documentElement.clientWidth;
  var isDesktop = width > 1024; // DO SOMETHING

  var tabsFilter = document.querySelectorAll('[data-vf-js="tabs"]');
  var ticket = document.querySelector('[data-ws10-js="composition-card-rate"]');
  var mddHeader = document.querySelector('.mdd-desktop');
  var mddHeaderHeight = mddHeader.offsetHeight;
  var ticketStop = document.querySelector('[data-js="ticketStopped"]');
  var ticketSticky = document.querySelector('[data-js="stickyAppear"]');
  var rateInputs = document.querySelectorAll('input[data-vf-twin]');

  _toConsumableArray(rateInputs).forEach(function (input) {
    input.addEventListener('change', function (e) {
      var targetId = e.currentTarget.dataset.vfTwin;
      var target = document.querySelector('#' + targetId);

      if (target) {
        target.click(e);
        return false;
      }
    });
  });

  var changeMoreDetails = function changeMoreDetails() {
    var moreDetails = document.querySelectorAll('[data-ws10-collapse="card-rate-ticket-features"]');

    _toConsumableArray(moreDetails).forEach(function (e) {
      if (e.classList.contains('ws10-c-rate-features__collapse-btn--active')) {
        e.innerHTML = "Menos detalles";
      } else {
        e.innerHTML = "Más detalles";
      }
    });
  };

  document.addEventListener('click', changeMoreDetails); // TICKET FIJO

  var ticketImmobile = function ticketImmobile() {
    var ticketHeight = ticket.offsetHeight;
    var ticketStopHeight = ticketStop.getBoundingClientRect();

    if (ticketStopHeight.top - (ticketHeight + mddHeaderHeight) <= 0) {
      ticket.parentElement.setAttribute('style', 'position:absolute; bottom: 0; top: initial;');
    } else {
      ticket.parentElement.setAttribute('style', 'position:fixed; top: 120px;');
    }
  };

  var ticketInitialPosition = function ticketInitialPosition() {
    var banner = document.querySelector('[data-js="_banner"]');
    var bannerTop = banner.getBoundingClientRect().top;

    if (bannerTop >= 147) {
      ticket.parentElement.setAttribute('style', 'position:absolute; top: 0;');
    }
  };

  if (isDesktop) {
    document.addEventListener('scroll', ticketImmobile);
    document.addEventListener('scroll', ticketInitialPosition);
  } // Cambia el número de líneas


  var numberOfLines = document.querySelectorAll('[data-js="linesFamily"]');
  numberOfLines.forEach(function (numberOfLine) {
    var numberOfLinesChange = document.querySelectorAll('[data-js="numberOfLinesChange"]');
    var numberOfLinesParent = numberOfLine.closest('.ws10-c-picker');
    var numberOfLineContent = numberOfLine.innerHTML;
    numberOfLinesParent.addEventListener('click', function () {
      numberOfLinesChange.forEach(function (numberOfLineChange) {
        numberOfLineChange.innerHTML = numberOfLineContent;
      });
    });
  }); // Mostramos - ocultamos STICKY

  var pointShowTicket = document.querySelector('[data-js="showSticky"]');

  var showOrHideTicket = function showOrHideTicket() {
    var pointShowTicketHeight = pointShowTicket.getBoundingClientRect();

    if (pointShowTicketHeight.top < 0) {
      ticketSticky.style.opacity = "1";
    } else {
      ticketSticky.style.opacity = "0";
    }
  };

  document.addEventListener('scroll', showOrHideTicket);
  new TabsFilter(tabsFilter).init();
  window.ws10.utils.registerClassAndInit('composition-card-rate', CardRateTicket);
};

/***/ }),

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/family-bundles/resources/scripts/tabs.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/family-bundles/resources/scripts/tabs.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tabs; });
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/family-bundles/resources/scripts/keys.js");
/* harmony import */ var _deepMerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deepMerge */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/family-bundles/resources/scripts/deepMerge.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var defaults = {
  direction: 'horizontal',
  // vertical
  selectors: {
    tabs: '[role="tab"]',
    panels: '[role="tabpanel"]'
  },
  classes: {
    tabActive: "ws10-o-tabs__tab--active"
  }
};

var Tabs = /*#__PURE__*/function () {
  function Tabs(wrapper, config) {
    var _this = this;

    _classCallCheck(this, Tabs);

    this.tabKeyHandler = function (event) {
      event.preventDefault();
      var tab = event.currentTarget;
      var key = event.key;

      if (_this.config.direction === 'horizontal' && ['ArrowLeft', 'ArrowRight'].includes(key) || _this.config.direction === 'vertical' && ['ArrowUp', 'ArrowDown'].includes(key)) {
        var nextTab = Tabs.getNextTab(_this.tabs, tab, _keys__WEBPACK_IMPORTED_MODULE_0__["default"].direction[key]);

        _this.toggle(nextTab, true);

        _this.fireChangeEvent(nextTab);
      }
    };

    this.tabClickHandler = function (event) {
      var tab = event.currentTarget;

      if (tab.nodeName === 'A') {
        event.preventDefault();
      }

      _this.toggle(tab);

      _this.fireChangeEvent(tab);
    };

    this.toggle = function (tab) {
      var focus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      tab = tab || _this.tabs[0];
      var panelTargets = Tabs.getPanelTargetSelectors(tab);

      if (focus) {
        tab.focus();
      }

      _this.tabs.forEach(function (atab) {
        var active = atab.isSameNode(tab);
        atab.setAttribute('aria-selected', active);
        atab.classList.toggle(_this.config.classes.tabActive, active);
        atab.setAttribute('tabindex', active ? 0 : -1);
      });

      panelTargets.forEach(function (panelSelector) {
        var panel = document.querySelector(panelSelector);
        var panelGroup = panel.parentElement;
        var panelsInGroup = panelGroup.querySelectorAll(_this.config.selectors.panels);

        _toConsumableArray(panelsInGroup).forEach(function (apanel) {
          var expanded = apanel.isSameNode(panel);
          apanel.setAttribute('aria-expanded', expanded);
          expanded ? apanel.removeAttribute('hidden') : apanel.setAttribute('hidden', '');
        });
      });
    };

    this.$element = wrapper;
    this.config = this.config = Object(_deepMerge__WEBPACK_IMPORTED_MODULE_1__["default"])(defaults, config);
    this.tabs = _toConsumableArray(this.$element.querySelectorAll(this.config.selectors.tabs));
    this.onInitialized = new Event('ws10:init');
    this.onChanged = new Event('ws10:changed');
  }

  _createClass(Tabs, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.toggle();
      this.tabs.forEach(function (tab) {
        tab.addEventListener('click', _this2.tabClickHandler);
        tab.addEventListener('keyup', _this2.tabKeyHandler);
      }); // events

      this.onInitialized.tabs = this.tabs;
      this.$element.dispatchEvent(this.onInitialized);
    }
  }, {
    key: "fireChangeEvent",
    value: function fireChangeEvent(tab) {
      this.onChanged.tab = tab;
      this.$element.dispatchEvent(this.onChanged);
    }
  }], [{
    key: "getNextTab",
    value: function getNextTab(tabs, currentTab, direction) {
      var index = tabs.findIndex(function (atab) {
        return atab.isSameNode(currentTab);
      });
      index += direction;

      if (index < 0) {
        index = tabs.length - 1;
      } else if (index > tabs.length - 1) {
        index = 0;
      }

      return tabs[index];
    }
  }, {
    key: "getPanelTargetSelectors",
    value: function getPanelTargetSelectors(tab) {
      return tab.getAttribute('aria-controls') !== null ? tab.getAttribute('aria-controls').split(' ').map(function (id) {
        return "#".concat(id);
      }) : [tab.getAttribute('href')];
    }
  }]);

  return Tabs;
}();



/***/ }),

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/family-bundles/resources/scripts/tools.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/family-bundles/resources/scripts/tools.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Microsites tools js:
 * Este fichero es una muestra de utilidades propias para los microsites.
 * Se puede personalizar a tu gusto
 *
 */
if (performance && performance.mark) {
  performance.mark('micro exec');
}

var MICROSITE_ID = '#family-bundles';
var cssMain = document.querySelector('link[data-ws10-microcss]');
var MICROSITE_SELECTION = closest(document.querySelector(MICROSITE_ID), '[data-ws10-microsite]');
var PATH_MICROSITE = MICROSITE_SELECTION ? MICROSITE_SELECTION.dataset.pathmicrosite : '';
var width = document.documentElement.clientWidth;
var isDesktop = width > 1024;
var isTablet = width <= 1024 && width >= 768;
var isMobile = width < 768;
/*
 * Searches for the parent node closest to the element, which complies with the selector
 * @param {} el - Description
 * @param {} selector - Description
 * @param {} stopSelector - Description
 * */

function closest(el, selector, stopSelector) {
  var retval = null;

  while (el) {
    if (el.matches(selector)) {
      retval = el;
      break;
    } else if (stopSelector && el.matches(stopSelector)) {
      break;
    }

    el = el.parentElement;
  }

  return retval;
}
/*
 * Removes the style attr, once the stylesheet have been loaded
 * return undefined
 * */


function _internalCSSInit() {
  if (!ex.cssLoaded) {
    if (document.querySelector(MICROSITE_ID)) {
      document.querySelector(MICROSITE_ID).removeAttribute("style");
    }

    ex.cssLoaded = true;
    ex.onStylesReady();

    if (performance && performance.mark) {
      performance.mark('micro css ready');
    }
  }
}
/*
 * Initializes functionality JS, and advices when JS is loaded.
 * return undefined
 * */


function _internalJSInit() {
  document.removeEventListener('ws10:frameworkReady', _internalJSInit);
  window.ws10.utils.init(document.querySelector(MICROSITE_ID));
  ex.onFrameworkReady();

  if (performance && performance.mark) {
    performance.mark('micro js ready');
    console.timeEnd("microsite instantiation");
  }
}
/*
 * Check if stylesheet CSS is loaded
 * @return {boolean}
 * */


function isCSSMicroLoaded() {
  var domStyles = document.styleSheets;
  var countCSS = 0;
  [].forEach.call(domStyles, function (item) {
    var href = item.href || '';

    if (href.indexOf(PATH_MICROSITE + 'css/ws10') !== -1) {
      console.log('WS10 CSS Loaded');
      countCSS++;
    }

    if (href.indexOf(PATH_MICROSITE + 'css/styles.css') !== -1) {
      console.log('MICRO CSS Loaded');
      countCSS++;
    }
  });
  return countCSS === 2;
}

function init() {// DO SOMETHING
}
/*
 * listen event, once have been loaded the files CSS
 * */


if (!isCSSMicroLoaded()) {
  if (cssMain) {
    cssMain.addEventListener('load', _internalCSSInit); // Make sure microsite gets visible after 3 secs

    setTimeout(function () {
      console.warn("Microsite visible by 3s timeout");

      _internalCSSInit();
    }, 3000);
  } else {
    setTimeout(_internalCSSInit, 100);
  }
} else if (isCSSMicroLoaded()) {
  setTimeout(_internalCSSInit, 100);
}
/*
 * listen event, once have been loaded the files JS
 * */


if (window.ws10) {
  setTimeout(_internalJSInit, 100);
} else {
  document.addEventListener('ws10:frameworkReady', _internalJSInit);
}

var ex = {
  isDesktop: isDesktop,
  isTablet: isTablet,
  isMobile: isMobile,
  micrositeId: MICROSITE_ID,
  micrositePath: PATH_MICROSITE,
  init: init,
  cssLoaded: false,
  onStylesReady: function onStylesReady() {
    return null;
  },
  onFrameworkReady: function onFrameworkReady() {
    return null;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ex);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map