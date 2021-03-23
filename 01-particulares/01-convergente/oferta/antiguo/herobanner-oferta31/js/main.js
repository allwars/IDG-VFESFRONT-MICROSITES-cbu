/**
<<<<<<< HEAD
 * Vodafone Reboot Framework: Version 15.5.0. Generation Date: 2020-02-13T08:53:54.943Z
=======
 * Vodafone Reboot Framework: Version 15.6.0. Generation Date: 2020-02-13T13:03:23.714Z
>>>>>>> fdd7e36c78ce6dde84ba08c099480f6b7c8a0841
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../microsites-cbu/01-particulares/01-convergente/oferta/herobanner-oferta31/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../microsites-cbu/01-particulares/01-convergente/oferta/herobanner-oferta31/resources/scripts/countdown.js":
/*!******************************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/01-convergente/oferta/herobanner-oferta31/resources/scripts/countdown.js ***!
  \******************************************************************************************************************/
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

/***/ "../microsites-cbu/01-particulares/01-convergente/oferta/herobanner-oferta31/resources/scripts/main.js":
/*!*************************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/01-convergente/oferta/herobanner-oferta31/resources/scripts/main.js ***!
  \*************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../microsites-cbu/01-particulares/01-convergente/oferta/herobanner-oferta31/resources/scripts/tools.js");
/* harmony import */ var _countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countdown */ "../microsites-cbu/01-particulares/01-convergente/oferta/herobanner-oferta31/resources/scripts/countdown.js");


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

