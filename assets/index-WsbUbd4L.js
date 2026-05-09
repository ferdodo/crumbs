(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function J(e){for(var t,n,r=arguments,i=1,o="",s="",a=[0],c=function(u){i===1&&(u||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(u?r[u]:o):i===3&&(u||o)?(a[1]=u?r[u]:o,i=2):i===2&&o==="..."&&u?a[2]=Object.assign(a[2]||{},r[u]):i===2&&o&&!u?(a[2]=a[2]||{})[o]=!0:i>=5&&(i===5?((a[2]=a[2]||{})[n]=u?o?o+r[u]:r[u]:o,i=6):(u||o)&&(a[2][n]+=u?o+r[u]:o)),o=""},l=0;l<e.length;l++){l&&(i===1&&c(),c(l));for(var f=0;f<e[l].length;f++)t=e[l][f],i===1?t==="<"?(c(),a=[a,"",null],i=3):o+=t:i===4?o==="--"&&t===">"?(i=1,o=""):o=t+o[0]:s?t===s?s="":o+=t:t==='"'||t==="'"?s=t:t===">"?(c(),i=1):i&&(t==="="?(i=5,n=o,o=""):t==="/"&&(i<5||e[l][f+1]===">")?(c(),i===3&&(a=a[0]),i=a,(a=a[0]).push(this.apply(null,i.slice(1))),i=0):t===" "||t==="	"||t===`
`||t==="\r"?(c(),i=2):o+=t),i===3&&o==="!--"&&(i=4,a=a[0])}return c(),a.length>2?a.slice(1):a[1]}function er(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function nr(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e;var t=e.default;if(typeof t=="function"){var n=function r(){var i=!1;try{i=this instanceof r}catch{}return i?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Ht={exports:{}};var Nt,me;function rr(){return me||(me=1,Nt=(function(t){var n=String.prototype.split,r=/()??/.exec("")[1]===t,i;return i=function(o,u,a){if(Object.prototype.toString.call(u)!=="[object RegExp]")return n.call(o,u,a);var c=[],l=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.extended?"x":"")+(u.sticky?"y":""),f=0,u=new RegExp(u.source,l+"g"),p,d,v,h;for(o+="",r||(p=new RegExp("^"+u.source+"$(?!\\s)",l)),a=a===t?-1>>>0:a>>>0;(d=u.exec(o))&&(v=d.index+d[0].length,!(v>f&&(c.push(o.slice(f,d.index)),!r&&d.length>1&&d[0].replace(p,function(){for(var m=1;m<arguments.length-2;m++)arguments[m]===t&&(d[m]=t)}),d.length>1&&d.index<o.length&&Array.prototype.push.apply(c,d.slice(1)),h=d[0].length,f=v,c.length>=a)));)u.lastIndex===d.index&&u.lastIndex++;return f===o.length?(h||!u.test(""))&&c.push(""):c.push(o.slice(f)),c.length>a?c.slice(0,a):c},i})()),Nt}var jt,ve;function or(){if(ve)return jt;ve=1;var e=[].indexOf;return jt=function(t,n){if(e)return t.indexOf(n);for(var r=0;r<t.length;++r)if(t[r]===n)return r;return-1},jt}var Rt,_e;function ir(){if(_e)return Rt;_e=1;var e=or();Rt=t;function t(i){var o=i.classList;if(o)return o;var s={add:a,remove:c,contains:l,toggle:f,toString:u,length:0,item:p};return s;function a(h){var m=d();e(m,h)>-1||(m.push(h),v(m))}function c(h){var m=d(),_=e(m,h);_!==-1&&(m.splice(_,1),v(m))}function l(h){return e(d(),h)>-1}function f(h){return l(h)?(c(h),!1):(a(h),!0)}function u(){return i.className}function p(h){var m=d();return m[h]||null}function d(){var h=i.className;return n(h.split(" "),r)}function v(h){var m=h.length;i.className=h.join(" "),s.length=m;for(var _=0;_<h.length;_++)s[_]=h[_];delete h[m]}}function n(i,o){for(var s=[],a=0;a<i.length;a++)o(i[a])&&s.push(i[a]);return s}function r(i){return!!i}return Rt}const sr={},ar=Object.freeze(Object.defineProperty({__proto__:null,default:sr},Symbol.toStringTag,{value:"Module"})),cr=nr(ar);var ye;function lr(){if(ye)return Ht.exports;ye=1;var e=rr(),t=ir(),n=typeof window>"u"?cr:window,r=n.document,i=n.Text;function o(){var f=[];function u(){var p=[].slice.call(arguments),d=null;function v(h){var m;function _(g){var S=e(g,/([\.#]?[^\s#.]+)/);/^\.|#/.test(S[1])&&(d=r.createElement("div")),c(S,function(A){var W=A.substring(1,A.length);A&&(d?A[0]==="."?t(d).add(W):A[0]==="#"&&d.setAttribute("id",W):d=r.createElement(A))})}if(h!=null){if(typeof h=="string")d?d.appendChild(m=r.createTextNode(h)):_(h);else if(typeof h=="number"||typeof h=="boolean"||h instanceof Date||h instanceof RegExp)d.appendChild(m=r.createTextNode(h.toString()));else if(l(h))c(h,v);else if(a(h))d.appendChild(m=h);else if(h instanceof i)d.appendChild(m=h);else if(typeof h=="object")for(var b in h)if(typeof h[b]=="function")/^on\w+/.test(b)?(function(g,S){d.addEventListener?(d.addEventListener(g.substring(2),S[g],!1),f.push(function(){d.removeEventListener(g.substring(2),S[g],!1)})):(d.attachEvent(g,S[g]),f.push(function(){d.detachEvent(g,S[g])}))})(b,h):(d[b]=h[b](),f.push(h[b](function(g){d[b]=g})));else if(b==="style")if(typeof h[b]=="string")d.style.cssText=h[b];else for(var N in h[b])(function(g,S){if(typeof S=="function")d.style.setProperty(g,S()),f.push(S(function(W){d.style.setProperty(g,W)}));else var A=h[b][g].match(/(.*)\W+!important\W*$/);A?d.style.setProperty(g,A[1],"important"):d.style.setProperty(g,h[b][g])})(N,h[b][N]);else if(b==="attrs")for(var C in h[b])d.setAttribute(C,h[b][C]);else b.substr(0,5)==="data-"?d.setAttribute(b,h[b]):d[b]=h[b];else if(typeof h=="function"){var C=h();d.appendChild(m=a(C)?C:r.createTextNode(C)),f.push(h(function(S){a(S)&&m.parentElement?(m.parentElement.replaceChild(S,m),m=S):m.textContent=S}))}}return m}for(;p.length;)v(p.shift());return d}return u.cleanup=function(){for(var p=0;p<f.length;p++)f[p]();f.length=0},u}var s=Ht.exports=o();s.context=o;function a(f){return f&&f.nodeName&&f.nodeType}function c(f,u){if(f.forEach)return f.forEach(u);for(var p=0;p<f.length;p++)u(f[p],p)}function l(f){return Object.prototype.toString.call(f)=="[object Array]"}return Ht.exports}var ur=lr();const B=er(ur);function I(e){if(!e.shadowRoot)throw new Error("There is no shadow root on the element !");return e.shadowRoot}function z(e){const t=Array.isArray(e)?e:[e],n=document.createElement("template");return n.innerHTML=t.map(r=>r.outerHTML).join(""),n}var zt=function(e,t){return zt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},zt(e,t)};function K(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");zt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function fr(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(f){try{l(r.next(f))}catch(u){s(u)}}function c(f){try{l(r.throw(f))}catch(u){s(u)}}function l(f){f.done?o(f.value):i(f.value).then(a,c)}l((r=r.apply(e,t||[])).next())})}function Ze(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=a(0),s.throw=a(1),s.return=a(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(f){return c([l,f])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,l[0]&&(n=0)),n;)try{if(r=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){n.label=l[1];break}if(l[0]===6&&n.label<o[1]){n.label=o[1],o=l;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(l);break}o[2]&&n.ops.pop(),n.trys.pop();continue}l=t.call(e,n)}catch(f){l=[6,f],i=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function ot(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function U(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],s;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function G(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function rt(e){return this instanceof rt?(this.v=e,this):new rt(e)}function dr(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(d){return function(v){return Promise.resolve(v).then(d,u)}}function a(d,v){r[d]&&(i[d]=function(h){return new Promise(function(m,_){o.push([d,h,m,_])>1||c(d,h)})},v&&(i[d]=v(i[d])))}function c(d,v){try{l(r[d](v))}catch(h){p(o[0][3],h)}}function l(d){d.value instanceof rt?Promise.resolve(d.value.v).then(f,u):p(o[0][2],d)}function f(d){c("next",d)}function u(d){c("throw",d)}function p(d,v){d(v),o.shift(),o.length&&c(o[0][0],o[0][1])}}function pr(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof ot=="function"?ot(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=e[o]&&function(s){return new Promise(function(a,c){s=e[o](s),i(a,c,s.done,s.value)})}}function i(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}}function y(e){return typeof e=="function"}function re(e){var t=function(r){Error.call(r),r.stack=new Error().stack},n=e(t);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var qt=re(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function xt(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var ut=(function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,n,r,i,o;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var a=ot(s),c=a.next();!c.done;c=a.next()){var l=c.value;l.remove(this)}}catch(h){t={error:h}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}else s.remove(this);var f=this.initialTeardown;if(y(f))try{f()}catch(h){o=h instanceof qt?h.errors:[h]}var u=this._finalizers;if(u){this._finalizers=null;try{for(var p=ot(u),d=p.next();!d.done;d=p.next()){var v=d.value;try{ge(v)}catch(h){o=o??[],h instanceof qt?o=G(G([],U(o)),U(h.errors)):o.push(h)}}}catch(h){r={error:h}}finally{try{d&&!d.done&&(i=p.return)&&i.call(p)}finally{if(r)throw r.error}}}if(o)throw new qt(o)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)ge(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}},e.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},e.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},e.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&xt(n,t)},e.prototype.remove=function(t){var n=this._finalizers;n&&xt(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=(function(){var t=new e;return t.closed=!0,t})(),e})(),tn=ut.EMPTY;function en(e){return e instanceof ut||e&&"closed"in e&&y(e.remove)&&y(e.add)&&y(e.unsubscribe)}function ge(e){y(e)?e():e.unsubscribe()}var hr={Promise:void 0},br={setTimeout:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,G([e,t],U(n)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function nn(e){br.setTimeout(function(){throw e})}function we(){}function mt(e){e()}var oe=(function(e){K(t,e);function t(n){var r=e.call(this)||this;return r.isStopped=!1,n?(r.destination=n,en(n)&&n.add(r)):r.destination=_r,r}return t.create=function(n,r,i){return new Wt(n,r,i)},t.prototype.next=function(n){this.isStopped||this._next(n)},t.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t})(ut),mr=(function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){dt(r)}},e.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){dt(r)}else dt(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){dt(n)}},e})(),Wt=(function(e){K(t,e);function t(n,r,i){var o=e.call(this)||this,s;return y(n)||!n?s={next:n??void 0,error:r??void 0,complete:i??void 0}:s=n,o.destination=new mr(s),o}return t})(oe);function dt(e){nn(e)}function vr(e){throw e}var _r={closed:!0,next:we,error:vr,complete:we},ie=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function ft(e){return e}function yr(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return rn(e)}function rn(e){return e.length===0?ft:e.length===1?e[0]:function(n){return e.reduce(function(r,i){return i(r)},n)}}var O=(function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(t,n,r){var i=this,o=wr(t)?t:new Wt(t,n,r);return mt(function(){var s=i,a=s.operator,c=s.source;o.add(a?a.call(o,c):c?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},e.prototype.forEach=function(t,n){var r=this;return n=$e(n),new n(function(i,o){var s=new Wt({next:function(a){try{t(a)}catch(c){o(c),s.unsubscribe()}},error:o,complete:i});r.subscribe(s)})},e.prototype._subscribe=function(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)},e.prototype[ie]=function(){return this},e.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return rn(t)(this)},e.prototype.toPromise=function(t){var n=this;return t=$e(t),new t(function(r,i){var o;n.subscribe(function(s){return o=s},function(s){return i(s)},function(){return r(o)})})},e.create=function(t){return new e(t)},e})();function $e(e){var t;return(t=e??hr.Promise)!==null&&t!==void 0?t:Promise}function gr(e){return e&&y(e.next)&&y(e.error)&&y(e.complete)}function wr(e){return e&&e instanceof oe||gr(e)&&en(e)}function $r(e){return y(e?.lift)}function H(e){return function(t){if($r(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function j(e,t,n,r,i){return new xr(e,t,n,r,i)}var xr=(function(e){K(t,e);function t(n,r,i,o,s,a){var c=e.call(this,n)||this;return c.onFinalize=s,c.shouldUnsubscribe=a,c._next=r?function(l){try{r(l)}catch(f){n.error(f)}}:e.prototype._next,c._error=o?function(l){try{o(l)}catch(f){n.error(f)}finally{this.unsubscribe()}}:e.prototype._error,c._complete=i?function(){try{i()}catch(l){n.error(l)}finally{this.unsubscribe()}}:e.prototype._complete,c}return t.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},t})(oe),Sr=re(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),on=(function(e){K(t,e);function t(){var n=e.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return t.prototype.lift=function(n){var r=new xe(this,this);return r.operator=n,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new Sr},t.prototype.next=function(n){var r=this;mt(function(){var i,o;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=ot(r.currentObservers),a=s.next();!a.done;a=s.next()){var c=a.value;c.next(n)}}catch(l){i={error:l}}finally{try{a&&!a.done&&(o=s.return)&&o.call(s)}finally{if(i)throw i.error}}}})},t.prototype.error=function(n){var r=this;mt(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},t.prototype.complete=function(){var n=this;mt(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(n){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,n)},t.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},t.prototype._innerSubscribe=function(n){var r=this,i=this,o=i.hasError,s=i.isStopped,a=i.observers;return o||s?tn:(this.currentObservers=null,a.push(n),new ut(function(){r.currentObservers=null,xt(a,n)}))},t.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,o=r.thrownError,s=r.isStopped;i?n.error(o):s&&n.complete()},t.prototype.asObservable=function(){var n=new O;return n.source=this,n},t.create=function(n,r){return new xe(n,r)},t})(O),xe=(function(e){K(t,e);function t(n,r){var i=e.call(this)||this;return i.destination=n,i.source=r,i}return t.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},t.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},t.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},t.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:tn},t})(on),Er={now:function(){return Date.now()}},kr=(function(e){K(t,e);function t(n,r){return e.call(this)||this}return t.prototype.schedule=function(n,r){return this},t})(ut),Se={setInterval:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setInterval.apply(void 0,G([e,t],U(n)))},clearInterval:function(e){return clearInterval(e)},delegate:void 0},Tr=(function(e){K(t,e);function t(n,r){var i=e.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return t.prototype.schedule=function(n,r){var i;if(r===void 0&&(r=0),this.closed)return this;this.state=n;var o=this.id,s=this.scheduler;return o!=null&&(this.id=this.recycleAsyncId(s,o,r)),this.pending=!0,this.delay=r,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(s,this.id,r),this},t.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),Se.setInterval(n.flush.bind(n,this),i)},t.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;r!=null&&Se.clearInterval(r)},t.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(n,r){var i=!1,o;try{this.work(n)}catch(s){i=!0,o=s||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),o},t.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,o=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,xt(o,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},t})(kr),Ee=(function(){function e(t,n){n===void 0&&(n=e.now),this.schedulerActionCtor=t,this.now=n}return e.prototype.schedule=function(t,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,t).schedule(r,n)},e.now=Er.now,e})(),Ir=(function(e){K(t,e);function t(n,r){r===void 0&&(r=Ee.now);var i=e.call(this,n,r)||this;return i.actions=[],i._active=!1,i}return t.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},t})(Ee),Cr=new Ir(Tr),sn=new O(function(e){return e.complete()});function Ar(e){return e&&y(e.schedule)}function se(e){return e[e.length-1]}function an(e){return y(se(e))?e.pop():void 0}function It(e){return Ar(se(e))?e.pop():void 0}function Or(e,t){return typeof se(e)=="number"?e.pop():t}var ae=(function(e){return e&&typeof e.length=="number"&&typeof e!="function"});function cn(e){return y(e?.then)}function ln(e){return y(e[ie])}function un(e){return Symbol.asyncIterator&&y(e?.[Symbol.asyncIterator])}function fn(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Pr(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var dn=Pr();function pn(e){return y(e?.[dn])}function hn(e){return dr(this,arguments,function(){var n,r,i,o;return Ze(this,function(s){switch(s.label){case 0:n=e.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,rt(n.read())];case 3:return r=s.sent(),i=r.value,o=r.done,o?[4,rt(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,rt(i)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function bn(e){return y(e?.getReader)}function Z(e){if(e instanceof O)return e;if(e!=null){if(ln(e))return Lr(e);if(ae(e))return Mr(e);if(cn(e))return Hr(e);if(un(e))return mn(e);if(pn(e))return Nr(e);if(bn(e))return jr(e)}throw fn(e)}function Lr(e){return new O(function(t){var n=e[ie]();if(y(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Mr(e){return new O(function(t){for(var n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function Hr(e){return new O(function(t){e.then(function(n){t.closed||(t.next(n),t.complete())},function(n){return t.error(n)}).then(null,nn)})}function Nr(e){return new O(function(t){var n,r;try{for(var i=ot(e),o=i.next();!o.done;o=i.next()){var s=o.value;if(t.next(s),t.closed)return}}catch(a){n={error:a}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}t.complete()})}function mn(e){return new O(function(t){Rr(e,t).catch(function(n){return t.error(n)})})}function jr(e){return mn(hn(e))}function Rr(e,t){var n,r,i,o;return fr(this,void 0,void 0,function(){var s,a;return Ze(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),n=pr(e),c.label=1;case 1:return[4,n.next()];case 2:if(r=c.sent(),!!r.done)return[3,4];if(s=r.value,t.next(s),t.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=c.sent(),i={error:a},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(o=n.return)?[4,o.call(n)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function Y(e,t,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var o=t.schedule(function(){n(),i?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(o),!i)return o}function vn(e,t){return t===void 0&&(t=0),H(function(n,r){n.subscribe(j(r,function(i){return Y(r,e,function(){return r.next(i)},t)},function(){return Y(r,e,function(){return r.complete()},t)},function(i){return Y(r,e,function(){return r.error(i)},t)}))})}function _n(e,t){return t===void 0&&(t=0),H(function(n,r){r.add(e.schedule(function(){return n.subscribe(r)},t))})}function qr(e,t){return Z(e).pipe(_n(t),vn(t))}function Fr(e,t){return Z(e).pipe(_n(t),vn(t))}function Dr(e,t){return new O(function(n){var r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function Ur(e,t){return new O(function(n){var r;return Y(n,t,function(){r=e[dn](),Y(n,t,function(){var i,o,s;try{i=r.next(),o=i.value,s=i.done}catch(a){n.error(a);return}s?n.complete():n.next(o)},0,!0)}),function(){return y(r?.return)&&r.return()}})}function yn(e,t){if(!e)throw new Error("Iterable cannot be null");return new O(function(n){Y(n,t,function(){var r=e[Symbol.asyncIterator]();Y(n,t,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function Br(e,t){return yn(hn(e),t)}function zr(e,t){if(e!=null){if(ln(e))return qr(e,t);if(ae(e))return Dr(e,t);if(cn(e))return Fr(e,t);if(un(e))return yn(e,t);if(pn(e))return Ur(e,t);if(bn(e))return Br(e,t)}throw fn(e)}function Ct(e,t){return t?zr(e,t):Z(e)}var gn=re(function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}});function k(e,t){return H(function(n,r){var i=0;n.subscribe(j(r,function(o){r.next(e.call(t,o,i++))}))})}var Wr=Array.isArray;function Vr(e,t){return Wr(t)?e.apply(void 0,G([],U(t))):e(t)}function ce(e){return k(function(t){return Vr(e,t)})}var Yr=Array.isArray,Gr=Object.getPrototypeOf,Jr=Object.prototype,Kr=Object.keys;function Qr(e){if(e.length===1){var t=e[0];if(Yr(t))return{args:t,keys:null};if(Xr(t)){var n=Kr(t);return{args:n.map(function(r){return t[r]}),keys:n}}}return{args:e,keys:null}}function Xr(e){return e&&typeof e=="object"&&Gr(e)===Jr}function Zr(e,t){return e.reduce(function(n,r,i){return n[r]=t[i],n},{})}function to(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=It(e),r=an(e),i=Qr(e),o=i.args,s=i.keys;if(o.length===0)return Ct([],n);var a=new O(wn(o,n,s?function(c){return Zr(s,c)}:ft));return r?a.pipe(ce(r)):a}function wn(e,t,n){return n===void 0&&(n=ft),function(r){ke(t,function(){for(var i=e.length,o=new Array(i),s=i,a=i,c=function(f){ke(t,function(){var u=Ct(e[f],t),p=!1;u.subscribe(j(r,function(d){o[f]=d,p||(p=!0,a--),a||r.next(n(o.slice()))},function(){--s||r.complete()}))},r)},l=0;l<i;l++)c(l)},r)}}function ke(e,t,n){e?Y(n,e,t):t()}function eo(e,t,n,r,i,o,s,a){var c=[],l=0,f=0,u=!1,p=function(){u&&!c.length&&!l&&t.complete()},d=function(h){return l<r?v(h):c.push(h)},v=function(h){l++;var m=!1;Z(n(h,f++)).subscribe(j(t,function(_){t.next(_)},function(){m=!0},void 0,function(){if(m)try{l--;for(var _=function(){var b=c.shift();s||v(b)};c.length&&l<r;)_();p()}catch(b){t.error(b)}}))};return e.subscribe(j(t,d,function(){u=!0,p()})),function(){}}function le(e,t,n){return n===void 0&&(n=1/0),y(t)?le(function(r,i){return k(function(o,s){return t(r,o,i,s)})(Z(e(r,i)))},n):(typeof t=="number"&&(n=t),H(function(r,i){return eo(r,i,e,n)}))}function $n(e){return e===void 0&&(e=1/0),le(ft,e)}function no(){return $n(1)}function Te(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return no()(Ct(e,It(e)))}var ro=["addListener","removeListener"],oo=["addEventListener","removeEventListener"],io=["on","off"];function P(e,t,n,r){if(y(n)&&(r=n,n=void 0),r)return P(e,t,n).pipe(ce(r));var i=U(co(e)?oo.map(function(a){return function(c){return e[a](t,c,n)}}):so(e)?ro.map(Ie(e,t)):ao(e)?io.map(Ie(e,t)):[],2),o=i[0],s=i[1];if(!o&&ae(e))return le(function(a){return P(a,t,n)})(Z(e));if(!o)throw new TypeError("Invalid event target");return new O(function(a){var c=function(){for(var l=[],f=0;f<arguments.length;f++)l[f]=arguments[f];return a.next(1<l.length?l:l[0])};return o(c),function(){return s(c)}})}function Ie(e,t){return function(n){return function(r){return e[n](t,r)}}}function so(e){return y(e.addListener)&&y(e.removeListener)}function ao(e){return y(e.on)&&y(e.off)}function co(e){return y(e.addEventListener)&&y(e.removeEventListener)}function lo(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=It(e),r=Or(e,1/0),i=e;return i.length?i.length===1?Z(i[0]):$n(r)(Ct(i,n)):sn}var uo=Array.isArray;function fo(e){return e.length===1&&uo(e[0])?e[0]:e}function st(e,t){return H(function(n,r){var i=0;n.subscribe(j(r,function(o){return e.call(t,o,i++)&&r.next(o)}))})}function xn(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=an(e);return n?yr(xn.apply(void 0,G([],U(e))),ce(n)):H(function(r,i){wn(G([r],U(fo(e))))(i)})}function Ft(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return xn.apply(void 0,G([],U(e)))}function po(e,t){return t===void 0&&(t=Cr),H(function(n,r){var i=null,o=null,s=null,a=function(){if(i){i.unsubscribe(),i=null;var l=o;o=null,r.next(l)}};function c(){var l=s+e,f=t.now();if(f<l){i=this.schedule(void 0,l-f),r.add(i);return}a()}n.subscribe(j(r,function(l){o=l,s=t.now(),i||(i=t.schedule(c,e),r.add(i))},function(){a(),r.complete()},void 0,function(){o=i=null}))})}function ho(e){return H(function(t,n){var r=!1;t.subscribe(j(n,function(i){r=!0,n.next(i)},function(){r||n.next(e),n.complete()}))})}function bo(e){return e<=0?function(){return sn}:H(function(t,n){var r=0;t.subscribe(j(n,function(i){++r<=e&&(n.next(i),e<=r&&n.complete())}))})}function Ce(e){return k(function(){return e})}function mo(e){return e===void 0&&(e=vo),H(function(t,n){var r=!1;t.subscribe(j(n,function(i){r=!0,n.next(i)},function(){return r?n.complete():n.error(e())}))})}function vo(){return new gn}function _o(e,t){var n=arguments.length>=2;return function(r){return r.pipe(ft,bo(1),n?ho(t):mo(function(){return new gn}))}}function yo(){return H(function(e,t){var n,r=!1;e.subscribe(j(t,function(i){var o=n;n=i,r&&t.next([o,i]),r=!0}))})}function pt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=It(e);return H(function(r,i){(n?Te(e,r,n):Te(e,r)).subscribe(i)})}function Sn(){return!document.hidden}function go(){const e=P(document,"visibilitychange"),t=P(window,"focus").pipe(Ce(!0)),n=P(window,"blur").pipe(Ce(!1)),r=lo(t,n);return to(e,r).pipe(k(([,i])=>Sn()&&i),st(i=>i),_o())}const wo=P(document,"mouseover");async function $o(){Sn()||await Promise.race([go().toPromise(),wo.toPromise()])}async function xo(){await new Promise(e=>setTimeout(e,400)),await $o(),await new Promise(e=>setTimeout(e,400))}const So=xo();function E(e,t){const n=e.querySelector(t);if(!n)throw new Error(`Failed to find element ${t} !`);return n}const Eo=J.bind(B),ko="crumbs-p",To=z(Eo`
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
`);let Io=class extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const t=I(this),n=To.content.cloneNode(!0);t.appendChild(n)}};customElements.define(ko,Io);const Co=J.bind(B),Ao="crumbs-panel",Oo=z(Co`
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
`);class Po extends HTMLElement{contentTimeoutElapsed=!1;contentLoaded=!1;connected=!1;loading="100";scrolled=!1;scrolledSubscription=null;static get observedAttributes(){return["panel-loading","panel-title"]}async connectedCallback(){this.attachShadow({mode:"open"}),await So;const t=I(this),n=Oo.content.cloneNode(!0);t.appendChild(n);const r=this.getAttribute("panel-loading");r!==null&&Ae(r)&&(this.loading=r),setTimeout(()=>{E(t,"#panel-container");const i=E(t,"#panel");i.style.backgroundColor="rgba(255, 255, 255, 0.37)";const o=E(t,"#panel-content");this.scrolledSubscription=P(o,"scroll").pipe(k(s=>s.target.scrollTop),k(s=>s!==0)).subscribe(s=>{this.scrolled=s,this.render()}),this.render()},10),setTimeout(()=>{this.contentTimeoutElapsed=!0,this.render()},200),this.connected=!0,this.render()}render(){const t=I(this),n=E(t,"#panel-content"),r=E(t,"#panel-loading");E(t,"#panel");const i=E(t,"#panel-title-content"),o=E(t,"#panel-footer-wrapper"),s=t.querySelector('slot[name="footer"]');s&&s.assignedElements().length>0?(o.style.display="flex",n.style.paddingBottom="5.8rem",n.style.mask="linear-gradient(0deg,rgba(255, 255, 255, 0) 4.5rem, rgba(0, 0, 0, 1) 7rem)"):(o.style.display="none",n.style.paddingBottom="2.5rem",n.style.mask="none"),this.contentTimeoutElapsed&&Lo(this.loading)?(n.style.opacity="1",n.style.overflow="auto"):(n.style.opacity="0",n.style.overflow="hidden"),r.style.width=`${this.loading}%`;const a=E(t,"#panel-title");this.loading==="100"&&this.getAttribute("panel-title")&&!this.scrolled?setTimeout(()=>{a.style.opacity="1",i.innerHTML=this.getAttribute("panel-title")||""},10):a.style.opacity="0"}attributeChangedCallback(){if(this.shadowRoot&&this.connected){const t=this.getAttribute("panel-loading");t!==null&&Ae(t)?this.loading=t:t===null&&(this.loading="100"),this.render()}}disconnectedCallback(){this.scrolledSubscription?.unsubscribe()}}function Ae(e){const t=Number(e),n=Math.floor(t);return n===t&&Number.isInteger(n)&&Number.isFinite(n)&&n<=100&&n>=0}function Lo(e){return e===null||e==="100"}customElements.define(Ao,Po);const Mo=J.bind(B),Ho="crumbs-input",No=z(Mo`
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

		input::placeholder {
			opacity: 0.6;
		}
	</style>

	<input type="text"/>
`);class jo extends HTMLElement{static get observedAttributes(){return["value","placeholder"]}async connectedCallback(){this.attachShadow({mode:"open"});const t=I(this),n=No.content.cloneNode(!0);t.appendChild(n);const r=E(t,"input"),i=this.getAttribute("value"),o=this.getAttribute("placeholder");r instanceof HTMLInputElement&&(i&&(r.value=i),o&&(r.placeholder=o))}attributeChangedCallback(t,n,r){if(this.shadowRoot){const i=I(this),o=E(i,"input");o instanceof HTMLInputElement&&(t==="value"?o.value=r:t==="placeholder"&&(o.placeholder=r))}}}customElements.define(Ho,jo);const Vt=J.bind(B),Ro="crumbs-tabs",qo=z(Vt`
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
`);class Fo extends HTMLElement{selected=1;subscriptions=[];async connectedCallback(){this.attachShadow({mode:"open"});const t=I(this),n=qo.content.cloneNode(!0);t.appendChild(n);const r=this.getAttribute("selected");this.selected=Number.parseInt(r||"1",10);const i=t.querySelector("#tabs"),o=t.querySelector("#content");if(!i)throw new Error("Tabs not found");if(!o)throw new Error("Content not found");for(const s of{[Symbol.iterator]:()=>this.getSlots()}){if(s.startsWith("content-")){const a=Vt`<div id=${`${s}`}> <slot name=${s}></slot> </div>`;a instanceof Element&&o.appendChild(a)}if(s.startsWith("title-")){const a=Vt`<div id=${s}> <crumbs-p> <slot name=${s}></slot> </crumbs-p> </div>`;a instanceof Element&&i.appendChild(a)}}this.subscriptions=[...i.children].map((s,a)=>P(s,"click").subscribe(()=>{const c=s.id.replace("title-","content-"),l=t.querySelector(`#${c}`);l instanceof HTMLElement&&o instanceof HTMLElement&&l.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.selected=a+1,this.render()})),this.render()}render(){const n=I(this).querySelector("#tabs");if(!n)throw new Error("Tabs not found");[...n.children].forEach((r,i)=>{i+1===this.selected?r instanceof HTMLElement&&r.classList.add("selected-title"):r instanceof HTMLElement&&r.classList.remove("selected-title")})}disconnectedCallback(){for(const t of this.subscriptions)t.unsubscribe()}*getSlots(){for(const t of Array.from(this.children)){const n=t.getAttribute("slot");n&&(yield n)}}}customElements.define(Ro,Fo);var En=function(e,t,n,r){var i;t[0]=0;for(var o=1;o<t.length;o++){var s=t[o++],a=t[o]?(t[0]|=s?1:2,n[t[o++]]):t[++o];s===3?r[0]=a:s===4?r[1]=Object.assign(r[1]||{},a):s===5?(r[1]=r[1]||{})[t[++o]]=a:s===6?r[1][t[++o]]+=a+"":s?(i=e.apply(a,En(e,a,n,["",null])),r.push(i),a[0]?t[0]|=2:(t[o-2]=0,t[o]=i)):r.push(a)}return r},Oe=new Map;function Do(e){var t=Oe.get(this);return t||(t=new Map,Oe.set(this,t)),(t=En(this,t.get(e)||(t.set(e,t=(function(n){for(var r,i,o=1,s="",a="",c=[0],l=function(p){o===1&&(p||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,p,s):o===3&&(p||s)?(c.push(3,p,s),o=2):o===2&&s==="..."&&p?c.push(4,p,0):o===2&&s&&!p?c.push(5,0,!0,s):o>=5&&((s||!p&&o===5)&&(c.push(o,0,s,i),o=6),p&&(c.push(o,p,0,i),o=6)),s=""},f=0;f<n.length;f++){f&&(o===1&&l(),l(f));for(var u=0;u<n[f].length;u++)r=n[f][u],o===1?r==="<"?(l(),c=[c],o=3):s+=r:o===4?s==="--"&&r===">"?(o=1,s=""):s=r+s[0]:a?r===a?a="":s+=r:r==='"'||r==="'"?a=r:r===">"?(l(),o=1):o&&(r==="="?(o=5,i=s,s=""):r==="/"&&(o<5||n[f][u+1]===">")?(l(),o===3&&(c=c[0]),o=c,(c=c[0]).push(2,0,o),o=0):r===" "||r==="	"||r===`
`||r==="\r"?(l(),o=2):s+=r),o===3&&s==="!--"&&(o=4,c=c[0])}return l(),c})(e)),t),arguments,[])).length>1?t:t[0]}function Uo(){return e=>e.pipe(k(([t,n,r])=>t||n||r>0&&r<100))}function Bo(){return e=>e.pipe(k(([t,n])=>n?100:t||0))}const zo=Do.bind(B),Wo="crumbs-button";class Vo extends HTMLElement{_renderSubscription=null;_clickSubscription=null;_attributeChanges$=new on;_parsedProgress$;_parsedDisabled$;_parsedIndeterminateProgress$;_loading$;_activeIndeterminateProgress$;_disabled$;_loadingBarTransitionEnabled$;constructor(){super(),this._parsedProgress$=this._attributeChanges$.pipe(st(([t])=>t==="progress"),k(([t,n])=>n),k(Number),st(t=>Number.isInteger(t)&&t<=100)),this._parsedIndeterminateProgress$=this._attributeChanges$.pipe(st(([t])=>t==="indeterminate-progress"),k(([t,n])=>n),k(t=>t!==null)),this._parsedDisabled$=this._attributeChanges$.pipe(st(([t])=>t==="disabled"),k(([t,n])=>n),k(t=>t!==null&&t!=="false")),this._loading$=this._parsedProgress$.pipe(Ft(this._parsedIndeterminateProgress$),Bo(),pt(0)),this._activeIndeterminateProgress$=this._parsedIndeterminateProgress$.pipe(pt(!1)),this._disabled$=this._parsedDisabled$.pipe(Ft(this._activeIndeterminateProgress$,this._loading$),Uo(),pt(!1)),this._loadingBarTransitionEnabled$=this._loading$.pipe(yo(),k(([t,n])=>n>=t),pt(!1))}static get observedAttributes(){return["progress","disabled","indeterminate-progress"]}async connectedCallback(){this.attachShadow({mode:"open"}),I(this).appendChild(Yo.content.cloneNode(!0)),this._renderSubscription=this._disabled$.pipe(Ft(this._loading$,this._activeIndeterminateProgress$,this._loadingBarTransitionEnabled$)).subscribe(n=>{this.render(...n)}),this._attributeChanges$.next(["disabled",this.getAttribute("disabled")]),this._attributeChanges$.next(["progress",this.getAttribute("progress")]),this._attributeChanges$.next(["indeterminate-progress",this.getAttribute("indeterminate-progress")])}attributeChangedCallback(t){this._attributeChanges$.next([t,this.getAttribute(t)])}render(t,n,r,i){if(!this.shadowRoot)return;const o=I(this),s=E(o,"#progress"),a=E(o,"button"),c=E(o,"progress");a instanceof HTMLButtonElement&&(a.disabled=t),r?(a.classList.remove("indeterminate-loading-end"),a.classList.add("indeterminate-loading"),c instanceof HTMLProgressElement&&c.removeAttribute("value")):(a.classList.add("indeterminate-loading-end"),setTimeout(()=>{a.classList.remove("indeterminate-loading")},500)),i?s.classList.add("transition"):s.classList.remove("transition"),s.style.width=`${n}%`,!r&&c instanceof HTMLProgressElement&&(c.value=n)}disconnectedCallback(){this._clickSubscription?.unsubscribe(),this._renderSubscription?.unsubscribe()}}customElements.define(Wo,Vo);const Yo=z(zo`
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
`),vt=J.bind(B),Go="crumbs-nav",Jo=z(vt`
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
`);class Ko extends HTMLElement{selected=1;subscriptions=[];navOpen=!1;async connectedCallback(){this.attachShadow({mode:"open"});const t=I(this),n=Jo.content.cloneNode(!0);t.appendChild(n);const r=this.getAttribute("selected");this.selected=Number.parseInt(r||"1",10);const i=t.querySelector("#content"),o=t.querySelector("#navbar");if(!(i instanceof HTMLElement))throw new Error("Content is not HTMLElement !");if(!(o instanceof HTMLElement))throw new Error("navbar is not HTMLElement !");for(const s of{[Symbol.iterator]:()=>this.getSlots()}){if(s.startsWith("content-")){const a=vt`<div id=${`${s}`}> <div> <slot name=${s}></slot> </div> </div>`;a instanceof HTMLElement&&i instanceof HTMLElement&&(i.appendChild(a),this.subscriptions.push(P(a,"click").subscribe(c=>{if(!this.navOpen)return;c.stopPropagation(),c.preventDefault();const l=c.target;l instanceof HTMLElement&&(setTimeout(()=>{l.scrollIntoView({behavior:"instant"})},50),this.navOpen=!1,this.render())})))}if(s.startsWith("title-")){const a=vt`<div id=${s} className="nav-title-wrapper"> <span> <slot name=${s}></slot> </span> </div>`;a instanceof Element&&(o.appendChild(a),this.subscriptions.push(P(a,"click").subscribe(c=>{if(this.navOpen)return;const l=s.replace("title-","content-"),f=t.querySelector(`#${l}`);f instanceof HTMLElement&&f.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})))}if(s.startsWith("navigation-toggle")){const a=vt`<div id=${s} className="nav-title-wrapper"> <span> <slot name=${s}></slot> </span> </div>`;a instanceof Element&&(o.appendChild(a),this.subscriptions.push(P(a,"click").subscribe(c=>{if(this.navOpen)return;t.querySelector(`#${s}`)instanceof HTMLElement&&(this.navOpen=!0,this.render())})))}}this.subscriptions.push(P(i,"scroll").pipe(k(()=>{const s=i.scrollLeft,a=i.clientWidth,c=Math.round(s/a)+1,l=Array.from(i.children).filter(f=>f.id&&f.id.startsWith("content-"));return c>=1&&c<=l.length?c:null})).subscribe(s=>{!this.navOpen&&s!==null&&(this.selected=s,this.render())})),this.subscriptions.push(P(window,"resize").pipe(po(200)).subscribe(()=>{this._handleResize()})),this.render()}async render(){const t=I(this),n=t.querySelector("#content"),r=t.querySelector("#navbar");if(!n)throw new Error("Content not found");if(!(r instanceof HTMLElement))throw new Error("navbar is not HTMLElement !");r.style.visibility=this.navOpen?"hidden":"visible",[...r.children].forEach(i=>{Number.parseInt(i.id.split("-")[1],10)===this.selected?i instanceof HTMLElement&&i.classList.add("selected-title"):i instanceof HTMLElement&&i.classList.remove("selected-title")}),n.style.willChange="auto";for(const i of{[Symbol.iterator]:()=>this.getSlots()})if(i.startsWith("content-")){const o=t.querySelector(i);o instanceof HTMLElement&&(o.style.willChange="auto")}await new Promise(i=>setTimeout(i,5)),this.navOpen?(n.classList.add("content-nav-mode"),await new Promise(i=>setTimeout(i,105))):n.classList.remove("content-nav-mode2"),this.navOpen?n.classList.add("content-nav-mode2"):n.classList.remove("content-nav-mode");for(const i of{[Symbol.iterator]:()=>this.getSlots()})if(i.startsWith("content-")){const o=t.querySelector(i);o instanceof HTMLElement&&(o.style.willChange="initial")}n.style.willChange="initial"}_handleResize(){const t=I(this),n=t.querySelector("#content");if(!n)return;const r=n.scrollWidth-n.clientWidth;r>0&&n.scrollLeft/r;const i=t.querySelector("#navbar");let o=0;i instanceof HTMLElement&&(o=Array.from(i.children).filter(f=>f.id&&f.id.startsWith("title-")).length);const s=(this.selected-1)*n.clientWidth,a=1,c=n.scrollLeft<s-a,l=n.scrollLeft>s+a;this.selected>=1&&this.selected<=o?c?n.scrollBy(1,0):l?n.scrollBy(-1,0):n.scrollBy(1,0):n.scrollBy(1,0)}disconnectedCallback(){for(const t of this.subscriptions)t.unsubscribe()}*getSlots(){for(const t of Array.from(this.children)){const n=t.getAttribute("slot");n&&(yield n)}}}customElements.define(Go,Ko);const Qo=J.bind(B),Xo="crumbs-frame",Zo=z(Qo`
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
`);class ti extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const t=I(this),n=Zo.content.cloneNode(!0);t.appendChild(n)}}customElements.define(Xo,ti);const ei=J.bind(B),ni="crumbs-new-content-indicator",ri=z(ei`
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
`);class oi extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const t=I(this),n=ri.content.cloneNode(!0);t.appendChild(n)}}customElements.define(ni,oi);const ii=J.bind(B),si="crumbs-switch",ai=z(ii`
	<style>
		:host {
			display: inline-block;
		}

		.switch {
			display: grid;
			grid-template: 1fr / 1fr;
			align-items: center;
			justify-items: center;
			width: 50px;
			height: 28px;
			cursor: pointer;
			user-select: none;
		}

		.switch input[type="checkbox"] {
			grid-column: 1;
			grid-row: 1;
			width: 100%;
			height: 100%;
			margin: 0;
			appearance: none;
			cursor: pointer;
		}

		.toggle {
			grid-column: 1;
			grid-row: 1;
			width: 100%;
			height: 100%;
			border-radius: 14px;
			background-color: transparent;
			transition: background-color 0.3s ease;
			box-shadow: inset 2px 2px 6px 0px rgba(0, 0, 0, 0.29),
				inset -2px -2px 3px #ffffffa8,
				2px 2px 1px 0px #ffffff1c,
				-2px -2px 1px rgba(0, 0, 0, 0.02);
			pointer-events: none;
		}

		.thumb {
			grid-column: 1;
			grid-row: 1;
			width: 24px;
			height: 24px;
			background-color: #ffffffc4;
			border-radius: 50%;
			align-self: center;
			justify-self: start;
			margin-left: 2px;
			transform: translateX(0);
			transition: transform 0.3s ease;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
			pointer-events: none;
		}

		.switch input[type="checkbox"]:checked ~ .toggle {
			background-color:#4c94ff;
		}

		.switch input[type="checkbox"]:checked ~ .thumb {
			transform: translateX(22px);
			background-color: #ffffff;
		}

		.switch input[type="checkbox"]:disabled ~ .toggle {
			opacity: 0.5;
			cursor: not-allowed;
		}

		.switch input[type="checkbox"]:disabled ~ .thumb {
			background-color: #ffffff6e;
		}

		.switch input:disabled {
			cursor: not-allowed;
		}
	</style>

	<label className="switch">
		<input type="checkbox"/>
		<div className="toggle"></div>
		<div className="thumb"></div>
	</label>
`);class ci extends HTMLElement{static get observedAttributes(){return["checked","disabled"]}async connectedCallback(){this.attachShadow({mode:"open"});const t=I(this),n=ai.content.cloneNode(!0);t.appendChild(n);const r=E(t,'input[type="checkbox"]');if(r instanceof HTMLInputElement){const i=this.hasAttribute("checked"),o=this.hasAttribute("disabled");r.checked=i,r.disabled=o,r.addEventListener("change",s=>{const a=s.target.checked;this.setAttribute("checked",a?"true":""),this.dispatchEvent(new CustomEvent("change",{detail:{checked:a},bubbles:!0,composed:!0}))})}}attributeChangedCallback(t,n,r){if(!this.shadowRoot)return;const i=I(this),o=E(i,'input[type="checkbox"]');o instanceof HTMLInputElement&&(t==="checked"?o.checked=r==="true"||r==="":t==="disabled"&&(o.disabled=r!==null))}}customElements.define(si,ci);let li={data:""},ui=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||li},fi=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,di=/\/\*[^]*?\*\/|  +/g,Pe=/\n+/g,X=(e,t)=>{let n="",r="",i="";for(let o in e){let s=e[o];o[0]=="@"?o[1]=="i"?n=o+" "+s+";":r+=o[1]=="f"?X(s,o):o+"{"+X(s,o[1]=="k"?"":t)+"}":typeof s=="object"?r+=X(s,t?t.replace(/([^,])+/g,a=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,a):a?a+" "+c:c)):o):s!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=X.p?X.p(o,s):o+":"+s+";")}return n+(t&&i?t+"{"+i+"}":i)+r},q={},kn=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+kn(e[n]);return t}return e},pi=(e,t,n,r,i)=>{let o=kn(e),s=q[o]||(q[o]=(c=>{let l=0,f=11;for(;l<c.length;)f=101*f+c.charCodeAt(l++)>>>0;return"go"+f})(o));if(!q[s]){let c=o!==e?e:(l=>{let f,u,p=[{}];for(;f=fi.exec(l.replace(di,""));)f[4]?p.shift():f[3]?(u=f[3].replace(Pe," ").trim(),p.unshift(p[0][u]=p[0][u]||{})):p[0][f[1]]=f[2].replace(Pe," ").trim();return p[0]})(e);q[s]=X(i?{["@keyframes "+s]:c}:c,n?"":"."+s)}let a=n&&q.g?q.g:null;return n&&(q.g=q[s]),((c,l,f,u)=>{u?l.data=l.data.replace(u,c):l.data.indexOf(c)===-1&&(l.data=f?c+l.data:l.data+c)})(q[s],t,r,a),s},hi=(e,t,n)=>e.reduce((r,i,o)=>{let s=t[o];if(s&&s.call){let a=s(n),c=a&&a.props&&a.props.className||/^go/.test(a)&&a;s=c?"."+c:a&&typeof a=="object"?a.props?"":X(a,""):a===!1?"":a}return r+i+(s??"")},"");function M(e){let t=this||{},n=e.call?e(t.p):e;return pi(n.unshift?n.raw?hi(n,[].slice.call(arguments,1),t.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):n,ui(t.target),t.g,t.o,t.k)}M.bind({g:1});M.bind({k:1});var At,w,Tn,V,Le,In,Cn,Dt,_t,at,An,ue,Yt,Gt,St={},Et=[],bi=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ot=Array.isArray;function F(e,t){for(var n in t)e[n]=t[n];return e}function fe(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function On(e,t,n){var r,i,o,s={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:s[o]=t[o];if(arguments.length>2&&(s.children=arguments.length>3?At.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)s[o]===void 0&&(s[o]=e.defaultProps[o]);return yt(e,s,r,i,null)}function yt(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Tn,__i:-1,__u:0};return i==null&&w.vnode!=null&&w.vnode(o),o}function Pt(e){return e.children}function gt(e,t){this.props=e,this.context=t}function it(e,t){if(t==null)return e.__?it(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?it(e):null}function mi(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],o=F({},t);o.__v=t.__v+1,w.vnode&&w.vnode(o),de(e.__P,o,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??it(t),!!(32&t.__u),i),o.__v=t.__v,o.__.__k[o.__i]=o,Hn(r,o,i),t.__e=t.__=null,o.__e!=n&&Pn(o)}}function Pn(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),Pn(e)}function Me(e){(!e.__d&&(e.__d=!0)&&V.push(e)&&!kt.__r++||Le!=w.debounceRendering)&&((Le=w.debounceRendering)||In)(kt)}function kt(){try{for(var e,t=1;V.length;)V.length>t&&V.sort(Cn),e=V.shift(),t=V.length,mi(e)}finally{V.length=kt.__r=0}}function Ln(e,t,n,r,i,o,s,a,c,l,f){var u,p,d,v,h,m,_,b=r&&r.__k||Et,N=t.length;for(c=vi(n,t,b,c,N),u=0;u<N;u++)(d=n.__k[u])!=null&&(p=d.__i!=-1&&b[d.__i]||St,d.__i=u,m=de(e,d,p,i,o,s,a,c,l,f),v=d.__e,d.ref&&p.ref!=d.ref&&(p.ref&&pe(p.ref,null,d),f.push(d.ref,d.__c||v,d)),h==null&&v!=null&&(h=v),(_=!!(4&d.__u))||p.__k===d.__k?(c=Mn(d,c,e,_),_&&p.__e&&(p.__e=null)):typeof d.type=="function"&&m!==void 0?c=m:v&&(c=v.nextSibling),d.__u&=-7);return n.__e=h,c}function vi(e,t,n,r,i){var o,s,a,c,l,f=n.length,u=f,p=0;for(e.__k=new Array(i),o=0;o<i;o++)(s=t[o])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=e.__k[o]=yt(null,s,null,null,null):Ot(s)?s=e.__k[o]=yt(Pt,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=e.__k[o]=yt(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):e.__k[o]=s,c=o+p,s.__=e,s.__b=e.__b+1,a=null,(l=s.__i=_i(s,n,c,u))!=-1&&(u--,(a=n[l])&&(a.__u|=2)),a==null||a.__v==null?(l==-1&&(i>f?p--:i<f&&p++),typeof s.type!="function"&&(s.__u|=4)):l!=c&&(l==c-1?p--:l==c+1?p++:(l>c?p--:p++,s.__u|=4))):e.__k[o]=null;if(u)for(o=0;o<f;o++)(a=n[o])!=null&&(2&a.__u)==0&&(a.__e==r&&(r=it(a)),jn(a,a));return r}function Mn(e,t,n,r){var i,o;if(typeof e.type=="function"){for(i=e.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=e,t=Mn(i[o],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=it(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function _i(e,t,n,r){var i,o,s,a=e.key,c=e.type,l=t[n],f=l!=null&&(2&l.__u)==0;if(l===null&&a==null||f&&a==l.key&&c==l.type)return n;if(r>(f?1:0)){for(i=n-1,o=n+1;i>=0||o<t.length;)if((l=t[s=i>=0?i--:o++])!=null&&(2&l.__u)==0&&a==l.key&&c==l.type)return s}return-1}function He(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||bi.test(t)?n:n+"px"}function ht(e,t,n,r,i){var o,s;t:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||He(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||He(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(An,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n[at]=r[at]:(n[at]=ue,e.addEventListener(t,o?Gt:Yt,o)):e.removeEventListener(t,o?Gt:Yt,o);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Ne(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[_t]==null)t[_t]=ue++;else if(t[_t]<n[at])return;return n(w.event?w.event(t):t)}}}function de(e,t,n,r,i,o,s,a,c,l){var f,u,p,d,v,h,m,_,b,N,C,g,S,A,W,R=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),o=[a=t.__e=n.__e]),(f=w.__b)&&f(t);t:if(typeof R=="function")try{if(_=t.props,b=R.prototype&&R.prototype.render,N=(f=R.contextType)&&r[f.__c],C=f?N?N.props.value:f.__:r,n.__c?m=(u=t.__c=n.__c).__=u.__E:(b?t.__c=u=new R(_,C):(t.__c=u=new gt(_,C),u.constructor=R,u.render=gi),N&&N.sub(u),u.state||(u.state={}),u.__n=r,p=u.__d=!0,u.__h=[],u._sb=[]),b&&u.__s==null&&(u.__s=u.state),b&&R.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=F({},u.__s)),F(u.__s,R.getDerivedStateFromProps(_,u.__s))),d=u.props,v=u.state,u.__v=t,p)b&&R.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),b&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(b&&R.getDerivedStateFromProps==null&&_!==d&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(_,C),t.__v==n.__v||!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(_,u.__s,C)===!1){t.__v!=n.__v&&(u.props=_,u.state=u.__s,u.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(et){et&&(et.__=t)}),Et.push.apply(u.__h,u._sb),u._sb=[],u.__h.length&&s.push(u);break t}u.componentWillUpdate!=null&&u.componentWillUpdate(_,u.__s,C),b&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(d,v,h)})}if(u.context=C,u.props=_,u.__P=e,u.__e=!1,g=w.__r,S=0,b)u.state=u.__s,u.__d=!1,g&&g(t),f=u.render(u.props,u.state,u.context),Et.push.apply(u.__h,u._sb),u._sb=[];else do u.__d=!1,g&&g(t),f=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++S<25);u.state=u.__s,u.getChildContext!=null&&(r=F(F({},r),u.getChildContext())),b&&!p&&u.getSnapshotBeforeUpdate!=null&&(h=u.getSnapshotBeforeUpdate(d,v)),A=f!=null&&f.type===Pt&&f.key==null?Nn(f.props.children):f,a=Ln(e,Ot(A)?A:[A],t,n,r,i,o,s,a,c,l),u.base=t.__e,t.__u&=-161,u.__h.length&&s.push(u),m&&(u.__E=u.__=null)}catch(et){if(t.__v=null,c||o!=null)if(et.then){for(t.__u|=c?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;o[o.indexOf(a)]=null,t.__e=a}else{for(W=o.length;W--;)fe(o[W]);Jt(t)}else t.__e=n.__e,t.__k=n.__k,et.then||Jt(t);w.__e(et,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):a=t.__e=yi(n.__e,t,n,r,i,o,s,c,l);return(f=w.diffed)&&f(t),128&t.__u?void 0:a}function Jt(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(Jt))}function Hn(e,t,n){for(var r=0;r<n.length;r++)pe(n[r],n[++r],n[++r]);w.__c&&w.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(o){o.call(i)})}catch(o){w.__e(o,i.__v)}})}function Nn(e){return typeof e!="object"||e==null||e.__b>0?e:Ot(e)?e.map(Nn):F({},e)}function yi(e,t,n,r,i,o,s,a,c){var l,f,u,p,d,v,h,m=n.props||St,_=t.props,b=t.type;if(b=="svg"?i="http://www.w3.org/2000/svg":b=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((d=o[l])&&"setAttribute"in d==!!b&&(b?d.localName==b:d.nodeType==3)){e=d,o[l]=null;break}}if(e==null){if(b==null)return document.createTextNode(_);e=document.createElementNS(i,b,_.is&&_),a&&(w.__m&&w.__m(t,o),a=!1),o=null}if(b==null)m===_||a&&e.data==_||(e.data=_);else{if(o=o&&At.call(e.childNodes),!a&&o!=null)for(m={},l=0;l<e.attributes.length;l++)m[(d=e.attributes[l]).name]=d.value;for(l in m)d=m[l],l=="dangerouslySetInnerHTML"?u=d:l=="children"||l in _||l=="value"&&"defaultValue"in _||l=="checked"&&"defaultChecked"in _||ht(e,l,null,d,i);for(l in _)d=_[l],l=="children"?p=d:l=="dangerouslySetInnerHTML"?f=d:l=="value"?v=d:l=="checked"?h=d:a&&typeof d!="function"||m[l]===d||ht(e,l,d,m[l],i);if(f)a||u&&(f.__html==u.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(u&&(e.innerHTML=""),Ln(t.type=="template"?e.content:e,Ot(p)?p:[p],t,n,r,b=="foreignObject"?"http://www.w3.org/1999/xhtml":i,o,s,o?o[0]:n.__k&&it(n,0),a,c),o!=null)for(l=o.length;l--;)fe(o[l]);a||(l="value",b=="progress"&&v==null?e.removeAttribute("value"):v!=null&&(v!==e[l]||b=="progress"&&!v||b=="option"&&v!=m[l])&&ht(e,l,v,m[l],i),l="checked",h!=null&&h!=e[l]&&ht(e,l,h,m[l],i))}return e}function pe(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(i){w.__e(i,n)}}function jn(e,t,n){var r,i;if(w.unmount&&w.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||pe(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){w.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&jn(r[i],t,n||typeof e.type!="function");n||fe(e.__e),e.__c=e.__=e.__e=void 0}function gi(e,t,n){return this.constructor(e,n)}function wi(e,t,n){var r,i,o,s;t==document&&(t=document.documentElement),w.__&&w.__(e,t),i=(r=!1)?null:t.__k,o=[],s=[],de(t,e=t.__k=On(Pt,null,[e]),i||St,St,t.namespaceURI,i?null:t.firstChild?At.call(t.childNodes):null,o,i?i.__e:t.firstChild,r,s),Hn(o,e,s)}At=Et.slice,w={__e:function(e,t,n,r){for(var i,o,s;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),s=i.__d),s)return i.__E=i}catch(a){e=a}throw e}},Tn=0,gt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=F({},this.state),typeof e=="function"&&(e=e(F({},n),this.props)),e&&F(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Me(this))},gt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Me(this))},gt.prototype.render=Pt,V=[],In=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Cn=function(e,t){return e.__v.__b-t.__v.__b},kt.__r=0,Dt=Math.random().toString(8),_t="__d"+Dt,at="__a"+Dt,An=/(PointerCapture)$|Capture$/i,ue=0,Yt=Ne(!1),Gt=Ne(!0);var Rn=function(e,t,n,r){var i;t[0]=0;for(var o=1;o<t.length;o++){var s=t[o++],a=t[o]?(t[0]|=s?1:2,n[t[o++]]):t[++o];s===3?r[0]=a:s===4?r[1]=Object.assign(r[1]||{},a):s===5?(r[1]=r[1]||{})[t[++o]]=a:s===6?r[1][t[++o]]+=a+"":s?(i=e.apply(a,Rn(e,a,n,["",null])),r.push(i),a[0]?t[0]|=2:(t[o-2]=0,t[o]=i)):r.push(a)}return r},je=new Map;function $i(e){var t=je.get(this);return t||(t=new Map,je.set(this,t)),(t=Rn(this,t.get(e)||(t.set(e,t=(function(n){for(var r,i,o=1,s="",a="",c=[0],l=function(p){o===1&&(p||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,p,s):o===3&&(p||s)?(c.push(3,p,s),o=2):o===2&&s==="..."&&p?c.push(4,p,0):o===2&&s&&!p?c.push(5,0,!0,s):o>=5&&((s||!p&&o===5)&&(c.push(o,0,s,i),o=6),p&&(c.push(o,p,0,i),o=6)),s=""},f=0;f<n.length;f++){f&&(o===1&&l(),l(f));for(var u=0;u<n[f].length;u++)r=n[f][u],o===1?r==="<"?(l(),c=[c],o=3):s+=r:o===4?s==="--"&&r===">"?(o=1,s=""):s=r+s[0]:a?r===a?a="":s+=r:r==='"'||r==="'"?a=r:r===">"?(l(),o=1):o&&(r==="="?(o=5,i=s,s=""):r==="/"&&(o<5||n[f][u+1]===">")?(l(),o===3&&(c=c[0]),o=c,(c=c[0]).push(2,0,o),o=0):r===" "||r==="	"||r===`
`||r==="\r"?(l(),o=2):s+=r),o===3&&s==="!--"&&(o=4,c=c[0])}return l(),c})(e)),t),arguments,[])).length>1?t:t[0]}var L=$i.bind(On),ct,$,Ut,Re,lt=0,qn=[],x=w,qe=x.__b,Fe=x.__r,De=x.diffed,Ue=x.__c,Be=x.unmount,ze=x.__;function he(e,t){x.__h&&x.__h($,e,lt||t),lt=0;var n=$.__H||($.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function T(e){return lt=1,xi(Un,e)}function xi(e,t,n){var r=he(ct++,2);if(r.t=e,!r.__c&&(r.__=[Un(void 0,t),function(a){var c=r.__N?r.__N[0]:r.__[0],l=r.t(c,a);c!==l&&(r.__N=[l,r.__[1]],r.__c.setState({}))}],r.__c=$,!$.__f)){var i=function(a,c,l){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(p){return p.__c});if(f.every(function(p){return!p.__N}))return!o||o.call(this,a,c,l);var u=r.__c.props!==a;return f.some(function(p){if(p.__N){var d=p.__[0];p.__=p.__N,p.__N=void 0,d!==p.__[0]&&(u=!0)}}),o&&o.call(this,a,c,l)||u};$.__f=!0;var o=$.shouldComponentUpdate,s=$.componentWillUpdate;$.componentWillUpdate=function(a,c,l){if(this.__e){var f=o;o=void 0,i(a,c,l),o=f}s&&s.call(this,a,c,l)},$.shouldComponentUpdate=i}return r.__N||r.__}function Si(e,t){var n=he(ct++,3);!x.__s&&Dn(n.__H,t)&&(n.__=e,n.u=t,$.__H.__h.push(n))}function Ei(e){return lt=5,Fn(function(){return{current:e}},[])}function Fn(e,t){var n=he(ct++,7);return Dn(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function ki(e,t){return lt=8,Fn(function(){return e},t)}function Ti(){for(var e;e=qn.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(wt),t.__h.some(Kt),t.__h=[]}catch(n){t.__h=[],x.__e(n,e.__v)}}}x.__b=function(e){$=null,qe&&qe(e)},x.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),ze&&ze(e,t)},x.__r=function(e){Fe&&Fe(e),ct=0;var t=($=e.__c).__H;t&&(Ut===$?(t.__h=[],$.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(wt),t.__h.some(Kt),t.__h=[],ct=0)),Ut=$},x.diffed=function(e){De&&De(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(qn.push(t)!==1&&Re===x.requestAnimationFrame||((Re=x.requestAnimationFrame)||Ii)(Ti)),t.__H.__.some(function(n){n.u&&(n.__H=n.u),n.u=void 0})),Ut=$=null},x.__c=function(e,t){t.some(function(n){try{n.__h.some(wt),n.__h=n.__h.filter(function(r){return!r.__||Kt(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],x.__e(r,n.__v)}}),Ue&&Ue(e,t)},x.unmount=function(e){Be&&Be(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(r){try{wt(r)}catch(i){t=i}}),n.__H=void 0,t&&x.__e(t,n.__v))};var We=typeof requestAnimationFrame=="function";function Ii(e){var t,n=function(){clearTimeout(r),We&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);We&&(t=requestAnimationFrame(n))}function wt(e){var t=$,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),$=t}function Kt(e){var t=$;e.__c=e.__(),$=t}function Dn(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Un(e,t){return typeof t=="function"?t(e):t}function Tt(e,t){var n=T(t),r=n[0],i=n[1],o=Ei(e);return Si(function(){var s=o.current.subscribe(i);return function(){return s.unsubscribe()}}),r}var Qt=function(e,t){return Qt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Qt(e,t)};function Lt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Qt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function Xt(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Zt(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],s;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function te(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function D(e){return typeof e=="function"}function Bn(e){var t=function(r){Error.call(r),r.stack=new Error().stack},n=e(t);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Bt=Bn(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function ee(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var Mt=(function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,n,r,i,o;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var a=Xt(s),c=a.next();!c.done;c=a.next()){var l=c.value;l.remove(this)}}catch(h){t={error:h}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}else s.remove(this);var f=this.initialTeardown;if(D(f))try{f()}catch(h){o=h instanceof Bt?h.errors:[h]}var u=this._finalizers;if(u){this._finalizers=null;try{for(var p=Xt(u),d=p.next();!d.done;d=p.next()){var v=d.value;try{Ve(v)}catch(h){o=o??[],h instanceof Bt?o=te(te([],Zt(o)),Zt(h.errors)):o.push(h)}}}catch(h){r={error:h}}finally{try{d&&!d.done&&(i=p.return)&&i.call(p)}finally{if(r)throw r.error}}}if(o)throw new Bt(o)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)Ve(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}},e.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},e.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},e.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&ee(n,t)},e.prototype.remove=function(t){var n=this._finalizers;n&&ee(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=(function(){var t=new e;return t.closed=!0,t})(),e})(),zn=Mt.EMPTY;function Wn(e){return e instanceof Mt||e&&"closed"in e&&D(e.remove)&&D(e.add)&&D(e.unsubscribe)}function Ve(e){D(e)?e():e.unsubscribe()}var Ci={Promise:void 0},Ai={setTimeout:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,te([e,t],Zt(n)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function Oi(e){Ai.setTimeout(function(){throw e})}function Ye(){}function $t(e){e()}var Vn=(function(e){Lt(t,e);function t(n){var r=e.call(this)||this;return r.isStopped=!1,n?(r.destination=n,Wn(n)&&n.add(r)):r.destination=Mi,r}return t.create=function(n,r,i){return new ne(n,r,i)},t.prototype.next=function(n){this.isStopped||this._next(n)},t.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t})(Mt),Pi=(function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){bt(r)}},e.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){bt(r)}else bt(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){bt(n)}},e})(),ne=(function(e){Lt(t,e);function t(n,r,i){var o=e.call(this)||this,s;return D(n)||!n?s={next:n??void 0,error:r??void 0,complete:i??void 0}:s=n,o.destination=new Pi(s),o}return t})(Vn);function bt(e){Oi(e)}function Li(e){throw e}var Mi={closed:!0,next:Ye,error:Li,complete:Ye},Hi=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function Ni(e){return e}function ji(e){return e.length===0?Ni:e.length===1?e[0]:function(n){return e.reduce(function(r,i){return i(r)},n)}}var Ge=(function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(t,n,r){var i=this,o=qi(t)?t:new ne(t,n,r);return $t(function(){var s=i,a=s.operator,c=s.source;o.add(a?a.call(o,c):c?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},e.prototype.forEach=function(t,n){var r=this;return n=Je(n),new n(function(i,o){var s=new ne({next:function(a){try{t(a)}catch(c){o(c),s.unsubscribe()}},error:o,complete:i});r.subscribe(s)})},e.prototype._subscribe=function(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)},e.prototype[Hi]=function(){return this},e.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return ji(t)(this)},e.prototype.toPromise=function(t){var n=this;return t=Je(t),new t(function(r,i){var o;n.subscribe(function(s){return o=s},function(s){return i(s)},function(){return r(o)})})},e.create=function(t){return new e(t)},e})();function Je(e){var t;return(t=e??Ci.Promise)!==null&&t!==void 0?t:Promise}function Ri(e){return e&&D(e.next)&&D(e.error)&&D(e.complete)}function qi(e){return e&&e instanceof Vn||Ri(e)&&Wn(e)}var Fi=Bn(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),be=(function(e){Lt(t,e);function t(){var n=e.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return t.prototype.lift=function(n){var r=new Ke(this,this);return r.operator=n,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new Fi},t.prototype.next=function(n){var r=this;$t(function(){var i,o;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=Xt(r.currentObservers),a=s.next();!a.done;a=s.next()){var c=a.value;c.next(n)}}catch(l){i={error:l}}finally{try{a&&!a.done&&(o=s.return)&&o.call(s)}finally{if(i)throw i.error}}}})},t.prototype.error=function(n){var r=this;$t(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},t.prototype.complete=function(){var n=this;$t(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(n){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,n)},t.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},t.prototype._innerSubscribe=function(n){var r=this,i=this,o=i.hasError,s=i.isStopped,a=i.observers;return o||s?zn:(this.currentObservers=null,a.push(n),new Mt(function(){r.currentObservers=null,ee(a,n)}))},t.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,o=r.thrownError,s=r.isStopped;i?n.error(o):s&&n.complete()},t.prototype.asObservable=function(){var n=new Ge;return n.source=this,n},t.create=function(n,r){return new Ke(n,r)},t})(Ge),Ke=(function(e){Lt(t,e);function t(n,r){var i=e.call(this)||this;return i.destination=n,i.source=r,i}return t.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},t.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},t.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},t.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:zn},t})(be);let Yn=4;const Gn=new be,Jn=Gn.asObservable();function Kn(){return Yn}function nt(e){Yn=e,Gn.next(e)}let Qn="initial";const Xn=new be,Zn=Xn.asObservable();function tr(){return Qn}function Q(e){Qn=e,Xn.next(e)}const Di=M`
	height: 70cqh;
`,Qe=M`
	min-height: 95%;
	display: grid;
	align-content: space-evenly;
`,Xe=M`
	display: grid;
	justify-content: center;
`;function tt({title:e,children:t,order:n}){return L`
		<span slot=${`title-${n}`}>${e}</span>
		<crumbs-panel panel-title=${e} slot=${`content-${n}`} className=${Di}>
			<crumbs-tabs style="height: 100%;">
				<span slot="title-1"> Demo </span>
				<div className=${Qe} slot="content-1">
					<crumbs-frame className=${Xe}>
						${t[0]}
					</crumbs-frame>
					<crumbs-frame className=${Xe}>
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
	`}function Ui({order:e}){const[t,n]=T("I'm an input !"),r=`&lt;crumbs-input
	value="${t}"
	placeholder="Enter text..."
&gt;
&lt;/crumbs-input&gt;`;return L`
		<${tt} title="Input" order=${e}>
			<crumbs-input
				value=${t}
				placeholder="Enter text..."
				oninput=${i=>n(i.originalTarget.value)}
			/>

			<div>
				<crumbs-p>Input's value</crumbs-p>

				<crumbs-input
					value=${t}
					placeholder="Enter text..."
					oninput=${i=>n(i.originalTarget.value)}
				/>
			</div>

			<code> <pre dangerouslySetInnerHTML=${{__html:r}}> </pre></code>
		<//>
	`}function Bi({order:e}){const[t,n]=T("I'm a <b>paragraph</b> !");return L`
		<${tt} title="Paragraph" order=${e}>
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
	`}function zi({order:e}){const[t,n]=T("I'm a panel !"),[r,i]=T(""),[o,s]=T("100"),[a,c]=T(!1),l=`&lt;crumbs-panel
	panel-title="${r}"
	panel-loading="${o}"&gt;
	${t}
&lt;/crumbs-panel&gt;`,f=ki(async()=>{if(!a){c(!0),s("0");for(let p=0;p<=100;p+=.1+(100-p)/100)await new Promise(d=>setTimeout(d,10)),s(Math.floor(p).toString());s("100"),c(!1)}},[a]);return L`
		<${tt} title="Panel" order=${e}>
			<crumbs-panel
				panel-loading=${o}
				panel-title=${r}>
				${t}
			</crumbs-panel>

			<div>
				<crumbs-p>Title</crumbs-p>

				<crumbs-input
					type="text"
					value=${r}
					onInput=${p=>i(p.originalTarget.value)}
				/>

				<crumbs-p>Content</crumbs-p>

				<crumbs-input
					type="text"
					value=${t}
					onInput=${p=>n(p.originalTarget.value)}
				/>

				<crumbs-p> Loading </crumbs-p>

				<input
					type="range"
					value=${o}
					onInput=${p=>s(String(p.target.value))}
					min="0"
					max="100"
				/>

				<br/>

				<crumbs-button onClick=${()=>{a||f()}}> Simulate loading </crumbs-button>
			</div>

			<code> <pre dangerouslySetInnerHTML=${{__html:l}}> </pre></code>
		<//>
	`}function Wi({order:e}){const[t,n]=T("Tab content"),[r,i]=T("Tab title"),[o,s]=T("Tab content 2"),[a,c]=T("Tab title 2"),l=`&lt;crumbs-tabs&gt;
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
		${o}
	&lt;/crumbs-p&gt;
&lt;/crumbs-panel&gt;`;return L`
		<${tt} title="Tabs" order=${e}>
			<crumbs-tabs>
				<crumbs-p slot="title-1"> ${r} </crumbs-p>
				<crumbs-p slot="content-1"> ${t} </crumbs-p>
				<crumbs-p slot="title-2"> ${a} </crumbs-p>
				<crumbs-p slot="content-2"> ${o} </crumbs-p>
			</crumbs-tabs>

			<div>
				<crumbs-p>Title</crumbs-p>

				<crumbs-input
					type="text"
					value=${r}
					onInput=${f=>i(f.originalTarget.value)}
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
					value=${o}
					onInput=${f=>s(f.originalTarget.value)}
				/>
			</div>

			<code> <pre dangerouslySetInnerHTML=${{__html:l}}> </pre></code>
		<//>
	`}const Vi=M`
	max-width: 36rem;
	max-height: 70cqh;
`;function Yi({order:e}){return L`
		<span slot=${`title-${e}`}> About</span>
		<crumbs-panel panel-title="About" slot=${`content-${e}`} className=${Vi}>
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
	`}function Gi({order:e}){const t=Tt(Jn,Kn),n=Tt(Zn,tr),r=M`
		max-height: 70cqh;
	`,i=M`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`,o=M`
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
		grid-gap: 0.5rem;

		& > div {
			display: grid;
			grid-template-columns: auto 1fr;
			place-content: center;
			text-align: center;
		}
	`;return L`
		<span slot=${`title-${e}`}>Personalization</span>
		<crumbs-panel panel-title="Personalization" slot=${`content-${e}`} className=${r}>
			<div className=${i}>
				<crumbs-p>
					Some samples to demonstrate personalization.
				</crumbs-p>

				<crumbs-tabs>	
					<crumbs-p slot="title-1"> Background </crumbs-p>

					<div slot="content-1" class=${o}>
						<div>
							<input type="radio" checked=${t===1} onInput=${()=>nt(1)}/>
							<crumbs-p> Dog </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${t===2} onInput=${()=>nt(2)}/>
							<crumbs-p> Abstract </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${t===3} onInput=${()=>nt(3)}/>
							<crumbs-p> Leaf </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${t===4} onInput=${()=>nt(4)}/>
							<crumbs-p> Cat </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${t===5} onInput=${()=>nt(5)}/>
							<crumbs-p> Pug </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${t===6} onInput=${()=>nt(6)}/>
							<crumbs-p> Crystal </crumbs-p>
						</div>
					</div>

					<crumbs-p slot="title-2"> Font </crumbs-p>

					<div slot="content-2" class=${o}>
						<div>
							<input type="radio" checked=${n==="initial"} onInput=${()=>Q("initial")}/>
							<crumbs-p> Default </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${n==="monospace"} onInput=${()=>Q("monospace")}/>
							<crumbs-p> Monospace </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${n==="serif"} onInput=${()=>Q("serif")}/>
							<crumbs-p> Serif </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${n==="sans-serif"} onInput=${()=>Q("sans-serif")}/>
							<crumbs-p> Sans-serif </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${n==="cursive"} onInput=${()=>Q("cursive")}/>
							<crumbs-p> Cursive </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${n==="fantasy"} onInput=${()=>Q("fantasy")}/>
							<crumbs-p> Fantasy </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${n==="system-ui"} onInput=${()=>Q("system-ui")}/>
							<crumbs-p> System </crumbs-p>
						</div>
					</div>
				</crumbs-tabs>
			</div>
		</crumbs-panel>
	`}function Ji({order:e}){const t="&lt;crumbs-p&gt; Hello world ! &lt;/crumbs-p&gt;",n=M`
		max-height: 70cqh;
	`;return L`
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
	`}function Ki({order:e}){const[t,n]=T("Click me !"),[r,i]=T("100"),[o,s]=T(!1),a=`
		&lt;crumbs-button
			${o?"	disabled":""}
				progress="${r}"&gt;
				${t}
		&lt;/crumbs-button&gt;
	`;return L`
		<${tt} title="Button" order=${e}>
			<crumbs-button
				progress=${r}
				disabled=${o}>
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
					onInput=${c=>i(String(c.target.value))}
					min="0"
					max="100"/>

				<br/>

				<input type="checkbox" onInput=${()=>s(!o)} />
				<label> Disabled </label>

			</div>

			<code> <pre dangerouslySetInnerHTML=${{__html:a}}> </pre></code>
		<//>
	`}function Qi({order:e}){const[t,n]=T(!1),[r,i]=T(!1);return L`
		<${tt} title="Switch" order=${e}>
			<crumbs-switch
				checked=${t}
				disabled=${r}
				onchange=${s=>n(s.detail.checked)}
			/>

			<div>
				<crumbs-p>Controls</crumbs-p>

				<div>
					<input
						type="checkbox"
						id="disabled-checkbox"
						onInput=${()=>i(!r)}
					/>
					<label for="disabled-checkbox"> Disabled </label>
				</div>

				<div>
					<crumbs-p>State: ${t?"ON":"OFF"}</crumbs-p>
				</div>
			</div>

			<code> <pre dangerouslySetInnerHTML=${{__html:`&lt;crumbs-switch
	${t?"checked":""}
	${r?"disabled":""}&gt;
&lt;/crumbs-switch&gt;`}}> </pre></code>
		<//>
	`}function Xi({order:e}){return L`
		<${tt} title="Nav" order=${e}>
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
	`}function Zi(){const e=Tt(Jn,Kn),t=Tt(Zn,tr),n=M`
		background-image: url('bg${e}.jpg');
		background-size: cover;
		min-height: 100vh;
		position: fixed;
		min-width: 100vw;
		background-position: center;
		z-index: -999;
	`,r=M`
		display: grid;
		overflow-y: scroll;
		height: 100vh;
		grid-template-columns: repeat(auto-fit, minmax(max(28rem + 6vw), 1fr));
		font-family: ${t};
	`;return L`
		<div class=${n}></div>

		<crumbs-nav class=${r}>
			<${Yi} order=${1}><//>
			<${Ji} order=${2}><//>
			<${Gi} order=${3}><//>
			<${Bi} order=${4}><//>
			<${zi} order=${5}><//>
			<${Ui} order=${6}><//>
			<${Wi} order=${7}><//>
			<${Ki} order=${8}><//>
			<${Qi} order=${9}><//>
			<${Xi} order=${10}><//>
			<span slot="navigation-toggle"> :: </span>
		</crumbs-nav>
	`}wi(L`<${Zi}><//>`,document.body);
