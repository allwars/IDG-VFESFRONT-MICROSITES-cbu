
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
};


console.warn('pozi amparo');
tools.onStylesReady();
