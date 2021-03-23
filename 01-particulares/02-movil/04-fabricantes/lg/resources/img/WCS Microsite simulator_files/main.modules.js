/**
 * Vodafone Reboot Framework: Version 15.3.0. Generation Date: 2019-11-27T11:10:48.112Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/assets/scripts/es/main.modules.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}


/***/ }),

/***/ "./resources/assets/scripts/es/_dropdown.js":
/*!**************************************************!*\
  !*** ./resources/assets/scripts/es/_dropdown.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dropdown; });
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/env */ "./resources/assets/scripts/es/config/env.js");
/* harmony import */ var _utils_closest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/closest */ "./resources/assets/scripts/es/utils/closest.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var defaults = {
  $element: undefined,
  selectors: {
    dropdown: '.js-dropdown-button',
    select: '.js-dropdown-select',
    all: '.js-dropdown-button-all',
    checkbox: '.js-dropdown-checkbox',
    placeholder: '.js-dropdown-placeholder',
    number: '.js-dropdown-number',
    list: '.js-dropdown-list',
    label: '.js-dropdown-label',
    option: '.js-dropdown-option',
    wcselect: 'vfes-dropdown'
  },
  classes: {
    open: "".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "dropdown__select-open"),
    select: 'js-dropdown-select',
    button: 'js-dropdown-button',
    all: 'js-dropdown-button-all',
    less: "".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "dropdown__button-all--less"),
    tick: "".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "dropdown__button-all--tick")
  }
};
/**
 * Dropdown.
 *
 * @module Dropdown
 * @param {Object} properties - specifies the configurations
 * for the module.
 */

var Dropdown =
/*#__PURE__*/
function () {
  function Dropdown() {
    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Dropdown);

    this.$element = properties.$element;
    this.selectors = defaults.selectors;
    this.classes = defaults.classes;
    this.isOpened = false;
    this.styles = properties.$styles;
    this.onSelect = new Event('vfes:selected');
  }
  /**
   * Initialise the module.
   *
   * @function init
   *
   * @return undefined
   */


  _createClass(Dropdown, [{
    key: "init",
    value: function init() {
      var $selectors = this.selectors;
      var $container = this.$element;
      var input = $container.querySelectorAll($selectors.checkbox);
      var inputList = Array.from(input).map(function (item) {
        return {
          check: item,
          label: item.nextElementSibling.innerHTML
        };
      });
      this.bindContainer(inputList);
      this.bindInputs(inputList);
    }
    /**
     * Bind the events to the actionable elements
     * within the rates system.
     *
     * @function bindContainer
     *
     * @return undefined
     */

  }, {
    key: "bindContainer",
    value: function bindContainer(inputList) {
      var _this = this;

      var $selectors = this.selectors;
      var $classes = this.classes;
      var tick = $classes.tick;
      var less = $classes.less;
      var $container = this.$element;
      var all = $container.querySelector($selectors.all);
      var dropdown = $container.querySelector($selectors.dropdown);
      var placeholder = $container.querySelector($selectors.placeholder);
      var text = placeholder.innerHTML;
      document.body.addEventListener('click', function (e) {
        if (!Object(_utils_closest__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target, $selectors.select) && Object(_utils_closest__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target, $selectors.wcselect)) {
          $container.classList.remove($classes.open);
        }
      });
      $container.addEventListener('click', function (e) {
        var actualTarget = e.target;

        if (actualTarget.classList.contains($classes.button) && $container.classList.contains($classes.open)) {
          e.preventDefault();
          $container.classList.remove($classes.open);
        } else if (actualTarget.classList.contains($classes.button) && !$container.classList.contains($classes.open)) {
          e.preventDefault();
          $container.classList.add($classes.open);
        }

        if (actualTarget.classList.contains($classes.all)) {
          e.preventDefault();

          if (actualTarget.classList.contains(less) || actualTarget.classList.contains(tick)) {
            actualTarget.classList.remove(tick);
            actualTarget.classList.remove(less);
            actualTarget.innerText = 'Seleccionar todo';
            inputList.forEach(function (input) {
              input.check.checked = false;
            });
          } else {
            actualTarget.classList.add(tick);
            actualTarget.innerText = 'Deseleccionar todo';
            inputList.forEach(function (input) {
              input.check.checked = true;
            });
          }

          _this.placeholderText(inputList, text);
        }
      });
      dropdown.addEventListener('keydown', function (e) {
        if (e.keyCode === 9 && _this.isOpened) {
          // Tab
          e.preventDefault();
        } else if ((e.keyCode === 40 || e.keyCode === 38) && !_this.isOpened) {
          e.preventDefault();
          $container.classList.add($classes.open);
          ;
          all.focus();
        }
      });
      all.addEventListener('keydown', function (e) {
        if (e.keyCode === 40) {
          // Arrow Down
          e.preventDefault();

          if (inputList[0]) {
            inputList[0].focus();
          }
        } else if (e.keyCode === 9) {
          e.preventDefault();
        } else if (e.keyCode === 27) {
          // Escape
          $container.classList.remove($classes.open);
          dropdown.focus();
        }
      });
    }
    /**
     * Bind the events to the actionable elements
     * within the rates system.
     *
     * @function bindInputs
     *
     * @return undefined
     */

  }, {
    key: "bindInputs",
    value: function bindInputs(inputList) {
      var _this2 = this;

      var $selectors = this.selectors;
      var $classes = this.classes;
      var tick = $classes.tick;
      var less = $classes.less;
      var $container = this.$element;
      var all = $container.querySelector($selectors.all);
      var dropdown = $container.querySelector($selectors.dropdown);
      var placeholder = $container.querySelector($selectors.placeholder);
      var text = placeholder.innerHTML;
      [].forEach.call(inputList, function (checkInput, key) {
        var input = checkInput.check;
        input.addEventListener('change', function (e) {
          var numChecks = inputList.filter(function (item) {
            return item.checked;
          });

          if (numChecks > 0 && numChecks < inputList.length) {
            all.classList.remove(tick);
            all.classList.add(less);
            all.innerText = 'Deseleccionar todo';
          } else if (numChecks === 0) {
            all.classList.remove(less);
            all.classList.remove(tick);
            all.innerText = 'Seleccionar todo';
          } else if (numChecks === inputList.length) {
            all.classList.add(tick);
            all.classList.remove(less);
          }

          _this2.placeholderText(inputList, text);
        });
        input.addEventListener('keydown', function (e) {
          if (e.keyCode === 40) {
            // Arrow Down
            e.preventDefault();

            if (key < inputList.length - 1) {
              inputList[key + 1].focus();
            }
          } else if (e.keyCode === 38) {
            // Arrow Up
            e.preventDefault();

            if (key > 0) {
              inputList[key - 1].focus();
            } else if (key === 0) {
              if (all) {
                all.focus();
              }
            }
          } else if (e.keyCode === 13) {
            // Enter
            e.preventDefault();
          } else if (e.keyCode === 9) {
            // Tab
            e.preventDefault();
          } else if (e.keyCode === 27) {
            // Escape
            $container.classList.remove($classes.open);
            dropdown.focus();
          }
        });
      });
    }
  }, {
    key: "placeholderText",
    value: function placeholderText(inputList, text) {
      var $selectors = this.selectors;
      var $container = this.$element;
      var placeholder = $container.querySelector($selectors.placeholder);
      var tagWidth = 84;
      var numVisibleTags = Math.floor(placeholder.offsetWidth / tagWidth);
      var numChecks = inputList.filter(function (item) {
        return item.check.checked;
      });
      var number = numChecks.length - numVisibleTags;
      var loop = numChecks.length > numVisibleTags ? numVisibleTags : numChecks.length;

      if (numChecks.length === 0) {
        placeholder.innerHTML = text;
      } else if (numChecks.length > 0) {
        placeholder.innerHTML = '';

        for (var i = 0; i < loop; i++) {
          var textStyles = this.style ? this.style.text : '';
          placeholder.innerHTML += "<p class=\"".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "dropdown ").concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "dropdown__text ").concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "paragraph ").concat(textStyles, "\">").concat(numChecks[i].label, "</p>");
        }

        if (numChecks.length > numVisibleTags && placeholder.querySelector($selectors.number)) {
          placeholder.querySelector($selectors.number).innerHTML = '+ ' + number.toString();
        } else if (numChecks.length > numVisibleTags && !placeholder.querySelector($selectors.number)) {
          var numStyles = this.style ? this.style.num : '';
          placeholder.innerHTML += "<p class=\"".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "dropdown js-dropdown-number ").concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "dropdown__number ").concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "paragraph ").concat(numStyles, "\">+ ").concat(number, "</p>");
        }
      }

      this.onSelect.optionSelected = numChecks;
      this.$element.dispatchEvent(this.onSelect);
    }
  }]);

  return Dropdown;
}();



/***/ }),

/***/ "./resources/assets/scripts/es/_microsite.js":
/*!***************************************************!*\
  !*** ./resources/assets/scripts/es/_microsite.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Microsite; });
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/env */ "./resources/assets/scripts/es/config/env.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var defaults = {
  $element: undefined,
  selectors: {
    // TODO esto es por retrocompatibilidad, lo ideal sería usar un data-attribute normalizado con el resto del framework
    microsite: '[data-pathmicrosite]'
  },
  classes: {}
};

function parseLinks(elements, attname, path) {
  _toConsumableArray(elements).forEach(function (element) {
    var oldPath = element.getAttribute(attname);
    element.setAttribute(attname, path + oldPath);
  });
}
/**
* Microsite.
*
* @module Microsite
* @param {Object} properties - specifies the configurations
* for the module.
*/


var Microsite =
/*#__PURE__*/
function () {
  function Microsite() {
    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Microsite);

    this.container = properties.$element;
    this.ghostContainer = document.createElement('div');
    this.ghostContainer.setAttribute('data-ghostcontainer', '');
    this.classes = defaults.classes;
    this.selectors = defaults.selectors;
  }
  /**
   * Initialise the module.
   *
   * @function init
   *
   * @return undefined
   */


  _createClass(Microsite, [{
    key: "init",
    value: function init() {
      var _this = this;

      if (this.initialized) return;
      this.initialized = true;
      this.path = this.container.getAttribute('data-pathmicrosite'); //console.log('Inicializando micro: ' + this.path);

      fetch(this.path + 'index.html').then(function (response) {
        return response.text();
      }) // Pequeño hack para que no comienze a descargar las imágenes
      .then(function (html) {
        return _this.ghostContainer.innerHTML = html.replace(/<img/g, '<ximg');
      }).then(function (html) {
        return _this.ghostContainer.innerHTML = html.replace(/<source/g, '<xsource');
      }).then(function (html) {
        return _this.ghostContainer.innerHTML = html.replace(/<video/g, '<xvideo');
      }).then(function (html) {
        return _this.parseHTML();
      });
    }
  }, {
    key: "parseHTML",
    value: function parseHTML() {
      var _this2 = this;

      var gc = this.ghostContainer; // CSS <link>

      var stylesheets = gc.querySelectorAll('link[rel=stylesheet][href^=css]');
      parseLinks(stylesheets, 'href', this.path); // <imgs>

      var images = gc.querySelectorAll('ximg[src^=img]');
      var pictures = gc.querySelectorAll('xsource[srcset^=img]');
      parseLinks(images, 'src', this.path);
      parseLinks(pictures, 'srcset', this.path); // <video>

      var videosSrc = gc.querySelectorAll('xvideo[src^=media]');
      var videosSource = gc.querySelectorAll('xsource[src^=media]');
      parseLinks(videosSrc, 'src', this.path);
      parseLinks(videosSource, 'source', this.path); // Otros

      var others = gc.querySelectorAll('[data-bg-img-desktop]');
      parseLinks(others, 'data-bg-img-desktop', this.path);
      others = gc.querySelectorAll('[data-bg-img-responsive]');
      parseLinks(others, 'data-bg-img-responsive', this.path);
      others = gc.querySelectorAll('[data-bg-img-tablet]');
      parseLinks(others, 'data-bg-img-tablet', this.path);
      others = gc.querySelectorAll('div[data-spritesheet]');
      parseLinks(others, 'data-spritesheet', this.path);
      others = gc.querySelectorAll('[data-src]');
      parseLinks(others, 'data-src', this.path); // recuperamos las etiquetas orginales

      gc.innerHTML = gc.innerHTML.replace(/<ximg/g, '<img');
      gc.innerHTML = gc.innerHTML.replace(/<xsource/g, '<source');
      gc.innerHTML = gc.innerHTML.replace(/<xvideo/g, '<video'); // <scripts>

      var scripts = gc.querySelectorAll('script:not([src]):not([type])');

      _toConsumableArray(scripts).forEach(function (script) {
        var tag = document.createElement('script');
        tag.innerHTML = script.innerHTML;
        script.parentNode.removeChild(script);
        gc.appendChild(tag);
      });

      scripts = gc.querySelectorAll('script[src^=js]');

      _toConsumableArray(scripts).forEach(function (script) {
        var tag = document.createElement('script');
        tag.src = _this2.path + script.getAttribute('src');
        script.parentNode.removeChild(script);
        gc.appendChild(tag);
      }); // Get into the DOM


      this.container.appendChild(gc);
      /* Ampliación para que funcione el fancybox M.... TEMPORAL. ¡¡¡¡ QUITAR LO ANTES POSIBLE !!!! */

      var fancy = gc.querySelectorAll('.fancy-link');
      fancy.forEach(function (element) {
        if (element.attributes.href.value.indexOf("www") < 0) {
          element.classList.add("fancy-to-rename-href");
        }
      });
      var fancyNewHref = gc.querySelectorAll('.fancy-to-rename-href');
      parseLinks(fancyNewHref, 'href', this.path);

      if (typeof modalLink !== "undefined") {
        modalLink();
        modalClose();
        modalForm();
        modalLinkIframe();
        modalDiv();
      }
    }
  }]);

  return Microsite;
}();



/***/ }),

/***/ "./resources/assets/scripts/es/_overlay.js":
/*!*************************************************!*\
  !*** ./resources/assets/scripts/es/_overlay.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Overlay; });
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/env */ "./resources/assets/scripts/es/config/env.js");
/* harmony import */ var _utils_ajaxRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ajaxRequest */ "./resources/assets/scripts/es/utils/ajaxRequest.js");
/* harmony import */ var _utils_closest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/closest */ "./resources/assets/scripts/es/utils/closest.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var KEYCODE_TAB = 9;
var defaults = {
  $element: undefined,
  selectors: {
    overlayItem: ".js-overlay-item",
    overlayItemInformation: ".js-overlay-item-information",
    close: '.js-overlay-close',
    overlayContent: '.js-overlay-content',
    overlayItemShown: ".".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "overlay__item--show"),
    slideUpButton: '.js-slide-up-button'
  },
  classes: {
    overlay: 'js-overlay',
    overlayItem: "js-overlay-item",
    close: 'js-overlay-close',
    overlayContent: 'js-overlay-content',
    overlayItemCSS: "".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "overlay__item"),
    overlayContentCSS: "".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "overlay__content"),
    overlayContentYoutubeCSS: "".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "overlay__content--youtube"),
    showOverlayContainer: "".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "overlay--show"),
    showOverlayItem: "".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "overlay__item--show"),
    hideCloseButton: "".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "overlay__close--hide"),
    slideUp: 'slide'
  }
  /**
   * Overlay.
   *
   * @module Overlay
   * @param {Object} properties - specifies the configurations
   * for the module.
   */

};

