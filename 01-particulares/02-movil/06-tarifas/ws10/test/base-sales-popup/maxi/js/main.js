/**
 * Vodafone Reboot Framework: Version 2.7.1. Generation Date: 2021-02-12T11:05:09.267Z
 */

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),performance&&performance.mark&&performance.mark("micro exec");var r,o,i=document.querySelector("link[data-ws10-microcss]"),c=function(e,t,n){var r=null;for(;e;){if(e.matches(t)){r=e;break}if(n&&e.matches(n))break;e=e.parentElement}return r}(document.querySelector("#maxi"),"[data-ws10-microsite]"),a=c?c.dataset.pathmicrosite:"",u=document.documentElement.clientWidth,s=u>1024,l=u<=1024&&u>=768,d=u<768;function f(){p.cssLoaded||(document.querySelector("#maxi")&&document.querySelector("#maxi").removeAttribute("style"),p.cssLoaded=!0,p.onStylesReady(),performance&&performance.mark&&performance.mark("micro css ready"))}function m(){document.removeEventListener("ws10:frameworkReady",m),window.ws10.utils.init(document.querySelector("#maxi")),p.onFrameworkReady(),performance&&performance.mark&&(performance.mark("micro js ready"),console.timeEnd("microsite instantiation"))}function y(){var e=document.styleSheets,t=0;return[].forEach.call(e,(function(e){var n=e.href||"";-1!==n.indexOf(a+"css/ws10")&&(console.log("WS10 CSS Loaded"),t++),-1!==n.indexOf(a+"css/styles.css")&&(console.log("MICRO CSS Loaded"),t++)})),2===t}y()?y()&&setTimeout(f,100):i?(r=setInterval((function(){i.sheet.rules&&i.sheet.rules.length>0&&(clearInterval(r),clearTimeout(o),f())}),100),o=setTimeout((function(){console.warn("Microsite visible by 3s timeout"),clearInterval(r),clearTimeout(o),f()}),3e3)):setTimeout(f,100),window.ws10?setTimeout(m,100):document.addEventListener("ws10:frameworkReady",m);var p={isDesktop:s,isTablet:l,isMobile:d,micrositeId:"#maxi",micrositePath:a,init:function(){},cssLoaded:!1,onStylesReady:function(){return null},onFrameworkReady:function(){return null}},v=p;function b(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}v.onStylesReady=function(){console.log("Site visually ready");var e=document.querySelectorAll('[data-js-vf="_buttonTypeLine"]'),t=document.querySelectorAll('[data-js-vf="_portability"]'),n=document.querySelectorAll('[data-js-vf="_newNumber"]'),r=document.querySelector('[data-js-vf="_showOrHideSticky"]'),o=document.querySelector('[data-js-vf="_stickyRate"]'),i=document.querySelector('[data-js="_banner"]'),c=document.querySelector('[data-js-vf="_ticket"]'),a=document.querySelector(".MDDfooter"),u=document.querySelector(".mdd-desktop"),s=document.documentElement.clientWidth,l=s>1024,d=s<=1024&&s>=768;b(e).forEach((function(e){e.addEventListener("click",(function(){return function(e){"newNumber"===e.getAttribute("data-js-vf-value")?b(n).forEach((function(e,n){e.classList.remove("ws10-u--hidden"),t[n].classList.add("ws10-u--hidden")})):b(t).forEach((function(e,t){e.classList.remove("ws10-u--hidden"),n[t].classList.add("ws10-u--hidden")}))}(e)}))})),document.addEventListener("scroll",(function(){r.getBoundingClientRect().top<=0?o.classList.remove("ws10-u--hidden"):o.classList.add("ws10-u--hidden")})),(l||d)&&(document.addEventListener("scroll",(function(){i.getBoundingClientRect().top<0?c.setAttribute("style","position:fixed; top: 50px;"):c.setAttribute("style","position:absolute;")})),document.addEventListener("scroll",(function(){var e=c.offsetHeight,t=u.offsetHeight;a.getBoundingClientRect().top-(e+t)<0?c.classList.add("vf-ticket__opacity0"):c.classList.remove("vf-ticket__opacity0")})))},v.onFrameworkReady=function(){console.log("Site functionality ready")}}]);