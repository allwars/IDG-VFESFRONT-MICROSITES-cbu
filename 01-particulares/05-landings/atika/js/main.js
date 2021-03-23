/**
 * Vodafone Reboot Framework: Version 2.7.1. Generation Date: 2021-01-05T15:57:39.042Z
 */

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){if(!window.YT)var n={loading:0,loaded:0};if(!window.YTConfig)var r={host:"http://www.youtube.com"};n.loading||(n.loading=1,function(){var e=[];n.ready=function(t){n.loaded?t():e.push(t)},window.onYTReady=function(){n.loaded=1;for(var t=0;t<e.length;t++)try{e[t]()}catch(e){}},n.setConfig=function(e){for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t])};var t=document.createElement("script");t.type="text/javascript",t.id="www-widgetapi-script",t.src="https://s.ytimg.com/yts/jsbin/www-widgetapi-vflTj3NPM/www-widgetapi.js",t.async=!0;var o=document.currentScript;if(o){var i=o.nonce||o.getAttribute("nonce");i&&t.setAttribute("nonce",i)}var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a)}())},function(e,t,n){"use strict";n.r(t);n(0);performance&&performance.mark&&performance.mark("micro exec");var r,o,i=document.querySelector("link[data-ws10-microcss]"),a=function(e,t,n){var r=null;for(;e;){if(e.matches(t)){r=e;break}if(n&&e.matches(n))break;e=e.parentElement}return r}(document.querySelector("#atika"),"[data-ws10-microsite]"),c=a?a.dataset.pathmicrosite:"",s=document.documentElement.clientWidth,u=s>1024,l=s<=1024&&s>=768,d=s<768;function f(){v.cssLoaded||(document.querySelector("#atika")&&document.querySelector("#atika").removeAttribute("style"),v.cssLoaded=!0,v.onStylesReady(),performance&&performance.mark&&performance.mark("micro css ready"))}function m(){document.removeEventListener("ws10:frameworkReady",m),window.ws10.utils.init(document.querySelector("#atika")),v.onFrameworkReady(),performance&&performance.mark&&(performance.mark("micro js ready"),console.timeEnd("microsite instantiation"))}function y(){var e=document.styleSheets,t=0;return[].forEach.call(e,(function(e){var n=e.href||"";-1!==n.indexOf(c+"css/ws10")&&(console.log("WS10 CSS Loaded"),t++),-1!==n.indexOf(c+"css/styles.css")&&(console.log("MICRO CSS Loaded"),t++)})),2===t}y()?y()&&setTimeout(f,100):i?(r=setInterval((function(){i.sheet.rules&&i.sheet.rules.length>0&&(clearInterval(r),clearTimeout(o),f())}),100),o=setTimeout((function(){console.warn("Microsite visible by 3s timeout"),clearInterval(r),clearTimeout(o),f()}),3e3)):setTimeout(f,100),window.ws10?setTimeout(m,100):document.addEventListener("ws10:frameworkReady",m);var v={isDesktop:u,isTablet:l,isMobile:d,micrositeId:"#atika",micrositePath:c,init:function(){},cssLoaded:!1,onStylesReady:function(){return null},onFrameworkReady:function(){return null}},b=v,p={direction:{ArrowLeft:-1,ArrowDown:1,ArrowUp:-1,ArrowRight:1}};function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g=function(e){return e&&"object"===h(e)&&!Array.isArray(e)&&null!==e},w=function e(t,n){return g(t)&&g(n)&&Object.keys(n).forEach((function(r){g(n[r])?(t[r]&&g(t[r])||(t[r]=n[r]),e(t[r],n[r])):Object.assign(t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},r,n[r]))})),t};function S(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E={direction:"horizontal",selectors:{tabs:'[role="tab"]',panels:'[role="tabpanel"]'},classes:{tabActive:"ws10-o-tabs__tab--active"}},j=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tabKeyHandler=function(t){t.preventDefault();var n=t.currentTarget,o=t.key;if("horizontal"===r.config.direction&&["ArrowLeft","ArrowRight"].includes(o)||"vertical"===r.config.direction&&["ArrowUp","ArrowDown"].includes(o)){var i=e.getNextTab(r.tabs,n,p.direction[o]);r.toggle(i,!0),r.fireChangeEvent(i)}},this.tabClickHandler=function(e){var t=e.currentTarget;"A"===t.nodeName&&e.preventDefault(),r.toggle(t),r.fireChangeEvent(t)},this.toggle=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=t||r.tabs[0];var o=e.getPanelTargetSelectors(t);n&&t.focus(),r.tabs.forEach((function(e){var n=e.isSameNode(t);e.setAttribute("aria-selected",n),e.classList.toggle(r.config.classes.tabActive,n),e.setAttribute("tabindex",n?0:-1)})),o.forEach((function(e){var t=document.querySelector(e);S(t.parentElement.querySelectorAll(r.config.selectors.panels)).forEach((function(e){var n=e.isSameNode(t);e.setAttribute("aria-expanded",n),n?e.removeAttribute("hidden"):e.setAttribute("hidden","")}))}))},this.$element=t,this.config=this.config=w(E,n),this.tabs=S(this.$element.querySelectorAll(this.config.selectors.tabs)),this.onInitialized=new Event("ws10:init"),this.onChanged=new Event("ws10:changed")}var t,n,r;return t=e,r=[{key:"getNextTab",value:function(e,t,n){var r=e.findIndex((function(e){return e.isSameNode(t)}));return(r+=n)<0?r=e.length-1:r>e.length-1&&(r=0),e[r]}},{key:"getPanelTargetSelectors",value:function(e){return null!==e.getAttribute("aria-controls")?e.getAttribute("aria-controls").split(" ").map((function(e){return"#".concat(e)})):[e.getAttribute("href")]}}],(n=[{key:"init",value:function(){var e=this;this.toggle(),this.tabs.forEach((function(t){t.addEventListener("click",e.tabClickHandler),t.addEventListener("keyup",e.tabKeyHandler)})),this.onInitialized.tabs=this.tabs,this.$element.dispatchEvent(this.onInitialized)}},{key:"fireChangeEvent",value:function(e){this.onChanged.tab=e,this.$element.dispatchEvent(this.onChanged)}}])&&k(t.prototype,n),r&&k(t,r),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$elements=t}var t,n,r;return t=e,(n=[{key:"init",value:function(){this.$elements.forEach((function(e){new j(e,{classes:{tabActive:"vf-tabs-button__active"}}).init()}))}}])&&T(t.prototype,n),r&&T(t,r),e}();b.onStylesReady=function(){console.log("Site visually ready")},b.onFrameworkReady=function(){console.log("Site functionality ready");var e=document.documentElement.clientWidth>1024,t=document.querySelector('[data-ws10-js="composition-card-rate"]'),n=document.querySelector(".mdd-desktop").offsetHeight,r=document.querySelector('[data-js="ticketStopped"]'),o=document.querySelector('[data-js-vf="_showOrHideSticky"]'),i=document.querySelector('[data-js-vf="_stickyRate"]');document.addEventListener("scroll",(function(){o.getBoundingClientRect().top<=0?i.classList.remove("ws10-u--hidden"):i.classList.add("ws10-u--hidden")}));e&&(document.addEventListener("scroll",(function(){var e=t.offsetHeight;r.getBoundingClientRect().top-(e+n)<=0?t.parentElement.setAttribute("style","position:absolute; bottom: 0; top: initial;"):t.parentElement.setAttribute("style","position:fixed; top: 120px;")})),document.addEventListener("scroll",(function(){document.querySelector('[data-js="_banner"]').getBoundingClientRect().top>=147&&t.parentElement.setAttribute("style","position:absolute; top: 0;")})));var a,c,s,u,l=document.querySelectorAll('[data-vf-js="tabs"]');function d(){a.stopVideo(),c.stopVideo(),s.stopVideo(),u.stopVideo()}new O(l).init(),document.querySelectorAll('[data-ws10-js="backdrop"]').forEach((function(e){e.addEventListener("ws10:closed",d)})),window.onYouTubeIframeAPIReady=function(){a=new YT.Player("videoAtika1",{height:"460",width:"auto",videoId:"ovv4g3BAdhc"}),c=new YT.Player("videoAtika2",{height:"460",width:"auto",videoId:"hOXnAyTHbFM"}),s=new YT.Player("videoAtika3",{height:"460",width:"auto",videoId:"C56lV6LNukY"}),u=new YT.Player("videoAtika4",{height:"460",width:"auto",videoId:"6KJoPyUWm7s"})}}}]);