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