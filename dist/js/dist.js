!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";var r=n(2),o=n(23),s=Object.prototype.toString;function i(e){return"[object Array]"===s.call(e)}function a(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===s.call(e)}function c(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return t},extend:function(e,t,n){return c(t,function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(26),s={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(3):void 0!==t&&(e=n(3)),e}(),transformRequest:[function(e,t){return o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],function(e){a.headers[e]={}}),r.forEach(["post","put","patch"],function(e){a.headers[e]=r.merge(s)}),e.exports=a}).call(this,n(25))},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0),o=n(27),s=n(29),i=n(30),a=n(31),u=n(4),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(32);e.exports=function(e){return new Promise(function(t,l){var f=e.data,d=e.headers;r.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest,m="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||a(e.url)||(p=new window.XDomainRequest,m="onload",h=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var v=e.auth.username||"",y=e.auth.password||"";d.Authorization="Basic "+c(v+":"+y)}if(p.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[m]=function(){if(p&&(4===p.readyState||h)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:e,request:p};o(t,l,r),p=null}},p.onerror=function(){l(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){l(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var g=n(33),w=(e.withCredentials||a(e.url))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;w&&(d[e.xsrfHeaderName]=w)}if("setRequestHeader"in p&&r.forEach(d,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),l(e),p=null)}),void 0===f&&(f=null),p.send(f)})}},function(e,t,n){"use strict";var r=n(28);e.exports=function(e,t,n,o,s){var i=new Error(e);return r(i,t,n,o,s)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";var r=n(8);document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("header .navbar-burger"),t=document.querySelectorAll("a.scrollable"),n=document.querySelectorAll("a.ga-outbound-link");(0,r.OpenMobileMenu)(e),(0,r.ScrollAnchors)(t),(0,r.TrackOutBoundLinks)(n),(0,r.HeroParallax)(),(0,r.LazyLoadImages)(),(0,r.HandleCookies)(),(0,r.Counter)(),(0,r.HandlePopup)(),(0,r.SubmitFormPrijava)()})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SubmitFormPrijava=t.HandlePopup=t.Counter=t.HandleCookies=t.OpenMobileMenu=t.TrackOutBoundLinks=t.LazyLoadImages=t.ScrollAnchors=t.HeroParallax=void 0;var r=d(n(9)),o=d(n(10)),s=d(n(11)),i=d(n(13)),a=d(n(14)),u=d(n(15)),c=d(n(17)),l=d(n(19)),f=d(n(20));function d(e){return e&&e.__esModule?e:{default:e}}t.HeroParallax=r.default,t.ScrollAnchors=o.default,t.LazyLoadImages=s.default,t.TrackOutBoundLinks=i.default,t.OpenMobileMenu=a.default,t.HandleCookies=u.default,t.Counter=c.default,t.HandlePopup=l.default,t.SubmitFormPrijava=f.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e=document.querySelector(".hero-triangles-left"),t=document.querySelector(".hero-triangles-right");window.addEventListener("scroll",function(n){var r=n.target.scrollingElement.scrollTop;r<815&&(e.style.transform="translateY(-"+Math.floor(r/6)+"px)",t.style.transform="translateY(-"+Math.floor(r/3)+"px)")})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){e.forEach(function(e){var t=new URL(e.href).hash,n=document.querySelector(t),r=!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform),o=window.dataLayer||[];e.addEventListener("click",function(e){if(e.preventDefault(),n){var s=document.querySelector("header .navbar-menu");s.classList.contains("is-active")&&s.classList.remove("is-active");var i=n.offsetTop;r?window.scroll({top:i,behavior:"smooth"}):window.scrollTo({top:i,behavior:"smooth"}),o.push({event:"PageAnchorClicked",target:t})}})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(12));t.default=function(){new r.default({successClass:"loaded",offset:100})}},function(e,t,n){var r,o;
/*!
  hey, [be]Lazy.js - v1.8.2 - 2016.10.25
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/void 0===(o="function"==typeof(r=function(){"use strict";var e,t,n,r,o="src",s="srcset";return function(o){if(!document.querySelectorAll){var s=document.createStyleSheet();document.querySelectorAll=function(e,t,n,r,o){for(o=document.all,t=[],e=e.replace(/\[for\b/gi,"[htmlFor").split(","),n=e.length;n--;){for(s.addRule(e[n],"k:v"),r=o.length;r--;)o[r].currentStyle.k&&t.push(o[r]);s.removeRule(0)}return t}}var u=this,c=u._util={};c.elements=[],c.destroyed=!0,u.options=o||{},u.options.error=u.options.error||!1,u.options.offset=u.options.offset||100,u.options.root=u.options.root||document,u.options.success=u.options.success||!1,u.options.selector=u.options.selector||".b-lazy",u.options.separator=u.options.separator||"|",u.options.containerClass=u.options.container,u.options.container=!!u.options.containerClass&&document.querySelectorAll(u.options.containerClass),u.options.errorClass=u.options.errorClass||"b-error",u.options.breakpoints=u.options.breakpoints||!1,u.options.loadInvisible=u.options.loadInvisible||!1,u.options.successClass=u.options.successClass||"b-loaded",u.options.validateDelay=u.options.validateDelay||25,u.options.saveViewportOffsetDelay=u.options.saveViewportOffsetDelay||50,u.options.srcset=u.options.srcset||"data-srcset",u.options.src=e=u.options.src||"data-src",r=Element.prototype.closest,n=window.devicePixelRatio>1,(t={}).top=0-u.options.offset,t.left=0-u.options.offset,u.revalidate=function(){i(u)},u.load=function(e,t){var n=this.options;e&&void 0===e.length?l(e,t,n):E(e,function(e){l(e,t,n)})},u.destroy=function(){var e=u._util;u.options.container&&E(u.options.container,function(t){x(t,"scroll",e.validateT)}),x(window,"scroll",e.validateT),x(window,"resize",e.validateT),x(window,"resize",e.saveViewportOffsetT),e.count=0,e.elements.length=0,e.destroyed=!0},c.validateT=C(function(){a(u)},u.options.validateDelay,u),c.saveViewportOffsetT=C(function(){b(u.options.offset)},u.options.saveViewportOffsetDelay,u),b(u.options.offset),E(u.options.breakpoints,function(t){if(t.width>=window.screen.width)return e=t.src,!1}),setTimeout(function(){i(u)})};function i(e){var t=e._util;t.elements=function(e){for(var t=[],n=e.root.querySelectorAll(e.selector),r=n.length;r--;t.unshift(n[r]));return t}(e.options),t.count=t.elements.length,t.destroyed&&(t.destroyed=!1,e.options.container&&E(e.options.container,function(e){S(e,"scroll",t.validateT)}),S(window,"resize",t.saveViewportOffsetT),S(window,"resize",t.validateT),S(window,"scroll",t.validateT)),a(e)}function a(e){for(var t=e._util,n=0;n<t.count;n++){var r=t.elements[n];(u(r,e.options)||g(r,e.options.successClass))&&(e.load(r),t.elements.splice(n,1),t.count--,n--)}0===t.count&&e.destroy()}function u(e,n){var o=e.getBoundingClientRect();if(n.container&&r){var s=e.closest(n.containerClass);if(s){var i=s.getBoundingClientRect();if(c(i,t)){var a=i.top-n.offset,u=i.right+n.offset,l=i.bottom+n.offset,f=i.left-n.offset,d={top:a>t.top?a:t.top,right:u<t.right?u:t.right,bottom:l<t.bottom?l:t.bottom,left:f>t.left?f:t.left};return c(o,d)}return!1}}return c(o,t)}function c(e,t){return e.right>=t.left&&e.bottom>=t.top&&e.left<=t.right&&e.top<=t.bottom}function l(t,r,i){if(!g(t,i.successClass)&&(r||i.loadInvisible||t.offsetWidth>0&&t.offsetHeight>0)){var a=h(t,e)||h(t,i.src);if(a){var u=a.split(i.separator),c=u[n&&u.length>1?1:0],l=h(t,i.srcset),m=y(t,"img"),v=t.parentNode,b=v&&y(v,"picture");if(m||void 0===t.src){var C=new Image,L=function(){i.error&&i.error(t,"invalid"),w(t,i.errorClass),x(C,"error",L),x(C,"load",T)},T=function(){m?b||p(t,c,l):t.style.backgroundImage='url("'+c+'")',f(t,i),x(C,"load",T),x(C,"error",L)};b&&(C=t,E(v.getElementsByTagName("source"),function(e){d(e,s,i.srcset)})),S(C,"error",L),S(C,"load",T),p(C,c,l)}else t.src=c,f(t,i)}else y(t,"video")?(E(t.getElementsByTagName("source"),function(e){d(e,o,i.src)}),t.load(),f(t,i)):(i.error&&i.error(t,"missing"),w(t,i.errorClass))}}function f(e,t){w(e,t.successClass),t.success&&t.success(e),v(e,t.src),v(e,t.srcset),E(t.breakpoints,function(t){v(e,t.src)})}function d(e,t,n){var r=h(e,n);r&&(m(e,t,r),v(e,n))}function p(e,t,n){n&&m(e,s,n),e.src=t}function m(e,t,n){e.setAttribute(t,n)}function h(e,t){return e.getAttribute(t)}function v(e,t){e.removeAttribute(t)}function y(e,t){return e.nodeName.toLowerCase()===t}function g(e,t){return-1!==(" "+e.className+" ").indexOf(" "+t+" ")}function w(e,t){g(e,t)||(e.className+=" "+t)}function b(e){t.bottom=(window.innerHeight||document.documentElement.clientHeight)+e,t.right=(window.innerWidth||document.documentElement.clientWidth)+e}function S(e,t,n){e.attachEvent?e.attachEvent&&e.attachEvent("on"+t,n):e.addEventListener(t,n,{capture:!1,passive:!0})}function x(e,t,n){e.detachEvent?e.detachEvent&&e.detachEvent("on"+t,n):e.removeEventListener(t,n,{capture:!1,passive:!0})}function E(e,t){if(e&&t)for(var n=e.length,r=0;r<n&&!1!==t(e[r],r);r++);}function C(e,t,n){var r=0;return function(){var o=+new Date;o-r<t||(r=o,e.apply(n,arguments))}}})?r.call(t,n,t,e):r)||(e.exports=o)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){e.forEach(function(e){e.classList.contains("ga-outbound-link")&&e.addEventListener("click",function(){(window.dataLayer||[]).push({event:"OutboundLinkClick",url:e.href})})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){e.addEventListener("click",function(e){e.preventDefault(),document.querySelector("header nav .navbar-menu").classList.toggle("is-active")})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(16));t.default=function(){r.get("cookie-agree")||document.querySelector("#cookie-popup").classList.add("active"),document.querySelector("#cookie-popup a").addEventListener("click",function(e){e.preventDefault(),r.set("cookie-agree","true",{expires:365}),document.querySelector("#cookie-popup").classList.remove("active")})}},function(e,t,n){var r,o;
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(s){if(void 0===(o="function"==typeof(r=s)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=s(),!!0){var i=window.Cookies,a=window.Cookies=s();a.noConflict=function(){return window.Cookies=i,a}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}return function t(n){function r(t,o,s){var i;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(s=e({path:"/"},r.defaults,s)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*s.expires),s.expires=a}s.expires=s.expires?s.expires.toUTCString():"";try{i=JSON.stringify(o),/^[\{\[]/.test(i)&&(o=i)}catch(e){}o=n.write?n.write(o,t):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var u="";for(var c in s)s[c]&&(u+="; "+c,!0!==s[c]&&(u+="="+s[c]));return document.cookie=t+"="+o+u}t||(i={});for(var l=document.cookie?document.cookie.split("; "):[],f=/(%[0-9A-Z]{2})+/g,d=0;d<l.length;d++){var p=l[d].split("="),m=p.slice(1).join("=");this.json||'"'!==m.charAt(0)||(m=m.slice(1,-1));try{var h=p[0].replace(f,decodeURIComponent);if(m=n.read?n.read(m,h):n(m,h)||m.replace(f,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch(e){}if(t===h){i=m;break}t||(i[h]=m)}catch(e){}}return i}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,n){r(t,"",e(n,{expires:-1}))},r.withConverter=t,r}(function(){})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(18));t.default=function(){var e=new Date("September 28, 2018 18:00:00");setInterval(function(){var t=document.querySelector("#counter-container"),n=document.querySelector("#counter-title");t.classList.contains("active")||(t.classList.add("active"),n.classList.add("active"));var o=(0,r.default)(e),s=o.days,i=o.hours,a=o.minutes,u=o.seconds,c=document.querySelector("#days span"),l=document.querySelector("#hours span"),f=document.querySelector("#minutes span"),d=document.querySelector("#seconds span");c.innerHTML=s,l.innerHTML=i,f.innerHTML=a,d.innerHTML=u},1e3)}},function(e,t){
/**
 * @license countdown.js v2.6.0 http://countdownjs.org
 * Copyright (c)2006-2014 Stephen M. McKamey.
 * Licensed under The MIT License.
 */
!function(e){"use strict";var t=1,n=2,r=4,o=8,s=16,i=32,a=64,u=128,c=256,l=512,f=1024,d=u|a|s|o|r|n,p=1e3,m=60,h=60,v=24,y=v*h*m*p,g=7,w=12,b=10,S=10,x=10,E=Math.ceil,C=Math.floor;function L(e,t){var n=e.getTime();return e.setMonth(e.getMonth()+t),Math.round((e.getTime()-n)/y)}function T(e){var t=e.getTime(),n=new Date(t);return n.setMonth(e.getMonth()+1),Math.round((n.getTime()-t)/y)}function k(e,t){if(t=t instanceof Date||null!==t&&isFinite(t)?new Date(+t):new Date,!e)return t;var n=+e.value||0;return n?(t.setTime(t.getTime()+n),t):((n=+e.milliseconds||0)&&t.setMilliseconds(t.getMilliseconds()+n),(n=+e.seconds||0)&&t.setSeconds(t.getSeconds()+n),(n=+e.minutes||0)&&t.setMinutes(t.getMinutes()+n),(n=+e.hours||0)&&t.setHours(t.getHours()+n),(n=+e.weeks||0)&&(n*=g),(n+=+e.days||0)&&t.setDate(t.getDate()+n),(n=+e.months||0)&&t.setMonth(t.getMonth()+n),(n=+e.millennia||0)&&(n*=x),(n+=+e.centuries||0)&&(n*=S),(n+=+e.decades||0)&&(n*=b),(n+=+e.years||0)&&t.setFullYear(t.getFullYear()+n),t)}var j,M,O,A,N,R,D,_;function q(e,t){return D(e)+(1===e?j[t]:M[t])}function P(){}function F(e,t,n,r,o,s){return e[n]>=0&&(t+=e[n],delete e[n]),(t/=o)+1<=1?0:e[r]>=0?(e[r]=+(e[r]+t).toFixed(s),function(e,t){switch(t){case"seconds":if(e.seconds!==m||isNaN(e.minutes))return;e.minutes++,e.seconds=0;case"minutes":if(e.minutes!==h||isNaN(e.hours))return;e.hours++,e.minutes=0;case"hours":if(e.hours!==v||isNaN(e.days))return;e.days++,e.hours=0;case"days":if(e.days!==g||isNaN(e.weeks))return;e.weeks++,e.days=0;case"weeks":if(e.weeks!==T(e.refMonth)/g||isNaN(e.months))return;e.months++,e.weeks=0;case"months":if(e.months!==w||isNaN(e.years))return;e.years++,e.months=0;case"years":if(e.years!==b||isNaN(e.decades))return;e.decades++,e.years=0;case"decades":if(e.decades!==S||isNaN(e.centuries))return;e.centuries++,e.decades=0;case"centuries":if(e.centuries!==x||isNaN(e.millennia))return;e.millennia++,e.centuries=0}}(e,r),0):t}function U(e,t){var n=F(e,0,"milliseconds","seconds",p,t);if(n&&(n=F(e,n,"seconds","minutes",m,t))&&(n=F(e,n,"minutes","hours",h,t))&&(n=F(e,n,"hours","days",v,t))&&(n=F(e,n,"days","weeks",g,t))&&(n=F(e,n,"weeks","months",T(e.refMonth)/g,t))&&(n=F(e,n,"months","years",function(e){var t=e.getTime(),n=new Date(t);return n.setFullYear(e.getFullYear()+1),Math.round((n.getTime()-t)/y)}(e.refMonth)/T(e.refMonth),t))&&(n=F(e,n,"years","decades",b,t))&&(n=F(e,n,"decades","centuries",S,t))&&(n=F(e,n,"centuries","millennia",x,t)))throw new Error("Fractional unit overflow")}function B(e,d,y,T,k,j){var M=new Date;if(e.start=d=d||M,e.end=y=y||M,e.units=T,e.value=y.getTime()-d.getTime(),e.value<0){var O=y;y=d,d=O}e.refMonth=new Date(d.getFullYear(),d.getMonth(),15,12,0,0);try{e.millennia=0,e.centuries=0,e.decades=0,e.years=y.getFullYear()-d.getFullYear(),e.months=y.getMonth()-d.getMonth(),e.weeks=0,e.days=y.getDate()-d.getDate(),e.hours=y.getHours()-d.getHours(),e.minutes=y.getMinutes()-d.getMinutes(),e.seconds=y.getSeconds()-d.getSeconds(),e.milliseconds=y.getMilliseconds()-d.getMilliseconds(),function(e){var t;for(e.milliseconds<0?(t=E(-e.milliseconds/p),e.seconds-=t,e.milliseconds+=t*p):e.milliseconds>=p&&(e.seconds+=C(e.milliseconds/p),e.milliseconds%=p),e.seconds<0?(t=E(-e.seconds/m),e.minutes-=t,e.seconds+=t*m):e.seconds>=m&&(e.minutes+=C(e.seconds/m),e.seconds%=m),e.minutes<0?(t=E(-e.minutes/h),e.hours-=t,e.minutes+=t*h):e.minutes>=h&&(e.hours+=C(e.minutes/h),e.minutes%=h),e.hours<0?(t=E(-e.hours/v),e.days-=t,e.hours+=t*v):e.hours>=v&&(e.days+=C(e.hours/v),e.hours%=v);e.days<0;)e.months--,e.days+=L(e.refMonth,1);e.days>=g&&(e.weeks+=C(e.days/g),e.days%=g),e.months<0?(t=E(-e.months/w),e.years-=t,e.months+=t*w):e.months>=w&&(e.years+=C(e.months/w),e.months%=w),e.years>=b&&(e.decades+=C(e.years/b),e.years%=b,e.decades>=S&&(e.centuries+=C(e.decades/S),e.decades%=S,e.centuries>=x&&(e.millennia+=C(e.centuries/x),e.centuries%=x)))}(e),function(e,d,y,E){var T=0;!(d&f)||T>=y?(e.centuries+=e.millennia*x,delete e.millennia):e.millennia&&T++,!(d&l)||T>=y?(e.decades+=e.centuries*S,delete e.centuries):e.centuries&&T++,!(d&c)||T>=y?(e.years+=e.decades*b,delete e.decades):e.decades&&T++,!(d&u)||T>=y?(e.months+=e.years*w,delete e.years):e.years&&T++,!(d&a)||T>=y?(e.months&&(e.days+=L(e.refMonth,e.months)),delete e.months,e.days>=g&&(e.weeks+=C(e.days/g),e.days%=g)):e.months&&T++,!(d&i)||T>=y?(e.days+=e.weeks*g,delete e.weeks):e.weeks&&T++,!(d&s)||T>=y?(e.hours+=e.days*v,delete e.days):e.days&&T++,!(d&o)||T>=y?(e.minutes+=e.hours*h,delete e.hours):e.hours&&T++,!(d&r)||T>=y?(e.seconds+=e.minutes*m,delete e.minutes):e.minutes&&T++,!(d&n)||T>=y?(e.milliseconds+=e.seconds*p,delete e.seconds):e.seconds&&T++,d&t&&!(T>=y)||U(e,E)}(e,T,k,j)}finally{delete e.refMonth}return e}function I(e,i,a,u,c){var l;a=+a||d,u=u>0?u:NaN,c=c>0?c<20?Math.round(c):20:0;var f=null;"function"==typeof e?(l=e,e=null):e instanceof Date||(null!==e&&isFinite(e)?e=new Date(+e):("object"==typeof f&&(f=e),e=null));var y=null;if("function"==typeof i?(l=i,i=null):i instanceof Date||(null!==i&&isFinite(i)?i=new Date(+i):("object"==typeof i&&(y=i),i=null)),f&&(e=k(f,i)),y&&(i=k(y,e)),!e&&!i)return new P;if(!l)return B(new P,e,i,a,u,c);var w,b=function(e){return e&t?p/30:e&n?p:e&r?p*m:e&o?p*m*h:e&s?p*m*h*v:p*m*h*v*g}(a),S=function(){l(B(new P,e,i,a,u,c),w)};return S(),w=setInterval(S,b)}P.prototype.toString=function(e){var t=_(this),n=t.length;if(!n)return e?""+e:N;if(1===n)return t[0];var r=O+t.pop();return t.join(A)+r},P.prototype.toHTML=function(e,t){e=e||"span";var n=_(this),r=n.length;if(!r)return(t=t||N)?"<"+e+">"+t+"</"+e+">":t;for(var o=0;o<r;o++)n[o]="<"+e+">"+n[o]+"</"+e+">";if(1===r)return n[0];var s=O+n.pop();return n.join(A)+s},P.prototype.addTo=function(e){return k(this,e)},_=function(e){var t=[],n=e.millennia;return n&&t.push(R(n,10)),(n=e.centuries)&&t.push(R(n,9)),(n=e.decades)&&t.push(R(n,8)),(n=e.years)&&t.push(R(n,7)),(n=e.months)&&t.push(R(n,6)),(n=e.weeks)&&t.push(R(n,5)),(n=e.days)&&t.push(R(n,4)),(n=e.hours)&&t.push(R(n,3)),(n=e.minutes)&&t.push(R(n,2)),(n=e.seconds)&&t.push(R(n,1)),(n=e.milliseconds)&&t.push(R(n,0)),t},I.MILLISECONDS=t,I.SECONDS=n,I.MINUTES=r,I.HOURS=o,I.DAYS=s,I.WEEKS=i,I.MONTHS=a,I.YEARS=u,I.DECADES=c,I.CENTURIES=l,I.MILLENNIA=f,I.DEFAULTS=d,I.ALL=f|l|c|u|a|i|s|o|r|n|t;var H=I.setFormat=function(e){if(e){if("singular"in e||"plural"in e){var t=e.singular||[];t.split&&(t=t.split("|"));var n=e.plural||[];n.split&&(n=n.split("|"));for(var r=0;r<=10;r++)j[r]=t[r]||j[r],M[r]=n[r]||M[r]}"string"==typeof e.last&&(O=e.last),"string"==typeof e.delim&&(A=e.delim),"string"==typeof e.empty&&(N=e.empty),"function"==typeof e.formatNumber&&(D=e.formatNumber),"function"==typeof e.formatter&&(R=e.formatter)}},z=I.resetFormat=function(){j=" millisecond| second| minute| hour| day| week| month| year| decade| century| millennium".split("|"),M=" milliseconds| seconds| minutes| hours| days| weeks| months| years| decades| centuries| millennia".split("|"),O=" and ",A=", ",N="",D=function(e){return e},R=q};I.setLabels=function(e,t,n,r,o,s,i){H({singular:e,plural:t,last:n,delim:r,empty:o,formatNumber:s,formatter:i})},I.resetLabels=z,z(),e&&e.exports?e.exports=I:"function"==typeof window.define&&void 0!==window.define.amd&&window.define("countdown",[],function(){return I})}(e)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){document.querySelectorAll(".popup-trigger").forEach(function(e){var t=e.dataset.toggle,n=document.querySelector("#"+t);e.addEventListener("click",function(e){e.preventDefault(),n.classList.add("active")}),n.querySelectorAll(".close-popup").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),n.classList.remove("active")})})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(21)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(41));var s=function(e){var t=document.createElement("div"),n=document.createElement("i");return n.classList="fas fa-times",t.appendChild(n),t.classList.add("dissmiss-message-btn"),t.addEventListener("click",function(){e.classList.remove("active")}),t};t.default=function(){var e=document.getElementById("frm-prijava"),t=document.querySelectorAll(".column.field input"),n=document.getElementById("submit-container"),i=document.getElementById("form-message-container"),a=document.getElementById("form-message"),u=document.querySelector("#submit-frm-prijava + span");e.addEventListener("submit",function(e){e.preventDefault(),u.classList.add("active");var c={};t.forEach(function(e){c[e.name]=e.value}),r.default.post("https://sportech.si/server/",o.stringify(c)).then(function(e){console.log(e),u.classList.remove("active"),e.data.status>=200&&e.data.status<300?(n.classList.add("hidden"),i.querySelector(".dissmiss-message-btn")&&i.querySelector(".dissmiss-message-btn").remove(),a.innerText=e.data.message,i.classList.remove("error"),i.classList.add("active"),t.forEach(function(e){e.value=""}),(window.dataLayer||[]).push({event:"Apply Form Submitted"})):(a.innerText=e.data.message,i.classList.add("active","error"),i.appendChild(s(i)))}).catch(function(e){console.log(e),u.classList.remove("active"),a.innerText="Nekaj je šlo narobe. Poizkusite ponovno ali pa kontaktirajte našo ekipo.",i.classList.add("active","error"),i.appendChild(s(i))})})}},function(e,t,n){e.exports=n(22)},function(e,t,n){"use strict";var r=n(0),o=n(2),s=n(24),i=n(1);function a(e){var t=new s(e),n=o(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n}var u=a(i);u.Axios=s,u.create=function(e){return a(r.merge(i,e))},u.Cancel=n(6),u.CancelToken=n(39),u.isCancel=n(5),u.all=function(e){return Promise.all(e)},u.spread=n(40),e.exports=u,e.exports.default=u},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t,n){"use strict";var r=n(1),o=n(0),s=n(34),i=n(35);function a(e){this.defaults=e,this.interceptors={request:new s,response:new s}}a.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(e){a.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){a.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=a},function(e,t){var n,r,o=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,c=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!l){var e=a(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||l||a(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(4);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";var r=n(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var i=[];r.forEach(t,function(e,t){null!==e&&void 0!==e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))}))}),s=i.join("&")}return s&&(e+=(-1===e.indexOf("?")?"?":"&")+s),e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,i={};return e?(r.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}}),i):i}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,s=String(e),i="",a=0,u=r;s.charAt(0|a)||(u="=",a%1);i+=u.charAt(63&t>>8-a%1*8)){if((n=s.charCodeAt(a+=.75))>255)throw new o;t=t<<8|n}return i}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(36),s=n(5),i=n(1),a=n(37),u=n(38);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!a(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||i.adapter)(e).then(function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(6);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";const r=n(42),o=n(43);function s(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function i(e,t){return t.decode?o(e):e}function a(e){const t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function u(e,t){const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=Object.assign({decode:!0,arrayFormat:"none"},t)),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const o of e.split("&")){let[e,s]=o.replace(/\+/g," ").split("=");s=void 0===s?null:i(s,t),n(i(e,t),s,r)}return Object.keys(r).sort().reduce((e,t)=>{const n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}t.extract=a,t.parse=u,t.stringify=((e,t)=>{!1===(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)).sort&&(t.sort=(()=>{}));const n=function(e){switch(e.arrayFormat){case"index":return(t,n,r)=>null===n?[s(t,e),"[",r,"]"].join(""):[s(t,e),"[",s(r,e),"]=",s(n,e)].join("");case"bracket":return(t,n)=>null===n?[s(t,e),"[]"].join(""):[s(t,e),"[]=",s(n,e)].join("");default:return(t,n)=>null===n?s(t,e):[s(t,e),"=",s(n,e)].join("")}}(t);return e?Object.keys(e).sort(t.sort).map(r=>{const o=e[r];if(void 0===o)return"";if(null===o)return s(r,t);if(Array.isArray(o)){const e=[];for(const t of o.slice())void 0!==t&&e.push(n(r,t,e.length));return e.join("&")}return s(r,t)+"="+s(o,t)}).filter(e=>e.length>0).join("&"):""}),t.parseUrl=((e,t)=>({url:e.split("?")[0]||"",query:u(a(e),t)}))},function(e,t,n){"use strict";e.exports=(e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function s(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],s(n),s(r))}function i(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=s(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=o.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var r=i(n[0]);r!==n[0]&&(t[n[0]]=r)}n=o.exec(e)}t["%C2"]="�";for(var s=Object.keys(t),a=0;a<s.length;a++){var u=s[a];e=e.replace(new RegExp(u,"g"),t[u])}return e}(e)}}}]);