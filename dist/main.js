!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class a{static homeDetails(){let e=document.querySelector(".content"),t=document.createElement("div");t.setAttribute("class","home_details");let n=document.createElement("h2");n.innerHTML="Welcome to",t.append(n);let a=document.createElement("h1");a.innerHTML="food fest hotel",t.append(a);let i=document.createElement("h3");i.innerHTML="experience the difference",t.append(i),e.append(t)}static homePage(){let e=document.getElementById("content"),t=document.createElement("video");[{autoplay:""},{muted:""},{loop:""},{id:"myVideo"}].forEach(e=>t.setAttribute(Object.getOwnPropertyNames(e),Object.values(e))),e.append(t);let n=document.createElement("source");[{src:"../assets/images/video.mp4"},{type:"video/mp4"}].forEach(e=>n.setAttribute(Object.getOwnPropertyNames(e),Object.values(e))),t.appendChild(n),class{static appNavigation(){let e=["home","menu","contacts"],t=document.getElementById("content"),n=document.createElement("div");n.setAttribute("class","content");let i=document.createElement("div");i.setAttribute("class","menu_bar");let s=document.createElement("nav");for(let t=0;t<e.length;t++){let n=document.createElement("li");n.setAttribute("id",e[t]),n.innerHTML=e[t],s.append(n)}i.append(s),n.append(i),t.appendChild(n),document.getElementById("home").addEventListener("click",e=>{$(".home_details").remove(),a.homeDetails()}),document.getElementById("menu").addEventListener("click",e=>{$(".home_details").remove(),class{static displayMenu(){let e=class{static showItems(){return{menuList:[{Name:"Italian breakFirst",price:185,image:"../assets/images/1.jpg"},{Name:"Desert",price:200,image:"../assets/images/2.jpg"},{Name:"lunch meal",price:150,image:"../assets/images/4.jpg"},{Name:"Chinese meal",price:400,image:"../assets/images/5.jpg"},{Name:"Chinese meal",price:400,image:"../assets/images/5.jpg"},{Name:"Chinese meal",price:400,image:"../assets/images/5.jpg"},{Name:"Chinese meal",price:400,image:"../assets/images/5.jpg"},{Name:"Chinese meal",price:400,image:"../assets/images/5.jpg"}]}}}.showItems(),t=e.menuList,n=document.getElementById("content"),a=document.createElement("div");a.setAttribute("class","home_details"),a.setAttribute("id","menu_details");let i=document.createElement("div");i.setAttribute("class","container");let s=document.createElement("div");s.setAttribute("class","row");for(let n=0;n<t.length;n++){let t=document.createElement("div");t.setAttribute("class","col-md-3"),t.innerHTML=`<div class="card">\n            <img src="${e.menuList[n].image}" alt="${e.menuList[n].Name}" style="width:100%">\n            <h1>${e.menuList[n].Name}</h1>\n            <p class="price">$ ${e.menuList[n].price}</p>\n          </div>`,s.append(t)}i.append(s),a.append(i),n.append(a)}}.displayMenu()}),document.getElementById("contacts").addEventListener("click",e=>{$(".home_details").remove(),class{static displayContact(){let e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("class","home_details"),t.setAttribute("id","contact_details");t.innerHTML='<div class="container form_input_container">\n        <div style="text-align:center">\n          <h2>Contact Us</h2>\n          <p>Swing by for a meal, or leave us a message:</p>\n        </div>\n        <div class="row" id ="form_input">\n          <div class="column">\n            <img src="../assets/images/7.jpg" style="width:100%">\n          </div>\n          <div class="column">\n            <form action="#">\n              <label for="fname">First Name</label>\n              <input type="text" id="fname" name="firstname" placeholder="Your name..">\n              <label for="lname">Last Name</label>\n              <input type="text" id="lname" name="lastname" placeholder="Your last name..">\n              <label for="country">Country</label>\n              <select id="country" name="country">\n                <option value="australia">Australia</option>\n                <option value="canada">Canada</option>\n                <option value="usa">USA</option>\n              </select>\n              <label for="subject">Subject</label>\n              <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>\n              <input type="submit" value="Submit">\n            </form>\n          </div>\n        </div>\n      </div>',e.append(t)}}.displayContact()})}}.appNavigation(),this.homeDetails()}}window.onload=function(){a.homePage()}}]);