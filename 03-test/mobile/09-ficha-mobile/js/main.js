/**
 * Vodafone Reboot Framework: Version 2.2.2. Generation Date: 2020-05-13T07:52:37.058Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_common.js":
/*!*********************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_common.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Common; });
const defaults = {
  $element: undefined,
  selectors: {
    accordion: {
      show: '.js-common-accordion-show',
      hide: '.js-common-accordion-hide'
    }
  },
  classes: {
    hide: 'hide'
  }
};
/**
 * Common.
 *
 * @module Common
 * @param {Object} properties - specifies the configurations for the module.
 */

class Common {
  constructor(properties = {}) {
    this.$element = properties.$element;
    this.selectors = defaults.selectors;
    this.classes = defaults.classes;
    this.onChange = new Event('vfes:changed');
  }
  /**
   * Initialize the module.
   *
   * @function init
   *
   * @return undefined
   */


  init() {
    if (!this.$element.hasAttribute('data-common-function')) {
      throw 'Falta el atributo "data-common-function" en el elemento.';
    }

    switch (this.$element.getAttribute('data-common-function')) {
      case 'accordion':
        this.accordion();
        break;
    }
  }
  /**
   * Accordion module
   *
   * @function accordion
   *
   * @return undefined
   */


  accordion() {
    const mod = this.$element;
    [].forEach.call(mod.querySelectorAll('[data-common-accordion="button"]'), button => {
      if (!button.hasAttribute('data-initialized')) {
        if (!button.hasAttribute('aria-controls')) {
          throw 'ACCORDION ERROR! El elemento no tiene el atributo "aria-controls" con el id de su contenido.';
        }

        if (!mod.querySelector(`#${button.getAttribute('aria-controls')}`)) {
          throw `ACCORDION ERROR! El elemento cuyo id es ${mod.getAttribute('aria-controls')} no existe.`;
        }

        if (!button.querySelector(this.selectors.accordion.show)) {
          throw `ACCORDION ERROR! Debe incluir en el botón un elemento con la clase ${this.selectors.accordion.show} para identificar el texto de apertura`;
        }

        if (!button.querySelector(this.selectors.accordion.hide)) {
          throw `ACCORDION ERROR! Debe incluir en el botón un elemento con la clase ${this.selectors.accordion.hide} para identificar el texto de cierre`;
        }

        button.setAttribute('data-initialized', 'true');
        button.hasAttribute('aria-expanded') ? null : button.setAttribute('aria-expanded', 'false');

        if (button.getAttribute('aria-expanded') === 'true') {
          this.accordionShowContent(button);
        } else {
          this.accordionHideContent(button);
        }

        button.addEventListener('click', () => this.accordionBind(mod, button));
      }
    });
  }
  /**
   * Accordion handler.
   *
   * @function accordionBind
   *
   * @return undefined
   */


  accordionBind(mod, button) {
    let buttonOpened = mod.querySelector('[data-common-accordion="button"][aria-expanded="true"]');
    buttonOpened && buttonOpened !== button ? this.accordionHideContent(buttonOpened) : null;

    if (button.getAttribute('aria-expanded') === 'true') {
      this.accordionHideContent(button);
    } else {
      this.accordionShowContent(button);
    }
  }
  /**
   * Show content from an item from accordion.
   *
   * @function accordionShowContent
   * @param { HTMLElement } button - item from accordion
   * @return undefined
   */


  accordionShowContent(button) {
    button.querySelector(this.selectors.accordion.hide).classList.remove(this.classes.hide);
    button.querySelector(this.selectors.accordion.show).classList.add(this.classes.hide);
    button.setAttribute('aria-expanded', 'true');
    this.$element.querySelector(`#${button.getAttribute('aria-controls')}`).setAttribute('aria-hidden', 'false');
    this.$element.querySelector(`#${button.getAttribute('aria-controls')}`).classList.remove(this.classes.hide);
  }
  /**
   * Hide content from an item from accordion.
   *
   * @function accordionHideContent
   * @param { HTMLElement } button - item from accordion
   * @return undefined
   */


  accordionHideContent(button) {
    button.querySelector(this.selectors.accordion.show).classList.remove(this.classes.hide);
    button.querySelector(this.selectors.accordion.hide).classList.add(this.classes.hide);
    button.setAttribute('aria-expanded', 'false');
    this.$element.querySelector(`#${button.getAttribute('aria-controls')}`).setAttribute('aria-hidden', 'true');
    this.$element.querySelector(`#${button.getAttribute('aria-controls')}`).classList.add(this.classes.hide);
  }

}

/***/ }),

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_configurator.js":
/*!***************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_configurator.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Configurator; });
/**
 * El configurador por dentro tiene tres tipos de componentes:
 *  1. El componente principal que hace que se modifiquen el resto de elementos.
 *  2. El componente que es un elemento en si que se añade o se quita directamente.
 *  3. EL componente counter que es un contador de elementos.
 */
const defaults = {
  $element: undefined,
  selectors: {
    add: '.js-configurator-add',
    added: '.added',
    button: '.js-card-selector-button',
    block: '.js-configurator-block',
    counter: '.js-configurator-counter',
    counterNum: '.js-counter-num',
    description: '.js-description',
    element: '.js-configurator-element',
    less: '.js-counter-less',
    more: '.js-counter-more',
    price: '.js-price',
    remove: '.js-configurator-remove',
    single: '.js-configurator-single-viewed',
    ticket: '.js-configurator-ticket',
    title: '.js-title'
  },
  classes: {
    added: 'added',
    counter: 'js-configurator-counter',
    hide: 'hide',
    add: 'add',
    main: 'js-configurator-main'
  }
};
/**
 * Configurator.
 *
 * @module Configurator
 * @param {Object} properties - specifies the configurations for the module.
 */

class Configurator {
  constructor(properties = {}) {
    this.configurator = properties.$element;
    this.info = JSON.parse(properties.info);
    this.selectors = defaults.selectors;
    this.classes = defaults.classes;
    this.maxPos = 3; //Events

    this.onChange = new Event('vfms:change');
  }
  /**
   * Initialize the module.
   *
   * @function init
   *
   * @return undefined
   */


  init() {
    const mod = this;
    [].forEach.call(mod.configurator.querySelectorAll(mod.selectors.counter), container => {
      mod.activeCounter(container);
    });
    mod.bind();
  }
  /**
   * Active basic functionality from config.
   *
   * @function bind
   *
   * @return undefined
   */


  bind() {
    this.addButtonsHandler();
    this.removeButtonsHandler();
    this.ticketHandler();
  }
  /**
   * Add buttons handler
   *
   * @function addButtonsHandler
   *
   * @return undefined
   */


  addButtonsHandler() {
    const mod = this;
    const addButtons = mod.configurator.querySelectorAll(`${mod.selectors.element} ${mod.selectors.add}`);
    [].forEach.call(addButtons, button => {
      let message = "";
      let element = button.closest(mod.selectors.element);
      button.addEventListener('click', () => {
        if (element.classList.contains(mod.selectors.block)) {
          message = `Has añadido 1 ${JSON.parse(element.getAttribute('data-configurator-config')).title.toLowerCase()}`;
        } else {
          message = `Has añadido ${element.querySelector(mod.selectors.title).innerText}`;
        }

        mod.onChange.element = element;
        mod.onChange.block = element.closest(mod.selectors.block);
        mod.onChange.isMainElement = element.classList.contains(mod.classes.main);
        mod.onChange.num = undefined;
        mod.onChange.message = message;
        element.dispatchEvent(mod.onChange);
      });
    });
  }
  /**
   * Remove buttons handler
   *
   * @function removeButtonsHandler
   *
   * @return undefined
   */


  removeButtonsHandler() {
    const mod = this;
    const removeButtons = mod.configurator.querySelectorAll(`${mod.selectors.element} ${mod.selectors.remove}`);
    [].forEach.call(removeButtons, button => {
      let message = '';
      let element = button.closest(mod.selectors.element);
      button.addEventListener('click', () => {
        if (element.classList.contains(mod.selectors.block)) {
          message = `Has eliminado 1 ${JSON.parse(element.getAttribute('data-configurator-config')).title.toLowerCase()}`;
        } else {
          message = `Has eliminado ${element.querySelector(mod.selectors.title).innerText}`;
        }

        mod.onChange.element = element;
        mod.onChange.block = element.closest(mod.selectors.block);
        mod.onChange.isMainElement = element.classList.contains(mod.classes.main);
        mod.onChange.num = undefined;
        mod.onChange.message = message;
        element.dispatchEvent(mod.onChange);
      });
    });
  }
  /**
   * Ticket handler
   *
   * @function ticketHandler
   *
   * @return undefined
   */


  ticketHandler() {
    const mod = this;
    document.querySelector('[data-vfms-js="_ticket"]').addEventListener('vfms:change', ev => {
      let isMain = ev.element.classList.contains(mod.classes.main);

      if (isMain) {
        let daddy = ev.element.closest(mod.selectors.block);
        mod.resetConfig();
        [].forEach.call(daddy.querySelectorAll(mod.selectors.element), el => {
          mod.removeElement(el);
        });
        mod.addElement(ev.element);
        mod.resetRels(ev.element);
      } else {
        if (ev.enemies && ev.enemies.length > 0) {
          ev.enemies.forEach(id => {
            mod.removeElement(mod.configurator.querySelector('#' + id));
          });
        }

        if (ev.toRemove) {
          mod.removeElement(ev.element);
        } else {
          mod.addElement(ev.element);
        }
      }
    });
  }
  /**
   * Set counter elements functionality
   *
   * @function activeCounter
   * 
   * @param {HTMLElement} container - counter
   *
   * @return undefined
   */


  activeCounter(container) {
    const mod = this;
    let lessButton = container.querySelector(mod.selectors.less);
    let moreButton = container.querySelector(mod.selectors.more);
    let numElement = container.querySelector(mod.selectors.counterNum);
    lessButton.addEventListener('click', () => {
      mod.counterAction('less', numElement, container, {
        less: lessButton,
        more: moreButton
      });
    });
    moreButton.addEventListener('click', () => {
      mod.counterAction('more', numElement, container, {
        less: lessButton,
        more: moreButton
      });
    });
  }
  /**
   * Handling counter action
   *
   * @function activeCounter
   * 
   * @param {String} operation - less or more operation
   * @param {HTMLElement} numElement - counter num HTML element
   * @param {HTMLElement} container - counter
   * @param {Object} buttons - Object with buttons to increment and decrease counter number
   *
   * @return undefined
   */


  counterAction(operation, numElement, container, buttons) {
    const mod = this;
    let num = parseInt(numElement.innerText);
    container.classList.add(this.classes.added);

    if (operation === 'less' && num > 0) {
      mod.onChange.num = num;
      num--;
      numElement.innerText = num;
      buttons.more.classList.remove(this.classes.hide);
      buttons.more.disabled = false;
      mod.onChange.toAdd = false;
      mod.onChange.message = 'Has eliminado 1 línea adicional';
    } else if (operation === 'more' && num < this.maxPos) {
      num++;
      numElement.innerText = num;
      buttons.less.classList.remove(this.classes.hide);
      buttons.less.disabled = false;
      mod.onChange.num = num;
      mod.onChange.toAdd = true;
      mod.onChange.message = 'Has añadido 1 línea adicional';
    }

    mod.onChange.element = container;
    mod.onChange.block = container;
    mod.onChange.isMainElement = false;
    container.dispatchEvent(mod.onChange);

    if (num <= 0 && !buttons.less.classList.contains(this.classes.hide)) {
      container.classList.remove(this.classes.added);
      buttons.less.classList.add(this.classes.hide);
      buttons.less.disabled = true;
    } else if (num >= this.maxPos && !buttons.more.classList.contains(this.classes.hide)) {
      buttons.more.classList.add(this.classes.hide);
      buttons.more.disabled = true;
    }
  }
  /**
   * Set counter to init
   *
   * @function resetCounter
   * 
   * @param {HTMLElement} counter - counter HTML element
   *
   * @return undefined
   */


  resetCounter(counter) {
    const mod = this;
    const less = counter.querySelector(mod.selectors.less);
    const more = counter.querySelector(mod.selectors.more);
    counter.classList.remove(mod.classes.added);
    counter.querySelector(mod.selectors.counterNum).innerText = "0";
    less.disabled = true;
    less.classList.add(mod.classes.hide);
    more.disabled = false;
    more.classList.remove(mod.classes.hide);
  }
  /**
   * Set all config elements to default
   *
   * @function resetConfig
   * 
   * @return undefined
   */


  resetConfig() {
    const mod = this;
    const allEls = mod.configurator.querySelectorAll(mod.selectors.element);
    [].forEach.call(allEls, el => {
      if (el.classList.contains(mod.classes.counter)) {
        mod.resetCounter(el);
      } else {
        mod.removeElement(el);
      }
    });
  }
  /**
   * Set added classes from an element 
   *
   * @function addElement
   *
   * @param {HTMLElement} element - element from config
   * 
   * @return undefined
   */


  addElement(element) {
    const mod = this;
    let addButton = element.querySelector(mod.selectors.add);
    let removeButton = element.querySelector(mod.selectors.remove);
    element.classList.add(mod.classes.added);

    if (addButton) {
      addButton.classList.add(mod.classes.hide);
      addButton.disabled = true;
    }

    if (removeButton) {
      removeButton.classList.remove(mod.classes.hide);
      removeButton.disabled = false;
    }
  }
  /**
   * Show element
   *
   * @function showElement
   *
   * @param {HTMLElement} element - element from config
   * 
   * @return undefined
   */


  showElement(element) {
    const mod = this;
    let singleDaddy = element.closest(mod.selectors.single);

    if (singleDaddy) {
      [].forEach.call(singleDaddy.querySelectorAll(mod.selectors.element), el => {
        el.classList.add(mod.classes.hide);
        mod.removeElement(el);
      });
    }

    element.classList.remove(this.classes.hide);
  }
  /**
   * Remove element
   *
   * @function removeElement
   *
   * @param {HTMLElement} element - element from config
   * 
   * @return undefined
   */


  removeElement(element) {
    let addButton = element.querySelector(this.selectors.add);
    let removeButton = element.querySelector(this.selectors.remove);
    element.classList.remove(this.classes.added);

    if (removeButton) {
      removeButton.classList.add(this.classes.hide);
      removeButton.disabled = true;
    }

    if (addButton) {
      addButton.classList.remove(this.classes.hide);
      addButton.disabled = false;
    }
  }
  /**
   * Reset options relationated with main element from config
   *
   * @function resetRels
   *
   * @param {HTMLElement} element - element from config
   * 
   * @return undefined
   */


  resetRels(element) {
    const mod = this;
    mod.info.elements[element.id].rels.forEach(rel => {
      if (rel.selector && rel.selector !== '') {
        const el = mod.configurator.querySelector(`#${rel.selector}`);

        if (el) {
          mod.showElement(el);

          if (rel.defaultAdded) {
            mod.addElement(el);
          }
        }
      }
    });
  }

}

/***/ }),

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_creator.js":
/*!**********************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_creator.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const defaults = {
  "selectors": {
    "li": ".js-li",
    "num": ".js-counter-num",
    "price": ".js-price",
    "title": ".js-title"
  },
  "classes": {
    "cardListContainerCSS": "vfes-card__list-container",
    "cardListContentCSS": "vfes-card__list-content",
    "colorBgLighGray": "vfes-colours-bg-light-gray",
    "hide": "hide",
    "ticketBlockJS": "js-ticket-block",
    "ticketBlockContentJS": "js-ticket-block-content",
    "ticketElementCSS": "vfms-ticket__element",
    "ticketItemJS": "js-ticket-item"
  }
};
const CREATOR = {
  /**
   * Generate a ticket's item  
   *
   * @function createItem
   *
   * @param {Object} config - item properties
   * 
   * @return {HTMLElement}
   */
  createItem: (config, info) => {
    let newItem = document.createElement('div');
    let id = `ticket-item-${config.id}${config.num ? config.num : ''}`;
    let shouldHasButton = Object.keys(info.elements).includes(id) || config.isPromo ? '' : `<button class="js-ticket-close"><svg class="icon" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24px' height='24px'><title>Close</title><use class="icon-v3" xlink:href='#icon3-close'></use></svg></button>`;
    let html = `<div class="vfes-card__list-content-title vfes-m0">${shouldHasButton}<p class="vfes-paragraph vfes-flex-1 js-ticket-item-title">${config.description ? config.description : config.title}</p>${config.price ? `<p class="vfes-paragraph vfes-card__list-span-price js-ticket-partial-price">${config.price}/mes</p></div>` : ''}`;

    if (config.list.length > 0) {
      html += '<ul class="vfes-card__list-list">';
      [].forEach.call(config.list, item => {
        html += `<li>- ${item.innerText}</li>`;
      });
      html += '</ul>';
    }

    newItem.classList.add(defaults.classes.ticketElementCSS);
    newItem.classList.add(defaults.classes.ticketItemJS);
    newItem.id = id;
    newItem.innerHTML = html;
    return newItem;
  },

  /**
   * Generate a ticket's block  
   *
   * @function createBlock
   *
   * @param {Object} config - block properties
   * 
   * @return {Object}
   */
  createBlock: config => {
    let contentBlock, idContent;
    let newBlock = document.createElement('div');
    let html = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px"><title>Mobile</title><use class="icon-v3" xlink:href="#${config.svg}"></use></svg><div class="vfes-card__list-paragraphs"><p class="vfes-paragraph"><span class="js-ticket-quantity">1</span> ${config.title}</p>`;

    if (config.button) {
      idContent = 'accordion-' + config.id;
      html += `<button class="vfes-card__list-button" data-common-accordion="button" aria-expanded="false" aria-controls="${idContent}"><span class="vfes-paragraph js-common-accordion-show">Más info <svg class="icon vfes-icon__button" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px"><title>Tick</title><use class="icon-v3" xlink:href="#icon3-chevron-down"></use></svg></span><span class="vfes-paragraph js-common-accordion-hide">Menos info <svg class="icon vfes-icon__button" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px"><title>Tick</title><use class="icon-v3" xlink:href="#icon3-chevron-up"></use></svg></span></button>`;
      contentBlock = document.createElement('div');
      contentBlock.id = idContent;
      contentBlock.classList.add(defaults.classes.cardListContentCSS);
      contentBlock.classList.add(defaults.classes.colorBgLighGray);
      contentBlock.classList.add(defaults.classes.ticketBlockContentJS);
      contentBlock.classList.add(defaults.classes.hide);
      contentBlock.setAttribute('aria-hidden', true);
    }

    html += `</div><p class="vfes-paragraph vfes-card__list-price"><strong class="js-ticket-total-price"></strong></p>`;
    newBlock.classList.add(defaults.classes.cardListContainerCSS);
    newBlock.classList.add(defaults.classes.ticketBlockJS);
    newBlock.classList.add(defaults.classes.hide);
    newBlock.id = config.id;
    newBlock.innerHTML = html;
    return {
      newBlock,
      contentBlock
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CREATOR);

/***/ }),

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_modal.js":
/*!********************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_modal.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const defaults = {
  selectors: {
    modal: '.js-modal',
    modalClose: '.js-modal-close',
    modalConfirmAccept: '.js-modal-confirm-accept',
    modalConfirmCancel: '.js-modal-confirm-cancel',
    modalContent: '.js-modal-content',
    modalItem: '.js-modal-item'
  },
  classes: {
    modalShowCSS: 'vfes-modal--show',
    modalItemShowCSS: 'vfes-modal__item--show'
  }
};
const modal = document.querySelector(defaults.selectors.modal);
const modalConfirm = modal.querySelector('#modal-confirm');
const MODAL = {
  /**
   * Open modal. 
   * 
   * @function show
   * 
   * @param {String} id - modal id 
   */
  show: id => {
    modal.classList.add(defaults.classes.modalShowCSS);
    modal.querySelector(`#${id}`).classList.add(defaults.classes.modalItemShowCSS);
  },

  /**
   * Hide mod.modal. 
   * 
   * @function hide
   * 
   * @param {String} id - modal id
   */
  hide: id => {
    modal.classList.remove(defaults.classes.modalShowCSS);
    modal.querySelector(`#${id}`).classList.remove(defaults.classes.modalItemShowCSS);
  },

  /**
   * Apply confirm events to modal
   * 
   * @function confirmModal
   * 
   * @returns undefined
   */
  confirm(message, resolve, reject) {
    let cancelButton, acceptButton;
    let closeButton = modalConfirm.querySelector(defaults.selectors.modalClose);
    closeButton.removeEventListener('click', MODAL.closeConfirm);
    modalConfirm.querySelector(defaults.selectors.modalContent).innerHTML = `${message}<button class="vfes-button vfes-button--primary js-modal-confirm-accept">Aceptar</button><button class="vfes-button vfes-button--secondary js-modal-confirm-cancel">Cancelar</button>`;
    acceptButton = modalConfirm.querySelector(defaults.selectors.modalConfirmAccept);
    cancelButton = modalConfirm.querySelector(defaults.selectors.modalConfirmCancel);
    MODAL.show('modal-confirm');
    acceptButton.addEventListener('click', () => {
      MODAL.hide('modal-confirm');
      resolve();
    });
    cancelButton.addEventListener('click', () => {
      MODAL.hide('modal-confirm');
      reject();
    });
    closeButton.addEventListener('click', () => {
      MODAL.hide('modal-confirm');
      reject();
    });
  }

};
/* harmony default export */ __webpack_exports__["default"] = (MODAL);

/***/ }),

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_price.js":
/*!********************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_price.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wallmeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_wallmeric */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_wallmeric.js");

const defaults = {
  "selectors": {
    "content": ".js-ticket-block-content",
    "finalPrice": ".js-ticket-final-price",
    "partialPrice": ".js-ticket-partial-price",
    "ticketBlock": ".js-ticket-block",
    "ticketItem": ".js-ticket-item",
    "totalPrice": ".js-ticket-total-price",
    "quantity": ".js-ticket-quantity"
  },
  "classes": {
    "hide": "hide"
  }
};
const ticket = document.querySelector('[data-vfms-js="_ticket"]');
const PRICE = {
  /**
   * Tranform given price in a string or number.
   *
   * @function transformPrice
   * 
   * @param {String | Number} price - price to change type to work with it.
   * 
   * @return {String | Number} type of return value depends of param given.
   */
  transform: price => {
    return typeof price === 'string' ? parseFloat(price.replace(',', '.')) : price.toString().replace('.', ',');
  },

  /**
   * Choose if we want to calculate price from a specfific content or from all contents from ticket.
   *
   * @function calculateContentPrice
   * 
   * @param {HTMLElement} content - Non required param. Content where to calculate price. 
   *
   * @return undefined
   */
  calcContent: (content = null) => {
    let contents;

    if (content) {
      PRICE.sumPartialsFromContent(content);
      return;
    }

    contents = ticket.querySelectorAll(`${defaults.selectors.ticketBlock}:not(.${defaults.classes.hide}) + ${defaults.selectors.content}`);
    Object(_wallmeric__WEBPACK_IMPORTED_MODULE_0__["includeTicketProduct"])('wallmeric', contents);
    [].forEach.call(contents, content => {
      PRICE.sumPartialsFromContent(content);
    });
  },

  /**
   * Sum partial prices from a content.
   *
   * @function sumPartialPricesFromContent
   * 
   * @param {HTMLElement} content - Content where to sum prices.
   *
   * @return undefined
   */
  sumPartialsFromContent: content => {
    let sumPartialPrices = 0;
    let partialPrices = content.querySelectorAll(`${defaults.selectors.ticketItem}:not(.${defaults.classes.hide}) ${defaults.selectors.partialPrice}`);

    if (partialPrices.length > 0) {
      [].forEach.call(partialPrices, price => {
        sumPartialPrices += PRICE.transform(price.innerText);
      });
    } else {
      sumPartialPrices = null;
    }

    let block = ticket.querySelector(`[aria-controls="${content.id}"]`);

    if (block) {
      block = block.closest(defaults.selectors.ticketBlock);
      block.querySelector(defaults.selectors.totalPrice).innerText = sumPartialPrices === null ? '' : PRICE.transform(sumPartialPrices) + '€/mes';
    }
  },

  /**
   * Calculate total price from ticket
   *
   * @function calculateTotalPrice
   * 
   * @return undefined
   */
  calcTotal: () => {
    const totalPrices = ticket.querySelectorAll(`${defaults.selectors.ticketBlock}:not(.${defaults.classes.hide}) ${defaults.selectors.totalPrice}`);
    let sumTotalPrices = 0;
    [].forEach.call(totalPrices, price => {
      !isNaN(parseFloat(price.innerText)) ? sumTotalPrices += PRICE.transform(price.innerText) : null;
    });
    sumTotalPrices = Math.round(sumTotalPrices * 100) / 100;
    Object(_wallmeric__WEBPACK_IMPORTED_MODULE_0__["includeValueInNameSpace"])('wallmeric', 'totalPrice', PRICE.transform(sumTotalPrices) + '€/mes');
    ticket.querySelector(defaults.selectors.finalPrice).innerText = PRICE.transform(sumTotalPrices) + '€/mes';
  },

  /**
   * Recalculate total ticket price including contents prices
   *
   * @function recalculatePrice
   * 
   * @return undefined
   */
  recalculate: content => {//PRICE.calcContent(content);
    //PRICE.calcTotal();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PRICE);

/***/ }),

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_scroll.js":
/*!*********************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_scroll.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const configurator = document.querySelector('[data-vfms-js="_configurator"]');
const ticket = document.querySelector('[data-vfms-js="_ticket"]'); //const mdd = document.querySelector(`.mdd-${window.matchMedia('(min-width: 970px)').matches ? 'desktop' : 'mobile'}`).lastElementChild;

const mdd = 0;
const SCROLL = {
  init: () => {
    document.addEventListener('scroll', SCROLL.throttle(SCROLL.moveTicket, 100));
  },
  moveTicket: () => {
    let ticketPos = ticket.getBoundingClientRect(); //let mddPos = mdd.getBoundingClientRect();

    let configPos = configurator.getBoundingClientRect();

    if (configPos.top < 75 && configPos.bottom - ticketPos.height / 2 > 75) {
      ticket.classList.add('fixed');
    } else {
      ticket.classList.remove('fixed');
    }
    /*if(configPos.top < mddPos.height && (configPos.bottom - (ticketPos.height / 2)) > mddPos.height) {
        ticket.classList.add('fixed');
    } else {
        ticket.classList.remove('fixed');
    }*/

  },
  throttle: (func, limit) => {
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
};
/* harmony default export */ __webpack_exports__["default"] = (SCROLL);

/***/ }),

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_ticket.js":
/*!*********************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_ticket.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ticket; });
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_creator */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_creator.js");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_price */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_price.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_modal */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_modal.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_scroll */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_scroll.js");
/* harmony import */ var _wallmeric__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_wallmeric */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_wallmeric.js");





const defaults = {
  $element: undefined,
  ids: {
    promos: 'ticket-promos',
    item: 'ticket-item'
  },
  selectors: {
    added: '.added',
    body: '.js-ticket-body',
    configBlock: '.js-configurator-block',
    configElement: '.js-configurator-element',
    configInitialPay: '.js-initial-pay',
    configMain: '.js-configurator-main',
    content: '.js-ticket-content',
    dropdown: '.js-ticket-dropdown',
    li: '.js-li',
    num: '.js-counter-num',
    overlay: '.js-ticket-overlay',
    partialPrice: '.js-ticket-partial-price',
    price: '.js-price',
    quantity: '.js-ticket-quantity',
    ticketBlock: '.js-ticket-block',
    // ticketBlockContent: '.js-ticket-block-content',
    ticketContent: '.js-ticket-content-box',
    ticketInitialPay: '.js-ticket-initial-pay',
    ticketItem: '.js-ticket-item',
    ticketItemTitle: '.js-ticket-item-title',
    ticketLink: '.js-ticket-link',
    ticketButton: '.js-ticket-button',
    ticketCloseButton: '.js-ticket-close',
    title: '.js-title'
  },
  classes: {
    added: 'added',
    configMain: 'js-configurator-main',
    counter: 'js-configurator-counter',
    promo: 'js-promo-block',
    ticketBlock: 'js-ticket-block',
    ticketItem: 'js-ticket-item',
    // ticketBlockContent: 'js-ticket-block-content',
    hide: 'hide'
  },
  attr: {
    config: 'data-configurator-config'
  }
};
/**
 * Ticket.
 *
 * @module Ticket
 * @param {Object} properties - specifies the configurations
 * for the module.
 */

