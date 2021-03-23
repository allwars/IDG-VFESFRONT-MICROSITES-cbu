/**
 * Vodafone Reboot Framework: Version 15.5.0. Generation Date: 2020-02-03T15:49:37.700Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../microsites-cbu/04-recursos/flash-target/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../microsites-cbu/04-recursos/flash-target/resources/scripts/countdown.js":
/*!*********************************************************************************!*\
  !*** ../microsites-cbu/04-recursos/flash-target/resources/scripts/countdown.js ***!
  \*********************************************************************************/
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

/***/ "../microsites-cbu/04-recursos/flash-target/resources/scripts/main.js":
/*!****************************************************************************!*\
  !*** ../microsites-cbu/04-recursos/flash-target/resources/scripts/main.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countdown */ "../microsites-cbu/04-recursos/flash-target/resources/scripts/countdown.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools */ "../microsites-cbu/04-recursos/flash-target/resources/scripts/tools.js");


/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */

/*
tools.onStylesReady = () => {
    console.log("Site visually ready");
    // DO SOMETHING


};

*/

/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */

_tools__WEBPACK_IMPORTED_MODULE_1__["default"].onFrameworkReady = () => {
  console.log("Site functionality ready"); // DO SOMETHING

  new _countdown__WEBPACK_IMPORTED_MODULE_0__["default"]({
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

/***/ "../microsites-cbu/04-recursos/flash-target/resources/scripts/tools.js":
/*!*****************************************************************************!*\
  !*** ../microsites-cbu/04-recursos/flash-target/resources/scripts/tools.js ***!
  \*****************************************************************************/
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

/*
function _internalCSSInit() {
    document.querySelector('.vfes-ms-content').removeAttribute("style");
    ex.cssLoaded = true;
    ex.onStylesReady();
} */

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

/* function isCSSMicroLoaded() {
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
}

*/


function init() {} // DO SOMETHING

/*
* listen event, once have been loaded the files CSS
* */

/*

if (!isCSSMicroLoaded()) {
    cssMain.addEventListener('load', _internalCSSInit);
} else if (isCSSMicroLoaded()) {
    setTimeout(_internalCSSInit, 100);
}

*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL21pY3Jvc2l0ZXMtY2J1LzA0LXJlY3Vyc29zL2ZsYXNoLXRhcmdldC9yZXNvdXJjZXMvc2NyaXB0cy9jb3VudGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4uL21pY3Jvc2l0ZXMtY2J1LzA0LXJlY3Vyc29zL2ZsYXNoLXRhcmdldC9yZXNvdXJjZXMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovLy8uLi9taWNyb3NpdGVzLWNidS8wNC1yZWN1cnNvcy9mbGFzaC10YXJnZXQvcmVzb3VyY2VzL3NjcmlwdHMvdG9vbHMuanMiXSwibmFtZXMiOlsiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJDb3VudGRvd24iLCJvcHQiLCJvcHRpb25zIiwiY29udCIsImVuZERhdGUiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwiZW5kQ2FsbGJhY2siLCJvdXRwdXRGb3JtYXQiLCJvdXRwdXRUcmFuc2xhdGlvbiIsIndlZWsiLCJsYXN0VGljayIsImludGVydmFsc0J5U2l6ZSIsIlRJTUVTVEFNUF9TRUNPTkQiLCJUSU1FU1RBTVBfTUlOVVRFIiwiVElNRVNUQU1QX0hPVVIiLCJUSU1FU1RBTVBfREFZIiwiVElNRVNUQU1QX1dFRUsiLCJUSU1FU1RBTVBfWUVBUiIsImVsZW1lbnRDbGFzc1ByZWZpeCIsImludGVydmFsIiwiZGlnaXRDb250cyIsImxvYWRPcHRpb25zIiwiZ2V0RGF0ZSIsImRhdGUiLCJEYXRlIiwiZXhwZWN0ZWRWYWx1ZXMiLCJpIiwiaGFzT3duUHJvcGVydHkiLCJwcmVwYXJlVGltZUJ5T3V0cHV0Rm9ybWF0IiwiZGF0ZU9iaiIsInVzZWRJbnRlcnZhbHMiLCJ1bmRlZmluZWQiLCJvdXRwdXQiLCJ0aW1lRGlmZiIsImZpbHRlciIsIml0ZW0iLCJzcGxpdCIsImluZGV4T2YiLCJnZXRUaW1lIiwibm93IiwiZm9yRWFjaCIsInZhbHVlIiwiTWF0aCIsInRydW5jIiwibGVuZ3RoIiwiZml4Q29tcGF0aWJpbGl0eSIsIngiLCJpc05hTiIsIk5hTiIsImZsb29yIiwiY2VpbCIsIndyaXRlRGF0YSIsImRhdGEiLCJjb2RlIiwiaW50ZXJ2YWxOYW1lIiwiZWxlbWVudCIsImdldEludGVydmFsQ29udENvbW1vbkNsYXNzTmFtZSIsImdldEludGVydmFsQ29udENsYXNzTmFtZSIsImludGVydmFsRGVzY3JpcHRpb24iLCJkaWdpdCIsImluZGV4IiwiZ2V0RGlnaXRDb250Q29tbW9uQ2xhc3NOYW1lIiwiZ2V0RGlnaXRDb250Q2xhc3NOYW1lIiwiZ2V0RGlnaXRFbGVtZW50U3RyaW5nIiwiaW5uZXJIVE1MIiwibmV3RGlnaXQiLCJsYXN0RGlnaXQiLCJ1cGRhdGVWaWV3IiwiX2xvb3AiLCJnZXREaWdpdENvbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfb3B0aW9ucyIsIl9vcHQiLCJzdGFydCIsImVuZERhdGVEYXRhIiwic2V0SW50ZXJ2YWwiLCJzdG9wIiwiY2xlYXJJbnRlcnZhbCIsInRvb2xzIiwib25GcmFtZXdvcmtSZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJNSUNST1NJVEVfSUQiLCJjc3NNYWluIiwiTUlDUk9TSVRFX1NFTEVDVElPTiIsImNsb3Nlc3QiLCJQQVRIX01JQ1JPU0lURSIsImRhdGFzZXQiLCJwYXRobWljcm9zaXRlIiwid2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImlzRGVza3RvcCIsImlzVGFibGV0IiwiaXNNb2JpbGUiLCJlbCIsInNlbGVjdG9yIiwic3RvcFNlbGVjdG9yIiwicmV0dmFsIiwibWF0Y2hlcyIsInBhcmVudEVsZW1lbnQiLCJfaW50ZXJuYWxKU0luaXQiLCJ3aW5kb3ciLCJ2ZmVzIiwiX3V0aWxzIiwiaW5pdCIsImV4Iiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtaWNyb3NpdGVJZCIsIm1pY3Jvc2l0ZVBhdGgi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LEVBQWlEUCxlQUFqRDtBQUNIOztBQUVELE1BQU1LLEVBQUUsR0FBRztBQUNQZCxXQURPO0FBRVBDLFVBRk87QUFHUEMsVUFITztBQUlQZSxhQUFXLEVBQUUzQixZQUpOO0FBS1A0QixlQUFhLEVBQUV4QixjQUxSO0FBTVBtQixNQUFJLEVBQUVBLElBTkM7QUFPUE0sV0FBUyxFQUFFLElBUEo7QUFRUEMsZUFBYSxFQUFFLE1BQU0sSUFSZDtBQVNQakMsa0JBQWdCLEVBQUUsTUFBTTtBQVRqQixDQUFYO0FBWWUyQixpRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi9taWNyb3NpdGVzLWNidS8wNC1yZWN1cnNvcy9mbGFzaC10YXJnZXQvcmVzb3VyY2VzL3NjcmlwdHMvbWFpbi5qc1wiKTtcbiIsIlxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIENvdW50ZG93bihvcHQpIHtcblxuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250OiBudWxsLFxuICAgICAgICAgICAgZW5kRGF0ZToge1xuICAgICAgICAgICAgICAgIHllYXI6IDAsXG4gICAgICAgICAgICAgICAgbW9udGg6IDAsXG4gICAgICAgICAgICAgICAgZGF5OiAwLFxuICAgICAgICAgICAgICAgIGhvdXI6IDAsXG4gICAgICAgICAgICAgICAgbWludXRlOiAwLFxuICAgICAgICAgICAgICAgIHNlY29uZDogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZENhbGxiYWNrOiBudWxsLFxuICAgICAgICAgICAgb3V0cHV0Rm9ybWF0OiAneWVhcnx3ZWVrfGRheXxob3VyfG1pbnV0ZXxzZWNvbmQnLFxuICAgICAgICAgICAgb3V0cHV0VHJhbnNsYXRpb246IHtcbiAgICAgICAgICAgICAgICB5ZWFyOiAnUm9reScsXG4gICAgICAgICAgICAgICAgd2VlazogJ1TDvWRueScsXG4gICAgICAgICAgICAgICAgZGF5OiAnRG55JyxcbiAgICAgICAgICAgICAgICBob3VyOiAnSG9kaW4nLFxuICAgICAgICAgICAgICAgIG1pbnV0ZTogJ01pbnV0JyxcbiAgICAgICAgICAgICAgICBzZWNvbmQ6ICdWdGXFmWluJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsYXN0VGljayA9IG51bGwsXG4gICAgICAgIGludGVydmFsc0J5U2l6ZSA9IFsneWVhcicsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnXSxcbiAgICAgICAgVElNRVNUQU1QX1NFQ09ORCA9IDEwMDAsXG4gICAgICAgIFRJTUVTVEFNUF9NSU5VVEUgPSA2MCAqIFRJTUVTVEFNUF9TRUNPTkQsXG4gICAgICAgIFRJTUVTVEFNUF9IT1VSID0gNjAgKiBUSU1FU1RBTVBfTUlOVVRFLFxuICAgICAgICBUSU1FU1RBTVBfREFZID0gMjQgKiBUSU1FU1RBTVBfSE9VUixcbiAgICAgICAgVElNRVNUQU1QX1dFRUsgPSA3ICogVElNRVNUQU1QX0RBWSxcbiAgICAgICAgVElNRVNUQU1QX1lFQVIgPSAzNjUgKiBUSU1FU1RBTVBfREFZLFxuICAgICAgICBlbGVtZW50Q2xhc3NQcmVmaXggPSAnY291bnREb3duXycsXG4gICAgICAgIGludGVydmFsID0gbnVsbCxcbiAgICAgICAgZGlnaXRDb250cyA9IHt9O1xuXG4gICAgbG9hZE9wdGlvbnMob3B0aW9ucywgb3B0KTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBkYXRlXG4gICAgICogQHJldHVybnMge0RhdGV9XG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0RGF0ZShkYXRlKSB7XG4gICAgICAgIGlmICgodHlwZW9mIGRhdGUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGUpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZXhwZWN0ZWRWYWx1ZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRheTogMCxcbiAgICAgICAgICAgICAgICAgICAgbW9udGg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHllYXI6IDAsXG4gICAgICAgICAgICAgICAgICAgIGhvdXI6IDAsXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogMCxcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kOiAwXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGVjdGVkVmFsdWVzLmhhc093blByb3BlcnR5KGkpICYmIGRhdGUuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkVmFsdWVzW2ldID0gZGF0ZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShleHBlY3RlZFZhbHVlcy55ZWFyLCBleHBlY3RlZFZhbHVlcy5tb250aCA+IDAgPyBleHBlY3RlZFZhbHVlcy5tb250aCAtIDEgOiBleHBlY3RlZFZhbHVlcy5tb250aCwgZXhwZWN0ZWRWYWx1ZXMuZGF5LCBleHBlY3RlZFZhbHVlcy5ob3VyLCBleHBlY3RlZFZhbHVlcy5taW51dGUsIGV4cGVjdGVkVmFsdWVzLnNlY29uZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGUgPT09ICdudW1iZXInIHx8IHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGVPYmpcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAgICovXG4gICAgZnVuY3Rpb24gcHJlcGFyZVRpbWVCeU91dHB1dEZvcm1hdChkYXRlT2JqKSB7XG4gICAgICAgIHZhciB1c2VkSW50ZXJ2YWxzID0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgb3V0cHV0ID0ge30sXG4gICAgICAgICAgICB0aW1lRGlmZiA9IHVuZGVmaW5lZDtcblxuICAgICAgICB1c2VkSW50ZXJ2YWxzID0gaW50ZXJ2YWxzQnlTaXplLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMub3V0cHV0Rm9ybWF0LnNwbGl0KCd8JykuaW5kZXhPZihpdGVtKSAhPT0gLTE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRpbWVEaWZmID0gZGF0ZU9iai5nZXRUaW1lKCkgLSBEYXRlLm5vdygpO1xuXG4gICAgICAgIHVzZWRJbnRlcnZhbHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHRpbWVEaWZmID4gMCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC50cnVuYyh0aW1lRGlmZiAvIFRJTUVTVEFNUF9ZRUFSKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmIC09IHZhbHVlICogVElNRVNUQU1QX1lFQVI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgudHJ1bmModGltZURpZmYgLyBUSU1FU1RBTVBfV0VFSyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9XRUVLO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgudHJ1bmModGltZURpZmYgLyBUSU1FU1RBTVBfREFZKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmIC09IHZhbHVlICogVElNRVNUQU1QX0RBWTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC50cnVuYyh0aW1lRGlmZiAvIFRJTUVTVEFNUF9IT1VSKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmIC09IHZhbHVlICogVElNRVNUQU1QX0hPVVI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC50cnVuYyh0aW1lRGlmZiAvIFRJTUVTVEFNUF9NSU5VVEUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZURpZmYgLT0gdmFsdWUgKiBUSU1FU1RBTVBfTUlOVVRFO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgudHJ1bmModGltZURpZmYgLyBUSU1FU1RBTVBfU0VDT05EKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmIC09IHZhbHVlICogVElNRVNUQU1QX1NFQ09ORDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAnMDAnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0cHV0W2l0ZW1dID0gKCgnJyArIHZhbHVlKS5sZW5ndGggPCAyID8gJzAnICsgdmFsdWUgOiAnJyArIHZhbHVlKS5zcGxpdCgnJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZml4Q29tcGF0aWJpbGl0eSgpIHtcbiAgICAgICAgTWF0aC50cnVuYyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4oeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHgpO1xuICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3cml0ZURhdGEoZGF0YSkge1xuICAgICAgICB2YXIgY29kZSA9ICc8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdjb250XCI+JyxcbiAgICAgICAgICAgIGludGVydmFsTmFtZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICBmb3IgKGludGVydmFsTmFtZSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShpbnRlcnZhbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAnPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnX2ludGVydmFsX2Jhc2ljX2NvbnRcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArIGdldEludGVydmFsQ29udENvbW1vbkNsYXNzTmFtZSgpICsgJyAnICsgZ2V0SW50ZXJ2YWxDb250Q2xhc3NOYW1lKGludGVydmFsTmFtZSkgKyAnXCI+JyxcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWxEZXNjcmlwdGlvbiA9ICc8ZGl2IGNsYXNzPVwiJyArIGVsZW1lbnRDbGFzc1ByZWZpeCArICdpbnRlcnZhbF9iYXNpY19jb250X2Rlc2NyaXB0aW9uXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyArIG9wdGlvbnMub3V0cHV0VHJhbnNsYXRpb25baW50ZXJ2YWxOYW1lXSArICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgZGF0YVtpbnRlcnZhbE5hbWVdLmZvckVhY2goZnVuY3Rpb24gKGRpZ2l0LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ICs9ICc8ZGl2IGNsYXNzPVwiJyArIGdldERpZ2l0Q29udENvbW1vbkNsYXNzTmFtZSgpICsgJyAnICsgZ2V0RGlnaXRDb250Q2xhc3NOYW1lKGluZGV4KSArICdcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyArIGdldERpZ2l0RWxlbWVudFN0cmluZyhkaWdpdCwgMCkgKyAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvZGUgKz0gZWxlbWVudCArICc8L2Rpdj4nICsgaW50ZXJ2YWxEZXNjcmlwdGlvbiArICc8L2Rpdj4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy5jb250LmlubmVySFRNTCA9IGNvZGUgKyAnPC9kaXY+JztcbiAgICAgICAgbGFzdFRpY2sgPSBkYXRhO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERpZ2l0RWxlbWVudFN0cmluZyhuZXdEaWdpdCwgbGFzdERpZ2l0KSB7XG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfbGFzdF9wbGFjZWhvbGRlclwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2RpZ2l0X2xhc3RfcGxhY2Vob2xkZXJfaW5uZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyArIGxhc3REaWdpdCArICdcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfbmV3X3BsYWNlaG9sZGVyXCI+JyArIG5ld0RpZ2l0ICsgJzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfbGFzdF9yb3RhdGVcIj4nICsgbGFzdERpZ2l0ICsgJzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgKyBlbGVtZW50Q2xhc3NQcmVmaXggKyAnZGlnaXRfbmV3X3JvdGF0ZVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2RpZ2l0X25ld19yb3RhdGVkXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2RpZ2l0X25ld19yb3RhdGVkX2lubmVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICsgbmV3RGlnaXQgKyAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVWaWV3KGRhdGEpIHtcbiAgICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaW50ZXJ2YWxOYW1lKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShpbnRlcnZhbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgZGF0YVtpbnRlcnZhbE5hbWVdLmZvckVhY2goZnVuY3Rpb24gKGRpZ2l0LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdFRpY2sgIT09IG51bGwgJiYgbGFzdFRpY2tbaW50ZXJ2YWxOYW1lXVtpbmRleF0gIT09IGRhdGFbaW50ZXJ2YWxOYW1lXVtpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldERpZ2l0Q29udChpbnRlcnZhbE5hbWUsIGluZGV4KS5pbm5lckhUTUwgPSBnZXREaWdpdEVsZW1lbnRTdHJpbmcoZGF0YVtpbnRlcnZhbE5hbWVdW2luZGV4XSwgbGFzdFRpY2tbaW50ZXJ2YWxOYW1lXVtpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICh2YXIgaW50ZXJ2YWxOYW1lIGluIGRhdGEpIHtcbiAgICAgICAgICAgIF9sb29wKGludGVydmFsTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0VGljayA9IGRhdGE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGlnaXRDb250KGludGVydmFsTmFtZSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKCFkaWdpdENvbnRzW2ludGVydmFsTmFtZSArICdfJyArIGluZGV4XSkge1xuICAgICAgICAgICAgZGlnaXRDb250c1tpbnRlcnZhbE5hbWUgKyAnXycgKyBpbmRleF0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGdldEludGVydmFsQ29udENsYXNzTmFtZShpbnRlcnZhbE5hbWUpICsgJyAuJyArIGdldERpZ2l0Q29udENsYXNzTmFtZShpbmRleCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpZ2l0Q29udHNbaW50ZXJ2YWxOYW1lICsgJ18nICsgaW5kZXhdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEludGVydmFsQ29udENsYXNzTmFtZShpbnRlcnZhbE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRDbGFzc1ByZWZpeCArICdpbnRlcnZhbF9jb250XycgKyBpbnRlcnZhbE5hbWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW50ZXJ2YWxDb250Q29tbW9uQ2xhc3NOYW1lKCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudENsYXNzUHJlZml4ICsgJ2ludGVydmFsX2NvbnQnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERpZ2l0Q29udENsYXNzTmFtZShpbmRleCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudENsYXNzUHJlZml4ICsgJ2RpZ2l0X2NvbnRfJyArIGluZGV4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERpZ2l0Q29udENvbW1vbkNsYXNzTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRDbGFzc1ByZWZpeCArICdkaWdpdF9jb250JztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkT3B0aW9ucyhfb3B0aW9ucywgX29wdCkge1xuICAgICAgICBmb3IgKHZhciBpIGluIF9vcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoX29wdGlvbnMuaGFzT3duUHJvcGVydHkoaSkgJiYgX29wdC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgIGlmIChfb3B0aW9uc1tpXSAhPT0gbnVsbCAmJiBfdHlwZW9mKF9vcHRpb25zW2ldKSA9PT0gJ29iamVjdCcgJiYgX3R5cGVvZihfb3B0W2ldKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZE9wdGlvbnMoX29wdGlvbnNbaV0sIF9vcHRbaV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9vcHRpb25zW2ldID0gX29wdFtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdmFyIGVuZERhdGUgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICBlbmREYXRlRGF0YSA9IHVuZGVmaW5lZDtcblxuICAgICAgICBmaXhDb21wYXRpYmlsaXR5KCk7XG5cbiAgICAgICAgZW5kRGF0ZSA9IGdldERhdGUob3B0aW9ucy5lbmREYXRlKTtcblxuICAgICAgICBlbmREYXRlRGF0YSA9IHByZXBhcmVUaW1lQnlPdXRwdXRGb3JtYXQoZW5kRGF0ZSk7XG5cbiAgICAgICAgd3JpdGVEYXRhKGVuZERhdGVEYXRhKTtcblxuICAgICAgICBsYXN0VGljayA9IGVuZERhdGVEYXRhO1xuXG4gICAgICAgIGlmIChlbmREYXRlLmdldFRpbWUoKSA8PSBEYXRlLm5vdygpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuZW5kQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmVuZENhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVWaWV3KHByZXBhcmVUaW1lQnlPdXRwdXRGb3JtYXQoZW5kRGF0ZSkpO1xuICAgICAgICAgICAgfSwgVElNRVNUQU1QX1NFQ09ORCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICBzdG9wOiBzdG9wXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duOyIsImltcG9ydCBDb3VudGRvd24gZnJvbSAnLi9jb3VudGRvd24nO1xuaW1wb3J0IHRvb2xzIGZyb20gJy4vdG9vbHMnO1xuXG4vKlxuKiAgIE3DqXRvZG8gcXVlIHNlIGRpc3BhcmEgY3VhbmRvIGVsIHdzMnIudlguY3NzXG4qICAgeWEgc2UgaGEgY2FyZ2FkbyB5IGhhIHBpbnRhZG8gbGEgd2ViXG4qICovXG4vKlxudG9vbHMub25TdHlsZXNSZWFkeSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNpdGUgdmlzdWFsbHkgcmVhZHlcIik7XG4gICAgLy8gRE8gU09NRVRISU5HXG5cblxufTtcblxuKi9cblxuLypcbiogICBNw6l0b2RvIHF1ZSBzZSBkaXNwYXJhIGN1YW5kbyBlbCB3czJyLnZYLmpzXG4qICAgeWEgc2UgaGEgY2FyZ2FkbyB5IGVzdMOhIGRpcG9uaWJsZS5cbiogKi9cbnRvb2xzLm9uRnJhbWV3b3JrUmVhZHkgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTaXRlIGZ1bmN0aW9uYWxpdHkgcmVhZHlcIik7XG4gICAgLy8gRE8gU09NRVRISU5HXG4gICAgbmV3IENvdW50ZG93bih7XG4gICAgICAgIGNvbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKSxcbiAgICAgICAgZW5kRGF0ZTogXCJKYW51YXJ5IDIxLCAyMDIwIDEwOjAwOjAwXCIsXG4gICAgICAgIG91dHB1dFRyYW5zbGF0aW9uOiB7XG4gICAgICAgICAgICB5ZWFyOiAnJyxcbiAgICAgICAgICAgIHdlZWs6ICcnLFxuICAgICAgICAgICAgZGF5OiAnRMOtYXMnLFxuICAgICAgICAgICAgaG91cjogJ0hvcmFzJyxcbiAgICAgICAgICAgIG1pbnV0ZTogJ01pbnV0b3MnLFxuICAgICAgICAgICAgc2Vjb25kOiAnU2VndW5kb3MnLFxuICAgICAgICB9LFxuICAgICAgICBlbmRDYWxsYmFjazogbnVsbCxcbiAgICAgICAgb3V0cHV0Rm9ybWF0OiAnZGF5fGhvdXJ8bWludXRlfHNlY29uZCcsXG4gICAgfSkuc3RhcnQoKTtcblxufTtcblxuXG5cblxuIiwiLypcbiAqIE1pY3Jvc2l0ZXMgdG9vbHMganM6XG4gKiBFc3RlIGZpY2hlcm8gZXMgdW5hIG11ZXN0cmEgZGUgdXRpbGlkYWRlcyBwcm9waWFzIHBhcmEgbG9zIG1pY3Jvc2l0ZXMuXG4gKiBTZSBwdWVkZSBwZXJzb25hbGl6YXIgYSB0dSBndXN0b1xuICpcbiAqL1xuXG5cbmNvbnN0IE1JQ1JPU0lURV9JRCA9ICcjZmxhc2gnO1xuY29uc3QgY3NzTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbZGF0YS1taWNyb2Nzc10nKTtcbmNvbnN0IE1JQ1JPU0lURV9TRUxFQ1RJT04gPSBjbG9zZXN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoTUlDUk9TSVRFX0lEKSwgJ1tkYXRhLXBhdGhtaWNyb3NpdGVdJyk7XG5jb25zdCBQQVRIX01JQ1JPU0lURSA9IE1JQ1JPU0lURV9TRUxFQ1RJT04gPyBNSUNST1NJVEVfU0VMRUNUSU9OLmRhdGFzZXQucGF0aG1pY3Jvc2l0ZSA6ICcnO1xubGV0IHdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xubGV0IGlzRGVza3RvcCA9IHdpZHRoID4gOTY5O1xubGV0IGlzVGFibGV0ID0gd2lkdGggPD0gOTY5ICYmIHdpZHRoID49IDc2ODtcbmxldCBpc01vYmlsZSA9IHdpZHRoIDwgNzY4ICYmIHdpZHRoID4gMzAwO1xuXG5cbi8qXG4qIFNlYXJjaGVzIGZvciB0aGUgcGFyZW50IG5vZGUgY2xvc2VzdCB0byB0aGUgZWxlbWVudCwgd2hpY2ggY29tcGxpZXMgd2l0aCB0aGUgc2VsZWN0b3JcbiogQHBhcmFtIHt9IGVsIC0gRGVzY3JpcHRpb25cbiogQHBhcmFtIHt9IHNlbGVjdG9yIC0gRGVzY3JpcHRpb25cbiogQHBhcmFtIHt9IHN0b3BTZWxlY3RvciAtIERlc2NyaXB0aW9uXG4qICovXG5mdW5jdGlvbiBjbG9zZXN0KGVsLCBzZWxlY3Rvciwgc3RvcFNlbGVjdG9yKSB7XG4gICAgbGV0IHJldHZhbCA9IG51bGw7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dmFsID0gZWw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChzdG9wU2VsZWN0b3IgJiYgZWwubWF0Y2hlcyhzdG9wU2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXR2YWw7XG59XG5cblxuLypcbiogUmVtb3ZlcyB0aGUgc3R5bGUgYXR0ciwgb25jZSB0aGUgc3R5bGVzaGVldCBoYXZlIGJlZW4gbG9hZGVkXG4qIHJldHVybiB1bmRlZmluZWRcbiogKi9cblxuLypcbmZ1bmN0aW9uIF9pbnRlcm5hbENTU0luaXQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgIGV4LmNzc0xvYWRlZCA9IHRydWU7XG4gICAgZXgub25TdHlsZXNSZWFkeSgpO1xufSAqL1xuXG5cbi8qXG4qIEluaXRpYWxpemVzIGZ1bmN0aW9uYWxpdHkgSlMsIGFuZCBhZHZpY2VzIHdoZW4gSlMgaXMgbG9hZGVkLlxuKiByZXR1cm4gdW5kZWZpbmVkXG4qICovXG5mdW5jdGlvbiBfaW50ZXJuYWxKU0luaXQoKSB7XG4gICAgd2luZG93LnZmZXMuX3V0aWxzLmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpKTtcbiAgICBleC5vbkZyYW1ld29ya1JlYWR5KCk7XG59XG5cblxuLypcbiogQ2hlY2sgaWYgc3R5bGVzaGVldCBDU1MgaXMgbG9hZGVkXG4qIEByZXR1cm4ge2Jvb2xlYW59XG4qICovXG4vKiBmdW5jdGlvbiBpc0NTU01pY3JvTG9hZGVkKCkge1xuICAgIGNvbnN0IGRvbVN0eWxlcyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xuICAgIGxldCBjb3VudENTUyA9IDA7XG4gICAgW10uZm9yRWFjaC5jYWxsKGRvbVN0eWxlcywgKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaHJlZiA9IGl0ZW0uaHJlZiB8fCAnJztcbiAgICAgICAgaWYgKGhyZWYuaW5kZXhPZignd3MycicpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1dTMlIgTG9hZGVkJyk7XG4gICAgICAgICAgICBjb3VudENTUysrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChocmVmLmluZGV4T2YoJ21haW4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNQUlOLkNTUyBMb2FkZWQnKTtcbiAgICAgICAgICAgIGNvdW50Q1NTKytcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAoY291bnRDU1MgPT09IDIpO1xufVxuXG4qL1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIC8vIERPIFNPTUVUSElOR1xufVxuXG4vKlxuKiBsaXN0ZW4gZXZlbnQsIG9uY2UgaGF2ZSBiZWVuIGxvYWRlZCB0aGUgZmlsZXMgQ1NTXG4qICovXG5cbi8qXG5cbmlmICghaXNDU1NNaWNyb0xvYWRlZCgpKSB7XG4gICAgY3NzTWFpbi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgX2ludGVybmFsQ1NTSW5pdCk7XG59IGVsc2UgaWYgKGlzQ1NTTWljcm9Mb2FkZWQoKSkge1xuICAgIHNldFRpbWVvdXQoX2ludGVybmFsQ1NTSW5pdCwgMTAwKTtcbn1cblxuKi9cblxuXG4vKlxuKiBsaXN0ZW4gZXZlbnQsIG9uY2UgaGF2ZSBiZWVuIGxvYWRlZCB0aGUgZmlsZXMgSlNcbiogKi9cbmlmICh3aW5kb3cudmZlcykge1xuICAgIHNldFRpbWVvdXQoX2ludGVybmFsSlNJbml0LCAxMDApXG59IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZmZXM6ZnJhbWV3b3JrUmVhZHknLCBfaW50ZXJuYWxKU0luaXQpO1xufVxuXG5jb25zdCBleCA9IHtcbiAgICBpc0Rlc2t0b3AsXG4gICAgaXNUYWJsZXQsXG4gICAgaXNNb2JpbGUsXG4gICAgbWljcm9zaXRlSWQ6IE1JQ1JPU0lURV9JRCxcbiAgICBtaWNyb3NpdGVQYXRoOiBQQVRIX01JQ1JPU0lURSxcbiAgICBpbml0OiBpbml0LFxuICAgIGNzc0xvYWRlZDogdHJ1ZSxcbiAgICBvblN0eWxlc1JlYWR5OiAoKSA9PiBudWxsLFxuICAgIG9uRnJhbWV3b3JrUmVhZHk6ICgpID0+IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==