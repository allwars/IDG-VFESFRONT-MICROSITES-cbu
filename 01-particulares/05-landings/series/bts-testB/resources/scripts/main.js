import tools from './tools';
import './TweenMax.min'

tools.onStylesReady = () => {
    console.log("Site visually ready")
    //_vf._utils.deleteHeadFiles();
    
    let banner = document.querySelector('.js-banner');
    let radiobuttons = banner.querySelectorAll('input[type="radio"]');

    [].forEach.call(radiobuttons, radio => {
        radio.addEventListener('change', () => toggleButton(document.querySelector('.js-banner'), radio));
    });
    var toast1= document.getElementById('toast1');
    var toast2= document.getElementById('toast2');
    var toast3= document.getElementById('toast3');
    TweenMax.to(toast1 , 0, {autoAlpha:0, display:'none'});
    TweenMax.to(toast3 , 0, {autoAlpha:0, display:'none'});

    document.querySelector('[data-vfes-js="_tabsWs10"]').addEventListener('vfes:changed', (event) =>  {
       
        var clicked = event.activedTab.getAttribute("data-rates");  
        TweenMax.to(toast1 , 0, {autoAlpha:0, display:'none', y:80 });
        TweenMax.to(toast2 , 0, {autoAlpha:0, display:'none', y:80 });
        TweenMax.to(toast3 , 0, {autoAlpha:0, display:'none' , y:80});
        var itemClicked = document.getElementById(clicked);
        console.log("elemento"+ itemClicked)
        TweenMax.to(itemClicked , .5, {autoAlpha:1, display:'block', y:0});
    })

   /* const vidContainer = document.querySelector('.vfms-video-container');  

    function addVideo() {  
        const video = document.createElement('video');    

        video.setAttribute('src', 'https://www.vodafone.es/c/statics/video_bts.mp4');
        //video.setAttribute('controls', 'controls');
        video.setAttribute('defaultMuted', 'true');
       // video.setAttribute('autoplay', 'autoplay');   
        video.setAttribute('id', 'videoId');
        vidContainer.appendChild(video);    

        document.getElementById('videoId').play();

    }*/

    //addVideo();


    var videoBanner = document.getElementById('videoId');
    var bannerCta = document.getElementById('bannerCta');
    var videoInfo=document.getElementById('vfms-video-info');
    var videoContainer = document.getElementById('video-container');

    //console.log(video)
    videoBanner.addEventListener('canplay', videoPlay, false);

    function videoPlay() {
        videoBanner.play();
    }


    videoBanner.addEventListener('ended', removeVideo, false);


    function removeVideo() {
        videoContainer.removeChild(videoBanner);  
        videoInfo.removeChild(videoContainer); 
        animateText();
        console.log('se ha eliminado el video');
    }

   function animateText () {
       var bannerCta= document.getElementById('bannerCta');
       var bannerCtaTitle= document.getElementById('bannerCtaTitle');
       var bannerCtaLink= document.getElementById('bannerCtaLink');
       bannerCta.classList.remove('vfms-cta--hide');
       bannerCta.classList.add('vfms-cta--show');
       bannerCtaTitle.classList.add('vfms-title--yt');
       bannerCtaLink.classList.add('vfms-linkyt');    
    } 
  
}

tools.init();

function toggleButton(container, button) {  
    if(button.type && button.type === 'radio') {
        let radiobuttons = document.querySelectorAll('.js-banner input[type="radio"]');

        [].forEach.call(radiobuttons, radio => {
            container.querySelector(`[data-banner-price="${radio.value}"]`).classList.add('hide');
        });

        container.querySelector(`[data-banner-price="${button.value}"]`).classList.remove('hide');
    }
 }