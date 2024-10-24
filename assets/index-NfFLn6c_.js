var Xe=Object.defineProperty;var tr=(t,n,e)=>n in t?Xe(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var $=(t,n,e)=>tr(t,typeof n!="symbol"?n+"":n,e);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();function _t(t){for(var n,e,r=arguments,i=1,o="",s="",u=[0],a=function(l){i===1&&(l||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(l?r[l]:o):i===3&&(l||o)?(u[1]=l?r[l]:o,i=2):i===2&&o==="..."&&l?u[2]=Object.assign(u[2]||{},r[l]):i===2&&o&&!l?(u[2]=u[2]||{})[o]=!0:i>=5&&(i===5?((u[2]=u[2]||{})[e]=l?o?o+r[l]:r[l]:o,i=6):(l||o)&&(u[2][e]+=l?o+r[l]:o)),o=""},c=0;c<t.length;c++){c&&(i===1&&a(),a(c));for(var f=0;f<t[c].length;f++)n=t[c][f],i===1?n==="<"?(a(),u=[u,"",null],i=3):o+=n:i===4?o==="--"&&n===">"?(i=1,o=""):o=n+o[0]:s?n===s?s="":o+=n:n==='"'||n==="'"?s=n:n===">"?(a(),i=1):i&&(n==="="?(i=5,e=o,o=""):n==="/"&&(i<5||t[c][f+1]===">")?(a(),i===3&&(u=u[0]),i=u,(u=u[0]).push(this.apply(null,i.slice(1))),i=0):n===" "||n==="	"||n===`
`||n==="\r"?(a(),i=2):o+=n),i===3&&o==="!--"&&(i=4,u=u[0])}return a(),u.length>2?u.slice(1):u[1]}function nr(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function er(t){if(t.__esModule)return t;var n=t.default;if(typeof n=="function"){var e=function r(){return this instanceof r?Reflect.construct(n,arguments,this.constructor):n.apply(this,arguments)};e.prototype=n.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),e}var Kn={exports:{}};/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */var rr=function(n){var e=String.prototype.split,r=/()??/.exec("")[1]===n,i;return i=function(o,l,u){if(Object.prototype.toString.call(l)!=="[object RegExp]")return e.call(o,l,u);var a=[],c=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.extended?"x":"")+(l.sticky?"y":""),f=0,l=new RegExp(l.source,c+"g"),d,p,m,b;for(o+="",r||(d=new RegExp("^"+l.source+"$(?!\\s)",c)),u=u===n?-1>>>0:u>>>0;(p=l.exec(o))&&(m=p.index+p[0].length,!(m>f&&(a.push(o.slice(f,p.index)),!r&&p.length>1&&p[0].replace(d,function(){for(var h=1;h<arguments.length-2;h++)arguments[h]===n&&(p[h]=n)}),p.length>1&&p.index<o.length&&Array.prototype.push.apply(a,p.slice(1)),b=p[0].length,f=m,a.length>=u)));)l.lastIndex===p.index&&l.lastIndex++;return f===o.length?(b||!l.test(""))&&a.push(""):a.push(o.slice(f)),a.length>u?a.slice(0,u):a},i}(),or=[].indexOf,ir=function(t,n){if(or)return t.indexOf(n);for(var e=0;e<t.length;++e)if(t[e]===n)return e;return-1},Tt=ir,sr=ur;function ur(t){var n=t.classList;if(n)return n;var e={add:r,remove:i,contains:o,toggle:s,toString:u,length:0,item:a};return e;function r(l){var d=c();Tt(d,l)>-1||(d.push(l),f(d))}function i(l){var d=c(),p=Tt(d,l);p!==-1&&(d.splice(p,1),f(d))}function o(l){return Tt(c(),l)>-1}function s(l){return o(l)?(i(l),!1):(r(l),!0)}function u(){return t.className}function a(l){var d=c();return d[l]||null}function c(){var l=t.className;return cr(l.split(" "),ar)}function f(l){var d=l.length;t.className=l.join(" "),e.length=d;for(var p=0;p<l.length;p++)e[p]=l[p];delete l[d]}}function cr(t,n){for(var e=[],r=0;r<t.length;r++)n(t[r])&&e.push(t[r]);return e}function ar(t){return!!t}const lr={},fr=Object.freeze(Object.defineProperty({__proto__:null,default:lr},Symbol.toStringTag,{value:"Module"})),pr=er(fr);var dr=rr,br=sr,Qn=typeof window>"u"?pr:window,G=Qn.document,mr=Qn.Text;function Zn(){var t=[];function n(){var e=[].slice.call(arguments),r=null;function i(o){var s;function u(l){var d=dr(l,/([\.#]?[^\s#.]+)/);/^\.|#/.test(d[1])&&(r=G.createElement("div")),an(d,function(p){var m=p.substring(1,p.length);p&&(r?p[0]==="."?br(r).add(m):p[0]==="#"&&r.setAttribute("id",m):r=G.createElement(p))})}if(o!=null){if(typeof o=="string")r?r.appendChild(s=G.createTextNode(o)):u(o);else if(typeof o=="number"||typeof o=="boolean"||o instanceof Date||o instanceof RegExp)r.appendChild(s=G.createTextNode(o.toString()));else if(vr(o))an(o,i);else if(Et(o))r.appendChild(s=o);else if(o instanceof mr)r.appendChild(s=o);else if(typeof o=="object")for(var a in o)if(typeof o[a]=="function")/^on\w+/.test(a)?function(l,d){r.addEventListener?(r.addEventListener(l.substring(2),d[l],!1),t.push(function(){r.removeEventListener(l.substring(2),d[l],!1)})):(r.attachEvent(l,d[l]),t.push(function(){r.detachEvent(l,d[l])}))}(a,o):(r[a]=o[a](),t.push(o[a](function(l){r[a]=l})));else if(a==="style")if(typeof o[a]=="string")r.style.cssText=o[a];else for(var c in o[a])(function(l,d){if(typeof d=="function")r.style.setProperty(l,d()),t.push(d(function(m){r.style.setProperty(l,m)}));else var p=o[a][l].match(/(.*)\W+!important\W*$/);p?r.style.setProperty(l,p[1],"important"):r.style.setProperty(l,o[a][l])})(c,o[a][c]);else if(a==="attrs")for(var f in o[a])r.setAttribute(f,o[a][f]);else a.substr(0,5)==="data-"?r.setAttribute(a,o[a]):r[a]=o[a];else if(typeof o=="function"){var f=o();r.appendChild(s=Et(f)?f:G.createTextNode(f)),t.push(o(function(d){Et(d)&&s.parentElement?(s.parentElement.replaceChild(d,s),s=d):s.textContent=d}))}}return s}for(;e.length;)i(e.shift());return r}return n.cleanup=function(){for(var e=0;e<t.length;e++)t[e]();t.length=0},n}var hr=Kn.exports=Zn();hr.context=Zn;function Et(t){return t&&t.nodeName&&t.nodeType}function an(t,n){if(t.forEach)return t.forEach(n);for(var e=0;e<t.length;e++)n(t[e],e)}function vr(t){return Object.prototype.toString.call(t)=="[object Array]"}var _r=Kn.exports;const tt=nr(_r);function C(t){if(!t.shadowRoot)throw new Error("There is no shadow root on the element !");return t.shadowRoot}function nt(t){const n=Array.isArray(t)?t:[t],e=document.createElement("template");return e.innerHTML=n.map(r=>r.outerHTML).join(""),e}var At=function(t,n){return At=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])},At(t,n)};function Yt(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");At(t,n);function e(){this.constructor=t}t.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}function yr(t,n,e,r){function i(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function u(f){try{c(r.next(f))}catch(l){s(l)}}function a(f){try{c(r.throw(f))}catch(l){s(l)}}function c(f){f.done?o(f.value):i(f.value).then(u,a)}c((r=r.apply(t,n||[])).next())})}function Xn(t,n){var e={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(c){return function(f){return a([c,f])}}function a(c){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(e=0)),e;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,i=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(o=e.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){e.label=c[1];break}if(c[0]===6&&e.label<o[1]){e.label=o[1],o=c;break}if(o&&e.label<o[2]){e.label=o[2],e.ops.push(c);break}o[2]&&e.ops.pop(),e.trys.pop();continue}c=n.call(t,e)}catch(f){c=[6,f],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function J(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function K(t,n){var e=typeof Symbol=="function"&&t[Symbol.iterator];if(!e)return t;var r=e.call(t),i,o=[],s;try{for(;(n===void 0||n-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(u){s={error:u}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(s)throw s.error}}return o}function mt(t,n,e){if(e||arguments.length===2)for(var r=0,i=n.length,o;r<i;r++)(o||!(r in n))&&(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return t.concat(o||Array.prototype.slice.call(n))}function W(t){return this instanceof W?(this.v=t,this):new W(t)}function gr(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e.apply(t,n||[]),i,o=[];return i={},u("next"),u("throw"),u("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(p){return function(m){return Promise.resolve(m).then(p,l)}}function u(p,m){r[p]&&(i[p]=function(b){return new Promise(function(h,v){o.push([p,b,h,v])>1||a(p,b)})},m&&(i[p]=m(i[p])))}function a(p,m){try{c(r[p](m))}catch(b){d(o[0][3],b)}}function c(p){p.value instanceof W?Promise.resolve(p.value.v).then(f,l):d(o[0][2],p)}function f(p){a("next",p)}function l(p){a("throw",p)}function d(p,m){p(m),o.shift(),o.length&&a(o[0][0],o[0][1])}}function wr(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof J=="function"?J(t):t[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(o){e[o]=t[o]&&function(s){return new Promise(function(u,a){s=t[o](s),i(u,a,s.done,s.value)})}}function i(o,s,u,a){Promise.resolve(a).then(function(c){o({value:c,done:u})},s)}}function _(t){return typeof t=="function"}function te(t){var n=function(r){Error.call(r),r.stack=new Error().stack},e=t(n);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var $t=te(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function ln(t,n){if(t){var e=t.indexOf(n);0<=e&&t.splice(e,1)}}var Gt=function(){function t(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var n,e,r,i,o;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=J(s),a=u.next();!a.done;a=u.next()){var c=a.value;c.remove(this)}}catch(b){n={error:b}}finally{try{a&&!a.done&&(e=u.return)&&e.call(u)}finally{if(n)throw n.error}}else s.remove(this);var f=this.initialTeardown;if(_(f))try{f()}catch(b){o=b instanceof $t?b.errors:[b]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var d=J(l),p=d.next();!p.done;p=d.next()){var m=p.value;try{fn(m)}catch(b){o=o??[],b instanceof $t?o=mt(mt([],K(o)),K(b.errors)):o.push(b)}}}catch(b){r={error:b}}finally{try{p&&!p.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(o)throw new $t(o)}},t.prototype.add=function(n){var e;if(n&&n!==this)if(this.closed)fn(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}},t.prototype._hasParent=function(n){var e=this._parentage;return e===n||Array.isArray(e)&&e.includes(n)},t.prototype._addParent=function(n){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n},t.prototype._removeParent=function(n){var e=this._parentage;e===n?this._parentage=null:Array.isArray(e)&&ln(e,n)},t.prototype.remove=function(n){var e=this._finalizers;e&&ln(e,n),n instanceof t&&n._removeParent(this)},t.EMPTY=function(){var n=new t;return n.closed=!0,n}(),t}();Gt.EMPTY;function ne(t){return t instanceof Gt||t&&"closed"in t&&_(t.remove)&&_(t.add)&&_(t.unsubscribe)}function fn(t){_(t)?t():t.unsubscribe()}var ee={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},re={setTimeout:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return setTimeout.apply(void 0,mt([t,n],K(e)))},clearTimeout:function(t){var n=re.delegate;return((n==null?void 0:n.clearTimeout)||clearTimeout)(t)},delegate:void 0};function oe(t){re.setTimeout(function(){throw t})}function pn(){}function xr(t){t()}var Jt=function(t){Yt(n,t);function n(e){var r=t.call(this)||this;return r.isStopped=!1,e?(r.destination=e,ne(e)&&e.add(r)):r.destination=$r,r}return n.create=function(e,r,i){return new Lt(e,r,i)},n.prototype.next=function(e){this.isStopped||this._next(e)},n.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(e){this.destination.next(e)},n.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(Gt),Sr=Function.prototype.bind;function kt(t,n){return Sr.call(t,n)}var Tr=function(){function t(n){this.partialObserver=n}return t.prototype.next=function(n){var e=this.partialObserver;if(e.next)try{e.next(n)}catch(r){ut(r)}},t.prototype.error=function(n){var e=this.partialObserver;if(e.error)try{e.error(n)}catch(r){ut(r)}else ut(n)},t.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(e){ut(e)}},t}(),Lt=function(t){Yt(n,t);function n(e,r,i){var o=t.call(this)||this,s;if(_(e)||!e)s={next:e??void 0,error:r??void 0,complete:i??void 0};else{var u;o&&ee.useDeprecatedNextContext?(u=Object.create(e),u.unsubscribe=function(){return o.unsubscribe()},s={next:e.next&&kt(e.next,u),error:e.error&&kt(e.error,u),complete:e.complete&&kt(e.complete,u)}):s=e}return o.destination=new Tr(s),o}return n}(Jt);function ut(t){oe(t)}function Er(t){throw t}var $r={closed:!0,next:pn,error:Er,complete:pn},Kt=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function et(t){return t}function kr(t){return t.length===0?et:t.length===1?t[0]:function(e){return t.reduce(function(r,i){return i(r)},e)}}var E=function(){function t(n){n&&(this._subscribe=n)}return t.prototype.lift=function(n){var e=new t;return e.source=this,e.operator=n,e},t.prototype.subscribe=function(n,e,r){var i=this,o=Or(n)?n:new Lt(n,e,r);return xr(function(){var s=i,u=s.operator,a=s.source;o.add(u?u.call(o,a):a?i._subscribe(o):i._trySubscribe(o))}),o},t.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(e){n.error(e)}},t.prototype.forEach=function(n,e){var r=this;return e=dn(e),new e(function(i,o){var s=new Lt({next:function(u){try{n(u)}catch(a){o(a),s.unsubscribe()}},error:o,complete:i});r.subscribe(s)})},t.prototype._subscribe=function(n){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(n)},t.prototype[Kt]=function(){return this},t.prototype.pipe=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return kr(n)(this)},t.prototype.toPromise=function(n){var e=this;return n=dn(n),new n(function(r,i){var o;e.subscribe(function(s){return o=s},function(s){return i(s)},function(){return r(o)})})},t.create=function(n){return new t(n)},t}();function dn(t){var n;return(n=t??ee.Promise)!==null&&n!==void 0?n:Promise}function Ir(t){return t&&_(t.next)&&_(t.error)&&_(t.complete)}function Or(t){return t&&t instanceof Jt||Ir(t)&&ne(t)}function Pr(t){return _(t==null?void 0:t.lift)}function N(t){return function(n){if(Pr(n))return n.lift(function(e){try{return t(e,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function j(t,n,e,r,i){return new Cr(t,n,e,r,i)}var Cr=function(t){Yt(n,t);function n(e,r,i,o,s,u){var a=t.call(this,e)||this;return a.onFinalize=s,a.shouldUnsubscribe=u,a._next=r?function(c){try{r(c)}catch(f){e.error(f)}}:t.prototype._next,a._error=o?function(c){try{o(c)}catch(f){e.error(f)}finally{this.unsubscribe()}}:t.prototype._error,a._complete=i?function(){try{i()}catch(c){e.error(c)}finally{this.unsubscribe()}}:t.prototype._complete,a}return n.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((e=this.onFinalize)===null||e===void 0||e.call(this))}},n}(Jt),ie=new E(function(t){return t.complete()});function jr(t){return t&&_(t.schedule)}function Qt(t){return t[t.length-1]}function Ar(t){return _(Qt(t))?t.pop():void 0}function se(t){return jr(Qt(t))?t.pop():void 0}function Lr(t,n){return typeof Qt(t)=="number"?t.pop():n}var Zt=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function ue(t){return _(t==null?void 0:t.then)}function ce(t){return _(t[Kt])}function ae(t){return Symbol.asyncIterator&&_(t==null?void 0:t[Symbol.asyncIterator])}function le(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Mr(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var fe=Mr();function pe(t){return _(t==null?void 0:t[fe])}function de(t){return gr(this,arguments,function(){var e,r,i,o;return Xn(this,function(s){switch(s.label){case 0:e=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,W(e.read())];case 3:return r=s.sent(),i=r.value,o=r.done,o?[4,W(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,W(i)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function be(t){return _(t==null?void 0:t.getReader)}function V(t){if(t instanceof E)return t;if(t!=null){if(ce(t))return Hr(t);if(Zt(t))return Nr(t);if(ue(t))return Fr(t);if(ae(t))return me(t);if(pe(t))return Rr(t);if(be(t))return Ur(t)}throw le(t)}function Hr(t){return new E(function(n){var e=t[Kt]();if(_(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Nr(t){return new E(function(n){for(var e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function Fr(t){return new E(function(n){t.then(function(e){n.closed||(n.next(e),n.complete())},function(e){return n.error(e)}).then(null,oe)})}function Rr(t){return new E(function(n){var e,r;try{for(var i=J(t),o=i.next();!o.done;o=i.next()){var s=o.value;if(n.next(s),n.closed)return}}catch(u){e={error:u}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}n.complete()})}function me(t){return new E(function(n){Dr(t,n).catch(function(e){return n.error(e)})})}function Ur(t){return me(de(t))}function Dr(t,n){var e,r,i,o;return yr(this,void 0,void 0,function(){var s,u;return Xn(this,function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),e=wr(t),a.label=1;case 1:return[4,e.next()];case 2:if(r=a.sent(),!!r.done)return[3,4];if(s=r.value,n.next(s),n.closed)return[2];a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return u=a.sent(),i={error:u},[3,11];case 6:return a.trys.push([6,,9,10]),r&&!r.done&&(o=e.return)?[4,o.call(e)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}})})}function M(t,n,e,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var o=n.schedule(function(){e(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(o),!i)return o}function he(t,n){return n===void 0&&(n=0),N(function(e,r){e.subscribe(j(r,function(i){return M(r,t,function(){return r.next(i)},n)},function(){return M(r,t,function(){return r.complete()},n)},function(i){return M(r,t,function(){return r.error(i)},n)}))})}function ve(t,n){return n===void 0&&(n=0),N(function(e,r){r.add(t.schedule(function(){return e.subscribe(r)},n))})}function zr(t,n){return V(t).pipe(ve(n),he(n))}function Vr(t,n){return V(t).pipe(ve(n),he(n))}function Br(t,n){return new E(function(e){var r=0;return n.schedule(function(){r===t.length?e.complete():(e.next(t[r++]),e.closed||this.schedule())})})}function Wr(t,n){return new E(function(e){var r;return M(e,n,function(){r=t[fe](),M(e,n,function(){var i,o,s;try{i=r.next(),o=i.value,s=i.done}catch(u){e.error(u);return}s?e.complete():e.next(o)},0,!0)}),function(){return _(r==null?void 0:r.return)&&r.return()}})}function _e(t,n){if(!t)throw new Error("Iterable cannot be null");return new E(function(e){M(e,n,function(){var r=t[Symbol.asyncIterator]();M(e,n,function(){r.next().then(function(i){i.done?e.complete():e.next(i.value)})},0,!0)})})}function qr(t,n){return _e(de(t),n)}function Yr(t,n){if(t!=null){if(ce(t))return zr(t,n);if(Zt(t))return Br(t,n);if(ue(t))return Vr(t,n);if(ae(t))return _e(t,n);if(pe(t))return Wr(t,n);if(be(t))return qr(t,n)}throw le(t)}function Xt(t,n){return n?Yr(t,n):V(t)}var ye=te(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function q(t,n){return N(function(e,r){var i=0;e.subscribe(j(r,function(o){r.next(t.call(n,o,i++))}))})}var Gr=Array.isArray;function Jr(t,n){return Gr(n)?t.apply(void 0,mt([],K(n))):t(n)}function ge(t){return q(function(n){return Jr(t,n)})}var Kr=Array.isArray,Qr=Object.getPrototypeOf,Zr=Object.prototype,Xr=Object.keys;function to(t){if(t.length===1){var n=t[0];if(Kr(n))return{args:n,keys:null};if(no(n)){var e=Xr(n);return{args:e.map(function(r){return n[r]}),keys:e}}}return{args:t,keys:null}}function no(t){return t&&typeof t=="object"&&Qr(t)===Zr}function eo(t,n){return t.reduce(function(e,r,i){return e[r]=n[i],e},{})}function ro(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=se(t),r=Ar(t),i=to(t),o=i.args,s=i.keys;if(o.length===0)return Xt([],e);var u=new E(oo(o,e,s?function(a){return eo(s,a)}:et));return r?u.pipe(ge(r)):u}function oo(t,n,e){return e===void 0&&(e=et),function(r){bn(n,function(){for(var i=t.length,o=new Array(i),s=i,u=i,a=function(f){bn(n,function(){var l=Xt(t[f],n),d=!1;l.subscribe(j(r,function(p){o[f]=p,d||(d=!0,u--),u||r.next(e(o.slice()))},function(){--s||r.complete()}))},r)},c=0;c<i;c++)a(c)},r)}}function bn(t,n,e){t?M(e,t,n):n()}function io(t,n,e,r,i,o,s,u){var a=[],c=0,f=0,l=!1,d=function(){l&&!a.length&&!c&&n.complete()},p=function(b){return c<r?m(b):a.push(b)},m=function(b){c++;var h=!1;V(e(b,f++)).subscribe(j(n,function(v){n.next(v)},function(){h=!0},void 0,function(){if(h)try{c--;for(var v=function(){var y=a.shift();s||m(y)};a.length&&c<r;)v();d()}catch(y){n.error(y)}}))};return t.subscribe(j(n,p,function(){l=!0,d()})),function(){}}function tn(t,n,e){return e===void 0&&(e=1/0),_(n)?tn(function(r,i){return q(function(o,s){return n(r,o,i,s)})(V(t(r,i)))},e):(typeof n=="number"&&(e=n),N(function(r,i){return io(r,i,t,e)}))}function so(t){return t===void 0&&(t=1/0),tn(et,t)}var uo=["addListener","removeListener"],co=["addEventListener","removeEventListener"],ao=["on","off"];function H(t,n,e,r){if(_(e)&&(r=e,e=void 0),r)return H(t,n,e).pipe(ge(r));var i=K(po(t)?co.map(function(u){return function(a){return t[u](n,a,e)}}):lo(t)?uo.map(mn(t,n)):fo(t)?ao.map(mn(t,n)):[],2),o=i[0],s=i[1];if(!o&&Zt(t))return tn(function(u){return H(u,n,e)})(V(t));if(!o)throw new TypeError("Invalid event target");return new E(function(u){var a=function(){for(var c=[],f=0;f<arguments.length;f++)c[f]=arguments[f];return u.next(1<c.length?c:c[0])};return o(a),function(){return s(a)}})}function mn(t,n){return function(e){return function(r){return t[e](n,r)}}}function lo(t){return _(t.addListener)&&_(t.removeListener)}function fo(t){return _(t.on)&&_(t.off)}function po(t){return _(t.addEventListener)&&_(t.removeEventListener)}function bo(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=se(t),r=Lr(t,1/0),i=t;return i.length?i.length===1?V(i[0]):so(r)(Xt(i,e)):ie}function mo(t,n){return N(function(e,r){var i=0;e.subscribe(j(r,function(o){return t.call(n,o,i++)&&r.next(o)}))})}function ho(t){return N(function(n,e){var r=!1;n.subscribe(j(e,function(i){r=!0,e.next(i)},function(){r||e.next(t),e.complete()}))})}function vo(t){return t<=0?function(){return ie}:N(function(n,e){var r=0;n.subscribe(j(e,function(i){++r<=t&&(e.next(i),t<=r&&e.complete())}))})}function hn(t){return q(function(){return t})}function _o(t){return t===void 0&&(t=yo),N(function(n,e){var r=!1;n.subscribe(j(e,function(i){r=!0,e.next(i)},function(){return r?e.complete():e.error(t())}))})}function yo(){return new ye}function go(t,n){var e=arguments.length>=2;return function(r){return r.pipe(et,vo(1),e?ho(n):_o(function(){return new ye}))}}function we(){return!document.hidden}function wo(){const t=H(document,"visibilitychange"),n=H(window,"focus").pipe(hn(!0)),e=H(window,"blur").pipe(hn(!1)),r=bo(n,e);return ro(t,r).pipe(q(([,i])=>we()&&i),mo(i=>i),go())}const xo=H(document,"mouseover");async function So(){we()||await Promise.race([wo().toPromise(),xo.toPromise()])}async function To(){await new Promise(t=>setTimeout(t,400)),await So(),await new Promise(t=>setTimeout(t,400))}const Eo=To();function I(t,n){const e=t.querySelector(n);if(!e)throw new Error("Failed to find element ${ selector } !");return e}const $o=_t.bind(tt),ko="crumbs-p",Io=nt($o`
	<style>
		:host {
			display: block;
		}

		p {
			font-size: 1rem;
		}

		::slotted(code) {
			padding: 5px;
			border-radius: 5px;
			display: inline-block;
			font-size: 0.9rem;
		}

		::slotted(code[block]) {
			display: block;
			margin: 1rem 0;
			white-space: pre;
		}

		@media screen and (min-width: 800px) {
			p {
				font-size: 1.4rem;
			}
		}
	</style>

	<p>
		<slot></slot>
	</p>
`);let Oo=class extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const n=C(this),e=Io.content.cloneNode(!0);n.appendChild(e)}};customElements.define(ko,Oo);const Po=_t.bind(tt),Co="crumbs-panel",jo=nt(Po`
	<style>
		:host {
			display: block;
		}

		#panel-container {
			display: grid;
			grid-column-gap: 0px;
			grid-row-gap: 0px;
			transition: grid-template-columns .5s cubic-bezier(.12,1.03,.11,.99), grid-template-rows .5s cubic-bezier(.12,1.03,.11,.99);
			height: 100%;
		}

		#panel {
			border-radius: 0.3rem;
			padding: 1.7rem;
			grid-area: 2 / 2 / 3 / 3;
			background-color: #ffffff00;
			box-shadow: 0px 0px 9px 5px rgba(28, 44, 83, 0.04);
			box-shadow: 2px 10px 50px 5px rgba(26, 25, 25, 0.47);
			transition: background-color .5s cubic-bezier(.12,1.03,.11,.99);
			color: black;
			overflow: auto;
			position: relative;
		}

		#panel-title-container {
			grid-area: 2 / 2 / 3 / 3;
			z-index: 0;
		}

		#panel-content {
			visibility: collapse;
			transition: opacity 1s cubic-bezier(.12,1.03,.11,.99);
			z-index: 1;
			position: relative;
			height: calc(100% - 2.5rem);
		}

		#panel-loading-container {
			grid-area: 2 / 2 / 3 / 3;
			overflow: hidden;
			backdrop-filter: blur(0.3rem);
		}

		#panel-title {
			background: linear-gradient(0deg, rgba(255, 255, 255, 0.46) 0%, rgba(255, 255, 255, 0.44) 100%);
			display: inline-block;
			border-radius: 0.3rem;
			padding-left: 1rem;
			padding-right: 1rem;
			opacity: 0;
			transition-duration: 0.2s;
			transition-timing-function: cubic-bezier(.12,1.03,.11,.99);
			transition-delay: 0.4s;
			transition-property: opacity;
		}

		#panel-loading {
			border-radius: 0.3rem;
			width: 75%;
			height: 100%;
			background-color: #ffffff55;
			box-shadow: 0px 0px 9px 5px rgba(28, 44, 83, 0.04);

			transition-duration: 1s;
			transition-timing-function: cubic-bezier(.17,.84,.44,1);
			transition-delay: 0s;
			transition-property: width, background-color;

			color: black;
			overflow: auto;

			position: relative;
		}

		* {
			scrollbar-width: auto;
			scrollbar-color: #ffffff90 #ffffff00;
		}

		*::-webkit-scrollbar {
			width: 8px;
		}

		*::-webkit-scrollbar-track {
			background: #ffffff00;
		}

		*::-webkit-scrollbar-thumb {
			background-color: #ffffff90;
			border-radius: 10px;
			border: 3px solid #ffffff00;
		}
	</style>

	<div id="panel-container" style="grid-template-columns: 20% 1fr 20%; grid-template-rows: 1rem 1fr 40%;">
		<div id="panel-loading-container">
			<div id="panel-loading"></div>
		</div>

		<div id="panel">
			<div id="panel-content" style="opacity: 0;">
				<slot></slot>
			</div>
		</div>

		<div id="panel-title-container">
			<div id="panel-title">
				<crumbs-p style="line-height: 0;">
					<b id="panel-title-content"> </b>
				</crumbs-p>
			</div>
		</div>
	</div>
`);class Ao extends HTMLElement{constructor(){super(...arguments);$(this,"contentTimeoutElapsed",!1);$(this,"contentLoaded",!1);$(this,"connected",!1);$(this,"loading","100");$(this,"scrolled",!1);$(this,"scrolledSubscription",null)}static get observedAttributes(){return["panel-loading","panel-title"]}async connectedCallback(){this.attachShadow({mode:"open"}),await Eo;const e=C(this),r=jo.content.cloneNode(!0);e.appendChild(r);const i=this.getAttribute("panel-loading");i!==null&&vn(i)&&(this.loading=i),setTimeout(()=>{const o=I(e,"#panel-container");o.style.gridTemplateColumns="1rem 1fr 1rem",o.style.gridTemplateRows="1rem 1fr 1rem";const s=I(e,"#panel");s.style.backgroundColor="#ffffff40",this.scrolledSubscription=H(s,"scroll").pipe(q(u=>u.target.scrollTop),q(u=>u!==0)).subscribe(u=>{this.scrolled=u,this.render()}),this.render()},10),setTimeout(()=>{this.contentTimeoutElapsed=!0,this.render()},400),this.connected=!0,this.render()}render(){const e=C(this),r=I(e,"#panel-content"),i=I(e,"#panel-loading"),o=I(e,"#panel"),s=I(e,"#panel-title-content");this.contentTimeoutElapsed&&Lo(this.loading)?(r.style.visibility="visible",r.style.opacity="1",o.style.overflow="auto"):(r.style.visibility="collapse",r.style.opacity="0",o.style.overflow="hidden"),i.style.width=`${this.loading}%`;const u=I(e,"#panel-title");this.loading==="100"&&this.getAttribute("panel-title")&&!this.scrolled?setTimeout(()=>{u.style.opacity="1",s.innerHTML=this.getAttribute("panel-title")||"",r.style.paddingTop="2.5rem"},10):(r.style.paddingTop="inherit",u.style.opacity="0")}attributeChangedCallback(){if(this.shadowRoot&&this.connected){const e=this.getAttribute("panel-loading");e!==null&&vn(e)?this.loading=e:e===null&&(this.loading="100"),this.render()}}disconnectedCallback(){var e;(e=this.scrolledSubscription)==null||e.unsubscribe()}}function vn(t){const n=Number(t),e=Math.floor(n);return e===n&&Number.isInteger(e)&&Number.isFinite(e)&&e<=100&&e>=0}function Lo(t){return t===null||t==="100"}customElements.define(Co,Ao);const Mo=_t.bind(tt),Ho="crumbs-input",No=nt(Mo`
	<style>
		:host {
			display: block;
		}

		input {
			font-size: 1rem;
			font-family: inherit;
			background-color: transparent;
			padding: 0.4rem;
			border-radius: 10px;
			border-color: transparent;
			padding: 10px 25px;

			box-shadow: inset 2px 2px 6px 0px rgba(0, 0, 0, 0.29),
				inset -2px -2px 3px #ffffffa8,
				2px 2px 1px 0px #ffffff1c,
				-2px -2px 1px rgba(0, 0, 0, 0.02);

			border-width: 0;
			margin: 0.1rem;
		}

		@media screen and (min-width: 800px) {
			input {
				font-size: 1.4rem;
			}
		}

		input:focus, input:focus-visible {
			outline: none;
		}
	</style>

	<input type="text"/>
`);class Fo extends HTMLElement{static get observedAttributes(){return["value"]}async connectedCallback(){this.attachShadow({mode:"open"});const n=C(this),e=No.content.cloneNode(!0);n.appendChild(e);const r=I(n,"input"),i=this.getAttribute("value");r instanceof HTMLInputElement&&i&&(r.value=i)}attributeChangedCallback(n,e,r){if(n==="value"&&this.shadowRoot){const i=C(this),o=I(i,"input");o instanceof HTMLInputElement&&(o.value=r)}}}customElements.define(Ho,Fo);const Mt=_t.bind(tt),Ro="crumbs-tabs",Uo=nt(Mt`
	<style>
		:host {
			display: block;
		}

		.selected-title {
			background: linear-gradient(0deg, rgba(255, 255, 255, 0.46) 0%, rgba(255, 255, 255, 0.44) 100%);
			border-radius: 0.3rem;
		}

		#tabs {
			display: flex;
			justify-content: space-around;

			& > div {
				padding: 10px;
				cursor: pointer;
				width: 100%;
				text-align: center;
				user-select: none;
			}
		}

		#content {
			display: grid;
			grid-auto-flow: column;
			overflow: scroll;
			grid-auto-columns: 100%;
			scroll-snap-type: x mandatory;
			scroll-behavior: smooth;
			-ms-overflow-style: none;
			scrollbar-width: none;

			& > div {
				scroll-snap-align: start;
			}
		}

		#content::-webkit-scrollbar {
			display: none;
		}

		#container {
			display: grid;
			grid-template-rows: 1fr auto;
			height: 100%;
		}
	</style>

	<div id="container">
		<div id="content"></div>
		<div id="tabs"></div>
	</div>
