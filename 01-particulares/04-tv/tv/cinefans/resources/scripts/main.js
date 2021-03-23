import tools from './tools';
import './materialize.min';
import TabGroupWs10 from './_tab-group.ws10';


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

    const cardConvergente = document.querySelector('[data-vfms-js="rateConvergente"]');
    const cardMobile = document.querySelector('[data-vfms-js="rateMobile"]');
    const selectorTabMobile = document.querySelector('[data-vfms-js="buttonTabMobile"]');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const customParam = urlParams.get('tv');

    let elemSelectedTab = document.getElementById('vfms-tabs-selected');

    console.log(elemSelectedTab);

    elemSelectedTab.addEventListener('vfes:changed', (event) => {

        if(event.index==1){
            cardMobile.classList.add('vfms-hide');
            cardConvergente.classList.remove('vfms-hide');
        }
        else{
            cardMobile.classList.remove('vfms-hide');
            cardConvergente.classList.add('vfms-hide');
        }


    });


    // Mostrar o ocultar tab y card rate según parámetro de url

    if (customParam =='m'){
        setTimeout(function(){ selectorTabMobile.click(); }, 1000);
        cardConvergente.classList.add('vfms-hide');
    }
    else{
        cardMobile.classList.add('vfms-hide');
    }





    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
    setInterval(() => instances[0].next(), 3500);
    var ratesList = document.getElementById('ofertas');
    var offset = ratesList.offsetTop;

    var btnOffer = document.getElementById('btn-offer');
    btnOffer.addEventListener("click", scrollSection);

    var btnOffer2 = document.getElementById('btn-offer2');
    btnOffer2.addEventListener("click", scrollSection);

    function scrollSection() {
        TweenMax.to(window, 1, { scrollTo: { y: offset - 100} });
    }



    const tabsGroup = document.querySelector('[data-vfes-js="_tabsGroup"]');
    const tabsGroupMod = new TabGroupWs10({$element: tabsGroup});

    tabsGroupMod.init();

});


