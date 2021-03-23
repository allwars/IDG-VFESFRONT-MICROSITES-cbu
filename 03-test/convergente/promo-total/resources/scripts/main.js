import tools from './tools';
import scrollTo from './scroll';

tools.onStylesReady = () => {
    console.log("Site visually ready");
    
    let container = document.querySelector('.vfes-ms-content');
    
    [].forEach.call(document.querySelectorAll('.js-iva-button'), button => {
        button.addEventListener('click', () => {
            if(!button.classList.contains('active')) {
                document.querySelector('.js-iva-button.active').classList.remove('active');
                button.classList.add('active');
    
                container.setAttribute('data-iva', button.getAttribute('data-button-iva'));
            }
        });
    });
    
    setTimeout(() => {
        [].forEach.call(document.querySelectorAll('.js-sticky [data-sticky="item"]'), item => {
            item.addEventListener('click', () => {
     
                if(item.classList.contains('vfes-card-rate--closed')) {
                    let text = item.querySelector('.js-svg-thunder .span strong');
     
                    text ? text.innerText = text.innerText.replace('Datos', 'GB') : null;
                } else {
                    let text = item.querySelector('.js-svg-thunder .span strong');
     
                    text ? text.innerText = text.innerText.replace('GB', 'Datos') : null;
                }
            });
        });
        
        
    }, 100);
    
    if(tools.isMobile){
        setTimeout(() => {
            let menuHeight=50;
            let element=document.querySelector('body');
            let cardRef = document.querySelector('.vfes-tabs__content[data-tab="2"]');
            //let finalScrollPos =cardRef.getBoundingClientRect().top+ (menuHeight * 3 )+20;
            let finalScrollPos =cardRef.offsetTop-menuHeight*2;
            scrollTo(element, finalScrollPos, 500);
        }, 2000);
    }

}

tools.init();
