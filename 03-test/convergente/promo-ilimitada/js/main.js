/**
 * Vodafone Reboot Framework: Version 13.0.2. Generation Date: 2019-08-14T11:08:38.322Z
 */

!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=document.documentElement.clientWidth,r={isDesktop:o>969,isTablet:o<=969&&o>=768,isMobile:o<768&&o>300,init:function(){document.querySelector("link[data-microcss]")&&((window.vfes||window._vf)._utils.init(document.querySelector(".vfes-ms-content")),document.querySelector(".vfes-ms-content").removeAttribute("style"),r.cssLoaded=!0,r.onStylesReady())},cssLoaded:!1,onStylesReady:function(){return null}},c=r;Math.easeInOutQuad=function(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2.8)-1)+t},c.onStylesReady=function(){console.log("Site visually ready");var e=document.querySelector(".vfes-ms-content");[].forEach.call(document.querySelectorAll(".js-iva-button"),function(t){t.addEventListener("click",function(){t.classList.contains("active")||(document.querySelector(".js-iva-button.active").classList.remove("active"),t.classList.add("active"),e.setAttribute("data-iva",t.getAttribute("data-button-iva")))})}),setTimeout(function(){[].forEach.call(document.querySelectorAll('.js-sticky [data-sticky="item"]'),function(e){e.addEventListener("click",function(){if(e.classList.contains("vfes-card-rate--closed")){var t=e.querySelector(".js-svg-thunder .span strong");t&&(t.innerText=t.innerText.replace("Datos","GB"))}else{var n=e.querySelector(".js-svg-thunder .span strong");n&&(n.innerText=n.innerText.replace("GB","Datos"))}})})},100),c.isMobile&&setTimeout(function(){!function(e,t,n){var o=e.scrollTop,r=t-o,c=0;!function e(){c+=20;var t=Math.easeInOutQuad(c,o,r,n);window.scrollTo(0,t),c<n&&setTimeout(e,20)}()}(document.querySelector("body"),document.querySelector('.vfes-tabs__content[data-tab="2"]').offsetTop-100,500)},2e3)},c.init()}]);