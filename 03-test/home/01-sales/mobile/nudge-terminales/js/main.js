/**
 * Vodafone Reboot Framework: Version 2.2.2. Generation Date: 2020-05-26T06:42:05.866Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/home/01-sales/mobile/nudge-terminales/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/home/01-sales/mobile/nudge-terminales/resources/scripts/main.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/03-test/home/01-sales/mobile/nudge-terminales/resources/scripts/main.js ***!
  \*********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/home/01-sales/mobile/nudge-terminales/resources/scripts/tools.js");

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

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/home/01-sales/mobile/nudge-terminales/resources/scripts/tools.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/03-test/home/01-sales/mobile/nudge-terminales/resources/scripts/tools.js ***!
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
const MICROSITE_ID = '#nudge-terminales';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9mdWxsc2l4L0Rlc2t0b3AvbWljcm9zaXRlcy1jYnUvMDMtdGVzdC9ob21lLzAxLXNhbGVzL21vYmlsZS9udWRnZS10ZXJtaW5hbGVzL3Jlc291cmNlcy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9mdWxsc2l4L0Rlc2t0b3AvbWljcm9zaXRlcy1jYnUvMDMtdGVzdC9ob21lLzAxLXNhbGVzL21vYmlsZS9udWRnZS10ZXJtaW5hbGVzL3Jlc291cmNlcy9zY3JpcHRzL3Rvb2xzLmpzIl0sIm5hbWVzIjpbInRvb2xzIiwib25TdHlsZXNSZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJvbkZyYW1ld29ya1JlYWR5IiwiTUlDUk9TSVRFX0lEIiwiY3NzTWFpbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIk1JQ1JPU0lURV9TRUxFQ1RJT04iLCJjbG9zZXN0IiwiUEFUSF9NSUNST1NJVEUiLCJkYXRhc2V0IiwicGF0aG1pY3Jvc2l0ZSIsIndpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJpc0Rlc2t0b3AiLCJpc1RhYmxldCIsImlzTW9iaWxlIiwiZWwiLCJzZWxlY3RvciIsInN0b3BTZWxlY3RvciIsInJldHZhbCIsIm1hdGNoZXMiLCJwYXJlbnRFbGVtZW50IiwiX2ludGVybmFsQ1NTSW5pdCIsImV4IiwiY3NzTG9hZGVkIiwicmVtb3ZlQXR0cmlidXRlIiwiX2ludGVybmFsSlNJbml0Iiwid2luZG93IiwidmZlcyIsIl91dGlscyIsImluaXQiLCJpc0NTU01pY3JvTG9hZGVkIiwiZG9tU3R5bGVzIiwic3R5bGVTaGVldHMiLCJjb3VudENTUyIsImZvckVhY2giLCJjYWxsIiwiaXRlbSIsImhyZWYiLCJpbmRleE9mIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJtaWNyb3NpdGVJZCIsIm1pY3Jvc2l0ZVBhdGgi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SUssTUFBTSxDQUFDQyxJQUFYLEVBQWlCO0FBQ2JhLFlBQVUsQ0FBQ2YsZUFBRCxFQUFrQixHQUFsQixDQUFWO0FBQ0gsQ0FGRCxNQUVPO0FBQ0h2QixVQUFRLENBQUNxQyxnQkFBVCxDQUEwQixxQkFBMUIsRUFBaURkLGVBQWpEO0FBQ0g7O0FBRUQsTUFBTUgsRUFBRSxHQUFHO0FBQ1BWLFdBRE87QUFFUEMsVUFGTztBQUdQQyxVQUhPO0FBSVAyQixhQUFXLEVBQUV6QyxZQUpOO0FBS1AwQyxlQUFhLEVBQUVwQyxjQUxSO0FBTVB1QixNQUFJLEVBQUVBLElBTkM7QUFPUE4sV0FBUyxFQUFFLEtBUEo7QUFRUDNCLGVBQWEsRUFBRSxNQUFNLElBUmQ7QUFTUEcsa0JBQWdCLEVBQUUsTUFBTTtBQVRqQixDQUFYO0FBWWV1QixpRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9mdWxsc2l4L0Rlc2t0b3AvbWljcm9zaXRlcy1jYnUvMDMtdGVzdC9ob21lLzAxLXNhbGVzL21vYmlsZS9udWRnZS10ZXJtaW5hbGVzL3Jlc291cmNlcy9zY3JpcHRzL21haW4uanNcIik7XG4iLCJpbXBvcnQgdG9vbHMgZnJvbSAnLi90b29scyc7XG5cblxuLypcbiogICBNw6l0b2RvIHF1ZSBzZSBkaXNwYXJhIGN1YW5kbyBlbCB3czJyLnZYLmNzc1xuKiAgIHlhIHNlIGhhIGNhcmdhZG8geSBoYSBwaW50YWRvIGxhIHdlYlxuKiAqL1xudG9vbHMub25TdHlsZXNSZWFkeSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNpdGUgdmlzdWFsbHkgcmVhZHlcIik7XG4gICAgLy8gRE8gU09NRVRISU5HXG5cblxufTtcblxuXG4vKlxuKiAgIE3DqXRvZG8gcXVlIHNlIGRpc3BhcmEgY3VhbmRvIGVsIHdzMnIudlguanNcbiogICB5YSBzZSBoYSBjYXJnYWRvIHkgZXN0w6EgZGlwb25pYmxlLlxuKiAqL1xudG9vbHMub25GcmFtZXdvcmtSZWFkeSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNpdGUgZnVuY3Rpb25hbGl0eSByZWFkeVwiKTtcbiAgICAvLyBETyBTT01FVEhJTkdcblxufTtcbiIsIi8qXG4gKiBNaWNyb3NpdGVzIHRvb2xzIGpzOlxuICogRXN0ZSBmaWNoZXJvIGVzIHVuYSBtdWVzdHJhIGRlIHV0aWxpZGFkZXMgcHJvcGlhcyBwYXJhIGxvcyBtaWNyb3NpdGVzLlxuICogU2UgcHVlZGUgcGVyc29uYWxpemFyIGEgdHUgZ3VzdG9cbiAqXG4gKi9cblxuXG5jb25zdCBNSUNST1NJVEVfSUQgPSAnI251ZGdlLXRlcm1pbmFsZXMnO1xuY29uc3QgY3NzTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbZGF0YS1taWNyb2Nzc10nKTtcbmNvbnN0IE1JQ1JPU0lURV9TRUxFQ1RJT04gPSBjbG9zZXN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoTUlDUk9TSVRFX0lEKSwgJ1tkYXRhLXBhdGhtaWNyb3NpdGVdJyk7XG5jb25zdCBQQVRIX01JQ1JPU0lURSA9IE1JQ1JPU0lURV9TRUxFQ1RJT04gPyBNSUNST1NJVEVfU0VMRUNUSU9OLmRhdGFzZXQucGF0aG1pY3Jvc2l0ZSA6ICcnO1xubGV0IHdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xubGV0IGlzRGVza3RvcCA9IHdpZHRoID4gOTY5O1xubGV0IGlzVGFibGV0ID0gd2lkdGggPD0gOTY5ICYmIHdpZHRoID49IDc2ODtcbmxldCBpc01vYmlsZSA9IHdpZHRoIDwgNzY4ICYmIHdpZHRoID4gMzAwO1xuXG5cbi8qXG4gKiBTZWFyY2hlcyBmb3IgdGhlIHBhcmVudCBub2RlIGNsb3Nlc3QgdG8gdGhlIGVsZW1lbnQsIHdoaWNoIGNvbXBsaWVzIHdpdGggdGhlIHNlbGVjdG9yXG4gKiBAcGFyYW0ge30gZWwgLSBEZXNjcmlwdGlvblxuICogQHBhcmFtIHt9IHNlbGVjdG9yIC0gRGVzY3JpcHRpb25cbiAqIEBwYXJhbSB7fSBzdG9wU2VsZWN0b3IgLSBEZXNjcmlwdGlvblxuICogKi9cbmZ1bmN0aW9uIGNsb3Nlc3QoZWwsIHNlbGVjdG9yLCBzdG9wU2VsZWN0b3IpIHtcbiAgICBsZXQgcmV0dmFsID0gbnVsbDtcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR2YWwgPSBlbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKHN0b3BTZWxlY3RvciAmJiBlbC5tYXRjaGVzKHN0b3BTZWxlY3RvcikpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJldHZhbDtcbn1cblxuXG4vKlxuICogUmVtb3ZlcyB0aGUgc3R5bGUgYXR0ciwgb25jZSB0aGUgc3R5bGVzaGVldCBoYXZlIGJlZW4gbG9hZGVkXG4gKiByZXR1cm4gdW5kZWZpbmVkXG4gKiAqL1xuZnVuY3Rpb24gX2ludGVybmFsQ1NTSW5pdCgpIHtcbiAgICBpZighZXguY3NzTG9hZGVkKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihNSUNST1NJVEVfSUQpLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgICBleC5jc3NMb2FkZWQgPSB0cnVlO1xuICAgICAgICBleC5vblN0eWxlc1JlYWR5KCk7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBJbml0aWFsaXplcyBmdW5jdGlvbmFsaXR5IEpTLCBhbmQgYWR2aWNlcyB3aGVuIEpTIGlzIGxvYWRlZC5cbiAqIHJldHVybiB1bmRlZmluZWRcbiAqICovXG5mdW5jdGlvbiBfaW50ZXJuYWxKU0luaXQoKSB7XG4gICAgd2luZG93LnZmZXMuX3V0aWxzLmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihNSUNST1NJVEVfSUQpKTtcbiAgICBleC5vbkZyYW1ld29ya1JlYWR5KCk7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIHN0eWxlc2hlZXQgQ1NTIGlzIGxvYWRlZFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqICovXG5mdW5jdGlvbiBpc0NTU01pY3JvTG9hZGVkKCkge1xuICAgIGNvbnN0IGRvbVN0eWxlcyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xuICAgIGxldCBjb3VudENTUyA9IDA7XG4gICAgW10uZm9yRWFjaC5jYWxsKGRvbVN0eWxlcywgKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaHJlZiA9IGl0ZW0uaHJlZiB8fCAnJztcbiAgICAgICAgaWYgKGhyZWYuaW5kZXhPZihQQVRIX01JQ1JPU0lURSArICdjc3Mvd3MycicpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1dTMlJDU1MgTG9hZGVkJyk7XG4gICAgICAgICAgICBjb3VudENTUysrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChocmVmLmluZGV4T2YoUEFUSF9NSUNST1NJVEUgKyAnY3NzL3N0eWxlcy5jc3MnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNSUNST0NTUyBMb2FkZWQnKTtcbiAgICAgICAgICAgIGNvdW50Q1NTKytcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAoY291bnRDU1MgPT09IDIpO1xufVxuXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgLy8gRE8gU09NRVRISU5HXG59XG5cbi8qXG4gKiBsaXN0ZW4gZXZlbnQsIG9uY2UgaGF2ZSBiZWVuIGxvYWRlZCB0aGUgZmlsZXMgQ1NTXG4gKiAqL1xuaWYgKCFpc0NTU01pY3JvTG9hZGVkKCkpIHtcbiAgICBjc3NNYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBfaW50ZXJuYWxDU1NJbml0KTtcbiAgICAvLyBNYWtlIHN1cmUgbWljcm9zaXRlIGdldHMgdmlzaWJsZSBhZnRlciAzIHNlY3NcbiAgICBzZXRUaW1lb3V0KF9pbnRlcm5hbENTU0luaXQsIDMwMDApO1xufSBlbHNlIGlmIChpc0NTU01pY3JvTG9hZGVkKCkpIHtcbiAgICBzZXRUaW1lb3V0KF9pbnRlcm5hbENTU0luaXQsIDEwMCk7XG59XG5cblxuLypcbiAqIGxpc3RlbiBldmVudCwgb25jZSBoYXZlIGJlZW4gbG9hZGVkIHRoZSBmaWxlcyBKU1xuICogKi9cbmlmICh3aW5kb3cudmZlcykge1xuICAgIHNldFRpbWVvdXQoX2ludGVybmFsSlNJbml0LCAxMDApXG59IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZmZXM6ZnJhbWV3b3JrUmVhZHknLCBfaW50ZXJuYWxKU0luaXQpO1xufVxuXG5jb25zdCBleCA9IHtcbiAgICBpc0Rlc2t0b3AsXG4gICAgaXNUYWJsZXQsXG4gICAgaXNNb2JpbGUsXG4gICAgbWljcm9zaXRlSWQ6IE1JQ1JPU0lURV9JRCxcbiAgICBtaWNyb3NpdGVQYXRoOiBQQVRIX01JQ1JPU0lURSxcbiAgICBpbml0OiBpbml0LFxuICAgIGNzc0xvYWRlZDogZmFsc2UsXG4gICAgb25TdHlsZXNSZWFkeTogKCkgPT4gbnVsbCxcbiAgICBvbkZyYW1ld29ya1JlYWR5OiAoKSA9PiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=