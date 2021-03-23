/**
 * Vodafone Reboot Framework: Version 15.5.0. Generation Date: 2020-01-09T12:09:14.851Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../microsites-cbu/04-recursos/01-counter/counter/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../microsites-cbu/04-recursos/01-counter/counter/resources/scripts/countdown.js":
/*!***************************************************************************************!*\
  !*** ../microsites-cbu/04-recursos/01-counter/counter/resources/scripts/countdown.js ***!
  \***************************************************************************************/
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

/***/ "../microsites-cbu/04-recursos/01-counter/counter/resources/scripts/main.js":
/*!**********************************************************************************!*\
  !*** ../microsites-cbu/04-recursos/01-counter/counter/resources/scripts/main.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../microsites-cbu/04-recursos/01-counter/counter/resources/scripts/tools.js");
/* harmony import */ var _countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countdown */ "../microsites-cbu/04-recursos/01-counter/counter/resources/scripts/countdown.js");


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
    endDate: 1568793600544,
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

/***/ "../microsites-cbu/04-recursos/01-counter/counter/resources/scripts/tools.js":
/*!***********************************************************************************!*\
  !*** ../microsites-cbu/04-recursos/01-counter/counter/resources/scripts/tools.js ***!
  \***********************************************************************************/
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
const MICROSITE_ID = '#counter';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL21pY3Jvc2l0ZXMtY2J1LzA0LXJlY3Vyc29zLzAxLWNvdW50ZXIvY291bnRlci9yZXNvdXJjZXMvc2NyaXB0cy9jb3VudGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4uL21pY3Jvc2l0ZXMtY2J1LzA0LXJlY3Vyc29zLzAxLWNvdW50ZXIvY291bnRlci9yZXNvdXJjZXMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovLy8uLi9taWNyb3NpdGVzLWNidS8wNC1yZWN1cnNvcy8wMS1jb3VudGVyL2NvdW50ZXIvcmVzb3VyY2VzL3NjcmlwdHMvdG9vbHMuanMiXSwibmFtZXMiOlsiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJDb3VudGRvd24iLCJvcHQiLCJvcHRpb25zIiwiY29udCIsImVuZERhdGUiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwiZW5kQ2FsbGJhY2siLCJvdXRwdXRGb3JtYXQiLCJvdXRwdXRUcmFuc2xhdGlvbiIsIndlZWsiLCJsYXN0VGljayIsImludGVydmFsc0J5U2l6ZSIsIlRJTUVTVEFNUF9TRUNPTkQiLCJUSU1FU1RBTVBfTUlOVVRFIiwiVElNRVNUQU1QX0hPVVIiLCJUSU1FU1RBTVBfREFZIiwiVElNRVNUQU1QX1dFRUsiLCJUSU1FU1RBTVBfWUVBUiIsImVsZW1lbnRDbGFzc1ByZWZpeCIsImludGVydmFsIiwiZGlnaXRDb250cyIsImxvYWRPcHRpb25zIiwiZ2V0RGF0ZSIsImRhdGUiLCJEYXRlIiwiZXhwZWN0ZWRWYWx1ZXMiLCJpIiwiaGFzT3duUHJvcGVydHkiLCJwcmVwYXJlVGltZUJ5T3V0cHV0Rm9ybWF0IiwiZGF0ZU9iaiIsInVzZWRJbnRlcnZhbHMiLCJ1bmRlZmluZWQiLCJvdXRwdXQiLCJ0aW1lRGlmZiIsImZpbHRlciIsIml0ZW0iLCJzcGxpdCIsImluZGV4T2YiLCJnZXRUaW1lIiwibm93IiwiZm9yRWFjaCIsInZhbHVlIiwiTWF0aCIsInRydW5jIiwibGVuZ3RoIiwiZml4Q29tcGF0aWJpbGl0eSIsIngiLCJpc05hTiIsIk5hTiIsImZsb29yIiwiY2VpbCIsIndyaXRlRGF0YSIsImRhdGEiLCJjb2RlIiwiaW50ZXJ2YWxOYW1lIiwiZWxlbWVudCIsImdldEludGVydmFsQ29udENvbW1vbkNsYXNzTmFtZSIsImdldEludGVydmFsQ29udENsYXNzTmFtZSIsImludGVydmFsRGVzY3JpcHRpb24iLCJkaWdpdCIsImluZGV4IiwiZ2V0RGlnaXRDb250Q29tbW9uQ2xhc3NOYW1lIiwiZ2V0RGlnaXRDb250Q2xhc3NOYW1lIiwiZ2V0RGlnaXRFbGVtZW50U3RyaW5nIiwiaW5uZXJIVE1MIiwibmV3RGlnaXQiLCJsYXN0RGlnaXQiLCJ1cGRhdGVWaWV3IiwiX2xvb3AiLCJnZXREaWdpdENvbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfb3B0aW9ucyIsIl9vcHQiLCJzdGFydCIsImVuZERhdGVEYXRhIiwic2V0SW50ZXJ2YWwiLCJzdG9wIiwiY2xlYXJJbnRlcnZhbCIsInRvb2xzIiwib25TdHlsZXNSZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJvbkZyYW1ld29ya1JlYWR5IiwiTUlDUk9TSVRFX0lEIiwiY3NzTWFpbiIsIk1JQ1JPU0lURV9TRUxFQ1RJT04iLCJjbG9zZXN0IiwiUEFUSF9NSUNST1NJVEUiLCJkYXRhc2V0IiwicGF0aG1pY3Jvc2l0ZSIsIndpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJpc0Rlc2t0b3AiLCJpc1RhYmxldCIsImlzTW9iaWxlIiwiZWwiLCJzZWxlY3RvciIsInN0b3BTZWxlY3RvciIsInJldHZhbCIsIm1hdGNoZXMiLCJwYXJlbnRFbGVtZW50IiwiX2ludGVybmFsQ1NTSW5pdCIsInJlbW92ZUF0dHJpYnV0ZSIsImV4IiwiY3NzTG9hZGVkIiwiX2ludGVybmFsSlNJbml0Iiwid2luZG93IiwidmZlcyIsIl91dGlscyIsImluaXQiLCJpc0NTU01pY3JvTG9hZGVkIiwiZG9tU3R5bGVzIiwic3R5bGVTaGVldHMiLCJjb3VudENTUyIsImNhbGwiLCJocmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJtaWNyb3NpdGVJZCIsIm1pY3Jvc2l0ZVBhdGgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQSxJQUFJQSxPQUFPLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixVQUFsQixJQUFnQyxPQUFPQSxNQUFNLENBQUNDLFFBQWQsS0FBMkIsUUFBM0QsR0FBc0UsVUFBVUMsR0FBVixFQUFlO0FBQUUsU0FBTyxPQUFPQSxHQUFkO0FBQW9CLENBQTNHLEdBQThHLFVBQVVBLEdBQVYsRUFBZTtBQUFFLFNBQU9BLEdBQUcsSUFBSSxPQUFPRixNQUFQLEtBQWtCLFVBQXpCLElBQXVDRSxHQUFHLENBQUNDLFdBQUosS0FBb0JILE1B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SCxDQUZELE1BRU87QUFDSHJDLFVBQVEsQ0FBQ2dELGdCQUFULENBQTBCLHFCQUExQixFQUFpRFgsZUFBakQ7QUFDSDs7QUFFRCxNQUFNRixFQUFFLEdBQUc7QUFDUFgsV0FETztBQUVQQyxVQUZPO0FBR1BDLFVBSE87QUFJUHdCLGFBQVcsRUFBRXBDLFlBSk47QUFLUHFDLGVBQWEsRUFBRWpDLGNBTFI7QUFNUHVCLE1BQUksRUFBRUEsSUFOQztBQU9QTCxXQUFTLEVBQUUsS0FQSjtBQVFQMUIsZUFBYSxFQUFFLE1BQU0sSUFSZDtBQVNQRyxrQkFBZ0IsRUFBRSxNQUFNO0FBVGpCLENBQVg7QUFZZXNCLGlFQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4uL21pY3Jvc2l0ZXMtY2J1LzA0LXJlY3Vyc29zLzAxLWNvdW50ZXIvY291bnRlci9yZXNvdXJjZXMvc2NyaXB0cy9tYWluLmpzXCIpO1xuIiwiXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gQ291bnRkb3duKG9wdCkge1xuXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnQ6IG51bGwsXG4gICAgICAgICAgICBlbmREYXRlOiB7XG4gICAgICAgICAgICAgICAgeWVhcjogMCxcbiAgICAgICAgICAgICAgICBtb250aDogMCxcbiAgICAgICAgICAgICAgICBkYXk6IDAsXG4gICAgICAgICAgICAgICAgaG91cjogMCxcbiAgICAgICAgICAgICAgICBtaW51dGU6IDAsXG4gICAgICAgICAgICAgICAgc2Vjb25kOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5kQ2FsbGJhY2s6IG51bGwsXG4gICAgICAgICAgICBvdXRwdXRGb3JtYXQ6ICd5ZWFyfHdlZWt8ZGF5fGhvdXJ8bWludXRlfHNlY29uZCcsXG4gICAgICAgICAgICBvdXRwdXRUcmFuc2xhdGlvbjoge1xuICAgICAgICAgICAgICAgIHllYXI6ICdSb2t5JyxcbiAgICAgICAgICAgICAgICB3ZWVrOiAnVMO9ZG55JyxcbiAgICAgICAgICAgICAgICBkYXk6ICdEbnknLFxuICAgICAgICAgICAgICAgIGhvdXI6ICdIb2RpbicsXG4gICAgICAgICAgICAgICAgbWludXRlOiAnTWludXQnLFxuICAgICAgICAgICAgICAgIHNlY29uZDogJ1Z0ZcWZaW4nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxhc3RUaWNrID0gbnVsbCxcbiAgICAgICAgaW50ZXJ2YWxzQnlTaXplID0gWyd5ZWFyJywgJ3dlZWsnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCddLFxuICAgICAgICBUSU1FU1RBTVBfU0VDT05EID0gMTAwMCxcbiAgICAgICAgVElNRVNUQU1QX01JTlVURSA9IDYwICogVElNRVNUQU1QX1NFQ09ORCxcbiAgICAgICAgVElNRVNUQU1QX0hPVVIgPSA2MCAqIFRJTUVTVEFNUF9NSU5VVEUsXG4gICAgICAgIFRJTUVTVEFNUF9EQVkgPSAyNCAqIFRJTUVTVEFNUF9IT1VSLFxuICAgICAgICBUSU1FU1RBTVBfV0VFSyA9IDcgKiBUSU1FU1RBTVBfREFZLFxuICAgICAgICBUSU1FU1RBTVBfWUVBUiA9IDM2NSAqIFRJTUVTVEFNUF9EQVksXG4gICAgICAgIGVsZW1lbnRDbGFzc1ByZWZpeCA9ICdjb3VudERvd25fJyxcbiAgICAgICAgaW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICBkaWdpdENvbnRzID0ge307XG5cbiAgICBsb2FkT3B0aW9ucyhvcHRpb25zLCBvcHQpO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGRhdGVcbiAgICAgKiBAcmV0dXJucyB7RGF0ZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXREYXRlKGRhdGUpIHtcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0ZSkpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBleHBlY3RlZFZhbHVlcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGF5OiAwLFxuICAgICAgICAgICAgICAgICAgICBtb250aDogMCxcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogMCxcbiAgICAgICAgICAgICAgICAgICAgaG91cjogMCxcbiAgICAgICAgICAgICAgICAgICAgbWludXRlOiAwLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmQ6IDBcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBleHBlY3RlZFZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhwZWN0ZWRWYWx1ZXMuaGFzT3duUHJvcGVydHkoaSkgJiYgZGF0ZS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRWYWx1ZXNbaV0gPSBkYXRlW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGV4cGVjdGVkVmFsdWVzLnllYXIsIGV4cGVjdGVkVmFsdWVzLm1vbnRoID4gMCA/IGV4cGVjdGVkVmFsdWVzLm1vbnRoIC0gMSA6IGV4cGVjdGVkVmFsdWVzLm1vbnRoLCBleHBlY3RlZFZhbHVlcy5kYXksIGV4cGVjdGVkVmFsdWVzLmhvdXIsIGV4cGVjdGVkVmFsdWVzLm1pbnV0ZSwgZXhwZWN0ZWRWYWx1ZXMuc2Vjb25kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZU9ialxuICAgICAqIEByZXR1cm4ge29iamVjdH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwcmVwYXJlVGltZUJ5T3V0cHV0Rm9ybWF0KGRhdGVPYmopIHtcbiAgICAgICAgdmFyIHVzZWRJbnRlcnZhbHMgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICBvdXRwdXQgPSB7fSxcbiAgICAgICAgICAgIHRpbWVEaWZmID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHVzZWRJbnRlcnZhbHMgPSBpbnRlcnZhbHNCeVNpemUuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vdXRwdXRGb3JtYXQuc3BsaXQoJ3wnKS5pbmRleE9mKGl0ZW0pICE9PSAtMTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGltZURpZmYgPSBkYXRlT2JqLmdldFRpbWUoKSAtIERhdGUubm93KCk7XG5cbiAgICAgICAgdXNlZEludGVydmFscy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAodGltZURpZmYgPiAwKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX1lFQVIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZURpZmYgLT0gdmFsdWUgKiBUSU1FU1RBTVBfWUVBUjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC50cnVuYyh0aW1lRGlmZiAvIFRJTUVTVEFNUF9XRUVLKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmIC09IHZhbHVlICogVElNRVNUQU1QX1dFRUs7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC50cnVuYyh0aW1lRGlmZiAvIFRJTUVTVEFNUF9EQVkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZURpZmYgLT0gdmFsdWUgKiBUSU1FU1RBTVBfREFZO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX0hPVVIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZURpZmYgLT0gdmFsdWUgKiBUSU1FU1RBTVBfSE9VUjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX01JTlVURSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9NSU5VVEU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC50cnVuYyh0aW1lRGlmZiAvIFRJTUVTVEFNUF9TRUNPTkQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZURpZmYgLT0gdmFsdWUgKiBUSU1FU1RBTVBfU0VDT05EO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICcwMCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXRwdXRbaXRlbV0gPSAoKCcnICsgdmFsdWUpLmxlbmd0aCA8IDIgPyAnMCcgKyB2YWx1ZSA6ICcnICsgdmFsdWUpLnNwbGl0KCcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXhDb21wYXRpYmlsaXR5KCkge1xuICAgICAgICBNYXRoLnRydW5jID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIGlmIChpc05hTih4KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwoeCk7XG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdyaXRlRGF0YShkYXRhKSB7XG4gICAgICAgIHZhciBjb2RlID0gJzxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2NvbnRcIj4nLFxuICAgICAgICAgICAgaW50ZXJ2YWxOYW1lID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGZvciAoaW50ZXJ2YWxOYW1lIGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGludGVydmFsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9ICc8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdfaW50ZXJ2YWxfYmFzaWNfY29udFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICsgZ2V0SW50ZXJ2YWxDb250Q29tbW9uQ2xhc3NOYW1lKCkgKyAnICcgKyBnZXRJbnRlcnZhbENvbnRDbGFzc05hbWUoaW50ZXJ2YWxOYW1lKSArICdcIj4nLFxuICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbERlc2NyaXB0aW9uID0gJzxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2ludGVydmFsX2Jhc2ljX2NvbnRfZGVzY3JpcHRpb25cIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICsgb3B0aW9ucy5vdXRwdXRUcmFuc2xhdGlvbltpbnRlcnZhbE5hbWVdICsgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICBkYXRhW2ludGVydmFsTmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoZGlnaXQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgKz0gJzxkaXYgY2xhc3M9XCInICsgZ2V0RGlnaXRDb250Q29tbW9uQ2xhc3NOYW1lKCkgKyAnICcgKyBnZXREaWdpdENvbnRDbGFzc05hbWUoaW5kZXgpICsgJ1wiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICsgZ2V0RGlnaXRFbGVtZW50U3RyaW5nKGRpZ2l0LCAwKSArICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29kZSArPSBlbGVtZW50ICsgJzwvZGl2PicgKyBpbnRlcnZhbERlc2NyaXB0aW9uICsgJzwvZGl2Pic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLmNvbnQuaW5uZXJIVE1MID0gY29kZSArICc8L2Rpdj4nO1xuICAgICAgICBsYXN0VGljayA9IGRhdGE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGlnaXRFbGVtZW50U3RyaW5nKG5ld0RpZ2l0LCBsYXN0RGlnaXQpIHtcbiAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9sYXN0X3BsYWNlaG9sZGVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfbGFzdF9wbGFjZWhvbGRlcl9pbm5lclwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICsgbGFzdERpZ2l0ICsgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9uZXdfcGxhY2Vob2xkZXJcIj4nICsgbmV3RGlnaXQgKyAnPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9sYXN0X3JvdGF0ZVwiPicgKyBsYXN0RGlnaXQgKyAnPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9uZXdfcm90YXRlXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfbmV3X3JvdGF0ZWRcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfbmV3X3JvdGF0ZWRfaW5uZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgKyBuZXdEaWdpdCArICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZpZXcoZGF0YSkge1xuICAgICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpbnRlcnZhbE5hbWUpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGludGVydmFsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBkYXRhW2ludGVydmFsTmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoZGlnaXQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0VGljayAhPT0gbnVsbCAmJiBsYXN0VGlja1tpbnRlcnZhbE5hbWVdW2luZGV4XSAhPT0gZGF0YVtpbnRlcnZhbE5hbWVdW2luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RGlnaXRDb250KGludGVydmFsTmFtZSwgaW5kZXgpLmlubmVySFRNTCA9IGdldERpZ2l0RWxlbWVudFN0cmluZyhkYXRhW2ludGVydmFsTmFtZV1baW5kZXhdLCBsYXN0VGlja1tpbnRlcnZhbE5hbWVdW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKHZhciBpbnRlcnZhbE5hbWUgaW4gZGF0YSkge1xuICAgICAgICAgICAgX2xvb3AoaW50ZXJ2YWxOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RUaWNrID0gZGF0YTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREaWdpdENvbnQoaW50ZXJ2YWxOYW1lLCBpbmRleCkge1xuICAgICAgICBpZiAoIWRpZ2l0Q29udHNbaW50ZXJ2YWxOYW1lICsgJ18nICsgaW5kZXhdKSB7XG4gICAgICAgICAgICBkaWdpdENvbnRzW2ludGVydmFsTmFtZSArICdfJyArIGluZGV4XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgZ2V0SW50ZXJ2YWxDb250Q2xhc3NOYW1lKGludGVydmFsTmFtZSkgKyAnIC4nICsgZ2V0RGlnaXRDb250Q2xhc3NOYW1lKGluZGV4KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGlnaXRDb250c1tpbnRlcnZhbE5hbWUgKyAnXycgKyBpbmRleF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW50ZXJ2YWxDb250Q2xhc3NOYW1lKGludGVydmFsTmFtZSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudENsYXNzUHJlZml4ICsgJ2ludGVydmFsX2NvbnRfJyArIGludGVydmFsTmFtZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbnRlcnZhbENvbnRDb21tb25DbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50Q2xhc3NQcmVmaXggKyAnaW50ZXJ2YWxfY29udCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGlnaXRDb250Q2xhc3NOYW1lKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfY29udF8nICsgaW5kZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGlnaXRDb250Q29tbW9uQ2xhc3NOYW1lKCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudENsYXNzUHJlZml4ICsgJ2RpZ2l0X2NvbnQnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRPcHRpb25zKF9vcHRpb25zLCBfb3B0KSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gX29wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChfb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShpKSAmJiBfb3B0Lmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9vcHRpb25zW2ldICE9PSBudWxsICYmIF90eXBlb2YoX29wdGlvbnNbaV0pID09PSAnb2JqZWN0JyAmJiBfdHlwZW9mKF9vcHRbaV0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBsb2FkT3B0aW9ucyhfb3B0aW9uc1tpXSwgX29wdFtpXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX29wdGlvbnNbaV0gPSBfb3B0W2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB2YXIgZW5kRGF0ZSA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGVuZERhdGVEYXRhID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGZpeENvbXBhdGliaWxpdHkoKTtcblxuICAgICAgICBlbmREYXRlID0gZ2V0RGF0ZShvcHRpb25zLmVuZERhdGUpO1xuXG4gICAgICAgIGVuZERhdGVEYXRhID0gcHJlcGFyZVRpbWVCeU91dHB1dEZvcm1hdChlbmREYXRlKTtcblxuICAgICAgICB3cml0ZURhdGEoZW5kRGF0ZURhdGEpO1xuXG4gICAgICAgIGxhc3RUaWNrID0gZW5kRGF0ZURhdGE7XG5cbiAgICAgICAgaWYgKGVuZERhdGUuZ2V0VGltZSgpIDw9IERhdGUubm93KCkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5lbmRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZW5kQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVZpZXcocHJlcGFyZVRpbWVCeU91dHB1dEZvcm1hdChlbmREYXRlKSk7XG4gICAgICAgICAgICB9LCBUSU1FU1RBTVBfU0VDT05EKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgIHN0b3A6IHN0b3BcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247IiwiaW1wb3J0IHRvb2xzIGZyb20gJy4vdG9vbHMnO1xuaW1wb3J0IENvdW50ZG93biBmcm9tICcuL2NvdW50ZG93bic7XG5cblxuLypcbiogICBNw6l0b2RvIHF1ZSBzZSBkaXNwYXJhIGN1YW5kbyBlbCB3czJyLnZYLmNzc1xuKiAgIHlhIHNlIGhhIGNhcmdhZG8geSBoYSBwaW50YWRvIGxhIHdlYlxuKiAqL1xudG9vbHMub25TdHlsZXNSZWFkeSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNpdGUgdmlzdWFsbHkgcmVhZHlcIik7XG4gICAgLy8gRE8gU09NRVRISU5HXG5cblxufTtcblxuXG4vKlxuKiAgIE3DqXRvZG8gcXVlIHNlIGRpc3BhcmEgY3VhbmRvIGVsIHdzMnIudlguanNcbiogICB5YSBzZSBoYSBjYXJnYWRvIHkgZXN0w6EgZGlwb25pYmxlLlxuKiAqL1xudG9vbHMub25GcmFtZXdvcmtSZWFkeSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNpdGUgZnVuY3Rpb25hbGl0eSByZWFkeVwiKTtcbiAgICAvLyBETyBTT01FVEhJTkdcblxuICAgIG5ldyBDb3VudGRvd24oe1xuICAgICAgICBjb250OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyksXG4gICAgICAgIGVuZERhdGU6IDE1Njg3OTM2MDA1NDQsXG4gICAgICAgIG91dHB1dFRyYW5zbGF0aW9uOiB7XG4gICAgICAgICAgICB5ZWFyOiAnJyxcbiAgICAgICAgICAgIHdlZWs6ICcnLFxuICAgICAgICAgICAgZGF5OiAnRMOtYXMnLFxuICAgICAgICAgICAgaG91cjogJ0hvcmFzJyxcbiAgICAgICAgICAgIG1pbnV0ZTogJ01pbnV0b3MnLFxuICAgICAgICAgICAgc2Vjb25kOiAnU2VndW5kb3MnLFxuICAgICAgICB9LFxuICAgICAgICBlbmRDYWxsYmFjazogbnVsbCxcbiAgICAgICAgb3V0cHV0Rm9ybWF0OiAnZGF5fGhvdXJ8bWludXRlfHNlY29uZCcsXG4gICAgfSkuc3RhcnQoKTtcbn07XG5cblxuXG5cbiIsIi8qXG4gKiBNaWNyb3NpdGVzIHRvb2xzIGpzOlxuICogRXN0ZSBmaWNoZXJvIGVzIHVuYSBtdWVzdHJhIGRlIHV0aWxpZGFkZXMgcHJvcGlhcyBwYXJhIGxvcyBtaWNyb3NpdGVzLlxuICogU2UgcHVlZGUgcGVyc29uYWxpemFyIGEgdHUgZ3VzdG9cbiAqXG4gKi9cblxuXG5jb25zdCBNSUNST1NJVEVfSUQgPSAnI2NvdW50ZXInO1xuY29uc3QgY3NzTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbZGF0YS1taWNyb2Nzc10nKTtcbmNvbnN0IE1JQ1JPU0lURV9TRUxFQ1RJT04gPSBjbG9zZXN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoTUlDUk9TSVRFX0lEKSwgJ1tkYXRhLXBhdGhtaWNyb3NpdGVdJyk7XG5jb25zdCBQQVRIX01JQ1JPU0lURSA9IE1JQ1JPU0lURV9TRUxFQ1RJT04gPyBNSUNST1NJVEVfU0VMRUNUSU9OLmRhdGFzZXQucGF0aG1pY3Jvc2l0ZSA6ICcnO1xubGV0IHdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xubGV0IGlzRGVza3RvcCA9IHdpZHRoID4gOTY5O1xubGV0IGlzVGFibGV0ID0gd2lkdGggPD0gOTY5ICYmIHdpZHRoID49IDc2ODtcbmxldCBpc01vYmlsZSA9IHdpZHRoIDwgNzY4ICYmIHdpZHRoID4gMzAwO1xuXG5cbi8qXG4qIFNlYXJjaGVzIGZvciB0aGUgcGFyZW50IG5vZGUgY2xvc2VzdCB0byB0aGUgZWxlbWVudCwgd2hpY2ggY29tcGxpZXMgd2l0aCB0aGUgc2VsZWN0b3JcbiogQHBhcmFtIHt9IGVsIC0gRGVzY3JpcHRpb25cbiogQHBhcmFtIHt9IHNlbGVjdG9yIC0gRGVzY3JpcHRpb25cbiogQHBhcmFtIHt9IHN0b3BTZWxlY3RvciAtIERlc2NyaXB0aW9uXG4qICovXG5mdW5jdGlvbiBjbG9zZXN0KGVsLCBzZWxlY3Rvciwgc3RvcFNlbGVjdG9yKSB7XG4gICAgbGV0IHJldHZhbCA9IG51bGw7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dmFsID0gZWw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChzdG9wU2VsZWN0b3IgJiYgZWwubWF0Y2hlcyhzdG9wU2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXR2YWw7XG59XG5cblxuLypcbiogUmVtb3ZlcyB0aGUgc3R5bGUgYXR0ciwgb25jZSB0aGUgc3R5bGVzaGVldCBoYXZlIGJlZW4gbG9hZGVkXG4qIHJldHVybiB1bmRlZmluZWRcbiogKi9cbmZ1bmN0aW9uIF9pbnRlcm5hbENTU0luaXQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgIGV4LmNzc0xvYWRlZCA9IHRydWU7XG4gICAgZXgub25TdHlsZXNSZWFkeSgpO1xufVxuXG5cbi8qXG4qIEluaXRpYWxpemVzIGZ1bmN0aW9uYWxpdHkgSlMsIGFuZCBhZHZpY2VzIHdoZW4gSlMgaXMgbG9hZGVkLlxuKiByZXR1cm4gdW5kZWZpbmVkXG4qICovXG5mdW5jdGlvbiBfaW50ZXJuYWxKU0luaXQoKSB7XG4gICAgd2luZG93LnZmZXMuX3V0aWxzLmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpKTtcbiAgICBleC5vbkZyYW1ld29ya1JlYWR5KCk7XG59XG5cblxuLypcbiogQ2hlY2sgaWYgc3R5bGVzaGVldCBDU1MgaXMgbG9hZGVkXG4qIEByZXR1cm4ge2Jvb2xlYW59XG4qICovXG5mdW5jdGlvbiBpc0NTU01pY3JvTG9hZGVkKCkge1xuICAgIGNvbnN0IGRvbVN0eWxlcyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xuICAgIGxldCBjb3VudENTUyA9IDA7XG4gICAgW10uZm9yRWFjaC5jYWxsKGRvbVN0eWxlcywgKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaHJlZiA9IGl0ZW0uaHJlZiB8fCAnJztcbiAgICAgICAgaWYgKGhyZWYuaW5kZXhPZignd3MycicpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1dTMlIgTG9hZGVkJyk7XG4gICAgICAgICAgICBjb3VudENTUysrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChocmVmLmluZGV4T2YoJ21haW4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNQUlOLkNTUyBMb2FkZWQnKTtcbiAgICAgICAgICAgIGNvdW50Q1NTKytcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAoY291bnRDU1MgPT09IDIpO1xufVxuXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgLy8gRE8gU09NRVRISU5HXG59XG5cbi8qXG4qIGxpc3RlbiBldmVudCwgb25jZSBoYXZlIGJlZW4gbG9hZGVkIHRoZSBmaWxlcyBDU1NcbiogKi9cbmlmICghaXNDU1NNaWNyb0xvYWRlZCgpKSB7XG4gICAgY3NzTWFpbi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgX2ludGVybmFsQ1NTSW5pdCk7XG59IGVsc2UgaWYgKGlzQ1NTTWljcm9Mb2FkZWQoKSkge1xuICAgIHNldFRpbWVvdXQoX2ludGVybmFsQ1NTSW5pdCwgMTAwKTtcbn1cblxuXG4vKlxuKiBsaXN0ZW4gZXZlbnQsIG9uY2UgaGF2ZSBiZWVuIGxvYWRlZCB0aGUgZmlsZXMgSlNcbiogKi9cbmlmICh3aW5kb3cudmZlcykge1xuICAgIHNldFRpbWVvdXQoX2ludGVybmFsSlNJbml0LCAxMDApXG59IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZmZXM6ZnJhbWV3b3JrUmVhZHknLCBfaW50ZXJuYWxKU0luaXQpO1xufVxuXG5jb25zdCBleCA9IHtcbiAgICBpc0Rlc2t0b3AsXG4gICAgaXNUYWJsZXQsXG4gICAgaXNNb2JpbGUsXG4gICAgbWljcm9zaXRlSWQ6IE1JQ1JPU0lURV9JRCxcbiAgICBtaWNyb3NpdGVQYXRoOiBQQVRIX01JQ1JPU0lURSxcbiAgICBpbml0OiBpbml0LFxuICAgIGNzc0xvYWRlZDogZmFsc2UsXG4gICAgb25TdHlsZXNSZWFkeTogKCkgPT4gbnVsbCxcbiAgICBvbkZyYW1ld29ya1JlYWR5OiAoKSA9PiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=