import tools from './tools';

/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */
tools.onStylesReady = () => {
    console.log("Site visually ready");
    // DO SOMETHING

    const typeOfLineButton = document.querySelectorAll('[data-js-vf="_buttonTypeLine"]');
    const infosPortability = document.querySelectorAll('[data-js-vf="_portability"]');
    const infosNewNumber = document.querySelectorAll('[data-js-vf="_newNumber"]');

    const showSticky = document.querySelector('[data-js-vf="_showOrHideSticky"]');
    const stickyRate = document.querySelector('[data-js-vf="_stickyRate"]');

    const banner = document.querySelector('[data-js="_banner"]');
    const ticket = document.querySelector('[data-js-vf="_ticket"]');
    const mddFooter = document.querySelector('.MDDfooter');
    const mddHeader = document.querySelector('.mdd-desktop');


     // TEST LÍNEAS ADICIONALES

    const aditionalLineTicketBlock = document.querySelector('[data-js-vf="_aditionalLineTicketBlock"]');
    const ratesWithoutLine = document.querySelector('[data-js-vf="_ratesWithoutLine"]');
    const ratesWithLinePortability = document.querySelector('[data-js-vf="_ratesWithLinePortability"]');
    const ratesWithLineNewNumber = document.querySelector('[data-js-vf="_ratesWithLineNewNumber"]');

    const ratesWithoutLineSticky = document.querySelector('[data-js-vf="_ratesWithoutLineSticky"]');
    const ratesWithLinePortabilitySticky = document.querySelector('[data-js-vf="_ratesWithLinePortabilitySticky"]');
    const ratesWithLineNewNumberSticky = document.querySelector('[data-js-vf="_ratesWithLineNewNumberSticky"]');

    const ratesWithLinePortability2 = document.querySelector('[data-js-vf="_ratesWithLinePortability2"]');
    const ratesWithLineNewNumber2 = document.querySelector('[data-js-vf="_ratesWithLineNewNumber2"]');

    const addLine = document.querySelector('[data-js-vf="_addLine"]');
    const deleteLine = document.querySelector('[data-js-vf="_deleteLine"]');
    const deleteLine2 = document.querySelector('[data-js-vf="_deleteLine2"]');

    const portabilityAdditional = document.querySelector('[data-js-vf="_portabilityAdditional"]');
    const newNumberAdditional = document.querySelector('[data-js-vf="_newNumberAdditional"]');
   
    //estado inicial
    aditionalLineTicketBlock.classList.add('ws10-u--hidden');
    deleteLine.classList.add('ws10-u--hidden');
    ratesWithLinePortability.classList.add('ws10-u--hidden');
    ratesWithLineNewNumber.classList.add('ws10-u--hidden');

    ratesWithLinePortabilitySticky.classList.add('ws10-u--hidden');
    ratesWithLineNewNumberSticky.classList.add('ws10-u--hidden');


    //botones añadir y eliminar línea adicional
    addLine.addEventListener('click', () => addAdditionalLine());
    deleteLine.addEventListener('click', () => deleteAdditionalLine());
    deleteLine2.addEventListener('click', () => deleteAdditionalLine());

    portabilityAdditional.addEventListener('click', () => selectLinePortability());
    newNumberAdditional.addEventListener('click', () => selectLineNewNumber());

    let lineTypeAdditionalValue = "portability";

    function selectLinePortability() {
        lineTypeAdditionalValue = "portability";   
        portabilityAdditional.classList.add('vfms-switch--button__active');      
        newNumberAdditional.classList.remove('vfms-switch--button__active');
        
            
    }
    function selectLineNewNumber() {
        lineTypeAdditionalValue = "newNumber";   
        newNumberAdditional.classList.add('vfms-switch--button__active');
        portabilityAdditional.classList.remove('vfms-switch--button__active');   
      
                  
    }
    function addAdditionalLine() {
        if(lineTypeAdditionalValue==="portability"){

            
            ratesWithLinePortability.classList.remove('ws10-u--hidden');
            ratesWithLineNewNumber.classList.add('ws10-u--hidden');
            ratesWithoutLine.classList.add('ws10-u--hidden');

            ratesWithLinePortabilitySticky.classList.remove('ws10-u--hidden');
            ratesWithLineNewNumberSticky.classList.add('ws10-u--hidden');
            ratesWithoutLineSticky.classList.add('ws10-u--hidden');

            ratesWithLinePortability2.classList.remove('ws10-u--hidden');
            ratesWithLineNewNumber2.classList.add('ws10-u--hidden');
            

        } else if (lineTypeAdditionalValue==="newNumber") {
        
            ratesWithLineNewNumber.classList.remove('ws10-u--hidden');
            ratesWithLinePortability.classList.add('ws10-u--hidden');
            ratesWithoutLine.classList.add('ws10-u--hidden');

            ratesWithLineNewNumberSticky.classList.remove('ws10-u--hidden');
            ratesWithLinePortabilitySticky.classList.add('ws10-u--hidden');
            ratesWithoutLineSticky.classList.add('ws10-u--hidden');

            ratesWithLineNewNumber2.classList.remove('ws10-u--hidden');
            ratesWithLinePortability2.classList.add('ws10-u--hidden');
           
  
        }
        aditionalLineTicketBlock.classList.remove('ws10-u--hidden');
        deleteLine.classList.remove('ws10-u--hidden');
        addLine.classList.add('ws10-u--hidden');
    }
    function deleteAdditionalLine() {
        aditionalLineTicketBlock.classList.add('ws10-u--hidden');
        deleteLine.classList.add('ws10-u--hidden');
        addLine.classList.remove('ws10-u--hidden');
        ratesWithoutLine.classList.remove('ws10-u--hidden');
        ratesWithoutLineSticky.classList.remove('ws10-u--hidden');


        ratesWithLinePortability.classList.add('ws10-u--hidden');
        ratesWithLineNewNumber.classList.add('ws10-u--hidden');
        ratesWithLineNewNumberSticky.classList.add('ws10-u--hidden');
        ratesWithLinePortabilitySticky.classList.add('ws10-u--hidden');
    }

    let width = document.documentElement.clientWidth;
    let isDesktop = width > 1024;
    let isTablet = width <= 1024 && width >= 768;

    [...typeOfLineButton].forEach(label => {
        label.addEventListener('click', () => typeLine(label));
    });

    document.addEventListener('scroll', showStickyRate);

    if( isDesktop || isTablet ){
        document.addEventListener('scroll', positionOfTicket);
        document.addEventListener('scroll', ticketOpacity);
    }
    function typeLine(label) {
        const lineType = label.getAttribute("data-js-vf-value");
        if(lineType==="newNumber"){
            newNumber()
        } else {
            portability()
        }
    }
    function portability() {
        [...infosPortability].forEach((infoPortability,index) => {
            infoPortability.classList.remove('ws10-u--hidden');
            infosNewNumber[index].classList.add('ws10-u--hidden');
        });

    }
    function newNumber() {
        [...infosNewNumber].forEach((infoNewNumber,index) => {
            infoNewNumber.classList.remove('ws10-u--hidden');
            infosPortability[index].classList.add('ws10-u--hidden');
        });
    }

    function showStickyRate(){
        let showStickyHeight = showSticky.getBoundingClientRect();
        if (showStickyHeight.top <= 0){
            stickyRate.classList.remove('ws10-u--hidden')

        } else {
            stickyRate.classList.add('ws10-u--hidden')

        }
    }

    function ticketOpacity(){
        let ticketHeight = ticket.offsetHeight;
        let mddHeaderHeight = mddHeader.offsetHeight;
        let mddFooterHeight = mddFooter.getBoundingClientRect();

        if((mddFooterHeight.top - (ticketHeight + mddHeaderHeight)) < 0){
            ticket.classList.add('vf-ticket__opacity0')
        } else {
            ticket.classList.remove('vf-ticket__opacity0')

        }
    }

    function positionOfTicket() {
        let infoBanner = banner.getBoundingClientRect();
        if(infoBanner.top < 0){
            ticket.setAttribute('style', 'position:fixed; top: 50px;');
        } else {
            ticket.setAttribute('style', 'position:absolute;');
        }

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
