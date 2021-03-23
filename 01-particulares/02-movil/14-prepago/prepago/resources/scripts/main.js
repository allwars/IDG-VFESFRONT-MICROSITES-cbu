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
    const modal = document.querySelector('[data-vfes-js="_modal"]');
    const modalContent = modal.querySelector('[data-vfms-js="createIframe"]');
    const fullContainer = document.querySelector ('.ebx-empathy-x--scroll-up');    

    modal.addEventListener('vfes:opened', ()=> {
        /* Con validación del navegador */
        /*var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
        navigator.userAgent &&
        navigator.userAgent.indexOf('CriOS') === -1 &&
        navigator.userAgent.indexOf('FxiOS') === -1;

        if(isSafari){
            location.href ="https://www.vodafone.es/particulares/es/tienda/movil/tarifas-prepago-y-recargas/recarga-tarjeta/";
        }
        else if(modalContent.dataset.vfmsFill === 'false'){
            modalContent.appendChild(createIframe());
            modalContent.setAttribute('data-vfms-fill', 'true');
            fullContainer.style.overflow = 'hidden';
        }*/

        /* Sin validación del navegador*/
        if(modalContent.dataset.vfmsFill === 'false'){
            modalContent.appendChild(createIframe());
            modalContent.setAttribute('data-vfms-fill', 'true');
            fullContainer.style.overflow = 'hidden';
        }

    });

    modal.addEventListener('vfes:closed', () => {
        const iframeElement = modal.querySelector('[data-vfms-js="iframe-prepago"]');

        if (modalContent.dataset.vfmsFill === 'true') {
            iframeElement.dataset.src = '';
            modalContent.removeChild(iframeElement);
            modalContent.setAttribute('data-vfms-fill', 'false');
            fullContainer.style.overflow = 'scroll';
        }
    });

    function createIframe () {
        // <iframe src="https://m.vodafone.es/mves/publicTopup?isMobile=false" frameborder="0" style="height: 600px; width: 100%; overflow: hidden;"></iframe>
        const iframe = document.createElement('iframe');
        iframe.setAttribute('frameborder', '0');
        // URL PRODUCCION
        iframe.setAttribute('src', 'https://m.vodafone.es/mves/publicTopup?isMobile=false');
        // URL PREPRO
        // iframe.setAttribute('src', 'https://assets-es-uat.myvdf.aws.cps.vodafone.com/mves/publicTopup?isMobile=false');
        iframe.setAttribute('data-vfms-js', 'iframe-prepago')
        iframe.style.height = tools.isMobile ? '100vh' : '600px';
        iframe.style.width = '100%';
        iframe.style.overflow = 'hidden';
        return iframe;
    }

};
