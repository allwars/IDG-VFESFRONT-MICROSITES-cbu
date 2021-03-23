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

export function includeValueInNameSpace(companyName, key, value) {
    if(isNamespaceUndefined(companyName)) {
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
export function includeTicketProduct(companyName, ticket) {
    const ticketList = ticket || {};
    const arrClass = ['.js-ticket-item-title', '.js-ticket-partial-price', '.js-ticket-item'];
    
    if(isNamespaceUndefined(companyName)) {
        registerNamespace(companyName);
    }

    saveIntoNamespace(companyName, 'content', {});
    
    [...ticketList].forEach(item => {
        if (item.id !== 'accordion-ticket-promos') {
            const visibleEls = item.querySelectorAll(`${arrClass[2]}:not(.hide)`);
            let keyObject, value;

            if(item.id.indexOf('counter') >= 0) {
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
    })
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
    window.vfes[companyName] = { "dataTicket": {} };
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