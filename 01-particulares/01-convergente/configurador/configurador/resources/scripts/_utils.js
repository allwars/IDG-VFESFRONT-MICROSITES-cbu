import Common from './_common';
import Configurator from './_configurator';
import Ticket from './_ticket';

const PATH_MICROSITE = document.querySelector('[data-pathmicrosite]').getAttribute('data-pathmicrosite');

let globalModules = {
    _common: Common,
    _configurator: Configurator,
    _ticket: Ticket
};

export let utils = {
    init: scope => {
        let modules = scope.querySelectorAll('[data-vfms-js]');

        fetch(PATH_MICROSITE + 'config-info.json').then(response => {
            return response.text();
        }).then(data => {
            [].forEach.call(modules, mod => {
                let modulesAttr = mod.getAttribute('data-vfms-js');

                modulesAttr = modulesAttr.split(',');

                modulesAttr.forEach(attr => {
                    let properties = {$element: mod};
                    properties.info = data;
                    let instance = globalModules[attr] ? new globalModules[attr](properties) : undefined;

                    instance ? instance.init() : null;
                });
            });
        }).catch(error => {
            console.log(error);
        });
    }
};
