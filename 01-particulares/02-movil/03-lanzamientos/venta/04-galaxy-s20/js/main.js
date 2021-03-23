/**
 * Vodafone Reboot Framework: Version 15.6.0. Generation Date: 2020-03-06T13:48:52.917Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../microsites-cbu/01-particulares/02-movil/03-lanzamientos/venta/04-galaxy-s20/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../microsites-cbu/01-particulares/02-movil/03-lanzamientos/venta/04-galaxy-s20/resources/scripts/main.js":
/*!****************************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/02-movil/03-lanzamientos/venta/04-galaxy-s20/resources/scripts/main.js ***!
  \****************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../microsites-cbu/01-particulares/02-movil/03-lanzamientos/venta/04-galaxy-s20/resources/scripts/tools.js");


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

/***/ "../microsites-cbu/01-particulares/02-movil/03-lanzamientos/venta/04-galaxy-s20/resources/scripts/tools.js":
/*!*****************************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/02-movil/03-lanzamientos/venta/04-galaxy-s20/resources/scripts/tools.js ***!
  \*****************************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL21pY3Jvc2l0ZXMtY2J1LzAxLXBhcnRpY3VsYXJlcy8wMi1tb3ZpbC8wMy1sYW56YW1pZW50b3MvdmVudGEvMDQtZ2FsYXh5LXMyMC9yZXNvdXJjZXMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovLy8uLi9taWNyb3NpdGVzLWNidS8wMS1wYXJ0aWN1bGFyZXMvMDItbW92aWwvMDMtbGFuemFtaWVudG9zL3ZlbnRhLzA0LWdhbGF4eS1zMjAvcmVzb3VyY2VzL3NjcmlwdHMvdG9vbHMuanMiXSwibmFtZXMiOlsidG9vbHMiLCJvblN0eWxlc1JlYWR5IiwiY29uc29sZSIsImxvZyIsImJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG5JdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRpdGxlQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImdldEF0dHJpYnV0ZSIsInBob25lTW9kZWwiLCJ2YWx1ZSIsIk1JQ1JPU0lURV9JRCIsIndpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJpc0Rlc2t0b3AiLCJpc1RhYmxldCIsImlzTW9iaWxlIiwiaW5pdCIsImNsb3Nlc3QiLCJlbCIsInNlbGVjdG9yIiwic3RvcFNlbGVjdG9yIiwicmV0dmFsIiwibWF0Y2hlcyIsInBhcmVudEVsZW1lbnQiLCJNSUNST1NJVEVfU0VMRUNUSU9OIiwiUEFUSF9NSUNST1NJVEUiLCJkYXRhc2V0IiwicGF0aG1pY3Jvc2l0ZSIsImV4IiwibWljcm9zaXRlSWQiLCJtaWNyb3NpdGVQYXRoIiwiY3NzTG9hZGVkIiwiY3NzTWFpbiIsIndpbmRvdyIsInZmZXMiLCJfdmYiLCJfdXRpbHMiLCJyZW1vdmVBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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QXZGO0FBR0EsTUFBTUMsRUFBRSxHQUFHO0FBQ1BmLFdBRE87QUFFUEMsVUFGTztBQUdQQyxVQUhPO0FBSVBjLGFBQVcsRUFBRXBCLFlBSk47QUFLUHFCLGVBQWEsRUFBRUwsY0FMUjtBQU1QVCxNQUFJLEVBQUVBLElBTkM7QUFPUGUsV0FBUyxFQUFFLEtBUEo7QUFRUHJDLGVBQWEsRUFBRSxNQUFNO0FBUmQsQ0FBWDtBQVdBLE1BQU1zQyxPQUFPLEdBQUdsQyxRQUFRLENBQUNNLGFBQVQsQ0FBdUIscUJBQXZCLENBQWhCOztBQUNBLElBQUc0QixPQUFILEVBQVc7QUFDUDtBQUNBO0FBQ0ksR0FBQ0MsTUFBTSxDQUFDQyxJQUFQLElBQWVELE1BQU0sQ0FBQ0UsR0FBdkIsRUFBNEJDLE1BQTVCLENBQW1DcEIsSUFBbkMsQ0FBd0NsQixRQUFRLENBQUNNLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXhDOztBQUNBTixVQUFRLENBQUNNLGFBQVQsQ0FBdUIsa0JBQXZCLEVBQTJDaUMsZUFBM0MsQ0FBMkQsT0FBM0Q7QUFDQVQsSUFBRSxDQUFDRyxTQUFILEdBQWUsSUFBZjtBQUNBSCxJQUFFLENBQUNsQyxhQUFILEdBTkcsQ0FPUDtBQUNIOztBQUVja0MsaUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi4vbWljcm9zaXRlcy1jYnUvMDEtcGFydGljdWxhcmVzLzAyLW1vdmlsLzAzLWxhbnphbWllbnRvcy92ZW50YS8wNC1nYWxheHktczIwL3Jlc291cmNlcy9zY3JpcHRzL21haW4uanNcIik7XG4iLCJpbXBvcnQgdG9vbHMgZnJvbSAnLi90b29scyc7XG5cbnRvb2xzLm9uU3R5bGVzUmVhZHkgPSAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKFwiU2l0ZSB2aXN1YWxseSByZWFkeVwiKVxuXG5cdHZhciBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRldmljZVwiKTtcblx0YnRuLmZvckVhY2goZnVuY3Rpb24oYnRuSXRlbSkge1xuXHRcdGJ0bkl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uICggKVxuXHRcdHtcblx0XHRcdHZhciB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGV2aWNlLXRpdGxlXCIpO1xuXHRcdFx0dGl0bGVDb250YWluZXIuaW5uZXJIVE1MPSBidG5JdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtZGV2aWNlLW5hbWVcIik7XG5cdFx0XHR2YXIgcGhvbmVNb2RlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmUtbW9kZWxcIik7XG5cdFx0XHRwaG9uZU1vZGVsLnZhbHVlID0gYnRuSXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRldmljZS1uYW1lXCIpO1xuXHRcdH0pOyBcblx0fSk7XG59O1xuXG50b29scy5vblN0eWxlc1JlYWR5KCk7XG4iLCIvKlxuICogTWljcm9zaXRlcyB0b29scyBqczpcbiAqIEVzdGUgZmljaGVybyBlcyB1bmEgbXVlc3RyYSBkZSB1dGlsaWRhZGVzIHByb3BpYXMgcGFyYSBsb3MgbWljcm9zaXRlcy5cbiAqIFNlIHB1ZWRlIHBlcnNvbmFsaXphciBhIHR1IGd1c3RvXG4gKlxuICovXG5cblxuY29uc3QgTUlDUk9TSVRFX0lEID0gJyNscC1wcmV2ZW50YS10ZXJtaW5hbGVzJztcbmxldCB3aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbmxldCBpc0Rlc2t0b3AsIGlzVGFibGV0LCBpc01vYmlsZTtcbmlzRGVza3RvcCA9IHdpZHRoID4gOTY5O1xuaXNUYWJsZXQgPSB3aWR0aCA8PSA5NjkgJiYgd2lkdGggPj0gNzY4O1xuaXNNb2JpbGUgPSB3aWR0aCA8IDc2OCAmJiB3aWR0aCA+IDMwMDtcblxuZnVuY3Rpb24gaW5pdCgpe31cblxuLy8gQnVzY2EgZWwgbm9kbyBwYWRyZSBtw6FzIGNlcmNhbm8gYSBfZWxfLCBxdWUgY3VtcGxhIF9zZWxlY3Rvcl9cbmNvbnN0IGNsb3Nlc3Q9KGVsLCBzZWxlY3Rvciwgc3RvcFNlbGVjdG9yKT0+IHtcbiAgICBsZXQgcmV0dmFsID0gbnVsbDtcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR2YWwgPSBlbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKHN0b3BTZWxlY3RvciAmJiBlbC5tYXRjaGVzKHN0b3BTZWxlY3RvcikpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJldHZhbDtcbn07XG5cbmNvbnN0IE1JQ1JPU0lURV9TRUxFQ1RJT04gPSBjbG9zZXN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoTUlDUk9TSVRFX0lEKSwgJ1tkYXRhLXBhdGhtaWNyb3NpdGVdJyk7XG5jb25zdCBQQVRIX01JQ1JPU0lURT1NSUNST1NJVEVfU0VMRUNUSU9OID8gTUlDUk9TSVRFX1NFTEVDVElPTi5kYXRhc2V0LnBhdGhtaWNyb3NpdGUgOiAnJztcblxuXG5jb25zdCBleCA9IHtcbiAgICBpc0Rlc2t0b3AsXG4gICAgaXNUYWJsZXQsXG4gICAgaXNNb2JpbGUsXG4gICAgbWljcm9zaXRlSWQ6IE1JQ1JPU0lURV9JRCxcbiAgICBtaWNyb3NpdGVQYXRoOiBQQVRIX01JQ1JPU0lURSxcbiAgICBpbml0OiBpbml0LFxuICAgIGNzc0xvYWRlZDogZmFsc2UsXG4gICAgb25TdHlsZXNSZWFkeTogKCkgPT4gbnVsbFxufTtcblxuY29uc3QgY3NzTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbZGF0YS1taWNyb2Nzc10nKTtcbmlmKGNzc01haW4pe1xuICAgIC8vQ29tbWVudGVkIGZvciBjb21wYXRpYmlsaXR5IHdpdGggRmlyZWZveFxuICAgIC8vY3NzTWFpbi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAod2luZG93LnZmZXMgfHwgd2luZG93Ll92ZikuX3V0aWxzLmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgICBleC5jc3NMb2FkZWQgPSB0cnVlO1xuICAgICAgICBleC5vblN0eWxlc1JlYWR5KCk7XG4gICAgLy99KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhcbiJdLCJzb3VyY2VSb290IjoiIn0=