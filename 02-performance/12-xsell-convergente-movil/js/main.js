/**
 * Vodafone Reboot Framework: Version 2.4.0. Generation Date: 2020-08-27T12:44:48.771Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../Users/Izaskun/Desktop/VODAFONE/microsites-cbu/02-performance/12-xsell-convergente-movil/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Users/Izaskun/Desktop/VODAFONE/microsites-cbu/02-performance/12-xsell-convergente-movil/resources/scripts/main.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/Izaskun/Desktop/VODAFONE/microsites-cbu/02-performance/12-xsell-convergente-movil/resources/scripts/main.js ***!
  \**************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../../../../../../Users/Izaskun/Desktop/VODAFONE/microsites-cbu/02-performance/12-xsell-convergente-movil/resources/scripts/tools.js");
//import './ws2r.v14.js';

/*
 *   Método que se dispara cuando el ws2r.vX.css
 *   ya se ha cargado y ha pintado la web
 * */

_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onStylesReady = () => {
  console.log("Site visually ready"); // DO SOMETHING
};
/*
 *   Método que se dispara cuando el ws2r.vX.js
 *   ya se ha cargado y está diponible.
 * */


_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onFrameworkReady = () => {
  console.log("Site functionality ready"); // DO SOMETHING

  /* 
  TO DO
  llamar al click de este boton en el submit
  data-role="response-opener"
  */

  function stateChange(newState) {
    setTimeout(function () {
      if (typeof window.DFI != 'undefined' && !window.DFI.scheduleValid()) {
        document.querySelector('[data-call="scheduleCall"]').style.display = "none";
        document.querySelector('[data-msg="scheduleMsg"]').style.display = "block";
        document.querySelector('[data-call-bottom="scheduleCallBottom"]').style.display = "none";
        document.querySelector('[data-msg-bottom="scheduleMsgBottom"]').style.display = "block";
      }
    }, 3000);
  }

  stateChange(-1);
  let userIntention;
  const formButtons = _tools__WEBPACK_IMPORTED_MODULE_0__["default"].micrositeSelection.querySelectorAll('[data-role="form-trigger"]');
  const form = _tools__WEBPACK_IMPORTED_MODULE_0__["default"].micrositeSelection.querySelector('.wg-form-sticky');
  const toggleFormButton = _tools__WEBPACK_IMPORTED_MODULE_0__["default"].micrositeSelection.querySelector('[data-role="wg-form-sticky-collapse"]');

  const onsubmit = e => {
    e.preventDefault();
    form.querySelector('input[type="submit"]').setAttribute('disabled', 'disabled');
    form.querySelector('[data-role="response-opener"]').click();
    switchForm();
  };

  const switchForm = () => {
    form.classList.toggle('wg-form-sticky--on');
  };

  [].forEach.call(formButtons, button => {
    button.addEventListener('click', switchForm);
  });
  toggleFormButton.addEventListener('click', () => {
    //window.removeEventListener('scroll', throttleScroll);
    userIntention = true;
    switchForm();
  });
  _tools__WEBPACK_IMPORTED_MODULE_0__["default"].micrositeSelection.querySelector('[data-role="wg-form-sticky-close"]').addEventListener('click', switchForm);
  /* if(window.location.hostname.includes('10.225.239.197') && !window.DFI){
      tools.loadScript(`//t.womtp.com/slider/c/vodafone-empresas/dfi/init.js?v=${Date.now()}`);
  } */

  const treshold = form.offsetHeight / 2;
  const throttleScroll = _tools__WEBPACK_IMPORTED_MODULE_0__["default"].throttle(e => {
    if (window.scrollY === 0) userIntention = false;

    if (!userIntention && window.scrollY > treshold) {
      form.classList.remove('wg-form-sticky--on');
      toggleFormButton.classList.add('wg-form-sticky__collapse-btn--show');
    }

    if (!userIntention && window.scrollY < 50) {
      form.classList.add('wg-form-sticky--on');
    }
  }, 100);

  if (_tools__WEBPACK_IMPORTED_MODULE_0__["default"].isDesktop) {
    switchForm();
    window.addEventListener('scroll', throttleScroll);
  }

  if (window.location.hostname == "localhost") _tools__WEBPACK_IMPORTED_MODULE_0__["default"].micrositeSelection.classList.add('debug');
  setTimeout(() => {
    _tools__WEBPACK_IMPORTED_MODULE_0__["default"].micrositeSelection.querySelector(_tools__WEBPACK_IMPORTED_MODULE_0__["default"].micrositeId).removeAttribute("style");
    form.addEventListener('submit', onsubmit);
  }, 1000);
};

