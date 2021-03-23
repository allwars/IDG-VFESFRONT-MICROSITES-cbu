/**
 * Vodafone Reboot Framework: Version 2.2.2. Generation Date: 2020-06-24T08:34:02.041Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/04-portabilidad/opcionA/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/04-portabilidad/opcionA/resources/scripts/main.js":
/*!**************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/03-test/mobile/04-portabilidad/opcionA/resources/scripts/main.js ***!
  \**************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/04-portabilidad/opcionA/resources/scripts/tools.js");

/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */

_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onStylesReady = () => {
  console.log("Site visually ready"); // DO SOMETHING

  _tools__WEBPACK_IMPORTED_MODULE_0__["default"].deleteHeadFiles();
};
/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */


_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onFrameworkReady = () => {
  console.log("Site functionality ready"); // DO SOMETHING
};

/***/ }),

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/04-portabilidad/opcionA/resources/scripts/tools.js":
/*!***************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/03-test/mobile/04-portabilidad/opcionA/resources/scripts/tools.js ***!
  \***************************************************************************************************************/
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
const MICROSITE_ID = '#yu-fibra';
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

    if (href.indexOf('css/styles.css') !== -1) {
      console.log('MAIN.CSS Loaded');
      countCSS++;
    }
  });
  return countCSS === 2;
}

