export const clickEvent = (item) => {
    /* Click button */
    item.querySelectorAll("[data-card='accordion-button']")[0].addEventListener("click", function (e) {
        e.preventDefault();
        close(item);
    });
}
export const close = (item)=>{
    item.classList.toggle("vfes-card-box-new--closed");
    
    item.querySelectorAll("[data-card=speed-box]").length ?
    item.querySelectorAll("[data-card=speed-box]")[0].classList.toggle('visually-hidden') : null;
    /*Set title visually-hidden*/
    //item.querySelectorAll("[data-card=title]")[0].classList.toggle('visually-hidden');
    /*Set aria-expanded */
    item.querySelectorAll("[data-card='accordion']")[0].setAttribute("aria-expanded",
        !item.querySelectorAll("[data-card='accordion']")[0].getAttribute("aria-expanded"))
}

