/*
 * Microsites tools js:
 * Este fichero es una muestra de utilidades propias para los microsites.
 * Se puede personalizar a tu gusto
 *
 */


const MICROSITE_ID = '#home';
const cssMain = document.querySelector('link[data-microcss]');
const MICROSITE_SELECTION = closest(document.querySelector(MICROSITE_ID), '[data-pathmicrosite]');
const PATH_MICROSITE = MICROSITE_SELECTION ? MICROSITE_SELECTION.dataset.pathmicrosite : '';
let width = document.documentElement.clientWidth;
let isDesktop = width > 969;
let isTablet = width <= 969 && width >= 768;
let isMobile = width < 768 && width > 300;


/*
 * Searches for the parent node closest to the element, which complies with the selector
 * @param {} el - Description
 * @param {} selector - Description
 * @param {} stopSelector - Description
 * */
function closest(el, selector, stopSelector) {
    let retval = null;
    while (el) {
        if (el.matches(selector)) {
            retval = el;
            break;
        } else if (stopSelector && el.matches(stopSelector)) {
            break;
        }
        el = el.parentElement;
    }
    return retval;
}


/*
 * Removes the style attr, once the stylesheet have been loaded
 * return undefined
 * */
function _internalCSSInit() {
    if(!ex.cssLoaded){
        document.querySelector(MICROSITE_ID).removeAttribute("style");
        ex.cssLoaded = true;
        ex.onStylesReady();
    }
}


/*
 * Initializes functionality JS, and advices when JS is loaded.
 * return undefined
 * */
function _internalJSInit() {
    window.vfes._utils.init(document.querySelector(MICROSITE_ID));
    ex.onFrameworkReady();
}


/*
 * Check if stylesheet CSS is loaded
 * @return {boolean}
 * */
function isCSSMicroLoaded() {
    const domStyles = document.styleSheets;
    let countCSS = 0;
    [].forEach.call(domStyles, (item) => {
        const href = item.href || '';
        if (href.indexOf(PATH_MICROSITE + 'css/ws2r') !== -1) {
            console.log('WS2RCSS Loaded');
            countCSS++;
        }
        if (href.indexOf(PATH_MICROSITE + 'css/styles.css') !== -1) {
            console.log('MICROCSS Loaded');
            countCSS++
        }
    });
    return (countCSS === 2);
}


function init() {
    // DO SOMETHING
}

/*
 * listen event, once have been loaded the files CSS
 * */
if (!isCSSMicroLoaded()) {
    cssMain.addEventListener('load', _internalCSSInit);
    // Make sure microsite gets visible after 3 secs
    setTimeout(_internalCSSInit, 3000);
} else if (isCSSMicroLoaded()) {
    setTimeout(_internalCSSInit, 100);
}


/*
 * listen event, once have been loaded the files JS
 * */
if (window.vfes) {
    setTimeout(_internalJSInit, 100)
} else {
    document.addEventListener('vfes:frameworkReady', _internalJSInit);
}

const ex = {
    isDesktop,
    isTablet,
    isMobile,
    micrositeId: MICROSITE_ID,
    micrositePath: PATH_MICROSITE,
    init: init,
    cssLoaded: false,
    onStylesReady: () => null,
    onFrameworkReady: () => null
};

export default ex;
