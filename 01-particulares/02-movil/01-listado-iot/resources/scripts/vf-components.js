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
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/assets/scripts/webComponents/vf-components.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lit-element/lib/css-tag.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lib/css-tag.js ***!
  \*************************************************/
/*! exports provided: supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return supportsAdoptingStyleSheets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return CSSResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return unsafeCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const supportsAdoptingStyleSheets = ('adoptedStyleSheets' in Document.prototype) &&
    ('replace' in CSSStyleSheet.prototype);
const constructionToken = Symbol();
class CSSResult {
    constructor(cssText, safeToken) {
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
    }
    // Note, this is a getter so that it's lazy. In practice, this means
    // stylesheets are not created until the first element instance is made.
    get styleSheet() {
        if (this._styleSheet === undefined) {
            // Note, if `adoptedStyleSheets` is supported then we assume CSSStyleSheet
            // is constructable.
            if (supportsAdoptingStyleSheets) {
                this._styleSheet = new CSSStyleSheet();
                this._styleSheet.replaceSync(this.cssText);
            }
            else {
                this._styleSheet = null;
            }
        }
        return this._styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
/**
 * Wrap a value for interpolation in a css tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = (value) => {
    return new CSSResult(String(value), constructionToken);
};
const textFromCSSResult = (value) => {
    if (value instanceof CSSResult) {
        return value.cssText;
    }
    else if (typeof value === 'number') {
        return value;
    }
    else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
    }
};
/**
 * Template tag which which can be used with LitElement's `style` property to
 * set element styles. For security reasons, only literal string values may be
 * used. To incorporate non-literal values `unsafeCSS` may be used inside a
 * template string part.
 */
const css = (strings, ...values) => {
    const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, constructionToken);
};
//# sourceMappingURL=css-tag.js.map

/***/ }),

/***/ "./node_modules/lit-element/lib/decorators.js":
/*!****************************************************!*\
  !*** ./node_modules/lit-element/lib/decorators.js ***!
  \****************************************************/
/*! exports provided: customElement, property, query, queryAll, eventOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return customElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "property", function() { return property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return queryAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return eventOptions; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const legacyCustomElement = (tagName, clazz) => {
    window.customElements.define(tagName, clazz);
    // Cast as any because TS doesn't recognize the return type as being a
    // subtype of the decorated class when clazz is typed as
    // `Constructor<HTMLElement>` for some reason.
    // `Constructor<HTMLElement>` is helpful to make sure the decorator is
    // applied to elements however.
    // tslint:disable-next-line:no-any
    return clazz;
};
const standardCustomElement = (tagName, descriptor) => {
    const { kind, elements } = descriptor;
    return {
        kind,
        elements,
        // This callback is called once the class is otherwise fully defined
        finisher(clazz) {
            window.customElements.define(tagName, clazz);
        }
    };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * @param tagName the name of the custom element to define
 */
const customElement = (tagName) => (classOrDescriptor) => (typeof classOrDescriptor === 'function') ?
    legacyCustomElement(tagName, classOrDescriptor) :
    standardCustomElement(tagName, classOrDescriptor);
const standardProperty = (options, element) => {
    // When decorating an accessor, pass it through and add property metadata.
    // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
    // stomp over the user's accessor.
    if (element.kind === 'method' && element.descriptor &&
        !('value' in element.descriptor)) {
        return Object.assign({}, element, { finisher(clazz) {
                clazz.createProperty(element.key, options);
            } });
    }
    else {
        // createProperty() takes care of defining the property, but we still
        // must return some kind of descriptor, so return a descriptor for an
        // unused prototype field. The finisher calls createProperty().
        return {
            kind: 'field',
            key: Symbol(),
            placement: 'own',
            descriptor: {},
            // When @babel/plugin-proposal-decorators implements initializers,
            // do this instead of the initializer below. See:
            // https://github.com/babel/babel/issues/9260 extras: [
            //   {
            //     kind: 'initializer',
            //     placement: 'own',
            //     initializer: descriptor.initializer,
            //   }
            // ],
            initializer() {
                if (typeof element.initializer === 'function') {
                    this[element.key] = element.initializer.call(this);
                }
            },
            finisher(clazz) {
                clazz.createProperty(element.key, options);
            }
        };
    }
};
const legacyProperty = (options, proto, name) => {
    proto.constructor
        .createProperty(name, options);
};
/**
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A `PropertyDeclaration` may optionally be
 * supplied to configure property features.
 *
 * @ExportDecoratedItems
 */
function property(options) {
    // tslint:disable-next-line:no-any decorator
    return (protoOrDescriptor, name) => (name !== undefined) ?
        legacyProperty(options, protoOrDescriptor, name) :
        standardProperty(options, protoOrDescriptor);
}
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @ExportDecoratedItems
 */
function query(selector) {
    return (protoOrDescriptor, 
    // tslint:disable-next-line:no-any decorator
    name) => {
        const descriptor = {
            get() {
                return this.renderRoot.querySelector(selector);
            },
            enumerable: true,
            configurable: true,
        };
        return (name !== undefined) ?
            legacyQuery(descriptor, protoOrDescriptor, name) :
            standardQuery(descriptor, protoOrDescriptor);
    };
}
/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @ExportDecoratedItems
 */
