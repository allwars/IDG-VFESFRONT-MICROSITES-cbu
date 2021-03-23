/**
 * Vodafone Reboot Framework: Version 2.2.2. Generation Date: 2020-05-25T12:00:37.442Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/base-sales-oferta21-sin-contador/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/base-sales-oferta21-sin-contador/resources/scripts/countdown.js":
/*!***********************************************************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/base-sales-oferta21-sin-contador/resources/scripts/countdown.js ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

function Countdown(opt) {
  "use strict";

  var options = {
    cont: null,
    endDate: {
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0
    },
    endCallback: null,
    outputFormat: 'year|week|day|hour|minute|second',
    outputTranslation: {
      year: 'Roky',
      week: 'Týdny',
      day: 'Dny',
      hour: 'Hodin',
      minute: 'Minut',
      second: 'Vteřin'
    }
  },
      lastTick = null,
      intervalsBySize = ['year', 'week', 'day', 'hour', 'minute', 'second'],
      TIMESTAMP_SECOND = 1000,
      TIMESTAMP_MINUTE = 60 * TIMESTAMP_SECOND,
      TIMESTAMP_HOUR = 60 * TIMESTAMP_MINUTE,
      TIMESTAMP_DAY = 24 * TIMESTAMP_HOUR,
      TIMESTAMP_WEEK = 7 * TIMESTAMP_DAY,
      TIMESTAMP_YEAR = 365 * TIMESTAMP_DAY,
      elementClassPrefix = 'countDown_',
      interval = null,
      digitConts = {};
  loadOptions(options, opt);
  /**
   * @param date
   * @returns {Date}
   */

  function getDate(date) {
    if ((typeof date === 'undefined' ? 'undefined' : _typeof(date)) === 'object') {
      if (date instanceof Date) {
        return date;
      } else {
        var expectedValues = {
          day: 0,
          month: 0,
          year: 0,
          hour: 0,
          minute: 0,
          second: 0
        };

        for (var i in expectedValues) {
          if (expectedValues.hasOwnProperty(i) && date.hasOwnProperty(i)) {
            expectedValues[i] = date[i];
          }
        }

        return new Date(expectedValues.year, expectedValues.month > 0 ? expectedValues.month - 1 : expectedValues.month, expectedValues.day, expectedValues.hour, expectedValues.minute, expectedValues.second);
      }
    } else if (typeof date === 'number' || typeof date === 'string') {
      return new Date(date);
    } else {
      return new Date();
    }
  }
  /**
   * @param {Date} dateObj
   * @return {object}
   */


  function prepareTimeByOutputFormat(dateObj) {
    var usedIntervals = undefined,
        output = {},
        timeDiff = undefined;
    usedIntervals = intervalsBySize.filter(function (item) {
      return options.outputFormat.split('|').indexOf(item) !== -1;
    });
    timeDiff = dateObj.getTime() - Date.now();
    usedIntervals.forEach(function (item) {
      var value = undefined;

      if (timeDiff > 0) {
        switch (item) {
          case 'year':
            value = Math.trunc(timeDiff / TIMESTAMP_YEAR);
            timeDiff -= value * TIMESTAMP_YEAR;
            break;

          case 'week':
            value = Math.trunc(timeDiff / TIMESTAMP_WEEK);
            timeDiff -= value * TIMESTAMP_WEEK;
            break;

          case 'day':
            value = Math.trunc(timeDiff / TIMESTAMP_DAY);
            timeDiff -= value * TIMESTAMP_DAY;
            break;

          case 'hour':
            value = Math.trunc(timeDiff / TIMESTAMP_HOUR);
            timeDiff -= value * TIMESTAMP_HOUR;
            break;

          case 'minute':
            value = Math.trunc(timeDiff / TIMESTAMP_MINUTE);
            timeDiff -= value * TIMESTAMP_MINUTE;
            break;

          case 'second':
            value = Math.trunc(timeDiff / TIMESTAMP_SECOND);
            timeDiff -= value * TIMESTAMP_SECOND;
            break;
        }
      } else {
        value = '00';
      }

      output[item] = (('' + value).length < 2 ? '0' + value : '' + value).split('');
    });
    return output;
  }

  function fixCompatibility() {
    Math.trunc = Math.trunc || function (x) {
      if (isNaN(x)) {
        return NaN;
      }

      if (x > 0) {
        return Math.floor(x);
      }

      return Math.ceil(x);
    };
  }

  function writeData(data) {
    var code = '<div class="' + elementClassPrefix + 'cont">',
        intervalName = undefined;

    for (intervalName in data) {
      if (data.hasOwnProperty(intervalName)) {
        var element = '<div class="' + elementClassPrefix + '_interval_basic_cont">\n                                       <div class="' + getIntervalContCommonClassName() + ' ' + getIntervalContClassName(intervalName) + '">',
            intervalDescription = '<div class="' + elementClassPrefix + 'interval_basic_cont_description">\n                                                   ' + options.outputTranslation[intervalName] + '\n                                               </div>';
        data[intervalName].forEach(function (digit, index) {
          element += '<div class="' + getDigitContCommonClassName() + ' ' + getDigitContClassName(index) + '">\n                                        ' + getDigitElementString(digit, 0) + '\n                                    </div>';
        });
        code += element + '</div>' + intervalDescription + '</div>';
      }
    }

    options.cont.innerHTML = code + '</div>';
    lastTick = data;
  }

  function getDigitElementString(newDigit, lastDigit) {
    return '<div class="' + elementClassPrefix + 'digit_last_placeholder">\n                        <div class="' + elementClassPrefix + 'digit_last_placeholder_inner">\n                            ' + lastDigit + '\n                        </div>\n                    </div>\n                    <div class="' + elementClassPrefix + 'digit_new_placeholder">' + newDigit + '</div>\n                    <div class="' + elementClassPrefix + 'digit_last_rotate">' + lastDigit + '</div>\n                    <div class="' + elementClassPrefix + 'digit_new_rotate">\n                        <div class="' + elementClassPrefix + 'digit_new_rotated">\n                            <div class="' + elementClassPrefix + 'digit_new_rotated_inner">\n                                ' + newDigit + '\n                            </div>\n                        </div>\n                    </div>';
  }

  function updateView(data) {
    var _loop = function _loop(intervalName) {
      if (data.hasOwnProperty(intervalName)) {
        data[intervalName].forEach(function (digit, index) {
          if (lastTick !== null && lastTick[intervalName][index] !== data[intervalName][index]) {
            getDigitCont(intervalName, index).innerHTML = getDigitElementString(data[intervalName][index], lastTick[intervalName][index]);
          }
        });
      }
    };

    for (var intervalName in data) {
      _loop(intervalName);
    }

    lastTick = data;
  }

  function getDigitCont(intervalName, index) {
    if (!digitConts[intervalName + '_' + index]) {
      digitConts[intervalName + '_' + index] = document.querySelector('.' + getIntervalContClassName(intervalName) + ' .' + getDigitContClassName(index));
    }

    return digitConts[intervalName + '_' + index];
  }

  function getIntervalContClassName(intervalName) {
    return elementClassPrefix + 'interval_cont_' + intervalName;
  }

  function getIntervalContCommonClassName() {
    return elementClassPrefix + 'interval_cont';
  }

  function getDigitContClassName(index) {
    return elementClassPrefix + 'digit_cont_' + index;
  }

  function getDigitContCommonClassName() {
    return elementClassPrefix + 'digit_cont';
  }

  function loadOptions(_options, _opt) {
    for (var i in _options) {
      if (_options.hasOwnProperty(i) && _opt.hasOwnProperty(i)) {
        if (_options[i] !== null && _typeof(_options[i]) === 'object' && _typeof(_opt[i]) === 'object') {
          loadOptions(_options[i], _opt[i]);
        } else {
          _options[i] = _opt[i];
        }
      }
    }
  }

  function start() {
    var endDate = undefined,
        endDateData = undefined;
    fixCompatibility();
    endDate = getDate(options.endDate);
    endDateData = prepareTimeByOutputFormat(endDate);
    writeData(endDateData);
    lastTick = endDateData;

    if (endDate.getTime() <= Date.now()) {
      if (typeof options.endCallback === 'function') {
        options.endCallback();
      }
    } else {
      interval = setInterval(function () {
        updateView(prepareTimeByOutputFormat(endDate));
      }, TIMESTAMP_SECOND);
    }
  }

  function stop() {
    if (interval !== null) {
      clearInterval(interval);
    }
  }

  return {
    start: start,
    stop: stop
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ }),

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/base-sales-oferta21-sin-contador/resources/scripts/main.js":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/base-sales-oferta21-sin-contador/resources/scripts/main.js ***!
  \******************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/base-sales-oferta21-sin-contador/resources/scripts/tools.js");
