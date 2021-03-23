import tools from './tools';
import STACK from "./_apilados";


function throttle(func, limit) {
    let lastFunc, lastRan;

    return function () {
        const ctx = this;
        const args = arguments;

        if (!lastRan) {
            func.apply(ctx, args);
            lastRan = Date.now();
        } else {

            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(ctx, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}

/* function rateStickyController(rates) {
     [...rates].forEach(rate => {

         const children = rate.firstElementChild.children;
         if(parseInt(rate.style.top) < rate.getBoundingClientRect().y){
             children[0].classList.remove('active');
             children[1].classList.add('hide');
             children[2].classList.remove('hide');
         } else {
             children[0].classList.add('active');
             children[1].classList.remove('hide');
             children[2].classList.add('hide');
         }

     })

 }*/

/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */


window.addEventListener('load', function () {
});


tools.onStylesReady = () => {
    console.log("Site visually ready");

    // window.matchMedia('(min-width: 970px)').matches ? document.querySelector('.js-ticket-dropdown').click() : null;


    // Sticky only mobile

    // window.matchMedia('(max-width: 970px)').matches ? stickyStart() : null;
    // function stickyStart(){

    /*const stickyRate = document.querySelectorAll('[data-vfms-js="_stickyRate"]');
    [...stickyRate].forEach((rate, index) => rate.style.top = `${(50 * (index + 1)) + (index * 5)}px`)
    document.addEventListener('scroll', throttle(() => rateStickyController(stickyRate), 100 ));*/

    // const rebootFile = document.querySelector('script[src="js/ws2r.v15.js"]');
    const scripts = document.querySelectorAll('script');

    [].forEach.call(scripts, item => {
        if (item.src.indexOf('ws2r.v15.js') > 0) {
            console.log('Lanzando Sticky');
            sticky();
        }
    });
};

//};


/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */

tools.onFrameworkReady = () => {
    console.log("Site functionality ready");
    // DO SOMETHING

    STACK.init();

};

function sticky() {
    const container = document.querySelector('[data-vfms-js="_rateContainer"]');
    const heightMenu = document.querySelector('nav[role="navigation"]').getBoundingClientRect().height;
    const rateBox = document.querySelectorAll('[data-vfms-js="_stickyRate"]');
    const stickyHeightForce = 84;
    //const heightMenu = document.querySelector('[data-js="mainmenu"]').clientHeight;

    const distBoxTopList = [];
    const boxStickyList = [];
    const calculateHeightBox = [];

    // Iteracion sobre las cajas para recuperar los valores que necesito
    [...rateBox].map((item, idx) => {
        // Listado de elemento a mostrar en el sticky
        boxStickyList.push(item.querySelector('.sticky'));
        // cualculo la propiedad top para el fixed de cada sticky que tengo que mostrar, sumandole como valor inicial el menu que ya se ve. Si no hubiera menu en sticky este valor debería de ser 0 inicialmente.
        calculateHeightBox.push(
            // (idx - 1 >= 0) ? rateBox[idx - 1].querySelector('.sticky').scrollHeight + calculateHeightBox[idx - 1] : heightMenu
            (idx - 1 >= 0) ? stickyHeightForce + calculateHeightBox[idx - 1] : heightMenu
        );
        // Array con la distancia desde el top de cada caja al border superior
        distBoxTopList.push(item.getBoundingClientRect().y - calculateHeightBox[idx]);
    });
    distBoxTopList.unshift(0);
    distBoxTopList.pop();
    // debugger;
    function stickyController() {
        [...distBoxTopList].map((distTopBox, idx) => {
            const isContainClassAccess = boxStickyList[idx].classList.contains('access');
            const positiveValueY = -container.getBoundingClientRect().y;
            if (isContainClassAccess && distTopBox < positiveValueY) {
                boxStickyList[idx].classList.remove('access');
                boxStickyList[idx].style.top = calculateHeightBox[idx] + 'px';
            } else if (!isContainClassAccess && distTopBox - heightMenu > positiveValueY) {
                boxStickyList[idx].classList.add('access');
            }
        })
    }
    document.addEventListener('scroll', throttle(()=> stickyController(), 100 ));

}
