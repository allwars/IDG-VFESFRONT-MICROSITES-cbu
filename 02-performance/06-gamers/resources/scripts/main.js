import tools from './tools';
import './TweenMax.min';
import './ScrollToPlugin.min';

/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */
tools.onStylesReady = () => {
    // console.log("Site visually ready");
    // DO SOMETHING

    var timerUrl;
    var URLactual = window.location.href;
    timerUrl = setTimeout(timerFunc, 2000);

    function timerFunc() {

        if (URLactual === "https://www.vodafone.es/c/particulares/es/productos-y-servicios/movil/gamers/#convergente") {
            scrollSection1();
        }
        else if (URLactual === "https://www.vodafone.es/c/particulares/es/productos-y-servicios/movil/gamers/#fibra") {
            scrollSection2();
        }
        if (URLactual === "https://www.vodafone.es/c/particulares/es/productos-y-servicios/movil/gamers/#movil") {
            scrollSection3();
        }

    }

    var convergenteSection = document.getElementById('convergente');
    var offset1 = convergenteSection.offsetTop;

    var btnConvergente = document.getElementById('btn-convergente');
    btnConvergente.addEventListener("click", scrollSection1);

    function scrollSection1() {
        TweenMax.to(window, 1, { scrollTo: { y: offset1 - 40 } });
    }

    var fibraSection = document.getElementById('fibra');
    var offset2 = fibraSection.offsetTop;

    var btnFibra = document.getElementById('btn-fibra');
    btnFibra.addEventListener("click", scrollSection2);

    function scrollSection2() {
        TweenMax.to(window, 1, { scrollTo: { y: offset2 - 40 } });
    }

    var movilSection = document.getElementById('movil');
    var offset3 = movilSection.offsetTop;

    var btnMovil = document.getElementById('btn-movil');
    btnMovil.addEventListener("click", scrollSection3);

    function scrollSection3() {
        TweenMax.to(window, 1, { scrollTo: { y: offset3 } });
    }


    // inicialización solo dektop
    var stageWidthSize = window.screen.width;
    if (stageWidthSize >= 768) {

        TweenMax.staggerTo(
            '.btn-animation',
            .5,
            { opacity: 1, ease: SlowMo.easeOut, delay: 1 },
            0.2,
        );


        var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 'onLeave',
                duration: "200%"
            }
        });

        // get all slides
        var slides = document.querySelectorAll("section.panel");

        // create scene for every slide
        for (var i = 0; i < slides.length; i++) {
            var scene = new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
                .setPin(slides[i], { pushFollowers: false })
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
        }
        /*var scene = new ScrollMagic.Scene({
            triggerElement: "#profile"
        })
            .on("enter leave", function (e) {
                TweenMax.staggerTo(
                    '.icon-animation',
                    .5,
                    { opacity: 1, ease: SlowMo.easeOut, delay: 1 },
                    0.2,
                );

            })

            .addTo(controller);*/

        // show profile buttons
        /* var revealElements = document.getElementsByClassName("hide-button");
             for (var i=0; i<revealElements.length; i++) { // create a scene for each element
                 var scene3 = new ScrollMagic.Scene({
                     triggerElement: ".vfms-hero__background", // y value not modified, so we can use element as trigger as well
                     offset: 50,												 // start a little later
                     triggerHook: 0.9,
                 })
              
                 .setClassToggle(revealElements[i], "visible") // add class toggle
                 // .addIndicators({name: "hide-button " + (i+1) }) // add indicators (requires plugin)
                 .addTo(controller);
             }*/

        // show elements 1st section
        //var revealElements = document.getElementsByClassName("hide-element");
        //for (var i=0; i<revealElements.length; i++) { // create a scene for each element
        var scene2 = new ScrollMagic.Scene({
            triggerElement: "#profile", // y value not modified, so we can use element as trigger as well
            offset: 50,												 // start a little later
            triggerHook: 0.5,
        })
            //.setClassToggle(revealElements[i], "visible") // add class toggle
            // .addIndicators({name: "hide-element" + (i+1) }) // add indicators (requires plugin)
            .addTo(controller);

        //var controller = new ScrollMagic.Controller();

        var sceneConvergente = new ScrollMagic.Scene({
            triggerElement: "#profile"
        })
        .on("enter leave", function (e) {
            TweenMax.staggerTo(
                '.item-convergente',
                .5,
                { opacity: 1, ease: SlowMo.easeOut, delay: 0.2 },
                 0.2,
            );


         })

           .addTo(controller);
        
        var sceneFibra = new ScrollMagic.Scene({
            triggerElement: "#convergente"
        })
        .on("enter leave", function (e) {
            TweenMax.staggerTo(
                '.item-fibra',
                .5,
                { opacity: 1, ease: SlowMo.easeOut, delay: 0.2 },
                 0.2,
            );


         })

           .addTo(controller);
        
        var sceneMovil = new ScrollMagic.Scene({
            triggerElement: "#fibra"
        })
        .on("enter leave", function (e) {
            TweenMax.staggerTo(
                '.item-movil',
                .5,
                { opacity: 1, ease: SlowMo.easeOut, delay: 0.2 },
                 0.2,
            );


         })

           .addTo(controller);

        //}

        // show elements 2st section
        var revealElements = document.getElementsByClassName("hide-element-outdoor");
        for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
            var scene2 = new ScrollMagic.Scene({
                triggerElement: "#convergente", // y value not modified, so we can use element as trigger as well
                offset: 50,												 // start a little later
                triggerHook: 0.7,
            })
                .setClassToggle(revealElements[i], "visible") // add class toggle
                // .addIndicators({name: "hide-element-outdoor" + (i+1) }) // add indicators (requires plugin)
                .addTo(controller);
        }

        // show elements 3st section
        var revealElements = document.getElementsByClassName("hide-element-indoor");
        for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
            var scene2 = new ScrollMagic.Scene({
                triggerElement: "#fibra", // y value not modified, so we can use element as trigger as well
                offset: 50,												 // start a little later
                triggerHook: 0.9,
            })
                .setClassToggle(revealElements[i], "visible") // add class toggle
                // .addIndicators({name: "hide-element-indoor" + (i+1) }) // add indicators (requires plugin)
                .addTo(controller);
        }
    }
    // 
};


/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */
tools.onFrameworkReady = () => {
    console.log("Site functionality ready");
    // DO SOMETHING

};
