export default class MenuPerformance {

    init() {
        console.log("INIT MENU");
        this.menuMobile();

    }

    menuMobile() {

        //Device width and orientation
        var isDesktop = window.innerWidth >= 970;
        var isTablet = window.innerWidth < 970 && window.innerWidth >= 640;
        var isMobile = window.innerWidth < 640;


        //Main nav container
        var mainNav = document.getElementById("vfms-main-header__main-nav");
        //Main menu item.
        var mainNavItems = document.querySelectorAll(".vfms-main-nav-item");
        // Main Nav item container
        var mainNavBox = document.querySelectorAll(".vfms-main-nav-container__item");

        var items = document.querySelectorAll('.vfms-main-item__type');

        //Secundary nav container
        var secNav = document.querySelectorAll(".vfms-sec-nav");
        //Secundary nav items
        var secNavItems = document.querySelectorAll(".vfms-sec-nav-item");

        var openMenu = document.getElementById('vfms-recursive-nav__button');



        openMenu.addEventListener('click', function(event) {
            //change icon shape
            openMenu.classList.toggle("vfms-isOpen");
            //Show main nav container. Change display of the element.
            mainNav.classList.toggle("vfms-showMainNav");
        });


        for (var i = 0; i < mainNavBox.length; i++) {
            mainNavBox[i].addEventListener('click', function(event) {
                this.classList.toggle("active");

            });


        }

        //Tablet and Mobile.
        if (isTablet || isMobile) {

            // AL pinchar en el menú de hamburguesa 
            openMenu.addEventListener('click', function(event) {

                // Todas las navegaciones secundarias estarán escondidas
                for (var i = 0; i < secNav.length; i++) {
                    secNav[i].style.display = "none";
                }

                //Los items de la navegación principal no deben estar en rojo al desplegarse el menú
                for (var i = 0; i < mainNavItems.length; i++) {
                    mainNavItems[i].classList.remove("vfms-changeIcon");
                    mainNavItems[i].classList.remove("vfes-colours--vodafone-red");
                    mainNavItems[i].parentElement.classList.remove("vfms-borderColor");

                }

                //Los items de la navegación principal no deben estar en rojo al desplegarse el menú
                for (var i = 0; i < items.length; i++) {
                    items[i].classList.remove("vfes-colours--vodafone-red");

                }

            });

            //Funciones correspondientes al evento click de los elementos de la navegación principal.
            mainNavItems.forEach(item => {
                item.addEventListener('click', () => {

                    // Todas las navegaciones secundarias tienen que estar escondidas menos la que sigue al que se está pinchando.
                    secNav.forEach(item => {
                        for (var i = 0; i < secNav.length; i++) {
                            secNav[i].style.display = 'none';
                        }
                    });


                    // //Elemento de navegación secundaria
                    var sec = item.nextElementSibling;

                    //sec.classList.toggle("vfms-showNav");
                    sec.style.display = sec.style.display === 'none' ? 'block' : 'none';

                    //Elemento de navegación secundaria
                    var sec = item.nextElementSibling;
                    sec.classList.toggle("vfms-showSecNav");

                    // Los elementos de la navegación secundaria deben de tener el fondo blanco. 
                    secNavItems.forEach(item => {
                        for (var i = 0; i < secNavItems.length; i++) {
                            secNavItems[i].classList.remove("vfes-colours-bg-aluminium");
                        }
                    });

                    //El item cambia de color

                    var type = item.querySelector(".vfms-main-item__type");
                    type.classList.toggle("vfes-colours--vodafone-red");

                    item.classList.toggle("vfms-changeIcon");
                    item.classList.toggle("vfes-colours--vodafone-red");
                    item.parentElement.classList.toggle("vfms-borderColor");

                });

            });



            //Secundary Navigation Items Event click change the item background.
            secNavItems.forEach(item => {
                item.addEventListener('click', () => {
                    for (var i = 0; i < secNavItems.length; i++) {
                        //click in another item remove background color.
                        secNavItems[i].classList.remove("vfes-colours-bg-aluminium");
                    }
                    item.classList.toggle("vfes-colours-bg-aluminium");

                });

            });


        }

    }

}