!function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function e(e,t,n,r){return new(n||(n=Promise))((function(o,u){function a(e){try{i(r.next(e))}catch(e){u(e)}}function c(e){try{i(r.throw(e))}catch(e){u(e)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}i((r=r.apply(e,t||[])).next())}))}var t=new Date,n=new Date;function r(e,o,u,a){function c(t){return e(t=0===arguments.length?new Date:new Date(+t)),t}return c.floor=function(t){return e(t=new Date(+t)),t},c.ceil=function(t){return e(t=new Date(t-1)),o(t,1),e(t),t},c.round=function(e){var t=c(e),n=c.ceil(e);return e-t<n-e?t:n},c.offset=function(e,t){return o(e=new Date(+e),null==t?1:Math.floor(t)),e},c.range=function(t,n,r){var u,a=[];if(t=c.ceil(t),r=null==r?1:Math.floor(r),!(t<n&&r>0))return a;do{a.push(u=new Date(+t)),o(t,r),e(t)}while(u<t&&t<n);return a},c.filter=function(t){return r((function(n){if(n>=n)for(;e(n),!t(n);)n.setTime(n-1)}),(function(e,n){if(e>=e)if(n<0)for(;++n<=0;)for(;o(e,-1),!t(e););else for(;--n>=0;)for(;o(e,1),!t(e););}))},u&&(c.count=function(r,o){return t.setTime(+r),n.setTime(+o),e(t),e(n),Math.floor(u(t,n))},c.every=function(e){return e=Math.floor(e),isFinite(e)&&e>0?e>1?c.filter(a?function(t){return a(t)%e==0}:function(t){return c.count(0,t)%e==0}):c:null}),c}var o=864e5,u=6048e5,a=r((e=>e.setHours(0,0,0,0)),((e,t)=>e.setDate(e.getDate()+t)),((e,t)=>(t-e-6e4*(t.getTimezoneOffset()-e.getTimezoneOffset()))/o),(e=>e.getDate()-1));function c(e){return r((function(t){t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)}),(function(e,t){e.setDate(e.getDate()+7*t)}),(function(e,t){return(t-e-6e4*(t.getTimezoneOffset()-e.getTimezoneOffset()))/u}))}var i=c(0),s=c(1),l=(c(2),c(3),c(4)),f=(c(5),c(6),r((function(e){e.setMonth(0,1),e.setHours(0,0,0,0)}),(function(e,t){e.setFullYear(e.getFullYear()+t)}),(function(e,t){return t.getFullYear()-e.getFullYear()}),(function(e){return e.getFullYear()})));f.every=function(e){return isFinite(e=Math.floor(e))&&e>0?r((function(t){t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,n){t.setFullYear(t.getFullYear()+n*e)})):null};var g=r((function(e){e.setUTCHours(0,0,0,0)}),(function(e,t){e.setUTCDate(e.getUTCDate()+t)}),(function(e,t){return(t-e)/o}),(function(e){return e.getUTCDate()-1}));function d(e){return r((function(t){t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)}),(function(e,t){e.setUTCDate(e.getUTCDate()+7*t)}),(function(e,t){return(t-e)/u}))}var m=d(0),h=d(1),y=(d(2),d(3),d(4)),w=(d(5),d(6),r((function(e){e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)}),(function(e,t){e.setUTCFullYear(e.getUTCFullYear()+t)}),(function(e,t){return t.getUTCFullYear()-e.getUTCFullYear()}),(function(e){return e.getUTCFullYear()})));function v(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function T(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function p(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}w.every=function(e){return isFinite(e=Math.floor(e))&&e>0?r((function(t){t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n*e)})):null};var C,D,U,M={"-":"",_:" ",0:"0"},b=/^\s*\d+/,S=/^%/,x=/[\\^$*+?|[\]().{}]/g;function I(e,t,n){var r=e<0?"-":"",o=(r?-e:e)+"",u=o.length;return r+(u<n?new Array(n-u+1).join(t)+o:o)}function E(e){return e.replace(x,"\\$&")}function L(e){return new RegExp("^(?:"+e.map(E).join("|")+")","i")}function F(e){return new Map(e.map(((e,t)=>[e.toLowerCase(),t])))}function Y(e,t,n){var r=b.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function _(e,t,n){var r=b.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function A(e,t,n){var r=b.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function H(e,t,n){var r=b.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function O(e,t,n){var r=b.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function $(e,t,n){var r=b.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function k(e,t,n){var r=b.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function G(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function B(e,t,n){var r=b.exec(t.slice(n,n+1));return r?(e.q=3*r[0]-3,n+r[0].length):-1}function j(e,t,n){var r=b.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function N(e,t,n){var r=b.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function R(e,t,n){var r=b.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function P(e,t,n){var r=b.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function Z(e,t,n){var r=b.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function W(e,t,n){var r=b.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function V(e,t,n){var r=b.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function q(e,t,n){var r=b.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function J(e,t,n){var r=S.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function Q(e,t,n){var r=b.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function X(e,t,n){var r=b.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function z(e,t){return I(e.getDate(),t,2)}function K(e,t){return I(e.getHours(),t,2)}function ee(e,t){return I(e.getHours()%12||12,t,2)}function te(e,t){return I(1+a.count(f(e),e),t,3)}function ne(e,t){return I(e.getMilliseconds(),t,3)}function re(e,t){return ne(e,t)+"000"}function oe(e,t){return I(e.getMonth()+1,t,2)}function ue(e,t){return I(e.getMinutes(),t,2)}function ae(e,t){return I(e.getSeconds(),t,2)}function ce(e){var t=e.getDay();return 0===t?7:t}function ie(e,t){return I(i.count(f(e)-1,e),t,2)}function se(e){var t=e.getDay();return t>=4||0===t?l(e):l.ceil(e)}function le(e,t){return e=se(e),I(l.count(f(e),e)+(4===f(e).getDay()),t,2)}function fe(e){return e.getDay()}function ge(e,t){return I(s.count(f(e)-1,e),t,2)}function de(e,t){return I(e.getFullYear()%100,t,2)}function me(e,t){return I((e=se(e)).getFullYear()%100,t,2)}function he(e,t){return I(e.getFullYear()%1e4,t,4)}function ye(e,t){var n=e.getDay();return I((e=n>=4||0===n?l(e):l.ceil(e)).getFullYear()%1e4,t,4)}function we(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+I(t/60|0,"0",2)+I(t%60,"0",2)}function ve(e,t){return I(e.getUTCDate(),t,2)}function Te(e,t){return I(e.getUTCHours(),t,2)}function pe(e,t){return I(e.getUTCHours()%12||12,t,2)}function Ce(e,t){return I(1+g.count(w(e),e),t,3)}function De(e,t){return I(e.getUTCMilliseconds(),t,3)}function Ue(e,t){return De(e,t)+"000"}function Me(e,t){return I(e.getUTCMonth()+1,t,2)}function be(e,t){return I(e.getUTCMinutes(),t,2)}function Se(e,t){return I(e.getUTCSeconds(),t,2)}function xe(e){var t=e.getUTCDay();return 0===t?7:t}function Ie(e,t){return I(m.count(w(e)-1,e),t,2)}function Ee(e){var t=e.getUTCDay();return t>=4||0===t?y(e):y.ceil(e)}function Le(e,t){return e=Ee(e),I(y.count(w(e),e)+(4===w(e).getUTCDay()),t,2)}function Fe(e){return e.getUTCDay()}function Ye(e,t){return I(h.count(w(e)-1,e),t,2)}function _e(e,t){return I(e.getUTCFullYear()%100,t,2)}function Ae(e,t){return I((e=Ee(e)).getUTCFullYear()%100,t,2)}function He(e,t){return I(e.getUTCFullYear()%1e4,t,4)}function Oe(e,t){var n=e.getUTCDay();return I((e=n>=4||0===n?y(e):y.ceil(e)).getUTCFullYear()%1e4,t,4)}function $e(){return"+0000"}function ke(){return"%"}function Ge(e){return+e}function Be(e){return Math.floor(+e/1e3)}C=function(e){var t=e.dateTime,n=e.date,r=e.time,o=e.periods,u=e.days,c=e.shortDays,i=e.months,l=e.shortMonths,f=L(o),d=F(o),m=L(u),y=F(u),w=L(c),C=F(c),D=L(i),U=F(i),b=L(l),S=F(l),x={a:function(e){return c[e.getDay()]},A:function(e){return u[e.getDay()]},b:function(e){return l[e.getMonth()]},B:function(e){return i[e.getMonth()]},c:null,d:z,e:z,f:re,g:me,G:ye,H:K,I:ee,j:te,L:ne,m:oe,M:ue,p:function(e){return o[+(e.getHours()>=12)]},q:function(e){return 1+~~(e.getMonth()/3)},Q:Ge,s:Be,S:ae,u:ce,U:ie,V:le,w:fe,W:ge,x:null,X:null,y:de,Y:he,Z:we,"%":ke},I={a:function(e){return c[e.getUTCDay()]},A:function(e){return u[e.getUTCDay()]},b:function(e){return l[e.getUTCMonth()]},B:function(e){return i[e.getUTCMonth()]},c:null,d:ve,e:ve,f:Ue,g:Ae,G:Oe,H:Te,I:pe,j:Ce,L:De,m:Me,M:be,p:function(e){return o[+(e.getUTCHours()>=12)]},q:function(e){return 1+~~(e.getUTCMonth()/3)},Q:Ge,s:Be,S:Se,u:xe,U:Ie,V:Le,w:Fe,W:Ye,x:null,X:null,y:_e,Y:He,Z:$e,"%":ke},E={a:function(e,t,n){var r=w.exec(t.slice(n));return r?(e.w=C.get(r[0].toLowerCase()),n+r[0].length):-1},A:function(e,t,n){var r=m.exec(t.slice(n));return r?(e.w=y.get(r[0].toLowerCase()),n+r[0].length):-1},b:function(e,t,n){var r=b.exec(t.slice(n));return r?(e.m=S.get(r[0].toLowerCase()),n+r[0].length):-1},B:function(e,t,n){var r=D.exec(t.slice(n));return r?(e.m=U.get(r[0].toLowerCase()),n+r[0].length):-1},c:function(e,n,r){return je(e,t,n,r)},d:N,e:N,f:q,g:k,G:$,H:P,I:P,j:R,L:V,m:j,M:Z,p:function(e,t,n){var r=f.exec(t.slice(n));return r?(e.p=d.get(r[0].toLowerCase()),n+r[0].length):-1},q:B,Q:Q,s:X,S:W,u:_,U:A,V:H,w:Y,W:O,x:function(e,t,r){return je(e,n,t,r)},X:function(e,t,n){return je(e,r,t,n)},y:k,Y:$,Z:G,"%":J};function se(e,t){return function(n){var r,o,u,a=[],c=-1,i=0,s=e.length;for(n instanceof Date||(n=new Date(+n));++c<s;)37===e.charCodeAt(c)&&(a.push(e.slice(i,c)),null!=(o=M[r=e.charAt(++c)])?r=e.charAt(++c):o="e"===r?" ":"0",(u=t[r])&&(r=u(n,o)),a.push(r),i=c+1);return a.push(e.slice(i,c)),a.join("")}}function Ee(e,t){return function(n){var r,o,u=p(1900,void 0,1);if(je(u,e,n+="",0)!=n.length)return null;if("Q"in u)return new Date(u.Q);if("s"in u)return new Date(1e3*u.s+("L"in u?u.L:0));if(t&&!("Z"in u)&&(u.Z=0),"p"in u&&(u.H=u.H%12+12*u.p),void 0===u.m&&(u.m="q"in u?u.q:0),"V"in u){if(u.V<1||u.V>53)return null;"w"in u||(u.w=1),"Z"in u?(o=(r=T(p(u.y,0,1))).getUTCDay(),r=o>4||0===o?h.ceil(r):h(r),r=g.offset(r,7*(u.V-1)),u.y=r.getUTCFullYear(),u.m=r.getUTCMonth(),u.d=r.getUTCDate()+(u.w+6)%7):(o=(r=v(p(u.y,0,1))).getDay(),r=o>4||0===o?s.ceil(r):s(r),r=a.offset(r,7*(u.V-1)),u.y=r.getFullYear(),u.m=r.getMonth(),u.d=r.getDate()+(u.w+6)%7)}else("W"in u||"U"in u)&&("w"in u||(u.w="u"in u?u.u%7:"W"in u?1:0),o="Z"in u?T(p(u.y,0,1)).getUTCDay():v(p(u.y,0,1)).getDay(),u.m=0,u.d="W"in u?(u.w+6)%7+7*u.W-(o+5)%7:u.w+7*u.U-(o+6)%7);return"Z"in u?(u.H+=u.Z/100|0,u.M+=u.Z%100,T(u)):v(u)}}function je(e,t,n,r){for(var o,u,a=0,c=t.length,i=n.length;a<c;){if(r>=i)return-1;if(37===(o=t.charCodeAt(a++))){if(o=t.charAt(a++),!(u=E[o in M?t.charAt(a++):o])||(r=u(e,n,r))<0)return-1}else if(o!=n.charCodeAt(r++))return-1}return r}return x.x=se(n,x),x.X=se(r,x),x.c=se(t,x),I.x=se(n,I),I.X=se(r,I),I.c=se(t,I),{format:function(e){var t=se(e+="",x);return t.toString=function(){return e},t},parse:function(e){var t=Ee(e+="",!1);return t.toString=function(){return e},t},utcFormat:function(e){var t=se(e+="",I);return t.toString=function(){return e},t},utcParse:function(e){var t=Ee(e+="",!0);return t.toString=function(){return e},t}}}({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}),C.format,C.parse,D=C.utcFormat,U=C.utcParse;const je="https://epic.gsfc.nasa.gov/",Ne="https://rammb-slider.cira.colostate.edu/data/",Re="https://epic.gsfc.nasa.gov",Pe="INFRARED_FULL",Ze="D531106",We="EPIC",Ve="EPIC_ENHANCED",qe="GOES_16",Je="GOES_16_NATURAL",Qe="GOES_17",Xe="GOES_17_NATURAL",ze="METEOSAT",Ke="METEOSAT_IODC",et=550,tt=[1,4,8,16,20],nt=678,rt=[1,2,4,8,16],ot=2048,ut="imageData",at="cachedDate",ct="cachedImageType",it=window.browser&&!!browser.storage,st={animated:!1,imageType:Ze};function lt(e,t=432e3){return it?e:`https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?url=${e}&container=focus&refresh=${t}`}function ft(e,t){let n=e+"";for(;n.length<t;)n="0"+n;return n}function gt(t){return e(this,void 0,void 0,(function*(){const e=yield fetch("https://himawari-8.appspot.com/latest"+(t===Pe?"?infrared=true":"")),n=(yield e.json()).date;return U("%Y-%m-%d %H:%M:%S")(n)}))}function dt(e,t){const n=document.getElementById("output").clientHeight*window.devicePixelRatio/e;for(let e=0;e<t.length;e++){const r=t[e];if(r>n)return{blocks:r,level:e}}const r=t.length-1;return{blocks:t[r],level:r}}let mt=null,ht=null;function yt(e){document.getElementById("time").innerHTML=null===e?"":`<abbr title="${e}">${function(e){const t=Math.floor(((new Date).getTime()-e.getTime())/1e3);let n=Math.floor(t/31536e3);return n>1?n+" years":(n=Math.floor(t/2592e3),n>1?n+" months":(n=Math.floor(t/86400),n>1?n+" days":(n=Math.floor(t/3600),n>1?n+" hours":(n=Math.floor(t/60),n>1?n+" minutes":Math.floor(t)+" seconds"))))}(e)}</abbr> ago`}function wt(e,t){yt(e),mt=e,function(e){switch(document.body.classList.remove("himawari"),document.body.classList.remove("dscovr"),document.body.classList.remove("goes"),document.body.classList.remove("goes16"),document.body.classList.remove("meteosat"),e){case Pe:case Ze:document.body.classList.add("himawari");break;case We:case Ve:document.body.classList.add("dscovr");break;case qe:case Je:case Qe:case Xe:document.body.classList.add("goes");break;case ze:case Ke:document.body.classList.add("meteosat");break;default:console.warn("Unknown image type",e)}}(t),ht=t}function vt(e,t,n=.95){const r=document.getElementById("output").toDataURL("image/jpeg",n);try{localStorage.setItem(ut,r)}catch(r){if(n>.5)return n-=.05,console.warn("Couldn't store image. Trying again with lower image quality of "+n),vt(e,t,n)}localStorage.setItem(at,e.toString()),localStorage.setItem(ct,t)}function Tt(e,t){if(mt&&e.getTime()===mt.getTime()&&ht===t)return;const n=!localStorage.getItem(at);n&&wt(e,t);const r=function(e){const t="https://himawari8-dl.nict.go.jp/himawari8/img/"+(e.type||Ze),n=e.date,r=e.blocks,o=`${t}/${r}d/550/${D("%Y/%m/%d/%H%M%S")(n)}`,u=[];for(let e=0;e<r;e++)for(let t=0;t<r;t++){const n=`${o}_${t}_${e}.png`;u.push({url:lt(n),x:t,y:e})}return{blocks:r,date:n,tiles:u}}({blocks:dt(et,tt).blocks,date:e,type:t}),o=r.blocks*et,u=n?document.getElementById("output"):document.createElement("canvas"),a=u.getContext("2d");a.canvas.width=o,a.canvas.height=o,Promise.all(r.tiles.map((e=>function(e){return new Promise((t=>{const n=new Image;n.setAttribute("crossOrigin","anonymous"),n.onload=()=>{a.drawImage(n,e.x*et,e.y*et,et,et),t()},n.src=e.url}))}(e)))).catch((e=>{throw e})).then((()=>{if(!n){const e=document.getElementById("output").getContext("2d");e.canvas.width=o,e.canvas.height=o,e.drawImage(u,0,0)}wt(e,t),vt(e,t)}))}function pt(e,t){if(mt&&e.getTime()===mt.getTime()&&ht===t)return;const n=!localStorage.getItem(at);n&&wt(e,t);const r=function(e){const t=e.date,n=e.blocks,r=e.level,o={GOES_16:"geocolor",GOES_16_NATURAL:"natural_color",GOES_17:"geocolor",GOES_17_NATURAL:"natural_color"}[e.type],u={GOES_16:16,GOES_16_NATURAL:16,GOES_17:17,GOES_17_NATURAL:17}[e.type],a=D("%Y%m%d")(e.date),c=D("%Y%m%d%H%M%S")(e.date),i=`${Ne}imagery/${a}/goes-${u}---full_disk/${o}/${c}/`,s=[];for(let e=0;e<n;e++)for(let t=0;t<n;t++){const n=`${i}${ft(r,2)}/${ft(e,3)}_${ft(t,3)}.png`;s.push({url:lt(n),x:t,y:e})}return{blocks:n,date:t,tiles:s}}(Object.assign({date:e,type:t},dt(nt,rt))),o=r.blocks*nt,u=n?document.getElementById("output"):document.createElement("canvas"),a=u.getContext("2d");a.canvas.width=o,a.canvas.height=o,Promise.all(r.tiles.map((e=>function(e){return new Promise((t=>{const n=new Image;n.setAttribute("crossOrigin","anonymous"),n.onload=()=>{a.drawImage(n,e.x*nt,e.y*nt,nt,nt),t()},n.src=e.url}))}(e)))).catch((e=>{throw e})).then((()=>{if(!n){const e=document.getElementById("output").getContext("2d");e.canvas.width=o,e.canvas.height=o,e.drawImage(u,0,0)}wt(e,t),vt(e,t)}))}function Ct(){return e(this,void 0,void 0,(function*(){if(navigator.onLine)if(it){document.title="New Tab";const{imageType:t}=yield browser.storage.sync.get(st);switch(t){case We:case Ve:!function(e,t){if(mt&&e.date.getTime()===mt.getTime()&&ht===t)return;const n=!localStorage.getItem(at);n&&wt(e.date,t);const r=n?document.getElementById("output"):document.createElement("canvas"),o=r.getContext("2d");o.canvas.width=ot,o.canvas.height=ot;const u=new Image;u.setAttribute("crossOrigin","anonymous"),u.onload=()=>{if(o.drawImage(u,0,0),!n){const e=document.getElementById("output").getContext("2d");e.canvas.width=ot,e.canvas.height=ot,e.drawImage(r,0,0)}wt(e.date,t),vt(e.date,t)};const a=t===Ve?"enhanced":"natural",c=ft(e.date.getMonth()+1,2),i=ft(e.date.getDate(),2);u.src=lt(`${je}archive/${a}/${e.date.getFullYear()}/${c}/${i}/png/${e.image}.png`)}(yield function(t){return e(this,void 0,void 0,(function*(){const e=yield fetch(`${je}api/${t===Ve?"enhanced":"natural"}`),n=yield e.json();if(0===n.length)return null;const r=n[n.length-1];return{date:U("%Y-%m-%d %H:%M:%S")(r.date),image:r.image}}))}(t),t);break;case qe:case Je:case Qe:case Xe:pt(yield function(t){return e(this,void 0,void 0,(function*(){const e={GOES_16:16,GOES_16_NATURAL:16,GOES_17:17,GOES_17_NATURAL:17}[t],n=yield fetch(`${Ne}json/goes-${e}/full_disk/geocolor/latest_times.json`),r=yield n.json();return U("%Y%m%d%H%M%S")(r.timestamps_int[0])}))}(t),t);break;case ze:case Ke:!function(e,t){if(mt&&e.date.getTime()===mt.getTime()&&ht===t)return;const n=!localStorage.getItem(at);n&&wt(e.date,t);const r=n?document.getElementById("output"):document.createElement("canvas"),o=r.getContext("2d");o.canvas.width=3712,o.canvas.height=3630;const u=new Image;u.setAttribute("crossOrigin","anonymous"),u.onload=()=>{if(o.drawImage(u,0,0),!n){const e=document.getElementById("output").getContext("2d");e.canvas.width=3712,e.canvas.height=3630,e.drawImage(r,0,0)}wt(e.date,t),vt(e.date,t)},u.src=lt(e.image)}(yield function(t){return e(this,void 0,void 0,(function*(){const e=yield fetch("https://meteosat-url.appspot.com/msg"+(t===Ke?"iodc":"")),n=yield e.json();return{date:U("%Y-%m-%d %H:%M:%S")(n.date),image:n.url}}))}(t),t);break;case Pe:case Ze:default:Tt(yield gt(t),t)}}else Tt(yield gt(Ze),Ze)}))}function Dt(){localStorage.getItem(at)&&function(){const e=document.getElementById("output").getContext("2d"),t=new Date(localStorage.getItem(at)),n=new Image;n.onload=()=>{e.canvas.width=n.width,e.canvas.height=n.height,e.drawImage(n,0,0),wt(t,localStorage.getItem(ct))},n.src=localStorage.getItem(ut)}(),Ct()}window.setInterval(Ct,6e4),window.addEventListener("online",Ct),it?browser.storage.sync.get(st).then((e=>{e.animated?document.body.classList.add("animated"):document.body.classList.remove("animated"),Dt()})):Dt(),window.setInterval((()=>{mt&&yt(mt)}),1e4),it&&(browser.storage.onChanged.addListener(Ct),document.body.classList.add("extension"),document.getElementById("go-to-options").addEventListener("click",(()=>{browser.runtime.openOptionsPage()}))),document.getElementById("explore").addEventListener("click",(()=>{switch(ht){case We:window.open(Re,"_self");break;case Ve:window.open("https://epic.gsfc.nasa.gov/enhanced","_self");break;case qe:case Je:case Qe:case Xe:window.open("https://rammb-slider.cira.colostate.edu/","_self");break;case Pe:case Ze:window.open("https://himawari8.nict.go.jp/himawari8-image.htm?sI=D531106","_self");break;case ze:case Ke:window.open("https://eumetview.eumetsat.int/static-images/","_self");break;default:window.alert("No explorer found.")}}))}();
//# sourceMappingURL=bundle.js.map
