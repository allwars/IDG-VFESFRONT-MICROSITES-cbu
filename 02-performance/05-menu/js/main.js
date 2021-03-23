/**
 * Vodafone Reboot Framework: Version 15.3.0. Generation Date: 2020-01-28T15:44:29.601Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../microsites-cbu/02-performance/05-menu/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../microsites-cbu/02-performance/05-menu/resources/scripts/_menu-performance.js":
/*!***************************************************************************************!*\
  !*** ../microsites-cbu/02-performance/05-menu/resources/scripts/_menu-performance.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuPerformance; });
class MenuPerformance {
  init() {
    console.log("INIT MENU");
    this.menuMobile();
  }

  menuMobile() {
    //Device width and orientation
    var isDesktop = window.innerWidth >= 970;
    var isTablet = window.innerWidth < 970 && window.innerWidth >= 640;
    var isMobile = window.innerWidth < 640; //Main nav container

    var mainNav = document.getElementById("vfms-main-header__main-nav"); //Main menu item.

    var mainNavItems = document.querySelectorAll(".vfms-main-nav-item"); // Main Nav item container

    var mainNavBox = document.querySelectorAll(".vfms-main-nav-container__item");
    var items = document.querySelectorAll('.vfms-main-item__type'); //Secundary nav container

    var secNav = document.querySelectorAll(".vfms-sec-nav"); //Secundary nav items

    var secNavItems = document.querySelectorAll(".vfms-sec-nav-item");
    var openMenu = document.getElementById('vfms-recursive-nav__button');
    openMenu.addEventListener('click', function (event) {
      //change icon shape
      openMenu.classList.toggle("vfms-isOpen"); //Show main nav container. Change display of the element.

      mainNav.classList.toggle("vfms-showMainNav");
    });

    for (var i = 0; i < mainNavBox.length; i++) {
      mainNavBox[i].addEventListener('click', function (event) {
        this.classList.toggle("active");
      });
    } //Tablet and Mobile.


    if (isTablet || isMobile) {
      // AL pinchar en el menú de hamburguesa 
      openMenu.addEventListener('click', function (event) {
        // Todas las navegaciones secundarias estarán escondidas
        for (var i = 0; i < secNav.length; i++) {
          secNav[i].style.display = "none";
        } //Los items de la navegación principal no deben estar en rojo al desplegarse el menú


        for (var i = 0; i < mainNavItems.length; i++) {
          mainNavItems[i].classList.remove("vfms-changeIcon");
          mainNavItems[i].classList.remove("vfes-colours--vodafone-red");
          mainNavItems[i].parentElement.classList.remove("vfms-borderColor");
        } //Los items de la navegación principal no deben estar en rojo al desplegarse el menú


        for (var i = 0; i < items.length; i++) {
          items[i].classList.remove("vfes-colours--vodafone-red");
        }
      }); //Funciones correspondientes al evento click de los elementos de la navegación principal.

      mainNavItems.forEach(item => {
        item.addEventListener('click', () => {
          // Todas las navegaciones secundarias tienen que estar escondidas menos la que sigue al que se está pinchando.
          secNav.forEach(item => {
            for (var i = 0; i < secNav.length; i++) {
              secNav[i].style.display = 'none';
            }
          }); // //Elemento de navegación secundaria

          var sec = item.nextElementSibling; //sec.classList.toggle("vfms-showNav");

          sec.style.display = sec.style.display === 'none' ? 'block' : 'none'; //Elemento de navegación secundaria

          var sec = item.nextElementSibling;
          sec.classList.toggle("vfms-showSecNav"); // Los elementos de la navegación secundaria deben de tener el fondo blanco. 

          secNavItems.forEach(item => {
            for (var i = 0; i < secNavItems.length; i++) {
              secNavItems[i].classList.remove("vfes-colours-bg-aluminium");
            }
          }); //El item cambia de color

          var type = item.querySelector(".vfms-main-item__type");
          type.classList.toggle("vfes-colours--vodafone-red");
          item.classList.toggle("vfms-changeIcon");
          item.classList.toggle("vfes-colours--vodafone-red");
          item.parentElement.classList.toggle("vfms-borderColor");
        });
      }); //Secundary Navigation Items Event click change the item background.

      secNavItems.forEach(item => {
        item.addEventListener('click', () => {
          for (var i = 0; i < secNavItems.length; i++) {
            //click in another item remove background color.
            secNavItems[i].classList.remove("vfes-colours-bg-aluminium");
          }

          item.classList.toggle("vfes-colours-bg-aluminium");
        });
      });
    }
  }

}

/***/ }),

