var xr=Object.defineProperty;var Sr=(t,e,n)=>e in t?xr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var w=(t,e,n)=>Sr(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Ct(t){for(var e,n,r=arguments,o=1,i="",s="",u=[0],a=function(c){o===1&&(c||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(c?r[c]:i):o===3&&(c||i)?(u[1]=c?r[c]:i,o=2):o===2&&i==="..."&&c?u[2]=Object.assign(u[2]||{},r[c]):o===2&&i&&!c?(u[2]=u[2]||{})[i]=!0:o>=5&&(o===5?((u[2]=u[2]||{})[n]=c?i?i+r[c]:r[c]:i,o=6):(c||i)&&(u[2][n]+=c?i+r[c]:i)),i=""},l=0;l<t.length;l++){l&&(o===1&&a(),a(l));for(var f=0;f<t[l].length;f++)e=t[l][f],o===1?e==="<"?(a(),u=[u,"",null],o=3):i+=e:o===4?i==="--"&&e===">"?(o=1,i=""):i=e+i[0]:s?e===s?s="":i+=e:e==='"'||e==="'"?s=e:e===">"?(a(),o=1):o&&(e==="="?(o=5,n=i,i=""):e==="/"&&(o<5||t[l][f+1]===">")?(a(),o===3&&(u=u[0]),o=u,(u=u[0]).push(this.apply(null,o.slice(1))),o=0):e===" "||e==="	"||e===`
`||e==="\r"?(a(),o=2):i+=e),o===3&&i==="!--"&&(o=4,u=u[0])}return a(),u.length>2?u.slice(1):u[1]}function $r(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Ir(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var o=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return t[r]}})}),n}var be={exports:{}};/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */var Er=function(e){var n=String.prototype.split,r=/()??/.exec("")[1]===e,o;return o=function(i,c,u){if(Object.prototype.toString.call(c)!=="[object RegExp]")return n.call(i,c,u);var a=[],l=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.extended?"x":"")+(c.sticky?"y":""),f=0,c=new RegExp(c.source,l+"g"),d,p,h,b;for(i+="",r||(d=new RegExp("^"+c.source+"$(?!\\s)",l)),u=u===e?-1>>>0:u>>>0;(p=c.exec(i))&&(h=p.index+p[0].length,!(h>f&&(a.push(i.slice(f,p.index)),!r&&p.length>1&&p[0].replace(d,function(){for(var m=1;m<arguments.length-2;m++)arguments[m]===e&&(p[m]=e)}),p.length>1&&p.index<i.length&&Array.prototype.push.apply(a,p.slice(1)),b=p[0].length,f=h,a.length>=u)));)c.lastIndex===p.index&&c.lastIndex++;return f===i.length?(b||!c.test(""))&&a.push(""):a.push(i.slice(f)),a.length>u?a.slice(0,u):a},o}(),Tr=[].indexOf,kr=function(t,e){if(Tr)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1},Rt=kr,Or=Pr;function Pr(t){var e=t.classList;if(e)return e;var n={add:r,remove:o,contains:i,toggle:s,toString:u,length:0,item:a};return n;function r(c){var d=l();Rt(d,c)>-1||(d.push(c),f(d))}function o(c){var d=l(),p=Rt(d,c);p!==-1&&(d.splice(p,1),f(d))}function i(c){return Rt(l(),c)>-1}function s(c){return i(c)?(o(c),!1):(r(c),!0)}function u(){return t.className}function a(c){var d=l();return d[c]||null}function l(){var c=t.className;return Cr(c.split(" "),Ar)}function f(c){var d=c.length;t.className=c.join(" "),n.length=d;for(var p=0;p<c.length;p++)n[p]=c[p];delete c[d]}}function Cr(t,e){for(var n=[],r=0;r<t.length;r++)e(t[r])&&n.push(t[r]);return n}function Ar(t){return!!t}const jr={},Lr=Object.freeze(Object.defineProperty({__proto__:null,default:jr},Symbol.toStringTag,{value:"Module"})),Mr=Ir(Lr);var Hr=Er,Rr=Or,he=typeof window>"u"?Mr:window,rt=he.document,Dr=he.Text;function me(){var t=[];function e(){var n=[].slice.call(arguments),r=null;function o(i){var s;function u(c){var d=Hr(c,/([\.#]?[^\s#.]+)/);/^\.|#/.test(d[1])&&(r=rt.createElement("div")),wn(d,function(p){var h=p.substring(1,p.length);p&&(r?p[0]==="."?Rr(r).add(h):p[0]==="#"&&r.setAttribute("id",h):r=rt.createElement(p))})}if(i!=null){if(typeof i=="string")r?r.appendChild(s=rt.createTextNode(i)):u(i);else if(typeof i=="number"||typeof i=="boolean"||i instanceof Date||i instanceof RegExp)r.appendChild(s=rt.createTextNode(i.toString()));else if(Fr(i))wn(i,o);else if(Dt(i))r.appendChild(s=i);else if(i instanceof Dr)r.appendChild(s=i);else if(typeof i=="object")for(var a in i)if(typeof i[a]=="function")/^on\w+/.test(a)?function(c,d){r.addEventListener?(r.addEventListener(c.substring(2),d[c],!1),t.push(function(){r.removeEventListener(c.substring(2),d[c],!1)})):(r.attachEvent(c,d[c]),t.push(function(){r.detachEvent(c,d[c])}))}(a,i):(r[a]=i[a](),t.push(i[a](function(c){r[a]=c})));else if(a==="style")if(typeof i[a]=="string")r.style.cssText=i[a];else for(var l in i[a])(function(c,d){if(typeof d=="function")r.style.setProperty(c,d()),t.push(d(function(h){r.style.setProperty(c,h)}));else var p=i[a][c].match(/(.*)\W+!important\W*$/);p?r.style.setProperty(c,p[1],"important"):r.style.setProperty(c,i[a][c])})(l,i[a][l]);else if(a==="attrs")for(var f in i[a])r.setAttribute(f,i[a][f]);else a.substr(0,5)==="data-"?r.setAttribute(a,i[a]):r[a]=i[a];else if(typeof i=="function"){var f=i();r.appendChild(s=Dt(f)?f:rt.createTextNode(f)),t.push(i(function(d){Dt(d)&&s.parentElement?(s.parentElement.replaceChild(d,s),s=d):s.textContent=d}))}}return s}for(;n.length;)o(n.shift());return r}return e.cleanup=function(){for(var n=0;n<t.length;n++)t[n]();t.length=0},e}var Nr=be.exports=me();Nr.context=me;function Dt(t){return t&&t.nodeName&&t.nodeType}function wn(t,e){if(t.forEach)return t.forEach(e);for(var n=0;n<t.length;n++)e(t[n],n)}function Fr(t){return Object.prototype.toString.call(t)=="[object Array]"}var Ur=be.exports;const at=$r(Ur);function D(t){if(!t.shadowRoot)throw new Error("There is no shadow root on the element !");return t.shadowRoot}function ct(t){const e=Array.isArray(t)?t:[t],n=document.createElement("template");return n.innerHTML=e.map(r=>r.outerHTML).join(""),n}var qt=function(t,e){return qt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},qt(t,e)};function V(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");qt(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function zr(t,e,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function u(f){try{l(r.next(f))}catch(c){s(c)}}function a(f){try{l(r.throw(f))}catch(c){s(c)}}function l(f){f.done?i(f.value):o(f.value).then(u,a)}l((r=r.apply(t,e||[])).next())})}function ve(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(l){return function(f){return a([l,f])}}function a(l){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,l[0]&&(n=0)),n;)try{if(r=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,o=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(f){l=[6,f],o=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function nt(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function M(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,i=[],s;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return i}function N(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}function tt(t){return this instanceof tt?(this.v=t,this):new tt(t)}function Br(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),o,i=[];return o={},u("next"),u("throw"),u("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(p){return function(h){return Promise.resolve(h).then(p,c)}}function u(p,h){r[p]&&(o[p]=function(b){return new Promise(function(m,v){i.push([p,b,m,v])>1||a(p,b)})},h&&(o[p]=h(o[p])))}function a(p,h){try{l(r[p](h))}catch(b){d(i[0][3],b)}}function l(p){p.value instanceof tt?Promise.resolve(p.value.v).then(f,c):d(i[0][2],p)}function f(p){a("next",p)}function c(p){a("throw",p)}function d(p,h){p(h),i.shift(),i.length&&a(i[0][0],i[0][1])}}function Vr(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof nt=="function"?nt(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=t[i]&&function(s){return new Promise(function(u,a){s=t[i](s),o(u,a,s.done,s.value)})}}function o(i,s,u,a){Promise.resolve(a).then(function(l){i({value:l,done:u})},s)}}function _(t){return typeof t=="function"}function un(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Nt=un(function(t){return function(n){t(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function kt(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var lt=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=nt(s),a=u.next();!a.done;a=u.next()){var l=a.value;l.remove(this)}}catch(b){e={error:b}}finally{try{a&&!a.done&&(n=u.return)&&n.call(u)}finally{if(e)throw e.error}}else s.remove(this);var f=this.initialTeardown;if(_(f))try{f()}catch(b){i=b instanceof Nt?b.errors:[b]}var c=this._finalizers;if(c){this._finalizers=null;try{for(var d=nt(c),p=d.next();!p.done;p=d.next()){var h=p.value;try{xn(h)}catch(b){i=i??[],b instanceof Nt?i=N(N([],M(i)),M(b.errors)):i.push(b)}}}catch(b){r={error:b}}finally{try{p&&!p.done&&(o=d.return)&&o.call(d)}finally{if(r)throw r.error}}}if(i)throw new Nt(i)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)xn(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&kt(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&kt(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),_e=lt.EMPTY;function ye(t){return t instanceof lt||t&&"closed"in t&&_(t.remove)&&_(t.add)&&_(t.unsubscribe)}function xn(t){_(t)?t():t.unsubscribe()}var ge={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},we={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,N([t,e],M(n)))},clearTimeout:function(t){var e=we.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function xe(t){we.setTimeout(function(){throw t})}function Sn(){}function xt(t){t()}var an=function(t){V(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,ye(n)&&n.add(r)):r.destination=Gr,r}return e.create=function(n,r,o){return new it(n,r,o)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(lt),Wr=Function.prototype.bind;function Ft(t,e){return Wr.call(t,e)}var qr=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){vt(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){vt(r)}else vt(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){vt(n)}},t}(),it=function(t){V(e,t);function e(n,r,o){var i=t.call(this)||this,s;if(_(n)||!n)s={next:n??void 0,error:r??void 0,complete:o??void 0};else{var u;i&&ge.useDeprecatedNextContext?(u=Object.create(n),u.unsubscribe=function(){return i.unsubscribe()},s={next:n.next&&Ft(n.next,u),error:n.error&&Ft(n.error,u),complete:n.complete&&Ft(n.complete,u)}):s=n}return i.destination=new qr(s),i}return e}(an);function vt(t){xe(t)}function Yr(t){throw t}var Gr={closed:!0,next:Sn,error:Yr,complete:Sn},cn=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function ft(t){return t}function Jr(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Se(t)}function Se(t){return t.length===0?ft:t.length===1?t[0]:function(n){return t.reduce(function(r,o){return o(r)},n)}}var E=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var o=this,i=Kr(e)?e:new it(e,n,r);return xt(function(){var s=o,u=s.operator,a=s.source;i.add(u?u.call(i,a):a?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=$n(n),new n(function(o,i){var s=new it({next:function(u){try{e(u)}catch(a){i(a),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[cn]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Se(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=$n(e),new e(function(r,o){var i;n.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},t.create=function(e){return new t(e)},t}();function $n(t){var e;return(e=t??ge.Promise)!==null&&e!==void 0?e:Promise}function Zr(t){return t&&_(t.next)&&_(t.error)&&_(t.complete)}function Kr(t){return t&&t instanceof an||Zr(t)&&ye(t)}function Qr(t){return _(t==null?void 0:t.lift)}function k(t){return function(e){if(Qr(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function O(t,e,n,r,o){return new Xr(t,e,n,r,o)}var Xr=function(t){V(e,t);function e(n,r,o,i,s,u){var a=t.call(this,n)||this;return a.onFinalize=s,a.shouldUnsubscribe=u,a._next=r?function(l){try{r(l)}catch(f){n.error(f)}}:t.prototype._next,a._error=i?function(l){try{i(l)}catch(f){n.error(f)}finally{this.unsubscribe()}}:t.prototype._error,a._complete=o?function(){try{o()}catch(l){n.error(l)}finally{this.unsubscribe()}}:t.prototype._complete,a}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e}(an),ti=un(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),ln=function(t){V(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new In(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new ti},e.prototype.next=function(n){var r=this;xt(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=nt(r.currentObservers),u=s.next();!u.done;u=s.next()){var a=u.value;a.next(n)}}catch(l){o={error:l}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},e.prototype.error=function(n){var r=this;xt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var o=r.observers;o.length;)o.shift().error(n)}})},e.prototype.complete=function(){var n=this;xt(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,o=this,i=o.hasError,s=o.isStopped,u=o.observers;return i||s?_e:(this.currentObservers=null,u.push(n),new lt(function(){r.currentObservers=null,kt(u,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?n.error(i):s&&n.complete()},e.prototype.asObservable=function(){var n=new E;return n.source=this,n},e.create=function(n,r){return new In(n,r)},e}(E),In=function(t){V(e,t);function e(n,r){var o=t.call(this)||this;return o.destination=n,o.source=r,o}return e.prototype.next=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,n)},e.prototype.error=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&o!==void 0?o:_e},e}(ln),ni={now:function(){return Date.now()},delegate:void 0},ei=function(t){V(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(lt),En={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setInterval.apply(void 0,N([t,e],M(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},ri=function(t){V(e,t);function e(n,r){var o=t.call(this,n,r)||this;return o.scheduler=n,o.work=r,o.pending=!1,o}return e.prototype.schedule=function(n,r){var o;if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=(o=this.id)!==null&&o!==void 0?o:this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,o){return o===void 0&&(o=0),En.setInterval(n.flush.bind(n,this),o)},e.prototype.recycleAsyncId=function(n,r,o){if(o===void 0&&(o=0),o!=null&&this.delay===o&&this.pending===!1)return r;r!=null&&En.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var o=this._execute(n,r);if(o)return o;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var o=!1,i;try{this.work(n)}catch(s){o=!0,i=s||new Error("Scheduled action threw falsy error")}if(o)return this.unsubscribe(),i},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,o=n.scheduler,i=o.actions;this.work=this.state=this.scheduler=null,this.pending=!1,kt(i,this),r!=null&&(this.id=this.recycleAsyncId(o,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(ei),Tn=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=ni.now,t}(),ii=function(t){V(e,t);function e(n,r){r===void 0&&(r=Tn.now);var o=t.call(this,n,r)||this;return o.actions=[],o._active=!1,o}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var o;this._active=!0;do if(o=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,o){for(;n=r.shift();)n.unsubscribe();throw o}},e}(Tn),fn=new ii(ri),oi=fn,$e=new E(function(t){return t.complete()});function Ie(t){return t&&_(t.schedule)}function pn(t){return t[t.length-1]}function Ee(t){return _(pn(t))?t.pop():void 0}function pt(t){return Ie(pn(t))?t.pop():void 0}function si(t,e){return typeof pn(t)=="number"?t.pop():e}var dn=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function Te(t){return _(t==null?void 0:t.then)}function ke(t){return _(t[cn])}function Oe(t){return Symbol.asyncIterator&&_(t==null?void 0:t[Symbol.asyncIterator])}function Pe(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function ui(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ce=ui();function Ae(t){return _(t==null?void 0:t[Ce])}function je(t){return Br(this,arguments,function(){var n,r,o,i;return ve(this,function(s){switch(s.label){case 0:n=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,tt(n.read())];case 3:return r=s.sent(),o=r.value,i=r.done,i?[4,tt(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,tt(o)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function Le(t){return _(t==null?void 0:t.getReader)}function A(t){if(t instanceof E)return t;if(t!=null){if(ke(t))return ai(t);if(dn(t))return ci(t);if(Te(t))return li(t);if(Oe(t))return Me(t);if(Ae(t))return fi(t);if(Le(t))return pi(t)}throw Pe(t)}function ai(t){return new E(function(e){var n=t[cn]();if(_(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function ci(t){return new E(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function li(t){return new E(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,xe)})}function fi(t){return new E(function(e){var n,r;try{for(var o=nt(t),i=o.next();!i.done;i=o.next()){var s=i.value;if(e.next(s),e.closed)return}}catch(u){n={error:u}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}e.complete()})}function Me(t){return new E(function(e){di(t,e).catch(function(n){return e.error(n)})})}function pi(t){return Me(je(t))}function di(t,e){var n,r,o,i;return zr(this,void 0,void 0,function(){var s,u;return ve(this,function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),n=Vr(t),a.label=1;case 1:return[4,n.next()];case 2:if(r=a.sent(),!!r.done)return[3,4];if(s=r.value,e.next(s),e.closed)return[2];a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return u=a.sent(),o={error:u},[3,11];case 6:return a.trys.push([6,,9,10]),r&&!r.done&&(i=n.return)?[4,i.call(n)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function z(t,e,n,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=e.schedule(function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(i),!o)return i}function He(t,e){return e===void 0&&(e=0),k(function(n,r){n.subscribe(O(r,function(o){return z(r,t,function(){return r.next(o)},e)},function(){return z(r,t,function(){return r.complete()},e)},function(o){return z(r,t,function(){return r.error(o)},e)}))})}function Re(t,e){return e===void 0&&(e=0),k(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function bi(t,e){return A(t).pipe(Re(e),He(e))}function hi(t,e){return A(t).pipe(Re(e),He(e))}function mi(t,e){return new E(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function vi(t,e){return new E(function(n){var r;return z(n,e,function(){r=t[Ce](),z(n,e,function(){var o,i,s;try{o=r.next(),i=o.value,s=o.done}catch(u){n.error(u);return}s?n.complete():n.next(i)},0,!0)}),function(){return _(r==null?void 0:r.return)&&r.return()}})}function De(t,e){if(!t)throw new Error("Iterable cannot be null");return new E(function(n){z(n,e,function(){var r=t[Symbol.asyncIterator]();z(n,e,function(){r.next().then(function(o){o.done?n.complete():n.next(o.value)})},0,!0)})})}function _i(t,e){return De(je(t),e)}function yi(t,e){if(t!=null){if(ke(t))return bi(t,e);if(dn(t))return mi(t,e);if(Te(t))return hi(t,e);if(Oe(t))return De(t,e);if(Ae(t))return vi(t,e);if(Le(t))return _i(t,e)}throw Pe(t)}function dt(t,e){return e?yi(t,e):A(t)}function _t(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=pt(t);return dt(t,n)}var Ne=un(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function gi(t){return t instanceof Date&&!isNaN(t)}function $(t,e){return k(function(n,r){var o=0;n.subscribe(O(r,function(i){r.next(t.call(e,i,o++))}))})}var wi=Array.isArray;function xi(t,e){return wi(e)?t.apply(void 0,N([],M(e))):t(e)}function bn(t){return $(function(e){return xi(t,e)})}var Si=Array.isArray,$i=Object.getPrototypeOf,Ii=Object.prototype,Ei=Object.keys;function Ti(t){if(t.length===1){var e=t[0];if(Si(e))return{args:e,keys:null};if(ki(e)){var n=Ei(e);return{args:n.map(function(r){return e[r]}),keys:n}}}return{args:t,keys:null}}function ki(t){return t&&typeof t=="object"&&$i(t)===Ii}function Oi(t,e){return t.reduce(function(n,r,o){return n[r]=e[o],n},{})}function Pi(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=pt(t),r=Ee(t),o=Ti(t),i=o.args,s=o.keys;if(i.length===0)return dt([],n);var u=new E(Fe(i,n,s?function(a){return Oi(s,a)}:ft));return r?u.pipe(bn(r)):u}function Fe(t,e,n){return n===void 0&&(n=ft),function(r){kn(e,function(){for(var o=t.length,i=new Array(o),s=o,u=o,a=function(f){kn(e,function(){var c=dt(t[f],e),d=!1;c.subscribe(O(r,function(p){i[f]=p,d||(d=!0,u--),u||r.next(n(i.slice()))},function(){--s||r.complete()}))},r)},l=0;l<o;l++)a(l)},r)}}function kn(t,e,n){t?z(n,t,e):e()}function Ci(t,e,n,r,o,i,s,u){var a=[],l=0,f=0,c=!1,d=function(){c&&!a.length&&!l&&e.complete()},p=function(b){return l<r?h(b):a.push(b)},h=function(b){l++;var m=!1;A(n(b,f++)).subscribe(O(e,function(v){e.next(v)},function(){m=!0},void 0,function(){if(m)try{l--;for(var v=function(){var y=a.shift();s||h(y)};a.length&&l<r;)v();d()}catch(y){e.error(y)}}))};return t.subscribe(O(e,p,function(){c=!0,d()})),function(){}}function et(t,e,n){return n===void 0&&(n=1/0),_(e)?et(function(r,o){return $(function(i,s){return e(r,i,o,s)})(A(t(r,o)))},n):(typeof e=="number"&&(n=e),k(function(r,o){return Ci(r,o,t,n)}))}function Ue(t){return t===void 0&&(t=1/0),et(ft,t)}function Ai(){return Ue(1)}function On(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Ai()(dt(t,pt(t)))}var ji=["addListener","removeListener"],Li=["addEventListener","removeEventListener"],Mi=["on","off"];function B(t,e,n,r){if(_(n)&&(r=n,n=void 0),r)return B(t,e,n).pipe(bn(r));var o=M(Di(t)?Li.map(function(u){return function(a){return t[u](e,a,n)}}):Hi(t)?ji.map(Pn(t,e)):Ri(t)?Mi.map(Pn(t,e)):[],2),i=o[0],s=o[1];if(!i&&dn(t))return et(function(u){return B(u,e,n)})(A(t));if(!i)throw new TypeError("Invalid event target");return new E(function(u){var a=function(){for(var l=[],f=0;f<arguments.length;f++)l[f]=arguments[f];return u.next(1<l.length?l:l[0])};return i(a),function(){return s(a)}})}function Pn(t,e){return function(n){return function(r){return t[n](e,r)}}}function Hi(t){return _(t.addListener)&&_(t.removeListener)}function Ri(t){return _(t.on)&&_(t.off)}function Di(t){return _(t.addEventListener)&&_(t.removeEventListener)}function ze(t,e,n){t===void 0&&(t=0),n===void 0&&(n=oi);var r=-1;return e!=null&&(Ie(e)?n=e:r=e),new E(function(o){var i=gi(t)?+t-n.now():t;i<0&&(i=0);var s=0;return n.schedule(function(){o.closed||(o.next(s++),0<=r?this.schedule(void 0,r):o.complete())},i)})}function Ni(t,e){return e===void 0&&(e=fn),ze(t,t,e)}function Fi(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=pt(t),r=si(t,1/0),o=t;return o.length?o.length===1?A(o[0]):Ue(r)(dt(o,n)):$e}var Ui=Array.isArray;function zi(t){return t.length===1&&Ui(t[0])?t[0]:t}function F(t,e){return k(function(n,r){var o=0;n.subscribe(O(r,function(i){return t.call(e,i,o++)&&r.next(i)}))})}function Be(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=Ee(t);return n?Jr(Be.apply(void 0,N([],M(t))),bn(n)):k(function(r,o){Fe(N([r],M(zi(t))))(o)})}function yt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Be.apply(void 0,N([],M(t)))}function Bi(t,e){return _(e)?et(t,e,1):et(t,1)}function Vi(t){return k(function(e,n){var r=!1;e.subscribe(O(n,function(o){r=!0,n.next(o)},function(){r||n.next(t),n.complete()}))})}function Ve(t){return t<=0?function(){return $e}:k(function(e,n){var r=0;e.subscribe(O(n,function(o){++r<=t&&(n.next(o),t<=r&&n.complete())}))})}function Yt(t){return $(function(){return t})}function Wi(t,e){return et(function(n,r){return A(t(n,r)).pipe(Ve(1),Yt(n))})}function qi(t,e){e===void 0&&(e=fn);var n=ze(t,e);return Wi(function(){return n})}function Yi(t){return t===void 0&&(t=Gi),k(function(e,n){var r=!1;e.subscribe(O(n,function(o){r=!0,n.next(o)},function(){return r?n.complete():n.error(t())}))})}function Gi(){return new Ne}function Ji(t,e){var n=arguments.length>=2;return function(r){return r.pipe(ft,Ve(1),n?Vi(e):Yi(function(){return new Ne}))}}function Cn(){return k(function(t,e){var n,r=!1;t.subscribe(O(e,function(o){var i=n;n=o,r&&e.next([i,o]),r=!0}))})}function An(t){t===void 0&&(t={});var e=t.connector,n=e===void 0?function(){return new ln}:e,r=t.resetOnError,o=r===void 0?!0:r,i=t.resetOnComplete,s=i===void 0?!0:i,u=t.resetOnRefCountZero,a=u===void 0?!0:u;return function(l){var f,c,d,p=0,h=!1,b=!1,m=function(){c==null||c.unsubscribe(),c=void 0},v=function(){m(),f=d=void 0,h=b=!1},y=function(){var T=f;v(),T==null||T.unsubscribe()};return k(function(T,W){p++,!b&&!h&&m();var L=d=d??n();W.add(function(){p--,p===0&&!b&&!h&&(c=Ut(y,a))}),L.subscribe(W),!f&&p>0&&(f=new it({next:function(q){return L.next(q)},error:function(q){b=!0,m(),c=Ut(v,o,q),L.error(q)},complete:function(){h=!0,m(),c=Ut(v,s),L.complete()}}),A(T).subscribe(f))})(l)}}function Ut(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(e===!0){t();return}if(e!==!1){var o=new it({next:function(){o.unsubscribe(),t()}});return A(e.apply(void 0,N([],M(n)))).subscribe(o)}}function Y(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=pt(t);return k(function(r,o){(n?On(t,r,n):On(t,r)).subscribe(o)})}function Zi(t,e){return k(function(n,r){var o=null,i=0,s=!1,u=function(){return s&&!o&&r.complete()};n.subscribe(O(r,function(a){o==null||o.unsubscribe();var l=0,f=i++;A(t(a,f)).subscribe(o=O(r,function(c){return r.next(e?e(a,c,f,l++):c)},function(){o=null,u()}))},function(){s=!0,u()}))})}function Ki(t,e){return k(function(n,r){var o=0;n.subscribe(O(r,function(i){var s=t(i,o++);(s||e)&&r.next(i),!s&&r.complete()}))})}function We(){return!document.hidden}function Qi(){const t=B(document,"visibilitychange"),e=B(window,"focus").pipe(Yt(!0)),n=B(window,"blur").pipe(Yt(!1)),r=Fi(e,n);return Pi(t,r).pipe($(([,o])=>We()&&o),F(o=>o),Ji())}const Xi=B(document,"mouseover");async function to(){We()||await Promise.race([Qi().toPromise(),Xi.toPromise()])}async function no(){await new Promise(t=>setTimeout(t,400)),await to(),await new Promise(t=>setTimeout(t,400))}const eo=no();function C(t,e){const n=t.querySelector(e);if(!n)throw new Error("Failed to find element ${ selector } !");return n}const ro=Ct.bind(at),io="crumbs-p",oo=ct(ro`
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
`);let so=class extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const e=D(this),n=oo.content.cloneNode(!0);e.appendChild(n)}};customElements.define(io,so);const uo=Ct.bind(at),ao="crumbs-panel",co=ct(uo`
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
`);class lo extends HTMLElement{constructor(){super(...arguments);w(this,"contentTimeoutElapsed",!1);w(this,"contentLoaded",!1);w(this,"connected",!1);w(this,"loading","100");w(this,"scrolled",!1);w(this,"scrolledSubscription",null)}static get observedAttributes(){return["panel-loading","panel-title"]}async connectedCallback(){this.attachShadow({mode:"open"}),await eo;const n=D(this),r=co.content.cloneNode(!0);n.appendChild(r);const o=this.getAttribute("panel-loading");o!==null&&jn(o)&&(this.loading=o),setTimeout(()=>{const i=C(n,"#panel-container");i.style.gridTemplateColumns="1rem 1fr 1rem",i.style.gridTemplateRows="1rem 1fr 1rem";const s=C(n,"#panel");s.style.backgroundColor="#ffffff40",this.scrolledSubscription=B(s,"scroll").pipe($(u=>u.target.scrollTop),$(u=>u!==0)).subscribe(u=>{this.scrolled=u,this.render()}),this.render()},10),setTimeout(()=>{this.contentTimeoutElapsed=!0,this.render()},400),this.connected=!0,this.render()}render(){const n=D(this),r=C(n,"#panel-content"),o=C(n,"#panel-loading"),i=C(n,"#panel"),s=C(n,"#panel-title-content");this.contentTimeoutElapsed&&fo(this.loading)?(r.style.visibility="visible",r.style.opacity="1",i.style.overflow="auto"):(r.style.visibility="collapse",r.style.opacity="0",i.style.overflow="hidden"),o.style.width=`${this.loading}%`;const u=C(n,"#panel-title");this.loading==="100"&&this.getAttribute("panel-title")&&!this.scrolled?setTimeout(()=>{u.style.opacity="1",s.innerHTML=this.getAttribute("panel-title")||"",r.style.paddingTop="2.5rem"},10):(r.style.paddingTop="inherit",u.style.opacity="0")}attributeChangedCallback(){if(this.shadowRoot&&this.connected){const n=this.getAttribute("panel-loading");n!==null&&jn(n)?this.loading=n:n===null&&(this.loading="100"),this.render()}}disconnectedCallback(){var n;(n=this.scrolledSubscription)==null||n.unsubscribe()}}function jn(t){const e=Number(t),n=Math.floor(e);return n===e&&Number.isInteger(n)&&Number.isFinite(n)&&n<=100&&n>=0}function fo(t){return t===null||t==="100"}customElements.define(ao,lo);const po=Ct.bind(at),bo="crumbs-input",ho=ct(po`
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
`);class mo extends HTMLElement{static get observedAttributes(){return["value"]}async connectedCallback(){this.attachShadow({mode:"open"});const e=D(this),n=ho.content.cloneNode(!0);e.appendChild(n);const r=C(e,"input"),o=this.getAttribute("value");r instanceof HTMLInputElement&&o&&(r.value=o)}attributeChangedCallback(e,n,r){if(e==="value"&&this.shadowRoot){const o=D(this),i=C(o,"input");i instanceof HTMLInputElement&&(i.value=r)}}}customElements.define(bo,mo);const Gt=Ct.bind(at),vo="crumbs-tabs",_o=ct(Gt`
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
`);class yo extends HTMLElement{constructor(){super(...arguments);w(this,"selected",1);w(this,"subscriptions",[])}async connectedCallback(){this.attachShadow({mode:"open"});const n=D(this),r=_o.content.cloneNode(!0);n.appendChild(r);const o=this.getAttribute("selected");this.selected=Number.parseInt(o||"1");const i=n.querySelector("#tabs"),s=n.querySelector("#content");if(!i)throw new Error("Tabs not found");if(!s)throw new Error("Content not found");for(const u of{[Symbol.iterator]:()=>this.getSlots()}){if(u.startsWith("content-")){const a=Gt`<div id=${`${u}`}> <slot name=${u}></slot> </div>`;a instanceof Element&&s.appendChild(a)}if(u.startsWith("title-")){const a=Gt`<div id=${u}> <crumbs-p> <slot name=${u}></slot> </crumbs-p> </div>`;a instanceof Element&&i.appendChild(a)}}this.subscriptions=[...i.children].map((u,a)=>B(u,"click").subscribe(()=>{const l=u.id.replace("title-","content-"),f=n.querySelector(`#${l}`);f instanceof HTMLElement&&s instanceof HTMLElement&&f.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.selected=a+1,this.render()})),this.render()}render(){const r=D(this).querySelector("#tabs");if(!r)throw new Error("Tabs not found");[...r.children].forEach((o,i)=>{i+1===this.selected?o instanceof HTMLElement&&o.classList.add("selected-title"):o instanceof HTMLElement&&o.classList.remove("selected-title")})}disconnectedCallback(){for(const n of this.subscriptions)n.unsubscribe()}*getSlots(){for(const n of Array.from(this.children)){const r=n.getAttribute("slot");r&&(yield r)}}}customElements.define(vo,yo);var qe=function(t,e,n,r){var o;e[0]=0;for(var i=1;i<e.length;i++){var s=e[i++],u=e[i]?(e[0]|=s?1:2,n[e[i++]]):e[++i];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[e[++i]]=u:s===6?r[1][e[++i]]+=u+"":s?(o=t.apply(u,qe(t,u,n,["",null])),r.push(o),u[0]?e[0]|=2:(e[i-2]=0,e[i]=o)):r.push(u)}return r},Ln=new Map;function go(t){var e=Ln.get(this);return e||(e=new Map,Ln.set(this,e)),(e=qe(this,e.get(t)||(e.set(t,e=function(n){for(var r,o,i=1,s="",u="",a=[0],l=function(d){i===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,d,s):i===3&&(d||s)?(a.push(3,d,s),i=2):i===2&&s==="..."&&d?a.push(4,d,0):i===2&&s&&!d?a.push(5,0,!0,s):i>=5&&((s||!d&&i===5)&&(a.push(i,0,s,o),i=6),d&&(a.push(i,d,0,o),i=6)),s=""},f=0;f<n.length;f++){f&&(i===1&&l(),l(f));for(var c=0;c<n[f].length;c++)r=n[f][c],i===1?r==="<"?(l(),a=[a],i=3):s+=r:i===4?s==="--"&&r===">"?(i=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(l(),i=1):i&&(r==="="?(i=5,o=s,s=""):r==="/"&&(i<5||n[f][c+1]===">")?(l(),i===3&&(a=a[0]),i=a,(a=a[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(l(),i=2):s+=r),i===3&&s==="!--"&&(i=4,a=a[0])}return l(),a}(t)),e),arguments,[])).length>1?e:e[0]}const wo=go.bind(at),xo="crumbs-button",Mn=1e3;class So extends HTMLElement{constructor(){super();w(this,"_renderSubscription",null);w(this,"_clickSubscription",null);w(this,"_attributeChanges$",new ln);w(this,"_parsedProgress$");w(this,"_parsedDisabled$");w(this,"_parsedIndeterminateProgress$");w(this,"_parsedIndeterminateDurationMs$");w(this,"_indeterminedLoadingAt$");w(this,"_loading$");w(this,"_activeIndeterminateProgress$");w(this,"_disabled$");w(this,"_loadingBarTransitionEnabled$");this._parsedProgress$=this._attributeChanges$.pipe(F(([n])=>n==="progress"),$(([n,r])=>r),Y(this.getAttribute("progress")),$(n=>n===null?null:Number(n)),F(n=>n===null||Number.isInteger(n)&&Number.isFinite(n)&&n<=100&&n>=0)),this._parsedDisabled$=this._attributeChanges$.pipe(F(([n])=>n==="disabled"),$(([n,r])=>r),Y(this.getAttribute("disabled")),$(n=>n!==null&&n!=="false")),this._parsedIndeterminateProgress$=this._attributeChanges$.pipe(F(([n])=>n==="indeterminate-progress"),$(([n,r])=>r),Y(this.getAttribute("indeterminate-progress")),$(n=>n!==null&&n!=="false")),this._parsedIndeterminateDurationMs$=this._attributeChanges$.pipe(F(([n])=>n==="indeterminate-duration-ms"),$(([n,r])=>r),Y(this.getAttribute("indeterminate-duration-ms")),$(n=>n===null?null:Number(n)),F(n=>n===null||Number.isInteger(n)&&Number.isFinite(n)&&n>=0)),this._indeterminedLoadingAt$=this._parsedIndeterminateProgress$.pipe(Y(!1),Cn(),F(([n,r])=>r&&!n),$(()=>Date.now()),Y(0)),this._loading$=this._parsedProgress$.pipe(yt(this._indeterminedLoadingAt$,this._parsedIndeterminateDurationMs$,this._parsedIndeterminateProgress$),Zi(([n,r,o,i])=>{const s=o!==null?o-Mn>Date.now()-r:!1;return o!==null&&s?Ni(100).pipe($(()=>{const a=Date.now()-r,l=o-Mn,f=Math.max(l,0),c=Math.ceil(a/f*100);return Math.min(100,c)}),Ki(u=>u<100,!0)):_t(i?0:n||0)}),An()),this._activeIndeterminateProgress$=this._parsedIndeterminateProgress$.pipe(yt(this._loading$,this._indeterminedLoadingAt$,this._parsedIndeterminateDurationMs$),Bi(([n,r,o,i])=>{const s=n&&r===100;if(!s){const u=i?i-(Date.now()-o):0;return _t(s).pipe(qi(u))}return _t(s)}),An()),this._disabled$=this._parsedDisabled$.pipe(yt(this._activeIndeterminateProgress$,this._loading$),$(([n,r,o])=>n||r||o>0&&o<100)),this._loadingBarTransitionEnabled$=this._loading$.pipe(Cn(),$(([n,r])=>r>=n),Y(!1))}static get observedAttributes(){return["progress","disabled","indeterminate-progress","indeterminate-duration-ms"]}async connectedCallback(){this.attachShadow({mode:"open"}),D(this).appendChild($o.content.cloneNode(!0)),this._renderSubscription=this._disabled$.pipe(yt(this._loading$,this._activeIndeterminateProgress$,this._loadingBarTransitionEnabled$)).subscribe(r=>{this.render(...r)})}attributeChangedCallback(n){this._attributeChanges$.next([n,this.getAttribute(n)])}render(n,r,o,i){if(!this.shadowRoot)return;const s=D(this),u=C(s,"#progress"),a=C(s,"button");a instanceof HTMLButtonElement&&(a.disabled=n),o?(a.classList.remove("indeterminate-loading-end"),a.classList.add("indeterminate-loading")):(a.classList.add("indeterminate-loading-end"),setTimeout(()=>{a.classList.remove("indeterminate-loading")},500)),i?u.classList.add("transition"):u.classList.remove("transition"),u.style.width=`${r}%`}disconnectedCallback(){var n,r;(n=this._clickSubscription)==null||n.unsubscribe(),(r=this._renderSubscription)==null||r.unsubscribe()}}customElements.define(xo,So);const $o=ct(wo`
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
	</div>
`);let Io={data:""},Eo=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||Io,To=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ko=/\/\*[^]*?\*\/|  +/g,Hn=/\n+/g,J=(t,e)=>{let n="",r="",o="";for(let i in t){let s=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+s+";":r+=i[1]=="f"?J(s,i):i+"{"+J(s,i[1]=="k"?"":e)+"}":typeof s=="object"?r+=J(s,e?e.replace(/([^,])+/g,u=>i.replace(/(^:.*)|([^,])+/g,a=>/&/.test(a)?a.replace(/&/g,u):u?u+" "+a:a)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=J.p?J.p(i,s):i+":"+s+";")}return n+(e&&o?e+"{"+o+"}":o)+r},H={},Ye=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+Ye(t[n]);return e}return t},Oo=(t,e,n,r,o)=>{let i=Ye(t),s=H[i]||(H[i]=(a=>{let l=0,f=11;for(;l<a.length;)f=101*f+a.charCodeAt(l++)>>>0;return"go"+f})(i));if(!H[s]){let a=i!==t?t:(l=>{let f,c,d=[{}];for(;f=To.exec(l.replace(ko,""));)f[4]?d.shift():f[3]?(c=f[3].replace(Hn," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][f[1]]=f[2].replace(Hn," ").trim();return d[0]})(t);H[s]=J(o?{["@keyframes "+s]:a}:a,n?"":"."+s)}let u=n&&H.g?H.g:null;return n&&(H.g=H[s]),((a,l,f,c)=>{c?l.data=l.data.replace(c,a):l.data.indexOf(a)===-1&&(l.data=f?a+l.data:l.data+a)})(H[s],e,r,u),s},Po=(t,e,n)=>t.reduce((r,o,i)=>{let s=e[i];if(s&&s.call){let u=s(n),a=u&&u.props&&u.props.className||/^go/.test(u)&&u;s=a?"."+a:u&&typeof u=="object"?u.props?"":J(u,""):u===!1?"":u}return r+o+(s??"")},"");function K(t){let e=this||{},n=t.call?t(e.p):t;return Oo(n.unshift?n.raw?Po(n,[].slice.call(arguments,1),e.p):n.reduce((r,o)=>Object.assign(r,o&&o.call?o(e.p):o),{}):n,Eo(e.target),e.g,e.o,e.k)}K.bind({g:1});K.bind({k:1});var At,g,Ge,Z,Rn,Je,Jt,hn,Zt,Kt,ot={},Ze=[],Co=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,mn=Array.isArray;function U(t,e){for(var n in e)t[n]=e[n];return t}function Ke(t){var e=t.parentNode;e&&e.removeChild(t)}function Qe(t,e,n){var r,o,i,s={};for(i in e)i=="key"?r=e[i]:i=="ref"?o=e[i]:s[i]=e[i];if(arguments.length>2&&(s.children=arguments.length>3?At.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)s[i]===void 0&&(s[i]=t.defaultProps[i]);return St(t,s,r,o,null)}function St(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Ge,__i:-1,__u:0};return o==null&&g.vnode!=null&&g.vnode(i),i}function jt(t){return t.children}function $t(t,e){this.props=t,this.context=e}function Q(t,e){if(e==null)return t.__?Q(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?Q(t):null}function Xe(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Xe(t)}}function Dn(t){(!t.__d&&(t.__d=!0)&&Z.push(t)&&!Ot.__r++||Rn!==g.debounceRendering)&&((Rn=g.debounceRendering)||Je)(Ot)}function Ot(){var t,e,n,r,o,i,s,u;for(Z.sort(Jt);t=Z.shift();)t.__d&&(e=Z.length,r=void 0,i=(o=(n=t).__v).__e,s=[],u=[],n.__P&&((r=U({},o)).__v=o.__v+1,g.vnode&&g.vnode(r),vn(n.__P,r,o,n.__n,n.__P.namespaceURI,32&o.__u?[i]:null,s,i??Q(o),!!(32&o.__u),u),r.__v=o.__v,r.__.__k[r.__i]=r,er(s,r,u),r.__e!=i&&Xe(r)),Z.length>e&&Z.sort(Jt));Ot.__r=0}function tr(t,e,n,r,o,i,s,u,a,l,f){var c,d,p,h,b,m=r&&r.__k||Ze,v=e.length;for(n.__d=a,Ao(n,e,m),a=n.__d,c=0;c<v;c++)(p=n.__k[c])!=null&&typeof p!="boolean"&&typeof p!="function"&&(d=p.__i===-1?ot:m[p.__i]||ot,p.__i=c,vn(t,p,d,o,i,s,u,a,l,f),h=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&_n(d.ref,null,p),f.push(p.ref,p.__c||h,p)),b==null&&h!=null&&(b=h),65536&p.__u||d.__k===p.__k?(a&&!a.isConnected&&(a=Q(d)),a=nr(p,a,t)):typeof p.type=="function"&&p.__d!==void 0?a=p.__d:h&&(a=h.nextSibling),p.__d=void 0,p.__u&=-196609);n.__d=a,n.__e=b}function Ao(t,e,n){var r,o,i,s,u,a=e.length,l=n.length,f=l,c=0;for(t.__k=[],r=0;r<a;r++)s=r+c,(o=t.__k[r]=(o=e[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?St(null,o,null,null,null):mn(o)?St(jt,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?St(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,u=jo(o,n,s,f),o.__i=u,i=null,u!==-1&&(f--,(i=n[u])&&(i.__u|=131072)),i==null||i.__v===null?(u==-1&&c--,typeof o.type!="function"&&(o.__u|=65536)):u!==s&&(u===s+1?c++:u>s?f>a-s?c+=u-s:c--:u<s?u==s-1&&(c=u-s):c=0,u!==r+c&&(o.__u|=65536))):(i=n[s])&&i.key==null&&i.__e&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=Q(i)),Qt(i,i,!1),n[s]=null,f--);if(f)for(r=0;r<l;r++)(i=n[r])!=null&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=Q(i)),Qt(i,i))}function nr(t,e,n){var r,o;if(typeof t.type=="function"){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,e=nr(r[o],e,n));return e}t.__e!=e&&(n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function jo(t,e,n,r){var o=t.key,i=t.type,s=n-1,u=n+1,a=e[n];if(a===null||a&&o==a.key&&i===a.type&&!(131072&a.__u))return n;if(r>(a!=null&&!(131072&a.__u)?1:0))for(;s>=0||u<e.length;){if(s>=0){if((a=e[s])&&!(131072&a.__u)&&o==a.key&&i===a.type)return s;s--}if(u<e.length){if((a=e[u])&&!(131072&a.__u)&&o==a.key&&i===a.type)return u;u++}}return-1}function Nn(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Co.test(e)?n:n+"px"}function gt(t,e,n,r,o){var i;t:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||Nn(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||Nn(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r?n.u=r.u:(n.u=hn,t.addEventListener(e,i?Kt:Zt,i)):t.removeEventListener(e,i?Kt:Zt,i);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e in t)try{t[e]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function Fn(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=hn++;else if(e.t<n.u)return;return n(g.event?g.event(e):e)}}}function vn(t,e,n,r,o,i,s,u,a,l){var f,c,d,p,h,b,m,v,y,T,W,L,q,ht,Ht,P=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(a=!!(32&n.__u),i=[u=e.__e=n.__e]),(f=g.__b)&&f(e);t:if(typeof P=="function")try{if(v=e.props,y=(f=P.contextType)&&r[f.__c],T=f?y?y.props.value:f.__:r,n.__c?m=(c=e.__c=n.__c).__=c.__E:("prototype"in P&&P.prototype.render?e.__c=c=new P(v,T):(e.__c=c=new $t(v,T),c.constructor=P,c.render=Mo),y&&y.sub(c),c.props=v,c.state||(c.state={}),c.context=T,c.__n=r,d=c.__d=!0,c.__h=[],c._sb=[]),c.__s==null&&(c.__s=c.state),P.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=U({},c.__s)),U(c.__s,P.getDerivedStateFromProps(v,c.__s))),p=c.props,h=c.state,c.__v=e,d)P.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(P.getDerivedStateFromProps==null&&v!==p&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(v,T),!c.__e&&(c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(v,c.__s,T)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(c.props=v,c.state=c.__s,c.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(mt){mt&&(mt.__=e)}),W=0;W<c._sb.length;W++)c.__h.push(c._sb[W]);c._sb=[],c.__h.length&&s.push(c);break t}c.componentWillUpdate!=null&&c.componentWillUpdate(v,c.__s,T),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(p,h,b)})}if(c.context=T,c.props=v,c.__P=t,c.__e=!1,L=g.__r,q=0,"prototype"in P&&P.prototype.render){for(c.state=c.__s,c.__d=!1,L&&L(e),f=c.render(c.props,c.state,c.context),ht=0;ht<c._sb.length;ht++)c.__h.push(c._sb[ht]);c._sb=[]}else do c.__d=!1,L&&L(e),f=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++q<25);c.state=c.__s,c.getChildContext!=null&&(r=U(U({},r),c.getChildContext())),d||c.getSnapshotBeforeUpdate==null||(b=c.getSnapshotBeforeUpdate(p,h)),tr(t,mn(Ht=f!=null&&f.type===jt&&f.key==null?f.props.children:f)?Ht:[Ht],e,n,r,o,i,s,u,a,l),c.base=e.__e,e.__u&=-161,c.__h.length&&s.push(c),m&&(c.__E=c.__=null)}catch(mt){e.__v=null,a||i!=null?(e.__e=u,e.__u|=a?160:32,i[i.indexOf(u)]=null):(e.__e=n.__e,e.__k=n.__k),g.__e(mt,e,n)}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Lo(n.__e,e,n,r,o,i,s,a,l);(f=g.diffed)&&f(e)}function er(t,e,n){e.__d=void 0;for(var r=0;r<n.length;r++)_n(n[r],n[++r],n[++r]);g.__c&&g.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){g.__e(i,o.__v)}})}function Lo(t,e,n,r,o,i,s,u,a){var l,f,c,d,p,h,b,m=n.props,v=e.props,y=e.type;if(y==="svg"?o="http://www.w3.org/2000/svg":y==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(l=0;l<i.length;l++)if((p=i[l])&&"setAttribute"in p==!!y&&(y?p.localName===y:p.nodeType===3)){t=p,i[l]=null;break}}if(t==null){if(y===null)return document.createTextNode(v);t=document.createElementNS(o,y,v.is&&v),i=null,u=!1}if(y===null)m===v||u&&t.data===v||(t.data=v);else{if(i=i&&At.call(t.childNodes),m=n.props||ot,!u&&i!=null)for(m={},l=0;l<t.attributes.length;l++)m[(p=t.attributes[l]).name]=p.value;for(l in m)if(p=m[l],l!="children"){if(l=="dangerouslySetInnerHTML")c=p;else if(l!=="key"&&!(l in v)){if(l=="value"&&"defaultValue"in v||l=="checked"&&"defaultChecked"in v)continue;gt(t,l,null,p,o)}}for(l in v)p=v[l],l=="children"?d=p:l=="dangerouslySetInnerHTML"?f=p:l=="value"?h=p:l=="checked"?b=p:l==="key"||u&&typeof p!="function"||m[l]===p||gt(t,l,p,m[l],o);if(f)u||c&&(f.__html===c.__html||f.__html===t.innerHTML)||(t.innerHTML=f.__html),e.__k=[];else if(c&&(t.innerHTML=""),tr(t,mn(d)?d:[d],e,n,r,y==="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,s,i?i[0]:n.__k&&Q(n,0),u,a),i!=null)for(l=i.length;l--;)i[l]!=null&&Ke(i[l]);u||(l="value",h!==void 0&&(h!==t[l]||y==="progress"&&!h||y==="option"&&h!==m[l])&&gt(t,l,h,m[l],o),l="checked",b!==void 0&&b!==t[l]&&gt(t,l,b,m[l],o))}return t}function _n(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){g.__e(r,n)}}function Qt(t,e,n){var r,o;if(g.unmount&&g.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||_n(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){g.__e(i,e)}r.base=r.__P=null}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&Qt(r[o],e,n||typeof t.type!="function");n||t.__e==null||Ke(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function Mo(t,e,n){return this.constructor(t,n)}function Ho(t,e,n){var r,o,i,s;g.__&&g.__(t,e),o=(r=typeof n=="function")?null:e.__k,i=[],s=[],vn(e,t=(!r&&n||e).__k=Qe(jt,null,[t]),o||ot,ot,e.namespaceURI,!r&&n?[n]:o?null:e.firstChild?At.call(e.childNodes):null,i,!r&&n?n:o?o.__e:e.firstChild,r,s),er(i,t,s)}At=Ze.slice,g={__e:function(t,e,n,r){for(var o,i,s;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),s=o.__d),s)return o.__E=o}catch(u){t=u}throw t}},Ge=0,$t.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=U({},this.state),typeof t=="function"&&(t=t(U({},n),this.props)),t&&U(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Dn(this))},$t.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Dn(this))},$t.prototype.render=jt,Z=[],Je=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Jt=function(t,e){return t.__v.__b-e.__v.__b},Ot.__r=0,hn=0,Zt=Fn(!1),Kt=Fn(!0);var rr=function(t,e,n,r){var o;e[0]=0;for(var i=1;i<e.length;i++){var s=e[i++],u=e[i]?(e[0]|=s?1:2,n[e[i++]]):e[++i];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[e[++i]]=u:s===6?r[1][e[++i]]+=u+"":s?(o=t.apply(u,rr(t,u,n,["",null])),r.push(o),u[0]?e[0]|=2:(e[i-2]=0,e[i]=o)):r.push(u)}return r},Un=new Map;function Ro(t){var e=Un.get(this);return e||(e=new Map,Un.set(this,e)),(e=rr(this,e.get(t)||(e.set(t,e=function(n){for(var r,o,i=1,s="",u="",a=[0],l=function(d){i===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,d,s):i===3&&(d||s)?(a.push(3,d,s),i=2):i===2&&s==="..."&&d?a.push(4,d,0):i===2&&s&&!d?a.push(5,0,!0,s):i>=5&&((s||!d&&i===5)&&(a.push(i,0,s,o),i=6),d&&(a.push(i,d,0,o),i=6)),s=""},f=0;f<n.length;f++){f&&(i===1&&l(),l(f));for(var c=0;c<n[f].length;c++)r=n[f][c],i===1?r==="<"?(l(),a=[a],i=3):s+=r:i===4?s==="--"&&r===">"?(i=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(l(),i=1):i&&(r==="="?(i=5,o=s,s=""):r==="/"&&(i<5||n[f][c+1]===">")?(l(),i===3&&(a=a[0]),i=a,(a=a[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(l(),i=2):s+=r),i===3&&s==="!--"&&(i=4,a=a[0])}return l(),a}(t)),e),arguments,[])).length>1?e:e[0]}var j=Ro.bind(Qe),st,x,zt,zn,ut=0,ir=[],It=[],S=g,Bn=S.__b,Vn=S.__r,Wn=S.diffed,qn=S.__c,Yn=S.unmount,Gn=S.__;function yn(t,e){S.__h&&S.__h(x,t,ut||e),ut=0;var n=x.__H||(x.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:It}),n.__[t]}function I(t){return ut=1,Do(ur,t)}function Do(t,e,n){var r=yn(st++,2);if(r.t=t,!r.__c&&(r.__=[ur(void 0,e),function(u){var a=r.__N?r.__N[0]:r.__[0],l=r.t(a,u);a!==l&&(r.__N=[l,r.__[1]],r.__c.setState({}))}],r.__c=x,!x.u)){var o=function(u,a,l){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(d){return!!d.__c});if(f.every(function(d){return!d.__N}))return!i||i.call(this,u,a,l);var c=!1;return f.forEach(function(d){if(d.__N){var p=d.__[0];d.__=d.__N,d.__N=void 0,p!==d.__[0]&&(c=!0)}}),!(!c&&r.__c.props===u)&&(!i||i.call(this,u,a,l))};x.u=!0;var i=x.shouldComponentUpdate,s=x.componentWillUpdate;x.componentWillUpdate=function(u,a,l){if(this.__e){var f=i;i=void 0,o(u,a,l),i=f}s&&s.call(this,u,a,l)},x.shouldComponentUpdate=o}return r.__N||r.__}function No(t,e){var n=yn(st++,3);!S.__s&&sr(n.__H,e)&&(n.__=t,n.i=e,x.__H.__h.push(n))}function Fo(t){return ut=5,or(function(){return{current:t}},[])}function or(t,e){var n=yn(st++,7);return sr(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function Uo(t,e){return ut=8,or(function(){return t},e)}function zo(){for(var t;t=ir.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Et),t.__H.__h.forEach(Xt),t.__H.__h=[]}catch(e){t.__H.__h=[],S.__e(e,t.__v)}}S.__b=function(t){x=null,Bn&&Bn(t)},S.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Gn&&Gn(t,e)},S.__r=function(t){Vn&&Vn(t),st=0;var e=(x=t.__c).__H;e&&(zt===x?(e.__h=[],x.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=It,n.__N=n.i=void 0})):(e.__h.forEach(Et),e.__h.forEach(Xt),e.__h=[],st=0)),zt=x},S.diffed=function(t){Wn&&Wn(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(ir.push(e)!==1&&zn===S.requestAnimationFrame||((zn=S.requestAnimationFrame)||Bo)(zo)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==It&&(n.__=n.__V),n.i=void 0,n.__V=It})),zt=x=null},S.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Et),n.__h=n.__h.filter(function(r){return!r.__||Xt(r)})}catch(r){e.some(function(o){o.__h&&(o.__h=[])}),e=[],S.__e(r,n.__v)}}),qn&&qn(t,e)},S.unmount=function(t){Yn&&Yn(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Et(r)}catch(o){e=o}}),n.__H=void 0,e&&S.__e(e,n.__v))};var Jn=typeof requestAnimationFrame=="function";function Bo(t){var e,n=function(){clearTimeout(r),Jn&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);Jn&&(e=requestAnimationFrame(n))}function Et(t){var e=x,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),x=e}function Xt(t){var e=x;t.__c=t.__(),x=e}function sr(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function ur(t,e){return typeof e=="function"?e(t):e}function Pt(t,e){var n=I(e),r=n[0],o=n[1],i=Fo(t);return No(function(){var s=i.current.subscribe(o);return function(){return s.unsubscribe()}}),r}var tn=function(t,e){return tn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},tn(t,e)};function Lt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");tn(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function nn(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function en(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,i=[],s;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return i}function rn(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}function R(t){return typeof t=="function"}function ar(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Bt=ar(function(t){return function(n){t(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function on(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Mt=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=nn(s),a=u.next();!a.done;a=u.next()){var l=a.value;l.remove(this)}}catch(b){e={error:b}}finally{try{a&&!a.done&&(n=u.return)&&n.call(u)}finally{if(e)throw e.error}}else s.remove(this);var f=this.initialTeardown;if(R(f))try{f()}catch(b){i=b instanceof Bt?b.errors:[b]}var c=this._finalizers;if(c){this._finalizers=null;try{for(var d=nn(c),p=d.next();!p.done;p=d.next()){var h=p.value;try{Zn(h)}catch(b){i=i??[],b instanceof Bt?i=rn(rn([],en(i)),en(b.errors)):i.push(b)}}}catch(b){r={error:b}}finally{try{p&&!p.done&&(o=d.return)&&o.call(d)}finally{if(r)throw r.error}}}if(i)throw new Bt(i)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)Zn(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&on(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&on(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),cr=Mt.EMPTY;function lr(t){return t instanceof Mt||t&&"closed"in t&&R(t.remove)&&R(t.add)&&R(t.unsubscribe)}function Zn(t){R(t)?t():t.unsubscribe()}var fr={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Vo={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,rn([t,e],en(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function Wo(t){Vo.setTimeout(function(){throw t})}function Kn(){}function Tt(t){t()}var pr=function(t){Lt(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,lr(n)&&n.add(r)):r.destination=Jo,r}return e.create=function(n,r,o){return new sn(n,r,o)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Mt),qo=Function.prototype.bind;function Vt(t,e){return qo.call(t,e)}var Yo=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){wt(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){wt(r)}else wt(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){wt(n)}},t}(),sn=function(t){Lt(e,t);function e(n,r,o){var i=t.call(this)||this,s;if(R(n)||!n)s={next:n??void 0,error:r??void 0,complete:o??void 0};else{var u;i&&fr.useDeprecatedNextContext?(u=Object.create(n),u.unsubscribe=function(){return i.unsubscribe()},s={next:n.next&&Vt(n.next,u),error:n.error&&Vt(n.error,u),complete:n.complete&&Vt(n.complete,u)}):s=n}return i.destination=new Yo(s),i}return e}(pr);function wt(t){Wo(t)}function Go(t){throw t}var Jo={closed:!0,next:Kn,error:Go,complete:Kn},Zo=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Ko(t){return t}function Qo(t){return t.length===0?Ko:t.length===1?t[0]:function(n){return t.reduce(function(r,o){return o(r)},n)}}var Qn=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var o=this,i=ts(e)?e:new sn(e,n,r);return Tt(function(){var s=o,u=s.operator,a=s.source;i.add(u?u.call(i,a):a?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=Xn(n),new n(function(o,i){var s=new sn({next:function(u){try{e(u)}catch(a){i(a),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[Zo]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Qo(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=Xn(e),new e(function(r,o){var i;n.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},t.create=function(e){return new t(e)},t}();function Xn(t){var e;return(e=t??fr.Promise)!==null&&e!==void 0?e:Promise}function Xo(t){return t&&R(t.next)&&R(t.error)&&R(t.complete)}function ts(t){return t&&t instanceof pr||Xo(t)&&lr(t)}var ns=ar(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),gn=function(t){Lt(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new te(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new ns},e.prototype.next=function(n){var r=this;Tt(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=nn(r.currentObservers),u=s.next();!u.done;u=s.next()){var a=u.value;a.next(n)}}catch(l){o={error:l}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},e.prototype.error=function(n){var r=this;Tt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var o=r.observers;o.length;)o.shift().error(n)}})},e.prototype.complete=function(){var n=this;Tt(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,o=this,i=o.hasError,s=o.isStopped,u=o.observers;return i||s?cr:(this.currentObservers=null,u.push(n),new Mt(function(){r.currentObservers=null,on(u,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?n.error(i):s&&n.complete()},e.prototype.asObservable=function(){var n=new Qn;return n.source=this,n},e.create=function(n,r){return new te(n,r)},e}(Qn),te=function(t){Lt(e,t);function e(n,r){var o=t.call(this)||this;return o.destination=n,o.source=r,o}return e.prototype.next=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,n)},e.prototype.error=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&o!==void 0?o:cr},e}(gn),dr=4,br=new gn,hr=br.asObservable();function mr(){return dr}function X(t){dr=t,br.next(t)}var vr="initial",_r=new gn,yr=_r.asObservable();function gr(){return vr}function G(t){vr=t,_r.next(t)}var wr=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},ne=K(ee||(ee=wr([`
	height: 95%;
	display: grid;
	place-content: space-evenly;
`],[`
	height: 95%;
	display: grid;
	place-content: space-evenly;
`])));function bt(t){var e=t.title,n=t.children;return j(re||(re=wr([`
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
	`])),e,ne,n[0],n[1],ne,n[2])}var ee,re,es=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};function rs(){var t=I("I'm an input !"),e=t[0],n=t[1],r=`&lt;crumbs-input
	value="`.concat(e,`"&gt;
&lt;/crumbs-input&gt;`);return j(ie||(ie=es([`
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
	`])),bt,e,function(o){return n(o.originalTarget.value)},e,function(o){return n(o.originalTarget.value)},{__html:r})}var ie,is=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};function os(){var t=I("I'm a <b>paragraph</b> !"),e=t[0],n=t[1];return j(oe||(oe=is([`
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
	`])),bt,{__html:e},e,function(r){return n(r.originalTarget.value)},{__html:"&lt;crumbs-p&gt; ".concat(e," &lt;/crumbs-p&gt;")})}var oe,ss=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},us=function(t,e,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function u(f){try{l(r.next(f))}catch(c){s(c)}}function a(f){try{l(r.throw(f))}catch(c){s(c)}}function l(f){f.done?i(f.value):o(f.value).then(u,a)}l((r=r.apply(t,e||[])).next())})},as=function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(l){return function(f){return a([l,f])}}function a(l){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,l[0]&&(n=0)),n;)try{if(r=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,o=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(f){l=[6,f],o=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}};function cs(){var t=this,e=I("I'm a panel !"),n=e[0],r=e[1],o=I(""),i=o[0],s=o[1],u=I("100"),a=u[0],l=u[1],f=I(!1),c=f[0],d=f[1],p=`&lt;crumbs-panel
	panel-title="`.concat(i,`"
	panel-loading="`).concat(a,`"&gt;
	`).concat(n,`
&lt;/crumbs-panel&gt;`),h=Uo(function(){return us(t,void 0,void 0,function(){var m;return as(this,function(v){switch(v.label){case 0:if(c)return[2];d(!0),l("0"),m=0,v.label=1;case 1:return m<=100?[4,new Promise(function(y){return setTimeout(y,10)})]:[3,4];case 2:v.sent(),l(Math.floor(m).toString()),v.label=3;case 3:return m+=.1+(100-m)/100,[3,1];case 4:return l("100"),d(!1),[2]}})})},[c]),b=function(){c||h()};return j(se||(se=ss([`
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
	`])),bt,a,i,n,i,function(m){return s(m.originalTarget.value)},n,function(m){return r(m.originalTarget.value)},a,function(m){return l(String(m.target.value))},b,{__html:p})}var se,ls=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};function fs(){var t=I("Tab content"),e=t[0],n=t[1],r=I("Tab title"),o=r[0],i=r[1],s=I("Tab content 2"),u=s[0],a=s[1],l=I("Tab title 2"),f=l[0],c=l[1],d=`&lt;crumbs-tabs&gt;
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
		`).concat(f,`
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot="content-2"&gt;
		`).concat(u,`
	&lt;/crumbs-p&gt;
&lt;/crumbs-panel&gt;`);return j(ue||(ue=ls([`
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
	`])),bt,o,e,f,u,o,function(p){return i(p.originalTarget.value)},e,function(p){return n(p.originalTarget.value)},f,function(p){return c(p.originalTarget.value)},u,function(p){return a(p.originalTarget.value)},{__html:d})}var ue,ps=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};function ds(){return j(ae||(ae=ps([`
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
	`])))}var ae,Wt=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};function bs(){var t=Pt(hr,mr),e=Pt(yr,gr),n=K(ce||(ce=Wt([`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`],[`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`]))),r=K(le||(le=Wt([`
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
	`])));return j(fe||(fe=Wt([`
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
	`])),n,r,t===1,function(){return X(1)},t===2,function(){return X(2)},t===3,function(){return X(3)},t===4,function(){return X(4)},t===5,function(){return X(5)},t===6,function(){return X(6)},r,e==="initial",function(){return G("initial")},e==="monospace",function(){return G("monospace")},e==="serif",function(){return G("serif")},e==="sans-serif",function(){return G("sans-serif")},e==="cursive",function(){return G("cursive")},e==="fantasy",function(){return G("fantasy")},e==="system-ui",function(){return G("system-ui")})}var ce,le,fe,hs=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};function ms(){var t="&lt;crumbs-p&gt; Hello world ! &lt;/crumbs-p&gt;";return j(pe||(pe=hs([`
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
	`])),{__html:t})}var pe,vs=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};function _s(){var t=I("Click me !"),e=t[0],n=t[1],r=I("100"),o=r[0],i=r[1],s=I(!1),u=s[0],a=s[1],l=I(!1),f=l[0],c=l[1],d=I(2e3),p=d[0],h=d[1],b=`
		&lt;crumbs-button
			`.concat(u?"	disabled":"",`
			`).concat(f?"	indeterminate-progress":"",`
			`).concat(f?'	indeterminate-duration-ms="'.concat(p,'"'):"",`
				progress="`).concat(o,`"&gt;
				`).concat(e,`
		&lt;/crumbs-button&gt;
	`);return j(de||(de=vs([`
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

				<input type="checkbox" onInput=`,` />
				<label> Disabled </label>

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

				<input type="checkbox" onInput=`,` />
				<label> Disabled </label>

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
	`])),bt,o,o,u,f,p,o,e,e,function(m){return n(m.originalTarget.value)},o,function(m){return i(String(m.target.value))},function(){return a(!u)},function(){return c(!f)},p,function(m){return h(Number(m.originalTarget.value))},{__html:b})}var de;function ys(){const t=Pt(hr,mr),e=Pt(yr,gr),n=K`
		background-image: url('bg${t}.jpg');
		background-size: cover;
		min-height: 100vh;
		position: fixed;
		min-width: 100vw;
		background-position: center;
	`,r=K`
		display: grid;
		overflow-y: scroll;
		height: 100vh;
		grid-template-columns: repeat(auto-fit, minmax(max(28rem + 6vw), 1fr));
		font-family: ${e};
	`;return j`
		<div class=${n}></div>

		<div class=${r}>
			<${ds}><//>
			<${ms}><//>
			<${bs}><//>
			<${os}><//>
			<${cs}><//>
			<${rs}><//>
			<${fs}><//>
			<${_s}><//>
		</div>
	`}Ho(j`<${ys}><//>`,document.body);
