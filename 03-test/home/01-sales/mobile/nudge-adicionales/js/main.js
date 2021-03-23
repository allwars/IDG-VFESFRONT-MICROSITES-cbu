/**
 * Vodafone Reboot Framework: Version 2.2.2. Generation Date: 2020-05-25T09:52:24.477Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/home/01-sales/mobile/nudge-adicionales/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/home/01-sales/mobile/nudge-adicionales/resources/scripts/main.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/03-test/home/01-sales/mobile/nudge-adicionales/resources/scripts/main.js ***!
  \**********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/home/01-sales/mobile/nudge-adicionales/resources/scripts/tools.js");

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
};

/***/ }),

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/home/01-sales/mobile/nudge-adicionales/resources/scripts/tools.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/03-test/home/01-sales/mobile/nudge-adicionales/resources/scripts/tools.js ***!
  \***********************************************************************************************************************/
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
const MICROSITE_ID = '#pop-up-ilimitables';
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
  document.querySelector('.vfes-ms-content').removeAttribute("style");
  ex.cssLoaded = true;
  ex.onStylesReady();
}
/*
* Initializes functionality JS, and advices when JS is loaded.
* return undefined
* */


function _internalJSInit() {
  window.vfes._utils.init(document.querySelector('.vfes-ms-content'));

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

    if (href.indexOf('ws2r') !== -1) {
      console.log('WS2R Loaded');
      countCSS++;
    }

    if (href.indexOf('main') !== -1) {
      console.log('MAIN.CSS Loaded');
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
  init: init,
  cssLoaded: false,
  onStylesReady: () => null,
  onFrameworkReady: () => null
};
/* harmony default export */ __webpack_exports__["default"] = (ex);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9mdWxsc2l4L0Rlc2t0b3AvbWljcm9zaXRlcy1jYnUvMDMtdGVzdC9ob21lLzAxLXNhbGVzL21vYmlsZS9udWRnZS1hZGljaW9uYWxlcy9yZXNvdXJjZXMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovLy8vVXNlcnMvZnVsbHNpeC9EZXNrdG9wL21pY3Jvc2l0ZXMtY2J1LzAzLXRlc3QvaG9tZS8wMS1zYWxlcy9tb2JpbGUvbnVkZ2UtYWRpY2lvbmFsZXMvcmVzb3VyY2VzL3NjcmlwdHMvdG9vbHMuanMiXSwibmFtZXMiOlsidG9vbHMiLCJvblN0eWxlc1JlYWR5IiwiY29uc29sZSIsImxvZyIsIm9uRnJhbWV3b3JrUmVhZHkiLCJNSUNST1NJVEVfSUQiLCJjc3NNYWluIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiTUlDUk9TSVRFX1NFTEVDVElPTiIsImNsb3Nlc3QiLCJQQVRIX01JQ1JPU0lURSIsImRhdGFzZXQiLCJwYXRobWljcm9zaXRlIiwid2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImlzRGVza3RvcCIsImlzVGFibGV0IiwiaXNNb2JpbGUiLCJlbCIsInNlbGVjdG9yIiwic3RvcFNlbGVjdG9yIiwicmV0dmFsIiwibWF0Y2hlcyIsInBhcmVudEVsZW1lbnQiLCJfaW50ZXJuYWxDU1NJbml0IiwicmVtb3ZlQXR0cmlidXRlIiwiZXgiLCJjc3NMb2FkZWQiLCJfaW50ZXJuYWxKU0luaXQiLCJ3aW5kb3ciLCJ2ZmVzIiwiX3V0aWxzIiwiaW5pdCIsImlzQ1NTTWljcm9Mb2FkZWQiLCJkb21TdHlsZXMiLCJzdHlsZVNoZWV0cyIsImNvdW50Q1NTIiwiZm9yRWFjaCIsImNhbGwiLCJpdGVtIiwiaHJlZiIsImluZGV4T2YiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsIm1pY3Jvc2l0ZUlkIiwibWljcm9zaXRlUGF0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ZCxlQUFqRDtBQUNIOztBQUVELE1BQU1GLEVBQUUsR0FBRztBQUNQWCxXQURPO0FBRVBDLFVBRk87QUFHUEMsVUFITztBQUlQMkIsYUFBVyxFQUFFekMsWUFKTjtBQUtQMEMsZUFBYSxFQUFFcEMsY0FMUjtBQU1QdUIsTUFBSSxFQUFFQSxJQU5DO0FBT1BMLFdBQVMsRUFBRSxLQVBKO0FBUVA1QixlQUFhLEVBQUUsTUFBTSxJQVJkO0FBU1BHLGtCQUFnQixFQUFFLE1BQU07QUFUakIsQ0FBWDtBQVlld0IsaUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvZnVsbHNpeC9EZXNrdG9wL21pY3Jvc2l0ZXMtY2J1LzAzLXRlc3QvaG9tZS8wMS1zYWxlcy9tb2JpbGUvbnVkZ2UtYWRpY2lvbmFsZXMvcmVzb3VyY2VzL3NjcmlwdHMvbWFpbi5qc1wiKTtcbiIsImltcG9ydCB0b29scyBmcm9tICcuL3Rvb2xzJztcblxuXG4vKlxuKiAgIE3DqXRvZG8gcXVlIHNlIGRpc3BhcmEgY3VhbmRvIGVsIHdzMnIudlguY3NzXG4qICAgeWEgc2UgaGEgY2FyZ2FkbyB5IGhhIHBpbnRhZG8gbGEgd2ViXG4qICovXG50b29scy5vblN0eWxlc1JlYWR5ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2l0ZSB2aXN1YWxseSByZWFkeVwiKTtcbiAgICAvLyBETyBTT01FVEhJTkdcblxuXG59O1xuXG5cbi8qXG4qICAgTcOpdG9kbyBxdWUgc2UgZGlzcGFyYSBjdWFuZG8gZWwgd3Myci52WC5qc1xuKiAgIHlhIHNlIGhhIGNhcmdhZG8geSBlc3TDoSBkaXBvbmlibGUuXG4qICovXG50b29scy5vbkZyYW1ld29ya1JlYWR5ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2l0ZSBmdW5jdGlvbmFsaXR5IHJlYWR5XCIpO1xuICAgIC8vIERPIFNPTUVUSElOR1xuXG59O1xuIiwiLypcbiAqIE1pY3Jvc2l0ZXMgdG9vbHMganM6XG4gKiBFc3RlIGZpY2hlcm8gZXMgdW5hIG11ZXN0cmEgZGUgdXRpbGlkYWRlcyBwcm9waWFzIHBhcmEgbG9zIG1pY3Jvc2l0ZXMuXG4gKiBTZSBwdWVkZSBwZXJzb25hbGl6YXIgYSB0dSBndXN0b1xuICpcbiAqL1xuXG5cbmNvbnN0IE1JQ1JPU0lURV9JRCA9ICcjcG9wLXVwLWlsaW1pdGFibGVzJztcbmNvbnN0IGNzc01haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW2RhdGEtbWljcm9jc3NdJyk7XG5jb25zdCBNSUNST1NJVEVfU0VMRUNUSU9OID0gY2xvc2VzdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKE1JQ1JPU0lURV9JRCksICdbZGF0YS1wYXRobWljcm9zaXRlXScpO1xuY29uc3QgUEFUSF9NSUNST1NJVEUgPSBNSUNST1NJVEVfU0VMRUNUSU9OID8gTUlDUk9TSVRFX1NFTEVDVElPTi5kYXRhc2V0LnBhdGhtaWNyb3NpdGUgOiAnJztcbmxldCB3aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbmxldCBpc0Rlc2t0b3AgPSB3aWR0aCA+IDk2OTtcbmxldCBpc1RhYmxldCA9IHdpZHRoIDw9IDk2OSAmJiB3aWR0aCA+PSA3Njg7XG5sZXQgaXNNb2JpbGUgPSB3aWR0aCA8IDc2OCAmJiB3aWR0aCA+IDMwMDtcblxuXG4vKlxuKiBTZWFyY2hlcyBmb3IgdGhlIHBhcmVudCBub2RlIGNsb3Nlc3QgdG8gdGhlIGVsZW1lbnQsIHdoaWNoIGNvbXBsaWVzIHdpdGggdGhlIHNlbGVjdG9yXG4qIEBwYXJhbSB7fSBlbCAtIERlc2NyaXB0aW9uXG4qIEBwYXJhbSB7fSBzZWxlY3RvciAtIERlc2NyaXB0aW9uXG4qIEBwYXJhbSB7fSBzdG9wU2VsZWN0b3IgLSBEZXNjcmlwdGlvblxuKiAqL1xuZnVuY3Rpb24gY2xvc2VzdChlbCwgc2VsZWN0b3IsIHN0b3BTZWxlY3Rvcikge1xuICAgIGxldCByZXR2YWwgPSBudWxsO1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBpZiAoZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHZhbCA9IGVsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RvcFNlbGVjdG9yICYmIGVsLm1hdGNoZXMoc3RvcFNlbGVjdG9yKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcmV0dmFsO1xufVxuXG5cbi8qXG4qIFJlbW92ZXMgdGhlIHN0eWxlIGF0dHIsIG9uY2UgdGhlIHN0eWxlc2hlZXQgaGF2ZSBiZWVuIGxvYWRlZFxuKiByZXR1cm4gdW5kZWZpbmVkXG4qICovXG5mdW5jdGlvbiBfaW50ZXJuYWxDU1NJbml0KCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZmVzLW1zLWNvbnRlbnQnKS5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICBleC5jc3NMb2FkZWQgPSB0cnVlO1xuICAgIGV4Lm9uU3R5bGVzUmVhZHkoKTtcbn1cblxuXG4vKlxuKiBJbml0aWFsaXplcyBmdW5jdGlvbmFsaXR5IEpTLCBhbmQgYWR2aWNlcyB3aGVuIEpTIGlzIGxvYWRlZC5cbiogcmV0dXJuIHVuZGVmaW5lZFxuKiAqL1xuZnVuY3Rpb24gX2ludGVybmFsSlNJbml0KCkge1xuICAgIHdpbmRvdy52ZmVzLl91dGlscy5pbml0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZmVzLW1zLWNvbnRlbnQnKSk7XG4gICAgZXgub25GcmFtZXdvcmtSZWFkeSgpO1xufVxuXG5cbi8qXG4qIENoZWNrIGlmIHN0eWxlc2hlZXQgQ1NTIGlzIGxvYWRlZFxuKiBAcmV0dXJuIHtib29sZWFufVxuKiAqL1xuZnVuY3Rpb24gaXNDU1NNaWNyb0xvYWRlZCgpIHtcbiAgICBjb25zdCBkb21TdHlsZXMgPSBkb2N1bWVudC5zdHlsZVNoZWV0cztcbiAgICBsZXQgY291bnRDU1MgPSAwO1xuICAgIFtdLmZvckVhY2guY2FsbChkb21TdHlsZXMsIChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGhyZWYgPSBpdGVtLmhyZWYgfHwgJyc7XG4gICAgICAgIGlmIChocmVmLmluZGV4T2YoJ3dzMnInKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXUzJSIExvYWRlZCcpO1xuICAgICAgICAgICAgY291bnRDU1MrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaHJlZi5pbmRleE9mKCdtYWluJykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTUFJTi5DU1MgTG9hZGVkJyk7XG4gICAgICAgICAgICBjb3VudENTUysrXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gKGNvdW50Q1NTID09PSAyKTtcbn1cblxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIC8vIERPIFNPTUVUSElOR1xufVxuXG4vKlxuKiBsaXN0ZW4gZXZlbnQsIG9uY2UgaGF2ZSBiZWVuIGxvYWRlZCB0aGUgZmlsZXMgQ1NTXG4qICovXG5pZiAoIWlzQ1NTTWljcm9Mb2FkZWQoKSkge1xuICAgIGNzc01haW4uYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIF9pbnRlcm5hbENTU0luaXQpO1xufSBlbHNlIGlmIChpc0NTU01pY3JvTG9hZGVkKCkpIHtcbiAgICBzZXRUaW1lb3V0KF9pbnRlcm5hbENTU0luaXQsIDEwMCk7XG59XG5cblxuLypcbiogbGlzdGVuIGV2ZW50LCBvbmNlIGhhdmUgYmVlbiBsb2FkZWQgdGhlIGZpbGVzIEpTXG4qICovXG5pZiAod2luZG93LnZmZXMpIHtcbiAgICBzZXRUaW1lb3V0KF9pbnRlcm5hbEpTSW5pdCwgMTAwKVxufSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2ZmVzOmZyYW1ld29ya1JlYWR5JywgX2ludGVybmFsSlNJbml0KTtcbn1cblxuY29uc3QgZXggPSB7XG4gICAgaXNEZXNrdG9wLFxuICAgIGlzVGFibGV0LFxuICAgIGlzTW9iaWxlLFxuICAgIG1pY3Jvc2l0ZUlkOiBNSUNST1NJVEVfSUQsXG4gICAgbWljcm9zaXRlUGF0aDogUEFUSF9NSUNST1NJVEUsXG4gICAgaW5pdDogaW5pdCxcbiAgICBjc3NMb2FkZWQ6IGZhbHNlLFxuICAgIG9uU3R5bGVzUmVhZHk6ICgpID0+IG51bGwsXG4gICAgb25GcmFtZXdvcmtSZWFkeTogKCkgPT4gbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9