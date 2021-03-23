import tools from './tools';

tools.onStylesReady = () => {
	console.log("Site visually ready")

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

	const selectorTabCliente = document.querySelector('[data-vfms-js="buttonCliente"]');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const customParam = urlParams.get('s20fe');

    // Mostrar o ocultar tab y card rate según parámetro de url

    if (customParam =='cliente'){
        setTimeout(function(){ selectorTabCliente.click(); }, 100);
    }
};

tools.onStylesReady();
