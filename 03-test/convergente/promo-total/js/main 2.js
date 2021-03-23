/**
 * Vodafone Reboot Framework: Version 13.0.2. Generation Date: 2019-08-14T08:27:59.311Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./microsites/es/01-particulares/01-convergente/09-target/promo-super/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./microsites/es/01-particulares/01-convergente/09-target/promo-super/resources/scripts/main.js":
/*!******************************************************************************************************!*\
  !*** ./microsites/es/01-particulares/01-convergente/09-target/promo-super/resources/scripts/main.js ***!
  \******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "./microsites/es/01-particulares/01-convergente/09-target/promo-super/resources/scripts/tools.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll */ "./microsites/es/01-particulares/01-convergente/09-target/promo-super/resources/scripts/scroll.js");



_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onStylesReady = function () {
  console.log("Site visually ready");
  var container = document.querySelector('.vfes-ms-content');
  [].forEach.call(document.querySelectorAll('.js-iva-button'), function (button) {
    button.addEventListener('click', function () {
      if (!button.classList.contains('active')) {
        document.querySelector('.js-iva-button.active').classList.remove('active');
        button.classList.add('active');
        container.setAttribute('data-iva', button.getAttribute('data-button-iva'));
      }
    });
  });
  setTimeout(function () {
    [].forEach.call(document.querySelectorAll('.js-sticky [data-sticky="item"]'), function (item) {
      item.addEventListener('click', function () {
        if (item.classList.contains('vfes-card-rate--closed')) {
          var text = item.querySelector('.js-svg-thunder .span strong');
          text ? text.innerText = text.innerText.replace('Datos', 'GB') : null;
        } else {
          var _text = item.querySelector('.js-svg-thunder .span strong');

          _text ? _text.innerText = _text.innerText.replace('GB', 'Datos') : null;
        }
      });
    });
  }, 100);

  if (_tools__WEBPACK_IMPORTED_MODULE_0__["default"].isMobile) {
    setTimeout(function () {
      var menuHeight = 50;
      var element = document.querySelector('body');
      var cardRef = document.querySelector('.vfes-tabs__content[data-tab="2"]'); //let finalScrollPos =cardRef.getBoundingClientRect().top+ (menuHeight * 3 )+20;

      var finalScrollPos = cardRef.offsetTop - menuHeight * 2;
      Object(_scroll__WEBPACK_IMPORTED_MODULE_1__["default"])(element, finalScrollPos, 500);
    }, 2000);
  }
};

_tools__WEBPACK_IMPORTED_MODULE_0__["default"].init();

/***/ }),

/***/ "./microsites/es/01-particulares/01-convergente/09-target/promo-super/resources/scripts/scroll.js":
/*!********************************************************************************************************!*\
  !*** ./microsites/es/01-particulares/01-convergente/09-target/promo-super/resources/scripts/scroll.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollTo; });
function scrollTo(element, to, duration) {
  var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

  var animateScroll = function animateScroll() {
    currentTime += increment;
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    window.scrollTo(0, val);

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
} //t = current time
//b = start value
//c = change in value
//d = duration

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2.8) - 1) + b;
};

/***/ }),

/***/ "./microsites/es/01-particulares/01-convergente/09-target/promo-super/resources/scripts/tools.js":
/*!*******************************************************************************************************!*\
  !*** ./microsites/es/01-particulares/01-convergente/09-target/promo-super/resources/scripts/tools.js ***!
  \*******************************************************************************************************/
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
function init() {
  var cssMain = document.querySelector('link[data-microcss]');

  if (cssMain) {
    //cssMain.addEventListener('load', function () {
    (window.vfes || window._vf)._utils.init(document.querySelector('.vfes-ms-content'));

    document.querySelector('.vfes-ms-content').removeAttribute("style");
    ex.cssLoaded = true;
    ex.onStylesReady(); //});
  }
}

var width = document.documentElement.clientWidth;
var isDesktop, isTablet, isMobile;
isDesktop = width > 969;
isTablet = width <= 969 && width >= 768;
isMobile = width < 768 && width > 300; // TODO
// const PATH_MICROSITE = document.querySelector('#micro-paquetes').parents('[data-pathmicrosite]').attr('data-pathmicrosite');

