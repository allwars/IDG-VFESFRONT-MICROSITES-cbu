const defaults = {
    selectors: {
        alertKo: '.js-alert-ko',
        alertOk: '.js-alert-ok',
        alertText: '.js-alert-text',
    },
    classes: {
        hide: "hide"
    }
}

const alertOk = document.querySelector(defaults.selectors.alertOk);
const alertKo = document.querySelector(defaults.selectors.alertKo);

let timePile = [];

/**
 * Object wich control ticket alerts 
 */

const ALERT = {
    /**
     * Show alert with message.
     *
     * @function showAlert
     * 
     * @param {String} type - Type of alert ('ok' || 'ko')
     * @param {String} message - Message to show in alert
     * 
     * @return undefined
     */
    show(type, message) {
        let timeOutId, alert;

        ALERT.clearPile();
        alertKo.classList.add(defaults.classes.hide);
        alertOk.classList.add(defaults.classes.hide);

        alert = type === 'ok' ? alertOk : alertKo;
        
        alert.querySelector(defaults.selectors.alertText).innerHTML = message;
        alert.classList.remove(defaults.classes.hide);
        timeOutId = setTimeout(() => ARTE.hideAlert(alert, timeOutId), 2000);
        timePile.push(timeOutId);
    },

    /**
     * Hide alert
     *
     * @function hideAlert
     * 
     * @param {HTMLElement} alert - Alert we want to hide
     * @param {String} timeOutId - id of the timeout we create before
     * 
     * @return undefined
     */
    hide(alert, timeOutId) {
        alert.classList.add(defaults.classes.hide);
        clearTimeout(timePile[timeOutId]);
    },

    /**
     * Clear every timeouts
     *
     * @function clearPile
     * 
     * @return undefined
     */
    clearPile() {
        timePile.forEach(item => {
            clearTimeout(item);
        });
    }
}

export default ALERT;