function queryAll(selector) {
    return (protoOrDescriptor, 
    // tslint:disable-next-line:no-any decorator
    name) => {
        const descriptor = {
            get() {
                return this.renderRoot.querySelectorAll(selector);
            },
            enumerable: true,
            configurable: true,
        };
        return (name !== undefined) ?
            legacyQuery(descriptor, protoOrDescriptor, name) :
            standardQuery(descriptor, protoOrDescriptor);
    };
}
const legacyQuery = (descriptor, proto, name) => {
    Object.defineProperty(proto, name, descriptor);
};
const standardQuery = (descriptor, element) => ({
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor,
});
const standardEventOptions = (options, element) => {
    return Object.assign({}, element, { finisher(clazz) {
            Object.assign(clazz.prototype[element.key], options);
        } });
};
const legacyEventOptions = 
// tslint:disable-next-line:no-any legacy decorator
(options, proto, name) => {
    Object.assign(proto[name], options);
};
/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifis event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * @example
 *
 *     class MyElement {
 *
 *       clicked = false;
 *
 *       render() {
 *         return html`<div @click=${this._onClick}`><button></button></div>`;
 *       }
 *
 *       @eventOptions({capture: true})
 *       _onClick(e) {
 *         this.clicked = true;
 *       }
 *     }
 */
const eventOptions = (options) => 
// Return value typed as any to prevent TypeScript from complaining that
// standard decorator function signature does not match TypeScript decorator
// signature
// TODO(kschaaf): unclear why it was only failing on this decorator and not
// the others
((protoOrDescriptor, name) => (name !== undefined) ?
    legacyEventOptions(options, protoOrDescriptor, name) :
    standardEventOptions(options, protoOrDescriptor));
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "./node_modules/lit-element/lib/updating-element.js":
/*!**********************************************************!*\
  !*** ./node_modules/lit-element/lib/updating-element.js ***!
  \**********************************************************/
/*! exports provided: defaultConverter, notEqual, UpdatingElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return defaultConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return notEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return UpdatingElement; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var _a;
/**
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
window.JSCompiler_renameProperty =
    (prop, _obj) => prop;
const defaultConverter = {
    toAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value ? '' : null;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                return value == null ? value : JSON.stringify(value);
        }
        return value;
    },
    fromAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value !== null;
            case Number:
                return value === null ? null : Number(value);
            case Object:
            case Array:
                return JSON.parse(value);
        }
        return value;
    }
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
const notEqual = (value, old) => {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual
};
const microtaskPromise = Promise.resolve(true);
const STATE_HAS_UPDATED = 1;
const STATE_UPDATE_REQUESTED = 1 << 2;
const STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
const STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
const STATE_HAS_CONNECTED = 1 << 5;
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */
const finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 */
class UpdatingElement extends HTMLElement {
    constructor() {
        super();
        this._updateState = 0;
        this._instanceProperties = undefined;
        this._updatePromise = microtaskPromise;
        this._hasConnectedResolver = undefined;
        /**
         * Map with keys for any properties that have changed since the last
         * update cycle with previous values.
         */
        this._changedProperties = new Map();
        /**
         * Map with keys of properties that should be reflected when updated.
         */
        this._reflectingProperties = undefined;
        this.initialize();
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */
    static get observedAttributes() {
        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        const attributes = [];
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this._classProperties.forEach((v, p) => {
            const attr = this._attributeNameForProperty(p, v);
            if (attr !== undefined) {
                this._attributeToPropertyMap.set(attr, p);
                attributes.push(attr);
            }
        });
        return attributes;
    }
    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */
    /** @nocollapse */
    static _ensureClassProperties() {
        // ensure private storage for property declarations.
        if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
            this._classProperties = new Map();
            // NOTE: Workaround IE11 not supporting Map constructor argument.
            const superProperties = Object.getPrototypeOf(this)._classProperties;
            if (superProperties !== undefined) {
                superProperties.forEach((v, k) => this._classProperties.set(k, v));
            }
        }
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     * @nocollapse
     */
    static createProperty(name, options = defaultPropertyDeclaration) {
        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure storage exists for property
        // metadata.
        this._ensureClassProperties();
        this._classProperties.set(name, options);
        // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it
        if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
            return;
        }
        const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
        Object.defineProperty(this.prototype, name, {
            // tslint:disable-next-line:no-any no symbol in index
            get() {
                return this[key];
            },
            set(value) {
                const oldValue = this[name];
                this[key] = value;
                this._requestUpdate(name, oldValue);
            },
            configurable: true,
            enumerable: true
        });
    }
    /**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */
    static finalize() {
        // finalize any superclasses
        const superCtor = Object.getPrototypeOf(this);
        if (!superCtor.hasOwnProperty(finalized)) {
            superCtor.finalize();
        }
        this[finalized] = true;
        this._ensureClassProperties();
        // initialize Map populated in observedAttributes
        this._attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            // support symbols in properties (IE11 does not support this)
            const propKeys = [
                ...Object.getOwnPropertyNames(props),
                ...(typeof Object.getOwnPropertySymbols === 'function') ?
                    Object.getOwnPropertySymbols(props) :
                    []
            ];
            // This for/of is ok because propKeys is an array
            for (const p of propKeys) {
                // note, use of `any` is due to TypeSript lack of support for symbol in
                // index types
                // tslint:disable-next-line:no-any no symbol in index
                this.createProperty(p, props[p]);
            }
        }
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */
    static _attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false ?
            undefined :
            (typeof attribute === 'string' ?
                attribute :
                (typeof name === 'string' ? name.toLowerCase() : undefined));
    }
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */
    static _valueHasChanged(value, old, hasChanged = notEqual) {
        return hasChanged(value, old);
    }
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */
    static _propertyValueFromAttribute(value, options) {
        const type = options.type;
        const converter = options.converter || defaultConverter;
        const fromAttribute = (typeof converter === 'function' ? converter : converter.fromAttribute);
        return fromAttribute ? fromAttribute(value, type) : value;
    }
    /**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */
    static _propertyValueToAttribute(value, options) {
        if (options.reflect === undefined) {
            return;
        }
        const type = options.type;
        const converter = options.converter;
        const toAttribute = converter && converter.toAttribute ||
            defaultConverter.toAttribute;
        return toAttribute(value, type);
    }
    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */
    initialize() {
        this._saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this._requestUpdate();
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */
    _saveInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor
            ._classProperties.forEach((_v, p) => {
            if (this.hasOwnProperty(p)) {
                const value = this[p];
                delete this[p];
                if (!this._instanceProperties) {
                    this._instanceProperties = new Map();
                }
                this._instanceProperties.set(p, value);
            }
        });
    }
    /**
     * Applies previously saved instance properties.
     */
    _applyInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        // tslint:disable-next-line:no-any
        this._instanceProperties.forEach((v, p) => this[p] = v);
        this._instanceProperties = undefined;
    }
    connectedCallback() {
        this._updateState = this._updateState | STATE_HAS_CONNECTED;
        // Ensure first connection completes an update. Updates cannot complete
        // before connection and if one is pending connection the
        // `_hasConnectionResolver` will exist. If so, resolve it to complete the
        // update, otherwise requestUpdate.
        if (this._hasConnectedResolver) {
            this._hasConnectedResolver();
            this._hasConnectedResolver = undefined;
        }
    }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */
    disconnectedCallback() {
    }
    /**
     * Synchronizes property values when attributes change.
     */
    attributeChangedCallback(name, old, value) {
        if (old !== value) {
            this._attributeToProperty(name, value);
        }
    }
    _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
        const ctor = this.constructor;
        const attr = ctor._attributeNameForProperty(name, options);
        if (attr !== undefined) {
            const attrValue = ctor._propertyValueToAttribute(value, options);
            // an undefined value does not change the attribute.
            if (attrValue === undefined) {
                return;
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
            if (attrValue == null) {
                this.removeAttribute(attr);
            }
            else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
        }
    }
    _attributeToProperty(name, value) {
        // Use tracking info to avoid deserializing attribute value if it was
        // just set from a property setter.
        if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
            return;
        }
        const ctor = this.constructor;
        const propName = ctor._attributeToPropertyMap.get(name);
        if (propName !== undefined) {
            const options = ctor._classProperties.get(propName) || defaultPropertyDeclaration;
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
            this[propName] =
                // tslint:disable-next-line:no-any
                ctor._propertyValueFromAttribute(value, options);
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
        }
    }
    /**
     * This private version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */
    _requestUpdate(name, oldValue) {
        let shouldRequestUpdate = true;
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            const ctor = this.constructor;
            const options = ctor._classProperties.get(name) || defaultPropertyDeclaration;
            if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
                if (!this._changedProperties.has(name)) {
                    this._changedProperties.set(name, oldValue);
                }
                // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.
                if (options.reflect === true &&
                    !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                    if (this._reflectingProperties === undefined) {
                        this._reflectingProperties = new Map();
                    }
                    this._reflectingProperties.set(name, options);
                }
            }
            else {
                // Abort the request if the property should not be considered changed.
                shouldRequestUpdate = false;
            }
        }
        if (!this._hasRequestedUpdate && shouldRequestUpdate) {
            this._enqueueUpdate();
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */
    requestUpdate(name, oldValue) {
        this._requestUpdate(name, oldValue);
        return this.updateComplete;
    }
    /**
     * Sets up the element to asynchronously update.
     */
    async _enqueueUpdate() {
        // Mark state updating...
        this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
        let resolve;
        let reject;
        const previousUpdatePromise = this._updatePromise;
        this._updatePromise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await previousUpdatePromise;
        }
        catch (e) {
            // Ignore any previous errors. We only care that the previous cycle is
            // done. Any error should have been handled in the previous update.
        }
        // Make sure the element has connected before updating.
        if (!this._hasConnected) {
            await new Promise((res) => this._hasConnectedResolver = res);
        }
        try {
            const result = this.performUpdate();
            // If `performUpdate` returns a Promise, we await it. This is done to
            // enable coordinating updates with a scheduler. Note, the result is
            // checked to avoid delaying an additional microtask unless we need to.
            if (result != null) {
                await result;
            }
        }
        catch (e) {
            reject(e);
        }
        resolve(!this._hasRequestedUpdate);
    }
    get _hasConnected() {
        return (this._updateState & STATE_HAS_CONNECTED);
    }
    get _hasRequestedUpdate() {
        return (this._updateState & STATE_UPDATE_REQUESTED);
    }
    get hasUpdated() {
        return (this._updateState & STATE_HAS_UPDATED);
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */
    performUpdate() {
        // Mixin instance properties once, if they exist.
        if (this._instanceProperties) {
            this._applyInstanceProperties();
        }
        let shouldUpdate = false;
        const changedProperties = this._changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.update(changedProperties);
            }
        }
        catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            throw e;
        }
        finally {
            // Ensure element can accept additional updates after an exception.
            this._markUpdated();
        }
        if (shouldUpdate) {
            if (!(this._updateState & STATE_HAS_UPDATED)) {
                this._updateState = this._updateState | STATE_HAS_UPDATED;
                this.firstUpdated(changedProperties);
            }
            this.updated(changedProperties);
        }
    }
    _markUpdated() {
        this._changedProperties = new Map();
        this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `_getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super._getUpdateComplete()`, then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */
    get updateComplete() {
        return this._getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async _getUpdateComplete() {
     *       await super._getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     */
    _getUpdateComplete() {
        return this._updatePromise;
    }
    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    update(_changedProperties) {
        if (this._reflectingProperties !== undefined &&
            this._reflectingProperties.size > 0) {
            // Use forEach so this works even if for/of loops are compiled to for
            // loops expecting arrays
            this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));
            this._reflectingProperties = undefined;
        }
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    updated(_changedProperties) {
    }
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    firstUpdated(_changedProperties) {
    }
}
_a = finalized;
/**
 * Marks class as having finished creating properties.
 */
UpdatingElement[_a] = true;
//# sourceMappingURL=updating-element.js.map

/***/ }),

/***/ "./node_modules/lit-element/lit-element.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lit-element.js ***!
  \*************************************************/
/*! exports provided: html, svg, TemplateResult, SVGTemplateResult, LitElement, defaultConverter, notEqual, UpdatingElement, customElement, property, query, queryAll, eventOptions, supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return LitElement; });
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/lib/shady-render.js */ "./node_modules/lit-html/lib/shady-render.js");
/* harmony import */ var _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/updating-element.js */ "./node_modules/lit-element/lib/updating-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["defaultConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["notEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["UpdatingElement"]; });

/* harmony import */ var _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/decorators.js */ "./node_modules/lit-element/lib/decorators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["customElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["queryAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["eventOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["TemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["SVGTemplateResult"]; });

/* harmony import */ var _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/css-tag.js */ "./node_modules/lit-element/lib/css-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["unsafeCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["css"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */








// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
(window['litElementVersions'] || (window['litElementVersions'] = []))
    .push('2.2.1');
/**
 * Minimal implementation of Array.prototype.flat
 * @param arr the array to flatten
 * @param result the accumlated result
 */
function arrayFlat(styles, result = []) {
    for (let i = 0, length = styles.length; i < length; i++) {
        const value = styles[i];
        if (Array.isArray(value)) {
            arrayFlat(value, result);
        }
        else {
            result.push(value);
        }
    }
    return result;
}
/** Deeply flattens styles array. Uses native flat if available. */
const flattenStyles = (styles) => styles.flat ? styles.flat(Infinity) : arrayFlat(styles);
class LitElement extends _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["UpdatingElement"] {
    /** @nocollapse */
    static finalize() {
        // The Closure JS Compiler does not always preserve the correct "this"
        // when calling static super methods (b/137460243), so explicitly bind.
        super.finalize.call(this);
        // Prepare styling that is stamped at first render time. Styling
        // is built from user provided `styles` or is inherited from the superclass.
        this._styles =
            this.hasOwnProperty(JSCompiler_renameProperty('styles', this)) ?
                this._getUniqueStyles() :
                this._styles || [];
    }
    /** @nocollapse */
    static _getUniqueStyles() {
        // Take care not to call `this.styles` multiple times since this generates
        // new CSSResults each time.
        // TODO(sorvell): Since we do not cache CSSResults by input, any
        // shared styles will generate new stylesheet objects, which is wasteful.
        // This should be addressed when a browser ships constructable
        // stylesheets.
        const userStyles = this.styles;
        const styles = [];
        if (Array.isArray(userStyles)) {
            const flatStyles = flattenStyles(userStyles);
            // As a performance optimization to avoid duplicated styling that can
            // occur especially when composing via subclassing, de-duplicate styles
            // preserving the last item in the list. The last item is kept to
            // try to preserve cascade order with the assumption that it's most
            // important that last added styles override previous styles.
            const styleSet = flatStyles.reduceRight((set, s) => {
                set.add(s);
                // on IE set.add does not return the set.
                return set;
            }, new Set());
            // Array.from does not work on Set in IE
            styleSet.forEach((v) => styles.unshift(v));
        }
        else if (userStyles) {
            styles.push(userStyles);
        }
        return styles;
    }
    /**
     * Performs element initialization. By default this calls `createRenderRoot`
     * to create the element `renderRoot` node and captures any pre-set values for
     * registered properties.
     */
    initialize() {
        super.initialize();
        this.renderRoot =
            this.createRenderRoot();
        // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
        // element's getRootNode(). While this could be done, we're choosing not to
        // support this now since it would require different logic around de-duping.
        if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
            this.adoptStyles();
        }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */
    createRenderRoot() {
        return this.attachShadow({ mode: 'open' });
    }
    /**
     * Applies styling to the element shadowRoot using the `static get styles`
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */
    adoptStyles() {
        const styles = this.constructor._styles;
        if (styles.length === 0) {
            return;
        }
        // There are three separate cases here based on Shadow DOM support.
        // (1) shadowRoot polyfilled: use ShadyCSS
        // (2) shadowRoot.adoptedStyleSheets available: use it.
        // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
        // rendering
        if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
            window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s) => s.cssText), this.localName);
        }
        else if (_lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["supportsAdoptingStyleSheets"]) {
            this.renderRoot.adoptedStyleSheets =
                styles.map((s) => s.styleSheet);
        }
        else {
            // This must be done after rendering so the actual style insertion is done
            // in `update`.
            this._needsShimAdoptedStyleSheets = true;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        // Note, first update/render handles styleElement so we only call this if
        // connected after first update.
        if (this.hasUpdated && window.ShadyCSS !== undefined) {
            window.ShadyCSS.styleElement(this);
        }
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * * @param _changedProperties Map of changed properties with old values
     */
    update(changedProperties) {
        super.update(changedProperties);
        const templateResult = this.render();
        if (templateResult instanceof lit_html__WEBPACK_IMPORTED_MODULE_0__["TemplateResult"]) {
            this.constructor
                .render(templateResult, this.renderRoot, { scopeName: this.localName, eventContext: this });
        }
        // When native Shadow DOM is used but adoptedStyles are not supported,
        // insert styling after rendering to ensure adoptedStyles have highest
        // priority.
        if (this._needsShimAdoptedStyleSheets) {
            this._needsShimAdoptedStyleSheets = false;
            this.constructor._styles.forEach((s) => {
                const style = document.createElement('style');
                style.textContent = s.cssText;
                this.renderRoot.appendChild(style);
            });
        }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method must return
     * a lit-html TemplateResult. Setting properties inside this method will *not*
     * trigger the element to update.
     */
    render() {
    }
}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See updating-element.ts for more information.
 */
LitElement['finalized'] = true;
/**
 * Render method used to render the lit-html TemplateResult to the element's
 * DOM.
 * @param {TemplateResult} Template to render.
 * @param {Element|DocumentFragment} Node into which to render.
 * @param {String} Element name.
 * @nocollapse
 */
LitElement.render = lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_1__["render"];
//# sourceMappingURL=lit-element.js.map

/***/ }),

/***/ "./node_modules/lit-html/directives/if-defined.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/directives/if-defined.js ***!
  \********************************************************/
/*! exports provided: ifDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifDefined", function() { return ifDefined; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */
const ifDefined = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])((value) => (part) => {
    if (value === undefined && part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) {
        if (value !== part.value) {
            const name = part.committer.name;
            part.committer.element.removeAttribute(name);
        }
    }
    else {
        part.setValue(value);
    }
});
//# sourceMappingURL=if-defined.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/default-template-processor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lit-html/lib/default-template-processor.js ***!
  \*****************************************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return DefaultTemplateProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return defaultTemplateProcessor; });
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */
class DefaultTemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === '.') {
            const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["PropertyCommitter"](element, name.slice(1), strings);
            return committer.parts;
        }
        if (prefix === '@') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["EventPart"](element, name.slice(1), options.eventContext)];
        }
        if (prefix === '?') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["BooleanAttributePart"](element, name.slice(1), strings)];
        }
        const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["AttributeCommitter"](element, name, strings);
        return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */
    handleTextExpression(options) {
        return new _parts_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](options);
    }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();
//# sourceMappingURL=default-template-processor.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/directive.js":
/*!************************************************!*\
  !*** ./node_modules/lit-html/lib/directive.js ***!
  \************************************************/
/*! exports provided: directive, isDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */
const directive = (f) => ((...args) => {
    const d = f(...args);
    directives.set(d, true);
    return d;
});
const isDirective = (o) => {
    return typeof o === 'function' && directives.has(o);
};
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/dom.js":
/*!******************************************!*\
  !*** ./node_modules/lit-html/lib/dom.js ***!
  \******************************************/
/*! exports provided: isCEPolyfill, reparentNodes, removeNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCEPolyfill", function() { return isCEPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return reparentNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return removeNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = window.customElements !== undefined &&
    window.customElements.polyfillWrapFlushCallback !==
        undefined;
/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */
const reparentNodes = (container, start, end = null, before = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.insertBefore(start, before);
        start = n;
    }
};
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */
const removeNodes = (container, start, end = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.removeChild(start);
        start = n;
    }
};
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/modify-template.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/modify-template.js ***!
  \******************************************************/
/*! exports provided: removeNodesFromTemplate, insertNodeIntoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodesFromTemplate", function() { return removeNodesFromTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNodeIntoTemplate", function() { return insertNodeIntoTemplate; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module shady-render
 */

const walkerNodeFilter = 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */
function removeNodesFromTemplate(template, nodesToRemove) {
    const { element: { content }, parts } = template;
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let part = parts[partIndex];
    let nodeIndex = -1;
    let removeCount = 0;
    const nodesToRemoveInTemplate = [];
    let currentRemovingNode = null;
    while (walker.nextNode()) {
        nodeIndex++;
        const node = walker.currentNode;
        // End removal if stepped past the removing node
        if (node.previousSibling === currentRemovingNode) {
            currentRemovingNode = null;
        }
        // A node to remove was found in the template
        if (nodesToRemove.has(node)) {
            nodesToRemoveInTemplate.push(node);
            // Track node we're removing
            if (currentRemovingNode === null) {
                currentRemovingNode = node;
            }
        }
        // When removing, increment count by which to adjust subsequent part indices
        if (currentRemovingNode !== null) {
            removeCount++;
        }
        while (part !== undefined && part.index === nodeIndex) {
            // If part is in a removed node deactivate it by setting index to -1 or
            // adjust the index as needed.
            part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
            // go to the next active part.
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
            part = parts[partIndex];
        }
    }
    nodesToRemoveInTemplate.forEach((n) => n.parentNode.removeChild(n));
}
const countNodes = (node) => {
    let count = (node.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */) ? 0 : 1;
    const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
    while (walker.nextNode()) {
        count++;
    }
    return count;
};
const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
    for (let i = startIndex + 1; i < parts.length; i++) {
        const part = parts[i];
        if (Object(_template_js__WEBPACK_IMPORTED_MODULE_0__["isTemplatePartActive"])(part)) {
            return i;
        }
    }
    return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */
function insertNodeIntoTemplate(template, node, refNode = null) {
    const { element: { content }, parts } = template;
    // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.
    if (refNode === null || refNode === undefined) {
        content.appendChild(node);
        return;
    }
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let insertCount = 0;
    let walkerIndex = -1;
    while (walker.nextNode()) {
        walkerIndex++;
        const walkerNode = walker.currentNode;
        if (walkerNode === refNode) {
            insertCount = countNodes(node);
            refNode.parentNode.insertBefore(node, refNode);
        }
        while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
            // If we've inserted the node, simply adjust all subsequent parts
            if (insertCount > 0) {
                while (partIndex !== -1) {
                    parts[partIndex].index += insertCount;
                    partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                }
                return;
            }
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }
    }
}
//# sourceMappingURL=modify-template.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/part.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lib/part.js ***!
  \*******************************************/
/*! exports provided: noChange, nothing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return nothing; });
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */
const nothing = {};
//# sourceMappingURL=part.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/parts.js":
/*!********************************************!*\
  !*** ./node_modules/lit-html/lib/parts.js ***!
  \********************************************/
/*! exports provided: isPrimitive, isIterable, AttributeCommitter, AttributePart, NodePart, BooleanAttributePart, PropertyCommitter, PropertyPart, EventPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return AttributeCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return AttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return NodePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return BooleanAttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return PropertyCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return PropertyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return EventPart; });
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _part_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */






const isPrimitive = (value) => {
    return (value === null ||
        !(typeof value === 'object' || typeof value === 'function'));
};
const isIterable = (value) => {
    return Array.isArray(value) ||
        // tslint:disable-next-line:no-any
        !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attibute. The value is only set once even if there are multiple parts
 * for an attribute.
 */
class AttributeCommitter {
    constructor(element, name, strings) {
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (let i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
        }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */
    _createPart() {
        return new AttributePart(this);
    }
    _getValue() {
        const strings = this.strings;
        const l = strings.length - 1;
        let text = '';
        for (let i = 0; i < l; i++) {
            text += strings[i];
            const part = this.parts[i];
            if (part !== undefined) {
                const v = part.value;
                if (isPrimitive(v) || !isIterable(v)) {
                    text += typeof v === 'string' ? v : String(v);
                }
                else {
                    for (const t of v) {
                        text += typeof t === 'string' ? t : String(t);
                    }
                }
            }
        }
        text += strings[l];
        return text;
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    }
}
/**
 * A Part that controls all or part of an attribute value.
 */
class AttributePart {
    constructor(committer) {
        this.value = undefined;
        this.committer = committer;
    }
    setValue(value) {
        if (value !== _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"] && (!isPrimitive(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(value)) {
                this.committer.dirty = true;
            }
        }
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.value)) {
            const directive = this.value;
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        this.committer.commit();
    }
}
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */
class NodePart {
    constructor(options) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendInto(container) {
        this.startNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendIntoPart(part) {
        part.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        part.__insert(this.endNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterPart(ref) {
        ref.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        const value = this.__pendingValue;
        if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        if (isPrimitive(value)) {
            if (value !== this.value) {
                this.__commitText(value);
            }
        }
        else if (value instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_4__["TemplateResult"]) {
            this.__commitTemplateResult(value);
        }
        else if (value instanceof Node) {
            this.__commitNode(value);
        }
        else if (isIterable(value)) {
            this.__commitIterable(value);
        }
        else if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]) {
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"];
            this.clear();
        }
        else {
            // Fallback, will render the string representation
            this.__commitText(value);
        }
    }
    __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
        if (this.value === value) {
            return;
        }
        this.clear();
        this.__insert(value);
        this.value = value;
    }
    __commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        // If `value` isn't already a string, we explicitly convert it here in case
        // it can't be implicitly converted - i.e. it's a symbol.
        const valueAsString = typeof value === 'string' ? value : String(value);
        if (node === this.endNode.previousSibling &&
            node.nodeType === 3 /* Node.TEXT_NODE */) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = valueAsString;
        }
        else {
            this.__commitNode(document.createTextNode(valueAsString));
        }
        this.value = value;
    }
    __commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"] &&
            this.value.template === template) {
            this.value.update(value.values);
        }
        else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            const instance = new _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"](template, value.processor, this.options);
            const fragment = instance._clone();
            instance.update(value.values);
            this.__commitNode(fragment);
            this.value = instance;
        }
    }
    __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new NodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                }
                else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                }
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
    clear(startNode = this.startNode) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["removeNodes"])(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
class BooleanAttributePart {
    constructor(element, name, strings) {
        this.value = undefined;
        this.__pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const value = !!this.__pendingValue;
        if (this.value !== value) {
            if (value) {
                this.element.setAttribute(this.name, '');
            }
            else {
                this.element.removeAttribute(this.name);
            }
            this.value = value;
        }
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */
class PropertyCommitter extends AttributeCommitter {
    constructor(element, name, strings) {
        super(element, name, strings);
        this.single =
            (strings.length === 2 && strings[0] === '' && strings[1] === '');
    }
    _createPart() {
        return new PropertyPart(this);
    }
    _getValue() {
        if (this.single) {
            return this.parts[0].value;
        }
        return super._getValue();
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            // tslint:disable-next-line:no-any
            this.element[this.name] = this._getValue();
        }
    }
}
class PropertyPart extends AttributePart {
}
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
try {
    const options = {
        get capture() {
            eventOptionsSupported = true;
            return false;
        }
    };
    // tslint:disable-next-line:no-any
    window.addEventListener('test', options, options);
    // tslint:disable-next-line:no-any
    window.removeEventListener('test', options, options);
}
catch (_e) {
}
class EventPart {
    constructor(element, eventName, eventContext) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this.__boundHandleEvent = (e) => this.handleEvent(e);
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const newListener = this.__pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null ||
            oldListener != null &&
                (newListener.capture !== oldListener.capture ||
                    newListener.once !== oldListener.once ||
                    newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        if (shouldAddListener) {
            this.__options = getOptions(newListener);
            this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        this.value = newListener;
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
    handleEvent(event) {
        if (typeof this.value === 'function') {
            this.value.call(this.eventContext || this.element, event);
        }
        else {
            this.value.handleEvent(event);
        }
    }
}
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions = (o) => o &&
    (eventOptionsSupported ?
        { capture: o.capture, passive: o.passive, once: o.once } :
        o.capture);
//# sourceMappingURL=parts.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/render.js":
/*!*********************************************!*\
  !*** ./node_modules/lit-html/lib/render.js ***!
  \*********************************************/
/*! exports provided: parts, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return parts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */



const parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */
const render = (result, container, options) => {
    let part = parts.get(container);
    if (part === undefined) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
        parts.set(container, part = new _parts_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"](Object.assign({ templateFactory: _template_factory_js__WEBPACK_IMPORTED_MODULE_2__["templateFactory"] }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};
//# sourceMappingURL=render.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/shady-render.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/lib/shady-render.js ***!
  \***************************************************/
/*! exports provided: html, svg, TemplateResult, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _modify_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modify-template.js */ "./node_modules/lit-html/lib/modify-template.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_6__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_6__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_6__["TemplateResult"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * Module to add shady DOM/shady CSS polyfill support to lit-html template
 * rendering. See the [[render]] method for details.
 *
 * @module shady-render
 * @preferred
 */
/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */







// Get a key to lookup in `templateCaches`.
const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
let compatibleShadyCSSVersion = true;
if (typeof window.ShadyCSS === 'undefined') {
    compatibleShadyCSSVersion = false;
}
else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
    console.warn(`Incompatible ShadyCSS version detected. ` +
        `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and ` +
        `@webcomponents/shadycss@1.3.1.`);
    compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */
const shadyTemplateFactory = (scopeName) => (result) => {
    const cacheKey = getTemplateCacheKey(result.type, scopeName);
    let templateCache = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(cacheKey);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].set(cacheKey, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_5__["marker"]);
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        const element = result.getTemplateElement();
        if (compatibleShadyCSSVersion) {
            window.ShadyCSS.prepareTemplateDom(element, scopeName);
        }
        template = new _template_js__WEBPACK_IMPORTED_MODULE_5__["Template"](result, element);
        templateCache.keyString.set(key, template);
    }
    templateCache.stringsArray.set(result.strings, template);
    return template;
};
const TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */
const removeStylesFromLitTemplates = (scopeName) => {
    TEMPLATE_TYPES.forEach((type) => {
        const templates = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(getTemplateCacheKey(type, scopeName));
        if (templates !== undefined) {
            templates.keyString.forEach((template) => {
                const { element: { content } } = template;
                // IE 11 doesn't support the iterable param Set constructor
                const styles = new Set();
                Array.from(content.querySelectorAll('style')).forEach((s) => {
                    styles.add(s);
                });
                Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, styles);
            });
        }
    });
};
const shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */
const prepareTemplateStyles = (scopeName, renderedDOM, template) => {
    shadyRenderSet.add(scopeName);
    // If `renderedDOM` is stamped from a Template, then we need to edit that
    // Template's underlying template element. Otherwise, we create one here
    // to give to ShadyCSS, which still requires one while scoping.
    const templateElement = !!template ? template.element : document.createElement('template');
    // Move styles out of rendered DOM and store.
    const styles = renderedDOM.querySelectorAll('style');
    const { length } = styles;
    // If there are no styles, skip unnecessary work
    if (length === 0) {
        // Ensure prepareTemplateStyles is called to support adding
        // styles via `prepareAdoptedCssText` since that requires that
        // `prepareTemplateStyles` is called.
        //
        // ShadyCSS will only update styles containing @apply in the template
        // given to `prepareTemplateStyles`. If no lit Template was given,
        // ShadyCSS will not be able to update uses of @apply in any relevant
        // template. However, this is not a problem because we only create the
        // template for the purpose of supporting `prepareAdoptedCssText`,
        // which doesn't support @apply at all.
        window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
        return;
    }
    const condensedStyle = document.createElement('style');
    // Collect styles into a single style. This helps us make sure ShadyCSS
    // manipulations will not prevent us from being able to fix up template
    // part indices.
    // NOTE: collecting styles is inefficient for browsers but ShadyCSS
    // currently does this anyway. When it does not, this should be changed.
    for (let i = 0; i < length; i++) {
        const style = styles[i];
        style.parentNode.removeChild(style);
        condensedStyle.textContent += style.textContent;
    }
    // Remove styles from nested templates in this scope.
    removeStylesFromLitTemplates(scopeName);
    // And then put the condensed style into the "root" template passed in as
    // `template`.
    const content = templateElement.content;
    if (!!template) {
        Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["insertNodeIntoTemplate"])(template, condensedStyle, content.firstChild);
    }
    else {
        content.insertBefore(condensedStyle, content.firstChild);
    }
    // Note, it's important that ShadyCSS gets the template that `lit-html`
    // will actually render so that it can update the style inside when
    // needed (e.g. @apply native Shadow DOM case).
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    const style = content.querySelector('style');
    if (window.ShadyCSS.nativeShadow && style !== null) {
        // When in native Shadow DOM, ensure the style created by ShadyCSS is
        // included in initially rendered output (`renderedDOM`).
        renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
    }
    else if (!!template) {
        // When no style is left in the template, parts will be broken as a
        // result. To fix this, we put back the style node ShadyCSS removed
        // and then tell lit to remove that node from the template.
        // There can be no style in the template in 2 cases (1) when Shady DOM
        // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
        // is in use ShadyCSS removes the style if it contains no content.
        // NOTE, ShadyCSS creates its own style so we can safely add/remove
        // `condensedStyle` here.
        content.insertBefore(condensedStyle, content.firstChild);
        const removes = new Set();
        removes.add(condensedStyle);
        Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, removes);
    }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */
const render = (result, container, options) => {
    if (!options || typeof options !== 'object' || !options.scopeName) {
        throw new Error('The `scopeName` option is required.');
    }
    const scopeName = options.scopeName;
    const hasRendered = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].has(container);
    const needsScoping = compatibleShadyCSSVersion &&
        container.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */ &&
        !!container.host;
    // Handle first render to a scope specially...
    const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
    // On first scope render, render into a fragment; this cannot be a single
    // fragment that is reused since nested renders can occur synchronously.
    const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
    Object(_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(result, renderContainer, Object.assign({ templateFactory: shadyTemplateFactory(scopeName) }, options));
    // When performing first scope render,
    // (1) We've rendered into a fragment so that there's a chance to
    // `prepareTemplateStyles` before sub-elements hit the DOM
    // (which might cause them to render based on a common pattern of
    // rendering in a custom element's `connectedCallback`);
    // (2) Scope the template with ShadyCSS one time only for this scope.
    // (3) Render the fragment into the container and make sure the
    // container knows its `part` is the one we just rendered. This ensures
    // DOM will be re-used on subsequent renders.
    if (firstScopeRender) {
        const part = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].get(renderContainer);
        _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].delete(renderContainer);
        // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
        // that should apply to `renderContainer` even if the rendered value is
        // not a TemplateInstance. However, it will only insert scoped styles
        // into the document if `prepareTemplateStyles` has already been called
        // for the given scope name.
        const template = part.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_4__["TemplateInstance"] ?
            part.value.template :
            undefined;
        prepareTemplateStyles(scopeName, renderContainer, template);
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
        container.appendChild(renderContainer);
        _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].set(container, part);
    }
    // After elements have hit the DOM, update styling if this is the
    // initial render to this container.
    // This is needed whenever dynamic changes are made so it would be
    // safest to do every render; however, this would regress performance
    // so we leave it up to the user to call `ShadyCSS.styleElement`
    // for dynamic changes.
    if (!hasRendered && needsScoping) {
        window.ShadyCSS.styleElement(container.host);
    }
};
//# sourceMappingURL=shady-render.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-factory.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-factory.js ***!
  \*******************************************************/
/*! exports provided: templateFactory, templateCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return templateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return templateCaches; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_0__["marker"]);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new _template_js__WEBPACK_IMPORTED_MODULE_0__["Template"](result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
const templateCaches = new Map();
//# sourceMappingURL=template-factory.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-instance.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/lib/template-instance.js ***!
  \********************************************************/
/*! exports provided: TemplateInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return TemplateInstance; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
    constructor(template, processor, options) {
        this.__parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }
    update(values) {
        let i = 0;
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.setValue(values[i]);
            }
            i++;
        }
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.commit();
            }
        }
    }
    _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari dooes not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        const fragment = _dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"] ?
            this.template.element.content.cloneNode(true) :
            document.importNode(this.template.element.content, true);
        const stack = [];
        const parts = this.template.parts;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        let partIndex = 0;
        let nodeIndex = 0;
        let part;
        let node = walker.nextNode();
        // Loop through all the nodes and parts of a template
        while (partIndex < parts.length) {
            part = parts[partIndex];
            if (!Object(_template_js__WEBPACK_IMPORTED_MODULE_1__["isTemplatePartActive"])(part)) {
                this.__parts.push(undefined);
                partIndex++;
                continue;
            }
            // Progress the tree walker until we find our next part's node.
            // Note that multiple parts may share the same node (attribute parts
            // on a single element), so this loop may not run at all.
            while (nodeIndex < part.index) {
                nodeIndex++;
                if (node.nodeName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
                if ((node = walker.nextNode()) === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    node = walker.nextNode();
                }
            }
            // We've arrived at our part's node.
            if (part.type === 'node') {
                const part = this.processor.handleTextExpression(this.options);
                part.insertAfterNode(node.previousSibling);
                this.__parts.push(part);
            }
            else {
                this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
            }
            partIndex++;
        }
        if (_dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"]) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    }
}
//# sourceMappingURL=template-instance.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-result.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-result.js ***!
  \******************************************************/
/*! exports provided: TemplateResult, SVGTemplateResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return SVGTemplateResult; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */


/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
class TemplateResult {
    constructor(strings, values, type, processor) {
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */
    getHTML() {
        const l = this.strings.length - 1;
        let html = '';
        let isCommentBinding = false;
        for (let i = 0; i < l; i++) {
            const s = this.strings[i];
            // For each binding we want to determine the kind of marker to insert
            // into the template source before it's parsed by the browser's HTML
            // parser. The marker type is based on whether the expression is in an
            // attribute, text, or comment poisition.
            //   * For node-position bindings we insert a comment with the marker
            //     sentinel as its text content, like <!--{{lit-guid}}-->.
            //   * For attribute bindings we insert just the marker sentinel for the
            //     first binding, so that we support unquoted attribute bindings.
            //     Subsequent bindings can use a comment marker because multi-binding
            //     attributes must be quoted.
            //   * For comment bindings we insert just the marker sentinel so we don't
            //     close the comment.
            //
            // The following code scans the template source, but is *not* an HTML
            // parser. We don't need to track the tree structure of the HTML, only
            // whether a binding is inside a comment, and if not, if it appears to be
            // the first binding in an attribute.
            const commentOpen = s.lastIndexOf('<!--');
            // We're in comment position if we have a comment open with no following
            // comment close. Because <-- can appear in an attribute value there can
            // be false positives.
            isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
                s.indexOf('-->', commentOpen + 1) === -1;
            // Check to see if we have an attribute-like sequence preceeding the
            // expression. This can match "name=value" like structures in text,
            // comments, and attribute values, so there can be false-positives.
            const attributeMatch = _template_js__WEBPACK_IMPORTED_MODULE_1__["lastAttributeNameRegex"].exec(s);
            if (attributeMatch === null) {
                // We're only in this branch if we don't have a attribute-like
                // preceeding sequence. For comments, this guards against unusual
                // attribute values like <div foo="<!--${'bar'}">. Cases like
                // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                // below.
                html += s + (isCommentBinding ? _template_js__WEBPACK_IMPORTED_MODULE_1__["marker"] : _template_js__WEBPACK_IMPORTED_MODULE_1__["nodeMarker"]);
            }
            else {
                // For attributes we use just a marker sentinel, and also append a
                // $lit$ suffix to the name to opt-out of attribute-specific parsing
                // that IE and Edge do for style and certain SVG attributes.
                html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                    attributeMatch[2] + _template_js__WEBPACK_IMPORTED_MODULE_1__["boundAttributeSuffix"] + attributeMatch[3] +
                    _template_js__WEBPACK_IMPORTED_MODULE_1__["marker"];
            }
        }
        html += this.strings[l];
        return html;
    }
    getTemplateElement() {
        const template = document.createElement('template');
        template.innerHTML = this.getHTML();
        return template;
    }
}
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */
class SVGTemplateResult extends TemplateResult {
    getHTML() {
        return `<svg>${super.getHTML()}</svg>`;
    }
    getTemplateElement() {
        const template = super.getTemplateElement();
        const content = template.content;
        const svgElement = content.firstChild;
        content.removeChild(svgElement);
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(content, svgElement.firstChild);
        return template;
    }
}
//# sourceMappingURL=template-result.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template.js":
/*!***********************************************!*\
  !*** ./node_modules/lit-html/lib/template.js ***!
  \***********************************************/
/*! exports provided: marker, nodeMarker, markerRegex, boundAttributeSuffix, Template, isTemplatePartActive, createMarker, lastAttributeNameRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marker", function() { return marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeMarker", function() { return nodeMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerRegex", function() { return markerRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAttributeSuffix", function() { return boundAttributeSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return isTemplatePartActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return createMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastAttributeNameRegex", function() { return lastAttributeNameRegex; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */
const boundAttributeSuffix = '$lit$';
/**
 * An updateable Template that tracks the location of dynamic parts.
 */
class Template {
    constructor(result, element) {
        this.parts = [];
        this.element = element;
        const nodesToRemove = [];
        const stack = [];
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.
        let lastPartIndex = 0;
        let index = -1;
        let partIndex = 0;
        const { strings, values: { length } } = result;
        while (partIndex < length) {
            const node = walker.nextNode();
            if (node === null) {
                // We've exhausted the content inside a nested template element.
                // Because we still have parts (the outer for-loop), we know:
                // - There is a template in the stack
                // - The walker will find a nextNode outside the template
                walker.currentNode = stack.pop();
                continue;
            }
            index++;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                if (node.hasAttributes()) {
                    const attributes = node.attributes;
                    const { length } = attributes;
                    // Per
                    // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                    // attributes are not guaranteed to be returned in document order.
                    // In particular, Edge/IE can return them out of order, so we cannot
                    // assume a correspondence between part index and attribute index.
                    let count = 0;
                    for (let i = 0; i < length; i++) {
                        if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                            count++;
                        }
                    }
                    while (count-- > 0) {
                        // Get the template literal section leading up to the first
                        // expression in this attribute
                        const stringForPart = strings[partIndex];
                        // Find the attribute name
                        const name = lastAttributeNameRegex.exec(stringForPart)[2];
                        // Find the corresponding attribute
                        // All bound attributes have had a suffix added in
                        // TemplateResult#getHTML to opt out of special attribute
                        // handling. To look up the attribute value we also need to add
                        // the suffix.
                        const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                        const attributeValue = node.getAttribute(attributeLookupName);
                        node.removeAttribute(attributeLookupName);
                        const statics = attributeValue.split(markerRegex);
                        this.parts.push({ type: 'attribute', index, name, strings: statics });
                        partIndex += statics.length - 1;
                    }
                }
                if (node.tagName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
            }
            else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                const data = node.data;
                if (data.indexOf(marker) >= 0) {
                    const parent = node.parentNode;
                    const strings = data.split(markerRegex);
                    const lastIndex = strings.length - 1;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for (let i = 0; i < lastIndex; i++) {
                        let insert;
                        let s = strings[i];
                        if (s === '') {
                            insert = createMarker();
                        }
                        else {
                            const match = lastAttributeNameRegex.exec(s);
                            if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                                s = s.slice(0, match.index) + match[1] +
                                    match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                            }
                            insert = document.createTextNode(s);
                        }
                        parent.insertBefore(insert, node);
                        this.parts.push({ type: 'node', index: ++index });
                    }
                    // If there's no text, we must insert a comment to mark our place.
                    // Else, we can trust it will stick around after cloning.
                    if (strings[lastIndex] === '') {
                        parent.insertBefore(createMarker(), node);
                        nodesToRemove.push(node);
                    }
                    else {
                        node.data = strings[lastIndex];
                    }
                    // We have a part for each match found
                    partIndex += lastIndex;
                }
            }
            else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                if (node.data === marker) {
                    const parent = node.parentNode;
                    // Add a new marker node to be the startNode of the Part if any of
                    // the following are true:
                    //  * We don't have a previousSibling
                    //  * The previousSibling is already the start of a previous part
                    if (node.previousSibling === null || index === lastPartIndex) {
                        index++;
                        parent.insertBefore(createMarker(), node);
                    }
                    lastPartIndex = index;
                    this.parts.push({ type: 'node', index });
                    // If we don't have a nextSibling, keep this node so we have an end.
                    // Else, we can remove it to save future costs.
                    if (node.nextSibling === null) {
                        node.data = '';
                    }
                    else {
                        nodesToRemove.push(node);
                        index--;
                    }
                    partIndex++;
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        // TODO (justinfagnani): consider whether it's even worth it to
                        // make bindings in comments work
                        this.parts.push({ type: 'node', index: -1 });
                        partIndex++;
                    }
                }
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove) {
            n.parentNode.removeChild(n);
        }
    }
}
const endsWith = (str, suffix) => {
    const index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
};
const isTemplatePartActive = (part) => part.index !== -1;
// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
//# sourceMappingURL=template.js.map

/***/ }),

/***/ "./node_modules/lit-html/lit-html.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lit-html.js ***!
  \*******************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor, directive, isDirective, removeNodes, reparentNodes, noChange, nothing, AttributeCommitter, AttributePart, BooleanAttributePart, EventPart, isIterable, isPrimitive, NodePart, PropertyCommitter, PropertyPart, parts, render, templateCaches, templateFactory, TemplateInstance, SVGTemplateResult, TemplateResult, createMarker, isTemplatePartActive, Template, html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/default-template-processor.js */ "./node_modules/lit-html/lib/default-template-processor.js");
/* harmony import */ var _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["DefaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]; });

/* harmony import */ var _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["removeNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["reparentNodes"]; });

/* harmony import */ var _lib_part_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["nothing"]; });

/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributeCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["BooleanAttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["EventPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isIterable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["NodePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyPart"]; });

/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["parts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["render"]; });

/* harmony import */ var _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateFactory"]; });

/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__["TemplateInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"]; });

/* harmony import */ var _lib_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["createMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["isTemplatePartActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["Template"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @module lit-html
 * @preferred
 */
/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */




// TODO(justinfagnani): remove line when we get NodePart moving methods








// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
(window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.1.1');
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"](strings, values, 'html', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
const svg = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"](strings, values, 'svg', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
//# sourceMappingURL=lit-html.js.map

/***/ }),

/***/ "./resources/assets/scripts/es/_accordion.js":
/*!***************************************************!*\
  !*** ./resources/assets/scripts/es/_accordion.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/env */ "./resources/assets/scripts/es/config/env.js");
/* harmony import */ var _eq_height__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_eq-height */ "./resources/assets/scripts/es/_eq-height.js");



const defaults = {
    $element: undefined,
    selectors: {
        accordion: '.js-accordion',
        item: '.js-accordion-item',
        heading: '.js-accordion-heading',
        active: `.${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}accordion__heading--active`
    },
    classes: {
        active: `${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}accordion__heading--active`
    }
};

/**
 * Accordion.
 *
 * @module Accordion
 * @param {Object} properties - specifies the configurations
 * for the module.
 */
class Accordion {
    constructor(properties = {}) {
        this.eqHeight = new _eq_height__WEBPACK_IMPORTED_MODULE_1__["default"](properties);
        this.accordion = properties.$element;
        this.selectors = defaults.selectors;
        this.classes = defaults.classes;
        this.items = this.accordion.querySelectorAll(this.selectors.item);
    }

    /**
     * Initialise the module.
     *
     * @function init
     *
     * @return undefined
     */
    init() {
        this.bind();
    }

    /**
     * Show the accordion item content.
     *
     * @function showContent
     * @param {HTMLElement} heading - heading element of accordion item.
     *
     * @return undefined
     */
    showContent(heading) {
        heading.classList.add(this.classes.active);
        heading.setAttribute('aria-expanded', 'true');
        heading.nextElementSibling.setAttribute('aria-hidden', 'false');
    }

    /**
     * Hide the accordion item content.
     *
     * @function hideContent
     * @param {HTMLElement} heading - heading element of accordion item.
     *
     * @return undefined
     */
    hideContent(heading) {
        heading.classList.remove(this.classes.active);
        heading.setAttribute('aria-expanded', 'false');
        heading.nextElementSibling.setAttribute('aria-hidden', 'true');
    }

    /**
     * Bind the events to the actionable elements within the accordion system.
     *
     * @function bind
     *
     * @return undefined
     */
    bind() {
        const $this = this;

        [].forEach.call(this.items, accordionItem => {
            let heading = accordionItem.querySelector(this.selectors.heading);
            heading.addEventListener('click', event => {$this.toggle(event, heading)});
            heading.addEventListener('keydown', event => {$this.keydown(event, heading)});
        });
    }

    /**
     * Link the keyboard key pressed to the
     * appropriate callback function.
     *
     * @function keydown
     * @param {$.Event} event - specifies the keydown event.
     * @param {HTMLElement} heading - heading of accordion item.
     *
     * @return undefined
     */
    keydown(event, heading) {
        if (event.keyCode === 13) {
            this.toggle(event, heading);
        }
    }

    /**
     * Toggle the visibility of the accordion content.
     *
     * @function toggle
     * @param {$.Event} event - specifies the click event.
     * @param {HTMLElement} heading - heading of accordion item.
     *
     * @return undefined
     */
    toggle(event, heading) {
        event.preventDefault();
        event.stopPropagation();

        if(heading.classList.contains(this.classes.active)) {
            this.hideContent(heading);
        } else {
            let activeHeading = this.accordion.querySelector(this.selectors.active);
            let contentEqHeight = heading.nextElementSibling.querySelector('[data-vfes-js*="_eqHeight"]');
            
            if(activeHeading) { this.hideContent(activeHeading) }
            
            this.showContent(heading);

            if(contentEqHeight) { this.eqHeight.init(contentEqHeight) }
        }
    }
}


/***/ }),

/***/ "./resources/assets/scripts/es/_autocomplete.js":
/*!******************************************************!*\
  !*** ./resources/assets/scripts/es/_autocomplete.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Autocomplete; });
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/env */ "./resources/assets/scripts/es/config/env.js");


const defaults = {
    $element: undefined,
    selectors: {
        autocompleteOption: '.js-form-autocomplete-list-option',
        autocompleteList: '.js-form-autocomplete-list',
        autocomplete: `.js-form-autocomplete`,
        selected: '.selected',
        hidden: '.hidden'
    },
    classes: {
        autocompleteOption: 'js-form-autocomplete-list-option',
        autocompleteList: 'js-form-autocomplete-list',
        autocomplete: `js-form-autocomplete`,
        focused: 'focused',
        selected: 'selected',
        hidden: 'hidden'
    }
};

/**
 * Autocomplete.
 *
 * @module Autocomplete
 * @param {Object} properties - specifies the configurations
 * for the module.
 */
class Autocomplete {
    constructor(properties = {}) {
        const autocomplete    = properties.$element;

        this.autocomplete     = autocomplete;
        this.classes    = defaults.classes;
        this.selectors  = defaults.selectors;
        this.pos = -1;
        this.optionList = properties.$options;
    }

    /**
     * Initialise the module.
     *
     * @function init
     *
     * @return undefined
     */

    init(firstTime = true) {

        this.associateEvents();
    }

    /**
    * Function to associate every listeners to our custom select and default select
    *
    * @function associateEvents
    *
    * @return undefined
    */
    associateEvents() {
        const $this = this;
        const autocomplete = $this.autocomplete;
        const autocompleteList = autocomplete.parentNode.querySelector(`#${autocomplete.getAttribute('aria-owns')}`);
        let autocompleteListOptions = $this.optionList || autocompleteList.querySelectorAll(this.selectors.autocompleteOption);

        autocomplete.addEventListener('keyup', e => {
            let optionSelected = autocompleteList.querySelector($this.selectors.selected);

            switch(e.which) {
                case 9: // Tabulator
                    //$this.hideOptions();
                    break;
                case 40: // Arrow down
                case 38: // Arrow up
                    e.preventDefault();
                    let pos = e.which === 40 ? 1 : -1;
                    let optionListViewed = autocompleteList.querySelectorAll(`${this.selectors.autocompleteOption}:not(${this.selectors.hidden})`);

                    $this.pos += pos;

                    if (optionListViewed.length > 0 && autocomplete.getAttribute('aria-expanded') === 'false') {
                        $this.showOptions();
                    }

                    if (optionSelected) {
                        if($this.pos < 0) {
                            $this.pos = optionListViewed.length - 1;
                        } else if ($this.pos >= optionListViewed.length) {
                            $this.pos = 0;
                        }
                        optionSelected.classList.remove($this.classes.selected);
                        optionListViewed[$this.pos].classList.add($this.classes.selected);
                    } else {
                        if (optionListViewed.length > 0) {
                            $this.pos = $this.pos < 0 ? optionListViewed.length - 1 : $this.pos;
                            optionListViewed[$this.pos].classList.add($this.classes.selected);
                        } else {
                            $this.pos = -1;
                        }
                    }
                    break;
                    
                case 13: // Enter
                    if (optionSelected) {
                        autocomplete.value = optionSelected.innerText;
                        optionSelected.classList.remove($this.classes.selected);
                        $this.pos = -1;
                        $this.hideOptions();
                        $this.displayOptions(autocompleteListOptions);
                    } else if (autocomplete.value === '') {
                        $this.pos = -1;
                        $this.hideOptions();
                    }
                    break;
                case 27: // Escape
                    if(optionSelected) { optionSelected.classList.remove(this.classes.selected) }
                    
                    $this.pos = -1;
                    $this.hideOptions();
                    break;

                default: 
                    $this.displayOptions(autocompleteListOptions);
                    $this.showOptions();
            }
        });
        
        [].forEach.call(autocompleteListOptions, option => {
            option.addEventListener('click', e => {
                e.preventDefault();
                autocomplete.value = option.innerText;
                autocomplete.focus();
                $this.displayOptions(autocompleteListOptions);
            });
        });

        autocomplete.addEventListener('focusin', e => {
            $this.showOptions();
        });
        
        document.addEventListener('click', e => {
            if(e.target.localName !== 'vfes-input-autocomplete' && !e.target.classList.contains($this.classes.autocomplete)) {
                $this.hideOptions();
            }
        });
    }

    displayOptions (optionList) {
        let regexp = new RegExp(`^${this.autocomplete.value}`, 'gi');
        [].forEach.call(optionList, (option) => {
            if (regexp.test(option.innerText)) {
                option.classList.remove(this.classes.hidden);   
            } else {
                option.classList.add(this.classes.hidden);
            }
        });
    }

    showOptions() {
        this.autocomplete.setAttribute('aria-expanded', 'true');
    }

    hideOptions() {
        this.autocomplete.setAttribute('aria-expanded', 'false');
    }
}