`);class Do extends HTMLElement{constructor(){super(...arguments);$(this,"selected",1);$(this,"subscriptions",[])}async connectedCallback(){this.attachShadow({mode:"open"});const e=C(this),r=Uo.content.cloneNode(!0);e.appendChild(r);const i=this.getAttribute("selected");this.selected=Number.parseInt(i||"1");const o=e.querySelector("#tabs"),s=e.querySelector("#content");if(!o)throw new Error("Tabs not found");if(!s)throw new Error("Content not found");for(const u of{[Symbol.iterator]:()=>this.getSlots()}){if(u.startsWith("content-")){const a=Mt`<div id=${`${u}`}> <slot name=${u}></slot> </div>`;a instanceof Element&&s.appendChild(a)}if(u.startsWith("title-")){const a=Mt`<div id=${u}> <crumbs-p> <slot name=${u}></slot> </crumbs-p> </div>`;a instanceof Element&&o.appendChild(a)}}this.subscriptions=[...o.children].map((u,a)=>H(u,"click").subscribe(()=>{const c=u.id.replace("title-","content-"),f=e.querySelector(`#${c}`);f instanceof HTMLElement&&s instanceof HTMLElement&&f.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.selected=a+1,this.render()})),this.render()}render(){const r=C(this).querySelector("#tabs");if(!r)throw new Error("Tabs not found");[...r.children].forEach((i,o)=>{o+1===this.selected?i instanceof HTMLElement&&i.classList.add("selected-title"):i instanceof HTMLElement&&i.classList.remove("selected-title")})}disconnectedCallback(){for(const e of this.subscriptions)e.unsubscribe()}*getSlots(){for(const e of Array.from(this.children)){const r=e.getAttribute("slot");r&&(yield r)}}}customElements.define(Ro,Do);var xe=function(t,n,e,r){var i;n[0]=0;for(var o=1;o<n.length;o++){var s=n[o++],u=n[o]?(n[0]|=s?1:2,e[n[o++]]):n[++o];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[n[++o]]=u:s===6?r[1][n[++o]]+=u+"":s?(i=t.apply(u,xe(t,u,e,["",null])),r.push(i),u[0]?n[0]|=2:(n[o-2]=0,n[o]=i)):r.push(u)}return r},_n=new Map;function zo(t){var n=_n.get(this);return n||(n=new Map,_n.set(this,n)),(n=xe(this,n.get(t)||(n.set(t,n=function(e){for(var r,i,o=1,s="",u="",a=[0],c=function(d){o===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,d,s):o===3&&(d||s)?(a.push(3,d,s),o=2):o===2&&s==="..."&&d?a.push(4,d,0):o===2&&s&&!d?a.push(5,0,!0,s):o>=5&&((s||!d&&o===5)&&(a.push(o,0,s,i),o=6),d&&(a.push(o,d,0,i),o=6)),s=""},f=0;f<e.length;f++){f&&(o===1&&c(),c(f));for(var l=0;l<e[f].length;l++)r=e[f][l],o===1?r==="<"?(c(),a=[a],o=3):s+=r:o===4?s==="--"&&r===">"?(o=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(c(),o=1):o&&(r==="="?(o=5,i=s,s=""):r==="/"&&(o<5||e[f][l+1]===">")?(c(),o===3&&(a=a[0]),o=a,(a=a[0]).push(2,0,o),o=0):r===" "||r==="	"||r===`
`||r==="\r"?(c(),o=2):s+=r),o===3&&s==="!--"&&(o=4,a=a[0])}return c(),a}(t)),n),arguments,[])).length>1?n:n[0]}const Vo=zo.bind(tt),Bo="crumbs-button",Wo=nt(Vo`
	<style>
		:host {
			display: inline-block;
		}

		/* ❤️ https://codepen.io/yuhomyan/pen/OJMejWJ */

		.custom-btn {
			font-family: ds-notes-sans;
			font-size: 1rem;
			display: grid;
			place-content: center;
			border-radius: 5px;
			padding: 10px 25px;
			font-weight: 500;
			background: transparent;
			cursor: pointer;
			transition: all 0.3s ease;
			position: relative;
			box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
			7px 7px 20px 0px rgba(0,0,0,.1),
			4px 4px 5px 0px rgba(0,0,0,.1);
			outline: none;
			grid-area: 2 / 2 / 3 / 3;
			user-select: none;
		}

		@media screen and (min-width: 800px) {
			.custom-btn {
				font-size: 1.4rem;
			}
		}

		.btn-16 {
			border: none;
			color: #000;
		}
		.btn-16:after {
			position: absolute;
			content: "";
			width: 0;
			height: 100%;
			top: 0;
			left: 0;
			direction: rtl;
			z-index: -1;
			box-shadow: -1px -1px 5px 0px #fff0, -1px -1px 5px 0px #fff, 7px 7px 10px 0px #0002, 4px 4px 5px 0px #0001;
			transition: all 0.3s ease;
			border-radius: 5px;
			background-color: #fff3;
		}
		.btn-16:hover {
			color: #000;
		}
		.btn-16:hover:after {
			left: auto;
			right: 0;
			width: 100%;
		}
		.btn-16:active {
			top: 2px;
		}

		.button-container {
			display: grid;
			grid-template-columns: 0.4rem 1fr 0.4rem;
			grid-template-rows: 0.4rem 1fr 0.4rem; 
		}

		.progress-container {
			grid-area: 2 / 2 / 3 / 3;
		}

		#progress {
			background-color: #fff3;
			height: 100%;
			width: 0%;
			border-radius: 5px;
			transition: width 0.3s ease-in-out;
		}

	</style>

	<div className="button-container">
		<div className="custom-btn btn-16">
			<slot></slot>
		</div>
		<div className="progress-container">
			<div id="progress"></div>
		</div>
	</div>
