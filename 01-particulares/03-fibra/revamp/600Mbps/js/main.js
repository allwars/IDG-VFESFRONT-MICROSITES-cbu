/**
 * Vodafone Reboot Framework: Version 2.7.1. Generation Date: 2020-12-28T17:07:01.601Z
 */

!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=document.querySelector("link[data-microcss]"),r=function(e,t,o){var n=null;for(;e;){if(e.matches(t)){n=e;break}if(o&&e.matches(o))break;e=e.parentElement}return n}(document.querySelector("#seiscientos-mbps"),"[data-pathmicrosite]"),i=r?r.dataset.pathmicrosite:"",c=document.documentElement.clientWidth,s=c>969,u=c<=969&&c>=768,a=c<768&&c>300;function l(){m.cssLoaded||(document.querySelector("#seiscientos-mbps").removeAttribute("style"),m.cssLoaded=!0,m.onStylesReady())}function d(){window.vfes._utils.init(document.querySelector("#seiscientos-mbps")),m.onFrameworkReady()}function f(){var e=document.styleSheets,t=0;return[].forEach.call(e,(function(e){var o=e.href||"";-1!==o.indexOf(i+"css/ws2r")&&(console.log("WS2RCSS Loaded"),t++),-1!==o.indexOf(i+"css/styles.css")&&(console.log("MICROCSS Loaded"),t++)})),2===t}f()?f()&&setTimeout(l,100):(n.addEventListener("load",l),setTimeout(l,3e3)),window.vfes?setTimeout(d,100):document.addEventListener("vfes:frameworkReady",d);var m={isDesktop:s,isTablet:u,isMobile:a,micrositeId:"#seiscientos-mbps",micrositePath:i,init:function(){},cssLoaded:!1,onStylesReady:function(){return null},onFrameworkReady:function(){return null}},y=m;y.onStylesReady=function(){console.log("Site visually ready"),localStorage.removeItem("coverage"),console.log("Site functionality ready"),window.scrollTo(0,0);var e=document.querySelector(".vfes-offer-ticket");if(e){var t=document.querySelector('[data-vfes-inject-module="vfms-ticket"]');t.parentNode.replaceChild(e,t)}var o=document.querySelector(".vfes-sticky-down");if(o){var n=document.querySelector('[data-vfes-inject-module="vfms-ticket-mobile"]');n.parentNode.replaceChild(o,n)}},y.onFrameworkReady=function(){}}]);