/**
 * Vodafone Reboot Framework: Version 2.7.1. Generation Date: 2021-02-12T12:52:40.013Z
 */

!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=document.querySelector("link[data-microcss]"),r=function(e,t,n){var o=null;for(;e;){if(e.matches(t)){o=e;break}if(n&&e.matches(n))break;e=e.parentElement}return o}(document.querySelector("#christmas"),"[data-pathmicrosite]"),i=r?r.dataset.pathmicrosite:"",u=document.documentElement.clientWidth,c=u>969,s=u<=969&&u>=768,a=u<768&&u>300;function l(){m.cssLoaded||(document.querySelector("#christmas").removeAttribute("style"),m.cssLoaded=!0,m.onStylesReady())}function d(){window.vfes._utils.init(document.querySelector("#christmas")),m.onFrameworkReady()}function f(){var e=document.styleSheets,t=0;return[].forEach.call(e,(function(e){var n=e.href||"";-1!==n.indexOf(i+"css/ws2r")&&(console.log("WS2RCSS Loaded"),t++),-1!==n.indexOf(i+"css/styles.css")&&(console.log("MICROCSS Loaded"),t++)})),2===t}f()?f()&&setTimeout(l,100):(o.addEventListener("load",l),setTimeout(l,3e3)),window.vfes?setTimeout(d,100):document.addEventListener("vfes:frameworkReady",d);var m={isDesktop:c,isTablet:s,isMobile:a,micrositeId:"#christmas",micrositePath:i,init:function(){},cssLoaded:!1,onStylesReady:function(){return null},onFrameworkReady:function(){return null}},y=m;y.onStylesReady=function(){console.log("Site visually ready")},y.onFrameworkReady=function(){console.log("Site functionality ready")}}]);