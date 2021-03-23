import tools from './tools';


/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */
tools.onStylesReady = () => {
    console.log("Site visually ready");
    // DO SOMETHING


    const buttonsTypeTotal = document.querySelectorAll('[data-js-vf="_buttonVelocity"]');

    // Función para elegir el tipo de Vodafone One ilimitada Total

    [...buttonsTypeTotal].forEach(button =>{
        button.addEventListener("click", () => typeOfRate());
    })
    function typeOfRate() {
       const typeOfTotal = document.querySelectorAll('[data-js-vf="_priceTotal"]');

       [...buttonsTypeTotal].forEach((button, index) =>{
            if (button.classList.contains('vf-active')){
                button.classList.remove('vf-active');
                button.classList.remove('vf-bold');
                typeOfTotal[index].classList.add('ws10-u--hidden');
            } else {
                button.classList.add('vf-active');
                button.classList.add('vf-bold');
                typeOfTotal[index].classList.remove('ws10-u--hidden');
            }
        })
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
