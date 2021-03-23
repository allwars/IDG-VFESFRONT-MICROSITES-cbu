import tools from './tools';
import TabGroupWs10 from './_tab-group.ws10';


/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */
tools.onStylesReady = () => {
    console.log("Site visually ready");

    const tabsGroup = document.querySelector('[data-vfes-js="_tabsGroup"]');
    const tabsGroupMod = new TabGroupWs10({$element: tabsGroup});

    const cardConvergente = document.querySelector('[data-vfms-js="rateConvergente"]');
    const selectorTabMobile = document.querySelector('[data-vfms-js="buttonTabMobile"]');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const customParam = urlParams.get('tv');

    let elemSelectedTab = document.getElementById('vfms-tabs-selected');

    tabsGroupMod.init();

    elemSelectedTab.addEventListener('vfes:changed', (event) => {

        if(event.index==1){
            cardConvergente.classList.remove('vfms-hide');
        }
        else{
            cardConvergente.classList.add('vfms-hide');
        }


    });

    // Mostrar o ocultar tab y card rate según parámetro de url

    if (customParam =='m'){
        setTimeout(function(){ selectorTabMobile.click(); }, 1000);
        cardConvergente.classList.add('vfms-hide');
    }
    else{
        cardConvergente.classList.remove('vfms-hide');
    }


};


/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */


tools.onFrameworkReady = () => {
// DO SOMETHING

};

