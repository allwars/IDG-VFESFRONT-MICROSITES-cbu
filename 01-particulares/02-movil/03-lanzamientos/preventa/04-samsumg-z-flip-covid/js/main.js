/**
 * Vodafone Reboot Framework: Version 15.6.0. Generation Date: 2020-03-26T13:02:20.829Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../microsites-cbu/01-particulares/02-movil/03-lanzamientos/preventa/04-samsumg-z-flip-covid/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../microsites-cbu/01-particulares/02-movil/03-lanzamientos/preventa/04-samsumg-z-flip-covid/resources/scripts/main.js":
/*!*****************************************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/02-movil/03-lanzamientos/preventa/04-samsumg-z-flip-covid/resources/scripts/main.js ***!
  \*****************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../microsites-cbu/01-particulares/02-movil/03-lanzamientos/preventa/04-samsumg-z-flip-covid/resources/scripts/tools.js");


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

/***/ "../microsites-cbu/01-particulares/02-movil/03-lanzamientos/preventa/04-samsumg-z-flip-covid/resources/scripts/tools.js":
/*!******************************************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/02-movil/03-lanzamientos/preventa/04-samsumg-z-flip-covid/resources/scripts/tools.js ***!
  \******************************************************************************************************************************/
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
const MICROSITE_ID = '#samsumg-z-flip';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL21pY3Jvc2l0ZXMtY2J1LzAxLXBhcnRpY3VsYXJlcy8wMi1tb3ZpbC8wMy1sYW56YW1pZW50b3MvcHJldmVudGEvMDQtc2Ftc3VtZy16LWZsaXAtY292aWQvcmVzb3VyY2VzL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vbWljcm9zaXRlcy1jYnUvMDEtcGFydGljdWxhcmVzLzAyLW1vdmlsLzAzLWxhbnphbWllbnRvcy9wcmV2ZW50YS8wNC1zYW1zdW1nLXotZmxpcC1jb3ZpZC9yZXNvdXJjZXMvc2NyaXB0cy90b29scy5qcyJdLCJuYW1lcyI6WyJ0b29scyIsIm9uU3R5bGVzUmVhZHkiLCJjb25zb2xlIiwibG9nIiwiYnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0bkl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwidGl0bGVDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiZ2V0QXR0cmlidXRlIiwicGhvbmVNb2RlbCIsInZhbHVlIiwiTUlDUk9TSVRFX0lEIiwiY3NzTWFpbiIsIk1JQ1JPU0lURV9TRUxFQ1RJT04iLCJjbG9zZXN0IiwiUEFUSF9NSUNST1NJVEUiLCJkYXRhc2V0IiwicGF0aG1pY3Jvc2l0ZSIsIndpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJpc0Rlc2t0b3AiLCJpc1RhYmxldCIsImlzTW9iaWxlIiwiZWwiLCJzZWxlY3RvciIsInN0b3BTZWxlY3RvciIsInJldHZhbCIsIm1hdGNoZXMiLCJwYXJlbnRFbGVtZW50IiwiX2ludGVybmFsQ1NTSW5pdCIsImV4IiwiY3NzTG9hZGVkIiwicmVtb3ZlQXR0cmlidXRlIiwiX2ludGVybmFsSlNJbml0Iiwid2luZG93IiwidmZlcyIsIl91dGlscyIsImluaXQiLCJvbkZyYW1ld29ya1JlYWR5IiwiaXNDU1NNaWNyb0xvYWRlZCIsImRvbVN0eWxlcyIsInN0eWxlU2hlZXRzIiwiY291bnRDU1MiLCJjYWxsIiwiaXRlbSIsImhyZWYiLCJpbmRleE9mIiwic2V0VGltZW91dCIsIm1pY3Jvc2l0ZUlkIiwibWljcm9zaXRlUGF0aCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7O0FBRUFBLDhDQUFLLENBQUNDLGFBQU4sR0FBc0IsTUFBTTtBQUMzQkMsU0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFFQSxNQUFJQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsQ0FBVjtBQUNBRixLQUFHLENBQUNHLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCO0FBQzdCQSxXQUFPLENBQUNDLGdCQUFSLENBQXlCLE9BQXpCLEVBQWlDLFlBQ2pDO0FBQ0MsVUFBSUMsY0FBYyxHQUFHTCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsZUFB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YWhDLGNBQWMsR0FBRyxnQkFBOUIsTUFBb0QsQ0FBQyxDQUF6RCxFQUE0RDtBQUN4RGxCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0E2QyxjQUFRO0FBQ1g7QUFDSixHQVZEO0FBV0EsU0FBUUEsUUFBUSxLQUFLLENBQXJCO0FBQ0g7O0FBR0QsU0FBU0wsSUFBVCxHQUFnQixDQUVmLENBRkQsQ0FDSTs7QUFHSjs7Ozs7QUFHQSxJQUFJLENBQUNFLGdCQUFnQixFQUFyQixFQUF5QjtBQUNyQjVCLFNBQU8sQ0FBQ1IsZ0JBQVIsQ0FBeUIsTUFBekIsRUFBaUMwQixnQkFBakMsRUFEcUIsQ0FFckI7O0FBQ0FrQixZQUFVLENBQUNsQixnQkFBRCxFQUFtQixJQUFuQixDQUFWO0FBQ0gsQ0FKRCxNQUlPLElBQUlVLGdCQUFnQixFQUFwQixFQUF3QjtBQUMzQlEsWUFBVSxDQUFDbEIsZ0JBQUQsRUFBbUIsR0FBbkIsQ0FBVjtBQUNIO0FBR0Q7Ozs7O0FBR0EsSUFBSUssTUFBTSxDQUFDQyxJQUFYLEVBQWlCO0FBQ2JZLFlBQVUsQ0FBQ2QsZUFBRCxFQUFrQixHQUFsQixDQUFWO0FBQ0gsQ0FGRCxNQUVPO0FBQ0hsQyxVQUFRLENBQUNJLGdCQUFULENBQTBCLHFCQUExQixFQUFpRDhCLGVBQWpEO0FBQ0g7O0FBRUQsTUFBTUgsRUFBRSxHQUFHO0FBQ1BWLFdBRE87QUFFUEMsVUFGTztBQUdQQyxVQUhPO0FBSVAwQixhQUFXLEVBQUV0QyxZQUpOO0FBS1B1QyxlQUFhLEVBQUVuQyxjQUxSO0FBTVB1QixNQUFJLEVBQUVBLElBTkM7QUFPUE4sV0FBUyxFQUFFLEtBUEo7QUFRUHBDLGVBQWEsRUFBRSxNQUFNLElBUmQ7QUFTUDJDLGtCQUFnQixFQUFFLE1BQU07QUFUakIsQ0FBWDtBQVllUixpRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi9taWNyb3NpdGVzLWNidS8wMS1wYXJ0aWN1bGFyZXMvMDItbW92aWwvMDMtbGFuemFtaWVudG9zL3ByZXZlbnRhLzA0LXNhbXN1bWctei1mbGlwLWNvdmlkL3Jlc291cmNlcy9zY3JpcHRzL21haW4uanNcIik7XG4iLCJpbXBvcnQgdG9vbHMgZnJvbSAnLi90b29scyc7XG5cbnRvb2xzLm9uU3R5bGVzUmVhZHkgPSAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKFwiU2l0ZSB2aXN1YWxseSByZWFkeVwiKVxuXG5cdHZhciBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRldmljZVwiKTtcblx0YnRuLmZvckVhY2goZnVuY3Rpb24oYnRuSXRlbSkge1xuXHRcdGJ0bkl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uICggKVxuXHRcdHtcblx0XHRcdHZhciB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGV2aWNlLXRpdGxlXCIpO1xuXHRcdFx0dGl0bGVDb250YWluZXIuaW5uZXJIVE1MPSBidG5JdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtZGV2aWNlLW5hbWVcIik7XG5cdFx0XHR2YXIgcGhvbmVNb2RlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmUtbW9kZWxcIik7XG5cdFx0XHRwaG9uZU1vZGVsLnZhbHVlID0gYnRuSXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRldmljZS1uYW1lXCIpO1xuXHRcdH0pOyBcblx0fSk7XG59O1xuXG50b29scy5vblN0eWxlc1JlYWR5KCk7XG4iLCIvKlxuICogTWljcm9zaXRlcyB0b29scyBqczpcbiAqIEVzdGUgZmljaGVybyBlcyB1bmEgbXVlc3RyYSBkZSB1dGlsaWRhZGVzIHByb3BpYXMgcGFyYSBsb3MgbWljcm9zaXRlcy5cbiAqIFNlIHB1ZWRlIHBlcnNvbmFsaXphciBhIHR1IGd1c3RvXG4gKlxuICovXG5cblxuY29uc3QgTUlDUk9TSVRFX0lEID0gJyNzYW1zdW1nLXotZmxpcCc7XG5jb25zdCBjc3NNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tkYXRhLW1pY3JvY3NzXScpO1xuY29uc3QgTUlDUk9TSVRFX1NFTEVDVElPTiA9IGNsb3Nlc3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihNSUNST1NJVEVfSUQpLCAnW2RhdGEtcGF0aG1pY3Jvc2l0ZV0nKTtcbmNvbnN0IFBBVEhfTUlDUk9TSVRFID0gTUlDUk9TSVRFX1NFTEVDVElPTiA/IE1JQ1JPU0lURV9TRUxFQ1RJT04uZGF0YXNldC5wYXRobWljcm9zaXRlIDogJyc7XG5sZXQgd2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG5sZXQgaXNEZXNrdG9wID0gd2lkdGggPiA5Njk7XG5sZXQgaXNUYWJsZXQgPSB3aWR0aCA8PSA5NjkgJiYgd2lkdGggPj0gNzY4O1xubGV0IGlzTW9iaWxlID0gd2lkdGggPCA3NjggJiYgd2lkdGggPiAzMDA7XG5cblxuLypcbiAqIFNlYXJjaGVzIGZvciB0aGUgcGFyZW50IG5vZGUgY2xvc2VzdCB0byB0aGUgZWxlbWVudCwgd2hpY2ggY29tcGxpZXMgd2l0aCB0aGUgc2VsZWN0b3JcbiAqIEBwYXJhbSB7fSBlbCAtIERlc2NyaXB0aW9uXG4gKiBAcGFyYW0ge30gc2VsZWN0b3IgLSBEZXNjcmlwdGlvblxuICogQHBhcmFtIHt9IHN0b3BTZWxlY3RvciAtIERlc2NyaXB0aW9uXG4gKiAqL1xuZnVuY3Rpb24gY2xvc2VzdChlbCwgc2VsZWN0b3IsIHN0b3BTZWxlY3Rvcikge1xuICAgIGxldCByZXR2YWwgPSBudWxsO1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBpZiAoZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHZhbCA9IGVsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RvcFNlbGVjdG9yICYmIGVsLm1hdGNoZXMoc3RvcFNlbGVjdG9yKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcmV0dmFsO1xufVxuXG5cbi8qXG4gKiBSZW1vdmVzIHRoZSBzdHlsZSBhdHRyLCBvbmNlIHRoZSBzdHlsZXNoZWV0IGhhdmUgYmVlbiBsb2FkZWRcbiAqIHJldHVybiB1bmRlZmluZWRcbiAqICovXG5mdW5jdGlvbiBfaW50ZXJuYWxDU1NJbml0KCkge1xuICAgIGlmKCFleC5jc3NMb2FkZWQpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKE1JQ1JPU0lURV9JRCkucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgICAgIGV4LmNzc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIGV4Lm9uU3R5bGVzUmVhZHkoKTtcbiAgICB9XG59XG5cblxuLypcbiAqIEluaXRpYWxpemVzIGZ1bmN0aW9uYWxpdHkgSlMsIGFuZCBhZHZpY2VzIHdoZW4gSlMgaXMgbG9hZGVkLlxuICogcmV0dXJuIHVuZGVmaW5lZFxuICogKi9cbmZ1bmN0aW9uIF9pbnRlcm5hbEpTSW5pdCgpIHtcbiAgICB3aW5kb3cudmZlcy5fdXRpbHMuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKE1JQ1JPU0lURV9JRCkpO1xuICAgIGV4Lm9uRnJhbWV3b3JrUmVhZHkoKTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgc3R5bGVzaGVldCBDU1MgaXMgbG9hZGVkXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogKi9cbmZ1bmN0aW9uIGlzQ1NTTWljcm9Mb2FkZWQoKSB7XG4gICAgY29uc3QgZG9tU3R5bGVzID0gZG9jdW1lbnQuc3R5bGVTaGVldHM7XG4gICAgbGV0IGNvdW50Q1NTID0gMDtcbiAgICBbXS5mb3JFYWNoLmNhbGwoZG9tU3R5bGVzLCAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBocmVmID0gaXRlbS5ocmVmIHx8ICcnO1xuICAgICAgICBpZiAoaHJlZi5pbmRleE9mKFBBVEhfTUlDUk9TSVRFICsgJ2Nzcy93czJyJykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnV1MyUkNTUyBMb2FkZWQnKTtcbiAgICAgICAgICAgIGNvdW50Q1NTKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhyZWYuaW5kZXhPZihQQVRIX01JQ1JPU0lURSArICdjc3Mvc3R5bGVzLmNzcycpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ01JQ1JPQ1NTIExvYWRlZCcpO1xuICAgICAgICAgICAgY291bnRDU1MrK1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIChjb3VudENTUyA9PT0gMik7XG59XG5cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAvLyBETyBTT01FVEhJTkdcbn1cblxuLypcbiAqIGxpc3RlbiBldmVudCwgb25jZSBoYXZlIGJlZW4gbG9hZGVkIHRoZSBmaWxlcyBDU1NcbiAqICovXG5pZiAoIWlzQ1NTTWljcm9Mb2FkZWQoKSkge1xuICAgIGNzc01haW4uYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIF9pbnRlcm5hbENTU0luaXQpO1xuICAgIC8vIE1ha2Ugc3VyZSBtaWNyb3NpdGUgZ2V0cyB2aXNpYmxlIGFmdGVyIDMgc2Vjc1xuICAgIHNldFRpbWVvdXQoX2ludGVybmFsQ1NTSW5pdCwgMzAwMCk7XG59IGVsc2UgaWYgKGlzQ1NTTWljcm9Mb2FkZWQoKSkge1xuICAgIHNldFRpbWVvdXQoX2ludGVybmFsQ1NTSW5pdCwgMTAwKTtcbn1cblxuXG4vKlxuICogbGlzdGVuIGV2ZW50LCBvbmNlIGhhdmUgYmVlbiBsb2FkZWQgdGhlIGZpbGVzIEpTXG4gKiAqL1xuaWYgKHdpbmRvdy52ZmVzKSB7XG4gICAgc2V0VGltZW91dChfaW50ZXJuYWxKU0luaXQsIDEwMClcbn0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmZlczpmcmFtZXdvcmtSZWFkeScsIF9pbnRlcm5hbEpTSW5pdCk7XG59XG5cbmNvbnN0IGV4ID0ge1xuICAgIGlzRGVza3RvcCxcbiAgICBpc1RhYmxldCxcbiAgICBpc01vYmlsZSxcbiAgICBtaWNyb3NpdGVJZDogTUlDUk9TSVRFX0lELFxuICAgIG1pY3Jvc2l0ZVBhdGg6IFBBVEhfTUlDUk9TSVRFLFxuICAgIGluaXQ6IGluaXQsXG4gICAgY3NzTG9hZGVkOiBmYWxzZSxcbiAgICBvblN0eWxlc1JlYWR5OiAoKSA9PiBudWxsLFxuICAgIG9uRnJhbWV3b3JrUmVhZHk6ICgpID0+IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==