/**
 * Vodafone Reboot Framework: Version 2.2.2. Generation Date: 2020-05-25T12:03:04.858Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/nudge/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/nudge/resources/scripts/countdown.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/nudge/resources/scripts/countdown.js ***!
  \********************************************************************************************************************************/
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

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/nudge/resources/scripts/main.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/nudge/resources/scripts/main.js ***!
  \***************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/nudge/resources/scripts/tools.js");
/* harmony import */ var _countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countdown */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/nudge/resources/scripts/countdown.js");


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
    endDate: "Febraury 12, 2020 10:00:00",
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

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/nudge/resources/scripts/tools.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/nudge/resources/scripts/tools.js ***!
  \****************************************************************************************************************************/
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
const MICROSITE_ID = '#nudge';
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

/* function _internalCSSInit() {
    if(!ex.cssLoaded){
        document.querySelector(MICROSITE_ID).removeAttribute("style");
        ex.cssLoaded = true;
        ex.onStylesReady();
    }
} /*

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

/* function isCSSMicroLoaded() {
    const domStyles = document.styleSheets;
    let countCSS = 0;
    [].forEach.call(domStyles, (item) => {
        const href = item.href || '';
        if (href.indexOf(PATH_MICROSITE + 'css/ws2r') !== -1) {
            console.log('WS2RCSS Loaded');
            countCSS++;
        }
        if (href.indexOf(PATH_MICROSITE + 'css/styles.css') !== -1) {
            console.log('MICROCSS Loaded');
            countCSS++
        }
    });
    return (countCSS === 2);
}

*/


function init() {} // DO SOMETHING

/*
 * listen event, once have been loaded the files CSS
 * */

