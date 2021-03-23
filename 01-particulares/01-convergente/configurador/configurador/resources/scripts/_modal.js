const defaults = {
    selectors: {
        modal: '.js-modal',
        modalClose: '.js-modal-close',
        modalConfirmAccept: '.js-modal-confirm-accept',
        modalConfirmCancel: '.js-modal-confirm-cancel',
        modalContent: '.js-modal-content',
        modalItem: '.js-modal-item',
    },
    classes: {
        modalShowCSS: 'vfes-modal--show',
        modalItemShowCSS: 'vfes-modal__item--show',
    }
}
const modal = document.querySelector(defaults.selectors.modal);
const modalConfirm = modal.querySelector('#modal-confirm');

const MODAL = {

    /**
     * Open modal. 
     * 
     * @function show
     * 
     * @param {String} id - modal id 
     */
    show: id => {
        modal.classList.add(defaults.classes.modalShowCSS);
        modal.querySelector(`#${id}`).classList.add(defaults.classes.modalItemShowCSS);
    },
    
    /**
     * Hide mod.modal. 
     * 
     * @function hide
     * 
     * @param {String} id - modal id
     */
    hide: id => {
        modal.classList.remove(defaults.classes.modalShowCSS);
        modal.querySelector(`#${id}`).classList.remove(defaults.classes.modalItemShowCSS);
    },

    /**
     * Apply confirm events to modal
     * 
     * @function confirmModal
     * 
     * @returns undefined
     */
    confirm(message, resolve, reject) {
        let cancelButton, acceptButton;
        let closeButton = modalConfirm.querySelector(defaults.selectors.modalClose);
        
        closeButton.removeEventListener('click', MODAL.closeConfirm);
        
        modalConfirm.querySelector(defaults.selectors.modalContent).innerHTML = `${message}<button class="vfes-button vfes-button--primary js-modal-confirm-accept">Aceptar</button><button class="vfes-button vfes-button--secondary js-modal-confirm-cancel">Cancelar</button>`;

        acceptButton = modalConfirm.querySelector(defaults.selectors.modalConfirmAccept);
        cancelButton = modalConfirm.querySelector(defaults.selectors.modalConfirmCancel);
        
        MODAL.show('modal-confirm');

        acceptButton.addEventListener('click', () => { MODAL.hide('modal-confirm'); resolve() });
        cancelButton.addEventListener('click', () => { MODAL.hide('modal-confirm'); reject() });
        closeButton.addEventListener('click', () => { MODAL.hide('modal-confirm'); reject() });
    }
}

export default MODAL;