`);class qo extends HTMLElement{constructor(){super(...arguments);$(this,"clickSubscription",null);$(this,"_progress","0")}static get observedAttributes(){return["progress"]}async connectedCallback(){this.attachShadow({mode:"open"});const e=C(this);this._progress=this.getAttribute("progress")||"0",e.appendChild(Wo.content.cloneNode(!0)),this.render()}attributeChangedCallback(){if(this.shadowRoot){const e=this.getAttribute("progress");Yo(e)&&(this._progress=e===null?"0":e),this.render()}}render(){const e=C(this),r=I(e,"#progress");r.style.width=`${this._progress}%`}disconnectedCallback(){var e;(e=this.clickSubscription)==null||e.unsubscribe()}}function Yo(t){if(t===null)return!0;const n=Number(t),e=Math.floor(n);return e===n&&Number.isInteger(e)&&Number.isFinite(e)&&e<=100&&e>=0}customElements.define(Bo,qo);let Go={data:""},Jo=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||Go,Ko=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Qo=/\/\*[^]*?\*\/|  +/g,yn=/\n+/g,R=(t,n)=>{let e="",r="",i="";for(let o in t){let s=t[o];o[0]=="@"?o[1]=="i"?e=o+" "+s+";":r+=o[1]=="f"?R(s,o):o+"{"+R(s,o[1]=="k"?"":n)+"}":typeof s=="object"?r+=R(s,n?n.replace(/([^,])+/g,u=>o.replace(/(^:.*)|([^,])+/g,a=>/&/.test(a)?a.replace(/&/g,u):u?u+" "+a:a)):o):s!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=R.p?R.p(o,s):o+":"+s+";")}return e+(n&&i?n+"{"+i+"}":i)+r},O={},Se=t=>{if(typeof t=="object"){let n="";for(let e in t)n+=e+Se(t[e]);return n}return t},Zo=(t,n,e,r,i)=>{let o=Se(t),s=O[o]||(O[o]=(a=>{let c=0,f=11;for(;c<a.length;)f=101*f+a.charCodeAt(c++)>>>0;return"go"+f})(o));if(!O[s]){let a=o!==t?t:(c=>{let f,l,d=[{}];for(;f=Ko.exec(c.replace(Qo,""));)f[4]?d.shift():f[3]?(l=f[3].replace(yn," ").trim(),d.unshift(d[0][l]=d[0][l]||{})):d[0][f[1]]=f[2].replace(yn," ").trim();return d[0]})(t);O[s]=R(i?{["@keyframes "+s]:a}:a,e?"":"."+s)}let u=e&&O.g?O.g:null;return e&&(O.g=O[s]),((a,c,f,l)=>{l?c.data=c.data.replace(l,a):c.data.indexOf(a)===-1&&(c.data=f?a+c.data:c.data+a)})(O[s],n,r,u),s},Xo=(t,n,e)=>t.reduce((r,i,o)=>{let s=n[o];if(s&&s.call){let u=s(e),a=u&&u.props&&u.props.className||/^go/.test(u)&&u;s=a?"."+a:u&&typeof u=="object"?u.props?"":R(u,""):u===!1?"":u}return r+i+(s??"")},"");function D(t){let n=this||{},e=t.call?t(n.p):t;return Zo(e.unshift?e.raw?Xo(e,[].slice.call(arguments,1),n.p):e.reduce((r,i)=>Object.assign(r,i&&i.call?i(n.p):i),{}):e,Jo(n.target),n.g,n.o,n.k)}D.bind({g:1});D.bind({k:1});var yt,g,Te,U,gn,Ee,Ht,nn,Nt,Ft,Q={},$e=[],ti=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,en=Array.isArray;function L(t,n){for(var e in n)t[e]=n[e];return t}function ke(t){var n=t.parentNode;n&&n.removeChild(t)}function Ie(t,n,e){var r,i,o,s={};for(o in n)o=="key"?r=n[o]:o=="ref"?i=n[o]:s[o]=n[o];if(arguments.length>2&&(s.children=arguments.length>3?yt.call(arguments,2):e),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)s[o]===void 0&&(s[o]=t.defaultProps[o]);return lt(t,s,r,i,null)}function lt(t,n,e,r,i){var o={type:t,props:n,key:e,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i??++Te,__i:-1,__u:0};return i==null&&g.vnode!=null&&g.vnode(o),o}function gt(t){return t.children}function ft(t,n){this.props=t,this.context=n}function z(t,n){if(n==null)return t.__?z(t.__,t.__i+1):null;for(var e;n<t.__k.length;n++)if((e=t.__k[n])!=null&&e.__e!=null)return e.__e;return typeof t.type=="function"?z(t):null}function Oe(t){var n,e;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if((e=t.__k[n])!=null&&e.__e!=null){t.__e=t.__c.base=e.__e;break}return Oe(t)}}function wn(t){(!t.__d&&(t.__d=!0)&&U.push(t)&&!ht.__r++||gn!==g.debounceRendering)&&((gn=g.debounceRendering)||Ee)(ht)}function ht(){var t,n,e,r,i,o,s,u;for(U.sort(Ht);t=U.shift();)t.__d&&(n=U.length,r=void 0,o=(i=(e=t).__v).__e,s=[],u=[],e.__P&&((r=L({},i)).__v=i.__v+1,g.vnode&&g.vnode(r),rn(e.__P,r,i,e.__n,e.__P.namespaceURI,32&i.__u?[o]:null,s,o??z(i),!!(32&i.__u),u),r.__v=i.__v,r.__.__k[r.__i]=r,je(s,r,u),r.__e!=o&&Oe(r)),U.length>n&&U.sort(Ht));ht.__r=0}function Pe(t,n,e,r,i,o,s,u,a,c,f){var l,d,p,m,b,h=r&&r.__k||$e,v=n.length;for(e.__d=a,ni(e,n,h),a=e.__d,l=0;l<v;l++)(p=e.__k[l])!=null&&typeof p!="boolean"&&typeof p!="function"&&(d=p.__i===-1?Q:h[p.__i]||Q,p.__i=l,rn(t,p,d,i,o,s,u,a,c,f),m=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&on(d.ref,null,p),f.push(p.ref,p.__c||m,p)),b==null&&m!=null&&(b=m),65536&p.__u||d.__k===p.__k?(a&&!a.isConnected&&(a=z(d)),a=Ce(p,a,t)):typeof p.type=="function"&&p.__d!==void 0?a=p.__d:m&&(a=m.nextSibling),p.__d=void 0,p.__u&=-196609);e.__d=a,e.__e=b}function ni(t,n,e){var r,i,o,s,u,a=n.length,c=e.length,f=c,l=0;for(t.__k=[],r=0;r<a;r++)s=r+l,(i=t.__k[r]=(i=n[r])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?lt(null,i,null,null,null):en(i)?lt(gt,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?lt(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=t,i.__b=t.__b+1,u=ei(i,e,s,f),i.__i=u,o=null,u!==-1&&(f--,(o=e[u])&&(o.__u|=131072)),o==null||o.__v===null?(u==-1&&l--,typeof i.type!="function"&&(i.__u|=65536)):u!==s&&(u===s+1?l++:u>s?f>a-s?l+=u-s:l--:u<s?u==s-1&&(l=u-s):l=0,u!==r+l&&(i.__u|=65536))):(o=e[s])&&o.key==null&&o.__e&&!(131072&o.__u)&&(o.__e==t.__d&&(t.__d=z(o)),Rt(o,o,!1),e[s]=null,f--);if(f)for(r=0;r<c;r++)(o=e[r])!=null&&!(131072&o.__u)&&(o.__e==t.__d&&(t.__d=z(o)),Rt(o,o))}function Ce(t,n,e){var r,i;if(typeof t.type=="function"){for(r=t.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=t,n=Ce(r[i],n,e));return n}t.__e!=n&&(e.insertBefore(t.__e,n||null),n=t.__e);do n=n&&n.nextSibling;while(n!=null&&n.nodeType===8);return n}function ei(t,n,e,r){var i=t.key,o=t.type,s=e-1,u=e+1,a=n[e];if(a===null||a&&i==a.key&&o===a.type&&!(131072&a.__u))return e;if(r>(a!=null&&!(131072&a.__u)?1:0))for(;s>=0||u<n.length;){if(s>=0){if((a=n[s])&&!(131072&a.__u)&&i==a.key&&o===a.type)return s;s--}if(u<n.length){if((a=n[u])&&!(131072&a.__u)&&i==a.key&&o===a.type)return u;u++}}return-1}function xn(t,n,e){n[0]==="-"?t.setProperty(n,e??""):t[n]=e==null?"":typeof e!="number"||ti.test(n)?e:e+"px"}function ct(t,n,e,r,i){var o;t:if(n==="style")if(typeof e=="string")t.style.cssText=e;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(n in r)e&&n in e||xn(t.style,n,"");if(e)for(n in e)r&&e[n]===r[n]||xn(t.style,n,e[n])}else if(n[0]==="o"&&n[1]==="n")o=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in t||n==="onFocusOut"||n==="onFocusIn"?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+o]=e,e?r?e.u=r.u:(e.u=nn,t.addEventListener(n,o?Ft:Nt,o)):t.removeEventListener(n,o?Ft:Nt,o);else{if(i=="http://www.w3.org/2000/svg")n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!="width"&&n!="height"&&n!="href"&&n!="list"&&n!="form"&&n!="tabIndex"&&n!="download"&&n!="rowSpan"&&n!="colSpan"&&n!="role"&&n in t)try{t[n]=e??"";break t}catch{}typeof e=="function"||(e==null||e===!1&&n[4]!=="-"?t.removeAttribute(n):t.setAttribute(n,e))}}function Sn(t){return function(n){if(this.l){var e=this.l[n.type+t];if(n.t==null)n.t=nn++;else if(n.t<e.u)return;return e(g.event?g.event(n):n)}}}function rn(t,n,e,r,i,o,s,u,a,c){var f,l,d,p,m,b,h,v,y,A,ot,Y,cn,it,St,T=n.type;if(n.constructor!==void 0)return null;128&e.__u&&(a=!!(32&e.__u),o=[u=n.__e=e.__e]),(f=g.__b)&&f(n);t:if(typeof T=="function")try{if(v=n.props,y=(f=T.contextType)&&r[f.__c],A=f?y?y.props.value:f.__:r,e.__c?h=(l=n.__c=e.__c).__=l.__E:("prototype"in T&&T.prototype.render?n.__c=l=new T(v,A):(n.__c=l=new ft(v,A),l.constructor=T,l.render=oi),y&&y.sub(l),l.props=v,l.state||(l.state={}),l.context=A,l.__n=r,d=l.__d=!0,l.__h=[],l._sb=[]),l.__s==null&&(l.__s=l.state),T.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=L({},l.__s)),L(l.__s,T.getDerivedStateFromProps(v,l.__s))),p=l.props,m=l.state,l.__v=n,d)T.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(T.getDerivedStateFromProps==null&&v!==p&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,A),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,A)===!1||n.__v===e.__v)){for(n.__v!==e.__v&&(l.props=v,l.state=l.__s,l.__d=!1),n.__e=e.__e,n.__k=e.__k,n.__k.forEach(function(st){st&&(st.__=n)}),ot=0;ot<l._sb.length;ot++)l.__h.push(l._sb[ot]);l._sb=[],l.__h.length&&s.push(l);break t}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,A),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(p,m,b)})}if(l.context=A,l.props=v,l.__P=t,l.__e=!1,Y=g.__r,cn=0,"prototype"in T&&T.prototype.render){for(l.state=l.__s,l.__d=!1,Y&&Y(n),f=l.render(l.props,l.state,l.context),it=0;it<l._sb.length;it++)l.__h.push(l._sb[it]);l._sb=[]}else do l.__d=!1,Y&&Y(n),f=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++cn<25);l.state=l.__s,l.getChildContext!=null&&(r=L(L({},r),l.getChildContext())),d||l.getSnapshotBeforeUpdate==null||(b=l.getSnapshotBeforeUpdate(p,m)),Pe(t,en(St=f!=null&&f.type===gt&&f.key==null?f.props.children:f)?St:[St],n,e,r,i,o,s,u,a,c),l.base=n.__e,n.__u&=-161,l.__h.length&&s.push(l),h&&(l.__E=l.__=null)}catch(st){n.__v=null,a||o!=null?(n.__e=u,n.__u|=a?160:32,o[o.indexOf(u)]=null):(n.__e=e.__e,n.__k=e.__k),g.__e(st,n,e)}else o==null&&n.__v===e.__v?(n.__k=e.__k,n.__e=e.__e):n.__e=ri(e.__e,n,e,r,i,o,s,a,c);(f=g.diffed)&&f(n)}function je(t,n,e){n.__d=void 0;for(var r=0;r<e.length;r++)on(e[r],e[++r],e[++r]);g.__c&&g.__c(n,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(o){o.call(i)})}catch(o){g.__e(o,i.__v)}})}function ri(t,n,e,r,i,o,s,u,a){var c,f,l,d,p,m,b,h=e.props,v=n.props,y=n.type;if(y==="svg"?i="http://www.w3.org/2000/svg":y==="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),o!=null){for(c=0;c<o.length;c++)if((p=o[c])&&"setAttribute"in p==!!y&&(y?p.localName===y:p.nodeType===3)){t=p,o[c]=null;break}}if(t==null){if(y===null)return document.createTextNode(v);t=document.createElementNS(i,y,v.is&&v),o=null,u=!1}if(y===null)h===v||u&&t.data===v||(t.data=v);else{if(o=o&&yt.call(t.childNodes),h=e.props||Q,!u&&o!=null)for(h={},c=0;c<t.attributes.length;c++)h[(p=t.attributes[c]).name]=p.value;for(c in h)if(p=h[c],c!="children"){if(c=="dangerouslySetInnerHTML")l=p;else if(c!=="key"&&!(c in v)){if(c=="value"&&"defaultValue"in v||c=="checked"&&"defaultChecked"in v)continue;ct(t,c,null,p,i)}}for(c in v)p=v[c],c=="children"?d=p:c=="dangerouslySetInnerHTML"?f=p:c=="value"?m=p:c=="checked"?b=p:c==="key"||u&&typeof p!="function"||h[c]===p||ct(t,c,p,h[c],i);if(f)u||l&&(f.__html===l.__html||f.__html===t.innerHTML)||(t.innerHTML=f.__html),n.__k=[];else if(l&&(t.innerHTML=""),Pe(t,en(d)?d:[d],n,e,r,y==="foreignObject"?"http://www.w3.org/1999/xhtml":i,o,s,o?o[0]:e.__k&&z(e,0),u,a),o!=null)for(c=o.length;c--;)o[c]!=null&&ke(o[c]);u||(c="value",m!==void 0&&(m!==t[c]||y==="progress"&&!m||y==="option"&&m!==h[c])&&ct(t,c,m,h[c],i),c="checked",b!==void 0&&b!==t[c]&&ct(t,c,b,h[c],i))}return t}function on(t,n,e){try{typeof t=="function"?t(n):t.current=n}catch(r){g.__e(r,e)}}function Rt(t,n,e){var r,i;if(g.unmount&&g.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||on(r,null,n)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){g.__e(o,n)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&Rt(r[i],n,e||typeof t.type!="function");e||t.__e==null||ke(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function oi(t,n,e){return this.constructor(t,e)}function ii(t,n,e){var r,i,o,s;g.__&&g.__(t,n),i=(r=typeof e=="function")?null:n.__k,o=[],s=[],rn(n,t=(!r&&e||n).__k=Ie(gt,null,[t]),i||Q,Q,n.namespaceURI,!r&&e?[e]:i?null:n.firstChild?yt.call(n.childNodes):null,o,!r&&e?e:i?i.__e:n.firstChild,r,s),je(o,t,s)}yt=$e.slice,g={__e:function(t,n,e,r){for(var i,o,s;n=n.__;)if((i=n.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(t)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),s=i.__d),s)return i.__E=i}catch(u){t=u}throw t}},Te=0,ft.prototype.setState=function(t,n){var e;e=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=L({},this.state),typeof t=="function"&&(t=t(L({},e),this.props)),t&&L(e,t),t!=null&&this.__v&&(n&&this._sb.push(n),wn(this))},ft.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),wn(this))},ft.prototype.render=gt,U=[],Ee=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ht=function(t,n){return t.__v.__b-n.__v.__b},ht.__r=0,nn=0,Nt=Sn(!1),Ft=Sn(!0);var Ae=function(t,n,e,r){var i;n[0]=0;for(var o=1;o<n.length;o++){var s=n[o++],u=n[o]?(n[0]|=s?1:2,e[n[o++]]):n[++o];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[n[++o]]=u:s===6?r[1][n[++o]]+=u+"":s?(i=t.apply(u,Ae(t,u,e,["",null])),r.push(i),u[0]?n[0]|=2:(n[o-2]=0,n[o]=i)):r.push(u)}return r},Tn=new Map;function si(t){var n=Tn.get(this);return n||(n=new Map,Tn.set(this,n)),(n=Ae(this,n.get(t)||(n.set(t,n=function(e){for(var r,i,o=1,s="",u="",a=[0],c=function(d){o===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,d,s):o===3&&(d||s)?(a.push(3,d,s),o=2):o===2&&s==="..."&&d?a.push(4,d,0):o===2&&s&&!d?a.push(5,0,!0,s):o>=5&&((s||!d&&o===5)&&(a.push(o,0,s,i),o=6),d&&(a.push(o,d,0,i),o=6)),s=""},f=0;f<e.length;f++){f&&(o===1&&c(),c(f));for(var l=0;l<e[f].length;l++)r=e[f][l],o===1?r==="<"?(c(),a=[a],o=3):s+=r:o===4?s==="--"&&r===">"?(o=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(c(),o=1):o&&(r==="="?(o=5,i=s,s=""):r==="/"&&(o<5||e[f][l+1]===">")?(c(),o===3&&(a=a[0]),o=a,(a=a[0]).push(2,0,o),o=0):r===" "||r==="	"||r===`
`||r==="\r"?(c(),o=2):s+=r),o===3&&s==="!--"&&(o=4,a=a[0])}return c(),a}(t)),n),arguments,[])).length>1?n:n[0]}var k=si.bind(Ie),Z,w,It,En,X=0,Le=[],pt=[],x=g,$n=x.__b,kn=x.__r,In=x.diffed,On=x.__c,Pn=x.unmount,Cn=x.__;function sn(t,n){x.__h&&x.__h(w,t,X||n),X=0;var e=w.__H||(w.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({__V:pt}),e.__[t]}function S(t){return X=1,ui(Fe,t)}function ui(t,n,e){var r=sn(Z++,2);if(r.t=t,!r.__c&&(r.__=[Fe(void 0,n),function(u){var a=r.__N?r.__N[0]:r.__[0],c=r.t(a,u);a!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=w,!w.u)){var i=function(u,a,c){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(d){return!!d.__c});if(f.every(function(d){return!d.__N}))return!o||o.call(this,u,a,c);var l=!1;return f.forEach(function(d){if(d.__N){var p=d.__[0];d.__=d.__N,d.__N=void 0,p!==d.__[0]&&(l=!0)}}),!(!l&&r.__c.props===u)&&(!o||o.call(this,u,a,c))};w.u=!0;var o=w.shouldComponentUpdate,s=w.componentWillUpdate;w.componentWillUpdate=function(u,a,c){if(this.__e){var f=o;o=void 0,i(u,a,c),o=f}s&&s.call(this,u,a,c)},w.shouldComponentUpdate=i}return r.__N||r.__}function ci(t,n){var e=sn(Z++,3);!x.__s&&Ne(e.__H,n)&&(e.__=t,e.i=n,w.__H.__h.push(e))}function ai(t){return X=5,Me(function(){return{current:t}},[])}function Me(t,n){var e=sn(Z++,7);return Ne(e.__H,n)?(e.__V=t(),e.i=n,e.__h=t,e.__V):e.__}function He(t,n){return X=8,Me(function(){return t},n)}function li(){for(var t;t=Le.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(dt),t.__H.__h.forEach(Ut),t.__H.__h=[]}catch(n){t.__H.__h=[],x.__e(n,t.__v)}}x.__b=function(t){w=null,$n&&$n(t)},x.__=function(t,n){t&&n.__k&&n.__k.__m&&(t.__m=n.__k.__m),Cn&&Cn(t,n)},x.__r=function(t){kn&&kn(t),Z=0;var n=(w=t.__c).__H;n&&(It===w?(n.__h=[],w.__h=[],n.__.forEach(function(e){e.__N&&(e.__=e.__N),e.__V=pt,e.__N=e.i=void 0})):(n.__h.forEach(dt),n.__h.forEach(Ut),n.__h=[],Z=0)),It=w},x.diffed=function(t){In&&In(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(Le.push(n)!==1&&En===x.requestAnimationFrame||((En=x.requestAnimationFrame)||fi)(li)),n.__H.__.forEach(function(e){e.i&&(e.__H=e.i),e.__V!==pt&&(e.__=e.__V),e.i=void 0,e.__V=pt})),It=w=null},x.__c=function(t,n){n.some(function(e){try{e.__h.forEach(dt),e.__h=e.__h.filter(function(r){return!r.__||Ut(r)})}catch(r){n.some(function(i){i.__h&&(i.__h=[])}),n=[],x.__e(r,e.__v)}}),On&&On(t,n)},x.unmount=function(t){Pn&&Pn(t);var n,e=t.__c;e&&e.__H&&(e.__H.__.forEach(function(r){try{dt(r)}catch(i){n=i}}),e.__H=void 0,n&&x.__e(n,e.__v))};var jn=typeof requestAnimationFrame=="function";function fi(t){var n,e=function(){clearTimeout(r),jn&&cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);jn&&(n=requestAnimationFrame(e))}function dt(t){var n=w,e=t.__c;typeof e=="function"&&(t.__c=void 0,e()),w=n}function Ut(t){var n=w;t.__c=t.__(),w=n}function Ne(t,n){return!t||t.length!==n.length||n.some(function(e,r){return e!==t[r]})}function Fe(t,n){return typeof n=="function"?n(t):n}function vt(t,n){var e=S(n),r=e[0],i=e[1],o=ai(t);return ci(function(){var s=o.current.subscribe(i);return function(){return s.unsubscribe()}}),r}var Dt=function(t,n){return Dt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])},Dt(t,n)};function wt(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");Dt(t,n);function e(){this.constructor=t}t.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}function zt(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Vt(t,n){var e=typeof Symbol=="function"&&t[Symbol.iterator];if(!e)return t;var r=e.call(t),i,o=[],s;try{for(;(n===void 0||n-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(u){s={error:u}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(s)throw s.error}}return o}function Bt(t,n,e){if(e||arguments.length===2)for(var r=0,i=n.length,o;r<i;r++)(o||!(r in n))&&(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return t.concat(o||Array.prototype.slice.call(n))}function P(t){return typeof t=="function"}function Re(t){var n=function(r){Error.call(r),r.stack=new Error().stack},e=t(n);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Ot=Re(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function Wt(t,n){if(t){var e=t.indexOf(n);0<=e&&t.splice(e,1)}}var xt=function(){function t(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var n,e,r,i,o;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=zt(s),a=u.next();!a.done;a=u.next()){var c=a.value;c.remove(this)}}catch(b){n={error:b}}finally{try{a&&!a.done&&(e=u.return)&&e.call(u)}finally{if(n)throw n.error}}else s.remove(this);var f=this.initialTeardown;if(P(f))try{f()}catch(b){o=b instanceof Ot?b.errors:[b]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var d=zt(l),p=d.next();!p.done;p=d.next()){var m=p.value;try{An(m)}catch(b){o=o??[],b instanceof Ot?o=Bt(Bt([],Vt(o)),Vt(b.errors)):o.push(b)}}}catch(b){r={error:b}}finally{try{p&&!p.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(o)throw new Ot(o)}},t.prototype.add=function(n){var e;if(n&&n!==this)if(this.closed)An(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}},t.prototype._hasParent=function(n){var e=this._parentage;return e===n||Array.isArray(e)&&e.includes(n)},t.prototype._addParent=function(n){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n},t.prototype._removeParent=function(n){var e=this._parentage;e===n?this._parentage=null:Array.isArray(e)&&Wt(e,n)},t.prototype.remove=function(n){var e=this._finalizers;e&&Wt(e,n),n instanceof t&&n._removeParent(this)},t.EMPTY=function(){var n=new t;return n.closed=!0,n}(),t}(),Ue=xt.EMPTY;function De(t){return t instanceof xt||t&&"closed"in t&&P(t.remove)&&P(t.add)&&P(t.unsubscribe)}function An(t){P(t)?t():t.unsubscribe()}var ze={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},pi={setTimeout:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return setTimeout.apply(void 0,Bt([t,n],Vt(e)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function di(t){pi.setTimeout(function(){throw t})}function Ln(){}function bt(t){t()}var Ve=function(t){wt(n,t);function n(e){var r=t.call(this)||this;return r.isStopped=!1,e?(r.destination=e,De(e)&&e.add(r)):r.destination=vi,r}return n.create=function(e,r,i){return new qt(e,r,i)},n.prototype.next=function(e){this.isStopped||this._next(e)},n.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(e){this.destination.next(e)},n.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(xt),bi=Function.prototype.bind;function Pt(t,n){return bi.call(t,n)}var mi=function(){function t(n){this.partialObserver=n}return t.prototype.next=function(n){var e=this.partialObserver;if(e.next)try{e.next(n)}catch(r){at(r)}},t.prototype.error=function(n){var e=this.partialObserver;if(e.error)try{e.error(n)}catch(r){at(r)}else at(n)},t.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(e){at(e)}},t}(),qt=function(t){wt(n,t);function n(e,r,i){var o=t.call(this)||this,s;if(P(e)||!e)s={next:e??void 0,error:r??void 0,complete:i??void 0};else{var u;o&&ze.useDeprecatedNextContext?(u=Object.create(e),u.unsubscribe=function(){return o.unsubscribe()},s={next:e.next&&Pt(e.next,u),error:e.error&&Pt(e.error,u),complete:e.complete&&Pt(e.complete,u)}):s=e}return o.destination=new mi(s),o}return n}(Ve);function at(t){di(t)}function hi(t){throw t}var vi={closed:!0,next:Ln,error:hi,complete:Ln},_i=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function yi(t){return t}function gi(t){return t.length===0?yi:t.length===1?t[0]:function(e){return t.reduce(function(r,i){return i(r)},e)}}var Mn=function(){function t(n){n&&(this._subscribe=n)}return t.prototype.lift=function(n){var e=new t;return e.source=this,e.operator=n,e},t.prototype.subscribe=function(n,e,r){var i=this,o=xi(n)?n:new qt(n,e,r);return bt(function(){var s=i,u=s.operator,a=s.source;o.add(u?u.call(o,a):a?i._subscribe(o):i._trySubscribe(o))}),o},t.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(e){n.error(e)}},t.prototype.forEach=function(n,e){var r=this;return e=Hn(e),new e(function(i,o){var s=new qt({next:function(u){try{n(u)}catch(a){o(a),s.unsubscribe()}},error:o,complete:i});r.subscribe(s)})},t.prototype._subscribe=function(n){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(n)},t.prototype[_i]=function(){return this},t.prototype.pipe=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return gi(n)(this)},t.prototype.toPromise=function(n){var e=this;return n=Hn(n),new n(function(r,i){var o;e.subscribe(function(s){return o=s},function(s){return i(s)},function(){return r(o)})})},t.create=function(n){return new t(n)},t}();function Hn(t){var n;return(n=t??ze.Promise)!==null&&n!==void 0?n:Promise}function wi(t){return t&&P(t.next)&&P(t.error)&&P(t.complete)}function xi(t){return t&&t instanceof Ve||wi(t)&&De(t)}var Si=Re(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),un=function(t){wt(n,t);function n(){var e=t.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return n.prototype.lift=function(e){var r=new Nn(this,this);return r.operator=e,r},n.prototype._throwIfClosed=function(){if(this.closed)throw new Si},n.prototype.next=function(e){var r=this;bt(function(){var i,o;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=zt(r.currentObservers),u=s.next();!u.done;u=s.next()){var a=u.value;a.next(e)}}catch(c){i={error:c}}finally{try{u&&!u.done&&(o=s.return)&&o.call(s)}finally{if(i)throw i.error}}}})},n.prototype.error=function(e){var r=this;bt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=e;for(var i=r.observers;i.length;)i.shift().error(e)}})},n.prototype.complete=function(){var e=this;bt(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var r=e.observers;r.length;)r.shift().complete()}})},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},n.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},n.prototype._innerSubscribe=function(e){var r=this,i=this,o=i.hasError,s=i.isStopped,u=i.observers;return o||s?Ue:(this.currentObservers=null,u.push(e),new xt(function(){r.currentObservers=null,Wt(u,e)}))},n.prototype._checkFinalizedStatuses=function(e){var r=this,i=r.hasError,o=r.thrownError,s=r.isStopped;i?e.error(o):s&&e.complete()},n.prototype.asObservable=function(){var e=new Mn;return e.source=this,e},n.create=function(e,r){return new Nn(e,r)},n}(Mn),Nn=function(t){wt(n,t);function n(e,r){var i=t.call(this)||this;return i.destination=e,i.source=r,i}return n.prototype.next=function(e){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,e)},n.prototype.error=function(e){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,e)},n.prototype.complete=function(){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||r===void 0||r.call(e)},n.prototype._subscribe=function(e){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(e))!==null&&i!==void 0?i:Ue},n}(un),Be=4,We=new un,qe=We.asObservable();function Ye(){return Be}function B(t){Be=t,We.next(t)}var Ge="initial",Je=new un,Ke=Je.asObservable();function Qe(){return Ge}function F(t){Ge=t,Je.next(t)}var Ze=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},Ct=D(Fn||(Fn=Ze([`
	height: 95%;
	display: grid;
	place-content: center;
