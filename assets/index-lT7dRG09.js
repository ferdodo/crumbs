(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function rt(e){for(var t,n,r=arguments,i=1,o="",s="",a=[0],u=function(l){i===1&&(l||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(l?r[l]:o):i===3&&(l||o)?(a[1]=l?r[l]:o,i=2):i===2&&o==="..."&&l?a[2]=Object.assign(a[2]||{},r[l]):i===2&&o&&!l?(a[2]=a[2]||{})[o]=!0:i>=5&&(i===5?((a[2]=a[2]||{})[n]=l?o?o+r[l]:r[l]:o,i=6):(l||o)&&(a[2][n]+=l?o+r[l]:o)),o=""},c=0;c<e.length;c++){c&&(i===1&&u(),u(c));for(var p=0;p<e[c].length;p++)t=e[c][p],i===1?t==="<"?(u(),a=[a,"",null],i=3):o+=t:i===4?o==="--"&&t===">"?(i=1,o=""):o=t+o[0]:s?t===s?s="":o+=t:t==='"'||t==="'"?s=t:t===">"?(u(),i=1):i&&(t==="="?(i=5,n=o,o=""):t==="/"&&(i<5||e[c][p+1]===">")?(u(),i===3&&(a=a[0]),i=a,(a=a[0]).push(this.apply(null,i.slice(1))),i=0):t===" "||t==="	"||t===`
`||t==="\r"?(u(),i=2):o+=t),i===3&&o==="!--"&&(i=4,a=a[0])}return u(),a.length>2?a.slice(1):a[1]}function gr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function wr(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e;var t=e.default;if(typeof t=="function"){var n=function r(){var i=!1;try{i=this instanceof r}catch{}return i?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Mt={exports:{}};var Ht,he;function xr(){return he||(he=1,Ht=(function(t){var n=String.prototype.split,r=/()??/.exec("")[1]===t,i;return i=function(o,l,a){if(Object.prototype.toString.call(l)!=="[object RegExp]")return n.call(o,l,a);var u=[],c=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.extended?"x":"")+(l.sticky?"y":""),p=0,l=new RegExp(l.source,c+"g"),b,f,v,d;for(o+="",r||(b=new RegExp("^"+l.source+"$(?!\\s)",c)),a=a===t?-1>>>0:a>>>0;(f=l.exec(o))&&(v=f.index+f[0].length,!(v>p&&(u.push(o.slice(p,f.index)),!r&&f.length>1&&f[0].replace(b,function(){for(var h=1;h<arguments.length-2;h++)arguments[h]===t&&(f[h]=t)}),f.length>1&&f.index<o.length&&Array.prototype.push.apply(u,f.slice(1)),d=f[0].length,p=v,u.length>=a)));)l.lastIndex===f.index&&l.lastIndex++;return p===o.length?(d||!l.test(""))&&u.push(""):u.push(o.slice(p)),u.length>a?u.slice(0,a):u},i})()),Ht}var Nt,ve;function Sr(){if(ve)return Nt;ve=1;var e=[].indexOf;return Nt=function(t,n){if(e)return t.indexOf(n);for(var r=0;r<t.length;++r)if(t[r]===n)return r;return-1},Nt}var Rt,_e;function Tr(){if(_e)return Rt;_e=1;var e=Sr();Rt=t;function t(i){var o=i.classList;if(o)return o;var s={add:a,remove:u,contains:c,toggle:p,toString:l,length:0,item:b};return s;function a(d){var h=f();e(h,d)>-1||(h.push(d),v(h))}function u(d){var h=f(),_=e(h,d);_!==-1&&(h.splice(_,1),v(h))}function c(d){return e(f(),d)>-1}function p(d){return c(d)?(u(d),!1):(a(d),!0)}function l(){return i.className}function b(d){var h=f();return h[d]||null}function f(){var d=i.className;return n(d.split(" "),r)}function v(d){var h=d.length;i.className=d.join(" "),s.length=h;for(var _=0;_<d.length;_++)s[_]=d[_];delete d[h]}}function n(i,o){for(var s=[],a=0;a<i.length;a++)o(i[a])&&s.push(i[a]);return s}function r(i){return!!i}return Rt}const $r={},Er=Object.freeze(Object.defineProperty({__proto__:null,default:$r},Symbol.toStringTag,{value:"Module"})),Or=wr(Er);var ye;function kr(){if(ye)return Mt.exports;ye=1;var e=xr(),t=Tr(),n=typeof window>"u"?Or:window,r=n.document,i=n.Text;function o(){var p=[];function l(){var b=[].slice.call(arguments),f=null;function v(d){var h;function _(w){var x=e(w,/([\.#]?[^\s#.]+)/);/^\.|#/.test(x[1])&&(f=r.createElement("div")),u(x,function(P){var q=P.substring(1,P.length);P&&(f?P[0]==="."?t(f).add(q):P[0]==="#"&&f.setAttribute("id",q):f=r.createElement(P))})}if(d!=null){if(typeof d=="string")f?f.appendChild(h=r.createTextNode(d)):_(d);else if(typeof d=="number"||typeof d=="boolean"||d instanceof Date||d instanceof RegExp)f.appendChild(h=r.createTextNode(d.toString()));else if(c(d))u(d,v);else if(a(d))f.appendChild(h=d);else if(d instanceof i)f.appendChild(h=d);else if(typeof d=="object")for(var m in d)if(typeof d[m]=="function")/^on\w+/.test(m)?(function(w,x){f.addEventListener?(f.addEventListener(w.substring(2),x[w],!1),p.push(function(){f.removeEventListener(w.substring(2),x[w],!1)})):(f.attachEvent(w,x[w]),p.push(function(){f.detachEvent(w,x[w])}))})(m,d):(f[m]=d[m](),p.push(d[m](function(w){f[m]=w})));else if(m==="style")if(typeof d[m]=="string")f.style.cssText=d[m];else for(var E in d[m])(function(w,x){if(typeof x=="function")f.style.setProperty(w,x()),p.push(x(function(q){f.style.setProperty(w,q)}));else var P=d[m][w].match(/(.*)\W+!important\W*$/);P?f.style.setProperty(w,P[1],"important"):f.style.setProperty(w,d[m][w])})(E,d[m][E]);else if(m==="attrs")for(var $ in d[m])f.setAttribute($,d[m][$]);else m.substr(0,5)==="data-"?f.setAttribute(m,d[m]):f[m]=d[m];else if(typeof d=="function"){var $=d();f.appendChild(h=a($)?$:r.createTextNode($)),p.push(d(function(x){a(x)&&h.parentElement?(h.parentElement.replaceChild(x,h),h=x):h.textContent=x}))}}return h}for(;b.length;)v(b.shift());return f}return l.cleanup=function(){for(var b=0;b<p.length;b++)p[b]();p.length=0},l}var s=Mt.exports=o();s.context=o;function a(p){return p&&p.nodeName&&p.nodeType}function u(p,l){if(p.forEach)return p.forEach(l);for(var b=0;b<p.length;b++)l(p[b],b)}function c(p){return Object.prototype.toString.call(p)=="[object Array]"}return Mt.exports}var Ir=kr();const J=gr(Ir);function L(e){if(!e.shadowRoot)throw new Error("There is no shadow root on the element !");return e.shadowRoot}function K(e){const t=Array.isArray(e)?e:[e],n=document.createElement("template");return n.innerHTML=t.map(r=>r.outerHTML).join(""),n}var zt=function(e,t){return zt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},zt(e,t)};function lt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");zt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function Pr(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(p){try{c(r.next(p))}catch(l){s(l)}}function u(p){try{c(r.throw(p))}catch(l){s(l)}}function c(p){p.done?o(p.value):i(p.value).then(a,u)}c((r=r.apply(e,t||[])).next())})}function vn(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=a(0),s.throw=a(1),s.return=a(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(p){return u([c,p])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(n=0)),n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(p){c=[6,p],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function et(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function B(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],s;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function Y(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function tt(e){return this instanceof tt?(this.v=e,this):new tt(e)}function Cr(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(f){return function(v){return Promise.resolve(v).then(f,l)}}function a(f,v){r[f]&&(i[f]=function(d){return new Promise(function(h,_){o.push([f,d,h,_])>1||u(f,d)})},v&&(i[f]=v(i[f])))}function u(f,v){try{c(r[f](v))}catch(d){b(o[0][3],d)}}function c(f){f.value instanceof tt?Promise.resolve(f.value.v).then(p,l):b(o[0][2],f)}function p(f){u("next",f)}function l(f){u("throw",f)}function b(f,v){f(v),o.shift(),o.length&&u(o[0][0],o[0][1])}}function jr(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof et=="function"?et(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=e[o]&&function(s){return new Promise(function(a,u){s=e[o](s),i(a,u,s.done,s.value)})}}function i(o,s,a,u){Promise.resolve(u).then(function(c){o({value:c,done:a})},s)}}function y(e){return typeof e=="function"}function re(e){var t=function(r){Error.call(r),r.stack=new Error().stack},n=e(t);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var qt=re(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function Bt(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var $t=(function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,n,r,i,o;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var a=et(s),u=a.next();!u.done;u=a.next()){var c=u.value;c.remove(this)}}catch(d){t={error:d}}finally{try{u&&!u.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}else s.remove(this);var p=this.initialTeardown;if(y(p))try{p()}catch(d){o=d instanceof qt?d.errors:[d]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var b=et(l),f=b.next();!f.done;f=b.next()){var v=f.value;try{ge(v)}catch(d){o=o??[],d instanceof qt?o=Y(Y([],B(o)),B(d.errors)):o.push(d)}}}catch(d){r={error:d}}finally{try{f&&!f.done&&(i=b.return)&&i.call(b)}finally{if(r)throw r.error}}}if(o)throw new qt(o)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)ge(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}},e.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},e.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},e.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&Bt(n,t)},e.prototype.remove=function(t){var n=this._finalizers;n&&Bt(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=(function(){var t=new e;return t.closed=!0,t})(),e})(),_n=$t.EMPTY;function yn(e){return e instanceof $t||e&&"closed"in e&&y(e.remove)&&y(e.add)&&y(e.unsubscribe)}function ge(e){y(e)?e():e.unsubscribe()}var Lr={Promise:void 0},Ar={setTimeout:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,Y([e,t],B(n)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function gn(e){Ar.setTimeout(function(){throw e})}function we(){}function vt(e){e()}var oe=(function(e){lt(t,e);function t(n){var r=e.call(this)||this;return r.isStopped=!1,n?(r.destination=n,yn(n)&&n.add(r)):r.destination=Nr,r}return t.create=function(n,r,i){return new Wt(n,r,i)},t.prototype.next=function(n){this.isStopped||this._next(n)},t.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t})($t),Mr=(function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){ft(r)}},e.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){ft(r)}else ft(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){ft(n)}},e})(),Wt=(function(e){lt(t,e);function t(n,r,i){var o=e.call(this)||this,s;return y(n)||!n?s={next:n??void 0,error:r??void 0,complete:i??void 0}:s=n,o.destination=new Mr(s),o}return t})(oe);function ft(e){gn(e)}function Hr(e){throw e}var Nr={closed:!0,next:we,error:Hr,complete:we},ie=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function pt(e){return e}function Rr(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return wn(e)}function wn(e){return e.length===0?pt:e.length===1?e[0]:function(n){return e.reduce(function(r,i){return i(r)},n)}}var I=(function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(t,n,r){var i=this,o=Fr(t)?t:new Wt(t,n,r);return vt(function(){var s=i,a=s.operator,u=s.source;o.add(a?a.call(o,u):u?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},e.prototype.forEach=function(t,n){var r=this;return n=xe(n),new n(function(i,o){var s=new Wt({next:function(a){try{t(a)}catch(u){o(u),s.unsubscribe()}},error:o,complete:i});r.subscribe(s)})},e.prototype._subscribe=function(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)},e.prototype[ie]=function(){return this},e.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return wn(t)(this)},e.prototype.toPromise=function(t){var n=this;return t=xe(t),new t(function(r,i){var o;n.subscribe(function(s){return o=s},function(s){return i(s)},function(){return r(o)})})},e.create=function(t){return new e(t)},e})();function xe(e){var t;return(t=e??Lr.Promise)!==null&&t!==void 0?t:Promise}function qr(e){return e&&y(e.next)&&y(e.error)&&y(e.complete)}function Fr(e){return e&&e instanceof oe||qr(e)&&yn(e)}function Dr(e){return y(e?.lift)}function H(e){return function(t){if(Dr(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function R(e,t,n,r,i){return new Ur(e,t,n,r,i)}var Ur=(function(e){lt(t,e);function t(n,r,i,o,s,a){var u=e.call(this,n)||this;return u.onFinalize=s,u.shouldUnsubscribe=a,u._next=r?function(c){try{r(c)}catch(p){n.error(p)}}:e.prototype._next,u._error=o?function(c){try{o(c)}catch(p){n.error(p)}finally{this.unsubscribe()}}:e.prototype._error,u._complete=i?function(){try{i()}catch(c){n.error(c)}finally{this.unsubscribe()}}:e.prototype._complete,u}return t.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},t})(oe),zr=re(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),xn=(function(e){lt(t,e);function t(){var n=e.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return t.prototype.lift=function(n){var r=new Se(this,this);return r.operator=n,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new zr},t.prototype.next=function(n){var r=this;vt(function(){var i,o;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=et(r.currentObservers),a=s.next();!a.done;a=s.next()){var u=a.value;u.next(n)}}catch(c){i={error:c}}finally{try{a&&!a.done&&(o=s.return)&&o.call(s)}finally{if(i)throw i.error}}}})},t.prototype.error=function(n){var r=this;vt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},t.prototype.complete=function(){var n=this;vt(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(n){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,n)},t.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},t.prototype._innerSubscribe=function(n){var r=this,i=this,o=i.hasError,s=i.isStopped,a=i.observers;return o||s?_n:(this.currentObservers=null,a.push(n),new $t(function(){r.currentObservers=null,Bt(a,n)}))},t.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,o=r.thrownError,s=r.isStopped;i?n.error(o):s&&n.complete()},t.prototype.asObservable=function(){var n=new I;return n.source=this,n},t.create=function(n,r){return new Se(n,r)},t})(I),Se=(function(e){lt(t,e);function t(n,r){var i=e.call(this)||this;return i.destination=n,i.source=r,i}return t.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},t.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},t.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},t.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:_n},t})(xn),Sn=new I(function(e){return e.complete()});function Br(e){return e&&y(e.schedule)}function se(e){return e[e.length-1]}function Tn(e){return y(se(e))?e.pop():void 0}function Et(e){return Br(se(e))?e.pop():void 0}function Wr(e,t){return typeof se(e)=="number"?e.pop():t}var ae=(function(e){return e&&typeof e.length=="number"&&typeof e!="function"});function $n(e){return y(e?.then)}function En(e){return y(e[ie])}function On(e){return Symbol.asyncIterator&&y(e?.[Symbol.asyncIterator])}function kn(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Vr(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var In=Vr();function Pn(e){return y(e?.[In])}function Cn(e){return Cr(this,arguments,function(){var n,r,i,o;return vn(this,function(s){switch(s.label){case 0:n=e.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,tt(n.read())];case 3:return r=s.sent(),i=r.value,o=r.done,o?[4,tt(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,tt(i)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function jn(e){return y(e?.getReader)}function Q(e){if(e instanceof I)return e;if(e!=null){if(En(e))return Gr(e);if(ae(e))return Yr(e);if($n(e))return Jr(e);if(On(e))return Ln(e);if(Pn(e))return Kr(e);if(jn(e))return Qr(e)}throw kn(e)}function Gr(e){return new I(function(t){var n=e[ie]();if(y(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Yr(e){return new I(function(t){for(var n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function Jr(e){return new I(function(t){e.then(function(n){t.closed||(t.next(n),t.complete())},function(n){return t.error(n)}).then(null,gn)})}function Kr(e){return new I(function(t){var n,r;try{for(var i=et(e),o=i.next();!o.done;o=i.next()){var s=o.value;if(t.next(s),t.closed)return}}catch(a){n={error:a}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}t.complete()})}function Ln(e){return new I(function(t){Zr(e,t).catch(function(n){return t.error(n)})})}function Qr(e){return Ln(Cn(e))}function Zr(e,t){var n,r,i,o;return Pr(this,void 0,void 0,function(){var s,a;return vn(this,function(u){switch(u.label){case 0:u.trys.push([0,5,6,11]),n=jr(e),u.label=1;case 1:return[4,n.next()];case 2:if(r=u.sent(),!!r.done)return[3,4];if(s=r.value,t.next(s),t.closed)return[2];u.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=u.sent(),i={error:a},[3,11];case 6:return u.trys.push([6,,9,10]),r&&!r.done&&(o=n.return)?[4,o.call(n)]:[3,8];case 7:u.sent(),u.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function z(e,t,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var o=t.schedule(function(){n(),i?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(o),!i)return o}function An(e,t){return t===void 0&&(t=0),H(function(n,r){n.subscribe(R(r,function(i){return z(r,e,function(){return r.next(i)},t)},function(){return z(r,e,function(){return r.complete()},t)},function(i){return z(r,e,function(){return r.error(i)},t)}))})}function Mn(e,t){return t===void 0&&(t=0),H(function(n,r){r.add(e.schedule(function(){return n.subscribe(r)},t))})}function Xr(e,t){return Q(e).pipe(Mn(t),An(t))}function to(e,t){return Q(e).pipe(Mn(t),An(t))}function eo(e,t){return new I(function(n){var r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function no(e,t){return new I(function(n){var r;return z(n,t,function(){r=e[In](),z(n,t,function(){var i,o,s;try{i=r.next(),o=i.value,s=i.done}catch(a){n.error(a);return}s?n.complete():n.next(o)},0,!0)}),function(){return y(r?.return)&&r.return()}})}function Hn(e,t){if(!e)throw new Error("Iterable cannot be null");return new I(function(n){z(n,t,function(){var r=e[Symbol.asyncIterator]();z(n,t,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function ro(e,t){return Hn(Cn(e),t)}function oo(e,t){if(e!=null){if(En(e))return Xr(e,t);if(ae(e))return eo(e,t);if($n(e))return to(e,t);if(On(e))return Hn(e,t);if(Pn(e))return no(e,t);if(jn(e))return ro(e,t)}throw kn(e)}function Ot(e,t){return t?oo(e,t):Q(e)}var Nn=re(function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}});function O(e,t){return H(function(n,r){var i=0;n.subscribe(R(r,function(o){r.next(e.call(t,o,i++))}))})}var io=Array.isArray;function so(e,t){return io(t)?e.apply(void 0,Y([],B(t))):e(t)}function ce(e){return O(function(t){return so(e,t)})}var ao=Array.isArray,co=Object.getPrototypeOf,uo=Object.prototype,lo=Object.keys;function po(e){if(e.length===1){var t=e[0];if(ao(t))return{args:t,keys:null};if(fo(t)){var n=lo(t);return{args:n.map(function(r){return t[r]}),keys:n}}}return{args:e,keys:null}}function fo(e){return e&&typeof e=="object"&&co(e)===uo}function bo(e,t){return e.reduce(function(n,r,i){return n[r]=t[i],n},{})}function mo(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Et(e),r=Tn(e),i=po(e),o=i.args,s=i.keys;if(o.length===0)return Ot([],n);var a=new I(Rn(o,n,s?function(u){return bo(s,u)}:pt));return r?a.pipe(ce(r)):a}function Rn(e,t,n){return n===void 0&&(n=pt),function(r){Te(t,function(){for(var i=e.length,o=new Array(i),s=i,a=i,u=function(p){Te(t,function(){var l=Ot(e[p],t),b=!1;l.subscribe(R(r,function(f){o[p]=f,b||(b=!0,a--),a||r.next(n(o.slice()))},function(){--s||r.complete()}))},r)},c=0;c<i;c++)u(c)},r)}}function Te(e,t,n){e?z(n,e,t):t()}function ho(e,t,n,r,i,o,s,a){var u=[],c=0,p=0,l=!1,b=function(){l&&!u.length&&!c&&t.complete()},f=function(d){return c<r?v(d):u.push(d)},v=function(d){c++;var h=!1;Q(n(d,p++)).subscribe(R(t,function(_){t.next(_)},function(){h=!0},void 0,function(){if(h)try{c--;for(var _=function(){var m=u.shift();s||v(m)};u.length&&c<r;)_();b()}catch(m){t.error(m)}}))};return e.subscribe(R(t,f,function(){l=!0,b()})),function(){}}function ue(e,t,n){return n===void 0&&(n=1/0),y(t)?ue(function(r,i){return O(function(o,s){return t(r,o,i,s)})(Q(e(r,i)))},n):(typeof t=="number"&&(n=t),H(function(r,i){return ho(r,i,e,n)}))}function qn(e){return e===void 0&&(e=1/0),ue(pt,e)}function vo(){return qn(1)}function $e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return vo()(Ot(e,Et(e)))}var _o=["addListener","removeListener"],yo=["addEventListener","removeEventListener"],go=["on","off"];function M(e,t,n,r){if(y(n)&&(r=n,n=void 0),r)return M(e,t,n).pipe(ce(r));var i=B(So(e)?yo.map(function(a){return function(u){return e[a](t,u,n)}}):wo(e)?_o.map(Ee(e,t)):xo(e)?go.map(Ee(e,t)):[],2),o=i[0],s=i[1];if(!o&&ae(e))return ue(function(a){return M(a,t,n)})(Q(e));if(!o)throw new TypeError("Invalid event target");return new I(function(a){var u=function(){for(var c=[],p=0;p<arguments.length;p++)c[p]=arguments[p];return a.next(1<c.length?c:c[0])};return o(u),function(){return s(u)}})}function Ee(e,t){return function(n){return function(r){return e[n](t,r)}}}function wo(e){return y(e.addListener)&&y(e.removeListener)}function xo(e){return y(e.on)&&y(e.off)}function So(e){return y(e.addEventListener)&&y(e.removeEventListener)}function To(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Et(e),r=Wr(e,1/0),i=e;return i.length?i.length===1?Q(i[0]):qn(r)(Ot(i,n)):Sn}var $o=Array.isArray;function Eo(e){return e.length===1&&$o(e[0])?e[0]:e}function st(e,t){return H(function(n,r){var i=0;n.subscribe(R(r,function(o){return e.call(t,o,i++)&&r.next(o)}))})}function Fn(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Tn(e);return n?Rr(Fn.apply(void 0,Y([],B(e))),ce(n)):H(function(r,i){Rn(Y([r],B(Eo(e))))(i)})}function Ft(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Fn.apply(void 0,Y([],B(e)))}function Oo(e){return H(function(t,n){var r=!1;t.subscribe(R(n,function(i){r=!0,n.next(i)},function(){r||n.next(e),n.complete()}))})}function ko(e){return e<=0?function(){return Sn}:H(function(t,n){var r=0;t.subscribe(R(n,function(i){++r<=e&&(n.next(i),e<=r&&n.complete())}))})}function Oe(e){return O(function(){return e})}function Io(e){return e===void 0&&(e=Po),H(function(t,n){var r=!1;t.subscribe(R(n,function(i){r=!0,n.next(i)},function(){return r?n.complete():n.error(e())}))})}function Po(){return new Nn}function Co(e,t){var n=arguments.length>=2;return function(r){return r.pipe(pt,ko(1),n?Oo(t):Io(function(){return new Nn}))}}function jo(){return H(function(e,t){var n,r=!1;e.subscribe(R(t,function(i){var o=n;n=i,r&&t.next([o,i]),r=!0}))})}function dt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Et(e);return H(function(r,i){(n?$e(e,r,n):$e(e,r)).subscribe(i)})}function Dn(){return!document.hidden}function Lo(){const e=M(document,"visibilitychange"),t=M(window,"focus").pipe(Oe(!0)),n=M(window,"blur").pipe(Oe(!1)),r=To(t,n);return mo(e,r).pipe(O(([,i])=>Dn()&&i),st(i=>i),Co())}const Ao=M(document,"mouseover");async function Mo(){Dn()||await Promise.race([Lo().toPromise(),Ao.toPromise()])}async function Ho(){await new Promise(e=>setTimeout(e,400)),await Mo(),await new Promise(e=>setTimeout(e,400))}const No=Ho();function C(e,t){const n=e.querySelector(t);if(!n)throw new Error(`Failed to find element ${t} !`);return n}const Ro=rt.bind(J),qo="crumbs-p",Fo=K(Ro`
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
`);let Do=class extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const t=L(this),n=Fo.content.cloneNode(!0);t.appendChild(n)}};customElements.define(qo,Do);const Uo=rt.bind(J),zo="crumbs-panel",Bo=K(Uo`
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
`);class Wo extends HTMLElement{contentTimeoutElapsed=!1;contentLoaded=!1;connected=!1;loading="100";scrolled=!1;scrolledSubscription=null;static get observedAttributes(){return["panel-loading","panel-title"]}async connectedCallback(){this.attachShadow({mode:"open"}),await No;const t=L(this),n=Bo.content.cloneNode(!0);t.appendChild(n);const r=this.getAttribute("panel-loading");r!==null&&ke(r)&&(this.loading=r),setTimeout(()=>{const i=C(t,"#panel-container");i.style.gridTemplateColumns="1rem 1fr 1rem",i.style.gridTemplateRows="1rem 1fr 1rem";const o=C(t,"#panel");o.style.backgroundColor="rgba(255, 255, 255, 0.37)",this.scrolledSubscription=M(o,"scroll").pipe(O(s=>s.target.scrollTop),O(s=>s!==0)).subscribe(s=>{this.scrolled=s,this.render()}),this.render()},10),setTimeout(()=>{this.contentTimeoutElapsed=!0,this.render()},400),this.connected=!0,this.render()}render(){const t=L(this),n=C(t,"#panel-content"),r=C(t,"#panel-loading"),i=C(t,"#panel"),o=C(t,"#panel-title-content");this.contentTimeoutElapsed&&Vo(this.loading)?(n.style.visibility="visible",n.style.opacity="1",i.style.overflow="auto"):(n.style.visibility="collapse",n.style.opacity="0",i.style.overflow="hidden"),r.style.width=`${this.loading}%`;const s=C(t,"#panel-title");this.loading==="100"&&this.getAttribute("panel-title")&&!this.scrolled?setTimeout(()=>{s.style.opacity="1",o.innerHTML=this.getAttribute("panel-title")||"",n.style.paddingTop="2.5rem"},10):(n.style.paddingTop="inherit",s.style.opacity="0")}attributeChangedCallback(){if(this.shadowRoot&&this.connected){const t=this.getAttribute("panel-loading");t!==null&&ke(t)?this.loading=t:t===null&&(this.loading="100"),this.render()}}disconnectedCallback(){this.scrolledSubscription?.unsubscribe()}}function ke(e){const t=Number(e),n=Math.floor(t);return n===t&&Number.isInteger(n)&&Number.isFinite(n)&&n<=100&&n>=0}function Vo(e){return e===null||e==="100"}customElements.define(zo,Wo);const Go=rt.bind(J),Yo="crumbs-input",Jo=K(Go`
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
`);class Ko extends HTMLElement{static get observedAttributes(){return["value"]}async connectedCallback(){this.attachShadow({mode:"open"});const t=L(this),n=Jo.content.cloneNode(!0);t.appendChild(n);const r=C(t,"input"),i=this.getAttribute("value");r instanceof HTMLInputElement&&i&&(r.value=i)}attributeChangedCallback(t,n,r){if(t==="value"&&this.shadowRoot){const i=L(this),o=C(i,"input");o instanceof HTMLInputElement&&(o.value=r)}}}customElements.define(Yo,Ko);const Vt=rt.bind(J),Qo="crumbs-tabs",Zo=K(Vt`
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
`);class Xo extends HTMLElement{selected=1;subscriptions=[];async connectedCallback(){this.attachShadow({mode:"open"});const t=L(this),n=Zo.content.cloneNode(!0);t.appendChild(n);const r=this.getAttribute("selected");this.selected=Number.parseInt(r||"1",10);const i=t.querySelector("#tabs"),o=t.querySelector("#content");if(!i)throw new Error("Tabs not found");if(!o)throw new Error("Content not found");for(const s of{[Symbol.iterator]:()=>this.getSlots()}){if(s.startsWith("content-")){const a=Vt`<div id=${`${s}`}> <slot name=${s}></slot> </div>`;a instanceof Element&&o.appendChild(a)}if(s.startsWith("title-")){const a=Vt`<div id=${s}> <crumbs-p> <slot name=${s}></slot> </crumbs-p> </div>`;a instanceof Element&&i.appendChild(a)}}this.subscriptions=[...i.children].map((s,a)=>M(s,"click").subscribe(()=>{const u=s.id.replace("title-","content-"),c=t.querySelector(`#${u}`);c instanceof HTMLElement&&o instanceof HTMLElement&&c.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.selected=a+1,this.render()})),this.render()}render(){const n=L(this).querySelector("#tabs");if(!n)throw new Error("Tabs not found");[...n.children].forEach((r,i)=>{i+1===this.selected?r instanceof HTMLElement&&r.classList.add("selected-title"):r instanceof HTMLElement&&r.classList.remove("selected-title")})}disconnectedCallback(){for(const t of this.subscriptions)t.unsubscribe()}*getSlots(){for(const t of Array.from(this.children)){const n=t.getAttribute("slot");n&&(yield n)}}}customElements.define(Qo,Xo);var Un=function(e,t,n,r){var i;t[0]=0;for(var o=1;o<t.length;o++){var s=t[o++],a=t[o]?(t[0]|=s?1:2,n[t[o++]]):t[++o];s===3?r[0]=a:s===4?r[1]=Object.assign(r[1]||{},a):s===5?(r[1]=r[1]||{})[t[++o]]=a:s===6?r[1][t[++o]]+=a+"":s?(i=e.apply(a,Un(e,a,n,["",null])),r.push(i),a[0]?t[0]|=2:(t[o-2]=0,t[o]=i)):r.push(a)}return r},Ie=new Map;function ti(e){var t=Ie.get(this);return t||(t=new Map,Ie.set(this,t)),(t=Un(this,t.get(e)||(t.set(e,t=(function(n){for(var r,i,o=1,s="",a="",u=[0],c=function(b){o===1&&(b||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,b,s):o===3&&(b||s)?(u.push(3,b,s),o=2):o===2&&s==="..."&&b?u.push(4,b,0):o===2&&s&&!b?u.push(5,0,!0,s):o>=5&&((s||!b&&o===5)&&(u.push(o,0,s,i),o=6),b&&(u.push(o,b,0,i),o=6)),s=""},p=0;p<n.length;p++){p&&(o===1&&c(),c(p));for(var l=0;l<n[p].length;l++)r=n[p][l],o===1?r==="<"?(c(),u=[u],o=3):s+=r:o===4?s==="--"&&r===">"?(o=1,s=""):s=r+s[0]:a?r===a?a="":s+=r:r==='"'||r==="'"?a=r:r===">"?(c(),o=1):o&&(r==="="?(o=5,i=s,s=""):r==="/"&&(o<5||n[p][l+1]===">")?(c(),o===3&&(u=u[0]),o=u,(u=u[0]).push(2,0,o),o=0):r===" "||r==="	"||r===`
`||r==="\r"?(c(),o=2):s+=r),o===3&&s==="!--"&&(o=4,u=u[0])}return c(),u})(e)),t),arguments,[])).length>1?t:t[0]}function ei(){return e=>e.pipe(O(([t,n,r])=>t||n||r>0&&r<100))}function ni(){return e=>e.pipe(O(([t,n])=>n?100:t||0))}const ri=ti.bind(J),oi="crumbs-button";class ii extends HTMLElement{_renderSubscription=null;_clickSubscription=null;_attributeChanges$=new xn;_parsedProgress$;_parsedDisabled$;_parsedIndeterminateProgress$;_loading$;_activeIndeterminateProgress$;_disabled$;_loadingBarTransitionEnabled$;constructor(){super(),this._parsedProgress$=this._attributeChanges$.pipe(st(([t])=>t==="progress"),O(([t,n])=>n),O(Number),st(t=>Number.isInteger(t)&&t<=100)),this._parsedIndeterminateProgress$=this._attributeChanges$.pipe(st(([t])=>t==="indeterminate-progress"),O(([t,n])=>n),O(t=>t!==null)),this._parsedDisabled$=this._attributeChanges$.pipe(st(([t])=>t==="disabled"),O(([t,n])=>n),O(t=>t!==null&&t!=="false")),this._loading$=this._parsedProgress$.pipe(Ft(this._parsedIndeterminateProgress$),ni(),dt(0)),this._activeIndeterminateProgress$=this._parsedIndeterminateProgress$.pipe(dt(!1)),this._disabled$=this._parsedDisabled$.pipe(Ft(this._activeIndeterminateProgress$,this._loading$),ei(),dt(!1)),this._loadingBarTransitionEnabled$=this._loading$.pipe(jo(),O(([t,n])=>n>=t),dt(!1))}static get observedAttributes(){return["progress","disabled","indeterminate-progress"]}async connectedCallback(){this.attachShadow({mode:"open"}),L(this).appendChild(si.content.cloneNode(!0)),this._renderSubscription=this._disabled$.pipe(Ft(this._loading$,this._activeIndeterminateProgress$,this._loadingBarTransitionEnabled$)).subscribe(n=>{this.render(...n)}),this._attributeChanges$.next(["disabled",this.getAttribute("disabled")]),this._attributeChanges$.next(["progress",this.getAttribute("progress")]),this._attributeChanges$.next(["indeterminate-progress",this.getAttribute("indeterminate-progress")])}attributeChangedCallback(t){this._attributeChanges$.next([t,this.getAttribute(t)])}render(t,n,r,i){if(!this.shadowRoot)return;const o=L(this),s=C(o,"#progress"),a=C(o,"button"),u=C(o,"progress");a instanceof HTMLButtonElement&&(a.disabled=t),r?(a.classList.remove("indeterminate-loading-end"),a.classList.add("indeterminate-loading"),u instanceof HTMLProgressElement&&u.removeAttribute("value")):(a.classList.add("indeterminate-loading-end"),setTimeout(()=>{a.classList.remove("indeterminate-loading")},500)),i?s.classList.add("transition"):s.classList.remove("transition"),s.style.width=`${n}%`,!r&&u instanceof HTMLProgressElement&&(u.value=n)}disconnectedCallback(){this._clickSubscription?.unsubscribe(),this._renderSubscription?.unsubscribe()}}customElements.define(oi,ii);const si=K(ri`
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
`),_t=rt.bind(J),ai="crumbs-nav",ci=K(_t`
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
`);class ui extends HTMLElement{selected=1;subscriptions=[];navOpen=!1;async connectedCallback(){this.attachShadow({mode:"open"});const t=L(this),n=ci.content.cloneNode(!0);t.appendChild(n);const r=this.getAttribute("selected");this.selected=Number.parseInt(r||"1",10);const i=t.querySelector("#content"),o=t.querySelector("#navbar");if(!(i instanceof HTMLElement))throw new Error("Content is not HTMLElement !");if(!(o instanceof HTMLElement))throw new Error("navbar is not HTMLElement !");for(const s of{[Symbol.iterator]:()=>this.getSlots()}){if(s.startsWith("content-")){const a=_t`<div id=${`${s}`}> <div> <slot name=${s}></slot> </div> </div>`;a instanceof HTMLElement&&i instanceof HTMLElement&&(i.appendChild(a),this.subscriptions.push(M(a,"click").subscribe(u=>{if(!this.navOpen)return;u.stopPropagation(),u.preventDefault();const c=u.target;c instanceof HTMLElement&&(setTimeout(()=>{c.scrollIntoView({behavior:"instant"})},50),this.navOpen=!1,this.render())})))}if(s.startsWith("title-")){const a=_t`<div id=${s}> <crumbs-p> <slot name=${s}></slot> </crumbs-p> </div>`;a instanceof Element&&(o.appendChild(a),this.subscriptions.push(M(a,"click").subscribe(u=>{if(this.navOpen)return;const c=s.replace("title-","content-"),p=t.querySelector(`#${c}`);p instanceof HTMLElement&&(p.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.selected=Number.parseInt(s.split("-")[1]),this.render())})))}if(s.startsWith("navigation-toggle")){const a=_t`<div id=${s}> <crumbs-p> <slot name=${s}></slot> </crumbs-p> </div>`;a instanceof Element&&(o.appendChild(a),this.subscriptions.push(M(a,"click").subscribe(u=>{if(this.navOpen)return;t.querySelector(`#${s}`)instanceof HTMLElement&&(this.navOpen=!0,this.render())})))}}this.render()}async render(){const t=L(this),n=t.querySelector("#content"),r=t.querySelector("#navbar");if(!n)throw new Error("Content not found");if(!(r instanceof HTMLElement))throw new Error("navbar is not HTMLElement !");r.style.visibility=this.navOpen?"hidden":"visible",[...r.children].forEach(i=>{Number.parseInt(i.id.split("-")[1])===this.selected?i instanceof HTMLElement&&i.classList.add("selected-title"):i instanceof HTMLElement&&i.classList.remove("selected-title")}),n.style.willChange="auto";for(const i of{[Symbol.iterator]:()=>this.getSlots()})if(i.startsWith("content-")){const o=t.querySelector(i);o instanceof HTMLElement&&(o.style.willChange="auto")}await new Promise(i=>setTimeout(i,5)),this.navOpen?(n.classList.add("content-nav-mode"),await new Promise(i=>setTimeout(i,105))):n.classList.remove("content-nav-mode2"),this.navOpen?n.classList.add("content-nav-mode2"):n.classList.remove("content-nav-mode");for(const i of{[Symbol.iterator]:()=>this.getSlots()})if(i.startsWith("content-")){const o=t.querySelector(i);o instanceof HTMLElement&&(o.style.willChange="initial")}n.style.willChange="initial"}disconnectedCallback(){for(const t of this.subscriptions)t.unsubscribe()}*getSlots(){for(const t of Array.from(this.children)){const n=t.getAttribute("slot");n&&(yield n)}}}customElements.define(ai,ui);const li=rt.bind(J),pi="crumbs-frame",fi=K(li`
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
`);class di extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const t=L(this),n=fi.content.cloneNode(!0);t.appendChild(n)}}customElements.define(pi,di);let bi={data:""},mi=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||bi},hi=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,vi=/\/\*[^]*?\*\/|  +/g,Pe=/\n+/g,V=(e,t)=>{let n="",r="",i="";for(let o in e){let s=e[o];o[0]=="@"?o[1]=="i"?n=o+" "+s+";":r+=o[1]=="f"?V(s,o):o+"{"+V(s,o[1]=="k"?"":t)+"}":typeof s=="object"?r+=V(s,t?t.replace(/([^,])+/g,a=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,a):a?a+" "+u:u)):o):s!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=V.p?V.p(o,s):o+":"+s+";")}return n+(t&&i?t+"{"+i+"}":i)+r},F={},zn=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+zn(e[n]);return t}return e},_i=(e,t,n,r,i)=>{let o=zn(e),s=F[o]||(F[o]=(u=>{let c=0,p=11;for(;c<u.length;)p=101*p+u.charCodeAt(c++)>>>0;return"go"+p})(o));if(!F[s]){let u=o!==e?e:(c=>{let p,l,b=[{}];for(;p=hi.exec(c.replace(vi,""));)p[4]?b.shift():p[3]?(l=p[3].replace(Pe," ").trim(),b.unshift(b[0][l]=b[0][l]||{})):b[0][p[1]]=p[2].replace(Pe," ").trim();return b[0]})(e);F[s]=V(i?{["@keyframes "+s]:u}:u,n?"":"."+s)}let a=n&&F.g?F.g:null;return n&&(F.g=F[s]),((u,c,p,l)=>{l?c.data=c.data.replace(l,u):c.data.indexOf(u)===-1&&(c.data=p?u+c.data:c.data+u)})(F[s],t,r,a),s},yi=(e,t,n)=>e.reduce((r,i,o)=>{let s=t[o];if(s&&s.call){let a=s(n),u=a&&a.props&&a.props.className||/^go/.test(a)&&a;s=u?"."+u:a&&typeof a=="object"?a.props?"":V(a,""):a===!1?"":a}return r+i+(s??"")},"");function j(e){let t=this||{},n=e.call?e(t.p):e;return _i(n.unshift?n.raw?yi(n,[].slice.call(arguments,1),t.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):n,mi(t.target),t.g,t.o,t.k)}j.bind({g:1});j.bind({k:1});var kt,g,Bn,G,Ce,Wn,Vn,Gn,le,Gt,Yt,at={},Yn=[],gi=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,It=Array.isArray;function D(e,t){for(var n in t)e[n]=t[n];return e}function pe(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Jn(e,t,n){var r,i,o,s={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:s[o]=t[o];if(arguments.length>2&&(s.children=arguments.length>3?kt.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)s[o]===void 0&&(s[o]=e.defaultProps[o]);return yt(e,s,r,i,null)}function yt(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Bn,__i:-1,__u:0};return i==null&&g.vnode!=null&&g.vnode(o),o}function Pt(e){return e.children}function gt(e,t){this.props=e,this.context=t}function nt(e,t){if(t==null)return e.__?nt(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?nt(e):null}function Kn(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Kn(e)}}function je(e){(!e.__d&&(e.__d=!0)&&G.push(e)&&!St.__r++||Ce!=g.debounceRendering)&&((Ce=g.debounceRendering)||Wn)(St)}function St(){for(var e,t,n,r,i,o,s,a=1;G.length;)G.length>a&&G.sort(Vn),e=G.shift(),a=G.length,e.__d&&(n=void 0,r=void 0,i=(r=(t=e).__v).__e,o=[],s=[],t.__P&&((n=D({},r)).__v=r.__v+1,g.vnode&&g.vnode(n),fe(t.__P,n,r,t.__n,t.__P.namespaceURI,32&r.__u?[i]:null,o,i??nt(r),!!(32&r.__u),s),n.__v=r.__v,n.__.__k[n.__i]=n,Xn(o,n,s),r.__e=r.__=null,n.__e!=i&&Kn(n)));St.__r=0}function Qn(e,t,n,r,i,o,s,a,u,c,p){var l,b,f,v,d,h,_,m=r&&r.__k||Yn,E=t.length;for(u=wi(n,t,m,u,E),l=0;l<E;l++)(f=n.__k[l])!=null&&(b=f.__i==-1?at:m[f.__i]||at,f.__i=l,h=fe(e,f,b,i,o,s,a,u,c,p),v=f.__e,f.ref&&b.ref!=f.ref&&(b.ref&&de(b.ref,null,f),p.push(f.ref,f.__c||v,f)),d==null&&v!=null&&(d=v),(_=!!(4&f.__u))||b.__k===f.__k?u=Zn(f,u,e,_):typeof f.type=="function"&&h!==void 0?u=h:v&&(u=v.nextSibling),f.__u&=-7);return n.__e=d,u}function wi(e,t,n,r,i){var o,s,a,u,c,p=n.length,l=p,b=0;for(e.__k=new Array(i),o=0;o<i;o++)(s=t[o])!=null&&typeof s!="boolean"&&typeof s!="function"?(u=o+b,(s=e.__k[o]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?yt(null,s,null,null,null):It(s)?yt(Pt,{children:s},null,null,null):s.constructor==null&&s.__b>0?yt(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=e,s.__b=e.__b+1,a=null,(c=s.__i=xi(s,n,u,l))!=-1&&(l--,(a=n[c])&&(a.__u|=2)),a==null||a.__v==null?(c==-1&&(i>p?b--:i<p&&b++),typeof s.type!="function"&&(s.__u|=4)):c!=u&&(c==u-1?b--:c==u+1?b++:(c>u?b--:b++,s.__u|=4))):e.__k[o]=null;if(l)for(o=0;o<p;o++)(a=n[o])!=null&&(2&a.__u)==0&&(a.__e==r&&(r=nt(a)),er(a,a));return r}function Zn(e,t,n,r){var i,o;if(typeof e.type=="function"){for(i=e.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=e,t=Zn(i[o],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=nt(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function xi(e,t,n,r){var i,o,s,a=e.key,u=e.type,c=t[n],p=c!=null&&(2&c.__u)==0;if(c===null&&e.key==null||p&&a==c.key&&u==c.type)return n;if(r>(p?1:0)){for(i=n-1,o=n+1;i>=0||o<t.length;)if((c=t[s=i>=0?i--:o++])!=null&&(2&c.__u)==0&&a==c.key&&u==c.type)return s}return-1}function Le(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||gi.test(t)?n:n+"px"}function bt(e,t,n,r,i){var o,s;t:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Le(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||Le(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Gn,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n.u=r.u:(n.u=le,e.addEventListener(t,o?Yt:Gt,o)):e.removeEventListener(t,o?Yt:Gt,o);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Ae(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=le++;else if(t.t<n.u)return;return n(g.event?g.event(t):t)}}}function fe(e,t,n,r,i,o,s,a,u,c){var p,l,b,f,v,d,h,_,m,E,$,w,x,P,q,it,At,N=t.type;if(t.constructor!=null)return null;128&n.__u&&(u=!!(32&n.__u),o=[a=t.__e=n.__e]),(p=g.__b)&&p(t);t:if(typeof N=="function")try{if(_=t.props,m="prototype"in N&&N.prototype.render,E=(p=N.contextType)&&r[p.__c],$=p?E?E.props.value:p.__:r,n.__c?h=(l=t.__c=n.__c).__=l.__E:(m?t.__c=l=new N(_,$):(t.__c=l=new gt(_,$),l.constructor=N,l.render=Ti),E&&E.sub(l),l.props=_,l.state||(l.state={}),l.context=$,l.__n=r,b=l.__d=!0,l.__h=[],l._sb=[]),m&&l.__s==null&&(l.__s=l.state),m&&N.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=D({},l.__s)),D(l.__s,N.getDerivedStateFromProps(_,l.__s))),f=l.props,v=l.state,l.__v=t,b)m&&N.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),m&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(m&&N.getDerivedStateFromProps==null&&_!==f&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(_,$),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(_,l.__s,$)===!1||t.__v==n.__v){for(t.__v!=n.__v&&(l.props=_,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(Z){Z&&(Z.__=t)}),w=0;w<l._sb.length;w++)l.__h.push(l._sb[w]);l._sb=[],l.__h.length&&s.push(l);break t}l.componentWillUpdate!=null&&l.componentWillUpdate(_,l.__s,$),m&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(f,v,d)})}if(l.context=$,l.props=_,l.__P=e,l.__e=!1,x=g.__r,P=0,m){for(l.state=l.__s,l.__d=!1,x&&x(t),p=l.render(l.props,l.state,l.context),q=0;q<l._sb.length;q++)l.__h.push(l._sb[q]);l._sb=[]}else do l.__d=!1,x&&x(t),p=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++P<25);l.state=l.__s,l.getChildContext!=null&&(r=D(D({},r),l.getChildContext())),m&&!b&&l.getSnapshotBeforeUpdate!=null&&(d=l.getSnapshotBeforeUpdate(f,v)),it=p,p!=null&&p.type===Pt&&p.key==null&&(it=tr(p.props.children)),a=Qn(e,It(it)?it:[it],t,n,r,i,o,s,a,u,c),l.base=t.__e,t.__u&=-161,l.__h.length&&s.push(l),h&&(l.__E=l.__=null)}catch(Z){if(t.__v=null,u||o!=null)if(Z.then){for(t.__u|=u?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;o[o.indexOf(a)]=null,t.__e=a}else{for(At=o.length;At--;)pe(o[At]);Jt(t)}else t.__e=n.__e,t.__k=n.__k,Z.then||Jt(t);g.__e(Z,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):a=t.__e=Si(n.__e,t,n,r,i,o,s,u,c);return(p=g.diffed)&&p(t),128&t.__u?void 0:a}function Jt(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Jt)}function Xn(e,t,n){for(var r=0;r<n.length;r++)de(n[r],n[++r],n[++r]);g.__c&&g.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(o){o.call(i)})}catch(o){g.__e(o,i.__v)}})}function tr(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:It(e)?e.map(tr):D({},e)}function Si(e,t,n,r,i,o,s,a,u){var c,p,l,b,f,v,d,h=n.props,_=t.props,m=t.type;if(m=="svg"?i="http://www.w3.org/2000/svg":m=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),o!=null){for(c=0;c<o.length;c++)if((f=o[c])&&"setAttribute"in f==!!m&&(m?f.localName==m:f.nodeType==3)){e=f,o[c]=null;break}}if(e==null){if(m==null)return document.createTextNode(_);e=document.createElementNS(i,m,_.is&&_),a&&(g.__m&&g.__m(t,o),a=!1),o=null}if(m==null)h===_||a&&e.data==_||(e.data=_);else{if(o=o&&kt.call(e.childNodes),h=n.props||at,!a&&o!=null)for(h={},c=0;c<e.attributes.length;c++)h[(f=e.attributes[c]).name]=f.value;for(c in h)if(f=h[c],c!="children"){if(c=="dangerouslySetInnerHTML")l=f;else if(!(c in _)){if(c=="value"&&"defaultValue"in _||c=="checked"&&"defaultChecked"in _)continue;bt(e,c,null,f,i)}}for(c in _)f=_[c],c=="children"?b=f:c=="dangerouslySetInnerHTML"?p=f:c=="value"?v=f:c=="checked"?d=f:a&&typeof f!="function"||h[c]===f||bt(e,c,f,h[c],i);if(p)a||l&&(p.__html==l.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(l&&(e.innerHTML=""),Qn(t.type=="template"?e.content:e,It(b)?b:[b],t,n,r,m=="foreignObject"?"http://www.w3.org/1999/xhtml":i,o,s,o?o[0]:n.__k&&nt(n,0),a,u),o!=null)for(c=o.length;c--;)pe(o[c]);a||(c="value",m=="progress"&&v==null?e.removeAttribute("value"):v!=null&&(v!==e[c]||m=="progress"&&!v||m=="option"&&v!=h[c])&&bt(e,c,v,h[c],i),c="checked",d!=null&&d!=e[c]&&bt(e,c,d,h[c],i))}return e}function de(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(i){g.__e(i,n)}}function er(e,t,n){var r,i;if(g.unmount&&g.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||de(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){g.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&er(r[i],t,n||typeof e.type!="function");n||pe(e.__e),e.__c=e.__=e.__e=void 0}function Ti(e,t,n){return this.constructor(e,n)}function $i(e,t,n){var r,i,o,s;t==document&&(t=document.documentElement),g.__&&g.__(e,t),i=(r=!1)?null:t.__k,o=[],s=[],fe(t,e=t.__k=Jn(Pt,null,[e]),i||at,at,t.namespaceURI,i?null:t.firstChild?kt.call(t.childNodes):null,o,i?i.__e:t.firstChild,r,s),Xn(o,e,s)}kt=Yn.slice,g={__e:function(e,t,n,r){for(var i,o,s;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),s=i.__d),s)return i.__E=i}catch(a){e=a}throw e}},Bn=0,gt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=D({},this.state),typeof e=="function"&&(e=e(D({},n),this.props)),e&&D(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),je(this))},gt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),je(this))},gt.prototype.render=Pt,G=[],Wn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Vn=function(e,t){return e.__v.__b-t.__v.__b},St.__r=0,Gn=/(PointerCapture)$|Capture$/i,le=0,Gt=Ae(!1),Yt=Ae(!0);var nr=function(e,t,n,r){var i;t[0]=0;for(var o=1;o<t.length;o++){var s=t[o++],a=t[o]?(t[0]|=s?1:2,n[t[o++]]):t[++o];s===3?r[0]=a:s===4?r[1]=Object.assign(r[1]||{},a):s===5?(r[1]=r[1]||{})[t[++o]]=a:s===6?r[1][t[++o]]+=a+"":s?(i=e.apply(a,nr(e,a,n,["",null])),r.push(i),a[0]?t[0]|=2:(t[o-2]=0,t[o]=i)):r.push(a)}return r},Me=new Map;function Ei(e){var t=Me.get(this);return t||(t=new Map,Me.set(this,t)),(t=nr(this,t.get(e)||(t.set(e,t=(function(n){for(var r,i,o=1,s="",a="",u=[0],c=function(b){o===1&&(b||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,b,s):o===3&&(b||s)?(u.push(3,b,s),o=2):o===2&&s==="..."&&b?u.push(4,b,0):o===2&&s&&!b?u.push(5,0,!0,s):o>=5&&((s||!b&&o===5)&&(u.push(o,0,s,i),o=6),b&&(u.push(o,b,0,i),o=6)),s=""},p=0;p<n.length;p++){p&&(o===1&&c(),c(p));for(var l=0;l<n[p].length;l++)r=n[p][l],o===1?r==="<"?(c(),u=[u],o=3):s+=r:o===4?s==="--"&&r===">"?(o=1,s=""):s=r+s[0]:a?r===a?a="":s+=r:r==='"'||r==="'"?a=r:r===">"?(c(),o=1):o&&(r==="="?(o=5,i=s,s=""):r==="/"&&(o<5||n[p][l+1]===">")?(c(),o===3&&(u=u[0]),o=u,(u=u[0]).push(2,0,o),o=0):r===" "||r==="	"||r===`
`||r==="\r"?(c(),o=2):s+=r),o===3&&s==="!--"&&(o=4,u=u[0])}return c(),u})(e)),t),arguments,[])).length>1?t:t[0]}var A=Ei.bind(Jn),ct,S,Dt,He,ut=0,rr=[],T=g,Ne=T.__b,Re=T.__r,qe=T.diffed,Fe=T.__c,De=T.unmount,Ue=T.__;function be(e,t){T.__h&&T.__h(S,e,ut||t),ut=0;var n=S.__H||(S.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function k(e){return ut=1,Oi(sr,e)}function Oi(e,t,n){var r=be(ct++,2);if(r.t=e,!r.__c&&(r.__=[sr(void 0,t),function(a){var u=r.__N?r.__N[0]:r.__[0],c=r.t(u,a);u!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=S,!S.__f)){var i=function(a,u,c){if(!r.__c.__H)return!0;var p=r.__c.__H.__.filter(function(b){return!!b.__c});if(p.every(function(b){return!b.__N}))return!o||o.call(this,a,u,c);var l=r.__c.props!==a;return p.forEach(function(b){if(b.__N){var f=b.__[0];b.__=b.__N,b.__N=void 0,f!==b.__[0]&&(l=!0)}}),o&&o.call(this,a,u,c)||l};S.__f=!0;var o=S.shouldComponentUpdate,s=S.componentWillUpdate;S.componentWillUpdate=function(a,u,c){if(this.__e){var p=o;o=void 0,i(a,u,c),o=p}s&&s.call(this,a,u,c)},S.shouldComponentUpdate=i}return r.__N||r.__}function ki(e,t){var n=be(ct++,3);!T.__s&&ir(n.__H,t)&&(n.__=e,n.u=t,S.__H.__h.push(n))}function Ii(e){return ut=5,or(function(){return{current:e}},[])}function or(e,t){var n=be(ct++,7);return ir(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Pi(e,t){return ut=8,or(function(){return e},t)}function Ci(){for(var e;e=rr.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(wt),e.__H.__h.forEach(Kt),e.__H.__h=[]}catch(t){e.__H.__h=[],T.__e(t,e.__v)}}T.__b=function(e){S=null,Ne&&Ne(e)},T.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ue&&Ue(e,t)},T.__r=function(e){Re&&Re(e),ct=0;var t=(S=e.__c).__H;t&&(Dt===S?(t.__h=[],S.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(wt),t.__h.forEach(Kt),t.__h=[],ct=0)),Dt=S},T.diffed=function(e){qe&&qe(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(rr.push(t)!==1&&He===T.requestAnimationFrame||((He=T.requestAnimationFrame)||ji)(Ci)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),Dt=S=null},T.__c=function(e,t){t.some(function(n){try{n.__h.forEach(wt),n.__h=n.__h.filter(function(r){return!r.__||Kt(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],T.__e(r,n.__v)}}),Fe&&Fe(e,t)},T.unmount=function(e){De&&De(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{wt(r)}catch(i){t=i}}),n.__H=void 0,t&&T.__e(t,n.__v))};var ze=typeof requestAnimationFrame=="function";function ji(e){var t,n=function(){clearTimeout(r),ze&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);ze&&(t=requestAnimationFrame(n))}function wt(e){var t=S,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),S=t}function Kt(e){var t=S;e.__c=e.__(),S=t}function ir(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function sr(e,t){return typeof t=="function"?t(e):t}function Tt(e,t){var n=k(t),r=n[0],i=n[1],o=Ii(e);return ki(function(){var s=o.current.subscribe(i);return function(){return s.unsubscribe()}}),r}var Qt=function(e,t){return Qt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Qt(e,t)};function Ct(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Qt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function Zt(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Xt(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],s;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function te(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function U(e){return typeof e=="function"}function ar(e){var t=function(r){Error.call(r),r.stack=new Error().stack},n=e(t);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Ut=ar(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function ee(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var jt=(function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,n,r,i,o;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var a=Zt(s),u=a.next();!u.done;u=a.next()){var c=u.value;c.remove(this)}}catch(d){t={error:d}}finally{try{u&&!u.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}else s.remove(this);var p=this.initialTeardown;if(U(p))try{p()}catch(d){o=d instanceof Ut?d.errors:[d]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var b=Zt(l),f=b.next();!f.done;f=b.next()){var v=f.value;try{Be(v)}catch(d){o=o??[],d instanceof Ut?o=te(te([],Xt(o)),Xt(d.errors)):o.push(d)}}}catch(d){r={error:d}}finally{try{f&&!f.done&&(i=b.return)&&i.call(b)}finally{if(r)throw r.error}}}if(o)throw new Ut(o)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)Be(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}},e.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},e.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},e.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&ee(n,t)},e.prototype.remove=function(t){var n=this._finalizers;n&&ee(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=(function(){var t=new e;return t.closed=!0,t})(),e})(),cr=jt.EMPTY;function ur(e){return e instanceof jt||e&&"closed"in e&&U(e.remove)&&U(e.add)&&U(e.unsubscribe)}function Be(e){U(e)?e():e.unsubscribe()}var Li={Promise:void 0},Ai={setTimeout:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,te([e,t],Xt(n)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function Mi(e){Ai.setTimeout(function(){throw e})}function We(){}function xt(e){e()}var lr=(function(e){Ct(t,e);function t(n){var r=e.call(this)||this;return r.isStopped=!1,n?(r.destination=n,ur(n)&&n.add(r)):r.destination=Ri,r}return t.create=function(n,r,i){return new ne(n,r,i)},t.prototype.next=function(n){this.isStopped||this._next(n)},t.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t})(jt),Hi=(function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){mt(r)}},e.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){mt(r)}else mt(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){mt(n)}},e})(),ne=(function(e){Ct(t,e);function t(n,r,i){var o=e.call(this)||this,s;return U(n)||!n?s={next:n??void 0,error:r??void 0,complete:i??void 0}:s=n,o.destination=new Hi(s),o}return t})(lr);function mt(e){Mi(e)}function Ni(e){throw e}var Ri={closed:!0,next:We,error:Ni,complete:We},qi=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function Fi(e){return e}function Di(e){return e.length===0?Fi:e.length===1?e[0]:function(n){return e.reduce(function(r,i){return i(r)},n)}}var Ve=(function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(t,n,r){var i=this,o=zi(t)?t:new ne(t,n,r);return xt(function(){var s=i,a=s.operator,u=s.source;o.add(a?a.call(o,u):u?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},e.prototype.forEach=function(t,n){var r=this;return n=Ge(n),new n(function(i,o){var s=new ne({next:function(a){try{t(a)}catch(u){o(u),s.unsubscribe()}},error:o,complete:i});r.subscribe(s)})},e.prototype._subscribe=function(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)},e.prototype[qi]=function(){return this},e.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Di(t)(this)},e.prototype.toPromise=function(t){var n=this;return t=Ge(t),new t(function(r,i){var o;n.subscribe(function(s){return o=s},function(s){return i(s)},function(){return r(o)})})},e.create=function(t){return new e(t)},e})();function Ge(e){var t;return(t=e??Li.Promise)!==null&&t!==void 0?t:Promise}function Ui(e){return e&&U(e.next)&&U(e.error)&&U(e.complete)}function zi(e){return e&&e instanceof lr||Ui(e)&&ur(e)}var Bi=ar(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),me=(function(e){Ct(t,e);function t(){var n=e.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return t.prototype.lift=function(n){var r=new Ye(this,this);return r.operator=n,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new Bi},t.prototype.next=function(n){var r=this;xt(function(){var i,o;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=Zt(r.currentObservers),a=s.next();!a.done;a=s.next()){var u=a.value;u.next(n)}}catch(c){i={error:c}}finally{try{a&&!a.done&&(o=s.return)&&o.call(s)}finally{if(i)throw i.error}}}})},t.prototype.error=function(n){var r=this;xt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},t.prototype.complete=function(){var n=this;xt(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(n){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,n)},t.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},t.prototype._innerSubscribe=function(n){var r=this,i=this,o=i.hasError,s=i.isStopped,a=i.observers;return o||s?cr:(this.currentObservers=null,a.push(n),new jt(function(){r.currentObservers=null,ee(a,n)}))},t.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,o=r.thrownError,s=r.isStopped;i?n.error(o):s&&n.complete()},t.prototype.asObservable=function(){var n=new Ve;return n.source=this,n},t.create=function(n,r){return new Ye(n,r)},t})(Ve),Ye=(function(e){Ct(t,e);function t(n,r){var i=e.call(this)||this;return i.destination=n,i.source=r,i}return t.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},t.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},t.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},t.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:cr},t})(me),pr=4,fr=new me,dr=fr.asObservable();function br(){return pr}function X(e){pr=e,fr.next(e)}var mr="initial",hr=new me,vr=hr.asObservable();function _r(){return mr}function W(e){mr=e,hr.next(e)}var Lt=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Wi=j(Qe||(Qe=Lt([`
	height: 70cqh;
`],[`
	height: 70cqh;
`]))),Je=j(Ze||(Ze=Lt([`
	min-height: 95%;
	display: grid;
	align-content: space-evenly;
`],[`
	min-height: 95%;
	display: grid;
	align-content: space-evenly;
`]))),Ke=j(Xe||(Xe=Lt([`
	display: grid;
	justify-content: center;
`],[`
	display: grid;
	justify-content: center;
`])));function ot(e){var t=e.title,n=e.children,r=e.order;return A(tn||(tn=Lt([`
		<span slot=`,">",`</span>
		<crumbs-panel panel-title=`," slot="," className=",`>
			<crumbs-tabs style="height: 100%;">
				<span slot="title-1"> Demo </span>
				<div className=`,` slot="content-1">
					<crumbs-frame className=`,`>
						`,`
					</crumbs-frame>
					<crumbs-frame className=`,`>
						<crumbs-p>
							<h3>Parameters</h3>
						</crumbs-p>
						`,`
					</crumbs-frame>
				</div>
				<span slot="title-3"> Code </span>
				<div className=`,' slot="content-3">',`</div>
			</crumbs-tabs>
		</crumbs-panel>
	`],[`
		<span slot=`,">",`</span>
		<crumbs-panel panel-title=`," slot="," className=",`>
			<crumbs-tabs style="height: 100%;">
				<span slot="title-1"> Demo </span>
				<div className=`,` slot="content-1">
					<crumbs-frame className=`,`>
						`,`
					</crumbs-frame>
					<crumbs-frame className=`,`>
						<crumbs-p>
							<h3>Parameters</h3>
						</crumbs-p>
						`,`
					</crumbs-frame>
				</div>
				<span slot="title-3"> Code </span>
				<div className=`,' slot="content-3">',`</div>
			</crumbs-tabs>
		</crumbs-panel>
	`])),"title-".concat(r),t,t,"content-".concat(r),Wi,Je,Ke,n[0],Ke,n[1],Je,n[2])}var Qe,Ze,Xe,tn,Vi=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function Gi(e){var t=e.order,n=k("I'm an input !"),r=n[0],i=n[1],o=`&lt;crumbs-input
	value="`.concat(r,`"&gt;
&lt;/crumbs-input&gt;`);return A(en||(en=Vi([`
		<`,' title="Input" order=',`>
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
		<`,' title="Input" order=',`>
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
	`])),ot,t,r,function(s){return i(s.originalTarget.value)},r,function(s){return i(s.originalTarget.value)},{__html:o})}var en,Yi=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function Ji(e){var t=e.order,n=k("I'm a <b>paragraph</b> !"),r=n[0],i=n[1];return A(nn||(nn=Yi([`
		<`,' title="Paragraph" order=',`>
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
		<`,' title="Paragraph" order=',`>
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
	`])),ot,t,{__html:r},r,function(o){return i(o.originalTarget.value)},{__html:"&lt;crumbs-p&gt; ".concat(r," &lt;/crumbs-p&gt;")})}var nn,Ki=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Qi=function(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(p){try{c(r.next(p))}catch(l){s(l)}}function u(p){try{c(r.throw(p))}catch(l){s(l)}}function c(p){p.done?o(p.value):i(p.value).then(a,u)}c((r=r.apply(e,t||[])).next())})},Zi=function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=a(0),s.throw=a(1),s.return=a(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(p){return u([c,p])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(n=0)),n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(p){c=[6,p],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};function Xi(e){var t=this,n=e.order,r=k("I'm a panel !"),i=r[0],o=r[1],s=k(""),a=s[0],u=s[1],c=k("100"),p=c[0],l=c[1],b=k(!1),f=b[0],v=b[1],d=`&lt;crumbs-panel
	panel-title="`.concat(a,`"
	panel-loading="`).concat(p,`"&gt;
	`).concat(i,`
&lt;/crumbs-panel&gt;`),h=Pi(function(){return Qi(t,void 0,void 0,function(){var m;return Zi(this,function(E){switch(E.label){case 0:if(f)return[2];v(!0),l("0"),m=0,E.label=1;case 1:return m<=100?[4,new Promise(function($){return setTimeout($,10)})]:[3,4];case 2:E.sent(),l(Math.floor(m).toString()),E.label=3;case 3:return m+=.1+(100-m)/100,[3,1];case 4:return l("100"),v(!1),[2]}})})},[f]),_=function(){f||h()};return A(rn||(rn=Ki([`
		<`,' title="Panel" order=',`>
			<crumbs-panel
				panel-loading=`,`
				panel-title=`,`>
				`,`
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
		<`,' title="Panel" order=',`>
			<crumbs-panel
				panel-loading=`,`
				panel-title=`,`>
				`,`
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
	`])),ot,n,p,a,i,a,function(m){return u(m.originalTarget.value)},i,function(m){return o(m.originalTarget.value)},p,function(m){return l(String(m.target.value))},_,{__html:d})}var rn,ts=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function es(e){var t=e.order,n=k("Tab content"),r=n[0],i=n[1],o=k("Tab title"),s=o[0],a=o[1],u=k("Tab content 2"),c=u[0],p=u[1],l=k("Tab title 2"),b=l[0],f=l[1],v=`&lt;crumbs-tabs&gt;
	&lt;crumbs-p
		slot="title-1"&gt;
		`.concat(s,`
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot="content-1"&gt;
		`).concat(r,`
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot="title-2"&gt;
		`).concat(b,`
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot="content-2"&gt;
		`).concat(c,`
	&lt;/crumbs-p&gt;
&lt;/crumbs-panel&gt;`);return A(on||(on=ts([`
		<`,' title="Tabs" order=',`>
			<crumbs-tabs>
				<crumbs-p slot="title-1"> `,` </crumbs-p>
				<crumbs-p slot="content-1"> `,` </crumbs-p>
				<crumbs-p slot="title-2"> `,` </crumbs-p>
				<crumbs-p slot="content-2"> `,` </crumbs-p>
			</crumbs-tabs>

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
		<`,' title="Tabs" order=',`>
			<crumbs-tabs>
				<crumbs-p slot="title-1"> `,` </crumbs-p>
				<crumbs-p slot="content-1"> `,` </crumbs-p>
				<crumbs-p slot="title-2"> `,` </crumbs-p>
				<crumbs-p slot="content-2"> `,` </crumbs-p>
			</crumbs-tabs>

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
	`])),ot,t,s,r,b,c,s,function(d){return a(d.originalTarget.value)},r,function(d){return i(d.originalTarget.value)},b,function(d){return f(d.originalTarget.value)},c,function(d){return p(d.originalTarget.value)},{__html:v})}var on,yr=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},ns=j(sn||(sn=yr([`
	max-width: 36rem;
	max-height: 70cqh;
`],[`
	max-width: 36rem;
	max-height: 70cqh;
`])));function rs(e){var t=e.order;return A(an||(an=yr([`
		<span slot=`,`> About</span>
		<crumbs-panel panel-title="About" slot=`," className=",`>
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
		<span slot=`,`> About</span>
		<crumbs-panel panel-title="About" slot=`," className=",`>
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
	`])),"title-".concat(t),"content-".concat(t),ns)}var sn,an,ht=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function os(e){var t=e.order,n=Tt(dr,br),r=Tt(vr,_r),i=j(cn||(cn=ht([`
		max-height: 70cqh;
	`],[`
		max-height: 70cqh;
	`]))),o=j(un||(un=ht([`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`],[`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`]))),s=j(ln||(ln=ht([`
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
	`])));return A(pn||(pn=ht([`
		<span slot=`,`>Personalization</span>
		<crumbs-panel panel-title="Personalization" slot=`," className=",`>
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
		<span slot=`,`>Personalization</span>
		<crumbs-panel panel-title="Personalization" slot=`," className=",`>
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
	`])),"title-".concat(t),"content-".concat(t),i,o,s,n===1,function(){return X(1)},n===2,function(){return X(2)},n===3,function(){return X(3)},n===4,function(){return X(4)},n===5,function(){return X(5)},n===6,function(){return X(6)},s,r==="initial",function(){return W("initial")},r==="monospace",function(){return W("monospace")},r==="serif",function(){return W("serif")},r==="sans-serif",function(){return W("sans-serif")},r==="cursive",function(){return W("cursive")},r==="fantasy",function(){return W("fantasy")},r==="system-ui",function(){return W("system-ui")})}var cn,un,ln,pn,fn=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function is(e){var t=e.order,n="&lt;crumbs-p&gt; Hello world ! &lt;/crumbs-p&gt;",r=j(dn||(dn=fn([`
		max-height: 70cqh;
	`],[`
		max-height: 70cqh;
	`])));return A(bn||(bn=fn([`
		<span slot=`,`> Getting started</span>
		<crumbs-panel panel-title="Getting started" slot=`," className=",`>
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
		<span slot=`,`> Getting started</span>
		<crumbs-panel panel-title="Getting started" slot=`," className=",`>
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
	`])),"title-".concat(t),"content-".concat(t),r,{__html:n})}var dn,bn,ss=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function as(e){var t=e.order,n=k("Click me !"),r=n[0],i=n[1],o=k("100"),s=o[0],a=o[1],u=k(!1),c=u[0],p=u[1],l=`
		&lt;crumbs-button
			`.concat(c?"	disabled":"",`
				progress="`).concat(s,`"&gt;
				`).concat(r,`
		&lt;/crumbs-button&gt;
	`);return A(mn||(mn=ss([`
		<`,' title="Button" order=',`>
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
		<`,' title="Button" order=',`>
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
	`])),ot,t,s,c,r,r,function(b){return i(b.originalTarget.value)},s,function(b){return a(String(b.target.value))},function(){return p(!c)},{__html:l})}var mn,cs=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};function us(e){var t=e.order,n=`&lt;crumbs-nav&gt;
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
	`;return A(hn||(hn=cs([`
		<`,' title="Nav" order=',`>
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

			<code> <pre dangerouslySetInnerHTML=`,`> </pre></code>
		<//>
	`],[`
		<`,' title="Nav" order=',`>
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

			<code> <pre dangerouslySetInnerHTML=`,`> </pre></code>
		<//>
	`])),ot,t,{__html:n})}var hn;function ls(){const e=Tt(dr,br),t=Tt(vr,_r),n=j`
		background-image: url('bg${e}.jpg');
		background-size: cover;
		min-height: 100vh;
		position: fixed;
		min-width: 100vw;
		background-position: center;
		z-index: -999;
	`,r=j`
		display: grid;
		overflow-y: scroll;
		height: 100vh;
		grid-template-columns: repeat(auto-fit, minmax(max(28rem + 6vw), 1fr));
		font-family: ${t};
	`;return A`
		<div class=${n}></div>

		<crumbs-nav class=${r}>
			<${rs} order=${1}><//>
			<${is} order=${2}><//>
			<${os} order=${3}><//>
			<${Ji} order=${4}><//>
			<${Xi} order=${5}><//>
			<${Gi} order=${6}><//>
			<${es} order=${7}><//>
			<${as} order=${8}><//>
			<${us} order=${9}><//>
			<span slot="navigation-toggle"> :: </span>
		</crumbs-nav>
	`}$i(A`<${ls}><//>`,document.body);
