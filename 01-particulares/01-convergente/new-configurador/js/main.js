/**
 * Vodafone Reboot Framework: Version 15.7.0. Generation Date: 2020-04-16T08:51:41.265Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_common.js":
/*!******************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_common.js ***!
  \******************************************************************************************************/
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

/***/ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_configurator.js":
/*!************************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_configurator.js ***!
  \************************************************************************************************************/
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

/***/ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_creator.js":
/*!*******************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_creator.js ***!
  \*******************************************************************************************************/
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

/***/ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_modal.js":
/*!*****************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_modal.js ***!
  \*****************************************************************************************************/
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

/***/ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_price.js":
/*!*****************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_price.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wallmeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_wallmeric */ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_wallmeric.js");

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
  recalculate: content => {
    PRICE.calcContent(content);
    PRICE.calcTotal();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PRICE);

/***/ }),

/***/ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_scroll.js":
/*!******************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_scroll.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const configurator = document.querySelector('[data-vfms-js="_configurator"]');
const ticket = document.querySelector('[data-vfms-js="_ticket"]');
const mdd = document.querySelector(`.mdd-${window.matchMedia('(min-width: 970px)').matches ? 'desktop' : 'mobile'}`).lastElementChild;
const SCROLL = {
  init: () => {
    document.addEventListener('scroll', SCROLL.throttle(SCROLL.moveTicket, 100));
  },
  moveTicket: () => {
    let ticketPos = ticket.getBoundingClientRect();
    let mddPos = mdd.getBoundingClientRect();
    let configPos = configurator.getBoundingClientRect();

    if (configPos.top < mddPos.height && configPos.bottom - ticketPos.height / 2 > mddPos.height) {
      ticket.classList.add('fixed');
    } else {
      ticket.classList.remove('fixed');
    }
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

/***/ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_ticket.js":
/*!******************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_ticket.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ticket; });
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_creator */ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_creator.js");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_price */ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_price.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_modal */ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_modal.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_scroll */ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_scroll.js");
/* harmony import */ var _wallmeric__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_wallmeric */ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_wallmeric.js");





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
    ticketBlockContent: '.js-ticket-block-content',
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
    ticketBlockContent: 'js-ticket-block-content',
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
    });
    mod.addPromosToTicket();
    _price__WEBPACK_IMPORTED_MODULE_1__["default"].recalculate();
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

/***/ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_utils.js":
/*!*****************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_utils.js ***!
  \*****************************************************************************************************/
/*! exports provided: utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return utils; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_common */ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_common.js");
/* harmony import */ var _configurator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_configurator */ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_configurator.js");
/* harmony import */ var _ticket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_ticket */ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_ticket.js");



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

/***/ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_wallmeric.js":
/*!*********************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_wallmeric.js ***!
  \*********************************************************************************************************/
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

/***/ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/main.js":
/*!***************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/main.js ***!
  \***************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/tools.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_utils */ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/_utils.js");



_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onStylesReady = () => {
  console.log("Site visually ready");
  _utils__WEBPACK_IMPORTED_MODULE_1__["utils"].init(document);
  window.matchMedia('(min-width: 970px)').matches ? document.querySelector('.js-ticket-dropdown').click() : null;
};

_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onStylesReady();

/***/ }),

