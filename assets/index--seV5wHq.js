var dr=Object.defineProperty;var br=(e,n,t)=>n in e?dr(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var x=(e,n,t)=>br(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function Ot(e){for(var n,t,r=arguments,o=1,i="",s="",u=[0],c=function(l){o===1&&(l||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(l?r[l]:i):o===3&&(l||i)?(u[1]=l?r[l]:i,o=2):o===2&&i==="..."&&l?u[2]=Object.assign(u[2]||{},r[l]):o===2&&i&&!l?(u[2]=u[2]||{})[i]=!0:o>=5&&(o===5?((u[2]=u[2]||{})[t]=l?i?i+r[l]:r[l]:i,o=6):(l||i)&&(u[2][t]+=l?i+r[l]:i)),i=""},a=0;a<e.length;a++){a&&(o===1&&c(),c(a));for(var f=0;f<e[a].length;f++)n=e[a][f],o===1?n==="<"?(c(),u=[u,"",null],o=3):i+=n:o===4?i==="--"&&n===">"?(o=1,i=""):i=n+i[0]:s?n===s?s="":i+=n:n==='"'||n==="'"?s=n:n===">"?(c(),o=1):o&&(n==="="?(o=5,t=i,i=""):n==="/"&&(o<5||e[a][f+1]===">")?(c(),o===3&&(u=u[0]),o=u,(u=u[0]).push(this.apply(null,o.slice(1))),o=0):n===" "||n==="	"||n===`
`||n==="\r"?(c(),o=2):i+=n),o===3&&i==="!--"&&(o=4,u=u[0])}return c(),u.length>2?u.slice(1):u[1]}function hr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function mr(e){if(e.__esModule)return e;var n=e.default;if(typeof n=="function"){var t=function r(){return this instanceof r?Reflect.construct(n,arguments,this.constructor):n.apply(this,arguments)};t.prototype=n.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),t}var un={exports:{}};/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */var vr=function(n){var t=String.prototype.split,r=/()??/.exec("")[1]===n,o;return o=function(i,l,u){if(Object.prototype.toString.call(l)!=="[object RegExp]")return t.call(i,l,u);var c=[],a=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.extended?"x":"")+(l.sticky?"y":""),f=0,l=new RegExp(l.source,a+"g"),d,p,h,b;for(i+="",r||(d=new RegExp("^"+l.source+"$(?!\\s)",a)),u=u===n?-1>>>0:u>>>0;(p=l.exec(i))&&(h=p.index+p[0].length,!(h>f&&(c.push(i.slice(f,p.index)),!r&&p.length>1&&p[0].replace(d,function(){for(var m=1;m<arguments.length-2;m++)arguments[m]===n&&(p[m]=n)}),p.length>1&&p.index<i.length&&Array.prototype.push.apply(c,p.slice(1)),b=p[0].length,f=h,c.length>=u)));)l.lastIndex===p.index&&l.lastIndex++;return f===i.length?(b||!l.test(""))&&c.push(""):c.push(i.slice(f)),c.length>u?c.slice(0,u):c},o}(),_r=[].indexOf,yr=function(e,n){if(_r)return e.indexOf(n);for(var t=0;t<e.length;++t)if(e[t]===n)return t;return-1},Mt=yr,gr=wr;function wr(e){var n=e.classList;if(n)return n;var t={add:r,remove:o,contains:i,toggle:s,toString:u,length:0,item:c};return t;function r(l){var d=a();Mt(d,l)>-1||(d.push(l),f(d))}function o(l){var d=a(),p=Mt(d,l);p!==-1&&(d.splice(p,1),f(d))}function i(l){return Mt(a(),l)>-1}function s(l){return i(l)?(o(l),!1):(r(l),!0)}function u(){return e.className}function c(l){var d=a();return d[l]||null}function a(){var l=e.className;return xr(l.split(" "),Sr)}function f(l){var d=l.length;e.className=l.join(" "),t.length=d;for(var p=0;p<l.length;p++)t[p]=l[p];delete l[d]}}function xr(e,n){for(var t=[],r=0;r<e.length;r++)n(e[r])&&t.push(e[r]);return t}function Sr(e){return!!e}const $r={},Ir=Object.freeze(Object.defineProperty({__proto__:null,default:$r},Symbol.toStringTag,{value:"Module"})),Er=mr(Ir);var Tr=vr,kr=gr,an=typeof window>"u"?Er:window,rt=an.document,Or=an.Text;function cn(){var e=[];function n(){var t=[].slice.call(arguments),r=null;function o(i){var s;function u(l){var d=Tr(l,/([\.#]?[^\s#.]+)/);/^\.|#/.test(d[1])&&(r=rt.createElement("div")),be(d,function(p){var h=p.substring(1,p.length);p&&(r?p[0]==="."?kr(r).add(h):p[0]==="#"&&r.setAttribute("id",h):r=rt.createElement(p))})}if(i!=null){if(typeof i=="string")r?r.appendChild(s=rt.createTextNode(i)):u(i);else if(typeof i=="number"||typeof i=="boolean"||i instanceof Date||i instanceof RegExp)r.appendChild(s=rt.createTextNode(i.toString()));else if(Cr(i))be(i,o);else if(Ht(i))r.appendChild(s=i);else if(i instanceof Or)r.appendChild(s=i);else if(typeof i=="object")for(var c in i)if(typeof i[c]=="function")/^on\w+/.test(c)?function(l,d){r.addEventListener?(r.addEventListener(l.substring(2),d[l],!1),e.push(function(){r.removeEventListener(l.substring(2),d[l],!1)})):(r.attachEvent(l,d[l]),e.push(function(){r.detachEvent(l,d[l])}))}(c,i):(r[c]=i[c](),e.push(i[c](function(l){r[c]=l})));else if(c==="style")if(typeof i[c]=="string")r.style.cssText=i[c];else for(var a in i[c])(function(l,d){if(typeof d=="function")r.style.setProperty(l,d()),e.push(d(function(h){r.style.setProperty(l,h)}));else var p=i[c][l].match(/(.*)\W+!important\W*$/);p?r.style.setProperty(l,p[1],"important"):r.style.setProperty(l,i[c][l])})(a,i[c][a]);else if(c==="attrs")for(var f in i[c])r.setAttribute(f,i[c][f]);else c.substr(0,5)==="data-"?r.setAttribute(c,i[c]):r[c]=i[c];else if(typeof i=="function"){var f=i();r.appendChild(s=Ht(f)?f:rt.createTextNode(f)),e.push(i(function(d){Ht(d)&&s.parentElement?(s.parentElement.replaceChild(d,s),s=d):s.textContent=d}))}}return s}for(;t.length;)o(t.shift());return r}return n.cleanup=function(){for(var t=0;t<e.length;t++)e[t]();e.length=0},n}var Pr=un.exports=cn();Pr.context=cn;function Ht(e){return e&&e.nodeName&&e.nodeType}function be(e,n){if(e.forEach)return e.forEach(n);for(var t=0;t<e.length;t++)n(e[t],t)}function Cr(e){return Object.prototype.toString.call(e)=="[object Array]"}var Ar=un.exports;const ct=hr(Ar);function D(e){if(!e.shadowRoot)throw new Error("There is no shadow root on the element !");return e.shadowRoot}function lt(e){const n=Array.isArray(e)?e:[e],t=document.createElement("template");return t.innerHTML=n.map(r=>r.outerHTML).join(""),t}var Vt=function(e,n){return Vt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])},Vt(e,n)};function z(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");Vt(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}function jr(e,n,t,r){function o(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function u(f){try{a(r.next(f))}catch(l){s(l)}}function c(f){try{a(r.throw(f))}catch(l){s(l)}}function a(f){f.done?i(f.value):o(f.value).then(u,c)}a((r=r.apply(e,n||[])).next())})}function ln(e,n){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(a){return function(f){return c([a,f])}}function c(a){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(t=0)),t;)try{if(r=1,o&&(i=a[0]&2?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[a[0]&2,i.value]),a[0]){case 0:case 1:i=a;break;case 4:return t.label++,{value:a[1],done:!1};case 5:t.label++,o=a[1],a=[0];continue;case 7:a=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){t.label=a[1];break}if(a[0]===6&&t.label<i[1]){t.label=i[1],i=a;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(a);break}i[2]&&t.ops.pop(),t.trys.pop();continue}a=n.call(e,t)}catch(f){a=[6,f],o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function tt(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function et(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),o,i=[],s;try{for(;(n===void 0||n-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return i}function ot(e,n,t){if(t||arguments.length===2)for(var r=0,o=n.length,i;r<o;r++)(i||!(r in n))&&(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return e.concat(i||Array.prototype.slice.call(n))}function X(e){return this instanceof X?(this.v=e,this):new X(e)}function Lr(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(e,n||[]),o,i=[];return o={},u("next"),u("throw"),u("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(p){return function(h){return Promise.resolve(h).then(p,l)}}function u(p,h){r[p]&&(o[p]=function(b){return new Promise(function(m,v){i.push([p,b,m,v])>1||c(p,b)})},h&&(o[p]=h(o[p])))}function c(p,h){try{a(r[p](h))}catch(b){d(i[0][3],b)}}function a(p){p.value instanceof X?Promise.resolve(p.value.v).then(f,l):d(i[0][2],p)}function f(p){c("next",p)}function l(p){c("throw",p)}function d(p,h){p(h),i.shift(),i.length&&c(i[0][0],i[0][1])}}function Mr(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof tt=="function"?tt(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(i){t[i]=e[i]&&function(s){return new Promise(function(u,c){s=e[i](s),o(u,c,s.done,s.value)})}}function o(i,s,u,c){Promise.resolve(c).then(function(a){i({value:a,done:u})},s)}}function _(e){return typeof e=="function"}function re(e){var n=function(r){Error.call(r),r.stack=new Error().stack},t=e(n);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Dt=re(function(e){return function(t){e(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function Et(e,n){if(e){var t=e.indexOf(n);0<=t&&e.splice(t,1)}}var ft=function(){function e(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var n,t,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=tt(s),c=u.next();!c.done;c=u.next()){var a=c.value;a.remove(this)}}catch(b){n={error:b}}finally{try{c&&!c.done&&(t=u.return)&&t.call(u)}finally{if(n)throw n.error}}else s.remove(this);var f=this.initialTeardown;if(_(f))try{f()}catch(b){i=b instanceof Dt?b.errors:[b]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var d=tt(l),p=d.next();!p.done;p=d.next()){var h=p.value;try{he(h)}catch(b){i=i??[],b instanceof Dt?i=ot(ot([],et(i)),et(b.errors)):i.push(b)}}}catch(b){r={error:b}}finally{try{p&&!p.done&&(o=d.return)&&o.call(d)}finally{if(r)throw r.error}}}if(i)throw new Dt(i)}},e.prototype.add=function(n){var t;if(n&&n!==this)if(this.closed)he(n);else{if(n instanceof e){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(n)}},e.prototype._hasParent=function(n){var t=this._parentage;return t===n||Array.isArray(t)&&t.includes(n)},e.prototype._addParent=function(n){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n},e.prototype._removeParent=function(n){var t=this._parentage;t===n?this._parentage=null:Array.isArray(t)&&Et(t,n)},e.prototype.remove=function(n){var t=this._finalizers;t&&Et(t,n),n instanceof e&&n._removeParent(this)},e.EMPTY=function(){var n=new e;return n.closed=!0,n}(),e}(),fn=ft.EMPTY;function pn(e){return e instanceof ft||e&&"closed"in e&&_(e.remove)&&_(e.add)&&_(e.unsubscribe)}function he(e){_(e)?e():e.unsubscribe()}var dn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},bn={setTimeout:function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];return setTimeout.apply(void 0,ot([e,n],et(t)))},clearTimeout:function(e){var n=bn.delegate;return((n==null?void 0:n.clearTimeout)||clearTimeout)(e)},delegate:void 0};function hn(e){bn.setTimeout(function(){throw e})}function me(){}function gt(e){e()}var ie=function(e){z(n,e);function n(t){var r=e.call(this)||this;return r.isStopped=!1,t?(r.destination=t,pn(t)&&t.add(r)):r.destination=Fr,r}return n.create=function(t,r,o){return new Bt(t,r,o)},n.prototype.next=function(t){this.isStopped||this._next(t)},n.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(ft),Hr=Function.prototype.bind;function Nt(e,n){return Hr.call(e,n)}var Dr=function(){function e(n){this.partialObserver=n}return e.prototype.next=function(n){var t=this.partialObserver;if(t.next)try{t.next(n)}catch(r){vt(r)}},e.prototype.error=function(n){var t=this.partialObserver;if(t.error)try{t.error(n)}catch(r){vt(r)}else vt(n)},e.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(t){vt(t)}},e}(),Bt=function(e){z(n,e);function n(t,r,o){var i=e.call(this)||this,s;if(_(t)||!t)s={next:t??void 0,error:r??void 0,complete:o??void 0};else{var u;i&&dn.useDeprecatedNextContext?(u=Object.create(t),u.unsubscribe=function(){return i.unsubscribe()},s={next:t.next&&Nt(t.next,u),error:t.error&&Nt(t.error,u),complete:t.complete&&Nt(t.complete,u)}):s=t}return i.destination=new Dr(s),i}return n}(ie);function vt(e){hn(e)}function Nr(e){throw e}var Fr={closed:!0,next:me,error:Nr,complete:me},oe=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function pt(e){return e}function Rr(e){return e.length===0?pt:e.length===1?e[0]:function(t){return e.reduce(function(r,o){return o(r)},t)}}var E=function(){function e(n){n&&(this._subscribe=n)}return e.prototype.lift=function(n){var t=new e;return t.source=this,t.operator=n,t},e.prototype.subscribe=function(n,t,r){var o=this,i=zr(n)?n:new Bt(n,t,r);return gt(function(){var s=o,u=s.operator,c=s.source;i.add(u?u.call(i,c):c?o._subscribe(i):o._trySubscribe(i))}),i},e.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(t){n.error(t)}},e.prototype.forEach=function(n,t){var r=this;return t=ve(t),new t(function(o,i){var s=new Bt({next:function(u){try{n(u)}catch(c){i(c),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},e.prototype._subscribe=function(n){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(n)},e.prototype[oe]=function(){return this},e.prototype.pipe=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return Rr(n)(this)},e.prototype.toPromise=function(n){var t=this;return n=ve(n),new n(function(r,o){var i;t.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},e.create=function(n){return new e(n)},e}();function ve(e){var n;return(n=e??dn.Promise)!==null&&n!==void 0?n:Promise}function Ur(e){return e&&_(e.next)&&_(e.error)&&_(e.complete)}function zr(e){return e&&e instanceof ie||Ur(e)&&pn(e)}function Vr(e){return _(e==null?void 0:e.lift)}function C(e){return function(n){if(Vr(n))return n.lift(function(t){try{return e(t,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function P(e,n,t,r,o){return new Br(e,n,t,r,o)}var Br=function(e){z(n,e);function n(t,r,o,i,s,u){var c=e.call(this,t)||this;return c.onFinalize=s,c.shouldUnsubscribe=u,c._next=r?function(a){try{r(a)}catch(f){t.error(f)}}:e.prototype._next,c._error=i?function(a){try{i(a)}catch(f){t.error(f)}finally{this.unsubscribe()}}:e.prototype._error,c._complete=o?function(){try{o()}catch(a){t.error(a)}finally{this.unsubscribe()}}:e.prototype._complete,c}return n.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},n}(ie),Wr=re(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),mn=function(e){z(n,e);function n(){var t=e.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return n.prototype.lift=function(t){var r=new _e(this,this);return r.operator=t,r},n.prototype._throwIfClosed=function(){if(this.closed)throw new Wr},n.prototype.next=function(t){var r=this;gt(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=tt(r.currentObservers),u=s.next();!u.done;u=s.next()){var c=u.value;c.next(t)}}catch(a){o={error:a}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},n.prototype.error=function(t){var r=this;gt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=t;for(var o=r.observers;o.length;)o.shift().error(t)}})},n.prototype.complete=function(){var t=this;gt(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var r=t.observers;r.length;)r.shift().complete()}})},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},n.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},n.prototype._innerSubscribe=function(t){var r=this,o=this,i=o.hasError,s=o.isStopped,u=o.observers;return i||s?fn:(this.currentObservers=null,u.push(t),new ft(function(){r.currentObservers=null,Et(u,t)}))},n.prototype._checkFinalizedStatuses=function(t){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?t.error(i):s&&t.complete()},n.prototype.asObservable=function(){var t=new E;return t.source=this,t},n.create=function(t,r){return new _e(t,r)},n}(E),_e=function(e){z(n,e);function n(t,r){var o=e.call(this)||this;return o.destination=t,o.source=r,o}return n.prototype.next=function(t){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,t)},n.prototype.error=function(t){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,t)},n.prototype.complete=function(){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||r===void 0||r.call(t)},n.prototype._subscribe=function(t){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(t))!==null&&o!==void 0?o:fn},n}(mn),qr={now:function(){return Date.now()},delegate:void 0},Yr=function(e){z(n,e);function n(t,r){return e.call(this)||this}return n.prototype.schedule=function(t,r){return this},n}(ft),ye={setInterval:function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];return setInterval.apply(void 0,ot([e,n],et(t)))},clearInterval:function(e){return clearInterval(e)},delegate:void 0},Gr=function(e){z(n,e);function n(t,r){var o=e.call(this,t,r)||this;return o.scheduler=t,o.work=r,o.pending=!1,o}return n.prototype.schedule=function(t,r){var o;if(r===void 0&&(r=0),this.closed)return this;this.state=t;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=(o=this.id)!==null&&o!==void 0?o:this.requestAsyncId(s,this.id,r),this},n.prototype.requestAsyncId=function(t,r,o){return o===void 0&&(o=0),ye.setInterval(t.flush.bind(t,this),o)},n.prototype.recycleAsyncId=function(t,r,o){if(o===void 0&&(o=0),o!=null&&this.delay===o&&this.pending===!1)return r;r!=null&&ye.clearInterval(r)},n.prototype.execute=function(t,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var o=this._execute(t,r);if(o)return o;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(t,r){var o=!1,i;try{this.work(t)}catch(s){o=!0,i=s||new Error("Scheduled action threw falsy error")}if(o)return this.unsubscribe(),i},n.prototype.unsubscribe=function(){if(!this.closed){var t=this,r=t.id,o=t.scheduler,i=o.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Et(i,this),r!=null&&(this.id=this.recycleAsyncId(o,r,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},n}(Yr),ge=function(){function e(n,t){t===void 0&&(t=e.now),this.schedulerActionCtor=n,this.now=t}return e.prototype.schedule=function(n,t,r){return t===void 0&&(t=0),new this.schedulerActionCtor(this,n).schedule(r,t)},e.now=qr.now,e}(),Jr=function(e){z(n,e);function n(t,r){r===void 0&&(r=ge.now);var o=e.call(this,t,r)||this;return o.actions=[],o._active=!1,o}return n.prototype.flush=function(t){var r=this.actions;if(this._active){r.push(t);return}var o;this._active=!0;do if(o=t.execute(t.state,t.delay))break;while(t=r.shift());if(this._active=!1,o){for(;t=r.shift();)t.unsubscribe();throw o}},n}(ge),vn=new Jr(Gr),Kr=vn,_n=new E(function(e){return e.complete()});function yn(e){return e&&_(e.schedule)}function se(e){return e[e.length-1]}function Qr(e){return _(se(e))?e.pop():void 0}function dt(e){return yn(se(e))?e.pop():void 0}function Zr(e,n){return typeof se(e)=="number"?e.pop():n}var ue=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function gn(e){return _(e==null?void 0:e.then)}function wn(e){return _(e[oe])}function xn(e){return Symbol.asyncIterator&&_(e==null?void 0:e[Symbol.asyncIterator])}function Sn(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Xr(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var $n=Xr();function In(e){return _(e==null?void 0:e[$n])}function En(e){return Lr(this,arguments,function(){var t,r,o,i;return ln(this,function(s){switch(s.label){case 0:t=e.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,X(t.read())];case 3:return r=s.sent(),o=r.value,i=r.done,i?[4,X(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,X(o)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function Tn(e){return _(e==null?void 0:e.getReader)}function J(e){if(e instanceof E)return e;if(e!=null){if(wn(e))return ti(e);if(ue(e))return ei(e);if(gn(e))return ni(e);if(xn(e))return kn(e);if(In(e))return ri(e);if(Tn(e))return ii(e)}throw Sn(e)}function ti(e){return new E(function(n){var t=e[oe]();if(_(t.subscribe))return t.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function ei(e){return new E(function(n){for(var t=0;t<e.length&&!n.closed;t++)n.next(e[t]);n.complete()})}function ni(e){return new E(function(n){e.then(function(t){n.closed||(n.next(t),n.complete())},function(t){return n.error(t)}).then(null,hn)})}function ri(e){return new E(function(n){var t,r;try{for(var o=tt(e),i=o.next();!i.done;i=o.next()){var s=i.value;if(n.next(s),n.closed)return}}catch(u){t={error:u}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}n.complete()})}function kn(e){return new E(function(n){oi(e,n).catch(function(t){return n.error(t)})})}function ii(e){return kn(En(e))}function oi(e,n){var t,r,o,i;return jr(this,void 0,void 0,function(){var s,u;return ln(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),t=Mr(e),c.label=1;case 1:return[4,t.next()];case 2:if(r=c.sent(),!!r.done)return[3,4];if(s=r.value,n.next(s),n.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return u=c.sent(),o={error:u},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(i=t.return)?[4,i.call(t)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}})})}function R(e,n,t,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=n.schedule(function(){t(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function On(e,n){return n===void 0&&(n=0),C(function(t,r){t.subscribe(P(r,function(o){return R(r,e,function(){return r.next(o)},n)},function(){return R(r,e,function(){return r.complete()},n)},function(o){return R(r,e,function(){return r.error(o)},n)}))})}function Pn(e,n){return n===void 0&&(n=0),C(function(t,r){r.add(e.schedule(function(){return t.subscribe(r)},n))})}function si(e,n){return J(e).pipe(Pn(n),On(n))}function ui(e,n){return J(e).pipe(Pn(n),On(n))}function ai(e,n){return new E(function(t){var r=0;return n.schedule(function(){r===e.length?t.complete():(t.next(e[r++]),t.closed||this.schedule())})})}function ci(e,n){return new E(function(t){var r;return R(t,n,function(){r=e[$n](),R(t,n,function(){var o,i,s;try{o=r.next(),i=o.value,s=o.done}catch(u){t.error(u);return}s?t.complete():t.next(i)},0,!0)}),function(){return _(r==null?void 0:r.return)&&r.return()}})}function Cn(e,n){if(!e)throw new Error("Iterable cannot be null");return new E(function(t){R(t,n,function(){var r=e[Symbol.asyncIterator]();R(t,n,function(){r.next().then(function(o){o.done?t.complete():t.next(o.value)})},0,!0)})})}function li(e,n){return Cn(En(e),n)}function fi(e,n){if(e!=null){if(wn(e))return si(e,n);if(ue(e))return ai(e,n);if(gn(e))return ui(e,n);if(xn(e))return Cn(e,n);if(In(e))return ci(e,n);if(Tn(e))return li(e,n)}throw Sn(e)}function bt(e,n){return n?fi(e,n):J(e)}function we(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=dt(e);return bt(e,t)}var An=re(function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}});function pi(e){return e instanceof Date&&!isNaN(e)}function $(e,n){return C(function(t,r){var o=0;t.subscribe(P(r,function(i){r.next(e.call(n,i,o++))}))})}var di=Array.isArray;function bi(e,n){return di(n)?e.apply(void 0,ot([],et(n))):e(n)}function jn(e){return $(function(n){return bi(e,n)})}var hi=Array.isArray,mi=Object.getPrototypeOf,vi=Object.prototype,_i=Object.keys;function yi(e){if(e.length===1){var n=e[0];if(hi(n))return{args:n,keys:null};if(gi(n)){var t=_i(n);return{args:t.map(function(r){return n[r]}),keys:t}}}return{args:e,keys:null}}function gi(e){return e&&typeof e=="object"&&mi(e)===vi}function wi(e,n){return e.reduce(function(t,r,o){return t[r]=n[o],t},{})}function it(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=dt(e),r=Qr(e),o=yi(e),i=o.args,s=o.keys;if(i.length===0)return bt([],t);var u=new E(xi(i,t,s?function(c){return wi(s,c)}:pt));return r?u.pipe(jn(r)):u}function xi(e,n,t){return t===void 0&&(t=pt),function(r){xe(n,function(){for(var o=e.length,i=new Array(o),s=o,u=o,c=function(f){xe(n,function(){var l=bt(e[f],n),d=!1;l.subscribe(P(r,function(p){i[f]=p,d||(d=!0,u--),u||r.next(t(i.slice()))},function(){--s||r.complete()}))},r)},a=0;a<o;a++)c(a)},r)}}function xe(e,n,t){e?R(t,e,n):n()}function Si(e,n,t,r,o,i,s,u){var c=[],a=0,f=0,l=!1,d=function(){l&&!c.length&&!a&&n.complete()},p=function(b){return a<r?h(b):c.push(b)},h=function(b){a++;var m=!1;J(t(b,f++)).subscribe(P(n,function(v){n.next(v)},function(){m=!0},void 0,function(){if(m)try{a--;for(var v=function(){var y=c.shift();s||h(y)};c.length&&a<r;)v();d()}catch(y){n.error(y)}}))};return e.subscribe(P(n,p,function(){l=!0,d()})),function(){}}function Pt(e,n,t){return t===void 0&&(t=1/0),_(n)?Pt(function(r,o){return $(function(i,s){return n(r,i,o,s)})(J(e(r,o)))},t):(typeof n=="number"&&(t=n),C(function(r,o){return Si(r,o,e,t)}))}function Ln(e){return e===void 0&&(e=1/0),Pt(pt,e)}function $i(){return Ln(1)}function Se(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return $i()(bt(e,dt(e)))}var Ii=["addListener","removeListener"],Ei=["addEventListener","removeEventListener"],Ti=["on","off"];function U(e,n,t,r){if(_(t)&&(r=t,t=void 0),r)return U(e,n,t).pipe(jn(r));var o=et(Pi(e)?Ei.map(function(u){return function(c){return e[u](n,c,t)}}):ki(e)?Ii.map($e(e,n)):Oi(e)?Ti.map($e(e,n)):[],2),i=o[0],s=o[1];if(!i&&ue(e))return Pt(function(u){return U(u,n,t)})(J(e));if(!i)throw new TypeError("Invalid event target");return new E(function(u){var c=function(){for(var a=[],f=0;f<arguments.length;f++)a[f]=arguments[f];return u.next(1<a.length?a:a[0])};return i(c),function(){return s(c)}})}function $e(e,n){return function(t){return function(r){return e[t](n,r)}}}function ki(e){return _(e.addListener)&&_(e.removeListener)}function Oi(e){return _(e.on)&&_(e.off)}function Pi(e){return _(e.addEventListener)&&_(e.removeEventListener)}function Ci(e,n,t){t===void 0&&(t=Kr);var r=-1;return yn(n)?t=n:r=n,new E(function(o){var i=pi(e)?+e-t.now():e;i<0&&(i=0);var s=0;return t.schedule(function(){o.closed||(o.next(s++),0<=r?this.schedule(void 0,r):o.complete())},i)})}function Ai(e,n){return n===void 0&&(n=vn),Ci(e,e,n)}function ji(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=dt(e),r=Zr(e,1/0),o=e;return o.length?o.length===1?J(o[0]):Ln(r)(bt(o,t)):_n}function N(e,n){return C(function(t,r){var o=0;t.subscribe(P(r,function(i){return e.call(n,i,o++)&&r.next(i)}))})}function Li(e){return C(function(n,t){var r=!1;n.subscribe(P(t,function(o){r=!0,t.next(o)},function(){r||t.next(e),t.complete()}))})}function Mi(e){return e<=0?function(){return _n}:C(function(n,t){var r=0;n.subscribe(P(t,function(o){++r<=e&&(t.next(o),e<=r&&t.complete())}))})}function Ie(e){return $(function(){return e})}function Hi(e){return e===void 0&&(e=Di),C(function(n,t){var r=!1;n.subscribe(P(t,function(o){r=!0,t.next(o)},function(){return r?t.complete():t.error(e())}))})}function Di(){return new An}function Ni(e,n){var t=arguments.length>=2;return function(r){return r.pipe(pt,Mi(1),t?Li(n):Hi(function(){return new An}))}}function Fi(){return C(function(e,n){var t,r=!1;e.subscribe(P(n,function(o){var i=t;t=o,r&&n.next([i,o]),r=!0}))})}function Q(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=dt(e);return C(function(r,o){(t?Se(e,r,t):Se(e,r)).subscribe(o)})}function Ri(e,n){return C(function(t,r){var o=0;t.subscribe(P(r,function(i){var s=e(i,o++);(s||n)&&r.next(i),!s&&r.complete()}))})}function Mn(){return!document.hidden}function Ui(){const e=U(document,"visibilitychange"),n=U(window,"focus").pipe(Ie(!0)),t=U(window,"blur").pipe(Ie(!1)),r=ji(n,t);return it(e,r).pipe($(([,o])=>Mn()&&o),N(o=>o),Ni())}const zi=U(document,"mouseover");async function Vi(){Mn()||await Promise.race([Ui().toPromise(),zi.toPromise()])}async function Bi(){await new Promise(e=>setTimeout(e,400)),await Vi(),await new Promise(e=>setTimeout(e,400))}const Wi=Bi();function O(e,n){const t=e.querySelector(n);if(!t)throw new Error("Failed to find element ${ selector } !");return t}const qi=Ot.bind(ct),Yi="crumbs-p",Gi=lt(qi`
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
`);let Ji=class extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const n=D(this),t=Gi.content.cloneNode(!0);n.appendChild(t)}};customElements.define(Yi,Ji);const Ki=Ot.bind(ct),Qi="crumbs-panel",Zi=lt(Ki`
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
`);class Xi extends HTMLElement{constructor(){super(...arguments);x(this,"contentTimeoutElapsed",!1);x(this,"contentLoaded",!1);x(this,"connected",!1);x(this,"loading","100");x(this,"scrolled",!1);x(this,"scrolledSubscription",null)}static get observedAttributes(){return["panel-loading","panel-title"]}async connectedCallback(){this.attachShadow({mode:"open"}),await Wi;const t=D(this),r=Zi.content.cloneNode(!0);t.appendChild(r);const o=this.getAttribute("panel-loading");o!==null&&Ee(o)&&(this.loading=o),setTimeout(()=>{const i=O(t,"#panel-container");i.style.gridTemplateColumns="1rem 1fr 1rem",i.style.gridTemplateRows="1rem 1fr 1rem";const s=O(t,"#panel");s.style.backgroundColor="#ffffff40",this.scrolledSubscription=U(s,"scroll").pipe($(u=>u.target.scrollTop),$(u=>u!==0)).subscribe(u=>{this.scrolled=u,this.render()}),this.render()},10),setTimeout(()=>{this.contentTimeoutElapsed=!0,this.render()},400),this.connected=!0,this.render()}render(){const t=D(this),r=O(t,"#panel-content"),o=O(t,"#panel-loading"),i=O(t,"#panel"),s=O(t,"#panel-title-content");this.contentTimeoutElapsed&&to(this.loading)?(r.style.visibility="visible",r.style.opacity="1",i.style.overflow="auto"):(r.style.visibility="collapse",r.style.opacity="0",i.style.overflow="hidden"),o.style.width=`${this.loading}%`;const u=O(t,"#panel-title");this.loading==="100"&&this.getAttribute("panel-title")&&!this.scrolled?setTimeout(()=>{u.style.opacity="1",s.innerHTML=this.getAttribute("panel-title")||"",r.style.paddingTop="2.5rem"},10):(r.style.paddingTop="inherit",u.style.opacity="0")}attributeChangedCallback(){if(this.shadowRoot&&this.connected){const t=this.getAttribute("panel-loading");t!==null&&Ee(t)?this.loading=t:t===null&&(this.loading="100"),this.render()}}disconnectedCallback(){var t;(t=this.scrolledSubscription)==null||t.unsubscribe()}}function Ee(e){const n=Number(e),t=Math.floor(n);return t===n&&Number.isInteger(t)&&Number.isFinite(t)&&t<=100&&t>=0}function to(e){return e===null||e==="100"}customElements.define(Qi,Xi);const eo=Ot.bind(ct),no="crumbs-input",ro=lt(eo`
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
`);class io extends HTMLElement{static get observedAttributes(){return["value"]}async connectedCallback(){this.attachShadow({mode:"open"});const n=D(this),t=ro.content.cloneNode(!0);n.appendChild(t);const r=O(n,"input"),o=this.getAttribute("value");r instanceof HTMLInputElement&&o&&(r.value=o)}attributeChangedCallback(n,t,r){if(n==="value"&&this.shadowRoot){const o=D(this),i=O(o,"input");i instanceof HTMLInputElement&&(i.value=r)}}}customElements.define(no,io);const Wt=Ot.bind(ct),oo="crumbs-tabs",so=lt(Wt`
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
`);class uo extends HTMLElement{constructor(){super(...arguments);x(this,"selected",1);x(this,"subscriptions",[])}async connectedCallback(){this.attachShadow({mode:"open"});const t=D(this),r=so.content.cloneNode(!0);t.appendChild(r);const o=this.getAttribute("selected");this.selected=Number.parseInt(o||"1");const i=t.querySelector("#tabs"),s=t.querySelector("#content");if(!i)throw new Error("Tabs not found");if(!s)throw new Error("Content not found");for(const u of{[Symbol.iterator]:()=>this.getSlots()}){if(u.startsWith("content-")){const c=Wt`<div id=${`${u}`}> <slot name=${u}></slot> </div>`;c instanceof Element&&s.appendChild(c)}if(u.startsWith("title-")){const c=Wt`<div id=${u}> <crumbs-p> <slot name=${u}></slot> </crumbs-p> </div>`;c instanceof Element&&i.appendChild(c)}}this.subscriptions=[...i.children].map((u,c)=>U(u,"click").subscribe(()=>{const a=u.id.replace("title-","content-"),f=t.querySelector(`#${a}`);f instanceof HTMLElement&&s instanceof HTMLElement&&f.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.selected=c+1,this.render()})),this.render()}render(){const r=D(this).querySelector("#tabs");if(!r)throw new Error("Tabs not found");[...r.children].forEach((o,i)=>{i+1===this.selected?o instanceof HTMLElement&&o.classList.add("selected-title"):o instanceof HTMLElement&&o.classList.remove("selected-title")})}disconnectedCallback(){for(const t of this.subscriptions)t.unsubscribe()}*getSlots(){for(const t of Array.from(this.children)){const r=t.getAttribute("slot");r&&(yield r)}}}customElements.define(oo,uo);var Hn=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var s=n[i++],u=n[i]?(n[0]|=s?1:2,t[n[i++]]):n[++i];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[n[++i]]=u:s===6?r[1][n[++i]]+=u+"":s?(o=e.apply(u,Hn(e,u,t,["",null])),r.push(o),u[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(u)}return r},Te=new Map;function ao(e){var n=Te.get(this);return n||(n=new Map,Te.set(this,n)),(n=Hn(this,n.get(e)||(n.set(e,n=function(t){for(var r,o,i=1,s="",u="",c=[0],a=function(d){i===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,d,s):i===3&&(d||s)?(c.push(3,d,s),i=2):i===2&&s==="..."&&d?c.push(4,d,0):i===2&&s&&!d?c.push(5,0,!0,s):i>=5&&((s||!d&&i===5)&&(c.push(i,0,s,o),i=6),d&&(c.push(i,d,0,o),i=6)),s=""},f=0;f<t.length;f++){f&&(i===1&&a(),a(f));for(var l=0;l<t[f].length;l++)r=t[f][l],i===1?r==="<"?(a(),c=[c],i=3):s+=r:i===4?s==="--"&&r===">"?(i=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(a(),i=1):i&&(r==="="?(i=5,o=s,s=""):r==="/"&&(i<5||t[f][l+1]===">")?(a(),i===3&&(c=c[0]),i=c,(c=c[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(a(),i=2):s+=r),i===3&&s==="!--"&&(i=4,c=c[0])}return a(),c}(e)),n),arguments,[])).length>1?n:n[0]}const co=ao.bind(ct),lo="crumbs-button",fo=600;class po extends HTMLElement{constructor(){super();x(this,"_renderSubscription",null);x(this,"_clickSubscription",null);x(this,"_attributeChanges$",new mn);x(this,"_parsedProgress$");x(this,"_parsedDisabled$");x(this,"_parsedIndeterminateProgress$");x(this,"_parsedIndeterminateDurationMs$");x(this,"_indeterminedLoadingAt$");x(this,"_loading$");x(this,"_activeIndeterminateProgress$");x(this,"_disabled$");this._parsedProgress$=this._attributeChanges$.pipe(N(([t])=>t==="progress"),$(([t,r])=>r),Q(this.getAttribute("progress")),$(t=>t===null?null:Number(t)),N(t=>t===null||Number.isInteger(t)&&Number.isFinite(t)&&t<=100&&t>=0)),this._parsedDisabled$=this._attributeChanges$.pipe(N(([t])=>t==="disabled"),$(([t,r])=>r),Q(this.getAttribute("disabled")),$(t=>t!==null&&t!=="false")),this._parsedIndeterminateProgress$=this._attributeChanges$.pipe(N(([t])=>t==="indeterminate-progress"),$(([t,r])=>r),Q(this.getAttribute("indeterminate-progress")),$(t=>t!==null&&t!=="false")),this._parsedIndeterminateDurationMs$=this._attributeChanges$.pipe(N(([t])=>t==="indeterminate-duration-ms"),$(([t,r])=>r),Q(this.getAttribute("indeterminate-duration-ms")),$(t=>t===null?null:Number(t)),N(t=>t===null||Number.isInteger(t)&&Number.isFinite(t)&&t>=0)),this._indeterminedLoadingAt$=this._parsedIndeterminateProgress$.pipe(Q(!1),Fi(),N(([t,r])=>r&&!t),$(()=>Date.now()),Q(0)),this._loading$=it(this._parsedProgress$,this._indeterminedLoadingAt$,this._parsedIndeterminateDurationMs$,this._parsedIndeterminateProgress$).pipe(Pt(([t,r,o,i])=>i?r&&o!==null?Ai(100).pipe($(()=>{const u=Date.now()-r,c=fo-o,a=Math.max(c,0),f=Math.ceil(u/a*100);return Math.min(100,f)}),Ri(s=>s<100,!0)):we(0):we(t||0))),this._activeIndeterminateProgress$=it(this._parsedIndeterminateProgress$,this._loading$).pipe($(([t,r])=>t&&r===100)),this._disabled$=it(this._parsedDisabled$,this._activeIndeterminateProgress$,this._loading$).pipe($(([t,r,o])=>t||r||o>0&&o<100)),this._parsedProgress$.subscribe(t=>console.log("parsedProgress",t)),this._parsedDisabled$.subscribe(t=>console.log("parsedDisabled",t)),this._parsedIndeterminateProgress$.subscribe(t=>console.log("parsedIndeterminateProgress",t)),this._parsedIndeterminateDurationMs$.subscribe(t=>console.log("parsedIndeterminateDurationMs",t)),this._indeterminedLoadingAt$.subscribe(t=>console.log("indeterminedLoadingAt",t)),this._loading$.subscribe(t=>console.log("loading",t)),this._activeIndeterminateProgress$.subscribe(t=>console.log("activeIndeterminateProgress",t)),this._disabled$.subscribe(t=>console.log("disabled",t))}static get observedAttributes(){return["progress","disabled","indeterminate-progress","indeterminate-duration-ms"]}async connectedCallback(){this.attachShadow({mode:"open"}),D(this).appendChild(bo.content.cloneNode(!0)),this._renderSubscription=it(this._disabled$,this._loading$,this._activeIndeterminateProgress$).subscribe(([r,o,i])=>{this.render(r,Number(o),i)})}attributeChangedCallback(t){this.shadowRoot&&this._attributeChanges$.next([t,this.getAttribute(t)])}render(t,r,o){const i=D(this),s=O(i,"#progress"),u=O(i,"button");u instanceof HTMLButtonElement&&(u.disabled=t),o?u.classList.add("indeterminate-loading"):u.classList.remove("indeterminate-loading"),s.style.width=`${r}%`}disconnectedCallback(){var t,r;(t=this._clickSubscription)==null||t.unsubscribe(),(r=this._renderSubscription)==null||r.unsubscribe()}}customElements.define(lo,po);const bo=lt(co`
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
`);let ho={data:""},mo=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ho,vo=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,_o=/\/\*[^]*?\*\/|  +/g,ke=/\n+/g,W=(e,n)=>{let t="",r="",o="";for(let i in e){let s=e[i];i[0]=="@"?i[1]=="i"?t=i+" "+s+";":r+=i[1]=="f"?W(s,i):i+"{"+W(s,i[1]=="k"?"":n)+"}":typeof s=="object"?r+=W(s,n?n.replace(/([^,])+/g,u=>i.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,u):u?u+" "+c:c)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=W.p?W.p(i,s):i+":"+s+";")}return t+(n&&o?n+"{"+o+"}":o)+r},M={},Dn=e=>{if(typeof e=="object"){let n="";for(let t in e)n+=t+Dn(e[t]);return n}return e},yo=(e,n,t,r,o)=>{let i=Dn(e),s=M[i]||(M[i]=(c=>{let a=0,f=11;for(;a<c.length;)f=101*f+c.charCodeAt(a++)>>>0;return"go"+f})(i));if(!M[s]){let c=i!==e?e:(a=>{let f,l,d=[{}];for(;f=vo.exec(a.replace(_o,""));)f[4]?d.shift():f[3]?(l=f[3].replace(ke," ").trim(),d.unshift(d[0][l]=d[0][l]||{})):d[0][f[1]]=f[2].replace(ke," ").trim();return d[0]})(e);M[s]=W(o?{["@keyframes "+s]:c}:c,t?"":"."+s)}let u=t&&M.g?M.g:null;return t&&(M.g=M[s]),((c,a,f,l)=>{l?a.data=a.data.replace(l,c):a.data.indexOf(c)===-1&&(a.data=f?c+a.data:a.data+c)})(M[s],n,r,u),s},go=(e,n,t)=>e.reduce((r,o,i)=>{let s=n[i];if(s&&s.call){let u=s(t),c=u&&u.props&&u.props.className||/^go/.test(u)&&u;s=c?"."+c:u&&typeof u=="object"?u.props?"":W(u,""):u===!1?"":u}return r+o+(s??"")},"");function Y(e){let n=this||{},t=e.call?e(n.p):e;return yo(t.unshift?t.raw?go(t,[].slice.call(arguments,1),n.p):t.reduce((r,o)=>Object.assign(r,o&&o.call?o(n.p):o),{}):t,mo(n.target),n.g,n.o,n.k)}Y.bind({g:1});Y.bind({k:1});var Ct,g,Nn,q,Oe,Fn,qt,ae,Yt,Gt,st={},Rn=[],wo=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ce=Array.isArray;function F(e,n){for(var t in n)e[t]=n[t];return e}function Un(e){var n=e.parentNode;n&&n.removeChild(e)}function zn(e,n,t){var r,o,i,s={};for(i in n)i=="key"?r=n[i]:i=="ref"?o=n[i]:s[i]=n[i];if(arguments.length>2&&(s.children=arguments.length>3?Ct.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)s[i]===void 0&&(s[i]=e.defaultProps[i]);return wt(e,s,r,o,null)}function wt(e,n,t,r,o){var i={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Nn,__i:-1,__u:0};return o==null&&g.vnode!=null&&g.vnode(i),i}function At(e){return e.children}function xt(e,n){this.props=e,this.context=n}function G(e,n){if(n==null)return e.__?G(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?G(e):null}function Vn(e){var n,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return Vn(e)}}function Pe(e){(!e.__d&&(e.__d=!0)&&q.push(e)&&!Tt.__r++||Oe!==g.debounceRendering)&&((Oe=g.debounceRendering)||Fn)(Tt)}function Tt(){var e,n,t,r,o,i,s,u;for(q.sort(qt);e=q.shift();)e.__d&&(n=q.length,r=void 0,i=(o=(t=e).__v).__e,s=[],u=[],t.__P&&((r=F({},o)).__v=o.__v+1,g.vnode&&g.vnode(r),le(t.__P,r,o,t.__n,t.__P.namespaceURI,32&o.__u?[i]:null,s,i??G(o),!!(32&o.__u),u),r.__v=o.__v,r.__.__k[r.__i]=r,qn(s,r,u),r.__e!=i&&Vn(r)),q.length>n&&q.sort(qt));Tt.__r=0}function Bn(e,n,t,r,o,i,s,u,c,a,f){var l,d,p,h,b,m=r&&r.__k||Rn,v=n.length;for(t.__d=c,xo(t,n,m),c=t.__d,l=0;l<v;l++)(p=t.__k[l])!=null&&typeof p!="boolean"&&typeof p!="function"&&(d=p.__i===-1?st:m[p.__i]||st,p.__i=l,le(e,p,d,o,i,s,u,c,a,f),h=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&fe(d.ref,null,p),f.push(p.ref,p.__c||h,p)),b==null&&h!=null&&(b=h),65536&p.__u||d.__k===p.__k?(c&&!c.isConnected&&(c=G(d)),c=Wn(p,c,e)):typeof p.type=="function"&&p.__d!==void 0?c=p.__d:h&&(c=h.nextSibling),p.__d=void 0,p.__u&=-196609);t.__d=c,t.__e=b}function xo(e,n,t){var r,o,i,s,u,c=n.length,a=t.length,f=a,l=0;for(e.__k=[],r=0;r<c;r++)s=r+l,(o=e.__k[r]=(o=n[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?wt(null,o,null,null,null):ce(o)?wt(At,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?wt(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,u=So(o,t,s,f),o.__i=u,i=null,u!==-1&&(f--,(i=t[u])&&(i.__u|=131072)),i==null||i.__v===null?(u==-1&&l--,typeof o.type!="function"&&(o.__u|=65536)):u!==s&&(u===s+1?l++:u>s?f>c-s?l+=u-s:l--:u<s?u==s-1&&(l=u-s):l=0,u!==r+l&&(o.__u|=65536))):(i=t[s])&&i.key==null&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=G(i)),Jt(i,i,!1),t[s]=null,f--);if(f)for(r=0;r<a;r++)(i=t[r])!=null&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=G(i)),Jt(i,i))}function Wn(e,n,t){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=Wn(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do n=n&&n.nextSibling;while(n!=null&&n.nodeType===8);return n}function So(e,n,t,r){var o=e.key,i=e.type,s=t-1,u=t+1,c=n[t];if(c===null||c&&o==c.key&&i===c.type&&!(131072&c.__u))return t;if(r>(c!=null&&!(131072&c.__u)?1:0))for(;s>=0||u<n.length;){if(s>=0){if((c=n[s])&&!(131072&c.__u)&&o==c.key&&i===c.type)return s;s--}if(u<n.length){if((c=n[u])&&!(131072&c.__u)&&o==c.key&&i===c.type)return u;u++}}return-1}function Ce(e,n,t){n[0]==="-"?e.setProperty(n,t??""):e[n]=t==null?"":typeof t!="number"||wo.test(n)?t:t+"px"}function _t(e,n,t,r,o){var i;t:if(n==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||Ce(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||Ce(e.style,n,t[n])}else if(n[0]==="o"&&n[1]==="n")i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||n==="onFocusOut"||n==="onFocusIn"?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=ae,e.addEventListener(n,i?Gt:Yt,i)):e.removeEventListener(n,i?Gt:Yt,i);else{if(o=="http://www.w3.org/2000/svg")n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!="width"&&n!="height"&&n!="href"&&n!="list"&&n!="form"&&n!="tabIndex"&&n!="download"&&n!="rowSpan"&&n!="colSpan"&&n!="role"&&n in e)try{e[n]=t??"";break t}catch{}typeof t=="function"||(t==null||t===!1&&n[4]!=="-"?e.removeAttribute(n):e.setAttribute(n,t))}}function Ae(e){return function(n){if(this.l){var t=this.l[n.type+e];if(n.t==null)n.t=ae++;else if(n.t<t.u)return;return t(g.event?g.event(n):n)}}}function le(e,n,t,r,o,i,s,u,c,a){var f,l,d,p,h,b,m,v,y,j,K,V,T,L,nt,k=n.type;if(n.constructor!==void 0)return null;128&t.__u&&(c=!!(32&t.__u),i=[u=n.__e=t.__e]),(f=g.__b)&&f(n);t:if(typeof k=="function")try{if(v=n.props,y=(f=k.contextType)&&r[f.__c],j=f?y?y.props.value:f.__:r,t.__c?m=(l=n.__c=t.__c).__=l.__E:("prototype"in k&&k.prototype.render?n.__c=l=new k(v,j):(n.__c=l=new xt(v,j),l.constructor=k,l.render=Io),y&&y.sub(l),l.props=v,l.state||(l.state={}),l.context=j,l.__n=r,d=l.__d=!0,l.__h=[],l._sb=[]),l.__s==null&&(l.__s=l.state),k.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=F({},l.__s)),F(l.__s,k.getDerivedStateFromProps(v,l.__s))),p=l.props,h=l.state,l.__v=n,d)k.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(k.getDerivedStateFromProps==null&&v!==p&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,j),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,j)===!1||n.__v===t.__v)){for(n.__v!==t.__v&&(l.props=v,l.state=l.__s,l.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach(function(mt){mt&&(mt.__=n)}),K=0;K<l._sb.length;K++)l.__h.push(l._sb[K]);l._sb=[],l.__h.length&&s.push(l);break t}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,j),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(p,h,b)})}if(l.context=j,l.props=v,l.__P=e,l.__e=!1,V=g.__r,T=0,"prototype"in k&&k.prototype.render){for(l.state=l.__s,l.__d=!1,V&&V(n),f=l.render(l.props,l.state,l.context),L=0;L<l._sb.length;L++)l.__h.push(l._sb[L]);l._sb=[]}else do l.__d=!1,V&&V(n),f=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++T<25);l.state=l.__s,l.getChildContext!=null&&(r=F(F({},r),l.getChildContext())),d||l.getSnapshotBeforeUpdate==null||(b=l.getSnapshotBeforeUpdate(p,h)),Bn(e,ce(nt=f!=null&&f.type===At&&f.key==null?f.props.children:f)?nt:[nt],n,t,r,o,i,s,u,c,a),l.base=n.__e,n.__u&=-161,l.__h.length&&s.push(l),m&&(l.__E=l.__=null)}catch(mt){n.__v=null,c||i!=null?(n.__e=u,n.__u|=c?160:32,i[i.indexOf(u)]=null):(n.__e=t.__e,n.__k=t.__k),g.__e(mt,n,t)}else i==null&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=$o(t.__e,n,t,r,o,i,s,c,a);(f=g.diffed)&&f(n)}function qn(e,n,t){n.__d=void 0;for(var r=0;r<t.length;r++)fe(t[r],t[++r],t[++r]);g.__c&&g.__c(n,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){g.__e(i,o.__v)}})}function $o(e,n,t,r,o,i,s,u,c){var a,f,l,d,p,h,b,m=t.props,v=n.props,y=n.type;if(y==="svg"?o="http://www.w3.org/2000/svg":y==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(a=0;a<i.length;a++)if((p=i[a])&&"setAttribute"in p==!!y&&(y?p.localName===y:p.nodeType===3)){e=p,i[a]=null;break}}if(e==null){if(y===null)return document.createTextNode(v);e=document.createElementNS(o,y,v.is&&v),i=null,u=!1}if(y===null)m===v||u&&e.data===v||(e.data=v);else{if(i=i&&Ct.call(e.childNodes),m=t.props||st,!u&&i!=null)for(m={},a=0;a<e.attributes.length;a++)m[(p=e.attributes[a]).name]=p.value;for(a in m)if(p=m[a],a!="children"){if(a=="dangerouslySetInnerHTML")l=p;else if(a!=="key"&&!(a in v)){if(a=="value"&&"defaultValue"in v||a=="checked"&&"defaultChecked"in v)continue;_t(e,a,null,p,o)}}for(a in v)p=v[a],a=="children"?d=p:a=="dangerouslySetInnerHTML"?f=p:a=="value"?h=p:a=="checked"?b=p:a==="key"||u&&typeof p!="function"||m[a]===p||_t(e,a,p,m[a],o);if(f)u||l&&(f.__html===l.__html||f.__html===e.innerHTML)||(e.innerHTML=f.__html),n.__k=[];else if(l&&(e.innerHTML=""),Bn(e,ce(d)?d:[d],n,t,r,y==="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,s,i?i[0]:t.__k&&G(t,0),u,c),i!=null)for(a=i.length;a--;)i[a]!=null&&Un(i[a]);u||(a="value",h!==void 0&&(h!==e[a]||y==="progress"&&!h||y==="option"&&h!==m[a])&&_t(e,a,h,m[a],o),a="checked",b!==void 0&&b!==e[a]&&_t(e,a,b,m[a],o))}return e}function fe(e,n,t){try{typeof e=="function"?e(n):e.current=n}catch(r){g.__e(r,t)}}function Jt(e,n,t){var r,o;if(g.unmount&&g.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||fe(r,null,n)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){g.__e(i,n)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&Jt(r[o],n,t||typeof e.type!="function");t||e.__e==null||Un(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function Io(e,n,t){return this.constructor(e,t)}function Eo(e,n,t){var r,o,i,s;g.__&&g.__(e,n),o=(r=typeof t=="function")?null:n.__k,i=[],s=[],le(n,e=(!r&&t||n).__k=zn(At,null,[e]),o||st,st,n.namespaceURI,!r&&t?[t]:o?null:n.firstChild?Ct.call(n.childNodes):null,i,!r&&t?t:o?o.__e:n.firstChild,r,s),qn(i,e,s)}Ct=Rn.slice,g={__e:function(e,n,t,r){for(var o,i,s;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),s=o.__d),s)return o.__E=o}catch(u){e=u}throw e}},Nn=0,xt.prototype.setState=function(e,n){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=F({},this.state),typeof e=="function"&&(e=e(F({},t),this.props)),e&&F(t,e),e!=null&&this.__v&&(n&&this._sb.push(n),Pe(this))},xt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Pe(this))},xt.prototype.render=At,q=[],Fn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,qt=function(e,n){return e.__v.__b-n.__v.__b},Tt.__r=0,ae=0,Yt=Ae(!1),Gt=Ae(!0);var Yn=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var s=n[i++],u=n[i]?(n[0]|=s?1:2,t[n[i++]]):n[++i];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[n[++i]]=u:s===6?r[1][n[++i]]+=u+"":s?(o=e.apply(u,Yn(e,u,t,["",null])),r.push(o),u[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(u)}return r},je=new Map;function To(e){var n=je.get(this);return n||(n=new Map,je.set(this,n)),(n=Yn(this,n.get(e)||(n.set(e,n=function(t){for(var r,o,i=1,s="",u="",c=[0],a=function(d){i===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,d,s):i===3&&(d||s)?(c.push(3,d,s),i=2):i===2&&s==="..."&&d?c.push(4,d,0):i===2&&s&&!d?c.push(5,0,!0,s):i>=5&&((s||!d&&i===5)&&(c.push(i,0,s,o),i=6),d&&(c.push(i,d,0,o),i=6)),s=""},f=0;f<t.length;f++){f&&(i===1&&a(),a(f));for(var l=0;l<t[f].length;l++)r=t[f][l],i===1?r==="<"?(a(),c=[c],i=3):s+=r:i===4?s==="--"&&r===">"?(i=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(a(),i=1):i&&(r==="="?(i=5,o=s,s=""):r==="/"&&(i<5||t[f][l+1]===">")?(a(),i===3&&(c=c[0]),i=c,(c=c[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(a(),i=2):s+=r),i===3&&s==="!--"&&(i=4,c=c[0])}return a(),c}(e)),n),arguments,[])).length>1?n:n[0]}var A=To.bind(zn),ut,w,Ft,Le,at=0,Gn=[],St=[],S=g,Me=S.__b,He=S.__r,De=S.diffed,Ne=S.__c,Fe=S.unmount,Re=S.__;function pe(e,n){S.__h&&S.__h(w,e,at||n),at=0;var t=w.__H||(w.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:St}),t.__[e]}function I(e){return at=1,ko(Zn,e)}function ko(e,n,t){var r=pe(ut++,2);if(r.t=e,!r.__c&&(r.__=[Zn(void 0,n),function(u){var c=r.__N?r.__N[0]:r.__[0],a=r.t(c,u);c!==a&&(r.__N=[a,r.__[1]],r.__c.setState({}))}],r.__c=w,!w.u)){var o=function(u,c,a){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(d){return!!d.__c});if(f.every(function(d){return!d.__N}))return!i||i.call(this,u,c,a);var l=!1;return f.forEach(function(d){if(d.__N){var p=d.__[0];d.__=d.__N,d.__N=void 0,p!==d.__[0]&&(l=!0)}}),!(!l&&r.__c.props===u)&&(!i||i.call(this,u,c,a))};w.u=!0;var i=w.shouldComponentUpdate,s=w.componentWillUpdate;w.componentWillUpdate=function(u,c,a){if(this.__e){var f=i;i=void 0,o(u,c,a),i=f}s&&s.call(this,u,c,a)},w.shouldComponentUpdate=o}return r.__N||r.__}function Oo(e,n){var t=pe(ut++,3);!S.__s&&Qn(t.__H,n)&&(t.__=e,t.i=n,w.__H.__h.push(t))}function Po(e){return at=5,Jn(function(){return{current:e}},[])}function Jn(e,n){var t=pe(ut++,7);return Qn(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function Kn(e,n){return at=8,Jn(function(){return e},n)}function Co(){for(var e;e=Gn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach($t),e.__H.__h.forEach(Kt),e.__H.__h=[]}catch(n){e.__H.__h=[],S.__e(n,e.__v)}}S.__b=function(e){w=null,Me&&Me(e)},S.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),Re&&Re(e,n)},S.__r=function(e){He&&He(e),ut=0;var n=(w=e.__c).__H;n&&(Ft===w?(n.__h=[],w.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=St,t.__N=t.i=void 0})):(n.__h.forEach($t),n.__h.forEach(Kt),n.__h=[],ut=0)),Ft=w},S.diffed=function(e){De&&De(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(Gn.push(n)!==1&&Le===S.requestAnimationFrame||((Le=S.requestAnimationFrame)||Ao)(Co)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==St&&(t.__=t.__V),t.i=void 0,t.__V=St})),Ft=w=null},S.__c=function(e,n){n.some(function(t){try{t.__h.forEach($t),t.__h=t.__h.filter(function(r){return!r.__||Kt(r)})}catch(r){n.some(function(o){o.__h&&(o.__h=[])}),n=[],S.__e(r,t.__v)}}),Ne&&Ne(e,n)},S.unmount=function(e){Fe&&Fe(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{$t(r)}catch(o){n=o}}),t.__H=void 0,n&&S.__e(n,t.__v))};var Ue=typeof requestAnimationFrame=="function";function Ao(e){var n,t=function(){clearTimeout(r),Ue&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);Ue&&(n=requestAnimationFrame(t))}function $t(e){var n=w,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),w=n}function Kt(e){var n=w;e.__c=e.__(),w=n}function Qn(e,n){return!e||e.length!==n.length||n.some(function(t,r){return t!==e[r]})}function Zn(e,n){return typeof n=="function"?n(e):n}function kt(e,n){var t=I(n),r=t[0],o=t[1],i=Po(e);return Oo(function(){var s=i.current.subscribe(o);return function(){return s.unsubscribe()}}),r}var Qt=function(e,n){return Qt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])},Qt(e,n)};function jt(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");Qt(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}function Zt(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Xt(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),o,i=[],s;try{for(;(n===void 0||n-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return i}function te(e,n,t){if(t||arguments.length===2)for(var r=0,o=n.length,i;r<o;r++)(i||!(r in n))&&(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return e.concat(i||Array.prototype.slice.call(n))}function H(e){return typeof e=="function"}function Xn(e){var n=function(r){Error.call(r),r.stack=new Error().stack},t=e(n);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Rt=Xn(function(e){return function(t){e(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function ee(e,n){if(e){var t=e.indexOf(n);0<=t&&e.splice(t,1)}}var Lt=function(){function e(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var n,t,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=Zt(s),c=u.next();!c.done;c=u.next()){var a=c.value;a.remove(this)}}catch(b){n={error:b}}finally{try{c&&!c.done&&(t=u.return)&&t.call(u)}finally{if(n)throw n.error}}else s.remove(this);var f=this.initialTeardown;if(H(f))try{f()}catch(b){i=b instanceof Rt?b.errors:[b]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var d=Zt(l),p=d.next();!p.done;p=d.next()){var h=p.value;try{ze(h)}catch(b){i=i??[],b instanceof Rt?i=te(te([],Xt(i)),Xt(b.errors)):i.push(b)}}}catch(b){r={error:b}}finally{try{p&&!p.done&&(o=d.return)&&o.call(d)}finally{if(r)throw r.error}}}if(i)throw new Rt(i)}},e.prototype.add=function(n){var t;if(n&&n!==this)if(this.closed)ze(n);else{if(n instanceof e){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(n)}},e.prototype._hasParent=function(n){var t=this._parentage;return t===n||Array.isArray(t)&&t.includes(n)},e.prototype._addParent=function(n){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n},e.prototype._removeParent=function(n){var t=this._parentage;t===n?this._parentage=null:Array.isArray(t)&&ee(t,n)},e.prototype.remove=function(n){var t=this._finalizers;t&&ee(t,n),n instanceof e&&n._removeParent(this)},e.EMPTY=function(){var n=new e;return n.closed=!0,n}(),e}(),tr=Lt.EMPTY;function er(e){return e instanceof Lt||e&&"closed"in e&&H(e.remove)&&H(e.add)&&H(e.unsubscribe)}function ze(e){H(e)?e():e.unsubscribe()}var nr={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},jo={setTimeout:function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];return setTimeout.apply(void 0,te([e,n],Xt(t)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function Lo(e){jo.setTimeout(function(){throw e})}function Ve(){}function It(e){e()}var rr=function(e){jt(n,e);function n(t){var r=e.call(this)||this;return r.isStopped=!1,t?(r.destination=t,er(t)&&t.add(r)):r.destination=No,r}return n.create=function(t,r,o){return new ne(t,r,o)},n.prototype.next=function(t){this.isStopped||this._next(t)},n.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(Lt),Mo=Function.prototype.bind;function Ut(e,n){return Mo.call(e,n)}var Ho=function(){function e(n){this.partialObserver=n}return e.prototype.next=function(n){var t=this.partialObserver;if(t.next)try{t.next(n)}catch(r){yt(r)}},e.prototype.error=function(n){var t=this.partialObserver;if(t.error)try{t.error(n)}catch(r){yt(r)}else yt(n)},e.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(t){yt(t)}},e}(),ne=function(e){jt(n,e);function n(t,r,o){var i=e.call(this)||this,s;if(H(t)||!t)s={next:t??void 0,error:r??void 0,complete:o??void 0};else{var u;i&&nr.useDeprecatedNextContext?(u=Object.create(t),u.unsubscribe=function(){return i.unsubscribe()},s={next:t.next&&Ut(t.next,u),error:t.error&&Ut(t.error,u),complete:t.complete&&Ut(t.complete,u)}):s=t}return i.destination=new Ho(s),i}return n}(rr);function yt(e){Lo(e)}function Do(e){throw e}var No={closed:!0,next:Ve,error:Do,complete:Ve},Fo=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Ro(e){return e}function Uo(e){return e.length===0?Ro:e.length===1?e[0]:function(t){return e.reduce(function(r,o){return o(r)},t)}}var Be=function(){function e(n){n&&(this._subscribe=n)}return e.prototype.lift=function(n){var t=new e;return t.source=this,t.operator=n,t},e.prototype.subscribe=function(n,t,r){var o=this,i=Vo(n)?n:new ne(n,t,r);return It(function(){var s=o,u=s.operator,c=s.source;i.add(u?u.call(i,c):c?o._subscribe(i):o._trySubscribe(i))}),i},e.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(t){n.error(t)}},e.prototype.forEach=function(n,t){var r=this;return t=We(t),new t(function(o,i){var s=new ne({next:function(u){try{n(u)}catch(c){i(c),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},e.prototype._subscribe=function(n){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(n)},e.prototype[Fo]=function(){return this},e.prototype.pipe=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return Uo(n)(this)},e.prototype.toPromise=function(n){var t=this;return n=We(n),new n(function(r,o){var i;t.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},e.create=function(n){return new e(n)},e}();function We(e){var n;return(n=e??nr.Promise)!==null&&n!==void 0?n:Promise}function zo(e){return e&&H(e.next)&&H(e.error)&&H(e.complete)}function Vo(e){return e&&e instanceof rr||zo(e)&&er(e)}var Bo=Xn(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),de=function(e){jt(n,e);function n(){var t=e.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return n.prototype.lift=function(t){var r=new qe(this,this);return r.operator=t,r},n.prototype._throwIfClosed=function(){if(this.closed)throw new Bo},n.prototype.next=function(t){var r=this;It(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=Zt(r.currentObservers),u=s.next();!u.done;u=s.next()){var c=u.value;c.next(t)}}catch(a){o={error:a}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},n.prototype.error=function(t){var r=this;It(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=t;for(var o=r.observers;o.length;)o.shift().error(t)}})},n.prototype.complete=function(){var t=this;It(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var r=t.observers;r.length;)r.shift().complete()}})},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},n.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},n.prototype._innerSubscribe=function(t){var r=this,o=this,i=o.hasError,s=o.isStopped,u=o.observers;return i||s?tr:(this.currentObservers=null,u.push(t),new Lt(function(){r.currentObservers=null,ee(u,t)}))},n.prototype._checkFinalizedStatuses=function(t){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?t.error(i):s&&t.complete()},n.prototype.asObservable=function(){var t=new Be;return t.source=this,t},n.create=function(t,r){return new qe(t,r)},n}(Be),qe=function(e){jt(n,e);function n(t,r){var o=e.call(this)||this;return o.destination=t,o.source=r,o}return n.prototype.next=function(t){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,t)},n.prototype.error=function(t){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,t)},n.prototype.complete=function(){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||r===void 0||r.call(t)},n.prototype._subscribe=function(t){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(t))!==null&&o!==void 0?o:tr},n}(de),ir=4,or=new de,sr=or.asObservable();function ur(){return ir}function Z(e){ir=e,or.next(e)}var ar="initial",cr=new de,lr=cr.asObservable();function fr(){return ar}function B(e){ar=e,cr.next(e)}var pr=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},Ye=Y(Ge||(Ge=pr([`
	height: 95%;
	display: grid;
	place-content: space-evenly;
`],[`
	height: 95%;
	display: grid;
	place-content: space-evenly;
`])));function ht(e){var n=e.title,t=e.children;return A(Je||(Je=pr([`
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
	`])),n,Ye,t[0],t[1],Ye,t[2])}var Ge,Je,Wo=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};function qo(){var e=I("I'm an input !"),n=e[0],t=e[1],r=`&lt;crumbs-input
	value="`.concat(n,`"&gt;
&lt;/crumbs-input&gt;`);return A(Ke||(Ke=Wo([`
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
	`])),ht,n,function(o){return t(o.originalTarget.value)},n,function(o){return t(o.originalTarget.value)},{__html:r})}var Ke,Yo=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};function Go(){var e=I("I'm a <b>paragraph</b> !"),n=e[0],t=e[1];return A(Qe||(Qe=Yo([`
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
	`])),ht,{__html:n},n,function(r){return t(r.originalTarget.value)},{__html:"&lt;crumbs-p&gt; ".concat(n," &lt;/crumbs-p&gt;")})}var Qe,Jo=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},Ko=function(e,n,t,r){function o(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function u(f){try{a(r.next(f))}catch(l){s(l)}}function c(f){try{a(r.throw(f))}catch(l){s(l)}}function a(f){f.done?i(f.value):o(f.value).then(u,c)}a((r=r.apply(e,n||[])).next())})},Qo=function(e,n){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(a){return function(f){return c([a,f])}}function c(a){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(t=0)),t;)try{if(r=1,o&&(i=a[0]&2?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[a[0]&2,i.value]),a[0]){case 0:case 1:i=a;break;case 4:return t.label++,{value:a[1],done:!1};case 5:t.label++,o=a[1],a=[0];continue;case 7:a=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){t.label=a[1];break}if(a[0]===6&&t.label<i[1]){t.label=i[1],i=a;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(a);break}i[2]&&t.ops.pop(),t.trys.pop();continue}a=n.call(e,t)}catch(f){a=[6,f],o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};function Zo(){var e=this,n=I("I'm a panel !"),t=n[0],r=n[1],o=I(""),i=o[0],s=o[1],u=I("100"),c=u[0],a=u[1],f=I(!1),l=f[0],d=f[1],p=`&lt;crumbs-panel
	panel-title="`.concat(i,`"
	panel-loading="`).concat(c,`"&gt;
	`).concat(t,`
&lt;/crumbs-panel&gt;`),h=Kn(function(){return Ko(e,void 0,void 0,function(){var m;return Qo(this,function(v){switch(v.label){case 0:if(l)return[2];d(!0),a("0"),m=0,v.label=1;case 1:return m<=100?[4,new Promise(function(y){return setTimeout(y,10)})]:[3,4];case 2:v.sent(),a(Math.floor(m).toString()),v.label=3;case 3:return m+=.1+(100-m)/100,[3,1];case 4:return a("100"),d(!1),[2]}})})},[l]),b=function(){l||h()};return A(Ze||(Ze=Jo([`
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
	`])),ht,c,i,t,i,function(m){return s(m.originalTarget.value)},t,function(m){return r(m.originalTarget.value)},c,function(m){return a(String(m.target.value))},b,{__html:p})}var Ze,Xo=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};function ts(){var e=I("Tab content"),n=e[0],t=e[1],r=I("Tab title"),o=r[0],i=r[1],s=I("Tab content 2"),u=s[0],c=s[1],a=I("Tab title 2"),f=a[0],l=a[1],d=`&lt;crumbs-tabs&gt;
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
&lt;/crumbs-panel&gt;`);return A(Xe||(Xe=Xo([`
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
	`])),ht,o,n,f,u,o,function(p){return i(p.originalTarget.value)},n,function(p){return t(p.originalTarget.value)},f,function(p){return l(p.originalTarget.value)},u,function(p){return c(p.originalTarget.value)},{__html:d})}var Xe,es=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};function ns(){return A(tn||(tn=es([`
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
	`])))}var tn,zt=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};function rs(){var e=kt(sr,ur),n=kt(lr,fr),t=Y(en||(en=zt([`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`],[`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`]))),r=Y(nn||(nn=zt([`
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
	`])));return A(rn||(rn=zt([`
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
	`])),t,r,e===1,function(){return Z(1)},e===2,function(){return Z(2)},e===3,function(){return Z(3)},e===4,function(){return Z(4)},e===5,function(){return Z(5)},e===6,function(){return Z(6)},r,n==="initial",function(){return B("initial")},n==="monospace",function(){return B("monospace")},n==="serif",function(){return B("serif")},n==="sans-serif",function(){return B("sans-serif")},n==="cursive",function(){return B("cursive")},n==="fantasy",function(){return B("fantasy")},n==="system-ui",function(){return B("system-ui")})}var en,nn,rn,is=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};function os(){var e="&lt;crumbs-p&gt; Hello world ! &lt;/crumbs-p&gt;";return A(on||(on=is([`
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
	`])),{__html:e})}var on,ss=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},us=function(e,n,t,r){function o(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function u(f){try{a(r.next(f))}catch(l){s(l)}}function c(f){try{a(r.throw(f))}catch(l){s(l)}}function a(f){f.done?i(f.value):o(f.value).then(u,c)}a((r=r.apply(e,n||[])).next())})},as=function(e,n){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(a){return function(f){return c([a,f])}}function c(a){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(t=0)),t;)try{if(r=1,o&&(i=a[0]&2?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[a[0]&2,i.value]),a[0]){case 0:case 1:i=a;break;case 4:return t.label++,{value:a[1],done:!1};case 5:t.label++,o=a[1],a=[0];continue;case 7:a=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){t.label=a[1];break}if(a[0]===6&&t.label<i[1]){t.label=i[1],i=a;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(a);break}i[2]&&t.ops.pop(),t.trys.pop();continue}a=n.call(e,t)}catch(f){a=[6,f],o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};function cs(){var e=this,n=I("Click me !"),t=n[0],r=n[1],o=I("100"),i=o[0],s=o[1],u=I(!1),c=u[0],a=u[1],f=I(!1),l=f[0],d=f[1],p=I(!1),h=p[0],b=p[1],m=I(2e3),v=m[0],y=m[1],j=Kn(function(){return us(e,void 0,void 0,function(){var T;return as(this,function(L){switch(L.label){case 0:if(c)return[2];a(!0),s("0"),T=0,L.label=1;case 1:return T<=100?[4,new Promise(function(nt){return setTimeout(nt,10)})]:[3,4];case 2:L.sent(),s(Math.floor(T).toString()),L.label=3;case 3:return T+=.1+(100-T)/100,[3,1];case 4:return s("100"),a(!1),[2]}})})},[c]),K=function(){c||j()},V='&lt;crumbs-button progress="'.concat(i,'" &gt; ').concat(t," &lt;/crumbs-button&gt;");return A(sn||(sn=ss([`
		<`,` title="Button">
			<crumbs-button
				progress=`,`
				loading=`,`
				disabled=`,`
				indeterminate-progress=`,`
				indeterminate-duration-ms=`,`
				data-testid=`,`>
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

				<crumbs-button onClick=`,`>
					Simulate progress
				</crumbs-button>

				<br/>

				<input type="checkbox" onInput=`,` />
				<label> Disabled </label>

				<br/>

				<input type="checkbox" onInput=`,` />
				<label> Indeterminate loading </label>

				<br/>

				`,`

				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`/>
				<label> Indeterminate loading duration (ms) </label>


			</div>

			<code> <pre dangerouslySetInnerHTML=`,`> </pre></code>
		<//>
	`],[`
		<`,` title="Button">
			<crumbs-button
				progress=`,`
				loading=`,`
				disabled=`,`
				indeterminate-progress=`,`
				indeterminate-duration-ms=`,`
				data-testid=`,`>
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

				<crumbs-button onClick=`,`>
					Simulate progress
				</crumbs-button>

				<br/>

				<input type="checkbox" onInput=`,` />
				<label> Disabled </label>

				<br/>

				<input type="checkbox" onInput=`,` />
				<label> Indeterminate loading </label>

				<br/>

				`,`

				<crumbs-input
					type="text"
					value=`,`
					onInput=`,`/>
				<label> Indeterminate loading duration (ms) </label>


			</div>

			<code> <pre dangerouslySetInnerHTML=`,`> </pre></code>
		<//>
	`])),ht,i,i,l,h,v,i,t,t,function(T){return r(T.originalTarget.value)},i,function(T){return s(String(T.target.value))},K,function(){return d(!l)},function(){return b(!h)},v,v,function(T){return y(Number(T.originalTarget.value))},{__html:V})}var sn;function ls(){const e=kt(sr,ur),n=kt(lr,fr),t=Y`
		background-image: url('bg${e}.jpg');
		background-size: cover;
		min-height: 100vh;
		position: fixed;
		min-width: 100vw;
		background-position: center;
	`,r=Y`
		display: grid;
		overflow-y: scroll;
		height: 100vh;
		grid-template-columns: repeat(auto-fit, minmax(max(28rem + 6vw), 1fr));
		font-family: ${n};
	`;return A`
		<div class=${t}></div>

		<div class=${r}>
			<${ns}><//>
			<${os}><//>
			<${rs}><//>
			<${Go}><//>
			<${Zo}><//>
			<${qo}><//>
			<${ts}><//>
			<${cs}><//>
		</div>
	`}Eo(A`<${ls}><//>`,document.body);
