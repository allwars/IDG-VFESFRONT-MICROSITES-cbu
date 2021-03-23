/**
 * Vodafone Reboot Framework: Version 15.4.1. Generation Date: 2019-12-03T10:11:54.626Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../NEW-REBOOT/01-particulares/02-movil/09-landings/black-friday/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../NEW-REBOOT/01-particulares/02-movil/09-landings/black-friday/resources/scripts/main.js":
/*!*************************************************************************************************!*\
  !*** ../NEW-REBOOT/01-particulares/02-movil/09-landings/black-friday/resources/scripts/main.js ***!
  \*************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../NEW-REBOOT/01-particulares/02-movil/09-landings/black-friday/resources/scripts/tools.js");

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

/***/ "../NEW-REBOOT/01-particulares/02-movil/09-landings/black-friday/resources/scripts/tools.js":
/*!**************************************************************************************************!*\
  !*** ../NEW-REBOOT/01-particulares/02-movil/09-landings/black-friday/resources/scripts/tools.js ***!
  \**************************************************************************************************/
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
const MICROSITE_ID = '#black-friday';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL05FVy1SRUJPT1QvMDEtcGFydGljdWxhcmVzLzAyLW1vdmlsLzA5LWxhbmRpbmdzL2JsYWNrLWZyaWRheS9yZXNvdXJjZXMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovLy8uLi9ORVctUkVCT09ULzAxLXBhcnRpY3VsYXJlcy8wMi1tb3ZpbC8wOS1sYW5kaW5ncy9ibGFjay1mcmlkYXkvcmVzb3VyY2VzL3NjcmlwdHMvdG9vbHMuanMiXSwibmFtZXMiOlsidG9vbHMiLCJvblN0eWxlc1JlYWR5IiwiY29uc29sZSIsImxvZyIsIm9uRnJhbWV3b3JrUmVhZHkiLCJNSUNST1NJVEVfSUQiLCJjc3NNYWluIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiTUlDUk9TSVRFX1NFTEVDVElPTiIsImNsb3Nlc3QiLCJQQVRIX01JQ1JPU0lURSIsImRhdGFzZXQiLCJwYXRobWljcm9zaXRlIiwid2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImlzRGVza3RvcCIsImlzVGFibGV0IiwiaXNNb2JpbGUiLCJlbCIsInNlbGVjdG9yIiwic3RvcFNlbGVjdG9yIiwicmV0dmFsIiwibWF0Y2hlcyIsInBhcmVudEVsZW1lbnQiLCJfaW50ZXJuYWxDU1NJbml0IiwicmVtb3ZlQXR0cmlidXRlIiwiZXgiLCJjc3NMb2FkZWQiLCJfaW50ZXJuYWxKU0luaXQiLCJ3aW5kb3ciLCJ2ZmVzIiwiX3V0aWxzIiwiaW5pdCIsImlzQ1NTTWljcm9Mb2FkZWQiLCJkb21TdHlsZXMiLCJzdHlsZVNoZWV0cyIsImNvdW50Q1NTIiwiZm9yRWFjaCIsImNhbGwiLCJpdGVtIiwiaHJlZiIsImluZGV4T2YiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsIm1pY3Jvc2l0ZUlkIiwibWljcm9zaXRlUGF0aCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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LEdBQUc7QUFDUFgsV0FETztBQUVQQyxVQUZPO0FBR1BDLFVBSE87QUFJUDJCLGFBQVcsRUFBRXpDLFlBSk47QUFLUDBDLGVBQWEsRUFBRXBDLGNBTFI7QUFNUHVCLE1BQUksRUFBRUEsSUFOQztBQU9QTCxXQUFTLEVBQUUsS0FQSjtBQVFQNUIsZUFBYSxFQUFFLE1BQU0sSUFSZDtBQVNQRyxrQkFBZ0IsRUFBRSxNQUFNO0FBVGpCLENBQVg7QUFZZXdCLGlFQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4uL05FVy1SRUJPT1QvMDEtcGFydGljdWxhcmVzLzAyLW1vdmlsLzA5LWxhbmRpbmdzL2JsYWNrLWZyaWRheS9yZXNvdXJjZXMvc2NyaXB0cy9tYWluLmpzXCIpO1xuIiwiaW1wb3J0IHRvb2xzIGZyb20gJy4vdG9vbHMnO1xuXG5cbi8qXG4qICAgTcOpdG9kbyBxdWUgc2UgZGlzcGFyYSBjdWFuZG8gZWwgd3Myci52WC5jc3NcbiogICB5YSBzZSBoYSBjYXJnYWRvIHkgaGEgcGludGFkbyBsYSB3ZWJcbiogKi9cbnRvb2xzLm9uU3R5bGVzUmVhZHkgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTaXRlIHZpc3VhbGx5IHJlYWR5XCIpO1xuICAgIC8vIERPIFNPTUVUSElOR1xuXG5cbn07XG5cblxuLypcbiogICBNw6l0b2RvIHF1ZSBzZSBkaXNwYXJhIGN1YW5kbyBlbCB3czJyLnZYLmpzXG4qICAgeWEgc2UgaGEgY2FyZ2FkbyB5IGVzdMOhIGRpcG9uaWJsZS5cbiogKi9cbnRvb2xzLm9uRnJhbWV3b3JrUmVhZHkgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTaXRlIGZ1bmN0aW9uYWxpdHkgcmVhZHlcIik7XG4gICAgLy8gRE8gU09NRVRISU5HXG5cbn07XG4iLCIvKlxuICogTWljcm9zaXRlcyB0b29scyBqczpcbiAqIEVzdGUgZmljaGVybyBlcyB1bmEgbXVlc3RyYSBkZSB1dGlsaWRhZGVzIHByb3BpYXMgcGFyYSBsb3MgbWljcm9zaXRlcy5cbiAqIFNlIHB1ZWRlIHBlcnNvbmFsaXphciBhIHR1IGd1c3RvXG4gKlxuICovXG5cblxuY29uc3QgTUlDUk9TSVRFX0lEID0gJyNibGFjay1mcmlkYXknO1xuY29uc3QgY3NzTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbZGF0YS1taWNyb2Nzc10nKTtcbmNvbnN0IE1JQ1JPU0lURV9TRUxFQ1RJT04gPSBjbG9zZXN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoTUlDUk9TSVRFX0lEKSwgJ1tkYXRhLXBhdGhtaWNyb3NpdGVdJyk7XG5jb25zdCBQQVRIX01JQ1JPU0lURSA9IE1JQ1JPU0lURV9TRUxFQ1RJT04gPyBNSUNST1NJVEVfU0VMRUNUSU9OLmRhdGFzZXQucGF0aG1pY3Jvc2l0ZSA6ICcnO1xubGV0IHdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xubGV0IGlzRGVza3RvcCA9IHdpZHRoID4gOTY5O1xubGV0IGlzVGFibGV0ID0gd2lkdGggPD0gOTY5ICYmIHdpZHRoID49IDc2ODtcbmxldCBpc01vYmlsZSA9IHdpZHRoIDwgNzY4ICYmIHdpZHRoID4gMzAwO1xuXG5cbi8qXG4qIFNlYXJjaGVzIGZvciB0aGUgcGFyZW50IG5vZGUgY2xvc2VzdCB0byB0aGUgZWxlbWVudCwgd2hpY2ggY29tcGxpZXMgd2l0aCB0aGUgc2VsZWN0b3JcbiogQHBhcmFtIHt9IGVsIC0gRGVzY3JpcHRpb25cbiogQHBhcmFtIHt9IHNlbGVjdG9yIC0gRGVzY3JpcHRpb25cbiogQHBhcmFtIHt9IHN0b3BTZWxlY3RvciAtIERlc2NyaXB0aW9uXG4qICovXG5mdW5jdGlvbiBjbG9zZXN0KGVsLCBzZWxlY3Rvciwgc3RvcFNlbGVjdG9yKSB7XG4gICAgbGV0IHJldHZhbCA9IG51bGw7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dmFsID0gZWw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChzdG9wU2VsZWN0b3IgJiYgZWwubWF0Y2hlcyhzdG9wU2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXR2YWw7XG59XG5cblxuLypcbiogUmVtb3ZlcyB0aGUgc3R5bGUgYXR0ciwgb25jZSB0aGUgc3R5bGVzaGVldCBoYXZlIGJlZW4gbG9hZGVkXG4qIHJldHVybiB1bmRlZmluZWRcbiogKi9cbmZ1bmN0aW9uIF9pbnRlcm5hbENTU0luaXQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgIGV4LmNzc0xvYWRlZCA9IHRydWU7XG4gICAgZXgub25TdHlsZXNSZWFkeSgpO1xufVxuXG5cbi8qXG4qIEluaXRpYWxpemVzIGZ1bmN0aW9uYWxpdHkgSlMsIGFuZCBhZHZpY2VzIHdoZW4gSlMgaXMgbG9hZGVkLlxuKiByZXR1cm4gdW5kZWZpbmVkXG4qICovXG5mdW5jdGlvbiBfaW50ZXJuYWxKU0luaXQoKSB7XG4gICAgd2luZG93LnZmZXMuX3V0aWxzLmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpKTtcbiAgICBleC5vbkZyYW1ld29ya1JlYWR5KCk7XG59XG5cblxuLypcbiogQ2hlY2sgaWYgc3R5bGVzaGVldCBDU1MgaXMgbG9hZGVkXG4qIEByZXR1cm4ge2Jvb2xlYW59XG4qICovXG5mdW5jdGlvbiBpc0NTU01pY3JvTG9hZGVkKCkge1xuICAgIGNvbnN0IGRvbVN0eWxlcyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xuICAgIGxldCBjb3VudENTUyA9IDA7XG4gICAgW10uZm9yRWFjaC5jYWxsKGRvbVN0eWxlcywgKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaHJlZiA9IGl0ZW0uaHJlZiB8fCAnJztcbiAgICAgICAgaWYgKGhyZWYuaW5kZXhPZignd3MycicpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1dTMlJDU1MgTG9hZGVkJyk7XG4gICAgICAgICAgICBjb3VudENTUysrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChocmVmLmluZGV4T2YoUEFUSF9NSUNST1NJVEUgKyAnY3NzL3N0eWxlcy5jc3MnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNSUNST0NTUyBMb2FkZWQnKTtcbiAgICAgICAgICAgIGNvdW50Q1NTKytcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAoY291bnRDU1MgPT09IDIpO1xufVxuXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgLy8gRE8gU09NRVRISU5HXG59XG5cbi8qXG4qIGxpc3RlbiBldmVudCwgb25jZSBoYXZlIGJlZW4gbG9hZGVkIHRoZSBmaWxlcyBDU1NcbiogKi9cbmlmICghaXNDU1NNaWNyb0xvYWRlZCgpKSB7XG4gICAgY3NzTWFpbi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgX2ludGVybmFsQ1NTSW5pdCk7XG59IGVsc2UgaWYgKGlzQ1NTTWljcm9Mb2FkZWQoKSkge1xuICAgIHNldFRpbWVvdXQoX2ludGVybmFsQ1NTSW5pdCwgMTAwKTtcbn1cblxuXG4vKlxuKiBsaXN0ZW4gZXZlbnQsIG9uY2UgaGF2ZSBiZWVuIGxvYWRlZCB0aGUgZmlsZXMgSlNcbiogKi9cbmlmICh3aW5kb3cudmZlcykge1xuICAgIHNldFRpbWVvdXQoX2ludGVybmFsSlNJbml0LCAxMDApXG59IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZmZXM6ZnJhbWV3b3JrUmVhZHknLCBfaW50ZXJuYWxKU0luaXQpO1xufVxuXG5jb25zdCBleCA9IHtcbiAgICBpc0Rlc2t0b3AsXG4gICAgaXNUYWJsZXQsXG4gICAgaXNNb2JpbGUsXG4gICAgbWljcm9zaXRlSWQ6IE1JQ1JPU0lURV9JRCxcbiAgICBtaWNyb3NpdGVQYXRoOiBQQVRIX01JQ1JPU0lURSxcbiAgICBpbml0OiBpbml0LFxuICAgIGNzc0xvYWRlZDogZmFsc2UsXG4gICAgb25TdHlsZXNSZWFkeTogKCkgPT4gbnVsbCxcbiAgICBvbkZyYW1ld29ya1JlYWR5OiAoKSA9PiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=