import tools from './tools';


/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */
tools.onStylesReady = () => {
  console.log("Site visually ready");
  // DO SOMETHING


  const showSticky = document.querySelector('[data-js-vf="_showOrHideSticky"]');
  const stickyRate = document.querySelector('[data-js-vf="_stickyRate"]');

  const banner = document.querySelector('[data-js="_banner"]');
  const ticket = document.querySelector('[data-js-vf="_ticket"]');
  const mddFooter = document.querySelector('.MDDfooter');
  const mddHeader = document.querySelector('.mdd-desktop');

  let width = document.documentElement.clientWidth;
  let isDesktop = width > 1024;
  let isTablet = width <= 1024 && width >= 768;


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