/***/ }),

/***/ "./resources/assets/scripts/es/_carousel.js":
/*!**************************************************!*\
  !*** ./resources/assets/scripts/es/_carousel.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/env */ "./resources/assets/scripts/es/config/env.js");
/* harmony import */ var _swipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_swipe */ "./resources/assets/scripts/es/_swipe.js");



const defaults = {
    $element: undefined,
    selectors: {
        elements: `.js-carousel-list-element`,
        list: `.js-carousel-list`,
    },
    classes: {
        active: `${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}carousel--active`,
        arrow: `${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}carousel__arrow`,
        arrowLeft: `${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}carousel__arrow--left`,
        arrowRight: `${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}carousel__arrow--right`,
        arrowDisabled: `${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}carousel__arrow--disabled`,
        bullets: `${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}carousel__bullets`,
        bullet: `${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}carousel__bullets-bullet`,
        bulletActive: `${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}carousel__bullets-bullet--active`,
        elementActive: `${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}carousel__list-element--active`,
        list: `js-carousel-list`,
        loaded: `${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}carousel--loaded`,
    }
};

/**
 * Carousel.
 *
 * @module Carousel
 * @param {Object} properties - specifies the configurations
 * for the module.
 */
class Carousel {
    constructor(properties = {}) {
        const carousel   = properties.$element;
        const list       = carousel.querySelector(defaults.selectors.list);
        const elements   = carousel.querySelectorAll(defaults.selectors.elements);
        const config     = properties.config ? JSON.parse(properties.config) : JSON.parse(carousel.dataset.config);
        const listElements = properties.listItems ? properties.listItems : elements;

        let bulletsArray = [];

        this.carousel       = carousel;
        this.list           = list;
        this.elements       = listElements;
        this.totalElements  = listElements.length;
        this.config         = config;
        this.bulletsArray   = bulletsArray;
        this.arrows         = {};

        //Events
        this.onInitialized = new Event('vfes:init');
        this.onChanged = new Event('vfes:changed');
        this.onUpdated = new Event('vfes:updated');
        this.onAfterDestroy = new Event('vfes:after:destroy');
        this.onBeforeDestroy = new Event('vfes:before:destroy');
    }

