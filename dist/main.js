/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={184:(e,r)=>{var t;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var i=n.apply(null,t);i&&e.push(i)}}else if("object"===a){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var s in t)o.call(t,s)&&t[s]&&e.push(s)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(t=function(){return n}.apply(r,[]))||(e.exports=t)}()}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";var e=t(184),r=t.n(e);!function(){for(var e=document.getElementById("grid"),t=document.getElementById("grid2"),o=0;o<10;o++)for(var n=0;n<10;n++){var a=document.createElement("div"),i=document.createElement("div");a.className=r()("bg-white","border","border-black","aspect-w-1","aspect-h-1"),i.className=r()("bg-white","hover:bg-yellow-200","border","border-black","aspect-w-1","aspect-h-1","cursor-pointer","square"),e.appendChild(a),t.appendChild(i)}}(),document.querySelectorAll(".square").forEach((function(e){e.addEventListener("click",(function(){e.classList.remove("bg-white"),e.classList.add("bg-green-500")}))}))})()})();