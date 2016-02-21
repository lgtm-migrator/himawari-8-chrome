!function(){"use strict";function n(){}function t(t){function e(){if(!a)try{r()}catch(n){c[h+l-1]&&i(n)}}function r(){for(;a=f&&t>l;){var n=h+l,e=c[n],r=e.length-1,i=e[r];e[r]=o(n),--f,++l,e=i.apply(null,e),c[n]&&(c[n]=e||k)}}function o(n){return function(t,r){c[n]&&(--l,++h,c[n]=null,null==p&&(null!=t?i(t):(s[n]=r,f?e():l||g(p,s))))}}function i(n){var t,e=c.length;for(p=n,s=void 0,f=NaN;--e>=0;)if((t=c[e])&&(c[e]=null,t.abort))try{t.abort()}catch(n){}l=NaN,g(p,s)}if(!(t>=1))throw new Error;var u,a,c=[],s=[],f=0,l=0,h=0,p=null,g=n;return u={defer:function(t){if("function"!=typeof t||g!==n)throw new Error;if(null!=p)return u;var r=S.call(arguments,1);return r.push(t),++f,c.push(r),e(),u},abort:function(){return null==p&&i(new Error("abort")),u},await:function(t){if("function"!=typeof t||g!==n)throw new Error;return g=function(n,e){t.apply(null,[n].concat(e))},l||g(p,s),u},awaitAll:function(t){if("function"!=typeof t||g!==n)throw new Error;return g=t,l||g(p,s),u}}}function e(n){return t(arguments.length?+n:1/0)}function r(){}function o(n,t){var e=new r;if(n instanceof r)n.each(function(n,t){e.set(t,n)});else if(Array.isArray(n)){var o,i=-1,u=n.length;if(null==t)for(;++i<u;)e.set(i,n[i]);else for(;++i<u;)e.set(t(o=n[i],i,n),o)}else if(n)for(var a in n)e.set(a,n[a]);return e}function i(){for(var n,t=0,e=arguments.length,r={};e>t;++t){if(!(n=arguments[t]+"")||n in r)throw new Error("illegal or duplicate type: "+n);r[n]=[]}return new u(r)}function u(n){this._=n}function a(n,t){return n.trim().split(/^|\s+/).map(function(n){var e="",r=n.indexOf(".");if(r>=0&&(e=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:e}})}function c(n,t){for(var e,r=0,o=n.length;o>r;++r)if((e=n[r]).name===t)return e.value}function s(n,t,e){for(var r=0,o=n.length;o>r;++r)if(n[r].name===t){n[r]=q,n=n.slice(0,r).concat(n.slice(r+1));break}return null!=e&&n.push({name:t,value:e}),n}function f(n,t){function e(n){var t,e=p.status;if(!e&&h(p)||e>=200&&300>e||304===e){if(a)try{t=a.call(r,p)}catch(o){return void s.call("error",r,o)}else t=p;s.call("load",r,t)}else s.call("error",r,n)}var r,u,a,c,s=i("beforesend","progress","load","error"),f=o(),p=new XMLHttpRequest,g=0;return"undefined"==typeof XDomainRequest||"withCredentials"in p||!/^(http(s)?:)?\/\//.test(n)||(p=new XDomainRequest),"onload"in p?p.onload=p.onerror=p.ontimeout=e:p.onreadystatechange=function(n){p.readyState>3&&e(n)},p.onprogress=function(n){s.call("progress",r,n)},r={header:function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?f.get(n):(null==t?f.remove(n):f.set(n,t+""),r)},mimeType:function(n){return arguments.length?(u=null==n?null:n+"",r):u},responseType:function(n){return arguments.length?(c=n,r):c},timeout:function(n){return arguments.length?(g=+n,r):g},response:function(n){return a=n,r},get:function(n,t){return r.send("GET",n,t)},post:function(n,t){return r.send("POST",n,t)},send:function(t,e,o){return o||"function"!=typeof e||(o=e,e=null),o&&1===o.length&&(o=l(o)),p.open(t,n,!0),null==u||f.has("accept")||f.set("accept",u+",*/*"),p.setRequestHeader&&f.each(function(n,t){p.setRequestHeader(t,n)}),null!=u&&p.overrideMimeType&&p.overrideMimeType(u),null!=c&&(p.responseType=c),g>0&&(p.timeout=g),o&&r.on("error",o).on("load",function(n){o(null,n)}),s.call("beforesend",r,p),p.send(null==e?null:e),r},abort:function(){return p.abort(),r},on:function(){var n=s.on.apply(s,arguments);return n===s?r:n}},t?r.get(t):r}function l(n){return function(t,e){n(null==t?e:null)}}function h(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function p(n,t){return function(e,r){var o=f(e).mimeType(n).response(t);return r?o.get(r):o}}function g(n){return new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}")}function v(n,t){var e=g(n);return function(r,o){return t(e(r),o,n)}}function d(n){var t=Object.create(null),e=[];return n.forEach(function(n){for(var r in n)r in t||e.push(t[r]=r)}),e}function m(n){function t(n,t){var r,o,i=e(n,function(n,e){return r?r(n,e-1):(o=n,void(r=t?v(n,t):g(n)))});return i.columns=o,i}function e(n,t){function e(){if(f>=s)return u;if(o)return o=!1,i;var t,e=f;if(34===n.charCodeAt(e)){for(var r=e;r++<s;)if(34===n.charCodeAt(r)){if(34!==n.charCodeAt(r+1))break;++r}return f=r+2,t=n.charCodeAt(r+1),13===t?(o=!0,10===n.charCodeAt(r+2)&&++f):10===t&&(o=!0),n.slice(e+1,r).replace(/""/g,'"')}for(;s>f;){var a=1;if(t=n.charCodeAt(f++),10===t)o=!0;else if(13===t)o=!0,10===n.charCodeAt(f)&&(++f,++a);else if(t!==c)continue;return n.slice(e,f-a)}return n.slice(e)}for(var r,o,i={},u={},a=[],s=n.length,f=0,l=0;(r=e())!==u;){for(var h=[];r!==i&&r!==u;)h.push(r),r=e();t&&null==(h=t(h,l++))||a.push(h)}return a}function r(t,e){return null==e&&(e=d(t)),[e.map(u).join(n)].concat(t.map(function(t){return e.map(function(n){return u(t[n])}).join(n)})).join("\n")}function o(n){return n.map(i).join("\n")}function i(t){return t.map(u).join(n)}function u(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return{parse:t,parseRows:e,format:r,formatRows:o}}function w(n){n=n||{};var t=y(n.infrared),e=b(n.date);e=T(e);for(var r=n.blocks||(n.zoom?B[n.zoom-1]:B[0]),o=r+"d",i=[e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(function(n){return E(n,2)}).join(""),u=e.getUTCFullYear(),a=E(e.getUTCMonth()+1,2),c=E(e.getUTCDate(),2),s=[t,o,H,u,a,c,i].join("/"),f=[],l=0;r>l;l++)for(var h=0;r>h;h++){var p=h+"_"+l+".png",g=s+"_"+p;f.push({name:p,url:C(g),x:h,y:l})}return{tiles:f,blocks:r,date:e}}function y(n){var t=O;return t+=n?_:N}function T(n){return n.setMinutes(n.getMinutes()-n.getMinutes()%10),n.setSeconds(0),n}function b(n){if("string"==typeof n){var t=n.match(/(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2}):(\d{2})Z/);return t[2]-=1,new Date(Date.UTC.apply(this,t.slice(1)))}return n}function C(n){var t=432e3;return"https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?url="+n+"&container=focus&refresh="+t}function E(n,t){for(var e=n+"";e.length<t;)e="0"+e;return e}function I(n,t){var e=y(n),r='select date from json where url="'+e+'/latest.json"';L("https://query.yahooapis.com/v1/public/yql?q="+r+"&format=json",function(n){var e=n.query.results.json.date;t(b(e+"Z"))})}function j(){for(var n=window.innerHeight*window.devicePixelRatio,t=n/H,e=0;e<B.length;e++){var r=B[e];if(r>t)return r}return B[B.length-1]}function A(n){var t=(Date.now()-n.getTime())/6e4;document.getElementById("time").innerHTML='<abbr title="'+n+'">'+Math.floor(t)+" minutes</abbr> ago"}function x(n){function t(n,t){var e=new Image;e.setAttribute("crossOrigin","anonymous"),e.onload=function(){a.drawImage(e,n.x*H,n.y*H,H,H),t()},e.src=n.url}if(!U||n.getTime()!==U.getTime()){var r=!localStorage.getItem(J),o=w({date:n,blocks:j()}),i=o.blocks*H,u=r?document.getElementById("output"):document.createElement("canvas"),a=u.getContext("2d");a.canvas.width=i,a.canvas.height=i;var c=e();o.tiles.forEach(function(n){c.defer(t,n)}),c.awaitAll(function(t){if(t)throw t;if(!r){var e=document.getElementById("output"),a=e.getContext("2d");a.canvas.width=i,a.canvas.height=i,a.drawImage(u,0,0)}A(o.date),U=n;var c=u.toDataURL("image/jpeg",F);localStorage.setItem(X,c),localStorage.setItem(J,n)})}}function D(){navigator.onLine&&I(!1,function(n){x(n)})}function R(){var n=document.getElementById("output"),t=n.getContext("2d"),e=new Date(localStorage.getItem(J)),r=new Image;r.onload=function(){t.canvas.width=r.width,t.canvas.height=r.height,t.drawImage(r,0,0),A(e),U=e},r.src=localStorage.getItem(X)}var S=[].slice,k={},M="$";r.prototype=o.prototype={has:function(n){return M+n in this},get:function(n){return this[M+n]},set:function(n,t){return this[M+n]=t,this},remove:function(n){var t=M+n;return t in this&&delete this[t]},clear:function(){for(var n in this)n[0]===M&&delete this[n]},keys:function(){var n=[];for(var t in this)t[0]===M&&n.push(t.slice(1));return n},values:function(){var n=[];for(var t in this)t[0]===M&&n.push(this[t]);return n},entries:function(){var n=[];for(var t in this)t[0]===M&&n.push({key:t.slice(1),value:this[t]});return n},size:function(){var n=0;for(var t in this)t[0]===M&&++n;return n},empty:function(){for(var n in this)if(n[0]===M)return!1;return!0},each:function(n){for(var t in this)t[0]===M&&n(this[t],t.slice(1),this)}};var q=(o.prototype,{value:function(){}});i.prototype=u.prototype={on:function(n,t){var e,r=this._,o=a(n+"",r),i=-1,u=o.length;{if(!(arguments.length<2)){for(;++i<u;)if(e=(n=o[i]).type)r[e]=s(r[e],n.name,t);else if(null==t)for(e in r)r[e]=s(r[e],n.name,null);return this}for(;++i<u;)if((e=(n=o[i]).type)&&(e=c(r[e],n.name)))return e}},copy:function(){var n={},t=this._;for(var e in t)n[e]=t[e].slice();return new u(n)},call:function(n,t){if((e=arguments.length-2)>0)for(var e,r=new Array(e),o=0;e>o;++o)r[o]=arguments[o+2];this.apply(n,t,r)},apply:function(n,t,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var r=this._[n],o=0,i=r.length;i>o;++o)r[o].value.apply(t,e)}};var U,L=p("application/json",function(n){return JSON.parse(n.responseText)}),O=(m(","),m("	"),"http://himawari8-dl.nict.go.jp/himawari8/img/"),_="INFRARED_FULL",N="D531106",H=550,B=[1,4,8,16,20],F=.9,P=12e4,z=1e4,X="imageData",J="cachedDate";window.setInterval(D,P),window.addEventListener("online",D),localStorage.getItem(J)?(R(),D()):D(),window.setInterval(function(){U&&A(U)},z)}();
//# sourceMappingURL=bundle.js.map