/* harmony import */ var _countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countdown */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/base-sales-oferta21-sin-contador/resources/scripts/countdown.js");


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

  new _countdown__WEBPACK_IMPORTED_MODULE_1__["default"]({
    cont: document.querySelector('.container'),
    endDate: "February 12, 2020 10:00:00",
    outputTranslation: {
      year: '',
      week: '',
      day: 'Días',
      hour: 'Horas',
      minute: 'Minutos',
      second: 'Segundos'
    },
    endCallback: null,
    outputFormat: 'day|hour|minute|second'
  }).start();
};

/***/ }),

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/base-sales-oferta21-sin-contador/resources/scripts/tools.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/base-sales-oferta21-sin-contador/resources/scripts/tools.js ***!
  \*******************************************************************************************************************************************************/
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
const MICROSITE_ID = '#flash';
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

/*function _internalCSSInit() {
    document.querySelector('.vfes-ms-content').removeAttribute("style");
    ex.cssLoaded = true;
    ex.onStylesReady();
}*/

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

/*function isCSSMicroLoaded() {
    const domStyles = document.styleSheets;
    let countCSS = 0;
    [].forEach.call(domStyles, (item) => {
        const href = item.href || '';
        if (href.indexOf('ws2r') !== -1) {
            console.log('WS2R Loaded');
            countCSS++;
        }
        if (href.indexOf('main') !== -1) {
            console.log('MAIN.CSS Loaded');
            countCSS++
        }
    });
    return (countCSS === 2);
}*/


function init() {} // DO SOMETHING

