!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=46)}([function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){t.exports=!e(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(9),o=e(34),u=e(26),i=Object.defineProperty;n.f=e(2)?Object.defineProperty:function(t,n,e){if(r(t),n=u(n,!0),r(e),o)try{return i(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(67),o=e(16);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(1),o=e(0),u=e(32),i=e(7),f=function(t,n,e){var c,a,s,l=t&f.F,p=t&f.G,y=t&f.S,v=t&f.P,d=t&f.B,h=t&f.W,b=p?o:o[n]||(o[n]={}),_=b.prototype,x=p?r:y?r[n]:(r[n]||{}).prototype;p&&(e=n);for(c in e)(a=!l&&x&&void 0!==x[c])&&c in b||(s=a?x[c]:e[c],b[c]=p&&"function"!=typeof x[c]?e[c]:d&&a?u(s,r):h&&x[c]==s?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(s):v&&"function"==typeof s?u(Function.call,s):s,v&&((b.virtual||(b.virtual={}))[c]=s,t&f.R&&_&&!_[c]&&i(_,c,s)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n,e){var r=e(4),o=e(14);t.exports=e(2)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(24)("wks"),o=e(15),u=e(1).Symbol,i="function"==typeof u;(t.exports=function(t){return r[t]||(r[t]=i&&u[t]||(i?u:o)("Symbol."+t))}).store=r},function(t,n,e){var r=e(11);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){var r=e(40),o=e(17);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){t.exports={}},function(t,n){t.exports=!0},function(t,n,e){var r=e(9),o=e(73),u=e(17),i=e(23)("IE_PROTO"),f=function(){},c=function(){var t,n=e(33)("iframe"),r=u.length;for(n.style.display="none",e(66).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object</script>"),t.close(),c=t.F;r--;)delete c.prototype[u[r]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(f.prototype=r(t),e=new f,f.prototype=null,e[i]=t):e=c(),void 0===n?e:o(e,n)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(4).f,o=e(3),u=e(8)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,u)&&r(t,u,{configurable:!0,value:n})}},function(t,n,e){var r=e(24)("keys"),o=e(15);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(1),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(11);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(1),o=e(0),u=e(19),i=e(28),f=e(4).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=u?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||f(n,t,{value:i.f(t)})}},function(t,n,e){n.f=e(8)},function(t,n,e){"use strict";n.__esModule=!0;var r=e(49),o=function(t){return t&&t.__esModule?t:{default:t}}(r);n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(53),u=r(o),i=e(52),f=r(i),c="function"==typeof f.default&&"symbol"==typeof u.default?function(t){return typeof t}:function(t){return t&&"function"==typeof f.default&&t.constructor===f.default&&t!==f.default.prototype?"symbol":typeof t};n.default="function"==typeof f.default&&"symbol"===c(u.default)?function(t){return void 0===t?"undefined":c(t)}:function(t){return t&&"function"==typeof f.default&&t.constructor===f.default&&t!==f.default.prototype?"symbol":void 0===t?"undefined":c(t)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(62);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(11),o=e(1).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,n,e){t.exports=!e(2)&&!e(10)(function(){return 7!=Object.defineProperty(e(33)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){"use strict";var r=e(19),o=e(6),u=e(41),i=e(7),f=e(3),c=e(18),a=e(69),s=e(22),l=e(39),p=e(8)("iterator"),y=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,d,h,b,_){a(e,n,d);var x,g,m,O=function(t){if(!y&&t in M)return M[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",S="values"==h,j=!1,M=t.prototype,P=M[p]||M["@@iterator"]||h&&M[h],E=P||O(h),k=h?S?O("entries"):E:void 0,F="Array"==n?M.entries||P:P;if(F&&(m=l(F.call(new t)))!==Object.prototype&&(s(m,w,!0),r||f(m,p)||i(m,p,v)),S&&P&&"values"!==P.name&&(j=!0,E=function(){return P.call(this)}),r&&!_||!y&&!j&&M[p]||i(M,p,E),c[n]=E,c[w]=v,h)if(x={values:S?E:O("values"),keys:b?E:O("keys"),entries:k},_)for(g in x)g in M||u(M,g,x[g]);else o(o.P+o.F*(y||j),n,x);return x}},function(t,n,e){var r=e(21),o=e(14),u=e(5),i=e(26),f=e(3),c=e(34),a=Object.getOwnPropertyDescriptor;n.f=e(2)?a:function(t,n){if(t=u(t),n=i(n,!0),c)try{return a(t,n)}catch(t){}if(f(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(40),o=e(17).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(3),o=e(42),u=e(23)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,n,e){var r=e(3),o=e(5),u=e(64)(!1),i=e(23)("IE_PROTO");t.exports=function(t,n){var e,f=o(t),c=0,a=[];for(e in f)e!=i&&r(f,e)&&a.push(e);for(;n.length>c;)r(f,e=n[c++])&&(~u(a,e)||a.push(e));return a}},function(t,n,e){t.exports=e(7)},function(t,n,e){var r=e(16);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r=e(12),o=function(t){return t&&t.__esModule?t:{default:t}}(r);t.exports=function t(n,e,r){(0,o.default)(this,t),this.mapHeight=n,this.mapWidth=e,this.mapArr=r}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=e(50),u=r(o),i=e(12),f=r(i),c=e(55),a=r(c),s=e(54),l=r(s),p=e(47);t.exports=function(t){function n(t,e,r){(0,f.default)(this,n);var o=(0,a.default)(this,(n.__proto__||(0,u.default)(n)).call(this,t,e));return o.angle=r,o}return(0,l.default)(n,t),n}(p)},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=e(12),u=r(o),i=e(29),f=r(i);t.exports=function(){function t(){(0,u.default)(this,t)}return(0,f.default)(t,null,[{key:"toDegrees",value:function(t){return t*(180/Math.PI)}},{key:"toRadians",value:function(t){return t*(Math.PI/180)}}]),t}()},function(t,n,e){"use strict";function r(){}function o(){r()}var u=e(43),i=e(45),f=e(44),c=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,2,2,2,2,2,0,0,0,0,3,0,3,0,3,0,0,0,1],[1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,3,0,0,0,3,0,0,0,1],[1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,2,2,0,2,2,0,0,0,0,3,0,3,0,3,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,4,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,4,0,0,0,0,5,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,4,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,4,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],a=(new u(24,24,c),new f(1,2,45),Math.tan(i.toRadians(30)),$("#canvas"));a.getContext("2d");$(document).ready(function(){o()})},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=e(12),u=r(o),i=e(29),f=r(i),c=function(){function t(n,e){(0,u.default)(this,t),this.x=n,this.y=e}return(0,f.default)(t,[{key:"length",value:function(){return Math.sqrt(Math.pow(x,2)+Math.pow(y,2))}}],[{key:"add",value:function(t,n){t.x+=n.x,t.y+=n.y}},{key:"sub",value:function(t,n){t.x-=n.x,t.y-=n.y}},{key:"mult",value:function(t,n){t.x=t.x*n,vec2.y=vec2.y*n}},{key:"div",value:function(t,n){t.x=t.x/n,vec2.y=vec2.y/n}},{key:"normalize",value:function(t){length=t.length(),t.x=t.x/length(),t.y=t.y/length()}}]),t}();t.exports=c},function(t,n,e){t.exports={default:e(56),__esModule:!0}},function(t,n,e){t.exports={default:e(57),__esModule:!0}},function(t,n,e){t.exports={default:e(58),__esModule:!0}},function(t,n,e){t.exports={default:e(59),__esModule:!0}},function(t,n,e){t.exports={default:e(60),__esModule:!0}},function(t,n,e){t.exports={default:e(61),__esModule:!0}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(51),u=r(o),i=e(48),f=r(i),c=e(30),a=r(c);n.default=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+(void 0===n?"undefined":(0,a.default)(n)));t.prototype=(0,f.default)(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(u.default?(0,u.default)(t,n):t.__proto__=n)}},function(t,n,e){"use strict";n.__esModule=!0;var r=e(30),o=function(t){return t&&t.__esModule?t:{default:t}}(r);n.default=function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==(void 0===n?"undefined":(0,o.default)(n))&&"function"!=typeof n?t:n}},function(t,n,e){e(81);var r=e(0).Object;t.exports=function(t,n){return r.create(t,n)}},function(t,n,e){e(82);var r=e(0).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){e(83),t.exports=e(0).Object.getPrototypeOf},function(t,n,e){e(84),t.exports=e(0).Object.setPrototypeOf},function(t,n,e){e(87),e(85),e(88),e(89),t.exports=e(0).Symbol},function(t,n,e){e(86),e(90),t.exports=e(28).f("iterator")},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(){}},function(t,n,e){var r=e(5),o=e(79),u=e(78);t.exports=function(t){return function(n,e,i){var f,c=r(n),a=o(c.length),s=u(i,a);if(t&&e!=e){for(;a>s;)if((f=c[s++])!=f)return!0}else for(;a>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(13),o=e(38),u=e(21);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var i,f=e(t),c=u.f,a=0;f.length>a;)c.call(t,i=f[a++])&&n.push(i);return n}},function(t,n,e){t.exports=e(1).document&&document.documentElement},function(t,n,e){var r=e(31);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(31);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(20),o=e(14),u=e(22),i={};e(7)(i,e(8)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(i,{next:o(1,e)}),u(t,n+" Iterator")}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(13),o=e(5);t.exports=function(t,n){for(var e,u=o(t),i=r(u),f=i.length,c=0;f>c;)if(u[e=i[c++]]===n)return e}},function(t,n,e){var r=e(15)("meta"),o=e(11),u=e(3),i=e(4).f,f=0,c=Object.isExtensible||function(){return!0},a=!e(10)(function(){return c(Object.preventExtensions({}))}),s=function(t){i(t,r,{value:{i:"O"+ ++f,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!u(t,r)){if(!c(t))return"F";if(!n)return"E";s(t)}return t[r].i},p=function(t,n){if(!u(t,r)){if(!c(t))return!0;if(!n)return!1;s(t)}return t[r].w},y=function(t){return a&&v.NEED&&c(t)&&!u(t,r)&&s(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:y}},function(t,n,e){var r=e(4),o=e(9),u=e(13);t.exports=e(2)?Object.defineProperties:function(t,n){o(t);for(var e,i=u(n),f=i.length,c=0;f>c;)r.f(t,e=i[c++],n[e]);return t}},function(t,n,e){var r=e(5),o=e(37).f,u={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return o(t)}catch(t){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==u.call(t)?f(t):o(r(t))}},function(t,n,e){var r=e(6),o=e(0),u=e(10);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],i={};i[t]=n(e),r(r.S+r.F*u(function(){e(1)}),"Object",i)}},function(t,n,e){var r=e(11),o=e(9),u=function(t,n){if(o(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{r=e(32)(Function.call,e(36).f(Object.prototype,"__proto__").set,2),r(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return u(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:u}},function(t,n,e){var r=e(25),o=e(16);t.exports=function(t){return function(n,e){var u,i,f=String(o(n)),c=r(e),a=f.length;return c<0||c>=a?t?"":void 0:(u=f.charCodeAt(c),u<55296||u>56319||c+1===a||(i=f.charCodeAt(c+1))<56320||i>57343?t?f.charAt(c):u:t?f.slice(c,c+2):i-56320+(u-55296<<10)+65536)}}},function(t,n,e){var r=e(25),o=Math.max,u=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):u(t,n)}},function(t,n,e){var r=e(25),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){"use strict";var r=e(63),o=e(70),u=e(18),i=e(5);t.exports=e(35)(Array,"Array",function(t,n){this._t=i(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),u.Arguments=u.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(6);r(r.S,"Object",{create:e(20)})},function(t,n,e){var r=e(6);r(r.S+r.F*!e(2),"Object",{defineProperty:e(4).f})},function(t,n,e){var r=e(42),o=e(39);e(75)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,n,e){var r=e(6);r(r.S,"Object",{setPrototypeOf:e(76).set})},function(t,n){},function(t,n,e){"use strict";var r=e(77)(!0);e(35)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){"use strict";var r=e(1),o=e(3),u=e(2),i=e(6),f=e(41),c=e(72).KEY,a=e(10),s=e(24),l=e(22),p=e(15),y=e(8),v=e(28),d=e(27),h=e(71),b=e(65),_=e(68),x=e(9),g=e(5),m=e(26),O=e(14),w=e(20),S=e(74),j=e(36),M=e(4),P=e(13),E=j.f,k=M.f,F=S.f,T=r.Symbol,A=r.JSON,I=A&&A.stringify,N=y("_hidden"),C=y("toPrimitive"),R={}.propertyIsEnumerable,W=s("symbol-registry"),D=s("symbols"),L=s("op-symbols"),J=Object.prototype,z="function"==typeof T,G=r.QObject,K=!G||!G.prototype||!G.prototype.findChild,B=u&&a(function(){return 7!=w(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=E(J,n);r&&delete J[n],k(t,n,e),r&&t!==J&&k(J,n,r)}:k,Y=function(t){var n=D[t]=w(T.prototype);return n._k=t,n},$=z&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},q=function(t,n,e){return t===J&&q(L,n,e),x(t),n=m(n,!0),x(e),o(D,n)?(e.enumerable?(o(t,N)&&t[N][n]&&(t[N][n]=!1),e=w(e,{enumerable:O(0,!1)})):(o(t,N)||k(t,N,O(1,{})),t[N][n]=!0),B(t,n,e)):k(t,n,e)},H=function(t,n){x(t);for(var e,r=b(n=g(n)),o=0,u=r.length;u>o;)q(t,e=r[o++],n[e]);return t},Q=function(t,n){return void 0===n?w(t):H(w(t),n)},U=function(t){var n=R.call(this,t=m(t,!0));return!(this===J&&o(D,t)&&!o(L,t))&&(!(n||!o(this,t)||!o(D,t)||o(this,N)&&this[N][t])||n)},V=function(t,n){if(t=g(t),n=m(n,!0),t!==J||!o(D,n)||o(L,n)){var e=E(t,n);return!e||!o(D,n)||o(t,N)&&t[N][n]||(e.enumerable=!0),e}},X=function(t){for(var n,e=F(g(t)),r=[],u=0;e.length>u;)o(D,n=e[u++])||n==N||n==c||r.push(n);return r},Z=function(t){for(var n,e=t===J,r=F(e?L:g(t)),u=[],i=0;r.length>i;)!o(D,n=r[i++])||e&&!o(J,n)||u.push(D[n]);return u};z||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===J&&n.call(L,e),o(this,N)&&o(this[N],t)&&(this[N][t]=!1),B(this,t,O(1,e))};return u&&K&&B(J,t,{configurable:!0,set:n}),Y(t)},f(T.prototype,"toString",function(){return this._k}),j.f=V,M.f=q,e(37).f=S.f=X,e(21).f=U,e(38).f=Z,u&&!e(19)&&f(J,"propertyIsEnumerable",U,!0),v.f=function(t){return Y(y(t))}),i(i.G+i.W+i.F*!z,{Symbol:T});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;tt.length>nt;)y(tt[nt++]);for(var tt=P(y.store),nt=0;tt.length>nt;)d(tt[nt++]);i(i.S+i.F*!z,"Symbol",{for:function(t){return o(W,t+="")?W[t]:W[t]=T(t)},keyFor:function(t){if($(t))return h(W,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){K=!0},useSimple:function(){K=!1}}),i(i.S+i.F*!z,"Object",{create:Q,defineProperty:q,defineProperties:H,getOwnPropertyDescriptor:V,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),A&&i(i.S+i.F*(!z||a(function(){var t=T();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!$(t)){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return n=r[1],"function"==typeof n&&(e=n),!e&&_(n)||(n=function(t,n){if(e&&(n=e.call(this,t,n)),!$(n))return n}),r[1]=n,I.apply(A,r)}}}),T.prototype[C]||e(7)(T.prototype,C,T.prototype.valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){e(27)("asyncIterator")},function(t,n,e){e(27)("observable")},function(t,n,e){e(80);for(var r=e(1),o=e(7),u=e(18),i=e(8)("toStringTag"),f=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var a=f[c],s=r[a],l=s&&s.prototype;l&&!l[i]&&o(l,i,a),u[a]=u.Array}}]);