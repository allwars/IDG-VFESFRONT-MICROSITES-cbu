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
    // console.log(current_datetime);
    // formated current date (YYYY-MM-DD)
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate();
    // console.log(formatted_date);
    // formated current date (YYYY-MM-DD hh:mm:ss)
    let current_formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + pad(current_datetime.getHours()) + ":" + pad(current_datetime.getMinutes()) + ":" + pad(current_datetime.getSeconds());

    // console.log(current_formatted_date);

    // Reset current date (YYYY-MM-DD 00:00:00)
    var fecha_inicio = formatted_date + ' ' + '00:00:00';
    var fecha_actual = current_formatted_date;

    // console.log(fecha_inicio);
    // console.log(fecha_actual);

    var fecha_inicio = new Date(fecha_inicio.replace(/\s/, 'T'));
    var fecha_actual = new Date(fecha_actual.replace(/\s/, 'T'));

    // console.log(typeof fecha_inicio);
    // console.log(typeof fecha_actual);

    var fechaInicio = new Date(fecha_inicio).getTime();
    var fechaFin = new Date(fecha_actual).getTime();

    // console.log(fechaInicio);
    // console.log(fechaFin);


    //msec since day stats.
    var diff = fechaFin - fechaInicio;
    // console.log(typeof diff);

    // console.log(diff);

    // current week day (0 (sunday) y 6 (saturday)).
    var diaSemana = new Date().getDay();
    var diasRestantes = 7 - diaSemana;

    // msec que quedarían hasta el Lunes sin contar con los que ya han pasado.
    var milisegundosRestantes = diasRestantes * 24 * 60 * 60 * 1000;
    // msec remains to next Monday. Los segundos que quedarían hasta el Lunes menos los que ya han pasado del día, es decir, los 
    // milisegundos que quedarían realmente.
    var milisegundos = milisegundosRestantes - diff;


    var target_date = new Date().getTime() + milisegundos;
    // console.log(target_date);


    var days, hours, minutes, seconds; // variables for time units

    var countdown = document.getElementById("tiles"); // get tag element

    getCountdown();

    setInterval(function() { getCountdown(); }, 1000);

    function getCountdown() {

        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;


        // days = pad( parseInt(seconds_left / 86400) );
        days = pad(diasRestantes);
        seconds_left = seconds_left % 86400;

        hours = parseInt(pad(seconds_left / 3600));
        seconds_left = seconds_left % 3600;

        minutes = parseInt(pad(seconds_left / 60));
        seconds = parseInt(pad(seconds_left % 60));
        console.log(seconds);

        console.log('horas', typeof hours);
        console.log('minutes', typeof minutes);
        console.log('seconds', typeof seconds);

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