`],[`
	height: 95%;
	display: grid;
	place-content: center;
`])));function rt(t){var n=t.title,e=t.children;return k(Rn||(Rn=Ze([`
		<crumbs-panel panel-title=`,`>
			<crumbs-tabs style="height: 100%;">
				<span slot="title-1"> Demo </span>
				<div className=`,' slot="content-1">',`</div>
				<span slot="title-2"> Parameters </span>
				<div className=`,' slot="content-2">',`</div>
				<span slot="title-3"> Code </span>
				<div className=`,' slot="content-3">',`</div>
			</crumbs-tabs>
		</crumbs-panel>
	`],[`
		<crumbs-panel panel-title=`,`>
			<crumbs-tabs style="height: 100%;">
				<span slot="title-1"> Demo </span>
				<div className=`,' slot="content-1">',`</div>
				<span slot="title-2"> Parameters </span>
				<div className=`,' slot="content-2">',`</div>
				<span slot="title-3"> Code </span>
				<div className=`,' slot="content-3">',`</div>
			</crumbs-tabs>
		</crumbs-panel>
	`])),n,Ct,e[0],Ct,e[1],Ct,e[2])}var Fn,Rn,Ti=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};function Ei(){var t=S("I'm an input !"),n=t[0],e=t[1],r=`&lt;crumbs-input
	value="`.concat(n,`"&gt;
