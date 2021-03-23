//import './ws2r.v14.js';
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
    /* 
    TO DO
    llamar al click de este boton en el submit
    data-role="response-opener"
    */

    function stateChange(newState) {
        setTimeout(function() {
            if (typeof window.DFI != 'undefined' && !window.DFI.scheduleValid()) {

                document.querySelector('[data-call="scheduleCall"]').style.display = "none";
                document.querySelector('[data-msg="scheduleMsg"]').style.display = "block";
                document.querySelector('[data-call-bottom="scheduleCallBottom"]').style.display = "none";
                document.querySelector('[data-msg-bottom="scheduleMsgBottom"]').style.display = "block";
            }
        }, 3000);
    }
    stateChange(-1);

    let userIntention;
    const formButtons = tools.micrositeSelection.querySelectorAll('[data-role="form-trigger"]');
    const form = tools.micrositeSelection.querySelector('.wg-form-sticky');
    const toggleFormButton = tools.micrositeSelection.querySelector('[data-role="wg-form-sticky-collapse"]');



    const onsubmit = (e) => {
        e.preventDefault();
        form.querySelector('input[type="submit"]').setAttribute('disabled', 'disabled')
        form.querySelector('[data-role="response-opener"]').click();
        switchForm();
    };
    const switchForm = () => {
        form.classList.toggle('wg-form-sticky--on');
    };

    [].forEach.call(formButtons, (button) => {
        button.addEventListener('click', switchForm);
    });


    toggleFormButton.addEventListener('click', () => {
        //window.removeEventListener('scroll', throttleScroll);
        userIntention = true;
        switchForm();
    });

    tools.micrositeSelection.querySelector('[data-role="wg-form-sticky-close"]').addEventListener('click', switchForm);

    /* if(window.location.hostname.includes('10.225.239.197') && !window.DFI){
        tools.loadScript(`//t.womtp.com/slider/c/vodafone-empresas/dfi/init.js?v=${Date.now()}`);
    } */

    const treshold = form.offsetHeight / 2;
    const throttleScroll = tools.throttle(e => {
        if (window.scrollY === 0) userIntention = false;
        if (!userIntention && window.scrollY > treshold) {
            form.classList.remove('wg-form-sticky--on');
            toggleFormButton.classList.add('wg-form-sticky__collapse-btn--show');
        }
        if (!userIntention && window.scrollY < 50) {
            form.classList.add('wg-form-sticky--on');
        }

    }, 100);



    if (tools.isDesktop) {
        switchForm();
        window.addEventListener('scroll', throttleScroll);
    }

    if (window.location.hostname == "localhost") tools.micrositeSelection.classList.add('debug');


    setTimeout(() => {
        tools.micrositeSelection.querySelector(tools.micrositeId).removeAttribute("style");
        form.addEventListener('submit', onsubmit);
    }, 1000);



};