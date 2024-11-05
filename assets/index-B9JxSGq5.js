var yr=Object.defineProperty;var gr=(t,e,n)=>e in t?yr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var w=(t,e,n)=>gr(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function It(t){for(var e,n,r=arguments,o=1,i="",s="",u=[0],a=function(c){o===1&&(c||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(c?r[c]:i):o===3&&(c||i)?(u[1]=c?r[c]:i,o=2):o===2&&i==="..."&&c?u[2]=Object.assign(u[2]||{},r[c]):o===2&&i&&!c?(u[2]=u[2]||{})[i]=!0:o>=5&&(o===5?((u[2]=u[2]||{})[n]=c?i?i+r[c]:r[c]:i,o=6):(c||i)&&(u[2][n]+=c?i+r[c]:i)),i=""},l=0;l<t.length;l++){l&&(o===1&&a(),a(l));for(var p=0;p<t[l].length;p++)e=t[l][p],o===1?e==="<"?(a(),u=[u,"",null],o=3):i+=e:o===4?i==="--"&&e===">"?(o=1,i=""):i=e+i[0]:s?e===s?s="":i+=e:e==='"'||e==="'"?s=e:e===">"?(a(),o=1):o&&(e==="="?(o=5,n=i,i=""):e==="/"&&(o<5||t[l][p+1]===">")?(a(),o===3&&(u=u[0]),o=u,(u=u[0]).push(this.apply(null,o.slice(1))),o=0):e===" "||e==="	"||e===`
`||e==="\r"?(a(),o=2):i+=e),o===3&&i==="!--"&&(o=4,u=u[0])}return a(),u.length>2?u.slice(1):u[1]}function wr(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function xr(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var o=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return t[r]}})}),n}var ln={exports:{}};/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */var Sr=function(e){var n=String.prototype.split,r=/()??/.exec("")[1]===e,o;return o=function(i,c,u){if(Object.prototype.toString.call(c)!=="[object RegExp]")return n.call(i,c,u);var a=[],l=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.extended?"x":"")+(c.sticky?"y":""),p=0,c=new RegExp(c.source,l+"g"),d,f,h,b;for(i+="",r||(d=new RegExp("^"+c.source+"$(?!\\s)",l)),u=u===e?-1>>>0:u>>>0;(f=c.exec(i))&&(h=f.index+f[0].length,!(h>p&&(a.push(i.slice(p,f.index)),!r&&f.length>1&&f[0].replace(d,function(){for(var m=1;m<arguments.length-2;m++)arguments[m]===e&&(f[m]=e)}),f.length>1&&f.index<i.length&&Array.prototype.push.apply(a,f.slice(1)),b=f[0].length,p=h,a.length>=u)));)c.lastIndex===f.index&&c.lastIndex++;return p===i.length?(b||!c.test(""))&&a.push(""):a.push(i.slice(p)),a.length>u?a.slice(0,u):a},o}(),$r=[].indexOf,Ir=function(t,e){if($r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1},jt=Ir,Er=Tr;function Tr(t){var e=t.classList;if(e)return e;var n={add:r,remove:o,contains:i,toggle:s,toString:u,length:0,item:a};return n;function r(c){var d=l();jt(d,c)>-1||(d.push(c),p(d))}function o(c){var d=l(),f=jt(d,c);f!==-1&&(d.splice(f,1),p(d))}function i(c){return jt(l(),c)>-1}function s(c){return i(c)?(o(c),!1):(r(c),!0)}function u(){return t.className}function a(c){var d=l();return d[c]||null}function l(){var c=t.className;return kr(c.split(" "),Or)}function p(c){var d=c.length;t.className=c.join(" "),n.length=d;for(var f=0;f<c.length;f++)n[f]=c[f];delete c[d]}}function kr(t,e){for(var n=[],r=0;r<t.length;r++)e(t[r])&&n.push(t[r]);return n}function Or(t){return!!t}const Pr={},Cr=Object.freeze(Object.defineProperty({__proto__:null,default:Pr},Symbol.toStringTag,{value:"Module"})),Ar=xr(Cr);var jr=Sr,Lr=Er,pn=typeof window>"u"?Ar:window,et=pn.document,Mr=pn.Text;function fn(){var t=[];function e(){var n=[].slice.call(arguments),r=null;function o(i){var s;function u(c){var d=jr(c,/([\.#]?[^\s#.]+)/);/^\.|#/.test(d[1])&&(r=et.createElement("div")),me(d,function(f){var h=f.substring(1,f.length);f&&(r?f[0]==="."?Lr(r).add(h):f[0]==="#"&&r.setAttribute("id",h):r=et.createElement(f))})}if(i!=null){if(typeof i=="string")r?r.appendChild(s=et.createTextNode(i)):u(i);else if(typeof i=="number"||typeof i=="boolean"||i instanceof Date||i instanceof RegExp)r.appendChild(s=et.createTextNode(i.toString()));else if(Nr(i))me(i,o);else if(Lt(i))r.appendChild(s=i);else if(i instanceof Mr)r.appendChild(s=i);else if(typeof i=="object")for(var a in i)if(typeof i[a]=="function")/^on\w+/.test(a)?function(c,d){r.addEventListener?(r.addEventListener(c.substring(2),d[c],!1),t.push(function(){r.removeEventListener(c.substring(2),d[c],!1)})):(r.attachEvent(c,d[c]),t.push(function(){r.detachEvent(c,d[c])}))}(a,i):(r[a]=i[a](),t.push(i[a](function(c){r[a]=c})));else if(a==="style")if(typeof i[a]=="string")r.style.cssText=i[a];else for(var l in i[a])(function(c,d){if(typeof d=="function")r.style.setProperty(c,d()),t.push(d(function(h){r.style.setProperty(c,h)}));else var f=i[a][c].match(/(.*)\W+!important\W*$/);f?r.style.setProperty(c,f[1],"important"):r.style.setProperty(c,i[a][c])})(l,i[a][l]);else if(a==="attrs")for(var p in i[a])r.setAttribute(p,i[a][p]);else a.substr(0,5)==="data-"?r.setAttribute(a,i[a]):r[a]=i[a];else if(typeof i=="function"){var p=i();r.appendChild(s=Lt(p)?p:et.createTextNode(p)),t.push(i(function(d){Lt(d)&&s.parentElement?(s.parentElement.replaceChild(d,s),s=d):s.textContent=d}))}}return s}for(;n.length;)o(n.shift());return r}return e.cleanup=function(){for(var n=0;n<t.length;n++)t[n]();t.length=0},e}var Hr=ln.exports=fn();Hr.context=fn;function Lt(t){return t&&t.nodeName&&t.nodeType}function me(t,e){if(t.forEach)return t.forEach(e);for(var n=0;n<t.length;n++)e(t[n],n)}function Nr(t){return Object.prototype.toString.call(t)=="[object Array]"}var Dr=ln.exports;const ot=wr(Dr);function M(t){if(!t.shadowRoot)throw new Error("There is no shadow root on the element !");return t.shadowRoot}function st(t){const e=Array.isArray(t)?t:[t],n=document.createElement("template");return n.innerHTML=e.map(r=>r.outerHTML).join(""),n}var Ut=function(t,e){return Ut=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},Ut(t,e)};function V(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Ut(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function Rr(t,e,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function u(p){try{l(r.next(p))}catch(c){s(c)}}function a(p){try{l(r.throw(p))}catch(c){s(c)}}function l(p){p.done?i(p.value):o(p.value).then(u,a)}l((r=r.apply(t,e||[])).next())})}function dn(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=u(0),s.throw=u(1),s.return=u(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(l){return function(p){return a([l,p])}}function a(l){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,l[0]&&(n=0)),n;)try{if(r=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,o=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(p){l=[6,p],o=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Z(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function H(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,i=[],s;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return i}function B(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}function Q(t){return this instanceof Q?(this.v=t,this):new Q(t)}function Fr(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(f){return function(h){return Promise.resolve(h).then(f,c)}}function u(f,h){r[f]&&(o[f]=function(b){return new Promise(function(m,v){i.push([f,b,m,v])>1||a(f,b)})},h&&(o[f]=h(o[f])))}function a(f,h){try{l(r[f](h))}catch(b){d(i[0][3],b)}}function l(f){f.value instanceof Q?Promise.resolve(f.value.v).then(p,c):d(i[0][2],f)}function p(f){a("next",f)}function c(f){a("throw",f)}function d(f,h){f(h),i.shift(),i.length&&a(i[0][0],i[0][1])}}function Ur(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof Z=="function"?Z(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=t[i]&&function(s){return new Promise(function(u,a){s=t[i](s),o(u,a,s.done,s.value)})}}function o(i,s,u,a){Promise.resolve(a).then(function(l){i({value:l,done:u})},s)}}function _(t){return typeof t=="function"}function ne(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Mt=ne(function(t){return function(n){t(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function xt(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var ut=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=Z(s),a=u.next();!a.done;a=u.next()){var l=a.value;l.remove(this)}}catch(b){e={error:b}}finally{try{a&&!a.done&&(n=u.return)&&n.call(u)}finally{if(e)throw e.error}}else s.remove(this);var p=this.initialTeardown;if(_(p))try{p()}catch(b){i=b instanceof Mt?b.errors:[b]}var c=this._finalizers;if(c){this._finalizers=null;try{for(var d=Z(c),f=d.next();!f.done;f=d.next()){var h=f.value;try{ve(h)}catch(b){i=i??[],b instanceof Mt?i=B(B([],H(i)),H(b.errors)):i.push(b)}}}catch(b){r={error:b}}finally{try{f&&!f.done&&(o=d.return)&&o.call(d)}finally{if(r)throw r.error}}}if(i)throw new Mt(i)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)ve(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&xt(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&xt(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),bn=ut.EMPTY;function hn(t){return t instanceof ut||t&&"closed"in t&&_(t.remove)&&_(t.add)&&_(t.unsubscribe)}function ve(t){_(t)?t():t.unsubscribe()}var mn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},vn={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,B([t,e],H(n)))},clearTimeout:function(t){var e=vn.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function _n(t){vn.setTimeout(function(){throw t})}function zt(){}function mt(t){t()}var re=function(t){V(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,hn(n)&&n.add(r)):r.destination=Wr,r}return e.create=function(n,r,o){return new Bt(n,r,o)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(ut),zr=Function.prototype.bind;function Ht(t,e){return zr.call(t,e)}var Br=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){ft(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){ft(r)}else ft(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){ft(n)}},t}(),Bt=function(t){V(e,t);function e(n,r,o){var i=t.call(this)||this,s;if(_(n)||!n)s={next:n??void 0,error:r??void 0,complete:o??void 0};else{var u;i&&mn.useDeprecatedNextContext?(u=Object.create(n),u.unsubscribe=function(){return i.unsubscribe()},s={next:n.next&&Ht(n.next,u),error:n.error&&Ht(n.error,u),complete:n.complete&&Ht(n.complete,u)}):s=n}return i.destination=new Br(s),i}return e}(re);function ft(t){_n(t)}function Vr(t){throw t}var Wr={closed:!0,next:zt,error:Vr,complete:zt},ie=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function at(t){return t}function qr(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return yn(t)}function yn(t){return t.length===0?at:t.length===1?t[0]:function(n){return t.reduce(function(r,o){return o(r)},n)}}var E=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var o=this,i=Gr(e)?e:new Bt(e,n,r);return mt(function(){var s=o,u=s.operator,a=s.source;i.add(u?u.call(i,a):a?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=_e(n),new n(function(o,i){var s=new Bt({next:function(u){try{e(u)}catch(a){i(a),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[ie]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return yn(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=_e(e),new e(function(r,o){var i;n.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},t.create=function(e){return new t(e)},t}();function _e(t){var e;return(e=t??mn.Promise)!==null&&e!==void 0?e:Promise}function Yr(t){return t&&_(t.next)&&_(t.error)&&_(t.complete)}function Gr(t){return t&&t instanceof re||Yr(t)&&hn(t)}function Jr(t){return _(t==null?void 0:t.lift)}function k(t){return function(e){if(Jr(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function T(t,e,n,r,o){return new Kr(t,e,n,r,o)}var Kr=function(t){V(e,t);function e(n,r,o,i,s,u){var a=t.call(this,n)||this;return a.onFinalize=s,a.shouldUnsubscribe=u,a._next=r?function(l){try{r(l)}catch(p){n.error(p)}}:t.prototype._next,a._error=i?function(l){try{i(l)}catch(p){n.error(p)}finally{this.unsubscribe()}}:t.prototype._error,a._complete=o?function(){try{o()}catch(l){n.error(l)}finally{this.unsubscribe()}}:t.prototype._complete,a}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e}(re),Qr=ne(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),gn=function(t){V(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new ye(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new Qr},e.prototype.next=function(n){var r=this;mt(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=Z(r.currentObservers),u=s.next();!u.done;u=s.next()){var a=u.value;a.next(n)}}catch(l){o={error:l}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},e.prototype.error=function(n){var r=this;mt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var o=r.observers;o.length;)o.shift().error(n)}})},e.prototype.complete=function(){var n=this;mt(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,o=this,i=o.hasError,s=o.isStopped,u=o.observers;return i||s?bn:(this.currentObservers=null,u.push(n),new ut(function(){r.currentObservers=null,xt(u,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?n.error(i):s&&n.complete()},e.prototype.asObservable=function(){var n=new E;return n.source=this,n},e.create=function(n,r){return new ye(n,r)},e}(E),ye=function(t){V(e,t);function e(n,r){var o=t.call(this)||this;return o.destination=n,o.source=r,o}return e.prototype.next=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,n)},e.prototype.error=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&o!==void 0?o:bn},e}(gn),Zr={now:function(){return Date.now()},delegate:void 0},Xr=function(t){V(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(ut),ge={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setInterval.apply(void 0,B([t,e],H(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},ti=function(t){V(e,t);function e(n,r){var o=t.call(this,n,r)||this;return o.scheduler=n,o.work=r,o.pending=!1,o}return e.prototype.schedule=function(n,r){var o;if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=(o=this.id)!==null&&o!==void 0?o:this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,o){return o===void 0&&(o=0),ge.setInterval(n.flush.bind(n,this),o)},e.prototype.recycleAsyncId=function(n,r,o){if(o===void 0&&(o=0),o!=null&&this.delay===o&&this.pending===!1)return r;r!=null&&ge.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var o=this._execute(n,r);if(o)return o;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var o=!1,i;try{this.work(n)}catch(s){o=!0,i=s||new Error("Scheduled action threw falsy error")}if(o)return this.unsubscribe(),i},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,o=n.scheduler,i=o.actions;this.work=this.state=this.scheduler=null,this.pending=!1,xt(i,this),r!=null&&(this.id=this.recycleAsyncId(o,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(Xr),we=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=Zr.now,t}(),ei=function(t){V(e,t);function e(n,r){r===void 0&&(r=we.now);var o=t.call(this,n,r)||this;return o.actions=[],o._active=!1,o}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var o;this._active=!0;do if(o=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,o){for(;n=r.shift();)n.unsubscribe();throw o}},e}(we),wn=new ei(ti),ni=wn,xn=new E(function(t){return t.complete()});function Sn(t){return t&&_(t.schedule)}function oe(t){return t[t.length-1]}function $n(t){return _(oe(t))?t.pop():void 0}function Et(t){return Sn(oe(t))?t.pop():void 0}function ri(t,e){return typeof oe(t)=="number"?t.pop():e}var se=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function In(t){return _(t==null?void 0:t.then)}function En(t){return _(t[ie])}function Tn(t){return Symbol.asyncIterator&&_(t==null?void 0:t[Symbol.asyncIterator])}function kn(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function ii(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var On=ii();function Pn(t){return _(t==null?void 0:t[On])}function Cn(t){return Fr(this,arguments,function(){var n,r,o,i;return dn(this,function(s){switch(s.label){case 0:n=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,Q(n.read())];case 3:return r=s.sent(),o=r.value,i=r.done,i?[4,Q(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,Q(o)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function An(t){return _(t==null?void 0:t.getReader)}function N(t){if(t instanceof E)return t;if(t!=null){if(En(t))return oi(t);if(se(t))return si(t);if(In(t))return ui(t);if(Tn(t))return jn(t);if(Pn(t))return ai(t);if(An(t))return ci(t)}throw kn(t)}function oi(t){return new E(function(e){var n=t[ie]();if(_(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function si(t){return new E(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function ui(t){return new E(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,_n)})}function ai(t){return new E(function(e){var n,r;try{for(var o=Z(t),i=o.next();!i.done;i=o.next()){var s=i.value;if(e.next(s),e.closed)return}}catch(u){n={error:u}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}e.complete()})}function jn(t){return new E(function(e){li(t,e).catch(function(n){return e.error(n)})})}function ci(t){return jn(Cn(t))}function li(t,e){var n,r,o,i;return Rr(this,void 0,void 0,function(){var s,u;return dn(this,function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),n=Ur(t),a.label=1;case 1:return[4,n.next()];case 2:if(r=a.sent(),!!r.done)return[3,4];if(s=r.value,e.next(s),e.closed)return[2];a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return u=a.sent(),o={error:u},[3,11];case 6:return a.trys.push([6,,9,10]),r&&!r.done&&(i=n.return)?[4,i.call(n)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function U(t,e,n,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=e.schedule(function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(i),!o)return i}function Ln(t,e){return e===void 0&&(e=0),k(function(n,r){n.subscribe(T(r,function(o){return U(r,t,function(){return r.next(o)},e)},function(){return U(r,t,function(){return r.complete()},e)},function(o){return U(r,t,function(){return r.error(o)},e)}))})}function Mn(t,e){return e===void 0&&(e=0),k(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function pi(t,e){return N(t).pipe(Mn(e),Ln(e))}function fi(t,e){return N(t).pipe(Mn(e),Ln(e))}function di(t,e){return new E(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function bi(t,e){return new E(function(n){var r;return U(n,e,function(){r=t[On](),U(n,e,function(){var o,i,s;try{o=r.next(),i=o.value,s=o.done}catch(u){n.error(u);return}s?n.complete():n.next(i)},0,!0)}),function(){return _(r==null?void 0:r.return)&&r.return()}})}function Hn(t,e){if(!t)throw new Error("Iterable cannot be null");return new E(function(n){U(n,e,function(){var r=t[Symbol.asyncIterator]();U(n,e,function(){r.next().then(function(o){o.done?n.complete():n.next(o.value)})},0,!0)})})}function hi(t,e){return Hn(Cn(t),e)}function mi(t,e){if(t!=null){if(En(t))return pi(t,e);if(se(t))return di(t,e);if(In(t))return fi(t,e);if(Tn(t))return Hn(t,e);if(Pn(t))return bi(t,e);if(An(t))return hi(t,e)}throw kn(t)}function Tt(t,e){return e?mi(t,e):N(t)}var Nn=ne(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function vi(t){return t instanceof Date&&!isNaN(t)}function $(t,e){return k(function(n,r){var o=0;n.subscribe(T(r,function(i){r.next(t.call(e,i,o++))}))})}var _i=Array.isArray;function yi(t,e){return _i(e)?t.apply(void 0,B([],H(e))):t(e)}function ue(t){return $(function(e){return yi(t,e)})}var gi=Array.isArray,wi=Object.getPrototypeOf,xi=Object.prototype,Si=Object.keys;function $i(t){if(t.length===1){var e=t[0];if(gi(e))return{args:e,keys:null};if(Ii(e)){var n=Si(e);return{args:n.map(function(r){return e[r]}),keys:n}}}return{args:t,keys:null}}function Ii(t){return t&&typeof t=="object"&&wi(t)===xi}function Ei(t,e){return t.reduce(function(n,r,o){return n[r]=e[o],n},{})}function Ti(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=Et(t),r=$n(t),o=$i(t),i=o.args,s=o.keys;if(i.length===0)return Tt([],n);var u=new E(Dn(i,n,s?function(a){return Ei(s,a)}:at));return r?u.pipe(ue(r)):u}function Dn(t,e,n){return n===void 0&&(n=at),function(r){xe(e,function(){for(var o=t.length,i=new Array(o),s=o,u=o,a=function(p){xe(e,function(){var c=Tt(t[p],e),d=!1;c.subscribe(T(r,function(f){i[p]=f,d||(d=!0,u--),u||r.next(n(i.slice()))},function(){--s||r.complete()}))},r)},l=0;l<o;l++)a(l)},r)}}function xe(t,e,n){t?U(n,t,e):e()}function ki(t,e,n,r,o,i,s,u){var a=[],l=0,p=0,c=!1,d=function(){c&&!a.length&&!l&&e.complete()},f=function(b){return l<r?h(b):a.push(b)},h=function(b){l++;var m=!1;N(n(b,p++)).subscribe(T(e,function(v){e.next(v)},function(){m=!0},void 0,function(){if(m)try{l--;for(var v=function(){var y=a.shift();s||h(y)};a.length&&l<r;)v();d()}catch(y){e.error(y)}}))};return t.subscribe(T(e,f,function(){c=!0,d()})),function(){}}function ae(t,e,n){return n===void 0&&(n=1/0),_(e)?ae(function(r,o){return $(function(i,s){return e(r,i,o,s)})(N(t(r,o)))},n):(typeof e=="number"&&(n=e),k(function(r,o){return ki(r,o,t,n)}))}function Rn(t){return t===void 0&&(t=1/0),ae(at,t)}function Oi(){return Rn(1)}function Se(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Oi()(Tt(t,Et(t)))}var Pi=["addListener","removeListener"],Ci=["addEventListener","removeEventListener"],Ai=["on","off"];function z(t,e,n,r){if(_(n)&&(r=n,n=void 0),r)return z(t,e,n).pipe(ue(r));var o=H(Mi(t)?Ci.map(function(u){return function(a){return t[u](e,a,n)}}):ji(t)?Pi.map($e(t,e)):Li(t)?Ai.map($e(t,e)):[],2),i=o[0],s=o[1];if(!i&&se(t))return ae(function(u){return z(u,e,n)})(N(t));if(!i)throw new TypeError("Invalid event target");return new E(function(u){var a=function(){for(var l=[],p=0;p<arguments.length;p++)l[p]=arguments[p];return u.next(1<l.length?l:l[0])};return i(a),function(){return s(a)}})}function $e(t,e){return function(n){return function(r){return t[n](e,r)}}}function ji(t){return _(t.addListener)&&_(t.removeListener)}function Li(t){return _(t.on)&&_(t.off)}function Mi(t){return _(t.addEventListener)&&_(t.removeEventListener)}function Fn(t,e,n){t===void 0&&(t=0),n===void 0&&(n=ni);var r=-1;return e!=null&&(Sn(e)?n=e:r=e),new E(function(o){var i=vi(t)?+t-n.now():t;i<0&&(i=0);var s=0;return n.schedule(function(){o.closed||(o.next(s++),0<=r?this.schedule(void 0,r):o.complete())},i)})}function Hi(t,e){return e===void 0&&(e=wn),Fn(t,t,e)}function Ni(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=Et(t),r=ri(t,1/0),o=t;return o.length?o.length===1?N(o[0]):Rn(r)(Tt(o,n)):xn}var Di=Array.isArray;function Ri(t){return t.length===1&&Di(t[0])?t[0]:t}function R(t,e){return k(function(n,r){var o=0;n.subscribe(T(r,function(i){return t.call(e,i,o++)&&r.next(i)}))})}function Un(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=$n(t);return n?qr(Un.apply(void 0,B([],H(t))),ue(n)):k(function(r,o){Dn(B([r],H(Ri(t))))(o)})}function dt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Un.apply(void 0,B([],H(t)))}function Fi(t){return k(function(e,n){var r=!1;e.subscribe(T(n,function(o){r=!0,n.next(o)},function(){r||n.next(t),n.complete()}))})}function Ui(t){return t<=0?function(){return xn}:k(function(e,n){var r=0;e.subscribe(T(n,function(o){++r<=t&&(n.next(o),t<=r&&n.complete())}))})}function Ie(t){return $(function(){return t})}function zi(t){return t===void 0&&(t=Bi),k(function(e,n){var r=!1;e.subscribe(T(n,function(o){r=!0,n.next(o)},function(){return r?n.complete():n.error(t())}))})}function Bi(){return new Nn}function Vi(t,e){var n=arguments.length>=2;return function(r){return r.pipe(at,Ui(1),n?Fi(e):zi(function(){return new Nn}))}}function Ee(){return k(function(t,e){var n,r=!1;t.subscribe(T(e,function(o){var i=n;n=o,r&&e.next([i,o]),r=!0}))})}function A(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=Et(t);return k(function(r,o){(n?Se(t,r,n):Se(t,r)).subscribe(o)})}function Wi(t,e){return k(function(n,r){var o=null,i=0,s=!1,u=function(){return s&&!o&&r.complete()};n.subscribe(T(r,function(a){o==null||o.unsubscribe();var l=0,p=i++;N(t(a,p)).subscribe(o=T(r,function(c){return r.next(e?e(a,c,p,l++):c)},function(){o=null,u()}))},function(){s=!0,u()}))})}function qi(t){return k(function(e,n){N(t).subscribe(T(n,function(){return n.complete()},zt)),!n.closed&&e.subscribe(n)})}function zn(){return!document.hidden}function Yi(){const t=z(document,"visibilitychange"),e=z(window,"focus").pipe(Ie(!0)),n=z(window,"blur").pipe(Ie(!1)),r=Ni(e,n);return Ti(t,r).pipe($(([,o])=>zn()&&o),R(o=>o),Vi())}const Gi=z(document,"mouseover");async function Ji(){zn()||await Promise.race([Yi().toPromise(),Gi.toPromise()])}async function Ki(){await new Promise(t=>setTimeout(t,400)),await Ji(),await new Promise(t=>setTimeout(t,400))}const Qi=Ki();function P(t,e){const n=t.querySelector(e);if(!n)throw new Error("Failed to find element ${ selector } !");return n}const Zi=It.bind(ot),Xi="crumbs-p",to=st(Zi`
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
`);let eo=class extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const e=M(this),n=to.content.cloneNode(!0);e.appendChild(n)}};customElements.define(Xi,eo);const no=It.bind(ot),ro="crumbs-panel",io=st(no`
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
`);class oo extends HTMLElement{constructor(){super(...arguments);w(this,"contentTimeoutElapsed",!1);w(this,"contentLoaded",!1);w(this,"connected",!1);w(this,"loading","100");w(this,"scrolled",!1);w(this,"scrolledSubscription",null)}static get observedAttributes(){return["panel-loading","panel-title"]}async connectedCallback(){this.attachShadow({mode:"open"}),await Qi;const n=M(this),r=io.content.cloneNode(!0);n.appendChild(r);const o=this.getAttribute("panel-loading");o!==null&&Te(o)&&(this.loading=o),setTimeout(()=>{const i=P(n,"#panel-container");i.style.gridTemplateColumns="1rem 1fr 1rem",i.style.gridTemplateRows="1rem 1fr 1rem";const s=P(n,"#panel");s.style.backgroundColor="#ffffff40",this.scrolledSubscription=z(s,"scroll").pipe($(u=>u.target.scrollTop),$(u=>u!==0)).subscribe(u=>{this.scrolled=u,this.render()}),this.render()},10),setTimeout(()=>{this.contentTimeoutElapsed=!0,this.render()},400),this.connected=!0,this.render()}render(){const n=M(this),r=P(n,"#panel-content"),o=P(n,"#panel-loading"),i=P(n,"#panel"),s=P(n,"#panel-title-content");this.contentTimeoutElapsed&&so(this.loading)?(r.style.visibility="visible",r.style.opacity="1",i.style.overflow="auto"):(r.style.visibility="collapse",r.style.opacity="0",i.style.overflow="hidden"),o.style.width=`${this.loading}%`;const u=P(n,"#panel-title");this.loading==="100"&&this.getAttribute("panel-title")&&!this.scrolled?setTimeout(()=>{u.style.opacity="1",s.innerHTML=this.getAttribute("panel-title")||"",r.style.paddingTop="2.5rem"},10):(r.style.paddingTop="inherit",u.style.opacity="0")}attributeChangedCallback(){if(this.shadowRoot&&this.connected){const n=this.getAttribute("panel-loading");n!==null&&Te(n)?this.loading=n:n===null&&(this.loading="100"),this.render()}}disconnectedCallback(){var n;(n=this.scrolledSubscription)==null||n.unsubscribe()}}function Te(t){const e=Number(t),n=Math.floor(e);return n===e&&Number.isInteger(n)&&Number.isFinite(n)&&n<=100&&n>=0}function so(t){return t===null||t==="100"}customElements.define(ro,oo);const uo=It.bind(ot),ao="crumbs-input",co=st(uo`
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
`);class lo extends HTMLElement{static get observedAttributes(){return["value"]}async connectedCallback(){this.attachShadow({mode:"open"});const e=M(this),n=co.content.cloneNode(!0);e.appendChild(n);const r=P(e,"input"),o=this.getAttribute("value");r instanceof HTMLInputElement&&o&&(r.value=o)}attributeChangedCallback(e,n,r){if(e==="value"&&this.shadowRoot){const o=M(this),i=P(o,"input");i instanceof HTMLInputElement&&(i.value=r)}}}customElements.define(ao,lo);const Vt=It.bind(ot),po="crumbs-tabs",fo=st(Vt`
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
`);class bo extends HTMLElement{constructor(){super(...arguments);w(this,"selected",1);w(this,"subscriptions",[])}async connectedCallback(){this.attachShadow({mode:"open"});const n=M(this),r=fo.content.cloneNode(!0);n.appendChild(r);const o=this.getAttribute("selected");this.selected=Number.parseInt(o||"1");const i=n.querySelector("#tabs"),s=n.querySelector("#content");if(!i)throw new Error("Tabs not found");if(!s)throw new Error("Content not found");for(const u of{[Symbol.iterator]:()=>this.getSlots()}){if(u.startsWith("content-")){const a=Vt`<div id=${`${u}`}> <slot name=${u}></slot> </div>`;a instanceof Element&&s.appendChild(a)}if(u.startsWith("title-")){const a=Vt`<div id=${u}> <crumbs-p> <slot name=${u}></slot> </crumbs-p> </div>`;a instanceof Element&&i.appendChild(a)}}this.subscriptions=[...i.children].map((u,a)=>z(u,"click").subscribe(()=>{const l=u.id.replace("title-","content-"),p=n.querySelector(`#${l}`);p instanceof HTMLElement&&s instanceof HTMLElement&&p.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.selected=a+1,this.render()})),this.render()}render(){const r=M(this).querySelector("#tabs");if(!r)throw new Error("Tabs not found");[...r.children].forEach((o,i)=>{i+1===this.selected?o instanceof HTMLElement&&o.classList.add("selected-title"):o instanceof HTMLElement&&o.classList.remove("selected-title")})}disconnectedCallback(){for(const n of this.subscriptions)n.unsubscribe()}*getSlots(){for(const n of Array.from(this.children)){const r=n.getAttribute("slot");r&&(yield r)}}}customElements.define(po,bo);var Bn=function(t,e,n,r){var o;e[0]=0;for(var i=1;i<e.length;i++){var s=e[i++],u=e[i]?(e[0]|=s?1:2,n[e[i++]]):e[++i];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[e[++i]]=u:s===6?r[1][e[++i]]+=u+"":s?(o=t.apply(u,Bn(t,u,n,["",null])),r.push(o),u[0]?e[0]|=2:(e[i-2]=0,e[i]=o)):r.push(u)}return r},ke=new Map;function ho(t){var e=ke.get(this);return e||(e=new Map,ke.set(this,e)),(e=Bn(this,e.get(t)||(e.set(t,e=function(n){for(var r,o,i=1,s="",u="",a=[0],l=function(d){i===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,d,s):i===3&&(d||s)?(a.push(3,d,s),i=2):i===2&&s==="..."&&d?a.push(4,d,0):i===2&&s&&!d?a.push(5,0,!0,s):i>=5&&((s||!d&&i===5)&&(a.push(i,0,s,o),i=6),d&&(a.push(i,d,0,o),i=6)),s=""},p=0;p<n.length;p++){p&&(i===1&&l(),l(p));for(var c=0;c<n[p].length;c++)r=n[p][c],i===1?r==="<"?(l(),a=[a],i=3):s+=r:i===4?s==="--"&&r===">"?(i=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(l(),i=1):i&&(r==="="?(i=5,o=s,s=""):r==="/"&&(i<5||n[p][c+1]===">")?(l(),i===3&&(a=a[0]),i=a,(a=a[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(l(),i=2):s+=r),i===3&&s==="!--"&&(i=4,a=a[0])}return l(),a}(t)),e),arguments,[])).length>1?e:e[0]}function mo(){return t=>t.pipe($(([e,n,r,o])=>!r||n!==100&&n!==0&&o!==null?!1:r<Number(o)||e))}function vo(){return t=>t.pipe($(([e,n,r])=>e||n||r>0&&r<100))}function Oe(){return 1e3}function _o(){return t=>t.pipe($(([e,n,r,o])=>{if(Number(r)-Oe()>n){const s=Number(r)-Oe(),u=Math.max(s,0),a=Math.ceil(n/u*100);return Math.min(100,a)}return o?100:e||0}))}const yo=ho.bind(ot),go="crumbs-button";class wo extends HTMLElement{constructor(){super();w(this,"_renderSubscription",null);w(this,"_clickSubscription",null);w(this,"_attributeChanges$",new gn);w(this,"_parsedProgress$");w(this,"_parsedDisabled$");w(this,"_parsedIndeterminateProgress$");w(this,"_parsedIndeterminateDurationMs$");w(this,"_indeterminedLoadingTime$");w(this,"_loading$");w(this,"_activeIndeterminateProgress$");w(this,"_disabled$");w(this,"_loadingBarTransitionEnabled$");this._parsedProgress$=this._attributeChanges$.pipe(R(([r])=>r==="progress"),$(([r,o])=>o),A(this.getAttribute("progress")),$(r=>r===null?null:Number(r)),R(r=>r===null||Number.isInteger(r)&&Number.isFinite(r)&&r<=100&&r>=0)),this._parsedDisabled$=this._attributeChanges$.pipe(R(([r])=>r==="disabled"),$(([r,o])=>o),A(this.getAttribute("disabled")),$(r=>r!==null&&r!=="false")),this._parsedIndeterminateProgress$=this._attributeChanges$.pipe(R(([r])=>r==="indeterminate-progress"),$(([r,o])=>o),A(this.getAttribute("indeterminate-progress")),$(r=>r!==null&&r!=="false")),this._parsedIndeterminateDurationMs$=this._attributeChanges$.pipe(R(([r])=>r==="indeterminate-duration-ms"),$(([r,o])=>o),A(this.getAttribute("indeterminate-duration-ms")),$(r=>r===null?null:Number(r)),R(r=>r===null||Number.isInteger(r)&&Number.isFinite(r)&&r>=0));const n=50;this._indeterminedLoadingTime$=this._parsedIndeterminateProgress$.pipe(A(!1),Ee(),R(([r,o])=>o&&!r),Wi(()=>Hi(n).pipe(qi(Fn(2e4*n)))),$(r=>r*n),A(0)),this._loading$=this._parsedProgress$.pipe(dt(this._indeterminedLoadingTime$,this._parsedIndeterminateDurationMs$,this._parsedIndeterminateProgress$),_o(),A(0)),this._activeIndeterminateProgress$=this._parsedIndeterminateProgress$.pipe(dt(this._loading$,this._indeterminedLoadingTime$,this._parsedIndeterminateDurationMs$),mo(),A(!1)),this._disabled$=this._parsedDisabled$.pipe(dt(this._activeIndeterminateProgress$,this._loading$),vo(),A(!1)),this._loadingBarTransitionEnabled$=this._loading$.pipe(Ee(),$(([r,o])=>o>=r),A(!1))}static get observedAttributes(){return["progress","disabled","indeterminate-progress","indeterminate-duration-ms"]}async connectedCallback(){this.attachShadow({mode:"open"}),M(this).appendChild(xo.content.cloneNode(!0)),this._renderSubscription=this._disabled$.pipe(dt(this._loading$,this._activeIndeterminateProgress$,this._loadingBarTransitionEnabled$)).subscribe(r=>{this.render(...r)}),this._attributeChanges$.next(["disabled",this.getAttribute("disabled")]),this._attributeChanges$.next(["progress",this.getAttribute("progress")]),this._attributeChanges$.next(["indeterminate-progress",this.getAttribute("indeterminate-progress")]),this._attributeChanges$.next(["indeterminate-duration-ms",this.getAttribute("indeterminate-duration-ms")])}attributeChangedCallback(n){this._attributeChanges$.next([n,this.getAttribute(n)])}render(n,r,o,i){if(!this.shadowRoot)return;const s=M(this),u=P(s,"#progress"),a=P(s,"button"),l=P(s,"progress");a instanceof HTMLButtonElement&&(a.disabled=n),o?(a.classList.remove("indeterminate-loading-end"),a.classList.add("indeterminate-loading")):(a.classList.add("indeterminate-loading-end"),setTimeout(()=>{a.classList.remove("indeterminate-loading")},500)),i?u.classList.add("transition"):u.classList.remove("transition"),u.style.width=`${r}%`,l instanceof HTMLProgressElement&&(l.value=r)}disconnectedCallback(){var n,r;(n=this._clickSubscription)==null||n.unsubscribe(),(r=this._renderSubscription)==null||r.unsubscribe()}}customElements.define(go,wo);const xo=st(yo`
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
`);let So={data:""},$o=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||So,Io=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Eo=/\/\*[^]*?\*\/|  +/g,Pe=/\n+/g,q=(t,e)=>{let n="",r="",o="";for(let i in t){let s=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+s+";":r+=i[1]=="f"?q(s,i):i+"{"+q(s,i[1]=="k"?"":e)+"}":typeof s=="object"?r+=q(s,e?e.replace(/([^,])+/g,u=>i.replace(/(^:.*)|([^,])+/g,a=>/&/.test(a)?a.replace(/&/g,u):u?u+" "+a:a)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=q.p?q.p(i,s):i+":"+s+";")}return n+(e&&o?e+"{"+o+"}":o)+r},j={},Vn=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+Vn(t[n]);return e}return t},To=(t,e,n,r,o)=>{let i=Vn(t),s=j[i]||(j[i]=(a=>{let l=0,p=11;for(;l<a.length;)p=101*p+a.charCodeAt(l++)>>>0;return"go"+p})(i));if(!j[s]){let a=i!==t?t:(l=>{let p,c,d=[{}];for(;p=Io.exec(l.replace(Eo,""));)p[4]?d.shift():p[3]?(c=p[3].replace(Pe," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][p[1]]=p[2].replace(Pe," ").trim();return d[0]})(t);j[s]=q(o?{["@keyframes "+s]:a}:a,n?"":"."+s)}let u=n&&j.g?j.g:null;return n&&(j.g=j[s]),((a,l,p,c)=>{c?l.data=l.data.replace(c,a):l.data.indexOf(a)===-1&&(l.data=p?a+l.data:l.data+a)})(j[s],e,r,u),s},ko=(t,e,n)=>t.reduce((r,o,i)=>{let s=e[i];if(s&&s.call){let u=s(n),a=u&&u.props&&u.props.className||/^go/.test(u)&&u;s=a?"."+a:u&&typeof u=="object"?u.props?"":q(u,""):u===!1?"":u}return r+o+(s??"")},"");function G(t){let e=this||{},n=t.call?t(e.p):t;return To(n.unshift?n.raw?ko(n,[].slice.call(arguments,1),e.p):n.reduce((r,o)=>Object.assign(r,o&&o.call?o(e.p):o),{}):n,$o(e.target),e.g,e.o,e.k)}G.bind({g:1});G.bind({k:1});var kt,g,Wn,Y,Ce,qn,Wt,ce,qt,Yt,nt={},Yn=[],Oo=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,le=Array.isArray;function F(t,e){for(var n in e)t[n]=e[n];return t}function Gn(t){var e=t.parentNode;e&&e.removeChild(t)}function Jn(t,e,n){var r,o,i,s={};for(i in e)i=="key"?r=e[i]:i=="ref"?o=e[i]:s[i]=e[i];if(arguments.length>2&&(s.children=arguments.length>3?kt.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)s[i]===void 0&&(s[i]=t.defaultProps[i]);return vt(t,s,r,o,null)}function vt(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Wn,__i:-1,__u:0};return o==null&&g.vnode!=null&&g.vnode(i),i}function Ot(t){return t.children}function _t(t,e){this.props=t,this.context=e}function J(t,e){if(e==null)return t.__?J(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?J(t):null}function Kn(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Kn(t)}}function Ae(t){(!t.__d&&(t.__d=!0)&&Y.push(t)&&!St.__r++||Ce!==g.debounceRendering)&&((Ce=g.debounceRendering)||qn)(St)}function St(){var t,e,n,r,o,i,s,u;for(Y.sort(Wt);t=Y.shift();)t.__d&&(e=Y.length,r=void 0,i=(o=(n=t).__v).__e,s=[],u=[],n.__P&&((r=F({},o)).__v=o.__v+1,g.vnode&&g.vnode(r),pe(n.__P,r,o,n.__n,n.__P.namespaceURI,32&o.__u?[i]:null,s,i??J(o),!!(32&o.__u),u),r.__v=o.__v,r.__.__k[r.__i]=r,Xn(s,r,u),r.__e!=i&&Kn(r)),Y.length>e&&Y.sort(Wt));St.__r=0}function Qn(t,e,n,r,o,i,s,u,a,l,p){var c,d,f,h,b,m=r&&r.__k||Yn,v=e.length;for(n.__d=a,Po(n,e,m),a=n.__d,c=0;c<v;c++)(f=n.__k[c])!=null&&typeof f!="boolean"&&typeof f!="function"&&(d=f.__i===-1?nt:m[f.__i]||nt,f.__i=c,pe(t,f,d,o,i,s,u,a,l,p),h=f.__e,f.ref&&d.ref!=f.ref&&(d.ref&&fe(d.ref,null,f),p.push(f.ref,f.__c||h,f)),b==null&&h!=null&&(b=h),65536&f.__u||d.__k===f.__k?(a&&!a.isConnected&&(a=J(d)),a=Zn(f,a,t)):typeof f.type=="function"&&f.__d!==void 0?a=f.__d:h&&(a=h.nextSibling),f.__d=void 0,f.__u&=-196609);n.__d=a,n.__e=b}function Po(t,e,n){var r,o,i,s,u,a=e.length,l=n.length,p=l,c=0;for(t.__k=[],r=0;r<a;r++)s=r+c,(o=t.__k[r]=(o=e[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?vt(null,o,null,null,null):le(o)?vt(Ot,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?vt(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,u=Co(o,n,s,p),o.__i=u,i=null,u!==-1&&(p--,(i=n[u])&&(i.__u|=131072)),i==null||i.__v===null?(u==-1&&c--,typeof o.type!="function"&&(o.__u|=65536)):u!==s&&(u===s+1?c++:u>s?p>a-s?c+=u-s:c--:u<s?u==s-1&&(c=u-s):c=0,u!==r+c&&(o.__u|=65536))):(i=n[s])&&i.key==null&&i.__e&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=J(i)),Gt(i,i,!1),n[s]=null,p--);if(p)for(r=0;r<l;r++)(i=n[r])!=null&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=J(i)),Gt(i,i))}function Zn(t,e,n){var r,o;if(typeof t.type=="function"){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,e=Zn(r[o],e,n));return e}t.__e!=e&&(n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function Co(t,e,n,r){var o=t.key,i=t.type,s=n-1,u=n+1,a=e[n];if(a===null||a&&o==a.key&&i===a.type&&!(131072&a.__u))return n;if(r>(a!=null&&!(131072&a.__u)?1:0))for(;s>=0||u<e.length;){if(s>=0){if((a=e[s])&&!(131072&a.__u)&&o==a.key&&i===a.type)return s;s--}if(u<e.length){if((a=e[u])&&!(131072&a.__u)&&o==a.key&&i===a.type)return u;u++}}return-1}function je(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Oo.test(e)?n:n+"px"}function bt(t,e,n,r,o){var i;t:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||je(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||je(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r?n.u=r.u:(n.u=ce,t.addEventListener(e,i?Yt:qt,i)):t.removeEventListener(e,i?Yt:qt,i);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e in t)try{t[e]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function Le(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=ce++;else if(e.t<n.u)return;return n(g.event?g.event(e):e)}}}function pe(t,e,n,r,o,i,s,u,a,l){var p,c,d,f,h,b,m,v,y,D,ct,tt,he,lt,At,O=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(a=!!(32&n.__u),i=[u=e.__e=n.__e]),(p=g.__b)&&p(e);t:if(typeof O=="function")try{if(v=e.props,y=(p=O.contextType)&&r[p.__c],D=p?y?y.props.value:p.__:r,n.__c?m=(c=e.__c=n.__c).__=c.__E:("prototype"in O&&O.prototype.render?e.__c=c=new O(v,D):(e.__c=c=new _t(v,D),c.constructor=O,c.render=jo),y&&y.sub(c),c.props=v,c.state||(c.state={}),c.context=D,c.__n=r,d=c.__d=!0,c.__h=[],c._sb=[]),c.__s==null&&(c.__s=c.state),O.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=F({},c.__s)),F(c.__s,O.getDerivedStateFromProps(v,c.__s))),f=c.props,h=c.state,c.__v=e,d)O.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(O.getDerivedStateFromProps==null&&v!==f&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(v,D),!c.__e&&(c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(v,c.__s,D)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(c.props=v,c.state=c.__s,c.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(pt){pt&&(pt.__=e)}),ct=0;ct<c._sb.length;ct++)c.__h.push(c._sb[ct]);c._sb=[],c.__h.length&&s.push(c);break t}c.componentWillUpdate!=null&&c.componentWillUpdate(v,c.__s,D),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(f,h,b)})}if(c.context=D,c.props=v,c.__P=t,c.__e=!1,tt=g.__r,he=0,"prototype"in O&&O.prototype.render){for(c.state=c.__s,c.__d=!1,tt&&tt(e),p=c.render(c.props,c.state,c.context),lt=0;lt<c._sb.length;lt++)c.__h.push(c._sb[lt]);c._sb=[]}else do c.__d=!1,tt&&tt(e),p=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++he<25);c.state=c.__s,c.getChildContext!=null&&(r=F(F({},r),c.getChildContext())),d||c.getSnapshotBeforeUpdate==null||(b=c.getSnapshotBeforeUpdate(f,h)),Qn(t,le(At=p!=null&&p.type===Ot&&p.key==null?p.props.children:p)?At:[At],e,n,r,o,i,s,u,a,l),c.base=e.__e,e.__u&=-161,c.__h.length&&s.push(c),m&&(c.__E=c.__=null)}catch(pt){e.__v=null,a||i!=null?(e.__e=u,e.__u|=a?160:32,i[i.indexOf(u)]=null):(e.__e=n.__e,e.__k=n.__k),g.__e(pt,e,n)}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Ao(n.__e,e,n,r,o,i,s,a,l);(p=g.diffed)&&p(e)}function Xn(t,e,n){e.__d=void 0;for(var r=0;r<n.length;r++)fe(n[r],n[++r],n[++r]);g.__c&&g.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){g.__e(i,o.__v)}})}function Ao(t,e,n,r,o,i,s,u,a){var l,p,c,d,f,h,b,m=n.props,v=e.props,y=e.type;if(y==="svg"?o="http://www.w3.org/2000/svg":y==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(l=0;l<i.length;l++)if((f=i[l])&&"setAttribute"in f==!!y&&(y?f.localName===y:f.nodeType===3)){t=f,i[l]=null;break}}if(t==null){if(y===null)return document.createTextNode(v);t=document.createElementNS(o,y,v.is&&v),i=null,u=!1}if(y===null)m===v||u&&t.data===v||(t.data=v);else{if(i=i&&kt.call(t.childNodes),m=n.props||nt,!u&&i!=null)for(m={},l=0;l<t.attributes.length;l++)m[(f=t.attributes[l]).name]=f.value;for(l in m)if(f=m[l],l!="children"){if(l=="dangerouslySetInnerHTML")c=f;else if(l!=="key"&&!(l in v)){if(l=="value"&&"defaultValue"in v||l=="checked"&&"defaultChecked"in v)continue;bt(t,l,null,f,o)}}for(l in v)f=v[l],l=="children"?d=f:l=="dangerouslySetInnerHTML"?p=f:l=="value"?h=f:l=="checked"?b=f:l==="key"||u&&typeof f!="function"||m[l]===f||bt(t,l,f,m[l],o);if(p)u||c&&(p.__html===c.__html||p.__html===t.innerHTML)||(t.innerHTML=p.__html),e.__k=[];else if(c&&(t.innerHTML=""),Qn(t,le(d)?d:[d],e,n,r,y==="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,s,i?i[0]:n.__k&&J(n,0),u,a),i!=null)for(l=i.length;l--;)i[l]!=null&&Gn(i[l]);u||(l="value",h!==void 0&&(h!==t[l]||y==="progress"&&!h||y==="option"&&h!==m[l])&&bt(t,l,h,m[l],o),l="checked",b!==void 0&&b!==t[l]&&bt(t,l,b,m[l],o))}return t}function fe(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){g.__e(r,n)}}function Gt(t,e,n){var r,o;if(g.unmount&&g.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||fe(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){g.__e(i,e)}r.base=r.__P=null}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&Gt(r[o],e,n||typeof t.type!="function");n||t.__e==null||Gn(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function jo(t,e,n){return this.constructor(t,n)}function Lo(t,e,n){var r,o,i,s;g.__&&g.__(t,e),o=(r=typeof n=="function")?null:e.__k,i=[],s=[],pe(e,t=(!r&&n||e).__k=Jn(Ot,null,[t]),o||nt,nt,e.namespaceURI,!r&&n?[n]:o?null:e.firstChild?kt.call(e.childNodes):null,i,!r&&n?n:o?o.__e:e.firstChild,r,s),Xn(i,t,s)}kt=Yn.slice,g={__e:function(t,e,n,r){for(var o,i,s;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),s=o.__d),s)return o.__E=o}catch(u){t=u}throw t}},Wn=0,_t.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=F({},this.state),typeof t=="function"&&(t=t(F({},n),this.props)),t&&F(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Ae(this))},_t.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Ae(this))},_t.prototype.render=Ot,Y=[],qn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Wt=function(t,e){return t.__v.__b-e.__v.__b},St.__r=0,ce=0,qt=Le(!1),Yt=Le(!0);var tr=function(t,e,n,r){var o;e[0]=0;for(var i=1;i<e.length;i++){var s=e[i++],u=e[i]?(e[0]|=s?1:2,n[e[i++]]):e[++i];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[e[++i]]=u:s===6?r[1][e[++i]]+=u+"":s?(o=t.apply(u,tr(t,u,n,["",null])),r.push(o),u[0]?e[0]|=2:(e[i-2]=0,e[i]=o)):r.push(u)}return r},Me=new Map;function Mo(t){var e=Me.get(this);return e||(e=new Map,Me.set(this,e)),(e=tr(this,e.get(t)||(e.set(t,e=function(n){for(var r,o,i=1,s="",u="",a=[0],l=function(d){i===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,d,s):i===3&&(d||s)?(a.push(3,d,s),i=2):i===2&&s==="..."&&d?a.push(4,d,0):i===2&&s&&!d?a.push(5,0,!0,s):i>=5&&((s||!d&&i===5)&&(a.push(i,0,s,o),i=6),d&&(a.push(i,d,0,o),i=6)),s=""},p=0;p<n.length;p++){p&&(i===1&&l(),l(p));for(var c=0;c<n[p].length;c++)r=n[p][c],i===1?r==="<"?(l(),a=[a],i=3):s+=r:i===4?s==="--"&&r===">"?(i=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(l(),i=1):i&&(r==="="?(i=5,o=s,s=""):r==="/"&&(i<5||n[p][c+1]===">")?(l(),i===3&&(a=a[0]),i=a,(a=a[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(l(),i=2):s+=r),i===3&&s==="!--"&&(i=4,a=a[0])}return l(),a}(t)),e),arguments,[])).length>1?e:e[0]}var C=Mo.bind(Jn),rt,x,Nt,He,it=0,er=[],yt=[],S=g,Ne=S.__b,De=S.__r,Re=S.diffed,Fe=S.__c,Ue=S.unmount,ze=S.__;function de(t,e){S.__h&&S.__h(x,t,it||e),it=0;var n=x.__H||(x.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:yt}),n.__[t]}function I(t){return it=1,Ho(ir,t)}function Ho(t,e,n){var r=de(rt++,2);if(r.t=t,!r.__c&&(r.__=[ir(void 0,e),function(u){var a=r.__N?r.__N[0]:r.__[0],l=r.t(a,u);a!==l&&(r.__N=[l,r.__[1]],r.__c.setState({}))}],r.__c=x,!x.u)){var o=function(u,a,l){if(!r.__c.__H)return!0;var p=r.__c.__H.__.filter(function(d){return!!d.__c});if(p.every(function(d){return!d.__N}))return!i||i.call(this,u,a,l);var c=!1;return p.forEach(function(d){if(d.__N){var f=d.__[0];d.__=d.__N,d.__N=void 0,f!==d.__[0]&&(c=!0)}}),!(!c&&r.__c.props===u)&&(!i||i.call(this,u,a,l))};x.u=!0;var i=x.shouldComponentUpdate,s=x.componentWillUpdate;x.componentWillUpdate=function(u,a,l){if(this.__e){var p=i;i=void 0,o(u,a,l),i=p}s&&s.call(this,u,a,l)},x.shouldComponentUpdate=o}return r.__N||r.__}function No(t,e){var n=de(rt++,3);!S.__s&&rr(n.__H,e)&&(n.__=t,n.i=e,x.__H.__h.push(n))}function Do(t){return it=5,nr(function(){return{current:t}},[])}function nr(t,e){var n=de(rt++,7);return rr(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function Ro(t,e){return it=8,nr(function(){return t},e)}function Fo(){for(var t;t=er.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(gt),t.__H.__h.forEach(Jt),t.__H.__h=[]}catch(e){t.__H.__h=[],S.__e(e,t.__v)}}S.__b=function(t){x=null,Ne&&Ne(t)},S.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),ze&&ze(t,e)},S.__r=function(t){De&&De(t),rt=0;var e=(x=t.__c).__H;e&&(Nt===x?(e.__h=[],x.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=yt,n.__N=n.i=void 0})):(e.__h.forEach(gt),e.__h.forEach(Jt),e.__h=[],rt=0)),Nt=x},S.diffed=function(t){Re&&Re(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(er.push(e)!==1&&He===S.requestAnimationFrame||((He=S.requestAnimationFrame)||Uo)(Fo)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==yt&&(n.__=n.__V),n.i=void 0,n.__V=yt})),Nt=x=null},S.__c=function(t,e){e.some(function(n){try{n.__h.forEach(gt),n.__h=n.__h.filter(function(r){return!r.__||Jt(r)})}catch(r){e.some(function(o){o.__h&&(o.__h=[])}),e=[],S.__e(r,n.__v)}}),Fe&&Fe(t,e)},S.unmount=function(t){Ue&&Ue(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{gt(r)}catch(o){e=o}}),n.__H=void 0,e&&S.__e(e,n.__v))};var Be=typeof requestAnimationFrame=="function";function Uo(t){var e,n=function(){clearTimeout(r),Be&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);Be&&(e=requestAnimationFrame(n))}function gt(t){var e=x,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),x=e}function Jt(t){var e=x;t.__c=t.__(),x=e}function rr(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function ir(t,e){return typeof e=="function"?e(t):e}function $t(t,e){var n=I(e),r=n[0],o=n[1],i=Do(t);return No(function(){var s=i.current.subscribe(o);return function(){return s.unsubscribe()}}),r}var Kt=function(t,e){return Kt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},Kt(t,e)};function Pt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Kt(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function Qt(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Zt(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,i=[],s;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return i}function Xt(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}function L(t){return typeof t=="function"}function or(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Dt=or(function(t){return function(n){t(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function te(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Ct=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=Qt(s),a=u.next();!a.done;a=u.next()){var l=a.value;l.remove(this)}}catch(b){e={error:b}}finally{try{a&&!a.done&&(n=u.return)&&n.call(u)}finally{if(e)throw e.error}}else s.remove(this);var p=this.initialTeardown;if(L(p))try{p()}catch(b){i=b instanceof Dt?b.errors:[b]}var c=this._finalizers;if(c){this._finalizers=null;try{for(var d=Qt(c),f=d.next();!f.done;f=d.next()){var h=f.value;try{Ve(h)}catch(b){i=i??[],b instanceof Dt?i=Xt(Xt([],Zt(i)),Zt(b.errors)):i.push(b)}}}catch(b){r={error:b}}finally{try{f&&!f.done&&(o=d.return)&&o.call(d)}finally{if(r)throw r.error}}}if(i)throw new Dt(i)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)Ve(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&te(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&te(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),sr=Ct.EMPTY;function ur(t){return t instanceof Ct||t&&"closed"in t&&L(t.remove)&&L(t.add)&&L(t.unsubscribe)}function Ve(t){L(t)?t():t.unsubscribe()}var ar={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},zo={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,Xt([t,e],Zt(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function Bo(t){zo.setTimeout(function(){throw t})}function We(){}function wt(t){t()}var cr=function(t){Pt(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,ur(n)&&n.add(r)):r.destination=Yo,r}return e.create=function(n,r,o){return new ee(n,r,o)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Ct),Vo=Function.prototype.bind;function Rt(t,e){return Vo.call(t,e)}var Wo=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){ht(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){ht(r)}else ht(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){ht(n)}},t}(),ee=function(t){Pt(e,t);function e(n,r,o){var i=t.call(this)||this,s;if(L(n)||!n)s={next:n??void 0,error:r??void 0,complete:o??void 0};else{var u;i&&ar.useDeprecatedNextContext?(u=Object.create(n),u.unsubscribe=function(){return i.unsubscribe()},s={next:n.next&&Rt(n.next,u),error:n.error&&Rt(n.error,u),complete:n.complete&&Rt(n.complete,u)}):s=n}return i.destination=new Wo(s),i}return e}(cr);function ht(t){Bo(t)}function qo(t){throw t}var Yo={closed:!0,next:We,error:qo,complete:We},Go=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Jo(t){return t}function Ko(t){return t.length===0?Jo:t.length===1?t[0]:function(n){return t.reduce(function(r,o){return o(r)},n)}}var qe=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var o=this,i=Zo(e)?e:new ee(e,n,r);return wt(function(){var s=o,u=s.operator,a=s.source;i.add(u?u.call(i,a):a?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=Ye(n),new n(function(o,i){var s=new ee({next:function(u){try{e(u)}catch(a){i(a),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[Go]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Ko(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=Ye(e),new e(function(r,o){var i;n.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},t.create=function(e){return new t(e)},t}();function Ye(t){var e;return(e=t??ar.Promise)!==null&&e!==void 0?e:Promise}function Qo(t){return t&&L(t.next)&&L(t.error)&&L(t.complete)}function Zo(t){return t&&t instanceof cr||Qo(t)&&ur(t)}var Xo=or(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),be=function(t){Pt(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new Ge(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new Xo},e.prototype.next=function(n){var r=this;wt(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=Qt(r.currentObservers),u=s.next();!u.done;u=s.next()){var a=u.value;a.next(n)}}catch(l){o={error:l}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},e.prototype.error=function(n){var r=this;wt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var o=r.observers;o.length;)o.shift().error(n)}})},e.prototype.complete=function(){var n=this;wt(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,o=this,i=o.hasError,s=o.isStopped,u=o.observers;return i||s?sr:(this.currentObservers=null,u.push(n),new Ct(function(){r.currentObservers=null,te(u,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?n.error(i):s&&n.complete()},e.prototype.asObservable=function(){var n=new qe;return n.source=this,n},e.create=function(n,r){return new Ge(n,r)},e}(qe),Ge=function(t){Pt(e,t);function e(n,r){var o=t.call(this)||this;return o.destination=n,o.source=r,o}return e.prototype.next=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,n)},e.prototype.error=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&o!==void 0?o:sr},e}(be),lr=4,pr=new be,fr=pr.asObservable();function dr(){return lr}function K(t){lr=t,pr.next(t)}var br="initial",hr=new be,mr=hr.asObservable();function vr(){return br}function W(t){br=t,hr.next(t)}var _r=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},Je=G(Ke||(Ke=_r([`
	height: 95%;
	display: grid;
	place-content: space-evenly;
`],[`
	height: 95%;
	display: grid;
	place-content: space-evenly;
`])));function X(t){var e=t.title,n=t.children;return C(Qe||(Qe=_r([`
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
	`])),e,Je,n[0],n[1],Je,n[2])}var Ke,Qe,ts=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};function es(){var t=I("I'm an input !"),e=t[0],n=t[1],r=`&lt;crumbs-input
	value="`.concat(e,`"&gt;
&lt;/crumbs-input&gt;`);return C(Ze||(Ze=ts([`
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
	`])),X,e,function(o){return n(o.originalTarget.value)},e,function(o){return n(o.originalTarget.value)},{__html:r})}var Ze,ns=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};function rs(){var t=I("I'm a <b>paragraph</b> !"),e=t[0],n=t[1];return C(Xe||(Xe=ns([`
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
	`])),X,{__html:e},e,function(r){return n(r.originalTarget.value)},{__html:"&lt;crumbs-p&gt; ".concat(e," &lt;/crumbs-p&gt;")})}var Xe,is=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},os=function(t,e,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function u(p){try{l(r.next(p))}catch(c){s(c)}}function a(p){try{l(r.throw(p))}catch(c){s(c)}}function l(p){p.done?i(p.value):o(p.value).then(u,a)}l((r=r.apply(t,e||[])).next())})},ss=function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(l){return function(p){return a([l,p])}}function a(l){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,l[0]&&(n=0)),n;)try{if(r=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,o=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(p){l=[6,p],o=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}};function us(){var t=this,e=I("I'm a panel !"),n=e[0],r=e[1],o=I(""),i=o[0],s=o[1],u=I("100"),a=u[0],l=u[1],p=I(!1),c=p[0],d=p[1],f=`&lt;crumbs-panel
	panel-title="`.concat(i,`"
	panel-loading="`).concat(a,`"&gt;
	`).concat(n,`
&lt;/crumbs-panel&gt;`),h=Ro(function(){return os(t,void 0,void 0,function(){var m;return ss(this,function(v){switch(v.label){case 0:if(c)return[2];d(!0),l("0"),m=0,v.label=1;case 1:return m<=100?[4,new Promise(function(y){return setTimeout(y,10)})]:[3,4];case 2:v.sent(),l(Math.floor(m).toString()),v.label=3;case 3:return m+=.1+(100-m)/100,[3,1];case 4:return l("100"),d(!1),[2]}})})},[c]),b=function(){c||h()};return C(tn||(tn=is([`
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
	`])),X,a,i,n,i,function(m){return s(m.originalTarget.value)},n,function(m){return r(m.originalTarget.value)},a,function(m){return l(String(m.target.value))},b,{__html:f})}var tn,as=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};function cs(){var t=I("Tab content"),e=t[0],n=t[1],r=I("Tab title"),o=r[0],i=r[1],s=I("Tab content 2"),u=s[0],a=s[1],l=I("Tab title 2"),p=l[0],c=l[1],d=`&lt;crumbs-tabs&gt;
	&lt;crumbs-p
		slot="title-1"&gt;
		`.concat(o,`
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot="content-1"&gt;
		`).concat(e,`
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot="title-2"&gt;
		`).concat(p,`
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot="content-2"&gt;
		`).concat(u,`
	&lt;/crumbs-p&gt;
&lt;/crumbs-panel&gt;`);return C(en||(en=as([`
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
	`])),X,o,e,p,u,o,function(f){return i(f.originalTarget.value)},e,function(f){return n(f.originalTarget.value)},p,function(f){return c(f.originalTarget.value)},u,function(f){return a(f.originalTarget.value)},{__html:d})}var en,ls=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};function ps(){return C(nn||(nn=ls([`
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
	`])))}var nn,Ft=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};function fs(){var t=$t(fr,dr),e=$t(mr,vr),n=G(rn||(rn=Ft([`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`],[`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`]))),r=G(on||(on=Ft([`
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
	`])));return C(sn||(sn=Ft([`
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
	`])),n,r,t===1,function(){return K(1)},t===2,function(){return K(2)},t===3,function(){return K(3)},t===4,function(){return K(4)},t===5,function(){return K(5)},t===6,function(){return K(6)},r,e==="initial",function(){return W("initial")},e==="monospace",function(){return W("monospace")},e==="serif",function(){return W("serif")},e==="sans-serif",function(){return W("sans-serif")},e==="cursive",function(){return W("cursive")},e==="fantasy",function(){return W("fantasy")},e==="system-ui",function(){return W("system-ui")})}var rn,on,sn,ds=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};function bs(){var t="&lt;crumbs-p&gt; Hello world ! &lt;/crumbs-p&gt;";return C(un||(un=ds([`
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
	`])),{__html:t})}var un,hs=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};function ms(){var t=I("Click me !"),e=t[0],n=t[1],r=I("100"),o=r[0],i=r[1],s=I(!1),u=s[0],a=s[1],l=`
		&lt;crumbs-button
			`.concat(u?"	disabled":"",`
				progress="`).concat(o,`"&gt;
				`).concat(e,`
		&lt;/crumbs-button&gt;
	`);return C(an||(an=hs([`
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
	`])),X,o,u,e,e,function(p){return n(p.originalTarget.value)},o,function(p){return i(String(p.target.value))},function(){return a(!u)},{__html:l})}var an,vs=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};function _s(){var t=I("Click me !"),e=t[0],n=t[1],r=I(!1),o=r[0],i=r[1],s=I(2e3),u=s[0],a=s[1],l=`
		&lt;crumbs-button
			`.concat(o?"	indeterminate-progress":"",`
			`).concat(o?'	indeterminate-duration-ms="'.concat(u,'"'):"",`
				`).concat(e,`
		&lt;/crumbs-button&gt;
	`);return C(cn||(cn=vs([`
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
	`])),X,o,u,e,e,function(p){return n(p.originalTarget.value)},function(){return i(!o)},u,function(p){return a(Number(p.originalTarget.value))},{__html:l})}var cn;function ys(){const t=$t(fr,dr),e=$t(mr,vr),n=G`
		background-image: url('bg${t}.jpg');
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
		font-family: ${e};
	`;return C`
		<div class=${n}></div>

		<div class=${r}>
			<${ps}><//>
			<${bs}><//>
			<${fs}><//>
			<${rs}><//>
			<${us}><//>
			<${es}><//>
			<${cs}><//>
			<${ms}><//>
			<${_s}><//>
		</div>
	`}Lo(C`<${ys}><//>`,document.body);