&lt;/crumbs-input&gt;`);return k(Un||(Un=Ti([`
		<`,` title="Input">
			<crumbs-input
				value=`,`
				oninput=`,`
			/>

			<div>
				<crumbs-p>Input's value</crumbs-p>

				<crumbs-input
					value=`,`
					oninput=`,`
				/>
			</div>

			<code> <pre dangerouslySetInnerHTML=`,`> </pre></code>
		<//>
	`],[`
		<`,` title="Input">
			<crumbs-input
				value=`,`
				oninput=`,`
			/>

			<div>
				<crumbs-p>Input's value</crumbs-p>

				<crumbs-input
					value=`,`
					oninput=`,`
				/>
			</div>

			<code> <pre dangerouslySetInnerHTML=`,`> </pre></code>
		<//>
	`])),rt,n,function(i){return e(i.originalTarget.value)},n,function(i){return e(i.originalTarget.value)},{__html:r})}var Un,$i=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};function ki(){var t=S("I'm a <b>paragraph</b> !"),n=t[0],e=t[1];return k(Dn||(Dn=$i([`
		<`,` title="Paragraph">
			<div>
				<crumbs-p dangerouslySetInnerHTML=`,`>
				</crumbs-p>

				<crumbs-p>Here's an <code> inlineCode() </code>.</crumbs-p>

				<crumbs-p>
					Here's then a block of code:
					
					<code block>
