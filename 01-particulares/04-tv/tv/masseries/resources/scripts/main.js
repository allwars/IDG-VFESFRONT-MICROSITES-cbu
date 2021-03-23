import tools from './tools';
import './materialize.min';


/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */
tools.onStylesReady = () => {
    console.log("Site visually ready");
    // DO SOMETHING
};


/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */
tools.onFrameworkReady = () => {
    console.log("Site functionality ready");
    // DO SOMETHING


};

window.addEventListener('load', event => {




    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
    setInterval(() => instances[0].next(), 3500);




    /*const tabsGroup = document.querySelector('[data-vfes-js="_tabsGroup"]');
    const tabsGroupMod = new TabGroupWs10({$element: tabsGroup});

    tabsGroupMod.init();*/

});
