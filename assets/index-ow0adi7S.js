var dr=Object.defineProperty;var hr=(e,n,t)=>n in e?dr(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var x=(e,n,t)=>hr(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function It(e){for(var n,t,r=arguments,o=1,i="",s="",u=[0],a=function(l){o===1&&(l||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(l?r[l]:i):o===3&&(l||i)?(u[1]=l?r[l]:i,o=2):o===2&&i==="..."&&l?u[2]=Object.assign(u[2]||{},r[l]):o===2&&i&&!l?(u[2]=u[2]||{})[i]=!0:o>=5&&(o===5?((u[2]=u[2]||{})[t]=l?i?i+r[l]:r[l]:i,o=6):(l||i)&&(u[2][t]+=l?i+r[l]:i)),i=""},c=0;c<e.length;c++){c&&(o===1&&a(),a(c));for(var f=0;f<e[c].length;f++)n=e[c][f],o===1?n==="<"?(a(),u=[u,"",null],o=3):i+=n:o===4?i==="--"&&n===">"?(o=1,i=""):i=n+i[0]:s?n===s?s="":i+=n:n==='"'||n==="'"?s=n:n===">"?(a(),o=1):o&&(n==="="?(o=5,t=i,i=""):n==="/"&&(o<5||e[c][f+1]===">")?(a(),o===3&&(u=u[0]),o=u,(u=u[0]).push(this.apply(null,o.slice(1))),o=0):n===" "||n==="	"||n===`
`||n==="\r"?(a(),o=2):i+=n),o===3&&i==="!--"&&(o=4,u=u[0])}return a(),u.length>2?u.slice(1):u[1]}function br(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function mr(e){if(e.__esModule)return e;var n=e.default;if(typeof n=="function"){var t=function r(){return this instanceof r?Reflect.construct(n,arguments,this.constructor):n.apply(this,arguments)};t.prototype=n.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),t}var un={exports:{}};/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */var vr=function(n){var t=String.prototype.split,r=/()??/.exec("")[1]===n,o;return o=function(i,l,u){if(Object.prototype.toString.call(l)!=="[object RegExp]")return t.call(i,l,u);var a=[],c=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.extended?"x":"")+(l.sticky?"y":""),f=0,l=new RegExp(l.source,c+"g"),d,p,b,h;for(i+="",r||(d=new RegExp("^"+l.source+"$(?!\\s)",c)),u=u===n?-1>>>0:u>>>0;(p=l.exec(i))&&(b=p.index+p[0].length,!(b>f&&(a.push(i.slice(f,p.index)),!r&&p.length>1&&p[0].replace(d,function(){for(var m=1;m<arguments.length-2;m++)arguments[m]===n&&(p[m]=n)}),p.length>1&&p.index<i.length&&Array.prototype.push.apply(a,p.slice(1)),h=p[0].length,f=b,a.length>=u)));)l.lastIndex===p.index&&l.lastIndex++;return f===i.length?(h||!l.test(""))&&a.push(""):a.push(i.slice(f)),a.length>u?a.slice(0,u):a},o}(),_r=[].indexOf,yr=function(e,n){if(_r)return e.indexOf(n);for(var t=0;t<e.length;++t)if(e[t]===n)return t;return-1},Lt=yr,gr=wr;function wr(e){var n=e.classList;if(n)return n;var t={add:r,remove:o,contains:i,toggle:s,toString:u,length:0,item:a};return t;function r(l){var d=c();Lt(d,l)>-1||(d.push(l),f(d))}function o(l){var d=c(),p=Lt(d,l);p!==-1&&(d.splice(p,1),f(d))}function i(l){return Lt(c(),l)>-1}function s(l){return i(l)?(o(l),!1):(r(l),!0)}function u(){return e.className}function a(l){var d=c();return d[l]||null}function c(){var l=e.className;return xr(l.split(" "),Sr)}function f(l){var d=l.length;e.className=l.join(" "),t.length=d;for(var p=0;p<l.length;p++)t[p]=l[p];delete l[d]}}function xr(e,n){for(var t=[],r=0;r<e.length;r++)n(e[r])&&t.push(e[r]);return t}function Sr(e){return!!e}const $r={},Er=Object.freeze(Object.defineProperty({__proto__:null,default:$r},Symbol.toStringTag,{value:"Module"})),Tr=mr(Er);var Ir=vr,kr=gr,cn=typeof window>"u"?Tr:window,X=cn.document,Or=cn.Text;function an(){var e=[];function n(){var t=[].slice.call(arguments),r=null;function o(i){var s;function u(l){var d=Ir(l,/([\.#]?[^\s#.]+)/);/^\.|#/.test(d[1])&&(r=X.createElement("div")),be(d,function(p){var b=p.substring(1,p.length);p&&(r?p[0]==="."?kr(r).add(b):p[0]==="#"&&r.setAttribute("id",b):r=X.createElement(p))})}if(i!=null){if(typeof i=="string")r?r.appendChild(s=X.createTextNode(i)):u(i);else if(typeof i=="number"||typeof i=="boolean"||i instanceof Date||i instanceof RegExp)r.appendChild(s=X.createTextNode(i.toString()));else if(Cr(i))be(i,o);else if(Mt(i))r.appendChild(s=i);else if(i instanceof Or)r.appendChild(s=i);else if(typeof i=="object")for(var a in i)if(typeof i[a]=="function")/^on\w+/.test(a)?function(l,d){r.addEventListener?(r.addEventListener(l.substring(2),d[l],!1),e.push(function(){r.removeEventListener(l.substring(2),d[l],!1)})):(r.attachEvent(l,d[l]),e.push(function(){r.detachEvent(l,d[l])}))}(a,i):(r[a]=i[a](),e.push(i[a](function(l){r[a]=l})));else if(a==="style")if(typeof i[a]=="string")r.style.cssText=i[a];else for(var c in i[a])(function(l,d){if(typeof d=="function")r.style.setProperty(l,d()),e.push(d(function(b){r.style.setProperty(l,b)}));else var p=i[a][l].match(/(.*)\W+!important\W*$/);p?r.style.setProperty(l,p[1],"important"):r.style.setProperty(l,i[a][l])})(c,i[a][c]);else if(a==="attrs")for(var f in i[a])r.setAttribute(f,i[a][f]);else a.substr(0,5)==="data-"?r.setAttribute(a,i[a]):r[a]=i[a];else if(typeof i=="function"){var f=i();r.appendChild(s=Mt(f)?f:X.createTextNode(f)),e.push(i(function(d){Mt(d)&&s.parentElement?(s.parentElement.replaceChild(d,s),s=d):s.textContent=d}))}}return s}for(;t.length;)o(t.shift());return r}return n.cleanup=function(){for(var t=0;t<e.length;t++)e[t]();e.length=0},n}var Pr=un.exports=an();Pr.context=an;function Mt(e){return e&&e.nodeName&&e.nodeType}function be(e,n){if(e.forEach)return e.forEach(n);for(var t=0;t<e.length;t++)n(e[t],t)}function Cr(e){return Object.prototype.toString.call(e)=="[object Array]"}var Ar=un.exports;const ot=br(Ar);function L(e){if(!e.shadowRoot)throw new Error("There is no shadow root on the element !");return e.shadowRoot}function st(e){const n=Array.isArray(e)?e:[e],t=document.createElement("template");return t.innerHTML=n.map(r=>r.outerHTML).join(""),t}var Vt=function(e,n){return Vt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])},Vt(e,n)};function D(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");Vt(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}function jr(e,n,t,r){function o(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function u(f){try{c(r.next(f))}catch(l){s(l)}}function a(f){try{c(r.throw(f))}catch(l){s(l)}}function c(f){f.done?i(f.value):o(f.value).then(u,a)}c((r=r.apply(e,n||[])).next())})}function ln(e,n){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(c){return function(f){return a([c,f])}}function a(c){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(t=0)),t;)try{if(r=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,o=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){t.label=c[1];break}if(c[0]===6&&t.label<i[1]){t.label=i[1],i=c;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(c);break}i[2]&&t.ops.pop(),t.trys.pop();continue}c=n.call(e,t)}catch(f){c=[6,f],o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function K(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Q(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),o,i=[],s;try{for(;(n===void 0||n-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return i}function et(e,n,t){if(t||arguments.length===2)for(var r=0,o=n.length,i;r<o;r++)(i||!(r in n))&&(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return e.concat(i||Array.prototype.slice.call(n))}function J(e){return this instanceof J?(this.v=e,this):new J(e)}function Lr(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(e,n||[]),o,i=[];return o={},u("next"),u("throw"),u("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(p){return function(b){return Promise.resolve(b).then(p,l)}}function u(p,b){r[p]&&(o[p]=function(h){return new Promise(function(m,v){i.push([p,h,m,v])>1||a(p,h)})},b&&(o[p]=b(o[p])))}function a(p,b){try{c(r[p](b))}catch(h){d(i[0][3],h)}}function c(p){p.value instanceof J?Promise.resolve(p.value.v).then(f,l):d(i[0][2],p)}function f(p){a("next",p)}function l(p){a("throw",p)}function d(p,b){p(b),i.shift(),i.length&&a(i[0][0],i[0][1])}}function Mr(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof K=="function"?K(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(i){t[i]=e[i]&&function(s){return new Promise(function(u,a){s=e[i](s),o(u,a,s.done,s.value)})}}function o(i,s,u,a){Promise.resolve(a).then(function(c){i({value:c,done:u})},s)}}function _(e){return typeof e=="function"}function re(e){var n=function(r){Error.call(r),r.stack=new Error().stack},t=e(n);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Ht=re(function(e){return function(t){e(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function $t(e,n){if(e){var t=e.indexOf(n);0<=t&&e.splice(t,1)}}var ut=function(){function e(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var n,t,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=K(s),a=u.next();!a.done;a=u.next()){var c=a.value;c.remove(this)}}catch(h){n={error:h}}finally{try{a&&!a.done&&(t=u.return)&&t.call(u)}finally{if(n)throw n.error}}else s.remove(this);var f=this.initialTeardown;if(_(f))try{f()}catch(h){i=h instanceof Ht?h.errors:[h]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var d=K(l),p=d.next();!p.done;p=d.next()){var b=p.value;try{me(b)}catch(h){i=i??[],h instanceof Ht?i=et(et([],Q(i)),Q(h.errors)):i.push(h)}}}catch(h){r={error:h}}finally{try{p&&!p.done&&(o=d.return)&&o.call(d)}finally{if(r)throw r.error}}}if(i)throw new Ht(i)}},e.prototype.add=function(n){var t;if(n&&n!==this)if(this.closed)me(n);else{if(n instanceof e){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(n)}},e.prototype._hasParent=function(n){var t=this._parentage;return t===n||Array.isArray(t)&&t.includes(n)},e.prototype._addParent=function(n){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n},e.prototype._removeParent=function(n){var t=this._parentage;t===n?this._parentage=null:Array.isArray(t)&&$t(t,n)},e.prototype.remove=function(n){var t=this._finalizers;t&&$t(t,n),n instanceof e&&n._removeParent(this)},e.EMPTY=function(){var n=new e;return n.closed=!0,n}(),e}(),fn=ut.EMPTY;function pn(e){return e instanceof ut||e&&"closed"in e&&_(e.remove)&&_(e.add)&&_(e.unsubscribe)}function me(e){_(e)?e():e.unsubscribe()}var dn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},hn={setTimeout:function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];return setTimeout.apply(void 0,et([e,n],Q(t)))},clearTimeout:function(e){var n=hn.delegate;return((n==null?void 0:n.clearTimeout)||clearTimeout)(e)},delegate:void 0};function bn(e){hn.setTimeout(function(){throw e})}function ve(){}function _t(e){e()}var ie=function(e){D(n,e);function n(t){var r=e.call(this)||this;return r.isStopped=!1,t?(r.destination=t,pn(t)&&t.add(r)):r.destination=Rr,r}return n.create=function(t,r,o){return new Bt(t,r,o)},n.prototype.next=function(t){this.isStopped||this._next(t)},n.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(ut),Hr=Function.prototype.bind;function Nt(e,n){return Hr.call(e,n)}var Nr=function(){function e(n){this.partialObserver=n}return e.prototype.next=function(n){var t=this.partialObserver;if(t.next)try{t.next(n)}catch(r){bt(r)}},e.prototype.error=function(n){var t=this.partialObserver;if(t.error)try{t.error(n)}catch(r){bt(r)}else bt(n)},e.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(t){bt(t)}},e}(),Bt=function(e){D(n,e);function n(t,r,o){var i=e.call(this)||this,s;if(_(t)||!t)s={next:t??void 0,error:r??void 0,complete:o??void 0};else{var u;i&&dn.useDeprecatedNextContext?(u=Object.create(t),u.unsubscribe=function(){return i.unsubscribe()},s={next:t.next&&Nt(t.next,u),error:t.error&&Nt(t.error,u),complete:t.complete&&Nt(t.complete,u)}):s=t}return i.destination=new Nr(s),i}return n}(ie);function bt(e){bn(e)}function Fr(e){throw e}var Rr={closed:!0,next:ve,error:Fr,complete:ve},oe=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function ct(e){return e}function Dr(e){return e.length===0?ct:e.length===1?e[0]:function(t){return e.reduce(function(r,o){return o(r)},t)}}var E=function(){function e(n){n&&(this._subscribe=n)}return e.prototype.lift=function(n){var t=new e;return t.source=this,t.operator=n,t},e.prototype.subscribe=function(n,t,r){var o=this,i=zr(n)?n:new Bt(n,t,r);return _t(function(){var s=o,u=s.operator,a=s.source;i.add(u?u.call(i,a):a?o._subscribe(i):o._trySubscribe(i))}),i},e.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(t){n.error(t)}},e.prototype.forEach=function(n,t){var r=this;return t=_e(t),new t(function(o,i){var s=new Bt({next:function(u){try{n(u)}catch(a){i(a),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},e.prototype._subscribe=function(n){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(n)},e.prototype[oe]=function(){return this},e.prototype.pipe=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return Dr(n)(this)},e.prototype.toPromise=function(n){var t=this;return n=_e(n),new n(function(r,o){var i;t.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},e.create=function(n){return new e(n)},e}();function _e(e){var n;return(n=e??dn.Promise)!==null&&n!==void 0?n:Promise}function Ur(e){return e&&_(e.next)&&_(e.error)&&_(e.complete)}function zr(e){return e&&e instanceof ie||Ur(e)&&pn(e)}function Vr(e){return _(e==null?void 0:e.lift)}function C(e){return function(n){if(Vr(n))return n.lift(function(t){try{return e(t,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function P(e,n,t,r,o){return new Br(e,n,t,r,o)}var Br=function(e){D(n,e);function n(t,r,o,i,s,u){var a=e.call(this,t)||this;return a.onFinalize=s,a.shouldUnsubscribe=u,a._next=r?function(c){try{r(c)}catch(f){t.error(f)}}:e.prototype._next,a._error=i?function(c){try{i(c)}catch(f){t.error(f)}finally{this.unsubscribe()}}:e.prototype._error,a._complete=o?function(){try{o()}catch(c){t.error(c)}finally{this.unsubscribe()}}:e.prototype._complete,a}return n.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},n}(ie),qr=re(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),mn=function(e){D(n,e);function n(){var t=e.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return n.prototype.lift=function(t){var r=new ye(this,this);return r.operator=t,r},n.prototype._throwIfClosed=function(){if(this.closed)throw new qr},n.prototype.next=function(t){var r=this;_t(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=K(r.currentObservers),u=s.next();!u.done;u=s.next()){var a=u.value;a.next(t)}}catch(c){o={error:c}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},n.prototype.error=function(t){var r=this;_t(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=t;for(var o=r.observers;o.length;)o.shift().error(t)}})},n.prototype.complete=function(){var t=this;_t(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var r=t.observers;r.length;)r.shift().complete()}})},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},n.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},n.prototype._innerSubscribe=function(t){var r=this,o=this,i=o.hasError,s=o.isStopped,u=o.observers;return i||s?fn:(this.currentObservers=null,u.push(t),new ut(function(){r.currentObservers=null,$t(u,t)}))},n.prototype._checkFinalizedStatuses=function(t){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?t.error(i):s&&t.complete()},n.prototype.asObservable=function(){var t=new E;return t.source=this,t},n.create=function(t,r){return new ye(t,r)},n}(E),ye=function(e){D(n,e);function n(t,r){var o=e.call(this)||this;return o.destination=t,o.source=r,o}return n.prototype.next=function(t){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,t)},n.prototype.error=function(t){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,t)},n.prototype.complete=function(){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||r===void 0||r.call(t)},n.prototype._subscribe=function(t){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(t))!==null&&o!==void 0?o:fn},n}(mn),Wr={now:function(){return Date.now()},delegate:void 0},Yr=function(e){D(n,e);function n(t,r){return e.call(this)||this}return n.prototype.schedule=function(t,r){return this},n}(ut),ge={setInterval:function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];return setInterval.apply(void 0,et([e,n],Q(t)))},clearInterval:function(e){return clearInterval(e)},delegate:void 0},Gr=function(e){D(n,e);function n(t,r){var o=e.call(this,t,r)||this;return o.scheduler=t,o.work=r,o.pending=!1,o}return n.prototype.schedule=function(t,r){var o;if(r===void 0&&(r=0),this.closed)return this;this.state=t;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=(o=this.id)!==null&&o!==void 0?o:this.requestAsyncId(s,this.id,r),this},n.prototype.requestAsyncId=function(t,r,o){return o===void 0&&(o=0),ge.setInterval(t.flush.bind(t,this),o)},n.prototype.recycleAsyncId=function(t,r,o){if(o===void 0&&(o=0),o!=null&&this.delay===o&&this.pending===!1)return r;r!=null&&ge.clearInterval(r)},n.prototype.execute=function(t,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var o=this._execute(t,r);if(o)return o;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(t,r){var o=!1,i;try{this.work(t)}catch(s){o=!0,i=s||new Error("Scheduled action threw falsy error")}if(o)return this.unsubscribe(),i},n.prototype.unsubscribe=function(){if(!this.closed){var t=this,r=t.id,o=t.scheduler,i=o.actions;this.work=this.state=this.scheduler=null,this.pending=!1,$t(i,this),r!=null&&(this.id=this.recycleAsyncId(o,r,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},n}(Yr),we=function(){function e(n,t){t===void 0&&(t=e.now),this.schedulerActionCtor=n,this.now=t}return e.prototype.schedule=function(n,t,r){return t===void 0&&(t=0),new this.schedulerActionCtor(this,n).schedule(r,t)},e.now=Wr.now,e}(),Jr=function(e){D(n,e);function n(t,r){r===void 0&&(r=we.now);var o=e.call(this,t,r)||this;return o.actions=[],o._active=!1,o}return n.prototype.flush=function(t){var r=this.actions;if(this._active){r.push(t);return}var o;this._active=!0;do if(o=t.execute(t.state,t.delay))break;while(t=r.shift());if(this._active=!1,o){for(;t=r.shift();)t.unsubscribe();throw o}},n}(we),vn=new Jr(Gr),Kr=vn,_n=new E(function(e){return e.complete()});function yn(e){return e&&_(e.schedule)}function se(e){return e[e.length-1]}function Qr(e){return _(se(e))?e.pop():void 0}function at(e){return yn(se(e))?e.pop():void 0}function Zr(e,n){return typeof se(e)=="number"?e.pop():n}var ue=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function gn(e){return _(e==null?void 0:e.then)}function wn(e){return _(e[oe])}function xn(e){return Symbol.asyncIterator&&_(e==null?void 0:e[Symbol.asyncIterator])}function Sn(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Xr(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var $n=Xr();function En(e){return _(e==null?void 0:e[$n])}function Tn(e){return Lr(this,arguments,function(){var t,r,o,i;return ln(this,function(s){switch(s.label){case 0:t=e.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,J(t.read())];case 3:return r=s.sent(),o=r.value,i=r.done,i?[4,J(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,J(o)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function In(e){return _(e==null?void 0:e.getReader)}function W(e){if(e instanceof E)return e;if(e!=null){if(wn(e))return ti(e);if(ue(e))return ei(e);if(gn(e))return ni(e);if(xn(e))return kn(e);if(En(e))return ri(e);if(In(e))return ii(e)}throw Sn(e)}function ti(e){return new E(function(n){var t=e[oe]();if(_(t.subscribe))return t.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function ei(e){return new E(function(n){for(var t=0;t<e.length&&!n.closed;t++)n.next(e[t]);n.complete()})}function ni(e){return new E(function(n){e.then(function(t){n.closed||(n.next(t),n.complete())},function(t){return n.error(t)}).then(null,bn)})}function ri(e){return new E(function(n){var t,r;try{for(var o=K(e),i=o.next();!i.done;i=o.next()){var s=i.value;if(n.next(s),n.closed)return}}catch(u){t={error:u}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}n.complete()})}function kn(e){return new E(function(n){oi(e,n).catch(function(t){return n.error(t)})})}function ii(e){return kn(Tn(e))}function oi(e,n){var t,r,o,i;return jr(this,void 0,void 0,function(){var s,u;return ln(this,function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),t=Mr(e),a.label=1;case 1:return[4,t.next()];case 2:if(r=a.sent(),!!r.done)return[3,4];if(s=r.value,n.next(s),n.closed)return[2];a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return u=a.sent(),o={error:u},[3,11];case 6:return a.trys.push([6,,9,10]),r&&!r.done&&(i=t.return)?[4,i.call(t)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}})})}function F(e,n,t,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=n.schedule(function(){t(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function On(e,n){return n===void 0&&(n=0),C(function(t,r){t.subscribe(P(r,function(o){return F(r,e,function(){return r.next(o)},n)},function(){return F(r,e,function(){return r.complete()},n)},function(o){return F(r,e,function(){return r.error(o)},n)}))})}function Pn(e,n){return n===void 0&&(n=0),C(function(t,r){r.add(e.schedule(function(){return t.subscribe(r)},n))})}function si(e,n){return W(e).pipe(Pn(n),On(n))}function ui(e,n){return W(e).pipe(Pn(n),On(n))}function ci(e,n){return new E(function(t){var r=0;return n.schedule(function(){r===e.length?t.complete():(t.next(e[r++]),t.closed||this.schedule())})})}function ai(e,n){return new E(function(t){var r;return F(t,n,function(){r=e[$n](),F(t,n,function(){var o,i,s;try{o=r.next(),i=o.value,s=o.done}catch(u){t.error(u);return}s?t.complete():t.next(i)},0,!0)}),function(){return _(r==null?void 0:r.return)&&r.return()}})}function Cn(e,n){if(!e)throw new Error("Iterable cannot be null");return new E(function(t){F(t,n,function(){var r=e[Symbol.asyncIterator]();F(t,n,function(){r.next().then(function(o){o.done?t.complete():t.next(o.value)})},0,!0)})})}function li(e,n){return Cn(Tn(e),n)}function fi(e,n){if(e!=null){if(wn(e))return si(e,n);if(ue(e))return ci(e,n);if(gn(e))return ui(e,n);if(xn(e))return Cn(e,n);if(En(e))return ai(e,n);if(In(e))return li(e,n)}throw Sn(e)}function lt(e,n){return n?fi(e,n):W(e)}function xe(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=at(e);return lt(e,t)}var An=re(function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}});function pi(e){return e instanceof Date&&!isNaN(e)}function $(e,n){return C(function(t,r){var o=0;t.subscribe(P(r,function(i){r.next(e.call(n,i,o++))}))})}var di=Array.isArray;function hi(e,n){return di(n)?e.apply(void 0,et([],Q(n))):e(n)}function jn(e){return $(function(n){return hi(e,n)})}var bi=Array.isArray,mi=Object.getPrototypeOf,vi=Object.prototype,_i=Object.keys;function yi(e){if(e.length===1){var n=e[0];if(bi(n))return{args:n,keys:null};if(gi(n)){var t=_i(n);return{args:t.map(function(r){return n[r]}),keys:t}}}return{args:e,keys:null}}function gi(e){return e&&typeof e=="object"&&mi(e)===vi}function wi(e,n){return e.reduce(function(t,r,o){return t[r]=n[o],t},{})}function tt(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=at(e),r=Qr(e),o=yi(e),i=o.args,s=o.keys;if(i.length===0)return lt([],t);var u=new E(xi(i,t,s?function(a){return wi(s,a)}:ct));return r?u.pipe(jn(r)):u}function xi(e,n,t){return t===void 0&&(t=ct),function(r){Se(n,function(){for(var o=e.length,i=new Array(o),s=o,u=o,a=function(f){Se(n,function(){var l=lt(e[f],n),d=!1;l.subscribe(P(r,function(p){i[f]=p,d||(d=!0,u--),u||r.next(t(i.slice()))},function(){--s||r.complete()}))},r)},c=0;c<o;c++)a(c)},r)}}function Se(e,n,t){e?F(t,e,n):n()}function Si(e,n,t,r,o,i,s,u){var a=[],c=0,f=0,l=!1,d=function(){l&&!a.length&&!c&&n.complete()},p=function(h){return c<r?b(h):a.push(h)},b=function(h){c++;var m=!1;W(t(h,f++)).subscribe(P(n,function(v){n.next(v)},function(){m=!0},void 0,function(){if(m)try{c--;for(var v=function(){var y=a.shift();s||b(y)};a.length&&c<r;)v();d()}catch(y){n.error(y)}}))};return e.subscribe(P(n,p,function(){l=!0,d()})),function(){}}function kt(e,n,t){return t===void 0&&(t=1/0),_(n)?kt(function(r,o){return $(function(i,s){return n(r,i,o,s)})(W(e(r,o)))},t):(typeof n=="number"&&(t=n),C(function(r,o){return Si(r,o,e,t)}))}function Ln(e){return e===void 0&&(e=1/0),kt(ct,e)}function $i(){return Ln(1)}function $e(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return $i()(lt(e,at(e)))}var Ei=["addListener","removeListener"],Ti=["addEventListener","removeEventListener"],Ii=["on","off"];function R(e,n,t,r){if(_(t)&&(r=t,t=void 0),r)return R(e,n,t).pipe(jn(r));var o=Q(Pi(e)?Ti.map(function(u){return function(a){return e[u](n,a,t)}}):ki(e)?Ei.map(Ee(e,n)):Oi(e)?Ii.map(Ee(e,n)):[],2),i=o[0],s=o[1];if(!i&&ue(e))return kt(function(u){return R(u,n,t)})(W(e));if(!i)throw new TypeError("Invalid event target");return new E(function(u){var a=function(){for(var c=[],f=0;f<arguments.length;f++)c[f]=arguments[f];return u.next(1<c.length?c:c[0])};return i(a),function(){return s(a)}})}function Ee(e,n){return function(t){return function(r){return e[t](n,r)}}}function ki(e){return _(e.addListener)&&_(e.removeListener)}function Oi(e){return _(e.on)&&_(e.off)}function Pi(e){return _(e.addEventListener)&&_(e.removeEventListener)}function Ci(e,n,t){t===void 0&&(t=Kr);var r=-1;return yn(n)?t=n:r=n,new E(function(o){var i=pi(e)?+e-t.now():e;i<0&&(i=0);var s=0;return t.schedule(function(){o.closed||(o.next(s++),0<=r?this.schedule(void 0,r):o.complete())},i)})}function Ai(e,n){return n===void 0&&(n=vn),Ci(e,e,n)}function ji(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=at(e),r=Zr(e,1/0),o=e;return o.length?o.length===1?W(o[0]):Ln(r)(lt(o,t)):_n}function H(e,n){return C(function(t,r){var o=0;t.subscribe(P(r,function(i){return e.call(n,i,o++)&&r.next(i)}))})}function Li(e){return C(function(n,t){var r=!1;n.subscribe(P(t,function(o){r=!0,t.next(o)},function(){r||t.next(e),t.complete()}))})}function Mi(e){return e<=0?function(){return _n}:C(function(n,t){var r=0;n.subscribe(P(t,function(o){++r<=e&&(t.next(o),e<=r&&t.complete())}))})}function Te(e){return $(function(){return e})}function Hi(e){return e===void 0&&(e=Ni),C(function(n,t){var r=!1;n.subscribe(P(t,function(o){r=!0,t.next(o)},function(){return r?t.complete():t.error(e())}))})}function Ni(){return new An}function Fi(e,n){var t=arguments.length>=2;return function(r){return r.pipe(ct,Mi(1),t?Li(n):Hi(function(){return new An}))}}function Ri(){return C(function(e,n){var t,r=!1;e.subscribe(P(n,function(o){var i=t;t=o,r&&n.next([i,o]),r=!0}))})}function Y(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=at(e);return C(function(r,o){(t?$e(e,r,t):$e(e,r)).subscribe(o)})}function Mn(){return!document.hidden}function Di(){const e=R(document,"visibilitychange"),n=R(window,"focus").pipe(Te(!0)),t=R(window,"blur").pipe(Te(!1)),r=ji(n,t);return tt(e,r).pipe($(([,o])=>Mn()&&o),H(o=>o),Fi())}const Ui=R(document,"mouseover");async function zi(){Mn()||await Promise.race([Di().toPromise(),Ui.toPromise()])}async function Vi(){await new Promise(e=>setTimeout(e,400)),await zi(),await new Promise(e=>setTimeout(e,400))}const Bi=Vi();function k(e,n){const t=e.querySelector(n);if(!t)throw new Error("Failed to find element ${ selector } !");return t}const qi=It.bind(ot),Wi="crumbs-p",Yi=st(qi`
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
`);let Gi=class extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const n=L(this),t=Yi.content.cloneNode(!0);n.appendChild(t)}};customElements.define(Wi,Gi);const Ji=It.bind(ot),Ki="crumbs-panel",Qi=st(Ji`
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
`);class Zi extends HTMLElement{constructor(){super(...arguments);x(this,"contentTimeoutElapsed",!1);x(this,"contentLoaded",!1);x(this,"connected",!1);x(this,"loading","100");x(this,"scrolled",!1);x(this,"scrolledSubscription",null)}static get observedAttributes(){return["panel-loading","panel-title"]}async connectedCallback(){this.attachShadow({mode:"open"}),await Bi;const t=L(this),r=Qi.content.cloneNode(!0);t.appendChild(r);const o=this.getAttribute("panel-loading");o!==null&&Ie(o)&&(this.loading=o),setTimeout(()=>{const i=k(t,"#panel-container");i.style.gridTemplateColumns="1rem 1fr 1rem",i.style.gridTemplateRows="1rem 1fr 1rem";const s=k(t,"#panel");s.style.backgroundColor="#ffffff40",this.scrolledSubscription=R(s,"scroll").pipe($(u=>u.target.scrollTop),$(u=>u!==0)).subscribe(u=>{this.scrolled=u,this.render()}),this.render()},10),setTimeout(()=>{this.contentTimeoutElapsed=!0,this.render()},400),this.connected=!0,this.render()}render(){const t=L(this),r=k(t,"#panel-content"),o=k(t,"#panel-loading"),i=k(t,"#panel"),s=k(t,"#panel-title-content");this.contentTimeoutElapsed&&Xi(this.loading)?(r.style.visibility="visible",r.style.opacity="1",i.style.overflow="auto"):(r.style.visibility="collapse",r.style.opacity="0",i.style.overflow="hidden"),o.style.width=`${this.loading}%`;const u=k(t,"#panel-title");this.loading==="100"&&this.getAttribute("panel-title")&&!this.scrolled?setTimeout(()=>{u.style.opacity="1",s.innerHTML=this.getAttribute("panel-title")||"",r.style.paddingTop="2.5rem"},10):(r.style.paddingTop="inherit",u.style.opacity="0")}attributeChangedCallback(){if(this.shadowRoot&&this.connected){const t=this.getAttribute("panel-loading");t!==null&&Ie(t)?this.loading=t:t===null&&(this.loading="100"),this.render()}}disconnectedCallback(){var t;(t=this.scrolledSubscription)==null||t.unsubscribe()}}function Ie(e){const n=Number(e),t=Math.floor(n);return t===n&&Number.isInteger(t)&&Number.isFinite(t)&&t<=100&&t>=0}function Xi(e){return e===null||e==="100"}customElements.define(Ki,Zi);const to=It.bind(ot),eo="crumbs-input",no=st(to`
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
`);class ro extends HTMLElement{static get observedAttributes(){return["value"]}async connectedCallback(){this.attachShadow({mode:"open"});const n=L(this),t=no.content.cloneNode(!0);n.appendChild(t);const r=k(n,"input"),o=this.getAttribute("value");r instanceof HTMLInputElement&&o&&(r.value=o)}attributeChangedCallback(n,t,r){if(n==="value"&&this.shadowRoot){const o=L(this),i=k(o,"input");i instanceof HTMLInputElement&&(i.value=r)}}}customElements.define(eo,ro);const qt=It.bind(ot),io="crumbs-tabs",oo=st(qt`
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
`);class so extends HTMLElement{constructor(){super(...arguments);x(this,"selected",1);x(this,"subscriptions",[])}async connectedCallback(){this.attachShadow({mode:"open"});const t=L(this),r=oo.content.cloneNode(!0);t.appendChild(r);const o=this.getAttribute("selected");this.selected=Number.parseInt(o||"1");const i=t.querySelector("#tabs"),s=t.querySelector("#content");if(!i)throw new Error("Tabs not found");if(!s)throw new Error("Content not found");for(const u of{[Symbol.iterator]:()=>this.getSlots()}){if(u.startsWith("content-")){const a=qt`<div id=${`${u}`}> <slot name=${u}></slot> </div>`;a instanceof Element&&s.appendChild(a)}if(u.startsWith("title-")){const a=qt`<div id=${u}> <crumbs-p> <slot name=${u}></slot> </crumbs-p> </div>`;a instanceof Element&&i.appendChild(a)}}this.subscriptions=[...i.children].map((u,a)=>R(u,"click").subscribe(()=>{const c=u.id.replace("title-","content-"),f=t.querySelector(`#${c}`);f instanceof HTMLElement&&s instanceof HTMLElement&&f.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.selected=a+1,this.render()})),this.render()}render(){const r=L(this).querySelector("#tabs");if(!r)throw new Error("Tabs not found");[...r.children].forEach((o,i)=>{i+1===this.selected?o instanceof HTMLElement&&o.classList.add("selected-title"):o instanceof HTMLElement&&o.classList.remove("selected-title")})}disconnectedCallback(){for(const t of this.subscriptions)t.unsubscribe()}*getSlots(){for(const t of Array.from(this.children)){const r=t.getAttribute("slot");r&&(yield r)}}}customElements.define(io,so);var Hn=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var s=n[i++],u=n[i]?(n[0]|=s?1:2,t[n[i++]]):n[++i];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[n[++i]]=u:s===6?r[1][n[++i]]+=u+"":s?(o=e.apply(u,Hn(e,u,t,["",null])),r.push(o),u[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(u)}return r},ke=new Map;function uo(e){var n=ke.get(this);return n||(n=new Map,ke.set(this,n)),(n=Hn(this,n.get(e)||(n.set(e,n=function(t){for(var r,o,i=1,s="",u="",a=[0],c=function(d){i===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,d,s):i===3&&(d||s)?(a.push(3,d,s),i=2):i===2&&s==="..."&&d?a.push(4,d,0):i===2&&s&&!d?a.push(5,0,!0,s):i>=5&&((s||!d&&i===5)&&(a.push(i,0,s,o),i=6),d&&(a.push(i,d,0,o),i=6)),s=""},f=0;f<t.length;f++){f&&(i===1&&c(),c(f));for(var l=0;l<t[f].length;l++)r=t[f][l],i===1?r==="<"?(c(),a=[a],i=3):s+=r:i===4?s==="--"&&r===">"?(i=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(c(),i=1):i&&(r==="="?(i=5,o=s,s=""):r==="/"&&(i<5||t[f][l+1]===">")?(c(),i===3&&(a=a[0]),i=a,(a=a[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(c(),i=2):s+=r),i===3&&s==="!--"&&(i=4,a=a[0])}return c(),a}(e)),n),arguments,[])).length>1?n:n[0]}const co=uo.bind(ot),ao="crumbs-button",lo=600;class fo extends HTMLElement{constructor(){super();x(this,"_renderSubscription",null);x(this,"_clickSubscription",null);x(this,"_attributeChanges$",new mn);x(this,"_parsedProgress$");x(this,"_parsedDisabled$");x(this,"_parsedIndeterminateProgress$");x(this,"_parsedIndeterminateDurationMs$");x(this,"_indeterminedLoadingAt$");x(this,"_loading$");x(this,"_activeIndeterminateProgress$");x(this,"_disabled$");this._parsedProgress$=this._attributeChanges$.pipe(H(([t])=>t==="progress"),$(([t,r])=>r),Y(this.getAttribute("progress")),$(t=>t===null?null:Number(t)),H(t=>t===null||Number.isInteger(t)&&Number.isFinite(t)&&t<=100&&t>=0)),this._parsedDisabled$=this._attributeChanges$.pipe(H(([t])=>t==="disabled"),$(([t,r])=>r),Y(this.getAttribute("disabled")),$(t=>t!==null&&t!=="false")),this._parsedIndeterminateProgress$=this._attributeChanges$.pipe(H(([t])=>t==="indeterminate-progress"),$(([t,r])=>r),Y(this.getAttribute("indeterminate-progress")),$(t=>t!==null&&t!=="false")),this._parsedIndeterminateDurationMs$=this._attributeChanges$.pipe(H(([t])=>t==="indeterminate-duration-ms"),$(([t,r])=>r),Y(this.getAttribute("indeterminate-duration-ms")),$(t=>t!==null?null:Number(t)),H(t=>t===null||Number.isInteger(t)&&Number.isFinite(t)&&t>=0)),this._indeterminedLoadingAt$=this._parsedIndeterminateProgress$.pipe(Y(!1),Ri(),H(([t,r])=>r&&!t),$(()=>Date.now()),Y(0)),this._loading$=tt(this._parsedProgress$,this._indeterminedLoadingAt$,this._parsedIndeterminateDurationMs$,this._parsedIndeterminateProgress$).pipe(kt(([t,r,o,i])=>i?r&&o!==null?Ai(100).pipe($(()=>{const u=Date.now()-r,a=o-lo,c=Math.max(a,0),f=Math.ceil(u/c*100);return Math.min(100,f)})):xe(0):xe(t||0))),this._activeIndeterminateProgress$=tt(this._parsedIndeterminateProgress$,this._loading$).pipe($(([t,r])=>t&&r===100)),this._disabled$=tt(this._parsedDisabled$,this._activeIndeterminateProgress$,this._loading$).pipe($(([t,r,o])=>t||r||o>0&&o<100))}static get observedAttributes(){return["progress","disabled","indeterminate-progress","indeterminate-duration-ms"]}async connectedCallback(){this.attachShadow({mode:"open"}),L(this).appendChild(po.content.cloneNode(!0)),this._renderSubscription=tt(this._disabled$,this._loading$).subscribe(([r,o])=>{this.render(r,Number(o))})}attributeChangedCallback(t){this.shadowRoot&&this._attributeChanges$.next([t,this.getAttribute(t)])}render(t,r){const o=L(this),i=k(o,"#progress"),s=k(o,"button");s instanceof HTMLButtonElement&&(s.disabled=t),i.style.width=`${r}%`}disconnectedCallback(){var t,r;(t=this._clickSubscription)==null||t.unsubscribe(),(r=this._renderSubscription)==null||r.unsubscribe()}}customElements.define(ao,fo);const po=st(co`
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
`);let ho={data:""},bo=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ho,mo=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,vo=/\/\*[^]*?\*\/|  +/g,Oe=/\n+/g,z=(e,n)=>{let t="",r="",o="";for(let i in e){let s=e[i];i[0]=="@"?i[1]=="i"?t=i+" "+s+";":r+=i[1]=="f"?z(s,i):i+"{"+z(s,i[1]=="k"?"":n)+"}":typeof s=="object"?r+=z(s,n?n.replace(/([^,])+/g,u=>i.replace(/(^:.*)|([^,])+/g,a=>/&/.test(a)?a.replace(/&/g,u):u?u+" "+a:a)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=z.p?z.p(i,s):i+":"+s+";")}return t+(n&&o?n+"{"+o+"}":o)+r},A={},Nn=e=>{if(typeof e=="object"){let n="";for(let t in e)n+=t+Nn(e[t]);return n}return e},_o=(e,n,t,r,o)=>{let i=Nn(e),s=A[i]||(A[i]=(a=>{let c=0,f=11;for(;c<a.length;)f=101*f+a.charCodeAt(c++)>>>0;return"go"+f})(i));if(!A[s]){let a=i!==e?e:(c=>{let f,l,d=[{}];for(;f=mo.exec(c.replace(vo,""));)f[4]?d.shift():f[3]?(l=f[3].replace(Oe," ").trim(),d.unshift(d[0][l]=d[0][l]||{})):d[0][f[1]]=f[2].replace(Oe," ").trim();return d[0]})(e);A[s]=z(o?{["@keyframes "+s]:a}:a,t?"":"."+s)}let u=t&&A.g?A.g:null;return t&&(A.g=A[s]),((a,c,f,l)=>{l?c.data=c.data.replace(l,a):c.data.indexOf(a)===-1&&(c.data=f?a+c.data:c.data+a)})(A[s],n,r,u),s},yo=(e,n,t)=>e.reduce((r,o,i)=>{let s=n[i];if(s&&s.call){let u=s(t),a=u&&u.props&&u.props.className||/^go/.test(u)&&u;s=a?"."+a:u&&typeof u=="object"?u.props?"":z(u,""):u===!1?"":u}return r+o+(s??"")},"");function B(e){let n=this||{},t=e.call?e(n.p):e;return _o(t.unshift?t.raw?yo(t,[].slice.call(arguments,1),n.p):t.reduce((r,o)=>Object.assign(r,o&&o.call?o(n.p):o),{}):t,bo(n.target),n.g,n.o,n.k)}B.bind({g:1});B.bind({k:1});var Ot,g,Fn,V,Pe,Rn,Wt,ce,Yt,Gt,nt={},Dn=[],go=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ae=Array.isArray;function N(e,n){for(var t in n)e[t]=n[t];return e}function Un(e){var n=e.parentNode;n&&n.removeChild(e)}function zn(e,n,t){var r,o,i,s={};for(i in n)i=="key"?r=n[i]:i=="ref"?o=n[i]:s[i]=n[i];if(arguments.length>2&&(s.children=arguments.length>3?Ot.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)s[i]===void 0&&(s[i]=e.defaultProps[i]);return yt(e,s,r,o,null)}function yt(e,n,t,r,o){var i={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Fn,__i:-1,__u:0};return o==null&&g.vnode!=null&&g.vnode(i),i}function Pt(e){return e.children}function gt(e,n){this.props=e,this.context=n}function q(e,n){if(n==null)return e.__?q(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?q(e):null}function Vn(e){var n,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return Vn(e)}}function Ce(e){(!e.__d&&(e.__d=!0)&&V.push(e)&&!Et.__r++||Pe!==g.debounceRendering)&&((Pe=g.debounceRendering)||Rn)(Et)}function Et(){var e,n,t,r,o,i,s,u;for(V.sort(Wt);e=V.shift();)e.__d&&(n=V.length,r=void 0,i=(o=(t=e).__v).__e,s=[],u=[],t.__P&&((r=N({},o)).__v=o.__v+1,g.vnode&&g.vnode(r),le(t.__P,r,o,t.__n,t.__P.namespaceURI,32&o.__u?[i]:null,s,i??q(o),!!(32&o.__u),u),r.__v=o.__v,r.__.__k[r.__i]=r,Wn(s,r,u),r.__e!=i&&Vn(r)),V.length>n&&V.sort(Wt));Et.__r=0}function Bn(e,n,t,r,o,i,s,u,a,c,f){var l,d,p,b,h,m=r&&r.__k||Dn,v=n.length;for(t.__d=a,wo(t,n,m),a=t.__d,l=0;l<v;l++)(p=t.__k[l])!=null&&typeof p!="boolean"&&typeof p!="function"&&(d=p.__i===-1?nt:m[p.__i]||nt,p.__i=l,le(e,p,d,o,i,s,u,a,c,f),b=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&fe(d.ref,null,p),f.push(p.ref,p.__c||b,p)),h==null&&b!=null&&(h=b),65536&p.__u||d.__k===p.__k?(a&&!a.isConnected&&(a=q(d)),a=qn(p,a,e)):typeof p.type=="function"&&p.__d!==void 0?a=p.__d:b&&(a=b.nextSibling),p.__d=void 0,p.__u&=-196609);t.__d=a,t.__e=h}function wo(e,n,t){var r,o,i,s,u,a=n.length,c=t.length,f=c,l=0;for(e.__k=[],r=0;r<a;r++)s=r+l,(o=e.__k[r]=(o=n[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?yt(null,o,null,null,null):ae(o)?yt(Pt,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?yt(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,u=xo(o,t,s,f),o.__i=u,i=null,u!==-1&&(f--,(i=t[u])&&(i.__u|=131072)),i==null||i.__v===null?(u==-1&&l--,typeof o.type!="function"&&(o.__u|=65536)):u!==s&&(u===s+1?l++:u>s?f>a-s?l+=u-s:l--:u<s?u==s-1&&(l=u-s):l=0,u!==r+l&&(o.__u|=65536))):(i=t[s])&&i.key==null&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=q(i)),Jt(i,i,!1),t[s]=null,f--);if(f)for(r=0;r<c;r++)(i=t[r])!=null&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=q(i)),Jt(i,i))}function qn(e,n,t){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=qn(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do n=n&&n.nextSibling;while(n!=null&&n.nodeType===8);return n}function xo(e,n,t,r){var o=e.key,i=e.type,s=t-1,u=t+1,a=n[t];if(a===null||a&&o==a.key&&i===a.type&&!(131072&a.__u))return t;if(r>(a!=null&&!(131072&a.__u)?1:0))for(;s>=0||u<n.length;){if(s>=0){if((a=n[s])&&!(131072&a.__u)&&o==a.key&&i===a.type)return s;s--}if(u<n.length){if((a=n[u])&&!(131072&a.__u)&&o==a.key&&i===a.type)return u;u++}}return-1}function Ae(e,n,t){n[0]==="-"?e.setProperty(n,t??""):e[n]=t==null?"":typeof t!="number"||go.test(n)?t:t+"px"}function mt(e,n,t,r,o){var i;t:if(n==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||Ae(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||Ae(e.style,n,t[n])}else if(n[0]==="o"&&n[1]==="n")i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||n==="onFocusOut"||n==="onFocusIn"?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=ce,e.addEventListener(n,i?Gt:Yt,i)):e.removeEventListener(n,i?Gt:Yt,i);else{if(o=="http://www.w3.org/2000/svg")n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!="width"&&n!="height"&&n!="href"&&n!="list"&&n!="form"&&n!="tabIndex"&&n!="download"&&n!="rowSpan"&&n!="colSpan"&&n!="role"&&n in e)try{e[n]=t??"";break t}catch{}typeof t=="function"||(t==null||t===!1&&n[4]!=="-"?e.removeAttribute(n):e.setAttribute(n,t))}}function je(e){return function(n){if(this.l){var t=this.l[n.type+e];if(n.t==null)n.t=ce++;else if(n.t<t.u)return;return t(g.event?g.event(n):n)}}}function le(e,n,t,r,o,i,s,u,a,c){var f,l,d,p,b,h,m,v,y,M,pt,Z,he,dt,jt,I=n.type;if(n.constructor!==void 0)return null;128&t.__u&&(a=!!(32&t.__u),i=[u=n.__e=t.__e]),(f=g.__b)&&f(n);t:if(typeof I=="function")try{if(v=n.props,y=(f=I.contextType)&&r[f.__c],M=f?y?y.props.value:f.__:r,t.__c?m=(l=n.__c=t.__c).__=l.__E:("prototype"in I&&I.prototype.render?n.__c=l=new I(v,M):(n.__c=l=new gt(v,M),l.constructor=I,l.render=$o),y&&y.sub(l),l.props=v,l.state||(l.state={}),l.context=M,l.__n=r,d=l.__d=!0,l.__h=[],l._sb=[]),l.__s==null&&(l.__s=l.state),I.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=N({},l.__s)),N(l.__s,I.getDerivedStateFromProps(v,l.__s))),p=l.props,b=l.state,l.__v=n,d)I.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(I.getDerivedStateFromProps==null&&v!==p&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,M),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,M)===!1||n.__v===t.__v)){for(n.__v!==t.__v&&(l.props=v,l.state=l.__s,l.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach(function(ht){ht&&(ht.__=n)}),pt=0;pt<l._sb.length;pt++)l.__h.push(l._sb[pt]);l._sb=[],l.__h.length&&s.push(l);break t}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,M),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(p,b,h)})}if(l.context=M,l.props=v,l.__P=e,l.__e=!1,Z=g.__r,he=0,"prototype"in I&&I.prototype.render){for(l.state=l.__s,l.__d=!1,Z&&Z(n),f=l.render(l.props,l.state,l.context),dt=0;dt<l._sb.length;dt++)l.__h.push(l._sb[dt]);l._sb=[]}else do l.__d=!1,Z&&Z(n),f=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++he<25);l.state=l.__s,l.getChildContext!=null&&(r=N(N({},r),l.getChildContext())),d||l.getSnapshotBeforeUpdate==null||(h=l.getSnapshotBeforeUpdate(p,b)),Bn(e,ae(jt=f!=null&&f.type===Pt&&f.key==null?f.props.children:f)?jt:[jt],n,t,r,o,i,s,u,a,c),l.base=n.__e,n.__u&=-161,l.__h.length&&s.push(l),m&&(l.__E=l.__=null)}catch(ht){n.__v=null,a||i!=null?(n.__e=u,n.__u|=a?160:32,i[i.indexOf(u)]=null):(n.__e=t.__e,n.__k=t.__k),g.__e(ht,n,t)}else i==null&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=So(t.__e,n,t,r,o,i,s,a,c);(f=g.diffed)&&f(n)}function Wn(e,n,t){n.__d=void 0;for(var r=0;r<t.length;r++)fe(t[r],t[++r],t[++r]);g.__c&&g.__c(n,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){g.__e(i,o.__v)}})}function So(e,n,t,r,o,i,s,u,a){var c,f,l,d,p,b,h,m=t.props,v=n.props,y=n.type;if(y==="svg"?o="http://www.w3.org/2000/svg":y==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(c=0;c<i.length;c++)if((p=i[c])&&"setAttribute"in p==!!y&&(y?p.localName===y:p.nodeType===3)){e=p,i[c]=null;break}}if(e==null){if(y===null)return document.createTextNode(v);e=document.createElementNS(o,y,v.is&&v),i=null,u=!1}if(y===null)m===v||u&&e.data===v||(e.data=v);else{if(i=i&&Ot.call(e.childNodes),m=t.props||nt,!u&&i!=null)for(m={},c=0;c<e.attributes.length;c++)m[(p=e.attributes[c]).name]=p.value;for(c in m)if(p=m[c],c!="children"){if(c=="dangerouslySetInnerHTML")l=p;else if(c!=="key"&&!(c in v)){if(c=="value"&&"defaultValue"in v||c=="checked"&&"defaultChecked"in v)continue;mt(e,c,null,p,o)}}for(c in v)p=v[c],c=="children"?d=p:c=="dangerouslySetInnerHTML"?f=p:c=="value"?b=p:c=="checked"?h=p:c==="key"||u&&typeof p!="function"||m[c]===p||mt(e,c,p,m[c],o);if(f)u||l&&(f.__html===l.__html||f.__html===e.innerHTML)||(e.innerHTML=f.__html),n.__k=[];else if(l&&(e.innerHTML=""),Bn(e,ae(d)?d:[d],n,t,r,y==="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,s,i?i[0]:t.__k&&q(t,0),u,a),i!=null)for(c=i.length;c--;)i[c]!=null&&Un(i[c]);u||(c="value",b!==void 0&&(b!==e[c]||y==="progress"&&!b||y==="option"&&b!==m[c])&&mt(e,c,b,m[c],o),c="checked",h!==void 0&&h!==e[c]&&mt(e,c,h,m[c],o))}return e}function fe(e,n,t){try{typeof e=="function"?e(n):e.current=n}catch(r){g.__e(r,t)}}function Jt(e,n,t){var r,o;if(g.unmount&&g.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||fe(r,null,n)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){g.__e(i,n)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&Jt(r[o],n,t||typeof e.type!="function");t||e.__e==null||Un(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function $o(e,n,t){return this.constructor(e,t)}function Eo(e,n,t){var r,o,i,s;g.__&&g.__(e,n),o=(r=typeof t=="function")?null:n.__k,i=[],s=[],le(n,e=(!r&&t||n).__k=zn(Pt,null,[e]),o||nt,nt,n.namespaceURI,!r&&t?[t]:o?null:n.firstChild?Ot.call(n.childNodes):null,i,!r&&t?t:o?o.__e:n.firstChild,r,s),Wn(i,e,s)}Ot=Dn.slice,g={__e:function(e,n,t,r){for(var o,i,s;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),s=o.__d),s)return o.__E=o}catch(u){e=u}throw e}},Fn=0,gt.prototype.setState=function(e,n){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=N({},this.state),typeof e=="function"&&(e=e(N({},t),this.props)),e&&N(t,e),e!=null&&this.__v&&(n&&this._sb.push(n),Ce(this))},gt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ce(this))},gt.prototype.render=Pt,V=[],Rn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Wt=function(e,n){return e.__v.__b-n.__v.__b},Et.__r=0,ce=0,Yt=je(!1),Gt=je(!0);var Yn=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var s=n[i++],u=n[i]?(n[0]|=s?1:2,t[n[i++]]):n[++i];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[n[++i]]=u:s===6?r[1][n[++i]]+=u+"":s?(o=e.apply(u,Yn(e,u,t,["",null])),r.push(o),u[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(u)}return r},Le=new Map;function To(e){var n=Le.get(this);return n||(n=new Map,Le.set(this,n)),(n=Yn(this,n.get(e)||(n.set(e,n=function(t){for(var r,o,i=1,s="",u="",a=[0],c=function(d){i===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,d,s):i===3&&(d||s)?(a.push(3,d,s),i=2):i===2&&s==="..."&&d?a.push(4,d,0):i===2&&s&&!d?a.push(5,0,!0,s):i>=5&&((s||!d&&i===5)&&(a.push(i,0,s,o),i=6),d&&(a.push(i,d,0,o),i=6)),s=""},f=0;f<t.length;f++){f&&(i===1&&c(),c(f));for(var l=0;l<t[f].length;l++)r=t[f][l],i===1?r==="<"?(c(),a=[a],i=3):s+=r:i===4?s==="--"&&r===">"?(i=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(c(),i=1):i&&(r==="="?(i=5,o=s,s=""):r==="/"&&(i<5||t[f][l+1]===">")?(c(),i===3&&(a=a[0]),i=a,(a=a[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(c(),i=2):s+=r),i===3&&s==="!--"&&(i=4,a=a[0])}return c(),a}(e)),n),arguments,[])).length>1?n:n[0]}var O=To.bind(zn),rt,w,Ft,Me,it=0,Gn=[],wt=[],S=g,He=S.__b,Ne=S.__r,Fe=S.diffed,Re=S.__c,De=S.unmount,Ue=S.__;function pe(e,n){S.__h&&S.__h(w,e,it||n),it=0;var t=w.__H||(w.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:wt}),t.__[e]}function T(e){return it=1,Io(Zn,e)}function Io(e,n,t){var r=pe(rt++,2);if(r.t=e,!r.__c&&(r.__=[Zn(void 0,n),function(u){var a=r.__N?r.__N[0]:r.__[0],c=r.t(a,u);a!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=w,!w.u)){var o=function(u,a,c){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(d){return!!d.__c});if(f.every(function(d){return!d.__N}))return!i||i.call(this,u,a,c);var l=!1;return f.forEach(function(d){if(d.__N){var p=d.__[0];d.__=d.__N,d.__N=void 0,p!==d.__[0]&&(l=!0)}}),!(!l&&r.__c.props===u)&&(!i||i.call(this,u,a,c))};w.u=!0;var i=w.shouldComponentUpdate,s=w.componentWillUpdate;w.componentWillUpdate=function(u,a,c){if(this.__e){var f=i;i=void 0,o(u,a,c),i=f}s&&s.call(this,u,a,c)},w.shouldComponentUpdate=o}return r.__N||r.__}function ko(e,n){var t=pe(rt++,3);!S.__s&&Qn(t.__H,n)&&(t.__=e,t.i=n,w.__H.__h.push(t))}function Oo(e){return it=5,Jn(function(){return{current:e}},[])}function Jn(e,n){var t=pe(rt++,7);return Qn(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function Kn(e,n){return it=8,Jn(function(){return e},n)}function Po(){for(var e;e=Gn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(xt),e.__H.__h.forEach(Kt),e.__H.__h=[]}catch(n){e.__H.__h=[],S.__e(n,e.__v)}}S.__b=function(e){w=null,He&&He(e)},S.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),Ue&&Ue(e,n)},S.__r=function(e){Ne&&Ne(e),rt=0;var n=(w=e.__c).__H;n&&(Ft===w?(n.__h=[],w.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=wt,t.__N=t.i=void 0})):(n.__h.forEach(xt),n.__h.forEach(Kt),n.__h=[],rt=0)),Ft=w},S.diffed=function(e){Fe&&Fe(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(Gn.push(n)!==1&&Me===S.requestAnimationFrame||((Me=S.requestAnimationFrame)||Co)(Po)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==wt&&(t.__=t.__V),t.i=void 0,t.__V=wt})),Ft=w=null},S.__c=function(e,n){n.some(function(t){try{t.__h.forEach(xt),t.__h=t.__h.filter(function(r){return!r.__||Kt(r)})}catch(r){n.some(function(o){o.__h&&(o.__h=[])}),n=[],S.__e(r,t.__v)}}),Re&&Re(e,n)},S.unmount=function(e){De&&De(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{xt(r)}catch(o){n=o}}),t.__H=void 0,n&&S.__e(n,t.__v))};var ze=typeof requestAnimationFrame=="function";function Co(e){var n,t=function(){clearTimeout(r),ze&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);ze&&(n=requestAnimationFrame(t))}function xt(e){var n=w,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),w=n}function Kt(e){var n=w;e.__c=e.__(),w=n}function Qn(e,n){return!e||e.length!==n.length||n.some(function(t,r){return t!==e[r]})}function Zn(e,n){return typeof n=="function"?n(e):n}function Tt(e,n){var t=T(n),r=t[0],o=t[1],i=Oo(e);return ko(function(){var s=i.current.subscribe(o);return function(){return s.unsubscribe()}}),r}var Qt=function(e,n){return Qt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])},Qt(e,n)};function Ct(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");Qt(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}function Zt(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Xt(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),o,i=[],s;try{for(;(n===void 0||n-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return i}function te(e,n,t){if(t||arguments.length===2)for(var r=0,o=n.length,i;r<o;r++)(i||!(r in n))&&(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return e.concat(i||Array.prototype.slice.call(n))}function j(e){return typeof e=="function"}function Xn(e){var n=function(r){Error.call(r),r.stack=new Error().stack},t=e(n);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Rt=Xn(function(e){return function(t){e(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function ee(e,n){if(e){var t=e.indexOf(n);0<=t&&e.splice(t,1)}}var At=function(){function e(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var n,t,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=Zt(s),a=u.next();!a.done;a=u.next()){var c=a.value;c.remove(this)}}catch(h){n={error:h}}finally{try{a&&!a.done&&(t=u.return)&&t.call(u)}finally{if(n)throw n.error}}else s.remove(this);var f=this.initialTeardown;if(j(f))try{f()}catch(h){i=h instanceof Rt?h.errors:[h]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var d=Zt(l),p=d.next();!p.done;p=d.next()){var b=p.value;try{Ve(b)}catch(h){i=i??[],h instanceof Rt?i=te(te([],Xt(i)),Xt(h.errors)):i.push(h)}}}catch(h){r={error:h}}finally{try{p&&!p.done&&(o=d.return)&&o.call(d)}finally{if(r)throw r.error}}}if(i)throw new Rt(i)}},e.prototype.add=function(n){var t;if(n&&n!==this)if(this.closed)Ve(n);else{if(n instanceof e){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(n)}},e.prototype._hasParent=function(n){var t=this._parentage;return t===n||Array.isArray(t)&&t.includes(n)},e.prototype._addParent=function(n){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n},e.prototype._removeParent=function(n){var t=this._parentage;t===n?this._parentage=null:Array.isArray(t)&&ee(t,n)},e.prototype.remove=function(n){var t=this._finalizers;t&&ee(t,n),n instanceof e&&n._removeParent(this)},e.EMPTY=function(){var n=new e;return n.closed=!0,n}(),e}(),tr=At.EMPTY;function er(e){return e instanceof At||e&&"closed"in e&&j(e.remove)&&j(e.add)&&j(e.unsubscribe)}function Ve(e){j(e)?e():e.unsubscribe()}var nr={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Ao={setTimeout:function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];return setTimeout.apply(void 0,te([e,n],Xt(t)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function jo(e){Ao.setTimeout(function(){throw e})}function Be(){}function St(e){e()}var rr=function(e){Ct(n,e);function n(t){var r=e.call(this)||this;return r.isStopped=!1,t?(r.destination=t,er(t)&&t.add(r)):r.destination=No,r}return n.create=function(t,r,o){return new ne(t,r,o)},n.prototype.next=function(t){this.isStopped||this._next(t)},n.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(At),Lo=Function.prototype.bind;function Dt(e,n){return Lo.call(e,n)}var Mo=function(){function e(n){this.partialObserver=n}return e.prototype.next=function(n){var t=this.partialObserver;if(t.next)try{t.next(n)}catch(r){vt(r)}},e.prototype.error=function(n){var t=this.partialObserver;if(t.error)try{t.error(n)}catch(r){vt(r)}else vt(n)},e.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(t){vt(t)}},e}(),ne=function(e){Ct(n,e);function n(t,r,o){var i=e.call(this)||this,s;if(j(t)||!t)s={next:t??void 0,error:r??void 0,complete:o??void 0};else{var u;i&&nr.useDeprecatedNextContext?(u=Object.create(t),u.unsubscribe=function(){return i.unsubscribe()},s={next:t.next&&Dt(t.next,u),error:t.error&&Dt(t.error,u),complete:t.complete&&Dt(t.complete,u)}):s=t}return i.destination=new Mo(s),i}return n}(rr);function vt(e){jo(e)}function Ho(e){throw e}var No={closed:!0,next:Be,error:Ho,complete:Be},Fo=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Ro(e){return e}function Do(e){return e.length===0?Ro:e.length===1?e[0]:function(t){return e.reduce(function(r,o){return o(r)},t)}}var qe=function(){function e(n){n&&(this._subscribe=n)}return e.prototype.lift=function(n){var t=new e;return t.source=this,t.operator=n,t},e.prototype.subscribe=function(n,t,r){var o=this,i=zo(n)?n:new ne(n,t,r);return St(function(){var s=o,u=s.operator,a=s.source;i.add(u?u.call(i,a):a?o._subscribe(i):o._trySubscribe(i))}),i},e.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(t){n.error(t)}},e.prototype.forEach=function(n,t){var r=this;return t=We(t),new t(function(o,i){var s=new ne({next:function(u){try{n(u)}catch(a){i(a),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},e.prototype._subscribe=function(n){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(n)},e.prototype[Fo]=function(){return this},e.prototype.pipe=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return Do(n)(this)},e.prototype.toPromise=function(n){var t=this;return n=We(n),new n(function(r,o){var i;t.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},e.create=function(n){return new e(n)},e}();function We(e){var n;return(n=e??nr.Promise)!==null&&n!==void 0?n:Promise}function Uo(e){return e&&j(e.next)&&j(e.error)&&j(e.complete)}function zo(e){return e&&e instanceof rr||Uo(e)&&er(e)}var Vo=Xn(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),de=function(e){Ct(n,e);function n(){var t=e.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return n.prototype.lift=function(t){var r=new Ye(this,this);return r.operator=t,r},n.prototype._throwIfClosed=function(){if(this.closed)throw new Vo},n.prototype.next=function(t){var r=this;St(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=Zt(r.currentObservers),u=s.next();!u.done;u=s.next()){var a=u.value;a.next(t)}}catch(c){o={error:c}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},n.prototype.error=function(t){var r=this;St(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=t;for(var o=r.observers;o.length;)o.shift().error(t)}})},n.prototype.complete=function(){var t=this;St(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var r=t.observers;r.length;)r.shift().complete()}})},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},n.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},n.prototype._innerSubscribe=function(t){var r=this,o=this,i=o.hasError,s=o.isStopped,u=o.observers;return i||s?tr:(this.currentObservers=null,u.push(t),new At(function(){r.currentObservers=null,ee(u,t)}))},n.prototype._checkFinalizedStatuses=function(t){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?t.error(i):s&&t.complete()},n.prototype.asObservable=function(){var t=new qe;return t.source=this,t},n.create=function(t,r){return new Ye(t,r)},n}(qe),Ye=function(e){Ct(n,e);function n(t,r){var o=e.call(this)||this;return o.destination=t,o.source=r,o}return n.prototype.next=function(t){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,t)},n.prototype.error=function(t){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,t)},n.prototype.complete=function(){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||r===void 0||r.call(t)},n.prototype._subscribe=function(t){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(t))!==null&&o!==void 0?o:tr},n}(de),ir=4,or=new de,sr=or.asObservable();function ur(){return ir}function G(e){ir=e,or.next(e)}var cr="initial",ar=new de,lr=ar.asObservable();function fr(){return cr}function U(e){cr=e,ar.next(e)}var pr=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},Ut=B(Ge||(Ge=pr([`
	height: 95%;
	display: grid;
	place-content: center;
`],[`
	height: 95%;
	display: grid;
	place-content: center;
`])));function ft(e){var n=e.title,t=e.children;return O(Je||(Je=pr([`
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
	`])),n,Ut,t[0],Ut,t[1],Ut,t[2])}var Ge,Je,Bo=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};function qo(){var e=T("I'm an input !"),n=e[0],t=e[1],r=`&lt;crumbs-input
	value="`.concat(n,`"&gt;
&lt;/crumbs-input&gt;`);return O(Ke||(Ke=Bo([`
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
	`])),ft,n,function(o){return t(o.originalTarget.value)},n,function(o){return t(o.originalTarget.value)},{__html:r})}var Ke,Wo=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};function Yo(){var e=T("I'm a <b>paragraph</b> !"),n=e[0],t=e[1];return O(Qe||(Qe=Wo([`
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
	`])),ft,{__html:n},n,function(r){return t(r.originalTarget.value)},{__html:"&lt;crumbs-p&gt; ".concat(n," &lt;/crumbs-p&gt;")})}var Qe,Go=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},Jo=function(e,n,t,r){function o(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function u(f){try{c(r.next(f))}catch(l){s(l)}}function a(f){try{c(r.throw(f))}catch(l){s(l)}}function c(f){f.done?i(f.value):o(f.value).then(u,a)}c((r=r.apply(e,n||[])).next())})},Ko=function(e,n){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(c){return function(f){return a([c,f])}}function a(c){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(t=0)),t;)try{if(r=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,o=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){t.label=c[1];break}if(c[0]===6&&t.label<i[1]){t.label=i[1],i=c;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(c);break}i[2]&&t.ops.pop(),t.trys.pop();continue}c=n.call(e,t)}catch(f){c=[6,f],o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};function Qo(){var e=this,n=T("I'm a panel !"),t=n[0],r=n[1],o=T(""),i=o[0],s=o[1],u=T("100"),a=u[0],c=u[1],f=T(!1),l=f[0],d=f[1],p=`&lt;crumbs-panel
	panel-title="`.concat(i,`"
	panel-loading="`).concat(a,`"&gt;
	`).concat(t,`
&lt;/crumbs-panel&gt;`),b=Kn(function(){return Jo(e,void 0,void 0,function(){var m;return Ko(this,function(v){switch(v.label){case 0:if(l)return[2];d(!0),c("0"),m=0,v.label=1;case 1:return m<=100?[4,new Promise(function(y){return setTimeout(y,10)})]:[3,4];case 2:v.sent(),c(Math.floor(m).toString()),v.label=3;case 3:return m+=.1+(100-m)/100,[3,1];case 4:return c("100"),d(!1),[2]}})})},[l]),h=function(){l||b()};return O(Ze||(Ze=Go([`
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
	`])),ft,a,i,t,i,function(m){return s(m.originalTarget.value)},t,function(m){return r(m.originalTarget.value)},a,function(m){return c(String(m.target.value))},h,{__html:p})}var Ze,Zo=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};function Xo(){var e=T("Tab content"),n=e[0],t=e[1],r=T("Tab title"),o=r[0],i=r[1],s=T("Tab content 2"),u=s[0],a=s[1],c=T("Tab title 2"),f=c[0],l=c[1],d=`&lt;crumbs-tabs&gt;
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
&lt;/crumbs-panel&gt;`);return O(Xe||(Xe=Zo([`
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
	`])),ft,o,n,f,u,o,function(p){return i(p.originalTarget.value)},n,function(p){return t(p.originalTarget.value)},f,function(p){return l(p.originalTarget.value)},u,function(p){return a(p.originalTarget.value)},{__html:d})}var Xe,ts=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};function es(){return O(tn||(tn=ts([`
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
	`])))}var tn,zt=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};function ns(){var e=Tt(sr,ur),n=Tt(lr,fr),t=B(en||(en=zt([`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`],[`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`]))),r=B(nn||(nn=zt([`
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
	`])));return O(rn||(rn=zt([`
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
	`])),t,r,e===1,function(){return G(1)},e===2,function(){return G(2)},e===3,function(){return G(3)},e===4,function(){return G(4)},e===5,function(){return G(5)},e===6,function(){return G(6)},r,n==="initial",function(){return U("initial")},n==="monospace",function(){return U("monospace")},n==="serif",function(){return U("serif")},n==="sans-serif",function(){return U("sans-serif")},n==="cursive",function(){return U("cursive")},n==="fantasy",function(){return U("fantasy")},n==="system-ui",function(){return U("system-ui")})}var en,nn,rn,rs=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};function is(){var e="&lt;crumbs-p&gt; Hello world ! &lt;/crumbs-p&gt;";return O(on||(on=rs([`
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
	`])),{__html:e})}var on,os=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},ss=function(e,n,t,r){function o(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function u(f){try{c(r.next(f))}catch(l){s(l)}}function a(f){try{c(r.throw(f))}catch(l){s(l)}}function c(f){f.done?i(f.value):o(f.value).then(u,a)}c((r=r.apply(e,n||[])).next())})},us=function(e,n){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(c){return function(f){return a([c,f])}}function a(c){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(t=0)),t;)try{if(r=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,o=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){t.label=c[1];break}if(c[0]===6&&t.label<i[1]){t.label=i[1],i=c;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(c);break}i[2]&&t.ops.pop(),t.trys.pop();continue}c=n.call(e,t)}catch(f){c=[6,f],o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};function cs(){var e=this,n=T("Click me !"),t=n[0],r=n[1],o=T("100"),i=o[0],s=o[1],u=T(!1),a=u[0],c=u[1],f=Kn(function(){return ss(e,void 0,void 0,function(){var p;return us(this,function(b){switch(b.label){case 0:if(a)return[2];c(!0),s("0"),p=0,b.label=1;case 1:return p<=100?[4,new Promise(function(h){return setTimeout(h,10)})]:[3,4];case 2:b.sent(),s(Math.floor(p).toString()),b.label=3;case 3:return p+=.1+(100-p)/100,[3,1];case 4:return s("100"),c(!1),[2]}})})},[a]),l=function(){a||f()},d='&lt;crumbs-button progress="'.concat(i,'" &gt; ').concat(t," &lt;/crumbs-button&gt;");return O(sn||(sn=os([`
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
	`])),ft,i,i,i,t,t,function(p){return r(p.originalTarget.value)},i,function(p){return s(String(p.target.value))},l,{__html:d})}var sn;function as(){const e=Tt(sr,ur),n=Tt(lr,fr),t=B`
		background-image: url('bg${e}.jpg');
		background-size: cover;
		min-height: 100vh;
		position: fixed;
		min-width: 100vw;
		background-position: center;
	`,r=B`
		display: grid;
		overflow-y: scroll;
		height: 100vh;
		grid-template-columns: repeat(auto-fit, minmax(max(28rem + 6vw), 1fr));
		font-family: ${n};
	`;return O`
		<div class=${t}></div>

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
	`}Eo(O`<${as}><//>`,document.body);
