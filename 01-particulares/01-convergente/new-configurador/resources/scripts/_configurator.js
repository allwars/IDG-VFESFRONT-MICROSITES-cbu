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
}

/**
 * Configurator.
 *
 * @module Configurator
 * @param {Object} properties - specifies the configurations for the module.
 */
export default class Configurator {
    constructor(properties = {}) {
        this.configurator = properties.$element;
        this.info = JSON.parse(properties.info);
        this.selectors = defaults.selectors;
        this.classes = defaults.classes;
        this.maxPos = 3;

        //Events
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
                    message = `Has añadido 1 ${(JSON.parse(element.getAttribute('data-configurator-config')).title).toLowerCase()}`;
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
                    message = `Has eliminado 1 ${(JSON.parse(element.getAttribute('data-configurator-config')).title).toLowerCase()}`;
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