    /**
     * Initialise the module.
     *
     * @function init
     *
     * @return undefined
     */

    init(firstTime = true) {
        const mod = this;

        mod.setCarouselSwipe();
        mod.getBreakpoint();

        // Evento resize para actualizar el carrusel
        window.addEventListener('resize', (e) => {
            mod.getBreakpoint();
        });

        //EVENTO QUE DISPARAMOS CUANDO SE INICIALIZA EL CARRUSEL
        mod.onInitialized.arrows = mod.arrows;
        mod.onInitialized.bulletsArray = mod.bulletsArray;
        mod.onInitialized.carousel = mod.carousel;
        mod.onInitialized.elements = mod.elements;
        mod.onInitialized.list = mod.list;
        mod.onInitialized.totalElements = mod.totalElements;

        mod.carousel.dispatchEvent(mod.onInitialized);
    }

    /**
     * Get actual breakpoint
     *
     * @function getBreakpoint
     *
     * @return undefined
     */

    getBreakpoint(elements) {
        const mod = this;

        let index       = 0;
        let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        Object.keys(mod.config.responsive).forEach(function(key, val) {
            if (windowWidth > mod.config.responsive[key].breakpoint) {
                index = key;
            }
        });

        mod.getElements(index);
    }

    /**
     * Get carousel elements or destroy
     *
     * @function getElements
     *
     * @return undefined
     */

