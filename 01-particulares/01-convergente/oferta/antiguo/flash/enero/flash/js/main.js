/**
 * Vodafone Reboot Framework: Version 15.5.0. Generation Date: 2020-02-03T07:40:32.067Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../microsites-cbu/01-particulares/01-convergente/oferta/flash/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../microsites-cbu/01-particulares/01-convergente/oferta/flash/resources/scripts/countdown.js":
/*!****************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/01-convergente/oferta/flash/resources/scripts/countdown.js ***!
  \****************************************************************************************************/
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

/***/ "../microsites-cbu/01-particulares/01-convergente/oferta/flash/resources/scripts/main.js":
/*!***********************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/01-convergente/oferta/flash/resources/scripts/main.js ***!
  \***********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../microsites-cbu/01-particulares/01-convergente/oferta/flash/resources/scripts/tools.js");
/* harmony import */ var _countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countdown */ "../microsites-cbu/01-particulares/01-convergente/oferta/flash/resources/scripts/countdown.js");


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
    endDate: "January 21, 2020 10:00:00",
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

/***/ "../microsites-cbu/01-particulares/01-convergente/oferta/flash/resources/scripts/tools.js":
/*!************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/01-convergente/oferta/flash/resources/scripts/tools.js ***!
  \************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL21pY3Jvc2l0ZXMtY2J1LzAxLXBhcnRpY3VsYXJlcy8wMS1jb252ZXJnZW50ZS9vZmVydGEvZmxhc2gvcmVzb3VyY2VzL3NjcmlwdHMvY291bnRkb3duLmpzIiwid2VicGFjazovLy8uLi9taWNyb3NpdGVzLWNidS8wMS1wYXJ0aWN1bGFyZXMvMDEtY29udmVyZ2VudGUvb2ZlcnRhL2ZsYXNoL3Jlc291cmNlcy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4uL21pY3Jvc2l0ZXMtY2J1LzAxLXBhcnRpY3VsYXJlcy8wMS1jb252ZXJnZW50ZS9vZmVydGEvZmxhc2gvcmVzb3VyY2VzL3NjcmlwdHMvdG9vbHMuanMiXSwibmFtZXMiOlsiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJDb3VudGRvd24iLCJvcHQiLCJvcHRpb25zIiwiY29udCIsImVuZERhdGUiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwiZW5kQ2FsbGJhY2siLCJvdXRwdXRGb3JtYXQiLCJvdXRwdXRUcmFuc2xhdGlvbiIsIndlZWsiLCJsYXN0VGljayIsImludGVydmFsc0J5U2l6ZSIsIlRJTUVTVEFNUF9TRUNPTkQiLCJUSU1FU1RBTVBfTUlOVVRFIiwiVElNRVNUQU1QX0hPVVIiLCJUSU1FU1RBTVBfREFZIiwiVElNRVNUQU1QX1dFRUsiLCJUSU1FU1RBTVBfWUVBUiIsImVsZW1lbnRDbGFzc1ByZWZpeCIsImludGVydmFsIiwiZGlnaXRDb250cyIsImxvYWRPcHRpb25zIiwiZ2V0RGF0ZSIsImRhdGUiLCJEYXRlIiwiZXhwZWN0ZWRWYWx1ZXMiLCJpIiwiaGFzT3duUHJvcGVydHkiLCJwcmVwYXJlVGltZUJ5T3V0cHV0Rm9ybWF0IiwiZGF0ZU9iaiIsInVzZWRJbnRlcnZhbHMiLCJ1bmRlZmluZWQiLCJvdXRwdXQiLCJ0aW1lRGlmZiIsImZpbHRlciIsIml0ZW0iLCJzcGxpdCIsImluZGV4T2YiLCJnZXRUaW1lIiwibm93IiwiZm9yRWFjaCIsInZhbHVlIiwiTWF0aCIsInRydW5jIiwibGVuZ3RoIiwiZml4Q29tcGF0aWJpbGl0eSIsIngiLCJpc05hTiIsIk5hTiIsImZsb29yIiwiY2VpbCIsIndyaXRlRGF0YSIsImRhdGEiLCJjb2RlIiwiaW50ZXJ2YWxOYW1lIiwiZWxlbWVudCIsImdldEludGVydmFsQ29udENvbW1vbkNsYXNzTmFtZSIsImdldEludGVydmFsQ29udENsYXNzTmFtZSIsImludGVydmFsRGVzY3JpcHRpb24iLCJkaWdpdCIsImluZGV4IiwiZ2V0RGlnaXRDb250Q29tbW9uQ2xhc3NOYW1lIiwiZ2V0RGlnaXRDb250Q2xhc3NOYW1lIiwiZ2V0RGlnaXRFbGVtZW50U3RyaW5nIiwiaW5uZXJIVE1MIiwibmV3RGlnaXQiLCJsYXN0RGlnaXQiLCJ1cGRhdGVWaWV3IiwiX2xvb3AiLCJnZXREaWdpdENvbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfb3B0aW9ucyIsIl9vcHQiLCJzdGFydCIsImVuZERhdGVEYXRhIiwic2V0SW50ZXJ2YWwiLCJzdG9wIiwiY2xlYXJJbnRlcnZhbCIsInRvb2xzIiwib25TdHlsZXNSZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJvbkZyYW1ld29ya1JlYWR5IiwiTUlDUk9TSVRFX0lEIiwiY3NzTWFpbiIsIk1JQ1JPU0lURV9TRUxFQ1RJT04iLCJjbG9zZXN0IiwiUEFUSF9NSUNST1NJVEUiLCJkYXRhc2V0IiwicGF0aG1pY3Jvc2l0ZSIsIndpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJpc0Rlc2t0b3AiLCJpc1RhYmxldCIsImlzTW9iaWxlIiwiZWwiLCJzZWxlY3RvciIsInN0b3BTZWxlY3RvciIsInJldHZhbCIsIm1hdGNoZXMiLCJwYXJlbnRFbGVtZW50IiwiX2ludGVybmFsQ1NTSW5pdCIsInJlbW92ZUF0dHJpYnV0ZSIsImV4IiwiY3NzTG9hZGVkIiwiX2ludGVybmFsSlNJbml0Iiwid2luZG93IiwidmZlcyIsIl91dGlscyIsImluaXQiLCJpc0NTU01pY3JvTG9hZGVkIiwiZG9tU3R5bGVzIiwic3R5bGVTaGVldHMiLCJjb3VudENTUyIsImNhbGwiLCJocmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJtaWNyb3NpdGVJZCIsIm1pY3Jvc2l0ZVBhdGgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQSxJQUFJQSxPQUFPLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixVQUFsQixJQUFnQyxPQUFPQSxNQUFNLENBQUNDLFFBQWQsS0FBMkIsUUFBM0QsR0FBc0UsVUFBVUMsR0FBVixFQUFlO0FBQUUsU0FBTyxPQUFPQSxHQUFkO0FBQW9CLENBQTNHLEdBQThHLFVBQVVBLEdBQVYsRUFBZTtBQUFFLFNBQU9BLEdBQUcsSUFBSSxPQUFPRixNQUFQLEtBQWtC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Q2JVLFlBQVUsQ0FBQ1osZUFBRCxFQUFrQixHQUFsQixDQUFWO0FBQ0gsQ0FGRCxNQUVPO0FBQ0hyQyxVQUFRLENBQUNnRCxnQkFBVCxDQUEwQixxQkFBMUIsRUFBaURYLGVBQWpEO0FBQ0g7O0FBRUQsTUFBTUYsRUFBRSxHQUFHO0FBQ1BYLFdBRE87QUFFUEMsVUFGTztBQUdQQyxVQUhPO0FBSVB3QixhQUFXLEVBQUVwQyxZQUpOO0FBS1BxQyxlQUFhLEVBQUVqQyxjQUxSO0FBTVB1QixNQUFJLEVBQUVBLElBTkM7QUFPUEwsV0FBUyxFQUFFLEtBUEo7QUFRUDFCLGVBQWEsRUFBRSxNQUFNLElBUmQ7QUFTUEcsa0JBQWdCLEVBQUUsTUFBTTtBQVRqQixDQUFYO0FBWWVzQixpRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi9taWNyb3NpdGVzLWNidS8wMS1wYXJ0aWN1bGFyZXMvMDEtY29udmVyZ2VudGUvb2ZlcnRhL2ZsYXNoL3Jlc291cmNlcy9zY3JpcHRzL21haW4uanNcIik7XG4iLCJcbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBDb3VudGRvd24ob3B0KSB7XG5cbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29udDogbnVsbCxcbiAgICAgICAgICAgIGVuZERhdGU6IHtcbiAgICAgICAgICAgICAgICB5ZWFyOiAwLFxuICAgICAgICAgICAgICAgIG1vbnRoOiAwLFxuICAgICAgICAgICAgICAgIGRheTogMCxcbiAgICAgICAgICAgICAgICBob3VyOiAwLFxuICAgICAgICAgICAgICAgIG1pbnV0ZTogMCxcbiAgICAgICAgICAgICAgICBzZWNvbmQ6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmRDYWxsYmFjazogbnVsbCxcbiAgICAgICAgICAgIG91dHB1dEZvcm1hdDogJ3llYXJ8d2Vla3xkYXl8aG91cnxtaW51dGV8c2Vjb25kJyxcbiAgICAgICAgICAgIG91dHB1dFRyYW5zbGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgeWVhcjogJ1Jva3knLFxuICAgICAgICAgICAgICAgIHdlZWs6ICdUw71kbnknLFxuICAgICAgICAgICAgICAgIGRheTogJ0RueScsXG4gICAgICAgICAgICAgICAgaG91cjogJ0hvZGluJyxcbiAgICAgICAgICAgICAgICBtaW51dGU6ICdNaW51dCcsXG4gICAgICAgICAgICAgICAgc2Vjb25kOiAnVnRlxZlpbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbGFzdFRpY2sgPSBudWxsLFxuICAgICAgICBpbnRlcnZhbHNCeVNpemUgPSBbJ3llYXInLCAnd2VlaycsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJ10sXG4gICAgICAgIFRJTUVTVEFNUF9TRUNPTkQgPSAxMDAwLFxuICAgICAgICBUSU1FU1RBTVBfTUlOVVRFID0gNjAgKiBUSU1FU1RBTVBfU0VDT05ELFxuICAgICAgICBUSU1FU1RBTVBfSE9VUiA9IDYwICogVElNRVNUQU1QX01JTlVURSxcbiAgICAgICAgVElNRVNUQU1QX0RBWSA9IDI0ICogVElNRVNUQU1QX0hPVVIsXG4gICAgICAgIFRJTUVTVEFNUF9XRUVLID0gNyAqIFRJTUVTVEFNUF9EQVksXG4gICAgICAgIFRJTUVTVEFNUF9ZRUFSID0gMzY1ICogVElNRVNUQU1QX0RBWSxcbiAgICAgICAgZWxlbWVudENsYXNzUHJlZml4ID0gJ2NvdW50RG93bl8nLFxuICAgICAgICBpbnRlcnZhbCA9IG51bGwsXG4gICAgICAgIGRpZ2l0Q29udHMgPSB7fTtcblxuICAgIGxvYWRPcHRpb25zKG9wdGlvbnMsIG9wdCk7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZGF0ZVxuICAgICAqIEByZXR1cm5zIHtEYXRlfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldERhdGUoZGF0ZSkge1xuICAgICAgICBpZiAoKHR5cGVvZiBkYXRlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRlKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGV4cGVjdGVkVmFsdWVzID0ge1xuICAgICAgICAgICAgICAgICAgICBkYXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoOiAwLFxuICAgICAgICAgICAgICAgICAgICB5ZWFyOiAwLFxuICAgICAgICAgICAgICAgICAgICBob3VyOiAwLFxuICAgICAgICAgICAgICAgICAgICBtaW51dGU6IDAsXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZDogMFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleHBlY3RlZFZhbHVlcy5oYXNPd25Qcm9wZXJ0eShpKSAmJiBkYXRlLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFZhbHVlc1tpXSA9IGRhdGVbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZXhwZWN0ZWRWYWx1ZXMueWVhciwgZXhwZWN0ZWRWYWx1ZXMubW9udGggPiAwID8gZXhwZWN0ZWRWYWx1ZXMubW9udGggLSAxIDogZXhwZWN0ZWRWYWx1ZXMubW9udGgsIGV4cGVjdGVkVmFsdWVzLmRheSwgZXhwZWN0ZWRWYWx1ZXMuaG91ciwgZXhwZWN0ZWRWYWx1ZXMubWludXRlLCBleHBlY3RlZFZhbHVlcy5zZWNvbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRlID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqXG4gICAgICogQHJldHVybiB7b2JqZWN0fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHByZXBhcmVUaW1lQnlPdXRwdXRGb3JtYXQoZGF0ZU9iaikge1xuICAgICAgICB2YXIgdXNlZEludGVydmFscyA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG91dHB1dCA9IHt9LFxuICAgICAgICAgICAgdGltZURpZmYgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdXNlZEludGVydmFscyA9IGludGVydmFsc0J5U2l6ZS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLm91dHB1dEZvcm1hdC5zcGxpdCgnfCcpLmluZGV4T2YoaXRlbSkgIT09IC0xO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aW1lRGlmZiA9IGRhdGVPYmouZ2V0VGltZSgpIC0gRGF0ZS5ub3coKTtcblxuICAgICAgICB1c2VkSW50ZXJ2YWxzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICh0aW1lRGlmZiA+IDApIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgudHJ1bmModGltZURpZmYgLyBUSU1FU1RBTVBfWUVBUik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9ZRUFSO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX1dFRUspO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZURpZmYgLT0gdmFsdWUgKiBUSU1FU1RBTVBfV0VFSztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX0RBWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9EQVk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgudHJ1bmModGltZURpZmYgLyBUSU1FU1RBTVBfSE9VUik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9IT1VSO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgudHJ1bmModGltZURpZmYgLyBUSU1FU1RBTVBfTUlOVVRFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmIC09IHZhbHVlICogVElNRVNUQU1QX01JTlVURTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX1NFQ09ORCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9TRUNPTkQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gJzAwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dHB1dFtpdGVtXSA9ICgoJycgKyB2YWx1ZSkubGVuZ3RoIDwgMiA/ICcwJyArIHZhbHVlIDogJycgKyB2YWx1ZSkuc3BsaXQoJycpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpeENvbXBhdGliaWxpdHkoKSB7XG4gICAgICAgIE1hdGgudHJ1bmMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKHgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh4KTtcbiAgICAgICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd3JpdGVEYXRhKGRhdGEpIHtcbiAgICAgICAgdmFyIGNvZGUgPSAnPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnY29udFwiPicsXG4gICAgICAgICAgICBpbnRlcnZhbE5hbWUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZm9yIChpbnRlcnZhbE5hbWUgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaW50ZXJ2YWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJzxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ19pbnRlcnZhbF9iYXNpY19jb250XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgKyBnZXRJbnRlcnZhbENvbnRDb21tb25DbGFzc05hbWUoKSArICcgJyArIGdldEludGVydmFsQ29udENsYXNzTmFtZShpbnRlcnZhbE5hbWUpICsgJ1wiPicsXG4gICAgICAgICAgICAgICAgICAgIGludGVydmFsRGVzY3JpcHRpb24gPSAnPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnaW50ZXJ2YWxfYmFzaWNfY29udF9kZXNjcmlwdGlvblwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgKyBvcHRpb25zLm91dHB1dFRyYW5zbGF0aW9uW2ludGVydmFsTmFtZV0gKyAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICAgICAgICAgIGRhdGFbaW50ZXJ2YWxOYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChkaWdpdCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCArPSAnPGRpdiBjbGFzcz1cIicgKyBnZXREaWdpdENvbnRDb21tb25DbGFzc05hbWUoKSArICcgJyArIGdldERpZ2l0Q29udENsYXNzTmFtZShpbmRleCkgKyAnXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgKyBnZXREaWdpdEVsZW1lbnRTdHJpbmcoZGlnaXQsIDApICsgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb2RlICs9IGVsZW1lbnQgKyAnPC9kaXY+JyArIGludGVydmFsRGVzY3JpcHRpb24gKyAnPC9kaXY+JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuY29udC5pbm5lckhUTUwgPSBjb2RlICsgJzwvZGl2Pic7XG4gICAgICAgIGxhc3RUaWNrID0gZGF0YTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREaWdpdEVsZW1lbnRTdHJpbmcobmV3RGlnaXQsIGxhc3REaWdpdCkge1xuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2RpZ2l0X2xhc3RfcGxhY2Vob2xkZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9sYXN0X3BsYWNlaG9sZGVyX2lubmVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgKyBsYXN0RGlnaXQgKyAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2RpZ2l0X25ld19wbGFjZWhvbGRlclwiPicgKyBuZXdEaWdpdCArICc8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2RpZ2l0X2xhc3Rfcm90YXRlXCI+JyArIGxhc3REaWdpdCArICc8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2RpZ2l0X25ld19yb3RhdGVcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9uZXdfcm90YXRlZFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9uZXdfcm90YXRlZF9pbm5lclwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyArIG5ld0RpZ2l0ICsgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVmlldyhkYXRhKSB7XG4gICAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGludGVydmFsTmFtZSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaW50ZXJ2YWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIGRhdGFbaW50ZXJ2YWxOYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChkaWdpdCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RUaWNrICE9PSBudWxsICYmIGxhc3RUaWNrW2ludGVydmFsTmFtZV1baW5kZXhdICE9PSBkYXRhW2ludGVydmFsTmFtZV1baW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXREaWdpdENvbnQoaW50ZXJ2YWxOYW1lLCBpbmRleCkuaW5uZXJIVE1MID0gZ2V0RGlnaXRFbGVtZW50U3RyaW5nKGRhdGFbaW50ZXJ2YWxOYW1lXVtpbmRleF0sIGxhc3RUaWNrW2ludGVydmFsTmFtZV1baW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAodmFyIGludGVydmFsTmFtZSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBfbG9vcChpbnRlcnZhbE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdFRpY2sgPSBkYXRhO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERpZ2l0Q29udChpbnRlcnZhbE5hbWUsIGluZGV4KSB7XG4gICAgICAgIGlmICghZGlnaXRDb250c1tpbnRlcnZhbE5hbWUgKyAnXycgKyBpbmRleF0pIHtcbiAgICAgICAgICAgIGRpZ2l0Q29udHNbaW50ZXJ2YWxOYW1lICsgJ18nICsgaW5kZXhdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBnZXRJbnRlcnZhbENvbnRDbGFzc05hbWUoaW50ZXJ2YWxOYW1lKSArICcgLicgKyBnZXREaWdpdENvbnRDbGFzc05hbWUoaW5kZXgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaWdpdENvbnRzW2ludGVydmFsTmFtZSArICdfJyArIGluZGV4XTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbnRlcnZhbENvbnRDbGFzc05hbWUoaW50ZXJ2YWxOYW1lKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50Q2xhc3NQcmVmaXggKyAnaW50ZXJ2YWxfY29udF8nICsgaW50ZXJ2YWxOYW1lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEludGVydmFsQ29udENvbW1vbkNsYXNzTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRDbGFzc1ByZWZpeCArICdpbnRlcnZhbF9jb250JztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREaWdpdENvbnRDbGFzc05hbWUoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9jb250XycgKyBpbmRleDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREaWdpdENvbnRDb21tb25DbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfY29udCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZE9wdGlvbnMoX29wdGlvbnMsIF9vcHQpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBfb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKF9vcHRpb25zLmhhc093blByb3BlcnR5KGkpICYmIF9vcHQuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoX29wdGlvbnNbaV0gIT09IG51bGwgJiYgX3R5cGVvZihfb3B0aW9uc1tpXSkgPT09ICdvYmplY3QnICYmIF90eXBlb2YoX29wdFtpXSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRPcHRpb25zKF9vcHRpb25zW2ldLCBfb3B0W2ldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfb3B0aW9uc1tpXSA9IF9vcHRbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHZhciBlbmREYXRlID0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgZW5kRGF0ZURhdGEgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZml4Q29tcGF0aWJpbGl0eSgpO1xuXG4gICAgICAgIGVuZERhdGUgPSBnZXREYXRlKG9wdGlvbnMuZW5kRGF0ZSk7XG5cbiAgICAgICAgZW5kRGF0ZURhdGEgPSBwcmVwYXJlVGltZUJ5T3V0cHV0Rm9ybWF0KGVuZERhdGUpO1xuXG4gICAgICAgIHdyaXRlRGF0YShlbmREYXRlRGF0YSk7XG5cbiAgICAgICAgbGFzdFRpY2sgPSBlbmREYXRlRGF0YTtcblxuICAgICAgICBpZiAoZW5kRGF0ZS5nZXRUaW1lKCkgPD0gRGF0ZS5ub3coKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmVuZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5lbmRDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlVmlldyhwcmVwYXJlVGltZUJ5T3V0cHV0Rm9ybWF0KGVuZERhdGUpKTtcbiAgICAgICAgICAgIH0sIFRJTUVTVEFNUF9TRUNPTkQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgaWYgKGludGVydmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgICAgc3RvcDogc3RvcFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93bjsiLCJpbXBvcnQgdG9vbHMgZnJvbSAnLi90b29scyc7XG5pbXBvcnQgQ291bnRkb3duIGZyb20gJy4vY291bnRkb3duJztcblxuXG4vKlxuKiAgIE3DqXRvZG8gcXVlIHNlIGRpc3BhcmEgY3VhbmRvIGVsIHdzMnIudlguY3NzXG4qICAgeWEgc2UgaGEgY2FyZ2FkbyB5IGhhIHBpbnRhZG8gbGEgd2ViXG4qICovXG50b29scy5vblN0eWxlc1JlYWR5ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2l0ZSB2aXN1YWxseSByZWFkeVwiKTtcbiAgICAvLyBETyBTT01FVEhJTkdcblxuXG59O1xuXG5cbi8qXG4qICAgTcOpdG9kbyBxdWUgc2UgZGlzcGFyYSBjdWFuZG8gZWwgd3Myci52WC5qc1xuKiAgIHlhIHNlIGhhIGNhcmdhZG8geSBlc3TDoSBkaXBvbmlibGUuXG4qICovXG50b29scy5vbkZyYW1ld29ya1JlYWR5ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2l0ZSBmdW5jdGlvbmFsaXR5IHJlYWR5XCIpO1xuICAgIC8vIERPIFNPTUVUSElOR1xuXG4gICAgbmV3IENvdW50ZG93bih7XG4gICAgICAgIGNvbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKSxcbiAgICAgICAgZW5kRGF0ZTogXCJKYW51YXJ5IDIxLCAyMDIwIDEwOjAwOjAwXCIsXG4gICAgICAgIG91dHB1dFRyYW5zbGF0aW9uOiB7XG4gICAgICAgICAgICB5ZWFyOiAnJyxcbiAgICAgICAgICAgIHdlZWs6ICcnLFxuICAgICAgICAgICAgZGF5OiAnRMOtYXMnLFxuICAgICAgICAgICAgaG91cjogJ0hvcmFzJyxcbiAgICAgICAgICAgIG1pbnV0ZTogJ01pbnV0b3MnLFxuICAgICAgICAgICAgc2Vjb25kOiAnU2VndW5kb3MnLFxuICAgICAgICB9LFxuICAgICAgICBlbmRDYWxsYmFjazogbnVsbCxcbiAgICAgICAgb3V0cHV0Rm9ybWF0OiAnZGF5fGhvdXJ8bWludXRlfHNlY29uZCcsXG4gICAgfSkuc3RhcnQoKTtcblxufTtcblxuXG5cblxuIiwiLypcbiAqIE1pY3Jvc2l0ZXMgdG9vbHMganM6XG4gKiBFc3RlIGZpY2hlcm8gZXMgdW5hIG11ZXN0cmEgZGUgdXRpbGlkYWRlcyBwcm9waWFzIHBhcmEgbG9zIG1pY3Jvc2l0ZXMuXG4gKiBTZSBwdWVkZSBwZXJzb25hbGl6YXIgYSB0dSBndXN0b1xuICpcbiAqL1xuXG5cbmNvbnN0IE1JQ1JPU0lURV9JRCA9ICcjZmxhc2gnO1xuY29uc3QgY3NzTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbZGF0YS1taWNyb2Nzc10nKTtcbmNvbnN0IE1JQ1JPU0lURV9TRUxFQ1RJT04gPSBjbG9zZXN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoTUlDUk9TSVRFX0lEKSwgJ1tkYXRhLXBhdGhtaWNyb3NpdGVdJyk7XG5jb25zdCBQQVRIX01JQ1JPU0lURSA9IE1JQ1JPU0lURV9TRUxFQ1RJT04gPyBNSUNST1NJVEVfU0VMRUNUSU9OLmRhdGFzZXQucGF0aG1pY3Jvc2l0ZSA6ICcnO1xubGV0IHdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xubGV0IGlzRGVza3RvcCA9IHdpZHRoID4gOTY5O1xubGV0IGlzVGFibGV0ID0gd2lkdGggPD0gOTY5ICYmIHdpZHRoID49IDc2ODtcbmxldCBpc01vYmlsZSA9IHdpZHRoIDwgNzY4ICYmIHdpZHRoID4gMzAwO1xuXG5cbi8qXG4qIFNlYXJjaGVzIGZvciB0aGUgcGFyZW50IG5vZGUgY2xvc2VzdCB0byB0aGUgZWxlbWVudCwgd2hpY2ggY29tcGxpZXMgd2l0aCB0aGUgc2VsZWN0b3JcbiogQHBhcmFtIHt9IGVsIC0gRGVzY3JpcHRpb25cbiogQHBhcmFtIHt9IHNlbGVjdG9yIC0gRGVzY3JpcHRpb25cbiogQHBhcmFtIHt9IHN0b3BTZWxlY3RvciAtIERlc2NyaXB0aW9uXG4qICovXG5mdW5jdGlvbiBjbG9zZXN0KGVsLCBzZWxlY3Rvciwgc3RvcFNlbGVjdG9yKSB7XG4gICAgbGV0IHJldHZhbCA9IG51bGw7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dmFsID0gZWw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChzdG9wU2VsZWN0b3IgJiYgZWwubWF0Y2hlcyhzdG9wU2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXR2YWw7XG59XG5cblxuLypcbiogUmVtb3ZlcyB0aGUgc3R5bGUgYXR0ciwgb25jZSB0aGUgc3R5bGVzaGVldCBoYXZlIGJlZW4gbG9hZGVkXG4qIHJldHVybiB1bmRlZmluZWRcbiogKi9cbmZ1bmN0aW9uIF9pbnRlcm5hbENTU0luaXQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgIGV4LmNzc0xvYWRlZCA9IHRydWU7XG4gICAgZXgub25TdHlsZXNSZWFkeSgpO1xufVxuXG5cbi8qXG4qIEluaXRpYWxpemVzIGZ1bmN0aW9uYWxpdHkgSlMsIGFuZCBhZHZpY2VzIHdoZW4gSlMgaXMgbG9hZGVkLlxuKiByZXR1cm4gdW5kZWZpbmVkXG4qICovXG5mdW5jdGlvbiBfaW50ZXJuYWxKU0luaXQoKSB7XG4gICAgd2luZG93LnZmZXMuX3V0aWxzLmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpKTtcbiAgICBleC5vbkZyYW1ld29ya1JlYWR5KCk7XG59XG5cblxuLypcbiogQ2hlY2sgaWYgc3R5bGVzaGVldCBDU1MgaXMgbG9hZGVkXG4qIEByZXR1cm4ge2Jvb2xlYW59XG4qICovXG5mdW5jdGlvbiBpc0NTU01pY3JvTG9hZGVkKCkge1xuICAgIGNvbnN0IGRvbVN0eWxlcyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xuICAgIGxldCBjb3VudENTUyA9IDA7XG4gICAgW10uZm9yRWFjaC5jYWxsKGRvbVN0eWxlcywgKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaHJlZiA9IGl0ZW0uaHJlZiB8fCAnJztcbiAgICAgICAgaWYgKGhyZWYuaW5kZXhPZignd3MycicpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1dTMlIgTG9hZGVkJyk7XG4gICAgICAgICAgICBjb3VudENTUysrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChocmVmLmluZGV4T2YoJ21haW4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNQUlOLkNTUyBMb2FkZWQnKTtcbiAgICAgICAgICAgIGNvdW50Q1NTKytcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAoY291bnRDU1MgPT09IDIpO1xufVxuXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgLy8gRE8gU09NRVRISU5HXG59XG5cbi8qXG4qIGxpc3RlbiBldmVudCwgb25jZSBoYXZlIGJlZW4gbG9hZGVkIHRoZSBmaWxlcyBDU1NcbiogKi9cbmlmICghaXNDU1NNaWNyb0xvYWRlZCgpKSB7XG4gICAgY3NzTWFpbi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgX2ludGVybmFsQ1NTSW5pdCk7XG59IGVsc2UgaWYgKGlzQ1NTTWljcm9Mb2FkZWQoKSkge1xuICAgIHNldFRpbWVvdXQoX2ludGVybmFsQ1NTSW5pdCwgMTAwKTtcbn1cblxuXG4vKlxuKiBsaXN0ZW4gZXZlbnQsIG9uY2UgaGF2ZSBiZWVuIGxvYWRlZCB0aGUgZmlsZXMgSlNcbiogKi9cbmlmICh3aW5kb3cudmZlcykge1xuICAgIHNldFRpbWVvdXQoX2ludGVybmFsSlNJbml0LCAxMDApXG59IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZmZXM6ZnJhbWV3b3JrUmVhZHknLCBfaW50ZXJuYWxKU0luaXQpO1xufVxuXG5jb25zdCBleCA9IHtcbiAgICBpc0Rlc2t0b3AsXG4gICAgaXNUYWJsZXQsXG4gICAgaXNNb2JpbGUsXG4gICAgbWljcm9zaXRlSWQ6IE1JQ1JPU0lURV9JRCxcbiAgICBtaWNyb3NpdGVQYXRoOiBQQVRIX01JQ1JPU0lURSxcbiAgICBpbml0OiBpbml0LFxuICAgIGNzc0xvYWRlZDogZmFsc2UsXG4gICAgb25TdHlsZXNSZWFkeTogKCkgPT4gbnVsbCxcbiAgICBvbkZyYW1ld29ya1JlYWR5OiAoKSA9PiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=