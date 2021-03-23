/**
 * Vodafone Reboot Framework: Version 15.6.0. Generation Date: 2020-04-16T14:25:57.421Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../microsites-cbu/01-particulares/02-movil/03-lanzamientos/preventa/05-iPhoneSE/iphoneSE/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../microsites-cbu/01-particulares/02-movil/03-lanzamientos/preventa/05-iPhoneSE/iphoneSE/resources/scripts/main.js":
/*!**************************************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/02-movil/03-lanzamientos/preventa/05-iPhoneSE/iphoneSE/resources/scripts/main.js ***!
  \**************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../microsites-cbu/01-particulares/02-movil/03-lanzamientos/preventa/05-iPhoneSE/iphoneSE/resources/scripts/tools.js");


_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onStylesReady = () => {
  console.log("Site visually ready");
  var btn = document.querySelectorAll(".device");
  btn.forEach(function (btnItem) {
    btnItem.addEventListener('click', function () {
      var titleContainer = document.querySelector("#device-title");
      titleContainer.innerHTML = btnItem.getAttribute("data-device-name");
      var phoneModel = document.querySelector("#phone-model");
      phoneModel.value = btnItem.getAttribute("data-device-name");
    });
  });
};

_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onStylesReady();

/***/ }),

/***/ "../microsites-cbu/01-particulares/02-movil/03-lanzamientos/preventa/05-iPhoneSE/iphoneSE/resources/scripts/tools.js":
/*!***************************************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/02-movil/03-lanzamientos/preventa/05-iPhoneSE/iphoneSE/resources/scripts/tools.js ***!
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
const MICROSITE_ID = '#lp-preventa-terminales';
let width = document.documentElement.clientWidth;
let isDesktop, isTablet, isMobile;
isDesktop = width > 969;
isTablet = width <= 969 && width >= 768;
isMobile = width < 768 && width > 300;

function init() {} // Busca el nodo padre más cercano a _el_, que cumpla _selector_


const closest = (el, selector, stopSelector) => {
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
};

const MICROSITE_SELECTION = closest(document.querySelector(MICROSITE_ID), '[data-pathmicrosite]');
const PATH_MICROSITE = MICROSITE_SELECTION ? MICROSITE_SELECTION.dataset.pathmicrosite : '';
const ex = {
  isDesktop,
  isTablet,
  isMobile,
  micrositeId: MICROSITE_ID,
  micrositePath: PATH_MICROSITE,
  init: init,
  cssLoaded: false,
  onStylesReady: () => null
};
const cssMain = document.querySelector('link[data-microcss]');

if (cssMain) {
  //Commented for compatibility with Firefox
  //cssMain.addEventListener('load', function () {
  (window.vfes || window._vf)._utils.init(document.querySelector('.vfes-ms-content'));

  document.querySelector('.vfes-ms-content').removeAttribute("style");
  ex.cssLoaded = true;
  ex.onStylesReady(); //});
}

/* harmony default export */ __webpack_exports__["default"] = (ex);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL21pY3Jvc2l0ZXMtY2J1LzAxLXBhcnRpY3VsYXJlcy8wMi1tb3ZpbC8wMy1sYW56YW1pZW50b3MvcHJldmVudGEvMDUtaVBob25lU0UvaXBob25lU0UvcmVzb3VyY2VzL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vbWljcm9zaXRlcy1jYnUvMDEtcGFydGljdWxhcmVzLzAyLW1vdmlsLzAzLWxhbnphbWllbnRvcy9wcmV2ZW50YS8wNS1pUGhvbmVTRS9pcGhvbmVTRS9yZXNvdXJjZXMvc2NyaXB0cy90b29scy5qcyJdLCJuYW1lcyI6WyJ0b29scyIsIm9uU3R5bGVzUmVhZHkiLCJjb25zb2xlIiwibG9nIiwiYnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0bkl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwidGl0bGVDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiZ2V0QXR0cmlidXRlIiwicGhvbmVNb2RlbCIsInZhbHVlIiwiTUlDUk9TSVRFX0lEIiwid2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImlzRGVza3RvcCIsImlzVGFibGV0IiwiaXNNb2JpbGUiLCJpbml0IiwiY2xvc2VzdCIsImVsIiwic2VsZWN0b3IiLCJzdG9wU2VsZWN0b3IiLCJyZXR2YWwiLCJtYXRjaGVzIiwicGFyZW50RWxlbWVudCIsIk1JQ1JPU0lURV9TRUxFQ1RJT04iLCJQQVRIX01JQ1JPU0lURSIsImRhdGFzZXQiLCJwYXRobWljcm9zaXRlIiwiZXgiLCJtaWNyb3NpdGVJZCIsIm1pY3Jvc2l0ZVBhdGgiLCJjc3NMb2FkZWQiLCJjc3NNYWluIiwid2luZG93IiwidmZlcyIsIl92ZiIsIl91dGlscyIsInJlbW92ZUF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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QUE0QkMsYUFBL0IsR0FBK0MsRUFBdkY7QUFHQSxNQUFNQyxFQUFFLEdBQUc7QUFDUGYsV0FETztBQUVQQyxVQUZPO0FBR1BDLFVBSE87QUFJUGMsYUFBVyxFQUFFcEIsWUFKTjtBQUtQcUIsZUFBYSxFQUFFTCxjQUxSO0FBTVBULE1BQUksRUFBRUEsSUFOQztBQU9QZSxXQUFTLEVBQUUsS0FQSjtBQVFQckMsZUFBYSxFQUFFLE1BQU07QUFSZCxDQUFYO0FBV0EsTUFBTXNDLE9BQU8sR0FBR2xDLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixxQkFBdkIsQ0FBaEI7O0FBQ0EsSUFBRzRCLE9BQUgsRUFBVztBQUNQO0FBQ0E7QUFDSSxHQUFDQyxNQUFNLENBQUNDLElBQVAsSUFBZUQsTUFBTSxDQUFDRSxHQUF2QixFQUE0QkMsTUFBNUIsQ0FBbUNwQixJQUFuQyxDQUF3Q2xCLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixrQkFBdkIsQ0FBeEM7O0FBQ0FOLFVBQVEsQ0FBQ00sYUFBVCxDQUF1QixrQkFBdkIsRUFBMkNpQyxlQUEzQyxDQUEyRCxPQUEzRDtBQUNBVCxJQUFFLENBQUNHLFNBQUgsR0FBZSxJQUFmO0FBQ0FILElBQUUsQ0FBQ2xDLGFBQUgsR0FORyxDQU9QO0FBQ0g7O0FBRWNrQyxpRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi9taWNyb3NpdGVzLWNidS8wMS1wYXJ0aWN1bGFyZXMvMDItbW92aWwvMDMtbGFuemFtaWVudG9zL3ByZXZlbnRhLzA1LWlQaG9uZVNFL2lwaG9uZVNFL3Jlc291cmNlcy9zY3JpcHRzL21haW4uanNcIik7XG4iLCJpbXBvcnQgdG9vbHMgZnJvbSAnLi90b29scyc7XG5cbnRvb2xzLm9uU3R5bGVzUmVhZHkgPSAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKFwiU2l0ZSB2aXN1YWxseSByZWFkeVwiKVxuXG5cdHZhciBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRldmljZVwiKTtcblx0YnRuLmZvckVhY2goZnVuY3Rpb24oYnRuSXRlbSkge1xuXHRcdGJ0bkl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uICggKVxuXHRcdHtcblx0XHRcdHZhciB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGV2aWNlLXRpdGxlXCIpO1xuXHRcdFx0dGl0bGVDb250YWluZXIuaW5uZXJIVE1MPSBidG5JdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtZGV2aWNlLW5hbWVcIik7XG5cdFx0XHR2YXIgcGhvbmVNb2RlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmUtbW9kZWxcIik7XG5cdFx0XHRwaG9uZU1vZGVsLnZhbHVlID0gYnRuSXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRldmljZS1uYW1lXCIpO1xuXHRcdH0pOyBcblx0fSk7XG59O1xuXG50b29scy5vblN0eWxlc1JlYWR5KCk7XG4iLCIvKlxuICogTWljcm9zaXRlcyB0b29scyBqczpcbiAqIEVzdGUgZmljaGVybyBlcyB1bmEgbXVlc3RyYSBkZSB1dGlsaWRhZGVzIHByb3BpYXMgcGFyYSBsb3MgbWljcm9zaXRlcy5cbiAqIFNlIHB1ZWRlIHBlcnNvbmFsaXphciBhIHR1IGd1c3RvXG4gKlxuICovXG5cblxuY29uc3QgTUlDUk9TSVRFX0lEID0gJyNscC1wcmV2ZW50YS10ZXJtaW5hbGVzJztcbmxldCB3aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbmxldCBpc0Rlc2t0b3AsIGlzVGFibGV0LCBpc01vYmlsZTtcbmlzRGVza3RvcCA9IHdpZHRoID4gOTY5O1xuaXNUYWJsZXQgPSB3aWR0aCA8PSA5NjkgJiYgd2lkdGggPj0gNzY4O1xuaXNNb2JpbGUgPSB3aWR0aCA8IDc2OCAmJiB3aWR0aCA+IDMwMDtcblxuZnVuY3Rpb24gaW5pdCgpe31cblxuLy8gQnVzY2EgZWwgbm9kbyBwYWRyZSBtw6FzIGNlcmNhbm8gYSBfZWxfLCBxdWUgY3VtcGxhIF9zZWxlY3Rvcl9cbmNvbnN0IGNsb3Nlc3Q9KGVsLCBzZWxlY3Rvciwgc3RvcFNlbGVjdG9yKT0+IHtcbiAgICBsZXQgcmV0dmFsID0gbnVsbDtcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR2YWwgPSBlbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKHN0b3BTZWxlY3RvciAmJiBlbC5tYXRjaGVzKHN0b3BTZWxlY3RvcikpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJldHZhbDtcbn07XG5cbmNvbnN0IE1JQ1JPU0lURV9TRUxFQ1RJT04gPSBjbG9zZXN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoTUlDUk9TSVRFX0lEKSwgJ1tkYXRhLXBhdGhtaWNyb3NpdGVdJyk7XG5jb25zdCBQQVRIX01JQ1JPU0lURT1NSUNST1NJVEVfU0VMRUNUSU9OID8gTUlDUk9TSVRFX1NFTEVDVElPTi5kYXRhc2V0LnBhdGhtaWNyb3NpdGUgOiAnJztcblxuXG5jb25zdCBleCA9IHtcbiAgICBpc0Rlc2t0b3AsXG4gICAgaXNUYWJsZXQsXG4gICAgaXNNb2JpbGUsXG4gICAgbWljcm9zaXRlSWQ6IE1JQ1JPU0lURV9JRCxcbiAgICBtaWNyb3NpdGVQYXRoOiBQQVRIX01JQ1JPU0lURSxcbiAgICBpbml0OiBpbml0LFxuICAgIGNzc0xvYWRlZDogZmFsc2UsXG4gICAgb25TdHlsZXNSZWFkeTogKCkgPT4gbnVsbFxufTtcblxuY29uc3QgY3NzTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbZGF0YS1taWNyb2Nzc10nKTtcbmlmKGNzc01haW4pe1xuICAgIC8vQ29tbWVudGVkIGZvciBjb21wYXRpYmlsaXR5IHdpdGggRmlyZWZveFxuICAgIC8vY3NzTWFpbi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAod2luZG93LnZmZXMgfHwgd2luZG93Ll92ZikuX3V0aWxzLmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgICBleC5jc3NMb2FkZWQgPSB0cnVlO1xuICAgICAgICBleC5vblN0eWxlc1JlYWR5KCk7XG4gICAgLy99KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhcbiJdLCJzb3VyY2VSb290IjoiIn0=