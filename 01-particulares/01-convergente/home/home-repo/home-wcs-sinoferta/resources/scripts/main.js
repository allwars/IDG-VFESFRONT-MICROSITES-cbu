import tools from './tools';


/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */
tools.onStylesReady = () => {
    console.log("Site visually ready");
	
	while(document.querySelector('[data-vfes-inject-module="vfes-offer-ticket"]'))
	{
		let container=document.querySelector('[data-vfes-inject-module="vfes-offer-ticket"]')
		let component=document.querySelector(".vfes-offer-ticket");
		container.parentNode.replaceChild(component,container)
	}


};


/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */
tools.onFrameworkReady = () => {
    console.log("Site functionality ready");
    
  


};
