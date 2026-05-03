(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Z(e){for(var t,n,r=arguments,o=1,i="",s="",a=[0],c=function(l){o===1&&(l||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(l?r[l]:i):o===3&&(l||i)?(a[1]=l?r[l]:i,o=2):o===2&&i==="..."&&l?a[2]=Object.assign(a[2]||{},r[l]):o===2&&i&&!l?(a[2]=a[2]||{})[i]=!0:o>=5&&(o===5?((a[2]=a[2]||{})[n]=l?i?i+r[l]:r[l]:i,o=6):(l||i)&&(a[2][n]+=l?i+r[l]:i)),i=""},u=0;u<e.length;u++){u&&(o===1&&c(),c(u));for(var f=0;f<e[u].length;f++)t=e[u][f],o===1?t==="<"?(c(),a=[a,"",null],o=3):i+=t:o===4?i==="--"&&t===">"?(o=1,i=""):i=t+i[0]:s?t===s?s="":i+=t:t==='"'||t==="'"?s=t:t===">"?(c(),o=1):o&&(t==="="?(o=5,n=i,i=""):t==="/"&&(o<5||e[u][f+1]===">")?(c(),o===3&&(a=a[0]),o=a,(a=a[0]).push(this.apply(null,o.slice(1))),o=0):t===" "||t==="	"||t===`
`||t==="\r"?(c(),o=2):i+=t),o===3&&i==="!--"&&(o=4,a=a[0])}return c(),a.length>2?a.slice(1):a[1]}function er(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function nr(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e;var t=e.default;if(typeof t=="function"){var n=function r(){var o=!1;try{o=this instanceof r}catch{}return o?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var Ht={exports:{}};var Nt,be;function rr(){return be||(be=1,Nt=(function(t){var n=String.prototype.split,r=/()??/.exec("")[1]===t,o;return o=function(i,l,a){if(Object.prototype.toString.call(l)!=="[object RegExp]")return n.call(i,l,a);var c=[],u=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.extended?"x":"")+(l.sticky?"y":""),f=0,l=new RegExp(l.source,u+"g"),d,p,v,h;for(i+="",r||(d=new RegExp("^"+l.source+"$(?!\\s)",u)),a=a===t?-1>>>0:a>>>0;(p=l.exec(i))&&(v=p.index+p[0].length,!(v>f&&(c.push(i.slice(f,p.index)),!r&&p.length>1&&p[0].replace(d,function(){for(var b=1;b<arguments.length-2;b++)arguments[b]===t&&(p[b]=t)}),p.length>1&&p.index<i.length&&Array.prototype.push.apply(c,p.slice(1)),h=p[0].length,f=v,c.length>=a)));)l.lastIndex===p.index&&l.lastIndex++;return f===i.length?(h||!l.test(""))&&c.push(""):c.push(i.slice(f)),c.length>a?c.slice(0,a):c},o})()),Nt}var jt,ve;function or(){if(ve)return jt;ve=1;var e=[].indexOf;return jt=function(t,n){if(e)return t.indexOf(n);for(var r=0;r<t.length;++r)if(t[r]===n)return r;return-1},jt}var Rt,_e;function ir(){if(_e)return Rt;_e=1;var e=or();Rt=t;function t(o){var i=o.classList;if(i)return i;var s={add:a,remove:c,contains:u,toggle:f,toString:l,length:0,item:d};return s;function a(h){var b=p();e(b,h)>-1||(b.push(h),v(b))}function c(h){var b=p(),_=e(b,h);_!==-1&&(b.splice(_,1),v(b))}function u(h){return e(p(),h)>-1}function f(h){return u(h)?(c(h),!1):(a(h),!0)}function l(){return o.className}function d(h){var b=p();return b[h]||null}function p(){var h=o.className;return n(h.split(" "),r)}function v(h){var b=h.length;o.className=h.join(" "),s.length=b;for(var _=0;_<h.length;_++)s[_]=h[_];delete h[b]}}function n(o,i){for(var s=[],a=0;a<o.length;a++)i(o[a])&&s.push(o[a]);return s}function r(o){return!!o}return Rt}const sr={},ar=Object.freeze(Object.defineProperty({__proto__:null,default:sr},Symbol.toStringTag,{value:"Module"})),cr=nr(ar);var ye;function ur(){if(ye)return Ht.exports;ye=1;var e=rr(),t=ir(),n=typeof window>"u"?cr:window,r=n.document,o=n.Text;function i(){var f=[];function l(){var d=[].slice.call(arguments),p=null;function v(h){var b;function _(g){var S=e(g,/([\.#]?[^\s#.]+)/);/^\.|#/.test(S[1])&&(p=r.createElement("div")),c(S,function(k){var B=k.substring(1,k.length);k&&(p?k[0]==="."?t(p).add(B):k[0]==="#"&&p.setAttribute("id",B):p=r.createElement(k))})}if(h!=null){if(typeof h=="string")p?p.appendChild(b=r.createTextNode(h)):_(h);else if(typeof h=="number"||typeof h=="boolean"||h instanceof Date||h instanceof RegExp)p.appendChild(b=r.createTextNode(h.toString()));else if(u(h))c(h,v);else if(a(h))p.appendChild(b=h);else if(h instanceof o)p.appendChild(b=h);else if(typeof h=="object")for(var m in h)if(typeof h[m]=="function")/^on\w+/.test(m)?(function(g,S){p.addEventListener?(p.addEventListener(g.substring(2),S[g],!1),f.push(function(){p.removeEventListener(g.substring(2),S[g],!1)})):(p.attachEvent(g,S[g]),f.push(function(){p.detachEvent(g,S[g])}))})(m,h):(p[m]=h[m](),f.push(h[m](function(g){p[m]=g})));else if(m==="style")if(typeof h[m]=="string")p.style.cssText=h[m];else for(var N in h[m])(function(g,S){if(typeof S=="function")p.style.setProperty(g,S()),f.push(S(function(B){p.style.setProperty(g,B)}));else var k=h[m][g].match(/(.*)\W+!important\W*$/);k?p.style.setProperty(g,k[1],"important"):p.style.setProperty(g,h[m][g])})(N,h[m][N]);else if(m==="attrs")for(var T in h[m])p.setAttribute(T,h[m][T]);else m.substr(0,5)==="data-"?p.setAttribute(m,h[m]):p[m]=h[m];else if(typeof h=="function"){var T=h();p.appendChild(b=a(T)?T:r.createTextNode(T)),f.push(h(function(S){a(S)&&b.parentElement?(b.parentElement.replaceChild(S,b),b=S):b.textContent=S}))}}return b}for(;d.length;)v(d.shift());return p}return l.cleanup=function(){for(var d=0;d<f.length;d++)f[d]();f.length=0},l}var s=Ht.exports=i();s.context=i;function a(f){return f&&f.nodeName&&f.nodeType}function c(f,l){if(f.forEach)return f.forEach(l);for(var d=0;d<f.length;d++)l(f[d],d)}function u(f){return Object.prototype.toString.call(f)=="[object Array]"}return Ht.exports}var lr=ur();const Y=er(lr);function A(e){if(!e.shadowRoot)throw new Error("There is no shadow root on the element !");return e.shadowRoot}function G(e){const t=Array.isArray(e)?e:[e],n=document.createElement("template");return n.innerHTML=t.map(r=>r.outerHTML).join(""),n}var zt=function(e,t){return zt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},zt(e,t)};function J(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");zt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function fr(e,t,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function a(f){try{u(r.next(f))}catch(l){s(l)}}function c(f){try{u(r.throw(f))}catch(l){s(l)}}function u(f){f.done?i(f.value):o(f.value).then(a,c)}u((r=r.apply(e,t||[])).next())})}function Xe(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=a(0),s.throw=a(1),s.return=a(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(f){return c([u,f])}}function c(u){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,u[0]&&(n=0)),n;)try{if(r=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(f){u=[6,f],o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function rt(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function D(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),o,i=[],s;try{for(;(t===void 0||t-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(a){s={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return i}function V(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function nt(e){return this instanceof nt?(this.v=e,this):new nt(e)}function pr(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(p){return function(v){return Promise.resolve(v).then(p,l)}}function a(p,v){r[p]&&(o[p]=function(h){return new Promise(function(b,_){i.push([p,h,b,_])>1||c(p,h)})},v&&(o[p]=v(o[p])))}function c(p,v){try{u(r[p](v))}catch(h){d(i[0][3],h)}}function u(p){p.value instanceof nt?Promise.resolve(p.value.v).then(f,l):d(i[0][2],p)}function f(p){c("next",p)}function l(p){c("throw",p)}function d(p,v){p(v),i.shift(),i.length&&c(i[0][0],i[0][1])}}function dr(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof rt=="function"?rt(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(a,c){s=e[i](s),o(a,c,s.done,s.value)})}}function o(i,s,a,c){Promise.resolve(c).then(function(u){i({value:u,done:a})},s)}}function y(e){return typeof e=="function"}function re(e){var t=function(r){Error.call(r),r.stack=new Error().stack},n=e(t);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var qt=re(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function xt(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var lt=(function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,n,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var a=rt(s),c=a.next();!c.done;c=a.next()){var u=c.value;u.remove(this)}}catch(h){t={error:h}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}else s.remove(this);var f=this.initialTeardown;if(y(f))try{f()}catch(h){i=h instanceof qt?h.errors:[h]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var d=rt(l),p=d.next();!p.done;p=d.next()){var v=p.value;try{ge(v)}catch(h){i=i??[],h instanceof qt?i=V(V([],D(i)),D(h.errors)):i.push(h)}}}catch(h){r={error:h}}finally{try{p&&!p.done&&(o=d.return)&&o.call(d)}finally{if(r)throw r.error}}}if(i)throw new qt(i)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)ge(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}},e.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},e.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},e.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&xt(n,t)},e.prototype.remove=function(t){var n=this._finalizers;n&&xt(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=(function(){var t=new e;return t.closed=!0,t})(),e})(),tn=lt.EMPTY;function en(e){return e instanceof lt||e&&"closed"in e&&y(e.remove)&&y(e.add)&&y(e.unsubscribe)}function ge(e){y(e)?e():e.unsubscribe()}var hr={Promise:void 0},mr={setTimeout:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,V([e,t],D(n)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function nn(e){mr.setTimeout(function(){throw e})}function we(){}function bt(e){e()}var oe=(function(e){J(t,e);function t(n){var r=e.call(this)||this;return r.isStopped=!1,n?(r.destination=n,en(n)&&n.add(r)):r.destination=_r,r}return t.create=function(n,r,o){return new Wt(n,r,o)},t.prototype.next=function(n){this.isStopped||this._next(n)},t.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t})(lt),br=(function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){pt(r)}},e.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){pt(r)}else pt(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){pt(n)}},e})(),Wt=(function(e){J(t,e);function t(n,r,o){var i=e.call(this)||this,s;return y(n)||!n?s={next:n??void 0,error:r??void 0,complete:o??void 0}:s=n,i.destination=new br(s),i}return t})(oe);function pt(e){nn(e)}function vr(e){throw e}var _r={closed:!0,next:we,error:vr,complete:we},ie=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function ft(e){return e}function yr(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return rn(e)}function rn(e){return e.length===0?ft:e.length===1?e[0]:function(n){return e.reduce(function(r,o){return o(r)},n)}}var O=(function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(t,n,r){var o=this,i=wr(t)?t:new Wt(t,n,r);return bt(function(){var s=o,a=s.operator,c=s.source;i.add(a?a.call(i,c):c?o._subscribe(i):o._trySubscribe(i))}),i},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},e.prototype.forEach=function(t,n){var r=this;return n=$e(n),new n(function(o,i){var s=new Wt({next:function(a){try{t(a)}catch(c){i(c),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},e.prototype._subscribe=function(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)},e.prototype[ie]=function(){return this},e.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return rn(t)(this)},e.prototype.toPromise=function(t){var n=this;return t=$e(t),new t(function(r,o){var i;n.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},e.create=function(t){return new e(t)},e})();function $e(e){var t;return(t=e??hr.Promise)!==null&&t!==void 0?t:Promise}function gr(e){return e&&y(e.next)&&y(e.error)&&y(e.complete)}function wr(e){return e&&e instanceof oe||gr(e)&&en(e)}function $r(e){return y(e?.lift)}function M(e){return function(t){if($r(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function j(e,t,n,r,o){return new xr(e,t,n,r,o)}var xr=(function(e){J(t,e);function t(n,r,o,i,s,a){var c=e.call(this,n)||this;return c.onFinalize=s,c.shouldUnsubscribe=a,c._next=r?function(u){try{r(u)}catch(f){n.error(f)}}:e.prototype._next,c._error=i?function(u){try{i(u)}catch(f){n.error(f)}finally{this.unsubscribe()}}:e.prototype._error,c._complete=o?function(){try{o()}catch(u){n.error(u)}finally{this.unsubscribe()}}:e.prototype._complete,c}return t.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},t})(oe),Sr=re(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),on=(function(e){J(t,e);function t(){var n=e.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return t.prototype.lift=function(n){var r=new xe(this,this);return r.operator=n,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new Sr},t.prototype.next=function(n){var r=this;bt(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=rt(r.currentObservers),a=s.next();!a.done;a=s.next()){var c=a.value;c.next(n)}}catch(u){o={error:u}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},t.prototype.error=function(n){var r=this;bt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var o=r.observers;o.length;)o.shift().error(n)}})},t.prototype.complete=function(){var n=this;bt(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(n){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,n)},t.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},t.prototype._innerSubscribe=function(n){var r=this,o=this,i=o.hasError,s=o.isStopped,a=o.observers;return i||s?tn:(this.currentObservers=null,a.push(n),new lt(function(){r.currentObservers=null,xt(a,n)}))},t.prototype._checkFinalizedStatuses=function(n){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?n.error(i):s&&n.complete()},t.prototype.asObservable=function(){var n=new O;return n.source=this,n},t.create=function(n,r){return new xe(n,r)},t})(O),xe=(function(e){J(t,e);function t(n,r){var o=e.call(this)||this;return o.destination=n,o.source=r,o}return t.prototype.next=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,n)},t.prototype.error=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,n)},t.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},t.prototype._subscribe=function(n){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&o!==void 0?o:tn},t})(on),Er={now:function(){return Date.now()}},Tr=(function(e){J(t,e);function t(n,r){return e.call(this)||this}return t.prototype.schedule=function(n,r){return this},t})(lt),Se={setInterval:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setInterval.apply(void 0,V([e,t],D(n)))},clearInterval:function(e){return clearInterval(e)},delegate:void 0},kr=(function(e){J(t,e);function t(n,r){var o=e.call(this,n,r)||this;return o.scheduler=n,o.work=r,o.pending=!1,o}return t.prototype.schedule=function(n,r){var o;if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=(o=this.id)!==null&&o!==void 0?o:this.requestAsyncId(s,this.id,r),this},t.prototype.requestAsyncId=function(n,r,o){return o===void 0&&(o=0),Se.setInterval(n.flush.bind(n,this),o)},t.prototype.recycleAsyncId=function(n,r,o){if(o===void 0&&(o=0),o!=null&&this.delay===o&&this.pending===!1)return r;r!=null&&Se.clearInterval(r)},t.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var o=this._execute(n,r);if(o)return o;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(n,r){var o=!1,i;try{this.work(n)}catch(s){o=!0,i=s||new Error("Scheduled action threw falsy error")}if(o)return this.unsubscribe(),i},t.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,o=n.scheduler,i=o.actions;this.work=this.state=this.scheduler=null,this.pending=!1,xt(i,this),r!=null&&(this.id=this.recycleAsyncId(o,r,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},t})(Tr),Ee=(function(){function e(t,n){n===void 0&&(n=e.now),this.schedulerActionCtor=t,this.now=n}return e.prototype.schedule=function(t,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,t).schedule(r,n)},e.now=Er.now,e})(),Ir=(function(e){J(t,e);function t(n,r){r===void 0&&(r=Ee.now);var o=e.call(this,n,r)||this;return o.actions=[],o._active=!1,o}return t.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var o;this._active=!0;do if(o=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,o){for(;n=r.shift();)n.unsubscribe();throw o}},t})(Ee),Cr=new Ir(kr),sn=new O(function(e){return e.complete()});function Ar(e){return e&&y(e.schedule)}function se(e){return e[e.length-1]}function an(e){return y(se(e))?e.pop():void 0}function It(e){return Ar(se(e))?e.pop():void 0}function Or(e,t){return typeof se(e)=="number"?e.pop():t}var ae=(function(e){return e&&typeof e.length=="number"&&typeof e!="function"});function cn(e){return y(e?.then)}function un(e){return y(e[ie])}function ln(e){return Symbol.asyncIterator&&y(e?.[Symbol.asyncIterator])}function fn(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Pr(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var pn=Pr();function dn(e){return y(e?.[pn])}function hn(e){return pr(this,arguments,function(){var n,r,o,i;return Xe(this,function(s){switch(s.label){case 0:n=e.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,nt(n.read())];case 3:return r=s.sent(),o=r.value,i=r.done,i?[4,nt(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,nt(o)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function mn(e){return y(e?.getReader)}function X(e){if(e instanceof O)return e;if(e!=null){if(un(e))return Lr(e);if(ae(e))return Mr(e);if(cn(e))return Hr(e);if(ln(e))return bn(e);if(dn(e))return Nr(e);if(mn(e))return jr(e)}throw fn(e)}function Lr(e){return new O(function(t){var n=e[ie]();if(y(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Mr(e){return new O(function(t){for(var n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function Hr(e){return new O(function(t){e.then(function(n){t.closed||(t.next(n),t.complete())},function(n){return t.error(n)}).then(null,nn)})}function Nr(e){return new O(function(t){var n,r;try{for(var o=rt(e),i=o.next();!i.done;i=o.next()){var s=i.value;if(t.next(s),t.closed)return}}catch(a){n={error:a}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}t.complete()})}function bn(e){return new O(function(t){Rr(e,t).catch(function(n){return t.error(n)})})}function jr(e){return bn(hn(e))}function Rr(e,t){var n,r,o,i;return fr(this,void 0,void 0,function(){var s,a;return Xe(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),n=dr(e),c.label=1;case 1:return[4,n.next()];case 2:if(r=c.sent(),!!r.done)return[3,4];if(s=r.value,t.next(s),t.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=c.sent(),o={error:a},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(i=n.return)?[4,i.call(n)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function W(e,t,n,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function vn(e,t){return t===void 0&&(t=0),M(function(n,r){n.subscribe(j(r,function(o){return W(r,e,function(){return r.next(o)},t)},function(){return W(r,e,function(){return r.complete()},t)},function(o){return W(r,e,function(){return r.error(o)},t)}))})}function _n(e,t){return t===void 0&&(t=0),M(function(n,r){r.add(e.schedule(function(){return n.subscribe(r)},t))})}function qr(e,t){return X(e).pipe(_n(t),vn(t))}function Fr(e,t){return X(e).pipe(_n(t),vn(t))}function Ur(e,t){return new O(function(n){var r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function Dr(e,t){return new O(function(n){var r;return W(n,t,function(){r=e[pn](),W(n,t,function(){var o,i,s;try{o=r.next(),i=o.value,s=o.done}catch(a){n.error(a);return}s?n.complete():n.next(i)},0,!0)}),function(){return y(r?.return)&&r.return()}})}function yn(e,t){if(!e)throw new Error("Iterable cannot be null");return new O(function(n){W(n,t,function(){var r=e[Symbol.asyncIterator]();W(n,t,function(){r.next().then(function(o){o.done?n.complete():n.next(o.value)})},0,!0)})})}function Br(e,t){return yn(hn(e),t)}function zr(e,t){if(e!=null){if(un(e))return qr(e,t);if(ae(e))return Ur(e,t);if(cn(e))return Fr(e,t);if(ln(e))return yn(e,t);if(dn(e))return Dr(e,t);if(mn(e))return Br(e,t)}throw fn(e)}function Ct(e,t){return t?zr(e,t):X(e)}var gn=re(function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}});function E(e,t){return M(function(n,r){var o=0;n.subscribe(j(r,function(i){r.next(e.call(t,i,o++))}))})}var Wr=Array.isArray;function Vr(e,t){return Wr(t)?e.apply(void 0,V([],D(t))):e(t)}function ce(e){return E(function(t){return Vr(e,t)})}var Yr=Array.isArray,Gr=Object.getPrototypeOf,Jr=Object.prototype,Kr=Object.keys;function Qr(e){if(e.length===1){var t=e[0];if(Yr(t))return{args:t,keys:null};if(Zr(t)){var n=Kr(t);return{args:n.map(function(r){return t[r]}),keys:n}}}return{args:e,keys:null}}function Zr(e){return e&&typeof e=="object"&&Gr(e)===Jr}function Xr(e,t){return e.reduce(function(n,r,o){return n[r]=t[o],n},{})}function to(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=It(e),r=an(e),o=Qr(e),i=o.args,s=o.keys;if(i.length===0)return Ct([],n);var a=new O(wn(i,n,s?function(c){return Xr(s,c)}:ft));return r?a.pipe(ce(r)):a}function wn(e,t,n){return n===void 0&&(n=ft),function(r){Te(t,function(){for(var o=e.length,i=new Array(o),s=o,a=o,c=function(f){Te(t,function(){var l=Ct(e[f],t),d=!1;l.subscribe(j(r,function(p){i[f]=p,d||(d=!0,a--),a||r.next(n(i.slice()))},function(){--s||r.complete()}))},r)},u=0;u<o;u++)c(u)},r)}}function Te(e,t,n){e?W(n,e,t):t()}function eo(e,t,n,r,o,i,s,a){var c=[],u=0,f=0,l=!1,d=function(){l&&!c.length&&!u&&t.complete()},p=function(h){return u<r?v(h):c.push(h)},v=function(h){u++;var b=!1;X(n(h,f++)).subscribe(j(t,function(_){t.next(_)},function(){b=!0},void 0,function(){if(b)try{u--;for(var _=function(){var m=c.shift();s||v(m)};c.length&&u<r;)_();d()}catch(m){t.error(m)}}))};return e.subscribe(j(t,p,function(){l=!0,d()})),function(){}}function ue(e,t,n){return n===void 0&&(n=1/0),y(t)?ue(function(r,o){return E(function(i,s){return t(r,i,o,s)})(X(e(r,o)))},n):(typeof t=="number"&&(n=t),M(function(r,o){return eo(r,o,e,n)}))}function $n(e){return e===void 0&&(e=1/0),ue(ft,e)}function no(){return $n(1)}function ke(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return no()(Ct(e,It(e)))}var ro=["addListener","removeListener"],oo=["addEventListener","removeEventListener"],io=["on","off"];function P(e,t,n,r){if(y(n)&&(r=n,n=void 0),r)return P(e,t,n).pipe(ce(r));var o=D(co(e)?oo.map(function(a){return function(c){return e[a](t,c,n)}}):so(e)?ro.map(Ie(e,t)):ao(e)?io.map(Ie(e,t)):[],2),i=o[0],s=o[1];if(!i&&ae(e))return ue(function(a){return P(a,t,n)})(X(e));if(!i)throw new TypeError("Invalid event target");return new O(function(a){var c=function(){for(var u=[],f=0;f<arguments.length;f++)u[f]=arguments[f];return a.next(1<u.length?u:u[0])};return i(c),function(){return s(c)}})}function Ie(e,t){return function(n){return function(r){return e[n](t,r)}}}function so(e){return y(e.addListener)&&y(e.removeListener)}function ao(e){return y(e.on)&&y(e.off)}function co(e){return y(e.addEventListener)&&y(e.removeEventListener)}function uo(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=It(e),r=Or(e,1/0),o=e;return o.length?o.length===1?X(o[0]):$n(r)(Ct(o,n)):sn}var lo=Array.isArray;function fo(e){return e.length===1&&lo(e[0])?e[0]:e}function st(e,t){return M(function(n,r){var o=0;n.subscribe(j(r,function(i){return e.call(t,i,o++)&&r.next(i)}))})}function xn(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=an(e);return n?yr(xn.apply(void 0,V([],D(e))),ce(n)):M(function(r,o){wn(V([r],D(fo(e))))(o)})}function Ft(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return xn.apply(void 0,V([],D(e)))}function po(e,t){return t===void 0&&(t=Cr),M(function(n,r){var o=null,i=null,s=null,a=function(){if(o){o.unsubscribe(),o=null;var u=i;i=null,r.next(u)}};function c(){var u=s+e,f=t.now();if(f<u){o=this.schedule(void 0,u-f),r.add(o);return}a()}n.subscribe(j(r,function(u){i=u,s=t.now(),o||(o=t.schedule(c,e),r.add(o))},function(){a(),r.complete()},void 0,function(){i=o=null}))})}function ho(e){return M(function(t,n){var r=!1;t.subscribe(j(n,function(o){r=!0,n.next(o)},function(){r||n.next(e),n.complete()}))})}function mo(e){return e<=0?function(){return sn}:M(function(t,n){var r=0;t.subscribe(j(n,function(o){++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function Ce(e){return E(function(){return e})}function bo(e){return e===void 0&&(e=vo),M(function(t,n){var r=!1;t.subscribe(j(n,function(o){r=!0,n.next(o)},function(){return r?n.complete():n.error(e())}))})}function vo(){return new gn}function _o(e,t){var n=arguments.length>=2;return function(r){return r.pipe(ft,mo(1),n?ho(t):bo(function(){return new gn}))}}function yo(){return M(function(e,t){var n,r=!1;e.subscribe(j(t,function(o){var i=n;n=o,r&&t.next([i,o]),r=!0}))})}function dt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=It(e);return M(function(r,o){(n?ke(e,r,n):ke(e,r)).subscribe(o)})}function Sn(){return!document.hidden}function go(){const e=P(document,"visibilitychange"),t=P(window,"focus").pipe(Ce(!0)),n=P(window,"blur").pipe(Ce(!1)),r=uo(t,n);return to(e,r).pipe(E(([,o])=>Sn()&&o),st(o=>o),_o())}const wo=P(document,"mouseover");async function $o(){Sn()||await Promise.race([go().toPromise(),wo.toPromise()])}async function xo(){await new Promise(e=>setTimeout(e,400)),await $o(),await new Promise(e=>setTimeout(e,400))}const So=xo();function I(e,t){const n=e.querySelector(t);if(!n)throw new Error(`Failed to find element ${t} !`);return n}const Eo=Z.bind(Y),To="crumbs-p",ko=G(Eo`
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
`);let Io=class extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const t=A(this),n=ko.content.cloneNode(!0);t.appendChild(n)}};customElements.define(To,Io);const Co=Z.bind(Y),Ao="crumbs-panel",Oo=G(Co`
	<style>
		:host {
			display: block;
		}

		#panel-container {
			display: grid;
			grid-column-gap: 0px;
			grid-row-gap: 0px;
			grid-template-columns: 1rem 1fr 1rem;
			grid-template-rows: 1rem 1fr 1rem;
			animation: fadein .5s cubic-bezier(.12,1.03,.11,.99);
			height: 100%;
		}

		@keyframes fadein {
			from {
				opacity: 0;
				transform: scale(0.75) translateY(-11%);
			}
			to {
				opacity: 1;
				transform: scale(1) translateY(0);
			}
		}

		#panel {
			border-radius: 0.3rem;
			padding: 1.7rem;
			padding-top: 0;
			padding-bottom: 0;
			grid-area: 2 / 2 / 3 / 3;
			background-color: #ffffff00;
			box-shadow: 0px 0px 9px 5px rgba(28, 44, 83, 0.04);
			box-shadow: 2px 10px 50px 5px rgba(26, 25, 25, 0.47);
			transition: background-color .5s cubic-bezier(.12,1.03,.11,.99);
			color: black;
			overflow: hidden;
			position: relative;
		}

		#panel-title-container {
			grid-area: 2 / 2 / 3 / 3;
			z-index: 0;
		}

		#panel-content {
			transition: opacity 1s cubic-bezier(.12,1.03,.11,.99);
			z-index: 1;
			position: relative;
			grid-area: 2 / 2 / 3 / 3;
			padding-top: 2.5rem;
			padding-bottom: 2.5rem;
			padding-left: 2.5rem;
			padding-right: 2.5rem;
			overflow: auto;
		}

		#panel-footer-wrapper {
			grid-area: 2 / 2 / 3 / 3;
			z-index: 2;
			position: relative;
			padding: 0 1.7rem 1.7rem 1.7rem;
			display: flex;
			align-items: flex-end;
			pointer-events: none;

			& > * {
				pointer-events: auto;
			}
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
			transition-duration: 0.5s;
			transition-timing-function: cubic-bezier(.12,1.03,.11,.99);
			transition-delay: 0.4s;
			transition-property: opacity;
			z-index: 3;
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

	<div id="panel-container">
		<div id="panel-loading-container">
			<div id="panel-loading"></div>
		</div>

		<div id="panel">
		</div>

		<div id="panel-content" style="opacity: 0;">
			<slot></slot>
		</div>

		<div id="panel-footer-wrapper">
			<slot name="footer"></slot>
		</div>

		<div id="panel-title-container">
			<div id="panel-title">
				<crumbs-p style="line-height: 0;">
					<b id="panel-title-content"> </b>
				</crumbs-p>
			</div>
		</div>
	</div>
`);class Po extends HTMLElement{contentTimeoutElapsed=!1;contentLoaded=!1;connected=!1;loading="100";scrolled=!1;scrolledSubscription=null;static get observedAttributes(){return["panel-loading","panel-title"]}async connectedCallback(){this.attachShadow({mode:"open"}),await So;const t=A(this),n=Oo.content.cloneNode(!0);t.appendChild(n);const r=this.getAttribute("panel-loading");r!==null&&Ae(r)&&(this.loading=r),setTimeout(()=>{I(t,"#panel-container");const o=I(t,"#panel");o.style.backgroundColor="rgba(255, 255, 255, 0.37)";const i=I(t,"#panel-content");this.scrolledSubscription=P(i,"scroll").pipe(E(s=>s.target.scrollTop),E(s=>s!==0)).subscribe(s=>{this.scrolled=s,this.render()}),this.render()},10),setTimeout(()=>{this.contentTimeoutElapsed=!0,this.render()},200),this.connected=!0,this.render()}render(){const t=A(this),n=I(t,"#panel-content"),r=I(t,"#panel-loading");I(t,"#panel");const o=I(t,"#panel-title-content"),i=I(t,"#panel-footer-wrapper"),s=t.querySelector('slot[name="footer"]');s&&s.assignedElements().length>0?(i.style.display="flex",n.style.paddingBottom="5.8rem",n.style.mask="linear-gradient(0deg,rgba(255, 255, 255, 0) 4.5rem, rgba(0, 0, 0, 1) 7rem)"):(i.style.display="none",n.style.paddingBottom="2.5rem",n.style.mask="none"),this.contentTimeoutElapsed&&Lo(this.loading)?(n.style.opacity="1",n.style.overflow="auto"):(n.style.opacity="0",n.style.overflow="hidden"),r.style.width=`${this.loading}%`;const a=I(t,"#panel-title");this.loading==="100"&&this.getAttribute("panel-title")&&!this.scrolled?setTimeout(()=>{a.style.opacity="1",o.innerHTML=this.getAttribute("panel-title")||""},10):a.style.opacity="0"}attributeChangedCallback(){if(this.shadowRoot&&this.connected){const t=this.getAttribute("panel-loading");t!==null&&Ae(t)?this.loading=t:t===null&&(this.loading="100"),this.render()}}disconnectedCallback(){this.scrolledSubscription?.unsubscribe()}}function Ae(e){const t=Number(e),n=Math.floor(t);return n===t&&Number.isInteger(n)&&Number.isFinite(n)&&n<=100&&n>=0}function Lo(e){return e===null||e==="100"}customElements.define(Ao,Po);const Mo=Z.bind(Y),Ho="crumbs-input",No=G(Mo`
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
`);class jo extends HTMLElement{static get observedAttributes(){return["value"]}async connectedCallback(){this.attachShadow({mode:"open"});const t=A(this),n=No.content.cloneNode(!0);t.appendChild(n);const r=I(t,"input"),o=this.getAttribute("value");r instanceof HTMLInputElement&&o&&(r.value=o)}attributeChangedCallback(t,n,r){if(t==="value"&&this.shadowRoot){const o=A(this),i=I(o,"input");i instanceof HTMLInputElement&&(i.value=r)}}}customElements.define(Ho,jo);const Vt=Z.bind(Y),Ro="crumbs-tabs",qo=G(Vt`
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
`);class Fo extends HTMLElement{selected=1;subscriptions=[];async connectedCallback(){this.attachShadow({mode:"open"});const t=A(this),n=qo.content.cloneNode(!0);t.appendChild(n);const r=this.getAttribute("selected");this.selected=Number.parseInt(r||"1",10);const o=t.querySelector("#tabs"),i=t.querySelector("#content");if(!o)throw new Error("Tabs not found");if(!i)throw new Error("Content not found");for(const s of{[Symbol.iterator]:()=>this.getSlots()}){if(s.startsWith("content-")){const a=Vt`<div id=${`${s}`}> <slot name=${s}></slot> </div>`;a instanceof Element&&i.appendChild(a)}if(s.startsWith("title-")){const a=Vt`<div id=${s}> <crumbs-p> <slot name=${s}></slot> </crumbs-p> </div>`;a instanceof Element&&o.appendChild(a)}}this.subscriptions=[...o.children].map((s,a)=>P(s,"click").subscribe(()=>{const c=s.id.replace("title-","content-"),u=t.querySelector(`#${c}`);u instanceof HTMLElement&&i instanceof HTMLElement&&u.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.selected=a+1,this.render()})),this.render()}render(){const n=A(this).querySelector("#tabs");if(!n)throw new Error("Tabs not found");[...n.children].forEach((r,o)=>{o+1===this.selected?r instanceof HTMLElement&&r.classList.add("selected-title"):r instanceof HTMLElement&&r.classList.remove("selected-title")})}disconnectedCallback(){for(const t of this.subscriptions)t.unsubscribe()}*getSlots(){for(const t of Array.from(this.children)){const n=t.getAttribute("slot");n&&(yield n)}}}customElements.define(Ro,Fo);var En=function(e,t,n,r){var o;t[0]=0;for(var i=1;i<t.length;i++){var s=t[i++],a=t[i]?(t[0]|=s?1:2,n[t[i++]]):t[++i];s===3?r[0]=a:s===4?r[1]=Object.assign(r[1]||{},a):s===5?(r[1]=r[1]||{})[t[++i]]=a:s===6?r[1][t[++i]]+=a+"":s?(o=e.apply(a,En(e,a,n,["",null])),r.push(o),a[0]?t[0]|=2:(t[i-2]=0,t[i]=o)):r.push(a)}return r},Oe=new Map;function Uo(e){var t=Oe.get(this);return t||(t=new Map,Oe.set(this,t)),(t=En(this,t.get(e)||(t.set(e,t=(function(n){for(var r,o,i=1,s="",a="",c=[0],u=function(d){i===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,d,s):i===3&&(d||s)?(c.push(3,d,s),i=2):i===2&&s==="..."&&d?c.push(4,d,0):i===2&&s&&!d?c.push(5,0,!0,s):i>=5&&((s||!d&&i===5)&&(c.push(i,0,s,o),i=6),d&&(c.push(i,d,0,o),i=6)),s=""},f=0;f<n.length;f++){f&&(i===1&&u(),u(f));for(var l=0;l<n[f].length;l++)r=n[f][l],i===1?r==="<"?(u(),c=[c],i=3):s+=r:i===4?s==="--"&&r===">"?(i=1,s=""):s=r+s[0]:a?r===a?a="":s+=r:r==='"'||r==="'"?a=r:r===">"?(u(),i=1):i&&(r==="="?(i=5,o=s,s=""):r==="/"&&(i<5||n[f][l+1]===">")?(u(),i===3&&(c=c[0]),i=c,(c=c[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(u(),i=2):s+=r),i===3&&s==="!--"&&(i=4,c=c[0])}return u(),c})(e)),t),arguments,[])).length>1?t:t[0]}function Do(){return e=>e.pipe(E(([t,n,r])=>t||n||r>0&&r<100))}function Bo(){return e=>e.pipe(E(([t,n])=>n?100:t||0))}const zo=Uo.bind(Y),Wo="crumbs-button";class Vo extends HTMLElement{_renderSubscription=null;_clickSubscription=null;_attributeChanges$=new on;_parsedProgress$;_parsedDisabled$;_parsedIndeterminateProgress$;_loading$;_activeIndeterminateProgress$;_disabled$;_loadingBarTransitionEnabled$;constructor(){super(),this._parsedProgress$=this._attributeChanges$.pipe(st(([t])=>t==="progress"),E(([t,n])=>n),E(Number),st(t=>Number.isInteger(t)&&t<=100)),this._parsedIndeterminateProgress$=this._attributeChanges$.pipe(st(([t])=>t==="indeterminate-progress"),E(([t,n])=>n),E(t=>t!==null)),this._parsedDisabled$=this._attributeChanges$.pipe(st(([t])=>t==="disabled"),E(([t,n])=>n),E(t=>t!==null&&t!=="false")),this._loading$=this._parsedProgress$.pipe(Ft(this._parsedIndeterminateProgress$),Bo(),dt(0)),this._activeIndeterminateProgress$=this._parsedIndeterminateProgress$.pipe(dt(!1)),this._disabled$=this._parsedDisabled$.pipe(Ft(this._activeIndeterminateProgress$,this._loading$),Do(),dt(!1)),this._loadingBarTransitionEnabled$=this._loading$.pipe(yo(),E(([t,n])=>n>=t),dt(!1))}static get observedAttributes(){return["progress","disabled","indeterminate-progress"]}async connectedCallback(){this.attachShadow({mode:"open"}),A(this).appendChild(Yo.content.cloneNode(!0)),this._renderSubscription=this._disabled$.pipe(Ft(this._loading$,this._activeIndeterminateProgress$,this._loadingBarTransitionEnabled$)).subscribe(n=>{this.render(...n)}),this._attributeChanges$.next(["disabled",this.getAttribute("disabled")]),this._attributeChanges$.next(["progress",this.getAttribute("progress")]),this._attributeChanges$.next(["indeterminate-progress",this.getAttribute("indeterminate-progress")])}attributeChangedCallback(t){this._attributeChanges$.next([t,this.getAttribute(t)])}render(t,n,r,o){if(!this.shadowRoot)return;const i=A(this),s=I(i,"#progress"),a=I(i,"button"),c=I(i,"progress");a instanceof HTMLButtonElement&&(a.disabled=t),r?(a.classList.remove("indeterminate-loading-end"),a.classList.add("indeterminate-loading"),c instanceof HTMLProgressElement&&c.removeAttribute("value")):(a.classList.add("indeterminate-loading-end"),setTimeout(()=>{a.classList.remove("indeterminate-loading")},500)),o?s.classList.add("transition"):s.classList.remove("transition"),s.style.width=`${n}%`,!r&&c instanceof HTMLProgressElement&&(c.value=n)}disconnectedCallback(){this._clickSubscription?.unsubscribe(),this._renderSubscription?.unsubscribe()}}customElements.define(Wo,Vo);const Yo=G(zo`
	<style>
		:host {
			display: inline-block;
		}

		/* ❤️ https://codepen.io/yuhomyan/pen/OJMejWJ */

		.custom-btn {
			font-family: inherit;
			border: none;
			display: grid;
			place-content: center;
			border-radius: 5px;
			padding: 10px 25px;
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
`),vt=Z.bind(Y),Go="crumbs-nav",Jo=G(vt`
	<style>
		:host {
			display: block;
		}

		.selected-title {
			background: rgba(255, 255, 255, 0.45);
			border-radius: 0.3rem;
			animation: fadeInBackground 0.2s ease-in-out;
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
				padding-bottom: 0;
				padding-top: 0;
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

		.nav-title-wrapper {
			min-height: 3.5rem;
		}

		@keyframes fadeInBackground {
			from {
				background: rgba(255, 255, 255, 0.01);
			}
			to {
				background: rgba(255, 255, 255, 0.45);
			}
		}
	</style>

	<div id="container">
		<div id="content" className="content"></div>
		<div id="navbar"></div>
	</div>
`);class Ko extends HTMLElement{selected=1;subscriptions=[];navOpen=!1;async connectedCallback(){this.attachShadow({mode:"open"});const t=A(this),n=Jo.content.cloneNode(!0);t.appendChild(n);const r=this.getAttribute("selected");this.selected=Number.parseInt(r||"1",10);const o=t.querySelector("#content"),i=t.querySelector("#navbar");if(!(o instanceof HTMLElement))throw new Error("Content is not HTMLElement !");if(!(i instanceof HTMLElement))throw new Error("navbar is not HTMLElement !");for(const s of{[Symbol.iterator]:()=>this.getSlots()}){if(s.startsWith("content-")){const a=vt`<div id=${`${s}`}> <div> <slot name=${s}></slot> </div> </div>`;a instanceof HTMLElement&&o instanceof HTMLElement&&(o.appendChild(a),this.subscriptions.push(P(a,"click").subscribe(c=>{if(!this.navOpen)return;c.stopPropagation(),c.preventDefault();const u=c.target;u instanceof HTMLElement&&(setTimeout(()=>{u.scrollIntoView({behavior:"instant"})},50),this.navOpen=!1,this.render())})))}if(s.startsWith("title-")){const a=vt`<div id=${s} className="nav-title-wrapper"> <span> <slot name=${s}></slot> </span> </div>`;a instanceof Element&&(i.appendChild(a),this.subscriptions.push(P(a,"click").subscribe(c=>{if(this.navOpen)return;const u=s.replace("title-","content-"),f=t.querySelector(`#${u}`);f instanceof HTMLElement&&f.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})))}if(s.startsWith("navigation-toggle")){const a=vt`<div id=${s} className="nav-title-wrapper"> <span> <slot name=${s}></slot> </span> </div>`;a instanceof Element&&(i.appendChild(a),this.subscriptions.push(P(a,"click").subscribe(c=>{if(this.navOpen)return;t.querySelector(`#${s}`)instanceof HTMLElement&&(this.navOpen=!0,this.render())})))}}this.subscriptions.push(P(o,"scroll").pipe(E(()=>{const s=o.scrollLeft,a=o.clientWidth,c=Math.round(s/a)+1,u=Array.from(o.children).filter(f=>f.id&&f.id.startsWith("content-"));return c>=1&&c<=u.length?c:null})).subscribe(s=>{!this.navOpen&&s!==null&&(this.selected=s,this.render())})),this.subscriptions.push(P(window,"resize").pipe(po(200)).subscribe(()=>{this._handleResize()})),this.render()}async render(){const t=A(this),n=t.querySelector("#content"),r=t.querySelector("#navbar");if(!n)throw new Error("Content not found");if(!(r instanceof HTMLElement))throw new Error("navbar is not HTMLElement !");r.style.visibility=this.navOpen?"hidden":"visible",[...r.children].forEach(o=>{Number.parseInt(o.id.split("-")[1],10)===this.selected?o instanceof HTMLElement&&o.classList.add("selected-title"):o instanceof HTMLElement&&o.classList.remove("selected-title")}),n.style.willChange="auto";for(const o of{[Symbol.iterator]:()=>this.getSlots()})if(o.startsWith("content-")){const i=t.querySelector(o);i instanceof HTMLElement&&(i.style.willChange="auto")}await new Promise(o=>setTimeout(o,5)),this.navOpen?(n.classList.add("content-nav-mode"),await new Promise(o=>setTimeout(o,105))):n.classList.remove("content-nav-mode2"),this.navOpen?n.classList.add("content-nav-mode2"):n.classList.remove("content-nav-mode");for(const o of{[Symbol.iterator]:()=>this.getSlots()})if(o.startsWith("content-")){const i=t.querySelector(o);i instanceof HTMLElement&&(i.style.willChange="initial")}n.style.willChange="initial"}_handleResize(){const t=A(this),n=t.querySelector("#content");if(!n)return;const r=n.scrollWidth-n.clientWidth;r>0&&n.scrollLeft/r;const o=t.querySelector("#navbar");let i=0;o instanceof HTMLElement&&(i=Array.from(o.children).filter(f=>f.id&&f.id.startsWith("title-")).length);const s=(this.selected-1)*n.clientWidth,a=1,c=n.scrollLeft<s-a,u=n.scrollLeft>s+a;this.selected>=1&&this.selected<=i?c?n.scrollBy(1,0):u?n.scrollBy(-1,0):n.scrollBy(1,0):n.scrollBy(1,0)}disconnectedCallback(){for(const t of this.subscriptions)t.unsubscribe()}*getSlots(){for(const t of Array.from(this.children)){const n=t.getAttribute("slot");n&&(yield n)}}}customElements.define(Go,Ko);const Qo=Z.bind(Y),Zo="crumbs-frame",Xo=G(Qo`
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
`);class ti extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const t=A(this),n=Xo.content.cloneNode(!0);t.appendChild(n)}}customElements.define(Zo,ti);const ei=Z.bind(Y),ni="crumbs-new-content-indicator",ri=G(ei`
	<style>
		:host {
			position: absolute;
			width: 0;
			height: 0;
			top: 50%;
			right: -0.5rem;
		}

		.container {
			position: relative;
		}

		.indicator {
			position: absolute;
			top: -0.25rem;
			right: -0.25rem;
			width: 0.5rem;
			height: 0.5rem;
			background-color: #4c94ff;
			border-radius: 50%;
			animation: pulse 2s infinite;
			box-shadow: 0 0 0 0 rgba(100, 172, 255, 0.7);
		}

		@keyframes pulse {
			0% {
				transform: scale(1);
				opacity: 1;
				box-shadow: 0 0 0 0 rgba(100, 172, 255, 0.7);
			}
			50% {
				transform: scale(1.2);
				opacity: 0.8;
				box-shadow: 0 0 0 0.5rem rgba(255, 107, 107, 0);
			}
			100% {
				transform: scale(1);
				opacity: 1;
				box-shadow: 0 0 0 0 rgba(255, 107, 107, 0);
			}
		}
	</style>

	<div className="container">
		<div className="indicator"></div>
	</div>
`);class oi extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const t=A(this),n=ri.content.cloneNode(!0);t.appendChild(n)}}customElements.define(ni,oi);let ii={data:""},si=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||ii},ai=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ci=/\/\*[^]*?\*\/|  +/g,Pe=/\n+/g,Q=(e,t)=>{let n="",r="",o="";for(let i in e){let s=e[i];i[0]=="@"?i[1]=="i"?n=i+" "+s+";":r+=i[1]=="f"?Q(s,i):i+"{"+Q(s,i[1]=="k"?"":t)+"}":typeof s=="object"?r+=Q(s,t?t.replace(/([^,])+/g,a=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,a):a?a+" "+c:c)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=Q.p?Q.p(i,s):i+":"+s+";")}return n+(t&&o?t+"{"+o+"}":o)+r},q={},Tn=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Tn(e[n]);return t}return e},ui=(e,t,n,r,o)=>{let i=Tn(e),s=q[i]||(q[i]=(c=>{let u=0,f=11;for(;u<c.length;)f=101*f+c.charCodeAt(u++)>>>0;return"go"+f})(i));if(!q[s]){let c=i!==e?e:(u=>{let f,l,d=[{}];for(;f=ai.exec(u.replace(ci,""));)f[4]?d.shift():f[3]?(l=f[3].replace(Pe," ").trim(),d.unshift(d[0][l]=d[0][l]||{})):d[0][f[1]]=f[2].replace(Pe," ").trim();return d[0]})(e);q[s]=Q(o?{["@keyframes "+s]:c}:c,n?"":"."+s)}let a=n&&q.g?q.g:null;return n&&(q.g=q[s]),((c,u,f,l)=>{l?u.data=u.data.replace(l,c):u.data.indexOf(c)===-1&&(u.data=f?c+u.data:u.data+c)})(q[s],t,r,a),s},li=(e,t,n)=>e.reduce((r,o,i)=>{let s=t[i];if(s&&s.call){let a=s(n),c=a&&a.props&&a.props.className||/^go/.test(a)&&a;s=c?"."+c:a&&typeof a=="object"?a.props?"":Q(a,""):a===!1?"":a}return r+o+(s??"")},"");function L(e){let t=this||{},n=e.call?e(t.p):e;return ui(n.unshift?n.raw?li(n,[].slice.call(arguments,1),t.p):n.reduce((r,o)=>Object.assign(r,o&&o.call?o(t.p):o),{}):n,si(t.target),t.g,t.o,t.k)}L.bind({g:1});L.bind({k:1});var At,w,kn,z,Le,In,Cn,Ut,_t,at,An,le,Yt,Gt,St={},Et=[],fi=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ot=Array.isArray;function F(e,t){for(var n in t)e[n]=t[n];return e}function fe(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function On(e,t,n){var r,o,i,s={};for(i in t)i=="key"?r=t[i]:i=="ref"?o=t[i]:s[i]=t[i];if(arguments.length>2&&(s.children=arguments.length>3?At.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)s[i]===void 0&&(s[i]=e.defaultProps[i]);return yt(e,s,r,o,null)}function yt(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++kn,__i:-1,__u:0};return o==null&&w.vnode!=null&&w.vnode(i),i}function Pt(e){return e.children}function gt(e,t){this.props=e,this.context=t}function ot(e,t){if(t==null)return e.__?ot(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ot(e):null}function pi(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],o=[],i=F({},t);i.__v=t.__v+1,w.vnode&&w.vnode(i),pe(e.__P,i,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??ot(t),!!(32&t.__u),o),i.__v=t.__v,i.__.__k[i.__i]=i,Hn(r,i,o),t.__e=t.__=null,i.__e!=n&&Pn(i)}}function Pn(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),Pn(e)}function Me(e){(!e.__d&&(e.__d=!0)&&z.push(e)&&!Tt.__r++||Le!=w.debounceRendering)&&((Le=w.debounceRendering)||In)(Tt)}function Tt(){try{for(var e,t=1;z.length;)z.length>t&&z.sort(Cn),e=z.shift(),t=z.length,pi(e)}finally{z.length=Tt.__r=0}}function Ln(e,t,n,r,o,i,s,a,c,u,f){var l,d,p,v,h,b,_,m=r&&r.__k||Et,N=t.length;for(c=di(n,t,m,c,N),l=0;l<N;l++)(p=n.__k[l])!=null&&(d=p.__i!=-1&&m[p.__i]||St,p.__i=l,b=pe(e,p,d,o,i,s,a,c,u,f),v=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&de(d.ref,null,p),f.push(p.ref,p.__c||v,p)),h==null&&v!=null&&(h=v),(_=!!(4&p.__u))||d.__k===p.__k?(c=Mn(p,c,e,_),_&&d.__e&&(d.__e=null)):typeof p.type=="function"&&b!==void 0?c=b:v&&(c=v.nextSibling),p.__u&=-7);return n.__e=h,c}function di(e,t,n,r,o){var i,s,a,c,u,f=n.length,l=f,d=0;for(e.__k=new Array(o),i=0;i<o;i++)(s=t[i])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=e.__k[i]=yt(null,s,null,null,null):Ot(s)?s=e.__k[i]=yt(Pt,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=e.__k[i]=yt(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):e.__k[i]=s,c=i+d,s.__=e,s.__b=e.__b+1,a=null,(u=s.__i=hi(s,n,c,l))!=-1&&(l--,(a=n[u])&&(a.__u|=2)),a==null||a.__v==null?(u==-1&&(o>f?d--:o<f&&d++),typeof s.type!="function"&&(s.__u|=4)):u!=c&&(u==c-1?d--:u==c+1?d++:(u>c?d--:d++,s.__u|=4))):e.__k[i]=null;if(l)for(i=0;i<f;i++)(a=n[i])!=null&&(2&a.__u)==0&&(a.__e==r&&(r=ot(a)),jn(a,a));return r}function Mn(e,t,n,r){var o,i;if(typeof e.type=="function"){for(o=e.__k,i=0;o&&i<o.length;i++)o[i]&&(o[i].__=e,t=Mn(o[i],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=ot(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function hi(e,t,n,r){var o,i,s,a=e.key,c=e.type,u=t[n],f=u!=null&&(2&u.__u)==0;if(u===null&&a==null||f&&a==u.key&&c==u.type)return n;if(r>(f?1:0)){for(o=n-1,i=n+1;o>=0||i<t.length;)if((u=t[s=o>=0?o--:i++])!=null&&(2&u.__u)==0&&a==u.key&&c==u.type)return s}return-1}function He(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||fi.test(t)?n:n+"px"}function ht(e,t,n,r,o){var i,s;t:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||He(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||He(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")i=t!=(t=t.replace(An,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r?n[at]=r[at]:(n[at]=le,e.addEventListener(t,i?Gt:Yt,i)):e.removeEventListener(t,i?Gt:Yt,i);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Ne(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[_t]==null)t[_t]=le++;else if(t[_t]<n[at])return;return n(w.event?w.event(t):t)}}}function pe(e,t,n,r,o,i,s,a,c,u){var f,l,d,p,v,h,b,_,m,N,T,g,S,k,B,R=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),i=[a=t.__e=n.__e]),(f=w.__b)&&f(t);t:if(typeof R=="function")try{if(_=t.props,m=R.prototype&&R.prototype.render,N=(f=R.contextType)&&r[f.__c],T=f?N?N.props.value:f.__:r,n.__c?b=(l=t.__c=n.__c).__=l.__E:(m?t.__c=l=new R(_,T):(t.__c=l=new gt(_,T),l.constructor=R,l.render=bi),N&&N.sub(l),l.state||(l.state={}),l.__n=r,d=l.__d=!0,l.__h=[],l._sb=[]),m&&l.__s==null&&(l.__s=l.state),m&&R.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=F({},l.__s)),F(l.__s,R.getDerivedStateFromProps(_,l.__s))),p=l.props,v=l.state,l.__v=t,d)m&&R.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),m&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(m&&R.getDerivedStateFromProps==null&&_!==p&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(_,T),t.__v==n.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(_,l.__s,T)===!1){t.__v!=n.__v&&(l.props=_,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(tt){tt&&(tt.__=t)}),Et.push.apply(l.__h,l._sb),l._sb=[],l.__h.length&&s.push(l);break t}l.componentWillUpdate!=null&&l.componentWillUpdate(_,l.__s,T),m&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(p,v,h)})}if(l.context=T,l.props=_,l.__P=e,l.__e=!1,g=w.__r,S=0,m)l.state=l.__s,l.__d=!1,g&&g(t),f=l.render(l.props,l.state,l.context),Et.push.apply(l.__h,l._sb),l._sb=[];else do l.__d=!1,g&&g(t),f=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++S<25);l.state=l.__s,l.getChildContext!=null&&(r=F(F({},r),l.getChildContext())),m&&!d&&l.getSnapshotBeforeUpdate!=null&&(h=l.getSnapshotBeforeUpdate(p,v)),k=f!=null&&f.type===Pt&&f.key==null?Nn(f.props.children):f,a=Ln(e,Ot(k)?k:[k],t,n,r,o,i,s,a,c,u),l.base=t.__e,t.__u&=-161,l.__h.length&&s.push(l),b&&(l.__E=l.__=null)}catch(tt){if(t.__v=null,c||i!=null)if(tt.then){for(t.__u|=c?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;i[i.indexOf(a)]=null,t.__e=a}else{for(B=i.length;B--;)fe(i[B]);Jt(t)}else t.__e=n.__e,t.__k=n.__k,tt.then||Jt(t);w.__e(tt,t,n)}else i==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):a=t.__e=mi(n.__e,t,n,r,o,i,s,c,u);return(f=w.diffed)&&f(t),128&t.__u?void 0:a}function Jt(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(Jt))}function Hn(e,t,n){for(var r=0;r<n.length;r++)de(n[r],n[++r],n[++r]);w.__c&&w.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){w.__e(i,o.__v)}})}function Nn(e){return typeof e!="object"||e==null||e.__b>0?e:Ot(e)?e.map(Nn):F({},e)}function mi(e,t,n,r,o,i,s,a,c){var u,f,l,d,p,v,h,b=n.props||St,_=t.props,m=t.type;if(m=="svg"?o="http://www.w3.org/2000/svg":m=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(u=0;u<i.length;u++)if((p=i[u])&&"setAttribute"in p==!!m&&(m?p.localName==m:p.nodeType==3)){e=p,i[u]=null;break}}if(e==null){if(m==null)return document.createTextNode(_);e=document.createElementNS(o,m,_.is&&_),a&&(w.__m&&w.__m(t,i),a=!1),i=null}if(m==null)b===_||a&&e.data==_||(e.data=_);else{if(i=i&&At.call(e.childNodes),!a&&i!=null)for(b={},u=0;u<e.attributes.length;u++)b[(p=e.attributes[u]).name]=p.value;for(u in b)p=b[u],u=="dangerouslySetInnerHTML"?l=p:u=="children"||u in _||u=="value"&&"defaultValue"in _||u=="checked"&&"defaultChecked"in _||ht(e,u,null,p,o);for(u in _)p=_[u],u=="children"?d=p:u=="dangerouslySetInnerHTML"?f=p:u=="value"?v=p:u=="checked"?h=p:a&&typeof p!="function"||b[u]===p||ht(e,u,p,b[u],o);if(f)a||l&&(f.__html==l.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(l&&(e.innerHTML=""),Ln(t.type=="template"?e.content:e,Ot(d)?d:[d],t,n,r,m=="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,s,i?i[0]:n.__k&&ot(n,0),a,c),i!=null)for(u=i.length;u--;)fe(i[u]);a||(u="value",m=="progress"&&v==null?e.removeAttribute("value"):v!=null&&(v!==e[u]||m=="progress"&&!v||m=="option"&&v!=b[u])&&ht(e,u,v,b[u],o),u="checked",h!=null&&h!=e[u]&&ht(e,u,h,b[u],o))}return e}function de(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(o){w.__e(o,n)}}function jn(e,t,n){var r,o;if(w.unmount&&w.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||de(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){w.__e(i,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&jn(r[o],t,n||typeof e.type!="function");n||fe(e.__e),e.__c=e.__=e.__e=void 0}function bi(e,t,n){return this.constructor(e,n)}function vi(e,t,n){var r,o,i,s;t==document&&(t=document.documentElement),w.__&&w.__(e,t),o=(r=!1)?null:t.__k,i=[],s=[],pe(t,e=t.__k=On(Pt,null,[e]),o||St,St,t.namespaceURI,o?null:t.firstChild?At.call(t.childNodes):null,i,o?o.__e:t.firstChild,r,s),Hn(i,e,s)}At=Et.slice,w={__e:function(e,t,n,r){for(var o,i,s;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),s=o.__d),s)return o.__E=o}catch(a){e=a}throw e}},kn=0,gt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=F({},this.state),typeof e=="function"&&(e=e(F({},n),this.props)),e&&F(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Me(this))},gt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Me(this))},gt.prototype.render=Pt,z=[],In=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Cn=function(e,t){return e.__v.__b-t.__v.__b},Tt.__r=0,Ut=Math.random().toString(8),_t="__d"+Ut,at="__a"+Ut,An=/(PointerCapture)$|Capture$/i,le=0,Yt=Ne(!1),Gt=Ne(!0);var Rn=function(e,t,n,r){var o;t[0]=0;for(var i=1;i<t.length;i++){var s=t[i++],a=t[i]?(t[0]|=s?1:2,n[t[i++]]):t[++i];s===3?r[0]=a:s===4?r[1]=Object.assign(r[1]||{},a):s===5?(r[1]=r[1]||{})[t[++i]]=a:s===6?r[1][t[++i]]+=a+"":s?(o=e.apply(a,Rn(e,a,n,["",null])),r.push(o),a[0]?t[0]|=2:(t[i-2]=0,t[i]=o)):r.push(a)}return r},je=new Map;function _i(e){var t=je.get(this);return t||(t=new Map,je.set(this,t)),(t=Rn(this,t.get(e)||(t.set(e,t=(function(n){for(var r,o,i=1,s="",a="",c=[0],u=function(d){i===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,d,s):i===3&&(d||s)?(c.push(3,d,s),i=2):i===2&&s==="..."&&d?c.push(4,d,0):i===2&&s&&!d?c.push(5,0,!0,s):i>=5&&((s||!d&&i===5)&&(c.push(i,0,s,o),i=6),d&&(c.push(i,d,0,o),i=6)),s=""},f=0;f<n.length;f++){f&&(i===1&&u(),u(f));for(var l=0;l<n[f].length;l++)r=n[f][l],i===1?r==="<"?(u(),c=[c],i=3):s+=r:i===4?s==="--"&&r===">"?(i=1,s=""):s=r+s[0]:a?r===a?a="":s+=r:r==='"'||r==="'"?a=r:r===">"?(u(),i=1):i&&(r==="="?(i=5,o=s,s=""):r==="/"&&(i<5||n[f][l+1]===">")?(u(),i===3&&(c=c[0]),i=c,(c=c[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(u(),i=2):s+=r),i===3&&s==="!--"&&(i=4,c=c[0])}return u(),c})(e)),t),arguments,[])).length>1?t:t[0]}var H=_i.bind(On),ct,$,Dt,Re,ut=0,qn=[],x=w,qe=x.__b,Fe=x.__r,Ue=x.diffed,De=x.__c,Be=x.unmount,ze=x.__;function he(e,t){x.__h&&x.__h($,e,ut||t),ut=0;var n=$.__H||($.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function C(e){return ut=1,yi(Dn,e)}function yi(e,t,n){var r=he(ct++,2);if(r.t=e,!r.__c&&(r.__=[Dn(void 0,t),function(a){var c=r.__N?r.__N[0]:r.__[0],u=r.t(c,a);c!==u&&(r.__N=[u,r.__[1]],r.__c.setState({}))}],r.__c=$,!$.__f)){var o=function(a,c,u){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(d){return d.__c});if(f.every(function(d){return!d.__N}))return!i||i.call(this,a,c,u);var l=r.__c.props!==a;return f.some(function(d){if(d.__N){var p=d.__[0];d.__=d.__N,d.__N=void 0,p!==d.__[0]&&(l=!0)}}),i&&i.call(this,a,c,u)||l};$.__f=!0;var i=$.shouldComponentUpdate,s=$.componentWillUpdate;$.componentWillUpdate=function(a,c,u){if(this.__e){var f=i;i=void 0,o(a,c,u),i=f}s&&s.call(this,a,c,u)},$.shouldComponentUpdate=o}return r.__N||r.__}function gi(e,t){var n=he(ct++,3);!x.__s&&Un(n.__H,t)&&(n.__=e,n.u=t,$.__H.__h.push(n))}function wi(e){return ut=5,Fn(function(){return{current:e}},[])}function Fn(e,t){var n=he(ct++,7);return Un(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function $i(e,t){return ut=8,Fn(function(){return e},t)}function xi(){for(var e;e=qn.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(wt),t.__h.some(Kt),t.__h=[]}catch(n){t.__h=[],x.__e(n,e.__v)}}}x.__b=function(e){$=null,qe&&qe(e)},x.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),ze&&ze(e,t)},x.__r=function(e){Fe&&Fe(e),ct=0;var t=($=e.__c).__H;t&&(Dt===$?(t.__h=[],$.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(wt),t.__h.some(Kt),t.__h=[],ct=0)),Dt=$},x.diffed=function(e){Ue&&Ue(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(qn.push(t)!==1&&Re===x.requestAnimationFrame||((Re=x.requestAnimationFrame)||Si)(xi)),t.__H.__.some(function(n){n.u&&(n.__H=n.u),n.u=void 0})),Dt=$=null},x.__c=function(e,t){t.some(function(n){try{n.__h.some(wt),n.__h=n.__h.filter(function(r){return!r.__||Kt(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],x.__e(r,n.__v)}}),De&&De(e,t)},x.unmount=function(e){Be&&Be(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(r){try{wt(r)}catch(o){t=o}}),n.__H=void 0,t&&x.__e(t,n.__v))};var We=typeof requestAnimationFrame=="function";function Si(e){var t,n=function(){clearTimeout(r),We&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);We&&(t=requestAnimationFrame(n))}function wt(e){var t=$,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),$=t}function Kt(e){var t=$;e.__c=e.__(),$=t}function Un(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Dn(e,t){return typeof t=="function"?t(e):t}function kt(e,t){var n=C(t),r=n[0],o=n[1],i=wi(e);return gi(function(){var s=i.current.subscribe(o);return function(){return s.unsubscribe()}}),r}var Qt=function(e,t){return Qt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},Qt(e,t)};function Lt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Qt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function Zt(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Xt(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),o,i=[],s;try{for(;(t===void 0||t-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(a){s={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return i}function te(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function U(e){return typeof e=="function"}function Bn(e){var t=function(r){Error.call(r),r.stack=new Error().stack},n=e(t);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Bt=Bn(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function ee(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var Mt=(function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,n,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var a=Zt(s),c=a.next();!c.done;c=a.next()){var u=c.value;u.remove(this)}}catch(h){t={error:h}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}else s.remove(this);var f=this.initialTeardown;if(U(f))try{f()}catch(h){i=h instanceof Bt?h.errors:[h]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var d=Zt(l),p=d.next();!p.done;p=d.next()){var v=p.value;try{Ve(v)}catch(h){i=i??[],h instanceof Bt?i=te(te([],Xt(i)),Xt(h.errors)):i.push(h)}}}catch(h){r={error:h}}finally{try{p&&!p.done&&(o=d.return)&&o.call(d)}finally{if(r)throw r.error}}}if(i)throw new Bt(i)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)Ve(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}},e.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},e.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},e.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&ee(n,t)},e.prototype.remove=function(t){var n=this._finalizers;n&&ee(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=(function(){var t=new e;return t.closed=!0,t})(),e})(),zn=Mt.EMPTY;function Wn(e){return e instanceof Mt||e&&"closed"in e&&U(e.remove)&&U(e.add)&&U(e.unsubscribe)}function Ve(e){U(e)?e():e.unsubscribe()}var Ei={Promise:void 0},Ti={setTimeout:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,te([e,t],Xt(n)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function ki(e){Ti.setTimeout(function(){throw e})}function Ye(){}function $t(e){e()}var Vn=(function(e){Lt(t,e);function t(n){var r=e.call(this)||this;return r.isStopped=!1,n?(r.destination=n,Wn(n)&&n.add(r)):r.destination=Ai,r}return t.create=function(n,r,o){return new ne(n,r,o)},t.prototype.next=function(n){this.isStopped||this._next(n)},t.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t})(Mt),Ii=(function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){mt(r)}},e.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){mt(r)}else mt(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){mt(n)}},e})(),ne=(function(e){Lt(t,e);function t(n,r,o){var i=e.call(this)||this,s;return U(n)||!n?s={next:n??void 0,error:r??void 0,complete:o??void 0}:s=n,i.destination=new Ii(s),i}return t})(Vn);function mt(e){ki(e)}function Ci(e){throw e}var Ai={closed:!0,next:Ye,error:Ci,complete:Ye},Oi=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function Pi(e){return e}function Li(e){return e.length===0?Pi:e.length===1?e[0]:function(n){return e.reduce(function(r,o){return o(r)},n)}}var Ge=(function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(t,n,r){var o=this,i=Hi(t)?t:new ne(t,n,r);return $t(function(){var s=o,a=s.operator,c=s.source;i.add(a?a.call(i,c):c?o._subscribe(i):o._trySubscribe(i))}),i},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},e.prototype.forEach=function(t,n){var r=this;return n=Je(n),new n(function(o,i){var s=new ne({next:function(a){try{t(a)}catch(c){i(c),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},e.prototype._subscribe=function(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)},e.prototype[Oi]=function(){return this},e.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Li(t)(this)},e.prototype.toPromise=function(t){var n=this;return t=Je(t),new t(function(r,o){var i;n.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},e.create=function(t){return new e(t)},e})();function Je(e){var t;return(t=e??Ei.Promise)!==null&&t!==void 0?t:Promise}function Mi(e){return e&&U(e.next)&&U(e.error)&&U(e.complete)}function Hi(e){return e&&e instanceof Vn||Mi(e)&&Wn(e)}var Ni=Bn(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),me=(function(e){Lt(t,e);function t(){var n=e.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return t.prototype.lift=function(n){var r=new Ke(this,this);return r.operator=n,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new Ni},t.prototype.next=function(n){var r=this;$t(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=Zt(r.currentObservers),a=s.next();!a.done;a=s.next()){var c=a.value;c.next(n)}}catch(u){o={error:u}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},t.prototype.error=function(n){var r=this;$t(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var o=r.observers;o.length;)o.shift().error(n)}})},t.prototype.complete=function(){var n=this;$t(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(n){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,n)},t.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},t.prototype._innerSubscribe=function(n){var r=this,o=this,i=o.hasError,s=o.isStopped,a=o.observers;return i||s?zn:(this.currentObservers=null,a.push(n),new Mt(function(){r.currentObservers=null,ee(a,n)}))},t.prototype._checkFinalizedStatuses=function(n){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?n.error(i):s&&n.complete()},t.prototype.asObservable=function(){var n=new Ge;return n.source=this,n},t.create=function(n,r){return new Ke(n,r)},t})(Ge),Ke=(function(e){Lt(t,e);function t(n,r){var o=e.call(this)||this;return o.destination=n,o.source=r,o}return t.prototype.next=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,n)},t.prototype.error=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,n)},t.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},t.prototype._subscribe=function(n){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&o!==void 0?o:zn},t})(me);let Yn=4;const Gn=new me,Jn=Gn.asObservable();function Kn(){return Yn}function et(e){Yn=e,Gn.next(e)}let Qn="initial";const Zn=new me,Xn=Zn.asObservable();function tr(){return Qn}function K(e){Qn=e,Zn.next(e)}const ji=L`
	height: 70cqh;
`,Qe=L`
	min-height: 95%;
	display: grid;
	align-content: space-evenly;
`,Ze=L`
	display: grid;
	justify-content: center;
`;function it({title:e,children:t,order:n}){return H`
		<span slot=${`title-${n}`}>${e}</span>
		<crumbs-panel panel-title=${e} slot=${`content-${n}`} className=${ji}>
			<crumbs-tabs style="height: 100%;">
				<span slot="title-1"> Demo </span>
				<div className=${Qe} slot="content-1">
					<crumbs-frame className=${Ze}>
						${t[0]}
					</crumbs-frame>
					<crumbs-frame className=${Ze}>
						<crumbs-p>
							<h3>Parameters</h3>
						</crumbs-p>
						${t[1]}
					</crumbs-frame>
				</div>
				<span slot="title-3"> Code </span>
				<div className=${Qe} slot="content-3">${t[2]}</div>
			</crumbs-tabs>
		</crumbs-panel>
	`}function Ri({order:e}){const[t,n]=C("I'm an input !"),r=`&lt;crumbs-input
	value="${t}"&gt;
&lt;/crumbs-input&gt;`;return H`
		<${it} title="Input" order=${e}>
			<crumbs-input
				value=${t}
				oninput=${o=>n(o.originalTarget.value)}
			/>

			<div>
				<crumbs-p>Input's value</crumbs-p>

				<crumbs-input
					value=${t}
					oninput=${o=>n(o.originalTarget.value)}
				/>
			</div>

			<code> <pre dangerouslySetInnerHTML=${{__html:r}}> </pre></code>
		<//>
	`}function qi({order:e}){const[t,n]=C("I'm a <b>paragraph</b> !");return H`
		<${it} title="Paragraph" order=${e}>
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
	`}function Fi({order:e}){const[t,n]=C("I'm a panel !"),[r,o]=C(""),[i,s]=C("100"),[a,c]=C(!1),u=`&lt;crumbs-panel
	panel-title="${r}"
	panel-loading="${i}"&gt;
	${t}
&lt;/crumbs-panel&gt;`,f=$i(async()=>{if(!a){c(!0),s("0");for(let d=0;d<=100;d+=.1+(100-d)/100)await new Promise(p=>setTimeout(p,10)),s(Math.floor(d).toString());s("100"),c(!1)}},[a]);return H`
		<${it} title="Panel" order=${e}>
			<crumbs-panel
				panel-loading=${i}
				panel-title=${r}>
				${t}
			</crumbs-panel>

			<div>
				<crumbs-p>Title</crumbs-p>

				<crumbs-input
					type="text"
					value=${r}
					onInput=${d=>o(d.originalTarget.value)}
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
					value=${i}
					onInput=${d=>s(String(d.target.value))}
					min="0"
					max="100"
				/>

				<br/>

				<crumbs-button onClick=${()=>{a||f()}}> Simulate loading </crumbs-button>
			</div>

			<code> <pre dangerouslySetInnerHTML=${{__html:u}}> </pre></code>
		<//>
	`}function Ui({order:e}){const[t,n]=C("Tab content"),[r,o]=C("Tab title"),[i,s]=C("Tab content 2"),[a,c]=C("Tab title 2"),u=`&lt;crumbs-tabs&gt;
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
		${i}
	&lt;/crumbs-p&gt;
&lt;/crumbs-panel&gt;`;return H`
		<${it} title="Tabs" order=${e}>
			<crumbs-tabs>
				<crumbs-p slot="title-1"> ${r} </crumbs-p>
				<crumbs-p slot="content-1"> ${t} </crumbs-p>
				<crumbs-p slot="title-2"> ${a} </crumbs-p>
				<crumbs-p slot="content-2"> ${i} </crumbs-p>
			</crumbs-tabs>

			<div>
				<crumbs-p>Title</crumbs-p>

				<crumbs-input
					type="text"
					value=${r}
					onInput=${f=>o(f.originalTarget.value)}
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
					value=${i}
					onInput=${f=>s(f.originalTarget.value)}
				/>
			</div>

			<code> <pre dangerouslySetInnerHTML=${{__html:u}}> </pre></code>
		<//>
	`}const Di=L`
	max-width: 36rem;
	max-height: 70cqh;
`;function Bi({order:e}){return H`
		<span slot=${`title-${e}`}> About</span>
		<crumbs-panel panel-title="About" slot=${`content-${e}`} className=${Di}>
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
	`}function zi({order:e}){const t=kt(Jn,Kn),n=kt(Xn,tr),r=L`
		max-height: 70cqh;
	`,o=L`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`,i=L`
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
		grid-gap: 0.5rem;

		& > div {
			display: grid;
			grid-template-columns: auto 1fr;
			place-content: center;
			text-align: center;
		}
	`;return H`
		<span slot=${`title-${e}`}>Personalization</span>
		<crumbs-panel panel-title="Personalization" slot=${`content-${e}`} className=${r}>
			<div className=${o}>
				<crumbs-p>
					Some samples to demonstrate personalization.
				</crumbs-p>

				<crumbs-tabs>	
					<crumbs-p slot="title-1"> Background </crumbs-p>

					<div slot="content-1" class=${i}>
						<div>
							<input type="radio" checked=${t===1} onInput=${()=>et(1)}/>
							<crumbs-p> Dog </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${t===2} onInput=${()=>et(2)}/>
							<crumbs-p> Abstract </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${t===3} onInput=${()=>et(3)}/>
							<crumbs-p> Leaf </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${t===4} onInput=${()=>et(4)}/>
							<crumbs-p> Cat </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${t===5} onInput=${()=>et(5)}/>
							<crumbs-p> Pug </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${t===6} onInput=${()=>et(6)}/>
							<crumbs-p> Crystal </crumbs-p>
						</div>
					</div>

					<crumbs-p slot="title-2"> Font </crumbs-p>

					<div slot="content-2" class=${i}>
						<div>
							<input type="radio" checked=${n==="initial"} onInput=${()=>K("initial")}/>
							<crumbs-p> Default </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${n==="monospace"} onInput=${()=>K("monospace")}/>
							<crumbs-p> Monospace </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${n==="serif"} onInput=${()=>K("serif")}/>
							<crumbs-p> Serif </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${n==="sans-serif"} onInput=${()=>K("sans-serif")}/>
							<crumbs-p> Sans-serif </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${n==="cursive"} onInput=${()=>K("cursive")}/>
							<crumbs-p> Cursive </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${n==="fantasy"} onInput=${()=>K("fantasy")}/>
							<crumbs-p> Fantasy </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${n==="system-ui"} onInput=${()=>K("system-ui")}/>
							<crumbs-p> System </crumbs-p>
						</div>
					</div>
				</crumbs-tabs>
			</div>
		</crumbs-panel>
	`}function Wi({order:e}){const t="&lt;crumbs-p&gt; Hello world ! &lt;/crumbs-p&gt;",n=L`
		max-height: 70cqh;
	`;return H`
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
	`}function Vi({order:e}){const[t,n]=C("Click me !"),[r,o]=C("100"),[i,s]=C(!1),a=`
		&lt;crumbs-button
			${i?"	disabled":""}
				progress="${r}"&gt;
				${t}
		&lt;/crumbs-button&gt;
	`;return H`
		<${it} title="Button" order=${e}>
			<crumbs-button
				progress=${r}
				disabled=${i}>
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
					onInput=${c=>o(String(c.target.value))}
					min="0"
					max="100"/>

				<br/>

				<input type="checkbox" onInput=${()=>s(!i)} />
				<label> Disabled </label>

			</div>

			<code> <pre dangerouslySetInnerHTML=${{__html:a}}> </pre></code>
		<//>
	`}function Yi({order:e}){return H`
		<${it} title="Nav" order=${e}>
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
	`}function Gi(){const e=kt(Jn,Kn),t=kt(Xn,tr),n=L`
		background-image: url('bg${e}.jpg');
		background-size: cover;
		min-height: 100vh;
		position: fixed;
		min-width: 100vw;
		background-position: center;
		z-index: -999;
	`,r=L`
		display: grid;
		overflow-y: scroll;
		height: 100vh;
		grid-template-columns: repeat(auto-fit, minmax(max(28rem + 6vw), 1fr));
		font-family: ${t};
	`;return H`
		<div class=${n}></div>

		<crumbs-nav class=${r}>
			<${Bi} order=${1}><//>
			<${Wi} order=${2}><//>
			<${zi} order=${3}><//>
			<${qi} order=${4}><//>
			<${Fi} order=${5}><//>
			<${Ri} order=${6}><//>
			<${Ui} order=${7}><//>
			<${Vi} order=${8}><//>
			<${Yi} order=${9}><//>
			<span slot="navigation-toggle"> :: </span>
		</crumbs-nav>
	`}vi(H`<${Gi}><//>`,document.body);
