import CREATOR from './_creator';
import PRICE from './_price';
import MODAL from './_modal';
import SCROLL from './_scroll';
import { includeValueInNameSpace } from './_wallmeric';

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
export default class Ticket {
    constructor(properties = {}) {

        this.ticket     = properties.$element;
        this.info       = JSON.parse(properties.info);
        this.ids        = defaults.ids;
        this.selectors  = defaults.selectors;
        this.classes    = defaults.classes;
        this.attr       = defaults.attr;
        this.timePile   = [];

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
        const elementsAdded = document.querySelectorAll(`${mod.selectors.configElement}.${mod.classes.added}`);
        const configBlocks = document.querySelectorAll(mod.selectors.configBlock);

        [].forEach.call(configBlocks, block => {
            let newBlock = CREATOR.createBlock(JSON.parse(block.getAttribute(mod.attr.config)));
            mod.addBlockToTicket(newBlock);
        });

        [].forEach.call(elementsAdded, element => {
            mod.addItemToTicket(element);
        });
        
        mod.addPromosToTicket();
        PRICE.recalculate();
        SCROLL.init();
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
                
                switch(type) {
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

        PRICE.recalculate();

        mod.onChange.element = ev.element;
        mod.onChange.enemies = undefined;
        mod.onChange.toRemove = false;
        mod.ticket.dispatchEvent(mod.onChange);
    }

    counterElementManager(ev) {
        const mod = this;
        
        if(ev.num && ev.toAdd) {
            mod.addItemToTicket(ev.element);

        } else if(ev.num && !ev.toAdd) {
            mod.hideItem(mod.ticket.querySelector(`#${mod.ids.item}-${ev.element.id}${ev.num}`));
        }
        PRICE.recalculate();
    }

    defaultElementManager(ev) {
        const mod = this;
        let eleCompa = mod.info.compatibilities[ev.element.id];
        let ticketItem = mod.ticket.querySelector(`#${mod.ids.item}-${ev.element.id}`);
                    
        if(eleCompa) {
            let enemiesActivated = [];
            eleCompa.enemies.forEach(id => {
                let enemy = mod.ticket.querySelector(`#${mod.ids.item}-${id}`);
                if(enemy && !enemy.classList.contains(mod.classes.hide)) {
                    enemiesActivated.push(enemy);
                }
            });
            if(enemiesActivated.length > 0) {
                MODAL.confirm(eleCompa.text, () => {
                    enemiesActivated.forEach(enemy => {
                        mod.hideItem(enemy);
                    });
                    mod.addItemToTicket(ev.element);
                    PRICE.recalculate();
                    mod.onChange.element = ev.element;
                    mod.onChange.enemies = eleCompa.enemies;
                    mod.onChange.toRemove = false;
                    mod.ticket.dispatchEvent(mod.onChange);
                }, () => {
                    // Cancel code...
                });
            } else {
                let isAdded = ev.element.classList.contains(mod.classes.added);
                
                if(isAdded) {
                    ev.element.querySelector(mod.selectors.configInitialPay) ? mod.ticket.querySelector(mod.selectors.ticketInitialPay).parentElement.classList.add(mod.classes.hide) : null;
    
                    mod.hideItem(ticketItem);
                } else {
                    mod.addItemToTicket(ev.element);
                }

                PRICE.recalculate();

                mod.onChange.element = ev.element;
                mod.onChange.enemies = undefined;
                mod.onChange.toRemove = isAdded;
                mod.ticket.dispatchEvent(mod.onChange);
            }
        } else {
            let isAdded = ev.element.classList.contains(mod.classes.added);

            if(isAdded) {
                ev.element.querySelector(mod.selectors.configInitialPay) ? mod.ticket.querySelector(mod.selectors.ticketInitialPay).parentElement.classList.add(mod.classes.hide) : null;

                mod.hideItem(ticketItem);
            } else {
                mod.addItemToTicket(ev.element);
            }

            PRICE.recalculate();

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

        if(!ticketItem) {
            let block = mod.ticket.querySelector(`#${blockConfig.id}`);

            ticketItem = CREATOR.createItem({
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
        
        if(initialPay) {
            let ticketInitPay = mod.ticket.querySelector(mod.selectors.ticketInitialPay);
            ticketInitPay.innerText = initialPay.innerText;
            ticketInitPay.parentElement.classList.remove(mod.classes.hide);
            includeValueInNameSpace('wallmeric', 'initialPay', initialPay.innerText);
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

        if(promoBlock) {
            let aux = promoBlock;
            promoBlock = {};
            promoBlock.newBlock = aux;
            promoBlock.contentBlock = aux.nextElementSibling;
            promoBlock.contentBlock.innerHTML = '';
        } else {
            promoBlock = CREATOR.createBlock({
                id: mod.ids.promos,
                svg: "icon-bonus-mid",
                title: "Promociones",
                button: true
            });

            promoBlock.newBlock.classList.add(mod.classes.promo);
        }

        mod.info.promos.forEach(promo => {
            promoCounter++;
            promoBlock.contentBlock.appendChild(CREATOR.createItem({
                id: promo.id,
                title: '',
                description: promo.description,
                price: promo.price,
                list: [],
                isPromo: true
            }, mod.info));
        });

        if(rateActivated) {
            mod.info.elements[rateActivated.id].promos.forEach(promo => {
                promoCounter++;
                promoBlock.contentBlock.appendChild(CREATOR.createItem({
                    title: '',
                    description: promo.description,
                    price: promo.price,
                    list: [],
                    isPromo: true
                }, mod.info));
            });
        }

        if(promoCounter > 0) {
            promoBlock.newBlock.querySelector(mod.selectors.quantity).innerText = promoCounter;
            promoBlock.newBlock.classList.remove(mod.classes.hide);
        }

        mod.addBlockToTicket(promoBlock);
    }

    showItem(item) {
        const mod = this;
        const daddy = item.parentElement;
        const block = daddy.previousElementSibling;

        if(item.classList.contains(mod.classes.configMain)) {
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
            if(rel.selector && rel.selector !== '') {
                const el = document.getElementById(rel.selector);
                
                if(el) {
                    const price = el.querySelector(mod.selectors.price);
                    const title = el.querySelector(mod.selectors.title);
                    const description = el.querySelector(mod.selectors.description);
                    const ticketItem = mod.ticket.querySelector(`#${mod.ids.item}-${el.id}`);
                    
                    if(price && rel.newPrice >= 0) { price.innerText = `${rel.newPrice}€` }
                    if(title && rel.newTitle) { title.innerText = rel.newTitle }
                    if(description && rel.newDescription) { description.innerText = rel.newDescription }
                    
                    if(ticketItem) {
                        ticketItem.querySelector(mod.selectors.partialPrice).innerText = `${rel.newPrice}€`;
                        rel.newTitle ? ticketItem.querySelector(mod.selectors.ticketItemTitle).innerText = rel.newTitle : null;
                    }

                    if(rel.defaultAdded) {
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
            if(!ticketBody.classList.contains(mod.classes.hide)) {
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

        if(contentsBlockVisible.length > 0) {
            if(contentsBlockVisible[contentsBlockVisible.length-1].id === mod.ids.promos) {
                contentsBlockVisible = contentsBlockVisible.slice(0, -1);
            }

            rateObject.rels.forEach(rel => {
                if(rel.defaultAdded) {
                    contentsBlockVisible.forEach(content => {
                        [...content.nextElementSibling.children].forEach(child => {
                            if(child.id !== `${mod.ids.item}-${rel.selector}` && !child.classList.contains(mod.classes.hide)) {
                                countDiferentIds++;
                            }
                        });
                    });
                    counterTrueRels++;
                }
            });
        }

        if(countDiferentIds > 0 || (counterTrueRels === 0 && contentsBlockVisible.length > 0)) {
            this.showTicketButton();
        }else {
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
        let idTicketItem = ticketItem.id.replace(this.ids.item+'-', '');

        if(closeButton) {
            closeButton.addEventListener('click', () => {
                let itemConfig = document.getElementById(idTicketItem);
                mod.hideItem(closeButton.parentElement.parentElement);
                PRICE.recalculate();

                if(itemConfig.querySelector(mod.selectors.configInitialPay)) {
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