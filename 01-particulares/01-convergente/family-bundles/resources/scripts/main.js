import tools from './tools';
import Tabs from './tabs';

class TabsFilter {
    constructor(nodeElements) {
        this.$elements = nodeElements;

    }
    init() {
        this.$elements.forEach(tabElement => {
            new Tabs(tabElement, {
                classes: {
                    tabActive: 'vf-tabs-button__active'
                }
            }).init()
        })
    }
}

class CardRateTicket {
    constructor(element) {
        this.$element = element.$element;
        this.tabs = [];

        this.tabs = [...this.$element.querySelectorAll('[role="tablist"]')].map(
            (tablist) =>
                new Tabs(tablist, {
                    selectors: {
                        tabs: `[data-ws10-card-rate-ticket-tab]`,
                    },
                }),
        );

    }

    init() {
        this.tabs.forEach((tab) => {
            tab.init();
        });
    }

}

/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */
tools.onStylesReady = () => {
    console.log("Site visually ready");

};


/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */
tools.onFrameworkReady = () => {
    console.log("Site functionality ready");

    let width = document.documentElement.clientWidth;
    let isDesktop = width > 1024;

    // DO SOMETHING
    const tabsFilter = document.querySelectorAll('[data-vf-js="tabs"]');
    const ticket = document.querySelector('[data-ws10-js="composition-card-rate"]');
    const mddHeader = document.querySelector('.mdd-desktop');
    let mddHeaderHeight = mddHeader.offsetHeight;
    const ticketStop = document.querySelector('[data-js="ticketStopped"]');
    const ticketSticky = document.querySelector('[data-js="stickyAppear"]');


    const rateInputs=document.querySelectorAll('input[data-vf-twin]');
    [...rateInputs].forEach(input=>{
        input.addEventListener('change', e=>{
            const targetId=e.currentTarget.dataset.vfTwin;
            const target=document.querySelector('#'+targetId);
            if(target){
                target.click(e);
                return false;
            }
        });
    });


    const changeMoreDetails = () => {
        const moreDetails = document.querySelectorAll('[data-ws10-collapse="card-rate-ticket-features"]');
        [...moreDetails].forEach(e => {
        if(e.classList.contains('ws10-c-rate-features__collapse-btn--active')){
            e.innerHTML= "Menos detalles";
        } else {
            e.innerHTML= "Más detalles";

        }
    });
    }

    document.addEventListener('click', changeMoreDetails);

    // TICKET FIJO

    const ticketImmobile = () => {

        let ticketHeight = ticket.offsetHeight;
        let ticketStopHeight = ticketStop.getBoundingClientRect();
        if((ticketStopHeight.top - (ticketHeight + mddHeaderHeight)) <= 0){
            ticket.parentElement.setAttribute('style', 'position:absolute; bottom: 0; top: initial;');
        } else {
            ticket.parentElement.setAttribute('style', 'position:fixed; top: 120px;');
        }

    };

    const ticketInitialPosition = () => {
        const banner = document.querySelector('[data-js="_banner"]');
        const bannerTop = banner.getBoundingClientRect().top;
        if(bannerTop >= 147){
            ticket.parentElement.setAttribute('style', 'position:absolute; top: 0;');
        }
    };

    if( isDesktop ) {
        document.addEventListener('scroll', ticketImmobile);
        document.addEventListener('scroll', ticketInitialPosition);
    }



    // Cambia el número de líneas

    const numberOfLines = document.querySelectorAll('[data-js="linesFamily"]');

    numberOfLines.forEach(numberOfLine =>{
        const numberOfLinesChange = document.querySelectorAll('[data-js="numberOfLinesChange"]');
        const numberOfLinesParent = numberOfLine.closest('.ws10-c-picker');
        const numberOfLineContent = numberOfLine.innerHTML;

        numberOfLinesParent.addEventListener('click', ()=>{
            numberOfLinesChange.forEach(numberOfLineChange =>{
                numberOfLineChange.innerHTML = numberOfLineContent;
            })
        })
    });

    // Mostramos - ocultamos STICKY

    const pointShowTicket = document.querySelector('[data-js="showSticky"]');

    const showOrHideTicket = () => {
        const pointShowTicketHeight = pointShowTicket.getBoundingClientRect();
        if (pointShowTicketHeight.top < 0){
            ticketSticky.style.opacity="1";
        } else {
            ticketSticky.style.opacity="0";
        }
    };

    document.addEventListener('scroll', showOrHideTicket);





    new TabsFilter(tabsFilter).init();

    window.ws10.utils.registerClassAndInit('composition-card-rate', CardRateTicket,);
};







