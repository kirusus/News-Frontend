!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=104)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(64))},function(t,n,e){var r=e(0),o=e(10),i=e(30),c=e(56),a=r.Symbol,u=o("wks");t.exports=function(t){return u[t]||(u[t]=c&&a[t]||(c?a:i)("Symbol."+t))}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(5),o=e(33),i=e(7),c=e(20),a=Object.defineProperty;n.f=r?a:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(2);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){"use strict";e.d(n,"f",(function(){return r})),e.d(n,"g",(function(){return o})),e.d(n,"h",(function(){return i})),e.d(n,"a",(function(){return c})),e.d(n,"d",(function(){return a})),e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return s})),e.d(n,"e",(function(){return f}));var r=document.querySelector(".search-section__search-button"),o=document.querySelector(".search-section__search-input"),i="http://newsapi.org/v2/everything?q=",c="f7c168304e3d45e7a0d8a3cc13ceb1ba",a="http://sekizos-storage.students.nomoreparties.space/",u=100,s=7,f={signIn:"signin",signUp:"signup",articles:"articles",logOut:"logout",currentUser:"users/me"}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(28),o=e(65);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.1",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(52),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(0),o=e(18).f,i=e(13),c=e(15),a=e(22),u=e(51),s=e(39);t.exports=function(t,n){var e,f,l,p,h,d=t.target,v=t.global,g=t.stat;if(e=v?r:g?r[d]||a(d,{}):(r[d]||{}).prototype)for(f in n){if(p=n[f],l=t.noTargetGet?(h=o(e,f))&&h.value:e[f],!s(v?f:d+(g?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,f,p,t)}}},function(t,n,e){var r=e(5),o=e(4),i=e(19);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(32),o=e(21);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(0),o=e(10),i=e(13),c=e(6),a=e(22),u=e(34),s=e(29),f=s.get,l=s.enforce,p=String(u).split("toString");o("inspectSource",(function(t){return u.call(t)})),(t.exports=function(t,n,e,o){var u=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,f=!!o&&!!o.noTargetGet;"function"==typeof e&&("string"!=typeof n||c(e,"name")||i(e,"name",n),l(e).source=p.join("string"==typeof n?n:"")),t!==r?(u?!f&&t[n]&&(s=!0):delete t[n],s?t[n]=e:i(t,n,e)):s?t[n]=e:a(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u.call(this)}))},function(t,n,e){var r=e(37),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(5),o=e(50),i=e(19),c=e(14),a=e(20),u=e(6),s=e(33),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(t,n){if(t=c(t),n=a(n,!0),s)try{return f(t,n)}catch(t){}if(u(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(0),o=e(13);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n){t.exports={}},function(t,n,e){var r=e(9);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(17);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r,o,i=e(0),c=e(41),a=i.process,u=a&&a.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r=e(0),o=e(3),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n){t.exports=!1},function(t,n,e){var r,o,i,c=e(66),a=e(0),u=e(3),s=e(13),f=e(6),l=e(35),p=e(23),h=a.WeakMap;if(c){var d=new h,v=d.get,g=d.has,m=d.set;r=function(t,n){return m.call(d,t,n),n},o=function(t){return v.call(d,t)||{}},i=function(t){return g.call(d,t)}}else{var y=l("state");p[y]=!0,r=function(t,n){return s(t,y,n),n},o=function(t){return f(t,y)?t[y]:{}},i=function(t){return f(t,y)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!u(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(21);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(2),o=e(9),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(5),o=e(2),i=e(27);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(10);t.exports=r("native-function-to-string",Function.toString)},function(t,n,e){var r=e(10),o=e(30),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(53),o=e(38).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(2),o=/#|\.prototype\./,i=function(t,n){var e=a[c(t)];return e==s||e!=u&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(3),o=e(24),i=e(1)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(11);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(5),o=e(4).f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},function(t,n,e){"use strict";var r=e(12),o=e(2),i=e(24),c=e(3),a=e(31),u=e(16),s=e(59),f=e(40),l=e(60),p=e(1),h=e(26),d=p("isConcatSpreadable"),v=h>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),g=l("concat"),m=function(t){if(!c(t))return!1;var n=t[d];return void 0!==n?!!n:i(t)};r({target:"Array",proto:!0,forced:!v||!g},{concat:function(t){var n,e,r,o,i,c=a(this),l=f(c,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(m(i=-1===n?c:arguments[n])){if(p+(o=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,p++)e in i&&s(l,p,i[e])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(l,p++,i)}return l.length=p,l}})},function(t,n,e){var r=e(9),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n){t.exports={}},function(t,n,e){var r,o,i,c=e(0),a=e(2),u=e(9),s=e(25),f=e(57),l=e(27),p=e(47),h=c.location,d=c.setImmediate,v=c.clearImmediate,g=c.process,m=c.MessageChannel,y=c.Dispatch,x=0,w={},S=function(t){if(w.hasOwnProperty(t)){var n=w[t];delete w[t],n()}},b=function(t){return function(){S(t)}},E=function(t){S(t.data)},j=function(t){c.postMessage(t+"",h.protocol+"//"+h.host)};d&&v||(d=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return w[++x]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},r(x),x},v=function(t){delete w[t]},"process"==u(g)?r=function(t){g.nextTick(b(t))}:y&&y.now?r=function(t){y.now(b(t))}:m&&!p?(i=(o=new m).port2,o.port1.onmessage=E,r=s(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||a(j)?r="onreadystatechange"in l("script")?function(t){f.appendChild(l("script")).onreadystatechange=function(){f.removeChild(this),S(t)}}:function(t){setTimeout(b(t),0)}:(r=j,c.addEventListener("message",E,!1))),t.exports={set:d,clear:v}},function(t,n,e){var r=e(41);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,n,e){"use strict";var r=e(17),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));e(43),e(61),e(62),e(63);function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.url=n,this.routs=e}var n,e,o;return n=t,(e=[{key:"signup",value:function(t,n,e){return fetch("".concat(this.url+this.routs.signUp),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n,name:e})}).then((function(t){return t.ok?t.json():Promise.reject(new Error("Ошибка: ".concat(t.status)))})).catch((function(t){if("Failed to fetch"===t.message)throw new Error("Something wrong with signup");throw t}))}},{key:"signin",value:function(t,n){return fetch("".concat(this.url+this.routs.signIn),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}).then((function(t){return t.ok?t.json():Promise.reject(new Error("Ошибка: ".concat(t.status)))})).catch((function(t){if("Failed to fetch"===t.message)throw new Error("Something wrong with signin");throw t}))}},{key:"getUserData",value:function(t){return this._token=t,fetch("".concat(this.url+this.routs.currentUser),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject(new Error("Ошибка: ".concat(t.status)))})).catch((function(t){if("Failed to fetch"===t.message)throw new Error("Something wrong with getUserData");throw t}))}},{key:"getArticles",value:function(t){return this.token=t,fetch("".concat(this.url+this.routs.articles),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject(new Error("Ошибка: ".concat(t.status)))})).catch((function(t){if("Failed to fetch"===t.message)throw new Error("Something wrong with getArticles");throw t}))}},{key:"createArticle",value:function(t,n){this.token=n;var e=t.keyword,r=t.title,o=t.text,i=t.date,c=t.source,a=t.link,u=t.image;return fetch("".concat(this.url+this.routs.articles),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:e,title:r,text:o,date:i,source:c,link:a,image:u})}).then((function(t){return t.ok?t.json():Promise.reject(new Error("Ошибка: ".concat(t.status)))})).catch((function(t){if("Failed to fetch"===t.message)throw new Error("Something wrong with createArticle");throw t}))}},{key:"removeArticle",value:function(t,n){return this.token=n,fetch("".concat(this.url+this.routs.articles,"/").concat(t),{method:"DELETE",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject(new Error("Ошибка: ".concat(t.status)))})).catch((function(t){if("Failed to fetch"===t.message)throw new Error("Something wrong with removeArticle");throw t}))}}])&&r(n.prototype,e),o&&r(n,o),t}()},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(6),o=e(67),i=e(18),c=e(4);t.exports=function(t,n){for(var e=o(n),a=c.f,u=i.f,s=0;s<e.length;s++){var f=e[s];r(t,f)||a(t,f,u(n,f))}}},function(t,n,e){t.exports=e(0)},function(t,n,e){var r=e(6),o=e(14),i=e(68).indexOf,c=e(23);t.exports=function(t,n){var e,a=o(t),u=0,s=[];for(e in a)!r(c,e)&&r(a,e)&&s.push(e);for(;n.length>u;)r(a,e=n[u++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){var r=e(37),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(11);t.exports=r("document","documentElement")},function(t,n,e){var r=e(4).f,o=e(6),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){"use strict";var r=e(20),o=e(4),i=e(19);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},function(t,n,e){var r=e(2),o=e(1),i=e(26),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){var r=e(15),o=e(70),i=Object.prototype;o!==i.toString&&r(i,"toString",o,{unsafe:!0})},function(t,n,e){"use strict";var r,o,i,c,a=e(12),u=e(28),s=e(0),f=e(11),l=e(71),p=e(15),h=e(72),d=e(10),v=e(58),g=e(73),m=e(3),y=e(17),x=e(74),w=e(9),S=e(75),b=e(79),E=e(80),j=e(46).set,k=e(81),_=e(82),T=e(83),C=e(48),L=e(84),O=e(29),P=e(39),M=e(1),A=e(26),I=M("species"),F="Promise",N=O.get,D=O.set,q=O.getterFor(F),G=l,U=s.TypeError,V=s.document,R=s.process,z=d("inspectSource"),H=f("fetch"),B=C.f,J=B,W="process"==w(R),K=!!(V&&V.createEvent&&s.dispatchEvent),Y=P(F,(function(){var t=z(G)!==String(G);if(66===A)return!0;if(!t&&!W&&"function"!=typeof PromiseRejectionEvent)return!0;if(u&&!G.prototype.finally)return!0;if(A>=51&&/native code/.test(G))return!1;var n=G.resolve(1),e=function(t){t((function(){}),(function(){}))};return(n.constructor={})[I]=e,!(n.then((function(){}))instanceof e)})),Q=Y||!b((function(t){G.all(t).catch((function(){}))})),X=function(t){var n;return!(!m(t)||"function"!=typeof(n=t.then))&&n},Z=function(t,n,e){if(!n.notified){n.notified=!0;var r=n.reactions;k((function(){for(var o=n.value,i=1==n.state,c=0;r.length>c;){var a,u,s,f=r[c++],l=i?f.ok:f.fail,p=f.resolve,h=f.reject,d=f.domain;try{l?(i||(2===n.rejection&&et(t,n),n.rejection=1),!0===l?a=o:(d&&d.enter(),a=l(o),d&&(d.exit(),s=!0)),a===f.promise?h(U("Promise-chain cycle")):(u=X(a))?u.call(a,p,h):p(a)):h(o)}catch(t){d&&!s&&d.exit(),h(t)}}n.reactions=[],n.notified=!1,e&&!n.rejection&&tt(t,n)}))}},$=function(t,n,e){var r,o;K?((r=V.createEvent("Event")).promise=n,r.reason=e,r.initEvent(t,!1,!0),s.dispatchEvent(r)):r={promise:n,reason:e},(o=s["on"+t])?o(r):"unhandledrejection"===t&&T("Unhandled promise rejection",e)},tt=function(t,n){j.call(s,(function(){var e,r=n.value;if(nt(n)&&(e=L((function(){W?R.emit("unhandledRejection",r,t):$("unhandledrejection",t,r)})),n.rejection=W||nt(n)?2:1,e.error))throw e.value}))},nt=function(t){return 1!==t.rejection&&!t.parent},et=function(t,n){j.call(s,(function(){W?R.emit("rejectionHandled",t):$("rejectionhandled",t,n.value)}))},rt=function(t,n,e,r){return function(o){t(n,e,o,r)}},ot=function(t,n,e,r){n.done||(n.done=!0,r&&(n=r),n.value=e,n.state=2,Z(t,n,!0))},it=function(t,n,e,r){if(!n.done){n.done=!0,r&&(n=r);try{if(t===e)throw U("Promise can't be resolved itself");var o=X(e);o?k((function(){var r={done:!1};try{o.call(e,rt(it,t,r,n),rt(ot,t,r,n))}catch(e){ot(t,r,e,n)}})):(n.value=e,n.state=1,Z(t,n,!1))}catch(e){ot(t,{done:!1},e,n)}}};Y&&(G=function(t){x(this,G,F),y(t),r.call(this);var n=N(this);try{t(rt(it,this,n),rt(ot,this,n))}catch(t){ot(this,n,t)}},(r=function(t){D(this,{type:F,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=h(G.prototype,{then:function(t,n){var e=q(this),r=B(E(this,G));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=W?R.domain:void 0,e.parent=!0,e.reactions.push(r),0!=e.state&&Z(this,e,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,n=N(t);this.promise=t,this.resolve=rt(it,t,n),this.reject=rt(ot,t,n)},C.f=B=function(t){return t===G||t===i?new o(t):J(t)},u||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",(function(t,n){var e=this;return new G((function(t,n){c.call(e,t,n)})).then(t,n)}),{unsafe:!0}),"function"==typeof H&&a({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return _(G,H.apply(s,arguments))}}))),a({global:!0,wrap:!0,forced:Y},{Promise:G}),v(G,F,!1,!0),g(F),i=f(F),a({target:F,stat:!0,forced:Y},{reject:function(t){var n=B(this);return n.reject.call(void 0,t),n.promise}}),a({target:F,stat:!0,forced:u||Y},{resolve:function(t){return _(u&&this===i?G:this,t)}}),a({target:F,stat:!0,forced:Q},{all:function(t){var n=this,e=B(n),r=e.resolve,o=e.reject,i=L((function(){var e=y(n.resolve),i=[],c=0,a=1;S(t,(function(t){var u=c++,s=!1;i.push(void 0),a++,e.call(n,t).then((function(t){s||(s=!0,i[u]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=B(n),r=e.reject,o=L((function(){var o=y(n.resolve);S(t,(function(t){o.call(n,t).then(e.resolve,r)}))}));return o.error&&r(o.value),e.promise}})},function(t,n,e){"use strict";var r=e(12),o=e(85);r({target:"String",proto:!0,forced:e(86)("link")},{link:function(t){return o(this,"a","href",t)}})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(0),o=e(22),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(0),o=e(34),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,e){var r=e(11),o=e(36),i=e(55),c=e(7);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(14),o=e(16),i=e(54),c=function(t){return function(n,e,c){var a,u=r(n),s=o(u.length),f=i(c,s);if(t&&e!=e){for(;s>f;)if((a=u[f++])!=a)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(25),o=e(32),i=e(31),c=e(16),a=e(40),u=[].push,s=function(t){var n=1==t,e=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(h,d,v,g){for(var m,y,x=i(h),w=o(x),S=r(d,v,3),b=c(w.length),E=0,j=g||a,k=n?j(h,b):e?j(h,0):void 0;b>E;E++)if((p||E in w)&&(y=S(m=w[E],E,x),t))if(n)k[E]=y;else if(y)switch(t){case 3:return!0;case 5:return m;case 6:return E;case 2:u.call(k,m)}else if(f)return!1;return l?-1:s||f?f:k}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,n,e){"use strict";var r=e(44),o={};o[e(1)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+r(this)+"]"}:o.toString},function(t,n,e){var r=e(0);t.exports=r.Promise},function(t,n,e){var r=e(15);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){"use strict";var r=e(11),o=e(4),i=e(1),c=e(5),a=i("species");t.exports=function(t){var n=r(t),e=o.f;c&&n&&!n[a]&&e(n,a,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){var r=e(7),o=e(76),i=e(16),c=e(25),a=e(77),u=e(78),s=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,e,f,l){var p,h,d,v,g,m,y,x=c(n,e,f?2:1);if(l)p=t;else{if("function"!=typeof(h=a(t)))throw TypeError("Target is not iterable");if(o(h)){for(d=0,v=i(t.length);v>d;d++)if((g=f?x(r(y=t[d])[0],y[1]):x(t[d]))&&g instanceof s)return g;return new s(!1)}p=h.call(t)}for(m=p.next;!(y=m.call(p)).done;)if("object"==typeof(g=u(p,x,y.value,f))&&g&&g instanceof s)return g;return new s(!1)}).stop=function(t){return new s(!0,t)}},function(t,n,e){var r=e(1),o=e(45),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,e){var r=e(44),o=e(45),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(7);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){var r=e(7),o=e(17),i=e(1)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},function(t,n,e){var r,o,i,c,a,u,s,f,l=e(0),p=e(18).f,h=e(9),d=e(46).set,v=e(47),g=l.MutationObserver||l.WebKitMutationObserver,m=l.process,y=l.Promise,x="process"==h(m),w=p(l,"queueMicrotask"),S=w&&w.value;S||(r=function(){var t,n;for(x&&(t=m.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},x?c=function(){m.nextTick(r)}:g&&!v?(a=!0,u=document.createTextNode(""),new g(r).observe(u,{characterData:!0}),c=function(){u.data=a=!a}):y&&y.resolve?(s=y.resolve(void 0),f=s.then,c=function(){f.call(s,r)}):c=function(){d.call(l,r)}),t.exports=S||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},function(t,n,e){var r=e(7),o=e(3),i=e(48);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){var r=e(0);t.exports=function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}},function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,n,e){var r=e(21),o=/"/g;t.exports=function(t,n,e,i){var c=String(r(t)),a="<"+n;return""!==e&&(a+=" "+e+'="'+String(i).replace(o,"&quot;")+'"'),a+">"+c+"</"+n+">"}},function(t,n,e){var r=e(2);t.exports=function(t){return r((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},,,,function(t,n,e){"use strict";var r=e(69).forEach,o=e(99);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},,,,,,,,function(t,n,e){"use strict";var r=e(12),o=e(90);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,e){"use strict";var r=e(2);t.exports=function(t,n){var e=[][t];return!e||!r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(0),o=e(101),i=e(90),c=e(13);for(var a in o){var u=r[a],s=u&&u.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){},,function(t,n,e){"use strict";e.r(n);e(43),e(98),e(42),e(63),e(100),e(102);var r=e(49),o=e(8),i=document.querySelector(".title-section__title"),c=document.querySelector(".title-section__description_bold"),a=document.querySelector(".header__link-logout"),u=document.querySelector(".search-result__card-container"),s=new r.a(o.d,o.e);function f(t){try{var n=0,e=[];t.forEach((function(t){for(var r=0;r<e.length;r++)e[r]===t.keyword&&(n=1);1!==n&&e.push(t.keyword),n=0}));var r=[];if(!(e.length>1))return 1===e.length?{max1:e[0],max2:void 0}:{max1:void 0,max2:void 0};for(var o=0;o<e.length;o++){r[o]=0;for(var i=0;i<t.length;i++)e[o]===t[i].keyword&&(r[o]+=1)}for(var c,a,u=-1e3,s=0;s<r.length;s++)r[s]>u&&(u=r[s],c=s);r[c]=-999,u=-1e3;for(var f=0;f<r.length;f++)r[f]>u&&(u=r[f],a=f);return{max1:e[c],max2:e[a],length:e.length-2}}catch(t){throw new Error("Something wrong with keyword")}}a.addEventListener("click",(function(){localStorage.removeItem("token"),window.location.href="./"})),s.getUserData(localStorage.getItem("token")).then((function(t){a.textContent=t.data.name})).catch((function(){throw new Error("Something wrong with getUserData")})),s.getArticles(localStorage.getItem("token")).then((function(t){var n;n=t.data,i.textContent="".concat(a.textContent,", у вас ").concat(n.length," сохраненных статей"),void 0!==f(n).max1&&void 0!==f(n).max2&&(0!==f(n).length?c.textContent="По ключевым словам: ".concat(f(n).max1,", ").concat(f(n).max2," и ещё ").concat(f(n).length," другим"):c.textContent="По ключевым словам: ".concat(f(n).max1,", ").concat(f(n).max2)),void 0===f(n).length&&void 0!==f(n).max1&&void 0===f(n).max2&&(c.textContent="По ключевому слову: ".concat(f(n).max1)),void 0===f(n).length&&void 0===f(n).max1&&void 0===f(n).max2&&(i.textContent="".concat(a.textContent,", у вас нет сохраненных статей"),c.textContent="Сохраненных статей нет!"),function(t){for(;u.firstChild;)u.removeChild(u.firstChild);t.forEach((function(t){var n=document.createElement("div");n.classList.add("search-result__card");var e=document.createElement("div");e.classList.add("search-result__card-image-container");var r=document.createElement("div");r.classList.add("search-result__tag-container");var o=document.createElement("p");o.classList.add("search-result__tag"),o.textContent="".concat(t.keyword);var i=document.createElement("button");i.classList.add("search-result__mark");var c=document.createElement("img");c.classList.add("search-result__card-image"),c.setAttribute("src","".concat(t.image));var a=document.createElement("div");a.classList.add("search-result__card-info-container");var f=document.createElement("p");f.classList.add("search-result__date"),f.textContent="".concat(t.date);var l=document.createElement("p");l.classList.add("search-result__card-title"),l.textContent="".concat(t.title);var p=document.createElement("p");p.classList.add("search-result__text"),p.textContent="".concat(t.text);var h=document.createElement("p");h.classList.add("search-result__source"),h.textContent="".concat(t.source),e.appendChild(r),r.appendChild(o),e.appendChild(i),e.appendChild(c),a.appendChild(f),a.appendChild(l),a.appendChild(p),a.appendChild(h),n.appendChild(e),n.appendChild(a),c.addEventListener("click",(function(n){n.stopImmediatePropagation(),window.open(t.link)})),l.addEventListener("click",(function(n){window.open(t.link)})),h.addEventListener("click",(function(n){window.open(t.link)})),i.addEventListener("click",(function(n){s.removeArticle(t._id,localStorage.getItem("token")).then((function(){u.removeChild(n.target.parentNode.parentNode)})).catch((function(){throw new Error("Something wrong with addcardnews")}))})),u.appendChild(n)}))}(t.data)})).catch((function(){throw new Error("Something wrong with getArticles")}))}]);