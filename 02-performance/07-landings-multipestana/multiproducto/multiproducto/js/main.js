/**
 * Vodafone Reboot Framework: Version 15.3.0. Generation Date: 2020-05-03T21:41:25.437Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../microsites-cbu/02-performance/07-landings-multipestana/multiproducto/multiproducto/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../microsites-cbu/02-performance/07-landings-multipestana/multiproducto/multiproducto/resources/scripts/main.js":
/*!***********************************************************************************************************************!*\
  !*** ../microsites-cbu/02-performance/07-landings-multipestana/multiproducto/multiproducto/resources/scripts/main.js ***!
  \***********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../microsites-cbu/02-performance/07-landings-multipestana/multiproducto/multiproducto/resources/scripts/tools.js");

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

  function stateChange(newState) {
    setTimeout(function () {
      if (typeof window.DFI != 'undefined' && !window.DFI.scheduleValid()) {
        //document.getElementById('scheduleCall').style.display = "none";
        //document.getElementById('scheduleMsg').style.display = "block";
        document.querySelector('[data-call="scheduleCall"]').style.display = "none";
        document.querySelector('[data-msg="scheduleMsg"]').style.display = "block";
        document.querySelector('[data-callMobile="scheduleCallMobile"]').style.display = "none";
        document.querySelector('[data-msgMobile="scheduleMsgMobile"]').style.display = "block";
      }
    }, 3000);
  }

  stateChange(-1);
};

/***/ }),

/***/ "../microsites-cbu/02-performance/07-landings-multipestana/multiproducto/multiproducto/resources/scripts/tools.js":
/*!************************************************************************************************************************!*\
  !*** ../microsites-cbu/02-performance/07-landings-multipestana/multiproducto/multiproducto/resources/scripts/tools.js ***!
  \************************************************************************************************************************/
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
const MICROSITE_ID = '#multiproducto';
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
/*
 * Removes the style attr, once the stylesheet have been loaded
 * return undefined
 * */


function _internalCSSInit() {
  if (!ex.cssLoaded) {
    document.querySelector(MICROSITE_ID).removeAttribute("style");
    ex.cssLoaded = true;
    ex.onStylesReady();
  }
}
/*
 * Initializes functionality JS, and advices when JS is loaded.
 * return undefined
 * */


function _internalJSInit() {
  window.vfes._utils.init(document.querySelector(MICROSITE_ID));

  ex.onFrameworkReady();
}
/*
 * Check if stylesheet CSS is loaded
 * @return {boolean}
 * */