class Ticket {
  constructor(properties = {}) {
    this.ticket = properties.$element;
    this.info = JSON.parse(properties.info);
    this.ids = defaults.ids;
    this.selectors = defaults.selectors;
    this.classes = defaults.classes;
    this.attr = defaults.attr;
    this.timePile = []; //Events

    this.onChange = new Event('vfms:change');
  }
  /**
   * Initialize the module.
   *
   * @function init
   *
   * @return undefined
   */


  init() {
    const mod = this;
    const elementsAdded = document.querySelectorAll(`${mod.selectors.configElement}.${mod.classes.added}`);
    const configBlocks = document.querySelectorAll(mod.selectors.configBlock);
    [].forEach.call(configBlocks, block => {
      let newBlock = _creator__WEBPACK_IMPORTED_MODULE_0__["default"].createBlock(JSON.parse(block.getAttribute(mod.attr.config)));
      mod.addBlockToTicket(newBlock);
    });
    [].forEach.call(elementsAdded, element => {
      mod.addItemToTicket(element);
    }); //mod.addPromosToTicket();
    // PRICE.recalculate();

    _scroll__WEBPACK_IMPORTED_MODULE_3__["default"].init();
    mod.bind();
  }
  /**
   * Initialise the module.
   *
   * @function bind
   *
   * @return undefined
   */


  bind() {
    const mod = this;
    mod.ticket.querySelector(mod.selectors.ticketButton).classList.add('hide');
    [].forEach.call(document.querySelectorAll(mod.selectors.configElement), element => {
      element.addEventListener('vfms:change', ev => {
        let type = ev.isMainElement ? "main" : ev.element.classList.contains(mod.classes.counter) ? "counter" : "default";

        switch (type) {
          case "main":
            mod.mainElementManager(ev);
            break;

          case "counter":
            mod.counterElementManager(ev);
            break;

          default:
            mod.defaultElementManager(ev);
            break;
        }

        mod.checkTicketContent();
      });
    });
    mod.overlayAction();
  }

  mainElementManager(ev) {
    const mod = this;
    [].forEach.call(mod.ticket.querySelectorAll(`${mod.selectors.ticketBlock}:not(.${mod.classes.hide})`), block => {
      [].forEach.call(block.nextElementSibling.querySelectorAll(mod.selectors.ticketItem), item => {
        item.classList.add(mod.classes.hide);
      });
      block.classList.add(mod.classes.hide);
    });
    mod.addItemToTicket(ev.element);
    mod.resetRels(ev.element);
    mod.addPromosToTicket(ev.element);
    _price__WEBPACK_IMPORTED_MODULE_1__["default"].recalculate();
    mod.onChange.element = ev.element;
    mod.onChange.enemies = undefined;
    mod.onChange.toRemove = false;
    mod.ticket.dispatchEvent(mod.onChange);
  }

  counterElementManager(ev) {
    const mod = this;

    if (ev.num && ev.toAdd) {
      mod.addItemToTicket(ev.element);
    } else if (ev.num && !ev.toAdd) {
      mod.hideItem(mod.ticket.querySelector(`#${mod.ids.item}-${ev.element.id}${ev.num}`));
    }

    _price__WEBPACK_IMPORTED_MODULE_1__["default"].recalculate();
  }

  defaultElementManager(ev) {
    const mod = this;
    let eleCompa = mod.info.compatibilities[ev.element.id];
    let ticketItem = mod.ticket.querySelector(`#${mod.ids.item}-${ev.element.id}`);

    if (eleCompa) {
      let enemiesActivated = [];
      eleCompa.enemies.forEach(id => {
        let enemy = mod.ticket.querySelector(`#${mod.ids.item}-${id}`);

        if (enemy && !enemy.classList.contains(mod.classes.hide)) {
          enemiesActivated.push(enemy);
        }
      });

      if (enemiesActivated.length > 0) {
        _modal__WEBPACK_IMPORTED_MODULE_2__["default"].confirm(eleCompa.text, () => {
          enemiesActivated.forEach(enemy => {
            mod.hideItem(enemy);
          });
          mod.addItemToTicket(ev.element);
          _price__WEBPACK_IMPORTED_MODULE_1__["default"].recalculate();
          mod.onChange.element = ev.element;
          mod.onChange.enemies = eleCompa.enemies;
          mod.onChange.toRemove = false;
          mod.ticket.dispatchEvent(mod.onChange);
        }, () => {// Cancel code...
        });
      } else {
        let isAdded = ev.element.classList.contains(mod.classes.added);

        if (isAdded) {
          ev.element.querySelector(mod.selectors.configInitialPay) ? mod.ticket.querySelector(mod.selectors.ticketInitialPay).parentElement.classList.add(mod.classes.hide) : null;
          mod.hideItem(ticketItem);
        } else {
          mod.addItemToTicket(ev.element);
        }

        _price__WEBPACK_IMPORTED_MODULE_1__["default"].recalculate();
        mod.onChange.element = ev.element;
        mod.onChange.enemies = undefined;
        mod.onChange.toRemove = isAdded;
        mod.ticket.dispatchEvent(mod.onChange);
      }
    } else {
      let isAdded = ev.element.classList.contains(mod.classes.added);

      if (isAdded) {
        ev.element.querySelector(mod.selectors.configInitialPay) ? mod.ticket.querySelector(mod.selectors.ticketInitialPay).parentElement.classList.add(mod.classes.hide) : null;
        mod.hideItem(ticketItem);
      } else {
        mod.addItemToTicket(ev.element);
      }

      _price__WEBPACK_IMPORTED_MODULE_1__["default"].recalculate();
      mod.onChange.element = ev.element;
      mod.onChange.enemies = undefined;
      mod.onChange.toRemove = isAdded;
      mod.ticket.dispatchEvent(mod.onChange);
    }
  }

  addItemToTicket(item) {
    const mod = this;
    const blockConfig = JSON.parse(item.closest(mod.selectors.configBlock).getAttribute(mod.attr.config));
    const num = item.querySelector(mod.selectors.num) ? item.querySelector(mod.selectors.num).innerText : undefined;
    const title = item.querySelector(mod.selectors.title).innerText;
    const initialPay = item.querySelector(mod.selectors.configInitialPay);
    let ticketItem = mod.ticket.querySelector(`#${mod.ids.item}-${item.id}${num ? num : ''}`);

    if (!ticketItem) {
      let block = mod.ticket.querySelector(`#${blockConfig.id}`);
      ticketItem = _creator__WEBPACK_IMPORTED_MODULE_0__["default"].createItem({
        id: item.id,
        title: title,
        price: item.querySelector(mod.selectors.price) ? item.querySelector(mod.selectors.price).innerText : undefined,
        num: num,
        list: item.querySelectorAll(mod.selectors.li),
        isPromo: block.id === mod.ids.promos
      }, mod.info);
      block.nextElementSibling.appendChild(ticketItem);
      mod.closeButtonContent(ticketItem);
    }

    if (initialPay) {
      let ticketInitPay = mod.ticket.querySelector(mod.selectors.ticketInitialPay);
      ticketInitPay.innerText = initialPay.innerText;
      ticketInitPay.parentElement.classList.remove(mod.classes.hide);
      Object(_wallmeric__WEBPACK_IMPORTED_MODULE_4__["includeValueInNameSpace"])('wallmeric', 'initialPay', initialPay.innerText);
    }

    mod.showItem(ticketItem);
  }

  addBlockToTicket(block) {
    this.ticket.querySelector(this.selectors.ticketContent).appendChild(block.newBlock);
    this.ticket.querySelector(this.selectors.ticketContent).appendChild(block.contentBlock);
  }

  addPromosToTicket(rate) {
    const mod = this;
    const rateActivated = rate ? rate : document.querySelector(`${mod.selectors.configMain}.${mod.classes.added}`);
    let promoCounter = 0;
    let promoBlock = mod.ticket.querySelector('#' + mod.ids.promos);

    if (promoBlock) {
      let aux = promoBlock;
      promoBlock = {};
      promoBlock.newBlock = aux;
      promoBlock.contentBlock = aux.nextElementSibling;
      promoBlock.contentBlock.innerHTML = '';
    } else {
      promoBlock = _creator__WEBPACK_IMPORTED_MODULE_0__["default"].createBlock({
        id: mod.ids.promos,
        svg: "icon-bonus-mid",
        title: "Promociones",
        button: true
      });
      promoBlock.newBlock.classList.add(mod.classes.promo);
    }

    mod.info.promos.forEach(promo => {
      promoCounter++;
      promoBlock.contentBlock.appendChild(_creator__WEBPACK_IMPORTED_MODULE_0__["default"].createItem({
        id: promo.id,
        title: '',
        description: promo.description,
        price: promo.price,
        list: [],
        isPromo: true
      }, mod.info));
    });

    if (rateActivated) {
      mod.info.elements[rateActivated.id].promos.forEach(promo => {
        promoCounter++;
        promoBlock.contentBlock.appendChild(_creator__WEBPACK_IMPORTED_MODULE_0__["default"].createItem({
          title: '',
          description: promo.description,
          price: promo.price,
          list: [],
          isPromo: true
        }, mod.info));
      });
    }

    if (promoCounter > 0) {
      promoBlock.newBlock.querySelector(mod.selectors.quantity).innerText = promoCounter;
      promoBlock.newBlock.classList.remove(mod.classes.hide);
    }

    mod.addBlockToTicket(promoBlock);
  }

  showItem(item) {
    const mod = this;
    const daddy = item.parentElement;
    const block = daddy.previousElementSibling;

    if (item.classList.contains(mod.classes.configMain)) {
      [].forEach.call(daddy.querySelectorAll(`${mod.selectors.ticketItem}:not(.${mod.classes.hide})`), item => mod.hideItem(item));
    }

    mod.showBlock(block);
    item.classList.remove(mod.classes.hide);
    mod.recountChildren(block);
  }

  hideItem(item) {
    const block = item.parentElement.previousElementSibling;
    item.classList.add(this.classes.hide);
    this.recountChildren(block) === 0 ? this.hideBlock(block) : null;
  }

  showBlock(block) {
    block.classList.remove(this.classes.hide);
  }

  hideBlock(block) {
    block.classList.add(this.classes.hide);
    block.nextElementSibling.classList.add(this.classes.hide);
  }

  recountChildren(ticketBlock) {
    let counterChildren = ticketBlock.nextElementSibling.querySelectorAll(`${this.selectors.ticketItem}:not(.${this.classes.hide})`).length;
    ticketBlock.querySelector(this.selectors.quantity).innerText = counterChildren;
    return counterChildren;
  }

  resetRels(element) {
    const mod = this;
    mod.info.elements[element.id].rels.forEach(rel => {
      if (rel.selector && rel.selector !== '') {
        const el = document.getElementById(rel.selector);

        if (el) {
          const price = el.querySelector(mod.selectors.price);
          const title = el.querySelector(mod.selectors.title);
          const description = el.querySelector(mod.selectors.description);
          const ticketItem = mod.ticket.querySelector(`#${mod.ids.item}-${el.id}`);

          if (price && rel.newPrice >= 0) {
            price.innerText = `${rel.newPrice}€`;
          }

          if (title && rel.newTitle) {
            title.innerText = rel.newTitle;
          }

          if (description && rel.newDescription) {
            description.innerText = rel.newDescription;
          }

          if (ticketItem) {
            ticketItem.querySelector(mod.selectors.partialPrice).innerText = `${rel.newPrice}€`;
            rel.newTitle ? ticketItem.querySelector(mod.selectors.ticketItemTitle).innerText = rel.newTitle : null;
          }

          if (rel.defaultAdded) {
            mod.addItemToTicket(el);
          }
        }
      }
    });
  }
  /**
   * Overlay action to hide ticket content when you click over it
   *
   * @function overlayAction
   * 
   * @param {HTMLElement} button - Dropdown button element
   * 
   * @return undefined
   */


  overlayAction() {
    const mod = this;
    const ticketOverlay = mod.ticket.querySelector(mod.selectors.overlay);
    const ticketBody = mod.ticket.querySelector(mod.selectors.body);
    const ticketDropdown = mod.ticket.querySelector(mod.selectors.dropdown);
    ticketOverlay.addEventListener('click', () => {
      if (!ticketBody.classList.contains(mod.classes.hide)) {
        ticketOverlay.classList.add(mod.classes.hide);
        ticketDropdown.click();
      }
    });
  }
  /**
   * Check ticket content
   *
   * @function checkTicketContent
   * 
   * @return undefined
   */


  checkTicketContent() {
    const mod = this;
    let contentsBlockVisible = mod.ticket.querySelectorAll(`${mod.selectors.ticketBlock}:not(.hide)`);
    let rateActive = document.querySelector(`${mod.selectors.configMain}.${mod.classes.added}`);
    let rateObject = mod.info.elements[rateActive.id];
    let countDiferentIds = 0;
    let counterTrueRels = 0;
    contentsBlockVisible = [].slice.call(contentsBlockVisible, 1);

    if (contentsBlockVisible.length > 0) {
      if (contentsBlockVisible[contentsBlockVisible.length - 1].id === mod.ids.promos) {
        contentsBlockVisible = contentsBlockVisible.slice(0, -1);
      }

      rateObject.rels.forEach(rel => {
        if (rel.defaultAdded) {
          contentsBlockVisible.forEach(content => {
            [...content.nextElementSibling.children].forEach(child => {
              if (child.id !== `${mod.ids.item}-${rel.selector}` && !child.classList.contains(mod.classes.hide)) {
                countDiferentIds++;
              }
            });
          });
          counterTrueRels++;
        }
      });
    }

    if (countDiferentIds > 0 || counterTrueRels === 0 && contentsBlockVisible.length > 0) {
      this.showTicketButton();
    } else {
      this.showTicketLink(rateObject.href);
    }
  }

  showTicketLink(newHref) {
    let link = this.ticket.querySelector(this.selectors.ticketLink);
    this.ticket.querySelector(this.selectors.ticketButton).classList.add('hide');
    link.classList.remove('hide');
    link.href = newHref;
  }

  showTicketButton() {
    this.ticket.querySelector(this.selectors.ticketLink).classList.add('hide');
    this.ticket.querySelector(this.selectors.ticketButton).classList.remove('hide');
  }

  closeButtonContent(ticketItem) {
    const mod = this;
    let closeButton = ticketItem.querySelector(mod.selectors.ticketCloseButton);
    let idTicketItem = ticketItem.id.replace(this.ids.item + '-', '');

    if (closeButton) {
      closeButton.addEventListener('click', () => {
        let itemConfig = document.getElementById(idTicketItem);
        mod.hideItem(closeButton.parentElement.parentElement);
        _price__WEBPACK_IMPORTED_MODULE_1__["default"].recalculate();

        if (itemConfig.querySelector(mod.selectors.configInitialPay)) {
          mod.ticket.querySelector(mod.selectors.ticketInitialPay).parentElement.classList.add('hide');
        }

        mod.onChange.element = itemConfig;
        mod.onChange.enemies = undefined;
        mod.onChange.toRemove = true;
        mod.ticket.dispatchEvent(mod.onChange);
      });
    }
  }

}

/***/ }),

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_utils.js":
/*!********************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_utils.js ***!
  \********************************************************************************************************/
/*! exports provided: utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return utils; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_common */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_common.js");
/* harmony import */ var _configurator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_configurator */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_configurator.js");
/* harmony import */ var _ticket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_ticket */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_ticket.js");



const PATH_MICROSITE = document.querySelector('[data-pathmicrosite]').getAttribute('data-pathmicrosite');
let globalModules = {
  _common: _common__WEBPACK_IMPORTED_MODULE_0__["default"],
  _configurator: _configurator__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ticket: _ticket__WEBPACK_IMPORTED_MODULE_2__["default"]
};
let utils = {
  init: scope => {
    let modules = scope.querySelectorAll('[data-vfms-js]');
    fetch(PATH_MICROSITE + 'config-info.json').then(response => {
      return response.text();
    }).then(data => {
      [].forEach.call(modules, mod => {
        let modulesAttr = mod.getAttribute('data-vfms-js');
        modulesAttr = modulesAttr.split(',');
        modulesAttr.forEach(attr => {
          let properties = {
            $element: mod
          };
          properties.info = data;
          let instance = globalModules[attr] ? new globalModules[attr](properties) : undefined;
          instance ? instance.init() : null;
        });
      });
    }).catch(error => {
      console.log(error);
    });
  }
};

/***/ }),

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_wallmeric.js":
/*!************************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_wallmeric.js ***!
  \************************************************************************************************************/
/*! exports provided: includeValueInNameSpace, includeTicketProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includeValueInNameSpace", function() { return includeValueInNameSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includeTicketProduct", function() { return includeTicketProduct; });
/**
 * Include value into ticketdata first level
 *
 * @function includeValueInNameSpace
 *
 * @param {String} companyName - The company name which goes to recover data
 * @param {Number} key - key of the object to save
 * @param {Number} value - value associated to key
 * @return {undefined}
 *
 */
function includeValueInNameSpace(companyName, key, value) {
  if (isNamespaceUndefined(companyName)) {
    registerNamespace(companyName);
  }

  saveIntoNamespace(companyName, key, value);
}
/**
 * Include products from ticket into global object
 *
 * @function includeTicketProduct
 *
 * @param {String} companyName - The company name which goes to recover data
 * @param {Number} ticket - ticket HTML element
 * @return {undefined}
 *
 */

function includeTicketProduct(companyName, ticket) {
  const ticketList = ticket || {};
  const arrClass = ['.js-ticket-item-title', '.js-ticket-partial-price', '.js-ticket-item'];

  if (isNamespaceUndefined(companyName)) {
    registerNamespace(companyName);
  }

  saveIntoNamespace(companyName, 'content', {});
  [...ticketList].forEach(item => {
    if (item.id !== 'accordion-ticket-promos') {
      const visibleEls = item.querySelectorAll(`${arrClass[2]}:not(.hide)`);
      let keyObject, value;

      if (item.id.indexOf('counter') >= 0) {
        keyObject = item.querySelector(arrClass[0]).innerText;
        value = item.querySelector(arrClass[1]).innerText;
        saveContentIntoNamespace(companyName, keyObject, value);
        saveContentIntoNamespace(companyName, `${keyObject} Cantidad`, visibleEls.length);
      } else {
        [].forEach.call(visibleEls, el => {
          keyObject = el.querySelector(arrClass[0]).innerText;
          value = el.querySelector(arrClass[1]).innerText;
          saveContentIntoNamespace(companyName, keyObject, value);
        });
      }
    } else {
      saveContentIntoNamespace(companyName, 'promo', item.querySelector(arrClass[0]).innerText);
    }
  });
}
/**
 * Create namespace into vfes object
 *
 * @function registerNamespace
 *
 * @param {String} companyName - The company name which goes to recover data
 * @return {undefined}
 *
 */

function registerNamespace(companyName) {
  window.vfes[companyName] = {
    "dataTicket": {}
  };
}
/**
 * Check if namespace exists into vfes object
 *
 * @function isNamespaceUndefined
 *
 * @param {String} companyName - The company name which goes to recover data
 * @return {Boolean}
 *
 */


function isNamespaceUndefined(companyName) {
  return window.vfes[companyName] === undefined;
}
/**
 * Save value into namespace
 *
 * @function saveIntoNamespace
 *
 * @param {String} companyName - The company name which goes to recover data
 * @param {String} key - object key
 * @param {String} value - object key value
 * @return {undefined}
 *
 */


function saveIntoNamespace(companyName, key, value) {
  window.vfes[companyName]['dataTicket'][key] = value;
}
/**
 * Save value into namespace's content
 *
 * @function saveContentIntoNamespace
 *
 * @param {String} companyName - The company name which goes to recover data
 * @param {String} key - object key
 * @param {String} value - object key value
 * @return {undefined}
 *
 */


function saveContentIntoNamespace(companyName, key, value) {
  window.vfes[companyName]['dataTicket']['content'][key] = value;
}

/***/ }),

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/main.js":
/*!******************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/main.js ***!
  \******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/tools.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_utils */ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/_utils.js");



