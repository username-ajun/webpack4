!function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)t.d(e,o,function(r){return n[r]}.bind(null,o));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=12)}([function(n,r){n.exports=function(n){var r=[];return r.toString=function(){return this.map(function(r){var t=function(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var o=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(e),i=e.sources.map(function(n){return"/*# sourceURL="+e.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}return[t].join("\n")}(r,n);return r[2]?"@media "+r[2]+"{"+t+"}":t}).join("")},r.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(e[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&e[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),r.push(a))}},r}},function(n,r,t){var e={},o=function(n){var r;return function(){return void 0===r&&(r=n.apply(this,arguments)),r}}(function(){return window&&document&&document.all&&!window.atob}),i=function(n){var r={};return function(n,t){if("function"==typeof n)return n();if(void 0===r[n]){var e=function(n,r){return r?r.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}}(),a=null,c=0,s=[],f=t(4);function l(n,r){for(var t=0;t<n.length;t++){var o=n[t],i=e[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],r))}else{var c=[];for(a=0;a<o.parts.length;a++)c.push(b(o.parts[a],r));e[o.id]={id:o.id,refs:1,parts:c}}}}function u(n,r){for(var t=[],e={},o=0;o<n.length;o++){var i=n[o],a=r.base?i[0]+r.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};e[a]?e[a].parts.push(c):t.push(e[a]={id:a,parts:[c]})}return t}function p(n,r){var t=i(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var e=s[s.length-1];if("top"===n.insertAt)e?e.nextSibling?t.insertBefore(r,e.nextSibling):t.appendChild(r):t.insertBefore(r,t.firstChild),s.push(r);else if("bottom"===n.insertAt)t.appendChild(r);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(n.insertAt.before,t);t.insertBefore(r,o)}}function d(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var r=s.indexOf(n);r>=0&&s.splice(r,1)}function h(n){var r=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var e=function(){0;return t.nc}();e&&(n.attrs.nonce=e)}return g(r,n.attrs),p(n,r),r}function g(n,r){Object.keys(r).forEach(function(t){n.setAttribute(t,r[t])})}function b(n,r){var t,e,o,i;if(r.transform&&n.css){if(!(i="function"==typeof r.transform?r.transform(n.css):r.transform.default(n.css)))return function(){};n.css=i}if(r.singleton){var s=c++;t=a||(a=h(r)),e=x.bind(null,t,s,!1),o=x.bind(null,t,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var r=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",g(r,n.attrs),p(n,r),r}(r),e=function(n,r,t){var e=t.css,o=t.sourceMap,i=void 0===r.convertToAbsoluteUrls&&o;(r.convertToAbsoluteUrls||i)&&(e=f(e));o&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([e],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,t,r),o=function(){d(t),t.href&&URL.revokeObjectURL(t.href)}):(t=h(r),e=function(n,r){var t=r.css,e=r.media;e&&n.setAttribute("media",e);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){d(t)});return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}n.exports=function(n,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(r=r||{}).attrs="object"==typeof r.attrs?r.attrs:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=o()),r.insertInto||(r.insertInto="head"),r.insertAt||(r.insertAt="bottom");var t=u(n,r);return l(t,r),function(n){for(var o=[],i=0;i<t.length;i++){var a=t[i];(c=e[a.id]).refs--,o.push(c)}n&&l(u(n,r),r);for(i=0;i<o.length;i++){var c;if(0===(c=o[i]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete e[c.id]}}}};var m=function(){var n=[];return function(r,t){return n[r]=t,n.filter(Boolean).join("\n")}}();function x(n,r,t,e){var o=t?"":e.css;if(n.styleSheet)n.styleSheet.cssText=m(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}},function(n,r,t){var e=t(3);"string"==typeof e&&(e=[[n.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(e,o);e.locals&&(n.exports=e.locals)},function(n,r,t){(n.exports=t(0)(!1)).push([n.i,'\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video, input {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    vertical-align: baseline;\r\n    outline: none;\r\n    -webkit-tap-highlight-color:rgba(0,0,0,0);\r\n    line-height: 1;\r\n}\r\nhtml, body\r\n{\r\n  font-size: 16px;\r\n  color: #000;\r\n  /*background-color: #f5f5f5;*/\r\n  letter-spacing: 0.5px;\r\n  word-spacing: 1px;\r\n  font-family: "PingFangSc Regular", Arial, sans-serif;\r\n  /*height: 100vh;*/\r\n  margin: 0;\r\n  -ms-text-size-adjust: 100%;\r\n  -webkit-text-size-adjust: 100%;\r\n  -webkit-font-smoothing: antialiased; /*抗锯齿渲染*/\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n* {\r\n  -webkit-box-sizing: border-box;\r\n     -moz-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n*:before,\r\n*:after {\r\n  -webkit-box-sizing: border-box;\r\n     -moz-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n\r\na {\r\n  color: #007fff;\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n}\r\n/*a:hover,\r\na:focus, \r\na:active{\r\n  cursor: pointer;\r\n  outline: 0;\r\n  color: #007fff;\r\n  text-decoration: underline;\r\n}*/\r\nul, li, ol{\r\n  padding:0;\r\n  margin:0;\r\n  list-style: none;\r\n}\r\n\r\ninput, textarea {\r\n  /* padding:0.07rem .1rem;\r\n  line-height: normal;\r\n  border: 1px solid hsla(0,0%,59%,.2); */\r\n  outline: none;\r\n  /* background-color: rgba(227,231,236,.2);\r\n  border-radius: 2px; */\r\n}\r\ninput:focus , textarea:focus{\r\n      border-color: #007fff;\r\n    }\r\ninput:focus +i{color: #007fff !important;}   \r\n\r\n\r\n/*placeholder 字体颜色*/\r\ntextarea::-webkit-input-placeholder, input::-webkit-input-placeholder { /* WebKit, Blink, Edge */\r\n    color:    #C0C4CC;\r\n}\r\ntextarea::-webkit-input-placeholder, input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */\r\n   color:    #C0C4CC;\r\n}\r\ntextarea::-webkit-input-placeholder, input::-moz-placeholder { /* Mozilla Firefox 19+ */\r\n   color:    #C0C4CC;\r\n}\r\ntextarea::-webkit-input-placeholder, input:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n   color:    #C0C4CC;\r\n}\r\nimg{\r\n  width: 100%;\r\n}\r\n.left{\r\n  float: left;\r\n}\r\n.right{\r\n  float: right;\r\n}\r\n.content{\r\n  width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n.bg{\r\n  background: no-repeat;\r\n  background-size: 100% 100%;\r\n}\r\n/* 头部样式 */\r\n.header {\r\n  width: 100%;\r\n  min-width: 1200px;\r\n  height: 120px;\r\n  padding: 0 170px;\r\n  background: #f2f2f2;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.header .logo {\r\n  width: 250px;\r\n  height: 68px;\r\n}\r\n.header .nav {\r\n  overflow: hidden;\r\n}\r\n.header .nav li {\r\n  float: left;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin-right: 40px;\r\n  padding-bottom: 6px;\r\n  box-sizing: border-box;\r\n  cursor: pointer;\r\n}\r\n.header .nav li:last-child {\r\n  margin-right: 0;\r\n}\r\n.header .nav li:nth-child(2n) {\r\n  color: #000;\r\n  opacity: 0.3;\r\n}\r\n.header .nav li a {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  color: #333;\r\n}\r\n.header .nav li a:hover {\r\n  color: #ffcd1f;\r\n}\r\n.header .nav .active {\r\n  width: 75px;\r\n  color: #ffcd1f;\r\n  border-bottom: 2px solid #ffcd1f;\r\n}\r\n.header .nav .active a {\r\n  color: #ffcd1f;\r\n}\r\n/* 尾部样式 */\r\n.footer {\r\n  width: 100%;\r\n  height: 60px;\r\n  line-height: 60px;\r\n  text-align: center;\r\n  background: #292926;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-size: 14px;\r\n}\r\n\r\n/* 面包屑导航样式 */\r\n.column {\r\n  width: 1100px;\r\n  margin: 29px auto 50px;\r\n}\r\n.column a {\r\n  font-size: 16px;\r\n  color: #333333;\r\n  cursor: default;\r\n}\r\n.column .cursor {\r\n  cursor: pointer;\r\n}\r\n.column .cursor:hover {\r\n  color: #ffcd1f;\r\n}\r\n\r\n\r\n\r\n\r\n',""])},function(n,r){n.exports=function(n){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=r.protocol+"//"+r.host,e=t+r.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,r){var o,i=r.trim().replace(/^"(.*)"$/,function(n,r){return r}).replace(/^'(.*)'$/,function(n,r){return r});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:e+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},,,,,,,,function(n,r,t){"use strict";t(2),t(13)},function(n,r,t){var e=t(14);"string"==typeof e&&(e=[[n.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(e,o);e.locals&&(n.exports=e.locals)},function(n,r,t){(n.exports=t(0)(!1)).push([n.i,".about {\n  width: 100%;\n  min-width: 1300px;\n  height: 500px;\n  background-image: url(https://cdn-statis.mangguokandian.com/mg-web-pc/about1.jpg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.about .h1 {\n  font-size: 64px;\n  font-weight: normal;\n  font-stretch: normal;\n  letter-spacing: 0px;\n  color: #333333;\n  text-align: center;\n}\n.containe {\n  width: 980px;\n  overflow: hidden;\n  margin: 83px auto 76px;\n}\n.containe .left {\n  width: 380px;\n  height: 480px;\n  background-image: url(https://cdn-statis.mangguokandian.com/mg-web-pc/about2.jpg);\n  margin-right: 98px;\n}\n.containe .memangguokandian {\n  width: 500px;\n  margin-top: 90px;\n}\n.containe .memangguokandian .h1 {\n  font-size: 80px;\n  color: #f0f0f0;\n}\n.containe .memangguokandian h2 {\n  font-size: 36px;\n  margin: 18px 0 59px;\n}\n.containe .memangguokandian h3 {\n  font-size: 22px;\n  margin-bottom: 41px;\n}\n.containe .memangguokandian p {\n  font-size: 14px;\n  line-height: 1.5;\n  margin-bottom: 30px;\n}\n.contact {\n  width: 100%;\n  min-width: 1300px;\n  height: 500px;\n  background-image: url(https://cdn-statis.mangguokandian.com/mg-web-pc/about3.jpg);\n}\n.contact .overflow {\n  width: 980px;\n  padding-top: 123px;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.contact .overflow .left .h1 {\n  font-size: 80px;\n  color: #666666;\n}\n.contact .overflow .left h2 {\n  font-size: 36px;\n  color: #ffcd1f;\n  margin: 21px 0 66px;\n}\n.contact .overflow .left p {\n  font-size: 22px;\n  color: #ffffff;\n  margin-bottom: 26px;\n}\n.contact .overflow .right .code {\n  width: 258px;\n  height: 258px;\n  background-image: url(https://cdn-statis.mangguokandian.com/mg-web-pc/aboutma.png);\n}\n.contact .overflow .right p {\n  margin-top: 31px;\n  font-size: 14px;\n  color: #ffffff;\n  text-align: center;\n}\n",""])}]);