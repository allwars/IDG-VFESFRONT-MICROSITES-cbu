import keys from './keys';
import deepMerge from './deepMerge';

const defaults = {
    direction: 'horizontal', // vertical
    selectors: {
        tabs: '[role="tab"]',
        panels: '[role="tabpanel"]',
    },
    classes: {
        tabActive: `ws10-o-tabs__tab--active`,
    },
};

export default class Tabs {
    constructor(wrapper, config) {
        this.$element = wrapper;
        this.config = this.config = deepMerge(defaults, config);
        this.tabs = [
            ...this.$element.querySelectorAll(this.config.selectors.tabs),
        ];

        this.onInitialized = new Event('ws10:init');
        this.onChanged = new Event('ws10:changed');
    }

    init() {
        this.toggle();
        this.tabs.forEach(tab => {
            tab.addEventListener('click', this.tabClickHandler);
            tab.addEventListener('keyup', this.tabKeyHandler);
        });

        // events
        this.onInitialized.tabs = this.tabs;
        this.$element.dispatchEvent(this.onInitialized);
    }

    tabKeyHandler = (event) => {
        event.preventDefault();
        const tab = event.currentTarget;
        const key = event.key;

        if ((this.config.direction === 'horizontal' && ['ArrowLeft', 'ArrowRight'].includes(key)) ||
            (this.config.direction === 'vertical' && ['ArrowUp', 'ArrowDown'].includes(key))) {
            const nextTab = Tabs.getNextTab(this.tabs, tab, keys.direction[key]);
            this.toggle(nextTab, true);
            this.fireChangeEvent(nextTab);
        }
    };

    tabClickHandler = (event) => {
        const tab = event.currentTarget;
        if (tab.nodeName === 'A') {
            event.preventDefault();
        }
        this.toggle(tab);
        this.fireChangeEvent(tab);
    };

    toggle = (tab, focus = false) => {
        tab = tab || this.tabs[0];
        const panelTargets = Tabs.getPanelTargetSelectors(tab);

        if (focus) {
            tab.focus();
        }

        this.tabs.forEach(atab => {
            const active = atab.isSameNode(tab);
            atab.setAttribute('aria-selected', active);
            atab.classList.toggle(this.config.classes.tabActive, active);
            atab.setAttribute('tabindex', active ? 0 : -1);
        });

        panelTargets.forEach(panelSelector => {
            const panel = document.querySelector(panelSelector);
            const panelGroup = panel.parentElement;
            const panelsInGroup = panelGroup.querySelectorAll(this.config.selectors.panels);
            [...panelsInGroup].forEach((apanel) => {
                const expanded = apanel.isSameNode(panel);
                apanel.setAttribute('aria-expanded', expanded);
                expanded
                    ? apanel.removeAttribute('hidden')
                    : apanel.setAttribute('hidden', '');
            });
        });
    };

    fireChangeEvent(tab) {
        this.onChanged.tab = tab;
        this.$element.dispatchEvent(this.onChanged);
    }

    static getNextTab(tabs, currentTab, direction) {
        let index = tabs.findIndex(atab => atab.isSameNode(currentTab));
        index += direction;
        if (index < 0) {
            index = tabs.length - 1;
        } else if (index > tabs.length - 1) {
            index = 0;
        }
        return tabs[index];
    }

    static getPanelTargetSelectors(tab) {
        return (tab.getAttribute('aria-controls') !== null) ?
            tab.getAttribute('aria-controls').split(' ').map(id => `#${id}`) :
            [tab.getAttribute('href')];
    }
}