    getElements(index) {
        const mod = this;

        let elements = mod.config.responsive[index].elements;

        mod.visibleElements = elements;

        if (elements !== 0) {
            mod.setCarousel(elements);
        } else {
            mod.destroy();
        }
    }

    /**
     * Set carousel
     *
     * @function setCarousel
     *
     * @return undefined
     */

    setCarousel(visibleElements) {
        const mod = this;

        mod.carousel.classList.add(defaults.classes.active);

        let listWidth = 0;

        if (mod.totalElements <= visibleElements) {
            listWidth = 100;
        } else {
            listWidth = mod.totalElements / visibleElements * 100;
        }

        const elementWidth  = 100 / mod.totalElements;

        mod.list.style.width = listWidth + '%';

        [].forEach.call(mod.elements, function(val, key) {
            val.style.width = elementWidth + '%';
        });

        // CONTROLS
        if (mod.config.build.bullets === true) {
            mod.setCarouselBullets();
        }

        if (mod.config.build.arrows === true) {
            mod.setCarouselArrows();
        }

        mod.carousel.classList.add(defaults.classes.loaded);

        //EVENTO QUE DISPARAMOS CUANDO SE ACTUALIZA EL CARRUSEL
        mod.onUpdated.arrows        = mod.arrows;
        mod.onUpdated.bulletsArray  = mod.bulletsArray;
        mod.onUpdated.carousel      = mod.carousel;
        mod.onUpdated.elements      = mod.elements;
        mod.onUpdated.list          = mod.list;
        mod.onUpdated.totalElements = mod.totalElements;

        mod.carousel.dispatchEvent(mod.onUpdated);
    }

    /**
     * Set carousel swipe interaction
     *
     * @function setCarouselSwipe
     *
     * @return undefined
     */

    setCarouselSwipe() {
        const mod = this;
        
        // Use class to get element by string.
        const swiper = new _swipe__WEBPACK_IMPORTED_MODULE_1__["default"](mod.list);
        swiper.onLeft(function() {
            mod.moveCarousel('right');
        });
        swiper.onRight(function() {
            mod.moveCarousel('left');
        });
        swiper.onUp(function() {});
        swiper.onDown(function() {});
        swiper.run();
    }

    /**
     * Set carousel bullets
     *
     * @function setCarouselBullets
     *
     * @return undefined
     */

    setCarouselBullets() {
        const mod = this;

        mod.bulletsArray = [];

        let oldBullets = mod.carousel.querySelectorAll('.' + defaults.classes.bullets);

        [].forEach.call(oldBullets, function(val, key) {
            mod.carousel.removeChild(val);
        });

        let bullets = document.createElement('div');

        bullets.classList.add(defaults.classes.bullets);

        let numberBullets = mod.totalElements - mod.visibleElements + 1;

        if (numberBullets <= 1) {
            return false;
        }

        for (let i = 0; i < numberBullets; i++) {
            let bullet;

            if (mod.config.build.clickable_bullets === true) {
                bullet = document.createElement('button');

                bullet.setAttribute('type', 'button');
                bullet.setAttribute('title', 'Ir al elemento ' + (i + 1) + ' del carrusel');
                bullet.innerHTML = 'Ir al elemento ' + (i + 1) + ' del carrusel';

                bullet.addEventListener('click', function() {
                    mod.moveCarouselTo(i);
                });
            } else {
                bullet = document.createElement('div');
                bullet.innerHTML = i + 1;
            }

            bullet.classList.add(defaults.classes.bullet);

            bullets.appendChild(bullet);

            mod.bulletsArray.push(bullet);
        }

        mod.carousel.appendChild(bullets);

        if (mod.config.build.arrows !== true) {
            mod.position = 0;
            mod.moveCarouselTo(0);
        }
    }

    /**
     * Set carousel arrows buttons
     *
     * @function setCarouselArrows
     *
     * @return undefined
     */

    setCarouselArrows() {
        const mod = this;

        let arrows = mod.carousel.querySelectorAll('.' + defaults.classes.arrow);

        [].forEach.call(arrows, function(val, key) {
            mod.carousel.removeChild(val);
        });

        if (mod.totalElements <= mod.visibleElements) {
            return false;
        }

        let arrowLeft   = document.createElement('button');
        let arrowRight  = document.createElement('button');

        arrowLeft.setAttribute('type', 'button');
        arrowRight.setAttribute('type', 'button');

        arrowLeft.innerHTML = 'Mover carrusel a la izquierda';
        arrowRight.innerHTML = 'Mover carrusel a la derecha';

        arrowLeft.setAttribute('title', 'Mover carrusel a la izquierda');
        arrowRight.setAttribute('title', 'Mover carrusel a la derecha');

        arrowLeft.classList.add(defaults.classes.arrow);
        arrowLeft.classList.add(defaults.classes.arrowLeft);
        arrowRight.classList.add(defaults.classes.arrow);
        arrowRight.classList.add(defaults.classes.arrowRight);

        if (mod.bulletsArray.length > 0) {
            mod.carousel.insertBefore(arrowLeft, mod.carousel.querySelector('.' + defaults.classes.bullets));
            mod.carousel.insertBefore(arrowRight, mod.carousel.querySelector('.' + defaults.classes.bullets));
        } else {
            mod.carousel.appendChild(arrowLeft);
            mod.carousel.appendChild(arrowRight);
        }

        arrowLeft.addEventListener('click', function() {
            mod.moveCarousel('left');
        });

        arrowRight.addEventListener('click', function() {
            mod.moveCarousel('right');
        });

        mod.arrows = { 'left': arrowLeft, 'right': arrowRight }
        mod.position = 0;
        mod.moveCarouselTo(0);
    }

    /**
     * Move carousel
     *
     * @function moveCarousel
     *
     * @return undefined
     */

    moveCarousel(direction) {
        const mod = this;

        if (direction === 'left') {

            if (mod.position > 0) {
                mod.position--;
            }

        } else {
            
            if (mod.position < mod.elements.length - 1) {
                mod.position++;
            }

        }

        mod.moveCarouselTo(mod.position, direction);
    }

    /**
     * Move carousel to X position
     *
     * @function moveCarouselTo
     *
     * @return undefined
     */

    moveCarouselTo(position, direction) {
        const mod = this;

        mod.position = position;

        mod.list.style.transform = 'translate3d(' + -(100 / mod.elements.length * position) + '%, 0, 0)';

        mod.onChanged.carousel = mod.carousel;
        mod.onChanged.position = position;
        mod.onChanged.direction = direction;
        mod.onChanged.visibleElements = mod.getActiveElements();
		mod.carousel.dispatchEvent(mod.onChanged);

        mod.updateCarousel();
    }

    /**
     * Update arrows and bullets
     *
     * @function updateCarousel
     *
     * @return undefined
     */

    updateCarousel(position) {
        const mod = this;

        if (mod.bulletsArray.length > 0) {
            [].forEach.call(mod.bulletsArray, function(val, key) {

                val.classList.remove(defaults.classes.bulletActive);

            });

            mod.bulletsArray[mod.position].classList.add(defaults.classes.bulletActive);
        }

        if (mod.config.build.arrows === true) {
            mod.carousel.querySelector('.' + defaults.classes.arrowLeft).classList.remove(defaults.classes.arrowDisabled);
            mod.carousel.querySelector('.' + defaults.classes.arrowRight).classList.remove(defaults.classes.arrowDisabled);
            mod.carousel.querySelector('.' + defaults.classes.arrowLeft).removeAttribute('disabled');
            mod.carousel.querySelector('.' + defaults.classes.arrowRight).removeAttribute('disabled');

            if (mod.position <= 0) {
                mod.carousel.querySelector('.' + defaults.classes.arrowLeft).classList.add(defaults.classes.arrowDisabled);
                mod.carousel.querySelector('.' + defaults.classes.arrowLeft).setAttribute('disabled', true);
            } else if (mod.position >= mod.totalElements - mod.visibleElements) {
                mod.carousel.querySelector('.' + defaults.classes.arrowRight).classList.add(defaults.classes.arrowDisabled);
                mod.carousel.querySelector('.' + defaults.classes.arrowRight).setAttribute('disabled', true);
            }
        }

        mod.setActiveElements();

    }

    /**
     * Get active carousel elements
     *
     * @function getActiveElements
     *
     * @return {Array} - Array with active elements 
     */

    getActiveElements() {
        const mod = this;
        let activeElements = [];

        [].forEach.call(mod.elements, element => {
            element.classList.contains(defaults.classes.elementActive) ? activeElements.push(element) : null; 
        });

        return activeElements;
    }
    
    /**
     * Apply class to active carousel elements
     *
     * @function setActiveElements
     *
     * @return undefined
     */

    setActiveElements() {
        const mod = this;

        for (let i = 0; i < mod.totalElements; i++) {
            if (i >= mod.position && i < (mod.position + mod.visibleElements)) {
                mod.elements[i].classList.add(defaults.classes.elementActive);
            } else {
                mod.elements[i].classList.remove(defaults.classes.elementActive);
            }
        }
    }

    /**
     * Destroy carousel functionality and styles
     *
     * @function destroy
     *
     * @return undefined
     */

    destroy() {
        const mod = this;

        //DISPATCH EVENT BEFORE CAROUSEL HAS BEEN DESTROYED
        mod.onAfterDestroy.carousel = mod.carousel;
        mod.onAfterDestroy.position = mod.position;
        mod.onAfterDestroy.visibleElements = mod.getActiveElements();

        mod.carousel.dispatchEvent(mod.onAfterDestroy);

        mod.carousel.classList.remove(defaults.classes.active);

        let arrowLeft   = mod.carousel.querySelector('.' + defaults.classes.arrowLeft);
        let arrowRight  = mod.carousel.querySelector('.' + defaults.classes.arrowRight);
        let bullets     = mod.carousel.querySelector('.' + defaults.classes.bullets);

        if (arrowLeft !== undefined && arrowLeft !== null) {
            mod.carousel.removeChild(arrowLeft);
        }

        if (arrowRight !== undefined && arrowRight !== null) {
            mod.carousel.removeChild(arrowRight);
        }

        if (bullets !== undefined && bullets !== null) {
            mod.carousel.removeChild(bullets);
        }

        mod.list.style.width = '';

        [].forEach.call(mod.elements, function(val, key) {
            val.style.width = '';
            val.classList.remove(defaults.classes.elementActive);
        });

        mod.carousel.classList.add(defaults.classes.loaded);

        //DISPATCH EVENT AFTER CAROUSEL HAS BEEN DESTROYED
        mod.carousel.dispatchEvent(this.onAfterDestroy);
    }
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


const defaults = {
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
        open: `${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}dropdown__select-open`,
        select: 'js-dropdown-select',
        button: 'js-dropdown-button',
        all: 'js-dropdown-button-all',
        less: `${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}dropdown__button-all--less`,
        tick: `${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}dropdown__button-all--tick`
    }
};

/**
 * Dropdown.
 *
 * @module Dropdown
 * @param {Object} properties - specifies the configurations
 * for the module.
 */
class Dropdown {
    constructor(properties = {}) {

        this.$element = properties.$element;
        this.selectors = defaults.selectors;
        this.classes = defaults.classes;
        this.isOpened   = false;
        this.styles = properties.$styles;
    }

