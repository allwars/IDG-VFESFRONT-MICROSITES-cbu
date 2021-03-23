import tools from './tools';

tools.onStylesReady = () => {
	console.log("Site visually ready")

	var btn = document.querySelectorAll(".device");
	btn.forEach(function(btnItem) {
		btnItem.addEventListener('click',function ( )
		{
			var titleContainer = document.querySelector("#device-title");
			var titleContainerUltra = document.querySelector("#device-titleUltra");
			var titleContainerWatch = document.querySelector('#device-titleWatch')
			titleContainer.innerHTML= btnItem.getAttribute("data-device-name");
			titleContainerUltra.innerHTML= btnItem.getAttribute("data-device-name");
			titleContainerWatch.innerHTML= btnItem.getAttribute("data-device-name");
			var phoneModelNote = document.querySelector("#phone-modelNote");
			var phoneModelUltra = document.querySelector("#phone-modelUltra");
			var phoneModelWatch = document.querySelector("#phone-modelWatch");
			phoneModelNote.value = btnItem.getAttribute("data-device-name");
			phoneModelUltra.value = btnItem.getAttribute("data-device-name");
			phoneModelWatch.value = btnItem.getAttribute("data-device-name");
		}); 
	});
	// Select Color
	// const selectElement = document.querySelector('.packs');
	// selectElement.addEventListener('change', (event) => {
	// 	const resultado = document.querySelector('.resultado');
	// 	resultado.value=event.target.value;
	// });
};

tools.onStylesReady();
