!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r,o=n(1),u=(r=o)&&r.__esModule?r:{default:r};u.default.onStylesReady=function(){console.log("Site visually ready")},u.default.onStylesReady()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,u,i=document.documentElement.clientWidth;r=i>969,o=i<=969&&i>=768,u=i<768&&i>300;var l=function(e,t,n){for(var r=null;e;){if(e.matches(t)){r=e;break}if(n&&e.matches(n))break;e=e.parentElement}return r}(document.querySelector("#acelerator"),"[data-pathmicrosite]"),c={isDesktop:r,isTablet:o,isMobile:u,micrositeId:"#acelerator",micrositePath:l?l.dataset.pathmicrosite:"",init:function(){},cssLoaded:!1,onStylesReady:function(){return null}};document.querySelector("link[data-microcss]")&&(window._vf._utils.init(document.querySelector(".vfes-ms-content")),document.querySelector(".vfes-ms-content").removeAttribute("style"),c.cssLoaded=!0,c.onStylesReady()),t.default=c}]);