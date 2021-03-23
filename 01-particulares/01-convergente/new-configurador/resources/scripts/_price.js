import {includeTicketProduct, includeValueInNameSpace} from "./_wallmeric";

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

        if(content) {
            PRICE.sumPartialsFromContent(content);
            return;
        }

        contents = ticket.querySelectorAll(`${defaults.selectors.ticketBlock}:not(.${defaults.classes.hide}) + ${defaults.selectors.content}`);
        includeTicketProduct('wallmeric', contents);
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

        if(partialPrices.length > 0) {
            [].forEach.call(partialPrices, price => {
                sumPartialPrices += PRICE.transform(price.innerText);
            });
        } else {
            sumPartialPrices = null;
        }

        let block = ticket.querySelector(`[aria-controls="${content.id}"]`);

        if(block) {
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

        includeValueInNameSpace('wallmeric', 'totalPrice', PRICE.transform(sumTotalPrices) + '€/mes');

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

export default PRICE;
