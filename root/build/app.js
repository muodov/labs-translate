!function(t){var e={};function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([
/*!****************************!*\
  !*** ./client/styles.scss ***!
  \****************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var a=n(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */1),s=n(/*! !../node_modules/css-loader/dist/cjs.js??ref--4-1!../node_modules/sass-loader/dist/cjs.js!./styles.scss */2);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var r={insert:"head",singleton:!1},o=(a(s,r),s.locals?s.locals:{});t.exports=o},
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var a,s=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function l(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function i(t,e){for(var n={},a=[],s=0;s<t.length;s++){var r=t[s],i=e.base?r[0]+e.base:r[0],_=n[i]||0,d="".concat(i," ").concat(_);n[i]=_+1;var c=l(d),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==c?(o[c].references++,o[c].updater(u)):o.push({identifier:d,updater:h(u,e),references:1}),a.push(d)}return a}function _(t){var e=document.createElement("style"),a=t.attributes||{};if(void 0===a.nonce){var s=n.nc;s&&(a.nonce=s)}if(Object.keys(a).forEach((function(t){e.setAttribute(t,a[t])})),"function"==typeof t.insert)t.insert(e);else{var o=r(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var d,c=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function u(t,e,n,a){var s=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(t.styleSheet)t.styleSheet.cssText=c(e,s);else{var r=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function p(t,e,n){var a=n.css,s=n.media,r=n.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),r&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var f=null,y=0;function h(t,e){var n,a,s;if(e.singleton){var r=y++;n=f||(f=_(e)),a=u.bind(null,n,r,!1),s=u.bind(null,n,r,!0)}else n=_(e),a=p.bind(null,n,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=s());var n=i(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var a=0;a<n.length;a++){var s=l(n[a]);o[s].references--}for(var r=i(t,e),_=0;_<n.length;_++){var d=l(n[_]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=r}}}},
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js!./client/styles.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){(e=n(/*! ../node_modules/css-loader/dist/runtime/api.js */3)(!1)).push([t.i,".styles__note___2iv3k{position:fixed;bottom:-300px;left:0;transition:all .3s;width:100%;font-size:16px;pointer-events:none;background:rgba(229,71,71,0.8);color:white;text-align:center;padding:10px}.styles__note___2iv3k.styles__shown___2JVlz{bottom:0}.styles__translate-button___1DVzm{position:fixed;bottom:-100px;opacity:0;transition:all .3s;width:100%;height:100px;background:url(\"https://surfly-labs-translate.herokuapp.com/translate-icon-bottom.png\") no-repeat center;cursor:pointer}.styles__translate-button___1DVzm.styles__shown___2JVlz{bottom:0;opacity:1}.styles__translate-card___2vQyg{position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(10,10,10,0.5);display:flex;justify-content:center;align-items:center;z-index:9999999}.styles__translate-card___2vQyg .styles__translate-card-content___1fVsg{background:white;border-radius:6px;padding:10px;width:50%;min-width:300px;max-height:80%;position:relative;display:flex;flex-direction:column}.styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-header___1SpaK{margin:0;padding:10px 0;border-bottom:solid black 1px}.styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-body___35jLh{overflow:auto;max-height:80%;max-width:100%}.styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-body___35jLh .styles__translate-controls___2-ndI{padding:10px 0}.styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-body___35jLh .styles__translate-content___1LTYz{max-width:100%}.styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-footer___3DXOZ{border-top:solid 1px black;padding-top:10px;margin-top:10px}.styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-footer___3DXOZ a{text-decoration:none;color:#e54747}.styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-close___2XEdi{cursor:pointer;position:absolute;top:10px;right:10px;width:23px;height:23px;opacity:0.3}.styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-close___2XEdi:hover{opacity:1}.styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-close___2XEdi:before,.styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-close___2XEdi:after{position:absolute;left:11px;content:' ';height:24px;width:2px;background-color:#333}.styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-close___2XEdi:before{transform:rotate(45deg)}.styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-close___2XEdi:after{transform:rotate(-45deg)}@-webkit-keyframes styles__loading___189dP{to{-webkit-transform:rotate(360deg)}}@-moz-keyframes styles__loading___189dP{to{-moz-transform:rotate(360deg)}}@-ms-keyframes styles__loading___189dP{.translate-card .translate-card-content to{-ms-transform:rotate(360deg)}}@keyframes styles__loading___189dP{to{transform:rotate(360deg)}}.styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__spinner____9h4Y{width:40px;height:40px;margin:20px auto;border-radius:50%;background:transparent;border-top:4px solid #fff;border-right:4px solid #fff;border-bottom:4px solid #777;border-left:4px solid #777;-webkit-animation:styles__loading___189dP 1.2s infinite linear;-moz-animation:styles__loading___189dP 1.2s infinite linear;-ms-animation:styles__loading___189dP 1.2s infinite linear;animation:styles__loading___189dP 1.2s infinite linear}\n",""]),e.locals={note:"styles__note___2iv3k",shown:"styles__shown___2JVlz","translate-button":"styles__translate-button___1DVzm","translate-card":"styles__translate-card___2vQyg","translate-card-content":"styles__translate-card-content___1fVsg","translate-header":"styles__translate-header___1SpaK","translate-body":"styles__translate-body___35jLh","translate-controls":"styles__translate-controls___2-ndI","translate-content":"styles__translate-content___1LTYz","translate-footer":"styles__translate-footer___3DXOZ","translate-close":"styles__translate-close___2XEdi",spinner:"styles__spinner____9h4Y",loading:"styles__loading___189dP"},t.exports=e},
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var s=(o=a,l=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(i," */")),r=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */")}));return[n].concat(r).concat([s]).join("\n")}var o,l,i;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,a){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(a)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(s[o]=!0)}for(var l=0;l<t.length;l++){var i=[].concat(t[l]);a&&s[i[0]]||(n&&(i[2]?i[2]="".concat(n," and ").concat(i[2]):i[2]=n),e.push(i))}},e}},
/*!***********************************!*\
  !*** ./client/app.js + 2 modules ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./client/styles.scss (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Module is an entry point */function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a);let r;function o({word:t,src:e,dest:n}){console.log(t,e,n);let a={word:t};return n&&(a.dest=n),e&&(a.src=e),fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})}r="https://surfly-labs-translate.herokuapp.com/";let l=null,i=null,_=null,d="";const c=["az","be","bg","ca","cs","da","de","el","en","es","et","fi","fr","hr","hu","hy","it","lt","lv","mk","nl","no","pl","pt","ro","ru","sk","sl","sq","sr","sv","tr","uk"];function u(){l=document.createElement("div"),l.classList.add(s.a["translate-button"]),l.addEventListener("mousedown",()=>{p(),function(t,e){f(),i=document.createElement("div"),i.classList.add(s.a["translate-card"]),i.addEventListener("click",t=>{t.target===i&&f()});let n=document.createElement("div");n.classList.add(s.a["translate-card-content"]);let a=document.createElement("div");a.classList.add(s.a["translate-close"]),a.addEventListener("click",t=>{f()}),n.appendChild(a);let r=document.createElement("h1");r.classList.add(s.a["translate-header"]),r.textContent=t.length>10?t.slice(0,10)+"...":t,n.appendChild(r);let l=document.createElement("div");l.classList.add(s.a.spinner),n.appendChild(l);let _=document.createElement("div");_.classList.add(s.a["translate-footer"]),_.innerHTML='Powered by <a href="http://translate.yandex.com/" target="_blank">Yandex.Translate</a>',n.appendChild(_),i.appendChild(n),document.body.appendChild(i),o({word:t,dest:e}).then(e=>e.json().then(e=>{console.log("got translation",e);let a=document.createElement("div");a.classList.add(s.a["translate-controls"]);let r=document.createElement("select");c.forEach(t=>{let n=document.createElement("option");e.src===t&&(n.selected=!0),n.value=n.textContent=t,r.appendChild(n)});let i=document.createElement("span");i.textContent=" -> ";let _=document.createElement("select");function d(){n.replaceChild(l,p),o({word:t,src:r.value,dest:_.value}).then(t=>t.json().then(t=>{n.replaceChild(p,l),u.textContent=t.translation}))}c.forEach(t=>{let n=document.createElement("option");e.dst===t&&(n.selected=!0),n.value=n.textContent=t,_.appendChild(n)}),r.addEventListener("change",d),_.addEventListener("change",d),a.appendChild(r),a.appendChild(i),a.appendChild(_);let u=document.createElement("div");u.classList.add(s.a["translate-content"]),u.textContent=e.translation;let p=document.createElement("div");p.classList.add(s.a["translate-body"]),p.appendChild(a),p.appendChild(u),n.replaceChild(p,l)}))}(d)}),document.body.appendChild(l)}function p(){l&&l.parentNode&&(l.classList.remove(s.a.shown),_.classList.add(s.a.shown))}function f(){i&&i.parentNode&&(i.parentNode.removeChild(i),i=null)}function y(){let t=document.getSelection(),e=t.toString().trim();var n;e.length>0&&!i?(n=e,l||u(),d=n,l.classList.add(s.a.shown),_.classList.remove(s.a.shown)):p()}function h(){document.addEventListener("selectionchange",y),_=document.createElement("div"),_.classList.add(s.a.note),_.classList.add(s.a.shown),_.textContent="Welcome to the Surfly Labs Translation demo! Select text you would like to translate",document.body.appendChild(_),console.log("translation mixin initialized!")}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",t=>{h()}):h()}]);
//# sourceMappingURL=app.js.map