var br=Object.defineProperty;var hr=(t,n,e)=>n in t?br(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var S=(t,n,e)=>hr(t,typeof n!="symbol"?n+"":n,e);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();function Tt(t){for(var n,e,r=arguments,o=1,i="",s="",u=[0],a=function(l){o===1&&(l||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(l?r[l]:i):o===3&&(l||i)?(u[1]=l?r[l]:i,o=2):o===2&&i==="..."&&l?u[2]=Object.assign(u[2]||{},r[l]):o===2&&i&&!l?(u[2]=u[2]||{})[i]=!0:o>=5&&(o===5?((u[2]=u[2]||{})[e]=l?i?i+r[l]:r[l]:i,o=6):(l||i)&&(u[2][e]+=l?i+r[l]:i)),i=""},c=0;c<t.length;c++){c&&(o===1&&a(),a(c));for(var f=0;f<t[c].length;f++)n=t[c][f],o===1?n==="<"?(a(),u=[u,"",null],o=3):i+=n:o===4?i==="--"&&n===">"?(o=1,i=""):i=n+i[0]:s?n===s?s="":i+=n:n==='"'||n==="'"?s=n:n===">"?(a(),o=1):o&&(n==="="?(o=5,e=i,i=""):n==="/"&&(o<5||t[c][f+1]===">")?(a(),o===3&&(u=u[0]),o=u,(u=u[0]).push(this.apply(null,o.slice(1))),o=0):n===" "||n==="	"||n===`
`||n==="\r"?(a(),o=2):i+=n),o===3&&i==="!--"&&(o=4,u=u[0])}return a(),u.length>2?u.slice(1):u[1]}function mr(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function vr(t){if(t.__esModule)return t;var n=t.default;if(typeof n=="function"){var e=function r(){return this instanceof r?Reflect.construct(n,arguments,this.constructor):n.apply(this,arguments)};e.prototype=n.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var o=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:function(){return t[r]}})}),e}var un={exports:{}};/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */var _r=function(n){var e=String.prototype.split,r=/()??/.exec("")[1]===n,o;return o=function(i,l,u){if(Object.prototype.toString.call(l)!=="[object RegExp]")return e.call(i,l,u);var a=[],c=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.extended?"x":"")+(l.sticky?"y":""),f=0,l=new RegExp(l.source,c+"g"),d,p,h,b;for(i+="",r||(d=new RegExp("^"+l.source+"$(?!\\s)",c)),u=u===n?-1>>>0:u>>>0;(p=l.exec(i))&&(h=p.index+p[0].length,!(h>f&&(a.push(i.slice(f,p.index)),!r&&p.length>1&&p[0].replace(d,function(){for(var m=1;m<arguments.length-2;m++)arguments[m]===n&&(p[m]=n)}),p.length>1&&p.index<i.length&&Array.prototype.push.apply(a,p.slice(1)),b=p[0].length,f=h,a.length>=u)));)l.lastIndex===p.index&&l.lastIndex++;return f===i.length?(b||!l.test(""))&&a.push(""):a.push(i.slice(f)),a.length>u?a.slice(0,u):a},o}(),yr=[].indexOf,gr=function(t,n){if(yr)return t.indexOf(n);for(var e=0;e<t.length;++e)if(t[e]===n)return e;return-1},At=gr,wr=xr;function xr(t){var n=t.classList;if(n)return n;var e={add:r,remove:o,contains:i,toggle:s,toString:u,length:0,item:a};return e;function r(l){var d=c();At(d,l)>-1||(d.push(l),f(d))}function o(l){var d=c(),p=At(d,l);p!==-1&&(d.splice(p,1),f(d))}function i(l){return At(c(),l)>-1}function s(l){return i(l)?(o(l),!1):(r(l),!0)}function u(){return t.className}function a(l){var d=c();return d[l]||null}function c(){var l=t.className;return Sr(l.split(" "),Er)}function f(l){var d=l.length;t.className=l.join(" "),e.length=d;for(var p=0;p<l.length;p++)e[p]=l[p];delete l[d]}}function Sr(t,n){for(var e=[],r=0;r<t.length;r++)n(t[r])&&e.push(t[r]);return e}function Er(t){return!!t}const kr={},Tr=Object.freeze(Object.defineProperty({__proto__:null,default:kr},Symbol.toStringTag,{value:"Module"})),$r=vr(Tr);var Ir=_r,Or=wr,cn=typeof window>"u"?$r:window,Q=cn.document,Pr=cn.Text;function an(){var t=[];function n(){var e=[].slice.call(arguments),r=null;function o(i){var s;function u(l){var d=Ir(l,/([\.#]?[^\s#.]+)/);/^\.|#/.test(d[1])&&(r=Q.createElement("div")),he(d,function(p){var h=p.substring(1,p.length);p&&(r?p[0]==="."?Or(r).add(h):p[0]==="#"&&r.setAttribute("id",h):r=Q.createElement(p))})}if(i!=null){if(typeof i=="string")r?r.appendChild(s=Q.createTextNode(i)):u(i);else if(typeof i=="number"||typeof i=="boolean"||i instanceof Date||i instanceof RegExp)r.appendChild(s=Q.createTextNode(i.toString()));else if(jr(i))he(i,o);else if(Lt(i))r.appendChild(s=i);else if(i instanceof Pr)r.appendChild(s=i);else if(typeof i=="object")for(var a in i)if(typeof i[a]=="function")/^on\w+/.test(a)?function(l,d){r.addEventListener?(r.addEventListener(l.substring(2),d[l],!1),t.push(function(){r.removeEventListener(l.substring(2),d[l],!1)})):(r.attachEvent(l,d[l]),t.push(function(){r.detachEvent(l,d[l])}))}(a,i):(r[a]=i[a](),t.push(i[a](function(l){r[a]=l})));else if(a==="style")if(typeof i[a]=="string")r.style.cssText=i[a];else for(var c in i[a])(function(l,d){if(typeof d=="function")r.style.setProperty(l,d()),t.push(d(function(h){r.style.setProperty(l,h)}));else var p=i[a][l].match(/(.*)\W+!important\W*$/);p?r.style.setProperty(l,p[1],"important"):r.style.setProperty(l,i[a][l])})(c,i[a][c]);else if(a==="attrs")for(var f in i[a])r.setAttribute(f,i[a][f]);else a.substr(0,5)==="data-"?r.setAttribute(a,i[a]):r[a]=i[a];else if(typeof i=="function"){var f=i();r.appendChild(s=Lt(f)?f:Q.createTextNode(f)),t.push(i(function(d){Lt(d)&&s.parentElement?(s.parentElement.replaceChild(d,s),s=d):s.textContent=d}))}}return s}for(;e.length;)o(e.shift());return r}return n.cleanup=function(){for(var e=0;e<t.length;e++)t[e]();t.length=0},n}var Cr=un.exports=an();Cr.context=an;function Lt(t){return t&&t.nodeName&&t.nodeType}function he(t,n){if(t.forEach)return t.forEach(n);for(var e=0;e<t.length;e++)n(t[e],e)}function jr(t){return Object.prototype.toString.call(t)=="[object Array]"}var Ar=un.exports;const rt=mr(Ar);function L(t){if(!t.shadowRoot)throw new Error("There is no shadow root on the element !");return t.shadowRoot}function it(t){const n=Array.isArray(t)?t:[t],e=document.createElement("template");return e.innerHTML=n.map(r=>r.outerHTML).join(""),e}var Vt=function(t,n){return Vt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])},Vt(t,n)};function R(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");Vt(t,n);function e(){this.constructor=t}t.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}function Lr(t,n,e,r){function o(i){return i instanceof e?i:new e(function(s){s(i)})}return new(e||(e=Promise))(function(i,s){function u(f){try{c(r.next(f))}catch(l){s(l)}}function a(f){try{c(r.throw(f))}catch(l){s(l)}}function c(f){f.done?i(f.value):o(f.value).then(u,a)}c((r=r.apply(t,n||[])).next())})}function ln(t,n){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(c){return function(f){return a([c,f])}}function a(c){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(e=0)),e;)try{if(r=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){e.label=c[1];break}if(c[0]===6&&e.label<i[1]){e.label=i[1],i=c;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(c);break}i[2]&&e.ops.pop(),e.trys.pop();continue}c=n.call(t,e)}catch(f){c=[6,f],o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function G(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function J(t,n){var e=typeof Symbol=="function"&&t[Symbol.iterator];if(!e)return t;var r=e.call(t),o,i=[],s;try{for(;(n===void 0||n-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(e=r.return)&&e.call(r)}finally{if(s)throw s.error}}return i}function X(t,n,e){if(e||arguments.length===2)for(var r=0,o=n.length,i;r<o;r++)(i||!(r in n))&&(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return t.concat(i||Array.prototype.slice.call(n))}function Y(t){return this instanceof Y?(this.v=t,this):new Y(t)}function Mr(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e.apply(t,n||[]),o,i=[];return o={},u("next"),u("throw"),u("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(p){return function(h){return Promise.resolve(h).then(p,l)}}function u(p,h){r[p]&&(o[p]=function(b){return new Promise(function(m,v){i.push([p,b,m,v])>1||a(p,b)})},h&&(o[p]=h(o[p])))}function a(p,h){try{c(r[p](h))}catch(b){d(i[0][3],b)}}function c(p){p.value instanceof Y?Promise.resolve(p.value.v).then(f,l):d(i[0][2],p)}function f(p){a("next",p)}function l(p){a("throw",p)}function d(p,h){p(h),i.shift(),i.length&&a(i[0][0],i[0][1])}}function Hr(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof G=="function"?G(t):t[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(i){e[i]=t[i]&&function(s){return new Promise(function(u,a){s=t[i](s),o(u,a,s.done,s.value)})}}function o(i,s,u,a){Promise.resolve(a).then(function(c){i({value:c,done:u})},s)}}function _(t){return typeof t=="function"}function re(t){var n=function(r){Error.call(r),r.stack=new Error().stack},e=t(n);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Mt=re(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function St(t,n){if(t){var e=t.indexOf(n);0<=e&&t.splice(e,1)}}var ot=function(){function t(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var n,e,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=G(s),a=u.next();!a.done;a=u.next()){var c=a.value;c.remove(this)}}catch(b){n={error:b}}finally{try{a&&!a.done&&(e=u.return)&&e.call(u)}finally{if(n)throw n.error}}else s.remove(this);var f=this.initialTeardown;if(_(f))try{f()}catch(b){i=b instanceof Mt?b.errors:[b]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var d=G(l),p=d.next();!p.done;p=d.next()){var h=p.value;try{me(h)}catch(b){i=i??[],b instanceof Mt?i=X(X([],J(i)),J(b.errors)):i.push(b)}}}catch(b){r={error:b}}finally{try{p&&!p.done&&(o=d.return)&&o.call(d)}finally{if(r)throw r.error}}}if(i)throw new Mt(i)}},t.prototype.add=function(n){var e;if(n&&n!==this)if(this.closed)me(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}},t.prototype._hasParent=function(n){var e=this._parentage;return e===n||Array.isArray(e)&&e.includes(n)},t.prototype._addParent=function(n){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n},t.prototype._removeParent=function(n){var e=this._parentage;e===n?this._parentage=null:Array.isArray(e)&&St(e,n)},t.prototype.remove=function(n){var e=this._finalizers;e&&St(e,n),n instanceof t&&n._removeParent(this)},t.EMPTY=function(){var n=new t;return n.closed=!0,n}(),t}(),fn=ot.EMPTY;function pn(t){return t instanceof ot||t&&"closed"in t&&_(t.remove)&&_(t.add)&&_(t.unsubscribe)}function me(t){_(t)?t():t.unsubscribe()}var dn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},bn={setTimeout:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return setTimeout.apply(void 0,X([t,n],J(e)))},clearTimeout:function(t){var n=bn.delegate;return((n==null?void 0:n.clearTimeout)||clearTimeout)(t)},delegate:void 0};function hn(t){bn.setTimeout(function(){throw t})}function ve(){}function vt(t){t()}var ie=function(t){R(n,t);function n(e){var r=t.call(this)||this;return r.isStopped=!1,e?(r.destination=e,pn(e)&&e.add(r)):r.destination=Dr,r}return n.create=function(e,r,o){return new Bt(e,r,o)},n.prototype.next=function(e){this.isStopped||this._next(e)},n.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(e){this.destination.next(e)},n.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(ot),Nr=Function.prototype.bind;function Ht(t,n){return Nr.call(t,n)}var Fr=function(){function t(n){this.partialObserver=n}return t.prototype.next=function(n){var e=this.partialObserver;if(e.next)try{e.next(n)}catch(r){dt(r)}},t.prototype.error=function(n){var e=this.partialObserver;if(e.error)try{e.error(n)}catch(r){dt(r)}else dt(n)},t.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(e){dt(e)}},t}(),Bt=function(t){R(n,t);function n(e,r,o){var i=t.call(this)||this,s;if(_(e)||!e)s={next:e??void 0,error:r??void 0,complete:o??void 0};else{var u;i&&dn.useDeprecatedNextContext?(u=Object.create(e),u.unsubscribe=function(){return i.unsubscribe()},s={next:e.next&&Ht(e.next,u),error:e.error&&Ht(e.error,u),complete:e.complete&&Ht(e.complete,u)}):s=e}return i.destination=new Fr(s),i}return n}(ie);function dt(t){hn(t)}function Rr(t){throw t}var Dr={closed:!0,next:ve,error:Rr,complete:ve},oe=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function st(t){return t}function Ur(t){return t.length===0?st:t.length===1?t[0]:function(e){return t.reduce(function(r,o){return o(r)},e)}}var E=function(){function t(n){n&&(this._subscribe=n)}return t.prototype.lift=function(n){var e=new t;return e.source=this,e.operator=n,e},t.prototype.subscribe=function(n,e,r){var o=this,i=Vr(n)?n:new Bt(n,e,r);return vt(function(){var s=o,u=s.operator,a=s.source;i.add(u?u.call(i,a):a?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(e){n.error(e)}},t.prototype.forEach=function(n,e){var r=this;return e=_e(e),new e(function(o,i){var s=new Bt({next:function(u){try{n(u)}catch(a){i(a),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},t.prototype._subscribe=function(n){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(n)},t.prototype[oe]=function(){return this},t.prototype.pipe=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return Ur(n)(this)},t.prototype.toPromise=function(n){var e=this;return n=_e(n),new n(function(r,o){var i;e.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},t.create=function(n){return new t(n)},t}();function _e(t){var n;return(n=t??dn.Promise)!==null&&n!==void 0?n:Promise}function zr(t){return t&&_(t.next)&&_(t.error)&&_(t.complete)}function Vr(t){return t&&t instanceof ie||zr(t)&&pn(t)}function Br(t){return _(t==null?void 0:t.lift)}function P(t){return function(n){if(Br(n))return n.lift(function(e){try{return t(e,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function O(t,n,e,r,o){return new qr(t,n,e,r,o)}var qr=function(t){R(n,t);function n(e,r,o,i,s,u){var a=t.call(this,e)||this;return a.onFinalize=s,a.shouldUnsubscribe=u,a._next=r?function(c){try{r(c)}catch(f){e.error(f)}}:t.prototype._next,a._error=i?function(c){try{i(c)}catch(f){e.error(f)}finally{this.unsubscribe()}}:t.prototype._error,a._complete=o?function(){try{o()}catch(c){e.error(c)}finally{this.unsubscribe()}}:t.prototype._complete,a}return n.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((e=this.onFinalize)===null||e===void 0||e.call(this))}},n}(ie),Wr=re(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Z=function(t){R(n,t);function n(){var e=t.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return n.prototype.lift=function(e){var r=new ye(this,this);return r.operator=e,r},n.prototype._throwIfClosed=function(){if(this.closed)throw new Wr},n.prototype.next=function(e){var r=this;vt(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=G(r.currentObservers),u=s.next();!u.done;u=s.next()){var a=u.value;a.next(e)}}catch(c){o={error:c}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},n.prototype.error=function(e){var r=this;vt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=e;for(var o=r.observers;o.length;)o.shift().error(e)}})},n.prototype.complete=function(){var e=this;vt(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var r=e.observers;r.length;)r.shift().complete()}})},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},n.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},n.prototype._innerSubscribe=function(e){var r=this,o=this,i=o.hasError,s=o.isStopped,u=o.observers;return i||s?fn:(this.currentObservers=null,u.push(e),new ot(function(){r.currentObservers=null,St(u,e)}))},n.prototype._checkFinalizedStatuses=function(e){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?e.error(i):s&&e.complete()},n.prototype.asObservable=function(){var e=new E;return e.source=this,e},n.create=function(e,r){return new ye(e,r)},n}(E),ye=function(t){R(n,t);function n(e,r){var o=t.call(this)||this;return o.destination=e,o.source=r,o}return n.prototype.next=function(e){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,e)},n.prototype.error=function(e){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,e)},n.prototype.complete=function(){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||r===void 0||r.call(e)},n.prototype._subscribe=function(e){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(e))!==null&&o!==void 0?o:fn},n}(Z),Yr={now:function(){return Date.now()},delegate:void 0},Gr=function(t){R(n,t);function n(e,r){return t.call(this)||this}return n.prototype.schedule=function(e,r){return this},n}(ot),ge={setInterval:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return setInterval.apply(void 0,X([t,n],J(e)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},Jr=function(t){R(n,t);function n(e,r){var o=t.call(this,e,r)||this;return o.scheduler=e,o.work=r,o.pending=!1,o}return n.prototype.schedule=function(e,r){var o;if(r===void 0&&(r=0),this.closed)return this;this.state=e;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=(o=this.id)!==null&&o!==void 0?o:this.requestAsyncId(s,this.id,r),this},n.prototype.requestAsyncId=function(e,r,o){return o===void 0&&(o=0),ge.setInterval(e.flush.bind(e,this),o)},n.prototype.recycleAsyncId=function(e,r,o){if(o===void 0&&(o=0),o!=null&&this.delay===o&&this.pending===!1)return r;r!=null&&ge.clearInterval(r)},n.prototype.execute=function(e,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var o=this._execute(e,r);if(o)return o;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(e,r){var o=!1,i;try{this.work(e)}catch(s){o=!0,i=s||new Error("Scheduled action threw falsy error")}if(o)return this.unsubscribe(),i},n.prototype.unsubscribe=function(){if(!this.closed){var e=this,r=e.id,o=e.scheduler,i=o.actions;this.work=this.state=this.scheduler=null,this.pending=!1,St(i,this),r!=null&&(this.id=this.recycleAsyncId(o,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},n}(Gr),we=function(){function t(n,e){e===void 0&&(e=t.now),this.schedulerActionCtor=n,this.now=e}return t.prototype.schedule=function(n,e,r){return e===void 0&&(e=0),new this.schedulerActionCtor(this,n).schedule(r,e)},t.now=Yr.now,t}(),Kr=function(t){R(n,t);function n(e,r){r===void 0&&(r=we.now);var o=t.call(this,e,r)||this;return o.actions=[],o._active=!1,o}return n.prototype.flush=function(e){var r=this.actions;if(this._active){r.push(e);return}var o;this._active=!0;do if(o=e.execute(e.state,e.delay))break;while(e=r.shift());if(this._active=!1,o){for(;e=r.shift();)e.unsubscribe();throw o}},n}(we),mn=new Kr(Jr),Qr=mn,vn=new E(function(t){return t.complete()});function _n(t){return t&&_(t.schedule)}function se(t){return t[t.length-1]}function Zr(t){return _(se(t))?t.pop():void 0}function ut(t){return _n(se(t))?t.pop():void 0}function Xr(t,n){return typeof se(t)=="number"?t.pop():n}var ue=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function yn(t){return _(t==null?void 0:t.then)}function gn(t){return _(t[oe])}function wn(t){return Symbol.asyncIterator&&_(t==null?void 0:t[Symbol.asyncIterator])}function xn(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function ti(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Sn=ti();function En(t){return _(t==null?void 0:t[Sn])}function kn(t){return Mr(this,arguments,function(){var e,r,o,i;return ln(this,function(s){switch(s.label){case 0:e=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,Y(e.read())];case 3:return r=s.sent(),o=r.value,i=r.done,i?[4,Y(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,Y(o)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function Tn(t){return _(t==null?void 0:t.getReader)}function q(t){if(t instanceof E)return t;if(t!=null){if(gn(t))return ei(t);if(ue(t))return ni(t);if(yn(t))return ri(t);if(wn(t))return $n(t);if(En(t))return ii(t);if(Tn(t))return oi(t)}throw xn(t)}function ei(t){return new E(function(n){var e=t[oe]();if(_(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function ni(t){return new E(function(n){for(var e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function ri(t){return new E(function(n){t.then(function(e){n.closed||(n.next(e),n.complete())},function(e){return n.error(e)}).then(null,hn)})}function ii(t){return new E(function(n){var e,r;try{for(var o=G(t),i=o.next();!i.done;i=o.next()){var s=i.value;if(n.next(s),n.closed)return}}catch(u){e={error:u}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(e)throw e.error}}n.complete()})}function $n(t){return new E(function(n){si(t,n).catch(function(e){return n.error(e)})})}function oi(t){return $n(kn(t))}function si(t,n){var e,r,o,i;return Lr(this,void 0,void 0,function(){var s,u;return ln(this,function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),e=Hr(t),a.label=1;case 1:return[4,e.next()];case 2:if(r=a.sent(),!!r.done)return[3,4];if(s=r.value,n.next(s),n.closed)return[2];a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return u=a.sent(),o={error:u},[3,11];case 6:return a.trys.push([6,,9,10]),r&&!r.done&&(i=e.return)?[4,i.call(e)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}})})}function N(t,n,e,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=n.schedule(function(){e(),o?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(i),!o)return i}function In(t,n){return n===void 0&&(n=0),P(function(e,r){e.subscribe(O(r,function(o){return N(r,t,function(){return r.next(o)},n)},function(){return N(r,t,function(){return r.complete()},n)},function(o){return N(r,t,function(){return r.error(o)},n)}))})}function On(t,n){return n===void 0&&(n=0),P(function(e,r){r.add(t.schedule(function(){return e.subscribe(r)},n))})}function ui(t,n){return q(t).pipe(On(n),In(n))}function ci(t,n){return q(t).pipe(On(n),In(n))}function ai(t,n){return new E(function(e){var r=0;return n.schedule(function(){r===t.length?e.complete():(e.next(t[r++]),e.closed||this.schedule())})})}function li(t,n){return new E(function(e){var r;return N(e,n,function(){r=t[Sn](),N(e,n,function(){var o,i,s;try{o=r.next(),i=o.value,s=o.done}catch(u){e.error(u);return}s?e.complete():e.next(i)},0,!0)}),function(){return _(r==null?void 0:r.return)&&r.return()}})}function Pn(t,n){if(!t)throw new Error("Iterable cannot be null");return new E(function(e){N(e,n,function(){var r=t[Symbol.asyncIterator]();N(e,n,function(){r.next().then(function(o){o.done?e.complete():e.next(o.value)})},0,!0)})})}function fi(t,n){return Pn(kn(t),n)}function pi(t,n){if(t!=null){if(gn(t))return ui(t,n);if(ue(t))return ai(t,n);if(yn(t))return ci(t,n);if(wn(t))return Pn(t,n);if(En(t))return li(t,n);if(Tn(t))return fi(t,n)}throw xn(t)}function ct(t,n){return n?pi(t,n):q(t)}function Nt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=ut(t);return ct(t,e)}var Cn=re(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function di(t){return t instanceof Date&&!isNaN(t)}function j(t,n){return P(function(e,r){var o=0;e.subscribe(O(r,function(i){r.next(t.call(n,i,o++))}))})}var bi=Array.isArray;function hi(t,n){return bi(n)?t.apply(void 0,X([],J(n))):t(n)}function jn(t){return j(function(n){return hi(t,n)})}var mi=Array.isArray,vi=Object.getPrototypeOf,_i=Object.prototype,yi=Object.keys;function gi(t){if(t.length===1){var n=t[0];if(mi(n))return{args:n,keys:null};if(wi(n)){var e=yi(n);return{args:e.map(function(r){return n[r]}),keys:e}}}return{args:t,keys:null}}function wi(t){return t&&typeof t=="object"&&vi(t)===_i}function xi(t,n){return t.reduce(function(e,r,o){return e[r]=n[o],e},{})}function An(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=ut(t),r=Zr(t),o=gi(t),i=o.args,s=o.keys;if(i.length===0)return ct([],e);var u=new E(Si(i,e,s?function(a){return xi(s,a)}:st));return r?u.pipe(jn(r)):u}function Si(t,n,e){return e===void 0&&(e=st),function(r){xe(n,function(){for(var o=t.length,i=new Array(o),s=o,u=o,a=function(f){xe(n,function(){var l=ct(t[f],n),d=!1;l.subscribe(O(r,function(p){i[f]=p,d||(d=!0,u--),u||r.next(e(i.slice()))},function(){--s||r.complete()}))},r)},c=0;c<o;c++)a(c)},r)}}function xe(t,n,e){t?N(e,t,n):n()}function Ei(t,n,e,r,o,i,s,u){var a=[],c=0,f=0,l=!1,d=function(){l&&!a.length&&!c&&n.complete()},p=function(b){return c<r?h(b):a.push(b)},h=function(b){c++;var m=!1;q(e(b,f++)).subscribe(O(n,function(v){n.next(v)},function(){m=!0},void 0,function(){if(m)try{c--;for(var v=function(){var y=a.shift();s||h(y)};a.length&&c<r;)v();d()}catch(y){n.error(y)}}))};return t.subscribe(O(n,p,function(){l=!0,d()})),function(){}}function $t(t,n,e){return e===void 0&&(e=1/0),_(n)?$t(function(r,o){return j(function(i,s){return n(r,i,o,s)})(q(t(r,o)))},e):(typeof n=="number"&&(e=n),P(function(r,o){return Ei(r,o,t,e)}))}function Ln(t){return t===void 0&&(t=1/0),$t(st,t)}function ki(){return Ln(1)}function Se(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return ki()(ct(t,ut(t)))}var Ti=["addListener","removeListener"],$i=["addEventListener","removeEventListener"],Ii=["on","off"];function F(t,n,e,r){if(_(e)&&(r=e,e=void 0),r)return F(t,n,e).pipe(jn(r));var o=J(Ci(t)?$i.map(function(u){return function(a){return t[u](n,a,e)}}):Oi(t)?Ti.map(Ee(t,n)):Pi(t)?Ii.map(Ee(t,n)):[],2),i=o[0],s=o[1];if(!i&&ue(t))return $t(function(u){return F(u,n,e)})(q(t));if(!i)throw new TypeError("Invalid event target");return new E(function(u){var a=function(){for(var c=[],f=0;f<arguments.length;f++)c[f]=arguments[f];return u.next(1<c.length?c:c[0])};return i(a),function(){return s(a)}})}function Ee(t,n){return function(e){return function(r){return t[e](n,r)}}}function Oi(t){return _(t.addListener)&&_(t.removeListener)}function Pi(t){return _(t.on)&&_(t.off)}function Ci(t){return _(t.addEventListener)&&_(t.removeEventListener)}function ji(t,n,e){e===void 0&&(e=Qr);var r=-1;return _n(n)?e=n:r=n,new E(function(o){var i=di(t)?+t-e.now():t;i<0&&(i=0);var s=0;return e.schedule(function(){o.closed||(o.next(s++),0<=r?this.schedule(void 0,r):o.complete())},i)})}function Ai(t,n){return n===void 0&&(n=mn),ji(t,t,n)}function Li(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=ut(t),r=Xr(t,1/0),o=t;return o.length?o.length===1?q(o[0]):Ln(r)(ct(o,e)):vn}function Mn(t,n){return P(function(e,r){var o=0;e.subscribe(O(r,function(i){return t.call(n,i,o++)&&r.next(i)}))})}function Mi(t){return P(function(n,e){var r=!1;n.subscribe(O(e,function(o){r=!0,e.next(o)},function(){r||e.next(t),e.complete()}))})}function Hi(t){return t<=0?function(){return vn}:P(function(n,e){var r=0;n.subscribe(O(e,function(o){++r<=t&&(e.next(o),t<=r&&e.complete())}))})}function ke(t){return j(function(){return t})}function Ni(t){return t===void 0&&(t=Fi),P(function(n,e){var r=!1;n.subscribe(O(e,function(o){r=!0,e.next(o)},function(){return r?e.complete():e.error(t())}))})}function Fi(){return new Cn}function Ri(t,n){var e=arguments.length>=2;return function(r){return r.pipe(st,Hi(1),e?Mi(n):Ni(function(){return new Cn}))}}function Di(){return P(function(t,n){var e,r=!1;t.subscribe(O(n,function(o){var i=e;e=o,r&&n.next([i,o]),r=!0}))})}function bt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=ut(t);return P(function(r,o){(e?Se(t,r,e):Se(t,r)).subscribe(o)})}function Hn(){return!document.hidden}function Ui(){const t=F(document,"visibilitychange"),n=F(window,"focus").pipe(ke(!0)),e=F(window,"blur").pipe(ke(!1)),r=Li(n,e);return An(t,r).pipe(j(([,o])=>Hn()&&o),Mn(o=>o),Ri())}const zi=F(document,"mouseover");async function Vi(){Hn()||await Promise.race([Ui().toPromise(),zi.toPromise()])}async function Bi(){await new Promise(t=>setTimeout(t,400)),await Vi(),await new Promise(t=>setTimeout(t,400))}const qi=Bi();function $(t,n){const e=t.querySelector(n);if(!e)throw new Error("Failed to find element ${ selector } !");return e}const Wi=Tt.bind(rt),Yi="crumbs-p",Gi=it(Wi`
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
`);let Ji=class extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const n=L(this),e=Gi.content.cloneNode(!0);n.appendChild(e)}};customElements.define(Yi,Ji);const Ki=Tt.bind(rt),Qi="crumbs-panel",Zi=it(Ki`
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
`);class Xi extends HTMLElement{constructor(){super(...arguments);S(this,"contentTimeoutElapsed",!1);S(this,"contentLoaded",!1);S(this,"connected",!1);S(this,"loading","100");S(this,"scrolled",!1);S(this,"scrolledSubscription",null)}static get observedAttributes(){return["panel-loading","panel-title"]}async connectedCallback(){this.attachShadow({mode:"open"}),await qi;const e=L(this),r=Zi.content.cloneNode(!0);e.appendChild(r);const o=this.getAttribute("panel-loading");o!==null&&Te(o)&&(this.loading=o),setTimeout(()=>{const i=$(e,"#panel-container");i.style.gridTemplateColumns="1rem 1fr 1rem",i.style.gridTemplateRows="1rem 1fr 1rem";const s=$(e,"#panel");s.style.backgroundColor="#ffffff40",this.scrolledSubscription=F(s,"scroll").pipe(j(u=>u.target.scrollTop),j(u=>u!==0)).subscribe(u=>{this.scrolled=u,this.render()}),this.render()},10),setTimeout(()=>{this.contentTimeoutElapsed=!0,this.render()},400),this.connected=!0,this.render()}render(){const e=L(this),r=$(e,"#panel-content"),o=$(e,"#panel-loading"),i=$(e,"#panel"),s=$(e,"#panel-title-content");this.contentTimeoutElapsed&&to(this.loading)?(r.style.visibility="visible",r.style.opacity="1",i.style.overflow="auto"):(r.style.visibility="collapse",r.style.opacity="0",i.style.overflow="hidden"),o.style.width=`${this.loading}%`;const u=$(e,"#panel-title");this.loading==="100"&&this.getAttribute("panel-title")&&!this.scrolled?setTimeout(()=>{u.style.opacity="1",s.innerHTML=this.getAttribute("panel-title")||"",r.style.paddingTop="2.5rem"},10):(r.style.paddingTop="inherit",u.style.opacity="0")}attributeChangedCallback(){if(this.shadowRoot&&this.connected){const e=this.getAttribute("panel-loading");e!==null&&Te(e)?this.loading=e:e===null&&(this.loading="100"),this.render()}}disconnectedCallback(){var e;(e=this.scrolledSubscription)==null||e.unsubscribe()}}function Te(t){const n=Number(t),e=Math.floor(n);return e===n&&Number.isInteger(e)&&Number.isFinite(e)&&e<=100&&e>=0}function to(t){return t===null||t==="100"}customElements.define(Qi,Xi);const eo=Tt.bind(rt),no="crumbs-input",ro=it(eo`
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
`);class io extends HTMLElement{static get observedAttributes(){return["value"]}async connectedCallback(){this.attachShadow({mode:"open"});const n=L(this),e=ro.content.cloneNode(!0);n.appendChild(e);const r=$(n,"input"),o=this.getAttribute("value");r instanceof HTMLInputElement&&o&&(r.value=o)}attributeChangedCallback(n,e,r){if(n==="value"&&this.shadowRoot){const o=L(this),i=$(o,"input");i instanceof HTMLInputElement&&(i.value=r)}}}customElements.define(no,io);const qt=Tt.bind(rt),oo="crumbs-tabs",so=it(qt`
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
`);class uo extends HTMLElement{constructor(){super(...arguments);S(this,"selected",1);S(this,"subscriptions",[])}async connectedCallback(){this.attachShadow({mode:"open"});const e=L(this),r=so.content.cloneNode(!0);e.appendChild(r);const o=this.getAttribute("selected");this.selected=Number.parseInt(o||"1");const i=e.querySelector("#tabs"),s=e.querySelector("#content");if(!i)throw new Error("Tabs not found");if(!s)throw new Error("Content not found");for(const u of{[Symbol.iterator]:()=>this.getSlots()}){if(u.startsWith("content-")){const a=qt`<div id=${`${u}`}> <slot name=${u}></slot> </div>`;a instanceof Element&&s.appendChild(a)}if(u.startsWith("title-")){const a=qt`<div id=${u}> <crumbs-p> <slot name=${u}></slot> </crumbs-p> </div>`;a instanceof Element&&i.appendChild(a)}}this.subscriptions=[...i.children].map((u,a)=>F(u,"click").subscribe(()=>{const c=u.id.replace("title-","content-"),f=e.querySelector(`#${c}`);f instanceof HTMLElement&&s instanceof HTMLElement&&f.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.selected=a+1,this.render()})),this.render()}render(){const r=L(this).querySelector("#tabs");if(!r)throw new Error("Tabs not found");[...r.children].forEach((o,i)=>{i+1===this.selected?o instanceof HTMLElement&&o.classList.add("selected-title"):o instanceof HTMLElement&&o.classList.remove("selected-title")})}disconnectedCallback(){for(const e of this.subscriptions)e.unsubscribe()}*getSlots(){for(const e of Array.from(this.children)){const r=e.getAttribute("slot");r&&(yield r)}}}customElements.define(oo,uo);var Nn=function(t,n,e,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var s=n[i++],u=n[i]?(n[0]|=s?1:2,e[n[i++]]):n[++i];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[n[++i]]=u:s===6?r[1][n[++i]]+=u+"":s?(o=t.apply(u,Nn(t,u,e,["",null])),r.push(o),u[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(u)}return r},$e=new Map;function co(t){var n=$e.get(this);return n||(n=new Map,$e.set(this,n)),(n=Nn(this,n.get(t)||(n.set(t,n=function(e){for(var r,o,i=1,s="",u="",a=[0],c=function(d){i===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,d,s):i===3&&(d||s)?(a.push(3,d,s),i=2):i===2&&s==="..."&&d?a.push(4,d,0):i===2&&s&&!d?a.push(5,0,!0,s):i>=5&&((s||!d&&i===5)&&(a.push(i,0,s,o),i=6),d&&(a.push(i,d,0,o),i=6)),s=""},f=0;f<e.length;f++){f&&(i===1&&c(),c(f));for(var l=0;l<e[f].length;l++)r=e[f][l],i===1?r==="<"?(c(),a=[a],i=3):s+=r:i===4?s==="--"&&r===">"?(i=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(c(),i=1):i&&(r==="="?(i=5,o=s,s=""):r==="/"&&(i<5||e[f][l+1]===">")?(c(),i===3&&(a=a[0]),i=a,(a=a[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(c(),i=2):s+=r),i===3&&s==="!--"&&(i=4,a=a[0])}return c(),a}(t)),n),arguments,[])).length>1?n:n[0]}const ao=co.bind(rt),lo="crumbs-button";class fo extends HTMLElement{constructor(){super(...arguments);S(this,"clickSubscription",null);S(this,"_progress","0");S(this,"_indeterminate_progress",!1);S(this,"_indeterminate_duration_ms",0);S(this,"_disabled",!1);S(this,"_progressSubject",new Z);S(this,"_disabledSubject",new Z);S(this,"_indeterminateProgressSubject",new Z);S(this,"_indeterminateDurationMsSubject",new Z)}static get observedAttributes(){return["progress","disabled","indeterminate-progress","indeterminate-duration-ms"]}async connectedCallback(){this.attachShadow({mode:"open"});const e=L(this);this._progress=this.getAttribute("progress")||"0",e.appendChild(po.content.cloneNode(!0)),this.render()}attributeChangedCallback(e){if(this.shadowRoot){const r=this.getAttribute("progress"),o=this.getAttribute("disabled"),i=this.getAttribute("indeterminate-progress");this._indeterminate_progress=i!==null&&i!=="false";const s=this.getAttribute("indeterminate-duration-ms");switch(this._indeterminate_duration_ms=Number.isInteger(Number(s))&&Number.isFinite(Number(s))?Number(s):0,this._disabled=o!==null&&o!=="false"||r!==null&&r!=="100",Ie(r)&&(this._progress=r===null?"0":r),this.render(),e){case"progress":this._progressSubject.next(this.getAttribute("progress"));break;case"disabled":this._disabledSubject.next(this.getAttribute("disabled"));break;case"indeterminate-progress":this._indeterminateProgressSubject.next(this.getAttribute("indeterminate-progress"));break;case"indeterminate-duration-ms":this._indeterminateDurationMsSubject.next(this.getAttribute("indeterminate-duration-ms"));break;default:throw new Error("Unknown attribute !")}}}render(){const e=L(this),r=$(e,"#progress"),o=$(e,"button");o instanceof HTMLButtonElement&&(o.disabled=this._disabled),r.style.width=`${this._progress}%`}disconnectedCallback(){var e;(e=this.clickSubscription)==null||e.unsubscribe()}observeLastIndeterminedLoadingTime(){return this._indeterminateProgressSubject.pipe(bt(null),j(e=>e!==null&&e!=="false"),Di(),Mn(([e,r])=>r&&!e),j(()=>Date.now()))}observeLoading(){return An(this._progressSubject.pipe(bt(null)),this.observeLastIndeterminedLoadingTime(),this._indeterminateDurationMsSubject.pipe(bt(null)),this._indeterminateProgressSubject.pipe(bt(null))).pipe($t(([e,r,o,i])=>i!==null&&i!=="false"?r!==null&&Number.isFinite(Number(r))&&Number.isInteger(Number(r))&&r!==null?Ai(100).pipe(j(()=>{const u=Date.now()-r;return String(Math.ceil(Math.min(100,u/Number(o))))})):Nt("0"):Ie(e)?Nt(e||"0"):Nt("100")))}}function Ie(t){if(t===null)return!0;const n=Number(t),e=Math.floor(n);return e===n&&Number.isInteger(e)&&Number.isFinite(e)&&e<=100&&e>=0}customElements.define(lo,fo);const po=it(ao`
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
			animation: transparency-fade 1.5s ease-in-out infinite;
		}

		@keyframes transparency-fade {
			0%, 100% {
				background-color: transparent;
			}
			50% {
				background-color: rgba(255, 255, 255, 1);
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

		button {
			background-color: transparent;
			padding: 0;
			border: none;
		}
	</style>

	<div className="button-container">
		<button disabled className="custom-btn btn-16">
			<slot></slot>
		</button>
		<div className="progress-container">
			<div id="progress"></div>
		</div>
	</div>
`);let bo={data:""},ho=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||bo,mo=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,vo=/\/\*[^]*?\*\/|  +/g,Oe=/\n+/g,U=(t,n)=>{let e="",r="",o="";for(let i in t){let s=t[i];i[0]=="@"?i[1]=="i"?e=i+" "+s+";":r+=i[1]=="f"?U(s,i):i+"{"+U(s,i[1]=="k"?"":n)+"}":typeof s=="object"?r+=U(s,n?n.replace(/([^,])+/g,u=>i.replace(/(^:.*)|([^,])+/g,a=>/&/.test(a)?a.replace(/&/g,u):u?u+" "+a:a)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=U.p?U.p(i,s):i+":"+s+";")}return e+(n&&o?n+"{"+o+"}":o)+r},C={},Fn=t=>{if(typeof t=="object"){let n="";for(let e in t)n+=e+Fn(t[e]);return n}return t},_o=(t,n,e,r,o)=>{let i=Fn(t),s=C[i]||(C[i]=(a=>{let c=0,f=11;for(;c<a.length;)f=101*f+a.charCodeAt(c++)>>>0;return"go"+f})(i));if(!C[s]){let a=i!==t?t:(c=>{let f,l,d=[{}];for(;f=mo.exec(c.replace(vo,""));)f[4]?d.shift():f[3]?(l=f[3].replace(Oe," ").trim(),d.unshift(d[0][l]=d[0][l]||{})):d[0][f[1]]=f[2].replace(Oe," ").trim();return d[0]})(t);C[s]=U(o?{["@keyframes "+s]:a}:a,e?"":"."+s)}let u=e&&C.g?C.g:null;return e&&(C.g=C[s]),((a,c,f,l)=>{l?c.data=c.data.replace(l,a):c.data.indexOf(a)===-1&&(c.data=f?a+c.data:c.data+a)})(C[s],n,r,u),s},yo=(t,n,e)=>t.reduce((r,o,i)=>{let s=n[i];if(s&&s.call){let u=s(e),a=u&&u.props&&u.props.className||/^go/.test(u)&&u;s=a?"."+a:u&&typeof u=="object"?u.props?"":U(u,""):u===!1?"":u}return r+o+(s??"")},"");function V(t){let n=this||{},e=t.call?t(n.p):t;return _o(e.unshift?e.raw?yo(e,[].slice.call(arguments,1),n.p):e.reduce((r,o)=>Object.assign(r,o&&o.call?o(n.p):o),{}):e,ho(n.target),n.g,n.o,n.k)}V.bind({g:1});V.bind({k:1});var It,g,Rn,z,Pe,Dn,Wt,ce,Yt,Gt,tt={},Un=[],go=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ae=Array.isArray;function H(t,n){for(var e in n)t[e]=n[e];return t}function zn(t){var n=t.parentNode;n&&n.removeChild(t)}function Vn(t,n,e){var r,o,i,s={};for(i in n)i=="key"?r=n[i]:i=="ref"?o=n[i]:s[i]=n[i];if(arguments.length>2&&(s.children=arguments.length>3?It.call(arguments,2):e),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)s[i]===void 0&&(s[i]=t.defaultProps[i]);return _t(t,s,r,o,null)}function _t(t,n,e,r,o){var i={type:t,props:n,key:e,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Rn,__i:-1,__u:0};return o==null&&g.vnode!=null&&g.vnode(i),i}function Ot(t){return t.children}function yt(t,n){this.props=t,this.context=n}function B(t,n){if(n==null)return t.__?B(t.__,t.__i+1):null;for(var e;n<t.__k.length;n++)if((e=t.__k[n])!=null&&e.__e!=null)return e.__e;return typeof t.type=="function"?B(t):null}function Bn(t){var n,e;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if((e=t.__k[n])!=null&&e.__e!=null){t.__e=t.__c.base=e.__e;break}return Bn(t)}}function Ce(t){(!t.__d&&(t.__d=!0)&&z.push(t)&&!Et.__r++||Pe!==g.debounceRendering)&&((Pe=g.debounceRendering)||Dn)(Et)}function Et(){var t,n,e,r,o,i,s,u;for(z.sort(Wt);t=z.shift();)t.__d&&(n=z.length,r=void 0,i=(o=(e=t).__v).__e,s=[],u=[],e.__P&&((r=H({},o)).__v=o.__v+1,g.vnode&&g.vnode(r),le(e.__P,r,o,e.__n,e.__P.namespaceURI,32&o.__u?[i]:null,s,i??B(o),!!(32&o.__u),u),r.__v=o.__v,r.__.__k[r.__i]=r,Yn(s,r,u),r.__e!=i&&Bn(r)),z.length>n&&z.sort(Wt));Et.__r=0}function qn(t,n,e,r,o,i,s,u,a,c,f){var l,d,p,h,b,m=r&&r.__k||Un,v=n.length;for(e.__d=a,wo(e,n,m),a=e.__d,l=0;l<v;l++)(p=e.__k[l])!=null&&typeof p!="boolean"&&typeof p!="function"&&(d=p.__i===-1?tt:m[p.__i]||tt,p.__i=l,le(t,p,d,o,i,s,u,a,c,f),h=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&fe(d.ref,null,p),f.push(p.ref,p.__c||h,p)),b==null&&h!=null&&(b=h),65536&p.__u||d.__k===p.__k?(a&&!a.isConnected&&(a=B(d)),a=Wn(p,a,t)):typeof p.type=="function"&&p.__d!==void 0?a=p.__d:h&&(a=h.nextSibling),p.__d=void 0,p.__u&=-196609);e.__d=a,e.__e=b}function wo(t,n,e){var r,o,i,s,u,a=n.length,c=e.length,f=c,l=0;for(t.__k=[],r=0;r<a;r++)s=r+l,(o=t.__k[r]=(o=n[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?_t(null,o,null,null,null):ae(o)?_t(Ot,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?_t(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,u=xo(o,e,s,f),o.__i=u,i=null,u!==-1&&(f--,(i=e[u])&&(i.__u|=131072)),i==null||i.__v===null?(u==-1&&l--,typeof o.type!="function"&&(o.__u|=65536)):u!==s&&(u===s+1?l++:u>s?f>a-s?l+=u-s:l--:u<s?u==s-1&&(l=u-s):l=0,u!==r+l&&(o.__u|=65536))):(i=e[s])&&i.key==null&&i.__e&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=B(i)),Jt(i,i,!1),e[s]=null,f--);if(f)for(r=0;r<c;r++)(i=e[r])!=null&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=B(i)),Jt(i,i))}function Wn(t,n,e){var r,o;if(typeof t.type=="function"){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,n=Wn(r[o],n,e));return n}t.__e!=n&&(e.insertBefore(t.__e,n||null),n=t.__e);do n=n&&n.nextSibling;while(n!=null&&n.nodeType===8);return n}function xo(t,n,e,r){var o=t.key,i=t.type,s=e-1,u=e+1,a=n[e];if(a===null||a&&o==a.key&&i===a.type&&!(131072&a.__u))return e;if(r>(a!=null&&!(131072&a.__u)?1:0))for(;s>=0||u<n.length;){if(s>=0){if((a=n[s])&&!(131072&a.__u)&&o==a.key&&i===a.type)return s;s--}if(u<n.length){if((a=n[u])&&!(131072&a.__u)&&o==a.key&&i===a.type)return u;u++}}return-1}function je(t,n,e){n[0]==="-"?t.setProperty(n,e??""):t[n]=e==null?"":typeof e!="number"||go.test(n)?e:e+"px"}function ht(t,n,e,r,o){var i;t:if(n==="style")if(typeof e=="string")t.style.cssText=e;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(n in r)e&&n in e||je(t.style,n,"");if(e)for(n in e)r&&e[n]===r[n]||je(t.style,n,e[n])}else if(n[0]==="o"&&n[1]==="n")i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in t||n==="onFocusOut"||n==="onFocusIn"?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+i]=e,e?r?e.u=r.u:(e.u=ce,t.addEventListener(n,i?Gt:Yt,i)):t.removeEventListener(n,i?Gt:Yt,i);else{if(o=="http://www.w3.org/2000/svg")n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!="width"&&n!="height"&&n!="href"&&n!="list"&&n!="form"&&n!="tabIndex"&&n!="download"&&n!="rowSpan"&&n!="colSpan"&&n!="role"&&n in t)try{t[n]=e??"";break t}catch{}typeof e=="function"||(e==null||e===!1&&n[4]!=="-"?t.removeAttribute(n):t.setAttribute(n,e))}}function Ae(t){return function(n){if(this.l){var e=this.l[n.type+t];if(n.t==null)n.t=ce++;else if(n.t<e.u)return;return e(g.event?g.event(n):n)}}}function le(t,n,e,r,o,i,s,u,a,c){var f,l,d,p,h,b,m,v,y,M,lt,K,be,ft,jt,T=n.type;if(n.constructor!==void 0)return null;128&e.__u&&(a=!!(32&e.__u),i=[u=n.__e=e.__e]),(f=g.__b)&&f(n);t:if(typeof T=="function")try{if(v=n.props,y=(f=T.contextType)&&r[f.__c],M=f?y?y.props.value:f.__:r,e.__c?m=(l=n.__c=e.__c).__=l.__E:("prototype"in T&&T.prototype.render?n.__c=l=new T(v,M):(n.__c=l=new yt(v,M),l.constructor=T,l.render=Eo),y&&y.sub(l),l.props=v,l.state||(l.state={}),l.context=M,l.__n=r,d=l.__d=!0,l.__h=[],l._sb=[]),l.__s==null&&(l.__s=l.state),T.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=H({},l.__s)),H(l.__s,T.getDerivedStateFromProps(v,l.__s))),p=l.props,h=l.state,l.__v=n,d)T.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(T.getDerivedStateFromProps==null&&v!==p&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,M),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,M)===!1||n.__v===e.__v)){for(n.__v!==e.__v&&(l.props=v,l.state=l.__s,l.__d=!1),n.__e=e.__e,n.__k=e.__k,n.__k.forEach(function(pt){pt&&(pt.__=n)}),lt=0;lt<l._sb.length;lt++)l.__h.push(l._sb[lt]);l._sb=[],l.__h.length&&s.push(l);break t}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,M),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(p,h,b)})}if(l.context=M,l.props=v,l.__P=t,l.__e=!1,K=g.__r,be=0,"prototype"in T&&T.prototype.render){for(l.state=l.__s,l.__d=!1,K&&K(n),f=l.render(l.props,l.state,l.context),ft=0;ft<l._sb.length;ft++)l.__h.push(l._sb[ft]);l._sb=[]}else do l.__d=!1,K&&K(n),f=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++be<25);l.state=l.__s,l.getChildContext!=null&&(r=H(H({},r),l.getChildContext())),d||l.getSnapshotBeforeUpdate==null||(b=l.getSnapshotBeforeUpdate(p,h)),qn(t,ae(jt=f!=null&&f.type===Ot&&f.key==null?f.props.children:f)?jt:[jt],n,e,r,o,i,s,u,a,c),l.base=n.__e,n.__u&=-161,l.__h.length&&s.push(l),m&&(l.__E=l.__=null)}catch(pt){n.__v=null,a||i!=null?(n.__e=u,n.__u|=a?160:32,i[i.indexOf(u)]=null):(n.__e=e.__e,n.__k=e.__k),g.__e(pt,n,e)}else i==null&&n.__v===e.__v?(n.__k=e.__k,n.__e=e.__e):n.__e=So(e.__e,n,e,r,o,i,s,a,c);(f=g.diffed)&&f(n)}function Yn(t,n,e){n.__d=void 0;for(var r=0;r<e.length;r++)fe(e[r],e[++r],e[++r]);g.__c&&g.__c(n,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){g.__e(i,o.__v)}})}function So(t,n,e,r,o,i,s,u,a){var c,f,l,d,p,h,b,m=e.props,v=n.props,y=n.type;if(y==="svg"?o="http://www.w3.org/2000/svg":y==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(c=0;c<i.length;c++)if((p=i[c])&&"setAttribute"in p==!!y&&(y?p.localName===y:p.nodeType===3)){t=p,i[c]=null;break}}if(t==null){if(y===null)return document.createTextNode(v);t=document.createElementNS(o,y,v.is&&v),i=null,u=!1}if(y===null)m===v||u&&t.data===v||(t.data=v);else{if(i=i&&It.call(t.childNodes),m=e.props||tt,!u&&i!=null)for(m={},c=0;c<t.attributes.length;c++)m[(p=t.attributes[c]).name]=p.value;for(c in m)if(p=m[c],c!="children"){if(c=="dangerouslySetInnerHTML")l=p;else if(c!=="key"&&!(c in v)){if(c=="value"&&"defaultValue"in v||c=="checked"&&"defaultChecked"in v)continue;ht(t,c,null,p,o)}}for(c in v)p=v[c],c=="children"?d=p:c=="dangerouslySetInnerHTML"?f=p:c=="value"?h=p:c=="checked"?b=p:c==="key"||u&&typeof p!="function"||m[c]===p||ht(t,c,p,m[c],o);if(f)u||l&&(f.__html===l.__html||f.__html===t.innerHTML)||(t.innerHTML=f.__html),n.__k=[];else if(l&&(t.innerHTML=""),qn(t,ae(d)?d:[d],n,e,r,y==="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,s,i?i[0]:e.__k&&B(e,0),u,a),i!=null)for(c=i.length;c--;)i[c]!=null&&zn(i[c]);u||(c="value",h!==void 0&&(h!==t[c]||y==="progress"&&!h||y==="option"&&h!==m[c])&&ht(t,c,h,m[c],o),c="checked",b!==void 0&&b!==t[c]&&ht(t,c,b,m[c],o))}return t}function fe(t,n,e){try{typeof t=="function"?t(n):t.current=n}catch(r){g.__e(r,e)}}function Jt(t,n,e){var r,o;if(g.unmount&&g.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||fe(r,null,n)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){g.__e(i,n)}r.base=r.__P=null}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&Jt(r[o],n,e||typeof t.type!="function");e||t.__e==null||zn(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function Eo(t,n,e){return this.constructor(t,e)}function ko(t,n,e){var r,o,i,s;g.__&&g.__(t,n),o=(r=typeof e=="function")?null:n.__k,i=[],s=[],le(n,t=(!r&&e||n).__k=Vn(Ot,null,[t]),o||tt,tt,n.namespaceURI,!r&&e?[e]:o?null:n.firstChild?It.call(n.childNodes):null,i,!r&&e?e:o?o.__e:n.firstChild,r,s),Yn(i,t,s)}It=Un.slice,g={__e:function(t,n,e,r){for(var o,i,s;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),s=o.__d),s)return o.__E=o}catch(u){t=u}throw t}},Rn=0,yt.prototype.setState=function(t,n){var e;e=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=H({},this.state),typeof t=="function"&&(t=t(H({},e),this.props)),t&&H(e,t),t!=null&&this.__v&&(n&&this._sb.push(n),Ce(this))},yt.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Ce(this))},yt.prototype.render=Ot,z=[],Dn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Wt=function(t,n){return t.__v.__b-n.__v.__b},Et.__r=0,ce=0,Yt=Ae(!1),Gt=Ae(!0);var Gn=function(t,n,e,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var s=n[i++],u=n[i]?(n[0]|=s?1:2,e[n[i++]]):n[++i];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[n[++i]]=u:s===6?r[1][n[++i]]+=u+"":s?(o=t.apply(u,Gn(t,u,e,["",null])),r.push(o),u[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(u)}return r},Le=new Map;function To(t){var n=Le.get(this);return n||(n=new Map,Le.set(this,n)),(n=Gn(this,n.get(t)||(n.set(t,n=function(e){for(var r,o,i=1,s="",u="",a=[0],c=function(d){i===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,d,s):i===3&&(d||s)?(a.push(3,d,s),i=2):i===2&&s==="..."&&d?a.push(4,d,0):i===2&&s&&!d?a.push(5,0,!0,s):i>=5&&((s||!d&&i===5)&&(a.push(i,0,s,o),i=6),d&&(a.push(i,d,0,o),i=6)),s=""},f=0;f<e.length;f++){f&&(i===1&&c(),c(f));for(var l=0;l<e[f].length;l++)r=e[f][l],i===1?r==="<"?(c(),a=[a],i=3):s+=r:i===4?s==="--"&&r===">"?(i=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(c(),i=1):i&&(r==="="?(i=5,o=s,s=""):r==="/"&&(i<5||e[f][l+1]===">")?(c(),i===3&&(a=a[0]),i=a,(a=a[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(c(),i=2):s+=r),i===3&&s==="!--"&&(i=4,a=a[0])}return c(),a}(t)),n),arguments,[])).length>1?n:n[0]}var I=To.bind(Vn),et,w,Ft,Me,nt=0,Jn=[],gt=[],x=g,He=x.__b,Ne=x.__r,Fe=x.diffed,Re=x.__c,De=x.unmount,Ue=x.__;function pe(t,n){x.__h&&x.__h(w,t,nt||n),nt=0;var e=w.__H||(w.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({__V:gt}),e.__[t]}function k(t){return nt=1,$o(Xn,t)}function $o(t,n,e){var r=pe(et++,2);if(r.t=t,!r.__c&&(r.__=[Xn(void 0,n),function(u){var a=r.__N?r.__N[0]:r.__[0],c=r.t(a,u);a!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=w,!w.u)){var o=function(u,a,c){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(d){return!!d.__c});if(f.every(function(d){return!d.__N}))return!i||i.call(this,u,a,c);var l=!1;return f.forEach(function(d){if(d.__N){var p=d.__[0];d.__=d.__N,d.__N=void 0,p!==d.__[0]&&(l=!0)}}),!(!l&&r.__c.props===u)&&(!i||i.call(this,u,a,c))};w.u=!0;var i=w.shouldComponentUpdate,s=w.componentWillUpdate;w.componentWillUpdate=function(u,a,c){if(this.__e){var f=i;i=void 0,o(u,a,c),i=f}s&&s.call(this,u,a,c)},w.shouldComponentUpdate=o}return r.__N||r.__}function Io(t,n){var e=pe(et++,3);!x.__s&&Zn(e.__H,n)&&(e.__=t,e.i=n,w.__H.__h.push(e))}function Oo(t){return nt=5,Kn(function(){return{current:t}},[])}function Kn(t,n){var e=pe(et++,7);return Zn(e.__H,n)?(e.__V=t(),e.i=n,e.__h=t,e.__V):e.__}function Qn(t,n){return nt=8,Kn(function(){return t},n)}function Po(){for(var t;t=Jn.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(wt),t.__H.__h.forEach(Kt),t.__H.__h=[]}catch(n){t.__H.__h=[],x.__e(n,t.__v)}}x.__b=function(t){w=null,He&&He(t)},x.__=function(t,n){t&&n.__k&&n.__k.__m&&(t.__m=n.__k.__m),Ue&&Ue(t,n)},x.__r=function(t){Ne&&Ne(t),et=0;var n=(w=t.__c).__H;n&&(Ft===w?(n.__h=[],w.__h=[],n.__.forEach(function(e){e.__N&&(e.__=e.__N),e.__V=gt,e.__N=e.i=void 0})):(n.__h.forEach(wt),n.__h.forEach(Kt),n.__h=[],et=0)),Ft=w},x.diffed=function(t){Fe&&Fe(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(Jn.push(n)!==1&&Me===x.requestAnimationFrame||((Me=x.requestAnimationFrame)||Co)(Po)),n.__H.__.forEach(function(e){e.i&&(e.__H=e.i),e.__V!==gt&&(e.__=e.__V),e.i=void 0,e.__V=gt})),Ft=w=null},x.__c=function(t,n){n.some(function(e){try{e.__h.forEach(wt),e.__h=e.__h.filter(function(r){return!r.__||Kt(r)})}catch(r){n.some(function(o){o.__h&&(o.__h=[])}),n=[],x.__e(r,e.__v)}}),Re&&Re(t,n)},x.unmount=function(t){De&&De(t);var n,e=t.__c;e&&e.__H&&(e.__H.__.forEach(function(r){try{wt(r)}catch(o){n=o}}),e.__H=void 0,n&&x.__e(n,e.__v))};var ze=typeof requestAnimationFrame=="function";function Co(t){var n,e=function(){clearTimeout(r),ze&&cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);ze&&(n=requestAnimationFrame(e))}function wt(t){var n=w,e=t.__c;typeof e=="function"&&(t.__c=void 0,e()),w=n}function Kt(t){var n=w;t.__c=t.__(),w=n}function Zn(t,n){return!t||t.length!==n.length||n.some(function(e,r){return e!==t[r]})}function Xn(t,n){return typeof n=="function"?n(t):n}function kt(t,n){var e=k(n),r=e[0],o=e[1],i=Oo(t);return Io(function(){var s=i.current.subscribe(o);return function(){return s.unsubscribe()}}),r}var Qt=function(t,n){return Qt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])},Qt(t,n)};function Pt(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");Qt(t,n);function e(){this.constructor=t}t.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}function Zt(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Xt(t,n){var e=typeof Symbol=="function"&&t[Symbol.iterator];if(!e)return t;var r=e.call(t),o,i=[],s;try{for(;(n===void 0||n-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(e=r.return)&&e.call(r)}finally{if(s)throw s.error}}return i}function te(t,n,e){if(e||arguments.length===2)for(var r=0,o=n.length,i;r<o;r++)(i||!(r in n))&&(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return t.concat(i||Array.prototype.slice.call(n))}function A(t){return typeof t=="function"}function tr(t){var n=function(r){Error.call(r),r.stack=new Error().stack},e=t(n);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Rt=tr(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function ee(t,n){if(t){var e=t.indexOf(n);0<=e&&t.splice(e,1)}}var Ct=function(){function t(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var n,e,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=Zt(s),a=u.next();!a.done;a=u.next()){var c=a.value;c.remove(this)}}catch(b){n={error:b}}finally{try{a&&!a.done&&(e=u.return)&&e.call(u)}finally{if(n)throw n.error}}else s.remove(this);var f=this.initialTeardown;if(A(f))try{f()}catch(b){i=b instanceof Rt?b.errors:[b]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var d=Zt(l),p=d.next();!p.done;p=d.next()){var h=p.value;try{Ve(h)}catch(b){i=i??[],b instanceof Rt?i=te(te([],Xt(i)),Xt(b.errors)):i.push(b)}}}catch(b){r={error:b}}finally{try{p&&!p.done&&(o=d.return)&&o.call(d)}finally{if(r)throw r.error}}}if(i)throw new Rt(i)}},t.prototype.add=function(n){var e;if(n&&n!==this)if(this.closed)Ve(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}},t.prototype._hasParent=function(n){var e=this._parentage;return e===n||Array.isArray(e)&&e.includes(n)},t.prototype._addParent=function(n){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n},t.prototype._removeParent=function(n){var e=this._parentage;e===n?this._parentage=null:Array.isArray(e)&&ee(e,n)},t.prototype.remove=function(n){var e=this._finalizers;e&&ee(e,n),n instanceof t&&n._removeParent(this)},t.EMPTY=function(){var n=new t;return n.closed=!0,n}(),t}(),er=Ct.EMPTY;function nr(t){return t instanceof Ct||t&&"closed"in t&&A(t.remove)&&A(t.add)&&A(t.unsubscribe)}function Ve(t){A(t)?t():t.unsubscribe()}var rr={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},jo={setTimeout:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return setTimeout.apply(void 0,te([t,n],Xt(e)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function Ao(t){jo.setTimeout(function(){throw t})}function Be(){}function xt(t){t()}var ir=function(t){Pt(n,t);function n(e){var r=t.call(this)||this;return r.isStopped=!1,e?(r.destination=e,nr(e)&&e.add(r)):r.destination=No,r}return n.create=function(e,r,o){return new ne(e,r,o)},n.prototype.next=function(e){this.isStopped||this._next(e)},n.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(e){this.destination.next(e)},n.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(Ct),Lo=Function.prototype.bind;function Dt(t,n){return Lo.call(t,n)}var Mo=function(){function t(n){this.partialObserver=n}return t.prototype.next=function(n){var e=this.partialObserver;if(e.next)try{e.next(n)}catch(r){mt(r)}},t.prototype.error=function(n){var e=this.partialObserver;if(e.error)try{e.error(n)}catch(r){mt(r)}else mt(n)},t.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(e){mt(e)}},t}(),ne=function(t){Pt(n,t);function n(e,r,o){var i=t.call(this)||this,s;if(A(e)||!e)s={next:e??void 0,error:r??void 0,complete:o??void 0};else{var u;i&&rr.useDeprecatedNextContext?(u=Object.create(e),u.unsubscribe=function(){return i.unsubscribe()},s={next:e.next&&Dt(e.next,u),error:e.error&&Dt(e.error,u),complete:e.complete&&Dt(e.complete,u)}):s=e}return i.destination=new Mo(s),i}return n}(ir);function mt(t){Ao(t)}function Ho(t){throw t}var No={closed:!0,next:Be,error:Ho,complete:Be},Fo=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Ro(t){return t}function Do(t){return t.length===0?Ro:t.length===1?t[0]:function(e){return t.reduce(function(r,o){return o(r)},e)}}var qe=function(){function t(n){n&&(this._subscribe=n)}return t.prototype.lift=function(n){var e=new t;return e.source=this,e.operator=n,e},t.prototype.subscribe=function(n,e,r){var o=this,i=zo(n)?n:new ne(n,e,r);return xt(function(){var s=o,u=s.operator,a=s.source;i.add(u?u.call(i,a):a?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(e){n.error(e)}},t.prototype.forEach=function(n,e){var r=this;return e=We(e),new e(function(o,i){var s=new ne({next:function(u){try{n(u)}catch(a){i(a),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},t.prototype._subscribe=function(n){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(n)},t.prototype[Fo]=function(){return this},t.prototype.pipe=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return Do(n)(this)},t.prototype.toPromise=function(n){var e=this;return n=We(n),new n(function(r,o){var i;e.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},t.create=function(n){return new t(n)},t}();function We(t){var n;return(n=t??rr.Promise)!==null&&n!==void 0?n:Promise}function Uo(t){return t&&A(t.next)&&A(t.error)&&A(t.complete)}function zo(t){return t&&t instanceof ir||Uo(t)&&nr(t)}var Vo=tr(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),de=function(t){Pt(n,t);function n(){var e=t.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return n.prototype.lift=function(e){var r=new Ye(this,this);return r.operator=e,r},n.prototype._throwIfClosed=function(){if(this.closed)throw new Vo},n.prototype.next=function(e){var r=this;xt(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=Zt(r.currentObservers),u=s.next();!u.done;u=s.next()){var a=u.value;a.next(e)}}catch(c){o={error:c}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},n.prototype.error=function(e){var r=this;xt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=e;for(var o=r.observers;o.length;)o.shift().error(e)}})},n.prototype.complete=function(){var e=this;xt(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var r=e.observers;r.length;)r.shift().complete()}})},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},n.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},n.prototype._innerSubscribe=function(e){var r=this,o=this,i=o.hasError,s=o.isStopped,u=o.observers;return i||s?er:(this.currentObservers=null,u.push(e),new Ct(function(){r.currentObservers=null,ee(u,e)}))},n.prototype._checkFinalizedStatuses=function(e){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?e.error(i):s&&e.complete()},n.prototype.asObservable=function(){var e=new qe;return e.source=this,e},n.create=function(e,r){return new Ye(e,r)},n}(qe),Ye=function(t){Pt(n,t);function n(e,r){var o=t.call(this)||this;return o.destination=e,o.source=r,o}return n.prototype.next=function(e){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,e)},n.prototype.error=function(e){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,e)},n.prototype.complete=function(){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||r===void 0||r.call(e)},n.prototype._subscribe=function(e){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(e))!==null&&o!==void 0?o:er},n}(de),or=4,sr=new de,ur=sr.asObservable();function cr(){return or}function W(t){or=t,sr.next(t)}var ar="initial",lr=new de,fr=lr.asObservable();function pr(){return ar}function D(t){ar=t,lr.next(t)}var dr=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},Ut=V(Ge||(Ge=dr([`
	height: 95%;
	display: grid;
	place-content: center;
`],[`
	height: 95%;
	display: grid;
	place-content: center;
`])));function at(t){var n=t.title,e=t.children;return I(Je||(Je=dr([`
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
	`])),n,Ut,e[0],Ut,e[1],Ut,e[2])}var Ge,Je,Bo=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};function qo(){var t=k("I'm an input !"),n=t[0],e=t[1],r=`&lt;crumbs-input
	value="`.concat(n,`"&gt;
&lt;/crumbs-input&gt;`);return I(Ke||(Ke=Bo([`
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
	`])),at,n,function(o){return e(o.originalTarget.value)},n,function(o){return e(o.originalTarget.value)},{__html:r})}var Ke,Wo=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};function Yo(){var t=k("I'm a <b>paragraph</b> !"),n=t[0],e=t[1];return I(Qe||(Qe=Wo([`
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
	`])),at,{__html:n},n,function(r){return e(r.originalTarget.value)},{__html:"&lt;crumbs-p&gt; ".concat(n," &lt;/crumbs-p&gt;")})}var Qe,Go=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},Jo=function(t,n,e,r){function o(i){return i instanceof e?i:new e(function(s){s(i)})}return new(e||(e=Promise))(function(i,s){function u(f){try{c(r.next(f))}catch(l){s(l)}}function a(f){try{c(r.throw(f))}catch(l){s(l)}}function c(f){f.done?i(f.value):o(f.value).then(u,a)}c((r=r.apply(t,n||[])).next())})},Ko=function(t,n){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(c){return function(f){return a([c,f])}}function a(c){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(e=0)),e;)try{if(r=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){e.label=c[1];break}if(c[0]===6&&e.label<i[1]){e.label=i[1],i=c;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(c);break}i[2]&&e.ops.pop(),e.trys.pop();continue}c=n.call(t,e)}catch(f){c=[6,f],o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};function Qo(){var t=this,n=k("I'm a panel !"),e=n[0],r=n[1],o=k(""),i=o[0],s=o[1],u=k("100"),a=u[0],c=u[1],f=k(!1),l=f[0],d=f[1],p=`&lt;crumbs-panel
	panel-title="`.concat(i,`"
	panel-loading="`).concat(a,`"&gt;
	`).concat(e,`
&lt;/crumbs-panel&gt;`),h=Qn(function(){return Jo(t,void 0,void 0,function(){var m;return Ko(this,function(v){switch(v.label){case 0:if(l)return[2];d(!0),c("0"),m=0,v.label=1;case 1:return m<=100?[4,new Promise(function(y){return setTimeout(y,10)})]:[3,4];case 2:v.sent(),c(Math.floor(m).toString()),v.label=3;case 3:return m+=.1+(100-m)/100,[3,1];case 4:return c("100"),d(!1),[2]}})})},[l]),b=function(){l||h()};return I(Ze||(Ze=Go([`
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
	`])),at,a,i,e,i,function(m){return s(m.originalTarget.value)},e,function(m){return r(m.originalTarget.value)},a,function(m){return c(String(m.target.value))},b,{__html:p})}var Ze,Zo=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};function Xo(){var t=k("Tab content"),n=t[0],e=t[1],r=k("Tab title"),o=r[0],i=r[1],s=k("Tab content 2"),u=s[0],a=s[1],c=k("Tab title 2"),f=c[0],l=c[1],d=`&lt;crumbs-tabs&gt;
	&lt;crumbs-p
		slot="title-1"&gt;
		`.concat(o,`
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
&lt;/crumbs-panel&gt;`);return I(Xe||(Xe=Zo([`
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
	`])),at,o,n,f,u,o,function(p){return i(p.originalTarget.value)},n,function(p){return e(p.originalTarget.value)},f,function(p){return l(p.originalTarget.value)},u,function(p){return a(p.originalTarget.value)},{__html:d})}var Xe,ts=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};function es(){return I(tn||(tn=ts([`
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
	`])))}var tn,zt=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};function ns(){var t=kt(ur,cr),n=kt(fr,pr),e=V(en||(en=zt([`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`],[`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`]))),r=V(nn||(nn=zt([`
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
	`])));return I(rn||(rn=zt([`
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
	`])),e,r,t===1,function(){return W(1)},t===2,function(){return W(2)},t===3,function(){return W(3)},t===4,function(){return W(4)},t===5,function(){return W(5)},t===6,function(){return W(6)},r,n==="initial",function(){return D("initial")},n==="monospace",function(){return D("monospace")},n==="serif",function(){return D("serif")},n==="sans-serif",function(){return D("sans-serif")},n==="cursive",function(){return D("cursive")},n==="fantasy",function(){return D("fantasy")},n==="system-ui",function(){return D("system-ui")})}var en,nn,rn,rs=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};function is(){var t="&lt;crumbs-p&gt; Hello world ! &lt;/crumbs-p&gt;";return I(on||(on=rs([`
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
	`])),{__html:t})}var on,os=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},ss=function(t,n,e,r){function o(i){return i instanceof e?i:new e(function(s){s(i)})}return new(e||(e=Promise))(function(i,s){function u(f){try{c(r.next(f))}catch(l){s(l)}}function a(f){try{c(r.throw(f))}catch(l){s(l)}}function c(f){f.done?i(f.value):o(f.value).then(u,a)}c((r=r.apply(t,n||[])).next())})},us=function(t,n){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(c){return function(f){return a([c,f])}}function a(c){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(e=0)),e;)try{if(r=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){e.label=c[1];break}if(c[0]===6&&e.label<i[1]){e.label=i[1],i=c;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(c);break}i[2]&&e.ops.pop(),e.trys.pop();continue}c=n.call(t,e)}catch(f){c=[6,f],o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};function cs(){var t=this,n=k("Click me !"),e=n[0],r=n[1],o=k("100"),i=o[0],s=o[1],u=k(!1),a=u[0],c=u[1],f=Qn(function(){return ss(t,void 0,void 0,function(){var p;return us(this,function(h){switch(h.label){case 0:if(a)return[2];c(!0),s("0"),p=0,h.label=1;case 1:return p<=100?[4,new Promise(function(b){return setTimeout(b,10)})]:[3,4];case 2:h.sent(),s(Math.floor(p).toString()),h.label=3;case 3:return p+=.1+(100-p)/100,[3,1];case 4:return s("100"),c(!1),[2]}})})},[a]),l=function(){a||f()},d='&lt;crumbs-button progress="'.concat(i,'" &gt; ').concat(e," &lt;/crumbs-button&gt;");return I(sn||(sn=os([`
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
	`])),at,i,i,i,e,e,function(p){return r(p.originalTarget.value)},i,function(p){return s(String(p.target.value))},l,{__html:d})}var sn;function as(){const t=kt(ur,cr),n=kt(fr,pr),e=V`
		background-image: url('bg${t}.jpg');
		background-size: cover;
		min-height: 100vh;
		position: fixed;
		min-width: 100vw;
		background-position: center;
	`,r=V`
		display: grid;
		overflow-y: scroll;
		height: 100vh;
		grid-template-columns: repeat(auto-fit, minmax(max(28rem + 6vw), 1fr));
		font-family: ${n};
	`;return I`
		<div class=${e}></div>

		<div class=${r}>
			<${es}><//>
			<${is}><//>
			<${ns}><//>
			<${Yo}><//>
			<${Qo}><//>
			<${qo}><//>
			<${Xo}><//>
			<${cs}><//>
		</div>
	`}ko(I`<${as}><//>`,document.body);
