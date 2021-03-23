const configurator = document.querySelector('[data-vfms-js="_configurator"]');
const ticket = document.querySelector('[data-vfms-js="_ticket"]');
const mdd = document.querySelector(`.mdd-${window.matchMedia('(min-width: 970px)').matches ? 'desktop' : 'mobile'}`).lastElementChild;

const SCROLL = {
    init: () => {
        document.addEventListener('scroll', SCROLL.throttle(SCROLL.moveTicket, 100));
    },
    
    moveTicket: () => {
        let ticketPos = ticket.getBoundingClientRect();
        let mddPos = mdd.getBoundingClientRect();
        let configPos = configurator.getBoundingClientRect();
        
        if(configPos.top < mddPos.height && (configPos.bottom - (ticketPos.height / 2)) > mddPos.height) {
            ticket.classList.add('fixed');
        } else {
            ticket.classList.remove('fixed');
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