var ex = {
  isDesktop: isDesktop,
  isTablet: isTablet,
  isMobile: isMobile,
  //micrositePath: PATH_MICROSITE,
  init: init,
  cssLoaded: false,
  onStylesReady: function onStylesReady() {
    return null;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ex);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWljcm9zaXRlcy9lcy8wMS1wYXJ0aWN1bGFyZXMvMDEtY29udmVyZ2VudGUvMDktdGFyZ2V0L3Byb21vLXN1cGVyL3Jlc291cmNlcy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbWljcm9zaXRlcy9lcy8wMS1wYXJ0aWN1bGFyZXMvMDEtY29udmVyZ2VudGUvMDktdGFyZ2V0L3Byb21vLXN1cGVyL3Jlc291cmNlcy9zY3JpcHRzL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9taWNyb3NpdGVzL2VzLzAxLXBhcnRpY3VsYXJlcy8wMS1jb252ZXJnZW50ZS8wOS10YXJnZXQvcHJvbW8tc3VwZXIvcmVzb3VyY2VzL3NjcmlwdHMvdG9vbHMuanMiXSwibmFtZXMiOlsidG9vbHMiLCJvblN0eWxlc1JlYWR5IiwiY29uc29sZSIsImxvZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvckVhY2giLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsInNldEF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInNldFRpbWVvdXQiLCJpdGVtIiwidGV4dCIsImlubmVyVGV4dCIsInJlcGxhY2UiLCJpc01vYmlsZSIsIm1lbnVIZWlnaHQiLCJlbGVtZW50IiwiY2FyZFJlZiIsImZpbmFsU2Nyb2xsUG9zIiwib2Zmc2V0VG9wIiwic2Nyb2xsVG8iLCJpbml0IiwidG8iLCJkdXJhdGlvbiIsInN0YXJ0Iiwic2Nyb2xsVG9wIiwiY2hhbmdlIiwiY3VycmVudFRpbWUiLCJpbmNyZW1lbnQiLCJhbmltYXRlU2Nyb2xsIiwidmFsIiwiTWF0aCIsImVhc2VJbk91dFF1YWQiLCJ3aW5kb3ciLCJ0IiwiYiIsImMiLCJkIiwiY3NzTWFpbiIsInZmZXMiLCJfdmYiLCJfdXRpbHMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJleCIsImNzc0xvYWRlZCIsIndpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJpc0Rlc2t0b3AiLCJpc1RhYmxldCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBQSw4Q0FBSyxDQUFDQyxhQUFOLEdBQXNCLFlBQU07QUFDeEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBRUEsTUFBSUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWhCO0FBRUEsS0FBR0MsT0FBSCxDQUFXQyxJQUFYLENBQWdCSCxRQUFRLENBQUNJLGdCQUFULENBQTBCLGdCQUExQixDQUFoQixFQUE2RCxVQUFBQyxNQUFNLEVBQUk7QUFDbkVBLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFB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QUcsR0FBcEI7QUFDQUksUUFBUSxHQUFHSixLQUFLLElBQUksR0FBVCxJQUFnQkEsS0FBSyxJQUFJLEdBQXBDO0FBQ0EvQixRQUFRLEdBQUcrQixLQUFLLEdBQUcsR0FBUixJQUFlQSxLQUFLLEdBQUcsR0FBbEMsQyxDQUNBO0FBQ0E7O0FBRUEsSUFBTUYsRUFBRSxHQUFHO0FBQ1BLLFdBQVMsRUFBVEEsU0FETztBQUVQQyxVQUFRLEVBQVJBLFFBRk87QUFHUG5DLFVBQVEsRUFBUkEsUUFITztBQUlQO0FBQ0FPLE1BQUksRUFBRUEsSUFMQztBQU1QdUIsV0FBUyxFQUFFLEtBTko7QUFPUHBELGVBQWEsRUFBRTtBQUFBLFdBQU0sSUFBTjtBQUFBO0FBUFIsQ0FBWDtBQVllbUQsaUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9taWNyb3NpdGVzL2VzLzAxLXBhcnRpY3VsYXJlcy8wMS1jb252ZXJnZW50ZS8wOS10YXJnZXQvcHJvbW8tc3VwZXIvcmVzb3VyY2VzL3NjcmlwdHMvbWFpbi5qc1wiKTtcbiIsImltcG9ydCB0b29scyBmcm9tICcuL3Rvb2xzJztcbmltcG9ydCBzY3JvbGxUbyBmcm9tICcuL3Njcm9sbCc7XG5cbnRvb2xzLm9uU3R5bGVzUmVhZHkgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTaXRlIHZpc3VhbGx5IHJlYWR5XCIpO1xuICAgIFxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmZlcy1tcy1jb250ZW50Jyk7XG4gICAgXG4gICAgW10uZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1pdmEtYnV0dG9uJyksIGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKCFidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1pdmEtYnV0dG9uLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWl2YScsIGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uLWl2YScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc3RpY2t5IFtkYXRhLXN0aWNreT1cIml0ZW1cIl0nKSwgaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICBcbiAgICAgICAgICAgICAgICBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucygndmZlcy1jYXJkLXJhdGUtLWNsb3NlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuanMtc3ZnLXRodW5kZXIgLnNwYW4gc3Ryb25nJyk7XG4gICAgIFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ID8gdGV4dC5pbm5lclRleHQgPSB0ZXh0LmlubmVyVGV4dC5yZXBsYWNlKCdEYXRvcycsICdHQicpIDogbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmpzLXN2Zy10aHVuZGVyIC5zcGFuIHN0cm9uZycpO1xuICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA/IHRleHQuaW5uZXJUZXh0ID0gdGV4dC5pbm5lclRleHQucmVwbGFjZSgnR0InLCAnRGF0b3MnKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfSwgMTAwKTtcbiAgICBcbiAgICBpZih0b29scy5pc01vYmlsZSl7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1lbnVIZWlnaHQ9NTA7XG4gICAgICAgICAgICBsZXQgZWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgICAgICBsZXQgY2FyZFJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZmVzLXRhYnNfX2NvbnRlbnRbZGF0YS10YWI9XCIyXCJdJyk7XG4gICAgICAgICAgICAvL2xldCBmaW5hbFNjcm9sbFBvcyA9Y2FyZFJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ArIChtZW51SGVpZ2h0ICogMyApKzIwO1xuICAgICAgICAgICAgbGV0IGZpbmFsU2Nyb2xsUG9zID1jYXJkUmVmLm9mZnNldFRvcC1tZW51SGVpZ2h0KjI7XG4gICAgICAgICAgICBzY3JvbGxUbyhlbGVtZW50LCBmaW5hbFNjcm9sbFBvcywgNTAwKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxuXG59XG5cbnRvb2xzLmluaXQoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjcm9sbFRvKGVsZW1lbnQsIHRvLCBkdXJhdGlvbikge1xuXG4gICAgbGV0IHN0YXJ0ID0gZWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICAgIGNoYW5nZSA9IHRvIC0gc3RhcnQsXG4gICAgICAgIGN1cnJlbnRUaW1lID0gMCxcbiAgICAgICAgaW5jcmVtZW50ID0gMjA7XG4gICAgICAgIFxuICAgIGxldCBhbmltYXRlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICBjdXJyZW50VGltZSArPSBpbmNyZW1lbnQ7XG4gICAgICAgIGxldCB2YWwgPSBNYXRoLmVhc2VJbk91dFF1YWQoY3VycmVudFRpbWUsIHN0YXJ0LCBjaGFuZ2UsIGR1cmF0aW9uKTtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHZhbCk7XG4gICAgICAgIGlmKGN1cnJlbnRUaW1lIDwgZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoYW5pbWF0ZVNjcm9sbCwgaW5jcmVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbmltYXRlU2Nyb2xsKCk7XG59XG5cbi8vdCA9IGN1cnJlbnQgdGltZVxuLy9iID0gc3RhcnQgdmFsdWVcbi8vYyA9IGNoYW5nZSBpbiB2YWx1ZVxuLy9kID0gZHVyYXRpb25cbk1hdGguZWFzZUluT3V0UXVhZCA9IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICB0IC89IGQvMjtcblx0aWYgKHQgPCAxKSByZXR1cm4gYy8yKnQqdCArIGI7XG5cdHQtLTtcblx0cmV0dXJuIC1jLzIgKiAodCoodC0yLjgpIC0gMSkgKyBiO1xufTtcbiIsIi8qXG4gKiBNaWNyb3NpdGVzIHRvb2xzIGpzOlxuICogRXN0ZSBmaWNoZXJvIGVzIHVuYSBtdWVzdHJhIGRlIHV0aWxpZGFkZXMgcHJvcGlhcyBwYXJhIGxvcyBtaWNyb3NpdGVzLlxuICogU2UgcHVlZGUgcGVyc29uYWxpemFyIGEgdHUgZ3VzdG9cbiAqXG4gKi9cblxuZnVuY3Rpb24gaW5pdCgpe1xuICAgIGNvbnN0IGNzc01haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW2RhdGEtbWljcm9jc3NdJyk7XG4gICAgaWYoY3NzTWFpbil7XG4gICAgICAgIC8vY3NzTWFpbi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgKHdpbmRvdy52ZmVzIHx8IHdpbmRvdy5fdmYpLl91dGlscy5pbml0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZmVzLW1zLWNvbnRlbnQnKSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmZlcy1tcy1jb250ZW50JykucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgICAgICAgICBleC5jc3NMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgZXgub25TdHlsZXNSZWFkeSgpO1xuICAgICAgICAvL30pO1xuICAgIH1cbn1cblxubGV0IHdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xubGV0IGlzRGVza3RvcCwgaXNUYWJsZXQsIGlzTW9iaWxlO1xuaXNEZXNrdG9wID0gd2lkdGggPiA5Njk7XG5pc1RhYmxldCA9IHdpZHRoIDw9IDk2OSAmJiB3aWR0aCA+PSA3Njg7XG5pc01vYmlsZSA9IHdpZHRoIDwgNzY4ICYmIHdpZHRoID4gMzAwO1xuLy8gVE9ET1xuLy8gY29uc3QgUEFUSF9NSUNST1NJVEUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWljcm8tcGFxdWV0ZXMnKS5wYXJlbnRzKCdbZGF0YS1wYXRobWljcm9zaXRlXScpLmF0dHIoJ2RhdGEtcGF0aG1pY3Jvc2l0ZScpO1xuXG5jb25zdCBleCA9IHtcbiAgICBpc0Rlc2t0b3AsXG4gICAgaXNUYWJsZXQsXG4gICAgaXNNb2JpbGUsXG4gICAgLy9taWNyb3NpdGVQYXRoOiBQQVRIX01JQ1JPU0lURSxcbiAgICBpbml0OiBpbml0LFxuICAgIGNzc0xvYWRlZDogZmFsc2UsXG4gICAgb25TdHlsZXNSZWFkeTogKCkgPT4gbnVsbFxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZXhcbiJdLCJzb3VyY2VSb290IjoiIn0=