    /**
     * Initialise the module.
     *
     * @function init
     *
     * @return undefined
     */
    init() {
        const $selectors = this.selectors;
        let $container = this.$element;
        const input = $container.querySelectorAll($selectors.checkbox);
        let inputList = Array.from(input).map((item) => {
            return {
                check: item,
                label: item.nextElementSibling.innerHTML
            }
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
    bindContainer(inputList) {
        const $selectors = this.selectors;
        const $classes = this.classes;
        const tick = $classes.tick;
        const less = $classes.less;
        let $container = this.$element;
        let all = $container.querySelector($selectors.all);
        let dropdown = $container.querySelector($selectors.dropdown);
        let placeholder = $container.querySelector($selectors.placeholder);
        let text = placeholder.innerHTML;

        document.body.addEventListener('click', e => {
            if (!e.target.closest($selectors.select) && !e.target.closest($selectors.wcselect)) {
                $container.classList.remove($classes.open);
            }
        });

        $container.addEventListener('click', e => {
            let actualTarget = e.target;
            if (actualTarget.classList.contains($classes.button) && $container.classList.contains($classes.open)){
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
                    inputList.forEach (input => {
                        input.check.checked = false;
                    });
                } else {
                    actualTarget.classList.add(tick);
                    actualTarget.innerText = 'Deseleccionar todo';
                    inputList.forEach (input => {
                        input.check.checked = true;
                    });
                }
                this.placeholderText(inputList, text);
            }
        });

        dropdown.addEventListener('keydown', e => {
            if(e.keyCode === 9 && this.isOpened) { // Tab
                e.preventDefault();
            } else if((e.keyCode === 40 || e.keyCode === 38) && !this.isOpened) {
                e.preventDefault();
                
                $container.classList.add($classes.open);;

                all.focus();
            }
        });

        all.addEventListener('keydown', e => {
            if(e.keyCode === 40) { // Arrow Down
                e.preventDefault();
                if(inputList[0]) { 
                    inputList[0].focus() 
                }
            } else if (e.keyCode === 9) {
                e.preventDefault();
            } else if(e.keyCode === 27) { // Escape
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
    bindInputs(inputList) {
        const $selectors = this.selectors;
        const $classes = this.classes;
        const tick = $classes.tick;
        const less = $classes.less;
        let $container = this.$element;
        let all = $container.querySelector($selectors.all);
        let dropdown = $container.querySelector($selectors.dropdown);
        let placeholder = $container.querySelector($selectors.placeholder);
        let text = placeholder.innerHTML;

        [].forEach.call(inputList, (checkInput, key) => {
            const input = checkInput.check;
            input.addEventListener('change', e => {
                let numChecks = inputList.filter(item => item.checked);
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
                this.placeholderText(inputList, text);
            });

            input.addEventListener('keydown', e => {
                if(e.keyCode === 40) { // Arrow Down
                    e.preventDefault();
                    if(key < inputList.length - 1) { inputList[key + 1].focus() }

                } else if(e.keyCode === 38) { // Arrow Up
                    e.preventDefault();
                    if(key > 0) { 
                        inputList[key - 1].focus();
                    } else if (key === 0) {
                        if (all) {
                            all.focus();
                        }
                    }

                } else if(e.keyCode === 13) { // Enter
                    e.preventDefault();

                } else if(e.keyCode === 9) { // Tab
                    e.preventDefault();
                } else if(e.keyCode === 27) { // Escape
                    $container.classList.remove($classes.open);
                    dropdown.focus();
                }
            });
        });
    }

    placeholderText(inputList, text) {
        const $selectors = this.selectors;
        const $container = this.$element;
        let placeholder = $container.querySelector($selectors.placeholder);
        let tagWidth = 84;

        let numVisibleTags = Math.floor(placeholder.offsetWidth / tagWidth);
        let numChecks = inputList.filter(item => item.check.checked);
        let number = numChecks.length - numVisibleTags;

        let loop = numChecks.length > numVisibleTags ? numVisibleTags : numChecks.length;
        
        if (numChecks.length === 0) {
            placeholder.innerHTML = text;
        } else if (numChecks.length > 0) {
            placeholder.innerHTML = '';
            for (let i = 0; i < loop; i++) {
                const textStyles = this.style ? this.style.text : '';
                placeholder.innerHTML += `<p class="${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}dropdown ${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}dropdown__text ${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}paragraph ${textStyles}">${numChecks[i].label}</p>`;
            }
            if (numChecks.length > numVisibleTags && placeholder.querySelector($selectors.number)) {
                placeholder.querySelector($selectors.number).innerHTML = '+ ' + number.toString();
            } else if (numChecks.length > numVisibleTags && !placeholder.querySelector($selectors.number)) {
                const numStyles = this.style ? this.style.num : '';
                placeholder.innerHTML += `<p class="${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}dropdown js-dropdown-number ${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}dropdown__number ${_config_env__WEBPACK_IMPORTED_MODULE_0__["default"].nsPrefix}paragraph ${numStyles}">+ ${number}</p>`;
            }
        }
    }
}


/***/ }),

/***/ "./resources/assets/scripts/es/_eq-height.js":
/*!***************************************************!*\
  !*** ./resources/assets/scripts/es/_eq-height.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EqHeights; });
const defaults = {
    $element: undefined
};

/**
 * EqHeights.
 *
 * @module EqHeights
 * @param {Object} properties - specifies the configurations
 * for the module.
 */
class EqHeights {
    constructor(properties = {}) {
        this.$element = properties.$element;
    }

    /**
     * Initialize module
     *
     * @function init
     *
     * @return undefined
     */

    init($container = this.$element) {
        let selectors = $container.dataset.eqHeight;
        
        if (selectors !== '' && selectors !== undefined && selectors !== null) {
            selectors = selectors.split(',');

            selectors.forEach(selector => { this.responsive(selector) });
        }
    }

    /**
     * Control scope of selectors
     * 
     * @function responsive
     * 
     * @param {String} selector - Selector of elements to detect scope
     * @param {HTMLCollection} elements - HTML elements to set height
     * 
     * @return undefined
     */

    responsive(selector) {
        let breakpoint = '';
        const mod = this;
        const $container = mod.$element;
        let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        selector = selector.trim();

        if(/:responsive$/g.test(selector)) { breakpoint = 'responsive' }
        else if(/:tablet$/g.test(selector)) { breakpoint = 'tablet' }

        selector = selector.replace(`:${breakpoint}`, '');

        switch(breakpoint) {
            case 'responsive':
                mod.eqHeights($container.querySelectorAll(selector));
                break;
            case 'tablet':
                if(windowWidth > 640) { mod.eqHeights($container.querySelectorAll(selector)); }
                break;
            default:
                if(windowWidth > 970) { mod.eqHeights($container.querySelectorAll(selector)); }
                break;
        }
    }
    

    /**
     * Control parallax for elements
     *
     * @function eqHeights
     *
     * @return undefined
     */

    eqHeights(elements) {
        const mod = this;

        let _minH = 0;

        [].forEach.call(elements, val => { _minH = Math.max(_minH, val.scrollHeight) });

        mod.setElementsHeight(elements, _minH);
    }

    /**
     * Set elements min height
     *
     * @function setElementsHeight
     *
     * @return undefined
     */

    setElementsHeight(elements, minHeight) {
        [].forEach.call(elements, val => { val.style.minHeight = minHeight + 'px' });
    }

    /**
     * Remove elements min height
     *
     * @function removeEqHeights
     *
     * @return undefined
     */

    removeMinHeight(elements) {
        [].forEach.call(elements, val => { val.style.minHeight = '' });
    }
}


/***/ }),

/***/ "./resources/assets/scripts/es/_swipe.js":
/*!***********************************************!*\
  !*** ./resources/assets/scripts/es/_swipe.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Swipe; });
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/env */ "./resources/assets/scripts/es/config/env.js");


const defaults = {
    $element: undefined
};

/**
 * Swipe.
 *
 * @module Swipe
 * @param {Object} properties - specifies the configurations
 * for the module.
 */
class Swipe {
    constructor(element) {
        this.xDown = null;
        this.yDown = null;
        this.element = typeof(element) === 'string' ? document.querySelector(element) : element;

        this.element.addEventListener('touchstart', function(evt) {
            this.xDown = evt.touches[0].clientX;
            this.yDown = evt.touches[0].clientY;
        }.bind(this), false);

    }

    onLeft(callback) {
        this.onLeft = callback;

        return this;
    }

    onRight(callback) {
        this.onRight = callback;

        return this;
    }

    onUp(callback) {
        this.onUp = callback;

        return this;
    }

    onDown(callback) {
        this.onDown = callback;

        return this;
    }

    handleTouchMove(evt) {
        if ( ! this.xDown || ! this.yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        this.xDiff = this.xDown - xUp;
        this.yDiff = this.yDown - yUp;

        if ( Math.abs( this.xDiff ) > Math.abs( this.yDiff ) ) { // Most significant.
            if ( this.xDiff > 0 ) {
                this.onLeft();
            } else {
                this.onRight();
            }
        } else {
            if ( this.yDiff > 0 ) {
                this.onUp();
            } else {
                this.onDown();
            }
        }

        // Reset values.
        this.xDown = null;
        this.yDown = null;
    }

    run() {
        this.element.addEventListener('touchmove', function(evt) {
            this.handleTouchMove(evt);
        }.bind(this), false);
    }
}


/***/ }),

/***/ "./resources/assets/scripts/es/config/env.js":
/*!***************************************************!*\
  !*** ./resources/assets/scripts/es/config/env.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const env = {
    nsPrefix: "vfes-"
};
/* harmony default export */ __webpack_exports__["default"] = (env);


/***/ }),

/***/ "./resources/assets/scripts/webComponents/accordion/accordion.js":
/*!***********************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/accordion/accordion.js ***!
  \***********************************************************************/
/*! exports provided: VfesAccordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesAccordion", function() { return VfesAccordion; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _es_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../es/_accordion */ "./resources/assets/scripts/es/_accordion.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
// Import the LitElement base class and html helper function




// Extend the LitElement base class
class VfesAccordion extends _custom__WEBPACK_IMPORTED_MODULE_2__["VfesCustom"] {
  static get properties () {
    return {
      bgColor: { type: String }
    }
  }

  firstUpdated () {
    this.instance = new _es_accordion__WEBPACK_IMPORTED_MODULE_1__["default"]({$element: this.shadowRoot})
    this.instance.init()
  }

  getBgColor () {
    return this.bgColor ? 'vfes-color-bg-' + this.bgColor : ''
  }

  get template () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div data-js="_accordion" class="vfes-accordion js-accordion">
          <div class="vfes-layout__item">
            <div class="vfes-accordion__item js-accordion-item">
              <button class="vfes-accordion__heading js-accordion-heading" aria-expanded="false" aria-controls="accordion-content-0">
                <slot name="title">
              </button>
              <div id="accordion-content-0" class="vfes-accordion__content ${this.getBgColor()}" aria-hidden="true">
                <div>
                <slot name="text"></slot>
                </div>
              </div>
            </div>
          </div>
      </div>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-accordion', VfesAccordion)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/accordion/accordionLinks.js":
/*!****************************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/accordion/accordionLinks.js ***!
  \****************************************************************************/
/*! exports provided: VfesAccordionLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesAccordionLink", function() { return VfesAccordionLink; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
// Import the LitElement base class and html helper function



// Extend the LitElement base class
class VfesAccordionLink extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  get template () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <div class="vfes-accordion__block vfes-accordion__content-block">
      <slot class="vfes-link"></slot>
    </div>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-accordion-link', VfesAccordionLink)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/avatar/avatar.js":
/*!*****************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/avatar/avatar.js ***!
  \*****************************************************************/
/*! exports provided: VfesAvatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesAvatar", function() { return VfesAvatar; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
// Import the LitElement base class and html helper function



// Extend the LitElement base class
class VfesAvatar extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  static get properties () {
    return {
      bgColor: { type: String },
      size: { type: String }
    }
  }

  constructor () {
    super()
    this.bgColor = 'dove-gray'
  }

  get template () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <figure class="vfes-avatar vfes-avatar__icon-${this.size} vfes-color-bg-${this.bgColor}">
          <slot></slot>
      </figure>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-avatar', VfesAvatar)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/avatar/avatarImage.js":
/*!**********************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/avatar/avatarImage.js ***!
  \**********************************************************************/
/*! exports provided: VfesAvatarImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesAvatarImage", function() { return VfesAvatarImage; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
// Import the LitElement base class and html helper function



// Extend the LitElement base class
class VfesAvatarImage extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  static get properties () {
    return {
      src: { type: String },
      alt: { type: String }
    }
  }

  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
    :host {
      align-self: flex-end;
    }`;
  }

  get template () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <img class="vfes-avatar__img vfes-avatar--align vfes-flex__align-self--end" src="${this.src}" alt="${this.alt}"/>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-avatar-image', VfesAvatarImage)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/avatar/avatarText.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/avatar/avatarText.js ***!
  \*********************************************************************/
/*! exports provided: VfesAvatarText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesAvatarText", function() { return VfesAvatarText; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
// Import the LitElement base class and html helper function



// Extend the LitElement base class
class VfesAvatarText extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  static get properties () {
    return {
      size: { type: String }
    }
  }

  get template () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <p class="vfes-avatar vfes-avatar__icon-${this.size} vfes-paragraph vfes-paragraph__text-${this.size} vfes-color--vodafone-white">
      <slot></slot>
    </p>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-avatar-text', VfesAvatarText)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/boloText/boloText.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/boloText/boloText.js ***!
  \*********************************************************************/
/*! exports provided: VfesBoloText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesBoloText", function() { return VfesBoloText; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
// Import the LitElement base class and html helper function



// Extend the LitElement base class
class VfesBoloText extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  static get properties () {
    return {
      size: { type: String },
      sup: { type: String },
      foot: { type: String },
      sub: { type: String },
      priceNum: { type: String },
      priceNumDto: { type: String },
      priceText: { type: String },
      priceTop: { type: String },
      priceBottom: { type: String },
      priceFoot: { type: String },
      priceComplement: { type: String },
      bgColor: { type: String }
    }
  }

  constructor(){
    super();
    this.size = '';
    this.bgColor = 'vodafone-red'
  }

  getSize() {
    const newSize = this.size ? ('vfes-bolo-text--' + this.size) : '';
    return newSize;
  }

  getContent() {
    if (this.sup || this.foot && this.size === 's') {
      return ''
    } else if (this.priceText && this.size !== 's') {
      return 'vfes-bolo-text__content-2'
    } else {
      return 'vfes-bolo-text__content-1'
    }
  }

  get template() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <div class="vfes-bolo-text ${this.getSize()} vfes-color-bg-${this.bgColor}">
      <div class="vfes-bolo-text__content ${this.getContent()}">
        <p class="vfes-bolo-text__sup">${this.sup}</p>
        <div class="vfes-bolo-text__price vfes-flex vfes-flex__direction-row vfes-flex__justify--center">
        
        ${this.priceNum ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<p class="vfes-bolo-text__num vfes-flex vfes-flex__align-items--center"><strong >${this.priceNum}</strong></p>`: ``}
        ${this.priceNumDto ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<p class="vfes-bolo-text__num-dto vfes-flex vfes-flex__align-items--center"><strong >${this.priceNumDto}</strong>
        ${this.priceComplement ? 
          lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div class="vfes-flex vfes-flex__direction--column vfes-flex__justify--center vfes-bolo-text__complement">
                <p class="vfes-bolo-text__percentage"><strong>${this.priceComplement}</strong></p>
              </div>`
          : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}</p>`: ``}
        ${this.priceText ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<p class="vfes-bolo-text__txt vfes-flex vfes-flex__align-items--center"><strong >${this.priceText}</strong></p>`: ``}
        ${this.priceTop || this.priceBottom 
          ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <div class="vfes-flex vfes-flex__direction--column vfes-bolo-text__complement">
              <p class="vfes-bolo-text__decimal"><strong>${this.priceTop}</strong></p>
              <p class="vfes-bolo-text__month vfes-flex__align-self--end"><strong>${this.priceBottom}</strong></p>
            </div>
          `
          : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``
        }
        </div>
        ${this.priceFoot ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<vfes-bolo-text-foot>${this.priceFoot}</vfes-bolo-text-foot>` : ``}
        <p class="vfes-bolo-text__foot">${this.foot}</p>
        <p class="vfes-bolo-text__sub">${this.sub}</p> 
      </div>
  </div>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-bolo-text', VfesBoloText)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/button/button.js":
/*!*****************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/button/button.js ***!
  \*****************************************************************/
/*! exports provided: VfesButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesButton", function() { return VfesButton; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/if-defined.js */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
// Import the LitElement base class and html helper function




// Extend the LitElement base class
class VfesButton extends _custom__WEBPACK_IMPORTED_MODULE_2__["VfesCustom"] {
  static get properties () {
    return {
      type: { type: String },
      text: { type: String },
      name: { type: String },
      title: { type: String },
      disabled: { type: Boolean },
      analitycsElement: { type: String },
      analitycsContext: { type: String }
    }
  }

