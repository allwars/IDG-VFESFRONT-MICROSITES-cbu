import tools from './tools';
import './materialize.min';

/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */
tools.onStylesReady = () => {
    console.log("Site visually ready");
    localStorage.removeItem('coverage');
    // DO SOMETHING



    window.scrollTo(0, 0);

    // Recolocar modulos
    let ticket = document.querySelector('.vfes-offer-ticket');
    if (ticket){
        let ticketPlaceholder = document.querySelector('[data-vfes-inject-module="vfms-ticket"]');
        ticketPlaceholder.parentNode.replaceChild(ticket,ticketPlaceholder);
    }

    let ticketMobile = document.querySelector('.vfes-sticky-down');
    if(ticketMobile){
        let ticketMobilePlaceholder = document.querySelector('[data-vfes-inject-module="vfms-ticket-mobile"]');
        ticketMobilePlaceholder.parentNode.replaceChild(ticketMobile,ticketMobilePlaceholder);
    }


    setTimeout(() => {
        const elems = document.querySelectorAll('.carousel');
        const instances = M.Carousel.init(elems, {});
        setInterval(() => instances[0].next(), 3000);
    },3000)



};

tools.onFrameworkReady = () => {



};

