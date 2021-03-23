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
}

/**
 * Common.
 *
 * @module Common
 * @param {Object} properties - specifies the configurations for the module.
 */
export default class Common {
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
        if(!this.$element.hasAttribute('data-common-function')) {
            throw 'Falta el atributo "data-common-function" en el elemento.';
        }

        switch(this.$element.getAttribute('data-common-function')) {
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
            if(!button.hasAttribute('data-initialized')) {
                if(!button.hasAttribute('aria-controls')) {
                    throw 'ACCORDION ERROR! El elemento no tiene el atributo "aria-controls" con el id de su contenido.';
                }
                
                if(!mod.querySelector(`#${button.getAttribute('aria-controls')}`)) {
                    throw `ACCORDION ERROR! El elemento cuyo id es ${mod.getAttribute('aria-controls')} no existe.`;
                }

                if(!button.querySelector(this.selectors.accordion.show)) {
                    throw `ACCORDION ERROR! Debe incluir en el botón un elemento con la clase ${this.selectors.accordion.show} para identificar el texto de apertura`;
                }

                if(!button.querySelector(this.selectors.accordion.hide)) {
                    throw `ACCORDION ERROR! Debe incluir en el botón un elemento con la clase ${this.selectors.accordion.hide} para identificar el texto de cierre`;
                }

                button.setAttribute('data-initialized', 'true');
                button.hasAttribute('aria-expanded') ? null : button.setAttribute('aria-expanded', 'false');

                if(button.getAttribute('aria-expanded') === 'true') {
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

        if(button.getAttribute('aria-expanded') === 'true') {
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
