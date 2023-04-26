/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={184:(t,r)=>{var e;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],r=0;r<arguments.length;r++){var e=arguments[r];if(e){var i=typeof e;if("string"===i||"number"===i)t.push(e);else if(Array.isArray(e)){if(e.length){var a=o.apply(null,e);a&&t.push(a)}}else if("object"===i){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){t.push(e.toString());continue}for(var u in e)n.call(e,u)&&e[u]&&t.push(u)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(e=function(){return o}.apply(r,[]))||(t.exports=e)}()}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{"use strict";var t=e(184),r=e.n(t);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==n(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(r){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.length=r,this.hits=0,this.sunk=!1}var r,e;return r=t,(e=[{key:"hitRegister",value:function(){return this.hits++}},{key:"isSunk",value:function(){return this.hits===this.length}}])&&o(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function u(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,r){if("object"!==a(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}var l=function(){function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.board=this.buildBoard(),this.ships=[],this.shipsSunked()}var r,e;return r=t,(e=[{key:"buildBoard",value:function(){return Array.from({length:10},(function(){return Array(10).fill(null)}))}},{key:"addShip",value:function(t,r,e,n){var o=this,i=[];if(!(r>=0&&r<10&&e>=0&&e<10))return!1;for(var u=0;u<t.length;u++)if(n){if(e+u>=10)return!1;i.push([r,e+u])}else{if(r+u>=10)return!1;i.push([r+u,e])}for(var l=function(t){for(var r=0;r<o.ships.length;r++)if(o.ships[r].positions.some((function(r){return r[0]===i[t][0]&&r[1]===i[t][1]})))return{v:!1}},s=0;s<i.length;s++){var c=l(s);if("object"===a(c))return c.v}return this.ships.push({positions:i,ship:t}),!0}},{key:"receiveAttack",value:function(t,r){if(null===this.board[t][r]){for(var e=null,n=0;n<this.ships.length;n++)if(this.ships[n].positions.some((function(e){return e[0]===t&&e[1]===r}))){e=this.ships[n];break}if(e)return e.ship.hitRegister(),e.ship.isSunk()&&(e.ship.sunk=!0),void(this.board[t][r]=!0);this.board[t][r]=!1}}},{key:"shipsSunked",value:function(){return this.ships.every((function(t){return t.ship.sunk}))}}])&&u(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}();function s(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function c(){for(var t=new l,r=0,e=[new i(2),new i(2),new i(3),new i(4),new i(5)];r<e.length;r++)for(var n=e[r],o=!1;!o;){var a=(d=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],h=2,function(t){if(Array.isArray(t))return t}(d)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,u=[],l=!0,s=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;l=!1}else for(;!(l=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);l=!0);}catch(t){s=!0,o=t}finally{try{if(!l&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(d,h)||function(t,r){if(t){if("string"==typeof t)return s(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(t,r):void 0}}(d,h)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=a[0],c=a[1],f=Boolean(Math.round(Math.random()));o=t.addShip(n,u,c,f)}var d,h;return t}var f=function(t){var r=[];return{randomAttack:function(){for(var e=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());r.some((function(t){return t[0]===e&&t[1]===n}));)e=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());r.push([e,n]),t.receiveAttack(e,n);var o=t.ships.some((function(t){return t.positions.some((function(t){return t[0]===e&&t[1]===n}))}));return[e,n,o]},attacks:r}};function d(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=h(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==e.return||e.return()}finally{if(u)throw i}}}}function h(t,r){if(t){if("string"==typeof t)return y(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?y(t,r):void 0}}function y(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var v=!0,p=c(),m=c(),b=new f(m);const g=function(){function t(){for(var t=document.getElementById("grid"),e=document.getElementById("grid2"),n=0;n<10;n++)for(var o=0;o<10;o++){var i=document.createElement("div"),a=document.createElement("div");i.className=r()("bg-white","border","border-black","aspect-w-1","aspect-h-1","cursor-pointer","square2"),i.setAttribute("data-row",n),i.setAttribute("data-col",o),a.className=r()("bg-white","border","border-black","aspect-w-1","aspect-h-1","cursor-pointer","square","hover:bg-yellow-100"),a.setAttribute("data-row",n),a.setAttribute("data-col",o),t.appendChild(i),e.appendChild(a)}var u,l=d(p.ships);try{for(l.s();!(u=l.n()).done;){var s,c=d(u.value.positions);try{for(c.s();!(s=c.n()).done;){var f=s.value,h=f[0],y=f[1],v=e.querySelector('[data-row="'.concat(h,'"][data-col="').concat(y,'"]'));v.classList.remove("bg-white"),v.classList.add("bg-red-700")}}catch(t){c.e(t)}finally{c.f()}}}catch(t){l.e(t)}finally{l.f()}var b,g=d(m.ships);try{for(g.s();!(b=g.n()).done;){var S,w=d(b.value.positions);try{for(w.s();!(S=w.n()).done;){var A=S.value,k=A[0],j=A[1],M=t.querySelector('[data-row="'.concat(k,'"][data-col="').concat(j,'"]'));M.classList.remove("bg-white"),M.classList.add("bg-gray-400")}}catch(t){w.e(t)}finally{w.f()}}}catch(t){g.e(t)}finally{g.f()}}function e(){document.querySelectorAll(".square").forEach((function(t){t.addEventListener("click",n)}))}function n(){var t=event.target;if(v&&!t.classList.contains("selected")&&!t.classList.contains("missedShot")){if(function(t,r){var e=parseInt(r.getAttribute("data-row")),n=parseInt(r.getAttribute("data-col"));t.ships.some((function(t){return t.positions.some((function(t){return t[0]===e&&t[1]===n}))}))?r.classList.add("selected"):r.classList.add("missedShot"),t.receiveAttack(e,n),v=!v}(p,t),p.shipsSunked())return window.alert("Ha ganado el JUGADOR"),void o();setTimeout((function(){if(function(t){var r,e,o=(r=t.randomAttack(),e=3,function(t){if(Array.isArray(t))return t}(r)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,u=[],l=!0,s=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;l=!1}else for(;!(l=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);l=!0);}catch(t){s=!0,o=t}finally{try{if(!l&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(r,e)||h(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1],u=o[2],l=grid.querySelector('[data-row="'.concat(i,'"][data-col="').concat(a,'"]'));console.log(t),u?l.classList.add("selected"):l.classList.add("missedShot"),l.removeEventListener("click",n),v=!v}(b),m.shipsSunked())return window.alert("Ha ganado la IA"),void o()}),100)}}function o(){m=c(),p=c(),b=new f(p);var r=document.getElementById("grid"),n=document.getElementById("grid2");r.innerHTML="",n.innerHTML="",v=!0,document.querySelectorAll(".selected").forEach((function(t){return t.classList.remove("selected")})),document.querySelectorAll(".missedShot").forEach((function(t){return t.classList.remove("missedShot")})),t(),e()}return{loadBoard:t,loadShot:e}}();g.loadBoard(),g.loadShot()})()})();