function logNumbers() {
	console.log(1);
	console.log(2);
	console.log(3);
}
					</code>
				</crumbs-p>

				<crumbs-p>
					Here's a <span style="color: purple;">purple</span> word.
				</crumbs-p>
			</div>
			<crumbs-input type="text" value=`," onInput=",` />
			<code> <pre dangerouslySetInnerHTML=`,`> </pre></code>
		<//>
	`],[`
		<`,` title="Paragraph">
			<div>
				<crumbs-p dangerouslySetInnerHTML=`,`>
				</crumbs-p>

				<crumbs-p>Here's an <code> inlineCode() </code>.</crumbs-p>

				<crumbs-p>
					Here's then a block of code:
					
					<code block>
function logNumbers() {
	console.log(1);
	console.log(2);
	console.log(3);
}
					</code>
				</crumbs-p>

				<crumbs-p>
					Here's a <span style="color: purple;">purple</span> word.
				</crumbs-p>
			</div>
			<crumbs-input type="text" value=`," onInput=",` />
			<code> <pre dangerouslySetInnerHTML=`,`> </pre></code>
		<//>
	`])),rt,{__html:n},n,function(r){return e(r.originalTarget.value)},{__html:"&lt;crumbs-p&gt; ".concat(n," &lt;/crumbs-p&gt;")})}var Dn,Ii=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},Oi=function(t,n,e,r){function i(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function u(f){try{c(r.next(f))}catch(l){s(l)}}function a(f){try{c(r.throw(f))}catch(l){s(l)}}function c(f){f.done?o(f.value):i(f.value).then(u,a)}c((r=r.apply(t,n||[])).next())})},Pi=function(t,n){var e={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(c){return function(f){return a([c,f])}}function a(c){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(e=0)),e;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,i=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(o=e.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){e.label=c[1];break}if(c[0]===6&&e.label<o[1]){e.label=o[1],o=c;break}if(o&&e.label<o[2]){e.label=o[2],e.ops.push(c);break}o[2]&&e.ops.pop(),e.trys.pop();continue}c=n.call(t,e)}catch(f){c=[6,f],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};function Ci(){var t=this,n=S("I'm a panel !"),e=n[0],r=n[1],i=S(""),o=i[0],s=i[1],u=S("100"),a=u[0],c=u[1],f=S(!1),l=f[0],d=f[1],p=`&lt;crumbs-panel
	panel-title="`.concat(o,`"
	panel-loading="`).concat(a,`"&gt;
	`).concat(e,`
