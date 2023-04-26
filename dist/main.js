/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={184:(t,r)=>{var e;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],r=0;r<arguments.length;r++){var e=arguments[r];if(e){var i=typeof e;if("string"===i||"number"===i)t.push(e);else if(Array.isArray(e)){if(e.length){var a=o.apply(null,e);a&&t.push(a)}}else if("object"===i){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){t.push(e.toString());continue}for(var u in e)n.call(e,u)&&e[u]&&t.push(u)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(e=function(){return o}.apply(r,[]))||(t.exports=e)}()}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{"use strict";var t=e(184),r=e.n(t);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==n(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(r){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.length=r,this.hits=0,this.sunk=!1}var r,e;return r=t,(e=[{key:"hitRegister",value:function(){return this.hits++}},{key:"isSunk",value:function(){return this.hits===this.length}}])&&o(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function u(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,r){if("object"!==a(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}var l=function(){function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.board=this.buildBoard(),this.ships=[],this.shipsSunked()}var r,e;return r=t,(e=[{key:"buildBoard",value:function(){for(var t=[],r=0;r<10;r++){t[r]=[];for(var e=0;e<10;e++)t[r][e]=null}return t}},{key:"addShip",value:function(t,r,e,n){var o=this,i=[];if(r>=0&&r<10&&e>=0&&e<10){for(var u=0;u<t.length;u++)if(n){if(e+u>=10)return;i.push([r,e+u])}else{if(r+u>=10)return;i.push([r+u,e])}for(var l=function(t){for(var r=0;r<o.ships.length;r++)if(o.ships[r].positions.some((function(r){return r[0]===i[t][0]&&r[1]===i[t][1]})))return{v:void 0}},s=0;s<i.length;s++){var c=l(s);if("object"===a(c))return c.v}return this.ships.push({positions:i,ship:t}),!0}}},{key:"receiveAttack",value:function(t,r){if(null===this.board[t][r]){for(var e=null,n=0;n<this.ships.length;n++)if(this.ships[n].positions.some((function(e){return e[0]===t&&e[1]===r}))){e=this.ships[n];break}if(e)return e.ship.hitRegister(),e.ship.isSunk()&&(e.ship.sunk=!0),void(this.board[t][r]=!0);this.board[t][r]=!1}}},{key:"shipsSunked",value:function(){return this.ships.every((function(t){return t.ship.sunk}))}}])&&u(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}();function s(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,u=[],l=!0,s=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;l=!1}else for(;!(l=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);l=!0);}catch(t){s=!0,o=t}finally{try{if(!l&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(t,r)||function(t,r){if(t){if("string"==typeof t)return c(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(t,r):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function f(){for(var t=new l,r=0,e=[new i(2),new i(2),new i(3),new i(4),new i(5)];r<e.length;r++)for(var n=e[r],o=!1;!o;){var a=s(d(),2),u=a[0],c=a[1],f=Boolean(Math.round(Math.random()));o=t.addShip(n,u,c,f)}return t}function d(){return[Math.floor(10*Math.random()),Math.floor(10*Math.random())]}function p(){for(var t=new l,r=0,e=[new i(2),new i(2),new i(3),new i(4),new i(5)];r<e.length;r++)for(var n=e[r],o=!1;!o;){var a=s(d(),2),u=a[0],c=a[1],f=Boolean(Math.round(Math.random()));o=t.addShip(n,u,c,f)}return t}function h(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(t){if("string"==typeof t)return v(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?v(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==e.return||e.return()}finally{if(u)throw i}}}}function v(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var y=!0,b=p(),m=f();function g(){for(var t=document.getElementById("grid"),e=document.getElementById("grid2"),n=0;n<10;n++)for(var o=0;o<10;o++){var i=document.createElement("div"),a=document.createElement("div");i.className=r()("bg-white","border","border-black","aspect-w-1","aspect-h-1","cursor-pointer","square2"),i.setAttribute("data-row",n),i.setAttribute("data-col",o),a.className=r()("bg-white","border","border-black","aspect-w-1","aspect-h-1","cursor-pointer","square"),a.setAttribute("data-row",n),a.setAttribute("data-col",o),t.appendChild(i),e.appendChild(a)}var u,l=h(b.ships);try{for(l.s();!(u=l.n()).done;){var s,c=h(u.value.positions);try{for(c.s();!(s=c.n()).done;){var f=s.value,d=f[0],p=f[1],v=e.querySelector('[data-row="'.concat(d,'"][data-col="').concat(p,'"]'));v.classList.remove("bg-white"),v.classList.add("bg-red-700")}}catch(t){c.e(t)}finally{c.f()}}}catch(t){l.e(t)}finally{l.f()}var y,g=h(m.ships);try{for(g.s();!(y=g.n()).done;){var w,S=h(y.value.positions);try{for(S.s();!(w=S.n()).done;){var A=w.value,k=A[0],j=A[1],E=t.querySelector('[data-row="'.concat(k,'"][data-col="').concat(j,'"]'));E.classList.remove("bg-white"),E.classList.add("bg-black")}}catch(t){S.e(t)}finally{S.f()}}}catch(t){g.e(t)}finally{g.f()}}function w(){m=f(),b=p();var t=document.getElementById("grid"),r=document.getElementById("grid2");t.innerHTML="",r.innerHTML="",y=!0,document.querySelectorAll(".selected").forEach((function(t){return t.classList.remove("selected")})),g(),S()}function S(){document.querySelectorAll(".square").forEach((function(t){t.addEventListener("click",(function(){y&&(A(b,t),b.shipsSunked()&&(window.alert("Ha ganado el JUGADOR"),w()))}))})),document.querySelectorAll(".square2").forEach((function(t){t.addEventListener("click",(function(){y||(A(m,t),m.shipsSunked()&&(window.alert("Ha ganado la IA"),w()))}))}))}function A(t,r){if(!r.classList.contains("selected")){var e=parseInt(r.getAttribute("data-row")),n=parseInt(r.getAttribute("data-col"));t.receiveAttack(e,n),r.classList.add("selected"),r.removeEventListener("click",A),y=!y}}g(),S()})()})();