  get template() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <button 
        type="button" 
        .name="${Object(lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__["ifDefined"])(this.name)}" 
        title="${this.title}" 
        class="vfes-ws10 vfes-button vfes-button--${this.type}" 
        data-analytics-element="${Object(lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__["ifDefined"])(this.analitycsElement)}"
        data-analytics-context="${Object(lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__["ifDefined"])(this.analitycsContext)}"
        data-analytics-category="cta" 
        ?disabled="${this.disabled}">
          <slot></slot>
      </button>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-button', VfesButton)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/button/buttonLink.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/button/buttonLink.js ***!
  \*********************************************************************/
/*! exports provided: VfesButtonLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesButtonLink", function() { return VfesButtonLink; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
// Import the LitElement base class and html helper function



// Extend the LitElement base class
class VfesButtonLink extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  static get properties () {
    return {
      type: { type: String },
      title: { type: String },
      link: { type: String }
    }
  }

  get template() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <a href="${this.link}" title="${this.title}" class="vfes-ws10 vfes-button vfes-button--${this.type}" data-analytics-element=""
        data-analytics-category="cta"><slot></slot></a>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-button-link', VfesButtonLink)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/card/card.js":
/*!*************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/card/card.js ***!
  \*************************************************************/
/*! exports provided: VfesCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesCard", function() { return VfesCard; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");



class VfesCard extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  static get properties () {
    return {
      bgColor: { type: String },
      borderLeft: { type: Boolean },
      noShadow: { type: Boolean },
      borderColor: { type: String },
      borderRadius: { type: Boolean }
    }
  }

  getAdditionalStyles () {
    let styles = ''
    this.bgColor && (styles += ' vfes-colours-bg-' + this.bgColor);
    this.noShadow && (styles += ' vfes-card-no-shadow');
    this.borderLeft && (styles += ' vfes-card-border-left');
    this.borderColor && (styles += ' vfes-card vfes-card-border-' + this.borderColor);
    this.borderRadius && (styles += ' vfes-card-border-radius');
    return styles;
  }

  get template () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <article class="vfes-card ${this.getAdditionalStyles()}" style="height: 188px;">
        <slot></slot>
      </article>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-card', VfesCard)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/card/cardMobile.js":
/*!*******************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/card/cardMobile.js ***!
  \*******************************************************************/
/*! exports provided: VfesCardMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesCardMobile", function() { return VfesCardMobile; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");



class VfesCardMobile extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  static get properties () {
    return {
      imgSrc: { type: String },
      imgAtl: { type: String },
      title: { type: String },
      precioPlazos: { type: String },
      plazos: { type: String },
      pagoInicial: { type: String },
      precioContado: { type: String },
      tag: { type: String }
    }
  }

  getBasicCard () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <img class="vfes-card__mobile-img" src="${this.imgSrc}" alt="${this.imgAtl}">
      <div class="vfes-card__mobile-content">
        <p class="vfes-paragraph vfes-card__mobile-title">${this.title}</p>
        <p class="vfes-paragraph vfes-card__mobile-text">
        ${this.precioPlazos ? 
          lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<span>A plazos desde </span>
          <strong>${this.precioPlazos}</strong>`: ``
        }
        ${this.plazos ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<span>${this.plazos}</span>`: ``}
        ${this.pagoInicial ? 
          lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<span>+ ${this.pagoInicial} pago inicial</span>`
          : ``
        }
        </p>
      ${this.precioContado ?
        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<p class="vfes-paragraph vfes-card__mobile-price-total">
          <span>Al contado desde </span>
          <span class="vfes-title--5">${this.precioContado}</span>
        </p>`: ``}
      </div>
    `
  }

  get template () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="vfes-layout vfes-ws10">
        <div class="vfes-layout__wrapper">
          <div class="vfes-layout__item vfes-1/3 vfes-1/2-palm vfes-1/1-mov">
          ${this.tag ? 
            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div class="vfes-card vfes-card__mobile vfes-card-no-shadow vfes-tag-label vfes-tag-label--red vfes-tag-label--border">
                <div class="vfes-tag-label__outstanding">${this.tag}</div>
                ${this.getBasicCard()}
              </div>` : 
            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <div class="vfes-card vfes-card__mobile vfes-card__mobile--no-border vfes-card-no-shadow">
                ${this.getBasicCard()}
              </div>
            `
          }
          </div>
        </div>
      </div>`
  }
}
// Register the new element with the browser.
customElements.define('vfes-card-mobile', VfesCardMobile)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/carousel/carousel.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/carousel/carousel.js ***!
  \*********************************************************************/
/*! exports provided: VfesCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesCarousel", function() { return VfesCarousel; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
/* harmony import */ var _es_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../es/_carousel */ "./resources/assets/scripts/es/_carousel.js");
// Import the LitElement base class and html helper function




// Extend the LitElement base class
class VfesCarousel extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  static get properties () {
    return {
      config: { type: Object }
    }
  }

  firstUpdated () {
    this.updateComplete.then(() => {
      const carouselItems = this.querySelectorAll('vfes-carousel-item')
      const slides = Array.from(carouselItems).map(item => item.shadowRoot.querySelector('li'))
      this.instance = new _es_carousel__WEBPACK_IMPORTED_MODULE_2__["default"]({
        $element: this.shadowRoot.getElementById('carousel'),
        config: JSON.stringify(this.config),
        listItems: slides
      })
      this.instance.init()
    })
  }

  constructor () {
    super()
    this.config = {
      responsive: {
        0: {
          breakpoint: 0,
          elements: 1
        },
        1: {
          breakpoint: 640,
          elements: 2
        },
        2: {
          breakpoint: 970,
          elements: 3
        }
      },
      build: {
        arrows: true,
        bullets: true,
        clickable_bullets: true
      }
    }
  }

  get template () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div>
        <div id="carousel" class='vfes-carousel'>
          <ul class='vfes-carousel__list js-carousel-list'>
            <slot></slot>
          </ul>
        </div>
    </div>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-carousel', VfesCarousel)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/carousel/carouselItem.js":
/*!*************************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/carousel/carouselItem.js ***!
  \*************************************************************************/
/*! exports provided: VfesCarouselItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesCarouselItem", function() { return VfesCarouselItem; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
// Import the LitElement base class and html helper function



// Extend the LitElement base class
class VfesCarouselItem extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  static get properties () {
    return {
      bgColor: { type: String },
      height: { type: String }
    }
  }

  get template () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <li class='vfes-carousel--active vfes-carousel__list-element js-carousel-list-element' style="width: 20%">
        <div style='height: ${this.height}; background: ${this.bgColor}'>
          <slot></slot>
        </div>
      </li>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-carousel-item', VfesCarouselItem)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/custom.js":
/*!**********************************************************!*\
  !*** ./resources/assets/scripts/webComponents/custom.js ***!
  \**********************************************************/
/*! exports provided: VfesCustom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesCustom", function() { return VfesCustom; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");



// Extend the LitElement base class
class VfesCustom extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  render () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <link rel="stylesheet" type="text/css" href="/microsites/es/01-particulares/02-movil/04-iot/css/main.css">

    ${this.template}
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-custom', VfesCustom)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/dropdown/dropdown.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/dropdown/dropdown.js ***!
  \*********************************************************************/
/*! exports provided: VfesDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesDropdown", function() { return VfesDropdown; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _es_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../es/_dropdown */ "./resources/assets/scripts/es/_dropdown.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
// Import the LitElement base class and html helper function




// Extend the LitElement base class
class VfesDropdown extends _custom__WEBPACK_IMPORTED_MODULE_2__["VfesCustom"] {
  static get properties () {
    return {
      legend: { type: String },
      label: { type: String },
      placeholder: { type: String },
      disabled: { type: Boolean },
      state: { type: String },
      placeholderTextStyle: { type: String },
      placeholderTextColor: { type: String },
      placeholderNumStyle: { type: String }
    }
  }

  constructor () {
    super()
    this.legend = ''
    this.label = ''
    this.placeholder = ''
    this.disabled = false
  }

  getState () {
    return this.state ? 'vfes-dropdown__select--' + this.state : ''
  }

  getPlaceholderTextStyle () {
    const styles = this.placeholderTextStyle ? this.placeholderTextStyle.split(' ') : []
    const textStyles = styles.reduce((total, current) => {
      total += ' vfes-dropdown__text--' + current
      return total
    }, '')
    return textStyles.substring(1)
  }

  getPlaceholdersTextColor () {
    return this.placeholderTextColor ? 'vfes-dropdown--color-' + this.placeholderTextColor : ''
  }

  getPlaceholdersNumStyle () {
    return this.placeholderNumStyle ? 'vfes-dropdown__number--' + this.placeholderNumStyle : ''
  }

  getPlaceholderStyles () {
    let styles = ''
    const textStyle = this.getPlaceholderTextStyle()
    const textColor = this.getPlaceholdersTextColor()
    const numStyle = this.getPlaceholdersNumStyle()
    textStyle && (styles += textStyle + ' ')
    textColor && (styles += textColor + ' ')
    return {
      text: styles,
      num: numStyle
    }
  }

  firstUpdated () {
    const element = this.shadowRoot
    const dropdown = element.querySelector('[name="dropdown"]')
    const styles = this.getPlaceholderStyles()
    this.instance = new _es_dropdown__WEBPACK_IMPORTED_MODULE_1__["default"]({$element: dropdown, $styles: styles})
    this.updateComplete.then(() => {
      const optionList = this.querySelectorAll('vfes-dropdown-item')
      const inputList = Array.from(optionList).map((item) => {
        return {
          check: item.shadowRoot.querySelector('.js-dropdown-checkbox'),
          label: item.innerHTML
        }
      })
      this.instance.bindContainer(inputList)
      this.instance.bindInputs(inputList)
    })
  }

  get template () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <div class="vfes-layout__item">
      <form class="vfes-form" action="" method="">
        <fieldset class="vfes-form__box">
          <legend class="visually-hidden">${this.legend}</legend>

          <!-- [ START ] Componente dropdown  -->
          <div class="js-dropdown-select vfes-dropdown__select ${this.getState()}" data-js="_dropdown" name="dropdown" value="opcion-1">
            <button ?disabled=${this.disabled} class="js-dropdown-button vfes-dropdown__select-value" role="combobox" aria-autocomplete="none" aria-owns="combobox-list" aria-expanded="false" aria-labelledby="combobox-label" aria-required="none" aria-activedescendant="default">
              <p class="vfes-paragraph vfes-paragraph--large">
                  <strong>${this.label}</strong>
              </p>
              <div class="js-dropdown-placeholder vfes-dropdown__placeholder"><p class="vfes-paragraph vfes-paragraph--large">${this.placeholder}</p></div>
            </button>
            <ul class="vfes-dropdown__select-list js-dropdown-list" role="listbox" id="combobox-list">
              <li class="js-dropdown-option" value="opcion-0" role="option" id="default">
                  <button class="js-dropdown-button-all vfes-dropdown__select-list-item vfes-dropdown__button-all">Seleccionar todo</button> 
              </li>
              <slot></slot>
            </ul>
          </div>
        </fieldset>
      </form>
    </div>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-dropdown', VfesDropdown)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/dropdown/dropdownCard.js":
/*!*************************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/dropdown/dropdownCard.js ***!
  \*************************************************************************/
/*! exports provided: VfesDropdownCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesDropdownCard", function() { return VfesDropdownCard; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./resources/assets/scripts/webComponents/icon.js");
/* harmony import */ var _form_checkItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form/checkItem */ "./resources/assets/scripts/webComponents/form/checkItem.js");
// Import the LitElement base class and html helper function





// Extend the LitElement base class
class VfesDropdownCard extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  static get properties () {
    return {
      title: { type: String },
      date: { type: String },
      tags: { type: Array },
      amount: { type: String },
      checkId: { type: String },
      checkName: { type: String },
      checkValue: { type: String }
    }
  }

  getTags () {
    console.log(this.tags.length)
    this.tags.map(item => console.log(item))
    return this.tags
  }

  get template () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="vfes-layout__item">
        <vfes-check-item 
            class="vfes-dropdown__cards"
            labelClass="vfes-dropdown__cards-label vfes-form__label--column"
            slot="title" 
            id="${this.checkId}" 
            name="${this.checkName}" 
            value="${this.checkName}"
            labelClass="vfes-form__label"
            noWs10>
          <p class="vfes-paragraph">
              <vfes-icon 
                class="vfes-dropdown__cards-icon"
                title="Business"
                icon="icon3-bill-or-report" 
                width="24px" 
                height="24px">
              </vfes-icon>
              ${this.title}
            </p>
            <p class="vfes-paragraph vfes-dropdown__left vfes-dropdown__date">${this.date}</p>
            ${this.tags.map(item => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<p class="vfes-dropdown vfes-dropdown__left vfes-dropdown--color-ligth-green vfes-dropdown__text vfes-paragraph">${item}</p>`)}
            <p class="vfes-paragraph vfes-paragraph--large vfes-dropdown-text-rigth"><strong>${this.amount}</strong></p>
        </vfes-check-item>
      </div>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-dropdown-card', VfesDropdownCard)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/dropdown/dropdownItem.js":
/*!*************************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/dropdown/dropdownItem.js ***!
  \*************************************************************************/
/*! exports provided: VfesDropdownItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesDropdownItem", function() { return VfesDropdownItem; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
// Import the LitElement base class and html helper function



// Extend the LitElement base class
class VfesDropdownItem extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  static get properties () {
    return {
      id: { type: String },
      name: { type: String },
      value: { type: String }
    }
  }

  get template () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <li class="vfes-dropdown__select-open js-dropdown-option" value="${this.value}" role="option">
      <div class="vfes-dropdown__box">
      <input 
        class="js-dropdown-checkbox vfes-form__checkbox" 
        type="checkbox" 
        id="${this.id}" 
        name="${this.name}" 
        value="${this.value}">
      <label class="vfes-dropdown__select-list-item vfes-form__label" for="${this.id}">
        <slot></slot>
      </label>
      </div>
    </li>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-dropdown-item', VfesDropdownItem)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/dropdown/dropdownTiles.js":
/*!**************************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/dropdown/dropdownTiles.js ***!
  \**************************************************************************/
/*! exports provided: VfesDropdownTiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesDropdownTiles", function() { return VfesDropdownTiles; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./resources/assets/scripts/webComponents/icon.js");
/* harmony import */ var _form_checkItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form/checkItem */ "./resources/assets/scripts/webComponents/form/checkItem.js");
// Import the LitElement base class and html helper function





// Extend the LitElement base class
class VfesDropdownTiles extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  static get properties () {
    return {
      title: { type: String },
      date: { type: String },
      tags: { type: Array },
      amount: { type: String },
      checkId: { type: String },
      checkName: { type: String },
      checkValue: { type: String }
    }
  }

  getTags () {
    console.log(this.tags.length)
    this.tags.map(item => console.log(item))
    return this.tags
  }

  get template () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="vfes-dropdown__select-open vfes-dropdown__tiles">
        <div class="vfes-form__box vfes-dropdown__border vfes-box-shadow">
        <vfes-check-item 
            slot="title" 
            id="${this.checkId}" 
            name="${this.checkName}" 
            value="${this.checkName}"
            labelClass="vfes-dropdown__tiles"
            noWs10>
            <p class="vfes-paragraph">
              <vfes-icon 
                class="vfes-dropdown__tiles-icon"
                title="Business"
                icon="icon3-bill-or-report" 
                width="24px" 
                height="24px">
              </vfes-icon>
              ${this.title}
            </p>
            ${this.tags.map(item => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<p class="vfes-dropdown vfes-dropdown__left vfes-dropdown--color-ligth-green vfes-dropdown__text vfes-paragraph">${item}</p>`)}
            <p class="vfes-paragraph vfes-dropdown__left vfes-dropdown__date">${this.date}</p>
            <p class="vfes-paragraph vfes-paragraph--large vfes-dropdown-text-rigth">${this.amount}</p>
          </vfes-check-item>
        </div>
      </div>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-dropdown-tiles', VfesDropdownTiles)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/form/autocompleteItem.js":
/*!*************************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/form/autocompleteItem.js ***!
  \*************************************************************************/
/*! exports provided: VfesAutocompleteItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesAutocompleteItem", function() { return VfesAutocompleteItem; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./resources/assets/scripts/webComponents/icon.js");
// Import the LitElement base class and html helper function




// Extend the LitElement base class
class VfesAutocompleteItem extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
    :host {
      width: 100%;
    }`;
  }

  get template () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <li 
      role="option" 
      class="">
        <slot></slot>
      </li>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-autocomplete-item', VfesAutocompleteItem)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/form/checkItem.js":
/*!******************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/form/checkItem.js ***!
  \******************************************************************/
/*! exports provided: VfesCheckItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesCheckItem", function() { return VfesCheckItem; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/if-defined.js */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
// Import the LitElement base class and html helper function




// Extend the LitElement base class
class VfesCheckItem extends _custom__WEBPACK_IMPORTED_MODULE_2__["VfesCustom"] {
  static get properties () {
    return {
      id: {
        type: String,
        attribute: true
      },
      name: {
        type: String,
        attribute: true
      },
      checked: { 
        type: Boolean,
        attribute: true
      },
      labelClass: { type: String },
      disabled: { type: Boolean },
      alignRight: { type: Boolean },
      noWs10: { type: Boolean }
    }
  }

  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
    :host {
      width: 100%;
    }`;
  }

  getAlign () {
    return this.alignRight ? 'vfes-form__checkbox--right' : ''
  }

  updateCheckValue (e) {
    this.checked = e.target.checked
  }

  get template () {
    const id = 'checkbox-' + (Math.floor(Math.random() * 9000000000) + 1000000000)
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <input 
      class="${this.noWs10 ? '' : 'vfes-ws10'} vfes-form__checkbox ${this.getAlign()}" 
      type="checkbox" 
      id=${id}
      .name=${Object(lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__["ifDefined"])(this.name)}
      .checked=${this.checked}
      ?disabled=${this.disabled}
      @change="${this.updateCheckValue}">
    <label class="vfes-form__label ${this.labelClass ? this.labelClass : ''}" for="${id}">
      <slot></slot>
    </label>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-check-item', VfesCheckItem)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/form/inputAutocomplete.js":
/*!**************************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/form/inputAutocomplete.js ***!
  \**************************************************************************/
/*! exports provided: VfesInputAutocomplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesInputAutocomplete", function() { return VfesInputAutocomplete; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
/* harmony import */ var _es_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../es/_autocomplete */ "./resources/assets/scripts/es/_autocomplete.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "./resources/assets/scripts/webComponents/icon.js");
// Import the LitElement base class and html helper function





// Extend the LitElement base class
class VfesInputAutocomplete extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  firstUpdated () {
    const options = Array.from(this.querySelectorAll('vfes-autocomplete-item')).map(item => item.shadowRoot)
    const config = {
      $element: this.shadowRoot.querySelector('.js-form-autocomplete'),
      $options: options
    }
    this.instance = new _es_autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"](config)
    this.instance.init()
  }

  static get properties () {
    return {
      id: {
        type: String,
        attribute: true
      },
      name: {
        type: String,
        attribute: true
      },
      value: { type: String },
      disabled: {
        type: Boolean,
        attribute: true
      },
      placeholder: { type: String },
      idLabel: { type: String },
      locate: { type: Boolean },
      buttonLabel: { type: String },
      ariaLabelledBy: {
        type: String,
        attribute: true
      }
    }
  }

  constructor () {
    super()
    this.placeholder = ''
    this.value = ''
    this.buttonLabel = ''
  }

  isLocate () {
    return this.locate ? 'autocomplete' : 'dropdown'
  }

  get template () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <div>
      <input 
        class="vfes-ws10 vfes-form__input vfes-form__input--${this.isLocate()} js-form-autocomplete" 
        .aria-labelledby="${this.ariaLabelledBy}" 
        type="text" 
        .id="${this.id}" 
        aria-autocomplete="both" 
        aria-expanded="false" 
        aria-owns="vfes-autocomplete" 
        .name="${this.name}" 
        .value="${this.value}" 
        placeholder="${this.placeholder}" 
        autocomplete="off"/>
      <span class="vfes-form__label" id="${this.idLabel}">
        <slot name="label"></slot>
      </span>
      ${this.locate ? 
        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<button type="button" class="vfes-form__icon vfes-form__icon-search" aria-label="${this.buttonLabel}">
        <vfes-icon 
        class="vfes-form__input--autocomplete" 
        width='32px' 
        height='32px' 
        title="Locate" icon='icon3-locate-me'></vfes-icon></button>` :
        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<vfes-icon 
        class="vfes-form__input--dropdown vfes-form__icon vfes-form__icon-down" 
        width='32px' 
        height='32px' 
        title="Warning" icon='icon3-chevron-down'></vfes-icon>  
        <vfes-icon 
        class="vfes-form__input--dropdown vfes-form__icon vfes-form__icon-up" 
        width='32px' 
        height='32px' 
        title="Warning" icon='icon3-chevron-up'></vfes-icon>`}
      <ul 
        id="vfes-autocomplete" 
        name="vfes-autocomplete" 
        role="listbox" 
        class="vfes-ws10 vfes-form__autocomplete-list js-form-autocomplete-list" name="options">
        <slot name="options"></slot>
      </ul>
    </div>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-input-autocomplete', VfesInputAutocomplete)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/form/inputItem.js":
/*!******************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/form/inputItem.js ***!
  \******************************************************************/
/*! exports provided: VfesInputItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesInputItem", function() { return VfesInputItem; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./resources/assets/scripts/webComponents/icon.js");
// Import the LitElement base class and html helper function




// Extend the LitElement base class
class VfesInputItem extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  static get properties () {
    return {
      id: {
        type: String,
        attribute: true
      },
      name: {
        type: String,
        attribute: true
      },
      value: { 
        type: String,
        attribute: true
      },
      disabled: { type: Boolean },
      ariaLabelled: { type: String },
      placeholder: { type: String },
      state: { type: String },
      idLabel: { type: String }
    }
  }

  constructor () {
    super()
    this.ariaLabelled = ''
    this.placeholder = ''
    this.value = ''
    this.state = ''
  }

  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
    :host {
      width: 100%;
    }`;
  }