var Overlay =
/*#__PURE__*/
function () {
  function Overlay() {
    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Overlay);

    this.$element = properties.$element;
    this.selectors = defaults.selectors;
    this.attributes = defaults.attributes;
    this.classes = defaults.classes;
    this.buttonOverlay = '';
    this.onInit = new Event('vfes:init');
    this.onOpen = new Event('vfes:opened');
    this.onClose = new Event('vfes:closed');
  }
  /**
   * Initialise the module.
   *
   * @function init
   *
   * @return undefined
   */


  _createClass(Overlay, [{
    key: "init",
    value: function init() {
      this.bind();
      this.onInit.overlay = {};
      this.onInit.overlay.container = this.$element;
      this.onInit.overlay.numOpenOverlayButtons = document.querySelectorAll("[data-overlay]").length;
      this.onInit.overlay.counter = document.querySelectorAll("".concat(this.selectors.overlayItem)).length;
      this.$element.dispatchEvent(this.onInit);
    }
    /**
     * Bind the events to the actionable elements
     * within the rates system.
     *
     * @function bind
     *
     * @return undefined
     */

  }, {
    key: "bind",
    value: function bind() {
      var mod = this;
      var overlayButtons = document.querySelectorAll("[data-overlay]");
      var slideUpButtons = mod.$element.querySelectorAll(mod.selectors.slideUpButton);
      [].forEach.call(overlayButtons, function (button) {
        var overlay;

        if (button.dataset.overlayHref) {
          mod.getContentByAjax(button);
        } // if(button.dataset.overlayYoutube) { mod.overlayYoutube(button, overlay) }


        overlay = mod.$element.querySelector('#' + button.dataset.overlay);

        if (overlay) {
          mod.hideCloseButton(button, overlay);
          button.addEventListener('click', function (e) {
            e.preventDefault();
            mod.buttonOverlay = button;
            mod.openOverlay(overlay);
          });
        }
      });
      mod.$element.addEventListener('click', function (e) {
        var overlayOpened = mod.$element.querySelector(mod.selectors.overlayItemShown);
        mod.closeOverlay(e.target, overlayOpened);
      });
      [].forEach.call(slideUpButtons, function (button) {
        button.addEventListener('click', function () {
          button.parentElement.classList.toggle($classes.slideUp);
        });
      });
    }
  }, {
    key: "closeOverlay",
    value: function closeOverlay(actualTarget, overlay) {
      if (actualTarget.classList.contains(this.classes.overlay) || actualTarget.classList.contains(this.classes.close)) {
        this.$element.classList.remove(this.classes.showOverlayContainer);
        this.$element.setAttribute('aria-hidden', 'true');

        if (overlay) {
          overlay.classList.remove(this.classes.showOverlayItem);
          overlay.setAttribute('aria-hidden', 'true');
        }

        if (this.buttonOverlay) {
          this.buttonOverlay.focus();
        }

        this.onClose.overlay = {};
        this.onClose.overlay.container = this.$element;
        this.onClose.overlay.target = overlay;
        this.onClose.overlay.button = this.buttonOverlay;
        this.$element.dispatchEvent(this.onClose);
      }
    }
  }, {
    key: "openOverlay",
    value: function openOverlay(overlay) {
      this.$element.classList.add(this.classes.showOverlayContainer);
      this.$element.setAttribute('aria-hidden', 'false');

      if (this.$element.querySelector(this.selectors.overlayItemShown)) {
        this.$element.querySelector(this.selectors.overlayItemShown).classList.remove(this.classes.showOverlayItem);
      }

      overlay.classList.add(this.classes.showOverlayItem);
      overlay.setAttribute('aria-hidden', 'false');

      if (overlay.querySelector('.vfes-button')) {
        overlay.querySelector('.vfes-button').focus();
      } else {
        overlay.querySelector(this.selectors.close).focus();
      }

      this.onOpen.overlay = {};
      this.onOpen.overlay.container = this.$element;
      this.onOpen.overlay.target = overlay;
      this.onOpen.overlay.button = this.buttonOverlay;
      this.buttonOverlay.dispatchEvent(this.onOpen);
      this.trapFocus();
    }
  }, {
    key: "hideCloseButton",
    value: function hideCloseButton(button, overlay) {
      if (button.dataset.overlayClose === undefined) {
        overlay.querySelector(this.selectors.close).classList.add(this.classes.hideCloseButton);
        overlay.querySelector(this.selectors.close).setAttribute('aria-hidden', 'true');
      }
    }
  }, {
    key: "createMyElement",
    value: function createMyElement(obj) {
      var el = document.createElement(obj.tag);
      obj.attrs.forEach(function (attr) {
        el.setAttribute(attr.name, attr.value);
      });
      el.innerHTML = obj.html;

      if (obj.childElement) {
        el.appendChild(obj);
      }

      return el;
    }
  }, {
    key: "createOverlayItem",
    value: function createOverlayItem(button) {
      var buttonCloseHTML = "<div class=\"".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "overlay__head\"><button class=\"").concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "overlay__close js-overlay-close\" aria-hidden=\"false\"><svg class=\"icon ").concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "color--vodafone-gray\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"36px\" height=\"36px\"><title>Close</title><use class=\"icon-v3\" xlink:href=\"#icon3-close\"></use></svg></button></div>");
      return this.createMyElement({
        tag: 'section',
        attrs: [{
          name: 'id',
          value: button.dataset.overlay
        }, {
          name: 'class',
          value: "".concat(this.classes.overlayItem, " ").concat(this.classes.overlayItemCSS)
        }, {
          name: 'aria-hidden',
          value: 'true'
        }, {
          name: 'role',
          value: 'dialog'
        }],
        html: buttonCloseHTML
      });
    }
  }, {
    key: "createOverlayContent",
    value: function createOverlayContent(html) {
      return this.createMyElement({
        tag: 'div',
        attrs: [{
          name: 'class',
          value: "".concat(this.classes.overlayContent, " ").concat(this.classes.overlayContentCSS)
        }, {
          name: 'aria-hidden',
          value: 'true'
        }],
        html: html
      });
    }
  }, {
    key: "createOverlay",
    value: function createOverlay(html, overlay) {
      var overlayContent = undefined;
      var buttonCloseHTML = "<div class=\"".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "overlay__head\"><button class=\"").concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "overlay__close js-overlay-close\"><svg class=\"icon ").concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "color--vodafone-gray\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"36px\" height=\"36px\"><title>Close</title><use class=\"icon-v3\" xlink:href=\"#icon3-close\"></use></svg></button></div>");

      if (overlay) {
        var closeButton = overlay.querySelector(this.selectors.close);
        overlayContent = overlay.querySelector(this.selectors.overlayContent);

        if (!closeButton) {
          overlay.innerHTML = buttonCloseHTML;
        }

        if (overlayContent) {
          overlayContent.innerHTML = html;
        } else {
          overlayContent = this.createOverlayContent(html);
        }
      } else {
        overlayContent = this.createOverlayContent(html);
        var ref = mod || this;
        overlay = this.createOverlayItem(ref.buttonOverlay);
        overlay.appendChild(overlayContent);
        this.$element.appendChild(overlay);
      }
    }
  }, {
    key: "getContentByAjax",
    value: function getContentByAjax(button) {
      var mod = this;
      var pathMicrosite = Object(_utils_closest__WEBPACK_IMPORTED_MODULE_2__["default"])(button, '[data-pathmicrosite]');
      var overlay = mod.$element.querySelector('#' + button.dataset.overlay);
      pathMicrosite = pathMicrosite ? pathMicrosite.dataset.pathmicrosite : '';
      button.dataset.overlayHref = pathMicrosite + button.dataset.overlayHref;
      button.addEventListener('click', function (e) {
        e.preventDefault();
        mod.buttonOverlay = button;

        if (button.hasAttribute('data-overlay-charged')) {
          mod.openModal(modal);
        } else {
          Object(_utils_ajaxRequest__WEBPACK_IMPORTED_MODULE_1__["default"])(button.dataset.overlayHref).then(function (html) {
            mod.createOverlay(html, overlay);
            mod.openOverlay(overlay);
            button.setAttribute('data-overlay-charged', 'true');
          }).catch(function (error) {
            console.log("La url no es correcta.", error);
          });
        }

        mod.hideCloseButton(button, overlay);
      });
    }
  }, {
    key: "overlayYoutube",
    value: function overlayYoutube(button, overlay) {
      var youtubeHTML = "<div class=\"".concat(this.classes.overlayContentYoutubeCSS, "\"><iframe class=\"js-overlay-youtube ").concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "overlay__youtube\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/").concat(button.dataset.overlayYoutube, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>");
      overlay = this.$element.querySelector('#' + button.dataset.overlay);
      this.createOverlay(youtubeHTML, overlay);
    }
  }, {
    key: "trapFocus",
    value: function trapFocus() {
      var focusableEls = this.$element.querySelector('.vfes-overlay__item--show').querySelectorAll('.vfes-overlay__close, .vfes-button, .vfes-play, .vfes-link, a, button');
      var firstFocusableEl = focusableEls[0];
      var lastFocusableEl = focusableEls[focusableEls.length - 1];
      this.$element.addEventListener('keydown', function (e) {
        var isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

        if (!isTabPressed) {
          return;
        }

        if (e.shiftKey && document.activeElement === firstFocusableEl) {
          e.preventDefault();
          lastFocusableEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusableEl) {
          e.preventDefault();
          firstFocusableEl.focus();
        }
      });
    }
  }]);

  return Overlay;
}();



/***/ }),

/***/ "./resources/assets/scripts/es/_select.js":
/*!************************************************!*\
  !*** ./resources/assets/scripts/es/_select.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Select; });
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/env */ "./resources/assets/scripts/es/config/env.js");
/* harmony import */ var _utils_closest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/closest */ "./resources/assets/scripts/es/utils/closest.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var defaults = {
  $element: undefined,
  selectors: {
    button: '.js-form-dropdown-button',
    buttonList: '.js-form-dropdown-list-button',
    buttonListContainer: '.js-form-dropdown-list',
    dropdown: ".".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "form__dropdown"),
    selected: '.selected'
  },
  classes: {
    button: 'js-form-dropdown-button',
    buttonCSS: "".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "form__dropdown-button"),
    buttonList: 'js-form-dropdown-list-button',
    buttonListContainer: 'js-form-dropdown-list',
    buttonListCSS: "".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "form__dropdown-list-button"),
    dropdown: "".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "form__dropdown"),
    opened: "opened",
    optionListCSS: "".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix, "form__dropdown-list"),
    selected: "selected",
    visuallyHiddenCSS: 'visually-hidden'
  }
};
/**
 * Select.
 *
 * @module Select
 * @param {Object} properties - specifies the configurations
 * for the module.
 */

var Select =
/*#__PURE__*/
function () {
  function Select() {
    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Select);

    var select = properties.$element;
    this.select = select;
    this.classes = defaults.classes;
    this.selectors = defaults.selectors;
    this.isOpened = false;
    this.onInit = new Event('vfes:init');
    this.onChange = new Event('vfes:changed');
  }
  /**
   * Initialise the module.
   *
   * @function init
   *
   * @return undefined
   */


  _createClass(Select, [{
    key: "init",
    value: function init() {
      var firstTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.select.classList.add(this.classes.visuallyHiddenCSS);
      this.generateDropdown();
    }
    /**
    * Function to generate every HTML of our custom select
    *
    * @function generateDropdown
    *
    * @return undefined
    *
    */

  }, {
    key: "generateDropdown",
    value: function generateDropdown() {
      var classes = this.classes;
      var select = this.select;
      var $document = document;
      var dropdown = $document.createElement('div');
      var button = $document.createElement('button');
      var optionList = $document.createElement('ul');
      var html = ''; // Attributes

      optionList.setAttribute('role', 'listbox');
      button.setAttribute('role', 'combobox');
      button.setAttribute('aria-autocomplete', 'none');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-readonly', 'true');
      button.setAttribute('aria-owns', "".concat(select.id, "-list")); // Id

      optionList.id = "".concat(select.id, "-list"); //Classes

      dropdown.classList.add(classes.dropdown);
      button.classList.add(classes.button, classes.buttonCSS);
      optionList.classList.add(classes.optionListCSS, classes.buttonListContainer);
      [].forEach.call(select.options, function (option) {
        var disabled = option.disabled ? 'disabled' : '';
        html += "<li><button role=\"option\" class=\"".concat(classes.buttonList, " ").concat(classes.buttonListCSS, "\" ").concat(disabled, ">").concat(option.text, "</button></li>");
      }); //insert HTML

      optionList.innerHTML = html;
      button.innerHTML = select.options[select.selectedIndex].text; //Append childs

      dropdown.appendChild(button);
      dropdown.appendChild(optionList);
      select.parentNode.appendChild(dropdown);
      this.associateEvents(button, optionList);
      this.onInit.select = button;
      this.onInit.options = optionList.querySelectorAll(this.selectors.buttonList);
      this.onInit.numOptions = optionList.querySelectorAll(this.selectors.buttonList).length;
      this.select.dispatchEvent(this.onInit);
    }
    /**
    * Function to associate every listeners to our custom select and default select
    *
    * @function associateEvents
    *
    * @param {HTMLElement} button - custom select heading
    * @param {HTMLElement} optionList - ul which contains custom select options
    *
    * @return undefined
    */

  }, {
    key: "associateEvents",
    value: function associateEvents(button, optionList) {
      var _this = this;

      var $this = this;
      var select = $this.select;
      var buttonList = optionList.querySelectorAll($this.selectors.buttonList);
      button.addEventListener('click', function (e) {
        e.preventDefault();
        $this.toggleOpen(button, optionList);

        if ($this.isOpened) {
          var index = select.selectedIndex;

          if (buttonList[select.selectedIndex].disabled) {
            index++;
          }

          buttonList[index] ? buttonList[index].focus() : null;
        }
      });
      button.addEventListener('keydown', function (e) {
        if (e.keyCode === 9 && $this.isOpened) {
          // Tab
          e.preventDefault();
        } else if ((e.keyCode === 40 || e.keyCode === 38) && !$this.isOpened) {
          e.preventDefault();
          var index = select.selectedIndex;

          if (buttonList[select.selectedIndex].disabled) {
            index++;
          }

          $this.toggleOpen(button, optionList);
          buttonList[index] ? buttonList[index].focus() : null;
        }
      });
      [].forEach.call(buttonList, function (option, key) {
        option.addEventListener('click', function (e) {
          e.preventDefault();
          $this.changeSelectValue(button, optionList, key);
        });
        option.addEventListener('keydown', function (e) {
          if (e.keyCode === 40) {
            // Arrow Down
            e.preventDefault();

            if (key < buttonList.length - 1) {
              buttonList[key + 1].focus();
            }
          } else if (e.keyCode === 38) {
            // Arrow Up
            e.preventDefault();

            if (key >= 0) {
              buttonList[key - 1].focus();
            }
          } else if (e.keyCode === 13) {
            // Enter
            e.preventDefault();
            $this.changeSelectValue(button, optionList, key);
          } else if (e.keyCode === 9) {
            // Tab
            e.preventDefault();
          } else if (e.keyCode === 27) {
            // Escape
            $this.toggleOpen(button, optionList);
            button.focus();
          }
        });
      });
      select.addEventListener('keydown', function (e) {
        if (e.keyCode === 13 || e.keyCode === 32) {
          // Enter && Espace
          e.preventDefault();
          button.focus();
        }
      });
      select.addEventListener('focusin', function (e) {
        button.focus();
      });
      document.addEventListener('click', function (e) {
        if (!e.target.classList.contains($this.classes.dropdown) && !Object(_utils_closest__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target, $this.selectors.dropdown)) {
          button.classList.remove(_this.classes.opened);
          optionList.classList.remove(_this.classes.opened);
          button.setAttribute('aria-expanded', 'false');
          _this.isOpened = false;
        }
      });
    }
    /**
    * Function to open or close our custom select
    *
    * @function toggleOpen
    *
    * @param {HTMLElement} button - custom select heading
    * @param {HTMLElement} optionList - ul which contains custom select options
    *
    * @return undefined
    */

  }, {
    key: "toggleOpen",
    value: function toggleOpen(button, optionList) {
      button.classList.toggle(this.classes.opened);
      optionList.classList.toggle(this.classes.opened);
      button.setAttribute('aria-expanded', !this.isOpened);
      this.isOpened = !this.isOpened;
    }
    /**
    * Function to change select value
    *
    * @function changeSelectValue
    *
    * @param {HTMLElement} button - custom select heading
    * @param {HTMLElement} optionList - ul which contains custom select options
    * @param {Integer} key - option index
    *
    * @return undefined
    */

  }, {
    key: "changeSelectValue",
    value: function changeSelectValue(button, optionList, key) {
      var select = this.select;
      var selected = Object(_utils_closest__WEBPACK_IMPORTED_MODULE_1__["default"])(optionList, this.selectors.buttonListContainer).querySelector(this.selectors.selected);
      this.onChange.previousValue = select.value;
      select.value = select.options[key].value;
      button.innerHTML = select.options[key].text;
      this.toggleOpen(button, optionList);

      if (selected) {
        selected.classList.remove(this.classes.selected);
      }

      optionList.querySelectorAll(this.selectors.buttonList)[key].classList.add(this.classes.selected);
      this.onChange.newValue = select.options[key].value;
      select.dispatchEvent(this.onChange);
      button.focus();
    }
  }]);

  return Select;
}();



/***/ }),

/***/ "./resources/assets/scripts/es/_svg-loader.js":
/*!****************************************************!*\
  !*** ./resources/assets/scripts/es/_svg-loader.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SvgLoader; });
/* harmony import */ var _utils_ajaxRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/ajaxRequest */ "./resources/assets/scripts/es/utils/ajaxRequest.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var defaults = {
  $element: undefined,
  selectors: {
    body: "body"
  }
};

var SvgLoader =
/*#__PURE__*/
function () {
  function SvgLoader() {
    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SvgLoader);

    this.$element = properties.$element;
    this.selectors = defaults.selectors;
  }

  _createClass(SvgLoader, [{
    key: "init",
    value: function init() {
      try {
        this.bind();
      } catch (error) {
        console.log("SvgLoader error.", error);
      }
    }
  }, {
    key: "loadAndAppend",
    value: function loadAndAppend(url, element) {
      var nameUrl = url;
      Object(_utils_ajaxRequest__WEBPACK_IMPORTED_MODULE_0__["default"])(url).then(function (data) {
        element.style.display = "none";

        if (typeof data === "string") {
          element.innerHTML = data;
        } else {
          element.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
        }

        element.removeAttribute("data-spritesheet");
        window.document.dispatchEvent(new Event(url));
      }).catch(function (error) {
        if (console) {
          console.log("Failed svg request", error);
        }
      });
    }
    /**
     * Metodo para importar los SVG en 08-angular y trabajar con ellos
     * @param   {nodo}      element     Elemento del DOM donde queremos cargar el SVG
     * @param   {string}    version     Nombre del fichero del spritesheet que se desea cargar.
     * @param   {string}    pathSVG     './assets/svg/' Ubicación del svg dentro del proyecto 08-angular.
     */

  }, {
    key: "loadAndAppendSvgToAngular",
    value: function loadAndAppendSvgToAngular(element) {
      var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "sprite.mva10.svg";
      var pathSVG = arguments.length > 2 ? arguments[2] : undefined;
      var aboslutePath = pathSVG ? "".concat(pathSVG).concat(version) : "./assets/svg/".concat(version); // construimos la ruta en base a la versión

      Object(_utils_ajaxRequest__WEBPACK_IMPORTED_MODULE_0__["default"])(aboslutePath).then(function (data) {
        var div = document.createElement("div");
        div.style.display = "none";

        if (typeof data === "string") {
          div.innerHTML = data;
        } else {
          div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
        }

        element.outerHTML = div.outerHTML;
      }).catch(function (error) {
        console.error("--\uD83E\uDD26\uD83C\uDFFB\u200D\u2642\uFE0F-- Start failed svg request -- \uD83E\uDD26\uD83C\uDFFB\u200D\u2642\uFE0F--");
        console.error(error);
        console.error("--\uD83E\uDD26\uD83C\uDFFB\u200D\u2642\uFE0F-- End Failed svg request -- \uD83E\uDD26\uD83C\uDFFB\u200D\u2642\uFE0F--");
      });
    }
  }, {
    key: "bind",
    value: function bind() {
      var _this = this;

      _toConsumableArray(document.querySelectorAll("[data-spritesheet]")).forEach(function (el) {
        var urlsvg = el.getAttribute("data-spritesheet");

        _this.loadAndAppend(urlsvg, el);
      });
    }
  }]);

  return SvgLoader;
}(); // <div data-spritesheet="sprite.svg"></div>
// <div data-spritesheet="sprite.v3.svg"></div>




/***/ }),

/***/ "./resources/assets/scripts/es/_utils.js":
/*!***********************************************!*\
  !*** ./resources/assets/scripts/es/_utils.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_polyfill_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/polyfill.min.js */ "./resources/assets/scripts/lib/polyfill.min.js");
/* harmony import */ var _lib_polyfill_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_polyfill_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_remoteTextBinder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/remoteTextBinder */ "./resources/assets/scripts/es/utils/remoteTextBinder.js");


var instanceMap = new Map();

function init(context) {
  var arrayCollection = [];
  context = context || document.body;
  arrayCollection = [].slice.call(context.querySelectorAll('[data-vfes-js]'));

  if (context.parentElement.dataset && context.parentElement.dataset.vfesJs) {
    arrayCollection.slice(0, 0, context.parentElement);
  }

  arrayCollection.forEach(function (mod, index) {
    var modules;
    var data = mod.dataset;
    if (data.initialized) return;

    if (data && data.vfesJs) {
      modules = data.vfesJs.split(',');
    }

    for (var key in modules) {
      var module = modules[key];

      if (vfes[module]) {
        (function () {
          var properties = {};
          Object.keys(data).forEach(function (property) {
            properties[property] = data[property];
          });
          delete properties.vfesJs;
          properties.$element = mod;
          var instance = new vfes[module](properties);
          properties.moduleInstance = instance;
          instanceMap.set(properties.$element, instance);

          if (instance.init) {
            instance.init();
            data.initialized = true;
          }
        })();
      }
    }
  });

  try {
    _utils_remoteTextBinder__WEBPACK_IMPORTED_MODULE_1__["default"].init();
  } catch (error) {
    console.log("RemoteTextBinder error.", error);
  }

  try {
    window.document.dispatchEvent(new Event('vfes:frameworkReady'));
  } catch (error) {
    console.log("frameworkReady.", error);
  }
}
/**
 * Gets the class instance asociated by the data-vfes attribute to the given DOM Element
 *
 * @param  {Object} The DOM Element related to the instance
 * @return {Object} The instance
 */


function getInstanceForElement($element) {
  return instanceMap.get($element);
}

window.onload = function () {
  var event = document.createEvent('HTMLEvents');
  event.initEvent('resize', true, false);
  window.dispatchEvent(event);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  getInstanceForElement: getInstanceForElement
});

/***/ }),

/***/ "./resources/assets/scripts/es/config/env.js":
/*!***************************************************!*\
  !*** ./resources/assets/scripts/es/config/env.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var env = {
  nsPrefix: "vfes-"
};
/* harmony default export */ __webpack_exports__["default"] = (env);

/***/ }),

/***/ "./resources/assets/scripts/es/main.modules.js":
/*!*****************************************************!*\
  !*** ./resources/assets/scripts/es/main.modules.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./vfes.modules */ "./resources/assets/scripts/es/vfes.modules.js");