function deleteHeadFiles() {
  let tagNameFile, urlFile, fileElement;
  const files = [{
    type: "css",
    name: "legacy"
  }, {
    type: "css",
    name: "mainvfdesktop"
  }, {
    type: "css",
    name: "mainvfresp"
  }];
  files.forEach(file => {
    switch (file.type) {
      case 'js':
        tagNameFile = 'script';
        urlFile = 'src';
        break;

      default:
        tagNameFile = 'link';
        urlFile = 'href';
    }

    fileElement = document.head.querySelector(`${tagNameFile}[${urlFile}*="${file.name}"]`);

    if (fileElement) {
      document.head.removeChild(fileElement);
    }
  });
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
  onFrameworkReady: () => null,
  deleteHeadFiles
};
/* harmony default export */ __webpack_exports__["default"] = (ex);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9mdWxsc2l4L0Rlc2t0b3AvbWljcm9zaXRlcy1jYnUvMDMtdGVzdC9tb2JpbGUvMDQtcG9ydGFiaWxpZGFkL29wY2lvbkEvcmVzb3VyY2VzL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2Z1bGxzaXgvRGVza3RvcC9taWNyb3NpdGVzLWNidS8wMy10ZXN0L21vYmlsZS8wNC1wb3J0YWJpbGlkYWQvb3BjaW9uQS9yZXNvdXJjZXMvc2NyaXB0cy90b29scy5qcyJdLCJuYW1lcyI6WyJ0b29scyIsIm9uU3R5bGVzUmVhZHkiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlSGVhZEZpbGVzIiwib25GcmFtZXdvcmtSZWFkeSIsIk1JQ1JPU0lURV9JRCIsImNzc01haW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJNSUNST1NJVEVfU0VMRUNUSU9OIiwiY2xvc2VzdCIsIlBBVEhfTUlDUk9TSVRFIiwiZGF0YXNldCIsInBhdGhtaWNyb3NpdGUiLCJ3aWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaXNEZXNrdG9wIiwiaXNUYWJsZXQiLCJpc01vYmlsZSIsImVsIiwic2VsZWN0b3IiLCJzdG9wU2VsZWN0b3IiLCJyZXR2YWwiLCJtYXRjaGVzIiwicGFyZW50RWxlbWVudCIsIl9pbnRlcm5hbENTU0luaXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJleCIsImNzc0xvYWRlZCIsIl9pbnRlcm5hbEpTSW5pdCIsIndpbmRvdyIsInZmZXMiLCJfdXRpbHMiLCJpbml0IiwiaXNDU1NNaWNyb0xvYWRlZCIsImRvbVN0eWxlcyIsInN0eWxlU2hlZXRzIiwiY291bnRDU1MiLCJmb3JFYWNoIiwiY2FsbCIsIml0ZW0iLCJocmVmIiwiaW5kZXhPZiIsInRhZ05hbWVGaWxlIiwidXJsRmlsZSIsImZpbGVFbGVtZW50IiwiZmlsZXMiLCJ0eXBlIiwibmFtZSIsImZpbGUiLCJoZWFkIiwicmVtb3ZlQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsIm1pY3Jvc2l0ZUlkIiwibWljcm9zaXRlUGF0aCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFHQTs7Ozs7QUFJQUEsOENBQUssQ0FBQ0MsYUFBTixHQUFzQixNQUFNO0FBQ3hCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixFQUR3QixDQUV4Qjs7QUFFQUgsZ0RBQUssQ0FBQ0ksZUFBTjtBQUNILENBTEQ7QUFRQTs7Ozs7O0FBSUFKLDhDQUFLLENBQUNLLGdCQUFOLEdBQXlCLE1BQU07QUFDM0JILFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaLEVBRDJCLENBRTNCO0FBRUgsQ0FKRCxDOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTs7Ozs7O0FBUUEsTUFBTUcsWUFBWSxHQUFHLFdBQXJCO0FBQ0EsTUFB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O0FBT1BMLFdBQVMsRUFBRSxLQVBKO0FBUVA3QixlQUFhLEVBQUUsTUFBTSxJQVJkO0FBU1BJLGtCQUFnQixFQUFFLE1BQU0sSUFUakI7QUFVUEQ7QUFWTyxDQUFYO0FBYWV5QixpRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9mdWxsc2l4L0Rlc2t0b3AvbWljcm9zaXRlcy1jYnUvMDMtdGVzdC9tb2JpbGUvMDQtcG9ydGFiaWxpZGFkL29wY2lvbkEvcmVzb3VyY2VzL3NjcmlwdHMvbWFpbi5qc1wiKTtcbiIsImltcG9ydCB0b29scyBmcm9tICcuL3Rvb2xzJztcblxuXG4vKlxuKiAgIE3DqXRvZG8gcXVlIHNlIGRpc3BhcmEgY3VhbmRvIGVsIHdzMnIudlguY3NzXG4qICAgeWEgc2UgaGEgY2FyZ2FkbyB5IGhhIHBpbnRhZG8gbGEgd2ViXG4qICovXG50b29scy5vblN0eWxlc1JlYWR5ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2l0ZSB2aXN1YWxseSByZWFkeVwiKTtcbiAgICAvLyBETyBTT01FVEhJTkdcblxuICAgIHRvb2xzLmRlbGV0ZUhlYWRGaWxlcygpO1xufTtcblxuXG4vKlxuKiAgIE3DqXRvZG8gcXVlIHNlIGRpc3BhcmEgY3VhbmRvIGVsIHdzMnIudlguanNcbiogICB5YSBzZSBoYSBjYXJnYWRvIHkgZXN0w6EgZGlwb25pYmxlLlxuKiAqL1xudG9vbHMub25GcmFtZXdvcmtSZWFkeSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNpdGUgZnVuY3Rpb25hbGl0eSByZWFkeVwiKTtcbiAgICAvLyBETyBTT01FVEhJTkdcblxufTsiLCIvKlxuICogTWljcm9zaXRlcyB0b29scyBqczpcbiAqIEVzdGUgZmljaGVybyBlcyB1bmEgbXVlc3RyYSBkZSB1dGlsaWRhZGVzIHByb3BpYXMgcGFyYSBsb3MgbWljcm9zaXRlcy5cbiAqIFNlIHB1ZWRlIHBlcnNvbmFsaXphciBhIHR1IGd1c3RvXG4gKlxuICovXG5cblxuY29uc3QgTUlDUk9TSVRFX0lEID0gJyN5dS1maWJyYSc7XG5jb25zdCBjc3NNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tkYXRhLW1pY3JvY3NzXScpO1xuY29uc3QgTUlDUk9TSVRFX1NFTEVDVElPTiA9IGNsb3Nlc3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihNSUNST1NJVEVfSUQpLCAnW2RhdGEtcGF0aG1pY3Jvc2l0ZV0nKTtcbmNvbnN0IFBBVEhfTUlDUk9TSVRFID0gTUlDUk9TSVRFX1NFTEVDVElPTiA/IE1JQ1JPU0lURV9TRUxFQ1RJT04uZGF0YXNldC5wYXRobWljcm9zaXRlIDogJyc7XG5sZXQgd2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG5sZXQgaXNEZXNrdG9wID0gd2lkdGggPiA5Njk7XG5sZXQgaXNUYWJsZXQgPSB3aWR0aCA8PSA5NjkgJiYgd2lkdGggPj0gNzY4O1xubGV0IGlzTW9iaWxlID0gd2lkdGggPCA3NjggJiYgd2lkdGggPiAzMDA7XG5cblxuLypcbiogU2VhcmNoZXMgZm9yIHRoZSBwYXJlbnQgbm9kZSBjbG9zZXN0IHRvIHRoZSBlbGVtZW50LCB3aGljaCBjb21wbGllcyB3aXRoIHRoZSBzZWxlY3RvclxuKiBAcGFyYW0ge30gZWwgLSBEZXNjcmlwdGlvblxuKiBAcGFyYW0ge30gc2VsZWN0b3IgLSBEZXNjcmlwdGlvblxuKiBAcGFyYW0ge30gc3RvcFNlbGVjdG9yIC0gRGVzY3JpcHRpb25cbiogKi9cbmZ1bmN0aW9uIGNsb3Nlc3QoZWwsIHNlbGVjdG9yLCBzdG9wU2VsZWN0b3IpIHtcbiAgICBsZXQgcmV0dmFsID0gbnVsbDtcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR2YWwgPSBlbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKHN0b3BTZWxlY3RvciAmJiBlbC5tYXRjaGVzKHN0b3BTZWxlY3RvcikpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJldHZhbDtcbn1cblxuXG4vKlxuKiBSZW1vdmVzIHRoZSBzdHlsZSBhdHRyLCBvbmNlIHRoZSBzdHlsZXNoZWV0IGhhdmUgYmVlbiBsb2FkZWRcbiogcmV0dXJuIHVuZGVmaW5lZFxuKiAqL1xuZnVuY3Rpb24gX2ludGVybmFsQ1NTSW5pdCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmZlcy1tcy1jb250ZW50JykucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgZXguY3NzTG9hZGVkID0gdHJ1ZTtcbiAgICBleC5vblN0eWxlc1JlYWR5KCk7XG59XG5cblxuLypcbiogSW5pdGlhbGl6ZXMgZnVuY3Rpb25hbGl0eSBKUywgYW5kIGFkdmljZXMgd2hlbiBKUyBpcyBsb2FkZWQuXG4qIHJldHVybiB1bmRlZmluZWRcbiogKi9cbmZ1bmN0aW9uIF9pbnRlcm5hbEpTSW5pdCgpIHtcbiAgICB3aW5kb3cudmZlcy5fdXRpbHMuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmZlcy1tcy1jb250ZW50JykpO1xuICAgIGV4Lm9uRnJhbWV3b3JrUmVhZHkoKTtcbn1cblxuXG4vKlxuKiBDaGVjayBpZiBzdHlsZXNoZWV0IENTUyBpcyBsb2FkZWRcbiogQHJldHVybiB7Ym9vbGVhbn1cbiogKi9cbmZ1bmN0aW9uIGlzQ1NTTWljcm9Mb2FkZWQoKSB7XG4gICAgY29uc3QgZG9tU3R5bGVzID0gZG9jdW1lbnQuc3R5bGVTaGVldHM7XG4gICAgbGV0IGNvdW50Q1NTID0gMDtcbiAgICBbXS5mb3JFYWNoLmNhbGwoZG9tU3R5bGVzLCAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBocmVmID0gaXRlbS5ocmVmIHx8ICcnO1xuICAgICAgICBpZiAoaHJlZi5pbmRleE9mKCd3czJyJykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnV1MyUiBMb2FkZWQnKTtcbiAgICAgICAgICAgIGNvdW50Q1NTKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhyZWYuaW5kZXhPZignY3NzL3N0eWxlcy5jc3MnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNQUlOLkNTUyBMb2FkZWQnKTtcbiAgICAgICAgICAgIGNvdW50Q1NTKytcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAoY291bnRDU1MgPT09IDIpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVIZWFkRmlsZXMoKSB7XG4gICAgbGV0IHRhZ05hbWVGaWxlLCB1cmxGaWxlLCBmaWxlRWxlbWVudDtcbiAgICBjb25zdCBmaWxlcyA9IFt7dHlwZTogXCJjc3NcIiwgbmFtZTogXCJsZWdhY3lcIn0sIHt0eXBlOiBcImNzc1wiLCBuYW1lOiBcIm1haW52ZmRlc2t0b3BcIn0sIHt0eXBlOiBcImNzc1wiLCBuYW1lOiBcIm1haW52ZnJlc3BcIn1dO1xuXG4gICAgZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgc3dpdGNoKGZpbGUudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnanMnOlxuICAgICAgICAgICAgICAgIHRhZ05hbWVGaWxlID0gJ3NjcmlwdCc7XG4gICAgICAgICAgICAgICAgdXJsRmlsZSA9ICdzcmMnO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRhZ05hbWVGaWxlID0gJ2xpbmsnO1xuICAgICAgICAgICAgICAgIHVybEZpbGUgPSAnaHJlZic7XG4gICAgICAgIH1cblxuICAgICAgICBmaWxlRWxlbWVudCA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihgJHt0YWdOYW1lRmlsZX1bJHt1cmxGaWxlfSo9XCIke2ZpbGUubmFtZX1cIl1gKTtcblxuICAgICAgICBpZihmaWxlRWxlbWVudCkgeyBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKGZpbGVFbGVtZW50KSB9XG4gICAgfSk7XG59XG5cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAvLyBETyBTT01FVEhJTkdcbn1cblxuLypcbiogbGlzdGVuIGV2ZW50LCBvbmNlIGhhdmUgYmVlbiBsb2FkZWQgdGhlIGZpbGVzIENTU1xuKiAqL1xuaWYgKCFpc0NTU01pY3JvTG9hZGVkKCkpIHtcbiAgICBjc3NNYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBfaW50ZXJuYWxDU1NJbml0KTtcbn0gZWxzZSBpZiAoaXNDU1NNaWNyb0xvYWRlZCgpKSB7XG4gICAgc2V0VGltZW91dChfaW50ZXJuYWxDU1NJbml0LCAxMDApO1xufVxuXG5cbi8qXG4qIGxpc3RlbiBldmVudCwgb25jZSBoYXZlIGJlZW4gbG9hZGVkIHRoZSBmaWxlcyBKU1xuKiAqL1xuaWYgKHdpbmRvdy52ZmVzKSB7XG4gICAgc2V0VGltZW91dChfaW50ZXJuYWxKU0luaXQsIDEwMClcbn0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmZlczpmcmFtZXdvcmtSZWFkeScsIF9pbnRlcm5hbEpTSW5pdCk7XG59XG5cbmNvbnN0IGV4ID0ge1xuICAgIGlzRGVza3RvcCxcbiAgICBpc1RhYmxldCxcbiAgICBpc01vYmlsZSxcbiAgICBtaWNyb3NpdGVJZDogTUlDUk9TSVRFX0lELFxuICAgIG1pY3Jvc2l0ZVBhdGg6IFBBVEhfTUlDUk9TSVRFLFxuICAgIGluaXQ6IGluaXQsXG4gICAgY3NzTG9hZGVkOiBmYWxzZSxcbiAgICBvblN0eWxlc1JlYWR5OiAoKSA9PiBudWxsLFxuICAgIG9uRnJhbWV3b3JrUmVhZHk6ICgpID0+IG51bGwsXG4gICAgZGVsZXRlSGVhZEZpbGVzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=