  getState () {
    return this.state ? 'vfes-form__input--' + this.state : ''
  }

  updateInput (e) {
    this.value = e.target.value
  }

  get template () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <input 
      @change="${this.updateInput}"
      class="vfes-ws10 vfes-form__input ${this.getState()}"
      type="text" 
      .id="${this.id}" 
      .name="${this.name}" 
      .value="${this.value}"
      ?disabled=${this.disabled}
      aria-labelled="${this.ariaLabelled}"
      placeholder="${this.placeholder}">
    <span class="vfes-form__label" id="${this.idLabel}">
      <slot name="label"></slot>
    </span>
    <p class="vfes-form__error-text">
      <slot name="errorValidation"></slot>
    </p>
    <vfes-icon 
      class="vfes-form__icon vfes-form__icon-warning" 
      width='32px' 
      height='32px' 
      title="Warning" icon='icon3-warning'></vfes-icon>
    <vfes-icon 
    class="vfes-form__icon vfes-form__icon-tick" 
    width='32px' 
    height='32px' 
    title="Warning" icon='icon3-tick-or-solved'></vfes-icon>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-input-item', VfesInputItem)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/form/radioItem.js":
/*!******************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/form/radioItem.js ***!
  \******************************************************************/
/*! exports provided: VfesRadioItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesRadioItem", function() { return VfesRadioItem; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
// Import the LitElement base class and html helper function



// Extend the LitElement base class
class VfesRadioItem extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  static get properties () {
    return {
      name: {
        type: String,
        attribute: true
      },
      value: {
        type: String,
        attribute: true
      },
      checked: {
        type: Boolean,
        attribute: true
      },
      disabled: {
        type: Boolean,
        attribute: true
      },
      alignRight: { type: Boolean }
    }
  }

  static get styles () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
    :host {
      width: 100%;
    }`;
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('radio-changed', this.handleChange);
  }
  disconnectedCallback() {
    document.removeEventListener('radio-changed', this.handleChange);
    super.disconnectedCallback();
  }

  getAlign () {
    return this.alignRight ? 'vfes-form__radio--right' : ''
  }

  handleChange (e) {
    const radios = this.querySelectorAll('vfes-radio-item[name="'+e.target.name+'"]')
    radios.forEach(radio => {
      if (radio.id != e.target.id) {
        radio.checked = false
      }
    })
  }

  updateRadio (e) {
    let event = new CustomEvent('radio-changed', {
      detail: {
        message: 'radio changed'
      },
      bubbles: true
    });
    this.dispatchEvent(event);
    this.checked = e.target.checked
  }

  get template () {
    const id = 'radio-' + (Math.floor(Math.random() * 9000000000) + 1000000000)
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <input 
      @radio-changed="${this.handleChange}"
      @change="${this.updateRadio}"
      class="vfes-ws10 vfes-form__radio ${this.getAlign()}" 
      type="radio" 
      id="${id}" 
      .name="${this.name}" 
      .value="${this.value}"
      .checked=${this.checked}
      ?disabled=${this.disabled}>
    <label class="vfes-form__label" for="${id}">
      <slot></slot>
    </label>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-radio-item', VfesRadioItem)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/form/switchItem.js":
/*!*******************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/form/switchItem.js ***!
  \*******************************************************************/
/*! exports provided: VfesSwitchItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesSwitchItem", function() { return VfesSwitchItem; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
// Import the LitElement base class and html helper function



// Extend the LitElement base class
class VfesSwitchItem extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  static get properties () {
    return {
      name: {
        type: String,
        attribute: true
      },
      checked: {
        type: Boolean,
        attribute: true
      },
      disabled: { type: Boolean },
      size: { type: String }
    }
  }

  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
    :host {
      width: 100%;
    }`;
  }

  getSize () {
    return 'vfes-form__switch--' + this.size
  }

  updateSwitch (e) {
    this.checked = e.target.checked
  }

  get template () {
    const id = 'checkbox-' + (Math.floor(Math.random() * 9000000000) + 1000000000)
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <input 
      @change="${this.updateSwitch}"
      class="vfes-ws10 vfes-form__switch ${this.getSize()}" 
      type="checkbox" 
      id="${id}" 
      .name="${this.name}" 
      .checked="${this.checked}"
      ?disabled=${this.disabled}>
    <label class="vfes-form__switch-label" for="${id}">
      <slot></slot>
    </label>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-switch-item', VfesSwitchItem)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/icon.js":
/*!********************************************************!*\
  !*** ./resources/assets/scripts/webComponents/icon.js ***!
  \********************************************************/
/*! exports provided: VfesIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesIcon", function() { return VfesIcon; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom */ "./resources/assets/scripts/webComponents/custom.js");
// Import the LitElement base class and html helper function



// Extend the LitElement base class
class VfesIcon extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  static get properties () {
    return {
      title: { type: String },
      class: { type: String },
      icon: { type: String },
      height: { type: String },
      width: { type: String }
    }
  }

  static get styles() {    
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host { 
        height: ${Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["unsafeCSS"])(this.height)};
      }
    `;
  } 

  firstUpdated () {
    const namespace = 'http://www.w3.org/1999/xlink'
    const svgPath = '/public/svg/sprite.v3.svg'
    let useelement = this.shadowRoot.querySelector('use')
    useelement.setAttributeNS(namespace, 'xlink:href', svgPath + '#' + this.icon)
  }

  get template () {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${lit_element__WEBPACK_IMPORTED_MODULE_0__["svg"]`<svg class="${this.class}" height="${this.height}" width="${this.width}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>${this.title}</title>
        <use class="icon-v3" xlink:href=""></use>
      </svg>`}
      `
  }
}
// Register the new element with the browser.
customElements.define('vfes-icon', VfesIcon)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/tagLabel/tagLabel.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/tagLabel/tagLabel.js ***!
  \*********************************************************************/
/*! exports provided: VfesTagLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfesTagLabel", function() { return VfesTagLabel; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom */ "./resources/assets/scripts/webComponents/custom.js");
// Import the LitElement base class and html helper function



// Extend the LitElement base class
class VfesTagLabel extends _custom__WEBPACK_IMPORTED_MODULE_1__["VfesCustom"] {
  static get properties () {
    return {
      color: { type: String },
      border: { type: Boolean },
      alignRight: { type: Boolean }
    }
  }

  getBorder () {
    return this.border ? 'vfes-tag-label--border' : ''
  }

  getAlign () {
    return this.alignRight ? 'vfes-tag-label--right' : ''
  }

  get template() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="vfes-ws10 vfes-layout">
        <div class="vfes-layout__wrapper">
          <div class="vfes-layout__item" style="padding:24px">
              <div class="vfes-tag-label vfes-tag-label--${this.color} ${this.getBorder()} ${this.getAlign()}" style="padding:24px">
                  <div class="vfes-tag-label__outstanding"><slot name="tag"></slot></div>
                      <slot name="content"></slot>
              </div>
          </div>
        </div>
      </div>
    `
  }
}
// Register the new element with the browser.
customElements.define('vfes-tag-label', VfesTagLabel)


/***/ }),

/***/ "./resources/assets/scripts/webComponents/vf-components.js":
/*!*****************************************************************!*\
  !*** ./resources/assets/scripts/webComponents/vf-components.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom.js */ "./resources/assets/scripts/webComponents/custom.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.js */ "./resources/assets/scripts/webComponents/icon.js");
/* harmony import */ var _accordion_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion/accordion.js */ "./resources/assets/scripts/webComponents/accordion/accordion.js");
/* harmony import */ var _accordion_accordionLinks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion/accordionLinks.js */ "./resources/assets/scripts/webComponents/accordion/accordionLinks.js");
/* harmony import */ var _avatar_avatar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./avatar/avatar.js */ "./resources/assets/scripts/webComponents/avatar/avatar.js");
/* harmony import */ var _avatar_avatarImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./avatar/avatarImage.js */ "./resources/assets/scripts/webComponents/avatar/avatarImage.js");
/* harmony import */ var _avatar_avatarText_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./avatar/avatarText.js */ "./resources/assets/scripts/webComponents/avatar/avatarText.js");
/* harmony import */ var _boloText_boloText_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./boloText/boloText.js */ "./resources/assets/scripts/webComponents/boloText/boloText.js");
/* harmony import */ var _button_button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./button/button.js */ "./resources/assets/scripts/webComponents/button/button.js");
/* harmony import */ var _button_buttonLink_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./button/buttonLink.js */ "./resources/assets/scripts/webComponents/button/buttonLink.js");
/* harmony import */ var _card_card_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card/card.js */ "./resources/assets/scripts/webComponents/card/card.js");
/* harmony import */ var _card_cardMobile_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./card/cardMobile.js */ "./resources/assets/scripts/webComponents/card/cardMobile.js");
/* harmony import */ var _carousel_carousel_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./carousel/carousel.js */ "./resources/assets/scripts/webComponents/carousel/carousel.js");
/* harmony import */ var _carousel_carouselItem_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./carousel/carouselItem.js */ "./resources/assets/scripts/webComponents/carousel/carouselItem.js");
/* harmony import */ var _dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dropdown/dropdown.js */ "./resources/assets/scripts/webComponents/dropdown/dropdown.js");
/* harmony import */ var _dropdown_dropdownItem_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dropdown/dropdownItem.js */ "./resources/assets/scripts/webComponents/dropdown/dropdownItem.js");
/* harmony import */ var _dropdown_dropdownCard_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dropdown/dropdownCard.js */ "./resources/assets/scripts/webComponents/dropdown/dropdownCard.js");
/* harmony import */ var _dropdown_dropdownTiles_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dropdown/dropdownTiles.js */ "./resources/assets/scripts/webComponents/dropdown/dropdownTiles.js");
/* harmony import */ var _form_autocompleteItem_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form/autocompleteItem.js */ "./resources/assets/scripts/webComponents/form/autocompleteItem.js");
/* harmony import */ var _form_checkItem_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./form/checkItem.js */ "./resources/assets/scripts/webComponents/form/checkItem.js");
/* harmony import */ var _form_inputAutocomplete_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./form/inputAutocomplete.js */ "./resources/assets/scripts/webComponents/form/inputAutocomplete.js");
/* harmony import */ var _form_inputItem_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./form/inputItem.js */ "./resources/assets/scripts/webComponents/form/inputItem.js");
/* harmony import */ var _form_radioItem_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./form/radioItem.js */ "./resources/assets/scripts/webComponents/form/radioItem.js");
/* harmony import */ var _form_switchItem_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./form/switchItem.js */ "./resources/assets/scripts/webComponents/form/switchItem.js");
/* harmony import */ var _tagLabel_tagLabel_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tagLabel/tagLabel.js */ "./resources/assets/scripts/webComponents/tagLabel/tagLabel.js");


























/***/ })

/******/ });
//# sourceMappingURL=vf-components.js.map