/***/ }),

/***/ "../../../../../../Users/Izaskun/Desktop/VODAFONE/microsites-cbu/02-performance/12-xsell-convergente-movil/resources/scripts/tools.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/Izaskun/Desktop/VODAFONE/microsites-cbu/02-performance/12-xsell-convergente-movil/resources/scripts/tools.js ***!
  \***************************************************************************************************************************/
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
const MICROSITE_ID = '#xsell-convergente-movil';
const cssMain = document.querySelector('link[data-microcss]');
const MICROSITE_SELECTION = closest(document.querySelector(MICROSITE_ID), '[data-pathmicrosite]');
const PATH_MICROSITE = MICROSITE_SELECTION ? MICROSITE_SELECTION.dataset.pathmicrosite : '';
let width = document.documentElement.clientWidth;
let isDesktop = width > 969;
let isTablet = width <= 969 && width >= 768;
let isMobile = width < 768 && width > 300;
/*
 * Searches for the parent node closest to the element, which complies with the selector
 * @param {} el - Description
 * @param {} selector - Description
 * @param {} stopSelector - Description
 * */

function closest(el, selector, stopSelector) {
  let retval = null;

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

function loadScript(url) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

const throttle = function (fn, threshhold, scope) {
  threshhold = threshhold || 250;
  var last, deferTimer;
  return function () {
    var context = scope || this;
    var now = +new Date(),
        args = arguments;

    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
};
/*
 * Removes the style attr, once the stylesheet have been loaded
 * return undefined
 * */


function _internalCSSInit() {
  MICROSITE_SELECTION.removeAttribute("style");
  ex.cssLoaded = true;
  ex.onStylesReady();
}
/*
 * Initializes functionality JS, and advices when JS is loaded.
 * return undefined
 * */


function _internalJSInit() {
  window.vfes._utils.init(MICROSITE_SELECTION);

  ex.onFrameworkReady();
}
/*
 * Check if stylesheet CSS is loaded
 * @return {boolean}
 * */


function isCSSMicroLoaded() {
  const domStyles = document.styleSheets;
  let countCSS = 0;
  [].forEach.call(domStyles, (item, i) => {
    const href = item.href || '';

    if (href.indexOf('ws2r') !== -1) {
      console.log('WS2RCSS Loaded');
      countCSS++;
    }

    if (href.indexOf(PATH_MICROSITE + 'css/styles.css') !== -1) {
      console.log('MICROCSS Loaded');
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
  cssMain.addEventListener('load', _internalCSSInit);
} else if (isCSSMicroLoaded()) {
  setTimeout(_internalCSSInit, 100);
}
/*
 * listen event, once have been loaded the files JS
 * */


if (window.vfes) {
  setTimeout(_internalJSInit, 100);
} else {
  document.addEventListener('vfes:frameworkReady', _internalJSInit);
}

const ex = {
  isDesktop,
  isTablet,
  isMobile,
  micrositeId: MICROSITE_ID,
  micrositePath: PATH_MICROSITE,
  micrositeSelection: MICROSITE_SELECTION,
  init: init,
  loadScript: loadScript,
  throttle: throttle,
  cssLoaded: false,
  onStylesReady: () => null,
  onFrameworkReady: () => null
};
/* harmony default export */ __webpack_exports__["default"] = (ex);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map