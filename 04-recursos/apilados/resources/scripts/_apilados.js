/*
*   Apilados
*
* */
const accordion = document.querySelectorAll('[data-vfms-js="_accordion"]');
let i;

const STACK = {

    init: () => {

        for (i = 0; i < accordion.length; i++) {
            accordion[i].onclick = function () {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle('hide');
                this.parentElement.lastElementChild.classList.toggle('hide')
            }
        }
    }

};

export default STACK;


