/**
 * Vodafone Reboot Framework: Version 2.4.1. Generation Date: 2020-09-29T10:01:53.987Z
 */

!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const n=document.querySelector("link[data-ws10-microcss]"),r=function(e,t,o){let n=null;for(;e;){if(e.matches(t)){n=e;break}if(o&&e.matches(o))break;e=e.parentElement}return n}(document.querySelector("#mini"),"[data-ws10-microsite]"),i=r?r.dataset.pathmicrosite:"";let s=document.documentElement.clientWidth,c=s>1024,d=s<=1024&&s>=768,u=s<768;function l(){m.cssLoaded||(document.querySelector("#mini")&&document.querySelector("#mini").removeAttribute("style"),m.cssLoaded=!0,m.onStylesReady())}function a(){document.removeEventListener("ws10:frameworkReady",a),window.ws10.utils.init(document.querySelector("#mini")),m.onFrameworkReady()}function f(){const e=document.styleSheets;let t=0;return[].forEach.call(e,e=>{const o=e.href||"";-1!==o.indexOf(i+"css/ws10")&&(console.log("WS10 CSS Loaded"),t++),-1!==o.indexOf(i+"css/styles.css")&&(console.log("MICRO CSS Loaded"),t++)}),2===t}f()?f()&&setTimeout(l,100):n?(n.addEventListener("load",l),setTimeout(l,3e3)):setTimeout(l,100),window.ws10?setTimeout(a,100):document.addEventListener("ws10:frameworkReady",a);const m={isDesktop:c,isTablet:d,isMobile:u,micrositeId:"#mini",micrositePath:i,init:function(){},cssLoaded:!1,onStylesReady:()=>null,onFrameworkReady:()=>null};var y=m;y.onStylesReady=()=>{console.log("Site visually ready");const e=document.querySelectorAll('[data-js-vf="_buttonTypeLine"]'),t=document.querySelectorAll('[data-js-vf="_portability"]'),o=document.querySelectorAll('[data-js-vf="_newNumber"]'),n=document.querySelector('[data-js-vf="_showOrHideSticky"]'),r=document.querySelector('[data-js-vf="_stickyRate"]'),i=document.querySelector('[data-js="_banner"]'),s=document.querySelector('[data-js-vf="_ticket"]'),c=document.querySelector(".MDDfooter"),d=document.querySelector(".mdd-desktop");let u=document.documentElement.clientWidth,l=u>1024,a=u<=1024&&u>=768;[...e].forEach(e=>{e.addEventListener("click",()=>function(e){"newNumber"===e.getAttribute("data-js-vf-value")?[...o].forEach((e,o)=>{e.classList.remove("ws10-u--hidden"),t[o].classList.add("ws10-u--hidden")}):[...t].forEach((e,t)=>{e.classList.remove("ws10-u--hidden"),o[t].classList.add("ws10-u--hidden")})}(e))}),document.addEventListener("scroll",(function(){n.getBoundingClientRect().top<=0?r.classList.remove("ws10-u--hidden"):r.classList.add("ws10-u--hidden")})),(l||a)&&(document.addEventListener("scroll",(function(){i.getBoundingClientRect().top<0?s.setAttribute("style","position:fixed; top: 50px;"):s.setAttribute("style","position:absolute;")})),document.addEventListener("scroll",(function(){let e=s.offsetHeight,t=d.offsetHeight;c.getBoundingClientRect().top-(e+t)<0?s.classList.add("vf-ticket__opacity0"):s.classList.remove("vf-ticket__opacity0")})))},y.onFrameworkReady=()=>{console.log("Site functionality ready")}}]);