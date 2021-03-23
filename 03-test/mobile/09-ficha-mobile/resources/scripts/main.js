import tools from './tools';
import {utils} from './_utils';

tools.onStylesReady = () => {
    console.log("Site visually ready");

    utils.init(document);

    initBotones();

    window.matchMedia('(min-width: 970px)').matches ? document.querySelector('.js-ticket-dropdown').click() : null;

    var ticketTotal = "";

    var btnRateMobile = document.getElementById('btn-rates-mobile');
    var btnRateConvergente = document.getElementById('btn-rates-convergente');

    var containerRateMobile = document.getElementById('mobile-rates-container');
    var containerRateConvergente = document.getElementById('convergente-rates-container');

    containerRateConvergente.style.display="none";   


    btnRateMobile.addEventListener("click", abrirTarifasMovil);
    btnRateConvergente.addEventListener("click", abrirTarifasConvergente);

    function abrirTarifasMovil(){
        containerRateMobile.style.display="block";
        containerRateConvergente.style.display="none";   
    }
    function abrirTarifasConvergente(){ 
        containerRateMobile.style.display="none";
        containerRateConvergente.style.display="block";       
    }

    let btnCapitaCerrar= document.getElementById('btn-capita-cerrar');
    let btnInfo = document.getElementById('btn-info');
    let infoCapita = document.getElementById('info-capita');


    btnInfo.addEventListener('click', abrirCapita);
    function abrirCapita(){
      infoCapita.classList.remove('hide');
    }

    btnCapitaCerrar.addEventListener('click', cerrarCapita);
    function cerrarCapita(){
      infoCapita.classList.add('hide');
    }

      //ticket

    var precioTotalMostrado = 1.33 ;

    var ticketPrecioTotal = document.getElementById('ticket-precio-total');
    var ticketPrecioTotal2 = document.getElementById('ticket-precio-total2');

    ticketPrecioTotal.innerHTML=precioTotalMostrado;
    ticketPrecioTotal2.innerHTML=precioTotalMostrado;





    var carrusel3Items= document.getElementById('carrusel3-item');
    var carrusel2Items= document.getElementById('carrusel2-item');
    var carrusel1Items= document.getElementById('carrusel1-item');
    var carrusel4Items= document.getElementById('carrusel4-item');

    carrusel3Items.style.display="none";
    carrusel2Items.style.display="none";
    carrusel1Items.style.display="block";
    carrusel4Items.style.display="none";

    var gafas= document.getElementById('gafas');
    var airpods= document.getElementById('airpods');

    var btnGafas = document.getElementById('btn-gafas');
    var btnGafasEliminar = document.getElementById('btn-gafas-eliminar');
    var btnAirpods = document.getElementById('btn-airpods');
    var btnAirpodsEliminar = document.getElementById('btn-airpods-eliminar');


    btnGafas.addEventListener('click', seleccionarGafas);
    btnGafasEliminar.addEventListener('click', eliminarGafas);
    btnAirpods.addEventListener('click', seleccionarAirpods);
    btnAirpodsEliminar.addEventListener('click', eliminarAirpods);


    var gafasContainerTicket = document.getElementById('gafas-container');
    var airpodsContainerTicket = document.getElementById('airpods-container');

    var ticketPrecioAccesorio= document.getElementById('ticket-precio-accesorio');


    gafasContainerTicket.style.display="none";
    airpodsContainerTicket.style.display="none";
    let precioAcce = 0;
    ticketPrecioAccesorio.innerHTML= precioAcce;

    function seleccionarGafas(){
      gafas.classList.add('added');
      btnGafasEliminar.style.display="block";
      gafasContainerTicket.style.display="block";
      aperturaAccesorio.style.display="block";
      precioAcce += 29,99; 
      ticketPrecioAccesorio.innerHTML= precioAcce.toFixed(2);  
      precioTotalMostrado += 29,99;
      ticketPrecioTotal.innerHTML=precioTotalMostrado.toFixed(2);  
      ticketPrecioTotal2.innerHTML=precioTotalMostrado.toFixed(2);  
    }
    function eliminarGafas(){
      gafas.classList.remove('added');
      btnGafasEliminar.style.display="none";
      gafasContainerTicket.style.display="none";
      precioAcce -= 29,99; 
      ticketPrecioAccesorio.innerHTML= precioAcce.toFixed(2);  
      precioTotalMostrado -= 29,99;
      ticketPrecioTotal.innerHTML=precioTotalMostrado.toFixed(2);  
      ticketPrecioTotal2.innerHTML=precioTotalMostrado.toFixed(2);  
    }
    function seleccionarAirpods(){
      airpods.classList.add('added');
      btnAirpodsEliminar.style.display="block";
      airpodsContainerTicket.style.display="block";
      aperturaAccesorio.style.display="block";
      precioAcce += 39,99; 
      ticketPrecioAccesorio.innerHTML= precioAcce.toFixed(2);  
      precioTotalMostrado += 39,99;
      ticketPrecioTotal.innerHTML=precioTotalMostrado.toFixed(2);  
      ticketPrecioTotal2.innerHTML=precioTotalMostrado.toFixed(2);  
    }
    function eliminarAirpods(){
      airpods.classList.remove('added');
      btnAirpodsEliminar.style.display="none";
      airpodsContainerTicket.style.display="none";
      precioAcce -= 39,99; 
      ticketPrecioAccesorio.innerHTML= precioAcce.toFixed(2);  
      precioTotalMostrado -= 39,99;
      ticketPrecioTotal.innerHTML=precioTotalMostrado.toFixed(2);  
      ticketPrecioTotal2.innerHTML=precioTotalMostrado.toFixed(2);  
    }

    var checkPorta = document.getElementById('portabilidad');
    var checkNumNuevo = document.getElementById('num-nuevo');
    var checkPlazos = document.getElementById('plazos');
    var checkUnico = document.getElementById('unico');
    var mesesContainer = document.getElementById('meses');
    var mes36 = document.getElementById('mes-36');
    var mes24 = document.getElementById('mes-24');
    var mes36Inactive = document.getElementById('mes-36-inactive');
    var mes36Active = document.getElementById('mes-36-active');
    var mes24Inactive = document.getElementById('mes-24-inactive');
    var mes24Active = document.getElementById('mes-24-active');


    checkPorta.addEventListener('change', doPortabilidad)
    function doPortabilidad() {  
        if (checkPorta.checked) {
            checkPlazos.disabled=false;
            //ticketTotal +=49;
            //document.write(ticketTotal);
        } else {     
        }
    }
    checkNumNuevo.addEventListener('change', doNumNuevo)
    function doNumNuevo() { 
        if (checkNumNuevo.checked) {
            checkPlazos.disabled=true;
        } else {   
        }
    }

    let tipoPagoPlazos = true;

    checkPlazos.addEventListener('change', doPlazos)
    function doPlazos() { 
        if (checkPlazos.checked) {
          mesesContainer.style.display="block";  
          tipoPagoPlazos = true;  

        } else {       
           
        }
    }

    checkUnico.disabled=true;
    checkUnico.addEventListener('change', doUnico)
    function doUnico() { 
        if (checkUnico.checked) {
          mesesContainer.style.display="none";   
          tipoPagoPlazos = false;  
       
        } else {   
        }
    }
    mes36.addEventListener('click', addPlazos36);
    mes24.addEventListener('click', addPlazos24);

    let precioTlf = 0;

    mes24Active.style.display="none";
    mes36Active.style.display="none";

    function addPlazos36(){
      mes36Inactive.style.display="none";
      mes36Active.style.display="block";
      mes24Inactive.style.display="block";
      mes24Active.style.display="none";
    }
    function addPlazos24(){
      mes24Inactive.style.display="none";
      mes24Active.style.display="block";
      mes36Inactive.style.display="block";
      mes36Active.style.display="none";    
    }

    //Acordeón telefono-movil
    var aperturaTlf= document.getElementById('apertura-telefono-movil');
    var menosTlf= document.getElementById('menos-telefono-movil');
    var masTlf= document.getElementById('mas-telefono-movil');
    var conteTlf = document.getElementById('cont-telefono-movil');
    aperturaTlf.addEventListener('click', abrircerrarTlf);
    let estadoTlf = false;

    function abrircerrarTlf(){
      if (estadoTlf == false){
        conteTlf.style.display="none";
        menosTlf.style.display="none";
        masTlf.style.display="block";
        estadoTlf= true;
      }
      else{
        estadoTlf= false;
        conteTlf.style.display="block";
        menosTlf.style.display="block";
        masTlf.style.display="none";
      }  
    }

      //Acordeón Tarifa
      var aperturaTarifa= document.getElementById('apertura-tarifa');
      var menosTarifa= document.getElementById('menos-tarifa');
      var masTarifa= document.getElementById('mas-tarifa');
      var conteTarifa = document.getElementById('cont-tarifa');
      aperturaTarifa.addEventListener('click', abrircerrarTarifa);
      let estadoTarifa = false;
  
      function abrircerrarTarifa(){
        if (estadoTarifa == false){
          conteTarifa.style.display="none";
          menosTarifa.style.display="none";
          masTarifa.style.display="block";
          estadoTarifa= true;
        }
        else{
          estadoTarifa= false;
          conteTarifa.style.display="block";
          menosTarifa.style.display="block";
          masTarifa.style.display="none";
        }  
      }

       //Acordeón Accesorio
       var aperturaAccesorio= document.getElementById('apertura-accesorio');
       var menosAccesorio= document.getElementById('menos-accesorio');
       var masAccesorio= document.getElementById('mas-accesorio');
       var conteAccesorio = document.getElementById('cont-accesorio');
       aperturaAccesorio.addEventListener('click', abrircerrarAccesorio);
       let estadoAccesorio = false;

       aperturaAccesorio.style.display="none";

       
       function abrircerrarAccesorio(){
         if (estadoAccesorio == false){
           conteAccesorio.style.display="none";
           menosAccesorio.style.display="none";
           masAccesorio.style.display="block";
           estadoAccesorio= true;
         }
         else{
           estadoAccesorio= false;
           conteAccesorio.style.display="block";
           menosAccesorio.style.display="block";
           masAccesorio.style.display="none";
         }  
       }

        //Acordeón Adicional
        var aperturaAdicional= document.getElementById('apertura-adicional');
        var menosAdicional= document.getElementById('menos-adicional');
        var masAdicional= document.getElementById('mas-adicional');
        var conteAdicional = document.getElementById('cont-adicional');
        aperturaAdicional.addEventListener('click', abrircerrarAdicional);
        let estadoAdicional = false;
    
        function abrircerrarAdicional(){
          if (estadoAdicional == false){
            conteAdicional.style.display="none";
            menosAdicional.style.display="none";
            masAdicional.style.display="block";
            estadoAdicional= true;
          }
          else{
            estadoAdicional= false;
            conteAdicional.style.display="block";
            menosAdicional.style.display="block";
            masAdicional.style.display="none";
          }  
        }


    //ticket-nombre-tarifa

    let ticketNombreTarifa = document.getElementById('ticket-nombre-tarifa');
    let ticketPrecioTarifa = document.getElementById('ticket-precio-tarifa');
    let ticketPrecioTelefono = document.getElementById('ticket-precio-tlf');

    let securenetContainer = document.getElementById('securenet-container');
    let hatchContainer = document.getElementById('hatch-container');
    let oneNumberContainer = document.getElementById('onenumber-container');
    let precioTarifSelect = 40;

    
    precioTlf= 18.98;
    ticketPrecioTelefono.innerHTML = precioTlf;


    precioTotalMostrado += precioTarifSelect;
    precioTotalMostrado += precioTlf;
    
    ticketPrecioTotal.innerHTML=precioTotalMostrado;
    ticketPrecioTotal2.innerHTML=precioTotalMostrado;

    function initBotones(){
        var botonesAdd = document.querySelectorAll("[data-tarifa]");
        for(let i = 0; i< botonesAdd.length ; i++){
   
            botonesAdd[i].addEventListener('click', function(){
                for(let j = 0; j< botonesAdd.length ; j++){
                    let todos = botonesAdd[j].dataset.tarifa;  
                    let todosParaBorrar = document.getElementById(todos);
                    todosParaBorrar.firstElementChild.classList.remove('added');   
                }
                let nombreTarifaSeleccionada = this.dataset.tarifa;   
                let elementoTarifaSelecta = document.getElementById(nombreTarifaSeleccionada);
                elementoTarifaSelecta.firstElementChild.classList.add('added');  
                ticketNombreTarifa.innerHTML = this.dataset.tarifaNombre;
                ticketPrecioTarifa.innerHTML = this.dataset.precioTarifa;
                
                precioTarifSelect == precioTarifSelect - precioTarifSelect;
                precioTotalMostrado -= precioTarifSelect;
                precioTarifSelect= parseInt(this.dataset.precioTarifa);
                precioTotalMostrado += precioTarifSelect;
                ticketPrecioTotal.innerHTML=precioTotalMostrado.toFixed(2);
                ticketPrecioTotal2.innerHTML=precioTotalMostrado.toFixed(2);              

                if (tipoPagoPlazos == true ){

                  precioTlf ==  precioTlf- precioTlf;
                  precioTotalMostrado -=  precioTlf;
                  precioTlf=parseInt(this.dataset.precioPlazos); 
                  precioTotalMostrado +=  precioTlf;
                  ticketPrecioTelefono.innerHTML = precioTlf;      
                  ticketPrecioTotal.innerHTML=precioTotalMostrado.toFixed(2);
                  ticketPrecioTotal2.innerHTML=precioTotalMostrado.toFixed(2);
                }
                else{
                  precioTlf ==  precioTlf- precioTlf;
                  precioTotalMostrado -=  precioTlf;
                  precioTlf=parseInt(this.dataset.precioUnico); 
                  precioTotalMostrado +=  precioTlf;
                  ticketPrecioTelefono.innerHTML = precioTlf;      
                  ticketPrecioTotal.innerHTML=precioTotalMostrado.toFixed(2);
                  ticketPrecioTotal2.innerHTML=precioTotalMostrado.toFixed(2);
                }
                
                switch(nombreTarifaSeleccionada) {
                    case "vodafone-ilimitada":
                        carrusel3Items.style.display="none";
                        carrusel2Items.style.display="none";
                        carrusel1Items.style.display="block";
                        carrusel4Items.style.display="none";

                        securenetContainer.style.display="block";
                        hatchContainer.style.display="none";
                        oneNumberContainer.style.display="none";
                      
                      break;

                    case "vodafone-super":
                        carrusel3Items.style.display="none";
                        carrusel2Items.style.display="block";
                        carrusel1Items.style.display="none";
                        carrusel4Items.style.display="none";

                        securenetContainer.style.display="block";
                        hatchContainer.style.display="block";
                        oneNumberContainer.style.display="none";

                      break;
                      case "vodafone-total":
                        carrusel3Items.style.display="none";
                        carrusel2Items.style.display="block";
                        carrusel1Items.style.display="none";
                        carrusel4Items.style.display="none";

                        securenetContainer.style.display="block";
                        hatchContainer.style.display="block";
                        oneNumberContainer.style.display="none";

                      break;
                      case "vodafone-mini":
                        carrusel3Items.style.display="none";
                        carrusel2Items.style.display="block";
                        carrusel1Items.style.display="none";
                        carrusel4Items.style.display="none";
                        securenetContainer.style.display="block";
                        hatchContainer.style.display="block";
                        oneNumberContainer.style.display="none";

                      break;
                      case "vodafone-extra":
                        carrusel3Items.style.display="none";
                        carrusel2Items.style.display="block";
                        carrusel1Items.style.display="none";
                        carrusel4Items.style.display="none";

                        securenetContainer.style.display="block";
                        hatchContainer.style.display="block";
                        oneNumberContainer.style.display="none";

                      break;
                      case "vodafone-one-ilimitada":
                        carrusel3Items.style.display="none";
                        carrusel2Items.style.display="none";
                        carrusel1Items.style.display="none";
                        carrusel4Items.style.display="block";

                        securenetContainer.style.display="block";
                        hatchContainer.style.display="none";
                        oneNumberContainer.style.display="block";


                      break;
                      case "vodafone-one-super":
                        carrusel3Items.style.display="block";
                        carrusel2Items.style.display="none";
                        carrusel1Items.style.display="none";
                        carrusel4Items.style.display="none";

                        securenetContainer.style.display="block";
                        hatchContainer.style.display="block";
                        oneNumberContainer.style.display="block";

                      break;
                      case "vodafone-one-total":
                        carrusel3Items.style.display="block";
                        carrusel2Items.style.display="none";
                        carrusel1Items.style.display="none";
                        carrusel4Items.style.display="none";

                        securenetContainer.style.display="block";
                        hatchContainer.style.display="block";
                        oneNumberContainer.style.display="block";


                      break;
                      case "vodafone-one-mini":
                        carrusel3Items.style.display="block";
                        carrusel2Items.style.display="none";
                        carrusel1Items.style.display="none";
                        carrusel4Items.style.display="none";
                        securenetContainer.style.display="block";
                        hatchContainer.style.display="block";
                        oneNumberContainer.style.display="block";

                      break;
                      case "vodafone-one-extra":
                        carrusel3Items.style.display="block";
                        carrusel2Items.style.display="none";
                        carrusel1Items.style.display="none";
                        carrusel4Items.style.display="none";

                        securenetContainer.style.display="block";
                        hatchContainer.style.display="block";
                        oneNumberContainer.style.display="block";

                      break;

                    default:
                        carrusel3Items.style.display="none";
                        carrusel2Items.style.display="none";
                        carrusel1Items.style.display="block";
                        carrusel4Items.style.display="none";

                        securenetContainer.style.display="block";
                        hatchContainer.style.display="none";
                        oneNumberContainer.style.display="none";

                  }


                
                
            })

        }
    }




};

tools.onStylesReady();