&lt;/crumbs-panel&gt;`),m=He(function(){return Oi(t,void 0,void 0,function(){var h;return Pi(this,function(v){switch(v.label){case 0:if(l)return[2];d(!0),c("0"),h=0,v.label=1;case 1:return h<=100?[4,new Promise(function(y){return setTimeout(y,10)})]:[3,4];case 2:v.sent(),c(Math.floor(h).toString()),v.label=3;case 3:return h+=.1+(100-h)/100,[3,1];case 4:return c("100"),d(!1),[2]}})})},[l]),b=function(){l||m()};return k(zn||(zn=Ii([`
		<`,` title="Panel">
			<div style="padding: 5rem">
				<crumbs-panel
					panel-loading=`,`
					panel-title=`,`>
					`,`
				</crumbs-panel>
			</div>

			<div>
				<crumbs-p>Title</crumbs-p>

				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`
				/>

				<crumbs-p>Content</crumbs-p>

				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`
				/>

				<crumbs-p> Loading </crumbs-p>

				<input
					type="range"
					value=`,`
					onInput=`,`
					min="0"
					max="100"
				/>

				<br/>

				<crumbs-button onClick=`,`> Simulate loading </crumbs-button>
			</div>

			<code> <pre dangerouslySetInnerHTML=`,`> </pre></code>
		<//>
	`],[`
		<`,` title="Panel">
			<div style="padding: 5rem">
				<crumbs-panel
					panel-loading=`,`
					panel-title=`,`>
					`,`
				</crumbs-panel>
			</div>

			<div>
				<crumbs-p>Title</crumbs-p>

				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`
				/>

				<crumbs-p>Content</crumbs-p>

				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`
				/>

				<crumbs-p> Loading </crumbs-p>

				<input
					type="range"
					value=`,`
					onInput=`,`
					min="0"
					max="100"
				/>

				<br/>

				<crumbs-button onClick=`,`> Simulate loading </crumbs-button>
			</div>

			<code> <pre dangerouslySetInnerHTML=`,`> </pre></code>
		<//>
	`])),rt,a,o,e,o,function(h){return s(h.originalTarget.value)},e,function(h){return r(h.originalTarget.value)},a,function(h){return c(String(h.target.value))},b,{__html:p})}var zn,ji=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};function Ai(){var t=S("Tab content"),n=t[0],e=t[1],r=S("Tab title"),i=r[0],o=r[1],s=S("Tab content 2"),u=s[0],a=s[1],c=S("Tab title 2"),f=c[0],l=c[1],d=`&lt;crumbs-tabs&gt;
	&lt;crumbs-p
		slot="title-1"&gt;
		`.concat(i,`
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot="content-1"&gt;
		`).concat(n,`
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot="title-2"&gt;
		`).concat(f,`
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot="content-2"&gt;
		`).concat(u,`
	&lt;/crumbs-p&gt;