_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onStylesReady = () => {
  console.log("Site visually ready");
  _utils__WEBPACK_IMPORTED_MODULE_1__["utils"].init(document);
  initBotones();
  window.matchMedia('(min-width: 970px)').matches ? document.querySelector('.js-ticket-dropdown').click() : null;
  var ticketTotal = "";
  var btnRateMobile = document.getElementById('btn-rates-mobile');
  var btnRateConvergente = document.getElementById('btn-rates-convergente');
  var containerRateMobile = document.getElementById('mobile-rates-container');
  var containerRateConvergente = document.getElementById('convergente-rates-container');
  containerRateConvergente.style.display = "none";
  btnRateMobile.addEventListener("click", abrirTarifasMovil);
  btnRateConvergente.addEventListener("click", abrirTarifasConvergente);

  function abrirTarifasMovil() {
    containerRateMobile.style.display = "block";
    containerRateConvergente.style.display = "none";
  }

  function abrirTarifasConvergente() {
    containerRateMobile.style.display = "none";
    containerRateConvergente.style.display = "block";
  }

  let btnCapitaCerrar = document.getElementById('btn-capita-cerrar');
  let btnInfo = document.getElementById('btn-info');
  let infoCapita = document.getElementById('info-capita');
  btnInfo.addEventListener('click', abrirCapita);

  function abrirCapita() {
    infoCapita.classList.remove('hide');
  }

  btnCapitaCerrar.addEventListener('click', cerrarCapita);

  function cerrarCapita() {
    infoCapita.classList.add('hide');
  } //ticket


  var precioTotalMostrado = 1.33;
  var ticketPrecioTotal = document.getElementById('ticket-precio-total');
  var ticketPrecioTotal2 = document.getElementById('ticket-precio-total2');
  ticketPrecioTotal.innerHTML = precioTotalMostrado;
  ticketPrecioTotal2.innerHTML = precioTotalMostrado;
  var carrusel3Items = document.getElementById('carrusel3-item');
  var carrusel2Items = document.getElementById('carrusel2-item');
  var carrusel1Items = document.getElementById('carrusel1-item');
  var carrusel4Items = document.getElementById('carrusel4-item');
  carrusel3Items.style.display = "none";
  carrusel2Items.style.display = "none";
  carrusel1Items.style.display = "block";
  carrusel4Items.style.display = "none";
  var gafas = document.getElementById('gafas');
  var airpods = document.getElementById('airpods');
  var btnGafas = document.getElementById('btn-gafas');
  var btnGafasEliminar = document.getElementById('btn-gafas-eliminar');
  var btnAirpods = document.getElementById('btn-airpods');
  var btnAirpodsEliminar = document.getElementById('btn-airpods-eliminar');
  btnGafas.addEventListener('click', seleccionarGafas);
  btnGafasEliminar.addEventListener('click', eliminarGafas);
  btnAirpods.addEventListener('click', seleccionarAirpods);
  btnAirpodsEliminar.addEventListener('click', eliminarAirpods);
  var gafasContainerTicket = document.getElementById('gafas-container');
  var airpodsContainerTicket = document.getElementById('airpods-container');
  var ticketPrecioAccesorio = document.getElementById('ticket-precio-accesorio');
  gafasContainerTicket.style.display = "none";
  airpodsContainerTicket.style.display = "none";
  let precioAcce = 0;
  ticketPrecioAccesorio.innerHTML = precioAcce;

  function seleccionarGafas() {
    gafas.classList.add('added');
    btnGafasEliminar.style.display = "block";
    gafasContainerTicket.style.display = "block";
    aperturaAccesorio.style.display = "block";
    precioAcce += 29, 99;
    ticketPrecioAccesorio.innerHTML = precioAcce.toFixed(2);
    precioTotalMostrado += 29, 99;
    ticketPrecioTotal.innerHTML = precioTotalMostrado.toFixed(2);
    ticketPrecioTotal2.innerHTML = precioTotalMostrado.toFixed(2);
  }

  function eliminarGafas() {
    gafas.classList.remove('added');
    btnGafasEliminar.style.display = "none";
    gafasContainerTicket.style.display = "none";
    precioAcce -= 29, 99;
    ticketPrecioAccesorio.innerHTML = precioAcce.toFixed(2);
    precioTotalMostrado -= 29, 99;
    ticketPrecioTotal.innerHTML = precioTotalMostrado.toFixed(2);
    ticketPrecioTotal2.innerHTML = precioTotalMostrado.toFixed(2);
  }

  function seleccionarAirpods() {
    airpods.classList.add('added');
    btnAirpodsEliminar.style.display = "block";
    airpodsContainerTicket.style.display = "block";
    aperturaAccesorio.style.display = "block";
    precioAcce += 39, 99;
    ticketPrecioAccesorio.innerHTML = precioAcce.toFixed(2);
    precioTotalMostrado += 39, 99;
    ticketPrecioTotal.innerHTML = precioTotalMostrado.toFixed(2);
    ticketPrecioTotal2.innerHTML = precioTotalMostrado.toFixed(2);
  }

  function eliminarAirpods() {
    airpods.classList.remove('added');
    btnAirpodsEliminar.style.display = "none";
    airpodsContainerTicket.style.display = "none";
    precioAcce -= 39, 99;
    ticketPrecioAccesorio.innerHTML = precioAcce.toFixed(2);
    precioTotalMostrado -= 39, 99;
    ticketPrecioTotal.innerHTML = precioTotalMostrado.toFixed(2);
    ticketPrecioTotal2.innerHTML = precioTotalMostrado.toFixed(2);
  }

  var checkPorta = document.getElementById('portabilidad');
  var checkNumNuevo = document.getElementById('num-nuevo');
  var checkPlazos = document.getElementById('plazos');
  var checkUnico = document.getElementById('unico');
  var mesesContainer = document.getElementById('meses');
  var mes36 = document.getElementById('mes-36');
  var mes24 = document.getElementById('mes-24');
  var mes36Inactive = document.getElementById('mes-36-inactive');
  var mes36Active = document.getElementById('mes-36-active');
  var mes24Inactive = document.getElementById('mes-24-inactive');
  var mes24Active = document.getElementById('mes-24-active');
  checkPorta.addEventListener('change', doPortabilidad);

  function doPortabilidad() {
    if (checkPorta.checked) {
      checkPlazos.disabled = false; //ticketTotal +=49;
      //document.write(ticketTotal);
    } else {}
  }

  checkNumNuevo.addEventListener('change', doNumNuevo);

  function doNumNuevo() {
    if (checkNumNuevo.checked) {
      checkPlazos.disabled = true;
    } else {}
  }

  let tipoPagoPlazos = true;
  checkPlazos.addEventListener('change', doPlazos);

  function doPlazos() {
    if (checkPlazos.checked) {
      mesesContainer.style.display = "block";
      tipoPagoPlazos = true;
    } else {}
  }

  checkUnico.disabled = true;
  checkUnico.addEventListener('change', doUnico);

  function doUnico() {
    if (checkUnico.checked) {
      mesesContainer.style.display = "none";
      tipoPagoPlazos = false;
    } else {}
  }

  mes36.addEventListener('click', addPlazos36);
  mes24.addEventListener('click', addPlazos24);
  let precioTlf = 0;
  mes24Active.style.display = "none";
  mes36Active.style.display = "none";

  function addPlazos36() {
    mes36Inactive.style.display = "none";
    mes36Active.style.display = "block";
    mes24Inactive.style.display = "block";
    mes24Active.style.display = "none";
  }

  function addPlazos24() {
    mes24Inactive.style.display = "none";
    mes24Active.style.display = "block";
    mes36Inactive.style.display = "block";
    mes36Active.style.display = "none";
  } //Acordeón telefono-movil


  var aperturaTlf = document.getElementById('apertura-telefono-movil');
  var menosTlf = document.getElementById('menos-telefono-movil');
  var masTlf = document.getElementById('mas-telefono-movil');
  var conteTlf = document.getElementById('cont-telefono-movil');
  aperturaTlf.addEventListener('click', abrircerrarTlf);
  let estadoTlf = false;

  function abrircerrarTlf() {
    if (estadoTlf == false) {
      conteTlf.style.display = "none";
      menosTlf.style.display = "none";
      masTlf.style.display = "block";
      estadoTlf = true;
    } else {
      estadoTlf = false;
      conteTlf.style.display = "block";
      menosTlf.style.display = "block";
      masTlf.style.display = "none";
    }
  } //Acordeón Tarifa


  var aperturaTarifa = document.getElementById('apertura-tarifa');
  var menosTarifa = document.getElementById('menos-tarifa');
  var masTarifa = document.getElementById('mas-tarifa');
  var conteTarifa = document.getElementById('cont-tarifa');
  aperturaTarifa.addEventListener('click', abrircerrarTarifa);
  let estadoTarifa = false;

  function abrircerrarTarifa() {
    if (estadoTarifa == false) {
      conteTarifa.style.display = "none";
      menosTarifa.style.display = "none";
      masTarifa.style.display = "block";
      estadoTarifa = true;
    } else {
      estadoTarifa = false;
      conteTarifa.style.display = "block";
      menosTarifa.style.display = "block";
      masTarifa.style.display = "none";
    }
  } //Acordeón Accesorio


  var aperturaAccesorio = document.getElementById('apertura-accesorio');
  var menosAccesorio = document.getElementById('menos-accesorio');
  var masAccesorio = document.getElementById('mas-accesorio');
  var conteAccesorio = document.getElementById('cont-accesorio');
  aperturaAccesorio.addEventListener('click', abrircerrarAccesorio);
  let estadoAccesorio = false;
  aperturaAccesorio.style.display = "none";

  function abrircerrarAccesorio() {
    if (estadoAccesorio == false) {
      conteAccesorio.style.display = "none";
      menosAccesorio.style.display = "none";
      masAccesorio.style.display = "block";
      estadoAccesorio = true;
    } else {
      estadoAccesorio = false;
      conteAccesorio.style.display = "block";
      menosAccesorio.style.display = "block";
      masAccesorio.style.display = "none";
    }
  } //Acordeón Adicional


  var aperturaAdicional = document.getElementById('apertura-adicional');
  var menosAdicional = document.getElementById('menos-adicional');
  var masAdicional = document.getElementById('mas-adicional');
  var conteAdicional = document.getElementById('cont-adicional');
  aperturaAdicional.addEventListener('click', abrircerrarAdicional);
  let estadoAdicional = false;

  function abrircerrarAdicional() {
    if (estadoAdicional == false) {
      conteAdicional.style.display = "none";
      menosAdicional.style.display = "none";
      masAdicional.style.display = "block";
      estadoAdicional = true;
    } else {
      estadoAdicional = false;
      conteAdicional.style.display = "block";
      menosAdicional.style.display = "block";
      masAdicional.style.display = "none";
    }
  } //ticket-nombre-tarifa


  let ticketNombreTarifa = document.getElementById('ticket-nombre-tarifa');
  let ticketPrecioTarifa = document.getElementById('ticket-precio-tarifa');
  let ticketPrecioTelefono = document.getElementById('ticket-precio-tlf');
  let securenetContainer = document.getElementById('securenet-container');
  let hatchContainer = document.getElementById('hatch-container');
  let oneNumberContainer = document.getElementById('onenumber-container');
  let precioTarifSelect = 40;
  precioTlf = 18.98;
  ticketPrecioTelefono.innerHTML = precioTlf;
  precioTotalMostrado += precioTarifSelect;
  precioTotalMostrado += precioTlf;
  ticketPrecioTotal.innerHTML = precioTotalMostrado;
  ticketPrecioTotal2.innerHTML = precioTotalMostrado;

  function initBotones() {
    var botonesAdd = document.querySelectorAll("[data-tarifa]");

    for (let i = 0; i < botonesAdd.length; i++) {
      botonesAdd[i].addEventListener('click', function () {
        for (let j = 0; j < botonesAdd.length; j++) {
          let todos = botonesAdd[j].dataset.tarifa;
          let todosParaBorrar = document.getElementById(todos);
          todosParaBorrar.firstElementChild.classList.remove('added');
        }

        let nombreTarifaSeleccionada = this.dataset.tarifa;
        let elementoTarifaSelecta = document.getElementById(nombreTarifaSeleccionada);
        elementoTarifaSelecta.firstElementChild.classList.add('added');
        ticketNombreTarifa.innerHTML = this.dataset.tarifaNombre;
        ticketPrecioTarifa.innerHTML = this.dataset.precioTarifa;
        precioTarifSelect == precioTarifSelect - precioTarifSelect;
        precioTotalMostrado -= precioTarifSelect;
        precioTarifSelect = parseInt(this.dataset.precioTarifa);
        precioTotalMostrado += precioTarifSelect;
        ticketPrecioTotal.innerHTML = precioTotalMostrado.toFixed(2);
        ticketPrecioTotal2.innerHTML = precioTotalMostrado.toFixed(2);

        if (tipoPagoPlazos == true) {
          precioTlf == precioTlf - precioTlf;
          precioTotalMostrado -= precioTlf;
          precioTlf = parseInt(this.dataset.precioPlazos);
          precioTotalMostrado += precioTlf;
          ticketPrecioTelefono.innerHTML = precioTlf;
          ticketPrecioTotal.innerHTML = precioTotalMostrado.toFixed(2);
          ticketPrecioTotal2.innerHTML = precioTotalMostrado.toFixed(2);
        } else {
          precioTlf == precioTlf - precioTlf;
          precioTotalMostrado -= precioTlf;
          precioTlf = parseInt(this.dataset.precioUnico);
          precioTotalMostrado += precioTlf;
          ticketPrecioTelefono.innerHTML = precioTlf;
          ticketPrecioTotal.innerHTML = precioTotalMostrado.toFixed(2);
          ticketPrecioTotal2.innerHTML = precioTotalMostrado.toFixed(2);
        }

        switch (nombreTarifaSeleccionada) {
          case "vodafone-ilimitada":
            carrusel3Items.style.display = "none";
            carrusel2Items.style.display = "none";
            carrusel1Items.style.display = "block";
            carrusel4Items.style.display = "none";
            securenetContainer.style.display = "block";
            hatchContainer.style.display = "none";
            oneNumberContainer.style.display = "none";
            break;

          case "vodafone-super":
            carrusel3Items.style.display = "none";
            carrusel2Items.style.display = "block";
            carrusel1Items.style.display = "none";
            carrusel4Items.style.display = "none";
            securenetContainer.style.display = "block";
            hatchContainer.style.display = "block";
            oneNumberContainer.style.display = "none";
            break;

          case "vodafone-total":
            carrusel3Items.style.display = "none";
            carrusel2Items.style.display = "block";
            carrusel1Items.style.display = "none";
            carrusel4Items.style.display = "none";
            securenetContainer.style.display = "block";
            hatchContainer.style.display = "block";
            oneNumberContainer.style.display = "none";
            break;

          case "vodafone-mini":
            carrusel3Items.style.display = "none";
            carrusel2Items.style.display = "block";
            carrusel1Items.style.display = "none";
            carrusel4Items.style.display = "none";
            securenetContainer.style.display = "block";
            hatchContainer.style.display = "block";
            oneNumberContainer.style.display = "none";
            break;

          case "vodafone-extra":
            carrusel3Items.style.display = "none";
            carrusel2Items.style.display = "block";
            carrusel1Items.style.display = "none";
            carrusel4Items.style.display = "none";
            securenetContainer.style.display = "block";
            hatchContainer.style.display = "block";
            oneNumberContainer.style.display = "none";
            break;

          case "vodafone-one-ilimitada":
            carrusel3Items.style.display = "none";
            carrusel2Items.style.display = "none";
            carrusel1Items.style.display = "none";
            carrusel4Items.style.display = "block";
            securenetContainer.style.display = "block";
            hatchContainer.style.display = "none";
            oneNumberContainer.style.display = "block";
            break;

          case "vodafone-one-super":
            carrusel3Items.style.display = "block";
            carrusel2Items.style.display = "none";
            carrusel1Items.style.display = "none";
            carrusel4Items.style.display = "none";
            securenetContainer.style.display = "block";
            hatchContainer.style.display = "block";
            oneNumberContainer.style.display = "block";
            break;

          case "vodafone-one-total":
            carrusel3Items.style.display = "block";
            carrusel2Items.style.display = "none";
            carrusel1Items.style.display = "none";
            carrusel4Items.style.display = "none";
            securenetContainer.style.display = "block";
            hatchContainer.style.display = "block";
            oneNumberContainer.style.display = "block";
            break;

          case "vodafone-one-mini":
            carrusel3Items.style.display = "block";
            carrusel2Items.style.display = "none";
            carrusel1Items.style.display = "none";
            carrusel4Items.style.display = "none";
            securenetContainer.style.display = "block";
            hatchContainer.style.display = "block";
            oneNumberContainer.style.display = "block";
            break;

          case "vodafone-one-extra":
            carrusel3Items.style.display = "block";
            carrusel2Items.style.display = "none";
            carrusel1Items.style.display = "none";
            carrusel4Items.style.display = "none";
            securenetContainer.style.display = "block";
            hatchContainer.style.display = "block";
            oneNumberContainer.style.display = "block";
            break;

          default:
            carrusel3Items.style.display = "none";
            carrusel2Items.style.display = "none";
            carrusel1Items.style.display = "block";
            carrusel4Items.style.display = "none";
            securenetContainer.style.display = "block";
            hatchContainer.style.display = "none";
            oneNumberContainer.style.display = "none";
        }
      });
    }
  }
};

_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onStylesReady();

/***/ }),

/***/ "../../../../../../Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/tools.js":
/*!*******************************************************************************************************!*\
  !*** /Users/fullsix/Desktop/microsites-cbu/03-test/mobile/09-ficha-mobile/resources/scripts/tools.js ***!
  \*******************************************************************************************************/
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
function init() {}

let width = document.documentElement.clientWidth;
let isDesktop, isTablet, isMobile;
isDesktop = width > 969;
isTablet = width <= 969 && width >= 768;
isMobile = width < 768 && width > 300; // TODO
// const PATH_MICROSITE = document.querySelector('#micro-paquetes').parents('[data-pathmicrosite]').attr('data-pathmicrosite');

const ex = {
  isDesktop,
  isTablet,
  isMobile,
  //micrositePath: PATH_MICROSITE,
  init: init,
  cssLoaded: false,
  onStylesReady: () => null
};
const cssMain = document.querySelector('link[data-microcss]');

if (cssMain) {
  //Commented for compatibility with Firefox
  //cssMain.addEventListener('load', function () {
  (window.vfes || window._vf)._utils.init(document.querySelector('.vfes-ms-content'));

  document.querySelector('.vfes-ms-content').removeAttribute("style");
  ex.cssLoaded = true;
  ex.onStylesReady(); //});
}

