(function(services) {   
    'use strict';

    if (~location.href.indexOf("oferta.vodafone.es/empresas")) {
        return false;
    }

    console.log("Vodafone E2E - Delio Front Integration");

    window.DELIO = window.DELIO || {};
    window.DFI = DELIO.FrontIntegration = window.DFI /*|| window.parent.DFI*/ || {};
    services();

    // Entornos de desarrollo e integración
    DFI.env = DFI.getQueryVariable("wm_env") || sessionStorage.wm_env;
    if (DFI.env === "d") {
        sessionStorage.wm_env = DFI.env;
        DFI.loadScript("https://t.womtp.com/slider/d/vodafone/e2e/init.js");
        return false;
    }
    if (DFI.env === "i") {
        sessionStorage.wm_env = DFI.env;
        DFI.loadScript("https://t.womtp.com/slider/i/vodafone/e2e/init.js");
        return false;
    }

    if (!DFI.started) {
        DFI.start();
    }

    // Temporal, test A/B Abril.
    setTimeout(function(){
        // window.targetTestVersion.FY1920_T005
        if(~location.pathname.indexOf('/c/tienda-online/particulares/catalogo-moviles/')){
                var formSticky = document.querySelector('.wg-form.ng-untouched');
                var input = document.createElement("input");
                input.type = "hidden";
                input.classList = 'wg-input';
                input.name = 'FY1920_T005';
                input.value = 'Original';
                if(formSticky){
                    formSticky.appendChild(input);
                }
                
                var formFlotante = document.querySelectorAll('#followme .followme-wrapper .wg-form')[1];
                var input2 = document.createElement("input");
                input2.type = "hidden";
                input2.classList = 'wg-input';
                input2.name = 'FY1920_T005';
                input2.value = 'Solapa';
                if(formFlotante){
                    formFlotante.appendChild(input2);
                }
        }
    },5000);


}(function() {
    // Delio ClientConfig
    //window.ClientConfig = window.ClientConfig || {};
    window.clientConfig = {
        timeoutTooltip: 3,
        lang: 'es',
        pos: 'bottom',
        sendHidden: true,
        type: 'element',
        validate: true,
        validation: {
            notification: {
                type: 'element'
            }
        }
    };

    // LeadId
    DFI.leadId = "";

    DFI.nombreTransaccional = "";

    // Globals
    DFI.global = {
        
        // AMP config
        amp: {
            check: true,
            url: "https://oferta.vodafone.es/test/amp-clientid/",
            cookie: "womtp_a2bc"
        },

        loadTagVisit: true,

        // Scripts
        dal: 'https://ws.walmeric.com/static/dft/dist/v1/dal.js',
        drp: 'https://ws.walmeric.com/static/dft/dist/v2/drp.js',
        dmv: 'https://ws.walmeric.com/static/dft/dist/v1/dmv.js',
        dul: 'https://ws.walmeric.com/static/dft/dist/v1/dul.js',
        dcl: 'https://ws.walmeric.com/static/dft/dist/v2/dcl.js',
        dsa: 'https://ws.walmeric.com/static/dft/dist/v1/dsa.js',
        dvl: 'https://ws.walmeric.com/static/dft/dist/v2/dvl.js',
        det: 'https://ws.walmeric.com/static/dft/dist/v1/det.js',
        lht: "https://t.womtp.com/slider/c/vodafone/lht/init.js",
        // Delio Scripts
        tagVisit: {
            ono: "https://t.womtp.com/js/otg.min.js?idtag=e8700339672a24e39f5bb7719466f497",
            vodafone: "https://t.womtp.com/js/otg.min.js?idtag=2a246268b4561c54e468f77255d7d0c6",
            yu: "https://t.womtp.com/js/otg.min.js?idtag=7037b791a18b3ecc7603299bc770575f"
        },

        tagConversion: {
            vodafone: "https://t.womtp.com/js/otg.min.js?idtag=a4e1d940effa825b51a1032a3c3c6ce8&orderid=",
            yu: "https://t.womtp.com/js/otg.min.js?idtag=a894b640dfd8cbd7d7dfe2aabd8608c8&orderid=",
        },
        // tagDelioClient   : "https://t.womtp.com/js/delio-client/?idTag=29842f94d414949bf95fb2e6109142cfef1fb2a78114c2c536a36bf5a65b953a5fc1ca581ceb7bf8fd143a36f4eb693794c0f95c76664a12dbaa532a82b5988a207dd2d28aa08a82723b60cd54ef0e48b3a24e4b4ad1c4968e7803e10bb5ed21b0441305a1103889a0fa0536abc02d8c",
        tagDelioClient: "https://ws.walmeric.com/static/dft/dist/v2/dcl.js?idTag=29842f94d414949bf95fb2e6109142cfef1fb2a78114c2c536a36bf5a65b953a5fc1ca581ceb7bf8fd143a36f4eb693794c0f95c76664a12dbaa532a82b5988a207dd2d28aa08a82723b60cd54ef0e48b3a24e4b4ad1c4968e7803e10bb5ed21b0441305a1103889a0fa0536abc02d8c",
        tagDelioClient_Inactividad: "https://ws.walmeric.com/static/js/dev/v1/dcl.js?idTag=29842f94d414949bf95fb2e6109142cfef1fb2a78114c2c536a36bf5a65b953a5fc1ca581ceb7bf8fd143a36f4eb693794c0f95c76664a12dbaa532a82b5988a83ee4186391092587d0a63186160a89442e6230812dd23968409e5c2fe991f39882575b0217ccba96b569760cf761f17",
        tagDelioClient_tienda_movil: "https://ws.walmeric.com/static/js/dev/v1/dcl.js?idTag=29842f94d414949bf95fb2e6109142cfef1fb2a78114c2c536a36bf5a65b953a5fc1ca581ceb7bf8fd143a36f4eb693794c0f95c76664a12dbaa532a82b5988aceff058bb88f0bbf5683554a447b645842e2c7b2e006af7cd8088f262221a4d04dfe05deae20aed84ce3101ac310cfa3",
        // Ids
        idTagDelioClient: "29842f94d414949bf95fb2e6109142cfef1fb2a78114c2c536a36bf5a65b953a5fc1ca581ceb7bf8fd143a36f4eb693794c0f95c76664a12dbaa532a82b5988a207dd2d28aa08a82723b60cd54ef0e48b3a24e4b4ad1c4968e7803e10bb5ed21b0441305a1103889a0fa0536abc02d8c",
        idTagDelioClient_Cobertura: "29842f94d414949bf95fb2e6109142cfef1fb2a78114c2c536a36bf5a65b953a5fc1ca581ceb7bf8fd143a36f4eb693794c0f95c76664a12dbaa532a82b5988a2e19411824665dc92070e1a4b3d0ac182f31f4b4396e694dec2745190cfd69e761131ac1d5d19b0188a6e1b626367f3a",
        idTagDelioClient_tienda_movil: "29842f94d414949bf95fb2e6109142cfef1fb2a78114c2c536a36bf5a65b953a5fc1ca581ceb7bf8fd143a36f4eb693794c0f95c76664a12dbaa532a82b5988aceff058bb88f0bbf5683554a447b645842e2c7b2e006af7cd8088f262221a4d04dfe05deae20aed84ce3101ac310cfa3",
        idTagDelioClient_Rastreator: "29842f94d414949bf95fb2e6109142cfef1fb2a78114c2c536a36bf5a65b953a5fc1ca581ceb7bf8fd143a36f4eb693794c0f95c76664a12dbaa532a82b5988a0c8dad0add050bb70301454f17bc5b5d542c8b963d7906f012d23f3533ebc60def6b762ac4188723fb4ae3038f3c0ed0",

        // IdServicio RingPool
        rpLanding: "c8d85c6aebf14547c575dfccac639730",

        // Paths
        pathRoot: "https://t.womtp.com/slider/c/vodafone/e2e/",
        // pathRoot         : "https://t.womtp.com/slider/c/mapfre/es/click2call/test/vodafone-landings/e2e/" , 

        // AddLead
        addLead: "https://ws.walmeric.com/provision/wsclient/client_addlead.html",
        putLead: "https://ws.walmeric.com/provision/wsclient/delioClientLeadId_put.html",
        putUid: "https://ws.walmeric.com/provision/wsclient/delioClientUid_put.html",
        // ISP - ApiGurus
        apiISP: "https://https-api.apigurus.com/iplocation/v1.8/locateip?key=SAK89R7297783RD3R63Z&ip=local&format=JSON"
    };

    DFI.global.pathSupport = DFI.global.pathRoot + "support/";
    DFI.global.pathCss = DFI.global.pathRoot + "assets/stylesheets/";
    DFI.global.cssLandingFix = DFI.global.pathCss + "landing-fix.css";
    DFI.global.cssOnoFix = DFI.global.pathCss + "ono-fix.css";
    DFI.global.cssDmvFix = DFI.global.pathCss + "dmv.css";
    DFI.global.flotanteButton = DFI.global.pathCss + "flotante.css";
    DFI.global.cssNewFlotante = DFI.global.pathCss + "flotante-new.css";
    DFI.global.cssOneClick = DFI.global.pathCss + "one-click.css";
    DFI.global.cssColorbox = "https://oferta.vodafone.es/css/custom-colorbox.css";
    //WCS-4485 nuevo thank u page (nuevo template en getTemplate / DFI.isThankUPageURL)
    DFI.global.thankUPageURLCss = DFI.global.pathCss + "thank-u-page.css"

    DFI.rpServices = {
        landing_fcbk: "c8d85c6aebf14547c575dfccac639730",
        landing_afil: "434519db9c2e2eb33e113328e8a60a37",
        landing_amazon: "15611b9fe96a9a18c62b8d9e58dce6a6",
        ono_afiliacion: "6a05b33f6fcf85254de6fdabb64986d7",
        ono_cartera_m: "ea51a656e3facb617784bae94314a079", // medio
        ono_cartera_a: "0cd7184d1b3f6d1e477325d5677b5dbf", // alto
        ono_potencial_a: "e3128c90c6d190c300af6c0b6f6401ed", // medio
        ono_potencial_m: "38296c91c96e860178d1b740baf93417", // alto
        landing_sem_m: "85171502622e4bb26c7c51b8d5cbdc55", // alto
        landing_sem_a: "74c8588ed41d6de8204123c87b56a541", // medio
        landing_agora: "CC2478E71B08018C990E544B5B403304",
        //rp_testing      :
    };

    DFI.trackingParams = ["cid", "did", "emd", "sms", "afp", "afe", "afp", "smp", "smi", "ned", "con", "wta", "vfp", "vfe", "vfa", "mca"];

    DFI.isOfertaLanding = false;
    if (location.hostname === "oferta.vodafone.es") {
        DFI.isOfertaLanding = true;
    }

    //url de inactividad y on exit
    DFI.incativityExitRules = [
        /*{
            pathname  :"/tienda/particulares/es/tarifa/complementa-tu-compra"
        },
        {
            pathname  : "/tienda/proceso-compra-tu-pedido/es/clientes" , 
            variable  : "step",
            action    : ["checkout"]
        },*/
        {
            pathname: "/v-vodafone/"
        },
        /*{
             pathname: "/ES/V-Auto"
         },
         {
             pathname: "/ES/V-Sim"
         },
         {
             pathname: "/ES/V-Pet"
         },
         {
             pathname: "/ES/V-Camera"
         },
         {
             pathname: "/ES/V-Bag"
         },
         {
             pathname: "/ES/checkout/Basket"
         },
         {
             hostnmae : "shop.v.vodafone.com",
             pathname: "/ES/"
         }*/
    ];


    // INIT
    function init() {
        // Carga de Delio Cliente antiguo mediante flag
        if (DFI.getQueryVariable("dcl") === "old" || sessionStorage.wm_dcl === "old") {
            DFI.global.tagDelioClient = "https://t.womtp.com/js/delio-client/?idTag=29842f94d414949bf95fb2e6109142cfef1fb2a78114c2c536a36bf5a65b953a5fc1ca581ceb7bf8fd143a36f4eb693794c0f95c76664a12dbaa532a82b5988a207dd2d28aa08a82723b60cd54ef0e48b3a24e4b4ad1c4968e7803e10bb5ed21b0441305a1103889a0fa0536abc02d8c";
            sessionStorage.wm_dcl = "old";
        }

        if (window.location.hostname === "oferta.vodafone.es" ||
            window.location.hostname === "www.ono.es") {

            DELIO.Vodafone = DELIO.Vodafone || {};
            DELIO.Vodafone.loadConversion = DFI.loadConversion;
            DELIO.Vodafone.onoCobertura = DFI.onoCobertura;
        }
        //si existe algun interfaz que hayamos cargado 
        if (DFI.interface) {
            // Arranque del servicio
            DFI.runSupport();
        }

        

    }

    function hideDSAinSearch(){
        try{
            var search = document.querySelectorAll("a.mb-search");
            var close = document.querySelectorAll("button.ebx-close");
            var form = document.querySelector("#open-dsa .wg-form-wrapper");
            var openButton = document.querySelector("#open-dsa .left");
            search.forEach(function(element){
                element.addEventListener("click", function(){
                    form.style.display = 'none'
                    openButton.style.display = "none";
                });
            })
            close.forEach(function(element){
                element.addEventListener("click", function(){
                    form.style.display = 'block';
                });
            })
        }catch (e){}
    }


    /*
    |---------------------------------------------------------------------------
    | Start
    |---------------------------------------------------------------------------
    */
    DFI.start = function() {
        // FN to externals functions
        function cargaDVLSet(){
            if(~window.location.pathname.indexOf('/c/particulares/es/productos-y-servicios/movil/catalogo-clientes/v2/')
            || ~window.location.pathname.indexOf('/c/particulares/es/productos-y-servicios/movil/catalogo-clientes')){
                setTimeout(function(){
                    DVL.set.config({notification:{targetMode: 'nextToTarget', targetSelector: 'label'}})
                },3000);
            }
        }

        DFI.started = true;

        DFI.prepareInterface();
        DFI.domReady(cargaDVLSet);

        // No se lanza el pixel de visita en Cobertura o en la tienda
        if (DFI.interface == "cobertura" || DFI.bTiendaInterface) {
            DFI.global.loadTagVisit = false;
        }

        if(~window.location.pathname.indexOf('/tienda/particulares/es/productos/particulares-migraciones/') ){
            // setTimeout(function(){
                var css = document.createElement('link');
                css.setAttribute('rel', 'stylesheet');
                css.setAttribute('href', 'https://t.womtp.com/slider/c/vodafone/e2e/assets/stylesheets/thank-u-page.css');
                if(document.getElementsByClassName('at-element-marker')[0]){
                    document.getElementsByClassName('at-element-marker')[0].appendChild(css);
                }
            // },3000)
        }

        //function que checkea si se debe añadir estos eventos 
        runInactivityExit();

        //comprovaciones de carga de script de desarrolo LHT
        var devLHTScriptLoaded = isDevScriptNeeded();

        //check if it has to load lht/init.js 
        if (DFI.isChatNeeded() && !devLHTScriptLoaded) {
            //load chat

            DFI.loadScript(DFI.global.lht, function() {});

        }

        // Descarga de DAL
        DFI.loadScript(DFI.global.dal, function() {

            // Descarga del script de support correspondiente ["landing", "tienda", xxx...]
            var interfacesPromises = DFI.DALMultiLoad(DFI.aInterfaces);

            // Carga del pixel de  adform con promesa, esta promesa se ejecutara en el resto de scripts
            DFI.getAdformId();
            
            // Cuando se carguen todas las promesas 
            DAL.Promise.all(interfacesPromises).done(function() {

                // DFI.setTrackingVars();
                
                if (DFI.global.loadTagVisit) {
                    if( location.hostname === "www.vodafone.es" && 
                    (~location.pathname.indexOf('/c/tienda-online/autonomos/'))){
                        DFI.global.tagConversion.vodafone = "https://t.womtp.com/js/otg.min.js?idtag=2d369d10f9ccf0664e54ffb592c00cd2&orderid=";
                        DFI.global.tagVisit.vodafone = "https://t.womtp.com/js/otg.min.js?idtag=106207e20c50759ac62933cafb2e9035";
                    }
                    
                    // Carga pixel de visita
                    DAL.Ajax({
                        type: "script",
                        url: DFI.global.tagVisit[DFI.client]
                    }).done(function() {
                        
                        
                        if(DFI.isIE()){
                            var intervalo = setInterval(function(){
                                if (window.DFI_ready) {
                                    clearInterval(intervalo);
                                    window.DFI_ready(); 
                                }
                            }, 800);
                        }else{
                            if(!window.DFI_ready && ~location.hostname.indexOf('oferta.vodafone.es')){
                                setTimeout(function(){
                                    window.DFI_ready();
                                    console.log("lanzado");
                                },500);
                            }
                            if (window.DFI_ready) {
                                window.DFI_ready();
                            }
                        }
                        
                        DFI.domReady(init);
                        DFI.domReady(DFI.setTrackingVars);
                        DFI.domReady(hideDSAinSearch);
                        
                        // Si es una de las URL del chargeWebServiceURL ejecutamos el WS para condicionar la modal de gracias
                        if(DFI.chargeWebServiceURL()){
                            setTimeout(function(){
                                var buttons = document.querySelectorAll(".wg-submit")[0]; 
                                var buttonsMobile = document.querySelectorAll(".wg-submit")[1];
                                if(buttons){
                                    buttons.addEventListener("mousedown", function () {
                                        DFI.checkCallWs();
                                    });
                                }
                                if(buttonsMobile){
                                    buttonsMobile.addEventListener("mousedown", function () {
                                        DFI.checkCallWs();
                                    });
                                }
                            }, 2000);
                        }
                        
                    });
                    
                } else {
                    DFI.domReady(init);
                }
                // setTimeout(function(){
                // },500);
            });

        }, false, function(err){
            DFI.pixelLog({
                v: "1",
                lib: "dal",
                res: "KO"
            });
        });

    };

    /*
    |---------------------------------------------------------------------------
    | Get URL Notify D3P
    |---------------------------------------------------------------------------
    */
    DFI.pixelLog = function (params) {
        var url_pixel = "https://t.womtp.com/slider/c/log/pixel.png?";
        var url_params = "";
        var pixel_log = document.createElement("img");
        pixel_log.style.display = "none";
        for (var key in params) {
            url_params += key + "=" + params[key] + "&";
        }
        pixel_log.src = url_pixel + url_params;
        document.body.appendChild(pixel_log);
    };

    /*
    |---------------------------------------------------------------------------
    | Get URL Notify D3P
    |---------------------------------------------------------------------------
    */
    DFI.getAdformId = function(data) {
        
        DFI.isLoadAdform = false;
        try {
            var isLoadAdform = new DAL.Promise();
            var cont = 0;
            var interval = setInterval(function() {
                if (window.Adform) {
                    clearInterval(interval);
                    DAL.Ajax({
                        type: "script",
                        url: "https://track.adform.net/Serving/Cookie/?adfaction=getjs;adfcookname=uid"
                    }).done(function() {
                        //callback para la carga
                        window.adForm_ready && window.adForm_ready();
                        isLoadAdform.resolve();
                    }).fail(function(){
                        window.Adform._uid = 1;
                    });
                }
                cont++;
                if (cont > 6) {
                    clearInterval(interval);
                    window.Adform= {};
                    window.Adform._uid = 2;
                    DFI.isLoadAdform = true;
                    window.adForm_ready && window.adForm_ready();
                    isLoadAdform.resolve();
                }
            }, 500);
        } catch (error) {
            window.Adform._uid = "4";
            DFI.isLoadAdform = true;
        }
        
          
        isLoadAdform.done(function(val) {
            /* let isSafari = false;
            let ua = navigator.userAgent.toLowerCase(); 
            if (ua.indexOf('safari') != -1) { 
              if (ua.indexOf('chrome') > -1) {
                isSafari = false;
              } else {
                isSafari = true;// es safari
              }
            }
            if(isSafari){
                adf.track(1034491, "Walmeric - CID");
            } */
            try {
                var loadAdf = setInterval(function(){
                    if(typeof(window.Adform._uid) != "undefined" && window.Adform._uid != ""){
                        //console.log("cargado el Adform._uid: " + window.Adform._uid);
                        try {
                            if(Piwik){
                                alEpst(window.Adform._uid);
                                clearInterval(loadAdf);
                            } 
                        } catch (error) {}
                        
                        DFI.isLoadAdform = true;
                    }else{
                        //console.log("esperando adformId");
                        if(window.Adform._uid === ""){
                            try {
                                adf.track(1034491, "Walmeric - CID");
                            } catch (error) {
                                window.Adform._uid = "2";
                            }
                        }
                    }
                },200);
            } catch (error) {
                window.Adform._uid = "3";
                DFI.isLoadAdform = true;
            }
            
            
        });
    };

    /*
    |---------------------------------------------------------------------------
    | Get URL Notify D3P
    |---------------------------------------------------------------------------
    */
    DFI.getUrlNotifyD3P = function(data) {

        if (!(window.D3P && D3P.notify && D3P.notify.ws)) {
            return false;
        }

        var leadId = data.leadId || DFI.getLeadId(),
            url = DFI.getUrl(true),
            reason = data.message || "",
            reg = data.result || "",
            cliente = D3P.notify.cliente || "",
            type = data.type || "callme";

        var urlNotify = D3P.notify.ws +
            "?leadId=" + leadId +
            "&url=" + url +
            "&registration=" + reg +
            "&cliente=" + cliente +
            "&reason=" + reason +
            "&type=" + type;

        if (D3P.notify.params) {
            var params = D3P.notify.params;
            params = params.replace("{leadId}", leadId);
            params = params.replace("{type}", type);
            params = params.replace("{reason}", reason);
            params = params.replace("{registration}", reg);

            if (params[0] !== "&") {
                params = "&" + params;
            }

            urlNotify = urlNotify + params;
        }

        return urlNotify;
    };

    /*
    |---------------------------------------------------------------------------
    | Notify D3P
    |---------------------------------------------------------------------------
    */
    DFI.notifyD3P = function(data) {
        console.log("D3P Notify");

        var urlNotify = DFI.getUrlNotifyD3P(data);

        if (!urlNotify) {
            return false;
        }

        var iframe = document.createElement("iframe");
        iframe.src = urlNotify;
        iframe.id = "D3P-Notify";
        iframe.style.display = "none";

        document.body.appendChild(iframe);

        return iframe;
    };


    /*
    |---------------------------------------------------------------------------
    | Set Tracking Vars
    |---------------------------------------------------------------------------
    */
    DFI.getClient = function() {
        if (location.hostname === "www.ono.es" ||
            location.hostname === "62.42.232.238" ||
            location.hostname === "172.21.4.28" ||
            location.hostname === "62.42.232.239") {
            return "ono";
        }

        if (window.D3P && D3P.v_var_4 === "ono") {
            return "ono";
        }

        if ((window.D3P && D3P.v_var_4 === "yu") ||
            location.hostname === "yu.vodafone.es") {
            return "yu";
        }

        return "vodafone";
    };



    /*
    |---------------------------------------------------------------------------
    | Obtener LeadId
    |---------------------------------------------------------------------------
    */
    DFI.getInterfaceMode = function() {
        // WCS-5532 Webservice checkcall
        // if (location.hostname === "oferta.vodafone.es" && location.pathname === "/test/estrena-smartphone-5532ws/"){
        //     return "landing-pruebas"
        // }

        // wcs- 4019 galaxy note 9
        if (location.hostname === "smartphonesvodafone.com"
            || location.pathname === "/tienda/particulares/es/informacion/promocion-prueba/"
            || location.pathname === "/tienda/particulares/es/productos/samsung-galaxy-note9/"
            || location.pathname === "/tienda/particulares/es/productos/iphone-xs/"
            || location.pathname === "/tienda/particulares/es/productos/iphone-9/"
            || location.pathname === "/tienda/particulares/es/productos/iphone-xs-plus/"
            || location.pathname === "/tienda/particulares/es/productos/nuevo-iphone/"
            || location.pathname === "/tienda/particulares/es/productos/nuevos-iphone/"
            || location.pathname === "/tienda/particulares/es/productos/iphone-xs-max/"
            || location.pathname === "/tienda/particulares/es/productos/iphone-xc/"
            || location.pathname === "/tienda/particulares/es/productos/apple-watch/"
            || location.pathname === "/tienda/particulares/es/productos/prueba-uno/"
            || location.pathname === "/static/microsites/particulares-landing-iphone-xs/index.html"
            || location.pathname === "/static/microsites/particulares-prueba-uno/index.html"
            || location.pathname === "/static/microsites/particulares-apple-watch/index.html"
            || location.pathname === "/static/microsites/particulares-prueba-oferta/index.html"
            || location.pathname === "/tienda/particulares/es/productos/samsung-galaxy-s10"
            || location.pathname === "/c/particulares/es/productos-y-servicios/movil/catalogo-clientes/"
            || location.pathname === "/c/particulares/es/productos-y-servicios/movil/catalogo-clientes/v2"
            || location.pathname === "/static/microsites/descuentos-clientes-1/index.html"
            || location.pathname === "/static/microsites/descuentos-clientes-2/index.html"
            || location.pathname === "/static/microsites/smartphones-clientes-3/index.html"
            || location.pathname === "/static/microsites/smartphones-clientes-2/index.html"
            || location.pathname === "/static/microsites/smartphones-clientes-1/index.html"
            || location.pathname === "/c/particulares/es/productos-y-servicios/soy-cliente/"
            || location.pathname === "/c/particulares/es/tienda/ofertas-y-promociones/one-ilimitada-super/"
            ) {
            return "landing";
        }

        if (location.hostname === "www.ono.es" ||
            // PRE
            location.hostname === "62.42.232.239" ||
            // DES - publica
            location.hostname === "62.42.232.238" ||
            // DES - privada
            location.hostname === "172.21.4.28") {
            return "ono";
        }

        /*if (~location.href.indexOf("tienda/particulares/es/one/cobertura") ||
            ~location.href.indexOf("tienda/particulares/es/one-todo-en-uno/configurar-oferta") ||
            ~location.href.indexOf("tienda/particulares/es/one-todo-en-uno/fibra-ono-movil") ||
            ~location.href.indexOf("tienda/particulares/es/one-todo-en-uno/fibra-ono-movil-tv") ||
            ~location.href.indexOf("tienda/particulares/es/one-todo-en-uno/television-con-one") ||
            ~location.href.indexOf("tienda/particulares/es/one-todo-en-uno/contratar-television") ||
            ~location.href.indexOf("tienda/particulares/es/one-todo-en-uno/lineas-adicionales") ||
            ~location.href.indexOf("tienda/particulares/es/one/todo-el-futbol") ||
            ~location.href.indexOf("tienda/particulares/es/one-todo-en-uno/comparador-one")) {

            return "cobertura";
        }*/


        // if ((location.hostname === "www.vodafone.es" && ~location.href.indexOf("tienda/particulares/es/internet-y-fijo/fibra-ono-fijo") )){
        if (location.hostname === "www.vodafone.es" &&
            (~location.href.indexOf("static/microsites/test-fibrafijo/index.html") || (~location.href.indexOf("tienda/particulares/es/internet-y-fijo/fibra-ono-fijo") && (window.targetTestVersion && window.targetTestVersion.FY1718_T025 === "alternativa")))
        ) {

            return "one-click";
        }

        // WCS-4550 - Landing Migras YU (exclusion de URL para que si cargue landing.js/RP)
        // URLS static
        if (location.hostname === "www.vodafone.es" &&
            (~location.pathname.indexOf("/static/microsites/particulares-vodafone-fibra/") ||
             ~location.pathname.indexOf("/static/microsites/promocion_prueba/") ||
             ~location.pathname.indexOf("/static/microsites/particulares-samsung-note9/") ||
             ~location.pathname.indexOf("/static/microsites/particulares-fibra-yuser-clientes/") ||
             ~location.pathname.indexOf("/static/microsites/particulares-fibra-yuser-hazte-cliente/" ) ||
             ~location.pathname.indexOf("/static/microsites/particulares-pasate-contrato-yu/index.html" ) ||
             ~location.pathname.indexOf('/c/particulares/es/productos-y-servicios/television/hbo-espana/') ||
             ~location.pathname.indexOf('/c/particulares/es/mas-con-vodafone/objetos-conectados/v-home/amazon-echo/') ||
             ~location.pathname.indexOf('/c/particulares/es/mas-con-vodafone/objetos-conectados/') ||
             ~location.pathname.indexOf('/c/particulares/es/tienda/ofertas-y-promociones/amazon-prime/') ||
             ~location.pathname.indexOf('/c/particulares/es/oferta/one-vodafone/') ||
             ~location.pathname.indexOf('/c/particulares/es/productos-y-servicios/moviles/samsung-galaxy-s10/') ||
             ~location.pathname.indexOf('/c/particulares/es/productos-y-servicios/movil/catalogo-clientes/v2/') 
            //  ~window.top.location.pathname.indexOf('/tienda/particulares/es/productos/particulares-migraciones/') 
            )) {
            return "landing";
        }

        if ((location.hostname === "www.vodafone.es" && ~location.pathname.indexOf('vodafone-one/vf-rec')) || (location.hostname === "www.vodafone.es" && ~location.pathname.indexOf('vodafone-one/configurador-recomendador-paquete-tarifas-oferta-one/'))) {
            return "recom";
        }

        /*if ((~location.href.indexOf("tienda/particulares/es/one/configurador") ||
                ~location.href.indexOf("tienda/proceso-compra-tu-pedido/es/clientes")) &&
            sessionStorage.wm_site === "cobertura") {
            return "cobertura";
        }*/

        if(location.hostname === "www.vodafone.es" && ~location.pathname.indexOf('/tienda/particulares/es/one/configurar-oferta/')) {
            return "configurador"
        }

        //Ruta NTOL
        if(~location.pathname.indexOf('/c/tienda-online/particulares/')){
            return "landing";
        }

        // Quitar
        // if (location.hostname === "www.vodafone.es") {
        if (location.hostname === "www.vodafone.es" || location.hostname === "yu.vodafone.es") {
            return "";
        }
 
        return "landing";
    };

    /*
    |---------------------------------------------------------------------------
    | Devuelve booleando que indica si se requiere cargar la compra fácil
    |---------------------------------------------------------------------------
    */
     DFI.isComprafacilInteface = function() {

        var urls = [
            "www.vodafone.es/tienda/particulares/es/productos/samsung-galaxy-note9/",
            "www.vodafone.es/tienda/particulares/es/informacion/promocion-prueba/",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/fibra-movil-tv/",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/fibra-movil/",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/contratar-television/",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/television-con-one/",
            "www.vodafone.es/tienda/particulares/es/movil/solo-sim/",
            "www.vodafone.es/tienda/particulares/es/movil/ya-soy-cliente/",
            "www.vodafone.es/tienda/particulares/es/movil/no-soy-cliente/",
            "www.vodafone.es/tienda/particulares/es/productos/hbo-con-vodafone/",
            "www.vodafone.es/tienda/particulares/es/one/todo-el-futbol/",
            "www.vodafone.es/tienda/particulares/es/internet-y-fijo/internet-movil/",
            "www.vodafone.es/tienda/particulares/es/internet-y-fijo/fibra-fijo/",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/particular/movil/samsung/galaxy-s9-azul/",
            "www.vodafone.es/tienda/particulares/es/clientes/catalogo-moviles/contrato/",
            "www.vodafone.es/tienda/particulares/es/catalogo-moviles/pasate-a-contrato/",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/prepago/movil/tarjeta/sim_vodafone_internacional_smartphone/",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/prepago/movil/tarjeta/sim_yuser/",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/prepago/movil/tarjeta/sim_vodafone_internacional_voz/",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/prepago/movil/tarjeta/vodafone_fcil/",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/particular/movil/vodafone/r218/",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/particular/movil/vodafone/smart_tab_n8/",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/particular/movil/vodafone-en-tu-casa/adoc-k1/",
            "yu.vodafone.es",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/prepago/movil/tarjeta/sim_yuser/",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/prepago/movil/tarjeta/sim_superyuser/",
            "www.vodafone.es/tienda/particulares/es/one/configurar-oferta/",
            "www.vodafone.es/tienda/particulares/es/informacion/ventajas-comprar-online/",
            //WCS-3863 - Compra Fácil > Nueva URL > Estrena Smartphone
            "www.vodafone.es/tienda/particulares/es/productos/promocion-smartphone/",
            //AACF-130 - Indra nos pide que carguemos compra fácil en esas url
            "10.225.122.241:22080/tienda/particulares/es/catalogo/ficha/particular",
            "10.225.122.241:22080/tienda/autonomos/es/me/catalogo/ficha/microempresa",
            "10.225.239.197:10080/tienda/particulares/es/catalogo/ficha/particular",
            "10.225.239.197:10080/tienda/autonomos/es/me/catalogo/ficha/microempresa",
            //AACF-134 veo que cuando lo pones en catalan se suprime el /ca, asique lo he puesto de su forma y de la que nos funciona por si lo cambian en un futuro
            "www.vodafone.es./ca/tienda/particulares/es/one-todo-en-uno/fibra-movil-tv/",
            "www.vodafone.es./ca/tienda/particulares/es/one-todo-en-uno/fibra-movil",
            "www.vodafone.es./ca/tienda/particulares/es/one-todo-en-uno/contratar-television/",
            "www.vodafone.es./ca/tienda/particulares/es/one-todo-en-uno/television-con-one/?mostrarGE=true",
            "www.vodafone.es./ca/tienda/particulares/es/movil/solo-sim/",
            "www.vodafone.es./ca/tienda/particulares/es/movil/ya-soy-cliente/",
            "www.vodafone.es./ca/tienda/particulares/es/movil/no-soy-cliente/",
            "www.vodafone.es./ca/tienda/particulares/es/productos/hbo-con-vodafone/",
            "www.vodafone.es./ca/tienda/particulares/es/one/todo-el-futbol/",
            "www.vodafone.es./ca/tienda/particulares/es/internet-y-fijo/fibra-fijo/",
            "www.vodafone.es./ca/tienda/particulares/es/informacion/ventajas-comprar-online/",
            "www.vodafone.es./ca/tienda/particulares/es/one/configurar-oferta/",
            "www.vodafone.es./tienda/particulares/es/one-todo-en-uno/fibra-movil-tv/",
            "www.vodafone.es./tienda/particulares/es/one-todo-en-uno/fibra-movil",
            "www.vodafone.es./tienda/particulares/es/one-todo-en-uno/contratar-television/",
            "www.vodafone.es./tienda/particulares/es/one-todo-en-uno/television-con-one/?mostrarGE=true",
            "www.vodafone.es./tienda/particulares/es/one-todo-en-uno/television-con-one?mostrarGE=true",
            "www.vodafone.es./tienda/particulares/es/movil/solo-sim/",
            "www.vodafone.es./tienda/particulares/es/movil/ya-soy-cliente/",
            "www.vodafone.es./tienda/particulares/es/movil/no-soy-cliente/",
            "www.vodafone.es./tienda/particulares/es/productos/hbo-con-vodafone/",
            "www.vodafone.es./tienda/particulares/es/one/todo-el-futbol/",
            "www.vodafone.es./tienda/particulares/es/internet-y-fijo/fibra-fijo/",
            "www.vodafone.es./tienda/particulares/es/informacion/ventajas-comprar-online/",
            "www.vodafone.es./tienda/particulares/es/one/configurar-oferta/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/fibra-movil-tv/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/fibra-movil",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/contratar-television/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/television-con-one/?mostrarGE=true",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/television-con-one?mostrarGE=true",
            "www.vodafone.es/ca/tienda/particulares/es/movil/solo-sim/",
            "www.vodafone.es/ca/tienda/particulares/es/movil/ya-soy-cliente/",
            "www.vodafone.es/ca/tienda/particulares/es/movil/no-soy-cliente/",
            "www.vodafone.es/ca/tienda/particulares/es/productos/hbo-con-vodafone/",
            "www.vodafone.es/ca/tienda/particulares/es/one/todo-el-futbol/",
            "www.vodafone.es/ca/tienda/particulares/es/internet-y-fijo/fibra-fijo/",
            "www.vodafone.es/ca/tienda/particulares/es/informacion/ventajas-comprar-online/",
            "www.vodafone.es/ca/tienda/particulares/es/one/configurar-oferta/",
            //WCS-4399 240918
            "www.vodafone.es/c/particulares/es/productos-y-servicios/vodafone-one/", // subieron el form a otra url (la que esta debajo de esta)
            "www.vodafone.es/c/particulares/es/productos-y-servicios/vodafone-one-resideno/",
            // WCS-4509 - Formulario Compra Fácil > Nuevas urls
            "www.vodafone.es/static/microsites/particulares-tarifas-test/index.html",
            "www.vodafone.es/static/microsites/particulares-fibra-fijo-test-v2/index.html",
            "www.vodafone.es/tienda/particulares/es/catalogo-moviles/",
            "www.vodafone.es/tienda/particulares/es/catalogo-moviles/prepago/",
            "www.vodafone.es/tienda/particulares/es/catalogo-tablets/",
            "www.vodafone.es/tienda/particulares/es/catalogo-modems/contrato/",
            "www.vodafone.es/tienda/particulares/es/catalogo-moviles/sim-datos/",
            "www.vodafone.es/tienda/particulares/es/catalogo-fijos/",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/particular/",
            "www.vodafone.es/tienda/particulares/es/clientes/catalogo/ficha/particular/",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/prepago/movil/",
            //WCS-4817 - Compra Fácil > Nueva URL > Tarifas y Cobertura
            "www.vodafone.es/tienda/particulares/es/internet-y-fijo/tarifas-cobertura-fibra-adsl/",
            //WCS-4815 - Venta iPhone XR > Formulario Compra Fácil
            "www.vodafone.es/tienda/particulares/es/productos/iphone-xr/",
            //WCS-4927 - Compra Fácil > Nueva url
            "www.vodafone.es/c/particulares/es/productos-y-servicios/television/",
            "www.vodafone.es/tienda/particulares/es/one/cobertura-fibra/",
            "www.vodafone.es/c/particulares/es/mas-con-vodafone/objetos-conectados/listado/",
            "www.vodafone.es/tienda/particulares/es/one/cobertura-adsl",
            "www.vodafone.es/tienda/particulares/es/one/cobertura-one-basico",
            "www.vodafone.es/tienda/particulares/es/one/black-friday/",
            "www.vodafone.es/tienda/particulares/es/one/cyber-monday/",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/movil/contrato/tarifas-contrato/",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/internet-y-fijo/fibra-fijo-1/",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/internet-y-fijo/fibra-fijo-2/",
            "www.vodafone.es/static/microsites/particulares-terminales-test/index.html",
            "www.vodafone.es/static/microsites/particulares-resultado-fibra-test/index.html",
            "www.vodafone.es/tienda/particulares/es/one/haz-tu-paquete/",
            "www.vodafone.es/tienda/particulares/es/one/cobertura-fibra-regional",
            "www.vodafone.es/tienda/particulares/es/one/cobertura-adsl-regional",
            "www.vodafone.es/tienda/particulares/es/one/cobertura-one-basico-regional",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/internet-y-fijo/",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/vodafone-one/configurar-oferta", //WCS-6283
            "www.vodafone.es/c/particulares/es/productos-y-servicios/abc-des-wyz/",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/movil/contrato/mas-lineas/",
            "www.vodafone.es/c/particulares/es/mas-con-vodafone/servicios-para-tu-movil/tidal/",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/vodafone-one/cobertura/one-basico/",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/vodafone-one/cobertura/fibra/",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/vodafone-one/cobertura/adsl/",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/no-soy-cliente/destiny/",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/no-soy-cliente/",
            "www.vodafone.es/c/particulares/es/mas-con-vodafone/objetos-conectados/v-home/",
            "www.vodafone.es/c/particulares/es/mas-con-vodafone/objetos-conectados/v-home/amazon-echo/",
            "www.vodafone.es/c/particulares/es/mas-con-vodafone/objetos-conectados/v-home/google-home/",
            "www.vodafone.es/c/particulares/es/",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/moviles/moviles-5g/",
            "www.vodafone.es/c/conocenos/es/5g/",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/vodafone-one/verano-50/",


            "www.vodafone.es/ca/tienda/particulares/es/informacion/promocion-prueba/",
            "www.vodafone.es/ca/tienda/particulares/es/productos/samsung-galaxy-note9/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/fibra-movil-tv/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/fibra-movil/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/contratar-television/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/television-con-one/",
            "www.vodafone.es/ca/tienda/particulares/es/movil/solo-sim/",
            "www.vodafone.es/ca/tienda/particulares/es/movil/ya-soy-cliente/",
            "www.vodafone.es/ca/tienda/particulares/es/movil/no-soy-cliente/",
            "www.vodafone.es/ca/tienda/particulares/es/productos/hbo-con-vodafone/",
            "www.vodafone.es/ca/tienda/particulares/es/one/todo-el-futbol/",
            "www.vodafone.es/ca/tienda/particulares/es/internet-y-fijo/internet-movil/",
            "www.vodafone.es/ca/tienda/particulares/es/internet-y-fijo/fibra-fijo/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo/ficha/particular/movil/samsung/galaxy-s9-azul/",
            "www.vodafone.es/ca/tienda/particulares/es/clientes/catalogo-moviles/contrato/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo-moviles/pasate-a-contrato/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo/ficha/prepago/movil/tarjeta/sim_vodafone_internacional_smartphone/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo/ficha/prepago/movil/tarjeta/sim_yuser/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo/ficha/prepago/movil/tarjeta/sim_vodafone_internacional_voz/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo/ficha/prepago/movil/tarjeta/vodafone_fcil/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo/ficha/particular/movil/vodafone/r218/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo/ficha/particular/movil/vodafone/smart_tab_n8/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo/ficha/particular/movil/vodafone-en-tu-casa/adoc-k1/",
            "yu.vodafone.es",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo/ficha/prepago/movil/tarjeta/sim_yuser/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo/ficha/prepago/movil/tarjeta/sim_superyuser/",
            "www.vodafone.es/ca/tienda/particulares/es/one/configurar-oferta/",
            "www.vodafone.es/ca/tienda/particulares/es/informacion/ventajas-comprar-online/",
            //WCS-3863 - Compra Fácil > Nueva URL > Estrena Smartphone
            "www.vodafone.es/ca/tienda/particulares/es/productos/promocion-smartphone/",
            //AACF-130 - Indra nos pide que carguemos compra fácil en esas url
            "10.225.122.241:22080/tienda/particulares/es/catalogo/ficha/particular",
            "10.225.122.241:22080/tienda/autonomos/es/me/catalogo/ficha/microempresa",
            "10.225.239.197:10080/tienda/particulares/es/catalogo/ficha/particular",
            "10.225.239.197:10080/tienda/autonomos/es/me/catalogo/ficha/microempresa",
            //AACF-134 veo que cuando lo pones en catalan se suprime el /ca, asique lo he puesto de su forma y de la que nos funciona por si lo cambian en un futuro
            
            
            
            //WCS-4399 240918
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/vodafone-one/", // subieron el form a otra url (la que esta debajo de esta)
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/vodafone-one-resideno/",
            // WCS-4509 - Formulario Compra Fácil > Nuevas urls
            "www.vodafone.es/ca/static/microsites/particulares-tarifas-test/index.html",
            "www.vodafone.es/ca/static/microsites/particulares-fibra-fijo-test-v2/index.html",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo-moviles/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo-moviles/prepago/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo-tablets/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo-modems/contrato/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo-moviles/sim-datos/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo-fijos/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo/ficha/particular/",
            "www.vodafone.es/ca/tienda/particulares/es/clientes/catalogo/ficha/particular/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo/ficha/prepago/movil/",
            //WCS-4817 - Compra Fácil > Nueva URL > Tarifas y Cobertura
            "www.vodafone.es/ca/tienda/particulares/es/internet-y-fijo/tarifas-cobertura-fibra-adsl/",
            //WCS-4815 - Venta iPhone XR > Formulario Compra Fácil
            "www.vodafone.es/ca/tienda/particulares/es/productos/iphone-xr/",
            //WCS-4927 - Compra Fácil > Nueva url
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/television/",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura-fibra/",
            "www.vodafone.es/ca/c/particulares/es/mas-con-vodafone/objetos-conectados/listado/",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura-adsl",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura-one-basico",
            "www.vodafone.es/ca/tienda/particulares/es/one/black-friday/",
            "www.vodafone.es/ca/tienda/particulares/es/one/cyber-monday/",
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/movil/contrato/tarifas-contrato/",
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/internet-y-fijo/fibra-fijo-1/",
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/internet-y-fijo/fibra-fijo-2/",
            "www.vodafone.es/ca/static/microsites/particulares-terminales-test/index.html",
            "www.vodafone.es/ca/static/microsites/particulares-resultado-fibra-test/index.html",
            "www.vodafone.es/ca/tienda/particulares/es/one/haz-tu-paquete/",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura-fibra-regional",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura-adsl-regional",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura-one-basico-regional",
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/internet-y-fijo/",
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/vodafone-one/configurar-oferta", //WCS-6283
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/abc-des-wyz/",
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/movil/contrato/mas-lineas/",
            "www.vodafone.es/ca/c/particulares/es/mas-con-vodafone/servicios-para-tu-movil/tidal/",
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/vodafone-one/cobertura/one-basico/",
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/vodafone-one/cobertura/fibra/",
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/vodafone-one/cobertura/adsl/",
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/no-soy-cliente/destiny/",
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/no-soy-cliente/",
            "www.vodafone.es/ca/c/particulares/es/mas-con-vodafone/objetos-conectados/v-home/",
            "www.vodafone.es/ca/c/particulares/es/mas-con-vodafone/objetos-conectados/v-home/amazon-echo/",
            "www.vodafone.es/ca/c/particulares/es/mas-con-vodafone/objetos-conectados/v-home/google-home/",
            "www.vodafone.es/ca/c/particulares/es/"
        ];

        var urlFound = false;

        urls.forEach(function(url, i) {
            if (~location.href.indexOf(url)) {
                urlFound = true;
            }
        });
        //si pertenece a una de estas url
        return urlFound

    }

    /*
    |---------------------------------------------------------------------------
    | Devuelve booleando que indica si se requiere cargar tienda.js
    |---------------------------------------------------------------------------
    */
    DFI.isTiendaInteface = function() {

        var urls = [
            "www.vodafone.es/tienda/particulares/es/productos/particulares-fibra-gratis/",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/fibra-movil-tv/",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/configurar-oferta/",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/fibra-ono-movil/",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/television-con-one/",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/contratar-television/",
            "www.vodafone.es/tienda/particulares/es/internet-y-fijo/fibra-ono-fijo/",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/lineas-adicionales/",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/comparador-one/",
            "www.vodafone.es/tienda/particulares/es/one/todo-el-futbol/",
            "www.vodafone.es/tienda/particulares/es/internet-y-fijo/fibra-fijo/",
            "www.vodafone.es/static/microsites/particulares-segundaslineas/",
            "www.vodafone.es/static/microsites/particulares-migraciones/",
            "www.vodafone.es/static/microsites/particulares-primeraslineas/",
            "www.vodafone.es/static/microsites/particulares-mas-lineas-datos/",
            "www.vodafone.es/static/microsites/particulares-mas-lineas-vacaciones/",
            "www.vodafone.es/static/microsites/particulares-mas-lineas-vacaciones-oferta/",
            "www.vodafone.es/static/microsites/particulares-ahorra-con-tu-fijo/",
            "www.vodafone.es/static/microsites/particulares-one-basico/",
            "www.vodafone.es/static/microsites/particulares-fibra-gratis/",
            "www.vodafone.es/static/microsites/particulares-adsl-gratis/",
            "www.vodafone.es/static/microsites/particulares-vodafoneonefibra-gratis/",
            "www.vodafone.es/static/microsites/particulares-fibra-oferta-exclusiva/",
            "www.vodafone.es/static/microsites/particulares-fibra-tv/",
            "www.vodafone.es/static/microsites/particulares-adsl-tv/",
            "www.vodafone.es/static/microsites/particulares-neba-tv/",
            "www.vodafone.es/static/microsites/particulares-paquete-futbol/",
            "www.vodafone.es/static/microsites/particulares-sport/",
            "www.vodafone.es/static/microsites/particulares-fibra-clientes/",
            "www.vodafone.es/static/microsites/particulares-oferta-exclusiva/",
            //url de testeo de los nuevos formularios
            "www.vodafone.es/static/microsites/prueba-c2c/index.html",
            // "www.vodafone.es/tienda/particulares/es/catalogo-moviles/",
            "www.vodafone.es/tienda/particulares/es/one/configurador/",
            //"www.vodafone.es/c/particulares/es",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/fibra-movil/",
            //petición WCS-2428
            "www.vodafone.es/tienda/particulares/es/internet-y-fijo/tarifas-cobertura-fibra-adsl/",
            "www.vodafone.es/tienda/particulares/es/informacion/ventajas-compra-online/",
            "www.vodafone.es/tienda/particulares/es/movil/renueva-movil-prepago/",
            "www.vodafone.es/tienda/particulares/es/productos/hbo-con-vodafone/",
            "www.vodafone.es/tienda/particulares/es/productos/promocion-smartphone/",
            "www.vodafone.es/tienda/particulares/es/movil/solo-sim/",
            "www.vodafone.es/tienda/particulares/es/movil/ya-soy-cliente/",
            "www.vodafone.es/tienda/particulares/es/movil/no-soy-cliente/",
            "www.vodafone.es/tienda/particulares/es/one/internet-en-casa/",
            //ticket WCS-2333
            "www.vodafone.es/static/microsites/faqs_fichero/",
            "www.vodafone.es/tienda/particulares/es/productos/mas-lineas-vacaciones/",
            //ticket WCS-3056
            "www.vodafone.es/tienda/particulares/es/informacion/ventajas-comprar-online/",
            "www.vodafone.es/tienda/particulares/es/internet-y-fijo/internet-movil/",
            //20180525
            "www.vodafone.es/tienda/particulares/es/informacion/re-estrena/",
            "www.vodafone.es/tienda/particulares/es/one/internet-en-casa/",
            //20180605
            "www.vodafone.es/c/particulares/es/tienda/vodafone-one/",
            "www.vodafone.es/c/particulares/es/tienda/vodafone-one/paquete-one-light/",
            "www.vodafone.es/c/particulares/es/tienda/vodafone-one/paquete-120-mb-m/",
            "www.vodafone.es/c/particulares/es/tienda/vodafone-one/paquete-300mb/",
            "www.vodafone.es/c/particulares/es/tienda/vodafone-one/familia/",
            "www.vodafone.es/c/particulares/es/tienda/internet-y-fijo/solo-telefono-fijo/",
            //"www.vodafone.es/c/particulares/es/productos-y-servicios/television/",
            "www.vodafone.es/c/particulares/es/futbol/",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/television/netflix/",
            "www.vodafone.es/c/particulares/es/tienda/internet-y-fijo/descubre-la-fibra-optica-de-vodafone/",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/vodafone-one/configurador-recomendador-paquete-tarifas-oferta-one/",
            //"www.vodafone.es/c/particulares/es/productos-y-servicios/vodafone-one/",
            //WCS-3690 Flotante - Configurador
            "www.vodafone.es/tienda/particulares/es/one/configurador/",
            "www.vodafone.es/tienda/particulares/es/one/cobertura/",
            //WCS-3610 / 270618
            "www.vodafone.es/tienda/particulares/es/catalogo-tablets/",
            "www.vodafone.es/tienda/particulares/es/productos/moviles-libres/",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/",
            "www.vodafone.es/tienda/particulares/es/clientes/catalogo/ficha/",
            //WCS-3513 / 270618
            "www.vodafone.es/tienda/particulares/es/clientes/catalogo-moviles/",
            // WCS-3690 Flotante - Configurador
            "www.vodafone.es/tienda/particulares/es/one/configurar-oferta/",
            // WCS-4150
            "www.vodafone.es/static/microsites/test-velocidad/index.html",
            "www.vodafone.es/tienda/particulares/es/one/cobertura-one-basico/",
            "www.vodafone.es/tienda/particulares/es/one/cobertura-adsl/",
            "www.vodafone.es/tienda/particulares/es/one/cobertura-fibra/",
            // Google Home 20180709
            "www.vodafone.es/c/particulares/es/mas-con-vodafone/objetos-conectados/v-home/google-home/",
            //WCS-4615 - Landing - Test de velocidad
            "www.vodafone.es/static/microsites/particulares-test-velocidad/index.html",
            //WCS-4485
            "www.vodafone.es/tienda/particulares/es/catalogo-fijos/",
            "www.vodafone.es/tienda/particulares/es/catalogo-modems/contrato/",
            //WCS-5062 Flotante > Landing Black Friday
            "www.vodafone.es/tienda/particulares/es/one/black-friday/",
            //WCS-5236 Cyber Monday > Flotante
            "www.vodafone.es/tienda/particulares/es/one/cyber-monday/",
            "www.vodafone.es/static/microsites/particulares-gamers/index.html",   //WCS-5495
            "www.vodafone.es/static/microsites/particulares-terminales-test/index.html",
            "www.vodafone.es/tienda/particulares/es/productos/particulares-migraciones-fibra-directa/",
            "www.vodafone.es/tienda/particulares/es/productos/particulares-migracionesfibra/",
            "www.vodafone.es/static/microsites/particulares-migracionesfibra/index.html",
            "www.vodafone.es/static/microsites/particulares-migraciones-fibra-directa/index.html",
            "www.vodafone.es/static/microsites/particulares-resultado-fibra-test/index.html",
            "www.vodafone.es/tienda/particulares/es/one/haz-tu-paquete/",
            "www.vodafone.es/tienda/particulares/es/one/cobertura-fibra-regional",
            "www.vodafone.es/tienda/particulares/es/one/cobertura-adsl-regional",
            "www.vodafone.es/tienda/particulares/es/one/cobertura-one-basico-regional",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/vodafone-one/cobertura/one-basico/",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/vodafone-one/cobertura/fibra/",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/vodafone-one/cobertura/adsl/",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/no-soy-cliente/destiny/",
            // "www.vodafone.es/c/particulares/es/productos-y-servicios/no-soy-cliente/",


            "www.vodafone.es/ca/tienda/particulares/es/productos/particulares-fibra-gratis/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/fibra-movil-tv/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/configurar-oferta/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/fibra-ono-movil/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/television-con-one/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/contratar-television/",
            "www.vodafone.es/ca/tienda/particulares/es/internet-y-fijo/fibra-ono-fijo/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/lineas-adicionales/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/comparador-one/",
            "www.vodafone.es/ca/tienda/particulares/es/one/todo-el-futbol/",
            "www.vodafone.es/ca/tienda/particulares/es/internet-y-fijo/fibra-fijo/",
            "www.vodafone.es/ca/static/microsites/particulares-segundaslineas/",
            "www.vodafone.es/ca/static/microsites/particulares-migraciones/",
            "www.vodafone.es/ca/static/microsites/particulares-primeraslineas/",
            "www.vodafone.es/ca/static/microsites/particulares-mas-lineas-datos/",
            "www.vodafone.es/ca/static/microsites/particulares-mas-lineas-vacaciones/",
            "www.vodafone.es/ca/static/microsites/particulares-mas-lineas-vacaciones-oferta/",
            "www.vodafone.es/ca/static/microsites/particulares-ahorra-con-tu-fijo/",
            "www.vodafone.es/ca/static/microsites/particulares-one-basico/",
            "www.vodafone.es/ca/static/microsites/particulares-fibra-gratis/",
            "www.vodafone.es/ca/static/microsites/particulares-adsl-gratis/",
            "www.vodafone.es/ca/static/microsites/particulares-vodafoneonefibra-gratis/",
            "www.vodafone.es/ca/static/microsites/particulares-fibra-oferta-exclusiva/",
            "www.vodafone.es/ca/static/microsites/particulares-fibra-tv/",
            "www.vodafone.es/ca/static/microsites/particulares-adsl-tv/",
            "www.vodafone.es/ca/static/microsites/particulares-neba-tv/",
            "www.vodafone.es/ca/static/microsites/particulares-paquete-futbol/",
            "www.vodafone.es/ca/static/microsites/particulares-sport/",
            "www.vodafone.es/ca/static/microsites/particulares-fibra-clientes/",
            "www.vodafone.es/ca/static/microsites/particulares-oferta-exclusiva/",
            "www.vodafone.es/ca/static/microsites/prueba-c2c/index.html",
            // "www.vodafone.es/ca/tienda/particulares/es/catalogo-moviles/",
            "www.vodafone.es/ca/tienda/particulares/es/one/configurador/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/fibra-movil/",
            "www.vodafone.es/ca/tienda/particulares/es/internet-y-fijo/tarifas-cobertura-fibra-adsl/",
            "www.vodafone.es/ca/tienda/particulares/es/informacion/ventajas-compra-online/",
            "www.vodafone.es/ca/tienda/particulares/es/movil/renueva-movil-prepago/",
            "www.vodafone.es/ca/tienda/particulares/es/productos/hbo-con-vodafone/",
            "www.vodafone.es/ca/tienda/particulares/es/productos/promocion-smartphone/",
            "www.vodafone.es/ca/tienda/particulares/es/movil/solo-sim/",
            "www.vodafone.es/ca/tienda/particulares/es/movil/ya-soy-cliente/",
            "www.vodafone.es/ca/tienda/particulares/es/movil/no-soy-cliente/",
            "www.vodafone.es/ca/tienda/particulares/es/one/internet-en-casa/",
            "www.vodafone.es/ca/static/microsites/faqs_fichero/",
            "www.vodafone.es/ca/tienda/particulares/es/productos/mas-lineas-vacaciones/",
            "www.vodafone.es/ca/tienda/particulares/es/informacion/ventajas-comprar-online/",
            "www.vodafone.es/ca/tienda/particulares/es/internet-y-fijo/internet-movil/",
            "www.vodafone.es/ca/tienda/particulares/es/informacion/re-estrena/",
            "www.vodafone.es/ca/tienda/particulares/es/one/internet-en-casa/",
            "www.vodafone.es/ca/c/particulares/es/tienda/vodafone-one/",
            "www.vodafone.es/ca/c/particulares/es/tienda/vodafone-one/paquete-one-light/",
            "www.vodafone.es/ca/c/particulares/es/tienda/vodafone-one/paquete-120-mb-m/",
            "www.vodafone.es/ca/c/particulares/es/tienda/vodafone-one/paquete-300mb/",
            "www.vodafone.es/ca/c/particulares/es/tienda/vodafone-one/familia/",
            "www.vodafone.es/ca/c/particulares/es/tienda/internet-y-fijo/solo-telefono-fijo/",
            "www.vodafone.es/ca/c/particulares/es/futbol/",
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/television/netflix/",
            "www.vodafone.es/ca/c/particulares/es/tienda/internet-y-fijo/descubre-la-fibra-optica-de-vodafone/",
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/vodafone-one/configurador-recomendador-paquete-tarifas-oferta-one/",
            "www.vodafone.es/ca/tienda/particulares/es/one/configurador/",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo-tablets/",
            "www.vodafone.es/ca/tienda/particulares/es/productos/moviles-libres/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo/ficha/",
            "www.vodafone.es/ca/tienda/particulares/es/clientes/catalogo/ficha/",
            "www.vodafone.es/ca/tienda/particulares/es/clientes/catalogo-moviles/",
            "www.vodafone.es/ca/tienda/particulares/es/one/configurar-oferta/",
            "www.vodafone.es/ca/static/microsites/test-velocidad/index.html",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura-one-basico/",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura-adsl/",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura-fibra/",
            "www.vodafone.es/ca/c/particulares/es/mas-con-vodafone/objetos-conectados/v-home/google-home/",
            "www.vodafone.es/ca/static/microsites/particulares-test-velocidad/index.html",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo-fijos/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo-modems/contrato/",
            "www.vodafone.es/ca/tienda/particulares/es/one/black-friday/",
            "www.vodafone.es/ca/tienda/particulares/es/one/cyber-monday/",
            "www.vodafone.es/ca/static/microsites/particulares-gamers/index.html",  
            "www.vodafone.es/ca/static/microsites/particulares-terminales-test/index.html",
            "www.vodafone.es/ca/tienda/particulares/es/productos/particulares-migraciones-fibra-directa/",
            "www.vodafone.es/ca/tienda/particulares/es/productos/particulares-migracionesfibra/",
            "www.vodafone.es/ca/static/microsites/particulares-migracionesfibra/index.html",
            "www.vodafone.es/ca/static/microsites/particulares-migraciones-fibra-directa/index.html",
            "www.vodafone.es/ca/static/microsites/particulares-resultado-fibra-test/index.html",
            "www.vodafone.es/ca/tienda/particulares/es/one/haz-tu-paquete/",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura-fibra-regional",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura-adsl-regional",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura-one-basico-regional",
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/vodafone-one/cobertura/one-basico/",
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/vodafone-one/cobertura/fibra/",
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/vodafone-one/cobertura/adsl/",
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/no-soy-cliente/destiny/",
        ];

        var urlFound = false;

        urls.forEach(function(url, i) {
            if (~location.href.indexOf(url)) {
                urlFound = true;
            }
        });

        if(DFI.getQueryVariable("ebq")) urlFound = false;
        //si pertenece a una de estas url
        return urlFound;

    };

    DFI.declarativaPorUrl = function() {

        var result = { id:"default", site:"default" };

        //Sin producto fijo
        var sinProd = [
            {id:"presupuesto-tarifas-adsl-fibra.rastreator", site:"Performance"},
            {id:"vodafone.rastreatortest.com/", site:"Performance"},
            {id:"ono.rastreatortest.com/", site:"Performance"},
            {id:"tarifas-adsl-fibra.rastreatortest.com/", site:"Performance"},
            {id:"ilead.itrack.it/clients/ESVodafone/", site:"Performance"},
            {id:"vodafone.comparatodo.es/gracias", site:"Performance"},
            {id:"vodafone.es/c/particulares/es/#", site:"WebPublica"},
            {id:"vodafone.es/ca/tienda/particulares/es/one/configurar-oferta/", site:"TOL"},
            {id:"www.vodafone.es/ficticio/?other=facebook.chat.bot:cp-vdf_tol_continuidad:dt-20181010:wn-tol:sp-faceb", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;intereses;prospecting;lead.ad;intereses.android;voz.huaweipsmart.marzo.v1;noemail", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;dmp;retargeting;lead.ad;TOLCU57.CORTA;2p.marzo.v1;nomail", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;voz;lead.ad;retargeting;lead.ad;wca.landing;Samsung.S9.v3.retargeting;marzo.18", site:"Performance"},
            {id:"oferta.vodafone.es/tarifas-movil/", site:"Performance"},
            {id:"pre.roams.es/ofertas/vodafone/hbo-gratis/", site:"Performance"},
            {id:"www.vodafone.es/c/tienda-online/particulares/catalogo-moviles/huawei-p20-azul-128gb-313347/", site:"TOL"},
            {id:"www.vodafone.es/tienda/particulares/es/clientes/catalogo/ficha/particular/movil/apple_iphone/xs-max-256gb-gris-espacial/", site:"TOL"},
            {id:"www.vodafone.es/tienda/particulares/es/clientes/catalogo/ficha/particular/movil/apple_iphone/xs-max-256gb-gris-espacial/", site:"TOL"},
            {id:"www.vodafone.es/c/tienda-online/particulares/catalogo-moviles/huawei-p30-pro-negro-256gb-313621/", site:"TOL"},
            {id:"www.vodafone.es/c/tienda-online/particulares/catalogo-moviles/samsung-galaxy-s10-plus-negro-128gb-313594/", site:"TOL"},
            {id:"www.vodafone.es/c/tienda-online/particulares/catalogo-moviles/huawei-p30-pro-aurora-256gb-313623/", site:"TOL"},
            {id:"www.vodafone.es/tienda/particulares/es/one-todo-en-uno/lineas-adicionales/", site:"TOL"},
            {id:"www.vodafone.es/c/tienda-online/particulares/catalogo-moviles-alcatel/", site:"TOL"},
            {id:"www.vodafone.es/static/microsites/smartphones-clientes-2/index.html", site:"TOL"},
            {id:"localhost:4200/c/tienda-online/particulares/contratacion/pago-mensual/", site:"TOL"},
            {id:"localhost:4200/c/tienda-online/particulares/contratacion/pago-inicial/", site:"TOL"},
            {id:"www.ono.es/", site:"TOL"},
            {id:"oferta.vodafone.es/test/regional-amp/", site:"Performance"},
            {id:"bit.vodafone.es/", site:"BIT"},
            {id:"bit.vodafone.es/tarifa-movil/", site:"BIT"},
            {id:"pre.roams.es/vodafone/", site:"Performance"},
            {id:"www.vodafone.es/c/particulares/es/", site:"WebPublica"},
            {id:"www.vodafone.es/c/particulares/es/mas-con-vodafone/objetos-conectados/v-home/google-home/", site:"WebPublica"},
        ];
        sinProd.forEach(function(url, i) {
            if (~location.href.indexOf(url.id)) {
                result = { id: "", site: url.site }; 
            }
        });
        //Sin producto fijo Igual
        var sinProdIgual = [
            {id:"https://roams.es/vodafone/", site:"Performance"},
            
        ];
        sinProdIgual.forEach(function(url, i) {
            if (~location.href.indexOf(url.id)) {
                result = { id: "", site: url.site }; 
            }
        });

        //Internet
        var urlsInternet = [
            {id:"oferta.vodafone.es/ofertas-cliente/", site:"Performance"},
            {id:"oferta.vodafone.es/fibra50mb/", site:"Performance"},
            {id:"oferta.vodafone.es/fibra300mb/", site:"Performance"},
            {id:"oferta.vodafone.es/gratis-fibra", site:"Performance"},
            {id:"oferta.vodafone.es/one-fibra-gratis/", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-fibra-oferta-exclusiva/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-fibra-gratis/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-adsl-gratis/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-vodafoneonefibra-gratis/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-fibra50mb/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-fibra300mb/index.html", site:"Performance"},
            {id:"vodafone.es/tienda/particulares/es/productos/particulares-fibra-gratis/", site:"Performance"},
            {id:"vodafone.es/tienda/particulares/es/productos/vodafoneonefibra-gratis/", site:"Performance"},
            {id:"vodafone.es/tienda/particulares/es/productos/oferta-exclusiva/", site:"Performance"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/internet-y-fijo/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/internet-y-fijo/descubre-la-fibra-optica-de-vodafone/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/internet-y-fijo/descubre-la-fibra-optica-de-vodafone/fibra-1gbps/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/internet-y-fijo/solo-telefono-fijo/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/internet-y-fijo/promocion-mifi/", site:"WebPublica"},
            {id:"vodafone.es/c/conocenos/test-velocidad-adsl/", site:"WebPublica"},
            {id:"vodafone.es/tienda/particulares/es/internet-y-fijo/internet-movil/", site:"TOL"},
            {id:"vodafone.estufibra.com/internet", site:"Performance"},
            {id:"adslred.com/fibra", site:"Performance"},
            {id:"ofertaono.com/fibra/", site:"Performance"},
            {id:"vodafone.oferta-fibra.com/", site:"Performance"},
            {id:"comunicacion.kelisto.es/landings/vodafone/vodafone-fibra", site:"Performance"},
            {id:"comunicacion.kelisto.es/landings/vodafone/adsl", site:"Performance"},
            {id:"comunicacion.kelisto.es/landings/vodafone/fibra", site:"Performance"},
            {id:"comunicacion.kelisto.es/landings/ono/fibra", site:"Performance"},
            {id:"comunicacion.kelisto.es/landings/vodafone/internet", site:"Performance"},
            {id:"comunicacion.kelisto.es/landings/ono/ono-fibra", site:"Performance"},
            {id:"vodafone.comparatodo.es/internet", site:"Performance"},
            {id:"vodafone.comparatodo.es/", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-migraciones-fibra-directa/index.html", site:"Performance"},
            {id:"vodafoneonefibra.es/tarifa-fibra-ono-50-mb/", site:"Performance"},
            {id:"vodafoneonefibra.es/tarifa-vodafone-1-gb-simetrico-fibra-ono/", site:"Performance"},
            {id:"vodafoneonefibra.es/tarifa-fibra-ono-50-mb-tv/", site:"Performance"},
            {id:"ono.altas-internet.com/Ono_Fibra", site:"Performance"},
            {id:"vodafone.altas-internet.com/Vodafone_VodafoneFibra", site:"Performance"},
            {id:"roams.es/tarifas-fijo/", site:"Performance"},
            {id:"roams.es/vodafone/configurar-router-vodafone/", site:"Performance"},
            {id:"roams.es/vodafone/mapa-cobertura-vodafone/", site:"Performance"},
            {id:"pre.roams.es/tarifas-internet-tv/", site:"Performance"},
            {id:"roams.es/tarifas-internet/", site:"Performance"},
            {id:"roams.es/tarifas-internet-tv/", site:"Performance"},
            {id:"roams.es/vodafone/ofertas-nuevo-cliente-vodafone/", site:"Performance"},
            {id:"ono.estufibra.com/internet", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;intereses;prospecting;lead.ad;telco;2p.marzo.v1", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;dmp;retargeting;lead.ad;TOLCU57.MEDIA;2p.marzo.v2", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;dmp;retargeting;lead.ad;TOLCU57.LARGA;2p.marzo.v2", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;dmp;retargeting;lead.ad;TOLCU57.LARGA;2p.marzo.v1", site:"Performance"},
            {id:"presupuesto-tarifas-adsl-fibra.rastreator.com/resultados-comparativa", site:"Performance"},
            {id:"www.vodafone.es/static/microsites/particulares-resultado-fibra-test/index.html", site:"TOL"},
        ];
        urlsInternet.forEach(function(url, i) {
            if (~location.href.indexOf(url.id)) {
                result = { id: "Internet", site: url.site }; 
            }
        });
        //Internet igual
        var urlsInternetIgual = [
            {id:"https://ono.estufibra.com/internet", site:"Performance"},
        ];
        urlsInternetIgual.forEach(function(url, i) {
            if (~location.href == url.id) {
                result = { id: "Internet", site: url.site }; 
            }
        });

        //IOT
        var urlsIot = [
            {id:"oferta.vodafone.es/v-vodafone/", site:"Performance"},
            {id:"oferta.vodafone.es/v-home/", site:"Performance"},  
            {id:"vodafone.es/c/particulares/es/mas-con-vodafone/objetos-conectados/", site:"WebPublica"},
            {id:"vodafone.es/static/microsites/particulares-apple-watch/index.html", site:"Performance"},
        ];
        urlsIot.forEach(function(url, i) {
            if (~location.href.indexOf(url.id)) {
                result = { id: "IOT", site: url.site }; 
            }
        });

        //One
        var urlsOne = [
            {id:"oferta.vodafone.es/fibra-tv/", site:"Performance"},
            {id:"oferta.vodafone.es/fibra-tv/", site:"Performance"},
            {id:"oferta.vodafone.es/descuento-especial/?v5", site:"Performance"},
            {id:"oferta.vodafone.es/fibra-one-s/", site:"Performance"},
            {id:"oferta.vodafone.es/fibra-one-m/", site:"Performance"},
            {id:"oferta.vodafone.es/descuento-especial/?g6", site:"Performance"},
            {id:"oferta.vodafone.es/descuento-especial/?m1", site:"Performance"},
            {id:"oferta.vodafone.es/descuento-especial/?o2", site:"Performance"},
            {id:"oferta.vodafone.es/descuento-especial/?y3", site:"Performance"},
            {id:"oferta.vodafone.es/descuento-especial/?e4", site:"Performance"},
            {id:"oferta.vodafone.es/descuento-especial", site:"Performance"},
            {id:"oferta.vodafone.es/regional/", site:"Performance"},
            {id:"oferta.vodafone.es/contacto-vodafone/", site:"Performance"},
            {id:"oferta.vodafone.es/vodafone-one", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-test-velocidad/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-one-tv/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-vodafone-one/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-promo-one/index.html", site:"Performance"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/vodafone-one/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/vodafone-one/configurador-recomendador-paquete-tarifas-oferta-one/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/vodafone-one/navega-sin-limites", site:"WebPublica"},
            {id:"vodafone.es/tienda/particulares/es/one-todo-en-uno/fibra-movil-tv/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/one-todo-en-uno/fibra-movil", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/one-todo-en-uno/contratar-television/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/internet-y-fijo/tarifas-cobertura-fibra-adsl/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/one-todo-en-uno/television-con-one/?mostrarGE=true", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/movil/ya-soy-cliente/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/movil/no-soy-cliente/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/productos/hbo-con-vodafone/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/one/todo-el-futbol/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/internet-y-fijo/fibra-fijo/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/informacion/ventajas-comprar-online/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/one/internet-en-casa/?mostrarGE=true", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/one-todo-en-uno/comparador-one/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/one/configurar-oferta/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/one/cobertura-fibra", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/one/cobertura-adsl", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/one/cobertura-one-basico", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/one/black-friday/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/one/cyber-monday", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/one/cobertura/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/one-todo-en-uno/configurar-oferta/?mostrarGE=true", site:"TOL"},
            {id:"vodafone.estufibra.com/index", site:"Performance"},
            {id:"vodafone.estufibra.com/", site:"Performance"},
            {id:"adslred.com/one", site:"Performance"},
            {id:"ofertaono.com/fibra_movil/", site:"Performance"},
            {id:"ofertaono.com/", site:"Performance"},
            {id:"ofertaono.com/fibra_movil_tv/", site:"Performance"},
            {id:"ofertaono.com/fibra_movil/", site:"Performance"},
            {id:"ofertaono.com/fibra_tv/", site:"Performance"},
            {id:"oferta.vodafone.es/descuento-especial", site:"Performance"},
            {id:"vodafone-one.oferta-fibra.com/", site:"Performance"},
            {id:"tuvodafoneone.com/", site:"Performance"},
            {id:"oferta.vodafone.es/oferta50/", site:"Performance"},
            {id:"comunicacion.kelisto.es/landings/vodafone/vodafone-one", site:"Performance"},
            {id:"vodafone.comparatodo.es/internet-movil", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-terminales-test/index.html", site:"Performance"},
            {id:"vodafone.es/tienda/particulares/es/one-todo-en-uno/fibra-ono-movil/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/one-todo-en-uno/television-con-one/", site:"TOL"},
            {id:"vodafoneonefibra.es/tarifa-vodafone-one", site:"Performance"},
            {id:"vodafoneonefibra.es/", site:"Performance"},
            {id:"ono.altas-internet.com/Ono_VodafoneOne", site:"Performance"},
            {id:"vodafone.altas-internet.com/Vodafone_VodafoneOne", site:"Performance"},
            {id:"roams.es/tarifas-movil-internet/", site:"Performance"},
            {id:"pre.roams.es/tarifas-movil-internet/", site:"Performance"},
            {id:"roams.es/vodafone/beneficios-cliente-vodafone/", site:"Performance"},
            {id:"roams.es/vodafone/portabilidad-de-movistar-a-vodafone/", site:"Performance"},
            {id:"roams.es/tarifas-movil-internet-tv/", site:"Performance"},
            {id:"oferta.vodafone.es/oferta30/", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;comportamientos;prospecting;lead.ad;telecommuting;one.promocion.30.10gb.v2", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;comportamientos;prospecting;lead.ad;youngfamilies;one.promocion.30.10gb", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;comportamientos;prospecting;lead.ad;youngfamilies;one.promocion.30.10gb.v2", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;one;prospecting;lead.ad;cartera.mobilesuscribers.bono;one.ofertaprivada.30.12meses.v1.bono", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;comportamientos;prospecting;lead.ad;telecommuting;one.promocion.30.10gb", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;one;prospecting;lead.ad;cartera.mobilesuscribers.bono;one.ofertaprivada.30.12meses.v2.bono", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;one;prospecting;lead.ad;cartera.mobilesuscribers.bono;one.ofertaprivada.30.12meses.v3.bono", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;intereses;prospecting;lead.ad;telco;one.promocion.30.10gb", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;dmp;prospecting;lead.ad;TOLCU32;one.promocion.30.enero.10gb.privada", site:"Performance"},
            {id:"ono.estufibra.com/", site:"Performance"},
            {id:"www.comparar-adsl.com/frm/vodafone.html", site:"Performance"},
            {id:"ilead.itrack.it/clients/ESVodafone/c19498/index.asp", site:""},
            {id:"ilead.itrack.it/clients/ESVodafone/c19754/index.asp", site:""},
            {id:"ono.estufibra.com/index", site:"Performance"},
            {id:"www.adslred.com/", site:"Performance"},
            {id:"oferta.vodafone.es", site:"Performance"},
        ];
        urlsOne.forEach(function(url, i) {
            if (~location.href.indexOf(url.id)) {
                result = { id: "One", site: url.site }; 
            }
        });
        //OneIgual
        var urlsOneIgual = [
            {id:"https://www.adslred.com/#", site:"Performance"},
        ];
        urlsOneIgual.forEach(function(url, i) {
            if (~location.href.indexOf ==url.id) {
                result = { id: "One", site: url.site }; 
            }
        });

        //Tv
        var urlsTv = [
            {id:"vodafone.es/static/microsites/particulares-fibra-tv/index.html", site:"Performance"},
            {id:"vodafone.es/tienda/particulares/es/productos/particulares-fibra-tv/", site:"Performance"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/",  site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/futbol/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/futbol/partidos/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/netflix/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/hbo-espana/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/hbo-espana/juego-de-tronos/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/vodafone-tv-online/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/diales-vodafone-tv/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/canales-vodafone-tv/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/4K/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/filmin/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/funcionalidades/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/contenidos-television/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/contenidos-television/cine/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/contenidos-television/series/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/contenidos-television/infantil/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/contenidos-television/entretenimiento/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/contenidos-television/fear-the-walking-dead/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/pack-cine/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/contenidos-television/axn-now/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/television/contenidos-television/series/el-misterio-de-hanging-rock/", site:"WebPublica"},
            {id:"vodafone.estufibra.com/television", site:"Performance"},
            {id:"www.adslred.com/tv", site:"Performance"},
            {id:"www.vodafone.es/c/particulares/es/tienda/ofertas-y-promociones/amazon-prime/", site:"WebPublica"},
            {id:"www.ofertaono.com/tv/", site:"Performance"},
            {id:"vodafone.comparatodo.es/television", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;hbo;lead.ad;prospecting;hbo.abierta.series;hbo.marzo.v1", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;hbo;lead.ad;prospecting;hbo.abierta.series;hbo.marzo.v2", site:"Performance"},
        ];
        urlsTv.forEach(function(url, i) {
            if (~location.href.indexOf(url.id)) {
                result = { id: "Tv", site: url.site }; 
            }
        });

        //Voz
        var urlsVoz = [
            {id:"oferta.vodafone.es/estrena-smartphone/", site:"Performance"},
            {id:"oferta.vodafone.es/tarifa-red-s", site:"Performance"},
            {id:"oferta.vodafone.es/tarifa-red-m", site:"Performance"},
            {id:"oferta.vodafone.es/tarifa-red-l", site:"Performance"},
            {id:"oferta.vodafone.es/iphone/", site:"Performance"},
            {id:"oferta.vodafone.es/samsung/", site:"Performance"},
            {id:"oferta.vodafone.es/huawei/", site:"Performance"},
            {id:"oferta.vodafone.es/lg", site:"Performance"},
            {id:"oferta.vodafone.es/sony", site:"Performance"},
            {id:"oferta.vodafone.es/tarifa-mini-m", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-migraciones/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-primeraslineas/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-segundaslineas/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-mas-lineas-datos/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-mas-lineas-vacaciones/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-oferta-exclusiva/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-descuento-unico/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-descuento-unico-2/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-red-s/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-red-m/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-red-l/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-mini-m/index.html", site:"Performance"},
            {id:"vodafone.es/tienda/particulares/es/productos/particulares-migraciones/", site:"Performance"},
            {id:"vodafone.es/tienda/particulares/es/productos/particulares-segundaslineas/", site:"Performance"},
            {id:"vodafone.es/tienda/particulares/es/productos/particulares-segundaslineas/", site:"Performance"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/contrato/tarifas-contrato/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/contrato/tarifas-red/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/contrato/mas-lineas/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/contrato/bonos-de-navegacion/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/prepago-y-recargas/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/prepago-y-recargas/tarifas-de-prepago/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/prepago-y-recargas/tarifas-de-prepago/vodafone-yu/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/prepago-y-recargas/tarifas-de-prepago/vodafone-internacional/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/prepago-y-recargas/tarifas-de-prepago/vodafone-facil/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/prepago-y-recargas/recargas-y-saldo/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/prepago-y-recargas/recargas-y-saldo/participar/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/roaming-y-llamar-al-extranjero/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/roaming-y-llamar-al-extranjero/roaming-en-el-extranjero/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/roaming-y-llamar-al-extranjero/llamar-al-extranjero", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/roaming-y-llamar-al-extranjero/llamar-al-extranjero/llamadas-internacionales/", site:"WebPublica"},
            {id:"vodafone.es/c/nuevos-bonos", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/roaming-y-llamar-al-extranjero/llamar-al-extranjero/informacion-bonos", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/roaming-y-llamar-al-extranjero/llamar-al-extranjero/nueva-tarificacion/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/roaming-y-llamar-al-extranjero/llamar-al-extranjero/bono-internacional/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/roaming-y-llamar-al-extranjero/llamar-al-extranjero/consulta-tu-numero-destino/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/tourist-in-spain-vf/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/smartphones-smart/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/novedadesvodafone", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/nuevo-software-huawei/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/vodafone-pass/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/vodafone-pass/social/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/vodafone-pass/music/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/vodafone-pass/mapas/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/vodafone-pass/video/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/vodafone-pass/partners/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/vodafone-pass/chat/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/movil/lo-tenemos/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/internet-y-fijo/tarifas-internet-movil/internet-movil-contrato/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/internet-y-fijo/tarifas-internet-movil/internet-movil-contrato/mas-lineas-datos/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/internet-y-fijo/tarifas-internet-movil/internet-movil-contrato/vacaciones/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/internet-y-fijo/tarifas-internet-movil/internet-movil-prepago/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/moviles/huawei/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/moviles/sony/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/moviles/lg/", site:"WebPublica"},
            {id:"vodafone.es/c/particulares/es/productos-y-servicios/moviles/samsung/", site:"WebPublica"},
            {id:"vodafone.es/tienda/particulares/es/movil/solo-sim/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/one-todo-en-uno/lineas-adicionales/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/productos/promocion-smartphone/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/informacion/re-estrena/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/movil/renueva-movil-prepago/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/productos/descubre-iphone7/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/productos/huawei/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/productos/sony/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/productos/lg/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/productos/samsung/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/catalogo-tablets/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/productos/iphone-8/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/productos/iphone-x/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/productos/moviles-libres/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/informacion/dia-del-padre", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/informacion/dia-de-la-madre", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/one/san-valentin/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/productos/samsung-galaxy-note9/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/productos/pack-lg-k11-bts/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/productos/iphone-xs/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/productos/iphone-xr/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/productos/apple-watch/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/informacion/promocion-movil/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/informacion/super-weekend/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/productos/tarifas-red-spotify/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/informacion/promocion-huawei/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/informacion/promocion-xsell/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/catalogo-moviles/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/clientes/catalogo-moviles/contrato/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/catalogo-moviles/pasate-a-contrato/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/catalogo-fijos/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/catalogo-modems/contrato/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/catalogo-moviles/sim-datos/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/catalogo/ficha/particular/movil/tarjeta/sim_contrato", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/catalogo-tablets/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/catalogo-moviles/prepago/", site:"TOL"},
            {id:"vodafone.es/c/tienda-online/particulares/catalogo-moviles", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/clientes/catalogo/ficha/particular/movil/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/catalogo/ficha/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/clientes/catalogo/ficha/particular/movil/", site:"TOL"},
            {id:"vodafone.es/tienda/particulares/es/catalogo/ficha/", site:"TOL"},
            {id:"vodafone.estufibra.com/movil", site:"Performance"},
            {id:"adslred.com/moviles", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-landing-iphone-xs/index.html", site:"Performance"},
            {id:"ono.es/", site:"TOL"},
            {id:"vodafone.comparatodo.es/movil", site:"Performance"},
            {id:"vodafone.es/tienda/particulares/es/clientes/catalogo-moviles/", site:"TOL"},
            {id:"vodafone.es/static/microsites/particulares-pasate-contrato-yu/index.html", site:"Performance"},
            {id:"vodafone.es/static/microsites/particulares-fibra-yuser-clientes/index.html", site:"Performance"},
            {id:"vodafone.es/c/tienda-online/particulares/catalogo-movil/", site:"TOL"},
            {id:"vodafone.es/c/tienda-online/particulares/catalogo-moviles/", site:"TOL"},
            {id:"vodafoneonefibra.es/tarifa-red-l/", site:"Performance"},
            {id:"vodafoneonefibra.es/tarifa-yuser-prepago/", site:"Performance"},
            {id:"vodafoneonefibra.es/samsung-galaxy-s9-plus", site:"Performance"},
            {id:"vodafoneonefibra.es/tarifa-smart-s/", site:"Performance"},
            {id:"vodafoneonefibra.es/tarifa-vodafone-bit-movil/", site:"Performance"},
            {id:"vodafoneonefibra.es/huawei-mate-20", site:"Performance"},
            {id:"vodafoneonefibra.es/iphone-xs-max", site:"Performance"},
            {id:"vodafoneonefibra.es/tarifa-vodafone-facil-prepago/", site:"Performance"},
            {id:"ono.altas-internet.com/Ono_RedS", site:"Performance"},
            {id:"vodafone.altas-internet.com/Vodafone_MiniS", site:"Performance"},
            {id:"roams.es/vodafone/esim-vodafone/", site:"Performance"},
            {id:"roams.es/vodafone/vodafone-datos-ilimitados/", site:"Performance"},
            {id:"roams.es/vodafone/ofertas-vodafone-black-friday/", site:"Performance"},
            {id:"roams.es/tarifas-movil/", site:"Performance"},
            {id:"roams.es/vodafone/limite-consumo-vodafone/", site:"Performance"},
            {id:"roams.es/vodafone/plan-renove-vodafone/", site:"Performance"},
            {id:"roams.es/tarifas-movil-tv/", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;intereses;prospecting;lead.ad;intereses.android;voz.huaweip30.abril.v1", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;intereses;prospecting;lead.ad;intereses.android;voz.huaweip30.abril.v2", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;voz;prospecting;lead.ad;abierta;voz.huaweip30.abril.v2", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;voz;prospecting;lead.ad;voz.offline.ai.bono;samsungs10 .v1.marzo.bono", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;voz;prospecting;lead.ad;abierta;voz.huaweip30.abril.v1", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;voz;prospecting;lead.ad;abierta;voz.huaweipsmart.marzo.v1", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;voz;prospecting;lead.ad;voz.offline.bono;samsungs10 .v1.marzo.bono", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;voz;prospecting;lead.ad;voz.offline.ai.bono;samsungs10.v1.marzo.bono", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;voz;prospecting;lead.ad;abierta;voz.huaweipsmart.marzo.v2", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;intereses;prospecting;lead.ad;intereses.android;voz.huaweipsmart.marzo.v2;noemail", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;voz;prospecting;lead.ad;voz.offline.bono;samsungs10.v1.marzo.bono", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;dmp;retargeting;lead.ad;TOLCU19.CORTA;voz.huaweip30.marzo.v1", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;dmp;retargeting;lead.ad;TOLCU19.MEDIA;voz.huaweip30.marzo.v1", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;voz;prospecting;lead.ad;voz.offline.ai.bono;samsungs10 .aud.b.marzo.bono", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;voz;prospecting;lead.ad;voz.offline.bono;samsungs10.aud.a.marzo.bono", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;dmp;retargeting;lead.ad;TOLCU19.MEDIA;voz.huaweip30.marzo.v2;pro", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;voz;prospecting;lead.ad;voz.offline.ai.bono;samsungs10.aud.b.marzo.bono", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;dmp;retargeting;lead.ad;TOLCU19.CORTA;voz.huaweip30.marzo.v2", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;dmp;retargeting;lead.ad;TOLCU19.CORTA;voz.huaweipsmart.marzo.v1;noemail", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;dmp;retargeting;lead.ad;TOLCU19.CORTA;voz.huaweipsmart.marzo.v2;nomail", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;voz;prospecting;lead.ad;voz.offline.bono;samsungs10 .aud.a.marzo.bono", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;dmp;retargeting;lead.ad;TOLCU19.MEDIA;voz.huaweipsmart.marzo.v2", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;voz;prospecting;lead.ad;abierta.huawei;voz.navidad.huawei.v2", site:"Performance"},
            {id:"www.vodafone.es/ficticio/?smp=leadads:cp-20180327:sp-facebook:pl-fb;tol;dmp;retargeting;lead.ad;TOLCU19.MEDIA;voz.huaweipsmart.marzo.v1", site:"Performance"},
            {id:"www.vodafone.es/c/tienda-online/particulares/catalogo-moviles/", site:"TOL"},
            {id:"ono.estufibra.com/movil", site:"Performance"},
        ];
        urlsVoz.forEach(function(url, i) {
            if (~location.href.indexOf(url.id)) {
                result = { id: "Voz", site: url.site }; 
            }
        });
        //Voz
        var urlsVozIgual = [
        ];
        urlsVozIgual.forEach(function(url, i) {
            if (~location.href.indexOf == url.id) {
                result = { id: "Voz", site: url.site }; 
            }
        });

        return result
    }

    /*
    |---------------------------------------------------------------------------
    | Devuelve booleando que indica si se requiere cargar tienda-new.js
    |---------------------------------------------------------------------------
    */
    DFI.isNewTiendaInteface = function() {

        // Deshabilitar para ISP "vodafone" en la HOME
        if (DFI.getISP() === "vodafone" && location.pathname === "/c/particulares/es/") {
            return true;
        }

        var paths = [
            // Home
            "/c/particulares/es/",
            // Vodafone One
            "/c/particulares/es/productos-y-servicios/vodafone-one/",
            // Landing huawei
            "/huawei/",
            // Landing iphone
            "/iphone/",
            // Landing estrena-smartphone
            // "/estrena-smartphone/",
            // Landing Samsung
            "/samsung/",
            // Landing sony
            "/sony/",
            // Landing lg
            "/lg/",
            // WCS-3583 Flotante Landings Web Pública
            "/c/particulares/es/futbol/",
            "/c/particulares/es/productos-y-servicios/television/futbol/",
            "/c/particulares/es/productos-y-servicios/vodafone-one/paquete-one-light/",
            "/c/particulares/es/productos-y-servicios/vodafone-one/paquete-100-mb-m/",
            "/c/particulares/es/productos-y-servicios/vodafone-one/paquete-600-mb-s/",
            "/c/particulares/es/productos-y-servicios/vodafone-one/familia/",
            "/c/particulares/es/productos-y-servicios/vodafone-one/beneficios/",
            "/c/particulares/es/productos-y-servicios/television/",
            "/c/particulares/es/productos-y-servicios/television/netflix/",
            // "/c/particulares/es/productos-y-servicios/movil/contrato/tarifas-contrato/",
            "/c/particulares/es/productos-y-servicios/movil/vodafone-pass/",
            "/c/particulares/es/productos-y-servicios/movil/vodafone-pass/social/",
            "/c/particulares/es/productos-y-servicios/movil/vodafone-pass/music/",
            "/c/particulares/es/productos-y-servicios/movil/vodafone-pass/mapas/",
            "/c/particulares/es/productos-y-servicios/movil/vodafone-pass/video/",
            "/c/particulares/es/productos-y-servicios/internet-y-fijo/descubre-la-fibra-optica-de-vodafone/",
            // WCS-3690 Flotante - Configurador
            //
            // WCS-4025 - Flotante en Test de Velocidad
            "/c/conocenos/test-velocidad-adsl/",
            //WCS-5614 Implementación flotante
            "/c/particulares/es/productos-y-servicios/internet-y-fijo/fibra-fijo-1/",
            "/c/particulares/es/productos-y-servicios/internet-y-fijo/fibra-fijo-2/",
            "/tienda/particulares/es/internet-y-fijo/fibra-ono-fijo/",
            "/c/particulares/es/productos-y-servicios/vodafone-one/v2/",
            "/c/particulares/es/productos-y-servicios/internet-y-fijo/",
            "/c/particulares/es/productos-y-servicios/internet-y-fijo/solo-telefono-fijo/",
            "/c/particulares/es/productos-y-servicios/abc-des-wyz/",
            "/c/particulares/es/productos-y-servicios/vodafone-one/paquete-one-1/",
            "/c/particulares/es/productos-y-servicios/vodafone-one/paquete-one-2/",
            "/c/particulares/es/productos-y-servicios/vodafone-one/paquete-one-3/",
            "/c/particulares/es/productos-y-servicios/vodafone-one/paquete-one-4/",
            "/c/particulares/es/productos-y-servicios/vodafone-one/paquete-one-5/",
            "/c/particulares/es/productos-y-servicios/movil/contrato/tarifas-contrato/",
            "/c/particulares/es/productos-y-servicios/movil/contrato/tarifas-contrato/tarifa-1/",
            "/c/particulares/es/productos-y-servicios/movil/contrato/tarifas-contrato/tarifa-2/",
            "/c/particulares/es/productos-y-servicios/movil/contrato/tarifas-contrato/tarifa-3/",
            "/c/particulares/es/productos-y-servicios/movil/contrato/tarifas-contrato/tarifa-4/",
            "/c/particulares/es/productos-y-servicios/movil/contrato/tarifas-contrato/tarifa-5/",
            "/c/particulares/es/productos-y-servicios/movil/contrato/mas-lineas/",
            "/c/particulares/es/productos-y-servicios/television/paquete-tv-1/",
            "/c/particulares/es/productos-y-servicios/television/paquete-tv-2/",
            "/c/particulares/es/productos-y-servicios/television/paquete-tv-3/",
            "/c/particulares/es/productos-y-servicios/television/paquete-tv-4/",
            "/c/particulares/es/productos-y-servicios/television/paquete-tv-5/",
            "/c/particulares/es/mas-con-vodafone/objetos-conectados/vodafone-onenumber/",
            "/c/particulares/es/mas-con-vodafone/objetos-conectados/v-home/",
            // "/c/tienda-online/particulares/catalogo-moviles/",
            // "/c/particulares/es/productos-y-servicios/no-soy-cliente/",
            "/c/particulares/es/productos-y-servicios/soy-cliente/",
            "/c/particulares/es/productos-y-servicios/ya-soy-cliente/",

            // Home
            "/ca/c/particulares/es/",
            // Vodafone One
            "/ca/c/particulares/es/productos-y-servicios/vodafone-one/",
            // Landing huawei
            "/huawei/",
            // Landing iphone
            "/iphone/",
            // Landing estrena-smartphone
            // "/estrena-smartphone/",
            // Landing Samsung
            "/samsung/",
            // Landing sony
            "/sony/",
            // Landing lg
            "/lg/",
            // WCS-3583 Flotante Landings Web Pública
            "/ca/c/particulares/es/futbol/",
            "/ca/c/particulares/es/productos-y-servicios/television/futbol/",
            "/ca/c/particulares/es/productos-y-servicios/vodafone-one/paquete-one-light/",
            "/ca/c/particulares/es/productos-y-servicios/vodafone-one/paquete-100-mb-m/",
            "/ca/c/particulares/es/productos-y-servicios/vodafone-one/paquete-600-mb-s/",
            "/ca/c/particulares/es/productos-y-servicios/vodafone-one/familia/",
            "/ca/c/particulares/es/productos-y-servicios/vodafone-one/beneficios/",
            "/ca/c/particulares/es/productos-y-servicios/television/",
            "/ca/c/particulares/es/productos-y-servicios/television/netflix/",
            // "/c/particulares/es/productos-y-servicios/movil/contrato/tarifas-contrato/",
            "/ca/c/particulares/es/productos-y-servicios/movil/vodafone-pass/",
            "/ca/c/particulares/es/productos-y-servicios/movil/vodafone-pass/social/",
            "/ca/c/particulares/es/productos-y-servicios/movil/vodafone-pass/music/",
            "/ca/c/particulares/es/productos-y-servicios/movil/vodafone-pass/mapas/",
            "/ca/c/particulares/es/productos-y-servicios/movil/vodafone-pass/video/",
            "/ca/c/particulares/es/productos-y-servicios/internet-y-fijo/descubre-la-fibra-optica-de-vodafone/",
            // WCS-3690 Flotante - Configurador
            //
            // WCS-4025 - Flotante en Test de Velocidad
            "/ca/c/conocenos/test-velocidad-adsl/",
            //WCS-5614 Implementación flotante
            "/ca/c/particulares/es/productos-y-servicios/internet-y-fijo/fibra-fijo-1/",
            "/ca/c/particulares/es/productos-y-servicios/internet-y-fijo/fibra-fijo-2/",
            "/ca/tienda/particulares/es/internet-y-fijo/fibra-ono-fijo/",
            "/ca/c/particulares/es/productos-y-servicios/vodafone-one/v2/",
            "/ca/c/particulares/es/productos-y-servicios/internet-y-fijo/",
            "/ca/c/particulares/es/productos-y-servicios/internet-y-fijo/solo-telefono-fijo/",
            "/ca/c/particulares/es/productos-y-servicios/abc-des-wyz/",
            "/ca/c/particulares/es/productos-y-servicios/vodafone-one/paquete-one-1/",
            "/ca/c/particulares/es/productos-y-servicios/vodafone-one/paquete-one-2/",
            "/ca/c/particulares/es/productos-y-servicios/vodafone-one/paquete-one-3/",
            "/ca/c/particulares/es/productos-y-servicios/vodafone-one/paquete-one-4/",
            "/ca/c/particulares/es/productos-y-servicios/vodafone-one/paquete-one-5/",
            "/ca/c/particulares/es/productos-y-servicios/movil/contrato/tarifas-contrato/",
            "/ca/c/particulares/es/productos-y-servicios/movil/contrato/tarifas-contrato/tarifa-1/",
            "/ca/c/particulares/es/productos-y-servicios/movil/contrato/tarifas-contrato/tarifa-2/",
            "/ca/c/particulares/es/productos-y-servicios/movil/contrato/tarifas-contrato/tarifa-3/",
            "/ca/c/particulares/es/productos-y-servicios/movil/contrato/tarifas-contrato/tarifa-4/",
            "/ca/c/particulares/es/productos-y-servicios/movil/contrato/tarifas-contrato/tarifa-5/",
            "/ca/c/particulares/es/productos-y-servicios/movil/contrato/mas-lineas/",
            "/ca/c/particulares/es/productos-y-servicios/television/paquete-tv-1/",
            "/ca/c/particulares/es/productos-y-servicios/television/paquete-tv-2/",
            "/ca/c/particulares/es/productos-y-servicios/television/paquete-tv-3/",
            "/ca/c/particulares/es/productos-y-servicios/television/paquete-tv-4/",
            "/ca/c/particulares/es/productos-y-servicios/television/paquete-tv-5/",
            "/ca/c/particulares/es/mas-con-vodafone/objetos-conectados/vodafone-onenumber/",
            "/ca/c/particulares/es/mas-con-vodafone/objetos-conectados/v-home/",
            "/ca/c/tienda-online/particulares/catalogo-moviles/",
            // "/c/particulares/es/productos-y-servicios/no-soy-cliente/",
            "/ca/c/particulares/es/productos-y-servicios/soy-cliente/",
            "/ca/c/particulares/es/productos-y-servicios/ya-soy-cliente/",
        ];

        var pathFound = false;
        
        // Si es landing vodafone y es mobile no se muestra
        if (DFI.isOfertaLanding && DFI.isMobile()){
            return pathFound;
        }

        paths.forEach(function(pathname, i) {
            if (location.pathname === pathname) {
                pathFound = true;
            }
            // if (~location.href.indexOf('/c/tienda-online/particulares/catalogo-moviles/')) {
            //     pathFound = true;
            // }
            
        });

        if(DFI.getQueryVariable("ebq")) pathFound = false;

        //si pertenece a una de estas url
        return pathFound;

    };

    /*
    |---------------------------------------------------------------------------
    | Devuelve booleando que indica si es una de las URLs donde carga nuevo thankupage
    | //WCS-4485 nuevo thank u page (nuevo template en getTemplate / DFI.isThankUPageURL)
    |---------------------------------------------------------------------------
    */
    DFI.isThankUPageURL = function() {

        var urls = [
            "www.vodafone.es/tienda/particulares/es/productos/particulares-fibra-gratis/",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/fibra-movil-tv/",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/configurar-oferta/",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/fibra-ono-movil/",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/television-con-one/",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/contratar-television/",
            "www.vodafone.es/tienda/particulares/es/internet-y-fijo/fibra-ono-fijo/",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/lineas-adicionales/",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/comparador-one/",
            "www.vodafone.es/tienda/particulares/es/one/todo-el-futbol/",
            "www.vodafone.es/tienda/particulares/es/internet-y-fijo/fibra-fijo/",
            "www.vodafone.es/static/microsites/particulares-segundaslineas/",
            "www.vodafone.es/static/microsites/particulares-migraciones/",
            "www.vodafone.es/static/microsites/particulares-primeraslineas/",
            "www.vodafone.es/static/microsites/particulares-mas-lineas-datos/",
            "www.vodafone.es/static/microsites/particulares-mas-lineas-vacaciones/",
            "www.vodafone.es/static/microsites/particulares-mas-lineas-vacaciones-oferta/",
            "www.vodafone.es/static/microsites/particulares-ahorra-con-tu-fijo/",
            "www.vodafone.es/static/microsites/particulares-one-basico/",
            "www.vodafone.es/static/microsites/particulares-fibra-gratis/",
            "www.vodafone.es/static/microsites/particulares-adsl-gratis/",
            "www.vodafone.es/static/microsites/particulares-vodafoneonefibra-gratis/",
            "www.vodafone.es/static/microsites/particulares-fibra-oferta-exclusiva/",
            "www.vodafone.es/static/microsites/particulares-fibra-tv/",
            "www.vodafone.es/static/microsites/particulares-adsl-tv/",
            "www.vodafone.es/static/microsites/particulares-neba-tv/",
            "www.vodafone.es/static/microsites/particulares-paquete-futbol/",
            "www.vodafone.es/static/microsites/particulares-sport/",
            "www.vodafone.es/static/microsites/particulares-fibra-clientes/",
            "www.vodafone.es/static/microsites/particulares-oferta-exclusiva/",
            //url de testeo de los nuevos formularios
            "www.vodafone.es/static/microsites/prueba-c2c/index.html",
            // "www.vodafone.es/tienda/particulares/es/catalogo-moviles/",
            "www.vodafone.es/tienda/particulares/es/one/configurador/",
            //"www.vodafone.es/c/particulares/es",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/fibra-movil/",
            //petición WCS-2428
            "www.vodafone.es/tienda/particulares/es/internet-y-fijo/tarifas-cobertura-fibra-adsl/",
            "www.vodafone.es/tienda/particulares/es/informacion/ventajas-compra-online/",
            "www.vodafone.es/tienda/particulares/es/movil/renueva-movil-prepago/",
            "www.vodafone.es/tienda/particulares/es/productos/hbo-con-vodafone/",
            "www.vodafone.es/tienda/particulares/es/productos/promocion-smartphone/",
            "www.vodafone.es/tienda/particulares/es/movil/solo-sim/",
            "www.vodafone.es/tienda/particulares/es/movil/ya-soy-cliente/",
            "www.vodafone.es/tienda/particulares/es/movil/no-soy-cliente/",
            "www.vodafone.es/tienda/particulares/es/one/internet-en-casa/",
            //ticket WCS-2333
            "www.vodafone.es/static/microsites/faqs_fichero/",
            "www.vodafone.es/tienda/particulares/es/productos/mas-lineas-vacaciones/",
            //ticket WCS-3056
            "www.vodafone.es/tienda/particulares/es/informacion/ventajas-comprar-online/",
            "www.vodafone.es/tienda/particulares/es/internet-y-fijo/internet-movil/",
            //20180525
            "www.vodafone.es/tienda/particulares/es/informacion/re-estrena/",
            "www.vodafone.es/tienda/particulares/es/one/internet-en-casa/",
            //20180605
            "www.vodafone.es/c/particulares/es/tienda/vodafone-one/",
            "www.vodafone.es/c/particulares/es/tienda/vodafone-one/paquete-one-light/",
            "www.vodafone.es/c/particulares/es/tienda/vodafone-one/paquete-120-mb-m/",
            "www.vodafone.es/c/particulares/es/tienda/vodafone-one/paquete-300mb/",
            "www.vodafone.es/c/particulares/es/tienda/vodafone-one/familia/",
            "www.vodafone.es/c/particulares/es/tienda/internet-y-fijo/solo-telefono-fijo/",
            //"www.vodafone.es/c/particulares/es/productos-y-servicios/television/",
            "www.vodafone.es/c/particulares/es/futbol/",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/television/netflix/",
            "www.vodafone.es/c/particulares/es/tienda/internet-y-fijo/descubre-la-fibra-optica-de-vodafone/",
            "www.vodafone.es/c/particulares/es/productos-y-servicios/vodafone-one/configurador-recomendador-paquete-tarifas-oferta-one/",
            //"www.vodafone.es/c/particulares/es/productos-y-servicios/vodafone-one/",
            //WCS-3690 Flotante - Configurador
            "www.vodafone.es/tienda/particulares/es/one/configurador/",
            "www.vodafone.es/tienda/particulares/es/one/cobertura/",
            //WCS-3610 / 270618
            "www.vodafone.es/tienda/particulares/es/catalogo-tablets/",
            "www.vodafone.es/tienda/particulares/es/productos/moviles-libres/",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/",
            "www.vodafone.es/tienda/particulares/es/clientes/catalogo/ficha/",
            //WCS-3513 / 270618
            "www.vodafone.es/tienda/particulares/es/clientes/catalogo-moviles/",
            // WCS-3690 Flotante - Configurador
            "www.vodafone.es/tienda/particulares/es/one/configurar-oferta/",
            // WCS-4150
            "www.vodafone.es/static/microsites/test-velocidad/index.html",
            "www.vodafone.es/tienda/particulares/es/one/cobertura-one-basico/",
            "www.vodafone.es/tienda/particulares/es/one/cobertura-adsl/",
            "www.vodafone.es/tienda/particulares/es/one/cobertura-fibra/",
            // Google Home 20180709
            "www.vodafone.es/c/particulares/es/mas-con-vodafone/objetos-conectados/v-home/google-home/",
            //WCS-4615 - Landing - Test de velocidad
            "www.vodafone.es/static/microsites/particulares-test-velocidad/index.html",
            //WCS-4485
            "www.vodafone.es/tienda/particulares/es/catalogo-fijos/",
            "www.vodafone.es/tienda/particulares/es/catalogo-modems/contrato/",
            //WCS-5062 Flotante > Landing Black Friday
            "www.vodafone.es/tienda/particulares/es/one/black-friday/",
            //WCS-5236 Cyber Monday > Flotante
            "www.vodafone.es/tienda/particulares/es/one/cyber-monday/",
            "www.vodafone.es/static/microsites/particulares-gamers/index.html",   //WCS-5495
            "www.vodafone.es/static/microsites/particulares-terminales-test/index.html",
            "www.vodafone.es/tienda/particulares/es/productos/particulares-migraciones-fibra-directa/",
            "www.vodafone.es/tienda/particulares/es/productos/particulares-migracionesfibra/",
            "www.vodafone.es/static/microsites/particulares-migracionesfibra/index.html",
            "www.vodafone.es/static/microsites/particulares-migraciones-fibra-directa/index.html",
            "www.vodafone.es/static/microsites/particulares-resultado-fibra-test/index.html",
            "www.vodafone.es/tienda/particulares/es/one/haz-tu-paquete/",
            "www.vodafone.es/tienda/particulares/es/one/cobertura-fibra-regional",
            "www.vodafone.es/tienda/particulares/es/one/cobertura-adsl-regional",
            "www.vodafone.es/tienda/particulares/es/one/cobertura-one-basico-regional",
            // "www.vodafone.es/c/particulares/es/".


            "www.vodafone.es/ca/tienda/particulares/es/productos/particulares-fibra-gratis/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/fibra-movil-tv/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/configurar-oferta/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/fibra-ono-movil/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/television-con-one/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/contratar-television/",
            "www.vodafone.es/ca/tienda/particulares/es/internet-y-fijo/fibra-ono-fijo/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/lineas-adicionales/",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/comparador-one/",
            "www.vodafone.es/ca/tienda/particulares/es/one/todo-el-futbol/",
            "www.vodafone.es/ca/tienda/particulares/es/internet-y-fijo/fibra-fijo/",
            "www.vodafone.es/ca/static/microsites/particulares-segundaslineas/",
            "www.vodafone.es/ca/static/microsites/particulares-migraciones/",
            "www.vodafone.es/ca/static/microsites/particulares-primeraslineas/",
            "www.vodafone.es/ca/static/microsites/particulares-mas-lineas-datos/",
            "www.vodafone.es/ca/static/microsites/particulares-mas-lineas-vacaciones/",
            "www.vodafone.es/ca/static/microsites/particulares-mas-lineas-vacaciones-oferta/",
            "www.vodafone.es/ca/static/microsites/particulares-ahorra-con-tu-fijo/",
            "www.vodafone.es/ca/static/microsites/particulares-one-basico/",
            "www.vodafone.es/ca/static/microsites/particulares-fibra-gratis/",
            "www.vodafone.es/ca/static/microsites/particulares-adsl-gratis/",
            "www.vodafone.es/ca/static/microsites/particulares-vodafoneonefibra-gratis/",
            "www.vodafone.es/ca/static/microsites/particulares-fibra-oferta-exclusiva/",
            "www.vodafone.es/ca/static/microsites/particulares-fibra-tv/",
            "www.vodafone.es/ca/static/microsites/particulares-adsl-tv/",
            "www.vodafone.es/ca/static/microsites/particulares-neba-tv/",
            "www.vodafone.es/ca/static/microsites/particulares-paquete-futbol/",
            "www.vodafone.es/ca/static/microsites/particulares-sport/",
            "www.vodafone.es/ca/static/microsites/particulares-fibra-clientes/",
            "www.vodafone.es/ca/static/microsites/particulares-oferta-exclusiva/",
            //url de testeo de los nuevos formularios
            "www.vodafone.es/ca/static/microsites/prueba-c2c/index.html",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo-moviles/",
            "www.vodafone.es/ca/tienda/particulares/es/one/configurador/",
            //"www.vodafone.es/c/particulares/es",
            "www.vodafone.es/ca/tienda/particulares/es/one-todo-en-uno/fibra-movil/",
            //petición WCS-2428
            "www.vodafone.es/ca/tienda/particulares/es/internet-y-fijo/tarifas-cobertura-fibra-adsl/",
            "www.vodafone.es/ca/tienda/particulares/es/informacion/ventajas-compra-online/",
            "www.vodafone.es/ca/tienda/particulares/es/movil/renueva-movil-prepago/",
            "www.vodafone.es/ca/tienda/particulares/es/productos/hbo-con-vodafone/",
            "www.vodafone.es/ca/tienda/particulares/es/productos/promocion-smartphone/",
            "www.vodafone.es/ca/tienda/particulares/es/movil/solo-sim/",
            "www.vodafone.es/ca/tienda/particulares/es/movil/ya-soy-cliente/",
            "www.vodafone.es/ca/tienda/particulares/es/movil/no-soy-cliente/",
            "www.vodafone.es/ca/tienda/particulares/es/one/internet-en-casa/",
            //ticket WCS-2333
            "www.vodafone.es/ca/static/microsites/faqs_fichero/",
            "www.vodafone.es/ca/tienda/particulares/es/productos/mas-lineas-vacaciones/",
            //ticket WCS-3056
            "www.vodafone.es/ca/tienda/particulares/es/informacion/ventajas-comprar-online/",
            "www.vodafone.es/ca/tienda/particulares/es/internet-y-fijo/internet-movil/",
            //20180525
            "www.vodafone.es/ca/tienda/particulares/es/informacion/re-estrena/",
            "www.vodafone.es/ca/tienda/particulares/es/one/internet-en-casa/",
            //20180605
            "www.vodafone.es/ca/c/particulares/es/tienda/vodafone-one/",
            "www.vodafone.es/ca/c/particulares/es/tienda/vodafone-one/paquete-one-light/",
            "www.vodafone.es/ca/c/particulares/es/tienda/vodafone-one/paquete-120-mb-m/",
            "www.vodafone.es/ca/c/particulares/es/tienda/vodafone-one/paquete-300mb/",
            "www.vodafone.es/ca/c/particulares/es/tienda/vodafone-one/familia/",
            "www.vodafone.es/ca/c/particulares/es/tienda/internet-y-fijo/solo-telefono-fijo/",
            //"www.vodafone.es/c/particulares/es/productos-y-servicios/television/",
            "www.vodafone.es/ca/c/particulares/es/futbol/",
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/television/netflix/",
            "www.vodafone.es/ca/c/particulares/es/tienda/internet-y-fijo/descubre-la-fibra-optica-de-vodafone/",
            "www.vodafone.es/ca/c/particulares/es/productos-y-servicios/vodafone-one/configurador-recomendador-paquete-tarifas-oferta-one/",
            //"www.vodafone.es/c/particulares/es/productos-y-servicios/vodafone-one/",
            //WCS-3690 Flotante - Configurador
            "www.vodafone.es/ca/tienda/particulares/es/one/configurador/",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura/",
            //WCS-3610 / 270618
            "www.vodafone.es/ca/tienda/particulares/es/catalogo-tablets/",
            "www.vodafone.es/ca/tienda/particulares/es/productos/moviles-libres/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo/ficha/",
            "www.vodafone.es/ca/tienda/particulares/es/clientes/catalogo/ficha/",
            //WCS-3513 / 270618
            "www.vodafone.es/ca/tienda/particulares/es/clientes/catalogo-moviles/",
            // WCS-3690 Flotante - Configurador
            "www.vodafone.es/ca/tienda/particulares/es/one/configurar-oferta/",
            // WCS-4150
            "www.vodafone.es/ca/static/microsites/test-velocidad/index.html",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura-one-basico/",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura-adsl/",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura-fibra/",
            // Google Home 20180709
            "www.vodafone.es/ca/c/particulares/es/mas-con-vodafone/objetos-conectados/v-home/google-home/",
            //WCS-4615 - Landing - Test de velocidad
            "www.vodafone.es/ca/static/microsites/particulares-test-velocidad/index.html",
            //WCS-4485
            "www.vodafone.es/ca/tienda/particulares/es/catalogo-fijos/",
            "www.vodafone.es/ca/tienda/particulares/es/catalogo-modems/contrato/",
            //WCS-5062 Flotante > Landing Black Friday
            "www.vodafone.es/ca/tienda/particulares/es/one/black-friday/",
            //WCS-5236 Cyber Monday > Flotante
            "www.vodafone.es/ca/tienda/particulares/es/one/cyber-monday/",
            "www.vodafone.es/ca/static/microsites/particulares-gamers/index.html",   //WCS-5495
            "www.vodafone.es/ca/static/microsites/particulares-terminales-test/index.html",
            "www.vodafone.es/ca/tienda/particulares/es/productos/particulares-migraciones-fibra-directa/",
            "www.vodafone.es/ca/tienda/particulares/es/productos/particulares-migracionesfibra/",
            "www.vodafone.es/ca/static/microsites/particulares-migracionesfibra/index.html",
            "www.vodafone.es/ca/static/microsites/particulares-migraciones-fibra-directa/index.html",
            "www.vodafone.es/ca/static/microsites/particulares-resultado-fibra-test/index.html",
            "www.vodafone.es/ca/tienda/particulares/es/one/haz-tu-paquete/",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura-fibra-regional",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura-adsl-regional",
            "www.vodafone.es/ca/tienda/particulares/es/one/cobertura-one-basico-regional",
        ];

        var urlFound = false;

        urls.forEach(function(url, i) {
            if (~location.href.indexOf(url)) {
                urlFound = true;
            }
        });
        //si pertenece a una de estas url
        return urlFound

    }

    /*
    |---------------------------------------------------------------------------
    | Devuelve booleando que indica si es una de las URLs donde carga el WS checkCallWs
    | WCS-5532
    |---------------------------------------------------------------------------
    */
    DFI.chargeWebServiceURL = function() {

    var urls = [
        "oferta.vodafone.es/test/estrena-smartphone-5532ws/", 
    ];

    var urlFound = false;

    urls.forEach(function(url, i) {
        if (~location.href.indexOf(url)) {
            urlFound = true;
        }
    });

    // if(~location.href.indexOf('oferta.vodafone.es')){
    //     urlFound = true;
    // }
    //si pertenece a una de estas url
    return urlFound

}

    /*
    |---------------------------------------------------------------------------
    | Devuelve booleando que indica si es una de las URLs donde se añade la 
    | etiqueta declarativa DMP con valor "cartera"
    |---------------------------------------------------------------------------
    */

   DFI.isDMPCartera = function() {

        var urls = [
            "www.vodafone.es/tienda/particulares/es/productos/particulares-fibra-gratis/?dmp=12626262:cp-acciondmp:cn-dmp:md-CU1&c_var_11=dmp-cu1",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/particular/movil/lg/g7-plata/?subtipoContrato=1&idPrecio=997608621&c_var_11=dmp-cu2",
            "www.vodafone.es/tienda/particulares/es/productos/particulares-migraciones/?dmp=12626262:cp-acciondmp:cn-dmp:md-CU6&c_var_11=dmp-cu6",
            "www.vodafone.es/tienda/particulares/es/productos/particulares-fibra-gratis/?dmp=12626262:cp-acciondmp:cn-dmp:md-CU7&c_var_11=dmp-cu7",
            "www.vodafone.es/tienda/particulares/es/productos/particulares-segundaslineas/?dmp=12626262:cp-acciondmp:cn-dmp:md-CU8&c_var_11=dmp-cu8",
            "www.vodafone.es/static/microsites/particulares-fibra-clientes/index.html?dmp=12626262:cp-acciondmp:cn-dmp:md-CU9&c_var_11=dmp-cu9",
            "www.vodafone.es/tienda/particulares/es/productos/particulares-fibra-tv/?dmp=12626262:cp-acciondmp:cn-dmp:md-CU11b&c_var_11=dmp-cu11b",
            "www.vodafone.es/tienda/particulares/es/productos/particulares-fibra-gratis/?dmp=12626262:cp-acciondmp:cn-dmp:md-CU13&c_var_11=dmp-cu13",
            "www.vodafone.es/tienda/particulares/es/productos/oferta-exclusiva/?dmp=12626262:cp-acciondmp:cn-dmp:md-CU20&c_var_11=dmp-cu20",
            "www.vodafone.es/tienda/particulares/es/clientes/catalogo/ficha/particular/movil/samsung/galaxy-s9-plus-oro/?subtipoContrato=2&idPrecio=997641758",
            "www.vodafone.es/static/microsites/particulares-oferta-exclusiva/index.html?dmp=12626262:cp-acciondmp:cn-dmp:md-CU24&c_var_11=dmp-cu24",
            "www.vodafone.es/tienda/particulares/es/productos/mas-lineas-vacaciones/?dmp=12626262:cp-acciondmp:cn-dmp:md-CU25&c_var_11=dmp-cu25",
            "oferta.vodafone.es/v-vodafone/?dmp=12626262:cp-acciondmp:cn-dmp:md-CU33&c_var_11=dmp-cu33",
            "www.vodafone.es/tienda/particulares/es/productos/particulares-migraciones-fibra-directa/?dmp=12626262:cp-acciondmp:cn-dmp:md-CU34&c_var_11=dmp-cu34",
            "www.vodafone.es/tienda/particulares/es/productos/particulares-migracionesfibra/?dmp=12626262:cp-acciondmp:cn-dmp:md-CU35&c_var_11=dmp-cu35",
            "www.vodafone.es/static/microsites/particulares-descuento-unico/index.html?dmp=12626262:cp-acciondmp:cn-dmp:md-CU38a&c_var_11=dmp-cu38a",
            "www.vodafone.es/static/microsites/particulares-descuento-unico-2/index.html?dmp=12626262:cp-acciondmp:cn-dmp:md-CU38b&c_var_11=dmp-cu38b",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/particular/movil/lg/g7-plata/?subtipoContrato=1&idPrecio=997608621&c_evar_11=dmp-cu41",
            "www.vodafone.es/tienda/particulares/es/clientes/catalogo/ficha/particular/movil/sony/xperia-xa2/?subtipoContrato=2&idPrecio=989991472&c_evar_11=dmp-cu42",
            "www.vodafone.es/tienda/particulares/es/clientes/catalogo/ficha/particular/movil/huawei/p-smart/?subtipoContrato=2&idPrecio=989990565&c_evar_11=dmp-cu43",
        ];

        var urlFound = false;

        urls.forEach(function(url, i) {
            if (~location.href.indexOf(url)) {
                urlFound = true;
            }
        });

        try {
            var iframeVdf = window.parent.location.href;
            urls.forEach(function(url, i) {
                if (~iframeVdf.indexOf(url)) {
                    urlFound = true;
                }
            });
        } catch (error) {}

        //si pertenece a una de estas url
        return urlFound

    }

    /*
    |---------------------------------------------------------------------------
    | Preparing interface vars and config
    |---------------------------------------------------------------------------
    */
    DFI.prepareInterface = function() {
        DFI.bTiendaInterface = DFI.isTiendaInteface();
        DFI.bNewTiendaInterface = DFI.isNewTiendaInteface();
        DFI.bCompraFacilInterface = DFI.isComprafacilInteface();
        DFI.interface = DFI.getInterfaceMode();
        DFI.aInterfaces = DFI.getInterfacesToLoad();
        DFI.client = DFI.getClient();
    };

     /*
    |---------------------------------------------------------------------------
    | Llamada formulario para condicionar el gracias modal
    |---------------------------------------------------------------------------
    */

    DFI.checkCallWs = function() {
        
        var phone = document.getElementById("phone").value;
        var phone_resp = document.getElementById("phone_resp").value;
        var telefono_Nuevo = (phone) ? phone : phone_resp;
        var idTag = document.querySelector(".wg-idTag").value;

        DAL.Ajax({
            type: 'jsonp',
            url: 'https://ws.walmeric.com/clients/custom/vodafonee2e/checkCall/checkCall.php?phone='+telefono_Nuevo
        }).done(function(resp){
            if(resp.code ===  200){
                console.log("funcionando WS");
                var css = document.createElement('link');
                css.setAttribute('rel', 'stylesheet');
                css.setAttribute('href', 'https://t.womtp.com/slider/c/vodafone/e2e/assets/stylesheets/thank-u-page.css');
                document.getElementsByTagName('head')[0].appendChild(css);
                
                window.checkCall200 = true;
                template = '\
                <div class="wrapper-thank-u-page">\
                <div class="layer-wrapper layer-prepaid active">\
                <div class="layer-prepaid-block">\
                <button type="button" class="close" data-dismiss="modal">&times;</button>\
                            <div class="layer-prepaid-block__content">\
                                <div class="layer-header-green">\
                                    <p class="layer-header__title">¡Gracias!</p>\
                                </div>\
                                <p class="layer-content__text">Por favor, para conocer el estado de su pedido acceda a la app <span class="vf-bold">Mi Vodafone</span>. Para otras consultas póngase en contacto con el <span class="vf-bold">22123</span></p>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
                document.getElementById("fondo_modal").innerHTML = template;
                // Añadir declarativa
                
                // DFI.nombreaccion = "22123";
                // DRP.loadLabels(DFI.getDataLead(DFI.nombreaccion));


            }else{
                console.log("false WS");
                
            }
        })
    }

    /*
    |---------------------------------------------------------------------------
    | Devuelve array de interfaces que tenemos que cargar
    |---------------------------------------------------------------------------
    */
    DFI.getInterfacesToLoad = function() {
        var objInterfaces = [];
        //añado el interfaz si hay que cargar 
        if (DFI.interface) {
            objInterfaces.push({
                url: DFI.global.pathSupport + DFI.interface + ".js",
                type: "script"
            });
        }

        //añado la interfaz de tienda si es necesario
        if (DFI.bTiendaInterface) {
            objInterfaces.push({
                url: DFI.global.pathSupport + "tienda.js",
                type: "script"
            });
        }

        //añado la interfaz de tienda si es necesario
        if (DFI.bNewTiendaInterface) {
            objInterfaces.push({
                url: DFI.global.pathSupport + "tienda-new.js",
                type: "script"
            });
        }

        //añado la interfaz de tienda si es necesario
        if (DFI.bCompraFacilInterface) {
            objInterfaces.push({
                url: DFI.global.pathSupport + "compraFacil.js",
                type: "script"
            });
        }


        return objInterfaces;

    };

    /*
    |---------------------------------------------------------------------------
    | Set Tracking Vars
    |---------------------------------------------------------------------------
    */
    DFI.setTrackingVars = function() {
        DFI.setVisitVars();
        DFI.setConversionVars();
    };


    /*
    |---------------------------------------------------------------------------
    | Set Visit Vars
    |---------------------------------------------------------------------------
    */
    DFI.loadSizmek = function(callback) {
        var defUsercookie = new DAL.Promise();

        var url = 'https://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=gs&campaignid=';

        if (window.v_var_4 === "ono") {
            url = url + "719730";
        } else {
            url = url + "725416";
        }

        // Carga script Sizmek
        setTimeout(function() {
            DAL.Ajax({
                type: 'script',
                url: url
            }).done(function() {
                var maxTimes = 5 * 5; // 5 segundos
                var times = 0;

                var checkUsercookie = setInterval(function() {
                    times++;
                    if (window.ebCreativeState || times > maxTimes) {
                        defUsercookie.resolve(window.ebCreativeState || "");
                        clearInterval(checkUsercookie);
                    }
                }, 200);
            });
        }, 3000);

        defUsercookie.done(function(usercookie) {
            DFI.usercookie = usercookie;
            callback(usercookie);
        });

        return defUsercookie;
    };

    /*
    |---------------------------------------------------------------------------
    | loadAdformPixel
    |---------------------------------------------------------------------------
    */
    DFI.loadAdformPixel = function(callback) {
        var idLead = DELIO.FrontIntegration.getLeadId() || DFI.leadId || DFI.getLeadId() || DELIO.leadId;
        var trackingObj = DFI.getTrackingObj();
        var adfOrder = {
            orderid : "online-" + idLead,
            sv19: encodeURIComponent("Walmeric - " + location.hostname + location.pathname),
            sv20: trackingObj.cp,
            sv21: trackingObj.cn,
            sv22: window.c_var_4,
            sv23: trackingObj.cl,
            sv24: trackingObj.sp,
            sv25: trackingObj.pl,
            sv26: trackingObj.gk,
            sv27: trackingObj.ta,
            sv28: trackingObj.cr,
            sv29: trackingObj.ds,
            sv30: trackingObj.pr,
            sv31: "",
            sv32: trackingObj.kw,
            sv37: idLead,
            sv36: "Walmeric_Online"
        };
        var adfScr = document.createElement("script");
        adfScr.src = "https://track.adform.net/serving/scripts/trackpoint/";

        adfScr.onload = function(data) {
            adf.container(1034491, 'Walmeric Online Master Tag',adfOrder);
            /* let dato = adfScr.responseText;
            let dato2 = JSON.parse(adfScr.responseText); */
            var externas = {
                "EExternals": [             
                    {
                        "id": 1454,
                        "option": "OK",
                    }]
            };
            DAL.Ajax({
                type: 'jsonp',
                url: 'https://ws.walmeric.com/provision/wsclient/delioClientLeadId_put.html',
                data: {
                    /* format: "jsonp", */
                    idTag: DFI.global.idTagDelioClient,
                    leadId: idLead,
                    data: JSON.stringify(externas)
                }
            });
        };
        adfScr.onerror = function (data) { 
            /* let dato = data; */
            var externas = {
                "EExternals": [             
                    {
                        "id": 1454,
                        "option": "KO",
                    }]
            };
            DAL.Ajax({
                type: 'jsonp',
                url: 'https://ws.walmeric.com/provision/wsclient/delioClientLeadId_put.html',
                data: {
                    /* format: "jsonp", */
                    idTag: DFI.global.idTagDelioClient,
                    leadId: idLead,
                    data: JSON.stringify(externas)
                }
            });
        }; 
        document.head.appendChild(adfScr);

        callback && callback();
    };

    /*
    |---------------------------------------------------------------------------
    | Get Tracking Param
    |---------------------------------------------------------------------------
    */
    DFI.getTrackingParam = function() {
        var trackingParam = { name: "", value: "" };

        DFI.trackingParams.forEach(function(paramName){
            if (DFI.getQueryVariable(paramName)) {
                trackingParam.name = paramName;
                trackingParam.value = DFI.getQueryVariable(paramName);
            }
        });

        return trackingParam;
    };

    /*
    |---------------------------------------------------------------------------
    | getTrackingObj , devuelve un objeto con el etiquetado parseado de vodafone
    |---------------------------------------------------------------------------
    */
    DFI.getTrackingObj = function() {
        var trackingParam = DFI.getTrackingParam();

        var trackingVars = trackingParam.name.split(":");
        var trackingObj = {};

        trackingVars.forEach(function(el) {
            trackingObj[el.split("-")[0]] = el.split("-")[1];
        });

        return trackingObj;
    };

    /*
    |---------------------------------------------------------------------------
    | Set Visit Vars
    |---------------------------------------------------------------------------
    */
    DFI.setVisitVars = function() {

        var detectedSitePro = {
            site: "landing",
            pageName: window.utag_data.page_name || ''
        };

        var pathParts = location.pathname.split("/");

        // D3P
        if (window.D3P) {
            if (D3P.v_var_4) detectedSitePro.site = D3P.v_var_4;
            if (D3P.v_var_6) detectedSitePro.pageName = window.utag_data.page_name  || '';

        // Static
        } else if (location.hostname === "www.vodafone.es" && pathParts[1] === "static") {
            detectedSitePro.site = "static";
            detectedSitePro.pageName = window.utag_data.page_name || '';

        // Tienda Cobertura
        } else if (location.hostname === "www.vodafone.es" && (location.pathname == "/tienda/particulares/es/one/cobertura/" || location.pathname == "/tienda/particulares/es/one/cobertura-fibra/" )) {
            detectedSitePro.site = "tienda_cobertura";
        
        // Tienda
        } else if (location.hostname === "www.vodafone.es" && pathParts[1] === "tienda") {
            detectedSitePro.site = "tienda";
        
        // Web Pública
        } else if (location.hostname === "www.vodafone.es" && pathParts[4] === "productos-y-servicios") {
            detectedSitePro.site = "web_publica";
        
        // Landing ju
        // exclusivo para la lp de descuento especial, devuelve la landing y el isp y la variante mostrada en la variable
        } else if (location.hostname === "oferta.vodafone.es" && ~location.pathname.indexOf("descuento-especial") && window.DELIO.dinamicLabels && sessionStorage.wm_isp) {
            //si existe el objeto donde se graban las variables de la lp dinamica
            detectedSitePro.site = "oferta";
        // Landings oferta.vodafone.es
        } else if (location.hostname === "oferta.vodafone.es"){
            detectedSitePro.site = "oferta";
            // detectedSitePro.pageName = pathParts[1];
        
        // smartphonesvodafone
        } else if (location.hostname === "smartphonesvodafone.com") {
            detectedSitePro.site = "smartphonesvodafone";

        // shop.v.vodafone.com
        } else if (location.hostname === "shop.v.vodafone.com") {
            detectedSitePro.site = "eshop";
        }



        // Visit v_vars >= 10
        window.womtp = window.womtp || {};
        window.womtp.v_vars = window.womtp.v_vars || [];

        //aaray de lp que tienen que tener la v-var_0
        var aLPCartera = [
            "/tv-adsl/",
            "/tv-fibra/",
            "/tv-fibra-one/",
        ];

        // Cartera
        if (location.hostname === "oferta.vodafone.es" && ~aLPCartera.indexOf(location.pathname)) {
            window.v_var_0 = "cartera";
        }

        // Product
        womtp.v_vars[1] = window.v_var_1 = (window.D3P && D3P.v_var_1) || window.v_var_1;

        // Site
        womtp.v_vars[4] = window.v_var_4 = detectedSitePro.site;

        // TID
        womtp.v_vars[5] = DFI.getCookie("tid_walmeric");

        // Page Name 
        womtp.v_vars[6] = window.v_var_6 = detectedSitePro.pageName;

        // Variables Adobe
        if (window.visitor) {
            // MCID
            womtp.v_vars[8] = visitor.getMarketingCloudVisitorID && visitor.getMarketingCloudVisitorID() || "";
            // AVID
            womtp.v_vars[9] = visitor.getAnalyticsVisitorID && visitor.getAnalyticsVisitorID() || "";
        }

        // URL
        womtp.v_vars[10] = location.href.split("?")[0];

        // Device
        try {
            womtp.v_vars[15] = DFI.getDevice();
        } catch (error) {
            womtp.v_vars[15] = "unknow"
        }

        if(womtp.v_vars[6] == undefined || window.v_var_6 == undefined){
            setTimeout(function(){
                womtp.v_vars[6] = window.v_var_6 = window.utag_data.page_name;
            },4000);
        }
        

    };

    /*
    |---------------------------------------------------------------------------
    | Set Conversion Vars
    |---------------------------------------------------------------------------
    */
    DFI.setConversionVars = function() {

        var detectedSitePro = {
            site: "landing",
            pageName: window.utag_data.page_name || ''
        };

        var pathParts = location.pathname.split("/");

        // D3P
        if (window.D3P) {
            if (D3P.v_var_4) detectedSitePro.site = D3P.v_var_4;
            if (D3P.v_var_6) detectedSitePro.pageName = window.utag_data.page_name || '';

        // Static
        } else if (location.hostname === "www.vodafone.es" && pathParts[1] === "static") {
            detectedSitePro.site = "static";
            detectedSitePro.pageName = window.utag_data.page_name || '';

        // Tienda Cobertura
        } else if (location.hostname === "www.vodafone.es" && (location.pathname == "/tienda/particulares/es/one/cobertura/" || location.pathname == "/tienda/particulares/es/one/cobertura-fibra/" )) {
            detectedSitePro.site = "tienda_cobertura";
        
        // Tienda
        } else if (location.hostname === "www.vodafone.es" && pathParts[1] === "tienda") {
            detectedSitePro.site = "tienda";
        
        // Web Pública
        } else if (location.hostname === "www.vodafone.es" && pathParts[4] === "productos-y-servicios") {
            detectedSitePro.site = "web_publica";
        
        // Landing ju
        // exclusivo para la lp de descuento especial, devuelve la landing y el isp y la variante mostrada en la variable
        } else if (location.hostname === "oferta.vodafone.es" && ~location.pathname.indexOf("descuento-especial") && window.DELIO.dinamicLabels && sessionStorage.wm_isp) {
            //si existe el objeto donde se graban las variables de la lp dinamica
            detectedSitePro.site = "oferta";
        // Landings oferta.vodafone.es
        } else if (location.hostname === "oferta.vodafone.es"){
            detectedSitePro.site = "oferta";
        
        // smartphonesvodafone
        } else if (location.hostname === "smartphonesvodafone.com") {
            detectedSitePro.site = "smartphonesvodafone";

        // shop.v.vodafone.com
        } else if (location.hostname === "shop.v.vodafone.com") {
            detectedSitePro.site = "eshop";
        }


        // Visit c_vars >= 10
        window.womtp = window.womtp || {};
        window.womtp.c_vars = window.womtp.c_vars || [];

        // Product
        womtp.c_vars[1] = window.c_var_1 = (window.D3P && D3P.c_var_1) || window.c_var_1 || window.v_var_1;

        // Site
        womtp.c_vars[4] = window.c_var_4 = detectedSitePro.site;

        // Page Name / Landing
        womtp.c_vars[6] = window.c_var_6 = detectedSitePro.pageName;

        // URL
        window.womtp.c_vars[10] = window.location.href.split("?")[0];

        if(womtp.c_vars[6] == undefined || window.c_var_6 == undefined){
            womtp.c_vars[6] = window.c_var_6 = detectedSitePro.pageName;
        }
    };

    /*
    |---------------------------------------------------------------------------
    | Detected Site
    |---------------------------------------------------------------------------
    */
    // DFI.detectedSite = (function() {

    //     var detectedSite = {
    //         site: "landing",
    //         pageName: window.utag_data.page_name
    //     };

    //     var pathParts = location.pathname.split("/");

    //     // D3P
    //     if (window.D3P) {
    //         if (D3P.v_var_4) detectedSite.site = D3P.v_var_4;
    //         if (D3P.v_var_6) detectedSite.pageName = D3P.v_var_6;

    //     // Static
    //     } else if (location.hostname === "www.vodafone.es" && pathParts[1] === "static") {
    //         detectedSite.site = "static";
    //         detectedSite.pageName = pathParts[3];

    //     // Tienda Cobertura
    //     } else if (location.hostname === "www.vodafone.es" && (location.pathname == "/tienda/particulares/es/one/cobertura/" || location.pathname == "/tienda/particulares/es/one/cobertura-fibra/" )) {
    //         detectedSite.site = "tienda_cobertura";
        
    //     // Tienda
    //     } else if (location.hostname === "www.vodafone.es" && pathParts[1] === "tienda") {
    //         detectedSite.site = "tienda";
        
    //     // Web Pública
    //     } else if (location.hostname === "www.vodafone.es" && pathParts[4] === "productos-y-servicios") {
    //         detectedSite.site = "web_publica";
        
    //     // Landing ju
    //     // exclusivo para la lp de descuento especial, devuelve la landing y el isp y la variante mostrada en la variable
    //     } else if (location.hostname === "oferta.vodafone.es" && ~location.pathname.indexOf("descuento-especial") && window.DELIO.dinamicLabels && sessionStorage.wm_isp) {
    //         //si existe el objeto donde se graban las variables de la lp dinamica
    //         detectedSite.site = "oferta";
    //         // detectedSite.pageName = pathParts[1] + " " + sessionStorage.wm_isp + "/" + window.DELIO.dinamicLabels.varianteMostrada;
    //     // Landings oferta.vodafone.es
    //     } else if (location.hostname === "oferta.vodafone.es"){
    //         detectedSite.site = "oferta";
    //         // detectedSite.pageName = pathParts[1];
        
    //     // smartphonesvodafone
    //     } else if (location.hostname === "smartphonesvodafone.com") {
    //         detectedSite.site = "smartphonesvodafone";

    //     // shop.v.vodafone.com
    //     } else if (location.hostname === "shop.v.vodafone.com") {
    //         detectedSite.site = "eshop";
    //         // detectedSite.pageName = pathParts[2];
        
    //     } else if (window.v_var_6 || window.v_var_4) {
    //         if (window.v_var_4) detectedSite.site = window.v_var_4;
    //         if (window.v_var_6) detectedSite.pageName = window.v_var_6;
    //     }

    //     // setTimeout(function(){
    //         detectedSite.pageName = window.utag_data.page_name
    //         return detectedSite;
    //     // },3000);


    // })();

    /*
    |---------------------------------------------------------------------------
    | Set Conversion Vars
    |---------------------------------------------------------------------------
    */
    DFI.getDivisaderoIds = function() {

        console.time("TID");
        console.time("MCVID");
        console.time("AVID");

        var triesLimit = 10; // 5 segundos

        var def_v_var_5 = new DAL.Promise(),
            def_v_var_8 = new DAL.Promise(),
            def_v_var_9 = new DAL.Promise();

        DAL.Promise.all([
            def_v_var_5,
            def_v_var_8,
            def_v_var_9,
        ]).done(function() {

            sessionStorage.wm_divisaderoSend = true;
            DFI.updateVisit(
                [
                    { id: 5, value: window.v_var_5 },
                    { id: 8, value: window.v_var_8 },
                    { id: 9, value: window.v_var_9 }
                ], true);
        });

        def_v_var_5.done(function() { console.timeEnd("TID"); });
        def_v_var_8.done(function() { console.timeEnd("MCVID"); });
        def_v_var_9.done(function() { console.timeEnd("AVID"); });

        // Divisadero TID
        var try_v_var_5 = 0;

        var interval_v_var_5 = setInterval(function() {
            ++try_v_var_5;

            if (DFI.getCookie("tid_walmeric")) {
                window.v_var_5 = DFI.getCookie("tid_walmeric");
                def_v_var_5.resolve();
                clearInterval(interval_v_var_5);
            }

            if (try_v_var_5 >= triesLimit) {
                def_v_var_5.resolve();
                clearInterval(interval_v_var_5);
            }
        }, 500);


        // Divisadero MarketingCloudVisitorID
        var try_v_var_8 = 0;

        var interval_v_var_8 = setInterval(function() {
            ++try_v_var_8;

            if (window.visitor && window.visitor.getMarketingCloudVisitorID()) {
                window.v_var_8 = window.visitor.getMarketingCloudVisitorID();
                def_v_var_8.resolve();
                clearInterval(interval_v_var_8);
            }

            if (try_v_var_8 >= triesLimit) {
                def_v_var_8.resolve();
                clearInterval(interval_v_var_8);
            }
        }, 500);


        // Divisadero AnalyticsVisitorID
        var try_v_var_9 = 0;

        var interval_v_var_9 = setInterval(function() {
            ++try_v_var_9;

            if (window.visitor && window.visitor.getAnalyticsVisitorID()) {
                window.v_var_9 = window.visitor.getAnalyticsVisitorID();
                def_v_var_9.resolve();
                clearInterval(interval_v_var_9);
            }

            if (try_v_var_9 >= triesLimit) {
                def_v_var_9.resolve();
                clearInterval(interval_v_var_9);
            }
        }, 500);


    };


    /*
    |---------------------------------------------------------------------------
    | Schedule Valid
    |---------------------------------------------------------------------------
    | @return {boolean}   Horario válido   true | false
    */
    DFI.scheduleValid = function() {
        if (DFI.getQueryVariable("walmericTest") === "scheduleValid") {
            return true;
        }

        var now = new Date();
        var day = now.getDay();
        var hour = now.getHours();
        var dateDay = now.getDate();
        var month = now.getMonth();

        if ((day >= 1 && day <= 6) && (hour >= 9 && hour <= 21)) {
            return true;
        } else if ((day === 0) && (hour >= 9 && hour <= 21)) {
            return true;
        }

        return false;
    };


    /*
    |---------------------------------------------------------------------------
    | Tienda Schedule Valid
    |---------------------------------------------------------------------------
    | @return {boolean}   Horario válido   true | false
    */
    DFI.tiendaScheduleValid = function() {

        if (DFI.getQueryVariable("walmericTest") === "scheduleValid") {
            return true;
        }

        if (DFI.interface === "cobertura") {
            return DFI.coberturaScheduleValid();
        }

        var now = new Date();
        var day = now.getDay();
        var hour = now.getHours();
        var dateDay = now.getDate();
        var month = now.getMonth();

        //lunes-viernes
        if ((day >= 1 && day <= 5) && (hour >= 9 && hour <= 21)) {
            return true;
        }

        return false;
    };
    /*
    |---------------------------------------------------------------------------
    | Cargar un script en la pagina.
    |---------------------------------------------------------------------------
    */
    DFI.loadScript = function(url, fn, docScope, fnErr) {
        var doc = docScope || document;
        var head = doc.head || doc.getElementsByTagName("head")[0];
        var script = doc.createElement("script");
        script.async = true;
        script.src = url;
        script.type = "text/javascript";

        if (fn)
            script.addEventListener('load', fn);

        if (fnErr)
            script.onerror = fnErr;

        if (head)
            head.appendChild(script);
    };

    /*
    |---------------------------------------------------------------------------
    | Cargar un script en la pagina.
    |---------------------------------------------------------------------------
    */
    DFI.loadStyle = function(url, docScope) {
        var doc = docScope || document;
        var head  = doc.head || doc.getElementsByTagName("head")[0];
        var link  = doc.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        link.media = 'all';
        head.appendChild(link);
    };
    /*
    |---------------------------------------------------------------------------
    | Carga de multiples archivos a través de DAL , retorna un array de promesas
    | @obj = [{url  : "randomUrl" , type : "script"} , {url  : "randomStyleUrl" , type : "style"} ]
    |---------------------------------------------------------------------------
    */
    DFI.DALMultiLoad = function(obj) {
        var promises = [];
        //si existe DAL y hay
        if (window.DAL && obj) {

            obj.forEach(function(elem, i) {
                //si el elemento tiene url y el tipo conincide con script o style
                if (elem.url && elem.type && (elem.type === "script" || elem.type === "style")) {
                    //añadimos las promesa al array
                    promises.push(
                        DAL.Ajax({
                            type: elem.type,
                            url: elem.url
                        })
                    )
                }
            });
        }

        return promises;

    }

    /*
    |---------------------------------------------------------------------------
    | Devuelve el array de promesas de los scripts de tracking que tenemos que cargar
    |---------------------------------------------------------------------------
    */
    DFI.adformLoader = function() {
        var counter = 0;
        var interval = setInterval(function() {
            if (window.Adform) {
                counter++;
                clearInterval(interval);
                DAL.Ajax({
                    type: "script",
                    url: "https://track.adform.net/Serving/Cookie/?adfaction=getjs;adfcookname=uid"
                }).done(function() {
                    //callback para la carga
                    window.adForm_ready && window.adForm_ready();
                })
            }
            if (counter > 10) {
                clearInterval(interval);
            }
        }, 500)
    }

    /*
    |---------------------------------------------------------------------------
    | Detectar cuando el Dom este cargado.
    |---------------------------------------------------------------------------
    */
    DFI.domReady = function(fn) {
        if (document.readyState === 'loaded' || document.readyState === 'complete' || document.readyState === 'interactive') {
            fn();
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            document.attachEvent('onreadystatechange', function() {
                if (document.readyState === 'loaded' || document.readyState === 'complete')
                    fn();
            });
        }
    };


    /*
    |---------------------------------------------------------------------------
    | Obtener el valor de un parametro en la URL.
    |---------------------------------------------------------------------------
    */
    DFI.getQueryVariable = function(variable, url) {
        var href = url || window.location.search;
        var i, pair;
        var query = href.split("?")[1];
        var vars = query ? query.split("&") : [];

        for (i = 0; i < vars.length; i++) {

            pair = vars[i].split("=");

            if (pair[0] == variable && pair[1] !== "")
                return pair[1];
        }

        return false;
    };



    /*
    |---------------------------------------------------------------------------
    | Set browser cookie.
    |---------------------------------------------------------------------------
    */
    DFI.setCookie = function(c_name, value, exmin, path, domain, secure) {
        var dom;
        if (typeof domain === "undefined")
            dom = "." + /[\w\-]+\.[\w]+$/gi.exec(window.location.hostname)[0];
        else
            dom = domain;
        var exdate = new Date();
        exdate.setTime(exdate.getTime() + exmin * 60000);
        var c_value = value +
            (!exmin ? "" : "; expires=" + exdate.toUTCString()) +
            (!path ? "" : "; path=" + path) +
            (!dom ? "" : "; domain=" + dom) +
            (!secure ? "" : "; secure=" + secure);

        document.cookie = c_name + "=" + c_value;
    };


    /*
    |---------------------------------------------------------------------------
    | Get browser cookie. 
    |---------------------------------------------------------------------------
    */
    DFI.getCookie = function(c_name) {
        var i, x, y, ARRcookies = document.cookie.split(";");
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x === c_name)
                return decodeURIComponent(y);
        }
        return false;
    };

    /*
    |---------------------------------------------------------------------------
    | Delete browser cookie. 
    |---------------------------------------------------------------------------
    */
    DFI.deleteCookie = function(c_name, domain) {
        var dom;
        if (typeof domain === "undefined")
            dom = "." + /[\w\-]+\.[\w]+$/gi.exec(window.location.hostname)[0];
        else
            dom = domain;
        document.cookie = c_name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;' + (dom ? "; domain=" + dom : "");
    };


    /*
    |---------------------------------------------------------------------------
    | Obtener LeadId
    |---------------------------------------------------------------------------
    */
    DFI.loadConversion = function(idlead, fn) {
        idlead = idlead || DFI.leadId || DFI.getLeadId();

        DAL.Ajax({
            type: "script",
            url: DFI.global.tagConversion[DFI.client] + idlead
        });

        if (fn) {
            fn();
        }
    };


    /*
    |---------------------------------------------------------------------------
    | Conversion para cbbertura
    |---------------------------------------------------------------------------
    */
    DFI.loadConversionConbertura = function(idlead, fn) {
        idlead = idlead || DFI.leadId || DFI.getLeadId();

        DAL.Ajax({
            type: "script",
            url: DFI.global.tagConversion + idlead
        });

        if (fn) {
            fn();
        }
    };


    /*
    |---------------------------------------------------------------------------
    | Obtener URL actual
    |---------------------------------------------------------------------------
    */
    DFI.getUrl = function(encode) {
        //var url = location.protocol + "//" + location.hostname + location.pathname;
        var url = window.location.href;
        if (encode) {
            url = encodeURIComponent(url);
        }
        return url;
    };

    /*
    |---------------------------------------------------------------------------
    | Obtener URL actual
    |---------------------------------------------------------------------------
    */
    DFI.isMobile = function() {
        var check = false;
        (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };

    /*
    |---------------------------------------------------------------------------
    | Obtener URL actual
    |---------------------------------------------------------------------------
    */
    DFI.isIOS = function() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    };


    /*
    |---------------------------------------------------------------------------
    | Obtener LeadId
    |---------------------------------------------------------------------------
    */
    DFI.getLeadId = function(winScope) {
        winScope = winScope || window;

        if (DFI.leadId) {
            return DFI.leadId;
        }

        if (DELIO.leadId) {
            return DFI.leadId;
        }

        if (winScope.Piwik) {
            return winScope.Piwik.getAsyncTracker().getVisitorId();
        }

        return "";
    };

    /*
    |---------------------------------------------------------------------------
    | Actualiza las etiquetas de visita
    | data = { id: 11, value: "boton cliente"}
    |---------------------------------------------------------------------------
    */
    DFI.updateVisit = function(data) {
        if (!data || !data.id || !data.value) {
            return false;
        }

        var v_vars = [];
        v_vars.push(data);

        DAL.Ajax({
            type: 'jsonp',
            url: 'https://ws.walmeric.com/provision/visitsLabel/updateVisitLabelByVisitorId.html',
            data: {
                format: "jsonp",
                idTag: DFI.global.idTagDelioClient,
                idVisitor: DFI.getLeadId(),
                data: JSON.stringify(v_vars)
            }
        });
    }

    /*
    |---------------------------------------------------------------------------
    | runInactivityExit
    |---------------------------------------------------------------------------
    */
    function runInactivityExit() {

        //si alguna norma se cumple para el loop
        var validURL = isValidInactivityURL();
        var correctTemplates = getCorrectInactivityTemplate();
        var correctInactivityTemplate = correctTemplates.inactivity;
        var correctExitTemplate = correctTemplates.exit;
        if (validURL) {

            var attemps = 0;
            var intervalIsDmv = setInterval(function() {

                //si esta cargado lo necesario para la modal
                if (window.DAL && window.DMV) {

                    //rompo el intervalo si ya se ha lanzalo la funcionalidad
                    clearInterval(intervalIsDmv);
                    //arranco la modal de inactividad
                    DFI.runInactivityModal(correctInactivityTemplate, DFI.global.tagDelioClient);
                    //arranco el on exit 
                    //DFI.runOnExit(correctExitTemplate);
                }

                //si  esta en horario y no tiene cargado DAL Y DMV los cargo
                if (attemps === 10 && !window.DMV) {
                    //carga DAL
                    //DFI.loadScript( DFI.global.dal, function(){});
                    //carga DMV
                    DFI.loadScript(DFI.global.dmv, function() {});

                }

                //rompo el intervalo sin no carga DAL en 10secs
                if (attemps >= 20) {
                    clearInterval(intervalIsDmv);
                }

                attemps++;

            }, 500);

        }
    }

    /*
    |---------------------------------------------------------------------------
    | isValidInactivityURL
    |---------------------------------------------------------------------------
    */
    function isValidInactivityURL() {
        //devuelve el action correcto si sigue el patron  "*****action=checkout" sino devuelve ""
        var action = (location.search) ? (location.search.split("action=")[1]) ? location.search.split("action=")[1].split("&")[0] : "" : "";
        //recorremos todas las normas
        return DFI.incativityExitRules.some(function(rule, index, array) {
            //si tiene variable y es del tipo del objeto
            if (rule.variable && DFI.getQueryVariable(rule.variable)) {
                //si el pathname es el mismo que el del objeto
                if (~location.pathname.indexOf(rule.pathname)) {

                    return true;

                }
                //si tiene  actions  y la tiene una de estas
            } else if (rule.action && ~rule.action.indexOf(action)) {
                //si el pathname es el mismo que el del objeto
                if (~location.pathname.indexOf(rule.pathname)) {

                    return true;

                }
                //si no tiene actions ni variables miro solo el pathname
            } else if (~location.pathname.indexOf(rule.pathname) && ~location.hostname.indexOf(rule.hostname) && !rule.variable && !rule.action) {

                return true;

            } else if (~location.pathname.indexOf(rule.pathname) && !rule.variable && !rule.action) {

                return true;

            }
            return false;
        });
    }

    /*
    |---------------------------------------------------------------------------
    | getCorrectInactivityTemplate
    |---------------------------------------------------------------------------
    */
    function getCorrectInactivityTemplate() {

        var templates = { inactivity: "inactivity", exit: "exit" };
        var urls = [
            "/v-vodafone/",
            "/ES/V-Auto",
            "/ES/V-Sim",
            "/ES/V-Pet",
            "/ES/V-Camera",
            "/ES/V-Bag",
            "/ES/checkout/Basket",
            "shop.v.vodafone.com/ES/"
        ];

        var blacklist = [];

        urls.forEach(function(url, i) {
            if (~location.href.indexOf(url)) {
                templates = { inactivity: "lp_inactivity", exit: "lp_exit" }
            }
        });

        blacklist.forEach(function(url, i) {
            if (~location.href.indexOf(url)) {
                templates = { inactivity: "inactivity", exit: "exit" };
            }
        });

        return templates;

    }


    /*
    |---------------------------------------------------------------------------
    | runInactivityModal
    |---------------------------------------------------------------------------
    */

    DFI.runInactivityModal = function(template, tagDelio, secs) {

        var correctSecs = secs || 30;
        DAL.Ajax({
            type: "style",
            url: DFI.global.cssDmvFix
        }).done(function() {

            DFI.startInactivityModal(template);
            inactivity();
            DCL.set.forms();
            DFI.addField_url();
            
        });
        /*interval that listen if the user it's inactive*/
        function inactivity() {

            var idleTime = 0;
            var warningFlag = 0;
            setInterval(function checkIdle() {
                idleTime += 1;
                if (idleTime > correctSecs && warningFlag === 0 && !sessionStorage.wm_chat) {

                    DFI.showInactivityModal(template);
                    warningFlag = 1;
                    
                    //cargamos el idAdform en los modales de inactividad también
                    addAdformInactivity();
                }

                window.onload = function() {
                    resetTimer();
                };

                window.addEventListener("mousemove", resetTimer);

                window.onkeypress = function() {
                    resetTimer();
                };
                $('body').bind('touchmove', function() {
                    resetTimer();
                });

                $('body').bind('touchstart', function() {
                    resetTimer();
                });

            }, 1000);

            function resetTimer() {
                idleTime = 0;
            }
        }
    };

    /*
    |---------------------------------------------------------------------------
    | startInactivityModal
    |---------------------------------------------------------------------------
    */
    DFI.startInactivityModal = function(template) {

        DFI.inactivityTemplate = DFI.getInactivityTemplate(template);
        window.InactivityModal = new DMV(DFI.inactivityTemplate);
        //le añado marcadores de abierto/ cerrado para evitar reabrirlo
        InactivityModal.on("open", function() { DFI.inactivityOpen = true; });
        InactivityModal.on("close", function() { DFI.inactivityOpen = false; });

        //cambiamos la imagen del boton
        InactivityModal.els.close.src = "https://t.womtp.com/slider/c/vodafone/e2e/assets/img/aspa.png";
        if (!DFI.isMobile() && window.location.href.indexOf("descuento-especial")){
            InactivityModal.els.close.src = "https://oferta.vodafone.es/img/close_blanco.png";
        }else if(DFI.isMobile() && window.location.href.indexOf("descuento-especial")){
            InactivityModal.els.close.src = "https://oferta.vodafone.es/img/close_negro.png";
        }


    };

    /*
    |---------------------------------------------------------------------------
    | showInactivityModal
    |---------------------------------------------------------------------------
    */
    DFI.showInactivityModal = function(template) {

        if (!DFI.inactivityOpen && template) {
            InactivityModal.setContent(DFI.getInactivityTemplate(template));
            //activateColorbox();
            //seteamos el formilario
            DCL.set.forms();
            DFI.addField_url();
        }
        //solo se abre si esta cerrado o envian template de gracias para modificar el actual
        if (!DFI.inactivityOpen || (template && template === "gracias_inactivity")) {
            InactivityModal.setContent(DFI.getInactivityTemplate(template));
            //activateColorbox();
            DCL.set.forms();
            DFI.addField_url();
            InactivityModal.open();

        }

    };

    /*
    |---------------------------------------------------------------------------
    | Navigator is IE?
    |---------------------------------------------------------------------------
    */
    DFI.isIE = function() {
        var isIE = false;
        var rv = -1;
        if (navigator.appName == 'Microsoft Internet Explorer' || navigator.appName == 'Netscape') {
            var ua = navigator.userAgent;
            if (~ua.indexOf('MSIE')) {
                var re = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
                isIE = true;
            }else if(~ua.indexOf('Trident')) {
                var re = new RegExp("rv:([0-9]{1,}[.0-9]{0,})");
                isIE = true;
            }else if(~ua.indexOf('Edge')) {
                var re = new RegExp("Edge/([0-9]{1,}[.0-9]{0,})");
                isIE = true;
            }
            if (re)
                if (re.exec(ua) != null)
                    rv = parseFloat(RegExp.$1);
        }
        console.log("IE: " + rv)
        return isIE;
    };

    /*
    |---------------------------------------------------------------------------
    | ¡¡¡¡DESACTIVADO!!!!
    | is correct chat url
    |---------------------------------------------------------------------------
    */
    DFI.checkChatUrl = function() {

        var urlFound = false;

        var urls = [
            // Vodafone
            //"www.vodafone.es/particulares/es/",
            //"www.vodafone.es/tienda/particulares/es/catalogo-moviles/",
            //"www.vodafone.es/tienda/particulares/es/catalogo-moviles/?inactivityMode=true",
            //"www.vodafone.es/tienda/particulares/es/catalogo/",
            //"www.vodafone.es/tienda/particulares/es/one/configurador/",
            "www.vodafone.es/tienda/proceso-compra-tu-pedido/",
            "www.vodafone.es/tienda/particulares/es/clientes/catalogo/",
            "www.vodafone.es/tienda/particulares/es/catalogo-moviles",
            // "www.vodafone.es/tienda/particulares/es/clientes/catalogo-moviles/",
            "www.vodafone.es/tienda/particulares/es/tarifa/complementa-tu-compra",
            //"www.vodafone.es/tienda/particulares/es/one-todo-en-uno/configurar-oferta/",
            "www.vodafone.es/tienda/particulares/es/one-todo-en-uno/fibra-ono-movil/",
            //"www.vodafone.es/tienda/particulares/es/one/cobertura/",
            "www.vodafone.es/tienda/proceso-compra-tu-pedido/es/clientes/",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/particular/movil/tarjeta/sim_contrato/",
            "www.vodafone.es/tienda/particulares/es/clientes/tarifa/complementa-tu-compra/",
            //"www.vodafone.es/tienda/particulares/es/movil/no-soy-cliente/",
            "www.vodafone.es/tienda/particulares/es/internet-y-fijo/tarifas-cobertura-fibra-adsl/?mostrarGE=true",
            //"www.vodafone.es/tienda/particulares/es/one-todo-en-uno/contratar-television/",
            //"www.vodafone.es/tienda/particulares/es/one-todo-en-uno/lineas-adicionales/",
            //"www.vodafone.es/tienda/particulares/es/one-todo-en-uno/television-con-one/",
            //"www.vodafone.es/tienda/particulares/es/movil/solo-sim/",
            /*"www.vodafone.es/tienda/particulares/es/one-todo-en-uno/fibra-movil/",*/
            //"www.vodafone.es/tienda/particulares/es/internet-y-fijo/fibra-fijo/",
            /*"www.ono.es/tienda/comprueba-tu-cobertura/",
            "www.ono.es/tienda/resumen-compra/",
            "www.ono.es/tienda/datos-personales/",
            "www.ono.es/tienda/mensaje/",*/
            //only for test!!!
            //"oferta.vodafone.es/vodafone-one22052017/",
            //"www.vodafone.es/particulares/es/login-ds/",

            // Yu
            /*"yu.vodafone.es",*/
        ];

        var blacklist = [
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/particular/movil/apple_iphone/x_gris_espacial_64gb/?subtipoContrato=1&idPrecio=924923461",
            "login-ds",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/prepago/movil/tarjeta/sim_superyuser/?subtipoContrato=4&idPrecio=844162454",
            //añadido esto a blacklist en el ticket WCS-2134
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/prepago/movil/tarjeta/sim_yuser/?subtipoContrato=4&idPrecio=844162464",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/prepago/movil/tarjeta/sim_megayuser/?subtipoContrato=4&idPrecio=844162521",
            //añadido esto a blacklist en el ticket WCS-2567
            "https://www.vodafone.es/tienda/particulares/es/catalogo/ficha/particular/movil/samsung/galaxy-s9-purpura/?wlpT17621997371411073962324_javax.portlet.action=actionTipoCliente&_windowLabel=T17621997371411073962324&_urlType=action",
            "https://www.vodafone.es/tienda/particulares/es/catalogo/ficha/particular/movil/samsung/galaxy-s9-purpura/?wlpT17621997371411073962324_javax.portlet.action=actionSubTipoCliente&_windowLabel=T17621997371411073962324&_urlType=action",
            "https://www.vodafone.es/tienda/particulares/es/catalogo/ficha/particular/movil/samsung/galaxy-s9-plus-negro/?wlpT17621997371411073962324_javax.portlet.action=actionTipoCliente&_windowLabel=T17621997371411073962324&_urlType=action",
            "https://www.vodafone.es/tienda/particulares/es/catalogo/ficha/particular/movil/samsung/galaxy-s9-plus-negro/?wlpT17621997371411073962324_javax.portlet.action=actionSubTipoCliente&_windowLabel=T17621997371411073962324&_urlType=action",
            "https://www.vodafone.es/tienda/particulares/es/clientes/catalogo/ficha/particular/movil/samsung/galaxy-s9-purpura/?subtipoContrato=2&idPrecio=973332821",
            "https://www.vodafone.es/tienda/particulares/es/clientes/catalogo/ficha/particular/movil/samsung/galaxy-s9-plus-negro/?subtipoContrato=2&idPrecio=973335083",
            "https://www.vodafone.es/tienda/particulares/es/catalogo/ficha/particular/movil/samsung/galaxy-s9-purpura/?subtipoContrato=3&idPrecio=973385422",
            "https://www.vodafone.es/tienda/particulares/es/catalogo/ficha/particular/movil/samsung/galaxy-s9-plus-negro/?subtipoContrato=3&idPrecio=973371614",
            "https://www.vodafone.es/tienda/particulares/es/clientes/catalogo/ficha/particular/movil/samsung/galaxy-s9-purpura/?subtipoContrato=2&idPrecio=973332745",
            "https://www.vodafone.es/tienda/particulares/es/clientes/catalogo/ficha/particular/movil/samsung/galaxy-s9-plus-negro/?subtipoContrato=2&idPrecio=973335587",
        ]

        urls.forEach(function(url, i) {
            if (~location.href.indexOf(url)) {
                urlFound = true;
            }
        });

        // urls de terminales en las que no debe aparecer el chatbot (correo juan jose talavante: Desactivar el BOT en catálogo de terminales)
        var urlCatalogoTerminalesSinChatbot = "www.vodafone.es/tienda/particulares/es/clientes/catalogo/ficha/particular/movil";
        if (~location.href.indexOf(urlCatalogoTerminalesSinChatbot)) {
            urlFound = false;
        }

        
        blacklist.forEach(function(url, i) {
            if (~location.href.indexOf(url)) {
                urlFound = false;
            }
        });



        return urlFound;
    };

    /*
    |---------------------------------------------------------------------------
    | is correct chat url
    |---------------------------------------------------------------------------
    */

    DFI.checkChatCouldAppear = function() {

        var urlFound = false;
        var appear = false;
        var urls = [
            "www.vodafone.es/mivodafone/es/postpago-puro/",
            "www.vodafone.es/mivodafone/es",
            "www.vodafone.es/tienda/particulares/es/catalogo/ficha/particular/movil/apple_iphone/x_gris_espacial_64gb/?subtipoContrato=1&idPrecio=924923461",
        ];

        urls.forEach(function(url, i) {
            if (~location.href.indexOf(url)) {
                urlFound = true;
            }
        });
        sessionStorage.wm_user ? appear = true : appear = false;

        return urlFound && appear;

    };

    /*
    |---------------------------------------------------------------------------
    | return if it has to load lht/init.js
    |---------------------------------------------------------------------------
    */
    // ¡¡¡¡ DESACTIVADO !!!!
    DFI.isChatNeeded = function() {

        if (!DFI.getQueryVariable("wm_chat")) {
            return false;
        }

        var needed = false;

        if ( // Limita la inserccion en el window padre. Evita la insercion en los iframes
            window.self === window.top &&
            // SÃ³lo se permite arrancar en urls vÃ¡lidas o si la sesiÃ³n estÃ¡ activa
            (DFI.checkChatUrl() || sessionStorage.dct_on || DFI.checkChatCouldAppear()) &&
            // No soporta IE
            !DFI.isIE() &&
            //y no ha cargado ya el script
            !window.DELIO.LHTLoaded
        ) {
            needed = true;
        }

        return needed;
    };


    /*
    |---------------------------------------------------------------------------
    | runOnExit
    |---------------------------------------------------------------------------
    */
    DFI.runOnExit = function(template) {
        //si no es movil se lanza el evento del on exit
        if (!DFI.isMobile()) {

            var popit = true;
            window.addEventListener("mousemove", function(e) {
                if (e.clientY <= 15 && popit && !sessionStorage.wm_chat) {
                    popit = false;
                    DFI.showInactivityModal(template);
                }
            });
        }
    };

    /*
    |---------------------------------------------------------------------------
    | gracias_inactivity
    |---------------------------------------------------------------------------
    */
    window.gracias_inactivity = function() {

        if (window.location.host !== "oferta.vodafone.es") {
            DFI.showInactivityModal("gracias_inactivity");
        }
    };

    /*
    |---------------------------------------------------------------------------
    | getInactivityTemplate
    |---------------------------------------------------------------------------
    */
    DFI.getInactivityTemplate = function(template) {

        var templates = {

            inactivity: '  \
            <div class="inactivity-header">\
                    <img class="hidden-xs" src="https://t.womtp.com/slider/c/vodafone/e2e/assets/img/rombo.png" alt="">\
                    <img class="visible-xs" src="https://t.womtp.com/slider/c/vodafone/e2e/assets/img/rombo-responsive.png" alt="">\
                    <h2>¿Necesitas ayuda?</h2>\
            </div>\
            <div class="inactivity-body">\
                <p class="text-center">Nuestros expertos pueden asesorarte y ofrecerte la mejor oferta que se adapte a ti</p>\
                <button class="continue-here-button" onclick="InactivityModal.close();"> Continúa aquí > </button>\
                <div class="followme-wrapper">\
                    <p class="llama-gratis-text text-center">O déjanos tus datos y te llamaremos en la mayor brevedad posible</p>\
                    <form class="wg-form">\
                        <input name="wg-return" class="wg-return wg-input" value="gracias_inactivity" type="hidden">\
                        <input type="tel" name="phone" id="phone" class="wg-input"  maxlength="9" data-wg-validation="required,phone" placeholder="Nº Teléfono">\
                        <input id="bot_envio" type="submit" class="wg-submit tellamamos-ltc measurec2c" value="Te llamamos gratis">\
                        <label for="wg-check1" class="wg-check">\
                            <input id="wg-check1" type="checkbox" class="wg-input" data-wg-validation="required" name="check">\
                            <p class="item-inline"> He leído y acepto la <a class="cboxElement btnPop" href="https://t.womtp.com/slider/c/vodafone/e2e/privacidad.html" target="_blank">política de privacidad</a></p>\
                        </label>\
                        <input type="hidden" name="idTag" value="29842f94d414949bf95fb2e6109142cfef1fb2a78114c2c536a36bf5a65b953a5fc1ca581ceb7bf8fd143a36f4eb693794c0f95c76664a12dbaa532a82b5988a83ee4186391092587d0a63186160a89442e6230812dd23968409e5c2fe991f39882575b0217ccba96b569760cf761f17" class="wg-idTag">\
                        <input type="hidden" name="isp" value="'+ DFI.getISP() +'" class="wg-return wg-input">\
                        <input  class="wg-input" style=" display:none;" value="NO" name="verifyLeadId">\
                    </form>\
                </div>\
            </div>',
            exit: '<div class="exit-header">\
                    <img class="hidden-xs" src="https://t.womtp.com/slider/c/vodafone/e2e/assets/img/rombo.png" alt="">\
                    <img class="visible-xs" src="https://t.womtp.com/slider/c/vodafone/e2e/assets/img/rombo-responsive.png" alt="">\
                    <h2>¿No encuentras lo que buscabas?</h2>\
                </div>\
                <div class="exit-body">\
                    <p class="text-center">Antes de irte podemos ofrecerte la mejor oferta para ti</p>\
                    <button class="continue-here-button" onclick="InactivityModal.close();"> Continúa aquí > </button>\
                    <div class="followme-wrapper">\
                        <p class="llama-gratis-text text-center">O déjanos tus datos y te llamaremos en la mayor brevedad posible</p>\
                        <form class="wg-form">\
                            <input name="wg-return" class="wg-return wg-input" value="gracias_inactivity" type="hidden">\
                            <input type="tel" name="phone" id="phone" class="wg-input"  maxlength="9" data-wg-validation="required,phone" placeholder="Nº Teléfono">\
                            <input id="bot_envio" type="submit" class="wg-submit tellamamos-ltc measurec2c" value="Te llamamos gratis">\
                            <label for="wg-check1" class="wg-check">\
                                <input id="wg-check1" type="checkbox" class="wg-input" data-wg-validation="required" name="check">\
                                <p class="item-inline"> He leído y acepto la <a class="cboxElement btnPop" href="https://t.womtp.com/slider/c/vodafone/e2e/privacidad.html" target="_blank">política de privacidad</a></p>\
                            </label>\
                            <input type="hidden" name="idTag" value="29842f94d414949bf95fb2e6109142cfef1fb2a78114c2c536a36bf5a65b953a5fc1ca581ceb7bf8fd143a36f4eb693794c0f95c76664a12dbaa532a82b5988a83ee4186391092587d0a63186160a89442e6230812dd23968409e5c2fe991f39882575b0217ccba96b569760cf761f17" class="wg-idTag">\
                            <input type="hidden" name="isp" value="'+ DFI.getISP() +'" class="wg-return wg-input">\
                            <input  class="wg-input" style=" display:none;" value="NO" name="verifyLeadId">\
                        </form>\
                    </div>\
                </div>',
            gracias_inactivity: '<div class="inactivity-body">\
                    <p id="TextoGracias">\
                        En breves momentos te contactaremos para ofrecerte nuestros ofertas Exclusivas Online en el teléfono que nos has proporcionado.\
                    </p>\
                </div>',
            lp_inactivity: '\
            <div class="inactivity-content black">\
                <div class="inactivity-image">\
                    <div class="inactivity-image-content">\
                        <h1 class="inactivity-header">¿Tienes dudas?</h1>\
                        <p class="inactivity-p-first">¡Te llamamos gratis!</p>\
                        <p class="inactivity-p-second">Te ayudamos a resolver</p>\
                        <p class="inactivity-p-second">las dudas que tengas</p>\
                        <p class="inactivity-p-second">sobre nuestras tarifas.</p>\
                        <p class="inactivity-p-third">Sin compromiso. <br> Atención personalizada.</p>\
                    </div>\
                </div>\
                <div class="">\
                    <form id="inactivity" class="wg-form inactivity-buttons">\
                        <input type="hidden"  name="c_var_5" class="wg-cvar wg-input" value="Oferta Especial Masmóvil Dinámicas">\
                        <input name="wg-return" class="wg-return wg-input" value="gracias_inactivity" type="hidden">\
                        <input type="tel" name="phone" id="phone" class="wg-input inactivity-input"  maxlength="9" data-wg-validation="required,phone" placeholder="NºTeléfono">\
                        <input id="bot_envio" type="submit" class="wg-submit tellamamos-ltc measurec2c inactivity-send" value="Te llamamos gratis">\
                        <label for="wg-check1-inactivity" class="wg-check">\
                            <input id="wg-check1-inactivity" type="checkbox" class="wg-input inactivity-check-input" data-wg-validation="required" name="check">\
                            <p class="p-inline"> Acepto la <a class="cboxElement btnPop" href="https://t.womtp.com/slider/c/vodafone/e2e/privacidad.html"target="_blank">política de privacidad</a></p>\
                        </label>\
                        <label for="wg-check2-inactivity" class="wg-check gdpr">\
                            <input id="wg-check2-inactivity" type="checkbox" class="wg-input" name="gdpr">\
                            <p class="item-inline"> Acepto recibir comunicaciones comerciales de Vodafone</p>\
                        </label>\
                        <input  class="wg-input" style="display:none;" value="inactividad" name="formulario">\
                        <input type="hidden" name="isp" value="'+ DFI.getISP() +'" class="wg-return wg-input">\
                        <input  class="wg-input" style="display:none;" value="NO" name="verifyLeadId">\
                    </form>\
                    <div class="llama inactivity-or">\
                        <p class="detail">O llama gratis al</p><a href="tel:900920230" class="phone-number  wm_rp_local_esp_link drp-phone measurec2c">900 920 230</a>\
                    </div>\
                </div>\
            </div>\
            ',
            lp_exit: '<div class="inactivity-content exit">\
            <img src="http://oferta.vodafone.es/img/logo-vf.png" alt="logo-vf" class="logo-vf">\
            <h1 class="inactivity-header"><span>¿No encuentras</span>lo que buscas?</h1>\
            <p class="inactivity-p-first">\
                Nuestros expertos pueden asesorarte acerca de cómo proteger las cosas que te importan.</span>\
            </p>\
            <p class="inactivity-p-second">\
                Déjanos tus datos y te llamamos en breve\
            </p>\
            <form id="exit" class="wg-form inactivity-buttons">\
                <input type="hidden"  name="c_var_5" class="wg-cvar wg-input" value="exit">\
                <input name="wg-return" class="wg-return wg-input" value="gracias_inactivity" type="hidden">\
                <input type="tel" name="phone" id="phone" class="wg-input inactivity-input"  maxlength="9" data-wg-validation="required,phone" placeholder="Nº Teléfono">\
                <input id="bot_envio" type="submit" class="wg-submit tellamamos-ltc measurec2c inactivity-send" value="Te llamamos gratis">\
                <label for="wg-check1" class="wg-check">\
                    <input id="wg-check1" type="checkbox" class="wg-input inactivity-check-input" data-wg-validation="required" name="check">\
                    <p class="p-inline"> He leído y acepto la <a class="cboxElement btnPop" href="https://t.womtp.com/slider/c/vodafone/e2e/privacidad.html" target="_blank">política de privacidad</a></p>\
                </label>\
                 <input  class="wg-input" style=" display:none;" value="NO" name="verifyLeadId">\
                 <input type="hidden" name="isp" value="'+ DFI.getISP() +'" class="wg-return wg-input">\
            </form>\
        </div>',
        descuento_inactivity: '\
        <div class="inactivity-content black">\
            <div class="inactivity-image">\
                <div class="inactivity-image-content">\
                    <h1 class="inactivity-header">¿Tienes dudas?</h1>\
                    <p class="inactivity-p-first">¡Te llamamos gratis!</p>\
                    <p class="inactivity-p-second">Te ayudamos a resolver</p>\
                    <p class="inactivity-p-second">las dudas que tengas</p>\
                    <p class="inactivity-p-second">sobre nuestras tarifas.</p>\
                    <p class="inactivity-p-third">Sin compromiso. <br> Atención personalizada.</p>\
                </div>\
            </div>\
            <div class="">\
                <form id="inactivity" class="wg-form inactivity-buttons">\
                    <input type="hidden"  name="c_var_5" class="wg-cvar wg-input" value="Oferta Especial Masmóvil Dinámicas">\
                    <input name="wg-return" class="wg-return wg-input" value="gracias_inactivity" type="hidden">\
                    <input type="tel" name="phone" id="phone" class="wg-input inactivity-input"  maxlength="9" data-wg-validation="required,phone" placeholder="NºTeléfono">\
                    <input id="bot_envio" type="submit" class="wg-submit measurec2c tellamamos-ltc inactivity-send" value="Te llamamos gratis">\
                    <label for="wg-check1-inactivity" class="wg-check">\
                        <input id="wg-check1-inactivity" type="checkbox" class="wg-input inactivity-check-input" data-wg-validation="required" name="check">\
                        <p class="p-inline"> Acepto la <a class="cboxElement btnPop" href="https://t.womtp.com/slider/c/vodafone/e2e/privacidad.html"target="_blank">política de privacidad</a></p>\
                    </label>\
                    <label for="wg-check2-inactivity" class="wg-check gdpr">\
                        <input id="wg-check2-inactivity" type="checkbox" class="wg-input" name="gdpr">\
                        <p class="item-inline"> Acepto recibir comunicaciones comerciales de Vodafone</p>\
                    </label>\
                    <input  class="wg-input" style="display:none;" value="inactividad" name="formulario">\
                    <input  class="wg-input" style="display:none;" value="NO" name="verifyLeadId">\
                    <input type="hidden" name="isp" value="'+ DFI.getISP() +'" class="wg-return wg-input">\
                </form>\
                <div class="llama inactivity-or">\
                    <p class="detail">O llama gratis al</p><a href="tel:900920230" class="phone-number  wm_rp_local_esp_link drp-phone measurec2c">900 920 230</a>\
                </div>\
            </div>\
        </div>\
        ',

        };

        return templates[template];
    };

    /*
      |---------------------------------------------------------------------------
      | activateColorbox
      |---------------------------------------------------------------------------
      */
    function activateColorbox() {
        $('.btnPop').colorbox({
            href: function() {
                var str = $(this).attr('href') + ' .wrapperP';
                return str;
            },
            opacity: 0.7,
            innerHeight: 0,
            width: '90%',
            height: 'auto',
            maxHeight: '80%',
            top: '2%',
            onComplete: function() {
                $.colorbox.resize();
            }
        });
    };

    /*
    |---------------------------------------------------------------------------
    | isDevScriptNeeded
    | Comprueba si se requieren cargar script de desarrollo
    |---------------------------------------------------------------------------
    */
    function isDevScriptNeeded() {

        var isNeeded = false;
        // TEST Carlos Lara - INI
        if (DFI.getQueryVariable("walmericTest") === "dev" || sessionStorage.wm_test === "dev") {
            DFI.loadScript("https://t.womtp.com/slider/d/vodafone/lht/init.js");
            sessionStorage.wm_test = "dev";
            isNeeded = true;
        }

        // TEST Carlos Lara - INI
        if (DFI.getQueryVariable("walmericFacebook") &&
            ~DFI.getQueryVariable("walmericFacebook").indexOf("true") || sessionStorage.wm_facebook === "true") {
            DFI.loadScript("https://t.womtp.com/slider/d/vodafone/lht/init30032017.js");
            sessionStorage.wm_facebook = "demo";
            isNeeded = true;
        }

        if (DFI.getQueryVariable("walmericTest") === "newChat" || sessionStorage.wm_test === "newChat") {
            DFI.loadScript("https://t.womtp.com/slider/d/vodafone/newChat/lht/init.js");
            sessionStorage.wm_test = "newChat";
            isNeeded = true;
        }

        return isNeeded;
    };

    /*
    |---------------------------------------------------------------------------
    | Obtener inbound para número por defecto de ringpool
    |---------------------------------------------------------------------------
    */
    DFI.getRingPoolService = function (serviceName) {
        serviceName = serviceName || "default";

        var services = {
            default: "c8d85c6aebf14547c575dfccac639730",
            ko: "74c8588ed41d6de8204123c87b56f963"
        }

        if (DFI.getQueryVariable("wm_rp_ko") || sessionStorage.wm_rp_ko) {
            sessionStorage.wm_rp_ko = 1;
            serviceName = "ko";
        }

        return services[serviceName];
    }

    /*
    |---------------------------------------------------------------------------
    | Obtener inbound para número por defecto de ringpool
    |---------------------------------------------------------------------------
    */
    DFI.getInboundPhoneRP = function () {
        // Default
        phone = "900920052"

        if(~location.pathname.indexOf('/c/tienda-online/particulares/') || ~location.pathname.indexOf('/c/particulares/es/productos-y-servicios/movil/catalogo-clientes/')){
            phone = "900920155";
        }

        if(~location.pathname.indexOf('/tienda/particulares/es/one/cobertura-fibra')
        || ~location.pathname.indexOf('/tienda/particulares/es/one/cobertura-adsl')
        || ~location.pathname.indexOf('/tienda/particulares/es/one/cobertura-one-basico')
        || ~location.pathname.indexOf('/tienda/particulares/es/one/cobertura')
        || ~location.pathname.indexOf('/tienda/particulares/es/one/cobertura-fibra-regional')
        || ~location.pathname.indexOf('/tienda/particulares/es/one/cobertura-fibra-regional-v2')
        || ~location.pathname.indexOf('/tienda/particulares/es/one/cobertura-adsl-regional')
        ){
            phone = "900920725";
        }

        if(~location.hostname.indexOf('oferta.vodafone.es')){
            phone = "900920230"
        }
        // Devolvemos sólo el teléfono por defecto.
        return phone;

        // // Tracking Object (from the url)
        // var trackingParam = DFI.getTrackingParam();

        // // Telefonos Inbound PC
        // var mediumPhones = {
        //     // 910613800 SEM
        //     cid : "900920511",
        //     // 910613802 Display
        //     did : "900920513",
        //     // 910613803 Facebook
        //     smp : "900920514",
        //     // 910613805 Afiliación
        //     afp : "900920516",
        //     // 910613806 SEO
        //     seo : "900920517",
        //     // 910613799 Directo
        //     directo : "900920510"
        // };

        // // Telefonos Inbound Mobile
        // if (DFI.isMobile()) {
        //     mediumPhones = {
        //         // 910613985 SEM
        //         cid : "900920754",
        //         // 910613986 Display
        //         did : "900920755",
        //         // 910613983 Facebook
        //         smp : "900920752",
        //         // 910613984 Afiliación
        //         afp : "900920753",
        //         // 910613981 SEO
        //         seo : "900920750",
        //         // 910613978 Directo
        //         directo : "900920747"
        //     };
        // }

        // // Medium from the url
        // if (trackingParam.name && mediumPhones[trackingParam.name]) {
        //     phone = mediumPhones[trackingParam.name];

        // // Medium "seo"
        // } else if (document.referrer === "https://www.google.es/" ||
        //            document.referrer === "https://www.bing.com/" ||
        //            document.referrer === "https://es.ask.com/" ||
        //            document.referrer === "https://duckduckgo.com/" ||
        //            document.referrer === "https://es.search.yahoo.com/") {
        //     phone = mediumPhones.seo

        // // Medium "directo"

        // } else {
        //     phone = mediumPhones.directo
        // }

        // return phone
    };



    /*
    |---------------------------------------------------------------------------
    | Obtener la ISP mediante el datalayer de Divisadero
    |---------------------------------------------------------------------------
    */
    DFI.getISP = function (ispName) {
        var isp = "";

        if (window.utag_data && utag_data.isp) {
            isp = utag_data.isp.toLowerCase();
        } else {
            return isp;
        }

        if (~isp.indexOf("vodafone")) {
            isp = "vodafone";
        } else if (~isp.indexOf("orange")) {
            isp = "orange";
        } else if (~isp.indexOf("telefonica") && ~isp.indexOf("espana")) {
            isp = "movistar";
        } else if (~isp.indexOf("movistar")) {
            isp = "movistar";
        }

        return isp;
    };

    /*
    |---------------------------------------------------------------------------
    | Añadir URL como declarativa en el formulario
    |---------------------------------------------------------------------------
    */
    DFI.getDevice = function () {
        if (~navigator.userAgent.indexOf("Windows Phone")){

            var count = navigator.userAgent.split(";").length;
            return (navigator.userAgent.split(";")[count-2].split(")")[0] + navigator.userAgent.split(";")[count-1].split(")")[0]).trim();
        }
        else if(~navigator.userAgent.indexOf("Android")){

            return navigator.userAgent.split(";" , 3)[2].split("Build",1)[0].trim();

        } else if(~navigator.userAgent.indexOf("iPhone")) {

            return getiPhoneModel();

        }  
    }

    
    /*
    |---------------------------------------------------------------------------
    | Retorna el modelo de iphone
    |---------------------------------------------------------------------------
    */
    function getiPhoneModel(){
        
        // iPhone Xr MAX
        if((window.screen.height / window.screen.width == 896 / 414) && (window.devicePixelRatio == 3)){
            return "iPhone Xr Max";
        }
        // iPhone X
        else if ((window.screen.height / window.screen.width == 812 / 375) && (window.devicePixelRatio == 3)) 
        {
            return "iPhone X";
        }   
        // iPhone 6+/6s+/7+ and 8+    
        else if ((window.screen.height / window.screen.width == 736 / 414) && (window.devicePixelRatio == 3))
        {
            return "iPhone 6 Plus, 6s Plus, 7 Plus or 8 Plus";
        } 
            
        // iPhone 6+/6s+/7+ and 8+ in zoom mode 
        else if ((window.screen.height / window.screen.width == 667 / 375) && (window.devicePixelRatio == 3)) 
        {
            return "iPhone 6 Plus, 6s Plus, 7 Plus or 8 Plus (display zoom)";
        }
            
        // iPhone 6/6s/7 and 8  
        else if ((window.screen.height / window.screen.width == 667 / 375) && (window.devicePixelRatio == 2))
        {
            return "iPhone 6, 6s, 7 or 8";
        }
            
        // iPhone 5/5C/5s/SE or 6/6s/7 and 8 in zoom mode   
         else if ((window.screen.height / window.screen.width == 1.775) && (window.devicePixelRatio == 2)) 
        {
            return "iPhone 5, 5C, 5S, SE or 6, 6s, 7 and 8 (display zoom)";
        }
            
        // iPhone 4/4s  
         else if ((window.screen.height / window.screen.width == 1.5) && (window.devicePixelRatio == 2)) 
        {
            return "iPhone 4 or 4s";
        }
            
        // iPhone 1/3G/3GS  
         else if ((window.screen.height / window.screen.width == 1.5) && (window.devicePixelRatio == 1))
            {
            return "iPhone 1, 3G or 3GS";
            } 
            
        else {
            return getiPadModel();
        }
    }

    /*
    |---------------------------------------------------------------------------
    | Añadir URL como declarativa en el formulario
    |---------------------------------------------------------------------------
    */
    DFI.addFormField = function (field) {
        var wgForms = document.querySelectorAll(".wg-form");

        [].forEach.call(wgForms, function(wgForm, i) {
            wgForm.appendChild(field.cloneNode(true));
        });
    }

    /*
    |---------------------------------------------------------------------------
    | Añadir URL como declarativa en el formulario
    |---------------------------------------------------------------------------
    */
    DFI.addField_url = function () {
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = "url";
        input.value = DFI.getUrl();

        DFI.addFormField(input);
    };

    /*
    |---------------------------------------------------------------------------
    | Añadir adformid como declarativa en el formulario
    |---------------------------------------------------------------------------
    */
    DFI.addField_AdformID = function () {
        if (!(window.Adform && window.Adform._uid)) {
            return false;
        }

        var input = document.createElement("input");
        input.type = "hidden";
        input.name = "adFormID";
        input.value = window.Adform._uid; 

        DFI.addFormField(input);
    };
    function alEpst(adformId){
        //solicitud para actualizar el back 
        DAL.Ajax({
            type: 'jsonp',
            url: "https://t.womtp.com/epst",
            data: {
                idsite: "2a246268b4561c54e468f77255d7d0c6",
                idvisitor: Piwik.getAsyncTracker().getVisitorId(),
                adfid: adformId,
                v: "1"

            }
        }).done(function() {
        }) 
    }

    function addAdformInactivity(){
        var field = document.createElement("input");
        field.type = "hidden";
        field.name = "adFormID";
        field.value = window.Adform._uid; 
        var wgForms = document.getElementById("inactivity");
        wgForms.appendChild(field.cloneNode(true));
    }

    /*
    |---------------------------------------------------------------------------
    | Añadir declarativa en el formulario por la url
    |---------------------------------------------------------------------------
    */
   DFI.addField_declarativaUrl= function (decValue, decvalue2) {

    var input = document.createElement("input");
    input.type = "hidden";
    input.name = "TipoProducto";
    input.value = decValue; 

    DFI.addFormField(input);

    var input2 = document.createElement("input");
    input2.type = "hidden";
    input2.name = "TipoTienda";
    input2.value = decvalue2; 

    DFI.addFormField(input2);
};

    /*
    |---------------------------------------------------------------------------
    | Objetener parámetros de una url en un objeto
    |---------------------------------------------------------------------------
    */

    DFI.getUrlParams = function(){

        var url = window.location.href;

        if(url.indexOf('?')>0){
            var getString = url.split('?')[1];
        
            var GET = getString.split('&');
            var get = {};

            for(var i = 0, l = GET.length; i < l; i++){
                var tmp = GET[i].split('=');
                get[tmp[0]] = unescape(decodeURI(tmp[1]));
            }
            return get;
        }
    }

    /*
    |-------------------------------------------------------------------------------------------------------
    | Objetener subParámetros de una url en un objeto, pasar objeto con subparametros de DFI.getUrlParams
    |-------------------------------------------------------------------------------------------------------
    */
    DFI.getUrlSubParams = function(params){
        try {
            if(params.indexOf(":")>0){
                var params = params.split(":");
                var finalParams = {};
                for(var i=1; i<params.length; i++){
                    var temp = params[i].split("-");
                    var cont = temp[1]
                        if(temp.length>2){
                            cont="";
                            for(var u=1; u<temp.length; u++){
                                cont = cont + "-"+temp[u];
                            }
                            cont = cont.substr(1,cont.length);
                        }
                    finalParams[temp[0]] = cont;
                }
                return finalParams;
            }
        } catch (error) {
            
        }
        
    }

    /*
    |-------------------------------------------------------------------------------------------------------
    | Objetener subParámetros de una url en un objeto, pasar objeto con subparametros de DFI.getUrlParams
    |-------------------------------------------------------------------------------------------------------
    */
    DFI.prepareCustomThankU = function(resp){
        // DFI_client.customThankU(result)
        if (window.DFI_client && DFI_client.customThankU) {
            var dfi_result = {};
            // Preparar objeto de parámetros
            if (resp.result == "OK") {
                dfi_result.registered = true;
                dfi_result.leadId = resp.leadId;
            } else {
                dfi_result.registered = false;
                dfi_result.reason = resp.message;
            }
            dfi_result.onSchedule = DFI.scheduleValid();
            dfi_result.form = resp.form;
            DFI_client.customThankU(dfi_result);
        }
    }


    /*
    |-------------------------------------------------------------------------------------------------------
    | Añade un litener a todos los inputs de walmeric para solo poder introducir números, se usa en:
    | - NTOL
    |-------------------------------------------------------------------------------------------------------
    */
    DFI.addListenerInputsNumber = function(){

        var inputsWal = document.querySelectorAll("form.wg-form input[type='number'].wg-input");

        inputsWal.forEach(function(element) {
            /* element.addEventListener("keypress", function(objEvt){
                var ascii = (typeof objEvt.which!='undefined') ? objEvt.which : objEvt.keyCode;
                if ((ascii<48 || ascii>57) && ascii!=8){
                    if (typeof objEvt.preventDefault=='undefined') 
                        objEvt.returnValue=false;
                    else
                        objEvt.preventDefault();
                };
            }); */
            element.type="tel";
            element.addEventListener("input", function(objEvt){
                if ( element.value.length == 1 ){
                    var cont = element.value;
                    if ( objEvt.data ){
                        if ( objEvt.data == "6" || objEvt.data == "7" || objEvt.data == "8" || objEvt.data == "9"){}else{
                            element.value = cont.substr(0, cont.length -1)
                        }
                    }
                } else if ( element.value.length <= 9 ){
                    var cont = element.value;
                    if ( objEvt.data ){
                        if ( objEvt.data.match("[0-9]") ){}else{
                            element.value = cont.substr(0, cont.length -1)
                        }
                    }
                }

            });

        });

    }

    /*
    |---------------------------------------------------------------------------------------------------------
    | Devuelve la url hasta los parámetros ":cp-"(si la url contiene "/onsite/" o "/ficticio/") o "?" o "%3F"
    | nunca se dan los dos casos a la vez
    |---------------------------------------------------------------------------------------------------------
    */
    DFI.selectUrl = function(){

        var url = window.location.href;
        try {
            var url1 = url.split("?");
            var url2 = url.split("%3F");
            // /onsite/ /ficticio/
            var url3 = url.split(":cp-");
        } catch (error) {}
        
        var result = "defecto";
        try {
            if (url1.length > 1){
                result = url1[0];
            } else if (url2.length > 1){
                result = url2[0];
            } else {
                result = url;
            }
        } catch (error) {}


        if ( ~url.indexOf("/onsite/") || ~url.indexOf("/ficticio/") ){
            if(url3.length > 1){
                result = url3[0];
            }
        }

        if(result == "defecto"){
            result = window.location.href
        }
        return result;

    }

    /*
    |---------------------------------------------------------------------------
    | Añadir cualquer etiqueta como declarativa
    |---------------------------------------------------------------------------
    */
    DFI.addDeclarativeField = function (nombre, contenido) {

        var input = document.createElement("input");
        input.type = "hidden";
        input.name = nombre;
        input.value = contenido;

        DFI.addFormField(input);

    };
    

}));