import tools from './tools';

/*
 *   Método que se dispara cuando el ws2r.vX.css
 *   ya se ha cargado y ha pintado la web
 * */
tools.onStylesReady = () => {
    console.log("Site visually ready");
    // DO SOMETHING


};


/*
 *   Método que se dispara cuando el ws2r.vX.js
 *   ya se ha cargado y está diponible.
 * */
tools.onFrameworkReady = () => {
    console.log("Site functionality ready");
    // DO SOMETHING


    // current date
    let current_datetime = new Date();

    // formated current date (YYYY-MM-DD)
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate();

    // formated current date (YYYY-MM-DD hh:mm:ss)
    let current_formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + pad(current_datetime.getHours()) + ":" + pad(current_datetime.getMinutes()) + ":" + pad(current_datetime.getSeconds());

    // Reset current date (YYYY-MM-DD 00:00:00)
    var fecha_inicio = formatted_date + ' ' + '00:00:00';
    var fecha_actual = current_formatted_date;

    var fecha_inicio = new Date(fecha_inicio.replace(/\s/, 'T'));
    var fecha_actual = new Date(fecha_actual.replace(/\s/, 'T'));

    var fechaInicio = new Date(fecha_inicio).getTime();
    var fechaFin = new Date(fecha_actual).getTime();

    //msec since day stats.
    var diff = fechaFin - fechaInicio;


    // current week day (0 (sunday) y 6 (saturday)).
    var diaSemana = new Date().getDay();
    var diasRestantes = 7 - diaSemana;

    // msec que quedarían hasta el Lunes sin contar con los que ya han pasado.
    var milisegundosRestantes = diasRestantes * 24 * 60 * 60 * 1000;
    // msec remains to next Monday. Los segundos que quedarían hasta el Lunes menos los que ya han pasado del día, es decir, los 
    // milisegundos que quedarían realmente.
    var milisegundos = milisegundosRestantes - diff;
    var target_date = new Date().getTime() + milisegundos;
    var days, hours, minutes, seconds; // variables for time units
    var countdown = document.getElementById("tiles"); // get tag element

    getCountdown();

    setInterval(function() { getCountdown(); }, 1000);

    function getCountdown() {

        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        // var seconds_left = (target_date - current_date) / 1000;
        var seconds_left = (target_date - current_date);

        // var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = pad(Math.floor((seconds_left / 1000) % 60));
        var minutes = pad(Math.floor((seconds_left / 1000 / 60) % 60));
        var hours = pad(Math.floor((seconds_left / (1000 * 60 * 60)) % 24));
        var days = pad(Math.floor(seconds_left / (1000 * 60 * 60 * 24)) + 1);

        // format countdown string + set tag value
        countdown.innerHTML = '<span>' + days + '</span><span>' + hours + '</span><span>' + minutes + '</span><span>' + seconds + '</span>';
    }

    function pad(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }


};