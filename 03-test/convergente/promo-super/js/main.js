/**
 * Vodafone Reboot Framework: Version 2.7.1. Generation Date: 2020-11-23T15:04:52.733Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../../Documents/works/VODAFONE/microsites-cbu/03-test/convergente/promo-super/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../Documents/works/VODAFONE/microsites-cbu/03-test/convergente/promo-super/resources/scripts/main.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/misti/Documents/works/VODAFONE/microsites-cbu/03-test/convergente/promo-super/resources/scripts/main.js ***!
  \**********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../../../../../../../../Documents/works/VODAFONE/microsites-cbu/03-test/convergente/promo-super/resources/scripts/tools.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll */ "../../../../../../../../Documents/works/VODAFONE/microsites-cbu/03-test/convergente/promo-super/resources/scripts/scroll.js");



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

/***/ "../../../../../../../../Documents/works/VODAFONE/microsites-cbu/03-test/convergente/promo-super/resources/scripts/scroll.js":
/*!************************************************************************************************************************!*\
  !*** /Users/misti/Documents/works/VODAFONE/microsites-cbu/03-test/convergente/promo-super/resources/scripts/scroll.js ***!
  \************************************************************************************************************************/
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

/***/ "../../../../../../../../Documents/works/VODAFONE/microsites-cbu/03-test/convergente/promo-super/resources/scripts/tools.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/misti/Documents/works/VODAFONE/microsites-cbu/03-test/convergente/promo-super/resources/scripts/tools.js ***!
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
//# sourceMappingURL=main.js.map