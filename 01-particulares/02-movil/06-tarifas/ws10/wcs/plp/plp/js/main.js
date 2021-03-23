/**
 * Vodafone Reboot Framework: Version 2.12.0. Generation Date: 2021-02-19T10:39:18.069Z
 */

!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),performance&&performance.mark&&performance.mark("micro exec");var n,o,i=document.querySelector("link[data-ws10-microcss]"),a=function(e,t,r){var n=null;for(;e;){if(e.matches(t)){n=e;break}if(r&&e.matches(r))break;e=e.parentElement}return n}(document.querySelector("#plp"),"[data-ws10-microsite]"),c=a?a.dataset.pathmicrosite:"",s=document.documentElement.clientWidth,u=s>1024,l=s<=1024&&s>=768,f=s<768;function d(){p.cssLoaded||(document.querySelector("#plp")&&document.querySelector("#plp").removeAttribute("style"),p.cssLoaded=!0,p.onStylesReady(),performance&&performance.mark&&performance.mark("micro css ready"))}function m(){document.removeEventListener("ws10:frameworkReady",m),window.ws10.utils.init(document.querySelector("#plp")),p.onFrameworkReady(),performance&&performance.mark&&(performance.mark("micro js ready"),console.timeEnd("microsite instantiation"))}function y(){var e=document.styleSheets,t=0;return[].forEach.call(e,(function(e){var r=e.href||"";-1!==r.indexOf(c+"css/ws10")&&(console.log("WS10 CSS Loaded"),t++),-1!==r.indexOf(c+"css/styles.css")&&(console.log("MICRO CSS Loaded"),t++)})),2===t}y()?y()&&setTimeout(d,100):i?(n=setInterval((function(){i.sheet.rules&&i.sheet.rules.length>0&&(clearInterval(n),clearTimeout(o),d())}),100),o=setTimeout((function(){console.warn("Microsite visible by 3s timeout"),clearInterval(n),clearTimeout(o),d()}),3e3)):setTimeout(d,100),window.ws10?setTimeout(m,100):document.addEventListener("ws10:frameworkReady",m);var p={isDesktop:u,isTablet:l,isMobile:f,micrositeId:"#plp",micrositePath:c,init:function(){},cssLoaded:!1,onStylesReady:function(){return null},onFrameworkReady:function(){return null}},v=p;function b(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}v.onStylesReady=function(){console.log("Site visually ready");var e=document.querySelectorAll('[data-js-vf="_buttonVelocity"]');b(e).forEach((function(t){t.addEventListener("click",(function(){return t=document.querySelectorAll('[data-js-vf="_priceTotal"]'),void b(e).forEach((function(e,r){e.classList.contains("vf-active")?(e.classList.remove("vf-active"),e.classList.remove("vf-bold"),t[r].classList.add("ws10-u--hidden")):(e.classList.add("vf-active"),e.classList.add("vf-bold"),t[r].classList.remove("ws10-u--hidden"))}));var t}))}))},v.onFrameworkReady=function(){console.log("Site functionality ready")}}]);