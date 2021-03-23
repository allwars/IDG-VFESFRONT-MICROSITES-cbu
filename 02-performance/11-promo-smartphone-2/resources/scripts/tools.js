/*
 * Microsites tools js:
 * Este fichero es una muestra de utilidades propias para los microsites.
 * Se puede personalizar a tu gusto
 *
 */


const MICROSITE_ID = '#promo-smartphone-2';
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

function loadScript(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}


const throttle = function(fn, threshhold, scope) {
    threshhold = threshhold || 250;
    var last,
        deferTimer;
    return function() {
        var context = scope || this;

        var now = +new Date,
            args = arguments;
        if (last && now < last + threshhold) {
            // hold on to it
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function() {
                last = now;
                fn.apply(context, args);
            }, threshhold);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
};


/*
 * Removes the style attr, once the stylesheet have been loaded
 * return undefined
 * */
function _internalCSSInit() {
    MICROSITE_SELECTION.removeAttribute("style");
    ex.cssLoaded = true;
    ex.onStylesReady();
}


/*
 * Initializes functionality JS, and advices when JS is loaded.
 * return undefined
 * */
function _internalJSInit() {
    window.vfes._utils.init(MICROSITE_SELECTION);
    ex.onFrameworkReady();
}


/*
 * Check if stylesheet CSS is loaded
 * @return {boolean}
 * */
function isCSSMicroLoaded() {
    const domStyles = document.styleSheets;
    let countCSS = 0;
    [].forEach.call(domStyles, (item, i) => {
        const href = item.href || '';
        if (href.indexOf('ws2r') !== -1) {
            console.log('WS2RCSS Loaded');
            countCSS++;
        }
        if (href.indexOf(PATH_MICROSITE + 'css/styles.css') !== -1) {
            console.log('MICROCSS Loaded');
            countCSS++;
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
    micrositeSelection: MICROSITE_SELECTION,
    init: init,
    loadScript: loadScript,
    throttle: throttle,
    cssLoaded: false,
    onStylesReady: () => null,
    onFrameworkReady: () => null
};

export default ex;