/***/ "../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/tools.js":
/*!****************************************************************************************************!*\
  !*** ../microsites-cbu/01-particulares/01-convergente/new-configurador/resources/scripts/tools.js ***!
  \****************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL21pY3Jvc2l0ZXMtY2J1LzAxLXBhcnRpY3VsYXJlcy8wMS1jb252ZXJnZW50ZS9uZXctY29uZmlndXJhZG9yL3Jlc291cmNlcy9zY3JpcHRzL19jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4uL21pY3Jvc2l0ZXMtY2J1LzAxLXBhcnRpY3VsYXJlcy8wMS1jb252ZXJnZW50ZS9uZXctY29uZmlndXJhZG9yL3Jlc291cmNlcy9zY3JpcHRzL19jb25maWd1cmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL21pY3Jvc2l0ZXMtY2J1LzAxLXBhcnRpY3VsYXJlcy8wMS1jb252ZXJnZW50ZS9uZXctY29uZmlndXJhZG9yL3Jlc291cmNlcy9zY3JpcHRzL19jcmVhdG9yLmpzIiwid2VicGFjazovLy8uLi9taWNyb3NpdGVzLWNidS8wMS1wYXJ0aWN1bGFyZXMvMDEtY29udmVyZ2VudGUvbmV3LWNvbmZpZ3VyYWRvci9yZXNvdXJjZXMvc2NyaXB0cy9fbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL21pY3Jvc2l0ZXMtY2J1LzAxLXBhcnRpY3VsYXJlcy8wMS1jb252ZXJnZW50ZS9uZXctY29uZmlndXJhZG9yL3Jlc291cmNlcy9zY3JpcHRzL19wcmljZS5qcyIsIndlYnBhY2s6Ly8vLi4vbWljcm9zaXRlcy1jYnUvMDEtcGFydGljdWxhcmVzLzAxLWNvbnZlcmdlbnRlL25ldy1jb25maWd1cmFkb3IvcmVzb3VyY2VzL3NjcmlwdHMvX3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi4vbWljcm9zaXRlcy1jYnUvMDEtcGFydGljdWxhcmVzLzAxLWNvbnZlcmdlbnRlL25ldy1jb25maWd1cmFkb3IvcmVzb3VyY2VzL3NjcmlwdHMvX3RpY2tldC5qcyIsIndlYnBhY2s6Ly8vLi4vbWljcm9zaXRlcy1jYnUvMDEtcGFydGljdWxhcmVzLzAxLWNvbnZlcmdlbnRlL25ldy1jb25maWd1cmFkb3IvcmVzb3VyY2VzL3NjcmlwdHMvX3V0aWxzLmpzIiwid2VicGFjazovLy8uLi9taWNyb3NpdGVzLWNidS8wMS1wYXJ0aWN1bGFyZXMvMDEtY29udmVyZ2VudGUvbmV3LWNvbmZpZ3VyYWRvci9yZXNvdXJjZXMvc2NyaXB0cy9fd2FsbG1lcmljLmpzIiwid2VicGFjazovLy8uLi9taWNyb3NpdGVzLWNidS8wMS1wYXJ0aWN1bGFyZXMvMDEtY29udmVyZ2VudGUvbmV3LWNvbmZpZ3VyYWRvci9yZXNvdXJjZXMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovLy8uLi9taWNyb3NpdGVzLWNidS8wMS1wYXJ0aWN1bGFyZXMvMDEtY29udmVyZ2VudGUvbmV3LWNvbmZpZ3VyYWRvci9yZXNvdXJjZXMvc2NyaXB0cy90b29scy5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0cyIsIiRlbGVtZW50IiwidW5kZWZpbmVkIiwic2VsZWN0b3JzIiwiYWNjb3JkaW9uIiwic2hvdyIsImhpZGUiLCJjbGFzc2VzIiwiQ29tbW9uIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwib25DaGFuZ2UiLCJFdmVudCIsImluaXQiLCJoYXNBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJtb2QiLCJmb3JFYWNoIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidXR0b24iLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiYWNjb3JkaW9uU2hvd0NvbnRlbnQiLCJhY2NvcmRpb25IaWRlQ29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhY2NvcmRpb25CaW5kIiwiYnV0dG9uT3BlbmVkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiYWRkZWQiLCJibG9jayIsImNvdW50ZXIiLCJjb3VudGVyTnVtIiwiZGVzY3JpcHRpb24iLCJlbGVtZW50IiwibGVzcyIsIm1vcmUiLCJwcmljZSIsInNpbmdsZSIsInRpY2tldCIsInRpdGxlIiwibWFpbiIsIkNvbmZpZ3VyYXRvciIsImNvbmZpZ3VyYXRvciIsImluZm8iLCJKU09OIiwicGFyc2UiLCJtYXhQb3MiLCJjb250YWluZXIiLCJhY3RpdmVDb3VudGVyIiwiYmluZCIsImFkZEJ1dHRvbnNIYW5kbGVyIiwicmVtb3ZlQnV0dG9uc0hhbmRsZXIiLCJ0aWNrZXRIYW5kbGVyIiwiYWRkQnV0dG9ucyIsIm1lc3NhZ2UiLCJjbG9zZXN0IiwiY29udGFpbnMiLCJ0b0xvd2VyQ2FzZSIsImlubmVyVGV4dCIsImlzTWFpbkVsZW1lbnQiLCJudW0iLCJkaXNwYXRjaEV2ZW50IiwicmVtb3ZlQnV0dG9ucyIsImRvY3VtZW50IiwiZXYiLCJpc01haW4iLCJkYWRkeSIsInJlc2V0Q29uZmlnIiwiZWwiLCJyZW1vdmVFbGVtZW50IiwiYWRkRWxlbWVudCIsInJlc2V0UmVscyIsImVuZW1pZXMiLCJsZW5ndGgiLCJpZCIsInRvUmVtb3ZlIiwibGVzc0J1dHRvbiIsIm1vcmVCdXR0b24iLCJudW1FbGVtZW50IiwiY291bnRlckFjdGlvbiIsIm9wZXJhdGlvbiIsImJ1dHRvbnMiLCJwYXJzZUludCIsImRpc2FibGVkIiwidG9BZGQiLCJyZXNldENvdW50ZXIiLCJhbGxFbHMiLCJhZGRCdXR0b24iLCJyZW1vdmVCdXR0b24iLCJzaG93RWxlbWVudCIsInNpbmdsZURhZGR5IiwiZWxlbWVudHMiLCJyZWxzIiwicmVsIiwic2VsZWN0b3IiLCJkZWZhdWx0QWRkZWQiLCJDUkVBVE9SIiwiY3JlYXRlSXRlbSIsImNvbmZpZyIsIm5ld0l0ZW0iLCJjcmVhdGVFbGVtZW50Iiwic2hvdWxkSGFzQnV0dG9uIiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwiaXNQcm9tbyIsImh0bWwiLCJsaXN0IiwiaXRlbSIsInRpY2tldEVsZW1lbnRDU1MiLCJ0aWNrZXRJdGVtSlMiLCJpbm5lckhUTUwiLCJjcmVhdGVCbG9jayIsImNvbnRlbnRCbG9jayIsImlkQ29udGVudCIsIm5ld0Jsb2NrIiwic3ZnIiwiY2FyZExpc3RDb250ZW50Q1NTIiwiY29sb3JCZ0xpZ2hHcmF5IiwidGlja2V0QmxvY2tDb250ZW50SlMiLCJjYXJkTGlzdENvbnRhaW5lckNTUyIsInRpY2tldEJsb2NrSlMiLCJtb2RhbCIsIm1vZGFsQ2xvc2UiLCJtb2RhbENvbmZpcm1BY2NlcHQiLCJtb2RhbENvbmZpcm1DYW5jZWwiLCJtb2RhbENvbnRlbnQiLCJtb2RhbEl0ZW0iLCJtb2RhbFNob3dDU1MiLCJtb2RhbEl0ZW1TaG93Q1NTIiwibW9kYWxDb25maXJtIiwiTU9EQUwiLCJjb25maXJtIiwicmVzb2x2ZSIsInJlamVjdCIsImNhbmNlbEJ1dHRvbiIsImFjY2VwdEJ1dHRvbiIsImNsb3NlQnV0dG9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsb3NlQ29uZmlybSIsIlBSSUNFIiwidHJhbnNmb3JtIiwicGFyc2VGbG9hdCIsInJlcGxhY2UiLCJ0b1N0cmluZyIsImNhbGNDb250ZW50IiwiY29udGVudCIsImNvbnRlbnRzIiwic3VtUGFydGlhbHNGcm9tQ29udGVudCIsInRpY2tldEJsb2NrIiwiaW5jbHVkZVRpY2tldFByb2R1Y3QiLCJzdW1QYXJ0aWFsUHJpY2VzIiwicGFydGlhbFByaWNlcyIsInRpY2tldEl0ZW0iLCJwYXJ0aWFsUHJpY2UiLCJ0b3RhbFByaWNlIiwiY2FsY1RvdGFsIiwidG90YWxQcmljZXMiLCJzdW1Ub3RhbFByaWNlcyIsImlzTmFOIiwiTWF0aCIsInJvdW5kIiwiaW5jbHVkZVZhbHVlSW5OYW1lU3BhY2UiLCJmaW5hbFByaWNlIiwicmVjYWxjdWxhdGUiLCJtZGQiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImxhc3RFbGVtZW50Q2hpbGQiLCJTQ1JPTEwiLCJ0aHJvdHRsZSIsIm1vdmVUaWNrZXQiLCJ0aWNrZXRQb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJtZGRQb3MiLCJjb25maWdQb3MiLCJ0b3AiLCJoZWlnaHQiLCJib3R0b20iLCJmdW5jIiwibGltaXQiLCJsYXN0RnVuYyIsImxhc3RSYW4iLCJjdHgiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJEYXRlIiwibm93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImlkcyIsInByb21vcyIsImJvZHkiLCJjb25maWdCbG9jayIsImNvbmZpZ0VsZW1lbnQiLCJjb25maWdJbml0aWFsUGF5IiwiY29uZmlnTWFpbiIsImRyb3Bkb3duIiwibGkiLCJvdmVybGF5IiwicXVhbnRpdHkiLCJ0aWNrZXRCbG9ja0NvbnRlbnQiLCJ0aWNrZXRDb250ZW50IiwidGlja2V0SW5pdGlhbFBheSIsInRpY2tldEl0ZW1UaXRsZSIsInRpY2tldExpbmsiLCJ0aWNrZXRCdXR0b24iLCJ0aWNrZXRDbG9zZUJ1dHRvbiIsInByb21vIiwiYXR0ciIsIlRpY2tldCIsInRpbWVQaWxlIiwiZWxlbWVudHNBZGRlZCIsImNvbmZpZ0Jsb2NrcyIsImFkZEJsb2NrVG9UaWNrZXQiLCJhZGRJdGVtVG9UaWNrZXQiLCJhZGRQcm9tb3NUb1RpY2tldCIsInR5cGUiLCJtYWluRWxlbWVudE1hbmFnZXIiLCJjb3VudGVyRWxlbWVudE1hbmFnZXIiLCJkZWZhdWx0RWxlbWVudE1hbmFnZXIiLCJjaGVja1RpY2tldENvbnRlbnQiLCJvdmVybGF5QWN0aW9uIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaGlkZUl0ZW0iLCJlbGVDb21wYSIsImNvbXBhdGliaWxpdGllcyIsImVuZW1pZXNBY3RpdmF0ZWQiLCJlbmVteSIsInB1c2giLCJ0ZXh0IiwiaXNBZGRlZCIsInBhcmVudEVsZW1lbnQiLCJibG9ja0NvbmZpZyIsImluaXRpYWxQYXkiLCJhcHBlbmRDaGlsZCIsImNsb3NlQnV0dG9uQ29udGVudCIsInRpY2tldEluaXRQYXkiLCJzaG93SXRlbSIsInJhdGUiLCJyYXRlQWN0aXZhdGVkIiwicHJvbW9Db3VudGVyIiwicHJvbW9CbG9jayIsImF1eCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJzaG93QmxvY2siLCJyZWNvdW50Q2hpbGRyZW4iLCJoaWRlQmxvY2siLCJjb3VudGVyQ2hpbGRyZW4iLCJnZXRFbGVtZW50QnlJZCIsIm5ld1ByaWNlIiwibmV3VGl0bGUiLCJuZXdEZXNjcmlwdGlvbiIsInRpY2tldE92ZXJsYXkiLCJ0aWNrZXRCb2R5IiwidGlja2V0RHJvcGRvd24iLCJjbGljayIsImNvbnRlbnRzQmxvY2tWaXNpYmxlIiwicmF0ZUFjdGl2ZSIsInJhdGVPYmplY3QiLCJjb3VudERpZmVyZW50SWRzIiwiY291bnRlclRydWVSZWxzIiwic2xpY2UiLCJjaGlsZHJlbiIsImNoaWxkIiwic2hvd1RpY2tldEJ1dHRvbiIsInNob3dUaWNrZXRMaW5rIiwiaHJlZiIsIm5ld0hyZWYiLCJsaW5rIiwiaWRUaWNrZXRJdGVtIiwiaXRlbUNvbmZpZyIsIlBBVEhfTUlDUk9TSVRFIiwiZ2xvYmFsTW9kdWxlcyIsIl9jb21tb24iLCJfY29uZmlndXJhdG9yIiwiX3RpY2tldCIsInV0aWxzIiwic2NvcGUiLCJtb2R1bGVzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibW9kdWxlc0F0dHIiLCJzcGxpdCIsImluc3RhbmNlIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjb21wYW55TmFtZSIsImtleSIsInZhbHVlIiwiaXNOYW1lc3BhY2VVbmRlZmluZWQiLCJyZWdpc3Rlck5hbWVzcGFjZSIsInNhdmVJbnRvTmFtZXNwYWNlIiwidGlja2V0TGlzdCIsImFyckNsYXNzIiwidmlzaWJsZUVscyIsImtleU9iamVjdCIsImluZGV4T2YiLCJzYXZlQ29udGVudEludG9OYW1lc3BhY2UiLCJ2ZmVzIiwidG9vbHMiLCJvblN0eWxlc1JlYWR5Iiwid2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImlzRGVza3RvcCIsImlzVGFibGV0IiwiaXNNb2JpbGUiLCJleCIsImNzc0xvYWRlZCIsImNzc01haW4iLCJfdmYiLCJfdXRpbHMiLCJyZW1vdmVBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7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OiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi4vbWljcm9zaXRlcy1jYnUvMDEtcGFydGljdWxhcmVzLzAxLWNvbnZlcmdlbnRlL25ldy1jb25maWd1cmFkb3IvcmVzb3VyY2VzL3NjcmlwdHMvbWFpbi5qc1wiKTtcbiIsImNvbnN0IGRlZmF1bHRzID0ge1xyXG4gICAgJGVsZW1lbnQ6IHVuZGVmaW5lZCxcclxuICAgIHNlbGVjdG9yczoge1xyXG4gICAgICAgIGFjY29yZGlvbjoge1xyXG4gICAgICAgICAgICBzaG93OiAnLmpzLWNvbW1vbi1hY2NvcmRpb24tc2hvdycsXHJcbiAgICAgICAgICAgIGhpZGU6ICcuanMtY29tbW9uLWFjY29yZGlvbi1oaWRlJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbGFzc2VzOiB7XHJcbiAgICAgICAgaGlkZTogJ2hpZGUnXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21tb24uXHJcbiAqXHJcbiAqIEBtb2R1bGUgQ29tbW9uXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIC0gc3BlY2lmaWVzIHRoZSBjb25maWd1cmF0aW9ucyBmb3IgdGhlIG1vZHVsZS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzID0ge30pIHtcclxuICAgICAgICB0aGlzLiRlbGVtZW50ID0gcHJvcGVydGllcy4kZWxlbWVudDtcclxuICAgICAgICB0aGlzLnNlbGVjdG9ycyA9IGRlZmF1bHRzLnNlbGVjdG9ycztcclxuICAgICAgICB0aGlzLmNsYXNzZXMgPSBkZWZhdWx0cy5jbGFzc2VzO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBuZXcgRXZlbnQoJ3ZmZXM6Y2hhbmdlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgbW9kdWxlLlxyXG4gICAgICpcclxuICAgICAqIEBmdW5jdGlvbiBpbml0XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBpZighdGhpcy4kZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtY29tbW9uLWZ1bmN0aW9uJykpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ0ZhbHRhIGVsIGF0cmlidXRvIFwiZGF0YS1jb21tb24tZnVuY3Rpb25cIiBlbiBlbCBlbGVtZW50by4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoKHRoaXMuJGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbW1vbi1mdW5jdGlvbicpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2FjY29yZGlvbic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY29yZGlvbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEFjY29yZGlvbiBtb2R1bGVcclxuICAgICAqXHJcbiAgICAgKiBAZnVuY3Rpb24gYWNjb3JkaW9uXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcclxuICAgICAqL1xyXG4gICAgYWNjb3JkaW9uKCkge1xyXG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXMuJGVsZW1lbnQ7XHJcblxyXG4gICAgICAgIFtdLmZvckVhY2guY2FsbChtb2QucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY29tbW9uLWFjY29yZGlvbj1cImJ1dHRvblwiXScpLCBidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBpZighYnV0dG9uLmhhc0F0dHJpYnV0ZSgnZGF0YS1pbml0aWFsaXplZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBpZighYnV0dG9uLmhhc0F0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ0FDQ09SRElPTiBFUlJPUiEgRWwgZWxlbWVudG8gbm8gdGllbmUgZWwgYXRyaWJ1dG8gXCJhcmlhLWNvbnRyb2xzXCIgY29uIGVsIGlkIGRlIHN1IGNvbnRlbmlkby4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZighbW9kLnF1ZXJ5U2VsZWN0b3IoYCMke2J1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKX1gKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGBBQ0NPUkRJT04gRVJST1IhIEVsIGVsZW1lbnRvIGN1eW8gaWQgZXMgJHttb2QuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyl9IG5vIGV4aXN0ZS5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKCFidXR0b24ucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5hY2NvcmRpb24uc2hvdykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBgQUNDT1JESU9OIEVSUk9SISBEZWJlIGluY2x1aXIgZW4gZWwgYm90w7NuIHVuIGVsZW1lbnRvIGNvbiBsYSBjbGFzZSAke3RoaXMuc2VsZWN0b3JzLmFjY29yZGlvbi5zaG93fSBwYXJhIGlkZW50aWZpY2FyIGVsIHRleHRvIGRlIGFwZXJ0dXJhYDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZighYnV0dG9uLnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuYWNjb3JkaW9uLmhpZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgYEFDQ09SRElPTiBFUlJPUiEgRGViZSBpbmNsdWlyIGVuIGVsIGJvdMOzbiB1biBlbGVtZW50byBjb24gbGEgY2xhc2UgJHt0aGlzLnNlbGVjdG9ycy5hY2NvcmRpb24uaGlkZX0gcGFyYSBpZGVudGlmaWNhciBlbCB0ZXh0byBkZSBjaWVycmVgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5pdGlhbGl6ZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmhhc0F0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID8gbnVsbCA6IGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjb3JkaW9uU2hvd0NvbnRlbnQoYnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvcmRpb25IaWRlQ29udGVudChidXR0b24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuYWNjb3JkaW9uQmluZChtb2QsIGJ1dHRvbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBY2NvcmRpb24gaGFuZGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAZnVuY3Rpb24gYWNjb3JkaW9uQmluZFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIGFjY29yZGlvbkJpbmQobW9kLCBidXR0b24pIHtcclxuICAgICAgICBsZXQgYnV0dG9uT3BlbmVkID0gbW9kLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbW1vbi1hY2NvcmRpb249XCJidXR0b25cIl1bYXJpYS1leHBhbmRlZD1cInRydWVcIl0nKTtcclxuXHJcbiAgICAgICAgYnV0dG9uT3BlbmVkICYmIGJ1dHRvbk9wZW5lZCAhPT0gYnV0dG9uID8gdGhpcy5hY2NvcmRpb25IaWRlQ29udGVudChidXR0b25PcGVuZWQpIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYoYnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgdGhpcy5hY2NvcmRpb25IaWRlQ29udGVudChidXR0b24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3JkaW9uU2hvd0NvbnRlbnQoYnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IGNvbnRlbnQgZnJvbSBhbiBpdGVtIGZyb20gYWNjb3JkaW9uLlxyXG4gICAgICpcclxuICAgICAqIEBmdW5jdGlvbiBhY2NvcmRpb25TaG93Q29udGVudFxyXG4gICAgICogQHBhcmFtIHsgSFRNTEVsZW1lbnQgfSBidXR0b24gLSBpdGVtIGZyb20gYWNjb3JkaW9uXHJcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBhY2NvcmRpb25TaG93Q29udGVudChidXR0b24pIHtcclxuICAgICAgICBidXR0b24ucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5hY2NvcmRpb24uaGlkZSkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuaGlkZSk7XHJcbiAgICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuYWNjb3JkaW9uLnNob3cpLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmhpZGUpO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpfWApLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuICAgICAgICB0aGlzLiRlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2J1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKX1gKS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5oaWRlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlIGNvbnRlbnQgZnJvbSBhbiBpdGVtIGZyb20gYWNjb3JkaW9uLlxyXG4gICAgICpcclxuICAgICAqIEBmdW5jdGlvbiBhY2NvcmRpb25IaWRlQ29udGVudFxyXG4gICAgICogQHBhcmFtIHsgSFRNTEVsZW1lbnQgfSBidXR0b24gLSBpdGVtIGZyb20gYWNjb3JkaW9uXHJcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBhY2NvcmRpb25IaWRlQ29udGVudChidXR0b24pIHtcclxuICAgICAgICBidXR0b24ucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5hY2NvcmRpb24uc2hvdykuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuaGlkZSk7XHJcbiAgICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuYWNjb3JkaW9uLmhpZGUpLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmhpZGUpO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcclxuICAgICAgICB0aGlzLiRlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2J1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKX1gKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgICAgICB0aGlzLiRlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2J1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKX1gKS5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5oaWRlKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcbiAqIEVsIGNvbmZpZ3VyYWRvciBwb3IgZGVudHJvIHRpZW5lIHRyZXMgdGlwb3MgZGUgY29tcG9uZW50ZXM6XG4gKiAgMS4gRWwgY29tcG9uZW50ZSBwcmluY2lwYWwgcXVlIGhhY2UgcXVlIHNlIG1vZGlmaXF1ZW4gZWwgcmVzdG8gZGUgZWxlbWVudG9zLlxuICogIDIuIEVsIGNvbXBvbmVudGUgcXVlIGVzIHVuIGVsZW1lbnRvIGVuIHNpIHF1ZSBzZSBhw7FhZGUgbyBzZSBxdWl0YSBkaXJlY3RhbWVudGUuXG4gKiAgMy4gRUwgY29tcG9uZW50ZSBjb3VudGVyIHF1ZSBlcyB1biBjb250YWRvciBkZSBlbGVtZW50b3MuXG4gKi9cblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgJGVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICBzZWxlY3RvcnM6IHtcbiAgICAgICAgYWRkOiAnLmpzLWNvbmZpZ3VyYXRvci1hZGQnLFxuICAgICAgICBhZGRlZDogJy5hZGRlZCcsXG4gICAgICAgIGJ1dHRvbjogJy5qcy1jYXJkLXNlbGVjdG9yLWJ1dHRvbicsXG4gICAgICAgIGJsb2NrOiAnLmpzLWNvbmZpZ3VyYXRvci1ibG9jaycsXG4gICAgICAgIGNvdW50ZXI6ICcuanMtY29uZmlndXJhdG9yLWNvdW50ZXInLFxuICAgICAgICBjb3VudGVyTnVtOiAnLmpzLWNvdW50ZXItbnVtJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcuanMtZGVzY3JpcHRpb24nLFxuICAgICAgICBlbGVtZW50OiAnLmpzLWNvbmZpZ3VyYXRvci1lbGVtZW50JyxcbiAgICAgICAgbGVzczogJy5qcy1jb3VudGVyLWxlc3MnLFxuICAgICAgICBtb3JlOiAnLmpzLWNvdW50ZXItbW9yZScsXG4gICAgICAgIHByaWNlOiAnLmpzLXByaWNlJyxcbiAgICAgICAgcmVtb3ZlOiAnLmpzLWNvbmZpZ3VyYXRvci1yZW1vdmUnLFxuICAgICAgICBzaW5nbGU6ICcuanMtY29uZmlndXJhdG9yLXNpbmdsZS12aWV3ZWQnLFxuICAgICAgICB0aWNrZXQ6ICcuanMtY29uZmlndXJhdG9yLXRpY2tldCcsXG4gICAgICAgIHRpdGxlOiAnLmpzLXRpdGxlJ1xuICAgIH0sXG4gICAgY2xhc3Nlczoge1xuICAgICAgICBhZGRlZDogJ2FkZGVkJyxcbiAgICAgICAgY291bnRlcjogJ2pzLWNvbmZpZ3VyYXRvci1jb3VudGVyJyxcbiAgICAgICAgaGlkZTogJ2hpZGUnLFxuICAgICAgICBhZGQ6ICdhZGQnLFxuICAgICAgICBtYWluOiAnanMtY29uZmlndXJhdG9yLW1haW4nXG4gICAgfVxufVxuXG4vKipcbiAqIENvbmZpZ3VyYXRvci5cbiAqXG4gKiBAbW9kdWxlIENvbmZpZ3VyYXRvclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgLSBzcGVjaWZpZXMgdGhlIGNvbmZpZ3VyYXRpb25zIGZvciB0aGUgbW9kdWxlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maWd1cmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMgPSB7fSkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRvciA9IHByb3BlcnRpZXMuJGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5mbyA9IEpTT04ucGFyc2UocHJvcGVydGllcy5pbmZvKTtcbiAgICAgICAgdGhpcy5zZWxlY3RvcnMgPSBkZWZhdWx0cy5zZWxlY3RvcnM7XG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IGRlZmF1bHRzLmNsYXNzZXM7XG4gICAgICAgIHRoaXMubWF4UG9zID0gMztcblxuICAgICAgICAvL0V2ZW50c1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IEV2ZW50KCd2Zm1zOmNoYW5nZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgdGhlIG1vZHVsZS5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvbiBpbml0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG5cbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG1vZC5jb25maWd1cmF0b3IucXVlcnlTZWxlY3RvckFsbChtb2Quc2VsZWN0b3JzLmNvdW50ZXIpLCBjb250YWluZXIgPT4ge1xuICAgICAgICAgICAgbW9kLmFjdGl2ZUNvdW50ZXIoY29udGFpbmVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbW9kLmJpbmQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY3RpdmUgYmFzaWMgZnVuY3Rpb25hbGl0eSBmcm9tIGNvbmZpZy5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvbiBiaW5kXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIGJpbmQoKSB7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uc0hhbmRsZXIoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVCdXR0b25zSGFuZGxlcigpO1xuICAgICAgICB0aGlzLnRpY2tldEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYnV0dG9ucyBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gYWRkQnV0dG9uc0hhbmRsZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgYWRkQnV0dG9uc0hhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbnMgPSBtb2QuY29uZmlndXJhdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoYCR7bW9kLnNlbGVjdG9ycy5lbGVtZW50fSAke21vZC5zZWxlY3RvcnMuYWRkfWApO1xuICAgICAgICBcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKGFkZEJ1dHRvbnMsIGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGJ1dHRvbi5jbG9zZXN0KG1vZC5zZWxlY3RvcnMuZWxlbWVudCk7XG5cbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMobW9kLnNlbGVjdG9ycy5ibG9jaykpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBIYXMgYcOxYWRpZG8gMSAkeyhKU09OLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbmZpZ3VyYXRvci1jb25maWcnKSkudGl0bGUpLnRvTG93ZXJDYXNlKCl9YDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEhhcyBhw7FhZGlkbyAke2VsZW1lbnQucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLnRpdGxlKS5pbm5lclRleHR9YDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtb2Qub25DaGFuZ2UuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLmJsb2NrID0gZWxlbWVudC5jbG9zZXN0KG1vZC5zZWxlY3RvcnMuYmxvY2spO1xuICAgICAgICAgICAgICAgIG1vZC5vbkNoYW5nZS5pc01haW5FbGVtZW50ID0gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMobW9kLmNsYXNzZXMubWFpbik7XG4gICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLm51bSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBtb2Qub25DaGFuZ2UubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG1vZC5vbkNoYW5nZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGJ1dHRvbnMgaGFuZGxlclxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIHJlbW92ZUJ1dHRvbnNIYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlbW92ZUJ1dHRvbnNIYW5kbGVyKCkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBjb25zdCByZW1vdmVCdXR0b25zID0gbW9kLmNvbmZpZ3VyYXRvci5xdWVyeVNlbGVjdG9yQWxsKGAke21vZC5zZWxlY3RvcnMuZWxlbWVudH0gJHttb2Quc2VsZWN0b3JzLnJlbW92ZX1gKTtcbiAgICAgICAgXG4gICAgICAgIFtdLmZvckVhY2guY2FsbChyZW1vdmVCdXR0b25zLCBidXR0b24gPT4ge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gYnV0dG9uLmNsb3Nlc3QobW9kLnNlbGVjdG9ycy5lbGVtZW50KTtcblxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhtb2Quc2VsZWN0b3JzLmJsb2NrKSkge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEhhcyBlbGltaW5hZG8gMSAkeyhKU09OLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbmZpZ3VyYXRvci1jb25maWcnKSkudGl0bGUpLnRvTG93ZXJDYXNlKCl9YDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEhhcyBlbGltaW5hZG8gJHtlbGVtZW50LnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy50aXRsZSkuaW5uZXJUZXh0fWA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIG1vZC5vbkNoYW5nZS5ibG9jayA9IGVsZW1lbnQuY2xvc2VzdChtb2Quc2VsZWN0b3JzLmJsb2NrKTtcbiAgICAgICAgICAgICAgICBtb2Qub25DaGFuZ2UuaXNNYWluRWxlbWVudCA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKG1vZC5jbGFzc2VzLm1haW4pO1xuICAgICAgICAgICAgICAgIG1vZC5vbkNoYW5nZS5udW0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChtb2Qub25DaGFuZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRpY2tldCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gdGlja2V0SGFuZGxlclxuICAgICAqXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICB0aWNrZXRIYW5kbGVyKCkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZmbXMtanM9XCJfdGlja2V0XCJdJykuYWRkRXZlbnRMaXN0ZW5lcigndmZtczpjaGFuZ2UnLCBldiA9PiB7XG4gICAgICAgICAgICBsZXQgaXNNYWluID0gZXYuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMobW9kLmNsYXNzZXMubWFpbik7XG5cbiAgICAgICAgICAgIGlmIChpc01haW4pIHtcbiAgICAgICAgICAgICAgICBsZXQgZGFkZHkgPSBldi5lbGVtZW50LmNsb3Nlc3QobW9kLnNlbGVjdG9ycy5ibG9jayk7XG5cbiAgICAgICAgICAgICAgICBtb2QucmVzZXRDb25maWcoKTtcblxuICAgICAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbChkYWRkeS5xdWVyeVNlbGVjdG9yQWxsKG1vZC5zZWxlY3RvcnMuZWxlbWVudCksIGVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbW9kLnJlbW92ZUVsZW1lbnQoZWwpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbW9kLmFkZEVsZW1lbnQoZXYuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgbW9kLnJlc2V0UmVscyhldi5lbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2LmVuZW1pZXMgJiYgZXYuZW5lbWllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LmVuZW1pZXMuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2QucmVtb3ZlRWxlbWVudChtb2QuY29uZmlndXJhdG9yLnF1ZXJ5U2VsZWN0b3IoJyMnICsgaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGV2LnRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZC5yZW1vdmVFbGVtZW50KGV2LmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZC5hZGRFbGVtZW50KGV2LmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNvdW50ZXIgZWxlbWVudHMgZnVuY3Rpb25hbGl0eVxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGFjdGl2ZUNvdW50ZXJcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgLSBjb3VudGVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIGFjdGl2ZUNvdW50ZXIoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG4gICAgICAgIGxldCBsZXNzQnV0dG9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5sZXNzKTtcbiAgICAgICAgbGV0IG1vcmVCdXR0b24gPSBjb250YWluZXIucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLm1vcmUpO1xuICAgICAgICBsZXQgbnVtRWxlbWVudCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMuY291bnRlck51bSk7XG5cbiAgICAgICAgbGVzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1vZC5jb3VudGVyQWN0aW9uKCdsZXNzJywgbnVtRWxlbWVudCwgY29udGFpbmVyLCB7XG4gICAgICAgICAgICAgICAgbGVzczogbGVzc0J1dHRvbixcbiAgICAgICAgICAgICAgICBtb3JlOiBtb3JlQnV0dG9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbW9yZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1vZC5jb3VudGVyQWN0aW9uKCdtb3JlJywgbnVtRWxlbWVudCwgY29udGFpbmVyLCB7XG4gICAgICAgICAgICAgICAgbGVzczogbGVzc0J1dHRvbixcbiAgICAgICAgICAgICAgICBtb3JlOiBtb3JlQnV0dG9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxpbmcgY291bnRlciBhY3Rpb25cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvbiBhY3RpdmVDb3VudGVyXG4gICAgICogXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wZXJhdGlvbiAtIGxlc3Mgb3IgbW9yZSBvcGVyYXRpb25cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBudW1FbGVtZW50IC0gY291bnRlciBudW0gSFRNTCBlbGVtZW50XG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gY291bnRlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBidXR0b25zIC0gT2JqZWN0IHdpdGggYnV0dG9ucyB0byBpbmNyZW1lbnQgYW5kIGRlY3JlYXNlIGNvdW50ZXIgbnVtYmVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIGNvdW50ZXJBY3Rpb24ob3BlcmF0aW9uLCBudW1FbGVtZW50LCBjb250YWluZXIsIGJ1dHRvbnMpIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcbiAgICAgICAgbGV0IG51bSA9IHBhcnNlSW50KG51bUVsZW1lbnQuaW5uZXJUZXh0KTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmFkZGVkKTtcblxuICAgICAgICBpZiAob3BlcmF0aW9uID09PSAnbGVzcycgJiYgbnVtID4gMCkge1xuICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLm51bSA9IG51bTtcblxuICAgICAgICAgICAgbnVtLS07XG4gICAgICAgICAgICBudW1FbGVtZW50LmlubmVyVGV4dCA9IG51bTtcbiAgICAgICAgICAgIGJ1dHRvbnMubW9yZS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgICAgIGJ1dHRvbnMubW9yZS5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBtb2Qub25DaGFuZ2UudG9BZGQgPSBmYWxzZTtcbiAgICAgICAgICAgIG1vZC5vbkNoYW5nZS5tZXNzYWdlID0gJ0hhcyBlbGltaW5hZG8gMSBsw61uZWEgYWRpY2lvbmFsJztcblxuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJ21vcmUnICYmIG51bSA8IHRoaXMubWF4UG9zKSB7XG5cbiAgICAgICAgICAgIG51bSsrO1xuICAgICAgICAgICAgbnVtRWxlbWVudC5pbm5lclRleHQgPSBudW07XG4gICAgICAgICAgICBidXR0b25zLmxlc3MuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgICAgICBidXR0b25zLmxlc3MuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLm51bSA9IG51bTtcbiAgICAgICAgICAgIG1vZC5vbkNoYW5nZS50b0FkZCA9IHRydWU7XG4gICAgICAgICAgICBtb2Qub25DaGFuZ2UubWVzc2FnZSA9ICdIYXMgYcOxYWRpZG8gMSBsw61uZWEgYWRpY2lvbmFsJztcbiAgICAgICAgfVxuXG4gICAgICAgIG1vZC5vbkNoYW5nZS5lbGVtZW50ID0gY29udGFpbmVyO1xuICAgICAgICBtb2Qub25DaGFuZ2UuYmxvY2sgPSBjb250YWluZXI7XG4gICAgICAgIG1vZC5vbkNoYW5nZS5pc01haW5FbGVtZW50ID0gZmFsc2U7XG4gICAgICAgIGNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KG1vZC5vbkNoYW5nZSk7XG5cbiAgICAgICAgaWYgKG51bSA8PSAwICYmICFidXR0b25zLmxlc3MuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5oaWRlKSkge1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmFkZGVkKTtcbiAgICAgICAgICAgIGJ1dHRvbnMubGVzcy5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgICAgIGJ1dHRvbnMubGVzcy5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgfSBlbHNlIGlmIChudW0gPj0gdGhpcy5tYXhQb3MgJiYgIWJ1dHRvbnMubW9yZS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmhpZGUpKSB7XG4gICAgICAgICAgICBidXR0b25zLm1vcmUuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgICAgICBidXR0b25zLm1vcmUuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNvdW50ZXIgdG8gaW5pdFxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIHJlc2V0Q291bnRlclxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvdW50ZXIgLSBjb3VudGVyIEhUTUwgZWxlbWVudFxuICAgICAqXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICByZXNldENvdW50ZXIoY291bnRlcikge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBjb25zdCBsZXNzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMubGVzcyk7XG4gICAgICAgIGNvbnN0IG1vcmUgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5tb3JlKTtcblxuICAgICAgICBjb3VudGVyLmNsYXNzTGlzdC5yZW1vdmUobW9kLmNsYXNzZXMuYWRkZWQpO1xuICAgICAgICBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5jb3VudGVyTnVtKS5pbm5lclRleHQgPSBcIjBcIjtcblxuICAgICAgICBsZXNzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgbGVzcy5jbGFzc0xpc3QuYWRkKG1vZC5jbGFzc2VzLmhpZGUpO1xuICAgICAgICBtb3JlLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIG1vcmUuY2xhc3NMaXN0LnJlbW92ZShtb2QuY2xhc3Nlcy5oaWRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYWxsIGNvbmZpZyBlbGVtZW50cyB0byBkZWZhdWx0XG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gcmVzZXRDb25maWdcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlc2V0Q29uZmlnKCkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBjb25zdCBhbGxFbHMgPSBtb2QuY29uZmlndXJhdG9yLnF1ZXJ5U2VsZWN0b3JBbGwobW9kLnNlbGVjdG9ycy5lbGVtZW50KTtcblxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoYWxsRWxzLCBlbCA9PiB7XG4gICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKG1vZC5jbGFzc2VzLmNvdW50ZXIpKSB7XG4gICAgICAgICAgICAgICAgbW9kLnJlc2V0Q291bnRlcihlbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vZC5yZW1vdmVFbGVtZW50KGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGFkZGVkIGNsYXNzZXMgZnJvbSBhbiBlbGVtZW50IFxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGFkZEVsZW1lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBlbGVtZW50IGZyb20gY29uZmlnXG4gICAgICogXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBhZGRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcbiAgICAgICAgbGV0IGFkZEJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLmFkZCk7XG4gICAgICAgIGxldCByZW1vdmVCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5yZW1vdmUpO1xuXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChtb2QuY2xhc3Nlcy5hZGRlZCk7XG5cbiAgICAgICAgaWYgKGFkZEJ1dHRvbikge1xuICAgICAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQobW9kLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgICAgICBhZGRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlbW92ZUJ1dHRvbikge1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUobW9kLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgICAgICByZW1vdmVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgZWxlbWVudFxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIHNob3dFbGVtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gZWxlbWVudCBmcm9tIGNvbmZpZ1xuICAgICAqIFxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgc2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBsZXQgc2luZ2xlRGFkZHkgPSBlbGVtZW50LmNsb3Nlc3QobW9kLnNlbGVjdG9ycy5zaW5nbGUpO1xuXG4gICAgICAgIGlmIChzaW5nbGVEYWRkeSkge1xuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKHNpbmdsZURhZGR5LnF1ZXJ5U2VsZWN0b3JBbGwobW9kLnNlbGVjdG9ycy5lbGVtZW50KSwgZWwgPT4ge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQobW9kLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgICAgICAgICAgbW9kLnJlbW92ZUVsZW1lbnQoZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmhpZGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gcmVtb3ZlRWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIGVsZW1lbnQgZnJvbSBjb25maWdcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBsZXQgYWRkQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmFkZCk7XG4gICAgICAgIGxldCByZW1vdmVCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMucmVtb3ZlKTtcblxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmFkZGVkKTtcblxuICAgICAgICBpZiAocmVtb3ZlQnV0dG9uKSB7XG4gICAgICAgICAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgICAgICByZW1vdmVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFkZEJ1dHRvbikge1xuICAgICAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmhpZGUpO1xuICAgICAgICAgICAgYWRkQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBvcHRpb25zIHJlbGF0aW9uYXRlZCB3aXRoIG1haW4gZWxlbWVudCBmcm9tIGNvbmZpZ1xuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIHJlc2V0UmVsc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIGVsZW1lbnQgZnJvbSBjb25maWdcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlc2V0UmVscyhlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG5cbiAgICAgICAgbW9kLmluZm8uZWxlbWVudHNbZWxlbWVudC5pZF0ucmVscy5mb3JFYWNoKHJlbCA9PiB7XG4gICAgICAgICAgICBpZiAocmVsLnNlbGVjdG9yICYmIHJlbC5zZWxlY3RvciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbCA9IG1vZC5jb25maWd1cmF0b3IucXVlcnlTZWxlY3RvcihgIyR7cmVsLnNlbGVjdG9yfWApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZC5zaG93RWxlbWVudChlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbC5kZWZhdWx0QWRkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZC5hZGRFbGVtZW50KGVsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgXCJzZWxlY3RvcnNcIjoge1xuICAgICAgICBcImxpXCI6IFwiLmpzLWxpXCIsXG4gICAgICAgIFwibnVtXCI6IFwiLmpzLWNvdW50ZXItbnVtXCIsXG4gICAgICAgIFwicHJpY2VcIjogXCIuanMtcHJpY2VcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIi5qcy10aXRsZVwiLFxuICAgIH0sXG4gICAgXCJjbGFzc2VzXCI6IHtcbiAgICAgICAgXCJjYXJkTGlzdENvbnRhaW5lckNTU1wiOiBcInZmZXMtY2FyZF9fbGlzdC1jb250YWluZXJcIixcbiAgICAgICAgXCJjYXJkTGlzdENvbnRlbnRDU1NcIjogXCJ2ZmVzLWNhcmRfX2xpc3QtY29udGVudFwiLFxuICAgICAgICBcImNvbG9yQmdMaWdoR3JheVwiOiBcInZmZXMtY29sb3Vycy1iZy1saWdodC1ncmF5XCIsXG4gICAgICAgIFwiaGlkZVwiOiBcImhpZGVcIixcbiAgICAgICAgXCJ0aWNrZXRCbG9ja0pTXCI6IFwianMtdGlja2V0LWJsb2NrXCIsXG4gICAgICAgIFwidGlja2V0QmxvY2tDb250ZW50SlNcIjogXCJqcy10aWNrZXQtYmxvY2stY29udGVudFwiLFxuICAgICAgICBcInRpY2tldEVsZW1lbnRDU1NcIjogXCJ2Zm1zLXRpY2tldF9fZWxlbWVudFwiLFxuICAgICAgICBcInRpY2tldEl0ZW1KU1wiOiBcImpzLXRpY2tldC1pdGVtXCIsXG4gICAgfVxufTtcblxuY29uc3QgQ1JFQVRPUiA9IHtcbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBhIHRpY2tldCdzIGl0ZW0gIFxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGNyZWF0ZUl0ZW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSBpdGVtIHByb3BlcnRpZXNcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtOiAoY29uZmlnLCBpbmZvKSA9PiB7XG4gICAgICAgIGxldCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBpZCA9IGB0aWNrZXQtaXRlbS0ke2NvbmZpZy5pZH0ke2NvbmZpZy5udW0gPyBjb25maWcubnVtIDogJyd9YDtcbiAgICAgICAgbGV0IHNob3VsZEhhc0J1dHRvbiA9IE9iamVjdC5rZXlzKGluZm8uZWxlbWVudHMpLmluY2x1ZGVzKGlkKSB8fCBjb25maWcuaXNQcm9tbyA/ICAnJyA6IGA8YnV0dG9uIGNsYXNzPVwianMtdGlja2V0LWNsb3NlXCI+PHN2ZyBjbGFzcz1cImljb25cIiB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB3aWR0aD0nMjRweCcgaGVpZ2h0PScyNHB4Jz48dGl0bGU+Q2xvc2U8L3RpdGxlPjx1c2UgY2xhc3M9XCJpY29uLXYzXCIgeGxpbms6aHJlZj0nI2ljb24zLWNsb3NlJz48L3VzZT48L3N2Zz48L2J1dHRvbj5gO1xuICAgICAgICBsZXQgaHRtbCA9IGA8ZGl2IGNsYXNzPVwidmZlcy1jYXJkX19saXN0LWNvbnRlbnQtdGl0bGUgdmZlcy1tMFwiPiR7c2hvdWxkSGFzQnV0dG9ufTxwIGNsYXNzPVwidmZlcy1wYXJhZ3JhcGggdmZlcy1mbGV4LTEganMtdGlja2V0LWl0ZW0tdGl0bGVcIj4ke2NvbmZpZy5kZXNjcmlwdGlvbiA/IGNvbmZpZy5kZXNjcmlwdGlvbiA6IGNvbmZpZy50aXRsZX08L3A+JHtjb25maWcucHJpY2UgPyBgPHAgY2xhc3M9XCJ2ZmVzLXBhcmFncmFwaCB2ZmVzLWNhcmRfX2xpc3Qtc3Bhbi1wcmljZSBqcy10aWNrZXQtcGFydGlhbC1wcmljZVwiPiR7Y29uZmlnLnByaWNlfS9tZXM8L3A+PC9kaXY+YCA6ICcnfWA7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5saXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGh0bWwgKz0gJzx1bCBjbGFzcz1cInZmZXMtY2FyZF9fbGlzdC1saXN0XCI+JztcblxuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGNvbmZpZy5saXN0LCBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+LSAke2l0ZW0uaW5uZXJUZXh0fTwvbGk+YDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBodG1sICs9ICc8L3VsPic7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdJdGVtLmNsYXNzTGlzdC5hZGQoZGVmYXVsdHMuY2xhc3Nlcy50aWNrZXRFbGVtZW50Q1NTKTtcbiAgICAgICAgbmV3SXRlbS5jbGFzc0xpc3QuYWRkKGRlZmF1bHRzLmNsYXNzZXMudGlja2V0SXRlbUpTKTtcbiAgICAgICAgbmV3SXRlbS5pZCA9IGlkO1xuICAgICAgICBuZXdJdGVtLmlubmVySFRNTCA9IGh0bWw7XG5cbiAgICAgICAgcmV0dXJuIG5ld0l0ZW07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGEgdGlja2V0J3MgYmxvY2sgIFxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGNyZWF0ZUJsb2NrXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gYmxvY2sgcHJvcGVydGllc1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBjcmVhdGVCbG9jazogY29uZmlnID0+IHtcbiAgICAgICAgbGV0IGNvbnRlbnRCbG9jaywgaWRDb250ZW50O1xuICAgICAgICBsZXQgbmV3QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGh0bWwgPSBgPHN2ZyBjbGFzcz1cImljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNDBweFwiPjx0aXRsZT5Nb2JpbGU8L3RpdGxlPjx1c2UgY2xhc3M9XCJpY29uLXYzXCIgeGxpbms6aHJlZj1cIiMke2NvbmZpZy5zdmd9XCI+PC91c2U+PC9zdmc+PGRpdiBjbGFzcz1cInZmZXMtY2FyZF9fbGlzdC1wYXJhZ3JhcGhzXCI+PHAgY2xhc3M9XCJ2ZmVzLXBhcmFncmFwaFwiPjxzcGFuIGNsYXNzPVwianMtdGlja2V0LXF1YW50aXR5XCI+MTwvc3Bhbj4gJHtjb25maWcudGl0bGV9PC9wPmA7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5idXR0b24pIHtcbiAgICAgICAgICAgIGlkQ29udGVudCA9ICdhY2NvcmRpb24tJyArIGNvbmZpZy5pZDtcblxuICAgICAgICAgICAgaHRtbCArPSBgPGJ1dHRvbiBjbGFzcz1cInZmZXMtY2FyZF9fbGlzdC1idXR0b25cIiBkYXRhLWNvbW1vbi1hY2NvcmRpb249XCJidXR0b25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiJHtpZENvbnRlbnR9XCI+PHNwYW4gY2xhc3M9XCJ2ZmVzLXBhcmFncmFwaCBqcy1jb21tb24tYWNjb3JkaW9uLXNob3dcIj5Nw6FzIGluZm8gPHN2ZyBjbGFzcz1cImljb24gdmZlcy1pY29uX19idXR0b25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIxNnB4XCIgaGVpZ2h0PVwiMTZweFwiPjx0aXRsZT5UaWNrPC90aXRsZT48dXNlIGNsYXNzPVwiaWNvbi12M1wiIHhsaW5rOmhyZWY9XCIjaWNvbjMtY2hldnJvbi1kb3duXCI+PC91c2U+PC9zdmc+PC9zcGFuPjxzcGFuIGNsYXNzPVwidmZlcy1wYXJhZ3JhcGgganMtY29tbW9uLWFjY29yZGlvbi1oaWRlXCI+TWVub3MgaW5mbyA8c3ZnIGNsYXNzPVwiaWNvbiB2ZmVzLWljb25fX2J1dHRvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjE2cHhcIiBoZWlnaHQ9XCIxNnB4XCI+PHRpdGxlPlRpY2s8L3RpdGxlPjx1c2UgY2xhc3M9XCJpY29uLXYzXCIgeGxpbms6aHJlZj1cIiNpY29uMy1jaGV2cm9uLXVwXCI+PC91c2U+PC9zdmc+PC9zcGFuPjwvYnV0dG9uPmA7XG5cbiAgICAgICAgICAgIGNvbnRlbnRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGVudEJsb2NrLmlkID0gaWRDb250ZW50O1xuICAgICAgICAgICAgY29udGVudEJsb2NrLmNsYXNzTGlzdC5hZGQoZGVmYXVsdHMuY2xhc3Nlcy5jYXJkTGlzdENvbnRlbnRDU1MpO1xuICAgICAgICAgICAgY29udGVudEJsb2NrLmNsYXNzTGlzdC5hZGQoZGVmYXVsdHMuY2xhc3Nlcy5jb2xvckJnTGlnaEdyYXkpO1xuICAgICAgICAgICAgY29udGVudEJsb2NrLmNsYXNzTGlzdC5hZGQoZGVmYXVsdHMuY2xhc3Nlcy50aWNrZXRCbG9ja0NvbnRlbnRKUyk7XG4gICAgICAgICAgICBjb250ZW50QmxvY2suY2xhc3NMaXN0LmFkZChkZWZhdWx0cy5jbGFzc2VzLmhpZGUpO1xuICAgICAgICAgICAgY29udGVudEJsb2NrLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGh0bWwgKz0gYDwvZGl2PjxwIGNsYXNzPVwidmZlcy1wYXJhZ3JhcGggdmZlcy1jYXJkX19saXN0LXByaWNlXCI+PHN0cm9uZyBjbGFzcz1cImpzLXRpY2tldC10b3RhbC1wcmljZVwiPjwvc3Ryb25nPjwvcD5gO1xuXG4gICAgICAgIG5ld0Jsb2NrLmNsYXNzTGlzdC5hZGQoZGVmYXVsdHMuY2xhc3Nlcy5jYXJkTGlzdENvbnRhaW5lckNTUyk7XG4gICAgICAgIG5ld0Jsb2NrLmNsYXNzTGlzdC5hZGQoZGVmYXVsdHMuY2xhc3Nlcy50aWNrZXRCbG9ja0pTKTtcbiAgICAgICAgbmV3QmxvY2suY2xhc3NMaXN0LmFkZChkZWZhdWx0cy5jbGFzc2VzLmhpZGUpO1xuICAgICAgICBuZXdCbG9jay5pZCA9IGNvbmZpZy5pZDtcbiAgICAgICAgbmV3QmxvY2suaW5uZXJIVE1MID0gaHRtbDtcblxuICAgICAgICByZXR1cm4ge25ld0Jsb2NrLCBjb250ZW50QmxvY2t9O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENSRUFUT1I7XG4iLCJjb25zdCBkZWZhdWx0cyA9IHtcbiAgICBzZWxlY3RvcnM6IHtcbiAgICAgICAgbW9kYWw6ICcuanMtbW9kYWwnLFxuICAgICAgICBtb2RhbENsb3NlOiAnLmpzLW1vZGFsLWNsb3NlJyxcbiAgICAgICAgbW9kYWxDb25maXJtQWNjZXB0OiAnLmpzLW1vZGFsLWNvbmZpcm0tYWNjZXB0JyxcbiAgICAgICAgbW9kYWxDb25maXJtQ2FuY2VsOiAnLmpzLW1vZGFsLWNvbmZpcm0tY2FuY2VsJyxcbiAgICAgICAgbW9kYWxDb250ZW50OiAnLmpzLW1vZGFsLWNvbnRlbnQnLFxuICAgICAgICBtb2RhbEl0ZW06ICcuanMtbW9kYWwtaXRlbScsXG4gICAgfSxcbiAgICBjbGFzc2VzOiB7XG4gICAgICAgIG1vZGFsU2hvd0NTUzogJ3ZmZXMtbW9kYWwtLXNob3cnLFxuICAgICAgICBtb2RhbEl0ZW1TaG93Q1NTOiAndmZlcy1tb2RhbF9faXRlbS0tc2hvdycsXG4gICAgfVxufVxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRlZmF1bHRzLnNlbGVjdG9ycy5tb2RhbCk7XG5jb25zdCBtb2RhbENvbmZpcm0gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtY29uZmlybScpO1xuXG5jb25zdCBNT0RBTCA9IHtcblxuICAgIC8qKlxuICAgICAqIE9wZW4gbW9kYWwuIFxuICAgICAqIFxuICAgICAqIEBmdW5jdGlvbiBzaG93XG4gICAgICogXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkIC0gbW9kYWwgaWQgXG4gICAgICovXG4gICAgc2hvdzogaWQgPT4ge1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKGRlZmF1bHRzLmNsYXNzZXMubW9kYWxTaG93Q1NTKTtcbiAgICAgICAgbW9kYWwucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkuY2xhc3NMaXN0LmFkZChkZWZhdWx0cy5jbGFzc2VzLm1vZGFsSXRlbVNob3dDU1MpO1xuICAgIH0sXG4gICAgXG4gICAgLyoqXG4gICAgICogSGlkZSBtb2QubW9kYWwuIFxuICAgICAqIFxuICAgICAqIEBmdW5jdGlvbiBoaWRlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkIC0gbW9kYWwgaWRcbiAgICAgKi9cbiAgICBoaWRlOiBpZCA9PiB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoZGVmYXVsdHMuY2xhc3Nlcy5tb2RhbFNob3dDU1MpO1xuICAgICAgICBtb2RhbC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKS5jbGFzc0xpc3QucmVtb3ZlKGRlZmF1bHRzLmNsYXNzZXMubW9kYWxJdGVtU2hvd0NTUyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IGNvbmZpcm0gZXZlbnRzIHRvIG1vZGFsXG4gICAgICogXG4gICAgICogQGZ1bmN0aW9uIGNvbmZpcm1Nb2RhbFxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIGNvbmZpcm0obWVzc2FnZSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxldCBjYW5jZWxCdXR0b24sIGFjY2VwdEJ1dHRvbjtcbiAgICAgICAgbGV0IGNsb3NlQnV0dG9uID0gbW9kYWxDb25maXJtLnF1ZXJ5U2VsZWN0b3IoZGVmYXVsdHMuc2VsZWN0b3JzLm1vZGFsQ2xvc2UpO1xuICAgICAgICBcbiAgICAgICAgY2xvc2VCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBNT0RBTC5jbG9zZUNvbmZpcm0pO1xuICAgICAgICBcbiAgICAgICAgbW9kYWxDb25maXJtLnF1ZXJ5U2VsZWN0b3IoZGVmYXVsdHMuc2VsZWN0b3JzLm1vZGFsQ29udGVudCkuaW5uZXJIVE1MID0gYCR7bWVzc2FnZX08YnV0dG9uIGNsYXNzPVwidmZlcy1idXR0b24gdmZlcy1idXR0b24tLXByaW1hcnkganMtbW9kYWwtY29uZmlybS1hY2NlcHRcIj5BY2VwdGFyPC9idXR0b24+PGJ1dHRvbiBjbGFzcz1cInZmZXMtYnV0dG9uIHZmZXMtYnV0dG9uLS1zZWNvbmRhcnkganMtbW9kYWwtY29uZmlybS1jYW5jZWxcIj5DYW5jZWxhcjwvYnV0dG9uPmA7XG5cbiAgICAgICAgYWNjZXB0QnV0dG9uID0gbW9kYWxDb25maXJtLnF1ZXJ5U2VsZWN0b3IoZGVmYXVsdHMuc2VsZWN0b3JzLm1vZGFsQ29uZmlybUFjY2VwdCk7XG4gICAgICAgIGNhbmNlbEJ1dHRvbiA9IG1vZGFsQ29uZmlybS5xdWVyeVNlbGVjdG9yKGRlZmF1bHRzLnNlbGVjdG9ycy5tb2RhbENvbmZpcm1DYW5jZWwpO1xuICAgICAgICBcbiAgICAgICAgTU9EQUwuc2hvdygnbW9kYWwtY29uZmlybScpO1xuXG4gICAgICAgIGFjY2VwdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgTU9EQUwuaGlkZSgnbW9kYWwtY29uZmlybScpOyByZXNvbHZlKCkgfSk7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgTU9EQUwuaGlkZSgnbW9kYWwtY29uZmlybScpOyByZWplY3QoKSB9KTtcbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IE1PREFMLmhpZGUoJ21vZGFsLWNvbmZpcm0nKTsgcmVqZWN0KCkgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNT0RBTDsiLCJpbXBvcnQge2luY2x1ZGVUaWNrZXRQcm9kdWN0LCBpbmNsdWRlVmFsdWVJbk5hbWVTcGFjZX0gZnJvbSBcIi4vX3dhbGxtZXJpY1wiO1xuXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgICBcInNlbGVjdG9yc1wiOiB7XG4gICAgICAgIFwiY29udGVudFwiOiBcIi5qcy10aWNrZXQtYmxvY2stY29udGVudFwiLFxuICAgICAgICBcImZpbmFsUHJpY2VcIjogXCIuanMtdGlja2V0LWZpbmFsLXByaWNlXCIsXG4gICAgICAgIFwicGFydGlhbFByaWNlXCI6IFwiLmpzLXRpY2tldC1wYXJ0aWFsLXByaWNlXCIsXG4gICAgICAgIFwidGlja2V0QmxvY2tcIjogXCIuanMtdGlja2V0LWJsb2NrXCIsXG4gICAgICAgIFwidGlja2V0SXRlbVwiOiBcIi5qcy10aWNrZXQtaXRlbVwiLFxuICAgICAgICBcInRvdGFsUHJpY2VcIjogXCIuanMtdGlja2V0LXRvdGFsLXByaWNlXCIsXG4gICAgICAgIFwicXVhbnRpdHlcIjogXCIuanMtdGlja2V0LXF1YW50aXR5XCJcbiAgICB9LFxuICAgIFwiY2xhc3Nlc1wiOiB7XG4gICAgICAgIFwiaGlkZVwiOiBcImhpZGVcIlxuICAgIH1cbn07XG5cbmNvbnN0IHRpY2tldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZmbXMtanM9XCJfdGlja2V0XCJdJyk7XG5cbmNvbnN0IFBSSUNFID0ge1xuICAgIC8qKlxuICAgICAqIFRyYW5mb3JtIGdpdmVuIHByaWNlIGluIGEgc3RyaW5nIG9yIG51bWJlci5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvbiB0cmFuc2Zvcm1QcmljZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7U3RyaW5nIHwgTnVtYmVyfSBwcmljZSAtIHByaWNlIHRvIGNoYW5nZSB0eXBlIHRvIHdvcmsgd2l0aCBpdC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmcgfCBOdW1iZXJ9IHR5cGUgb2YgcmV0dXJuIHZhbHVlIGRlcGVuZHMgb2YgcGFyYW0gZ2l2ZW4uXG4gICAgICovXG4gICAgdHJhbnNmb3JtOiBwcmljZSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgcHJpY2UgPT09ICdzdHJpbmcnID8gcGFyc2VGbG9hdChwcmljZS5yZXBsYWNlKCcsJywgJy4nKSkgOiBwcmljZS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnLCcpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaG9vc2UgaWYgd2Ugd2FudCB0byBjYWxjdWxhdGUgcHJpY2UgZnJvbSBhIHNwZWNmaWZpYyBjb250ZW50IG9yIGZyb20gYWxsIGNvbnRlbnRzIGZyb20gdGlja2V0LlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGNhbGN1bGF0ZUNvbnRlbnRQcmljZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnQgLSBOb24gcmVxdWlyZWQgcGFyYW0uIENvbnRlbnQgd2hlcmUgdG8gY2FsY3VsYXRlIHByaWNlLiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgY2FsY0NvbnRlbnQ6IChjb250ZW50ID0gbnVsbCkgPT4ge1xuICAgICAgICBsZXQgY29udGVudHM7XG5cbiAgICAgICAgaWYoY29udGVudCkge1xuICAgICAgICAgICAgUFJJQ0Uuc3VtUGFydGlhbHNGcm9tQ29udGVudChjb250ZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRlbnRzID0gdGlja2V0LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7ZGVmYXVsdHMuc2VsZWN0b3JzLnRpY2tldEJsb2NrfTpub3QoLiR7ZGVmYXVsdHMuY2xhc3Nlcy5oaWRlfSkgKyAke2RlZmF1bHRzLnNlbGVjdG9ycy5jb250ZW50fWApO1xuICAgICAgICBpbmNsdWRlVGlja2V0UHJvZHVjdCgnd2FsbG1lcmljJywgY29udGVudHMpO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoY29udGVudHMsIGNvbnRlbnQgPT4ge1xuICAgICAgICAgICAgUFJJQ0Uuc3VtUGFydGlhbHNGcm9tQ29udGVudChjb250ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3VtIHBhcnRpYWwgcHJpY2VzIGZyb20gYSBjb250ZW50LlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIHN1bVBhcnRpYWxQcmljZXNGcm9tQ29udGVudFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnQgLSBDb250ZW50IHdoZXJlIHRvIHN1bSBwcmljZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHN1bVBhcnRpYWxzRnJvbUNvbnRlbnQ6IGNvbnRlbnQgPT4ge1xuICAgICAgICBsZXQgc3VtUGFydGlhbFByaWNlcyA9IDA7XG4gICAgICAgIGxldCBwYXJ0aWFsUHJpY2VzID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKGAke2RlZmF1bHRzLnNlbGVjdG9ycy50aWNrZXRJdGVtfTpub3QoLiR7ZGVmYXVsdHMuY2xhc3Nlcy5oaWRlfSkgJHtkZWZhdWx0cy5zZWxlY3RvcnMucGFydGlhbFByaWNlfWApO1xuXG4gICAgICAgIGlmKHBhcnRpYWxQcmljZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKHBhcnRpYWxQcmljZXMsIHByaWNlID0+IHtcbiAgICAgICAgICAgICAgICBzdW1QYXJ0aWFsUHJpY2VzICs9IFBSSUNFLnRyYW5zZm9ybShwcmljZS5pbm5lclRleHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdW1QYXJ0aWFsUHJpY2VzID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBibG9jayA9IHRpY2tldC5xdWVyeVNlbGVjdG9yKGBbYXJpYS1jb250cm9scz1cIiR7Y29udGVudC5pZH1cIl1gKTtcblxuICAgICAgICBpZihibG9jaykge1xuICAgICAgICAgICAgYmxvY2sgPSBibG9jay5jbG9zZXN0KGRlZmF1bHRzLnNlbGVjdG9ycy50aWNrZXRCbG9jayk7XG4gICAgICAgICAgICBibG9jay5xdWVyeVNlbGVjdG9yKGRlZmF1bHRzLnNlbGVjdG9ycy50b3RhbFByaWNlKS5pbm5lclRleHQgPSBzdW1QYXJ0aWFsUHJpY2VzID09PSBudWxsID8gJycgOiBQUklDRS50cmFuc2Zvcm0oc3VtUGFydGlhbFByaWNlcykgKyAn4oKsL21lcyc7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHRvdGFsIHByaWNlIGZyb20gdGlja2V0XG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gY2FsY3VsYXRlVG90YWxQcmljZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgY2FsY1RvdGFsOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvdGFsUHJpY2VzID0gdGlja2V0LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7ZGVmYXVsdHMuc2VsZWN0b3JzLnRpY2tldEJsb2NrfTpub3QoLiR7ZGVmYXVsdHMuY2xhc3Nlcy5oaWRlfSkgJHtkZWZhdWx0cy5zZWxlY3RvcnMudG90YWxQcmljZX1gKTtcbiAgICAgICAgbGV0IHN1bVRvdGFsUHJpY2VzID0gMDtcblxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwodG90YWxQcmljZXMsIHByaWNlID0+IHtcbiAgICAgICAgICAgICFpc05hTihwYXJzZUZsb2F0KHByaWNlLmlubmVyVGV4dCkpID8gc3VtVG90YWxQcmljZXMgKz0gUFJJQ0UudHJhbnNmb3JtKHByaWNlLmlubmVyVGV4dCkgOiBudWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdW1Ub3RhbFByaWNlcyA9IE1hdGgucm91bmQoc3VtVG90YWxQcmljZXMgKiAxMDApIC8gMTAwO1xuXG4gICAgICAgIGluY2x1ZGVWYWx1ZUluTmFtZVNwYWNlKCd3YWxsbWVyaWMnLCAndG90YWxQcmljZScsIFBSSUNFLnRyYW5zZm9ybShzdW1Ub3RhbFByaWNlcykgKyAn4oKsL21lcycpO1xuXG4gICAgICAgIHRpY2tldC5xdWVyeVNlbGVjdG9yKGRlZmF1bHRzLnNlbGVjdG9ycy5maW5hbFByaWNlKS5pbm5lclRleHQgPSBQUklDRS50cmFuc2Zvcm0oc3VtVG90YWxQcmljZXMpICsgJ+KCrC9tZXMnO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWNhbGN1bGF0ZSB0b3RhbCB0aWNrZXQgcHJpY2UgaW5jbHVkaW5nIGNvbnRlbnRzIHByaWNlc1xuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIHJlY2FsY3VsYXRlUHJpY2VcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlY2FsY3VsYXRlOiBjb250ZW50ID0+IHtcbiAgICAgICAgUFJJQ0UuY2FsY0NvbnRlbnQoY29udGVudCk7XG4gICAgICAgIFBSSUNFLmNhbGNUb3RhbCgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBSSUNFO1xuIiwiY29uc3QgY29uZmlndXJhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmZtcy1qcz1cIl9jb25maWd1cmF0b3JcIl0nKTtcbmNvbnN0IHRpY2tldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZmbXMtanM9XCJfdGlja2V0XCJdJyk7XG5jb25zdCBtZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubWRkLSR7d2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDk3MHB4KScpLm1hdGNoZXMgPyAnZGVza3RvcCcgOiAnbW9iaWxlJ31gKS5sYXN0RWxlbWVudENoaWxkO1xuXG5jb25zdCBTQ1JPTEwgPSB7XG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBTQ1JPTEwudGhyb3R0bGUoU0NST0xMLm1vdmVUaWNrZXQsIDEwMCkpO1xuICAgIH0sXG4gICAgXG4gICAgbW92ZVRpY2tldDogKCkgPT4ge1xuICAgICAgICBsZXQgdGlja2V0UG9zID0gdGlja2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBsZXQgbWRkUG9zID0gbWRkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBsZXQgY29uZmlnUG9zID0gY29uZmlndXJhdG9yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBcbiAgICAgICAgaWYoY29uZmlnUG9zLnRvcCA8IG1kZFBvcy5oZWlnaHQgJiYgKGNvbmZpZ1Bvcy5ib3R0b20gLSAodGlja2V0UG9zLmhlaWdodCAvIDIpKSA+IG1kZFBvcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRpY2tldC5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGlja2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdGhyb3R0bGU6IChmdW5jLCBsaW1pdCkgPT4ge1xuICAgICAgICBsZXQgbGFzdEZ1bmMsIGxhc3RSYW47XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgICAgIGlmICghbGFzdFJhbikge1xuICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY3R4LCBhcmdzKTtcbiAgICAgICAgICAgICAgICBsYXN0UmFuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGxhc3RGdW5jKTtcbiAgICAgICAgICAgICAgICBsYXN0RnVuYyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKERhdGUubm93KCkgLSBsYXN0UmFuKSA+PSBsaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuYy5hcHBseShjdHgsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFJhbiA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBsaW1pdCAtIChEYXRlLm5vdygpIC0gbGFzdFJhbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTQ1JPTEw7IiwiaW1wb3J0IENSRUFUT1IgZnJvbSAnLi9fY3JlYXRvcic7XG5pbXBvcnQgUFJJQ0UgZnJvbSAnLi9fcHJpY2UnO1xuaW1wb3J0IE1PREFMIGZyb20gJy4vX21vZGFsJztcbmltcG9ydCBTQ1JPTEwgZnJvbSAnLi9fc2Nyb2xsJztcbmltcG9ydCB7IGluY2x1ZGVWYWx1ZUluTmFtZVNwYWNlIH0gZnJvbSAnLi9fd2FsbG1lcmljJztcblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgJGVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICBpZHM6IHtcbiAgICAgICAgcHJvbW9zOiAndGlja2V0LXByb21vcycsXG4gICAgICAgIGl0ZW06ICd0aWNrZXQtaXRlbSdcbiAgICB9LFxuICAgIHNlbGVjdG9yczoge1xuICAgICAgICBhZGRlZDogJy5hZGRlZCcsXG4gICAgICAgIGJvZHk6ICcuanMtdGlja2V0LWJvZHknLFxuICAgICAgICBjb25maWdCbG9jazogJy5qcy1jb25maWd1cmF0b3ItYmxvY2snLFxuICAgICAgICBjb25maWdFbGVtZW50OiAnLmpzLWNvbmZpZ3VyYXRvci1lbGVtZW50JyxcbiAgICAgICAgY29uZmlnSW5pdGlhbFBheTogJy5qcy1pbml0aWFsLXBheScsXG4gICAgICAgIGNvbmZpZ01haW46ICcuanMtY29uZmlndXJhdG9yLW1haW4nLFxuICAgICAgICBjb250ZW50OiAnLmpzLXRpY2tldC1jb250ZW50JyxcbiAgICAgICAgZHJvcGRvd246ICcuanMtdGlja2V0LWRyb3Bkb3duJyxcbiAgICAgICAgbGk6ICcuanMtbGknLFxuICAgICAgICBudW06ICcuanMtY291bnRlci1udW0nLFxuICAgICAgICBvdmVybGF5OiAnLmpzLXRpY2tldC1vdmVybGF5JyxcbiAgICAgICAgcGFydGlhbFByaWNlOiAnLmpzLXRpY2tldC1wYXJ0aWFsLXByaWNlJyxcbiAgICAgICAgcHJpY2U6ICcuanMtcHJpY2UnLFxuICAgICAgICBxdWFudGl0eTogJy5qcy10aWNrZXQtcXVhbnRpdHknLFxuICAgICAgICB0aWNrZXRCbG9jazogJy5qcy10aWNrZXQtYmxvY2snLFxuICAgICAgICB0aWNrZXRCbG9ja0NvbnRlbnQ6ICcuanMtdGlja2V0LWJsb2NrLWNvbnRlbnQnLFxuICAgICAgICB0aWNrZXRDb250ZW50OiAnLmpzLXRpY2tldC1jb250ZW50LWJveCcsXG4gICAgICAgIHRpY2tldEluaXRpYWxQYXk6ICcuanMtdGlja2V0LWluaXRpYWwtcGF5JyxcbiAgICAgICAgdGlja2V0SXRlbTogJy5qcy10aWNrZXQtaXRlbScsXG4gICAgICAgIHRpY2tldEl0ZW1UaXRsZTogJy5qcy10aWNrZXQtaXRlbS10aXRsZScsXG4gICAgICAgIHRpY2tldExpbms6ICcuanMtdGlja2V0LWxpbmsnLFxuICAgICAgICB0aWNrZXRCdXR0b246ICcuanMtdGlja2V0LWJ1dHRvbicsXG4gICAgICAgIHRpY2tldENsb3NlQnV0dG9uOiAnLmpzLXRpY2tldC1jbG9zZScsXG4gICAgICAgIHRpdGxlOiAnLmpzLXRpdGxlJ1xuICAgIH0sXG4gICAgY2xhc3Nlczoge1xuICAgICAgICBhZGRlZDogJ2FkZGVkJyxcbiAgICAgICAgY29uZmlnTWFpbjogJ2pzLWNvbmZpZ3VyYXRvci1tYWluJyxcbiAgICAgICAgY291bnRlcjogJ2pzLWNvbmZpZ3VyYXRvci1jb3VudGVyJyxcbiAgICAgICAgcHJvbW86ICdqcy1wcm9tby1ibG9jaycsXG4gICAgICAgIHRpY2tldEJsb2NrOiAnanMtdGlja2V0LWJsb2NrJyxcbiAgICAgICAgdGlja2V0SXRlbTogJ2pzLXRpY2tldC1pdGVtJyxcbiAgICAgICAgdGlja2V0QmxvY2tDb250ZW50OiAnanMtdGlja2V0LWJsb2NrLWNvbnRlbnQnLFxuICAgICAgICBoaWRlOiAnaGlkZSdcbiAgICB9LFxuICAgIGF0dHI6IHtcbiAgICAgICAgY29uZmlnOiAnZGF0YS1jb25maWd1cmF0b3ItY29uZmlnJ1xuICAgIH1cbn07XG5cbi8qKlxuICogVGlja2V0LlxuICpcbiAqIEBtb2R1bGUgVGlja2V0XG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyAtIHNwZWNpZmllcyB0aGUgY29uZmlndXJhdGlvbnNcbiAqIGZvciB0aGUgbW9kdWxlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrZXQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMgPSB7fSkge1xuXG4gICAgICAgIHRoaXMudGlja2V0ICAgICA9IHByb3BlcnRpZXMuJGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5mbyAgICAgICA9IEpTT04ucGFyc2UocHJvcGVydGllcy5pbmZvKTtcbiAgICAgICAgdGhpcy5pZHMgICAgICAgID0gZGVmYXVsdHMuaWRzO1xuICAgICAgICB0aGlzLnNlbGVjdG9ycyAgPSBkZWZhdWx0cy5zZWxlY3RvcnM7XG4gICAgICAgIHRoaXMuY2xhc3NlcyAgICA9IGRlZmF1bHRzLmNsYXNzZXM7XG4gICAgICAgIHRoaXMuYXR0ciAgICAgICA9IGRlZmF1bHRzLmF0dHI7XG4gICAgICAgIHRoaXMudGltZVBpbGUgICA9IFtdO1xuXG4gICAgICAgIC8vRXZlbnRzXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBuZXcgRXZlbnQoJ3ZmbXM6Y2hhbmdlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgbW9kdWxlLlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGluaXRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcbiAgICAgICAgY29uc3QgZWxlbWVudHNBZGRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7bW9kLnNlbGVjdG9ycy5jb25maWdFbGVtZW50fS4ke21vZC5jbGFzc2VzLmFkZGVkfWApO1xuICAgICAgICBjb25zdCBjb25maWdCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG1vZC5zZWxlY3RvcnMuY29uZmlnQmxvY2spO1xuXG4gICAgICAgIFtdLmZvckVhY2guY2FsbChjb25maWdCbG9ja3MsIGJsb2NrID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdCbG9jayA9IENSRUFUT1IuY3JlYXRlQmxvY2soSlNPTi5wYXJzZShibG9jay5nZXRBdHRyaWJ1dGUobW9kLmF0dHIuY29uZmlnKSkpO1xuICAgICAgICAgICAgbW9kLmFkZEJsb2NrVG9UaWNrZXQobmV3QmxvY2spO1xuICAgICAgICB9KTtcblxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZWxlbWVudHNBZGRlZCwgZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBtb2QuYWRkSXRlbVRvVGlja2V0KGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIG1vZC5hZGRQcm9tb3NUb1RpY2tldCgpO1xuICAgICAgICBQUklDRS5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICBTQ1JPTEwuaW5pdCgpO1xuICAgICAgICBtb2QuYmluZCgpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlIHRoZSBtb2R1bGUuXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gYmluZFxuICAgICAqXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBiaW5kKCkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBtb2QudGlja2V0LnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy50aWNrZXRCdXR0b24pLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobW9kLnNlbGVjdG9ycy5jb25maWdFbGVtZW50KSwgZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZmbXM6Y2hhbmdlJywgZXYgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0eXBlID0gZXYuaXNNYWluRWxlbWVudCA/IFwibWFpblwiIDogZXYuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMobW9kLmNsYXNzZXMuY291bnRlcikgPyBcImNvdW50ZXJcIiA6IFwiZGVmYXVsdFwiO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYWluXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2QubWFpbkVsZW1lbnRNYW5hZ2VyKGV2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY291bnRlclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kLmNvdW50ZXJFbGVtZW50TWFuYWdlcihldik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZC5kZWZhdWx0RWxlbWVudE1hbmFnZXIoZXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vZC5jaGVja1RpY2tldENvbnRlbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIG1vZC5vdmVybGF5QWN0aW9uKCk7XG4gICAgfVxuXG4gICAgbWFpbkVsZW1lbnRNYW5hZ2VyKGV2KSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG4gICAgICAgIFxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwobW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yQWxsKGAke21vZC5zZWxlY3RvcnMudGlja2V0QmxvY2t9Om5vdCguJHttb2QuY2xhc3Nlcy5oaWRlfSlgKSwgYmxvY2sgPT4ge1xuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGJsb2NrLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yQWxsKG1vZC5zZWxlY3RvcnMudGlja2V0SXRlbSksIGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChtb2QuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKG1vZC5jbGFzc2VzLmhpZGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtb2QuYWRkSXRlbVRvVGlja2V0KGV2LmVsZW1lbnQpO1xuICAgICAgICBtb2QucmVzZXRSZWxzKGV2LmVsZW1lbnQpO1xuICAgICAgICBtb2QuYWRkUHJvbW9zVG9UaWNrZXQoZXYuZWxlbWVudCk7XG5cbiAgICAgICAgUFJJQ0UucmVjYWxjdWxhdGUoKTtcblxuICAgICAgICBtb2Qub25DaGFuZ2UuZWxlbWVudCA9IGV2LmVsZW1lbnQ7XG4gICAgICAgIG1vZC5vbkNoYW5nZS5lbmVtaWVzID0gdW5kZWZpbmVkO1xuICAgICAgICBtb2Qub25DaGFuZ2UudG9SZW1vdmUgPSBmYWxzZTtcbiAgICAgICAgbW9kLnRpY2tldC5kaXNwYXRjaEV2ZW50KG1vZC5vbkNoYW5nZSk7XG4gICAgfVxuXG4gICAgY291bnRlckVsZW1lbnRNYW5hZ2VyKGV2KSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG4gICAgICAgIFxuICAgICAgICBpZihldi5udW0gJiYgZXYudG9BZGQpIHtcbiAgICAgICAgICAgIG1vZC5hZGRJdGVtVG9UaWNrZXQoZXYuZWxlbWVudCk7XG5cbiAgICAgICAgfSBlbHNlIGlmKGV2Lm51bSAmJiAhZXYudG9BZGQpIHtcbiAgICAgICAgICAgIG1vZC5oaWRlSXRlbShtb2QudGlja2V0LnF1ZXJ5U2VsZWN0b3IoYCMke21vZC5pZHMuaXRlbX0tJHtldi5lbGVtZW50LmlkfSR7ZXYubnVtfWApKTtcbiAgICAgICAgfVxuICAgICAgICBQUklDRS5yZWNhbGN1bGF0ZSgpO1xuICAgIH1cblxuICAgIGRlZmF1bHRFbGVtZW50TWFuYWdlcihldikge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBsZXQgZWxlQ29tcGEgPSBtb2QuaW5mby5jb21wYXRpYmlsaXRpZXNbZXYuZWxlbWVudC5pZF07XG4gICAgICAgIGxldCB0aWNrZXRJdGVtID0gbW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yKGAjJHttb2QuaWRzLml0ZW19LSR7ZXYuZWxlbWVudC5pZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGlmKGVsZUNvbXBhKSB7XG4gICAgICAgICAgICBsZXQgZW5lbWllc0FjdGl2YXRlZCA9IFtdO1xuICAgICAgICAgICAgZWxlQ29tcGEuZW5lbWllcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZW5lbXkgPSBtb2QudGlja2V0LnF1ZXJ5U2VsZWN0b3IoYCMke21vZC5pZHMuaXRlbX0tJHtpZH1gKTtcbiAgICAgICAgICAgICAgICBpZihlbmVteSAmJiAhZW5lbXkuY2xhc3NMaXN0LmNvbnRhaW5zKG1vZC5jbGFzc2VzLmhpZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZW1pZXNBY3RpdmF0ZWQucHVzaChlbmVteSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZihlbmVtaWVzQWN0aXZhdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBNT0RBTC5jb25maXJtKGVsZUNvbXBhLnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW5lbWllc0FjdGl2YXRlZC5mb3JFYWNoKGVuZW15ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZC5oaWRlSXRlbShlbmVteSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBtb2QuYWRkSXRlbVRvVGlja2V0KGV2LmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBQUklDRS5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtb2Qub25DaGFuZ2UuZWxlbWVudCA9IGV2LmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIG1vZC5vbkNoYW5nZS5lbmVtaWVzID0gZWxlQ29tcGEuZW5lbWllcztcbiAgICAgICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLnRvUmVtb3ZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG1vZC50aWNrZXQuZGlzcGF0Y2hFdmVudChtb2Qub25DaGFuZ2UpO1xuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FuY2VsIGNvZGUuLi5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGlzQWRkZWQgPSBldi5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhtb2QuY2xhc3Nlcy5hZGRlZCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoaXNBZGRlZCkge1xuICAgICAgICAgICAgICAgICAgICBldi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5jb25maWdJbml0aWFsUGF5KSA/IG1vZC50aWNrZXQucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLnRpY2tldEluaXRpYWxQYXkpLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChtb2QuY2xhc3Nlcy5oaWRlKSA6IG51bGw7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIG1vZC5oaWRlSXRlbSh0aWNrZXRJdGVtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtb2QuYWRkSXRlbVRvVGlja2V0KGV2LmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIFBSSUNFLnJlY2FsY3VsYXRlKCk7XG5cbiAgICAgICAgICAgICAgICBtb2Qub25DaGFuZ2UuZWxlbWVudCA9IGV2LmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLmVuZW1pZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLnRvUmVtb3ZlID0gaXNBZGRlZDtcbiAgICAgICAgICAgICAgICBtb2QudGlja2V0LmRpc3BhdGNoRXZlbnQobW9kLm9uQ2hhbmdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBpc0FkZGVkID0gZXYuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMobW9kLmNsYXNzZXMuYWRkZWQpO1xuXG4gICAgICAgICAgICBpZihpc0FkZGVkKSB7XG4gICAgICAgICAgICAgICAgZXYuZWxlbWVudC5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMuY29uZmlnSW5pdGlhbFBheSkgPyBtb2QudGlja2V0LnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy50aWNrZXRJbml0aWFsUGF5KS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQobW9kLmNsYXNzZXMuaGlkZSkgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgbW9kLmhpZGVJdGVtKHRpY2tldEl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2QuYWRkSXRlbVRvVGlja2V0KGV2LmVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBQUklDRS5yZWNhbGN1bGF0ZSgpO1xuXG4gICAgICAgICAgICBtb2Qub25DaGFuZ2UuZWxlbWVudCA9IGV2LmVsZW1lbnQ7XG4gICAgICAgICAgICBtb2Qub25DaGFuZ2UuZW5lbWllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIG1vZC5vbkNoYW5nZS50b1JlbW92ZSA9IGlzQWRkZWQ7XG4gICAgICAgICAgICBtb2QudGlja2V0LmRpc3BhdGNoRXZlbnQobW9kLm9uQ2hhbmdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBhZGRJdGVtVG9UaWNrZXQoaXRlbSkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBjb25zdCBibG9ja0NvbmZpZyA9IEpTT04ucGFyc2UoaXRlbS5jbG9zZXN0KG1vZC5zZWxlY3RvcnMuY29uZmlnQmxvY2spLmdldEF0dHJpYnV0ZShtb2QuYXR0ci5jb25maWcpKTtcbiAgICAgICAgY29uc3QgbnVtID0gaXRlbS5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMubnVtKSA/IGl0ZW0ucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLm51bSkuaW5uZXJUZXh0IDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLnRpdGxlKS5pbm5lclRleHQ7XG4gICAgICAgIGNvbnN0IGluaXRpYWxQYXkgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5jb25maWdJbml0aWFsUGF5KTtcbiAgICAgICAgbGV0IHRpY2tldEl0ZW0gPSBtb2QudGlja2V0LnF1ZXJ5U2VsZWN0b3IoYCMke21vZC5pZHMuaXRlbX0tJHtpdGVtLmlkfSR7bnVtID8gbnVtIDogJyd9YCk7XG5cbiAgICAgICAgaWYoIXRpY2tldEl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBibG9jayA9IG1vZC50aWNrZXQucXVlcnlTZWxlY3RvcihgIyR7YmxvY2tDb25maWcuaWR9YCk7XG5cbiAgICAgICAgICAgIHRpY2tldEl0ZW0gPSBDUkVBVE9SLmNyZWF0ZUl0ZW0oe1xuICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMucHJpY2UpID8gaXRlbS5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMucHJpY2UpLmlubmVyVGV4dCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBudW06IG51bSxcbiAgICAgICAgICAgICAgICBsaXN0OiBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwobW9kLnNlbGVjdG9ycy5saSksXG4gICAgICAgICAgICAgICAgaXNQcm9tbzogYmxvY2suaWQgPT09IG1vZC5pZHMucHJvbW9zXG4gICAgICAgICAgICB9LCBtb2QuaW5mbyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJsb2NrLm5leHRFbGVtZW50U2libGluZy5hcHBlbmRDaGlsZCh0aWNrZXRJdGVtKTtcbiAgICAgICAgICAgIG1vZC5jbG9zZUJ1dHRvbkNvbnRlbnQodGlja2V0SXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKGluaXRpYWxQYXkpIHtcbiAgICAgICAgICAgIGxldCB0aWNrZXRJbml0UGF5ID0gbW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMudGlja2V0SW5pdGlhbFBheSk7XG4gICAgICAgICAgICB0aWNrZXRJbml0UGF5LmlubmVyVGV4dCA9IGluaXRpYWxQYXkuaW5uZXJUZXh0O1xuICAgICAgICAgICAgdGlja2V0SW5pdFBheS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobW9kLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgICAgICBpbmNsdWRlVmFsdWVJbk5hbWVTcGFjZSgnd2FsbG1lcmljJywgJ2luaXRpYWxQYXknLCBpbml0aWFsUGF5LmlubmVyVGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG1vZC5zaG93SXRlbSh0aWNrZXRJdGVtKTtcbiAgICB9XG5cbiAgICBhZGRCbG9ja1RvVGlja2V0KGJsb2NrKSB7XG4gICAgICAgIHRoaXMudGlja2V0LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMudGlja2V0Q29udGVudCkuYXBwZW5kQ2hpbGQoYmxvY2submV3QmxvY2spO1xuICAgICAgICB0aGlzLnRpY2tldC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLnRpY2tldENvbnRlbnQpLmFwcGVuZENoaWxkKGJsb2NrLmNvbnRlbnRCbG9jayk7XG4gICAgfVxuXG4gICAgYWRkUHJvbW9zVG9UaWNrZXQocmF0ZSkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBjb25zdCByYXRlQWN0aXZhdGVkID0gcmF0ZSA/IHJhdGUgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke21vZC5zZWxlY3RvcnMuY29uZmlnTWFpbn0uJHttb2QuY2xhc3Nlcy5hZGRlZH1gKTtcbiAgICAgICAgbGV0IHByb21vQ291bnRlciA9IDA7XG4gICAgICAgIGxldCBwcm9tb0Jsb2NrID0gbW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yKCcjJyArIG1vZC5pZHMucHJvbW9zKTtcblxuICAgICAgICBpZihwcm9tb0Jsb2NrKSB7XG4gICAgICAgICAgICBsZXQgYXV4ID0gcHJvbW9CbG9jaztcbiAgICAgICAgICAgIHByb21vQmxvY2sgPSB7fTtcbiAgICAgICAgICAgIHByb21vQmxvY2submV3QmxvY2sgPSBhdXg7XG4gICAgICAgICAgICBwcm9tb0Jsb2NrLmNvbnRlbnRCbG9jayA9IGF1eC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBwcm9tb0Jsb2NrLmNvbnRlbnRCbG9jay5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21vQmxvY2sgPSBDUkVBVE9SLmNyZWF0ZUJsb2NrKHtcbiAgICAgICAgICAgICAgICBpZDogbW9kLmlkcy5wcm9tb3MsXG4gICAgICAgICAgICAgICAgc3ZnOiBcImljb24tYm9udXMtbWlkXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUHJvbW9jaW9uZXNcIixcbiAgICAgICAgICAgICAgICBidXR0b246IHRydWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwcm9tb0Jsb2NrLm5ld0Jsb2NrLmNsYXNzTGlzdC5hZGQobW9kLmNsYXNzZXMucHJvbW8pO1xuICAgICAgICB9XG5cbiAgICAgICAgbW9kLmluZm8ucHJvbW9zLmZvckVhY2gocHJvbW8gPT4ge1xuICAgICAgICAgICAgcHJvbW9Db3VudGVyKys7XG4gICAgICAgICAgICBwcm9tb0Jsb2NrLmNvbnRlbnRCbG9jay5hcHBlbmRDaGlsZChDUkVBVE9SLmNyZWF0ZUl0ZW0oe1xuICAgICAgICAgICAgICAgIGlkOiBwcm9tby5pZCxcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb21vLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHByaWNlOiBwcm9tby5wcmljZSxcbiAgICAgICAgICAgICAgICBsaXN0OiBbXSxcbiAgICAgICAgICAgICAgICBpc1Byb21vOiB0cnVlXG4gICAgICAgICAgICB9LCBtb2QuaW5mbykpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZihyYXRlQWN0aXZhdGVkKSB7XG4gICAgICAgICAgICBtb2QuaW5mby5lbGVtZW50c1tyYXRlQWN0aXZhdGVkLmlkXS5wcm9tb3MuZm9yRWFjaChwcm9tbyA9PiB7XG4gICAgICAgICAgICAgICAgcHJvbW9Db3VudGVyKys7XG4gICAgICAgICAgICAgICAgcHJvbW9CbG9jay5jb250ZW50QmxvY2suYXBwZW5kQ2hpbGQoQ1JFQVRPUi5jcmVhdGVJdGVtKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvbW8uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBwcm9tby5wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogW10sXG4gICAgICAgICAgICAgICAgICAgIGlzUHJvbW86IHRydWVcbiAgICAgICAgICAgICAgICB9LCBtb2QuaW5mbykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwcm9tb0NvdW50ZXIgPiAwKSB7XG4gICAgICAgICAgICBwcm9tb0Jsb2NrLm5ld0Jsb2NrLnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5xdWFudGl0eSkuaW5uZXJUZXh0ID0gcHJvbW9Db3VudGVyO1xuICAgICAgICAgICAgcHJvbW9CbG9jay5uZXdCbG9jay5jbGFzc0xpc3QucmVtb3ZlKG1vZC5jbGFzc2VzLmhpZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbW9kLmFkZEJsb2NrVG9UaWNrZXQocHJvbW9CbG9jayk7XG4gICAgfVxuXG4gICAgc2hvd0l0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBjb25zdCBkYWRkeSA9IGl0ZW0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgYmxvY2sgPSBkYWRkeS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgIGlmKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKG1vZC5jbGFzc2VzLmNvbmZpZ01haW4pKSB7XG4gICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZGFkZHkucXVlcnlTZWxlY3RvckFsbChgJHttb2Quc2VsZWN0b3JzLnRpY2tldEl0ZW19Om5vdCguJHttb2QuY2xhc3Nlcy5oaWRlfSlgKSwgaXRlbSA9PiBtb2QuaGlkZUl0ZW0oaXRlbSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbW9kLnNob3dCbG9jayhibG9jayk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShtb2QuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgbW9kLnJlY291bnRDaGlsZHJlbihibG9jayk7XG4gICAgfVxuXG4gICAgaGlkZUl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBibG9jayA9IGl0ZW0ucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlY291bnRDaGlsZHJlbihibG9jaykgPT09IDAgPyB0aGlzLmhpZGVCbG9jayhibG9jaykgOiBudWxsO1xuICAgIH1cblxuICAgIHNob3dCbG9jayhibG9jaykge1xuICAgICAgICBibG9jay5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICB9XG5cbiAgICBoaWRlQmxvY2soYmxvY2spIHtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgIGJsb2NrLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICB9XG5cbiAgICByZWNvdW50Q2hpbGRyZW4odGlja2V0QmxvY2spIHtcbiAgICAgICAgbGV0IGNvdW50ZXJDaGlsZHJlbiA9IHRpY2tldEJsb2NrLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yQWxsKGAke3RoaXMuc2VsZWN0b3JzLnRpY2tldEl0ZW19Om5vdCguJHt0aGlzLmNsYXNzZXMuaGlkZX0pYCkubGVuZ3RoO1xuICAgICAgICB0aWNrZXRCbG9jay5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLnF1YW50aXR5KS5pbm5lclRleHQgPSBjb3VudGVyQ2hpbGRyZW47XG4gICAgICAgIHJldHVybiBjb3VudGVyQ2hpbGRyZW47XG4gICAgfVxuXG4gICAgcmVzZXRSZWxzKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcbiAgICAgICAgbW9kLmluZm8uZWxlbWVudHNbZWxlbWVudC5pZF0ucmVscy5mb3JFYWNoKHJlbCA9PiB7XG4gICAgICAgICAgICBpZihyZWwuc2VsZWN0b3IgJiYgcmVsLnNlbGVjdG9yICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVsLnNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihlbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IGVsLnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5wcmljZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZWwucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBlbC5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXRJdGVtID0gbW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yKGAjJHttb2QuaWRzLml0ZW19LSR7ZWwuaWR9YCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihwcmljZSAmJiByZWwubmV3UHJpY2UgPj0gMCkgeyBwcmljZS5pbm5lclRleHQgPSBgJHtyZWwubmV3UHJpY2V94oKsYCB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHRpdGxlICYmIHJlbC5uZXdUaXRsZSkgeyB0aXRsZS5pbm5lclRleHQgPSByZWwubmV3VGl0bGUgfVxuICAgICAgICAgICAgICAgICAgICBpZihkZXNjcmlwdGlvbiAmJiByZWwubmV3RGVzY3JpcHRpb24pIHsgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gcmVsLm5ld0Rlc2NyaXB0aW9uIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKHRpY2tldEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldEl0ZW0ucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLnBhcnRpYWxQcmljZSkuaW5uZXJUZXh0ID0gYCR7cmVsLm5ld1ByaWNlfeKCrGA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWwubmV3VGl0bGUgPyB0aWNrZXRJdGVtLnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy50aWNrZXRJdGVtVGl0bGUpLmlubmVyVGV4dCA9IHJlbC5uZXdUaXRsZSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZihyZWwuZGVmYXVsdEFkZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2QuYWRkSXRlbVRvVGlja2V0KGVsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcmxheSBhY3Rpb24gdG8gaGlkZSB0aWNrZXQgY29udGVudCB3aGVuIHlvdSBjbGljayBvdmVyIGl0XG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gb3ZlcmxheUFjdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ1dHRvbiAtIERyb3Bkb3duIGJ1dHRvbiBlbGVtZW50XG4gICAgICogXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBvdmVybGF5QWN0aW9uKCkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBjb25zdCB0aWNrZXRPdmVybGF5ID0gbW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMub3ZlcmxheSk7XG4gICAgICAgIGNvbnN0IHRpY2tldEJvZHkgPSBtb2QudGlja2V0LnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5ib2R5KTtcbiAgICAgICAgY29uc3QgdGlja2V0RHJvcGRvd24gPSBtb2QudGlja2V0LnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5kcm9wZG93bik7XG5cbiAgICAgICAgdGlja2V0T3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKCF0aWNrZXRCb2R5LmNsYXNzTGlzdC5jb250YWlucyhtb2QuY2xhc3Nlcy5oaWRlKSkge1xuICAgICAgICAgICAgICAgIHRpY2tldE92ZXJsYXkuY2xhc3NMaXN0LmFkZChtb2QuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgICAgICAgICB0aWNrZXREcm9wZG93bi5jbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0aWNrZXQgY29udGVudFxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGNoZWNrVGlja2V0Q29udGVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgY2hlY2tUaWNrZXRDb250ZW50KCkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBsZXQgY29udGVudHNCbG9ja1Zpc2libGUgPSBtb2QudGlja2V0LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7bW9kLnNlbGVjdG9ycy50aWNrZXRCbG9ja306bm90KC5oaWRlKWApO1xuICAgICAgICBsZXQgcmF0ZUFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7bW9kLnNlbGVjdG9ycy5jb25maWdNYWlufS4ke21vZC5jbGFzc2VzLmFkZGVkfWApO1xuICAgICAgICBsZXQgcmF0ZU9iamVjdCA9IG1vZC5pbmZvLmVsZW1lbnRzW3JhdGVBY3RpdmUuaWRdO1xuICAgICAgICBsZXQgY291bnREaWZlcmVudElkcyA9IDA7XG4gICAgICAgIGxldCBjb3VudGVyVHJ1ZVJlbHMgPSAwO1xuICAgICAgICBjb250ZW50c0Jsb2NrVmlzaWJsZSA9IFtdLnNsaWNlLmNhbGwoY29udGVudHNCbG9ja1Zpc2libGUsIDEpO1xuXG4gICAgICAgIGlmKGNvbnRlbnRzQmxvY2tWaXNpYmxlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmKGNvbnRlbnRzQmxvY2tWaXNpYmxlW2NvbnRlbnRzQmxvY2tWaXNpYmxlLmxlbmd0aC0xXS5pZCA9PT0gbW9kLmlkcy5wcm9tb3MpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50c0Jsb2NrVmlzaWJsZSA9IGNvbnRlbnRzQmxvY2tWaXNpYmxlLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmF0ZU9iamVjdC5yZWxzLmZvckVhY2gocmVsID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZWwuZGVmYXVsdEFkZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzQmxvY2tWaXNpYmxlLmZvckVhY2goY29udGVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbLi4uY29udGVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2hpbGRyZW5dLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNoaWxkLmlkICE9PSBgJHttb2QuaWRzLml0ZW19LSR7cmVsLnNlbGVjdG9yfWAgJiYgIWNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhtb2QuY2xhc3Nlcy5oaWRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudERpZmVyZW50SWRzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyVHJ1ZVJlbHMrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGNvdW50RGlmZXJlbnRJZHMgPiAwIHx8IChjb3VudGVyVHJ1ZVJlbHMgPT09IDAgJiYgY29udGVudHNCbG9ja1Zpc2libGUubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpY2tldEJ1dHRvbigpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUaWNrZXRMaW5rKHJhdGVPYmplY3QuaHJlZik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc2hvd1RpY2tldExpbmsobmV3SHJlZikge1xuICAgICAgICBsZXQgbGluayA9IHRoaXMudGlja2V0LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMudGlja2V0TGluayk7XG5cbiAgICAgICAgdGhpcy50aWNrZXQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy50aWNrZXRCdXR0b24pLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGxpbmsuaHJlZiA9IG5ld0hyZWY7XG4gICAgfVxuXG4gICAgc2hvd1RpY2tldEJ1dHRvbigpIHtcbiAgICAgICAgdGhpcy50aWNrZXQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy50aWNrZXRMaW5rKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHRoaXMudGlja2V0LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMudGlja2V0QnV0dG9uKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgY2xvc2VCdXR0b25Db250ZW50KHRpY2tldEl0ZW0pIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcbiAgICAgICAgbGV0IGNsb3NlQnV0dG9uID0gdGlja2V0SXRlbS5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMudGlja2V0Q2xvc2VCdXR0b24pO1xuICAgICAgICBsZXQgaWRUaWNrZXRJdGVtID0gdGlja2V0SXRlbS5pZC5yZXBsYWNlKHRoaXMuaWRzLml0ZW0rJy0nLCAnJyk7XG5cbiAgICAgICAgaWYoY2xvc2VCdXR0b24pIHtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtQ29uZmlnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRUaWNrZXRJdGVtKTtcbiAgICAgICAgICAgICAgICBtb2QuaGlkZUl0ZW0oY2xvc2VCdXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBQUklDRS5yZWNhbGN1bGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYoaXRlbUNvbmZpZy5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMuY29uZmlnSW5pdGlhbFBheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMudGlja2V0SW5pdGlhbFBheSkucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLmVsZW1lbnQgPSBpdGVtQ29uZmlnO1xuICAgICAgICAgICAgICAgIG1vZC5vbkNoYW5nZS5lbmVtaWVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIG1vZC5vbkNoYW5nZS50b1JlbW92ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbW9kLnRpY2tldC5kaXNwYXRjaEV2ZW50KG1vZC5vbkNoYW5nZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgQ29tbW9uIGZyb20gJy4vX2NvbW1vbic7XG5pbXBvcnQgQ29uZmlndXJhdG9yIGZyb20gJy4vX2NvbmZpZ3VyYXRvcic7XG5pbXBvcnQgVGlja2V0IGZyb20gJy4vX3RpY2tldCc7XG5cbmNvbnN0IFBBVEhfTUlDUk9TSVRFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGF0aG1pY3Jvc2l0ZV0nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aG1pY3Jvc2l0ZScpO1xuXG5sZXQgZ2xvYmFsTW9kdWxlcyA9IHtcbiAgICBfY29tbW9uOiBDb21tb24sXG4gICAgX2NvbmZpZ3VyYXRvcjogQ29uZmlndXJhdG9yLFxuICAgIF90aWNrZXQ6IFRpY2tldFxufTtcblxuZXhwb3J0IGxldCB1dGlscyA9IHtcbiAgICBpbml0OiBzY29wZSA9PiB7XG4gICAgICAgIGxldCBtb2R1bGVzID0gc2NvcGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmZtcy1qc10nKTtcblxuICAgICAgICBmZXRjaChQQVRIX01JQ1JPU0lURSArICdjb25maWctaW5mby5qc29uJykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKG1vZHVsZXMsIG1vZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZHVsZXNBdHRyID0gbW9kLmdldEF0dHJpYnV0ZSgnZGF0YS12Zm1zLWpzJyk7XG5cbiAgICAgICAgICAgICAgICBtb2R1bGVzQXR0ciA9IG1vZHVsZXNBdHRyLnNwbGl0KCcsJyk7XG5cbiAgICAgICAgICAgICAgICBtb2R1bGVzQXR0ci5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydGllcyA9IHskZWxlbWVudDogbW9kfTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5pbmZvID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gZ2xvYmFsTW9kdWxlc1thdHRyXSA/IG5ldyBnbG9iYWxNb2R1bGVzW2F0dHJdKHByb3BlcnRpZXMpIDogdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlID8gaW5zdGFuY2UuaW5pdCgpIDogbnVsbDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG4iLCIvKipcbiAqIEluY2x1ZGUgdmFsdWUgaW50byB0aWNrZXRkYXRhIGZpcnN0IGxldmVsXG4gKlxuICogQGZ1bmN0aW9uIGluY2x1ZGVWYWx1ZUluTmFtZVNwYWNlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBhbnlOYW1lIC0gVGhlIGNvbXBhbnkgbmFtZSB3aGljaCBnb2VzIHRvIHJlY292ZXIgZGF0YVxuICogQHBhcmFtIHtOdW1iZXJ9IGtleSAtIGtleSBvZiB0aGUgb2JqZWN0IHRvIHNhdmVcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSAtIHZhbHVlIGFzc29jaWF0ZWQgdG8ga2V5XG4gKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gKlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlVmFsdWVJbk5hbWVTcGFjZShjb21wYW55TmFtZSwga2V5LCB2YWx1ZSkge1xuICAgIGlmKGlzTmFtZXNwYWNlVW5kZWZpbmVkKGNvbXBhbnlOYW1lKSkge1xuICAgICAgICByZWdpc3Rlck5hbWVzcGFjZShjb21wYW55TmFtZSk7XG4gICAgfVxuICAgIFxuICAgIHNhdmVJbnRvTmFtZXNwYWNlKGNvbXBhbnlOYW1lLCBrZXksIHZhbHVlKTtcbn1cblxuLyoqXG4gKiBJbmNsdWRlIHByb2R1Y3RzIGZyb20gdGlja2V0IGludG8gZ2xvYmFsIG9iamVjdFxuICpcbiAqIEBmdW5jdGlvbiBpbmNsdWRlVGlja2V0UHJvZHVjdFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wYW55TmFtZSAtIFRoZSBjb21wYW55IG5hbWUgd2hpY2ggZ29lcyB0byByZWNvdmVyIGRhdGFcbiAqIEBwYXJhbSB7TnVtYmVyfSB0aWNrZXQgLSB0aWNrZXQgSFRNTCBlbGVtZW50XG4gKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZVRpY2tldFByb2R1Y3QoY29tcGFueU5hbWUsIHRpY2tldCkge1xuICAgIGNvbnN0IHRpY2tldExpc3QgPSB0aWNrZXQgfHwge307XG4gICAgY29uc3QgYXJyQ2xhc3MgPSBbJy5qcy10aWNrZXQtaXRlbS10aXRsZScsICcuanMtdGlja2V0LXBhcnRpYWwtcHJpY2UnLCAnLmpzLXRpY2tldC1pdGVtJ107XG4gICAgXG4gICAgaWYoaXNOYW1lc3BhY2VVbmRlZmluZWQoY29tcGFueU5hbWUpKSB7XG4gICAgICAgIHJlZ2lzdGVyTmFtZXNwYWNlKGNvbXBhbnlOYW1lKTtcbiAgICB9XG5cbiAgICBzYXZlSW50b05hbWVzcGFjZShjb21wYW55TmFtZSwgJ2NvbnRlbnQnLCB7fSk7XG4gICAgXG4gICAgWy4uLnRpY2tldExpc3RdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmlkICE9PSAnYWNjb3JkaW9uLXRpY2tldC1wcm9tb3MnKSB7XG4gICAgICAgICAgICBjb25zdCB2aXNpYmxlRWxzID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKGAke2FyckNsYXNzWzJdfTpub3QoLmhpZGUpYCk7XG4gICAgICAgICAgICBsZXQga2V5T2JqZWN0LCB2YWx1ZTtcblxuICAgICAgICAgICAgaWYoaXRlbS5pZC5pbmRleE9mKCdjb3VudGVyJykgPj0gMCkge1xuICAgICAgICAgICAgICAgIGtleU9iamVjdCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihhcnJDbGFzc1swXSkuaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgIHZhbHVlID0gaXRlbS5xdWVyeVNlbGVjdG9yKGFyckNsYXNzWzFdKS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgc2F2ZUNvbnRlbnRJbnRvTmFtZXNwYWNlKGNvbXBhbnlOYW1lLCBrZXlPYmplY3QsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBzYXZlQ29udGVudEludG9OYW1lc3BhY2UoY29tcGFueU5hbWUsIGAke2tleU9iamVjdH0gQ2FudGlkYWRgLCB2aXNpYmxlRWxzLmxlbmd0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbCh2aXNpYmxlRWxzLCBlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGtleU9iamVjdCA9IGVsLnF1ZXJ5U2VsZWN0b3IoYXJyQ2xhc3NbMF0pLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBlbC5xdWVyeVNlbGVjdG9yKGFyckNsYXNzWzFdKS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHNhdmVDb250ZW50SW50b05hbWVzcGFjZShjb21wYW55TmFtZSwga2V5T2JqZWN0LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzYXZlQ29udGVudEludG9OYW1lc3BhY2UoY29tcGFueU5hbWUsICdwcm9tbycsIGl0ZW0ucXVlcnlTZWxlY3RvcihhcnJDbGFzc1swXSkuaW5uZXJUZXh0KTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8qKlxuICogQ3JlYXRlIG5hbWVzcGFjZSBpbnRvIHZmZXMgb2JqZWN0XG4gKlxuICogQGZ1bmN0aW9uIHJlZ2lzdGVyTmFtZXNwYWNlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBhbnlOYW1lIC0gVGhlIGNvbXBhbnkgbmFtZSB3aGljaCBnb2VzIHRvIHJlY292ZXIgZGF0YVxuICogQHJldHVybiB7dW5kZWZpbmVkfVxuICpcbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJOYW1lc3BhY2UoY29tcGFueU5hbWUpIHtcbiAgICB3aW5kb3cudmZlc1tjb21wYW55TmFtZV0gPSB7IFwiZGF0YVRpY2tldFwiOiB7fSB9O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIG5hbWVzcGFjZSBleGlzdHMgaW50byB2ZmVzIG9iamVjdFxuICpcbiAqIEBmdW5jdGlvbiBpc05hbWVzcGFjZVVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wYW55TmFtZSAtIFRoZSBjb21wYW55IG5hbWUgd2hpY2ggZ29lcyB0byByZWNvdmVyIGRhdGFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKlxuICovXG5mdW5jdGlvbiBpc05hbWVzcGFjZVVuZGVmaW5lZChjb21wYW55TmFtZSkge1xuICAgIHJldHVybiB3aW5kb3cudmZlc1tjb21wYW55TmFtZV0gPT09IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBTYXZlIHZhbHVlIGludG8gbmFtZXNwYWNlXG4gKlxuICogQGZ1bmN0aW9uIHNhdmVJbnRvTmFtZXNwYWNlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBhbnlOYW1lIC0gVGhlIGNvbXBhbnkgbmFtZSB3aGljaCBnb2VzIHRvIHJlY292ZXIgZGF0YVxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIG9iamVjdCBrZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIG9iamVjdCBrZXkgdmFsdWVcbiAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAqXG4gKi9cbmZ1bmN0aW9uIHNhdmVJbnRvTmFtZXNwYWNlKGNvbXBhbnlOYW1lLCBrZXksIHZhbHVlKSB7XG4gICAgd2luZG93LnZmZXNbY29tcGFueU5hbWVdWydkYXRhVGlja2V0J11ba2V5XSA9IHZhbHVlO1xufVxuXG4vKipcbiAqIFNhdmUgdmFsdWUgaW50byBuYW1lc3BhY2UncyBjb250ZW50XG4gKlxuICogQGZ1bmN0aW9uIHNhdmVDb250ZW50SW50b05hbWVzcGFjZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wYW55TmFtZSAtIFRoZSBjb21wYW55IG5hbWUgd2hpY2ggZ29lcyB0byByZWNvdmVyIGRhdGFcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBvYmplY3Qga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSBvYmplY3Qga2V5IHZhbHVlXG4gKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gKlxuICovXG5mdW5jdGlvbiBzYXZlQ29udGVudEludG9OYW1lc3BhY2UoY29tcGFueU5hbWUsIGtleSwgdmFsdWUpIHtcbiAgICB3aW5kb3cudmZlc1tjb21wYW55TmFtZV1bJ2RhdGFUaWNrZXQnXVsnY29udGVudCddW2tleV0gPSB2YWx1ZTtcbn0iLCJpbXBvcnQgdG9vbHMgZnJvbSAnLi90b29scyc7XG5pbXBvcnQge3V0aWxzfSBmcm9tICcuL191dGlscyc7XG5cbnRvb2xzLm9uU3R5bGVzUmVhZHkgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTaXRlIHZpc3VhbGx5IHJlYWR5XCIpO1xuXG4gICAgdXRpbHMuaW5pdChkb2N1bWVudCk7XG5cbiAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogOTcwcHgpJykubWF0Y2hlcyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10aWNrZXQtZHJvcGRvd24nKS5jbGljaygpIDogbnVsbDtcbn07XG5cbnRvb2xzLm9uU3R5bGVzUmVhZHkoKTtcbiIsIi8qXG4gKiBNaWNyb3NpdGVzIHRvb2xzIGpzOlxuICogRXN0ZSBmaWNoZXJvIGVzIHVuYSBtdWVzdHJhIGRlIHV0aWxpZGFkZXMgcHJvcGlhcyBwYXJhIGxvcyBtaWNyb3NpdGVzLlxuICogU2UgcHVlZGUgcGVyc29uYWxpemFyIGEgdHUgZ3VzdG9cbiAqXG4gKi9cblxuZnVuY3Rpb24gaW5pdCgpe1xuXG59XG5cbmxldCB3aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbmxldCBpc0Rlc2t0b3AsIGlzVGFibGV0LCBpc01vYmlsZTtcbmlzRGVza3RvcCA9IHdpZHRoID4gOTY5O1xuaXNUYWJsZXQgPSB3aWR0aCA8PSA5NjkgJiYgd2lkdGggPj0gNzY4O1xuaXNNb2JpbGUgPSB3aWR0aCA8IDc2OCAmJiB3aWR0aCA+IDMwMDtcbi8vIFRPRE9cbi8vIGNvbnN0IFBBVEhfTUlDUk9TSVRFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pY3JvLXBhcXVldGVzJykucGFyZW50cygnW2RhdGEtcGF0aG1pY3Jvc2l0ZV0nKS5hdHRyKCdkYXRhLXBhdGhtaWNyb3NpdGUnKTtcblxuY29uc3QgZXggPSB7XG4gICAgaXNEZXNrdG9wLFxuICAgIGlzVGFibGV0LFxuICAgIGlzTW9iaWxlLFxuICAgIC8vbWljcm9zaXRlUGF0aDogUEFUSF9NSUNST1NJVEUsXG4gICAgaW5pdDogaW5pdCxcbiAgICBjc3NMb2FkZWQ6IGZhbHNlLFxuICAgIG9uU3R5bGVzUmVhZHk6ICgpID0+IG51bGxcbn07XG5cbmNvbnN0IGNzc01haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW2RhdGEtbWljcm9jc3NdJyk7XG5pZihjc3NNYWluKXtcbiAgICAvL0NvbW1lbnRlZCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEZpcmVmb3hcbiAgICAvL2Nzc01haW4uYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgKHdpbmRvdy52ZmVzIHx8IHdpbmRvdy5fdmYpLl91dGlscy5pbml0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZmVzLW1zLWNvbnRlbnQnKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZmVzLW1zLWNvbnRlbnQnKS5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICAgICAgZXguY3NzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgZXgub25TdHlsZXNSZWFkeSgpO1xuICAgIC8vfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4XG4iXSwic291cmNlUm9vdCI6IiJ9