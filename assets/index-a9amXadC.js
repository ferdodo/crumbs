(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function $t(e){for(var t,n,r=arguments,o=1,i="",s="",u=[0],c=function(l){o===1&&(l||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(l?r[l]:i):o===3&&(l||i)?(u[1]=l?r[l]:i,o=2):o===2&&i==="..."&&l?u[2]=Object.assign(u[2]||{},r[l]):o===2&&i&&!l?(u[2]=u[2]||{})[i]=!0:o>=5&&(o===5?((u[2]=u[2]||{})[n]=l?i?i+r[l]:r[l]:i,o=6):(l||i)&&(u[2][n]+=l?i+r[l]:i)),i=""},a=0;a<e.length;a++){a&&(o===1&&c(),c(a));for(var p=0;p<e[a].length;p++)t=e[a][p],o===1?t==="<"?(c(),u=[u,"",null],o=3):i+=t:o===4?i==="--"&&t===">"?(o=1,i=""):i=t+i[0]:s?t===s?s="":i+=t:t==='"'||t==="'"?s=t:t===">"?(c(),o=1):o&&(t==="="?(o=5,n=i,i=""):t==="/"&&(o<5||e[a][p+1]===">")?(c(),o===3&&(u=u[0]),o=u,(u=u[0]).push(this.apply(null,o.slice(1))),o=0):t===" "||t==="	"||t===`
`||t==="\r"?(c(),o=2):i+=t),o===3&&i==="!--"&&(o=4,u=u[0])}return c(),u.length>2?u.slice(1):u[1]}function _r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function yr(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e;var t=e.default;if(typeof t=="function"){var n=function r(){var o=!1;try{o=this instanceof r}catch{}return o?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var Lt={exports:{}};/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */var Mt,he;function gr(){return he||(he=1,Mt=(function(t){var n=String.prototype.split,r=/()??/.exec("")[1]===t,o;return o=function(i,l,u){if(Object.prototype.toString.call(l)!=="[object RegExp]")return n.call(i,l,u);var c=[],a=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.extended?"x":"")+(l.sticky?"y":""),p=0,l=new RegExp(l.source,a+"g"),b,f,_,d;for(i+="",r||(b=new RegExp("^"+l.source+"$(?!\\s)",a)),u=u===t?-1>>>0:u>>>0;(f=l.exec(i))&&(_=f.index+f[0].length,!(_>p&&(c.push(i.slice(p,f.index)),!r&&f.length>1&&f[0].replace(b,function(){for(var h=1;h<arguments.length-2;h++)arguments[h]===t&&(f[h]=t)}),f.length>1&&f.index<i.length&&Array.prototype.push.apply(c,f.slice(1)),d=f[0].length,p=_,c.length>=u)));)l.lastIndex===f.index&&l.lastIndex++;return p===i.length?(d||!l.test(""))&&c.push(""):c.push(i.slice(p)),c.length>u?c.slice(0,u):c},o})()),Mt}var Ht,me;function wr(){if(me)return Ht;me=1;var e=[].indexOf;return Ht=function(t,n){if(e)return t.indexOf(n);for(var r=0;r<t.length;++r)if(t[r]===n)return r;return-1},Ht}var Nt,ve;function xr(){if(ve)return Nt;ve=1;var e=wr();Nt=t;function t(o){var i=o.classList;if(i)return i;var s={add:u,remove:c,contains:a,toggle:p,toString:l,length:0,item:b};return s;function u(d){var h=f();e(h,d)>-1||(h.push(d),_(h))}function c(d){var h=f(),v=e(h,d);v!==-1&&(h.splice(v,1),_(h))}function a(d){return e(f(),d)>-1}function p(d){return a(d)?(c(d),!1):(u(d),!0)}function l(){return o.className}function b(d){var h=f();return h[d]||null}function f(){var d=o.className;return n(d.split(" "),r)}function _(d){var h=d.length;o.className=d.join(" "),s.length=h;for(var v=0;v<d.length;v++)s[v]=d[v];delete d[h]}}function n(o,i){for(var s=[],u=0;u<o.length;u++)i(o[u])&&s.push(o[u]);return s}function r(o){return!!o}return Nt}const Sr={},Ir=Object.freeze(Object.defineProperty({__proto__:null,default:Sr},Symbol.toStringTag,{value:"Module"})),$r=yr(Ir);var _e;function Tr(){if(_e)return Lt.exports;_e=1;var e=gr(),t=xr(),n=typeof window>"u"?$r:window,r=n.document,o=n.Text;function i(){var p=[];function l(){var b=[].slice.call(arguments),f=null;function _(d){var h;function v(w){var x=e(w,/([\.#]?[^\s#.]+)/);/^\.|#/.test(x[1])&&(f=r.createElement("div")),c(x,function(C){var N=C.substring(1,C.length);C&&(f?C[0]==="."?t(f).add(N):C[0]==="#"&&f.setAttribute("id",N):f=r.createElement(C))})}if(d!=null){if(typeof d=="string")f?f.appendChild(h=r.createTextNode(d)):v(d);else if(typeof d=="number"||typeof d=="boolean"||d instanceof Date||d instanceof RegExp)f.appendChild(h=r.createTextNode(d.toString()));else if(a(d))c(d,_);else if(u(d))f.appendChild(h=d);else if(d instanceof o)f.appendChild(h=d);else if(typeof d=="object")for(var m in d)if(typeof d[m]=="function")/^on\w+/.test(m)?(function(w,x){f.addEventListener?(f.addEventListener(w.substring(2),x[w],!1),p.push(function(){f.removeEventListener(w.substring(2),x[w],!1)})):(f.attachEvent(w,x[w]),p.push(function(){f.detachEvent(w,x[w])}))})(m,d):(f[m]=d[m](),p.push(d[m](function(w){f[m]=w})));else if(m==="style")if(typeof d[m]=="string")f.style.cssText=d[m];else for(var L in d[m])(function(w,x){if(typeof x=="function")f.style.setProperty(w,x()),p.push(x(function(N){f.style.setProperty(w,N)}));else var C=d[m][w].match(/(.*)\W+!important\W*$/);C?f.style.setProperty(w,C[1],"important"):f.style.setProperty(w,d[m][w])})(L,d[m][L]);else if(m==="attrs")for(var E in d[m])f.setAttribute(E,d[m][E]);else m.substr(0,5)==="data-"?f.setAttribute(m,d[m]):f[m]=d[m];else if(typeof d=="function"){var E=d();f.appendChild(h=u(E)?E:r.createTextNode(E)),p.push(d(function(x){u(x)&&h.parentElement?(h.parentElement.replaceChild(x,h),h=x):h.textContent=x}))}}return h}for(;b.length;)_(b.shift());return f}return l.cleanup=function(){for(var b=0;b<p.length;b++)p[b]();p.length=0},l}var s=Lt.exports=i();s.context=i;function u(p){return p&&p.nodeName&&p.nodeType}function c(p,l){if(p.forEach)return p.forEach(l);for(var b=0;b<p.length;b++)l(p[b],b)}function a(p){return Object.prototype.toString.call(p)=="[object Array]"}return Lt.exports}var Er=Tr();const ct=_r(Er);function U(e){if(!e.shadowRoot)throw new Error("There is no shadow root on the element !");return e.shadowRoot}function lt(e){const t=Array.isArray(e)?e:[e],n=document.createElement("template");return n.innerHTML=t.map(r=>r.outerHTML).join(""),n}var Bt=function(e,t){return Bt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},Bt(e,t)};function G(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Bt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function Or(e,t,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function u(p){try{a(r.next(p))}catch(l){s(l)}}function c(p){try{a(r.throw(p))}catch(l){s(l)}}function a(p){p.done?i(p.value):o(p.value).then(u,c)}a((r=r.apply(e,t||[])).next())})}function fn(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=u(0),s.throw=u(1),s.return=u(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(a){return function(p){return c([a,p])}}function c(a){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(n=0)),n;)try{if(r=1,o&&(i=a[0]&2?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[a[0]&2,i.value]),a[0]){case 0:case 1:i=a;break;case 4:return n.label++,{value:a[1],done:!1};case 5:n.label++,o=a[1],a=[0];continue;case 7:a=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1],i=a;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(a);break}i[2]&&n.ops.pop(),n.trys.pop();continue}a=t.call(e,n)}catch(p){a=[6,p],o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function nt(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function B(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),o,i=[],s;try{for(;(t===void 0||t-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return i}function Y(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function et(e){return this instanceof et?(this.v=e,this):new et(e)}function kr(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(f){return function(_){return Promise.resolve(_).then(f,l)}}function u(f,_){r[f]&&(o[f]=function(d){return new Promise(function(h,v){i.push([f,d,h,v])>1||c(f,d)})},_&&(o[f]=_(o[f])))}function c(f,_){try{a(r[f](_))}catch(d){b(i[0][3],d)}}function a(f){f.value instanceof et?Promise.resolve(f.value.v).then(p,l):b(i[0][2],f)}function p(f){c("next",f)}function l(f){c("throw",f)}function b(f,_){f(_),i.shift(),i.length&&c(i[0][0],i[0][1])}}function Pr(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof nt=="function"?nt(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(u,c){s=e[i](s),o(u,c,s.done,s.value)})}}function o(i,s,u,c){Promise.resolve(c).then(function(a){i({value:a,done:u})},s)}}function y(e){return typeof e=="function"}function ne(e){var t=function(r){Error.call(r),r.stack=new Error().stack},n=e(t);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Rt=ne(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function xt(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var pt=(function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,n,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=nt(s),c=u.next();!c.done;c=u.next()){var a=c.value;a.remove(this)}}catch(d){t={error:d}}finally{try{c&&!c.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}else s.remove(this);var p=this.initialTeardown;if(y(p))try{p()}catch(d){i=d instanceof Rt?d.errors:[d]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var b=nt(l),f=b.next();!f.done;f=b.next()){var _=f.value;try{ye(_)}catch(d){i=i??[],d instanceof Rt?i=Y(Y([],B(i)),B(d.errors)):i.push(d)}}}catch(d){r={error:d}}finally{try{f&&!f.done&&(o=b.return)&&o.call(b)}finally{if(r)throw r.error}}}if(i)throw new Rt(i)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)ye(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}},e.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},e.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},e.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&xt(n,t)},e.prototype.remove=function(t){var n=this._finalizers;n&&xt(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=(function(){var t=new e;return t.closed=!0,t})(),e})(),dn=pt.EMPTY;function bn(e){return e instanceof pt||e&&"closed"in e&&y(e.remove)&&y(e.add)&&y(e.unsubscribe)}function ye(e){y(e)?e():e.unsubscribe()}var Cr={Promise:void 0},Ar={setTimeout:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,Y([e,t],B(n)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function hn(e){Ar.setTimeout(function(){throw e})}function zt(){}function vt(e){e()}var re=(function(e){G(t,e);function t(n){var r=e.call(this)||this;return r.isStopped=!1,n?(r.destination=n,bn(n)&&n.add(r)):r.destination=Mr,r}return t.create=function(n,r,o){return new qt(n,r,o)},t.prototype.next=function(n){this.isStopped||this._next(n)},t.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t})(pt),jr=(function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){dt(r)}},e.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){dt(r)}else dt(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){dt(n)}},e})(),qt=(function(e){G(t,e);function t(n,r,o){var i=e.call(this)||this,s;return y(n)||!n?s={next:n??void 0,error:r??void 0,complete:o??void 0}:s=n,i.destination=new jr(s),i}return t})(re);function dt(e){hn(e)}function Lr(e){throw e}var Mr={closed:!0,next:zt,error:Lr,complete:zt},ie=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function ft(e){return e}function Hr(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return mn(e)}function mn(e){return e.length===0?ft:e.length===1?e[0]:function(n){return e.reduce(function(r,o){return o(r)},n)}}var O=(function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(t,n,r){var o=this,i=Rr(t)?t:new qt(t,n,r);return vt(function(){var s=o,u=s.operator,c=s.source;i.add(u?u.call(i,c):c?o._subscribe(i):o._trySubscribe(i))}),i},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},e.prototype.forEach=function(t,n){var r=this;return n=ge(n),new n(function(o,i){var s=new qt({next:function(u){try{t(u)}catch(c){i(c),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},e.prototype._subscribe=function(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)},e.prototype[ie]=function(){return this},e.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return mn(t)(this)},e.prototype.toPromise=function(t){var n=this;return t=ge(t),new t(function(r,o){var i;n.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},e.create=function(t){return new e(t)},e})();function ge(e){var t;return(t=e??Cr.Promise)!==null&&t!==void 0?t:Promise}function Nr(e){return e&&y(e.next)&&y(e.error)&&y(e.complete)}function Rr(e){return e&&e instanceof re||Nr(e)&&bn(e)}function Dr(e){return y(e?.lift)}function P(e){return function(t){if(Dr(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function k(e,t,n,r,o){return new Fr(e,t,n,r,o)}var Fr=(function(e){G(t,e);function t(n,r,o,i,s,u){var c=e.call(this,n)||this;return c.onFinalize=s,c.shouldUnsubscribe=u,c._next=r?function(a){try{r(a)}catch(p){n.error(p)}}:e.prototype._next,c._error=i?function(a){try{i(a)}catch(p){n.error(p)}finally{this.unsubscribe()}}:e.prototype._error,c._complete=o?function(){try{o()}catch(a){n.error(a)}finally{this.unsubscribe()}}:e.prototype._complete,c}return t.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},t})(re),Ur=ne(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),vn=(function(e){G(t,e);function t(){var n=e.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return t.prototype.lift=function(n){var r=new we(this,this);return r.operator=n,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new Ur},t.prototype.next=function(n){var r=this;vt(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=nt(r.currentObservers),u=s.next();!u.done;u=s.next()){var c=u.value;c.next(n)}}catch(a){o={error:a}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},t.prototype.error=function(n){var r=this;vt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var o=r.observers;o.length;)o.shift().error(n)}})},t.prototype.complete=function(){var n=this;vt(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(n){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,n)},t.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},t.prototype._innerSubscribe=function(n){var r=this,o=this,i=o.hasError,s=o.isStopped,u=o.observers;return i||s?dn:(this.currentObservers=null,u.push(n),new pt(function(){r.currentObservers=null,xt(u,n)}))},t.prototype._checkFinalizedStatuses=function(n){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?n.error(i):s&&n.complete()},t.prototype.asObservable=function(){var n=new O;return n.source=this,n},t.create=function(n,r){return new we(n,r)},t})(O),we=(function(e){G(t,e);function t(n,r){var o=e.call(this)||this;return o.destination=n,o.source=r,o}return t.prototype.next=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,n)},t.prototype.error=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,n)},t.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},t.prototype._subscribe=function(n){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&o!==void 0?o:dn},t})(vn),Br={now:function(){return Date.now()}},zr=(function(e){G(t,e);function t(n,r){return e.call(this)||this}return t.prototype.schedule=function(n,r){return this},t})(pt),xe={setInterval:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setInterval.apply(void 0,Y([e,t],B(n)))},clearInterval:function(e){return clearInterval(e)},delegate:void 0},qr=(function(e){G(t,e);function t(n,r){var o=e.call(this,n,r)||this;return o.scheduler=n,o.work=r,o.pending=!1,o}return t.prototype.schedule=function(n,r){var o;if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=(o=this.id)!==null&&o!==void 0?o:this.requestAsyncId(s,this.id,r),this},t.prototype.requestAsyncId=function(n,r,o){return o===void 0&&(o=0),xe.setInterval(n.flush.bind(n,this),o)},t.prototype.recycleAsyncId=function(n,r,o){if(o===void 0&&(o=0),o!=null&&this.delay===o&&this.pending===!1)return r;r!=null&&xe.clearInterval(r)},t.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var o=this._execute(n,r);if(o)return o;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(n,r){var o=!1,i;try{this.work(n)}catch(s){o=!0,i=s||new Error("Scheduled action threw falsy error")}if(o)return this.unsubscribe(),i},t.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,o=n.scheduler,i=o.actions;this.work=this.state=this.scheduler=null,this.pending=!1,xt(i,this),r!=null&&(this.id=this.recycleAsyncId(o,r,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},t})(zr),Se=(function(){function e(t,n){n===void 0&&(n=e.now),this.schedulerActionCtor=t,this.now=n}return e.prototype.schedule=function(t,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,t).schedule(r,n)},e.now=Br.now,e})(),Wr=(function(e){G(t,e);function t(n,r){r===void 0&&(r=Se.now);var o=e.call(this,n,r)||this;return o.actions=[],o._active=!1,o}return t.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var o;this._active=!0;do if(o=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,o){for(;n=r.shift();)n.unsubscribe();throw o}},t})(Se),_n=new Wr(qr),Vr=_n,yn=new O(function(e){return e.complete()});function gn(e){return e&&y(e.schedule)}function oe(e){return e[e.length-1]}function wn(e){return y(oe(e))?e.pop():void 0}function Tt(e){return gn(oe(e))?e.pop():void 0}function Yr(e,t){return typeof oe(e)=="number"?e.pop():t}var se=(function(e){return e&&typeof e.length=="number"&&typeof e!="function"});function xn(e){return y(e?.then)}function Sn(e){return y(e[ie])}function In(e){return Symbol.asyncIterator&&y(e?.[Symbol.asyncIterator])}function $n(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Gr(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Tn=Gr();function En(e){return y(e?.[Tn])}function On(e){return kr(this,arguments,function(){var n,r,o,i;return fn(this,function(s){switch(s.label){case 0:n=e.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,et(n.read())];case 3:return r=s.sent(),o=r.value,i=r.done,i?[4,et(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,et(o)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function kn(e){return y(e?.getReader)}function z(e){if(e instanceof O)return e;if(e!=null){if(Sn(e))return Jr(e);if(se(e))return Kr(e);if(xn(e))return Qr(e);if(In(e))return Pn(e);if(En(e))return Zr(e);if(kn(e))return Xr(e)}throw $n(e)}function Jr(e){return new O(function(t){var n=e[ie]();if(y(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Kr(e){return new O(function(t){for(var n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function Qr(e){return new O(function(t){e.then(function(n){t.closed||(t.next(n),t.complete())},function(n){return t.error(n)}).then(null,hn)})}function Zr(e){return new O(function(t){var n,r;try{for(var o=nt(e),i=o.next();!i.done;i=o.next()){var s=i.value;if(t.next(s),t.closed)return}}catch(u){n={error:u}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}t.complete()})}function Pn(e){return new O(function(t){ti(e,t).catch(function(n){return t.error(n)})})}function Xr(e){return Pn(On(e))}function ti(e,t){var n,r,o,i;return Or(this,void 0,void 0,function(){var s,u;return fn(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),n=Pr(e),c.label=1;case 1:return[4,n.next()];case 2:if(r=c.sent(),!!r.done)return[3,4];if(s=r.value,t.next(s),t.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return u=c.sent(),o={error:u},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(i=n.return)?[4,i.call(n)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function W(e,t,n,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function Cn(e,t){return t===void 0&&(t=0),P(function(n,r){n.subscribe(k(r,function(o){return W(r,e,function(){return r.next(o)},t)},function(){return W(r,e,function(){return r.complete()},t)},function(o){return W(r,e,function(){return r.error(o)},t)}))})}function An(e,t){return t===void 0&&(t=0),P(function(n,r){r.add(e.schedule(function(){return n.subscribe(r)},t))})}function ei(e,t){return z(e).pipe(An(t),Cn(t))}function ni(e,t){return z(e).pipe(An(t),Cn(t))}function ri(e,t){return new O(function(n){var r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function ii(e,t){return new O(function(n){var r;return W(n,t,function(){r=e[Tn](),W(n,t,function(){var o,i,s;try{o=r.next(),i=o.value,s=o.done}catch(u){n.error(u);return}s?n.complete():n.next(i)},0,!0)}),function(){return y(r?.return)&&r.return()}})}function jn(e,t){if(!e)throw new Error("Iterable cannot be null");return new O(function(n){W(n,t,function(){var r=e[Symbol.asyncIterator]();W(n,t,function(){r.next().then(function(o){o.done?n.complete():n.next(o.value)})},0,!0)})})}function oi(e,t){return jn(On(e),t)}function si(e,t){if(e!=null){if(Sn(e))return ei(e,t);if(se(e))return ri(e,t);if(xn(e))return ni(e,t);if(In(e))return jn(e,t);if(En(e))return ii(e,t);if(kn(e))return oi(e,t)}throw $n(e)}function Et(e,t){return t?si(e,t):z(e)}var Ln=ne(function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}});function ui(e){return e instanceof Date&&!isNaN(e)}function $(e,t){return P(function(n,r){var o=0;n.subscribe(k(r,function(i){r.next(e.call(t,i,o++))}))})}var ai=Array.isArray;function ci(e,t){return ai(t)?e.apply(void 0,Y([],B(t))):e(t)}function ue(e){return $(function(t){return ci(e,t)})}var li=Array.isArray,pi=Object.getPrototypeOf,fi=Object.prototype,di=Object.keys;function bi(e){if(e.length===1){var t=e[0];if(li(t))return{args:t,keys:null};if(hi(t)){var n=di(t);return{args:n.map(function(r){return t[r]}),keys:n}}}return{args:e,keys:null}}function hi(e){return e&&typeof e=="object"&&pi(e)===fi}function mi(e,t){return e.reduce(function(n,r,o){return n[r]=t[o],n},{})}function vi(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Tt(e),r=wn(e),o=bi(e),i=o.args,s=o.keys;if(i.length===0)return Et([],n);var u=new O(Mn(i,n,s?function(c){return mi(s,c)}:ft));return r?u.pipe(ue(r)):u}function Mn(e,t,n){return n===void 0&&(n=ft),function(r){Ie(t,function(){for(var o=e.length,i=new Array(o),s=o,u=o,c=function(p){Ie(t,function(){var l=Et(e[p],t),b=!1;l.subscribe(k(r,function(f){i[p]=f,b||(b=!0,u--),u||r.next(n(i.slice()))},function(){--s||r.complete()}))},r)},a=0;a<o;a++)c(a)},r)}}function Ie(e,t,n){e?W(n,e,t):t()}function _i(e,t,n,r,o,i,s,u){var c=[],a=0,p=0,l=!1,b=function(){l&&!c.length&&!a&&t.complete()},f=function(d){return a<r?_(d):c.push(d)},_=function(d){a++;var h=!1;z(n(d,p++)).subscribe(k(t,function(v){t.next(v)},function(){h=!0},void 0,function(){if(h)try{a--;for(var v=function(){var m=c.shift();s||_(m)};c.length&&a<r;)v();b()}catch(m){t.error(m)}}))};return e.subscribe(k(t,f,function(){l=!0,b()})),function(){}}function ae(e,t,n){return n===void 0&&(n=1/0),y(t)?ae(function(r,o){return $(function(i,s){return t(r,i,o,s)})(z(e(r,o)))},n):(typeof t=="number"&&(n=t),P(function(r,o){return _i(r,o,e,n)}))}function Hn(e){return e===void 0&&(e=1/0),ae(ft,e)}function yi(){return Hn(1)}function $e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return yi()(Et(e,Tt(e)))}var gi=["addListener","removeListener"],wi=["addEventListener","removeEventListener"],xi=["on","off"];function V(e,t,n,r){if(y(n)&&(r=n,n=void 0),r)return V(e,t,n).pipe(ue(r));var o=B($i(e)?wi.map(function(u){return function(c){return e[u](t,c,n)}}):Si(e)?gi.map(Te(e,t)):Ii(e)?xi.map(Te(e,t)):[],2),i=o[0],s=o[1];if(!i&&se(e))return ae(function(u){return V(u,t,n)})(z(e));if(!i)throw new TypeError("Invalid event target");return new O(function(u){var c=function(){for(var a=[],p=0;p<arguments.length;p++)a[p]=arguments[p];return u.next(1<a.length?a:a[0])};return i(c),function(){return s(c)}})}function Te(e,t){return function(n){return function(r){return e[n](t,r)}}}function Si(e){return y(e.addListener)&&y(e.removeListener)}function Ii(e){return y(e.on)&&y(e.off)}function $i(e){return y(e.addEventListener)&&y(e.removeEventListener)}function Nn(e,t,n){e===void 0&&(e=0),n===void 0&&(n=Vr);var r=-1;return t!=null&&(gn(t)?n=t:r=t),new O(function(o){var i=ui(e)?+e-n.now():e;i<0&&(i=0);var s=0;return n.schedule(function(){o.closed||(o.next(s++),0<=r?this.schedule(void 0,r):o.complete())},i)})}function Ti(e,t){return t===void 0&&(t=_n),Nn(e,e,t)}function Ei(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Tt(e),r=Yr(e,1/0),o=e;return o.length?o.length===1?z(o[0]):Hn(r)(Et(o,n)):yn}var Oi=Array.isArray;function ki(e){return e.length===1&&Oi(e[0])?e[0]:e}function q(e,t){return P(function(n,r){var o=0;n.subscribe(k(r,function(i){return e.call(t,i,o++)&&r.next(i)}))})}function Rn(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=wn(e);return n?Hr(Rn.apply(void 0,Y([],B(e))),ue(n)):P(function(r,o){Mn(Y([r],B(ki(e))))(o)})}function bt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Rn.apply(void 0,Y([],B(e)))}function Pi(e){return P(function(t,n){var r=!1;t.subscribe(k(n,function(o){r=!0,n.next(o)},function(){r||n.next(e),n.complete()}))})}function Ci(e){return e<=0?function(){return yn}:P(function(t,n){var r=0;t.subscribe(k(n,function(o){++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function Ee(e){return $(function(){return e})}function Ai(e){return e===void 0&&(e=ji),P(function(t,n){var r=!1;t.subscribe(k(n,function(o){r=!0,n.next(o)},function(){return r?n.complete():n.error(e())}))})}function ji(){return new Ln}function Li(e,t){var n=arguments.length>=2;return function(r){return r.pipe(ft,Ci(1),n?Pi(t):Ai(function(){return new Ln}))}}function Oe(){return P(function(e,t){var n,r=!1;e.subscribe(k(t,function(o){var i=n;n=o,r&&t.next([i,o]),r=!0}))})}function H(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Tt(e);return P(function(r,o){(n?$e(e,r,n):$e(e,r)).subscribe(o)})}function Mi(e,t){return P(function(n,r){var o=null,i=0,s=!1,u=function(){return s&&!o&&r.complete()};n.subscribe(k(r,function(c){o?.unsubscribe();var a=0,p=i++;z(e(c,p)).subscribe(o=k(r,function(l){return r.next(t?t(c,l,p,a++):l)},function(){o=null,u()}))},function(){s=!0,u()}))})}function Hi(e){return P(function(t,n){z(e).subscribe(k(n,function(){return n.complete()},zt)),!n.closed&&t.subscribe(n)})}function Dn(){return!document.hidden}function Ni(){const e=V(document,"visibilitychange"),t=V(window,"focus").pipe(Ee(!0)),n=V(window,"blur").pipe(Ee(!1)),r=Ei(t,n);return vi(e,r).pipe($(([,o])=>Dn()&&o),q(o=>o),Li())}const Ri=V(document,"mouseover");async function Di(){Dn()||await Promise.race([Ni().toPromise(),Ri.toPromise()])}async function Fi(){await new Promise(e=>setTimeout(e,400)),await Di(),await new Promise(e=>setTimeout(e,400))}const Ui=Fi();function A(e,t){const n=e.querySelector(t);if(!n)throw new Error(`Failed to find element ${t} !`);return n}const Bi=$t.bind(ct),zi="crumbs-p",qi=lt(Bi`
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
`);let Wi=class extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const t=U(this),n=qi.content.cloneNode(!0);t.appendChild(n)}};customElements.define(zi,Wi);const Vi=$t.bind(ct),Yi="crumbs-panel",Gi=lt(Vi`
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
`);class Ji extends HTMLElement{contentTimeoutElapsed=!1;contentLoaded=!1;connected=!1;loading="100";scrolled=!1;scrolledSubscription=null;static get observedAttributes(){return["panel-loading","panel-title"]}async connectedCallback(){this.attachShadow({mode:"open"}),await Ui;const t=U(this),n=Gi.content.cloneNode(!0);t.appendChild(n);const r=this.getAttribute("panel-loading");r!==null&&ke(r)&&(this.loading=r),setTimeout(()=>{const o=A(t,"#panel-container");o.style.gridTemplateColumns="1rem 1fr 1rem",o.style.gridTemplateRows="1rem 1fr 1rem";const i=A(t,"#panel");i.style.backgroundColor="#ffffff40",this.scrolledSubscription=V(i,"scroll").pipe($(s=>s.target.scrollTop),$(s=>s!==0)).subscribe(s=>{this.scrolled=s,this.render()}),this.render()},10),setTimeout(()=>{this.contentTimeoutElapsed=!0,this.render()},400),this.connected=!0,this.render()}render(){const t=U(this),n=A(t,"#panel-content"),r=A(t,"#panel-loading"),o=A(t,"#panel"),i=A(t,"#panel-title-content");this.contentTimeoutElapsed&&Ki(this.loading)?(n.style.visibility="visible",n.style.opacity="1",o.style.overflow="auto"):(n.style.visibility="collapse",n.style.opacity="0",o.style.overflow="hidden"),r.style.width=`${this.loading}%`;const s=A(t,"#panel-title");this.loading==="100"&&this.getAttribute("panel-title")&&!this.scrolled?setTimeout(()=>{s.style.opacity="1",i.innerHTML=this.getAttribute("panel-title")||"",n.style.paddingTop="2.5rem"},10):(n.style.paddingTop="inherit",s.style.opacity="0")}attributeChangedCallback(){if(this.shadowRoot&&this.connected){const t=this.getAttribute("panel-loading");t!==null&&ke(t)?this.loading=t:t===null&&(this.loading="100"),this.render()}}disconnectedCallback(){this.scrolledSubscription?.unsubscribe()}}function ke(e){const t=Number(e),n=Math.floor(t);return n===t&&Number.isInteger(n)&&Number.isFinite(n)&&n<=100&&n>=0}function Ki(e){return e===null||e==="100"}customElements.define(Yi,Ji);const Qi=$t.bind(ct),Zi="crumbs-input",Xi=lt(Qi`
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
`);class to extends HTMLElement{static get observedAttributes(){return["value"]}async connectedCallback(){this.attachShadow({mode:"open"});const t=U(this),n=Xi.content.cloneNode(!0);t.appendChild(n);const r=A(t,"input"),o=this.getAttribute("value");r instanceof HTMLInputElement&&o&&(r.value=o)}attributeChangedCallback(t,n,r){if(t==="value"&&this.shadowRoot){const o=U(this),i=A(o,"input");i instanceof HTMLInputElement&&(i.value=r)}}}customElements.define(Zi,to);const Wt=$t.bind(ct),eo="crumbs-tabs",no=lt(Wt`
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
`);class ro extends HTMLElement{selected=1;subscriptions=[];async connectedCallback(){this.attachShadow({mode:"open"});const t=U(this),n=no.content.cloneNode(!0);t.appendChild(n);const r=this.getAttribute("selected");this.selected=Number.parseInt(r||"1",10);const o=t.querySelector("#tabs"),i=t.querySelector("#content");if(!o)throw new Error("Tabs not found");if(!i)throw new Error("Content not found");for(const s of{[Symbol.iterator]:()=>this.getSlots()}){if(s.startsWith("content-")){const u=Wt`<div id=${`${s}`}> <slot name=${s}></slot> </div>`;u instanceof Element&&i.appendChild(u)}if(s.startsWith("title-")){const u=Wt`<div id=${s}> <crumbs-p> <slot name=${s}></slot> </crumbs-p> </div>`;u instanceof Element&&o.appendChild(u)}}this.subscriptions=[...o.children].map((s,u)=>V(s,"click").subscribe(()=>{const c=s.id.replace("title-","content-"),a=t.querySelector(`#${c}`);a instanceof HTMLElement&&i instanceof HTMLElement&&a.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.selected=u+1,this.render()})),this.render()}render(){const n=U(this).querySelector("#tabs");if(!n)throw new Error("Tabs not found");[...n.children].forEach((r,o)=>{o+1===this.selected?r instanceof HTMLElement&&r.classList.add("selected-title"):r instanceof HTMLElement&&r.classList.remove("selected-title")})}disconnectedCallback(){for(const t of this.subscriptions)t.unsubscribe()}*getSlots(){for(const t of Array.from(this.children)){const n=t.getAttribute("slot");n&&(yield n)}}}customElements.define(eo,ro);var Fn=function(e,t,n,r){var o;t[0]=0;for(var i=1;i<t.length;i++){var s=t[i++],u=t[i]?(t[0]|=s?1:2,n[t[i++]]):t[++i];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[t[++i]]=u:s===6?r[1][t[++i]]+=u+"":s?(o=e.apply(u,Fn(e,u,n,["",null])),r.push(o),u[0]?t[0]|=2:(t[i-2]=0,t[i]=o)):r.push(u)}return r},Pe=new Map;function io(e){var t=Pe.get(this);return t||(t=new Map,Pe.set(this,t)),(t=Fn(this,t.get(e)||(t.set(e,t=(function(n){for(var r,o,i=1,s="",u="",c=[0],a=function(b){i===1&&(b||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,b,s):i===3&&(b||s)?(c.push(3,b,s),i=2):i===2&&s==="..."&&b?c.push(4,b,0):i===2&&s&&!b?c.push(5,0,!0,s):i>=5&&((s||!b&&i===5)&&(c.push(i,0,s,o),i=6),b&&(c.push(i,b,0,o),i=6)),s=""},p=0;p<n.length;p++){p&&(i===1&&a(),a(p));for(var l=0;l<n[p].length;l++)r=n[p][l],i===1?r==="<"?(a(),c=[c],i=3):s+=r:i===4?s==="--"&&r===">"?(i=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(a(),i=1):i&&(r==="="?(i=5,o=s,s=""):r==="/"&&(i<5||n[p][l+1]===">")?(a(),i===3&&(c=c[0]),i=c,(c=c[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(a(),i=2):s+=r),i===3&&s==="!--"&&(i=4,c=c[0])}return a(),c})(e)),t),arguments,[])).length>1?t:t[0]}function oo(){return e=>e.pipe($(([t,n,r,o])=>!r||n!==100&&n!==0&&o!==null?!1:r<Number(o)||t))}function so(){return e=>e.pipe($(([t,n,r])=>t||n||r>0&&r<100))}function Ce(){return 1e3}function uo(){return e=>e.pipe($(([t,n,r,o])=>{if(Number(r)-Ce()>n){const s=Number(r)-Ce(),u=Math.max(s,0),c=Math.ceil(n/u*100);return Math.min(100,c)}return o?100:t||0}))}const ao=io.bind(ct),co="crumbs-button";class lo extends HTMLElement{_renderSubscription=null;_clickSubscription=null;_attributeChanges$=new vn;_parsedProgress$;_parsedDisabled$;_parsedIndeterminateProgress$;_parsedIndeterminateDurationMs$;_indeterminedLoadingTime$;_loading$;_activeIndeterminateProgress$;_disabled$;_loadingBarTransitionEnabled$;constructor(){super(),this._parsedProgress$=this._attributeChanges$.pipe(q(([n])=>n==="progress"),$(([n,r])=>r),H(this.getAttribute("progress")),$(n=>n===null?null:Number(n)),q(n=>n===null||Number.isInteger(n)&&Number.isFinite(n)&&n<=100&&n>=0)),this._parsedDisabled$=this._attributeChanges$.pipe(q(([n])=>n==="disabled"),$(([n,r])=>r),H(this.getAttribute("disabled")),$(n=>n!==null&&n!=="false")),this._parsedIndeterminateProgress$=this._attributeChanges$.pipe(q(([n])=>n==="indeterminate-progress"),$(([n,r])=>r),H(this.getAttribute("indeterminate-progress")),$(n=>n!==null&&n!=="false")),this._parsedIndeterminateDurationMs$=this._attributeChanges$.pipe(q(([n])=>n==="indeterminate-duration-ms"),$(([n,r])=>r),H(this.getAttribute("indeterminate-duration-ms")),$(n=>n===null?null:Number(n)),q(n=>n===null||Number.isInteger(n)&&Number.isFinite(n)&&n>=0));const t=50;this._indeterminedLoadingTime$=this._parsedIndeterminateProgress$.pipe(H(!1),Oe(),q(([n,r])=>r&&!n),Mi(()=>Ti(t).pipe(Hi(Nn(2e4*t)))),$(n=>n*t),H(0)),this._loading$=this._parsedProgress$.pipe(bt(this._indeterminedLoadingTime$,this._parsedIndeterminateDurationMs$,this._parsedIndeterminateProgress$),uo(),H(0)),this._activeIndeterminateProgress$=this._parsedIndeterminateProgress$.pipe(bt(this._loading$,this._indeterminedLoadingTime$,this._parsedIndeterminateDurationMs$),oo(),H(!1)),this._disabled$=this._parsedDisabled$.pipe(bt(this._activeIndeterminateProgress$,this._loading$),so(),H(!1)),this._loadingBarTransitionEnabled$=this._loading$.pipe(Oe(),$(([n,r])=>r>=n),H(!1))}static get observedAttributes(){return["progress","disabled","indeterminate-progress","indeterminate-duration-ms"]}async connectedCallback(){this.attachShadow({mode:"open"}),U(this).appendChild(po.content.cloneNode(!0)),this._renderSubscription=this._disabled$.pipe(bt(this._loading$,this._activeIndeterminateProgress$,this._loadingBarTransitionEnabled$)).subscribe(n=>{this.render(...n)}),this._attributeChanges$.next(["disabled",this.getAttribute("disabled")]),this._attributeChanges$.next(["progress",this.getAttribute("progress")]),this._attributeChanges$.next(["indeterminate-progress",this.getAttribute("indeterminate-progress")]),this._attributeChanges$.next(["indeterminate-duration-ms",this.getAttribute("indeterminate-duration-ms")])}attributeChangedCallback(t){this._attributeChanges$.next([t,this.getAttribute(t)])}render(t,n,r,o){if(!this.shadowRoot)return;const i=U(this),s=A(i,"#progress"),u=A(i,"button"),c=A(i,"progress");u instanceof HTMLButtonElement&&(u.disabled=t),r?(u.classList.remove("indeterminate-loading-end"),u.classList.add("indeterminate-loading")):(u.classList.add("indeterminate-loading-end"),setTimeout(()=>{u.classList.remove("indeterminate-loading")},500)),o?s.classList.add("transition"):s.classList.remove("transition"),s.style.width=`${n}%`,c instanceof HTMLProgressElement&&(c.value=n)}disconnectedCallback(){this._clickSubscription?.unsubscribe(),this._renderSubscription?.unsubscribe()}}customElements.define(co,lo);const po=lt(ao`
	<style>
		:host {
			display: inline-block;
		}

		/* ❤️ https://codepen.io/yuhomyan/pen/OJMejWJ */

		.custom-btn {
			border: none;
			font-family: ds-notes-sans;
			font-size: 1rem;
			display: grid;
			place-content: center;
			border-radius: 5px;
			padding: 10px 25px;
			font-weight: 500;
			background: transparent;
			transition: all 0.3s ease;
			position: relative;
			box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
			7px 7px 20px 0px rgba(0,0,0,.1),
			4px 4px 5px 0px rgba(0,0,0,.1);
			outline: none;
			grid-area: 2 / 2 / 3 / 3;
			user-select: none;
		}

		.indeterminate-loading {
			/*animation: transparency-fade 1.5s ease-in-out infinite;*/
		}

		.indeterminate-loading-end {
			animation-iteration-count: 1;
		}	

		@keyframes transparency-fade {
			0% {
				background-color: transparent;
			}
			50% {
				background-color: rgba(255, 255, 255, 0.15);
			}
			100% {
				background-color: transparent;
			}
		}

		@media screen and (min-width: 800px) {
			.custom-btn {
				font-size: 1.4rem;
			}
		}

		.btn-16 {
			border: none;
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
		}
		.btn-16:hover:after {
			left: auto;
			right: 0;
			width: 100%;
		}

		.btn-16:hover:after:disabled {
			left: initial;
			right: initial;
			width: inherit;
		}

		.btn-16:active {
			top: 2px;
		}

		.button-container {
			display: grid;
			grid-template-columns: 0.4rem 1fr 0.4rem;
			grid-template-rows: 0.4rem 1fr 0.4rem;
			animation: fadeIn 0.3s ease-in-out;
			animation-delay: 0.3s;
			opacity: 0;
			animation-fill-mode: forwards;
		}

		@keyframes fadeIn {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}

		.progress-container {
			grid-area: 2 / 2 / 3 / 3;
		}

		#progress {
			background-color: #fff3;
			height: 100%;
			width: 0%;
			border-radius: 5px;
		}

		progress {
			visibility: hidden;
		}

		#progress.transition {
			transition: width 0.3s ease-in-out;
		}

		button {
			background-color: transparent;
			padding: 0;
			border: none;
		}
	</style>

	<div className="button-container">
		<button className="custom-btn btn-16">
			<slot></slot>
		</button>
		<div className="progress-container">
			<div id="progress"></div>
		</div>
		<progress></progress>
	</div>
`);let fo={data:""},bo=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||fo},ho=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,mo=/\/\*[^]*?\*\/|  +/g,Ae=/\n+/g,K=(e,t)=>{let n="",r="",o="";for(let i in e){let s=e[i];i[0]=="@"?i[1]=="i"?n=i+" "+s+";":r+=i[1]=="f"?K(s,i):i+"{"+K(s,i[1]=="k"?"":t)+"}":typeof s=="object"?r+=K(s,t?t.replace(/([^,])+/g,u=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,u):u?u+" "+c:c)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=K.p?K.p(i,s):i+":"+s+";")}return n+(t&&o?t+"{"+o+"}":o)+r},R={},Un=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Un(e[n]);return t}return e},vo=(e,t,n,r,o)=>{let i=Un(e),s=R[i]||(R[i]=(c=>{let a=0,p=11;for(;a<c.length;)p=101*p+c.charCodeAt(a++)>>>0;return"go"+p})(i));if(!R[s]){let c=i!==e?e:(a=>{let p,l,b=[{}];for(;p=ho.exec(a.replace(mo,""));)p[4]?b.shift():p[3]?(l=p[3].replace(Ae," ").trim(),b.unshift(b[0][l]=b[0][l]||{})):b[0][p[1]]=p[2].replace(Ae," ").trim();return b[0]})(e);R[s]=K(o?{["@keyframes "+s]:c}:c,n?"":"."+s)}let u=n&&R.g?R.g:null;return n&&(R.g=R[s]),((c,a,p,l)=>{l?a.data=a.data.replace(l,c):a.data.indexOf(c)===-1&&(a.data=p?c+a.data:a.data+c)})(R[s],t,r,u),s},_o=(e,t,n)=>e.reduce((r,o,i)=>{let s=t[i];if(s&&s.call){let u=s(n),c=u&&u.props&&u.props.className||/^go/.test(u)&&u;s=c?"."+c:u&&typeof u=="object"?u.props?"":K(u,""):u===!1?"":u}return r+o+(s??"")},"");function Z(e){let t=this||{},n=e.call?e(t.p):e;return vo(n.unshift?n.raw?_o(n,[].slice.call(arguments,1),t.p):n.reduce((r,o)=>Object.assign(r,o&&o.call?o(t.p):o),{}):n,bo(t.target),t.g,t.o,t.k)}Z.bind({g:1});Z.bind({k:1});var Ot,g,Bn,Q,je,zn,qn,Wn,ce,Vt,Yt,st={},Vn=[],yo=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,kt=Array.isArray;function D(e,t){for(var n in t)e[n]=t[n];return e}function le(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Yn(e,t,n){var r,o,i,s={};for(i in t)i=="key"?r=t[i]:i=="ref"?o=t[i]:s[i]=t[i];if(arguments.length>2&&(s.children=arguments.length>3?Ot.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)s[i]===void 0&&(s[i]=e.defaultProps[i]);return _t(e,s,r,o,null)}function _t(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++Bn,__i:-1,__u:0};return o==null&&g.vnode!=null&&g.vnode(i),i}function Pt(e){return e.children}function yt(e,t){this.props=e,this.context=t}function rt(e,t){if(t==null)return e.__?rt(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?rt(e):null}function Gn(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Gn(e)}}function Le(e){(!e.__d&&(e.__d=!0)&&Q.push(e)&&!St.__r++||je!=g.debounceRendering)&&((je=g.debounceRendering)||zn)(St)}function St(){for(var e,t,n,r,o,i,s,u=1;Q.length;)Q.length>u&&Q.sort(qn),e=Q.shift(),u=Q.length,e.__d&&(n=void 0,r=void 0,o=(r=(t=e).__v).__e,i=[],s=[],t.__P&&((n=D({},r)).__v=r.__v+1,g.vnode&&g.vnode(n),pe(t.__P,n,r,t.__n,t.__P.namespaceURI,32&r.__u?[o]:null,i,o??rt(r),!!(32&r.__u),s),n.__v=r.__v,n.__.__k[n.__i]=n,Qn(i,n,s),r.__e=r.__=null,n.__e!=o&&Gn(n)));St.__r=0}function Jn(e,t,n,r,o,i,s,u,c,a,p){var l,b,f,_,d,h,v,m=r&&r.__k||Vn,L=t.length;for(c=go(n,t,m,c,L),l=0;l<L;l++)(f=n.__k[l])!=null&&(b=f.__i==-1?st:m[f.__i]||st,f.__i=l,h=pe(e,f,b,o,i,s,u,c,a,p),_=f.__e,f.ref&&b.ref!=f.ref&&(b.ref&&fe(b.ref,null,f),p.push(f.ref,f.__c||_,f)),d==null&&_!=null&&(d=_),(v=!!(4&f.__u))||b.__k===f.__k?c=Kn(f,c,e,v):typeof f.type=="function"&&h!==void 0?c=h:_&&(c=_.nextSibling),f.__u&=-7);return n.__e=d,c}function go(e,t,n,r,o){var i,s,u,c,a,p=n.length,l=p,b=0;for(e.__k=new Array(o),i=0;i<o;i++)(s=t[i])!=null&&typeof s!="boolean"&&typeof s!="function"?(c=i+b,(s=e.__k[i]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?_t(null,s,null,null,null):kt(s)?_t(Pt,{children:s},null,null,null):s.constructor==null&&s.__b>0?_t(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=e,s.__b=e.__b+1,u=null,(a=s.__i=wo(s,n,c,l))!=-1&&(l--,(u=n[a])&&(u.__u|=2)),u==null||u.__v==null?(a==-1&&(o>p?b--:o<p&&b++),typeof s.type!="function"&&(s.__u|=4)):a!=c&&(a==c-1?b--:a==c+1?b++:(a>c?b--:b++,s.__u|=4))):e.__k[i]=null;if(l)for(i=0;i<p;i++)(u=n[i])!=null&&(2&u.__u)==0&&(u.__e==r&&(r=rt(u)),Xn(u,u));return r}function Kn(e,t,n,r){var o,i;if(typeof e.type=="function"){for(o=e.__k,i=0;o&&i<o.length;i++)o[i]&&(o[i].__=e,t=Kn(o[i],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=rt(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function wo(e,t,n,r){var o,i,s,u=e.key,c=e.type,a=t[n],p=a!=null&&(2&a.__u)==0;if(a===null&&e.key==null||p&&u==a.key&&c==a.type)return n;if(r>(p?1:0)){for(o=n-1,i=n+1;o>=0||i<t.length;)if((a=t[s=o>=0?o--:i++])!=null&&(2&a.__u)==0&&u==a.key&&c==a.type)return s}return-1}function Me(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||yo.test(t)?n:n+"px"}function ht(e,t,n,r,o){var i,s;t:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Me(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||Me(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")i=t!=(t=t.replace(Wn,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r?n.u=r.u:(n.u=ce,e.addEventListener(t,i?Yt:Vt,i)):e.removeEventListener(t,i?Yt:Vt,i);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function He(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=ce++;else if(t.t<n.u)return;return n(g.event?g.event(t):t)}}}function pe(e,t,n,r,o,i,s,u,c,a){var p,l,b,f,_,d,h,v,m,L,E,w,x,C,N,ot,jt,M=t.type;if(t.constructor!=null)return null;128&n.__u&&(c=!!(32&n.__u),i=[u=t.__e=n.__e]),(p=g.__b)&&p(t);t:if(typeof M=="function")try{if(v=t.props,m="prototype"in M&&M.prototype.render,L=(p=M.contextType)&&r[p.__c],E=p?L?L.props.value:p.__:r,n.__c?h=(l=t.__c=n.__c).__=l.__E:(m?t.__c=l=new M(v,E):(t.__c=l=new yt(v,E),l.constructor=M,l.render=So),L&&L.sub(l),l.props=v,l.state||(l.state={}),l.context=E,l.__n=r,b=l.__d=!0,l.__h=[],l._sb=[]),m&&l.__s==null&&(l.__s=l.state),m&&M.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=D({},l.__s)),D(l.__s,M.getDerivedStateFromProps(v,l.__s))),f=l.props,_=l.state,l.__v=t,b)m&&M.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),m&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(m&&M.getDerivedStateFromProps==null&&v!==f&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,E),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,E)===!1||t.__v==n.__v){for(t.__v!=n.__v&&(l.props=v,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(X){X&&(X.__=t)}),w=0;w<l._sb.length;w++)l.__h.push(l._sb[w]);l._sb=[],l.__h.length&&s.push(l);break t}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,E),m&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(f,_,d)})}if(l.context=E,l.props=v,l.__P=e,l.__e=!1,x=g.__r,C=0,m){for(l.state=l.__s,l.__d=!1,x&&x(t),p=l.render(l.props,l.state,l.context),N=0;N<l._sb.length;N++)l.__h.push(l._sb[N]);l._sb=[]}else do l.__d=!1,x&&x(t),p=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++C<25);l.state=l.__s,l.getChildContext!=null&&(r=D(D({},r),l.getChildContext())),m&&!b&&l.getSnapshotBeforeUpdate!=null&&(d=l.getSnapshotBeforeUpdate(f,_)),ot=p,p!=null&&p.type===Pt&&p.key==null&&(ot=Zn(p.props.children)),u=Jn(e,kt(ot)?ot:[ot],t,n,r,o,i,s,u,c,a),l.base=t.__e,t.__u&=-161,l.__h.length&&s.push(l),h&&(l.__E=l.__=null)}catch(X){if(t.__v=null,c||i!=null)if(X.then){for(t.__u|=c?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;i[i.indexOf(u)]=null,t.__e=u}else{for(jt=i.length;jt--;)le(i[jt]);Gt(t)}else t.__e=n.__e,t.__k=n.__k,X.then||Gt(t);g.__e(X,t,n)}else i==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):u=t.__e=xo(n.__e,t,n,r,o,i,s,c,a);return(p=g.diffed)&&p(t),128&t.__u?void 0:u}function Gt(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Gt)}function Qn(e,t,n){for(var r=0;r<n.length;r++)fe(n[r],n[++r],n[++r]);g.__c&&g.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){g.__e(i,o.__v)}})}function Zn(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:kt(e)?e.map(Zn):D({},e)}function xo(e,t,n,r,o,i,s,u,c){var a,p,l,b,f,_,d,h=n.props,v=t.props,m=t.type;if(m=="svg"?o="http://www.w3.org/2000/svg":m=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(a=0;a<i.length;a++)if((f=i[a])&&"setAttribute"in f==!!m&&(m?f.localName==m:f.nodeType==3)){e=f,i[a]=null;break}}if(e==null){if(m==null)return document.createTextNode(v);e=document.createElementNS(o,m,v.is&&v),u&&(g.__m&&g.__m(t,i),u=!1),i=null}if(m==null)h===v||u&&e.data==v||(e.data=v);else{if(i=i&&Ot.call(e.childNodes),h=n.props||st,!u&&i!=null)for(h={},a=0;a<e.attributes.length;a++)h[(f=e.attributes[a]).name]=f.value;for(a in h)if(f=h[a],a!="children"){if(a=="dangerouslySetInnerHTML")l=f;else if(!(a in v)){if(a=="value"&&"defaultValue"in v||a=="checked"&&"defaultChecked"in v)continue;ht(e,a,null,f,o)}}for(a in v)f=v[a],a=="children"?b=f:a=="dangerouslySetInnerHTML"?p=f:a=="value"?_=f:a=="checked"?d=f:u&&typeof f!="function"||h[a]===f||ht(e,a,f,h[a],o);if(p)u||l&&(p.__html==l.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(l&&(e.innerHTML=""),Jn(t.type=="template"?e.content:e,kt(b)?b:[b],t,n,r,m=="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,s,i?i[0]:n.__k&&rt(n,0),u,c),i!=null)for(a=i.length;a--;)le(i[a]);u||(a="value",m=="progress"&&_==null?e.removeAttribute("value"):_!=null&&(_!==e[a]||m=="progress"&&!_||m=="option"&&_!=h[a])&&ht(e,a,_,h[a],o),a="checked",d!=null&&d!=e[a]&&ht(e,a,d,h[a],o))}return e}function fe(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(o){g.__e(o,n)}}function Xn(e,t,n){var r,o;if(g.unmount&&g.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||fe(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){g.__e(i,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&Xn(r[o],t,n||typeof e.type!="function");n||le(e.__e),e.__c=e.__=e.__e=void 0}function So(e,t,n){return this.constructor(e,n)}function Io(e,t,n){var r,o,i,s;t==document&&(t=document.documentElement),g.__&&g.__(e,t),o=(r=!1)?null:t.__k,i=[],s=[],pe(t,e=t.__k=Yn(Pt,null,[e]),o||st,st,t.namespaceURI,o?null:t.firstChild?Ot.call(t.childNodes):null,i,o?o.__e:t.firstChild,r,s),Qn(i,e,s)}Ot=Vn.slice,g={__e:function(e,t,n,r){for(var o,i,s;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),s=o.__d),s)return o.__E=o}catch(u){e=u}throw e}},Bn=0,yt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=D({},this.state),typeof e=="function"&&(e=e(D({},n),this.props)),e&&D(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Le(this))},yt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Le(this))},yt.prototype.render=Pt,Q=[],zn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,qn=function(e,t){return e.__v.__b-t.__v.__b},St.__r=0,Wn=/(PointerCapture)$|Capture$/i,ce=0,Vt=He(!1),Yt=He(!0);var tr=function(e,t,n,r){var o;t[0]=0;for(var i=1;i<t.length;i++){var s=t[i++],u=t[i]?(t[0]|=s?1:2,n[t[i++]]):t[++i];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[t[++i]]=u:s===6?r[1][t[++i]]+=u+"":s?(o=e.apply(u,tr(e,u,n,["",null])),r.push(o),u[0]?t[0]|=2:(t[i-2]=0,t[i]=o)):r.push(u)}return r},Ne=new Map;function $o(e){var t=Ne.get(this);return t||(t=new Map,Ne.set(this,t)),(t=tr(this,t.get(e)||(t.set(e,t=(function(n){for(var r,o,i=1,s="",u="",c=[0],a=function(b){i===1&&(b||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,b,s):i===3&&(b||s)?(c.push(3,b,s),i=2):i===2&&s==="..."&&b?c.push(4,b,0):i===2&&s&&!b?c.push(5,0,!0,s):i>=5&&((s||!b&&i===5)&&(c.push(i,0,s,o),i=6),b&&(c.push(i,b,0,o),i=6)),s=""},p=0;p<n.length;p++){p&&(i===1&&a(),a(p));for(var l=0;l<n[p].length;l++)r=n[p][l],i===1?r==="<"?(a(),c=[c],i=3):s+=r:i===4?s==="--"&&r===">"?(i=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(a(),i=1):i&&(r==="="?(i=5,o=s,s=""):r==="/"&&(i<5||n[p][l+1]===">")?(a(),i===3&&(c=c[0]),i=c,(c=c[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(a(),i=2):s+=r),i===3&&s==="!--"&&(i=4,c=c[0])}return a(),c})(e)),t),arguments,[])).length>1?t:t[0]}var j=$o.bind(Yn),ut,S,Dt,Re,at=0,er=[],I=g,De=I.__b,Fe=I.__r,Ue=I.diffed,Be=I.__c,ze=I.unmount,qe=I.__;function de(e,t){I.__h&&I.__h(S,e,at||t),at=0;var n=S.__H||(S.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function T(e){return at=1,To(ir,e)}function To(e,t,n){var r=de(ut++,2);if(r.t=e,!r.__c&&(r.__=[ir(void 0,t),function(u){var c=r.__N?r.__N[0]:r.__[0],a=r.t(c,u);c!==a&&(r.__N=[a,r.__[1]],r.__c.setState({}))}],r.__c=S,!S.__f)){var o=function(u,c,a){if(!r.__c.__H)return!0;var p=r.__c.__H.__.filter(function(b){return!!b.__c});if(p.every(function(b){return!b.__N}))return!i||i.call(this,u,c,a);var l=r.__c.props!==u;return p.forEach(function(b){if(b.__N){var f=b.__[0];b.__=b.__N,b.__N=void 0,f!==b.__[0]&&(l=!0)}}),i&&i.call(this,u,c,a)||l};S.__f=!0;var i=S.shouldComponentUpdate,s=S.componentWillUpdate;S.componentWillUpdate=function(u,c,a){if(this.__e){var p=i;i=void 0,o(u,c,a),i=p}s&&s.call(this,u,c,a)},S.shouldComponentUpdate=o}return r.__N||r.__}function Eo(e,t){var n=de(ut++,3);!I.__s&&rr(n.__H,t)&&(n.__=e,n.u=t,S.__H.__h.push(n))}function Oo(e){return at=5,nr(function(){return{current:e}},[])}function nr(e,t){var n=de(ut++,7);return rr(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function ko(e,t){return at=8,nr(function(){return e},t)}function Po(){for(var e;e=er.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(gt),e.__H.__h.forEach(Jt),e.__H.__h=[]}catch(t){e.__H.__h=[],I.__e(t,e.__v)}}I.__b=function(e){S=null,De&&De(e)},I.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),qe&&qe(e,t)},I.__r=function(e){Fe&&Fe(e),ut=0;var t=(S=e.__c).__H;t&&(Dt===S?(t.__h=[],S.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(gt),t.__h.forEach(Jt),t.__h=[],ut=0)),Dt=S},I.diffed=function(e){Ue&&Ue(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(er.push(t)!==1&&Re===I.requestAnimationFrame||((Re=I.requestAnimationFrame)||Co)(Po)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),Dt=S=null},I.__c=function(e,t){t.some(function(n){try{n.__h.forEach(gt),n.__h=n.__h.filter(function(r){return!r.__||Jt(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],I.__e(r,n.__v)}}),Be&&Be(e,t)},I.unmount=function(e){ze&&ze(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{gt(r)}catch(o){t=o}}),n.__H=void 0,t&&I.__e(t,n.__v))};var We=typeof requestAnimationFrame=="function";function Co(e){var t,n=function(){clearTimeout(r),We&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);We&&(t=requestAnimationFrame(n))}function gt(e){var t=S,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),S=t}function Jt(e){var t=S;e.__c=e.__(),S=t}function rr(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function ir(e,t){return typeof t=="function"?t(e):t}function It(e,t){var n=T(t),r=n[0],o=n[1],i=Oo(e);return Eo(function(){var s=i.current.subscribe(o);return function(){return s.unsubscribe()}}),r}var Kt=function(e,t){return Kt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},Kt(e,t)};function Ct(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Kt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function Qt(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Zt(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),o,i=[],s;try{for(;(t===void 0||t-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return i}function Xt(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function F(e){return typeof e=="function"}function or(e){var t=function(r){Error.call(r),r.stack=new Error().stack},n=e(t);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Ft=or(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function te(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var At=(function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,n,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=Qt(s),c=u.next();!c.done;c=u.next()){var a=c.value;a.remove(this)}}catch(d){t={error:d}}finally{try{c&&!c.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}else s.remove(this);var p=this.initialTeardown;if(F(p))try{p()}catch(d){i=d instanceof Ft?d.errors:[d]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var b=Qt(l),f=b.next();!f.done;f=b.next()){var _=f.value;try{Ve(_)}catch(d){i=i??[],d instanceof Ft?i=Xt(Xt([],Zt(i)),Zt(d.errors)):i.push(d)}}}catch(d){r={error:d}}finally{try{f&&!f.done&&(o=b.return)&&o.call(b)}finally{if(r)throw r.error}}}if(i)throw new Ft(i)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)Ve(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}},e.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},e.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},e.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&te(n,t)},e.prototype.remove=function(t){var n=this._finalizers;n&&te(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=(function(){var t=new e;return t.closed=!0,t})(),e})(),sr=At.EMPTY;function ur(e){return e instanceof At||e&&"closed"in e&&F(e.remove)&&F(e.add)&&F(e.unsubscribe)}function Ve(e){F(e)?e():e.unsubscribe()}var Ao={Promise:void 0},jo={setTimeout:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,Xt([e,t],Zt(n)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function Lo(e){jo.setTimeout(function(){throw e})}function Ye(){}function wt(e){e()}var ar=(function(e){Ct(t,e);function t(n){var r=e.call(this)||this;return r.isStopped=!1,n?(r.destination=n,ur(n)&&n.add(r)):r.destination=No,r}return t.create=function(n,r,o){return new ee(n,r,o)},t.prototype.next=function(n){this.isStopped||this._next(n)},t.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t})(At),Mo=(function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){mt(r)}},e.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){mt(r)}else mt(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){mt(n)}},e})(),ee=(function(e){Ct(t,e);function t(n,r,o){var i=e.call(this)||this,s;return F(n)||!n?s={next:n??void 0,error:r??void 0,complete:o??void 0}:s=n,i.destination=new Mo(s),i}return t})(ar);function mt(e){Lo(e)}function Ho(e){throw e}var No={closed:!0,next:Ye,error:Ho,complete:Ye},Ro=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function Do(e){return e}function Fo(e){return e.length===0?Do:e.length===1?e[0]:function(n){return e.reduce(function(r,o){return o(r)},n)}}var Ge=(function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(t,n,r){var o=this,i=Bo(t)?t:new ee(t,n,r);return wt(function(){var s=o,u=s.operator,c=s.source;i.add(u?u.call(i,c):c?o._subscribe(i):o._trySubscribe(i))}),i},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},e.prototype.forEach=function(t,n){var r=this;return n=Je(n),new n(function(o,i){var s=new ee({next:function(u){try{t(u)}catch(c){i(c),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},e.prototype._subscribe=function(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)},e.prototype[Ro]=function(){return this},e.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Fo(t)(this)},e.prototype.toPromise=function(t){var n=this;return t=Je(t),new t(function(r,o){var i;n.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},e.create=function(t){return new e(t)},e})();function Je(e){var t;return(t=e??Ao.Promise)!==null&&t!==void 0?t:Promise}function Uo(e){return e&&F(e.next)&&F(e.error)&&F(e.complete)}function Bo(e){return e&&e instanceof ar||Uo(e)&&ur(e)}var zo=or(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),be=(function(e){Ct(t,e);function t(){var n=e.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return t.prototype.lift=function(n){var r=new Ke(this,this);return r.operator=n,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new zo},t.prototype.next=function(n){var r=this;wt(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=Qt(r.currentObservers),u=s.next();!u.done;u=s.next()){var c=u.value;c.next(n)}}catch(a){o={error:a}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},t.prototype.error=function(n){var r=this;wt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var o=r.observers;o.length;)o.shift().error(n)}})},t.prototype.complete=function(){var n=this;wt(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(n){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,n)},t.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},t.prototype._innerSubscribe=function(n){var r=this,o=this,i=o.hasError,s=o.isStopped,u=o.observers;return i||s?sr:(this.currentObservers=null,u.push(n),new At(function(){r.currentObservers=null,te(u,n)}))},t.prototype._checkFinalizedStatuses=function(n){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?n.error(i):s&&n.complete()},t.prototype.asObservable=function(){var n=new Ge;return n.source=this,n},t.create=function(n,r){return new Ke(n,r)},t})(Ge),Ke=(function(e){Ct(t,e);function t(n,r){var o=e.call(this)||this;return o.destination=n,o.source=r,o}return t.prototype.next=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,n)},t.prototype.error=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,n)},t.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},t.prototype._subscribe=function(n){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&o!==void 0?o:sr},t})(be),cr=4,lr=new be,pr=lr.asObservable();function fr(){return cr}function tt(e){cr=e,lr.next(e)}var dr="initial",br=new be,hr=br.asObservable();function mr(){return dr}function J(e){dr=e,br.next(e)}var vr=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Qe=Z(Ze||(Ze=vr([`
	height: 95%;
	display: grid;
	place-content: space-evenly;
`],[`
	height: 95%;
	display: grid;
	place-content: space-evenly;
`])));function it(e){var t=e.title,n=e.children;return j(Xe||(Xe=vr([`
		<crumbs-panel panel-title=`,`>
			<crumbs-tabs style="height: 100%;">
				<span slot="title-1"> Demo </span>
				<div className=`,` slot="content-1">
					`,`
					<crumbs-panel panel-title="Params">
						`,`
					</crumbs-panel>
				</div>
				<span slot="title-3"> Code </span>
				<div className=`,' slot="content-3">',`</div>
			</crumbs-tabs>
		</crumbs-panel>
	`],[`
		<crumbs-panel panel-title=`,`>
			<crumbs-tabs style="height: 100%;">
				<span slot="title-1"> Demo </span>
				<div className=`,` slot="content-1">
					`,`
					<crumbs-panel panel-title="Params">
						`,`
					</crumbs-panel>
				</div>
				<span slot="title-3"> Code </span>
				<div className=`,' slot="content-3">',`</div>
			</crumbs-tabs>
		</crumbs-panel>
	`])),t,Qe,n[0],n[1],Qe,n[2])}var Ze,Xe,qo=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function Wo(){var e=T("I'm an input !"),t=e[0],n=e[1],r=`&lt;crumbs-input
	value="`.concat(t,`"&gt;
&lt;/crumbs-input&gt;`);return j(tn||(tn=qo([`
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
	`])),it,t,function(o){return n(o.originalTarget.value)},t,function(o){return n(o.originalTarget.value)},{__html:r})}var tn,Vo=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function Yo(){var e=T("I'm a <b>paragraph</b> !"),t=e[0],n=e[1];return j(en||(en=Vo([`
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
	`])),it,{__html:t},t,function(r){return n(r.originalTarget.value)},{__html:"&lt;crumbs-p&gt; ".concat(t," &lt;/crumbs-p&gt;")})}var en,Go=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Jo=function(e,t,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function u(p){try{a(r.next(p))}catch(l){s(l)}}function c(p){try{a(r.throw(p))}catch(l){s(l)}}function a(p){p.done?i(p.value):o(p.value).then(u,c)}a((r=r.apply(e,t||[])).next())})},Ko=function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=u(0),s.throw=u(1),s.return=u(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(a){return function(p){return c([a,p])}}function c(a){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(n=0)),n;)try{if(r=1,o&&(i=a[0]&2?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[a[0]&2,i.value]),a[0]){case 0:case 1:i=a;break;case 4:return n.label++,{value:a[1],done:!1};case 5:n.label++,o=a[1],a=[0];continue;case 7:a=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1],i=a;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(a);break}i[2]&&n.ops.pop(),n.trys.pop();continue}a=t.call(e,n)}catch(p){a=[6,p],o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};function Qo(){var e=this,t=T("I'm a panel !"),n=t[0],r=t[1],o=T(""),i=o[0],s=o[1],u=T("100"),c=u[0],a=u[1],p=T(!1),l=p[0],b=p[1],f=`&lt;crumbs-panel
	panel-title="`.concat(i,`"
	panel-loading="`).concat(c,`"&gt;
	`).concat(n,`
&lt;/crumbs-panel&gt;`),_=ko(function(){return Jo(e,void 0,void 0,function(){var h;return Ko(this,function(v){switch(v.label){case 0:if(l)return[2];b(!0),a("0"),h=0,v.label=1;case 1:return h<=100?[4,new Promise(function(m){return setTimeout(m,10)})]:[3,4];case 2:v.sent(),a(Math.floor(h).toString()),v.label=3;case 3:return h+=.1+(100-h)/100,[3,1];case 4:return a("100"),b(!1),[2]}})})},[l]),d=function(){l||_()};return j(nn||(nn=Go([`
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
	`])),it,c,i,n,i,function(h){return s(h.originalTarget.value)},n,function(h){return r(h.originalTarget.value)},c,function(h){return a(String(h.target.value))},d,{__html:f})}var nn,Zo=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function Xo(){var e=T("Tab content"),t=e[0],n=e[1],r=T("Tab title"),o=r[0],i=r[1],s=T("Tab content 2"),u=s[0],c=s[1],a=T("Tab title 2"),p=a[0],l=a[1],b=`&lt;crumbs-tabs&gt;
	&lt;crumbs-p
		slot="title-1"&gt;
		`.concat(o,`
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot="content-1"&gt;
		`).concat(t,`
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot="title-2"&gt;
		`).concat(p,`
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot="content-2"&gt;
		`).concat(u,`
	&lt;/crumbs-p&gt;
&lt;/crumbs-panel&gt;`);return j(rn||(rn=Zo([`
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
	`])),it,o,t,p,u,o,function(f){return i(f.originalTarget.value)},t,function(f){return n(f.originalTarget.value)},p,function(f){return l(f.originalTarget.value)},u,function(f){return c(f.originalTarget.value)},{__html:b})}var rn,ts=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function es(){return j(on||(on=ts([`
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
	`])))}var on,Ut=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function ns(){var e=It(pr,fr),t=It(hr,mr),n=Z(sn||(sn=Ut([`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`],[`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`]))),r=Z(un||(un=Ut([`
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
	`])));return j(an||(an=Ut([`
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
	`])),n,r,e===1,function(){return tt(1)},e===2,function(){return tt(2)},e===3,function(){return tt(3)},e===4,function(){return tt(4)},e===5,function(){return tt(5)},e===6,function(){return tt(6)},r,t==="initial",function(){return J("initial")},t==="monospace",function(){return J("monospace")},t==="serif",function(){return J("serif")},t==="sans-serif",function(){return J("sans-serif")},t==="cursive",function(){return J("cursive")},t==="fantasy",function(){return J("fantasy")},t==="system-ui",function(){return J("system-ui")})}var sn,un,an,rs=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function is(){var e="&lt;crumbs-p&gt; Hello world ! &lt;/crumbs-p&gt;";return j(cn||(cn=rs([`
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
	`])),{__html:e})}var cn,os=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function ss(){var e=T("Click me !"),t=e[0],n=e[1],r=T("100"),o=r[0],i=r[1],s=T(!1),u=s[0],c=s[1],a=`
		&lt;crumbs-button
			`.concat(u?"	disabled":"",`
				progress="`).concat(o,`"&gt;
				`).concat(t,`
		&lt;/crumbs-button&gt;
	`);return j(ln||(ln=os([`
		<`,` title="Button">
			<crumbs-button
				progress=`,`
				disabled=`,`>
				`,`
			</crumbs-button>

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

				<input type="checkbox" onInput=`,` />
				<label> Disabled </label>

			</div>

			<code> <pre dangerouslySetInnerHTML=`,`> </pre></code>
		<//>
	`],[`
		<`,` title="Button">
			<crumbs-button
				progress=`,`
				disabled=`,`>
				`,`
			</crumbs-button>

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

				<input type="checkbox" onInput=`,` />
				<label> Disabled </label>

			</div>

			<code> <pre dangerouslySetInnerHTML=`,`> </pre></code>
		<//>
	`])),it,o,u,t,t,function(p){return n(p.originalTarget.value)},o,function(p){return i(String(p.target.value))},function(){return c(!u)},{__html:a})}var ln,us=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function as(){var e=T("Click me !"),t=e[0],n=e[1],r=T(!1),o=r[0],i=r[1],s=T(2e3),u=s[0],c=s[1],a=`
		&lt;crumbs-button
			`.concat(o?"	indeterminate-progress":"",`
			`).concat(o?'	indeterminate-duration-ms="'.concat(u,'"'):"",`
				`).concat(t,`
		&lt;/crumbs-button&gt;
	`);return j(pn||(pn=us([`
		<`,` title="Button indeterminate loading">
			<crumbs-button
				indeterminate-progress=`,`
				indeterminate-duration-ms=`,`>
				`,`
			</crumbs-button>

			<div>
				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`/>


				<br/>

				<input type="checkbox" onInput=`,` />
				<label> Indeterminate loading </label>

				<br/>

				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`/>
				<label> Indeterminate loading duration (ms) </label>
			</div>

			<code> <pre dangerouslySetInnerHTML=`,`> </pre></code>
		<//>
	`],[`
		<`,` title="Button indeterminate loading">
			<crumbs-button
				indeterminate-progress=`,`
				indeterminate-duration-ms=`,`>
				`,`
			</crumbs-button>

			<div>
				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`/>


				<br/>

				<input type="checkbox" onInput=`,` />
				<label> Indeterminate loading </label>

				<br/>

				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`/>
				<label> Indeterminate loading duration (ms) </label>
			</div>

			<code> <pre dangerouslySetInnerHTML=`,`> </pre></code>
		<//>
	`])),it,o,u,t,t,function(p){return n(p.originalTarget.value)},function(){return i(!o)},u,function(p){return c(Number(p.originalTarget.value))},{__html:a})}var pn;function cs(){const e=It(pr,fr),t=It(hr,mr),n=Z`
		background-image: url('bg${e}.jpg');
		background-size: cover;
		min-height: 100vh;
		position: fixed;
		min-width: 100vw;
		background-position: center;
	`,r=Z`
		display: grid;
		overflow-y: scroll;
		height: 100vh;
		grid-template-columns: repeat(auto-fit, minmax(max(28rem + 6vw), 1fr));
		font-family: ${t};
	`;return j`
		<div class=${n}></div>

		<div class=${r}>
			<${es}><//>
			<${is}><//>
			<${ns}><//>
			<${Yo}><//>
			<${Qo}><//>
			<${Wo}><//>
			<${Xo}><//>
			<${ss}><//>
			<${as}><//>
		</div>
	`}Io(j`<${cs}><//>`,document.body);
