/**
 * Vodafone Reboot Framework: Version 2.7.1. Generation Date: 2020-12-22T15:37:32.552Z
 */

!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),performance&&performance.mark&&performance.mark("micro exec");var n=document.querySelector("link[data-ws10-microcss]"),o=function(e,t,r){var n=null;for(;e;){if(e.matches(t)){n=e;break}if(r&&e.matches(r))break;e=e.parentElement}return n}(document.querySelector("#plp"),"[data-ws10-microsite]"),i=o?o.dataset.pathmicrosite:"",a=document.documentElement.clientWidth,c=a>1024,s=a<=1024&&a>=768,u=a<768;function l(){m.cssLoaded||(document.querySelector("#plp")&&document.querySelector("#plp").removeAttribute("style"),m.cssLoaded=!0,m.onStylesReady(),performance&&performance.mark&&performance.mark("micro css ready"))}function d(){document.removeEventListener("ws10:frameworkReady",d),window.ws10.utils.init(document.querySelector("#plp")),m.onFrameworkReady(),performance&&performance.mark&&(performance.mark("micro js ready"),console.timeEnd("microsite instantiation"))}function f(){var e=document.styleSheets,t=0;return[].forEach.call(e,(function(e){var r=e.href||"";-1!==r.indexOf(i+"css/ws10")&&(console.log("WS10 CSS Loaded"),t++),-1!==r.indexOf(i+"css/styles.css")&&(console.log("MICRO CSS Loaded"),t++)})),2===t}f()?f()&&setTimeout(l,100):n?(n.addEventListener("load",l),setTimeout((function(){console.warn("Microsite visible by 3s timeout"),l()}),3e3)):setTimeout(l,100),window.ws10?setTimeout(d,100):document.addEventListener("ws10:frameworkReady",d);var m={isDesktop:c,isTablet:s,isMobile:u,micrositeId:"#plp",micrositePath:i,init:function(){},cssLoaded:!1,onStylesReady:function(){return null},onFrameworkReady:function(){return null}},y=m;function p(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}y.onStylesReady=function(){console.log("Site visually ready");var e=document.querySelectorAll('[data-js-vf="_buttonVelocity"]');p(e).forEach((function(t){t.addEventListener("click",(function(){return t=document.querySelectorAll('[data-js-vf="_priceTotal"]'),void p(e).forEach((function(e,r){e.classList.contains("vf-active")?(e.classList.remove("vf-active"),e.classList.remove("vf-bold"),t[r].classList.add("ws10-u--hidden")):(e.classList.add("vf-active"),e.classList.add("vf-bold"),t[r].classList.remove("ws10-u--hidden"))}));var t}))}))},y.onFrameworkReady=function(){console.log("Site functionality ready")}}]);