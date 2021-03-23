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
  const secondLine = document.querySelector('[data-js-vf="_secondLine"]');
  const secondLine2 = document.querySelector('[data-js-vf="_secondLine2"]');
  const terminalesPorta = document.querySelector('[data-js-vf="_terminales"]');


  const showSticky = document.querySelector('[data-js-vf="_showOrHideSticky"]');
  const stickyRate = document.querySelector('[data-js-vf="_stickyRate"]');

  const banner = document.querySelector('[data-js="_banner"]');
  const ticket = document.querySelector('[data-js-vf="_ticket"]');
  const mddFooter = document.querySelector('.MDDfooter');
  const mddHeader = document.querySelector('.mdd-desktop');

  let width = document.documentElement.clientWidth;
  let isDesktop = width > 1024;
  let isTablet = width <= 1024 && width >= 768;

  [...typeOfLineButton].forEach(label => {
    label.addEventListener('click', () => typeLine(label));

  });

  function typeLine(label) {
    const lineType = label.getAttribute("data-js-vf-value");
    if(lineType==="newNumber"){
      newNumber()
    } else {
      portability()
    }
  }
  function portability() {
    secondLine.classList.remove('ws10-u--hidden');
    secondLine2.classList.remove('ws10-u--hidden');
    terminalesPorta.classList.remove('ws10-u--hidden');

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

    secondLine.classList.add('ws10-u--hidden');
    secondLine2.classList.add('ws10-u--hidden');
    terminalesPorta.classList.add('ws10-u--hidden');
  }



  document.addEventListener('scroll', showStickyRate);

  if( isDesktop || isTablet ){
    document.addEventListener('scroll', positionOfTicket);
    document.addEventListener('scroll', ticketOpacity);
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
    console.log(infoBanner)
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
