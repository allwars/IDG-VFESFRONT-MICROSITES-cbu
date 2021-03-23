import tools from "./tools";
import * as card from "./card";

const CONFIG = {
    classes: {
        stickyCSS: 'vfes-sticky',
        stickyListCSS: 'vfes-sticky__list',
        stickyListItemCSS: 'vfes-sticky__list-item',
        stickyButtonCSS: 'vfes-sticky__button',
        stickyItemAddedCSS: 'vfes-sticky__item--added',
        show: 'show',
        hide: 'hide',
        collapse: 'collapse',
        cardBoxClosed: 'vfes-card-box-new--closed'
    },
    attr: {
        name: 'data-sticky',
        values: {
            fixed: 'fixed-wrapper',
            button: 'button',
            item: 'item',
            listItem: 'list-item'
        }
    }
}

let stickyContainer, stickyList, stickyButton, isStickyExpanded = false;
let scrollPos = 0;
const $document = document;
const bodyContainer = $document.querySelector('.vfes-ms-content');
const items = $document.querySelectorAll(`[data-sticky="item"]`);
let menuHeight = $document.querySelector(".mdd-mobile").firstElementChild.outerHeight();

const generateStickyHTML = () => {
    stickyContainer = $document.createElement('div');
    stickyContainer.classList.add(CONFIG.classes.stickyCSS);
    stickyContainer.setAttribute('data-sticky', 'fixed-wrapper');
    stickyContainer.setAttribute('aria-expanded', 'false');
    stickyContainer.innerHTML = `
        <ul class="${CONFIG.classes.stickyListCSS}" data-sticky="list" aria-hidden="true"></ul>
        <button class="${CONFIG.classes.stickyButtonCSS}" data-sticky="button">
            <span class="visually-hidden"></span>
        </button>`;

    bodyContainer.insertBefore(stickyContainer, bodyContainer.children[0]);

    stickyList = stickyContainer.querySelector('[data-sticky="list"]');
    stickyButton = stickyContainer.querySelector(`[data-sticky="button"]`);

    [].forEach.call(items, item => {
        createItem(item).then(itemCloned => {
            addItem(stickyList, itemCloned);
        });
    });
}

//Add item
const addItem = (stickyList, item) => {
    try {
        //Create/set <li> element and append item
        let li = document.createElement("li");
        li.setAttribute(CONFIG.attr.name, CONFIG.attr.values.listItem);
        li.classList.add(CONFIG.classes.stickyListItemCSS);
        li.appendChild(item);

        /* Close item only when don't have the class */
        !item.classList.contains(CONFIG.classes.cardBoxClosed) ? card.close(item) : null;
        card.clickEvent(item);

        stickyList.appendChild(li);

    } catch (error) {
        console.error("Error adding: " + error);
    }
}

//Create item
const createItem = item => {
    return new Promise((resolve, reject) => {
        let newItem = item.cloneNode(true);
        /* Hacer esta clase dinámica */
        newItem.classList.add(CONFIG.classes.stickyItemAddedCSS);
        resolve(newItem);
    });
}

const scrollBehaviour = e => {
    let y = e.currentTarget.pageYOffset;
    let intersectionPoint = stickyContainer.getBoundingClientRect().top + stickyContainer.getBoundingClientRect().height;
    [].forEach.call(items, (item, i) => {

        // Save props (Coords)
        let props = item.getBoundingClientRect();

        // Check if current iterated item is in Pile array (ADD)
        if(y === 0) {
            stickyList.children[0].firstElementChild.classList.remove(CONFIG.classes.show);
        } else if (props.top < intersectionPoint) {
            stickyList.children[i].firstElementChild.classList.add(CONFIG.classes.show);
        } else if (props.top > (intersectionPoint - 60)) {
            stickyList.children[i].firstElementChild.classList.remove(CONFIG.classes.show);
        }
    });
    
    minimize(y);
}

const toggleExpandSticky = () => {
    stickyContainer.style.top = isStickyExpanded ? `${menuHeight}px` : `${(stickyContainer.outerHeight() * -1) + stickyButton.outerHeight()}px`;

    isStickyExpanded = !isStickyExpanded;
}

const minimize = y => {
    if(y > scrollPos && items[items.length - 1].getBoundingClientRect().bottom < 0) {
        // Pabajo
        stickyButton.classList.add(CONFIG.classes.show);
        stickyContainer.style.top = `${(stickyContainer.outerHeight() * -1) + (stickyButton.outerHeight() + 20)}px`;
        isStickyExpanded = true;
    } else if(y < scrollPos && items[items.length - 1].getBoundingClientRect().bottom > 0 && !isStickyExpanded) {
        // Parriba
        stickyContainer.style.top = `${menuHeight}px`;
        stickyButton.classList.remove(CONFIG.classes.show);
        isStickyExpanded = !isStickyExpanded;
    } else if (y < scrollPos && items[items.length - 1].getBoundingClientRect().bottom > 0 && isStickyExpanded) {
        stickyButton.classList.remove(CONFIG.classes.show);
        isStickyExpanded = !isStickyExpanded;
    }
    scrollPos = y;
}

// Main
generateStickyHTML();

if(window.matchMedia("(max-width: 640px)").matches) {
    menuHeight = $document.querySelector(".mdd-mobile").firstElementChild.outerHeight();
    stickyContainer.classList.remove(CONFIG.classes.hide);
    window.addEventListener("scroll", scrollBehaviour);
    stickyButton.addEventListener("click", toggleExpandSticky);
} else {
    stickyContainer.classList.add(CONFIG.classes.hide);
}

window.matchMedia("(max-width: 640px)").addListener(e => {
    if(e.matches) {
        stickyContainer.classList.remove(CONFIG.classes.hide);
        window.addEventListener("scroll", scrollBehaviour);
        stickyButton.addEventListener("click", toggleExpandSticky);
    } else {
        stickyContainer.classList.add(CONFIG.classes.hide);
        window.removeEventListener("scroll", scrollBehaviour);
        stickyButton.removeEventListener("click", toggleExpandSticky);
    }
});
