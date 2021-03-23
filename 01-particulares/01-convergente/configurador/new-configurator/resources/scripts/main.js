import tools from './tools';
import {utils} from './_utils';

tools.onStylesReady = () => {
    console.log("Site visually ready");

    utils.init(document);

    window.matchMedia('(min-width: 970px)').matches ? document.querySelector('.js-ticket-dropdown').click() : null;

};

tools.onStylesReady();
