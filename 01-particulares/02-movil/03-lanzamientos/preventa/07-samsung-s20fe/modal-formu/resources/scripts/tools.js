/*
 * Microsites tools js:
 * Este fichero es una muestra de utilidades propias para los microsites.
 * Se puede personalizar a tu gusto
 *
 */


const MICROSITE_ID = '#lpSamsungCanvas';
let width = document.documentElement.clientWidth;
let isDesktop, isTablet, isMobile;
isDesktop = width > 969;
isTablet = width <= 969 && width >= 768;
isMobile = width < 768 && width > 300;

function init(){}

// Busca el nodo padre más cercano a _el_, que cumpla _selector_
const closest=(el, selector, stopSelector)=> {
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
};

const MICROSITE_SELECTION = closest(document.querySelector(MICROSITE_ID), '[data-pathmicrosite]');
const PATH_MICROSITE=MICROSITE_SELECTION ? MICROSITE_SELECTION.dataset.pathmicrosite : '';


const ex = {
    isDesktop,
    isTablet,
    isMobile,
    micrositeId: MICROSITE_ID,
    micrositePath: PATH_MICROSITE,
    init: init,
    cssLoaded: false,
    onStylesReady: () => null
};

const cssMain = document.querySelector('link[data-microcss]');
if(cssMain){
    //Commented for compatibility with Firefox
    //cssMain.addEventListener('load', function () {
        (window.vfes || window._vf)._utils.init(document.querySelector('.vfes-ms-content'));
        document.querySelector('.vfes-ms-content').removeAttribute("style");
        ex.cssLoaded = true;
        ex.onStylesReady();
    //});
}

export default ex