function isCSSMicroLoaded() {
  const domStyles = document.styleSheets;
  let countCSS = 0;
  [].forEach.call(domStyles, item => {
    const href = item.href || '';

    if (href.indexOf(PATH_MICROSITE + 'css/ws2r') !== -1) {
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

function init() {} // DO SOMETHING

/*
 * listen event, once have been loaded the files CSS
 * */


if (!isCSSMicroLoaded()) {
  cssMain.addEventListener('load', _internalCSSInit); // Make sure microsite gets visible after 3 secs

  setTimeout(_internalCSSInit, 3000);
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
  init: init,
  cssLoaded: false,
  onStylesReady: () => null,
  onFrameworkReady: () => null
};
/* harmony default export */ __webpack_exports__["default"] = (ex);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL21pY3Jvc2l0ZXMtY2J1LzAyLXBlcmZvcm1hbmNlLzA3LWxhbmRpbmdzLW11bHRpcGVzdGFuYS9tdWx0aXByb2R1Y3RvL211bHRpcHJvZHVjdG8vcmVzb3VyY2VzL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vbWljcm9zaXRlcy1jYnUvMDItcGVyZm9ybWFuY2UvMDctbGFuZGluZ3MtbXVsdGlwZXN0YW5hL211bHRpcHJvZHVjdG8vbXVsdGlwcm9kdWN0by9yZXNvdXJjZXMvc2NyaXB0cy90b29scy5qcyJdLCJuYW1lcyI6WyJ0b29scyIsIm9uU3R5bGVzUmVhZHkiLCJjb25zb2xlIiwibG9nIiwib25GcmFtZXdvcmtSZWFkeSIsInN0YXRlQ2hhbmdlIiwibmV3U3RhdGUiLCJzZXRUaW1lb3V0Iiwid2luZG93IiwiREZJIiwic2NoZWR1bGVWYWxpZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsIk1JQ1JPU0lURV9JRCIsImNzc01haW4iLCJNSUNST1NJVEVfU0VMRUNUSU9OIiwiY2xvc2VzdCIsIlBBVEhfTUlDUk9TSVRFIiwiZGF0YXNldCIsInBhdGhtaWNyb3NpdGUiLCJ3aWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaXNEZXNrdG9wIiwiaXNUYWJsZXQiLCJpc01vYmlsZSIsImVsIiwic2VsZWN0b3IiLCJzdG9wU2VsZWN0b3IiLCJyZXR2YWwiLCJtYXRjaGVzIiwicGFyZW50RWxlbWVudCIsIl9pbnRlcm5hbENTU0luaXQiLCJleCIsImNzc0xvYWRlZCIsInJlbW92ZUF0dHJpYnV0ZSIsIl9pbnRlcm5hbEpTSW5pdCIsInZmZXMiLCJfdXRpbHMiLCJpbml0IiwiaXNDU1NNaWNyb0xvYWRlZCIsImRvbVN0eWxlcyIsInN0eWxlU2hlZXRzIiwiY291bnRDU1MiLCJmb3JFYWNoIiwiY2FsbCIsIml0ZW0iLCJocmVmIiwiaW5kZXhPZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJtaWNyb3NpdGVJZCIsIm1pY3Jvc2l0ZVBhdGgiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBR0E7Ozs7O0FBSUFBLDhDQUFLLENBQUNDLGFBQU4sR0FBc0IsTUFBTTtBQUN4QkMsU0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFEd0IsQ0FFeEI7QUFHSCxDQUxEO0FBUUE7Ozs7OztBQUlBSCw4Q0FBSyxDQUFDSSxnQkFBTixHQUF5QixNQUFNO0FBQzNCRixTQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWixFQUQyQixDQUUzQjs7QUFFQSxXQUFTRSxXQUFULENBQXFCQyxRQUFyQixFQUErQjtBQUMzQkMsY0FBVSxDQUFDLFlBQVc7QUFDbEIsVUFBSSxPQUFPQyxNQUFNLENBQUNDLEdBQWQsSUFBcUIsV0FBckIsSUFBb0MsQ0FBQ0QsTUFBTSxD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LEVBQUUsTUFBTSxJQVJkO0FBU1BHLGtCQUFnQixFQUFFLE1BQU07QUFUakIsQ0FBWDtBQVllK0IsaUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi4vbWljcm9zaXRlcy1jYnUvMDItcGVyZm9ybWFuY2UvMDctbGFuZGluZ3MtbXVsdGlwZXN0YW5hL211bHRpcHJvZHVjdG8vbXVsdGlwcm9kdWN0by9yZXNvdXJjZXMvc2NyaXB0cy9tYWluLmpzXCIpO1xuIiwiaW1wb3J0IHRvb2xzIGZyb20gJy4vdG9vbHMnO1xuXG5cbi8qXG4gKiAgIE3DqXRvZG8gcXVlIHNlIGRpc3BhcmEgY3VhbmRvIGVsIHdzMnIudlguY3NzXG4gKiAgIHlhIHNlIGhhIGNhcmdhZG8geSBoYSBwaW50YWRvIGxhIHdlYlxuICogKi9cbnRvb2xzLm9uU3R5bGVzUmVhZHkgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTaXRlIHZpc3VhbGx5IHJlYWR5XCIpO1xuICAgIC8vIERPIFNPTUVUSElOR1xuXG5cbn07XG5cblxuLypcbiAqICAgTcOpdG9kbyBxdWUgc2UgZGlzcGFyYSBjdWFuZG8gZWwgd3Myci52WC5qc1xuICogICB5YSBzZSBoYSBjYXJnYWRvIHkgZXN0w6EgZGlwb25pYmxlLlxuICogKi9cbnRvb2xzLm9uRnJhbWV3b3JrUmVhZHkgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTaXRlIGZ1bmN0aW9uYWxpdHkgcmVhZHlcIik7XG4gICAgLy8gRE8gU09NRVRISU5HXG5cbiAgICBmdW5jdGlvbiBzdGF0ZUNoYW5nZShuZXdTdGF0ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuREZJICE9ICd1bmRlZmluZWQnICYmICF3aW5kb3cuREZJLnNjaGVkdWxlVmFsaWQoKSkge1xuICAgICAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjaGVkdWxlQ2FsbCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2hlZHVsZU1zZycpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY2FsbD1cInNjaGVkdWxlQ2FsbFwiXScpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tc2c9XCJzY2hlZHVsZU1zZ1wiXScpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY2FsbE1vYmlsZT1cInNjaGVkdWxlQ2FsbE1vYmlsZVwiXScpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tc2dNb2JpbGU9XCJzY2hlZHVsZU1zZ01vYmlsZVwiXScpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cbiAgICBzdGF0ZUNoYW5nZSgtMSk7XG5cbn07IiwiLypcbiAqIE1pY3Jvc2l0ZXMgdG9vbHMganM6XG4gKiBFc3RlIGZpY2hlcm8gZXMgdW5hIG11ZXN0cmEgZGUgdXRpbGlkYWRlcyBwcm9waWFzIHBhcmEgbG9zIG1pY3Jvc2l0ZXMuXG4gKiBTZSBwdWVkZSBwZXJzb25hbGl6YXIgYSB0dSBndXN0b1xuICpcbiAqL1xuXG5cbmNvbnN0IE1JQ1JPU0lURV9JRCA9ICcjbXVsdGlwcm9kdWN0byc7XG5jb25zdCBjc3NNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tkYXRhLW1pY3JvY3NzXScpO1xuY29uc3QgTUlDUk9TSVRFX1NFTEVDVElPTiA9IGNsb3Nlc3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihNSUNST1NJVEVfSUQpLCAnW2RhdGEtcGF0aG1pY3Jvc2l0ZV0nKTtcbmNvbnN0IFBBVEhfTUlDUk9TSVRFID0gTUlDUk9TSVRFX1NFTEVDVElPTiA/IE1JQ1JPU0lURV9TRUxFQ1RJT04uZGF0YXNldC5wYXRobWljcm9zaXRlIDogJyc7XG5sZXQgd2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG5sZXQgaXNEZXNrdG9wID0gd2lkdGggPiA5Njk7XG5sZXQgaXNUYWJsZXQgPSB3aWR0aCA8PSA5NjkgJiYgd2lkdGggPj0gNzY4O1xubGV0IGlzTW9iaWxlID0gd2lkdGggPCA3NjggJiYgd2lkdGggPiAzMDA7XG5cblxuLypcbiAqIFNlYXJjaGVzIGZvciB0aGUgcGFyZW50IG5vZGUgY2xvc2VzdCB0byB0aGUgZWxlbWVudCwgd2hpY2ggY29tcGxpZXMgd2l0aCB0aGUgc2VsZWN0b3JcbiAqIEBwYXJhbSB7fSBlbCAtIERlc2NyaXB0aW9uXG4gKiBAcGFyYW0ge30gc2VsZWN0b3IgLSBEZXNjcmlwdGlvblxuICogQHBhcmFtIHt9IHN0b3BTZWxlY3RvciAtIERlc2NyaXB0aW9uXG4gKiAqL1xuZnVuY3Rpb24gY2xvc2VzdChlbCwgc2VsZWN0b3IsIHN0b3BTZWxlY3Rvcikge1xuICAgIGxldCByZXR2YWwgPSBudWxsO1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBpZiAoZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHZhbCA9IGVsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RvcFNlbGVjdG9yICYmIGVsLm1hdGNoZXMoc3RvcFNlbGVjdG9yKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcmV0dmFsO1xufVxuXG5cbi8qXG4gKiBSZW1vdmVzIHRoZSBzdHlsZSBhdHRyLCBvbmNlIHRoZSBzdHlsZXNoZWV0IGhhdmUgYmVlbiBsb2FkZWRcbiAqIHJldHVybiB1bmRlZmluZWRcbiAqICovXG5mdW5jdGlvbiBfaW50ZXJuYWxDU1NJbml0KCkge1xuICAgIGlmKCFleC5jc3NMb2FkZWQpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKE1JQ1JPU0lURV9JRCkucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgICAgIGV4LmNzc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIGV4Lm9uU3R5bGVzUmVhZHkoKTtcbiAgICB9XG59XG5cblxuLypcbiAqIEluaXRpYWxpemVzIGZ1bmN0aW9uYWxpdHkgSlMsIGFuZCBhZHZpY2VzIHdoZW4gSlMgaXMgbG9hZGVkLlxuICogcmV0dXJuIHVuZGVmaW5lZFxuICogKi9cbmZ1bmN0aW9uIF9pbnRlcm5hbEpTSW5pdCgpIHtcbiAgICB3aW5kb3cudmZlcy5fdXRpbHMuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKE1JQ1JPU0lURV9JRCkpO1xuICAgIGV4Lm9uRnJhbWV3b3JrUmVhZHkoKTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgc3R5bGVzaGVldCBDU1MgaXMgbG9hZGVkXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogKi9cbmZ1bmN0aW9uIGlzQ1NTTWljcm9Mb2FkZWQoKSB7XG4gICAgY29uc3QgZG9tU3R5bGVzID0gZG9jdW1lbnQuc3R5bGVTaGVldHM7XG4gICAgbGV0IGNvdW50Q1NTID0gMDtcbiAgICBbXS5mb3JFYWNoLmNhbGwoZG9tU3R5bGVzLCAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBocmVmID0gaXRlbS5ocmVmIHx8ICcnO1xuICAgICAgICBpZiAoaHJlZi5pbmRleE9mKFBBVEhfTUlDUk9TSVRFICsgJ2Nzcy93czJyJykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnV1MyUkNTUyBMb2FkZWQnKTtcbiAgICAgICAgICAgIGNvdW50Q1NTKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhyZWYuaW5kZXhPZihQQVRIX01JQ1JPU0lURSArICdjc3Mvc3R5bGVzLmNzcycpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ01JQ1JPQ1NTIExvYWRlZCcpO1xuICAgICAgICAgICAgY291bnRDU1MrK1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIChjb3VudENTUyA9PT0gMik7XG59XG5cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAvLyBETyBTT01FVEhJTkdcbn1cblxuLypcbiAqIGxpc3RlbiBldmVudCwgb25jZSBoYXZlIGJlZW4gbG9hZGVkIHRoZSBmaWxlcyBDU1NcbiAqICovXG5pZiAoIWlzQ1NTTWljcm9Mb2FkZWQoKSkge1xuICAgIGNzc01haW4uYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIF9pbnRlcm5hbENTU0luaXQpO1xuICAgIC8vIE1ha2Ugc3VyZSBtaWNyb3NpdGUgZ2V0cyB2aXNpYmxlIGFmdGVyIDMgc2Vjc1xuICAgIHNldFRpbWVvdXQoX2ludGVybmFsQ1NTSW5pdCwgMzAwMCk7XG59IGVsc2UgaWYgKGlzQ1NTTWljcm9Mb2FkZWQoKSkge1xuICAgIHNldFRpbWVvdXQoX2ludGVybmFsQ1NTSW5pdCwgMTAwKTtcbn1cblxuXG4vKlxuICogbGlzdGVuIGV2ZW50LCBvbmNlIGhhdmUgYmVlbiBsb2FkZWQgdGhlIGZpbGVzIEpTXG4gKiAqL1xuaWYgKHdpbmRvdy52ZmVzKSB7XG4gICAgc2V0VGltZW91dChfaW50ZXJuYWxKU0luaXQsIDEwMClcbn0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmZlczpmcmFtZXdvcmtSZWFkeScsIF9pbnRlcm5hbEpTSW5pdCk7XG59XG5cbmNvbnN0IGV4ID0ge1xuICAgIGlzRGVza3RvcCxcbiAgICBpc1RhYmxldCxcbiAgICBpc01vYmlsZSxcbiAgICBtaWNyb3NpdGVJZDogTUlDUk9TSVRFX0lELFxuICAgIG1pY3Jvc2l0ZVBhdGg6IFBBVEhfTUlDUk9TSVRFLFxuICAgIGluaXQ6IGluaXQsXG4gICAgY3NzTG9hZGVkOiBmYWxzZSxcbiAgICBvblN0eWxlc1JlYWR5OiAoKSA9PiBudWxsLFxuICAgIG9uRnJhbWV3b3JrUmVhZHk6ICgpID0+IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==