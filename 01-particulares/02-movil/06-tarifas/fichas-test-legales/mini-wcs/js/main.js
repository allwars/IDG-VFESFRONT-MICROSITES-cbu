/**
 * Vodafone Reboot Framework: Version 2.5.1. Generation Date: 2020-10-09T11:49:14.379Z
 */

!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const n=document.querySelector("link[data-microcss]"),i=function(e,t,o){let n=null;for(;e;){if(e.matches(t)){n=e;break}if(o&&e.matches(o))break;e=e.parentElement}return n}(document.querySelector("#mini"),"[data-pathmicrosite]"),s=i?i.dataset.pathmicrosite:"";let r=document.documentElement.clientWidth,c=r>969,a=r<=969&&r>=768,d=r<768&&r>300;function l(){f.cssLoaded||(document.querySelector("#mini").removeAttribute("style"),f.cssLoaded=!0,f.onStylesReady())}function u(){window.vfes._utils.init(document.querySelector("#mini")),f.onFrameworkReady()}function m(){const e=document.styleSheets;let t=0;return[].forEach.call(e,e=>{const o=e.href||"";-1!==o.indexOf(s+"css/ws2r")&&(console.log("WS2RCSS Loaded"),t++),-1!==o.indexOf(s+"css/styles.css")&&(console.log("MICROCSS Loaded"),t++)}),2===t}m()?m()&&setTimeout(l,100):(n.addEventListener("load",l),setTimeout(l,3e3)),window.vfes?setTimeout(u,100):document.addEventListener("vfes:frameworkReady",u);const f={isDesktop:c,isTablet:a,isMobile:d,micrositeId:"#mini",micrositePath:s,init:function(){},cssLoaded:!1,onStylesReady:()=>null,onFrameworkReady:()=>null};var y=f;const v=document.querySelector('[data-vfms-js="_rate"]'),h=document.querySelector('[data-vfms-js="_ticket"]'),S=document.querySelector(".mdd-"+(window.matchMedia("(min-width: 970px)").matches?"desktop":"mobile")).lastElementChild,p=document.querySelector('[vfms-data-show="sticky"]'),b=document.querySelector('[vfms-data-show="show"]'),w=document.querySelector('[vfms-data-js="_typeButtons"]'),g={init:()=>{document.addEventListener("scroll",g.throttle(g.moveTicket,100)),document.addEventListener("scroll",g.throttle(g.showSticky,100))},moveTicket:()=>{let e=h.getBoundingClientRect(),t=S.getBoundingClientRect(),o=v.getBoundingClientRect();o.top<t.height&&o.bottom-e.height/2>t.height?(h.classList.add("fixed"),w.classList.add("vfms-hide-desktop")):(h.classList.remove("fixed"),w.classList.remove("vfms-hide-desktop"))},showSticky:()=>{p.getBoundingClientRect().top<=0?b.classList.remove("vfms-hide"):b.classList.add("vfms-hide")},throttle:(e,t)=>{let o,n;return function(){const i=this,s=arguments;n?(clearTimeout(o),o=setTimeout(()=>{Date.now()-n>=t&&(e.apply(i,s),n=Date.now())},t-(Date.now()-n))):(e.apply(i,s),n=Date.now())}}};var L=g;const k=document.querySelector('[data-vfms-js="_ticket"]'),j=document.querySelector('[data-vfms-js="_cloneRate"]');var q={init:()=>{j.parentNode.insertBefore(k,j.nextSibling)}};y.onStylesReady=()=>{console.log("Site visually ready")},y.onFrameworkReady=()=>{localStorage.removeItem("coverage"),console.log("Site functionality ready"),q.init(),L.init(),window.scrollTo(0,0);const e=document.querySelectorAll('[vfms-data-js="_newNumber"]'),t=document.querySelectorAll('[vfms-data-js="_linkPortability"]'),o=document.querySelectorAll('[vfms-data-js="_linkNewNumber"]');[...e].forEach(e=>{e.addEventListener("click",()=>function(e){if(!e.classList.contains("active")){const n=e.getAttribute("data-new-number");document.querySelector('[vfms-data-js="_newNumber"].active').classList.remove("active"),e.classList.add("active"),"portability"===n?[...t].forEach((e,t)=>{e.classList.remove("hide"),o[t].classList.add("hide")}):[...o].forEach((e,o)=>{e.classList.remove("hide"),t[o].classList.add("hide")})}}(e))})}}]);