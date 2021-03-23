const defaults = {
    "selectors": {
        "li": ".js-li",
        "num": ".js-counter-num",
        "price": ".js-price",
        "title": ".js-title",
    },
    "classes": {
        "cardListContainerCSS": "vfes-card__list-container",
        "cardListContentCSS": "vfes-card__list-content",
        "colorBgLighGray": "vfes-colours-bg-light-gray",
        "hide": "hide",
        "ticketBlockJS": "js-ticket-block",
        "ticketBlockContentJS": "js-ticket-block-content",
        "ticketElementCSS": "vfms-ticket__element",
        "ticketItemJS": "js-ticket-item",
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
        let shouldHasButton = Object.keys(info.elements).includes(id) || config.isPromo ?  '' : `<button class="js-ticket-close"><svg class="icon" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24px' height='24px'><title>Close</title><use class="icon-v3" xlink:href='#icon3-close'></use></svg></button>`;
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

        return {newBlock, contentBlock};
    }
};

export default CREATOR;
