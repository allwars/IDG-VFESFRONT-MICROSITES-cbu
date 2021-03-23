import './apiYoutube.js';
import tools from './tools';
import Tabs from "./tabs";


class TabsFilter {
    constructor(nodeElements) {
        this.$elements = nodeElements;

    }
    init() {
        this.$elements.forEach(tabElement => {
            new Tabs(tabElement, {
                classes: {
                    tabActive: 'vf-tabs-button__active'
                }
            }).init()
        })
    }
}

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

    let width = document.documentElement.clientWidth;
    let isDesktop = width > 1024;

    // DO SOMETHING
    const ticket = document.querySelector('[data-ws10-js="composition-card-rate"]');
    const mddHeader = document.querySelector('.mdd-desktop');
    let mddHeaderHeight = mddHeader.offsetHeight;
    const ticketStop = document.querySelector('[data-js="ticketStopped"]');

    const showSticky = document.querySelector('[data-js-vf="_showOrHideSticky"]');
    const stickyRate = document.querySelector('[data-js-vf="_stickyRate"]');


    document.addEventListener('scroll', showStickyRate);

    // TICKET FIJO

    const ticketImmobile = () => {

        let ticketHeight = ticket.offsetHeight;
        let ticketStopHeight = ticketStop.getBoundingClientRect();
        if((ticketStopHeight.top - (ticketHeight + mddHeaderHeight)) <= 0){
            ticket.parentElement.setAttribute('style', 'position:absolute; bottom: 0; top: initial;');
        } else {
            ticket.parentElement.setAttribute('style', 'position:fixed; top: 120px;');
        }

    };

    const ticketInitialPosition = () => {
        const banner = document.querySelector('[data-js="_banner"]');
        const bannerTop = banner.getBoundingClientRect().top;
        if(bannerTop >= 147){
            ticket.parentElement.setAttribute('style', 'position:absolute; top: 0;');
        }
    };

    function showStickyRate(){
        let showStickyHeight = showSticky.getBoundingClientRect();
        if (showStickyHeight.top <= 0){
            stickyRate.classList.remove('ws10-u--hidden')

        } else {
            stickyRate.classList.add('ws10-u--hidden')

        }
    }


    if( isDesktop ) {
        document.addEventListener('scroll', ticketImmobile);
        document.addEventListener('scroll', ticketInitialPosition);
    }




    const tabsFilter = document.querySelectorAll('[data-vf-js="tabs"]');
    new TabsFilter(tabsFilter).init();




    const backdrops = document.querySelectorAll('[data-ws10-js="backdrop"]');
    let videoAtika1;
    let videoAtika2;
    let videoAtika3;
    let videoAtika4;




    backdrops.forEach(backdrop =>{
        backdrop.addEventListener('ws10:closed', stopVideo);
    });

    // 1. This function creates an <iframe> (and YouTube player) after the API code downloads

    function onYouTubeIframeAPIReady() {
        videoAtika1 = new YT.Player('videoAtika1', {
            height: '460',
            width: 'auto',
            videoId: 'ovv4g3BAdhc',

        });
        videoAtika2 = new YT.Player('videoAtika2', {
            height: '460',
            width: 'auto',
            videoId: 'hOXnAyTHbFM',

        });
        videoAtika3 = new YT.Player('videoAtika3', {
            height: '460',
            width: 'auto',
            videoId: 'C56lV6LNukY',

        });
        videoAtika4 = new YT.Player('videoAtika4', {
            height: '460',
            width: 'auto',
            videoId: '6KJoPyUWm7s',
        });
    }

    // 2. This function StopVideos

    function stopVideo() {
        videoAtika1.stopVideo();
        videoAtika2.stopVideo();
        videoAtika3.stopVideo();
        videoAtika4.stopVideo();
    }


    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
};
