import tools from './tools';


/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */
tools.onStylesReady = () => {
    var btn = document.querySelectorAll(".device");
	btn.forEach(function(btnItem) {
		btnItem.addEventListener('click',function ( )
		{
			var titleContainer = document.querySelector("#device-title");
			titleContainer.innerHTML= btnItem.getAttribute("data-device-name");
			var phoneModel = document.querySelector("#phone-model");
			phoneModel.value = btnItem.getAttribute("data-device-name");
		}); 
	});
};


/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */
tools.onFrameworkReady = () => {
    console.log("Site functionality ready");
    // DO SOMETHING

};