window.vfes._utils.init();

console.log("WS:Reboot WCS modules lib loaded");

/***/ }),

/***/ "./resources/assets/scripts/es/utils/ajaxRequest.js":
/*!**********************************************************!*\
  !*** ./resources/assets/scripts/es/utils/ajaxRequest.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ajaxRequest; });
function ajaxRequest(url) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
  return new Promise(function (resolve, reject) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(this.responseText);
      } else if (this.readyState === 4 && this.status !== 200) {
        reject(this.responseText);
      }
    };

    xhttp.open(type, url, true);
    xhttp.send();
  });
}
;

/***/ }),

/***/ "./resources/assets/scripts/es/utils/closest.js":
/*!******************************************************!*\
  !*** ./resources/assets/scripts/es/utils/closest.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return closest; });
function closest(el, s) {
  var matches = (el.document || el.ownerDocument).querySelectorAll(s);
  var i;

  do {
    i = matches.length;

    while (--i >= 0 && matches.item(i) !== el) {}

    ;
  } while (i < 0 && (el = el.parentElement));

  return el;
}

/***/ }),

/***/ "./resources/assets/scripts/es/utils/remoteTextBinder.js":
/*!***************************************************************!*\
  !*** ./resources/assets/scripts/es/utils/remoteTextBinder.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/env */ "./resources/assets/scripts/es/config/env.js");
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var RemoteTextBinder =
/*#__PURE__*/
function () {
  function RemoteTextBinder() {
    _classCallCheck(this, RemoteTextBinder);
  }

  _createClass(RemoteTextBinder, [{
    key: "init",
    value: function init() {
      this.dataStore = {};
      this.bind();
    }
  }, {
    key: "bind",
    value: function bind() {
      var _this = this;

      var dataLinks = document.querySelectorAll('link[rel="reboot:externaldata"]');
      var remotes = [];

      _toConsumableArray(dataLinks).forEach(function (el) {
        var url = el.getAttribute('href');
        var id = el.getAttribute('id');
        var remote = window.fetch(url).then(function (x) {
          return x.json();
        }).then(function (json) {
          return _this.dataStore[id] = json;
        });
        remotes.push(remote);
      });

      Promise.all(remotes).then(function (x) {
        return _this.bindProps();
      });
    }
  }, {
    key: "bindProps",
    value: function bindProps() {
      var _this2 = this;

      var elements = document.querySelectorAll('[data-vfes-remote-text]');

      _toConsumableArray(elements).forEach(function (el) {
        var prop = el.getAttribute('data-vfes-remote-text');
        var ds = _this2.dataStore;

        try {
          var val = eval("ds.".concat(prop));
          el.innerHTML = val;
        } catch (error) {
          console.error("Can't parse the path ".concat(prop, " remote text."));
        }
      });
    }
  }]);

  return RemoteTextBinder;
}();

var instance = new RemoteTextBinder();
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./resources/assets/scripts/es/vfes.modules.js":
/*!*****************************************************!*\
  !*** ./resources/assets/scripts/es/vfes.modules.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_utils */ "./resources/assets/scripts/es/_utils.js");
/* harmony import */ var _svg_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_svg-loader */ "./resources/assets/scripts/es/_svg-loader.js");
/* harmony import */ var _microsite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_microsite */ "./resources/assets/scripts/es/_microsite.js");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_overlay */ "./resources/assets/scripts/es/_overlay.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_dropdown */ "./resources/assets/scripts/es/_dropdown.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_select */ "./resources/assets/scripts/es/_select.js");






var existing = window.vfes || {};
var vfes = {
  _utils: _utils__WEBPACK_IMPORTED_MODULE_0__["default"],
  _svgLoader: _svg_loader__WEBPACK_IMPORTED_MODULE_1__["default"],
  _microsite: _microsite__WEBPACK_IMPORTED_MODULE_2__["default"],
  _overlay: _overlay__WEBPACK_IMPORTED_MODULE_3__["default"],
  _dropdown: _dropdown__WEBPACK_IMPORTED_MODULE_4__["default"],
  _select: _select__WEBPACK_IMPORTED_MODULE_5__["default"]
};
var result = vfes = window.vfes = Object.assign(existing, vfes);
/* harmony default export */ __webpack_exports__["default"] = (result);

/***/ }),

