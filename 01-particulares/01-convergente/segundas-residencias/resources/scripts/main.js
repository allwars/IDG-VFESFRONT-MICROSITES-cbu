import tools from './tools';
import SCROLL from './_scroll';
import CLONE from './_clone';
// import Carousel from './_carousel';

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

    localStorage.removeItem('coverage');

    console.log("Site functionality ready");
    // DO SOMETHING

    SCROLL.init();
    CLONE.init();


    // const buttonNewNumber = document.querySelectorAll('[vfms-data-js="_newNumber"]');
    // const linkPortability = document.querySelectorAll('[vfms-data-js="_linkPortability"]');
    // const linkNewNumber = document.querySelectorAll('[vfms-data-js="_linkNewNumber"]');

    // [...buttonNewNumber].forEach(button => {
    //     button.addEventListener("click", () => typeOfButton(button));
    // })

    // function typeOfButton(button) {
    //     if(!button.classList.contains("active")){
    //         const buttonType =  button.getAttribute("data-new-number");
    //         document.querySelector('[vfms-data-js="_newNumber"].active').classList.remove('active');
    //         button.classList.add("active");

    //         if(buttonType==="portability"){
    //             portability();
    //         } else {
    //             newNumberClient();
    //         }
    //     }
    // }

    // function portability() {
    //     [...linkPortability].forEach((link,index) => {
    //         link.classList.remove('hide');
    //         linkNewNumber[index].classList.add('hide');
    //     });

    // }

    // function newNumberClient() {
    //     [...linkNewNumber].forEach((link,index) => {
    //         link.classList.remove('hide');
    //         linkPortability[index].classList.add('hide');
    //     });
    // }


    window.scrollTo(0, 0);

};




