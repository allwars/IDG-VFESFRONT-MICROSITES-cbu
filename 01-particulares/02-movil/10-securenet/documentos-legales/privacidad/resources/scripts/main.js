import tools from './tools';


/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */
tools.onStylesReady = () => {
    console.log("Site visually ready");
    // DO SOMETHING

    const selectorTabMobile = document.querySelector('[data-vfms-js="buttonFibra"]');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const customParam = urlParams.get('pp');

    // Mostrar o ocultar tab y card rate según parámetro de url

    if (customParam =='f'){
        setTimeout(function(){ selectorTabMobile.click(); }, 100);
    }
};

/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */
tools.onFrameworkReady = () => {
    console.log("Site functionality ready");
    // DO SOMETHING

};
