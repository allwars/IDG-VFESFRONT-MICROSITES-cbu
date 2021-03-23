/**
 * Vodafone Reboot Framework: Version 2.2.3. Generation Date: 2020-06-11T15:33:22.143Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_common.js":
/*!******************************************************************************************************************************************!*\
  !*** /Users/rapf/RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_common.js ***!
  \******************************************************************************************************************************************/
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

/***/ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_configurator.js":
/*!************************************************************************************************************************************************!*\
  !*** /Users/rapf/RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_configurator.js ***!
  \************************************************************************************************************************************************/
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

} // reference to a list

const containerRatesMobile = document.querySelector('[data-vfms-js="_AditionalLines"]');
const otherLine = document.querySelector('[data-vfms-js="_AddOtherLine"]');
const deleteOtherLine = document.querySelector('[data-vfms-js="_removeOtherLine"]');
const contador = document.querySelector('[data-vfms-js="_aditionalCount"]');
const buttonAccordionRate = document.querySelector('[data-vfms-js="_buttonAccordionRate"]');
const buttonAddLine = document.querySelector('[data-vfms-js="_buttonAddLine"]');
let letsGO = 1;
let lastIndex = 0; // Función clonar elemento al clickar en '+'

function cloner() {
  if (contador.innerHTML >= 5) {
    console.log('NO PUEDES MÁS');
    otherLine.setAttribute('disabled', 'true');
  } else {
    let clone = containerRatesMobile.firstElementChild.cloneNode(true);
    let ratesClone = clone.lastElementChild;
    let ratesCloner = ratesClone.lastElementChild;
    let buttonAccordionRateCloned = clone.querySelector('[data-vfms-js="_buttonAccordionRate"]');
    let buttonAddLineRateCloned = clone.querySelector('[data-vfms-js="_buttonAddLine"]');
    let inputs = [...ratesCloner.querySelectorAll('[data-vfms-js="_inputRate"]')];
    let labels = [...ratesCloner.querySelectorAll('[data-vfms-js="_labelRate"]')];
    contador.innerHTML = ++letsGO;
    containerRatesMobile.appendChild(clone);
    clone.classList.add('vfes-mt-');
    ratesCloner.classList.add('hide');
    deleteOtherLine.removeAttribute('disabled');
    inputs.forEach((input, index) => {
      input.setAttribute('id', 'radio' + lastIndex);
      labels[index].setAttribute('for', 'radio' + lastIndex);
      lastIndex++;
    });
    buttonAccordionRateCloned.addEventListener('click', handlerAccordion, false);
    buttonAddLineRateCloned.addEventListener('click', handlerAddLine, false);
  }
} // Función eliminar la última linea añadida al clickar en '-'


function substractlines() {
  let contador = document.querySelector('[data-vfms-js="_aditionalCount"]');
  let lineAditional = document.querySelector('[data-vfms-js="_AditionalLines"]');
  let ultimoHijo = lineAditional.lastElementChild;

  if (contador.innerHTML <= 1) {
    console.log('NO PUEDES MENOS');
    deleteOtherLine.setAttribute('disabled', 'true');
  } else {
    otherLine.removeAttribute('disabled');
    contador.innerHTML = --letsGO;
    ultimoHijo.remove();
  }
} // Función para acordeón, movimiento del '^' y muestra de lineas.


function handlerAccordion(e) {
  let accordionRates = e.target.nextElementSibling;
  e.target.firstElementChild.classList.toggle('hide');
  e.target.lastElementChild.classList.toggle('hide');
  accordionRates.classList.toggle('hide');
} // Función para Añadir Línea


function handlerAddLine(e) {
  let deleteLine = e.target.nextElementSibling;
  deleteLine.classList.remove('hide');
  deleteLine.nextElementSibling.classList.add('hide');
} // Función para Remove Línea


function handlerRemoveLine(e) {
  let deleteLine = e.target.nextElementSibling;
  deleteLine.classList.remove('hide');
  deleteLine.nextElementSibling.classList.add('hide');
}

buttonAccordionRate.addEventListener('click', handlerAccordion, false);
buttonAddLine.addEventListener('click', handlerAddLine, false);
otherLine.addEventListener('click', cloner);
deleteOtherLine.addEventListener('click', substractlines);

/***/ }),

/***/ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_creator.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/rapf/RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_creator.js ***!
  \*******************************************************************************************************************************************/
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

/***/ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_modal.js":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/rapf/RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_modal.js ***!
  \*****************************************************************************************************************************************/
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

/***/ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_price.js":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/rapf/RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_price.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wallmeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_wallmeric */ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_wallmeric.js");

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

/***/ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_scroll.js":
/*!******************************************************************************************************************************************!*\
  !*** /Users/rapf/RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_scroll.js ***!
  \******************************************************************************************************************************************/
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

/***/ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_ticket.js":
/*!******************************************************************************************************************************************!*\
  !*** /Users/rapf/RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_ticket.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ticket; });
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_creator */ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_creator.js");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_price */ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_price.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_modal */ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_modal.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_scroll */ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_scroll.js");
/* harmony import */ var _wallmeric__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_wallmeric */ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_wallmeric.js");





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

/***/ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_utils.js":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/rapf/RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_utils.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return utils; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_common */ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_common.js");
/* harmony import */ var _configurator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_configurator */ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_configurator.js");
/* harmony import */ var _ticket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_ticket */ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_ticket.js");



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

/***/ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_wallmeric.js":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/rapf/RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_wallmeric.js ***!
  \*********************************************************************************************************************************************/
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

/***/ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/main.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/rapf/RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/main.js ***!
  \***************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/tools.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_utils */ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/_utils.js");



_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onStylesReady = () => {
  console.log("Site visually ready");
  _utils__WEBPACK_IMPORTED_MODULE_1__["utils"].init(document);
  window.matchMedia('(min-width: 970px)').matches ? document.querySelector('.js-ticket-dropdown').click() : null;
};

_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onStylesReady();

/***/ }),