/*
* listen event, once have been loaded the files CSS
* */

/*if (!isCSSMicroLoaded()) {
    cssMain.addEventListener('load', _internalCSSInit);
} else if (isCSSMicroLoaded()) {
    setTimeout(_internalCSSInit, 100);
}*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9mdWxsc2l4L0Rlc2t0b3AvbWljcm9zaXRlcy1jYnUvMDEtcGFydGljdWxhcmVzLzAxLWNvbnZlcmdlbnRlL29mZXJ0YS9hbnRpZ3VvL2Jhc2Utc2FsZXMtb2ZlcnRhMjEtc2luLWNvbnRhZG9yL3Jlc291cmNlcy9zY3JpcHRzL2NvdW50ZG93bi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2Z1bGxzaXgvRGVza3RvcC9taWNyb3NpdGVzLWNidS8wMS1wYXJ0aWN1bGFyZXMvMDEtY29udmVyZ2VudGUvb2ZlcnRhL2FudGlndW8vYmFzZS1zYWxlcy1vZmVydGEyMS1zaW4tY29udGFkb3IvcmVzb3VyY2VzL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2Z1bGxzaXgvRGVza3RvcC9taWNyb3NpdGVzLWNidS8wMS1wYXJ0aWN1bGFyZXMvMDEtY29udmVyZ2VudGUvb2ZlcnRhL2FudGlndW8vYmFzZS1zYWxlcy1vZmVydGEyMS1zaW4tY29udGFkb3IvcmVzb3VyY2VzL3NjcmlwdHMvdG9vbHMuanMiXSwibmFtZXMiOlsiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJDb3VudGRvd24iLCJvcHQiLCJvcHRpb25zIiwiY29udCIsImVuZERhdGUiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwiZW5kQ2FsbGJhY2siLCJvdXRwdXRGb3JtYXQiLCJvdXRwdXRUcmFuc2xhdGlvbiIsIndlZWsiLCJsYXN0VGljayIsImludGVydmFsc0J5U2l6ZSIsIlRJTUVTVEFNUF9TRUNPTkQiLCJUSU1FU1RBTVBfTUlOVVRFIiwiVElNRVNUQU1QX0hPVVIiLCJUSU1FU1RBTVBfREFZIiwiVElNRVNUQU1QX1dFRUsiLCJUSU1FU1RBTVBfWUVBUiIsImVsZW1lbnRDbGFzc1ByZWZpeCIsImludGVydmFsIiwiZGlnaXRDb250cyIsImxvYWRPcHRpb25zIiwiZ2V0RGF0ZSIsImRhdGUiLCJEYXRlIiwiZXhwZWN0ZWRWYWx1ZXMiLCJpIiwiaGFzT3duUHJvcGVydHkiLCJwcmVwYXJlVGltZUJ5T3V0cHV0Rm9ybWF0IiwiZGF0ZU9iaiIsInVzZWRJbnRlcnZhbHMiLCJ1bmRlZmluZWQiLCJvdXRwdXQiLCJ0aW1lRGlmZiIsImZpbHRlciIsIml0ZW0iLCJzcGxpdCIsImluZGV4T2YiLCJnZXRUaW1lIiwibm93IiwiZm9yRWFjaCIsInZhbHVlIiwiTWF0aCIsInRydW5jIiwibGVuZ3RoIiwiZml4Q29tcGF0aWJpbGl0eSIsIngiLCJpc05hTiIsIk5hTiIsImZsb29yIiwiY2VpbCIsIndyaXRlRGF0YSIsImRhdGEiLCJjb2RlIiwiaW50ZXJ2YWxOYW1lIiwiZWxlbWVudCIsImdldEludGVydmFsQ29udENvbW1vbkNsYXNzTmFtZSIsImdldEludGVydmFsQ29udENsYXNzTmFtZSIsImludGVydmFsRGVzY3JpcHRpb24iLCJkaWdpdCIsImluZGV4IiwiZ2V0RGlnaXRDb250Q29tbW9uQ2xhc3NOYW1lIiwiZ2V0RGlnaXRDb250Q2xhc3NOYW1lIiwiZ2V0RGlnaXRFbGVtZW50U3RyaW5nIiwiaW5uZXJIVE1MIiwibmV3RGlnaXQiLCJsYXN0RGlnaXQiLCJ1cGRhdGVWaWV3IiwiX2xvb3AiLCJnZXREaWdpdENvbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfb3B0aW9ucyIsIl9vcHQiLCJzdGFydCIsImVuZERhdGVEYXRhIiwic2V0SW50ZXJ2YWwiLCJzdG9wIiwiY2xlYXJJbnRlcnZhbCIsInRvb2xzIiwib25TdHlsZXNSZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJvbkZyYW1ld29ya1JlYWR5IiwiTUlDUk9TSVRFX0lEIiwiY3NzTWFpbiIsIk1JQ1JPU0lURV9TRUxFQ1RJT04iLCJjbG9zZXN0IiwiUEFUSF9NSUNST1NJVEUiLCJkYXRhc2V0IiwicGF0aG1pY3Jvc2l0ZSIsIndpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJpc0Rlc2t0b3AiLCJpc1RhYmxldCIsImlzTW9iaWxlIiwiZWwiLCJzZWxlY3RvciIsInN0b3BTZWxlY3RvciIsInJldHZhbCIsIm1hdGNoZXMiLCJwYXJlbnRFbGVtZW50IiwiX2ludGVybmFsSlNJbml0Iiwid2luZG93IiwidmZlcyIsIl91dGlscyIsImluaXQiLCJleCIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwibWljcm9zaXRlSWQiLCJtaWNyb3NpdGVQYXRoIiwiY3NzTG9hZGVkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUEsSUFBSUEsT0FBTyxHQUFHLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0MsT0FBT0EsTUFBTSxDQUFDQyxRQUFkLEtBQTJCLFFBQTNELEdBQXNFLFVBQVVDLEdBQVYsRUFBZTtBQUFFLFNBQU8sT0FBT0EsR0FBZDtBQUFvQixDQUEzRyxH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QnJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBeEI7O0FBQ0FxQyxJQUFFLENBQUN6QixnQkFBSDtBQUNIO0FBR0Q7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSxTQUFTd0IsSUFBVCxHQUFnQixDQUVmLENBRkQsQ0FDSTs7QUFHSjs7OztBQUdBOzs7Ozs7QUFPQTs7Ozs7QUFHQSxJQUFJSCxNQUFNLENBQUNDLElBQVgsRUFBaUI7QUFDYkksWUFBVSxDQUFDTixlQUFELEVBQWtCLEdBQWxCLENBQVY7QUFDSCxDQUZELE1BRU87QUFDSGpDLFVBQVEsQ0FBQ3dDLGdCQUFULENBQTBCLHFCQUExQixFQUFpRFAsZUFBakQ7QUFDSDs7QUFFRCxNQUFNSyxFQUFFLEdBQUc7QUFDUGQsV0FETztBQUVQQyxVQUZPO0FBR1BDLFVBSE87QUFJUGUsYUFBVyxFQUFFM0IsWUFKTjtBQUtQNEIsZUFBYSxFQUFFeEIsY0FMUjtBQU1QbUIsTUFBSSxFQUFFQSxJQU5DO0FBT1BNLFdBQVMsRUFBRSxLQVBKO0FBUVBqQyxlQUFhLEVBQUUsTUFBTSxJQVJkO0FBU1BHLGtCQUFnQixFQUFFLE1BQU07QUFUakIsQ0FBWDtBQVlleUIsaUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvZnVsbHNpeC9EZXNrdG9wL21pY3Jvc2l0ZXMtY2J1LzAxLXBhcnRpY3VsYXJlcy8wMS1jb252ZXJnZW50ZS9vZmVydGEvYW50aWd1by9iYXNlLXNhbGVzLW9mZXJ0YTIxLXNpbi1jb250YWRvci9yZXNvdXJjZXMvc2NyaXB0cy9tYWluLmpzXCIpO1xuIiwiXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gQ291bnRkb3duKG9wdCkge1xuXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnQ6IG51bGwsXG4gICAgICAgICAgICBlbmREYXRlOiB7XG4gICAgICAgICAgICAgICAgeWVhcjogMCxcbiAgICAgICAgICAgICAgICBtb250aDogMCxcbiAgICAgICAgICAgICAgICBkYXk6IDAsXG4gICAgICAgICAgICAgICAgaG91cjogMCxcbiAgICAgICAgICAgICAgICBtaW51dGU6IDAsXG4gICAgICAgICAgICAgICAgc2Vjb25kOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5kQ2FsbGJhY2s6IG51bGwsXG4gICAgICAgICAgICBvdXRwdXRGb3JtYXQ6ICd5ZWFyfHdlZWt8ZGF5fGhvdXJ8bWludXRlfHNlY29uZCcsXG4gICAgICAgICAgICBvdXRwdXRUcmFuc2xhdGlvbjoge1xuICAgICAgICAgICAgICAgIHllYXI6ICdSb2t5JyxcbiAgICAgICAgICAgICAgICB3ZWVrOiAnVMO9ZG55JyxcbiAgICAgICAgICAgICAgICBkYXk6ICdEbnknLFxuICAgICAgICAgICAgICAgIGhvdXI6ICdIb2RpbicsXG4gICAgICAgICAgICAgICAgbWludXRlOiAnTWludXQnLFxuICAgICAgICAgICAgICAgIHNlY29uZDogJ1Z0ZcWZaW4nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxhc3RUaWNrID0gbnVsbCxcbiAgICAgICAgaW50ZXJ2YWxzQnlTaXplID0gWyd5ZWFyJywgJ3dlZWsnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCddLFxuICAgICAgICBUSU1FU1RBTVBfU0VDT05EID0gMTAwMCxcbiAgICAgICAgVElNRVNUQU1QX01JTlVURSA9IDYwICogVElNRVNUQU1QX1NFQ09ORCxcbiAgICAgICAgVElNRVNUQU1QX0hPVVIgPSA2MCAqIFRJTUVTVEFNUF9NSU5VVEUsXG4gICAgICAgIFRJTUVTVEFNUF9EQVkgPSAyNCAqIFRJTUVTVEFNUF9IT1VSLFxuICAgICAgICBUSU1FU1RBTVBfV0VFSyA9IDcgKiBUSU1FU1RBTVBfREFZLFxuICAgICAgICBUSU1FU1RBTVBfWUVBUiA9IDM2NSAqIFRJTUVTVEFNUF9EQVksXG4gICAgICAgIGVsZW1lbnRDbGFzc1ByZWZpeCA9ICdjb3VudERvd25fJyxcbiAgICAgICAgaW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICBkaWdpdENvbnRzID0ge307XG5cbiAgICBsb2FkT3B0aW9ucyhvcHRpb25zLCBvcHQpO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGRhdGVcbiAgICAgKiBAcmV0dXJucyB7RGF0ZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXREYXRlKGRhdGUpIHtcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0ZSkpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBleHBlY3RlZFZhbHVlcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGF5OiAwLFxuICAgICAgICAgICAgICAgICAgICBtb250aDogMCxcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogMCxcbiAgICAgICAgICAgICAgICAgICAgaG91cjogMCxcbiAgICAgICAgICAgICAgICAgICAgbWludXRlOiAwLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmQ6IDBcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBleHBlY3RlZFZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhwZWN0ZWRWYWx1ZXMuaGFzT3duUHJvcGVydHkoaSkgJiYgZGF0ZS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRWYWx1ZXNbaV0gPSBkYXRlW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGV4cGVjdGVkVmFsdWVzLnllYXIsIGV4cGVjdGVkVmFsdWVzLm1vbnRoID4gMCA/IGV4cGVjdGVkVmFsdWVzLm1vbnRoIC0gMSA6IGV4cGVjdGVkVmFsdWVzLm1vbnRoLCBleHBlY3RlZFZhbHVlcy5kYXksIGV4cGVjdGVkVmFsdWVzLmhvdXIsIGV4cGVjdGVkVmFsdWVzLm1pbnV0ZSwgZXhwZWN0ZWRWYWx1ZXMuc2Vjb25kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZU9ialxuICAgICAqIEByZXR1cm4ge29iamVjdH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwcmVwYXJlVGltZUJ5T3V0cHV0Rm9ybWF0KGRhdGVPYmopIHtcbiAgICAgICAgdmFyIHVzZWRJbnRlcnZhbHMgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICBvdXRwdXQgPSB7fSxcbiAgICAgICAgICAgIHRpbWVEaWZmID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHVzZWRJbnRlcnZhbHMgPSBpbnRlcnZhbHNCeVNpemUuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vdXRwdXRGb3JtYXQuc3BsaXQoJ3wnKS5pbmRleE9mKGl0ZW0pICE9PSAtMTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGltZURpZmYgPSBkYXRlT2JqLmdldFRpbWUoKSAtIERhdGUubm93KCk7XG5cbiAgICAgICAgdXNlZEludGVydmFscy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAodGltZURpZmYgPiAwKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX1lFQVIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZURpZmYgLT0gdmFsdWUgKiBUSU1FU1RBTVBfWUVBUjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC50cnVuYyh0aW1lRGlmZiAvIFRJTUVTVEFNUF9XRUVLKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmIC09IHZhbHVlICogVElNRVNUQU1QX1dFRUs7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC50cnVuYyh0aW1lRGlmZiAvIFRJTUVTVEFNUF9EQVkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZURpZmYgLT0gdmFsdWUgKiBUSU1FU1RBTVBfREFZO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX0hPVVIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZURpZmYgLT0gdmFsdWUgKiBUSU1FU1RBTVBfSE9VUjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX01JTlVURSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9NSU5VVEU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC50cnVuYyh0aW1lRGlmZiAvIFRJTUVTVEFNUF9TRUNPTkQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZURpZmYgLT0gdmFsdWUgKiBUSU1FU1RBTVBfU0VDT05EO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICcwMCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXRwdXRbaXRlbV0gPSAoKCcnICsgdmFsdWUpLmxlbmd0aCA8IDIgPyAnMCcgKyB2YWx1ZSA6ICcnICsgdmFsdWUpLnNwbGl0KCcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXhDb21wYXRpYmlsaXR5KCkge1xuICAgICAgICBNYXRoLnRydW5jID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIGlmIChpc05hTih4KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwoeCk7XG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdyaXRlRGF0YShkYXRhKSB7XG4gICAgICAgIHZhciBjb2RlID0gJzxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2NvbnRcIj4nLFxuICAgICAgICAgICAgaW50ZXJ2YWxOYW1lID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGZvciAoaW50ZXJ2YWxOYW1lIGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGludGVydmFsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9ICc8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdfaW50ZXJ2YWxfYmFzaWNfY29udFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICsgZ2V0SW50ZXJ2YWxDb250Q29tbW9uQ2xhc3NOYW1lKCkgKyAnICcgKyBnZXRJbnRlcnZhbENvbnRDbGFzc05hbWUoaW50ZXJ2YWxOYW1lKSArICdcIj4nLFxuICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbERlc2NyaXB0aW9uID0gJzxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2ludGVydmFsX2Jhc2ljX2NvbnRfZGVzY3JpcHRpb25cIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICsgb3B0aW9ucy5vdXRwdXRUcmFuc2xhdGlvbltpbnRlcnZhbE5hbWVdICsgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICBkYXRhW2ludGVydmFsTmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoZGlnaXQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgKz0gJzxkaXYgY2xhc3M9XCInICsgZ2V0RGlnaXRDb250Q29tbW9uQ2xhc3NOYW1lKCkgKyAnICcgKyBnZXREaWdpdENvbnRDbGFzc05hbWUoaW5kZXgpICsgJ1wiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICsgZ2V0RGlnaXRFbGVtZW50U3RyaW5nKGRpZ2l0LCAwKSArICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29kZSArPSBlbGVtZW50ICsgJzwvZGl2PicgKyBpbnRlcnZhbERlc2NyaXB0aW9uICsgJzwvZGl2Pic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLmNvbnQuaW5uZXJIVE1MID0gY29kZSArICc8L2Rpdj4nO1xuICAgICAgICBsYXN0VGljayA9IGRhdGE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGlnaXRFbGVtZW50U3RyaW5nKG5ld0RpZ2l0LCBsYXN0RGlnaXQpIHtcbiAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9sYXN0X3BsYWNlaG9sZGVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfbGFzdF9wbGFjZWhvbGRlcl9pbm5lclwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICsgbGFzdERpZ2l0ICsgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9uZXdfcGxhY2Vob2xkZXJcIj4nICsgbmV3RGlnaXQgKyAnPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9sYXN0X3JvdGF0ZVwiPicgKyBsYXN0RGlnaXQgKyAnPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9uZXdfcm90YXRlXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfbmV3X3JvdGF0ZWRcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfbmV3X3JvdGF0ZWRfaW5uZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgKyBuZXdEaWdpdCArICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZpZXcoZGF0YSkge1xuICAgICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpbnRlcnZhbE5hbWUpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGludGVydmFsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBkYXRhW2ludGVydmFsTmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoZGlnaXQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0VGljayAhPT0gbnVsbCAmJiBsYXN0VGlja1tpbnRlcnZhbE5hbWVdW2luZGV4XSAhPT0gZGF0YVtpbnRlcnZhbE5hbWVdW2luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RGlnaXRDb250KGludGVydmFsTmFtZSwgaW5kZXgpLmlubmVySFRNTCA9IGdldERpZ2l0RWxlbWVudFN0cmluZyhkYXRhW2ludGVydmFsTmFtZV1baW5kZXhdLCBsYXN0VGlja1tpbnRlcnZhbE5hbWVdW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKHZhciBpbnRlcnZhbE5hbWUgaW4gZGF0YSkge1xuICAgICAgICAgICAgX2xvb3AoaW50ZXJ2YWxOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RUaWNrID0gZGF0YTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREaWdpdENvbnQoaW50ZXJ2YWxOYW1lLCBpbmRleCkge1xuICAgICAgICBpZiAoIWRpZ2l0Q29udHNbaW50ZXJ2YWxOYW1lICsgJ18nICsgaW5kZXhdKSB7XG4gICAgICAgICAgICBkaWdpdENvbnRzW2ludGVydmFsTmFtZSArICdfJyArIGluZGV4XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgZ2V0SW50ZXJ2YWxDb250Q2xhc3NOYW1lKGludGVydmFsTmFtZSkgKyAnIC4nICsgZ2V0RGlnaXRDb250Q2xhc3NOYW1lKGluZGV4KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGlnaXRDb250c1tpbnRlcnZhbE5hbWUgKyAnXycgKyBpbmRleF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW50ZXJ2YWxDb250Q2xhc3NOYW1lKGludGVydmFsTmFtZSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudENsYXNzUHJlZml4ICsgJ2ludGVydmFsX2NvbnRfJyArIGludGVydmFsTmFtZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbnRlcnZhbENvbnRDb21tb25DbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50Q2xhc3NQcmVmaXggKyAnaW50ZXJ2YWxfY29udCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGlnaXRDb250Q2xhc3NOYW1lKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfY29udF8nICsgaW5kZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGlnaXRDb250Q29tbW9uQ2xhc3NOYW1lKCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudENsYXNzUHJlZml4ICsgJ2RpZ2l0X2NvbnQnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRPcHRpb25zKF9vcHRpb25zLCBfb3B0KSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gX29wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChfb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShpKSAmJiBfb3B0Lmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9vcHRpb25zW2ldICE9PSBudWxsICYmIF90eXBlb2YoX29wdGlvbnNbaV0pID09PSAnb2JqZWN0JyAmJiBfdHlwZW9mKF9vcHRbaV0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBsb2FkT3B0aW9ucyhfb3B0aW9uc1tpXSwgX29wdFtpXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX29wdGlvbnNbaV0gPSBfb3B0W2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB2YXIgZW5kRGF0ZSA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGVuZERhdGVEYXRhID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGZpeENvbXBhdGliaWxpdHkoKTtcblxuICAgICAgICBlbmREYXRlID0gZ2V0RGF0ZShvcHRpb25zLmVuZERhdGUpO1xuXG4gICAgICAgIGVuZERhdGVEYXRhID0gcHJlcGFyZVRpbWVCeU91dHB1dEZvcm1hdChlbmREYXRlKTtcblxuICAgICAgICB3cml0ZURhdGEoZW5kRGF0ZURhdGEpO1xuXG4gICAgICAgIGxhc3RUaWNrID0gZW5kRGF0ZURhdGE7XG5cbiAgICAgICAgaWYgKGVuZERhdGUuZ2V0VGltZSgpIDw9IERhdGUubm93KCkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5lbmRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZW5kQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVZpZXcocHJlcGFyZVRpbWVCeU91dHB1dEZvcm1hdChlbmREYXRlKSk7XG4gICAgICAgICAgICB9LCBUSU1FU1RBTVBfU0VDT05EKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgIHN0b3A6IHN0b3BcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247IiwiaW1wb3J0IHRvb2xzIGZyb20gJy4vdG9vbHMnO1xuaW1wb3J0IENvdW50ZG93biBmcm9tICcuL2NvdW50ZG93bic7XG5cblxuLypcbiogICBNw6l0b2RvIHF1ZSBzZSBkaXNwYXJhIGN1YW5kbyBlbCB3czJyLnZYLmNzc1xuKiAgIHlhIHNlIGhhIGNhcmdhZG8geSBoYSBwaW50YWRvIGxhIHdlYlxuKiAqL1xudG9vbHMub25TdHlsZXNSZWFkeSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNpdGUgdmlzdWFsbHkgcmVhZHlcIik7XG4gICAgLy8gRE8gU09NRVRISU5HXG5cblxufTtcblxuXG4vKlxuKiAgIE3DqXRvZG8gcXVlIHNlIGRpc3BhcmEgY3VhbmRvIGVsIHdzMnIudlguanNcbiogICB5YSBzZSBoYSBjYXJnYWRvIHkgZXN0w6EgZGlwb25pYmxlLlxuKiAqL1xudG9vbHMub25GcmFtZXdvcmtSZWFkeSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNpdGUgZnVuY3Rpb25hbGl0eSByZWFkeVwiKTtcbiAgICAvLyBETyBTT01FVEhJTkdcblxuICAgIG5ldyBDb3VudGRvd24oe1xuICAgICAgICBjb250OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyksXG4gICAgICAgIGVuZERhdGU6IFwiRmVicnVhcnkgMTIsIDIwMjAgMTA6MDA6MDBcIixcbiAgICAgICAgb3V0cHV0VHJhbnNsYXRpb246IHtcbiAgICAgICAgICAgIHllYXI6ICcnLFxuICAgICAgICAgICAgd2VlazogJycsXG4gICAgICAgICAgICBkYXk6ICdEw61hcycsXG4gICAgICAgICAgICBob3VyOiAnSG9yYXMnLFxuICAgICAgICAgICAgbWludXRlOiAnTWludXRvcycsXG4gICAgICAgICAgICBzZWNvbmQ6ICdTZWd1bmRvcycsXG4gICAgICAgIH0sXG4gICAgICAgIGVuZENhbGxiYWNrOiBudWxsLFxuICAgICAgICBvdXRwdXRGb3JtYXQ6ICdkYXl8aG91cnxtaW51dGV8c2Vjb25kJyxcbiAgICB9KS5zdGFydCgpO1xuXG59O1xuXG5cblxuXG4iLCIvKlxuICogTWljcm9zaXRlcyB0b29scyBqczpcbiAqIEVzdGUgZmljaGVybyBlcyB1bmEgbXVlc3RyYSBkZSB1dGlsaWRhZGVzIHByb3BpYXMgcGFyYSBsb3MgbWljcm9zaXRlcy5cbiAqIFNlIHB1ZWRlIHBlcnNvbmFsaXphciBhIHR1IGd1c3RvXG4gKlxuICovXG5cblxuY29uc3QgTUlDUk9TSVRFX0lEID0gJyNmbGFzaCc7XG5jb25zdCBjc3NNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tkYXRhLW1pY3JvY3NzXScpO1xuY29uc3QgTUlDUk9TSVRFX1NFTEVDVElPTiA9IGNsb3Nlc3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihNSUNST1NJVEVfSUQpLCAnW2RhdGEtcGF0aG1pY3Jvc2l0ZV0nKTtcbmNvbnN0IFBBVEhfTUlDUk9TSVRFID0gTUlDUk9TSVRFX1NFTEVDVElPTiA/IE1JQ1JPU0lURV9TRUxFQ1RJT04uZGF0YXNldC5wYXRobWljcm9zaXRlIDogJyc7XG5sZXQgd2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG5sZXQgaXNEZXNrdG9wID0gd2lkdGggPiA5Njk7XG5sZXQgaXNUYWJsZXQgPSB3aWR0aCA8PSA5NjkgJiYgd2lkdGggPj0gNzY4O1xubGV0IGlzTW9iaWxlID0gd2lkdGggPCA3NjggJiYgd2lkdGggPiAzMDA7XG5cblxuLypcbiogU2VhcmNoZXMgZm9yIHRoZSBwYXJlbnQgbm9kZSBjbG9zZXN0IHRvIHRoZSBlbGVtZW50LCB3aGljaCBjb21wbGllcyB3aXRoIHRoZSBzZWxlY3RvclxuKiBAcGFyYW0ge30gZWwgLSBEZXNjcmlwdGlvblxuKiBAcGFyYW0ge30gc2VsZWN0b3IgLSBEZXNjcmlwdGlvblxuKiBAcGFyYW0ge30gc3RvcFNlbGVjdG9yIC0gRGVzY3JpcHRpb25cbiogKi9cbmZ1bmN0aW9uIGNsb3Nlc3QoZWwsIHNlbGVjdG9yLCBzdG9wU2VsZWN0b3IpIHtcbiAgICBsZXQgcmV0dmFsID0gbnVsbDtcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR2YWwgPSBlbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKHN0b3BTZWxlY3RvciAmJiBlbC5tYXRjaGVzKHN0b3BTZWxlY3RvcikpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJldHZhbDtcbn1cblxuXG4vKlxuKiBSZW1vdmVzIHRoZSBzdHlsZSBhdHRyLCBvbmNlIHRoZSBzdHlsZXNoZWV0IGhhdmUgYmVlbiBsb2FkZWRcbiogcmV0dXJuIHVuZGVmaW5lZFxuKiAqL1xuLypmdW5jdGlvbiBfaW50ZXJuYWxDU1NJbml0KCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZmVzLW1zLWNvbnRlbnQnKS5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICBleC5jc3NMb2FkZWQgPSB0cnVlO1xuICAgIGV4Lm9uU3R5bGVzUmVhZHkoKTtcbn0qL1xuXG5cbi8qXG4qIEluaXRpYWxpemVzIGZ1bmN0aW9uYWxpdHkgSlMsIGFuZCBhZHZpY2VzIHdoZW4gSlMgaXMgbG9hZGVkLlxuKiByZXR1cm4gdW5kZWZpbmVkXG4qICovXG5mdW5jdGlvbiBfaW50ZXJuYWxKU0luaXQoKSB7XG4gICAgd2luZG93LnZmZXMuX3V0aWxzLmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpKTtcbiAgICBleC5vbkZyYW1ld29ya1JlYWR5KCk7XG59XG5cblxuLypcbiogQ2hlY2sgaWYgc3R5bGVzaGVldCBDU1MgaXMgbG9hZGVkXG4qIEByZXR1cm4ge2Jvb2xlYW59XG4qICovXG4vKmZ1bmN0aW9uIGlzQ1NTTWljcm9Mb2FkZWQoKSB7XG4gICAgY29uc3QgZG9tU3R5bGVzID0gZG9jdW1lbnQuc3R5bGVTaGVldHM7XG4gICAgbGV0IGNvdW50Q1NTID0gMDtcbiAgICBbXS5mb3JFYWNoLmNhbGwoZG9tU3R5bGVzLCAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBocmVmID0gaXRlbS5ocmVmIHx8ICcnO1xuICAgICAgICBpZiAoaHJlZi5pbmRleE9mKCd3czJyJykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnV1MyUiBMb2FkZWQnKTtcbiAgICAgICAgICAgIGNvdW50Q1NTKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhyZWYuaW5kZXhPZignbWFpbicpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ01BSU4uQ1NTIExvYWRlZCcpO1xuICAgICAgICAgICAgY291bnRDU1MrK1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIChjb3VudENTUyA9PT0gMik7XG59Ki9cblxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIC8vIERPIFNPTUVUSElOR1xufVxuXG4vKlxuKiBsaXN0ZW4gZXZlbnQsIG9uY2UgaGF2ZSBiZWVuIGxvYWRlZCB0aGUgZmlsZXMgQ1NTXG4qICovXG4vKmlmICghaXNDU1NNaWNyb0xvYWRlZCgpKSB7XG4gICAgY3NzTWFpbi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgX2ludGVybmFsQ1NTSW5pdCk7XG59IGVsc2UgaWYgKGlzQ1NTTWljcm9Mb2FkZWQoKSkge1xuICAgIHNldFRpbWVvdXQoX2ludGVybmFsQ1NTSW5pdCwgMTAwKTtcbn0qL1xuXG5cbi8qXG4qIGxpc3RlbiBldmVudCwgb25jZSBoYXZlIGJlZW4gbG9hZGVkIHRoZSBmaWxlcyBKU1xuKiAqL1xuaWYgKHdpbmRvdy52ZmVzKSB7XG4gICAgc2V0VGltZW91dChfaW50ZXJuYWxKU0luaXQsIDEwMClcbn0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmZlczpmcmFtZXdvcmtSZWFkeScsIF9pbnRlcm5hbEpTSW5pdCk7XG59XG5cbmNvbnN0IGV4ID0ge1xuICAgIGlzRGVza3RvcCxcbiAgICBpc1RhYmxldCxcbiAgICBpc01vYmlsZSxcbiAgICBtaWNyb3NpdGVJZDogTUlDUk9TSVRFX0lELFxuICAgIG1pY3Jvc2l0ZVBhdGg6IFBBVEhfTUlDUk9TSVRFLFxuICAgIGluaXQ6IGluaXQsXG4gICAgY3NzTG9hZGVkOiBmYWxzZSxcbiAgICBvblN0eWxlc1JlYWR5OiAoKSA9PiBudWxsLFxuICAgIG9uRnJhbWV3b3JrUmVhZHk6ICgpID0+IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==