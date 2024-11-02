var xr=Object.defineProperty;var Sr=(t,n,e)=>n in t?xr(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var w=(t,n,e)=>Sr(t,typeof n!="symbol"?n+"":n,e);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();function Pt(t){for(var n,e,r=arguments,o=1,i="",s="",u=[0],a=function(c){o===1&&(c||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(c?r[c]:i):o===3&&(c||i)?(u[1]=c?r[c]:i,o=2):o===2&&i==="..."&&c?u[2]=Object.assign(u[2]||{},r[c]):o===2&&i&&!c?(u[2]=u[2]||{})[i]=!0:o>=5&&(o===5?((u[2]=u[2]||{})[e]=c?i?i+r[c]:r[c]:i,o=6):(c||i)&&(u[2][e]+=c?i+r[c]:i)),i=""},l=0;l<t.length;l++){l&&(o===1&&a(),a(l));for(var f=0;f<t[l].length;f++)n=t[l][f],o===1?n==="<"?(a(),u=[u,"",null],o=3):i+=n:o===4?i==="--"&&n===">"?(o=1,i=""):i=n+i[0]:s?n===s?s="":i+=n:n==='"'||n==="'"?s=n:n===">"?(a(),o=1):o&&(n==="="?(o=5,e=i,i=""):n==="/"&&(o<5||t[l][f+1]===">")?(a(),o===3&&(u=u[0]),o=u,(u=u[0]).push(this.apply(null,o.slice(1))),o=0):n===" "||n==="	"||n===`
`||n==="\r"?(a(),o=2):i+=n),o===3&&i==="!--"&&(o=4,u=u[0])}return a(),u.length>2?u.slice(1):u[1]}function $r(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Ir(t){if(t.__esModule)return t;var n=t.default;if(typeof n=="function"){var e=function r(){return this instanceof r?Reflect.construct(n,arguments,this.constructor):n.apply(this,arguments)};e.prototype=n.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var o=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:function(){return t[r]}})}),e}var bn={exports:{}};/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */var Er=function(n){var e=String.prototype.split,r=/()??/.exec("")[1]===n,o;return o=function(i,c,u){if(Object.prototype.toString.call(c)!=="[object RegExp]")return e.call(i,c,u);var a=[],l=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.extended?"x":"")+(c.sticky?"y":""),f=0,c=new RegExp(c.source,l+"g"),d,p,h,b;for(i+="",r||(d=new RegExp("^"+c.source+"$(?!\\s)",l)),u=u===n?-1>>>0:u>>>0;(p=c.exec(i))&&(h=p.index+p[0].length,!(h>f&&(a.push(i.slice(f,p.index)),!r&&p.length>1&&p[0].replace(d,function(){for(var m=1;m<arguments.length-2;m++)arguments[m]===n&&(p[m]=n)}),p.length>1&&p.index<i.length&&Array.prototype.push.apply(a,p.slice(1)),b=p[0].length,f=h,a.length>=u)));)c.lastIndex===p.index&&c.lastIndex++;return f===i.length?(b||!c.test(""))&&a.push(""):a.push(i.slice(f)),a.length>u?a.slice(0,u):a},o}(),Tr=[].indexOf,kr=function(t,n){if(Tr)return t.indexOf(n);for(var e=0;e<t.length;++e)if(t[e]===n)return e;return-1},Rt=kr,Or=Cr;function Cr(t){var n=t.classList;if(n)return n;var e={add:r,remove:o,contains:i,toggle:s,toString:u,length:0,item:a};return e;function r(c){var d=l();Rt(d,c)>-1||(d.push(c),f(d))}function o(c){var d=l(),p=Rt(d,c);p!==-1&&(d.splice(p,1),f(d))}function i(c){return Rt(l(),c)>-1}function s(c){return i(c)?(o(c),!1):(r(c),!0)}function u(){return t.className}function a(c){var d=l();return d[c]||null}function l(){var c=t.className;return Pr(c.split(" "),Ar)}function f(c){var d=c.length;t.className=c.join(" "),e.length=d;for(var p=0;p<c.length;p++)e[p]=c[p];delete c[d]}}function Pr(t,n){for(var e=[],r=0;r<t.length;r++)n(t[r])&&e.push(t[r]);return e}function Ar(t){return!!t}const jr={},Lr=Object.freeze(Object.defineProperty({__proto__:null,default:jr},Symbol.toStringTag,{value:"Module"})),Mr=Ir(Lr);var Hr=Er,Rr=Or,hn=typeof window>"u"?Mr:window,rt=hn.document,Dr=hn.Text;function mn(){var t=[];function n(){var e=[].slice.call(arguments),r=null;function o(i){var s;function u(c){var d=Hr(c,/([\.#]?[^\s#.]+)/);/^\.|#/.test(d[1])&&(r=rt.createElement("div")),ge(d,function(p){var h=p.substring(1,p.length);p&&(r?p[0]==="."?Rr(r).add(h):p[0]==="#"&&r.setAttribute("id",h):r=rt.createElement(p))})}if(i!=null){if(typeof i=="string")r?r.appendChild(s=rt.createTextNode(i)):u(i);else if(typeof i=="number"||typeof i=="boolean"||i instanceof Date||i instanceof RegExp)r.appendChild(s=rt.createTextNode(i.toString()));else if(Fr(i))ge(i,o);else if(Dt(i))r.appendChild(s=i);else if(i instanceof Dr)r.appendChild(s=i);else if(typeof i=="object")for(var a in i)if(typeof i[a]=="function")/^on\w+/.test(a)?function(c,d){r.addEventListener?(r.addEventListener(c.substring(2),d[c],!1),t.push(function(){r.removeEventListener(c.substring(2),d[c],!1)})):(r.attachEvent(c,d[c]),t.push(function(){r.detachEvent(c,d[c])}))}(a,i):(r[a]=i[a](),t.push(i[a](function(c){r[a]=c})));else if(a==="style")if(typeof i[a]=="string")r.style.cssText=i[a];else for(var l in i[a])(function(c,d){if(typeof d=="function")r.style.setProperty(c,d()),t.push(d(function(h){r.style.setProperty(c,h)}));else var p=i[a][c].match(/(.*)\W+!important\W*$/);p?r.style.setProperty(c,p[1],"important"):r.style.setProperty(c,i[a][c])})(l,i[a][l]);else if(a==="attrs")for(var f in i[a])r.setAttribute(f,i[a][f]);else a.substr(0,5)==="data-"?r.setAttribute(a,i[a]):r[a]=i[a];else if(typeof i=="function"){var f=i();r.appendChild(s=Dt(f)?f:rt.createTextNode(f)),t.push(i(function(d){Dt(d)&&s.parentElement?(s.parentElement.replaceChild(d,s),s=d):s.textContent=d}))}}return s}for(;e.length;)o(e.shift());return r}return n.cleanup=function(){for(var e=0;e<t.length;e++)t[e]();t.length=0},n}var Nr=bn.exports=mn();Nr.context=mn;function Dt(t){return t&&t.nodeName&&t.nodeType}function ge(t,n){if(t.forEach)return t.forEach(n);for(var e=0;e<t.length;e++)n(t[e],e)}function Fr(t){return Object.prototype.toString.call(t)=="[object Array]"}var Ur=bn.exports;const at=$r(Ur);function N(t){if(!t.shadowRoot)throw new Error("There is no shadow root on the element !");return t.shadowRoot}function ct(t){const n=Array.isArray(t)?t:[t],e=document.createElement("template");return e.innerHTML=n.map(r=>r.outerHTML).join(""),e}var qt=function(t,n){return qt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])},qt(t,n)};function W(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");qt(t,n);function e(){this.constructor=t}t.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}function zr(t,n,e,r){function o(i){return i instanceof e?i:new e(function(s){s(i)})}return new(e||(e=Promise))(function(i,s){function u(f){try{l(r.next(f))}catch(c){s(c)}}function a(f){try{l(r.throw(f))}catch(c){s(c)}}function l(f){f.done?i(f.value):o(f.value).then(u,a)}l((r=r.apply(t,n||[])).next())})}function vn(t,n){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=u(0),s.throw=u(1),s.return=u(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(l){return function(f){return a([l,f])}}function a(l){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,l[0]&&(e=0)),e;)try{if(r=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return e.label++,{value:l[1],done:!1};case 5:e.label++,o=l[1],l=[0];continue;case 7:l=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){e=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){e.label=l[1];break}if(l[0]===6&&e.label<i[1]){e.label=i[1],i=l;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(l);break}i[2]&&e.ops.pop(),e.trys.pop();continue}l=n.call(t,e)}catch(f){l=[6,f],o=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function et(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function M(t,n){var e=typeof Symbol=="function"&&t[Symbol.iterator];if(!e)return t;var r=e.call(t),o,i=[],s;try{for(;(n===void 0||n-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(e=r.return)&&e.call(r)}finally{if(s)throw s.error}}return i}function F(t,n,e){if(e||arguments.length===2)for(var r=0,o=n.length,i;r<o;r++)(i||!(r in n))&&(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return t.concat(i||Array.prototype.slice.call(n))}function tt(t){return this instanceof tt?(this.v=t,this):new tt(t)}function Br(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e.apply(t,n||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(p){return function(h){return Promise.resolve(h).then(p,c)}}function u(p,h){r[p]&&(o[p]=function(b){return new Promise(function(m,v){i.push([p,b,m,v])>1||a(p,b)})},h&&(o[p]=h(o[p])))}function a(p,h){try{l(r[p](h))}catch(b){d(i[0][3],b)}}function l(p){p.value instanceof tt?Promise.resolve(p.value.v).then(f,c):d(i[0][2],p)}function f(p){a("next",p)}function c(p){a("throw",p)}function d(p,h){p(h),i.shift(),i.length&&a(i[0][0],i[0][1])}}function Vr(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof et=="function"?et(t):t[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(i){e[i]=t[i]&&function(s){return new Promise(function(u,a){s=t[i](s),o(u,a,s.done,s.value)})}}function o(i,s,u,a){Promise.resolve(a).then(function(l){i({value:l,done:u})},s)}}function _(t){return typeof t=="function"}function se(t){var n=function(r){Error.call(r),r.stack=new Error().stack},e=t(n);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Nt=se(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function kt(t,n){if(t){var e=t.indexOf(n);0<=e&&t.splice(e,1)}}var lt=function(){function t(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var n,e,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=et(s),a=u.next();!a.done;a=u.next()){var l=a.value;l.remove(this)}}catch(b){n={error:b}}finally{try{a&&!a.done&&(e=u.return)&&e.call(u)}finally{if(n)throw n.error}}else s.remove(this);var f=this.initialTeardown;if(_(f))try{f()}catch(b){i=b instanceof Nt?b.errors:[b]}var c=this._finalizers;if(c){this._finalizers=null;try{for(var d=et(c),p=d.next();!p.done;p=d.next()){var h=p.value;try{we(h)}catch(b){i=i??[],b instanceof Nt?i=F(F([],M(i)),M(b.errors)):i.push(b)}}}catch(b){r={error:b}}finally{try{p&&!p.done&&(o=d.return)&&o.call(d)}finally{if(r)throw r.error}}}if(i)throw new Nt(i)}},t.prototype.add=function(n){var e;if(n&&n!==this)if(this.closed)we(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}},t.prototype._hasParent=function(n){var e=this._parentage;return e===n||Array.isArray(e)&&e.includes(n)},t.prototype._addParent=function(n){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n},t.prototype._removeParent=function(n){var e=this._parentage;e===n?this._parentage=null:Array.isArray(e)&&kt(e,n)},t.prototype.remove=function(n){var e=this._finalizers;e&&kt(e,n),n instanceof t&&n._removeParent(this)},t.EMPTY=function(){var n=new t;return n.closed=!0,n}(),t}(),_n=lt.EMPTY;function yn(t){return t instanceof lt||t&&"closed"in t&&_(t.remove)&&_(t.add)&&_(t.unsubscribe)}function we(t){_(t)?t():t.unsubscribe()}var gn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},wn={setTimeout:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return setTimeout.apply(void 0,F([t,n],M(e)))},clearTimeout:function(t){var n=wn.delegate;return((n==null?void 0:n.clearTimeout)||clearTimeout)(t)},delegate:void 0};function xn(t){wn.setTimeout(function(){throw t})}function xe(){}function xt(t){t()}var ue=function(t){W(n,t);function n(e){var r=t.call(this)||this;return r.isStopped=!1,e?(r.destination=e,yn(e)&&e.add(r)):r.destination=Gr,r}return n.create=function(e,r,o){return new it(e,r,o)},n.prototype.next=function(e){this.isStopped||this._next(e)},n.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(e){this.destination.next(e)},n.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(lt),Wr=Function.prototype.bind;function Ft(t,n){return Wr.call(t,n)}var qr=function(){function t(n){this.partialObserver=n}return t.prototype.next=function(n){var e=this.partialObserver;if(e.next)try{e.next(n)}catch(r){vt(r)}},t.prototype.error=function(n){var e=this.partialObserver;if(e.error)try{e.error(n)}catch(r){vt(r)}else vt(n)},t.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(e){vt(e)}},t}(),it=function(t){W(n,t);function n(e,r,o){var i=t.call(this)||this,s;if(_(e)||!e)s={next:e??void 0,error:r??void 0,complete:o??void 0};else{var u;i&&gn.useDeprecatedNextContext?(u=Object.create(e),u.unsubscribe=function(){return i.unsubscribe()},s={next:e.next&&Ft(e.next,u),error:e.error&&Ft(e.error,u),complete:e.complete&&Ft(e.complete,u)}):s=e}return i.destination=new qr(s),i}return n}(ue);function vt(t){xn(t)}function Yr(t){throw t}var Gr={closed:!0,next:xe,error:Yr,complete:xe},ae=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function ft(t){return t}function Jr(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Sn(t)}function Sn(t){return t.length===0?ft:t.length===1?t[0]:function(e){return t.reduce(function(r,o){return o(r)},e)}}var E=function(){function t(n){n&&(this._subscribe=n)}return t.prototype.lift=function(n){var e=new t;return e.source=this,e.operator=n,e},t.prototype.subscribe=function(n,e,r){var o=this,i=Kr(n)?n:new it(n,e,r);return xt(function(){var s=o,u=s.operator,a=s.source;i.add(u?u.call(i,a):a?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(e){n.error(e)}},t.prototype.forEach=function(n,e){var r=this;return e=Se(e),new e(function(o,i){var s=new it({next:function(u){try{n(u)}catch(a){i(a),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},t.prototype._subscribe=function(n){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(n)},t.prototype[ae]=function(){return this},t.prototype.pipe=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return Sn(n)(this)},t.prototype.toPromise=function(n){var e=this;return n=Se(n),new n(function(r,o){var i;e.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},t.create=function(n){return new t(n)},t}();function Se(t){var n;return(n=t??gn.Promise)!==null&&n!==void 0?n:Promise}function Zr(t){return t&&_(t.next)&&_(t.error)&&_(t.complete)}function Kr(t){return t&&t instanceof ue||Zr(t)&&yn(t)}function Qr(t){return _(t==null?void 0:t.lift)}function k(t){return function(n){if(Qr(n))return n.lift(function(e){try{return t(e,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function O(t,n,e,r,o){return new Xr(t,n,e,r,o)}var Xr=function(t){W(n,t);function n(e,r,o,i,s,u){var a=t.call(this,e)||this;return a.onFinalize=s,a.shouldUnsubscribe=u,a._next=r?function(l){try{r(l)}catch(f){e.error(f)}}:t.prototype._next,a._error=i?function(l){try{i(l)}catch(f){e.error(f)}finally{this.unsubscribe()}}:t.prototype._error,a._complete=o?function(){try{o()}catch(l){e.error(l)}finally{this.unsubscribe()}}:t.prototype._complete,a}return n.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((e=this.onFinalize)===null||e===void 0||e.call(this))}},n}(ue),ti=se(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),ce=function(t){W(n,t);function n(){var e=t.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return n.prototype.lift=function(e){var r=new $e(this,this);return r.operator=e,r},n.prototype._throwIfClosed=function(){if(this.closed)throw new ti},n.prototype.next=function(e){var r=this;xt(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=et(r.currentObservers),u=s.next();!u.done;u=s.next()){var a=u.value;a.next(e)}}catch(l){o={error:l}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},n.prototype.error=function(e){var r=this;xt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=e;for(var o=r.observers;o.length;)o.shift().error(e)}})},n.prototype.complete=function(){var e=this;xt(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var r=e.observers;r.length;)r.shift().complete()}})},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},n.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},n.prototype._innerSubscribe=function(e){var r=this,o=this,i=o.hasError,s=o.isStopped,u=o.observers;return i||s?_n:(this.currentObservers=null,u.push(e),new lt(function(){r.currentObservers=null,kt(u,e)}))},n.prototype._checkFinalizedStatuses=function(e){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?e.error(i):s&&e.complete()},n.prototype.asObservable=function(){var e=new E;return e.source=this,e},n.create=function(e,r){return new $e(e,r)},n}(E),$e=function(t){W(n,t);function n(e,r){var o=t.call(this)||this;return o.destination=e,o.source=r,o}return n.prototype.next=function(e){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,e)},n.prototype.error=function(e){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,e)},n.prototype.complete=function(){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||r===void 0||r.call(e)},n.prototype._subscribe=function(e){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(e))!==null&&o!==void 0?o:_n},n}(ce),ei={now:function(){return Date.now()},delegate:void 0},ni=function(t){W(n,t);function n(e,r){return t.call(this)||this}return n.prototype.schedule=function(e,r){return this},n}(lt),Ie={setInterval:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return setInterval.apply(void 0,F([t,n],M(e)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},ri=function(t){W(n,t);function n(e,r){var o=t.call(this,e,r)||this;return o.scheduler=e,o.work=r,o.pending=!1,o}return n.prototype.schedule=function(e,r){var o;if(r===void 0&&(r=0),this.closed)return this;this.state=e;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=(o=this.id)!==null&&o!==void 0?o:this.requestAsyncId(s,this.id,r),this},n.prototype.requestAsyncId=function(e,r,o){return o===void 0&&(o=0),Ie.setInterval(e.flush.bind(e,this),o)},n.prototype.recycleAsyncId=function(e,r,o){if(o===void 0&&(o=0),o!=null&&this.delay===o&&this.pending===!1)return r;r!=null&&Ie.clearInterval(r)},n.prototype.execute=function(e,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var o=this._execute(e,r);if(o)return o;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(e,r){var o=!1,i;try{this.work(e)}catch(s){o=!0,i=s||new Error("Scheduled action threw falsy error")}if(o)return this.unsubscribe(),i},n.prototype.unsubscribe=function(){if(!this.closed){var e=this,r=e.id,o=e.scheduler,i=o.actions;this.work=this.state=this.scheduler=null,this.pending=!1,kt(i,this),r!=null&&(this.id=this.recycleAsyncId(o,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},n}(ni),Ee=function(){function t(n,e){e===void 0&&(e=t.now),this.schedulerActionCtor=n,this.now=e}return t.prototype.schedule=function(n,e,r){return e===void 0&&(e=0),new this.schedulerActionCtor(this,n).schedule(r,e)},t.now=ei.now,t}(),ii=function(t){W(n,t);function n(e,r){r===void 0&&(r=Ee.now);var o=t.call(this,e,r)||this;return o.actions=[],o._active=!1,o}return n.prototype.flush=function(e){var r=this.actions;if(this._active){r.push(e);return}var o;this._active=!0;do if(o=e.execute(e.state,e.delay))break;while(e=r.shift());if(this._active=!1,o){for(;e=r.shift();)e.unsubscribe();throw o}},n}(Ee),le=new ii(ri),oi=le,$n=new E(function(t){return t.complete()});function In(t){return t&&_(t.schedule)}function fe(t){return t[t.length-1]}function En(t){return _(fe(t))?t.pop():void 0}function pt(t){return In(fe(t))?t.pop():void 0}function si(t,n){return typeof fe(t)=="number"?t.pop():n}var pe=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function Tn(t){return _(t==null?void 0:t.then)}function kn(t){return _(t[ae])}function On(t){return Symbol.asyncIterator&&_(t==null?void 0:t[Symbol.asyncIterator])}function Cn(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function ui(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Pn=ui();function An(t){return _(t==null?void 0:t[Pn])}function jn(t){return Br(this,arguments,function(){var e,r,o,i;return vn(this,function(s){switch(s.label){case 0:e=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,tt(e.read())];case 3:return r=s.sent(),o=r.value,i=r.done,i?[4,tt(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,tt(o)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function Ln(t){return _(t==null?void 0:t.getReader)}function A(t){if(t instanceof E)return t;if(t!=null){if(kn(t))return ai(t);if(pe(t))return ci(t);if(Tn(t))return li(t);if(On(t))return Mn(t);if(An(t))return fi(t);if(Ln(t))return pi(t)}throw Cn(t)}function ai(t){return new E(function(n){var e=t[ae]();if(_(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function ci(t){return new E(function(n){for(var e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function li(t){return new E(function(n){t.then(function(e){n.closed||(n.next(e),n.complete())},function(e){return n.error(e)}).then(null,xn)})}function fi(t){return new E(function(n){var e,r;try{for(var o=et(t),i=o.next();!i.done;i=o.next()){var s=i.value;if(n.next(s),n.closed)return}}catch(u){e={error:u}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(e)throw e.error}}n.complete()})}function Mn(t){return new E(function(n){di(t,n).catch(function(e){return n.error(e)})})}function pi(t){return Mn(jn(t))}function di(t,n){var e,r,o,i;return zr(this,void 0,void 0,function(){var s,u;return vn(this,function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),e=Vr(t),a.label=1;case 1:return[4,e.next()];case 2:if(r=a.sent(),!!r.done)return[3,4];if(s=r.value,n.next(s),n.closed)return[2];a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return u=a.sent(),o={error:u},[3,11];case 6:return a.trys.push([6,,9,10]),r&&!r.done&&(i=e.return)?[4,i.call(e)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}})})}function B(t,n,e,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=n.schedule(function(){e(),o?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(i),!o)return i}function Hn(t,n){return n===void 0&&(n=0),k(function(e,r){e.subscribe(O(r,function(o){return B(r,t,function(){return r.next(o)},n)},function(){return B(r,t,function(){return r.complete()},n)},function(o){return B(r,t,function(){return r.error(o)},n)}))})}function Rn(t,n){return n===void 0&&(n=0),k(function(e,r){r.add(t.schedule(function(){return e.subscribe(r)},n))})}function bi(t,n){return A(t).pipe(Rn(n),Hn(n))}function hi(t,n){return A(t).pipe(Rn(n),Hn(n))}function mi(t,n){return new E(function(e){var r=0;return n.schedule(function(){r===t.length?e.complete():(e.next(t[r++]),e.closed||this.schedule())})})}function vi(t,n){return new E(function(e){var r;return B(e,n,function(){r=t[Pn](),B(e,n,function(){var o,i,s;try{o=r.next(),i=o.value,s=o.done}catch(u){e.error(u);return}s?e.complete():e.next(i)},0,!0)}),function(){return _(r==null?void 0:r.return)&&r.return()}})}function Dn(t,n){if(!t)throw new Error("Iterable cannot be null");return new E(function(e){B(e,n,function(){var r=t[Symbol.asyncIterator]();B(e,n,function(){r.next().then(function(o){o.done?e.complete():e.next(o.value)})},0,!0)})})}function _i(t,n){return Dn(jn(t),n)}function yi(t,n){if(t!=null){if(kn(t))return bi(t,n);if(pe(t))return mi(t,n);if(Tn(t))return hi(t,n);if(On(t))return Dn(t,n);if(An(t))return vi(t,n);if(Ln(t))return _i(t,n)}throw Cn(t)}function dt(t,n){return n?yi(t,n):A(t)}function _t(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=pt(t);return dt(t,e)}var Nn=se(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function gi(t){return t instanceof Date&&!isNaN(t)}function $(t,n){return k(function(e,r){var o=0;e.subscribe(O(r,function(i){r.next(t.call(n,i,o++))}))})}var wi=Array.isArray;function xi(t,n){return wi(n)?t.apply(void 0,F([],M(n))):t(n)}function de(t){return $(function(n){return xi(t,n)})}var Si=Array.isArray,$i=Object.getPrototypeOf,Ii=Object.prototype,Ei=Object.keys;function Ti(t){if(t.length===1){var n=t[0];if(Si(n))return{args:n,keys:null};if(ki(n)){var e=Ei(n);return{args:e.map(function(r){return n[r]}),keys:e}}}return{args:t,keys:null}}function ki(t){return t&&typeof t=="object"&&$i(t)===Ii}function Oi(t,n){return t.reduce(function(e,r,o){return e[r]=n[o],e},{})}function Ci(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=pt(t),r=En(t),o=Ti(t),i=o.args,s=o.keys;if(i.length===0)return dt([],e);var u=new E(Fn(i,e,s?function(a){return Oi(s,a)}:ft));return r?u.pipe(de(r)):u}function Fn(t,n,e){return e===void 0&&(e=ft),function(r){Te(n,function(){for(var o=t.length,i=new Array(o),s=o,u=o,a=function(f){Te(n,function(){var c=dt(t[f],n),d=!1;c.subscribe(O(r,function(p){i[f]=p,d||(d=!0,u--),u||r.next(e(i.slice()))},function(){--s||r.complete()}))},r)},l=0;l<o;l++)a(l)},r)}}function Te(t,n,e){t?B(e,t,n):n()}function Pi(t,n,e,r,o,i,s,u){var a=[],l=0,f=0,c=!1,d=function(){c&&!a.length&&!l&&n.complete()},p=function(b){return l<r?h(b):a.push(b)},h=function(b){l++;var m=!1;A(e(b,f++)).subscribe(O(n,function(v){n.next(v)},function(){m=!0},void 0,function(){if(m)try{l--;for(var v=function(){var y=a.shift();s||h(y)};a.length&&l<r;)v();d()}catch(y){n.error(y)}}))};return t.subscribe(O(n,p,function(){c=!0,d()})),function(){}}function nt(t,n,e){return e===void 0&&(e=1/0),_(n)?nt(function(r,o){return $(function(i,s){return n(r,i,o,s)})(A(t(r,o)))},e):(typeof n=="number"&&(e=n),k(function(r,o){return Pi(r,o,t,e)}))}function Un(t){return t===void 0&&(t=1/0),nt(ft,t)}function Ai(){return Un(1)}function ke(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Ai()(dt(t,pt(t)))}var ji=["addListener","removeListener"],Li=["addEventListener","removeEventListener"],Mi=["on","off"];function V(t,n,e,r){if(_(e)&&(r=e,e=void 0),r)return V(t,n,e).pipe(de(r));var o=M(Di(t)?Li.map(function(u){return function(a){return t[u](n,a,e)}}):Hi(t)?ji.map(Oe(t,n)):Ri(t)?Mi.map(Oe(t,n)):[],2),i=o[0],s=o[1];if(!i&&pe(t))return nt(function(u){return V(u,n,e)})(A(t));if(!i)throw new TypeError("Invalid event target");return new E(function(u){var a=function(){for(var l=[],f=0;f<arguments.length;f++)l[f]=arguments[f];return u.next(1<l.length?l:l[0])};return i(a),function(){return s(a)}})}function Oe(t,n){return function(e){return function(r){return t[e](n,r)}}}function Hi(t){return _(t.addListener)&&_(t.removeListener)}function Ri(t){return _(t.on)&&_(t.off)}function Di(t){return _(t.addEventListener)&&_(t.removeEventListener)}function zn(t,n,e){t===void 0&&(t=0),e===void 0&&(e=oi);var r=-1;return n!=null&&(In(n)?e=n:r=n),new E(function(o){var i=gi(t)?+t-e.now():t;i<0&&(i=0);var s=0;return e.schedule(function(){o.closed||(o.next(s++),0<=r?this.schedule(void 0,r):o.complete())},i)})}function Ni(t,n){return n===void 0&&(n=le),zn(t,t,n)}function Fi(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=pt(t),r=si(t,1/0),o=t;return o.length?o.length===1?A(o[0]):Un(r)(dt(o,e)):$n}var Ui=Array.isArray;function zi(t){return t.length===1&&Ui(t[0])?t[0]:t}function U(t,n){return k(function(e,r){var o=0;e.subscribe(O(r,function(i){return t.call(n,i,o++)&&r.next(i)}))})}function Bn(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=En(t);return e?Jr(Bn.apply(void 0,F([],M(t))),de(e)):k(function(r,o){Fn(F([r],M(zi(t))))(o)})}function yt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Bn.apply(void 0,F([],M(t)))}function Bi(t,n){return _(n)?nt(t,n,1):nt(t,1)}function Vi(t){return k(function(n,e){var r=!1;n.subscribe(O(e,function(o){r=!0,e.next(o)},function(){r||e.next(t),e.complete()}))})}function Vn(t){return t<=0?function(){return $n}:k(function(n,e){var r=0;n.subscribe(O(e,function(o){++r<=t&&(e.next(o),t<=r&&e.complete())}))})}function Yt(t){return $(function(){return t})}function Wi(t,n){return nt(function(e,r){return A(t(e,r)).pipe(Vn(1),Yt(e))})}function qi(t,n){n===void 0&&(n=le);var e=zn(t,n);return Wi(function(){return e})}function Yi(t){return t===void 0&&(t=Gi),k(function(n,e){var r=!1;n.subscribe(O(e,function(o){r=!0,e.next(o)},function(){return r?e.complete():e.error(t())}))})}function Gi(){return new Nn}function Ji(t,n){var e=arguments.length>=2;return function(r){return r.pipe(ft,Vn(1),e?Vi(n):Yi(function(){return new Nn}))}}function Ce(){return k(function(t,n){var e,r=!1;t.subscribe(O(n,function(o){var i=e;e=o,r&&n.next([i,o]),r=!0}))})}function Pe(t){t===void 0&&(t={});var n=t.connector,e=n===void 0?function(){return new ce}:n,r=t.resetOnError,o=r===void 0?!0:r,i=t.resetOnComplete,s=i===void 0?!0:i,u=t.resetOnRefCountZero,a=u===void 0?!0:u;return function(l){var f,c,d,p=0,h=!1,b=!1,m=function(){c==null||c.unsubscribe(),c=void 0},v=function(){m(),f=d=void 0,h=b=!1},y=function(){var T=f;v(),T==null||T.unsubscribe()};return k(function(T,q){p++,!b&&!h&&m();var L=d=d??e();q.add(function(){p--,p===0&&!b&&!h&&(c=Ut(y,a))}),L.subscribe(q),!f&&p>0&&(f=new it({next:function(Y){return L.next(Y)},error:function(Y){b=!0,m(),c=Ut(v,o,Y),L.error(Y)},complete:function(){h=!0,m(),c=Ut(v,s),L.complete()}}),A(T).subscribe(f))})(l)}}function Ut(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];if(n===!0){t();return}if(n!==!1){var o=new it({next:function(){o.unsubscribe(),t()}});return A(n.apply(void 0,F([],M(e)))).subscribe(o)}}function H(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=pt(t);return k(function(r,o){(e?ke(t,r,e):ke(t,r)).subscribe(o)})}function Zi(t,n){return k(function(e,r){var o=null,i=0,s=!1,u=function(){return s&&!o&&r.complete()};e.subscribe(O(r,function(a){o==null||o.unsubscribe();var l=0,f=i++;A(t(a,f)).subscribe(o=O(r,function(c){return r.next(n?n(a,c,f,l++):c)},function(){o=null,u()}))},function(){s=!0,u()}))})}function Ki(t,n){return k(function(e,r){var o=0;e.subscribe(O(r,function(i){var s=t(i,o++);(s||n)&&r.next(i),!s&&r.complete()}))})}function Wn(){return!document.hidden}function Qi(){const t=V(document,"visibilitychange"),n=V(window,"focus").pipe(Yt(!0)),e=V(window,"blur").pipe(Yt(!1)),r=Fi(n,e);return Ci(t,r).pipe($(([,o])=>Wn()&&o),U(o=>o),Ji())}const Xi=V(document,"mouseover");async function to(){Wn()||await Promise.race([Qi().toPromise(),Xi.toPromise()])}async function eo(){await new Promise(t=>setTimeout(t,400)),await to(),await new Promise(t=>setTimeout(t,400))}const no=eo();function P(t,n){const e=t.querySelector(n);if(!e)throw new Error("Failed to find element ${ selector } !");return e}const ro=Pt.bind(at),io="crumbs-p",oo=ct(ro`
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
`);let so=class extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const n=N(this),e=oo.content.cloneNode(!0);n.appendChild(e)}};customElements.define(io,so);const uo=Pt.bind(at),ao="crumbs-panel",co=ct(uo`
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
`);class lo extends HTMLElement{constructor(){super(...arguments);w(this,"contentTimeoutElapsed",!1);w(this,"contentLoaded",!1);w(this,"connected",!1);w(this,"loading","100");w(this,"scrolled",!1);w(this,"scrolledSubscription",null)}static get observedAttributes(){return["panel-loading","panel-title"]}async connectedCallback(){this.attachShadow({mode:"open"}),await no;const e=N(this),r=co.content.cloneNode(!0);e.appendChild(r);const o=this.getAttribute("panel-loading");o!==null&&Ae(o)&&(this.loading=o),setTimeout(()=>{const i=P(e,"#panel-container");i.style.gridTemplateColumns="1rem 1fr 1rem",i.style.gridTemplateRows="1rem 1fr 1rem";const s=P(e,"#panel");s.style.backgroundColor="#ffffff40",this.scrolledSubscription=V(s,"scroll").pipe($(u=>u.target.scrollTop),$(u=>u!==0)).subscribe(u=>{this.scrolled=u,this.render()}),this.render()},10),setTimeout(()=>{this.contentTimeoutElapsed=!0,this.render()},400),this.connected=!0,this.render()}render(){const e=N(this),r=P(e,"#panel-content"),o=P(e,"#panel-loading"),i=P(e,"#panel"),s=P(e,"#panel-title-content");this.contentTimeoutElapsed&&fo(this.loading)?(r.style.visibility="visible",r.style.opacity="1",i.style.overflow="auto"):(r.style.visibility="collapse",r.style.opacity="0",i.style.overflow="hidden"),o.style.width=`${this.loading}%`;const u=P(e,"#panel-title");this.loading==="100"&&this.getAttribute("panel-title")&&!this.scrolled?setTimeout(()=>{u.style.opacity="1",s.innerHTML=this.getAttribute("panel-title")||"",r.style.paddingTop="2.5rem"},10):(r.style.paddingTop="inherit",u.style.opacity="0")}attributeChangedCallback(){if(this.shadowRoot&&this.connected){const e=this.getAttribute("panel-loading");e!==null&&Ae(e)?this.loading=e:e===null&&(this.loading="100"),this.render()}}disconnectedCallback(){var e;(e=this.scrolledSubscription)==null||e.unsubscribe()}}function Ae(t){const n=Number(t),e=Math.floor(n);return e===n&&Number.isInteger(e)&&Number.isFinite(e)&&e<=100&&e>=0}function fo(t){return t===null||t==="100"}customElements.define(ao,lo);const po=Pt.bind(at),bo="crumbs-input",ho=ct(po`
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
`);class mo extends HTMLElement{static get observedAttributes(){return["value"]}async connectedCallback(){this.attachShadow({mode:"open"});const n=N(this),e=ho.content.cloneNode(!0);n.appendChild(e);const r=P(n,"input"),o=this.getAttribute("value");r instanceof HTMLInputElement&&o&&(r.value=o)}attributeChangedCallback(n,e,r){if(n==="value"&&this.shadowRoot){const o=N(this),i=P(o,"input");i instanceof HTMLInputElement&&(i.value=r)}}}customElements.define(bo,mo);const Gt=Pt.bind(at),vo="crumbs-tabs",_o=ct(Gt`
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
`);class yo extends HTMLElement{constructor(){super(...arguments);w(this,"selected",1);w(this,"subscriptions",[])}async connectedCallback(){this.attachShadow({mode:"open"});const e=N(this),r=_o.content.cloneNode(!0);e.appendChild(r);const o=this.getAttribute("selected");this.selected=Number.parseInt(o||"1");const i=e.querySelector("#tabs"),s=e.querySelector("#content");if(!i)throw new Error("Tabs not found");if(!s)throw new Error("Content not found");for(const u of{[Symbol.iterator]:()=>this.getSlots()}){if(u.startsWith("content-")){const a=Gt`<div id=${`${u}`}> <slot name=${u}></slot> </div>`;a instanceof Element&&s.appendChild(a)}if(u.startsWith("title-")){const a=Gt`<div id=${u}> <crumbs-p> <slot name=${u}></slot> </crumbs-p> </div>`;a instanceof Element&&i.appendChild(a)}}this.subscriptions=[...i.children].map((u,a)=>V(u,"click").subscribe(()=>{const l=u.id.replace("title-","content-"),f=e.querySelector(`#${l}`);f instanceof HTMLElement&&s instanceof HTMLElement&&f.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.selected=a+1,this.render()})),this.render()}render(){const r=N(this).querySelector("#tabs");if(!r)throw new Error("Tabs not found");[...r.children].forEach((o,i)=>{i+1===this.selected?o instanceof HTMLElement&&o.classList.add("selected-title"):o instanceof HTMLElement&&o.classList.remove("selected-title")})}disconnectedCallback(){for(const e of this.subscriptions)e.unsubscribe()}*getSlots(){for(const e of Array.from(this.children)){const r=e.getAttribute("slot");r&&(yield r)}}}customElements.define(vo,yo);var qn=function(t,n,e,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var s=n[i++],u=n[i]?(n[0]|=s?1:2,e[n[i++]]):n[++i];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[n[++i]]=u:s===6?r[1][n[++i]]+=u+"":s?(o=t.apply(u,qn(t,u,e,["",null])),r.push(o),u[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(u)}return r},je=new Map;function go(t){var n=je.get(this);return n||(n=new Map,je.set(this,n)),(n=qn(this,n.get(t)||(n.set(t,n=function(e){for(var r,o,i=1,s="",u="",a=[0],l=function(d){i===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,d,s):i===3&&(d||s)?(a.push(3,d,s),i=2):i===2&&s==="..."&&d?a.push(4,d,0):i===2&&s&&!d?a.push(5,0,!0,s):i>=5&&((s||!d&&i===5)&&(a.push(i,0,s,o),i=6),d&&(a.push(i,d,0,o),i=6)),s=""},f=0;f<e.length;f++){f&&(i===1&&l(),l(f));for(var c=0;c<e[f].length;c++)r=e[f][c],i===1?r==="<"?(l(),a=[a],i=3):s+=r:i===4?s==="--"&&r===">"?(i=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(l(),i=1):i&&(r==="="?(i=5,o=s,s=""):r==="/"&&(i<5||e[f][c+1]===">")?(l(),i===3&&(a=a[0]),i=a,(a=a[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(l(),i=2):s+=r),i===3&&s==="!--"&&(i=4,a=a[0])}return l(),a}(t)),n),arguments,[])).length>1?n:n[0]}const wo=go.bind(at),xo="crumbs-button",Le=1e3;class So extends HTMLElement{constructor(){super();w(this,"_renderSubscription",null);w(this,"_clickSubscription",null);w(this,"_attributeChanges$",new ce);w(this,"_parsedProgress$");w(this,"_parsedDisabled$");w(this,"_parsedIndeterminateProgress$");w(this,"_parsedIndeterminateDurationMs$");w(this,"_indeterminedLoadingAt$");w(this,"_loading$");w(this,"_activeIndeterminateProgress$");w(this,"_disabled$");w(this,"_loadingBarTransitionEnabled$");this._parsedProgress$=this._attributeChanges$.pipe(U(([e])=>e==="progress"),$(([e,r])=>r),H(this.getAttribute("progress")),$(e=>e===null?null:Number(e)),U(e=>e===null||Number.isInteger(e)&&Number.isFinite(e)&&e<=100&&e>=0)),this._parsedDisabled$=this._attributeChanges$.pipe(U(([e])=>e==="disabled"),$(([e,r])=>r),H(this.getAttribute("disabled")),$(e=>e!==null&&e!=="false")),this._parsedIndeterminateProgress$=this._attributeChanges$.pipe(U(([e])=>e==="indeterminate-progress"),$(([e,r])=>r),H(this.getAttribute("indeterminate-progress")),$(e=>e!==null&&e!=="false")),this._parsedIndeterminateDurationMs$=this._attributeChanges$.pipe(U(([e])=>e==="indeterminate-duration-ms"),$(([e,r])=>r),H(this.getAttribute("indeterminate-duration-ms")),$(e=>e===null?null:Number(e)),U(e=>e===null||Number.isInteger(e)&&Number.isFinite(e)&&e>=0)),this._indeterminedLoadingAt$=this._parsedIndeterminateProgress$.pipe(H(!1),Ce(),U(([e,r])=>r&&!e),$(()=>Date.now()),H(0)),this._loading$=this._parsedProgress$.pipe(yt(this._indeterminedLoadingAt$,this._parsedIndeterminateDurationMs$,this._parsedIndeterminateProgress$),Zi(([e,r,o,i])=>{const s=o!==null?o-Le>Date.now()-r:!1;return o!==null&&s?Ni(100).pipe($(()=>{const a=Date.now()-r,l=o-Le,f=Math.max(l,0),c=Math.ceil(a/f*100);return Math.min(100,c)}),Ki(u=>u<100,!0)):_t(i?0:e||0)}),Pe(),H(100)),this._activeIndeterminateProgress$=this._parsedIndeterminateProgress$.pipe(yt(this._loading$,this._indeterminedLoadingAt$,this._parsedIndeterminateDurationMs$),Bi(([e,r,o,i])=>{const s=e&&r===100;if(!s){const u=i?i-(Date.now()-o):0;return _t(s).pipe(qi(u))}return _t(s)}),Pe(),H(!1)),this._disabled$=this._parsedDisabled$.pipe(yt(this._activeIndeterminateProgress$,this._loading$),$(([e,r,o])=>e||r||o>0&&o<100)),this._loadingBarTransitionEnabled$=this._loading$.pipe(Ce(),$(([e,r])=>r>=e),H(!1))}static get observedAttributes(){return["progress","disabled","indeterminate-progress","indeterminate-duration-ms"]}async connectedCallback(){this.attachShadow({mode:"open"}),N(this).appendChild($o.content.cloneNode(!0)),this._renderSubscription=this._disabled$.pipe(yt(this._loading$,this._activeIndeterminateProgress$,this._loadingBarTransitionEnabled$)).subscribe(r=>{this.render(...r)}),this._attributeChanges$.next(["disabled",this.getAttribute("disabled")]),this._attributeChanges$.next(["progress",this.getAttribute("progress")]),this._attributeChanges$.next(["indeterminate-progress",this.getAttribute("indeterminate-progress")]),this._attributeChanges$.next(["indeterminate-duration-ms",this.getAttribute("indeterminate-duration-ms")])}attributeChangedCallback(e){this._attributeChanges$.next([e,this.getAttribute(e)])}render(e,r,o,i){if(!this.shadowRoot)return;const s=N(this),u=P(s,"#progress"),a=P(s,"button"),l=P(s,"progress");a instanceof HTMLButtonElement&&(a.disabled=e),o?(a.classList.remove("indeterminate-loading-end"),a.classList.add("indeterminate-loading")):(a.classList.add("indeterminate-loading-end"),setTimeout(()=>{a.classList.remove("indeterminate-loading")},500)),i?u.classList.add("transition"):u.classList.remove("transition"),u.style.width=`${r}%`,l instanceof HTMLProgressElement&&(l.value=r)}disconnectedCallback(){var e,r;(e=this._clickSubscription)==null||e.unsubscribe(),(r=this._renderSubscription)==null||r.unsubscribe()}}customElements.define(xo,So);const $o=ct(wo`
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

		progress {
			/*visibility: hidden;*/
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
`);let Io={data:""},Eo=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||Io,To=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ko=/\/\*[^]*?\*\/|  +/g,Me=/\n+/g,J=(t,n)=>{let e="",r="",o="";for(let i in t){let s=t[i];i[0]=="@"?i[1]=="i"?e=i+" "+s+";":r+=i[1]=="f"?J(s,i):i+"{"+J(s,i[1]=="k"?"":n)+"}":typeof s=="object"?r+=J(s,n?n.replace(/([^,])+/g,u=>i.replace(/(^:.*)|([^,])+/g,a=>/&/.test(a)?a.replace(/&/g,u):u?u+" "+a:a)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=J.p?J.p(i,s):i+":"+s+";")}return e+(n&&o?n+"{"+o+"}":o)+r},R={},Yn=t=>{if(typeof t=="object"){let n="";for(let e in t)n+=e+Yn(t[e]);return n}return t},Oo=(t,n,e,r,o)=>{let i=Yn(t),s=R[i]||(R[i]=(a=>{let l=0,f=11;for(;l<a.length;)f=101*f+a.charCodeAt(l++)>>>0;return"go"+f})(i));if(!R[s]){let a=i!==t?t:(l=>{let f,c,d=[{}];for(;f=To.exec(l.replace(ko,""));)f[4]?d.shift():f[3]?(c=f[3].replace(Me," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][f[1]]=f[2].replace(Me," ").trim();return d[0]})(t);R[s]=J(o?{["@keyframes "+s]:a}:a,e?"":"."+s)}let u=e&&R.g?R.g:null;return e&&(R.g=R[s]),((a,l,f,c)=>{c?l.data=l.data.replace(c,a):l.data.indexOf(a)===-1&&(l.data=f?a+l.data:l.data+a)})(R[s],n,r,u),s},Co=(t,n,e)=>t.reduce((r,o,i)=>{let s=n[i];if(s&&s.call){let u=s(e),a=u&&u.props&&u.props.className||/^go/.test(u)&&u;s=a?"."+a:u&&typeof u=="object"?u.props?"":J(u,""):u===!1?"":u}return r+o+(s??"")},"");function K(t){let n=this||{},e=t.call?t(n.p):t;return Oo(e.unshift?e.raw?Co(e,[].slice.call(arguments,1),n.p):e.reduce((r,o)=>Object.assign(r,o&&o.call?o(n.p):o),{}):e,Eo(n.target),n.g,n.o,n.k)}K.bind({g:1});K.bind({k:1});var At,g,Gn,Z,He,Jn,Jt,be,Zt,Kt,ot={},Zn=[],Po=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,he=Array.isArray;function z(t,n){for(var e in n)t[e]=n[e];return t}function Kn(t){var n=t.parentNode;n&&n.removeChild(t)}function Qn(t,n,e){var r,o,i,s={};for(i in n)i=="key"?r=n[i]:i=="ref"?o=n[i]:s[i]=n[i];if(arguments.length>2&&(s.children=arguments.length>3?At.call(arguments,2):e),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)s[i]===void 0&&(s[i]=t.defaultProps[i]);return St(t,s,r,o,null)}function St(t,n,e,r,o){var i={type:t,props:n,key:e,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Gn,__i:-1,__u:0};return o==null&&g.vnode!=null&&g.vnode(i),i}function jt(t){return t.children}function $t(t,n){this.props=t,this.context=n}function Q(t,n){if(n==null)return t.__?Q(t.__,t.__i+1):null;for(var e;n<t.__k.length;n++)if((e=t.__k[n])!=null&&e.__e!=null)return e.__e;return typeof t.type=="function"?Q(t):null}function Xn(t){var n,e;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if((e=t.__k[n])!=null&&e.__e!=null){t.__e=t.__c.base=e.__e;break}return Xn(t)}}function Re(t){(!t.__d&&(t.__d=!0)&&Z.push(t)&&!Ot.__r++||He!==g.debounceRendering)&&((He=g.debounceRendering)||Jn)(Ot)}function Ot(){var t,n,e,r,o,i,s,u;for(Z.sort(Jt);t=Z.shift();)t.__d&&(n=Z.length,r=void 0,i=(o=(e=t).__v).__e,s=[],u=[],e.__P&&((r=z({},o)).__v=o.__v+1,g.vnode&&g.vnode(r),me(e.__P,r,o,e.__n,e.__P.namespaceURI,32&o.__u?[i]:null,s,i??Q(o),!!(32&o.__u),u),r.__v=o.__v,r.__.__k[r.__i]=r,nr(s,r,u),r.__e!=i&&Xn(r)),Z.length>n&&Z.sort(Jt));Ot.__r=0}function tr(t,n,e,r,o,i,s,u,a,l,f){var c,d,p,h,b,m=r&&r.__k||Zn,v=n.length;for(e.__d=a,Ao(e,n,m),a=e.__d,c=0;c<v;c++)(p=e.__k[c])!=null&&typeof p!="boolean"&&typeof p!="function"&&(d=p.__i===-1?ot:m[p.__i]||ot,p.__i=c,me(t,p,d,o,i,s,u,a,l,f),h=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&ve(d.ref,null,p),f.push(p.ref,p.__c||h,p)),b==null&&h!=null&&(b=h),65536&p.__u||d.__k===p.__k?(a&&!a.isConnected&&(a=Q(d)),a=er(p,a,t)):typeof p.type=="function"&&p.__d!==void 0?a=p.__d:h&&(a=h.nextSibling),p.__d=void 0,p.__u&=-196609);e.__d=a,e.__e=b}function Ao(t,n,e){var r,o,i,s,u,a=n.length,l=e.length,f=l,c=0;for(t.__k=[],r=0;r<a;r++)s=r+c,(o=t.__k[r]=(o=n[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?St(null,o,null,null,null):he(o)?St(jt,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?St(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,u=jo(o,e,s,f),o.__i=u,i=null,u!==-1&&(f--,(i=e[u])&&(i.__u|=131072)),i==null||i.__v===null?(u==-1&&c--,typeof o.type!="function"&&(o.__u|=65536)):u!==s&&(u===s+1?c++:u>s?f>a-s?c+=u-s:c--:u<s?u==s-1&&(c=u-s):c=0,u!==r+c&&(o.__u|=65536))):(i=e[s])&&i.key==null&&i.__e&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=Q(i)),Qt(i,i,!1),e[s]=null,f--);if(f)for(r=0;r<l;r++)(i=e[r])!=null&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=Q(i)),Qt(i,i))}function er(t,n,e){var r,o;if(typeof t.type=="function"){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,n=er(r[o],n,e));return n}t.__e!=n&&(e.insertBefore(t.__e,n||null),n=t.__e);do n=n&&n.nextSibling;while(n!=null&&n.nodeType===8);return n}function jo(t,n,e,r){var o=t.key,i=t.type,s=e-1,u=e+1,a=n[e];if(a===null||a&&o==a.key&&i===a.type&&!(131072&a.__u))return e;if(r>(a!=null&&!(131072&a.__u)?1:0))for(;s>=0||u<n.length;){if(s>=0){if((a=n[s])&&!(131072&a.__u)&&o==a.key&&i===a.type)return s;s--}if(u<n.length){if((a=n[u])&&!(131072&a.__u)&&o==a.key&&i===a.type)return u;u++}}return-1}function De(t,n,e){n[0]==="-"?t.setProperty(n,e??""):t[n]=e==null?"":typeof e!="number"||Po.test(n)?e:e+"px"}function gt(t,n,e,r,o){var i;t:if(n==="style")if(typeof e=="string")t.style.cssText=e;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(n in r)e&&n in e||De(t.style,n,"");if(e)for(n in e)r&&e[n]===r[n]||De(t.style,n,e[n])}else if(n[0]==="o"&&n[1]==="n")i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in t||n==="onFocusOut"||n==="onFocusIn"?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+i]=e,e?r?e.u=r.u:(e.u=be,t.addEventListener(n,i?Kt:Zt,i)):t.removeEventListener(n,i?Kt:Zt,i);else{if(o=="http://www.w3.org/2000/svg")n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!="width"&&n!="height"&&n!="href"&&n!="list"&&n!="form"&&n!="tabIndex"&&n!="download"&&n!="rowSpan"&&n!="colSpan"&&n!="role"&&n in t)try{t[n]=e??"";break t}catch{}typeof e=="function"||(e==null||e===!1&&n[4]!=="-"?t.removeAttribute(n):t.setAttribute(n,e))}}function Ne(t){return function(n){if(this.l){var e=this.l[n.type+t];if(n.t==null)n.t=be++;else if(n.t<e.u)return;return e(g.event?g.event(n):n)}}}function me(t,n,e,r,o,i,s,u,a,l){var f,c,d,p,h,b,m,v,y,T,q,L,Y,ht,Ht,C=n.type;if(n.constructor!==void 0)return null;128&e.__u&&(a=!!(32&e.__u),i=[u=n.__e=e.__e]),(f=g.__b)&&f(n);t:if(typeof C=="function")try{if(v=n.props,y=(f=C.contextType)&&r[f.__c],T=f?y?y.props.value:f.__:r,e.__c?m=(c=n.__c=e.__c).__=c.__E:("prototype"in C&&C.prototype.render?n.__c=c=new C(v,T):(n.__c=c=new $t(v,T),c.constructor=C,c.render=Mo),y&&y.sub(c),c.props=v,c.state||(c.state={}),c.context=T,c.__n=r,d=c.__d=!0,c.__h=[],c._sb=[]),c.__s==null&&(c.__s=c.state),C.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=z({},c.__s)),z(c.__s,C.getDerivedStateFromProps(v,c.__s))),p=c.props,h=c.state,c.__v=n,d)C.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(C.getDerivedStateFromProps==null&&v!==p&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(v,T),!c.__e&&(c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(v,c.__s,T)===!1||n.__v===e.__v)){for(n.__v!==e.__v&&(c.props=v,c.state=c.__s,c.__d=!1),n.__e=e.__e,n.__k=e.__k,n.__k.forEach(function(mt){mt&&(mt.__=n)}),q=0;q<c._sb.length;q++)c.__h.push(c._sb[q]);c._sb=[],c.__h.length&&s.push(c);break t}c.componentWillUpdate!=null&&c.componentWillUpdate(v,c.__s,T),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(p,h,b)})}if(c.context=T,c.props=v,c.__P=t,c.__e=!1,L=g.__r,Y=0,"prototype"in C&&C.prototype.render){for(c.state=c.__s,c.__d=!1,L&&L(n),f=c.render(c.props,c.state,c.context),ht=0;ht<c._sb.length;ht++)c.__h.push(c._sb[ht]);c._sb=[]}else do c.__d=!1,L&&L(n),f=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++Y<25);c.state=c.__s,c.getChildContext!=null&&(r=z(z({},r),c.getChildContext())),d||c.getSnapshotBeforeUpdate==null||(b=c.getSnapshotBeforeUpdate(p,h)),tr(t,he(Ht=f!=null&&f.type===jt&&f.key==null?f.props.children:f)?Ht:[Ht],n,e,r,o,i,s,u,a,l),c.base=n.__e,n.__u&=-161,c.__h.length&&s.push(c),m&&(c.__E=c.__=null)}catch(mt){n.__v=null,a||i!=null?(n.__e=u,n.__u|=a?160:32,i[i.indexOf(u)]=null):(n.__e=e.__e,n.__k=e.__k),g.__e(mt,n,e)}else i==null&&n.__v===e.__v?(n.__k=e.__k,n.__e=e.__e):n.__e=Lo(e.__e,n,e,r,o,i,s,a,l);(f=g.diffed)&&f(n)}function nr(t,n,e){n.__d=void 0;for(var r=0;r<e.length;r++)ve(e[r],e[++r],e[++r]);g.__c&&g.__c(n,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){g.__e(i,o.__v)}})}function Lo(t,n,e,r,o,i,s,u,a){var l,f,c,d,p,h,b,m=e.props,v=n.props,y=n.type;if(y==="svg"?o="http://www.w3.org/2000/svg":y==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(l=0;l<i.length;l++)if((p=i[l])&&"setAttribute"in p==!!y&&(y?p.localName===y:p.nodeType===3)){t=p,i[l]=null;break}}if(t==null){if(y===null)return document.createTextNode(v);t=document.createElementNS(o,y,v.is&&v),i=null,u=!1}if(y===null)m===v||u&&t.data===v||(t.data=v);else{if(i=i&&At.call(t.childNodes),m=e.props||ot,!u&&i!=null)for(m={},l=0;l<t.attributes.length;l++)m[(p=t.attributes[l]).name]=p.value;for(l in m)if(p=m[l],l!="children"){if(l=="dangerouslySetInnerHTML")c=p;else if(l!=="key"&&!(l in v)){if(l=="value"&&"defaultValue"in v||l=="checked"&&"defaultChecked"in v)continue;gt(t,l,null,p,o)}}for(l in v)p=v[l],l=="children"?d=p:l=="dangerouslySetInnerHTML"?f=p:l=="value"?h=p:l=="checked"?b=p:l==="key"||u&&typeof p!="function"||m[l]===p||gt(t,l,p,m[l],o);if(f)u||c&&(f.__html===c.__html||f.__html===t.innerHTML)||(t.innerHTML=f.__html),n.__k=[];else if(c&&(t.innerHTML=""),tr(t,he(d)?d:[d],n,e,r,y==="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,s,i?i[0]:e.__k&&Q(e,0),u,a),i!=null)for(l=i.length;l--;)i[l]!=null&&Kn(i[l]);u||(l="value",h!==void 0&&(h!==t[l]||y==="progress"&&!h||y==="option"&&h!==m[l])&&gt(t,l,h,m[l],o),l="checked",b!==void 0&&b!==t[l]&&gt(t,l,b,m[l],o))}return t}function ve(t,n,e){try{typeof t=="function"?t(n):t.current=n}catch(r){g.__e(r,e)}}function Qt(t,n,e){var r,o;if(g.unmount&&g.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||ve(r,null,n)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){g.__e(i,n)}r.base=r.__P=null}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&Qt(r[o],n,e||typeof t.type!="function");e||t.__e==null||Kn(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function Mo(t,n,e){return this.constructor(t,e)}function Ho(t,n,e){var r,o,i,s;g.__&&g.__(t,n),o=(r=typeof e=="function")?null:n.__k,i=[],s=[],me(n,t=(!r&&e||n).__k=Qn(jt,null,[t]),o||ot,ot,n.namespaceURI,!r&&e?[e]:o?null:n.firstChild?At.call(n.childNodes):null,i,!r&&e?e:o?o.__e:n.firstChild,r,s),nr(i,t,s)}At=Zn.slice,g={__e:function(t,n,e,r){for(var o,i,s;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),s=o.__d),s)return o.__E=o}catch(u){t=u}throw t}},Gn=0,$t.prototype.setState=function(t,n){var e;e=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=z({},this.state),typeof t=="function"&&(t=t(z({},e),this.props)),t&&z(e,t),t!=null&&this.__v&&(n&&this._sb.push(n),Re(this))},$t.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Re(this))},$t.prototype.render=jt,Z=[],Jn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Jt=function(t,n){return t.__v.__b-n.__v.__b},Ot.__r=0,be=0,Zt=Ne(!1),Kt=Ne(!0);var rr=function(t,n,e,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var s=n[i++],u=n[i]?(n[0]|=s?1:2,e[n[i++]]):n[++i];s===3?r[0]=u:s===4?r[1]=Object.assign(r[1]||{},u):s===5?(r[1]=r[1]||{})[n[++i]]=u:s===6?r[1][n[++i]]+=u+"":s?(o=t.apply(u,rr(t,u,e,["",null])),r.push(o),u[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(u)}return r},Fe=new Map;function Ro(t){var n=Fe.get(this);return n||(n=new Map,Fe.set(this,n)),(n=rr(this,n.get(t)||(n.set(t,n=function(e){for(var r,o,i=1,s="",u="",a=[0],l=function(d){i===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,d,s):i===3&&(d||s)?(a.push(3,d,s),i=2):i===2&&s==="..."&&d?a.push(4,d,0):i===2&&s&&!d?a.push(5,0,!0,s):i>=5&&((s||!d&&i===5)&&(a.push(i,0,s,o),i=6),d&&(a.push(i,d,0,o),i=6)),s=""},f=0;f<e.length;f++){f&&(i===1&&l(),l(f));for(var c=0;c<e[f].length;c++)r=e[f][c],i===1?r==="<"?(l(),a=[a],i=3):s+=r:i===4?s==="--"&&r===">"?(i=1,s=""):s=r+s[0]:u?r===u?u="":s+=r:r==='"'||r==="'"?u=r:r===">"?(l(),i=1):i&&(r==="="?(i=5,o=s,s=""):r==="/"&&(i<5||e[f][c+1]===">")?(l(),i===3&&(a=a[0]),i=a,(a=a[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(l(),i=2):s+=r),i===3&&s==="!--"&&(i=4,a=a[0])}return l(),a}(t)),n),arguments,[])).length>1?n:n[0]}var j=Ro.bind(Qn),st,x,zt,Ue,ut=0,ir=[],It=[],S=g,ze=S.__b,Be=S.__r,Ve=S.diffed,We=S.__c,qe=S.unmount,Ye=S.__;function _e(t,n){S.__h&&S.__h(x,t,ut||n),ut=0;var e=x.__H||(x.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({__V:It}),e.__[t]}function I(t){return ut=1,Do(ur,t)}function Do(t,n,e){var r=_e(st++,2);if(r.t=t,!r.__c&&(r.__=[ur(void 0,n),function(u){var a=r.__N?r.__N[0]:r.__[0],l=r.t(a,u);a!==l&&(r.__N=[l,r.__[1]],r.__c.setState({}))}],r.__c=x,!x.u)){var o=function(u,a,l){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(d){return!!d.__c});if(f.every(function(d){return!d.__N}))return!i||i.call(this,u,a,l);var c=!1;return f.forEach(function(d){if(d.__N){var p=d.__[0];d.__=d.__N,d.__N=void 0,p!==d.__[0]&&(c=!0)}}),!(!c&&r.__c.props===u)&&(!i||i.call(this,u,a,l))};x.u=!0;var i=x.shouldComponentUpdate,s=x.componentWillUpdate;x.componentWillUpdate=function(u,a,l){if(this.__e){var f=i;i=void 0,o(u,a,l),i=f}s&&s.call(this,u,a,l)},x.shouldComponentUpdate=o}return r.__N||r.__}function No(t,n){var e=_e(st++,3);!S.__s&&sr(e.__H,n)&&(e.__=t,e.i=n,x.__H.__h.push(e))}function Fo(t){return ut=5,or(function(){return{current:t}},[])}function or(t,n){var e=_e(st++,7);return sr(e.__H,n)?(e.__V=t(),e.i=n,e.__h=t,e.__V):e.__}function Uo(t,n){return ut=8,or(function(){return t},n)}function zo(){for(var t;t=ir.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Et),t.__H.__h.forEach(Xt),t.__H.__h=[]}catch(n){t.__H.__h=[],S.__e(n,t.__v)}}S.__b=function(t){x=null,ze&&ze(t)},S.__=function(t,n){t&&n.__k&&n.__k.__m&&(t.__m=n.__k.__m),Ye&&Ye(t,n)},S.__r=function(t){Be&&Be(t),st=0;var n=(x=t.__c).__H;n&&(zt===x?(n.__h=[],x.__h=[],n.__.forEach(function(e){e.__N&&(e.__=e.__N),e.__V=It,e.__N=e.i=void 0})):(n.__h.forEach(Et),n.__h.forEach(Xt),n.__h=[],st=0)),zt=x},S.diffed=function(t){Ve&&Ve(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(ir.push(n)!==1&&Ue===S.requestAnimationFrame||((Ue=S.requestAnimationFrame)||Bo)(zo)),n.__H.__.forEach(function(e){e.i&&(e.__H=e.i),e.__V!==It&&(e.__=e.__V),e.i=void 0,e.__V=It})),zt=x=null},S.__c=function(t,n){n.some(function(e){try{e.__h.forEach(Et),e.__h=e.__h.filter(function(r){return!r.__||Xt(r)})}catch(r){n.some(function(o){o.__h&&(o.__h=[])}),n=[],S.__e(r,e.__v)}}),We&&We(t,n)},S.unmount=function(t){qe&&qe(t);var n,e=t.__c;e&&e.__H&&(e.__H.__.forEach(function(r){try{Et(r)}catch(o){n=o}}),e.__H=void 0,n&&S.__e(n,e.__v))};var Ge=typeof requestAnimationFrame=="function";function Bo(t){var n,e=function(){clearTimeout(r),Ge&&cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);Ge&&(n=requestAnimationFrame(e))}function Et(t){var n=x,e=t.__c;typeof e=="function"&&(t.__c=void 0,e()),x=n}function Xt(t){var n=x;t.__c=t.__(),x=n}function sr(t,n){return!t||t.length!==n.length||n.some(function(e,r){return e!==t[r]})}function ur(t,n){return typeof n=="function"?n(t):n}function Ct(t,n){var e=I(n),r=e[0],o=e[1],i=Fo(t);return No(function(){var s=i.current.subscribe(o);return function(){return s.unsubscribe()}}),r}var te=function(t,n){return te=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])},te(t,n)};function Lt(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");te(t,n);function e(){this.constructor=t}t.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}function ee(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function ne(t,n){var e=typeof Symbol=="function"&&t[Symbol.iterator];if(!e)return t;var r=e.call(t),o,i=[],s;try{for(;(n===void 0||n-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(e=r.return)&&e.call(r)}finally{if(s)throw s.error}}return i}function re(t,n,e){if(e||arguments.length===2)for(var r=0,o=n.length,i;r<o;r++)(i||!(r in n))&&(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return t.concat(i||Array.prototype.slice.call(n))}function D(t){return typeof t=="function"}function ar(t){var n=function(r){Error.call(r),r.stack=new Error().stack},e=t(n);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Bt=ar(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function ie(t,n){if(t){var e=t.indexOf(n);0<=e&&t.splice(e,1)}}var Mt=function(){function t(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var n,e,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=ee(s),a=u.next();!a.done;a=u.next()){var l=a.value;l.remove(this)}}catch(b){n={error:b}}finally{try{a&&!a.done&&(e=u.return)&&e.call(u)}finally{if(n)throw n.error}}else s.remove(this);var f=this.initialTeardown;if(D(f))try{f()}catch(b){i=b instanceof Bt?b.errors:[b]}var c=this._finalizers;if(c){this._finalizers=null;try{for(var d=ee(c),p=d.next();!p.done;p=d.next()){var h=p.value;try{Je(h)}catch(b){i=i??[],b instanceof Bt?i=re(re([],ne(i)),ne(b.errors)):i.push(b)}}}catch(b){r={error:b}}finally{try{p&&!p.done&&(o=d.return)&&o.call(d)}finally{if(r)throw r.error}}}if(i)throw new Bt(i)}},t.prototype.add=function(n){var e;if(n&&n!==this)if(this.closed)Je(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}},t.prototype._hasParent=function(n){var e=this._parentage;return e===n||Array.isArray(e)&&e.includes(n)},t.prototype._addParent=function(n){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n},t.prototype._removeParent=function(n){var e=this._parentage;e===n?this._parentage=null:Array.isArray(e)&&ie(e,n)},t.prototype.remove=function(n){var e=this._finalizers;e&&ie(e,n),n instanceof t&&n._removeParent(this)},t.EMPTY=function(){var n=new t;return n.closed=!0,n}(),t}(),cr=Mt.EMPTY;function lr(t){return t instanceof Mt||t&&"closed"in t&&D(t.remove)&&D(t.add)&&D(t.unsubscribe)}function Je(t){D(t)?t():t.unsubscribe()}var fr={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Vo={setTimeout:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return setTimeout.apply(void 0,re([t,n],ne(e)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function Wo(t){Vo.setTimeout(function(){throw t})}function Ze(){}function Tt(t){t()}var pr=function(t){Lt(n,t);function n(e){var r=t.call(this)||this;return r.isStopped=!1,e?(r.destination=e,lr(e)&&e.add(r)):r.destination=Jo,r}return n.create=function(e,r,o){return new oe(e,r,o)},n.prototype.next=function(e){this.isStopped||this._next(e)},n.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(e){this.destination.next(e)},n.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(Mt),qo=Function.prototype.bind;function Vt(t,n){return qo.call(t,n)}var Yo=function(){function t(n){this.partialObserver=n}return t.prototype.next=function(n){var e=this.partialObserver;if(e.next)try{e.next(n)}catch(r){wt(r)}},t.prototype.error=function(n){var e=this.partialObserver;if(e.error)try{e.error(n)}catch(r){wt(r)}else wt(n)},t.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(e){wt(e)}},t}(),oe=function(t){Lt(n,t);function n(e,r,o){var i=t.call(this)||this,s;if(D(e)||!e)s={next:e??void 0,error:r??void 0,complete:o??void 0};else{var u;i&&fr.useDeprecatedNextContext?(u=Object.create(e),u.unsubscribe=function(){return i.unsubscribe()},s={next:e.next&&Vt(e.next,u),error:e.error&&Vt(e.error,u),complete:e.complete&&Vt(e.complete,u)}):s=e}return i.destination=new Yo(s),i}return n}(pr);function wt(t){Wo(t)}function Go(t){throw t}var Jo={closed:!0,next:Ze,error:Go,complete:Ze},Zo=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Ko(t){return t}function Qo(t){return t.length===0?Ko:t.length===1?t[0]:function(e){return t.reduce(function(r,o){return o(r)},e)}}var Ke=function(){function t(n){n&&(this._subscribe=n)}return t.prototype.lift=function(n){var e=new t;return e.source=this,e.operator=n,e},t.prototype.subscribe=function(n,e,r){var o=this,i=ts(n)?n:new oe(n,e,r);return Tt(function(){var s=o,u=s.operator,a=s.source;i.add(u?u.call(i,a):a?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(e){n.error(e)}},t.prototype.forEach=function(n,e){var r=this;return e=Qe(e),new e(function(o,i){var s=new oe({next:function(u){try{n(u)}catch(a){i(a),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},t.prototype._subscribe=function(n){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(n)},t.prototype[Zo]=function(){return this},t.prototype.pipe=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return Qo(n)(this)},t.prototype.toPromise=function(n){var e=this;return n=Qe(n),new n(function(r,o){var i;e.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},t.create=function(n){return new t(n)},t}();function Qe(t){var n;return(n=t??fr.Promise)!==null&&n!==void 0?n:Promise}function Xo(t){return t&&D(t.next)&&D(t.error)&&D(t.complete)}function ts(t){return t&&t instanceof pr||Xo(t)&&lr(t)}var es=ar(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),ye=function(t){Lt(n,t);function n(){var e=t.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return n.prototype.lift=function(e){var r=new Xe(this,this);return r.operator=e,r},n.prototype._throwIfClosed=function(){if(this.closed)throw new es},n.prototype.next=function(e){var r=this;Tt(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=ee(r.currentObservers),u=s.next();!u.done;u=s.next()){var a=u.value;a.next(e)}}catch(l){o={error:l}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},n.prototype.error=function(e){var r=this;Tt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=e;for(var o=r.observers;o.length;)o.shift().error(e)}})},n.prototype.complete=function(){var e=this;Tt(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var r=e.observers;r.length;)r.shift().complete()}})},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},n.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},n.prototype._innerSubscribe=function(e){var r=this,o=this,i=o.hasError,s=o.isStopped,u=o.observers;return i||s?cr:(this.currentObservers=null,u.push(e),new Mt(function(){r.currentObservers=null,ie(u,e)}))},n.prototype._checkFinalizedStatuses=function(e){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?e.error(i):s&&e.complete()},n.prototype.asObservable=function(){var e=new Ke;return e.source=this,e},n.create=function(e,r){return new Xe(e,r)},n}(Ke),Xe=function(t){Lt(n,t);function n(e,r){var o=t.call(this)||this;return o.destination=e,o.source=r,o}return n.prototype.next=function(e){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,e)},n.prototype.error=function(e){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,e)},n.prototype.complete=function(){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||r===void 0||r.call(e)},n.prototype._subscribe=function(e){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(e))!==null&&o!==void 0?o:cr},n}(ye),dr=4,br=new ye,hr=br.asObservable();function mr(){return dr}function X(t){dr=t,br.next(t)}var vr="initial",_r=new ye,yr=_r.asObservable();function gr(){return vr}function G(t){vr=t,_r.next(t)}var wr=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},tn=K(en||(en=wr([`
	height: 95%;
	display: grid;
	place-content: space-evenly;
`],[`
	height: 95%;
	display: grid;
	place-content: space-evenly;
`])));function bt(t){var n=t.title,e=t.children;return j(nn||(nn=wr([`
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
	`])),n,tn,e[0],e[1],tn,e[2])}var en,nn,ns=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};function rs(){var t=I("I'm an input !"),n=t[0],e=t[1],r=`&lt;crumbs-input
	value="`.concat(n,`"&gt;
&lt;/crumbs-input&gt;`);return j(rn||(rn=ns([`
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
	`])),bt,n,function(o){return e(o.originalTarget.value)},n,function(o){return e(o.originalTarget.value)},{__html:r})}var rn,is=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};function os(){var t=I("I'm a <b>paragraph</b> !"),n=t[0],e=t[1];return j(on||(on=is([`
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
	`])),bt,{__html:n},n,function(r){return e(r.originalTarget.value)},{__html:"&lt;crumbs-p&gt; ".concat(n," &lt;/crumbs-p&gt;")})}var on,ss=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},us=function(t,n,e,r){function o(i){return i instanceof e?i:new e(function(s){s(i)})}return new(e||(e=Promise))(function(i,s){function u(f){try{l(r.next(f))}catch(c){s(c)}}function a(f){try{l(r.throw(f))}catch(c){s(c)}}function l(f){f.done?i(f.value):o(f.value).then(u,a)}l((r=r.apply(t,n||[])).next())})},as=function(t,n){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(l){return function(f){return a([l,f])}}function a(l){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,l[0]&&(e=0)),e;)try{if(r=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return e.label++,{value:l[1],done:!1};case 5:e.label++,o=l[1],l=[0];continue;case 7:l=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){e=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){e.label=l[1];break}if(l[0]===6&&e.label<i[1]){e.label=i[1],i=l;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(l);break}i[2]&&e.ops.pop(),e.trys.pop();continue}l=n.call(t,e)}catch(f){l=[6,f],o=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}};function cs(){var t=this,n=I("I'm a panel !"),e=n[0],r=n[1],o=I(""),i=o[0],s=o[1],u=I("100"),a=u[0],l=u[1],f=I(!1),c=f[0],d=f[1],p=`&lt;crumbs-panel
	panel-title="`.concat(i,`"
	panel-loading="`).concat(a,`"&gt;
	`).concat(e,`
&lt;/crumbs-panel&gt;`),h=Uo(function(){return us(t,void 0,void 0,function(){var m;return as(this,function(v){switch(v.label){case 0:if(c)return[2];d(!0),l("0"),m=0,v.label=1;case 1:return m<=100?[4,new Promise(function(y){return setTimeout(y,10)})]:[3,4];case 2:v.sent(),l(Math.floor(m).toString()),v.label=3;case 3:return m+=.1+(100-m)/100,[3,1];case 4:return l("100"),d(!1),[2]}})})},[c]),b=function(){c||h()};return j(sn||(sn=ss([`
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
	`])),bt,a,i,e,i,function(m){return s(m.originalTarget.value)},e,function(m){return r(m.originalTarget.value)},a,function(m){return l(String(m.target.value))},b,{__html:p})}var sn,ls=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};function fs(){var t=I("Tab content"),n=t[0],e=t[1],r=I("Tab title"),o=r[0],i=r[1],s=I("Tab content 2"),u=s[0],a=s[1],l=I("Tab title 2"),f=l[0],c=l[1],d=`&lt;crumbs-tabs&gt;
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
&lt;/crumbs-panel&gt;`);return j(un||(un=ls([`
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
	`])),bt,o,n,f,u,o,function(p){return i(p.originalTarget.value)},n,function(p){return e(p.originalTarget.value)},f,function(p){return c(p.originalTarget.value)},u,function(p){return a(p.originalTarget.value)},{__html:d})}var un,ps=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};function ds(){return j(an||(an=ps([`
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
	`])))}var an,Wt=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};function bs(){var t=Ct(hr,mr),n=Ct(yr,gr),e=K(cn||(cn=Wt([`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`],[`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`]))),r=K(ln||(ln=Wt([`
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
	`])));return j(fn||(fn=Wt([`
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
	`])),e,r,t===1,function(){return X(1)},t===2,function(){return X(2)},t===3,function(){return X(3)},t===4,function(){return X(4)},t===5,function(){return X(5)},t===6,function(){return X(6)},r,n==="initial",function(){return G("initial")},n==="monospace",function(){return G("monospace")},n==="serif",function(){return G("serif")},n==="sans-serif",function(){return G("sans-serif")},n==="cursive",function(){return G("cursive")},n==="fantasy",function(){return G("fantasy")},n==="system-ui",function(){return G("system-ui")})}var cn,ln,fn,hs=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};function ms(){var t="&lt;crumbs-p&gt; Hello world ! &lt;/crumbs-p&gt;";return j(pn||(pn=hs([`
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
	`])),{__html:t})}var pn,vs=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};function _s(){var t=I("Click me !"),n=t[0],e=t[1],r=I("100"),o=r[0],i=r[1],s=I(!1),u=s[0],a=s[1],l=I(!1),f=l[0],c=l[1],d=I(2e3),p=d[0],h=d[1],b=`
		&lt;crumbs-button
			`.concat(u?"	disabled":"",`
			`).concat(f?"	indeterminate-progress":"",`
			`).concat(f?'	indeterminate-duration-ms="'.concat(p,'"'):"",`
				progress="`).concat(o,`"&gt;
				`).concat(n,`
		&lt;/crumbs-button&gt;
	`);return j(dn||(dn=vs([`
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
	`])),bt,o,o,u,f,p,o,n,n,function(m){return e(m.originalTarget.value)},o,function(m){return i(String(m.target.value))},function(){return a(!u)},function(){return c(!f)},p,function(m){return h(Number(m.originalTarget.value))},{__html:b})}var dn;function ys(){const t=Ct(hr,mr),n=Ct(yr,gr),e=K`
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
		font-family: ${n};
	`;return j`
		<div class=${e}></div>

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
