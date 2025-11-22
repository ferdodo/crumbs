(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function rt(e){for(var t,n,r=arguments,i=1,o="",s="",a=[0],c=function(l){i===1&&(l||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(l?r[l]:o):i===3&&(l||o)?(a[1]=l?r[l]:o,i=2):i===2&&o==="..."&&l?a[2]=Object.assign(a[2]||{},r[l]):i===2&&o&&!l?(a[2]=a[2]||{})[o]=!0:i>=5&&(i===5?((a[2]=a[2]||{})[n]=l?o?o+r[l]:r[l]:o,i=6):(l||o)&&(a[2][n]+=l?o+r[l]:o)),o=""},u=0;u<e.length;u++){u&&(i===1&&c(),c(u));for(var f=0;f<e[u].length;f++)t=e[u][f],i===1?t==="<"?(c(),a=[a,"",null],i=3):o+=t:i===4?o==="--"&&t===">"?(i=1,o=""):o=t+o[0]:s?t===s?s="":o+=t:t==='"'||t==="'"?s=t:t===">"?(c(),i=1):i&&(t==="="?(i=5,n=o,o=""):t==="/"&&(i<5||e[u][f+1]===">")?(c(),i===3&&(a=a[0]),i=a,(a=a[0]).push(this.apply(null,i.slice(1))),i=0):t===" "||t==="	"||t===`
`||t==="\r"?(c(),i=2):o+=t),i===3&&o==="!--"&&(i=4,a=a[0])}return c(),a.length>2?a.slice(1):a[1]}function Zn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Xn(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e;var t=e.default;if(typeof t=="function"){var n=function r(){var i=!1;try{i=this instanceof r}catch{}return i?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Lt={exports:{}};var Mt,he;function tr(){return he||(he=1,Mt=(function(t){var n=String.prototype.split,r=/()??/.exec("")[1]===t,i;return i=function(o,l,a){if(Object.prototype.toString.call(l)!=="[object RegExp]")return n.call(o,l,a);var c=[],u=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.extended?"x":"")+(l.sticky?"y":""),f=0,l=new RegExp(l.source,u+"g"),d,p,v,h;for(o+="",r||(d=new RegExp("^"+l.source+"$(?!\\s)",u)),a=a===t?-1>>>0:a>>>0;(p=l.exec(o))&&(v=p.index+p[0].length,!(v>f&&(c.push(o.slice(f,p.index)),!r&&p.length>1&&p[0].replace(d,function(){for(var b=1;b<arguments.length-2;b++)arguments[b]===t&&(p[b]=t)}),p.length>1&&p.index<o.length&&Array.prototype.push.apply(c,p.slice(1)),h=p[0].length,f=v,c.length>=a)));)l.lastIndex===p.index&&l.lastIndex++;return f===o.length?(h||!l.test(""))&&c.push(""):c.push(o.slice(f)),c.length>a?c.slice(0,a):c},i})()),Mt}var Ht,be;function er(){if(be)return Ht;be=1;var e=[].indexOf;return Ht=function(t,n){if(e)return t.indexOf(n);for(var r=0;r<t.length;++r)if(t[r]===n)return r;return-1},Ht}var jt,me;function nr(){if(me)return jt;me=1;var e=er();jt=t;function t(i){var o=i.classList;if(o)return o;var s={add:a,remove:c,contains:u,toggle:f,toString:l,length:0,item:d};return s;function a(h){var b=p();e(b,h)>-1||(b.push(h),v(b))}function c(h){var b=p(),_=e(b,h);_!==-1&&(b.splice(_,1),v(b))}function u(h){return e(p(),h)>-1}function f(h){return u(h)?(c(h),!1):(a(h),!0)}function l(){return i.className}function d(h){var b=p();return b[h]||null}function p(){var h=i.className;return n(h.split(" "),r)}function v(h){var b=h.length;i.className=h.join(" "),s.length=b;for(var _=0;_<h.length;_++)s[_]=h[_];delete h[b]}}function n(i,o){for(var s=[],a=0;a<i.length;a++)o(i[a])&&s.push(i[a]);return s}function r(i){return!!i}return jt}const rr={},or=Object.freeze(Object.defineProperty({__proto__:null,default:rr},Symbol.toStringTag,{value:"Module"})),ir=Xn(or);var ve;function sr(){if(ve)return Lt.exports;ve=1;var e=tr(),t=nr(),n=typeof window>"u"?ir:window,r=n.document,i=n.Text;function o(){var f=[];function l(){var d=[].slice.call(arguments),p=null;function v(h){var b;function _(w){var $=e(w,/([\.#]?[^\s#.]+)/);/^\.|#/.test($[1])&&(p=r.createElement("div")),c($,function(C){var q=C.substring(1,C.length);C&&(p?C[0]==="."?t(p).add(q):C[0]==="#"&&p.setAttribute("id",q):p=r.createElement(C))})}if(h!=null){if(typeof h=="string")p?p.appendChild(b=r.createTextNode(h)):_(h);else if(typeof h=="number"||typeof h=="boolean"||h instanceof Date||h instanceof RegExp)p.appendChild(b=r.createTextNode(h.toString()));else if(u(h))c(h,v);else if(a(h))p.appendChild(b=h);else if(h instanceof i)p.appendChild(b=h);else if(typeof h=="object")for(var m in h)if(typeof h[m]=="function")/^on\w+/.test(m)?(function(w,$){p.addEventListener?(p.addEventListener(w.substring(2),$[w],!1),f.push(function(){p.removeEventListener(w.substring(2),$[w],!1)})):(p.attachEvent(w,$[w]),f.push(function(){p.detachEvent(w,$[w])}))})(m,h):(p[m]=h[m](),f.push(h[m](function(w){p[m]=w})));else if(m==="style")if(typeof h[m]=="string")p.style.cssText=h[m];else for(var M in h[m])(function(w,$){if(typeof $=="function")p.style.setProperty(w,$()),f.push($(function(q){p.style.setProperty(w,q)}));else var C=h[m][w].match(/(.*)\W+!important\W*$/);C?p.style.setProperty(w,C[1],"important"):p.style.setProperty(w,h[m][w])})(M,h[m][M]);else if(m==="attrs")for(var E in h[m])p.setAttribute(E,h[m][E]);else m.substr(0,5)==="data-"?p.setAttribute(m,h[m]):p[m]=h[m];else if(typeof h=="function"){var E=h();p.appendChild(b=a(E)?E:r.createTextNode(E)),f.push(h(function($){a($)&&b.parentElement?(b.parentElement.replaceChild($,b),b=$):b.textContent=$}))}}return b}for(;d.length;)v(d.shift());return p}return l.cleanup=function(){for(var d=0;d<f.length;d++)f[d]();f.length=0},l}var s=Lt.exports=o();s.context=o;function a(f){return f&&f.nodeName&&f.nodeType}function c(f,l){if(f.forEach)return f.forEach(l);for(var d=0;d<f.length;d++)l(f[d],d)}function u(f){return Object.prototype.toString.call(f)=="[object Array]"}return Lt.exports}var ar=sr();const J=Zn(ar);function A(e){if(!e.shadowRoot)throw new Error("There is no shadow root on the element !");return e.shadowRoot}function K(e){const t=Array.isArray(e)?e:[e],n=document.createElement("template");return n.innerHTML=t.map(r=>r.outerHTML).join(""),n}var Ut=function(e,t){return Ut=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Ut(e,t)};function lt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Ut(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function cr(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(f){try{u(r.next(f))}catch(l){s(l)}}function c(f){try{u(r.throw(f))}catch(l){s(l)}}function u(f){f.done?o(f.value):i(f.value).then(a,c)}u((r=r.apply(e,t||[])).next())})}function Je(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=a(0),s.throw=a(1),s.return=a(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(f){return c([u,f])}}function c(u){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,u[0]&&(n=0)),n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(f){u=[6,f],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function et(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function B(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],s;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function G(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function tt(e){return this instanceof tt?(this.v=e,this):new tt(e)}function ur(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(p){return function(v){return Promise.resolve(v).then(p,l)}}function a(p,v){r[p]&&(i[p]=function(h){return new Promise(function(b,_){o.push([p,h,b,_])>1||c(p,h)})},v&&(i[p]=v(i[p])))}function c(p,v){try{u(r[p](v))}catch(h){d(o[0][3],h)}}function u(p){p.value instanceof tt?Promise.resolve(p.value.v).then(f,l):d(o[0][2],p)}function f(p){c("next",p)}function l(p){c("throw",p)}function d(p,v){p(v),o.shift(),o.length&&c(o[0][0],o[0][1])}}function lr(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof et=="function"?et(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=e[o]&&function(s){return new Promise(function(a,c){s=e[o](s),i(a,c,s.done,s.value)})}}function i(o,s,a,c){Promise.resolve(c).then(function(u){o({value:u,done:a})},s)}}function y(e){return typeof e=="function"}function ee(e){var t=function(r){Error.call(r),r.stack=new Error().stack},n=e(t);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Nt=ee(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function Dt(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var St=(function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,n,r,i,o;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var a=et(s),c=a.next();!c.done;c=a.next()){var u=c.value;u.remove(this)}}catch(h){t={error:h}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}else s.remove(this);var f=this.initialTeardown;if(y(f))try{f()}catch(h){o=h instanceof Nt?h.errors:[h]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var d=et(l),p=d.next();!p.done;p=d.next()){var v=p.value;try{_e(v)}catch(h){o=o??[],h instanceof Nt?o=G(G([],B(o)),B(h.errors)):o.push(h)}}}catch(h){r={error:h}}finally{try{p&&!p.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(o)throw new Nt(o)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)_e(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}},e.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},e.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},e.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&Dt(n,t)},e.prototype.remove=function(t){var n=this._finalizers;n&&Dt(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=(function(){var t=new e;return t.closed=!0,t})(),e})(),Ke=St.EMPTY;function Qe(e){return e instanceof St||e&&"closed"in e&&y(e.remove)&&y(e.add)&&y(e.unsubscribe)}function _e(e){y(e)?e():e.unsubscribe()}var fr={Promise:void 0},pr={setTimeout:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,G([e,t],B(n)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function Ze(e){pr.setTimeout(function(){throw e})}function ye(){}function mt(e){e()}var ne=(function(e){lt(t,e);function t(n){var r=e.call(this)||this;return r.isStopped=!1,n?(r.destination=n,Qe(n)&&n.add(r)):r.destination=br,r}return t.create=function(n,r,i){return new zt(n,r,i)},t.prototype.next=function(n){this.isStopped||this._next(n)},t.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t})(St),dr=(function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){pt(r)}},e.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){pt(r)}else pt(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){pt(n)}},e})(),zt=(function(e){lt(t,e);function t(n,r,i){var o=e.call(this)||this,s;return y(n)||!n?s={next:n??void 0,error:r??void 0,complete:i??void 0}:s=n,o.destination=new dr(s),o}return t})(ne);function pt(e){Ze(e)}function hr(e){throw e}var br={closed:!0,next:ye,error:hr,complete:ye},re=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function ft(e){return e}function mr(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Xe(e)}function Xe(e){return e.length===0?ft:e.length===1?e[0]:function(n){return e.reduce(function(r,i){return i(r)},n)}}var I=(function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(t,n,r){var i=this,o=_r(t)?t:new zt(t,n,r);return mt(function(){var s=i,a=s.operator,c=s.source;o.add(a?a.call(o,c):c?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},e.prototype.forEach=function(t,n){var r=this;return n=ge(n),new n(function(i,o){var s=new zt({next:function(a){try{t(a)}catch(c){o(c),s.unsubscribe()}},error:o,complete:i});r.subscribe(s)})},e.prototype._subscribe=function(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)},e.prototype[re]=function(){return this},e.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Xe(t)(this)},e.prototype.toPromise=function(t){var n=this;return t=ge(t),new t(function(r,i){var o;n.subscribe(function(s){return o=s},function(s){return i(s)},function(){return r(o)})})},e.create=function(t){return new e(t)},e})();function ge(e){var t;return(t=e??fr.Promise)!==null&&t!==void 0?t:Promise}function vr(e){return e&&y(e.next)&&y(e.error)&&y(e.complete)}function _r(e){return e&&e instanceof ne||vr(e)&&Qe(e)}function yr(e){return y(e?.lift)}function j(e){return function(t){if(yr(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function R(e,t,n,r,i){return new gr(e,t,n,r,i)}var gr=(function(e){lt(t,e);function t(n,r,i,o,s,a){var c=e.call(this,n)||this;return c.onFinalize=s,c.shouldUnsubscribe=a,c._next=r?function(u){try{r(u)}catch(f){n.error(f)}}:e.prototype._next,c._error=o?function(u){try{o(u)}catch(f){n.error(f)}finally{this.unsubscribe()}}:e.prototype._error,c._complete=i?function(){try{i()}catch(u){n.error(u)}finally{this.unsubscribe()}}:e.prototype._complete,c}return t.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},t})(ne),wr=ee(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),tn=(function(e){lt(t,e);function t(){var n=e.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return t.prototype.lift=function(n){var r=new we(this,this);return r.operator=n,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new wr},t.prototype.next=function(n){var r=this;mt(function(){var i,o;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=et(r.currentObservers),a=s.next();!a.done;a=s.next()){var c=a.value;c.next(n)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(o=s.return)&&o.call(s)}finally{if(i)throw i.error}}}})},t.prototype.error=function(n){var r=this;mt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},t.prototype.complete=function(){var n=this;mt(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(n){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,n)},t.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},t.prototype._innerSubscribe=function(n){var r=this,i=this,o=i.hasError,s=i.isStopped,a=i.observers;return o||s?Ke:(this.currentObservers=null,a.push(n),new St(function(){r.currentObservers=null,Dt(a,n)}))},t.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,o=r.thrownError,s=r.isStopped;i?n.error(o):s&&n.complete()},t.prototype.asObservable=function(){var n=new I;return n.source=this,n},t.create=function(n,r){return new we(n,r)},t})(I),we=(function(e){lt(t,e);function t(n,r){var i=e.call(this)||this;return i.destination=n,i.source=r,i}return t.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},t.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},t.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},t.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:Ke},t})(tn),en=new I(function(e){return e.complete()});function $r(e){return e&&y(e.schedule)}function oe(e){return e[e.length-1]}function nn(e){return y(oe(e))?e.pop():void 0}function Et(e){return $r(oe(e))?e.pop():void 0}function xr(e,t){return typeof oe(e)=="number"?e.pop():t}var ie=(function(e){return e&&typeof e.length=="number"&&typeof e!="function"});function rn(e){return y(e?.then)}function on(e){return y(e[re])}function sn(e){return Symbol.asyncIterator&&y(e?.[Symbol.asyncIterator])}function an(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Sr(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var cn=Sr();function un(e){return y(e?.[cn])}function ln(e){return ur(this,arguments,function(){var n,r,i,o;return Je(this,function(s){switch(s.label){case 0:n=e.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,tt(n.read())];case 3:return r=s.sent(),i=r.value,o=r.done,o?[4,tt(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,tt(i)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function fn(e){return y(e?.getReader)}function Q(e){if(e instanceof I)return e;if(e!=null){if(on(e))return Er(e);if(ie(e))return Tr(e);if(rn(e))return kr(e);if(sn(e))return pn(e);if(un(e))return Ir(e);if(fn(e))return Cr(e)}throw an(e)}function Er(e){return new I(function(t){var n=e[re]();if(y(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Tr(e){return new I(function(t){for(var n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function kr(e){return new I(function(t){e.then(function(n){t.closed||(t.next(n),t.complete())},function(n){return t.error(n)}).then(null,Ze)})}function Ir(e){return new I(function(t){var n,r;try{for(var i=et(e),o=i.next();!o.done;o=i.next()){var s=o.value;if(t.next(s),t.closed)return}}catch(a){n={error:a}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}t.complete()})}function pn(e){return new I(function(t){Or(e,t).catch(function(n){return t.error(n)})})}function Cr(e){return pn(ln(e))}function Or(e,t){var n,r,i,o;return cr(this,void 0,void 0,function(){var s,a;return Je(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),n=lr(e),c.label=1;case 1:return[4,n.next()];case 2:if(r=c.sent(),!!r.done)return[3,4];if(s=r.value,t.next(s),t.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=c.sent(),i={error:a},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(o=n.return)?[4,o.call(n)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function z(e,t,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var o=t.schedule(function(){n(),i?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(o),!i)return o}function dn(e,t){return t===void 0&&(t=0),j(function(n,r){n.subscribe(R(r,function(i){return z(r,e,function(){return r.next(i)},t)},function(){return z(r,e,function(){return r.complete()},t)},function(i){return z(r,e,function(){return r.error(i)},t)}))})}function hn(e,t){return t===void 0&&(t=0),j(function(n,r){r.add(e.schedule(function(){return n.subscribe(r)},t))})}function Pr(e,t){return Q(e).pipe(hn(t),dn(t))}function Ar(e,t){return Q(e).pipe(hn(t),dn(t))}function Lr(e,t){return new I(function(n){var r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function Mr(e,t){return new I(function(n){var r;return z(n,t,function(){r=e[cn](),z(n,t,function(){var i,o,s;try{i=r.next(),o=i.value,s=i.done}catch(a){n.error(a);return}s?n.complete():n.next(o)},0,!0)}),function(){return y(r?.return)&&r.return()}})}function bn(e,t){if(!e)throw new Error("Iterable cannot be null");return new I(function(n){z(n,t,function(){var r=e[Symbol.asyncIterator]();z(n,t,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function Hr(e,t){return bn(ln(e),t)}function jr(e,t){if(e!=null){if(on(e))return Pr(e,t);if(ie(e))return Lr(e,t);if(rn(e))return Ar(e,t);if(sn(e))return bn(e,t);if(un(e))return Mr(e,t);if(fn(e))return Hr(e,t)}throw an(e)}function Tt(e,t){return t?jr(e,t):Q(e)}var mn=ee(function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}});function T(e,t){return j(function(n,r){var i=0;n.subscribe(R(r,function(o){r.next(e.call(t,o,i++))}))})}var Nr=Array.isArray;function Rr(e,t){return Nr(t)?e.apply(void 0,G([],B(t))):e(t)}function se(e){return T(function(t){return Rr(e,t)})}var qr=Array.isArray,Fr=Object.getPrototypeOf,Ur=Object.prototype,Dr=Object.keys;function zr(e){if(e.length===1){var t=e[0];if(qr(t))return{args:t,keys:null};if(Br(t)){var n=Dr(t);return{args:n.map(function(r){return t[r]}),keys:n}}}return{args:e,keys:null}}function Br(e){return e&&typeof e=="object"&&Fr(e)===Ur}function Wr(e,t){return e.reduce(function(n,r,i){return n[r]=t[i],n},{})}function Vr(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Et(e),r=nn(e),i=zr(e),o=i.args,s=i.keys;if(o.length===0)return Tt([],n);var a=new I(vn(o,n,s?function(c){return Wr(s,c)}:ft));return r?a.pipe(se(r)):a}function vn(e,t,n){return n===void 0&&(n=ft),function(r){$e(t,function(){for(var i=e.length,o=new Array(i),s=i,a=i,c=function(f){$e(t,function(){var l=Tt(e[f],t),d=!1;l.subscribe(R(r,function(p){o[f]=p,d||(d=!0,a--),a||r.next(n(o.slice()))},function(){--s||r.complete()}))},r)},u=0;u<i;u++)c(u)},r)}}function $e(e,t,n){e?z(n,e,t):t()}function Yr(e,t,n,r,i,o,s,a){var c=[],u=0,f=0,l=!1,d=function(){l&&!c.length&&!u&&t.complete()},p=function(h){return u<r?v(h):c.push(h)},v=function(h){u++;var b=!1;Q(n(h,f++)).subscribe(R(t,function(_){t.next(_)},function(){b=!0},void 0,function(){if(b)try{u--;for(var _=function(){var m=c.shift();s||v(m)};c.length&&u<r;)_();d()}catch(m){t.error(m)}}))};return e.subscribe(R(t,p,function(){l=!0,d()})),function(){}}function ae(e,t,n){return n===void 0&&(n=1/0),y(t)?ae(function(r,i){return T(function(o,s){return t(r,o,i,s)})(Q(e(r,i)))},n):(typeof t=="number"&&(n=t),j(function(r,i){return Yr(r,i,e,n)}))}function _n(e){return e===void 0&&(e=1/0),ae(ft,e)}function Gr(){return _n(1)}function xe(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Gr()(Tt(e,Et(e)))}var Jr=["addListener","removeListener"],Kr=["addEventListener","removeEventListener"],Qr=["on","off"];function H(e,t,n,r){if(y(n)&&(r=n,n=void 0),r)return H(e,t,n).pipe(se(r));var i=B(to(e)?Kr.map(function(a){return function(c){return e[a](t,c,n)}}):Zr(e)?Jr.map(Se(e,t)):Xr(e)?Qr.map(Se(e,t)):[],2),o=i[0],s=i[1];if(!o&&ie(e))return ae(function(a){return H(a,t,n)})(Q(e));if(!o)throw new TypeError("Invalid event target");return new I(function(a){var c=function(){for(var u=[],f=0;f<arguments.length;f++)u[f]=arguments[f];return a.next(1<u.length?u:u[0])};return o(c),function(){return s(c)}})}function Se(e,t){return function(n){return function(r){return e[n](t,r)}}}function Zr(e){return y(e.addListener)&&y(e.removeListener)}function Xr(e){return y(e.on)&&y(e.off)}function to(e){return y(e.addEventListener)&&y(e.removeEventListener)}function eo(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Et(e),r=xr(e,1/0),i=e;return i.length?i.length===1?Q(i[0]):_n(r)(Tt(i,n)):en}var no=Array.isArray;function ro(e){return e.length===1&&no(e[0])?e[0]:e}function st(e,t){return j(function(n,r){var i=0;n.subscribe(R(r,function(o){return e.call(t,o,i++)&&r.next(o)}))})}function yn(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=nn(e);return n?mr(yn.apply(void 0,G([],B(e))),se(n)):j(function(r,i){vn(G([r],B(ro(e))))(i)})}function Rt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return yn.apply(void 0,G([],B(e)))}function oo(e){return j(function(t,n){var r=!1;t.subscribe(R(n,function(i){r=!0,n.next(i)},function(){r||n.next(e),n.complete()}))})}function io(e){return e<=0?function(){return en}:j(function(t,n){var r=0;t.subscribe(R(n,function(i){++r<=e&&(n.next(i),e<=r&&n.complete())}))})}function Ee(e){return T(function(){return e})}function so(e){return e===void 0&&(e=ao),j(function(t,n){var r=!1;t.subscribe(R(n,function(i){r=!0,n.next(i)},function(){return r?n.complete():n.error(e())}))})}function ao(){return new mn}function co(e,t){var n=arguments.length>=2;return function(r){return r.pipe(ft,io(1),n?oo(t):so(function(){return new mn}))}}function uo(){return j(function(e,t){var n,r=!1;e.subscribe(R(t,function(i){var o=n;n=i,r&&t.next([o,i]),r=!0}))})}function dt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Et(e);return j(function(r,i){(n?xe(e,r,n):xe(e,r)).subscribe(i)})}function gn(){return!document.hidden}function lo(){const e=H(document,"visibilitychange"),t=H(window,"focus").pipe(Ee(!0)),n=H(window,"blur").pipe(Ee(!1)),r=eo(t,n);return Vr(e,r).pipe(T(([,i])=>gn()&&i),st(i=>i),co())}const fo=H(document,"mouseover");async function po(){gn()||await Promise.race([lo().toPromise(),fo.toPromise()])}async function ho(){await new Promise(e=>setTimeout(e,400)),await po(),await new Promise(e=>setTimeout(e,400))}const bo=ho();function O(e,t){const n=e.querySelector(t);if(!n)throw new Error(`Failed to find element ${t} !`);return n}const mo=rt.bind(J),vo="crumbs-p",_o=K(mo`
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
`);let yo=class extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const t=A(this),n=_o.content.cloneNode(!0);t.appendChild(n)}};customElements.define(vo,yo);const go=rt.bind(J),wo="crumbs-panel",$o=K(go`
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
			/*backdrop-filter: blur(0.3rem);*/
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
`);class xo extends HTMLElement{contentTimeoutElapsed=!1;contentLoaded=!1;connected=!1;loading="100";scrolled=!1;scrolledSubscription=null;static get observedAttributes(){return["panel-loading","panel-title"]}async connectedCallback(){this.attachShadow({mode:"open"}),await bo;const t=A(this),n=$o.content.cloneNode(!0);t.appendChild(n);const r=this.getAttribute("panel-loading");r!==null&&Te(r)&&(this.loading=r),setTimeout(()=>{const i=O(t,"#panel-container");i.style.gridTemplateColumns="1rem 1fr 1rem",i.style.gridTemplateRows="1rem 1fr 1rem";const o=O(t,"#panel");o.style.backgroundColor="rgba(255, 255, 255, 0.37)",this.scrolledSubscription=H(o,"scroll").pipe(T(s=>s.target.scrollTop),T(s=>s!==0)).subscribe(s=>{this.scrolled=s,this.render()}),this.render()},10),setTimeout(()=>{this.contentTimeoutElapsed=!0,this.render()},400),this.connected=!0,this.render()}render(){const t=A(this),n=O(t,"#panel-content"),r=O(t,"#panel-loading"),i=O(t,"#panel"),o=O(t,"#panel-title-content");this.contentTimeoutElapsed&&So(this.loading)?(n.style.visibility="visible",n.style.opacity="1",i.style.overflow="auto"):(n.style.visibility="collapse",n.style.opacity="0",i.style.overflow="hidden"),r.style.width=`${this.loading}%`;const s=O(t,"#panel-title");this.loading==="100"&&this.getAttribute("panel-title")&&!this.scrolled?setTimeout(()=>{s.style.opacity="1",o.innerHTML=this.getAttribute("panel-title")||"",n.style.paddingTop="2.5rem"},10):(n.style.paddingTop="inherit",s.style.opacity="0")}attributeChangedCallback(){if(this.shadowRoot&&this.connected){const t=this.getAttribute("panel-loading");t!==null&&Te(t)?this.loading=t:t===null&&(this.loading="100"),this.render()}}disconnectedCallback(){this.scrolledSubscription?.unsubscribe()}}function Te(e){const t=Number(e),n=Math.floor(t);return n===t&&Number.isInteger(n)&&Number.isFinite(n)&&n<=100&&n>=0}function So(e){return e===null||e==="100"}customElements.define(wo,xo);const Eo=rt.bind(J),To="crumbs-input",ko=K(Eo`
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
`);class Io extends HTMLElement{static get observedAttributes(){return["value"]}async connectedCallback(){this.attachShadow({mode:"open"});const t=A(this),n=ko.content.cloneNode(!0);t.appendChild(n);const r=O(t,"input"),i=this.getAttribute("value");r instanceof HTMLInputElement&&i&&(r.value=i)}attributeChangedCallback(t,n,r){if(t==="value"&&this.shadowRoot){const i=A(this),o=O(i,"input");o instanceof HTMLInputElement&&(o.value=r)}}}customElements.define(To,Io);const Bt=rt.bind(J),Co="crumbs-tabs",Oo=K(Bt`
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
`);class Po extends HTMLElement{selected=1;subscriptions=[];async connectedCallback(){this.attachShadow({mode:"open"});const t=A(this),n=Oo.content.cloneNode(!0);t.appendChild(n);const r=this.getAttribute("selected");this.selected=Number.parseInt(r||"1",10);const i=t.querySelector("#tabs"),o=t.querySelector("#content");if(!i)throw new Error("Tabs not found");if(!o)throw new Error("Content not found");for(const s of{[Symbol.iterator]:()=>this.getSlots()}){if(s.startsWith("content-")){const a=Bt`<div id=${`${s}`}> <slot name=${s}></slot> </div>`;a instanceof Element&&o.appendChild(a)}if(s.startsWith("title-")){const a=Bt`<div id=${s}> <crumbs-p> <slot name=${s}></slot> </crumbs-p> </div>`;a instanceof Element&&i.appendChild(a)}}this.subscriptions=[...i.children].map((s,a)=>H(s,"click").subscribe(()=>{const c=s.id.replace("title-","content-"),u=t.querySelector(`#${c}`);u instanceof HTMLElement&&o instanceof HTMLElement&&u.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.selected=a+1,this.render()})),this.render()}render(){const n=A(this).querySelector("#tabs");if(!n)throw new Error("Tabs not found");[...n.children].forEach((r,i)=>{i+1===this.selected?r instanceof HTMLElement&&r.classList.add("selected-title"):r instanceof HTMLElement&&r.classList.remove("selected-title")})}disconnectedCallback(){for(const t of this.subscriptions)t.unsubscribe()}*getSlots(){for(const t of Array.from(this.children)){const n=t.getAttribute("slot");n&&(yield n)}}}customElements.define(Co,Po);var wn=function(e,t,n,r){var i;t[0]=0;for(var o=1;o<t.length;o++){var s=t[o++],a=t[o]?(t[0]|=s?1:2,n[t[o++]]):t[++o];s===3?r[0]=a:s===4?r[1]=Object.assign(r[1]||{},a):s===5?(r[1]=r[1]||{})[t[++o]]=a:s===6?r[1][t[++o]]+=a+"":s?(i=e.apply(a,wn(e,a,n,["",null])),r.push(i),a[0]?t[0]|=2:(t[o-2]=0,t[o]=i)):r.push(a)}return r},ke=new Map;function Ao(e){var t=ke.get(this);return t||(t=new Map,ke.set(this,t)),(t=wn(this,t.get(e)||(t.set(e,t=(function(n){for(var r,i,o=1,s="",a="",c=[0],u=function(d){o===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,d,s):o===3&&(d||s)?(c.push(3,d,s),o=2):o===2&&s==="..."&&d?c.push(4,d,0):o===2&&s&&!d?c.push(5,0,!0,s):o>=5&&((s||!d&&o===5)&&(c.push(o,0,s,i),o=6),d&&(c.push(o,d,0,i),o=6)),s=""},f=0;f<n.length;f++){f&&(o===1&&u(),u(f));for(var l=0;l<n[f].length;l++)r=n[f][l],o===1?r==="<"?(u(),c=[c],o=3):s+=r:o===4?s==="--"&&r===">"?(o=1,s=""):s=r+s[0]:a?r===a?a="":s+=r:r==='"'||r==="'"?a=r:r===">"?(u(),o=1):o&&(r==="="?(o=5,i=s,s=""):r==="/"&&(o<5||n[f][l+1]===">")?(u(),o===3&&(c=c[0]),o=c,(c=c[0]).push(2,0,o),o=0):r===" "||r==="	"||r===`
`||r==="\r"?(u(),o=2):s+=r),o===3&&s==="!--"&&(o=4,c=c[0])}return u(),c})(e)),t),arguments,[])).length>1?t:t[0]}function Lo(){return e=>e.pipe(T(([t,n,r])=>t||n||r>0&&r<100))}function Mo(){return e=>e.pipe(T(([t,n])=>n?100:t||0))}const Ho=Ao.bind(J),jo="crumbs-button";class No extends HTMLElement{_renderSubscription=null;_clickSubscription=null;_attributeChanges$=new tn;_parsedProgress$;_parsedDisabled$;_parsedIndeterminateProgress$;_loading$;_activeIndeterminateProgress$;_disabled$;_loadingBarTransitionEnabled$;constructor(){super(),this._parsedProgress$=this._attributeChanges$.pipe(st(([t])=>t==="progress"),T(([t,n])=>n),T(Number),st(t=>Number.isInteger(t)&&t<=100)),this._parsedIndeterminateProgress$=this._attributeChanges$.pipe(st(([t])=>t==="indeterminate-progress"),T(([t,n])=>n),T(t=>t!==null)),this._parsedDisabled$=this._attributeChanges$.pipe(st(([t])=>t==="disabled"),T(([t,n])=>n),T(t=>t!==null&&t!=="false")),this._loading$=this._parsedProgress$.pipe(Rt(this._parsedIndeterminateProgress$),Mo(),dt(0)),this._activeIndeterminateProgress$=this._parsedIndeterminateProgress$.pipe(dt(!1)),this._disabled$=this._parsedDisabled$.pipe(Rt(this._activeIndeterminateProgress$,this._loading$),Lo(),dt(!1)),this._loadingBarTransitionEnabled$=this._loading$.pipe(uo(),T(([t,n])=>n>=t),dt(!1))}static get observedAttributes(){return["progress","disabled","indeterminate-progress"]}async connectedCallback(){this.attachShadow({mode:"open"}),A(this).appendChild(Ro.content.cloneNode(!0)),this._renderSubscription=this._disabled$.pipe(Rt(this._loading$,this._activeIndeterminateProgress$,this._loadingBarTransitionEnabled$)).subscribe(n=>{this.render(...n)}),this._attributeChanges$.next(["disabled",this.getAttribute("disabled")]),this._attributeChanges$.next(["progress",this.getAttribute("progress")]),this._attributeChanges$.next(["indeterminate-progress",this.getAttribute("indeterminate-progress")])}attributeChangedCallback(t){this._attributeChanges$.next([t,this.getAttribute(t)])}render(t,n,r,i){if(!this.shadowRoot)return;const o=A(this),s=O(o,"#progress"),a=O(o,"button"),c=O(o,"progress");a instanceof HTMLButtonElement&&(a.disabled=t),r?(a.classList.remove("indeterminate-loading-end"),a.classList.add("indeterminate-loading"),c instanceof HTMLProgressElement&&c.removeAttribute("value")):(a.classList.add("indeterminate-loading-end"),setTimeout(()=>{a.classList.remove("indeterminate-loading")},500)),i?s.classList.add("transition"):s.classList.remove("transition"),s.style.width=`${n}%`,!r&&c instanceof HTMLProgressElement&&(c.value=n)}disconnectedCallback(){this._clickSubscription?.unsubscribe(),this._renderSubscription?.unsubscribe()}}customElements.define(jo,No);const Ro=K(Ho`
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
`),vt=rt.bind(J),qo="crumbs-nav",Fo=K(vt`
	<style>
		:host {
			display: block;
		}

		.selected-title {
			background: linear-gradient(0deg, rgba(255, 255, 255, 0.46) 0%, rgba(255, 255, 255, 0.44) 100%);
			border-radius: 0.3rem;
		}

		#navbar {
			display: flex;
			justify-content: space-around;
			background: linear-gradient(0deg, rgba(255, 255, 255, 0.46) 0%, rgba(255, 255, 255, 0.44) 100%);
			border-radius: 0.3rem;
			box-shadow: 2px 10px 50px 5px rgba(26, 25, 25, 0.47);
			margin: 1rem;
			padding: 1rem;
			/*backdrop-filter: blur(0.3rem);*/

			& > div {
				flex-grow: 1;
				display: grid;
				place-content: center;
				padding: 1rem;
				cursor: pointer;
				width: max-content;
				user-select: none;
			}
		}

		.content {
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
				display: grid;
				place-content: center;
				overflow: hidden;

				& > div {
					transition: transform 0.1s ease;
					display: grid;
					place-content: center;
				}
			}
		}

		.content-nav-mode {
			& > div {
				& > div {
					transform: scale(0.5);

					&:hover {
						transform: scale(0.6);
					}
				}
			}
		}

		.content-nav-mode2 {
			grid-auto-flow: initial;
			grid-template-columns: repeat(auto-fit, 32%);
			grid-template-rows: repeat(auto-fit, 32%);
			gap: 1px;
			justify-content: space-around;

			& > div {
				& > div {
					width: 100vw;
				}
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
		<div id="content" className="content"></div>
		<div id="navbar"></div>
	</div>
`);class Uo extends HTMLElement{selected=1;subscriptions=[];navOpen=!1;async connectedCallback(){this.attachShadow({mode:"open"});const t=A(this),n=Fo.content.cloneNode(!0);t.appendChild(n);const r=this.getAttribute("selected");this.selected=Number.parseInt(r||"1",10);const i=t.querySelector("#content"),o=t.querySelector("#navbar");if(!(i instanceof HTMLElement))throw new Error("Content is not HTMLElement !");if(!(o instanceof HTMLElement))throw new Error("navbar is not HTMLElement !");for(const s of{[Symbol.iterator]:()=>this.getSlots()}){if(s.startsWith("content-")){const a=vt`<div id=${`${s}`}> <div> <slot name=${s}></slot> </div> </div>`;a instanceof HTMLElement&&i instanceof HTMLElement&&(i.appendChild(a),this.subscriptions.push(H(a,"click").subscribe(c=>{if(!this.navOpen)return;c.stopPropagation(),c.preventDefault();const u=c.target;u instanceof HTMLElement&&(setTimeout(()=>{u.scrollIntoView({behavior:"instant"})},50),this.navOpen=!1,this.render())})))}if(s.startsWith("title-")){const a=vt`<div id=${s}> <crumbs-p> <slot name=${s}></slot> </crumbs-p> </div>`;a instanceof Element&&(o.appendChild(a),this.subscriptions.push(H(a,"click").subscribe(c=>{if(this.navOpen)return;const u=s.replace("title-","content-"),f=t.querySelector(`#${u}`);f instanceof HTMLElement&&(f.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.selected=Number.parseInt(s.split("-")[1]),this.render())})))}if(s.startsWith("navigation-toggle")){const a=vt`<div id=${s}> <crumbs-p> <slot name=${s}></slot> </crumbs-p> </div>`;a instanceof Element&&(o.appendChild(a),this.subscriptions.push(H(a,"click").subscribe(c=>{if(this.navOpen)return;t.querySelector(`#${s}`)instanceof HTMLElement&&(this.navOpen=!0,this.render())})))}}this.render()}async render(){const t=A(this),n=t.querySelector("#content"),r=t.querySelector("#navbar");if(!n)throw new Error("Content not found");if(!(r instanceof HTMLElement))throw new Error("navbar is not HTMLElement !");r.style.visibility=this.navOpen?"hidden":"visible",[...r.children].forEach(i=>{Number.parseInt(i.id.split("-")[1])===this.selected?i instanceof HTMLElement&&i.classList.add("selected-title"):i instanceof HTMLElement&&i.classList.remove("selected-title")}),n.style.willChange="auto";for(const i of{[Symbol.iterator]:()=>this.getSlots()})if(i.startsWith("content-")){const o=t.querySelector(i);o instanceof HTMLElement&&(o.style.willChange="auto")}await new Promise(i=>setTimeout(i,5)),this.navOpen?(n.classList.add("content-nav-mode"),await new Promise(i=>setTimeout(i,105))):n.classList.remove("content-nav-mode2"),this.navOpen?n.classList.add("content-nav-mode2"):n.classList.remove("content-nav-mode");for(const i of{[Symbol.iterator]:()=>this.getSlots()})if(i.startsWith("content-")){const o=t.querySelector(i);o instanceof HTMLElement&&(o.style.willChange="initial")}n.style.willChange="initial"}disconnectedCallback(){for(const t of this.subscriptions)t.unsubscribe()}*getSlots(){for(const t of Array.from(this.children)){const n=t.getAttribute("slot");n&&(yield n)}}}customElements.define(qo,Uo);const Do=rt.bind(J),zo="crumbs-frame",Bo=K(Do`
    <style>
        :host {
            display: block;
        }

        .frameold {
			border: 2px inset #0000001c;
            border-radius: 6px;
            padding: 1rem;
            margin: 1rem;
            background-color: #ffffff26;
        }

        .frame {
            padding: 3rem;
        }
    </style>

    <div className="frame">
        <slot></slot>
    </div>
`);class Wo extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const t=A(this),n=Bo.content.cloneNode(!0);t.appendChild(n)}}customElements.define(zo,Wo);let Vo={data:""},Yo=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||Vo},Go=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Jo=/\/\*[^]*?\*\/|  +/g,Ie=/\n+/g,V=(e,t)=>{let n="",r="",i="";for(let o in e){let s=e[o];o[0]=="@"?o[1]=="i"?n=o+" "+s+";":r+=o[1]=="f"?V(s,o):o+"{"+V(s,o[1]=="k"?"":t)+"}":typeof s=="object"?r+=V(s,t?t.replace(/([^,])+/g,a=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,a):a?a+" "+c:c)):o):s!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=V.p?V.p(o,s):o+":"+s+";")}return n+(t&&i?t+"{"+i+"}":i)+r},F={},$n=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+$n(e[n]);return t}return e},Ko=(e,t,n,r,i)=>{let o=$n(e),s=F[o]||(F[o]=(c=>{let u=0,f=11;for(;u<c.length;)f=101*f+c.charCodeAt(u++)>>>0;return"go"+f})(o));if(!F[s]){let c=o!==e?e:(u=>{let f,l,d=[{}];for(;f=Go.exec(u.replace(Jo,""));)f[4]?d.shift():f[3]?(l=f[3].replace(Ie," ").trim(),d.unshift(d[0][l]=d[0][l]||{})):d[0][f[1]]=f[2].replace(Ie," ").trim();return d[0]})(e);F[s]=V(i?{["@keyframes "+s]:c}:c,n?"":"."+s)}let a=n&&F.g?F.g:null;return n&&(F.g=F[s]),((c,u,f,l)=>{l?u.data=u.data.replace(l,c):u.data.indexOf(c)===-1&&(u.data=f?c+u.data:u.data+c)})(F[s],t,r,a),s},Qo=(e,t,n)=>e.reduce((r,i,o)=>{let s=t[o];if(s&&s.call){let a=s(n),c=a&&a.props&&a.props.className||/^go/.test(a)&&a;s=c?"."+c:a&&typeof a=="object"?a.props?"":V(a,""):a===!1?"":a}return r+i+(s??"")},"");function P(e){let t=this||{},n=e.call?e(t.p):e;return Ko(n.unshift?n.raw?Qo(n,[].slice.call(arguments,1),t.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):n,Yo(t.target),t.g,t.o,t.k)}P.bind({g:1});P.bind({k:1});var kt,g,xn,Y,Ce,Sn,En,Tn,ce,Wt,Vt,at={},kn=[],Zo=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,It=Array.isArray;function U(e,t){for(var n in t)e[n]=t[n];return e}function ue(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function In(e,t,n){var r,i,o,s={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:s[o]=t[o];if(arguments.length>2&&(s.children=arguments.length>3?kt.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)s[o]===void 0&&(s[o]=e.defaultProps[o]);return _t(e,s,r,i,null)}function _t(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++xn,__i:-1,__u:0};return i==null&&g.vnode!=null&&g.vnode(o),o}function Ct(e){return e.children}function yt(e,t){this.props=e,this.context=t}function nt(e,t){if(t==null)return e.__?nt(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?nt(e):null}function Cn(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Cn(e)}}function Oe(e){(!e.__d&&(e.__d=!0)&&Y.push(e)&&!$t.__r++||Ce!=g.debounceRendering)&&((Ce=g.debounceRendering)||Sn)($t)}function $t(){for(var e,t,n,r,i,o,s,a=1;Y.length;)Y.length>a&&Y.sort(En),e=Y.shift(),a=Y.length,e.__d&&(n=void 0,r=void 0,i=(r=(t=e).__v).__e,o=[],s=[],t.__P&&((n=U({},r)).__v=r.__v+1,g.vnode&&g.vnode(n),le(t.__P,n,r,t.__n,t.__P.namespaceURI,32&r.__u?[i]:null,o,i??nt(r),!!(32&r.__u),s),n.__v=r.__v,n.__.__k[n.__i]=n,An(o,n,s),r.__e=r.__=null,n.__e!=i&&Cn(n)));$t.__r=0}function On(e,t,n,r,i,o,s,a,c,u,f){var l,d,p,v,h,b,_,m=r&&r.__k||kn,M=t.length;for(c=Xo(n,t,m,c,M),l=0;l<M;l++)(p=n.__k[l])!=null&&(d=p.__i==-1?at:m[p.__i]||at,p.__i=l,b=le(e,p,d,i,o,s,a,c,u,f),v=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&fe(d.ref,null,p),f.push(p.ref,p.__c||v,p)),h==null&&v!=null&&(h=v),(_=!!(4&p.__u))||d.__k===p.__k?c=Pn(p,c,e,_):typeof p.type=="function"&&b!==void 0?c=b:v&&(c=v.nextSibling),p.__u&=-7);return n.__e=h,c}function Xo(e,t,n,r,i){var o,s,a,c,u,f=n.length,l=f,d=0;for(e.__k=new Array(i),o=0;o<i;o++)(s=t[o])!=null&&typeof s!="boolean"&&typeof s!="function"?(c=o+d,(s=e.__k[o]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?_t(null,s,null,null,null):It(s)?_t(Ct,{children:s},null,null,null):s.constructor==null&&s.__b>0?_t(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=e,s.__b=e.__b+1,a=null,(u=s.__i=ti(s,n,c,l))!=-1&&(l--,(a=n[u])&&(a.__u|=2)),a==null||a.__v==null?(u==-1&&(i>f?d--:i<f&&d++),typeof s.type!="function"&&(s.__u|=4)):u!=c&&(u==c-1?d--:u==c+1?d++:(u>c?d--:d++,s.__u|=4))):e.__k[o]=null;if(l)for(o=0;o<f;o++)(a=n[o])!=null&&(2&a.__u)==0&&(a.__e==r&&(r=nt(a)),Mn(a,a));return r}function Pn(e,t,n,r){var i,o;if(typeof e.type=="function"){for(i=e.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=e,t=Pn(i[o],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=nt(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function ti(e,t,n,r){var i,o,s,a=e.key,c=e.type,u=t[n],f=u!=null&&(2&u.__u)==0;if(u===null&&e.key==null||f&&a==u.key&&c==u.type)return n;if(r>(f?1:0)){for(i=n-1,o=n+1;i>=0||o<t.length;)if((u=t[s=i>=0?i--:o++])!=null&&(2&u.__u)==0&&a==u.key&&c==u.type)return s}return-1}function Pe(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Zo.test(t)?n:n+"px"}function ht(e,t,n,r,i){var o,s;t:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Pe(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||Pe(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Tn,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n.u=r.u:(n.u=ce,e.addEventListener(t,o?Vt:Wt,o)):e.removeEventListener(t,o?Vt:Wt,o);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Ae(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=ce++;else if(t.t<n.u)return;return n(g.event?g.event(t):t)}}}function le(e,t,n,r,i,o,s,a,c,u){var f,l,d,p,v,h,b,_,m,M,E,w,$,C,q,it,At,N=t.type;if(t.constructor!=null)return null;128&n.__u&&(c=!!(32&n.__u),o=[a=t.__e=n.__e]),(f=g.__b)&&f(t);t:if(typeof N=="function")try{if(_=t.props,m="prototype"in N&&N.prototype.render,M=(f=N.contextType)&&r[f.__c],E=f?M?M.props.value:f.__:r,n.__c?b=(l=t.__c=n.__c).__=l.__E:(m?t.__c=l=new N(_,E):(t.__c=l=new yt(_,E),l.constructor=N,l.render=ni),M&&M.sub(l),l.props=_,l.state||(l.state={}),l.context=E,l.__n=r,d=l.__d=!0,l.__h=[],l._sb=[]),m&&l.__s==null&&(l.__s=l.state),m&&N.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=U({},l.__s)),U(l.__s,N.getDerivedStateFromProps(_,l.__s))),p=l.props,v=l.state,l.__v=t,d)m&&N.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),m&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(m&&N.getDerivedStateFromProps==null&&_!==p&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(_,E),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(_,l.__s,E)===!1||t.__v==n.__v){for(t.__v!=n.__v&&(l.props=_,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(Z){Z&&(Z.__=t)}),w=0;w<l._sb.length;w++)l.__h.push(l._sb[w]);l._sb=[],l.__h.length&&s.push(l);break t}l.componentWillUpdate!=null&&l.componentWillUpdate(_,l.__s,E),m&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(p,v,h)})}if(l.context=E,l.props=_,l.__P=e,l.__e=!1,$=g.__r,C=0,m){for(l.state=l.__s,l.__d=!1,$&&$(t),f=l.render(l.props,l.state,l.context),q=0;q<l._sb.length;q++)l.__h.push(l._sb[q]);l._sb=[]}else do l.__d=!1,$&&$(t),f=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++C<25);l.state=l.__s,l.getChildContext!=null&&(r=U(U({},r),l.getChildContext())),m&&!d&&l.getSnapshotBeforeUpdate!=null&&(h=l.getSnapshotBeforeUpdate(p,v)),it=f,f!=null&&f.type===Ct&&f.key==null&&(it=Ln(f.props.children)),a=On(e,It(it)?it:[it],t,n,r,i,o,s,a,c,u),l.base=t.__e,t.__u&=-161,l.__h.length&&s.push(l),b&&(l.__E=l.__=null)}catch(Z){if(t.__v=null,c||o!=null)if(Z.then){for(t.__u|=c?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;o[o.indexOf(a)]=null,t.__e=a}else{for(At=o.length;At--;)ue(o[At]);Yt(t)}else t.__e=n.__e,t.__k=n.__k,Z.then||Yt(t);g.__e(Z,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):a=t.__e=ei(n.__e,t,n,r,i,o,s,c,u);return(f=g.diffed)&&f(t),128&t.__u?void 0:a}function Yt(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Yt)}function An(e,t,n){for(var r=0;r<n.length;r++)fe(n[r],n[++r],n[++r]);g.__c&&g.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(o){o.call(i)})}catch(o){g.__e(o,i.__v)}})}function Ln(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:It(e)?e.map(Ln):U({},e)}function ei(e,t,n,r,i,o,s,a,c){var u,f,l,d,p,v,h,b=n.props,_=t.props,m=t.type;if(m=="svg"?i="http://www.w3.org/2000/svg":m=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),o!=null){for(u=0;u<o.length;u++)if((p=o[u])&&"setAttribute"in p==!!m&&(m?p.localName==m:p.nodeType==3)){e=p,o[u]=null;break}}if(e==null){if(m==null)return document.createTextNode(_);e=document.createElementNS(i,m,_.is&&_),a&&(g.__m&&g.__m(t,o),a=!1),o=null}if(m==null)b===_||a&&e.data==_||(e.data=_);else{if(o=o&&kt.call(e.childNodes),b=n.props||at,!a&&o!=null)for(b={},u=0;u<e.attributes.length;u++)b[(p=e.attributes[u]).name]=p.value;for(u in b)if(p=b[u],u!="children"){if(u=="dangerouslySetInnerHTML")l=p;else if(!(u in _)){if(u=="value"&&"defaultValue"in _||u=="checked"&&"defaultChecked"in _)continue;ht(e,u,null,p,i)}}for(u in _)p=_[u],u=="children"?d=p:u=="dangerouslySetInnerHTML"?f=p:u=="value"?v=p:u=="checked"?h=p:a&&typeof p!="function"||b[u]===p||ht(e,u,p,b[u],i);if(f)a||l&&(f.__html==l.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(l&&(e.innerHTML=""),On(t.type=="template"?e.content:e,It(d)?d:[d],t,n,r,m=="foreignObject"?"http://www.w3.org/1999/xhtml":i,o,s,o?o[0]:n.__k&&nt(n,0),a,c),o!=null)for(u=o.length;u--;)ue(o[u]);a||(u="value",m=="progress"&&v==null?e.removeAttribute("value"):v!=null&&(v!==e[u]||m=="progress"&&!v||m=="option"&&v!=b[u])&&ht(e,u,v,b[u],i),u="checked",h!=null&&h!=e[u]&&ht(e,u,h,b[u],i))}return e}function fe(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(i){g.__e(i,n)}}function Mn(e,t,n){var r,i;if(g.unmount&&g.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||fe(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){g.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Mn(r[i],t,n||typeof e.type!="function");n||ue(e.__e),e.__c=e.__=e.__e=void 0}function ni(e,t,n){return this.constructor(e,n)}function ri(e,t,n){var r,i,o,s;t==document&&(t=document.documentElement),g.__&&g.__(e,t),i=(r=!1)?null:t.__k,o=[],s=[],le(t,e=t.__k=In(Ct,null,[e]),i||at,at,t.namespaceURI,i?null:t.firstChild?kt.call(t.childNodes):null,o,i?i.__e:t.firstChild,r,s),An(o,e,s)}kt=kn.slice,g={__e:function(e,t,n,r){for(var i,o,s;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),s=i.__d),s)return i.__E=i}catch(a){e=a}throw e}},xn=0,yt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=U({},this.state),typeof e=="function"&&(e=e(U({},n),this.props)),e&&U(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Oe(this))},yt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Oe(this))},yt.prototype.render=Ct,Y=[],Sn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,En=function(e,t){return e.__v.__b-t.__v.__b},$t.__r=0,Tn=/(PointerCapture)$|Capture$/i,ce=0,Wt=Ae(!1),Vt=Ae(!0);var Hn=function(e,t,n,r){var i;t[0]=0;for(var o=1;o<t.length;o++){var s=t[o++],a=t[o]?(t[0]|=s?1:2,n[t[o++]]):t[++o];s===3?r[0]=a:s===4?r[1]=Object.assign(r[1]||{},a):s===5?(r[1]=r[1]||{})[t[++o]]=a:s===6?r[1][t[++o]]+=a+"":s?(i=e.apply(a,Hn(e,a,n,["",null])),r.push(i),a[0]?t[0]|=2:(t[o-2]=0,t[o]=i)):r.push(a)}return r},Le=new Map;function oi(e){var t=Le.get(this);return t||(t=new Map,Le.set(this,t)),(t=Hn(this,t.get(e)||(t.set(e,t=(function(n){for(var r,i,o=1,s="",a="",c=[0],u=function(d){o===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,d,s):o===3&&(d||s)?(c.push(3,d,s),o=2):o===2&&s==="..."&&d?c.push(4,d,0):o===2&&s&&!d?c.push(5,0,!0,s):o>=5&&((s||!d&&o===5)&&(c.push(o,0,s,i),o=6),d&&(c.push(o,d,0,i),o=6)),s=""},f=0;f<n.length;f++){f&&(o===1&&u(),u(f));for(var l=0;l<n[f].length;l++)r=n[f][l],o===1?r==="<"?(u(),c=[c],o=3):s+=r:o===4?s==="--"&&r===">"?(o=1,s=""):s=r+s[0]:a?r===a?a="":s+=r:r==='"'||r==="'"?a=r:r===">"?(u(),o=1):o&&(r==="="?(o=5,i=s,s=""):r==="/"&&(o<5||n[f][l+1]===">")?(u(),o===3&&(c=c[0]),o=c,(c=c[0]).push(2,0,o),o=0):r===" "||r==="	"||r===`
`||r==="\r"?(u(),o=2):s+=r),o===3&&s==="!--"&&(o=4,c=c[0])}return u(),c})(e)),t),arguments,[])).length>1?t:t[0]}var L=oi.bind(In),ct,x,qt,Me,ut=0,jn=[],S=g,He=S.__b,je=S.__r,Ne=S.diffed,Re=S.__c,qe=S.unmount,Fe=S.__;function pe(e,t){S.__h&&S.__h(x,e,ut||t),ut=0;var n=x.__H||(x.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function k(e){return ut=1,ii(qn,e)}function ii(e,t,n){var r=pe(ct++,2);if(r.t=e,!r.__c&&(r.__=[qn(void 0,t),function(a){var c=r.__N?r.__N[0]:r.__[0],u=r.t(c,a);c!==u&&(r.__N=[u,r.__[1]],r.__c.setState({}))}],r.__c=x,!x.__f)){var i=function(a,c,u){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(d){return!!d.__c});if(f.every(function(d){return!d.__N}))return!o||o.call(this,a,c,u);var l=r.__c.props!==a;return f.forEach(function(d){if(d.__N){var p=d.__[0];d.__=d.__N,d.__N=void 0,p!==d.__[0]&&(l=!0)}}),o&&o.call(this,a,c,u)||l};x.__f=!0;var o=x.shouldComponentUpdate,s=x.componentWillUpdate;x.componentWillUpdate=function(a,c,u){if(this.__e){var f=o;o=void 0,i(a,c,u),o=f}s&&s.call(this,a,c,u)},x.shouldComponentUpdate=i}return r.__N||r.__}function si(e,t){var n=pe(ct++,3);!S.__s&&Rn(n.__H,t)&&(n.__=e,n.u=t,x.__H.__h.push(n))}function ai(e){return ut=5,Nn(function(){return{current:e}},[])}function Nn(e,t){var n=pe(ct++,7);return Rn(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function ci(e,t){return ut=8,Nn(function(){return e},t)}function ui(){for(var e;e=jn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(gt),e.__H.__h.forEach(Gt),e.__H.__h=[]}catch(t){e.__H.__h=[],S.__e(t,e.__v)}}S.__b=function(e){x=null,He&&He(e)},S.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Fe&&Fe(e,t)},S.__r=function(e){je&&je(e),ct=0;var t=(x=e.__c).__H;t&&(qt===x?(t.__h=[],x.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(gt),t.__h.forEach(Gt),t.__h=[],ct=0)),qt=x},S.diffed=function(e){Ne&&Ne(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(jn.push(t)!==1&&Me===S.requestAnimationFrame||((Me=S.requestAnimationFrame)||li)(ui)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),qt=x=null},S.__c=function(e,t){t.some(function(n){try{n.__h.forEach(gt),n.__h=n.__h.filter(function(r){return!r.__||Gt(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],S.__e(r,n.__v)}}),Re&&Re(e,t)},S.unmount=function(e){qe&&qe(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{gt(r)}catch(i){t=i}}),n.__H=void 0,t&&S.__e(t,n.__v))};var Ue=typeof requestAnimationFrame=="function";function li(e){var t,n=function(){clearTimeout(r),Ue&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Ue&&(t=requestAnimationFrame(n))}function gt(e){var t=x,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),x=t}function Gt(e){var t=x;e.__c=e.__(),x=t}function Rn(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function qn(e,t){return typeof t=="function"?t(e):t}function xt(e,t){var n=k(t),r=n[0],i=n[1],o=ai(e);return si(function(){var s=o.current.subscribe(i);return function(){return s.unsubscribe()}}),r}var Jt=function(e,t){return Jt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Jt(e,t)};function Ot(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Jt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function Kt(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Qt(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],s;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function Zt(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function D(e){return typeof e=="function"}function Fn(e){var t=function(r){Error.call(r),r.stack=new Error().stack},n=e(t);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Ft=Fn(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function Xt(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var Pt=(function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,n,r,i,o;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var a=Kt(s),c=a.next();!c.done;c=a.next()){var u=c.value;u.remove(this)}}catch(h){t={error:h}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}else s.remove(this);var f=this.initialTeardown;if(D(f))try{f()}catch(h){o=h instanceof Ft?h.errors:[h]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var d=Kt(l),p=d.next();!p.done;p=d.next()){var v=p.value;try{De(v)}catch(h){o=o??[],h instanceof Ft?o=Zt(Zt([],Qt(o)),Qt(h.errors)):o.push(h)}}}catch(h){r={error:h}}finally{try{p&&!p.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(o)throw new Ft(o)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)De(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}},e.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},e.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},e.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&Xt(n,t)},e.prototype.remove=function(t){var n=this._finalizers;n&&Xt(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=(function(){var t=new e;return t.closed=!0,t})(),e})(),Un=Pt.EMPTY;function Dn(e){return e instanceof Pt||e&&"closed"in e&&D(e.remove)&&D(e.add)&&D(e.unsubscribe)}function De(e){D(e)?e():e.unsubscribe()}var fi={Promise:void 0},pi={setTimeout:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,Zt([e,t],Qt(n)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function di(e){pi.setTimeout(function(){throw e})}function ze(){}function wt(e){e()}var zn=(function(e){Ot(t,e);function t(n){var r=e.call(this)||this;return r.isStopped=!1,n?(r.destination=n,Dn(n)&&n.add(r)):r.destination=mi,r}return t.create=function(n,r,i){return new te(n,r,i)},t.prototype.next=function(n){this.isStopped||this._next(n)},t.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t})(Pt),hi=(function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){bt(r)}},e.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){bt(r)}else bt(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){bt(n)}},e})(),te=(function(e){Ot(t,e);function t(n,r,i){var o=e.call(this)||this,s;return D(n)||!n?s={next:n??void 0,error:r??void 0,complete:i??void 0}:s=n,o.destination=new hi(s),o}return t})(zn);function bt(e){di(e)}function bi(e){throw e}var mi={closed:!0,next:ze,error:bi,complete:ze},vi=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function _i(e){return e}function yi(e){return e.length===0?_i:e.length===1?e[0]:function(n){return e.reduce(function(r,i){return i(r)},n)}}var Be=(function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(t,n,r){var i=this,o=wi(t)?t:new te(t,n,r);return wt(function(){var s=i,a=s.operator,c=s.source;o.add(a?a.call(o,c):c?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},e.prototype.forEach=function(t,n){var r=this;return n=We(n),new n(function(i,o){var s=new te({next:function(a){try{t(a)}catch(c){o(c),s.unsubscribe()}},error:o,complete:i});r.subscribe(s)})},e.prototype._subscribe=function(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)},e.prototype[vi]=function(){return this},e.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return yi(t)(this)},e.prototype.toPromise=function(t){var n=this;return t=We(t),new t(function(r,i){var o;n.subscribe(function(s){return o=s},function(s){return i(s)},function(){return r(o)})})},e.create=function(t){return new e(t)},e})();function We(e){var t;return(t=e??fi.Promise)!==null&&t!==void 0?t:Promise}function gi(e){return e&&D(e.next)&&D(e.error)&&D(e.complete)}function wi(e){return e&&e instanceof zn||gi(e)&&Dn(e)}var $i=Fn(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),de=(function(e){Ot(t,e);function t(){var n=e.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return t.prototype.lift=function(n){var r=new Ve(this,this);return r.operator=n,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new $i},t.prototype.next=function(n){var r=this;wt(function(){var i,o;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=Kt(r.currentObservers),a=s.next();!a.done;a=s.next()){var c=a.value;c.next(n)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(o=s.return)&&o.call(s)}finally{if(i)throw i.error}}}})},t.prototype.error=function(n){var r=this;wt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},t.prototype.complete=function(){var n=this;wt(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(n){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,n)},t.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},t.prototype._innerSubscribe=function(n){var r=this,i=this,o=i.hasError,s=i.isStopped,a=i.observers;return o||s?Un:(this.currentObservers=null,a.push(n),new Pt(function(){r.currentObservers=null,Xt(a,n)}))},t.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,o=r.thrownError,s=r.isStopped;i?n.error(o):s&&n.complete()},t.prototype.asObservable=function(){var n=new Be;return n.source=this,n},t.create=function(n,r){return new Ve(n,r)},t})(Be),Ve=(function(e){Ot(t,e);function t(n,r){var i=e.call(this)||this;return i.destination=n,i.source=r,i}return t.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},t.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},t.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},t.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:Un},t})(de);let Bn=4;const Wn=new de,Vn=Wn.asObservable();function Yn(){return Bn}function X(e){Bn=e,Wn.next(e)}let Gn="initial";const Jn=new de,Kn=Jn.asObservable();function Qn(){return Gn}function W(e){Gn=e,Jn.next(e)}const xi=P`
	height: 70cqh;
`,Ye=P`
	min-height: 95%;
	display: grid;
	align-content: space-evenly;
`,Ge=P`
	display: grid;
	justify-content: center;
`;function ot({title:e,children:t,order:n}){return L`
		<span slot=${`title-${n}`}>${e}</span>
		<crumbs-panel panel-title=${e} slot=${`content-${n}`} className=${xi}>
			<crumbs-tabs style="height: 100%;">
				<span slot="title-1"> Demo </span>
				<div className=${Ye} slot="content-1">
					<crumbs-frame className=${Ge}>
						${t[0]}
					</crumbs-frame>
					<crumbs-frame className=${Ge}>
						<crumbs-p>
							<h3>Parameters</h3>
						</crumbs-p>
						${t[1]}
					</crumbs-frame>
				</div>
				<span slot="title-3"> Code </span>
				<div className=${Ye} slot="content-3">${t[2]}</div>
			</crumbs-tabs>
		</crumbs-panel>
	`}function Si({order:e}){const[t,n]=k("I'm an input !"),r=`&lt;crumbs-input
	value="${t}"&gt;
&lt;/crumbs-input&gt;`;return L`
		<${ot} title="Input" order=${e}>
			<crumbs-input
				value=${t}
				oninput=${i=>n(i.originalTarget.value)}
			/>

			<div>
				<crumbs-p>Input's value</crumbs-p>

				<crumbs-input
					value=${t}
					oninput=${i=>n(i.originalTarget.value)}
				/>
			</div>

			<code> <pre dangerouslySetInnerHTML=${{__html:r}}> </pre></code>
		<//>
	`}function Ei({order:e}){const[t,n]=k("I'm a <b>paragraph</b> !");return L`
		<${ot} title="Paragraph" order=${e}>
			<div>
				<crumbs-p dangerouslySetInnerHTML=${{__html:t}}>
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
			<crumbs-input type="text" value=${t} onInput=${r=>n(r.originalTarget.value)} />
			<code> <pre dangerouslySetInnerHTML=${{__html:`&lt;crumbs-p&gt; ${t} &lt;/crumbs-p&gt;`}}> </pre></code>
		<//>
	`}function Ti({order:e}){const[t,n]=k("I'm a panel !"),[r,i]=k(""),[o,s]=k("100"),[a,c]=k(!1),u=`&lt;crumbs-panel
	panel-title="${r}"
	panel-loading="${o}"&gt;
	${t}
&lt;/crumbs-panel&gt;`,f=ci(async()=>{if(!a){c(!0),s("0");for(let d=0;d<=100;d+=.1+(100-d)/100)await new Promise(p=>setTimeout(p,10)),s(Math.floor(d).toString());s("100"),c(!1)}},[a]);return L`
		<${ot} title="Panel" order=${e}>
			<crumbs-panel
				panel-loading=${o}
				panel-title=${r}>
				${t}
			</crumbs-panel>

			<div>
				<crumbs-p>Title</crumbs-p>

				<crumbs-input
					type="text"
					value=${r}
					onInput=${d=>i(d.originalTarget.value)}
				/>

				<crumbs-p>Content</crumbs-p>

				<crumbs-input
					type="text"
					value=${t}
					onInput=${d=>n(d.originalTarget.value)}
				/>

				<crumbs-p> Loading </crumbs-p>

				<input
					type="range"
					value=${o}
					onInput=${d=>s(String(d.target.value))}
					min="0"
					max="100"
				/>

				<br/>

				<crumbs-button onClick=${()=>{a||f()}}> Simulate loading </crumbs-button>
			</div>

			<code> <pre dangerouslySetInnerHTML=${{__html:u}}> </pre></code>
		<//>
	`}function ki({order:e}){const[t,n]=k("Tab content"),[r,i]=k("Tab title"),[o,s]=k("Tab content 2"),[a,c]=k("Tab title 2"),u=`&lt;crumbs-tabs&gt;
	&lt;crumbs-p
		slot="title-1"&gt;
		${r}
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot="content-1"&gt;
		${t}
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot="title-2"&gt;
		${a}
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot="content-2"&gt;
		${o}
	&lt;/crumbs-p&gt;
&lt;/crumbs-panel&gt;`;return L`
		<${ot} title="Tabs" order=${e}>
			<crumbs-tabs>
				<crumbs-p slot="title-1"> ${r} </crumbs-p>
				<crumbs-p slot="content-1"> ${t} </crumbs-p>
				<crumbs-p slot="title-2"> ${a} </crumbs-p>
				<crumbs-p slot="content-2"> ${o} </crumbs-p>
			</crumbs-tabs>

			<div>
				<crumbs-p>Title</crumbs-p>

				<crumbs-input
					type="text"
					value=${r}
					onInput=${f=>i(f.originalTarget.value)}
				/>

				<crumbs-p>Content</crumbs-p>

				<crumbs-input
					type="text"
					value=${t}
					onInput=${f=>n(f.originalTarget.value)}
				/>

				<crumbs-p>Title 2</crumbs-p>

				<crumbs-input
					type="text"
					value=${a}
					onInput=${f=>c(f.originalTarget.value)}
				/>

				<crumbs-p>Content 2</crumbs-p>

				<crumbs-input
					type="text"
					value=${o}
					onInput=${f=>s(f.originalTarget.value)}
				/>
			</div>

			<code> <pre dangerouslySetInnerHTML=${{__html:u}}> </pre></code>
		<//>
	`}const Ii=P`
	max-width: 36rem;
	max-height: 70cqh;
`;function Ci({order:e}){return L`
		<span slot=${`title-${e}`}> About</span>
		<crumbs-panel panel-title="About" slot=${`content-${e}`} className=${Ii}>
			<crumbs-tabs>
				<div slot="title-1">Crumbs ?</div>

				<div slot="content-1">
					<crumbs-p>
						Crumbs is a web component library
						that you can use to build your own website.
					</crumbs-p>				

					<crumbs-p>
						<b>Purpose</b>
					</crumbs-p>

					<crumbs-p>
						This library is made for myself and reflects my own design preferences.
						Anyone is welcome to use it and modify it.
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
	`}function Oi({order:e}){const t=xt(Vn,Yn),n=xt(Kn,Qn),r=P`
		max-height: 70cqh;
	`,i=P`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`,o=P`
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
		grid-gap: 0.5rem;

		& > div {
			display: grid;
			grid-template-columns: auto 1fr;
			place-content: center;
			text-align: center;
		}
	`;return L`
		<span slot=${`title-${e}`}>Personalization</span>
		<crumbs-panel panel-title="Personalization" slot=${`content-${e}`} className=${r}>
			<div className=${i}>
				<crumbs-p>
					Some samples to demonstrate personalization.
				</crumbs-p>

				<crumbs-tabs>	
					<crumbs-p slot="title-1"> Background </crumbs-p>

					<div slot="content-1" class=${o}>
						<div>
							<input type="radio" checked=${t===1} onInput=${()=>X(1)}/>
							<crumbs-p> Dog </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${t===2} onInput=${()=>X(2)}/>
							<crumbs-p> Abstract </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${t===3} onInput=${()=>X(3)}/>
							<crumbs-p> Leaf </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${t===4} onInput=${()=>X(4)}/>
							<crumbs-p> Cat </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${t===5} onInput=${()=>X(5)}/>
							<crumbs-p> Pug </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${t===6} onInput=${()=>X(6)}/>
							<crumbs-p> Crystal </crumbs-p>
						</div>
					</div>

					<crumbs-p slot="title-2"> Font </crumbs-p>

					<div slot="content-2" class=${o}>
						<div>
							<input type="radio" checked=${n==="initial"} onInput=${()=>W("initial")}/>
							<crumbs-p> Default </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${n==="monospace"} onInput=${()=>W("monospace")}/>
							<crumbs-p> Monospace </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${n==="serif"} onInput=${()=>W("serif")}/>
							<crumbs-p> Serif </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${n==="sans-serif"} onInput=${()=>W("sans-serif")}/>
							<crumbs-p> Sans-serif </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${n==="cursive"} onInput=${()=>W("cursive")}/>
							<crumbs-p> Cursive </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${n==="fantasy"} onInput=${()=>W("fantasy")}/>
							<crumbs-p> Fantasy </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${n==="system-ui"} onInput=${()=>W("system-ui")}/>
							<crumbs-p> System </crumbs-p>
						</div>
					</div>
				</crumbs-tabs>
			</div>
		</crumbs-panel>
	`}function Pi({order:e}){const t="&lt;crumbs-p&gt; Hello world ! &lt;/crumbs-p&gt;",n=P`
		max-height: 70cqh;
	`;return L`
		<span slot=${`title-${e}`}> Getting started</span>
		<crumbs-panel panel-title="Getting started" slot=${`content-${e}`} className=${n}>
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
					dangerouslySetInnerHTML=${{__html:t}}
				>
				</code>

			</crumbs-p>
		</crumbs-panel>
	`}function Ai({order:e}){const[t,n]=k("Click me !"),[r,i]=k("100"),[o,s]=k(!1),a=`
		&lt;crumbs-button
			${o?"	disabled":""}
				progress="${r}"&gt;
				${t}
		&lt;/crumbs-button&gt;
	`;return L`
		<${ot} title="Button" order=${e}>
			<crumbs-button
				progress=${r}
				disabled=${o}>
				${t}
			</crumbs-button>

			<div>
				<crumbs-input
					type="text"
					value=${t}
					onInput=${c=>n(c.originalTarget.value)}/>

				<input
					type="range"
					value=${r}
					onInput=${c=>i(String(c.target.value))}
					min="0"
					max="100"/>

				<br/>

				<input type="checkbox" onInput=${()=>s(!o)} />
				<label> Disabled </label>

			</div>

			<code> <pre dangerouslySetInnerHTML=${{__html:a}}> </pre></code>
		<//>
	`}function Li({order:e}){return L`
		<${ot} title="Nav" order=${e}>
			<crumbs-nav>
				<crumbs-p
					slot="title-1">
					Tab title
				</crumbs-p>
				<crumbs-p
					slot="content-1">
					Tab content
				</crumbs-p>
				<crumbs-p
					slot="title-2">
					Tab title 2
				</crumbs-p>
				<crumbs-p
					slot="content-2">
					Tab content 2
				</crumbs-p>
				<span slot="navigation-toggle"> :: </span>
			</crumbs-nav>

			<div>
				<crumbs-p>no params</crumbs-p>
			</div>

			<code> <pre dangerouslySetInnerHTML=${{__html:`&lt;crumbs-nav&gt;
	&lt;crumbs-p
		slot=&quot;title-1&quot;&gt;
		Tab title
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot=&quot;content-1&quot;&gt;
		Tab content
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot=&quot;title-2&quot;&gt;
		Tab title 2
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot=&quot;content-2&quot;&gt;
		Tab content 2
	&lt;/crumbs-p&gt;
	&lt;span slot=&quot;navigation-toggle&quot;&gt; :: &lt;/span&gt;
&lt;/crumbs-nav&gt;
	`}}> </pre></code>
		<//>
	`}function Mi(){const e=xt(Vn,Yn),t=xt(Kn,Qn),n=P`
		background-image: url('bg${e}.jpg');
		background-size: cover;
		min-height: 100vh;
		position: fixed;
		min-width: 100vw;
		background-position: center;
		z-index: -999;
	`,r=P`
		display: grid;
		overflow-y: scroll;
		height: 100vh;
		grid-template-columns: repeat(auto-fit, minmax(max(28rem + 6vw), 1fr));
		font-family: ${t};
	`;return L`
		<div class=${n}></div>

		<crumbs-nav class=${r}>
			<${Ci} order=${1}><//>
			<${Pi} order=${2}><//>
			<${Oi} order=${3}><//>
			<${Ei} order=${4}><//>
			<${Ti} order=${5}><//>
			<${Si} order=${6}><//>
			<${ki} order=${7}><//>
			<${Ai} order=${8}><//>
			<${Li} order=${9}><//>
			<span slot="navigation-toggle"> :: </span>
		</crumbs-nav>
	`}ri(L`<${Mi}><//>`,document.body);
