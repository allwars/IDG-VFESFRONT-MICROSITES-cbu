/**
 * Vodafone Reboot Framework: Version 15.6.0. Generation Date: 2020-02-19T12:22:57.975Z
 */

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let r,o,u,i=document.documentElement.clientWidth;r=i>969,o=i<=969&&i>=768,u=i<768&&i>300;const l={isDesktop:r,isTablet:o,isMobile:u,init:function(){},cssLoaded:!1,onStylesReady:()=>null};document.querySelector("link[data-microcss]")&&(window._vf._utils.init(document.querySelector(".vfes-ms-content")),document.querySelector(".vfes-ms-content").removeAttribute("style"),l.cssLoaded=!0,l.onStylesReady()),l.onStylesReady=()=>{console.log("Site visually ready")},document.querySelector('link[href*="mainvfresp.min.css"]')&&document.querySelector('link[href*="mainvfresp.min.css"]').remove()}]);