/*
if (!isCSSMicroLoaded()) {
    cssMain.addEventListener('load', _internalCSSInit);
    // Make sure microsite gets visible after 3 secs
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
  cssLoaded: true,
  onStylesReady: () => null,
  onFrameworkReady: () => null
};
/* harmony default export */ __webpack_exports__["default"] = (ex);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9mdWxsc2l4L0Rlc2t0b3AvbWljcm9zaXRlcy1jYnUvMDEtcGFydGljdWxhcmVzLzAxLWNvbnZlcmdlbnRlL29mZXJ0YS9hbnRpZ3VvL251ZGdlL3Jlc291cmNlcy9zY3JpcHRzL2NvdW50ZG93bi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2Z1bGxzaXgvRGVza3RvcC9taWNyb3NpdGVzLWNidS8wMS1wYXJ0aWN1bGFyZXMvMDEtY29udmVyZ2VudGUvb2ZlcnRhL2FudGlndW8vbnVkZ2UvcmVzb3VyY2VzL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2Z1bGxzaXgvRGVza3RvcC9taWNyb3NpdGVzLWNidS8wMS1wYXJ0aWN1bGFyZXMvMDEtY29udmVyZ2VudGUvb2ZlcnRhL2FudGlndW8vbnVkZ2UvcmVzb3VyY2VzL3NjcmlwdHMvdG9vbHMuanMiXSwibmFtZXMiOlsiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJDb3VudGRvd24iLCJvcHQiLCJvcHRpb25zIiwiY29udCIsImVuZERhdGUiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwiZW5kQ2FsbGJhY2siLCJvdXRwdXRGb3JtYXQiLCJvdXRwdXRUcmFuc2xhdGlvbiIsIndlZWsiLCJsYXN0VGljayIsImludGVydmFsc0J5U2l6ZSIsIlRJTUVTVEFNUF9TRUNPTkQiLCJUSU1FU1RBTVBfTUlOVVRFIiwiVElNRVNUQU1QX0hPVVIiLCJUSU1FU1RBTVBfREFZIiwiVElNRVNUQU1QX1dFRUsiLCJUSU1FU1RBTVBfWUVBUiIsImVsZW1lbnRDbGFzc1ByZWZpeCIsImludGVydmFsIiwiZGlnaXRDb250cyIsImxvYWRPcHRpb25zIiwiZ2V0RGF0ZSIsImRhdGUiLCJEYXRlIiwiZXhwZWN0ZWRWYWx1ZXMiLCJpIiwiaGFzT3duUHJvcGVydHkiLCJwcmVwYXJlVGltZUJ5T3V0cHV0Rm9ybWF0IiwiZGF0ZU9iaiIsInVzZWRJbnRlcnZhbHMiLCJ1bmRlZmluZWQiLCJvdXRwdXQiLCJ0aW1lRGlmZiIsImZpbHRlciIsIml0ZW0iLCJzcGxpdCIsImluZGV4T2YiLCJnZXRUaW1lIiwibm93IiwiZm9yRWFjaCIsInZhbHVlIiwiTWF0aCIsInRydW5jIiwibGVuZ3RoIiwiZml4Q29tcGF0aWJpbGl0eSIsIngiLCJpc05hTiIsIk5hTiIsImZsb29yIiwiY2VpbCIsIndyaXRlRGF0YSIsImRhdGEiLCJjb2RlIiwiaW50ZXJ2YWxOYW1lIiwiZWxlbWVudCIsImdldEludGVydmFsQ29udENvbW1vbkNsYXNzTmFtZSIsImdldEludGVydmFsQ29udENsYXNzTmFtZSIsImludGVydmFsRGVzY3JpcHRpb24iLCJkaWdpdCIsImluZGV4IiwiZ2V0RGlnaXRDb250Q29tbW9uQ2xhc3NOYW1lIiwiZ2V0RGlnaXRDb250Q2xhc3NOYW1lIiwiZ2V0RGlnaXRFbGVtZW50U3RyaW5nIiwiaW5uZXJIVE1MIiwibmV3RGlnaXQiLCJsYXN0RGlnaXQiLCJ1cGRhdGVWaWV3IiwiX2xvb3AiLCJnZXREaWdpdENvbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfb3B0aW9ucyIsIl9vcHQiLCJzdGFydCIsImVuZERhdGVEYXRhIiwic2V0SW50ZXJ2YWwiLCJzdG9wIiwiY2xlYXJJbnRlcnZhbCIsInRvb2xzIiwib25TdHlsZXNSZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJvbkZyYW1ld29ya1JlYWR5IiwiTUlDUk9TSVRFX0lEIiwiY3NzTWFpbiIsIk1JQ1JPU0lURV9TRUxFQ1RJT04iLCJjbG9zZXN0IiwiUEFUSF9NSUNST1NJVEUiLCJkYXRhc2V0IiwicGF0aG1pY3Jvc2l0ZSIsIndpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJpc0Rlc2t0b3AiLCJpc1RhYmxldCIsImlzTW9iaWxlIiwiZWwiLCJzZWxlY3RvciIsInN0b3BTZWxlY3RvciIsInJldHZhbCIsIm1hdGNoZXMiLCJwYXJlbnRFbGVtZW50IiwiX2ludGVybmFsSlNJbml0Iiwid2luZG93IiwidmZlcyIsIl91dGlscyIsImluaXQiLCJleCIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwibWljcm9zaXRlSWQiLCJtaWNyb3NpdGVQYXRoIiwiY3NzTG9hZGVkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUEsSUFBSUEsT0FBTyxHQUFHLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0MsT0FBT0EsTUFBTSxDQUFDQyxRQUFkLEtBQTJCLFFBQTNELEdBQXNFLFVBQVVDLEdBQVYsRUFBZTtBQUFFLFNBQU8sT0FBT0EsR0FBZDtBQUFvQixDQUEzRyxHQUE4RyxVQUFVQSxHQUFWLEVBQWU7QUFBRSxTQUFPQSxHQUFHLElBQUksT0FBT0YsTUFBUCxLQUFrQixVQUF6QixJQUF1Q0UsR0FBRyxDQUFDQyxXQUFKLEtBQW9CSCxNQUEzRCxHQUFvRSxRQUFwRSxHQUErRSxPQUFPRSxHQUE3RjtBQUFtRyxDQUFoUDs7QUFFQSxTQUFTRSxTQUFULENBQW1CQyxHQUFuQixFQUF3QjtBQUVwQjs7QUFFQSxNQUFJQyxPQUFPLEdBQUc7QUFDTkMsUUFBSSxFQUFFLElBREE7QUFFTkMsV0FBTyxFQUFFO0FBQ0xDLFVBQUksRUFBRSxDQUREO0FBRUxDLFdBQUssRUFBRSxDQUZGO0FBR0xDLFNBQUcsRUFBRSxDQUhBO0FBSUxDLFVBQUksRUFBRSxDQUpEO0FBS0xDLFlBQU0sRUFBRSxDQUxIO0FBTUxDLFlBQU0sRUFBRTtBQU5ILEtBRkg7QUFVTkMsZUFBVyxFQUFFLElBVlA7QUFXTkMsZ0JBQVksRUFBRSxrQ0FYUjtBQVlOQyxxQkFBaUIsRUFBRTtBQUNmUixVQUFJLEVBQUUsTUFEUztBQUVmUyxVQUFJLEVBQUUsT0FGUztBQUdmUCxTQUFHLEVBQUUsS0FIVTtBQUlmQyxVQUFJLEVBQUUsT0FKUztBQUtmQyxZQUFNLEVBQUUsT0FMTztBQU1mQyxZQUFNLEVBQUU7QUFOTztBQVpiLEdBQWQ7QUFBQSxNQXFCSUssUUFBUSxHQUFHLElBckJmO0FBQUEsTUFzQklDLGVBQWUsR0FBRyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLEtBQWpCLEVBQXdCLE1BQXhCLEVBQWdDLFFBQWhDLEVBQTBDLFFBQTFDLENBdEJ0QjtBQUFBLE1BdUJJQyxnQkFBZ0IsR0FBRyxJQXZCdkI7QUFBQSxNQXdCSUMsZ0JBQWdCLEdBQUcsS0FBS0QsZ0JBeEI1QjtBQUFBLE1BeUJJRSxjQUFjLEdBQUcsS0FBS0QsZ0JBekIxQjtBQUFBLE1BMEJJRSxhQUFhLEdBQUcsS0FBS0QsY0ExQnpCO0FBQUEsTUEyQklFLGNBQWMsR0FBRyxJQUFJRCxhQTNCekI7QUFBQSxNQTRCSUUsY0FBYyxHQUFHLE1BQU1GLGFBNUIzQjtBQUFBLE1BNkJJRyxrQkFBa0IsR0FBRyxZQTdCekI7QUFBQSxNQThCSUMsUUFBUSxHQUFHLElBOUJmO0FBQUEsTUErQklDLFVBQVUsR0FBRyxFQS9CakI7QUFpQ0FDLGFBQVcsQ0FBQ3hCLE9BQUQsRUFBVUQsR0FBVixDQUFYO0FBRUE7Ozs7O0FBSUEsV0FBUzBCLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQ25CLFFBQUksQ0FBQyxPQUFPQSxJQUFQLEtBQWdCLFdBQWhCLEdBQThCLFdBQTlCLEdBQTRDakMsT0FBTyxDQUFDaUMsSUFBRCxDQUFwRCxNQUFnRSxRQUFwRSxFQUE4RTtBQUMxRSxVQUFJQSxJQUFJLFlBQVlDLElBQXBCLEVBQTBCO0FBQ3RCLGVBQU9ELElBQVA7QUFDSCxPQUZELE1BRU87QUFDSCxZQUFJRSxjQUFjLEdBQUc7QUFDakJ2QixhQUFHLEVBQUUsQ0FEWTtBQUVqQkQsZUFBSyxFQUFFLENBRlU7QUFHakJELGNBQUksRUFBRSxDQUhXO0FBSWpCRyxjQUFJLEVBQUUsQ0FKVztBQUtqQkMsZ0JBQU0sRUFBRSxDQUxTO0FBTWpCQyxnQkFBTSxFQUFFO0FBTlMsU0FBckI7O0FBU0EsYUFBSyxJQUFJcUIsQ0FBVCxJQUFjRCxjQUFkLEVBQThCO0FBQzFCLGNBQUlBLGNBQWMsQ0FBQ0UsY0FBZixDQUE4QkQsQ0FBOUIsS0FBb0NILElBQUksQ0FBQ0ksY0FBTCxDQUFvQkQsQ0FBcEIsQ0FBeEMsRUFBZ0U7QUFDNURELDBCQUFjLENBQUNDLENBQUQsQ0FBZCxHQUFvQkgsSUFBSSxDQUFDRyxDQUFELENBQXhCO0FBQ0g7QUFDSjs7QUFFRCxlQUFPLElBQUlGLElBQUosQ0FBU0MsY0FBYyxDQUFDekIsSUFBeEIsRUFBOEJ5QixjQUFjLENBQUN4QixLQUFmLEdBQXVCLENBQXZCLEdBQTJCd0IsY0FBYyxDQUFDeEIsS0FBZixHQUF1QixDQUFsRCxHQUFzRHdCLGNBQWMsQ0FBQ3hCLEtBQW5HLEVBQTBHd0IsY0FBYyxDQUFDdkIsR0FBekgsRUFBOEh1QixjQUFjLENBQUN0QixJQUE3SSxFQUFtSnNCLGNBQWMsQ0FBQ3JCLE1BQWxLLEVBQTBLcUIsY0FBYyxDQUFDcEIsTUFBekwsQ0FBUDtBQUNIO0FBQ0osS0FyQkQsTUFxQk8sSUFBSSxPQUFPa0IsSUFBUCxLQUFnQixRQUFoQixJQUE0QixPQUFPQSxJQUFQLEtBQWdCLFFBQWhELEVBQTBEO0FBQzdELGFBQU8sSUFBSUMsSUFBSixDQUFTRCxJQUFULENBQVA7QUFDSCxLQUZNLE1BRUE7QUFDSCxhQUFPLElBQUlDLElBQUosRUFBUDtBQUNIO0FBQ0o7QUFFRDs7Ozs7O0FBSUEsV0FBU0kseUJBQVQsQ0FBbUNDLE9BQW5DLEVBQTRDO0FBQ3hDLFFBQUlDLGFBQWEsR0FBR0MsU0FBcEI7QUFBQSxRQUNJQyxNQUFNLEdBQUcsRUFEYjtBQUFBLFFBRUlDLFFBQVEsR0FBR0YsU0FGZjtBQUlBRCxpQkFBYSxHQUFHbkIsZUFBZSxDQUFDdUIsTUFBaEIsQ0FBdUIsVUFBVUMsSUFBVixFQUFnQjtBQUNuRCxhQUFPdEMsT0FBTyxDQUFDVSxZQUFSLENBQXFCNkIsS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0NDLE9BQWhDLENBQXdDRixJQUF4QyxNQUFrRCxDQUFDLENBQTFEO0FBQ0gsS0FGZSxDQUFoQjtBQUlBRixZQUFRLEdBQUdKLE9BQU8sQ0FBQ1MsT0FBUixLQUFvQmQsSUFBSSxDQUFDZSxHQUFMLEVBQS9CO0FBRUFULGlCQUFhLENBQUNVLE9BQWQsQ0FBc0IsVUFBVUwsSUFBVixFQUFnQjtBQUNsQyxVQUFJTSxLQUFLLEdBQUdWLFNBQVo7O0FBQ0EsVUFBSUUsUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDZCxnQkFBUUUsSUFBUjtBQUNJLGVBQUssTUFBTDtBQUNJTSxpQkFBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1YsUUFBUSxHQUFHaEIsY0FBdEIsQ0FBUjtBQUNBZ0Isb0JBQVEsSUFBSVEsS0FBSyxHQUFHeEIsY0FBcEI7QUFDQTs7QUFDSixlQUFLLE1BQUw7QUFDSXdCLGlCQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVixRQUFRLEdBQUdqQixjQUF0QixDQUFSO0FBQ0FpQixvQkFBUSxJQUFJUSxLQUFLLEdBQUd6QixjQUFwQjtBQUNBOztBQUNKLGVBQUssS0FBTDtBQUNJeUIsaUJBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdWLFFBQVEsR0FBR2xCLGFBQXRCLENBQVI7QUFDQWtCLG9CQUFRLElBQUlRLEtBQUssR0FBRzFCLGFBQXBCO0FBQ0E7O0FBQ0osZUFBSyxNQUFMO0FBQ0kwQixpQkFBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1YsUUFBUSxHQUFHbkIsY0FBdEIsQ0FBUjtBQUNBbUIsb0JBQVEsSUFBSVEsS0FBSyxHQUFHM0IsY0FBcEI7QUFDQTs7QUFDSixlQUFLLFFBQUw7QUFDSTJCLGlCQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVixRQUFRLEdBQUdwQixnQkFBdEIsQ0FBUjtBQUNBb0Isb0JBQVEsSUFBSVEsS0FBSyxHQUFHNUIsZ0JBQXBCO0FBQ0E7O0FBQ0osZUFBSyxRQUFMO0FBQ0k0QixpQkFBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1YsUUFBUSxHQUFHckIsZ0JBQXRCLENBQVI7QUFDQXFCLG9CQUFRLElBQUlRLEtBQUssR0FBRzdCLGdCQUFwQjtBQUNBO0FBeEJSO0FBMEJILE9BM0JELE1BMkJPO0FBQ0g2QixhQUFLLEdBQUcsSUFBUjtBQUNIOztBQUNEVCxZQUFNLENBQUNHLElBQUQsQ0FBTixHQUFlLENBQUMsQ0FBQyxLQUFLTSxLQUFOLEVBQWFHLE1BQWIsR0FBc0IsQ0FBdEIsR0FBMEIsTUFBTUgsS0FBaEMsR0FBd0MsS0FBS0EsS0FBOUMsRUFBcURMLEtBQXJELENBQTJELEVBQTNELENBQWY7QUFDSCxLQWpDRDtBQW1DQSxXQUFPSixNQUFQO0FBQ0g7O0FBRUQsV0FBU2EsZ0JBQVQsR0FBNEI7QUFDeEJILFFBQUksQ0FBQ0MsS0FBTCxHQUFhRCxJQUFJLENBQUNDLEtBQUwsSUFBYyxVQUFVRyxDQUFWLEVBQWE7QUFDcEMsVUFBSUMsS0FBSyxDQUFDRCxDQUFELENBQVQsRUFBYztBQUNWLGVBQU9FLEdBQVA7QUFDSDs7QUFDRCxVQUFJRixDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1AsZUFBT0osSUFBSSxDQUFDTyxLQUFMLENBQVdILENBQVgsQ0FBUDtBQUNIOztBQUNELGFBQU9KLElBQUksQ0FBQ1EsSUFBTCxDQUFVSixDQUFWLENBQVA7QUFDSCxLQVJEO0FBU0g7O0FBRUQsV0FBU0ssU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUI7QUFDckIsUUFBSUMsSUFBSSxHQUFHLGlCQUFpQm5DLGtCQUFqQixHQUFzQyxRQUFqRDtBQUFBLFFBQ0lvQyxZQUFZLEdBQUd2QixTQURuQjs7QUFHQSxTQUFLdUIsWUFBTCxJQUFxQkYsSUFBckIsRUFBMkI7QUFDdkIsVUFBSUEsSUFBSSxDQUFDekIsY0FBTCxDQUFvQjJCLFlBQXBCLENBQUosRUFBdUM7QUFDbkMsWUFBSUMsT0FBTyxHQUFHLGlCQUFpQnJDLGtCQUFqQixHQUFzQyw2RUFBdEMsR0FBc0hzQyw4QkFBOEIsRUFBcEosR0FBeUosR0FBekosR0FBK0pDLHdCQUF3QixDQUFDSCxZQUFELENBQXZMLEdBQXdNLElBQXROO0FBQUEsWUFDSUksbUJBQW1CLEdBQUcsaUJBQWlCeEMsa0JBQWpCLEdBQXNDLHdGQUF0QyxHQUFpSXJCLE9BQU8sQ0FBQ1csaUJBQVIsQ0FBMEI4QyxZQUExQixDQUFqSSxHQUEySyx5REFEck07QUFFQUYsWUFBSSxDQUFDRSxZQUFELENBQUosQ0FBbUJkLE9BQW5CLENBQTJCLFVBQVVtQixLQUFWLEVBQWlCQyxLQUFqQixFQUF3QjtBQUMvQ0wsaUJBQU8sSUFBSSxpQkFBaUJNLDJCQUEyQixFQUE1QyxHQUFpRCxHQUFqRCxHQUF1REMscUJBQXFCLENBQUNGLEtBQUQsQ0FBNUUsR0FBc0YsOENBQXRGLEdBQXVJRyxxQkFBcUIsQ0FBQ0osS0FBRCxFQUFRLENBQVIsQ0FBNUosR0FBeUssOENBQXBMO0FBQ0gsU0FGRDtBQUlBTixZQUFJLElBQUlFLE9BQU8sR0FBRyxRQUFWLEdBQXFCRyxtQkFBckIsR0FBMkMsUUFBbkQ7QUFDSDtBQUNKOztBQUVEN0QsV0FBTyxDQUFDQyxJQUFSLENBQWFrRSxTQUFiLEdBQXlCWCxJQUFJLEdBQUcsUUFBaEM7QUFDQTNDLFlBQVEsR0FBRzBDLElBQVg7QUFDSDs7QUFFRCxXQUFTVyxxQkFBVCxDQUErQkUsUUFBL0IsRUFBeUNDLFNBQXpDLEVBQW9EO0FBQ2hELFdBQU8saUJBQWlCaEQsa0JBQWpCLEdBQXNDLGdFQUF0QyxHQUF5R0Esa0JBQXpHLEdBQThILDhEQUE5SCxHQUErTGdELFNBQS9MLEdBQTJNLGdHQUEzTSxHQUE4U2hELGtCQUE5UyxHQUFtVSx5QkFBblUsR0FBK1YrQyxRQUEvVixHQUEwVywwQ0FBMVcsR0FBdVovQyxrQkFBdlosR0FBNGEscUJBQTVhLEdBQW9jZ0QsU0FBcGMsR0FBZ2QsMENBQWhkLEdBQTZmaEQsa0JBQTdmLEdBQWtoQiwwREFBbGhCLEdBQStrQkEsa0JBQS9rQixHQUFvbUIsK0RBQXBtQixHQUFzcUJBLGtCQUF0cUIsR0FBMnJCLDZEQUEzckIsR0FBMnZCK0MsUUFBM3ZCLEdBQXN3QixrR0FBN3dCO0FBQ0g7O0FBRUQsV0FBU0UsVUFBVCxDQUFvQmYsSUFBcEIsRUFBMEI7QUFDdEIsUUFBSWdCLEtBQUssR0FBRyxTQUFTQSxLQUFULENBQWVkLFlBQWYsRUFBNkI7QUFDckMsVUFBSUYsSUFBSSxDQUFDekIsY0FBTCxDQUFvQjJCLFlBQXBCLENBQUosRUFBdUM7QUFDbkNGLFlBQUksQ0FBQ0UsWUFBRCxDQUFKLENBQW1CZCxPQUFuQixDQUEyQixVQUFVbUIsS0FBVixFQUFpQkMsS0FBakIsRUFBd0I7QUFDL0MsY0FBSWxELFFBQVEsS0FBSyxJQUFiLElBQXFCQSxRQUFRLENBQUM0QyxZQUFELENBQVIsQ0FBdUJNLEtBQXZCLE1BQWtDUixJQUFJLENBQUNFLFlBQUQsQ0FBSixDQUFtQk0sS0FBbkIsQ0FBM0QsRUFBc0Y7QUFDbEZTLHdCQUFZLENBQUNmLFlBQUQsRUFBZU0sS0FBZixDQUFaLENBQWtDSSxTQUFsQyxHQUE4Q0QscUJBQXFCLENBQUNYLElBQUksQ0FBQ0UsWUFBRCxDQUFKLENBQW1CTSxLQUFuQixDQUFELEVBQTRCbEQsUUFBUSxDQUFDNEMsWUFBRCxDQUFSLENBQXVCTSxLQUF2QixDQUE1QixDQUFuRTtBQUNIO0FBQ0osU0FKRDtBQUtIO0FBQ0osS0FSRDs7QUFVQSxTQUFLLElBQUlOLFlBQVQsSUFBeUJGLElBQXpCLEVBQStCO0FBQzNCZ0IsV0FBSyxDQUFDZCxZQUFELENBQUw7QUFDSDs7QUFFRDVDLFlBQVEsR0FBRzBDLElBQVg7QUFDSDs7QUFFRCxXQUFTaUIsWUFBVCxDQUFzQmYsWUFBdEIsRUFBb0NNLEtBQXBDLEVBQTJDO0FBQ3ZDLFFBQUksQ0FBQ3hDLFVBQVUsQ0FBQ2tDLFlBQVksR0FBRyxHQUFmLEdBQXFCTSxLQUF0QixDQUFmLEVBQTZDO0FBQ3pDeEMsZ0JBQVUsQ0FBQ2tDLFlBQVksR0FBRyxHQUFmLEdBQXFCTSxLQUF0QixDQUFWLEdBQXlDVSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBTWQsd0JBQXdCLENBQUNILFlBQUQsQ0FBOUIsR0FBK0MsSUFBL0MsR0FBc0RRLHFCQUFxQixDQUFDRixLQUFELENBQWxHLENBQXpDO0FBQ0g7O0FBRUQsV0FBT3hDLFVBQVUsQ0FBQ2tDLFlBQVksR0FBRyxHQUFmLEdBQXFCTSxLQUF0QixDQUFqQjtBQUNIOztBQUVELFdBQVNILHdCQUFULENBQWtDSCxZQUFsQyxFQUFnRDtBQUM1QyxXQUFPcEMsa0JBQWtCLEdBQUcsZ0JBQXJCLEdBQXdDb0MsWUFBL0M7QUFDSDs7QUFFRCxXQUFTRSw4QkFBVCxHQUEwQztBQUN0QyxXQUFPdEMsa0JBQWtCLEdBQUcsZUFBNUI7QUFDSDs7QUFFRCxXQUFTNEMscUJBQVQsQ0FBK0JGLEtBQS9CLEVBQXNDO0FBQ2xDLFdBQU8xQyxrQkFBa0IsR0FBRyxhQUFyQixHQUFxQzBDLEtBQTVDO0FBQ0g7O0FBRUQsV0FBU0MsMkJBQVQsR0FBdUM7QUFDbkMsV0FBTzNDLGtCQUFrQixHQUFHLFlBQTVCO0FBQ0g7O0FBRUQsV0FBU0csV0FBVCxDQUFxQm1ELFFBQXJCLEVBQStCQyxJQUEvQixFQUFxQztBQUNqQyxTQUFLLElBQUkvQyxDQUFULElBQWM4QyxRQUFkLEVBQXdCO0FBQ3BCLFVBQUlBLFFBQVEsQ0FBQzdDLGNBQVQsQ0FBd0JELENBQXhCLEtBQThCK0MsSUFBSSxDQUFDOUMsY0FBTCxDQUFvQkQsQ0FBcEIsQ0FBbEMsRUFBMEQ7QUFDdEQsWUFBSThDLFFBQVEsQ0FBQzlDLENBQUQsQ0FBUixLQUFnQixJQUFoQixJQUF3QnBDLE9BQU8sQ0FBQ2tGLFFBQVEsQ0FBQzlDLENBQUQsQ0FBVCxDQUFQLEtBQXlCLFFBQWpELElBQTZEcEMsT0FBTyxDQUFDbUYsSUFBSSxDQUFDL0MsQ0FBRCxDQUFMLENBQVAsS0FBcUIsUUFBdEYsRUFBZ0c7QUFDNUZMLHFCQUFXLENBQUNtRCxRQUFRLENBQUM5QyxDQUFELENBQVQsRUFBYytDLElBQUksQ0FBQy9DLENBQUQsQ0FBbEIsQ0FBWDtBQUNILFNBRkQsTUFFTztBQUNIOEMsa0JBQVEsQ0FBQzlDLENBQUQsQ0FBUixHQUFjK0MsSUFBSSxDQUFDL0MsQ0FBRCxDQUFsQjtBQUNIO0FBQ0o7QUFDSjtBQUNKOztBQUVELFdBQVNnRCxLQUFULEdBQWlCO0FBQ2IsUUFBSTNFLE9BQU8sR0FBR2dDLFNBQWQ7QUFBQSxRQUNJNEMsV0FBVyxHQUFHNUMsU0FEbEI7QUFHQWMsb0JBQWdCO0FBRWhCOUMsV0FBTyxHQUFHdUIsT0FBTyxDQUFDekIsT0FBTyxDQUFDRSxPQUFULENBQWpCO0FBRUE0RSxlQUFXLEdBQUcvQyx5QkFBeUIsQ0FBQzdCLE9BQUQsQ0FBdkM7QUFFQW9ELGFBQVMsQ0FBQ3dCLFdBQUQsQ0FBVDtBQUVBakUsWUFBUSxHQUFHaUUsV0FBWDs7QUFFQSxRQUFJNUUsT0FBTyxDQUFDdUMsT0FBUixNQUFxQmQsSUFBSSxDQUFDZSxHQUFMLEVBQXpCLEVBQXFDO0FBQ2pDLFVBQUksT0FBTzFDLE9BQU8sQ0FBQ1MsV0FBZixLQUErQixVQUFuQyxFQUErQztBQUMzQ1QsZUFBTyxDQUFDUyxXQUFSO0FBQ0g7QUFDSixLQUpELE1BSU87QUFDSGEsY0FBUSxHQUFHeUQsV0FBVyxDQUFDLFlBQVk7QUFDL0JULGtCQUFVLENBQUN2Qyx5QkFBeUIsQ0FBQzdCLE9BQUQsQ0FBMUIsQ0FBVjtBQUNILE9BRnFCLEVBRW5CYSxnQkFGbUIsQ0FBdEI7QUFHSDtBQUNKOztBQUVELFdBQVNpRSxJQUFULEdBQWdCO0FBQ1osUUFBSTFELFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNuQjJELG1CQUFhLENBQUMzRCxRQUFELENBQWI7QUFDSDtBQUNKOztBQUVELFNBQU87QUFDSHVELFNBQUssRUFBRUEsS0FESjtBQUVIRyxRQUFJLEVBQUVBO0FBRkgsR0FBUDtBQUlIOztBQUVjbEYsd0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDL1BBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTs7Ozs7QUFJQW9GLDhDQUFLLENBQUNDLGFBQU4sR0FBc0IsTUFBTTtBQUN4QkMsU0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFEd0IsQ0FFeEI7QUFHSCxDQUxEO0FBUUE7Ozs7OztBQUtBSCw4Q0FBSyxDQUFDSSxnQkFBTixHQUF5QixNQUFNO0FBQzNCRixTQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWixFQUQyQixDQUUzQjs7QUFFQSxNQUFJdkYsa0RBQUosQ0FBYztBQUNWRyxRQUFJLEVBQUV3RSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FESTtBQUVWeEUsV0FBTyxFQUFFLDRCQUZDO0FBR1ZTLHFCQUFpQixFQUFFO0FBQ2ZSLFVBQUksRUFBRSxFQURTO0FBRWZTLFVBQUksRUFBRSxFQUZTO0FBR2ZQLFNBQUcsRUFBRSxNQUhVO0FBSWZDLFVBQUksRUFBRSxPQUpTO0FBS2ZDLFlBQU0sRUFBRSxTQUxPO0FBTWZDLFlBQU0sRUFBRTtBQU5PLEtBSFQ7QUFXVkMsZUFBVyxFQUFFLElBWEg7QUFZVkMsZ0JBQVksRUFBRTtBQVpKLEdBQWQsRUFhR21FLEtBYkg7QUFlSCxDQW5CRCxDOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTs7Ozs7O0FBUUEsTUFBTVUsWUFBWSxHQUFHLFFBQXJCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHZixRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQWhCO0FBQ0EsTUFBTWUsbUJBQW1CLEdBQUdDLE9BQU8sQ0FBQ2pCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QmEsWUFBdkIsQ0FBRCxFQUF1QyxzQkFBdkMsQ0FBbkM7QUFDQSxNQUFNSSxjQUFjLEdBQUdGLG1CQUFtQixHQUFHQSxtQkFBbUIsQ0FBQ0csT0FBcEIsQ0FBNEJDLGFBQS9CLEdBQStDLEVBQXpGO0FBQ0EsSUFBSUMsS0FBSyxHQUFHckIsUUFBUSxDQUFDc0IsZUFBVCxDQUF5QkMsV0FBckM7QUFDQSxJQUFJQyxTQUFTLEdBQUdILEtBQUssR0FBRyxHQUF4QjtBQUNBLElBQUlJLFFBQVEsR0FBR0osS0FBSyxJQUFJLEdBQVQsSUFBZ0JBLEtBQUssSUFBSSxHQUF4QztBQUNBLElBQUlLLFFBQVEsR0FBR0wsS0FBSyxHQUFHLEdBQVIsSUFBZUEsS0FBSyxHQUFHLEdBQXRDO0FBR0E7Ozs7Ozs7QUFNQSxTQUFTSixPQUFULENBQWlCVSxFQUFqQixFQUFxQkMsUUFBckIsRUFBK0JDLFlBQS9CLEVBQTZDO0FBQ3pDLE1BQUlDLE1BQU0sR0FBRyxJQUFiOztBQUNBLFNBQU9ILEVBQVAsRUFBVztBQUNQLFFBQUlBLEVBQUUsQ0FBQ0ksT0FBSCxDQUFXSCxRQUFYLENBQUosRUFBMEI7QUFDdEJFLFlBQU0sR0FBR0gsRUFBVDtBQUNBO0FBQ0gsS0FIRCxNQUdPLElBQUlFLFlBQVksSUFBSUYsRUFBRSxDQUFDSSxPQUFILENBQVdGLFlBQVgsQ0FBcEIsRUFBOEM7QUFDakQ7QUFDSDs7QUFDREYsTUFBRSxHQUFHQSxFQUFFLENBQUNLLGFBQVI7QUFDSDs7QUFDRCxTQUFPRixNQUFQO0FBQ0g7QUFHRDs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUFZQSxTQUFTRyxlQUFULEdBQTJCO0FBQ3ZCQyxRQUFNLENBQUNDLElBQVAsQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsQ0FBd0JyQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJhLFlBQXZCLENBQXhCOztBQUNBd0IsSUFBRSxDQUFDekIsZ0JBQUg7QUFDSDtBQUdEOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSxTQUFTd0IsSUFBVCxHQUFnQixDQUVmLENBRkQsQ0FDSTs7QUFHSjs7OztBQUlBOzs7Ozs7Ozs7Ozs7OztBQVlBLElBQUlILE1BQU0sQ0FBQ0MsSUFBWCxFQUFpQjtBQUNiSSxZQUFVLENBQUNOLGVBQUQsRUFBa0IsR0FBbEIsQ0FBVjtBQUNILENBRkQsTUFFTztBQUNIakMsVUFBUSxDQUFDd0MsZ0JBQVQsQ0FBMEIscUJBQTFCLEVBQWlEUCxlQUFqRDtBQUNIOztBQUVELE1BQU1LLEVBQUUsR0FBRztBQUNQZCxXQURPO0FBRVBDLFVBRk87QUFHUEMsVUFITztBQUlQZSxhQUFXLEVBQUUzQixZQUpOO0FBS1A0QixlQUFhLEVBQUV4QixjQUxSO0FBTVBtQixNQUFJLEVBQUVBLElBTkM7QUFPUE0sV0FBUyxFQUFFLElBUEo7QUFRUGpDLGVBQWEsRUFBRSxNQUFNLElBUmQ7QUFTUEcsa0JBQWdCLEVBQUUsTUFBTTtBQVRqQixDQUFYO0FBWWV5QixpRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9mdWxsc2l4L0Rlc2t0b3AvbWljcm9zaXRlcy1jYnUvMDEtcGFydGljdWxhcmVzLzAxLWNvbnZlcmdlbnRlL29mZXJ0YS9hbnRpZ3VvL251ZGdlL3Jlc291cmNlcy9zY3JpcHRzL21haW4uanNcIik7XG4iLCJcbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBDb3VudGRvd24ob3B0KSB7XG5cbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29udDogbnVsbCxcbiAgICAgICAgICAgIGVuZERhdGU6IHtcbiAgICAgICAgICAgICAgICB5ZWFyOiAwLFxuICAgICAgICAgICAgICAgIG1vbnRoOiAwLFxuICAgICAgICAgICAgICAgIGRheTogMCxcbiAgICAgICAgICAgICAgICBob3VyOiAwLFxuICAgICAgICAgICAgICAgIG1pbnV0ZTogMCxcbiAgICAgICAgICAgICAgICBzZWNvbmQ6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmRDYWxsYmFjazogbnVsbCxcbiAgICAgICAgICAgIG91dHB1dEZvcm1hdDogJ3llYXJ8d2Vla3xkYXl8aG91cnxtaW51dGV8c2Vjb25kJyxcbiAgICAgICAgICAgIG91dHB1dFRyYW5zbGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgeWVhcjogJ1Jva3knLFxuICAgICAgICAgICAgICAgIHdlZWs6ICdUw71kbnknLFxuICAgICAgICAgICAgICAgIGRheTogJ0RueScsXG4gICAgICAgICAgICAgICAgaG91cjogJ0hvZGluJyxcbiAgICAgICAgICAgICAgICBtaW51dGU6ICdNaW51dCcsXG4gICAgICAgICAgICAgICAgc2Vjb25kOiAnVnRlxZlpbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbGFzdFRpY2sgPSBudWxsLFxuICAgICAgICBpbnRlcnZhbHNCeVNpemUgPSBbJ3llYXInLCAnd2VlaycsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJ10sXG4gICAgICAgIFRJTUVTVEFNUF9TRUNPTkQgPSAxMDAwLFxuICAgICAgICBUSU1FU1RBTVBfTUlOVVRFID0gNjAgKiBUSU1FU1RBTVBfU0VDT05ELFxuICAgICAgICBUSU1FU1RBTVBfSE9VUiA9IDYwICogVElNRVNUQU1QX01JTlVURSxcbiAgICAgICAgVElNRVNUQU1QX0RBWSA9IDI0ICogVElNRVNUQU1QX0hPVVIsXG4gICAgICAgIFRJTUVTVEFNUF9XRUVLID0gNyAqIFRJTUVTVEFNUF9EQVksXG4gICAgICAgIFRJTUVTVEFNUF9ZRUFSID0gMzY1ICogVElNRVNUQU1QX0RBWSxcbiAgICAgICAgZWxlbWVudENsYXNzUHJlZml4ID0gJ2NvdW50RG93bl8nLFxuICAgICAgICBpbnRlcnZhbCA9IG51bGwsXG4gICAgICAgIGRpZ2l0Q29udHMgPSB7fTtcblxuICAgIGxvYWRPcHRpb25zKG9wdGlvbnMsIG9wdCk7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZGF0ZVxuICAgICAqIEByZXR1cm5zIHtEYXRlfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldERhdGUoZGF0ZSkge1xuICAgICAgICBpZiAoKHR5cGVvZiBkYXRlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRlKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGV4cGVjdGVkVmFsdWVzID0ge1xuICAgICAgICAgICAgICAgICAgICBkYXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoOiAwLFxuICAgICAgICAgICAgICAgICAgICB5ZWFyOiAwLFxuICAgICAgICAgICAgICAgICAgICBob3VyOiAwLFxuICAgICAgICAgICAgICAgICAgICBtaW51dGU6IDAsXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZDogMFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleHBlY3RlZFZhbHVlcy5oYXNPd25Qcm9wZXJ0eShpKSAmJiBkYXRlLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFZhbHVlc1tpXSA9IGRhdGVbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZXhwZWN0ZWRWYWx1ZXMueWVhciwgZXhwZWN0ZWRWYWx1ZXMubW9udGggPiAwID8gZXhwZWN0ZWRWYWx1ZXMubW9udGggLSAxIDogZXhwZWN0ZWRWYWx1ZXMubW9udGgsIGV4cGVjdGVkVmFsdWVzLmRheSwgZXhwZWN0ZWRWYWx1ZXMuaG91ciwgZXhwZWN0ZWRWYWx1ZXMubWludXRlLCBleHBlY3RlZFZhbHVlcy5zZWNvbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRlID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqXG4gICAgICogQHJldHVybiB7b2JqZWN0fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHByZXBhcmVUaW1lQnlPdXRwdXRGb3JtYXQoZGF0ZU9iaikge1xuICAgICAgICB2YXIgdXNlZEludGVydmFscyA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG91dHB1dCA9IHt9LFxuICAgICAgICAgICAgdGltZURpZmYgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdXNlZEludGVydmFscyA9IGludGVydmFsc0J5U2l6ZS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLm91dHB1dEZvcm1hdC5zcGxpdCgnfCcpLmluZGV4T2YoaXRlbSkgIT09IC0xO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aW1lRGlmZiA9IGRhdGVPYmouZ2V0VGltZSgpIC0gRGF0ZS5ub3coKTtcblxuICAgICAgICB1c2VkSW50ZXJ2YWxzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICh0aW1lRGlmZiA+IDApIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgudHJ1bmModGltZURpZmYgLyBUSU1FU1RBTVBfWUVBUik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9ZRUFSO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX1dFRUspO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZURpZmYgLT0gdmFsdWUgKiBUSU1FU1RBTVBfV0VFSztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX0RBWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9EQVk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgudHJ1bmModGltZURpZmYgLyBUSU1FU1RBTVBfSE9VUik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9IT1VSO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgudHJ1bmModGltZURpZmYgLyBUSU1FU1RBTVBfTUlOVVRFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmIC09IHZhbHVlICogVElNRVNUQU1QX01JTlVURTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX1NFQ09ORCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9TRUNPTkQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gJzAwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dHB1dFtpdGVtXSA9ICgoJycgKyB2YWx1ZSkubGVuZ3RoIDwgMiA/ICcwJyArIHZhbHVlIDogJycgKyB2YWx1ZSkuc3BsaXQoJycpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpeENvbXBhdGliaWxpdHkoKSB7XG4gICAgICAgIE1hdGgudHJ1bmMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICBpZiAoaXNOYU4oeCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHgpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdyaXRlRGF0YShkYXRhKSB7XG4gICAgICAgIHZhciBjb2RlID0gJzxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2NvbnRcIj4nLFxuICAgICAgICAgICAgaW50ZXJ2YWxOYW1lID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGZvciAoaW50ZXJ2YWxOYW1lIGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGludGVydmFsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9ICc8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdfaW50ZXJ2YWxfYmFzaWNfY29udFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICsgZ2V0SW50ZXJ2YWxDb250Q29tbW9uQ2xhc3NOYW1lKCkgKyAnICcgKyBnZXRJbnRlcnZhbENvbnRDbGFzc05hbWUoaW50ZXJ2YWxOYW1lKSArICdcIj4nLFxuICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbERlc2NyaXB0aW9uID0gJzxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2ludGVydmFsX2Jhc2ljX2NvbnRfZGVzY3JpcHRpb25cIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICsgb3B0aW9ucy5vdXRwdXRUcmFuc2xhdGlvbltpbnRlcnZhbE5hbWVdICsgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICBkYXRhW2ludGVydmFsTmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoZGlnaXQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgKz0gJzxkaXYgY2xhc3M9XCInICsgZ2V0RGlnaXRDb250Q29tbW9uQ2xhc3NOYW1lKCkgKyAnICcgKyBnZXREaWdpdENvbnRDbGFzc05hbWUoaW5kZXgpICsgJ1wiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICsgZ2V0RGlnaXRFbGVtZW50U3RyaW5nKGRpZ2l0LCAwKSArICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29kZSArPSBlbGVtZW50ICsgJzwvZGl2PicgKyBpbnRlcnZhbERlc2NyaXB0aW9uICsgJzwvZGl2Pic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLmNvbnQuaW5uZXJIVE1MID0gY29kZSArICc8L2Rpdj4nO1xuICAgICAgICBsYXN0VGljayA9IGRhdGE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGlnaXRFbGVtZW50U3RyaW5nKG5ld0RpZ2l0LCBsYXN0RGlnaXQpIHtcbiAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9sYXN0X3BsYWNlaG9sZGVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfbGFzdF9wbGFjZWhvbGRlcl9pbm5lclwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICsgbGFzdERpZ2l0ICsgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9uZXdfcGxhY2Vob2xkZXJcIj4nICsgbmV3RGlnaXQgKyAnPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9sYXN0X3JvdGF0ZVwiPicgKyBsYXN0RGlnaXQgKyAnPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9uZXdfcm90YXRlXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfbmV3X3JvdGF0ZWRcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfbmV3X3JvdGF0ZWRfaW5uZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgKyBuZXdEaWdpdCArICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZpZXcoZGF0YSkge1xuICAgICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpbnRlcnZhbE5hbWUpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGludGVydmFsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBkYXRhW2ludGVydmFsTmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoZGlnaXQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0VGljayAhPT0gbnVsbCAmJiBsYXN0VGlja1tpbnRlcnZhbE5hbWVdW2luZGV4XSAhPT0gZGF0YVtpbnRlcnZhbE5hbWVdW2luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RGlnaXRDb250KGludGVydmFsTmFtZSwgaW5kZXgpLmlubmVySFRNTCA9IGdldERpZ2l0RWxlbWVudFN0cmluZyhkYXRhW2ludGVydmFsTmFtZV1baW5kZXhdLCBsYXN0VGlja1tpbnRlcnZhbE5hbWVdW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKHZhciBpbnRlcnZhbE5hbWUgaW4gZGF0YSkge1xuICAgICAgICAgICAgX2xvb3AoaW50ZXJ2YWxOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RUaWNrID0gZGF0YTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREaWdpdENvbnQoaW50ZXJ2YWxOYW1lLCBpbmRleCkge1xuICAgICAgICBpZiAoIWRpZ2l0Q29udHNbaW50ZXJ2YWxOYW1lICsgJ18nICsgaW5kZXhdKSB7XG4gICAgICAgICAgICBkaWdpdENvbnRzW2ludGVydmFsTmFtZSArICdfJyArIGluZGV4XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgZ2V0SW50ZXJ2YWxDb250Q2xhc3NOYW1lKGludGVydmFsTmFtZSkgKyAnIC4nICsgZ2V0RGlnaXRDb250Q2xhc3NOYW1lKGluZGV4KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGlnaXRDb250c1tpbnRlcnZhbE5hbWUgKyAnXycgKyBpbmRleF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW50ZXJ2YWxDb250Q2xhc3NOYW1lKGludGVydmFsTmFtZSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudENsYXNzUHJlZml4ICsgJ2ludGVydmFsX2NvbnRfJyArIGludGVydmFsTmFtZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbnRlcnZhbENvbnRDb21tb25DbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50Q2xhc3NQcmVmaXggKyAnaW50ZXJ2YWxfY29udCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGlnaXRDb250Q2xhc3NOYW1lKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfY29udF8nICsgaW5kZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGlnaXRDb250Q29tbW9uQ2xhc3NOYW1lKCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudENsYXNzUHJlZml4ICsgJ2RpZ2l0X2NvbnQnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRPcHRpb25zKF9vcHRpb25zLCBfb3B0KSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gX29wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChfb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShpKSAmJiBfb3B0Lmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9vcHRpb25zW2ldICE9PSBudWxsICYmIF90eXBlb2YoX29wdGlvbnNbaV0pID09PSAnb2JqZWN0JyAmJiBfdHlwZW9mKF9vcHRbaV0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBsb2FkT3B0aW9ucyhfb3B0aW9uc1tpXSwgX29wdFtpXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX29wdGlvbnNbaV0gPSBfb3B0W2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB2YXIgZW5kRGF0ZSA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGVuZERhdGVEYXRhID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGZpeENvbXBhdGliaWxpdHkoKTtcblxuICAgICAgICBlbmREYXRlID0gZ2V0RGF0ZShvcHRpb25zLmVuZERhdGUpO1xuXG4gICAgICAgIGVuZERhdGVEYXRhID0gcHJlcGFyZVRpbWVCeU91dHB1dEZvcm1hdChlbmREYXRlKTtcblxuICAgICAgICB3cml0ZURhdGEoZW5kRGF0ZURhdGEpO1xuXG4gICAgICAgIGxhc3RUaWNrID0gZW5kRGF0ZURhdGE7XG5cbiAgICAgICAgaWYgKGVuZERhdGUuZ2V0VGltZSgpIDw9IERhdGUubm93KCkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5lbmRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZW5kQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVZpZXcocHJlcGFyZVRpbWVCeU91dHB1dEZvcm1hdChlbmREYXRlKSk7XG4gICAgICAgICAgICB9LCBUSU1FU1RBTVBfU0VDT05EKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgIHN0b3A6IHN0b3BcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247IiwiaW1wb3J0IHRvb2xzIGZyb20gJy4vdG9vbHMnO1xuaW1wb3J0IENvdW50ZG93biBmcm9tIFwiLi9jb3VudGRvd25cIjtcblxuXG4vKlxuKiAgIE3DqXRvZG8gcXVlIHNlIGRpc3BhcmEgY3VhbmRvIGVsIHdzMnIudlguY3NzXG4qICAgeWEgc2UgaGEgY2FyZ2FkbyB5IGhhIHBpbnRhZG8gbGEgd2ViXG4qICovXG50b29scy5vblN0eWxlc1JlYWR5ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2l0ZSB2aXN1YWxseSByZWFkeVwiKTtcbiAgICAvLyBETyBTT01FVEhJTkdcblxuXG59O1xuXG5cbi8qXG4qICAgTcOpdG9kbyBxdWUgc2UgZGlzcGFyYSBjdWFuZG8gZWwgd3Myci52WC5qc1xuKiAgIHlhIHNlIGhhIGNhcmdhZG8geSBlc3TDoSBkaXBvbmlibGUuXG4qICovXG5cbnRvb2xzLm9uRnJhbWV3b3JrUmVhZHkgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTaXRlIGZ1bmN0aW9uYWxpdHkgcmVhZHlcIik7XG4gICAgLy8gRE8gU09NRVRISU5HXG5cbiAgICBuZXcgQ291bnRkb3duKHtcbiAgICAgICAgY29udDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLFxuICAgICAgICBlbmREYXRlOiBcIkZlYnJhdXJ5IDEyLCAyMDIwIDEwOjAwOjAwXCIsXG4gICAgICAgIG91dHB1dFRyYW5zbGF0aW9uOiB7XG4gICAgICAgICAgICB5ZWFyOiAnJyxcbiAgICAgICAgICAgIHdlZWs6ICcnLFxuICAgICAgICAgICAgZGF5OiAnRMOtYXMnLFxuICAgICAgICAgICAgaG91cjogJ0hvcmFzJyxcbiAgICAgICAgICAgIG1pbnV0ZTogJ01pbnV0b3MnLFxuICAgICAgICAgICAgc2Vjb25kOiAnU2VndW5kb3MnLFxuICAgICAgICB9LFxuICAgICAgICBlbmRDYWxsYmFjazogbnVsbCxcbiAgICAgICAgb3V0cHV0Rm9ybWF0OiAnZGF5fGhvdXJ8bWludXRlfHNlY29uZCcsXG4gICAgfSkuc3RhcnQoKTtcblxufTtcbiIsIi8qXG4gKiBNaWNyb3NpdGVzIHRvb2xzIGpzOlxuICogRXN0ZSBmaWNoZXJvIGVzIHVuYSBtdWVzdHJhIGRlIHV0aWxpZGFkZXMgcHJvcGlhcyBwYXJhIGxvcyBtaWNyb3NpdGVzLlxuICogU2UgcHVlZGUgcGVyc29uYWxpemFyIGEgdHUgZ3VzdG9cbiAqXG4gKi9cblxuXG5jb25zdCBNSUNST1NJVEVfSUQgPSAnI251ZGdlJztcbmNvbnN0IGNzc01haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW2RhdGEtbWljcm9jc3NdJyk7XG5jb25zdCBNSUNST1NJVEVfU0VMRUNUSU9OID0gY2xvc2VzdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKE1JQ1JPU0lURV9JRCksICdbZGF0YS1wYXRobWljcm9zaXRlXScpO1xuY29uc3QgUEFUSF9NSUNST1NJVEUgPSBNSUNST1NJVEVfU0VMRUNUSU9OID8gTUlDUk9TSVRFX1NFTEVDVElPTi5kYXRhc2V0LnBhdGhtaWNyb3NpdGUgOiAnJztcbmxldCB3aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbmxldCBpc0Rlc2t0b3AgPSB3aWR0aCA+IDk2OTtcbmxldCBpc1RhYmxldCA9IHdpZHRoIDw9IDk2OSAmJiB3aWR0aCA+PSA3Njg7XG5sZXQgaXNNb2JpbGUgPSB3aWR0aCA8IDc2OCAmJiB3aWR0aCA+IDMwMDtcblxuXG4vKlxuICogU2VhcmNoZXMgZm9yIHRoZSBwYXJlbnQgbm9kZSBjbG9zZXN0IHRvIHRoZSBlbGVtZW50LCB3aGljaCBjb21wbGllcyB3aXRoIHRoZSBzZWxlY3RvclxuICogQHBhcmFtIHt9IGVsIC0gRGVzY3JpcHRpb25cbiAqIEBwYXJhbSB7fSBzZWxlY3RvciAtIERlc2NyaXB0aW9uXG4gKiBAcGFyYW0ge30gc3RvcFNlbGVjdG9yIC0gRGVzY3JpcHRpb25cbiAqICovXG5mdW5jdGlvbiBjbG9zZXN0KGVsLCBzZWxlY3Rvciwgc3RvcFNlbGVjdG9yKSB7XG4gICAgbGV0IHJldHZhbCA9IG51bGw7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dmFsID0gZWw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChzdG9wU2VsZWN0b3IgJiYgZWwubWF0Y2hlcyhzdG9wU2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXR2YWw7XG59XG5cblxuLypcbiAqIFJlbW92ZXMgdGhlIHN0eWxlIGF0dHIsIG9uY2UgdGhlIHN0eWxlc2hlZXQgaGF2ZSBiZWVuIGxvYWRlZFxuICogcmV0dXJuIHVuZGVmaW5lZFxuICogKi9cbi8qIGZ1bmN0aW9uIF9pbnRlcm5hbENTU0luaXQoKSB7XG4gICAgaWYoIWV4LmNzc0xvYWRlZCl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoTUlDUk9TSVRFX0lEKS5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICAgICAgZXguY3NzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgZXgub25TdHlsZXNSZWFkeSgpO1xuICAgIH1cbn0gLypcblxuLypcbiAqIEluaXRpYWxpemVzIGZ1bmN0aW9uYWxpdHkgSlMsIGFuZCBhZHZpY2VzIHdoZW4gSlMgaXMgbG9hZGVkLlxuICogcmV0dXJuIHVuZGVmaW5lZFxuICogKi9cbmZ1bmN0aW9uIF9pbnRlcm5hbEpTSW5pdCgpIHtcbiAgICB3aW5kb3cudmZlcy5fdXRpbHMuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKE1JQ1JPU0lURV9JRCkpO1xuICAgIGV4Lm9uRnJhbWV3b3JrUmVhZHkoKTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgc3R5bGVzaGVldCBDU1MgaXMgbG9hZGVkXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogKi9cbi8qIGZ1bmN0aW9uIGlzQ1NTTWljcm9Mb2FkZWQoKSB7XG4gICAgY29uc3QgZG9tU3R5bGVzID0gZG9jdW1lbnQuc3R5bGVTaGVldHM7XG4gICAgbGV0IGNvdW50Q1NTID0gMDtcbiAgICBbXS5mb3JFYWNoLmNhbGwoZG9tU3R5bGVzLCAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBocmVmID0gaXRlbS5ocmVmIHx8ICcnO1xuICAgICAgICBpZiAoaHJlZi5pbmRleE9mKFBBVEhfTUlDUk9TSVRFICsgJ2Nzcy93czJyJykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnV1MyUkNTUyBMb2FkZWQnKTtcbiAgICAgICAgICAgIGNvdW50Q1NTKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhyZWYuaW5kZXhPZihQQVRIX01JQ1JPU0lURSArICdjc3Mvc3R5bGVzLmNzcycpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ01JQ1JPQ1NTIExvYWRlZCcpO1xuICAgICAgICAgICAgY291bnRDU1MrK1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIChjb3VudENTUyA9PT0gMik7XG59XG5cbiovXG5cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAvLyBETyBTT01FVEhJTkdcbn1cblxuLypcbiAqIGxpc3RlbiBldmVudCwgb25jZSBoYXZlIGJlZW4gbG9hZGVkIHRoZSBmaWxlcyBDU1NcbiAqICovXG5cbi8qXG5pZiAoIWlzQ1NTTWljcm9Mb2FkZWQoKSkge1xuICAgIGNzc01haW4uYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIF9pbnRlcm5hbENTU0luaXQpO1xuICAgIC8vIE1ha2Ugc3VyZSBtaWNyb3NpdGUgZ2V0cyB2aXNpYmxlIGFmdGVyIDMgc2Vjc1xuICAgIHNldFRpbWVvdXQoX2ludGVybmFsQ1NTSW5pdCwgMzAwMCk7XG59IGVsc2UgaWYgKGlzQ1NTTWljcm9Mb2FkZWQoKSkge1xuICAgIHNldFRpbWVvdXQoX2ludGVybmFsQ1NTSW5pdCwgMTAwKTtcbn1cblxuLypcbiAqIGxpc3RlbiBldmVudCwgb25jZSBoYXZlIGJlZW4gbG9hZGVkIHRoZSBmaWxlcyBKU1xuICogKi9cbmlmICh3aW5kb3cudmZlcykge1xuICAgIHNldFRpbWVvdXQoX2ludGVybmFsSlNJbml0LCAxMDApXG59IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZmZXM6ZnJhbWV3b3JrUmVhZHknLCBfaW50ZXJuYWxKU0luaXQpO1xufVxuXG5jb25zdCBleCA9IHtcbiAgICBpc0Rlc2t0b3AsXG4gICAgaXNUYWJsZXQsXG4gICAgaXNNb2JpbGUsXG4gICAgbWljcm9zaXRlSWQ6IE1JQ1JPU0lURV9JRCxcbiAgICBtaWNyb3NpdGVQYXRoOiBQQVRIX01JQ1JPU0lURSxcbiAgICBpbml0OiBpbml0LFxuICAgIGNzc0xvYWRlZDogdHJ1ZSxcbiAgICBvblN0eWxlc1JlYWR5OiAoKSA9PiBudWxsLFxuICAgIG9uRnJhbWV3b3JrUmVhZHk6ICgpID0+IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==