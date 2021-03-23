/*
 * Microsites tools js:
 * Este fichero es una muestra de utilidades propias para los microsites.
 * Se puede personalizar a tu gusto
 *
 */

function init(){
    const cssMain = document.querySelector('link[data-microcss]');
    if(cssMain){
        //cssMain.addEventListener('load', function () {
            (window.vfes || window._vf)._utils.init(document.querySelector('.vfes-ms-content'));
            document.querySelector('.vfes-ms-content').removeAttribute("style");
            ex.cssLoaded = true;
            ex.onStylesReady();
        //});
    }
}

let width = document.documentElement.clientWidth;
let isDesktop, isTablet, isMobile;
isDesktop = width > 969;
isTablet = width <= 969 && width >= 768;
isMobile = width < 768 && width > 300;
// TODO
// const PATH_MICROSITE = document.querySelector('#micro-paquetes').parents('[data-pathmicrosite]').attr('data-pathmicrosite');

const ex = {
    isDesktop,
    isTablet,
    isMobile,
    //micrositePath: PATH_MICROSITE,
    init: init,
    cssLoaded: false,
    onStylesReady: () => null
}



export default ex