/* harmony default export */ __webpack_exports__["default"] = (ex);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9mdWxsc2l4L0Rlc2t0b3AvbWljcm9zaXRlcy1jYnUvMDMtdGVzdC9tb2JpbGUvMDktZmljaGEtbW9iaWxlL3Jlc291cmNlcy9zY3JpcHRzL19jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9mdWxsc2l4L0Rlc2t0b3AvbWljcm9zaXRlcy1jYnUvMDMtdGVzdC9tb2JpbGUvMDktZmljaGEtbW9iaWxlL3Jlc291cmNlcy9zY3JpcHRzL19jb25maWd1cmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9mdWxsc2l4L0Rlc2t0b3AvbWljcm9zaXRlcy1jYnUvMDMtdGVzdC9tb2JpbGUvMDktZmljaGEtbW9iaWxlL3Jlc291cmNlcy9zY3JpcHRzL19jcmVhdG9yLmpzIiwid2VicGFjazovLy8vVXNlcnMvZnVsbHNpeC9EZXNrdG9wL21pY3Jvc2l0ZXMtY2J1LzAzLXRlc3QvbW9iaWxlLzA5LWZpY2hhLW1vYmlsZS9yZXNvdXJjZXMvc2NyaXB0cy9fbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9mdWxsc2l4L0Rlc2t0b3AvbWljcm9zaXRlcy1jYnUvMDMtdGVzdC9tb2JpbGUvMDktZmljaGEtbW9iaWxlL3Jlc291cmNlcy9zY3JpcHRzL19wcmljZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2Z1bGxzaXgvRGVza3RvcC9taWNyb3NpdGVzLWNidS8wMy10ZXN0L21vYmlsZS8wOS1maWNoYS1tb2JpbGUvcmVzb3VyY2VzL3NjcmlwdHMvX3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2Z1bGxzaXgvRGVza3RvcC9taWNyb3NpdGVzLWNidS8wMy10ZXN0L21vYmlsZS8wOS1maWNoYS1tb2JpbGUvcmVzb3VyY2VzL3NjcmlwdHMvX3RpY2tldC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2Z1bGxzaXgvRGVza3RvcC9taWNyb3NpdGVzLWNidS8wMy10ZXN0L21vYmlsZS8wOS1maWNoYS1tb2JpbGUvcmVzb3VyY2VzL3NjcmlwdHMvX3V0aWxzLmpzIiwid2VicGFjazovLy8vVXNlcnMvZnVsbHNpeC9EZXNrdG9wL21pY3Jvc2l0ZXMtY2J1LzAzLXRlc3QvbW9iaWxlLzA5LWZpY2hhLW1vYmlsZS9yZXNvdXJjZXMvc2NyaXB0cy9fd2FsbG1lcmljLmpzIiwid2VicGFjazovLy8vVXNlcnMvZnVsbHNpeC9EZXNrdG9wL21pY3Jvc2l0ZXMtY2J1LzAzLXRlc3QvbW9iaWxlLzA5LWZpY2hhLW1vYmlsZS9yZXNvdXJjZXMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovLy8vVXNlcnMvZnVsbHNpeC9EZXNrdG9wL21pY3Jvc2l0ZXMtY2J1LzAzLXRlc3QvbW9iaWxlLzA5LWZpY2hhLW1vYmlsZS9yZXNvdXJjZXMvc2NyaXB0cy90b29scy5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0cyIsIiRlbGVtZW50IiwidW5kZWZpbmVkIiwic2VsZWN0b3JzIiwiYWNjb3JkaW9uIiwic2hvdyIsImhpZGUiLCJjbGFzc2VzIiwiQ29tbW9uIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwib25DaGFuZ2UiLCJFdmVudCIsImluaXQiLCJoYXNBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJtb2QiLCJmb3JFYWNoIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidXR0b24iLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiYWNjb3JkaW9uU2hvd0NvbnRlbnQiLCJhY2NvcmRpb25IaWRlQ29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhY2NvcmRpb25CaW5kIiwiYnV0dG9uT3BlbmVkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiYWRkZWQiLCJibG9jayIsImNvdW50ZXIiLCJjb3VudGVyTnVtIiwiZGVzY3JpcHRpb24iLCJlbGVtZW50IiwibGVzcyIsIm1vcmUiLCJwcmljZSIsInNpbmdsZSIsInRpY2tldCIsInRpdGxlIiwibWFpbiIsIkNvbmZpZ3VyYXRvciIsImNvbmZpZ3VyYXRvciIsImluZm8iLCJKU09OIiwicGFyc2UiLCJtYXhQb3MiLCJjb250YWluZXIiLCJhY3RpdmVDb3VudGVyIiwiYmluZCIsImFkZEJ1dHRvbnNIYW5kbGVyIiwicmVtb3ZlQnV0dG9uc0hhbmRsZXIiLCJ0aWNrZXRIYW5kbGVyIiwiYWRkQnV0dG9ucyIsIm1lc3NhZ2UiLCJjbG9zZXN0IiwiY29udGFpbnMiLCJ0b0xvd2VyQ2FzZSIsImlubmVyVGV4dCIsImlzTWFpbkVsZW1lbnQiLCJudW0iLCJkaXNwYXRjaEV2ZW50IiwicmVtb3ZlQnV0dG9ucyIsImRvY3VtZW50IiwiZXYiLCJpc01haW4iLCJkYWRkeSIsInJlc2V0Q29uZmlnIiwiZWwiLCJyZW1vdmVFbGVtZW50IiwiYWRkRWxlbWVudCIsInJlc2V0UmVscyIsImVuZW1pZXMiLCJsZW5ndGgiLCJpZCIsInRvUmVtb3ZlIiwibGVzc0J1dHRvbiIsIm1vcmVCdXR0b24iLCJudW1FbGVtZW50IiwiY291bnRlckFjdGlvbiIsIm9wZXJhdGlvbiIsImJ1dHRvbnMiLCJwYXJzZUludCIsImRpc2FibGVkIiwidG9BZGQiLCJyZXNldENvdW50ZXIiLCJhbGxFbHMiLCJhZGRCdXR0b24iLCJyZW1vdmVCdXR0b24iLCJzaG93RWxlbWVudCIsInNpbmdsZURhZGR5IiwiZWxlbWVudHMiLCJyZWxzIiwicmVsIiwic2VsZWN0b3IiLCJkZWZhdWx0QWRkZWQiLCJDUkVBVE9SIiwiY3JlYXRlSXRlbSIsImNvbmZpZyIsIm5ld0l0ZW0iLCJjcmVhdGVFbGVtZW50Iiwic2hvdWxkSGFzQnV0dG9uIiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwiaXNQcm9tbyIsImh0bWwiLCJsaXN0IiwiaXRlbSIsInRpY2tldEVsZW1lbnRDU1MiLCJ0aWNrZXRJdGVtSlMiLCJpbm5lckhUTUwiLCJjcmVhdGVCbG9jayIsImNvbnRlbnRCbG9jayIsImlkQ29udGVudCIsIm5ld0Jsb2NrIiwic3ZnIiwiY2FyZExpc3RDb250ZW50Q1NTIiwiY29sb3JCZ0xpZ2hHcmF5IiwidGlja2V0QmxvY2tDb250ZW50SlMiLCJjYXJkTGlzdENvbnRhaW5lckNTUyIsInRpY2tldEJsb2NrSlMiLCJtb2RhbCIsIm1vZGFsQ2xvc2UiLCJtb2RhbENvbmZpcm1BY2NlcHQiLCJtb2RhbENvbmZpcm1DYW5jZWwiLCJtb2RhbENvbnRlbnQiLCJtb2RhbEl0ZW0iLCJtb2RhbFNob3dDU1MiLCJtb2RhbEl0ZW1TaG93Q1NTIiwibW9kYWxDb25maXJtIiwiTU9EQUwiLCJjb25maXJtIiwicmVzb2x2ZSIsInJlamVjdCIsImNhbmNlbEJ1dHRvbiIsImFjY2VwdEJ1dHRvbiIsImNsb3NlQnV0dG9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsb3NlQ29uZmlybSIsIlBSSUNFIiwidHJhbnNmb3JtIiwicGFyc2VGbG9hdCIsInJlcGxhY2UiLCJ0b1N0cmluZyIsImNhbGNDb250ZW50IiwiY29udGVudCIsImNvbnRlbnRzIiwic3VtUGFydGlhbHNGcm9tQ29udGVudCIsInRpY2tldEJsb2NrIiwiaW5jbHVkZVRpY2tldFByb2R1Y3QiLCJzdW1QYXJ0aWFsUHJpY2VzIiwicGFydGlhbFByaWNlcyIsInRpY2tldEl0ZW0iLCJwYXJ0aWFsUHJpY2UiLCJ0b3RhbFByaWNlIiwiY2FsY1RvdGFsIiwidG90YWxQcmljZXMiLCJzdW1Ub3RhbFByaWNlcyIsImlzTmFOIiwiTWF0aCIsInJvdW5kIiwiaW5jbHVkZVZhbHVlSW5OYW1lU3BhY2UiLCJmaW5hbFByaWNlIiwicmVjYWxjdWxhdGUiLCJtZGQiLCJTQ1JPTEwiLCJ0aHJvdHRsZSIsIm1vdmVUaWNrZXQiLCJ0aWNrZXRQb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjb25maWdQb3MiLCJ0b3AiLCJib3R0b20iLCJoZWlnaHQiLCJmdW5jIiwibGltaXQiLCJsYXN0RnVuYyIsImxhc3RSYW4iLCJjdHgiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJEYXRlIiwibm93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImlkcyIsInByb21vcyIsImJvZHkiLCJjb25maWdCbG9jayIsImNvbmZpZ0VsZW1lbnQiLCJjb25maWdJbml0aWFsUGF5IiwiY29uZmlnTWFpbiIsImRyb3Bkb3duIiwibGkiLCJvdmVybGF5IiwicXVhbnRpdHkiLCJ0aWNrZXRDb250ZW50IiwidGlja2V0SW5pdGlhbFBheSIsInRpY2tldEl0ZW1UaXRsZSIsInRpY2tldExpbmsiLCJ0aWNrZXRCdXR0b24iLCJ0aWNrZXRDbG9zZUJ1dHRvbiIsInByb21vIiwiYXR0ciIsIlRpY2tldCIsInRpbWVQaWxlIiwiZWxlbWVudHNBZGRlZCIsImNvbmZpZ0Jsb2NrcyIsImFkZEJsb2NrVG9UaWNrZXQiLCJhZGRJdGVtVG9UaWNrZXQiLCJ0eXBlIiwibWFpbkVsZW1lbnRNYW5hZ2VyIiwiY291bnRlckVsZW1lbnRNYW5hZ2VyIiwiZGVmYXVsdEVsZW1lbnRNYW5hZ2VyIiwiY2hlY2tUaWNrZXRDb250ZW50Iiwib3ZlcmxheUFjdGlvbiIsIm5leHRFbGVtZW50U2libGluZyIsImFkZFByb21vc1RvVGlja2V0IiwiaGlkZUl0ZW0iLCJlbGVDb21wYSIsImNvbXBhdGliaWxpdGllcyIsImVuZW1pZXNBY3RpdmF0ZWQiLCJlbmVteSIsInB1c2giLCJ0ZXh0IiwiaXNBZGRlZCIsInBhcmVudEVsZW1lbnQiLCJibG9ja0NvbmZpZyIsImluaXRpYWxQYXkiLCJhcHBlbmRDaGlsZCIsImNsb3NlQnV0dG9uQ29udGVudCIsInRpY2tldEluaXRQYXkiLCJzaG93SXRlbSIsInJhdGUiLCJyYXRlQWN0aXZhdGVkIiwicHJvbW9Db3VudGVyIiwicHJvbW9CbG9jayIsImF1eCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJzaG93QmxvY2siLCJyZWNvdW50Q2hpbGRyZW4iLCJoaWRlQmxvY2siLCJjb3VudGVyQ2hpbGRyZW4iLCJnZXRFbGVtZW50QnlJZCIsIm5ld1ByaWNlIiwibmV3VGl0bGUiLCJuZXdEZXNjcmlwdGlvbiIsInRpY2tldE92ZXJsYXkiLCJ0aWNrZXRCb2R5IiwidGlja2V0RHJvcGRvd24iLCJjbGljayIsImNvbnRlbnRzQmxvY2tWaXNpYmxlIiwicmF0ZUFjdGl2ZSIsInJhdGVPYmplY3QiLCJjb3VudERpZmVyZW50SWRzIiwiY291bnRlclRydWVSZWxzIiwic2xpY2UiLCJjaGlsZHJlbiIsImNoaWxkIiwic2hvd1RpY2tldEJ1dHRvbiIsInNob3dUaWNrZXRMaW5rIiwiaHJlZiIsIm5ld0hyZWYiLCJsaW5rIiwiaWRUaWNrZXRJdGVtIiwiaXRlbUNvbmZpZyIsIlBBVEhfTUlDUk9TSVRFIiwiZ2xvYmFsTW9kdWxlcyIsIl9jb21tb24iLCJfY29uZmlndXJhdG9yIiwiX3RpY2tldCIsInV0aWxzIiwic2NvcGUiLCJtb2R1bGVzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibW9kdWxlc0F0dHIiLCJzcGxpdCIsImluc3RhbmNlIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjb21wYW55TmFtZSIsImtleSIsInZhbHVlIiwiaXNOYW1lc3BhY2VVbmRlZmluZWQiLCJyZWdpc3Rlck5hbWVzcGFjZSIsInNhdmVJbnRvTmFtZXNwYWNlIiwidGlja2V0TGlzdCIsImFyckNsYXNzIiwidmlzaWJsZUVscyIsImtleU9iamVjdCIsImluZGV4T2YiLCJzYXZlQ29udGVudEludG9OYW1lc3BhY2UiLCJ3aW5kb3ciLCJ2ZmVzIiwidG9vbHMiLCJvblN0eWxlc1JlYWR5IiwiaW5pdEJvdG9uZXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRpY2tldFRvdGFsIiwiYnRuUmF0ZU1vYmlsZSIsImJ0blJhdGVDb252ZXJnZW50ZSIsImNvbnRhaW5lclJhdGVNb2JpbGUiLCJjb250YWluZXJSYXRlQ29udmVyZ2VudGUiLCJzdHlsZSIsImRpc3BsYXkiLCJhYnJpclRhcmlmYXNNb3ZpbCIsImFicmlyVGFyaWZhc0NvbnZlcmdlbnRlIiwiYnRuQ2FwaXRhQ2VycmFyIiwiYnRuSW5mbyIsImluZm9DYXBpdGEiLCJhYnJpckNhcGl0YSIsImNlcnJhckNhcGl0YSIsInByZWNpb1RvdGFsTW9zdHJhZG8iLCJ0aWNrZXRQcmVjaW9Ub3RhbCIsInRpY2tldFByZWNpb1RvdGFsMiIsImNhcnJ1c2VsM0l0ZW1zIiwiY2FycnVzZWwySXRlbXMiLCJjYXJydXNlbDFJdGVtcyIsImNhcnJ1c2VsNEl0ZW1zIiwiZ2FmYXMiLCJhaXJwb2RzIiwiYnRuR2FmYXMiLCJidG5HYWZhc0VsaW1pbmFyIiwiYnRuQWlycG9kcyIsImJ0bkFpcnBvZHNFbGltaW5hciIsInNlbGVjY2lvbmFyR2FmYXMiLCJlbGltaW5hckdhZmFzIiwic2VsZWNjaW9uYXJBaXJwb2RzIiwiZWxpbWluYXJBaXJwb2RzIiwiZ2FmYXNDb250YWluZXJUaWNrZXQiLCJhaXJwb2RzQ29udGFpbmVyVGlja2V0IiwidGlja2V0UHJlY2lvQWNjZXNvcmlvIiwicHJlY2lvQWNjZSIsImFwZXJ0dXJhQWNjZXNvcmlvIiwidG9GaXhlZCIsImNoZWNrUG9ydGEiLCJjaGVja051bU51ZXZvIiwiY2hlY2tQbGF6b3MiLCJjaGVja1VuaWNvIiwibWVzZXNDb250YWluZXIiLCJtZXMzNiIsIm1lczI0IiwibWVzMzZJbmFjdGl2ZSIsIm1lczM2QWN0aXZlIiwibWVzMjRJbmFjdGl2ZSIsIm1lczI0QWN0aXZlIiwiZG9Qb3J0YWJpbGlkYWQiLCJjaGVja2VkIiwiZG9OdW1OdWV2byIsInRpcG9QYWdvUGxhem9zIiwiZG9QbGF6b3MiLCJkb1VuaWNvIiwiYWRkUGxhem9zMzYiLCJhZGRQbGF6b3MyNCIsInByZWNpb1RsZiIsImFwZXJ0dXJhVGxmIiwibWVub3NUbGYiLCJtYXNUbGYiLCJjb250ZVRsZiIsImFicmlyY2VycmFyVGxmIiwiZXN0YWRvVGxmIiwiYXBlcnR1cmFUYXJpZmEiLCJtZW5vc1RhcmlmYSIsIm1hc1RhcmlmYSIsImNvbnRlVGFyaWZhIiwiYWJyaXJjZXJyYXJUYXJpZmEiLCJlc3RhZG9UYXJpZmEiLCJtZW5vc0FjY2Vzb3JpbyIsIm1hc0FjY2Vzb3JpbyIsImNvbnRlQWNjZXNvcmlvIiwiYWJyaXJjZXJyYXJBY2Nlc29yaW8iLCJlc3RhZG9BY2Nlc29yaW8iLCJhcGVydHVyYUFkaWNpb25hbCIsIm1lbm9zQWRpY2lvbmFsIiwibWFzQWRpY2lvbmFsIiwiY29udGVBZGljaW9uYWwiLCJhYnJpcmNlcnJhckFkaWNpb25hbCIsImVzdGFkb0FkaWNpb25hbCIsInRpY2tldE5vbWJyZVRhcmlmYSIsInRpY2tldFByZWNpb1RhcmlmYSIsInRpY2tldFByZWNpb1RlbGVmb25vIiwic2VjdXJlbmV0Q29udGFpbmVyIiwiaGF0Y2hDb250YWluZXIiLCJvbmVOdW1iZXJDb250YWluZXIiLCJwcmVjaW9UYXJpZlNlbGVjdCIsImJvdG9uZXNBZGQiLCJpIiwiaiIsInRvZG9zIiwiZGF0YXNldCIsInRhcmlmYSIsInRvZG9zUGFyYUJvcnJhciIsImZpcnN0RWxlbWVudENoaWxkIiwibm9tYnJlVGFyaWZhU2VsZWNjaW9uYWRhIiwiZWxlbWVudG9UYXJpZmFTZWxlY3RhIiwidGFyaWZhTm9tYnJlIiwicHJlY2lvVGFyaWZhIiwicHJlY2lvUGxhem9zIiwicHJlY2lvVW5pY28iLCJ3aWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaXNEZXNrdG9wIiwiaXNUYWJsZXQiLCJpc01vYmlsZSIsImV4IiwiY3NzTG9hZGVkIiwiY3NzTWFpbiIsIl92ZiIsIl91dGlscyIsInJlbW92ZUF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QVEsQ0FBQ3lWLGVBQVQsQ0FBeUJDLFdBQXJDO0FBQ0EsSUFBSUMsU0FBSixFQUFlQyxRQUFmLEVBQXlCQyxRQUF6QjtBQUNBRixTQUFTLEdBQUdILEtBQUssR0FBRyxHQUFwQjtBQUNBSSxRQUFRLEdBQUdKLEtBQUssSUFBSSxHQUFULElBQWdCQSxLQUFLLElBQUksR0FBcEM7QUFDQUssUUFBUSxHQUFHTCxLQUFLLEdBQUcsR0FBUixJQUFlQSxLQUFLLEdBQUcsR0FBbEMsQyxDQUNBO0FBQ0E7O0FBRUEsTUFBTU0sRUFBRSxHQUFHO0FBQ1BILFdBRE87QUFFUEMsVUFGTztBQUdQQyxVQUhPO0FBSVA7QUFDQWxaLE1BQUksRUFBRUEsSUFMQztBQU1Qb1osV0FBUyxFQUFFLEtBTko7QUFPUGhILGVBQWEsRUFBRSxNQUFNO0FBUGQsQ0FBWDtBQVVBLE1BQU1pSCxPQUFPLEdBQUdoVyxRQUFRLENBQUM3QyxhQUFULENBQXVCLHFCQUF2QixDQUFoQjs7QUFDQSxJQUFHNlksT0FBSCxFQUFXO0FBQ1A7QUFDQTtBQUNJLEdBQUNwSCxNQUFNLENBQUNDLElBQVAsSUFBZUQsTUFBTSxDQUFDcUgsR0FBdkIsRUFBNEJDLE1BQTVCLENBQW1DdlosSUFBbkMsQ0FBd0NxRCxRQUFRLENBQUM3QyxhQUFULENBQXVCLGtCQUF2QixDQUF4Qzs7QUFDQTZDLFVBQVEsQ0FBQzdDLGFBQVQsQ0FBdUIsa0JBQXZCLEVBQTJDZ1osZUFBM0MsQ0FBMkQsT0FBM0Q7QUFDQUwsSUFBRSxDQUFDQyxTQUFILEdBQWUsSUFBZjtBQUNBRCxJQUFFLENBQUMvRyxhQUFILEdBTkcsQ0FPUDtBQUNIOztBQUVjK0csaUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvZnVsbHNpeC9EZXNrdG9wL21pY3Jvc2l0ZXMtY2J1LzAzLXRlc3QvbW9iaWxlLzA5LWZpY2hhLW1vYmlsZS9yZXNvdXJjZXMvc2NyaXB0cy9tYWluLmpzXCIpO1xuIiwiY29uc3QgZGVmYXVsdHMgPSB7XHJcbiAgICAkZWxlbWVudDogdW5kZWZpbmVkLFxyXG4gICAgc2VsZWN0b3JzOiB7XHJcbiAgICAgICAgYWNjb3JkaW9uOiB7XHJcbiAgICAgICAgICAgIHNob3c6ICcuanMtY29tbW9uLWFjY29yZGlvbi1zaG93JyxcclxuICAgICAgICAgICAgaGlkZTogJy5qcy1jb21tb24tYWNjb3JkaW9uLWhpZGUnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNsYXNzZXM6IHtcclxuICAgICAgICBoaWRlOiAnaGlkZSdcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvbW1vbi5cclxuICpcclxuICogQG1vZHVsZSBDb21tb25cclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgLSBzcGVjaWZpZXMgdGhlIGNvbmZpZ3VyYXRpb25zIGZvciB0aGUgbW9kdWxlLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMgPSB7fSkge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSBwcm9wZXJ0aWVzLiRlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3JzID0gZGVmYXVsdHMuc2VsZWN0b3JzO1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IGRlZmF1bHRzLmNsYXNzZXM7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IG5ldyBFdmVudCgndmZlczpjaGFuZ2VkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIHRoZSBtb2R1bGUuXHJcbiAgICAgKlxyXG4gICAgICogQGZ1bmN0aW9uIGluaXRcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGlmKCF0aGlzLiRlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1jb21tb24tZnVuY3Rpb24nKSkge1xyXG4gICAgICAgICAgICB0aHJvdyAnRmFsdGEgZWwgYXRyaWJ1dG8gXCJkYXRhLWNvbW1vbi1mdW5jdGlvblwiIGVuIGVsIGVsZW1lbnRvLic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2godGhpcy4kZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29tbW9uLWZ1bmN0aW9uJykpIHtcclxuICAgICAgICAgICAgY2FzZSAnYWNjb3JkaW9uJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjb3JkaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogQWNjb3JkaW9uIG1vZHVsZVxyXG4gICAgICpcclxuICAgICAqIEBmdW5jdGlvbiBhY2NvcmRpb25cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBhY2NvcmRpb24oKSB7XHJcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcy4kZWxlbWVudDtcclxuXHJcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG1vZC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jb21tb24tYWNjb3JkaW9uPVwiYnV0dG9uXCJdJyksIGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFidXR0b24uaGFzQXR0cmlidXRlKCdkYXRhLWluaXRpYWxpemVkJykpIHtcclxuICAgICAgICAgICAgICAgIGlmKCFidXR0b24uaGFzQXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAnQUNDT1JESU9OIEVSUk9SISBFbCBlbGVtZW50byBubyB0aWVuZSBlbCBhdHJpYnV0byBcImFyaWEtY29udHJvbHNcIiBjb24gZWwgaWQgZGUgc3UgY29udGVuaWRvLic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKCFtb2QucXVlcnlTZWxlY3RvcihgIyR7YnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpfWApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgYEFDQ09SRElPTiBFUlJPUiEgRWwgZWxlbWVudG8gY3V5byBpZCBlcyAke21vZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKX0gbm8gZXhpc3RlLmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIWJ1dHRvbi5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmFjY29yZGlvbi5zaG93KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGBBQ0NPUkRJT04gRVJST1IhIERlYmUgaW5jbHVpciBlbiBlbCBib3TDs24gdW4gZWxlbWVudG8gY29uIGxhIGNsYXNlICR7dGhpcy5zZWxlY3RvcnMuYWNjb3JkaW9uLnNob3d9IHBhcmEgaWRlbnRpZmljYXIgZWwgdGV4dG8gZGUgYXBlcnR1cmFgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKCFidXR0b24ucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5hY2NvcmRpb24uaGlkZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBgQUNDT1JESU9OIEVSUk9SISBEZWJlIGluY2x1aXIgZW4gZWwgYm90w7NuIHVuIGVsZW1lbnRvIGNvbiBsYSBjbGFzZSAke3RoaXMuc2VsZWN0b3JzLmFjY29yZGlvbi5oaWRlfSBwYXJhIGlkZW50aWZpY2FyIGVsIHRleHRvIGRlIGNpZXJyZWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pbml0aWFsaXplZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uaGFzQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPyBudWxsIDogYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvcmRpb25TaG93Q29udGVudChidXR0b24pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY29yZGlvbkhpZGVDb250ZW50KGJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5hY2NvcmRpb25CaW5kKG1vZCwgYnV0dG9uKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFjY29yZGlvbiBoYW5kbGVyLlxyXG4gICAgICpcclxuICAgICAqIEBmdW5jdGlvbiBhY2NvcmRpb25CaW5kXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcclxuICAgICAqL1xyXG4gICAgYWNjb3JkaW9uQmluZChtb2QsIGJ1dHRvbikge1xyXG4gICAgICAgIGxldCBidXR0b25PcGVuZWQgPSBtb2QucXVlcnlTZWxlY3RvcignW2RhdGEtY29tbW9uLWFjY29yZGlvbj1cImJ1dHRvblwiXVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXScpO1xyXG5cclxuICAgICAgICBidXR0b25PcGVuZWQgJiYgYnV0dG9uT3BlbmVkICE9PSBidXR0b24gPyB0aGlzLmFjY29yZGlvbkhpZGVDb250ZW50KGJ1dHRvbk9wZW5lZCkgOiBudWxsO1xyXG5cclxuICAgICAgICBpZihidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICB0aGlzLmFjY29yZGlvbkhpZGVDb250ZW50KGJ1dHRvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hY2NvcmRpb25TaG93Q29udGVudChidXR0b24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgY29udGVudCBmcm9tIGFuIGl0ZW0gZnJvbSBhY2NvcmRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQGZ1bmN0aW9uIGFjY29yZGlvblNob3dDb250ZW50XHJcbiAgICAgKiBAcGFyYW0geyBIVE1MRWxlbWVudCB9IGJ1dHRvbiAtIGl0ZW0gZnJvbSBhY2NvcmRpb25cclxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIGFjY29yZGlvblNob3dDb250ZW50KGJ1dHRvbikge1xyXG4gICAgICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmFjY29yZGlvbi5oaWRlKS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5oaWRlKTtcclxuICAgICAgICBidXR0b24ucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5hY2NvcmRpb24uc2hvdykuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuaGlkZSk7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyl9YCkuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpfWApLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmhpZGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEhpZGUgY29udGVudCBmcm9tIGFuIGl0ZW0gZnJvbSBhY2NvcmRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQGZ1bmN0aW9uIGFjY29yZGlvbkhpZGVDb250ZW50XHJcbiAgICAgKiBAcGFyYW0geyBIVE1MRWxlbWVudCB9IGJ1dHRvbiAtIGl0ZW0gZnJvbSBhY2NvcmRpb25cclxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIGFjY29yZGlvbkhpZGVDb250ZW50KGJ1dHRvbikge1xyXG4gICAgICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmFjY29yZGlvbi5zaG93KS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5oaWRlKTtcclxuICAgICAgICBidXR0b24ucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5hY2NvcmRpb24uaGlkZSkuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuaGlkZSk7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpfWApLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpfWApLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmhpZGUpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxuICogRWwgY29uZmlndXJhZG9yIHBvciBkZW50cm8gdGllbmUgdHJlcyB0aXBvcyBkZSBjb21wb25lbnRlczpcbiAqICAxLiBFbCBjb21wb25lbnRlIHByaW5jaXBhbCBxdWUgaGFjZSBxdWUgc2UgbW9kaWZpcXVlbiBlbCByZXN0byBkZSBlbGVtZW50b3MuXG4gKiAgMi4gRWwgY29tcG9uZW50ZSBxdWUgZXMgdW4gZWxlbWVudG8gZW4gc2kgcXVlIHNlIGHDsWFkZSBvIHNlIHF1aXRhIGRpcmVjdGFtZW50ZS5cbiAqICAzLiBFTCBjb21wb25lbnRlIGNvdW50ZXIgcXVlIGVzIHVuIGNvbnRhZG9yIGRlIGVsZW1lbnRvcy5cbiAqL1xuXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgICAkZWxlbWVudDogdW5kZWZpbmVkLFxuICAgIHNlbGVjdG9yczoge1xuICAgICAgICBhZGQ6ICcuanMtY29uZmlndXJhdG9yLWFkZCcsXG4gICAgICAgIGFkZGVkOiAnLmFkZGVkJyxcbiAgICAgICAgYnV0dG9uOiAnLmpzLWNhcmQtc2VsZWN0b3ItYnV0dG9uJyxcbiAgICAgICAgYmxvY2s6ICcuanMtY29uZmlndXJhdG9yLWJsb2NrJyxcbiAgICAgICAgY291bnRlcjogJy5qcy1jb25maWd1cmF0b3ItY291bnRlcicsXG4gICAgICAgIGNvdW50ZXJOdW06ICcuanMtY291bnRlci1udW0nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJy5qcy1kZXNjcmlwdGlvbicsXG4gICAgICAgIGVsZW1lbnQ6ICcuanMtY29uZmlndXJhdG9yLWVsZW1lbnQnLFxuICAgICAgICBsZXNzOiAnLmpzLWNvdW50ZXItbGVzcycsXG4gICAgICAgIG1vcmU6ICcuanMtY291bnRlci1tb3JlJyxcbiAgICAgICAgcHJpY2U6ICcuanMtcHJpY2UnLFxuICAgICAgICByZW1vdmU6ICcuanMtY29uZmlndXJhdG9yLXJlbW92ZScsXG4gICAgICAgIHNpbmdsZTogJy5qcy1jb25maWd1cmF0b3Itc2luZ2xlLXZpZXdlZCcsXG4gICAgICAgIHRpY2tldDogJy5qcy1jb25maWd1cmF0b3ItdGlja2V0JyxcbiAgICAgICAgdGl0bGU6ICcuanMtdGl0bGUnXG4gICAgfSxcbiAgICBjbGFzc2VzOiB7XG4gICAgICAgIGFkZGVkOiAnYWRkZWQnLFxuICAgICAgICBjb3VudGVyOiAnanMtY29uZmlndXJhdG9yLWNvdW50ZXInLFxuICAgICAgICBoaWRlOiAnaGlkZScsXG4gICAgICAgIGFkZDogJ2FkZCcsXG4gICAgICAgIG1haW46ICdqcy1jb25maWd1cmF0b3ItbWFpbidcbiAgICB9XG59XG5cbi8qKlxuICogQ29uZmlndXJhdG9yLlxuICpcbiAqIEBtb2R1bGUgQ29uZmlndXJhdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyAtIHNwZWNpZmllcyB0aGUgY29uZmlndXJhdGlvbnMgZm9yIHRoZSBtb2R1bGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZ3VyYXRvciB7XG4gICAgY29uc3RydWN0b3IocHJvcGVydGllcyA9IHt9KSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdG9yID0gcHJvcGVydGllcy4kZWxlbWVudDtcbiAgICAgICAgdGhpcy5pbmZvID0gSlNPTi5wYXJzZShwcm9wZXJ0aWVzLmluZm8pO1xuICAgICAgICB0aGlzLnNlbGVjdG9ycyA9IGRlZmF1bHRzLnNlbGVjdG9ycztcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gZGVmYXVsdHMuY2xhc3NlcztcbiAgICAgICAgdGhpcy5tYXhQb3MgPSAzO1xuXG4gICAgICAgIC8vRXZlbnRzXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBuZXcgRXZlbnQoJ3ZmbXM6Y2hhbmdlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgbW9kdWxlLlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGluaXRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcblxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwobW9kLmNvbmZpZ3VyYXRvci5xdWVyeVNlbGVjdG9yQWxsKG1vZC5zZWxlY3RvcnMuY291bnRlciksIGNvbnRhaW5lciA9PiB7XG4gICAgICAgICAgICBtb2QuYWN0aXZlQ291bnRlcihjb250YWluZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtb2QuYmluZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjdGl2ZSBiYXNpYyBmdW5jdGlvbmFsaXR5IGZyb20gY29uZmlnLlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGJpbmRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgYmluZCgpIHtcbiAgICAgICAgdGhpcy5hZGRCdXR0b25zSGFuZGxlcigpO1xuICAgICAgICB0aGlzLnJlbW92ZUJ1dHRvbnNIYW5kbGVyKCk7XG4gICAgICAgIHRoaXMudGlja2V0SGFuZGxlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBidXR0b25zIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvbiBhZGRCdXR0b25zSGFuZGxlclxuICAgICAqXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBhZGRCdXR0b25zSGFuZGxlcigpIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcbiAgICAgICAgY29uc3QgYWRkQnV0dG9ucyA9IG1vZC5jb25maWd1cmF0b3IucXVlcnlTZWxlY3RvckFsbChgJHttb2Quc2VsZWN0b3JzLmVsZW1lbnR9ICR7bW9kLnNlbGVjdG9ycy5hZGR9YCk7XG4gICAgICAgIFxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoYWRkQnV0dG9ucywgYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gXCJcIjtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gYnV0dG9uLmNsb3Nlc3QobW9kLnNlbGVjdG9ycy5lbGVtZW50KTtcblxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhtb2Quc2VsZWN0b3JzLmJsb2NrKSkge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEhhcyBhw7FhZGlkbyAxICR7KEpTT04ucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29uZmlndXJhdG9yLWNvbmZpZycpKS50aXRsZSkudG9Mb3dlckNhc2UoKX1gO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSGFzIGHDsWFkaWRvICR7ZWxlbWVudC5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMudGl0bGUpLmlubmVyVGV4dH1gO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1vZC5vbkNoYW5nZS5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICBtb2Qub25DaGFuZ2UuYmxvY2sgPSBlbGVtZW50LmNsb3Nlc3QobW9kLnNlbGVjdG9ycy5ibG9jayk7XG4gICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLmlzTWFpbkVsZW1lbnQgPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhtb2QuY2xhc3Nlcy5tYWluKTtcbiAgICAgICAgICAgICAgICBtb2Qub25DaGFuZ2UubnVtID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIG1vZC5vbkNoYW5nZS5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobW9kLm9uQ2hhbmdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYnV0dG9ucyBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gcmVtb3ZlQnV0dG9uc0hhbmRsZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgcmVtb3ZlQnV0dG9uc0hhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSBtb2QuY29uZmlndXJhdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoYCR7bW9kLnNlbGVjdG9ycy5lbGVtZW50fSAke21vZC5zZWxlY3RvcnMucmVtb3ZlfWApO1xuICAgICAgICBcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKHJlbW92ZUJ1dHRvbnMsIGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBidXR0b24uY2xvc2VzdChtb2Quc2VsZWN0b3JzLmVsZW1lbnQpO1xuXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKG1vZC5zZWxlY3RvcnMuYmxvY2spKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSGFzIGVsaW1pbmFkbyAxICR7KEpTT04ucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29uZmlndXJhdG9yLWNvbmZpZycpKS50aXRsZSkudG9Mb3dlckNhc2UoKX1gO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSGFzIGVsaW1pbmFkbyAke2VsZW1lbnQucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLnRpdGxlKS5pbm5lclRleHR9YDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtb2Qub25DaGFuZ2UuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLmJsb2NrID0gZWxlbWVudC5jbG9zZXN0KG1vZC5zZWxlY3RvcnMuYmxvY2spO1xuICAgICAgICAgICAgICAgIG1vZC5vbkNoYW5nZS5pc01haW5FbGVtZW50ID0gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMobW9kLmNsYXNzZXMubWFpbik7XG4gICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLm51bSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBtb2Qub25DaGFuZ2UubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG1vZC5vbkNoYW5nZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGlja2V0IGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvbiB0aWNrZXRIYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHRpY2tldEhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmZtcy1qcz1cIl90aWNrZXRcIl0nKS5hZGRFdmVudExpc3RlbmVyKCd2Zm1zOmNoYW5nZScsIGV2ID0+IHtcbiAgICAgICAgICAgIGxldCBpc01haW4gPSBldi5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhtb2QuY2xhc3Nlcy5tYWluKTtcblxuICAgICAgICAgICAgaWYgKGlzTWFpbikge1xuICAgICAgICAgICAgICAgIGxldCBkYWRkeSA9IGV2LmVsZW1lbnQuY2xvc2VzdChtb2Quc2VsZWN0b3JzLmJsb2NrKTtcblxuICAgICAgICAgICAgICAgIG1vZC5yZXNldENvbmZpZygpO1xuXG4gICAgICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGRhZGR5LnF1ZXJ5U2VsZWN0b3JBbGwobW9kLnNlbGVjdG9ycy5lbGVtZW50KSwgZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtb2QucmVtb3ZlRWxlbWVudChlbCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBtb2QuYWRkRWxlbWVudChldi5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICBtb2QucmVzZXRSZWxzKGV2LmVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYuZW5lbWllcyAmJiBldi5lbmVtaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZXYuZW5lbWllcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZC5yZW1vdmVFbGVtZW50KG1vZC5jb25maWd1cmF0b3IucXVlcnlTZWxlY3RvcignIycgKyBpZCkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZXYudG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kLnJlbW92ZUVsZW1lbnQoZXYuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kLmFkZEVsZW1lbnQoZXYuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY291bnRlciBlbGVtZW50cyBmdW5jdGlvbmFsaXR5XG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gYWN0aXZlQ291bnRlclxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIGNvdW50ZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgYWN0aXZlQ291bnRlcihjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcbiAgICAgICAgbGV0IGxlc3NCdXR0b24gPSBjb250YWluZXIucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLmxlc3MpO1xuICAgICAgICBsZXQgbW9yZUJ1dHRvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMubW9yZSk7XG4gICAgICAgIGxldCBudW1FbGVtZW50ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5jb3VudGVyTnVtKTtcblxuICAgICAgICBsZXNzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbW9kLmNvdW50ZXJBY3Rpb24oJ2xlc3MnLCBudW1FbGVtZW50LCBjb250YWluZXIsIHtcbiAgICAgICAgICAgICAgICBsZXNzOiBsZXNzQnV0dG9uLFxuICAgICAgICAgICAgICAgIG1vcmU6IG1vcmVCdXR0b25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBtb3JlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbW9kLmNvdW50ZXJBY3Rpb24oJ21vcmUnLCBudW1FbGVtZW50LCBjb250YWluZXIsIHtcbiAgICAgICAgICAgICAgICBsZXNzOiBsZXNzQnV0dG9uLFxuICAgICAgICAgICAgICAgIG1vcmU6IG1vcmVCdXR0b25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGluZyBjb3VudGVyIGFjdGlvblxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGFjdGl2ZUNvdW50ZXJcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3BlcmF0aW9uIC0gbGVzcyBvciBtb3JlIG9wZXJhdGlvblxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG51bUVsZW1lbnQgLSBjb3VudGVyIG51bSBIVE1MIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgLSBjb3VudGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGJ1dHRvbnMgLSBPYmplY3Qgd2l0aCBidXR0b25zIHRvIGluY3JlbWVudCBhbmQgZGVjcmVhc2UgY291bnRlciBudW1iZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgY291bnRlckFjdGlvbihvcGVyYXRpb24sIG51bUVsZW1lbnQsIGNvbnRhaW5lciwgYnV0dG9ucykge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBsZXQgbnVtID0gcGFyc2VJbnQobnVtRWxlbWVudC5pbm5lclRleHQpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuYWRkZWQpO1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICdsZXNzJyAmJiBudW0gPiAwKSB7XG4gICAgICAgICAgICBtb2Qub25DaGFuZ2UubnVtID0gbnVtO1xuXG4gICAgICAgICAgICBudW0tLTtcbiAgICAgICAgICAgIG51bUVsZW1lbnQuaW5uZXJUZXh0ID0gbnVtO1xuICAgICAgICAgICAgYnV0dG9ucy5tb3JlLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmhpZGUpO1xuICAgICAgICAgICAgYnV0dG9ucy5tb3JlLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIG1vZC5vbkNoYW5nZS50b0FkZCA9IGZhbHNlO1xuICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLm1lc3NhZ2UgPSAnSGFzIGVsaW1pbmFkbyAxIGzDrW5lYSBhZGljaW9uYWwnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnbW9yZScgJiYgbnVtIDwgdGhpcy5tYXhQb3MpIHtcblxuICAgICAgICAgICAgbnVtKys7XG4gICAgICAgICAgICBudW1FbGVtZW50LmlubmVyVGV4dCA9IG51bTtcbiAgICAgICAgICAgIGJ1dHRvbnMubGVzcy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgICAgIGJ1dHRvbnMubGVzcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBtb2Qub25DaGFuZ2UubnVtID0gbnVtO1xuICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLnRvQWRkID0gdHJ1ZTtcbiAgICAgICAgICAgIG1vZC5vbkNoYW5nZS5tZXNzYWdlID0gJ0hhcyBhw7FhZGlkbyAxIGzDrW5lYSBhZGljaW9uYWwnO1xuICAgICAgICB9XG5cbiAgICAgICAgbW9kLm9uQ2hhbmdlLmVsZW1lbnQgPSBjb250YWluZXI7XG4gICAgICAgIG1vZC5vbkNoYW5nZS5ibG9jayA9IGNvbnRhaW5lcjtcbiAgICAgICAgbW9kLm9uQ2hhbmdlLmlzTWFpbkVsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobW9kLm9uQ2hhbmdlKTtcblxuICAgICAgICBpZiAobnVtIDw9IDAgJiYgIWJ1dHRvbnMubGVzcy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmhpZGUpKSB7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuYWRkZWQpO1xuICAgICAgICAgICAgYnV0dG9ucy5sZXNzLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmhpZGUpO1xuICAgICAgICAgICAgYnV0dG9ucy5sZXNzLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICB9IGVsc2UgaWYgKG51bSA+PSB0aGlzLm1heFBvcyAmJiAhYnV0dG9ucy5tb3JlLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuaGlkZSkpIHtcbiAgICAgICAgICAgIGJ1dHRvbnMubW9yZS5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgICAgIGJ1dHRvbnMubW9yZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY291bnRlciB0byBpbml0XG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gcmVzZXRDb3VudGVyXG4gICAgICogXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY291bnRlciAtIGNvdW50ZXIgSFRNTCBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlc2V0Q291bnRlcihjb3VudGVyKSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGxlc3MgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5sZXNzKTtcbiAgICAgICAgY29uc3QgbW9yZSA9IGNvdW50ZXIucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLm1vcmUpO1xuXG4gICAgICAgIGNvdW50ZXIuY2xhc3NMaXN0LnJlbW92ZShtb2QuY2xhc3Nlcy5hZGRlZCk7XG4gICAgICAgIGNvdW50ZXIucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLmNvdW50ZXJOdW0pLmlubmVyVGV4dCA9IFwiMFwiO1xuXG4gICAgICAgIGxlc3MuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBsZXNzLmNsYXNzTGlzdC5hZGQobW9kLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgIG1vcmUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgbW9yZS5jbGFzc0xpc3QucmVtb3ZlKG1vZC5jbGFzc2VzLmhpZGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhbGwgY29uZmlnIGVsZW1lbnRzIHRvIGRlZmF1bHRcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvbiByZXNldENvbmZpZ1xuICAgICAqIFxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgcmVzZXRDb25maWcoKSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGFsbEVscyA9IG1vZC5jb25maWd1cmF0b3IucXVlcnlTZWxlY3RvckFsbChtb2Quc2VsZWN0b3JzLmVsZW1lbnQpO1xuXG4gICAgICAgIFtdLmZvckVhY2guY2FsbChhbGxFbHMsIGVsID0+IHtcbiAgICAgICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMobW9kLmNsYXNzZXMuY291bnRlcikpIHtcbiAgICAgICAgICAgICAgICBtb2QucmVzZXRDb3VudGVyKGVsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kLnJlbW92ZUVsZW1lbnQoZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYWRkZWQgY2xhc3NlcyBmcm9tIGFuIGVsZW1lbnQgXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gYWRkRWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIGVsZW1lbnQgZnJvbSBjb25maWdcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIGFkZEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBsZXQgYWRkQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMuYWRkKTtcbiAgICAgICAgbGV0IHJlbW92ZUJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLnJlbW92ZSk7XG5cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKG1vZC5jbGFzc2VzLmFkZGVkKTtcblxuICAgICAgICBpZiAoYWRkQnV0dG9uKSB7XG4gICAgICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZChtb2QuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVtb3ZlQnV0dG9uKSB7XG4gICAgICAgICAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShtb2QuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gc2hvd0VsZW1lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBlbGVtZW50IGZyb20gY29uZmlnXG4gICAgICogXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBzaG93RWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG4gICAgICAgIGxldCBzaW5nbGVEYWRkeSA9IGVsZW1lbnQuY2xvc2VzdChtb2Quc2VsZWN0b3JzLnNpbmdsZSk7XG5cbiAgICAgICAgaWYgKHNpbmdsZURhZGR5KSB7XG4gICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwoc2luZ2xlRGFkZHkucXVlcnlTZWxlY3RvckFsbChtb2Quc2VsZWN0b3JzLmVsZW1lbnQpLCBlbCA9PiB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChtb2QuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgICAgICAgICBtb2QucmVtb3ZlRWxlbWVudChlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuaGlkZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvbiByZW1vdmVFbGVtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gZWxlbWVudCBmcm9tIGNvbmZpZ1xuICAgICAqIFxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgcmVtb3ZlRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGxldCBhZGRCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuYWRkKTtcbiAgICAgICAgbGV0IHJlbW92ZUJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5yZW1vdmUpO1xuXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuYWRkZWQpO1xuXG4gICAgICAgIGlmIChyZW1vdmVCdXR0b24pIHtcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWRkQnV0dG9uKSB7XG4gICAgICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgICAgICBhZGRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IG9wdGlvbnMgcmVsYXRpb25hdGVkIHdpdGggbWFpbiBlbGVtZW50IGZyb20gY29uZmlnXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gcmVzZXRSZWxzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gZWxlbWVudCBmcm9tIGNvbmZpZ1xuICAgICAqIFxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgcmVzZXRSZWxzKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcblxuICAgICAgICBtb2QuaW5mby5lbGVtZW50c1tlbGVtZW50LmlkXS5yZWxzLmZvckVhY2gocmVsID0+IHtcbiAgICAgICAgICAgIGlmIChyZWwuc2VsZWN0b3IgJiYgcmVsLnNlbGVjdG9yICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gbW9kLmNvbmZpZ3VyYXRvci5xdWVyeVNlbGVjdG9yKGAjJHtyZWwuc2VsZWN0b3J9YCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kLnNob3dFbGVtZW50KGVsKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVsLmRlZmF1bHRBZGRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kLmFkZEVsZW1lbnQoZWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJjb25zdCBkZWZhdWx0cyA9IHtcbiAgICBcInNlbGVjdG9yc1wiOiB7XG4gICAgICAgIFwibGlcIjogXCIuanMtbGlcIixcbiAgICAgICAgXCJudW1cIjogXCIuanMtY291bnRlci1udW1cIixcbiAgICAgICAgXCJwcmljZVwiOiBcIi5qcy1wcmljZVwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiLmpzLXRpdGxlXCIsXG4gICAgfSxcbiAgICBcImNsYXNzZXNcIjoge1xuICAgICAgICBcImNhcmRMaXN0Q29udGFpbmVyQ1NTXCI6IFwidmZlcy1jYXJkX19saXN0LWNvbnRhaW5lclwiLFxuICAgICAgICBcImNhcmRMaXN0Q29udGVudENTU1wiOiBcInZmZXMtY2FyZF9fbGlzdC1jb250ZW50XCIsXG4gICAgICAgIFwiY29sb3JCZ0xpZ2hHcmF5XCI6IFwidmZlcy1jb2xvdXJzLWJnLWxpZ2h0LWdyYXlcIixcbiAgICAgICAgXCJoaWRlXCI6IFwiaGlkZVwiLFxuICAgICAgICBcInRpY2tldEJsb2NrSlNcIjogXCJqcy10aWNrZXQtYmxvY2tcIixcbiAgICAgICAgXCJ0aWNrZXRCbG9ja0NvbnRlbnRKU1wiOiBcImpzLXRpY2tldC1ibG9jay1jb250ZW50XCIsXG4gICAgICAgIFwidGlja2V0RWxlbWVudENTU1wiOiBcInZmbXMtdGlja2V0X19lbGVtZW50XCIsXG4gICAgICAgIFwidGlja2V0SXRlbUpTXCI6IFwianMtdGlja2V0LWl0ZW1cIixcbiAgICB9XG59O1xuXG5jb25zdCBDUkVBVE9SID0ge1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGEgdGlja2V0J3MgaXRlbSAgXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gY3JlYXRlSXRlbVxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIGl0ZW0gcHJvcGVydGllc1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW06IChjb25maWcsIGluZm8pID0+IHtcbiAgICAgICAgbGV0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGlkID0gYHRpY2tldC1pdGVtLSR7Y29uZmlnLmlkfSR7Y29uZmlnLm51bSA/IGNvbmZpZy5udW0gOiAnJ31gO1xuICAgICAgICBsZXQgc2hvdWxkSGFzQnV0dG9uID0gT2JqZWN0LmtleXMoaW5mby5lbGVtZW50cykuaW5jbHVkZXMoaWQpIHx8IGNvbmZpZy5pc1Byb21vID8gICcnIDogYDxidXR0b24gY2xhc3M9XCJqcy10aWNrZXQtY2xvc2VcIj48c3ZnIGNsYXNzPVwiaWNvblwiIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHdpZHRoPScyNHB4JyBoZWlnaHQ9JzI0cHgnPjx0aXRsZT5DbG9zZTwvdGl0bGU+PHVzZSBjbGFzcz1cImljb24tdjNcIiB4bGluazpocmVmPScjaWNvbjMtY2xvc2UnPjwvdXNlPjwvc3ZnPjwvYnV0dG9uPmA7XG4gICAgICAgIGxldCBodG1sID0gYDxkaXYgY2xhc3M9XCJ2ZmVzLWNhcmRfX2xpc3QtY29udGVudC10aXRsZSB2ZmVzLW0wXCI+JHtzaG91bGRIYXNCdXR0b259PHAgY2xhc3M9XCJ2ZmVzLXBhcmFncmFwaCB2ZmVzLWZsZXgtMSBqcy10aWNrZXQtaXRlbS10aXRsZVwiPiR7Y29uZmlnLmRlc2NyaXB0aW9uID8gY29uZmlnLmRlc2NyaXB0aW9uIDogY29uZmlnLnRpdGxlfTwvcD4ke2NvbmZpZy5wcmljZSA/IGA8cCBjbGFzcz1cInZmZXMtcGFyYWdyYXBoIHZmZXMtY2FyZF9fbGlzdC1zcGFuLXByaWNlIGpzLXRpY2tldC1wYXJ0aWFsLXByaWNlXCI+JHtjb25maWcucHJpY2V9L21lczwvcD48L2Rpdj5gIDogJyd9YDtcblxuICAgICAgICBpZiAoY29uZmlnLmxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaHRtbCArPSAnPHVsIGNsYXNzPVwidmZlcy1jYXJkX19saXN0LWxpc3RcIj4nO1xuXG4gICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwoY29uZmlnLmxpc3QsIGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT4tICR7aXRlbS5pbm5lclRleHR9PC9saT5gO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGh0bWwgKz0gJzwvdWw+JztcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0l0ZW0uY2xhc3NMaXN0LmFkZChkZWZhdWx0cy5jbGFzc2VzLnRpY2tldEVsZW1lbnRDU1MpO1xuICAgICAgICBuZXdJdGVtLmNsYXNzTGlzdC5hZGQoZGVmYXVsdHMuY2xhc3Nlcy50aWNrZXRJdGVtSlMpO1xuICAgICAgICBuZXdJdGVtLmlkID0gaWQ7XG4gICAgICAgIG5ld0l0ZW0uaW5uZXJIVE1MID0gaHRtbDtcblxuICAgICAgICByZXR1cm4gbmV3SXRlbTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYSB0aWNrZXQncyBibG9jayAgXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gY3JlYXRlQmxvY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSBibG9jayBwcm9wZXJ0aWVzXG4gICAgICogXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGNyZWF0ZUJsb2NrOiBjb25maWcgPT4ge1xuICAgICAgICBsZXQgY29udGVudEJsb2NrLCBpZENvbnRlbnQ7XG4gICAgICAgIGxldCBuZXdCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgaHRtbCA9IGA8c3ZnIGNsYXNzPVwiaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjQwcHhcIiBoZWlnaHQ9XCI0MHB4XCI+PHRpdGxlPk1vYmlsZTwvdGl0bGU+PHVzZSBjbGFzcz1cImljb24tdjNcIiB4bGluazpocmVmPVwiIyR7Y29uZmlnLnN2Z31cIj48L3VzZT48L3N2Zz48ZGl2IGNsYXNzPVwidmZlcy1jYXJkX19saXN0LXBhcmFncmFwaHNcIj48cCBjbGFzcz1cInZmZXMtcGFyYWdyYXBoXCI+PHNwYW4gY2xhc3M9XCJqcy10aWNrZXQtcXVhbnRpdHlcIj4xPC9zcGFuPiAke2NvbmZpZy50aXRsZX08L3A+YDtcblxuICAgICAgICBpZiAoY29uZmlnLmJ1dHRvbikge1xuICAgICAgICAgICAgaWRDb250ZW50ID0gJ2FjY29yZGlvbi0nICsgY29uZmlnLmlkO1xuXG4gICAgICAgICAgICBodG1sICs9IGA8YnV0dG9uIGNsYXNzPVwidmZlcy1jYXJkX19saXN0LWJ1dHRvblwiIGRhdGEtY29tbW9uLWFjY29yZGlvbj1cImJ1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCIke2lkQ29udGVudH1cIj48c3BhbiBjbGFzcz1cInZmZXMtcGFyYWdyYXBoIGpzLWNvbW1vbi1hY2NvcmRpb24tc2hvd1wiPk3DoXMgaW5mbyA8c3ZnIGNsYXNzPVwiaWNvbiB2ZmVzLWljb25fX2J1dHRvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjE2cHhcIiBoZWlnaHQ9XCIxNnB4XCI+PHRpdGxlPlRpY2s8L3RpdGxlPjx1c2UgY2xhc3M9XCJpY29uLXYzXCIgeGxpbms6aHJlZj1cIiNpY29uMy1jaGV2cm9uLWRvd25cIj48L3VzZT48L3N2Zz48L3NwYW4+PHNwYW4gY2xhc3M9XCJ2ZmVzLXBhcmFncmFwaCBqcy1jb21tb24tYWNjb3JkaW9uLWhpZGVcIj5NZW5vcyBpbmZvIDxzdmcgY2xhc3M9XCJpY29uIHZmZXMtaWNvbl9fYnV0dG9uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMTZweFwiIGhlaWdodD1cIjE2cHhcIj48dGl0bGU+VGljazwvdGl0bGU+PHVzZSBjbGFzcz1cImljb24tdjNcIiB4bGluazpocmVmPVwiI2ljb24zLWNoZXZyb24tdXBcIj48L3VzZT48L3N2Zz48L3NwYW4+PC9idXR0b24+YDtcblxuICAgICAgICAgICAgY29udGVudEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb250ZW50QmxvY2suaWQgPSBpZENvbnRlbnQ7XG4gICAgICAgICAgICBjb250ZW50QmxvY2suY2xhc3NMaXN0LmFkZChkZWZhdWx0cy5jbGFzc2VzLmNhcmRMaXN0Q29udGVudENTUyk7XG4gICAgICAgICAgICBjb250ZW50QmxvY2suY2xhc3NMaXN0LmFkZChkZWZhdWx0cy5jbGFzc2VzLmNvbG9yQmdMaWdoR3JheSk7XG4gICAgICAgICAgICBjb250ZW50QmxvY2suY2xhc3NMaXN0LmFkZChkZWZhdWx0cy5jbGFzc2VzLnRpY2tldEJsb2NrQ29udGVudEpTKTtcbiAgICAgICAgICAgIGNvbnRlbnRCbG9jay5jbGFzc0xpc3QuYWRkKGRlZmF1bHRzLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgICAgICBjb250ZW50QmxvY2suc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaHRtbCArPSBgPC9kaXY+PHAgY2xhc3M9XCJ2ZmVzLXBhcmFncmFwaCB2ZmVzLWNhcmRfX2xpc3QtcHJpY2VcIj48c3Ryb25nIGNsYXNzPVwianMtdGlja2V0LXRvdGFsLXByaWNlXCI+PC9zdHJvbmc+PC9wPmA7XG5cbiAgICAgICAgbmV3QmxvY2suY2xhc3NMaXN0LmFkZChkZWZhdWx0cy5jbGFzc2VzLmNhcmRMaXN0Q29udGFpbmVyQ1NTKTtcbiAgICAgICAgbmV3QmxvY2suY2xhc3NMaXN0LmFkZChkZWZhdWx0cy5jbGFzc2VzLnRpY2tldEJsb2NrSlMpO1xuICAgICAgICBuZXdCbG9jay5jbGFzc0xpc3QuYWRkKGRlZmF1bHRzLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgIG5ld0Jsb2NrLmlkID0gY29uZmlnLmlkO1xuICAgICAgICBuZXdCbG9jay5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgICAgIHJldHVybiB7bmV3QmxvY2ssIGNvbnRlbnRCbG9ja307XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ1JFQVRPUjtcbiIsImNvbnN0IGRlZmF1bHRzID0ge1xuICAgIHNlbGVjdG9yczoge1xuICAgICAgICBtb2RhbDogJy5qcy1tb2RhbCcsXG4gICAgICAgIG1vZGFsQ2xvc2U6ICcuanMtbW9kYWwtY2xvc2UnLFxuICAgICAgICBtb2RhbENvbmZpcm1BY2NlcHQ6ICcuanMtbW9kYWwtY29uZmlybS1hY2NlcHQnLFxuICAgICAgICBtb2RhbENvbmZpcm1DYW5jZWw6ICcuanMtbW9kYWwtY29uZmlybS1jYW5jZWwnLFxuICAgICAgICBtb2RhbENvbnRlbnQ6ICcuanMtbW9kYWwtY29udGVudCcsXG4gICAgICAgIG1vZGFsSXRlbTogJy5qcy1tb2RhbC1pdGVtJyxcbiAgICB9LFxuICAgIGNsYXNzZXM6IHtcbiAgICAgICAgbW9kYWxTaG93Q1NTOiAndmZlcy1tb2RhbC0tc2hvdycsXG4gICAgICAgIG1vZGFsSXRlbVNob3dDU1M6ICd2ZmVzLW1vZGFsX19pdGVtLS1zaG93JyxcbiAgICB9XG59XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZGVmYXVsdHMuc2VsZWN0b3JzLm1vZGFsKTtcbmNvbnN0IG1vZGFsQ29uZmlybSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1jb25maXJtJyk7XG5cbmNvbnN0IE1PREFMID0ge1xuXG4gICAgLyoqXG4gICAgICogT3BlbiBtb2RhbC4gXG4gICAgICogXG4gICAgICogQGZ1bmN0aW9uIHNob3dcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgLSBtb2RhbCBpZCBcbiAgICAgKi9cbiAgICBzaG93OiBpZCA9PiB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoZGVmYXVsdHMuY2xhc3Nlcy5tb2RhbFNob3dDU1MpO1xuICAgICAgICBtb2RhbC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKS5jbGFzc0xpc3QuYWRkKGRlZmF1bHRzLmNsYXNzZXMubW9kYWxJdGVtU2hvd0NTUyk7XG4gICAgfSxcbiAgICBcbiAgICAvKipcbiAgICAgKiBIaWRlIG1vZC5tb2RhbC4gXG4gICAgICogXG4gICAgICogQGZ1bmN0aW9uIGhpZGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgLSBtb2RhbCBpZFxuICAgICAqL1xuICAgIGhpZGU6IGlkID0+IHtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShkZWZhdWx0cy5jbGFzc2VzLm1vZGFsU2hvd0NTUyk7XG4gICAgICAgIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApLmNsYXNzTGlzdC5yZW1vdmUoZGVmYXVsdHMuY2xhc3Nlcy5tb2RhbEl0ZW1TaG93Q1NTKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXBwbHkgY29uZmlybSBldmVudHMgdG8gbW9kYWxcbiAgICAgKiBcbiAgICAgKiBAZnVuY3Rpb24gY29uZmlybU1vZGFsXG4gICAgICogXG4gICAgICogQHJldHVybnMgdW5kZWZpbmVkXG4gICAgICovXG4gICAgY29uZmlybShtZXNzYWdlLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbGV0IGNhbmNlbEJ1dHRvbiwgYWNjZXB0QnV0dG9uO1xuICAgICAgICBsZXQgY2xvc2VCdXR0b24gPSBtb2RhbENvbmZpcm0ucXVlcnlTZWxlY3RvcihkZWZhdWx0cy5zZWxlY3RvcnMubW9kYWxDbG9zZSk7XG4gICAgICAgIFxuICAgICAgICBjbG9zZUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIE1PREFMLmNsb3NlQ29uZmlybSk7XG4gICAgICAgIFxuICAgICAgICBtb2RhbENvbmZpcm0ucXVlcnlTZWxlY3RvcihkZWZhdWx0cy5zZWxlY3RvcnMubW9kYWxDb250ZW50KS5pbm5lckhUTUwgPSBgJHttZXNzYWdlfTxidXR0b24gY2xhc3M9XCJ2ZmVzLWJ1dHRvbiB2ZmVzLWJ1dHRvbi0tcHJpbWFyeSBqcy1tb2RhbC1jb25maXJtLWFjY2VwdFwiPkFjZXB0YXI8L2J1dHRvbj48YnV0dG9uIGNsYXNzPVwidmZlcy1idXR0b24gdmZlcy1idXR0b24tLXNlY29uZGFyeSBqcy1tb2RhbC1jb25maXJtLWNhbmNlbFwiPkNhbmNlbGFyPC9idXR0b24+YDtcblxuICAgICAgICBhY2NlcHRCdXR0b24gPSBtb2RhbENvbmZpcm0ucXVlcnlTZWxlY3RvcihkZWZhdWx0cy5zZWxlY3RvcnMubW9kYWxDb25maXJtQWNjZXB0KTtcbiAgICAgICAgY2FuY2VsQnV0dG9uID0gbW9kYWxDb25maXJtLnF1ZXJ5U2VsZWN0b3IoZGVmYXVsdHMuc2VsZWN0b3JzLm1vZGFsQ29uZmlybUNhbmNlbCk7XG4gICAgICAgIFxuICAgICAgICBNT0RBTC5zaG93KCdtb2RhbC1jb25maXJtJyk7XG5cbiAgICAgICAgYWNjZXB0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBNT0RBTC5oaWRlKCdtb2RhbC1jb25maXJtJyk7IHJlc29sdmUoKSB9KTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBNT0RBTC5oaWRlKCdtb2RhbC1jb25maXJtJyk7IHJlamVjdCgpIH0pO1xuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgTU9EQUwuaGlkZSgnbW9kYWwtY29uZmlybScpOyByZWplY3QoKSB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1PREFMOyIsImltcG9ydCB7aW5jbHVkZVRpY2tldFByb2R1Y3QsIGluY2x1ZGVWYWx1ZUluTmFtZVNwYWNlfSBmcm9tIFwiLi9fd2FsbG1lcmljXCI7XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICAgIFwic2VsZWN0b3JzXCI6IHtcbiAgICAgICAgXCJjb250ZW50XCI6IFwiLmpzLXRpY2tldC1ibG9jay1jb250ZW50XCIsXG4gICAgICAgIFwiZmluYWxQcmljZVwiOiBcIi5qcy10aWNrZXQtZmluYWwtcHJpY2VcIixcbiAgICAgICAgXCJwYXJ0aWFsUHJpY2VcIjogXCIuanMtdGlja2V0LXBhcnRpYWwtcHJpY2VcIixcbiAgICAgICAgXCJ0aWNrZXRCbG9ja1wiOiBcIi5qcy10aWNrZXQtYmxvY2tcIixcbiAgICAgICAgXCJ0aWNrZXRJdGVtXCI6IFwiLmpzLXRpY2tldC1pdGVtXCIsXG4gICAgICAgIFwidG90YWxQcmljZVwiOiBcIi5qcy10aWNrZXQtdG90YWwtcHJpY2VcIixcbiAgICAgICAgXCJxdWFudGl0eVwiOiBcIi5qcy10aWNrZXQtcXVhbnRpdHlcIlxuICAgIH0sXG4gICAgXCJjbGFzc2VzXCI6IHtcbiAgICAgICAgXCJoaWRlXCI6IFwiaGlkZVwiXG4gICAgfVxufTtcbmNvbnN0IHRpY2tldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZmbXMtanM9XCJfdGlja2V0XCJdJyk7XG5cbmNvbnN0IFBSSUNFID0ge1xuICAgIC8qKlxuICAgICAqIFRyYW5mb3JtIGdpdmVuIHByaWNlIGluIGEgc3RyaW5nIG9yIG51bWJlci5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvbiB0cmFuc2Zvcm1QcmljZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7U3RyaW5nIHwgTnVtYmVyfSBwcmljZSAtIHByaWNlIHRvIGNoYW5nZSB0eXBlIHRvIHdvcmsgd2l0aCBpdC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmcgfCBOdW1iZXJ9IHR5cGUgb2YgcmV0dXJuIHZhbHVlIGRlcGVuZHMgb2YgcGFyYW0gZ2l2ZW4uXG4gICAgICovXG4gICAgdHJhbnNmb3JtOiBwcmljZSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgcHJpY2UgPT09ICdzdHJpbmcnID8gcGFyc2VGbG9hdChwcmljZS5yZXBsYWNlKCcsJywgJy4nKSkgOiBwcmljZS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnLCcpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaG9vc2UgaWYgd2Ugd2FudCB0byBjYWxjdWxhdGUgcHJpY2UgZnJvbSBhIHNwZWNmaWZpYyBjb250ZW50IG9yIGZyb20gYWxsIGNvbnRlbnRzIGZyb20gdGlja2V0LlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGNhbGN1bGF0ZUNvbnRlbnRQcmljZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnQgLSBOb24gcmVxdWlyZWQgcGFyYW0uIENvbnRlbnQgd2hlcmUgdG8gY2FsY3VsYXRlIHByaWNlLiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgY2FsY0NvbnRlbnQ6IChjb250ZW50ID0gbnVsbCkgPT4ge1xuICAgICAgICBsZXQgY29udGVudHM7XG5cbiAgICAgICAgaWYoY29udGVudCkge1xuICAgICAgICAgICAgUFJJQ0Uuc3VtUGFydGlhbHNGcm9tQ29udGVudChjb250ZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRlbnRzID0gdGlja2V0LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7ZGVmYXVsdHMuc2VsZWN0b3JzLnRpY2tldEJsb2NrfTpub3QoLiR7ZGVmYXVsdHMuY2xhc3Nlcy5oaWRlfSkgKyAke2RlZmF1bHRzLnNlbGVjdG9ycy5jb250ZW50fWApO1xuICAgICAgICBpbmNsdWRlVGlja2V0UHJvZHVjdCgnd2FsbG1lcmljJywgY29udGVudHMpO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoY29udGVudHMsIGNvbnRlbnQgPT4ge1xuICAgICAgICAgICAgUFJJQ0Uuc3VtUGFydGlhbHNGcm9tQ29udGVudChjb250ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3VtIHBhcnRpYWwgcHJpY2VzIGZyb20gYSBjb250ZW50LlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIHN1bVBhcnRpYWxQcmljZXNGcm9tQ29udGVudFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnQgLSBDb250ZW50IHdoZXJlIHRvIHN1bSBwcmljZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHN1bVBhcnRpYWxzRnJvbUNvbnRlbnQ6IGNvbnRlbnQgPT4ge1xuICAgICAgICBsZXQgc3VtUGFydGlhbFByaWNlcyA9IDA7XG4gICAgICAgIGxldCBwYXJ0aWFsUHJpY2VzID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKGAke2RlZmF1bHRzLnNlbGVjdG9ycy50aWNrZXRJdGVtfTpub3QoLiR7ZGVmYXVsdHMuY2xhc3Nlcy5oaWRlfSkgJHtkZWZhdWx0cy5zZWxlY3RvcnMucGFydGlhbFByaWNlfWApO1xuXG4gICAgICAgIGlmKHBhcnRpYWxQcmljZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKHBhcnRpYWxQcmljZXMsIHByaWNlID0+IHtcbiAgICAgICAgICAgICAgICBzdW1QYXJ0aWFsUHJpY2VzICs9IFBSSUNFLnRyYW5zZm9ybShwcmljZS5pbm5lclRleHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdW1QYXJ0aWFsUHJpY2VzID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBibG9jayA9IHRpY2tldC5xdWVyeVNlbGVjdG9yKGBbYXJpYS1jb250cm9scz1cIiR7Y29udGVudC5pZH1cIl1gKTtcblxuICAgICAgICBpZihibG9jaykge1xuICAgICAgICAgICAgYmxvY2sgPSBibG9jay5jbG9zZXN0KGRlZmF1bHRzLnNlbGVjdG9ycy50aWNrZXRCbG9jayk7XG4gICAgICAgICAgICBibG9jay5xdWVyeVNlbGVjdG9yKGRlZmF1bHRzLnNlbGVjdG9ycy50b3RhbFByaWNlKS5pbm5lclRleHQgPSBzdW1QYXJ0aWFsUHJpY2VzID09PSBudWxsID8gJycgOiBQUklDRS50cmFuc2Zvcm0oc3VtUGFydGlhbFByaWNlcykgKyAn4oKsL21lcyc7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHRvdGFsIHByaWNlIGZyb20gdGlja2V0XG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gY2FsY3VsYXRlVG90YWxQcmljZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgY2FsY1RvdGFsOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvdGFsUHJpY2VzID0gdGlja2V0LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7ZGVmYXVsdHMuc2VsZWN0b3JzLnRpY2tldEJsb2NrfTpub3QoLiR7ZGVmYXVsdHMuY2xhc3Nlcy5oaWRlfSkgJHtkZWZhdWx0cy5zZWxlY3RvcnMudG90YWxQcmljZX1gKTtcbiAgICAgICAgbGV0IHN1bVRvdGFsUHJpY2VzID0gMDtcblxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwodG90YWxQcmljZXMsIHByaWNlID0+IHtcbiAgICAgICAgICAgICFpc05hTihwYXJzZUZsb2F0KHByaWNlLmlubmVyVGV4dCkpID8gc3VtVG90YWxQcmljZXMgKz0gUFJJQ0UudHJhbnNmb3JtKHByaWNlLmlubmVyVGV4dCkgOiBudWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdW1Ub3RhbFByaWNlcyA9IE1hdGgucm91bmQoc3VtVG90YWxQcmljZXMgKiAxMDApIC8gMTAwO1xuXG4gICAgICAgIGluY2x1ZGVWYWx1ZUluTmFtZVNwYWNlKCd3YWxsbWVyaWMnLCAndG90YWxQcmljZScsIFBSSUNFLnRyYW5zZm9ybShzdW1Ub3RhbFByaWNlcykgKyAn4oKsL21lcycpO1xuXG4gICAgICAgIHRpY2tldC5xdWVyeVNlbGVjdG9yKGRlZmF1bHRzLnNlbGVjdG9ycy5maW5hbFByaWNlKS5pbm5lclRleHQgPSBQUklDRS50cmFuc2Zvcm0oc3VtVG90YWxQcmljZXMpICsgJ+KCrC9tZXMnO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWNhbGN1bGF0ZSB0b3RhbCB0aWNrZXQgcHJpY2UgaW5jbHVkaW5nIGNvbnRlbnRzIHByaWNlc1xuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIHJlY2FsY3VsYXRlUHJpY2VcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlY2FsY3VsYXRlOiBjb250ZW50ID0+IHtcbiAgICAgICAgLy9QUklDRS5jYWxjQ29udGVudChjb250ZW50KTtcbiAgICAgICAgLy9QUklDRS5jYWxjVG90YWwoKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQUklDRTtcbiIsImNvbnN0IGNvbmZpZ3VyYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZmbXMtanM9XCJfY29uZmlndXJhdG9yXCJdJyk7XG5jb25zdCB0aWNrZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12Zm1zLWpzPVwiX3RpY2tldFwiXScpO1xuLy9jb25zdCBtZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubWRkLSR7d2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDk3MHB4KScpLm1hdGNoZXMgPyAnZGVza3RvcCcgOiAnbW9iaWxlJ31gKS5sYXN0RWxlbWVudENoaWxkO1xuY29uc3QgbWRkPTA7XG5cbmNvbnN0IFNDUk9MTCA9IHtcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIFNDUk9MTC50aHJvdHRsZShTQ1JPTEwubW92ZVRpY2tldCwgMTAwKSk7XG4gICAgfSxcbiAgICBcbiAgICBtb3ZlVGlja2V0OiAoKSA9PiB7XG4gICAgICAgIGxldCB0aWNrZXRQb3MgPSB0aWNrZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIC8vbGV0IG1kZFBvcyA9IG1kZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IGNvbmZpZ1BvcyA9IGNvbmZpZ3VyYXRvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBpZihjb25maWdQb3MudG9wIDwgNzUgJiYgKGNvbmZpZ1Bvcy5ib3R0b20gLSAodGlja2V0UG9zLmhlaWdodCAvIDIpKSA+IDc1KSB7XG4gICAgICAgICAgICB0aWNrZXQuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpY2tldC5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKmlmKGNvbmZpZ1Bvcy50b3AgPCBtZGRQb3MuaGVpZ2h0ICYmIChjb25maWdQb3MuYm90dG9tIC0gKHRpY2tldFBvcy5oZWlnaHQgLyAyKSkgPiBtZGRQb3MuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aWNrZXQuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpY2tldC5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xuICAgICAgICB9Ki9cbiAgICB9LFxuXG4gICAgdGhyb3R0bGU6IChmdW5jLCBsaW1pdCkgPT4ge1xuICAgICAgICBsZXQgbGFzdEZ1bmMsIGxhc3RSYW47XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgICAgIGlmICghbGFzdFJhbikge1xuICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY3R4LCBhcmdzKTtcbiAgICAgICAgICAgICAgICBsYXN0UmFuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGxhc3RGdW5jKTtcbiAgICAgICAgICAgICAgICBsYXN0RnVuYyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKERhdGUubm93KCkgLSBsYXN0UmFuKSA+PSBsaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuYy5hcHBseShjdHgsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFJhbiA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBsaW1pdCAtIChEYXRlLm5vdygpIC0gbGFzdFJhbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTQ1JPTEw7IiwiaW1wb3J0IENSRUFUT1IgZnJvbSAnLi9fY3JlYXRvcic7XG5pbXBvcnQgUFJJQ0UgZnJvbSAnLi9fcHJpY2UnO1xuaW1wb3J0IE1PREFMIGZyb20gJy4vX21vZGFsJztcbmltcG9ydCBTQ1JPTEwgZnJvbSAnLi9fc2Nyb2xsJztcbmltcG9ydCB7IGluY2x1ZGVWYWx1ZUluTmFtZVNwYWNlIH0gZnJvbSAnLi9fd2FsbG1lcmljJztcblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgJGVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICBpZHM6IHtcbiAgICAgICAgcHJvbW9zOiAndGlja2V0LXByb21vcycsXG4gICAgICAgIGl0ZW06ICd0aWNrZXQtaXRlbSdcbiAgICB9LFxuICAgIHNlbGVjdG9yczoge1xuICAgICAgICBhZGRlZDogJy5hZGRlZCcsXG4gICAgICAgIGJvZHk6ICcuanMtdGlja2V0LWJvZHknLFxuICAgICAgICBjb25maWdCbG9jazogJy5qcy1jb25maWd1cmF0b3ItYmxvY2snLFxuICAgICAgICBjb25maWdFbGVtZW50OiAnLmpzLWNvbmZpZ3VyYXRvci1lbGVtZW50JyxcbiAgICAgICAgY29uZmlnSW5pdGlhbFBheTogJy5qcy1pbml0aWFsLXBheScsXG4gICAgICAgIGNvbmZpZ01haW46ICcuanMtY29uZmlndXJhdG9yLW1haW4nLFxuICAgICAgICBjb250ZW50OiAnLmpzLXRpY2tldC1jb250ZW50JyxcbiAgICAgICAgZHJvcGRvd246ICcuanMtdGlja2V0LWRyb3Bkb3duJyxcbiAgICAgICAgbGk6ICcuanMtbGknLFxuICAgICAgICBudW06ICcuanMtY291bnRlci1udW0nLFxuICAgICAgICBvdmVybGF5OiAnLmpzLXRpY2tldC1vdmVybGF5JyxcbiAgICAgICAgcGFydGlhbFByaWNlOiAnLmpzLXRpY2tldC1wYXJ0aWFsLXByaWNlJyxcbiAgICAgICAgcHJpY2U6ICcuanMtcHJpY2UnLFxuICAgICAgICBxdWFudGl0eTogJy5qcy10aWNrZXQtcXVhbnRpdHknLFxuICAgICAgICB0aWNrZXRCbG9jazogJy5qcy10aWNrZXQtYmxvY2snLFxuICAgICAgIC8vIHRpY2tldEJsb2NrQ29udGVudDogJy5qcy10aWNrZXQtYmxvY2stY29udGVudCcsXG4gICAgICAgIHRpY2tldENvbnRlbnQ6ICcuanMtdGlja2V0LWNvbnRlbnQtYm94JyxcbiAgICAgICAgdGlja2V0SW5pdGlhbFBheTogJy5qcy10aWNrZXQtaW5pdGlhbC1wYXknLFxuICAgICAgICB0aWNrZXRJdGVtOiAnLmpzLXRpY2tldC1pdGVtJyxcbiAgICAgICAgdGlja2V0SXRlbVRpdGxlOiAnLmpzLXRpY2tldC1pdGVtLXRpdGxlJyxcbiAgICAgICAgdGlja2V0TGluazogJy5qcy10aWNrZXQtbGluaycsXG4gICAgICAgIHRpY2tldEJ1dHRvbjogJy5qcy10aWNrZXQtYnV0dG9uJyxcbiAgICAgICAgdGlja2V0Q2xvc2VCdXR0b246ICcuanMtdGlja2V0LWNsb3NlJyxcbiAgICAgICAgdGl0bGU6ICcuanMtdGl0bGUnXG4gICAgfSxcbiAgICBjbGFzc2VzOiB7XG4gICAgICAgIGFkZGVkOiAnYWRkZWQnLFxuICAgICAgICBjb25maWdNYWluOiAnanMtY29uZmlndXJhdG9yLW1haW4nLFxuICAgICAgICBjb3VudGVyOiAnanMtY29uZmlndXJhdG9yLWNvdW50ZXInLFxuICAgICAgICBwcm9tbzogJ2pzLXByb21vLWJsb2NrJyxcbiAgICAgICAgdGlja2V0QmxvY2s6ICdqcy10aWNrZXQtYmxvY2snLFxuICAgICAgICB0aWNrZXRJdGVtOiAnanMtdGlja2V0LWl0ZW0nLFxuICAgICAgIC8vIHRpY2tldEJsb2NrQ29udGVudDogJ2pzLXRpY2tldC1ibG9jay1jb250ZW50JyxcbiAgICAgICAgaGlkZTogJ2hpZGUnXG4gICAgfSxcbiAgICBhdHRyOiB7XG4gICAgICAgIGNvbmZpZzogJ2RhdGEtY29uZmlndXJhdG9yLWNvbmZpZydcbiAgICB9XG59O1xuXG4vKipcbiAqIFRpY2tldC5cbiAqXG4gKiBAbW9kdWxlIFRpY2tldFxuICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgLSBzcGVjaWZpZXMgdGhlIGNvbmZpZ3VyYXRpb25zXG4gKiBmb3IgdGhlIG1vZHVsZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja2V0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzID0ge30pIHtcblxuICAgICAgICB0aGlzLnRpY2tldCAgICAgPSBwcm9wZXJ0aWVzLiRlbGVtZW50O1xuICAgICAgICB0aGlzLmluZm8gICAgICAgPSBKU09OLnBhcnNlKHByb3BlcnRpZXMuaW5mbyk7XG4gICAgICAgIHRoaXMuaWRzICAgICAgICA9IGRlZmF1bHRzLmlkcztcbiAgICAgICAgdGhpcy5zZWxlY3RvcnMgID0gZGVmYXVsdHMuc2VsZWN0b3JzO1xuICAgICAgICB0aGlzLmNsYXNzZXMgICAgPSBkZWZhdWx0cy5jbGFzc2VzO1xuICAgICAgICB0aGlzLmF0dHIgICAgICAgPSBkZWZhdWx0cy5hdHRyO1xuICAgICAgICB0aGlzLnRpbWVQaWxlICAgPSBbXTtcblxuICAgICAgICAvL0V2ZW50c1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IEV2ZW50KCd2Zm1zOmNoYW5nZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgdGhlIG1vZHVsZS5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvbiBpbml0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzQWRkZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke21vZC5zZWxlY3RvcnMuY29uZmlnRWxlbWVudH0uJHttb2QuY2xhc3Nlcy5hZGRlZH1gKTtcbiAgICAgICAgY29uc3QgY29uZmlnQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChtb2Quc2VsZWN0b3JzLmNvbmZpZ0Jsb2NrKTtcblxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoY29uZmlnQmxvY2tzLCBibG9jayA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3QmxvY2sgPSBDUkVBVE9SLmNyZWF0ZUJsb2NrKEpTT04ucGFyc2UoYmxvY2suZ2V0QXR0cmlidXRlKG1vZC5hdHRyLmNvbmZpZykpKTtcbiAgICAgICAgICAgIG1vZC5hZGRCbG9ja1RvVGlja2V0KG5ld0Jsb2NrKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1lbnRzQWRkZWQsIGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgbW9kLmFkZEl0ZW1Ub1RpY2tldChlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvL21vZC5hZGRQcm9tb3NUb1RpY2tldCgpO1xuICAgICAgIC8vIFBSSUNFLnJlY2FsY3VsYXRlKCk7XG4gICAgICAgIFNDUk9MTC5pbml0KCk7XG4gICAgICAgbW9kLmJpbmQoKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZSB0aGUgbW9kdWxlLlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGJpbmRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgYmluZCgpIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcbiAgICAgICAgbW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMudGlja2V0QnV0dG9uKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG1vZC5zZWxlY3RvcnMuY29uZmlnRWxlbWVudCksIGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd2Zm1zOmNoYW5nZScsIGV2ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IGV2LmlzTWFpbkVsZW1lbnQgPyBcIm1haW5cIiA6IGV2LmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKG1vZC5jbGFzc2VzLmNvdW50ZXIpID8gXCJjb3VudGVyXCIgOiBcImRlZmF1bHRcIjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWFpblwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kLm1haW5FbGVtZW50TWFuYWdlcihldik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvdW50ZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZC5jb3VudGVyRWxlbWVudE1hbmFnZXIoZXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2QuZGVmYXVsdEVsZW1lbnRNYW5hZ2VyKGV2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtb2QuY2hlY2tUaWNrZXRDb250ZW50KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBtb2Qub3ZlcmxheUFjdGlvbigpO1xuICAgIH1cblxuICAgIG1haW5FbGVtZW50TWFuYWdlcihldikge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG1vZC50aWNrZXQucXVlcnlTZWxlY3RvckFsbChgJHttb2Quc2VsZWN0b3JzLnRpY2tldEJsb2NrfTpub3QoLiR7bW9kLmNsYXNzZXMuaGlkZX0pYCksIGJsb2NrID0+IHtcbiAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbChibG9jay5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvckFsbChtb2Quc2VsZWN0b3JzLnRpY2tldEl0ZW0pLCBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQobW9kLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZChtb2QuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbW9kLmFkZEl0ZW1Ub1RpY2tldChldi5lbGVtZW50KTtcbiAgICAgICAgbW9kLnJlc2V0UmVscyhldi5lbGVtZW50KTtcbiAgICAgICAgbW9kLmFkZFByb21vc1RvVGlja2V0KGV2LmVsZW1lbnQpO1xuXG4gICAgICAgIFBSSUNFLnJlY2FsY3VsYXRlKCk7XG5cbiAgICAgICAgbW9kLm9uQ2hhbmdlLmVsZW1lbnQgPSBldi5lbGVtZW50O1xuICAgICAgICBtb2Qub25DaGFuZ2UuZW5lbWllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgbW9kLm9uQ2hhbmdlLnRvUmVtb3ZlID0gZmFsc2U7XG4gICAgICAgIG1vZC50aWNrZXQuZGlzcGF0Y2hFdmVudChtb2Qub25DaGFuZ2UpO1xuICAgIH1cblxuICAgIGNvdW50ZXJFbGVtZW50TWFuYWdlcihldikge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgaWYoZXYubnVtICYmIGV2LnRvQWRkKSB7XG4gICAgICAgICAgICBtb2QuYWRkSXRlbVRvVGlja2V0KGV2LmVsZW1lbnQpO1xuXG4gICAgICAgIH0gZWxzZSBpZihldi5udW0gJiYgIWV2LnRvQWRkKSB7XG4gICAgICAgICAgICBtb2QuaGlkZUl0ZW0obW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yKGAjJHttb2QuaWRzLml0ZW19LSR7ZXYuZWxlbWVudC5pZH0ke2V2Lm51bX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgUFJJQ0UucmVjYWxjdWxhdGUoKTtcbiAgICB9XG5cbiAgICBkZWZhdWx0RWxlbWVudE1hbmFnZXIoZXYpIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcbiAgICAgICAgbGV0IGVsZUNvbXBhID0gbW9kLmluZm8uY29tcGF0aWJpbGl0aWVzW2V2LmVsZW1lbnQuaWRdO1xuICAgICAgICBsZXQgdGlja2V0SXRlbSA9IG1vZC50aWNrZXQucXVlcnlTZWxlY3RvcihgIyR7bW9kLmlkcy5pdGVtfS0ke2V2LmVsZW1lbnQuaWR9YCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBpZihlbGVDb21wYSkge1xuICAgICAgICAgICAgbGV0IGVuZW1pZXNBY3RpdmF0ZWQgPSBbXTtcbiAgICAgICAgICAgIGVsZUNvbXBhLmVuZW1pZXMuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGVuZW15ID0gbW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yKGAjJHttb2QuaWRzLml0ZW19LSR7aWR9YCk7XG4gICAgICAgICAgICAgICAgaWYoZW5lbXkgJiYgIWVuZW15LmNsYXNzTGlzdC5jb250YWlucyhtb2QuY2xhc3Nlcy5oaWRlKSkge1xuICAgICAgICAgICAgICAgICAgICBlbmVtaWVzQWN0aXZhdGVkLnB1c2goZW5lbXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYoZW5lbWllc0FjdGl2YXRlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgTU9EQUwuY29uZmlybShlbGVDb21wYS50ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZW1pZXNBY3RpdmF0ZWQuZm9yRWFjaChlbmVteSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2QuaGlkZUl0ZW0oZW5lbXkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgbW9kLmFkZEl0ZW1Ub1RpY2tldChldi5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgUFJJQ0UucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLmVsZW1lbnQgPSBldi5lbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBtb2Qub25DaGFuZ2UuZW5lbWllcyA9IGVsZUNvbXBhLmVuZW1pZXM7XG4gICAgICAgICAgICAgICAgICAgIG1vZC5vbkNoYW5nZS50b1JlbW92ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBtb2QudGlja2V0LmRpc3BhdGNoRXZlbnQobW9kLm9uQ2hhbmdlKTtcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENhbmNlbCBjb2RlLi4uXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBpc0FkZGVkID0gZXYuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMobW9kLmNsYXNzZXMuYWRkZWQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGlzQWRkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXYuZWxlbWVudC5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMuY29uZmlnSW5pdGlhbFBheSkgPyBtb2QudGlja2V0LnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy50aWNrZXRJbml0aWFsUGF5KS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQobW9kLmNsYXNzZXMuaGlkZSkgOiBudWxsO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBtb2QuaGlkZUl0ZW0odGlja2V0SXRlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kLmFkZEl0ZW1Ub1RpY2tldChldi5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBQUklDRS5yZWNhbGN1bGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLmVsZW1lbnQgPSBldi5lbGVtZW50O1xuICAgICAgICAgICAgICAgIG1vZC5vbkNoYW5nZS5lbmVtaWVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIG1vZC5vbkNoYW5nZS50b1JlbW92ZSA9IGlzQWRkZWQ7XG4gICAgICAgICAgICAgICAgbW9kLnRpY2tldC5kaXNwYXRjaEV2ZW50KG1vZC5vbkNoYW5nZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaXNBZGRlZCA9IGV2LmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKG1vZC5jbGFzc2VzLmFkZGVkKTtcblxuICAgICAgICAgICAgaWYoaXNBZGRlZCkge1xuICAgICAgICAgICAgICAgIGV2LmVsZW1lbnQucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLmNvbmZpZ0luaXRpYWxQYXkpID8gbW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMudGlja2V0SW5pdGlhbFBheSkucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKG1vZC5jbGFzc2VzLmhpZGUpIDogbnVsbDtcblxuICAgICAgICAgICAgICAgIG1vZC5oaWRlSXRlbSh0aWNrZXRJdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kLmFkZEl0ZW1Ub1RpY2tldChldi5lbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUFJJQ0UucmVjYWxjdWxhdGUoKTtcblxuICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLmVsZW1lbnQgPSBldi5lbGVtZW50O1xuICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLmVuZW1pZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBtb2Qub25DaGFuZ2UudG9SZW1vdmUgPSBpc0FkZGVkO1xuICAgICAgICAgICAgbW9kLnRpY2tldC5kaXNwYXRjaEV2ZW50KG1vZC5vbkNoYW5nZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYWRkSXRlbVRvVGlja2V0KGl0ZW0pIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcbiAgICAgICAgY29uc3QgYmxvY2tDb25maWcgPSBKU09OLnBhcnNlKGl0ZW0uY2xvc2VzdChtb2Quc2VsZWN0b3JzLmNvbmZpZ0Jsb2NrKS5nZXRBdHRyaWJ1dGUobW9kLmF0dHIuY29uZmlnKSk7XG4gICAgICAgIGNvbnN0IG51bSA9IGl0ZW0ucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLm51bSkgPyBpdGVtLnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5udW0pLmlubmVyVGV4dCA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy50aXRsZSkuaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCBpbml0aWFsUGF5ID0gaXRlbS5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMuY29uZmlnSW5pdGlhbFBheSk7XG4gICAgICAgIGxldCB0aWNrZXRJdGVtID0gbW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yKGAjJHttb2QuaWRzLml0ZW19LSR7aXRlbS5pZH0ke251bSA/IG51bSA6ICcnfWApO1xuXG4gICAgICAgIGlmKCF0aWNrZXRJdGVtKSB7XG4gICAgICAgICAgICBsZXQgYmxvY2sgPSBtb2QudGlja2V0LnF1ZXJ5U2VsZWN0b3IoYCMke2Jsb2NrQ29uZmlnLmlkfWApO1xuXG4gICAgICAgICAgICB0aWNrZXRJdGVtID0gQ1JFQVRPUi5jcmVhdGVJdGVtKHtcbiAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLnByaWNlKSA/IGl0ZW0ucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLnByaWNlKS5pbm5lclRleHQgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgbnVtOiBudW0sXG4gICAgICAgICAgICAgICAgbGlzdDogaXRlbS5xdWVyeVNlbGVjdG9yQWxsKG1vZC5zZWxlY3RvcnMubGkpLFxuICAgICAgICAgICAgICAgIGlzUHJvbW86IGJsb2NrLmlkID09PSBtb2QuaWRzLnByb21vc1xuICAgICAgICAgICAgfSwgbW9kLmluZm8pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBibG9jay5uZXh0RWxlbWVudFNpYmxpbmcuYXBwZW5kQ2hpbGQodGlja2V0SXRlbSk7XG4gICAgICAgICAgICBtb2QuY2xvc2VCdXR0b25Db250ZW50KHRpY2tldEl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihpbml0aWFsUGF5KSB7XG4gICAgICAgICAgICBsZXQgdGlja2V0SW5pdFBheSA9IG1vZC50aWNrZXQucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLnRpY2tldEluaXRpYWxQYXkpO1xuICAgICAgICAgICAgdGlja2V0SW5pdFBheS5pbm5lclRleHQgPSBpbml0aWFsUGF5LmlubmVyVGV4dDtcbiAgICAgICAgICAgIHRpY2tldEluaXRQYXkucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKG1vZC5jbGFzc2VzLmhpZGUpO1xuICAgICAgICAgICAgaW5jbHVkZVZhbHVlSW5OYW1lU3BhY2UoJ3dhbGxtZXJpYycsICdpbml0aWFsUGF5JywgaW5pdGlhbFBheS5pbm5lclRleHQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBtb2Quc2hvd0l0ZW0odGlja2V0SXRlbSk7XG4gICAgfVxuXG4gICAgYWRkQmxvY2tUb1RpY2tldChibG9jaykge1xuICAgICAgICB0aGlzLnRpY2tldC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLnRpY2tldENvbnRlbnQpLmFwcGVuZENoaWxkKGJsb2NrLm5ld0Jsb2NrKTtcbiAgICAgICAgdGhpcy50aWNrZXQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy50aWNrZXRDb250ZW50KS5hcHBlbmRDaGlsZChibG9jay5jb250ZW50QmxvY2spO1xuICAgIH1cblxuICAgIGFkZFByb21vc1RvVGlja2V0KHJhdGUpIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcbiAgICAgICAgY29uc3QgcmF0ZUFjdGl2YXRlZCA9IHJhdGUgPyByYXRlIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHttb2Quc2VsZWN0b3JzLmNvbmZpZ01haW59LiR7bW9kLmNsYXNzZXMuYWRkZWR9YCk7XG4gICAgICAgIGxldCBwcm9tb0NvdW50ZXIgPSAwO1xuICAgICAgICBsZXQgcHJvbW9CbG9jayA9IG1vZC50aWNrZXQucXVlcnlTZWxlY3RvcignIycgKyBtb2QuaWRzLnByb21vcyk7XG5cbiAgICAgICAgaWYocHJvbW9CbG9jaykge1xuICAgICAgICAgICAgbGV0IGF1eCA9IHByb21vQmxvY2s7XG4gICAgICAgICAgICBwcm9tb0Jsb2NrID0ge307XG4gICAgICAgICAgICBwcm9tb0Jsb2NrLm5ld0Jsb2NrID0gYXV4O1xuICAgICAgICAgICAgcHJvbW9CbG9jay5jb250ZW50QmxvY2sgPSBhdXgubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgcHJvbW9CbG9jay5jb250ZW50QmxvY2suaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9tb0Jsb2NrID0gQ1JFQVRPUi5jcmVhdGVCbG9jayh7XG4gICAgICAgICAgICAgICAgaWQ6IG1vZC5pZHMucHJvbW9zLFxuICAgICAgICAgICAgICAgIHN2ZzogXCJpY29uLWJvbnVzLW1pZFwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlByb21vY2lvbmVzXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uOiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcHJvbW9CbG9jay5uZXdCbG9jay5jbGFzc0xpc3QuYWRkKG1vZC5jbGFzc2VzLnByb21vKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vZC5pbmZvLnByb21vcy5mb3JFYWNoKHByb21vID0+IHtcbiAgICAgICAgICAgIHByb21vQ291bnRlcisrO1xuICAgICAgICAgICAgcHJvbW9CbG9jay5jb250ZW50QmxvY2suYXBwZW5kQ2hpbGQoQ1JFQVRPUi5jcmVhdGVJdGVtKHtcbiAgICAgICAgICAgICAgICBpZDogcHJvbW8uaWQsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9tby5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBwcmljZTogcHJvbW8ucHJpY2UsXG4gICAgICAgICAgICAgICAgbGlzdDogW10sXG4gICAgICAgICAgICAgICAgaXNQcm9tbzogdHJ1ZVxuICAgICAgICAgICAgfSwgbW9kLmluZm8pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYocmF0ZUFjdGl2YXRlZCkge1xuICAgICAgICAgICAgbW9kLmluZm8uZWxlbWVudHNbcmF0ZUFjdGl2YXRlZC5pZF0ucHJvbW9zLmZvckVhY2gocHJvbW8gPT4ge1xuICAgICAgICAgICAgICAgIHByb21vQ291bnRlcisrO1xuICAgICAgICAgICAgICAgIHByb21vQmxvY2suY29udGVudEJsb2NrLmFwcGVuZENoaWxkKENSRUFUT1IuY3JlYXRlSXRlbSh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb21vLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBwcmljZTogcHJvbW8ucHJpY2UsXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q6IFtdLFxuICAgICAgICAgICAgICAgICAgICBpc1Byb21vOiB0cnVlXG4gICAgICAgICAgICAgICAgfSwgbW9kLmluZm8pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocHJvbW9Db3VudGVyID4gMCkge1xuICAgICAgICAgICAgcHJvbW9CbG9jay5uZXdCbG9jay5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMucXVhbnRpdHkpLmlubmVyVGV4dCA9IHByb21vQ291bnRlcjtcbiAgICAgICAgICAgIHByb21vQmxvY2submV3QmxvY2suY2xhc3NMaXN0LnJlbW92ZShtb2QuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vZC5hZGRCbG9ja1RvVGlja2V0KHByb21vQmxvY2spO1xuICAgIH1cblxuICAgIHNob3dJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcbiAgICAgICAgY29uc3QgZGFkZHkgPSBpdGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGJsb2NrID0gZGFkZHkucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgICAgICBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucyhtb2QuY2xhc3Nlcy5jb25maWdNYWluKSkge1xuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGRhZGR5LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7bW9kLnNlbGVjdG9ycy50aWNrZXRJdGVtfTpub3QoLiR7bW9kLmNsYXNzZXMuaGlkZX0pYCksIGl0ZW0gPT4gbW9kLmhpZGVJdGVtKGl0ZW0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vZC5zaG93QmxvY2soYmxvY2spO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUobW9kLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgIG1vZC5yZWNvdW50Q2hpbGRyZW4oYmxvY2spO1xuICAgIH1cblxuICAgIGhpZGVJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgYmxvY2sgPSBpdGVtLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmhpZGUpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZWNvdW50Q2hpbGRyZW4oYmxvY2spID09PSAwID8gdGhpcy5oaWRlQmxvY2soYmxvY2spIDogbnVsbDtcbiAgICB9XG5cbiAgICBzaG93QmxvY2soYmxvY2spIHtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuaGlkZSk7XG4gICAgfVxuXG4gICAgaGlkZUJsb2NrKGJsb2NrKSB7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmhpZGUpO1xuICAgICAgICBibG9jay5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuaGlkZSk7XG4gICAgfVxuXG4gICAgcmVjb3VudENoaWxkcmVuKHRpY2tldEJsb2NrKSB7XG4gICAgICAgIGxldCBjb3VudGVyQ2hpbGRyZW4gPSB0aWNrZXRCbG9jay5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvckFsbChgJHt0aGlzLnNlbGVjdG9ycy50aWNrZXRJdGVtfTpub3QoLiR7dGhpcy5jbGFzc2VzLmhpZGV9KWApLmxlbmd0aDtcbiAgICAgICAgdGlja2V0QmxvY2sucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5xdWFudGl0eSkuaW5uZXJUZXh0ID0gY291bnRlckNoaWxkcmVuO1xuICAgICAgICByZXR1cm4gY291bnRlckNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJlc2V0UmVscyhlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG4gICAgICAgIG1vZC5pbmZvLmVsZW1lbnRzW2VsZW1lbnQuaWRdLnJlbHMuZm9yRWFjaChyZWwgPT4ge1xuICAgICAgICAgICAgaWYocmVsLnNlbGVjdG9yICYmIHJlbC5zZWxlY3RvciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJlbC5zZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBlbC5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMucHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVsLnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZWwucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGlja2V0SXRlbSA9IG1vZC50aWNrZXQucXVlcnlTZWxlY3RvcihgIyR7bW9kLmlkcy5pdGVtfS0ke2VsLmlkfWApO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYocHJpY2UgJiYgcmVsLm5ld1ByaWNlID49IDApIHsgcHJpY2UuaW5uZXJUZXh0ID0gYCR7cmVsLm5ld1ByaWNlfeKCrGAgfVxuICAgICAgICAgICAgICAgICAgICBpZih0aXRsZSAmJiByZWwubmV3VGl0bGUpIHsgdGl0bGUuaW5uZXJUZXh0ID0gcmVsLm5ld1RpdGxlIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoZGVzY3JpcHRpb24gJiYgcmVsLm5ld0Rlc2NyaXB0aW9uKSB7IGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHJlbC5uZXdEZXNjcmlwdGlvbiB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZih0aWNrZXRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXRJdGVtLnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5wYXJ0aWFsUHJpY2UpLmlubmVyVGV4dCA9IGAke3JlbC5uZXdQcmljZX3igqxgO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsLm5ld1RpdGxlID8gdGlja2V0SXRlbS5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMudGlja2V0SXRlbVRpdGxlKS5pbm5lclRleHQgPSByZWwubmV3VGl0bGUgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYocmVsLmRlZmF1bHRBZGRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kLmFkZEl0ZW1Ub1RpY2tldChlbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJsYXkgYWN0aW9uIHRvIGhpZGUgdGlja2V0IGNvbnRlbnQgd2hlbiB5b3UgY2xpY2sgb3ZlciBpdFxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIG92ZXJsYXlBY3Rpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBidXR0b24gLSBEcm9wZG93biBidXR0b24gZWxlbWVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgb3ZlcmxheUFjdGlvbigpIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcbiAgICAgICAgY29uc3QgdGlja2V0T3ZlcmxheSA9IG1vZC50aWNrZXQucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLm92ZXJsYXkpO1xuICAgICAgICBjb25zdCB0aWNrZXRCb2R5ID0gbW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMuYm9keSk7XG4gICAgICAgIGNvbnN0IHRpY2tldERyb3Bkb3duID0gbW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMuZHJvcGRvd24pO1xuXG4gICAgICAgIHRpY2tldE92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZighdGlja2V0Qm9keS5jbGFzc0xpc3QuY29udGFpbnMobW9kLmNsYXNzZXMuaGlkZSkpIHtcbiAgICAgICAgICAgICAgICB0aWNrZXRPdmVybGF5LmNsYXNzTGlzdC5hZGQobW9kLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgICAgICAgICAgdGlja2V0RHJvcGRvd24uY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgdGlja2V0IGNvbnRlbnRcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvbiBjaGVja1RpY2tldENvbnRlbnRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIGNoZWNrVGlja2V0Q29udGVudCgpIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcbiAgICAgICAgbGV0IGNvbnRlbnRzQmxvY2tWaXNpYmxlID0gbW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yQWxsKGAke21vZC5zZWxlY3RvcnMudGlja2V0QmxvY2t9Om5vdCguaGlkZSlgKTtcbiAgICAgICAgbGV0IHJhdGVBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke21vZC5zZWxlY3RvcnMuY29uZmlnTWFpbn0uJHttb2QuY2xhc3Nlcy5hZGRlZH1gKTtcbiAgICAgICAgbGV0IHJhdGVPYmplY3QgPSBtb2QuaW5mby5lbGVtZW50c1tyYXRlQWN0aXZlLmlkXTtcbiAgICAgICAgbGV0IGNvdW50RGlmZXJlbnRJZHMgPSAwO1xuICAgICAgICBsZXQgY291bnRlclRydWVSZWxzID0gMDtcbiAgICAgICAgY29udGVudHNCbG9ja1Zpc2libGUgPSBbXS5zbGljZS5jYWxsKGNvbnRlbnRzQmxvY2tWaXNpYmxlLCAxKTtcblxuICAgICAgICBpZihjb250ZW50c0Jsb2NrVmlzaWJsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZihjb250ZW50c0Jsb2NrVmlzaWJsZVtjb250ZW50c0Jsb2NrVmlzaWJsZS5sZW5ndGgtMV0uaWQgPT09IG1vZC5pZHMucHJvbW9zKSB7XG4gICAgICAgICAgICAgICAgY29udGVudHNCbG9ja1Zpc2libGUgPSBjb250ZW50c0Jsb2NrVmlzaWJsZS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJhdGVPYmplY3QucmVscy5mb3JFYWNoKHJlbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVsLmRlZmF1bHRBZGRlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50c0Jsb2NrVmlzaWJsZS5mb3JFYWNoKGNvbnRlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgWy4uLmNvbnRlbnQubmV4dEVsZW1lbnRTaWJsaW5nLmNoaWxkcmVuXS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjaGlsZC5pZCAhPT0gYCR7bW9kLmlkcy5pdGVtfS0ke3JlbC5zZWxlY3Rvcn1gICYmICFjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMobW9kLmNsYXNzZXMuaGlkZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnREaWZlcmVudElkcysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclRydWVSZWxzKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihjb3VudERpZmVyZW50SWRzID4gMCB8fCAoY291bnRlclRydWVSZWxzID09PSAwICYmIGNvbnRlbnRzQmxvY2tWaXNpYmxlLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUaWNrZXRCdXR0b24oKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93VGlja2V0TGluayhyYXRlT2JqZWN0LmhyZWYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNob3dUaWNrZXRMaW5rKG5ld0hyZWYpIHtcbiAgICAgICAgbGV0IGxpbmsgPSB0aGlzLnRpY2tldC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLnRpY2tldExpbmspO1xuXG4gICAgICAgIHRoaXMudGlja2V0LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMudGlja2V0QnV0dG9uKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBsaW5rLmhyZWYgPSBuZXdIcmVmO1xuICAgIH1cblxuICAgIHNob3dUaWNrZXRCdXR0b24oKSB7XG4gICAgICAgIHRoaXMudGlja2V0LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMudGlja2V0TGluaykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB0aGlzLnRpY2tldC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLnRpY2tldEJ1dHRvbikuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH1cblxuICAgIGNsb3NlQnV0dG9uQ29udGVudCh0aWNrZXRJdGVtKSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG4gICAgICAgIGxldCBjbG9zZUJ1dHRvbiA9IHRpY2tldEl0ZW0ucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLnRpY2tldENsb3NlQnV0dG9uKTtcbiAgICAgICAgbGV0IGlkVGlja2V0SXRlbSA9IHRpY2tldEl0ZW0uaWQucmVwbGFjZSh0aGlzLmlkcy5pdGVtKyctJywgJycpO1xuXG4gICAgICAgIGlmKGNsb3NlQnV0dG9uKSB7XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbUNvbmZpZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkVGlja2V0SXRlbSk7XG4gICAgICAgICAgICAgICAgbW9kLmhpZGVJdGVtKGNsb3NlQnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgUFJJQ0UucmVjYWxjdWxhdGUoKTtcblxuICAgICAgICAgICAgICAgIGlmKGl0ZW1Db25maWcucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLmNvbmZpZ0luaXRpYWxQYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZC50aWNrZXQucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLnRpY2tldEluaXRpYWxQYXkpLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1vZC5vbkNoYW5nZS5lbGVtZW50ID0gaXRlbUNvbmZpZztcbiAgICAgICAgICAgICAgICBtb2Qub25DaGFuZ2UuZW5lbWllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBtb2Qub25DaGFuZ2UudG9SZW1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG1vZC50aWNrZXQuZGlzcGF0Y2hFdmVudChtb2Qub25DaGFuZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IENvbW1vbiBmcm9tICcuL19jb21tb24nO1xuaW1wb3J0IENvbmZpZ3VyYXRvciBmcm9tICcuL19jb25maWd1cmF0b3InO1xuaW1wb3J0IFRpY2tldCBmcm9tICcuL190aWNrZXQnO1xuXG5jb25zdCBQQVRIX01JQ1JPU0lURSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBhdGhtaWNyb3NpdGVdJykuZ2V0QXR0cmlidXRlKCdkYXRhLXBhdGhtaWNyb3NpdGUnKTtcblxubGV0IGdsb2JhbE1vZHVsZXMgPSB7XG4gICAgX2NvbW1vbjogQ29tbW9uLFxuICAgIF9jb25maWd1cmF0b3I6IENvbmZpZ3VyYXRvcixcbiAgICBfdGlja2V0OiBUaWNrZXRcbn07XG5cbmV4cG9ydCBsZXQgdXRpbHMgPSB7XG4gICAgaW5pdDogc2NvcGUgPT4ge1xuICAgICAgICBsZXQgbW9kdWxlcyA9IHNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZmbXMtanNdJyk7XG5cbiAgICAgICAgZmV0Y2goUEFUSF9NSUNST1NJVEUgKyAnY29uZmlnLWluZm8uanNvbicpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbChtb2R1bGVzLCBtb2QgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtb2R1bGVzQXR0ciA9IG1vZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmZtcy1qcycpO1xuXG4gICAgICAgICAgICAgICAgbW9kdWxlc0F0dHIgPSBtb2R1bGVzQXR0ci5zcGxpdCgnLCcpO1xuXG4gICAgICAgICAgICAgICAgbW9kdWxlc0F0dHIuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnRpZXMgPSB7JGVsZW1lbnQ6IG1vZH07XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuaW5mbyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnN0YW5jZSA9IGdsb2JhbE1vZHVsZXNbYXR0cl0gPyBuZXcgZ2xvYmFsTW9kdWxlc1thdHRyXShwcm9wZXJ0aWVzKSA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZSA/IGluc3RhbmNlLmluaXQoKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuIiwiLyoqXG4gKiBJbmNsdWRlIHZhbHVlIGludG8gdGlja2V0ZGF0YSBmaXJzdCBsZXZlbFxuICpcbiAqIEBmdW5jdGlvbiBpbmNsdWRlVmFsdWVJbk5hbWVTcGFjZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wYW55TmFtZSAtIFRoZSBjb21wYW55IG5hbWUgd2hpY2ggZ29lcyB0byByZWNvdmVyIGRhdGFcbiAqIEBwYXJhbSB7TnVtYmVyfSBrZXkgLSBrZXkgb2YgdGhlIG9iamVjdCB0byBzYXZlXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgLSB2YWx1ZSBhc3NvY2lhdGVkIHRvIGtleVxuICogQHJldHVybiB7dW5kZWZpbmVkfVxuICpcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZVZhbHVlSW5OYW1lU3BhY2UoY29tcGFueU5hbWUsIGtleSwgdmFsdWUpIHtcbiAgICBpZihpc05hbWVzcGFjZVVuZGVmaW5lZChjb21wYW55TmFtZSkpIHtcbiAgICAgICAgcmVnaXN0ZXJOYW1lc3BhY2UoY29tcGFueU5hbWUpO1xuICAgIH1cbiAgICBcbiAgICBzYXZlSW50b05hbWVzcGFjZShjb21wYW55TmFtZSwga2V5LCB2YWx1ZSk7XG59XG5cbi8qKlxuICogSW5jbHVkZSBwcm9kdWN0cyBmcm9tIHRpY2tldCBpbnRvIGdsb2JhbCBvYmplY3RcbiAqXG4gKiBAZnVuY3Rpb24gaW5jbHVkZVRpY2tldFByb2R1Y3RcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcGFueU5hbWUgLSBUaGUgY29tcGFueSBuYW1lIHdoaWNoIGdvZXMgdG8gcmVjb3ZlciBkYXRhXG4gKiBAcGFyYW0ge051bWJlcn0gdGlja2V0IC0gdGlja2V0IEhUTUwgZWxlbWVudFxuICogQHJldHVybiB7dW5kZWZpbmVkfVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGVUaWNrZXRQcm9kdWN0KGNvbXBhbnlOYW1lLCB0aWNrZXQpIHtcbiAgICBjb25zdCB0aWNrZXRMaXN0ID0gdGlja2V0IHx8IHt9O1xuICAgIGNvbnN0IGFyckNsYXNzID0gWycuanMtdGlja2V0LWl0ZW0tdGl0bGUnLCAnLmpzLXRpY2tldC1wYXJ0aWFsLXByaWNlJywgJy5qcy10aWNrZXQtaXRlbSddO1xuICAgIFxuICAgIGlmKGlzTmFtZXNwYWNlVW5kZWZpbmVkKGNvbXBhbnlOYW1lKSkge1xuICAgICAgICByZWdpc3Rlck5hbWVzcGFjZShjb21wYW55TmFtZSk7XG4gICAgfVxuXG4gICAgc2F2ZUludG9OYW1lc3BhY2UoY29tcGFueU5hbWUsICdjb250ZW50Jywge30pO1xuICAgIFxuICAgIFsuLi50aWNrZXRMaXN0XS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5pZCAhPT0gJ2FjY29yZGlvbi10aWNrZXQtcHJvbW9zJykge1xuICAgICAgICAgICAgY29uc3QgdmlzaWJsZUVscyA9IGl0ZW0ucXVlcnlTZWxlY3RvckFsbChgJHthcnJDbGFzc1syXX06bm90KC5oaWRlKWApO1xuICAgICAgICAgICAgbGV0IGtleU9iamVjdCwgdmFsdWU7XG5cbiAgICAgICAgICAgIGlmKGl0ZW0uaWQuaW5kZXhPZignY291bnRlcicpID49IDApIHtcbiAgICAgICAgICAgICAgICBrZXlPYmplY3QgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoYXJyQ2xhc3NbMF0pLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihhcnJDbGFzc1sxXSkuaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgIHNhdmVDb250ZW50SW50b05hbWVzcGFjZShjb21wYW55TmFtZSwga2V5T2JqZWN0LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgc2F2ZUNvbnRlbnRJbnRvTmFtZXNwYWNlKGNvbXBhbnlOYW1lLCBgJHtrZXlPYmplY3R9IENhbnRpZGFkYCwgdmlzaWJsZUVscy5sZW5ndGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwodmlzaWJsZUVscywgZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBrZXlPYmplY3QgPSBlbC5xdWVyeVNlbGVjdG9yKGFyckNsYXNzWzBdKS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZWwucXVlcnlTZWxlY3RvcihhcnJDbGFzc1sxXSkuaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICBzYXZlQ29udGVudEludG9OYW1lc3BhY2UoY29tcGFueU5hbWUsIGtleU9iamVjdCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2F2ZUNvbnRlbnRJbnRvTmFtZXNwYWNlKGNvbXBhbnlOYW1lLCAncHJvbW8nLCBpdGVtLnF1ZXJ5U2VsZWN0b3IoYXJyQ2xhc3NbMF0pLmlubmVyVGV4dCk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG4vKipcbiAqIENyZWF0ZSBuYW1lc3BhY2UgaW50byB2ZmVzIG9iamVjdFxuICpcbiAqIEBmdW5jdGlvbiByZWdpc3Rlck5hbWVzcGFjZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wYW55TmFtZSAtIFRoZSBjb21wYW55IG5hbWUgd2hpY2ggZ29lcyB0byByZWNvdmVyIGRhdGFcbiAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAqXG4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyTmFtZXNwYWNlKGNvbXBhbnlOYW1lKSB7XG4gICAgd2luZG93LnZmZXNbY29tcGFueU5hbWVdID0geyBcImRhdGFUaWNrZXRcIjoge30gfTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBuYW1lc3BhY2UgZXhpc3RzIGludG8gdmZlcyBvYmplY3RcbiAqXG4gKiBAZnVuY3Rpb24gaXNOYW1lc3BhY2VVbmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcGFueU5hbWUgLSBUaGUgY29tcGFueSBuYW1lIHdoaWNoIGdvZXMgdG8gcmVjb3ZlciBkYXRhXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICpcbiAqL1xuZnVuY3Rpb24gaXNOYW1lc3BhY2VVbmRlZmluZWQoY29tcGFueU5hbWUpIHtcbiAgICByZXR1cm4gd2luZG93LnZmZXNbY29tcGFueU5hbWVdID09PSB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogU2F2ZSB2YWx1ZSBpbnRvIG5hbWVzcGFjZVxuICpcbiAqIEBmdW5jdGlvbiBzYXZlSW50b05hbWVzcGFjZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wYW55TmFtZSAtIFRoZSBjb21wYW55IG5hbWUgd2hpY2ggZ29lcyB0byByZWNvdmVyIGRhdGFcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBvYmplY3Qga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSBvYmplY3Qga2V5IHZhbHVlXG4gKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gKlxuICovXG5mdW5jdGlvbiBzYXZlSW50b05hbWVzcGFjZShjb21wYW55TmFtZSwga2V5LCB2YWx1ZSkge1xuICAgIHdpbmRvdy52ZmVzW2NvbXBhbnlOYW1lXVsnZGF0YVRpY2tldCddW2tleV0gPSB2YWx1ZTtcbn1cblxuLyoqXG4gKiBTYXZlIHZhbHVlIGludG8gbmFtZXNwYWNlJ3MgY29udGVudFxuICpcbiAqIEBmdW5jdGlvbiBzYXZlQ29udGVudEludG9OYW1lc3BhY2VcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcGFueU5hbWUgLSBUaGUgY29tcGFueSBuYW1lIHdoaWNoIGdvZXMgdG8gcmVjb3ZlciBkYXRhXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gb2JqZWN0IGtleVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gb2JqZWN0IGtleSB2YWx1ZVxuICogQHJldHVybiB7dW5kZWZpbmVkfVxuICpcbiAqL1xuZnVuY3Rpb24gc2F2ZUNvbnRlbnRJbnRvTmFtZXNwYWNlKGNvbXBhbnlOYW1lLCBrZXksIHZhbHVlKSB7XG4gICAgd2luZG93LnZmZXNbY29tcGFueU5hbWVdWydkYXRhVGlja2V0J11bJ2NvbnRlbnQnXVtrZXldID0gdmFsdWU7XG59IiwiaW1wb3J0IHRvb2xzIGZyb20gJy4vdG9vbHMnO1xuaW1wb3J0IHt1dGlsc30gZnJvbSAnLi9fdXRpbHMnO1xuXG50b29scy5vblN0eWxlc1JlYWR5ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2l0ZSB2aXN1YWxseSByZWFkeVwiKTtcblxuICAgIHV0aWxzLmluaXQoZG9jdW1lbnQpO1xuXG4gICAgaW5pdEJvdG9uZXMoKTtcblxuICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA5NzBweCknKS5tYXRjaGVzID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXRpY2tldC1kcm9wZG93bicpLmNsaWNrKCkgOiBudWxsO1xuXG4gICAgdmFyIHRpY2tldFRvdGFsID0gXCJcIjtcblxuICAgIHZhciBidG5SYXRlTW9iaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1yYXRlcy1tb2JpbGUnKTtcbiAgICB2YXIgYnRuUmF0ZUNvbnZlcmdlbnRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1yYXRlcy1jb252ZXJnZW50ZScpO1xuXG4gICAgdmFyIGNvbnRhaW5lclJhdGVNb2JpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlLXJhdGVzLWNvbnRhaW5lcicpO1xuICAgIHZhciBjb250YWluZXJSYXRlQ29udmVyZ2VudGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udmVyZ2VudGUtcmF0ZXMtY29udGFpbmVyJyk7XG5cbiAgICBjb250YWluZXJSYXRlQ29udmVyZ2VudGUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjsgICBcblxuXG4gICAgYnRuUmF0ZU1vYmlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWJyaXJUYXJpZmFzTW92aWwpO1xuICAgIGJ0blJhdGVDb252ZXJnZW50ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWJyaXJUYXJpZmFzQ29udmVyZ2VudGUpO1xuXG4gICAgZnVuY3Rpb24gYWJyaXJUYXJpZmFzTW92aWwoKXtcbiAgICAgICAgY29udGFpbmVyUmF0ZU1vYmlsZS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgY29udGFpbmVyUmF0ZUNvbnZlcmdlbnRlLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7ICAgXG4gICAgfVxuICAgIGZ1bmN0aW9uIGFicmlyVGFyaWZhc0NvbnZlcmdlbnRlKCl7IFxuICAgICAgICBjb250YWluZXJSYXRlTW9iaWxlLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgIGNvbnRhaW5lclJhdGVDb252ZXJnZW50ZS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjsgICAgICAgXG4gICAgfVxuXG4gICAgbGV0IGJ0bkNhcGl0YUNlcnJhcj0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jYXBpdGEtY2VycmFyJyk7XG4gICAgbGV0IGJ0bkluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWluZm8nKTtcbiAgICBsZXQgaW5mb0NhcGl0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLWNhcGl0YScpO1xuXG5cbiAgICBidG5JbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWJyaXJDYXBpdGEpO1xuICAgIGZ1bmN0aW9uIGFicmlyQ2FwaXRhKCl7XG4gICAgICBpbmZvQ2FwaXRhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBidG5DYXBpdGFDZXJyYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjZXJyYXJDYXBpdGEpO1xuICAgIGZ1bmN0aW9uIGNlcnJhckNhcGl0YSgpe1xuICAgICAgaW5mb0NhcGl0YS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgICAvL3RpY2tldFxuXG4gICAgdmFyIHByZWNpb1RvdGFsTW9zdHJhZG8gPSAxLjMzIDtcblxuICAgIHZhciB0aWNrZXRQcmVjaW9Ub3RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aWNrZXQtcHJlY2lvLXRvdGFsJyk7XG4gICAgdmFyIHRpY2tldFByZWNpb1RvdGFsMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aWNrZXQtcHJlY2lvLXRvdGFsMicpO1xuXG4gICAgdGlja2V0UHJlY2lvVG90YWwuaW5uZXJIVE1MPXByZWNpb1RvdGFsTW9zdHJhZG87XG4gICAgdGlja2V0UHJlY2lvVG90YWwyLmlubmVySFRNTD1wcmVjaW9Ub3RhbE1vc3RyYWRvO1xuXG5cblxuXG5cbiAgICB2YXIgY2FycnVzZWwzSXRlbXM9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJydXNlbDMtaXRlbScpO1xuICAgIHZhciBjYXJydXNlbDJJdGVtcz0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnJ1c2VsMi1pdGVtJyk7XG4gICAgdmFyIGNhcnJ1c2VsMUl0ZW1zPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FycnVzZWwxLWl0ZW0nKTtcbiAgICB2YXIgY2FycnVzZWw0SXRlbXM9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJydXNlbDQtaXRlbScpO1xuXG4gICAgY2FycnVzZWwzSXRlbXMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICBjYXJydXNlbDJJdGVtcy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgIGNhcnJ1c2VsMUl0ZW1zLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgIGNhcnJ1c2VsNEl0ZW1zLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG5cbiAgICB2YXIgZ2FmYXM9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYWZhcycpO1xuICAgIHZhciBhaXJwb2RzPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWlycG9kcycpO1xuXG4gICAgdmFyIGJ0bkdhZmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1nYWZhcycpO1xuICAgIHZhciBidG5HYWZhc0VsaW1pbmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1nYWZhcy1lbGltaW5hcicpO1xuICAgIHZhciBidG5BaXJwb2RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1haXJwb2RzJyk7XG4gICAgdmFyIGJ0bkFpcnBvZHNFbGltaW5hciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tYWlycG9kcy1lbGltaW5hcicpO1xuXG5cbiAgICBidG5HYWZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjY2lvbmFyR2FmYXMpO1xuICAgIGJ0bkdhZmFzRWxpbWluYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbGltaW5hckdhZmFzKTtcbiAgICBidG5BaXJwb2RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWNjaW9uYXJBaXJwb2RzKTtcbiAgICBidG5BaXJwb2RzRWxpbWluYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbGltaW5hckFpcnBvZHMpO1xuXG5cbiAgICB2YXIgZ2FmYXNDb250YWluZXJUaWNrZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FmYXMtY29udGFpbmVyJyk7XG4gICAgdmFyIGFpcnBvZHNDb250YWluZXJUaWNrZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWlycG9kcy1jb250YWluZXInKTtcblxuICAgIHZhciB0aWNrZXRQcmVjaW9BY2Nlc29yaW89IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aWNrZXQtcHJlY2lvLWFjY2Vzb3JpbycpO1xuXG5cbiAgICBnYWZhc0NvbnRhaW5lclRpY2tldC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgIGFpcnBvZHNDb250YWluZXJUaWNrZXQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICBsZXQgcHJlY2lvQWNjZSA9IDA7XG4gICAgdGlja2V0UHJlY2lvQWNjZXNvcmlvLmlubmVySFRNTD0gcHJlY2lvQWNjZTtcblxuICAgIGZ1bmN0aW9uIHNlbGVjY2lvbmFyR2FmYXMoKXtcbiAgICAgIGdhZmFzLmNsYXNzTGlzdC5hZGQoJ2FkZGVkJyk7XG4gICAgICBidG5HYWZhc0VsaW1pbmFyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgZ2FmYXNDb250YWluZXJUaWNrZXQuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICBhcGVydHVyYUFjY2Vzb3Jpby5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgIHByZWNpb0FjY2UgKz0gMjksOTk7IFxuICAgICAgdGlja2V0UHJlY2lvQWNjZXNvcmlvLmlubmVySFRNTD0gcHJlY2lvQWNjZS50b0ZpeGVkKDIpOyAgXG4gICAgICBwcmVjaW9Ub3RhbE1vc3RyYWRvICs9IDI5LDk5O1xuICAgICAgdGlja2V0UHJlY2lvVG90YWwuaW5uZXJIVE1MPXByZWNpb1RvdGFsTW9zdHJhZG8udG9GaXhlZCgyKTsgIFxuICAgICAgdGlja2V0UHJlY2lvVG90YWwyLmlubmVySFRNTD1wcmVjaW9Ub3RhbE1vc3RyYWRvLnRvRml4ZWQoMik7ICBcbiAgICB9XG4gICAgZnVuY3Rpb24gZWxpbWluYXJHYWZhcygpe1xuICAgICAgZ2FmYXMuY2xhc3NMaXN0LnJlbW92ZSgnYWRkZWQnKTtcbiAgICAgIGJ0bkdhZmFzRWxpbWluYXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICAgIGdhZmFzQ29udGFpbmVyVGlja2V0LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICBwcmVjaW9BY2NlIC09IDI5LDk5OyBcbiAgICAgIHRpY2tldFByZWNpb0FjY2Vzb3Jpby5pbm5lckhUTUw9IHByZWNpb0FjY2UudG9GaXhlZCgyKTsgIFxuICAgICAgcHJlY2lvVG90YWxNb3N0cmFkbyAtPSAyOSw5OTtcbiAgICAgIHRpY2tldFByZWNpb1RvdGFsLmlubmVySFRNTD1wcmVjaW9Ub3RhbE1vc3RyYWRvLnRvRml4ZWQoMik7ICBcbiAgICAgIHRpY2tldFByZWNpb1RvdGFsMi5pbm5lckhUTUw9cHJlY2lvVG90YWxNb3N0cmFkby50b0ZpeGVkKDIpOyAgXG4gICAgfVxuICAgIGZ1bmN0aW9uIHNlbGVjY2lvbmFyQWlycG9kcygpe1xuICAgICAgYWlycG9kcy5jbGFzc0xpc3QuYWRkKCdhZGRlZCcpO1xuICAgICAgYnRuQWlycG9kc0VsaW1pbmFyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgYWlycG9kc0NvbnRhaW5lclRpY2tldC5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgIGFwZXJ0dXJhQWNjZXNvcmlvLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgcHJlY2lvQWNjZSArPSAzOSw5OTsgXG4gICAgICB0aWNrZXRQcmVjaW9BY2Nlc29yaW8uaW5uZXJIVE1MPSBwcmVjaW9BY2NlLnRvRml4ZWQoMik7ICBcbiAgICAgIHByZWNpb1RvdGFsTW9zdHJhZG8gKz0gMzksOTk7XG4gICAgICB0aWNrZXRQcmVjaW9Ub3RhbC5pbm5lckhUTUw9cHJlY2lvVG90YWxNb3N0cmFkby50b0ZpeGVkKDIpOyAgXG4gICAgICB0aWNrZXRQcmVjaW9Ub3RhbDIuaW5uZXJIVE1MPXByZWNpb1RvdGFsTW9zdHJhZG8udG9GaXhlZCgyKTsgIFxuICAgIH1cbiAgICBmdW5jdGlvbiBlbGltaW5hckFpcnBvZHMoKXtcbiAgICAgIGFpcnBvZHMuY2xhc3NMaXN0LnJlbW92ZSgnYWRkZWQnKTtcbiAgICAgIGJ0bkFpcnBvZHNFbGltaW5hci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgYWlycG9kc0NvbnRhaW5lclRpY2tldC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgcHJlY2lvQWNjZSAtPSAzOSw5OTsgXG4gICAgICB0aWNrZXRQcmVjaW9BY2Nlc29yaW8uaW5uZXJIVE1MPSBwcmVjaW9BY2NlLnRvRml4ZWQoMik7ICBcbiAgICAgIHByZWNpb1RvdGFsTW9zdHJhZG8gLT0gMzksOTk7XG4gICAgICB0aWNrZXRQcmVjaW9Ub3RhbC5pbm5lckhUTUw9cHJlY2lvVG90YWxNb3N0cmFkby50b0ZpeGVkKDIpOyAgXG4gICAgICB0aWNrZXRQcmVjaW9Ub3RhbDIuaW5uZXJIVE1MPXByZWNpb1RvdGFsTW9zdHJhZG8udG9GaXhlZCgyKTsgIFxuICAgIH1cblxuICAgIHZhciBjaGVja1BvcnRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcnRhYmlsaWRhZCcpO1xuICAgIHZhciBjaGVja051bU51ZXZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bS1udWV2bycpO1xuICAgIHZhciBjaGVja1BsYXpvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF6b3MnKTtcbiAgICB2YXIgY2hlY2tVbmljbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bmljbycpO1xuICAgIHZhciBtZXNlc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNlcycpO1xuICAgIHZhciBtZXMzNiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXMtMzYnKTtcbiAgICB2YXIgbWVzMjQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzLTI0Jyk7XG4gICAgdmFyIG1lczM2SW5hY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzLTM2LWluYWN0aXZlJyk7XG4gICAgdmFyIG1lczM2QWN0aXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lcy0zNi1hY3RpdmUnKTtcbiAgICB2YXIgbWVzMjRJbmFjdGl2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXMtMjQtaW5hY3RpdmUnKTtcbiAgICB2YXIgbWVzMjRBY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzLTI0LWFjdGl2ZScpO1xuXG5cbiAgICBjaGVja1BvcnRhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRvUG9ydGFiaWxpZGFkKVxuICAgIGZ1bmN0aW9uIGRvUG9ydGFiaWxpZGFkKCkgeyAgXG4gICAgICAgIGlmIChjaGVja1BvcnRhLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNoZWNrUGxhem9zLmRpc2FibGVkPWZhbHNlO1xuICAgICAgICAgICAgLy90aWNrZXRUb3RhbCArPTQ5O1xuICAgICAgICAgICAgLy9kb2N1bWVudC53cml0ZSh0aWNrZXRUb3RhbCk7XG4gICAgICAgIH0gZWxzZSB7ICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja051bU51ZXZvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRvTnVtTnVldm8pXG4gICAgZnVuY3Rpb24gZG9OdW1OdWV2bygpIHsgXG4gICAgICAgIGlmIChjaGVja051bU51ZXZvLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNoZWNrUGxhem9zLmRpc2FibGVkPXRydWU7XG4gICAgICAgIH0gZWxzZSB7ICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdGlwb1BhZ29QbGF6b3MgPSB0cnVlO1xuXG4gICAgY2hlY2tQbGF6b3MuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZG9QbGF6b3MpXG4gICAgZnVuY3Rpb24gZG9QbGF6b3MoKSB7IFxuICAgICAgICBpZiAoY2hlY2tQbGF6b3MuY2hlY2tlZCkge1xuICAgICAgICAgIG1lc2VzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiOyAgXG4gICAgICAgICAgdGlwb1BhZ29QbGF6b3MgPSB0cnVlOyAgXG5cbiAgICAgICAgfSBlbHNlIHsgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tVbmljby5kaXNhYmxlZD10cnVlO1xuICAgIGNoZWNrVW5pY28uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZG9VbmljbylcbiAgICBmdW5jdGlvbiBkb1VuaWNvKCkgeyBcbiAgICAgICAgaWYgKGNoZWNrVW5pY28uY2hlY2tlZCkge1xuICAgICAgICAgIG1lc2VzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7ICAgXG4gICAgICAgICAgdGlwb1BhZ29QbGF6b3MgPSBmYWxzZTsgIFxuICAgICAgIFxuICAgICAgICB9IGVsc2UgeyAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIG1lczM2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUGxhem9zMzYpO1xuICAgIG1lczI0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUGxhem9zMjQpO1xuXG4gICAgbGV0IHByZWNpb1RsZiA9IDA7XG5cbiAgICBtZXMyNEFjdGl2ZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgIG1lczM2QWN0aXZlLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG5cbiAgICBmdW5jdGlvbiBhZGRQbGF6b3MzNigpe1xuICAgICAgbWVzMzZJbmFjdGl2ZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgbWVzMzZBY3RpdmUuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICBtZXMyNEluYWN0aXZlLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgbWVzMjRBY3RpdmUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkUGxhem9zMjQoKXtcbiAgICAgIG1lczI0SW5hY3RpdmUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICAgIG1lczI0QWN0aXZlLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgbWVzMzZJbmFjdGl2ZS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgIG1lczM2QWN0aXZlLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7ICAgIFxuICAgIH1cblxuICAgIC8vQWNvcmRlw7NuIHRlbGVmb25vLW1vdmlsXG4gICAgdmFyIGFwZXJ0dXJhVGxmPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBlcnR1cmEtdGVsZWZvbm8tbW92aWwnKTtcbiAgICB2YXIgbWVub3NUbGY9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW5vcy10ZWxlZm9uby1tb3ZpbCcpO1xuICAgIHZhciBtYXNUbGY9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXMtdGVsZWZvbm8tbW92aWwnKTtcbiAgICB2YXIgY29udGVUbGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udC10ZWxlZm9uby1tb3ZpbCcpO1xuICAgIGFwZXJ0dXJhVGxmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWJyaXJjZXJyYXJUbGYpO1xuICAgIGxldCBlc3RhZG9UbGYgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGFicmlyY2VycmFyVGxmKCl7XG4gICAgICBpZiAoZXN0YWRvVGxmID09IGZhbHNlKXtcbiAgICAgICAgY29udGVUbGYuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICAgICAgbWVub3NUbGYuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICAgICAgbWFzVGxmLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgICBlc3RhZG9UbGY9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBlc3RhZG9UbGY9IGZhbHNlO1xuICAgICAgICBjb250ZVRsZi5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgbWVub3NUbGYuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgIG1hc1RsZi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgfSAgXG4gICAgfVxuXG4gICAgICAvL0Fjb3JkZcOzbiBUYXJpZmFcbiAgICAgIHZhciBhcGVydHVyYVRhcmlmYT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwZXJ0dXJhLXRhcmlmYScpO1xuICAgICAgdmFyIG1lbm9zVGFyaWZhPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVub3MtdGFyaWZhJyk7XG4gICAgICB2YXIgbWFzVGFyaWZhPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzLXRhcmlmYScpO1xuICAgICAgdmFyIGNvbnRlVGFyaWZhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnQtdGFyaWZhJyk7XG4gICAgICBhcGVydHVyYVRhcmlmYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFicmlyY2VycmFyVGFyaWZhKTtcbiAgICAgIGxldCBlc3RhZG9UYXJpZmEgPSBmYWxzZTtcbiAgXG4gICAgICBmdW5jdGlvbiBhYnJpcmNlcnJhclRhcmlmYSgpe1xuICAgICAgICBpZiAoZXN0YWRvVGFyaWZhID09IGZhbHNlKXtcbiAgICAgICAgICBjb250ZVRhcmlmYS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICAgIG1lbm9zVGFyaWZhLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgICAgbWFzVGFyaWZhLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgICAgIGVzdGFkb1RhcmlmYT0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIGVzdGFkb1RhcmlmYT0gZmFsc2U7XG4gICAgICAgICAgY29udGVUYXJpZmEuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgICAgbWVub3NUYXJpZmEuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgICAgbWFzVGFyaWZhLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgIH0gIFxuICAgICAgfVxuXG4gICAgICAgLy9BY29yZGXDs24gQWNjZXNvcmlvXG4gICAgICAgdmFyIGFwZXJ0dXJhQWNjZXNvcmlvPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBlcnR1cmEtYWNjZXNvcmlvJyk7XG4gICAgICAgdmFyIG1lbm9zQWNjZXNvcmlvPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVub3MtYWNjZXNvcmlvJyk7XG4gICAgICAgdmFyIG1hc0FjY2Vzb3Jpbz0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcy1hY2Nlc29yaW8nKTtcbiAgICAgICB2YXIgY29udGVBY2Nlc29yaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udC1hY2Nlc29yaW8nKTtcbiAgICAgICBhcGVydHVyYUFjY2Vzb3Jpby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFicmlyY2VycmFyQWNjZXNvcmlvKTtcbiAgICAgICBsZXQgZXN0YWRvQWNjZXNvcmlvID0gZmFsc2U7XG5cbiAgICAgICBhcGVydHVyYUFjY2Vzb3Jpby5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuXG4gICAgICAgXG4gICAgICAgZnVuY3Rpb24gYWJyaXJjZXJyYXJBY2Nlc29yaW8oKXtcbiAgICAgICAgIGlmIChlc3RhZG9BY2Nlc29yaW8gPT0gZmFsc2Upe1xuICAgICAgICAgICBjb250ZUFjY2Vzb3Jpby5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICAgICBtZW5vc0FjY2Vzb3Jpby5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICAgICBtYXNBY2Nlc29yaW8uc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgICAgIGVzdGFkb0FjY2Vzb3Jpbz0gdHJ1ZTtcbiAgICAgICAgIH1cbiAgICAgICAgIGVsc2V7XG4gICAgICAgICAgIGVzdGFkb0FjY2Vzb3Jpbz0gZmFsc2U7XG4gICAgICAgICAgIGNvbnRlQWNjZXNvcmlvLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgICAgICBtZW5vc0FjY2Vzb3Jpby5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgICAgbWFzQWNjZXNvcmlvLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgICB9ICBcbiAgICAgICB9XG5cbiAgICAgICAgLy9BY29yZGXDs24gQWRpY2lvbmFsXG4gICAgICAgIHZhciBhcGVydHVyYUFkaWNpb25hbD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwZXJ0dXJhLWFkaWNpb25hbCcpO1xuICAgICAgICB2YXIgbWVub3NBZGljaW9uYWw9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW5vcy1hZGljaW9uYWwnKTtcbiAgICAgICAgdmFyIG1hc0FkaWNpb25hbD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcy1hZGljaW9uYWwnKTtcbiAgICAgICAgdmFyIGNvbnRlQWRpY2lvbmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnQtYWRpY2lvbmFsJyk7XG4gICAgICAgIGFwZXJ0dXJhQWRpY2lvbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWJyaXJjZXJyYXJBZGljaW9uYWwpO1xuICAgICAgICBsZXQgZXN0YWRvQWRpY2lvbmFsID0gZmFsc2U7XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGFicmlyY2VycmFyQWRpY2lvbmFsKCl7XG4gICAgICAgICAgaWYgKGVzdGFkb0FkaWNpb25hbCA9PSBmYWxzZSl7XG4gICAgICAgICAgICBjb250ZUFkaWNpb25hbC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICAgICAgbWVub3NBZGljaW9uYWwuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICAgICAgICAgIG1hc0FkaWNpb25hbC5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgICAgIGVzdGFkb0FkaWNpb25hbD0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGVzdGFkb0FkaWNpb25hbD0gZmFsc2U7XG4gICAgICAgICAgICBjb250ZUFkaWNpb25hbC5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgICAgIG1lbm9zQWRpY2lvbmFsLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgICAgICAgbWFzQWRpY2lvbmFsLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgICAgfSAgXG4gICAgICAgIH1cblxuXG4gICAgLy90aWNrZXQtbm9tYnJlLXRhcmlmYVxuXG4gICAgbGV0IHRpY2tldE5vbWJyZVRhcmlmYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aWNrZXQtbm9tYnJlLXRhcmlmYScpO1xuICAgIGxldCB0aWNrZXRQcmVjaW9UYXJpZmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGlja2V0LXByZWNpby10YXJpZmEnKTtcbiAgICBsZXQgdGlja2V0UHJlY2lvVGVsZWZvbm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGlja2V0LXByZWNpby10bGYnKTtcblxuICAgIGxldCBzZWN1cmVuZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdXJlbmV0LWNvbnRhaW5lcicpO1xuICAgIGxldCBoYXRjaENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYXRjaC1jb250YWluZXInKTtcbiAgICBsZXQgb25lTnVtYmVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29uZW51bWJlci1jb250YWluZXInKTtcbiAgICBsZXQgcHJlY2lvVGFyaWZTZWxlY3QgPSA0MDtcblxuICAgIFxuICAgIHByZWNpb1RsZj0gMTguOTg7XG4gICAgdGlja2V0UHJlY2lvVGVsZWZvbm8uaW5uZXJIVE1MID0gcHJlY2lvVGxmO1xuXG5cbiAgICBwcmVjaW9Ub3RhbE1vc3RyYWRvICs9IHByZWNpb1RhcmlmU2VsZWN0O1xuICAgIHByZWNpb1RvdGFsTW9zdHJhZG8gKz0gcHJlY2lvVGxmO1xuICAgIFxuICAgIHRpY2tldFByZWNpb1RvdGFsLmlubmVySFRNTD1wcmVjaW9Ub3RhbE1vc3RyYWRvO1xuICAgIHRpY2tldFByZWNpb1RvdGFsMi5pbm5lckhUTUw9cHJlY2lvVG90YWxNb3N0cmFkbztcblxuICAgIGZ1bmN0aW9uIGluaXRCb3RvbmVzKCl7XG4gICAgICAgIHZhciBib3RvbmVzQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRhcmlmYV1cIik7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8IGJvdG9uZXNBZGQubGVuZ3RoIDsgaSsrKXtcbiAgIFxuICAgICAgICAgICAgYm90b25lc0FkZFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgajwgYm90b25lc0FkZC5sZW5ndGggOyBqKyspe1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb3MgPSBib3RvbmVzQWRkW2pdLmRhdGFzZXQudGFyaWZhOyAgXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2Rvc1BhcmFCb3JyYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2Rvcyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9zUGFyYUJvcnJhci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdhZGRlZCcpOyAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbm9tYnJlVGFyaWZhU2VsZWNjaW9uYWRhID0gdGhpcy5kYXRhc2V0LnRhcmlmYTsgICBcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudG9UYXJpZmFTZWxlY3RhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobm9tYnJlVGFyaWZhU2VsZWNjaW9uYWRhKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50b1RhcmlmYVNlbGVjdGEuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYWRkZWQnKTsgIFxuICAgICAgICAgICAgICAgIHRpY2tldE5vbWJyZVRhcmlmYS5pbm5lckhUTUwgPSB0aGlzLmRhdGFzZXQudGFyaWZhTm9tYnJlO1xuICAgICAgICAgICAgICAgIHRpY2tldFByZWNpb1RhcmlmYS5pbm5lckhUTUwgPSB0aGlzLmRhdGFzZXQucHJlY2lvVGFyaWZhO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHByZWNpb1RhcmlmU2VsZWN0ID09IHByZWNpb1RhcmlmU2VsZWN0IC0gcHJlY2lvVGFyaWZTZWxlY3Q7XG4gICAgICAgICAgICAgICAgcHJlY2lvVG90YWxNb3N0cmFkbyAtPSBwcmVjaW9UYXJpZlNlbGVjdDtcbiAgICAgICAgICAgICAgICBwcmVjaW9UYXJpZlNlbGVjdD0gcGFyc2VJbnQodGhpcy5kYXRhc2V0LnByZWNpb1RhcmlmYSk7XG4gICAgICAgICAgICAgICAgcHJlY2lvVG90YWxNb3N0cmFkbyArPSBwcmVjaW9UYXJpZlNlbGVjdDtcbiAgICAgICAgICAgICAgICB0aWNrZXRQcmVjaW9Ub3RhbC5pbm5lckhUTUw9cHJlY2lvVG90YWxNb3N0cmFkby50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIHRpY2tldFByZWNpb1RvdGFsMi5pbm5lckhUTUw9cHJlY2lvVG90YWxNb3N0cmFkby50b0ZpeGVkKDIpOyAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBpZiAodGlwb1BhZ29QbGF6b3MgPT0gdHJ1ZSApe1xuXG4gICAgICAgICAgICAgICAgICBwcmVjaW9UbGYgPT0gIHByZWNpb1RsZi0gcHJlY2lvVGxmO1xuICAgICAgICAgICAgICAgICAgcHJlY2lvVG90YWxNb3N0cmFkbyAtPSAgcHJlY2lvVGxmO1xuICAgICAgICAgICAgICAgICAgcHJlY2lvVGxmPXBhcnNlSW50KHRoaXMuZGF0YXNldC5wcmVjaW9QbGF6b3MpOyBcbiAgICAgICAgICAgICAgICAgIHByZWNpb1RvdGFsTW9zdHJhZG8gKz0gIHByZWNpb1RsZjtcbiAgICAgICAgICAgICAgICAgIHRpY2tldFByZWNpb1RlbGVmb25vLmlubmVySFRNTCA9IHByZWNpb1RsZjsgICAgICBcbiAgICAgICAgICAgICAgICAgIHRpY2tldFByZWNpb1RvdGFsLmlubmVySFRNTD1wcmVjaW9Ub3RhbE1vc3RyYWRvLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgICB0aWNrZXRQcmVjaW9Ub3RhbDIuaW5uZXJIVE1MPXByZWNpb1RvdGFsTW9zdHJhZG8udG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgIHByZWNpb1RsZiA9PSAgcHJlY2lvVGxmLSBwcmVjaW9UbGY7XG4gICAgICAgICAgICAgICAgICBwcmVjaW9Ub3RhbE1vc3RyYWRvIC09ICBwcmVjaW9UbGY7XG4gICAgICAgICAgICAgICAgICBwcmVjaW9UbGY9cGFyc2VJbnQodGhpcy5kYXRhc2V0LnByZWNpb1VuaWNvKTsgXG4gICAgICAgICAgICAgICAgICBwcmVjaW9Ub3RhbE1vc3RyYWRvICs9ICBwcmVjaW9UbGY7XG4gICAgICAgICAgICAgICAgICB0aWNrZXRQcmVjaW9UZWxlZm9uby5pbm5lckhUTUwgPSBwcmVjaW9UbGY7ICAgICAgXG4gICAgICAgICAgICAgICAgICB0aWNrZXRQcmVjaW9Ub3RhbC5pbm5lckhUTUw9cHJlY2lvVG90YWxNb3N0cmFkby50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgICAgdGlja2V0UHJlY2lvVG90YWwyLmlubmVySFRNTD1wcmVjaW9Ub3RhbE1vc3RyYWRvLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN3aXRjaChub21icmVUYXJpZmFTZWxlY2Npb25hZGEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInZvZGFmb25lLWlsaW1pdGFkYVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnVzZWwzSXRlbXMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ1c2VsMkl0ZW1zLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJydXNlbDFJdGVtcy5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ1c2VsNEl0ZW1zLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZW5ldENvbnRhaW5lci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhdGNoQ29udGFpbmVyLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbmVOdW1iZXJDb250YWluZXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidm9kYWZvbmUtc3VwZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ1c2VsM0l0ZW1zLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJydXNlbDJJdGVtcy5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ1c2VsMUl0ZW1zLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJydXNlbDRJdGVtcy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmVuZXRDb250YWluZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXRjaENvbnRhaW5lci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uZU51bWJlckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInZvZGFmb25lLXRvdGFsXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJydXNlbDNJdGVtcy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnVzZWwySXRlbXMuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJydXNlbDFJdGVtcy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnVzZWw0SXRlbXMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlbmV0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGF0Y2hDb250YWluZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbmVOdW1iZXJDb250YWluZXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcblxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2b2RhZm9uZS1taW5pXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJydXNlbDNJdGVtcy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnVzZWwySXRlbXMuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJydXNlbDFJdGVtcy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnVzZWw0SXRlbXMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZW5ldENvbnRhaW5lci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhdGNoQ29udGFpbmVyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgb25lTnVtYmVyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidm9kYWZvbmUtZXh0cmFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ1c2VsM0l0ZW1zLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJydXNlbDJJdGVtcy5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ1c2VsMUl0ZW1zLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJydXNlbDRJdGVtcy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmVuZXRDb250YWluZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXRjaENvbnRhaW5lci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uZU51bWJlckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInZvZGFmb25lLW9uZS1pbGltaXRhZGFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ1c2VsM0l0ZW1zLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJydXNlbDJJdGVtcy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnVzZWwxSXRlbXMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ1c2VsNEl0ZW1zLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmVuZXRDb250YWluZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXRjaENvbnRhaW5lci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgb25lTnVtYmVyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidm9kYWZvbmUtb25lLXN1cGVyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJydXNlbDNJdGVtcy5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ1c2VsMkl0ZW1zLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJydXNlbDFJdGVtcy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnVzZWw0SXRlbXMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlbmV0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGF0Y2hDb250YWluZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbmVOdW1iZXJDb250YWluZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidm9kYWZvbmUtb25lLXRvdGFsXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJydXNlbDNJdGVtcy5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ1c2VsMkl0ZW1zLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJydXNlbDFJdGVtcy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnVzZWw0SXRlbXMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlbmV0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGF0Y2hDb250YWluZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbmVOdW1iZXJDb250YWluZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG5cblxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2b2RhZm9uZS1vbmUtbWluaVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnVzZWwzSXRlbXMuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJydXNlbDJJdGVtcy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnVzZWwxSXRlbXMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ1c2VsNEl0ZW1zLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmVuZXRDb250YWluZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXRjaENvbnRhaW5lci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uZU51bWJlckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcblxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2b2RhZm9uZS1vbmUtZXh0cmFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ1c2VsM0l0ZW1zLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnVzZWwySXRlbXMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ1c2VsMUl0ZW1zLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJydXNlbDRJdGVtcy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmVuZXRDb250YWluZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXRjaENvbnRhaW5lci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uZU51bWJlckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcblxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJydXNlbDNJdGVtcy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnVzZWwySXRlbXMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ1c2VsMUl0ZW1zLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnVzZWw0SXRlbXMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlbmV0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGF0Y2hDb250YWluZXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uZU51bWJlckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuXG4gICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG59O1xuXG50b29scy5vblN0eWxlc1JlYWR5KCk7XG5cblxuIiwiLypcbiAqIE1pY3Jvc2l0ZXMgdG9vbHMganM6XG4gKiBFc3RlIGZpY2hlcm8gZXMgdW5hIG11ZXN0cmEgZGUgdXRpbGlkYWRlcyBwcm9waWFzIHBhcmEgbG9zIG1pY3Jvc2l0ZXMuXG4gKiBTZSBwdWVkZSBwZXJzb25hbGl6YXIgYSB0dSBndXN0b1xuICpcbiAqL1xuXG5mdW5jdGlvbiBpbml0KCl7XG5cbn1cblxubGV0IHdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xubGV0IGlzRGVza3RvcCwgaXNUYWJsZXQsIGlzTW9iaWxlO1xuaXNEZXNrdG9wID0gd2lkdGggPiA5Njk7XG5pc1RhYmxldCA9IHdpZHRoIDw9IDk2OSAmJiB3aWR0aCA+PSA3Njg7XG5pc01vYmlsZSA9IHdpZHRoIDwgNzY4ICYmIHdpZHRoID4gMzAwO1xuLy8gVE9ET1xuLy8gY29uc3QgUEFUSF9NSUNST1NJVEUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWljcm8tcGFxdWV0ZXMnKS5wYXJlbnRzKCdbZGF0YS1wYXRobWljcm9zaXRlXScpLmF0dHIoJ2RhdGEtcGF0aG1pY3Jvc2l0ZScpO1xuXG5jb25zdCBleCA9IHtcbiAgICBpc0Rlc2t0b3AsXG4gICAgaXNUYWJsZXQsXG4gICAgaXNNb2JpbGUsXG4gICAgLy9taWNyb3NpdGVQYXRoOiBQQVRIX01JQ1JPU0lURSxcbiAgICBpbml0OiBpbml0LFxuICAgIGNzc0xvYWRlZDogZmFsc2UsXG4gICAgb25TdHlsZXNSZWFkeTogKCkgPT4gbnVsbFxufTtcblxuY29uc3QgY3NzTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbZGF0YS1taWNyb2Nzc10nKTtcbmlmKGNzc01haW4pe1xuICAgIC8vQ29tbWVudGVkIGZvciBjb21wYXRpYmlsaXR5IHdpdGggRmlyZWZveFxuICAgIC8vY3NzTWFpbi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAod2luZG93LnZmZXMgfHwgd2luZG93Ll92ZikuX3V0aWxzLmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgICBleC5jc3NMb2FkZWQgPSB0cnVlO1xuICAgICAgICBleC5vblN0eWxlc1JlYWR5KCk7XG4gICAgLy99KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhcbiJdLCJzb3VyY2VSb290IjoiIn0=