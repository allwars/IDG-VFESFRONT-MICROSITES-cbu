/* jshint esversion:6 */
import * as card from "./card";
import * as scroll from "./scroll";

const CONFIG = {
    classes: {
        stickyCSS: 'vfes-sticky',
        stickyJS: 'js-sticky',
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
};

let stickyContainer, stickyList, stickyButton, isStickyExpanded = true;
let scrollPos = 0;
const $document = document;
const bodyContainer = $document.querySelector('.vfes-ms-content');
const items = $document.querySelectorAll(`[data-sticky="item"]`);
let menuHeight = $document.querySelector(".mdd-mobile").firstElementChild.outerHeight();
let stickyItemHeight;

const generateStickyHTML = () => {
    stickyContainer = $document.createElement('div');
    stickyContainer.classList.add(CONFIG.classes.stickyCSS);
    stickyContainer.classList.add(CONFIG.classes.stickyJS);
    stickyContainer.setAttribute('data-sticky', 'fixed-wrapper');
    stickyContainer.setAttribute('aria-expanded', 'false');
    stickyContainer.innerHTML = `
        <ul class="${CONFIG.classes.stickyListCSS}" data-sticky="list" aria-hidden="true"></ul>
        <button class="${CONFIG.classes.stickyButtonCSS}" data-sticky="button" data-open="false">
            <span class="visually-hidden"></span>
        </button>`;

    bodyContainer.insertBefore(stickyContainer, bodyContainer.children[0]);

    stickyList = stickyContainer.querySelector('[data-sticky="list"]');
    stickyButton = stickyContainer.querySelector(`[data-sticky="button"]`);

    [].forEach.call(items, (item, i) => {
        item.querySelector('[data-card="accordion-button"]').classList.add('visually-hidden');
        createItem(item).then(itemCloned => {
            addItem(stickyList, itemCloned);
        });
    });


};

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

        stickyList.appendChild(li);

        //card.clickEvent(item);
        let accordion_button=li.querySelector('[data-card="accordion-button"]');
        accordion_button.classList.remove('visually-hidden');
        item.addEventListener("click", function (e) {
            let closed=e.currentTarget.classList.contains(CONFIG.classes.cardBoxClosed)//querySelector('.vfes-card-box-new--closed');
            e.preventDefault();
            if(closed){
                closeAllCards();
                card.close(item);
            }else{
                if(e.target.dataset.card==="accordion-button"){
                    card.close(item);
                }
            }
        });


    } catch (error) {
        console.error("Error adding: " + error);
    }
};

//Create item
const createItem = item => {
    return new Promise((resolve, reject) => {
        let newItem = item.cloneNode(true);
        /* Hacer esta clase dinámica */
        newItem.classList.add(CONFIG.classes.stickyItemAddedCSS);
        resolve(newItem);
    });
};

const throttle=function(fn, threshhold, scope) {
  threshhold=threshhold ||  250;
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
};

const scrollBehaviour = throttle(e => {
    let y = window.pageYOffset;
    let intersectionPoint = stickyContainer.getBoundingClientRect().bottom;//stickyContainer.getBoundingClientRect().top + stickyContainer.getBoundingClientRect().height;
    
    if(!stickyItemHeight){
        stickyList.children[0].firstElementChild.classList.add(CONFIG.classes.show);
        stickyItemHeight=stickyList.children[0].offsetHeight;
        stickyList.children[0].firstElementChild.classList.remove(CONFIG.classes.show);
    }

    //if(!isStickyExpanded) closeAllCards();

    [].forEach.call(items, (item, i) => {
        // Save props (Coords)
        let props = item.getBoundingClientRect();

        // Check if current iterated item is in Pile array (ADD)
        if (props.bottom < (intersectionPoint+stickyItemHeight*2)) {
            stickyList.children[i].firstElementChild.classList.add(CONFIG.classes.show);
        } 
        if (y==0 || props.bottom > (intersectionPoint+stickyItemHeight*2)) {
            stickyList.children[i].firstElementChild.classList.remove(CONFIG.classes.show);
        }
    });
    
    minimize(y);
},100, true);

const closeAllCards=()=>{
    //let openedItems=$document.querySelectorAll(`.js-sticky [data-js="card-box"]:not(.vfes-card-box-new--closed)`);
    [].forEach.call(stickyList.children, (item, i) => {
        if(!item.firstElementChild.classList.contains(CONFIG.classes.cardBoxClosed)){
            card.close(item.firstElementChild);
        }
    });
};

const toggleExpandSticky = () => {
    isStickyExpanded = !isStickyExpanded;
    stickyButton.setAttribute('data-open', !isStickyExpanded);
    stickyContainer.setAttribute('aria-expanded', !isStickyExpanded);
    if(isStickyExpanded){
        closeAllCards();
    }
    stickyContainer.style.top = !isStickyExpanded ? `${menuHeight}px` : `${(stickyContainer.outerHeight() * -1) + stickyButton.outerHeight() + 20}px`;

};

const minimize = y => {
    let size=items[items.length - 1].getBoundingClientRect();

    if(y > scrollPos && size.bottom < size.height/2) {
        // Pabajo
        stickyButton.classList.add(CONFIG.classes.show);
        closeAllCards();
        stickyButton.setAttribute('data-open', !isStickyExpanded);
        stickyContainer.setAttribute('aria-expanded', !isStickyExpanded);
        stickyContainer.style.top = `${(stickyContainer.outerHeight() * -1) + (stickyButton.outerHeight() + 20)}px`;
        isStickyExpanded = true;
    } else if(y < scrollPos && size.bottom > 0 && !isStickyExpanded) {
        // Parriba
        stickyContainer.style.top = `${menuHeight}px`;
        stickyButton.classList.remove(CONFIG.classes.show);
        isStickyExpanded = !isStickyExpanded;
    } else if (y < scrollPos && size.bottom > 0 && isStickyExpanded) {
        stickyButton.classList.remove(CONFIG.classes.show);
        isStickyExpanded = !isStickyExpanded;
    }

    scrollPos = y;
    stickyButton.setAttribute('data-open', !isStickyExpanded);
};

const setInitScroll = () => {
    let cardRef = $document.querySelector('.vfes-tabs__content[data-tab="2"] .vfes-card-shop');
    let finalScrollPos = cardRef.getBoundingClientRect().top + (menuHeight * 3 - 20);
    
    scroll.scrollTo(document.body, finalScrollPos, 500);

    setInitScroll();
};

// Main
generateStickyHTML();

if(window.matchMedia("(max-width: 640px)").matches) {
    menuHeight = $document.querySelector(".mdd-mobile").firstElementChild.outerHeight();
    stickyContainer.classList.remove(CONFIG.classes.hide);
    window.addEventListener("scroll", scrollBehaviour);
    stickyButton.addEventListener("click", toggleExpandSticky);

    //setInitScroll();
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
