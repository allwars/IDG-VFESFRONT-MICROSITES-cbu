import tools from './tools';
import Countdown from './countdown';


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

    new Countdown({
        cont: document.querySelector('.container'),
        endDate: "January 21, 2020 10:00:00",
        outputTranslation: {
            year: '',
            week: '',
            day: 'Días',
            hour: 'Horas',
            minute: 'Minutos',
            second: 'Segundos',
        },
        endCallback: null,
        outputFormat: 'day|hour|minute|second',
    }).start();

};




