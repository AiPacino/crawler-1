(function(){'use strict';var k,aa=aa||{},m=this;function ba(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}function p(a,b){for(var c=a.split("."),d=b||m,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}function q(){}
function r(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function t(a){var b=r(a);return"array"==b||"object"==b&&"number"==typeof a.length}function u(a){return"string"==typeof a}function v(a){return"number"==typeof a}function w(a){return"function"==r(a)}function ca(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var da="closure_uid_"+(1E9*Math.random()>>>0),ea=0;function fa(a,b,c){return a.call.apply(a.bind,arguments)}
function ga(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function x(a,b,c){x=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?fa:ga;return x.apply(null,arguments)}
function ha(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var ia=Date.now||function(){return+new Date};
function ja(a){if(m.execScript)m.execScript(a,"JavaScript");else if(m.eval){if(null==ka)if(m.eval("var _evalTest_ = 1;"),"undefined"!=typeof m._evalTest_){try{delete m._evalTest_}catch(d){}ka=!0}else ka=!1;if(ka)m.eval(a);else{var b=m.document,c=b.createElement("SCRIPT");c.type="text/javascript";c.defer=!1;c.appendChild(b.createTextNode(a));b.body.appendChild(c);b.body.removeChild(c)}}else throw Error("goog.globalEval not available");}var ka=null;
function y(a,b){function c(){}c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.ta=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};function z(a){if(Error.captureStackTrace)Error.captureStackTrace(this,z);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}y(z,Error);z.prototype.name="CustomError";var la=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function ma(a){if(!na.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(oa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(pa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(qa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ra,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(sa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ta,"&#0;"));return a}var oa=/&/g,pa=/</g,qa=/>/g,ra=/"/g,sa=/'/g,ta=/\x00/g,na=/[\x00&<>"']/;
function ua(a,b){return a<b?-1:a>b?1:0};var xa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ya=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},za=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,
b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};function Aa(a){var b;a:{b=Ba;for(var c=a.length,d=u(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:u(a)?a.charAt(b):a[b]}function Ca(a,b){var c=xa(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}function Da(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function Ea(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Fa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Ga(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function Ha(a){return null!==a&&"withCredentials"in a}var Ia="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ja(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ia.length;f++)c=Ia[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var B;a:{var Ka=m.navigator;if(Ka){var La=Ka.userAgent;if(La){B=La;break a}}B=""}function C(a){return-1!=B.indexOf(a)};var Ma=C("Opera")||C("OPR"),D=C("Trident")||C("MSIE"),Na=C("Edge"),E=C("Gecko")&&!(-1!=B.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Oa=-1!=B.toLowerCase().indexOf("webkit")&&!C("Edge");function Pa(){var a=m.document;return a?a.documentMode:void 0}var Qa;
a:{var Ra="",Sa=function(){var a=B;if(E)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Na)return/Edge\/([\d\.]+)/.exec(a);if(D)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Oa)return/WebKit\/(\S+)/.exec(a);if(Ma)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Sa&&(Ra=Sa?Sa[1]:"");if(D){var Ta=Pa();if(null!=Ta&&Ta>parseFloat(Ra)){Qa=String(Ta);break a}}Qa=Ra}var Ua=Qa,Va={};
function F(a){var b;if(!(b=Va[a])){b=0;for(var c=la(String(Ua)).split("."),d=la(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",l=/(\d*)(\D*)/g,n=/(\d*)(\D*)/g;do{var A=l.exec(g)||["","",""],H=n.exec(h)||["","",""];if(0==A[0].length&&0==H[0].length)break;b=ua(0==A[1].length?0:parseInt(A[1],10),0==H[1].length?0:parseInt(H[1],10))||ua(0==A[2].length,0==H[2].length)||ua(A[2],H[2])}while(0==b)}b=Va[a]=0<=b}return b}
var Wa=m.document,Xa=Wa&&D?Pa()||("CSS1Compat"==Wa.compatMode?parseInt(Ua,10):5):void 0;var Ya=!D||9<=Number(Xa);!E&&!D||D&&9<=Number(Xa)||E&&F("1.9.1");D&&F("9");function Za(a,b){Ea(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:$a.hasOwnProperty(d)?a.setAttribute($a[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var $a={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function ab(a,b,c){var d=arguments,e=document,f=d[0],g=d[1];if(!Ya&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',ma(g.name),'"');if(g.type){f.push(' type="',ma(g.type),'"');var h={};Ja(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(u(g)?f.className=g:"array"==r(g)?f.className=g.join(" "):Za(f,g));2<d.length&&bb(e,f,d);return f}
function bb(a,b,c){function d(c){c&&b.appendChild(u(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];!t(f)||ca(f)&&0<f.nodeType?d(f):ya(cb(f)?Da(f):f,d)}}function cb(a){if(a&&"number"==typeof a.length){if(ca(a))return"function"==typeof a.item||"string"==typeof a.item;if(w(a))return"function"==typeof a.item}return!1};function db(a){db[" "](a);return a}db[" "]=q;ba("userfeedback.api.startFeedback",function(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||m;if("help"==a.flow){var e=p("document.location.href",d);!a.helpCenterContext&&e&&(a.helpCenterContext=e.substring(0,1200));e=!0;if(b&&JSON&&JSON.stringify){var f=JSON.stringify(b);(e=1200>=f.length)&&(a.psdJson=f)}e||(b={invalidPsd:!0})}b=[a,b,c];d.GOOGLE_FEEDBACK_START_ARGUMENTS=b;c=a.serverUri||"//www.google.com/tools/feedback";if(e=d.GOOGLE_FEEDBACK_START)e.apply(d,b);else{b=c+"/load.js?";for(var g in a)c=
a[g],null!=c&&!ca(c)&&(b+=encodeURIComponent(g)+"="+encodeURIComponent(c)+"&");a=d.document;d=a.createElement("script");d.src=b;a.body.appendChild(d)}});var G="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function I(){}I.prototype.next=function(){throw G;};I.prototype.H=function(){return this};function eb(a){if(a instanceof I)return a;if("function"==typeof a.H)return a.H(!1);if(t(a)){var b=0,c=new I;c.next=function(){for(;;){if(b>=a.length)throw G;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");}
function fb(a,b){if(t(a))try{ya(a,b,void 0)}catch(c){if(c!==G)throw c;}else{a=eb(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==G)throw c;}}}function gb(a){if(t(a))return Da(a);a=eb(a);var b=[];fb(a,function(a){b.push(a)});return b};function hb(a,b){this.h={};this.g=[];this.j=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)ib(this,arguments[d],arguments[d+1])}else if(a){a instanceof hb?(c=a.D(),d=a.F()):(c=Ga(a),d=Fa(a));for(var e=0;e<c.length;e++)ib(this,c[e],d[e])}}k=hb.prototype;k.F=function(){jb(this);for(var a=[],b=0;b<this.g.length;b++)a.push(this.h[this.g[b]]);return a};k.D=function(){jb(this);return this.g.concat()};
k.clear=function(){this.h={};this.j=this.i=this.g.length=0};function jb(a){if(a.i!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.i!=a.g.length){for(var e={},c=b=0;b<a.g.length;)d=a.g[b],Object.prototype.hasOwnProperty.call(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
function ib(a,b,c){Object.prototype.hasOwnProperty.call(a.h,b)||(a.i++,a.g.push(b),a.j++);a.h[b]=c}k.forEach=function(a,b){for(var c=this.D(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};k.clone=function(){return new hb(this)};k.H=function(a){jb(this);var b=0,c=this.j,d=this,e=new I;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)throw G;var e=d.g[b++];return a?e:d.h[e]};return e};function kb(a){if(a.F&&"function"==typeof a.F)return a.F();if(u(a))return a.split("");if(t(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Fa(a)}
function lb(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(t(a)||u(a))ya(a,b,void 0);else{var c;if(a.D&&"function"==typeof a.D)c=a.D();else if(a.F&&"function"==typeof a.F)c=void 0;else if(t(a)||u(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=Ga(a);for(var d=kb(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};function mb(a){var b=m.onerror,c=!1;Oa&&!F("535.3")&&(c=!c);m.onerror=function(d,e,f,g,h){b&&b(d,e,f,g,h);a({message:d,fileName:e,ma:f,va:g,error:h});return c}};function nb(){this.g=ia()}new nb;nb.prototype.reset=function(){this.g=ia()};nb.prototype.get=function(){return this.g};function ob(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function pb(){}
function qb(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if("array"==r(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),qb(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),rb(d,c),c.push(":"),qb(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":rb(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var sb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},tb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function rb(a,b){b.push('"',a.replace(tb,function(a){var b=sb[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),sb[a]=b);return b}),'"')};function ub(a){switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:return!0;default:return!1}};function vb(){}vb.prototype.h=null;function wb(a){return a.h||(a.h=a.j())};var xb;function yb(){}y(yb,vb);yb.prototype.g=function(){var a=zb(this);return a?new ActiveXObject(a):new XMLHttpRequest};yb.prototype.j=function(){var a={};zb(this)&&(a[0]=!0,a[1]=!0);return a};
function zb(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}xb=new yb;function Ab(a,b,c){this.j=c;this.i=a;this.l=b;this.h=0;this.g=null}Ab.prototype.get=function(){var a;0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i();return a};function Bb(a,b){a.l(b);a.h<a.j&&(a.h++,b.next=a.g,a.g=b)};var Cb=[],Db=[],Eb=!1;function Fb(a){Cb[Cb.length]=a;if(Eb)for(var b=0;b<Db.length;b++)a(x(Db[b].g,Db[b]))};function Gb(a){m.setTimeout(function(){throw a;},0)}var Hb;
function Ib(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.W;c.W=null;a()}};return function(a){d.next={W:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}function Jb(a){return a}Fb(function(a){Jb=a});var Lb=new Ab(function(){return new Kb},function(a){a.reset()},100);function Mb(){var a=Nb,b=null;a.g&&(b=a.g,a.g=a.g.next,a.g||(a.h=null),b.next=null);return b}function Kb(){this.next=this.h=this.g=null}Kb.prototype.reset=function(){this.next=this.h=this.g=null};function Ob(a,b){Pb||Qb();Rb||(Pb(),Rb=!0);var c=Nb,d=Lb.get();d.g=a;d.h=b;d.next=null;c.h?c.h.next=d:c.g=d;c.h=d}var Pb;function Qb(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);Pb=function(){a.then(Sb)}}else Pb=function(){var a=Sb,a=Jb(a);!w(m.setImmediate)||m.Window&&m.Window.prototype&&!C("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Hb||(Hb=Ib()),Hb(a)):m.setImmediate(a)}}var Rb=!1,Nb=new function(){this.h=this.g=null};
function Sb(){for(var a=null;a=Mb();){try{a.g.call(a.h)}catch(b){Gb(b)}Bb(Lb,a)}Rb=!1};function Tb(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}function Ub(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function J(a,b){this.g=0;this.o=void 0;this.i=this.h=this.j=null;this.l=this.m=!1;if(a!=q)try{var c=this;a.call(b,function(a){K(c,2,a)},function(a){K(c,3,a)})}catch(d){K(this,3,d)}}function Vb(){this.next=this.i=this.h=this.j=this.g=null;this.l=!1}Vb.prototype.reset=function(){this.i=this.h=this.j=this.g=null;this.l=!1};var Wb=new Ab(function(){return new Vb},function(a){a.reset()},100);function Xb(a,b,c){var d=Wb.get();d.j=a;d.h=b;d.i=c;return d}
function Yb(a){if(a instanceof J)return a;var b=new J(q);K(b,2,a);return b}J.prototype.then=function(a,b,c){return Zb(this,w(a)?a:null,w(b)?b:null,c)};Tb(J);function L(a,b){Zb(a,null,b,void 0)}function $b(a,b){a.h||2!=a.g&&3!=a.g||ac(a);a.i?a.i.next=b:a.h=b;a.i=b}function Zb(a,b,c,d){var e=Xb(null,null,null);e.g=new J(function(a,g){e.j=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){g(n)}}:a;e.h=c?function(b){try{var e=c.call(d,b);a(e)}catch(n){g(n)}}:g});e.g.j=a;$b(a,e);return e.g}
J.prototype.s=function(a){this.g=0;K(this,2,a)};J.prototype.v=function(a){this.g=0;K(this,3,a)};function K(a,b,c){if(0==a.g){a==c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;var d;a:{var e=c,f=a.s,g=a.v;if(e instanceof J)$b(e,Xb(f||q,g||null,a)),d=!0;else if(Ub(e))e.then(f,g,a),d=!0;else{if(ca(e))try{var h=e.then;if(w(h)){bc(e,h,f,g,a);d=!0;break a}}catch(l){g.call(a,l);d=!0;break a}d=!1}}d||(a.o=c,a.g=b,a.j=null,ac(a),3!=b||cc(a,c))}}
function bc(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}function g(a){h||(h=!0,c.call(e,a))}var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}function ac(a){a.m||(a.m=!0,Ob(a.u,a))}function dc(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.i=null);return b}
J.prototype.u=function(){for(var a=null;a=dc(this);){var b=this.g,c=this.o;if(3==b&&a.h&&!a.l)for(var d=void 0,d=this;d&&d.l;d=d.j)d.l=!1;if(a.g)a.g.j=null,ec(a,b,c);else try{a.l?a.j.call(a.i):ec(a,b,c)}catch(e){fc.call(null,e)}Bb(Wb,a)}this.m=!1};function ec(a,b,c){2==b?a.j.call(a.i,c):a.h&&a.h.call(a.i,c)}function cc(a,b){a.l=!0;Ob(function(){a.l&&fc.call(null,b)})}var fc=Gb;var gc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function hc(a){a=a.match(gc)[1]||null;!a&&m.self&&m.self.location&&(a=m.self.location.protocol,a=a.substr(0,a.length-1));return a?a.toLowerCase():""}function ic(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function jc(a,b,c){if("array"==r(b))for(var d=0;d<b.length;d++)jc(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}function kc(a,b,c){for(c=c||0;c<b.length;c+=2)jc(b[c],b[c+1],a);return a}function lc(a,b){for(var c in b)jc(c,b[c],a);return a}function mc(a,b){return ic(2==arguments.length?kc([a],arguments[1],0):kc([a],arguments,1))};function nc(a){var b={ba:7E3,da:new oc};return pc(a,b).then(function(a){var d=a.responseText;b&&b.sa&&(a=b.sa,0==d.lastIndexOf(a,0)&&(d=d.substring(a.length)));return ob(d)})}
function pc(a,b){return new J(function(c,d){var e=b||{},f,g=e.da?e.da.g():xb.g();try{g.open("GET",a,!0)}catch(n){d(new M("Error opening XHR: "+n.message,a))}g.onreadystatechange=function(){if(4==g.readyState){m.clearTimeout(f);var b;!(b=ub(g.status))&&(b=0===g.status)&&(b=hc(a),b=!("http"==b||"https"==b||""==b));b?c(g):d(new qc(g.status,a))}};g.onerror=function(){d(new M("Network error",a))};if(e.headers)for(var h in e.headers){var l=e.headers[h];null!=l&&g.setRequestHeader(h,l)}e.withCredentials&&
(g.withCredentials=e.withCredentials);e.responseType&&(g.responseType=e.responseType);e.na&&g.overrideMimeType(e.na);0<e.ba&&(f=m.setTimeout(function(){g.onreadystatechange=q;g.abort();d(new rc(a))},e.ba));try{g.send(null)}catch(n){g.onreadystatechange=q,m.clearTimeout(f),d(new M("Error sending XHR: "+n.message,a))}})}function M(a,b){z.call(this,a+", url="+b)}y(M,z);M.prototype.name="XhrError";function qc(a,b){M.call(this,"Request Failed, status="+a,b)}y(qc,M);qc.prototype.name="XhrHttpError";
function rc(a){M.call(this,"Request timed out",a)}y(rc,M);rc.prototype.name="XhrTimeoutError";function oc(){}y(oc,vb);oc.prototype.g=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new sc;throw Error("Unsupported browser");};oc.prototype.j=function(){return{}};
function sc(){this.g=new XDomainRequest;this.readyState=0;this.responseText=this.onreadystatechange=null;this.status=-1;this.statusText=this.responseXML=null;this.g.onload=x(this.ja,this);this.g.onerror=x(this.X,this);this.g.onprogress=x(this.ka,this);this.g.ontimeout=x(this.la,this)}k=sc.prototype;k.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.g.open(a,b)};
k.send=function(a){if(a)if("string"==typeof a)this.g.send(a);else throw Error("Only string data is supported");else this.g.send()};k.abort=function(){this.g.abort()};k.setRequestHeader=function(){};k.ja=function(){this.status=200;this.responseText=this.g.responseText;tc(this,4)};k.X=function(){this.status=500;this.responseText=null;tc(this,4)};k.la=function(){this.X()};k.ka=function(){this.status=200;tc(this,1)};function tc(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function N(a,b){this.j=[];this.B=b||null;this.g=this.h=!1;this.i=void 0;this.s=this.v=this.m=!1;this.l=0;this.o=null;this.C=0}N.prototype.u=function(a,b){this.m=!1;uc(this,a,b)};function uc(a,b,c){a.h=!0;a.i=c;a.g=!b;vc(a)}function wc(a){if(a.h){if(!a.s)throw new xc;a.s=!1}}N.prototype.callback=function(a){wc(this);uc(this,!0,a)};function yc(a,b,c){a.j.push([b,c,void 0]);a.h&&vc(a)}
N.prototype.then=function(a,b,c){var d,e,f=new J(function(a,b){d=a;e=b});yc(this,d,function(a){e(a)});return f.then(a,b,c)};Tb(N);function zc(a){return za(a.j,function(a){return w(a[1])})}
function vc(a){if(a.l&&a.h&&zc(a)){var b=a.l,c=Ac[b];c&&(m.clearTimeout(c.g),delete Ac[b]);a.l=0}a.o&&(a.o.C--,delete a.o);for(var b=a.i,d=c=!1;a.j.length&&!a.m;){var e=a.j.shift(),f=e[0],g=e[1],e=e[2];if(f=a.g?g:f)try{var h=f.call(e||a.B,b);void 0!==h&&(a.g=a.g&&(h==b||h instanceof Error),a.i=b=h);if(Ub(b)||"function"===typeof m.Promise&&b instanceof m.Promise)d=!0,a.m=!0}catch(l){b=l,a.g=!0,zc(a)||(c=!0)}}a.i=b;d&&(h=x(a.u,a,!0),d=x(a.u,a,!1),b instanceof N?(yc(b,h,d),b.v=!0):b.then(h,d));c&&(b=
new Bc(b),Ac[b.g]=b,a.l=b.g)}function xc(){z.call(this)}y(xc,z);xc.prototype.message="Deferred has already fired";xc.prototype.name="AlreadyCalledError";function Bc(a){this.g=m.setTimeout(x(this.i,this),0);this.h=a}Bc.prototype.i=function(){delete Ac[this.g];throw this.h;};var Ac={};function Dc(a,b){var c=b||{},d=c.document||document,e=document.createElement("SCRIPT"),f={g:e,K:void 0},g=new N(0,f),h=null,l=null!=c.timeout?c.timeout:5E3;0<l&&(h=window.setTimeout(function(){Ec(e,!0);var b=new Fc(1,"Timeout reached for loading script "+a);wc(g);uc(g,!1,b)},l),f.K=h);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Ec(e,c.ua||!1,h),g.callback(null))};e.onerror=function(){Ec(e,!0,h);var b=new Fc(0,"Error while loading script "+
a);wc(g);uc(g,!1,b)};f=c.attributes||{};Ja(f,{type:"text/javascript",charset:"UTF-8",src:a});Za(e,f);Gc(d).appendChild(e);return g}function Gc(a){var b=a.getElementsByTagName("HEAD");return b&&0!=b.length?b[0]:a.documentElement}function Ec(a,b,c){null!=c&&m.clearTimeout(c);a.onload=q;a.onerror=q;a.onreadystatechange=q;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)}function Fc(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);z.call(this,c)}y(Fc,z);function Hc(a){a=a||{};this.operatorDeferredUrl=a.operatorDeferredUrl;this.alphaTestMode=a.alphaTestMode||!1;this.stagingMode=a.stagingMode||!1;this.rosterId=a.rosterId||"talk_roster";this.feedbackId=a.feedbackId||74772;this.moleVersion=a.moleVersion||void 0;this.moleUrl=a.moleUrl||"https://support.google.com/inapp/chat_mole_frame";this.gstaticBaseUrl=a.gstaticBaseUrl||void 0;this.isRtl=a.isRtl||void 0;this.forceLeftMoles=a.forceLeftMoles||void 0;this.helpCenterName=a.helpCenterName||null;this.localeName=
a.localeName||null;this.document=a.document||document;this.source=a.source||void 0;this.entityId=a.entityId||void 0;this.authUser=a.authUser||void 0;this.apiKey=a.apiKey||void 0};function Ic(a){this.g=a instanceof Hc?a:new Hc(a);this.h=Jc(this);this.g.moleVersion||this.h.then(function(a){this.g.moleVersion=a.cbfVersion},function(){},this);this.h.then(this.i,function(){},this)}function Kc(){return p("cs.operatorDeferredInstance")}function Lc(){var a=p("cs.operatorDeferredPromise");return a instanceof J?a:null!=a?Yb(a):null}function Mc(a){ba("cs.operatorDeferredPromise",a)}function Nc(){}
function Jc(a){return nc(a.g.alphaTestMode?"//ssl.gstatic.com/support/realtime/operatorParamsDev":a.g.stagingMode?"//ssl.gstatic.com/support/realtime/operatorParamsStaging":"//ssl.gstatic.com/support/realtime/operatorParams").then(function(a){if(!a)throw Error("operatorParams is null");return a},function(a){throw a;})}
function Oc(a){var b=Lc();if(b)return b;if(b=Kc())return a=Yb(b),Mc(a),a;a=Pc(a).then(function(a){var b={document:this.g.document};this.g.operatorDeferredUrl=a;return Dc(a,b).then(function(){return m.cs.OperatorDeferred.getInstance(this.g)},null,this)},null,a);Mc(a);return a}Ic.prototype.i=function(a){(new RegExp(a.eagerLoadHostnamePattern,a.eagerLoadHostnameFlags)).test(this.g.document.location.hostname)&&L(Oc(this),ha(Nc,"Error retrieving OperatorDeferred"))};
function Pc(a){return a.g.operatorDeferredUrl?Yb(a.g.operatorDeferredUrl):a.h.then(function(a){return a.operatorDeferredUrl},function(){})}function Qc(a,b){return Oc(a).then(ha(function(a,b){b.registerAvailabilityCallbacks(a)},b))}function Rc(a){return Oc(a).then(function(a){a.getAvailabilities()})}function Sc(a,b,c){b=ha(function(a,b,c,g,h){return h.requestSupport(a,b,c,g)},b,c,void 0,!0);return(c=Kc())?(a=b(c),Yb(a)):Oc(a).then(b)};function O(){this.l=this.l;this.u=this.u}O.prototype.l=!1;O.prototype.isDisposed=function(){return this.l};O.prototype.T=function(){this.l||(this.l=!0,this.w())};O.prototype.w=function(){if(this.u)for(;this.u.length;)this.u.shift()()};function P(a,b){this.type=a;this.g=this.target=b;this.Z=!0}P.prototype.h=function(){this.Z=!1};var Tc=!D||9<=Number(Xa),Uc=D&&!F("9");!Oa||F("528");E&&F("1.9b")||D&&F("8")||Ma&&F("9.5")||Oa&&F("528");E&&!F("8")||D&&F("9");function Q(a,b){P.call(this,a?a.type:"");this.g=this.target=null;this.clientY=this.clientX=0;this.i=null;a&&this.init(a,b)}y(Q,P);
Q.prototype.init=function(a,b){this.type=a.type;var c=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;var d=a.relatedTarget;if(d&&E)try{db(d.nodeName)}catch(e){}null===c?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY):(this.clientX=void 0!==c.clientX?c.clientX:c.pageX,this.clientY=void 0!==c.clientY?c.clientY:c.pageY);this.i=a;a.defaultPrevented&&this.h()};
Q.prototype.h=function(){Q.I.h.call(this);var a=this.i;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Uc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Vc="closure_listenable_"+(1E6*Math.random()|0),Wc=0;function Xc(a,b,c){this.listener=a;this.g=null;this.src=b;this.type=c;this.S=!1;this.J=void 0;this.key=++Wc;this.G=this.R=!1}function Yc(a){a.G=!0;a.listener=null;a.g=null;a.src=null;a.J=null};function Zc(a){this.src=a;this.g={};this.h=0}function $c(a,b){var c=b.type;c in a.g&&Ca(a.g[c],b)&&(Yc(b),0==a.g[c].length&&(delete a.g[c],a.h--))}function ad(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.G&&f.listener==b&&0==!!c&&f.J==d)return e}return-1};var bd="closure_lm_"+(1E6*Math.random()|0),cd={},dd=0;function ed(a,b,c,d,e){if("array"==r(b))for(var f=0;f<b.length;f++)ed(a,b[f],c,d,e);else(c=fd(c),a&&a[Vc])?(a=a.i,b=String(b).toString(),b in a.g&&(f=a.g[b],c=ad(f,c,d,e),-1<c&&(Yc(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.g[b],a.h--)))):a&&(a=gd(a))&&(b=a.g[b.toString()],a=-1,b&&(a=ad(b,c,!!d,e)),(c=-1<a?b[a]:null)&&hd(c))}
function hd(a){if(!v(a)&&a&&!a.G){var b=a.src;if(b&&b[Vc])$c(b.i,a);else{var c=a.type,d=a.g;b.removeEventListener?b.removeEventListener(c,d,a.S):b.detachEvent&&b.detachEvent(c in cd?cd[c]:cd[c]="on"+c,d);dd--;(c=gd(b))?($c(c,a),0==c.h&&(c.src=null,b[bd]=null)):Yc(a)}}}function id(a,b,c,d){var e=!0;if(a=gd(a))if(b=a.g[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.S==c&&!f.G&&(f=jd(f,d),e=e&&!1!==f)}return e}
function jd(a,b){var c=a.listener,d=a.J||a.src;a.R&&hd(a);return c.call(d,b)}
function kd(a,b){if(a.G)return!0;if(!Tc){var c=b||p("window.event"),d=new Q(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.g;f;f=f.parentNode)c.push(f);for(var f=a.type,g=c.length-1;0<=g;g--){d.g=c[g];var h=id(c[g],f,!0,d),e=e&&h}for(g=0;g<c.length;g++)d.g=c[g],h=id(c[g],f,!1,d),e=e&&h}return e}return jd(a,new Q(b,this))}
function gd(a){a=a[bd];return a instanceof Zc?a:null}var ld="__closure_events_fn_"+(1E9*Math.random()>>>0);function fd(a){if(w(a))return a;a[ld]||(a[ld]=function(b){return a.handleEvent(b)});return a[ld]}Fb(function(a){kd=a(kd)});function R(){O.call(this);this.i=new Zc(this);this.ea=this;this.O=null}y(R,O);R.prototype[Vc]=!0;R.prototype.removeEventListener=function(a,b,c,d){ed(this,a,b,c,d)};
function S(a,b){var c,d=a.O;if(d){c=[];for(var e=1;d;d=d.O)c.push(d),++e}var d=a.ea,e=b,f=e.type||e;if(u(e))e=new P(e,d);else if(e instanceof P)e.target=e.target||d;else{var g=e,e=new P(f,d);Ja(e,g)}var g=!0,h;if(c)for(var l=c.length-1;0<=l;l--)h=e.g=c[l],g=md(h,f,!0,e)&&g;h=e.g=d;g=md(h,f,!0,e)&&g;g=md(h,f,!1,e)&&g;if(c)for(l=0;l<c.length;l++)h=e.g=c[l],g=md(h,f,!1,e)&&g}
R.prototype.w=function(){R.I.w.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.g){for(var d=a.g[c],e=0;e<d.length;e++)++b,Yc(d[e]);delete a.g[c];a.h--}}this.O=null};function md(a,b,c,d){b=a.i.g[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.G&&g.S==c){var h=g.listener,l=g.J||g.src;g.R&&$c(a.i,g);e=!1!==h.call(l,d)&&e}}return e&&0!=d.Z};function nd(a,b,c){if(w(a))c&&(a=x(a,c));else if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:m.setTimeout(a,b||0)};function T(a){R.call(this);this.headers=new hb;this.B=a||null;this.h=!1;this.C=this.g=null;this.o=this.fa=this.N="";this.j=this.M=this.m=this.L=!1;this.v=0;this.s=null;this.V="";this.P=this.ga=!1}y(T,R);var od=/^https?$/i,pd=["POST","PUT"],qd=[];k=T.prototype;k.ha=function(){this.T();Ca(qd,this)};
function rd(a,b,c,d,e){if(a.g)throw Error("[goog.net.XhrIo] Object is active with another request="+a.N+"; newUri="+b);c=c?c.toUpperCase():"GET";a.N=b;a.o="";a.fa=c;a.L=!1;a.h=!0;a.g=a.B?a.B.g():xb.g();a.C=a.B?wb(a.B):wb(xb);a.g.onreadystatechange=x(a.Y,a);try{a.M=!0,a.g.open(c,String(b),!0),a.M=!1}catch(g){sd(a,g);return}b=d||"";var f=a.headers.clone();e&&lb(e,function(a,b){ib(f,b,a)});e=Aa(f.D());d=m.FormData&&b instanceof m.FormData;!(0<=xa(pd,c))||e||d||ib(f,"Content-Type","application/x-www-form-urlencoded;charset=utf-8");
f.forEach(function(a,b){this.g.setRequestHeader(b,a)},a);a.V&&(a.g.responseType=a.V);Ha(a.g)&&(a.g.withCredentials=a.ga);try{td(a),0<a.v&&(a.P=ud(a.g),a.P?(a.g.timeout=a.v,a.g.ontimeout=x(a.K,a)):a.s=nd(a.K,a.v,a)),a.m=!0,a.g.send(b),a.m=!1}catch(g){sd(a,g)}}function ud(a){return D&&F(9)&&v(a.timeout)&&void 0!==a.ontimeout}function Ba(a){return"content-type"==a.toLowerCase()}
k.K=function(){"undefined"!=typeof aa&&this.g&&(this.o="Timed out after "+this.v+"ms, aborting",S(this,"timeout"),this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,S(this,"complete"),S(this,"abort"),vd(this)))};function sd(a,b){a.h=!1;a.g&&(a.j=!0,a.g.abort(),a.j=!1);a.o=b;wd(a);vd(a)}function wd(a){a.L||(a.L=!0,S(a,"complete"),S(a,"error"))}k.w=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vd(this,!0));T.I.w.call(this)};
k.Y=function(){this.isDisposed()||(this.M||this.m||this.j?xd(this):this.U())};k.U=function(){xd(this)};function xd(a){if(a.h&&"undefined"!=typeof aa&&(!a.C[1]||4!=U(a)||2!=yd(a)))if(a.m&&4==U(a))nd(a.Y,0,a);else if(S(a,"readystatechange"),4==U(a)){a.h=!1;try{var b=yd(a),c;if(!(c=ub(b))){var d;if(d=0===b){var e=hc(String(a.N));d=!od.test(e)}c=d}if(c)S(a,"complete"),S(a,"success");else{var f;try{f=2<U(a)?a.g.statusText:""}catch(g){f=""}a.o=f+" ["+yd(a)+"]";wd(a)}}finally{vd(a)}}}
function vd(a,b){if(a.g){td(a);var c=a.g,d=a.C[0]?q:null;a.g=null;a.C=null;b||S(a,"ready");try{c.onreadystatechange=d}catch(e){}}}function td(a){a.g&&a.P&&(a.g.ontimeout=null);v(a.s)&&(m.clearTimeout(a.s),a.s=null)}function U(a){return a.g?a.g.readyState:0}function yd(a){try{return 2<U(a)?a.g.status:-1}catch(b){return-1}}Fb(function(a){T.prototype.U=a(T.prototype.U)});function V(a){O.call(this);this.h=a}y(V,O);V.prototype.g=function(a){return zd(this,a)};function W(a,b){return(b?"__wrapper_":"__protected_")+(a[da]||(a[da]=++ea))+"__"}function zd(a,b){var c=W(a,!0);b[c]||((b[c]=Ad(a,b))[W(a,!1)]=b);return b[c]}
function Ad(a,b){function c(){if(a.isDisposed())return b.apply(this,arguments);try{return b.apply(this,arguments)}catch(c){if(!(c&&"object"===typeof c&&c.message&&0==c.message.indexOf("Error in protected function: ")||"string"===typeof c&&0==c.indexOf("Error in protected function: ")))throw a.h(c),new Bd(c);}finally{}}c[W(a,!1)]=b;return c}
function Cd(a,b){var c=p("window"),d=c[b];c[b]=function(b,c){u(b)&&(b=ha(ja,b));b=zd(a,b);if(d.apply)return d.apply(this,arguments);var g=b;if(2<arguments.length)var h=Array.prototype.slice.call(arguments,2),g=function(){b.apply(this,h)};return d(g,c)};c[b][W(a,!1)]=d}V.prototype.w=function(){var a=p("window"),b;b=a.setTimeout;b=b[W(this,!1)]||b;a.setTimeout=b;b=a.setInterval;b=b[W(this,!1)]||b;a.setInterval=b;V.I.w.call(this)};
function Bd(a){z.call(this,"Error in protected function: "+(a&&a.message?String(a.message):String(a)));(a=a&&a.stack)&&u(a)&&(this.stack=a)}y(Bd,z);function X(a,b,c){R.call(this);this.m=b||null;this.j={};this.s=Dd;this.o=a;if(!c)if(this.g=null,D&&!F("10"))mb(x(this.h,this));else{this.g=new V(x(this.h,this));Cd(this.g,"setTimeout");Cd(this.g,"setInterval");a=this.g;b=p("window");c=["requestAnimationFrame","mozRequestAnimationFrame","webkitAnimationFrame","msRequestAnimationFrame"];for(var d=0;d<c.length;d++){var e=c[d];c[d]in b&&Cd(a,e)}a=this.g;Eb=!0;b=x(a.g,a);for(c=0;c<Cb.length;c++)Cb[c](b);Db.push(a)}}y(X,R);
function Ed(a){P.call(this,"a");this.error=a}y(Ed,P);function Dd(a,b,c,d){var e=new T;qd.push(e);var f=e.i,g=e.ha,h="ready".toString(),l=f.g[h];l||(l=f.g[h]=[],f.h++);-1<ad(l,g,void 0,void 0)||(f=new Xc(g,f.src,h),f.R=!0,l.push(f));rd(e,a,b,c,d)}
X.prototype.h=function(a,b){var c;c=p("window.location.href");if(u(a))c={message:a,name:"Unknown error",lineNumber:"Not available",fileName:c,stack:"Not available"};else{var d,e,f=!1;try{d=a.lineNumber||a.ma||"Not available"}catch(va){d="Not available",f=!0}try{e=a.fileName||a.filename||a.sourceURL||m.$googDebugFname||c}catch(va){e="Not available",f=!0}c=!f&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}}var g;if(b){d={};for(g in b)d[g]=b[g];g=d}else g={};if(this.m)try{this.m(c,g)}catch(va){}e=c.message.substring(0,1900);d=c.stack;try{var h=mc(this.o,"script",c.fileName,"error",e,"line",c.lineNumber),l;a:{var n=this.j,A;for(A in n){l=!1;break a}l=!0}l||(h=ic(lc([h],this.j)));l={};l.trace=d;if(g)for(var H in g)l["context."+H]=g[H];var wa,Cc=lc([],l);Cc[0]="";wa=Cc.join("");v(null)&&(wa=wa.substring(0,null));this.s(h,"POST",wa,this.v)}catch(va){}try{S(this,new Ed(c))}catch(va){}};
X.prototype.w=function(){var a=this.g;a&&"function"==typeof a.T&&a.T();X.I.w.call(this)};function Y(a,b,c,d,e,f,g){e=new X(e||"//www.google.com/tools/feedback/jserror",void 0,!0);this.i=x(e.h,e);this.s=a;this.C=c||"en";this.v=b||!1;this.B=!!d;this.u=f;this.h=this.g=null;this.o=g}function Fd(a,b,c){if(null!=b&&null!=c){var d={};d[b]=c;L(Qc(a.j,d),a.i)}}k=Y.prototype;k.$=function(a){this.g=a;Fd(this,this.g,this.l)};k.aa=function(a){this.h=a;Fd(this,this.h,this.m)};k.qa=function(a){this.l=a;Fd(this,this.g,this.l)};k.ra=function(a){this.m=a;Fd(this,this.h,this.m)};
k.oa=function(a){null!=this.g&&L(Sc(this.j,this.g,a),this.i)};k.pa=function(a){null!=this.h&&L(Sc(this.j,this.h,a),this.i)};k.ca=function(){null==this.g&&null==this.h||L(Rc(this.j),this.i)};Y.prototype.setChatPool=Y.prototype.$;Y.prototype.setHangoutPool=Y.prototype.aa;Y.prototype.setChatCallback=Y.prototype.qa;Y.prototype.setHangoutCallback=Y.prototype.ra;Y.prototype.requestChatSupport=Y.prototype.oa;Y.prototype.requestHangoutSupport=Y.prototype.pa;Y.prototype.getAvailabilities=Y.prototype.ca;function Gd(){};function Hd(){}y(Hd,Gd);Hd.prototype.clear=function(){var a=gb(this.H(!0)),b=this;ya(a,function(a){b.A.removeItem(a)})};function Z(a){this.A=a}y(Z,Hd);Z.prototype.get=function(a){a=this.A.getItem(a);if(!u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};Z.prototype.H=function(a){var b=0,c=this.A,d=new I;d.next=function(){if(b>=c.length)throw G;var d;d=c.key(b++);if(a)return d;d=c.getItem(d);if(!u(d))throw"Storage mechanism: Invalid value was encountered";return d};return d};Z.prototype.clear=function(){this.A.clear()};Z.prototype.key=function(a){return this.A.key(a)};function Id(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.A=a}y(Id,Z);function Jd(){this.g=new Id}y(Jd,O);Jd.prototype.clear=function(){this.g.A.removeItem("GOOGLE_HELP_SESSION_STATE")};function Kd(a,b){var c=a.serverUri||"//www.gstatic.com/feedback";m.GOOGLE_HELP_SESSION_ARGUMENTS=arguments;var d=window.document,e=d.createElement("script");e.src=c+"/session_load.js";d.body.appendChild(e)}ba("userfeedback.api.help.resumeOpenHelpSession",Kd);(function(a,b){var c=a.helpCenterPath,d=a.locale,e=a.authuser,f=a.escalationJSONString,g=!!a.useStagingServer,h=a.apiKey,l;l=document.body;var n;a:{n=9==l.nodeType?l:l.ownerDocument||l.document;if(n.defaultView&&n.defaultView.getComputedStyle&&(n=n.defaultView.getComputedStyle(l,null))){n=n.direction||n.getPropertyValue("direction")||"";break a}n=""}n||(n=l.currentStyle?l.currentStyle.direction:null);l="rtl"==(n||l.style&&l.style.direction);n=window;if(null==n||null==n.top||null==n.top.document||
window.top.GOOGLE_HELP_CHAT_SUPPORT)c=null;else{c=new Y(c,l,d,g,void 0,e,h);window.top.GOOGLE_HELP_CHAT_SUPPORT=c;d={helpCenterName:c.s,localeName:c.C,source:1,rosterId:"roster-for-Google-Help",isRtl:c.v,alphaTestMode:!1,stagingMode:c.B,timeoutMs:2E4,authUser:c.u,apiKey:c.o};e=ab("div",{id:"roster-for-Google-Help",style:"display: none"});window.top.document.body.appendChild(e);try{c.j=new Ic(d)}catch(A){c.i(A)}}d=new Jd;if(f){d.clear();e={ia:JSON.parse(f).ia};e.sessionTimestamp=(new Date).getTime();
f=d.g;g=[];qb(new pb,e,g);e=g.join("");try{f.A.setItem("GOOGLE_HELP_SESSION_STATE",e)}catch(A){if(0==f.A.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}}if(f=d.g.get("GOOGLE_HELP_SESSION_STATE")){if(f=ob(f),e=(new Date).getTime(),g=f.sessionTimestamp,!g||!v(g)||e>g+6E4)d.clear(),f=null}else f=null;d=(f||{}).escalationOptions;c&&d&&(f=d.hangout||{},(d=(d.chat||{}).chat_pool_id)&&c.$(d),(f=f.hangout_pool_id)&&c.aa(f),c.ca());Kd(a,b)}).apply(m,m.GOOGLE_HELP_CHAT_ARGUMENTS);}).call(this);