&lt;/crumbs-panel&gt;`);return k(Vn||(Vn=ji([`
		<`,` title="Tabs">
			<crumbs-tabs>
				<crumbs-p slot="title-1"> `,` </crumbs-p>
				<crumbs-p slot="content-1"> `,` </crumbs-p>
				<crumbs-p slot="title-2"> `,` </crumbs-p>
				<crumbs-p slot="content-2"> `,` </crumbs-p>
			</crumbs-panel>

			<div>
				<crumbs-p>Title</crumbs-p>

				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`
				/>

				<crumbs-p>Content</crumbs-p>

				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`
				/>

				<crumbs-p>Title 2</crumbs-p>

				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`
				/>

				<crumbs-p>Content 2</crumbs-p>

				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`
				/>
			</div>

			<code> <pre dangerouslySetInnerHTML=`,`> </pre></code>
		<//>
	`],[`
		<`,` title="Tabs">
			<crumbs-tabs>
				<crumbs-p slot="title-1"> `,` </crumbs-p>
				<crumbs-p slot="content-1"> `,` </crumbs-p>
				<crumbs-p slot="title-2"> `,` </crumbs-p>
				<crumbs-p slot="content-2"> `,` </crumbs-p>
			</crumbs-panel>

			<div>
				<crumbs-p>Title</crumbs-p>

				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`
				/>

				<crumbs-p>Content</crumbs-p>

				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`
				/>

				<crumbs-p>Title 2</crumbs-p>

				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`
				/>

				<crumbs-p>Content 2</crumbs-p>

				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`
				/>
			</div>

			<code> <pre dangerouslySetInnerHTML=`,`> </pre></code>
		<//>
	`])),rt,i,n,f,u,i,function(p){return o(p.originalTarget.value)},n,function(p){return e(p.originalTarget.value)},f,function(p){return l(p.originalTarget.value)},u,function(p){return a(p.originalTarget.value)},{__html:d})}var Vn,Li=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};function Mi(){return k(Bn||(Bn=Li([`
		<crumbs-panel panel-title="About">
			<crumbs-tabs>
				<div slot="title-1">Crumbs ?</div>

				<div slot="content-1">
					<crumbs-p>
						Crumbs is a web component library
						that you can use to build your own website.
					</crumbs-p>

					<crumbs-p>
						<b>Why crumbs ?</b>
					</crumbs-p>

					<crumbs-p>
						It's technical successor one of my other project
						called <i>cookies-ds</i>. And it obviously needed a
						better name.
					</crumbs-p>						

					<crumbs-p>
						<b>Purpose</b>
					</crumbs-p>

					<crumbs-p>
						This library implements my own taste in design,
						and is meant for me, ME ALONE. But it's totally
						fine to be used by anyone.
					</crumbs-p>
				</div>

				<div slot="title-2">Characteristics</div>

				<div slot="content-2">
					<crumbs-p>
						<b>Customization</b>
					</crumbs-p>

					<crumbs-p>
						It's designed to be easily themed by adding your own background,
						and is optimized to work best for bright and colorful images.
					</crumbs-p>

					<crumbs-p>
						Crumbs does not provide a text font nor a color system, as it's intented
						to let you choose your own if you even need one.
					</crumbs-p>

					<crumbs-p>
						<b>Touch screens</b>
					</crumbs-p>

					<crumbs-p>
						It's intented to be easily usable on touch screens, simply by
						having big enough text and interactive elements.
					</crumbs-p>
				</div>
			</crumbs-tabs>
		</crumbs-panel>
	`],[`
		<crumbs-panel panel-title="About">
			<crumbs-tabs>
				<div slot="title-1">Crumbs ?</div>

				<div slot="content-1">
					<crumbs-p>
						Crumbs is a web component library
						that you can use to build your own website.
					</crumbs-p>

					<crumbs-p>
						<b>Why crumbs ?</b>
					</crumbs-p>

					<crumbs-p>
						It's technical successor one of my other project
						called <i>cookies-ds</i>. And it obviously needed a
						better name.
					</crumbs-p>						

					<crumbs-p>
						<b>Purpose</b>
					</crumbs-p>

					<crumbs-p>
						This library implements my own taste in design,
						and is meant for me, ME ALONE. But it's totally
						fine to be used by anyone.
					</crumbs-p>
				</div>

				<div slot="title-2">Characteristics</div>

				<div slot="content-2">
					<crumbs-p>
						<b>Customization</b>
					</crumbs-p>

					<crumbs-p>
						It's designed to be easily themed by adding your own background,
						and is optimized to work best for bright and colorful images.
					</crumbs-p>

					<crumbs-p>
						Crumbs does not provide a text font nor a color system, as it's intented
						to let you choose your own if you even need one.
					</crumbs-p>

					<crumbs-p>
						<b>Touch screens</b>
					</crumbs-p>

					<crumbs-p>
						It's intented to be easily usable on touch screens, simply by
						having big enough text and interactive elements.
					</crumbs-p>
				</div>
			</crumbs-tabs>
		</crumbs-panel>
	`])))}var Bn,jt=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};function Hi(){var t=vt(qe,Ye),n=vt(Ke,Qe),e=D(Wn||(Wn=jt([`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`],[`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`]))),r=D(qn||(qn=jt([`
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
		grid-gap: 0.5rem;

		& > div {
			display: grid;
			grid-template-columns: auto 1fr;
			place-content: center;
			text-align: center;
		}
	`],[`
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
		grid-gap: 0.5rem;

		& > div {
			display: grid;
			grid-template-columns: auto 1fr;
			place-content: center;
			text-align: center;
		}
	`])));return k(Yn||(Yn=jt([`
		<crumbs-panel panel-title="Personalization">
			<div className=`,`>
				<crumbs-p>
					Some samples to demonstrate personalization.
				</crumbs-p>

				<crumbs-tabs>	
					<crumbs-p slot="title-1"> Background </crumbs-p>

					<div slot="content-1" class=`,`>
						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Dog </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Abstract </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Leaf </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Cat </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Pug </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Crystal </crumbs-p>
						</div>
					</div>

					<crumbs-p slot="title-2"> Font </crumbs-p>

					<div slot="content-2" class=`,`>
						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Default </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Monospace </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Serif </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Sans-serif </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Cursive </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Fantasy </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> System </crumbs-p>
						</div>
					</div>
				</crumbs-tabs>
			</div>
		</crumbs-panel>
	`],[`
		<crumbs-panel panel-title="Personalization">
			<div className=`,`>
				<crumbs-p>
					Some samples to demonstrate personalization.
				</crumbs-p>

				<crumbs-tabs>	
					<crumbs-p slot="title-1"> Background </crumbs-p>

					<div slot="content-1" class=`,`>
						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Dog </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Abstract </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Leaf </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Cat </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Pug </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Crystal </crumbs-p>
						</div>
					</div>

					<crumbs-p slot="title-2"> Font </crumbs-p>

					<div slot="content-2" class=`,`>
						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Default </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Monospace </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Serif </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Sans-serif </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Cursive </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> Fantasy </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=`," onInput=",`/>
							<crumbs-p> System </crumbs-p>
						</div>
					</div>
				</crumbs-tabs>
			</div>
		</crumbs-panel>
	`])),e,r,t===1,function(){return B(1)},t===2,function(){return B(2)},t===3,function(){return B(3)},t===4,function(){return B(4)},t===5,function(){return B(5)},t===6,function(){return B(6)},r,n==="initial",function(){return F("initial")},n==="monospace",function(){return F("monospace")},n==="serif",function(){return F("serif")},n==="sans-serif",function(){return F("sans-serif")},n==="cursive",function(){return F("cursive")},n==="fantasy",function(){return F("fantasy")},n==="system-ui",function(){return F("system-ui")})}var Wn,qn,Yn,Ni=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};function Fi(){var t="&lt;crumbs-p&gt; Hello world ! &lt;/crumbs-p&gt;";return k(Gn||(Gn=Ni([`
		<crumbs-panel panel-title="Getting started">
			<crumbs-p>
				<b>Installation</b>

				<code block>
npm i crumbs-design-system
				</code>

				<b>JavaScript usage</b>

				<code block>
import "crumbs-design-system";
				</code>

				<b>HTML usage</b>

				<code
					block
					dangerouslySetInnerHTML=`,`
				>
				</code>

			</crumbs-p>
		</crumbs-panel>
	`],[`
		<crumbs-panel panel-title="Getting started">
			<crumbs-p>
				<b>Installation</b>

				<code block>
npm i crumbs-design-system
				</code>

				<b>JavaScript usage</b>

				<code block>
import "crumbs-design-system";
				</code>

				<b>HTML usage</b>

				<code
					block
					dangerouslySetInnerHTML=`,`
				>
				</code>

			</crumbs-p>
		</crumbs-panel>
	`])),{__html:t})}var Gn,Ri=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},Ui=function(t,n,e,r){function i(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function u(f){try{c(r.next(f))}catch(l){s(l)}}function a(f){try{c(r.throw(f))}catch(l){s(l)}}function c(f){f.done?o(f.value):i(f.value).then(u,a)}c((r=r.apply(t,n||[])).next())})},Di=function(t,n){var e={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(c){return function(f){return a([c,f])}}function a(c){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(e=0)),e;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,i=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(o=e.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){e.label=c[1];break}if(c[0]===6&&e.label<o[1]){e.label=o[1],o=c;break}if(o&&e.label<o[2]){e.label=o[2],e.ops.push(c);break}o[2]&&e.ops.pop(),e.trys.pop();continue}c=n.call(t,e)}catch(f){c=[6,f],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};function zi(){var t=this,n=S("Click me !"),e=n[0],r=n[1],i=S("100"),o=i[0],s=i[1],u=S(!1),a=u[0],c=u[1],f=He(function(){return Ui(t,void 0,void 0,function(){var p;return Di(this,function(m){switch(m.label){case 0:if(a)return[2];c(!0),s("0"),p=0,m.label=1;case 1:return p<=100?[4,new Promise(function(b){return setTimeout(b,10)})]:[3,4];case 2:m.sent(),s(Math.floor(p).toString()),m.label=3;case 3:return p+=.1+(100-p)/100,[3,1];case 4:return s("100"),c(!1),[2]}})})},[a]),l=function(){a||f()},d='&lt;crumbs-button progress="'.concat(o,'" &gt; ').concat(e," &lt;/crumbs-button&gt;");return k(Jn||(Jn=Ri([`
		<`,` title="Button">
			<crumbs-button progress=`," loading="," data-testid=","> ",` </crumbs-button>

			<div>
				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`/>

				<input
					type="range"
					value=`,`
					onInput=`,`
					min="0"
					max="100"/>

				<br/>

				<crumbs-button onClick=`,`>
					Simulate progress
				</crumbs-button>
			</div>

			<code> <pre dangerouslySetInnerHTML=`,`> </pre></code>
		<//>
	`],[`
		<`,` title="Button">
			<crumbs-button progress=`," loading="," data-testid=","> ",` </crumbs-button>

			<div>
				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`/>

				<input
					type="range"
					value=`,`
					onInput=`,`
					min="0"
					max="100"/>

				<br/>

				<crumbs-button onClick=`,`>
					Simulate progress
				</crumbs-button>
			</div>

			<code> <pre dangerouslySetInnerHTML=`,`> </pre></code>
		<//>
	`])),rt,o,o,o,e,e,function(p){return r(p.originalTarget.value)},o,function(p){return s(String(p.target.value))},l,{__html:d})}var Jn;function Vi(){const t=vt(qe,Ye),n=vt(Ke,Qe),e=D`
		background-image: url('bg${t}.jpg');
		background-size: cover;
		min-height: 100vh;
		position: fixed;
		min-width: 100vw;
		background-position: center;
	`,r=D`
		display: grid;
		overflow-y: scroll;
		height: 100vh;
		grid-template-columns: repeat(auto-fit, minmax(max(28rem + 6vw), 1fr));
		font-family: ${n};
	`;return k`
		<div class=${e}></div>

		<div class=${r}>
			<${Mi}><//>
			<${Fi}><//>
			<${Hi}><//>
			<${ki}><//>
			<${Ci}><//>
			<${Ei}><//>
			<${Ai}><//>
			<${zi}><//>
		</div>
	`}ii(k`<${Vi}><//>`,document.body);
