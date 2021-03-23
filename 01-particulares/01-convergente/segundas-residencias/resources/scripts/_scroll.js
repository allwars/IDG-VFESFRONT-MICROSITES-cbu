const rate = document.querySelector('[data-vfms-js="_rate"]');
const ticket = document.querySelector('[data-vfms-js="_ticket"]');
const mdd = document.querySelector(`.mdd-${window.matchMedia('(min-width: 970px)').matches ? 'desktop' : 'mobile'}`).lastElementChild;
const heightWindow = document.querySelector('[vfms-data-show="sticky"]');
const stickyButton = document.querySelector('[vfms-data-show="show"]');
const hiddeButtons = document.querySelector('[vfms-data-js="_typeButtons"]');



const SCROLL = {
    init: () => {
        document.addEventListener('scroll', SCROLL.throttle(SCROLL.moveTicket, 100 ));
        document.addEventListener('scroll', SCROLL.throttle(SCROLL.showSticky, 100));
    },

    moveTicket: () => {
        let ticketPos = ticket.getBoundingClientRect();
        let mddPos = mdd.getBoundingClientRect();
        let ratePos = rate.getBoundingClientRect();

        if(ratePos.top < mddPos.height && (ratePos.bottom - (ticketPos.height / 2)) > mddPos.height) {
            ticket.classList.add('fixed');
            // ticket.classList.add('change-color');
            hiddeButtons.classList.add('vfms-hide-desktop');

        } else {
            ticket.classList.remove('fixed');
            // ticket.classList.remove('change-color');
            hiddeButtons.classList.remove('vfms-hide-desktop');

        }
    },

    showSticky: () => {
        let ratePosition = heightWindow.getBoundingClientRect();
        if (ratePosition.top <= 0){
            stickyButton.classList.remove('vfms-hide');
        } else {
            stickyButton.classList.add('vfms-hide');
        }


    },

    throttle: (func, limit) => {
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



}

export default SCROLL;
