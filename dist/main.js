!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);window.addEventListener("load",class{static homeDetails(){let e=document.querySelector(".content");console.log(e);let t=document.createElement("div");t.setAttribute("class","home_details");let n=document.createElement("h2");n.innerHTML="Welcome to",t.append(n);let o=document.createElement("h1");o.innerHTML="food fest hotel",t.append(o);let r=document.createElement("h3");r.innerHTML="experience the difference",t.append(r),e.append(t)}static homePage(){let e=document.getElementById("content"),t=document.createElement("video");[{autoplay:""},{muted:""},{loop:""},{id:"myVideo"}].forEach(e=>t.setAttribute(Object.getOwnPropertyNames(e),Object.values(e))),e.append(t);let n=document.createElement("source");[{src:"../assets/images/video.mp4"},{type:"video/mp4"}].forEach(e=>n.setAttribute(Object.getOwnPropertyNames(e),Object.values(e))),t.appendChild(n),class{static appNavigation(){let e=["home","menu","contacts"],t=document.getElementById("content"),n=document.createElement("div");n.setAttribute("class","content");let o=document.createElement("div");o.setAttribute("class","menu_bar");let r=document.createElement("nav");for(let t=0;t<e.length;t++){let n=document.createElement("li");n.innerHTML=e[t],r.append(n)}o.append(r),n.append(o),t.appendChild(n)}}.appNavigation(),this.homeDetails()}}.homePage())}]);