/***/ "../microsites-cbu/01-particulares/01-convergente/oferta/herobanner-oferta31/resources/scripts/tools.js":
/*!**************************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/01-convergente/oferta/herobanner-oferta31/resources/scripts/tools.js ***!
  \**************************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL21pY3Jvc2l0ZXMtY2J1LzAxLXBhcnRpY3VsYXJlcy8wMS1jb252ZXJnZW50ZS9vZmVydGEvaGVyb2Jhbm5lci1vZmVydGEzMS9yZXNvdXJjZXMvc2NyaXB0cy9jb3VudGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4uL21pY3Jvc2l0ZXMtY2J1LzAxLXBhcnRpY3VsYXJlcy8wMS1jb252ZXJnZW50ZS9vZmVydGEvaGVyb2Jhbm5lci1vZmVydGEzMS9yZXNvdXJjZXMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovLy8uLi9taWNyb3NpdGVzLWNidS8wMS1wYXJ0aWN1bGFyZXMvMDEtY29udmVyZ2VudGUvb2ZlcnRhL2hlcm9iYW5uZXItb2ZlcnRhMzEvcmVzb3VyY2VzL3NjcmlwdHMvdG9vbHMuanMiXSwibmFtZXMiOlsiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJDb3VudGRvd24iLCJvcHQiLCJvcHRpb25zIiwiY29udCIsImVuZERhdGUiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwiZW5kQ2FsbGJhY2siLCJvdXRwdXRGb3JtYXQiLCJvdXRwdXRUcmFuc2xhdGlvbiIsIndlZWsiLCJsYXN0VGljayIsImludGVydmFsc0J5U2l6ZSIsIlRJTUVTVEFNUF9TRUNPTkQiLCJUSU1FU1RBTVBfTUlOVVRFIiwiVElNRVNUQU1QX0hPVVIiLCJUSU1FU1RBTVBfREFZIiwiVElNRVNUQU1QX1dFRUsiLCJUSU1FU1RBTVBfWUVBUiIsImVsZW1lbnRDbGFzc1ByZWZpeCIsImludGVydmFsIiwiZGlnaXRDb250cyIsImxvYWRPcHRpb25zIiwiZ2V0RGF0ZSIsImRhdGUiLCJEYXRlIiwiZXhwZWN0ZWRWYWx1ZXMiLCJpIiwiaGFzT3duUHJvcGVydHkiLCJwcmVwYXJlVGltZUJ5T3V0cHV0Rm9ybWF0IiwiZGF0ZU9iaiIsInVzZWRJbnRlcnZhbHMiLCJ1bmRlZmluZWQiLCJvdXRwdXQiLCJ0aW1lRGlmZiIsImZpbHRlciIsIml0ZW0iLCJzcGxpdCIsImluZGV4T2YiLCJnZXRUaW1lIiwibm93IiwiZm9yRWFjaCIsInZhbHVlIiwiTWF0aCIsInRydW5jIiwibGVuZ3RoIiwiZml4Q29tcGF0aWJpbGl0eSIsIngiLCJpc05hTiIsIk5hTiIsImZsb29yIiwiY2VpbCIsIndyaXRlRGF0YSIsImRhdGEiLCJjb2RlIiwiaW50ZXJ2YWxOYW1lIiwiZWxlbWVudCIsImdldEludGVydmFsQ29udENvbW1vbkNsYXNzTmFtZSIsImdldEludGVydmFsQ29udENsYXNzTmFtZSIsImludGVydmFsRGVzY3JpcHRpb24iLCJkaWdpdCIsImluZGV4IiwiZ2V0RGlnaXRDb250Q29tbW9uQ2xhc3NOYW1lIiwiZ2V0RGlnaXRDb250Q2xhc3NOYW1lIiwiZ2V0RGlnaXRFbGVtZW50U3RyaW5nIiwiaW5uZXJIVE1MIiwibmV3RGlnaXQiLCJsYXN0RGlnaXQiLCJ1cGRhdGVWaWV3IiwiX2xvb3AiLCJnZXREaWdpdENvbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfb3B0aW9ucyIsIl9vcHQiLCJzdGFydCIsImVuZERhdGVEYXRhIiwic2V0SW50ZXJ2YWwiLCJzdG9wIiwiY2xlYXJJbnRlcnZhbCIsInRvb2xzIiwib25TdHlsZXNSZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJvbkZyYW1ld29ya1JlYWR5IiwiTUlDUk9TSVRFX0lEIiwiY3NzTWFpbiIsIk1JQ1JPU0lURV9TRUxFQ1RJT04iLCJjbG9zZXN0IiwiUEFUSF9NSUNST1NJVEUiLCJkYXRhc2V0IiwicGF0aG1pY3Jvc2l0ZSIsIndpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJpc0Rlc2t0b3AiLCJpc1RhYmxldCIsImlzTW9iaWxlIiwiZWwiLCJzZWxlY3RvciIsInN0b3BTZWxlY3RvciIsInJldHZhbCIsIm1hdGNoZXMiLCJwYXJlbnRFbGVtZW50IiwiX2ludGVybmFsQ1NTSW5pdCIsInJlbW92ZUF0dHJpYnV0ZSIsImV4IiwiY3NzTG9hZGVkIiwiX2ludGVybmFsSlNJbml0Iiwid2luZG93IiwidmZlcyIsIl91dGlscyIsImluaXQiLCJpc0NTU01pY3JvTG9hZGVkIiwiZG9tU3R5bGVzIiwic3R5bGVTaGVldHMiLCJjb3VudENTUyIsImNhbGwiLCJocmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJtaWNyb3NpdGVJZCIsIm1pY3Jvc2l0ZVBhdGgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQSxJQUFJQSxPQUFPLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixVQUFsQixJQUFnQyxPQUFPQSxNQUFNLENBQUNDLFFBQWQsS0FBMkIsUUFBM0QsR0FBc0UsVUFBVUMsR0FBVixFQUFlO0FBQUUsU0FBTyxPQUFPQSxHQUFkO0FBQW9CLENBQTNHLEdBQThHLFVBQVVBLEdBQVYs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R0Q7Ozs7O0FBR0EsSUFBSUssTUFBTSxDQUFDQyxJQUFYLEVBQWlCO0FBQ2JVLFlBQVUsQ0FBQ1osZUFBRCxFQUFrQixHQUFsQixDQUFWO0FBQ0gsQ0FGRCxNQUVPO0FBQ0hyQyxVQUFRLENBQUNnRCxnQkFBVCxDQUEwQixxQkFBMUIsRUFBaURYLGVBQWpEO0FBQ0g7O0FBRUQsTUFBTUYsRUFBRSxHQUFHO0FBQ1BYLFdBRE87QUFFUEMsVUFGTztBQUdQQyxVQUhPO0FBSVB3QixhQUFXLEVBQUVwQyxZQUpOO0FBS1BxQyxlQUFhLEVBQUVqQyxjQUxSO0FBTVB1QixNQUFJLEVBQUVBLElBTkM7QUFPUEwsV0FBUyxFQUFFLEtBUEo7QUFRUDFCLGVBQWEsRUFBRSxNQUFNLElBUmQ7QUFTUEcsa0JBQWdCLEVBQUUsTUFBTTtBQVRqQixDQUFYO0FBWWVzQixpRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi9taWNyb3NpdGVzLWNidS8wMS1wYXJ0aWN1bGFyZXMvMDEtY29udmVyZ2VudGUvb2ZlcnRhL2hlcm9iYW5uZXItb2ZlcnRhMzEvcmVzb3VyY2VzL3NjcmlwdHMvbWFpbi5qc1wiKTtcbiIsIlxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIENvdW50ZG93bihvcHQpIHtcblxuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250OiBudWxsLFxuICAgICAgICAgICAgZW5kRGF0ZToge1xuICAgICAgICAgICAgICAgIHllYXI6IDAsXG4gICAgICAgICAgICAgICAgbW9udGg6IDAsXG4gICAgICAgICAgICAgICAgZGF5OiAwLFxuICAgICAgICAgICAgICAgIGhvdXI6IDAsXG4gICAgICAgICAgICAgICAgbWludXRlOiAwLFxuICAgICAgICAgICAgICAgIHNlY29uZDogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZENhbGxiYWNrOiBudWxsLFxuICAgICAgICAgICAgb3V0cHV0Rm9ybWF0OiAneWVhcnx3ZWVrfGRheXxob3VyfG1pbnV0ZXxzZWNvbmQnLFxuICAgICAgICAgICAgb3V0cHV0VHJhbnNsYXRpb246IHtcbiAgICAgICAgICAgICAgICB5ZWFyOiAnUm9reScsXG4gICAgICAgICAgICAgICAgd2VlazogJ1TDvWRueScsXG4gICAgICAgICAgICAgICAgZGF5OiAnRG55JyxcbiAgICAgICAgICAgICAgICBob3VyOiAnSG9kaW4nLFxuICAgICAgICAgICAgICAgIG1pbnV0ZTogJ01pbnV0JyxcbiAgICAgICAgICAgICAgICBzZWNvbmQ6ICdWdGXFmWluJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsYXN0VGljayA9IG51bGwsXG4gICAgICAgIGludGVydmFsc0J5U2l6ZSA9IFsneWVhcicsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnXSxcbiAgICAgICAgVElNRVNUQU1QX1NFQ09ORCA9IDEwMDAsXG4gICAgICAgIFRJTUVTVEFNUF9NSU5VVEUgPSA2MCAqIFRJTUVTVEFNUF9TRUNPTkQsXG4gICAgICAgIFRJTUVTVEFNUF9IT1VSID0gNjAgKiBUSU1FU1RBTVBfTUlOVVRFLFxuICAgICAgICBUSU1FU1RBTVBfREFZID0gMjQgKiBUSU1FU1RBTVBfSE9VUixcbiAgICAgICAgVElNRVNUQU1QX1dFRUsgPSA3ICogVElNRVNUQU1QX0RBWSxcbiAgICAgICAgVElNRVNUQU1QX1lFQVIgPSAzNjUgKiBUSU1FU1RBTVBfREFZLFxuICAgICAgICBlbGVtZW50Q2xhc3NQcmVmaXggPSAnY291bnREb3duXycsXG4gICAgICAgIGludGVydmFsID0gbnVsbCxcbiAgICAgICAgZGlnaXRDb250cyA9IHt9O1xuXG4gICAgbG9hZE9wdGlvbnMob3B0aW9ucywgb3B0KTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBkYXRlXG4gICAgICogQHJldHVybnMge0RhdGV9XG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0RGF0ZShkYXRlKSB7XG4gICAgICAgIGlmICgodHlwZW9mIGRhdGUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGUpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZXhwZWN0ZWRWYWx1ZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRheTogMCxcbiAgICAgICAgICAgICAgICAgICAgbW9udGg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHllYXI6IDAsXG4gICAgICAgICAgICAgICAgICAgIGhvdXI6IDAsXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogMCxcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kOiAwXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGVjdGVkVmFsdWVzLmhhc093blByb3BlcnR5KGkpICYmIGRhdGUuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkVmFsdWVzW2ldID0gZGF0ZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShleHBlY3RlZFZhbHVlcy55ZWFyLCBleHBlY3RlZFZhbHVlcy5tb250aCA+IDAgPyBleHBlY3RlZFZhbHVlcy5tb250aCAtIDEgOiBleHBlY3RlZFZhbHVlcy5tb250aCwgZXhwZWN0ZWRWYWx1ZXMuZGF5LCBleHBlY3RlZFZhbHVlcy5ob3VyLCBleHBlY3RlZFZhbHVlcy5taW51dGUsIGV4cGVjdGVkVmFsdWVzLnNlY29uZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGUgPT09ICdudW1iZXInIHx8IHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGVPYmpcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAgICovXG4gICAgZnVuY3Rpb24gcHJlcGFyZVRpbWVCeU91dHB1dEZvcm1hdChkYXRlT2JqKSB7XG4gICAgICAgIHZhciB1c2VkSW50ZXJ2YWxzID0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgb3V0cHV0ID0ge30sXG4gICAgICAgICAgICB0aW1lRGlmZiA9IHVuZGVmaW5lZDtcblxuICAgICAgICB1c2VkSW50ZXJ2YWxzID0gaW50ZXJ2YWxzQnlTaXplLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMub3V0cHV0Rm9ybWF0LnNwbGl0KCd8JykuaW5kZXhPZihpdGVtKSAhPT0gLTE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRpbWVEaWZmID0gZGF0ZU9iai5nZXRUaW1lKCkgLSBEYXRlLm5vdygpO1xuXG4gICAgICAgIHVzZWRJbnRlcnZhbHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHRpbWVEaWZmID4gMCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC50cnVuYyh0aW1lRGlmZiAvIFRJTUVTVEFNUF9ZRUFSKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmIC09IHZhbHVlICogVElNRVNUQU1QX1lFQVI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgudHJ1bmModGltZURpZmYgLyBUSU1FU1RBTVBfV0VFSyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9XRUVLO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgudHJ1bmModGltZURpZmYgLyBUSU1FU1RBTVBfREFZKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmIC09IHZhbHVlICogVElNRVNUQU1QX0RBWTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC50cnVuYyh0aW1lRGlmZiAvIFRJTUVTVEFNUF9IT1VSKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmIC09IHZhbHVlICogVElNRVNUQU1QX0hPVVI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC50cnVuYyh0aW1lRGlmZiAvIFRJTUVTVEFNUF9NSU5VVEUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZURpZmYgLT0gdmFsdWUgKiBUSU1FU1RBTVBfTUlOVVRFO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgudHJ1bmModGltZURpZmYgLyBUSU1FU1RBTVBfU0VDT05EKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmIC09IHZhbHVlICogVElNRVNUQU1QX1NFQ09ORDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAnMDAnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0cHV0W2l0ZW1dID0gKCgnJyArIHZhbHVlKS5sZW5ndGggPCAyID8gJzAnICsgdmFsdWUgOiAnJyArIHZhbHVlKS5zcGxpdCgnJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZml4Q29tcGF0aWJpbGl0eSgpIHtcbiAgICAgICAgTWF0aC50cnVuYyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4oeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHgpO1xuICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3cml0ZURhdGEoZGF0YSkge1xuICAgICAgICB2YXIgY29kZSA9ICc8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdjb250XCI+JyxcbiAgICAgICAgICAgIGludGVydmFsTmFtZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICBmb3IgKGludGVydmFsTmFtZSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShpbnRlcnZhbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAnPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnX2ludGVydmFsX2Jhc2ljX2NvbnRcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArIGdldEludGVydmFsQ29udENvbW1vbkNsYXNzTmFtZSgpICsgJyAnICsgZ2V0SW50ZXJ2YWxDb250Q2xhc3NOYW1lKGludGVydmFsTmFtZSkgKyAnXCI+JyxcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWxEZXNjcmlwdGlvbiA9ICc8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdpbnRlcnZhbF9iYXNpY19jb250X2Rlc2NyaXB0aW9uXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyArIG9wdGlvbnMub3V0cHV0VHJhbnNsYXRpb25baW50ZXJ2YWxOYW1lXSArICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgZGF0YVtpbnRlcnZhbE5hbWVdLmZvckVhY2goZnVuY3Rpb24gKGRpZ2l0LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ICs9ICc8ZGl2IGNsYXNzPVwiJyArIGdldERpZ2l0Q29udENvbW1vbkNsYXNzTmFtZSgpICsgJyAnICsgZ2V0RGlnaXRDb250Q2xhc3NOYW1lKGluZGV4KSArICdcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyArIGdldERpZ2l0RWxlbWVudFN0cmluZyhkaWdpdCwgMCkgKyAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvZGUgKz0gZWxlbWVudCArICc8L2Rpdj4nICsgaW50ZXJ2YWxEZXNjcmlwdGlvbiArICc8L2Rpdj4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy5jb250LmlubmVySFRNTCA9IGNvZGUgKyAnPC9kaXY+JztcbiAgICAgICAgbGFzdFRpY2sgPSBkYXRhO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERpZ2l0RWxlbWVudFN0cmluZyhuZXdEaWdpdCwgbGFzdERpZ2l0KSB7XG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfbGFzdF9wbGFjZWhvbGRlclwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2RpZ2l0X2xhc3RfcGxhY2Vob2xkZXJfaW5uZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyArIGxhc3REaWdpdCArICdcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfbmV3X3BsYWNlaG9sZGVyXCI+JyArIG5ld0RpZ2l0ICsgJzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfbGFzdF9yb3RhdGVcIj4nICsgbGFzdERpZ2l0ICsgJzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfbmV3X3JvdGF0ZVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2RpZ2l0X25ld19yb3RhdGVkXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2RpZ2l0X25ld19yb3RhdGVkX2lubmVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICsgbmV3RGlnaXQgKyAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVWaWV3KGRhdGEpIHtcbiAgICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaW50ZXJ2YWxOYW1lKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShpbnRlcnZhbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgZGF0YVtpbnRlcnZhbE5hbWVdLmZvckVhY2goZnVuY3Rpb24gKGRpZ2l0LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdFRpY2sgIT09IG51bGwgJiYgbGFzdFRpY2tbaW50ZXJ2YWxOYW1lXVtpbmRleF0gIT09IGRhdGFbaW50ZXJ2YWxOYW1lXVtpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldERpZ2l0Q29udChpbnRlcnZhbE5hbWUsIGluZGV4KS5pbm5lckhUTUwgPSBnZXREaWdpdEVsZW1lbnRTdHJpbmcoZGF0YVtpbnRlcnZhbE5hbWVdW2luZGV4XSwgbGFzdFRpY2tbaW50ZXJ2YWxOYW1lXVtpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICh2YXIgaW50ZXJ2YWxOYW1lIGluIGRhdGEpIHtcbiAgICAgICAgICAgIF9sb29wKGludGVydmFsTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0VGljayA9IGRhdGE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGlnaXRDb250KGludGVydmFsTmFtZSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKCFkaWdpdENvbnRzW2ludGVydmFsTmFtZSArICdfJyArIGluZGV4XSkge1xuICAgICAgICAgICAgZGlnaXRDb250c1tpbnRlcnZhbE5hbWUgKyAnXycgKyBpbmRleF0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGdldEludGVydmFsQ29udENsYXNzTmFtZShpbnRlcnZhbE5hbWUpICsgJyAuJyArIGdldERpZ2l0Q29udENsYXNzTmFtZShpbmRleCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpZ2l0Q29udHNbaW50ZXJ2YWxOYW1lICsgJ18nICsgaW5kZXhdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEludGVydmFsQ29udENsYXNzTmFtZShpbnRlcnZhbE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRDbGFzc1ByZWZpeCArICdpbnRlcnZhbF9jb250XycgKyBpbnRlcnZhbE5hbWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW50ZXJ2YWxDb250Q29tbW9uQ2xhc3NOYW1lKCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudENsYXNzUHJlZml4ICsgJ2ludGVydmFsX2NvbnQnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERpZ2l0Q29udENsYXNzTmFtZShpbmRleCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudENsYXNzUHJlZml4ICsgJ2RpZ2l0X2NvbnRfJyArIGluZGV4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERpZ2l0Q29udENvbW1vbkNsYXNzTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9jb250JztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkT3B0aW9ucyhfb3B0aW9ucywgX29wdCkge1xuICAgICAgICBmb3IgKHZhciBpIGluIF9vcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoX29wdGlvbnMuaGFzT3duUHJvcGVydHkoaSkgJiYgX29wdC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgIGlmIChfb3B0aW9uc1tpXSAhPT0gbnVsbCAmJiBfdHlwZW9mKF9vcHRpb25zW2ldKSA9PT0gJ29iamVjdCcgJiYgX3R5cGVvZihfb3B0W2ldKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZE9wdGlvbnMoX29wdGlvbnNbaV0sIF9vcHRbaV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9vcHRpb25zW2ldID0gX29wdFtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdmFyIGVuZERhdGUgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICBlbmREYXRlRGF0YSA9IHVuZGVmaW5lZDtcblxuICAgICAgICBmaXhDb21wYXRpYmlsaXR5KCk7XG5cbiAgICAgICAgZW5kRGF0ZSA9IGdldERhdGUob3B0aW9ucy5lbmREYXRlKTtcblxuICAgICAgICBlbmREYXRlRGF0YSA9IHByZXBhcmVUaW1lQnlPdXRwdXRGb3JtYXQoZW5kRGF0ZSk7XG5cbiAgICAgICAgd3JpdGVEYXRhKGVuZERhdGVEYXRhKTtcblxuICAgICAgICBsYXN0VGljayA9IGVuZERhdGVEYXRhO1xuXG4gICAgICAgIGlmIChlbmREYXRlLmdldFRpbWUoKSA8PSBEYXRlLm5vdygpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuZW5kQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmVuZENhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVWaWV3KHByZXBhcmVUaW1lQnlPdXRwdXRGb3JtYXQoZW5kRGF0ZSkpO1xuICAgICAgICAgICAgfSwgVElNRVNUQU1QX1NFQ09ORCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICBzdG9wOiBzdG9wXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duOyIsImltcG9ydCB0b29scyBmcm9tICcuL3Rvb2xzJztcbmltcG9ydCBDb3VudGRvd24gZnJvbSAnLi9jb3VudGRvd24nO1xuXG5cbi8qXG4qICAgTcOpdG9kbyBxdWUgc2UgZGlzcGFyYSBjdWFuZG8gZWwgd3Myci52WC5jc3NcbiogICB5YSBzZSBoYSBjYXJnYWRvIHkgaGEgcGludGFkbyBsYSB3ZWJcbiogKi9cbnRvb2xzLm9uU3R5bGVzUmVhZHkgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTaXRlIHZpc3VhbGx5IHJlYWR5XCIpO1xuICAgIC8vIERPIFNPTUVUSElOR1xuXG5cbn07XG5cblxuLypcbiogICBNw6l0b2RvIHF1ZSBzZSBkaXNwYXJhIGN1YW5kbyBlbCB3czJyLnZYLmpzXG4qICAgeWEgc2UgaGEgY2FyZ2FkbyB5IGVzdMOhIGRpcG9uaWJsZS5cbiogKi9cbnRvb2xzLm9uRnJhbWV3b3JrUmVhZHkgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTaXRlIGZ1bmN0aW9uYWxpdHkgcmVhZHlcIik7XG4gICAgLy8gRE8gU09NRVRISU5HXG5cbiAgICBuZXcgQ291bnRkb3duKHtcbiAgICAgICAgY29udDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLFxuICAgICAgICBlbmREYXRlOiBcIkZlYnJ1YXJ5IDEyLCAyMDIwIDEwOjAwOjAwXCIsXG4gICAgICAgIG91dHB1dFRyYW5zbGF0aW9uOiB7XG4gICAgICAgICAgICB5ZWFyOiAnJyxcbiAgICAgICAgICAgIHdlZWs6ICcnLFxuICAgICAgICAgICAgZGF5OiAnRMOtYXMnLFxuICAgICAgICAgICAgaG91cjogJ0hvcmFzJyxcbiAgICAgICAgICAgIG1pbnV0ZTogJ01pbnV0b3MnLFxuICAgICAgICAgICAgc2Vjb25kOiAnU2VndW5kb3MnLFxuICAgICAgICB9LFxuICAgICAgICBlbmRDYWxsYmFjazogbnVsbCxcbiAgICAgICAgb3V0cHV0Rm9ybWF0OiAnZGF5fGhvdXJ8bWludXRlfHNlY29uZCcsXG4gICAgfSkuc3RhcnQoKTtcblxufTtcblxuXG5cblxuIiwiLypcbiAqIE1pY3Jvc2l0ZXMgdG9vbHMganM6XG4gKiBFc3RlIGZpY2hlcm8gZXMgdW5hIG11ZXN0cmEgZGUgdXRpbGlkYWRlcyBwcm9waWFzIHBhcmEgbG9zIG1pY3Jvc2l0ZXMuXG4gKiBTZSBwdWVkZSBwZXJzb25hbGl6YXIgYSB0dSBndXN0b1xuICpcbiAqL1xuXG5cbmNvbnN0IE1JQ1JPU0lURV9JRCA9ICcjZmxhc2gnO1xuY29uc3QgY3NzTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbZGF0YS1taWNyb2Nzc10nKTtcbmNvbnN0IE1JQ1JPU0lURV9TRUxFQ1RJT04gPSBjbG9zZXN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoTUlDUk9TSVRFX0lEKSwgJ1tkYXRhLXBhdGhtaWNyb3NpdGVdJyk7XG5jb25zdCBQQVRIX01JQ1JPU0lURSA9IE1JQ1JPU0lURV9TRUxFQ1RJT04gPyBNSUNST1NJVEVfU0VMRUNUSU9OLmRhdGFzZXQucGF0aG1pY3Jvc2l0ZSA6ICcnO1xubGV0IHdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xubGV0IGlzRGVza3RvcCA9IHdpZHRoID4gOTY5O1xubGV0IGlzVGFibGV0ID0gd2lkdGggPD0gOTY5ICYmIHdpZHRoID49IDc2ODtcbmxldCBpc01vYmlsZSA9IHdpZHRoIDwgNzY4ICYmIHdpZHRoID4gMzAwO1xuXG5cbi8qXG4qIFNlYXJjaGVzIGZvciB0aGUgcGFyZW50IG5vZGUgY2xvc2VzdCB0byB0aGUgZWxlbWVudCwgd2hpY2ggY29tcGxpZXMgd2l0aCB0aGUgc2VsZWN0b3JcbiogQHBhcmFtIHt9IGVsIC0gRGVzY3JpcHRpb25cbiogQHBhcmFtIHt9IHNlbGVjdG9yIC0gRGVzY3JpcHRpb25cbiogQHBhcmFtIHt9IHN0b3BTZWxlY3RvciAtIERlc2NyaXB0aW9uXG4qICovXG5mdW5jdGlvbiBjbG9zZXN0KGVsLCBzZWxlY3Rvciwgc3RvcFNlbGVjdG9yKSB7XG4gICAgbGV0IHJldHZhbCA9IG51bGw7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dmFsID0gZWw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChzdG9wU2VsZWN0b3IgJiYgZWwubWF0Y2hlcyhzdG9wU2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXR2YWw7XG59XG5cblxuLypcbiogUmVtb3ZlcyB0aGUgc3R5bGUgYXR0ciwgb25jZSB0aGUgc3R5bGVzaGVldCBoYXZlIGJlZW4gbG9hZGVkXG4qIHJldHVybiB1bmRlZmluZWRcbiogKi9cbmZ1bmN0aW9uIF9pbnRlcm5hbENTU0luaXQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgIGV4LmNzc0xvYWRlZCA9IHRydWU7XG4gICAgZXgub25TdHlsZXNSZWFkeSgpO1xufVxuXG5cbi8qXG4qIEluaXRpYWxpemVzIGZ1bmN0aW9uYWxpdHkgSlMsIGFuZCBhZHZpY2VzIHdoZW4gSlMgaXMgbG9hZGVkLlxuKiByZXR1cm4gdW5kZWZpbmVkXG4qICovXG5mdW5jdGlvbiBfaW50ZXJuYWxKU0luaXQoKSB7XG4gICAgd2luZG93LnZmZXMuX3V0aWxzLmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpKTtcbiAgICBleC5vbkZyYW1ld29ya1JlYWR5KCk7XG59XG5cblxuLypcbiogQ2hlY2sgaWYgc3R5bGVzaGVldCBDU1MgaXMgbG9hZGVkXG4qIEByZXR1cm4ge2Jvb2xlYW59XG4qICovXG5mdW5jdGlvbiBpc0NTU01pY3JvTG9hZGVkKCkge1xuICAgIGNvbnN0IGRvbVN0eWxlcyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xuICAgIGxldCBjb3VudENTUyA9IDA7XG4gICAgW10uZm9yRWFjaC5jYWxsKGRvbVN0eWxlcywgKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaHJlZiA9IGl0ZW0uaHJlZiB8fCAnJztcbiAgICAgICAgaWYgKGhyZWYuaW5kZXhPZignd3MycicpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1dTMlIgTG9hZGVkJyk7XG4gICAgICAgICAgICBjb3VudENTUysrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChocmVmLmluZGV4T2YoJ21haW4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNQUlOLkNTUyBMb2FkZWQnKTtcbiAgICAgICAgICAgIGNvdW50Q1NTKytcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAoY291bnRDU1MgPT09IDIpO1xufVxuXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgLy8gRE8gU09NRVRISU5HXG59XG5cbi8qXG4qIGxpc3RlbiBldmVudCwgb25jZSBoYXZlIGJlZW4gbG9hZGVkIHRoZSBmaWxlcyBDU1NcbiogKi9cbmlmICghaXNDU1NNaWNyb0xvYWRlZCgpKSB7XG4gICAgY3NzTWFpbi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgX2ludGVybmFsQ1NTSW5pdCk7XG59IGVsc2UgaWYgKGlzQ1NTTWljcm9Mb2FkZWQoKSkge1xuICAgIHNldFRpbWVvdXQoX2ludGVybmFsQ1NTSW5pdCwgMTAwKTtcbn1cblxuXG4vKlxuKiBsaXN0ZW4gZXZlbnQsIG9uY2UgaGF2ZSBiZWVuIGxvYWRlZCB0aGUgZmlsZXMgSlNcbiogKi9cbmlmICh3aW5kb3cudmZlcykge1xuICAgIHNldFRpbWVvdXQoX2ludGVybmFsSlNJbml0LCAxMDApXG59IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZmZXM6ZnJhbWV3b3JrUmVhZHknLCBfaW50ZXJuYWxKU0luaXQpO1xufVxuXG5jb25zdCBleCA9IHtcbiAgICBpc0Rlc2t0b3AsXG4gICAgaXNUYWJsZXQsXG4gICAgaXNNb2JpbGUsXG4gICAgbWljcm9zaXRlSWQ6IE1JQ1JPU0lURV9JRCxcbiAgICBtaWNyb3NpdGVQYXRoOiBQQVRIX01JQ1JPU0lURSxcbiAgICBpbml0OiBpbml0LFxuICAgIGNzc0xvYWRlZDogZmFsc2UsXG4gICAgb25TdHlsZXNSZWFkeTogKCkgPT4gbnVsbCxcbiAgICBvbkZyYW1ld29ya1JlYWR5OiAoKSA9PiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=