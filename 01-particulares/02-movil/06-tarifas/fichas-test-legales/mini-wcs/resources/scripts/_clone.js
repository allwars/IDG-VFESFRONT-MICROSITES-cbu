/*
*   Método que clona la tarifa para poscionarla
*   dentro de la cabecera
* */

const ticket = document.querySelector('[data-vfms-js="_ticket"]');
const cloneRate = document.querySelector('[data-vfms-js="_cloneRate"]');

const CLONE = {

    init: () => {
        cloneRate.parentNode.insertBefore(ticket,cloneRate.nextSibling);

    }

}

export default CLONE;