/***/ "./resources/assets/scripts/lib/polyfill.min.js":
/*!******************************************************!*\
  !*** ./resources/assets/scripts/lib/polyfill.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, n) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? n() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(0, function () {
  "use strict";

  function e(e) {
    var n = this.constructor;
    return this.then(function (t) {
      return n.resolve(e()).then(function () {
        return t;
      });
    }, function (t) {
      return n.resolve(e()).then(function () {
        return n.reject(t);
      });
    });
  }

  function n() {}

  function t(e) {
    if (!(this instanceof t)) throw new TypeError("Promises must be constructed via new");
    if ("function" != typeof e) throw new TypeError("not a function");
    this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], u(e, this);
  }

  function o(e, n) {
    for (; 3 === e._state;) {
      e = e._value;
    }

    0 !== e._state ? (e._handled = !0, t._immediateFn(function () {
      var t = 1 === e._state ? n.onFulfilled : n.onRejected;

      if (null !== t) {
        var o;

        try {
          o = t(e._value);
        } catch (f) {
          return void i(n.promise, f);
        }

        r(n.promise, o);
      } else (1 === e._state ? r : i)(n.promise, e._value);
    })) : e._deferreds.push(n);
  }

  function r(e, n) {
    try {
      if (n === e) throw new TypeError("A promise cannot be resolved with itself.");

      if (n && ("object" == _typeof(n) || "function" == typeof n)) {
        var o = n.then;
        if (n instanceof t) return e._state = 3, e._value = n, void f(e);
        if ("function" == typeof o) return void u(function (e, n) {
          return function () {
            e.apply(n, arguments);
          };
        }(o, n), e);
      }

      e._state = 1, e._value = n, f(e);
    } catch (r) {
      i(e, r);
    }
  }

  function i(e, n) {
    e._state = 2, e._value = n, f(e);
  }

  function f(e) {
    2 === e._state && 0 === e._deferreds.length && t._immediateFn(function () {
      e._handled || t._unhandledRejectionFn(e._value);
    });

    for (var n = 0, r = e._deferreds.length; r > n; n++) {
      o(e, e._deferreds[n]);
    }

    e._deferreds = null;
  }

  function u(e, n) {
    var t = !1;

    try {
      e(function (e) {
        t || (t = !0, r(n, e));
      }, function (e) {
        t || (t = !0, i(n, e));
      });
    } catch (o) {
      if (t) return;
      t = !0, i(n, o);
    }
  }

  var c = setTimeout;
  t.prototype["catch"] = function (e) {
    return this.then(null, e);
  }, t.prototype.then = function (e, t) {
    var r = new this.constructor(n);
    return o(this, new function (e, n, t) {
      this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof n ? n : null, this.promise = t;
    }(e, t, r)), r;
  }, t.prototype["finally"] = e, t.all = function (e) {
    return new t(function (n, t) {
      function o(e, f) {
        try {
          if (f && ("object" == _typeof(f) || "function" == typeof f)) {
            var u = f.then;
            if ("function" == typeof u) return void u.call(f, function (n) {
              o(e, n);
            }, t);
          }

          r[e] = f, 0 == --i && n(r);
        } catch (c) {
          t(c);
        }
      }

      if (!e || "undefined" == typeof e.length) throw new TypeError("Promise.all accepts an array");
      var r = Array.prototype.slice.call(e);
      if (0 === r.length) return n([]);

      for (var i = r.length, f = 0; r.length > f; f++) {
        o(f, r[f]);
      }
    });
  }, t.resolve = function (e) {
    return e && "object" == _typeof(e) && e.constructor === t ? e : new t(function (n) {
      n(e);
    });
  }, t.reject = function (e) {
    return new t(function (n, t) {
      t(e);
    });
  }, t.race = function (e) {
    return new t(function (n, t) {
      for (var o = 0, r = e.length; r > o; o++) {
        e[o].then(n, t);
      }
    });
  }, t._immediateFn = "function" == typeof setImmediate && function (e) {
    setImmediate(e);
  } || function (e) {
    c(e, 0);
  }, t._unhandledRejectionFn = function (e) {
    void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", e);
  };

  var l = function () {
    if ("undefined" != typeof self) return self;
    if ("undefined" != typeof window) return window;
    if ("undefined" != typeof global) return global;
    throw Error("unable to locate global object");
  }();

  "Promise" in l ? l.Promise.prototype["finally"] || (l.Promise.prototype["finally"] = e) : l.Promise = t;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93aGF0d2ctZmV0Y2gvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2VzL19kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvZXMvX21pY3Jvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvZXMvX292ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2VzL19zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2VzL19zdmctbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9lcy9fdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2VzL2NvbmZpZy9lbnYuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2VzL21haW4ubW9kdWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvZXMvdXRpbHMvYWpheFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2VzL3V0aWxzL2Nsb3Nlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2VzL3V0aWxzL3JlbW90ZVRleHRCaW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2VzL3ZmZXMubW9kdWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvbGliL3BvbHlmaWxsLm1pbi5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0cyIsIiRlbGVtZW50IiwidW5kZWZpbmVkIiwic2VsZWN0b3JzIiwiZHJvcGRvd24iLCJzZWxlY3QiLCJhbGwiLCJjaGVja2JveCIsInBsYWNlaG9sZGVyIiwibnVtYmVyIiwibGlzdCIsImxhYmVsIiwib3B0aW9uIiwid2NzZWxlY3QiLCJjbGFzc2VzIiwib3BlbiIsImVudiIsIm5zUHJlZml4IiwiYnV0dG9uIiwibGVzcyIsInRpY2siLCJEcm9wZG93biIsInByb3BlcnRpZXMiLCJpc09wZW5lZCIsInN0eWxlcyIsIiRzdHlsZXMiLCJvblNlbGVjdCIsIkV2ZW50IiwiJHNlbGVjdG9ycyIsIiRjb250YWluZXIiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dExpc3QiLCJBcnJheSIsImZyb20iLCJtYXAiLCJpdGVtIiwiY2hlY2siLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpbm5lckhUTUwiLCJiaW5kQ29udGFpbmVyIiwiYmluZElucHV0cyIsIiRjbGFzc2VzIiwicXVlcnlTZWxlY3RvciIsInRleHQiLCJkb2N1bWVudCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNsb3Nlc3QiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhY3R1YWxUYXJnZXQiLCJjb250YWlucyIsInByZXZlbnREZWZhdWx0IiwiYWRkIiwiaW5uZXJUZXh0IiwiZm9yRWFjaCIsImNoZWNrZWQiLCJwbGFjZWhvbGRlclRleHQiLCJrZXlDb2RlIiwiZm9jdXMiLCJjYWxsIiwiY2hlY2tJbnB1dCIsImtleSIsIm51bUNoZWNrcyIsImZpbHRlciIsImxlbmd0aCIsInRhZ1dpZHRoIiwibnVtVmlzaWJsZVRhZ3MiLCJNYXRoIiwiZmxvb3IiLCJvZmZzZXRXaWR0aCIsImxvb3AiLCJpIiwidGV4dFN0eWxlcyIsInN0eWxlIiwidG9TdHJpbmciLCJudW1TdHlsZXMiLCJudW0iLCJvcHRpb25TZWxlY3RlZCIsImRpc3BhdGNoRXZlbnQiLCJtaWNyb3NpdGUiLCJwYXJzZUxpbmtzIiwiZWxlbWVudHMiLCJhdHRuYW1lIiwicGF0aCIsImVsZW1lbnQiLCJvbGRQYXRoIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiTWljcm9zaXRlIiwiY29udGFpbmVyIiwiZ2hvc3RDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiaW5pdGlhbGl6ZWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImh0bWwiLCJyZXBsYWNlIiwicGFyc2VIVE1MIiwiZ2MiLCJzdHlsZXNoZWV0cyIsImltYWdlcyIsInBpY3R1cmVzIiwidmlkZW9zU3JjIiwidmlkZW9zU291cmNlIiwib3RoZXJzIiwic2NyaXB0cyIsInNjcmlwdCIsInRhZyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwic3JjIiwiZmFuY3kiLCJhdHRyaWJ1dGVzIiwiaHJlZiIsInZhbHVlIiwiaW5kZXhPZiIsImZhbmN5TmV3SHJlZiIsIm1vZGFsTGluayIsIm1vZGFsQ2xvc2UiLCJtb2RhbEZvcm0iLCJtb2RhbExpbmtJZnJhbWUiLCJtb2RhbERpdiIsIktFWUNPREVfVEFCIiwib3ZlcmxheUl0ZW0iLCJvdmVybGF5SXRlbUluZm9ybWF0aW9uIiwiY2xvc2UiLCJvdmVybGF5Q29udGVudCIsIm92ZXJsYXlJdGVtU2hvd24iLCJzbGlkZVVwQnV0dG9uIiwib3ZlcmxheSIsIm92ZXJsYXlJdGVtQ1NTIiwib3ZlcmxheUNvbnRlbnRDU1MiLCJvdmVybGF5Q29udGVudFlvdXR1YmVDU1MiLCJzaG93T3ZlcmxheUNvbnRhaW5lciIsInNob3dPdmVybGF5SXRlbSIsImhpZGVDbG9zZUJ1dHRvbiIsInNsaWRlVXAiLCJPdmVybGF5IiwiYnV0dG9uT3ZlcmxheSIsIm9uSW5pdCIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJiaW5kIiwibnVtT3Blbk92ZXJsYXlCdXR0b25zIiwiY291bnRlciIsIm1vZCIsIm92ZXJsYXlCdXR0b25zIiwic2xpZGVVcEJ1dHRvbnMiLCJkYXRhc2V0Iiwib3ZlcmxheUhyZWYiLCJnZXRDb250ZW50QnlBamF4Iiwib3Blbk92ZXJsYXkiLCJvdmVybGF5T3BlbmVkIiwiY2xvc2VPdmVybGF5IiwicGFyZW50RWxlbWVudCIsInRvZ2dsZSIsInRyYXBGb2N1cyIsIm92ZXJsYXlDbG9zZSIsIm9iaiIsImVsIiwiYXR0cnMiLCJhdHRyIiwibmFtZSIsImNoaWxkRWxlbWVudCIsImJ1dHRvbkNsb3NlSFRNTCIsImNyZWF0ZU15RWxlbWVudCIsImNsb3NlQnV0dG9uIiwiY3JlYXRlT3ZlcmxheUNvbnRlbnQiLCJyZWYiLCJjcmVhdGVPdmVybGF5SXRlbSIsInBhdGhNaWNyb3NpdGUiLCJwYXRobWljcm9zaXRlIiwiaGFzQXR0cmlidXRlIiwib3Blbk1vZGFsIiwibW9kYWwiLCJhamF4IiwiY3JlYXRlT3ZlcmxheSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwieW91dHViZUhUTUwiLCJvdmVybGF5WW91dHViZSIsImZvY3VzYWJsZUVscyIsImZpcnN0Rm9jdXNhYmxlRWwiLCJsYXN0Rm9jdXNhYmxlRWwiLCJpc1RhYlByZXNzZWQiLCJzaGlmdEtleSIsImFjdGl2ZUVsZW1lbnQiLCJidXR0b25MaXN0IiwiYnV0dG9uTGlzdENvbnRhaW5lciIsInNlbGVjdGVkIiwiYnV0dG9uQ1NTIiwiYnV0dG9uTGlzdENTUyIsIm9wZW5lZCIsIm9wdGlvbkxpc3RDU1MiLCJ2aXN1YWxseUhpZGRlbkNTUyIsIlNlbGVjdCIsIm9uQ2hhbmdlIiwiZmlyc3RUaW1lIiwiZ2VuZXJhdGVEcm9wZG93biIsIiRkb2N1bWVudCIsIm9wdGlvbkxpc3QiLCJpZCIsIm9wdGlvbnMiLCJkaXNhYmxlZCIsInNlbGVjdGVkSW5kZXgiLCJhc3NvY2lhdGVFdmVudHMiLCJudW1PcHRpb25zIiwiJHRoaXMiLCJ0b2dnbGVPcGVuIiwiaW5kZXgiLCJjaGFuZ2VTZWxlY3RWYWx1ZSIsInByZXZpb3VzVmFsdWUiLCJuZXdWYWx1ZSIsIlN2Z0xvYWRlciIsInVybCIsIm5hbWVVcmwiLCJhamF4UmVxdWVzdCIsImRhdGEiLCJkaXNwbGF5IiwiWE1MU2VyaWFsaXplciIsInNlcmlhbGl6ZVRvU3RyaW5nIiwiZG9jdW1lbnRFbGVtZW50IiwicmVtb3ZlQXR0cmlidXRlIiwid2luZG93IiwidmVyc2lvbiIsInBhdGhTVkciLCJhYm9zbHV0ZVBhdGgiLCJkaXYiLCJvdXRlckhUTUwiLCJ1cmxzdmciLCJsb2FkQW5kQXBwZW5kIiwiaW5zdGFuY2VNYXAiLCJNYXAiLCJpbml0IiwiY29udGV4dCIsImFycmF5Q29sbGVjdGlvbiIsInNsaWNlIiwidmZlc0pzIiwibW9kdWxlcyIsInNwbGl0IiwibW9kdWxlIiwidmZlcyIsIk9iamVjdCIsImtleXMiLCJwcm9wZXJ0eSIsImluc3RhbmNlIiwibW9kdWxlSW5zdGFuY2UiLCJzZXQiLCJSZW1vdGVUZXh0QmluZGVyIiwiZ2V0SW5zdGFuY2VGb3JFbGVtZW50IiwiZ2V0Iiwib25sb2FkIiwiZXZlbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsInJlcXVpcmUiLCJfdXRpbHMiLCJ0eXBlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ4aHR0cCIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInNlbmQiLCJzIiwibWF0Y2hlcyIsIm93bmVyRG9jdW1lbnQiLCJkYXRhU3RvcmUiLCJkYXRhTGlua3MiLCJyZW1vdGVzIiwicmVtb3RlIiwieCIsImpzb24iLCJwdXNoIiwiYmluZFByb3BzIiwicHJvcCIsImRzIiwidmFsIiwiZXZhbCIsImV4aXN0aW5nIiwidXRpbHMiLCJfc3ZnTG9hZGVyIiwiX21pY3Jvc2l0ZSIsIl9vdmVybGF5IiwiX2Ryb3Bkb3duIiwiX3NlbGVjdCIsInJlc3VsdCIsImFzc2lnbiIsIm4iLCJleHBvcnRzIiwiZGVmaW5lIiwiY29uc3RydWN0b3IiLCJ0IiwiVHlwZUVycm9yIiwiX3N0YXRlIiwiX2hhbmRsZWQiLCJfdmFsdWUiLCJfZGVmZXJyZWRzIiwidSIsIm8iLCJfaW1tZWRpYXRlRm4iLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJmIiwicHJvbWlzZSIsInIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl91bmhhbmRsZWRSZWplY3Rpb25GbiIsImMiLCJzZXRUaW1lb3V0IiwicHJvdG90eXBlIiwicmFjZSIsInNldEltbWVkaWF0ZSIsIndhcm4iLCJsIiwic2VsZiIsImdsb2JhbCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsc0JBQXNCLEVBQUU7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6TEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLG1CQUFPLENBQUMsaUVBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JELE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHFDQUFxQywwQkFBMEI7QUFDL0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QiwwQkFBMEIsZUFBZTtBQUN0RTs7QUFFTztB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QjtBQUE4QyxLQUFsRSxDQUFQO0FBQTJFLEdBQWw5QixFQUFtOUJBLENBQUMsQ0FBQ1EsWUFBRixHQUFlLGNBQVksT0FBT2EsWUFBbkIsSUFBaUMsVUFBU3JSLENBQVQsRUFBVztBQUFDcVIsZ0JBQVksQ0FBQ3JSLENBQUQsQ0FBWjtBQUFnQixHQUE3RCxJQUErRCxVQUFTQSxDQUFULEVBQVc7QUFBQ2lSLEtBQUMsQ0FBQ2pSLENBQUQsRUFBRyxDQUFILENBQUQ7QUFBTyxHQUFwakMsRUFBcWpDZ1EsQ0FBQyxDQUFDZ0IscUJBQUYsR0FBd0IsVUFBU2hSLENBQVQsRUFBVztBQUFDLFNBQUssQ0FBTCxLQUFTeUksT0FBVCxJQUFrQkEsT0FBbEIsSUFBMkJBLE9BQU8sQ0FBQzZJLElBQVIsQ0FBYSx1Q0FBYixFQUFxRHRSLENBQXJELENBQTNCO0FBQW1GLEdBQTVxQzs7QUFBNnFDLE1BQUl1UixDQUFDLEdBQUMsWUFBVTtBQUFDLFFBQUcsZUFBYSxPQUFPQyxJQUF2QixFQUE0QixPQUFPQSxJQUFQO0FBQVksUUFBRyxlQUFhLE9BQU9qRyxNQUF2QixFQUE4QixPQUFPQSxNQUFQO0FBQWMsUUFBRyxlQUFhLE9BQU9rRyxNQUF2QixFQUE4QixPQUFPQSxNQUFQO0FBQWMsVUFBTUMsS0FBSyxDQUFDLGdDQUFELENBQVg7QUFBOEMsR0FBekwsRUFBTjs7QUFBa00sZUFBWUgsQ0FBWixHQUFjQSxDQUFDLENBQUM3RCxPQUFGLENBQVV5RCxTQUFWLENBQW9CLFNBQXBCLE1BQWlDSSxDQUFDLENBQUM3RCxPQUFGLENBQVV5RCxTQUFWLENBQW9CLFNBQXBCLElBQStCblIsQ0FBaEUsQ0FBZCxHQUFpRnVSLENBQUMsQ0FBQzdELE9BQUYsR0FBVXNDLENBQTNGO0FBQTZGLENBQTdqRyxDQUFELEMiLCJmaWxlIjoibWFpbi5tb2R1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvZXMvbWFpbi5tb2R1bGVzLmpzXCIpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwidmFyIHN1cHBvcnQgPSB7XG4gIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gc2VsZixcbiAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gIGJsb2I6XG4gICAgJ0ZpbGVSZWFkZXInIGluIHNlbGYgJiZcbiAgICAnQmxvYicgaW4gc2VsZiAmJlxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSkoKSxcbiAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZixcbiAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxufVxuXG5mdW5jdGlvbiBpc0RhdGFWaWV3KG9iaikge1xuICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbn1cblxuaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHZpZXdDbGFzc2VzID0gW1xuICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nXG4gIF1cblxuICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPVxuICAgIEFycmF5QnVmZmVyLmlzVmlldyB8fFxuICAgIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgIG5hbWUgPSBTdHJpbmcobmFtZSlcbiAgfVxuICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5eX2B8fl0vaS50ZXN0KG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICB9XG4gIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbmZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gIHZhciBpdGVyYXRvciA9IHtcbiAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KClcbiAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGl0ZXJhdG9yXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdGhpcy5tYXAgPSB7fVxuXG4gIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgfSwgdGhpcylcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGhlYWRlcnMpKSB7XG4gICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgdGhpcy5hcHBlbmQoaGVhZGVyWzBdLCBoZWFkZXJbMV0pXG4gICAgfSwgdGhpcylcbiAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICB0aGlzLmFwcGVuZChuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgIH0sIHRoaXMpXG4gIH1cbn1cblxuSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV1cbiAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlICsgJywgJyArIHZhbHVlIDogdmFsdWVcbn1cblxuSGVhZGVycy5wcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbn1cblxuSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbn1cblxuSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbn1cblxuSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbn1cblxuSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpcy5tYXBbbmFtZV0sIG5hbWUsIHRoaXMpXG4gICAgfVxuICB9XG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGl0ZW1zID0gW11cbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgaXRlbXMucHVzaChuYW1lKVxuICB9KVxuICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaXRlbXMgPSBbXVxuICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpdGVtcy5wdXNoKHZhbHVlKVxuICB9KVxuICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGl0ZW1zID0gW11cbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKVxuICB9KVxuICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG59XG5cbmlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gIEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzXG59XG5cbmZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gIH1cbiAgYm9keS5ib2R5VXNlZCA9IHRydWVcbn1cblxuZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHJlYWRlcikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KVxuICAgIH1cbiAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcilcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iKSB7XG4gIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG4gIHJldHVybiBwcm9taXNlXG59XG5cbmZ1bmN0aW9uIHJlYWRCbG9iQXNUZXh0KGJsb2IpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICByZWFkZXIucmVhZEFzVGV4dChibG9iKVxuICByZXR1cm4gcHJvbWlzZVxufVxuXG5mdW5jdGlvbiByZWFkQXJyYXlCdWZmZXJBc1RleHQoYnVmKSB7XG4gIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pXG4gIH1cbiAgcmV0dXJuIGNoYXJzLmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICBpZiAoYnVmLnNsaWNlKSB7XG4gICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICB9IGVsc2Uge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ5dGVMZW5ndGgpXG4gICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmKSlcbiAgICByZXR1cm4gdmlldy5idWZmZXJcbiAgfVxufVxuXG5mdW5jdGlvbiBCb2R5KCkge1xuICB0aGlzLmJvZHlVc2VkID0gZmFsc2VcblxuICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHlcbiAgICBpZiAoIWJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlUZXh0ID0gJydcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5XG4gICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5XG4gICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5XG4gICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpXG4gICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcilcbiAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiAoQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkgfHwgaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkpKSB7XG4gICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYm9keSlcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsIHRoaXMuX2JvZHlCbG9iLnR5cGUpXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIGNvbnN1bWVkKHRoaXMpIHx8IFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhpcy50ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiByZWplY3RlZFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgfVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihkZWNvZGUpXG4gICAgfVxuICB9XG5cbiAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSlcbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxudmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ11cblxuZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gIHJldHVybiBtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSA/IHVwY2FzZWQgOiBtZXRob2Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHlcblxuICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgIH1cbiAgICB0aGlzLnVybCA9IGlucHV0LnVybFxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFsc1xuICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IGlucHV0Lm1ldGhvZFxuICAgIHRoaXMubW9kZSA9IGlucHV0Lm1vZGVcbiAgICB0aGlzLnNpZ25hbCA9IGlucHV0LnNpZ25hbFxuICAgIGlmICghYm9keSAmJiBpbnB1dC5fYm9keUluaXQgIT0gbnVsbCkge1xuICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdFxuICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMudXJsID0gU3RyaW5nKGlucHV0KVxuICB9XG5cbiAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnc2FtZS1vcmlnaW4nXG4gIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgfVxuICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgdGhpcy5tb2RlID0gb3B0aW9ucy5tb2RlIHx8IHRoaXMubW9kZSB8fCBudWxsXG4gIHRoaXMuc2lnbmFsID0gb3B0aW9ucy5zaWduYWwgfHwgdGhpcy5zaWduYWxcbiAgdGhpcy5yZWZlcnJlciA9IG51bGxcblxuICBpZiAoKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSAmJiBib2R5KSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICB9XG4gIHRoaXMuX2luaXRCb2R5KGJvZHkpXG59XG5cblJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7Ym9keTogdGhpcy5fYm9keUluaXR9KVxufVxuXG5mdW5jdGlvbiBkZWNvZGUoYm9keSkge1xuICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gIGJvZHlcbiAgICAudHJpbSgpXG4gICAgLnNwbGl0KCcmJylcbiAgICAuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9JylcbiAgICAgICAgdmFyIG5hbWUgPSBzcGxpdC5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0LmpvaW4oJz0nKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gICAgICB9XG4gICAgfSlcbiAgcmV0dXJuIGZvcm1cbn1cblxuZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHJhd0hlYWRlcnMpIHtcbiAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG4gIC8vIFJlcGxhY2UgaW5zdGFuY2VzIG9mIFxcclxcbiBhbmQgXFxuIGZvbGxvd2VkIGJ5IGF0IGxlYXN0IG9uZSBzcGFjZSBvciBob3Jpem9udGFsIHRhYiB3aXRoIGEgc3BhY2VcbiAgLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzAjc2VjdGlvbi0zLjJcbiAgdmFyIHByZVByb2Nlc3NlZEhlYWRlcnMgPSByYXdIZWFkZXJzLnJlcGxhY2UoL1xccj9cXG5bXFx0IF0rL2csICcgJylcbiAgcHJlUHJvY2Vzc2VkSGVhZGVycy5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKVxuICAgIGlmIChrZXkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKClcbiAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgfVxuICB9KVxuICByZXR1cm4gaGVhZGVyc1xufVxuXG5Cb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXG5cbmV4cG9ydCBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge31cbiAgfVxuXG4gIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICB0aGlzLnN0YXR1cyA9IG9wdGlvbnMuc3RhdHVzID09PSB1bmRlZmluZWQgPyAyMDAgOiBvcHRpb25zLnN0YXR1c1xuICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwXG4gIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogJ09LJ1xuICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJydcbiAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG59XG5cbkJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXG5cblJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICB1cmw6IHRoaXMudXJsXG4gIH0pXG59XG5cblJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pXG4gIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InXG4gIHJldHVybiByZXNwb25zZVxufVxuXG52YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF1cblxuUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc3RhdHVzIGNvZGUnKVxuICB9XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG59XG5cbmV4cG9ydCB2YXIgRE9NRXhjZXB0aW9uID0gc2VsZi5ET01FeGNlcHRpb25cbnRyeSB7XG4gIG5ldyBET01FeGNlcHRpb24oKVxufSBjYXRjaCAoZXJyKSB7XG4gIERPTUV4Y2VwdGlvbiA9IGZ1bmN0aW9uKG1lc3NhZ2UsIG5hbWUpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHZhciBlcnJvciA9IEVycm9yKG1lc3NhZ2UpXG4gICAgdGhpcy5zdGFjayA9IGVycm9yLnN0YWNrXG4gIH1cbiAgRE9NRXhjZXB0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKVxuICBET01FeGNlcHRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRE9NRXhjZXB0aW9uXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaChpbnB1dCwgaW5pdCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdClcblxuICAgIGlmIChyZXF1ZXN0LnNpZ25hbCAmJiByZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICByZXR1cm4gcmVqZWN0KG5ldyBET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKVxuICAgIH1cblxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgZnVuY3Rpb24gYWJvcnRYaHIoKSB7XG4gICAgICB4aHIuYWJvcnQoKVxuICAgIH1cblxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgfVxuICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKVxuICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcbiAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKVxuICAgIH1cblxuICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgIH1cblxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgfVxuXG4gICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydGVkJywgJ0Fib3J0RXJyb3InKSlcbiAgICB9XG5cbiAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmwsIHRydWUpXG5cbiAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgIH0gZWxzZSBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ29taXQnKSB7XG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyICYmIHN1cHBvcnQuYmxvYikge1xuICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJ1xuICAgIH1cblxuICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgICB9KVxuXG4gICAgaWYgKHJlcXVlc3Quc2lnbmFsKSB7XG4gICAgICByZXF1ZXN0LnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0WGhyKVxuXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIERPTkUgKHN1Y2Nlc3Mgb3IgZmFpbHVyZSlcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgcmVxdWVzdC5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydFhocilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpXG4gIH0pXG59XG5cbmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxuXG5pZiAoIXNlbGYuZmV0Y2gpIHtcbiAgc2VsZi5mZXRjaCA9IGZldGNoXG4gIHNlbGYuSGVhZGVycyA9IEhlYWRlcnNcbiAgc2VsZi5SZXF1ZXN0ID0gUmVxdWVzdFxuICBzZWxmLlJlc3BvbnNlID0gUmVzcG9uc2Vcbn1cbiIsImltcG9ydCBlbnYgZnJvbSAnLi9jb25maWcvZW52JztcbmltcG9ydCBjbG9zZXN0IGZyb20gXCIuL3V0aWxzL2Nsb3Nlc3RcIjtcblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgJGVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICBzZWxlY3RvcnM6IHtcbiAgICAgICAgZHJvcGRvd246ICcuanMtZHJvcGRvd24tYnV0dG9uJyxcbiAgICAgICAgc2VsZWN0OiAnLmpzLWRyb3Bkb3duLXNlbGVjdCcsXG4gICAgICAgIGFsbDogJy5qcy1kcm9wZG93bi1idXR0b24tYWxsJyxcbiAgICAgICAgY2hlY2tib3g6ICcuanMtZHJvcGRvd24tY2hlY2tib3gnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJy5qcy1kcm9wZG93bi1wbGFjZWhvbGRlcicsXG4gICAgICAgIG51bWJlcjogJy5qcy1kcm9wZG93bi1udW1iZXInLFxuICAgICAgICBsaXN0OiAnLmpzLWRyb3Bkb3duLWxpc3QnLFxuICAgICAgICBsYWJlbDogJy5qcy1kcm9wZG93bi1sYWJlbCcsXG4gICAgICAgIG9wdGlvbjogJy5qcy1kcm9wZG93bi1vcHRpb24nLFxuICAgICAgICB3Y3NlbGVjdDogJ3ZmZXMtZHJvcGRvd24nXG4gICAgfSxcbiAgICBjbGFzc2VzOiB7XG4gICAgICAgIG9wZW46IGAke2Vudi5uc1ByZWZpeH1kcm9wZG93bl9fc2VsZWN0LW9wZW5gLFxuICAgICAgICBzZWxlY3Q6ICdqcy1kcm9wZG93bi1zZWxlY3QnLFxuICAgICAgICBidXR0b246ICdqcy1kcm9wZG93bi1idXR0b24nLFxuICAgICAgICBhbGw6ICdqcy1kcm9wZG93bi1idXR0b24tYWxsJyxcbiAgICAgICAgbGVzczogYCR7ZW52Lm5zUHJlZml4fWRyb3Bkb3duX19idXR0b24tYWxsLS1sZXNzYCxcbiAgICAgICAgdGljazogYCR7ZW52Lm5zUHJlZml4fWRyb3Bkb3duX19idXR0b24tYWxsLS10aWNrYFxuICAgIH1cbn07XG5cbi8qKlxuICogRHJvcGRvd24uXG4gKlxuICogQG1vZHVsZSBEcm9wZG93blxuICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgLSBzcGVjaWZpZXMgdGhlIGNvbmZpZ3VyYXRpb25zXG4gKiBmb3IgdGhlIG1vZHVsZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd24ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMgPSB7fSkge1xuXG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSBwcm9wZXJ0aWVzLiRlbGVtZW50O1xuICAgICAgICB0aGlzLnNlbGVjdG9ycyA9IGRlZmF1bHRzLnNlbGVjdG9ycztcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gZGVmYXVsdHMuY2xhc3NlcztcbiAgICAgICAgdGhpcy5pc09wZW5lZCAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3R5bGVzID0gcHJvcGVydGllcy4kc3R5bGVzO1xuXG4gICAgICAgIHRoaXMub25TZWxlY3QgPSBuZXcgRXZlbnQoJ3ZmZXM6c2VsZWN0ZWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlIHRoZSBtb2R1bGUuXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gaW5pdFxuICAgICAqXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCAkc2VsZWN0b3JzID0gdGhpcy5zZWxlY3RvcnM7XG4gICAgICAgIGxldCAkY29udGFpbmVyID0gdGhpcy4kZWxlbWVudDtcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJHNlbGVjdG9ycy5jaGVja2JveCk7XG4gICAgICAgIGxldCBpbnB1dExpc3QgPSBBcnJheS5mcm9tKGlucHV0KS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2hlY2s6IGl0ZW0sXG4gICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iaW5kQ29udGFpbmVyKGlucHV0TGlzdCk7XG4gICAgICAgIHRoaXMuYmluZElucHV0cyhpbnB1dExpc3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhlIGV2ZW50cyB0byB0aGUgYWN0aW9uYWJsZSBlbGVtZW50c1xuICAgICAqIHdpdGhpbiB0aGUgcmF0ZXMgc3lzdGVtLlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGJpbmRDb250YWluZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgYmluZENvbnRhaW5lcihpbnB1dExpc3QpIHtcbiAgICAgICAgY29uc3QgJHNlbGVjdG9ycyA9IHRoaXMuc2VsZWN0b3JzO1xuICAgICAgICBjb25zdCAkY2xhc3NlcyA9IHRoaXMuY2xhc3NlcztcbiAgICAgICAgY29uc3QgdGljayA9ICRjbGFzc2VzLnRpY2s7XG4gICAgICAgIGNvbnN0IGxlc3MgPSAkY2xhc3Nlcy5sZXNzO1xuICAgICAgICBsZXQgJGNvbnRhaW5lciA9IHRoaXMuJGVsZW1lbnQ7XG4gICAgICAgIGxldCBhbGwgPSAkY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJHNlbGVjdG9ycy5hbGwpO1xuICAgICAgICBsZXQgZHJvcGRvd24gPSAkY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJHNlbGVjdG9ycy5kcm9wZG93bik7XG4gICAgICAgIGxldCBwbGFjZWhvbGRlciA9ICRjb250YWluZXIucXVlcnlTZWxlY3Rvcigkc2VsZWN0b3JzLnBsYWNlaG9sZGVyKTtcbiAgICAgICAgbGV0IHRleHQgPSBwbGFjZWhvbGRlci5pbm5lckhUTUw7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKCFjbG9zZXN0KGUudGFyZ2V0LCAkc2VsZWN0b3JzLnNlbGVjdCkgJiYgY2xvc2VzdChlLnRhcmdldCwgJHNlbGVjdG9ycy53Y3NlbGVjdCkpIHtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJGNsYXNzZXMub3Blbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGxldCBhY3R1YWxUYXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGlmIChhY3R1YWxUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCRjbGFzc2VzLmJ1dHRvbikgJiYgJGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJGNsYXNzZXMub3Blbikpe1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJGNsYXNzZXMub3Blbik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFjdHVhbFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJGNsYXNzZXMuYnV0dG9uKSAmJiAhJGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJGNsYXNzZXMub3BlbikpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCRjbGFzc2VzLm9wZW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWN0dWFsVGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygkY2xhc3Nlcy5hbGwpKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmIChhY3R1YWxUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGxlc3MpIHx8IGFjdHVhbFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnModGljaykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUodGljayk7XG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGxlc3MpO1xuICAgICAgICAgICAgICAgICAgICBhY3R1YWxUYXJnZXQuaW5uZXJUZXh0ID0gJ1NlbGVjY2lvbmFyIHRvZG8nO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dExpc3QuZm9yRWFjaCAoaW5wdXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2hlY2suY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhY3R1YWxUYXJnZXQuY2xhc3NMaXN0LmFkZCh0aWNrKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsVGFyZ2V0LmlubmVyVGV4dCA9ICdEZXNlbGVjY2lvbmFyIHRvZG8nO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dExpc3QuZm9yRWFjaCAoaW5wdXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2hlY2suY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyVGV4dChpbnB1dExpc3QsIHRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBpZihlLmtleUNvZGUgPT09IDkgJiYgdGhpcy5pc09wZW5lZCkgeyAvLyBUYWJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoKGUua2V5Q29kZSA9PT0gNDAgfHwgZS5rZXlDb2RlID09PSAzOCkgJiYgIXRoaXMuaXNPcGVuZWQpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJGNsYXNzZXMub3Blbik7O1xuXG4gICAgICAgICAgICAgICAgYWxsLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFsbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBpZihlLmtleUNvZGUgPT09IDQwKSB7IC8vIEFycm93IERvd25cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYoaW5wdXRMaXN0WzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0TGlzdFswXS5mb2N1cygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDkpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFc2NhcGVcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJGNsYXNzZXMub3Blbik7XG4gICAgICAgICAgICAgICAgZHJvcGRvd24uZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZCB0aGUgZXZlbnRzIHRvIHRoZSBhY3Rpb25hYmxlIGVsZW1lbnRzXG4gICAgICogd2l0aGluIHRoZSByYXRlcyBzeXN0ZW0uXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gYmluZElucHV0c1xuICAgICAqXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBiaW5kSW5wdXRzKGlucHV0TGlzdCkge1xuICAgICAgICBjb25zdCAkc2VsZWN0b3JzID0gdGhpcy5zZWxlY3RvcnM7XG4gICAgICAgIGNvbnN0ICRjbGFzc2VzID0gdGhpcy5jbGFzc2VzO1xuICAgICAgICBjb25zdCB0aWNrID0gJGNsYXNzZXMudGljaztcbiAgICAgICAgY29uc3QgbGVzcyA9ICRjbGFzc2VzLmxlc3M7XG4gICAgICAgIGxldCAkY29udGFpbmVyID0gdGhpcy4kZWxlbWVudDtcbiAgICAgICAgbGV0IGFsbCA9ICRjb250YWluZXIucXVlcnlTZWxlY3Rvcigkc2VsZWN0b3JzLmFsbCk7XG4gICAgICAgIGxldCBkcm9wZG93biA9ICRjb250YWluZXIucXVlcnlTZWxlY3Rvcigkc2VsZWN0b3JzLmRyb3Bkb3duKTtcbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gJGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCRzZWxlY3RvcnMucGxhY2Vob2xkZXIpO1xuICAgICAgICBsZXQgdGV4dCA9IHBsYWNlaG9sZGVyLmlubmVySFRNTDtcblxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoaW5wdXRMaXN0LCAoY2hlY2tJbnB1dCwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGNoZWNrSW5wdXQuY2hlY2s7XG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbnVtQ2hlY2tzID0gaW5wdXRMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0uY2hlY2tlZCk7XG4gICAgICAgICAgICAgICAgaWYgKG51bUNoZWNrcyA+IDAgJiYgbnVtQ2hlY2tzIDwgaW5wdXRMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBhbGwuY2xhc3NMaXN0LnJlbW92ZSh0aWNrKTtcbiAgICAgICAgICAgICAgICAgICAgYWxsLmNsYXNzTGlzdC5hZGQobGVzcyk7XG4gICAgICAgICAgICAgICAgICAgIGFsbC5pbm5lclRleHQgPSAnRGVzZWxlY2Npb25hciB0b2RvJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG51bUNoZWNrcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhbGwuY2xhc3NMaXN0LnJlbW92ZShsZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgYWxsLmNsYXNzTGlzdC5yZW1vdmUodGljayk7XG4gICAgICAgICAgICAgICAgICAgIGFsbC5pbm5lclRleHQgPSAnU2VsZWNjaW9uYXIgdG9kbyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChudW1DaGVja3MgPT09IGlucHV0TGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsLmNsYXNzTGlzdC5hZGQodGljayk7XG4gICAgICAgICAgICAgICAgICAgIGFsbC5jbGFzc0xpc3QucmVtb3ZlKGxlc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyVGV4dChpbnB1dExpc3QsIHRleHQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgICAgICBpZihlLmtleUNvZGUgPT09IDQwKSB7IC8vIEFycm93IERvd25cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBpZihrZXkgPCBpbnB1dExpc3QubGVuZ3RoIC0gMSkgeyBpbnB1dExpc3Rba2V5ICsgMV0uZm9jdXMoKSB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZS5rZXlDb2RlID09PSAzOCkgeyAvLyBBcnJvdyBVcFxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGtleSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0TGlzdFtrZXkgLSAxXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZS5rZXlDb2RlID09PSAxMykgeyAvLyBFbnRlclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZS5rZXlDb2RlID09PSA5KSB7IC8vIFRhYlxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRXNjYXBlXG4gICAgICAgICAgICAgICAgICAgICRjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgkY2xhc3Nlcy5vcGVuKTtcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd24uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGxhY2Vob2xkZXJUZXh0KGlucHV0TGlzdCwgdGV4dCkge1xuICAgICAgICBjb25zdCAkc2VsZWN0b3JzID0gdGhpcy5zZWxlY3RvcnM7XG4gICAgICAgIGNvbnN0ICRjb250YWluZXIgPSB0aGlzLiRlbGVtZW50O1xuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSAkY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJHNlbGVjdG9ycy5wbGFjZWhvbGRlcik7XG4gICAgICAgIGxldCB0YWdXaWR0aCA9IDg0O1xuXG4gICAgICAgIGxldCBudW1WaXNpYmxlVGFncyA9IE1hdGguZmxvb3IocGxhY2Vob2xkZXIub2Zmc2V0V2lkdGggLyB0YWdXaWR0aCk7XG4gICAgICAgIGxldCBudW1DaGVja3MgPSBpbnB1dExpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jaGVjay5jaGVja2VkKTtcbiAgICAgICAgbGV0IG51bWJlciA9IG51bUNoZWNrcy5sZW5ndGggLSBudW1WaXNpYmxlVGFncztcblxuICAgICAgICBsZXQgbG9vcCA9IG51bUNoZWNrcy5sZW5ndGggPiBudW1WaXNpYmxlVGFncyA/IG51bVZpc2libGVUYWdzIDogbnVtQ2hlY2tzLmxlbmd0aDtcblxuICAgICAgICBpZiAobnVtQ2hlY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgfSBlbHNlIGlmIChudW1DaGVja3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvb3A7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHRTdHlsZXMgPSB0aGlzLnN0eWxlID8gdGhpcy5zdHlsZS50ZXh0IDogJyc7XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MICs9IGA8cCBjbGFzcz1cIiR7ZW52Lm5zUHJlZml4fWRyb3Bkb3duICR7ZW52Lm5zUHJlZml4fWRyb3Bkb3duX190ZXh0ICR7ZW52Lm5zUHJlZml4fXBhcmFncmFwaCAke3RleHRTdHlsZXN9XCI+JHtudW1DaGVja3NbaV0ubGFiZWx9PC9wPmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobnVtQ2hlY2tzLmxlbmd0aCA+IG51bVZpc2libGVUYWdzICYmIHBsYWNlaG9sZGVyLnF1ZXJ5U2VsZWN0b3IoJHNlbGVjdG9ycy5udW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIucXVlcnlTZWxlY3Rvcigkc2VsZWN0b3JzLm51bWJlcikuaW5uZXJIVE1MID0gJysgJyArIG51bWJlci50b1N0cmluZygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChudW1DaGVja3MubGVuZ3RoID4gbnVtVmlzaWJsZVRhZ3MgJiYgIXBsYWNlaG9sZGVyLnF1ZXJ5U2VsZWN0b3IoJHNlbGVjdG9ycy5udW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbnVtU3R5bGVzID0gdGhpcy5zdHlsZSA/IHRoaXMuc3R5bGUubnVtIDogJyc7XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MICs9IGA8cCBjbGFzcz1cIiR7ZW52Lm5zUHJlZml4fWRyb3Bkb3duIGpzLWRyb3Bkb3duLW51bWJlciAke2Vudi5uc1ByZWZpeH1kcm9wZG93bl9fbnVtYmVyICR7ZW52Lm5zUHJlZml4fXBhcmFncmFwaCAke251bVN0eWxlc31cIj4rICR7bnVtYmVyfTwvcD5gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub25TZWxlY3Qub3B0aW9uU2VsZWN0ZWQgPSBudW1DaGVja3M7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuZGlzcGF0Y2hFdmVudCh0aGlzLm9uU2VsZWN0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgZW52IGZyb20gJy4vY29uZmlnL2Vudic7XG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgICRlbGVtZW50OiB1bmRlZmluZWQsXG4gICBzZWxlY3RvcnM6IHtcbiAgICAgICAvLyBUT0RPIGVzdG8gZXMgcG9yIHJldHJvY29tcGF0aWJpbGlkYWQsIGxvIGlkZWFsIHNlcsOtYSB1c2FyIHVuIGRhdGEtYXR0cmlidXRlIG5vcm1hbGl6YWRvIGNvbiBlbCByZXN0byBkZWwgZnJhbWV3b3JrXG4gICAgICAgbWljcm9zaXRlOiAnW2RhdGEtcGF0aG1pY3Jvc2l0ZV0nXG4gICB9LFxuICAgY2xhc3Nlczoge1xuICAgfVxufTtcbmZ1bmN0aW9uIHBhcnNlTGlua3MoZWxlbWVudHMsYXR0bmFtZSxwYXRoKXtcbiAgIFsuLi5lbGVtZW50c10uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICBsZXQgb2xkUGF0aCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dG5hbWUpO1xuICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dG5hbWUscGF0aCArIG9sZFBhdGgpO1xuICAgfSlcbn1cbi8qKlxuKiBNaWNyb3NpdGUuXG4qXG4qIEBtb2R1bGUgTWljcm9zaXRlXG4qIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIC0gc3BlY2lmaWVzIHRoZSBjb25maWd1cmF0aW9uc1xuKiBmb3IgdGhlIG1vZHVsZS5cbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaWNyb3NpdGUge1xuICAgY29uc3RydWN0b3IocHJvcGVydGllcyA9IHt9KSB7XG4gICAgICAgdGhpcy5jb250YWluZXIgICAgID0gcHJvcGVydGllcy4kZWxlbWVudDtcbiAgICAgICB0aGlzLmdob3N0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgdGhpcy5naG9zdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtZ2hvc3Rjb250YWluZXInLCcnKTtcbiAgICAgICB0aGlzLmNsYXNzZXMgICAgPSBkZWZhdWx0cy5jbGFzc2VzO1xuICAgICAgIHRoaXMuc2VsZWN0b3JzICA9IGRlZmF1bHRzLnNlbGVjdG9ycztcbiAgIH1cbiAgIC8qKlxuICAgICogSW5pdGlhbGlzZSB0aGUgbW9kdWxlLlxuICAgICpcbiAgICAqIEBmdW5jdGlvbiBpbml0XG4gICAgKlxuICAgICogQHJldHVybiB1bmRlZmluZWRcbiAgICAqL1xuICAgaW5pdCgpIHtcbiAgICAgICBpZih0aGlzLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgdGhpcy5wYXRoID0gdGhpcy5jb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXBhdGhtaWNyb3NpdGUnKTtcbiAgICAgICAvL2NvbnNvbGUubG9nKCdJbmljaWFsaXphbmRvIG1pY3JvOiAnICsgdGhpcy5wYXRoKTtcbiAgICAgICBmZXRjaCh0aGlzLnBhdGggKyAnaW5kZXguaHRtbCcpXG4gICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAgLy8gUGVxdWXDsW8gaGFjayBwYXJhIHF1ZSBubyBjb21pZW56ZSBhIGRlc2NhcmdhciBsYXMgaW3DoWdlbmVzXG4gICAgICAgICAgIC50aGVuKGh0bWwgPT4gdGhpcy5naG9zdENvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sLnJlcGxhY2UoLzxpbWcvZywnPHhpbWcnKSlcbiAgICAgICAgICAgLnRoZW4oaHRtbCA9PiB0aGlzLmdob3N0Q29udGFpbmVyLmlubmVySFRNTCA9IGh0bWwucmVwbGFjZSgvPHNvdXJjZS9nLCc8eHNvdXJjZScpKVxuICAgICAgICAgICAudGhlbihodG1sID0+IHRoaXMuZ2hvc3RDb250YWluZXIuaW5uZXJIVE1MID0gaHRtbC5yZXBsYWNlKC88dmlkZW8vZywnPHh2aWRlbycpKVxuICAgICAgICAgICAudGhlbihodG1sID0+IHRoaXMucGFyc2VIVE1MKCkpXG4gICAgICAgO1xuICAgfVxuICAgcGFyc2VIVE1MKCkge1xuICAgICAgIGxldCBnYyA9IHRoaXMuZ2hvc3RDb250YWluZXI7XG4gICAgICAgLy8gQ1NTIDxsaW5rPlxuICAgICAgIGxldCBzdHlsZXNoZWV0cyA9IGdjLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPXN0eWxlc2hlZXRdW2hyZWZePWNzc10nKTtcbiAgICAgICBwYXJzZUxpbmtzKHN0eWxlc2hlZXRzLCdocmVmJyx0aGlzLnBhdGgpO1xuICAgICAgIC8vIDxpbWdzPlxuICAgICAgIGxldCBpbWFnZXMgPSBnYy5xdWVyeVNlbGVjdG9yQWxsKCd4aW1nW3NyY149aW1nXScpO1xuICAgICAgIGxldCBwaWN0dXJlcyA9IGdjLnF1ZXJ5U2VsZWN0b3JBbGwoJ3hzb3VyY2Vbc3Jjc2V0Xj1pbWddJyk7XG4gICAgICAgcGFyc2VMaW5rcyhpbWFnZXMsJ3NyYycsdGhpcy5wYXRoKTtcbiAgICAgICBwYXJzZUxpbmtzKHBpY3R1cmVzLCdzcmNzZXQnLHRoaXMucGF0aCk7XG4gICAgICAgLy8gPHZpZGVvPlxuICAgICAgIGxldCB2aWRlb3NTcmMgPSBnYy5xdWVyeVNlbGVjdG9yQWxsKCd4dmlkZW9bc3JjXj1tZWRpYV0nKTtcbiAgICAgICBsZXQgdmlkZW9zU291cmNlID0gZ2MucXVlcnlTZWxlY3RvckFsbCgneHNvdXJjZVtzcmNePW1lZGlhXScpO1xuICAgICAgIHBhcnNlTGlua3ModmlkZW9zU3JjLCAnc3JjJywgdGhpcy5wYXRoKTtcbiAgICAgICBwYXJzZUxpbmtzKHZpZGVvc1NvdXJjZSwgJ3NvdXJjZScsIHRoaXMucGF0aCk7XG4gICAgICAgLy8gT3Ryb3NcbiAgICAgICBsZXQgb3RoZXJzID0gZ2MucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYmctaW1nLWRlc2t0b3BdJyk7XG4gICAgICAgcGFyc2VMaW5rcyhvdGhlcnMsJ2RhdGEtYmctaW1nLWRlc2t0b3AnLHRoaXMucGF0aCk7XG4gICAgICAgb3RoZXJzID0gZ2MucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYmctaW1nLXJlc3BvbnNpdmVdJyk7XG4gICAgICAgcGFyc2VMaW5rcyhvdGhlcnMsJ2RhdGEtYmctaW1nLXJlc3BvbnNpdmUnLHRoaXMucGF0aCk7XG4gICAgICAgb3RoZXJzID0gZ2MucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYmctaW1nLXRhYmxldF0nKTtcbiAgICAgICBwYXJzZUxpbmtzKG90aGVycywnZGF0YS1iZy1pbWctdGFibGV0Jyx0aGlzLnBhdGgpO1xuICAgICAgIG90aGVycyA9IGdjLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltkYXRhLXNwcml0ZXNoZWV0XScpO1xuICAgICAgIHBhcnNlTGlua3Mob3RoZXJzLCdkYXRhLXNwcml0ZXNoZWV0Jyx0aGlzLnBhdGgpO1xuICAgICAgIG90aGVycyA9IGdjLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNyY10nKTtcbiAgICAgICBwYXJzZUxpbmtzKG90aGVycywnZGF0YS1zcmMnLHRoaXMucGF0aCk7XG4gICAgICAgLy8gcmVjdXBlcmFtb3MgbGFzIGV0aXF1ZXRhcyBvcmdpbmFsZXNcbiAgICAgICBnYy5pbm5lckhUTUwgPSBnYy5pbm5lckhUTUwucmVwbGFjZSgvPHhpbWcvZywnPGltZycpO1xuICAgICAgIGdjLmlubmVySFRNTCA9IGdjLmlubmVySFRNTC5yZXBsYWNlKC88eHNvdXJjZS9nLCc8c291cmNlJyk7XG4gICAgICAgZ2MuaW5uZXJIVE1MID0gZ2MuaW5uZXJIVE1MLnJlcGxhY2UoLzx4dmlkZW8vZywnPHZpZGVvJyk7XG4gICAgICAgLy8gPHNjcmlwdHM+XG4gICAgICAgbGV0IHNjcmlwdHMgPSBnYy5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQ6bm90KFtzcmNdKTpub3QoW3R5cGVdKScpO1xuICAgICAgIFsuLi5zY3JpcHRzXS5mb3JFYWNoKHNjcmlwdCA9PiB7XG4gICAgICAgICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgdGFnLmlubmVySFRNTCA9IHNjcmlwdC5pbm5lckhUTUw7XG4gICAgICAgICAgIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgIGdjLmFwcGVuZENoaWxkKHRhZyk7XG4gICAgICAgfSk7XG4gICAgICAgc2NyaXB0cyA9IGdjLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdFtzcmNePWpzXScpO1xuICAgICAgIFsuLi5zY3JpcHRzXS5mb3JFYWNoKHNjcmlwdCA9PiB7XG4gICAgICAgICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgdGFnLnNyYyA9IHRoaXMucGF0aCArIHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICAgICBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICBnYy5hcHBlbmRDaGlsZCh0YWcpO1xuICAgICAgIH0pO1xuLy8gR2V0IGludG8gdGhlIERPTVxuICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGdjKTtcblxuICAgICAgICAgLyogQW1wbGlhY2nDs24gcGFyYSBxdWUgZnVuY2lvbmUgZWwgZmFuY3lib3ggTS4uLi4gVEVNUE9SQUwuIMKhwqHCocKhIFFVSVRBUiBMTyBBTlRFUyBQT1NJQkxFICEhISEgKi9cbiAgICAgICAgbGV0IGZhbmN5ID0gZ2MucXVlcnlTZWxlY3RvckFsbCgnLmZhbmN5LWxpbmsnKTtcbiAgICAgICAgZmFuY3kuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgaWYoZWxlbWVudC5hdHRyaWJ1dGVzLmhyZWYudmFsdWUuaW5kZXhPZihcInd3d1wiKSA8IDApe2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZhbmN5LXRvLXJlbmFtZS1ocmVmXCIpfVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGZhbmN5TmV3SHJlZiA9IGdjLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYW5jeS10by1yZW5hbWUtaHJlZicpO1xuICAgICAgICBwYXJzZUxpbmtzKGZhbmN5TmV3SHJlZiwnaHJlZicsdGhpcy5wYXRoKTtcbiAgICAgICAgaWYodHlwZW9mIG1vZGFsTGluayAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgICAgICBtb2RhbExpbmsoKTtcbiAgICAgICAgICAgIG1vZGFsQ2xvc2UoKTtcbiAgICAgICAgICAgIG1vZGFsRm9ybSgpO1xuICAgICAgICAgICAgbW9kYWxMaW5rSWZyYW1lKCk7XG4gICAgICAgICAgICBtb2RhbERpdigpXG4gICAgICAgIH1cbiAgIH1cbn1cbiIsImltcG9ydCBlbnYgZnJvbSAnLi9jb25maWcvZW52JztcbmltcG9ydCBhamF4IGZyb20gJy4vdXRpbHMvYWpheFJlcXVlc3QnO1xuaW1wb3J0IGNsb3Nlc3QgZnJvbSBcIi4vdXRpbHMvY2xvc2VzdFwiO1xuXG5jb25zdCBLRVlDT0RFX1RBQiA9IDk7XG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgICAkZWxlbWVudDogdW5kZWZpbmVkLFxuICAgIHNlbGVjdG9yczoge1xuICAgICAgICBvdmVybGF5SXRlbTogYC5qcy1vdmVybGF5LWl0ZW1gLFxuICAgICAgICBvdmVybGF5SXRlbUluZm9ybWF0aW9uOiBgLmpzLW92ZXJsYXktaXRlbS1pbmZvcm1hdGlvbmAsXG4gICAgICAgIGNsb3NlOiAnLmpzLW92ZXJsYXktY2xvc2UnLFxuICAgICAgICBvdmVybGF5Q29udGVudDogJy5qcy1vdmVybGF5LWNvbnRlbnQnLFxuICAgICAgICBvdmVybGF5SXRlbVNob3duOiBgLiR7ZW52Lm5zUHJlZml4fW92ZXJsYXlfX2l0ZW0tLXNob3dgLFxuICAgICAgICBzbGlkZVVwQnV0dG9uOiAnLmpzLXNsaWRlLXVwLWJ1dHRvbidcbiAgICB9LFxuICAgIGNsYXNzZXM6IHtcbiAgICAgICAgb3ZlcmxheTogJ2pzLW92ZXJsYXknLFxuICAgICAgICBvdmVybGF5SXRlbTogYGpzLW92ZXJsYXktaXRlbWAsXG4gICAgICAgIGNsb3NlOiAnanMtb3ZlcmxheS1jbG9zZScsXG4gICAgICAgIG92ZXJsYXlDb250ZW50OiAnanMtb3ZlcmxheS1jb250ZW50JyxcbiAgICAgICAgb3ZlcmxheUl0ZW1DU1M6IGAke2Vudi5uc1ByZWZpeH1vdmVybGF5X19pdGVtYCxcbiAgICAgICAgb3ZlcmxheUNvbnRlbnRDU1M6IGAke2Vudi5uc1ByZWZpeH1vdmVybGF5X19jb250ZW50YCxcbiAgICAgICAgb3ZlcmxheUNvbnRlbnRZb3V0dWJlQ1NTOiBgJHtlbnYubnNQcmVmaXh9b3ZlcmxheV9fY29udGVudC0teW91dHViZWAsXG4gICAgICAgIHNob3dPdmVybGF5Q29udGFpbmVyOiBgJHtlbnYubnNQcmVmaXh9b3ZlcmxheS0tc2hvd2AsXG4gICAgICAgIHNob3dPdmVybGF5SXRlbTogYCR7ZW52Lm5zUHJlZml4fW92ZXJsYXlfX2l0ZW0tLXNob3dgLFxuICAgICAgICBoaWRlQ2xvc2VCdXR0b246IGAke2Vudi5uc1ByZWZpeH1vdmVybGF5X19jbG9zZS0taGlkZWAsXG4gICAgICAgIHNsaWRlVXA6ICdzbGlkZSdcbiAgICB9XG59XG5cbi8qKlxuICogT3ZlcmxheS5cbiAqXG4gKiBAbW9kdWxlIE92ZXJsYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIC0gc3BlY2lmaWVzIHRoZSBjb25maWd1cmF0aW9uc1xuICogZm9yIHRoZSBtb2R1bGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJsYXkge1xuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMgPSB7fSkge1xuICAgICAgICB0aGlzLiRlbGVtZW50ICAgICAgID0gcHJvcGVydGllcy4kZWxlbWVudDtcbiAgICAgICAgdGhpcy5zZWxlY3RvcnMgICAgICA9IGRlZmF1bHRzLnNlbGVjdG9ycztcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzICAgICA9IGRlZmF1bHRzLmF0dHJpYnV0ZXM7XG4gICAgICAgIHRoaXMuY2xhc3NlcyAgICAgICAgPSBkZWZhdWx0cy5jbGFzc2VzO1xuICAgICAgICB0aGlzLmJ1dHRvbk92ZXJsYXkgID0gJyc7XG5cbiAgICAgICAgdGhpcy5vbkluaXQgICAgICAgICA9IG5ldyBFdmVudCgndmZlczppbml0Jyk7XG4gICAgICAgIHRoaXMub25PcGVuICAgICAgICAgPSBuZXcgRXZlbnQoJ3ZmZXM6b3BlbmVkJyk7XG4gICAgICAgIHRoaXMub25DbG9zZSAgICAgICAgPSBuZXcgRXZlbnQoJ3ZmZXM6Y2xvc2VkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZSB0aGUgbW9kdWxlLlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGluaXRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iaW5kKCk7XG5cbiAgICAgICAgdGhpcy5vbkluaXQub3ZlcmxheSA9IHt9O1xuICAgICAgICB0aGlzLm9uSW5pdC5vdmVybGF5LmNvbnRhaW5lciA9IHRoaXMuJGVsZW1lbnQ7XG4gICAgICAgIHRoaXMub25Jbml0Lm92ZXJsYXkubnVtT3Blbk92ZXJsYXlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtb3ZlcmxheV1gKS5sZW5ndGg7XG4gICAgICAgIHRoaXMub25Jbml0Lm92ZXJsYXkuY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7dGhpcy5zZWxlY3RvcnMub3ZlcmxheUl0ZW19YCkubGVuZ3RoO1xuICAgICAgICB0aGlzLiRlbGVtZW50LmRpc3BhdGNoRXZlbnQodGhpcy5vbkluaXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhlIGV2ZW50cyB0byB0aGUgYWN0aW9uYWJsZSBlbGVtZW50c1xuICAgICAqIHdpdGhpbiB0aGUgcmF0ZXMgc3lzdGVtLlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGJpbmRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgYmluZCgpIHtcbiAgICAgICAgbGV0IG1vZCA9IHRoaXM7XG4gICAgICAgIGxldCBvdmVybGF5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLW92ZXJsYXldYCk7XG4gICAgICAgIGxldCBzbGlkZVVwQnV0dG9ucyA9IG1vZC4kZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKG1vZC5zZWxlY3RvcnMuc2xpZGVVcEJ1dHRvbik7XG5cbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG92ZXJsYXlCdXR0b25zLCBidXR0b24gPT4ge1xuICAgICAgICAgICAgbGV0IG92ZXJsYXk7XG5cbiAgICAgICAgICAgIGlmKGJ1dHRvbi5kYXRhc2V0Lm92ZXJsYXlIcmVmKSB7IG1vZC5nZXRDb250ZW50QnlBamF4KGJ1dHRvbikgfVxuICAgICAgICAgICAgLy8gaWYoYnV0dG9uLmRhdGFzZXQub3ZlcmxheVlvdXR1YmUpIHsgbW9kLm92ZXJsYXlZb3V0dWJlKGJ1dHRvbiwgb3ZlcmxheSkgfVxuXG4gICAgICAgICAgICBvdmVybGF5ID0gbW9kLiRlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYnV0dG9uLmRhdGFzZXQub3ZlcmxheSk7XG5cbiAgICAgICAgICAgIGlmKG92ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICBtb2QuaGlkZUNsb3NlQnV0dG9uKGJ1dHRvbiwgb3ZlcmxheSk7XG5cbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICBtb2QuYnV0dG9uT3ZlcmxheSA9IGJ1dHRvbjtcblxuICAgICAgICAgICAgICAgICAgICBtb2Qub3Blbk92ZXJsYXkob3ZlcmxheSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1vZC4kZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgbGV0IG92ZXJsYXlPcGVuZWQgPSBtb2QuJGVsZW1lbnQucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLm92ZXJsYXlJdGVtU2hvd24pO1xuXG4gICAgICAgICAgICBtb2QuY2xvc2VPdmVybGF5KGUudGFyZ2V0LCBvdmVybGF5T3BlbmVkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKHNsaWRlVXBCdXR0b25zLCBidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJGNsYXNzZXMuc2xpZGVVcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xvc2VPdmVybGF5KGFjdHVhbFRhcmdldCwgb3ZlcmxheSkge1xuICAgICAgICBpZihhY3R1YWxUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5vdmVybGF5KSB8fCBhY3R1YWxUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5jbG9zZSkpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuc2hvd092ZXJsYXlDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICAgICAgaWYob3ZlcmxheSkge1xuICAgICAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuc2hvd092ZXJsYXlJdGVtKTtcbiAgICAgICAgICAgICAgICBvdmVybGF5LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLmJ1dHRvbk92ZXJsYXkpIHsgdGhpcy5idXR0b25PdmVybGF5LmZvY3VzKCkgfVxuXG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2Uub3ZlcmxheSA9IHt9O1xuICAgICAgICAgICAgdGhpcy5vbkNsb3NlLm92ZXJsYXkuY29udGFpbmVyID0gdGhpcy4kZWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMub25DbG9zZS5vdmVybGF5LnRhcmdldCA9IG92ZXJsYXk7XG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2Uub3ZlcmxheS5idXR0b24gPSB0aGlzLmJ1dHRvbk92ZXJsYXk7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LmRpc3BhdGNoRXZlbnQodGhpcy5vbkNsb3NlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW5PdmVybGF5KG92ZXJsYXkpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zaG93T3ZlcmxheUNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgIGlmKHRoaXMuJGVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5vdmVybGF5SXRlbVNob3duKSkge1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLm92ZXJsYXlJdGVtU2hvd24pLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLnNob3dPdmVybGF5SXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnNob3dPdmVybGF5SXRlbSk7XG4gICAgICAgIG92ZXJsYXkuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgIGlmIChvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy52ZmVzLWJ1dHRvbicpKSB7XG4gICAgICAgICAgICBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy52ZmVzLWJ1dHRvbicpLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuY2xvc2UpLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uT3Blbi5vdmVybGF5ID0ge307XG4gICAgICAgIHRoaXMub25PcGVuLm92ZXJsYXkuY29udGFpbmVyID0gdGhpcy4kZWxlbWVudDtcbiAgICAgICAgdGhpcy5vbk9wZW4ub3ZlcmxheS50YXJnZXQgPSBvdmVybGF5O1xuICAgICAgICB0aGlzLm9uT3Blbi5vdmVybGF5LmJ1dHRvbiA9IHRoaXMuYnV0dG9uT3ZlcmxheTtcbiAgICAgICAgdGhpcy5idXR0b25PdmVybGF5LmRpc3BhdGNoRXZlbnQodGhpcy5vbk9wZW4pO1xuXG4gICAgICAgIHRoaXMudHJhcEZvY3VzKCk7XG4gICAgfVxuXG4gICAgaGlkZUNsb3NlQnV0dG9uKGJ1dHRvbiwgb3ZlcmxheSkge1xuICAgICAgICBpZihidXR0b24uZGF0YXNldC5vdmVybGF5Q2xvc2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3ZlcmxheS5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmNsb3NlKS5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5oaWRlQ2xvc2VCdXR0b24pO1xuICAgICAgICAgICAgb3ZlcmxheS5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmNsb3NlKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZU15RWxlbWVudChvYmopIHtcbiAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmoudGFnKTtcbiAgICAgICAgb2JqLmF0dHJzLmZvckVhY2goYXR0ciA9PiB7IGVsLnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpIH0pO1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBvYmouaHRtbDtcbiAgICAgICAgaWYob2JqLmNoaWxkRWxlbWVudCkgeyBlbC5hcHBlbmRDaGlsZChvYmopIH1cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIGNyZWF0ZU92ZXJsYXlJdGVtKGJ1dHRvbikge1xuICAgICAgICBsZXQgYnV0dG9uQ2xvc2VIVE1MID0gYDxkaXYgY2xhc3M9XCIke2Vudi5uc1ByZWZpeH1vdmVybGF5X19oZWFkXCI+PGJ1dHRvbiBjbGFzcz1cIiR7ZW52Lm5zUHJlZml4fW92ZXJsYXlfX2Nsb3NlIGpzLW92ZXJsYXktY2xvc2VcIiBhcmlhLWhpZGRlbj1cImZhbHNlXCI+PHN2ZyBjbGFzcz1cImljb24gJHtlbnYubnNQcmVmaXh9Y29sb3ItLXZvZGFmb25lLWdyYXlcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIzNnB4XCIgaGVpZ2h0PVwiMzZweFwiPjx0aXRsZT5DbG9zZTwvdGl0bGU+PHVzZSBjbGFzcz1cImljb24tdjNcIiB4bGluazpocmVmPVwiI2ljb24zLWNsb3NlXCI+PC91c2U+PC9zdmc+PC9idXR0b24+PC9kaXY+YDtcblxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVNeUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiAnc2VjdGlvbicsXG4gICAgICAgICAgICBhdHRyczogW1xuICAgICAgICAgICAgICAgIHtuYW1lOiAnaWQnLCB2YWx1ZTogYnV0dG9uLmRhdGFzZXQub3ZlcmxheX0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdjbGFzcycsIHZhbHVlOiBgJHt0aGlzLmNsYXNzZXMub3ZlcmxheUl0ZW19ICR7dGhpcy5jbGFzc2VzLm92ZXJsYXlJdGVtQ1NTfWB9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnYXJpYS1oaWRkZW4nLCB2YWx1ZTogJ3RydWUnfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ3JvbGUnLCB2YWx1ZTogJ2RpYWxvZyd9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGh0bWw6IGJ1dHRvbkNsb3NlSFRNTFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVPdmVybGF5Q29udGVudChodG1sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU15RWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgYXR0cnM6IFtcbiAgICAgICAgICAgICAgICB7bmFtZTogJ2NsYXNzJywgdmFsdWU6IGAke3RoaXMuY2xhc3Nlcy5vdmVybGF5Q29udGVudH0gJHt0aGlzLmNsYXNzZXMub3ZlcmxheUNvbnRlbnRDU1N9YH0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdhcmlhLWhpZGRlbicsIHZhbHVlOiAndHJ1ZSd9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGh0bWw6IGh0bWxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlT3ZlcmxheShodG1sLCBvdmVybGF5KSB7XG4gICAgICAgIGxldCBvdmVybGF5Q29udGVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGJ1dHRvbkNsb3NlSFRNTCA9IGA8ZGl2IGNsYXNzPVwiJHtlbnYubnNQcmVmaXh9b3ZlcmxheV9faGVhZFwiPjxidXR0b24gY2xhc3M9XCIke2Vudi5uc1ByZWZpeH1vdmVybGF5X19jbG9zZSBqcy1vdmVybGF5LWNsb3NlXCI+PHN2ZyBjbGFzcz1cImljb24gJHtlbnYubnNQcmVmaXh9Y29sb3ItLXZvZGFmb25lLWdyYXlcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIzNnB4XCIgaGVpZ2h0PVwiMzZweFwiPjx0aXRsZT5DbG9zZTwvdGl0bGU+PHVzZSBjbGFzcz1cImljb24tdjNcIiB4bGluazpocmVmPVwiI2ljb24zLWNsb3NlXCI+PC91c2U+PC9zdmc+PC9idXR0b24+PC9kaXY+YDtcblxuICAgICAgICBpZihvdmVybGF5KSB7XG4gICAgICAgICAgICBsZXQgY2xvc2VCdXR0b24gPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuY2xvc2UpO1xuICAgICAgICAgICAgb3ZlcmxheUNvbnRlbnQgPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMub3ZlcmxheUNvbnRlbnQpO1xuXG4gICAgICAgICAgICBpZighY2xvc2VCdXR0b24pIHsgb3ZlcmxheS5pbm5lckhUTUwgPSBidXR0b25DbG9zZUhUTUwgfVxuXG4gICAgICAgICAgICBpZihvdmVybGF5Q29udGVudCkgeyBvdmVybGF5Q29udGVudC5pbm5lckhUTUwgPSBodG1sIH1cbiAgICAgICAgICAgIGVsc2UgeyBvdmVybGF5Q29udGVudCA9IHRoaXMuY3JlYXRlT3ZlcmxheUNvbnRlbnQoaHRtbCkgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3ZlcmxheUNvbnRlbnQgPSB0aGlzLmNyZWF0ZU92ZXJsYXlDb250ZW50KGh0bWwpO1xuICAgICAgICAgICAgbGV0IHJlZiA9IG1vZCB8fCB0aGlzO1xuXG4gICAgICAgICAgICBvdmVybGF5ID0gdGhpcy5jcmVhdGVPdmVybGF5SXRlbShyZWYuYnV0dG9uT3ZlcmxheSk7XG4gICAgICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKG92ZXJsYXlDb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDb250ZW50QnlBamF4KGJ1dHRvbikge1xuICAgICAgICBsZXQgbW9kID0gdGhpcztcbiAgICAgICAgbGV0IHBhdGhNaWNyb3NpdGUgPSBjbG9zZXN0KGJ1dHRvbiwgJ1tkYXRhLXBhdGhtaWNyb3NpdGVdJyk7XG4gICAgICAgIGxldCBvdmVybGF5ID0gbW9kLiRlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYnV0dG9uLmRhdGFzZXQub3ZlcmxheSk7XG4gICAgICAgIHBhdGhNaWNyb3NpdGUgPSBwYXRoTWljcm9zaXRlID8gcGF0aE1pY3Jvc2l0ZS5kYXRhc2V0LnBhdGhtaWNyb3NpdGUgOiAnJztcblxuICAgICAgICBidXR0b24uZGF0YXNldC5vdmVybGF5SHJlZiA9IHBhdGhNaWNyb3NpdGUgKyBidXR0b24uZGF0YXNldC5vdmVybGF5SHJlZjtcblxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbW9kLmJ1dHRvbk92ZXJsYXkgPSBidXR0b247XG5cbiAgICAgICAgICAgIGlmKGJ1dHRvbi5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmxheS1jaGFyZ2VkJykpIHtcbiAgICAgICAgICAgICAgICBtb2Qub3Blbk1vZGFsKG1vZGFsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWpheChidXR0b24uZGF0YXNldC5vdmVybGF5SHJlZikudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbW9kLmNyZWF0ZU92ZXJsYXkoaHRtbCwgb3ZlcmxheSk7XG4gICAgICAgICAgICAgICAgICAgIG1vZC5vcGVuT3ZlcmxheShvdmVybGF5KTtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1vdmVybGF5LWNoYXJnZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMYSB1cmwgbm8gZXMgY29ycmVjdGEuXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9kLmhpZGVDbG9zZUJ1dHRvbihidXR0b24sIG92ZXJsYXkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvdmVybGF5WW91dHViZShidXR0b24sIG92ZXJsYXkpIHtcbiAgICAgICAgbGV0IHlvdXR1YmVIVE1MID0gYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vdmVybGF5Q29udGVudFlvdXR1YmVDU1N9XCI+PGlmcmFtZSBjbGFzcz1cImpzLW92ZXJsYXkteW91dHViZSAke2Vudi5uc1ByZWZpeH1vdmVybGF5X195b3V0dWJlXCIgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke2J1dHRvbi5kYXRhc2V0Lm92ZXJsYXlZb3V0dWJlfVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+PC9kaXY+YDtcbiAgICAgICAgb3ZlcmxheSA9IHRoaXMuJGVsZW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBidXR0b24uZGF0YXNldC5vdmVybGF5KTtcblxuICAgICAgICB0aGlzLmNyZWF0ZU92ZXJsYXkoeW91dHViZUhUTUwsIG92ZXJsYXkpO1xuICAgIH1cblxuICAgIHRyYXBGb2N1cygpIHtcbiAgICAgICAgbGV0IGZvY3VzYWJsZUVscyA9IHRoaXMuJGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtb3ZlcmxheV9faXRlbS0tc2hvdycpLnF1ZXJ5U2VsZWN0b3JBbGwoJy52ZmVzLW92ZXJsYXlfX2Nsb3NlLCAudmZlcy1idXR0b24sIC52ZmVzLXBsYXksIC52ZmVzLWxpbmssIGEsIGJ1dHRvbicpO1xuICAgICAgICBsZXQgZmlyc3RGb2N1c2FibGVFbCA9IGZvY3VzYWJsZUVsc1swXTtcbiAgICAgICAgbGV0IGxhc3RGb2N1c2FibGVFbCA9IGZvY3VzYWJsZUVsc1tmb2N1c2FibGVFbHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgbGV0IGlzVGFiUHJlc3NlZCA9IChlLmtleSA9PT0gJ1RhYicgfHwgZS5rZXlDb2RlID09PSBLRVlDT0RFX1RBQik7XG5cbiAgICAgICAgICAgIGlmICghaXNUYWJQcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5zaGlmdEtleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBmaXJzdEZvY3VzYWJsZUVsKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGxhc3RGb2N1c2FibGVFbC5mb2N1cygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKCFlLnNoaWZ0S2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3RGb2N1c2FibGVFbCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBmaXJzdEZvY3VzYWJsZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBlbnYgZnJvbSAnLi9jb25maWcvZW52JztcbmltcG9ydCBjbG9zZXN0IGZyb20gXCIuL3V0aWxzL2Nsb3Nlc3RcIjtcblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgJGVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICBzZWxlY3RvcnM6IHtcbiAgICAgICAgYnV0dG9uOiAnLmpzLWZvcm0tZHJvcGRvd24tYnV0dG9uJyxcbiAgICAgICAgYnV0dG9uTGlzdDogJy5qcy1mb3JtLWRyb3Bkb3duLWxpc3QtYnV0dG9uJyxcbiAgICAgICAgYnV0dG9uTGlzdENvbnRhaW5lcjogJy5qcy1mb3JtLWRyb3Bkb3duLWxpc3QnLFxuICAgICAgICBkcm9wZG93bjogYC4ke2Vudi5uc1ByZWZpeH1mb3JtX19kcm9wZG93bmAsXG4gICAgICAgIHNlbGVjdGVkOiAnLnNlbGVjdGVkJ1xuICAgIH0sXG4gICAgY2xhc3Nlczoge1xuICAgICAgICBidXR0b246ICdqcy1mb3JtLWRyb3Bkb3duLWJ1dHRvbicsXG4gICAgICAgIGJ1dHRvbkNTUzogYCR7ZW52Lm5zUHJlZml4fWZvcm1fX2Ryb3Bkb3duLWJ1dHRvbmAsXG4gICAgICAgIGJ1dHRvbkxpc3Q6ICdqcy1mb3JtLWRyb3Bkb3duLWxpc3QtYnV0dG9uJyxcbiAgICAgICAgYnV0dG9uTGlzdENvbnRhaW5lcjogJ2pzLWZvcm0tZHJvcGRvd24tbGlzdCcsXG4gICAgICAgIGJ1dHRvbkxpc3RDU1M6IGAke2Vudi5uc1ByZWZpeH1mb3JtX19kcm9wZG93bi1saXN0LWJ1dHRvbmAsXG4gICAgICAgIGRyb3Bkb3duOiBgJHtlbnYubnNQcmVmaXh9Zm9ybV9fZHJvcGRvd25gLFxuICAgICAgICBvcGVuZWQ6IGBvcGVuZWRgLFxuICAgICAgICBvcHRpb25MaXN0Q1NTOiBgJHtlbnYubnNQcmVmaXh9Zm9ybV9fZHJvcGRvd24tbGlzdGAsXG4gICAgICAgIHNlbGVjdGVkOiBgc2VsZWN0ZWRgLFxuICAgICAgICB2aXN1YWxseUhpZGRlbkNTUzogJ3Zpc3VhbGx5LWhpZGRlbicsXG4gICAgfVxufTtcblxuLyoqXG4gKiBTZWxlY3QuXG4gKlxuICogQG1vZHVsZSBTZWxlY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIC0gc3BlY2lmaWVzIHRoZSBjb25maWd1cmF0aW9uc1xuICogZm9yIHRoZSBtb2R1bGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCB7XG4gICAgY29uc3RydWN0b3IocHJvcGVydGllcyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdCAgICA9IHByb3BlcnRpZXMuJGVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5zZWxlY3QgICAgID0gc2VsZWN0O1xuICAgICAgICB0aGlzLmNsYXNzZXMgICAgPSBkZWZhdWx0cy5jbGFzc2VzO1xuICAgICAgICB0aGlzLnNlbGVjdG9ycyAgPSBkZWZhdWx0cy5zZWxlY3RvcnM7XG4gICAgICAgIHRoaXMuaXNPcGVuZWQgICA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25Jbml0ID0gbmV3IEV2ZW50KCd2ZmVzOmluaXQnKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IG5ldyBFdmVudCgndmZlczpjaGFuZ2VkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZSB0aGUgbW9kdWxlLlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGluaXRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG5cbiAgICBpbml0KGZpcnN0VGltZSA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMudmlzdWFsbHlIaWRkZW5DU1MpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlRHJvcGRvd24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEZ1bmN0aW9uIHRvIGdlbmVyYXRlIGV2ZXJ5IEhUTUwgb2Ygb3VyIGN1c3RvbSBzZWxlY3RcbiAgICAqXG4gICAgKiBAZnVuY3Rpb24gZ2VuZXJhdGVEcm9wZG93blxuICAgICpcbiAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgKlxuICAgICovXG4gICAgZ2VuZXJhdGVEcm9wZG93bigpIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyAgID0gdGhpcy5jbGFzc2VzO1xuICAgICAgICBjb25zdCBzZWxlY3QgICAgPSB0aGlzLnNlbGVjdDtcbiAgICAgICAgY29uc3QgJGRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgICAgIGxldCBkcm9wZG93biAgICA9ICRkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGJ1dHRvbiAgICAgID0gJGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBsZXQgb3B0aW9uTGlzdCAgPSAkZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgbGV0IGh0bWwgICAgICAgID0gJyc7XG5cbiAgICAgICAgLy8gQXR0cmlidXRlc1xuICAgICAgICBvcHRpb25MaXN0LnNldEF0dHJpYnV0ZSgncm9sZScsICdsaXN0Ym94Jyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnY29tYm9ib3gnKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1hdXRvY29tcGxldGUnLCAnbm9uZScpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtcmVhZG9ubHknLCAndHJ1ZScpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLW93bnMnLCBgJHtzZWxlY3QuaWR9LWxpc3RgKTtcblxuICAgICAgICAvLyBJZFxuICAgICAgICBvcHRpb25MaXN0LmlkID0gYCR7c2VsZWN0LmlkfS1saXN0YDtcblxuICAgICAgICAvL0NsYXNzZXNcbiAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZChjbGFzc2VzLmRyb3Bkb3duKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoY2xhc3Nlcy5idXR0b24sIGNsYXNzZXMuYnV0dG9uQ1NTKTtcbiAgICAgICAgb3B0aW9uTGlzdC5jbGFzc0xpc3QuYWRkKGNsYXNzZXMub3B0aW9uTGlzdENTUywgY2xhc3Nlcy5idXR0b25MaXN0Q29udGFpbmVyKTtcblxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoc2VsZWN0Lm9wdGlvbnMsIG9wdGlvbiA9PiB7XG4gICAgICAgICAgICBsZXQgZGlzYWJsZWQgPSBvcHRpb24uZGlzYWJsZWQgPyAgJ2Rpc2FibGVkJyA6ICcnO1xuXG4gICAgICAgICAgICBodG1sICs9IGA8bGk+PGJ1dHRvbiByb2xlPVwib3B0aW9uXCIgY2xhc3M9XCIke2NsYXNzZXMuYnV0dG9uTGlzdH0gJHtjbGFzc2VzLmJ1dHRvbkxpc3RDU1N9XCIgJHtkaXNhYmxlZH0+JHtvcHRpb24udGV4dH08L2J1dHRvbj48L2xpPmA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vaW5zZXJ0IEhUTUxcbiAgICAgICAgb3B0aW9uTGlzdC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHQ7XG5cbiAgICAgICAgLy9BcHBlbmQgY2hpbGRzXG4gICAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdGlvbkxpc3QpO1xuICAgICAgICBzZWxlY3QucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChkcm9wZG93bik7XG5cbiAgICAgICAgdGhpcy5hc3NvY2lhdGVFdmVudHMoYnV0dG9uLCBvcHRpb25MaXN0KTtcblxuICAgICAgICB0aGlzLm9uSW5pdC5zZWxlY3QgPSBidXR0b247XG4gICAgICAgIHRoaXMub25Jbml0Lm9wdGlvbnMgPSBvcHRpb25MaXN0LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3RvcnMuYnV0dG9uTGlzdCk7XG4gICAgICAgIHRoaXMub25Jbml0Lm51bU9wdGlvbnMgPSBvcHRpb25MaXN0LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3RvcnMuYnV0dG9uTGlzdCkubGVuZ3RoO1xuICAgICAgICB0aGlzLnNlbGVjdC5kaXNwYXRjaEV2ZW50KHRoaXMub25Jbml0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEZ1bmN0aW9uIHRvIGFzc29jaWF0ZSBldmVyeSBsaXN0ZW5lcnMgdG8gb3VyIGN1c3RvbSBzZWxlY3QgYW5kIGRlZmF1bHQgc2VsZWN0XG4gICAgKlxuICAgICogQGZ1bmN0aW9uIGFzc29jaWF0ZUV2ZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ1dHRvbiAtIGN1c3RvbSBzZWxlY3QgaGVhZGluZ1xuICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gb3B0aW9uTGlzdCAtIHVsIHdoaWNoIGNvbnRhaW5zIGN1c3RvbSBzZWxlY3Qgb3B0aW9uc1xuICAgICpcbiAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgKi9cbiAgICBhc3NvY2lhdGVFdmVudHMoYnV0dG9uLCBvcHRpb25MaXN0KSB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gJHRoaXMuc2VsZWN0O1xuICAgICAgICBjb25zdCBidXR0b25MaXN0ID0gb3B0aW9uTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCR0aGlzLnNlbGVjdG9ycy5idXR0b25MaXN0KTtcblxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJHRoaXMudG9nZ2xlT3BlbihidXR0b24sIG9wdGlvbkxpc3QpO1xuXG4gICAgICAgICAgICBpZigkdGhpcy5pc09wZW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHNlbGVjdC5zZWxlY3RlZEluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYoYnV0dG9uTGlzdFtzZWxlY3Quc2VsZWN0ZWRJbmRleF0uZGlzYWJsZWQpIHsgaW5kZXgrKyB9XG5cbiAgICAgICAgICAgICAgICBidXR0b25MaXN0W2luZGV4XSA/IGJ1dHRvbkxpc3RbaW5kZXhdLmZvY3VzKCkgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgaWYoZS5rZXlDb2RlID09PSA5ICYmICR0aGlzLmlzT3BlbmVkKSB7IC8vIFRhYlxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZigoZS5rZXlDb2RlID09PSA0MCB8fCBlLmtleUNvZGUgPT09IDM4KSAmJiAhJHRoaXMuaXNPcGVuZWQpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZihidXR0b25MaXN0W3NlbGVjdC5zZWxlY3RlZEluZGV4XS5kaXNhYmxlZCkgeyBpbmRleCsrIH1cblxuICAgICAgICAgICAgICAgICR0aGlzLnRvZ2dsZU9wZW4oYnV0dG9uLCBvcHRpb25MaXN0KTtcblxuICAgICAgICAgICAgICAgIGJ1dHRvbkxpc3RbaW5kZXhdID8gYnV0dG9uTGlzdFtpbmRleF0uZm9jdXMoKSA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFtdLmZvckVhY2guY2FsbChidXR0b25MaXN0LCAob3B0aW9uLCBrZXkpID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICR0aGlzLmNoYW5nZVNlbGVjdFZhbHVlKGJ1dHRvbiwgb3B0aW9uTGlzdCwga2V5KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gQXJyb3cgRG93blxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGtleSA8IGJ1dHRvbkxpc3QubGVuZ3RoIC0gMSkgeyBidXR0b25MaXN0W2tleSArIDFdLmZvY3VzKCkgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGUua2V5Q29kZSA9PT0gMzgpIHsgLy8gQXJyb3cgVXBcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBpZihrZXkgPj0gMCkgeyBidXR0b25MaXN0W2tleSAtIDFdLmZvY3VzKCkgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGUua2V5Q29kZSA9PT0gMTMpIHsgLy8gRW50ZXJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmNoYW5nZVNlbGVjdFZhbHVlKGJ1dHRvbiwgb3B0aW9uTGlzdCwga2V5KTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihlLmtleUNvZGUgPT09IDkpIHsgLy8gVGFiXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFc2NhcGVcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMudG9nZ2xlT3BlbihidXR0b24sIG9wdGlvbkxpc3QpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgIGlmKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAzMikgeyAvLyBFbnRlciAmJiBFc3BhY2VcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgZSA9PiB7XG4gICAgICAgICAgICBidXR0b24uZm9jdXMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGlmKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJHRoaXMuY2xhc3Nlcy5kcm9wZG93bikgJiYgIWNsb3Nlc3QoZS50YXJnZXQsICR0aGlzLnNlbGVjdG9ycy5kcm9wZG93bikpIHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMub3BlbmVkKTtcbiAgICAgICAgICAgICAgICBvcHRpb25MaXN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLm9wZW5lZCk7XG5cbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmlzT3BlbmVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogRnVuY3Rpb24gdG8gb3BlbiBvciBjbG9zZSBvdXIgY3VzdG9tIHNlbGVjdFxuICAgICpcbiAgICAqIEBmdW5jdGlvbiB0b2dnbGVPcGVuXG4gICAgKlxuICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYnV0dG9uIC0gY3VzdG9tIHNlbGVjdCBoZWFkaW5nXG4gICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBvcHRpb25MaXN0IC0gdWwgd2hpY2ggY29udGFpbnMgY3VzdG9tIHNlbGVjdCBvcHRpb25zXG4gICAgKlxuICAgICogQHJldHVybiB1bmRlZmluZWRcbiAgICAqL1xuICAgIHRvZ2dsZU9wZW4oYnV0dG9uLCBvcHRpb25MaXN0KSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3Nlcy5vcGVuZWQpO1xuICAgICAgICBvcHRpb25MaXN0LmNsYXNzTGlzdC50b2dnbGUodGhpcy5jbGFzc2VzLm9wZW5lZCk7XG5cbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICF0aGlzLmlzT3BlbmVkKTtcblxuICAgICAgICB0aGlzLmlzT3BlbmVkID0gIXRoaXMuaXNPcGVuZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBGdW5jdGlvbiB0byBjaGFuZ2Ugc2VsZWN0IHZhbHVlXG4gICAgKlxuICAgICogQGZ1bmN0aW9uIGNoYW5nZVNlbGVjdFZhbHVlXG4gICAgKlxuICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYnV0dG9uIC0gY3VzdG9tIHNlbGVjdCBoZWFkaW5nXG4gICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBvcHRpb25MaXN0IC0gdWwgd2hpY2ggY29udGFpbnMgY3VzdG9tIHNlbGVjdCBvcHRpb25zXG4gICAgKiBAcGFyYW0ge0ludGVnZXJ9IGtleSAtIG9wdGlvbiBpbmRleFxuICAgICpcbiAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgKi9cbiAgICBjaGFuZ2VTZWxlY3RWYWx1ZShidXR0b24sIG9wdGlvbkxpc3QsIGtleSkge1xuICAgICAgICBjb25zdCBzZWxlY3QgPSB0aGlzLnNlbGVjdDtcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gY2xvc2VzdChvcHRpb25MaXN0LCB0aGlzLnNlbGVjdG9ycy5idXR0b25MaXN0Q29udGFpbmVyKS5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLnNlbGVjdGVkKTtcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlLnByZXZpb3VzVmFsdWUgPSBzZWxlY3QudmFsdWU7XG5cbiAgICAgICAgc2VsZWN0LnZhbHVlID0gc2VsZWN0Lm9wdGlvbnNba2V5XS52YWx1ZTtcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTD0gc2VsZWN0Lm9wdGlvbnNba2V5XS50ZXh0O1xuICAgICAgICB0aGlzLnRvZ2dsZU9wZW4oYnV0dG9uLCBvcHRpb25MaXN0KTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLnNlbGVjdGVkKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25MaXN0LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3RvcnMuYnV0dG9uTGlzdClba2V5XS5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCk7XG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZS5uZXdWYWx1ZSA9IHNlbGVjdC5vcHRpb25zW2tleV0udmFsdWU7XG4gICAgICAgIHNlbGVjdC5kaXNwYXRjaEV2ZW50KHRoaXMub25DaGFuZ2UpO1xuXG4gICAgICAgIGJ1dHRvbi5mb2N1cygpO1xuICAgIH1cbn1cbiIsImltcG9ydCBhamF4UmVxdWVzdCBmcm9tIFwiLi91dGlscy9hamF4UmVxdWVzdFwiO1xuXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgICAkZWxlbWVudDogdW5kZWZpbmVkLFxuICAgIHNlbGVjdG9yczoge1xuICAgICAgICBib2R5OiBcImJvZHlcIlxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN2Z0xvYWRlciB7XG4gICAgY29uc3RydWN0b3IocHJvcGVydGllcyA9IHt9KSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSBwcm9wZXJ0aWVzLiRlbGVtZW50O1xuICAgICAgICB0aGlzLnNlbGVjdG9ycyA9IGRlZmF1bHRzLnNlbGVjdG9ycztcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICB0aGlzLmJpbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN2Z0xvYWRlciBlcnJvci5cIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGxvYWRBbmRBcHBlbmQodXJsLCBlbGVtZW50KSB7XG4gICAgICAgIGxldCBuYW1lVXJsID0gdXJsO1xuICAgICAgICBhamF4UmVxdWVzdCh1cmwpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBkYXRhO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gbmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyhkYXRhLmRvY3VtZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1zcHJpdGVzaGVldFwiKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQodXJsKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29uc29sZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCBzdmcgcmVxdWVzdFwiLCBlcnJvcilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRvZG8gcGFyYSBpbXBvcnRhciBsb3MgU1ZHIGVuIDA4LWFuZ3VsYXIgeSB0cmFiYWphciBjb24gZWxsb3NcbiAgICAgKiBAcGFyYW0gICB7bm9kb30gICAgICBlbGVtZW50ICAgICBFbGVtZW50byBkZWwgRE9NIGRvbmRlIHF1ZXJlbW9zIGNhcmdhciBlbCBTVkdcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICB2ZXJzaW9uICAgICBOb21icmUgZGVsIGZpY2hlcm8gZGVsIHNwcml0ZXNoZWV0IHF1ZSBzZSBkZXNlYSBjYXJnYXIuXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgcGF0aFNWRyAgICAgJy4vYXNzZXRzL3N2Zy8nIFViaWNhY2nDs24gZGVsIHN2ZyBkZW50cm8gZGVsIHByb3llY3RvIDA4LWFuZ3VsYXIuXG4gICAgICovXG4gICAgbG9hZEFuZEFwcGVuZFN2Z1RvQW5ndWxhcihlbGVtZW50LCB2ZXJzaW9uID0gXCJzcHJpdGUubXZhMTAuc3ZnXCIsIHBhdGhTVkcpIHtcbiAgICAgICAgY29uc3QgYWJvc2x1dGVQYXRoID0gcGF0aFNWR1xuICAgICAgICAgICAgPyBgJHtwYXRoU1ZHfSR7dmVyc2lvbn1gXG4gICAgICAgICAgICA6IGAuL2Fzc2V0cy9zdmcvJHt2ZXJzaW9ufWA7XG4gICAgICAgIC8vIGNvbnN0cnVpbW9zIGxhIHJ1dGEgZW4gYmFzZSBhIGxhIHZlcnNpw7NuXG4gICAgICAgIGFqYXhSZXF1ZXN0KGFib3NsdXRlUGF0aClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IG5ldyBYTUxTZXJpYWxpemVyKCkuc2VyaWFsaXplVG9TdHJpbmcoXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmRvY3VtZW50RWxlbWVudFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbGVtZW50Lm91dGVySFRNTCA9IGRpdi5vdXRlckhUTUw7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAtLfCfpKbwn4+74oCN4pmC77iPLS0gU3RhcnQgZmFpbGVkIHN2ZyByZXF1ZXN0IC0tIPCfpKbwn4+74oCN4pmC77iPLS1gKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAtLfCfpKbwn4+74oCN4pmC77iPLS0gRW5kIEZhaWxlZCBzdmcgcmVxdWVzdCAtLSDwn6Sm8J+Pu+KAjeKZgu+4jy0tYCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kKCkge1xuICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNwcml0ZXNoZWV0XVwiKV0uZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmxzdmcgPSBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNwcml0ZXNoZWV0XCIpO1xuICAgICAgICAgICAgdGhpcy5sb2FkQW5kQXBwZW5kKHVybHN2ZywgZWwpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyA8ZGl2IGRhdGEtc3ByaXRlc2hlZXQ9XCJzcHJpdGUuc3ZnXCI+PC9kaXY+XG4vLyA8ZGl2IGRhdGEtc3ByaXRlc2hlZXQ9XCJzcHJpdGUudjMuc3ZnXCI+PC9kaXY+XG4iLCJpbXBvcnQgUHJvbWlzZSBmcm9tICcuLi9saWIvcG9seWZpbGwubWluLmpzJ1xuaW1wb3J0IFJlbW90ZVRleHRCaW5kZXIgZnJvbSAnLi91dGlscy9yZW1vdGVUZXh0QmluZGVyJztcbmNvbnN0IGluc3RhbmNlTWFwID0gbmV3IE1hcCgpO1xuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQpIHtcbiAgICBsZXQgYXJyYXlDb2xsZWN0aW9uID0gW107XG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgZG9jdW1lbnQuYm9keTtcblxuICAgIGFycmF5Q29sbGVjdGlvbiA9IFtdLnNsaWNlLmNhbGwoY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12ZmVzLWpzXScpKTtcblxuICAgIGlmKGNvbnRleHQucGFyZW50RWxlbWVudC5kYXRhc2V0ICYmIGNvbnRleHQucGFyZW50RWxlbWVudC5kYXRhc2V0LnZmZXNKcykge1xuICAgICAgICBhcnJheUNvbGxlY3Rpb24uc2xpY2UoMCwgMCwgY29udGV4dC5wYXJlbnRFbGVtZW50KTtcbiAgICB9XG5cbiAgICBhcnJheUNvbGxlY3Rpb24uZm9yRWFjaCgobW9kLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgbW9kdWxlcztcbiAgICAgICAgbGV0IGRhdGEgPSBtb2QuZGF0YXNldDtcblxuICAgICAgICBpZihkYXRhLmluaXRpYWxpemVkKSByZXR1cm5cblxuXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEudmZlc0pzKSB7IG1vZHVsZXMgPSBkYXRhLnZmZXNKcy5zcGxpdCgnLCcpIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBtb2R1bGVzKSB7XG4gICAgICAgICAgICBjb25zdCBtb2R1bGUgPSBtb2R1bGVzW2tleV07XG5cbiAgICAgICAgICAgIGlmICh2ZmVzW21vZHVsZV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvcGVydGllcyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChwcm9wZXJ0eSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXNbcHJvcGVydHldID0gZGF0YVtwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBkZWxldGUgcHJvcGVydGllcy52ZmVzSnM7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy4kZWxlbWVudCA9IG1vZDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHZmZXNbbW9kdWxlXShwcm9wZXJ0aWVzKTtcblxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMubW9kdWxlSW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZU1hcC5zZXQocHJvcGVydGllcy4kZWxlbWVudCxpbnN0YW5jZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UuaW5pdCkge1xuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5e1xuICAgICAgICAgUmVtb3RlVGV4dEJpbmRlci5pbml0KCk7XG4gICAgfVxuICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZW1vdGVUZXh0QmluZGVyIGVycm9yLlwiLCBlcnJvcik7XG4gICAgfVxuXG4gICAgdHJ5e1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3ZmZXM6ZnJhbWV3b3JrUmVhZHknKSlcbiAgICB9XG4gICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhcImZyYW1ld29ya1JlYWR5LlwiLCBlcnJvcik7XG4gICAgfVxufVxuLyoqXG4gKiBHZXRzIHRoZSBjbGFzcyBpbnN0YW5jZSBhc29jaWF0ZWQgYnkgdGhlIGRhdGEtdmZlcyBhdHRyaWJ1dGUgdG8gdGhlIGdpdmVuIERPTSBFbGVtZW50XG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBUaGUgRE9NIEVsZW1lbnQgcmVsYXRlZCB0byB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIGdldEluc3RhbmNlRm9yRWxlbWVudCgkZWxlbWVudCl7XG4gICAgcmV0dXJuIGluc3RhbmNlTWFwLmdldCgkZWxlbWVudCk7XG59XG5cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XG4gICAgZXZlbnQuaW5pdEV2ZW50KCdyZXNpemUnLCB0cnVlLCBmYWxzZSk7XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGluaXQsXG4gICAgZ2V0SW5zdGFuY2VGb3JFbGVtZW50XG59O1xuIiwiY29uc3QgZW52ID0ge1xuICAgIG5zUHJlZml4OiBcInZmZXMtXCJcbn07XG5leHBvcnQgZGVmYXVsdCBlbnY7XG4iLCJyZXF1aXJlKCcuL3ZmZXMubW9kdWxlcycpO1xud2luZG93LnZmZXMuX3V0aWxzLmluaXQoKTtcblxuY29uc29sZS5sb2coXCJXUzpSZWJvb3QgV0NTIG1vZHVsZXMgbGliIGxvYWRlZFwiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFqYXhSZXF1ZXN0KHVybCwgdHlwZSA9IFwiR0VUXCIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0ICYmIHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnJlYWR5U3RhdGUgPT09IDQgJiYgdGhpcy5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeGh0dHAub3Blbih0eXBlLCB1cmwsIHRydWUpO1xuICAgICAgICB4aHR0cC5zZW5kKCk7XG4gICAgfSk7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvc2VzdChlbCwgcykge1xuICAgIGxldCBtYXRjaGVzID0gKGVsLmRvY3VtZW50IHx8IGVsLm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwocyk7XG4gICAgbGV0IGk7XG5cbiAgICBkbyB7XG4gICAgICAgIGkgPSBtYXRjaGVzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwICYmIG1hdGNoZXMuaXRlbShpKSAhPT0gZWwpIHt9O1xuXG4gICAgfSB3aGlsZSAoKGkgPCAwKSAmJiAoZWwgPSBlbC5wYXJlbnRFbGVtZW50KSk7XG5cbiAgICByZXR1cm4gZWw7XG59XG4iLCJpbXBvcnQgZW52IGZyb20gJy4uL2NvbmZpZy9lbnYnO1xuaW1wb3J0ICd3aGF0d2ctZmV0Y2gnO1xuXG5jbGFzcyBSZW1vdGVUZXh0QmluZGVyIHtcblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuZGF0YVN0b3JlID0ge307XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgIH1cblxuXG4gICAgYmluZCgpIHtcbiAgICAgICAgbGV0IGRhdGFMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwicmVib290OmV4dGVybmFsZGF0YVwiXScpO1xuICAgICAgICBsZXQgcmVtb3RlcyA9IFtdO1xuICAgICAgICBbLi4uZGF0YUxpbmtzXS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGxldCB1cmwgPSBlbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICAgIGxldCBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgIGxldCByZW1vdGUgPSB3aW5kb3cuZmV0Y2godXJsKS50aGVuKHggPT4geC5qc29uKCkpLnRoZW4oanNvbiA9PiB0aGlzLmRhdGFTdG9yZVtpZF0gPSBqc29uKTtcbiAgICAgICAgICAgIHJlbW90ZXMucHVzaChyZW1vdGUpO1xuICAgICAgICB9KVxuICAgICAgICBQcm9taXNlLmFsbChyZW1vdGVzKS50aGVuKHggPT4gdGhpcy5iaW5kUHJvcHMoKSk7XG4gICAgfVxuICAgIGJpbmRQcm9wcygpe1xuICAgICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12ZmVzLXJlbW90ZS10ZXh0XScpO1xuICAgICAgICBbLi4uZWxlbWVudHNdLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgbGV0IHByb3AgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmZlcy1yZW1vdGUtdGV4dCcpO1xuICAgICAgICAgICAgbGV0IGRzID0gdGhpcy5kYXRhU3RvcmU7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IGV2YWwoYGRzLiR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgICBlbC5pbm5lckhUTUwgPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQ2FuJ3QgcGFyc2UgdGhlIHBhdGggJHtwcm9wfSByZW1vdGUgdGV4dC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmxldCBpbnN0YW5jZSA9IG5ldyBSZW1vdGVUZXh0QmluZGVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vX3V0aWxzJztcbmltcG9ydCBTdmdMb2FkZXIgZnJvbSAnLi9fc3ZnLWxvYWRlcic7XG5pbXBvcnQgTWljcm9zaXRlIGZyb20gJy4vX21pY3Jvc2l0ZSc7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuL19vdmVybGF5JztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL19kcm9wZG93bic7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vX3NlbGVjdCc7XG5cblxuXG5sZXQgZXhpc3RpbmcgPSB3aW5kb3cudmZlcyB8fCB7fTtcblxubGV0IHZmZXMgPSB7XG4gICAgX3V0aWxzOiB1dGlscyxcbiAgICBfc3ZnTG9hZGVyOiBTdmdMb2FkZXIsXG4gICAgX21pY3Jvc2l0ZTogTWljcm9zaXRlLFxuICAgIF9vdmVybGF5OiBPdmVybGF5LFxuICAgIF9kcm9wZG93bjogRHJvcGRvd24sXG4gICAgX3NlbGVjdDogU2VsZWN0XG4gIFxufTtcbmNvbnN0IHJlc3VsdCA9IHZmZXMgPSB3aW5kb3cudmZlcyA9IE9iamVjdC5hc3NpZ24oZXhpc3RpbmcsIHZmZXMpO1xuZXhwb3J0IGRlZmF1bHQgcmVzdWx0O1xuIiwiIWZ1bmN0aW9uKGUsbil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bigpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUobik6bigpfSgwLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlKXt2YXIgbj10aGlzLmNvbnN0cnVjdG9yO3JldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odCl7cmV0dXJuIG4ucmVzb2x2ZShlKCkpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gdH0pfSxmdW5jdGlvbih0KXtyZXR1cm4gbi5yZXNvbHZlKGUoKSkudGhlbihmdW5jdGlvbigpe3JldHVybiBuLnJlamVjdCh0KX0pfSl9ZnVuY3Rpb24gbigpe31mdW5jdGlvbiB0KGUpe2lmKCEodGhpcyBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXdcIik7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwibm90IGEgZnVuY3Rpb25cIik7dGhpcy5fc3RhdGU9MCx0aGlzLl9oYW5kbGVkPSExLHRoaXMuX3ZhbHVlPXVuZGVmaW5lZCx0aGlzLl9kZWZlcnJlZHM9W10sdShlLHRoaXMpfWZ1bmN0aW9uIG8oZSxuKXtmb3IoOzM9PT1lLl9zdGF0ZTspZT1lLl92YWx1ZTswIT09ZS5fc3RhdGU/KGUuX2hhbmRsZWQ9ITAsdC5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKXt2YXIgdD0xPT09ZS5fc3RhdGU/bi5vbkZ1bGZpbGxlZDpuLm9uUmVqZWN0ZWQ7aWYobnVsbCE9PXQpe3ZhciBvO3RyeXtvPXQoZS5fdmFsdWUpfWNhdGNoKGYpe3JldHVybiB2b2lkIGkobi5wcm9taXNlLGYpfXIobi5wcm9taXNlLG8pfWVsc2UoMT09PWUuX3N0YXRlP3I6aSkobi5wcm9taXNlLGUuX3ZhbHVlKX0pKTplLl9kZWZlcnJlZHMucHVzaChuKX1mdW5jdGlvbiByKGUsbil7dHJ5e2lmKG49PT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJBIHByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLlwiKTtpZihuJiYoXCJvYmplY3RcIj09dHlwZW9mIG58fFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pKXt2YXIgbz1uLnRoZW47aWYobiBpbnN0YW5jZW9mIHQpcmV0dXJuIGUuX3N0YXRlPTMsZS5fdmFsdWU9bix2b2lkIGYoZSk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbylyZXR1cm4gdm9pZCB1KGZ1bmN0aW9uKGUsbil7cmV0dXJuIGZ1bmN0aW9uKCl7ZS5hcHBseShuLGFyZ3VtZW50cyl9fShvLG4pLGUpfWUuX3N0YXRlPTEsZS5fdmFsdWU9bixmKGUpfWNhdGNoKHIpe2koZSxyKX19ZnVuY3Rpb24gaShlLG4pe2UuX3N0YXRlPTIsZS5fdmFsdWU9bixmKGUpfWZ1bmN0aW9uIGYoZSl7Mj09PWUuX3N0YXRlJiYwPT09ZS5fZGVmZXJyZWRzLmxlbmd0aCYmdC5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKXtlLl9oYW5kbGVkfHx0Ll91bmhhbmRsZWRSZWplY3Rpb25GbihlLl92YWx1ZSl9KTtmb3IodmFyIG49MCxyPWUuX2RlZmVycmVkcy5sZW5ndGg7cj5uO24rKylvKGUsZS5fZGVmZXJyZWRzW25dKTtlLl9kZWZlcnJlZHM9bnVsbH1mdW5jdGlvbiB1KGUsbil7dmFyIHQ9ITE7dHJ5e2UoZnVuY3Rpb24oZSl7dHx8KHQ9ITAscihuLGUpKX0sZnVuY3Rpb24oZSl7dHx8KHQ9ITAsaShuLGUpKX0pfWNhdGNoKG8pe2lmKHQpcmV0dXJuO3Q9ITAsaShuLG8pfX12YXIgYz1zZXRUaW1lb3V0O3QucHJvdG90eXBlW1wiY2F0Y2hcIl09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMudGhlbihudWxsLGUpfSx0LnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGUsdCl7dmFyIHI9bmV3IHRoaXMuY29uc3RydWN0b3Iobik7cmV0dXJuIG8odGhpcyxuZXcgZnVuY3Rpb24oZSxuLHQpe3RoaXMub25GdWxmaWxsZWQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lOm51bGwsdGhpcy5vblJlamVjdGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIG4/bjpudWxsLHRoaXMucHJvbWlzZT10fShlLHQscikpLHJ9LHQucHJvdG90eXBlW1wiZmluYWxseVwiXT1lLHQuYWxsPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgdChmdW5jdGlvbihuLHQpe2Z1bmN0aW9uIG8oZSxmKXt0cnl7aWYoZiYmKFwib2JqZWN0XCI9PXR5cGVvZiBmfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBmKSl7dmFyIHU9Zi50aGVuO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUpcmV0dXJuIHZvaWQgdS5jYWxsKGYsZnVuY3Rpb24obil7byhlLG4pfSx0KX1yW2VdPWYsMD09LS1pJiZuKHIpfWNhdGNoKGMpe3QoYyl9fWlmKCFlfHxcInVuZGVmaW5lZFwiPT10eXBlb2YgZS5sZW5ndGgpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2UuYWxsIGFjY2VwdHMgYW4gYXJyYXlcIik7dmFyIHI9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZSk7aWYoMD09PXIubGVuZ3RoKXJldHVybiBuKFtdKTtmb3IodmFyIGk9ci5sZW5ndGgsZj0wO3IubGVuZ3RoPmY7ZisrKW8oZixyW2ZdKX0pfSx0LnJlc29sdmU9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlLmNvbnN0cnVjdG9yPT09dD9lOm5ldyB0KGZ1bmN0aW9uKG4pe24oZSl9KX0sdC5yZWplY3Q9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyB0KGZ1bmN0aW9uKG4sdCl7dChlKX0pfSx0LnJhY2U9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyB0KGZ1bmN0aW9uKG4sdCl7Zm9yKHZhciBvPTAscj1lLmxlbmd0aDtyPm87bysrKWVbb10udGhlbihuLHQpfSl9LHQuX2ltbWVkaWF0ZUZuPVwiZnVuY3Rpb25cIj09dHlwZW9mIHNldEltbWVkaWF0ZSYmZnVuY3Rpb24oZSl7c2V0SW1tZWRpYXRlKGUpfXx8ZnVuY3Rpb24oZSl7YyhlLDApfSx0Ll91bmhhbmRsZWRSZWplY3Rpb25Gbj1mdW5jdGlvbihlKXt2b2lkIDAhPT1jb25zb2xlJiZjb25zb2xlJiZjb25zb2xlLndhcm4oXCJQb3NzaWJsZSBVbmhhbmRsZWQgUHJvbWlzZSBSZWplY3Rpb246XCIsZSl9O3ZhciBsPWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYpcmV0dXJuIHNlbGY7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdylyZXR1cm4gd2luZG93O2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwpcmV0dXJuIGdsb2JhbDt0aHJvdyBFcnJvcihcInVuYWJsZSB0byBsb2NhdGUgZ2xvYmFsIG9iamVjdFwiKX0oKTtcIlByb21pc2VcImluIGw/bC5Qcm9taXNlLnByb3RvdHlwZVtcImZpbmFsbHlcIl18fChsLlByb21pc2UucHJvdG90eXBlW1wiZmluYWxseVwiXT1lKTpsLlByb21pc2U9dH0pOyJdLCJzb3VyY2VSb290IjoiIn0=