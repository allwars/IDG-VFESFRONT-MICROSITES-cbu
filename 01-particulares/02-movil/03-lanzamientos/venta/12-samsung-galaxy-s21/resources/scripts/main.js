import tools from './tools';
/*import './jquery.js';
import './bootstrap.js';
import './functions.js';*/
/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */
tools.onStylesReady = () => {
	console.log("Site visually ready");
	var btn = document.querySelectorAll(".device");
	btn.forEach(function (btnItem) {
		btnItem.addEventListener('click', function () {
			var titleContainer = document.querySelector("#device-title");
			titleContainer.innerHTML = btnItem.getAttribute("data-device-name");
			var phoneModel = document.querySelector("#phone-model");
			phoneModel.value = btnItem.getAttribute("data-device-name");
		});
	});
	//Codigo botones
	//Galaxy S21 Ultra 5G
	$('#box1_black').on('click', function () {
		$("#device1-btn2").addClass('oculto');
		$("#device1-btn1").removeClass('oculto');
	});
	$('#box1_silver').on('click', function () {
		$("#device1-btn1").addClass('oculto');
		$("#device1-btn2").removeClass('oculto');
	});

	//Galaxy S21+ 5G
	$('#box2_violet').on('click', function () {
		$("#device2-btn1").removeClass('oculto');
		$("#device2-btn2").addClass('oculto');	
		$("#device2-btn3").addClass('oculto');
	});
	$('#box2_silver').on('click', function () {
		$("#device2-btn1").addClass('oculto');
		$("#device2-btn2").removeClass('oculto');
		$("#device2-btn3").addClass('oculto');
	});
	$('#box2_black').on('click', function () {
		$("#device2-btn1").addClass('oculto');
		$("#device2-btn2").addClass('oculto');
		$("#device2-btn3").removeClass('oculto');
	});
	//Galaxy S21 5G
	$('#box3_pink').on('click', function () {
		$("#device3-btn1").removeClass('oculto');
		$("#device3-btn2").addClass('oculto');	
		$("#device3-btn3").addClass('oculto');
		$("#device3-btn4").addClass('oculto');
	});
	$('#box3_grey').on('click', function () {
		$("#device3-btn1").addClass('oculto');
		$("#device3-btn2").removeClass('oculto');
		$("#device3-btn3").addClass('oculto');
		$("#device3-btn4").addClass('oculto');
	});
	$('#box3_white').on('click', function () {
		$("#device3-btn1").addClass('oculto');
		$("#device3-btn2").addClass('oculto');
		$("#device3-btn3").removeClass('oculto');
		$("#device3-btn4").addClass('oculto');
	});
	$('#box3_violet').on('click', function () {
		$("#device3-btn1").addClass('oculto');
		$("#device3-btn2").addClass('oculto');
		$("#device3-btn3").addClass('oculto');
		$("#device3-btn4").removeClass('oculto');
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
