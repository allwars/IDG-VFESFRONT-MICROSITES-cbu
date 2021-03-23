import tools from './tools';
import STACK from "./_apilados";



function throttle (func, limit) {
    let lastFunc, lastRan;

    return function() {
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

function rateStickyController(ev, rates) {

    let flag = true;

    [...rates].forEach((rate, index) => {

        const children = rate.firstElementChild.children;

        if(parseInt(rate.style.top) < rate.getBoundingClientRect().y){
            children[0].classList.remove('active');
            children[1].classList.add('hide');
            children[2].classList.remove('hide');
            flag = true;
        } else {
            if(flag) {
                children[0].classList.add('active');
                children[1].classList.remove('hide');
                children[2].classList.add('hide');
            }

            flag = false;
        }
    })

}

/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */
tools.onStylesReady = () => {
    console.log("Site visually ready");


    // DO SOMETHING

    // STICKY MOVING

    const stickyRate = document.querySelectorAll('[data-vfms-js="_stickyRate"]');

    [...stickyRate].forEach((rate, index) => rate.style.top = `${(50 * (index + 1)) + (index * 5)}px`)


    // const TopStickyRate = stickyRate.getBoundingClientRect();


    document.addEventListener('scroll', throttle(ev => rateStickyController(ev, stickyRate), 100 ));


};


/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */
tools.onFrameworkReady = () => {
    console.log("Site functionality ready");
    // DO SOMETHING

    STACK.init();


};
