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

    function stateChange(newState) {
        setTimeout(function() {
            if (typeof window.DFI != 'undefined' && !window.DFI.scheduleValid()) {
                //document.getElementById('scheduleCall').style.display = "none";
                //document.getElementById('scheduleMsg').style.display = "block";
                document.querySelector('[data-call="scheduleCall"]').style.display = "none";
                document.querySelector('[data-msg="scheduleMsg"]').style.display = "block";
                document.querySelector('[data-callMobile="scheduleCallMobile"]').style.display = "none";
                document.querySelector('[data-msgMobile="scheduleMsgMobile"]').style.display = "block";
            }
        }, 3000);
    }
    stateChange(-1);

};