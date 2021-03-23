const defaults = {
    $element: undefined,
    selectors: {
    },
    classes: {
        tabActive: `vfes-tab-group__container-item--active`
    }
};

/**
 * Tabs.
 *
 * @module TabGroupWs10
 * @param {Object} properties - specifies the configurations
 * for the module.
 */
export default class TabGroupWs10 {
    constructor(properties = {}) {
        this.$element = properties.$element;
        this.selectors = defaults.selectors;
        this.classes = defaults.classes;
        this.tabContainer = this.$element.querySelector(`[data-tab="tab-container"]`);
        this.tabsItem = this.tabContainer.querySelectorAll(`[role="tab"]`);
        this.onChanged = new Event('vfes:changed');
    }

    a11y() {
        [...this.tabsItem].forEach(tab => {
            if(!tab.hasAttribute("role") === "tab"
                || !tab.hasAttribute("data-option")) {
                console.log('Las tabs group tienen que tener los atributos: "role" con el valor de tab, "aria-selected" con un valor true o false, "data-option" con un valor numérico');
            }
        });
    }

    /**
     * Initialise the module.
     *
     * @function init
     *
     * @return undefined
     */
    init() {
        this.bind();
        this.a11y();
    }
    
    /**
     * Bind the events to the actionable elements
     * within the tabs system.
     *
     * @function bind
     *
     * @return undefined
     */
    bind() {
        const mod = this;
        
        [...mod.tabsItem].forEach(tab => {
            tab.addEventListener('click', () => {
                if(tab.getAttribute('data-tab-active') === 'false') {
                    let activeTab = mod.getTabActive();
                    
                    // Pestaña actual activada
                    activeTab.classList.remove(mod.classes.tabActive);
                    activeTab.setAttribute('data-tab-active', 'false');
                    mod.$element.children[activeTab.getAttribute('aria-controls')].setAttribute('aria-expanded', 'false');

                    // Nueva pestaña a activar
                    tab.classList.add(mod.classes.tabActive);
                    tab.setAttribute('data-tab-active', 'true');
                    mod.$element.children[tab.getAttribute('aria-controls')].setAttribute('aria-expanded', 'true');

                    mod.onChanged.tab = tab;
                    mod.onChanged.title = tab.innerText;
                    mod.onChanged.index = tab.getAttribute('data-option');
                    mod.onChanged.contentTab = mod.$element.querySelector(`[aria-expanded="true"]`);
                    mod.$element.dispatchEvent(mod.onChanged);
                }
            });
        });

        this.tabContainer.addEventListener('click', () => {
            this.tabContainer.getAttribute('aria-expanded') === 'false' ? this.tabContainer.setAttribute('aria-expanded', 'true') : this.tabContainer.setAttribute('aria-expanded', 'false');
        });
    }

    getTabActive() {
        return this.tabContainer.querySelector(`[data-tab-active="true"]`);
    }
}
