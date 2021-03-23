import tools from './tools';
import './TweenMax.min';
import './DrawSVGPlugin.min';


/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */
tools.onStylesReady = () => {
    console.log("Site visually ready");
    // DO SOMETHING

	while(document.querySelector('[data-vfes-inject-module="vfes-offer-ticket"]'))
	{
		let container=document.querySelector('[data-vfes-inject-module="vfes-offer-ticket"]')
		let component=document.querySelector(".vfes-offer-ticket");
		container.parentNode.replaceChild(component,container)
	}
  
    let elem1Animation = document.querySelector("[data-animation-element='imac']");
    let elem2Animation = document.querySelector("[data-animation-element='ipad']");
    let elem3Animation = document.querySelector("[data-animation-element='deco']");
    let elem4Animation = document.querySelector("[data-animation-element='iphone']");
    let elem5Animation = document.querySelector("[data-animation-element='sello']");
    let elem6Animation = document.querySelector("[data-animation-element='joystick']");
    let elem7Animation = document.querySelector("[data-animation-element='sello-sin']");

    let elemTitleAnimation1 = document.querySelector("[data-animation-element='category']");
    let elemTitleAnimation2 = document.querySelector("[data-animation-element='1sentence']");
    /*let elemTitleAnimation3 = document.querySelector("[data-animation-element='2sentence']");
    let elemTitleAnimation4 = document.querySelector("[data-animation-element='3sentence']");*/

    setTimeout(function(){

        TweenMax.to(elemTitleAnimation1, 1, { css: { scaleX:1, scaleY:1, opacity:1 }, delay:.8});
        TweenMax.to(elemTitleAnimation2, 1, { css: {scaleX:1, scaleY:1, opacity:1 }, delay:1});
        /*TweenMax.to(elemTitleAnimation3, 1, { css: { scaleX:1, scaleY:1, opacity:1 }, delay:1.2});
        TweenMax.to(elemTitleAnimation4, 1, { css: { scaleX:1, scaleY:1, opacity:1 }, delay:2.4});*/

        TweenMax.to(elem1Animation, .8, { bottom:-180, ease: "sine.in", delay:1});
        TweenMax.to(elem2Animation, .8, { top:10, ease: "sine.in", delay:.3});
        TweenMax.to(elem3Animation, .8, { top:15, ease: "sine.in", delay:1});
        TweenMax.to(elem4Animation, .8, { top:-40, ease: "sine.in", delay:1});
        TweenMax.from(elem5Animation, .8, { css: { rotation: 180 , opacity:0 ,scaleX:1.2, scaleY:1.2  } , delay:1.5});
        TweenMax.to(elem5Animation, .8, { css: { opacity:1   } , delay:1.5});
        TweenMax.to(elem6Animation, .8, { opacity:1, top:-30, ease: "sine.in", delay:1.8});
        TweenMax.to(elem7Animation, .8, { opacity:1, top:100, ease: "sine.in", delay:2});

    }, 200);   
}; 
/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */

window.addEventListener('load', event => {
   


});

tools.onFrameworkReady = () => {
    console.log("Site functionality ready");
    // DO SOMETHING

};