/***/ "../microsites-cbu/02-performance/05-menu/resources/scripts/main.js":
/*!**************************************************************************!*\
  !*** ../microsites-cbu/02-performance/05-menu/resources/scripts/main.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../microsites-cbu/02-performance/05-menu/resources/scripts/tools.js");
/* harmony import */ var _menu_performance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_menu-performance */ "../microsites-cbu/02-performance/05-menu/resources/scripts/_menu-performance.js");


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

  var miMenu = new _menu_performance__WEBPACK_IMPORTED_MODULE_1__["default"]();
  miMenu.init();
};

/***/ }),

/***/ "../microsites-cbu/02-performance/05-menu/resources/scripts/tools.js":
/*!***************************************************************************!*\
  !*** ../microsites-cbu/02-performance/05-menu/resources/scripts/tools.js ***!
  \***************************************************************************/
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
const MICROSITE_ID = '#multipestana-v2';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL21pY3Jvc2l0ZXMtY2J1LzAyLXBlcmZvcm1hbmNlLzA1LW1lbnUvcmVzb3VyY2VzL3NjcmlwdHMvX21lbnUtcGVyZm9ybWFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4uL21pY3Jvc2l0ZXMtY2J1LzAyLXBlcmZvcm1hbmNlLzA1LW1lbnUvcmVzb3VyY2VzL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vbWljcm9zaXRlcy1jYnUvMDItcGVyZm9ybWFuY2UvMDUtbWVudS9yZXNvdXJjZXMvc2NyaXB0cy90b29scy5qcyJdLCJuYW1lcyI6WyJNZW51UGVyZm9ybWFuY2UiLCJpbml0IiwiY29uc29sZSIsImxvZyIsIm1lbnVNb2JpbGUiLCJpc0Rlc2t0b3AiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaXNUYWJsZXQiLCJpc01vYmlsZSIsIm1haW5OYXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibWFpbk5hdkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsIm1haW5OYXZCb3giLCJpdGVtcyIsInNlY05hdiIsInNlY05hdkl0ZW1zIiwib3Blbk1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJkaXNwbGF5IiwicmVtb3ZlIiwicGFyZW50RWxlbWVudCIsImZvckVhY2giLCJpdGVtIiwic2VjIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidHlwZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0b29scyIsIm9uU3R5bGVzUmVhZHkiLCJvbkZyYW1ld29ya1JlYWR5IiwibWlNZW51IiwiTUlDUk9TSVRFX0lEIiwiY3NzTWFpbiIsIk1JQ1JPU0lURV9TRUxFQ1RJT04iLCJjbG9zZXN0IiwiUEFUSF9NSUNST1NJVEUiLCJkYXRhc2V0IiwicGF0aG1pY3Jvc2l0ZSIsIndpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJlbCIsInNlbGVjdG9yIiwic3RvcFNlbGVjdG9yIiwicmV0dmFsIiwibWF0Y2hlcyIsIl9pbnRlcm5hbENTU0luaXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJleCIsImNzc0xvYWRlZCIsIl9pbnRlcm5hbEpTSW5pdCIsInZmZXMiLCJfdXRpbHMiLCJpc0NTU01pY3JvTG9hZGVkIiwiZG9tU3R5bGVzIiwic3R5bGVTaGVldHMiLCJjb3VudENTUyIsImNhbGwiLCJocmVmIiwiaW5kZXhPZiIsInNldFRpbWVvdXQiLCJtaWNyb3NpdGVJZCIsIm1pY3Jvc2l0ZVBhdGgiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFlLE1BQU1BLGVBQU4sQ0FBc0I7QUFFakNDLE1BQUksR0FBRztBQUNIQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsU0FBS0MsVUFBTDtBQUVIOztBQUVEQSxZQUFVLEdB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RU8sSUFBSU8sZ0JBQWdCLEVBQXBCLEVBQXdCO0FBQzNCTyxZQUFVLENBQUNkLGdCQUFELEVBQW1CLEdBQW5CLENBQVY7QUFDSDtBQUdEOzs7OztBQUdBLElBQUlqRCxNQUFNLENBQUNzRCxJQUFYLEVBQWlCO0FBQ2JTLFlBQVUsQ0FBQ1YsZUFBRCxFQUFrQixHQUFsQixDQUFWO0FBQ0gsQ0FGRCxNQUVPO0FBQ0hoRCxVQUFRLENBQUNTLGdCQUFULENBQTBCLHFCQUExQixFQUFpRHVDLGVBQWpEO0FBQ0g7O0FBRUQsTUFBTUYsRUFBRSxHQUFHO0FBQ1BwRCxXQURPO0FBRVBHLFVBRk87QUFHUEMsVUFITztBQUlQNkQsYUFBVyxFQUFFOUIsWUFKTjtBQUtQK0IsZUFBYSxFQUFFM0IsY0FMUjtBQU1QM0MsTUFBSSxFQUFFQSxJQU5DO0FBT1B5RCxXQUFTLEVBQUUsS0FQSjtBQVFQckIsZUFBYSxFQUFFLE1BQU0sSUFSZDtBQVNQQyxrQkFBZ0IsRUFBRSxNQUFNO0FBVGpCLENBQVg7QUFZZW1CLGlFQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4uL21pY3Jvc2l0ZXMtY2J1LzAyLXBlcmZvcm1hbmNlLzA1LW1lbnUvcmVzb3VyY2VzL3NjcmlwdHMvbWFpbi5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVQZXJmb3JtYW5jZSB7XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIklOSVQgTUVOVVwiKTtcbiAgICAgICAgdGhpcy5tZW51TW9iaWxlKCk7XG5cbiAgICB9XG5cbiAgICBtZW51TW9iaWxlKCkge1xuXG4gICAgICAgIC8vRGV2aWNlIHdpZHRoIGFuZCBvcmllbnRhdGlvblxuICAgICAgICB2YXIgaXNEZXNrdG9wID0gd2luZG93LmlubmVyV2lkdGggPj0gOTcwO1xuICAgICAgICB2YXIgaXNUYWJsZXQgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDk3MCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSA2NDA7XG4gICAgICAgIHZhciBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNjQwO1xuXG5cbiAgICAgICAgLy9NYWluIG5hdiBjb250YWluZXJcbiAgICAgICAgdmFyIG1haW5OYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZmbXMtbWFpbi1oZWFkZXJfX21haW4tbmF2XCIpO1xuICAgICAgICAvL01haW4gbWVudSBpdGVtLlxuICAgICAgICB2YXIgbWFpbk5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi52Zm1zLW1haW4tbmF2LWl0ZW1cIik7XG4gICAgICAgIC8vIE1haW4gTmF2IGl0ZW0gY29udGFpbmVyXG4gICAgICAgIHZhciBtYWluTmF2Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi52Zm1zLW1haW4tbmF2LWNvbnRhaW5lcl9faXRlbVwiKTtcblxuICAgICAgICB2YXIgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmZtcy1tYWluLWl0ZW1fX3R5cGUnKTtcblxuICAgICAgICAvL1NlY3VuZGFyeSBuYXYgY29udGFpbmVyXG4gICAgICAgIHZhciBzZWNOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZmbXMtc2VjLW5hdlwiKTtcbiAgICAgICAgLy9TZWN1bmRhcnkgbmF2IGl0ZW1zXG4gICAgICAgIHZhciBzZWNOYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudmZtcy1zZWMtbmF2LWl0ZW1cIik7XG5cbiAgICAgICAgdmFyIG9wZW5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZmbXMtcmVjdXJzaXZlLW5hdl9fYnV0dG9uJyk7XG5cblxuXG4gICAgICAgIG9wZW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIC8vY2hhbmdlIGljb24gc2hhcGVcbiAgICAgICAgICAgIG9wZW5NZW51LmNsYXNzTGlzdC50b2dnbGUoXCJ2Zm1zLWlzT3BlblwiKTtcbiAgICAgICAgICAgIC8vU2hvdyBtYWluIG5hdiBjb250YWluZXIuIENoYW5nZSBkaXNwbGF5IG9mIHRoZSBlbGVtZW50LlxuICAgICAgICAgICAgbWFpbk5hdi5jbGFzc0xpc3QudG9nZ2xlKFwidmZtcy1zaG93TWFpbk5hdlwiKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1haW5OYXZCb3gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1haW5OYXZCb3hbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgLy9UYWJsZXQgYW5kIE1vYmlsZS5cbiAgICAgICAgaWYgKGlzVGFibGV0IHx8IGlzTW9iaWxlKSB7XG5cbiAgICAgICAgICAgIC8vIEFMIHBpbmNoYXIgZW4gZWwgbWVuw7ogZGUgaGFtYnVyZ3Vlc2EgXG4gICAgICAgICAgICBvcGVuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgICAgICAgICAvLyBUb2RhcyBsYXMgbmF2ZWdhY2lvbmVzIHNlY3VuZGFyaWFzIGVzdGFyw6FuIGVzY29uZGlkYXNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlY05hdi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzZWNOYXZbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vTG9zIGl0ZW1zIGRlIGxhIG5hdmVnYWNpw7NuIHByaW5jaXBhbCBubyBkZWJlbiBlc3RhciBlbiByb2pvIGFsIGRlc3BsZWdhcnNlIGVsIG1lbsO6XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYWluTmF2SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbk5hdkl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJ2Zm1zLWNoYW5nZUljb25cIik7XG4gICAgICAgICAgICAgICAgICAgIG1haW5OYXZJdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwidmZlcy1jb2xvdXJzLS12b2RhZm9uZS1yZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIG1haW5OYXZJdGVtc1tpXS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ2Zm1zLWJvcmRlckNvbG9yXCIpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9Mb3MgaXRlbXMgZGUgbGEgbmF2ZWdhY2nDs24gcHJpbmNpcGFsIG5vIGRlYmVuIGVzdGFyIGVuIHJvam8gYWwgZGVzcGxlZ2Fyc2UgZWwgbWVuw7pcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJ2ZmVzLWNvbG91cnMtLXZvZGFmb25lLXJlZFwiKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vRnVuY2lvbmVzIGNvcnJlc3BvbmRpZW50ZXMgYWwgZXZlbnRvIGNsaWNrIGRlIGxvcyBlbGVtZW50b3MgZGUgbGEgbmF2ZWdhY2nDs24gcHJpbmNpcGFsLlxuICAgICAgICAgICAgbWFpbk5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBUb2RhcyBsYXMgbmF2ZWdhY2lvbmVzIHNlY3VuZGFyaWFzIHRpZW5lbiBxdWUgZXN0YXIgZXNjb25kaWRhcyBtZW5vcyBsYSBxdWUgc2lndWUgYWwgcXVlIHNlIGVzdMOhIHBpbmNoYW5kby5cbiAgICAgICAgICAgICAgICAgICAgc2VjTmF2LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlY05hdi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY05hdltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vRWxlbWVudG8gZGUgbmF2ZWdhY2nDs24gc2VjdW5kYXJpYVxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VjID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9zZWMuY2xhc3NMaXN0LnRvZ2dsZShcInZmbXMtc2hvd05hdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2VjLnN0eWxlLmRpc3BsYXkgPSBzZWMuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJ2Jsb2NrJyA6ICdub25lJztcblxuICAgICAgICAgICAgICAgICAgICAvL0VsZW1lbnRvIGRlIG5hdmVnYWNpw7NuIHNlY3VuZGFyaWFcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlYyA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICBzZWMuY2xhc3NMaXN0LnRvZ2dsZShcInZmbXMtc2hvd1NlY05hdlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBMb3MgZWxlbWVudG9zIGRlIGxhIG5hdmVnYWNpw7NuIHNlY3VuZGFyaWEgZGViZW4gZGUgdGVuZXIgZWwgZm9uZG8gYmxhbmNvLiBcbiAgICAgICAgICAgICAgICAgICAgc2VjTmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VjTmF2SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNOYXZJdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwidmZlcy1jb2xvdXJzLWJnLWFsdW1pbml1bVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9FbCBpdGVtIGNhbWJpYSBkZSBjb2xvclxuXG4gICAgICAgICAgICAgICAgICAgIHZhciB0eXBlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnZmbXMtbWFpbi1pdGVtX190eXBlXCIpO1xuICAgICAgICAgICAgICAgICAgICB0eXBlLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZmVzLWNvbG91cnMtLXZvZGFmb25lLXJlZFwiKTtcblxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoXCJ2Zm1zLWNoYW5nZUljb25cIik7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZShcInZmZXMtY29sb3Vycy0tdm9kYWZvbmUtcmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcInZmbXMtYm9yZGVyQ29sb3JcIik7XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG5cblxuXG4gICAgICAgICAgICAvL1NlY3VuZGFyeSBOYXZpZ2F0aW9uIEl0ZW1zIEV2ZW50IGNsaWNrIGNoYW5nZSB0aGUgaXRlbSBiYWNrZ3JvdW5kLlxuICAgICAgICAgICAgc2VjTmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlY05hdkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NsaWNrIGluIGFub3RoZXIgaXRlbSByZW1vdmUgYmFja2dyb3VuZCBjb2xvci5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY05hdkl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJ2ZmVzLWNvbG91cnMtYmctYWx1bWluaXVtXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZShcInZmZXMtY29sb3Vycy1iZy1hbHVtaW5pdW1cIik7XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9XG5cbiAgICB9XG5cbn0iLCJpbXBvcnQgdG9vbHMgZnJvbSAnLi90b29scyc7XG5pbXBvcnQgTWVudVBlcmZvcm1hbmNlIGZyb20gJy4vX21lbnUtcGVyZm9ybWFuY2UnO1xuXG4vKlxuICogICBNw6l0b2RvIHF1ZSBzZSBkaXNwYXJhIGN1YW5kbyBlbCB3czJyLnZYLmNzc1xuICogICB5YSBzZSBoYSBjYXJnYWRvIHkgaGEgcGludGFkbyBsYSB3ZWJcbiAqICovXG50b29scy5vblN0eWxlc1JlYWR5ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2l0ZSB2aXN1YWxseSByZWFkeVwiKTtcbiAgICAvLyBETyBTT01FVEhJTkdcblxuXG59O1xuXG5cbi8qXG4gKiAgIE3DqXRvZG8gcXVlIHNlIGRpc3BhcmEgY3VhbmRvIGVsIHdzMnIudlguanNcbiAqICAgeWEgc2UgaGEgY2FyZ2FkbyB5IGVzdMOhIGRpcG9uaWJsZS5cbiAqICovXG50b29scy5vbkZyYW1ld29ya1JlYWR5ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2l0ZSBmdW5jdGlvbmFsaXR5IHJlYWR5XCIpO1xuICAgIC8vIERPIFNPTUVUSElOR1xuXG4gICAgdmFyIG1pTWVudSA9IG5ldyBNZW51UGVyZm9ybWFuY2UoKTtcbiAgICBtaU1lbnUuaW5pdCgpO1xuXG59OyIsIi8qXG4gKiBNaWNyb3NpdGVzIHRvb2xzIGpzOlxuICogRXN0ZSBmaWNoZXJvIGVzIHVuYSBtdWVzdHJhIGRlIHV0aWxpZGFkZXMgcHJvcGlhcyBwYXJhIGxvcyBtaWNyb3NpdGVzLlxuICogU2UgcHVlZGUgcGVyc29uYWxpemFyIGEgdHUgZ3VzdG9cbiAqXG4gKi9cblxuXG5jb25zdCBNSUNST1NJVEVfSUQgPSAnI211bHRpcGVzdGFuYS12Mic7XG5jb25zdCBjc3NNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tkYXRhLW1pY3JvY3NzXScpO1xuY29uc3QgTUlDUk9TSVRFX1NFTEVDVElPTiA9IGNsb3Nlc3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihNSUNST1NJVEVfSUQpLCAnW2RhdGEtcGF0aG1pY3Jvc2l0ZV0nKTtcbmNvbnN0IFBBVEhfTUlDUk9TSVRFID0gTUlDUk9TSVRFX1NFTEVDVElPTiA/IE1JQ1JPU0lURV9TRUxFQ1RJT04uZGF0YXNldC5wYXRobWljcm9zaXRlIDogJyc7XG5sZXQgd2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG5sZXQgaXNEZXNrdG9wID0gd2lkdGggPiA5Njk7XG5sZXQgaXNUYWJsZXQgPSB3aWR0aCA8PSA5NjkgJiYgd2lkdGggPj0gNzY4O1xubGV0IGlzTW9iaWxlID0gd2lkdGggPCA3NjggJiYgd2lkdGggPiAzMDA7XG5cblxuLypcbiogU2VhcmNoZXMgZm9yIHRoZSBwYXJlbnQgbm9kZSBjbG9zZXN0IHRvIHRoZSBlbGVtZW50LCB3aGljaCBjb21wbGllcyB3aXRoIHRoZSBzZWxlY3RvclxuKiBAcGFyYW0ge30gZWwgLSBEZXNjcmlwdGlvblxuKiBAcGFyYW0ge30gc2VsZWN0b3IgLSBEZXNjcmlwdGlvblxuKiBAcGFyYW0ge30gc3RvcFNlbGVjdG9yIC0gRGVzY3JpcHRpb25cbiogKi9cbmZ1bmN0aW9uIGNsb3Nlc3QoZWwsIHNlbGVjdG9yLCBzdG9wU2VsZWN0b3IpIHtcbiAgICBsZXQgcmV0dmFsID0gbnVsbDtcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR2YWwgPSBlbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKHN0b3BTZWxlY3RvciAmJiBlbC5tYXRjaGVzKHN0b3BTZWxlY3RvcikpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJldHZhbDtcbn1cblxuXG4vKlxuKiBSZW1vdmVzIHRoZSBzdHlsZSBhdHRyLCBvbmNlIHRoZSBzdHlsZXNoZWV0IGhhdmUgYmVlbiBsb2FkZWRcbiogcmV0dXJuIHVuZGVmaW5lZFxuKiAqL1xuZnVuY3Rpb24gX2ludGVybmFsQ1NTSW5pdCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmZlcy1tcy1jb250ZW50JykucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgZXguY3NzTG9hZGVkID0gdHJ1ZTtcbiAgICBleC5vblN0eWxlc1JlYWR5KCk7XG59XG5cblxuLypcbiogSW5pdGlhbGl6ZXMgZnVuY3Rpb25hbGl0eSBKUywgYW5kIGFkdmljZXMgd2hlbiBKUyBpcyBsb2FkZWQuXG4qIHJldHVybiB1bmRlZmluZWRcbiogKi9cbmZ1bmN0aW9uIF9pbnRlcm5hbEpTSW5pdCgpIHtcbiAgICB3aW5kb3cudmZlcy5fdXRpbHMuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmZlcy1tcy1jb250ZW50JykpO1xuICAgIGV4Lm9uRnJhbWV3b3JrUmVhZHkoKTtcbn1cblxuXG4vKlxuKiBDaGVjayBpZiBzdHlsZXNoZWV0IENTUyBpcyBsb2FkZWRcbiogQHJldHVybiB7Ym9vbGVhbn1cbiogKi9cbmZ1bmN0aW9uIGlzQ1NTTWljcm9Mb2FkZWQoKSB7XG4gICAgY29uc3QgZG9tU3R5bGVzID0gZG9jdW1lbnQuc3R5bGVTaGVldHM7XG4gICAgbGV0IGNvdW50Q1NTID0gMDtcbiAgICBbXS5mb3JFYWNoLmNhbGwoZG9tU3R5bGVzLCAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBocmVmID0gaXRlbS5ocmVmIHx8ICcnO1xuICAgICAgICBpZiAoaHJlZi5pbmRleE9mKCd3czJyJykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnV1MyUiBMb2FkZWQnKTtcbiAgICAgICAgICAgIGNvdW50Q1NTKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhyZWYuaW5kZXhPZignbWFpbicpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ01BSU4uQ1NTIExvYWRlZCcpO1xuICAgICAgICAgICAgY291bnRDU1MrK1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIChjb3VudENTUyA9PT0gMik7XG59XG5cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAvLyBETyBTT01FVEhJTkdcbn1cblxuLypcbiogbGlzdGVuIGV2ZW50LCBvbmNlIGhhdmUgYmVlbiBsb2FkZWQgdGhlIGZpbGVzIENTU1xuKiAqL1xuaWYgKCFpc0NTU01pY3JvTG9hZGVkKCkpIHtcbiAgICBjc3NNYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBfaW50ZXJuYWxDU1NJbml0KTtcbn0gZWxzZSBpZiAoaXNDU1NNaWNyb0xvYWRlZCgpKSB7XG4gICAgc2V0VGltZW91dChfaW50ZXJuYWxDU1NJbml0LCAxMDApO1xufVxuXG5cbi8qXG4qIGxpc3RlbiBldmVudCwgb25jZSBoYXZlIGJlZW4gbG9hZGVkIHRoZSBmaWxlcyBKU1xuKiAqL1xuaWYgKHdpbmRvdy52ZmVzKSB7XG4gICAgc2V0VGltZW91dChfaW50ZXJuYWxKU0luaXQsIDEwMClcbn0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmZlczpmcmFtZXdvcmtSZWFkeScsIF9pbnRlcm5hbEpTSW5pdCk7XG59XG5cbmNvbnN0IGV4ID0ge1xuICAgIGlzRGVza3RvcCxcbiAgICBpc1RhYmxldCxcbiAgICBpc01vYmlsZSxcbiAgICBtaWNyb3NpdGVJZDogTUlDUk9TSVRFX0lELFxuICAgIG1pY3Jvc2l0ZVBhdGg6IFBBVEhfTUlDUk9TSVRFLFxuICAgIGluaXQ6IGluaXQsXG4gICAgY3NzTG9hZGVkOiBmYWxzZSxcbiAgICBvblN0eWxlc1JlYWR5OiAoKSA9PiBudWxsLFxuICAgIG9uRnJhbWV3b3JrUmVhZHk6ICgpID0+IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==