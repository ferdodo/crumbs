(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function xt(e){for(var t,n,r=arguments,i=1,o="",s="",u=[0],c=function(l){i===1&&(l||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(l?r[l]:o):i===3&&(l||o)?(u[1]=l?r[l]:o,i=2):i===2&&o==="..."&&l?u[2]=Object.assign(u[2]||{},r[l]):i===2&&o&&!l?(u[2]=u[2]||{})[o]=!0:i>=5&&(i===5?((u[2]=u[2]||{})[n]=l?o?o+r[l]:r[l]:o,i=6):(l||o)&&(u[2][n]+=l?o+r[l]:o)),o=""},a=0;a<e.length;a++){a&&(i===1&&c(),c(a));for(var p=0;p<e[a].length;p++)t=e[a][p],i===1?t==="<"?(c(),u=[u,"",null],i=3):o+=t:i===4?o==="--"&&t===">"?(i=1,o=""):o=t+o[0]:s?t===s?s="":o+=t:t==='"'||t==="'"?s=t:t===">"?(c(),i=1):i&&(t==="="?(i=5,n=o,o=""):t==="/"&&(i<5||e[a][p+1]===">")?(c(),i===3&&(u=u[0]),i=u,(u=u[0]).push(this.apply(null,i.slice(1))),i=0):t===" "||t==="	"||t===`
`||t==="\r"?(c(),i=2):o+=t),i===3&&o==="!--"&&(i=4,u=u[0])}return c(),u.length>2?u.slice(1):u[1]}function lr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function pr(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e;var t=e.default;if(typeof t=="function"){var n=function r(){var i=!1;try{i=this instanceof r}catch{}return i?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var jt={exports:{}};/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */var At,be;function fr(){return be||(be=1,At=(function(t){var n=String.prototype.split,r=/()??/.exec("")[1]===t,i;return i=function(o,l,u){if(Object.prototype.toString.call(l)!=="[object RegExp]")return n.call(o,l,u);var c=[],a=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.extended?"x":"")+(l.sticky?"y":""),p=0,l=new RegExp(l.source,a+"g"),b,f,_,d;for(o+="",r||(b=new RegExp("^"+l.source+"$(?!\\s)",a)),u=u===t?-1>>>0:u>>>0;(f=l.exec(o))&&(_=f.index+f[0].length,!(_>p&&(c.push(o.slice(p,f.index)),!r&&f.length>1&&f[0].replace(b,function(){for(var h=1;h<arguments.length-2;h++)arguments[h]===t&&(f[h]=t)}),f.length>1&&f.index<o.length&&Array.prototype.push.apply(c,f.slice(1)),d=f[0].length,p=_,c.length>=u)));)l.lastIndex===f.index&&l.lastIndex++;return p===o.length?(d||!l.test(""))&&c.push(""):c.push(o.slice(p)),c.length>u?c.slice(0,u):c},i})()),At}var Lt,he;function dr(){if(he)return Lt;he=1;var e=[].indexOf;return Lt=function(t,n){if(e)return t.indexOf(n);for(var r=0;r<t.length;++r)if(t[r]===n)return r;return-1},Lt}var Mt,me;function br(){if(me)return Mt;me=1;var e=dr();Mt=t;function t(i){var o=i.classList;if(o)return o;var s={add:u,remove:c,contains:a,toggle:p,toString:l,length:0,item:b};return s;function u(d){var h=f();e(h,d)>-1||(h.push(d),_(h))}function c(d){var h=f(),v=e(h,d);v!==-1&&(h.splice(v,1),_(h))}function a(d){return e(f(),d)>-1}function p(d){return a(d)?(c(d),!1):(u(d),!0)}function l(){return i.className}function b(d){var h=f();return h[d]||null}function f(){var d=i.className;return n(d.split(" "),r)}function _(d){var h=d.length;i.className=d.join(" "),s.length=h;for(var v=0;v<d.length;v++)s[v]=d[v];delete d[h]}}function n(i,o){for(var s=[],u=0;u<i.length;u++)o(i[u])&&s.push(i[u]);return s}function r(i){return!!i}return Mt}const hr={},mr=Object.freeze(Object.defineProperty({__proto__:null,default:hr},Symbol.toStringTag,{value:"Module"})),vr=pr(mr);var ve;function _r(){if(ve)return jt.exports;ve=1;var e=fr(),t=br(),n=typeof window>"u"?vr:window,r=n.document,i=n.Text;function o(){var p=[];function l(){var b=[].slice.call(arguments),f=null;function _(d){var h;function v(w){var x=e(w,/([\.#]?[^\s#.]+)/);/^\.|#/.test(x[1])&&(f=r.createElement("div")),c(x,function(k){var H=k.substring(1,k.length);k&&(f?k[0]==="."?t(f).add(H):k[0]==="#"&&f.setAttribute("id",H):f=r.createElement(k))})}if(d!=null){if(typeof d=="string")f?f.appendChild(h=r.createTextNode(d)):v(d);else if(typeof d=="number"||typeof d=="boolean"||d instanceof Date||d instanceof RegExp)f.appendChild(h=r.createTextNode(d.toString()));else if(a(d))c(d,_);else if(u(d))f.appendChild(h=d);else if(d instanceof i)f.appendChild(h=d);else if(typeof d=="object")for(var m in d)if(typeof d[m]=="function")/^on\w+/.test(m)?(function(w,x){f.addEventListener?(f.addEventListener(w.substring(2),x[w],!1),p.push(function(){f.removeEventListener(w.substring(2),x[w],!1)})):(f.attachEvent(w,x[w]),p.push(function(){f.detachEvent(w,x[w])}))})(m,d):(f[m]=d[m](),p.push(d[m](function(w){f[m]=w})));else if(m==="style")if(typeof d[m]=="string")f.style.cssText=d[m];else for(var C in d[m])(function(w,x){if(typeof x=="function")f.style.setProperty(w,x()),p.push(x(function(H){f.style.setProperty(w,H)}));else var k=d[m][w].match(/(.*)\W+!important\W*$/);k?f.style.setProperty(w,k[1],"important"):f.style.setProperty(w,d[m][w])})(C,d[m][C]);else if(m==="attrs")for(var E in d[m])f.setAttribute(E,d[m][E]);else m.substr(0,5)==="data-"?f.setAttribute(m,d[m]):f[m]=d[m];else if(typeof d=="function"){var E=d();f.appendChild(h=u(E)?E:r.createTextNode(E)),p.push(d(function(x){u(x)&&h.parentElement?(h.parentElement.replaceChild(x,h),h=x):h.textContent=x}))}}return h}for(;b.length;)_(b.shift());return f}return l.cleanup=function(){for(var b=0;b<p.length;b++)p[b]();p.length=0},l}var s=jt.exports=o();s.context=o;function u(p){return p&&p.nodeName&&p.nodeType}function c(p,l){if(p.forEach)return p.forEach(l);for(var b=0;b<p.length;b++)l(p[b],b)}function a(p){return Object.prototype.toString.call(p)=="[object Array]"}return jt.exports}var yr=_r();const st=lr(yr);function U(e){if(!e.shadowRoot)throw new Error("There is no shadow root on the element !");return e.shadowRoot}function ut(e){const t=Array.isArray(e)?e:[e],n=document.createElement("template");return n.innerHTML=t.map(r=>r.outerHTML).join(""),n}var Dt=function(e,t){return Dt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Dt(e,t)};function at(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Dt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function gr(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function u(p){try{a(r.next(p))}catch(l){s(l)}}function c(p){try{a(r.throw(p))}catch(l){s(l)}}function a(p){p.done?o(p.value):i(p.value).then(u,c)}a((r=r.apply(e,t||[])).next())})}function un(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=u(0),s.throw=u(1),s.return=u(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(a){return function(p){return c([a,p])}}function c(a){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(n=0)),n;)try{if(r=1,i&&(o=a[0]&2?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[a[0]&2,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return n.label++,{value:a[1],done:!1};case 5:n.label++,i=a[1],a=[0];continue;case 7:a=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1],o=a;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(a);break}o[2]&&n.ops.pop(),n.trys.pop();continue}a=t.call(e,n)}catch(p){a=[6,p],i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function X(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function B(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],s;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(u){s={error:u}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function Y(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function Z(e){return this instanceof Z?(this.v=e,this):new Z(e)}function wr(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(f){return function(_){return Promise.resolve(_).then(f,l)}}function u(f,_){r[f]&&(i[f]=function(d){return new Promise(function(h,v){o.push([f,d,h,v])>1||c(f,d)})},_&&(i[f]=_(i[f])))}function c(f,_){try{a(r[f](_))}catch(d){b(o[0][3],d)}}function a(f){f.value instanceof Z?Promise.resolve(f.value.v).then(p,l):b(o[0][2],f)}function p(f){c("next",f)}function l(f){c("throw",f)}function b(f,_){f(_),o.shift(),o.length&&c(o[0][0],o[0][1])}}function xr(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof X=="function"?X(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=e[o]&&function(s){return new Promise(function(u,c){s=e[o](s),i(u,c,s.done,s.value)})}}function i(o,s,u,c){Promise.resolve(c).then(function(a){o({value:a,done:u})},s)}}function y(e){return typeof e=="function"}function ee(e){var t=function(r){Error.call(r),r.stack=new Error().stack},n=e(t);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Ht=ee(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function zt(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var St=(function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,n,r,i,o;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=X(s),c=u.next();!c.done;c=u.next()){var a=c.value;a.remove(this)}}catch(d){t={error:d}}finally{try{c&&!c.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}else s.remove(this);var p=this.initialTeardown;if(y(p))try{p()}catch(d){o=d instanceof Ht?d.errors:[d]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var b=X(l),f=b.next();!f.done;f=b.next()){var _=f.value;try{_e(_)}catch(d){o=o??[],d instanceof Ht?o=Y(Y([],B(o)),B(d.errors)):o.push(d)}}}catch(d){r={error:d}}finally{try{f&&!f.done&&(i=b.return)&&i.call(b)}finally{if(r)throw r.error}}}if(o)throw new Ht(o)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)_e(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}},e.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},e.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},e.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&zt(n,t)},e.prototype.remove=function(t){var n=this._finalizers;n&&zt(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=(function(){var t=new e;return t.closed=!0,t})(),e})(),an=St.EMPTY;function cn(e){return e instanceof St||e&&"closed"in e&&y(e.remove)&&y(e.add)&&y(e.unsubscribe)}function _e(e){y(e)?e():e.unsubscribe()}var Sr={Promise:void 0},$r={setTimeout:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,Y([e,t],B(n)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function ln(e){$r.setTimeout(function(){throw e})}function ye(){}function ht(e){e()}var ne=(function(e){at(t,e);function t(n){var r=e.call(this)||this;return r.isStopped=!1,n?(r.destination=n,cn(n)&&n.add(r)):r.destination=Or,r}return t.create=function(n,r,i){return new Bt(n,r,i)},t.prototype.next=function(n){this.isStopped||this._next(n)},t.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t})(St),Er=(function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){pt(r)}},e.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){pt(r)}else pt(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){pt(n)}},e})(),Bt=(function(e){at(t,e);function t(n,r,i){var o=e.call(this)||this,s;return y(n)||!n?s={next:n??void 0,error:r??void 0,complete:i??void 0}:s=n,o.destination=new Er(s),o}return t})(ne);function pt(e){ln(e)}function Tr(e){throw e}var Or={closed:!0,next:ye,error:Tr,complete:ye},re=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function ct(e){return e}function Ir(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return pn(e)}function pn(e){return e.length===0?ct:e.length===1?e[0]:function(n){return e.reduce(function(r,i){return i(r)},n)}}var I=(function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(t,n,r){var i=this,o=Pr(t)?t:new Bt(t,n,r);return ht(function(){var s=i,u=s.operator,c=s.source;o.add(u?u.call(o,c):c?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},e.prototype.forEach=function(t,n){var r=this;return n=ge(n),new n(function(i,o){var s=new Bt({next:function(u){try{t(u)}catch(c){o(c),s.unsubscribe()}},error:o,complete:i});r.subscribe(s)})},e.prototype._subscribe=function(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)},e.prototype[re]=function(){return this},e.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return pn(t)(this)},e.prototype.toPromise=function(t){var n=this;return t=ge(t),new t(function(r,i){var o;n.subscribe(function(s){return o=s},function(s){return i(s)},function(){return r(o)})})},e.create=function(t){return new e(t)},e})();function ge(e){var t;return(t=e??Sr.Promise)!==null&&t!==void 0?t:Promise}function kr(e){return e&&y(e.next)&&y(e.error)&&y(e.complete)}function Pr(e){return e&&e instanceof ne||kr(e)&&cn(e)}function Cr(e){return y(e?.lift)}function j(e){return function(t){if(Cr(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function M(e,t,n,r,i){return new jr(e,t,n,r,i)}var jr=(function(e){at(t,e);function t(n,r,i,o,s,u){var c=e.call(this,n)||this;return c.onFinalize=s,c.shouldUnsubscribe=u,c._next=r?function(a){try{r(a)}catch(p){n.error(p)}}:e.prototype._next,c._error=o?function(a){try{o(a)}catch(p){n.error(p)}finally{this.unsubscribe()}}:e.prototype._error,c._complete=i?function(){try{i()}catch(a){n.error(a)}finally{this.unsubscribe()}}:e.prototype._complete,c}return t.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},t})(ne),Ar=ee(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),fn=(function(e){at(t,e);function t(){var n=e.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return t.prototype.lift=function(n){var r=new we(this,this);return r.operator=n,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new Ar},t.prototype.next=function(n){var r=this;ht(function(){var i,o;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=X(r.currentObservers),u=s.next();!u.done;u=s.next()){var c=u.value;c.next(n)}}catch(a){i={error:a}}finally{try{u&&!u.done&&(o=s.return)&&o.call(s)}finally{if(i)throw i.error}}}})},t.prototype.error=function(n){var r=this;ht(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},t.prototype.complete=function(){var n=this;ht(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(n){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,n)},t.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},t.prototype._innerSubscribe=function(n){var r=this,i=this,o=i.hasError,s=i.isStopped,u=i.observers;return o||s?an:(this.currentObservers=null,u.push(n),new St(function(){r.currentObservers=null,zt(u,n)}))},t.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,o=r.thrownError,s=r.isStopped;i?n.error(o):s&&n.complete()},t.prototype.asObservable=function(){var n=new I;return n.source=this,n},t.create=function(n,r){return new we(n,r)},t})(I),we=(function(e){at(t,e);function t(n,r){var i=e.call(this)||this;return i.destination=n,i.source=r,i}return t.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},t.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},t.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},t.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:an},t})(fn),dn=new I(function(e){return e.complete()});function Lr(e){return e&&y(e.schedule)}function oe(e){return e[e.length-1]}function bn(e){return y(oe(e))?e.pop():void 0}function $t(e){return Lr(oe(e))?e.pop():void 0}function Mr(e,t){return typeof oe(e)=="number"?e.pop():t}var ie=(function(e){return e&&typeof e.length=="number"&&typeof e!="function"});function hn(e){return y(e?.then)}function mn(e){return y(e[re])}function vn(e){return Symbol.asyncIterator&&y(e?.[Symbol.asyncIterator])}function _n(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Hr(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var yn=Hr();function gn(e){return y(e?.[yn])}function wn(e){return wr(this,arguments,function(){var n,r,i,o;return un(this,function(s){switch(s.label){case 0:n=e.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,Z(n.read())];case 3:return r=s.sent(),i=r.value,o=r.done,o?[4,Z(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,Z(i)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function xn(e){return y(e?.getReader)}function J(e){if(e instanceof I)return e;if(e!=null){if(mn(e))return Nr(e);if(ie(e))return Rr(e);if(hn(e))return Fr(e);if(vn(e))return Sn(e);if(gn(e))return Ur(e);if(xn(e))return Dr(e)}throw _n(e)}function Nr(e){return new I(function(t){var n=e[re]();if(y(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Rr(e){return new I(function(t){for(var n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function Fr(e){return new I(function(t){e.then(function(n){t.closed||(t.next(n),t.complete())},function(n){return t.error(n)}).then(null,ln)})}function Ur(e){return new I(function(t){var n,r;try{for(var i=X(e),o=i.next();!o.done;o=i.next()){var s=o.value;if(t.next(s),t.closed)return}}catch(u){n={error:u}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}t.complete()})}function Sn(e){return new I(function(t){zr(e,t).catch(function(n){return t.error(n)})})}function Dr(e){return Sn(wn(e))}function zr(e,t){var n,r,i,o;return gr(this,void 0,void 0,function(){var s,u;return un(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),n=xr(e),c.label=1;case 1:return[4,n.next()];case 2:if(r=c.sent(),!!r.done)return[3,4];if(s=r.value,t.next(s),t.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return u=c.sent(),i={error:u},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(o=n.return)?[4,o.call(n)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function D(e,t,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var o=t.schedule(function(){n(),i?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(o),!i)return o}function $n(e,t){return t===void 0&&(t=0),j(function(n,r){n.subscribe(M(r,function(i){return D(r,e,function(){return r.next(i)},t)},function(){return D(r,e,function(){return r.complete()},t)},function(i){return D(r,e,function(){return r.error(i)},t)}))})}function En(e,t){return t===void 0&&(t=0),j(function(n,r){r.add(e.schedule(function(){return n.subscribe(r)},t))})}function Br(e,t){return J(e).pipe(En(t),$n(t))}function qr(e,t){return J(e).pipe(En(t),$n(t))}function Wr(e,t){return new I(function(n){var r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function Vr(e,t){return new I(function(n){var r;return D(n,t,function(){r=e[yn](),D(n,t,function(){var i,o,s;try{i=r.next(),o=i.value,s=i.done}catch(u){n.error(u);return}s?n.complete():n.next(o)},0,!0)}),function(){return y(r?.return)&&r.return()}})}function Tn(e,t){if(!e)throw new Error("Iterable cannot be null");return new I(function(n){D(n,t,function(){var r=e[Symbol.asyncIterator]();D(n,t,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function Yr(e,t){return Tn(wn(e),t)}function Gr(e,t){if(e!=null){if(mn(e))return Br(e,t);if(ie(e))return Wr(e,t);if(hn(e))return qr(e,t);if(vn(e))return Tn(e,t);if(gn(e))return Vr(e,t);if(xn(e))return Yr(e,t)}throw _n(e)}function Et(e,t){return t?Gr(e,t):J(e)}var On=ee(function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}});function T(e,t){return j(function(n,r){var i=0;n.subscribe(M(r,function(o){r.next(e.call(t,o,i++))}))})}var Jr=Array.isArray;function Kr(e,t){return Jr(t)?e.apply(void 0,Y([],B(t))):e(t)}function se(e){return T(function(t){return Kr(e,t)})}var Qr=Array.isArray,Zr=Object.getPrototypeOf,Xr=Object.prototype,to=Object.keys;function eo(e){if(e.length===1){var t=e[0];if(Qr(t))return{args:t,keys:null};if(no(t)){var n=to(t);return{args:n.map(function(r){return t[r]}),keys:n}}}return{args:e,keys:null}}function no(e){return e&&typeof e=="object"&&Zr(e)===Xr}function ro(e,t){return e.reduce(function(n,r,i){return n[r]=t[i],n},{})}function oo(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=$t(e),r=bn(e),i=eo(e),o=i.args,s=i.keys;if(o.length===0)return Et([],n);var u=new I(In(o,n,s?function(c){return ro(s,c)}:ct));return r?u.pipe(se(r)):u}function In(e,t,n){return n===void 0&&(n=ct),function(r){xe(t,function(){for(var i=e.length,o=new Array(i),s=i,u=i,c=function(p){xe(t,function(){var l=Et(e[p],t),b=!1;l.subscribe(M(r,function(f){o[p]=f,b||(b=!0,u--),u||r.next(n(o.slice()))},function(){--s||r.complete()}))},r)},a=0;a<i;a++)c(a)},r)}}function xe(e,t,n){e?D(n,e,t):t()}function io(e,t,n,r,i,o,s,u){var c=[],a=0,p=0,l=!1,b=function(){l&&!c.length&&!a&&t.complete()},f=function(d){return a<r?_(d):c.push(d)},_=function(d){a++;var h=!1;J(n(d,p++)).subscribe(M(t,function(v){t.next(v)},function(){h=!0},void 0,function(){if(h)try{a--;for(var v=function(){var m=c.shift();s||_(m)};c.length&&a<r;)v();b()}catch(m){t.error(m)}}))};return e.subscribe(M(t,f,function(){l=!0,b()})),function(){}}function ue(e,t,n){return n===void 0&&(n=1/0),y(t)?ue(function(r,i){return T(function(o,s){return t(r,o,i,s)})(J(e(r,i)))},n):(typeof t=="number"&&(n=t),j(function(r,i){return io(r,i,e,n)}))}function kn(e){return e===void 0&&(e=1/0),ue(ct,e)}function so(){return kn(1)}function Se(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return so()(Et(e,$t(e)))}var uo=["addListener","removeListener"],ao=["addEventListener","removeEventListener"],co=["on","off"];function z(e,t,n,r){if(y(n)&&(r=n,n=void 0),r)return z(e,t,n).pipe(se(r));var i=B(fo(e)?ao.map(function(u){return function(c){return e[u](t,c,n)}}):lo(e)?uo.map($e(e,t)):po(e)?co.map($e(e,t)):[],2),o=i[0],s=i[1];if(!o&&ie(e))return ue(function(u){return z(u,t,n)})(J(e));if(!o)throw new TypeError("Invalid event target");return new I(function(u){var c=function(){for(var a=[],p=0;p<arguments.length;p++)a[p]=arguments[p];return u.next(1<a.length?a:a[0])};return o(c),function(){return s(c)}})}function $e(e,t){return function(n){return function(r){return e[n](t,r)}}}function lo(e){return y(e.addListener)&&y(e.removeListener)}function po(e){return y(e.on)&&y(e.off)}function fo(e){return y(e.addEventListener)&&y(e.removeEventListener)}function bo(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=$t(e),r=Mr(e,1/0),i=e;return i.length?i.length===1?J(i[0]):kn(r)(Et(i,n)):dn}var ho=Array.isArray;function mo(e){return e.length===1&&ho(e[0])?e[0]:e}function nt(e,t){return j(function(n,r){var i=0;n.subscribe(M(r,function(o){return e.call(t,o,i++)&&r.next(o)}))})}function Pn(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=bn(e);return n?Ir(Pn.apply(void 0,Y([],B(e))),se(n)):j(function(r,i){In(Y([r],B(mo(e))))(i)})}function Nt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Pn.apply(void 0,Y([],B(e)))}function vo(e){return j(function(t,n){var r=!1;t.subscribe(M(n,function(i){r=!0,n.next(i)},function(){r||n.next(e),n.complete()}))})}function _o(e){return e<=0?function(){return dn}:j(function(t,n){var r=0;t.subscribe(M(n,function(i){++r<=e&&(n.next(i),e<=r&&n.complete())}))})}function Ee(e){return T(function(){return e})}function yo(e){return e===void 0&&(e=go),j(function(t,n){var r=!1;t.subscribe(M(n,function(i){r=!0,n.next(i)},function(){return r?n.complete():n.error(e())}))})}function go(){return new On}function wo(e,t){var n=arguments.length>=2;return function(r){return r.pipe(ct,_o(1),n?vo(t):yo(function(){return new On}))}}function xo(){return j(function(e,t){var n,r=!1;e.subscribe(M(t,function(i){var o=n;n=i,r&&t.next([o,i]),r=!0}))})}function ft(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=$t(e);return j(function(r,i){(n?Se(e,r,n):Se(e,r)).subscribe(i)})}function Cn(){return!document.hidden}function So(){const e=z(document,"visibilitychange"),t=z(window,"focus").pipe(Ee(!0)),n=z(window,"blur").pipe(Ee(!1)),r=bo(t,n);return oo(e,r).pipe(T(([,i])=>Cn()&&i),nt(i=>i),wo())}const $o=z(document,"mouseover");async function Eo(){Cn()||await Promise.race([So().toPromise(),$o.toPromise()])}async function To(){await new Promise(e=>setTimeout(e,400)),await Eo(),await new Promise(e=>setTimeout(e,400))}const Oo=To();function P(e,t){const n=e.querySelector(t);if(!n)throw new Error(`Failed to find element ${t} !`);return n}const Io=xt.bind(st),ko="crumbs-p",Po=ut(Io`
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
`);let Co=class extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const t=U(this),n=Po.content.cloneNode(!0);t.appendChild(n)}};customElements.define(ko,Co);const jo=xt.bind(st),Ao="crumbs-panel",Lo=ut(jo`
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
`);class Mo extends HTMLElement{contentTimeoutElapsed=!1;contentLoaded=!1;connected=!1;loading="100";scrolled=!1;scrolledSubscription=null;static get observedAttributes(){return["panel-loading","panel-title"]}async connectedCallback(){this.attachShadow({mode:"open"}),await Oo;const t=U(this),n=Lo.content.cloneNode(!0);t.appendChild(n);const r=this.getAttribute("panel-loading");r!==null&&Te(r)&&(this.loading=r),setTimeout(()=>{const i=P(t,"#panel-container");i.style.gridTemplateColumns="1rem 1fr 1rem",i.style.gridTemplateRows="1rem 1fr 1rem";const o=P(t,"#panel");o.style.backgroundColor="#ffffff40",this.scrolledSubscription=z(o,"scroll").pipe(T(s=>s.target.scrollTop),T(s=>s!==0)).subscribe(s=>{this.scrolled=s,this.render()}),this.render()},10),setTimeout(()=>{this.contentTimeoutElapsed=!0,this.render()},400),this.connected=!0,this.render()}render(){const t=U(this),n=P(t,"#panel-content"),r=P(t,"#panel-loading"),i=P(t,"#panel"),o=P(t,"#panel-title-content");this.contentTimeoutElapsed&&Ho(this.loading)?(n.style.visibility="visible",n.style.opacity="1",i.style.overflow="auto"):(n.style.visibility="collapse",n.style.opacity="0",i.style.overflow="hidden"),r.style.width=`${this.loading}%`;const s=P(t,"#panel-title");this.loading==="100"&&this.getAttribute("panel-title")&&!this.scrolled?setTimeout(()=>{s.style.opacity="1",o.innerHTML=this.getAttribute("panel-title")||"",n.style.paddingTop="2.5rem"},10):(n.style.paddingTop="inherit",s.style.opacity="0")}attributeChangedCallback(){if(this.shadowRoot&&this.connected){const t=this.getAttribute("panel-loading");t!==null&&Te(t)?this.loading=t:t===null&&(this.loading="100"),this.render()}}disconnectedCallback(){this.scrolledSubscription?.unsubscribe()}}function Te(e){const t=Number(e),n=Math.floor(t);return n===t&&Number.isInteger(n)&&Number.isFinite(n)&&n<=100&&n>=0}function Ho(e){return e===null||e==="100"}customElements.define(Ao,Mo);const No=xt.bind(st),Ro="crumbs-input",Fo=ut(No`
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
`);class Uo extends HTMLElement{static get observedAttributes(){return["value"]}async connectedCallback(){this.attachShadow({mode:"open"});const t=U(this),n=Fo.content.cloneNode(!0);t.appendChild(n);const r=P(t,"input"),i=this.getAttribute("value");r instanceof HTMLInputElement&&i&&(r.value=i)}attributeChangedCallback(t,n,r){if(t==="value"&&this.shadowRoot){const i=U(this),o=P(i,"input");o instanceof HTMLInputElement&&(o.value=r)}}}customElements.define(Ro,Uo);const qt=xt.bind(st),Do="crumbs-tabs",zo=ut(qt`
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
`);class Bo extends HTMLElement{selected=1;subscriptions=[];async connectedCallback(){this.attachShadow({mode:"open"});const t=U(this),n=zo.content.cloneNode(!0);t.appendChild(n);const r=this.getAttribute("selected");this.selected=Number.parseInt(r||"1",10);const i=t.querySelector("#tabs"),o=t.querySelector("#content");if(!i)throw new Error("Tabs not found");if(!o)throw new Error("Content not found");for(const s of{[Symbol.iterator]:()=>this.getSlots()}){if(s.startsWith("content-")){const u=qt`<div id=${`${s}`}> <slot name=${s}></slot> </div>`;u instanceof Element&&o.appendChild(u)}if(s.startsWith("title-")){const u=qt`<div id=${s}> <crumbs-p> <slot name=${s}></slot> </crumbs-p> </div>`;u instanceof Element&&i.appendChild(u)}}this.subscriptions=[...i.children].map((s,u)=>z(s,"click").subscribe(()=>{const c=s.id.replace("title-","content-"),a=t.querySelector(`#${c}`);a instanceof HTMLElement&&o instanceof HTMLElement&&a.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.selected=u+1,this.render()})),this.render()}render(){const n=U(this).querySelector("#tabs");if(!n)throw new Error("Tabs not found");[...n.children].forEach((r,i)=>{i+1===this.selected?r instanceof HTMLElement&&r.classList.add("selected-title"):r instanceof HTMLElement&&r.classList.remove("selected-title")})}disconnectedCallback(){for(const t of this.subscriptions)t.unsubscribe()}*getSlots(){for(const t of Array.from(this.children)){const n=t.getAttribute("slot");n&&(yield n)}}}customElements.define(Do,Bo);var jn=function(e,t,n,r){var i;t[0]=0;for(var o=1;o<t.length;o++){var s=t[o++],u=t[o]?(t[0]|=s?1:2,n[t[o++]]):t[++o];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[t[++o]]=u:s===6?r[1][t[++o]]+=u+"":s?(i=e.apply(u,jn(e,u,n,["",null])),r.push(i),u[0]?t[0]|=2:(t[o-2]=0,t[o]=i)):r.push(u)}return r},Oe=new Map;function qo(e){var t=Oe.get(this);return t||(t=new Map,Oe.set(this,t)),(t=jn(this,t.get(e)||(t.set(e,t=(function(n){for(var r,i,o=1,s="",u="",c=[0],a=function(b){o===1&&(b||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,b,s):o===3&&(b||s)?(c.push(3,b,s),o=2):o===2&&s==="..."&&b?c.push(4,b,0):o===2&&s&&!b?c.push(5,0,!0,s):o>=5&&((s||!b&&o===5)&&(c.push(o,0,s,i),o=6),b&&(c.push(o,b,0,i),o=6)),s=""},p=0;p<n.length;p++){p&&(o===1&&a(),a(p));for(var l=0;l<n[p].length;l++)r=n[p][l],o===1?r==="<"?(a(),c=[c],o=3):s+=r:o===4?s==="--"&&r===">"?(o=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(a(),o=1):o&&(r==="="?(o=5,i=s,s=""):r==="/"&&(o<5||n[p][l+1]===">")?(a(),o===3&&(c=c[0]),o=c,(c=c[0]).push(2,0,o),o=0):r===" "||r==="	"||r===`
`||r==="\r"?(a(),o=2):s+=r),o===3&&s==="!--"&&(o=4,c=c[0])}return a(),c})(e)),t),arguments,[])).length>1?t:t[0]}function Wo(){return e=>e.pipe(T(([t,n,r])=>t||n||r>0&&r<100))}function Vo(){return e=>e.pipe(T(([t,n])=>n?100:t||0))}const Yo=qo.bind(st),Go="crumbs-button";class Jo extends HTMLElement{_renderSubscription=null;_clickSubscription=null;_attributeChanges$=new fn;_parsedProgress$;_parsedDisabled$;_parsedIndeterminateProgress$;_loading$;_activeIndeterminateProgress$;_disabled$;_loadingBarTransitionEnabled$;constructor(){super(),this._parsedProgress$=this._attributeChanges$.pipe(nt(([t])=>t==="progress"),T(([t,n])=>n),T(Number),nt(t=>Number.isInteger(t)&&t<=100)),this._parsedIndeterminateProgress$=this._attributeChanges$.pipe(nt(([t])=>t==="indeterminate-progress"),T(([t,n])=>n),T(t=>t!==null)),this._parsedDisabled$=this._attributeChanges$.pipe(nt(([t])=>t==="disabled"),T(([t,n])=>n),T(t=>t!==null&&t!=="false")),this._loading$=this._parsedProgress$.pipe(Nt(this._parsedIndeterminateProgress$),Vo(),ft(0)),this._activeIndeterminateProgress$=this._parsedIndeterminateProgress$.pipe(ft(!1)),this._disabled$=this._parsedDisabled$.pipe(Nt(this._activeIndeterminateProgress$,this._loading$),Wo(),ft(!1)),this._loadingBarTransitionEnabled$=this._loading$.pipe(xo(),T(([t,n])=>n>=t),ft(!1))}static get observedAttributes(){return["progress","disabled","indeterminate-progress"]}async connectedCallback(){this.attachShadow({mode:"open"}),U(this).appendChild(Ko.content.cloneNode(!0)),this._renderSubscription=this._disabled$.pipe(Nt(this._loading$,this._activeIndeterminateProgress$,this._loadingBarTransitionEnabled$)).subscribe(n=>{this.render(...n)}),this._attributeChanges$.next(["disabled",this.getAttribute("disabled")]),this._attributeChanges$.next(["progress",this.getAttribute("progress")]),this._attributeChanges$.next(["indeterminate-progress",this.getAttribute("indeterminate-progress")])}attributeChangedCallback(t){this._attributeChanges$.next([t,this.getAttribute(t)])}render(t,n,r,i){if(!this.shadowRoot)return;const o=U(this),s=P(o,"#progress"),u=P(o,"button"),c=P(o,"progress");u instanceof HTMLButtonElement&&(u.disabled=t),r?(u.classList.remove("indeterminate-loading-end"),u.classList.add("indeterminate-loading"),c instanceof HTMLProgressElement&&c.removeAttribute("value")):(u.classList.add("indeterminate-loading-end"),setTimeout(()=>{u.classList.remove("indeterminate-loading")},500)),i?s.classList.add("transition"):s.classList.remove("transition"),s.style.width=`${n}%`,!r&&c instanceof HTMLProgressElement&&(c.value=n)}disconnectedCallback(){this._clickSubscription?.unsubscribe(),this._renderSubscription?.unsubscribe()}}customElements.define(Go,Jo);const Ko=ut(Yo`
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
`);let Qo={data:""},Zo=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||Qo},Xo=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ti=/\/\*[^]*?\*\/|  +/g,Ie=/\n+/g,W=(e,t)=>{let n="",r="",i="";for(let o in e){let s=e[o];o[0]=="@"?o[1]=="i"?n=o+" "+s+";":r+=o[1]=="f"?W(s,o):o+"{"+W(s,o[1]=="k"?"":t)+"}":typeof s=="object"?r+=W(s,t?t.replace(/([^,])+/g,u=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,u):u?u+" "+c:c)):o):s!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=W.p?W.p(o,s):o+":"+s+";")}return n+(t&&i?t+"{"+i+"}":i)+r},N={},An=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+An(e[n]);return t}return e},ei=(e,t,n,r,i)=>{let o=An(e),s=N[o]||(N[o]=(c=>{let a=0,p=11;for(;a<c.length;)p=101*p+c.charCodeAt(a++)>>>0;return"go"+p})(o));if(!N[s]){let c=o!==e?e:(a=>{let p,l,b=[{}];for(;p=Xo.exec(a.replace(ti,""));)p[4]?b.shift():p[3]?(l=p[3].replace(Ie," ").trim(),b.unshift(b[0][l]=b[0][l]||{})):b[0][p[1]]=p[2].replace(Ie," ").trim();return b[0]})(e);N[s]=W(i?{["@keyframes "+s]:c}:c,n?"":"."+s)}let u=n&&N.g?N.g:null;return n&&(N.g=N[s]),((c,a,p,l)=>{l?a.data=a.data.replace(l,c):a.data.indexOf(c)===-1&&(a.data=p?c+a.data:a.data+c)})(N[s],t,r,u),s},ni=(e,t,n)=>e.reduce((r,i,o)=>{let s=t[o];if(s&&s.call){let u=s(n),c=u&&u.props&&u.props.className||/^go/.test(u)&&u;s=c?"."+c:u&&typeof u=="object"?u.props?"":W(u,""):u===!1?"":u}return r+i+(s??"")},"");function G(e){let t=this||{},n=e.call?e(t.p):e;return ei(n.unshift?n.raw?ni(n,[].slice.call(arguments,1),t.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):n,Zo(t.target),t.g,t.o,t.k)}G.bind({g:1});G.bind({k:1});var Tt,g,Ln,V,ke,Mn,Hn,Nn,ae,Wt,Vt,rt={},Rn=[],ri=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ot=Array.isArray;function R(e,t){for(var n in t)e[n]=t[n];return e}function ce(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Fn(e,t,n){var r,i,o,s={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:s[o]=t[o];if(arguments.length>2&&(s.children=arguments.length>3?Tt.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)s[o]===void 0&&(s[o]=e.defaultProps[o]);return mt(e,s,r,i,null)}function mt(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Ln,__i:-1,__u:0};return i==null&&g.vnode!=null&&g.vnode(o),o}function It(e){return e.children}function vt(e,t){this.props=e,this.context=t}function tt(e,t){if(t==null)return e.__?tt(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?tt(e):null}function Un(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Un(e)}}function Pe(e){(!e.__d&&(e.__d=!0)&&V.push(e)&&!gt.__r++||ke!=g.debounceRendering)&&((ke=g.debounceRendering)||Mn)(gt)}function gt(){for(var e,t,n,r,i,o,s,u=1;V.length;)V.length>u&&V.sort(Hn),e=V.shift(),u=V.length,e.__d&&(n=void 0,r=void 0,i=(r=(t=e).__v).__e,o=[],s=[],t.__P&&((n=R({},r)).__v=r.__v+1,g.vnode&&g.vnode(n),le(t.__P,n,r,t.__n,t.__P.namespaceURI,32&r.__u?[i]:null,o,i??tt(r),!!(32&r.__u),s),n.__v=r.__v,n.__.__k[n.__i]=n,Bn(o,n,s),r.__e=r.__=null,n.__e!=i&&Un(n)));gt.__r=0}function Dn(e,t,n,r,i,o,s,u,c,a,p){var l,b,f,_,d,h,v,m=r&&r.__k||Rn,C=t.length;for(c=oi(n,t,m,c,C),l=0;l<C;l++)(f=n.__k[l])!=null&&(b=f.__i==-1?rt:m[f.__i]||rt,f.__i=l,h=le(e,f,b,i,o,s,u,c,a,p),_=f.__e,f.ref&&b.ref!=f.ref&&(b.ref&&pe(b.ref,null,f),p.push(f.ref,f.__c||_,f)),d==null&&_!=null&&(d=_),(v=!!(4&f.__u))||b.__k===f.__k?c=zn(f,c,e,v):typeof f.type=="function"&&h!==void 0?c=h:_&&(c=_.nextSibling),f.__u&=-7);return n.__e=d,c}function oi(e,t,n,r,i){var o,s,u,c,a,p=n.length,l=p,b=0;for(e.__k=new Array(i),o=0;o<i;o++)(s=t[o])!=null&&typeof s!="boolean"&&typeof s!="function"?(c=o+b,(s=e.__k[o]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?mt(null,s,null,null,null):Ot(s)?mt(It,{children:s},null,null,null):s.constructor==null&&s.__b>0?mt(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=e,s.__b=e.__b+1,u=null,(a=s.__i=ii(s,n,c,l))!=-1&&(l--,(u=n[a])&&(u.__u|=2)),u==null||u.__v==null?(a==-1&&(i>p?b--:i<p&&b++),typeof s.type!="function"&&(s.__u|=4)):a!=c&&(a==c-1?b--:a==c+1?b++:(a>c?b--:b++,s.__u|=4))):e.__k[o]=null;if(l)for(o=0;o<p;o++)(u=n[o])!=null&&(2&u.__u)==0&&(u.__e==r&&(r=tt(u)),Wn(u,u));return r}function zn(e,t,n,r){var i,o;if(typeof e.type=="function"){for(i=e.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=e,t=zn(i[o],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=tt(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function ii(e,t,n,r){var i,o,s,u=e.key,c=e.type,a=t[n],p=a!=null&&(2&a.__u)==0;if(a===null&&e.key==null||p&&u==a.key&&c==a.type)return n;if(r>(p?1:0)){for(i=n-1,o=n+1;i>=0||o<t.length;)if((a=t[s=i>=0?i--:o++])!=null&&(2&a.__u)==0&&u==a.key&&c==a.type)return s}return-1}function Ce(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||ri.test(t)?n:n+"px"}function dt(e,t,n,r,i){var o,s;t:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Ce(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||Ce(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Nn,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n.u=r.u:(n.u=ae,e.addEventListener(t,o?Vt:Wt,o)):e.removeEventListener(t,o?Vt:Wt,o);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function je(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=ae++;else if(t.t<n.u)return;return n(g.event?g.event(t):t)}}}function le(e,t,n,r,i,o,s,u,c,a){var p,l,b,f,_,d,h,v,m,C,E,w,x,k,H,et,Ct,L=t.type;if(t.constructor!=null)return null;128&n.__u&&(c=!!(32&n.__u),o=[u=t.__e=n.__e]),(p=g.__b)&&p(t);t:if(typeof L=="function")try{if(v=t.props,m="prototype"in L&&L.prototype.render,C=(p=L.contextType)&&r[p.__c],E=p?C?C.props.value:p.__:r,n.__c?h=(l=t.__c=n.__c).__=l.__E:(m?t.__c=l=new L(v,E):(t.__c=l=new vt(v,E),l.constructor=L,l.render=ui),C&&C.sub(l),l.props=v,l.state||(l.state={}),l.context=E,l.__n=r,b=l.__d=!0,l.__h=[],l._sb=[]),m&&l.__s==null&&(l.__s=l.state),m&&L.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=R({},l.__s)),R(l.__s,L.getDerivedStateFromProps(v,l.__s))),f=l.props,_=l.state,l.__v=t,b)m&&L.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),m&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(m&&L.getDerivedStateFromProps==null&&v!==f&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,E),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,E)===!1||t.__v==n.__v){for(t.__v!=n.__v&&(l.props=v,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(K){K&&(K.__=t)}),w=0;w<l._sb.length;w++)l.__h.push(l._sb[w]);l._sb=[],l.__h.length&&s.push(l);break t}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,E),m&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(f,_,d)})}if(l.context=E,l.props=v,l.__P=e,l.__e=!1,x=g.__r,k=0,m){for(l.state=l.__s,l.__d=!1,x&&x(t),p=l.render(l.props,l.state,l.context),H=0;H<l._sb.length;H++)l.__h.push(l._sb[H]);l._sb=[]}else do l.__d=!1,x&&x(t),p=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++k<25);l.state=l.__s,l.getChildContext!=null&&(r=R(R({},r),l.getChildContext())),m&&!b&&l.getSnapshotBeforeUpdate!=null&&(d=l.getSnapshotBeforeUpdate(f,_)),et=p,p!=null&&p.type===It&&p.key==null&&(et=qn(p.props.children)),u=Dn(e,Ot(et)?et:[et],t,n,r,i,o,s,u,c,a),l.base=t.__e,t.__u&=-161,l.__h.length&&s.push(l),h&&(l.__E=l.__=null)}catch(K){if(t.__v=null,c||o!=null)if(K.then){for(t.__u|=c?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;o[o.indexOf(u)]=null,t.__e=u}else{for(Ct=o.length;Ct--;)ce(o[Ct]);Yt(t)}else t.__e=n.__e,t.__k=n.__k,K.then||Yt(t);g.__e(K,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):u=t.__e=si(n.__e,t,n,r,i,o,s,c,a);return(p=g.diffed)&&p(t),128&t.__u?void 0:u}function Yt(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Yt)}function Bn(e,t,n){for(var r=0;r<n.length;r++)pe(n[r],n[++r],n[++r]);g.__c&&g.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(o){o.call(i)})}catch(o){g.__e(o,i.__v)}})}function qn(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:Ot(e)?e.map(qn):R({},e)}function si(e,t,n,r,i,o,s,u,c){var a,p,l,b,f,_,d,h=n.props,v=t.props,m=t.type;if(m=="svg"?i="http://www.w3.org/2000/svg":m=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),o!=null){for(a=0;a<o.length;a++)if((f=o[a])&&"setAttribute"in f==!!m&&(m?f.localName==m:f.nodeType==3)){e=f,o[a]=null;break}}if(e==null){if(m==null)return document.createTextNode(v);e=document.createElementNS(i,m,v.is&&v),u&&(g.__m&&g.__m(t,o),u=!1),o=null}if(m==null)h===v||u&&e.data==v||(e.data=v);else{if(o=o&&Tt.call(e.childNodes),h=n.props||rt,!u&&o!=null)for(h={},a=0;a<e.attributes.length;a++)h[(f=e.attributes[a]).name]=f.value;for(a in h)if(f=h[a],a!="children"){if(a=="dangerouslySetInnerHTML")l=f;else if(!(a in v)){if(a=="value"&&"defaultValue"in v||a=="checked"&&"defaultChecked"in v)continue;dt(e,a,null,f,i)}}for(a in v)f=v[a],a=="children"?b=f:a=="dangerouslySetInnerHTML"?p=f:a=="value"?_=f:a=="checked"?d=f:u&&typeof f!="function"||h[a]===f||dt(e,a,f,h[a],i);if(p)u||l&&(p.__html==l.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(l&&(e.innerHTML=""),Dn(t.type=="template"?e.content:e,Ot(b)?b:[b],t,n,r,m=="foreignObject"?"http://www.w3.org/1999/xhtml":i,o,s,o?o[0]:n.__k&&tt(n,0),u,c),o!=null)for(a=o.length;a--;)ce(o[a]);u||(a="value",m=="progress"&&_==null?e.removeAttribute("value"):_!=null&&(_!==e[a]||m=="progress"&&!_||m=="option"&&_!=h[a])&&dt(e,a,_,h[a],i),a="checked",d!=null&&d!=e[a]&&dt(e,a,d,h[a],i))}return e}function pe(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(i){g.__e(i,n)}}function Wn(e,t,n){var r,i;if(g.unmount&&g.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||pe(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){g.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Wn(r[i],t,n||typeof e.type!="function");n||ce(e.__e),e.__c=e.__=e.__e=void 0}function ui(e,t,n){return this.constructor(e,n)}function ai(e,t,n){var r,i,o,s;t==document&&(t=document.documentElement),g.__&&g.__(e,t),i=(r=!1)?null:t.__k,o=[],s=[],le(t,e=t.__k=Fn(It,null,[e]),i||rt,rt,t.namespaceURI,i?null:t.firstChild?Tt.call(t.childNodes):null,o,i?i.__e:t.firstChild,r,s),Bn(o,e,s)}Tt=Rn.slice,g={__e:function(e,t,n,r){for(var i,o,s;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),s=i.__d),s)return i.__E=i}catch(u){e=u}throw e}},Ln=0,vt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=R({},this.state),typeof e=="function"&&(e=e(R({},n),this.props)),e&&R(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Pe(this))},vt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Pe(this))},vt.prototype.render=It,V=[],Mn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Hn=function(e,t){return e.__v.__b-t.__v.__b},gt.__r=0,Nn=/(PointerCapture)$|Capture$/i,ae=0,Wt=je(!1),Vt=je(!0);var Vn=function(e,t,n,r){var i;t[0]=0;for(var o=1;o<t.length;o++){var s=t[o++],u=t[o]?(t[0]|=s?1:2,n[t[o++]]):t[++o];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[t[++o]]=u:s===6?r[1][t[++o]]+=u+"":s?(i=e.apply(u,Vn(e,u,n,["",null])),r.push(i),u[0]?t[0]|=2:(t[o-2]=0,t[o]=i)):r.push(u)}return r},Ae=new Map;function ci(e){var t=Ae.get(this);return t||(t=new Map,Ae.set(this,t)),(t=Vn(this,t.get(e)||(t.set(e,t=(function(n){for(var r,i,o=1,s="",u="",c=[0],a=function(b){o===1&&(b||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,b,s):o===3&&(b||s)?(c.push(3,b,s),o=2):o===2&&s==="..."&&b?c.push(4,b,0):o===2&&s&&!b?c.push(5,0,!0,s):o>=5&&((s||!b&&o===5)&&(c.push(o,0,s,i),o=6),b&&(c.push(o,b,0,i),o=6)),s=""},p=0;p<n.length;p++){p&&(o===1&&a(),a(p));for(var l=0;l<n[p].length;l++)r=n[p][l],o===1?r==="<"?(a(),c=[c],o=3):s+=r:o===4?s==="--"&&r===">"?(o=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(a(),o=1):o&&(r==="="?(o=5,i=s,s=""):r==="/"&&(o<5||n[p][l+1]===">")?(a(),o===3&&(c=c[0]),o=c,(c=c[0]).push(2,0,o),o=0):r===" "||r==="	"||r===`
`||r==="\r"?(a(),o=2):s+=r),o===3&&s==="!--"&&(o=4,c=c[0])}return a(),c})(e)),t),arguments,[])).length>1?t:t[0]}var A=ci.bind(Fn),ot,S,Rt,Le,it=0,Yn=[],$=g,Me=$.__b,He=$.__r,Ne=$.diffed,Re=$.__c,Fe=$.unmount,Ue=$.__;function fe(e,t){$.__h&&$.__h(S,e,it||t),it=0;var n=S.__H||(S.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function O(e){return it=1,li(Kn,e)}function li(e,t,n){var r=fe(ot++,2);if(r.t=e,!r.__c&&(r.__=[Kn(void 0,t),function(u){var c=r.__N?r.__N[0]:r.__[0],a=r.t(c,u);c!==a&&(r.__N=[a,r.__[1]],r.__c.setState({}))}],r.__c=S,!S.__f)){var i=function(u,c,a){if(!r.__c.__H)return!0;var p=r.__c.__H.__.filter(function(b){return!!b.__c});if(p.every(function(b){return!b.__N}))return!o||o.call(this,u,c,a);var l=r.__c.props!==u;return p.forEach(function(b){if(b.__N){var f=b.__[0];b.__=b.__N,b.__N=void 0,f!==b.__[0]&&(l=!0)}}),o&&o.call(this,u,c,a)||l};S.__f=!0;var o=S.shouldComponentUpdate,s=S.componentWillUpdate;S.componentWillUpdate=function(u,c,a){if(this.__e){var p=o;o=void 0,i(u,c,a),o=p}s&&s.call(this,u,c,a)},S.shouldComponentUpdate=i}return r.__N||r.__}function pi(e,t){var n=fe(ot++,3);!$.__s&&Jn(n.__H,t)&&(n.__=e,n.u=t,S.__H.__h.push(n))}function fi(e){return it=5,Gn(function(){return{current:e}},[])}function Gn(e,t){var n=fe(ot++,7);return Jn(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function di(e,t){return it=8,Gn(function(){return e},t)}function bi(){for(var e;e=Yn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(_t),e.__H.__h.forEach(Gt),e.__H.__h=[]}catch(t){e.__H.__h=[],$.__e(t,e.__v)}}$.__b=function(e){S=null,Me&&Me(e)},$.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ue&&Ue(e,t)},$.__r=function(e){He&&He(e),ot=0;var t=(S=e.__c).__H;t&&(Rt===S?(t.__h=[],S.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(_t),t.__h.forEach(Gt),t.__h=[],ot=0)),Rt=S},$.diffed=function(e){Ne&&Ne(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Yn.push(t)!==1&&Le===$.requestAnimationFrame||((Le=$.requestAnimationFrame)||hi)(bi)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),Rt=S=null},$.__c=function(e,t){t.some(function(n){try{n.__h.forEach(_t),n.__h=n.__h.filter(function(r){return!r.__||Gt(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],$.__e(r,n.__v)}}),Re&&Re(e,t)},$.unmount=function(e){Fe&&Fe(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{_t(r)}catch(i){t=i}}),n.__H=void 0,t&&$.__e(t,n.__v))};var De=typeof requestAnimationFrame=="function";function hi(e){var t,n=function(){clearTimeout(r),De&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);De&&(t=requestAnimationFrame(n))}function _t(e){var t=S,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),S=t}function Gt(e){var t=S;e.__c=e.__(),S=t}function Jn(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Kn(e,t){return typeof t=="function"?t(e):t}function wt(e,t){var n=O(t),r=n[0],i=n[1],o=fi(e);return pi(function(){var s=o.current.subscribe(i);return function(){return s.unsubscribe()}}),r}var Jt=function(e,t){return Jt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Jt(e,t)};function kt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Jt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function Kt(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Qt(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],s;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(u){s={error:u}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function Zt(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function F(e){return typeof e=="function"}function Qn(e){var t=function(r){Error.call(r),r.stack=new Error().stack},n=e(t);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Ft=Qn(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function Xt(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var Pt=(function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,n,r,i,o;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=Kt(s),c=u.next();!c.done;c=u.next()){var a=c.value;a.remove(this)}}catch(d){t={error:d}}finally{try{c&&!c.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}else s.remove(this);var p=this.initialTeardown;if(F(p))try{p()}catch(d){o=d instanceof Ft?d.errors:[d]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var b=Kt(l),f=b.next();!f.done;f=b.next()){var _=f.value;try{ze(_)}catch(d){o=o??[],d instanceof Ft?o=Zt(Zt([],Qt(o)),Qt(d.errors)):o.push(d)}}}catch(d){r={error:d}}finally{try{f&&!f.done&&(i=b.return)&&i.call(b)}finally{if(r)throw r.error}}}if(o)throw new Ft(o)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)ze(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}},e.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},e.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},e.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&Xt(n,t)},e.prototype.remove=function(t){var n=this._finalizers;n&&Xt(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=(function(){var t=new e;return t.closed=!0,t})(),e})(),Zn=Pt.EMPTY;function Xn(e){return e instanceof Pt||e&&"closed"in e&&F(e.remove)&&F(e.add)&&F(e.unsubscribe)}function ze(e){F(e)?e():e.unsubscribe()}var mi={Promise:void 0},vi={setTimeout:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,Zt([e,t],Qt(n)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function _i(e){vi.setTimeout(function(){throw e})}function Be(){}function yt(e){e()}var tr=(function(e){kt(t,e);function t(n){var r=e.call(this)||this;return r.isStopped=!1,n?(r.destination=n,Xn(n)&&n.add(r)):r.destination=wi,r}return t.create=function(n,r,i){return new te(n,r,i)},t.prototype.next=function(n){this.isStopped||this._next(n)},t.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t})(Pt),yi=(function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){bt(r)}},e.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){bt(r)}else bt(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){bt(n)}},e})(),te=(function(e){kt(t,e);function t(n,r,i){var o=e.call(this)||this,s;return F(n)||!n?s={next:n??void 0,error:r??void 0,complete:i??void 0}:s=n,o.destination=new yi(s),o}return t})(tr);function bt(e){_i(e)}function gi(e){throw e}var wi={closed:!0,next:Be,error:gi,complete:Be},xi=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function Si(e){return e}function $i(e){return e.length===0?Si:e.length===1?e[0]:function(n){return e.reduce(function(r,i){return i(r)},n)}}var qe=(function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(t,n,r){var i=this,o=Ti(t)?t:new te(t,n,r);return yt(function(){var s=i,u=s.operator,c=s.source;o.add(u?u.call(o,c):c?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},e.prototype.forEach=function(t,n){var r=this;return n=We(n),new n(function(i,o){var s=new te({next:function(u){try{t(u)}catch(c){o(c),s.unsubscribe()}},error:o,complete:i});r.subscribe(s)})},e.prototype._subscribe=function(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)},e.prototype[xi]=function(){return this},e.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return $i(t)(this)},e.prototype.toPromise=function(t){var n=this;return t=We(t),new t(function(r,i){var o;n.subscribe(function(s){return o=s},function(s){return i(s)},function(){return r(o)})})},e.create=function(t){return new e(t)},e})();function We(e){var t;return(t=e??mi.Promise)!==null&&t!==void 0?t:Promise}function Ei(e){return e&&F(e.next)&&F(e.error)&&F(e.complete)}function Ti(e){return e&&e instanceof tr||Ei(e)&&Xn(e)}var Oi=Qn(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),de=(function(e){kt(t,e);function t(){var n=e.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return t.prototype.lift=function(n){var r=new Ve(this,this);return r.operator=n,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new Oi},t.prototype.next=function(n){var r=this;yt(function(){var i,o;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=Kt(r.currentObservers),u=s.next();!u.done;u=s.next()){var c=u.value;c.next(n)}}catch(a){i={error:a}}finally{try{u&&!u.done&&(o=s.return)&&o.call(s)}finally{if(i)throw i.error}}}})},t.prototype.error=function(n){var r=this;yt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},t.prototype.complete=function(){var n=this;yt(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(n){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,n)},t.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},t.prototype._innerSubscribe=function(n){var r=this,i=this,o=i.hasError,s=i.isStopped,u=i.observers;return o||s?Zn:(this.currentObservers=null,u.push(n),new Pt(function(){r.currentObservers=null,Xt(u,n)}))},t.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,o=r.thrownError,s=r.isStopped;i?n.error(o):s&&n.complete()},t.prototype.asObservable=function(){var n=new qe;return n.source=this,n},t.create=function(n,r){return new Ve(n,r)},t})(qe),Ve=(function(e){kt(t,e);function t(n,r){var i=e.call(this)||this;return i.destination=n,i.source=r,i}return t.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},t.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},t.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},t.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:Zn},t})(de),er=4,nr=new de,rr=nr.asObservable();function or(){return er}function Q(e){er=e,nr.next(e)}var ir="initial",sr=new de,ur=sr.asObservable();function ar(){return ir}function q(e){ir=e,sr.next(e)}var cr=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Ye=G(Ge||(Ge=cr([`
	height: 95%;
	display: grid;
	place-content: space-evenly;
`],[`
	height: 95%;
	display: grid;
	place-content: space-evenly;
`])));function lt(e){var t=e.title,n=e.children;return A(Je||(Je=cr([`
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
	`])),t,Ye,n[0],n[1],Ye,n[2])}var Ge,Je,Ii=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function ki(){var e=O("I'm an input !"),t=e[0],n=e[1],r=`&lt;crumbs-input
	value="`.concat(t,`"&gt;
&lt;/crumbs-input&gt;`);return A(Ke||(Ke=Ii([`
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
	`])),lt,t,function(i){return n(i.originalTarget.value)},t,function(i){return n(i.originalTarget.value)},{__html:r})}var Ke,Pi=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function Ci(){var e=O("I'm a <b>paragraph</b> !"),t=e[0],n=e[1];return A(Qe||(Qe=Pi([`
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
	`])),lt,{__html:t},t,function(r){return n(r.originalTarget.value)},{__html:"&lt;crumbs-p&gt; ".concat(t," &lt;/crumbs-p&gt;")})}var Qe,ji=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Ai=function(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function u(p){try{a(r.next(p))}catch(l){s(l)}}function c(p){try{a(r.throw(p))}catch(l){s(l)}}function a(p){p.done?o(p.value):i(p.value).then(u,c)}a((r=r.apply(e,t||[])).next())})},Li=function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=u(0),s.throw=u(1),s.return=u(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(a){return function(p){return c([a,p])}}function c(a){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(n=0)),n;)try{if(r=1,i&&(o=a[0]&2?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[a[0]&2,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return n.label++,{value:a[1],done:!1};case 5:n.label++,i=a[1],a=[0];continue;case 7:a=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1],o=a;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(a);break}o[2]&&n.ops.pop(),n.trys.pop();continue}a=t.call(e,n)}catch(p){a=[6,p],i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};function Mi(){var e=this,t=O("I'm a panel !"),n=t[0],r=t[1],i=O(""),o=i[0],s=i[1],u=O("100"),c=u[0],a=u[1],p=O(!1),l=p[0],b=p[1],f=`&lt;crumbs-panel
	panel-title="`.concat(o,`"
	panel-loading="`).concat(c,`"&gt;
	`).concat(n,`
&lt;/crumbs-panel&gt;`),_=di(function(){return Ai(e,void 0,void 0,function(){var h;return Li(this,function(v){switch(v.label){case 0:if(l)return[2];b(!0),a("0"),h=0,v.label=1;case 1:return h<=100?[4,new Promise(function(m){return setTimeout(m,10)})]:[3,4];case 2:v.sent(),a(Math.floor(h).toString()),v.label=3;case 3:return h+=.1+(100-h)/100,[3,1];case 4:return a("100"),b(!1),[2]}})})},[l]),d=function(){l||_()};return A(Ze||(Ze=ji([`
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
	`])),lt,c,o,n,o,function(h){return s(h.originalTarget.value)},n,function(h){return r(h.originalTarget.value)},c,function(h){return a(String(h.target.value))},d,{__html:f})}var Ze,Hi=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function Ni(){var e=O("Tab content"),t=e[0],n=e[1],r=O("Tab title"),i=r[0],o=r[1],s=O("Tab content 2"),u=s[0],c=s[1],a=O("Tab title 2"),p=a[0],l=a[1],b=`&lt;crumbs-tabs&gt;
	&lt;crumbs-p
		slot="title-1"&gt;
		`.concat(i,`
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
&lt;/crumbs-panel&gt;`);return A(Xe||(Xe=Hi([`
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
	`])),lt,i,t,p,u,i,function(f){return o(f.originalTarget.value)},t,function(f){return n(f.originalTarget.value)},p,function(f){return l(f.originalTarget.value)},u,function(f){return c(f.originalTarget.value)},{__html:b})}var Xe,Ri=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function Fi(){return A(tn||(tn=Ri([`
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
	`])))}var tn,Ut=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function Ui(){var e=wt(rr,or),t=wt(ur,ar),n=G(en||(en=Ut([`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`],[`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`]))),r=G(nn||(nn=Ut([`
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
	`])));return A(rn||(rn=Ut([`
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
	`])),n,r,e===1,function(){return Q(1)},e===2,function(){return Q(2)},e===3,function(){return Q(3)},e===4,function(){return Q(4)},e===5,function(){return Q(5)},e===6,function(){return Q(6)},r,t==="initial",function(){return q("initial")},t==="monospace",function(){return q("monospace")},t==="serif",function(){return q("serif")},t==="sans-serif",function(){return q("sans-serif")},t==="cursive",function(){return q("cursive")},t==="fantasy",function(){return q("fantasy")},t==="system-ui",function(){return q("system-ui")})}var en,nn,rn,Di=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function zi(){var e="&lt;crumbs-p&gt; Hello world ! &lt;/crumbs-p&gt;";return A(on||(on=Di([`
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
	`])),{__html:e})}var on,Bi=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function qi(){var e=O("Click me !"),t=e[0],n=e[1],r=O("100"),i=r[0],o=r[1],s=O(!1),u=s[0],c=s[1],a=`
		&lt;crumbs-button
			`.concat(u?"	disabled":"",`
				progress="`).concat(i,`"&gt;
				`).concat(t,`
		&lt;/crumbs-button&gt;
	`);return A(sn||(sn=Bi([`
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
	`])),lt,i,u,t,t,function(p){return n(p.originalTarget.value)},i,function(p){return o(String(p.target.value))},function(){return c(!u)},{__html:a})}var sn;function Wi(){const e=wt(rr,or),t=wt(ur,ar),n=G`
		background-image: url('bg${e}.jpg');
		background-size: cover;
		min-height: 100vh;
		position: fixed;
		min-width: 100vw;
		background-position: center;
	`,r=G`
		display: grid;
		overflow-y: scroll;
		height: 100vh;
		grid-template-columns: repeat(auto-fit, minmax(max(28rem + 6vw), 1fr));
		font-family: ${t};
	`;return A`
		<div class=${n}></div>

		<div class=${r}>
			<${Fi}><//>
			<${zi}><//>
			<${Ui}><//>
			<${Ci}><//>
			<${Mi}><//>
			<${ki}><//>
			<${Ni}><//>
			<${qi}><//>
		</div>
	`}ai(A`<${Wi}><//>`,document.body);
