/**
 * Vodafone Reboot Framework: Version 15.6.0. Generation Date: 2020-02-11T15:00:35.925Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../microsites-cbu/04-recursos/apilados/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../microsites-cbu/04-recursos/apilados/resources/scripts/_apilados.js":
/*!*****************************************************************************!*\
  !*** ../microsites-cbu/04-recursos/apilados/resources/scripts/_apilados.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
*   Apilados
*
* */
const accordion = document.querySelectorAll('[data-vfms-js="_accordion"]');
let i;
const STACK = {
  init: () => {
    for (i = 0; i < accordion.length; i++) {
      accordion[i].onclick = function () {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle('hide');
        this.parentElement.lastElementChild.classList.toggle('hide');
      };
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (STACK);

/***/ }),

/***/ "../microsites-cbu/04-recursos/apilados/resources/scripts/main.js":
/*!************************************************************************!*\
  !*** ../microsites-cbu/04-recursos/apilados/resources/scripts/main.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../microsites-cbu/04-recursos/apilados/resources/scripts/tools.js");
/* harmony import */ var _apilados__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_apilados */ "../microsites-cbu/04-recursos/apilados/resources/scripts/_apilados.js");



function throttle(func, limit) {
  let lastFunc, lastRan;
  return function () {
    const ctx = this;
    const args = arguments;

    if (!lastRan) {
      func.apply(ctx, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(ctx, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
/* function rateStickyController(rates) {
     [...rates].forEach(rate => {

         const children = rate.firstElementChild.children;
         if(parseInt(rate.style.top) < rate.getBoundingClientRect().y){
             children[0].classList.remove('active');
             children[1].classList.add('hide');
             children[2].classList.remove('hide');
         } else {
             children[0].classList.add('active');
             children[1].classList.remove('hide');
             children[2].classList.add('hide');
         }

     })

 }*/

/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */


window.addEventListener('load', function () {});

_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onStylesReady = () => {
  console.log("Site visually ready"); // window.matchMedia('(min-width: 970px)').matches ? document.querySelector('.js-ticket-dropdown').click() : null;
  // Sticky only mobile
  // window.matchMedia('(max-width: 970px)').matches ? stickyStart() : null;
  // function stickyStart(){

  /*const stickyRate = document.querySelectorAll('[data-vfms-js="_stickyRate"]');
  [...stickyRate].forEach((rate, index) => rate.style.top = `${(50 * (index + 1)) + (index * 5)}px`)
  document.addEventListener('scroll', throttle(() => rateStickyController(stickyRate), 100 ));*/
  // const rebootFile = document.querySelector('script[src="js/ws2r.v15.js"]');

  const scripts = document.querySelectorAll('script');
  [].forEach.call(scripts, item => {
    if (item.src.indexOf('ws2r.v15.js') > 0) {
      console.log('Lanzando Sticky');
      sticky();
    }
  });
}; //};

/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */


_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onFrameworkReady = () => {
  console.log("Site functionality ready"); // DO SOMETHING

  _apilados__WEBPACK_IMPORTED_MODULE_1__["default"].init();
};

function sticky() {
  const container = document.querySelector('[data-vfms-js="_rateContainer"]');
  const heightMenu = document.querySelector('nav[role="navigation"]').getBoundingClientRect().height;
  const rateBox = document.querySelectorAll('[data-vfms-js="_stickyRate"]');
  const stickyHeightForce = 84; //const heightMenu = document.querySelector('[data-js="mainmenu"]').clientHeight;

  const distBoxTopList = [];
  const boxStickyList = [];
  const calculateHeightBox = []; // Iteracion sobre las cajas para recuperar los valores que necesito

  [...rateBox].map((item, idx) => {
    // Listado de elemento a mostrar en el sticky
    boxStickyList.push(item.querySelector('.sticky')); // cualculo la propiedad top para el fixed de cada sticky que tengo que mostrar, sumandole como valor inicial el menu que ya se ve. Si no hubiera menu en sticky este valor debería de ser 0 inicialmente.

    calculateHeightBox.push( // (idx - 1 >= 0) ? rateBox[idx - 1].querySelector('.sticky').scrollHeight + calculateHeightBox[idx - 1] : heightMenu
    idx - 1 >= 0 ? stickyHeightForce + calculateHeightBox[idx - 1] : heightMenu); // Array con la distancia desde el top de cada caja al border superior

    distBoxTopList.push(item.getBoundingClientRect().y - calculateHeightBox[idx]);
  });
  distBoxTopList.unshift(0);
  distBoxTopList.pop(); // debugger;

  function stickyController() {
    [...distBoxTopList].map((distTopBox, idx) => {
      const isContainClassAccess = boxStickyList[idx].classList.contains('access');
      const positiveValueY = -container.getBoundingClientRect().y;

      if (isContainClassAccess && distTopBox < positiveValueY) {
        boxStickyList[idx].classList.remove('access');
        boxStickyList[idx].style.top = calculateHeightBox[idx] + 'px';
      } else if (!isContainClassAccess && distTopBox - heightMenu > positiveValueY) {
        boxStickyList[idx].classList.add('access');
      }
    });
  }

  document.addEventListener('scroll', throttle(() => stickyController(), 100));
}

/***/ }),

/***/ "../microsites-cbu/04-recursos/apilados/resources/scripts/tools.js":
/*!*************************************************************************!*\
  !*** ../microsites-cbu/04-recursos/apilados/resources/scripts/tools.js ***!
  \*************************************************************************/
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
const MICROSITE_ID = '#home';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL21pY3Jvc2l0ZXMtY2J1LzA0LXJlY3Vyc29zL2FwaWxhZG9zL3Jlc291cmNlcy9zY3JpcHRzL19hcGlsYWRvcy5qcyIsIndlYnBhY2s6Ly8vLi4vbWljcm9zaXRlcy1jYnUvMDQtcmVjdXJzb3MvYXBpbGFkb3MvcmVzb3VyY2VzL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vbWljcm9zaXRlcy1jYnUvMDQtcmVjdXJzb3MvYXBpbGFkb3MvcmVzb3VyY2VzL3NjcmlwdHMvdG9vbHMuanMiXSwibmFtZXMiOlsiYWNjb3JkaW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsIlNUQUNLIiwiaW5pdCIsImxlbmd0aCIsIm9uY2xpY2siLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJwYXJlbnRFbGVtZW50IiwibGFzdEVsZW1lbnRDaGlsZCIsInRocm90dGxlIiwiZnVuYyIsImxpbWl0IiwibGFzdEZ1bmMiLCJsYXN0UmFuIiwiY3R4IiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiRGF0ZSIsIm5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwidG9vbHMiLCJvblN0eWxlc1JlYWR5IiwiY29uc29sZSIsImxvZyIsInNjcmlwdHMiLCJmb3JFYWNoIiwiY2FsbCIsIml0ZW0iLCJzcmMiLCJpbmRleE9mIiwic3RpY2t5Iiwib25GcmFtZXdvcmtSZWFkeSIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJoZWlnaHRNZW51IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwicmF0ZUJveCIsInN0aWNreUhlaWdodEZvcmNlIiwiZGlzdEJveFRvcExpc3QiLCJib3hTdGlja3lMaXN0IiwiY2FsY3VsYXRlSGVpZ2h0Qm94IiwibWFwIiwiaWR4IiwicHVzaCIsInkiLCJ1bnNoaWZ0IiwicG9wIiwic3RpY2t5Q29udHJvbGxlciIsImRpc3RUb3BCb3giLCJpc0NvbnRhaW5DbGFzc0FjY2VzcyIsImNvbnRhaW5zIiwicG9zaXRpdmVWYWx1ZVkiLCJyZW1vdmUiLCJzdHlsZSIsInRvcCIsImFkZCIsIk1JQ1JPU0lURV9JRCIsImNzc01haW4iLCJNSUNST1NJVEVfU0VMRUNUSU9OIiwiY2xvc2VzdCIsIlBBVEhfTUlDUk9TSVRFIiwiZGF0YXNldCIsInBhdGhtaWNyb3NpdGUiLCJ3aWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaXNEZXNrdG9wIiwiaXNUYWJsZXQiLCJpc01vYmlsZSIsImVsIiwic2VsZWN0b3IiLCJzdG9wU2VsZWN0b3IiLCJyZXR2YWwiLCJtYXRjaGVzIiwiX2ludGVybmFsQ1NTSW5pdCIsImV4IiwiY3NzTG9hZGVkIiwicmVtb3ZlQXR0cmlidXRlIiwiX2ludGVybmFsSlNJbml0IiwidmZlcyIsIl91dGlscyIsImlzQ1NTTWljcm9Mb2FkZWQiLCJkb21TdHlsZXMiLCJzdHlsZVNoZWV0cyIsImNvdW50Q1NTIiwiaHJlZiIsIm1pY3Jvc2l0ZUlkIiwibWljcm9zaXRlUGF0aCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7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LENBQUM4RCxlQUFELEVBQWtCLEdBQWxCLENBQVY7QUFDSCxDQUZELE1BRU87QUFDSHRGLFVBQVEsQ0FBQzBCLGdCQUFULENBQTBCLHFCQUExQixFQUFpRDRELGVBQWpEO0FBQ0g7O0FBRUQsTUFBTUgsRUFBRSxHQUFHO0FBQ1BULFdBRE87QUFFUEMsVUFGTztBQUdQQyxVQUhPO0FBSVBrQixhQUFXLEVBQUU5QixZQUpOO0FBS1ArQixlQUFhLEVBQUUzQixjQUxSO0FBTVBoRSxNQUFJLEVBQUVBLElBTkM7QUFPUGdGLFdBQVMsRUFBRSxLQVBKO0FBUVB4RCxlQUFhLEVBQUUsTUFBTSxJQVJkO0FBU1BVLGtCQUFnQixFQUFFLE1BQU07QUFUakIsQ0FBWDtBQVllNkMsaUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi4vbWljcm9zaXRlcy1jYnUvMDQtcmVjdXJzb3MvYXBpbGFkb3MvcmVzb3VyY2VzL3NjcmlwdHMvbWFpbi5qc1wiKTtcbiIsIi8qXG4qICAgQXBpbGFkb3NcbipcbiogKi9cbmNvbnN0IGFjY29yZGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZmbXMtanM9XCJfYWNjb3JkaW9uXCJdJyk7XG5sZXQgaTtcblxuY29uc3QgU1RBQ0sgPSB7XG5cbiAgICBpbml0OiAoKSA9PiB7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFjY29yZGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYWNjb3JkaW9uW2ldLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgU1RBQ0s7XG5cblxuIiwiaW1wb3J0IHRvb2xzIGZyb20gJy4vdG9vbHMnO1xuaW1wb3J0IFNUQUNLIGZyb20gXCIuL19hcGlsYWRvc1wiO1xuXG5cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIGxpbWl0KSB7XG4gICAgbGV0IGxhc3RGdW5jLCBsYXN0UmFuO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcztcbiAgICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICBpZiAoIWxhc3RSYW4pIHtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoY3R4LCBhcmdzKTtcbiAgICAgICAgICAgIGxhc3RSYW4gPSBEYXRlLm5vdygpO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQobGFzdEZ1bmMpO1xuICAgICAgICAgICAgbGFzdEZ1bmMgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoKERhdGUubm93KCkgLSBsYXN0UmFuKSA+PSBsaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KGN0eCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RSYW4gPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGxpbWl0IC0gKERhdGUubm93KCkgLSBsYXN0UmFuKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qIGZ1bmN0aW9uIHJhdGVTdGlja3lDb250cm9sbGVyKHJhdGVzKSB7XG4gICAgIFsuLi5yYXRlc10uZm9yRWFjaChyYXRlID0+IHtcblxuICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSByYXRlLmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuO1xuICAgICAgICAgaWYocGFyc2VJbnQocmF0ZS5zdHlsZS50b3ApIDwgcmF0ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55KXtcbiAgICAgICAgICAgICBjaGlsZHJlblswXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICBjaGlsZHJlblsxXS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgY2hpbGRyZW5bMl0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICBjaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICBjaGlsZHJlblsxXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICAgY2hpbGRyZW5bMl0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgfVxuXG4gICAgIH0pXG5cbiB9Ki9cblxuLypcbiogICBNw6l0b2RvIHF1ZSBzZSBkaXNwYXJhIGN1YW5kbyBlbCB3czJyLnZYLmNzc1xuKiAgIHlhIHNlIGhhIGNhcmdhZG8geSBoYSBwaW50YWRvIGxhIHdlYlxuKiAqL1xuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xufSk7XG5cblxudG9vbHMub25TdHlsZXNSZWFkeSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNpdGUgdmlzdWFsbHkgcmVhZHlcIik7XG5cbiAgICAvLyB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogOTcwcHgpJykubWF0Y2hlcyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10aWNrZXQtZHJvcGRvd24nKS5jbGljaygpIDogbnVsbDtcblxuXG4gICAgLy8gU3RpY2t5IG9ubHkgbW9iaWxlXG5cbiAgICAvLyB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTcwcHgpJykubWF0Y2hlcyA/IHN0aWNreVN0YXJ0KCkgOiBudWxsO1xuICAgIC8vIGZ1bmN0aW9uIHN0aWNreVN0YXJ0KCl7XG5cbiAgICAvKmNvbnN0IHN0aWNreVJhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12Zm1zLWpzPVwiX3N0aWNreVJhdGVcIl0nKTtcbiAgICBbLi4uc3RpY2t5UmF0ZV0uZm9yRWFjaCgocmF0ZSwgaW5kZXgpID0+IHJhdGUuc3R5bGUudG9wID0gYCR7KDUwICogKGluZGV4ICsgMSkpICsgKGluZGV4ICogNSl9cHhgKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRocm90dGxlKCgpID0+IHJhdGVTdGlja3lDb250cm9sbGVyKHN0aWNreVJhdGUpLCAxMDAgKSk7Ki9cblxuICAgIC8vIGNvbnN0IHJlYm9vdEZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjPVwianMvd3Myci52MTUuanNcIl0nKTtcbiAgICBjb25zdCBzY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0Jyk7XG5cbiAgICBbXS5mb3JFYWNoLmNhbGwoc2NyaXB0cywgaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnNyYy5pbmRleE9mKCd3czJyLnYxNS5qcycpID4gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0xhbnphbmRvIFN0aWNreScpO1xuICAgICAgICAgICAgc3RpY2t5KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbi8vfTtcblxuXG4vKlxuKiAgIE3DqXRvZG8gcXVlIHNlIGRpc3BhcmEgY3VhbmRvIGVsIHdzMnIudlguanNcbiogICB5YSBzZSBoYSBjYXJnYWRvIHkgZXN0w6EgZGlwb25pYmxlLlxuKiAqL1xuXG50b29scy5vbkZyYW1ld29ya1JlYWR5ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2l0ZSBmdW5jdGlvbmFsaXR5IHJlYWR5XCIpO1xuICAgIC8vIERPIFNPTUVUSElOR1xuXG4gICAgU1RBQ0suaW5pdCgpO1xuXG59O1xuXG5mdW5jdGlvbiBzdGlja3koKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmZtcy1qcz1cIl9yYXRlQ29udGFpbmVyXCJdJyk7XG4gICAgY29uc3QgaGVpZ2h0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdltyb2xlPVwibmF2aWdhdGlvblwiXScpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICBjb25zdCByYXRlQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmZtcy1qcz1cIl9zdGlja3lSYXRlXCJdJyk7XG4gICAgY29uc3Qgc3RpY2t5SGVpZ2h0Rm9yY2UgPSA4NDtcbiAgICAvL2NvbnN0IGhlaWdodE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcz1cIm1haW5tZW51XCJdJykuY2xpZW50SGVpZ2h0O1xuXG4gICAgY29uc3QgZGlzdEJveFRvcExpc3QgPSBbXTtcbiAgICBjb25zdCBib3hTdGlja3lMaXN0ID0gW107XG4gICAgY29uc3QgY2FsY3VsYXRlSGVpZ2h0Qm94ID0gW107XG5cbiAgICAvLyBJdGVyYWNpb24gc29icmUgbGFzIGNhamFzIHBhcmEgcmVjdXBlcmFyIGxvcyB2YWxvcmVzIHF1ZSBuZWNlc2l0b1xuICAgIFsuLi5yYXRlQm94XS5tYXAoKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgICAvLyBMaXN0YWRvIGRlIGVsZW1lbnRvIGEgbW9zdHJhciBlbiBlbCBzdGlja3lcbiAgICAgICAgYm94U3RpY2t5TGlzdC5wdXNoKGl0ZW0ucXVlcnlTZWxlY3RvcignLnN0aWNreScpKTtcbiAgICAgICAgLy8gY3VhbGN1bG8gbGEgcHJvcGllZGFkIHRvcCBwYXJhIGVsIGZpeGVkIGRlIGNhZGEgc3RpY2t5IHF1ZSB0ZW5nbyBxdWUgbW9zdHJhciwgc3VtYW5kb2xlIGNvbW8gdmFsb3IgaW5pY2lhbCBlbCBtZW51IHF1ZSB5YSBzZSB2ZS4gU2kgbm8gaHViaWVyYSBtZW51IGVuIHN0aWNreSBlc3RlIHZhbG9yIGRlYmVyw61hIGRlIHNlciAwIGluaWNpYWxtZW50ZS5cbiAgICAgICAgY2FsY3VsYXRlSGVpZ2h0Qm94LnB1c2goXG4gICAgICAgICAgICAvLyAoaWR4IC0gMSA+PSAwKSA/IHJhdGVCb3hbaWR4IC0gMV0ucXVlcnlTZWxlY3RvcignLnN0aWNreScpLnNjcm9sbEhlaWdodCArIGNhbGN1bGF0ZUhlaWdodEJveFtpZHggLSAxXSA6IGhlaWdodE1lbnVcbiAgICAgICAgICAgIChpZHggLSAxID49IDApID8gc3RpY2t5SGVpZ2h0Rm9yY2UgKyBjYWxjdWxhdGVIZWlnaHRCb3hbaWR4IC0gMV0gOiBoZWlnaHRNZW51XG4gICAgICAgICk7XG4gICAgICAgIC8vIEFycmF5IGNvbiBsYSBkaXN0YW5jaWEgZGVzZGUgZWwgdG9wIGRlIGNhZGEgY2FqYSBhbCBib3JkZXIgc3VwZXJpb3JcbiAgICAgICAgZGlzdEJveFRvcExpc3QucHVzaChpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgLSBjYWxjdWxhdGVIZWlnaHRCb3hbaWR4XSk7XG4gICAgfSk7XG4gICAgZGlzdEJveFRvcExpc3QudW5zaGlmdCgwKTtcbiAgICBkaXN0Qm94VG9wTGlzdC5wb3AoKTtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICBmdW5jdGlvbiBzdGlja3lDb250cm9sbGVyKCkge1xuICAgICAgICBbLi4uZGlzdEJveFRvcExpc3RdLm1hcCgoZGlzdFRvcEJveCwgaWR4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NvbnRhaW5DbGFzc0FjY2VzcyA9IGJveFN0aWNreUxpc3RbaWR4XS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY2VzcycpO1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpdmVWYWx1ZVkgPSAtY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XG4gICAgICAgICAgICBpZiAoaXNDb250YWluQ2xhc3NBY2Nlc3MgJiYgZGlzdFRvcEJveCA8IHBvc2l0aXZlVmFsdWVZKSB7XG4gICAgICAgICAgICAgICAgYm94U3RpY2t5TGlzdFtpZHhdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY2VzcycpO1xuICAgICAgICAgICAgICAgIGJveFN0aWNreUxpc3RbaWR4XS5zdHlsZS50b3AgPSBjYWxjdWxhdGVIZWlnaHRCb3hbaWR4XSArICdweCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpc0NvbnRhaW5DbGFzc0FjY2VzcyAmJiBkaXN0VG9wQm94IC0gaGVpZ2h0TWVudSA+IHBvc2l0aXZlVmFsdWVZKSB7XG4gICAgICAgICAgICAgICAgYm94U3RpY2t5TGlzdFtpZHhdLmNsYXNzTGlzdC5hZGQoJ2FjY2VzcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aHJvdHRsZSgoKT0+IHN0aWNreUNvbnRyb2xsZXIoKSwgMTAwICkpO1xuXG59XG4iLCIvKlxuICogTWljcm9zaXRlcyB0b29scyBqczpcbiAqIEVzdGUgZmljaGVybyBlcyB1bmEgbXVlc3RyYSBkZSB1dGlsaWRhZGVzIHByb3BpYXMgcGFyYSBsb3MgbWljcm9zaXRlcy5cbiAqIFNlIHB1ZWRlIHBlcnNvbmFsaXphciBhIHR1IGd1c3RvXG4gKlxuICovXG5cblxuY29uc3QgTUlDUk9TSVRFX0lEID0gJyNob21lJztcbmNvbnN0IGNzc01haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW2RhdGEtbWljcm9jc3NdJyk7XG5jb25zdCBNSUNST1NJVEVfU0VMRUNUSU9OID0gY2xvc2VzdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKE1JQ1JPU0lURV9JRCksICdbZGF0YS1wYXRobWljcm9zaXRlXScpO1xuY29uc3QgUEFUSF9NSUNST1NJVEUgPSBNSUNST1NJVEVfU0VMRUNUSU9OID8gTUlDUk9TSVRFX1NFTEVDVElPTi5kYXRhc2V0LnBhdGhtaWNyb3NpdGUgOiAnJztcbmxldCB3aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbmxldCBpc0Rlc2t0b3AgPSB3aWR0aCA+IDk2OTtcbmxldCBpc1RhYmxldCA9IHdpZHRoIDw9IDk2OSAmJiB3aWR0aCA+PSA3Njg7XG5sZXQgaXNNb2JpbGUgPSB3aWR0aCA8IDc2OCAmJiB3aWR0aCA+IDMwMDtcblxuXG4vKlxuICogU2VhcmNoZXMgZm9yIHRoZSBwYXJlbnQgbm9kZSBjbG9zZXN0IHRvIHRoZSBlbGVtZW50LCB3aGljaCBjb21wbGllcyB3aXRoIHRoZSBzZWxlY3RvclxuICogQHBhcmFtIHt9IGVsIC0gRGVzY3JpcHRpb25cbiAqIEBwYXJhbSB7fSBzZWxlY3RvciAtIERlc2NyaXB0aW9uXG4gKiBAcGFyYW0ge30gc3RvcFNlbGVjdG9yIC0gRGVzY3JpcHRpb25cbiAqICovXG5mdW5jdGlvbiBjbG9zZXN0KGVsLCBzZWxlY3Rvciwgc3RvcFNlbGVjdG9yKSB7XG4gICAgbGV0IHJldHZhbCA9IG51bGw7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dmFsID0gZWw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChzdG9wU2VsZWN0b3IgJiYgZWwubWF0Y2hlcyhzdG9wU2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXR2YWw7XG59XG5cblxuLypcbiAqIFJlbW92ZXMgdGhlIHN0eWxlIGF0dHIsIG9uY2UgdGhlIHN0eWxlc2hlZXQgaGF2ZSBiZWVuIGxvYWRlZFxuICogcmV0dXJuIHVuZGVmaW5lZFxuICogKi9cbmZ1bmN0aW9uIF9pbnRlcm5hbENTU0luaXQoKSB7XG4gICAgaWYoIWV4LmNzc0xvYWRlZCl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoTUlDUk9TSVRFX0lEKS5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICAgICAgZXguY3NzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgZXgub25TdHlsZXNSZWFkeSgpO1xuICAgIH1cbn1cblxuXG4vKlxuICogSW5pdGlhbGl6ZXMgZnVuY3Rpb25hbGl0eSBKUywgYW5kIGFkdmljZXMgd2hlbiBKUyBpcyBsb2FkZWQuXG4gKiByZXR1cm4gdW5kZWZpbmVkXG4gKiAqL1xuZnVuY3Rpb24gX2ludGVybmFsSlNJbml0KCkge1xuICAgIHdpbmRvdy52ZmVzLl91dGlscy5pbml0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoTUlDUk9TSVRFX0lEKSk7XG4gICAgZXgub25GcmFtZXdvcmtSZWFkeSgpO1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBzdHlsZXNoZWV0IENTUyBpcyBsb2FkZWRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAqL1xuZnVuY3Rpb24gaXNDU1NNaWNyb0xvYWRlZCgpIHtcbiAgICBjb25zdCBkb21TdHlsZXMgPSBkb2N1bWVudC5zdHlsZVNoZWV0cztcbiAgICBsZXQgY291bnRDU1MgPSAwO1xuICAgIFtdLmZvckVhY2guY2FsbChkb21TdHlsZXMsIChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGhyZWYgPSBpdGVtLmhyZWYgfHwgJyc7XG4gICAgICAgIGlmIChocmVmLmluZGV4T2YoUEFUSF9NSUNST1NJVEUgKyAnY3NzL3dzMnInKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXUzJSQ1NTIExvYWRlZCcpO1xuICAgICAgICAgICAgY291bnRDU1MrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaHJlZi5pbmRleE9mKFBBVEhfTUlDUk9TSVRFICsgJ2Nzcy9zdHlsZXMuY3NzJykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTUlDUk9DU1MgTG9hZGVkJyk7XG4gICAgICAgICAgICBjb3VudENTUysrXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gKGNvdW50Q1NTID09PSAyKTtcbn1cblxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIC8vIERPIFNPTUVUSElOR1xufVxuXG4vKlxuICogbGlzdGVuIGV2ZW50LCBvbmNlIGhhdmUgYmVlbiBsb2FkZWQgdGhlIGZpbGVzIENTU1xuICogKi9cbmlmICghaXNDU1NNaWNyb0xvYWRlZCgpKSB7XG4gICAgY3NzTWFpbi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgX2ludGVybmFsQ1NTSW5pdCk7XG4gICAgLy8gTWFrZSBzdXJlIG1pY3Jvc2l0ZSBnZXRzIHZpc2libGUgYWZ0ZXIgMyBzZWNzXG4gICAgc2V0VGltZW91dChfaW50ZXJuYWxDU1NJbml0LCAzMDAwKTtcbn0gZWxzZSBpZiAoaXNDU1NNaWNyb0xvYWRlZCgpKSB7XG4gICAgc2V0VGltZW91dChfaW50ZXJuYWxDU1NJbml0LCAxMDApO1xufVxuXG5cbi8qXG4gKiBsaXN0ZW4gZXZlbnQsIG9uY2UgaGF2ZSBiZWVuIGxvYWRlZCB0aGUgZmlsZXMgSlNcbiAqICovXG5pZiAod2luZG93LnZmZXMpIHtcbiAgICBzZXRUaW1lb3V0KF9pbnRlcm5hbEpTSW5pdCwgMTAwKVxufSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2ZmVzOmZyYW1ld29ya1JlYWR5JywgX2ludGVybmFsSlNJbml0KTtcbn1cblxuY29uc3QgZXggPSB7XG4gICAgaXNEZXNrdG9wLFxuICAgIGlzVGFibGV0LFxuICAgIGlzTW9iaWxlLFxuICAgIG1pY3Jvc2l0ZUlkOiBNSUNST1NJVEVfSUQsXG4gICAgbWljcm9zaXRlUGF0aDogUEFUSF9NSUNST1NJVEUsXG4gICAgaW5pdDogaW5pdCxcbiAgICBjc3NMb2FkZWQ6IGZhbHNlLFxuICAgIG9uU3R5bGVzUmVhZHk6ICgpID0+IG51bGwsXG4gICAgb25GcmFtZXdvcmtSZWFkeTogKCkgPT4gbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9