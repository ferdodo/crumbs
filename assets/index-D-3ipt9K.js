var _r=Object.defineProperty;var yr=(e,n,t)=>n in e?_r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var w=(e,n,t)=>yr(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function Ot(e){for(var n,t,r=arguments,o=1,i="",s="",u=[0],a=function(c){o===1&&(c||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(c?r[c]:i):o===3&&(c||i)?(u[1]=c?r[c]:i,o=2):o===2&&i==="..."&&c?u[2]=Object.assign(u[2]||{},r[c]):o===2&&i&&!c?(u[2]=u[2]||{})[i]=!0:o>=5&&(o===5?((u[2]=u[2]||{})[t]=c?i?i+r[c]:r[c]:i,o=6):(c||i)&&(u[2][t]+=c?i+r[c]:i)),i=""},l=0;l<e.length;l++){l&&(o===1&&a(),a(l));for(var f=0;f<e[l].length;f++)n=e[l][f],o===1?n==="<"?(a(),u=[u,"",null],o=3):i+=n:o===4?i==="--"&&n===">"?(o=1,i=""):i=n+i[0]:s?n===s?s="":i+=n:n==='"'||n==="'"?s=n:n===">"?(a(),o=1):o&&(n==="="?(o=5,t=i,i=""):n==="/"&&(o<5||e[l][f+1]===">")?(a(),o===3&&(u=u[0]),o=u,(u=u[0]).push(this.apply(null,o.slice(1))),o=0):n===" "||n==="	"||n===`
`||n==="\r"?(a(),o=2):i+=n),o===3&&i==="!--"&&(o=4,u=u[0])}return a(),u.length>2?u.slice(1):u[1]}function gr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function wr(e){if(e.__esModule)return e;var n=e.default;if(typeof n=="function"){var t=function r(){return this instanceof r?Reflect.construct(n,arguments,this.constructor):n.apply(this,arguments)};t.prototype=n.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),t}var fn={exports:{}};/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */var xr=function(n){var t=String.prototype.split,r=/()??/.exec("")[1]===n,o;return o=function(i,c,u){if(Object.prototype.toString.call(c)!=="[object RegExp]")return t.call(i,c,u);var a=[],l=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.extended?"x":"")+(c.sticky?"y":""),f=0,c=new RegExp(c.source,l+"g"),d,p,h,b;for(i+="",r||(d=new RegExp("^"+c.source+"$(?!\\s)",l)),u=u===n?-1>>>0:u>>>0;(p=c.exec(i))&&(h=p.index+p[0].length,!(h>f&&(a.push(i.slice(f,p.index)),!r&&p.length>1&&p[0].replace(d,function(){for(var m=1;m<arguments.length-2;m++)arguments[m]===n&&(p[m]=n)}),p.length>1&&p.index<i.length&&Array.prototype.push.apply(a,p.slice(1)),b=p[0].length,f=h,a.length>=u)));)c.lastIndex===p.index&&c.lastIndex++;return f===i.length?(b||!c.test(""))&&a.push(""):a.push(i.slice(f)),a.length>u?a.slice(0,u):a},o}(),Sr=[].indexOf,$r=function(e,n){if(Sr)return e.indexOf(n);for(var t=0;t<e.length;++t)if(e[t]===n)return t;return-1},Mt=$r,Ir=Er;function Er(e){var n=e.classList;if(n)return n;var t={add:r,remove:o,contains:i,toggle:s,toString:u,length:0,item:a};return t;function r(c){var d=l();Mt(d,c)>-1||(d.push(c),f(d))}function o(c){var d=l(),p=Mt(d,c);p!==-1&&(d.splice(p,1),f(d))}function i(c){return Mt(l(),c)>-1}function s(c){return i(c)?(o(c),!1):(r(c),!0)}function u(){return e.className}function a(c){var d=l();return d[c]||null}function l(){var c=e.className;return Tr(c.split(" "),kr)}function f(c){var d=c.length;e.className=c.join(" "),t.length=d;for(var p=0;p<c.length;p++)t[p]=c[p];delete c[d]}}function Tr(e,n){for(var t=[],r=0;r<e.length;r++)n(e[r])&&t.push(e[r]);return t}function kr(e){return!!e}const Or={},Pr=Object.freeze(Object.defineProperty({__proto__:null,default:Or},Symbol.toStringTag,{value:"Module"})),Cr=wr(Pr);var Ar=xr,jr=Ir,pn=typeof window>"u"?Cr:window,nt=pn.document,Lr=pn.Text;function dn(){var e=[];function n(){var t=[].slice.call(arguments),r=null;function o(i){var s;function u(c){var d=Ar(c,/([\.#]?[^\s#.]+)/);/^\.|#/.test(d[1])&&(r=nt.createElement("div")),ve(d,function(p){var h=p.substring(1,p.length);p&&(r?p[0]==="."?jr(r).add(h):p[0]==="#"&&r.setAttribute("id",h):r=nt.createElement(p))})}if(i!=null){if(typeof i=="string")r?r.appendChild(s=nt.createTextNode(i)):u(i);else if(typeof i=="number"||typeof i=="boolean"||i instanceof Date||i instanceof RegExp)r.appendChild(s=nt.createTextNode(i.toString()));else if(Hr(i))ve(i,o);else if(Ht(i))r.appendChild(s=i);else if(i instanceof Lr)r.appendChild(s=i);else if(typeof i=="object")for(var a in i)if(typeof i[a]=="function")/^on\w+/.test(a)?function(c,d){r.addEventListener?(r.addEventListener(c.substring(2),d[c],!1),e.push(function(){r.removeEventListener(c.substring(2),d[c],!1)})):(r.attachEvent(c,d[c]),e.push(function(){r.detachEvent(c,d[c])}))}(a,i):(r[a]=i[a](),e.push(i[a](function(c){r[a]=c})));else if(a==="style")if(typeof i[a]=="string")r.style.cssText=i[a];else for(var l in i[a])(function(c,d){if(typeof d=="function")r.style.setProperty(c,d()),e.push(d(function(h){r.style.setProperty(c,h)}));else var p=i[a][c].match(/(.*)\W+!important\W*$/);p?r.style.setProperty(c,p[1],"important"):r.style.setProperty(c,i[a][c])})(l,i[a][l]);else if(a==="attrs")for(var f in i[a])r.setAttribute(f,i[a][f]);else a.substr(0,5)==="data-"?r.setAttribute(a,i[a]):r[a]=i[a];else if(typeof i=="function"){var f=i();r.appendChild(s=Ht(f)?f:nt.createTextNode(f)),e.push(i(function(d){Ht(d)&&s.parentElement?(s.parentElement.replaceChild(d,s),s=d):s.textContent=d}))}}return s}for(;t.length;)o(t.shift());return r}return n.cleanup=function(){for(var t=0;t<e.length;t++)e[t]();e.length=0},n}var Mr=fn.exports=dn();Mr.context=dn;function Ht(e){return e&&e.nodeName&&e.nodeType}function ve(e,n){if(e.forEach)return e.forEach(n);for(var t=0;t<e.length;t++)n(e[t],t)}function Hr(e){return Object.prototype.toString.call(e)=="[object Array]"}var Dr=fn.exports;const ut=gr(Dr);function R(e){if(!e.shadowRoot)throw new Error("There is no shadow root on the element !");return e.shadowRoot}function at(e){const n=Array.isArray(e)?e:[e],t=document.createElement("template");return t.innerHTML=n.map(r=>r.outerHTML).join(""),t}var Vt=function(e,n){return Vt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])},Vt(e,n)};function V(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");Vt(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}function Rr(e,n,t,r){function o(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function u(f){try{l(r.next(f))}catch(c){s(c)}}function a(f){try{l(r.throw(f))}catch(c){s(c)}}function l(f){f.done?i(f.value):o(f.value).then(u,a)}l((r=r.apply(e,n||[])).next())})}function bn(e,n){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(l){return function(f){return a([l,f])}}function a(l){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,l[0]&&(t=0)),t;)try{if(r=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,o=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=n.call(e,t)}catch(f){l=[6,f],o=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function et(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function L(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),o,i=[],s;try{for(;(n===void 0||n-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return i}function N(e,n,t){if(t||arguments.length===2)for(var r=0,o=n.length,i;r<o;r++)(i||!(r in n))&&(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return e.concat(i||Array.prototype.slice.call(n))}function tt(e){return this instanceof tt?(this.v=e,this):new tt(e)}function Nr(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(e,n||[]),o,i=[];return o={},u("next"),u("throw"),u("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(p){return function(h){return Promise.resolve(h).then(p,c)}}function u(p,h){r[p]&&(o[p]=function(b){return new Promise(function(m,v){i.push([p,b,m,v])>1||a(p,b)})},h&&(o[p]=h(o[p])))}function a(p,h){try{l(r[p](h))}catch(b){d(i[0][3],b)}}function l(p){p.value instanceof tt?Promise.resolve(p.value.v).then(f,c):d(i[0][2],p)}function f(p){a("next",p)}function c(p){a("throw",p)}function d(p,h){p(h),i.shift(),i.length&&a(i[0][0],i[0][1])}}function Fr(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof et=="function"?et(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(i){t[i]=e[i]&&function(s){return new Promise(function(u,a){s=e[i](s),o(u,a,s.done,s.value)})}}function o(i,s,u,a){Promise.resolve(a).then(function(l){i({value:l,done:u})},s)}}function _(e){return typeof e=="function"}function re(e){var n=function(r){Error.call(r),r.stack=new Error().stack},t=e(n);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Dt=re(function(e){return function(t){e(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function Et(e,n){if(e){var t=e.indexOf(n);0<=t&&e.splice(t,1)}}var ct=function(){function e(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var n,t,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=et(s),a=u.next();!a.done;a=u.next()){var l=a.value;l.remove(this)}}catch(b){n={error:b}}finally{try{a&&!a.done&&(t=u.return)&&t.call(u)}finally{if(n)throw n.error}}else s.remove(this);var f=this.initialTeardown;if(_(f))try{f()}catch(b){i=b instanceof Dt?b.errors:[b]}var c=this._finalizers;if(c){this._finalizers=null;try{for(var d=et(c),p=d.next();!p.done;p=d.next()){var h=p.value;try{_e(h)}catch(b){i=i??[],b instanceof Dt?i=N(N([],L(i)),L(b.errors)):i.push(b)}}}catch(b){r={error:b}}finally{try{p&&!p.done&&(o=d.return)&&o.call(d)}finally{if(r)throw r.error}}}if(i)throw new Dt(i)}},e.prototype.add=function(n){var t;if(n&&n!==this)if(this.closed)_e(n);else{if(n instanceof e){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(n)}},e.prototype._hasParent=function(n){var t=this._parentage;return t===n||Array.isArray(t)&&t.includes(n)},e.prototype._addParent=function(n){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n},e.prototype._removeParent=function(n){var t=this._parentage;t===n?this._parentage=null:Array.isArray(t)&&Et(t,n)},e.prototype.remove=function(n){var t=this._finalizers;t&&Et(t,n),n instanceof e&&n._removeParent(this)},e.EMPTY=function(){var n=new e;return n.closed=!0,n}(),e}(),hn=ct.EMPTY;function mn(e){return e instanceof ct||e&&"closed"in e&&_(e.remove)&&_(e.add)&&_(e.unsubscribe)}function _e(e){_(e)?e():e.unsubscribe()}var vn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},_n={setTimeout:function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];return setTimeout.apply(void 0,N([e,n],L(t)))},clearTimeout:function(e){var n=_n.delegate;return((n==null?void 0:n.clearTimeout)||clearTimeout)(e)},delegate:void 0};function yn(e){_n.setTimeout(function(){throw e})}function ye(){}function gt(e){e()}var ie=function(e){V(n,e);function n(t){var r=e.call(this)||this;return r.isStopped=!1,t?(r.destination=t,mn(t)&&t.add(r)):r.destination=Vr,r}return n.create=function(t,r,o){return new rt(t,r,o)},n.prototype.next=function(t){this.isStopped||this._next(t)},n.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(ct),Ur=Function.prototype.bind;function Rt(e,n){return Ur.call(e,n)}var zr=function(){function e(n){this.partialObserver=n}return e.prototype.next=function(n){var t=this.partialObserver;if(t.next)try{t.next(n)}catch(r){mt(r)}},e.prototype.error=function(n){var t=this.partialObserver;if(t.error)try{t.error(n)}catch(r){mt(r)}else mt(n)},e.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(t){mt(t)}},e}(),rt=function(e){V(n,e);function n(t,r,o){var i=e.call(this)||this,s;if(_(t)||!t)s={next:t??void 0,error:r??void 0,complete:o??void 0};else{var u;i&&vn.useDeprecatedNextContext?(u=Object.create(t),u.unsubscribe=function(){return i.unsubscribe()},s={next:t.next&&Rt(t.next,u),error:t.error&&Rt(t.error,u),complete:t.complete&&Rt(t.complete,u)}):s=t}return i.destination=new zr(s),i}return n}(ie);function mt(e){yn(e)}function Br(e){throw e}var Vr={closed:!0,next:ye,error:Br,complete:ye},oe=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function lt(e){return e}function Wr(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return gn(e)}function gn(e){return e.length===0?lt:e.length===1?e[0]:function(t){return e.reduce(function(r,o){return o(r)},t)}}var E=function(){function e(n){n&&(this._subscribe=n)}return e.prototype.lift=function(n){var t=new e;return t.source=this,t.operator=n,t},e.prototype.subscribe=function(n,t,r){var o=this,i=Yr(n)?n:new rt(n,t,r);return gt(function(){var s=o,u=s.operator,a=s.source;i.add(u?u.call(i,a):a?o._subscribe(i):o._trySubscribe(i))}),i},e.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(t){n.error(t)}},e.prototype.forEach=function(n,t){var r=this;return t=ge(t),new t(function(o,i){var s=new rt({next:function(u){try{n(u)}catch(a){i(a),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},e.prototype._subscribe=function(n){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(n)},e.prototype[oe]=function(){return this},e.prototype.pipe=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return gn(n)(this)},e.prototype.toPromise=function(n){var t=this;return n=ge(n),new n(function(r,o){var i;t.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},e.create=function(n){return new e(n)},e}();function ge(e){var n;return(n=e??vn.Promise)!==null&&n!==void 0?n:Promise}function qr(e){return e&&_(e.next)&&_(e.error)&&_(e.complete)}function Yr(e){return e&&e instanceof ie||qr(e)&&mn(e)}function Gr(e){return _(e==null?void 0:e.lift)}function k(e){return function(n){if(Gr(n))return n.lift(function(t){try{return e(t,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function O(e,n,t,r,o){return new Jr(e,n,t,r,o)}var Jr=function(e){V(n,e);function n(t,r,o,i,s,u){var a=e.call(this,t)||this;return a.onFinalize=s,a.shouldUnsubscribe=u,a._next=r?function(l){try{r(l)}catch(f){t.error(f)}}:e.prototype._next,a._error=i?function(l){try{i(l)}catch(f){t.error(f)}finally{this.unsubscribe()}}:e.prototype._error,a._complete=o?function(){try{o()}catch(l){t.error(l)}finally{this.unsubscribe()}}:e.prototype._complete,a}return n.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},n}(ie),Zr=re(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),se=function(e){V(n,e);function n(){var t=e.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return n.prototype.lift=function(t){var r=new we(this,this);return r.operator=t,r},n.prototype._throwIfClosed=function(){if(this.closed)throw new Zr},n.prototype.next=function(t){var r=this;gt(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=et(r.currentObservers),u=s.next();!u.done;u=s.next()){var a=u.value;a.next(t)}}catch(l){o={error:l}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},n.prototype.error=function(t){var r=this;gt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=t;for(var o=r.observers;o.length;)o.shift().error(t)}})},n.prototype.complete=function(){var t=this;gt(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var r=t.observers;r.length;)r.shift().complete()}})},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},n.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},n.prototype._innerSubscribe=function(t){var r=this,o=this,i=o.hasError,s=o.isStopped,u=o.observers;return i||s?hn:(this.currentObservers=null,u.push(t),new ct(function(){r.currentObservers=null,Et(u,t)}))},n.prototype._checkFinalizedStatuses=function(t){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?t.error(i):s&&t.complete()},n.prototype.asObservable=function(){var t=new E;return t.source=this,t},n.create=function(t,r){return new we(t,r)},n}(E),we=function(e){V(n,e);function n(t,r){var o=e.call(this)||this;return o.destination=t,o.source=r,o}return n.prototype.next=function(t){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,t)},n.prototype.error=function(t){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,t)},n.prototype.complete=function(){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||r===void 0||r.call(t)},n.prototype._subscribe=function(t){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(t))!==null&&o!==void 0?o:hn},n}(se),Kr={now:function(){return Date.now()},delegate:void 0},Qr=function(e){V(n,e);function n(t,r){return e.call(this)||this}return n.prototype.schedule=function(t,r){return this},n}(ct),xe={setInterval:function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];return setInterval.apply(void 0,N([e,n],L(t)))},clearInterval:function(e){return clearInterval(e)},delegate:void 0},Xr=function(e){V(n,e);function n(t,r){var o=e.call(this,t,r)||this;return o.scheduler=t,o.work=r,o.pending=!1,o}return n.prototype.schedule=function(t,r){var o;if(r===void 0&&(r=0),this.closed)return this;this.state=t;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=(o=this.id)!==null&&o!==void 0?o:this.requestAsyncId(s,this.id,r),this},n.prototype.requestAsyncId=function(t,r,o){return o===void 0&&(o=0),xe.setInterval(t.flush.bind(t,this),o)},n.prototype.recycleAsyncId=function(t,r,o){if(o===void 0&&(o=0),o!=null&&this.delay===o&&this.pending===!1)return r;r!=null&&xe.clearInterval(r)},n.prototype.execute=function(t,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var o=this._execute(t,r);if(o)return o;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(t,r){var o=!1,i;try{this.work(t)}catch(s){o=!0,i=s||new Error("Scheduled action threw falsy error")}if(o)return this.unsubscribe(),i},n.prototype.unsubscribe=function(){if(!this.closed){var t=this,r=t.id,o=t.scheduler,i=o.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Et(i,this),r!=null&&(this.id=this.recycleAsyncId(o,r,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},n}(Qr),Se=function(){function e(n,t){t===void 0&&(t=e.now),this.schedulerActionCtor=n,this.now=t}return e.prototype.schedule=function(n,t,r){return t===void 0&&(t=0),new this.schedulerActionCtor(this,n).schedule(r,t)},e.now=Kr.now,e}(),ti=function(e){V(n,e);function n(t,r){r===void 0&&(r=Se.now);var o=e.call(this,t,r)||this;return o.actions=[],o._active=!1,o}return n.prototype.flush=function(t){var r=this.actions;if(this._active){r.push(t);return}var o;this._active=!0;do if(o=t.execute(t.state,t.delay))break;while(t=r.shift());if(this._active=!1,o){for(;t=r.shift();)t.unsubscribe();throw o}},n}(Se),wn=new ti(Xr),ei=wn,xn=new E(function(e){return e.complete()});function Sn(e){return e&&_(e.schedule)}function ue(e){return e[e.length-1]}function $n(e){return _(ue(e))?e.pop():void 0}function ft(e){return Sn(ue(e))?e.pop():void 0}function ni(e,n){return typeof ue(e)=="number"?e.pop():n}var ae=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function In(e){return _(e==null?void 0:e.then)}function En(e){return _(e[oe])}function Tn(e){return Symbol.asyncIterator&&_(e==null?void 0:e[Symbol.asyncIterator])}function kn(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function ri(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var On=ri();function Pn(e){return _(e==null?void 0:e[On])}function Cn(e){return Nr(this,arguments,function(){var t,r,o,i;return bn(this,function(s){switch(s.label){case 0:t=e.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,tt(t.read())];case 3:return r=s.sent(),o=r.value,i=r.done,i?[4,tt(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,tt(o)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function An(e){return _(e==null?void 0:e.getReader)}function M(e){if(e instanceof E)return e;if(e!=null){if(En(e))return ii(e);if(ae(e))return oi(e);if(In(e))return si(e);if(Tn(e))return jn(e);if(Pn(e))return ui(e);if(An(e))return ai(e)}throw kn(e)}function ii(e){return new E(function(n){var t=e[oe]();if(_(t.subscribe))return t.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function oi(e){return new E(function(n){for(var t=0;t<e.length&&!n.closed;t++)n.next(e[t]);n.complete()})}function si(e){return new E(function(n){e.then(function(t){n.closed||(n.next(t),n.complete())},function(t){return n.error(t)}).then(null,yn)})}function ui(e){return new E(function(n){var t,r;try{for(var o=et(e),i=o.next();!i.done;i=o.next()){var s=i.value;if(n.next(s),n.closed)return}}catch(u){t={error:u}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}n.complete()})}function jn(e){return new E(function(n){ci(e,n).catch(function(t){return n.error(t)})})}function ai(e){return jn(Cn(e))}function ci(e,n){var t,r,o,i;return Rr(this,void 0,void 0,function(){var s,u;return bn(this,function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),t=Fr(e),a.label=1;case 1:return[4,t.next()];case 2:if(r=a.sent(),!!r.done)return[3,4];if(s=r.value,n.next(s),n.closed)return[2];a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return u=a.sent(),o={error:u},[3,11];case 6:return a.trys.push([6,,9,10]),r&&!r.done&&(i=t.return)?[4,i.call(t)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}})})}function z(e,n,t,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=n.schedule(function(){t(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function Ln(e,n){return n===void 0&&(n=0),k(function(t,r){t.subscribe(O(r,function(o){return z(r,e,function(){return r.next(o)},n)},function(){return z(r,e,function(){return r.complete()},n)},function(o){return z(r,e,function(){return r.error(o)},n)}))})}function Mn(e,n){return n===void 0&&(n=0),k(function(t,r){r.add(e.schedule(function(){return t.subscribe(r)},n))})}function li(e,n){return M(e).pipe(Mn(n),Ln(n))}function fi(e,n){return M(e).pipe(Mn(n),Ln(n))}function pi(e,n){return new E(function(t){var r=0;return n.schedule(function(){r===e.length?t.complete():(t.next(e[r++]),t.closed||this.schedule())})})}function di(e,n){return new E(function(t){var r;return z(t,n,function(){r=e[On](),z(t,n,function(){var o,i,s;try{o=r.next(),i=o.value,s=o.done}catch(u){t.error(u);return}s?t.complete():t.next(i)},0,!0)}),function(){return _(r==null?void 0:r.return)&&r.return()}})}function Hn(e,n){if(!e)throw new Error("Iterable cannot be null");return new E(function(t){z(t,n,function(){var r=e[Symbol.asyncIterator]();z(t,n,function(){r.next().then(function(o){o.done?t.complete():t.next(o.value)})},0,!0)})})}function bi(e,n){return Hn(Cn(e),n)}function hi(e,n){if(e!=null){if(En(e))return li(e,n);if(ae(e))return pi(e,n);if(In(e))return fi(e,n);if(Tn(e))return Hn(e,n);if(Pn(e))return di(e,n);if(An(e))return bi(e,n)}throw kn(e)}function pt(e,n){return n?hi(e,n):M(e)}function $e(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=ft(e);return pt(e,t)}var Dn=re(function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}});function mi(e){return e instanceof Date&&!isNaN(e)}function $(e,n){return k(function(t,r){var o=0;t.subscribe(O(r,function(i){r.next(e.call(n,i,o++))}))})}var vi=Array.isArray;function _i(e,n){return vi(n)?e.apply(void 0,N([],L(n))):e(n)}function ce(e){return $(function(n){return _i(e,n)})}var yi=Array.isArray,gi=Object.getPrototypeOf,wi=Object.prototype,xi=Object.keys;function Si(e){if(e.length===1){var n=e[0];if(yi(n))return{args:n,keys:null};if($i(n)){var t=xi(n);return{args:t.map(function(r){return n[r]}),keys:t}}}return{args:e,keys:null}}function $i(e){return e&&typeof e=="object"&&gi(e)===wi}function Ii(e,n){return e.reduce(function(t,r,o){return t[r]=n[o],t},{})}function Ei(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=ft(e),r=$n(e),o=Si(e),i=o.args,s=o.keys;if(i.length===0)return pt([],t);var u=new E(Rn(i,t,s?function(a){return Ii(s,a)}:lt));return r?u.pipe(ce(r)):u}function Rn(e,n,t){return t===void 0&&(t=lt),function(r){Ie(n,function(){for(var o=e.length,i=new Array(o),s=o,u=o,a=function(f){Ie(n,function(){var c=pt(e[f],n),d=!1;c.subscribe(O(r,function(p){i[f]=p,d||(d=!0,u--),u||r.next(t(i.slice()))},function(){--s||r.complete()}))},r)},l=0;l<o;l++)a(l)},r)}}function Ie(e,n,t){e?z(t,e,n):n()}function Ti(e,n,t,r,o,i,s,u){var a=[],l=0,f=0,c=!1,d=function(){c&&!a.length&&!l&&n.complete()},p=function(b){return l<r?h(b):a.push(b)},h=function(b){l++;var m=!1;M(t(b,f++)).subscribe(O(n,function(v){n.next(v)},function(){m=!0},void 0,function(){if(m)try{l--;for(var v=function(){var y=a.shift();s||h(y)};a.length&&l<r;)v();d()}catch(y){n.error(y)}}))};return e.subscribe(O(n,p,function(){c=!0,d()})),function(){}}function le(e,n,t){return t===void 0&&(t=1/0),_(n)?le(function(r,o){return $(function(i,s){return n(r,i,o,s)})(M(e(r,o)))},t):(typeof n=="number"&&(t=n),k(function(r,o){return Ti(r,o,e,t)}))}function Nn(e){return e===void 0&&(e=1/0),le(lt,e)}function ki(){return Nn(1)}function Ee(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return ki()(pt(e,ft(e)))}var Oi=["addListener","removeListener"],Pi=["addEventListener","removeEventListener"],Ci=["on","off"];function B(e,n,t,r){if(_(t)&&(r=t,t=void 0),r)return B(e,n,t).pipe(ce(r));var o=L(Li(e)?Pi.map(function(u){return function(a){return e[u](n,a,t)}}):Ai(e)?Oi.map(Te(e,n)):ji(e)?Ci.map(Te(e,n)):[],2),i=o[0],s=o[1];if(!i&&ae(e))return le(function(u){return B(u,n,t)})(M(e));if(!i)throw new TypeError("Invalid event target");return new E(function(u){var a=function(){for(var l=[],f=0;f<arguments.length;f++)l[f]=arguments[f];return u.next(1<l.length?l:l[0])};return i(a),function(){return s(a)}})}function Te(e,n){return function(t){return function(r){return e[t](n,r)}}}function Ai(e){return _(e.addListener)&&_(e.removeListener)}function ji(e){return _(e.on)&&_(e.off)}function Li(e){return _(e.addEventListener)&&_(e.removeEventListener)}function Mi(e,n,t){t===void 0&&(t=ei);var r=-1;return Sn(n)?t=n:r=n,new E(function(o){var i=mi(e)?+e-t.now():e;i<0&&(i=0);var s=0;return t.schedule(function(){o.closed||(o.next(s++),0<=r?this.schedule(void 0,r):o.complete())},i)})}function Hi(e,n){return n===void 0&&(n=wn),Mi(e,e,n)}function Di(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=ft(e),r=ni(e,1/0),o=e;return o.length?o.length===1?M(o[0]):Nn(r)(pt(o,t)):xn}var Ri=Array.isArray;function Ni(e){return e.length===1&&Ri(e[0])?e[0]:e}function F(e,n){return k(function(t,r){var o=0;t.subscribe(O(r,function(i){return e.call(n,i,o++)&&r.next(i)}))})}function Fn(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=$n(e);return t?Wr(Fn.apply(void 0,N([],L(e))),ce(t)):k(function(r,o){Rn(N([r],L(Ni(e))))(o)})}function vt(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Fn.apply(void 0,N([],L(e)))}function Fi(e){return k(function(n,t){var r=!1;n.subscribe(O(t,function(o){r=!0,t.next(o)},function(){r||t.next(e),t.complete()}))})}function Ui(e){return e<=0?function(){return xn}:k(function(n,t){var r=0;n.subscribe(O(t,function(o){++r<=e&&(t.next(o),e<=r&&t.complete())}))})}function ke(e){return $(function(){return e})}function zi(e){return e===void 0&&(e=Bi),k(function(n,t){var r=!1;n.subscribe(O(t,function(o){r=!0,t.next(o)},function(){return r?t.complete():t.error(e())}))})}function Bi(){return new Dn}function Vi(e,n){var t=arguments.length>=2;return function(r){return r.pipe(lt,Ui(1),t?Fi(n):zi(function(){return new Dn}))}}function Oe(){return k(function(e,n){var t,r=!1;e.subscribe(O(n,function(o){var i=t;t=o,r&&n.next([i,o]),r=!0}))})}function Wi(e){e===void 0&&(e={});var n=e.connector,t=n===void 0?function(){return new se}:n,r=e.resetOnError,o=r===void 0?!0:r,i=e.resetOnComplete,s=i===void 0?!0:i,u=e.resetOnRefCountZero,a=u===void 0?!0:u;return function(l){var f,c,d,p=0,h=!1,b=!1,m=function(){c==null||c.unsubscribe(),c=void 0},v=function(){m(),f=d=void 0,h=b=!1},y=function(){var T=f;v(),T==null||T.unsubscribe()};return k(function(T,W){p++,!b&&!h&&m();var j=d=d??t();W.add(function(){p--,p===0&&!b&&!h&&(c=Nt(y,a))}),j.subscribe(W),!f&&p>0&&(f=new rt({next:function(q){return j.next(q)},error:function(q){b=!0,m(),c=Nt(v,o,q),j.error(q)},complete:function(){h=!0,m(),c=Nt(v,s),j.complete()}}),M(T).subscribe(f))})(l)}}function Nt(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];if(n===!0){e();return}if(n!==!1){var o=new rt({next:function(){o.unsubscribe(),e()}});return M(n.apply(void 0,N([],L(t)))).subscribe(o)}}function Y(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=ft(e);return k(function(r,o){(t?Ee(e,r,t):Ee(e,r)).subscribe(o)})}function qi(e,n){return k(function(t,r){var o=null,i=0,s=!1,u=function(){return s&&!o&&r.complete()};t.subscribe(O(r,function(a){o==null||o.unsubscribe();var l=0,f=i++;M(e(a,f)).subscribe(o=O(r,function(c){return r.next(n?n(a,c,f,l++):c)},function(){o=null,u()}))},function(){s=!0,u()}))})}function Yi(e,n){return k(function(t,r){var o=0;t.subscribe(O(r,function(i){var s=e(i,o++);(s||n)&&r.next(i),!s&&r.complete()}))})}function Un(){return!document.hidden}function Gi(){const e=B(document,"visibilitychange"),n=B(window,"focus").pipe(ke(!0)),t=B(window,"blur").pipe(ke(!1)),r=Di(n,t);return Ei(e,r).pipe($(([,o])=>Un()&&o),F(o=>o),Vi())}const Ji=B(document,"mouseover");async function Zi(){Un()||await Promise.race([Gi().toPromise(),Ji.toPromise()])}async function Ki(){await new Promise(e=>setTimeout(e,400)),await Zi(),await new Promise(e=>setTimeout(e,400))}const Qi=Ki();function C(e,n){const t=e.querySelector(n);if(!t)throw new Error("Failed to find element ${ selector } !");return t}const Xi=Ot.bind(ut),to="crumbs-p",eo=at(Xi`
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
`);let no=class extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const n=R(this),t=eo.content.cloneNode(!0);n.appendChild(t)}};customElements.define(to,no);const ro=Ot.bind(ut),io="crumbs-panel",oo=at(ro`
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
`);class so extends HTMLElement{constructor(){super(...arguments);w(this,"contentTimeoutElapsed",!1);w(this,"contentLoaded",!1);w(this,"connected",!1);w(this,"loading","100");w(this,"scrolled",!1);w(this,"scrolledSubscription",null)}static get observedAttributes(){return["panel-loading","panel-title"]}async connectedCallback(){this.attachShadow({mode:"open"}),await Qi;const t=R(this),r=oo.content.cloneNode(!0);t.appendChild(r);const o=this.getAttribute("panel-loading");o!==null&&Pe(o)&&(this.loading=o),setTimeout(()=>{const i=C(t,"#panel-container");i.style.gridTemplateColumns="1rem 1fr 1rem",i.style.gridTemplateRows="1rem 1fr 1rem";const s=C(t,"#panel");s.style.backgroundColor="#ffffff40",this.scrolledSubscription=B(s,"scroll").pipe($(u=>u.target.scrollTop),$(u=>u!==0)).subscribe(u=>{this.scrolled=u,this.render()}),this.render()},10),setTimeout(()=>{this.contentTimeoutElapsed=!0,this.render()},400),this.connected=!0,this.render()}render(){const t=R(this),r=C(t,"#panel-content"),o=C(t,"#panel-loading"),i=C(t,"#panel"),s=C(t,"#panel-title-content");this.contentTimeoutElapsed&&uo(this.loading)?(r.style.visibility="visible",r.style.opacity="1",i.style.overflow="auto"):(r.style.visibility="collapse",r.style.opacity="0",i.style.overflow="hidden"),o.style.width=`${this.loading}%`;const u=C(t,"#panel-title");this.loading==="100"&&this.getAttribute("panel-title")&&!this.scrolled?setTimeout(()=>{u.style.opacity="1",s.innerHTML=this.getAttribute("panel-title")||"",r.style.paddingTop="2.5rem"},10):(r.style.paddingTop="inherit",u.style.opacity="0")}attributeChangedCallback(){if(this.shadowRoot&&this.connected){const t=this.getAttribute("panel-loading");t!==null&&Pe(t)?this.loading=t:t===null&&(this.loading="100"),this.render()}}disconnectedCallback(){var t;(t=this.scrolledSubscription)==null||t.unsubscribe()}}function Pe(e){const n=Number(e),t=Math.floor(n);return t===n&&Number.isInteger(t)&&Number.isFinite(t)&&t<=100&&t>=0}function uo(e){return e===null||e==="100"}customElements.define(io,so);const ao=Ot.bind(ut),co="crumbs-input",lo=at(ao`
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
`);class fo extends HTMLElement{static get observedAttributes(){return["value"]}async connectedCallback(){this.attachShadow({mode:"open"});const n=R(this),t=lo.content.cloneNode(!0);n.appendChild(t);const r=C(n,"input"),o=this.getAttribute("value");r instanceof HTMLInputElement&&o&&(r.value=o)}attributeChangedCallback(n,t,r){if(n==="value"&&this.shadowRoot){const o=R(this),i=C(o,"input");i instanceof HTMLInputElement&&(i.value=r)}}}customElements.define(co,fo);const Wt=Ot.bind(ut),po="crumbs-tabs",bo=at(Wt`
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
`);class ho extends HTMLElement{constructor(){super(...arguments);w(this,"selected",1);w(this,"subscriptions",[])}async connectedCallback(){this.attachShadow({mode:"open"});const t=R(this),r=bo.content.cloneNode(!0);t.appendChild(r);const o=this.getAttribute("selected");this.selected=Number.parseInt(o||"1");const i=t.querySelector("#tabs"),s=t.querySelector("#content");if(!i)throw new Error("Tabs not found");if(!s)throw new Error("Content not found");for(const u of{[Symbol.iterator]:()=>this.getSlots()}){if(u.startsWith("content-")){const a=Wt`<div id=${`${u}`}> <slot name=${u}></slot> </div>`;a instanceof Element&&s.appendChild(a)}if(u.startsWith("title-")){const a=Wt`<div id=${u}> <crumbs-p> <slot name=${u}></slot> </crumbs-p> </div>`;a instanceof Element&&i.appendChild(a)}}this.subscriptions=[...i.children].map((u,a)=>B(u,"click").subscribe(()=>{const l=u.id.replace("title-","content-"),f=t.querySelector(`#${l}`);f instanceof HTMLElement&&s instanceof HTMLElement&&f.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.selected=a+1,this.render()})),this.render()}render(){const r=R(this).querySelector("#tabs");if(!r)throw new Error("Tabs not found");[...r.children].forEach((o,i)=>{i+1===this.selected?o instanceof HTMLElement&&o.classList.add("selected-title"):o instanceof HTMLElement&&o.classList.remove("selected-title")})}disconnectedCallback(){for(const t of this.subscriptions)t.unsubscribe()}*getSlots(){for(const t of Array.from(this.children)){const r=t.getAttribute("slot");r&&(yield r)}}}customElements.define(po,ho);var zn=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var s=n[i++],u=n[i]?(n[0]|=s?1:2,t[n[i++]]):n[++i];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[n[++i]]=u:s===6?r[1][n[++i]]+=u+"":s?(o=e.apply(u,zn(e,u,t,["",null])),r.push(o),u[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(u)}return r},Ce=new Map;function mo(e){var n=Ce.get(this);return n||(n=new Map,Ce.set(this,n)),(n=zn(this,n.get(e)||(n.set(e,n=function(t){for(var r,o,i=1,s="",u="",a=[0],l=function(d){i===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,d,s):i===3&&(d||s)?(a.push(3,d,s),i=2):i===2&&s==="..."&&d?a.push(4,d,0):i===2&&s&&!d?a.push(5,0,!0,s):i>=5&&((s||!d&&i===5)&&(a.push(i,0,s,o),i=6),d&&(a.push(i,d,0,o),i=6)),s=""},f=0;f<t.length;f++){f&&(i===1&&l(),l(f));for(var c=0;c<t[f].length;c++)r=t[f][c],i===1?r==="<"?(l(),a=[a],i=3):s+=r:i===4?s==="--"&&r===">"?(i=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(l(),i=1):i&&(r==="="?(i=5,o=s,s=""):r==="/"&&(i<5||t[f][c+1]===">")?(l(),i===3&&(a=a[0]),i=a,(a=a[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(l(),i=2):s+=r),i===3&&s==="!--"&&(i=4,a=a[0])}return l(),a}(e)),n),arguments,[])).length>1?n:n[0]}const vo=mo.bind(ut),_o="crumbs-button",yo=600;class go extends HTMLElement{constructor(){super();w(this,"_renderSubscription",null);w(this,"_clickSubscription",null);w(this,"_attributeChanges$",new se);w(this,"_parsedProgress$");w(this,"_parsedDisabled$");w(this,"_parsedIndeterminateProgress$");w(this,"_parsedIndeterminateDurationMs$");w(this,"_indeterminedLoadingAt$");w(this,"_loading$");w(this,"_activeIndeterminateProgress$");w(this,"_disabled$");w(this,"_loadingBarTransitionEnabled$");this._parsedProgress$=this._attributeChanges$.pipe(F(([t])=>t==="progress"),$(([t,r])=>r),Y(this.getAttribute("progress")),$(t=>t===null?null:Number(t)),F(t=>t===null||Number.isInteger(t)&&Number.isFinite(t)&&t<=100&&t>=0)),this._parsedDisabled$=this._attributeChanges$.pipe(F(([t])=>t==="disabled"),$(([t,r])=>r),Y(this.getAttribute("disabled")),$(t=>t!==null&&t!=="false")),this._parsedIndeterminateProgress$=this._attributeChanges$.pipe(F(([t])=>t==="indeterminate-progress"),$(([t,r])=>r),Y(this.getAttribute("indeterminate-progress")),$(t=>t!==null&&t!=="false")),this._parsedIndeterminateDurationMs$=this._attributeChanges$.pipe(F(([t])=>t==="indeterminate-duration-ms"),$(([t,r])=>r),Y(this.getAttribute("indeterminate-duration-ms")),$(t=>t===null?null:Number(t)),F(t=>t===null||Number.isInteger(t)&&Number.isFinite(t)&&t>=0)),this._indeterminedLoadingAt$=this._parsedIndeterminateProgress$.pipe(Y(!1),Oe(),F(([t,r])=>r&&!t),$(()=>Date.now()),Y(0)),this._loading$=this._parsedProgress$.pipe(vt(this._indeterminedLoadingAt$,this._parsedIndeterminateDurationMs$,this._parsedIndeterminateProgress$),qi(([t,r,o,i])=>i?r&&o!==null?Hi(100).pipe($(()=>{const u=Date.now()-r,a=o-yo,l=Math.max(a,0),f=Math.ceil(u/l*100);return Math.min(100,f)}),Yi(s=>s<100,!0)):$e(0):$e(t||0)),Wi()),this._activeIndeterminateProgress$=this._parsedIndeterminateProgress$.pipe(vt(this._loading$),$(([t,r])=>t&&r===100)),this._disabled$=this._parsedDisabled$.pipe(vt(this._activeIndeterminateProgress$,this._loading$),$(([t,r,o])=>t||r||o>0&&o<100)),this._loadingBarTransitionEnabled$=this._loading$.pipe(Oe(),$(([t,r])=>r>=t),Y(!1)),this._parsedProgress$.subscribe(t=>console.log("parsedProgress",t)),this._parsedDisabled$.subscribe(t=>console.log("parsedDisabled",t)),this._parsedIndeterminateProgress$.subscribe(t=>console.log("parsedIndeterminateProgress",t)),this._parsedIndeterminateDurationMs$.subscribe(t=>console.log("parsedIndeterminateDurationMs",t)),this._indeterminedLoadingAt$.subscribe(t=>console.log("indeterminedLoadingAt",t)),this._loading$.subscribe(t=>console.log("loading",t)),this._activeIndeterminateProgress$.subscribe(t=>console.log("activeIndeterminateProgress",t)),this._disabled$.subscribe(t=>console.log("disabled",t)),this._loadingBarTransitionEnabled$.subscribe(t=>console.log("loadingBarTransitionEnabled",t))}static get observedAttributes(){return["progress","disabled","indeterminate-progress","indeterminate-duration-ms"]}async connectedCallback(){this.attachShadow({mode:"open"}),R(this).appendChild(wo.content.cloneNode(!0)),this._renderSubscription=this._disabled$.pipe(vt(this._loading$,this._activeIndeterminateProgress$,this._loadingBarTransitionEnabled$)).subscribe(r=>{console.log("render"),this.render(...r)})}attributeChangedCallback(t){this._attributeChanges$.next([t,this.getAttribute(t)])}render(t,r,o,i){if(!this.shadowRoot)return;const s=R(this),u=C(s,"#progress"),a=C(s,"button");a instanceof HTMLButtonElement&&(a.disabled=t),o?a.classList.add("indeterminate-loading"):a.classList.remove("indeterminate-loading"),i?u.classList.add("transition"):u.classList.remove("transition"),u.style.width=`${r}%`}disconnectedCallback(){var t,r;(t=this._clickSubscription)==null||t.unsubscribe(),(r=this._renderSubscription)==null||r.unsubscribe()}}customElements.define(_o,go);const wo=at(vo`
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
				background-color: rgba(255, 255, 255, 0.15);
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
`);let xo={data:""},So=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||xo,$o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Io=/\/\*[^]*?\*\/|  +/g,Ae=/\n+/g,J=(e,n)=>{let t="",r="",o="";for(let i in e){let s=e[i];i[0]=="@"?i[1]=="i"?t=i+" "+s+";":r+=i[1]=="f"?J(s,i):i+"{"+J(s,i[1]=="k"?"":n)+"}":typeof s=="object"?r+=J(s,n?n.replace(/([^,])+/g,u=>i.replace(/(^:.*)|([^,])+/g,a=>/&/.test(a)?a.replace(/&/g,u):u?u+" "+a:a)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=J.p?J.p(i,s):i+":"+s+";")}return t+(n&&o?n+"{"+o+"}":o)+r},H={},Bn=e=>{if(typeof e=="object"){let n="";for(let t in e)n+=t+Bn(e[t]);return n}return e},Eo=(e,n,t,r,o)=>{let i=Bn(e),s=H[i]||(H[i]=(a=>{let l=0,f=11;for(;l<a.length;)f=101*f+a.charCodeAt(l++)>>>0;return"go"+f})(i));if(!H[s]){let a=i!==e?e:(l=>{let f,c,d=[{}];for(;f=$o.exec(l.replace(Io,""));)f[4]?d.shift():f[3]?(c=f[3].replace(Ae," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][f[1]]=f[2].replace(Ae," ").trim();return d[0]})(e);H[s]=J(o?{["@keyframes "+s]:a}:a,t?"":"."+s)}let u=t&&H.g?H.g:null;return t&&(H.g=H[s]),((a,l,f,c)=>{c?l.data=l.data.replace(c,a):l.data.indexOf(a)===-1&&(l.data=f?a+l.data:l.data+a)})(H[s],n,r,u),s},To=(e,n,t)=>e.reduce((r,o,i)=>{let s=n[i];if(s&&s.call){let u=s(t),a=u&&u.props&&u.props.className||/^go/.test(u)&&u;s=a?"."+a:u&&typeof u=="object"?u.props?"":J(u,""):u===!1?"":u}return r+o+(s??"")},"");function K(e){let n=this||{},t=e.call?e(n.p):e;return Eo(t.unshift?t.raw?To(t,[].slice.call(arguments,1),n.p):t.reduce((r,o)=>Object.assign(r,o&&o.call?o(n.p):o),{}):t,So(n.target),n.g,n.o,n.k)}K.bind({g:1});K.bind({k:1});var Pt,g,Vn,Z,je,Wn,qt,fe,Yt,Gt,it={},qn=[],ko=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,pe=Array.isArray;function U(e,n){for(var t in n)e[t]=n[t];return e}function Yn(e){var n=e.parentNode;n&&n.removeChild(e)}function Gn(e,n,t){var r,o,i,s={};for(i in n)i=="key"?r=n[i]:i=="ref"?o=n[i]:s[i]=n[i];if(arguments.length>2&&(s.children=arguments.length>3?Pt.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)s[i]===void 0&&(s[i]=e.defaultProps[i]);return wt(e,s,r,o,null)}function wt(e,n,t,r,o){var i={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Vn,__i:-1,__u:0};return o==null&&g.vnode!=null&&g.vnode(i),i}function Ct(e){return e.children}function xt(e,n){this.props=e,this.context=n}function Q(e,n){if(n==null)return e.__?Q(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?Q(e):null}function Jn(e){var n,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return Jn(e)}}function Le(e){(!e.__d&&(e.__d=!0)&&Z.push(e)&&!Tt.__r++||je!==g.debounceRendering)&&((je=g.debounceRendering)||Wn)(Tt)}function Tt(){var e,n,t,r,o,i,s,u;for(Z.sort(qt);e=Z.shift();)e.__d&&(n=Z.length,r=void 0,i=(o=(t=e).__v).__e,s=[],u=[],t.__P&&((r=U({},o)).__v=o.__v+1,g.vnode&&g.vnode(r),de(t.__P,r,o,t.__n,t.__P.namespaceURI,32&o.__u?[i]:null,s,i??Q(o),!!(32&o.__u),u),r.__v=o.__v,r.__.__k[r.__i]=r,Qn(s,r,u),r.__e!=i&&Jn(r)),Z.length>n&&Z.sort(qt));Tt.__r=0}function Zn(e,n,t,r,o,i,s,u,a,l,f){var c,d,p,h,b,m=r&&r.__k||qn,v=n.length;for(t.__d=a,Oo(t,n,m),a=t.__d,c=0;c<v;c++)(p=t.__k[c])!=null&&typeof p!="boolean"&&typeof p!="function"&&(d=p.__i===-1?it:m[p.__i]||it,p.__i=c,de(e,p,d,o,i,s,u,a,l,f),h=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&be(d.ref,null,p),f.push(p.ref,p.__c||h,p)),b==null&&h!=null&&(b=h),65536&p.__u||d.__k===p.__k?(a&&!a.isConnected&&(a=Q(d)),a=Kn(p,a,e)):typeof p.type=="function"&&p.__d!==void 0?a=p.__d:h&&(a=h.nextSibling),p.__d=void 0,p.__u&=-196609);t.__d=a,t.__e=b}function Oo(e,n,t){var r,o,i,s,u,a=n.length,l=t.length,f=l,c=0;for(e.__k=[],r=0;r<a;r++)s=r+c,(o=e.__k[r]=(o=n[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?wt(null,o,null,null,null):pe(o)?wt(Ct,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?wt(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,u=Po(o,t,s,f),o.__i=u,i=null,u!==-1&&(f--,(i=t[u])&&(i.__u|=131072)),i==null||i.__v===null?(u==-1&&c--,typeof o.type!="function"&&(o.__u|=65536)):u!==s&&(u===s+1?c++:u>s?f>a-s?c+=u-s:c--:u<s?u==s-1&&(c=u-s):c=0,u!==r+c&&(o.__u|=65536))):(i=t[s])&&i.key==null&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=Q(i)),Jt(i,i,!1),t[s]=null,f--);if(f)for(r=0;r<l;r++)(i=t[r])!=null&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=Q(i)),Jt(i,i))}function Kn(e,n,t){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=Kn(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do n=n&&n.nextSibling;while(n!=null&&n.nodeType===8);return n}function Po(e,n,t,r){var o=e.key,i=e.type,s=t-1,u=t+1,a=n[t];if(a===null||a&&o==a.key&&i===a.type&&!(131072&a.__u))return t;if(r>(a!=null&&!(131072&a.__u)?1:0))for(;s>=0||u<n.length;){if(s>=0){if((a=n[s])&&!(131072&a.__u)&&o==a.key&&i===a.type)return s;s--}if(u<n.length){if((a=n[u])&&!(131072&a.__u)&&o==a.key&&i===a.type)return u;u++}}return-1}function Me(e,n,t){n[0]==="-"?e.setProperty(n,t??""):e[n]=t==null?"":typeof t!="number"||ko.test(n)?t:t+"px"}function _t(e,n,t,r,o){var i;t:if(n==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||Me(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||Me(e.style,n,t[n])}else if(n[0]==="o"&&n[1]==="n")i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||n==="onFocusOut"||n==="onFocusIn"?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=fe,e.addEventListener(n,i?Gt:Yt,i)):e.removeEventListener(n,i?Gt:Yt,i);else{if(o=="http://www.w3.org/2000/svg")n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!="width"&&n!="height"&&n!="href"&&n!="list"&&n!="form"&&n!="tabIndex"&&n!="download"&&n!="rowSpan"&&n!="colSpan"&&n!="role"&&n in e)try{e[n]=t??"";break t}catch{}typeof t=="function"||(t==null||t===!1&&n[4]!=="-"?e.removeAttribute(n):e.setAttribute(n,t))}}function He(e){return function(n){if(this.l){var t=this.l[n.type+e];if(n.t==null)n.t=fe++;else if(n.t<t.u)return;return t(g.event?g.event(n):n)}}}function de(e,n,t,r,o,i,s,u,a,l){var f,c,d,p,h,b,m,v,y,T,W,j,q,bt,Lt,P=n.type;if(n.constructor!==void 0)return null;128&t.__u&&(a=!!(32&t.__u),i=[u=n.__e=t.__e]),(f=g.__b)&&f(n);t:if(typeof P=="function")try{if(v=n.props,y=(f=P.contextType)&&r[f.__c],T=f?y?y.props.value:f.__:r,t.__c?m=(c=n.__c=t.__c).__=c.__E:("prototype"in P&&P.prototype.render?n.__c=c=new P(v,T):(n.__c=c=new xt(v,T),c.constructor=P,c.render=Ao),y&&y.sub(c),c.props=v,c.state||(c.state={}),c.context=T,c.__n=r,d=c.__d=!0,c.__h=[],c._sb=[]),c.__s==null&&(c.__s=c.state),P.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=U({},c.__s)),U(c.__s,P.getDerivedStateFromProps(v,c.__s))),p=c.props,h=c.state,c.__v=n,d)P.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(P.getDerivedStateFromProps==null&&v!==p&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(v,T),!c.__e&&(c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(v,c.__s,T)===!1||n.__v===t.__v)){for(n.__v!==t.__v&&(c.props=v,c.state=c.__s,c.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach(function(ht){ht&&(ht.__=n)}),W=0;W<c._sb.length;W++)c.__h.push(c._sb[W]);c._sb=[],c.__h.length&&s.push(c);break t}c.componentWillUpdate!=null&&c.componentWillUpdate(v,c.__s,T),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(p,h,b)})}if(c.context=T,c.props=v,c.__P=e,c.__e=!1,j=g.__r,q=0,"prototype"in P&&P.prototype.render){for(c.state=c.__s,c.__d=!1,j&&j(n),f=c.render(c.props,c.state,c.context),bt=0;bt<c._sb.length;bt++)c.__h.push(c._sb[bt]);c._sb=[]}else do c.__d=!1,j&&j(n),f=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++q<25);c.state=c.__s,c.getChildContext!=null&&(r=U(U({},r),c.getChildContext())),d||c.getSnapshotBeforeUpdate==null||(b=c.getSnapshotBeforeUpdate(p,h)),Zn(e,pe(Lt=f!=null&&f.type===Ct&&f.key==null?f.props.children:f)?Lt:[Lt],n,t,r,o,i,s,u,a,l),c.base=n.__e,n.__u&=-161,c.__h.length&&s.push(c),m&&(c.__E=c.__=null)}catch(ht){n.__v=null,a||i!=null?(n.__e=u,n.__u|=a?160:32,i[i.indexOf(u)]=null):(n.__e=t.__e,n.__k=t.__k),g.__e(ht,n,t)}else i==null&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=Co(t.__e,n,t,r,o,i,s,a,l);(f=g.diffed)&&f(n)}function Qn(e,n,t){n.__d=void 0;for(var r=0;r<t.length;r++)be(t[r],t[++r],t[++r]);g.__c&&g.__c(n,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){g.__e(i,o.__v)}})}function Co(e,n,t,r,o,i,s,u,a){var l,f,c,d,p,h,b,m=t.props,v=n.props,y=n.type;if(y==="svg"?o="http://www.w3.org/2000/svg":y==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(l=0;l<i.length;l++)if((p=i[l])&&"setAttribute"in p==!!y&&(y?p.localName===y:p.nodeType===3)){e=p,i[l]=null;break}}if(e==null){if(y===null)return document.createTextNode(v);e=document.createElementNS(o,y,v.is&&v),i=null,u=!1}if(y===null)m===v||u&&e.data===v||(e.data=v);else{if(i=i&&Pt.call(e.childNodes),m=t.props||it,!u&&i!=null)for(m={},l=0;l<e.attributes.length;l++)m[(p=e.attributes[l]).name]=p.value;for(l in m)if(p=m[l],l!="children"){if(l=="dangerouslySetInnerHTML")c=p;else if(l!=="key"&&!(l in v)){if(l=="value"&&"defaultValue"in v||l=="checked"&&"defaultChecked"in v)continue;_t(e,l,null,p,o)}}for(l in v)p=v[l],l=="children"?d=p:l=="dangerouslySetInnerHTML"?f=p:l=="value"?h=p:l=="checked"?b=p:l==="key"||u&&typeof p!="function"||m[l]===p||_t(e,l,p,m[l],o);if(f)u||c&&(f.__html===c.__html||f.__html===e.innerHTML)||(e.innerHTML=f.__html),n.__k=[];else if(c&&(e.innerHTML=""),Zn(e,pe(d)?d:[d],n,t,r,y==="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,s,i?i[0]:t.__k&&Q(t,0),u,a),i!=null)for(l=i.length;l--;)i[l]!=null&&Yn(i[l]);u||(l="value",h!==void 0&&(h!==e[l]||y==="progress"&&!h||y==="option"&&h!==m[l])&&_t(e,l,h,m[l],o),l="checked",b!==void 0&&b!==e[l]&&_t(e,l,b,m[l],o))}return e}function be(e,n,t){try{typeof e=="function"?e(n):e.current=n}catch(r){g.__e(r,t)}}function Jt(e,n,t){var r,o;if(g.unmount&&g.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||be(r,null,n)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){g.__e(i,n)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&Jt(r[o],n,t||typeof e.type!="function");t||e.__e==null||Yn(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function Ao(e,n,t){return this.constructor(e,t)}function jo(e,n,t){var r,o,i,s;g.__&&g.__(e,n),o=(r=typeof t=="function")?null:n.__k,i=[],s=[],de(n,e=(!r&&t||n).__k=Gn(Ct,null,[e]),o||it,it,n.namespaceURI,!r&&t?[t]:o?null:n.firstChild?Pt.call(n.childNodes):null,i,!r&&t?t:o?o.__e:n.firstChild,r,s),Qn(i,e,s)}Pt=qn.slice,g={__e:function(e,n,t,r){for(var o,i,s;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),s=o.__d),s)return o.__E=o}catch(u){e=u}throw e}},Vn=0,xt.prototype.setState=function(e,n){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=U({},this.state),typeof e=="function"&&(e=e(U({},t),this.props)),e&&U(t,e),e!=null&&this.__v&&(n&&this._sb.push(n),Le(this))},xt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Le(this))},xt.prototype.render=Ct,Z=[],Wn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,qt=function(e,n){return e.__v.__b-n.__v.__b},Tt.__r=0,fe=0,Yt=He(!1),Gt=He(!0);var Xn=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var s=n[i++],u=n[i]?(n[0]|=s?1:2,t[n[i++]]):n[++i];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[n[++i]]=u:s===6?r[1][n[++i]]+=u+"":s?(o=e.apply(u,Xn(e,u,t,["",null])),r.push(o),u[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(u)}return r},De=new Map;function Lo(e){var n=De.get(this);return n||(n=new Map,De.set(this,n)),(n=Xn(this,n.get(e)||(n.set(e,n=function(t){for(var r,o,i=1,s="",u="",a=[0],l=function(d){i===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,d,s):i===3&&(d||s)?(a.push(3,d,s),i=2):i===2&&s==="..."&&d?a.push(4,d,0):i===2&&s&&!d?a.push(5,0,!0,s):i>=5&&((s||!d&&i===5)&&(a.push(i,0,s,o),i=6),d&&(a.push(i,d,0,o),i=6)),s=""},f=0;f<t.length;f++){f&&(i===1&&l(),l(f));for(var c=0;c<t[f].length;c++)r=t[f][c],i===1?r==="<"?(l(),a=[a],i=3):s+=r:i===4?s==="--"&&r===">"?(i=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(l(),i=1):i&&(r==="="?(i=5,o=s,s=""):r==="/"&&(i<5||t[f][c+1]===">")?(l(),i===3&&(a=a[0]),i=a,(a=a[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(l(),i=2):s+=r),i===3&&s==="!--"&&(i=4,a=a[0])}return l(),a}(e)),n),arguments,[])).length>1?n:n[0]}var A=Lo.bind(Gn),ot,x,Ft,Re,st=0,tr=[],St=[],S=g,Ne=S.__b,Fe=S.__r,Ue=S.diffed,ze=S.__c,Be=S.unmount,Ve=S.__;function he(e,n){S.__h&&S.__h(x,e,st||n),st=0;var t=x.__H||(x.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:St}),t.__[e]}function I(e){return st=1,Mo(rr,e)}function Mo(e,n,t){var r=he(ot++,2);if(r.t=e,!r.__c&&(r.__=[rr(void 0,n),function(u){var a=r.__N?r.__N[0]:r.__[0],l=r.t(a,u);a!==l&&(r.__N=[l,r.__[1]],r.__c.setState({}))}],r.__c=x,!x.u)){var o=function(u,a,l){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(d){return!!d.__c});if(f.every(function(d){return!d.__N}))return!i||i.call(this,u,a,l);var c=!1;return f.forEach(function(d){if(d.__N){var p=d.__[0];d.__=d.__N,d.__N=void 0,p!==d.__[0]&&(c=!0)}}),!(!c&&r.__c.props===u)&&(!i||i.call(this,u,a,l))};x.u=!0;var i=x.shouldComponentUpdate,s=x.componentWillUpdate;x.componentWillUpdate=function(u,a,l){if(this.__e){var f=i;i=void 0,o(u,a,l),i=f}s&&s.call(this,u,a,l)},x.shouldComponentUpdate=o}return r.__N||r.__}function Ho(e,n){var t=he(ot++,3);!S.__s&&nr(t.__H,n)&&(t.__=e,t.i=n,x.__H.__h.push(t))}function Do(e){return st=5,er(function(){return{current:e}},[])}function er(e,n){var t=he(ot++,7);return nr(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function Ro(e,n){return st=8,er(function(){return e},n)}function No(){for(var e;e=tr.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach($t),e.__H.__h.forEach(Zt),e.__H.__h=[]}catch(n){e.__H.__h=[],S.__e(n,e.__v)}}S.__b=function(e){x=null,Ne&&Ne(e)},S.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),Ve&&Ve(e,n)},S.__r=function(e){Fe&&Fe(e),ot=0;var n=(x=e.__c).__H;n&&(Ft===x?(n.__h=[],x.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=St,t.__N=t.i=void 0})):(n.__h.forEach($t),n.__h.forEach(Zt),n.__h=[],ot=0)),Ft=x},S.diffed=function(e){Ue&&Ue(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(tr.push(n)!==1&&Re===S.requestAnimationFrame||((Re=S.requestAnimationFrame)||Fo)(No)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==St&&(t.__=t.__V),t.i=void 0,t.__V=St})),Ft=x=null},S.__c=function(e,n){n.some(function(t){try{t.__h.forEach($t),t.__h=t.__h.filter(function(r){return!r.__||Zt(r)})}catch(r){n.some(function(o){o.__h&&(o.__h=[])}),n=[],S.__e(r,t.__v)}}),ze&&ze(e,n)},S.unmount=function(e){Be&&Be(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{$t(r)}catch(o){n=o}}),t.__H=void 0,n&&S.__e(n,t.__v))};var We=typeof requestAnimationFrame=="function";function Fo(e){var n,t=function(){clearTimeout(r),We&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);We&&(n=requestAnimationFrame(t))}function $t(e){var n=x,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),x=n}function Zt(e){var n=x;e.__c=e.__(),x=n}function nr(e,n){return!e||e.length!==n.length||n.some(function(t,r){return t!==e[r]})}function rr(e,n){return typeof n=="function"?n(e):n}function kt(e,n){var t=I(n),r=t[0],o=t[1],i=Do(e);return Ho(function(){var s=i.current.subscribe(o);return function(){return s.unsubscribe()}}),r}var Kt=function(e,n){return Kt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])},Kt(e,n)};function At(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");Kt(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}function Qt(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Xt(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),o,i=[],s;try{for(;(n===void 0||n-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return i}function te(e,n,t){if(t||arguments.length===2)for(var r=0,o=n.length,i;r<o;r++)(i||!(r in n))&&(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return e.concat(i||Array.prototype.slice.call(n))}function D(e){return typeof e=="function"}function ir(e){var n=function(r){Error.call(r),r.stack=new Error().stack},t=e(n);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Ut=ir(function(e){return function(t){e(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function ee(e,n){if(e){var t=e.indexOf(n);0<=t&&e.splice(t,1)}}var jt=function(){function e(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var n,t,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=Qt(s),a=u.next();!a.done;a=u.next()){var l=a.value;l.remove(this)}}catch(b){n={error:b}}finally{try{a&&!a.done&&(t=u.return)&&t.call(u)}finally{if(n)throw n.error}}else s.remove(this);var f=this.initialTeardown;if(D(f))try{f()}catch(b){i=b instanceof Ut?b.errors:[b]}var c=this._finalizers;if(c){this._finalizers=null;try{for(var d=Qt(c),p=d.next();!p.done;p=d.next()){var h=p.value;try{qe(h)}catch(b){i=i??[],b instanceof Ut?i=te(te([],Xt(i)),Xt(b.errors)):i.push(b)}}}catch(b){r={error:b}}finally{try{p&&!p.done&&(o=d.return)&&o.call(d)}finally{if(r)throw r.error}}}if(i)throw new Ut(i)}},e.prototype.add=function(n){var t;if(n&&n!==this)if(this.closed)qe(n);else{if(n instanceof e){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(n)}},e.prototype._hasParent=function(n){var t=this._parentage;return t===n||Array.isArray(t)&&t.includes(n)},e.prototype._addParent=function(n){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n},e.prototype._removeParent=function(n){var t=this._parentage;t===n?this._parentage=null:Array.isArray(t)&&ee(t,n)},e.prototype.remove=function(n){var t=this._finalizers;t&&ee(t,n),n instanceof e&&n._removeParent(this)},e.EMPTY=function(){var n=new e;return n.closed=!0,n}(),e}(),or=jt.EMPTY;function sr(e){return e instanceof jt||e&&"closed"in e&&D(e.remove)&&D(e.add)&&D(e.unsubscribe)}function qe(e){D(e)?e():e.unsubscribe()}var ur={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Uo={setTimeout:function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];return setTimeout.apply(void 0,te([e,n],Xt(t)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function zo(e){Uo.setTimeout(function(){throw e})}function Ye(){}function It(e){e()}var ar=function(e){At(n,e);function n(t){var r=e.call(this)||this;return r.isStopped=!1,t?(r.destination=t,sr(t)&&t.add(r)):r.destination=qo,r}return n.create=function(t,r,o){return new ne(t,r,o)},n.prototype.next=function(t){this.isStopped||this._next(t)},n.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(jt),Bo=Function.prototype.bind;function zt(e,n){return Bo.call(e,n)}var Vo=function(){function e(n){this.partialObserver=n}return e.prototype.next=function(n){var t=this.partialObserver;if(t.next)try{t.next(n)}catch(r){yt(r)}},e.prototype.error=function(n){var t=this.partialObserver;if(t.error)try{t.error(n)}catch(r){yt(r)}else yt(n)},e.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(t){yt(t)}},e}(),ne=function(e){At(n,e);function n(t,r,o){var i=e.call(this)||this,s;if(D(t)||!t)s={next:t??void 0,error:r??void 0,complete:o??void 0};else{var u;i&&ur.useDeprecatedNextContext?(u=Object.create(t),u.unsubscribe=function(){return i.unsubscribe()},s={next:t.next&&zt(t.next,u),error:t.error&&zt(t.error,u),complete:t.complete&&zt(t.complete,u)}):s=t}return i.destination=new Vo(s),i}return n}(ar);function yt(e){zo(e)}function Wo(e){throw e}var qo={closed:!0,next:Ye,error:Wo,complete:Ye},Yo=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Go(e){return e}function Jo(e){return e.length===0?Go:e.length===1?e[0]:function(t){return e.reduce(function(r,o){return o(r)},t)}}var Ge=function(){function e(n){n&&(this._subscribe=n)}return e.prototype.lift=function(n){var t=new e;return t.source=this,t.operator=n,t},e.prototype.subscribe=function(n,t,r){var o=this,i=Ko(n)?n:new ne(n,t,r);return It(function(){var s=o,u=s.operator,a=s.source;i.add(u?u.call(i,a):a?o._subscribe(i):o._trySubscribe(i))}),i},e.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(t){n.error(t)}},e.prototype.forEach=function(n,t){var r=this;return t=Je(t),new t(function(o,i){var s=new ne({next:function(u){try{n(u)}catch(a){i(a),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},e.prototype._subscribe=function(n){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(n)},e.prototype[Yo]=function(){return this},e.prototype.pipe=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return Jo(n)(this)},e.prototype.toPromise=function(n){var t=this;return n=Je(n),new n(function(r,o){var i;t.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},e.create=function(n){return new e(n)},e}();function Je(e){var n;return(n=e??ur.Promise)!==null&&n!==void 0?n:Promise}function Zo(e){return e&&D(e.next)&&D(e.error)&&D(e.complete)}function Ko(e){return e&&e instanceof ar||Zo(e)&&sr(e)}var Qo=ir(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),me=function(e){At(n,e);function n(){var t=e.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return n.prototype.lift=function(t){var r=new Ze(this,this);return r.operator=t,r},n.prototype._throwIfClosed=function(){if(this.closed)throw new Qo},n.prototype.next=function(t){var r=this;It(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=Qt(r.currentObservers),u=s.next();!u.done;u=s.next()){var a=u.value;a.next(t)}}catch(l){o={error:l}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},n.prototype.error=function(t){var r=this;It(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=t;for(var o=r.observers;o.length;)o.shift().error(t)}})},n.prototype.complete=function(){var t=this;It(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var r=t.observers;r.length;)r.shift().complete()}})},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},n.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},n.prototype._innerSubscribe=function(t){var r=this,o=this,i=o.hasError,s=o.isStopped,u=o.observers;return i||s?or:(this.currentObservers=null,u.push(t),new jt(function(){r.currentObservers=null,ee(u,t)}))},n.prototype._checkFinalizedStatuses=function(t){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?t.error(i):s&&t.complete()},n.prototype.asObservable=function(){var t=new Ge;return t.source=this,t},n.create=function(t,r){return new Ze(t,r)},n}(Ge),Ze=function(e){At(n,e);function n(t,r){var o=e.call(this)||this;return o.destination=t,o.source=r,o}return n.prototype.next=function(t){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,t)},n.prototype.error=function(t){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,t)},n.prototype.complete=function(){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||r===void 0||r.call(t)},n.prototype._subscribe=function(t){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(t))!==null&&o!==void 0?o:or},n}(me),cr=4,lr=new me,fr=lr.asObservable();function pr(){return cr}function X(e){cr=e,lr.next(e)}var dr="initial",br=new me,hr=br.asObservable();function mr(){return dr}function G(e){dr=e,br.next(e)}var vr=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},Ke=K(Qe||(Qe=vr([`
	height: 95%;
	display: grid;
	place-content: space-evenly;
`],[`
	height: 95%;
	display: grid;
	place-content: space-evenly;
`])));function dt(e){var n=e.title,t=e.children;return A(Xe||(Xe=vr([`
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
	`])),n,Ke,t[0],t[1],Ke,t[2])}var Qe,Xe,Xo=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};function ts(){var e=I("I'm an input !"),n=e[0],t=e[1],r=`&lt;crumbs-input
	value="`.concat(n,`"&gt;
&lt;/crumbs-input&gt;`);return A(tn||(tn=Xo([`
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
	`])),dt,n,function(o){return t(o.originalTarget.value)},n,function(o){return t(o.originalTarget.value)},{__html:r})}var tn,es=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};function ns(){var e=I("I'm a <b>paragraph</b> !"),n=e[0],t=e[1];return A(en||(en=es([`
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
	`])),dt,{__html:n},n,function(r){return t(r.originalTarget.value)},{__html:"&lt;crumbs-p&gt; ".concat(n," &lt;/crumbs-p&gt;")})}var en,rs=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},is=function(e,n,t,r){function o(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function u(f){try{l(r.next(f))}catch(c){s(c)}}function a(f){try{l(r.throw(f))}catch(c){s(c)}}function l(f){f.done?i(f.value):o(f.value).then(u,a)}l((r=r.apply(e,n||[])).next())})},os=function(e,n){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(l){return function(f){return a([l,f])}}function a(l){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,l[0]&&(t=0)),t;)try{if(r=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,o=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=n.call(e,t)}catch(f){l=[6,f],o=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}};function ss(){var e=this,n=I("I'm a panel !"),t=n[0],r=n[1],o=I(""),i=o[0],s=o[1],u=I("100"),a=u[0],l=u[1],f=I(!1),c=f[0],d=f[1],p=`&lt;crumbs-panel
	panel-title="`.concat(i,`"
	panel-loading="`).concat(a,`"&gt;
	`).concat(t,`
&lt;/crumbs-panel&gt;`),h=Ro(function(){return is(e,void 0,void 0,function(){var m;return os(this,function(v){switch(v.label){case 0:if(c)return[2];d(!0),l("0"),m=0,v.label=1;case 1:return m<=100?[4,new Promise(function(y){return setTimeout(y,10)})]:[3,4];case 2:v.sent(),l(Math.floor(m).toString()),v.label=3;case 3:return m+=.1+(100-m)/100,[3,1];case 4:return l("100"),d(!1),[2]}})})},[c]),b=function(){c||h()};return A(nn||(nn=rs([`
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
	`])),dt,a,i,t,i,function(m){return s(m.originalTarget.value)},t,function(m){return r(m.originalTarget.value)},a,function(m){return l(String(m.target.value))},b,{__html:p})}var nn,us=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};function as(){var e=I("Tab content"),n=e[0],t=e[1],r=I("Tab title"),o=r[0],i=r[1],s=I("Tab content 2"),u=s[0],a=s[1],l=I("Tab title 2"),f=l[0],c=l[1],d=`&lt;crumbs-tabs&gt;
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
&lt;/crumbs-panel&gt;`);return A(rn||(rn=us([`
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
	`])),dt,o,n,f,u,o,function(p){return i(p.originalTarget.value)},n,function(p){return t(p.originalTarget.value)},f,function(p){return c(p.originalTarget.value)},u,function(p){return a(p.originalTarget.value)},{__html:d})}var rn,cs=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};function ls(){return A(on||(on=cs([`
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
	`])))}var on,Bt=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};function fs(){var e=kt(fr,pr),n=kt(hr,mr),t=K(sn||(sn=Bt([`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`],[`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`]))),r=K(un||(un=Bt([`
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
	`])));return A(an||(an=Bt([`
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
	`])),t,r,e===1,function(){return X(1)},e===2,function(){return X(2)},e===3,function(){return X(3)},e===4,function(){return X(4)},e===5,function(){return X(5)},e===6,function(){return X(6)},r,n==="initial",function(){return G("initial")},n==="monospace",function(){return G("monospace")},n==="serif",function(){return G("serif")},n==="sans-serif",function(){return G("sans-serif")},n==="cursive",function(){return G("cursive")},n==="fantasy",function(){return G("fantasy")},n==="system-ui",function(){return G("system-ui")})}var sn,un,an,ps=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};function ds(){var e="&lt;crumbs-p&gt; Hello world ! &lt;/crumbs-p&gt;";return A(cn||(cn=ps([`
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
	`])),{__html:e})}var cn,bs=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};function hs(){var e=I("Click me !"),n=e[0],t=e[1],r=I("100"),o=r[0],i=r[1],s=I(!1),u=s[0],a=s[1],l=I(!1),f=l[0],c=l[1],d=I(2e3),p=d[0],h=d[1],b=`
		&lt;crumbs-button
			`.concat(u?"	disabled":"",`
			`).concat(f?"	indeterminate-progress":"",`
			`).concat(f?'	indeterminate-duration-ms="'.concat(p,'"'):"",`
				progress="`).concat(o,`"&gt;
				`).concat(n,`
		&lt;/crumbs-button&gt;
	`);return A(ln||(ln=bs([`
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
	`])),dt,o,o,u,f,p,o,n,n,function(m){return t(m.originalTarget.value)},o,function(m){return i(String(m.target.value))},function(){return a(!u)},function(){return c(!f)},p,function(m){return h(Number(m.originalTarget.value))},{__html:b})}var ln;function ms(){const e=kt(fr,pr),n=kt(hr,mr),t=K`
		background-image: url('bg${e}.jpg');
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
		font-family: ${n};
	`;return A`
		<div class=${t}></div>

		<div class=${r}>
			<${ls}><//>
			<${ds}><//>
			<${fs}><//>
			<${ns}><//>
			<${ss}><//>
			<${ts}><//>
			<${as}><//>
			<${hs}><//>
		</div>
	`}jo(A`<${ms}><//>`,document.body);