/***/ "../../../../../../../../RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/tools.js":
/*!****************************************************************************************************************************************!*\
  !*** /Users/rapf/RAPF/VODAFONE/microsites-cbu/01-particulares/01-convergente/configurador/new-configurator/resources/scripts/tools.js ***!
  \****************************************************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9yYXBmL1JBUEYvVk9EQUZPTkUvbWljcm9zaXRlcy1jYnUvMDEtcGFydGljdWxhcmVzLzAxLWNvbnZlcmdlbnRlL2NvbmZpZ3VyYWRvci9uZXctY29uZmlndXJhdG9yL3Jlc291cmNlcy9zY3JpcHRzL19jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9yYXBmL1JBUEYvVk9EQUZPTkUvbWljcm9zaXRlcy1jYnUvMDEtcGFydGljdWxhcmVzLzAxLWNvbnZlcmdlbnRlL2NvbmZpZ3VyYWRvci9uZXctY29uZmlndXJhdG9yL3Jlc291cmNlcy9zY3JpcHRzL19jb25maWd1cmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9yYXBmL1JBUEYvVk9EQUZPTkUvbWljcm9zaXRlcy1jYnUvMDEtcGFydGljdWxhcmVzLzAxLWNvbnZlcmdlbnRlL2NvbmZpZ3VyYWRvci9uZXctY29uZmlndXJhdG9yL3Jlc291cmNlcy9zY3JpcHRzL19jcmVhdG9yLmpzIiwid2VicGFjazovLy8vVXNlcnMvcmFwZi9SQVBGL1ZPREFGT05FL21pY3Jvc2l0ZXMtY2J1LzAxLXBhcnRpY3VsYXJlcy8wMS1jb252ZXJnZW50ZS9jb25maWd1cmFkb3IvbmV3LWNvbmZpZ3VyYXRvci9yZXNvdXJjZXMvc2NyaXB0cy9fbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9yYXBmL1JBUEYvVk9EQUZPTkUvbWljcm9zaXRlcy1jYnUvMDEtcGFydGljdWxhcmVzLzAxLWNvbnZlcmdlbnRlL2NvbmZpZ3VyYWRvci9uZXctY29uZmlndXJhdG9yL3Jlc291cmNlcy9zY3JpcHRzL19wcmljZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3JhcGYvUkFQRi9WT0RBRk9ORS9taWNyb3NpdGVzLWNidS8wMS1wYXJ0aWN1bGFyZXMvMDEtY29udmVyZ2VudGUvY29uZmlndXJhZG9yL25ldy1jb25maWd1cmF0b3IvcmVzb3VyY2VzL3NjcmlwdHMvX3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3JhcGYvUkFQRi9WT0RBRk9ORS9taWNyb3NpdGVzLWNidS8wMS1wYXJ0aWN1bGFyZXMvMDEtY29udmVyZ2VudGUvY29uZmlndXJhZG9yL25ldy1jb25maWd1cmF0b3IvcmVzb3VyY2VzL3NjcmlwdHMvX3RpY2tldC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3JhcGYvUkFQRi9WT0RBRk9ORS9taWNyb3NpdGVzLWNidS8wMS1wYXJ0aWN1bGFyZXMvMDEtY29udmVyZ2VudGUvY29uZmlndXJhZG9yL25ldy1jb25maWd1cmF0b3IvcmVzb3VyY2VzL3NjcmlwdHMvX3V0aWxzLmpzIiwid2VicGFjazovLy8vVXNlcnMvcmFwZi9SQVBGL1ZPREFGT05FL21pY3Jvc2l0ZXMtY2J1LzAxLXBhcnRpY3VsYXJlcy8wMS1jb252ZXJnZW50ZS9jb25maWd1cmFkb3IvbmV3LWNvbmZpZ3VyYXRvci9yZXNvdXJjZXMvc2NyaXB0cy9fd2FsbG1lcmljLmpzIiwid2VicGFjazovLy8vVXNlcnMvcmFwZi9SQVBGL1ZPREFGT05FL21pY3Jvc2l0ZXMtY2J1LzAxLXBhcnRpY3VsYXJlcy8wMS1jb252ZXJnZW50ZS9jb25maWd1cmFkb3IvbmV3LWNvbmZpZ3VyYXRvci9yZXNvdXJjZXMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovLy8vVXNlcnMvcmFwZi9SQVBGL1ZPREFGT05FL21pY3Jvc2l0ZXMtY2J1LzAxLXBhcnRpY3VsYXJlcy8wMS1jb252ZXJnZW50ZS9jb25maWd1cmFkb3IvbmV3LWNvbmZpZ3VyYXRvci9yZXNvdXJjZXMvc2NyaXB0cy90b29scy5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0cyIsIiRlbGVtZW50IiwidW5kZWZpbmVkIiwic2VsZWN0b3JzIiwiYWNjb3JkaW9uIiwic2hvdyIsImhpZGUiLCJjbGFzc2VzIiwiQ29tbW9uIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwib25DaGFuZ2UiLCJFdmVudCIsImluaXQiLCJoYXNBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJtb2QiLCJmb3JFYWNoIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidXR0b24iLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiYWNjb3JkaW9uU2hvd0NvbnRlbnQiLCJhY2NvcmRpb25IaWRlQ29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhY2NvcmRpb25CaW5kIiwiYnV0dG9uT3BlbmVkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiYWRkZWQiLCJibG9jayIsImNvdW50ZXIiLCJjb3VudGVyTnVtIiwiZGVzY3JpcHRpb24iLCJlbGVtZW50IiwibGVzcyIsIm1vcmUiLCJwcmljZSIsInNpbmdsZSIsInRpY2tldCIsInRpdGxlIiwibWFpbiIsIkNvbmZpZ3VyYXRvciIsImNvbmZpZ3VyYXRvciIsImluZm8iLCJKU09OIiwicGFyc2UiLCJtYXhQb3MiLCJjb250YWluZXIiLCJhY3RpdmVDb3VudGVyIiwiYmluZCIsImFkZEJ1dHRvbnNIYW5kbGVyIiwicmVtb3ZlQnV0dG9uc0hhbmRsZXIiLCJ0aWNrZXRIYW5kbGVyIiwiYWRkQnV0dG9ucyIsIm1lc3NhZ2UiLCJjbG9zZXN0IiwiY29udGFpbnMiLCJ0b0xvd2VyQ2FzZSIsImlubmVyVGV4dCIsImlzTWFpbkVsZW1lbnQiLCJudW0iLCJkaXNwYXRjaEV2ZW50IiwicmVtb3ZlQnV0dG9ucyIsImRvY3VtZW50IiwiZXYiLCJpc01haW4iLCJkYWRkeSIsInJlc2V0Q29uZmlnIiwiZWwiLCJyZW1vdmVFbGVtZW50IiwiYWRkRWxlbWVudCIsInJlc2V0UmVscyIsImVuZW1pZXMiLCJsZW5ndGgiLCJpZCIsInRvUmVtb3ZlIiwibGVzc0J1dHRvbiIsIm1vcmVCdXR0b24iLCJudW1FbGVtZW50IiwiY291bnRlckFjdGlvbiIsIm9wZXJhdGlvbiIsImJ1dHRvbnMiLCJwYXJzZUludCIsImRpc2FibGVkIiwidG9BZGQiLCJyZXNldENvdW50ZXIiLCJhbGxFbHMiLCJhZGRCdXR0b24iLCJyZW1vdmVCdXR0b24iLCJzaG93RWxlbWVudCIsInNpbmdsZURhZGR5IiwiZWxlbWVudHMiLCJyZWxzIiwicmVsIiwic2VsZWN0b3IiLCJkZWZhdWx0QWRkZWQiLCJjb250YWluZXJSYXRlc01vYmlsZSIsIm90aGVyTGluZSIsImRlbGV0ZU90aGVyTGluZSIsImNvbnRhZG9yIiwiYnV0dG9uQWNjb3JkaW9uUmF0ZSIsImJ1dHRvbkFkZExpbmUiLCJsZXRzR08iLCJsYXN0SW5kZXgiLCJjbG9uZXIiLCJpbm5lckhUTUwiLCJjb25zb2xlIiwibG9nIiwiY2xvbmUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImNsb25lTm9kZSIsInJhdGVzQ2xvbmUiLCJsYXN0RWxlbWVudENoaWxkIiwicmF0ZXNDbG9uZXIiLCJidXR0b25BY2NvcmRpb25SYXRlQ2xvbmVkIiwiYnV0dG9uQWRkTGluZVJhdGVDbG9uZWQiLCJpbnB1dHMiLCJsYWJlbHMiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUF0dHJpYnV0ZSIsImlucHV0IiwiaW5kZXgiLCJoYW5kbGVyQWNjb3JkaW9uIiwiaGFuZGxlckFkZExpbmUiLCJzdWJzdHJhY3RsaW5lcyIsImxpbmVBZGl0aW9uYWwiLCJ1bHRpbW9IaWpvIiwiZSIsImFjY29yZGlvblJhdGVzIiwidGFyZ2V0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidG9nZ2xlIiwiZGVsZXRlTGluZSIsImhhbmRsZXJSZW1vdmVMaW5lIiwiQ1JFQVRPUiIsImNyZWF0ZUl0ZW0iLCJjb25maWciLCJuZXdJdGVtIiwiY3JlYXRlRWxlbWVudCIsInNob3VsZEhhc0J1dHRvbiIsIk9iamVjdCIsImtleXMiLCJpbmNsdWRlcyIsImlzUHJvbW8iLCJodG1sIiwibGlzdCIsIml0ZW0iLCJ0aWNrZXRFbGVtZW50Q1NTIiwidGlja2V0SXRlbUpTIiwiY3JlYXRlQmxvY2siLCJjb250ZW50QmxvY2siLCJpZENvbnRlbnQiLCJuZXdCbG9jayIsInN2ZyIsImNhcmRMaXN0Q29udGVudENTUyIsImNvbG9yQmdMaWdoR3JheSIsInRpY2tldEJsb2NrQ29udGVudEpTIiwiY2FyZExpc3RDb250YWluZXJDU1MiLCJ0aWNrZXRCbG9ja0pTIiwibW9kYWwiLCJtb2RhbENsb3NlIiwibW9kYWxDb25maXJtQWNjZXB0IiwibW9kYWxDb25maXJtQ2FuY2VsIiwibW9kYWxDb250ZW50IiwibW9kYWxJdGVtIiwibW9kYWxTaG93Q1NTIiwibW9kYWxJdGVtU2hvd0NTUyIsIm1vZGFsQ29uZmlybSIsIk1PREFMIiwiY29uZmlybSIsInJlc29sdmUiLCJyZWplY3QiLCJjYW5jZWxCdXR0b24iLCJhY2NlcHRCdXR0b24iLCJjbG9zZUJ1dHRvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbG9zZUNvbmZpcm0iLCJQUklDRSIsInRyYW5zZm9ybSIsInBhcnNlRmxvYXQiLCJyZXBsYWNlIiwidG9TdHJpbmciLCJjYWxjQ29udGVudCIsImNvbnRlbnQiLCJjb250ZW50cyIsInN1bVBhcnRpYWxzRnJvbUNvbnRlbnQiLCJ0aWNrZXRCbG9jayIsImluY2x1ZGVUaWNrZXRQcm9kdWN0Iiwic3VtUGFydGlhbFByaWNlcyIsInBhcnRpYWxQcmljZXMiLCJ0aWNrZXRJdGVtIiwicGFydGlhbFByaWNlIiwidG90YWxQcmljZSIsImNhbGNUb3RhbCIsInRvdGFsUHJpY2VzIiwic3VtVG90YWxQcmljZXMiLCJpc05hTiIsIk1hdGgiLCJyb3VuZCIsImluY2x1ZGVWYWx1ZUluTmFtZVNwYWNlIiwiZmluYWxQcmljZSIsInJlY2FsY3VsYXRlIiwibWRkIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJTQ1JPTEwiLCJ0aHJvdHRsZSIsIm1vdmVUaWNrZXQiLCJ0aWNrZXRQb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJtZGRQb3MiLCJjb25maWdQb3MiLCJ0b3AiLCJoZWlnaHQiLCJib3R0b20iLCJmdW5jIiwibGltaXQiLCJsYXN0RnVuYyIsImxhc3RSYW4iLCJjdHgiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJEYXRlIiwibm93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImlkcyIsInByb21vcyIsImJvZHkiLCJjb25maWdCbG9jayIsImNvbmZpZ0VsZW1lbnQiLCJjb25maWdJbml0aWFsUGF5IiwiY29uZmlnTWFpbiIsImRyb3Bkb3duIiwibGkiLCJvdmVybGF5IiwicXVhbnRpdHkiLCJ0aWNrZXRCbG9ja0NvbnRlbnQiLCJ0aWNrZXRDb250ZW50IiwidGlja2V0SW5pdGlhbFBheSIsInRpY2tldEl0ZW1UaXRsZSIsInRpY2tldExpbmsiLCJ0aWNrZXRCdXR0b24iLCJ0aWNrZXRDbG9zZUJ1dHRvbiIsInByb21vIiwiYXR0ciIsIlRpY2tldCIsInRpbWVQaWxlIiwiZWxlbWVudHNBZGRlZCIsImNvbmZpZ0Jsb2NrcyIsImFkZEJsb2NrVG9UaWNrZXQiLCJhZGRJdGVtVG9UaWNrZXQiLCJhZGRQcm9tb3NUb1RpY2tldCIsInR5cGUiLCJtYWluRWxlbWVudE1hbmFnZXIiLCJjb3VudGVyRWxlbWVudE1hbmFnZXIiLCJkZWZhdWx0RWxlbWVudE1hbmFnZXIiLCJjaGVja1RpY2tldENvbnRlbnQiLCJvdmVybGF5QWN0aW9uIiwiaGlkZUl0ZW0iLCJlbGVDb21wYSIsImNvbXBhdGliaWxpdGllcyIsImVuZW1pZXNBY3RpdmF0ZWQiLCJlbmVteSIsInB1c2giLCJ0ZXh0IiwiaXNBZGRlZCIsInBhcmVudEVsZW1lbnQiLCJibG9ja0NvbmZpZyIsImluaXRpYWxQYXkiLCJjbG9zZUJ1dHRvbkNvbnRlbnQiLCJ0aWNrZXRJbml0UGF5Iiwic2hvd0l0ZW0iLCJyYXRlIiwicmF0ZUFjdGl2YXRlZCIsInByb21vQ291bnRlciIsInByb21vQmxvY2siLCJhdXgiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwic2hvd0Jsb2NrIiwicmVjb3VudENoaWxkcmVuIiwiaGlkZUJsb2NrIiwiY291bnRlckNoaWxkcmVuIiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXdQcmljZSIsIm5ld1RpdGxlIiwibmV3RGVzY3JpcHRpb24iLCJ0aWNrZXRPdmVybGF5IiwidGlja2V0Qm9keSIsInRpY2tldERyb3Bkb3duIiwiY2xpY2siLCJjb250ZW50c0Jsb2NrVmlzaWJsZSIsInJhdGVBY3RpdmUiLCJyYXRlT2JqZWN0IiwiY291bnREaWZlcmVudElkcyIsImNvdW50ZXJUcnVlUmVscyIsInNsaWNlIiwiY2hpbGRyZW4iLCJjaGlsZCIsInNob3dUaWNrZXRCdXR0b24iLCJzaG93VGlja2V0TGluayIsImhyZWYiLCJuZXdIcmVmIiwibGluayIsImlkVGlja2V0SXRlbSIsIml0ZW1Db25maWciLCJQQVRIX01JQ1JPU0lURSIsImdsb2JhbE1vZHVsZXMiLCJfY29tbW9uIiwiX2NvbmZpZ3VyYXRvciIsIl90aWNrZXQiLCJ1dGlscyIsInNjb3BlIiwibW9kdWxlcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIm1vZHVsZXNBdHRyIiwic3BsaXQiLCJpbnN0YW5jZSIsImNhdGNoIiwiZXJyb3IiLCJjb21wYW55TmFtZSIsImtleSIsInZhbHVlIiwiaXNOYW1lc3BhY2VVbmRlZmluZWQiLCJyZWdpc3Rlck5hbWVzcGFjZSIsInNhdmVJbnRvTmFtZXNwYWNlIiwidGlja2V0TGlzdCIsImFyckNsYXNzIiwidmlzaWJsZUVscyIsImtleU9iamVjdCIsImluZGV4T2YiLCJzYXZlQ29udGVudEludG9OYW1lc3BhY2UiLCJ2ZmVzIiwidG9vbHMiLCJvblN0eWxlc1JlYWR5Iiwid2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImlzRGVza3RvcCIsImlzVGFibGV0IiwiaXNNb2JpbGUiLCJleCIsImNzc0xvYWRlZCIsImNzc01haW4iLCJfdmYiLCJfdXRpbHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFD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a0osR0FBdkIsRUFBNEJDLE1BQTVCLENBQW1DcFYsSUFBbkMsQ0FBd0NxRCxRQUFRLENBQUM3QyxhQUFULENBQXVCLGtCQUF2QixDQUF4Qzs7QUFDQTZDLFVBQVEsQ0FBQzdDLGFBQVQsQ0FBdUIsa0JBQXZCLEVBQTJDcUcsZUFBM0MsQ0FBMkQsT0FBM0Q7QUFDQW1PLElBQUUsQ0FBQ0MsU0FBSCxHQUFlLElBQWY7QUFDQUQsSUFBRSxDQUFDUCxhQUFILEdBTkcsQ0FPUDtBQUNIOztBQUVjTyxpRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9SQVBGL1ZPREFGT05FL21pY3Jvc2l0ZXMtY2J1LzAxLXBhcnRpY3VsYXJlcy8wMS1jb252ZXJnZW50ZS9jb25maWd1cmFkb3IvbmV3LWNvbmZpZ3VyYXRvci9yZXNvdXJjZXMvc2NyaXB0cy9tYWluLmpzXCIpO1xuIiwiY29uc3QgZGVmYXVsdHMgPSB7XHJcbiAgICAkZWxlbWVudDogdW5kZWZpbmVkLFxyXG4gICAgc2VsZWN0b3JzOiB7XHJcbiAgICAgICAgYWNjb3JkaW9uOiB7XHJcbiAgICAgICAgICAgIHNob3c6ICcuanMtY29tbW9uLWFjY29yZGlvbi1zaG93JyxcclxuICAgICAgICAgICAgaGlkZTogJy5qcy1jb21tb24tYWNjb3JkaW9uLWhpZGUnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNsYXNzZXM6IHtcclxuICAgICAgICBoaWRlOiAnaGlkZSdcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvbW1vbi5cclxuICpcclxuICogQG1vZHVsZSBDb21tb25cclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgLSBzcGVjaWZpZXMgdGhlIGNvbmZpZ3VyYXRpb25zIGZvciB0aGUgbW9kdWxlLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMgPSB7fSkge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSBwcm9wZXJ0aWVzLiRlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3JzID0gZGVmYXVsdHMuc2VsZWN0b3JzO1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IGRlZmF1bHRzLmNsYXNzZXM7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IG5ldyBFdmVudCgndmZlczpjaGFuZ2VkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIHRoZSBtb2R1bGUuXHJcbiAgICAgKlxyXG4gICAgICogQGZ1bmN0aW9uIGluaXRcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGlmKCF0aGlzLiRlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1jb21tb24tZnVuY3Rpb24nKSkge1xyXG4gICAgICAgICAgICB0aHJvdyAnRmFsdGEgZWwgYXRyaWJ1dG8gXCJkYXRhLWNvbW1vbi1mdW5jdGlvblwiIGVuIGVsIGVsZW1lbnRvLic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2godGhpcy4kZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29tbW9uLWZ1bmN0aW9uJykpIHtcclxuICAgICAgICAgICAgY2FzZSAnYWNjb3JkaW9uJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjb3JkaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogQWNjb3JkaW9uIG1vZHVsZVxyXG4gICAgICpcclxuICAgICAqIEBmdW5jdGlvbiBhY2NvcmRpb25cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBhY2NvcmRpb24oKSB7XHJcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcy4kZWxlbWVudDtcclxuXHJcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG1vZC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jb21tb24tYWNjb3JkaW9uPVwiYnV0dG9uXCJdJyksIGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFidXR0b24uaGFzQXR0cmlidXRlKCdkYXRhLWluaXRpYWxpemVkJykpIHtcclxuICAgICAgICAgICAgICAgIGlmKCFidXR0b24uaGFzQXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAnQUNDT1JESU9OIEVSUk9SISBFbCBlbGVtZW50byBubyB0aWVuZSBlbCBhdHJpYnV0byBcImFyaWEtY29udHJvbHNcIiBjb24gZWwgaWQgZGUgc3UgY29udGVuaWRvLic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKCFtb2QucXVlcnlTZWxlY3RvcihgIyR7YnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpfWApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgYEFDQ09SRElPTiBFUlJPUiEgRWwgZWxlbWVudG8gY3V5byBpZCBlcyAke21vZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKX0gbm8gZXhpc3RlLmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIWJ1dHRvbi5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmFjY29yZGlvbi5zaG93KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGBBQ0NPUkRJT04gRVJST1IhIERlYmUgaW5jbHVpciBlbiBlbCBib3TDs24gdW4gZWxlbWVudG8gY29uIGxhIGNsYXNlICR7dGhpcy5zZWxlY3RvcnMuYWNjb3JkaW9uLnNob3d9IHBhcmEgaWRlbnRpZmljYXIgZWwgdGV4dG8gZGUgYXBlcnR1cmFgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKCFidXR0b24ucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5hY2NvcmRpb24uaGlkZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBgQUNDT1JESU9OIEVSUk9SISBEZWJlIGluY2x1aXIgZW4gZWwgYm90w7NuIHVuIGVsZW1lbnRvIGNvbiBsYSBjbGFzZSAke3RoaXMuc2VsZWN0b3JzLmFjY29yZGlvbi5oaWRlfSBwYXJhIGlkZW50aWZpY2FyIGVsIHRleHRvIGRlIGNpZXJyZWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pbml0aWFsaXplZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uaGFzQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPyBudWxsIDogYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvcmRpb25TaG93Q29udGVudChidXR0b24pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY29yZGlvbkhpZGVDb250ZW50KGJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5hY2NvcmRpb25CaW5kKG1vZCwgYnV0dG9uKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFjY29yZGlvbiBoYW5kbGVyLlxyXG4gICAgICpcclxuICAgICAqIEBmdW5jdGlvbiBhY2NvcmRpb25CaW5kXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcclxuICAgICAqL1xyXG4gICAgYWNjb3JkaW9uQmluZChtb2QsIGJ1dHRvbikge1xyXG4gICAgICAgIGxldCBidXR0b25PcGVuZWQgPSBtb2QucXVlcnlTZWxlY3RvcignW2RhdGEtY29tbW9uLWFjY29yZGlvbj1cImJ1dHRvblwiXVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXScpO1xyXG5cclxuICAgICAgICBidXR0b25PcGVuZWQgJiYgYnV0dG9uT3BlbmVkICE9PSBidXR0b24gPyB0aGlzLmFjY29yZGlvbkhpZGVDb250ZW50KGJ1dHRvbk9wZW5lZCkgOiBudWxsO1xyXG5cclxuICAgICAgICBpZihidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICB0aGlzLmFjY29yZGlvbkhpZGVDb250ZW50KGJ1dHRvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hY2NvcmRpb25TaG93Q29udGVudChidXR0b24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgY29udGVudCBmcm9tIGFuIGl0ZW0gZnJvbSBhY2NvcmRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQGZ1bmN0aW9uIGFjY29yZGlvblNob3dDb250ZW50XHJcbiAgICAgKiBAcGFyYW0geyBIVE1MRWxlbWVudCB9IGJ1dHRvbiAtIGl0ZW0gZnJvbSBhY2NvcmRpb25cclxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIGFjY29yZGlvblNob3dDb250ZW50KGJ1dHRvbikge1xyXG4gICAgICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmFjY29yZGlvbi5oaWRlKS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5oaWRlKTtcclxuICAgICAgICBidXR0b24ucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5hY2NvcmRpb24uc2hvdykuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuaGlkZSk7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyl9YCkuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpfWApLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmhpZGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEhpZGUgY29udGVudCBmcm9tIGFuIGl0ZW0gZnJvbSBhY2NvcmRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQGZ1bmN0aW9uIGFjY29yZGlvbkhpZGVDb250ZW50XHJcbiAgICAgKiBAcGFyYW0geyBIVE1MRWxlbWVudCB9IGJ1dHRvbiAtIGl0ZW0gZnJvbSBhY2NvcmRpb25cclxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIGFjY29yZGlvbkhpZGVDb250ZW50KGJ1dHRvbikge1xyXG4gICAgICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmFjY29yZGlvbi5zaG93KS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5oaWRlKTtcclxuICAgICAgICBidXR0b24ucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5hY2NvcmRpb24uaGlkZSkuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuaGlkZSk7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpfWApLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpfWApLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmhpZGUpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxuICogRWwgY29uZmlndXJhZG9yIHBvciBkZW50cm8gdGllbmUgdHJlcyB0aXBvcyBkZSBjb21wb25lbnRlczpcbiAqICAxLiBFbCBjb21wb25lbnRlIHByaW5jaXBhbCBxdWUgaGFjZSBxdWUgc2UgbW9kaWZpcXVlbiBlbCByZXN0byBkZSBlbGVtZW50b3MuXG4gKiAgMi4gRWwgY29tcG9uZW50ZSBxdWUgZXMgdW4gZWxlbWVudG8gZW4gc2kgcXVlIHNlIGHDsWFkZSBvIHNlIHF1aXRhIGRpcmVjdGFtZW50ZS5cbiAqICAzLiBFTCBjb21wb25lbnRlIGNvdW50ZXIgcXVlIGVzIHVuIGNvbnRhZG9yIGRlIGVsZW1lbnRvcy5cbiAqL1xuXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgICAkZWxlbWVudDogdW5kZWZpbmVkLFxuICAgIHNlbGVjdG9yczoge1xuICAgICAgICBhZGQ6ICcuanMtY29uZmlndXJhdG9yLWFkZCcsXG4gICAgICAgIGFkZGVkOiAnLmFkZGVkJyxcbiAgICAgICAgYnV0dG9uOiAnLmpzLWNhcmQtc2VsZWN0b3ItYnV0dG9uJyxcbiAgICAgICAgYmxvY2s6ICcuanMtY29uZmlndXJhdG9yLWJsb2NrJyxcbiAgICAgICAgY291bnRlcjogJy5qcy1jb25maWd1cmF0b3ItY291bnRlcicsXG4gICAgICAgIGNvdW50ZXJOdW06ICcuanMtY291bnRlci1udW0nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJy5qcy1kZXNjcmlwdGlvbicsXG4gICAgICAgIGVsZW1lbnQ6ICcuanMtY29uZmlndXJhdG9yLWVsZW1lbnQnLFxuICAgICAgICBsZXNzOiAnLmpzLWNvdW50ZXItbGVzcycsXG4gICAgICAgIG1vcmU6ICcuanMtY291bnRlci1tb3JlJyxcbiAgICAgICAgcHJpY2U6ICcuanMtcHJpY2UnLFxuICAgICAgICByZW1vdmU6ICcuanMtY29uZmlndXJhdG9yLXJlbW92ZScsXG4gICAgICAgIHNpbmdsZTogJy5qcy1jb25maWd1cmF0b3Itc2luZ2xlLXZpZXdlZCcsXG4gICAgICAgIHRpY2tldDogJy5qcy1jb25maWd1cmF0b3ItdGlja2V0JyxcbiAgICAgICAgdGl0bGU6ICcuanMtdGl0bGUnXG4gICAgfSxcbiAgICBjbGFzc2VzOiB7XG4gICAgICAgIGFkZGVkOiAnYWRkZWQnLFxuICAgICAgICBjb3VudGVyOiAnanMtY29uZmlndXJhdG9yLWNvdW50ZXInLFxuICAgICAgICBoaWRlOiAnaGlkZScsXG4gICAgICAgIGFkZDogJ2FkZCcsXG4gICAgICAgIG1haW46ICdqcy1jb25maWd1cmF0b3ItbWFpbicsXG5cbiAgICB9LFxuXG59XG5cblxuXG4vKipcbiAqIENvbmZpZ3VyYXRvci5cbiAqXG4gKiBAbW9kdWxlIENvbmZpZ3VyYXRvclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgLSBzcGVjaWZpZXMgdGhlIGNvbmZpZ3VyYXRpb25zIGZvciB0aGUgbW9kdWxlLlxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlndXJhdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzID0ge30pIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0b3IgPSBwcm9wZXJ0aWVzLiRlbGVtZW50O1xuICAgICAgICB0aGlzLmluZm8gPSBKU09OLnBhcnNlKHByb3BlcnRpZXMuaW5mbyk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3JzID0gZGVmYXVsdHMuc2VsZWN0b3JzO1xuICAgICAgICB0aGlzLmNsYXNzZXMgPSBkZWZhdWx0cy5jbGFzc2VzO1xuICAgICAgICB0aGlzLm1heFBvcyA9IDM7XG5cbiAgICAgICAgLy9FdmVudHNcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IG5ldyBFdmVudCgndmZtczpjaGFuZ2UnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHRoZSBtb2R1bGUuXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gaW5pdFxuICAgICAqXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBpbml0KCkge1xuXG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG5cbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG1vZC5jb25maWd1cmF0b3IucXVlcnlTZWxlY3RvckFsbChtb2Quc2VsZWN0b3JzLmNvdW50ZXIpLCBjb250YWluZXIgPT4ge1xuICAgICAgICAgICAgbW9kLmFjdGl2ZUNvdW50ZXIoY29udGFpbmVyKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBtb2QuYmluZCgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWN0aXZlIGJhc2ljIGZ1bmN0aW9uYWxpdHkgZnJvbSBjb25maWcuXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gYmluZFxuICAgICAqXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBiaW5kKCkge1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbnNIYW5kbGVyKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlQnV0dG9uc0hhbmRsZXIoKTtcbiAgICAgICAgdGhpcy50aWNrZXRIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGJ1dHRvbnMgaGFuZGxlclxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGFkZEJ1dHRvbnNIYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuXG4gICAgYWRkQnV0dG9uc0hhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbnMgPSBtb2QuY29uZmlndXJhdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoYCR7bW9kLnNlbGVjdG9ycy5lbGVtZW50fSAke21vZC5zZWxlY3RvcnMuYWRkfWApO1xuXG4gICAgICAgIFtdLmZvckVhY2guY2FsbChhZGRCdXR0b25zLCBidXR0b24gPT4ge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIlwiO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBidXR0b24uY2xvc2VzdChtb2Quc2VsZWN0b3JzLmVsZW1lbnQpO1xuXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKG1vZC5zZWxlY3RvcnMuYmxvY2spKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSGFzIGHDsWFkaWRvIDEgJHsoSlNPTi5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb25maWd1cmF0b3ItY29uZmlnJykpLnRpdGxlKS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBIYXMgYcOxYWRpZG8gJHtlbGVtZW50LnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy50aXRsZSkuaW5uZXJUZXh0fWA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIG1vZC5vbkNoYW5nZS5ibG9jayA9IGVsZW1lbnQuY2xvc2VzdChtb2Quc2VsZWN0b3JzLmJsb2NrKTtcbiAgICAgICAgICAgICAgICBtb2Qub25DaGFuZ2UuaXNNYWluRWxlbWVudCA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKG1vZC5jbGFzc2VzLm1haW4pO1xuICAgICAgICAgICAgICAgIG1vZC5vbkNoYW5nZS5udW0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChtb2Qub25DaGFuZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBidXR0b25zIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvbiByZW1vdmVCdXR0b25zSGFuZGxlclxuICAgICAqXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICByZW1vdmVCdXR0b25zSGFuZGxlcigpIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcbiAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9ucyA9IG1vZC5jb25maWd1cmF0b3IucXVlcnlTZWxlY3RvckFsbChgJHttb2Quc2VsZWN0b3JzLmVsZW1lbnR9ICR7bW9kLnNlbGVjdG9ycy5yZW1vdmV9YCk7XG5cbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKHJlbW92ZUJ1dHRvbnMsIGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBidXR0b24uY2xvc2VzdChtb2Quc2VsZWN0b3JzLmVsZW1lbnQpO1xuXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKG1vZC5zZWxlY3RvcnMuYmxvY2spKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSGFzIGVsaW1pbmFkbyAxICR7KEpTT04ucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29uZmlndXJhdG9yLWNvbmZpZycpKS50aXRsZSkudG9Mb3dlckNhc2UoKX1gO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSGFzIGVsaW1pbmFkbyAke2VsZW1lbnQucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLnRpdGxlKS5pbm5lclRleHR9YDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtb2Qub25DaGFuZ2UuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLmJsb2NrID0gZWxlbWVudC5jbG9zZXN0KG1vZC5zZWxlY3RvcnMuYmxvY2spO1xuICAgICAgICAgICAgICAgIG1vZC5vbkNoYW5nZS5pc01haW5FbGVtZW50ID0gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMobW9kLmNsYXNzZXMubWFpbik7XG4gICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLm51bSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBtb2Qub25DaGFuZ2UubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG1vZC5vbkNoYW5nZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGlja2V0IGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvbiB0aWNrZXRIYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHRpY2tldEhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmZtcy1qcz1cIl90aWNrZXRcIl0nKS5hZGRFdmVudExpc3RlbmVyKCd2Zm1zOmNoYW5nZScsIGV2ID0+IHtcbiAgICAgICAgICAgIGxldCBpc01haW4gPSBldi5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhtb2QuY2xhc3Nlcy5tYWluKTtcblxuICAgICAgICAgICAgaWYgKGlzTWFpbikge1xuICAgICAgICAgICAgICAgIGxldCBkYWRkeSA9IGV2LmVsZW1lbnQuY2xvc2VzdChtb2Quc2VsZWN0b3JzLmJsb2NrKTtcblxuICAgICAgICAgICAgICAgIG1vZC5yZXNldENvbmZpZygpO1xuXG4gICAgICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGRhZGR5LnF1ZXJ5U2VsZWN0b3JBbGwobW9kLnNlbGVjdG9ycy5lbGVtZW50KSwgZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtb2QucmVtb3ZlRWxlbWVudChlbCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBtb2QuYWRkRWxlbWVudChldi5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICBtb2QucmVzZXRSZWxzKGV2LmVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYuZW5lbWllcyAmJiBldi5lbmVtaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZXYuZW5lbWllcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZC5yZW1vdmVFbGVtZW50KG1vZC5jb25maWd1cmF0b3IucXVlcnlTZWxlY3RvcignIycgKyBpZCkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZXYudG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kLnJlbW92ZUVsZW1lbnQoZXYuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kLmFkZEVsZW1lbnQoZXYuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY291bnRlciBlbGVtZW50cyBmdW5jdGlvbmFsaXR5XG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gYWN0aXZlQ291bnRlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gY291bnRlclxuICAgICAqXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBhY3RpdmVDb3VudGVyKGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBsZXQgbGVzc0J1dHRvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMubGVzcyk7XG4gICAgICAgIGxldCBtb3JlQnV0dG9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5tb3JlKTtcbiAgICAgICAgbGV0IG51bUVsZW1lbnQgPSBjb250YWluZXIucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLmNvdW50ZXJOdW0pO1xuXG4gICAgICAgIGxlc3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb2QuY291bnRlckFjdGlvbignbGVzcycsIG51bUVsZW1lbnQsIGNvbnRhaW5lciwge1xuICAgICAgICAgICAgICAgIGxlc3M6IGxlc3NCdXR0b24sXG4gICAgICAgICAgICAgICAgbW9yZTogbW9yZUJ1dHRvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1vcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb2QuY291bnRlckFjdGlvbignbW9yZScsIG51bUVsZW1lbnQsIGNvbnRhaW5lciwge1xuICAgICAgICAgICAgICAgIGxlc3M6IGxlc3NCdXR0b24sXG4gICAgICAgICAgICAgICAgbW9yZTogbW9yZUJ1dHRvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxpbmcgY291bnRlciBhY3Rpb25cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvbiBhY3RpdmVDb3VudGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3BlcmF0aW9uIC0gbGVzcyBvciBtb3JlIG9wZXJhdGlvblxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG51bUVsZW1lbnQgLSBjb3VudGVyIG51bSBIVE1MIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgLSBjb3VudGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGJ1dHRvbnMgLSBPYmplY3Qgd2l0aCBidXR0b25zIHRvIGluY3JlbWVudCBhbmQgZGVjcmVhc2UgY291bnRlciBudW1iZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgY291bnRlckFjdGlvbihvcGVyYXRpb24sIG51bUVsZW1lbnQsIGNvbnRhaW5lciwgYnV0dG9ucykge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBsZXQgbnVtID0gcGFyc2VJbnQobnVtRWxlbWVudC5pbm5lclRleHQpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuYWRkZWQpO1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICdsZXNzJyAmJiBudW0gPiAwKSB7XG4gICAgICAgICAgICBtb2Qub25DaGFuZ2UubnVtID0gbnVtO1xuXG4gICAgICAgICAgICBudW0tLTtcbiAgICAgICAgICAgIG51bUVsZW1lbnQuaW5uZXJUZXh0ID0gbnVtO1xuICAgICAgICAgICAgYnV0dG9ucy5tb3JlLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmhpZGUpO1xuICAgICAgICAgICAgYnV0dG9ucy5tb3JlLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIG1vZC5vbkNoYW5nZS50b0FkZCA9IGZhbHNlO1xuICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLm1lc3NhZ2UgPSAnSGFzIGVsaW1pbmFkbyAxIGzDrW5lYSBhZGljaW9uYWwnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnbW9yZScgJiYgbnVtIDwgdGhpcy5tYXhQb3MpIHtcblxuICAgICAgICAgICAgbnVtKys7XG4gICAgICAgICAgICBudW1FbGVtZW50LmlubmVyVGV4dCA9IG51bTtcbiAgICAgICAgICAgIGJ1dHRvbnMubGVzcy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgICAgIGJ1dHRvbnMubGVzcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBtb2Qub25DaGFuZ2UubnVtID0gbnVtO1xuICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLnRvQWRkID0gdHJ1ZTtcbiAgICAgICAgICAgIG1vZC5vbkNoYW5nZS5tZXNzYWdlID0gJ0hhcyBhw7FhZGlkbyAxIGzDrW5lYSBhZGljaW9uYWwnO1xuICAgICAgICB9XG5cbiAgICAgICAgbW9kLm9uQ2hhbmdlLmVsZW1lbnQgPSBjb250YWluZXI7XG4gICAgICAgIG1vZC5vbkNoYW5nZS5ibG9jayA9IGNvbnRhaW5lcjtcbiAgICAgICAgbW9kLm9uQ2hhbmdlLmlzTWFpbkVsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobW9kLm9uQ2hhbmdlKTtcblxuICAgICAgICBpZiAobnVtIDw9IDAgJiYgIWJ1dHRvbnMubGVzcy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmhpZGUpKSB7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuYWRkZWQpO1xuICAgICAgICAgICAgYnV0dG9ucy5sZXNzLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmhpZGUpO1xuICAgICAgICAgICAgYnV0dG9ucy5sZXNzLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICB9IGVsc2UgaWYgKG51bSA+PSB0aGlzLm1heFBvcyAmJiAhYnV0dG9ucy5tb3JlLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuaGlkZSkpIHtcbiAgICAgICAgICAgIGJ1dHRvbnMubW9yZS5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgICAgIGJ1dHRvbnMubW9yZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY291bnRlciB0byBpbml0XG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gcmVzZXRDb3VudGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb3VudGVyIC0gY291bnRlciBIVE1MIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgcmVzZXRDb3VudGVyKGNvdW50ZXIpIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcbiAgICAgICAgY29uc3QgbGVzcyA9IGNvdW50ZXIucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLmxlc3MpO1xuICAgICAgICBjb25zdCBtb3JlID0gY291bnRlci5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMubW9yZSk7XG5cbiAgICAgICAgY291bnRlci5jbGFzc0xpc3QucmVtb3ZlKG1vZC5jbGFzc2VzLmFkZGVkKTtcbiAgICAgICAgY291bnRlci5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMuY291bnRlck51bSkuaW5uZXJUZXh0ID0gXCIwXCI7XG5cbiAgICAgICAgbGVzcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGxlc3MuY2xhc3NMaXN0LmFkZChtb2QuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgbW9yZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBtb3JlLmNsYXNzTGlzdC5yZW1vdmUobW9kLmNsYXNzZXMuaGlkZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGFsbCBjb25maWcgZWxlbWVudHMgdG8gZGVmYXVsdFxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIHJlc2V0Q29uZmlnXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlc2V0Q29uZmlnKCkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBjb25zdCBhbGxFbHMgPSBtb2QuY29uZmlndXJhdG9yLnF1ZXJ5U2VsZWN0b3JBbGwobW9kLnNlbGVjdG9ycy5lbGVtZW50KTtcblxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoYWxsRWxzLCBlbCA9PiB7XG4gICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKG1vZC5jbGFzc2VzLmNvdW50ZXIpKSB7XG4gICAgICAgICAgICAgICAgbW9kLnJlc2V0Q291bnRlcihlbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vZC5yZW1vdmVFbGVtZW50KGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGFkZGVkIGNsYXNzZXMgZnJvbSBhbiBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gYWRkRWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIGVsZW1lbnQgZnJvbSBjb25maWdcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgYWRkRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG4gICAgICAgIGxldCBhZGRCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5hZGQpO1xuICAgICAgICBsZXQgcmVtb3ZlQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMucmVtb3ZlKTtcblxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobW9kLmNsYXNzZXMuYWRkZWQpO1xuXG4gICAgICAgIGlmIChhZGRCdXR0b24pIHtcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKG1vZC5jbGFzc2VzLmhpZGUpO1xuICAgICAgICAgICAgYWRkQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZW1vdmVCdXR0b24pIHtcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKG1vZC5jbGFzc2VzLmhpZGUpO1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvbiBzaG93RWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIGVsZW1lbnQgZnJvbSBjb25maWdcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgc2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBsZXQgc2luZ2xlRGFkZHkgPSBlbGVtZW50LmNsb3Nlc3QobW9kLnNlbGVjdG9ycy5zaW5nbGUpO1xuXG4gICAgICAgIGlmIChzaW5nbGVEYWRkeSkge1xuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKHNpbmdsZURhZGR5LnF1ZXJ5U2VsZWN0b3JBbGwobW9kLnNlbGVjdG9ycy5lbGVtZW50KSwgZWwgPT4ge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQobW9kLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgICAgICAgICAgbW9kLnJlbW92ZUVsZW1lbnQoZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmhpZGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gcmVtb3ZlRWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIGVsZW1lbnQgZnJvbSBjb25maWdcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgcmVtb3ZlRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGxldCBhZGRCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuYWRkKTtcbiAgICAgICAgbGV0IHJlbW92ZUJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5yZW1vdmUpO1xuXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuYWRkZWQpO1xuXG4gICAgICAgIGlmIChyZW1vdmVCdXR0b24pIHtcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWRkQnV0dG9uKSB7XG4gICAgICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgICAgICBhZGRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IG9wdGlvbnMgcmVsYXRpb25hdGVkIHdpdGggbWFpbiBlbGVtZW50IGZyb20gY29uZmlnXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gcmVzZXRSZWxzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gZWxlbWVudCBmcm9tIGNvbmZpZ1xuICAgICAqXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICByZXNldFJlbHMoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuXG4gICAgICAgIG1vZC5pbmZvLmVsZW1lbnRzW2VsZW1lbnQuaWRdLnJlbHMuZm9yRWFjaChyZWwgPT4ge1xuICAgICAgICAgICAgaWYgKHJlbC5zZWxlY3RvciAmJiByZWwuc2VsZWN0b3IgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWwgPSBtb2QuY29uZmlndXJhdG9yLnF1ZXJ5U2VsZWN0b3IoYCMke3JlbC5zZWxlY3Rvcn1gKTtcblxuICAgICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgICAgICBtb2Quc2hvd0VsZW1lbnQoZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWwuZGVmYXVsdEFkZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2QuYWRkRWxlbWVudChlbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5cblxuXG5cbiAgICAvLyByZWZlcmVuY2UgdG8gYSBsaXN0XG4gICAgY29uc3QgY29udGFpbmVyUmF0ZXNNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12Zm1zLWpzPVwiX0FkaXRpb25hbExpbmVzXCJdJyk7XG4gICAgY29uc3Qgb3RoZXJMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmZtcy1qcz1cIl9BZGRPdGhlckxpbmVcIl0nKTtcbiAgICBjb25zdCBkZWxldGVPdGhlckxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12Zm1zLWpzPVwiX3JlbW92ZU90aGVyTGluZVwiXScpO1xuICAgIGNvbnN0IGNvbnRhZG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmZtcy1qcz1cIl9hZGl0aW9uYWxDb3VudFwiXScpO1xuICAgIGNvbnN0IGJ1dHRvbkFjY29yZGlvblJhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12Zm1zLWpzPVwiX2J1dHRvbkFjY29yZGlvblJhdGVcIl0nKTtcbiAgICBjb25zdCBidXR0b25BZGRMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmZtcy1qcz1cIl9idXR0b25BZGRMaW5lXCJdJyk7XG5cblxuICAgIGxldCBsZXRzR08gPSAxO1xuICAgIGxldCBsYXN0SW5kZXggPSAwO1xuXG5cbiAgICAvLyBGdW5jacOzbiBjbG9uYXIgZWxlbWVudG8gYWwgY2xpY2thciBlbiAnKydcblxuICAgIGZ1bmN0aW9uIGNsb25lcigpIHtcblxuICAgICAgICBpZiAoY29udGFkb3IuaW5uZXJIVE1MID49IDUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOTyBQVUVERVMgTcOBUycpO1xuICAgICAgICAgICAgb3RoZXJMaW5lLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNsb25lID0gY29udGFpbmVyUmF0ZXNNb2JpbGUuZmlyc3RFbGVtZW50Q2hpbGQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgbGV0IHJhdGVzQ2xvbmUgPSBjbG9uZS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgbGV0IHJhdGVzQ2xvbmVyID0gcmF0ZXNDbG9uZS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgbGV0IGJ1dHRvbkFjY29yZGlvblJhdGVDbG9uZWQgPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS12Zm1zLWpzPVwiX2J1dHRvbkFjY29yZGlvblJhdGVcIl0nKTtcbiAgICAgICAgICAgIGxldCBidXR0b25BZGRMaW5lUmF0ZUNsb25lZCA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZmbXMtanM9XCJfYnV0dG9uQWRkTGluZVwiXScpO1xuICAgICAgICAgICAgbGV0IGlucHV0cyA9IFsuLi5yYXRlc0Nsb25lci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12Zm1zLWpzPVwiX2lucHV0UmF0ZVwiXScpXTtcbiAgICAgICAgICAgIGxldCBsYWJlbHMgPSAgWy4uLnJhdGVzQ2xvbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZmbXMtanM9XCJfbGFiZWxSYXRlXCJdJyldO1xuXG5cbiAgICAgICAgICAgIGNvbnRhZG9yLmlubmVySFRNTCA9ICsrbGV0c0dPO1xuICAgICAgICAgICAgY29udGFpbmVyUmF0ZXNNb2JpbGUuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgICAgICAgY2xvbmUuY2xhc3NMaXN0LmFkZCgndmZlcy1tdC0nKTtcbiAgICAgICAgICAgIHJhdGVzQ2xvbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIGRlbGV0ZU90aGVyTGluZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywncmFkaW8nICsgbGFzdEluZGV4KTtcbiAgICAgICAgICAgICAgICBsYWJlbHNbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZm9yJywncmFkaW8nICsgbGFzdEluZGV4KTtcbiAgICAgICAgICAgICAgICBsYXN0SW5kZXgrKyA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnV0dG9uQWNjb3JkaW9uUmF0ZUNsb25lZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXJBY2NvcmRpb24sIGZhbHNlKTtcbiAgICAgICAgICAgIGJ1dHRvbkFkZExpbmVSYXRlQ2xvbmVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlckFkZExpbmUsIGZhbHNlKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRnVuY2nDs24gZWxpbWluYXIgbGEgw7psdGltYSBsaW5lYSBhw7FhZGlkYSBhbCBjbGlja2FyIGVuICctJ1xuXG4gICAgZnVuY3Rpb24gc3Vic3RyYWN0bGluZXMoKXtcbiAgICAgICAgbGV0IGNvbnRhZG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmZtcy1qcz1cIl9hZGl0aW9uYWxDb3VudFwiXScpO1xuICAgICAgICBsZXQgbGluZUFkaXRpb25hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZmbXMtanM9XCJfQWRpdGlvbmFsTGluZXNcIl0nKTtcbiAgICAgICAgbGV0IHVsdGltb0hpam8gPSBsaW5lQWRpdGlvbmFsLmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAgICAgaWYoY29udGFkb3IuaW5uZXJIVE1MIDw9IDEpe1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTk8gUFVFREVTIE1FTk9TJyk7XG4gICAgICAgICAgICBkZWxldGVPdGhlckxpbmUuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG90aGVyTGluZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICBjb250YWRvci5pbm5lckhUTUwgPSAtLWxldHNHTztcbiAgICAgICAgICAgIHVsdGltb0hpam8ucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIEZ1bmNpw7NuIHBhcmEgYWNvcmRlw7NuLCBtb3ZpbWllbnRvIGRlbCAnXicgeSBtdWVzdHJhIGRlIGxpbmVhcy5cblxuICAgIGZ1bmN0aW9uIGhhbmRsZXJBY2NvcmRpb24oZSkge1xuICAgICAgICAgICBsZXQgYWNjb3JkaW9uUmF0ZXMgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgIGUudGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgICAgICAgZS50YXJnZXQubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICAgICAgIGFjY29yZGlvblJhdGVzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgICAgICB9XG5cbiAgICAvLyBGdW5jacOzbiBwYXJhIEHDsWFkaXIgTMOtbmVhXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVyQWRkTGluZShlKSB7XG4gICAgICAgICAgICBsZXQgZGVsZXRlTGluZSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGRlbGV0ZUxpbmUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgZGVsZXRlTGluZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB9XG5cbiAgICAvLyBGdW5jacOzbiBwYXJhIFJlbW92ZSBMw61uZWFcblxuICAgIGZ1bmN0aW9uIGhhbmRsZXJSZW1vdmVMaW5lKGUpIHtcbiAgICAgICAgICAgIGxldCBkZWxldGVMaW5lID0gZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgZGVsZXRlTGluZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICBkZWxldGVMaW5lLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIH1cblxuXG4gICAgYnV0dG9uQWNjb3JkaW9uUmF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXJBY2NvcmRpb24sIGZhbHNlKTtcbiAgICBidXR0b25BZGRMaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlckFkZExpbmUsIGZhbHNlKTtcbiAgICBvdGhlckxpbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9uZXIpO1xuICAgIGRlbGV0ZU90aGVyTGluZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1YnN0cmFjdGxpbmVzKTtcblxuXG4iLCJjb25zdCBkZWZhdWx0cyA9IHtcbiAgICBcInNlbGVjdG9yc1wiOiB7XG4gICAgICAgIFwibGlcIjogXCIuanMtbGlcIixcbiAgICAgICAgXCJudW1cIjogXCIuanMtY291bnRlci1udW1cIixcbiAgICAgICAgXCJwcmljZVwiOiBcIi5qcy1wcmljZVwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiLmpzLXRpdGxlXCIsXG4gICAgfSxcbiAgICBcImNsYXNzZXNcIjoge1xuICAgICAgICBcImNhcmRMaXN0Q29udGFpbmVyQ1NTXCI6IFwidmZlcy1jYXJkX19saXN0LWNvbnRhaW5lclwiLFxuICAgICAgICBcImNhcmRMaXN0Q29udGVudENTU1wiOiBcInZmZXMtY2FyZF9fbGlzdC1jb250ZW50XCIsXG4gICAgICAgIFwiY29sb3JCZ0xpZ2hHcmF5XCI6IFwidmZlcy1jb2xvdXJzLWJnLWxpZ2h0LWdyYXlcIixcbiAgICAgICAgXCJoaWRlXCI6IFwiaGlkZVwiLFxuICAgICAgICBcInRpY2tldEJsb2NrSlNcIjogXCJqcy10aWNrZXQtYmxvY2tcIixcbiAgICAgICAgXCJ0aWNrZXRCbG9ja0NvbnRlbnRKU1wiOiBcImpzLXRpY2tldC1ibG9jay1jb250ZW50XCIsXG4gICAgICAgIFwidGlja2V0RWxlbWVudENTU1wiOiBcInZmbXMtdGlja2V0X19lbGVtZW50XCIsXG4gICAgICAgIFwidGlja2V0SXRlbUpTXCI6IFwianMtdGlja2V0LWl0ZW1cIixcbiAgICB9XG59O1xuXG5jb25zdCBDUkVBVE9SID0ge1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGEgdGlja2V0J3MgaXRlbSAgXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gY3JlYXRlSXRlbVxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIGl0ZW0gcHJvcGVydGllc1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW06IChjb25maWcsIGluZm8pID0+IHtcbiAgICAgICAgbGV0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGlkID0gYHRpY2tldC1pdGVtLSR7Y29uZmlnLmlkfSR7Y29uZmlnLm51bSA/IGNvbmZpZy5udW0gOiAnJ31gO1xuICAgICAgICBsZXQgc2hvdWxkSGFzQnV0dG9uID0gT2JqZWN0LmtleXMoaW5mby5lbGVtZW50cykuaW5jbHVkZXMoaWQpIHx8IGNvbmZpZy5pc1Byb21vID8gICcnIDogYDxidXR0b24gY2xhc3M9XCJqcy10aWNrZXQtY2xvc2VcIj48c3ZnIGNsYXNzPVwiaWNvblwiIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHdpZHRoPScyNHB4JyBoZWlnaHQ9JzI0cHgnPjx0aXRsZT5DbG9zZTwvdGl0bGU+PHVzZSBjbGFzcz1cImljb24tdjNcIiB4bGluazpocmVmPScjaWNvbjMtY2xvc2UnPjwvdXNlPjwvc3ZnPjwvYnV0dG9uPmA7XG4gICAgICAgIGxldCBodG1sID0gYDxkaXYgY2xhc3M9XCJ2ZmVzLWNhcmRfX2xpc3QtY29udGVudC10aXRsZSB2ZmVzLW0wXCI+JHtzaG91bGRIYXNCdXR0b259PHAgY2xhc3M9XCJ2ZmVzLXBhcmFncmFwaCB2ZmVzLWZsZXgtMSBqcy10aWNrZXQtaXRlbS10aXRsZVwiPiR7Y29uZmlnLmRlc2NyaXB0aW9uID8gY29uZmlnLmRlc2NyaXB0aW9uIDogY29uZmlnLnRpdGxlfTwvcD4ke2NvbmZpZy5wcmljZSA/IGA8cCBjbGFzcz1cInZmZXMtcGFyYWdyYXBoIHZmZXMtY2FyZF9fbGlzdC1zcGFuLXByaWNlIGpzLXRpY2tldC1wYXJ0aWFsLXByaWNlXCI+JHtjb25maWcucHJpY2V9L21lczwvcD48L2Rpdj5gIDogJyd9YDtcblxuICAgICAgICBpZiAoY29uZmlnLmxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaHRtbCArPSAnPHVsIGNsYXNzPVwidmZlcy1jYXJkX19saXN0LWxpc3RcIj4nO1xuXG4gICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwoY29uZmlnLmxpc3QsIGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT4tICR7aXRlbS5pbm5lclRleHR9PC9saT5gO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGh0bWwgKz0gJzwvdWw+JztcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0l0ZW0uY2xhc3NMaXN0LmFkZChkZWZhdWx0cy5jbGFzc2VzLnRpY2tldEVsZW1lbnRDU1MpO1xuICAgICAgICBuZXdJdGVtLmNsYXNzTGlzdC5hZGQoZGVmYXVsdHMuY2xhc3Nlcy50aWNrZXRJdGVtSlMpO1xuICAgICAgICBuZXdJdGVtLmlkID0gaWQ7XG4gICAgICAgIG5ld0l0ZW0uaW5uZXJIVE1MID0gaHRtbDtcblxuICAgICAgICByZXR1cm4gbmV3SXRlbTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYSB0aWNrZXQncyBibG9jayAgXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gY3JlYXRlQmxvY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSBibG9jayBwcm9wZXJ0aWVzXG4gICAgICogXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGNyZWF0ZUJsb2NrOiBjb25maWcgPT4ge1xuICAgICAgICBsZXQgY29udGVudEJsb2NrLCBpZENvbnRlbnQ7XG4gICAgICAgIGxldCBuZXdCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgaHRtbCA9IGA8c3ZnIGNsYXNzPVwiaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjQwcHhcIiBoZWlnaHQ9XCI0MHB4XCI+PHRpdGxlPk1vYmlsZTwvdGl0bGU+PHVzZSBjbGFzcz1cImljb24tdjNcIiB4bGluazpocmVmPVwiIyR7Y29uZmlnLnN2Z31cIj48L3VzZT48L3N2Zz48ZGl2IGNsYXNzPVwidmZlcy1jYXJkX19saXN0LXBhcmFncmFwaHNcIj48cCBjbGFzcz1cInZmZXMtcGFyYWdyYXBoXCI+PHNwYW4gY2xhc3M9XCJqcy10aWNrZXQtcXVhbnRpdHlcIj4xPC9zcGFuPiAke2NvbmZpZy50aXRsZX08L3A+YDtcblxuICAgICAgICBpZiAoY29uZmlnLmJ1dHRvbikge1xuICAgICAgICAgICAgaWRDb250ZW50ID0gJ2FjY29yZGlvbi0nICsgY29uZmlnLmlkO1xuXG4gICAgICAgICAgICBodG1sICs9IGA8YnV0dG9uIGNsYXNzPVwidmZlcy1jYXJkX19saXN0LWJ1dHRvblwiIGRhdGEtY29tbW9uLWFjY29yZGlvbj1cImJ1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCIke2lkQ29udGVudH1cIj48c3BhbiBjbGFzcz1cInZmZXMtcGFyYWdyYXBoIGpzLWNvbW1vbi1hY2NvcmRpb24tc2hvd1wiPk3DoXMgaW5mbyA8c3ZnIGNsYXNzPVwiaWNvbiB2ZmVzLWljb25fX2J1dHRvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjE2cHhcIiBoZWlnaHQ9XCIxNnB4XCI+PHRpdGxlPlRpY2s8L3RpdGxlPjx1c2UgY2xhc3M9XCJpY29uLXYzXCIgeGxpbms6aHJlZj1cIiNpY29uMy1jaGV2cm9uLWRvd25cIj48L3VzZT48L3N2Zz48L3NwYW4+PHNwYW4gY2xhc3M9XCJ2ZmVzLXBhcmFncmFwaCBqcy1jb21tb24tYWNjb3JkaW9uLWhpZGVcIj5NZW5vcyBpbmZvIDxzdmcgY2xhc3M9XCJpY29uIHZmZXMtaWNvbl9fYnV0dG9uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMTZweFwiIGhlaWdodD1cIjE2cHhcIj48dGl0bGU+VGljazwvdGl0bGU+PHVzZSBjbGFzcz1cImljb24tdjNcIiB4bGluazpocmVmPVwiI2ljb24zLWNoZXZyb24tdXBcIj48L3VzZT48L3N2Zz48L3NwYW4+PC9idXR0b24+YDtcblxuICAgICAgICAgICAgY29udGVudEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb250ZW50QmxvY2suaWQgPSBpZENvbnRlbnQ7XG4gICAgICAgICAgICBjb250ZW50QmxvY2suY2xhc3NMaXN0LmFkZChkZWZhdWx0cy5jbGFzc2VzLmNhcmRMaXN0Q29udGVudENTUyk7XG4gICAgICAgICAgICBjb250ZW50QmxvY2suY2xhc3NMaXN0LmFkZChkZWZhdWx0cy5jbGFzc2VzLmNvbG9yQmdMaWdoR3JheSk7XG4gICAgICAgICAgICBjb250ZW50QmxvY2suY2xhc3NMaXN0LmFkZChkZWZhdWx0cy5jbGFzc2VzLnRpY2tldEJsb2NrQ29udGVudEpTKTtcbiAgICAgICAgICAgIGNvbnRlbnRCbG9jay5jbGFzc0xpc3QuYWRkKGRlZmF1bHRzLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgICAgICBjb250ZW50QmxvY2suc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaHRtbCArPSBgPC9kaXY+PHAgY2xhc3M9XCJ2ZmVzLXBhcmFncmFwaCB2ZmVzLWNhcmRfX2xpc3QtcHJpY2VcIj48c3Ryb25nIGNsYXNzPVwianMtdGlja2V0LXRvdGFsLXByaWNlXCI+PC9zdHJvbmc+PC9wPmA7XG5cbiAgICAgICAgbmV3QmxvY2suY2xhc3NMaXN0LmFkZChkZWZhdWx0cy5jbGFzc2VzLmNhcmRMaXN0Q29udGFpbmVyQ1NTKTtcbiAgICAgICAgbmV3QmxvY2suY2xhc3NMaXN0LmFkZChkZWZhdWx0cy5jbGFzc2VzLnRpY2tldEJsb2NrSlMpO1xuICAgICAgICBuZXdCbG9jay5jbGFzc0xpc3QuYWRkKGRlZmF1bHRzLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgIG5ld0Jsb2NrLmlkID0gY29uZmlnLmlkO1xuICAgICAgICBuZXdCbG9jay5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgICAgIHJldHVybiB7bmV3QmxvY2ssIGNvbnRlbnRCbG9ja307XG4gICAgfVxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENSRUFUT1I7XG4iLCJjb25zdCBkZWZhdWx0cyA9IHtcbiAgICBzZWxlY3RvcnM6IHtcbiAgICAgICAgbW9kYWw6ICcuanMtbW9kYWwnLFxuICAgICAgICBtb2RhbENsb3NlOiAnLmpzLW1vZGFsLWNsb3NlJyxcbiAgICAgICAgbW9kYWxDb25maXJtQWNjZXB0OiAnLmpzLW1vZGFsLWNvbmZpcm0tYWNjZXB0JyxcbiAgICAgICAgbW9kYWxDb25maXJtQ2FuY2VsOiAnLmpzLW1vZGFsLWNvbmZpcm0tY2FuY2VsJyxcbiAgICAgICAgbW9kYWxDb250ZW50OiAnLmpzLW1vZGFsLWNvbnRlbnQnLFxuICAgICAgICBtb2RhbEl0ZW06ICcuanMtbW9kYWwtaXRlbScsXG4gICAgfSxcbiAgICBjbGFzc2VzOiB7XG4gICAgICAgIG1vZGFsU2hvd0NTUzogJ3ZmZXMtbW9kYWwtLXNob3cnLFxuICAgICAgICBtb2RhbEl0ZW1TaG93Q1NTOiAndmZlcy1tb2RhbF9faXRlbS0tc2hvdycsXG4gICAgfVxufVxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRlZmF1bHRzLnNlbGVjdG9ycy5tb2RhbCk7XG5jb25zdCBtb2RhbENvbmZpcm0gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtY29uZmlybScpO1xuXG5jb25zdCBNT0RBTCA9IHtcblxuICAgIC8qKlxuICAgICAqIE9wZW4gbW9kYWwuIFxuICAgICAqIFxuICAgICAqIEBmdW5jdGlvbiBzaG93XG4gICAgICogXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkIC0gbW9kYWwgaWQgXG4gICAgICovXG4gICAgc2hvdzogaWQgPT4ge1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKGRlZmF1bHRzLmNsYXNzZXMubW9kYWxTaG93Q1NTKTtcbiAgICAgICAgbW9kYWwucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkuY2xhc3NMaXN0LmFkZChkZWZhdWx0cy5jbGFzc2VzLm1vZGFsSXRlbVNob3dDU1MpO1xuICAgIH0sXG4gICAgXG4gICAgLyoqXG4gICAgICogSGlkZSBtb2QubW9kYWwuIFxuICAgICAqIFxuICAgICAqIEBmdW5jdGlvbiBoaWRlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkIC0gbW9kYWwgaWRcbiAgICAgKi9cbiAgICBoaWRlOiBpZCA9PiB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoZGVmYXVsdHMuY2xhc3Nlcy5tb2RhbFNob3dDU1MpO1xuICAgICAgICBtb2RhbC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKS5jbGFzc0xpc3QucmVtb3ZlKGRlZmF1bHRzLmNsYXNzZXMubW9kYWxJdGVtU2hvd0NTUyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IGNvbmZpcm0gZXZlbnRzIHRvIG1vZGFsXG4gICAgICogXG4gICAgICogQGZ1bmN0aW9uIGNvbmZpcm1Nb2RhbFxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIGNvbmZpcm0obWVzc2FnZSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxldCBjYW5jZWxCdXR0b24sIGFjY2VwdEJ1dHRvbjtcbiAgICAgICAgbGV0IGNsb3NlQnV0dG9uID0gbW9kYWxDb25maXJtLnF1ZXJ5U2VsZWN0b3IoZGVmYXVsdHMuc2VsZWN0b3JzLm1vZGFsQ2xvc2UpO1xuICAgICAgICBcbiAgICAgICAgY2xvc2VCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBNT0RBTC5jbG9zZUNvbmZpcm0pO1xuICAgICAgICBcbiAgICAgICAgbW9kYWxDb25maXJtLnF1ZXJ5U2VsZWN0b3IoZGVmYXVsdHMuc2VsZWN0b3JzLm1vZGFsQ29udGVudCkuaW5uZXJIVE1MID0gYCR7bWVzc2FnZX08YnV0dG9uIGNsYXNzPVwidmZlcy1idXR0b24gdmZlcy1idXR0b24tLXByaW1hcnkganMtbW9kYWwtY29uZmlybS1hY2NlcHRcIj5BY2VwdGFyPC9idXR0b24+PGJ1dHRvbiBjbGFzcz1cInZmZXMtYnV0dG9uIHZmZXMtYnV0dG9uLS1zZWNvbmRhcnkganMtbW9kYWwtY29uZmlybS1jYW5jZWxcIj5DYW5jZWxhcjwvYnV0dG9uPmA7XG5cbiAgICAgICAgYWNjZXB0QnV0dG9uID0gbW9kYWxDb25maXJtLnF1ZXJ5U2VsZWN0b3IoZGVmYXVsdHMuc2VsZWN0b3JzLm1vZGFsQ29uZmlybUFjY2VwdCk7XG4gICAgICAgIGNhbmNlbEJ1dHRvbiA9IG1vZGFsQ29uZmlybS5xdWVyeVNlbGVjdG9yKGRlZmF1bHRzLnNlbGVjdG9ycy5tb2RhbENvbmZpcm1DYW5jZWwpO1xuICAgICAgICBcbiAgICAgICAgTU9EQUwuc2hvdygnbW9kYWwtY29uZmlybScpO1xuXG4gICAgICAgIGFjY2VwdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgTU9EQUwuaGlkZSgnbW9kYWwtY29uZmlybScpOyByZXNvbHZlKCkgfSk7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgTU9EQUwuaGlkZSgnbW9kYWwtY29uZmlybScpOyByZWplY3QoKSB9KTtcbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IE1PREFMLmhpZGUoJ21vZGFsLWNvbmZpcm0nKTsgcmVqZWN0KCkgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNT0RBTDsiLCJpbXBvcnQge2luY2x1ZGVUaWNrZXRQcm9kdWN0LCBpbmNsdWRlVmFsdWVJbk5hbWVTcGFjZX0gZnJvbSBcIi4vX3dhbGxtZXJpY1wiO1xuXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgICBcInNlbGVjdG9yc1wiOiB7XG4gICAgICAgIFwiY29udGVudFwiOiBcIi5qcy10aWNrZXQtYmxvY2stY29udGVudFwiLFxuICAgICAgICBcImZpbmFsUHJpY2VcIjogXCIuanMtdGlja2V0LWZpbmFsLXByaWNlXCIsXG4gICAgICAgIFwicGFydGlhbFByaWNlXCI6IFwiLmpzLXRpY2tldC1wYXJ0aWFsLXByaWNlXCIsXG4gICAgICAgIFwidGlja2V0QmxvY2tcIjogXCIuanMtdGlja2V0LWJsb2NrXCIsXG4gICAgICAgIFwidGlja2V0SXRlbVwiOiBcIi5qcy10aWNrZXQtaXRlbVwiLFxuICAgICAgICBcInRvdGFsUHJpY2VcIjogXCIuanMtdGlja2V0LXRvdGFsLXByaWNlXCIsXG4gICAgICAgIFwicXVhbnRpdHlcIjogXCIuanMtdGlja2V0LXF1YW50aXR5XCJcbiAgICB9LFxuICAgIFwiY2xhc3Nlc1wiOiB7XG4gICAgICAgIFwiaGlkZVwiOiBcImhpZGVcIlxuICAgIH1cbn07XG5cbmNvbnN0IHRpY2tldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZmbXMtanM9XCJfdGlja2V0XCJdJyk7XG5cbmNvbnN0IFBSSUNFID0ge1xuICAgIC8qKlxuICAgICAqIFRyYW5mb3JtIGdpdmVuIHByaWNlIGluIGEgc3RyaW5nIG9yIG51bWJlci5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvbiB0cmFuc2Zvcm1QcmljZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7U3RyaW5nIHwgTnVtYmVyfSBwcmljZSAtIHByaWNlIHRvIGNoYW5nZSB0eXBlIHRvIHdvcmsgd2l0aCBpdC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmcgfCBOdW1iZXJ9IHR5cGUgb2YgcmV0dXJuIHZhbHVlIGRlcGVuZHMgb2YgcGFyYW0gZ2l2ZW4uXG4gICAgICovXG4gICAgdHJhbnNmb3JtOiBwcmljZSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgcHJpY2UgPT09ICdzdHJpbmcnID8gcGFyc2VGbG9hdChwcmljZS5yZXBsYWNlKCcsJywgJy4nKSkgOiBwcmljZS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnLCcpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaG9vc2UgaWYgd2Ugd2FudCB0byBjYWxjdWxhdGUgcHJpY2UgZnJvbSBhIHNwZWNmaWZpYyBjb250ZW50IG9yIGZyb20gYWxsIGNvbnRlbnRzIGZyb20gdGlja2V0LlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGNhbGN1bGF0ZUNvbnRlbnRQcmljZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnQgLSBOb24gcmVxdWlyZWQgcGFyYW0uIENvbnRlbnQgd2hlcmUgdG8gY2FsY3VsYXRlIHByaWNlLiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgY2FsY0NvbnRlbnQ6IChjb250ZW50ID0gbnVsbCkgPT4ge1xuICAgICAgICBsZXQgY29udGVudHM7XG5cbiAgICAgICAgaWYoY29udGVudCkge1xuICAgICAgICAgICAgUFJJQ0Uuc3VtUGFydGlhbHNGcm9tQ29udGVudChjb250ZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRlbnRzID0gdGlja2V0LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7ZGVmYXVsdHMuc2VsZWN0b3JzLnRpY2tldEJsb2NrfTpub3QoLiR7ZGVmYXVsdHMuY2xhc3Nlcy5oaWRlfSkgKyAke2RlZmF1bHRzLnNlbGVjdG9ycy5jb250ZW50fWApO1xuICAgICAgICBpbmNsdWRlVGlja2V0UHJvZHVjdCgnd2FsbG1lcmljJywgY29udGVudHMpO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoY29udGVudHMsIGNvbnRlbnQgPT4ge1xuICAgICAgICAgICAgUFJJQ0Uuc3VtUGFydGlhbHNGcm9tQ29udGVudChjb250ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3VtIHBhcnRpYWwgcHJpY2VzIGZyb20gYSBjb250ZW50LlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIHN1bVBhcnRpYWxQcmljZXNGcm9tQ29udGVudFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnQgLSBDb250ZW50IHdoZXJlIHRvIHN1bSBwcmljZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHN1bVBhcnRpYWxzRnJvbUNvbnRlbnQ6IGNvbnRlbnQgPT4ge1xuICAgICAgICBsZXQgc3VtUGFydGlhbFByaWNlcyA9IDA7XG4gICAgICAgIGxldCBwYXJ0aWFsUHJpY2VzID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKGAke2RlZmF1bHRzLnNlbGVjdG9ycy50aWNrZXRJdGVtfTpub3QoLiR7ZGVmYXVsdHMuY2xhc3Nlcy5oaWRlfSkgJHtkZWZhdWx0cy5zZWxlY3RvcnMucGFydGlhbFByaWNlfWApO1xuXG4gICAgICAgIGlmKHBhcnRpYWxQcmljZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKHBhcnRpYWxQcmljZXMsIHByaWNlID0+IHtcbiAgICAgICAgICAgICAgICBzdW1QYXJ0aWFsUHJpY2VzICs9IFBSSUNFLnRyYW5zZm9ybShwcmljZS5pbm5lclRleHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdW1QYXJ0aWFsUHJpY2VzID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBibG9jayA9IHRpY2tldC5xdWVyeVNlbGVjdG9yKGBbYXJpYS1jb250cm9scz1cIiR7Y29udGVudC5pZH1cIl1gKTtcblxuICAgICAgICBpZihibG9jaykge1xuICAgICAgICAgICAgYmxvY2sgPSBibG9jay5jbG9zZXN0KGRlZmF1bHRzLnNlbGVjdG9ycy50aWNrZXRCbG9jayk7XG4gICAgICAgICAgICBibG9jay5xdWVyeVNlbGVjdG9yKGRlZmF1bHRzLnNlbGVjdG9ycy50b3RhbFByaWNlKS5pbm5lclRleHQgPSBzdW1QYXJ0aWFsUHJpY2VzID09PSBudWxsID8gJycgOiBQUklDRS50cmFuc2Zvcm0oc3VtUGFydGlhbFByaWNlcykgKyAn4oKsL21lcyc7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHRvdGFsIHByaWNlIGZyb20gdGlja2V0XG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gY2FsY3VsYXRlVG90YWxQcmljZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgY2FsY1RvdGFsOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvdGFsUHJpY2VzID0gdGlja2V0LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7ZGVmYXVsdHMuc2VsZWN0b3JzLnRpY2tldEJsb2NrfTpub3QoLiR7ZGVmYXVsdHMuY2xhc3Nlcy5oaWRlfSkgJHtkZWZhdWx0cy5zZWxlY3RvcnMudG90YWxQcmljZX1gKTtcbiAgICAgICAgbGV0IHN1bVRvdGFsUHJpY2VzID0gMDtcblxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwodG90YWxQcmljZXMsIHByaWNlID0+IHtcbiAgICAgICAgICAgICFpc05hTihwYXJzZUZsb2F0KHByaWNlLmlubmVyVGV4dCkpID8gc3VtVG90YWxQcmljZXMgKz0gUFJJQ0UudHJhbnNmb3JtKHByaWNlLmlubmVyVGV4dCkgOiBudWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdW1Ub3RhbFByaWNlcyA9IE1hdGgucm91bmQoc3VtVG90YWxQcmljZXMgKiAxMDApIC8gMTAwO1xuXG4gICAgICAgIGluY2x1ZGVWYWx1ZUluTmFtZVNwYWNlKCd3YWxsbWVyaWMnLCAndG90YWxQcmljZScsIFBSSUNFLnRyYW5zZm9ybShzdW1Ub3RhbFByaWNlcykgKyAn4oKsL21lcycpO1xuXG4gICAgICAgIHRpY2tldC5xdWVyeVNlbGVjdG9yKGRlZmF1bHRzLnNlbGVjdG9ycy5maW5hbFByaWNlKS5pbm5lclRleHQgPSBQUklDRS50cmFuc2Zvcm0oc3VtVG90YWxQcmljZXMpICsgJ+KCrC9tZXMnO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWNhbGN1bGF0ZSB0b3RhbCB0aWNrZXQgcHJpY2UgaW5jbHVkaW5nIGNvbnRlbnRzIHByaWNlc1xuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIHJlY2FsY3VsYXRlUHJpY2VcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlY2FsY3VsYXRlOiBjb250ZW50ID0+IHtcbiAgICAgICAgUFJJQ0UuY2FsY0NvbnRlbnQoY29udGVudCk7XG4gICAgICAgIFBSSUNFLmNhbGNUb3RhbCgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBSSUNFO1xuIiwiY29uc3QgY29uZmlndXJhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmZtcy1qcz1cIl9jb25maWd1cmF0b3JcIl0nKTtcbmNvbnN0IHRpY2tldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZmbXMtanM9XCJfdGlja2V0XCJdJyk7XG5jb25zdCBtZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubWRkLSR7d2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDk3MHB4KScpLm1hdGNoZXMgPyAnZGVza3RvcCcgOiAnbW9iaWxlJ31gKS5sYXN0RWxlbWVudENoaWxkO1xuXG5jb25zdCBTQ1JPTEwgPSB7XG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBTQ1JPTEwudGhyb3R0bGUoU0NST0xMLm1vdmVUaWNrZXQsIDEwMCkpO1xuICAgIH0sXG4gICAgXG4gICAgbW92ZVRpY2tldDogKCkgPT4ge1xuICAgICAgICBsZXQgdGlja2V0UG9zID0gdGlja2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBsZXQgbWRkUG9zID0gbWRkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBsZXQgY29uZmlnUG9zID0gY29uZmlndXJhdG9yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBcbiAgICAgICAgaWYoY29uZmlnUG9zLnRvcCA8IG1kZFBvcy5oZWlnaHQgJiYgKGNvbmZpZ1Bvcy5ib3R0b20gLSAodGlja2V0UG9zLmhlaWdodCAvIDIpKSA+IG1kZFBvcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRpY2tldC5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGlja2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdGhyb3R0bGU6IChmdW5jLCBsaW1pdCkgPT4ge1xuICAgICAgICBsZXQgbGFzdEZ1bmMsIGxhc3RSYW47XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgICAgIGlmICghbGFzdFJhbikge1xuICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY3R4LCBhcmdzKTtcbiAgICAgICAgICAgICAgICBsYXN0UmFuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGxhc3RGdW5jKTtcbiAgICAgICAgICAgICAgICBsYXN0RnVuYyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKERhdGUubm93KCkgLSBsYXN0UmFuKSA+PSBsaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuYy5hcHBseShjdHgsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFJhbiA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBsaW1pdCAtIChEYXRlLm5vdygpIC0gbGFzdFJhbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTQ1JPTEw7IiwiaW1wb3J0IENSRUFUT1IgZnJvbSAnLi9fY3JlYXRvcic7XG5pbXBvcnQgUFJJQ0UgZnJvbSAnLi9fcHJpY2UnO1xuaW1wb3J0IE1PREFMIGZyb20gJy4vX21vZGFsJztcbmltcG9ydCBTQ1JPTEwgZnJvbSAnLi9fc2Nyb2xsJztcbmltcG9ydCB7IGluY2x1ZGVWYWx1ZUluTmFtZVNwYWNlIH0gZnJvbSAnLi9fd2FsbG1lcmljJztcblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgJGVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICBpZHM6IHtcbiAgICAgICAgcHJvbW9zOiAndGlja2V0LXByb21vcycsXG4gICAgICAgIGl0ZW06ICd0aWNrZXQtaXRlbSdcbiAgICB9LFxuICAgIHNlbGVjdG9yczoge1xuICAgICAgICBhZGRlZDogJy5hZGRlZCcsXG4gICAgICAgIGJvZHk6ICcuanMtdGlja2V0LWJvZHknLFxuICAgICAgICBjb25maWdCbG9jazogJy5qcy1jb25maWd1cmF0b3ItYmxvY2snLFxuICAgICAgICBjb25maWdFbGVtZW50OiAnLmpzLWNvbmZpZ3VyYXRvci1lbGVtZW50JyxcbiAgICAgICAgY29uZmlnSW5pdGlhbFBheTogJy5qcy1pbml0aWFsLXBheScsXG4gICAgICAgIGNvbmZpZ01haW46ICcuanMtY29uZmlndXJhdG9yLW1haW4nLFxuICAgICAgICBjb250ZW50OiAnLmpzLXRpY2tldC1jb250ZW50JyxcbiAgICAgICAgZHJvcGRvd246ICcuanMtdGlja2V0LWRyb3Bkb3duJyxcbiAgICAgICAgbGk6ICcuanMtbGknLFxuICAgICAgICBudW06ICcuanMtY291bnRlci1udW0nLFxuICAgICAgICBvdmVybGF5OiAnLmpzLXRpY2tldC1vdmVybGF5JyxcbiAgICAgICAgcGFydGlhbFByaWNlOiAnLmpzLXRpY2tldC1wYXJ0aWFsLXByaWNlJyxcbiAgICAgICAgcHJpY2U6ICcuanMtcHJpY2UnLFxuICAgICAgICBxdWFudGl0eTogJy5qcy10aWNrZXQtcXVhbnRpdHknLFxuICAgICAgICB0aWNrZXRCbG9jazogJy5qcy10aWNrZXQtYmxvY2snLFxuICAgICAgICB0aWNrZXRCbG9ja0NvbnRlbnQ6ICcuanMtdGlja2V0LWJsb2NrLWNvbnRlbnQnLFxuICAgICAgICB0aWNrZXRDb250ZW50OiAnLmpzLXRpY2tldC1jb250ZW50LWJveCcsXG4gICAgICAgIHRpY2tldEluaXRpYWxQYXk6ICcuanMtdGlja2V0LWluaXRpYWwtcGF5JyxcbiAgICAgICAgdGlja2V0SXRlbTogJy5qcy10aWNrZXQtaXRlbScsXG4gICAgICAgIHRpY2tldEl0ZW1UaXRsZTogJy5qcy10aWNrZXQtaXRlbS10aXRsZScsXG4gICAgICAgIHRpY2tldExpbms6ICcuanMtdGlja2V0LWxpbmsnLFxuICAgICAgICB0aWNrZXRCdXR0b246ICcuanMtdGlja2V0LWJ1dHRvbicsXG4gICAgICAgIHRpY2tldENsb3NlQnV0dG9uOiAnLmpzLXRpY2tldC1jbG9zZScsXG4gICAgICAgIHRpdGxlOiAnLmpzLXRpdGxlJ1xuICAgIH0sXG4gICAgY2xhc3Nlczoge1xuICAgICAgICBhZGRlZDogJ2FkZGVkJyxcbiAgICAgICAgY29uZmlnTWFpbjogJ2pzLWNvbmZpZ3VyYXRvci1tYWluJyxcbiAgICAgICAgY291bnRlcjogJ2pzLWNvbmZpZ3VyYXRvci1jb3VudGVyJyxcbiAgICAgICAgcHJvbW86ICdqcy1wcm9tby1ibG9jaycsXG4gICAgICAgIHRpY2tldEJsb2NrOiAnanMtdGlja2V0LWJsb2NrJyxcbiAgICAgICAgdGlja2V0SXRlbTogJ2pzLXRpY2tldC1pdGVtJyxcbiAgICAgICAgdGlja2V0QmxvY2tDb250ZW50OiAnanMtdGlja2V0LWJsb2NrLWNvbnRlbnQnLFxuICAgICAgICBoaWRlOiAnaGlkZSdcbiAgICB9LFxuICAgIGF0dHI6IHtcbiAgICAgICAgY29uZmlnOiAnZGF0YS1jb25maWd1cmF0b3ItY29uZmlnJ1xuICAgIH1cbn07XG5cbi8qKlxuICogVGlja2V0LlxuICpcbiAqIEBtb2R1bGUgVGlja2V0XG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyAtIHNwZWNpZmllcyB0aGUgY29uZmlndXJhdGlvbnNcbiAqIGZvciB0aGUgbW9kdWxlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrZXQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMgPSB7fSkge1xuXG4gICAgICAgIHRoaXMudGlja2V0ICAgICA9IHByb3BlcnRpZXMuJGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5mbyAgICAgICA9IEpTT04ucGFyc2UocHJvcGVydGllcy5pbmZvKTtcbiAgICAgICAgdGhpcy5pZHMgICAgICAgID0gZGVmYXVsdHMuaWRzO1xuICAgICAgICB0aGlzLnNlbGVjdG9ycyAgPSBkZWZhdWx0cy5zZWxlY3RvcnM7XG4gICAgICAgIHRoaXMuY2xhc3NlcyAgICA9IGRlZmF1bHRzLmNsYXNzZXM7XG4gICAgICAgIHRoaXMuYXR0ciAgICAgICA9IGRlZmF1bHRzLmF0dHI7XG4gICAgICAgIHRoaXMudGltZVBpbGUgICA9IFtdO1xuXG4gICAgICAgIC8vRXZlbnRzXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBuZXcgRXZlbnQoJ3ZmbXM6Y2hhbmdlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgbW9kdWxlLlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGluaXRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcbiAgICAgICAgY29uc3QgZWxlbWVudHNBZGRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7bW9kLnNlbGVjdG9ycy5jb25maWdFbGVtZW50fS4ke21vZC5jbGFzc2VzLmFkZGVkfWApO1xuICAgICAgICBjb25zdCBjb25maWdCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG1vZC5zZWxlY3RvcnMuY29uZmlnQmxvY2spO1xuXG4gICAgICAgIFtdLmZvckVhY2guY2FsbChjb25maWdCbG9ja3MsIGJsb2NrID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdCbG9jayA9IENSRUFUT1IuY3JlYXRlQmxvY2soSlNPTi5wYXJzZShibG9jay5nZXRBdHRyaWJ1dGUobW9kLmF0dHIuY29uZmlnKSkpO1xuICAgICAgICAgICAgbW9kLmFkZEJsb2NrVG9UaWNrZXQobmV3QmxvY2spO1xuICAgICAgICB9KTtcblxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZWxlbWVudHNBZGRlZCwgZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBtb2QuYWRkSXRlbVRvVGlja2V0KGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIG1vZC5hZGRQcm9tb3NUb1RpY2tldCgpO1xuICAgICAgICBQUklDRS5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICBTQ1JPTEwuaW5pdCgpO1xuICAgICAgICBtb2QuYmluZCgpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlIHRoZSBtb2R1bGUuXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gYmluZFxuICAgICAqXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBiaW5kKCkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBtb2QudGlja2V0LnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy50aWNrZXRCdXR0b24pLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobW9kLnNlbGVjdG9ycy5jb25maWdFbGVtZW50KSwgZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZmbXM6Y2hhbmdlJywgZXYgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0eXBlID0gZXYuaXNNYWluRWxlbWVudCA/IFwibWFpblwiIDogZXYuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMobW9kLmNsYXNzZXMuY291bnRlcikgPyBcImNvdW50ZXJcIiA6IFwiZGVmYXVsdFwiO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYWluXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2QubWFpbkVsZW1lbnRNYW5hZ2VyKGV2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY291bnRlclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kLmNvdW50ZXJFbGVtZW50TWFuYWdlcihldik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZC5kZWZhdWx0RWxlbWVudE1hbmFnZXIoZXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vZC5jaGVja1RpY2tldENvbnRlbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIG1vZC5vdmVybGF5QWN0aW9uKCk7XG4gICAgfVxuXG4gICAgbWFpbkVsZW1lbnRNYW5hZ2VyKGV2KSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG4gICAgICAgIFxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwobW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yQWxsKGAke21vZC5zZWxlY3RvcnMudGlja2V0QmxvY2t9Om5vdCguJHttb2QuY2xhc3Nlcy5oaWRlfSlgKSwgYmxvY2sgPT4ge1xuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGJsb2NrLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yQWxsKG1vZC5zZWxlY3RvcnMudGlja2V0SXRlbSksIGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChtb2QuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKG1vZC5jbGFzc2VzLmhpZGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtb2QuYWRkSXRlbVRvVGlja2V0KGV2LmVsZW1lbnQpO1xuICAgICAgICBtb2QucmVzZXRSZWxzKGV2LmVsZW1lbnQpO1xuICAgICAgICBtb2QuYWRkUHJvbW9zVG9UaWNrZXQoZXYuZWxlbWVudCk7XG5cbiAgICAgICAgUFJJQ0UucmVjYWxjdWxhdGUoKTtcblxuICAgICAgICBtb2Qub25DaGFuZ2UuZWxlbWVudCA9IGV2LmVsZW1lbnQ7XG4gICAgICAgIG1vZC5vbkNoYW5nZS5lbmVtaWVzID0gdW5kZWZpbmVkO1xuICAgICAgICBtb2Qub25DaGFuZ2UudG9SZW1vdmUgPSBmYWxzZTtcbiAgICAgICAgbW9kLnRpY2tldC5kaXNwYXRjaEV2ZW50KG1vZC5vbkNoYW5nZSk7XG4gICAgfVxuXG4gICAgY291bnRlckVsZW1lbnRNYW5hZ2VyKGV2KSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHRoaXM7XG4gICAgICAgIFxuICAgICAgICBpZihldi5udW0gJiYgZXYudG9BZGQpIHtcbiAgICAgICAgICAgIG1vZC5hZGRJdGVtVG9UaWNrZXQoZXYuZWxlbWVudCk7XG5cbiAgICAgICAgfSBlbHNlIGlmKGV2Lm51bSAmJiAhZXYudG9BZGQpIHtcbiAgICAgICAgICAgIG1vZC5oaWRlSXRlbShtb2QudGlja2V0LnF1ZXJ5U2VsZWN0b3IoYCMke21vZC5pZHMuaXRlbX0tJHtldi5lbGVtZW50LmlkfSR7ZXYubnVtfWApKTtcbiAgICAgICAgfVxuICAgICAgICBQUklDRS5yZWNhbGN1bGF0ZSgpO1xuICAgIH1cblxuICAgIGRlZmF1bHRFbGVtZW50TWFuYWdlcihldikge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBsZXQgZWxlQ29tcGEgPSBtb2QuaW5mby5jb21wYXRpYmlsaXRpZXNbZXYuZWxlbWVudC5pZF07XG4gICAgICAgIGxldCB0aWNrZXRJdGVtID0gbW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yKGAjJHttb2QuaWRzLml0ZW19LSR7ZXYuZWxlbWVudC5pZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGlmKGVsZUNvbXBhKSB7XG4gICAgICAgICAgICBsZXQgZW5lbWllc0FjdGl2YXRlZCA9IFtdO1xuICAgICAgICAgICAgZWxlQ29tcGEuZW5lbWllcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZW5lbXkgPSBtb2QudGlja2V0LnF1ZXJ5U2VsZWN0b3IoYCMke21vZC5pZHMuaXRlbX0tJHtpZH1gKTtcbiAgICAgICAgICAgICAgICBpZihlbmVteSAmJiAhZW5lbXkuY2xhc3NMaXN0LmNvbnRhaW5zKG1vZC5jbGFzc2VzLmhpZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZW1pZXNBY3RpdmF0ZWQucHVzaChlbmVteSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZihlbmVtaWVzQWN0aXZhdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBNT0RBTC5jb25maXJtKGVsZUNvbXBhLnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW5lbWllc0FjdGl2YXRlZC5mb3JFYWNoKGVuZW15ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZC5oaWRlSXRlbShlbmVteSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBtb2QuYWRkSXRlbVRvVGlja2V0KGV2LmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBQUklDRS5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtb2Qub25DaGFuZ2UuZWxlbWVudCA9IGV2LmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIG1vZC5vbkNoYW5nZS5lbmVtaWVzID0gZWxlQ29tcGEuZW5lbWllcztcbiAgICAgICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLnRvUmVtb3ZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG1vZC50aWNrZXQuZGlzcGF0Y2hFdmVudChtb2Qub25DaGFuZ2UpO1xuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FuY2VsIGNvZGUuLi5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGlzQWRkZWQgPSBldi5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhtb2QuY2xhc3Nlcy5hZGRlZCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoaXNBZGRlZCkge1xuICAgICAgICAgICAgICAgICAgICBldi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5jb25maWdJbml0aWFsUGF5KSA/IG1vZC50aWNrZXQucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLnRpY2tldEluaXRpYWxQYXkpLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChtb2QuY2xhc3Nlcy5oaWRlKSA6IG51bGw7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIG1vZC5oaWRlSXRlbSh0aWNrZXRJdGVtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtb2QuYWRkSXRlbVRvVGlja2V0KGV2LmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIFBSSUNFLnJlY2FsY3VsYXRlKCk7XG5cbiAgICAgICAgICAgICAgICBtb2Qub25DaGFuZ2UuZWxlbWVudCA9IGV2LmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLmVuZW1pZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLnRvUmVtb3ZlID0gaXNBZGRlZDtcbiAgICAgICAgICAgICAgICBtb2QudGlja2V0LmRpc3BhdGNoRXZlbnQobW9kLm9uQ2hhbmdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBpc0FkZGVkID0gZXYuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMobW9kLmNsYXNzZXMuYWRkZWQpO1xuXG4gICAgICAgICAgICBpZihpc0FkZGVkKSB7XG4gICAgICAgICAgICAgICAgZXYuZWxlbWVudC5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMuY29uZmlnSW5pdGlhbFBheSkgPyBtb2QudGlja2V0LnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy50aWNrZXRJbml0aWFsUGF5KS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQobW9kLmNsYXNzZXMuaGlkZSkgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgbW9kLmhpZGVJdGVtKHRpY2tldEl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2QuYWRkSXRlbVRvVGlja2V0KGV2LmVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBQUklDRS5yZWNhbGN1bGF0ZSgpO1xuXG4gICAgICAgICAgICBtb2Qub25DaGFuZ2UuZWxlbWVudCA9IGV2LmVsZW1lbnQ7XG4gICAgICAgICAgICBtb2Qub25DaGFuZ2UuZW5lbWllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIG1vZC5vbkNoYW5nZS50b1JlbW92ZSA9IGlzQWRkZWQ7XG4gICAgICAgICAgICBtb2QudGlja2V0LmRpc3BhdGNoRXZlbnQobW9kLm9uQ2hhbmdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBhZGRJdGVtVG9UaWNrZXQoaXRlbSkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBjb25zdCBibG9ja0NvbmZpZyA9IEpTT04ucGFyc2UoaXRlbS5jbG9zZXN0KG1vZC5zZWxlY3RvcnMuY29uZmlnQmxvY2spLmdldEF0dHJpYnV0ZShtb2QuYXR0ci5jb25maWcpKTtcbiAgICAgICAgY29uc3QgbnVtID0gaXRlbS5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMubnVtKSA/IGl0ZW0ucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLm51bSkuaW5uZXJUZXh0IDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLnRpdGxlKS5pbm5lclRleHQ7XG4gICAgICAgIGNvbnN0IGluaXRpYWxQYXkgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5jb25maWdJbml0aWFsUGF5KTtcbiAgICAgICAgbGV0IHRpY2tldEl0ZW0gPSBtb2QudGlja2V0LnF1ZXJ5U2VsZWN0b3IoYCMke21vZC5pZHMuaXRlbX0tJHtpdGVtLmlkfSR7bnVtID8gbnVtIDogJyd9YCk7XG5cbiAgICAgICAgaWYoIXRpY2tldEl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBibG9jayA9IG1vZC50aWNrZXQucXVlcnlTZWxlY3RvcihgIyR7YmxvY2tDb25maWcuaWR9YCk7XG5cbiAgICAgICAgICAgIHRpY2tldEl0ZW0gPSBDUkVBVE9SLmNyZWF0ZUl0ZW0oe1xuICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMucHJpY2UpID8gaXRlbS5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMucHJpY2UpLmlubmVyVGV4dCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBudW06IG51bSxcbiAgICAgICAgICAgICAgICBsaXN0OiBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwobW9kLnNlbGVjdG9ycy5saSksXG4gICAgICAgICAgICAgICAgaXNQcm9tbzogYmxvY2suaWQgPT09IG1vZC5pZHMucHJvbW9zXG4gICAgICAgICAgICB9LCBtb2QuaW5mbyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJsb2NrLm5leHRFbGVtZW50U2libGluZy5hcHBlbmRDaGlsZCh0aWNrZXRJdGVtKTtcbiAgICAgICAgICAgIG1vZC5jbG9zZUJ1dHRvbkNvbnRlbnQodGlja2V0SXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKGluaXRpYWxQYXkpIHtcbiAgICAgICAgICAgIGxldCB0aWNrZXRJbml0UGF5ID0gbW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMudGlja2V0SW5pdGlhbFBheSk7XG4gICAgICAgICAgICB0aWNrZXRJbml0UGF5LmlubmVyVGV4dCA9IGluaXRpYWxQYXkuaW5uZXJUZXh0O1xuICAgICAgICAgICAgdGlja2V0SW5pdFBheS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobW9kLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgICAgICBpbmNsdWRlVmFsdWVJbk5hbWVTcGFjZSgnd2FsbG1lcmljJywgJ2luaXRpYWxQYXknLCBpbml0aWFsUGF5LmlubmVyVGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG1vZC5zaG93SXRlbSh0aWNrZXRJdGVtKTtcbiAgICB9XG5cbiAgICBhZGRCbG9ja1RvVGlja2V0KGJsb2NrKSB7XG4gICAgICAgIHRoaXMudGlja2V0LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMudGlja2V0Q29udGVudCkuYXBwZW5kQ2hpbGQoYmxvY2submV3QmxvY2spO1xuICAgICAgICB0aGlzLnRpY2tldC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLnRpY2tldENvbnRlbnQpLmFwcGVuZENoaWxkKGJsb2NrLmNvbnRlbnRCbG9jayk7XG4gICAgfVxuXG4gICAgYWRkUHJvbW9zVG9UaWNrZXQocmF0ZSkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBjb25zdCByYXRlQWN0aXZhdGVkID0gcmF0ZSA/IHJhdGUgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke21vZC5zZWxlY3RvcnMuY29uZmlnTWFpbn0uJHttb2QuY2xhc3Nlcy5hZGRlZH1gKTtcbiAgICAgICAgbGV0IHByb21vQ291bnRlciA9IDA7XG4gICAgICAgIGxldCBwcm9tb0Jsb2NrID0gbW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yKCcjJyArIG1vZC5pZHMucHJvbW9zKTtcblxuICAgICAgICBpZihwcm9tb0Jsb2NrKSB7XG4gICAgICAgICAgICBsZXQgYXV4ID0gcHJvbW9CbG9jaztcbiAgICAgICAgICAgIHByb21vQmxvY2sgPSB7fTtcbiAgICAgICAgICAgIHByb21vQmxvY2submV3QmxvY2sgPSBhdXg7XG4gICAgICAgICAgICBwcm9tb0Jsb2NrLmNvbnRlbnRCbG9jayA9IGF1eC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBwcm9tb0Jsb2NrLmNvbnRlbnRCbG9jay5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21vQmxvY2sgPSBDUkVBVE9SLmNyZWF0ZUJsb2NrKHtcbiAgICAgICAgICAgICAgICBpZDogbW9kLmlkcy5wcm9tb3MsXG4gICAgICAgICAgICAgICAgc3ZnOiBcImljb24tYm9udXMtbWlkXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUHJvbW9jaW9uZXNcIixcbiAgICAgICAgICAgICAgICBidXR0b246IHRydWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwcm9tb0Jsb2NrLm5ld0Jsb2NrLmNsYXNzTGlzdC5hZGQobW9kLmNsYXNzZXMucHJvbW8pO1xuICAgICAgICB9XG5cbiAgICAgICAgbW9kLmluZm8ucHJvbW9zLmZvckVhY2gocHJvbW8gPT4ge1xuICAgICAgICAgICAgcHJvbW9Db3VudGVyKys7XG4gICAgICAgICAgICBwcm9tb0Jsb2NrLmNvbnRlbnRCbG9jay5hcHBlbmRDaGlsZChDUkVBVE9SLmNyZWF0ZUl0ZW0oe1xuICAgICAgICAgICAgICAgIGlkOiBwcm9tby5pZCxcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb21vLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHByaWNlOiBwcm9tby5wcmljZSxcbiAgICAgICAgICAgICAgICBsaXN0OiBbXSxcbiAgICAgICAgICAgICAgICBpc1Byb21vOiB0cnVlXG4gICAgICAgICAgICB9LCBtb2QuaW5mbykpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZihyYXRlQWN0aXZhdGVkKSB7XG4gICAgICAgICAgICBtb2QuaW5mby5lbGVtZW50c1tyYXRlQWN0aXZhdGVkLmlkXS5wcm9tb3MuZm9yRWFjaChwcm9tbyA9PiB7XG4gICAgICAgICAgICAgICAgcHJvbW9Db3VudGVyKys7XG4gICAgICAgICAgICAgICAgcHJvbW9CbG9jay5jb250ZW50QmxvY2suYXBwZW5kQ2hpbGQoQ1JFQVRPUi5jcmVhdGVJdGVtKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvbW8uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBwcm9tby5wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogW10sXG4gICAgICAgICAgICAgICAgICAgIGlzUHJvbW86IHRydWVcbiAgICAgICAgICAgICAgICB9LCBtb2QuaW5mbykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwcm9tb0NvdW50ZXIgPiAwKSB7XG4gICAgICAgICAgICBwcm9tb0Jsb2NrLm5ld0Jsb2NrLnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5xdWFudGl0eSkuaW5uZXJUZXh0ID0gcHJvbW9Db3VudGVyO1xuICAgICAgICAgICAgcHJvbW9CbG9jay5uZXdCbG9jay5jbGFzc0xpc3QucmVtb3ZlKG1vZC5jbGFzc2VzLmhpZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbW9kLmFkZEJsb2NrVG9UaWNrZXQocHJvbW9CbG9jayk7XG4gICAgfVxuXG4gICAgc2hvd0l0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBjb25zdCBkYWRkeSA9IGl0ZW0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgYmxvY2sgPSBkYWRkeS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgIGlmKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKG1vZC5jbGFzc2VzLmNvbmZpZ01haW4pKSB7XG4gICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZGFkZHkucXVlcnlTZWxlY3RvckFsbChgJHttb2Quc2VsZWN0b3JzLnRpY2tldEl0ZW19Om5vdCguJHttb2QuY2xhc3Nlcy5oaWRlfSlgKSwgaXRlbSA9PiBtb2QuaGlkZUl0ZW0oaXRlbSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbW9kLnNob3dCbG9jayhibG9jayk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShtb2QuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgbW9kLnJlY291bnRDaGlsZHJlbihibG9jayk7XG4gICAgfVxuXG4gICAgaGlkZUl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBibG9jayA9IGl0ZW0ucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlY291bnRDaGlsZHJlbihibG9jaykgPT09IDAgPyB0aGlzLmhpZGVCbG9jayhibG9jaykgOiBudWxsO1xuICAgIH1cblxuICAgIHNob3dCbG9jayhibG9jaykge1xuICAgICAgICBibG9jay5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICB9XG5cbiAgICBoaWRlQmxvY2soYmxvY2spIHtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuaGlkZSk7XG4gICAgICAgIGJsb2NrLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICB9XG5cbiAgICByZWNvdW50Q2hpbGRyZW4odGlja2V0QmxvY2spIHtcbiAgICAgICAgbGV0IGNvdW50ZXJDaGlsZHJlbiA9IHRpY2tldEJsb2NrLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yQWxsKGAke3RoaXMuc2VsZWN0b3JzLnRpY2tldEl0ZW19Om5vdCguJHt0aGlzLmNsYXNzZXMuaGlkZX0pYCkubGVuZ3RoO1xuICAgICAgICB0aWNrZXRCbG9jay5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLnF1YW50aXR5KS5pbm5lclRleHQgPSBjb3VudGVyQ2hpbGRyZW47XG4gICAgICAgIHJldHVybiBjb3VudGVyQ2hpbGRyZW47XG4gICAgfVxuXG4gICAgcmVzZXRSZWxzKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcbiAgICAgICAgbW9kLmluZm8uZWxlbWVudHNbZWxlbWVudC5pZF0ucmVscy5mb3JFYWNoKHJlbCA9PiB7XG4gICAgICAgICAgICBpZihyZWwuc2VsZWN0b3IgJiYgcmVsLnNlbGVjdG9yICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVsLnNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihlbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IGVsLnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5wcmljZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZWwucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBlbC5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXRJdGVtID0gbW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yKGAjJHttb2QuaWRzLml0ZW19LSR7ZWwuaWR9YCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihwcmljZSAmJiByZWwubmV3UHJpY2UgPj0gMCkgeyBwcmljZS5pbm5lclRleHQgPSBgJHtyZWwubmV3UHJpY2V94oKsYCB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHRpdGxlICYmIHJlbC5uZXdUaXRsZSkgeyB0aXRsZS5pbm5lclRleHQgPSByZWwubmV3VGl0bGUgfVxuICAgICAgICAgICAgICAgICAgICBpZihkZXNjcmlwdGlvbiAmJiByZWwubmV3RGVzY3JpcHRpb24pIHsgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gcmVsLm5ld0Rlc2NyaXB0aW9uIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKHRpY2tldEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldEl0ZW0ucXVlcnlTZWxlY3Rvcihtb2Quc2VsZWN0b3JzLnBhcnRpYWxQcmljZSkuaW5uZXJUZXh0ID0gYCR7cmVsLm5ld1ByaWNlfeKCrGA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWwubmV3VGl0bGUgPyB0aWNrZXRJdGVtLnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy50aWNrZXRJdGVtVGl0bGUpLmlubmVyVGV4dCA9IHJlbC5uZXdUaXRsZSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZihyZWwuZGVmYXVsdEFkZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2QuYWRkSXRlbVRvVGlja2V0KGVsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcmxheSBhY3Rpb24gdG8gaGlkZSB0aWNrZXQgY29udGVudCB3aGVuIHlvdSBjbGljayBvdmVyIGl0XG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb24gb3ZlcmxheUFjdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ1dHRvbiAtIERyb3Bkb3duIGJ1dHRvbiBlbGVtZW50XG4gICAgICogXG4gICAgICogQHJldHVybiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBvdmVybGF5QWN0aW9uKCkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBjb25zdCB0aWNrZXRPdmVybGF5ID0gbW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMub3ZlcmxheSk7XG4gICAgICAgIGNvbnN0IHRpY2tldEJvZHkgPSBtb2QudGlja2V0LnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5ib2R5KTtcbiAgICAgICAgY29uc3QgdGlja2V0RHJvcGRvd24gPSBtb2QudGlja2V0LnF1ZXJ5U2VsZWN0b3IobW9kLnNlbGVjdG9ycy5kcm9wZG93bik7XG5cbiAgICAgICAgdGlja2V0T3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKCF0aWNrZXRCb2R5LmNsYXNzTGlzdC5jb250YWlucyhtb2QuY2xhc3Nlcy5oaWRlKSkge1xuICAgICAgICAgICAgICAgIHRpY2tldE92ZXJsYXkuY2xhc3NMaXN0LmFkZChtb2QuY2xhc3Nlcy5oaWRlKTtcbiAgICAgICAgICAgICAgICB0aWNrZXREcm9wZG93bi5jbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0aWNrZXQgY29udGVudFxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uIGNoZWNrVGlja2V0Q29udGVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkXG4gICAgICovXG4gICAgY2hlY2tUaWNrZXRDb250ZW50KCkge1xuICAgICAgICBjb25zdCBtb2QgPSB0aGlzO1xuICAgICAgICBsZXQgY29udGVudHNCbG9ja1Zpc2libGUgPSBtb2QudGlja2V0LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7bW9kLnNlbGVjdG9ycy50aWNrZXRCbG9ja306bm90KC5oaWRlKWApO1xuICAgICAgICBsZXQgcmF0ZUFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7bW9kLnNlbGVjdG9ycy5jb25maWdNYWlufS4ke21vZC5jbGFzc2VzLmFkZGVkfWApO1xuICAgICAgICBsZXQgcmF0ZU9iamVjdCA9IG1vZC5pbmZvLmVsZW1lbnRzW3JhdGVBY3RpdmUuaWRdO1xuICAgICAgICBsZXQgY291bnREaWZlcmVudElkcyA9IDA7XG4gICAgICAgIGxldCBjb3VudGVyVHJ1ZVJlbHMgPSAwO1xuICAgICAgICBjb250ZW50c0Jsb2NrVmlzaWJsZSA9IFtdLnNsaWNlLmNhbGwoY29udGVudHNCbG9ja1Zpc2libGUsIDEpO1xuXG4gICAgICAgIGlmKGNvbnRlbnRzQmxvY2tWaXNpYmxlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmKGNvbnRlbnRzQmxvY2tWaXNpYmxlW2NvbnRlbnRzQmxvY2tWaXNpYmxlLmxlbmd0aC0xXS5pZCA9PT0gbW9kLmlkcy5wcm9tb3MpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50c0Jsb2NrVmlzaWJsZSA9IGNvbnRlbnRzQmxvY2tWaXNpYmxlLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmF0ZU9iamVjdC5yZWxzLmZvckVhY2gocmVsID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZWwuZGVmYXVsdEFkZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzQmxvY2tWaXNpYmxlLmZvckVhY2goY29udGVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbLi4uY29udGVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2hpbGRyZW5dLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNoaWxkLmlkICE9PSBgJHttb2QuaWRzLml0ZW19LSR7cmVsLnNlbGVjdG9yfWAgJiYgIWNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhtb2QuY2xhc3Nlcy5oaWRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudERpZmVyZW50SWRzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyVHJ1ZVJlbHMrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGNvdW50RGlmZXJlbnRJZHMgPiAwIHx8IChjb3VudGVyVHJ1ZVJlbHMgPT09IDAgJiYgY29udGVudHNCbG9ja1Zpc2libGUubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpY2tldEJ1dHRvbigpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUaWNrZXRMaW5rKHJhdGVPYmplY3QuaHJlZik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc2hvd1RpY2tldExpbmsobmV3SHJlZikge1xuICAgICAgICBsZXQgbGluayA9IHRoaXMudGlja2V0LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMudGlja2V0TGluayk7XG5cbiAgICAgICAgdGhpcy50aWNrZXQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy50aWNrZXRCdXR0b24pLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGxpbmsuaHJlZiA9IG5ld0hyZWY7XG4gICAgfVxuXG4gICAgc2hvd1RpY2tldEJ1dHRvbigpIHtcbiAgICAgICAgdGhpcy50aWNrZXQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy50aWNrZXRMaW5rKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHRoaXMudGlja2V0LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMudGlja2V0QnV0dG9uKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgY2xvc2VCdXR0b25Db250ZW50KHRpY2tldEl0ZW0pIHtcbiAgICAgICAgY29uc3QgbW9kID0gdGhpcztcbiAgICAgICAgbGV0IGNsb3NlQnV0dG9uID0gdGlja2V0SXRlbS5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMudGlja2V0Q2xvc2VCdXR0b24pO1xuICAgICAgICBsZXQgaWRUaWNrZXRJdGVtID0gdGlja2V0SXRlbS5pZC5yZXBsYWNlKHRoaXMuaWRzLml0ZW0rJy0nLCAnJyk7XG5cbiAgICAgICAgaWYoY2xvc2VCdXR0b24pIHtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtQ29uZmlnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRUaWNrZXRJdGVtKTtcbiAgICAgICAgICAgICAgICBtb2QuaGlkZUl0ZW0oY2xvc2VCdXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBQUklDRS5yZWNhbGN1bGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYoaXRlbUNvbmZpZy5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMuY29uZmlnSW5pdGlhbFBheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kLnRpY2tldC5xdWVyeVNlbGVjdG9yKG1vZC5zZWxlY3RvcnMudGlja2V0SW5pdGlhbFBheSkucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbW9kLm9uQ2hhbmdlLmVsZW1lbnQgPSBpdGVtQ29uZmlnO1xuICAgICAgICAgICAgICAgIG1vZC5vbkNoYW5nZS5lbmVtaWVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIG1vZC5vbkNoYW5nZS50b1JlbW92ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbW9kLnRpY2tldC5kaXNwYXRjaEV2ZW50KG1vZC5vbkNoYW5nZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgQ29tbW9uIGZyb20gJy4vX2NvbW1vbic7XG5pbXBvcnQgQ29uZmlndXJhdG9yIGZyb20gJy4vX2NvbmZpZ3VyYXRvcic7XG5pbXBvcnQgVGlja2V0IGZyb20gJy4vX3RpY2tldCc7XG5cbmNvbnN0IFBBVEhfTUlDUk9TSVRFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGF0aG1pY3Jvc2l0ZV0nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aG1pY3Jvc2l0ZScpO1xuXG5sZXQgZ2xvYmFsTW9kdWxlcyA9IHtcbiAgICBfY29tbW9uOiBDb21tb24sXG4gICAgX2NvbmZpZ3VyYXRvcjogQ29uZmlndXJhdG9yLFxuICAgIF90aWNrZXQ6IFRpY2tldFxufTtcblxuZXhwb3J0IGxldCB1dGlscyA9IHtcbiAgICBpbml0OiBzY29wZSA9PiB7XG4gICAgICAgIGxldCBtb2R1bGVzID0gc2NvcGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmZtcy1qc10nKTtcblxuICAgICAgICBmZXRjaChQQVRIX01JQ1JPU0lURSArICdjb25maWctaW5mby5qc29uJykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKG1vZHVsZXMsIG1vZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZHVsZXNBdHRyID0gbW9kLmdldEF0dHJpYnV0ZSgnZGF0YS12Zm1zLWpzJyk7XG5cbiAgICAgICAgICAgICAgICBtb2R1bGVzQXR0ciA9IG1vZHVsZXNBdHRyLnNwbGl0KCcsJyk7XG5cbiAgICAgICAgICAgICAgICBtb2R1bGVzQXR0ci5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydGllcyA9IHskZWxlbWVudDogbW9kfTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5pbmZvID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gZ2xvYmFsTW9kdWxlc1thdHRyXSA/IG5ldyBnbG9iYWxNb2R1bGVzW2F0dHJdKHByb3BlcnRpZXMpIDogdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlID8gaW5zdGFuY2UuaW5pdCgpIDogbnVsbDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG4iLCIvKipcbiAqIEluY2x1ZGUgdmFsdWUgaW50byB0aWNrZXRkYXRhIGZpcnN0IGxldmVsXG4gKlxuICogQGZ1bmN0aW9uIGluY2x1ZGVWYWx1ZUluTmFtZVNwYWNlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBhbnlOYW1lIC0gVGhlIGNvbXBhbnkgbmFtZSB3aGljaCBnb2VzIHRvIHJlY292ZXIgZGF0YVxuICogQHBhcmFtIHtOdW1iZXJ9IGtleSAtIGtleSBvZiB0aGUgb2JqZWN0IHRvIHNhdmVcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSAtIHZhbHVlIGFzc29jaWF0ZWQgdG8ga2V5XG4gKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gKlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlVmFsdWVJbk5hbWVTcGFjZShjb21wYW55TmFtZSwga2V5LCB2YWx1ZSkge1xuICAgIGlmKGlzTmFtZXNwYWNlVW5kZWZpbmVkKGNvbXBhbnlOYW1lKSkge1xuICAgICAgICByZWdpc3Rlck5hbWVzcGFjZShjb21wYW55TmFtZSk7XG4gICAgfVxuICAgIFxuICAgIHNhdmVJbnRvTmFtZXNwYWNlKGNvbXBhbnlOYW1lLCBrZXksIHZhbHVlKTtcbn1cblxuLyoqXG4gKiBJbmNsdWRlIHByb2R1Y3RzIGZyb20gdGlja2V0IGludG8gZ2xvYmFsIG9iamVjdFxuICpcbiAqIEBmdW5jdGlvbiBpbmNsdWRlVGlja2V0UHJvZHVjdFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wYW55TmFtZSAtIFRoZSBjb21wYW55IG5hbWUgd2hpY2ggZ29lcyB0byByZWNvdmVyIGRhdGFcbiAqIEBwYXJhbSB7TnVtYmVyfSB0aWNrZXQgLSB0aWNrZXQgSFRNTCBlbGVtZW50XG4gKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZVRpY2tldFByb2R1Y3QoY29tcGFueU5hbWUsIHRpY2tldCkge1xuICAgIGNvbnN0IHRpY2tldExpc3QgPSB0aWNrZXQgfHwge307XG4gICAgY29uc3QgYXJyQ2xhc3MgPSBbJy5qcy10aWNrZXQtaXRlbS10aXRsZScsICcuanMtdGlja2V0LXBhcnRpYWwtcHJpY2UnLCAnLmpzLXRpY2tldC1pdGVtJ107XG4gICAgXG4gICAgaWYoaXNOYW1lc3BhY2VVbmRlZmluZWQoY29tcGFueU5hbWUpKSB7XG4gICAgICAgIHJlZ2lzdGVyTmFtZXNwYWNlKGNvbXBhbnlOYW1lKTtcbiAgICB9XG5cbiAgICBzYXZlSW50b05hbWVzcGFjZShjb21wYW55TmFtZSwgJ2NvbnRlbnQnLCB7fSk7XG4gICAgXG4gICAgWy4uLnRpY2tldExpc3RdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmlkICE9PSAnYWNjb3JkaW9uLXRpY2tldC1wcm9tb3MnKSB7XG4gICAgICAgICAgICBjb25zdCB2aXNpYmxlRWxzID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKGAke2FyckNsYXNzWzJdfTpub3QoLmhpZGUpYCk7XG4gICAgICAgICAgICBsZXQga2V5T2JqZWN0LCB2YWx1ZTtcblxuICAgICAgICAgICAgaWYoaXRlbS5pZC5pbmRleE9mKCdjb3VudGVyJykgPj0gMCkge1xuICAgICAgICAgICAgICAgIGtleU9iamVjdCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihhcnJDbGFzc1swXSkuaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgIHZhbHVlID0gaXRlbS5xdWVyeVNlbGVjdG9yKGFyckNsYXNzWzFdKS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgc2F2ZUNvbnRlbnRJbnRvTmFtZXNwYWNlKGNvbXBhbnlOYW1lLCBrZXlPYmplY3QsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBzYXZlQ29udGVudEludG9OYW1lc3BhY2UoY29tcGFueU5hbWUsIGAke2tleU9iamVjdH0gQ2FudGlkYWRgLCB2aXNpYmxlRWxzLmxlbmd0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbCh2aXNpYmxlRWxzLCBlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGtleU9iamVjdCA9IGVsLnF1ZXJ5U2VsZWN0b3IoYXJyQ2xhc3NbMF0pLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBlbC5xdWVyeVNlbGVjdG9yKGFyckNsYXNzWzFdKS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHNhdmVDb250ZW50SW50b05hbWVzcGFjZShjb21wYW55TmFtZSwga2V5T2JqZWN0LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzYXZlQ29udGVudEludG9OYW1lc3BhY2UoY29tcGFueU5hbWUsICdwcm9tbycsIGl0ZW0ucXVlcnlTZWxlY3RvcihhcnJDbGFzc1swXSkuaW5uZXJUZXh0KTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8qKlxuICogQ3JlYXRlIG5hbWVzcGFjZSBpbnRvIHZmZXMgb2JqZWN0XG4gKlxuICogQGZ1bmN0aW9uIHJlZ2lzdGVyTmFtZXNwYWNlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBhbnlOYW1lIC0gVGhlIGNvbXBhbnkgbmFtZSB3aGljaCBnb2VzIHRvIHJlY292ZXIgZGF0YVxuICogQHJldHVybiB7dW5kZWZpbmVkfVxuICpcbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJOYW1lc3BhY2UoY29tcGFueU5hbWUpIHtcbiAgICB3aW5kb3cudmZlc1tjb21wYW55TmFtZV0gPSB7IFwiZGF0YVRpY2tldFwiOiB7fSB9O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIG5hbWVzcGFjZSBleGlzdHMgaW50byB2ZmVzIG9iamVjdFxuICpcbiAqIEBmdW5jdGlvbiBpc05hbWVzcGFjZVVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wYW55TmFtZSAtIFRoZSBjb21wYW55IG5hbWUgd2hpY2ggZ29lcyB0byByZWNvdmVyIGRhdGFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKlxuICovXG5mdW5jdGlvbiBpc05hbWVzcGFjZVVuZGVmaW5lZChjb21wYW55TmFtZSkge1xuICAgIHJldHVybiB3aW5kb3cudmZlc1tjb21wYW55TmFtZV0gPT09IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBTYXZlIHZhbHVlIGludG8gbmFtZXNwYWNlXG4gKlxuICogQGZ1bmN0aW9uIHNhdmVJbnRvTmFtZXNwYWNlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBhbnlOYW1lIC0gVGhlIGNvbXBhbnkgbmFtZSB3aGljaCBnb2VzIHRvIHJlY292ZXIgZGF0YVxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIG9iamVjdCBrZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIG9iamVjdCBrZXkgdmFsdWVcbiAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAqXG4gKi9cbmZ1bmN0aW9uIHNhdmVJbnRvTmFtZXNwYWNlKGNvbXBhbnlOYW1lLCBrZXksIHZhbHVlKSB7XG4gICAgd2luZG93LnZmZXNbY29tcGFueU5hbWVdWydkYXRhVGlja2V0J11ba2V5XSA9IHZhbHVlO1xufVxuXG4vKipcbiAqIFNhdmUgdmFsdWUgaW50byBuYW1lc3BhY2UncyBjb250ZW50XG4gKlxuICogQGZ1bmN0aW9uIHNhdmVDb250ZW50SW50b05hbWVzcGFjZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wYW55TmFtZSAtIFRoZSBjb21wYW55IG5hbWUgd2hpY2ggZ29lcyB0byByZWNvdmVyIGRhdGFcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBvYmplY3Qga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSBvYmplY3Qga2V5IHZhbHVlXG4gKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gKlxuICovXG5mdW5jdGlvbiBzYXZlQ29udGVudEludG9OYW1lc3BhY2UoY29tcGFueU5hbWUsIGtleSwgdmFsdWUpIHtcbiAgICB3aW5kb3cudmZlc1tjb21wYW55TmFtZV1bJ2RhdGFUaWNrZXQnXVsnY29udGVudCddW2tleV0gPSB2YWx1ZTtcbn0iLCJpbXBvcnQgdG9vbHMgZnJvbSAnLi90b29scyc7XG5pbXBvcnQge3V0aWxzfSBmcm9tICcuL191dGlscyc7XG5cbnRvb2xzLm9uU3R5bGVzUmVhZHkgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTaXRlIHZpc3VhbGx5IHJlYWR5XCIpO1xuXG4gICAgdXRpbHMuaW5pdChkb2N1bWVudCk7XG5cbiAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogOTcwcHgpJykubWF0Y2hlcyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10aWNrZXQtZHJvcGRvd24nKS5jbGljaygpIDogbnVsbDtcblxufTtcblxudG9vbHMub25TdHlsZXNSZWFkeSgpO1xuIiwiLypcbiAqIE1pY3Jvc2l0ZXMgdG9vbHMganM6XG4gKiBFc3RlIGZpY2hlcm8gZXMgdW5hIG11ZXN0cmEgZGUgdXRpbGlkYWRlcyBwcm9waWFzIHBhcmEgbG9zIG1pY3Jvc2l0ZXMuXG4gKiBTZSBwdWVkZSBwZXJzb25hbGl6YXIgYSB0dSBndXN0b1xuICpcbiAqL1xuXG5mdW5jdGlvbiBpbml0KCl7XG5cbn1cblxubGV0IHdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xubGV0IGlzRGVza3RvcCwgaXNUYWJsZXQsIGlzTW9iaWxlO1xuaXNEZXNrdG9wID0gd2lkdGggPiA5Njk7XG5pc1RhYmxldCA9IHdpZHRoIDw9IDk2OSAmJiB3aWR0aCA+PSA3Njg7XG5pc01vYmlsZSA9IHdpZHRoIDwgNzY4ICYmIHdpZHRoID4gMzAwO1xuLy8gVE9ET1xuLy8gY29uc3QgUEFUSF9NSUNST1NJVEUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWljcm8tcGFxdWV0ZXMnKS5wYXJlbnRzKCdbZGF0YS1wYXRobWljcm9zaXRlXScpLmF0dHIoJ2RhdGEtcGF0aG1pY3Jvc2l0ZScpO1xuXG5jb25zdCBleCA9IHtcbiAgICBpc0Rlc2t0b3AsXG4gICAgaXNUYWJsZXQsXG4gICAgaXNNb2JpbGUsXG4gICAgLy9taWNyb3NpdGVQYXRoOiBQQVRIX01JQ1JPU0lURSxcbiAgICBpbml0OiBpbml0LFxuICAgIGNzc0xvYWRlZDogZmFsc2UsXG4gICAgb25TdHlsZXNSZWFkeTogKCkgPT4gbnVsbFxufTtcblxuY29uc3QgY3NzTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbZGF0YS1taWNyb2Nzc10nKTtcbmlmKGNzc01haW4pe1xuICAgIC8vQ29tbWVudGVkIGZvciBjb21wYXRpYmlsaXR5IHdpdGggRmlyZWZveFxuICAgIC8vY3NzTWFpbi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAod2luZG93LnZmZXMgfHwgd2luZG93Ll92ZikuX3V0aWxzLmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZmZXMtbXMtY29udGVudCcpLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgICBleC5jc3NMb2FkZWQgPSB0cnVlO1xuICAgICAgICBleC5vblN0eWxlc1JlYWR5KCk7XG4gICAgLy99KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhcbiJdLCJzb3VyY2VSb290IjoiIn0=