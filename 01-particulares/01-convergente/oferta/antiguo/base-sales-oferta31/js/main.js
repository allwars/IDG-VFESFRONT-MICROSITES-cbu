/**
 * Vodafone Reboot Framework: Version 2.2.2. Generation Date: 2020-05-25T12:01:06.189Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/base-sales-oferta31/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/base-sales-oferta31/resources/scripts/countdown.js":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/base-sales-oferta31/resources/scripts/countdown.js ***!
  \**********************************************************************************************************************************************/
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

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/base-sales-oferta31/resources/scripts/main.js":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/base-sales-oferta31/resources/scripts/main.js ***!
  \*****************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/base-sales-oferta31/resources/scripts/tools.js");
/* harmony import */ var _countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countdown */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/base-sales-oferta31/resources/scripts/countdown.js");


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

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/base-sales-oferta31/resources/scripts/tools.js":
/*!******************************************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/01-particulares/01-convergente/oferta/antiguo/base-sales-oferta31/resources/scripts/tools.js ***!
  \******************************************************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9mdWxsc2l4L0Rlc2t0b3AvbWljcm9zaXRlcy1jYnUvMDEtcGFydGljdWxhcmVzLzAxLWNvbnZlcmdlbnRlL29mZXJ0YS9hbnRpZ3VvL2Jhc2Utc2FsZXMtb2ZlcnRhMzEvcmVzb3VyY2VzL3NjcmlwdHMvY291bnRkb3duLmpzIiwid2VicGFjazovLy8vVXNlcnMvZnVsbHNpeC9EZXNrdG9wL21pY3Jvc2l0ZXMtY2J1LzAxLXBhcnRpY3VsYXJlcy8wMS1jb252ZXJnZW50ZS9vZmVydGEvYW50aWd1by9iYXNlLXNhbGVzLW9mZXJ0YTMxL3Jlc291cmNlcy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9mdWxsc2l4L0Rlc2t0b3AvbWljcm9zaXRlcy1jYnUvMDEtcGFydGljdWxhcmVzLzAxLWNvbnZlcmdlbnRlL29mZXJ0YS9hbnRpZ3VvL2Jhc2Utc2FsZXMtb2ZlcnRhMzEvcmVzb3VyY2VzL3NjcmlwdHMvdG9vbHMuanMiXSwibmFtZXMiOlsiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJDb3VudGRvd24iLCJvcHQiLCJvcHRpb25zIiwiY29udCIsImVuZERhdGUiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwiZW5kQ2FsbGJhY2siLCJvdXRwdXRGb3JtYXQiLCJvdXRwdXRUcmFuc2xhdGlvbiIsIndlZWsiLCJsYXN0VGljayIsImludGVydmFsc0J5U2l6ZSIsIlRJTUVTVEFNUF9TRUNPTkQiLCJUSU1FU1RBTVBfTUlOVVRFIiwiVElNRVNUQU1QX0hPVVIiLCJUSU1FU1RBTVBfREFZIiwiVElNRVNUQU1QX1dFRUsiLCJUSU1FU1RBTVBfWUVBUiIsImVsZW1lbnRDbGFzc1ByZWZpeCIsImludGVydmFsIiwiZGlnaXRDb250cyIsImxvYWRPcHRpb25zIiwiZ2V0RGF0ZSIsImRhdGUiLCJEYXRlIiwiZXhwZWN0ZWRWYWx1ZXMiLCJpIiwiaGFzT3duUHJvcGVydHkiLCJwcmVwYXJlVGltZUJ5T3V0cHV0Rm9ybWF0IiwiZGF0ZU9iaiIsInVzZWRJbnRlcnZhbHMiLCJ1bmRlZmluZWQiLCJvdXRwdXQiLCJ0aW1lRGlmZiIsImZpbHRlciIsIml0ZW0iLCJzcGxpdCIsImluZGV4T2YiLCJnZXRUaW1lIiwibm93IiwiZm9yRWFjaCIsInZhbHVlIiwiTWF0aCIsInRydW5jIiwibGVuZ3RoIiwiZml4Q29tcGF0aWJpbGl0eSIsIngiLCJpc05hTiIsIk5hTiIsImZsb29yIiwiY2VpbCIsIndyaXRlRGF0YSIsImRhdGEiLCJjb2RlIiwiaW50ZXJ2YWxOYW1lIiwiZWxlbWVudCIsImdldEludGVydmFsQ29udENvbW1vbkNsYXNzTmFtZSIsImdldEludGVydmFsQ29udENsYXNzTmFtZSIsImludGVydmFsRGVzY3JpcHRpb24iLCJkaWdpdCIsImluZGV4IiwiZ2V0RGlnaXRDb250Q29tbW9uQ2xhc3NOYW1lIiwiZ2V0RGlnaXRDb250Q2xhc3NOYW1lIiwiZ2V0RGlnaXRFbGVtZW50U3RyaW5nIiwiaW5uZXJIVE1MIiwibmV3RGlnaXQiLCJsYXN0RGlnaXQiLCJ1cGRhdGVWaWV3IiwiX2xvb3AiLCJnZXREaWdpdENvbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfb3B0aW9ucyIsIl9vcHQiLCJzdGFydCIsImVuZERhdGVEYXRhIiwic2V0SW50ZXJ2YWwiLCJzdG9wIiwiY2xlYXJJbnRlcnZhbCIsInRvb2xzIiwib25TdHlsZXNSZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJvbkZyYW1ld29ya1JlYWR5IiwiTUlDUk9TSVRFX0lEIiwiY3NzTWFpbiIsIk1JQ1JPU0lURV9TRUxFQ1RJT04iLCJjbG9zZXN0IiwiUEFUSF9NSUNST1NJVEUiLCJkYXRhc2V0IiwicGF0aG1pY3Jvc2l0ZSIsIndpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJpc0Rlc2t0b3AiLCJpc1RhYmxldCIsImlzTW9iaWxlIiwiZWwiLCJzZWxlY3RvciIsInN0b3BTZWxlY3RvciIsInJldHZhbCIsIm1hdGNoZXMiLCJwYXJlbnRFbGVtZW50IiwiX2ludGVybmFsSlNJbml0Iiwid2luZG93IiwidmZlcyIsIl91dGlscyIsImluaXQiLCJleCIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwibWljcm9zaXRlSWQiLCJtaWNyb3NpdGVQYXRoIiwiY3NzTG9hZGVkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUEsSUFBSUEsT0FBTyxHQUFHLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0MsT0FBT0EsTUFBTSxDQUFDQyxRQUFkLEtBQTJCLFFBQTNELEdBQXNFLFVBQVVDLEdBQVYsRUFBZTtBQUFFLFNBQU8sT0FBT0EsR0FBZDtBQUFvQixDQUEzRyxHQUE4RyxVQUFVQSxHQUFWLEVBQWU7QUFBRSxTQUFPQSxHQUFHLElB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O0FBQ0FxQyxJQUFFLENBQUN6QixnQkFBSDtBQUNIO0FBR0Q7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSxTQUFTd0IsSUFBVCxHQUFnQixDQUVmLENBRkQsQ0FDSTs7QUFHSjs7OztBQUdBOzs7Ozs7QUFPQTs7Ozs7QUFHQSxJQUFJSCxNQUFNLENBQUNDLElBQVgsRUFBaUI7QUFDYkksWUFBVSxDQUFDTixlQUFELEVBQWtCLEdBQWxCLENBQVY7QUFDSCxDQUZELE1BRU87QUFDSGpDLFVBQVEsQ0FBQ3dDLGdCQUFULENBQTBCLHFCQUExQixFQUFpRFAsZUFBakQ7QUFDSDs7QUFFRCxNQUFNSyxFQUFFLEdBQUc7QUFDUGQsV0FETztBQUVQQyxVQUZPO0FBR1BDLFVBSE87QUFJUGUsYUFBVyxFQUFFM0IsWUFKTjtBQUtQNEIsZUFBYSxFQUFFeEIsY0FMUjtBQU1QbUIsTUFBSSxFQUFFQSxJQU5DO0FBT1BNLFdBQVMsRUFBRSxLQVBKO0FBUVBqQyxlQUFhLEVBQUUsTUFBTSxJQVJkO0FBU1BHLGtCQUFnQixFQUFFLE1BQU07QUFUakIsQ0FBWDtBQVlleUIsaUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvZnVsbHNpeC9EZXNrdG9wL21pY3Jvc2l0ZXMtY2J1LzAxLXBhcnRpY3VsYXJlcy8wMS1jb252ZXJnZW50ZS9vZmVydGEvYW50aWd1by9iYXNlLXNhbGVzLW9mZXJ0YTMxL3Jlc291cmNlcy9zY3JpcHRzL21haW4uanNcIik7XG4iLCJcbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBDb3VudGRvd24ob3B0KSB7XG5cbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29udDogbnVsbCxcbiAgICAgICAgICAgIGVuZERhdGU6IHtcbiAgICAgICAgICAgICAgICB5ZWFyOiAwLFxuICAgICAgICAgICAgICAgIG1vbnRoOiAwLFxuICAgICAgICAgICAgICAgIGRheTogMCxcbiAgICAgICAgICAgICAgICBob3VyOiAwLFxuICAgICAgICAgICAgICAgIG1pbnV0ZTogMCxcbiAgICAgICAgICAgICAgICBzZWNvbmQ6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmRDYWxsYmFjazogbnVsbCxcbiAgICAgICAgICAgIG91dHB1dEZvcm1hdDogJ3llYXJ8d2Vla3xkYXl8aG91cnxtaW51dGV8c2Vjb25kJyxcbiAgICAgICAgICAgIG91dHB1dFRyYW5zbGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgeWVhcjogJ1Jva3knLFxuICAgICAgICAgICAgICAgIHdlZWs6ICdUw71kbnknLFxuICAgICAgICAgICAgICAgIGRheTogJ0RueScsXG4gICAgICAgICAgICAgICAgaG91cjogJ0hvZGluJyxcbiAgICAgICAgICAgICAgICBtaW51dGU6ICdNaW51dCcsXG4gICAgICAgICAgICAgICAgc2Vjb25kOiAnVnRlxZlpbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbGFzdFRpY2sgPSBudWxsLFxuICAgICAgICBpbnRlcnZhbHNCeVNpemUgPSBbJ3llYXInLCAnd2VlaycsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJ10sXG4gICAgICAgIFRJTUVTVEFNUF9TRUNPTkQgPSAxMDAwLFxuICAgICAgICBUSU1FU1RBTVBfTUlOVVRFID0gNjAgKiBUSU1FU1RBTVBfU0VDT05ELFxuICAgICAgICBUSU1FU1RBTVBfSE9VUiA9IDYwICogVElNRVNUQU1QX01JTlVURSxcbiAgICAgICAgVElNRVNUQU1QX0RBWSA9IDI0ICogVElNRVNUQU1QX0hPVVIsXG4gICAgICAgIFRJTUVTVEFNUF9XRUVLID0gNyAqIFRJTUVTVEFNUF9EQVksXG4gICAgICAgIFRJTUVTVEFNUF9ZRUFSID0gMzY1ICogVElNRVNUQU1QX0RBWSxcbiAgICAgICAgZWxlbWVudENsYXNzUHJlZml4ID0gJ2NvdW50RG93bl8nLFxuICAgICAgICBpbnRlcnZhbCA9IG51bGwsXG4gICAgICAgIGRpZ2l0Q29udHMgPSB7fTtcblxuICAgIGxvYWRPcHRpb25zKG9wdGlvbnMsIG9wdCk7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZGF0ZVxuICAgICAqIEByZXR1cm5zIHtEYXRlfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldERhdGUoZGF0ZSkge1xuICAgICAgICBpZiAoKHR5cGVvZiBkYXRlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRlKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGV4cGVjdGVkVmFsdWVzID0ge1xuICAgICAgICAgICAgICAgICAgICBkYXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoOiAwLFxuICAgICAgICAgICAgICAgICAgICB5ZWFyOiAwLFxuICAgICAgICAgICAgICAgICAgICBob3VyOiAwLFxuICAgICAgICAgICAgICAgICAgICBtaW51dGU6IDAsXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZDogMFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleHBlY3RlZFZhbHVlcy5oYXNPd25Qcm9wZXJ0eShpKSAmJiBkYXRlLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFZhbHVlc1tpXSA9IGRhdGVbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZXhwZWN0ZWRWYWx1ZXMueWVhciwgZXhwZWN0ZWRWYWx1ZXMubW9udGggPiAwID8gZXhwZWN0ZWRWYWx1ZXMubW9udGggLSAxIDogZXhwZWN0ZWRWYWx1ZXMubW9udGgsIGV4cGVjdGVkVmFsdWVzLmRheSwgZXhwZWN0ZWRWYWx1ZXMuaG91ciwgZXhwZWN0ZWRWYWx1ZXMubWludXRlLCBleHBlY3RlZFZhbHVlcy5zZWNvbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRlID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqXG4gICAgICogQHJldHVybiB7b2JqZWN0fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHByZXBhcmVUaW1lQnlPdXRwdXRGb3JtYXQoZGF0ZU9iaikge1xuICAgICAgICB2YXIgdXNlZEludGVydmFscyA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG91dHB1dCA9IHt9LFxuICAgICAgICAgICAgdGltZURpZmYgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdXNlZEludGVydmFscyA9IGludGVydmFsc0J5U2l6ZS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLm91dHB1dEZvcm1hdC5zcGxpdCgnfCcpLmluZGV4T2YoaXRlbSkgIT09IC0xO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aW1lRGlmZiA9IGRhdGVPYmouZ2V0VGltZSgpIC0gRGF0ZS5ub3coKTtcblxuICAgICAgICB1c2VkSW50ZXJ2YWxzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICh0aW1lRGlmZiA+IDApIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgudHJ1bmModGltZURpZmYgLyBUSU1FU1RBTVBfWUVBUik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9ZRUFSO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX1dFRUspO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZURpZmYgLT0gdmFsdWUgKiBUSU1FU1RBTVBfV0VFSztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX0RBWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9EQVk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgudHJ1bmModGltZURpZmYgLyBUSU1FU1RBTVBfSE9VUik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9IT1VSO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgudHJ1bmModGltZURpZmYgLyBUSU1FU1RBTVBfTUlOVVRFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmIC09IHZhbHVlICogVElNRVNUQU1QX01JTlVURTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX1NFQ09ORCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9TRUNPTkQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gJzAwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dHB1dFtpdGVtXSA9ICgoJycgKyB2YWx1ZSkubGVuZ3RoIDwgMiA/ICcwJyArIHZhbHVlIDogJycgKyB2YWx1ZSkuc3BsaXQoJycpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpeENvbXBhdGliaWxpdHkoKSB7XG4gICAgICAgIE1hdGgudHJ1bmMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKHgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh4KTtcbiAgICAgICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd3JpdGVEYXRhKGRhdGEpIHtcbiAgICAgICAgdmFyIGNvZGUgPSAnPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnY29udFwiPicsXG4gICAgICAgICAgICBpbnRlcnZhbE5hbWUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZm9yIChpbnRlcnZhbE5hbWUgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaW50ZXJ2YWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJzxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ19pbnRlcnZhbF9iYXNpY19jb250XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgKyBnZXRJbnRlcnZhbENvbnRDb21tb25DbGFzc05hbWUoKSArICcgJyArIGdldEludGVydmFsQ29udENsYXNzTmFtZShpbnRlcnZhbE5hbWUpICsgJ1wiPicsXG4gICAgICAgICAgICAgICAgICAgIGludGVydmFsRGVzY3JpcHRpb24gPSAnPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnaW50ZXJ2YWxfYmFzaWNfY29udF9kZXNjcmlwdGlvblwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgKyBvcHRpb25zLm91dHB1dFRyYW5zbGF0aW9uW2ludGVydmFsTmFtZV0gKyAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICAgICAgICAgIGRhdGFbaW50ZXJ2YWxOYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChkaWdpdCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCArPSAnPGRpdiBjbGFzcz1cIicgKyBnZXREaWdpdENvbnRDb21tb25DbGFzc05hbWUoKSArICcgJyArIGdldERpZ2l0Q29udENsYXNzTmFtZShpbmRleCkgKyAnXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgKyBnZXREaWdpdEVsZW1lbnRTdHJpbmcoZGlnaXQsIDApICsgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb2RlICs9IGVsZW1lbnQgKyAnPC9kaXY+JyArIGludGVydmFsRGVzY3JpcHRpb24gKyAnPC9kaXY+JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuY29udC5pbm5lckhUTUwgPSBjb2RlICsgJzwvZGl2Pic7XG4gICAgICAgIGxhc3RUaWNrID0gZGF0YTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREaWdpdEVsZW1lbnRTdHJpbmcobmV3RGlnaXQsIGxhc3REaWdpdCkge1xuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2RpZ2l0X2xhc3RfcGxhY2Vob2xkZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9sYXN0X3BsYWNlaG9sZGVyX2lubmVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgKyBsYXN0RGlnaXQgKyAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2RpZ2l0X25ld19wbGFjZWhvbGRlclwiPicgKyBuZXdEaWdpdCArICc8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2RpZ2l0X2xhc3Rfcm90YXRlXCI+JyArIGxhc3REaWdpdCArICc8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2RpZ2l0X25ld19yb3RhdGVcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9uZXdfcm90YXRlZFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9uZXdfcm90YXRlZF9pbm5lclwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyArIG5ld0RpZ2l0ICsgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVmlldyhkYXRhKSB7XG4gICAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGludGVydmFsTmFtZSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaW50ZXJ2YWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIGRhdGFbaW50ZXJ2YWxOYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChkaWdpdCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RUaWNrICE9PSBudWxsICYmIGxhc3RUaWNrW2ludGVydmFsTmFtZV1baW5kZXhdICE9PSBkYXRhW2ludGVydmFsTmFtZV1baW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXREaWdpdENvbnQoaW50ZXJ2YWxOYW1lLCBpbmRleCkuaW5uZXJIVE1MID0gZ2V0RGlnaXRFbGVtZW50U3RyaW5nKGRhdGFbaW50ZXJ2YWxOYW1lXVtpbmRleF0sIGxhc3RUaWNrW2ludGVydmFsTmFtZV1baW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAodmFyIGludGVydmFsTmFtZSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBfbG9vcChpbnRlcnZhbE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdFRpY2sgPSBkYXRhO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERpZ2l0Q29udChpbnRlcnZhbE5hbWUsIGluZGV4KSB7XG4gICAgICAgIGlmICghZGlnaXRDb250c1tpbnRlcnZhbE5hbWUgKyAnXycgKyBpbmRleF0pIHtcbiAgICAgICAgICAgIGRpZ2l0Q29udHNbaW50ZXJ2YWxOYW1lICsgJ18nICsgaW5kZXhdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBnZXRJbnRlcnZhbENvbnRDbGFzc05hbWUoaW50ZXJ2YWxOYW1lKSArICcgLicgKyBnZXREaWdpdENvbnRDbGFzc05hbWUoaW5kZXgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaWdpdENvbnRzW2ludGVydmFsTmFtZSArICdfJyArIGluZGV4XTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbnRlcnZhbENvbnRDbGFzc05hbWUoaW50ZXJ2YWxOYW1lKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50Q2xhc3NQcmVmaXggKyAnaW50ZXJ2YWxfY29udF8nICsgaW50ZXJ2YWxOYW1lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEludGVydmFsQ29udENvbW1vbkNsYXNzTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRDbGFzc1ByZWZpeCArICdpbnRlcnZhbF9jb250JztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREaWdpdENvbnRDbGFzc05hbWUoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9jb250XycgKyBpbmRleDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREaWdpdENvbnRDb21tb25DbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfY29udCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZE9wdGlvbnMoX29wdGlvbnMsIF9vcHQpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBfb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKF9vcHRpb25zLmhhc093blByb3BlcnR5KGkpICYmIF9vcHQuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoX29wdGlvbnNbaV0gIT09IG51bGwgJiYgX3R5cGVvZihfb3B0aW9uc1tpXSkgPT09ICdvYmplY3QnICYmIF90eXBlb2YoX29wdFtpXSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRPcHRpb25zKF9vcHRpb25zW2ldLCBfb3B0W2ldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfb3B0aW9uc1tpXSA9IF9vcHRbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHZhciBlbmREYXRlID0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgZW5kRGF0ZURhdGEgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZml4Q29tcGF0aWJpbGl0eSgpO1xuXG4gICAgICAgIGVuZERhdGUgPSBnZXREYXRlKG9wdGlvbnMuZW5kRGF0ZSk7XG5cbiAgICAgICAgZW5kRGF0ZURhdGEgPSBwcmVwYXJlVGltZUJ5T3V0cHV0Rm9ybWF0KGVuZERhdGUpO1xuXG4gICAgICAgIHdyaXRlRGF0YShlbmREYXRlRGF0YSk7XG5cbiAgICAgICAgbGFzdFRpY2sgPSBlbmREYXRlRGF0YTtcblxuICAgICAgICBpZiAoZW5kRGF0ZS5nZXRUaW1lKCkgPD0gRGF0ZS5ub3coKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmVuZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5lbmRDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlVmlldyhwcmVwYXJlVGltZUJ5T3V0cHV0Rm9ybWF0KGVuZERhdGUpKTtcbiAgICAgICAgICAgIH0sIFRJTUVTVEFNUF9TRUNPTkQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgaWYgKGludGVydmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgICAgc3RvcDogc3RvcFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93bjsiLCJpbXBvcnQgdG9vbHMgZnJvbSAnLi90b29scyc7XG5pbXBvcnQgQ291bnRkb3duIGZyb20gJy4vY291bnRkb3duJztcblxuXG4vKlxuKiAgIE3DqXRvZG8gcXVlIHNlIGRpc3BhcmEgY3VhbmRvIGVsIHdzMnIudlguY3NzXG4qICAgeWEgc2UgaGEgY2FyZ2FkbyB5IGhhIHBpbnRhZG8gbGEgd2ViXG4qICovXG50b29scy5vblN0eWxlc1JlYWR5ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2l0ZSB2aXN1YWxseSByZWFkeVwiKTtcbiAgICAvLyBETyBTT01FVEhJTkdcblxuXG59O1xuXG5cbi8qXG4qICAgTcOpdG9kbyBxdWUgc2UgZGlzcGFyYSBjdWFuZG8gZWwgd3Myci52WC5qc1xuKiAgIHlhIHNlIGhhIGNhcmdhZG8geSBlc3TDoSBkaXBvbmlibGUuXG4qICovXG50b29scy5vbkZyYW1ld29ya1JlYWR5ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2l0ZSBmdW5jdGlvbmFsaXR5IHJlYWR5XCIpO1xuICAgIC8vIERPIFNPTUVUSElOR1xuXG4gICAgbmV3IENvdW50ZG93bih7XG4gICAgICAgIGNvbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKSxcbiAgICAgICAgZW5kRGF0ZTogXCJGZWJydWFyeSAxMiwgMjAyMCAxMDowMDowMFwiLFxuICAgICAgICBvdXRwdXRUcmFuc2xhdGlvbjoge1xuICAgICAgICAgICAgeWVhcjogJycsXG4gICAgICAgICAgICB3ZWVrOiAnJyxcbiAgICAgICAgICAgIGRheTogJ0TDrWFzJyxcbiAgICAgICAgICAgIGhvdXI6ICdIb3JhcycsXG4gICAgICAgICAgICBtaW51dGU6ICdNaW51dG9zJyxcbiAgICAgICAgICAgIHNlY29uZDogJ1NlZ3VuZG9zJyxcbiAgICAgICAgfSxcbiAgICAgICAgZW5kQ2FsbGJhY2s6IG51bGwsXG4gICAgICAgIG91dHB1dEZvcm1hdDogJ2RheXxob3VyfG1pbnV0ZXxzZWNvbmQnLFxuICAgIH0pLnN0YXJ0KCk7XG5cbn07XG5cblxuXG5cbiIsIi8qXG4gKiBNaWNyb3NpdGVzIHRvb2xzIGpzOlxuICogRXN0ZSBmaWNoZXJvIGVzIHVuYSBtdWVzdHJhIGRlIHV0aWxpZGFkZXMgcHJvcGlhcyBwYXJhIGxvcyBtaWNyb3NpdGVzLlxuICogU2UgcHVlZGUgcGVyc29uYWxpemFyIGEgdHUgZ3VzdG9cbiAqXG4gKi9cblxuXG5jb25zdCBNSUNST1NJVEVfSUQgPSAnI2ZsYXNoJztcbmNvbnN0IGNzc01haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW2RhdGEtbWljcm9jc3NdJyk7XG5jb25zdCBNSUNST1NJVEVfU0VMRUNUSU9OID0gY2xvc2VzdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKE1JQ1JPU0lURV9JRCksICdbZGF0YS1wYXRobWljcm9zaXRlXScpO1xuY29uc3QgUEFUSF9NSUNST1NJVEUgPSBNSUNST1NJVEVfU0VMRUNUSU9OID8gTUlDUk9TSVRFX1NFTEVDVElPTi5kYXRhc2V0LnBhdGhtaWNyb3NpdGUgOiAnJztcbmxldCB3aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbmxldCBpc0Rlc2t0b3AgPSB3aWR0aCA+IDk2OTtcbmxldCBpc1RhYmxldCA9IHdpZHRoIDw9IDk2OSAmJiB3aWR0aCA+PSA3Njg7XG5sZXQgaXNNb2JpbGUgPSB3aWR0aCA8IDc2OCAmJiB3aWR0aCA+IDMwMDtcblxuXG4vKlxuKiBTZWFyY2hlcyBmb3IgdGhlIHBhcmVudCBub2RlIGNsb3Nlc3QgdG8gdGhlIGVsZW1lbnQsIHdoaWNoIGNvbXBsaWVzIHdpdGggdGhlIHNlbGVjdG9yXG4qIEBwYXJhbSB7fSBlbCAtIERlc2NyaXB0aW9uXG4qIEBwYXJhbSB7fSBzZWxlY3RvciAtIERlc2NyaXB0aW9uXG4qIEBwYXJhbSB7fSBzdG9wU2VsZWN0b3IgLSBEZXNjcmlwdGlvblxuKiAqL1xuZnVuY3Rpb24gY2xvc2VzdChlbCwgc2VsZWN0b3IsIHN0b3BTZWxlY3Rvcikge1xuICAgIGxldCByZXR2YWwgPSBudWxsO1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBpZiAoZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHZhbCA9IGVsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RvcFNlbGVjdG9yICYmIGVsLm1hdGNoZXMoc3RvcFNlbGVjdG9yKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcmV0dmFsO1xufVxuXG5cbi8qXG4qIFJlbW92ZXMgdGhlIHN0eWxlIGF0dHIsIG9uY2UgdGhlIHN0eWxlc2hlZXQgaGF2ZSBiZWVuIGxvYWRlZFxuKiByZXR1cm4gdW5kZWZpbmVkXG4qICovXG4vKmZ1bmN0aW9uIF9pbnRlcm5hbENTU0luaXQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgIGV4LmNzc0xvYWRlZCA9IHRydWU7XG4gICAgZXgub25TdHlsZXNSZWFkeSgpO1xufSovXG5cblxuLypcbiogSW5pdGlhbGl6ZXMgZnVuY3Rpb25hbGl0eSBKUywgYW5kIGFkdmljZXMgd2hlbiBKUyBpcyBsb2FkZWQuXG4qIHJldHVybiB1bmRlZmluZWRcbiogKi9cbmZ1bmN0aW9uIF9pbnRlcm5hbEpTSW5pdCgpIHtcbiAgICB3aW5kb3cudmZlcy5fdXRpbHMuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmZlcy1tcy1jb250ZW50JykpO1xuICAgIGV4Lm9uRnJhbWV3b3JrUmVhZHkoKTtcbn1cblxuXG4vKlxuKiBDaGVjayBpZiBzdHlsZXNoZWV0IENTUyBpcyBsb2FkZWRcbiogQHJldHVybiB7Ym9vbGVhbn1cbiogKi9cbi8qZnVuY3Rpb24gaXNDU1NNaWNyb0xvYWRlZCgpIHtcbiAgICBjb25zdCBkb21TdHlsZXMgPSBkb2N1bWVudC5zdHlsZVNoZWV0cztcbiAgICBsZXQgY291bnRDU1MgPSAwO1xuICAgIFtdLmZvckVhY2guY2FsbChkb21TdHlsZXMsIChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGhyZWYgPSBpdGVtLmhyZWYgfHwgJyc7XG4gICAgICAgIGlmIChocmVmLmluZGV4T2YoJ3dzMnInKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXUzJSIExvYWRlZCcpO1xuICAgICAgICAgICAgY291bnRDU1MrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaHJlZi5pbmRleE9mKCdtYWluJykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTUFJTi5DU1MgTG9hZGVkJyk7XG4gICAgICAgICAgICBjb3VudENTUysrXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gKGNvdW50Q1NTID09PSAyKTtcbn0qL1xuXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgLy8gRE8gU09NRVRISU5HXG59XG5cbi8qXG4qIGxpc3RlbiBldmVudCwgb25jZSBoYXZlIGJlZW4gbG9hZGVkIHRoZSBmaWxlcyBDU1NcbiogKi9cbi8qaWYgKCFpc0NTU01pY3JvTG9hZGVkKCkpIHtcbiAgICBjc3NNYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBfaW50ZXJuYWxDU1NJbml0KTtcbn0gZWxzZSBpZiAoaXNDU1NNaWNyb0xvYWRlZCgpKSB7XG4gICAgc2V0VGltZW91dChfaW50ZXJuYWxDU1NJbml0LCAxMDApO1xufSovXG5cblxuLypcbiogbGlzdGVuIGV2ZW50LCBvbmNlIGhhdmUgYmVlbiBsb2FkZWQgdGhlIGZpbGVzIEpTXG4qICovXG5pZiAod2luZG93LnZmZXMpIHtcbiAgICBzZXRUaW1lb3V0KF9pbnRlcm5hbEpTSW5pdCwgMTAwKVxufSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2ZmVzOmZyYW1ld29ya1JlYWR5JywgX2ludGVybmFsSlNJbml0KTtcbn1cblxuY29uc3QgZXggPSB7XG4gICAgaXNEZXNrdG9wLFxuICAgIGlzVGFibGV0LFxuICAgIGlzTW9iaWxlLFxuICAgIG1pY3Jvc2l0ZUlkOiBNSUNST1NJVEVfSUQsXG4gICAgbWljcm9zaXRlUGF0aDogUEFUSF9NSUNST1NJVEUsXG4gICAgaW5pdDogaW5pdCxcbiAgICBjc3NMb2FkZWQ6IGZhbHNlLFxuICAgIG9uU3R5bGVzUmVhZHk6ICgpID0+IG51bGwsXG4gICAgb25GcmFtZXdvcmtSZWFkeTogKCkgPT4gbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9