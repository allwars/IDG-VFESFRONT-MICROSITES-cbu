import tools from './tools';


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
    const buttonShoppingCart = document.querySelector('[data-js="_openShoppingCart"]');
    let width = document.documentElement.clientWidth;
    const noDesktop = width <= 1024;

    console.log(noDesktop);

    buttonShoppingCart.addEventListener('click', ()=>{
        if(noDesktop){
            buttonShoppingCart.parentElement.classList.add('open');
        }
    })
};
