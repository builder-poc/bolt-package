/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=window,e$5=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$6=Symbol(),n$6=new WeakMap;let o$6 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$6)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$5&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$6.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$6.set(s,t));}return t}toString(){return this.cssText}};const r$5=t=>new o$6("string"==typeof t?t:t+"",void 0,s$6),S$3=(s,n)=>{e$5?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$3.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$3=e$5?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$5(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$5;const e$4=window,r$4=e$4.trustedTypes,h$3=r$4?r$4.emptyScript:"",o$5=e$4.reactiveElementPolyfillSupport,n$5={toAttribute(t,i){switch(i){case Boolean:t=t?h$3:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$3=(t,i)=>i!==t&&(i==i||t==t),l$5={attribute:!0,type:String,converter:n$5,reflect:!1,hasChanged:a$3},d$3="finalized";let u$3 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$5){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$5}static finalize(){if(this.hasOwnProperty(d$3))return !1;this[d$3]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$3(i));}else void 0!==i&&s.push(c$3(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$3(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$5){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$5).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$5;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$3)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$3[d$3]=!0,u$3.elementProperties=new Map,u$3.elementStyles=[],u$3.shadowRootOptions={mode:"open"},null==o$5||o$5({ReactiveElement:u$3}),(null!==(s$5=e$4.reactiveElementVersions)&&void 0!==s$5?s$5:e$4.reactiveElementVersions=[]).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2;const i$1=window,s$4=i$1.trustedTypes,e$3=s$4?s$4.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$4="$lit$",n$4=`lit$${(Math.random()+"").slice(9)}$`,l$4="?"+n$4,h$2=`<${l$4}>`,r$3=document,u$2=()=>r$3.createComment(""),d$2=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c$2=Array.isArray,v$1=t=>c$2(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a$2="[ \t\n\f\r]",f$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_$1=/-->/g,m$1=/>/g,p$1=RegExp(`>|${a$2}(?:([^\\s"'>=/]+)(${a$2}*=${a$2}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g$1=/'/g,$$1=/"/g,y$1=/^(?:script|style|textarea|title)$/i,T$1=Symbol.for("lit-noChange"),A$1=Symbol.for("lit-nothing"),E$1=new WeakMap,C$1=r$3.createTreeWalker(r$3,129,null,!1);function P$1(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$3?e$3.createHTML(i):i}const V$1=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f$1;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f$1?"!--"===c[1]?u=_$1:void 0!==c[1]?u=m$1:void 0!==c[2]?(y$1.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p$1):void 0!==c[3]&&(u=p$1):u===p$1?">"===c[0]?(u=null!=l?l:f$1,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p$1:'"'===c[3]?$$1:g$1):u===$$1||u===g$1?u=p$1:u===_$1||u===m$1?u=f$1:(u=p$1,l=void 0);const w=u===p$1&&t[i+1].startsWith("/>")?" ":"";r+=u===f$1?s+h$2:v>=0?(e.push(d),s.slice(0,v)+o$4+s.slice(v)+n$4+w):s+n$4+(-2===v?(e.push(void 0),i):w);}return [P$1(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};let N$1 = class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V$1(t,i);if(this.el=N.createElement(a,e),C$1.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C$1.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$4)||i.startsWith(n$4)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$4).split(n$4),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H$1:"?"===i[1]?L$1:"@"===i[1]?z$1:k$1});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y$1.test(h.tagName)){const t=h.textContent.split(n$4),i=t.length-1;if(i>0){h.textContent=s$4?s$4.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u$2()),C$1.nextNode(),v.push({type:2,index:++r});h.append(t[i],u$2());}}}else if(8===h.nodeType)if(h.data===l$4)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$4,t+1));)v.push({type:7,index:r}),t+=n$4.length-1;}r++;}}static createElement(t,i){const s=r$3.createElement("template");return s.innerHTML=t,s}};function S$2(t,i,s=t,e){var o,n,l,h;if(i===T$1)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d$2(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S$2(t,r._$AS(t,i.values),r,e)),i}let M$1 = class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r$3).importNode(s,!0);C$1.currentNode=o;let n=C$1.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R$1(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z$1(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C$1.nextNode(),l++);}return C$1.currentNode=r$3,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}};let R$1 = class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A$1,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S$2(this,t,i),d$2(t)?t===A$1||null==t||""===t?(this._$AH!==A$1&&this._$AR(),this._$AH=A$1):t!==this._$AH&&t!==T$1&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v$1(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A$1&&d$2(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$3.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N$1.createElement(P$1(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M$1(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E$1.get(t.strings);return void 0===i&&E$1.set(t.strings,i=new N$1(t)),i}T(t){c$2(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u$2()),this.k(u$2()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}};let k$1 = class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A$1,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A$1;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S$2(this,t,i,0),n=!d$2(t)||t!==this._$AH&&t!==T$1,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S$2(this,e[s+l],i,l),h===T$1&&(h=this._$AH[l]),n||(n=!d$2(h)||h!==this._$AH[l]),h===A$1?t=A$1:t!==A$1&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}};let H$1 = class H extends k$1{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A$1?void 0:t;}};const I$1=s$4?s$4.emptyScript:"";let L$1 = class L extends k$1{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A$1?this.element.setAttribute(this.name,I$1):this.element.removeAttribute(this.name);}};let z$1 = class z extends k$1{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S$2(this,t,i,0))&&void 0!==s?s:A$1)===T$1)return;const e=this._$AH,o=t===A$1&&e!==A$1||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A$1&&(e===A$1||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}};let Z$1 = class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S$2(this,t);}};const B$1=i$1.litHtmlPolyfillSupport;null==B$1||B$1(N$1,R$1),(null!==(t$2=i$1.litHtmlVersions)&&void 0!==t$2?t$2:i$1.litHtmlVersions=[]).push("2.8.0");

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=window,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$3=new WeakMap;let o$3 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$3.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),S$1=(s,n)=>{e$2?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$1.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$1=window,r$1=e$1.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$1.reactiveElementPolyfillSupport,n$2={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$3={attribute:!0,type:String,converter:n$2,reflect:!1,hasChanged:a$1},d$1="finalized";let u$1 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$3){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$3){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$2).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$2;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:u$1}),(null!==(s$2=e$1.reactiveElementVersions)&&void 0!==s$2?s$2:e$1.reactiveElementVersions=[]).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const i=window,s$1=i.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1="$lit$",n$1=`lit$${(Math.random()+"").slice(9)}$`,l$2="?"+n$1,h=`<${l$2}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),b=w(2),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$1+s.slice(v)+n$1+w):s+n$1+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$1)||i.startsWith(n$1)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$1).split(n$1),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$1),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$2)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$1,t+1));)v.push({type:7,index:r}),t+=n$1.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t=i.litHtmlVersions)&&void 0!==t?t:i.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$1,o;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l$1=globalThis.litElementHydrateSupport)||void 0===l$1||l$1.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.3");

var CSS$G = ":host {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nslot {\n  color: inherit;\n  font: inherit;\n}";

/**
 * Bolt base class, inspired by HXElement from HelixUI .
 * (https://github.com/HelixDesignSystem/helix-ui/blob/master/src/interfaces/HXElement/index.js)
 */
class BoltElement extends s {
  /**
   * Defines the name of the element to register in the Custom Element registry
   *
   * @abstract
   * @default undefined
   * @type {string}
   */
  static get is() {}

  /**
   * Takes the styles the user supplied via the `static styles` property and
   * returns the array of styles to apply to the element.
   *
   * @override
   * @param {CSSResultGroup?} styles
   */
  static finalizeStyles(styles) {
    let newStyles = [
      // common CSS styles
      r$2(CSS$G),
    ];

    // subclass styles
    if (typeof styles === 'string') {
      newStyles.push(r$2(styles));
    } else {
      newStyles.push(styles);
    }

    return super.finalizeStyles(newStyles)
  }

  /**
   * Placeholder property to ensure that `getStyles()` fetches a valid value
   * when constructing stylesheets for LitElement.
   *
   * Override this property in a subclass if it needs to define extra styles.
   *
   * @abstract
   * @ignore
   */
  static get styles() {
    return []
  }

  /**
   * Register class with the customElements registry.
   * Note: the custom element is only registered if the "is" class property is defined.
   *
   * This will do nothing if the custom element is already registered.
   */
  static $define() {
    if (this.is) {
      if (!customElements.get(this.is)) {
        customElements.define(this.is, this);
      }
    }
  }

  /**
   * Bolt lifecycle callback called at the end of construction.
   *
   * Use this callback to apply pre-connect setup logic.
   *
   * @abstract
   * @ignore
   */
  $onCreate() { }

  /**
   * Bolt lifecycle method called at the end of connectedCallback()
   * Custom Element lifecycle method.
   *
   * Use this callback to initialize an element's behavior
   * (e.g., adding event listeners).
   *
   * @abstract
   * @ignore
   */
  $onConnect() { }

  /**
   * Bolt lifecycle method called at the end of disconnectedCallback()
   * Custom Element lifecycle method.
   *
   * Use this callback to clean up applied element behavior
   * (e.g., removing event listeners).
   *
   * @abstract
   * @ignore
   */
  $onDisconnect() { }

  /**
   * LitElement properts/attributes getter
   *
   * @abstract
   * @default undefined
   * @type {object}
   */
  static get properties() {
    return {}
  }

  /* Called when an instance is created */
  constructor() {
    super(); // run parent callback (LitElement|UpdatingElement)

    // bind lifecycle methods to instance
    this.$onConnect = this.$onConnect.bind(this);
    this.$onCreate = this.$onCreate.bind(this);
    this.$onDisconnect = this.$onDisconnect.bind(this);
    this.$relayEvent = this.$relayEvent.bind(this);

    this._$initializeProps();

    // run child callback (Bolt)
    this.$onCreate();
  }

  /* Called when an instance of the element is attached to the DOM */
  connectedCallback() {
    // run parent callback (LitElement|UpdatingElement)
    super.connectedCallback();

    // run child callback (Bolt)
    this.$onConnect();
  }

  /* Called when an instance of the element is removed from the DOM */
  disconnectedCallback() {
    // run parent callback (LitElement|UpdatingElement)
    super.disconnectedCallback();
    // run child callback (Bolt)
    this.$onDisconnect();
  }

  /**
   * @param {string} ids - space-delimited list of element IDs
   * @returns {string} - concatenated innerText of existing elements matching IDs
   */
  $lookupInnerTexts(value) {
    let ids = value.split(' ');
    let texts = [];
    for (let id of ids) {
      if (id) {
        let el = this.getRootNode().querySelector(`#${id}`);
        if (el) {
          texts.push(el.innerText);
        }
      }
    }
    let result = texts.join(' ');

    return result
  }

  /**
   * Generate a unique ID
   *
   * **Pseudo-random Algorithm**
   * This functionality is pseudo-random, and you should not depend on 100%
   * random values.  Given a large enough dataset, this method has the
   * potential to generate duplicate values.
   *
   * For the purposes of most applications, the dataset is small enough that
   * the potential for duplicate values is almost 0, meaning that it's good
   * enough for practical use.
   *
   * @see https://gist.github.com/gordonbrander/2230317
   */
  $generateId() {
    return Math
        .random()     // 0.7093288430261266
        .toString(36) // "0.pjag2nwxb2o"
        .substr(2)    // "pjag2nwxb2o"
  }

  /**
   * Assign a value to an HTML attribute, if the attribute isn't present.
   *
   * @param {string} name - name of the attribute to set
   * @param {string} val - value to assign
   *
   * @see https://developers.google.com/web/fundamentals/web-components/best-practices#dont-override
   */
  $defaultAttr(attr, val) {
    if (!this.hasAttribute(attr)) {
      this.setAttribute(attr, val);
    }
  }

  /**
   * Emit a custom event
   *
   * @param {string} evtName - name of event
   * @param {object} opts - options to configure the event
   * @param {boolean} [opts.bubbles=false] - whether the event bubbles up the DOM tree
   * @param {boolean} [opts.cancelable=true] - whether the event can be canceled
   * @param {boolean} [opts.composed=false] - whether event bubbling will continue up through nested shadow roots
   * @param {*} [opts.detail] - additional information to communicated along with the event
   *
   * @returns {boolean}
   * Returns true if the event was not canceled by an event listener.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
   */
  $emit(evtName, opts) {
    let evt = new CustomEvent(evtName, {
      bubbles: false,
      cancelable: true,
      composed: false,
      ...opts,
    });
    return this.dispatchEvent(evt)
  }

  /**
   * Relay an event within the ShadowDOM, retargeting the event to the custom element
   *
   * @param {Event} oldEvent - event to relay
   * @returns {Boolean} Returns true if the event was not canceled by an event listener.
   */
  $relayEvent(oldEvent) {
    // Emit new event of same name
    let newEvent = new CustomEvent(oldEvent.type, {
      bubbles: oldEvent.bubbles,
      cancelable: oldEvent.cancelable,
    });
    return this.dispatchEvent(newEvent);
  }

  /**
   * Check if instance has an ID.  If none is set, apply a generated one
   * based on the element name (`this.constructor.is`) and
   * a pseudo-random string (generated by `$generateId()`)
   */
  $ensureId() {
    if (!this.id) {
      this.id = `${this.constructor.is}-${this.$generateId()}`;
    }
  }

  /** @private */
  _$initializeProps() {
    const props = this.constructor.properties;
    for (const prop in props) {
      let propConfig = props[prop];
      if ('default' in propConfig) {
        // assign default value to LitElement memoized property
        this[`__${prop}`] = propConfig.default;
        this.requestUpdate(prop);
      }
    }
  }

  /**
   * This convenience property is meant for debugging and testing purposes.
   *
   * It is particularly useful for capturing Jest snapshots [1].
   *
   * [1]: https://jestjs.io/docs/snapshot-testing
   *
   * @private
   * @type {string|undefined}
   */
  get _shadowHTML() {
    return this.shadowRoot?.firstElementChild?.outerHTML
  }
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=l=>null!=l?l:A$1;

var VERSION = '7.6.0';

const rootUrl = new URL('https://media.nationwide.com');

// base path for all CDN asset paths
const basePath = '/bolt';

// base path to asset versions
const versionsPath = `${basePath}/versions`;

// base path to current-version assets
const currentVersionPath = `${versionsPath}/${VERSION}`;

var CSS$F = ":host,\n:host * {\n  border: 0;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:host {\n  color: inherit;\n  display: inline-block;\n  flex: 0 0 auto;\n}\n:host svg {\n  overflow: visible;\n  width: 100%;\n}\n:host g, :host path, :host rect, :host circle {\n  fill: currentColor;\n}\n\n:host([fixed]) {\n  --size: 24px;\n  height: var(--size) !important;\n  vertical-align: baseline;\n  width: var(--size) !important;\n}\n\n:host([fixed][size=sm]) {\n  --size: 16px;\n}\n\n:host,\n:host([fluid]) {\n  --size: 1.0lh;\n  height: 1lh !important;\n  vertical-align: top;\n  width: var(--size) !important;\n}\n\n:host([size=sm]),\n:host([fluid][size=sm]) {\n  --size: 1.0em;\n}\n\n#root {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  line-height: 1;\n}";

const DEFAULT_SPRITE_URL = new URL(
  `${currentVersionPath}/bolt-icon-sprite.svg`,
  rootUrl
);
// internal cache (safe from external manipulation)
let IconSprites;

/**
 * Icons are abstract visual representations of objects or functions. They are displayed using the `<bolt-icon>` custom element. See the {@link https://bolt.nwie.net/foundations/visual-style/iconography/|Iconography reference} for supported icons.
 *
 * @class BoltIconElement
 * @element BoltIconElement
 * @extends {BoltElement}
 * @tagname bolt-icon
 * @since 3.0.0
 *
 * @property {String} name - (Required) The name of the icon to display. See the {@link https://bolt.nwie.net/foundations/visual-style/iconography/|Iconography reference} for supported icons.
 * @property {String} title - (Optional)  Title to be applied to the icon's SVG. Defaults to the value given for `name`. See the {@link https://bolt.nwie.net/#a11y-best-practices|Accessibility best practices} for more information.
 * @property {String} color - (Optional) Changes the icon's fill color. Please make sure to meet the minimum color-contrast ratio. See {@link https://bolt.nwie.net/web/components/icon/|documentation} for color options.
 * @property {String} size - (Optional) Applies a curated icon size. Default is `md`. Possible values: [`sm`, `md`]
 * @property {Boolean} decorative - (Optional) When present, indicates that the icon is used strictly for decoration has no semantic meaning, which removes the underlying SVG's `title`, `role`, and relevant ARIA attributes.
 *
 * @attribute {Boolean} fixed - (Optional) Fixed icons remain a constant size and are unaffected by surrounding typography.
 * @attribute {Boolean} fluid - (Optional) Fluid icons are vertically aligned with adjacent text, and their height is based on inherited typography styles.
 *
 * @see https://bolt.nwie.net/web/components/icon/
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 */
class BoltIconElement extends BoltElement {
    /**
     * The component's tag name, used for Custom Element registration
     * @readonly
     * @type {String}
     * @static
     */
    static get is() {
      return 'bolt-icon';
    }

    /**
     * LitElement properties/attributes definition.
     * Defines all the reactive properties that can be set as attributes or properties
     * @readonly
     * @type {Object}
     * @static
     */
    static get properties(){
        return {
            name: { type: String },
            title: { type: String },
            size: { type: String },
            iconContent: { type: String, attribute: false },
            color: { type: String },
            decorative: { type: Boolean }
        }
    }

    /**
     * Creates an instance of BoltIconElement
     * Initialize public and private properties with default values
     *
     * @constructor
     */
    constructor(){
        super();

        this.loadingStatusClassPrefix = 'bolt-status--sprite-';

        // Public state variables
        this.name = '';
        this.title = '';
        this.size = 'md';
        this.color = '';
        this.decorative = false;

        // Private state variables
        /** @private {String} */
        this.iconContent = '';
        /** @private {String} */
        this.generatedTitleId = this.generateTitleId();
        /** @private {String} */
        this.generatedId = this.generateId();
        /** @private {Number} */
        this.loadAttempts = 0;
        /** @private */
        this._handleSpriteLoadComplete = this._handleSpriteLoadComplete.bind(this);
    }

    /**
     * Generates a unique ID for the icon component
     * @returns {String} A unique ID string for component identification
     * @private
     */
    generateId(){
        return 'bolt-icon--' + Math.floor(Math.random() * 10000000);
    }

    /**
     * Generates a unique ID for the icon title element
     * @returns {String} A unique ID string for title accessibility
     * @private
     */
    generateTitleId(){
        return 'bolt-icon--title_' + Math.floor(Math.random() * 10000000);
    }

    /**
     * Handles the sprite load complete event
     * Updates the icon content when the sprite sheet has finished loading
     * @private
     */
    _handleSpriteLoadComplete(){
        this.setIconContent();
    }

    /**
     * Gets the display title for the icon
     * Returns empty string if decorative, otherwise returns title or icon name
     * @readonly
     * @type {String}
     * @private
     */
    get _displayTitle() {
      return this.decorative ? '' : (this.title || this.name);
    }

    /**
     * Sets the icon content by cloning symbol nodes from the loaded sprite sheet
     * Implements retry logic with exponential backoff if the sprite hasn't loaded yet
     * @private
     */
    setIconContent() {
      let $svg = this.shadowRoot.querySelector('svg');
      if ($svg) {
        let iconNodes = this.getSymbolNodes(this.name);
        if (iconNodes) {
          // remove child nodes other than <title> from the <bolt-icon> ShadowDOM:<svg>
          let $title = $svg.querySelector('title');
          $svg.replaceChildren($title);

          // clone child nodes into Shadow DOM
          for (const _node of iconNodes) {
            $svg.append(_node.cloneNode(true));
          }

          return;
        }
      }

      this.loadAttempts++;
      if (this.loadAttempts < 20) { // space out load attempts and have a max
        let delay = 25 + (this.loadAttempts ^ 3);
        setTimeout(() => {
          this.setIconContent();
        }, delay);
      }
    }

    /**
     * Determines if the SVG sprite sheet should be loaded
     * Bypasses loading during testing frameworks and checks current loading status
     * @returns {Boolean} True if the sprite should be loaded
     * @private
     */
    shouldLoadSvg(){
        // Sniff for testing frameworks, bypass SVG XHR for JS testing
        let isRunningTestFramework = !!(window.jasmine || window.mocha);
        return !isRunningTestFramework &&
            !(document.querySelector('html').classList.contains(this.loadingStatusClassPrefix + 'loading') ||
            document.querySelector('html').classList.contains(this.loadingStatusClassPrefix + 'did-load'));
    }

    /**
     * Checks if the SVG sprite sheet is currently being loaded
     * @returns {Boolean} True if the sprite is currently loading
     * @private
     */
    isLoadingSvg(){
        return document.querySelector('html').classList.contains(this.loadingStatusClassPrefix + 'loading');
    }

    /**
     * Checks if the SVG sprite sheet has already been loaded
     * @returns {Boolean} True if the sprite has finished loading
     * @private
     */
    didLoadSvg(){
        return document.querySelector('html').classList.contains(this.loadingStatusClassPrefix + 'did-load');
    }

    /**
     * Sets the loading status by adding/removing CSS classes on the HTML element
     * @param {String} status - The status to set ('loading', 'did-load', 'should-load', 'failed')
     * @private
     */
    setStatus(status){
        if(status !== 'loading'){
            document.querySelector('html').classList.remove(this.loadingStatusClassPrefix + 'loading');
        }
        document.querySelector('html').classList.add(this.loadingStatusClassPrefix + status);
    }

    /**
     * Preloads the SVG sprite sheet from the CDN or custom path
     * Handles fetching, parsing, and sanitizing the sprite sheet content
     * Supports custom sprite paths via meta tag configuration for development environments
     * @async
     * @private
     */
    async preloadSvg() {
      this.setStatus('loading');

      let spriteUrl = DEFAULT_SPRITE_URL;

      // NOTE: This functionality is undocumented and not officially supported
      // for downstream consumption.
      //
      // - Bolt dev environments are likely the only targets that would make use of this.
      const META_SPRITES = document.head.querySelector('meta[name="bolt:icon-sprite-path"]');
      // If path to custom sprite sheet is configured via <meta>...
      if (META_SPRITES) {
        let iconSpritePath = META_SPRITES.getAttribute('value');
        if (iconSpritePath) {
          // use custom sprite sheet, if available
          let res = await fetch(iconSpritePath, { method: 'HEAD' });
          if (res.ok) {
            // We're likely running in the Bolt dev environment
            spriteUrl = iconSpritePath;
          }
        }
      }

      let res = await fetch(spriteUrl);
      if (res.ok) {
        let template = document.createElement('template');
        template.innerHTML = await res.text(); // FIXME: trusted type sink
        // remove unsafe elements from markup
        template.querySelectorAll('script, style').forEach(el => {
          el.remove();
          console.warn(`[Bolt:Icon] removed unsafe <${el.tagName}> from sprite sheet`);
        });
        IconSprites = template.content;

        this.setStatus('did-load');
        this.setIconContent();
        this.fireLoadCompleteEvent();
      } else {
        console.error('[Bolt:Icon] failed to load sprite image:', spriteUrl);
        this.setStatus('failed');
      }
    }

    /**
     * Fires a global event when the sprite sheet has finished loading
     * Other icon instances can listen to this event to know when to update their content
     * @private
     */
    fireLoadCompleteEvent(){
        var event = document.createEvent('Event');
        event.initEvent('bolt-sprite-load-complete', true, true);
        window.dispatchEvent(event);
    }

    /**
     * Finds and returns symbol nodes from the sprite sheet after stripping title tags
     * @param {String} name - The name of the icon symbol to find
     * @param {DocumentFragment} sprites - The sprite sheet document fragment (defaults to IconSprites)
     * @returns {NodeList|String} The child nodes of the symbol, or empty string if not found
     * @private
     */
    // find and return symbol nodes after stripping the <title> tag
    getSymbolNodes(name, sprites=IconSprites) {
      let id = `bolt-symbol-${name}`;
      let $symbol = sprites.querySelector('#' + id);
      if ($symbol) {
        // exclude/remove specific tags
        $symbol.querySelectorAll('title').forEach(el => el.remove());

        return $symbol.childNodes;
      } else {
        console.log('[Bolt:Icon] could not find sprite ID: ' + id);
        return '';
      }
    }

    /**
     * Getter for component's CSS styles
     * @readonly
     * @type {CSSResult}
     * @static
     */
    static get styles() {
      return CSS$F;
    }

    /**
     * Renders the component's HTML template
     * Creates an SVG element with proper accessibility attributes and title
     * @returns {TemplateResult} The component's rendered template
     * @override
     */
    render() {

      // using ifDefined makes the attribute only get added if the expression inside is defined
      return x`
        <div id="root">
          ${b`
            <svg
              id="${this.generatedId}"
              viewBox="0 0 24 24"
              role="${this.decorative ? 'presentation' : 'img'}"
              aria-hidden="${this.decorative}"
              focusable="${l(this.decorative ? 'false' : '')}"
              aria-labelledby="${l(this.decorative ? undefined : this.generatedTitleId)}"
            >
              <title id="${ this.generatedTitleId }">${this._displayTitle}</title>
            </svg>
          `}
        </div>
      `
    }

    /**
     * Lifecycle method called when the element is connected to the DOM
     * Manages sprite loading state and sets up event listeners
     * @override
     */
    $onConnect(){
        if (this.shouldLoadSvg()) {
            this.setStatus('should-load');
            this.preloadSvg();
        } else if (this.isLoadingSvg()) {
            window.addEventListener('bolt-sprite-load-complete', this._handleSpriteLoadComplete);
        } else if (this.didLoadSvg()){
            this._handleSpriteLoadComplete();
        }
    }

    /**
     * Lifecycle method called when the element is disconnected from the DOM
     * Cleans up event listeners to prevent memory leaks
     * @override
     */
    $onDisconnect() {
      window.removeEventListener('bolt-sprite-load-complete', this._handleSpriteLoadComplete);
    }

    /**
     * Lifecycle method called when properties change
     * Updates icon content when the name property changes
     * @param {Map} props - Map of changed properties and their old values
     * @override
     */
    updated(props){
        props.forEach((oldValue, propName) => {
            if(propName === 'name'){
                if(this.didLoadSvg()){
                    this.setIconContent();
                }
            }
        });
    }
}

/**
 * This module exports the icon component and its initialization function.
 * The icon component displays scalable vector icons that are part of the
 * Bolt's icon library.
 *
 * @module bolt-icon
 * @since 3.0.0
 *
 * @see {@link ./elements/bolt-icon|BoltIconElement}
 * @see {@link https://bolt.nwie.net/foundations/visual-style/iconography/|Iconography}
 */


/**
 * Initializes the icon component by registering it as a custom element
 *
 * This function:
 * 1. Registers the BoltIconElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$y() {
  // Upstream
  // n/a

  // Local
  BoltIconElement.$define();
}

var index$x = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltIconElement: BoltIconElement,
  initialize: initialize$y
});

var CSS$E = ":host,\n:host * {\n  /* css-core:utils/reset.component */\n  border: 0;\n  font: inherit;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  vertical-align: baseline;\n}\n\n:host {\n  background: var(--bolt-theme-surface);\n  border: 1px solid var(--bolt-theme-outline);\n  border-radius: 4px;\n  display: block;\n  transition: all 350ms;\n}\n:host:focus {\n  /* css-core:context.focus */\n  box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n  outline: none;\n  text-decoration-color: transparent;\n  outline: none;\n}\n\n:host([active]) {\n  cursor: inherit;\n}\n:host([active]):hover {\n  background: var(--bolt-theme-surface);\n}\n\n.bolt-accordion-wc--content {\n  /* css-core:context.reset */\n  --bolt-context-surface: var(--bolt-theme-surface);\n  --bolt-context-onSurface: var(--bolt-theme-onSurface);\n  --bolt-context-onSurfaceVariant: var(--bolt-theme-onSurfaceVariant);\n  --bolt-context-outline: var(--bolt-theme-outline);\n  --bolt-context-outlineVariant: var(--bolt-theme-outlineVariant);\n  --bolt-context-focus: var(--bolt-theme-focus);\n  --bolt-context-link: var(--bolt-theme-link);\n  --bolt-context-accent: var(--bolt-theme-accent);\n  --bolt-context-accentHigh: var(--bolt-theme-accentHigh);\n  --bolt-context-accentHighest: var(--bolt-theme-accentHighest);\n  --bolt-context-onAccent: var(--bolt-theme-onAccent);\n  box-shadow: 0 -1px 0 var(--bolt-context-outlineVariant);\n  color: var(--bolt-context-onSurface);\n  opacity: 0;\n  padding: 0;\n  transition: all 350ms cubic-bezier(0, 1, 0, 1);\n}\n.bolt-accordion-wc--content__open {\n  display: block;\n  opacity: 1;\n  padding: var(--bolt-space-sm);\n  transition: all 350ms ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .bolt-accordion-wc--content__open {\n    transition: none;\n  }\n}\n.bolt-accordion-wc--content__close {\n  display: none;\n}\n.bolt-accordion-wc--header {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(16px, 16px + 2px * (var(--bolt-typography-basis) - 360) / 840, 18px);\n  line-height: clamp(1.5, 1.5 + 0.06 * (var(--bolt-typography-basis) - 360) / 840, 1.56);\n  align-items: center;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  margin: 0;\n  padding: var(--bolt-space-sm);\n  transition: background-color 350ms;\n}\n.bolt-accordion-wc--header:focus-within {\n  /* css-core:context.focus */\n  box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n  outline: none;\n  text-decoration-color: transparent;\n  transition: 350ms;\n}\n.bolt-accordion-wc--header:focus-within:not(:has(:focus-visible)) {\n  box-shadow: none;\n}\n.bolt-accordion-wc--header bolt-icon {\n  display: inline-block;\n  color: var(--bolt-theme-link);\n  margin-right: 8px;\n  transition: all 350ms;\n}\n@media (prefers-reduced-motion: reduce) {\n  .bolt-accordion-wc--header bolt-icon {\n    transition: none;\n  }\n}\n.bolt-accordion-wc--header__open {\n  border-radius: 4px 4px 0 0;\n}\n.bolt-accordion-wc--header__open bolt-icon {\n  transform: rotate(180deg);\n}\n.bolt-accordion-wc--header button {\n  -webkit-appearance: none;\n  background: 0;\n  border: 0;\n  color: var(--bolt-theme-link);\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  text-align: left;\n  width: 100%;\n}\n.bolt-accordion-wc--header button:focus {\n  outline: none;\n}\n.bolt-accordion-wc--header:hover, .bolt-accordion-wc--header:focus-within {\n  background: var(--bolt-theme-inputSurfaceHigh);\n}\n.bolt-accordion-wc--header:active {\n  background: var(--bolt-theme-inputSurfaceHighest);\n}";

/**
 * Accordions contain groups of screen elements that can be hidden and revealed independently of each other.
 * They consist of the `bolt-accordion-group` and `bolt-accordion` components and both *must* be used together.
 *
 * The `<bolt-accordion>` component holds the content for an individual accordion panel.
 *
 * @class BoltAccordionElement
 * @element BoltAccordionElement
 * @extends {BoltElement}
 * @tagname bolt-accordion
 * @since 3.0.0
 *
 * @property {String} header - (Required) The label for the accordion.
 * @property {Boolean} active - (Optional) If present, the accordion content is expanded. This parameter can also be set via Javascript as a boolean.
 *
 * @event {CustomEvent} bolt-accordion-open - Fires after `open()` or when `toggle()` opens the accordion. Bubbles up to the nearest `<bolt-accordion-group>`.
 * @event {CustomEvent} bolt-accordion-close - Fires after `close()` or when `toggle()` closes the accordion. Bubbles up to the nearest `<bolt-accordion-group>`.
 *
 * @method open() - Expands the accordion if it is currently closed.
 * @method close() - Collapses the accordion if it is currently open.
 * @method toggle() - Toggles the accordion between open and closed states.
 * @method focus() - Sets focus to the accordion's header button.
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @example
 * <bolt-accordion-group header="Accordion group name">
    <bolt-accordion header="Accordion number one">
      <p>Accordion content goes here</p>
    </bolt-accordion>
  </bolt-accordion-group>
 *
 * @see https://bolt.nwie.net/web/components/accordion
*/
class BoltAccordionElement extends BoltElement {
    /**
     * The component's tag name, used for Custom Element registration
     * @readonly
     * @type {String}
     * @static
     */
    static get is() {
      return 'bolt-accordion'
    }

    /**
     * LitElement properties/attributes definition.
     * @readonly
     * @type {Object}
     * @static
     */
    static get properties() {
        return {
            active: { type: Boolean, reflect: true },
            header: { type: String },
            id: { type: String }
        }
    }

    /**
     * Creates an instance of BoltAccordionElement
     * Initializes properties with default values and generates unique IDs
     *
     * @constructor
     * @description Sets up initial property values and generates unique identifiers for the accordion and its header
     */
    constructor() {
        super();

        this.active = false;
        this.header = '';
        /** @private {String} - ID for the accordion */
        this.id = '';
        /** @private {String} - Randomly generated ID for the accordion */
        this.generatedId = this.generateId();
        /** @private {String} - ID for the accordion header */
        this.headerId = this.generateId('header');
    }

    /**
     * Lifecycle callback when component is connected to DOM
     * Sets the bolt-focusable attribute to enable keyboard accessibility
     *
     * @method
     * @private
     * @description Ensures the component is part of the focus order for keyboard navigation
     */
    $onConnect() {
      this.setAttribute('bolt-focusable', '');
    }

    /**
     * Handles click events on the accordion element
     * Prevents default browser action and delegates to header click handler
     *
     * @method
     * @private
     * @param {Event} e - The click event object from the browser
     * @description Intercepts clicks on the accordion and ensures proper event handling
     */
    handleClick(e) {
        e.preventDefault();
        this.handleHeaderClick();
    }

    /**
     * Generates a unique ID for the accordion component or its parts
     * Uses a random number to ensure uniqueness across multiple instances
     *
     * @method
     * @private
     * @param {string} [type] - Optional type identifier for the generated ID (e.g., 'header')
     * @returns {string} A unique ID string prefixed with 'bolt-accordion-wc--'
     * @description Creates predictable but unique IDs for accessibility and DOM relationships
     */
    generateId(type) {
        return 'bolt-accordion-wc--' + (type ? (type + '--') : '') + Math.floor(Math.random() * 10000000);
    }

    /**
     * Getter for component's CSS styles
     * Returns the imported CSS styles that will be applied to the shadow DOM
     *
     * @readonly
     * @type {CSSResult}
     * @static
     * @private
     * @description Defines the component's appearance through CSS imported from _shadow.scss
     */
    static get styles() {
      return CSS$E;
    }

    /**
     * Handles clicks on the accordion header button
     * Stops event propagation to prevent duplicate handling and toggles the accordion state
     *
     * @method
     * @private
     * @param {Event} [e] - The click event object, if any
     * @description Central event handler for accordion header interactions that controls expansion/collapse
     */
    handleHeaderClick(e) {
        if(e){
            e.stopPropagation();
        }

        this.toggle();
    }

    /**
     * Opens accordion if closed, and vice versa
     * Public method to toggle the accordion's expanded/collapsed state
     *
     * @method
     * @public
     * @description Switches between expanded and collapsed states by calling either open() or close()
     */
    toggle() {
        if (this.active) {
            this.close();
        } else {
            this.open();
        }
    }

    /**
     * Focuses the accordion header button for keyboard accessibility
     * Handles possible null references when shadowRoot isn't ready
     *
     * @method
     * @public
     * @description Safely sets keyboard focus to the accordion's header button
     * using optional chaining to prevent errors if elements aren't ready
     */
    focus() {
      /*
       * There's no guarantee that the shadowRoot exists or been populated
       * when this method is called, so we need to make sure we don't
       * attempt to focus a nonexistent element.
       */
      let btn = this.shadowRoot?.querySelector('.bolt-accordion-wc--header-button');
      btn?.focus();
    }

    /**
     * Renders the component's HTML template
     * Creates the shadow DOM structure for the accordion with proper ARIA attributes
     *
     * @method
     * @private
     * @returns {TemplateResult} The component's rendered template with header and content areas
     * @description Generates the accessible HTML structure for the accordion with
     * appropriate CSS classes and ARIA attributes for accessibility
     */
    render() {
        if (!this.id) {
            this.id = this.generatedId;
        }

        return x`
            <h3 @click="${this.handleClick}" class="bolt-accordion-wc--header ${this.active ? 'bolt-accordion-wc--header__open' : ''}">
                <bolt-icon name="caret-down" decorative></bolt-icon>
                <button type="button" class="bolt-accordion-wc--header-button" aria-expanded="${this.active ? 'true' : 'false'}" @click="${this.handleHeaderClick}" id="${this.headerId}">${this.header}</button>
            </h3>
            <div
                aria-labelledby="${this.headerId}"
                aria-hidden="${this.active ? 'false' : 'true'}"
                class="bolt-accordion-wc--content ${this.active ? 'bolt-accordion-wc--content__open' : 'bolt-accordion-wc--content__close'}">
                <slot></slot>
            </div>
        `;
    }

    /**
     * Open accordion if not already open
     * Sets active state to true and emits an event for coordination
     *
     * @method
     * @public
     * @fires bolt-accordion-open - Custom event emitted when the accordion is opened
     * @description Expands the accordion content and notifies parent components
     * via a custom event, but only if the accordion was previously closed
     */
    open() {
      if (!this.active) { // if closed
        this.active = true; // open
        // announce opening
        this.$emit('bolt-accordion-open', {
          bubbles: true,
        });
      }
    }

    /**
     * Close accordion if not already closed
     * Sets active state to false and emits an event for coordination
     *
     * @method
     * @public
     * @fires bolt-accordion-close - Custom event emitted when the accordion is closed
     * @description Collapses the accordion content and notifies parent components
     * via a custom event, but only if the accordion was previously open
     * @example
     * // Programmatically close an accordion
     * document.querySelector('bolt-accordion').close();
     */
    close() {
      if (this.active) { // if open
        this.active = false; // close
        // announce closure
        this.$emit('bolt-accordion-close', {
          bubbles: true,
        });
      }
    }
}

var CSS$D = ":host,\n:host * {\n  /* css-core:utils/reset.component */\n  border: 0;\n  font: inherit;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  vertical-align: baseline;\n}\n\n:host {\n  display: block;\n}\n\n.bolt-accordion-group-wc--toggle-button {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(14px, 14px + 2px * (var(--bolt-typography-basis) - 360) / 840, 16px);\n  line-height: clamp(1.43, 1.43 + 0.07 * (var(--bolt-typography-basis) - 360) / 840, 1.5);\n  color: var(--bolt-context-link);\n  text-decoration: underline;\n  text-underline-offset: 4px;\n  transition: all 150ms, box-shadow 350ms;\n  background: none;\n  cursor: pointer;\n  display: none;\n  margin-left: 12px;\n  text-align: right;\n  white-space: nowrap;\n}\n.bolt-accordion-group-wc--toggle-button:active {\n  color: var(--bolt-context-link);\n}\n.bolt-accordion-group-wc--toggle-button:hover {\n  color: var(--bolt-context-link);\n}\n.bolt-accordion-group-wc--toggle-button:focus {\n  /* css-core:context.focus */\n  box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n  outline: none;\n  text-decoration-color: transparent;\n  color: var(--bolt-context-link);\n}\n.bolt-accordion-group-wc--toggle-button:hover {\n  text-decoration-color: rgba(0, 0, 0, 0);\n}\n.bolt-accordion-group-wc--toggle-button:focus {\n  text-decoration-color: rgba(0, 0, 0, 0);\n}\n.bolt-accordion-group-wc__toggleable .bolt-accordion-group-wc--toggle-button {\n  display: block;\n}\n.bolt-accordion-group-wc--heading {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  letter-spacing: 0px;\n  font-size: clamp(22px, 22px + 2px * (var(--bolt-typography-basis) - 360) / 840, 24px);\n  line-height: clamp(1.45, 1.45 + -0.12 * (var(--bolt-typography-basis) - 360) / 840, 1.33);\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: var(--bolt-space-sm);\n}\n.bolt-accordion-group-wc--heading span {\n  align-items: center;\n  display: flex;\n}";

/**
 * Accordions contain groups of screen elements that can be hidden and revealed independently of each other.
 * They consist of the `bolt-accordion-group` and `bolt-accordion` components and both *must* be used together.
 *
 * The `<bolt-accordion-group>` groups together a set of accordions and provides coordinated control over all child accordions, including functionality to open or close all accordions simultaneously.
 *
 * @class BoltAccordionGroupElement
 * @element BoltAccordionGroupElement
 * @tagname bolt-accordion-group
 * @extends {BoltElement}
 * @since 3.0.0
 *
 * @property {String} header - (Required) A label for the group of accordions displayed above the first accordion.
 * @property {Boolean} showtoggle - (Optional) If present, displays the "Open all" / "Close all" toggle control beside the header.
 *
 * @slot default - Contains the child `<bolt-accordion>` elements
 *
 * @event {CustomEvent} bolt-accordion-group-open-all - Fires after `openAll()` is called.
 * @event {CustomEvent} bolt-accordion-group-close-all - Fires after `closeAll()` is called.
 *
 * @method openAll() - Opens all accordion children in the group.
 * @method closeAll() - Closes all accordion children in the group.
 * @method open(index) - Opens a specific accordion at the given index.
 * @method close(index) - Closes a specific accordion at the given index.
 * @method getAccordions() - Returns an array of all direct child accordion elements.
 *
 * @see https://bolt.nwie.net/web/components/accordion
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @example
 * <bolt-accordion-group header="FAQ Section" showtoggle>
 *   <bolt-accordion header="Question 1">
 *     <p>Answer to question 1</p>
 *   </bolt-accordion>
 *   <bolt-accordion header="Question 2">
 *     <p>Answer to question 2</p>
 *   </bolt-accordion>
 * </bolt-accordion-group>
 */
class BoltAccordionGroupElement extends BoltElement {
    /**
     * The component's tag name, used for Custom Element registration
     * @readonly
     * @type {String}
     * @static
     */
    static get is() {
      return 'bolt-accordion-group'
    }

    /**
     * LitElement properties/attributes definition
     * @readonly
     * @type {Object}
     * @static
     */
    static get properties() {
        return {
            header : { type : String },
            showtoggle : { type: Boolean },
            hasClosedAccordions : { type : Boolean }
        }
    }

    /**
     * Creates an instance of BoltAccordionGroupElement
     * Initializes properties with default values and binds event handlers
     *
     * @constructor
     * @description Sets up initial property values, generates a unique identifier, and binds event handlers for child accordion interactions
     */
    constructor() {
        super();

        this.header = '';
        this.showtoggle = false;
        /** @private {Boolean} - Tracks whether any accordions in the group are closed, used to determine toggle button state */
        this.hasClosedAccordions = true;
        /** @private {String} - Randomly generated unique ID for the accordion group to ensure DOM uniqueness */
        this.generatedId = this.generateId();
        /** @private {Function} - Bound event handler for accordion open events to maintain proper 'this' context */
        this._onAccordionOpen = this._onAccordionOpen.bind(this);
        /** @private {Function} - Bound event handler for accordion close events to maintain proper 'this' context */
        this._onAccordionClose = this._onAccordionClose.bind(this);
    }

    /**
     * Generates a unique ID for the accordion group component
     * Uses a random number to ensure uniqueness across multiple instances
     *
     * @method
     * @private
     * @param {string} [type] - Optional type identifier for the generated ID
     * @returns {string} A unique ID string prefixed with 'bolt-accordion-group-wc--'
     * @description Creates predictable but unique IDs for accessibility and DOM references
     */
    generateId(type) {
        return 'bolt-accordion-group-wc--' + (type ? (type + '--') : '') + Math.floor(Math.random() * 10000000);
    }

    /**
     * Getter for component's CSS styles
     * Returns the imported CSS styles that will be applied to the shadow DOM
     *
     * @readonly
     * @type {CSSResult}
     * @static
     * @private
     * @description Defines the component's appearance through CSS imported from _shadow.scss
     */
    static get styles() {
      return CSS$D;
    }

    /**
     * Checks if any accordion children are in closed state
     * Updates the hasClosedAccordions property based on current state
     *
     * @method
     * @private
     * @description Iterates through all child accordions to determine if any
     * are closed, which affects the state of the "Open all"/"Close all" toggle.
     * Returns early if any closed accordion is found.
     */
    _checkClosedAccordions() {
        let $nodes = this.getAccordions();
        for (var i = 0; i < $nodes.length; i++) {
            let $node = $nodes[i];
            if (!$node.active) {
                this.hasClosedAccordions = true;
                return;
            }
        }
        this.hasClosedAccordions = false;
        return;
    }

    /**
     * Renders the component's HTML template
     * Creates the shadow DOM structure for the accordion group with header and toggle controls
     *
     * @method
     * @private
     * @returns {TemplateResult} The component's rendered template with header, toggle button, and slot for child accordions
     * @description Generates the HTML structure for the accordion group, including conditional
     * rendering of the header and toggle button based on component properties.
     * Updates the closed accordions state before rendering.
     */
    render() {
        this._checkClosedAccordions();
        return x`
          <div class="bolt-accordion-group-wc ${this.showtoggle ? 'bolt-accordion-group-wc__toggleable' : ''}">
            ${this.header ? x`
              <h2 class="bolt-accordion-group-wc--heading">
                ${this.header}
                <span>
                  <button
                    @click="${this._onToggleClick}"
                    aria-live="polite"
                    class="bolt-accordion-group-wc--toggle-button"
                    type="button"
                  >
                    ${this.hasClosedAccordions ? 'Open' : 'Close'} all
                  </button>
                </span>
              </h2>
            ` : ''}
            <slot class="bolt-accordion-group-wc--slot"></slot>
          </div>
        `;
    }

    /**
     * Handles click events on the toggle button
     * Opens or closes all accordions based on current state
     *
     * @method
     * @private
     * @param {Event} e - The click event object from the browser
     * @description Controls the "Open all"/"Close all" functionality, calling
     * either openAll() or closeAll() based on whether any accordions are currently closed.
     * Requests a UI update to reflect the new state.
     */
    _onToggleClick(e){
      this.requestUpdate();

      e.preventDefault();
      if (this.hasClosedAccordions) {
        this.openAll();
      } else {
        this.closeAll();
      }
    }

    /**
     * Get array of all direct child bolt-accordion elements
     * Uses :scope selector to avoid nested accordions in other groups
     *
     * @method
     * @private
     * @returns {Array<Element>} Array of accordion elements that are direct children
     * @description Retrieves only direct child accordion elements using the :scope selector,
     * ensuring that nested accordion groups don't interfere with operations.
     * Used by various methods that need to operate on all accordions in this group.
     */
    getAccordions(){
      let $accordions = this.querySelectorAll(':scope > bolt-accordion');
      return Array.from($accordions);
    }

    /**
     * Lifecycle callback when component is connected to DOM
     * Adds event listeners for accordion open/close events
     *
     * @method
     * @private
     * @description Sets up event listeners to detect when child accordions change state,
     * allowing the group to coordinate activities like the "Open all"/"Close all" toggle.
     * Uses the previously bound handler methods to maintain proper context.
     */
    $onConnect() {
      this.addEventListener('bolt-accordion-open', this._onAccordionOpen);
      this.addEventListener('bolt-accordion-close', this._onAccordionClose);
    }

    /**
     * Lifecycle callback when component is disconnected from DOM
     * Removes event listeners to prevent memory leaks
     *
     * @method
     * @private
     * @description Performs cleanup by removing event listeners that were added during connect,
     * ensuring proper garbage collection and preventing memory leaks when the component
     * is removed from the DOM.
     */
    $onDisconnect() {
      this.removeEventListener('bolt-accordion-open', this._onAccordionOpen);
      this.removeEventListener('bolt-accordion-close', this._onAccordionClose);
    }

    /**
     * Closes a specific accordion at the given index
     * Provides programmatic control over individual accordions
     *
     * @method
     * @public
     * @param {String} index - The zero-based index of the accordion to close
     * @description Finds the accordion at the specified index and calls its close method.
     * Logs a warning if no accordion is found at that index.
     * @example
     * // Close the first accordion in a group
     * document.querySelector('bolt-accordion-group').close(0);
     */
    close(index) {
        let idx = parseInt(index);
        let accordion = this.getAccordions()[idx];

        if (accordion) {
            accordion.close();
        } else {
            console.warn(`(BoltAccordionGroup#close) Could not find an accordion to close at index ${index}`);
        }
    }

    /**
     * Closes all accordion children
     * Provides a convenient way to collapse all accordions at once
     *
     * @method
     * @public
     * @fires bolt-accordion-group-close-all - Custom event emitted when all accordions are closed
     * @description Iterates through all child accordions and calls their close method,
     * then emits an event to notify listeners of the group-wide change.
     * Used by the toggle button and available for programmatic control.
     */
    closeAll() {
        this.getAccordions().forEach(accordion => {
            accordion.close();
        });
        this.$emit('bolt-accordion-group-close-all');
    }

    /**
     * Opens a specific accordion at the given index
     * Provides programmatic control over individual accordions
     *
     * @method
     * @public
     * @param {String} index - The zero-based index of the accordion to open
     * @description Finds the accordion at the specified index and calls its open method.
     * Logs a warning if no accordion is found at that index.
     */
    open(index) {
        let idx = parseInt(index);
        let accordion = this.getAccordions()[idx];

        if (accordion) {
            accordion.open();
        } else {
            console.warn(`(BoltAccordionGroup#open) Could not find an accordion to open at index ${index}`);
        }
    }

    /**
     * Opens all accordion children
     * Provides a convenient way to expand all accordions at once
     *
     * @method
     * @public
     * @fires bolt-accordion-group-open-all - Custom event emitted when all accordions are opened
     * @description Iterates through all child accordions and calls their open method,
     * then emits an event to notify listeners of the group-wide change.
     * Used by the toggle button and available for programmatic control.
     * @example
     * // Open all accordions in a group
     * document.querySelector('bolt-accordion-group').openAll();
     */
    openAll() {
        this.getAccordions().forEach(accordion => {
            accordion.open();
        });
        this.$emit('bolt-accordion-group-open-all');
    }

    /**
     * Event handler for accordion open events
     * Stops propagation and updates the closed accordions state
     *
     * @method
     * @private
     * @param {CustomEvent} evt - The accordion open event from a child component
     * @description Handles notifications from child accordions when they open,
     * preventing event bubbling and updating the group's state to reflect
     * the new open/closed status of all accordions, which affects the toggle button.
     */
    _onAccordionOpen(evt) {
      evt.stopPropagation(); // don't bubble out
      this._checkClosedAccordions();
    }

    /**
     * Event handler for accordion close events
     * Stops propagation and updates the closed accordions state
     *
     * @method
     * @private
     * @param {CustomEvent} evt - The accordion close event from a child component
     * @description Handles notifications from child accordions when they close,
     * preventing event bubbling and updating the group's state to reflect
     * the new open/closed status of all accordions, which affects the toggle button.
     */
    _onAccordionClose(evt) {
      evt.stopPropagation(); // don't bubble out
      this._checkClosedAccordions();
    }
}

/**
 * This module exports the accordion components and their initialization function.
 * The accordion components consist of:
 * - `<bolt-accordion>`: Individual accordion panel that can be opened/closed
 * - `<bolt-accordion-group>`: Container that groups multiple accordions
 *
 * @module bolt-accordion
 * @since 3.0.0
 *
 * @see {@link ./elements/bolt-accordion|BoltAccordionElement} - The individual accordion component class
 * @see {@link ./elements/bolt-accordion-group|BoltAccordionGroupElement} - The accordion group component class
 */



/**
 * Initializes the accordion components by registering them as custom elements
 *
 * This function:
 * 1. Initializes dependencies (Icon component)
 * 2. Registers the BoltAccordionElement
 * 3. Registers the BoltAccordionGroupElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$x() {
  // Upstream
  await initialize$y();

  // Local
  BoltAccordionElement.$define();
  BoltAccordionGroupElement.$define();
}

var index$w = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltAccordionElement: BoltAccordionElement,
  BoltAccordionGroupElement: BoltAccordionGroupElement,
  initialize: initialize$x
});

var CSS$C = ":host {\n  display: block;\n}\n\n#root {\n  display: flex;\n  flex-direction: row;\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(12px, 12px + 2px * (var(--bolt-typography-basis) - 360) / 840, 14px);\n  line-height: clamp(1.33, 1.33 + 0.1 * (var(--bolt-typography-basis) - 360) / 840, 1.43);\n}\n#root > * {\n  margin: 0;\n}\n#root > * + * {\n  margin-left: 4px;\n}\n\n#icon {\n  --fg: var(--bolt-theme-onError);\n  color: var(--bolt-theme-error);\n  background-image: radial-gradient(circle, var(--fg), var(--fg) 60%, rgba(0, 0, 0, 0) 60%);\n}\n\n#message {\n  font-weight: 500;\n}";

/**
 * Field error lets the user know when there is a problem.
 *
 * The `<bolt-field-error>` web component displays a red exclamation icon along with a custom error message. It is already included within existing web components and is utilized via the parent component's `error` property. Additionally, `<bolt-field-error>` can be added directly into existing HTML patterns.
 *
 * @class BoltFieldErrorElement
 * @element BoltFieldErrorElement
 * @extends {BoltElement}
 * @tagname bolt-field-error
 * @since 7.0.0
 *
 * @see https://bolt.nwie.net/web/components/field-error
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 */
class BoltFieldErrorElement extends BoltElement {
  /**
   * The component's tag name, used for Custom Element registration
   * @readonly
   * @type {String}
   * @static
   */
  static get is() {
    return 'bolt-field-error';
  }

  /**
   * Getter for component's CSS styles
   * @readonly
   * @type {CSSResult}
   * @static
   */
  static get styles() {
    return CSS$C;
  }

  /**
   * Renders the component's HTML template
   *
   * @returns {TemplateResult} The component's rendered template
   * @override
   * @protected
   */
  render() {
    return x`
      <div id="root">
        <bolt-icon
          decorative
          fluid
          id="icon"
          name="exclamation-circle-filled"
        ></bolt-icon>

        <div id="message">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

/**
 * This module exports the field error component and its initialization function.
 * The field error component displays validation error messages for form fields,
 * providing clear feedback to users when input validation fails.
 *
 * @module bolt-field-error
 * @since 7.0.0
 *
 * @see {@link ./elements/bolt-field-error|BoltFieldErrorElement}
 */


/**
 * Initializes the field error component by registering it as a custom element
 *
 * This function:
 * 1. Initializes dependencies (Icon component)
 * 2. Registers the BoltFieldErrorElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$w() {
  // Upstream
  await initialize$y();

  // Local
  BoltFieldErrorElement.$define();
}

var index$v = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltFieldErrorElement: BoltFieldErrorElement,
  initialize: initialize$w
});

var CSS$B = ":host,\n:host * {\n  /* css-core:utils/reset.component */\n  border: 0;\n  font: inherit;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  vertical-align: baseline;\n}\n\n.bolt-overlay-wc {\n  display: flex;\n  z-index: 500;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: color(from var(--bolt-theme-scrim) srgb r g b/var(--bolt-theme-scrimOpacity));\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n}\n.bolt-overlay-wc:not(.bolt-overlay-wc--no-fade) {\n  transition: 350ms;\n}\n.bolt-overlay-wc--active {\n  opacity: 1;\n  pointer-events: auto;\n  visibility: visible;\n}";

/**
 * Overlay component provides a backdrop layer that can be displayed over other content.
 * Commonly used as a foundation for modals, dialogs, and other overlay-based UI patterns.
 * Supports fade animations and programmatic show/hide functionality.
 *
 * @class BoltOverlayElement
 * @element BoltOverlayElement
 * @extends {BoltElement}
 * @tagname bolt-overlay
 * @since 3.0.0
 *
 * @property {String} type - (Optional) The type of overlay for styling purposes.
 * @property {Boolean} nofade - (Optional) When true, disables the fade animation when showing/hiding the overlay.
 * @property {Boolean} active - (Optional) Controls the visibility of the overlay. When true, the overlay is displayed.
 *
 */
class BoltOverlayElement extends BoltElement {
    /**
     * The component's tag name, used for Custom Element registration
     * @readonly
     * @type {String}
     * @static
     */
    static get is() {
      return 'bolt-overlay';
    }

    /**
     * LitElement properties/attributes definition.
     * Defines all the reactive properties that can be set as attributes or properties
     * @readonly
     * @type {Object}
     * @static
     */
    static get properties() {
        return {
            type: { type: String },
            nofade: { type: Boolean },
            active: { type: Boolean },
        }
    }

    /**
     * Creates an instance of BoltOverlayElement
     * Initialize public properties with default values
     *
     * @constructor
     */
    constructor() {
        super();
        this.nofade = false;
    }

    /**
     * Getter for component's CSS styles
     * @readonly
     * @type {CSSResult}
     * @static
     */
    static get styles() {
        return CSS$B;
    }

    /**
     * Shows the overlay by setting the active property to true
     * @public
     */
    show(){
        this.active = true;
    }

    /**
     * Hides the overlay by setting the active property to false
     * @public
     */
    hide(){
        this.active = false;
    }

    /**
     * Renders the component's HTML template
     * Creates the overlay structure with conditional CSS classes for state and animations
     *
     * @returns {TemplateResult} The component's rendered template
     * @override
     */
    render() {
        return x`
          <div
            class="
              bolt-overlay-wc
              ${this.nofade ? 'bolt-overlay-wc--no-fade' : ''}
              ${this.active ? 'bolt-overlay-wc--active' : ''}
            "
            tabindex="-1"
          >
            <slot></slot>
          </div>
        `;
    }
}

/**
 * Initializes the overlay component by defining the custom element
 * This function should be called to register the bolt-overlay element with the browser
 *
 * @async
 * @function
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$v() {
  // Upstream
  // n/a

  // Local
  BoltOverlayElement.$define();
}

var index$u = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltOverlayElement: BoltOverlayElement,
  initialize: initialize$v
});

var CSS$A = ":host,\n:host * {\n  /* css-core:utils/reset.component */\n  border: 0;\n  font: inherit;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  vertical-align: baseline;\n}\n\n:host {\n  visibility: hidden;\n  display: block;\n}\n:host bolt-busy {\n  --size: 40px;\n}\n\n:host([fullscreen]) {\n  position: absolute;\n}\n:host([fullscreen]) bolt-busy {\n  --size: 80px;\n}\n:host([fullscreen]) #message-wrapper {\n  background: var(--bolt-theme-surfaceBrightest);\n  padding-block: var(--bolt-space-lg);\n  width: 320px;\n}\n\n:host([minimal]) {\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n}\n:host([minimal]) bolt-busy {\n  --size: 100%;\n}\n\n.bolt-waiting-indicator-wc:not(.bolt-waiting-indicator-wc--fullscreen) {\n  height: 0;\n  opacity: 0;\n  transition: 350ms;\n}\n@media (prefers-reduced-motion: reduce) {\n  .bolt-waiting-indicator-wc:not(.bolt-waiting-indicator-wc--fullscreen) {\n    transition: opacity 350ms;\n  }\n}\n.bolt-waiting-indicator-wc:not(.bolt-waiting-indicator-wc--fullscreen).bolt-waiting-indicator-wc--active {\n  height: auto;\n  opacity: 1;\n}\n.bolt-waiting-indicator-wc p.bolt-waiting-indicator-wc--text {\n  margin-top: var(--bolt-space-lg);\n  text-align: center;\n}\n.bolt-waiting-indicator-wc--spinner {\n  display: block;\n  position: relative;\n  width: 40px;\n  height: 40px;\n  margin: 0 auto;\n}\n.bolt-waiting-indicator-wc bolt-overlay .bolt-waiting-indicator-wc--spinner {\n  width: 80px;\n  height: 80px;\n}\n.bolt-waiting-indicator-wc bolt-overlay .bolt-waiting-indicator-wc--spinner bolt-busy {\n  --bolt-context-accent: var(--bolt-theme-accent);\n}\n.bolt-waiting-indicator-wc bolt-overlay .bolt-waiting-indicator-wc--text {\n  color: var(--bolt-theme-onSurface);\n}";

/**
 * Waiting indicators visually indicate that progress is being made toward the completion of a process.
 *
 * The `bolt-waiting-indicator` Web Component should be passed its status message as its content. If no content is provided, the default message will be "Please wait..."
 *
 * @class BoltWaitingIndicatorElement
 * @element BoltWaitingIndicatorElement
 * @extends {BoltElement}
 * @tagname bolt-waiting-indicator
 * @since 3.0.0
 *
 * @property {Boolean} fullscreen - (Optional) If present, the waiting indicator displays as a full page overlay.
 * @property {Boolean} starthidden - (Optional) If present, the waiting indicator will initially not be visible in the page content.
 * @property {Boolean} minimal - (Optional) If present, the waiting indicator will initially not be visible in the page content.
 * @property {Boolean} active - DESCRIBE HERE
 *
 * @slot (default) - Contains the text message to display (defaults to "Please wait...")
 *
 * @see https://bolt.nwie.net/web/components/waiting-indicator
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @example
 * <bolt-waiting-indicator>
 *   Loading content...
 * </bolt-waiting-indicator>
 *
 * @example
 * <!-- Fullscreen overlay indicator -->
 * <bolt-waiting-indicator fullscreen>
 *   Processing your request...
 * </bolt-waiting-indicator>
 *
 * @example
 * <!-- Minimal spinner only -->
 * <bolt-waiting-indicator minimal></bolt-waiting-indicator>
 *
 */
class BoltWaitingIndicatorElement extends BoltElement {
    /**
     * Gets the component's tag name identifier.
     *
     * @static
     * @readonly
     * @returns {String} The element's tag name
     * @public
     */
    static get is() {
      return 'bolt-waiting-indicator';
    }

    /**
     * Defines the reactive properties for this element.
     * Specifies which attributes should trigger re-rendering when changed.
     *
     * @static
     * @readonly
     * @returns {Object} Property configuration object with type definitions
     * @public
     */
    static get properties() {
        return {
            fullscreen: { type: Boolean },
            starthidden: { type: Boolean },
            minimal: { type: Boolean },
            active: { type: Boolean },
        }
    }

    /**
     * Creates a new BoltWaitingIndicatorElement instance and initializes default property values.
     * Sets up the component with fullscreen disabled, visible by default, and standard display mode.
     *
     * @constructor
     * @public
     */
    constructor() {
        super();
        this.fullscreen = false;
        this.starthidden = false;
        this.minimal = false;
    }

    /**
     * Provides the component's CSS styles from the imported stylesheet.
     * These styles are automatically applied to the shadow DOM.
     *
     * @static
     * @readonly
     * @returns {CSSResult} Compiled CSS styles for the component
     * @public
     */
    static get styles() {
        return CSS$A;
    }

    /**
     * Lifecycle method called after the first render is complete.
     * Shows the indicator if it's not configured to start hidden.
     *
     * @protected
     */
    firstUpdated(){
        if(!this.starthidden){
            this.show();
        }
    }

    /**
     * Lifecycle method called when properties change.
     * Handles scroll locking and overlay management for fullscreen mode.
     *
     * @param {Map} changedProperties - Map of changed property names to previous values
     * @protected
     */
    updated(changedProperties) {
        if(changedProperties.has('active')) {
          if(this.active === true && this.fullscreen){
            // Scroll lock behind overlay
            this.shadowRoot.querySelector('bolt-overlay').active = true;
            document.querySelector('html').classList.add('bolt-scroll-lock');
          } else if(!this.active &&this.fullscreen) {
            this.shadowRoot.querySelector('bolt-overlay').active = false;
            document.querySelector('html').classList.remove('bolt-scroll-lock');
          }
        }
    }

    /**
     * Shows the waiting indicator and makes it visible to users.
     * Optionally hides the indicator automatically after a specified duration.
     *
     * @param {Number} [duration] - Optional duration in milliseconds to auto-hide
     * @public
     */
    show(duration) {
      // Show waiting indicator
      this.style.visibility = "visible";
      this.active = true;

      // Hide after specified duration (optional)
      if(duration){
          setTimeout(() => {
            this.hide();
          }, duration);
      }
    }

  /**
   * Hides the waiting indicator and makes it invisible to users.
   * Sets the active state to false and applies hidden visibility.
   *
   * @public
   */
  hide() {
      // Hide waiting indicator
      this.active = false;
      this.style.visibility = "hidden";
    }

    /**
     * Renders the waiting indicator component with appropriate layout based on mode.
     * Provides different templates for fullscreen, minimal, and standard displays.
     * Includes accessibility attributes and proper semantic structure.
     *
     * @returns {TemplateResult} The complete HTML template for the indicator
     * @protected
     */
    render() {
      if (this.fullscreen) {
        return x`
          <div
            class="
              bolt-waiting-indicator-wc
              bolt-waiting-indicator-wc--fullscreen
              ${this.active ? 'bolt-waiting-indicator-wc--active' : ''}
            "
            role="status"
            aria-live="polite"
          >
            <bolt-overlay>
              <div id="message-wrapper">
                <div class="bolt-waiting-indicator-wc--spinner">
                  <bolt-busy></bolt-busy>
                </div>
                <p class="bolt-waiting-indicator-wc--text">
                  <slot>Please wait...</slot>
                </p>
              </div>
            </bolt-overlay>
          </div>
        `;
      }

      if (this.minimal) {
        return x`<bolt-busy></bolt-busy>`
      }

      return x `
        <div
          class="
            bolt-waiting-indicator-wc
            ${this.active ? 'bolt-waiting-indicator-wc--active' : ''}
          "
          role="status"
          aria-live="polite"
        >
          <div class="bolt-waiting-indicator-wc--spinner">
            <bolt-busy></bolt-busy>
          </div>
          <p class="bolt-waiting-indicator-wc--text">
            <slot>Please wait...</slot>
          </p>
        </div>
      `;
    }
}

var CSS$z = ":host {\n  --size: 40px;\n  aspect-ratio: 1;\n  display: inline-block;\n  flex: 0 0 auto;\n  width: var(--size);\n}\n\n:host([paused]) #shuttle {\n  animation-play-state: paused;\n}\n\n@keyframes roll {\n  0% {\n    rotate: 0;\n  }\n  50% {\n    rotate: 0.5turn;\n  }\n  100% {\n    rotate: 1turn;\n  }\n}\n#root {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  line-height: 1;\n}\n\nsvg {\n  aspect-ratio: 1;\n  overflow: visible;\n  width: 100%;\n}\nsvg circle {\n  cx: 20px;\n  cy: 20px;\n  fill: none;\n  r: 16px;\n  stroke-width: 4px;\n  stroke: var(--bolt-context-accent);\n}\nsvg #track {\n  stroke-opacity: 0.33;\n}\nsvg #shuttle {\n  animation: 1s roll linear infinite;\n  stroke-dasharray: 25px 100px;\n  stroke-linecap: round;\n  transform-origin: center;\n}";

/**
 * The bolt-busy component provides a minimal animated spinner for indicating loading or processing states.
 * It displays a circular progress indicator with smooth rotation animation that can be paused and resumed
 * programmatically. This component is used within {@link BoltWaitingIndicatorElement}.
 *
 * @class BoltBusyElement
 * @element BoltBusyElement
 * @extends {BoltElement}
 * @tagname bolt-busy
 * @since 3.0.0
 *
 * @see https://bolt.nwie.net/web/components/waiting-indicator
 *
 */
class BoltBusyElement extends BoltElement {
  /**
   * The component's tag name identifier.
   *
   * @static
   * @readonly
   * @type {String}
   * @public
   */
  static is = 'bolt-busy'

  /**
   * The component's CSS styles from the imported stylesheet.
   * These styles are automatically applied to the shadow DOM.
   *
   * @static
   * @readonly
   * @type {CSSResult}
   * @public
   */
  static styles = CSS$z

  /**
   * Renders the busy spinner component with SVG animation elements.
   * Creates a circular track and animated shuttle for the loading indicator.
   *
   * @returns {TemplateResult} The complete HTML template for the spinner
   * @protected
   */
  render() {
    return x`
      <div id="root">
        <svg viewBox="0 0 40 40">
          <circle id="track"></circle>
          <circle id="shuttle"></circle>
        </svg>
      </div>
    `
  }

  /**
   * Pauses the spinner animation by setting the paused attribute.
   * This stops the rotation animation while maintaining the visual state.
   *
   * @public
   */
  pause() {
    this.setAttribute('paused', '');
  }

  /**
   * Resumes the spinner animation by removing the paused attribute.
   * This restarts the rotation animation from its current position.
   *
   * @public
   */
  play() {
    this.removeAttribute('paused');
  }
}

/**
 * This module exports the waiting indicator components and their initialization function.
 * The waiting indicator components consist of:
 * - `<bolt-waiting-indicator>`: Visual indicator that progress is being made toward the completion of a process.
 * - `<bolt-busy>`: Busy state indicator for form elements and interactions
 *
 * @module bolt-waiting-indicator
 * @since 3.0.0
 *
 * @see {@link ./elements/bolt-waiting-indicator|BoltWaitingIndicatorElement}
 * @see {@link ./elements/bolt-busy|BoltBusyElement}
 */


/**
 * Initializes the waiting indicator components by registering them as custom elements
 *
 * This function:
 * 1. Initializes dependencies (Overlay component)
 * 2. Registers the BoltBusyElement
 * 3. Registers the BoltWaitingIndicatorElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$u() {
  // Upstream
  await initialize$v();

  // Local
  BoltBusyElement.$define();
  BoltWaitingIndicatorElement.$define();
}

var index$t = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltBusyElement: BoltBusyElement,
  BoltWaitingIndicatorElement: BoltWaitingIndicatorElement,
  initialize: initialize$u
});

var CSS$y = ".bolt-annotation.bolt-optional {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  letter-spacing: 0px;\n  font-size: clamp(11px, 11px + 1px * (var(--bolt-typography-basis) - 360) / 840, 12px);\n  line-height: clamp(1.45, 1.45 + -0.12 * (var(--bolt-typography-basis) - 360) / 840, 1.33);\n  font-style: italic;\n  font-weight: 400;\n}\n\n:host,\n:host * {\n  /* css-core:utils/reset.component */\n  border: 0;\n  font: inherit;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  vertical-align: baseline;\n}\n\n:host {\n  display: block;\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(14px, 14px + 2px * (var(--bolt-typography-basis) - 360) / 840, 16px);\n  line-height: clamp(1.43, 1.43 + 0.07 * (var(--bolt-typography-basis) - 360) / 840, 1.5);\n}\n:host bolt-field-error {\n  margin-top: 4px;\n  color: var(--bolt-context-onSurface);\n}\n\n:host([disabled]),\n:host([state=disabled]) {\n  opacity: 0.5;\n}\n\n:host([disabled]) *,\n:host([state=disabled]) * {\n  cursor: not-allowed;\n}\n\n:host([inputsize]) .bolt-textfield-wc--input-container {\n  display: inline-flex;\n}\n\n#label-wrapper {\n  margin-bottom: 4px;\n}\n\n.visually-hidden {\n  border: 0 !important;\n  outline: none !important;\n  box-shadow: none !important;\n  width: 1px !important;\n  height: 1px !important;\n  clip: rect(1px, 1px, 1px, 1px); /* old & current Browsers */\n  clip-path: inset(50%); /* browsers in the future */\n  white-space: nowrap;\n  margin: -1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  z-index: -99999 !important;\n  color: transparent;\n  background-color: transparent;\n  text-shadow: none;\n}\n\n.bolt-textfield-wc--input-container {\n  anchor-name: --input-container;\n  --border-color: var(--bolt-theme-outline);\n  --pad-y: var(--bolt-space-xs);\n  display: flex;\n  max-width: 100%;\n  background: var(--bolt-theme-inputSurface);\n  transition: all 350ms;\n  border: 1px solid var(--border-color);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.bolt-textfield-wc--input-container > * {\n  /* css-core:context.reset */\n  --bolt-context-surface: var(--bolt-theme-surface);\n  --bolt-context-onSurface: var(--bolt-theme-onSurface);\n  --bolt-context-onSurfaceVariant: var(--bolt-theme-onSurfaceVariant);\n  --bolt-context-outline: var(--bolt-theme-outline);\n  --bolt-context-outlineVariant: var(--bolt-theme-outlineVariant);\n  --bolt-context-focus: var(--bolt-theme-focus);\n  --bolt-context-link: var(--bolt-theme-link);\n  --bolt-context-accent: var(--bolt-theme-accent);\n  --bolt-context-accentHigh: var(--bolt-theme-accentHigh);\n  --bolt-context-accentHighest: var(--bolt-theme-accentHighest);\n  --bolt-context-onAccent: var(--bolt-theme-onAccent);\n}\n.bolt-textfield-wc--input-container__has-error {\n  --border-color: var(--bolt-theme-error);\n  border-width: 2px;\n}\n.bolt-textfield-wc--input-container:focus-within {\n  /* css-core:context.focus */\n  box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n  outline: none;\n  text-decoration-color: transparent;\n  background: var(--bolt-theme-inputSurfaceHigh);\n}\n.bolt-textfield-wc--input-container:focus-within:not(.bolt-textfield-wc--input-container__has-error) {\n  --border-color: var(--bolt-theme-focus);\n}\n.bolt-textfield-wc--input {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(14px, 14px + 2px * (var(--bolt-typography-basis) - 360) / 840, 16px);\n  line-height: clamp(1.43, 1.43 + 0.07 * (var(--bolt-typography-basis) - 360) / 840, 1.5);\n  -webkit-appearance: none;\n  background: transparent;\n  border: 0;\n  border-radius: 0;\n  box-sizing: border-box;\n  color: var(--bolt-theme-onSurface);\n  margin: 0;\n  padding: var(--pad-y) var(--bolt-space-xs);\n  text-decoration: none;\n  transition: all 350ms;\n  min-width: 64px;\n  /* Chrome, Safari, Edge, Opera */\n  /* Hide arrows */\n}\n.bolt-textfield-wc--input:not([size]) {\n  flex-grow: 1;\n}\n.bolt-textfield-wc--input::placeholder {\n  color: var(--bolt-theme-onSurfaceVariant);\n  font-style: italic;\n}\n.bolt-textfield-wc--input::-ms-reveal {\n  display: none;\n}\n.bolt-textfield-wc--input:hover:not(:disabled):not(:focus) {\n  background: var(--bolt-theme-inputSurfaceHigh);\n}\n.bolt-textfield-wc--input:focus {\n  outline: none;\n  border-color: transparent;\n}\n.bolt-textfield-wc--input__right {\n  text-align: right;\n}\n.bolt-textfield-wc--input:not(.bolt-textfield-wc-arrows)::-webkit-outer-spin-button, .bolt-textfield-wc--input:not(.bolt-textfield-wc-arrows)::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.bolt-textfield-wc--input:not(.bolt-textfield-wc-arrows)[type=number] {\n  appearance: textfield;\n}\n.bolt-textfield-wc--icon-button {\n  outline: 2px dotted rgba(0, 0, 0, 0);\n  align-items: center;\n  background: var(--bolt-theme-inputSurface);\n  border: 0;\n  border-left: 1px solid var(--border-color);\n  cursor: pointer;\n  color: var(--bolt-theme-onSurface);\n  display: inline-flex;\n  padding: var(--pad-y);\n  transition: all 350ms;\n  flex-shrink: 0;\n}\n.bolt-textfield-wc--icon-button:enabled:hover {\n  background: var(--bolt-theme-inputSurfaceHigh);\n}\n.bolt-textfield-wc--icon-button:enabled:focus, .bolt-textfield-wc--icon-button:enabled:focus:hover {\n  outline-color: currentColor;\n  outline-offset: calc(-2px - var(--bolt-space-2xs));\n  background: var(--bolt-theme-inputSurfaceHigh);\n  transition: all 150ms;\n}\n.bolt-textfield-wc--prefix, .bolt-textfield-wc--suffix {\n  align-items: center;\n  border: 0;\n  color: var(--bolt-theme-onSurfaceVariant);\n  cursor: pointer;\n  display: inline-flex;\n}\n.bolt-textfield-wc--prefix-symbol, .bolt-textfield-wc--suffix-symbol {\n  font-size: clamp(16px, 16px + 4px * (var(--bolt-viewport-width) - 360) / 840, 20px);\n  line-height: 1;\n}\n.bolt-textfield-wc--prefix {\n  padding-left: 8px;\n}\n.bolt-textfield-wc--suffix {\n  padding-right: 8px;\n}\n.bolt-textfield-wc--label {\n  color: var(--bolt-context-onSurface);\n  font-weight: 500;\n}\n.bolt-textfield-wc--label__hidden {\n  height: 0;\n  margin: 0;\n  overflow: hidden;\n  position: absolute;\n}\n.bolt-textfield-wc--instructionaltext {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  letter-spacing: 0px;\n  font-size: clamp(11px, 11px + 1px * (var(--bolt-typography-basis) - 360) / 840, 12px);\n  line-height: clamp(1.45, 1.45 + -0.12 * (var(--bolt-typography-basis) - 360) / 840, 1.33);\n  margin-top: 4px;\n  color: var(--bolt-context-onSurface);\n}\n.bolt-textfield-wc--indicator {\n  align-items: center;\n  display: flex;\n  opacity: 0;\n  padding: var(--pad-y);\n  transition: all 350ms;\n}\n.bolt-textfield-wc--indicator__visible {\n  opacity: 1;\n}\n.bolt-textfield-wc--indicator bolt-waiting-indicator {\n  height: 1lh;\n  width: 1lh;\n}\n\n.indicator-error {\n  color: var(--bolt-theme-error);\n}\n.indicator-info, .indicator-question {\n  color: var(--bolt-theme-info);\n}\n.indicator-success {\n  color: var(--bolt-theme-success);\n}\n.indicator-warning {\n  color: var(--bolt-theme-warning);\n}";

/**
 * Default data-test attribute values for textfield elements
 * @type {Object.<string, string>}
 */
const DATATEST_DEFAULTS$5 = {
  input: 'input',
  button: 'button'
};

/**
 * Mapping from textfield indicator to icon name
 * @type {Object.<string, string>}
 */
const INDICATOR_ICONS = {
  error: 'exclamation-circle-filled',
  info: 'info-square-filled',
  question: 'question-circle-filled',
  success: 'checkmark-bold-circle-filled',
  warning: 'exclamation-triangle-filled',
};

/**
 * Mapping from password state to icon name
 * @type {Object.<string, string>}
 */
const PASSWORD_ICONS = {
  visible: 'eye-hide',
  obscured: 'eye-show',
};

/**
 * Text fields allow users to enter a single line of alphanumeric data.
 *
 * The `<bolt-textfield>` custom element creates a text field with a label and optional instructional and error text:
 *
 * @class BoltTextfieldElement
 * @element BoltTextfieldElement
 * @extends {BoltElement}
 * @tagname bolt-textfield
 * @since 3.0.0
 *
 * @property {String} label - (Conditionally Required) The label text for the input. Required if `arialabel` or `arialabelledby` are NOT present.
 * @property {String} arialabel - (Conditionally Required) Sets the aria-label attribute of the underlying `<input>` element. Should be included when using `prefix`/`prefixsymbol`/`suffix`/`suffixsymbol` to clearly describe the type of data to enter. Required if `label` or `arialabelledby` are NOT present.
 * @property {String} arialabelledby - (Conditionally Required) Sets the aria-labelledby attribute of the underlying `<input>` element. Required if `label` or `arialabel` are NOT present.
 * @property {String} value - (Optional) The initial or set value for the input.
 * @property {String} instructionaltext - (Optional) The instructional text to display below the input. This should be used to give users additional information about the expected content in the field.
 * @property {Boolean} disabled - (Optional) If present, disables the input field and associated interactive elements.
 * @property {String} error - (Optional)  The error message to display after the input. Should not be used when component is `disabled`. For slotted field error see {@link https://bolt.nwie.net/web/components/field-error/#text-field-with-error-slot|text field error slot}.
 * @property {Boolean} required - (Optional) If present, the field is required. Fields that are not required will show "(optional)".
 * @property {String} optionaltext - (Optional) Use to remove the "(optional)" text from non-required fields. Default is `show`. Possible values: [`show`, `hide`]
 * @property {String} type - (Optional) Any supported HTML text field input type.
 * @property {Boolean} showarrows - (Optional)  If present, displays spin arrows for `type="number"`, by default arrows are hidden.
 * @property {Number} maxlength - (Optional) Maximum allowed input length.
 * @property {Number} inputsize - (Optional) Sets the width of the input box in terms of average character widths. Prefix and suffix, if present, will be in addition to this width. If not specified, the input box will span the full width of its container.
 * @property {String} iconname - (Optional) The {@link https://bolt.nwie.net/foundations/visual-style/iconography|reference name} for the attached icon button.
 * @property {String} indicator - (Optional) Displays a status indicator on the right side of the textfield. Possible values: [`error`, `info`, `question`, `success`, `warning`, `waiting`]
 * @property {String} iconalt - (Optional) The `alt` text for the attached icon button.
 * @property {String} prefix - (Optional) Text displayed before the text input. Generally, this will be multiple characters.
 * @property {String} prefixsymbol - (Optional) Text displayed before the text input and stylized as a symbol. Generally, this will be a single character, e.g. "$"
 * @property {String} suffix - (Optional) Text displayed after the text input. Generally, this will be multiple characters, e.g. ".00".
 * @property {String} suffixsymbol - (Optional) Text displayed after the input and stylized as a symbol. Generally, this will be a single character, e.g. "%"
 * @property {String} aligninput - (Optional) Alignment of the text in the field. Defaults is `left`. Possible values: [`left`, `right`]
 * @property {Boolean} invalid - (Optional) If present, the field appears invalid.
 * @property {String} datatestinput - (Optional) property to configure the `data-test` value on the underlying `<input>` element. Default is `input`.
 *
 * @attribute {Boolean} spellcheck - (Optional) Defaults to `false`. Passed to native `<input>` element.
 * @attribute {String} autocomplete - (Optional) Defaults to `on`. Passed to native `<input>` element. Please see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete|possible values}.
 * @attribute {String} autocorrect - (Optional) Defaults to `off`. Passed to native `<input>` element. Possible values: [`on`, `off`]
 * @attribute {String} autocapitalize - (Optional) Defaults to `on`. Passed to native `<input>` element. Possible values: [`on`, `off`]
 * @attribute {String} inputmode - (Optional) Please see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode|standard behavior}. Passed to native `<input>` element.
 * @attribute {String} min - (Optional) Defines the minimum value that is acceptable and valid for the input containing the attribute. Should only be used with the `number` type. Passed to native `<input>` element.
 * @attribute {String} max - (Optional) Defines the maximum value that is acceptable and valid for the input containing the attribute. Should only be used with the `number` type. Passed to native `<input>` element.
 * @attribute {String} step - (Optional) The step attribute is a number that specifies the granularity that the value must adhere to. Should only be used with the `number` type. Passed to native `<input>` element.
 * @attribute {String} pattern - (Optional) Please see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern|standard behavior}. Passed to native `<input>` element.
 *
 * @slot help - Uses the {@link BoltContextualHelp} component for additional help content.
 * @slot error - Custom error content. If provided, overrides the `error` property.
 * @slot afterinput - Content displayed after the input container.
 *
 * @event {Event} input - Emitted when the input value changes during user interaction.
 * @event {Event} change - Emitted when the input value is committed (e.g., on blur or Enter key).
 * @event {CustomEvent} bolt-icon-click - Emitted when the icon button is clicked.
 *
 * @see https://bolt.nwie.net/web/components/textfield
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 */
class BoltTextfieldElement extends BoltElement {
    /**
     * The component's tag name, used for Custom Element registration
     * @readonly
     * @type {String}
     * @static
     */
    static get is() {
      return 'bolt-textfield';
    }

    /**
     * Getter for component's CSS styles
     * @readonly
     * @type {CSSResult}
     * @static
     */
    static get styles() {
      return CSS$y;
    }

    /**
     * LitElement properties/attributes definition.
     * Defines all the reactive properties that can be set as attributes or properties
     * @readonly
     * @type {Object}
     * @static
     */
    static get properties() {
        return {
            value: { type: String },
            suggestion: { type: String },
            error: { type: String },
            required: { type: Boolean },
            optionaltext: { type: String },
            label: { type: String },
            state: { type: String },
            datatestinput: { type: String, default: DATATEST_DEFAULTS$5.input },
            datatestbutton: { type: String, default: DATATEST_DEFAULTS$5.button },
            disabled: { type : Boolean, reflect: true },
            instructionaltext: { type: String },
            type: { type: String },
            min: { type: String},
            max: { type: String},
            step: { type: String},
            spellcheck: { type: Boolean },
            autocomplete: { type: String },
            autocorrect: { type: String },
            autocapitalize: { type: String },
            inputmode: { type: String },
            maxlength: { type: Number },
            inputsize: { type: Number },
            iconname: { type : String },
            iconalt: { type : String },
            iconalthide: { type : String },
            iconaltshow: { type : String },
            pattern: { type: String },
            prefix: { type: String },
            prefixsymbol: { type: String },
            suffix: { type: String },
            suffixsymbol: { type: String},
            aligninput: { type: String },
            name: { type: String },
            arialabelledby: { type: String }, // public
            arialabel: { type: String }, // public
            ariacontrols: { type: String }, // private
            ariaactivedescendant: { type: String }, // private
            ariaautocomplete: { type: String }, // private
            inputrole: { type: String },
            ariaowns: { type: String }, // private
            ariaexpanded: { type: String }, // private
            indicator: { type: String, reflect: true },
            isIndicatorVisible: { type: Boolean, reflect: false },
            isPasswordPlainText: { type: Boolean, attribute : false },
            showVisibilityToggle: { type: Boolean, attribute: 'showvisibilitytoggle' },
            invalid: { type: Boolean },
            showarrows: {type: Boolean }
        }
    }

    /**
     * Creates an instance of BoltTextfieldElement
     * Initialize public and private properties with default values
     *
     * @constructor
     */
    constructor() {
        super();

        // Public state variables
        this.value = '';
        this.error = '';
        this.required = false;
        this.optionaltext = 'show';
        this.label = '';
        this.disabled = false;
        this.instructionaltext = '';
        this.type = 'text';
        this.min = '';
        this.max = '';
        this.step = '';
        this.spellcheck = false;
        this.autocomplete = 'on';
        this.autocorrect = 'off';
        this.autocapitalize = 'on';
        this.inputmode = "";
        this.maxlength = '';
        this.iconname = '';
        this.iconalt = '';
        this.iconalthide = '';
        this.iconaltshow = '';
        this.pattern = '';
        this.prefix = '';
        this.prefixsymbol = '';
        this.suffix = '';
        this.suffixsymbol = '';
        this.aligninput = 'left';
        this.arialabelledby = '';
        this.arialabel = '';
        this.indicator = '';
        this.showVisibilityToggle = false;
        this.invalid = false;
        this.showarrows = false;


        // Private state variables
        /** @private {String} */
        this.isPasswordField = this.tagName.toUpperCase() === 'BOLT-PASSWORD';
        /** @private {String} */
        this.suggestion = '';
        /** @private {String} */
        this.state = '';
        /** @private {Boolean} */
        this.hiddenlabel = false;
        /** @private {String} */
        this.name = '';
        /** @private {String} */
        this._labelledbyText = '';
        /** @private {String} */
        this.ariacontrols = '';
        /** @private {String} */
        this.ariaactivedescendant = '';
        /** @private {String} */
        this.ariaowns = '';
        /** @private {String} */
        this.inputrole = '';
        /** @private {String} */
        this.ariaautocomplete = '';
        /** @private {String} */
        this.ariaexpanded = '';
        /** @private {String} */
        this.determinedIndicator = ''; // used to debounce the indicator parameter so we can transition its visibility
        /** @private {Boolean} */
        this.isIndicatorVisible = false;
        /** @private {Boolean} */
        this.isPasswordPlainText = false;

        /** @private {String} Randomly generated ID for textfield*/
        this.generatedId = this.generateId();
        /** @private {String} Randomly generated ID for error (uses generatedId) */
        this.errorId = this.generateId('error');
        /** @private {String} Randomly generated ID for instructionaltext (uses generatedId) */
        this.instructionaltextId = this.generateId('instructionaltext');
        /** @private {String} Randomly generated ID for label (uses generatedId) */
        this.labelId = this.generateId('label');
    }

    /**
     * Lifecycle method called when the element is connected to the DOM
     * Sets up focusable behavior for the component
     *
     * @override
     */
    $onConnect() {
      this.setAttribute('bolt-focusable', '');
    }

    /**
     * Lifecycle method called after the first render
     * Sets up initial indicator state if provided
     *
     * @param {Map} changedProperties - Map of changed properties and their previous values
     * @override
     */
    // property changes will trigger additional updates
    firstUpdated(changedProperties) {
        changedProperties.forEach( (oldValue, propName) => {
            // if an indicator was passed when the component was instantiated, set it
            if (propName === 'indicator'
                && this.determinedIndicator !== ''
                && this.indicator !== '') {
                this.determinedIndicator = this.indicator;
                this.isIndicatorVisible = true;
            }
        });
    }

    /**
     * Lifecycle method called before each render
     * Handles property changes that don't require re-rendering
     *
     * @param {Map} changedProperties - Map of changed properties and their previous values
     * @override
     */
    // property changes do not trigger updates
    update(changedProperties) {
      changedProperties.forEach( (oldValue, propName) => {
        switch (propName) {
          case 'arialabelledby':
            let value = this[propName];
            this._labelledbyText = value ? this.$lookupInnerTexts(value) : '';
            break;
          case 'indicator':
            this.determinedIndicator = oldValue;
            if (oldValue !== '' && this.indicator === '') {
              // if the indicator is visible and it's unset, hide it.
              this.isIndicatorVisible = false;
            } else if (this.indicator !== '') {
              // if an indicator gets passed, set determinedIndicator and make it visible.
              this.determinedIndicator = this.indicator;
              this.isIndicatorVisible = true;
            }
            break;
        }
      });
      super.update(changedProperties);
    }

    /**
     * Lifecycle method called after each render
     * Handles post-render property updates and slot management
     *
     * @param {Map} changedProperties - Map of changed properties and their previous values
     * @override
     */
    // property changes will trigger additional updates
    // NOTE: If subclasses need to define an `updated()` method,
    //       make sure to call `super.updated()` within its logic.
    updated(changedProperties) {
      if (changedProperties.has('disabled')) {
        if (this.$helpSlot) {
          for (const $node of this.$helpSlot.assignedNodes()) {
            $node.disabledByContext = !!this.disabled;
          }
        }
      }

      changedProperties.forEach( (oldValue, propName) => {
        if (propName === 'value') {
           // If `value` and `displayvalue` are BOTH in the same
            // batch of updates, leave `displayvalue` alone.
            if (!changedProperties.has('displayvalue')) {
              // derive `displayvalue` from data value
              this.displayvalue = this._getDisplayValue(this.value);
            }
        }
      });
    }

    /**
     * Handles changes to the help slot
     * Updates internal state based on help content presence
     *
     * @param {Event} evt - The slotchange event
     * @private
     */
    _onHelpSlotChange(evt) {
      this._hasHelpText = !!evt.target.assignedNodes().length;
      this.requestUpdate();
    }

    /**
     * Handles changes to the error slot
     * Updates internal state based on error content presence
     *
     * @param {Event} evt - The slotchange event
     * @private
     */
    _onErrorSlotChange(evt) {
      this._hasErrorAttribute = !!evt.target.assignedNodes().length;
      this.requestUpdate();
    }

    /**
     * Renders the component's HTML template
     * Creates the complete textfield structure with label, input, icons, and validation
     *
     * @returns {TemplateResult} The component's rendered template
     * @override
     */
    render() {
      let determinedIconButton = this.iconname;
      let determinedIconAlt = this.iconalt;
      let attrArialabelledby = `labelledby-${this.generatedId}`;

      if (this.isPasswordField && this.showVisibilityToggle) {
        if (this.isPasswordPlainText) {
          determinedIconButton = PASSWORD_ICONS.visible;
          determinedIconAlt = this.iconalthide ? this.iconalthide : 'Hide password';
        } else {
          determinedIconButton = PASSWORD_ICONS.obscured;
          determinedIconAlt = this.iconaltshow ? this.iconaltshow : 'Show password';
        }
      }

      let determinedType = this.type;
      if (this.isPasswordField) {
        determinedType = this.isPasswordPlainText ? 'text' : 'password';
      }

      let determinedState = this.disabled ? 'disabled' : this.state;
      let determinedDisabled = (this.state === 'disabled') || this.disabled;

      const labelledbyParts = [
        this.labelId,
        this.prefix ? `prefix-${this.generatedId}` : '',
        this.prefixsymbol ? `prefix-symbol-${this.generatedId}` : '',
        this._labelledbyText ? attrArialabelledby : '',
        this.suffixsymbol ? `suffix-symbol-${this.generatedId}` : '',
        this.suffix ? `suffix-${this.generatedId}` : ''
      ];

      const ariaLabelledby = (this._labelledbyText || (this.prefix || this.suffix || this.prefixsymbol || this.suffixsymbol) && !this.arialabel) ? labelledbyParts.filter(Boolean).join(' ') : '';

      let arrDescribedBy = [];
      arrDescribedBy.push(this.errorId);
      arrDescribedBy.push(this.instructionaltext ? this.instructionaltextId : '');
      let describedBy = arrDescribedBy.join(" ").trim();

      return x`
        ${this.label
          ? x`
            <div id="label-wrapper">
              <label
                for="${this.generatedId}"
                class="bolt-textfield-wc--label
                  bolt-textfield-wc--label__${determinedState}
                  ${this.hiddenlabel ? 'bolt-textfield-wc--label__hidden' : ''}
                "
                id="${this.labelId}"
              >
                ${this.label}
                ${!(this.required) && this.label.length > 0 && this.optionaltext == 'show'
                  ? x`
                    <span class="bolt-annotation bolt-optional">
                      (optional)
                    </span>
                  `
                  : x``
                }
                ${ this._hasHelpText
                ? x`
                  <span class="visually-hidden">
                    has tooltip
                  </span>
                `
                : x``
                }
              </label>
              <slot name="help" @slotchange="${this._onHelpSlotChange}"></slot>
            </div>
          `
          : ''
        }
        <div
          class="
            bolt-textfield-wc--input-container
            ${this._isInvalid ? 'bolt-textfield-wc--input-container__has-error' : ''}
          "
        >
          ${ this.prefixsymbol
            ? x`
              <span
                id="prefix-symbol-${this.generatedId}"
                @click="${this.affixClick}"
                class="
                  bolt-textfield-wc--prefix
                  bolt-textfield-wc--prefix-symbol
                "
                aria-hidden="true"
              >
                ${this.prefixsymbol}
              </span>
            `
            : ''
          }
          ${ this.prefix
            ? x`
              <span
                id="prefix-${this.generatedId}"
                @click="${this.affixClick}"
                class="
                  bolt-textfield-wc--prefix
                "
                aria-hidden="true"
              >
                ${this.prefix}
              </span>
            `
            : ''
          }
          <input
            class="
              bolt-textfield-wc--input
              bolt-textfield-wc--input__${determinedState}
              ${this.aligninput === 'right' ? 'bolt-textfield-wc--input__right' : ''}
              ${this.showarrows ? 'bolt-textfield-wc-arrows' : ''}
            "
            data-test="${this.datatestinput || DATATEST_DEFAULTS$5.input}"
            id="${this.generatedId}"
            .value="${this.displayvalue}"
            name="${this.name}"
            placeholder="${this.suggestion}"
            type="${determinedType}"
            min="${this.min}"
            max="${this.max}"
            step="${this.step}"
            maxlength="${this.maxlength}"
            spellcheck="${this.spellcheck}"
            autocomplete="${this.autocomplete}"
            autocorrect="${this.autocorrect}"
            autocapitalize="${this.autocapitalize}"
            inputmode="${l(this.inputmode || null)}"
            pattern="${l(this.pattern || null)}"
            ?required="${this.required}"
            ?disabled="${determinedDisabled}"
            aria-disabled="${determinedDisabled ? 'true' : 'false'}"
            aria-expanded="${l(this.ariaexpanded || null)}"
            aria-describedby="${l(describedBy || null)}"
            aria-invalid="${this._isInvalid}"
            aria-label="${l(this.arialabel || null)}"
            aria-labelledby="${l(ariaLabelledby || null)}"
            aria-autocomplete="${l(this.ariaautocomplete || null)}"
            aria-controls="${l(this.ariacontrols || null)}"
            aria-activedescendant="${l(this.ariaactivedescendant || null)}"
            aria-owns="${l(this.ariaowns || null)}"
            role="${l(this.inputrole || null)}"
            @input="${this.handleInput}"
            @change="${this.handleChange}"
            @keydown="${this.handleKeydown}"
            @blur="${this.handleBlur}"
            size="${l(this.inputsize || null)}"
          >
          ${ this.suffix
            ? x`
              <span
                id="suffix-${this.generatedId}"
                @click="${this.affixClick}"
                class="
                  bolt-textfield-wc--suffix
                "
                aria-hidden="true"
              >
                ${this.suffix}
              </span>
            `
            : ''
          }
          ${ this.suffixsymbol
            ? x`
              <span
                id="suffix-symbol-${this.generatedId}"
                @click="${this.affixClick}"
                class="
                  bolt-textfield-wc--suffix
                  bolt-textfield-wc--suffix-symbol
                "
                aria-hidden="true"
              >
                ${this.suffixsymbol}
              </span>`
            : ''
          }
          ${ this.determinedIndicator
            ? x`
              <div
                class="
                  bolt-textfield-wc--indicator
                  indicator-${this.determinedIndicator}
                  ${this.isIndicatorVisible ? 'bolt-textfield-wc--indicator__visible' : ''}
                "
              >
                ${this.determinedIndicator === 'waiting'
                  ? x`<bolt-waiting-indicator minimal></bolt-waiting-indicator>`
                  : x`<bolt-icon name="${INDICATOR_ICONS[this.determinedIndicator]}"></bolt-icon>`
                }
              </div>
            `
            : ''
          }
          ${ determinedIconButton
            ? x`
              <button
                type="button"
                class="bolt-textfield-wc--icon-button"
                ?disabled="${determinedDisabled}"
                aria-disabled="${determinedDisabled ? 'true' : 'false'}"
                @click="${this.iconClick}"
                aria-label="${determinedIconAlt}"
                data-test="${this.datatestbutton || DATATEST_DEFAULTS$5.button}"
              >
                <bolt-icon name="${determinedIconButton}" title="${determinedIconAlt}"></bolt-icon>
              </button>
            `
            : ''
          }
        </div>
        <slot name="afterinput"></slot>
        ${ this.instructionaltext
          ? x`
            <div
              class="bolt-textfield-wc--instructionaltext"
              id="${this.instructionaltextId}"
            >
              ${this.instructionaltext}
            </div>
          `
          : ''
        }
         <slot name="error" @slotchange="${this._onErrorSlotChange}" id="${this.errorId}">
          ${ this.error
             ? x`
              <bolt-field-error>
                ${this.error}
              </bolt-field-error>
            ` : ''
          }
         </slot>

        <div hidden id="${attrArialabelledby}">
          ${this._labelledbyText}
        </div>
      `;
    }

    /**
     * Generates a unique ID for internal elements
     *
     * @param {String} type - Optional type prefix for the ID
     * @returns {String} A unique identifier
     * @private
     */
    generateId(type) {
        return 'bolt-textfield-wc--' + (type ? (type + '--') : '') + Math.floor(Math.random() * 10000000);
    }

    /**
     * Updates the length property based on current value
     * @deprecated This method appears to be unused
     * @private
     */
    setLength(){
        this.length = this.value.length;
    }

    /**
     * Handles input events from the underlying input element
     * Updates the component's value and dispatches a relayed input event
     *
     * @param {Event} e - The input event from the native input element
     */
    handleInput(e){
      this.value = e.target.value;

      e.stopPropagation();

      let relayedEvent = new Event(e.type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
      });
      this.dispatchEvent(relayedEvent);
    }

    /**
     * Handles change events from the underlying input element
     * Dispatches a relayed change event without modifying the value
     *
     * @param {Event} e - The change event from the native input element
     */
    handleChange(e){
      e.stopPropagation();

      let relayedEvent = new Event(e.type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
      });
      this.dispatchEvent(relayedEvent);
    }

    /**
     * Handles blur events from the underlying input element
     * Template method for subclasses to override with custom blur behavior
     *
     * @param {Event} e - The blur event from the native input element
     * @abstract
     */
    // handleBlur() was added to provide a template for subclasses to override.
    // It serves as a kind of interface: as textfield itself doesn't use it.
    handleBlur(e){ }

    /**
     * Handles keydown events from the underlying input element
     * Triggers icon button click on Enter key when an icon is present
     *
     * @param {KeyboardEvent} e - The keydown event from the native input element
     */
    handleKeydown(e){
        // if there's an icon button, trigger it on Enter key
        if (e.key === 'Enter' && this.iconname !== '') {
            this.shadowRoot.querySelector('.bolt-textfield-wc--icon-button').click();
        }
    }

    /**
     * Programmatically focuses the input element
     * Safely handles cases where the shadowRoot or input may not exist yet
     *
     * @public
     */
    focus() {
      /*
       * There's no guarantee that the shadowRoot exists or been populated
       * when this method is called, so we need to make sure we don't
       * attempt to focus a nonexistent element.
       */
      this.$input?.focus();
    }

    /**
     * Handles clicks on prefix/suffix elements
     * Focuses the input when prefix or suffix is clicked
     *
     * @param {Event} e - The click event from prefix/suffix elements
     */
    affixClick(e){
        this.focus();
    }

    /**
     * Handles clicks on the icon button
     * Toggles password visibility for password fields and dispatches custom event
     *
     * @param {Event} e - The click event from the icon button
     */
    iconClick(e){
        if(e){
            e.stopPropagation();
            if(!this.disabled){
                if(this.isPasswordField && this.showVisibilityToggle){
                    this.togglePasswordVisibility();
                }

                let iconClickEvent = new Event('bolt-icon-click');
                this.dispatchEvent(iconClickEvent);
            }
        }
    }

    /**
     * Toggles the visibility of password text
     * Switches between plain text and obscured password display
     *
     * @private
     */
    togglePasswordVisibility() {
      this.isPasswordPlainText = !this.isPasswordPlainText;
    }

    /**
     * Determines if component should appear invalid.
     * Checks for invalid property, error message, or error slot content
     *
     * @returns {Boolean} True if the component should display in an invalid state
     * @readonly
     * @private
     */
    get _isInvalid() {
      return Boolean(this.invalid || this.error || this.querySelector("bolt-field-error[slot='error']"))
    }


    /**
     * Sets the display value of the input field
     * Updates both internal state and the rendered input element
     *
     * @param {String} value - The value to display in the input field
     */
    set displayvalue(value) {
      let oldVal = this._displayvalue;
      let newVal = value || ''; // ensure String value
      this._displayvalue = newVal;
      this.requestUpdate('displayvalue', oldVal);

      // NG compat - enforce update in rendered view
      if (this.$input) {
        this.$input.value = value;
      }
    }

    /**
     * Gets the current display value of the input field
     *
     * @returns {String} The current display value
     */
    get displayvalue() {
      return this._displayvalue;
    }

    /**
     * Sets the data value of the input field
     * Always coerces the value to a string and triggers re-rendering
     *
     * @param {*} value - The value to set (will be converted to string)
     */
    set value(value) {
      let oldVal = this._dataValue;
      let newVal = `${value}`; // ALWAYS coerce value into a string
      this._dataValue = newVal;
      this.requestUpdate('value', oldVal);
    }

    /**
     * Gets the current data value of the input field
     *
     * @returns {String} The current data value
     */
    get value() {
      return this._dataValue;
    }

    /**
     * Compute a derived display value from a given data value.
     * Override this method in subclasses that require more complex logic
     *
     * @param {String} dataValue - The data value to convert to display format
     * @returns {String} The display representation of the data value
     * @abstract
     */
    _getDisplayValue(dataValue) {
      return dataValue;
    }

    /**
     * Get the help slot element
     * Returns null if element does not render a help slot
     *
     * @returns {HTMLSlotElement|null} The help slot element or null
     * @readonly
     * @private
     */
    get $helpSlot() {
      return this.shadowRoot.querySelector('slot[name="help"]')
    }

    /**
     * Get the error slot element
     * Returns the bolt-field-error element in the error slot
     *
     * @returns {Element|null} The error slot element or null
     * @readonly
     * @private
     */
    get $errorSlot() {
      return this.querySelector("bolt-field-error[slot='error']")
    }

    /**
     * Get the input element from the shadow DOM
     * May be undefined if called before the component renders
     *
     * @returns {HTMLInputElement|null} The native input element or null
     * @readonly
     * @private
     */
    get $input() {
      return this.shadowRoot?.querySelector('.bolt-textfield-wc--input')
    }
}

/**
 * This module exports the textfield component and its initialization function.
 * The textfield component provides a form input for collecting single-line
 * text data from users, with built-in validation and error handling support.
 *
 * @module bolt-textfield
 * @since 3.0.0
 *
 * @see {@link ./elements/bolt-textfield|BoltTextfieldElement}
 */


/**
 * Initializes the textfield component by registering it as a custom element
 *
 * This function:
 * 1. Initializes dependencies (FieldError, Icon, and WaitingIndicator components)
 * 2. Registers the BoltTextfieldElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$t() {
  // Upstream
  await initialize$w();
  await initialize$y();
  await initialize$u();

  // Local
  BoltTextfieldElement.$define();
}

var index$s = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltTextfieldElement: BoltTextfieldElement,
  initialize: initialize$t
});

var CSS$x = ".bolt-annotation.bolt-optional {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  letter-spacing: 0px;\n  font-size: clamp(11px, 11px + 1px * (var(--bolt-typography-basis) - 360) / 840, 12px);\n  line-height: clamp(1.45, 1.45 + -0.12 * (var(--bolt-typography-basis) - 360) / 840, 1.33);\n  font-style: italic;\n  font-weight: 400;\n}\n\n:host,\n:host * {\n  /* css-core:utils/reset.component */\n  border: 0;\n  font: inherit;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  vertical-align: baseline;\n}\n\n:host {\n  display: block;\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(14px, 14px + 2px * (var(--bolt-typography-basis) - 360) / 840, 16px);\n  line-height: clamp(1.43, 1.43 + 0.07 * (var(--bolt-typography-basis) - 360) / 840, 1.5);\n}\n:host bolt-field-error {\n  margin-top: 4px;\n  color: var(--bolt-context-onSurface);\n}\n\n:host([disabled]),\n:host([state=disabled]) {\n  opacity: 0.5;\n}\n\n:host([disabled]) *,\n:host([state=disabled]) * {\n  cursor: not-allowed;\n}\n\n:host([inputsize]) .bolt-textfield-wc--input-container {\n  display: inline-flex;\n}\n\n#label-wrapper {\n  margin-bottom: 4px;\n}\n\n.visually-hidden {\n  border: 0 !important;\n  outline: none !important;\n  box-shadow: none !important;\n  width: 1px !important;\n  height: 1px !important;\n  clip: rect(1px, 1px, 1px, 1px); /* old & current Browsers */\n  clip-path: inset(50%); /* browsers in the future */\n  white-space: nowrap;\n  margin: -1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  z-index: -99999 !important;\n  color: transparent;\n  background-color: transparent;\n  text-shadow: none;\n}\n\n.bolt-textfield-wc--input-container {\n  anchor-name: --input-container;\n  --border-color: var(--bolt-theme-outline);\n  --pad-y: var(--bolt-space-xs);\n  display: flex;\n  max-width: 100%;\n  background: var(--bolt-theme-inputSurface);\n  transition: all 350ms;\n  border: 1px solid var(--border-color);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.bolt-textfield-wc--input-container > * {\n  /* css-core:context.reset */\n  --bolt-context-surface: var(--bolt-theme-surface);\n  --bolt-context-onSurface: var(--bolt-theme-onSurface);\n  --bolt-context-onSurfaceVariant: var(--bolt-theme-onSurfaceVariant);\n  --bolt-context-outline: var(--bolt-theme-outline);\n  --bolt-context-outlineVariant: var(--bolt-theme-outlineVariant);\n  --bolt-context-focus: var(--bolt-theme-focus);\n  --bolt-context-link: var(--bolt-theme-link);\n  --bolt-context-accent: var(--bolt-theme-accent);\n  --bolt-context-accentHigh: var(--bolt-theme-accentHigh);\n  --bolt-context-accentHighest: var(--bolt-theme-accentHighest);\n  --bolt-context-onAccent: var(--bolt-theme-onAccent);\n}\n.bolt-textfield-wc--input-container__has-error {\n  --border-color: var(--bolt-theme-error);\n  border-width: 2px;\n}\n.bolt-textfield-wc--input-container:focus-within {\n  /* css-core:context.focus */\n  box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n  outline: none;\n  text-decoration-color: transparent;\n  background: var(--bolt-theme-inputSurfaceHigh);\n}\n.bolt-textfield-wc--input-container:focus-within:not(.bolt-textfield-wc--input-container__has-error) {\n  --border-color: var(--bolt-theme-focus);\n}\n.bolt-textfield-wc--input {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(14px, 14px + 2px * (var(--bolt-typography-basis) - 360) / 840, 16px);\n  line-height: clamp(1.43, 1.43 + 0.07 * (var(--bolt-typography-basis) - 360) / 840, 1.5);\n  -webkit-appearance: none;\n  background: transparent;\n  border: 0;\n  border-radius: 0;\n  box-sizing: border-box;\n  color: var(--bolt-theme-onSurface);\n  margin: 0;\n  padding: var(--pad-y) var(--bolt-space-xs);\n  text-decoration: none;\n  transition: all 350ms;\n  min-width: 64px;\n  /* Chrome, Safari, Edge, Opera */\n  /* Hide arrows */\n}\n.bolt-textfield-wc--input:not([size]) {\n  flex-grow: 1;\n}\n.bolt-textfield-wc--input::placeholder {\n  color: var(--bolt-theme-onSurfaceVariant);\n  font-style: italic;\n}\n.bolt-textfield-wc--input::-ms-reveal {\n  display: none;\n}\n.bolt-textfield-wc--input:hover:not(:disabled):not(:focus) {\n  background: var(--bolt-theme-inputSurfaceHigh);\n}\n.bolt-textfield-wc--input:focus {\n  outline: none;\n  border-color: transparent;\n}\n.bolt-textfield-wc--input__right {\n  text-align: right;\n}\n.bolt-textfield-wc--input:not(.bolt-textfield-wc-arrows)::-webkit-outer-spin-button, .bolt-textfield-wc--input:not(.bolt-textfield-wc-arrows)::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.bolt-textfield-wc--input:not(.bolt-textfield-wc-arrows)[type=number] {\n  appearance: textfield;\n}\n.bolt-textfield-wc--icon-button {\n  outline: 2px dotted rgba(0, 0, 0, 0);\n  align-items: center;\n  background: var(--bolt-theme-inputSurface);\n  border: 0;\n  border-left: 1px solid var(--border-color);\n  cursor: pointer;\n  color: var(--bolt-theme-onSurface);\n  display: inline-flex;\n  padding: var(--pad-y);\n  transition: all 350ms;\n  flex-shrink: 0;\n}\n.bolt-textfield-wc--icon-button:enabled:hover {\n  background: var(--bolt-theme-inputSurfaceHigh);\n}\n.bolt-textfield-wc--icon-button:enabled:focus, .bolt-textfield-wc--icon-button:enabled:focus:hover {\n  outline-color: currentColor;\n  outline-offset: calc(-2px - var(--bolt-space-2xs));\n  background: var(--bolt-theme-inputSurfaceHigh);\n  transition: all 150ms;\n}\n.bolt-textfield-wc--prefix, .bolt-textfield-wc--suffix {\n  align-items: center;\n  border: 0;\n  color: var(--bolt-theme-onSurfaceVariant);\n  cursor: pointer;\n  display: inline-flex;\n}\n.bolt-textfield-wc--prefix-symbol, .bolt-textfield-wc--suffix-symbol {\n  font-size: clamp(16px, 16px + 4px * (var(--bolt-viewport-width) - 360) / 840, 20px);\n  line-height: 1;\n}\n.bolt-textfield-wc--prefix {\n  padding-left: 8px;\n}\n.bolt-textfield-wc--suffix {\n  padding-right: 8px;\n}\n.bolt-textfield-wc--label {\n  color: var(--bolt-context-onSurface);\n  font-weight: 500;\n}\n.bolt-textfield-wc--label__hidden {\n  height: 0;\n  margin: 0;\n  overflow: hidden;\n  position: absolute;\n}\n.bolt-textfield-wc--instructionaltext {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  letter-spacing: 0px;\n  font-size: clamp(11px, 11px + 1px * (var(--bolt-typography-basis) - 360) / 840, 12px);\n  line-height: clamp(1.45, 1.45 + -0.12 * (var(--bolt-typography-basis) - 360) / 840, 1.33);\n  margin-top: 4px;\n  color: var(--bolt-context-onSurface);\n}\n.bolt-textfield-wc--indicator {\n  align-items: center;\n  display: flex;\n  opacity: 0;\n  padding: var(--pad-y);\n  transition: all 350ms;\n}\n.bolt-textfield-wc--indicator__visible {\n  opacity: 1;\n}\n.bolt-textfield-wc--indicator bolt-waiting-indicator {\n  height: 1lh;\n  width: 1lh;\n}\n\n.indicator-error {\n  color: var(--bolt-theme-error);\n}\n.indicator-info, .indicator-question {\n  color: var(--bolt-theme-info);\n}\n.indicator-success {\n  color: var(--bolt-theme-success);\n}\n.indicator-warning {\n  color: var(--bolt-theme-warning);\n}\n\n.bolt-autocomplete-wc {\n  position: relative;\n}\n.bolt-autocomplete-wc--listbox {\n  margin: 0;\n}\n.bolt-autocomplete-wc--listbox-container {\n  /* css-core:context.reset */\n  --bolt-context-surface: var(--bolt-theme-surface);\n  --bolt-context-onSurface: var(--bolt-theme-onSurface);\n  --bolt-context-onSurfaceVariant: var(--bolt-theme-onSurfaceVariant);\n  --bolt-context-outline: var(--bolt-theme-outline);\n  --bolt-context-outlineVariant: var(--bolt-theme-outlineVariant);\n  --bolt-context-focus: var(--bolt-theme-focus);\n  --bolt-context-link: var(--bolt-theme-link);\n  --bolt-context-accent: var(--bolt-theme-accent);\n  --bolt-context-accentHigh: var(--bolt-theme-accentHigh);\n  --bolt-context-accentHighest: var(--bolt-theme-accentHighest);\n  --bolt-context-onAccent: var(--bolt-theme-onAccent);\n  color: var(--bolt-context-onSurface);\n  background: var(--bolt-theme-inputSurface);\n  box-shadow: 0 4px 10px -4px var(--bolt-theme-shadow);\n  height: 0;\n  opacity: 0;\n  overflow: hidden;\n  padding: 0 0 var(--bolt-space-2xs) 0;\n  position: absolute;\n  top: anchor(bottom);\n  position-anchor: --input-container;\n  visibility: hidden;\n  width: 100%;\n  z-index: 50;\n}\n.bolt-autocomplete-wc--listbox-container-active {\n  height: auto;\n  opacity: 1;\n  transition: opacity 350ms;\n  visibility: visible;\n}\n.bolt-autocomplete-wc--listbox-label {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(12px, 12px + 2px * (var(--bolt-typography-basis) - 360) / 840, 14px);\n  line-height: clamp(1.33, 1.33 + 0.1 * (var(--bolt-typography-basis) - 360) / 840, 1.43);\n  font-weight: 500;\n  display: block;\n  padding: var(--bolt-space-sm) var(--bolt-space-sm) var(--bolt-space-2xs) var(--bolt-space-sm);\n  text-transform: uppercase;\n}\n.bolt-autocomplete-wc--listbox li.bolt-autocomplete-wc--option {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(14px, 14px + 2px * (var(--bolt-typography-basis) - 360) / 840, 16px);\n  line-height: clamp(1.43, 1.43 + 0.07 * (var(--bolt-typography-basis) - 360) / 840, 1.5);\n  list-style: none;\n  margin-bottom: 0;\n  padding: var(--bolt-space-xs) var(--bolt-space-sm);\n  text-indent: 0;\n}\n.bolt-autocomplete-wc--listbox li.bolt-autocomplete-wc--option.option-active, .bolt-autocomplete-wc--listbox li.bolt-autocomplete-wc--option:hover, .bolt-autocomplete-wc--listbox li.bolt-autocomplete-wc--option:focus {\n  background: var(--bolt-theme-inputSurfaceHigh);\n}\n.bolt-autocomplete-wc--listbox li.bolt-autocomplete-wc--option.option-active:hover, .bolt-autocomplete-wc--listbox li.bolt-autocomplete-wc--option.option-active:focus {\n  background: var(--bolt-theme-inputSurfaceHighest);\n}\n.bolt-autocomplete-wc--listbox li.bolt-autocomplete-wc--option:nth-of-type(n+12) {\n  display: none;\n}";

/**
 * Autocomplete custom element that assists users with entering valid input into a text input field, reducing the number of required keystrokes and chances of triggering field errors.
 *
 * The `<bolt-autocomplete>` component provides an interface for displaying a list of suggested items based on the text that is entered.
 *
 * @class BoltAutocompleteElement
 * @element BoltAutoCompleteElement
 * @extends {BoltTextfieldElement}
 * @tagname bolt-autocomplete
 * @since 3.1.0
 *
 * @property {String[]} options - (Required) An array of strings to be displayed as options.
 * @property {String[]} optionvalues - (Optional) An array of strings to be used as `value` attributes for the options. When passing `options` and `optionvalues` separately, be sure that the index of each item corresponds properly. If present, `<bolt-autocomplete>` will use the value of its selected option rather than its displayed text as the element's `value`.
 * @property {String} optionheading - (Optional) Heading text shown above the list of options. Default is `'Suggestions'`.
 * @property {String} completion - (Optional) `auto` completion will automatically move focus to the first option on the list when opened, and will select the focused option when the user navigates away from the autocomplete input. `manual` completion will use the value the user has typed in, unless they manually click on an option from the list. Possible values: [`auto`, `manual`]
 * @property {Number} mincharacters - (Optional) The number of characters that must be entered before the list of options is displayed. Default is `3`
 * @property {Number} maxoptions - (Optional) The maximum number of options to display in the dropdown. Default is `5`.
 *
 * @attribute {String} label - (Required) The label text for the input. Passed to underlying {@link https://bolt.nwie.net/web/components/textfield|bolt-textfield} element.
 * @attribute {String} error - (Optional) The error message to display after the input. Passed to underlying {@link https://bolt.nwie.net/web/components/textfield|bolt-textfield} element.
 * @attribute {Boolean} required - If present, the field is required. Fields that are not required will show `"(optional)"`. Passed to underlying {@link https://bolt.nwie.net/web/components/textfield|bolt-textfield} element.
 * @attribute {String} instructionaltext - (Optional) The instructional text to display below the input. This should be used to give users additional information about the expected content in the field. Passed to underlying {@link https://bolt.nwie.net/web/components/textfield|bolt-textfield} element.
 * @attribute {String} datatestinput - (Optional) Property to configure the `data-test` value on the underlying `<input>` element. Default is `input`. Passed to underlying {@link https://bolt.nwie.net/web/components/textfield|bolt-textfield} element.
 * @attribute {Boolean} disabled - (Optional) If present, disables rendered interactive elements. Passed to underlying {@link https://bolt.nwie.net/web/components/textfield|bolt-textfield} element.
 * @attribute {Number} maxlength - (Optional) Maximum allowed input length. Passed to underlying {@link https://bolt.nwie.net/web/components/textfield|bolt-textfield} element.
 * @attribute {String} suffix - (Optional) Text displayed after the text input. Generally, this will be multiple characters, e.g. ".00". Passed to underlying {@link https://bolt.nwie.net/web/components/textfield|bolt-textfield} element.
 * @attribute {Boolean} invalid - (Optional) If present, the field appears invalid. Passed to underlying {@link https://bolt.nwie.net/web/components/textfield|bolt-textfield} element.
 * @attribute {Boolean} spellcheck - (Optional) Defaults to `false`. Passed to native `<input>` element.
 * @attribute {String} autocomplete - (Optional) Defaults to `on`. Passed to native `<input>` element. Please see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete|possible values}.
 * @attribute {String} autocorrect - (Optional) Defaults to `off`. Passed to native `<input>` element. Possible values: [`on`, `off`]
 * @attribute {String} autocapitalize - (Optional) Defaults to `on`. Passed to native `<input>` element. Possible values: [`on`, `off`]
 * @attribute {String} inputmode - (Optional) Please see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode|standard behavior}. Passed to native `<input>` element.
 *
 * @slot help - Uses the {@link BoltContextualHelp} component
 *
 * @event {CustomEvent} bolt-option-click - Emitted when any option is clicked.
 *
 * @see https://bolt.nwie.net/web/components/autocomplete
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 */
class BoltAutocompleteElement extends BoltTextfieldElement {
    /**
     * The component's tag name, used for Custom Element registration
     * @readonly
     * @type {String}
     * @static
     */
    static get is() {
      return 'bolt-autocomplete'
    }

    /**
     * Getter for component's CSS styles
     *
     * @readonly
     * @type {CSSResult}
     * @static
     */
    static get styles() {
      return CSS$x;
    }

    /**
     * LitElement properties/attributes definition.
     * Inherits properties from BoltTextfieldElement and adds autocomplete-specific properties
     * @readonly
     * @type {Object}
     * @static
     */
    static get properties() {
        return {
            // Inherit all properties from parent class
            ...super.properties,
            completion: { type: String },
            maxoptions: { type: Number },
            mincharacters: { type: Number },
            optionheading: { type: String },
            /** @deprecated Use `optionheading` instead */
            optionlabel: { type: String },
            options: { type: Array },
            optionvalues: { type: Array },
        }
    }

    /**
     * Creates an instance of BoltAutocompleteElement
     * Initialize public and private properties with default values
     *
     * @constructor
     */
    constructor() {
        super();
        // Public state variables
        this.completion = 'manual';
        this.optionheading = this.optionlabel && !this.optionheading ? 'Suggestions' : null;
        this.optionlabel = 'Suggestions';
        this.mincharacters = 3;
        this.maxoptions = 5;
        this.options = [];
        this.optionvalues = [];

        // Private state variables
        /** @private {String} */
        this.inputrole = 'combobox';
        /** @private {Boolean} - Tracks if the dropdown is currently open */
        this._isActive = false;
        /** @private {Number} - Tracks the currently active option index (1-based) */
        this._activeIndex = 0;
    }

    /**
     * Renders the component's HTML template
     * Creates the shadow DOM structure for the autocomplete and its dropdown
     *
     * @returns {TemplateResult} The component's rendered template
     * @override
     */
    render() {
        if (!this.id) {
            this.id = this.generateId();
        }

        this.ariacontrols = `${this.id}--listbox`;
        this.ariaowns = `${this.id}--listbox`;
        this.ariaexpanded = this._isActive ? 'true':'false';
        this.ariaautocomplete = this.completion === 'auto' ? 'both' : 'list';

        const suggestionHeading = this.optionheading ?? this.optionlabel;

        return x`
        <div class="bolt-autocomplete-wc">
            ${super.render()}
            <div class="bolt-autocomplete-wc--listbox-container ${this._isActive ? 'bolt-autocomplete-wc--listbox-container-active' : ''}">
                ${suggestionHeading ? x`<span class="bolt-autocomplete-wc--listbox-label">${suggestionHeading}</span>` : ``}
                <ul
                    @mousedown="${this.handleListboxClick}"
                    class="bolt-autocomplete-wc--listbox"
                    id="${this.id}--listbox"
                    role="listbox"
                >
                    ${this.options.slice(0,this.maxoptions).map((item, index) => x`
                        <li
                            id="${this.id}-option-${index}"
                            class="bolt-autocomplete-wc--option"
                            role="option"
                            tabindex="-1"
                            data-option-value="${this.optionvalues.length ? this.optionvalues[index] : item}"
                            @click="${this.handleOptionClick}"
                        >
                                ${item}
                        </li>
                    `)}
                </ul>
            </div>
        </div>`;
    }

    /**
     * Generates a unique ID for the autocomplete component
     * @private
     * @returns {String} A unique ID string for component identification
     */
    generateId() {
        return 'bolt-autocomplete-wc--' + Math.floor(Math.random() * 10000000);
    }

    /**
     * Opens the autocomplete dropdown and shows the options list
     * If auto-completion is enabled, activates the first option
     * @public
     */
    open(){
        this._isActive = true;
        // Highlight first option if auto completion
        if (this.completion === "auto"){
            this.moveActiveOption(1);
        }
        this.requestUpdate();
    }

    /**
     * Closes the autocomplete dropdown and resets the active option
     * @public
     */
    close(){
        this._isActive = false;
        this.resetActiveOption();
        this.requestUpdate();
    }

    /**
     * Handles blur events on the input element
     * For auto-completion mode, selects the current active option when focus is lost
     *
     * @param {FocusEvent} e - The blur event object
     * @private
     */
    handleBlur(e){
        if (this._isActive){
            if (this.completion === "auto" && this._activeIndex){
                this.clickCurrentOption();
            }
            else {
                this.close();
            }
        }
    }

    /**
     * Handles keyboard events for navigating and selecting options
     * Manages arrow key navigation, selection with Enter, and closing with Escape
     *
     * @param {KeyboardEvent} e - The keyboard event object
     * @override
     * @private
     */
    handleKeydown(e){
        super.handleKeydown(e);
        // If open, navigate options
        if (this._isActive){
            if (e.key === 'ArrowDown' && !e.shiftKey) { // Down arrow
                e.preventDefault();
                this.moveActiveOption(1);
            }
            else if (e.key === 'ArrowUp' && !e.shiftKey){ // Up arrow
                e.preventDefault();
                this.moveActiveOption(-1);
            }
            else if (e.key === 'Enter' && this._activeIndex){ // Enter
                this.clickCurrentOption();
            }
            else if (e.key === 'Escape'){ // Esc
                this.close();
            }
        }
        // If closed, show options
        else {
            if (e.key === 'ArrowDown' && !e.shiftKey) { // Down arrow
                e.preventDefault();
                this.open();
            }
            else if (e.key === 'ArrowUp' && !e.shiftKey){ // Up arrow
                e.preventDefault();
                this.open();
            }
        }
    }

    /**
     * Handles input events on the textfield and manages the autocomplete list display
     * Opens/closes the dropdown based on character count and updates the active option
     *
     * @param {InputEvent} e - The input event object
     * @override
     * @private
     */
    handleInput(e){
        let $input = this.shadowRoot.querySelector('.bolt-textfield-wc--input');
        if ($input) {
          this.displayvalue = $input.value;
          // bypass `value` setter to avoid overwriting `displayvalue` via cascading updates
          this._dataValue = $input.value;
        }

        // Reset highlighted option, since input event may change filtered options
        this.resetActiveOption();

        // Re-select first option if auto completion
        if (this.completion === "auto" && this._isActive){
            this.moveActiveOption(1);
        }

        // Open listbox after x characters typed
        if (this.displayvalue.length >= this.mincharacters && !this._isActive ){
            this.open();
        } else if (this.displayvalue.length < this.mincharacters && this._isActive){
            this.close();
        }

        super.handleInput(e);
    }

    /**
     * Prevents blur events when clicking in the listbox
     * @param {MouseEvent} e - The mouse event
     */
    handleListboxClick(e){
        // Prevent clicks in listbox from triggering blur
        e.preventDefault();
    }

    /**
     * Gets all option elements from the shadow DOM
     * @returns {NodeList} Collection of option elements
     */
    getOptions(){
        return this.shadowRoot.querySelectorAll('.bolt-autocomplete-wc--option');
    }

    /**
     * Moves the active option in the specified direction and updates accessibility attributes
     * Handles wrapping at list boundaries
     *
     * @param {Number} direction - Direction to move (1 for down, -1 for up)
     * @private
     */
    moveActiveOption(direction){
        let $nodes = this.getOptions();

        if ($nodes.length){
            // Remove highlight from current option
            if (this._activeIndex){
                var currentOption = $nodes[this._activeIndex-1];
                currentOption.classList.remove('option-active');
                currentOption.removeAttribute('aria-selected');
            }

            // Change active option index
            if (direction > 0){
                this._activeIndex++;
            }
            else if (direction < 0){
                this._activeIndex--;
            }

            // Determine how many options are shown
            let $visibleOptions = $nodes.length < this.maxoptions ? $nodes.length : this.maxoptions;

            // Wrap list
            if (this._activeIndex > $visibleOptions){
                this._activeIndex = 1;
            }
            else if (this._activeIndex < 1){
                this._activeIndex = $visibleOptions;
            }

            // Highlight new option
            var newOption = $nodes[this._activeIndex-1];
            newOption.classList.add('option-active');
            newOption.setAttribute('aria-selected', true);

            // Move screenreader focus
            this.ariaactivedescendant = newOption.id;
        }
    }

    /**
     * Resets the active option state, removing highlights and accessibility attributes
     * @private
     */
    resetActiveOption(){
        if (this._activeIndex){
            let $nodes = this.getOptions();
            for (var i=0; i<$nodes.length; i++){
                $nodes[i].classList.remove('option-active');
                $nodes[i].removeAttribute('aria-selected');
            }
            this._activeIndex = '';

            this.ariaactivedescendant = '';
        }
    }

    /**
     * Programmatically clicks the currently active option to select it
     * @private
     */
    clickCurrentOption(){
        let $nodes = this.getOptions();
        if ($nodes.length){
            $nodes[this._activeIndex-1].click();
        }
    }

    /**
     * Handles click events on options in the dropdown
     * Sets the component value, updates the display text, and emits appropriate events
     *
     * @param {MouseEvent} e - The click event object
     * @private
     */
    handleOptionClick(e){
      // Value & displayed value will be the same if passed as simple Array
      this.value = e.target.getAttribute('data-option-value');
      this.displayvalue = e.target.innerText;

      this.$emit('bolt-option-click');

      // Emit bubbling 'input' + 'change' events, to imitate events that
      // normally come from the underlying `<input>`.  This is necessary, in
      // order to communicate to 3rd-party libraries (like Angular) that the
      // value has been updated by the user.
      this.$emit('input', { bubbles: true });
      this.$emit('change', { bubbles: true });

      this.close();
    }

    /**
     * Lifecycle method called after the first update
     * Sets up accessibility attributes and relationships between elements
     *
     * @param {Map} changedProperties - Properties that changed in this update
     * @override
     * @private
     */
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        // Link inter-component aria labels
        let $listbox = this.shadowRoot.querySelector('.bolt-autocomplete-wc--listbox');
        $listbox.setAttribute('aria-labelledby', this.labelId);
    }

    /**
     * Gets the display value for a given data value
     * Maps between internal values and displayed text
     *
     * @param {String} dataValue - The internal value to get the display text for
     * @returns {String} The corresponding display text, or the original value if no match is found
     * @override
     * @private
     */
    _getDisplayValue(dataValue) {
      if (this.optionvalues && this.optionvalues.includes(dataValue)) {
        // match found, use derived value
        let index = this.optionvalues.indexOf(dataValue);
        return this.options[index];
      } else {
        // no match, fall back to data value
        return dataValue;
      }
    }
}

/**
 * This module exports the autocomplete component and its initialization function.
 * The autocomplete component assists users with entering valid input
 * into a text input field, reducing the number of required keystrokes and
 * chances of triggering field errors.
 *
 * @module bolt-autocomplete
 * @since 3.1.0
 *
 * @see {@link ./elements/bolt-autocomplete|BoltAutocompleteElement}
 */


/**
 * Initializes the autocomplete component by registering it as a custom element
 *
 * This function:
 * 1. Initializes dependencies (FieldError, Icon, and WaitingIndicator components)
 * 2. Registers the BoltAutocompleteElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$s() {
  // Upstream
  await initialize$w();
  await initialize$y();
  await initialize$u();

  // Local
  BoltAutocompleteElement.$define();
}

var index$r = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltAutocompleteElement: BoltAutocompleteElement,
  initialize: initialize$s
});

var CSS$w = ":host {\n  display: inline-block;\n}\n\n#root {\n  align-items: center;\n  background-color: var(--bolt-theme-error);\n  border-radius: 24px;\n  color: var(--bolt-theme-onError);\n  display: flex;\n  justify-content: center;\n  line-height: 0 !important;\n  min-height: var(--bolt-badge-min-height);\n  min-width: var(--bolt-badge-min-width);\n  padding-inline: var(--bolt-badge-padding-inline);\n  border: 1px solid currentColor;\n  background-clip: padding-box;\n}\n\n:host([size=xs]) {\n  --bolt-badge-min-height: 8px;\n  --bolt-badge-min-width: 8px;\n}\n\n:host([size=sm]) {\n  --bolt-badge-min-height: 12px;\n  --bolt-badge-min-width: 12px;\n}\n\n:host(:not([size])),\n:host([size=md]) {\n  --bolt-badge-min-height: 16px;\n  --bolt-badge-min-width: 16px;\n  --bolt-badge-padding-inline: 4px;\n}\n:host(:not([size])) #root,\n:host([size=md]) #root {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  letter-spacing: 0px;\n  font-size: clamp(10px, 10px + 1px * (var(--bolt-typography-basis) - 360) / 840, 11px);\n  line-height: clamp(1.6, 1.6 + -0.15 * (var(--bolt-typography-basis) - 360) / 840, 1.45);\n  font-weight: 500;\n  letter-spacing: 0;\n}\n\n:host([size=lg]) {\n  --bolt-badge-min-height: 24px;\n  --bolt-badge-min-width: 24px;\n  --bolt-badge-padding-inline: 8px;\n}\n:host([size=lg]) #root {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(14px, 14px + 2px * (var(--bolt-typography-basis) - 360) / 840, 16px);\n  line-height: clamp(1.43, 1.43 + 0.07 * (var(--bolt-typography-basis) - 360) / 840, 1.5);\n  font-weight: 500;\n  letter-spacing: 0;\n}\n\n:host([color=light]) #root {\n  background-color: white;\n  color: #171717;\n}\n\n:host([color=dark]) #root {\n  background-color: #171717;\n  color: white;\n}";

const MIN_COUNT = 1;
const MAX_DISPLAY = 99;

/**
 * Badge indicates the presence of one or more notifications available under a corresponding component.
 *
 * The badge component allows customization of the color and numeric count. Extra-small (XS) and small (SM) badges do not display a count.
 *
 * @class BoltBadgeElement
 * @element BoltBadgeElement
 * @tagname bolt-badge
 * @extends {BoltElement}
 * @since 5.5.0
 *
 * @property {String} color - (Optional) Defaults to `error`. Possible values: `error`, `dark`, `light`
 * @property {String} size - (Optional) The size of the badge. Defaults to `md`. Possible values: `xs`, `sm`, `md`, `lg`
 * @property {Number} count - (Optional) Sets the displayed number count. Values below `2` do not show a number count and numerical values are not shown with size `sm` or `xs`.
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @see https://bolt.nwie.net/web/components/badge
 */
class BoltBadgeElement extends BoltElement {
  /**
   * The component's tag name, used for Custom Element registration
   * @readonly
   * @type {String}
   * @static
   */
  static get is() {
    return 'bolt-badge';
  }

  /**
   * Getter for component's CSS styles
   *
   * @readonly
   * @type {CSSResult}
   * @static
   */
  static get styles() {
    return CSS$w;
  }

  /**
   * LitElement properties/attributes definition
   * @readonly
   * @type {Object}
   * @static
   * @private
   */
  static get properties() {
    return {
      size: { type: String, default: 'md', reflect: true },
      color: { type: String, default: 'error', reflect: true },
      count: { type: Number, default: MIN_COUNT },
    }
  }

  /**
   * Gets the count value for the badge
   *
   * @type {Number}
   * @returns {Number} The current count value
   */
  get count() {
    return this.__count
  }

  /**
   * Sets the count value for the badge
   * Will always be at least MIN_COUNT
   *
   * @param {Number|String} val - The count value to set
   */
  set count(val) {
    let oldVal = this.__count;
    let newVal = parseInt(val);

    if (!isNaN(newVal)) {
      this.__count = Math.max(newVal, MIN_COUNT);
      this.requestUpdate('count', oldVal);
    }
  }

  /**
   * Calculates the display value for the badge count
   *
   * Rules:
   * - For small sizes (xs, sm), no count is displayed
   * - For counts > MAX_DISPLAY (99), show "99+"
   * - For counts < MIN_COUNT (1), no count is displayed
   * - Otherwise, show the actual count
   *
   * @readonly
   * @type {String}
   * @returns {String} The formatted display count
   */
  get displayCount() {
    if (['xs', 'sm'].includes(this.size)) {
      return ''
    }

    if (this.count > MAX_DISPLAY) {
      return `${MAX_DISPLAY}+`
    }

    if (MIN_COUNT < this.count) {
      return `${this.count}`
    }

    return ''
  }

  /**
   * Renders the component's HTML template
   * Creates the shadow DOM structure for the badge
   *
   * @method
   * @private
   * @returns {TemplateResult} The component's rendered template
   */
  render() {
    return x`<div id="root">${this.displayCount}</div>`
  }
}

/**
 * This module exports the badge component and its initialization function.
 * The badge component indicates the presence of one or more notifications
 * available under a corresponding component.
 *
 * @module bolt-badge
 * @since 5.5.0
 *
 * @see {@link ./elements/bolt-badge|BoltBadgeElement}
 */


/**
 * Initializes the badge component by registering it as a custom element
 *
 * This function:
 * 1. Registers the BoltBadgeElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$r() {
  // Upstream
  // n/a

  // Local
  BoltBadgeElement.$define();
}

var index$q = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltBadgeElement: BoltBadgeElement,
  initialize: initialize$r
});

var CSS$v = ":host {\n  display: block;\n}\n\nnav {\n  display: block;\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  margin: -6px;\n}\nnav button {\n  /* css-core:utils/reset.button */\n  background: none;\n  border-radius: 0;\n  border: 0;\n  font: inherit;\n  margin: 0;\n  padding: 0;\n}\n\n#scroll-box {\n  scrollbar-width: none;\n  width: 100%;\n  white-space: nowrap;\n  overflow: scroll;\n  padding: 6px;\n}\n#scroll-box::-webkit-scrollbar {\n  display: none;\n}\n\n#btnScrollRight, #btnScrollLeft {\n  align-items: center;\n  background: none;\n  bottom: 4px;\n  color: var(--bolt-context-onSurface);\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  transition-duration: 150ms;\n  transition-property: opacity, left, right;\n  width: 44px;\n  z-index: 1;\n}\n#btnScrollRight::before, #btnScrollLeft::before {\n  bottom: 0;\n  content: \"\";\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  transition-duration: 350ms;\n  width: 200%;\n  z-index: -1;\n}\n#btnScrollRight > *, #btnScrollLeft > * {\n  opacity: 0.6;\n}\n.isVisible#btnScrollRight, .isVisible#btnScrollLeft {\n  opacity: 1;\n  pointer-events: auto;\n  transition-duration: 150ms;\n}\n.isVisible#btnScrollRight::before, .isVisible#btnScrollLeft::before {\n  transition-duration: 350ms;\n}\n.isVisible#btnScrollRight:hover, .isVisible#btnScrollLeft:hover {\n  background-color: var(--bolt-context-surface);\n}\n.isVisible#btnScrollRight:hover > *, .isVisible#btnScrollLeft:hover > * {\n  opacity: 1;\n}\n\n#btnScrollLeft {\n  left: -44px;\n}\n#btnScrollLeft::before {\n  background-image: linear-gradient(to right, var(--bolt-context-surface) 40%, rgba(0, 0, 0, 0));\n  left: 0;\n}\n#btnScrollLeft.isVisible {\n  left: 0;\n}\n\n#btnScrollRight {\n  right: -44px;\n}\n#btnScrollRight::before {\n  background-image: linear-gradient(to left, var(--bolt-context-surface) 40%, rgba(0, 0, 0, 0));\n  right: 0;\n}\n#btnScrollRight.isVisible {\n  right: 0;\n}\n\n#trail {\n  align-items: center;\n  display: flex;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n#trail > li {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  list-style-type: none;\n  margin: 0;\n  margin-left: 4px;\n}\n#trail > li::before {\n  display: inline-block;\n  content: \"/\";\n  color: var(--bolt-context-onSurface);\n  margin-right: 4px;\n  font-weight: 400;\n}\n#trail #home-crumb {\n  margin-left: 0;\n}\n#trail #home-crumb::before {\n  display: none;\n}\n\n#home-crumb > a {\n  display: inline-flex;\n  align-items: center;\n}\n#home-crumb > a > bolt-icon {\n  color: var(--bolt-context-link);\n}\n\n#current-crumb {\n  font-weight: 500;\n}";

/**
 * Breadcrumbs show the current screen level within a navigation structure of a site and provides direct access to its higher screen levels. The `bolt-breadcrumbs` custom element provides a wrapper around a home icon link, a list of links leading to the current page, and the name of the current level.
 *
 * The breadcrumbs component allows customization of the displayed text for the current level or page via `currentleveltext`. Links between the home icon and the current level can be added as slotted content by following the pattern provided.
 *
 * @class BoltBreadcrumbsElement
 * @element BoltBreadcrumbsElement
 * @tagname bolt-breadcrumbs
 * @extends {BoltElement}
 * @since 4.3.0
 *
 * @property {String} currentleveltext - (Required) Sets the "Current level" breadcrumb text, and should represent the current page the user is on.
 * @property {String} iconlink - (Optional) Sets the href value for the home icon link. Defaults to empty string (`''`).
 *
 * @slot default - The breadcrumbs' default slot should contain only list items with links. Each breadcrumb link in the slot should adhere to the following pattern: `<li><a href="...">...</a></li>`.
 *
 * @see https://bolt.nwie.net/web/components/breadcrumbs
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @example
 * <bolt-breadcrumbs currentleveltext="Current level">
    <li><a href="link1">Previous level 1</a></li>
    <li><a href="link2">Previous level 2</a></li>
    <li><a href="link3">Previous level 3</a></li>
  </bolt-breadcrumbs>
 */
class BoltBreadcrumbsElement extends BoltElement {
  /**
   * The component's tag name, used for Custom Element registration
   * @readonly
   * @type {String}
   * @static
   */
  static get is() {
    return 'bolt-breadcrumbs'
  }

  /**
   * LitElement properties/attributes definition
   * @readonly
   * @type {Object}
   * @static
   */
  static get properties() {
    return {
      iconlink: { type: String, default: '' },
      currentleveltext: { type: String, default: '' },
    }
  }

  /**
   * Getter for component's CSS styles
   *
   * @readonly
   * @type {CSSResult}
   * @static
   */
  static get styles() {
    return CSS$v
  }

  /**
   * Lifecycle callback when component is created
   * Initializes internal state variables and binds event handlers
   *
   * @private
   * @method
   */
  $onCreate() {
    // internal defaults
    /** @private {Boolean} - Tracks if the breadcrumbs can scroll left */
    this._canScrollLeft = false;
    /** @private {Boolean} - Tracks if the breadcrumbs can scroll right */
    this._canScrollRight = false;
    /** @private {Function} - Bound event handler for window resize events */
    this._onWindowResize = this._onWindowResize.bind(this);
    // TODO: need to bind _sync()?
    /** @private {Function} - Bound event handler for syncing state */
    this._sync = this._sync.bind(this);
  }

  /**
   * Lifecycle callback when component is connected to DOM
   * Adds window resize event listener
   *
   * @private
   * @method
   */
  $onConnect() {
    window.addEventListener('resize', this._onWindowResize);
  }

  /**
   * Lifecycle callback when component is disconnected from DOM
   * Removes window resize event listener to prevent memory leaks
   *
   * @private
   * @method
   */
  $onDisconnect() {
    window.removeEventListener('resize', this._onWindowResize);
  }

  /**
   * LitElement lifecycle method called after first update
   * Initializes scroll position to show the current (last) breadcrumb
   *
   * @private
   * @method
   */
  firstUpdated() {
    // TODO: initialize scroll position to reveal last crumb

    setTimeout(() => {
      let contentList = this.$scrollBox;
      let maxScrollLeft = contentList.scrollWidth - contentList.offsetWidth;

      this._scrollBreadcrumbListTo({
        left: maxScrollLeft,
        behavior: 'instant',
      });
    });
  }

  /**
   * LitElement lifecycle method called after each update
   * Syncs the component's internal state
   *
   * @private
   * @method
   */
  updated() {
    this._sync();
  }

  /**
   * Renders the component's HTML template
   * Creates the shadow DOM structure for the breadcrumbs navigation
   *
   * @method
   * @private
   * @returns {TemplateResult} The component's rendered template
   */
  render() {
    return x`
      <nav aria-label="Breadcrumb">
        <button
          aria-hidden="true"
          id="btnScrollLeft"
          @click="${this._onScrollLeftClick}"
          class="${this._canScrollLeft ? 'isVisible' : ''}"
          tabindex="-1"
          type="button"
        >
          <bolt-icon
            name="chevron-left"
            decorative
          ></bolt-icon>
        </button>

        <div id="scroll-box" @scroll="${this._onBreadcrumbListScroll}">
          <ol id="trail">
            <li id="home-crumb">
              <a href="${this.iconlink}">
                <bolt-icon name="home" title="Home"></bolt-icon>
              </a>
            </li>

            <slot @slotchange="${this._onSlotChange}"></slot>

            <li id="current-crumb" aria-current="page">
              <span>${this.currentleveltext}</span>
            </li>
          </ol>
        </div>

        <button
          aria-hidden="true"
          id="btnScrollRight"
          @click="${this._onScrollRightClick}"
          class="${this._canScrollRight ? 'isVisible' : ''}"
          tabindex="-1"
          type="button"
        >
          <bolt-icon
            name="chevron-right"
            decorative
          ></bolt-icon>
        </button>
      </nav>
    `
  }

  /* ---------- PRIVATE METHODS ---------- */

  /**
   * Recalculate if breadcrumb "arrows" should be visible
   * Updates state variables for left and right scroll buttons visibility
   *
   * @private
   * @method
   */
  _checkBreadcrumbListScroll() {
    let breadcrumbList = this.$scrollBox;
    let $scrollLeftMax = breadcrumbList.scrollWidth - breadcrumbList.offsetWidth;

    let $canScrollLeft = (breadcrumbList.scrollLeft > 0);
    if (this._canScrollLeft !== $canScrollLeft) {
      this._canScrollLeft = $canScrollLeft;
      this.requestUpdate();
    }

    let $canScrollRight = (breadcrumbList.scrollLeft < $scrollLeftMax);
    if (this._canScrollRight !== $canScrollRight) {
      this._canScrollRight = $canScrollRight;
      this.requestUpdate();
    }
  }

  /**
   * Synchronize internal state (primarily scroll state)
   * Updates the scroll button visibility based on current scroll position
   *
   * @private
   * @method
   */
  _syncTemplate() {
    this._checkBreadcrumbListScroll();
  }

  /**
   * Synchronize internal and external state.
   * @private
   */
   _sync() {
    this._syncTemplate();
  }

  /* ---------- EVENT HANDLERS (PRIVATE) ---------- */

  /**
   * @private
   * @param {Event} evt
   */
  _onScrollLeftClick(evt) {
    this._scrollBreadcrumbList(true);
  }

  /**
   * @private
   * @param {Event} evt
   */
  _onScrollRightClick(evt) {
    this._scrollBreadcrumbList();
  }

  /**
   * @private
   * @param {Event} evt
   */
  _onSlotChange(evt) {
    this.requestUpdate();
  }

  /**
   * @private
   * @param {Event} evt
   */
  _onBreadcrumbListScroll(evt) {
    this._checkBreadcrumbListScroll();
  }

  /**
   * @private
   * @param {Event} evt
   */
  _onWindowResize(evt) {
    this._checkBreadcrumbListScroll();
  }

  /**
   * Scroll the breadcrumb list by a factor of the visible content
   * Handles boundary conditions to ensure scrolling stays within limits
   *
   * @private
   * @method
   * @param {Boolean} reverse - When true, scrolls left; otherwise scrolls right
   */
  _scrollBreadcrumbList(reverse) {
    let contentList = this.$scrollBox;
    let min = 0;
    let max = contentList.scrollWidth - contentList.offsetWidth;
    // step by 50% of the scrollbox width (always show 50% of previous scroll)
    let step = Math.ceil(contentList.offsetWidth * 0.50);
    let left = contentList.scrollLeft;

    if (reverse) {
      // Scroll Backward/Left
      left -= step;
      this._scrollBreadcrumbListTo({
        left: (left < min ? min : left),
      });
    } else {
      // Scroll Forward/Right
      left += step;
      this._scrollBreadcrumbListTo({
        left: (left > max ? max : left),
      });
    }
  }

  /**
   * Scrolls the breadcrumb list to a specific position
   * Uses smooth scrolling when available
   *
   * @private
   * @method
   * @param {Object} opts - Scroll options
   * @param {Number} [opts.left] - Left position to scroll to
   * @param {String} [opts.behavior] - Scroll behavior ('smooth' or 'instant')
   */
  _scrollBreadcrumbListTo(opts) {
    let contentList = this.$scrollBox;

    if ('scrollTo' in contentList) {
      contentList.scrollTo({
        behavior: 'smooth',
        ...opts,
      });
    } else {
      if (opts.left !== undefined) {
        contentList.scrollLeft = opts.left;
      }
    }
  }

  /**
   * Gets the scroll box element from the shadow DOM
   *
   * @private
   * @readonly
   * @type {Element}
   * @returns {Element} The scroll box element
   */
  get $scrollBox() {
    return this.shadowRoot.querySelector('#scroll-box')
  }
}

/**
 * This module exports the breadcrumbs component and its initialization function.
 * Breadcrumbs show the current screen level within a navigation structure of a site
 * and provide direct access to its higher screen levels.
 *
 * @module bolt-breadcrumbs
 * @since 4.3.0
 *
 * @see {@link BoltBreadcrumbsElement|BoltBreadcrumbsElement}
 */


/**
 * Initializes the breadcrumbs component by registering it as a custom element
 *
 * This function:
 * 1. Initializes dependencies (Icon component)
 * 2. Registers the BoltBreadcrumbsElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$q() {
  // Upstream
  await initialize$y();

  // Local
  BoltBreadcrumbsElement.$define();
}

var index$p = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltBreadcrumbsElement: BoltBreadcrumbsElement,
  initialize: initialize$q
});

var CSS$u = "/* ======================================== *\\\n * PUBLIC VARIABLES\n\\* ======================================== */\n/* ======================================== *\\\n * TYPE VARIATIONS\n\\* ======================================== */\n/* ======================================== *\\\n * STATE APPEARANCE MIXINS\n\\* ======================================== */\n/* ======================================== *\\\n * LAYOUT MIXINS\n\\* ======================================== */\n/* ======================================== *\\\n * LAYOUT MIXINS\n\\* ======================================== */\n:host {\n  --onBase: var(--bolt-context-onAccent);\n  --base: var(--bolt-context-accent);\n  --baseHigh: var(--bolt-context-accentHigh);\n  --baseHighest: var(--bolt-context-accentHighest);\n  --gap: 0;\n  --pad-x: 0;\n  --pad-x-plus: 0;\n  --pad-y: 0;\n  display: inline-block;\n}\n\n:host(.bolt-button-wc--width-full) {\n  width: 100%;\n}\n\n:host(.bolt-button-wc--width-full-2xs) {\n  width: 100%;\n  width: auto;\n}\n\n:host(.bolt-button-wc--width-full-xs) {\n  width: 100%;\n}\n@media (min-width: 360px) {\n  :host(.bolt-button-wc--width-full-xs) {\n    width: auto;\n  }\n}\n\n:host(.bolt-button-wc--width-full-sm) {\n  width: 100%;\n}\n@media (min-width: 576px) {\n  :host(.bolt-button-wc--width-full-sm) {\n    width: auto;\n  }\n}\n\n:host(.bolt-button-wc--width-full-md) {\n  width: 100%;\n}\n@media (min-width: 768px) {\n  :host(.bolt-button-wc--width-full-md) {\n    width: auto;\n  }\n}\n\n:host(.bolt-button-wc--width-full-lg) {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  :host(.bolt-button-wc--width-full-lg) {\n    width: auto;\n  }\n}\n\n:host(.bolt-button-wc--width-full-xl) {\n  width: 100%;\n}\n@media (min-width: 1200px) {\n  :host(.bolt-button-wc--width-full-xl) {\n    width: auto;\n  }\n}\n\n:host(.bolt-button-wc--width-full-2xl) {\n  width: 100%;\n}\n@media (min-width: 1444px) {\n  :host(.bolt-button-wc--width-full-2xl) {\n    width: auto;\n  }\n}\n\n:host(.bolt-button-wc--width-full-3xl) {\n  width: 100%;\n}\n@media (min-width: 1752px) {\n  :host(.bolt-button-wc--width-full-3xl) {\n    width: auto;\n  }\n}\n\n@layer layout {\n  /*\n   * [1] overrides to ensure that root element is full width of :host\n   * [2] needed for badge positioning (currently unique to WC)\n   * [3] WC-unique styles\n   */\n  .bolt-button-wc {\n    box-sizing: border-box;\n    display: inline-flex;\n    justify-content: center;\n    padding: var(--pad-y) var(--pad-x);\n    display: flex;\n    position: relative;\n    width: 100%;\n  }\n  .bolt-button-wc::before {\n    content: \".\";\n    margin: 0;\n    padding: 0;\n    width: 0;\n    visibility: hidden;\n  }\n  .bolt-button-wc > * + * {\n    margin-left: var(--gap);\n  }\n  .bolt-button-wc span {\n    text-align: center;\n  }\n  .bolt-button-wc bolt-badge {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 1;\n    transform: translate(calc(var(--bolt-badge-min-height) * 0.5), -50%);\n  }\n  .bolt-button-wc.size-sm {\n    --gap: 4px;\n    --pad-x: var(--bolt-space-sm);\n    --pad-x-plus: var(--bolt-space-md);\n    --pad-y: var(--bolt-space-2xs);\n  }\n  .bolt-button-wc.size-md {\n    --gap: 8px;\n    --pad-x: var(--bolt-space-md);\n    --pad-x-plus: var(--bolt-space-lg);\n    --pad-y: var(--bolt-space-xs);\n  }\n  .bolt-button-wc.size-lg {\n    --gap: 8px;\n    --pad-x: var(--bolt-space-lg);\n    --pad-x-plus: var(--bolt-space-xl);\n    --pad-y: var(--bolt-space-sm);\n  }\n  .bolt-button-wc.icon-only {\n    --pad-x: var(--pad-y);\n  }\n  .bolt-button-wc.icon-only > * {\n    margin-inline: 0;\n  }\n  .bolt-button-wc:not(.icon-only).icon-left:not(.icon-right) {\n    padding-inline-end: var(--pad-x-plus);\n  }\n  .bolt-button-wc:not(.icon-only).icon-right:not(.icon-left) {\n    padding-inline-start: var(--pad-x-plus);\n  }\n}\n@layer appearance {\n  .bolt-button-wc {\n    border-radius: 4px;\n    text-decoration: none;\n    transition: all 350ms;\n  }\n  .bolt-button-wc:not(:disabled):focus {\n    background: var(--baseHigh);\n    border: 1px solid rgba(0, 0, 0, 0);\n    color: var(--onBase);\n    cursor: pointer;\n    /* css-core:context.focus */\n    box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n    outline: none;\n    text-decoration-color: transparent;\n  }\n  .bolt-button-wc:not(:disabled):hover {\n    background: var(--baseHigh);\n    border: 1px solid rgba(0, 0, 0, 0);\n    color: var(--onBase);\n    cursor: pointer;\n  }\n  .bolt-button-wc:not(:disabled):active {\n    background: var(--baseHighest);\n    border: 1px solid rgba(0, 0, 0, 0);\n    color: var(--onBase);\n  }\n  .bolt-button-wc:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  .bolt-button-wc:disabled > * {\n    pointer-events: none;\n  }\n  .bolt-button-wc.size-sm {\n    font-family: var(--bolt-fontFamily-sansSerif);\n    font-weight: 400;\n    font-size: clamp(12px, 12px + 2px * (var(--bolt-typography-basis) - 360) / 840, 14px);\n    line-height: clamp(1.33, 1.33 + 0.1 * (var(--bolt-typography-basis) - 360) / 840, 1.43);\n    font-weight: 500;\n  }\n  .bolt-button-wc.size-md {\n    font-family: var(--bolt-fontFamily-sansSerif);\n    font-weight: 400;\n    font-size: clamp(14px, 14px + 2px * (var(--bolt-typography-basis) - 360) / 840, 16px);\n    line-height: clamp(1.43, 1.43 + 0.07 * (var(--bolt-typography-basis) - 360) / 840, 1.5);\n    font-weight: 500;\n  }\n  .bolt-button-wc.size-lg {\n    font-family: var(--bolt-fontFamily-sansSerif);\n    font-weight: 400;\n    letter-spacing: 0px;\n    font-size: clamp(18px, 18px + 4px * (var(--bolt-typography-basis) - 360) / 840, 22px);\n    line-height: clamp(1.56, 1.56 + -0.11 * (var(--bolt-typography-basis) - 360) / 840, 1.45);\n    font-weight: 500;\n  }\n  .bolt-button-wc--solid, .bolt-button-wc--primary {\n    background: var(--base);\n    border: 1px solid rgba(0, 0, 0, 0);\n    color: var(--onBase);\n  }\n  .bolt-button-wc--solid:visited, .bolt-button-wc--primary:visited {\n    color: var(--onBase);\n  }\n  .bolt-button-wc--outline, .bolt-button-wc--secondary {\n    background: none;\n    border: 1px solid var(--base);\n    color: var(--base);\n  }\n  .bolt-button-wc--outline:visited, .bolt-button-wc--secondary:visited {\n    border: 1px solid var(--base);\n  }\n  .bolt-button-wc--ghost, .bolt-button-wc--tertiary {\n    background: none;\n    border: 1px solid rgba(0, 0, 0, 0);\n    color: var(--base);\n  }\n}";

const BUTTON_STYLE_TYPES = [
  'solid',
  'ghost',
  'outline',
  'primary', // deprecated
  'secondary', // deprecated
  'tertiary', // deprecated
];

const DATATEST_DEFAULTS$4 = {
  button: 'button',
};

/**
 * Buttons trigger an event such as screen navigation or an action applied to selected items.
 *
 * - `Solid` buttons visually guide users to the primary action we want them to take.
 * - `Outline` (a.k.a., "standard") buttons are often placed in close proximity of the primary action button.
 * - `Ghost` (a.k.a., "contextual inline") buttons should be used for triggering actions that take place on the current screen, such as removing an item from a list.
 *
 * @class BoltButtonElement
 * @element BoltButtonElement
 * @extends {BoltElement}
 * @tagname bolt-button
 * @since 3.0.0
 *
 * @property {String} arialabel - (Optional) Sets the `aria-label` attribute of the underlying `<button>` element. Has no effect on "link" buttons.
 * @property {String} arialabelledby - (Optional) Sets the `aria-labelledby` attribute of the underlying `<button>` element. Has no effect on "link" buttons.
 * @property {Number} badgecount - (Optional) Configures the number count shown on the badge.
 * - Values: `1 ≤ badgecount`
 * - A minimum value of `1` is required for the badge to appear.
 * - Values below `2` are not shown on the badge.
 * @property {String} badgecolor - (Optional) Sets the badge color. Defaulte value is `error`. Possible values: [`dark`, `error`, `light`]
 * @property {String} color - (Optional) Button color. By default, automatically adapts to contextual theme and global theme to ensure accessible contrast. Possible values: [`primary`, `secondary`, `tertiary`, `charcoal`, `darkMint`, `lightBlue`, `mint`, `vibrantBlue`, `white` ]
 * @property {String} datatestbutton - (Optional) Configures the `[data-test]` attribute on the underlying primary interactive element. Default is "button".
 * @property {Boolean} disabled - (Optional) Boolean flag used to disable the button.
 * @property {String} href - (Optional) Sets a URL to navigate to when the button is clicked. This should only be used if the button is being used as a link.
 * @property {String} iconleft - (Optional) Icon to display on the left side of the button. See {@link https://bolt.nwie.net/foundations/visual-style/iconography/|Iconography} for supported icons
 * @property {String} iconright - (Optional) Icon to display on the right side of the button. See {@link https://bolt.nwie.net/foundations/visual-style/iconography/|Iconography} for supported icons
 * @property {String} size - (Optional) The size of the button. See {@link https://bolt.nwie.net/web/components/button/#design-button-size|Button size} design guidelines for more info. Possible values: [`sm`, `md`, `lg`]
 * @property {Boolean} submit - (Optional) Boolean flag to enable form submission on click. If present, modifies element behavior to act like a `<button type="submit">`, so that it triggers `<form>` submission when clicked.
 * @property {String} target - (Optional) Passed through to underlying `<a target="...">` configuration. Only affects "link" buttons. Possible values: [`_self`, `_blank`]
 * @property {String} type - (Optional) Overrides the button style. See {@link https://bolt.nwie.net/#design-button-types|Button types} design guidelines for more info. Possible values: [`solid`, `outline`, `ghost`]
 * @property {String} width - (Optional) Button width. Possible values: [`full`, `full-sm`, `full-md`, `full-lg`, `full-xl`]
 *
 * @event {CustomEvent} click - Emitted when the button is clicked. Can be prevented by calling `preventDefault()` on the event.
 *
 * @see https://bolt.nwie.net/web/components/button
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 */
class BoltButtonElement extends BoltElement {
    /**
     * The component's tag name, used for Custom Element registration
     * @readonly
     * @type {String}
     * @static
     */
    static get is() {
      return 'bolt-button';
    }

    /**
     * LitElement properties/attributes definition.
     * Defines all the reactive properties that can be set as attributes or properties
     * @readonly
     * @type {Object}
     * @static
     */
    static get properties() {
        return {
            type: { type: String },
            size: { type: String },
            color: { type: String, reflect: true },
            datatestbutton: { type: String, default: DATATEST_DEFAULTS$4.button },
            disabled: { type : Boolean, reflect: true },
            iconleft: { type: String },
            iconright: { type: String },
            href: { type: String },
            target: { type: String },
            submit: { type: Boolean },
            width: { type: String },
            arialabelledby: { type: String },
            arialabel: { type: String },
            badgecount: { type: Number },
            badgecolor: { type: String },
        }
    }

    /**
     * Creates an instance of BoltButtonElement
     * Initialize public and private properties with default values
     *
     * @constructor
     */
    constructor() {
      super();
      // Public state variables
      this.type = 'outline';
      this.size = 'md';
      this.href = '';
      this.target = '_self';
      this.color = '';
      this.iconleft = '';
      this.iconright = '';
      this.disabled = false;
      this.width = '';
      this.arialabelledby = '';
      this.arialabel = '';

      // Private state variabless
      /** @private {String} */
      this.generatedId = this.generateId();
      /** @private {Boolean} */
      this.submit = false;
      /** @private {String} */
      this._labelledbyText = '';
      /** @private */
      this._onButtonClick = this._onButtonClick.bind(this);
    }

    /**
     * Lifecycle method called when the element is connected to the DOM
     * Sets up form submission proxy and accessibility attributes
     * @override
     */
    connectedCallback() {
      super.connectedCallback();
      this._attachSubmitProxy();
      this.setAttribute('bolt-focusable', '');
    }

    /**
     * Lifecycle method called when the element is disconnected from the DOM
     * Cleans up form submission proxy
     * @override
     */
    disconnectedCallback() {
      super.disconnectedCallback();
      this._detachSubmitProxy();
    }

    /**
     * Applies width-specific CSS classes to the button element
     * @private
     */
    applyWidth(){
        if (this.width){
            this.classList.add("bolt-button-wc--width-" + this.width);
        }
    }

    /**
     * Generates a unique ID for the button component
     * @returns {String} A unique ID string for component identification
     * @private
     */
    generateId() {
        return 'bolt-button--' + Math.floor(Math.random() * 10000000);
    }

    /**
     * Getter for component's CSS styles
     * @readonly
     * @type {CSSResult}
     * @static
     */
    static get styles() {
      return CSS$u;
    }

    // TODO: refactor logic and update unit tests
    /**
     * Computes the CSS class string for the button element
     * Combines size, type, color, and icon-related classes
     * @readonly
     * @type {String}
     * @private
     */
    get _attrClass() {
      return `
        bolt-button-wc
        size-${this.size}
        ${this._isIconOnly ? 'icon-only' : ''}
        ${this.iconleft ? 'icon-left' : ''}
        ${this.iconright ? 'icon-right' : ''}
        bolt-button-wc--${this.type}
        bolt-button-wc--color-${this.color}
      `;
    }

    /**
     * Handles slot change events to update button text span visibility
     * @param {Event} evt - The slot change event
     * @private
     */
    _onSlotChange(evt) {
      this._updateTextSpan();
    }

    /**
     * Updates the visibility and styling of the button text span
     * Manages text visibility and icon margins based on content and icon presence
     * @private
     */
    _updateTextSpan(){
      let span = this.shadowRoot.querySelector('.buttontxt');

      // FIXME: textContent may return more than bargained for in certain edge cases
      if (this.textContent.length < 1) {
        // hide the <span> if:
        // - host document does not define any visible text nodes
        // - host document removes all visible text nodes
        span.hidden = true;
      } else {
        // show the <span> if:
        // - host document adds/updates visible text content
        span.hidden = false;
      }

      // if there is no icon defined anywhere, remove the margin from span
      if(this.iconleft == '' && this.iconright == '') {
        span.style.marginRight = '0';
        span.style.marginLeft = '0';
      }
    }

    /**
     * Attempt to focus the root element.
     * Safely focuses the button element if it exists in the shadow DOM
     * @public
     */
    focus() {
      /*
       * There's no guarantee that the shadowRoot exists or been populated
       * when this method is called, so we need to make sure we don't
       * attempt to focus a nonexistent element.
       */
      let btn = this.shadowRoot?.querySelector('[part="root"]');
      btn?.focus();
    }

    /**
     * Lifecycle method called when properties change
     * Validates property values and handles side effects of property changes
     * @param {Map} changedProperties - Map of changed properties and their old values
     * @override
     */
    update(changedProperties) {
      changedProperties.forEach( (oldValue, propName) => {
        let value = this[propName];

        if(propName === 'type' && !BUTTON_STYLE_TYPES.includes(value)) {
          this.type = 'outline';
        }

        if (propName === 'arialabelledby') {
          this._labelledbyText = value ? this.$lookupInnerTexts(value) : '';
        }
      });
      super.update(changedProperties);
    }

    /**
     * Renders the component's HTML template
     * Creates either an anchor element (if href is provided) or a button element
     * @returns {TemplateResult} The component's rendered template
     * @override
     */
    render() {
        this.applyWidth();

        let attrArialabelledby = `labelledby-${this.generatedId}`;
        if (this.href && !this.disabled) {
            return x`
              <a href="${this.href}"
                id="${this.generatedId}"
                target="${this.target}"
                class="${this._attrClass}"
                part="root"
                data-test="${this._attrDataTest}"
              >
                ${this._renderIcon('left')}
                <span class="buttontxt"><slot @slotchange="${this._onSlotChange}"></slot></span>
                ${this._renderIcon('right')}

                ${this._renderBadge()}
              </a>
            `;
        } else {
            return x`
              <button
                id="${this.generatedId}"
                type="${this.submit ? 'submit' : 'button'}"
                data-test="${this._attrDataTest}"
                ?disabled="${this.disabled}"
                class="${this._attrClass}"
                aria-labelledby="${l(this.arialabelledby || this.badgecount ? attrArialabelledby : undefined)}"
                aria-label="${l(this.arialabel || null)}"
                aria-disabled="${this.disabled ? 'true' : 'false'}"
                @click="${this._onButtonClick}"
                part="root"
              >
                ${this._renderIcon('left')}
                <span class="buttontxt"><slot @slotchange="${this._onSlotChange}"></slot></span>
                ${this._renderIcon('right')}
                ${this._renderBadge()}
              </button>

              <div hidden id="${attrArialabelledby}">${this._labelledbyText}</div>
            `;
        }
    }

    /**
     * Lifecycle method called after the component updates
     * Ensures text span visibility is properly maintained
     * @override
     */
    updated(){
      this._updateTextSpan();
    }

    /**
     * Inject a proxy `<button submit>` element into the Light DOM, in order to
     * programmatically trigger native `<form>` "submit" interactions via
     * `<bolt-button submit>`.  This is difficult, because native `<form>` and
     * `<button>` elements are intrinsically connected via internal browser
     * algorithms.
     *
     * The `HTMLFormElement` interface defines two potential methods that
     * _could_ be used to trigger `<form>` submission, but neither provide a
     * full solution.
     *
     * 1. `submit()`
     *     - prevents `<form>` from emitting a 'submit' event
     *       - prevents user scripts from intercepting form submission logic,
     *         which breaks damn near every 3rd-party library that enables AJAX
     *         form submission capabilities
     *     - does not trigger constraint validation logic
     *       - prevents native, client-side validation
     *       - likely to break 3rd-party form validation libraries
     * 2. `requestSubmit()`
     *     - `<form>` will emit a 'submit' event
     *       - allows user scripts to intercept form submission logic, which
     *         enables AJAX form submission capabilities
     *     - not supported in IE
     *     - not supported in Safari 14.1.2 (current)
     *       - this has been added in Safari Technology Preview 125 (https://developer.apple.com/safari/technology-preview/release-notes/#r125)
     *       - this may land in an upcoming Safari 14.x or Safari 15 release
     *
     * Because of this, we're left with one option... injecting a proxy
     * `<button submit>` into the Light DOM, so that we can programmatically
     * trigger native interactions with the closest ancestor `<form>` element.
     * This is not without its drawbacks, either.  There is a possibility that
     * client-side frameworks that make use of virtual dom and DOM diffing
     * algorithms might accidentally remove the proxy button from the DOM tree.
     * If this scenario arises, we'll be left with no other alternative than to
     * dissolve the `<bolt-button>` custom element, in favor of vanilla HTML+CSS
     * (i.e., fall back on native browser functionality).
     */
    _attachSubmitProxy() {
      // don't attach if `<bolt-button>` instance isn't configured to submit
      if (!this.submit) {
        return;
      }

      // Ensure a proxy `<button submit>` is available to inject into Light DOM.
      this._createSubmitProxy();

      /*
       * Inject proxy `<button submit>` into Light DOM as an immediate sibling
       * of the `<bolt-icon>` instance.  This way, all 'click' event listeners
       * applied to the instance will have matching `target` and `currentTarget`
       * properties.  Additionally, we won't have to define special logic,
       * internally to differentiate between a _normal_ click event and a
       * _proxy_ click event.
       */
      this.insertAdjacentElement('afterend', this._submitProxy);
    }

    /**
     * Creates a proxy `<button submit>` element for later use.
     * This proxy enables form submission for bolt-button elements marked with submit attribute
     * @private
     */
    _createSubmitProxy() {
      if (this._submitProxy) {
        return
      }

      // create a proxy `<button submit>`
      let proxy = document.createElement('button');
      proxy.type = 'submit';
      proxy.setAttribute('bolt-proxy-for', this.generatedId);
      proxy.id = `${this.generatedId}-proxy`;
      proxy.hidden = true;
      // memoize for reference
      this._submitProxy = proxy;
    }

    /**
     * Removes proxy `<button submit>` element from the DOM.
     * Called during component cleanup to prevent memory leaks
     * @private
     */
    _detachSubmitProxy() {
      if (this._submitProxy) {
        this._submitProxy.remove();
      }
    }

    /**
     * Handle 'click' events from a `<button>` in Shadow DOM (won't trigger if
     * `<button>` is disabled).
     * Prevents event bubbling and calls the public click method
     * @param {MouseEvent} evt - The click event object
     * @private
     */
    _onButtonClick(evt) {
      // Prevent accidental interaction with `<form>` elements in the Light DOM,
      // if ShadyDOM is applied by polyfills.
      evt.preventDefault();
      // prevent 'click' event from bubbling out of Shadow DOM
      evt.stopPropagation();

      this.click();
    }

    /**
     * Programmatically trigger "click" logic.
     * Handles both regular button clicks and form submission scenarios
     * @public
     */
    click() {
      // Prevent programmatic click when disabled
      if (this.disabled) {
        return;
      }

      /**
       * [1] If a "click" event handler were applied to an ancestor element, we
       *     want a single click on the instance to result in triggering a
       *     _single_, bubbling, "click" event.
       *
       *     ## Configured as a submit button
       *     When configured as a submit button, the _proxy_ button will emit
       *     the bubbling "click" event.
       *
       *     1. click `<bolt-button submit>`
       *     2. instance emits a cancelable, non-bubbling "click" event
       *     3. if event is allowed, instance triggers a click() on the proxy button
       *     4. proxy button emits a native, bubbling, "click" event
       *
       *     ## Configured as a non-submit button
       *     When configured as a non-submit button, the _instance_ will emit
       *     the bubbling "click" event.
       *
       *     1. click `<bolt-button>`
       *     2. instance emits a cancelable, bubbling, "click" event
       *        (proxy button is never triggered to emit a separate "click" event)
       */
      let event = new Event('click', {
        bubbles: (this.submit ? false : true), // [1]
        cancelable: true,
      });

      // allow event handlers to cancel the event
      if (this.dispatchEvent(event)) {
        if (this.submit) {
          this._submitProxy.click();
        }
      }
    }

    /**
     * Renders an icon element for the specified side of the button
     * @param {String} side - Which side to render the icon for ('left' or 'right')
     * @returns {TemplateResult|String} The icon template or empty string if no icon
     * @private
     */
    _renderIcon(side){
      const icon = (side === 'left' ? this.iconleft : this.iconright);

      if (!icon) {
        return ''
      }

      return x`
        <bolt-icon
          name="${icon}"
          title=""
          decorative
          fluid
          data-side="${side}"
        ></bolt-icon>
      `;
    }

    /**
     * Renders a badge element if badgecount is specified and valid
     * @returns {TemplateResult|String} The badge template or empty string if no badge
     * @private
     */
    _renderBadge() {
      // Do not render with tertiary button or when badgecount<1> NOTE: Remove tertiary condition after deprecation
      if (this.type === 'tertiary' || this.type === 'ghost' || this.badgecount < 1) {
        return '';
      } else if (this.badgecount) {
        // badgecount attribute passed to aria attr
        let _label = (
          this.badgecount > 1
          ? ` ${this.badgecount} items need attention`
          : ' Needs attention'
        );

        this._labelledbyText += _label;

        return x `
          <bolt-badge
            color="${l(this.badgecolor || null)}"
            count="${this.badgecount}"
            size="${this._badgeSize}"
          ></bolt-badge>
        `;
      } else {
        return '';
      }
    }

    /**
     * Gets the data-test attribute value for the button
     * @readonly
     * @type {String}
     * @private
     */
    get _attrDataTest() {
      return (this.datatestbutton ? this.datatestbutton : DATATEST_DEFAULTS$4.button)
    }

    /**
     * Determines if the button should be rendered as icon-only
     * Icon-only buttons have no text content and exactly one icon (left or right, but not both)
     * @readonly
     * @type {Boolean}
     * @private
     */
    get _isIconOnly() {
      const _isEmpty = this.matches(':empty');
      // true if either icon is configured, but not both ("XOR")
      const _hasOneIcon = (
        // left OR right
        (this.iconleft || this.iconright) &&
        // but not left AND right
        !(this.iconleft && this.iconright)
      );
      // if empty and ONE icon is configured
      const result = (_isEmpty && _hasOneIcon);

      return result
    }

    /**
     * Calculates the appropriate badge size based on button size and badge count
     * @readonly
     * @type {String}
     * @private
     */
    get _badgeSize() {
      // badge size (smaller by default)
      let result = (this.size === 'lg' ? 'md' : 'sm');

      if (this.badgecount > 1) {
        // badge size must be larger if it needs to display a number
        result = (this.size === 'lg' ? 'lg' : 'md');
      }

      return result
    }
}

/**
 * This module exports the button component and its initialization function.
 * Buttons trigger an event such as screen navigation or an action applied to selected items.
 *
 * @module bolt-button
 * @since 3.0.0
 *
 * @see {@link ./elements/bolt-button|BoltButtonElement}
 */


/**
 * Initializes the button component by registering it as a custom element
 *
 * This function:
 * 1. Initializes dependencies (Badge and Icon components)
 * 2. Registers the BoltButtonElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$p() {
  // Upstream
  await initialize$r();
  await initialize$y();

  // Local
  BoltButtonElement.$define();
}

var index$o = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltButtonElement: BoltButtonElement,
  initialize: initialize$p
});

var CSS$t = ":host {\n  /* css-core:context.reset */\n  --bolt-context-surface: var(--bolt-theme-surface);\n  --bolt-context-onSurface: var(--bolt-theme-onSurface);\n  --bolt-context-onSurfaceVariant: var(--bolt-theme-onSurfaceVariant);\n  --bolt-context-outline: var(--bolt-theme-outline);\n  --bolt-context-outlineVariant: var(--bolt-theme-outlineVariant);\n  --bolt-context-focus: var(--bolt-theme-focus);\n  --bolt-context-link: var(--bolt-theme-link);\n  --bolt-context-accent: var(--bolt-theme-accent);\n  --bolt-context-accentHigh: var(--bolt-theme-accentHigh);\n  --bolt-context-accentHighest: var(--bolt-theme-accentHighest);\n  --bolt-context-onAccent: var(--bolt-theme-onAccent);\n  background-color: var(--bolt-theme-surfaceBright);\n  border-top: 1px solid var(--bolt-theme-outline);\n  display: block;\n  color: var(--bolt-theme-onSurfaceVariant);\n}\n\n#root {\n  padding: 16px 0;\n}\n\n.slot-parent {\n  display: none;\n}\n.slot-parent.visible {\n  display: block;\n}\n\n.container {\n  width: 100%;\n  padding-right: 16px;\n  padding-left: 16px;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: var(--bolt-grid-maxWidth, 1380px);\n  max-width: var(--bolt-grid-maxWidth, 1656px);\n  margin: auto;\n}\n@media (min-width: 576px) {\n  .container {\n    max-width: var(--bolt-grid-maxWidth, 540px);\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: var(--bolt-grid-maxWidth, 720px);\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    max-width: var(--bolt-grid-maxWidth, 960px);\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    max-width: var(--bolt-grid-maxWidth, 1140px);\n  }\n}\n.container-fluid {\n  width: 100%;\n  padding-right: 16px;\n  padding-left: 16px;\n  margin-right: auto;\n  margin-left: auto;\n  margin: auto;\n}\n\n.outer-row {\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n}\n.outer-row > * {\n  margin: 0;\n  flex-shrink: 0;\n}\n.outer-row > * + * {\n  margin-top: var(--bolt-space-md);\n}\n@media (min-width: 768px) {\n  .outer-row {\n    flex-direction: row-reverse;\n    justify-content: space-between;\n  }\n  .outer-row > * {\n    margin: 0;\n  }\n  .outer-row > * + * {\n    margin-right: var(--bolt-space-md);\n  }\n}\n\n.tail {\n  display: flex;\n  flex-direction: column;\n  gap: var(--bolt-space-md);\n}\n.tail > * {\n  flex-shrink: 0;\n}\n@media (min-width: 768px) {\n  .tail {\n    flex-direction: row-reverse;\n  }\n}";

/**
 * A button bar allows users to navigate between screens that start, continue or complete a task. The component is limited to no more than 4 buttons.
 *
 * Buttons are arranged using their respective `[slot]` attributes:
 * - `cancel`
 * - `alternate`
 * - `back`
 * - `forward`
 *
 * @element bolt-button-bar
 * @since 3.0.0
 *
 * @property {String} layout - (Optional) Can be used to adjust the button bar layout. Defaults to `fluid`. Possible values: [`fixed`, `fluid`]
 *
 * @slot forward - Must be `type="solid"`. See {@link https://bolt.nwie.net/web/components/button-bar/|Variations} for a demonstration of use.
 * @slot back - See {@link https://bolt.nwie.net/web/components/button-bar/|Variations} for a demonstration of use.
 * @slot alternate - See {@link https://bolt.nwie.net/web/components/button-bar/|Variations} for a demonstration of use.
 * @slot cancel - See {@link https://bolt.nwie.net/web/components/button-bar/|Variations} for a demonstration of use.
 *
 * @see https://bolt.nwie.net/web/components/button-bar
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @example
 * ```html
 * <bolt-button-bar layout="fluid">
 *   <bolt-button slot="forward">Next</bolt-button>
 *   <bolt-button slot="back">Back</bolt-button>
 *   <bolt-button slot="cancel">Cancel</bolt-button>
 * </bolt-button-bar>
 * ```
 */
class BoltButtonBarElement extends BoltElement {
  /**
   * Returns the custom element tag name for registration
   * @readonly
   * @static
   * @returns {String} The element tag name 'bolt-button-bar'
   */
  static get is() {
    return 'bolt-button-bar';
  }

  /**
   * Returns the CSS styles for the component
   * @readonly
   * @static
   * @returns {CSSResult} The component's CSS styles
   */
  static get styles() {
    return CSS$t;
  }

  /**
   * Defines the reactive properties for the component
   * @readonly
   * @static
   * @returns {Object} Property definitions with types and configuration
   */
  static get properties() {
    return {
      layout: { type: String },
    }
  }

  /**
   * Lifecycle method called when the element is created.
   * Initializes default property values.
   *
   * @protected
   */
  $onCreate() {
    this.layout = 'fluid';
  }

  /**
   * Renders the button bar template with slots for different button types.
   * Creates a responsive container structure with slots for forward, back,
   * alternate, and cancel buttons.
   *
   * @returns {TemplateResult} The component's HTML template
   * @override
   */
  render() {
    return x`
      <div id="root">
        <div class="container${this.layout === 'fluid' ? '-fluid' : ''}">
          <div class="outer-row">
            <div class="tail">
              <div id="wrap-fwd" class="slot-parent">
                <slot
                  name="forward"
                  @slotchange="${this._onSlotChange}"
                ></slot>
              </div>
              <div id="wrap-back" class="slot-parent">
                <slot
                  name="back"
                  @slotchange="${this._onSlotChange}"
                ></slot>
              </div>
              <div id="wrap-alt" class="slot-parent">
                <slot
                  name="alternate"
                  @slotchange="${this._onSlotChange}"
                ></slot>
              </div>
            </div>

            <div id="wrap-cancel" class="slot-parent">
              <slot
                name="cancel"
                @slotchange="${this._onSlotChange}"
              ></slot>
            </div>
          </div>
        </div>
      </div>
    `
  }

  /**
   * Handles slot change events to show/hide slot containers based on content.
   * Adds 'visible' class to parent containers when slots have assigned elements,
   * removes it when slots are empty.
   *
   * @private
   * @param {Event} evt - The slotchange event
   */
  _onSlotChange(evt) {
    let slot = evt.target;
    let parent = slot.parentElement;

    if (slot.assignedElements().length > 0) {
      parent.classList.add('visible');
    } else {
      parent.classList.remove('visible');
    }
  }
}

/**
 * This module exports the button bar component and its initialization function.
 * The button bar component provides a horizontal grouping container for multiple
 * buttons, allowing for consistent spacing and alignment of related actions.
 *
 * @module bolt-button-bar
 * @since 3.1.0
 *
 * @see {@link ./elements/bolt-button-bar|BoltButtonBarElement}
 */


/**
 * Initializes the button bar component by registering it as a custom element
 *
 * This function:
 * 1. Registers the BoltButtonBarElement custom element
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$o() {
  // Upstream
  // n/a

  // Local
  BoltButtonBarElement.$define();
}

var index$n = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltButtonBarElement: BoltButtonBarElement,
  initialize: initialize$o
});

var CSS$s = ":host {\n  display: block;\n  margin: 0;\n  padding: 0;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbolt-field-error {\n  margin-top: 4px;\n}\n\n.bolt-checkbox {\n  display: flex;\n  gap: 0.5em;\n}\n.bolt-checkbox > * {\n  flex-shrink: 1;\n}\n.bolt-checkbox input {\n  left: -9999px;\n  position: absolute;\n}\n.bolt-checkbox label {\n  display: grid;\n  gap: 0 12px;\n  grid-template-areas: \"facade label\" \".      desc\";\n  grid-template-columns: auto 1fr;\n}\n.bolt-checkbox__label {\n  grid-area: label;\n}\n.bolt-checkbox__description {\n  grid-area: desc;\n}\n.bolt-checkbox bolt-checkbox-facade {\n  flex-shrink: 0;\n  grid-area: facade;\n}\n\n:host(:empty) .bolt-checkbox label {\n  gap: 0;\n}\n:host(:empty) .bolt-checkbox label > *:not(bolt-checkbox-facade) {\n  display: none;\n}\n\n.bolt-checkbox label {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(14px, 14px + 2px * (var(--bolt-typography-basis) - 360) / 840, 16px);\n  line-height: clamp(1.43, 1.43 + 0.07 * (var(--bolt-typography-basis) - 360) / 840, 1.5);\n  cursor: pointer;\n  transition: 350ms;\n}\n.bolt-checkbox__description {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  letter-spacing: 0px;\n  font-size: clamp(11px, 11px + 1px * (var(--bolt-typography-basis) - 360) / 840, 12px);\n  line-height: clamp(1.45, 1.45 + -0.12 * (var(--bolt-typography-basis) - 360) / 840, 1.33);\n  font-style: italic;\n}\n.bolt-checkbox input:checked ~ label bolt-checkbox-facade {\n  --checkmark-scale: 1;\n}\n.bolt-checkbox input:disabled ~ * {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.bolt-checkbox.invalid bolt-checkbox-facade {\n  --color: var(--bolt-theme-error);\n  --stroke: var(--bolt-theme-error);\n  --stroke-width: 2;\n}\n\n.bolt-checkbox.unbound bolt-checkbox-facade {\n  --fill: var(--bolt-theme-inputSurface);\n}\n.bolt-checkbox.unbound input:enabled:hover ~ label bolt-checkbox-facade {\n  --fill: var(--bolt-theme-inputSurfaceHigh);\n}\n.bolt-checkbox.unbound input:enabled:focus-visible ~ label bolt-checkbox-facade {\n  --fill: var(--bolt-theme-inputSurfaceHigh);\n  --outline: var(--bolt-context-focus);\n}\n.bolt-checkbox.unbound input:enabled:active ~ label bolt-checkbox-facade {\n  --fill: var(--bolt-theme-inputSurfaceHighest);\n}\n\n.bolt-checkbox.bound label {\n  flex-grow: 1;\n  padding: var(--bolt-space-sm) var(--bolt-space-md);\n}\n\n.bolt-checkbox.bound label {\n  background-color: var(--bolt-theme-inputSurface);\n  border-radius: 8px;\n  border: 1px solid var(--bolt-theme-outline);\n  color: var(--bolt-theme-onSurface);\n}\n.bolt-checkbox.bound input:enabled:hover ~ label {\n  background-color: var(--bolt-theme-inputSurfaceHigh);\n}\n.bolt-checkbox.bound input:enabled:focus-visible ~ label {\n  /* css-core:context.focus */\n  box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n  outline: none;\n  text-decoration-color: transparent;\n  background-color: var(--bolt-theme-inputSurfaceHigh);\n  border-color: var(--bolt-context-focus);\n}\n.bolt-checkbox.bound input:enabled:active ~ label {\n  background-color: var(--bolt-theme-inputSurfaceHighest);\n  border-color: var(--bolt-theme-outline);\n}\n.bolt-checkbox.bound.invalid label {\n  border-color: var(--bolt-theme-error) !important;\n  border-width: 2px;\n}";

/**
 * Default data-test attribute values for the checkbox component
 * @constant {Object}
 */
const DATATEST_DEFAULTS$3 = {
  checkbox: 'checkbox',
};

/**
 * Checkboxes indicate whether an option, sometimes part of a group of related options, has been selected. The checkbox component is composed of two custom elements: `<bolt-checkbox-group>` and `<bolt-checkbox>`.
 *
 * `bolt-checkbox` can be used on its own or nested within a `bolt-checkbox-group`.
 *
 * @class BoltCheckboxElement
 * @element BoltCheckboxElement
 * @extends {BoltElement}
 * @tagname bolt-checkbox
 * @since 3.0.0
 *
 * @property {String} name - (Optional) The form field's `name` attribute.
 * @property {String} value - (Required) The value of the checkbox button.
 * @property {Boolean} disabled -  If present, disables rendered interactive elements.
 * @property {String} error - (Optional) The error message to display. Should only be used on a single checkbox when used outside of a `bolt-checkbox-group` and should NOT be used when component is `disabled`.
 * @property {Boolean} checked - (Optional) If present, the control is checked.
 * @property {Boolean} required - (Optional) If present, the required attribute is passed to the `<input>` element associated with that checkbox.
 * @property {String} arialabel - (Optional) An alternative label for screen reader usage that is not visible on the page. Screen readers will not read slotted content inside a `bolt-checkbox` element if `arialabel` is used.
 * @property {String} arialabelledby - (Optional) The `id` of an element containing label text for the input. It can accept multiple `ids` to point to other elements of the page using a space separated list. If `arialabelledby` is used, screen readers will not read slotted content inside a `bolt-checkbox` element or text from `arialabel`.
 * @property {Boolean} invalid - (Optional) If present, the control appears invalid.
 * @property {String} datatestcheckbox - (Optional) Property to configure the `data-test` value on the underlying `<input>` element. Default is `checkbox`.
 * @property {String} description - (Optional) Property adds descriptive text to an individual checkbox. Must be plain text.
 * @property {Boolean} bounded - (Optional) If present, checkbox appears with a bounded border. If the checkbox is part of a group, `bounded` should be applied to `<bolt-checkbox-group>` instead.
 *
 * @see https://bolt.nwie.net/web/components/checkbox
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @example
 * <bolt-checkbox-group label="Group label goes here">
    <bolt-checkbox value="1">Item 1 label</bolt-checkbox>
    <bolt-checkbox value="2">Item 2 label</bolt-checkbox>
    <bolt-checkbox value="3">Item 3 label</bolt-checkbox>
  </bolt-checkbox-group>
 */
class BoltCheckboxElement extends BoltElement {
  /**
   * Returns the custom element tag name for registration
   * @readonly
   * @static
   * @returns {String} The element tag name 'bolt-checkbox'
   */
  static is = 'bolt-checkbox'

  /**
   * Returns the CSS styles for the component
   * @readonly
   * @static
   * @returns {CSSResult} The component's CSS styles
   */
  static styles = CSS$s

    /**
     * Defines the reactive properties for the component
     * @readonly
     * @static
     * @returns {Object} Property definitions with types and configuration
     */
    static get properties() {
        return {
            checked: { type: Boolean, reflect: true },
            datatestcheckbox: { type: String, default: DATATEST_DEFAULTS$3.checkbox },
            disabled: { type : Boolean, reflect: true },
            bounded: { type : Boolean },
            description: { type : String },
            required: { type: Boolean },
            error: { type: String },
            hiddenlabel: { type : Boolean },
            name: { type: String, reflect: true },
            value: { type: String, reflect: true },
            arialabelledby: { type: String },
            arialabel: { type: String },
            invalid: { type: Boolean },
        }
    }

    /**
     * Creates an instance of BoltCheckboxElement.
     * Initializes default property values and generates unique IDs for accessibility.
     *
     * @constructor
     */
    constructor() {
        super();
        // Public state variables
        this.checked = false;
        this.description = '';
        this.disabled = false;
        this.bounded = false;
        this.required = false;
        this.error = '';
        /** @private {Boolean} */
        this.hiddenlabel = false;
        this.name = '';
        this.value = '';
        this.invalid = false;
        this.arialabelledby = '';
        this.arialabel = '';

        // Private state variables
        /** @private {Boolean} */
        this.parentInvalid = false;
        /** @private {Boolean} */
        this.parentDisabled = false;
        /** @private {String} */
        this.generatedId = this.generateId();
        /** @private {String} */
        this.errorId = this.generateId('error');
        /** @private {String} */
        this._labelledbyText = '';

    }

    /**
     * Generates a unique ID for the checkbox element or its sub-components
     * @private
     * @param {String} [type] - Optional type suffix for the ID
     * @returns {String} The generated unique ID
     */
    generateId(type) {
      let prefix = 'bolt-checkbox';
      if (type) {
        prefix = `${prefix}__${type}`;
      }

      return `${prefix}-${this.$generateId()}`;
    }

    /**
     * Lifecycle method called when the element is connected to the DOM.
     * Sets up focusable attribute for accessibility.
     *
     * @protected
     */
    $onConnect() {
      this.setAttribute('bolt-focusable', '');
    }

    /**
     * Handles the change event from the input element.
     * Synchronizes state and relays the event.
     *
     * @private
     * @param {Event} e - The change event
     */
    _onChange(e){
      this._syncState();

      // relay 'change' event
      this.$emit(e.type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
      });
    }

    /**
     * Handles the input event from the input element.
     * Stops propagation and relays the event.
     *
     * @private
     * @param {Event} e - The input event
     */
    _onInput(e){
      e.stopPropagation();

      // relay 'input' event
      this.$emit(e.type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
      });
    }

    /**
     * Handles the blur event from the input element.
     * Relays the blur event.
     *
     * @private
     * @param {Event} e - The blur event
     */
    _onBlur(e){
      // relay 'blur' event
      this.$emit(e.type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
      });
    }

    /**
     * Renders the checkbox component template.
     * Creates the input element, label, facade, and optional description and error elements.
     *
     * @private
     * @returns {TemplateResult} The component's HTML template
     */
    render() {
        let arrDescribedBy = [];
        arrDescribedBy.push(this.errorId);
        let describedBy = arrDescribedBy.join(" ").trim();
        let attrArialabelledby = `labelledby-${this.generatedId}`;

        return x`
          <div
            class="
              bolt-checkbox
              ${this.bounded ? 'bound' : 'unbound'}
              ${this._isInvalid ? 'invalid' : ''}
            "
          >
            <input
              ?checked="${this.checked}"
              ?disabled="${this._isDisabled}"
              ?required="${this.required}"
              @blur="${this._onBlur}"
              @change="${this._onChange}"
              @input="${this._onInput}"
              aria-describedby="${l(describedBy || null)}"
              aria-disabled="${this._isDisabled ? 'true' : 'false'}"
              aria-invalid="${this._isInvalid}"
              aria-label="${l(this.arialabel || null)}"
              aria-labelledby="${l(this._labelledbyText ? attrArialabelledby : undefined)}"
              data-test="${this.datatestcheckbox || DATATEST_DEFAULTS$3.checkbox}"
              id="${this.generatedId}"
              name="${this.name}"
              type="checkbox"
              value="${this.value}"
            />

            <label for="${this.generatedId}">
              <bolt-checkbox-facade></bolt-checkbox-facade>
              <div class="bolt-checkbox__label"><slot></slot></div>
              ${this._showCheckboxDescription()
                ? x`<div class="bolt-checkbox__description">${this.description}</div>`
                : ''
              }
            </label>
          </div>
          <slot name="error" @slotchange="${this._onErrorSlotChange}" id="${this.errorId}">
            ${this.error && this.error !== '[CHECKBOX-GROUP-ERROR]'
              ? x`<bolt-field-error>${this.error}</bolt-field-error>`
              : ''
            }
          </slot>

          <div hidden id="${attrArialabelledby}">${this._labelledbyText}</div>
        `;
    }

    /**
     * Lifecycle method called after the element has been updated.
     * Synchronizes the checked state with the input element.
     *
     * @protected
     * @param {Map} props - The changed properties
     */
    updated(props) {
      if (props.has('checked')) {
        this.$input.checked = this.checked;
      }

      this._syncState();
    }

    /**
     * Lifecycle method called before the element is updated.
     * Processes property changes, particularly for aria-labelledby updates.
     *
     * @protected
     * @param {Map} changedProperties - The properties that have changed
     */
    update(changedProperties) {
      changedProperties.forEach( (oldValue, propName) => {
        let value = this[propName];

        if (propName === 'arialabelledby') {
          this._labelledbyText = value ? this.$lookupInnerTexts(value) : '';
        }
      });
      super.update(changedProperties);
    }

  /**
   * Lifecycle method called after the element's first update.
   * Sets up scroll behavior for focus events.
   *
   * @protected
   */
  firstUpdated() {
    setTimeout(() => {
      this.scrollOnFocus();
    });
  }

  /**
   * Sets up scroll behavior when the checkbox receives focus.
   * Ensures the checkbox facade scrolls into view for better accessibility.
   *
   * @protected
   */
  scrollOnFocus() {
    const checkboxFacade = this.shadowRoot.querySelector('bolt-checkbox-facade');

    this.addEventListener('focus', function() {
      checkboxFacade.scrollIntoView({ block: 'nearest' });
    });
  }

    /**
     * Programmatically sets the checked state and emits appropriate events.
     * Emulates user interaction by firing input and change events.
     *
     * @private
     * @param {Boolean} isChecked - The desired checked state
     */
    _setChecked(isChecked){
      if(this.checked !== isChecked){
        this.checked = isChecked;

        // Emit bubbling 'input' + 'change' events, to imitate events that
        // normally come from the underlying `<input>`.  This is necessary, in
        // order to communicate to 3rd-party libraries (like Angular) that the
        // value has been updated by the user.
        this.$emit('input', { bubbles: true });
        this.$emit('change', { bubbles: true });
      }
    }

    /**
     * Synchronizes the component's checked property with the input element's state.
     *
     * @private
     */
    _syncState() {
      if (this.$input && this.$input.checked) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    }

    /**
     * Programmatically focuses the checkbox input element.
     * Safely handles cases where the shadow DOM may not be ready.
     *
     * @protected
     */
    focus() {
      /*
       * There's no guarantee that the shadowRoot exists or been populated
       * when this method is called, so we need to make sure we don't
       * attempt to focus a nonexistent element.
       */
      this.$input?.focus();
    }

     _onErrorSlotChange(evt) {
      this._hasErrorAttribute = !!evt.target.assignedNodes().length;
      this.requestUpdate();
    }

    /** @private */
    get $input() {
      return this.shadowRoot?.querySelector('input');
    }

    /**
     * Gets the label element from the shadow DOM.
     *
     * @private
     * @returns {HTMLLabelElement} The label element
     */
    get $label() {
      return this.shadowRoot.querySelector('label');
    }

    /**
     * Gets the default slot element from the shadow DOM.
     *
     * @private
     * @returns {HTMLSlotElement} The slot element
     */
    get $slot() {
      return this.shadowRoot.querySelector('slot:not([name])');
    }

    /**
     * Determines if the checkbox should appear in an invalid state.
     * Considers local invalid state, parent invalid state, and error messages.
     *
     * @private
     * @returns {Boolean} True if the checkbox should appear invalid
     */
    get _isInvalid() {
      return Boolean(this.invalid || this.parentInvalid || this.error  || this.querySelector('bolt-field-error[slot="error"]'))
    }

    /**
     * Determines if the checkbox should be disabled.
     * Considers both local disabled state and parent disabled state.
     *
     * @private
     * @returns {Boolean} True if the checkbox should be disabled
     */
    get _isDisabled() {
      return Boolean(this.disabled || this.parentDisabled);
    }

    /**
     * Determines if the checkbox description should be displayed.
     *
     * @protected
     * @returns {Boolean} True if the description should be shown
     */
    _showCheckboxDescription() {
      return (!!this?.description)
    }
}

/**
 * Abstract class to apply common behavior among a subset of Bolt custom elements.
 *
 * @class BoltFieldElement
 * @element BoltFieldElement
 * @extends {BoltElement}
 * @tagname bolt-field
 * @since 3.0.0
 *
 */
class BoltFieldElement extends BoltElement {
  static is = 'bolt-field'
  static styles = `:host { display: block; }`

  /** @override */
  $onConnect() {
    this.classList.add('bolt-field');
  }

  /**
   * Renders the component's HTML template
   *
   * @returns {TemplateResult} The component's rendered template
   * @override
   * @protected
  */
  render() {
    return x`<slot></slot>`
  }
}

/**
 * This module exports the field component - an bbstract class to apply common behavior among a subset of Bolt custom elements.
 *
 * @module bolt-field
 * @since 3.0.0
 *
 * @see {@link ./elements/bolt-field|BoltFieldElement}
 */

/**
 * Initializes the field component by registering it as a custom element
 *
 * This function:
 * 1. Registers the BoltFieldElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$n() {
  // Upstream
  // n/a

  // Local
  BoltFieldElement.$define();
}

var index$m = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltFieldElement: BoltFieldElement,
  initialize: initialize$n
});

/**
 * Extends BoltFieldElement to take advantage of the automatic application of the `.bolt-field` CSS class to every instance of `<bolt-checkbox-control>`.
 * @class BoltCheckboxControlElement
 * @element BoltCheckboxControlElement
 * @extends {BoltFieldElement}
 * @since 3.0.0
 *
 * @see https://bolt.nwie.net/web/components/checkbox
 *
 */
class BoltCheckboxControlElement extends BoltFieldElement {
  static is = 'bolt-checkbox-control'
}

var CSS$r = ":host {\n  --checkmark-scale: 0;\n  --color: var(--bolt-theme-onSurface);\n  --fill: var(--bolt-theme-inputSurface);\n  --minus-scale: 0;\n  --outline: none;\n  --size: 1lh;\n  --stroke-width: 1;\n  --stroke: var(--bolt-theme-outline);\n  display: inline-block;\n  height: var(--size);\n  width: var(--size);\n}\n\nsvg {\n  color: var(--color);\n  overflow: visible;\n}\n\n#box {\n  fill: var(--fill);\n  stroke: var(--stroke);\n  stroke-width: calc(2px * var(--stroke-width));\n  transition: 350ms;\n}\n\n#outline {\n  fill: none;\n  stroke: var(--outline);\n  stroke-width: 3px;\n}\n\n#minus,\n#checkmark {\n  fill: currentColor;\n  transform-origin: center;\n  transition: 350ms;\n}\n\n#checkmark {\n  transform: scale(var(--checkmark-scale));\n}\n\n#minus {\n  transform: scale(var(--minus-scale));\n}";

/**
 * A facade element that provides the visual representation for a checkbox component.
 * This element renders an SVG-based checkbox appearance with checkmark, minus, and outline states.
 *
 * @class BoltCheckboxFacadeElement
 * @element BoltCheckboxFacadeElement
 * @extends {BoltElement}
 * @since 3.0.0
 *
 * @see https://bolt.nwie.net/web/components/checkbox
 *
 */
class BoltCheckboxFacadeElement extends BoltElement {
  /**
   * The element tag name used for registration with the browser's custom element registry.
   * @type {String}
   * @static
   * @readonly
   */
  static is = 'bolt-checkbox-facade'

  /**
   * The CSS styles for this component imported from the shadow DOM stylesheet.
   * @type {CSSResult}
   * @static
   * @readonly
   */
  static styles = CSS$r

  /**
   * Renders the SVG-based checkbox facade with multiple visual states.
   * The SVG includes:
   * - A mask for inner stroke effects
   * - A main checkbox box with rounded corners
   * - A minus symbol for indeterminate state
   * - A checkmark for checked state
   * - An outline for focus/hover states
   *
   * @returns {TemplateResult} The rendered SVG template for the checkbox facade
   * @memberof BoltCheckboxFacadeElement
   */
  render() {
    return b`
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
      >
        <mask id="innerStroke">
          <rect height="24" width="24" rx="4" fill="#fff" />
        </mask>
        <rect id="box" height="24" width="24" rx="4" mask="url(#innerStroke)" />

        <path id="minus" d="M4.24982 12.7498V11.2498H19.7498V12.7498H4.24982Z" />
        <path id="checkmark"  d="M4.75197 11.2928L9.34817 15.889L19.2477 5.98947L20.3083 7.05013L9.34817 18.0103L3.69131 12.3534L4.75197 11.2928Z" />

        <rect id="outline" height="29" width="29" rx="6" x="-2.5" y="-2.5" />
      </svg>
    `
  }
}

var CSS$q = ".bolt-annotation.bolt-optional {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  letter-spacing: 0px;\n  font-size: clamp(11px, 11px + 1px * (var(--bolt-typography-basis) - 360) / 840, 12px);\n  line-height: clamp(1.45, 1.45 + -0.12 * (var(--bolt-typography-basis) - 360) / 840, 1.33);\n  font-style: italic;\n  font-weight: 400;\n}\n\n:host,\n:host * {\n  /* css-core:utils/reset.component */\n  border: 0;\n  font: inherit;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  vertical-align: baseline;\n}\n\n:host {\n  display: block;\n}\n:host .bolt-help {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  letter-spacing: 0px;\n  font-size: clamp(11px, 11px + 1px * (var(--bolt-typography-basis) - 360) / 840, 12px);\n  line-height: clamp(1.45, 1.45 + -0.12 * (var(--bolt-typography-basis) - 360) / 840, 1.33);\n}\n:host bolt-field-error {\n  margin-top: 4px;\n}\n:host .bolt-help {\n  margin-top: 4px;\n}\n:host fieldset > * + * {\n  margin-top: 8px;\n}\n\n#toggleButtons > * + * {\n  margin-left: 12px;\n}\n#toggleButtons > span {\n  color: var(--bolt-context-onSurfaceVariant);\n}\n#toggleButtons > button {\n  background: none;\n  color: var(--bolt-context-link);\n  cursor: pointer;\n  text-decoration: underline;\n  text-underline-offset: 4px;\n  transition: all 150ms, box-shadow 350ms;\n  white-space: nowrap;\n}\n#toggleButtons > button:focus {\n  /* css-core:context.focus */\n  box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n  outline: none;\n  text-decoration-color: transparent;\n}\n#toggleButtons > button:hover {\n  color: var(--bolt-context-link);\n  text-decoration-color: transparent;\n}\n#toggleButtons > button:disabled {\n  opacity: 0.5;\n  text-decoration-color: transparent;\n  cursor: not-allowed;\n}\n\n.bolt-checkbox-group-wc--fieldset {\n  border: 0;\n  padding: 0;\n}\n.bolt-checkbox-group-wc--fieldset__disabled {\n  cursor: not-allowed;\n}\n.bolt-checkbox-group-wc--fieldset__disabled legend {\n  opacity: 0.5;\n}\n.bolt-checkbox-group-wc--label {\n  font-weight: 500;\n}";

/**
 * The bolt-checkbox-group component provides a wrapper around native `<fieldset>` and `<legend>` elements, applying a label (via the `label` attribute) to the set of bolt-checkbox components, which wrap native `<input>` and `<label>` elements and apply appropriate layout and data access APIs. The two components should be used together when multiple checkboxes are used. A single `bolt-checkbox` can also be used by itself.
 *
 * The `bolt-checkbox-group` element must include one of these three parameters:
 * - `label`: The label text, used to populate the underlying `<legend>` element.
 * - `arialabel`: Sets the aria-label attribute of the underlying `<input>` element.
 * - `ariaabelledby`: Sets the aria-labelledby attribute of the underlying `<input>` element.
 *
 * @class BoltCheckboxGroupElement
 * @element BoltCheckboxGroupElement
 * @extends {BoltElement}
 * @tagname bolt-checkbox-group
 * @since 3.0.0
 *
 * @property {String} label - (Conditionally Required) The label text, used to populate the underlying `<legend>` element. Required if `arialabel` or `arialabelledby` are NOT present.
 * @property {String} arialabel - (Conditionally Required) Sets the aria-label attribute of the underlying `<input>` element. Required if `label` or `arialabelledby` are NOT present.
 * @property {String} arialabelledby - (Conditionally Required) Sets the aria-labelledby attribute of the underlying `<input>`. Required if `label` or `arialabel` are NOT present.
 * @property {String} instructionaltext - (Optional) Instructional text to help users understand the checkbox group.
 * @property {Boolean} required - (Optional) If not present, the group is marked as (optional). The `required` parameter should also be set at the `bolt-checkbox` level for any checkboxes in the group that require a response.
 * @property {String} optionaltext - (Optional) Used to remove the "(optional)" text from non-required fields. Default is `show`. Possible values: [`show`, `hide`]
 * @property {Boolean} disabled - If present, disables rendered interactive elements.
 * @property {String} error - (Optional) The error message to display. Should NOT be used when component is `disabled`. For slotted field error see {@link https://bolt.nwie.net/web/components/field-error/#checkbox-group-with-error-slot|checkbox error slot}.
 * @property {Boolean} invalid - (Optional) If present, the group appears invalid.
 * @property {Boolean} showtoggle - (Optional) If present, displays the "Select all" / "Select none" option.
 * @property {Boolean} bounded - (Optional) If present, all checkboxes in the group appear with a bounded border.
 *
 * @slot help - Contains a `<bolt-contextual-help>` element
 *
 * @event {CustomEvent} bolt-select-all - Emitted when the 'select all' control is clicked.
 * @event {CustomEvent} bolt-select-none - Emitted when the 'select none' control is clicked.
 *
 * @see https://bolt.nwie.net/web/components/checkbox
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @example
 * <bolt-checkbox-group label="Group label goes here">
    <bolt-checkbox value="1">Item 1 label</bolt-checkbox>
    <bolt-checkbox value="2">Item 2 label</bolt-checkbox>
    <bolt-checkbox value="3">Item 3 label</bolt-checkbox>
  </bolt-checkbox-group>
 *
 */
class BoltCheckboxGroupElement extends BoltElement {
  /**
   * Returns the custom element tag name for registration
   * @readonly
   * @static
   * @returns {String} The element tag name 'bolt-checkbox-group'
   */
  static get is() {
    return 'bolt-checkbox-group';
  }

  /**
   * Returns the CSS styles for the component
   * @readonly
   * @static
   * @returns {CSSResult} The component's CSS styles
   */
  static get styles() {
    return CSS$q;
  }

  /**
   * Defines the reactive properties for the component
   * @readonly
   * @static
   * @returns {Object} Property definitions with types and configuration
   */
  static get properties() {
    return {
      error: { type: String },
      label: { type: String },
      disabled: { type : Boolean, reflect: true },
      bounded: { type : Boolean },
      instructionaltext: { type: String },
      required: { type: Boolean },
      optionaltext: { type: String },
      arialabelledby: { type: String },
      arialabel: { type: String },
      invalid: { type: Boolean },
      showtoggle: { type: Boolean },
    }
  }

  /**
   * Lifecycle method called when the element is created.
   * Initializes default property values and generates unique IDs for accessibility.
   *
   * @protected
   */
  $onCreate() {
    this.error = '';
    this.label = '';
    this.disabled = false;
    this.bounded = false;
    this.instructionaltext = '';
    this.required = false;
    this.optionaltext = 'show';
    this.showtoggle = false;
    this.invalid = false;
    this.onchange = null;
    this.generatedId = this.generateId();
    this.errorId = this.generateId('error');
    this.instructionaltextId = this.generateId('instructionaltext');
    this.labelId = this.generateId('label');
    this.arialabelledby = '';
    this._labelledbyText = '';
    this.arialabel = '';
  }

  /**
   * Lifecycle method called when the element is connected to the DOM.
   * Sets up event listeners for the checkbox group.
   *
   * @protected
   */
  $onConnect() {
    this.addEventListener('change', this._onChange);
  }

  /**
   * Lifecycle method called when the element is disconnected from the DOM.
   * Cleans up event listeners for the checkbox group.
   *
   * @protected
   */
  $onDisconnect() {
    this.removeEventListener('change', this._onChange);
  }

  /**
   * Generates a unique ID for the checkbox group element or its sub-components
   * @private
   * @param {String} [type] - Optional type suffix for the ID
   * @returns {String} The generated unique ID
   */
  generateId(type) {
    return 'bolt-checkbox-group-wc--' + (type ? (type + '--') : '') + Math.floor(Math.random() * 10000000);
  }

  /**
   * Renders the checkbox group component template.
   * Creates the fieldset container, legend, optional toggle buttons, and slot for checkboxes.
   *
   * @private
   * @returns {TemplateResult} The component's HTML template
   */
  render() {
    let arrDescribedBy = [];
    arrDescribedBy.push(this.errorId);
    arrDescribedBy.push(this.instructionaltext ? this.instructionaltextId : '');
    let attrArialabelledby = `labelledby-${this.generatedId}`;

    return x`
      <fieldset
        class="
          bolt-checkbox-group-wc--fieldset
          ${this._isInvalid ? 'bolt-checkbox-group-wc--fieldset__has-error' : ''}
          ${this.disabled ? 'bolt-checkbox-group-wc--fieldset__disabled' : ''}
        "
        aria-label="${l(this.arialabel || null)}"
        aria-labelledby="${l(this._labelledbyText ? attrArialabelledby : undefined)}"
      >
        <legend>
          <span class="bolt-checkbox-group-wc--label">
            ${this.label}
          </span>

          ${!(this.required) && this.label.length > 0 && this.optionaltext == 'show' ? x`
            <span class="bolt-annotation bolt-optional"> (optional)</span>
          ` : ''}

          <slot name="help"></slot>

          ${ this.instructionaltext
            ? x`
              <div
                class="bolt-help"
                id="${this.instructionaltextId}"
              >
                ${this.instructionaltext}
              </div>
            `
            : ''
          }
          <slot name="error" @slotchange="${this._onErrorSlotChange}" id="${this.errorId}">
           ${ this.error
            ? x`
              <bolt-field-error>
                ${this.error}
              </bolt-field-error>
            ` : ''
           }
          </slot>
        </legend>

        ${this.showtoggle ? x`
          <div id="toggleButtons">
            <button
              @click="${this.checkAll}"
              id="btnSelectAll"
              type="button"
            >
             Select all
            </button>
            <span>|</span>
            <button
              @click="${this.checkNone}"
              id="btnSelectNone"
              disabled
              type="button"
            >
             Select none
            </button>
          </div>
        ` : ''}

        <div>
          <slot @slotchange=${this._onSlotchange}></slot>
        </div>
      </fieldset>
      <div hidden id="${attrArialabelledby}">${this._labelledbyText}</div>
    `;
  }

  /**
   * Lifecycle method called after the element has been updated.
   * Updates child checkboxes with parent state and manages toggle button states.
   *
   * @protected
   */
  updated() {
    this.checkboxes.forEach($node => {
      if (this.bounded) {
        $node.bounded = true;
      }
      $node.parentDisabled = this.disabled;
      $node.parentInvalid = this._isInvalid;
      $node.setAttribute('error', this.error ? '[CHECKBOX-GROUP-ERROR]' : '');
      $node.requestUpdate();
    });

    for (const $node of this.$helpSlot.assignedNodes()) {
      $node.disabledByContext = !!this.disabled;
    }

    // updates disabled state if this.disabled is changed programatically
    // or property removed by consumer
    this._updateToggleButtons();
  }

  /**
   * Lifecycle method called before the element is updated.
   * Processes property changes, particularly for aria-labelledby updates.
   *
   * @protected
   * @param {Map} changedProperties - The properties that have changed
   */
  update(changedProperties) {
    changedProperties.forEach( (oldValue, propName) => {
      let value = this[propName];

      if (propName === 'arialabelledby') {
        this._labelledbyText = value ? this.$lookupInnerTexts(value) : '';
      }
    });
    super.update(changedProperties);
  }

  /**
   * Selects all checkboxes in the group.
   *
   * @method
   * @public
   * @fires bolt-select-all - Custom event emitted when Select All button is clicked
   */
  checkAll() {
    this._toggleCheckboxes(true);
  }

  /**
   * Deselects all checkboxes in the group.
   *
   * @method
   * @public
   * @fires bolt-select-none - Custom event emitted when Select None button is clicked
   */
  checkNone() {
    this._toggleCheckboxes(false);
  }

  /**
   * Get array of immediate `<bolt-checkbox>` children configured in Light DOM.
   *
   * @public
   * @returns {BoltCheckboxElement[]} Array of child checkbox elements
   */
  get checkboxes() {
    // NodeList<BoltCheckboxElement>
    let children = this.querySelectorAll(':scope > bolt-checkbox');
    // Array<BoltCheckboxElement>
    return Array.from(children);
  }

  /**
   * 'slotchange' event handler for default <slot>
   * Updates toggle button states when slot content changes.
   *
   * @private
   */
  _onSlotchange() {
    this._updateToggleButtons();
  }

  /**
   * Event handler for 'change' events from nested elements
   * (i.e., `<bolt-checkbox>`). Updates toggle button states when checkboxes change.
   *
   * @private
   */
  _onChange() {
    this._updateToggleButtons();
  }

  /**
   * Toggles all checkboxes in the group to the specified state.
   * Emits appropriate events and updates toggle button states.
   *
   * @private
   * @param {Boolean} isChecked - The desired checked state for all checkboxes
   */
  _toggleCheckboxes(isChecked) {
    this.$emit(isChecked ? 'bolt-select-all' : 'bolt-select-none');

    this.checkboxes.forEach(el => {
      el._setChecked(isChecked);
    });
    this._updateToggleButtons();
  }

  /**
   * Updates the enabled/disabled state of the toggle buttons based on
   * the current state of all checkboxes in the group.
   *
   * @private
   */
  _updateToggleButtons() {
    if (!this.showtoggle) {
      return;
    }

    let $checkboxes = this.checkboxes;
    const _isChecked = (node) => node.checked === true;

    if (this.disabled) {
      // parent disabled
      this.$btnSelectAll.disabled = true;
      this.$btnSelectNone.disabled = true;
      return
    }

    if ($checkboxes.every(_isChecked)) {
      // fully checked
      this.$btnSelectAll.disabled = true;
      this.$btnSelectNone.disabled = false;
    } else if ($checkboxes.some(_isChecked)) {
      // partially checked
      this.$btnSelectAll.disabled = false;
      this.$btnSelectNone.disabled = false;
    } else {
      // nothing checked
      this.$btnSelectAll.disabled = false;
      this.$btnSelectNone.disabled = true;
    }
  }

  /**
   * Determines if element should appear invalid.
   * Considers both the invalid property and the presence of an error message.
   *
   * @private
   * @returns {Boolean} True if the element should appear invalid
   */
  get _isInvalid() {
    return Boolean(this.invalid || this.error  || this.querySelector('[slot="error"]'))
  }

  /**
   * Gets the "Select all" button element from the shadow DOM.
   *
   * @private
   * @returns {HTMLButtonElement|null} The select all button element or null if not found
   */
  get $btnSelectAll() {
    return this.shadowRoot.querySelector('#btnSelectAll');
  }

  /**
   * Gets the "Select none" button element from the shadow DOM.
   *
   * @private
   * @returns {HTMLButtonElement|null} The select none button element or null if not found
   */
  get $btnSelectNone() {
    return this.shadowRoot.querySelector('#btnSelectNone');
  }

  /**
   * Get default <slot> element from the shadow DOM.
   *
   * @private
   * @returns {HTMLSlotElement} The default slot element
   */
  get $slot() {
    return this.shadowRoot.querySelector('slot:not([name])');
  }

  /**
   * Get <slot name="help"> element.
   *
   * @private
   * @returns {HTMLSlotElement}
   */
  get $helpSlot() {
    return this.shadowRoot.querySelector('slot[name="help"]')
  }
}

/**
 * This module exports the checkbox component and its initialization function.
 * The checkbox component provides form input functionality for selecting
 * one or more options from a set, including individual checkboxes and
 * grouped checkbox collections with validation support.
 *
 * @module bolt-checkbox
 * @since 3.0.0
 *
 * @see {@link ./elements/bolt-checkbox|BoltCheckboxElement}
 * @see {@link ./elements/bolt-checkbox-control|BoltCheckboxControlElement}
 * @see {@link ./elements/bolt-checkbox-facade|BoltCheckboxFacadeElement}
 * @see {@link ./elements/bolt-checkbox-group|BoltCheckboxGroupElement}
 */



/**
 * Initializes the checkbox component by registering all related custom elements
 *
 * This function:
 * 1. Initializes dependencies (FieldError component)
 * 2. Registers the BoltCheckboxElement
 * 3. Registers the BoltCheckboxControlElement
 * 4. Registers the BoltCheckboxFacadeElement
 * 5. Registers the BoltCheckboxGroupElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$m() {
  // Upstream
  await initialize$w();

  // Local
  BoltCheckboxElement.$define();
  BoltCheckboxControlElement.$define();
  BoltCheckboxFacadeElement.$define();
  BoltCheckboxGroupElement.$define();
}

var index$l = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltCheckboxControlElement: BoltCheckboxControlElement,
  BoltCheckboxElement: BoltCheckboxElement,
  BoltCheckboxFacadeElement: BoltCheckboxFacadeElement,
  BoltCheckboxGroupElement: BoltCheckboxGroupElement,
  initialize: initialize$m
});

var CSS$p = "@layer layout {\n  :host {\n    display: inline-block;\n  }\n  :host([bolt-dismissed]) {\n    border: 0 !important;\n    outline: none !important;\n    box-shadow: none !important;\n    width: 1px !important;\n    height: 1px !important;\n    clip: rect(1px, 1px, 1px, 1px); /* old & current Browsers */\n    clip-path: inset(50%); /* browsers in the future */\n    white-space: nowrap;\n    margin: -1px !important;\n    overflow: hidden !important;\n    padding: 0 !important;\n    position: absolute !important;\n    z-index: -99999 !important;\n    color: transparent;\n    background-color: transparent;\n    text-shadow: none;\n  }\n  #inertfocus {\n    border: 0 !important;\n    outline: none !important;\n    box-shadow: none !important;\n    width: 1px !important;\n    height: 1px !important;\n    clip: rect(1px, 1px, 1px, 1px); /* old & current Browsers */\n    clip-path: inset(50%); /* browsers in the future */\n    white-space: nowrap;\n    margin: -1px !important;\n    overflow: hidden !important;\n    padding: 0 !important;\n    position: absolute !important;\n    z-index: -99999 !important;\n    color: transparent;\n    background-color: transparent;\n    text-shadow: none;\n  }\n  button {\n    display: inline-flex;\n    gap: 4px;\n    padding: var(--bolt-space-2xs) var(--bolt-space-sm) var(--bolt-space-2xs) var(--bolt-space-md);\n  }\n}\n@layer appearance {\n  :host {\n    --onBase: var(--bolt-context-onAccent);\n    --base: var(--bolt-context-accent);\n    --baseHigh: var(--bolt-context-accentHigh);\n    --baseHighest: var(--bolt-context-accentHighest);\n  }\n  #root {\n    font-family: var(--bolt-fontFamily-sansSerif);\n    font-weight: 400;\n    font-size: clamp(12px, 12px + 2px * (var(--bolt-typography-basis) - 360) / 840, 14px);\n    line-height: clamp(1.33, 1.33 + 0.1 * (var(--bolt-typography-basis) - 360) / 840, 1.43);\n    font-weight: 500;\n  }\n  button {\n    background: none;\n    border: 1px solid var(--base);\n    border-radius: 1lh;\n    color: var(--base);\n    cursor: pointer;\n    transition: 350ms;\n    font: inherit;\n  }\n  button:focus {\n    /* css-core:context.focus */\n    box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n    outline: none;\n    text-decoration-color: transparent;\n    background: var(--baseHigh);\n    border-color: rgba(0, 0, 0, 0);\n    color: var(--onBase);\n  }\n  button:enabled:hover {\n    background: var(--baseHigh);\n    border-color: rgba(0, 0, 0, 0);\n    color: var(--onBase);\n  }\n  button:enabled:active {\n    background: var(--baseHighest);\n    border-color: rgba(0, 0, 0, 0);\n    color: var(--onBase);\n  }\n}";

const DEFAULTS$7 = {
  color: '',
  label: '',
  datatestbutton: 'button',
  _boltDismissed: false,
};

/**
 * Chips are interactive components that help users filter the amount of information displayed on the page.
 *
 * The `<bolt-input-chip>` is primarily for user-selected categories and disappear when clicked.
 *
 * @class BoltInputChipElement
 * @element BoltInputChipElement
 * @extends {BoltElement}
 * @tagname bolt-input-chip
 * @since 6.5.0
 *
 * @property {String} color - (Optional) The color theme of the chip. By default, automatically adapts to contextual theme to ensure accessible contrast. See the {@link https://bolt.nwie.net/web/components/chip/|documentation page} for more information, along with color options.
 * @property {String} label - (Required) The label text for the input chip.
 * @property {String} datatestbutton - (Optional) Configures the `[data-test]` attribute on the underlying `<button>` element. Default is `"button"`.
 *
 * @event {CustomEvent} bolt-dismissed - Fires when user has dismissed the chip
 * @event {CustomEvent} bolt-removed - Fires when a dismissed chip is removed from the DOM
 * @event {CustomEvent} focus - Fires when the chip receives focus.
 * @event {CustomEvent} blur - Fires when the chip loses focus.
 *
 * @see https://bolt.nwie.net/web/components/chip
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 */
class BoltInputChipElement extends BoltElement {
  /**
   * The component's tag name, used for Custom Element registration
   * @readonly
   * @type {String}
   * @static
   */
  static is = 'bolt-input-chip'

  /**
   * Getter for component's CSS styles
   * @readonly
   * @type {CSSResult}
   * @static
   */
  static styles = CSS$p

  /**
   * LitElement properties/attributes definition.
   * Defines all the reactive properties that can be set as attributes or properties
   * @readonly
   * @type {Object}
   * @static
   */
  static properties = {
    color: {
      type: String,
      default: DEFAULTS$7.color,
      reflect: true,
    },
    datatestbutton: {
      type: String,
      default: DEFAULTS$7.datatestbutton,
    },
    label: {
      type: String,
      default: DEFAULTS$7.label,
    },

    /**
     * Updates the presence of [bolt-dismissed] for CSS+a11y purposes.
     * @private
     */
    _boltDismissed: {
      type: Boolean,
      default: DEFAULTS$7._boltDismissed,
      reflect: true,
      attribute: 'bolt-dismissed',
    },
  }

  /**
   * Lifecycle method called when the element is connected to the DOM
   * Sets up initial state and accessibility attributes
   * @override
   */
  $onConnect() {
    // instance should never be dismissed when it is attached to the DOM
    this._boltDismissed = false;

    this.setAttribute('bolt-focusable', '');
  }

  /**
   * Lifecycle method called when the element is disconnected from the DOM
   * Emits the bolt-removed event for cleanup purposes
   * @override
   */
  $onDisconnect() {
    this.$emit('bolt-removed');
  }

  /**
   * Renders the component's HTML template
   * Creates the shadow DOM structure with a dismissible button and inert focus target
   *
   * Note: The span#inertfocus MUST be empty on first render because the element is still
   * reachable via assistive technology "arrow" navigation before dismissal, which would
   * confuse the user if the span were pre-populated.
   *
   * @returns {TemplateResult} The component's rendered template
   * @override
   */
  render() {
    // NOTE: span#inertfocus MUST be empty on first render
    //   - This is because the element is still reachable via AT "arrow" navigation
    //     before dismissal, which would confuse the user, if the <span> were
    //     pre-populated.
    //     (see _dismiss() for more information about dismissal behavior.)
    return x`
      <div id="root">
        <button
          @click=${this._onButtonClick}
          aria-label="${l(this.label ? `remove ${this.label}` : null)}"
          data-test="${this.datatestbutton}"
        >
          <span>${this.label}</span>
          <bolt-icon
            decorative
            name="xmark-bold"
            size="md"
          ></bolt-icon>
        </button>
        <span
          @blur=${this._onDismissedBlur}
          id="inertfocus"
          tabindex="-1"
        ></span>
      </div>
    `
  }

  /**
   * Programmatically triggers a click on the dismiss button
   * If the chip is already dismissed, this method has no effect
   * @public
   */
  click() {
    if (this._boltDismissed) {
      return
    }
    this.$button.click();
  }

  /**
   * Programmatically focuses the dismiss button
   * If the chip is already dismissed, this method has no effect
   * @public
   */
  focus() {
    if (this._boltDismissed) {
      return
    }
    this.$button.focus();
  }

  /**
   * Performs a "soft" removal of the chip instance with accessibility considerations
   *
   * This method:
   * 1. Sets the dismissed state and emits the bolt-dismissed event
   * 2. Makes the button inert to prevent further interaction
   * 3. Updates the inert focus target with removal confirmation text
   * 4. Transfers focus to the inert element to maintain focus position
   * 5. The element will be completely removed when the inert focus target loses focus
   *
   * @async
   * @private
   */
  async _dismiss() {
    if (this._boltDismissed) {
      return
    }
    this._boltDismissed = true;
    this.$emit('bolt-dismissed');

    // render button inert
    // (safari will reset focus order)
    this.$button.inert = true;

    // Update inert focus target content
    //
    // We only populate the content when the chip has dismissed. Otherwise, it
    // would be reachable and announced if navigating via AT "arrow" navigation
    // before dismissal.
    if (this.label) {
      this.$inertFocus.innerText = `${this.label} removed`;
    }

    // Wait for [bolt-dismissed] to be added by Lit reactivity before we adjust focus
    await this.updateComplete;

    // This will ensure the host document focus position remains at the chip's
    // location.
    //
    // If this is NOT done, some browsers will reset the focus position to the
    // top of the page, because <button> may or may not retain focus position
    // when it becomes inert.
    //
    // NOTE: [aria-hidden] elements cannot be programmatically focused in some
    //       browsers
    this.$inertFocus.focus();
  }

  /**
   * Handles blur events on the inert focus target
   * The "soft-removed" instance remains in the DOM until the inert focus element loses focus,
   * at which point the element is completely removed from the DOM
   *
   * @param {FocusEvent} evt - The blur event object
   * @private
   */
  _onDismissedBlur(evt) {
    // The "soft-removed" instance remains in the DOM
    // until span#inertfocus loses focus.
    this.remove();
  }

  /**
   * Handles click events on the dismiss button
   * Initiates the dismissal process when the button is clicked
   *
   * @param {MouseEvent} evt - The click event object
   * @private
   */
  _onButtonClick(evt) {
    this._dismiss();
  }

  /* ----- ShadowDOM element getters ----- */

  /**
   * Gets the dismiss button element from the shadow DOM
   * @returns {HTMLButtonElement|null} The button element, or null if not found
   * @private
   */
  get $button() {
    return this.shadowRoot?.querySelector('button')
  }

  /**
   * Gets the inert focus target element from the shadow DOM
   * This element is focused when the dismiss button goes inert to maintain focus position
   *
   * @returns {HTMLSpanElement|null} The inert focus element, or null if not found
   * @private
   */
  get $inertFocus() {
    return this.shadowRoot?.querySelector('#inertfocus')
  }
}

var CSS$o = "@layer layout {\n  :host {\n    display: inline-block;\n  }\n  #root {\n    display: grid;\n  }\n  #root > * {\n    grid-area: 1/1;\n  }\n  #root label {\n    display: flex;\n    gap: 0 4px;\n    padding: var(--bolt-space-2xs) var(--bolt-space-md);\n  }\n  #root input {\n    clip-path: inset(50%);\n    z-index: -9999;\n  }\n  #root input:not(:checked) + label bolt-icon {\n    display: none;\n  }\n  #root input:checked + label {\n    padding-left: var(--bolt-space-sm);\n  }\n}\n@layer appearance {\n  :host {\n    --onBase: var(--bolt-context-onAccent);\n    --base: var(--bolt-context-accent);\n    --baseHigh: var(--bolt-context-accentHigh);\n    --baseHighest: var(--bolt-context-accentHighest);\n  }\n  #root {\n    font-family: var(--bolt-fontFamily-sansSerif);\n    font-weight: 400;\n    font-size: clamp(12px, 12px + 2px * (var(--bolt-typography-basis) - 360) / 840, 14px);\n    line-height: clamp(1.33, 1.33 + 0.1 * (var(--bolt-typography-basis) - 360) / 840, 1.43);\n    font-weight: 500;\n  }\n  #root label {\n    background: none;\n    border: 1px solid var(--base);\n    border-radius: 1lh;\n    color: var(--base);\n    cursor: pointer;\n    transition: 350ms;\n    transition-property: color, border-color, background-color;\n  }\n  #root input:focus + label {\n    /* css-core:context.focus */\n    box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n    outline: none;\n    text-decoration-color: transparent;\n  }\n  #root input:enabled:checked + label {\n    background: var(--base);\n    border-color: rgba(0, 0, 0, 0);\n    color: var(--onBase);\n  }\n  #root input:enabled:hover + label {\n    background: var(--baseHigh);\n    border-color: rgba(0, 0, 0, 0);\n    color: var(--onBase);\n  }\n  #root input:enabled:active + label {\n    background: var(--baseHighest);\n    border-color: rgba(0, 0, 0, 0);\n    color: var(--onBase);\n  }\n}";

const DEFAULTS$6 = {
  checked: false,
  color: '',
  datatestinput: 'input',
  label: '',
};

/**
 * Chips are interactive components that help users filter the amount of information displayed on the page.
 *
 * The `<bolt-toggle-chip>` is for pre-defined categories and toggle between checked and unchecked when clicked.
 *
 * @class BoltToggleChipElement
 * @element BoltToggleChipElement
 * @extends {BoltElement}
 * @tagname bolt-toggle-chip
 * @since 6.5.0
 *
 * @property {String} arialabel - (Optional) Overrides the accessible label of the underlying `<input>`.
 * @property {Boolean} checked - (Optional) If present, the control is checked.
 * @property {String} color - (Optional) The color theme of the chip. By default, automatically adapts to contextual theme to ensure accessible contrast. See the {@link https://bolt.nwie.net/web/components/chip/|documentation page} for more information, along with color options.
 * @property {String} datatestinput - (Optional) Configures the `[data-test]` attribute on the underlying `<input>` element. Default is `"input"`.
 * @property {String} label - (Required) The text content displayed within the chip.
 *
 * @event {CustomEvent} change - Fires when toggled.
 * @event {CustomEvent} input - Fires when toggled.
 * @event {CustomEvent} focus - Fires when the chip receives focus.
 * @event {CustomEvent} blur - Fires when the chip loses focus.
 *
 * @see https://bolt.nwie.net/web/components/chip
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 */
class BoltToggleChipElement extends BoltElement {
  /**
   * The component's tag name, used for Custom Element registration
   * @readonly
   * @type {String}
   * @static
   */
  static is = 'bolt-toggle-chip'

  /**
   * Getter for component's CSS styles
   * @readonly
   * @type {CSSResult}
   * @static
   */
  static styles = CSS$o

  /**
   * LitElement properties/attributes definition.
   * Defines all the reactive properties that can be set as attributes or properties
   * @readonly
   * @type {Object}
   * @static
   */
  static properties = {
    arialabel: { type: String },
    checked: {
      type: Boolean,
      default: false,
      reflect: true,
    },
    color: {
      type: String,
      default: DEFAULTS$6.color,
      reflect: true,
    },
    datatestinput: {
      type: String,
      default: DEFAULTS$6.datatestinput,
    },
    label: {
      type: String,
      default: '',
    },
  }

  /**
   * Lifecycle method called when properties change
   * Updates the underlying checkbox state when the checked property changes
   *
   * @param {Map} props - Map of changed properties and their old values
   * @override
   */
  updated(props) {
    if (props.has('checked')) {
      // update <input> state based on prop config
      this.$input.checked = this.checked;
    }
  }

  /**
   * Renders the component's HTML template
   * Creates the shadow DOM structure with a checkbox input and visual label
   *
   * @returns {TemplateResult} The component's rendered template
   * @override
   */
  render() {
    return x`
      <div id="root">
        <input
          ?checked=${this.checked}
          @change=${this._onChange}
          aria-label="${l(this.arialabel || null)}"
          data-test="${this.datatestinput}"
          id="chk"
          type="checkbox"
        />
        <label
          aria-hidden="${l(this.arialabel ? 'true' : null)}"
          for="chk"
        >
          <bolt-icon
            aria-hidden="true"
            name="checkmark-bold"
            size="md"
          ></bolt-icon>
          <span id="label">${this.label}</span>
        </label>
      </div>
    `
  }

  /**
   * Lifecycle method called when the element is connected to the DOM
   * Sets up accessibility attributes for keyboard navigation
   * @override
   */
  $onConnect() {
    this.setAttribute('bolt-focusable', '');
  }


  /* ---------------------------------------- *\
   * Public members (props + methods)
  \* ---------------------------------------- */

  /**
   * Programmatically triggers a click on the underlying checkbox input
   * Safely handles cases where the shadow DOM may not be fully initialized
   * @public
   */
  click() {
    /*
     * There's no guarantee that the shadowRoot exists or been populated
     * when this method is called, so we need to make sure we don't
     * attempt to click a nonexistent element.
     */
    this.$input?.click();
  }

  /**
   * Programmatically focuses the underlying checkbox input
   * Safely handles cases where the shadow DOM may not be fully initialized
   * @public
   */
  focus() {
    /*
     * There's no guarantee that the shadowRoot exists or been populated
     * when this method is called, so we need to make sure we don't
     * attempt to focus a nonexistent element.
     */
    this.$input?.focus();
  }


  /* ---------------------------------------- *\
   * Private members (props + methods)
  \* ---------------------------------------- */


  /**
   * Handles change events from the underlying checkbox input
   * Updates the component's checked property and relays the event for framework compatibility
   *
   * @param {Event} evt - The change event object from the checkbox input
   * @private
   */
  _onChange(evt) {
    // update prop config based on <input> state
    this.checked = Boolean(this.$input?.checked);

    // relay 'change' event for ng-directives compatibility
    this.$relayEvent(evt);
  }


  /* ----- ShadowDOM element getters ----- */

  /**
   * Gets the checkbox input element from the shadow DOM
   * @returns {HTMLInputElement|null} The input element, or null if not found
   * @private
   */
  get $input() {
    return this.shadowRoot?.querySelector('input')
  }
}

/**
 * This module exports the chip components and their initialization function.
 * The chip components consist of:
 * - `<bolt-input-chip>`: Interactive chip for user input and selection
 * - `<bolt-toggle-chip>`: Toggleable chip for filtering or categorization
 *
 * @module bolt-chip
 * @since 6.5.0
 *
 * @see {@link ./elements/bolt-input-chip|BoltInputChipElement}
 * @see {@link ./elements/bolt-toggle-chip|BoltToggleChipElement}
 */


/**
 * Initializes the chip components by registering them as custom elements
 *
 * This function:
 * 1. Initializes dependencies (Icon component)
 * 2. Registers the BoltInputChipElement
 * 3. Registers the BoltToggleChipElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$l() {
  // Upstream
  await initialize$y();

  // Local
  BoltInputChipElement.$define();
  BoltToggleChipElement.$define();
}

var index$k = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltInputChipElement: BoltInputChipElement,
  BoltToggleChipElement: BoltToggleChipElement,
  initialize: initialize$l
});

var CSS$n = ":host {\n  display: inline;\n}\n\n::slotted(img) {\n  max-width: 100%;\n  display: block;\n}\n\n:host(:not([iconsize])) bolt-icon {\n  height: clamp(16px, 16px + 4px * (var(--bolt-viewport-width) - 360) / 840, 20px);\n  width: clamp(16px, 16px + 4px * (var(--bolt-viewport-width) - 360) / 840, 20px);\n}\n\n:host([iconsize=sm]) .bolt-contextual-help-wc--label {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.33;\n  margin-left: 0px;\n}\n\n.bolt-contextual-help-wc {\n  display: inline-block;\n  line-height: 1;\n  position: relative;\n}\n.bolt-contextual-help-wc--inline {\n  display: inline;\n}\n.bolt-contextual-help-wc--heading {\n  font-weight: 500;\n  display: block;\n}\n.bolt-contextual-help-wc--trigger {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.33;\n  cursor: pointer;\n  color: var(--bolt-context-link);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: none;\n  padding: 0;\n  vertical-align: text-bottom;\n}\n.bolt-contextual-help-wc--trigger #icon-wrapper {\n  display: flex;\n  justify-content: center;\n  width: 24px;\n}\n.bolt-contextual-help-wc--trigger:enabled:focus, .bolt-contextual-help-wc--trigger:enabled:focus:hover {\n  /* css-core:context.focus */\n  box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n  outline: none;\n  text-decoration-color: transparent;\n  transition: 350ms;\n}\n.bolt-contextual-help-wc--trigger:disabled {\n  cursor: not-allowed;\n}\n.bolt-contextual-help-wc--trigger:disabled:not(.disabled-by-context) {\n  opacity: 0.5;\n}\n.bolt-contextual-help-wc--label {\n  margin-left: 4px;\n  border-bottom: 1px dashed currentColor;\n}\n.bolt-contextual-help-wc a.bolt-contextual-help-wc--label {\n  border-bottom-style: dashed;\n}\n.bolt-contextual-help-wc--arrow-down {\n  position: absolute;\n  display: initial;\n  left: 19px;\n  top: -9px;\n  border: 1px solid var(--bolt-theme-primary);\n  border-right-width: 0;\n  border-bottom-width: 0;\n  background: var(--bolt-theme-primaryContainer);\n  transform-origin: top left;\n  transform: rotate(45deg);\n  height: 12px;\n  width: 12px;\n}\n.bolt-contextual-help-wc--content {\n  /* css-core:context.reset */\n  --bolt-context-surface: var(--bolt-theme-surface);\n  --bolt-context-onSurface: var(--bolt-theme-onSurface);\n  --bolt-context-onSurfaceVariant: var(--bolt-theme-onSurfaceVariant);\n  --bolt-context-outline: var(--bolt-theme-outline);\n  --bolt-context-outlineVariant: var(--bolt-theme-outlineVariant);\n  --bolt-context-focus: var(--bolt-theme-focus);\n  --bolt-context-link: var(--bolt-theme-link);\n  --bolt-context-accent: var(--bolt-theme-accent);\n  --bolt-context-accentHigh: var(--bolt-theme-accentHigh);\n  --bolt-context-accentHighest: var(--bolt-theme-accentHighest);\n  --bolt-context-onAccent: var(--bolt-theme-onAccent);\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(12px, 12px + 2px * (var(--bolt-typography-basis) - 360) / 840, 14px);\n  line-height: clamp(1.33, 1.33 + 0.1 * (var(--bolt-typography-basis) - 360) / 840, 1.43);\n  outline: none;\n}\n.bolt-contextual-help-wc--overlay {\n  position: absolute;\n  z-index: 50;\n  cursor: default;\n  left: -8px;\n  margin-top: 12px;\n  background: var(--bolt-theme-primaryContainer);\n  width: 45vw;\n  border: 1px solid var(--bolt-theme-primary);\n  max-width: 384px;\n  box-shadow: 0 4px 10px -4px var(--bolt-theme-shadow);\n  text-align: left;\n}\n.bolt-contextual-help-wc--overlay.open-left {\n  right: calc(100% - 32px);\n  left: auto;\n}\n.bolt-contextual-help-wc--overlay.open-left .bolt-contextual-help-wc--arrow-down {\n  transform-origin: top right;\n  transform: rotate(-45deg);\n  right: 19px;\n  left: auto;\n  border-left-width: 0;\n  border-right-width: 1px;\n}\n.bolt-contextual-help-wc--overlay .bolt-contextual-help-wc--content {\n  padding: var(--bolt-space-sm);\n  color: var(--bolt-theme-onPrimaryContainer);\n}\n.bolt-contextual-help-wc--overlay.help-open {\n  opacity: 1;\n  outline: none;\n  visibility: visible;\n  transform: scale(1, 1);\n  transition: opacity 350ms linear;\n}\n.bolt-contextual-help-wc--overlay.help-closed {\n  opacity: 0;\n  visibility: hidden;\n  overflow: hidden;\n  transition: visibility 0s 350ms, opacity 350ms linear, width 0s 350ms, transform 0s 350ms;\n  transform: scale(0, 0);\n  width: 0;\n}\n.bolt-contextual-help-wc--icon-open {\n  display: none;\n}\n.bolt-contextual-help-wc--icon-closed {\n  display: block;\n}\n.bolt-contextual-help-wc--open .bolt-contextual-help-wc--icon-closed {\n  display: none;\n}\n.bolt-contextual-help-wc--open .bolt-contextual-help-wc--icon-open {\n  display: block;\n}\n.bolt-contextual-help-wc--push {\n  overflow: hidden;\n  visibility: hidden;\n  height: 0;\n  opacity: 0;\n  transition: opacity 350ms linear;\n  margin-top: 8px;\n}\n.bolt-contextual-help-wc--push .bolt-contextual-help-wc--arrow-down {\n  display: none;\n}\n.bolt-contextual-help-wc--push .bolt-contextual-help-wc--content {\n  border-left: 1px solid var(--bolt-context-accent);\n  padding: 0 var(--bolt-space-sm);\n}\n.bolt-contextual-help-wc--push.help-open {\n  visibility: visible;\n  height: auto;\n  opacity: 1;\n}\n.bolt-contextual-help-wc--screenreader-close-button, .bolt-contextual-help-wc--screenreader-text {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}";

/**
 * Contextual help provides users with information about the purpose and workings of a screen component. It can can be used independently or embedded within certain components.
 *
 * @class BoltContextualHelpElement
 * @element BoltContextualHelpElement
 * @extends {BoltElement}
 * @tagname bolt-contextual-help
 * @since 3.0.0
 *
 * @property {String} arialabel - (Optional) Sets the `aria-label` attribute of the underlying `<button>` toggle.
 * @property {String} arialabelledby - (Optional) Sets the `aria-labelledby` attribute of the underlying `<button>` toggle.
 * @property {Boolean} disabled - (Optional) When present, semantically disables the element, preventing users from viewing help content.
 * @property {String} heading - (Optional) The bolded heading at the top of the contextual help content.
 * @property {String} label - (Optional) The label that is shown next to the icon, either of which may be clicked to toggle the open/closed state. Should only be used with standalone contextual help.
 * @property {String} type - (Optional) Determines the display behavior of the help content.
 * - `overlay` - Causes the contextual help content to appear in an overlay dialog at all screen sizes. Default for standalone use.
 * - `push`- Causes the contextual help content to appear inline below an input's label text at smaller screen sizes. Must be manually configured when using HTML versions of Bolt components. Default for slotted use.
 * Possible values: [`overlay`, `push`,]
 *
 * @event {CustomEvent} bolt-contextual-help-opened - Emitted when icon is clicked.
 *
 * @slot default
 * @slot help - When used in this slot context, the component automatically switches to `push` display type.
 *
 * @see https://bolt.nwie.net/web/components/contextual-help
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 */
class BoltContextualHelpElement extends BoltElement {
  /**
   * The component's tag name, used for Custom Element registration
   * @readonly
   * @type {String}
   * @static
   */
  static is = 'bolt-contextual-help'

  /**
   * Getter for component's CSS styles
   * @readonly
   * @type {CSSResult}
   * @static
   */
  static styles = CSS$n

  /**
   * LitElement properties/attributes definition.
   * Defines all the reactive properties that can be set as attributes or properties
   * @readonly
   * @type {Object}
   * @static
   */
  static properties = {
    active: { // FIXME: property should be private/readonly
      type: Boolean,
      reflect: true,
      default: false,
    },
    arialabel: { type: String },
    arialabelledby: { type: String },
    // authored config (public)
    disabled: {
      type: Boolean,
      reflect: true,
      default: false,
    },
    // contextual config (PRIVATE)
    disabledByContext: {
      type: Boolean,
      default: false,
    },
    display: { type: String, reflect: true },
    heading: { type: String },
    helpId: { type: String, attribute: false },
    iconsize: { type: String },
    label: { type: String },
    type: { type: String },
  }

  /**
   * Creates an instance of BoltContextualHelpElement
   * Initialize public and private properties with default values
   *
   * @constructor
   */
  constructor() {
    super();
    // Initialize public properties
    this.arialabel = '';
    this.arialabelledby = '';
    this.type = this._isSlottedHelp ? 'push' : 'overlay';
    this.label = '';
    this.heading = '';
    this.iconsize = 'md';

    // Initialize private properties
    /** @private */
    this.generatedId = this.generateId();
    /** @private */
    this.leftAlign = false;
    /** @private */
    this.helpId = '' + Math.ceil(Math.random() * 100000);
    /** @private */
    this._labelledbyText = '';

    // Bind event handlers
    /** @private */
    this._handleWindowResize = this._handleWindowResize.bind(this);
    /** @private */
    this._handleHelpOpened = this._handleHelpOpened.bind(this);
  }

  /**
   * Lifecycle method called when the element is connected to the DOM
   * Sets up event listeners and accessibility attributes
   * @override
   */
  $onConnect() {
    this.setAttribute('bolt-focusable', '');
    window.addEventListener('resize', this._handleWindowResize);
    window.addEventListener('bolt-contextual-help-opened', this._handleHelpOpened);
  }

  /**
   * Lifecycle method called when the element is disconnected from the DOM
   * Cleans up event listeners to prevent memory leaks
   * @override
   */
  $onDisconnect() {
    window.removeEventListener('resize', this._handleWindowResize);
    window.removeEventListener('bolt-contextual-help-opened', this._handleHelpOpened);
  }

  /**
   * Lifecycle method called after the component updates
   * Handles disabling logic when disabled state changes
   *
   * @param {Map} changedProperties - Map of changed properties and their old values
   * @override
   */
  updated(changedProperties) {
    if (
      changedProperties.has('disabled') ||
      changedProperties.has('disabledByContext')
    ) {
      if (this._isDisabled) {
        // ensure that it's deactivated after disabling
        this.active = false;
      }
    }
  }

  /**
   * Generates a unique ID for component elements
   * @param {String} [type] - Optional type prefix for the ID
   * @returns {String} A unique ID string for component identification
   * @private
   */
  generateId(type) {
    return 'bolt-contextual-help-wc--' + (type ? (type + '--') : '') + Math.floor(Math.random() * 10000000);
  }

  /**
   * Lifecycle method called when properties change
   * Handles aria-labelledby text updates for accessibility
   *
   * @param {Map} changedProperties - Map of changed properties and their old values
   * @override
   */
  update(changedProperties) {
    changedProperties.forEach( (oldValue, propName) => {
      let value = this[propName];

      if (propName === 'arialabelledby') {
        this._labelledbyText = value ? this.$lookupInnerTexts(value) : '';
      }
    });
    super.update(changedProperties);
  }

  /**
   * Handles window resize events to update positioning and display mode
   * @param {Event} e - The resize event object
   * @private
   */
  _handleWindowResize(e) {
    this.setDirection();
    this.checkScreenSize();
    this.requestUpdate();
  }

  /**
   * Handles global contextual help opened events to ensure only one help is open at a time
   * @param {CustomEvent} e - The bolt-contextual-help-opened event
   * @private
   */
  _handleHelpOpened(e) {
    if (this.active && e.detail && e.detail.helpId !== this.helpId) {
      this.active = false;
    }
  }

  /**
   * Determines the appropriate display mode based on screen size and component type
   * Updates the display property accordingly
   * @private
   */
  checkScreenSize() {
    if (this.type == 'expand') {
      this.display = 'push';
    } else if (window.innerWidth > 576) {
      this.display = 'overlay';
    } else {
      this.display = this.type;
    }
  }

  /**
   * Handles keyboard navigation and interactions
   * Supports Enter, Space, and Arrow keys for accessibility
   *
   * @param {KeyboardEvent} e - The keyboard event object
   * @private
   */
  handleKeydown(e) {
    let isTargetLink = e.target.tagName.toLowerCase() === 'a';

    if (isTargetLink && (e.key === 'Enter' || e.key === ' ')) {
      // if the target is a link allow the enter or spacebar key to follow the link
      e.preventDefault();
      e.target.click();
    } else if (e.key === 'Enter' || e.key === ' '){ // enter / spacebar
      e.preventDefault();
      if (this.active) {
        this.deactivate();
      } else {
        this.activate();
      }
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') { // up, down arrows
      e.preventDefault();
      if (this.active) {
        this.shadowRoot.querySelector('.bolt-contextual-help-wc--content').focus();
      } else {
        this.shadowRoot.querySelector('.bolt-contextual-help-wc--trigger').focus();
      }
    }
  }

  /**
   * Handles blur events on the trigger button
   * Sets up click-outside-to-close behavior for overlay mode
   *
   * @param {FocusEvent} e - The blur event object
   * @private
   */
  handleBlur(e) {
    // FIXME: [eventhandling] move listener to its own method
    // FIXME: [eventhandling] bind listener to `this` in constructor
    var handler = function() {
      if (this.display == 'overlay') {
        this.active = false;
      }
      document.removeEventListener('click', handler);
    }.bind(this);
    document.addEventListener('click', handler);
  }

  /**
   * Handles mouse and touch interactions on the trigger button
   * @param {MouseEvent|TouchEvent} e - The click/touch event object
   * @private
   */
  handleClick(e) {
    e.preventDefault();
    this.handleTriggerClick();
  }

  /**
   * Handles the core trigger click logic
   * Toggles the help state and manages activation/deactivation
   *
   * @param {Event} [e] - Optional event object
   * @private
   */
  handleTriggerClick(e) {
    if (e) {
      e.stopPropagation();
    }

    if (this.active) {
      // deactivate without focusing
      this.active = false;
    } else {
      this.activate();
    }
  }

  /**
   * Activates the contextual help, showing the help content
   * Emits a global event to ensure only one help is active at a time
   * @public
   */
  activate() {
    if (this._isDisabled) {
      return
    }

    let helpOpenedEvent = new CustomEvent('bolt-contextual-help-opened', { detail : { helpId : this.helpId } });
    window.dispatchEvent(helpOpenedEvent);
    this.setDirection();
    this.active = true;
    setTimeout(() => {
      this.shadowRoot.querySelector('.bolt-contextual-help-wc--content').focus();
    }, 500);
  }

  /**
   * Deactivates the contextual help, hiding the help content
   * Returns focus to the trigger button
   * @public
   */
  deactivate() {
    var $buttonTooltip = this.shadowRoot.querySelector('.bolt-contextual-help-wc--trigger');

    $buttonTooltip.focus();

    setTimeout(() => {
      this.active = false;
    }, 100);
  }

  /**
   * Sets the alignment direction for overlay positioning
   * Determines whether the overlay should align left or right based on available space
   * @private
   */
  setDirection() {
    if (this.display == 'overlay') {
      var rect = this.shadowRoot.querySelector('.bolt-contextual-help-wc--trigger').getBoundingClientRect();

      if (rect.left > window.innerWidth - rect.left) {
        this.leftAlign = true;
      } else {
        this.leftAlign = false;
      }
    }
  }

  /**
   * Handles tab navigation at the top of the help content
   * Implements focus trapping for accessibility
   *
   * @param {KeyboardEvent} e - The keyboard event object
   * @private
   */
  loopTop(e) {
    if (e.shiftKey && e.key === 'Tab') { // shift + tab , tab
      e.preventDefault();
      this.shadowRoot.querySelector('.bolt-contextual-help-wc--screenreader-close-button').focus();
    }
  }

  /**
   * Handles tab navigation at the bottom of the help content
   * Implements focus trapping for accessibility
   *
   * @param {KeyboardEvent} e - The keyboard event object
   * @private
   */
  loopBottom(e) {
    if (!(e.shiftKey) && e.key === 'Tab') { //  tab
      e.preventDefault();
      this.shadowRoot.querySelector('.bolt-contextual-help-wc--content').focus();
    }
  }

  /**
   * Programmatically focuses the trigger button
   * Safely handles cases where the shadow DOM may not be fully initialized
   * @public
   */
  focus() {
    /*
     * There's no guarantee that the shadowRoot exists or been populated
     * when this method is called, so we need to make sure we don't
     * attempt to focus a nonexistent element.
     */
    let btn = this.shadowRoot?.querySelector('.bolt-contextual-help-wc--trigger');
    btn?.focus();
  }

  /**
   * Renders the component's HTML template
   * Creates the shadow DOM structure with trigger button and help content
   *
   * @returns {TemplateResult} The component's rendered template
   * @override
   */
  render() {
    this.checkScreenSize();
    let attrArialabelledby = `labelledby-${this.generatedId}`;

    return x `
      <div
        class="
          bolt-contextual-help-wc
          bolt-contextual-help-wc--${this.iconsize}-icon
          ${this.display==="push" ? 'bolt-contextual-help-wc--inline' : ''}
        "
      >
        <button type="button"
          class="
            bolt-contextual-help-wc--trigger
            bolt-contextual-help-wc--trigger-${this.display}
            ${this.active ? 'bolt-contextual-help-wc--open' : ''}
            ${this.disabledByContext ? 'disabled-by-context' : ''}
          "
          @mousedown="${this.handleClick}"
          @touchstart="${this.handleClick}"
          @keydown="${this.handleKeydown}"
          @blur="${this.handleBlur}"
          aria-expanded="${this.active ? 'true' : 'false'}"
          aria-label="Help tooltip ${this.label} ${this.arialabel}"
          aria-labelledby="${l(this._labelledbyText ? attrArialabelledby : undefined)}"
          ?disabled="${this._isDisabled}"
        >
          ${this.active
            ? x`
              <div id="icon-wrapper">
                <bolt-icon
                  size="${this.iconsize}"
                  name="xmark-circle"
                  class="bolt-contextual-help-wc--icon-open"
                  decorative
                ></bolt-icon>
              </div>
              ${this.display != 'push' && this.label
                ? x `<span class="bolt-contextual-help-wc--label">${this.label}</span>`
                : ''
              }
            `
            : x`
              <div id="icon-wrapper">
                <bolt-icon
                  size="${this.iconsize}"
                  name="question-circle"
                  class="bolt-contextual-help-wc--icon-closed"
                  decorative
                ></bolt-icon>
              </div>
              ${this.display != 'push' && this.label
                ? x `<span class="bolt-contextual-help-wc--label">${this.label}</span>`
                : ''
              }
            `
          }
        </button>
        <div
          class="
            bolt-contextual-help-wc--${this.display}
            ${this.active ? 'help-open' : 'help-closed'}
            ${this.leftAlign && this.display ==='overlay' ? 'open-left' : ''}
          "
          @keydown="${this.handleKeydown}"
        >
          <div class="bolt-contextual-help-wc--arrow-down"></div>
          <div
            class="bolt-contextual-help-wc--content"
            tabindex="0"
            @click="${this.deactivate}"
            @keydown="${this.loopTop}"
            @blur="${this.handleBlur}"
          >
            <span class="bolt-contextual-help-wc--heading">${this.heading}</span>
            <div class="bolt-contextual-help-wc--body"><slot></slot></div>
            <span class="bolt-contextual-help-wc--screenreader-text">Press enter to close tooltip. </span>
          </div>
          <button
            type="button"
            class="bolt-contextual-help-wc--screenreader-close-button"
            @keydown="${this.loopBottom}"
          >Close tooltip</button>
        </div>
      </div>
      <div hidden id="${attrArialabelledby}">${this._labelledbyText}</div>
    `;
  }

  /**
   * Gets whether the component is disabled by either direct configuration or context
   * @returns {Boolean} True if the component is disabled
   * @readonly
   * @private
   */
  get _isDisabled() {
    return Boolean(this.disabled || this.disabledByContext)
  }

  /**
   * Gets whether the component is being used in a help slot context
   * @returns {Boolean} True if the component is in a help slot
   * @readonly
   * @private
   */
  get _isSlottedHelp() {
    return Boolean(this.slot === "help")
  }
}

/**
 * This module exports the contextual help component and its initialization function.
 * Contextual help provides users with information about the purpose and workings of a screen component.
 *
 * @module bolt-contextual-help
 * @since 3.0.0
 *
 * @see {@link ./elements/bolt-contextual-help|BoltContextualHelpElement}
 */


/**
 * Initializes the contextual help component by registering it as a custom element
 *
 * This function:
 * 1. Initializes dependencies (Icon component)
 * 2. Registers the BoltContextualHelpElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$k() {
  // Upstream
  await initialize$y();

  // Local
  BoltContextualHelpElement.$define();
}

var index$j = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltContextualHelpElement: BoltContextualHelpElement,
  initialize: initialize$k
});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var flatpickr_min = {exports: {}};

/* flatpickr v4.6.13,, @license MIT */

(function (module, exports) {
	!function(e,n){module.exports=n();}(commonjsGlobal,(function(){var e=function(){return (e=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};function n(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var a=Array(e),i=0;for(n=0;n<t;n++)for(var o=arguments[n],r=0,l=o.length;r<l;r++,i++)a[i]=o[r];return a}var t=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],a={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:"object"==typeof window&&-1===window.navigator.userAgent.indexOf("MSIE"),ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(e){return "undefined"!=typeof console&&console.warn(e)},getWeek:function(e){var n=new Date(e.getTime());n.setHours(0,0,0,0),n.setDate(n.getDate()+3-(n.getDay()+6)%7);var t=new Date(n.getFullYear(),0,4);return 1+Math.round(((n.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},i={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(e){var n=e%100;if(n>3&&n<21)return "th";switch(n%10){case 1:return "st";case 2:return "nd";case 3:return "rd";default:return "th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},o=function(e,n){return void 0===n&&(n=2),("000"+e).slice(-1*n)},r=function(e){return !0===e?1:0};function l(e,n){var t;return function(){var a=this,i=arguments;clearTimeout(t),t=setTimeout((function(){return e.apply(a,i)}),n);}}var c=function(e){return e instanceof Array?e:[e]};function s(e,n,t){if(!0===t)return e.classList.add(n);e.classList.remove(n);}function d(e,n,t){var a=window.document.createElement(e);return n=n||"",t=t||"",a.className=n,void 0!==t&&(a.textContent=t),a}function u(e){for(;e.firstChild;)e.removeChild(e.firstChild);}function f(e,n){return n(e)?e:e.parentNode?f(e.parentNode,n):void 0}function m(e,n){var t=d("div","numInputWrapper"),a=d("input","numInput "+e),i=d("span","arrowUp"),o=d("span","arrowDown");if(-1===navigator.userAgent.indexOf("MSIE 9.0")?a.type="number":(a.type="text",a.pattern="\\d*"),void 0!==n)for(var r in n)a.setAttribute(r,n[r]);return t.appendChild(a),t.appendChild(i),t.appendChild(o),t}function g(e){try{return "function"==typeof e.composedPath?e.composedPath()[0]:e.target}catch(n){return e.target}}var p=function(){},h=function(e,n,t){return t.months[n?"shorthand":"longhand"][e]},v={D:p,F:function(e,n,t){e.setMonth(t.months.longhand.indexOf(n));},G:function(e,n){e.setHours((e.getHours()>=12?12:0)+parseFloat(n));},H:function(e,n){e.setHours(parseFloat(n));},J:function(e,n){e.setDate(parseFloat(n));},K:function(e,n,t){e.setHours(e.getHours()%12+12*r(new RegExp(t.amPM[1],"i").test(n)));},M:function(e,n,t){e.setMonth(t.months.shorthand.indexOf(n));},S:function(e,n){e.setSeconds(parseFloat(n));},U:function(e,n){return new Date(1e3*parseFloat(n))},W:function(e,n,t){var a=parseInt(n),i=new Date(e.getFullYear(),0,2+7*(a-1),0,0,0,0);return i.setDate(i.getDate()-i.getDay()+t.firstDayOfWeek),i},Y:function(e,n){e.setFullYear(parseFloat(n));},Z:function(e,n){return new Date(n)},d:function(e,n){e.setDate(parseFloat(n));},h:function(e,n){e.setHours((e.getHours()>=12?12:0)+parseFloat(n));},i:function(e,n){e.setMinutes(parseFloat(n));},j:function(e,n){e.setDate(parseFloat(n));},l:p,m:function(e,n){e.setMonth(parseFloat(n)-1);},n:function(e,n){e.setMonth(parseFloat(n)-1);},s:function(e,n){e.setSeconds(parseFloat(n));},u:function(e,n){return new Date(parseFloat(n))},w:p,y:function(e,n){e.setFullYear(2e3+parseFloat(n));}},D={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},w={Z:function(e){return e.toISOString()},D:function(e,n,t){return n.weekdays.shorthand[w.w(e,n,t)]},F:function(e,n,t){return h(w.n(e,n,t)-1,!1,n)},G:function(e,n,t){return o(w.h(e,n,t))},H:function(e){return o(e.getHours())},J:function(e,n){return void 0!==n.ordinal?e.getDate()+n.ordinal(e.getDate()):e.getDate()},K:function(e,n){return n.amPM[r(e.getHours()>11)]},M:function(e,n){return h(e.getMonth(),!0,n)},S:function(e){return o(e.getSeconds())},U:function(e){return e.getTime()/1e3},W:function(e,n,t){return t.getWeek(e)},Y:function(e){return o(e.getFullYear(),4)},d:function(e){return o(e.getDate())},h:function(e){return e.getHours()%12?e.getHours()%12:12},i:function(e){return o(e.getMinutes())},j:function(e){return e.getDate()},l:function(e,n){return n.weekdays.longhand[e.getDay()]},m:function(e){return o(e.getMonth()+1)},n:function(e){return e.getMonth()+1},s:function(e){return e.getSeconds()},u:function(e){return e.getTime()},w:function(e){return e.getDay()},y:function(e){return String(e.getFullYear()).substring(2)}},b=function(e){var n=e.config,t=void 0===n?a:n,o=e.l10n,r=void 0===o?i:o,l=e.isMobile,c=void 0!==l&&l;return function(e,n,a){var i=a||r;return void 0===t.formatDate||c?n.split("").map((function(n,a,o){return w[n]&&"\\"!==o[a-1]?w[n](e,i,t):"\\"!==n?n:""})).join(""):t.formatDate(e,n,i)}},C=function(e){var n=e.config,t=void 0===n?a:n,o=e.l10n,r=void 0===o?i:o;return function(e,n,i,o){if(0===e||e){var l,c=o||r,s=e;if(e instanceof Date)l=new Date(e.getTime());else if("string"!=typeof e&&void 0!==e.toFixed)l=new Date(e);else if("string"==typeof e){var d=n||(t||a).dateFormat,u=String(e).trim();if("today"===u)l=new Date,i=!0;else if(t&&t.parseDate)l=t.parseDate(e,d);else if(/Z$/.test(u)||/GMT$/.test(u))l=new Date(e);else {for(var f=void 0,m=[],g=0,p=0,h="";g<d.length;g++){var w=d[g],b="\\"===w,C="\\"===d[g-1]||b;if(D[w]&&!C){h+=D[w];var M=new RegExp(h).exec(e);M&&(f=!0)&&m["Y"!==w?"push":"unshift"]({fn:v[w],val:M[++p]});}else b||(h+=".");}l=t&&t.noCalendar?new Date((new Date).setHours(0,0,0,0)):new Date((new Date).getFullYear(),0,1,0,0,0,0),m.forEach((function(e){var n=e.fn,t=e.val;return l=n(l,t,c)||l})),l=f?l:void 0;}}if(l instanceof Date&&!isNaN(l.getTime()))return !0===i&&l.setHours(0,0,0,0),l;t.errorHandler(new Error("Invalid date provided: "+s));}}};function M(e,n,t){return void 0===t&&(t=!0),!1!==t?new Date(e.getTime()).setHours(0,0,0,0)-new Date(n.getTime()).setHours(0,0,0,0):e.getTime()-n.getTime()}var y=function(e,n,t){return 3600*e+60*n+t},x=864e5;function E(e){var n=e.defaultHour,t=e.defaultMinute,a=e.defaultSeconds;if(void 0!==e.minDate){var i=e.minDate.getHours(),o=e.minDate.getMinutes(),r=e.minDate.getSeconds();n<i&&(n=i),n===i&&t<o&&(t=o),n===i&&t===o&&a<r&&(a=e.minDate.getSeconds());}if(void 0!==e.maxDate){var l=e.maxDate.getHours(),c=e.maxDate.getMinutes();(n=Math.min(n,l))===l&&(t=Math.min(c,t)),n===l&&t===c&&(a=e.maxDate.getSeconds());}return {hours:n,minutes:t,seconds:a}}"function"!=typeof Object.assign&&(Object.assign=function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];if(!e)throw TypeError("Cannot convert undefined or null to object");for(var a=function(n){n&&Object.keys(n).forEach((function(t){return e[t]=n[t]}));},i=0,o=n;i<o.length;i++){var r=o[i];a(r);}return e});function k(p,v){var w={config:e(e({},a),I.defaultConfig),l10n:i};function k(){var e;return (null===(e=w.calendarContainer)||void 0===e?void 0:e.getRootNode()).activeElement||document.activeElement}function T(e){return e.bind(w)}function S(){var e=w.config;!1===e.weekNumbers&&1===e.showMonths||!0!==e.noCalendar&&window.requestAnimationFrame((function(){if(void 0!==w.calendarContainer&&(w.calendarContainer.style.visibility="hidden",w.calendarContainer.style.display="block"),void 0!==w.daysContainer){var n=(w.days.offsetWidth+1)*e.showMonths;w.daysContainer.style.width=n+"px",w.calendarContainer.style.width=n+(void 0!==w.weekWrapper?w.weekWrapper.offsetWidth:0)+"px",w.calendarContainer.style.removeProperty("visibility"),w.calendarContainer.style.removeProperty("display");}}));}function _(e){if(0===w.selectedDates.length){var n=void 0===w.config.minDate||M(new Date,w.config.minDate)>=0?new Date:new Date(w.config.minDate.getTime()),t=E(w.config);n.setHours(t.hours,t.minutes,t.seconds,n.getMilliseconds()),w.selectedDates=[n],w.latestSelectedDateObj=n;}void 0!==e&&"blur"!==e.type&&function(e){e.preventDefault();var n="keydown"===e.type,t=g(e),a=t;void 0!==w.amPM&&t===w.amPM&&(w.amPM.textContent=w.l10n.amPM[r(w.amPM.textContent===w.l10n.amPM[0])]);var i=parseFloat(a.getAttribute("min")),l=parseFloat(a.getAttribute("max")),c=parseFloat(a.getAttribute("step")),s=parseInt(a.value,10),d=e.delta||(n?38===e.which?1:-1:0),u=s+c*d;if(void 0!==a.value&&2===a.value.length){var f=a===w.hourElement,m=a===w.minuteElement;u<i?(u=l+u+r(!f)+(r(f)&&r(!w.amPM)),m&&L(void 0,-1,w.hourElement)):u>l&&(u=a===w.hourElement?u-l-r(!w.amPM):i,m&&L(void 0,1,w.hourElement)),w.amPM&&f&&(1===c?u+s===23:Math.abs(u-s)>c)&&(w.amPM.textContent=w.l10n.amPM[r(w.amPM.textContent===w.l10n.amPM[0])]),a.value=o(u);}}(e);var a=w._input.value;O(),ye(),w._input.value!==a&&w._debouncedChange();}function O(){if(void 0!==w.hourElement&&void 0!==w.minuteElement){var e,n,t=(parseInt(w.hourElement.value.slice(-2),10)||0)%24,a=(parseInt(w.minuteElement.value,10)||0)%60,i=void 0!==w.secondElement?(parseInt(w.secondElement.value,10)||0)%60:0;void 0!==w.amPM&&(e=t,n=w.amPM.textContent,t=e%12+12*r(n===w.l10n.amPM[1]));var o=void 0!==w.config.minTime||w.config.minDate&&w.minDateHasTime&&w.latestSelectedDateObj&&0===M(w.latestSelectedDateObj,w.config.minDate,!0),l=void 0!==w.config.maxTime||w.config.maxDate&&w.maxDateHasTime&&w.latestSelectedDateObj&&0===M(w.latestSelectedDateObj,w.config.maxDate,!0);if(void 0!==w.config.maxTime&&void 0!==w.config.minTime&&w.config.minTime>w.config.maxTime){var c=y(w.config.minTime.getHours(),w.config.minTime.getMinutes(),w.config.minTime.getSeconds()),s=y(w.config.maxTime.getHours(),w.config.maxTime.getMinutes(),w.config.maxTime.getSeconds()),d=y(t,a,i);if(d>s&&d<c){var u=function(e){var n=Math.floor(e/3600),t=(e-3600*n)/60;return [n,t,e-3600*n-60*t]}(c);t=u[0],a=u[1],i=u[2];}}else {if(l){var f=void 0!==w.config.maxTime?w.config.maxTime:w.config.maxDate;(t=Math.min(t,f.getHours()))===f.getHours()&&(a=Math.min(a,f.getMinutes())),a===f.getMinutes()&&(i=Math.min(i,f.getSeconds()));}if(o){var m=void 0!==w.config.minTime?w.config.minTime:w.config.minDate;(t=Math.max(t,m.getHours()))===m.getHours()&&a<m.getMinutes()&&(a=m.getMinutes()),a===m.getMinutes()&&(i=Math.max(i,m.getSeconds()));}}A(t,a,i);}}function F(e){var n=e||w.latestSelectedDateObj;n&&n instanceof Date&&A(n.getHours(),n.getMinutes(),n.getSeconds());}function A(e,n,t){void 0!==w.latestSelectedDateObj&&w.latestSelectedDateObj.setHours(e%24,n,t||0,0),w.hourElement&&w.minuteElement&&!w.isMobile&&(w.hourElement.value=o(w.config.time_24hr?e:(12+e)%12+12*r(e%12==0)),w.minuteElement.value=o(n),void 0!==w.amPM&&(w.amPM.textContent=w.l10n.amPM[r(e>=12)]),void 0!==w.secondElement&&(w.secondElement.value=o(t)));}function N(e){var n=g(e),t=parseInt(n.value)+(e.delta||0);(t/1e3>1||"Enter"===e.key&&!/[^\d]/.test(t.toString()))&&ee(t);}function P(e,n,t,a){return n instanceof Array?n.forEach((function(n){return P(e,n,t,a)})):e instanceof Array?e.forEach((function(e){return P(e,n,t,a)})):(e.addEventListener(n,t,a),void w._handlers.push({remove:function(){return e.removeEventListener(n,t,a)}}))}function Y(){De("onChange");}function j(e,n){var t=void 0!==e?w.parseDate(e):w.latestSelectedDateObj||(w.config.minDate&&w.config.minDate>w.now?w.config.minDate:w.config.maxDate&&w.config.maxDate<w.now?w.config.maxDate:w.now),a=w.currentYear,i=w.currentMonth;try{void 0!==t&&(w.currentYear=t.getFullYear(),w.currentMonth=t.getMonth());}catch(e){e.message="Invalid date supplied: "+t,w.config.errorHandler(e);}n&&w.currentYear!==a&&(De("onYearChange"),q()),!n||w.currentYear===a&&w.currentMonth===i||De("onMonthChange"),w.redraw();}function H(e){var n=g(e);~n.className.indexOf("arrow")&&L(e,n.classList.contains("arrowUp")?1:-1);}function L(e,n,t){var a=e&&g(e),i=t||a&&a.parentNode&&a.parentNode.firstChild,o=we("increment");o.delta=n,i&&i.dispatchEvent(o);}function R(e,n,t,a){var i=ne(n,!0),o=d("span",e,n.getDate().toString());return o.dateObj=n,o.$i=a,o.setAttribute("aria-label",w.formatDate(n,w.config.ariaDateFormat)),-1===e.indexOf("hidden")&&0===M(n,w.now)&&(w.todayDateElem=o,o.classList.add("today"),o.setAttribute("aria-current","date")),i?(o.tabIndex=-1,be(n)&&(o.classList.add("selected"),w.selectedDateElem=o,"range"===w.config.mode&&(s(o,"startRange",w.selectedDates[0]&&0===M(n,w.selectedDates[0],!0)),s(o,"endRange",w.selectedDates[1]&&0===M(n,w.selectedDates[1],!0)),"nextMonthDay"===e&&o.classList.add("inRange")))):o.classList.add("flatpickr-disabled"),"range"===w.config.mode&&function(e){return !("range"!==w.config.mode||w.selectedDates.length<2)&&(M(e,w.selectedDates[0])>=0&&M(e,w.selectedDates[1])<=0)}(n)&&!be(n)&&o.classList.add("inRange"),w.weekNumbers&&1===w.config.showMonths&&"prevMonthDay"!==e&&a%7==6&&w.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+w.config.getWeek(n)+"</span>"),De("onDayCreate",o),o}function W(e){e.focus(),"range"===w.config.mode&&oe(e);}function B(e){for(var n=e>0?0:w.config.showMonths-1,t=e>0?w.config.showMonths:-1,a=n;a!=t;a+=e)for(var i=w.daysContainer.children[a],o=e>0?0:i.children.length-1,r=e>0?i.children.length:-1,l=o;l!=r;l+=e){var c=i.children[l];if(-1===c.className.indexOf("hidden")&&ne(c.dateObj))return c}}function J(e,n){var t=k(),a=te(t||document.body),i=void 0!==e?e:a?t:void 0!==w.selectedDateElem&&te(w.selectedDateElem)?w.selectedDateElem:void 0!==w.todayDateElem&&te(w.todayDateElem)?w.todayDateElem:B(n>0?1:-1);void 0===i?w._input.focus():a?function(e,n){for(var t=-1===e.className.indexOf("Month")?e.dateObj.getMonth():w.currentMonth,a=n>0?w.config.showMonths:-1,i=n>0?1:-1,o=t-w.currentMonth;o!=a;o+=i)for(var r=w.daysContainer.children[o],l=t-w.currentMonth===o?e.$i+n:n<0?r.children.length-1:0,c=r.children.length,s=l;s>=0&&s<c&&s!=(n>0?c:-1);s+=i){var d=r.children[s];if(-1===d.className.indexOf("hidden")&&ne(d.dateObj)&&Math.abs(e.$i-s)>=Math.abs(n))return W(d)}w.changeMonth(i),J(B(i),0);}(i,n):W(i);}function K(e,n){for(var t=(new Date(e,n,1).getDay()-w.l10n.firstDayOfWeek+7)%7,a=w.utils.getDaysInMonth((n-1+12)%12,e),i=w.utils.getDaysInMonth(n,e),o=window.document.createDocumentFragment(),r=w.config.showMonths>1,l=r?"prevMonthDay hidden":"prevMonthDay",c=r?"nextMonthDay hidden":"nextMonthDay",s=a+1-t,u=0;s<=a;s++,u++)o.appendChild(R("flatpickr-day "+l,new Date(e,n-1,s),0,u));for(s=1;s<=i;s++,u++)o.appendChild(R("flatpickr-day",new Date(e,n,s),0,u));for(var f=i+1;f<=42-t&&(1===w.config.showMonths||u%7!=0);f++,u++)o.appendChild(R("flatpickr-day "+c,new Date(e,n+1,f%i),0,u));var m=d("div","dayContainer");return m.appendChild(o),m}function U(){if(void 0!==w.daysContainer){u(w.daysContainer),w.weekNumbers&&u(w.weekNumbers);for(var e=document.createDocumentFragment(),n=0;n<w.config.showMonths;n++){var t=new Date(w.currentYear,w.currentMonth,1);t.setMonth(w.currentMonth+n),e.appendChild(K(t.getFullYear(),t.getMonth()));}w.daysContainer.appendChild(e),w.days=w.daysContainer.firstChild,"range"===w.config.mode&&1===w.selectedDates.length&&oe();}}function q(){if(!(w.config.showMonths>1||"dropdown"!==w.config.monthSelectorType)){var e=function(e){return !(void 0!==w.config.minDate&&w.currentYear===w.config.minDate.getFullYear()&&e<w.config.minDate.getMonth())&&!(void 0!==w.config.maxDate&&w.currentYear===w.config.maxDate.getFullYear()&&e>w.config.maxDate.getMonth())};w.monthsDropdownContainer.tabIndex=-1,w.monthsDropdownContainer.innerHTML="";for(var n=0;n<12;n++)if(e(n)){var t=d("option","flatpickr-monthDropdown-month");t.value=new Date(w.currentYear,n).getMonth().toString(),t.textContent=h(n,w.config.shorthandCurrentMonth,w.l10n),t.tabIndex=-1,w.currentMonth===n&&(t.selected=!0),w.monthsDropdownContainer.appendChild(t);}}}function $(){var e,n=d("div","flatpickr-month"),t=window.document.createDocumentFragment();w.config.showMonths>1||"static"===w.config.monthSelectorType?e=d("span","cur-month"):(w.monthsDropdownContainer=d("select","flatpickr-monthDropdown-months"),w.monthsDropdownContainer.setAttribute("aria-label",w.l10n.monthAriaLabel),P(w.monthsDropdownContainer,"change",(function(e){var n=g(e),t=parseInt(n.value,10);w.changeMonth(t-w.currentMonth),De("onMonthChange");})),q(),e=w.monthsDropdownContainer);var a=m("cur-year",{tabindex:"-1"}),i=a.getElementsByTagName("input")[0];i.setAttribute("aria-label",w.l10n.yearAriaLabel),w.config.minDate&&i.setAttribute("min",w.config.minDate.getFullYear().toString()),w.config.maxDate&&(i.setAttribute("max",w.config.maxDate.getFullYear().toString()),i.disabled=!!w.config.minDate&&w.config.minDate.getFullYear()===w.config.maxDate.getFullYear());var o=d("div","flatpickr-current-month");return o.appendChild(e),o.appendChild(a),t.appendChild(o),n.appendChild(t),{container:n,yearElement:i,monthElement:e}}function V(){u(w.monthNav),w.monthNav.appendChild(w.prevMonthNav),w.config.showMonths&&(w.yearElements=[],w.monthElements=[]);for(var e=w.config.showMonths;e--;){var n=$();w.yearElements.push(n.yearElement),w.monthElements.push(n.monthElement),w.monthNav.appendChild(n.container);}w.monthNav.appendChild(w.nextMonthNav);}function z(){w.weekdayContainer?u(w.weekdayContainer):w.weekdayContainer=d("div","flatpickr-weekdays");for(var e=w.config.showMonths;e--;){var n=d("div","flatpickr-weekdaycontainer");w.weekdayContainer.appendChild(n);}return G(),w.weekdayContainer}function G(){if(w.weekdayContainer){var e=w.l10n.firstDayOfWeek,t=n(w.l10n.weekdays.shorthand);e>0&&e<t.length&&(t=n(t.splice(e,t.length),t.splice(0,e)));for(var a=w.config.showMonths;a--;)w.weekdayContainer.children[a].innerHTML="\n      <span class='flatpickr-weekday'>\n        "+t.join("</span><span class='flatpickr-weekday'>")+"\n      </span>\n      ";}}function Z(e,n){void 0===n&&(n=!0);var t=n?e:e-w.currentMonth;t<0&&!0===w._hidePrevMonthArrow||t>0&&!0===w._hideNextMonthArrow||(w.currentMonth+=t,(w.currentMonth<0||w.currentMonth>11)&&(w.currentYear+=w.currentMonth>11?1:-1,w.currentMonth=(w.currentMonth+12)%12,De("onYearChange"),q()),U(),De("onMonthChange"),Ce());}function Q(e){return w.calendarContainer.contains(e)}function X(e){if(w.isOpen&&!w.config.inline){var n=g(e),t=Q(n),a=!(n===w.input||n===w.altInput||w.element.contains(n)||e.path&&e.path.indexOf&&(~e.path.indexOf(w.input)||~e.path.indexOf(w.altInput)))&&!t&&!Q(e.relatedTarget),i=!w.config.ignoredFocusElements.some((function(e){return e.contains(n)}));a&&i&&(w.config.allowInput&&w.setDate(w._input.value,!1,w.config.altInput?w.config.altFormat:w.config.dateFormat),void 0!==w.timeContainer&&void 0!==w.minuteElement&&void 0!==w.hourElement&&""!==w.input.value&&void 0!==w.input.value&&_(),w.close(),w.config&&"range"===w.config.mode&&1===w.selectedDates.length&&w.clear(!1));}}function ee(e){if(!(!e||w.config.minDate&&e<w.config.minDate.getFullYear()||w.config.maxDate&&e>w.config.maxDate.getFullYear())){var n=e,t=w.currentYear!==n;w.currentYear=n||w.currentYear,w.config.maxDate&&w.currentYear===w.config.maxDate.getFullYear()?w.currentMonth=Math.min(w.config.maxDate.getMonth(),w.currentMonth):w.config.minDate&&w.currentYear===w.config.minDate.getFullYear()&&(w.currentMonth=Math.max(w.config.minDate.getMonth(),w.currentMonth)),t&&(w.redraw(),De("onYearChange"),q());}}function ne(e,n){var t;void 0===n&&(n=!0);var a=w.parseDate(e,void 0,n);if(w.config.minDate&&a&&M(a,w.config.minDate,void 0!==n?n:!w.minDateHasTime)<0||w.config.maxDate&&a&&M(a,w.config.maxDate,void 0!==n?n:!w.maxDateHasTime)>0)return !1;if(!w.config.enable&&0===w.config.disable.length)return !0;if(void 0===a)return !1;for(var i=!!w.config.enable,o=null!==(t=w.config.enable)&&void 0!==t?t:w.config.disable,r=0,l=void 0;r<o.length;r++){if("function"==typeof(l=o[r])&&l(a))return i;if(l instanceof Date&&void 0!==a&&l.getTime()===a.getTime())return i;if("string"==typeof l){var c=w.parseDate(l,void 0,!0);return c&&c.getTime()===a.getTime()?i:!i}if("object"==typeof l&&void 0!==a&&l.from&&l.to&&a.getTime()>=l.from.getTime()&&a.getTime()<=l.to.getTime())return i}return !i}function te(e){return void 0!==w.daysContainer&&(-1===e.className.indexOf("hidden")&&-1===e.className.indexOf("flatpickr-disabled")&&w.daysContainer.contains(e))}function ae(e){var n=e.target===w._input,t=w._input.value.trimEnd()!==Me();!n||!t||e.relatedTarget&&Q(e.relatedTarget)||w.setDate(w._input.value,!0,e.target===w.altInput?w.config.altFormat:w.config.dateFormat);}function ie(e){var n=g(e),t=w.config.wrap?p.contains(n):n===w._input,a=w.config.allowInput,i=w.isOpen&&(!a||!t),o=w.config.inline&&t&&!a;if(13===e.keyCode&&t){if(a)return w.setDate(w._input.value,!0,n===w.altInput?w.config.altFormat:w.config.dateFormat),w.close(),n.blur();w.open();}else if(Q(n)||i||o){var r=!!w.timeContainer&&w.timeContainer.contains(n);switch(e.keyCode){case 13:r?(e.preventDefault(),_(),fe()):me(e);break;case 27:e.preventDefault(),fe();break;case 8:case 46:t&&!w.config.allowInput&&(e.preventDefault(),w.clear());break;case 37:case 39:if(r||t)w.hourElement&&w.hourElement.focus();else {e.preventDefault();var l=k();if(void 0!==w.daysContainer&&(!1===a||l&&te(l))){var c=39===e.keyCode?1:-1;e.ctrlKey?(e.stopPropagation(),Z(c),J(B(1),0)):J(void 0,c);}}break;case 38:case 40:e.preventDefault();var s=40===e.keyCode?1:-1;w.daysContainer&&void 0!==n.$i||n===w.input||n===w.altInput?e.ctrlKey?(e.stopPropagation(),ee(w.currentYear-s),J(B(1),0)):r||J(void 0,7*s):n===w.currentYearElement?ee(w.currentYear-s):w.config.enableTime&&(!r&&w.hourElement&&w.hourElement.focus(),_(e),w._debouncedChange());break;case 9:if(r){var d=[w.hourElement,w.minuteElement,w.secondElement,w.amPM].concat(w.pluginElements).filter((function(e){return e})),u=d.indexOf(n);if(-1!==u){var f=d[u+(e.shiftKey?-1:1)];e.preventDefault(),(f||w._input).focus();}}else !w.config.noCalendar&&w.daysContainer&&w.daysContainer.contains(n)&&e.shiftKey&&(e.preventDefault(),w._input.focus());}}if(void 0!==w.amPM&&n===w.amPM)switch(e.key){case w.l10n.amPM[0].charAt(0):case w.l10n.amPM[0].charAt(0).toLowerCase():w.amPM.textContent=w.l10n.amPM[0],O(),ye();break;case w.l10n.amPM[1].charAt(0):case w.l10n.amPM[1].charAt(0).toLowerCase():w.amPM.textContent=w.l10n.amPM[1],O(),ye();}(t||Q(n))&&De("onKeyDown",e);}function oe(e,n){if(void 0===n&&(n="flatpickr-day"),1===w.selectedDates.length&&(!e||e.classList.contains(n)&&!e.classList.contains("flatpickr-disabled"))){for(var t=e?e.dateObj.getTime():w.days.firstElementChild.dateObj.getTime(),a=w.parseDate(w.selectedDates[0],void 0,!0).getTime(),i=Math.min(t,w.selectedDates[0].getTime()),o=Math.max(t,w.selectedDates[0].getTime()),r=!1,l=0,c=0,s=i;s<o;s+=x)ne(new Date(s),!0)||(r=r||s>i&&s<o,s<a&&(!l||s>l)?l=s:s>a&&(!c||s<c)&&(c=s));Array.from(w.rContainer.querySelectorAll("*:nth-child(-n+"+w.config.showMonths+") > ."+n)).forEach((function(n){var i,o,s,d=n.dateObj.getTime(),u=l>0&&d<l||c>0&&d>c;if(u)return n.classList.add("notAllowed"),void["inRange","startRange","endRange"].forEach((function(e){n.classList.remove(e);}));r&&!u||(["startRange","inRange","endRange","notAllowed"].forEach((function(e){n.classList.remove(e);})),void 0!==e&&(e.classList.add(t<=w.selectedDates[0].getTime()?"startRange":"endRange"),a<t&&d===a?n.classList.add("startRange"):a>t&&d===a&&n.classList.add("endRange"),d>=l&&(0===c||d<=c)&&(o=a,s=t,(i=d)>Math.min(o,s)&&i<Math.max(o,s))&&n.classList.add("inRange")));}));}}function re(){!w.isOpen||w.config.static||w.config.inline||de();}function le(e){return function(n){var t=w.config["_"+e+"Date"]=w.parseDate(n,w.config.dateFormat),a=w.config["_"+("min"===e?"max":"min")+"Date"];void 0!==t&&(w["min"===e?"minDateHasTime":"maxDateHasTime"]=t.getHours()>0||t.getMinutes()>0||t.getSeconds()>0),w.selectedDates&&(w.selectedDates=w.selectedDates.filter((function(e){return ne(e)})),w.selectedDates.length||"min"!==e||F(t),ye()),w.daysContainer&&(ue(),void 0!==t?w.currentYearElement[e]=t.getFullYear().toString():w.currentYearElement.removeAttribute(e),w.currentYearElement.disabled=!!a&&void 0!==t&&a.getFullYear()===t.getFullYear());}}function ce(){return w.config.wrap?p.querySelector("[data-input]"):p}function se(){"object"!=typeof w.config.locale&&void 0===I.l10ns[w.config.locale]&&w.config.errorHandler(new Error("flatpickr: invalid locale "+w.config.locale)),w.l10n=e(e({},I.l10ns.default),"object"==typeof w.config.locale?w.config.locale:"default"!==w.config.locale?I.l10ns[w.config.locale]:void 0),D.D="("+w.l10n.weekdays.shorthand.join("|")+")",D.l="("+w.l10n.weekdays.longhand.join("|")+")",D.M="("+w.l10n.months.shorthand.join("|")+")",D.F="("+w.l10n.months.longhand.join("|")+")",D.K="("+w.l10n.amPM[0]+"|"+w.l10n.amPM[1]+"|"+w.l10n.amPM[0].toLowerCase()+"|"+w.l10n.amPM[1].toLowerCase()+")",void 0===e(e({},v),JSON.parse(JSON.stringify(p.dataset||{}))).time_24hr&&void 0===I.defaultConfig.time_24hr&&(w.config.time_24hr=w.l10n.time_24hr),w.formatDate=b(w),w.parseDate=C({config:w.config,l10n:w.l10n});}function de(e){if("function"!=typeof w.config.position){if(void 0!==w.calendarContainer){De("onPreCalendarPosition");var n=e||w._positionElement,t=Array.prototype.reduce.call(w.calendarContainer.children,(function(e,n){return e+n.offsetHeight}),0),a=w.calendarContainer.offsetWidth,i=w.config.position.split(" "),o=i[0],r=i.length>1?i[1]:null,l=n.getBoundingClientRect(),c=window.innerHeight-l.bottom,d="above"===o||"below"!==o&&c<t&&l.top>t,u=window.pageYOffset+l.top+(d?-t-2:n.offsetHeight+2);if(s(w.calendarContainer,"arrowTop",!d),s(w.calendarContainer,"arrowBottom",d),!w.config.inline){var f=window.pageXOffset+l.left,m=!1,g=!1;"center"===r?(f-=(a-l.width)/2,m=!0):"right"===r&&(f-=a-l.width,g=!0),s(w.calendarContainer,"arrowLeft",!m&&!g),s(w.calendarContainer,"arrowCenter",m),s(w.calendarContainer,"arrowRight",g);var p=window.document.body.offsetWidth-(window.pageXOffset+l.right),h=f+a>window.document.body.offsetWidth,v=p+a>window.document.body.offsetWidth;if(s(w.calendarContainer,"rightMost",h),!w.config.static)if(w.calendarContainer.style.top=u+"px",h)if(v){var D=function(){for(var e=null,n=0;n<document.styleSheets.length;n++){var t=document.styleSheets[n];if(t.cssRules){try{t.cssRules;}catch(e){continue}e=t;break}}return null!=e?e:(a=document.createElement("style"),document.head.appendChild(a),a.sheet);var a;}();if(void 0===D)return;var b=window.document.body.offsetWidth,C=Math.max(0,b/2-a/2),M=D.cssRules.length,y="{left:"+l.left+"px;right:auto;}";s(w.calendarContainer,"rightMost",!1),s(w.calendarContainer,"centerMost",!0),D.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after"+y,M),w.calendarContainer.style.left=C+"px",w.calendarContainer.style.right="auto";}else w.calendarContainer.style.left="auto",w.calendarContainer.style.right=p+"px";else w.calendarContainer.style.left=f+"px",w.calendarContainer.style.right="auto";}}}else w.config.position(w,e);}function ue(){w.config.noCalendar||w.isMobile||(q(),Ce(),U());}function fe(){w._input.focus(),-1!==window.navigator.userAgent.indexOf("MSIE")||void 0!==navigator.msMaxTouchPoints?setTimeout(w.close,0):w.close();}function me(e){e.preventDefault(),e.stopPropagation();var n=f(g(e),(function(e){return e.classList&&e.classList.contains("flatpickr-day")&&!e.classList.contains("flatpickr-disabled")&&!e.classList.contains("notAllowed")}));if(void 0!==n){var t=n,a=w.latestSelectedDateObj=new Date(t.dateObj.getTime()),i=(a.getMonth()<w.currentMonth||a.getMonth()>w.currentMonth+w.config.showMonths-1)&&"range"!==w.config.mode;if(w.selectedDateElem=t,"single"===w.config.mode)w.selectedDates=[a];else if("multiple"===w.config.mode){var o=be(a);o?w.selectedDates.splice(parseInt(o),1):w.selectedDates.push(a);}else "range"===w.config.mode&&(2===w.selectedDates.length&&w.clear(!1,!1),w.latestSelectedDateObj=a,w.selectedDates.push(a),0!==M(a,w.selectedDates[0],!0)&&w.selectedDates.sort((function(e,n){return e.getTime()-n.getTime()})));if(O(),i){var r=w.currentYear!==a.getFullYear();w.currentYear=a.getFullYear(),w.currentMonth=a.getMonth(),r&&(De("onYearChange"),q()),De("onMonthChange");}if(Ce(),U(),ye(),i||"range"===w.config.mode||1!==w.config.showMonths?void 0!==w.selectedDateElem&&void 0===w.hourElement&&w.selectedDateElem&&w.selectedDateElem.focus():W(t),void 0!==w.hourElement&&void 0!==w.hourElement&&w.hourElement.focus(),w.config.closeOnSelect){var l="single"===w.config.mode&&!w.config.enableTime,c="range"===w.config.mode&&2===w.selectedDates.length&&!w.config.enableTime;(l||c)&&fe();}Y();}}w.parseDate=C({config:w.config,l10n:w.l10n}),w._handlers=[],w.pluginElements=[],w.loadedPlugins=[],w._bind=P,w._setHoursFromDate=F,w._positionCalendar=de,w.changeMonth=Z,w.changeYear=ee,w.clear=function(e,n){void 0===e&&(e=!0);void 0===n&&(n=!0);w.input.value="",void 0!==w.altInput&&(w.altInput.value="");void 0!==w.mobileInput&&(w.mobileInput.value="");w.selectedDates=[],w.latestSelectedDateObj=void 0,!0===n&&(w.currentYear=w._initialDate.getFullYear(),w.currentMonth=w._initialDate.getMonth());if(!0===w.config.enableTime){var t=E(w.config),a=t.hours,i=t.minutes,o=t.seconds;A(a,i,o);}w.redraw(),e&&De("onChange");},w.close=function(){w.isOpen=!1,w.isMobile||(void 0!==w.calendarContainer&&w.calendarContainer.classList.remove("open"),void 0!==w._input&&w._input.classList.remove("active"));De("onClose");},w.onMouseOver=oe,w._createElement=d,w.createDay=R,w.destroy=function(){void 0!==w.config&&De("onDestroy");for(var e=w._handlers.length;e--;)w._handlers[e].remove();if(w._handlers=[],w.mobileInput)w.mobileInput.parentNode&&w.mobileInput.parentNode.removeChild(w.mobileInput),w.mobileInput=void 0;else if(w.calendarContainer&&w.calendarContainer.parentNode)if(w.config.static&&w.calendarContainer.parentNode){var n=w.calendarContainer.parentNode;if(n.lastChild&&n.removeChild(n.lastChild),n.parentNode){for(;n.firstChild;)n.parentNode.insertBefore(n.firstChild,n);n.parentNode.removeChild(n);}}else w.calendarContainer.parentNode.removeChild(w.calendarContainer);w.altInput&&(w.input.type="text",w.altInput.parentNode&&w.altInput.parentNode.removeChild(w.altInput),delete w.altInput);w.input&&(w.input.type=w.input._type,w.input.classList.remove("flatpickr-input"),w.input.removeAttribute("readonly"));["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach((function(e){try{delete w[e];}catch(e){}}));},w.isEnabled=ne,w.jumpToDate=j,w.updateValue=ye,w.open=function(e,n){void 0===n&&(n=w._positionElement);if(!0===w.isMobile){if(e){e.preventDefault();var t=g(e);t&&t.blur();}return void 0!==w.mobileInput&&(w.mobileInput.focus(),w.mobileInput.click()),void De("onOpen")}if(w._input.disabled||w.config.inline)return;var a=w.isOpen;w.isOpen=!0,a||(w.calendarContainer.classList.add("open"),w._input.classList.add("active"),De("onOpen"),de(n));!0===w.config.enableTime&&!0===w.config.noCalendar&&(!1!==w.config.allowInput||void 0!==e&&w.timeContainer.contains(e.relatedTarget)||setTimeout((function(){return w.hourElement.select()}),50));},w.redraw=ue,w.set=function(e,n){if(null!==e&&"object"==typeof e)for(var a in Object.assign(w.config,e),e)void 0!==ge[a]&&ge[a].forEach((function(e){return e()}));else w.config[e]=n,void 0!==ge[e]?ge[e].forEach((function(e){return e()})):t.indexOf(e)>-1&&(w.config[e]=c(n));w.redraw(),ye(!0);},w.setDate=function(e,n,t){void 0===n&&(n=!1);void 0===t&&(t=w.config.dateFormat);if(0!==e&&!e||e instanceof Array&&0===e.length)return w.clear(n);pe(e,t),w.latestSelectedDateObj=w.selectedDates[w.selectedDates.length-1],w.redraw(),j(void 0,n),F(),0===w.selectedDates.length&&w.clear(!1);ye(n),n&&De("onChange");},w.toggle=function(e){if(!0===w.isOpen)return w.close();w.open(e);};var ge={locale:[se,G],showMonths:[V,S,z],minDate:[j],maxDate:[j],positionElement:[ve],clickOpens:[function(){!0===w.config.clickOpens?(P(w._input,"focus",w.open),P(w._input,"click",w.open)):(w._input.removeEventListener("focus",w.open),w._input.removeEventListener("click",w.open));}]};function pe(e,n){var t=[];if(e instanceof Array)t=e.map((function(e){return w.parseDate(e,n)}));else if(e instanceof Date||"number"==typeof e)t=[w.parseDate(e,n)];else if("string"==typeof e)switch(w.config.mode){case"single":case"time":t=[w.parseDate(e,n)];break;case"multiple":t=e.split(w.config.conjunction).map((function(e){return w.parseDate(e,n)}));break;case"range":t=e.split(w.l10n.rangeSeparator).map((function(e){return w.parseDate(e,n)}));}else w.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(e)));w.selectedDates=w.config.allowInvalidPreload?t:t.filter((function(e){return e instanceof Date&&ne(e,!1)})),"range"===w.config.mode&&w.selectedDates.sort((function(e,n){return e.getTime()-n.getTime()}));}function he(e){return e.slice().map((function(e){return "string"==typeof e||"number"==typeof e||e instanceof Date?w.parseDate(e,void 0,!0):e&&"object"==typeof e&&e.from&&e.to?{from:w.parseDate(e.from,void 0),to:w.parseDate(e.to,void 0)}:e})).filter((function(e){return e}))}function ve(){w._positionElement=w.config.positionElement||w._input;}function De(e,n){if(void 0!==w.config){var t=w.config[e];if(void 0!==t&&t.length>0)for(var a=0;t[a]&&a<t.length;a++)t[a](w.selectedDates,w.input.value,w,n);"onChange"===e&&(w.input.dispatchEvent(we("change")),w.input.dispatchEvent(we("input")));}}function we(e){var n=document.createEvent("Event");return n.initEvent(e,!0,!0),n}function be(e){for(var n=0;n<w.selectedDates.length;n++){var t=w.selectedDates[n];if(t instanceof Date&&0===M(t,e))return ""+n}return !1}function Ce(){w.config.noCalendar||w.isMobile||!w.monthNav||(w.yearElements.forEach((function(e,n){var t=new Date(w.currentYear,w.currentMonth,1);t.setMonth(w.currentMonth+n),w.config.showMonths>1||"static"===w.config.monthSelectorType?w.monthElements[n].textContent=h(t.getMonth(),w.config.shorthandCurrentMonth,w.l10n)+" ":w.monthsDropdownContainer.value=t.getMonth().toString(),e.value=t.getFullYear().toString();})),w._hidePrevMonthArrow=void 0!==w.config.minDate&&(w.currentYear===w.config.minDate.getFullYear()?w.currentMonth<=w.config.minDate.getMonth():w.currentYear<w.config.minDate.getFullYear()),w._hideNextMonthArrow=void 0!==w.config.maxDate&&(w.currentYear===w.config.maxDate.getFullYear()?w.currentMonth+1>w.config.maxDate.getMonth():w.currentYear>w.config.maxDate.getFullYear()));}function Me(e){var n=e||(w.config.altInput?w.config.altFormat:w.config.dateFormat);return w.selectedDates.map((function(e){return w.formatDate(e,n)})).filter((function(e,n,t){return "range"!==w.config.mode||w.config.enableTime||t.indexOf(e)===n})).join("range"!==w.config.mode?w.config.conjunction:w.l10n.rangeSeparator)}function ye(e){void 0===e&&(e=!0),void 0!==w.mobileInput&&w.mobileFormatStr&&(w.mobileInput.value=void 0!==w.latestSelectedDateObj?w.formatDate(w.latestSelectedDateObj,w.mobileFormatStr):""),w.input.value=Me(w.config.dateFormat),void 0!==w.altInput&&(w.altInput.value=Me(w.config.altFormat)),!1!==e&&De("onValueUpdate");}function xe(e){var n=g(e),t=w.prevMonthNav.contains(n),a=w.nextMonthNav.contains(n);t||a?Z(t?-1:1):w.yearElements.indexOf(n)>=0?n.select():n.classList.contains("arrowUp")?w.changeYear(w.currentYear+1):n.classList.contains("arrowDown")&&w.changeYear(w.currentYear-1);}return function(){w.element=w.input=p,w.isOpen=!1,function(){var n=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],i=e(e({},JSON.parse(JSON.stringify(p.dataset||{}))),v),o={};w.config.parseDate=i.parseDate,w.config.formatDate=i.formatDate,Object.defineProperty(w.config,"enable",{get:function(){return w.config._enable},set:function(e){w.config._enable=he(e);}}),Object.defineProperty(w.config,"disable",{get:function(){return w.config._disable},set:function(e){w.config._disable=he(e);}});var r="time"===i.mode;if(!i.dateFormat&&(i.enableTime||r)){var l=I.defaultConfig.dateFormat||a.dateFormat;o.dateFormat=i.noCalendar||r?"H:i"+(i.enableSeconds?":S":""):l+" H:i"+(i.enableSeconds?":S":"");}if(i.altInput&&(i.enableTime||r)&&!i.altFormat){var s=I.defaultConfig.altFormat||a.altFormat;o.altFormat=i.noCalendar||r?"h:i"+(i.enableSeconds?":S K":" K"):s+" h:i"+(i.enableSeconds?":S":"")+" K";}Object.defineProperty(w.config,"minDate",{get:function(){return w.config._minDate},set:le("min")}),Object.defineProperty(w.config,"maxDate",{get:function(){return w.config._maxDate},set:le("max")});var d=function(e){return function(n){w.config["min"===e?"_minTime":"_maxTime"]=w.parseDate(n,"H:i:S");}};Object.defineProperty(w.config,"minTime",{get:function(){return w.config._minTime},set:d("min")}),Object.defineProperty(w.config,"maxTime",{get:function(){return w.config._maxTime},set:d("max")}),"time"===i.mode&&(w.config.noCalendar=!0,w.config.enableTime=!0);Object.assign(w.config,o,i);for(var u=0;u<n.length;u++)w.config[n[u]]=!0===w.config[n[u]]||"true"===w.config[n[u]];t.filter((function(e){return void 0!==w.config[e]})).forEach((function(e){w.config[e]=c(w.config[e]||[]).map(T);})),w.isMobile=!w.config.disableMobile&&!w.config.inline&&"single"===w.config.mode&&!w.config.disable.length&&!w.config.enable&&!w.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(u=0;u<w.config.plugins.length;u++){var f=w.config.plugins[u](w)||{};for(var m in f)t.indexOf(m)>-1?w.config[m]=c(f[m]).map(T).concat(w.config[m]):void 0===i[m]&&(w.config[m]=f[m]);}i.altInputClass||(w.config.altInputClass=ce().className+" "+w.config.altInputClass);De("onParseConfig");}(),se(),function(){if(w.input=ce(),!w.input)return void w.config.errorHandler(new Error("Invalid input element specified"));w.input._type=w.input.type,w.input.type="text",w.input.classList.add("flatpickr-input"),w._input=w.input,w.config.altInput&&(w.altInput=d(w.input.nodeName,w.config.altInputClass),w._input=w.altInput,w.altInput.placeholder=w.input.placeholder,w.altInput.disabled=w.input.disabled,w.altInput.required=w.input.required,w.altInput.tabIndex=w.input.tabIndex,w.altInput.type="text",w.input.setAttribute("type","hidden"),!w.config.static&&w.input.parentNode&&w.input.parentNode.insertBefore(w.altInput,w.input.nextSibling));w.config.allowInput||w._input.setAttribute("readonly","readonly");ve();}(),function(){w.selectedDates=[],w.now=w.parseDate(w.config.now)||new Date;var e=w.config.defaultDate||("INPUT"!==w.input.nodeName&&"TEXTAREA"!==w.input.nodeName||!w.input.placeholder||w.input.value!==w.input.placeholder?w.input.value:null);e&&pe(e,w.config.dateFormat);w._initialDate=w.selectedDates.length>0?w.selectedDates[0]:w.config.minDate&&w.config.minDate.getTime()>w.now.getTime()?w.config.minDate:w.config.maxDate&&w.config.maxDate.getTime()<w.now.getTime()?w.config.maxDate:w.now,w.currentYear=w._initialDate.getFullYear(),w.currentMonth=w._initialDate.getMonth(),w.selectedDates.length>0&&(w.latestSelectedDateObj=w.selectedDates[0]);void 0!==w.config.minTime&&(w.config.minTime=w.parseDate(w.config.minTime,"H:i"));void 0!==w.config.maxTime&&(w.config.maxTime=w.parseDate(w.config.maxTime,"H:i"));w.minDateHasTime=!!w.config.minDate&&(w.config.minDate.getHours()>0||w.config.minDate.getMinutes()>0||w.config.minDate.getSeconds()>0),w.maxDateHasTime=!!w.config.maxDate&&(w.config.maxDate.getHours()>0||w.config.maxDate.getMinutes()>0||w.config.maxDate.getSeconds()>0);}(),w.utils={getDaysInMonth:function(e,n){return void 0===e&&(e=w.currentMonth),void 0===n&&(n=w.currentYear),1===e&&(n%4==0&&n%100!=0||n%400==0)?29:w.l10n.daysInMonth[e]}},w.isMobile||function(){var e=window.document.createDocumentFragment();if(w.calendarContainer=d("div","flatpickr-calendar"),w.calendarContainer.tabIndex=-1,!w.config.noCalendar){if(e.appendChild((w.monthNav=d("div","flatpickr-months"),w.yearElements=[],w.monthElements=[],w.prevMonthNav=d("span","flatpickr-prev-month"),w.prevMonthNav.innerHTML=w.config.prevArrow,w.nextMonthNav=d("span","flatpickr-next-month"),w.nextMonthNav.innerHTML=w.config.nextArrow,V(),Object.defineProperty(w,"_hidePrevMonthArrow",{get:function(){return w.__hidePrevMonthArrow},set:function(e){w.__hidePrevMonthArrow!==e&&(s(w.prevMonthNav,"flatpickr-disabled",e),w.__hidePrevMonthArrow=e);}}),Object.defineProperty(w,"_hideNextMonthArrow",{get:function(){return w.__hideNextMonthArrow},set:function(e){w.__hideNextMonthArrow!==e&&(s(w.nextMonthNav,"flatpickr-disabled",e),w.__hideNextMonthArrow=e);}}),w.currentYearElement=w.yearElements[0],Ce(),w.monthNav)),w.innerContainer=d("div","flatpickr-innerContainer"),w.config.weekNumbers){var n=function(){w.calendarContainer.classList.add("hasWeeks");var e=d("div","flatpickr-weekwrapper");e.appendChild(d("span","flatpickr-weekday",w.l10n.weekAbbreviation));var n=d("div","flatpickr-weeks");return e.appendChild(n),{weekWrapper:e,weekNumbers:n}}(),t=n.weekWrapper,a=n.weekNumbers;w.innerContainer.appendChild(t),w.weekNumbers=a,w.weekWrapper=t;}w.rContainer=d("div","flatpickr-rContainer"),w.rContainer.appendChild(z()),w.daysContainer||(w.daysContainer=d("div","flatpickr-days"),w.daysContainer.tabIndex=-1),U(),w.rContainer.appendChild(w.daysContainer),w.innerContainer.appendChild(w.rContainer),e.appendChild(w.innerContainer);}w.config.enableTime&&e.appendChild(function(){w.calendarContainer.classList.add("hasTime"),w.config.noCalendar&&w.calendarContainer.classList.add("noCalendar");var e=E(w.config);w.timeContainer=d("div","flatpickr-time"),w.timeContainer.tabIndex=-1;var n=d("span","flatpickr-time-separator",":"),t=m("flatpickr-hour",{"aria-label":w.l10n.hourAriaLabel});w.hourElement=t.getElementsByTagName("input")[0];var a=m("flatpickr-minute",{"aria-label":w.l10n.minuteAriaLabel});w.minuteElement=a.getElementsByTagName("input")[0],w.hourElement.tabIndex=w.minuteElement.tabIndex=-1,w.hourElement.value=o(w.latestSelectedDateObj?w.latestSelectedDateObj.getHours():w.config.time_24hr?e.hours:function(e){switch(e%24){case 0:case 12:return 12;default:return e%12}}(e.hours)),w.minuteElement.value=o(w.latestSelectedDateObj?w.latestSelectedDateObj.getMinutes():e.minutes),w.hourElement.setAttribute("step",w.config.hourIncrement.toString()),w.minuteElement.setAttribute("step",w.config.minuteIncrement.toString()),w.hourElement.setAttribute("min",w.config.time_24hr?"0":"1"),w.hourElement.setAttribute("max",w.config.time_24hr?"23":"12"),w.hourElement.setAttribute("maxlength","2"),w.minuteElement.setAttribute("min","0"),w.minuteElement.setAttribute("max","59"),w.minuteElement.setAttribute("maxlength","2"),w.timeContainer.appendChild(t),w.timeContainer.appendChild(n),w.timeContainer.appendChild(a),w.config.time_24hr&&w.timeContainer.classList.add("time24hr");if(w.config.enableSeconds){w.timeContainer.classList.add("hasSeconds");var i=m("flatpickr-second");w.secondElement=i.getElementsByTagName("input")[0],w.secondElement.value=o(w.latestSelectedDateObj?w.latestSelectedDateObj.getSeconds():e.seconds),w.secondElement.setAttribute("step",w.minuteElement.getAttribute("step")),w.secondElement.setAttribute("min","0"),w.secondElement.setAttribute("max","59"),w.secondElement.setAttribute("maxlength","2"),w.timeContainer.appendChild(d("span","flatpickr-time-separator",":")),w.timeContainer.appendChild(i);}w.config.time_24hr||(w.amPM=d("span","flatpickr-am-pm",w.l10n.amPM[r((w.latestSelectedDateObj?w.hourElement.value:w.config.defaultHour)>11)]),w.amPM.title=w.l10n.toggleTitle,w.amPM.tabIndex=-1,w.timeContainer.appendChild(w.amPM));return w.timeContainer}());s(w.calendarContainer,"rangeMode","range"===w.config.mode),s(w.calendarContainer,"animate",!0===w.config.animate),s(w.calendarContainer,"multiMonth",w.config.showMonths>1),w.calendarContainer.appendChild(e);var i=void 0!==w.config.appendTo&&void 0!==w.config.appendTo.nodeType;if((w.config.inline||w.config.static)&&(w.calendarContainer.classList.add(w.config.inline?"inline":"static"),w.config.inline&&(!i&&w.element.parentNode?w.element.parentNode.insertBefore(w.calendarContainer,w._input.nextSibling):void 0!==w.config.appendTo&&w.config.appendTo.appendChild(w.calendarContainer)),w.config.static)){var l=d("div","flatpickr-wrapper");w.element.parentNode&&w.element.parentNode.insertBefore(l,w.element),l.appendChild(w.element),w.altInput&&l.appendChild(w.altInput),l.appendChild(w.calendarContainer);}w.config.static||w.config.inline||(void 0!==w.config.appendTo?w.config.appendTo:window.document.body).appendChild(w.calendarContainer);}(),function(){w.config.wrap&&["open","close","toggle","clear"].forEach((function(e){Array.prototype.forEach.call(w.element.querySelectorAll("[data-"+e+"]"),(function(n){return P(n,"click",w[e])}));}));if(w.isMobile)return void function(){var e=w.config.enableTime?w.config.noCalendar?"time":"datetime-local":"date";w.mobileInput=d("input",w.input.className+" flatpickr-mobile"),w.mobileInput.tabIndex=1,w.mobileInput.type=e,w.mobileInput.disabled=w.input.disabled,w.mobileInput.required=w.input.required,w.mobileInput.placeholder=w.input.placeholder,w.mobileFormatStr="datetime-local"===e?"Y-m-d\\TH:i:S":"date"===e?"Y-m-d":"H:i:S",w.selectedDates.length>0&&(w.mobileInput.defaultValue=w.mobileInput.value=w.formatDate(w.selectedDates[0],w.mobileFormatStr));w.config.minDate&&(w.mobileInput.min=w.formatDate(w.config.minDate,"Y-m-d"));w.config.maxDate&&(w.mobileInput.max=w.formatDate(w.config.maxDate,"Y-m-d"));w.input.getAttribute("step")&&(w.mobileInput.step=String(w.input.getAttribute("step")));w.input.type="hidden",void 0!==w.altInput&&(w.altInput.type="hidden");try{w.input.parentNode&&w.input.parentNode.insertBefore(w.mobileInput,w.input.nextSibling);}catch(e){}P(w.mobileInput,"change",(function(e){w.setDate(g(e).value,!1,w.mobileFormatStr),De("onChange"),De("onClose");}));}();var e=l(re,50);w._debouncedChange=l(Y,300),w.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&P(w.daysContainer,"mouseover",(function(e){"range"===w.config.mode&&oe(g(e));}));P(w._input,"keydown",ie),void 0!==w.calendarContainer&&P(w.calendarContainer,"keydown",ie);w.config.inline||w.config.static||P(window,"resize",e);void 0!==window.ontouchstart?P(window.document,"touchstart",X):P(window.document,"mousedown",X);P(window.document,"focus",X,{capture:!0}),!0===w.config.clickOpens&&(P(w._input,"focus",w.open),P(w._input,"click",w.open));void 0!==w.daysContainer&&(P(w.monthNav,"click",xe),P(w.monthNav,["keyup","increment"],N),P(w.daysContainer,"click",me));if(void 0!==w.timeContainer&&void 0!==w.minuteElement&&void 0!==w.hourElement){var n=function(e){return g(e).select()};P(w.timeContainer,["increment"],_),P(w.timeContainer,"blur",_,{capture:!0}),P(w.timeContainer,"click",H),P([w.hourElement,w.minuteElement],["focus","click"],n),void 0!==w.secondElement&&P(w.secondElement,"focus",(function(){return w.secondElement&&w.secondElement.select()})),void 0!==w.amPM&&P(w.amPM,"click",(function(e){_(e);}));}w.config.allowInput&&P(w._input,"blur",ae);}(),(w.selectedDates.length||w.config.noCalendar)&&(w.config.enableTime&&F(w.config.noCalendar?w.latestSelectedDateObj:void 0),ye(!1)),S();var n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!w.isMobile&&n&&de(),De("onReady");}(),w}function T(e,n){for(var t=Array.prototype.slice.call(e).filter((function(e){return e instanceof HTMLElement})),a=[],i=0;i<t.length;i++){var o=t[i];try{if(null!==o.getAttribute("data-fp-omit"))continue;void 0!==o._flatpickr&&(o._flatpickr.destroy(),o._flatpickr=void 0),o._flatpickr=k(o,n||{}),a.push(o._flatpickr);}catch(e){console.error(e);}}return 1===a.length?a[0]:a}"undefined"!=typeof HTMLElement&&"undefined"!=typeof HTMLCollection&&"undefined"!=typeof NodeList&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(e){return T(this,e)},HTMLElement.prototype.flatpickr=function(e){return T([this],e)});var I=function(e,n){return "string"==typeof e?T(window.document.querySelectorAll(e),n):e instanceof Node?T([e],n):T(e,n)};return I.defaultConfig={},I.l10ns={en:e({},i),default:e({},i)},I.localize=function(n){I.l10ns.default=e(e({},I.l10ns.default),n);},I.setDefaults=function(n){I.defaultConfig=e(e({},I.defaultConfig),n);},I.parseDate=C({}),I.formatDate=b({}),I.compareDates=M,"undefined"!=typeof jQuery&&void 0!==jQuery.fn&&(jQuery.fn.flatpickr=function(e){return T(this,e)}),Date.prototype.fp_incr=function(e){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+("string"==typeof e?parseInt(e,10):e))},"undefined"!=typeof window&&(window.flatpickr=I),I})); 
} (flatpickr_min));

var flatpickr_minExports = flatpickr_min.exports;
var flatpickr = /*@__PURE__*/getDefaultExportFromCjs(flatpickr_minExports);

const circle = `
  <svg class="date-svg circle" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle shape-rendering="geometricPrecision" class="outer-stroke" cx="18" cy="18" r="17" fill="#0047BB" stroke="#212121" stroke-width="1"/>
    <path shape-rendering="geometricPrecision" class="shape" d="M34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2C26.8366 2 34 9.16344 34 18Z" fill="#62AFE5"/>
    <path shape-rendering="geometricPrecision" class="inner-stroke" fill-rule="evenodd" clip-rule="evenodd" d="M18 2.5C9.43959 2.5 2.5 9.43959 2.5 18C2.5 26.5604 9.43959 33.5 18 33.5C26.5604 33.5 33.5 26.5604 33.5 18C33.5 9.43959 26.5604 2.5 18 2.5ZM1.5 18C1.5 8.8873 8.8873 1.5 18 1.5C27.1127 1.5 34.5 8.8873 34.5 18C34.5 27.1127 27.1127 34.5 18 34.5C8.8873 34.5 1.5 27.1127 1.5 18Z" fill="white"/>
  </svg>
`;

const square = `
  <svg class="date-svg square" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect shape-rendering="geometricPrecision" class="outer-stroke" x="1" y="1" width="34" height="34" stroke="#212121" stroke-width="1"/>
    <path shape-rendering="geometricPrecision" class="shape" d="M2 2H34V34H2V2Z" fill="#0047BB"/>
    <path shape-rendering="geometricPrecision" class="inner-stroke" fill-rule="evenodd" clip-rule="evenodd" d="M33 3H3V33H33V3ZM2 2V34H34V2H2Z" fill="white"/>
  </svg>
`;

const diamond = `
  <svg class="date-svg diamond" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect shape-rendering="geometricPrecision" class="outer-stroke" x="22" y="2.12576" width="28" height="28" transform="rotate(45 22 2.12576)" stroke="#212121" stroke-width="1"/>
    <path shape-rendering="geometricPrecision" class="shape" d="M22 3.53998L40.3848 21.9248L22 40.3095L3.61522 21.9248L22 3.53998Z" fill="#0047BB"/>
    <path shape-rendering="geometricPrecision" class="inner-stroke" fill-rule="evenodd" clip-rule="evenodd" d="M38.9706 21.9248L22 4.95419L5.02944 21.9248L22 38.8953L38.9706 21.9248ZM22 3.53998L3.61522 21.9248L22 40.3095L40.3848 21.9248L22 3.53998Z" fill="white"/>
  </svg>
`;

//const pentagon = `
//  <svg class="date-svg pentagon" width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
//    <path shape-rendering="geometricPrecision" class="outer-stroke" d="M18.5878 2.19098L18 1.76393L17.4122 2.19098L2.19531 13.2467L1.60752 13.6738L1.83204 14.3647L7.64438 32.2533L7.86889 32.9443H8.59544H27.4046H28.1311L28.3556 32.2533L34.168 14.3647L34.3925 13.6738L33.8047 13.2467L18.5878 2.19098Z" stroke="#8CC8E9" stroke-width="2"/>
//    <path shape-rendering="geometricPrecision" class="pentagon shape" d="M18 3L33.2169 14.0557L27.4045 31.9443H8.59542L2.78308 14.0557L18 3Z" fill="#0047BB"/>
//    <path shape-rendering="geometricPrecision" class="inner-stroke" fill-rule="evenodd" clip-rule="evenodd" d="M18 4.23607L3.95865 14.4377L9.32196 30.9443H26.678L32.0413 14.4377L18 4.23607ZM33.2169 14.0557L18 3L2.78308 14.0557L8.59542 31.9443H27.4045L33.2169 14.0557Z" fill="white"/>
//  </svg>
//`;


var SHAPES = {
  circle,
  diamond,
  //pentagon,
  square,
};

const NOOP = () => {};

// mm/dd/yyyy formatter
const DateFormatter = new Intl.DateTimeFormat('en-US', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});


/**
 * Convert "Enter" keypress into a "click"
 *
 * @private
 * @param {Event} evt - 'keydown' event
 * @fires {Event} - emits a "click" event if the Enter key was pressed
 */
function clickOnEnter(evt) {
  if (evt.key === 'Enter') {
    let event = new Event('click', { bubbles: true });
    evt.target.dispatchEvent(event);
  }
}

/**
 * Computes the default min/max date range for a date picker.
 *
 * @return {string[]} - 1st: mm/dd/yyyy formatted min date
 *                      2nd: mm/dd/yyyy formatted max date
 */
function getDefaultDateRange() {
  let result = [];
  let now = new Date();
  let dYear = 15;

  let min = new Date(now);
  min.setFullYear(min.getFullYear() - dYear);
  result.push(DateFormatter.format(min));

  let max = new Date(now);
  max.setFullYear(max.getFullYear() + dYear);
  result.push(DateFormatter.format(max));

  return result
}

/**
 * Checks if element or its parent is disabled.
 *
 * @param {Element} el
 * @returns {boolean}
 */
function isDisabled(el) {
  let _conditions = [
    el.disabled,
    el.parentElement?.disabled,
    el.matches('.flatpickr-disabled, :disabled'),
    el.parentElement?.matches('.flatpickr-disabled, :disabled'),
  ];
  // returns true if ANY above condition is truthy
  return _conditions.some(result => !!result)
}


/**
 * Checks if the given date is the 1st
 *
 * @param {Date} date
 * @returns {boolean}
 */
function isFirstOfMonth(date) {
  return (date.getDate() === 1)
}


/**
 * Checks if the given date is the last day of the month.
 *
 * @param {Date} date
 * @returns {boolean}
 */
function isLastOfMonth(date) {
  // clone to avoid in-place changes to original Date
  let dayAfter = new Date(date);
  // compute day after in-place by adding 1 day
  dayAfter.setDate(dayAfter.getDate() + 1);

  // if date is the end of the month, adding 1 day will always return
  // the 1st of the NEXT month
  return (dayAfter.getDate() === 1)
}


/**
 * Converts a comma-separated list of date strings into an array of
 * Unix timestamps, which can then be compared against Date.prototype.getTime()
 *
 * @param {string} dates - comma-separated list of date strings
 * @returns {Number[]} - array of Unix timestamps
 */
function parseDatesAsTimestamps(dates) {
  let result = [];

  if (dates.trim() !== '') {
    let dateStrings = dates.split(',');

    for (const str of dateStrings) {
      let parsed = Date.parse(str.trim());

      // `parsed` will be falsey (NaN) if `str` is an invalid date string,
      // otherwise it'll be truthy (positive integer)
      if (parsed) {
        result.push(parsed);
      }
    }
  }

  return result
}

/**
 * @typedef {object} PickerOptions
 */
const DEFAULTS$5 = {
  // default Bolt configs
  specialDates: [
    // { label, dates, shape }
  ],

  // default flatpickr configs
  allowInput: false,
  allowInvalidPreload: true,
  ariaDateFormat: 'l, F J, Y',
  clickOpens: false,
  dateFormat: 'm/d/Y',
  locale: {
    weekdays: {
      shorthand: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      longhand: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }
  },
  onChange: NOOP,
  onDayCreate: NOOP,
  onMonthChange: NOOP,
  onYearChange: NOOP,
  onReady: NOOP,
  onValueUpdate: NOOP,
  position: 'auto right',
};

const DropdownIcon = `<bolt-icon decorative fixed name="caret-down" size="sm"></bolt-icon>`;


/**
 * DatePicker constructor function
 *
 * @param {Element} el - element to attach the picker
 * @param {PickerOptions} [options] - picker configuration options
 */
function DatePicker(el, options={}) {
  // normalize options with default values (including NOOP'ed callbacks)
  let opts = {
    ...DEFAULTS$5,
    ...options,
  };

  let legend = `
    <div class="bolt-date-picker-wc" aria-hidden="true">
      <div class="bolt-date-picker-wc--legend-menu ">
        <span class="bolt-date-picker-wc--legend-menu-icon today">${SHAPES.circle}</span>
        <span>&#8211;</span>
        <span class="bolt-date-picker-wc--legend-menu-text">Today</span>
      </div>
      ${opts.specialDates.map(({shape, label}) => {
        return `
          <div class="bolt-date-picker-wc--legend-menu">
            <span class="bolt-date-picker-wc--legend-menu-icon">${shape}</span>
            <span>&#8211;</span>
            <span class="bolt-date-picker-wc--legend-menu-text">${label}</span>
          </div>
        `
      }).join('')}
    </div>
  `;

  let importantDates = [];
  for (const datum of opts.specialDates) {
    let dates = parseDatesAsTimestamps(datum.dates);
    importantDates = importantDates.concat(dates);
  }

  let config = {
    ...opts,
    /*
     * one-time initialization logic
     * use this to apply customizations to flatpickr nav
     */
    onReady: function(selectedDates, dateStr, instance) {
      let { calendarContainer, element } = instance;

      _customizeNav(instance);

      // apply ID to the calendar container, based on `<bolt-date-picker>` ID
      calendarContainer.id = `${element.id}-container`;
      // (a11y) Allows accessibility users to navigate the calendar properly
      calendarContainer.setAttribute('role', 'application');

      // Inject the legend to the end/foot of the datepicker
      calendarContainer.insertAdjacentHTML('beforeend', legend);

      _update(instance);
      opts.onReady.apply(null, arguments);
    },
    /**
     * Called every time a day element is generated by flatpickr.
     * This happens 42 times per `redraw()` (6 weeks = 42 days).
     * - use this function to customize how each day element is presented
     *
     * NOTE: day elements have NOT been attached to the DOM at this point
     */
    onDayCreate: function(selectedDates, dateStr, instance, dayElem) {
      let selectedTimes = selectedDates.map(d => d.getTime());
      let labels = [];
      let { currentMonth } = instance;
      let { minDate, maxDate } = instance.config;
      let { dateObj } = dayElem;
      let time = dateObj.getTime();

      // (a11y) add [role='link'] on each day element for screenreader compatibility
      dayElem.setAttribute('role', 'link');
      // (a11y) Each day should be focusable (by default)
      dayElem.tabIndex = 0;

      // Set [data-time] to timestamp for given day element.
      // This is used to detect presence of the selected date,
      // because instance.selectedDateElem cannot be trusted.
      dayElem.dataset.time = time;

      if (dateObj.getMonth() === currentMonth) {
        dayElem.classList.add('current-month-day');
      }
      if (time === minDate.getTime()) {
        dayElem.classList.add('min-date');
      }
      if (time === maxDate.getTime()) {
        dayElem.classList.add('max-date');
      }
      if (isFirstOfMonth(dateObj)) {
        dayElem.classList.add('start-of-month');
      }
      if (isLastOfMonth(dateObj)) {
        dayElem.classList.add('end-of-month');
      }


      if (importantDates.includes(time)) {
        dayElem.classList.add('important-date');

        // Applies additional label, class, and shape for each important date type.
        for (const datum of opts.specialDates) {
          let timestamps = parseDatesAsTimestamps(datum.dates);
          if (timestamps.includes(time)) {
            labels.push(datum.label);
            dayElem.insertAdjacentHTML('beforeend', datum.shape);
          }
        }
      } else {
        // regular dates get circle shape
        dayElem.insertAdjacentHTML('beforeend', SHAPES.circle);
      }

      // if out-of-month day
      if (dayElem.matches('.prevMonthDay, .nextMonthDay')) {
        // remove from tab order
        dayElem.tabIndex = -1;
        // ensure it is not available for selection
        dayElem.setAttribute('aria-disabled', true);
      }


      if (isDisabled(dayElem)) {
        // (a11y) Disabled days should not be available for selection
        dayElem.setAttribute('aria-disabled', true);
      }


      if (selectedTimes.includes(time)) {
        labels.push('selected');
      }
      if (isDisabled(dayElem)) {
        // overrides all other labels
        labels = ['unavailable'];
      }
      // (a11y) update ARIA label to communicate selection
      if (labels.length) {
        let ariaLabel = dayElem.getAttribute('aria-label');
        dayElem.setAttribute('aria-label', `${ariaLabel} is ${labels.join(' and ')}`);
      }

      opts.onDayCreate.apply(null, arguments);
    },
    onOpen: function(selectedDates, dateStr, instance) {
      setTimeout(() => {
        // focus AFTER opening
        _focusBestDate(instance);
      });
      opts.onOpen.apply(null, arguments);
    },
    onChange: function(selectedDates, dateStr, instance) {
      _update(instance);
      opts.onChange.apply(null, arguments);
    },
    onMonthChange: function(selectedDates, dateStr, instance) {
      _update(instance);
      opts.onMonthChange.apply(null, arguments);
    },
    onYearChange: function(selectedDates, dateStr, instance) {
      _update(instance);
      opts.onYearChange.apply(null, arguments);
    },
    onValueUpdate: function(selectedDates, dateStr, instance) {
      _update(instance);
      opts.onValueUpdate.apply(null, arguments);
    },
  };

  let datePicker = flatpickr(el, config);

  return datePicker
}



/* ---------------------------------------- *\
 * Local utility functions
\* ---------------------------------------- */

/**
 * Apply Bolt customizations to the picker nav.
 *
 * - Replace year <input> with <select>
 * - Rearrange month nav links
 * - Apply custom keyboard event bindings for navigating from nav to calendar
 *
 * @private
 * @param {object} instance - flatpickr instance
 */
function _customizeNav(instance) {
  _customizeYearNav(instance);
  _customizeNavInteraction(instance);

  // rearrange prev/next nav controls
  instance.monthNav.appendChild(instance.prevMonthNav);
  instance.monthNav.appendChild(instance.nextMonthNav);

  // add icon to make "month" dropdown look like a `<bolt-select>`
  instance.monthsDropdownContainer.insertAdjacentHTML('afterend', DropdownIcon);
}

/**
 * (a11y) Controls Nav Interaction
 *
 * @private
 * @param {object} instance - flatpickr instance
 */
function _customizeNavInteraction(instance) {

  let _monthDropdown = instance.monthsDropdownContainer;
  let _yearDropdown = instance.monthNav.querySelector('.bolt-year-dropdown');
  let _prevMonthLink = instance.monthNav.querySelector('.prev-arrow-link');
  let _nextMonthLink = instance.monthNav.querySelector('.next-arrow-link');

  let _navElements = [
    _monthDropdown,
    _yearDropdown,
    _prevMonthLink,
    _nextMonthLink,
  ];

  let _expectedKeys = [
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'Tab',
  ];
  _navElements.forEach(_navElement => {
    _navElement.addEventListener('keydown', evt => {
      if (_expectedKeys.includes(evt.key)) {
        switch(evt.key) {
          case 'ArrowLeft':
          case 'ArrowRight':
            // prevent changing <select> value,
            // which triggers a redraw(),
            // which moves focus into the calendar
            evt.preventDefault();
            // fall through...
          case 'ArrowUp':
          case 'ArrowDown':
            // prevent flatpickr event handling on the container
            // from moving focus into the calendar
            evt.stopPropagation();
            break

          case 'Tab':
            // Compute which nav elements are enabled on EACH 'Tab' event,
            // because navigating between months may enable/disable either of the
            // prev/next nav links, which will modify the expected behavior.
            let _enabledNavElements = _navElements.filter(el => !isDisabled(el));

            if (evt.shiftKey) { // Tab backward...

              // if we're at the START of the enabled nav elements
              if (_navElement === _enabledNavElements.at(0)) {
                evt.preventDefault();
                _focusBestDate(instance);
              }
            } else { // Tab forward...

              // if we're at the END of the enabled nav elements
              if (_navElement === _enabledNavElements.at(-1)) {
                evt.preventDefault();
                _focusBestDate(instance);
              }
            }
            break
        }
      }
    });
  });

  // Accessibility:
  //     Hitting Enter button simulates click since the
  //     datepicker elements are not clickable by nature.
  instance.prevMonthNav.addEventListener('keydown', clickOnEnter);
  instance.nextMonthNav.addEventListener('keydown', clickOnEnter);

  // mouse "focus" tweak
  _removeFocusOnArrowClick(instance);
}

/**
 * Convert flatpickr year to dropdown
 *
 * @private
 * @param {object} instance - flatpickr instance
 */
function _customizeYearNav(instance) {
  let { minDate, maxDate } = instance.config;
  const _minYear = minDate.getFullYear();
  const _maxYear = maxDate.getFullYear();

  const _container = instance.currentYearElement.parentElement;

  // Hide all original UI elements
  for (const child of _container.children) {
    child.hidden = true;
    child.style.display = 'none';
    child.setAttribute('aria-hidden', true);
  }

  // ----- Build new 'year' input ----- //

  // create <select>
  const selYear = document.createElement('select');
  selYear.tabIndex = 0;
  selYear.classList.add('bolt-year-dropdown');
  selYear.setAttribute('aria-label', 'year');

  // add options
  for (let val = _minYear; val <= _maxYear; val++) {
    const option = document.createElement('option');
    option.value = val;
    option.text = val;
    selYear.appendChild(option);
  }

  // initialize value from flatpickr instance
  selYear.value = instance.currentYear;

  // react to changes
  selYear.addEventListener('change', (evt) => {
    // this will trigger `onYearChange()` hook
    instance.changeYear(Number(evt.target.value));
  });

  // add to container
  // FIXME: (CSS?) icon needs to be added BEFORE the <select>, to apply proper styles
  _container.insertAdjacentHTML('beforeend', DropdownIcon);
  _container.appendChild(selYear);
}

/**
 * Identify and focus the optimum date when opening picker
 * or when displayed calendar month changes.
 *
 * @private
 * @param {object} instance - flatpickr instance
 */
function _focusBestDate(instance) {
  let {
    currentMonth,
    currentYear,
    days,
    isOpen,
    now,
  } = instance;
  let { minDate, maxDate } = instance.config;
  let _day;

  if (!isOpen) {
    return
  }

  let selectedDateElem = _getSelectedDateElement(instance);

  if (selectedDateElem && !isDisabled(selectedDateElem)) {
    // if "selected" day is present and enabled...
    _day = selectedDateElem;
  } else if (
    currentMonth === now.getMonth() &&
    currentYear === now.getFullYear()
  ) {
    // if "today" is present in current month...
    if (minDate && now < minDate) {
      // if "today" is before the configured min date...
      _day = days.querySelector('.min-date');
    } else if (maxDate && now > maxDate) {
      // if "today" is after configured max date...
      _day = days.querySelector('.max-date');
    } else {
      // "today" is within configured min/max range...
      _day = days.querySelector('.today');
    }
  } else {
    // target first enabled day...
    _day = days.querySelector('.current-month-day:not(.flatpickr-disabled)');
  }

  if (_day) {
    _day.focus();
  }
}

/**
 * @private
 * @param {object} instance - flatpickr instance
 * @returns {Element[]}
 */
function _getEnabledDayElements(instance) {
  let _list = instance.days.querySelectorAll('.current-month-day:not(.flatpickr-disabled)');

  let result = Array.from(_list);

  return result
}

/**
 * Handle navigating calendar via keyboard.
 *
 * Allow user to:
 *   - arrow up to previous week/month
 *   - arrow down to next week/month
 *   - arrow left to previous day/week/month
 *   - arrow right to next day/week/month
 *
 * @private
 * @param {object} instance - flatpickr instance
 */
function _handleDayEvents(instance) {
  let currentMonthDays = instance
    .days
    .querySelectorAll('.current-month-day:not(.flatpickr-disabled)');

  for (let i = 0; i < currentMonthDays.length; i++) {
    const dayElem = currentMonthDays[i];

    dayElem.addEventListener('keydown', (evt) => {
      let delta = 0;
      // day to focus, on completion
      let _targetDay;
      // remember current month #, for comparison when changing months
      let _oldMonth = instance.currentMonth;

      switch(evt.key) {
        /*
         * Navigating FORWARD
         *
         * Accessibility:
         *   - Allow user to go to next month on the last day of the month
         *   - Allow user to go to next week
         *
         * Navigating forward:
         *   - should never progress backward (e.g., loop)
         *   - should never progress beyond the configured max date
         */
        case 'ArrowRight': // +1d
        case 'ArrowDown':  // +1w (+7d)
          evt.preventDefault();
          evt.stopImmediatePropagation();

          delta = (event.key === 'ArrowRight' ? 1 : 7);

          // don't progress beyond max date
          if (dayElem.matches('.max-date')) {
            return
          }

          // naive target
          _targetDay = currentMonthDays[i + delta];

          if (_targetDay) {
            // --- target in-range ---

            // if targeted date is disabled
            if (isDisabled(_targetDay)) {
              // target LAST enabled date
              _targetDay = _getEnabledDayElements(instance).at(-1);
            }
          } else {
            // --- target out of range ---

            // request +1 month (no guarantee)
            instance.changeMonth(+1);

            _targetDay = _getEnabledDayElements(instance).at(
              _oldMonth !== instance.currentMonth // did month change?
                ? 0  // target FIRST enabled date
                : -1 // target LAST enabled date
            );
          }

          _targetDay.focus();
          break


        /*
         * Navigating BACKWARD
         *
         * Accessibility:
         *   - Allow user to go to prev month on the first day of the current month
         *   - Allow user to go to prev week
         *
         * Navigating backward:
         *   - should never progress forward (e.g., loop)
         *   - should never progress below the configured min date
         */
        case 'ArrowLeft': // -1d
        case 'ArrowUp':   // -1w (-7d)
          evt.preventDefault();
          evt.stopImmediatePropagation();

          delta = (evt.key === 'ArrowLeft' ? 1 : 7);

          // don't progress before configured min date
          if (dayElem.matches('.min-date')) {
            return
          }

          // naive target
          _targetDay = currentMonthDays[i - delta];

          if (_targetDay) {
            // --- target in-range ---

            // if targeted date is disabled
            if (isDisabled(_targetDay)) {
              // target FIRST enabled date
              _targetDay = _getEnabledDayElements(instance).at(0);
            }
          } else {
            // --- target out of range ---

            // request -1 month (no guarantee)
            instance.changeMonth(-1);

            _targetDay = _getEnabledDayElements(instance).at(
              _oldMonth !== instance.currentMonth // did month change?
                ? -1 // target LAST enabled date
                : 0  // target FIRST enabled date
            );
          }

          _targetDay.focus();
          break


        /*
         * Tabbing into picker nav
         */
        case 'Tab':
          evt.preventDefault();
          evt.stopImmediatePropagation();

          let focusableNavElements = [
            // Month Dropdown (<select>)
            instance.monthsDropdownContainer,
            // Year Dropdown (<select>)
            instance.monthNav.querySelector('.bolt-year-dropdown'),
            // Prev Month Link (<a>)
            instance.monthNav.querySelector('.prev-arrow-link'),
            // Next Month Link (<a>)
            instance.monthNav.querySelector('.next-arrow-link'),
          ];

          if (evt.shiftKey) {
            focusableNavElements.reverse();
          }

          let _targetElement;
          // get FIRST enabled element
          for (const el of focusableNavElements) {
            if (_targetElement || isDisabled(el)) {
              continue
            }
            _targetElement = el;
          }

          _targetElement.focus();
          break
      }
    });
  }
}

/**
 * Accurately identifies the "day" element corresponding to the selected date.
 *
 * The flatpickr.selectedDateElem prop is not updated upon navigating to a
 * different month, nor is it reset when clearing out the selected date. As such,
 * we cannot rely on this property for logical conditions.  This function aims to
 * provide more accurate identification of a `selectedDateElem`.
 *
 * @private
 * @param {object} instance - flatpickr instance
 * @return {Element?}
 */
function _getSelectedDateElement({ days, selectedDates }) {
  if (selectedDates.length === 0) {
    return
  }

  // Bolt date picker only allows selection of a single date,
  // so we can evaluate against the first item in `instance.selectedDates`
  // to determine if the associated date element is present in the
  // currently-visible calendary month
  let selectedDate = selectedDates[0];

  // we only care about the day element whose [data-time] attr matches the
  // time value of the selectedDate
  let _selector = `.flatpickr-day[data-time="${selectedDate.getTime()}"]`;

  // This will either return an Element or null
  return days.querySelector(_selector)
}

/**
 * Remove focus on month nav links, when they're clicked.
 *
 * @private
 * @param {object} instance - flatpickr instance
 */
function _removeFocusOnArrowClick(instance) {
  let _links = [
    instance.monthNav.querySelector('.prev-arrow-link'),
    instance.monthNav.querySelector('.next-arrow-link'),
  ];

  _links.forEach(_link => {
    _link.tabIndex = 0;
    _link.addEventListener('click', e => {
      if (e && e.x && e.y && e.detail) {
        e.currentTarget.blur();
      }
    });
  });
}

/**
 * update/sync logic
 * meant to be called once per `redraw()`
 *
 * @private
 * @param {object} instance - flatpickr instance
 */
function _update(instance) {
  _updateNav(instance);
  _handleDayEvents(instance);
  _focusBestDate(instance);
}

/**
 * Synchronize nav elements with flatpickr state
 *
 * @private
 * @param {object} instance - flatpickr instance
 */
function _updateNav(instance) {
  let {
    currentYear,
    currentMonth,
    monthNav,
  } = instance;

  let _monthDropdown = instance.monthsDropdownContainer;
  let _yearDropdown = monthNav.querySelector('.bolt-year-dropdown');
  let _prevMonthLink = monthNav.querySelector('.prev-arrow-link');
  let _nextMonthLink = monthNav.querySelector('.next-arrow-link');

  // sync custom year dropdown with picker state
  _yearDropdown.value = `${currentYear}`;

  // (a11y) update "prev month" link ARIA...
  let prevDate = new Date(currentYear, currentMonth - 1, 1);
  let prevYear = prevDate.getFullYear();
  let prevMonth = prevDate.toLocaleString(navigator.language, { month: 'long' });
  _prevMonthLink.setAttribute('aria-label', `Previous month, ${prevMonth} ${prevYear}`);

  // (a11y) update "next month" link ARIA...
  let nextDate = new Date(currentYear, currentMonth + 1, 1);
  let nextYear = nextDate.getFullYear();
  let nextMonth = nextDate.toLocaleString(navigator.language, { month: 'long' });
  _nextMonthLink.setAttribute('aria-label', `Next month, ${nextMonth} ${nextYear}`);

  // (a11y) update "disabled" elements ARIA
  let disabledElements = monthNav.querySelectorAll('.flatpickr-disabled');
  for (const el of disabledElements) {
    let ariaLabel = el.getAttribute('aria-label');
    if (ariaLabel && !ariaLabel.endsWith(' is unavailable')) {
      el.setAttribute('aria-label', `${ariaLabel} is unavailable`);
    }
  }

  // (a11y) ensure nav items are navigable via keyboard
  //
  // A timeout is needed, otherwise flatpickr logic seems to override
  // some of these values in certain scenarios, after this code has already run.
  setTimeout(() => {
    _yearDropdown.tabIndex = 0;
    _monthDropdown.tabIndex = 0;
    _prevMonthLink.tabIndex = 0;
    _nextMonthLink.tabIndex = 0;
  });
}

const DATEFORMAT = 'm/d/Y';

/**
 * Date pickers allow users to use a calendar to select a month, day and year.
 *
 * The `<bolt-date-picker>` element wraps the `<bolt-textfield>` element in order to attach a date picker.
 *
 * @class BoltDatePickerElement
 * @element BoltDatePickerElement
 * @extends {BoltTextfieldElement}
 * @tagname bolt-date-picker
 * @since 3.2.0
 *
 * @property {String} datesone - (Optional) An array of dates separated by commas in the format of `mm/dd/yyyy` or the `"today"` keyword. Support is included for up to three important date types.
 * @property {String} datesonelabel - (Optional) The label used to describe the first important date type (e.g., "Bill Due Date").
 * @property {String} datestwo - (Optional) An array of dates separated by commas in the format of `mm/dd/yyyy` or the `"today"` keyword. Support is included for up to three important date types.
 * @property {String} datestwolabel - (Optional) The label used to describe the second important date type (e.g., "Bill Scheduled").
 * @property {String} datesthree - (Optional) (Optional) An array of dates separated by commas in the format of `mm/dd/yyyy` or the `"today"` keyword. Support is included for up to three important date types.
 * @property {String} datesthreelabel - (Optional) The label used to describe the third important date type (e.g., "Holiday").
 * @property {String} disableddates - (Optional) A list of comma-separated dates, each with the format of `mm/dd/yyyy` or the `"today"` keyword.
 * @property {String} pickerposition - (Optional) Where the calendar is rendered relative to the input vertically and horizontally. In the format of "[vertical] [horizontal]".
 * - Vertical can be `auto`, `above` or `below` (required).
 * - Horizontal can be `left`, `center` or `right`.
 * - Default is `"auto right"`
 *
 * @attribute {String} label - (Required) The label text for the input. Passed to underlying {@link https://bolt.nwie.net/web/components/textfield|bolt-textfield} element.
 * @attribute {String} error - (Optional) The error message to display after the input. Passed to underlying {@link https://bolt.nwie.net/web/components/textfield|bolt-textfield} element.
 * @attribute {Boolean} required - (Optional) If present, the field is required. Fields that are not required will show `"(optional)"`. Passed to underlying {@link https://bolt.nwie.net/web/components/textfield|bolt-textfield} element.
 * @attribute {String} instructionaltext - (Optional) The instructional text to display below the input. Default is `'Use this format: MM/DD/YYYY'`. Passed to underlying {@link https://bolt.nwie.net/web/components/textfield|bolt-textfield} element.
 * @attribute {String} datatestinput - (Optional) Property to configure the `data-test` value on the underlying `<input>` element. Default is `input`. Passed to underlying {@link https://bolt.nwie.net/web/components/textfield|bolt-textfield} element.
 * @attribute {Boolean} disabled - (Optional) If present, disables rendered interactive elements. Passed to underlying {@link https://bolt.nwie.net/web/components/textfield|bolt-textfield} element.
 * @attribute {String} min - (Optional) The earliest date that can be viewed. Format: `MM/DD/YYYY` or the `"today"` keyword. Passed to underlying {@link https://bolt.nwie.net/web/components/textfield|bolt-textfield} element.
 * @attribute {String} max - (Optional) The latest date that can be viewed. Format: `MM/DD/YYYY` or the `"today"` keyword. Passed to underlying {@link https://bolt.nwie.net/web/components/textfield|bolt-textfield} element.
 * @attribute {Boolean} invalid - (Optional) If present, the field appears invalid. Passed to underlying {@link https://bolt.nwie.net/web/components/textfield|bolt-textfield} element.
 *
 * @slot help - Uses the {@link BoltContextualHelp} component
 *
 * @event {CustomEvent} bolt-icon-click - Emitted when the calendar icon is clicked to toggle the date picker.
 *
 * @see https://bolt.nwie.net/web/components/date-picker
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 */
class BoltDatePickerElement extends BoltTextfieldElement {
  /**
   * The component's tag name, used for Custom Element registration
   * @readonly
   * @type {String}
   * @static
   */
  static get is() {
    return 'bolt-date-picker';
  }

  /**
   * LitElement properties/attributes definition.
   * Inherits properties from BoltTextfieldElement and adds date picker-specific properties
   * @readonly
   * @type {Object}
   * @static
   */
  static get properties() {
    return {
      // Textfield props
      ...super.properties,

      // Date Picker props
      allowinput: {type: Boolean, Reflect: true},
      datesone: {type: String }, // Important dates one
      datesonelabel: { type: String }, // Important dates legend label
      datesthree: { type: String }, // Important dates three
      datesthreelabel: { type: String }, // Important dates three legend label
      datestwo: { type: String }, // Important dates two
      datestwolabel: { type: String }, // Important dates two legend label
      disableddates: { type: String }, // All dates that should be disabled/not available
      pickerposition: { type: String }, // Date picker position relative to the input
    }
  }

  /**
   * Creates an instance of BoltDatePickerElement
   * Initialize public and private properties with default values
   *
   * @constructor
   */
  constructor() {
    super();

    // Textfield default configs
    /** @private */
    this.iconalt = 'Calendar';
    /** @private */
    this.iconname = 'calendar';
    this.instructionaltext = 'Use this format: MM/DD/YYYY';

    // Date Picker default configs
    /** @private */
    this.allowinput = false;
    this.datesone = '';
    this.datesonelabel = '';
    this.datesthree = '';
    this.datesthreelabel = '';
    this.datestwo = '';
    this.datestwolabel = '';
    this.disableddates = '';
    this.pickerposition = 'auto right';

    // private state
    /** @private {Object} - Reference to the initialized DatePicker instance */
    this._datePicker = null;
  }

  /**
   * Lifecycle method called when the element is connected to the DOM
   * Ensures the component has a unique ID and calls parent's connection logic
   *
   * @override
   * @protected
   */
  $onConnect() {
    super.$onConnect();

    if (!this.id) {
      this.id = this.generateId();
    }
  }

  /**
   * Lifecycle method called when the element is disconnected from the DOM
   * Cleans up event listeners and destroys the date picker instance
   *
   * @override
   * @protected
   */
  $onDisconnect() {
    this.removeEventListener('bolt-icon-click', this._onBoltIconClick);
    this._datePicker.destroy();

    super.$onDisconnect();
  }

  /**
   * Lifecycle method called after the element's properties are updated
   * Updates the underlying date picker instance when relevant properties change
   * and adjusts the positioning anchor width when inputsize is set
   *
   * @param {Map} changedProperties - Map of changed properties with their old values
   * @override
   * @protected
   */
  updated(changedProperties){
    super.updated(changedProperties);
    let datePicker = this._datePicker;

    changedProperties.forEach( (oldValue, propName) => {
      // Update the datepicker when the props change
      switch (propName) {
        case 'min':
          if (this.min && datePicker) {
            datePicker.set('minDate', this.min);
          }
          break;
        case 'max':
          if (this.max && datePicker) {
            datePicker.set('maxDate', this.max);
          }
          break;
        case 'value':
          if (this.value && datePicker && this.allowinput) {
            datePicker.setDate(this.value);
          }
          break;
      }
    });

    if (this.inputsize) {
      setTimeout(() => {
        const thisInputWidth = this.shadowRoot.querySelector('.bolt-textfield-wc--input-container').offsetWidth;
        let _anchor = this.querySelector('div');
        _anchor.setAttribute('style', `width: ${thisInputWidth}px;`);
      });
    }
  }

  /**
   * Generates a unique ID for the date picker component
   * @overrides BoltTextfield#generateId()
   * @returns {String} A unique ID string for component identification
   * @protected
   */
  generateId() {
    return 'bolt-date-picker--' + Math.floor(Math.random() * 10000000);
  }

  /**
   * Gets formatted special dates configuration for the date picker
   * Maps the component's date properties to the format expected by the underlying DatePicker
   * @private
   * @returns {Array} Array of special date objects with labels, dates, and shapes
   */
  get _specialDates() {
    let results = [];

    if (this.datesone) {
      results.push({
        label: this.datesonelabel,
        dates: this.datesone,
        shape: SHAPES.circle,
      });
    }

    if (this.datestwo) {
      results.push({
        label: this.datestwolabel,
        dates: this.datestwo,
        shape: SHAPES.square,
      });
    }

    if (this.datesthree) {
      results.push({
        label: this.datesthreelabel,
        dates: this.datesthree,
        shape: SHAPES.diamond,
      });
    }

    return results;
  }

  /**
   * Lifecycle method called after the first update
   * Initializes the underlying DatePicker instance with configuration options
   * and sets up event listeners for icon clicks
   *
   * @param {Map} changedProperties - Properties that changed in this update
   * @override
   * @private
   */
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    // Access to datepicker popup
    let boltCalendar = this;

    // Set a default date for min/max if none is provided
    let [defaultMin, defaultMax] = getDefaultDateRange();

    let _positionAnchor = document.createElement('div');
    _positionAnchor.setAttribute('slot', 'afterinput');
    this.appendChild(_positionAnchor);

    // Initializes the date picker
    let opts = {
      allowInput: this.allowinput,
      specialDates: this._specialDates,
      positionElement: _positionAnchor,
      dateFormat: DATEFORMAT,
      position: this.pickerposition,
      disable: this.disableddates ? this.disableddates.split(',') : ['01/01/1899'],
      minDate: this.min ? this.min : defaultMin,
      maxDate: this.max ? this.max : defaultMax,
      prevArrow: `
        <a href="javascript:void(0)" aria-label="Previous month" class="prev-arrow-link">
          <bolt-icon fixed name="chevron-left" decorative></bolt-icon>
        </a>
      `,
      nextArrow: `
        <a href="javascript:void(0)" aria-label="Next month" class="next-arrow-link">
          <bolt-icon fixed name="chevron-right" decorative></bolt-icon>
        </a>
      `,
      // Fires events when the the datepicker dialog is closed
      onClose: (selectedDates, dateStr, instance) => {
        // Switch the icon to calendar when the picker is closed
        boltCalendar.iconname = 'calendar';

        // Ensures the datepicker doesn't close then open
        setTimeout(() => {
          boltCalendar.style.pointerEvents = 'auto';
          boltCalendar.style.touchAction = 'auto';
        }, 500);

        this.focus();
      },
      // Fires events when the datepicker dialog is opened
      onOpen: (selectedDates, dateStr, instance) => {
        boltCalendar.iconname = 'xmark';
      },
    };
    let datePicker = DatePicker(boltCalendar, opts);

    // memoize for later reuse
    this._datePicker = datePicker;

    // Datepicker listens for the bolt icon click and toggles opening
    // (removed in `disconnectedCallback()`)
    boltCalendar.addEventListener('bolt-icon-click', this._onBoltIconClick);
  }

  /**
   * Handles click events on the bolt icon to toggle the date picker
   * Temporarily disables pointer events to prevent rapid toggling on mobile devices
   *
   * @param {Event} e - The click event object
   * @private
   */
  _onBoltIconClick(e) {
    this._datePicker.toggle();

    // Mobile click closes then opens: Disables click/tap on mobile when picker is open
    e.target.style.pointerEvents = 'none';
    e.target.style.touchAction = 'none';
  }
}

/**
 * This module exports the date picker component and its initialization function.
 * Date pickers allow users to use a calendar to select a month, day and year.
 *
 * @module bolt-date-picker
 * @since 3.2.0
 *
 * @see {@link ./elements/bolt-date-picker|BoltDatePickerElement}
 */


/**
 * Initializes the date picker component by registering it as a custom element
 *
 * This function:
 * 1. Initializes dependencies (FieldError, Icon, and WaitingIndicator components)
 * 2. Registers the BoltDatePickerElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$j() {
  // Upstream
  await initialize$w();
  await initialize$y();
  await initialize$u();

  // Local
  BoltDatePickerElement.$define();
}

var index$i = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltDatePickerElement: BoltDatePickerElement,
  initialize: initialize$j
});

var CSS$m = ":host, :host * {\n  /* css-core:utils/reset.component */\n  border: 0;\n  font: inherit;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  vertical-align: baseline;\n}\n\n:host {\n  color: var(--bolt-context-outlineVariant);\n  display: block;\n  margin: auto;\n}\n\n:host([alignment=left]) {\n  margin-left: 0;\n}\n\n:host([alignment=right]) {\n  margin-right: 0;\n}\n\n#root {\n  display: block;\n  height: 1px;\n  background-color: currentColor;\n}";

/**
 * Dividers provide subtle visual delineation between groups of content.
 *
 * The `<bolt-divider>` component provides a horizontal rule element that can be used to separate
 * content sections within a page or component. It supports customizable alignment and width options.
 *
 * @class BoltDividerElement
 * @element BoltDividerElement
 * @extends {BoltElement}
 * @tagname bolt-divider
 * @since 7.1.0
 *
 * @property {String} alignment - (Optional) Adjusts horizontal alignment of divider. Default is `left`. Possible values: [`left`, `center`, `right`]
 * @property {String} width - (Optional) Adjusts width of divider. Takes any CSS unit: `px`, `%,` `em` etc.
 *
 * @see https://bolt.nwie.net/web/components/divider
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 */
class BoltDividerElement extends BoltElement {
    /**
     * The component's tag name, used for Custom Element registration
     * @readonly
     * @type {String}
     * @static
     */
    static get is() {
        return 'bolt-divider';
    }

    /**
     * Getter for component's CSS styles
     * @readonly
     * @type {CSSResult}
     * @static
     */
    static get styles() {
        return CSS$m;
    }

    /**
     * LitElement properties/attributes definition.
     * Defines all the reactive properties that can be set as attributes or properties
     * @readonly
     * @type {Object}
     * @static
     */
    static get properties() {
        return {
            alignment: {type: String, reflect: true, default: 'left'},
            width: {type: String},
        }
    }

    /**
     * Lifecycle method called after the element's properties are updated
     * Applies the custom width style when the width property changes
     *
     * @param {Map} props - Map of changed properties with their old values
     * @override
     * @protected
     */
    updated(props){
        if(props.has('width')){
            this.style.width = this.width;
        }
    }

    /**
     * Renders the component's HTML template
     * Creates a horizontal rule element as the divider
     *
     * @returns {TemplateResult} The component's rendered template
     * @override
     * @protected
     */
    render() {
        return x`<hr id="root"/>`
    }
}

/**
 * This module exports the divider component and its initialization function.
 * Dividers provide subtle visual delineation between groups of content.
 *
 * @module bolt-divider
 * @since 7.1.0
 *
 * @see {@link ./elements/bolt-divider|BoltDividerElement}
 */

/**
 * Initializes the divider component by registering it as a custom element
 *
 * This function:
 * 1. Registers the BoltDividerElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$i() {
   // Upstream
   // n/a

   // Local
   BoltDividerElement.$define();
}

var index$h = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltDividerElement: BoltDividerElement,
  initialize: initialize$i
});

var CSS$l = ":host,\n:host * {\n  /* css-core:utils/reset.component */\n  border: 0;\n  font: inherit;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  vertical-align: baseline;\n}\n\n:host {\n  display: inline-block;\n}\n\n:host([color=full]) .bolt-logo-wc--color__white {\n  display: var(--bolt-theme-dark-display);\n}\n:host([color=full]) .bolt-logo-wc--color__full {\n  display: var(--bolt-theme-light-display);\n}\n\n.bolt-logo-wc__hoverable {\n  cursor: pointer;\n}\n.bolt-logo-wc__hoverable:hover img, .bolt-logo-wc__hoverable:focus img {\n  transform: scale(1.1);\n}\n@media (prefers-reduced-motion: reduce) {\n  .bolt-logo-wc__hoverable:hover img, .bolt-logo-wc__hoverable:focus img {\n    transform: none;\n  }\n}\n\n.bolt-logo-wc {\n  border: 0 !important;\n  box-sizing: border-box;\n  display: flex;\n}\n.bolt-logo-wc img {\n  display: block;\n  transition: all 350ms;\n  transform: scale(1);\n}\n.bolt-logo-wc__focus, .bolt-logo-wc:focus-visible {\n  box-shadow: 0 0 0 1px var(--bolt-theme-surface), 0 0 0 4px var(--bolt-theme-focus);\n  outline: none;\n}\n.bolt-logo-wc--size__sm.bolt-logo-wc--type__nw-horizontal {\n  height: 40px;\n  width: 136px;\n}\n.bolt-logo-wc--size__sm.bolt-logo-wc--type__nw-vertical {\n  height: 50px;\n  width: 50px;\n}\n.bolt-logo-wc--size__sm.bolt-logo-wc--type__nw-mark {\n  height: 40px;\n  width: 32px;\n}\n.bolt-logo-wc--size__md.bolt-logo-wc--type__nw-horizontal {\n  height: 60px;\n  width: 205px;\n}\n.bolt-logo-wc--size__md.bolt-logo-wc--type__nw-vertical {\n  height: 75px;\n  width: 75px;\n}\n.bolt-logo-wc--size__md.bolt-logo-wc--type__nw-mark {\n  height: 60px;\n  width: 48px;\n}\n.bolt-logo-wc--size__lg.bolt-logo-wc--type__nw-horizontal {\n  height: 100px;\n  width: 341px;\n}\n.bolt-logo-wc--size__lg.bolt-logo-wc--type__nw-vertical {\n  height: 125px;\n  width: 124px;\n}\n.bolt-logo-wc--size__lg.bolt-logo-wc--type__nw-mark {\n  height: 100px;\n  width: 80px;\n}";

/**
 * Default configuration values for the logo component
 * @constant {Object}
 */
const DEFAULTS$4 = {
  color: 'full',
  type: 'nw-horizontal',
};

/**
 * The Nationwide logo component displays the company logo in various configurations and colors.
 * Can be rendered as a clickable link or static image with hover effects.
 *
 * @class BoltLogoElement
 * @element BoltLogoElement
 * @extends {BoltElement}
 * @tagname bolt-logo
 * @since 3.0.0
 *
 * @property {String} type - (Optional) `nw-horizontal` (default) displays the full logo with N and eagle and "Nationwide" to the right. `nw-vertical` displays the N and eagle placed vertically over a smaller "Nationwide". `nw-mark` displays only the N and eagle. Possible values: [`nw-horizontal`, `nw-vertical`, `nw-mark`]
 * @property {String} color - (Optional) Whether to render the logo in `full` color for use on light backgrounds, or in `white` for use on dark backgrounds.. Possible values: [`full`, `white`]
 * @property {String} href - (Optional) Sets the URL to navigate to when the logo is clicked. Wraps the logo in an `A` tag and adds a hover state
 * @property {String} alt - (Optional) Defaults to "Nationwide logo". Sets the alt text for the logo image.
 * @property {String} size - (Optional) Size to render the logo. Default is `md`. Possible values: [`sm`, `md`, `lg`]
 * @property {Boolean} allowhover - (Optional) If present, this adds the hover state to a logo that does not have an `href`. This option should be used when the logo does not have an `href`, but does have some other behavior on click, e.g. via the Angular `[routerLink]` directive.
 *
 * @see https://bolt.nwie.net/web/components/logo
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @example
 * <bolt-logo href="https://www.nationwide.com" type="nw-horizontal" color="full" alt="Go to Nationwide homepage"></bolt-logo>
 */
class BoltLogoElement extends BoltElement {
    /**
     * The component's tag name, used for Custom Element registration
     * @readonly
     * @type {String}
     * @static
     */
    static get is() {
      return 'bolt-logo';
    }

    /**
     * LitElement properties/attributes definition.
     * Defines all the reactive properties that can be set as attributes or properties
     * @readonly
     * @type {Object}
     * @static
     */
    static get properties() {
        return {
            type: { type: String },
            color: { type: String, reflect: true },
            href: { type: String },
            alt: { type: String },
            size: { type: String },
            allowhover: { type: Boolean }
        }
    }

    /**
     * Creates an instance of BoltLogoElement.
     * Initialize public and private properties with default values
     *
     * @constructor
     */
    constructor() {
        super();

        this.color = DEFAULTS$4.color; // full, white
        this.type = DEFAULTS$4.type; // nw-horizontal, nw-vertical, nw-mark
        this.href = '';
        this.alt = 'Nationwide logo';
        this.size = 'md';
        /** @private {String} */
        this.generatedId = this.generateId();
    }

    /**
     * Generates a unique ID for the logo element
     * @private
     * @returns {String} The generated unique ID
     */
    generateId() {
        return 'bolt-logo--' + Math.floor(Math.random() * 10000000);
    }

    /**
     * Returns the CSS styles for the component
     * @readonly
     * @static
     * @returns {CSSResult} The component's CSS styles
     */
    static get styles() {
      return CSS$l;
    }

    /**
     * Programmatically focuses the logo element.
     * If the logo has an href, focuses the anchor element.
     *
     * @public
     * @param {Event} e - The focus event (unused)
     */
    focus(e){
        if(this.href){
            this.shadowRoot.querySelector('a.bolt-logo-wc').focus();
        }
    }

    /**
     * Gets the complete URL for the logo image based on current color setting
     * @readonly
     * @type {String}
     */
    get logoUrl() {
      return this._generateUrl(this.color);
    }

    /**
     * Generates the complete URL for a logo image file based on color variant
     * @private
     * @param {String} color - The color variant (full, white, etc.)
     * @returns {String} The complete URL to the logo image
     */
    _generateUrl(color) {
      let filename = `bolt-logo-${this.type}-${color}.svg`;
      let url = new URL(
        `${currentVersionPath}/${filename}`,
        rootUrl
      );
      return url.href
    }

    /**
     * Renders the logo image element(s) with appropriate classes and attributes.
     * When color is 'full', renders both full-color and white versions for hover effects.
     * @private
     * @returns {TemplateResult} The logo image template
     */
    _renderImg() {
      return x`
        <img
          alt="${this.alt}"
          class="
            bolt-logo-wc--type__${this.type}
            bolt-logo-wc--size__${this.size}
            bolt-logo-wc--color__${this.color}
          "
          src="${this.logoUrl}"
        />
        ${this.color == 'full' ? x`
          <img
            alt="${this.alt}"
            class="
              bolt-logo-wc--type__${this.type}
              bolt-logo-wc--size__${this.size}
              bolt-logo-wc--color__white
            "
            src="${this._generateUrl('white')}"
          />
          ` : `` }
      `
    }

    /**
     * Renders the main component template.
     * Creates either a clickable link or static div wrapper based on href property.
     * @returns {TemplateResult} The component's HTML template
     */
    render() {
      return (
        this.href
        ? x`
          <a
            href="${this.href}"
            class="bolt-logo-wc bolt-logo-wc__hoverable"
          >
            ${this._renderImg()}
          </a>
        `
        : x`
          <div
            class="bolt-logo-wc ${this.allowhover ? 'bolt-logo-wc__hoverable' : ''}"
          >
            ${this._renderImg()}
          </div>
        `
      )
    }
}

/**
 * This module exports the logo component and its initialization function.
 * The logo component displays brand logos and images with proper
 * accessibility features and responsive scaling capabilities.
 *
 * @module bolt-logo
 * @since 3.0.0
 *
 * @see {@link ./elements/bolt-logo|BoltLogoElement}
 */


/**
 * Initializes the logo component by registering it as a custom element
 *
 * This function:
 * 1. Registers the BoltLogoElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$h() {
  // Upstream
  // n/a

  // Local
  BoltLogoElement.$define();
}

var index$g = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltLogoElement: BoltLogoElement,
  initialize: initialize$h
});

var CSS$k = ":host {\n  /* css-core:context.reset */\n  --bolt-context-surface: var(--bolt-theme-surface);\n  --bolt-context-onSurface: var(--bolt-theme-onSurface);\n  --bolt-context-onSurfaceVariant: var(--bolt-theme-onSurfaceVariant);\n  --bolt-context-outline: var(--bolt-theme-outline);\n  --bolt-context-outlineVariant: var(--bolt-theme-outlineVariant);\n  --bolt-context-focus: var(--bolt-theme-focus);\n  --bolt-context-link: var(--bolt-theme-link);\n  --bolt-context-accent: var(--bolt-theme-accent);\n  --bolt-context-accentHigh: var(--bolt-theme-accentHigh);\n  --bolt-context-accentHighest: var(--bolt-theme-accentHighest);\n  --bolt-context-onAccent: var(--bolt-theme-onAccent);\n}\n\n:host,\n:host * {\n  /* css-core:utils/reset.component */\n  border: 0;\n  font: inherit;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  vertical-align: baseline;\n}\n\n#root {\n  position: relative;\n  z-index: 100;\n}\n#root.open {\n  z-index: 500;\n}\n\n#navigation-secondary-wrapper {\n  --bolt-context-surface: var(--secondaryNav-bg);\n  --bolt-context-focus: var(--secondaryNav-focus);\n  background: var(--secondaryNav-bg);\n}\n\n#main {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#main-wrapper {\n  --bolt-context-surface: var(--main-bg);\n  --bolt-context-focus: var(--main-focus);\n  background: var(--main-bg);\n}\n\n#navigation-primary {\n  display: flex;\n  justify-content: space-between;\n  flex: 1;\n}\n\nslot[name=nav-actions] {\n  flex-shrink: 0;\n}\n\n#overlay {\n  width: 100vw;\n  height: 100vh;\n  background: var(--bolt-theme-scrim);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.desktop.closed {\n  contain: layout;\n}\n.desktop #navigation-secondary {\n  display: flex;\n  justify-content: space-between;\n}\n.desktop #main {\n  padding-block: 20px;\n}\n.desktop slot[name=logo] {\n  display: block;\n  flex-grow: 1;\n}\n.desktop #menuBar-wrapper {\n  --bolt-context-surface: var(--menuBar-bg);\n  --bolt-context-focus: var(--menuBar-focus);\n  background: var(--menuBar-bg);\n  border-bottom: 1px solid var(--menuBar-outline);\n}\n.desktop #menuBar {\n  display: flex;\n  align-items: center;\n}\n.desktop #navigation-primary {\n  margin-left: -20px;\n}\n@media (min-width: 1200px) {\n  .desktop.layout-fixed #main,\n  .desktop.layout-fixed #navigation-secondary,\n  .desktop.layout-fixed #menuBar {\n    width: 100%;\n    padding-right: 16px;\n    padding-left: 16px;\n    margin-right: auto;\n    margin-left: auto;\n    max-width: var(--bolt-grid-maxWidth, 1380px);\n    max-width: var(--bolt-grid-maxWidth, 1656px);\n  }\n}\n@media (min-width: 1200px) and (min-width: 576px) {\n  .desktop.layout-fixed #main,\n  .desktop.layout-fixed #navigation-secondary,\n  .desktop.layout-fixed #menuBar {\n    max-width: var(--bolt-grid-maxWidth, 540px);\n  }\n}\n@media (min-width: 1200px) and (min-width: 768px) {\n  .desktop.layout-fixed #main,\n  .desktop.layout-fixed #navigation-secondary,\n  .desktop.layout-fixed #menuBar {\n    max-width: var(--bolt-grid-maxWidth, 720px);\n  }\n}\n@media (min-width: 1200px) and (min-width: 992px) {\n  .desktop.layout-fixed #main,\n  .desktop.layout-fixed #navigation-secondary,\n  .desktop.layout-fixed #menuBar {\n    max-width: var(--bolt-grid-maxWidth, 960px);\n  }\n}\n@media (min-width: 1200px) and (min-width: 1200px) {\n  .desktop.layout-fixed #main,\n  .desktop.layout-fixed #navigation-secondary,\n  .desktop.layout-fixed #menuBar {\n    max-width: var(--bolt-grid-maxWidth, 1140px);\n  }\n}\n.desktop #main,\n.desktop #navigation-secondary,\n.desktop #menuBar {\n  padding-inline: 32px;\n  width: 100%;\n}\n\n.mobile #menu-button {\n  flex: 1;\n}\n.mobile #menu-button button {\n  display: flex;\n  padding: 8px;\n  background: var(--main-bg);\n  border-radius: 4px;\n  color: var(--main-menuIcon);\n  cursor: pointer;\n  transition: background-color 350ms;\n}\n.mobile #menu-button button bolt-icon {\n  --size: 32px;\n}\n.mobile #menu-button button:hover {\n  background: var(--main-menuIcon-hover);\n  color: var(--main-bg);\n}\n.mobile #menu-button button:active {\n  background: var(--main-menuIcon-active);\n  color: var(--main-bg);\n}\n.mobile #menu-button button:focus-visible {\n  /* css-core:context.focus */\n  box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n  outline: none;\n  text-decoration-color: transparent;\n}\n.mobile slot[name=logo] {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  order: 2;\n}\n.mobile slot[name=search] {\n  display: block;\n  background: var(--bolt-theme-surfaceBrightest);\n}\n.mobile #navigation-secondary {\n  background: var(--secondaryNav-bg);\n  flex-direction: column;\n}\n.mobile #main {\n  flex-wrap: wrap;\n  border-bottom: 1px solid var(--bolt-theme-outline);\n  padding: 12px 20px;\n}\n.mobile slot[name=main-actions] {\n  display: flex;\n  flex: 1;\n  justify-content: right;\n  order: 2;\n}\n.mobile #menuBar-wrapper {\n  background: var(--secondaryNav-bg);\n  border-right: 1px solid var(--bolt-theme-outline);\n  position: absolute;\n  max-width: 384px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.mobile #menuBar {\n  flex-shrink: 1;\n  overflow-y: auto;\n}\n.mobile #navigation-primary {\n  background: var(--bolt-theme-surfaceBrightest);\n  flex-direction: column;\n}\n\n/* Transitions */\n#overlay {\n  opacity: 0;\n  visibility: hidden;\n  transition: all 150ms;\n}\n.open #overlay {\n  opacity: var(--bolt-theme-scrimOpacity);\n  visibility: visible;\n  transition: all 150ms;\n}\n\n.mobile[bolt-loading] {\n  transition: none;\n}\n.mobile #menuBar-wrapper {\n  transform: translateX(-100%);\n  opacity: 0;\n  visibility: hidden;\n  height: 0;\n}\n.mobile.open #menuBar-wrapper {\n  transform: none;\n  opacity: 1;\n  visibility: visible;\n  height: calc(100dvh - 100%);\n}\n.mobile[menu-toggle] #menuBar-wrapper {\n  transition: all 350ms ease-in-out, height 0s 350ms, opacity 0s 350ms;\n}\n@media (prefers-reduced-motion: reduce) {\n  .mobile[menu-toggle] #menuBar-wrapper {\n    transition: all 150ms, height 0s 350ms, transform 0s 350ms;\n  }\n}\n.mobile[menu-toggle].open #menuBar-wrapper {\n  transition: all 350ms ease-in-out, height 0s, opacity 0s;\n}\n@media (prefers-reduced-motion: reduce) {\n  .mobile[menu-toggle].open #menuBar-wrapper {\n    transition: all 150ms, height 0s, transform 0s;\n  }\n}\n.mobile #menuIcon-open {\n  position: absolute;\n  opacity: 1;\n  transition: all 150ms;\n}\n.mobile #menuIcon-close {\n  opacity: 0;\n  transition: all 150ms;\n}\n.mobile.open #menuIcon-open {\n  opacity: 0;\n}\n.mobile.open #menuIcon-close {\n  opacity: 1;\n}";

/**
 * A header is the section at the top of a screen to display a company logo and global navigation for direct access to a site's most important and relevant pages.
 *
 * The `bolt-header` component primarily acts as a container that provides layout for specific slots, as well as preset styles for certain HTML patterns within them.
 *
 * @class BoltHeaderElement
 * @element BoltHeaderElement
 * @extends {BoltElement}
 * @tagname bolt-header
 * @since 4.0.0
 *
 * @property {Number} breakpoint - (Optional) Screen width, in pixels, at which the header should switch from desktop to mobile display. Default: `768`.
 * @property {String} logohref - (Optional) The url for a link to be applied to the logo. May be overwritten by another `href` value, or to a blank string to remove the link entirely. If alternate logo(s) are provided using the logo slot, links should be included in the slotted content instead. Defaults to the base url (`"/"`)
 * @property {String} layout - (Optional) `fixed` (default) will align the header content with a fixed grid container, which restricts content to a fixed width at each responsive breakpoint. `fluid` will align header content to the edges of its parent element, matching the layout of a fluid grid container. Possible values: [`fixed`, `fluid`]
 * @property {Boolean} noautoclose - (Optional) If present, the primary navigation menu will remain open when a link (`<a>` tag) within it is clicked.
 * @property {String} sticky - (Optional) Defines whether mobile header appears fixed to the top of the viewport Possible values: [`on`, `off`, `auto`]
 *
 * @slot navigation-primary - The primary navigation items in the menu bar. For basic links, provide an href value. For navigation panels, see the HTML patterns in the variations tab. Styles are provided for these patterns, but the content inside the dropdown panels may be modified and styled as needed.
 * @slot external-links - Part of secondary navigation, appears above the main header on the left on desktop, and at the bottom of the menu on mobile.
 * @slot utility-links - Part of secondary navigation, appears above the main header on the right on desktop, and above `external-links` on mobile
 * @slot logo - The default Nationwide logo can be replaced by content in the `logo` slot. Using the `bolt-header-mobile-only` and `bolt-header-desktop-only` utility classes allows you to provide different assets for each viewport.
 * @slot main-actions - Buttons that appear in the main header area, to the right of the search (if present).
 * @slot search - Search field. The variations show an example using a bolt-textfield in this slot, but integration with search functionality is left up to the details of implementation.
 * @slot nav-actions - Buttons that appear next to the primary navigation items, in the menu bar.
 *
 * @see https://bolt.nwie.net/web/components/header
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 */
class BoltHeaderElement extends BoltElement {
  /**
   * The component's tag name, used for Custom Element registration
   * @readonly
   * @type {String}
   * @static
   */
  static get is() {
    return 'bolt-header';
  }

  /**
   * LitElement properties/attributes definition.
   * Defines the public API properties for the header component
   * @readonly
   * @type {Object}
   * @static
   */
  static get properties() {
    return {
      breakpoint: { type: Number },
      layout: { type: String, reflect: true },
      logohref: { type: String },
      menucontrol: { type: String },
      messagecount: { type: Number },
      noautoclose: { type: Boolean },
      sticky: { type: String, reflect: true },
    }
  }

  /**
   * Getter for component's CSS styles
   * @readonly
   * @type {CSSResult}
   * @static
   */
  static get styles() {
    return CSS$k;
  }

  /**
   * Creates an instance of BoltHeaderElement
   * Initializes properties, sets up event handlers, and configures observers
   *
   * @constructor
   */
  constructor() {
    super();

    // PUBLIC PROPERTIES
    this.breakpoint = 768;
    this.layout = 'fixed';
    this.logohref = '/';
    this.noautoclose = false;
    this.sticky = "auto";

    // PRIVATE PROPERTIES
    /** @private {String} */
    this.menucontrol = 'hover';
    /** @private {Number} */
    this.messagecount = 0;
    /** @private {Number} - Currently active navigation tab index (-1 means none active) */
    this._activeIndex = -1;
    /** @private {Boolean} - Whether the header is in mobile mode */
    this._isMobile = false;
    /** @private {Boolean} - Whether the mobile menu is open */
    this._isOpen = false;
    /** @private {Number} - Current menu level depth for mobile navigation */
    this._menuLevel = 1;
    /** @private {Boolean} - Whether sticky header is visible */
    this._stickyVisible = true;
    /** @private {Number} - Accumulated downward scroll distance */
    this._downScroll = 0;
    /** @private {Number} - Accumulated upward scroll distance */
    this._upScroll = 0;
    /** @private {Number} - Previous scroll position for calculating scroll direction */
    this._scrollPosition = window.scrollY;

    this._onLinkClick = this._onLinkClick.bind(this);
    this._onNavItemClick = this._onNavItemClick.bind(this);
    this._onNavItemMouseOver = this._onNavItemMouseOver.bind(this);
    this._onNavItemMouseLeave = this._onNavItemMouseLeave.bind(this);
    this._onWindowResize = this._onWindowResize.bind(this);
    this._onWindowScroll = this._onWindowScroll.bind(this);
    this._watchNavPrimary = this._watchNavPrimary.bind(this);



    /** @private {MutationObserver} - Observes changes to primary navigation content */
    this._navPrimaryObserver = new MutationObserver(this._watchNavPrimary);
    /** @private {Boolean} - Whether the component has been updated at least once */
    this._isUpdated = false;
  }

  /**
   * Lifecycle method called when element is connected to DOM
   * Sets up global event listeners
   *
   * @override
   */
  connectedCallback() {
    super.connectedCallback();

    this.addEventListener('click', this._onLinkClick);
    window.addEventListener('resize', this._onWindowResize);
  }

  /**
   * Lifecycle method called when element is disconnected from DOM
   * Cleans up event listeners and mutation observers
   *
   * @override
   */
  disconnectedCallback() {
    super.disconnectedCallback();

    this.removeEventListener('click', this._onLinkClick);
    window.removeEventListener('resize', this._onWindowResize);
    window.removeEventListener('scroll', this._onWindowScroll);

    // Disconnect mutation observer
    this._navPrimaryObserver.disconnect();
  }

  /**
   * Renders the component's HTML template
   * Creates the responsive header structure with navigation, logo, search, and mobile menu
   *
   * @returns {TemplateResult} The component's rendered template
   * @override
   */
  render() {
    // ensures that the header is updated before checking for assigned nodes
    if (this._isUpdated) {
      this._checkAssignedNodes();
    }

    return x`
    <header>
      <div class="${this._isMobile ? 'mobile' : 'desktop'}
                  ${this._isOpen ? 'open' : 'closed'}
                  layout-${this.layout}"
        id="root"
      >
          ${!this._isMobile ? x`
            <div id="navigation-secondary-wrapper">
              <nav id="navigation-secondary" aria-label="Secondary"
                  aria-hidden="${!this.hasExternalLinks && !this.hasUtilityLinks}">
                <slot name="external-links"></slot>
                <slot name="utility-links"></slot>
              </nav>
            </div>
          ` : ''}
          <div id="main-wrapper">
            <div id="main">
              <slot name="logo">
                <bolt-logo
                  type="${this._isMobile ? 'nw-mark' : 'nw-horizontal'}"
                  href="${this.logohref}"
                  alt="Nationwide"
                ></bolt-logo>
              </slot>
              ${!this._isMobile ? x`
                <slot name="search" @focusin="${this._isOpen ? this.close : null}"></slot>
              ` : ''}
              <slot name="main-actions"></slot>
              ${this._isMobile ? x`
                <div id="menu-button">
                ${this.hasDrawerNodes ? x`
                  <button type="button"
                    @click="${this.toggle}"
                    @keyup="${this._onMenuBarKeyup}"
                    aria-expanded="${this._isOpen}"
                    aria-label="Menu${this.messagecount ? ': ' + this.messagecount + ' messages available' : ''}"
                    title="${this._isOpen ? 'close menu' : 'open menu'}"
                  >
                    <bolt-icon
                      id="menuIcon-open"
                      name="menu"
                      decorative
                      fixed
                      aria-hidden="${this._isOpen}">
                    </bolt-icon>
                    <bolt-icon
                      id="menuIcon-close"
                      name="xmark"
                      decorative
                      fixed
                      aria-hidden="${!this._isOpen}">
                    </bolt-icon>
                  </button>
                ` : ''}
                </div>
              ` : ''}
            </div>
          </div>
        <div id="menuBar-wrapper" aria-hidden="${this._isMobile && !this._isOpen}">
          ${this._isMobile ? x`
            <slot name="search"></slot>
          ` : ''}
          <div
            id="menuBar"
            @keyup="${this._onMenuBarKeyup}"
            @focusout="${this._onMenuBarFocusOut}"
          >
            <nav id="navigation-primary" aria-label="Primary" aria-hidden="${!this.hasPrimaryNavigation}">
              <slot name="navigation-primary"></slot>
            </nav>
            <slot name="nav-actions"></slot>
            ${this._isMobile ? x`
              <div id="navigation-secondary">
                <slot name="utility-links"></slot>
                <slot name="external-links"></slot>
              </div>
              <span
                @keydown="${this._onMenuEndKeydown}"
                aria-label="End of menu content"
                tabindex="0"
              ></span>
            ` : ''}
          </div>
        </div>
        <div id="overlay" @click="${this.close}" aria-hidden="${!this._isOpen}"></div>
      </div>
    </header>
    `;
  }

  /**
   * Lifecycle method called after first render
   * Initializes display size, syncs navigation panels, and sets up observers
   *
   * @override
   */
  firstUpdated() {
    // [1] FIXME: run BEFORE first render (impossible with current version of LitElement)
    //     on initial render for mobile viewports, the header is first in "desktop" mode
    //     and then updates to "mobile" mode afterward (causes syling/display issues of
    //     things like the logo)
    this._setDisplaySize(); // [1]
    this._syncPanels();

    this._setStyleBuffer('bolt-loading', 1000);
    this._isUpdated = true;
    this.requestUpdate();

    // Attach mutation observer after initial sync panels
    const $primaryNav = this._primaryNav;
    if ($primaryNav) {
      const observerOptions = { attributes: true, childList: true, subtree: true };
      this._navPrimaryObserver.observe($primaryNav, observerOptions);
    }
  }

  /**
   * Lifecycle method called after each update
   * Updates attributes and manages sticky header behavior
   *
   * @param {Map} changedProperties - Properties that changed in this update
   * @override
   */
  updated(changedProperties) {
    let $header = this.shadowRoot.querySelector('#root');
    this.setAttribute('bolt-menu-level', this._menuLevel);

    if(this._isMobile){
      this.setAttribute('bolt-media', 'mobile');
    }
    else {
      this.setAttribute('bolt-media', 'desktop');
    }

    if(changedProperties.has('sticky')){
      if(this.sticky === "on" || this.sticky === "off") {
        $header.style.top = 0;
        window.removeEventListener('scroll', this._onWindowScroll);
      } else if(this.sticky === "auto") {
        window.addEventListener('scroll', this._onWindowScroll);
      }
    }

    // Always start at top of scrollable area
    let scrollArea = this.shadowRoot.querySelector('#menuBar');
    scrollArea.scrollTop = 0;
  }

  /**
   * Opens the mobile navigation menu
   * Sets appropriate menu level and applies scroll lock
   *
   * @public
   */
  open() {
    this._isOpen = true;

    // Open to appropriate depth based on viewport
    if(this._isMobile){
      this._menuLevel = 1;
    }
    else {
      this._menuLevel = 2;
    }
    if(this._isMobile){

      // Delay to minimize impact to page height
      setTimeout(() => {
        this.shadowRoot.querySelector('#root').scrollIntoView();

        // Apply scroll lock behind mobile header
        document.querySelector('html').classList.add('bolt-scroll-lock');
      }, 1);
    }

    this.setAttribute('bolt-active', '');
    this._setStyleBuffer('menu-toggle', 500);
    this.requestUpdate();
  }

  /**
   * Closes the navigation menu
   * Resets menu state and removes scroll lock
   *
   * @public
   */
  close() {
    this._isOpen = false;
    this._activeIndex = -1;
    this._menuLevel = 1;

    this._navTabs.forEach($navTab => {
      $navTab.setAttribute('aria-expanded', false);
    });
    this._navPanels.forEach($panel => {
      $panel.setAttribute('aria-hidden', true);
    });

    // Release scroll lock behind header
    document.querySelector('html').classList.remove('bolt-scroll-lock');

    this.removeAttribute('bolt-active');
    this._setStyleBuffer('menu-toggle', 500);
    this.requestUpdate();
  }

  /**
   * Toggles the navigation menu open/closed state
   *
   * @public
   */
  toggle() {
    if (this._isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  /**
   * Gets the primary navigation element from the slot
   *
   * @returns {HTMLElement|null} The primary navigation element
   * @private
   */
  get _primaryNav() {
    return this.shadowRoot.querySelector('slot[name="navigation-primary"]').assignedNodes()[0];
  }

  /**
   * Sets the active navigation tab and updates ARIA attributes
   *
   * @param {Number|String} val - Index of the tab to activate
   * @private
   */
  _setActiveTab(val){
    let index = Number(val);
    this._activeIndex = index;

    this._navTabs.forEach(($navTab, idx) => {
      $navTab.setAttribute('aria-expanded', (idx === index));
    });
    this._navPanels.forEach(($panel, idx) => {
      $panel.setAttribute('aria-hidden', (idx !== index));
    });
  }

  /**
   * Watches for changes to primary navigation content
   * Closes menu and re-syncs panels when child nodes change
   *
   * @param {MutationRecord[]} mutationRecords - Array of mutation records
   * @private
   */
  _watchNavPrimary(mutationRecords) {
    // Call sync panels only once if 1 or more child node was added or removed in an array of mutation records
    const hasChildMutation = mutationRecords.some((record) => record.type === 'childList');
    if (hasChildMutation) {
      this.close();
      this._syncPanels();
    }
  }

  /**
   * Synchronizes navigation panels with their corresponding tabs
   * Sets up event listeners and accessibility attributes
   *
   * @private
   */
  _syncPanels() {
    this._getNavItems();

    // Modify nav items
    this._navItems.forEach($navItem => {
      if ($navItem) {
        $navItem.classList.add('bolt-header-wc--nav-item');
      }
    });

    // Modify nav tabs
    for(var i = 0; i < this._navTabs.length; i++){
      var $tab = this._navTabs[i];
      $tab.setAttribute('aria-expanded', false);

      // clean up old event listeners (if present)
      $tab.removeEventListener('click', this._onNavItemClick);
      $tab.removeEventListener('mouseover', this._onNavItemMouseOver);
      $tab.removeEventListener('mouseleave', this._onNavItemMouseLeave);
      // apply new event listeners
      $tab.addEventListener('click', this._onNavItemClick);
      $tab.addEventListener('mouseover', this._onNavItemMouseOver);
      $tab.addEventListener('mouseleave', this._onNavItemMouseLeave);


      // Sync tabs and panels
      if(this._navPanels[i]){
        var $panel = this._navPanels[i];
        $panel.setAttribute('role', 'region');
        $panel.setAttribute('tabindex', -1);
        $panel.setAttribute('aria-label', this._navTabs[i].innerText + ' sub-menu');
        $panel.setAttribute('aria-hidden', true);
      }

      let hasIcon = $tab.querySelector('bolt-icon');
      if(!hasIcon){
        // Add right chevron
        var rightIcon = document.createElement('bolt-icon');
        rightIcon.setAttribute("name", "chevron-right");
        rightIcon.decorative = true;
        $tab.insertAdjacentElement('beforeend', rightIcon);

        // Add left chevron
        var leftIcon = document.createElement('bolt-icon');
        leftIcon.setAttribute("name", "chevron-left");
        leftIcon.decorative = true;
        $tab.insertAdjacentElement('afterbegin', leftIcon);
      }
    }
  }

  /**
   * Gets navigation items, tabs, and panels from the primary navigation
   * Populates internal arrays for menu management
   *
   * @private
   */
  _getNavItems() {
    this._navItems = [];
    this._navTabs = [];
    this._navPanels = [];

    let $primaryNav = this._primaryNav;
    if($primaryNav){
      let $nodes = $primaryNav.children;

      for (var i = 0; i < $nodes.length; i++){
        // Create list of all nav items
        this._navItems.push($nodes[i].querySelector('a, button'));

        if($nodes[i].querySelector('.bolt-header-panel')){
          // Create list of nav items with sub-menus
          this._navTabs.push($nodes[i].querySelector('a, button'));

          // Create list of sub-menu panels
          this._navPanels.push($nodes[i].querySelector('.bolt-header-panel'));
        }
      }
    }
  }

  /**
   * Checks which slots have assigned nodes to determine what content is available
   * Updates boolean flags used for conditional rendering
   *
   * @private
   */
  _checkAssignedNodes(){
    this.hasExternalLinks = this._hasAssignedNodes('external-links');
    this.hasUtilityLinks = this._hasAssignedNodes('utility-links');
    this.hasPrimaryNavigation = this._hasAssignedNodes('navigation-primary');
    this.hasSearch = this._hasAssignedNodes('search');
    this.hasNavActions = this._hasAssignedNodes('nav-actions');

    // If any of above are present, hamburger menu should provide access on mobile
    this.hasDrawerNodes = this.hasExternalLinks || this.hasUtilityLinks || this.hasPrimaryNavigation || this.hasSearch || this.hasNavActions;
  }

  /**
   * Checks if a specific slot has assigned nodes
   *
   * @param {String} slotName - Name of the slot to check
   * @returns {Boolean} True if the slot has assigned nodes
   * @private
   */
  _hasAssignedNodes(slotName) {
      // Check if a slot has assigned nodes
    const slot = this.shadowRoot.querySelector(`slot[name="${slotName}"]`);
    return slot && slot.assignedNodes().length > 0;
  }

  /** @private */
  _setDisplaySize() {
    if (window.innerWidth < this.breakpoint){
      // Switch to mobile from desktop
      if (!this._isMobile){
          this._isMobile = true;
          this.requestUpdate();
      }
    }
    // Switch to desktop from mobile
    else if(this._isMobile) {
      this._isMobile = false;

      if(this._isOpen && this._menuLevel < 2){
          this.close();
      }
      this.requestUpdate();
    }
  }

  // Temporarily apply attribute selectors as needed to prevent unwanted transitions
  /** @private */
  _setStyleBuffer(attribute, duration){

    // Apply selector in both shadow and light DOM
    let $header = this.shadowRoot.querySelector('#root');
    $header.setAttribute(attribute, '');
    this.setAttribute(attribute, '');

    setTimeout(() => {
      $header.removeAttribute(attribute);
      this.removeAttribute(attribute);
    }, duration);
  }

  /** @private */
  _onNavItemClick(e) {
    let $index = this._navTabs.indexOf(e.currentTarget);

    // Click active nav item
    if (this._isOpen && this._activeIndex === $index){

      if(this._isMobile) {
        this._menuLevel--;
        this._setActiveTab(-1);
      }
      else {
        this.close();
      }
    }

    // Click new nav item
    else {
      if(!this._isOpen){
        this.open();
      }

      this._setActiveTab($index);

      if(this._isMobile){
        this._menuLevel++;
      }
    }
    this.requestUpdate();
  }

  /** @private */
  _onNavItemMouseOver(e) {
    if (this.menucontrol === 'hover' && !this._isMobile){
      // Change panel on hover if already open
      if(this._isOpen && this._navTabs.indexOf(e.currentTarget) !== this._activeIndex){
        const _next = (function() {
          this.click();
        }).bind(e.currentTarget);
        this._tabTimeout = setTimeout(_next, 125);
      }
    }
  }

  _onNavItemMouseLeave(){
    // Clear timeout if user leaves tab before set amount of time
    clearTimeout(this._tabTimeout);
  }

  /** @private */
  _onLinkClick(e) {
    const { tagName, classList } = e.target;

    if (this.noautoclose || tagName !== 'A') {
      return;
    }

    if (!classList.contains('bolt-header-wc--nav-item')) {
      this.close();
    }
  }

  /** @private */
  _onMenuBarKeyup(e) {
    let $parentTab = this._navItems[this._activeIndex];

    // Handle escape key
    if(e.key === 'Escape' && this._isOpen){
      let $menuButton = this.shadowRoot.querySelector('#menu-button button');

      if(this._isMobile){
        // Move up from deeper menu levels
        if(this._menuLevel > 1){
          $parentTab.focus();
          $parentTab.click();
        }
        // Close top-level menu
        else {
          this.close();
          $menuButton.focus();
        }
      }
      // Close desktop menu
      else {
        this.close();
        $parentTab.focus();
      }
    }
  }

  /** @private */
  _onMenuBarFocusOut(e) {
    if(!this._isMobile && this._isOpen){
      let newTarget = e.relatedTarget;
      let activePanel = this._navPanels[this._activeIndex];

      // Close menu when focus leaves active panel
      if (newTarget && !activePanel.contains(newTarget)){
        this.close();
      }
    }
  }

  /** @private */
  _onMenuEndKeydown(e) {
    // Prevent focus from leaving menu on mobile
    // listen for Tab
    if(e.key === 'Tab' && !e.shiftKey){
      e.preventDefault();
    }
  }

  /** @private */
  _onWindowResize(evt) {
    this._setDisplaySize();
  }

  /** @private */
  _onWindowScroll(e) {
    // Only apply sticky behavior to closed mobile header
    if(this._isMobile && !this._isOpen){
      let $scrollMax = 96; // $scale-x8-sm
      let $scrollCurrent = window.scrollY - this._scrollPosition;

      // Update measures of continuous scrolling up or down
      if($scrollCurrent > 0){
        this._downScroll += $scrollCurrent;
        this._upScroll = 0;
      }
      else if($scrollCurrent < 0){
        this._upScroll -= $scrollCurrent;
        this._downScroll = 0;
      }

      // Hide sticky header
      if(this._downScroll >= $scrollMax && this._stickyVisible){
        this._stickyVisible = false;
        this.style.top = -this.offsetHeight + 'px';
      }
      // Show sticky header
      else if(this._upScroll >= $scrollMax && !this._stickyVisible){
        this._stickyVisible = true;
        this.style.top = 0;
      }
    }

    // Update memoized scroll position
    this._scrollPosition = window.scrollY;
  }
}

/**
 * This module exports the header component and its initialization function.
 * The header component A header is the section at the top of a screen to display a company logo and global navigation for direct access to a site's most important and relevant pages.
 *
 * @module bolt-header
 * @since 4.0.0
 *
 * @see {@link ./elements/bolt-header|BoltHeaderElement}
 */


/**
 * Initializes the header component by registering it as a custom element
 *
 * This function:
 * 1. Initializes dependencies (Icon and Logo components)
 * 2. Registers the BoltHeaderElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$g() {
  // Upstream
  await initialize$y();
  await initialize$h();

  // Local
  BoltHeaderElement.$define();
}

var index$f = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltHeaderElement: BoltHeaderElement,
  initialize: initialize$g
});

var CSS$j = ":host {\n  /* css-core:context.reset */\n  --bolt-context-surface: var(--bolt-theme-surface);\n  --bolt-context-onSurface: var(--bolt-theme-onSurface);\n  --bolt-context-onSurfaceVariant: var(--bolt-theme-onSurfaceVariant);\n  --bolt-context-outline: var(--bolt-theme-outline);\n  --bolt-context-outlineVariant: var(--bolt-theme-outlineVariant);\n  --bolt-context-focus: var(--bolt-theme-focus);\n  --bolt-context-link: var(--bolt-theme-link);\n  --bolt-context-accent: var(--bolt-theme-accent);\n  --bolt-context-accentHigh: var(--bolt-theme-accentHigh);\n  --bolt-context-accentHighest: var(--bolt-theme-accentHighest);\n  --bolt-context-onAccent: var(--bolt-theme-onAccent);\n  visibility: hidden;\n}\n:host.bolt-modal-wc--active {\n  visibility: visible;\n}\n\n.bolt-modal-wc {\n  height: 100%;\n  max-height: calc(100% - 2 * 32px);\n  width: 100%;\n  max-width: 739px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.bolt-modal-wc--container {\n  max-width: calc(100% - 2 * 32px);\n  min-width: 75%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background: var(--bolt-theme-surfaceBrightest);\n  border: 1px solid var(--bolt-theme-outline);\n  box-shadow: 0px 2px 5px 0px rgba(23, 23, 23, 0.15);\n  color: var(--bolt-theme-onSurface);\n}\n.bolt-modal-wc--scroll-container {\n  overflow-y: auto;\n  flex: 1 1 auto;\n}\n.bolt-modal-wc--main {\n  display: flex;\n  flex-flow: column;\n  gap: var(--bolt-space-lg);\n  padding: var(--bolt-space-xl);\n  width: 100%;\n}\n.bolt-modal-wc--heading {\n  display: flex;\n  gap: 12px;\n}\n.bolt-modal-wc--heading > * {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  letter-spacing: 0px;\n  font-size: clamp(22px, 22px + 2px * (var(--bolt-typography-basis) - 360) / 840, 24px);\n  line-height: clamp(1.45, 1.45 + -0.12 * (var(--bolt-typography-basis) - 360) / 840, 1.33);\n  font-weight: 500;\n}\n.bolt-modal-wc--title {\n  margin: 0;\n}\n.bolt-modal-wc--content {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(14px, 14px + 2px * (var(--bolt-typography-basis) - 360) / 840, 16px);\n  line-height: clamp(1.43, 1.43 + 0.07 * (var(--bolt-typography-basis) - 360) / 840, 1.5);\n}\n.bolt-modal-wc--footer {\n  position: relative;\n}\n.bolt-modal-wc--scroll-gradient {\n  background-image: linear-gradient(to top, var(--bolt-theme-surface) 10%, rgba(0, 0, 0, 0));\n  transition: 350ms;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  height: 20vh;\n  top: -20vh;\n}\n.bolt-modal-wc--scroll-gradient-hidden {\n  opacity: 0;\n}\n\n.bolt-modal-wc--icon.type-confirm {\n  color: var(--bolt-theme-success);\n}\n.bolt-modal-wc--icon.type-warning {\n  color: var(--bolt-theme-warning);\n}\n.bolt-modal-wc--icon.type-error {\n  color: var(--bolt-theme-error);\n}\n.bolt-modal-wc--icon.type-info, .bolt-modal-wc--icon.type-question {\n  color: var(--bolt-theme-info);\n}";

// Mapping modal "type" to icon "name"
const ICONS$1 = {
  confirm: 'checkmark-bold-circle-filled',
  error: 'exclamation-circle-filled',
  info: 'info-square-filled',
  question: 'question-circle-filled',
  warning: 'exclamation-triangle-filled',
};

/**
 * Modals allow users to acknowledge an important message, answers a critical question or complete a task related to a screen's component that triggered it. The `bolt-modal` web component displays a message within a full-page overlay.
 *
 * @class BoltModalElement
 * @element BoltModalElement
 * @extends {BoltElement}
 * @tagname bolt-modal
 * @since 3.1.0
 *
 * @property {String} type - (Optional) For message modals, determines which icon is used. For content modals, omit or use `type="content"` (default). Possible values: [`content`, `confirm`, `error`, `info`, `question`, `warning`]
 * @property {String} heading - (Optional) Sets the heading text to be displayed at the top of the modal.
 * @property {String} primarybutton - (Required) Sets the text to be displayed on the default button. Used for the preliminary or main action.
 * @property {String} secondarybutton - (Optional) Sets the text to be displayed on the supporting button. Used for a supporting or auxillary action.
 * @property {String} tertiarybutton - (Optional) Sets the text to be displayed on the button displayed on far left. Used for an additional action.
 * @property {Boolean} open - (Optional) Property that serves as an alternate to calling the `openModal()` function to open a modal. Setting to true, or its presence, will open the modal. Setting to false, or its absence, will close the modal.
 *
 * @event {CustomEvent} bolt-modal-open - Emitted when opening the modal.
 * @event {CustomEvent} bolt-modal-close - Emitted when closing the modal. Cancelable.
 * @event {CustomEvent} bolt-modal-primary-button-click - Emitted when the default button on the modal is clicked. Cancelable.
 * @event {CustomEvent} bolt-modal-secondary-button-click - Emitted when the secondary button on the modal is clicked (if present). Cancelable
 * @event {CustomEvent} bolt-modal-tertiary-button-click - Emitted when the tertiary button on the modal is clicked (if present). Cancelable
 *
 * @slot default - The main content area of the modal.
 * @slot modal-button-bar -  Add custom buttons using a {@link https://bolt.nwie.net/web/components/button-bar/|bolt-button-bar}. Custom buttons do not close the modal by default.
 * - Do not use button properties `primarybutton`, `secondarybutton`, or `tertiarybuttonon` the modal when adding custom buttons.
 * - Custom buttons do not emit `bolt-modal-primary-button-click`, `bolt-modal-secondary-button-click`, nor `bolt-modal-tertiary-button-click` events.
 * @slot forward - Custom button for the forward/primary action.
 * @slot back - Custom button for the back/secondary action.
 * @slot alternate - Custom button for an alternate action.
 * @slot cancel - Custom button for the cancel/tertiary action.
 *
 * @see https://bolt.nwie.net/web/components/modal
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 */
class BoltModalElement extends BoltElement {
    /**
     * The component's tag name, used for Custom Element registration
     * @readonly
     * @type {String}
     * @static
     */
    static get is() {
      return 'bolt-modal';
    }

    /**
     * LitElement properties/attributes definition.
     * Defines all the reactive properties that can be set as attributes or properties
     * @readonly
     * @type {Object}
     * @static
     */
    static get properties() {
        return {
            type: { type: String },
            dismissable: { type: Boolean },
            heading: { type: String },
            open: {type: Boolean, reflect: true },
            primarybutton: { type: String },
            secondarybutton: { type: String },
            tertiarybutton: { type: String },
            id: { type: String }
        }
    }

    /**
     * Creates an instance of BoltModalElement
     * Initialize public and private properties with default values
     *
     * @constructor
     */
    constructor() {
        super();
        this.type = 'content';
        this.dismissable = false;
        this.heading = '';
        this.primarybutton = 'Close';
        this.secondarybutton = '';
        this.tertiarybutton = '';
        this.id = '';

        // Initialize private properties
        /** @private */
        this.generatedId = this.generateId();
        /** @private */
        this._hasSlottedButtonBar = false;
        /** @private */
        this.scrollVisibility = false;
        /** @private */
        this.focusOnClose = '';
        /** @private */
        this._open = false;

        // Bind event handlers
        /** @private */
        this._onKeydown = this._onKeydown.bind(this);

        /** @private */
        this._resizeWatcher = new ResizeObserver(entry => {
          this.setScrollVisibility();
        });
    }

    /**
     * Getter for component's CSS styles
     * @readonly
     * @type {CSSResult}
     * @static
     */
    static get styles() {
      return CSS$j;
    }

    /**
     * Generates a unique ID for modal elements
     * @returns {String} A unique ID string for modal identification
     * @private
     */
    generateId() {
      return 'bolt-modal-wc--' + Math.floor(Math.random() * 10000000);
    }

    /**
     * Gets the appropriate icon name based on the modal type
     * @returns {String} The icon name for the current modal type, or empty string for content type
     * @readonly
     * @private
     */
    get iconName() {
      switch(this.type) {
        case 'content':
          // fall through
        case '':
          return ''

        case 'confirm':  // fall through
        case 'error':    // fall through
        case 'info':     // fall through
        case 'question': // fall through
        case 'warning':
          return ICONS$1[this.type]

        default:
          console.warn(`Bolt Modal: the type '${this.type}' is not recognized.`);
          return ''
      }
    }

    /**
     * Gets the current open state of the modal
     * @returns {Boolean} True if the modal is open
     * @readonly
     */
    get open() { return !!this._open }

    /**
     * Sets the open state of the modal
     * @param {Boolean} val - Whether the modal should be open
     */
    set open(val) {
      let _oldVal = this._open;
      let _newVal = !!val;
      if( _oldVal !== _newVal){
        this._open = _newVal;
        this.requestUpdate('open', _oldVal);
      }
    }

    /**
     * Handles the actual opening of the modal
     * Sets up focus management, scroll lock, and event listeners
     * @private
     */
    _doOpen() {
       // Store previously focused element
       this.focusOnClose = document.activeElement;

       // Display modal
       this.classList.add('bolt-modal-wc--active');
       this.overlay.show();

      document.querySelector('html').classList.add('bolt-scroll-lock');

       this.setScrollVisibility();
       this.shadowRoot.querySelector('.bolt-modal-wc--scroll-container').scrollTop = 0;

       // Attach resize observer to content
       this._resizeWatcher.observe(this.shadowRoot.querySelector('.bolt-modal-wc--main'));

       // Focus title in modal
       this.tryFocus();

       // Fire event for developer use
       this.$emit('bolt-modal-open');

       this.addEventListener('keydown', this._onKeydown);
    }

    /**
     * Opens the modal by setting the open property to true
     * @public
     */
    openModal(){
      this.open = true;
    }

    /**
     * Closes the modal by setting the open property to false
     * @public
     */
    closeModal() {
      this.open = false;
    }

    /**
     * Handles the actual closing of the modal
     * Cleans up event listeners, restores focus, and removes scroll lock
     * @private
     */
    _doClose() {
      if (!this.$emit('bolt-modal-close')) {
        // `event.preventDefault()` called in external event listener
        return;
      }

      // Disconnect resize observer
      this._resizeWatcher.disconnect();

      // Hide modal
      this.classList.remove('bolt-modal-wc--active');
      this.overlay.hide();
      document.querySelector('html').classList.remove('bolt-scroll-lock');

      // Remove event listeners prior to focusOnClose to prevent handlers from being triggered
      this.removeEventListener('keydown', this._onKeydown);

      // Return focus to active element before modal opened
      if (this.focusOnClose) {
        this.focusOnClose.focus();
      }
    }

    /**
     * Determines whether to show gradient at bottom of modal content based on scroll position
     * @param {Event} [e] - Optional scroll event
     * @private
     */
    setScrollVisibility(e){
        var $scrollContainer = this.shadowRoot.querySelector('.bolt-modal-wc--scroll-container'),
            $scrollContent = this.shadowRoot.querySelector('.bolt-modal-wc--main'),
            containerHeight = $scrollContainer.offsetHeight,
            contentHeight = $scrollContent.offsetHeight,

            // Account for browser rounding
            scrollPosition = Math.ceil($scrollContainer.scrollTop),
            lastPosition = Math.floor(contentHeight - containerHeight - 1);

        // Show scroll gradient when content overflows, hide when scrolled to bottom
        this.scrollVisibility = containerHeight < contentHeight && scrollPosition < lastPosition;

        this.requestUpdate();
    }

    /**
     * Recursively attempts focus on first focusable element until successful
     * Used to ensure proper focus management when modal opens
     * @private
     */
    tryFocus() {
      if (!this.contains(document.activeElement)) {
        requestAnimationFrame(this.tryFocus.bind(this));
      }
      let thisTitle = this.shadowRoot.querySelector('h2.bolt-modal-wc--title');
      thisTitle.focus();
    }

    /**
     * Gets all focusable elements within the modal for keyboard navigation
     * @returns {HTMLElement[]} Array of focusable elements in tab order
     * @readonly
     * @private
     */
    get focusable() {
      // Create list of focusable elements in modal content
      let focusable = [];
      let elements = this.querySelectorAll('[bolt-focusable]:not([slot]), button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      elements.forEach(function(currentValue) {focusable.push(currentValue);}, this);

      // Append forward button, if present
      let forward = this.querySelector('[slot="forward"]') || this.shadowRoot.querySelector('.bolt-modal-wc--footer bolt-button');
      if(forward) {
        focusable.push(forward);
      }

      // Append back button, if present
      let back = this.querySelector('[slot="back"]') || this.shadowRoot.querySelector('.bolt-modal-wc--button-secondary');
      if(back) {
        focusable.push(back);
      }

      // Append alternate button, if present
      let alternate = this.querySelector('[slot="alternate"]');
      if(alternate) {
        focusable.push(alternate);
      }

      // Append cancel button, if present
      let cancel = this.querySelector('[slot="cancel"]') || this.shadowRoot.querySelector('.bolt-modal-wc--button-tertiary');
      if(cancel) {
        focusable.push(cancel);
      }

      return focusable;
    }

    /**
     * Gets the first focusable element in the modal
     * @returns {HTMLElement} The first focusable element
     * @readonly
     * @private
     */
    get firstFocusable() {
      return this.focusable.at(0);
    }

    /**
     * Gets the last focusable element in the modal
     * @returns {HTMLElement} The last focusable element
     * @readonly
     * @private
     */
    get lastFocusable() {
      return this.focusable.at(-1);
    }

    /**
     * Handles keyboard events for modal interactions
     * Supports Escape to close and Tab for focus trapping
     * @param {KeyboardEvent} e - The keyboard event
     * @private
     */
    _onKeydown(e){
      if ( e.key === 'Escape' ) {
        this.closeModal();
      }

      if (e.key === 'Tab') {
        //create local variables so focusable is called once
        let focusable = this.focusable;
        let firstFocusable = focusable.at(0);
        let lastFocusable = focusable.at(-1);

        // If nothing in modal is focused, tabbing restarts the loop
        if (!this.focusable.includes(e.target)){
          e.preventDefault();
          e.stopImmediatePropagation();
          firstFocusable.focus();
        }

        // Loop focus from first to last
        if (e.shiftKey && e.target === firstFocusable) { // shift + tab
          e.preventDefault();
          e.stopImmediatePropagation();
          lastFocusable.focus();
        }
        // Loop focus from last to first
        else if (!(e.shiftKey) && e.target === lastFocusable) { // tab
          e.preventDefault();
          e.stopImmediatePropagation();
          firstFocusable.focus();
        }
      }
    }

    /**
    * Handle tab trapping for templated buttons
    * Prevents duplicate keydown event with bolt-modal as apparent target
    *
    * @param {KeyboardEvent} e - The keyboard event
    * @private
    */
    _onButtonKeydown(e){
      e.stopPropagation();
      this._onKeydown(e);
    }

    /**
     * Handles primary button click events
     * Emits an event and closes the modal if not prevented
     * @param {MouseEvent} e - The click event
     * @public
     */
    buttonClickPrimary(e){
      e.stopPropagation();
      // Emit event for developer use
      if (this.$emit('bolt-modal-primary-button-click')) {
        // event allowed by developer code
        this.closeModal();
      }
    }

    /**
     * Handles secondary button click events
     * Emits an event and closes the modal if not prevented
     * @param {MouseEvent} e - The click event
     * @public
     */
    buttonClickSecondary(e){
      e.stopPropagation();
      // Emit event for developer use
      if (this.$emit('bolt-modal-secondary-button-click')) {
        // event allowed by developer code
        this.closeModal();
      }
    }

    /**
     * Handles tertiary button click events
     * Emits an event and closes the modal if not prevented
     * @param {MouseEvent} e - The click event
     * @public
     */
    buttonClickTertiary(e){
      e.stopPropagation();
      // Emit event for developer use
      if (this.$emit('bolt-modal-tertiary-button-click')) {
        // event allowed by developer code
        this.closeModal();
      }
    }

    /**
     * Gets the overlay element from the shadow DOM
     * @returns {HTMLElement} The bolt-overlay element
     * @readonly
     * @private
     */
    get overlay() {
      return this.shadowRoot.querySelector('bolt-overlay');
    }

    /**
     * Gets the dialog container element from the shadow DOM
     * @returns {HTMLElement} The modal dialog container element
     * @readonly
     * @private
     */
    get dialogContainer() {
      return this.shadowRoot.querySelector('.bolt-modal-wc');
    }

    /**
    * Determines how to handle background curtain click
    * If dismissable, closes the modal; otherwise refocuses first element
    *
    * @param {MouseEvent} e - The click event
    * @private
    */
    _onCurtainClick(e) {
      if (e.target === this.overlay || e.target === this.dialogContainer) {
        if (this.dismissable) {
          this.closeModal();
        } else {
          e.preventDefault();
          this.firstFocusable.focus();
        }
      }
    }

    /**
     * Lifecycle method called after the component updates
     * Handles opening and closing the modal when the open property changes
     *
     * @param {Map} changedProperties - Map of changed properties and their old values
     * @override
     */
    updated(changedProperties) {
      if(changedProperties.has('open')) {
        if(this.open) {
          this._doOpen();
        } else {
          this._doClose();
        }
      }
    }

    /**
     * Handles slot change events for the button bar
     * Detects when a custom button bar is slotted to toggle template rendering
     * @param {Event} e - The slotchange event
     * @private
     */
    onButtonBarSlotchange(e){
      let btnSlot = this.querySelector('bolt-button-bar');
      if(btnSlot !== null){
        this._hasSlottedButtonBar = true;
      }
    }

    /**
     * Renders the component's HTML template
     * Creates the modal structure with overlay, content, and buttons
     *
     * @returns {TemplateResult} The component's rendered template
     * @override
     */
    render() {
      if (!this.id) {
        this.id = this.generatedId;
      }
      return x`
        <bolt-overlay
          @click="${this._onCurtainClick}"
          id="${this.id}-overlay"
        >
          <div
            class="bolt-modal-wc"
            role="dialog"
            aria-modal="true"
            aria-label="${this.heading}"
          >
            <div class="bolt-modal-wc--container">
              <div
                class="bolt-modal-wc--scroll-container"
                @scroll="${this.setScrollVisibility}"
              >
                <div class="bolt-modal-wc--main">
                  <div class="bolt-modal-wc--heading">
                    ${ this.iconName
                      ? x`<bolt-icon name="${this.iconName}" class="bolt-modal-wc--icon type-${this.type}" decorative></bolt-icon>`
                      : ''
                    }
                    <h2 class="bolt-modal-wc--title" id="${this.id}-title" tabindex="-1">${this.heading}</h2>
                  </div>
                  <div class="bolt-modal-wc--content">
                    <slot></slot>
                  </div>
                </div>
              </div>

              <div class="bolt-modal-wc--footer">
                <div class="bolt-modal-wc--scroll-gradient bolt-modal-wc--scroll-gradient-${this.scrollVisibility ? 'visible' : 'hidden'}"></div>

                <slot name="modal-button-bar" @slotchange="${this.onButtonBarSlotchange()}">
                  ${!this._hasSlottedButtonBar
                    ? x`
                      <bolt-button-bar>
                        ${this.primarybutton
                          ? x`
                            <bolt-button
                              @click="${this.buttonClickPrimary}"
                              @keydown="${this._onButtonKeydown}"
                              class="bolt-modal-wc--button-primary"
                              slot="forward"
                              type="solid"
                              width="full"
                            >${this.primarybutton}</bolt-button>`
                          : ''
                        }

                        ${this.secondarybutton
                          ? x`
                            <bolt-button
                              @click="${this.buttonClickSecondary}"
                              @keydown="${this._onButtonKeydown}"
                              class="bolt-modal-wc--button-secondary"
                              slot="back"
                              type="outline"
                              width="full"
                            >${this.secondarybutton}</bolt-button>`
                          : ''
                        }

                        ${this.tertiarybutton
                          ? x`
                            <bolt-button
                              @click="${this.buttonClickTertiary}"
                              @keydown="${this._onButtonKeydown}"
                              class="bolt-modal-wc--button-tertiary"
                              slot="cancel"
                              type="outline"
                              width="full"
                            >${this.tertiarybutton}</bolt-button>`
                          : ''
                        }
                      </bolt-button-bar>
                    `
                    : ''
                  }
                </slot>
              </div>
            </div>
          </div>
        </bolt-overlay>
      `;
    }
}

/**
 * This module exports the modal component and its initialization function.
 * The modal component creates an overlay dialog that appears on top of
 * the main content, requiring user interaction before returning to the
 * underlying interface.
 *
 * @module bolt-modal
 * @since 3.1.0
 *
 * @see {@link ./elements/bolt-modal|BoltModalElement}
 */


/**
 * Initializes the modal component by registering it as a custom element
 *
 * This function:
 * 1. Initializes dependencies (Button, ButtonBar, Icon, and Overlay components)
 * 2. Registers the BoltModalElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$f() {
  // Upstream
  await initialize$p();
  await initialize$o();
  await initialize$y();
  await initialize$v();

  // Local
  BoltModalElement.$define();
}

var index$e = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltModalElement: BoltModalElement,
  initialize: initialize$f
});

var CSS$i = ":host {\n  --accent: var(--bolt-theme-info);\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(12px, 12px + 2px * (var(--bolt-typography-basis) - 360) / 840, 14px);\n  line-height: clamp(1.33, 1.33 + 0.1 * (var(--bolt-typography-basis) - 360) / 840, 1.43);\n  display: block;\n}\n\n:host([type=warning]) {\n  --accent: var(--bolt-theme-warning);\n}\n\n#root {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  gap: 12px;\n}\n\n#icon-wrapper {\n  border-right: 1px solid var(--accent);\n  color: var(--accent);\n  flex-shrink: 0;\n  text-align: center;\n  width: 48px;\n}\n\n#message {\n  flex-grow: 1;\n}\n#message header {\n  font-weight: 500;\n}";

/**
 * Default note type
 * @type {String}
 */
const DEFAULT_TYPE = 'info';

/**
 * Mapping of note types to their corresponding icon names
 * @type {Object.<string, string>}
 */
const ICONS = {
  'info': 'info-square-filled',
  'warning': 'exclamation-triangle-filled',
};

/**
 * Mapping of note types to their default heading text
 * @type {Object.<string, string>}
 */
const HEADINGS = {
  'info': 'Information',
  'warning': 'Warning',
};

// Defaults
ICONS.default = ICONS[DEFAULT_TYPE];
HEADINGS.default = HEADINGS[DEFAULT_TYPE];


/**
 * Notes bring attention to supplemental information in non-critical contexts.
 *
 * @class BoltNoteElement
 * @element BoltNoteElement
 * @extends {BoltElement}
 * @tagname bolt-note
 * @since 6.1.0
 *
 * @property {String} type - (Optional) Determines the visual appearance of the Note. Default value is `info`. Possible values: [`info`, `warning`]
 * @property {String} heading - (Optional) Configures the displayed header in rendered output. Default value is based on configured `type`. Setting to a blank string (`""`) will remove the header from output.
 *
 * @slot default - The main content area of the note.
 *
 * @see https://bolt.nwie.net/web/components/note
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 */
class BoltNoteElement extends BoltElement {
  /**
   * The component's tag name, used for Custom Element registration
   * @readonly
   * @type {String}
   * @static
   */
  static is = 'bolt-note'

  /**
   * Getter for component's CSS styles
   * @readonly
   * @type {CSSResult}
   * @static
   */
  static styles = CSS$i

  /**
   * LitElement properties/attributes definition.
   * Defines all the reactive properties that can be set as attributes or properties
   * @readonly
   * @type {Object}
   * @static
   */
  static properties = {
    type: {
      type: String,
      default: DEFAULT_TYPE
    },
    heading: {
      type: String,
    },
  }

  /**
   * Renders the component's HTML template
   * Creates the note structure with icon, heading, and content
   *
   * @returns {TemplateResult} The component's rendered template
   * @override
   */
  render() {
    return x`
      <div
        aria-labelledby="message"
        id="root"
        role="note"
      >
        <div id="icon-wrapper">
          <bolt-icon
            decorative
            name=${this._iconName}
            fluid>
          </bolt-icon>
        </div>
        <div id="message">
          ${ this._displayHeading ? x`
            <header>${this._displayHeading}</header>
          ` : '' }
          <div>
            <slot></slot>
          </div>
        </div>
      </div>
    `
  }

  /**
   * Compute displayed heading based on:
   *   - configured heading
   *   - type-specific default heading
   *
   * @returns {String} The heading text to display, or empty string if none
   * @readonly
   * @private
   */
  get _displayHeading() {
    if (typeof this.heading === 'string') {
      return this.heading
    }
    return (HEADINGS[this.type] || HEADINGS.default)
  }

  /**
   * Compute displayed icon based on type.
   *
   * @returns {String} The icon name for the current note type
   * @readonly
   * @private
   */
  get _iconName() {
    return (ICONS[this.type] || ICONS.default)
  }
}

/**
 * This module exports the note component and its initialization function.
 * Notes bring attention to supplemental information in non-critical contexts.
 *
 * @module bolt-note
 * @since 6.1.0
 *
 * @see {@link ./elements/bolt-note|BoltNoteElement}
 */


/**
 * Initializes the note component by registering it as a custom element
 *
 * This function:
 * 1. Initializes dependencies (Icon component)
 * 2. Registers the BoltNoteElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$e() {
  // Upstream
  await initialize$y();

  // Local
  BoltNoteElement.$define();
}

var index$d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltNoteElement: BoltNoteElement,
  initialize: initialize$e
});

var CSS$h = ":host {\n  --accent: var(--bolt-theme-error);\n  --background: var(--bolt-theme-errorContainer);\n  --color: var(--bolt-theme-onErrorContainer);\n  background: none;\n  border: 0;\n  display: block;\n  margin: 0;\n  padding: 0;\n}\n\n:host([type=warning]) {\n  --accent: var(--bolt-theme-warning);\n  --background: var(--bolt-theme-warningContainer);\n  --color: var(--bolt-theme-onWarningContainer);\n}\n\n:host([type=info]) {\n  --accent: var(--bolt-theme-info);\n  --background: var(--bolt-theme-infoContainer);\n  --color: var(--bolt-theme-onInfoContainer);\n}\n\n:host([type=success]) {\n  --accent: var(--bolt-theme-success);\n  --background: var(--bolt-theme-successContainer);\n  --color: var(--bolt-theme-onSuccessContainer);\n}\n\n#root {\n  /* css-core:context.reset */\n  --bolt-context-surface: var(--bolt-theme-surface);\n  --bolt-context-onSurface: var(--bolt-theme-onSurface);\n  --bolt-context-onSurfaceVariant: var(--bolt-theme-onSurfaceVariant);\n  --bolt-context-outline: var(--bolt-theme-outline);\n  --bolt-context-outlineVariant: var(--bolt-theme-outlineVariant);\n  --bolt-context-focus: var(--bolt-theme-focus);\n  --bolt-context-link: var(--bolt-theme-link);\n  --bolt-context-accent: var(--bolt-theme-accent);\n  --bolt-context-accentHigh: var(--bolt-theme-accentHigh);\n  --bolt-context-accentHighest: var(--bolt-theme-accentHighest);\n  --bolt-context-onAccent: var(--bolt-theme-onAccent);\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(14px, 14px + 2px * (var(--bolt-typography-basis) - 360) / 840, 16px);\n  line-height: clamp(1.43, 1.43 + 0.07 * (var(--bolt-typography-basis) - 360) / 840, 1.5);\n  background: var(--background);\n  border: 1px solid var(--accent);\n  display: flex;\n  gap: 12px;\n  padding: var(--bolt-space-md);\n}\n\n#body {\n  color: var(--color);\n}\n\nbolt-icon {\n  color: var(--accent);\n}";

/**
 * Mapping of notification types to their corresponding icon names
 * @type {Object.<string, string>}
 */
const TYPE_ICONS = {
  error: 'exclamation-circle-filled',
  info: 'info-square-filled',
  success: 'checkmark-bold-circle-filled',
  warning: 'exclamation-triangle-filled',
};
/**
 * Set default icon for fallback cases
 */
TYPE_ICONS.default = TYPE_ICONS.error;


/**
 * Notifications make users aware of relevant issues that should be either noted, avoided or addressed. HTML may be used within the notification content, including links.
 *
 * @class BoltNotificationElement
 * @element BoltNotificationElement
 * @extends {BoltElement}
 * @tagname bolt-notification
 * @since 3.0.0
 *
 * @property {String} type - (Optional) The type of notification scheme to be displayed. Default value is `error`. Possible values: [`error`, `info`, `success`, `warning`]
 *
 * @slot default - The main content area of the notification message.
 *
 * @see https://bolt.nwie.net/web/components/notification
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 */
class BoltNotificationElement extends BoltElement {
  /**
   * The component's tag name, used for Custom Element registration
   * @readonly
   * @type {String}
   * @static
   */
  static is = 'bolt-notification'

  /**
   * Getter for component's CSS styles
   * @readonly
   * @type {CSSResult}
   * @static
   */
  static styles = CSS$h

  /**
   * LitElement properties/attributes definition.
   * Defines all the reactive properties that can be set as attributes or properties
   * @readonly
   * @type {Object}
   * @static
   */
  static properties = {
    'type': {
      type: String,
      default: 'error',
      reflect: true, // necessary to apply variant styling
    },
  }

  /**
   * Renders the component's HTML template
   * Creates the notification structure with icon and content, including proper accessibility attributes
   *
   * @returns {TemplateResult} The component's rendered template
   * @override
   */
  render() {
    return x`
      <div
        id="root"
        role="${this._attrRole}"
        aria-live="${this._attrAriaLive}"
      >
        <bolt-icon
          name="${TYPE_ICONS[this.type] || TYPE_ICONS.default}"
          title="${this.type} ${this._attrRole}"
        ></bolt-icon>

        <div id="body">
          <slot></slot>
        </div>
      </div>
    `
  }

  /**
   * Gets the appropriate aria-live attribute value based on notification type
   * Info notifications use 'polite' while others use 'assertive' for proper screen reader announcements
   *
   * @returns {String} The aria-live attribute value ('polite' or 'assertive')
   * @readonly
   * @private
   */
  get _attrAriaLive() {
    return (this.type === 'info' ? 'polite' : 'assertive')
  }

  /**
   * Gets the appropriate ARIA role based on notification type
   * Info notifications use 'status' while others use 'alert' for proper semantic meaning
   *
   * @returns {String} The ARIA role ('status' or 'alert')
   * @readonly
   * @private
   */
  get _attrRole() {
    return (this.type === 'info' ? 'status' : 'alert')
  }
}

/**
 * Alias element for the icon displayed in the {@link BoltNotificationElement} component
 *
 * @class BoltAlertElement
 * @element BoltAlertElement
 * @extends {BoltNotificationElement}
 * @tagname bolt-alert
 * @since 3.0.0
 *
 */
class BoltAlertElement extends BoltNotificationElement {
  /**
   * The component's tag name, used for Custom Element registration
   * @readonly
   * @type {String}
   * @static
   */
  static get is() {
    return 'bolt-alert';
  }
}

/**
 * This module exports the notification components and their initialization function.
 * The notification components consist of:
 * - `<bolt-notification>`: Displays informational messages to users
 * - `<bolt-alert>`: Alias for icon displayed in bolt-notification
 *
 * @module bolt-notification
 * @since 3.0.0
 *
 * @see {@link ./elements/bolt-notification|BoltNotificationElement}
 * @see {@link ./elements/bolt-alert|BoltAlertElement}
 */


/**
 * Initializes the notification components by registering them as custom elements
 *
 * This function:
 * 1. Initializes dependencies (Icon component)
 * 2. Registers the BoltNotificationElement
 * 3. Registers the BoltAlertElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$d() {
  // Upstream
  await initialize$y();

  // Local
  BoltNotificationElement.$define();
  BoltAlertElement.$define();
}

var index$c = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltAlertElement: BoltAlertElement,
  BoltNotificationElement: BoltNotificationElement,
  initialize: initialize$d
});

var CSS$g = "/* ======================================== *\\\n * PUBLIC VARIABLES\n\\* ======================================== */\n/* ======================================== *\\\n * TYPE VARIATIONS\n\\* ======================================== */\n/* ======================================== *\\\n * STATE APPEARANCE MIXINS\n\\* ======================================== */\n/* ======================================== *\\\n * LAYOUT MIXINS\n\\* ======================================== */\n/* ======================================== *\\\n * LAYOUT MIXINS\n\\* ======================================== */\n:host {\n  display: inline-block;\n}\n\n@layer layout {\n  #root {\n    align-items: center;\n    display: flex;\n    gap: 12px;\n    justify-content: center;\n  }\n  .bolt-dialer-wc {\n    --border-color: var(--bolt-theme-outline);\n    align-items: stretch;\n    background: var(--bolt-theme-inputSurface);\n    border: 1px solid var(--border-color);\n    border-radius: 4px;\n    cursor: pointer;\n    box-sizing: border-box;\n    display: flex;\n    overflow: hidden;\n    transition: all 150ms;\n    /**\n    * Remove spin (arrow) buttons webkit based browsers\n    */\n  }\n  .bolt-dialer-wc:focus, .bolt-dialer-wc:focus-within {\n    /* css-core:context.focus */\n    box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n    outline: none;\n    text-decoration-color: transparent;\n    --border-color: var(--bolt-theme-focus);\n    background: var(--bolt-theme-inputSurfaceHigh);\n  }\n  .bolt-dialer-wc--inputContainer {\n    align-items: center;\n    border-right: 1px solid var(--border-color);\n    color: var(--bolt-theme-onSurface);\n    display: flex;\n    transition: all 150ms;\n  }\n  .bolt-dialer-wc--inputContainer:hover {\n    background: var(--bolt-theme-inputSurfaceHigh);\n  }\n  .bolt-dialer-wc--inputContainer input {\n    padding: var(--bolt-space-xs);\n    appearance: textfield;\n    background: rgba(0, 0, 0, 0);\n    border: 0;\n    cursor: text;\n    font: inherit;\n    height: 100%;\n    min-width: 1ch;\n    outline: none;\n    text-align: right;\n    width: 100%;\n  }\n  .bolt-dialer-wc--inputContainer input::-webkit-outer-spin-button, .bolt-dialer-wc--inputContainer input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    display: none;\n    margin: 0;\n  }\n  .bolt-dialer-wc--suffix {\n    color: var(--bolt-theme-onSurfaceVariant);\n    padding-right: var(--bolt-space-xs);\n  }\n  .bolt-dialer-wc--hidden-input {\n    padding-left: var(--bolt-space-xs);\n    visibility: hidden;\n  }\n  .bolt-dialer-wc--action-button {\n    outline: 2px dotted rgba(0, 0, 0, 0);\n    align-items: center;\n    background: var(--bolt-theme-inputSurface);\n    border: none;\n    color: var(--bolt-theme-onSurface);\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    padding: var(--bolt-space-xs);\n    transition: all 350ms;\n  }\n  .bolt-dialer-wc--action-button:enabled:hover {\n    background: var(--bolt-theme-inputSurfaceHigh);\n  }\n  .bolt-dialer-wc--action-button:enabled:focus, .bolt-dialer-wc--action-button:enabled:focus:hover {\n    outline-color: currentColor;\n    outline-offset: calc(-2px - var(--bolt-space-2xs));\n    background: var(--bolt-theme-inputSurfaceHigh);\n    transition: all 150ms;\n  }\n  .label {\n    font-weight: 500;\n  }\n}\n@layer appearance {}";

const DEFAULTS$3 = {
  current: 1,
  total: 1,
};


class BoltPageDialerElement extends BoltElement {
  static is = "bolt-page-dialer";
  static styles = CSS$g;
  static properties = {
    inputvalue: {attribute: false},
    // current page number
    current: { type: Number, default: DEFAULTS$3.current, reflect: true },
    // total number of pages
    total: { type: Number, default: DEFAULTS$3.total },
  };

  updated(changedProperties) {
    // Validate properties 
    if (changedProperties.has('total')) {
      const totalValue = Number(this.total);
      if(isNaN(this.total) || totalValue < 1) this.total = DEFAULTS$3.total;
    }

    if (changedProperties.has('current')) {
      const currentValue = Number(this.current);
      if(isNaN(this.current) || currentValue < 1 || currentValue > this.total) this.current = DEFAULTS$3.current;
      this.inputValue = this.current;
    }

    super.updated(changedProperties);
  }

  render() {
    return x`
      <form id="root" @submit="${this.handleSubmit}">
        <label 
          class="label"
          for="bolt-dialer-wc--input"
          >
          Go to page
        </label>
        <div class="bolt-dialer-wc">
          <div 
            class="bolt-dialer-wc--inputContainer"
            @click="${this.inputFocus}"
            >
            <input
              id="bolt-dialer-wc--input" 
              style="width: calc(${this.total.toString().length}ch + (var(--bolt-space-xs) * 2))" 
              type="number" 
              inputmode="numeric"
              .value="${this.inputvalue ?? this.current}"
              @blur="${this.handleBlur}"
              @input="${this.handleInput}"
              @keydown="${this.handleKeydown}" 
              min="1" 
              max="${this.total}"
            > 
            <div class="bolt-dialer-wc--suffix">of ${this.total}</div>
          </div>
          <button
            type="submit" 
            class="bolt-dialer-wc--action-button"
            aria-label="Go to page"
            >
            <bolt-icon fixed size="md" title="Go to page" name="arrow-right"></bolt-icon>
          </button>
        </div>
      </form>
    `;
  }

  handleBlur(event) {
    const inputElement = event.target;
    const currentValue = inputElement?.value;
    
    if(currentValue === '') {
      this.inputvalue = this.current;
      inputElement.value = this.current;
    }
  }

  
  handleInput(event) {
    const inputElement = event.target;
    let value = Number(inputElement?.value);

    // Ignore if field is blank
    if(inputElement.value === '') return;

    // Set input to blank if value is 0
    if(value === 0) {
      this.inputvalue = '';
      event.target.value = '';
      return;
    }

    // Clamp value between valid numbers
    value = Math.min(Math.max(value, 1), this.total);
    
    // Sync if mismatched
    if(value !== this.inputvalue || value !== inputElement.value) {
      this.inputvalue = value;
      inputElement.value = value;
    }
  }

  handleKeydown(event) {
    // Prevent scientific notation & negative numbers
    if(event.key === '-' || event.key.toLowerCase() === 'e') {
      event.preventDefault();
    }
  }

  /**
   * Handles emitting the "bolt-dialer-update" event. 
   *
   * @private
   * @emits BoltPageDialerElement#bolt-goto
   *
   */
  handleSubmit(event) {
    event.preventDefault();
    const inputElement = event.target?.querySelector('input');
    const value = Number(inputElement.value);

    if(
      inputElement.value === '' || 
      isNaN(value) || 
      value === this.current
    ) return;

    this.$emit("bolt-goto", { detail: { page: value }, bubbles: true, composed: true });
  }

  inputFocus(event) {
    if(event.target?.tagName !== 'INPUT')
      this.shadowRoot.querySelector('input').focus();
  }
}

var CSS$f = "/* ======================================== *\\\n * PUBLIC VARIABLES\n\\* ======================================== */\n/* ======================================== *\\\n * TYPE VARIATIONS\n\\* ======================================== */\n/* ======================================== *\\\n * STATE APPEARANCE MIXINS\n\\* ======================================== */\n/* ======================================== *\\\n * LAYOUT MIXINS\n\\* ======================================== */\n/* ======================================== *\\\n * LAYOUT MIXINS\n\\* ======================================== */\n:host {\n  display: inline-block;\n}\n\n.sr-only {\n  border: 0 !important;\n  outline: none !important;\n  box-shadow: none !important;\n  width: 1px !important;\n  height: 1px !important;\n  clip: rect(1px, 1px, 1px, 1px); /* old & current Browsers */\n  clip-path: inset(50%); /* browsers in the future */\n  white-space: nowrap;\n  margin: -1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  z-index: -99999 !important;\n  color: transparent;\n  background-color: transparent;\n  text-shadow: none;\n}\n\n@layer config {\n  a {\n    --onBase: var(--bolt-context-onAccent);\n    --base: var(--bolt-context-accent);\n    --baseHigh: var(--bolt-context-accentHigh);\n    --baseHighest: var(--bolt-context-accentHighest);\n    --gap: 0;\n    --pad-x: 0;\n    --pad-x-plus: 0;\n    --pad-y: 0;\n  }\n}\n@layer layout {\n  #root {\n    display: flex;\n    gap: 4px;\n    justify-content: center;\n  }\n  /*\n   * [1] override of Button.layout-base\n   */\n  a {\n    box-sizing: border-box;\n    display: inline-flex;\n    justify-content: center;\n    padding: var(--pad-y) var(--pad-x);\n    --pad-x: var(--bolt-space-md);\n    --pad-y: var(--bolt-space-xs);\n    align-items: center;\n  }\n  a.isCurrent {\n    position: relative;\n  }\n  a.isCurrent::after {\n    content: \"\";\n    height: 2px;\n    inset: auto 2px 2px;\n    position: absolute;\n  }\n  #prevPage,\n  #nextPage {\n    --pad-x: var(--pad-y);\n  }\n  #prevPage > *,\n  #nextPage > * {\n    margin-inline: 0;\n  }\n}\n@layer appearance {\n  a {\n    border-radius: 4px;\n    text-decoration: none;\n    transition: all 350ms;\n    background: none;\n    border: 1px solid rgba(0, 0, 0, 0);\n    color: var(--base);\n    font-family: var(--bolt-fontFamily-sansSerif);\n    font-weight: 400;\n    font-size: clamp(14px, 14px + 2px * (var(--bolt-typography-basis) - 360) / 840, 16px);\n    line-height: clamp(1.43, 1.43 + 0.07 * (var(--bolt-typography-basis) - 360) / 840, 1.5);\n    font-weight: 500;\n  }\n  a[href]:focus {\n    background: var(--baseHigh);\n    border: 1px solid rgba(0, 0, 0, 0);\n    color: var(--onBase);\n    cursor: pointer;\n    /* css-core:context.focus */\n    box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n    outline: none;\n    text-decoration-color: transparent;\n  }\n  a[href]:hover {\n    background: var(--baseHigh);\n    border: 1px solid rgba(0, 0, 0, 0);\n    color: var(--onBase);\n    cursor: pointer;\n  }\n  a[href]:active {\n    background: var(--baseHighest);\n    border: 1px solid rgba(0, 0, 0, 0);\n    color: var(--onBase);\n  }\n  a > * {\n    pointer-events: none;\n  }\n  a.isCurrent {\n    color: inherit;\n  }\n  a.isCurrent::after {\n    background-color: var(--bolt-context-accent);\n  }\n  a[aria-disabled] {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  a[aria-disabled] > * {\n    pointer-events: none;\n  }\n}";

/**
 * Ensure that we ALWAYS get an integer from parsing a given arg.
 *
 * Returns 0, if parseInt() would normally return NaN.
 *
 * @param {*} val
 * @returns {number}
 */
function parseIntSafe(val) {
  // self-correct to 0 if parseInt(val) would return NaN
  let _value = parseInt(val) || 0;

  return _value
}


/**
 * Clamp value between min and max.
 *
 * @param {number} val
 * @param {number} minOrMax
 * @param {number} maxOrMin
 *
 * @returns {number}
 */
function clamp(val, minOrMax, maxOrMin) {
  let _val = parseIntSafe(val);
  let _minOrMax = parseIntSafe(minOrMax);
  let _maxOrMin = parseIntSafe(maxOrMin);

  let _min = Math.min(_minOrMax, _maxOrMin);
  let _max = Math.max(_minOrMax, _maxOrMin);

  let result = Math.min(_max, Math.max(_min, _val));

  return result
}

/**
 * Configuration constants for page spread limits
 * @type {Object}
 */
const SPREAD = {
  min: 1,
  max: 5,
};

/**
 * Configuration constants for page numbers
 * @type {Object}
 */
const PAGES = {
  unknown: Infinity,
  min: 1,
};

/**
 * Default values for component properties
 * @type {Object}
 */
const DEFAULTS$2 = {
  current: PAGES.min,
  disablenext: false,
  nofirstlast: false,
  spread: SPREAD.max,
  total: PAGES.unknown,
  arialabel: 'Pagination',
};


/**
 * Pagination allows users to navigate content or data that is grouped on separate pages. The page navigator primarily enables relative navigation from the current page. Specifically, it enables navigation to the following:
 * - First page
 * - Previous page
 * - Adjacent pages
 * - Next page
 * - Last page
 *
 * The navigator is not responsible for performing navigation logic. It is purely an interface for downstream projects to connect their own navigation business logic.
 *
 * @class BoltPageNavigatorElement
 * @element BoltPageNavigatorElement
 * @extends {BoltElement}
 * @tagname bolt-page-navigator
 * @since 6.4.0
 *
 * @property {Number} current - (Optional) Current page number. Default is `1`. Values: `1` ≤ `current` ≤ `total`
 * @property {Boolean} disablenext - (Optional) When true, disables the "Next" button. Only applies when total is unknown.
 * @property {Boolean} nofirstlast - (Optional) When true, hides the "First" and "Last" buttons.
 * @property {Number} spread - (Optional) Maximum number of page links to display. In some configurations, the resolved value may be less than the configured value. Default is `5`. Values: `1` ≤ `spread` ≤ `5`
 * @property {Number} total - (Optional) Total number of pages. Various configurations may be limited if this value is not finite.
 *
 * @event {CustomEvent} bolt-goto - Emitted when an active link is clicked. The event provides the detail `data` for `page` - the target page number that should be navigated to
 *
 * @see https://bolt.nwie.net/web/components/pagination
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @example
 * <bolt-page-navigator
    spread="3"
    total="10"
  ></bolt-page-navigator>
 *
 */
class BoltPageNavigatorElement extends BoltElement {
  /**
   * The component's tag name, used for Custom Element registration
   * @readonly
   * @type {String}
   * @static
   */
  static is = 'bolt-page-navigator'

  /**
   * Getter for component's CSS styles
   * @readonly
   * @type {CSSResult}
   * @static
   */
  static styles = CSS$f

  /**
   * LitElement properties/attributes definition.
   * Defines all the reactive properties that can be set as attributes or properties
   * @readonly
   * @type {Object}
   * @static
   */
  static properties = {
    arialabel: { type: String, default: DEFAULTS$2.arialabel },
    // current page #
    current: { type: Number, default: DEFAULTS$2.current },
    // disables the ">" button, when true
    disablenext: { type: Boolean, default: DEFAULTS$2.disablenext },
    // skips rendering "First" and "Last" buttons, when true
    nofirstlast: { type: Boolean, default: DEFAULTS$2.nofirstlast },
    // max # of pages to show at once
    spread: { type: Number, default: DEFAULTS$2.spread },
    // total # of pages
    total: { type: Number, default: DEFAULTS$2.total },
  }

  /**
   * Renders the component's HTML template
   * Creates the pagination navigation structure with all navigation elements
   *
   * @returns {TemplateResult} The component's rendered template
   * @override
   */
  render() {
    // ensure that we always have a non-blank [aria-label]
    const _ariaLabel = (this.arialabel || DEFAULTS$2.arialabel);

    return x`
      <nav id="root" aria-label="${_ariaLabel}">
        ${this._renderFirstPage()}
        ${this._renderPrevPage()}
        ${this._renderNumberedPages()}
        ${this._renderNextPage()}
        ${this._renderLastPage()}
      </nav>
    `
  }

  /**
   * Helper for rendering "first" page link
   * Creates either an active link or disabled element based on navigation state
   *
   * @returns {TemplateResult|String} The rendered first page element or empty string
   * @private
   */
  _renderFirstPage() {
    const _ID = 'firstPage';
    const _PAGE = 1;

    if (!this._showFirstPage) {
      return ''
    }

    if (this._canGoFirst) {
      /* a[href][aria-label][data-page] */
      return (x`
        <a
          @click=${this._onClick}
          aria-label="first page"
          data-page=${_PAGE}
          href="#"
          id=${_ID}
        >First</a>
      `)
    } else {
      /* a11y tests won't pass contrast tests without [aria-disabled] */
      /* a[aria-disabled="true"][aria-hidden="true"] */
      return (x`
        <a
          aria-hidden="true"
          aria-disabled="true"
          id=${_ID}
        >First</a>
      `)
    }
  }

  /**
   * Helper for rendering "last" page link
   * Creates either an active link or disabled element based on navigation state
   *
   * @returns {TemplateResult|String} The rendered last page element or empty string
   * @private
   */
  _renderLastPage() {
    const _ID = 'lastPage';
    const _PAGE = this._safeTotal;

    if (!this._showLastPage) {
      return ''
    }

    if (this._canGoLast) {
      /* a[href][aria-label][data-page] */
      return (x`
        <a
          @click=${this._onClick}
          aria-label="last page"
          data-page=${_PAGE}
          href="#"
          id=${_ID}
        >Last</a>
      `)
    } else {
      /* a11y tests won't pass contrast tests without [aria-disabled] */
      /* a[aria-disabled][aria-hidden="true"] */
      return (x`
        <a
          aria-hidden="true"
          aria-disabled="true"
          id=${_ID}
        >Last</a>
      `)
    }
  }

  /**
   * Helper for rendering "next" (">") page link
   * Creates either an active link or disabled element based on navigation state
   *
   * @returns {TemplateResult} The rendered next page element
   * @private
   */
  _renderNextPage() {
    const _ID = 'nextPage';
    const _ICON = x`<bolt-icon name="chevron-right" decorative></bolt-icon>`;
    const _PAGE = (this._safeCurrent + 1);

    if (this._canGoNext) {
      /* a[href][aria-label][data-page] */
      return (x`
        <a
          @click=${this._onClick}
          aria-label="next page"
          data-page=${_PAGE}
          href="#"
          id=${_ID}
        >${_ICON}</a>
      `)
    } else {
      /* a11y tests won't pass contrast tests without [aria-disabled] */
      /* a[aria-disabled][aria-hidden="true"] */
      return (x`
        <a
          aria-hidden="true"
          aria-disabled="true"
          id=${_ID}
        >${_ICON}</a>
      `)
    }
  }

  /**
   * Helper for rendering span of numbered links.
   * Creates numbered page links with proper accessibility attributes
   *
   * @returns {TemplateResult[]} Array of rendered numbered page elements
   * @private
   */
  _renderNumberedPages() {
    return this._pageLinks.map(
      (link) => (link.isCurrent ?
        /*
         * - `a[aria-current]` provides no useful feedback via ATs
         * - `a[aria-label]` for VO compat
         * - `a > span[aria-hidden]` to hide sighted content from ATs
         * - `a > span.sr-only` for NVDA & JAWS compat
         */
        x`
          <a
            aria-label=${link.ariaLabel}
            class="numbered isCurrent"
          >
            <span aria-hidden="true">${link.page}</span>
            <span class="sr-only">on page ${link.page}</span>
          </a>
        ` :
        x`
          <a
            @click=${this._onClick}
            aria-label=${link.ariaLabel}
            class="numbered"
            data-page=${link.page}
            href="#"
          >${link.page}</a>
        `
      )
    )
  }

  /**
   * Helper for rendering "previous" ("<") page link
   * Creates either an active link or disabled element based on navigation state
   *
   * @returns {TemplateResult} The rendered previous page element
   * @private
   */
  _renderPrevPage() {
    const _ID = 'prevPage';
    const _ICON = x`<bolt-icon name="chevron-left" decorative></bolt-icon>`;
    const _PAGE = (this._safeCurrent - 1);

    if (this._canGoPrev) {
      /* a[href][aria-label][data-page] */
      return (x`
        <a
          @click=${this._onClick}
          aria-label="previous page"
          data-page=${_PAGE}
          href="#"
          id=${_ID}
        >${_ICON}</a>
      `)
    } else {
      /* a11y tests won't pass contrast tests without [aria-disabled] */
      /* a[aria-disabled="true"][aria-hidden="true"] */
      return (x`
        <a
          aria-hidden="true"
          aria-disabled="true"
          id=${_ID}
        >${_ICON}</a>
      `)
    }
  }


  /**
   * Compute whether we're able to navigate to the first page of data,
   * based on configuration.
   *
   * @returns {Boolean} True if first page navigation is possible
   * @readonly
   * @private
   */
  get _canGoFirst() {
    return !this._isFirstPage
  }

  /**
   * Compute whether we're able to navigate to the last page of data,
   * based on configuration.
   *
   * @returns {Boolean} True if last page navigation is possible
   * @readonly
   * @private
   */
  get _canGoLast() {
    if (!this._hasKnownPages) {
      // We cannot navigate to the last page
      // when we don't know the total # of pages.
      return false
    }

    return !this._isLastPage
  }

  /**
   * Compute whether we're able to navigate to the next page of data,
   * based on configuration.
   *
   * @returns {Boolean} True if next page navigation is possible
   * @readonly
   * @private
   */
  get _canGoNext() {
    if (this._hasKnownPages) {
      // Allow forward navigation until the last page is reached.
      return !this._isLastPage
    }

    // When the total # of pages is unknown, assume we can navigate forward by
    // 1 page at a time.  If forward navigation fails due to external criteria,
    // the component can be reconfigured to _explicitly_ disable forward
    // navigation via downstream business logic, with the use of `disablenext`.
    return !this.disablenext
  }

  /**
   * Compute whether we're able to navigate to the previous page of data,
   * based on configuration.
   *
   * @returns {Boolean} True if previous page navigation is possible
   * @readonly
   * @private
   */
  get _canGoPrev() {
    return !this._isFirstPage
  }

  /**
   * Compute the _ideal_ position of the current page within page spread.
   *
   * This won't apply to every scenario.
   *
   * @returns {Number} The center index position for optimal page spread layout
   * @readonly
   * @private
   */
  get _centermostIndex() {
    return Math.floor(this._safeSpread / 2)
  }

  /**
   * Determine if the total number of pages is known.
   *
   * NOTE: always check against _authored_ config, not the "safe" value.
   *
   * @returns {Boolean} True if the total number of pages is known and finite
   * @readonly
   * @private
   */
  get _hasKnownPages() {
    let _total = parseInt(this.total);

    // FALSE if ±Infinity or NaN
    if (!Number.isFinite(_total)) {
      return false
    }

    return (_total > 0)
  }

  /**
   * Compute the last page number that _might_ display if the "current" page
   * were perfectly centered in the page span and there were no upper and
   * lower bounds
   *
   * - result may be greater than last valid page
   *
   * @returns {Number} The ideal end page for centered layout
   * @readonly
   * @private
   */
  get _idealEndPage() {
    return this._idealStartPage + this._spanDelta
  }

  /**
   * Compute the first page number that WOULD display if the "current" page
   * were perfectly centered in the the page span and there were no upper and
   * lower bounds.
   *
   * - result may be below 1
   *
   * @returns {Number} The ideal start page for centered layout
   * @readonly
   * @private
   */
  get _idealStartPage() {
    let result = this._safeCurrent - this._centermostIndex;

    return result
  }

  /**
   * Check if we should be viewing page 1.
   *
   * This is helpful in determining if "First" or "<" buttons should be disabled.
   *
   * @returns {Boolean} True if currently on the first page
   * @readonly
   * @private
   */
  get _isFirstPage() {
    return (this._safeCurrent === 1)
  }

  /**
   * Check if we should be viewing the last page of data.
   *
   * This is helpful in determining if "Next" or ">" buttons should be disabled.
   *
   * @returns {Boolean} True if currently on the last page
   * @readonly
   * @private
   */
  get _isLastPage() {
    return !(this._safeCurrent < this._safeTotal)
  }

  /**
   * Compute the maximum valid page number to display in the page span.
   *
   * @returns {Number} The maximum end page that should be displayed
   * @readonly
   * @private
   */
  get _maxEndPage() {
    let result = Math.min(this._idealEndPage, this._safeTotal);

    return result
  }

  /**
   * Handle emitting a "goto" event to communicate user interaction with
   * internal navigator elements.
   *
   * @param {Event} evt - The click event from a navigation element
   * @fires BoltPageNavigatorElement#bolt-goto
   * @private
   */
  // tested indirectly via click() + event handling
  _onClick(evt) {
    evt.preventDefault();
    const page = parseInt(evt.target?.dataset?.page);
    if (page) {
      this.$emit('bolt-goto', { detail: { page } });
    }
  }

  /**
   * @typedef {Object} PageMetadata
   * @property {Number} page - The page number
   * @property {Boolean} isCurrent - Whether this is the current active page
   * @property {String} ariaLabel - The aria-label for accessibility
   */

  /**
   * Compute array of metadata for rendered page links.
   *
   * @returns {PageMetadata[]} Array of page metadata objects
   * @readonly
   * @private
   */
  get _pageLinks() {
    let data = [];
    let i = 0;
    while (i < this._safeSpread) {
      let page = i + this._startPage;
      let isCurrent = (page === this._safeCurrent);
      let datum = { page, isCurrent };

      datum.ariaLabel = (isCurrent ? `on page ${page}` : `page ${page}`);

      data.push(datum);
      i++;
    }
    return data
  }

  /**
   * Compute the starting page number, relative to _maxEndPage.
   *
   * Result MAY be below PAGE.min
   *
   * @returns {Number} The relative start page number
   * @readonly
   * @private
   */
  get _relativeStartPage() {
    let result = this._maxEndPage - this._spanDelta;

    return result
  }

  /**
   * Ensures that current page always remains within the valid page range.
   *
   * @returns {Number} The safe current page number (>= 1 and <= total)
   * @readonly
   * @private
   */
  get _safeCurrent() {
    let _current = parseIntSafe(this.current);

    if (this._hasKnownPages) {
      return Math.min(Math.max(_current, PAGES.min), this._safeTotal)
    }
    return Math.max(_current, PAGES.min)
  }

  /**
   * Compute safe spread based on configuration values.
   * The result should be between min and max spread.
   *
   * @returns {Number} The safe spread value (1-5, constrained by total pages)
   * @readonly
   * @private
   */
  get _safeSpread() {
    // clamp spread and pages between SPREAD.min and SPREAD.max
    let clamped_spread = clamp(parseIntSafe(this.spread), SPREAD.min, SPREAD.max);
    let clamped_pages =  clamp(this._safeTotal, SPREAD.min, SPREAD.max);

    // use the smaller of the two
    return Math.min(clamped_spread, clamped_pages)
  }

  /**
   * Ensures that computed # of pages is always positive, regardless of user
   * configuration.
   *
   * @returns {Number} The safe total page count (>= 1)
   * @readonly
   * @private
   */
  get _safeTotal() {
    let _total = parseIntSafe(this.total);

    return Math.max(_total, PAGES.min)
  }

  /**
   * Determines if the "first" page button should be shown on screen.
   *
   * @returns {Boolean} True if the first page button should be displayed
   * @readonly
   * @private
   */
  get _showFirstPage() {
    return !this.nofirstlast
  }

  /**
   * Determines if the "last" page button should be shown on screen.
   *
   * @returns {Boolean} True if the last page button should be displayed
   * @readonly
   * @private
   */
  get _showLastPage() {
    return !this.nofirstlast
  }

  /**
   * Max difference between the first and last page numbers of the page span.
   *
   * @returns {Number} The span delta (spread - 1)
   * @readonly
   * @private
   */
  get _spanDelta() {
    let result = this._safeSpread - 1;

    return result
  }

  /**
   * Calculate the first page number to render in the page list
   *
   * @returns {Number} The starting page number for the page list
   * @readonly
   * @private
   */
  get _startPage() {
    if (!this._hasKnownPages) {
      return this._safeCurrent
    }

    // make sure start page isn't below 1
    let result = Math.max(PAGES.min, this._relativeStartPage);

    return result
  }
}

var CSS$e = "/* ======================================== *\\\n * PUBLIC VARIABLES\n\\* ======================================== */\n/* ======================================== *\\\n * TYPE VARIATIONS\n\\* ======================================== */\n/* ======================================== *\\\n * STATE APPEARANCE MIXINS\n\\* ======================================== */\n/* ======================================== *\\\n * LAYOUT MIXINS\n\\* ======================================== */\n/* ======================================== *\\\n * LAYOUT MIXINS\n\\* ======================================== */\n:host {\n  display: inline-block;\n}\n\n.sr-only {\n  border: 0 !important;\n  outline: none !important;\n  box-shadow: none !important;\n  width: 1px !important;\n  height: 1px !important;\n  clip: rect(1px, 1px, 1px, 1px); /* old & current Browsers */\n  clip-path: inset(50%); /* browsers in the future */\n  white-space: nowrap;\n  margin: -1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  z-index: -99999 !important;\n  color: transparent;\n  background-color: transparent;\n  text-shadow: none;\n}\n\n@layer config {\n  a {\n    --onBase: var(--bolt-context-onAccent);\n    --base: var(--bolt-context-accent);\n    --baseHigh: var(--bolt-context-accentHigh);\n    --baseHighest: var(--bolt-context-accentHighest);\n    --gap: 0;\n    --pad-x: 0;\n    --pad-x-plus: 0;\n    --pad-y: 0;\n  }\n}\n@layer layout {\n  #root {\n    display: flex;\n    gap: 12px;\n    justify-content: center;\n    align-items: center;\n  }\n  .optionContainer {\n    display: flex;\n    gap: 4px;\n    justify-content: center;\n  }\n  .label {\n    font-weight: 500;\n  }\n  /*\n   * [1] override of Button.layout-base\n   */\n  a {\n    box-sizing: border-box;\n    display: inline-flex;\n    justify-content: center;\n    padding: var(--pad-y) var(--pad-x);\n    --pad-x: var(--bolt-space-md);\n    --pad-y: var(--bolt-space-xs);\n    align-items: center;\n  }\n  a.isCurrent {\n    position: relative;\n  }\n  a.isCurrent::after {\n    content: \"\";\n    height: 2px;\n    inset: auto 2px 2px;\n    position: absolute;\n  }\n  #prevPage,\n  #nextPage {\n    --pad-x: var(--pad-y);\n  }\n  #prevPage > *,\n  #nextPage > * {\n    margin-inline: 0;\n  }\n}\n@layer appearance {\n  a {\n    border-radius: 4px;\n    text-decoration: none;\n    transition: all 350ms;\n    background: none;\n    border: 1px solid rgba(0, 0, 0, 0);\n    color: var(--base);\n    font-family: var(--bolt-fontFamily-sansSerif);\n    font-weight: 400;\n    font-size: clamp(14px, 14px + 2px * (var(--bolt-typography-basis) - 360) / 840, 16px);\n    line-height: clamp(1.43, 1.43 + 0.07 * (var(--bolt-typography-basis) - 360) / 840, 1.5);\n    font-weight: 500;\n  }\n  a[href]:focus {\n    background: var(--baseHigh);\n    border: 1px solid rgba(0, 0, 0, 0);\n    color: var(--onBase);\n    cursor: pointer;\n    /* css-core:context.focus */\n    box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n    outline: none;\n    text-decoration-color: transparent;\n  }\n  a[href]:hover {\n    background: var(--baseHigh);\n    border: 1px solid rgba(0, 0, 0, 0);\n    color: var(--onBase);\n    cursor: pointer;\n  }\n  a[href]:active {\n    background: var(--baseHighest);\n    border: 1px solid rgba(0, 0, 0, 0);\n    color: var(--onBase);\n  }\n  a > * {\n    pointer-events: none;\n  }\n  a.isCurrent {\n    color: inherit;\n  }\n  a.isCurrent::after {\n    background-color: var(--bolt-context-accent);\n  }\n  a[aria-disabled] {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  a[aria-disabled] > * {\n    pointer-events: none;\n  }\n}";

const DEFAULTS$1 = {
  current: "",
  label: "Items per page",
  options: "[10,25,50]",
  arialabel: "Pagination sizer",
};

class BoltPageSizerElement extends BoltElement {
  static is = "bolt-page-sizer";
  static styles = CSS$e;
  static properties = {
    arialabel: { type: String, default: DEFAULTS$1.arialabel },
    // current item count on page
    current: { type: Number, default: DEFAULTS$1.current, reflect: true },
    // "item per page" label
    label: { type: String, default: DEFAULTS$1.label },
    // list of selectable item counts
    options: { type: String, default: DEFAULTS$1.options },
  };

  render() {
    return x`
      <div id="root" aria-label="${this.arialabel || DEFAULTS$1.arialabel}">
        <div class="label">${this.label}</div>
        <nav class="optionContainer">${this._renderOptions()}</nav>
      </div>
    `;
  }

  /**
   * Helper for rendering each option link
   *
   * @private
   */
  _renderOptions() {
    const options = this._optionsList;
    return options.map((option, index) => {
      if (option === this.current) {
        return x`
          <a
            aria-label="currently showing ${option} results"
            class="numbered isCurrent"
            data-count="${option}"
          >
            <span aria-hidden="true">${option}</span>
            <span class="sr-only">currently showing ${option} results</span>
          </a>
        `;
      } else {
        return x`
          <a
            @click=${this._onClick}
            aria-label="shows ${option} results"
            class="numbered"
            data-count="${option}"
            href="#"
            >${option}</a
          >
        `;
      }
    });
  }

  update(changedProperties) {
    changedProperties.forEach((_, propName) => {
      const optionsList = this._optionsList;

      if (
        propName === "options" ||
        (propName === "current" && optionsList.length > 0)
      ) {
        if (!this.current || !optionsList.includes(this.current)) {
          this.current = optionsList[0];
        }
      }
    });

    super.update(changedProperties);
  }

  /**
   * Handles emitting the "bolt-sizer-update" event. 
   *
   * @private
   * @emits BoltPageSizerElement#bolt-sizer-update
   *
   */
  _onClick(event) {
    event.preventDefault();
    const count = parseInt(event.target?.getAttribute("data-count"));

    if (count) this.$emit("bolt-sizer-update", { detail: { count } });
  }

  /**
   * Returns a validated and normalized list of page size options.
   * 
   * @returns {number[]}
   */
  get _optionsList() {
    let options = [];

    try {
      options = JSON.parse(this.options)
        .filter((num) => !isNaN(num) && num > 0) // ensure values are number and greater than 0
        .slice(0, 3) // ensure total values does not exceed 3
        .filter((num, index, arr) => arr.indexOf(num) === index) // ensure values are unique
        .sort((a, b) => a - b); // sort (ascending)
    } catch (error) {
      console.error(error);
    }

    return options.length > 1 ? options : JSON.parse(DEFAULTS$1.options);
  }
}

/**
 * This module exports the pagination component and its initialization function.
 * Pagination allows users to navigate content or data that is grouped on separate pages.
 *
 * @module bolt-pagination
 * @since 6.4.0
 *
 * @see {@link ./elements/bolt-page-navigator|BoltPageNavigatorElement}
 */

/**
 * Initializes the pagination component by registering it as a custom element
 *
 * This function:
 * 1. Initializes dependencies (Button component)
 * 2. Registers the BoltPageNavigatorElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$c() {
  await initialize$p();
  BoltPageDialerElement.$define();
  BoltPageNavigatorElement.$define();
  BoltPageSizerElement.$define();
}

const Elements = [
  BoltPageDialerElement,
  BoltPageNavigatorElement,
  BoltPageSizerElement,
];

var index$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltPageDialerElement: BoltPageDialerElement,
  BoltPageNavigatorElement: BoltPageNavigatorElement,
  BoltPageSizerElement: BoltPageSizerElement,
  Elements: Elements,
  initialize: initialize$c
});

/**
 * Password input fields allow users to enter a password or other secure data such as a Social Security number or bank account number.
 *
 * The `<bolt-password>` custom element creates a password input field with a label and optional instructional and error text.
 *
 * @class BoltPasswordElement
 * @element BoltPasswordElement
 * @extends {BoltTextfieldElement}
 * @tagname bolt-password
 * @since 3.0.0
 *
 * @attribute {String} label - (Required) The label text for the input.
 * @attribute {String} value - (Optional) The initial or set value for the input.
 * @attribute {String} instructionaltext - (Optional) The instructional text to display below the input. This should be used to give users additional information about the expected content in the field.
 * @attribute {Boolean} required - (Optional) If present, the field is required. Fields that are not required will show "(optional)".
 * @attribute {String} optionaltext - (Optional) Use to remove the "(optional)" text from non-required fields. Default is `show`. Possible values: [`show`, `hide`]
 * @attribute {Boolean} disabled - (Optional) If present, disables the input field and associated interactive elements.
 * @attribute {String} error - (Optional)  The error message to display after the input. Should not be used when component is `disabled`.
 * @attribute {Number} maxlength - (Optional) Maximum allowed input length.
 * @attribute {Number} inputsize - (Optional) Sets the width of the input box in terms of average character widths. If not specified, the input box will span the full width of its container.
 * @attribute {Boolean} showvisibilitytoggle - (Optional) If present, the field includes a show/hide icon button.
 * @attribute {Boolean} invalid - (Optional) If present, the field appears invalid.
 * @attribute {String} iconalthide - (Optional) The alt text for the icon that can be clicked to hide contents of the password field. Defaults to `'hide password'`.
 * @attribute {String} iconaltshow - (Optional) The alt text for the icon that can be clicked to show contents of the password field in plain text. Defaults to `'show password'`.
 * @attribute {String} datatestinput - (Optional) property to configure the `data-test` value on the underlying `<input>` element. Default is `input`.
 * @attribute {String} autocomplete - (Optional) Defaults to `on`. Passed to native `<input>` element. Please see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete|possible values}.
 * @attribute {String} inputmode - (Optional) Please see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode|standard behavior}. Passed to native `<input>` element.
 *
 * @slot help - Uses the {@link BoltContextualHelp} component for additional help content.
 *
 * @see https://bolt.nwie.net/web/components/password/
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 */
class BoltPasswordElement extends BoltTextfieldElement {
  /**
   * The component's tag name, used for Custom Element registration
   * @readonly
   * @type {String}
   * @static
   */
  static get is() {
    return 'bolt-password';
  }
}

/**
 * This module exports the password component and its initialization function.
 * The password component provides a text input field for collecting
 * secure data from users, with show/hide functionality and validation support.
 *
 * @module bolt-password
 * @since 3.0.0
 *
 * @see {@link ./elements/bolt-password|BoltPasswordElement}
 */


/**
 * Initializes the password component by registering it as a custom element
 *
 * This function:
 * 1. Initializes dependencies (FieldError, Icon, and WaitingIndicator components)
 * 2. Registers the BoltPasswordElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$b() {
  // Upstream
  await initialize$w();
  await initialize$y();
  await initialize$u();

  // Local
  BoltPasswordElement.$define();
}

var index$a = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltPasswordElement: BoltPasswordElement,
  initialize: initialize$b
});

var CSS$d = ":host {\n  background: var(--bolt-theme-surfaceContainerHigh);\n  border: 1px solid var(--bolt-theme-outlineVariant);\n  border-radius: var(--bolt-progress-bar-height);\n  color: var(--bolt-theme-primary);\n  display: block;\n  height: var(--bolt-progress-bar-height) !important;\n  overflow: hidden;\n}\n\n.bolt-progress-bar-wc {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n.bolt-progress-bar-wc--fill {\n  fill: currentColor;\n  stroke-width: 0;\n  transition: all 350ms;\n}\n@media (prefers-reduced-motion: reduce) {\n  .bolt-progress-bar-wc--fill {\n    transition: none;\n  }\n}";

/**
 * Progress bars visually indicate the amount of progress made toward the end of a multi-step process.
 *
 * The `<bolt-progress-bar>` component creates a visual progress bar. It should be captioned or titled outside of the component.
 *
 * @class BoltProgressBarElement
 * @element BoltProgressBarElement
 * @extends {BoltElement}
 * @tagname bolt-progress-bar
 * @since 3.1.0
 *
 * @property {Number} value - (Required) The amount the progress bar is filled. If this is changed programmatically, the component displays a brief animation while transitioning to the new value. Values can be numbers from `0` to `100`.
 * @property {String} arialabel - (Optional) Sets the `aria-label` attribute of the underlying `<svg>` element.
 *
 * @see https://bolt.nwie.net/web/components/progress-bar
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 */
class BoltProgressBarElement extends BoltElement {
  /**
   * The component's tag name, used for Custom Element registration
   * @readonly
   * @type {String}
   * @static
   */
  static is = 'bolt-progress-bar'

  /**
   * Getter for component's CSS styles
   * @readonly
   * @type {CSSResult}
   * @static
   */
  static styles = CSS$d

  /**
   * LitElement properties/attributes definition.
   * Defines all the reactive properties that can be set as attributes or properties
   * @readonly
   * @type {Object}
   * @static
   */
  static properties = {
    arialabel: { type: String },
    value: { type: Number }
  }

  /**
   * Renders the component's HTML template
   * Creates an SVG-based progress bar with accessible attributes
   *
   * @returns {TemplateResult} The component's rendered SVG template
   * @override
   */
  render() {
    return b`
      <svg
        aria-label="${l(this.arialabel || null)}"
        class="bolt-progress-bar-wc"
        preserveAspectRatio="none"
        role="${this._role}"
        viewBox="0 0 100 20"
      >
        <rect width="${this.value}" height="20" class="bolt-progress-bar-wc--fill" />
      </svg>
    `
  }

  /**
   * Sets the progress value with validation and normalization
   * Ensures the value is numeric and within the valid range of 0-100
   *
   * @param {Number} val - The progress value to set (will be parsed and clamped to 0-100 range)
   */
  set value(val) {
    let oldVal = this.__value;

    let newVal = isNaN(val) ? 0 : parseFloat(val);
    // ensure 0 ≤ newValue ≤ 100
    newVal = Math.max(0, Math.min(newVal, 100));

    this.__value = newVal;
    this.requestUpdate('value', oldVal);
  }

  /**
   * Gets the current progress value
   *
   * @returns {Number} The current progress value (0-100)
   */
  get value() {
    return this.__value || 0
  }

  /**
   * Determines the appropriate ARIA role based on whether an aria-label is provided
   * Returns 'img' when aria-label is present, 'presentation' when decorative
   *
   * @returns {String} The ARIA role ('img' or 'presentation')
   * @readonly
   * @private
   */
  get _role() {
    return (this.arialabel ? 'img' : 'presentation')
  }
}

/**
 * This module exports the progress bar component and its initialization function.
 * Progress bars visually indicate the amount of progress made toward the end of a multi-step process.
 *
 * @module bolt-progress-bar
 * @since 3.1.0
 *
 * @see {@link ./elements/bolt-progress-bar|BoltProgressBarElement}
 */


/**
 * Initializes the progress bar component by registering it as a custom element
 *
 * This function:
 * 1. Registers the BoltProgressBarElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$a() {
  // Upstream
  // n/a

  // Local
  BoltProgressBarElement.$define();
}

var index$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltProgressBarElement: BoltProgressBarElement,
  initialize: initialize$a
});

/**
 * Radio buttons indicate the option that has been selected from a set of mutually-exclusive options. The `radio button` component is composed of two custom elements: `<bolt-radio-group>` and `<bolt-radio>`.
 *
 * The `<bolt-radio>` element provides a wrapper arount native `<input>` and `<label>` elements and apply appropriate layout and data access APIs.
 *
 * @class BoltRadioElement
 * @element BoltRadioElement
 * @extends {BoltElement}
 * @tagname bolt-radio
 * @since 3.0.0
 *
 * @property {String} value - (Required) The value of the radio button, which **must** be a string. The `value` attribute will not accept an object.
 * @property {Boolean} disabled - (Optional) If present, disables rendered interactive elements.
 * @property {Boolean} checked - (Optional) If present, the control is checked. This can be used instead of the `bolt-radio-group`'s value attribute.
 * @property {String} arialabel - (Optional) If present, sets the `aria-label` attribute of the underlying `<label>` element.
 * @property {String} arialabelledby - (Optional) If present, sets the `aria-labelledby` attribute of the underlying `<label>` element.
 * @property {Boolean} invalid - (Optional) If present, the control appears invalid.
 * @property {String} datatestradio - (Optional) Property to configure the data-test value on the underlying `<input>` element.
 * @property {String} description - (Optional) Property adds descriptive text to an individual radio button. Must be plain text. Can't be used with `horizontal` layout.
 *
 * @slot default - Content to be displayed alongside the radio button (typically used for custom labeling).
 *
 * @see https://bolt.nwie.net/web/components/radio-button
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 */
class BoltRadioElement extends BoltElement {
    /**
     * The component's tag name, used for Custom Element registration
     * @readonly
     * @type {String}
     * @static
     */
    static get is() {
      return 'bolt-radio';
    }

    /**
     * LitElement properties/attributes definition.
     * Defines all the reactive properties that can be set as attributes or properties
     * @readonly
     * @type {Object}
     * @static
     */
    static get properties() {
        return {
            arialabel: { type: String },
            arialabelledby: { type: String },
            checked: { type: Boolean, reflect: true },
            description: { type: String },
            disabled: { type : Boolean, reflect: true },
            datatestradio: { type: String },
            invalid: { type: Boolean },
            label: { type: String },
            name: { type: String },
            required: { type: Boolean },
            value: { type: String }
        }
    }

    /**
     * Creates an instance of BoltRadioElement
     * Initialize public properties with default values
     *
     * @constructor
     */
    constructor() {
        super();

        this.checked = false;
        this.description = '';
        this.disabled = false;
        this.invalid = false;
        this.label = '';
        this.name = '';
        this.required = false;
        this.value = '';
    }

    /**
     * Renders the component's HTML template
     * Provides a slot for custom content with aria-hidden attribute for accessibility
     *
     * @returns {TemplateResult} The component's rendered template
     * @override
     */
    render() {
        return x`<slot aria-hidden="true"></slot>`;
    }
}

/**
 *
 * @class BoltRadioControlElement
 * @element BoltRadioControlElement
 * @tagname bolt-radio-control
 * @extends {BoltFieldElement}
 * @since 3.0.0
 *
 * @see https://bolt.nwie.net/web/components/radio-button/
 *
 */
class BoltRadioControlElement extends BoltFieldElement {
  /**
   * The component's tag name, used for Custom Element registration
   * @readonly
   * @type {String}
   * @static
   */
  static is = 'bolt-radio-control'
}

var CSS$c = ":host {\n  --color: var(--bolt-theme-onSurface);\n  --dot-scale: 0;\n  --fill: var(--bolt-theme-inputSurface);\n  --outline: none;\n  --size: 1lh;\n  --stroke-width: 1;\n  --stroke: var(--bolt-theme-outline);\n  display: inline-block;\n  height: var(--size);\n  width: var(--size);\n}\n\nsvg {\n  color: var(--color);\n  overflow: visible;\n}\n\n#base {\n  fill: var(--fill);\n  stroke: var(--stroke);\n  stroke-width: calc(2px * var(--stroke-width));\n  transition: 350ms;\n}\n\n#outline {\n  fill: none;\n  stroke: var(--outline);\n  stroke-width: 3px;\n}\n\n#dot {\n  fill: currentColor;\n  transform: scale(var(--dot-scale));\n  transform-origin: center;\n  transition: 350ms;\n}";

/**
 * A facade element that provides the visual representation for a radio button component using SVG graphics.
 *
 * The `<bolt-radio-facade>` component renders the visual appearance of a radio button including the outer circle, inner dot, and focus outline. This component is typically used internally by radio button implementations to provide consistent visual styling.
 *
 * @class BoltRadioFacadeElement
 * @element BoltRadioFacadeElement
 * @extends {BoltElement}
 * @tagname bolt-radio-facade
 * @since 3.0.0
 *
 * @see https://bolt.nwie.net/web/components/radio-button
 *
 */
class BoltRadioFacadeElement extends BoltElement {
  /**
   * The component's tag name, used for Custom Element registration
   * @readonly
   * @type {String}
   * @static
   */
  static get is() {
    return 'bolt-radio-facade'
  }

  /**
   * Getter for component's CSS styles
   * @readonly
   * @type {CSSResult}
   * @static
   */
  static get styles() {
    return CSS$c
  }

  /**
   * Renders the component's HTML template
   * Creates an SVG-based radio button visual with base circle, selection dot, and focus outline
   *
   * @returns {TemplateResult} The component's rendered SVG template
   * @override
   */
  render() {
    return b`
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
      >
        <mask id="innerStroke">
          <circle r="12" cx="12" cy="12" fill="#fff" />
        </mask>
        <circle id="base" r="12" cx="12" cy="12" mask="url(#innerStroke)" />

        <circle id="dot" r="6" cx="12" cy="12" />

        <circle id="outline" cx="12" cy="12" r="14.5" />
      </svg>
    `
  }
}

var CSS$b = ".bolt-annotation.bolt-optional {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  letter-spacing: 0px;\n  font-size: clamp(11px, 11px + 1px * (var(--bolt-typography-basis) - 360) / 840, 12px);\n  line-height: clamp(1.45, 1.45 + -0.12 * (var(--bolt-typography-basis) - 360) / 840, 1.33);\n  font-style: italic;\n  font-weight: 400;\n}\n\n.bolt-help {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  letter-spacing: 0px;\n  font-size: clamp(11px, 11px + 1px * (var(--bolt-typography-basis) - 360) / 840, 12px);\n  line-height: clamp(1.45, 1.45 + -0.12 * (var(--bolt-typography-basis) - 360) / 840, 1.33);\n}\n\n:host {\n  display: block;\n  margin: 0;\n  padding: 0;\n}\n\n* {\n  border: none;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nfieldset legend .bolt-help {\n  margin-top: 4px;\n}\nfieldset legend bolt-field-error {\n  margin-top: 4px;\n}\nfieldset .fieldset__name {\n  font-weight: 500;\n}\nfieldset .fieldset__body {\n  display: flex;\n  flex-direction: column;\n  row-gap: var(--bolt-space-xs);\n  margin-top: var(--bolt-space-xs);\n}\nfieldset:disabled legend {\n  opacity: 0.5;\n}\n\n#slot-wrapper {\n  display: none;\n}\n\n:host([horizontal]) .fieldset__body {\n  flex-direction: row;\n  flex-wrap: wrap;\n  column-gap: 20px;\n}\n\n@media (max-width: 575.98px) {\n  :host([bounded]) .fieldset__body {\n    flex-direction: column;\n    flex-wrap: nowrap;\n  }\n}\n\n.bolt-radio {\n  display: flex;\n  gap: 0.5em;\n}\n.bolt-radio > * {\n  flex-shrink: 1;\n}\n.bolt-radio input {\n  left: -9999px;\n  position: absolute;\n}\n.bolt-radio label {\n  display: grid;\n  gap: 0 8px;\n  grid-template-areas: \"facade label\" \".      desc\";\n  grid-template-columns: auto 1fr;\n}\n.bolt-radio__label {\n  grid-area: label;\n}\n.bolt-radio__description {\n  grid-area: desc;\n}\n.bolt-radio bolt-radio-facade {\n  flex-shrink: 0;\n  grid-area: facade;\n}\n.bolt-radio.with-help {\n  display: block;\n}\n.bolt-radio.with-help label {\n  display: inline-grid;\n}\n\n.bolt-radio label {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(14px, 14px + 2px * (var(--bolt-typography-basis) - 360) / 840, 16px);\n  line-height: clamp(1.43, 1.43 + 0.07 * (var(--bolt-typography-basis) - 360) / 840, 1.5);\n  color: var(--bolt-context-onSurface);\n  cursor: pointer;\n  transition: 350ms;\n}\n.bolt-radio__description {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  letter-spacing: 0px;\n  font-size: clamp(11px, 11px + 1px * (var(--bolt-typography-basis) - 360) / 840, 12px);\n  line-height: clamp(1.45, 1.45 + -0.12 * (var(--bolt-typography-basis) - 360) / 840, 1.33);\n  font-style: italic;\n}\n.bolt-radio input:checked ~ label bolt-radio-facade {\n  --dot-scale: 1;\n}\n.bolt-radio input:disabled ~ * {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.bolt-radio.invalid bolt-radio-facade {\n  --color: var(--bolt-theme-error);\n  --stroke: var(--bolt-theme-error);\n  --stroke-width: 2;\n}\n\n.bolt-radio.unbound bolt-radio-facade {\n  --fill: var(--bolt-theme-inputSurface);\n}\n.bolt-radio.unbound input:enabled:hover ~ label bolt-radio-facade {\n  --fill: var(--bolt-theme-inputSurfaceHigh);\n}\n.bolt-radio.unbound input:enabled:focus-visible ~ label bolt-radio-facade {\n  --fill: var(--bolt-theme-inputSurfaceHigh);\n  --outline: var(--bolt-context-focus);\n}\n.bolt-radio.unbound input:enabled:active ~ label bolt-radio-facade {\n  --fill: var(--bolt-theme-inputSurfaceHighest);\n}\n\n.bolt-radio.bound label {\n  flex-grow: 1;\n  padding: var(--bolt-space-sm) var(--bolt-space-md);\n}\n\n.bolt-radio.bound label {\n  background-color: var(--bolt-theme-surface);\n  border-radius: 8px;\n  border: 1px solid var(--bolt-theme-outline);\n  color: var(--bolt-theme-onSurface);\n}\n.bolt-radio.bound input:enabled:hover ~ label {\n  background-color: var(--bolt-theme-inputSurfaceHigh);\n}\n.bolt-radio.bound input:enabled:focus-visible ~ label {\n  /* css-core:context.focus */\n  box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n  outline: none;\n  text-decoration-color: transparent;\n  background-color: var(--bolt-theme-inputSurfaceHigh);\n  border-color: var(--bolt-context-focus);\n}\n.bolt-radio.bound input:enabled:active ~ label {\n  background-color: var(--bolt-theme-inputSurfaceHighest);\n}\n.bolt-radio.bound.invalid label {\n  border-color: var(--bolt-theme-error) !important;\n  border-width: 2px;\n}";

/**
 * Radio buttons indicate the option that has been selected from a set of mutually-exclusive options. The `radio button` component is composed of two custom elements: `<bolt-radio-group>` and `<bolt-radio>`.
 *
 * The `<bolt-radio-group>` element provides a wrapper around native `<fieldset>` and `<legend>` elements, applying a label (via the label attribute) to the set of `<bolt-radio>` elements. The two elements must be used together. Only `<bolt-radio>` elements can be children of the `<bolt-radio-group>`.
 *
 * @class BoltRadioGroupElement
 * @element BoltRadioGroupElement
 * @extends {BoltElement}
 * @tagname bolt-radio-group
 * @since 3.0.0
 *
 * @property {String} label - (Conditionally Required) The label text, used to populate the underlying `<legend>` element. Required if `arialabel` or `arialabelledby` are NOT present.
 * @property {String} arialabel - (Conditionally Required) If present, sets the `aria-label` attribute of the underlying `<fieldset>` element. Required if `label` or `arialabelledby` are NOT present.
 * @property {String} arialabelledby - (Conditionally Required) If present, sets the `aria-labelledby` attribute of the underlying `<fieldset>` element. Required if `label` or `arialabel` are NOT present.
 * @property {String} name - (Required) The value for the `name` attribute must be unique for each set of options.
 * @property {Boolean} horizontal - (Optional) Radio buttons are stacked vertically by default, which should be the case for the majority of uses. If present, this causes the radio buttons to display horizontally. Please see the {@link https://bolt.nwie.net/web/components/radio-button/|"Design guidelines" tab} for details on when this option should be used.
 * @property {String} value - (Optional) The currently selected value.
 * @property {String} instructionaltext - (Optional) The instructional text to display below the label. This should be used to give users additional information about the radio group.
 * @property {Boolean} required - (Optional) If present, the field is required. Fields that are not required will show "(optional)".
 * @property {String} optionaltext - (Optional) Use to remove the "(optional)" text from non-required fields. Default is `show`. Possible values: [`show`, `hide`]
 * @property {Boolean} disabled - (Optional) If present, disables rendered interactive elements.
 * @property {String} error - (Optional) The error message to display. Should not be used when component is `disabled`.
 * @property {Boolean} invalid - (Optional) If present, the group appears invalid.
 * @property {Boolean} bounded - (Optional) If present, the radio buttons appear with a bounded border. Bounded radio buttons do not support contextual help on individual options. See `description` instead.
 *
 * @slot help - Contains a `<bolt-contextual-help>` element
 * @slot error - Contains a `<bolt-field-error>` element for custom error messaging
 * @slot (default) - Contains `<bolt-radio>` elements that make up the radio group
 *
 * @event {Event} change - Emitted when a radio button selection changes. The event's target.value contains the selected value.
 * @event {Event} input - Emitted when a radio button receives input. The event's target.value contains the selected value.
 *
 * @see https://bolt.nwie.net/web/components/radio-button
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @example
 * <bolt-radio-group label="Select an option" name="example">
 *   <bolt-radio value="option1">Option 1</bolt-radio>
 *   <bolt-radio value="option2">Option 2</bolt-radio>
 *   <bolt-radio value="option3">Option 3</bolt-radio>
 * </bolt-radio-group>
 *
 * @example
 * <!-- Horizontal layout with bounded styling -->
 * <bolt-radio-group label="Select size" name="size" horizontal bounded>
 *   <bolt-radio value="small">Small</bolt-radio>
 *   <bolt-radio value="medium">Medium</bolt-radio>
 *   <bolt-radio value="large">Large</bolt-radio>
 * </bolt-radio-group>
 */
class BoltRadioGroupElement extends BoltElement {
  /**
   * Returns the custom element tag name for registration
   * @readonly
   * @static
   * @returns {String} The element tag name 'bolt-radio-group'
   */
  static is = 'bolt-radio-group'

  /**
   * Returns the CSS styles for the component
   * @readonly
   * @static
   * @returns {CSSResult} The component's CSS styles
   */
  static styles = CSS$b

    /**
     * Defines the reactive properties for the component
     * @readonly
     * @static
     * @returns {Object} Property definitions with types and configuration
     */
    static get properties() {
        return {
            arialabel: { type: String },
            arialabelledby: { type: String },
            bounded: { type: Boolean },
            disabled: { type: Boolean, reflect: true },
            error: { type: String },
            instructionaltext: { type: String },
            horizontal: { type: Boolean },
            invalid: { type: Boolean },
            label: { type: String },
            name: { type: String },
            optionaltext: { type: String },
            required: { type: Boolean },
            value: { type: String },
        }
    }

    /**
     * Creates an instance of BoltRadioGroupElement.
     * Initializes default property values and generates unique IDs for accessibility.
     *
     * @constructor
     */
    constructor() {
        super();

        // Private state variables (initialize first)
        /** @private {String} */
        this._labelledbyText = '';
        /** @private */
        this.radios = [];

        // Public state variables
        this.arialabel = '';
        this.arialabelledby = '';
        this.bounded = false;
        this.disabled = false;
        this.error = '';
        this.instructionaltext = '';
        this.horizontal = false;
        this.invalid = false;
        this.label = '';
        this.name = '';
        this.optionaltext = 'show';
        this.required = false;
        this.value = '';
        /** @private {String} */
        this.instructionaltextId = this.generateId('instructionaltext');
        /** @private {String} */
        this.generatedId = this.generateId();
        /** @private {String} */
        this.errorId = this.generateId('error');
    }

    /**
     * Lifecycle method called when component properties are updated.
     * Updates disabled state of help slot elements when disabled property changes.
     *
     * @protected
     * @param {Map} changedProps - Properties that have changed since last update
     */
    updated(changedProps) {
      if (changedProps.has('disabled')) {
        for (const $node of this.$helpSlot.assignedNodes()) {
          $node.disabledByContext = !!this.disabled;
        }
      }
    }

    /**
     * Lifecycle method called when the element is connected to the DOM.
     * Ensures the element has an ID and sets up focusable attributes.
     *
     * @protected
     */
    $onConnect() {
      this.$ensureId();
      this.setAttribute('bolt-focusable', '');
    }

    /**
     * Sets the currently selected radio button value.
     * Updates all radio buttons to reflect the new selection state.
     *
     * @param {String} val - The value of the radio button to select
     */
    set value(val) {
      if (val === this._value) {
        return
      }

      let oldValue = this._value;

      this._value = val;

      this.radios.forEach(radio => {
        radio.checked = (radio.value === val);
      });

      this.requestUpdate('value', oldValue);
    }

    /**
     * Gets the currently selected radio button value.
     *
     * @returns {String} The value of the currently selected radio button
     */
    get value() {
        return this._value;
    }

    /**
     * Generates a unique ID for the radio group element or its sub-components.
     *
     * @private
     * @param {String} [type] - Optional type suffix for the ID
     * @returns {String} The generated unique ID
     */
    generateId(type) {
      return 'bolt-radio-group--' + (type ? (type + '--') : '') + Math.floor(Math.random() * 10000000);
    }

    /**
     * Attempts to forward focus to the first enabled radio input in the shadow DOM.
     * If no enabled radio is found, focus will not be transferred.
     *
     * @public
     */
    focus() {
      let radio = this.shadowRoot.querySelector('input[type="radio"]:enabled');
      radio?.focus();
    }

    /**
     * Renders the radio group component template.
     * Creates the fieldset container, legend, radio buttons, and slots for additional content.
     *
     * @private
     * @returns {TemplateResult} The component's HTML template
     */
    render() {
      let attrArialabelledby = `labelledby-${this.generatedId}`;

      return x`
        <fieldset
          ?disabled="${this.disabled}"
          @change="${this.handleChange}"
          @input="${this.handleInput}"
          aria-label="${l(this.arialabel || null)}"
          aria-labelledby="${l(this._labelledbyText ? attrArialabelledby : undefined)}"
        >
          <legend>
            <span class="fieldset__name">
              ${this.label}
            </span>

            ${!(this.required) && this.label.length > 0 && this.optionaltext == 'show'
              ? x`<span class="bolt-annotation bolt-optional"> (optional)</span>`
              : ''
            }

            <span id="help-slot-wrapper">
              <slot name="help"></slot>
            </span>

            ${ this.instructionaltext
              ? x`
                <div
                  class="bolt-help"
                  id="${this.instructionaltextId}"
                >
                  ${this.instructionaltext}
                </div>
              `
              : ''
            }

            <slot name="error" @slotchange="${this._onErrorSlotChange}" id="${this.errorId}">
              ${ this.error
                ? x`
                  <bolt-field-error>
                    ${this.error}
                  </bolt-field-error>
                ` : ''
                }
            </slot>
          </legend>

          <div class="fieldset__body">
            ${this.radios.map((radio, index) => x`
              <div
                class="
                  bolt-radio
                  ${this.bounded ? 'bound' : 'unbound'}
                  ${radio.invalid || this._isInvalid ? 'invalid' : ''}
                "
              >
                <input
                  .checked=${radio.checked}
                  ?disabled=${radio.disabled || this.disabled}
                  ?invalid=${radio.invalid || this._isInvalid}
                  aria-describedby="${radio.ariadescribedby}"
                  aria-label="${l(radio.arialabel)}"
                  data-test="${radio.datatestradio}"
                  id="${radio.id}"
                  name="${radio.name}"
                  type="radio"
                  value="${radio.value}"
                />

                <label for="${radio.id}">
                  <bolt-radio-facade></bolt-radio-facade>
                  <span class="bolt-radio__label">${radio.label}</span>
                  ${this._showRadioDescription(radio)
                    ? x`<div class="bolt-radio__description">${radio.description}</div>`
                    : ''
                  }
                </label>
              </div>
            `)}
          </div>
        </fieldset>

        <div id="slot-wrapper">
          <slot @slotchange="${this.slotChanged}"></slot>
        </div>

        <div hidden id="${attrArialabelledby}">${this._labelledbyText}</div>
      `;
    }

    /**
     * Lifecycle method called after the element has been updated for the first time.
     * Initializes the radio buttons from slotted content and sets up focus scrolling behavior.
     *
     * @protected
     */
    firstUpdated() {
        this.populateRadios();

        setTimeout(() => {
          this.scrollOnFocus();
        });
    }

    /**
     * Sets up scroll behavior for when radio buttons receive focus.
     * Ensures the focused radio button is visible in the viewport.
     *
     * @private
     */
    scrollOnFocus() {
      const radioFacade = this.shadowRoot.querySelector('bolt-radio-facade');

      this.addEventListener('focus', function() {
        radioFacade.scrollIntoView({ block: 'nearest' });
      });
    }

    /**
     * Handles slot change events from the default slot.
     * Re-populates radio buttons when slot content changes.
     *
     * @private
     * @param {Event} e - The slotchange event
     */
    slotChanged(e) {
      setTimeout(() => {
        this.populateRadios();
      });
    }

    /**
     * Synchronizes slotted bolt-radio components with the internal radio button state.
     * Extracts properties from each bolt-radio element and creates corresponding radio input data.
     * Sets up focus forwarding from bolt-radio elements to their corresponding inputs.
     *
     * @private
     */
    populateRadios() {
      // do not continue if instance is disconnected from the DOM
      if (!this.isConnected) {
        return
      }

      let $nodes = this.querySelectorAll(':scope > bolt-radio');

      let radios = [];
      $nodes.forEach(($node, i) => {
        let radioId = $node.id ? `${$node.id}-radio` : `${this.id}-radio${i}`;
        let radioName = $node.name || this.name;

        let describedBy = [];
        describedBy.push(this.errorId);
        describedBy.push(this.instructionaltext ? this.instructionaltextId : '');


          const radio = {
            ariadescribedby: describedBy.join(' '),
            arialabel: $node.arialabel,
            checked: ($node.checked || $node.value === this.value),
            description: $node.description,
            disabled: $node.disabled,
            datatestradio: $node.datatestradio || `radio-${i}`,
            id: radioId,
            invalid: $node.invalid,
            label: $node.innerText,
            name: radioName,
            value: $node.value
          };
          radios.push(radio);

        // Forward programmatic focus from bolt-radio to radio input
        $node.focus = () => {
            const $radio = this.shadowRoot.querySelector('#' + radioId);
            if ($radio) {
                $radio.focus();
            }
        };
      });
      this.radios = radios;
      this.requestUpdate();
    }

    /**
     * Handles input events from radio button inputs.
     * Updates the selected value and re-dispatches the event.
     *
     * @private
     * @param {Event} e - The input event from a radio button
     */
    handleInput(e){
      e.stopPropagation();

      this.value = e.target.value;

      let relayedEvent = new Event(e.type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
      });
      this.dispatchEvent(relayedEvent);
    }

    /**
     * Handles change events from radio button inputs.
     * Updates the selected value and re-dispatches the event.
     *
     * @private
     * @param {Event} e - The change event from a radio button
     */
    handleChange(e){
      e.stopPropagation();

      this.value = e.target.value;

      let relayedEvent = new Event(e.type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
      });
      this.dispatchEvent(relayedEvent);
    }

    /**
     * Lifecycle method called before the element is updated.
     * Processes property changes, particularly for aria-labelledby updates.
     *
     * @protected
     * @param {Map} changedProperties - The properties that have changed
     */
    update(changedProperties) {
      changedProperties.forEach( (oldValue, propName) => {
        let value = this[propName];

        if (propName === 'arialabelledby') {
          this._labelledbyText = value ? this.$lookupInnerTexts(value) : '';
        }
      });
      super.update(changedProperties);
    }

    /**
     * Determines if the radio group should appear invalid.
     * Considers the invalid property, error messages, and slotted error elements.
     *
     * @private
     * @returns {Boolean} True if the element should appear invalid
     */
    get _isInvalid() {
        return Boolean(this.invalid || this.error || this.querySelector("bolt-field-error[slot='error']") )
    }


  /**
   * Determines whether to show the description for a radio button.
   * Descriptions are only shown when they exist and the layout is not horizontal.
   *
   * @private
   * @param {Object} radio - The radio button object containing description and other properties
   * @returns {Boolean} True if the description should be shown
   */
  _showRadioDescription(radio) {
    return (!!radio?.description && !this.horizontal)
  }

  /**
   * Gets the help slot element from the shadow DOM.
   *
   * @private
   * @returns {HTMLSlotElement} The help slot element
   */
  get $helpSlot() {
    return this.shadowRoot.querySelector('slot[name="help"]')
  }
}

/**
 * This module exports the radio button components and their initialization function.
 * The radio button components consist of:
 * - `<bolt-radio>`: Individual radio button for single selection
 * - `<bolt-radio-control>`: Control element for radio button functionality
 * - `<bolt-radio-facade>`: Visual facade for the radio button
 * - `<bolt-radio-group>`: Container that groups multiple radio buttons
 *
 * @module bolt-radio-button
 * @since 3.0.0
 *
 * @see {@link ./elements/bolt-radio|BoltRadioElement}
 * @see {@link ./elements/bolt-radio-control|BoltRadioControlElement}
 * @see {@link ./elements/bolt-radio-facade|BoltRadioFacadeElement}
 * @see {@link ./elements/bolt-radio-group|BoltRadioGroupElement}
 */


/**
 * Initializes the radio button components by registering them as custom elements
 *
 * This function:
 * 1. Initializes dependencies (FieldError component)
 * 2. Registers the BoltRadioElement
 * 3. Registers the BoltRadioControlElement
 * 4. Registers the BoltRadioGroupElement
 * 5. Registers the BoltRadioFacadeElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$9() {
  // Upstream
  await initialize$w();

  // Local
  BoltRadioElement.$define();
  BoltRadioControlElement.$define();
  BoltRadioGroupElement.$define();
  BoltRadioFacadeElement.$define();
}

var index$8 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltRadioControlElement: BoltRadioControlElement,
  BoltRadioElement: BoltRadioElement,
  BoltRadioFacadeElement: BoltRadioFacadeElement,
  BoltRadioGroupElement: BoltRadioGroupElement,
  initialize: initialize$9
});

var CSS$a = "/* ======================================== *\\\n * PUBLIC VARIABLES\n\\* ======================================== */\n/* ======================================== *\\\n * TYPE VARIATIONS\n\\* ======================================== */\n/* ======================================== *\\\n * STATE APPEARANCE MIXINS\n\\* ======================================== */\n/* ======================================== *\\\n * LAYOUT MIXINS\n\\* ======================================== */\n/* ======================================== *\\\n * LAYOUT MIXINS\n\\* ======================================== */\n/* ======================================== *\\\n * PUBLIC VARIABLES\n * These pull values from Button config to maintain consistency\n\\* ======================================== */\n/* ======================================== *\\\n * INITIALIZATION PROPS\n\\* ======================================== */\n/* ======================================== *\\\n * TYPE VARIATIONS\n\\* ======================================== */\n/* ======================================== *\\\n * STATE APPEARANCE MIXINS\n\\* ======================================== */\n/* ======================================== *\\\n * LAYOUT MIXINS\n\\* ======================================== */\n/* ======================================== *\\\n * LAYOUT MIXINS\n\\* ======================================== */\n:host {\n  --onBase: var(--bolt-context-onAccent);\n  --base: var(--bolt-context-accent);\n  --baseHigh: var(--bolt-context-accentHigh);\n  --baseHighest: var(--bolt-context-accentHighest);\n  --gap: 0;\n  --pad-x: 0;\n  --pad-x-plus: 0;\n  --pad-y: 0;\n  display: inline-block;\n}\n\n:host(.bolt-reveal-button-wc--width-full) {\n  width: 100%;\n}\n\n:host(.bolt-reveal-button-wc--width-full-2xs) {\n  width: 100%;\n  width: auto;\n}\n\n:host(.bolt-reveal-button-wc--width-full-xs) {\n  width: 100%;\n}\n@media (min-width: 360px) {\n  :host(.bolt-reveal-button-wc--width-full-xs) {\n    width: auto;\n  }\n}\n\n:host(.bolt-reveal-button-wc--width-full-sm) {\n  width: 100%;\n}\n@media (min-width: 576px) {\n  :host(.bolt-reveal-button-wc--width-full-sm) {\n    width: auto;\n  }\n}\n\n:host(.bolt-reveal-button-wc--width-full-md) {\n  width: 100%;\n}\n@media (min-width: 768px) {\n  :host(.bolt-reveal-button-wc--width-full-md) {\n    width: auto;\n  }\n}\n\n:host(.bolt-reveal-button-wc--width-full-lg) {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  :host(.bolt-reveal-button-wc--width-full-lg) {\n    width: auto;\n  }\n}\n\n:host(.bolt-reveal-button-wc--width-full-xl) {\n  width: 100%;\n}\n@media (min-width: 1200px) {\n  :host(.bolt-reveal-button-wc--width-full-xl) {\n    width: auto;\n  }\n}\n\n:host(.bolt-reveal-button-wc--width-full-2xl) {\n  width: 100%;\n}\n@media (min-width: 1444px) {\n  :host(.bolt-reveal-button-wc--width-full-2xl) {\n    width: auto;\n  }\n}\n\n:host(.bolt-reveal-button-wc--width-full-3xl) {\n  width: 100%;\n}\n@media (min-width: 1752px) {\n  :host(.bolt-reveal-button-wc--width-full-3xl) {\n    width: auto;\n  }\n}\n\n@layer layout {\n  /*\n   * [1] overrides to ensure that root element is full width of :host\n   * [2] needed for badge positioning (currently unique to WC)\n   * [3] WC-unique styles\n   */\n  .bolt-reveal-button-wc {\n    box-sizing: border-box;\n    display: inline-flex;\n    justify-content: center;\n    padding: var(--pad-y) var(--pad-x);\n    display: flex;\n    position: relative;\n    width: 100%;\n  }\n  .bolt-reveal-button-wc::before {\n    content: \".\";\n    margin: 0;\n    padding: 0;\n    width: 0;\n    visibility: hidden;\n  }\n  .bolt-reveal-button-wc > * + * {\n    margin-left: var(--gap);\n  }\n  .bolt-reveal-button-wc span {\n    text-align: center;\n  }\n  .bolt-reveal-button-wc bolt-badge {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 1;\n    transform: translate(calc(var(--bolt-badge-min-height) * 0.5), -50%);\n  }\n  .bolt-reveal-button-wc.size-sm {\n    --gap: 4px;\n    --pad-x: var(--bolt-space-sm);\n    --pad-x-plus: var(--bolt-space-md);\n    --pad-y: var(--bolt-space-2xs);\n  }\n  .bolt-reveal-button-wc.size-md {\n    --gap: 8px;\n    --pad-x: var(--bolt-space-md);\n    --pad-x-plus: var(--bolt-space-lg);\n    --pad-y: var(--bolt-space-xs);\n  }\n  .bolt-reveal-button-wc.icon-only {\n    --pad-x: var(--pad-y);\n    --gap: 0;\n  }\n  .bolt-reveal-button-wc.icon-only > * {\n    margin-inline: 0;\n  }\n  .bolt-reveal-button-wc:not(.icon-only).icon-left:not(.icon-right) {\n    padding-inline-end: var(--pad-x-plus);\n  }\n  .bolt-reveal-button-wc:not(.icon-only).icon-right:not(.icon-left) {\n    padding-inline-start: var(--pad-x-plus);\n  }\n}\n@layer appearance {\n  .bolt-reveal-button-wc {\n    border-radius: 4px;\n    text-decoration: none;\n    transition: all 350ms;\n  }\n  .bolt-reveal-button-wc:not(:disabled):focus {\n    background: var(--baseHigh);\n    border: 1px solid rgba(0, 0, 0, 0);\n    color: var(--onBase);\n    cursor: pointer;\n    /* css-core:context.focus */\n    box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n    outline: none;\n    text-decoration-color: transparent;\n  }\n  .bolt-reveal-button-wc:not(:disabled):hover {\n    background: var(--baseHigh);\n    border: 1px solid rgba(0, 0, 0, 0);\n    color: var(--onBase);\n    cursor: pointer;\n  }\n  .bolt-reveal-button-wc:not(:disabled):active {\n    background: var(--baseHighest);\n    border: 1px solid rgba(0, 0, 0, 0);\n    color: var(--onBase);\n  }\n  .bolt-reveal-button-wc:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  .bolt-reveal-button-wc:disabled > * {\n    pointer-events: none;\n  }\n  .bolt-reveal-button-wc.size-sm {\n    font-family: var(--bolt-fontFamily-sansSerif);\n    font-weight: 400;\n    font-size: clamp(12px, 12px + 2px * (var(--bolt-typography-basis) - 360) / 840, 14px);\n    line-height: clamp(1.33, 1.33 + 0.1 * (var(--bolt-typography-basis) - 360) / 840, 1.43);\n    font-weight: 500;\n  }\n  .bolt-reveal-button-wc.size-md {\n    font-family: var(--bolt-fontFamily-sansSerif);\n    font-weight: 400;\n    font-size: clamp(14px, 14px + 2px * (var(--bolt-typography-basis) - 360) / 840, 16px);\n    line-height: clamp(1.43, 1.43 + 0.07 * (var(--bolt-typography-basis) - 360) / 840, 1.5);\n    font-weight: 500;\n  }\n  .bolt-reveal-button-wc--outline {\n    background: none;\n    border: 1px solid var(--base);\n    color: var(--base);\n  }\n  .bolt-reveal-button-wc--outline:visited {\n    border: 1px solid var(--base);\n  }\n  .bolt-reveal-button-wc--ghost {\n    background: none;\n    border: 1px solid rgba(0, 0, 0, 0);\n    color: var(--base);\n  }\n}";

/**
 * Allowed style types for the reveal button component.
 * @constant {Array<String>}
 */
const REVEAL_BUTTON_STYLE_TYPES = [
  'ghost', 
  'outline',
];

/**
 * Default values for data-test attributes.
 * @constant {Object}
 */
const DATATEST_DEFAULTS$2 = {
  button: 'button',
};

/**
 * Reveal Buttons trigger actions users can take in an interface. They allow for the display of 2 paired actions within one element.
 *
 * - `Outline` reveal buttons are used for actions that support the primary action, or for when there are multiple preferred actions a user can take.
 * - `Ghost` reveal buttons are used for optional actions that users can take – much less prominent to users.
 *
 * @class BoltRevealButtonElement
 * @element BoltRevealButtonElement
 * @extends {BoltElement}
 * @tagname bolt-reveal-button
 * @since 7.x.x
 *
 * @property {String} type - (Optional) Overrides the button style. See {@link https://bolt.nwie.net/web/components/reveal-button#design-reveal-button-types|Button types} design guidelines for more info. Default is `outline`. Possible values: [`outline`, `ghost`]
 * @property {String} size - (Optional) The size of the reveal button. See {@link https://bolt.nwie.net/web/components/reveal-button#design-reveal-button-size|Button size} design guidelines for more info. Default is `md`. Possible values: [`sm`, `md`]
 * @property {String} color - (Optional) Button color. By default, automatically adapts to contextual theme and global theme to ensure accessible contrast. Possible values: [`primary`, `secondary`, `tertiary`]
 * @property {String} datatestbutton - (Optional) Configures the `[data-test]` attribute on the underlying primary interactive element. Default is "button".
 * @property {String} label - (Conditionally Required) Provides the text content for the reveal button. Content is shown when reveal button is inactive. Must be paired with `labeltoggled` if no `arialabel` content is provided.
 * @property {String} labeltoggled - (Conditionally Required) Provides the 'active' text content for the reveal button. Content is shown when reveal button is active. Must be present if no `arialabel` content is provided.
 * @property {String} arialabel - (Conditionally Required) Sets the `aria-label` attribute of the underlying `<button>` element. Must be paired with `arialabeltoggled` if no `label` content is provided.
 * @property {String} arialabeltoggled - (Conditionally Required) Provides the 'active' `aria-label` attribute. Must be present if no `label` content is provided.
 * @property {String} arialabelledby - (Optional) Sets the `aria-labelledby` attribute of the underlying `<button>` element.
 * @property {Boolean} disabled - (Optional) Boolean flag used to disable the reveal button.
 * @property {String} iconleft - (Optional) Icon to display on the left side of the reveal button. See {@link https://bolt.nwie.net/foundations/visual-style/iconography/|Iconography} for supported icons.
 * @property {String} iconright - (Optional) Icon to display on the right side of the reveal button. Provides the default icon used when reveal button is not toggled. See {@link https://bolt.nwie.net/foundations/visual-style/iconography/|Iconography} for supported icons.
 * @property {String} iconrighttoggled - (Optional) Icon to display on the right side of the reveal button. Provides the icon used when reveal button is toggled. See {@link https://bolt.nwie.net/foundations/visual-style/iconography/|Iconography} for supported icons.
 * @property {String} width - (Optional) Sets a specific width class for the reveal button
 * @property {Number} badgecount - (Optional) Configures the number count shown on the badge.
 * - Values: `1 ≤ badgecount`
 * - A minimum value of `1` is required for the badge to appear.
 * - Values below `2` are not shown on the badge label but still display the badge.
 * @property {String} badgecolor - (Optional) Sets the badge color. Default value is `error`. Possible values: [`dark`, `error`, `light`]
 * @property {Boolean} toggled - (Optional) If present, the reveal button is in its active/toggled state.
 *
 * @event BoltRevealButtonElement#bolt-reveal-button-toggle - Fired when the button becomes toggled
 * @event BoltRevealButtonElement#bolt-reveal-button-untoggle - Fired when the button becomes untoggled
 *
 * @see https://bolt.nwie.net/web/components/reveal-button
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 */
class BoltRevealButtonElement extends BoltElement {
  /**
   * The component's tag name, used for Custom Element registration
   * @readonly
   * @type {String}
   * @static
   */
  static get is() {
    return 'bolt-reveal-button';
  }

  /**
   * LitElement properties/attributes definition.
   * Defines all the reactive properties that can be set as attributes or properties
   * @readonly
   * @type {Object}
   * @static
   */
  static get properties() {
    return {
      type: { type: String },
      size: { type: String },
      color: { type: String, reflect: true },
      label: { type: String },
      labeltoggled: { type: String },
      arialabel: { type: String },
      arialabeltoggled: { type: String },
      arialabelledby: { type: String },
      datatestbutton: { type: String, default: DATATEST_DEFAULTS$2.button },
      disabled: { type : Boolean, reflect: true },
      iconleft: { type: String },
      iconright: { type: String },
      iconrighttoggled: { type: String },
      width: { type: String },
      badgecount: { type: Number },
      badgecolor: { type: String },
      toggled: {type: Boolean, reflect: true },
    }
  }

  /**
   * Initialize public and private properties with default values.
   * This lifecycle method is called when the component is first created.
   * Sets up initial state for all component properties and binds event handlers.
   * 
   * @override
   * @protected
   */
  $onCreate() {
    this.type = 'outline';
    this.size = 'md';
    this.color = '';
    this.label = '';
    this.labeltoggled = '';
    this.iconleft = '';
    this.iconright = '';
    this.arialabel = '';
    this.arialabeltoggled = '';
    this.arialabelledby = '';
    this.disabled = false;
    this.width = '';
    this.toggled = false;
    
    // PRIVATE PROPERTIES
    /** @private {String} */
    this._labelledbyText = '';
    
    /** @private {String} */
    this._labeloff = '';
    
    /** @private {String} */
    this._iconrightoff = '';
    
    /** @private {String} */
    this._arialabeloff = '';
    
    /** @private {String} */
    this._generatedId = this.generateId();
    
    /** @private {Function} */
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  /**
   * Getter for component's CSS styles
   * @readonly
   * @type {CSSResult}
   * @static
   */
  static get styles() {
    return CSS$a;
  }

  /**
   * Lifecycle method called when the component is connected to the DOM.
   * Sets up component-specific attributes and stores initial property values
   * for state management during toggle operations.
   * 
   * @override
   * @protected
   */
  $onConnect() {
    this.setAttribute('bolt-focusable', '');
    
    // Store the initial values from attributes after they've been processed
    this._labeloff = this.label;
    this._iconrightoff = this.iconright;
    this._arialabeloff = this.arialabel;
  }

    /**
   * Programmatically trigger click behavior
   * @public
   */
  click() {
    if (this.disabled) {
      return;
    }
    
    // Forward click to the shadow DOM button
    const button = this.shadowRoot?.querySelector('[part="root"]');
    button?.click();
  }

  /**
   * Applies width-specific CSS classes to the reveal button element
   * @private
   */
  applyWidth(){
    if (this.width){
      this.classList.add("bolt-reveal-button-wc--width-" + this.width);
    }
  }

  /**
   * Generates a unique ID for the reveal button component
   * @returns {String} A unique ID string for component identification
   * @private
   */
  generateId() {
    return 'bolt-reveal-button--' + Math.floor(Math.random() * 10000000);
  }

  /**
   * Updates the visibility and styling of the reveal button text span.
   * Manages text visibility and icon margins based on content and icon presence.
   * @private
   */
  updateTextSpan(){
    let span = this.shadowRoot.querySelector('.buttontxt');
    if (!this.label || this.label.length < 1) {
      span.hidden = true;
    } else {
      span.hidden = false;
    }

    // if there is no icon defined anywhere, remove the margin from span
    if(this.iconleft == '' && this.iconright == '') {
      span.style.marginRight = '0';
      span.style.marginLeft = '0';
    }
  }

  /**
   * Attempts to focus the root button element.
   * Safely focuses the reveal button element if it exists in the shadow DOM.
   * 
   * @public
   */
  focus() {
    /*
      * There's no guarantee that the shadowRoot exists or been populated
      * when this method is called, so we need to make sure we don't
      * attempt to focus a nonexistent element.
      */
    let btn = this.shadowRoot?.querySelector('[part="root"]');
    btn?.focus();
  }

  /**
   * Lifecycle method called when properties change.
   * 
   * @param {Map} changedProperties - Map of changed properties and their old values
   * @override
   * @protected
   */
  update(changedProperties) {
    changedProperties.forEach( (oldValue, propName) => {
      let value = this[propName];

      if(propName === 'type' && !REVEAL_BUTTON_STYLE_TYPES.includes(value)) {
        this.type = 'outline';
      }

      if (propName === 'arialabelledby') {
        this._labelledbyText = value ? this.$lookupInnerTexts(value) : '';
      }
      
      if(propName === 'toggled'){
        this.handleButtonState();
      }
    });
    super.update(changedProperties);
  }

  /**
   * Lifecycle method called after the component updates.
   * Ensures text span visibility is properly maintained based on current
   * label content and icon configuration.
   * 
   * @override
   * @protected
   */
  updated(){
    this.updateTextSpan();
  }

  /**
   * Handles click events from the button element in Shadow DOM.
   * This event handler won't trigger if the button is disabled.
   * Toggles the button state, prevents event bubbling to avoid form interactions,
   * and triggers the component's custom click behavior.
   * 
   * @param {MouseEvent} evt - The click event object
   * @private
   */
  _onButtonClick(evt) {
    this.toggled = !this.toggled;
    
    // Prevent accidental interaction with `<form>` elements in the Light DOM,
    // if ShadyDOM is applied by polyfills.
    evt.preventDefault();
    // prevent 'click' event from bubbling out of Shadow DOM
    evt.stopPropagation();
  }
  
  /**
   * Manages the reveal button's state based on its active/toggled status.
   * Updates label, aria-label, and icon properties according to the current state.
   * When toggled, uses the "toggled" variants if provided, otherwise maintains original values.
   * When not toggled, restores the original "off" state values.
   * Emits appropriate custom events to notify of state changes.
   * 
   * @public
   * @emits BoltRevealButtonElement#bolt-reveal-button-toggle - When button becomes active/toggled
   * @emits BoltRevealButtonElement#bolt-reveal-button-untoggle - When button becomes inactive/untoggled
   */
  handleButtonState() {
    if (this.toggled) {
      // When active, use the "toggled" values if they exist, otherwise keep the original values
      this.label = (this.labeltoggled && this.labeltoggled.length > 0) ? this.labeltoggled : this._labeloff;
      this.arialabel = (this.arialabeltoggled && this.arialabeltoggled.length > 0) ? this.arialabeltoggled : this._arialabeloff;
      this.iconright = (this.iconrighttoggled && this.iconrighttoggled.length > 0) ? this.iconrighttoggled : this._iconrightoff;
      this.$emit('bolt-reveal-button-toggle', {
        bubbles: true,
      });
    } else {
      // When untoggled, restore the original values
      this.label = this._labeloff;
      this.arialabel = this._arialabeloff;
      this.iconright = this._iconrightoff;
      this.$emit('bolt-reveal-button-untoggle', {
        bubbles: true,
      });
    }
  }

  //
  // RENDERED HTML ELEMENTS
  //
  /**
   * Renders the component's HTML template
   * Creates button element
   * @returns {TemplateResult} The component's rendered template
   * @override
   */
  render() {
    this.applyWidth();
    let attrArialabelledby = `labelledby-${this._generatedId}`;
      
    return x`
      <button
        id="${this._generatedId}"
        type="button"
        data-test="${this._attrDataTest}"
        ?disabled="${this.disabled}"
        class="${this._attrClass}"
        aria-labelledby="${l(this.arialabelledby || this.badgecount ? attrArialabelledby : undefined)}"
        aria-label="${l(this.arialabel || null)}"
        aria-disabled="${this.disabled ? 'true' : 'false'}"
        @click="${this._onButtonClick}"
        part="root"
      >
        ${this.renderIcon('left')}
        <span class="buttontxt">${this.label}</span>
        ${this.renderIcon('right')}
        ${this.renderBadge()}
      </button>

      <div hidden id="${attrArialabelledby}">${this._labelledbyText}</div>
    `;
  }

  /**
   * Renders an icon element for the specified side of the reveal button.
   * Creates a bolt-icon element with appropriate attributes for accessibility and styling.
   * 
   * @param {('left'|'right')} side - Which side to render the icon for
   * @returns {TemplateResult|String} The icon template with bolt-icon element or empty string if no icon is configured
   * @private
   */
  renderIcon(side){
    const icon = (side === 'left' ? this.iconleft : this.iconright);

    if (!icon) {
      return ''
    }

    return x`
      <bolt-icon
        name="${icon}"
        title=""
        decorative
        fluid
        data-side="${side}"
      ></bolt-icon>
    `;
  }

  /**
   * Renders a badge element if badgecount is specified and valid.
   * Badge is not rendered for 'ghost' type buttons or when badgecount is less than 1.
   * Automatically generates appropriate aria-label text and appends to labelledby text.
   * 
   * @returns {TemplateResult|String} The badge template with bolt-badge element or empty string if no badge should be shown
   * @private
   */
  renderBadge() {
    // Do not render with ghost or when badgecount<1>
    if (this.type === 'ghost' || this.badgecount < 1) {
      return '';
    } else if (this.badgecount) {
      // badgecount attribute passed to aria attr
      let _label = (
        this.badgecount > 1
        ? ` ${this.badgecount} items need attention`
        : ' Needs attention'
      );

      this._labelledbyText += _label;

      return x `
        <bolt-badge
          color="${l(this.badgecolor || null)}"
          count="${this.badgecount}"
          size="${this._badgeSize}"
        ></bolt-badge>
      `;
    } else {
      return '';
    }
  }

  //
  // CALCULATED VALUES
  //
  /**
   * Computes the CSS class string for the reveal button element.
   * Combines size, type, color, and icon-related classes into a single string.
   * Includes conditional classes for icon-only buttons and icon positioning.
   * 
   * @readonly
   * @type {String}
   * @private
   * @returns {String} Space-separated CSS classes for the button element
   */
  get _attrClass() {
    return `
      bolt-reveal-button-wc
      size-${this.size}
      ${this._isIconOnly ? 'icon-only' : ''}
      ${this.iconleft ? 'icon-left' : ''}
      ${this.iconright ? 'icon-right' : ''}
      bolt-reveal-button-wc--${this.type}
      bolt-reveal-button-wc--color-${this.color}
    `;
  }

  /**
   * Gets the data-test attribute value for the button
   * @readonly
   * @type {String}
   * @private
   */
  get _attrDataTest() {
    return (this.datatestbutton ? this.datatestbutton : DATATEST_DEFAULTS$2.button)
  }

  /**
   * Determines if the button should be rendered as icon-only.
   * Icon-only buttons have no text content (empty or null label) and at least one icon configured.
   * This affects styling and accessibility behavior of the button.
   * 
   * @readonly
   * @type {Boolean}
   * @private
   * @returns {Boolean} True if button should be rendered as icon-only, false otherwise
   */
  get _isIconOnly() {
    const _isEmpty = !this.label || this.label.length < 1;
    // true if either icon is configured
    const _hasOneIcon = (this.iconleft || this.iconright);
    // if label empty and at least one icon is configured
    const result = (_isEmpty && _hasOneIcon);

    return result
  }

  /**
   * Calculates the appropriate badge size based on badge count.
   * 
   * @readonly
   * @type {String}
   * @private
   * @returns {('sm'|'md')} The badge size identifier
   */
  get _badgeSize() {
    // Badge size is 'sm' by default. If displaying a number, must be 'md'
    return this.badgecount > 1 ? 'md' : 'sm';
  }
}

async function initialize$8() {
  // Upstream
  await initialize$r();
  await initialize$y();

  // Local
  BoltRevealButtonElement.$define();
}

var index$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltRevealButtonElement: BoltRevealButtonElement,
  initialize: initialize$8
});

var CSS$9 = ".bolt-annotation.bolt-optional {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  letter-spacing: 0px;\n  font-size: clamp(11px, 11px + 1px * (var(--bolt-typography-basis) - 360) / 840, 12px);\n  line-height: clamp(1.45, 1.45 + -0.12 * (var(--bolt-typography-basis) - 360) / 840, 1.33);\n  font-style: italic;\n  font-weight: 400;\n}\n\n:host,\n:host * {\n  /* css-core:utils/reset.component */\n  border: 0;\n  font: inherit;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  vertical-align: baseline;\n}\n\n:host {\n  --border-width: 1px;\n  display: block;\n}\n:host bolt-field-error {\n  margin-top: 4px;\n}\n\n:host([disabled]),\n:host([state=disabled]) {\n  opacity: 0.5;\n}\n\n:host([disabled]) *,\n:host([state=disabled]) * {\n  cursor: not-allowed;\n}\n\n#root {\n  display: flex;\n  flex-direction: column;\n}\n#root.fit {\n  align-items: flex-start;\n}\n#root.fit select {\n  padding-right: 80px;\n}\n#root.fit #bolt-select-wrapper {\n  display: inline-block;\n}\n#root select {\n  display: block;\n  color: var(--bolt-theme-onSurface);\n  margin: 0;\n  padding: var(--bolt-space-xs) var(--bolt-space-sm);\n  max-width: 100%;\n  width: 100%;\n  border: 0;\n  border-radius: 0;\n  box-sizing: border-box;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background: none;\n  transition: background-color 350ms, border 350ms, color 350ms, box-shadow 350ms;\n}\n#root select:hover:enabled {\n  cursor: pointer;\n  background: var(--bolt-theme-inputSurfaceHigh);\n}\n#root select:hover:enabled + .input-icon-container__long-options::after {\n  opacity: 0;\n  transition-timing-function: ease-in;\n}\n#root select:hover:enabled + .input-icon-container__long-options::before {\n  opacity: 1;\n  transition-timing-function: ease-out;\n}\n#root select:focus:enabled, #root select:focus:enabled:hover {\n  outline: none;\n}\n#root select:focus:enabled + .input-icon-container__long-options::after, #root select:focus:enabled:hover + .input-icon-container__long-options::after {\n  opacity: 0;\n  transition-timing-function: ease-in;\n}\n#root select:focus:enabled + .input-icon-container__long-options::before, #root select:focus:enabled:hover + .input-icon-container__long-options::before {\n  opacity: 1;\n  transition-timing-function: ease-out;\n}\n\n#label-wrapper {\n  margin-bottom: 4px;\n}\n#label-wrapper label {\n  color: var(--bolt-context-onSurface);\n  font-weight: 500;\n}\n\n.visually-hidden {\n  border: 0 !important;\n  outline: none !important;\n  box-shadow: none !important;\n  width: 1px !important;\n  height: 1px !important;\n  clip: rect(1px, 1px, 1px, 1px); /* old & current Browsers */\n  clip-path: inset(50%); /* browsers in the future */\n  white-space: nowrap;\n  margin: -1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  z-index: -99999 !important;\n  color: transparent;\n  background-color: transparent;\n  text-shadow: none;\n}\n\n.input-container {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(14px, 14px + 2px * (var(--bolt-typography-basis) - 360) / 840, 16px);\n  line-height: clamp(1.43, 1.43 + 0.07 * (var(--bolt-typography-basis) - 360) / 840, 1.5);\n  position: relative;\n  max-width: 100%;\n  background: var(--bolt-theme-inputSurface);\n  transition: box-shadow 350ms;\n  border-color: var(--bolt-theme-outline);\n  border-style: solid;\n  border-radius: 4px;\n  border-width: 1px;\n  overflow: hidden;\n}\n.input-container__has-error {\n  border-color: var(--bolt-theme-error);\n  border-width: 2px;\n}\n.input-container:focus-within {\n  /* css-core:context.focus */\n  box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n  outline: none;\n  text-decoration-color: transparent;\n  background: var(--bolt-theme-inputSurfaceHigh);\n}\n.input-container:focus-within:not(.input-container__has-error) {\n  border-color: var(--bolt-theme-focus);\n}\n.input-icon-container {\n  color: var(--bolt-theme-onSurface);\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  width: 80px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  top: 0;\n  transition: 350ms;\n}\n.input-icon-container__long-options::after, .input-icon-container__long-options::before {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 100%;\n  transition: opacity 350ms ease-out;\n  position: absolute;\n  right: 0;\n}\n.input-icon-container__long-options::after {\n  opacity: 1;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, var(--bolt-theme-inputSurface) 60%, var(--bolt-theme-inputSurface) 100%);\n  transition-timing-function: ease-out;\n}\n.input-icon-container__long-options::before {\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, var(--bolt-theme-inputSurfaceHigh) 60%, var(--bolt-theme-inputSurfaceHigh) 100%);\n  opacity: 0;\n  transition-timing-function: ease-in;\n}\n.input-icon-container bolt-icon {\n  position: absolute;\n  right: 12px;\n  z-index: 1;\n}\n.input-dummy-value {\n  width: auto;\n}\n.input-dummy-value-container {\n  height: 0;\n  left: -9999px;\n  pointer-events: none;\n  position: absolute;\n  visibility: hidden;\n  width: 2000px;\n}\n.input-instructionaltext {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  letter-spacing: 0px;\n  font-size: clamp(11px, 11px + 1px * (var(--bolt-typography-basis) - 360) / 840, 12px);\n  line-height: clamp(1.45, 1.45 + -0.12 * (var(--bolt-typography-basis) - 360) / 840, 1.33);\n  color: var(--bolt-context-onSurface);\n  margin-top: 4px;\n}";

/**
 * Configuration constant for datatest default
 * @type {Object}
 */
const DATATEST_DEFAULTS$1 = {
  select: 'select',
};

/**
 * Select menus allow users to make a single selection from a list of options.
 *
 * The `<bolt-select>` custom element creates a select menu with a label and optional error and hint text. The "Select" option text is present as part of the custom element; it should not be passed as an option.
 *
 * @class BoltSelectElement
 * @element BoltSelectElement
 * @extends {BoltElement}
 * @tagname bolt-select
 * @since 3.0.0
 *
 * @property {String} label - (Conditionally Required) The label text for the input. This generates a visible `<label>` element associated with this `<select>`. Required if `arialabel` or `arialabelledby` are NOT present.
 * @property {String} arialabel - (Conditionally Required) Sets the `aria-label` attribute of the underlying `<select>` element. Required if `label` or `arialabelledby` are NOT present.
 * @property {String} arialabelledby - (Conditionally Required) Sets the `aria-labelledby` attribute of the underlying `<select>` element. Required if `label` or `arialabel` are NOT present.
 * @property {String} value - (Optional) The value for the input, which **must** be a string. The `value` attribute will not accept an object.
 * @property {Boolean} required - (Optional) If present, the field is required. Fields that are not required will show "(optional)".
 * @property {String} optionaltext - (Optional) Use to remove the "(optional)" text from non-required fields. Default is `show`. Possible values: [`show`, `hide`]
 * @property {Boolean} disabled - (Optional) If present, disables rendered interactive elements.
 * @property {String} error - (Optional) The error message to display below the input. Should not be used when component is `disabled`. For slotted field error see {@link https://bolt.nwie.net/web/components/field-error/#select-with-error-slot|select error slot}.
 * @property {String} width - (Optional) `full` (default) spans the entire width of the container. `fit-content` sets the width of the `select` box based on its longest option. A numerical value sets width in terms of average character widths. Possible values: [`full`, `fit-content`]
 * @property {Boolean} invalid - (Optional) If present, the field appears invalid.
 * @property {String} placeholder - (Optional) Defaults to "Select", but text can be customized.
 * @property {String} placeholdervalue - (Optional) Defaults to empty string.
 * @property {String} datatestselect - (Optional) Property to configure the `data-test` value on the underlying `<select>` element. Default is `select`.
 *
 * @slot help - Contains a `<bolt-contextual-help>` element for additional guidance
 * @slot error - Contains a `<bolt-field-error>` element for custom error messaging
 * @slot (default) - Contains `<option>` elements that define the available choices
 *
 * @event {Event} change - Emitted when the selected value changes. The event's target.value contains the new selected value.
 * @event {Event} input - Emitted when the select receives input. The event's target.value contains the current value.
 *
 * @see https://bolt.nwie.net/web/components/select
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @example
 * <bolt-select label="Choose an option" name="example">
 *   <option value="option1">Option 1</option>
 *   <option value="option2">Option 2</option>
 *   <option value="option3">Option 3</option>
 * </bolt-select>
 *
 * @example
 * <!-- With placeholder and custom width -->
 * <bolt-select
 *   label="Select size"
 *   placeholder="Choose size..."
 *   width="fit-content"
 *   required>
 *   <option value="small">Small</option>
 *   <option value="medium">Medium</option>
 *   <option value="large">Large</option>
 * </bolt-select>
 */
class BoltSelectElement extends BoltElement {
  /**
   * Returns the custom element tag name for registration
   * @readonly
   * @static
   * @returns {String} The element tag name 'bolt-select'
   */
  static get is() {
    return 'bolt-select';
  }

  /**
   * Returns the CSS styles for the component
   * @readonly
   * @static
   * @returns {CSSResult} The component's CSS styles
   */
  static get styles() {
    return CSS$9;
  }

  /**
   * Defines the reactive properties for the component
   * @readonly
   * @static
   * @returns {Object} Property definitions with types and configuration
   */
  static get properties() {
    return {
      arialabel: { type: String },
      arialabelledby: { type: String },
      datatestselect: { type: String, default: DATATEST_DEFAULTS$1.select },
      disabled: { type: Boolean, reflect: true },
      error: { type: String },
      hasLongOptionSelected: { type: Boolean, attribute: false },
      invalid: { type: Boolean },
      label: { type: String },
      name: { type: String },
      optionaltext: { type: String },
      options: { type: Array },
      placeholder: { type: String },
      placeholdervalue: { type: String },
      required: { type: Boolean },
      selectedText: { type: String },
      state: { type: String },
      value: { type: String },
      width: { type: String },
    }
  }

  /**
   * Lifecycle method called when the element is created.
   * Initializes default property values, generates unique IDs, and sets up resize observer.
   *
   * @protected
   */
  $onCreate() {
    this.error = '';
    this.required = false;
    this.optionaltext = 'show';
    this.label = '';
    this.state = '';
    this.disabled = false;
    this.options = [];
    this.placeholder = 'Select';
    this.placeholdervalue = '';
    this.width = 'full';
    this.arialabelledby = '';
    this.arialabel = '';
    this.invalid = false;

    // Private state variables
    this.didPlaceOptions = false;
    this.didSetWidth = false;
    this.generatedId = this.generateId();
    this._labelledbyText = '';

    this.errorId = this.generateId('error');

    this._reset();

    this._resizeWatcher = new ResizeObserver(entry => {
      this._onComponentResize();
    });
  }

  /**
   * Lifecycle method called when the element is connected to the DOM.
   * Attaches the resize observer and sets up focusable attributes.
   *
   * @protected
   */
  $onConnect() {
    // Attach resize observer
    this._resizeWatcher.observe(this);
    this.setAttribute('bolt-focusable', '');
  }

  /**
   * Lifecycle method called when the element is disconnected from the DOM.
   * Cleans up the resize observer to prevent memory leaks.
   *
   * @protected
   */
  $onDisconnect() {
    // Disconnect resize observer
    this._resizeWatcher.disconnect();
  }

  /**
   * Generates a unique ID for the select element or its sub-components.
   *
   * @private
   * @param {String} [type] - Optional type suffix for the ID
   * @returns {String} The generated unique ID
   */
  generateId(type) {
    return 'bolt-select--' + (type ? (type + '--') : '') + Math.floor(Math.random() * 10000000);
  }

  /**
   * Synchronizes the component's value and selectedText with the native select element's current selection.
   * This method handles child-to-parent value syncing when the native select changes.
   *
   * @private
   * @returns {Promise<void>} Resolves when the update is complete
   */
  async setValueToInputValue() {
    let $select = this.$select;

    if ($select.value) {
      let $option = $select.options[$select.selectedIndex];
      this.selectedText = $option.innerText;
      this.value = $option.value;
    } else {
      this.selectedText = this.placeholder;
      this.value = this.placeholdervalue;
    }
    await this.updateComplete;
  }

  /**
   * Updates the native select element's value and selectedText when the component's value property changes.
   * This method handles parent-to-child value syncing when the value is set programmatically.
   *
   * @private
   * @returns {Promise<void>} Resolves when the update is complete
   */
  async updateValue(){
    if (this.options.length < 2) {
      await this._populateOptions();
    }

    let $select = this.$select;
    $select.value = this.value;

    let $option = $select.options[$select.selectedIndex];
    if ($option){
      this.selectedText = $option.innerText;
    } else {
      this.selectedText = this.placeholder;
    }
  }

  /**
   * Renders the select component template.
   * Creates the complete select interface including label, native select element, custom styling, and error handling.
   *
   * @protected
   * @returns {TemplateResult} The component's HTML template
   */
  render() {
    let determinedDisabled = (this.state === 'disabled') || this.disabled;

    let arrDescribedBy = [];
    arrDescribedBy.push(this.errorId);
    let describedBy = arrDescribedBy.join(' ').trim();
    let attrArialabelledby = `labelledby-${this.generatedId}`;
    // the slot with options is hidden on load.
    // populateOptions() is called when the component loads and when the slot's content changes, which updates this.options, triggering a re-render

    return x`
      <div
        id="root"
        class="${this.width=== 'fit-content' ? 'fit' : ''}"
      >
        ${this.label
          ? x`
            <div id="label-wrapper">
              <label
                for="${this.generatedId}"
                class="${determinedDisabled}"
              >
                ${this.label}
                ${!(this.required) && this.label.length > 0 && this.optionaltext == 'show'
                  ? x`<span class="bolt-annotation bolt-optional"> (optional)</span>`
                  : ''
                }
                ${ this._hasHelpText
                  ? x`
                    <span class="visually-hidden">
                      has tooltip
                    </span>
                  `
                  : x``
                }
              </label>
              <slot name="help" @slotchange="${this._onHelpSlotChange}"></slot>
            </div>
          `
          : ''
        }

        <div
          class="
            input-container
            ${this._isInvalid ? 'input-container__has-error' : ''}
          "
          id="bolt-select-wrapper"
        >
          <select
            ?disabled="${determinedDisabled}"
            ?required="${this.required}"
            @change="${this._onChange}"
            @input="${this._onInput}"
            aria-describedby="${l(describedBy || null)}"
            aria-disabled="${determinedDisabled ? 'true' : 'false'}"
            aria-invalid="${this._isInvalid}"
            aria-label="${l(this.arialabel || null)}"
            aria-labelledby="${l(this._labelledbyText ? attrArialabelledby : undefined)}"
            data-test="${this.datatestselect || DATATEST_DEFAULTS$1.select}"
            id="${this.generatedId}"
          >
            ${this.options.map(option => x`
              <option value="${option.value}">${option.text}</option>
            `)}
          </select>

          <div
            class="
              input-icon-container
              ${ this.hasLongOptionSelected ? "input-icon-container__long-options" : "" }
            "
          >
            <bolt-icon name="caret-down" decorative></bolt-icon>
          </div>

          <span
            class="input-dummy-value-container"
            aria-hidden="true"
          >
            <span class="input-dummy-value">${this.selectedText}</span>
          </span>
        </div>

        ${this.hasLongOptionSelected
          ? x`
            <div
              class="input-instructionaltext bolt-body-copy-sm"
              aria-hidden="true"
            >
              ${this.selectedText}
            </div>
          `
          : ''
        }
        <slot name="error" @slotchange="${this._onErrorSlotChange}" id="${this.errorId}">
          ${ this.error
             ? x`
              <bolt-field-error>
                ${this.error}
              </bolt-field-error>
            ` : ''
          }
         </slot>

        <div hidden>
          <slot id="bolt-options-slot" @slotchange=${this._onSlotChange}></slot>
        </div>
        <div hidden id="${attrArialabelledby}">${this._labelledbyText}</div>
      </div>
    `;
  }

  /**
   * Lifecycle method called before the element is updated.
   * Processes property changes, particularly for aria-labelledby updates.
   *
   * @protected
   * @param {Map} changedProperties - The properties that have changed
   */
  update(changedProperties) {
    changedProperties.forEach( (oldValue, propName) => {
      let value = this[propName];

      if (propName === 'arialabelledby') {
        this._labelledbyText = value ? this.$lookupInnerTexts(value) : '';
      }
    });
    super.update(changedProperties);
  }

  /**
   * Lifecycle method called after the element has been updated.
   * Handles value changes, width updates, and manages help slot states.
   *
   * @protected
   * @param {Map} changedProperties - The properties that have changed
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if(propName === 'value'){
        this.updateValue();
      }
      else if(propName === 'width'){
        this.setWidth();
      }
    });
    if (!changedProperties.has('hasLongOptionSelected')){
      this.determineLongOptionState();
    }
    if (changedProperties.has('disabled')) {
      if (this.$helpSlot) {
        for (const $node of this.$helpSlot.assignedNodes()) {
          $node.disabledByContext = !!this.disabled;
        }
      }
    }
  }

  /**
   * Determines whether the currently selected option text is too long for the available space.
   * Updates the hasLongOptionSelected property which triggers responsive layout adjustments.
   *
   * @private
   */
  determineLongOptionState() {
    let $dummy = this.shadowRoot.querySelector('.input-dummy-value');
    let $select = this.$select;
    let $selectIcon = this.shadowRoot.querySelector('.input-icon-container');
    let selectStyles = window.getComputedStyle($select);

    let $availableWidth =  ($select.offsetWidth - (parseInt(selectStyles.getPropertyValue('padding-left')) + $selectIcon.offsetWidth * .6));

    this.hasLongOptionSelected = $dummy.offsetWidth > $availableWidth;
  }

  /**
   * Sets the width of the select container based on the width property.
   * Supports both predefined string values and numeric values in rem units.
   *
   * @private
   */
  setWidth() {
    // FIXME: use #id selector instead of lengthy, legacy class name
    let $wrapper = this.shadowRoot.querySelector('.input-container');

    if (this.width && !isNaN(this.width)) {
      $wrapper.style.width = (this.width * 16) + "px";
    }
    else {
      $wrapper.style.width = "";
    }
  }

  /**
   * Populates the options array from slotted option elements.
   * Extracts value, text, and selected state from each option and updates the component state.
   *
   * @private
   * @returns {Promise<void>} Resolves when options are populated and the component is updated
   */
  async _populateOptions() {
    let $options = this.querySelectorAll(':scope > option');
    let newOptions = [];

    // add placeholder option
    newOptions.push({
      value: this.placeholdervalue,
      text: this.placeholder,
    });

    for (let $option of $options) {
      let newOption = {
        value: $option.value,
        text: $option.innerText,
        selected: $option.selected, // TODO: consider removing
      };

      if ($option.selected) {
        this.value = $option.value;
        this.selectedText = $option.innerText;
      }

      newOptions.push(newOption);
    }

    this.options = newOptions;

    // this.options hasn't resolved yet, so we need to wait
    // for LitElement internals to finish updating
    await this.updateComplete;
  }

  /**
   * Attempts to forward focus to the native select element.
   * Safely handles cases where the shadow DOM may not be fully initialized.
   *
   * @public
   */
  focus() {
    /*
     * There's no guarantee that the shadowRoot exists or been populated
     * when this method is called, so we need to make sure we don't
     * attempt to focus a nonexistent element.
     */
    this.$select?.focus();
  }

  /**
   * Handles slot change events from the default slot containing option elements.
   * Re-populates options and resets the selection if the current value is no longer available.
   *
   * @private
   * @returns {Promise<void>} Resolves when slot changes are processed
   */
  async _onSlotChange() {
    await this._populateOptions();

    // Look for current value in new options
    let valexists = this.options.some(option => {
      return option.value === this.value;
    });

    // If not found, reset
    if (!valexists) {
      this._reset();
    }
  }

  /**
   * Handles slot change events from the help slot.
   * Updates the internal help text state and triggers a re-render for accessibility.
   *
   * @private
   * @param {Event} evt - The slotchange event
   */
  _onHelpSlotChange(evt) {
    this._hasHelpText = !!evt.target.assignedNodes().length;
    this.requestUpdate();
  }

  /**
   * Handles slot change events from the error slot.
   * Updates the internal error state and triggers a re-render.
   *
   * @private
   * @param {Event} evt - The slotchange event
   */
  _onErrorSlotChange(evt) {
    this._hasErrorAttribute = !!evt.target.assignedNodes().length;
    this.requestUpdate();
  }

  /**
   * Handles input events from the native select element.
   * Synchronizes the component state and re-dispatches the event.
   *
   * @private
   * @param {Event} e - The input event from the select element
   * @returns {Promise<void>} Resolves when the input is processed
   */
  async _onInput(e) {
    e.stopPropagation();
    await this.setValueToInputValue();
    this.$emit(e.type, {
      bubbles: e.bubbles,
      cancelable: e.cancelable,
    });
  }

  /**
   * Handles change events from the native select element.
   * Synchronizes the component state and re-dispatches the event.
   *
   * @private
   * @param {Event} e - The change event from the select element
   * @returns {Promise<void>} Resolves when the change is processed
   */
  async _onChange(e) {
    e.stopPropagation();
    await this.setValueToInputValue();
    this.$emit(e.type, {
      bubbles: e.bubbles,
      cancelable: e.cancelable,
    });
  }

  /**
   * Handles component resize events from the ResizeObserver.
   * Triggers re-evaluation of the long option state for responsive behavior.
   *
   * @private
   */
  _onComponentResize() {
    this.determineLongOptionState();
  }

  /**
   * Resets the select to its default state with placeholder values.
   * Used when the current value is no longer available in the options list.
   *
   * @private
   */
  _reset() {
    this.value = this.placeholdervalue;
    this.selectedText = this.placeholder;
    this.hasLongOptionSelected = false;
  }

  /**
   * Determines if the select should appear invalid.
   * Considers the invalid property, error messages, and slotted error elements.
   *
   * @private
   * @returns {Boolean} True if the element should appear invalid
   */
  get _isInvalid() {
    return Boolean(this.invalid || this.error || this.querySelector("bolt-field-error[slot='error']") )
  }

  /**
   * Gets the native select element from the shadow DOM.
   *
   * @private
   * @returns {HTMLSelectElement|null} The select element or null if not found
   */
  get $select() {
    return this.shadowRoot?.querySelector('select');
  }

  /**
   * Gets the help slot element from the shadow DOM.
   * May return null if the element does not render a label or help slot.
   *
   * @private
   * @returns {HTMLSlotElement|null} The help slot element or null if not found
   */
  get $helpSlot() {
    return this.shadowRoot.querySelector('slot[name="help"]')
  }
}

var CSS$8 = "@layer layout {\n  :host {\n    pointer-events: none;\n  }\n  #root {\n    height: 100%;\n    position: relative;\n  }\n  #icon-wrapper {\n    align-items: center;\n    display: flex;\n    height: 100%;\n  }\n  #icon-wrapper > bolt-icon {\n    position: absolute;\n    right: 12px;\n  }\n}\n@layer appearance {\n  :host {\n    --background-color: var(--bolt-theme-inputSurface);\n    --border-color: var(--bolt-theme-outline);\n    --border-width: 1px;\n  }\n  #root {\n    background-color: var(--background-color);\n    border-color: var(--border-color);\n    border-radius: 4px;\n    border-style: solid;\n    border-width: var(--border-width);\n    transition-duration: 350ms;\n    transition-property: background-color, border, box-shadow, color;\n  }\n  #icon-wrapper {\n    color: var(--bolt-theme-onSurface);\n  }\n}";

/**
 * The `bolt-select-facade` component provides the visual styling and dropdown indicator for select elements.
 * This component is typically used internally by the bolt-select component and renders a dropdown arrow icon
 * that indicates the interactive nature of the select element.
 *
 * @class BoltSelectFacadeElement
 * @element BoltSelectFacadeElement
 * @extends {BoltElement}
 * @tagname bolt-select-facade
 * @since 3.0.0
 *
 * @see https://bolt.nwie.net/web/components/select
 *
 */
class BoltSelectFacadeElement extends BoltElement {
  /**
   * Returns the custom element tag name for registration
   * @readonly
   * @static
   * @returns {String} The element tag name 'bolt-select-facade'
   */
  static is = 'bolt-select-facade'

  /**
   * Returns the CSS styles for the component
   * @readonly
   * @static
   * @returns {CSSResult} The component's CSS styles
   */
  static styles = CSS$8

  /**
   * Renders the select facade component template.
   * Creates a visual facade with a dropdown arrow icon to indicate an interactive select element.
   *
   * @protected
   * @override
   * @returns {TemplateResult} The component's HTML template containing the dropdown icon
   */
  render() {
    return x`
      <div id="root">
        <div id="icon-wrapper">
          <bolt-icon name="caret-down" decorative></bolt-icon>
        </div>
      </div>
    `
  }
}

/**
 * This module exports the select components and their initialization function.
 * The select components consist of:
 * - `<bolt-select>`: Dropdown selection element for choosing from options
 * - `<bolt-select-facade>`: Visual facade for the select component
 *
 * @module bolt-select
 * @since 3.0.0
 *
 * @see {@link ./elements/bolt-select|BoltSelectElement}
 * @see {@link ./elements/bolt-select-facade|BoltSelectFacadeElement}
 */


/**
 * Initializes the select components by registering them as custom elements
 *
 * This function:
 * 1. Initializes dependencies (FieldError and Icon components)
 * 2. Registers the BoltSelectElement
 * 3. Registers the BoltSelectFacadeElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$7() {
  // Upstream
  await initialize$w();
  await initialize$y();

  // Local
  BoltSelectElement.$define();
  BoltSelectFacadeElement.$define();
}

var index$6 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltSelectElement: BoltSelectElement,
  BoltSelectFacadeElement: BoltSelectFacadeElement,
  initialize: initialize$7
});

var CSS$7 = ".bolt-annotation.bolt-optional {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  letter-spacing: 0px;\n  font-size: clamp(11px, 11px + 1px * (var(--bolt-typography-basis) - 360) / 840, 12px);\n  line-height: clamp(1.45, 1.45 + -0.12 * (var(--bolt-typography-basis) - 360) / 840, 1.33);\n  font-style: italic;\n  font-weight: 400;\n}\n\n@layer layout {\n  :host {\n    align-items: flex-start;\n    display: flex;\n    flex-direction: column;\n  }\n  :host bolt-field-error {\n    margin-top: 4px;\n  }\n  :host([disabled]) * {\n    cursor: not-allowed;\n  }\n  #label-wrapper {\n    margin-bottom: 4px;\n  }\n  .input-container {\n    display: inline-flex;\n    position: relative;\n  }\n  .input-container input {\n    cursor: pointer;\n    height: 100%;\n    margin: 0;\n    outline: none;\n    position: absolute;\n    width: 100%;\n  }\n  .input-container input:checked + bolt-switch-facade {\n    --knob-justify: end;\n  }\n}\n@layer appearance {\n  :host {\n    color: var(--bolt-context-onSurface);\n  }\n  :host([disabled]) {\n    opacity: 0.5;\n  }\n  .visually-hidden {\n    border: 0 !important;\n    outline: none !important;\n    box-shadow: none !important;\n    width: 1px !important;\n    height: 1px !important;\n    clip: rect(1px, 1px, 1px, 1px); /* old & current Browsers */\n    clip-path: inset(50%); /* browsers in the future */\n    white-space: nowrap;\n    margin: -1px !important;\n    overflow: hidden !important;\n    padding: 0 !important;\n    position: absolute !important;\n    z-index: -99999 !important;\n    color: transparent;\n    background-color: transparent;\n    text-shadow: none;\n  }\n  #label-wrapper {\n    font-family: var(--bolt-fontFamily-sansSerif);\n    font-weight: 400;\n    font-size: clamp(14px, 14px + 2px * (var(--bolt-typography-basis) - 360) / 840, 16px);\n    line-height: clamp(1.43, 1.43 + 0.07 * (var(--bolt-typography-basis) - 360) / 840, 1.5);\n  }\n  #label-wrapper label {\n    font-weight: 500;\n  }\n  .input-container input {\n    appearance: none;\n  }\n  .input-container input:checked + bolt-switch-facade {\n    --border-color: #0000;\n    --knob-background-color: var(--bolt-context-onAccent);\n    --switch-background-color: var(--bolt-context-accent);\n  }\n  .input-container input:is(:focus) + bolt-switch-facade {\n    /* css-core:context.focus */\n    box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n    outline: none;\n    text-decoration-color: transparent;\n  }\n  .input-container__has-error {\n    border-color: var(--bolt-theme-error, #b81d2d);\n    border-width: 2px;\n  }\n  .input-instructionaltext {\n    font-family: var(--bolt-fontFamily-sansSerif);\n    font-weight: 400;\n    letter-spacing: 0px;\n    font-size: clamp(11px, 11px + 1px * (var(--bolt-typography-basis) - 360) / 840, 12px);\n    line-height: clamp(1.45, 1.45 + -0.12 * (var(--bolt-typography-basis) - 360) / 840, 1.33);\n    margin-top: 4px;\n  }\n}";

const DEFAULTS = {
  checked: false,
  datatestinput: 'input',
  disabled: false,
  error: '',
  instructionaltext: '',
  invalid: false,
  label: '',
  optionaltext: 'show',
  required: false,
  value: '',
};

/**
 * Switches allow users to make a single immediate binary decision (yes/no, on/off etc.).
 *
 * @class BoltSwitchElement
 * @element BoltSwitchElement
 * @extends {BoltElement}
 * @tagname bolt-switch
 * @since 6.6.0
 *
 * @property {String} label - (Conditionally Required) The label text for the input. This generates a visible `<label>` element associated with the underlying `<input>` element. Required if `arialabel` or `arialabelledby` are NOT present.
 * @property {String} arialabel - (Conditionally Required) Sets the `aria-label` attribute of the underlying `<input>` element. Required if `label` or `arialabelledby` are NOT present.
 * @property {String} arialabelledby - (Conditionally Required) Sets the `aria-labelledby` attribute of the underlying `<input>` element. Required if `label` or `arialabel` are NOT present.
 * @property {Boolean} checked - (Optional) If present, the field is checked.
 * @property {String} datatestinput - (Optional) Property to configure the `[data-test]` value on the underlying `<input>` element. Default is `input`.
 * @property {Boolean} disabled - (Optional) If present, disables rendered interactive elements.
 * @property {String} error - (Optional) The error message to display below the input. Should NOT be used when component is `disabled`. For slotted field error see {@link https://bolt.nwie.net/web/components/field-error/#switch-with-error-slot|switch with error slot}.
 * @property {String} instructionaltext - (Optional) The instructional text to display below the input. This should be used to inform users about Switch effects.
 * @property {Boolean} invalid - (Optional) If present, the field appears invalid.
 * @property {String} optionaltext - (Optional) Use to remove the "(optional)" text from non-required fields. Default is `show`. Possible values: [`show`, `hide`]
 * @property {Boolean} required - (Optional) If present, the field is required. Fields that are not required will show "(optional)".
 * @property {String} value - (Optional) The value for the input, which **must** be a string. The `value` attribute will not accept an object.
 *
 * @slot help - Contains a `<bolt-contextual-help>` element for additional guidance
 * @slot error - Contains a `<bolt-field-error>` element for custom error messaging
 *
 * @event {Event} blur - Emitted when the switch loses focus.
 * @event {Event} change - Emitted when the switch state changes. The component's checked property reflects the new state.
 * @event {Event} input - Emitted when the switch receives input. The component's checked property reflects the current state.
 *
 * @see https://bolt.nwie.net/web/components/switch
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @example
 * <!-- Switch with instructional text -->
 * <bolt-switch
 *   label="Marketing emails"
 *   instructionaltext="Receive promotional emails and updates"
 *   value="marketing">
 * </bolt-switch>
 */
class BoltSwitchElement extends BoltElement {
  /**
   * Returns the custom element tag name for registration
   * @readonly
   * @static
   * @returns {String} The element tag name 'bolt-switch'
   */
  static is = 'bolt-switch'

  /**
   * Returns the CSS styles for the component
   * @readonly
   * @static
   * @returns {CSSResult} The component's CSS styles
   */
  static styles = CSS$7

  /**
   * Defines the reactive properties for the component
   * @readonly
   * @static
   * @returns {Object} Property definitions with types and configuration
   */
  static properties = {
    arialabel: { type: String },
    arialabelledby: { type: String },
    checked: {
      type: Boolean,
      default: DEFAULTS.checked,
      reflect: true,
    },
    datatestinput: {
      type: String,
      default: DEFAULTS.datatestinput,
    },
    disabled: {
      type: Boolean,
      default: DEFAULTS.disabled,
      reflect: true,
    },
    error: {
      type: String,
      default: DEFAULTS.error,
    },
    instructionaltext: {
      type: String,
      default: DEFAULTS.instructionaltext,
     },
    invalid: {
      type: Boolean,
      default: DEFAULTS.invalid,
    },
    label: {
      type: String,
      default: DEFAULTS.label,
    },
    optionaltext: {
      type: String,
      default: DEFAULTS.optionaltext,
     },
    required: {
      type: Boolean,
      default: DEFAULTS.required,
    },
    value: {
      type: String,
      default: DEFAULTS.value,
      reflect: true
     },
  }

  /**
   * Lifecycle method called when the element is created.
   * Initializes default property values and generates unique IDs for accessibility.
   *
   * @protected
   */
  $onCreate() {
    /** @private {String} Randomly generated ID for textfield */
    this._generatedId = this.generateId();
    /** @private {String} Randomly generated ID for error (uses _generatedId) */
    this._errorId = this.generateId('error');
    /** @private {String} Randomly generated ID for instructionaltext (uses _generatedId) */
    this._instructionaltextId = this.generateId('instructionaltext');
    /** @private {String} Randomly generated ID for label (uses _generatedId) */
    this._labelId = this.generateId('label');
  }

  /**
   * Lifecycle method called when the element is connected to the DOM.
   * Sets up focusable attributes for keyboard navigation.
   *
   * @protected
   */
  $onConnect() {
    this.setAttribute('bolt-focusable', '');
  }

  /**
   * Lifecycle method called before the element is updated.
   * Processes property changes, particularly for aria-labelledby updates.
   *
   * @protected
   * @param {Map} changedProperties - The properties that have changed
   */
  update(changedProperties) {
    changedProperties.forEach( (oldValue, propName) => {
      let value = this[propName];

      if (propName === 'arialabelledby') {
        this._labelledbyText = value ? this.$lookupInnerTexts(value) : '';
      }
    });
    super.update(changedProperties);
  }

  /**
   * Renders the switch component template.
   * Creates the complete switch interface including label, native input element, visual facade, and error handling.
   *
   * @protected
   * @override
   * @returns {TemplateResult} The component's HTML template
   */
  render() {
    let arrDescribedBy = [];
    arrDescribedBy.push(this._errorId);
    arrDescribedBy.push(this.instructionaltext ? this._instructionaltextId : '');
    let describedBy = arrDescribedBy.join(' ').trim();
    let attrArialabelledby = `labelledby-${this._generatedId}`;

    return x`
      ${this.label
        ? x`
          <div id="label-wrapper">
            <label
              for="${this._generatedId}"
              id="${this.labelId}"
            >
              ${this.label}
              ${!(this.required) && this.label.length > 0 && this.optionaltext == 'show'
                ? x`
                  <span class="bolt-annotation bolt-optional">
                    (optional)
                  </span>
                `
                : x``
              }
              ${this._hasHelpText
                ? x`
                  <span
                    class="visually-hidden"
                    id="help-text"
                  >
                    has tooltip
                  </span>
                `
                : x``
              }
            </label>
            <slot name="help" @slotchange="${this._onHelpSlotChange}"></slot>
          </div>
        `
        : ''
      }
      <div
        class="input-container
        ${this._isInvalid ? 'input-container__has-error' : ''}"
      >
        <input
          ?checked="${this.checked}"
          ?required="${this.required}"
          @blur="${this._onBlur}"
          @change=${this._onChange}
          @click="${this._onClick}"
          @input="${this._onInput}"
          @keydown="${this._onKeydown}"
          aria-describedby="${l(describedBy || null)}"
          aria-disabled="${this.disabled}"
          aria-invalid="${this._isInvalid}"
          aria-label="${l(this.arialabel || null)}"
          aria-labelledby="${l(this._labelledbyText ? attrArialabelledby : undefined)}"
          data-test="${this.datatestinput}"
          id="${this._generatedId}"
          role="switch"
          type="checkbox"
          value="${this.value}"
        />
        <bolt-switch-facade></bolt-switch-facade>
      </div>
      ${ this.instructionaltext
        ? x`
          <div
            class="input-instructionaltext"
            id="${this._instructionaltextId}"
          >
            ${this.instructionaltext}
          </div>
        `
        : ''
      }
       <slot name="error" @slotchange="${this._onErrorSlotChange}" id="${this._errorId}">
          ${ this.error
            ? x`
              <bolt-field-error>
                ${this.error}
              </bolt-field-error>
            ` : ''
            }
      </slot>

      <div hidden id="${attrArialabelledby}">${this._labelledbyText}</div>
    `
  }

  /**
   * Lifecycle method called after the element has been updated.
   * Synchronizes the native input's checked state with the component property.
   *
   * @protected
   * @param {Map} props - The properties that have changed
   */
  updated(props) {
    if (props.has('checked')) {
      // update <input> state based on prop config
      this.$input.checked = this.checked;
    }
  }

  /**
   * Attempts to forward focus to the native input element.
   * Safely handles cases where the shadow DOM may not be fully initialized.
   *
   * @public
   */
  focus() {
    /*
     * There's no guarantee that the shadowRoot exists or been populated
     * when this method is called, so we need to make sure we don't
     * attempt to focus a nonexistent element.
     */
    this.$input?.focus();
  }

  /**
   * Generates a unique ID for the switch element or its sub-components.
   *
   * @private
   * @param {String} [type] - Optional type suffix for the ID
   * @returns {String} The generated unique ID
   */
  generateId(type) {
    return 'bolt-switch-wc--' + (type ? (type + '--') : '') + this.$generateId();
  }

  /**
   * Gets the native input element from the shadow DOM.
   *
   * @private
   * @returns {HTMLInputElement|null} The input element or null if not found
   */
  get $input() {
    return this.shadowRoot?.querySelector('input')
  }

  /**
   * Determines if the switch should appear invalid.
   * Considers the invalid property, error messages, and slotted error elements.
   *
   * @private
   * @returns {Boolean} True if the element should appear invalid
   */
  get _isInvalid() {
    return Boolean(this.invalid || this.error || this.querySelector("bolt-field-error[slot='error']") )
  }

  /**
   * Handles blur events from the native input element.
   * Re-dispatches the event to maintain event propagation.
   *
   * @private
   * @param {Event} evt - The blur event from the input element
   */
  _onBlur(evt){
    // relay 'blur' event
    this.$emit(evt.type, {
      bubbles: evt.bubbles,
      cancelable: evt.cancelable,
    });
  }

  /**
   * Handles change events from the native input element.
   * Updates the component's checked state and re-dispatches the event.
   *
   * @private
   * @param {Event} evt - The change event from the input element
   */
  _onChange(evt){
    // update prop config based on <input> state
    this.checked = Boolean(this.$input?.checked);

    // relay 'change' event
    this.$emit(evt.type, {
      bubbles: evt.bubbles,
      cancelable: evt.cancelable,
    });
  }

  /**
   * Handles click events from the native input element.
   * Prevents default behavior when the switch is disabled.
   *
   * @private
   * @param {Event} evt - The click event from the input element
   */
  _onClick(evt){
    if (this.disabled) {
      evt.preventDefault();
    }
  }

  /**
   * Handles slot change events from the help slot.
   * Updates the internal help text state and triggers a re-render for accessibility.
   *
   * @private
   * @param {Event} evt - The slotchange event
   */
  _onHelpSlotChange(evt) {
    this._hasHelpText = !!evt.target.assignedNodes().length;
    this.requestUpdate();
  }

  /**
   * Handles slot change events from the error slot.
   * Updates the internal error state and triggers a re-render.
   *
   * @private
   * @param {Event} evt - The slotchange event
   */
  _onErrorSlotChange(evt) {
     this._hasErrorSlot = !!evt.target.assignedNodes().length;
    this.requestUpdate();
  }

  /**
   * Handles input events from the native input element.
   * Stops event propagation and re-dispatches the event.
   *
   * @private
   * @param {Event} evt - The input event from the input element
   */
  _onInput(evt){
    evt.stopPropagation();

    // relay 'input' event
    this.$emit(evt.type, {
      bubbles: evt.bubbles,
      cancelable: evt.cancelable,
    });
  }

  /**
   * Handles keydown events from the native input element.
   * Prevents space key activation when the switch is disabled.
   *
   * @private
   * @param {Event} evt - The keydown event from the input element
   */
  _onKeydown(evt){
    if (evt.code === 'Space' && this.disabled) {
      evt.preventDefault();
    }
  }
}

var CSS$6 = "@layer layout {\n  :host {\n    --knob-justify: start;\n    display: inline-flex;\n    justify-content: var(--knob-justify);\n    padding: 2px;\n    min-width: 50px;\n  }\n  #root {\n    height: 22px;\n    width: 22px;\n  }\n}\n@layer appearance {\n  :host {\n    --border-color: var(--bolt-context-outline);\n    --knob-background-color: var(--bolt-context-onSurface);\n    --switch-background-color: var(--bolt-context-surface);\n    background-color: var(--switch-background-color);\n    border: 1px solid var(--border-color);\n    border-radius: 48px;\n  }\n  #root {\n    background-color: var(--knob-background-color);\n    border-radius: 22px;\n  }\n}";

/**
 * The bolt-switch-facade component provides the visual styling and interactive appearance for switch elements.
 * This component is primarily used as a visual facade and does not handle user interaction or state directly.
 * It serves as a styling layer that can be positioned over or alongside actual input elements.
 *
 * @class BoltSwitchFacadeElement
 * @element BoltSwitchFacadeElement
 * @extends {BoltElement}
 * @tagname bolt-switch-facade
 * @since 6.6.0
 *
 * @see https://bolt.nwie.net/web/components/switch
 *
 */
class BoltSwitchFacadeElement extends BoltElement {
  /**
   * Returns the custom element tag name for registration
   * @readonly
   * @static
   * @returns {String} The element tag name 'bolt-switch-facade'
   */
  static is = 'bolt-switch-facade'

  /**
   * Returns the CSS styles for the component
   * @readonly
   * @static
   * @returns {CSSResult} The component's CSS styles
   */
  static styles = CSS$6

  /**
   * Renders the switch facade component template.
   * Creates a visual facade with the basic structure for switch styling.
   *
   * @protected
   * @override
   * @returns {TemplateResult} The component's HTML template containing the switch visual structure
   */
  render() {
    return x`
      <span id="root"></span>
    `
  }
}

/**
 * This module exports the switch components and their initialization function.
 * The switch components consist of:
 * - `<bolt-switch>`: Toggle switch for binary on/off selection
 * - `<bolt-switch-facade>`: Visual facade for the switch component
 *
 * @module bolt-switch
 * @since 6.6.0
 *
 * @see {@link ./elements/bolt-switch|BoltSwitchElement}
 * @see {@link ./elements/bolt-switch-facade|BoltSwitchFacadeElement}
 */


/**
 * Initializes the switch components by registering them as custom elements
 *
 * This function:
 * 1. Registers the BoltSwitchFacadeElement
 * 2. Registers the BoltSwitchElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$6() {
  /* Local */
  BoltSwitchFacadeElement.$define();
  BoltSwitchElement.$define();
}

var index$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltSwitchElement: BoltSwitchElement,
  BoltSwitchFacadeElement: BoltSwitchFacadeElement,
  initialize: initialize$6
});

var CSS$5 = ":host,\n:host * {\n  /* css-core:utils/reset.component */\n  border: 0;\n  font: inherit;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  vertical-align: baseline;\n}";

class BoltTableElement extends BoltElement {
    static get is() {
      return 'bolt-table';
    }

    /**
     * LitElement properties/attributes getter
     */
    static get properties() {
        return {
            color: { type: String },
            width: { type: String },
            striped: { type: Boolean }
        }
    }

    constructor() {
        super();

        this.color = 'gray';
        this.width = 'full';
        this.striped = false;
    }

    generateId(type) {
        return 'bolt-table-wc--' + (type ? (type + '--') : '') + Math.floor(Math.random() * 10000000);
    }

    static get styles() {
        return CSS$5;
    }

    render() {
        return x`
            <div class="bolt-table-wc
                bolt-table-${this.color}
                ${this.width == 'content' ? 'bolt-table-fit-content' : '' }
                ${this.striped ? 'bolt-table-striped' : '' }
                ">
                <slot></slot>
            </div>
        `;
    }
}

async function initialize$5() {
  // Upstream
  // n/a

  // Local
  BoltTableElement.$define();
}

var index$4 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltTableElement: BoltTableElement,
  initialize: initialize$5
});

/**
 * A Tabset contains related groups of screen elements that can be viewed one at a time. The Tabset component consist of three custom elements (and all three elements must be used together):
 * - `<bolt-tabset>`
 * - `<bolt-tablabel>`
 * - `<bolt-tabpanel>`
 *
 * `<bolt-tablabel>` defines a tab label. MUST be an immediate child of `<bolt-tabset>` (i.e., matches `bolt-tabset` > `bolt-tablabel`). MUST be paired with a dedicated `<bolt-tabpanel>` element.
 *
 * @class BoltTablabelElement
 * @element BoltTablabelElement
 * @extends {BoltElement}
 * @tagname bolt-tablabel
 * @since 4.0.0
 *
 * @property {Boolean} selected - (Optional) Tab is currently selecte
 *
 * @event {CustomEvent} bolttabclick - Emitted when the tab is clicked. Bubbles to parent tabset.
 * @event {CustomEvent} bolttabfocus - Emitted when the tab receives focus. Bubbles to parent tabset.
 *
 * @see https://bolt.nwie.net/web/components/tabset
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @example
 * <bolt-tabset>
 *   <bolt-tablabel>First Tab</bolt-tablabel>
 *   <bolt-tablabel>Second Tab</bolt-tablabel>
 *
 *   <bolt-tabpanel>First tab content</bolt-tabpanel>
 *   <bolt-tabpanel>Second tab content</bolt-tabpanel>
 * </bolt-tabset>
 */
class BoltTablabelElement extends BoltElement {
  /**
   * Returns the custom element tag name for registration
   * @readonly
   * @static
   * @returns {String} The element tag name 'bolt-tablabel'
   */
  static get is() {
    return 'bolt-tablabel'
  }

  /**
   * Defines the reactive properties for the component
   * @readonly
   * @static
   * @returns {Object} Property definitions with types and configuration
   */
  static get properties() {
    return {
      // NOTE: reflects to [aria-selected] via custom logic in updated()
      selected: {
        type: Boolean,
        default: false, // BoltElement enhancement
      },
    }
  }

  /**
   * Lifecycle method called when the element is connected to the DOM.
   * Sets up accessibility attributes, slot assignment, and event listeners.
   *
   * @protected
   */
  $onConnect() {
    this.setAttribute('slot', 'list');
    this.$defaultAttr('role', 'tab');
    this.$defaultAttr('aria-selected', 'false');
    this.$ensureId();
    this.tabIndex = -1; // not keyboard-focusable

    this.addEventListener('click', this._onClick);
    this.addEventListener('focus', this._onFocus);
    this.addEventListener('keydown', this._onKeydown);
  }

  /**
   * Lifecycle method called when the element is disconnected from the DOM.
   * Cleans up event listeners to prevent memory leaks.
   *
   * @protected
   */
  $onDisconnect() {
    this.removeEventListener('click', this._onClick);
    this.removeEventListener('focus', this._onFocus);
    this.removeEventListener('keydown', this._onKeydown);
  }

  /**
   * Renders the tab label template.
   * Provides a simple slot for tab content.
   *
   * @protected
   * @returns {TemplateResult} The component's HTML template
   */
  render() {
    return x`<slot></slot>`
  }

  /**
   * Lifecycle method called after the element has been updated.
   * Manages tab focus state and aria-selected attribute based on selection.
   *
   * @protected
   * @param {Map} changedProps - The properties that have changed
   */
  updated(changedProps) {
    changedProps.forEach((oldValue, propName) => {
      if (propName === 'selected') {
        let isSelected = this[propName];
        this.tabIndex = (isSelected ? 0 : -1);
        this.setAttribute('aria-selected', isSelected);
      }
    });
  }

  /**
   * Handles click events and communicates to parent tabset.
   * Emits a bolttabclick event that bubbles to the parent tabset component.
   *
   * @private
   * @param {Event} evt - The click event
   */
  _onClick(evt) {
    this.$emit('bolttabclick', { bubbles: true });
  }

  /**
   * Handles focus events and communicates to parent tabset.
   * Emits a bolttabfocus event that bubbles to the parent tabset component.
   *
   * @private
   * @param {Event} evt - The focus event
   */
  _onFocus(evt) {
    this.$emit('bolttabfocus', { bubbles: true });
  }

  /**
   * Handles keydown events to trigger click on Enter or Space key.
   * Follows WAI-ARIA best practices for tab interaction.
   *
   * @private
   * @param {Event} evt - The keydown event
   * @see https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-20
   */
  _onKeydown(evt) {
    // FIXME: write unit tests (may require protractor + test runner)
    switch (evt.key) {
      case ' ': // space bar
        // fall through
      case 'Enter':
        evt.preventDefault();
        this.click();
        break
    }
  }
}

/**
 * A Tabset contains related groups of screen elements that can be viewed one at a time. The Tabset component consist of three custom elements (and all three elements must be used together):
 * - `<bolt-tabset>`
 * - `<bolt-tablabel>`
 * - `<bolt-tabpanel>`
 *
 * `<bolt-tabpanel>` defines a tab panel. MUST be an immediate child of `<bolt-tabset>` (i.e., matches `bolt-tabset` > `bolt-tabpanel`). MUST be paired with a dedicated `<bolt-tablabel>` element.
 *
 * @class BoltTabpanelElement
 * @element BoltTabpanelElement
 * @extends {BoltElement}
 * @tagname bolt-tabpanel
 * @since 4.0.0
 *
 * @property {Boolean} open - (Optional) - Tab is currently open
 *
 *
 * @see https://bolt.nwie.net/web/components/tabset
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @example
 * <bolt-tabset>
 *   <bolt-tablabel>First Tab</bolt-tablabel>
 *   <bolt-tablabel>Second Tab</bolt-tablabel>
 *
 *   <bolt-tabpanel>First tab content</bolt-tabpanel>
 *   <bolt-tabpanel>Second tab content</bolt-tabpanel>
 * </bolt-tabset>
 */
class BoltTabpanelElement extends BoltElement {
  /**
   * Returns the custom element tag name for registration
   * @readonly
   * @static
   * @returns {String} The element tag name 'bolt-tabpanel'
   */
  static get is() {
    return 'bolt-tabpanel'
  }

  /**
   * Defines the reactive properties for the component
   * @readonly
   * @static
   * @returns {Object} Property definitions with types and configuration
   */
  static get properties() {
    return {
      open: {
        type: Boolean,
        reflect: true,
        default: false, // BoltElement enhancement
      },
    }
  }

  /**
   * Lifecycle method called when the element is connected to the DOM.
   * Sets up accessibility attributes, slot assignment, and initial visibility state.
   *
   * @protected
   */
  $onConnect() {
    this.setAttribute('slot', 'content');
    this.$defaultAttr('role', 'tabpanel');
    this.$ensureId();
    this.tabIndex = -1; // not keyboard-focusable
    this.hidden = true;
  }

  /**
   * Renders the tab panel template.
   * Provides a simple slot for panel content.
   *
   * @protected
   * @returns {TemplateResult} The component's HTML template
   */
  render() {
    return x`<slot></slot>`
  }

  /**
   * Lifecycle method called after the element has been updated.
   * Manages panel visibility and focus state based on open property.
   *
   * @protected
   * @param {Map} changedProperties - The properties that have changed
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'open') {
        let isOpen = this[propName];
        this.hidden = !isOpen;
        this.tabIndex = (isOpen ? 0 : -1);
      }
    });
  }
}

var CSS$4 = ":host,\n:host * {\n  /* css-core:utils/reset.component */\n  border: 0;\n  font: inherit;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  vertical-align: baseline;\n}\n\n:host {\n  display: block;\n}\n\n:host([borderless])::part(head) {\n  padding-inline: 16px;\n}\n@media (min-width: 1200px) {\n  :host([borderless])::part(head) {\n    width: 100%;\n    padding-right: 16px;\n    padding-left: 16px;\n    margin-right: auto;\n    margin-left: auto;\n    max-width: var(--bolt-grid-maxWidth, 1380px);\n    max-width: var(--bolt-grid-maxWidth, 1656px);\n    margin: auto;\n  }\n}\n@media (min-width: 1200px) and (min-width: 576px) {\n  :host([borderless])::part(head) {\n    max-width: var(--bolt-grid-maxWidth, 540px);\n  }\n}\n@media (min-width: 1200px) and (min-width: 768px) {\n  :host([borderless])::part(head) {\n    max-width: var(--bolt-grid-maxWidth, 720px);\n  }\n}\n@media (min-width: 1200px) and (min-width: 992px) {\n  :host([borderless])::part(head) {\n    max-width: var(--bolt-grid-maxWidth, 960px);\n  }\n}\n@media (min-width: 1200px) and (min-width: 1200px) {\n  :host([borderless])::part(head) {\n    max-width: var(--bolt-grid-maxWidth, 1140px);\n  }\n}\n\nbutton {\n  background: none;\n  border-radius: 0;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n#btnScrollRight, #btnScrollLeft {\n  align-items: center;\n  background: none;\n  bottom: 4px;\n  color: var(--bolt-context-link);\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  transition-duration: 150ms;\n  transition-property: opacity, left, right;\n  width: 44px;\n  z-index: 1;\n}\n#btnScrollRight::before, #btnScrollLeft::before {\n  bottom: 0;\n  content: \"\";\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  transition-duration: 350ms;\n  width: 200%;\n  z-index: -1;\n}\n#btnScrollRight > *, #btnScrollLeft > * {\n  opacity: 0.6;\n}\n.isVisible#btnScrollRight, .isVisible#btnScrollLeft {\n  opacity: 1;\n  pointer-events: auto;\n  transition-duration: 150ms;\n}\n.isVisible#btnScrollRight::before, .isVisible#btnScrollLeft::before {\n  transition-duration: 350ms;\n}\n.isVisible#btnScrollRight:hover, .isVisible#btnScrollLeft:hover {\n  background-color: var(--bolt-context-surface);\n}\n.isVisible#btnScrollRight:hover > *, .isVisible#btnScrollLeft:hover > * {\n  opacity: 1;\n}\n\n#btnScrollLeft {\n  left: -44px;\n}\n#btnScrollLeft::before {\n  background-image: linear-gradient(to right, var(--bolt-context-surface) 40%, rgba(0, 0, 0, 0));\n  left: 0;\n}\n#btnScrollLeft.isVisible {\n  left: 0;\n}\n\n#btnScrollRight {\n  right: -44px;\n}\n#btnScrollRight::before {\n  background-image: linear-gradient(to left, var(--bolt-context-surface) 40%, rgba(0, 0, 0, 0));\n  right: 0;\n}\n#btnScrollRight.isVisible {\n  right: 0;\n}\n\n#tablist {\n  scrollbar-width: none;\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  padding: 4px 0;\n  z-index: 1;\n}\n#tablist::-webkit-scrollbar {\n  display: none;\n}\n\n/*\n    1fr\n  +------------+\n  | head       | auto\n  +------------+\n  | body       | 1fr\n  +------------+\n*/\n#tabset {\n  display: grid;\n  grid-template: \"head\" auto \"body\" 1fr/1fr;\n  height: 100%;\n  width: 100%;\n}\n#tabset header {\n  flex-shrink: 0;\n  grid-area: head;\n  margin-bottom: -4px;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n  white-space: nowrap;\n}\n#tabset > div {\n  flex-grow: 1;\n  grid-area: body;\n}\n#tabset > div.borderless {\n  border-top: 1px solid var(--bolt-context-outline);\n  background: var(--tabset-surface);\n}\n\n:host([scroll]) #tabset > div {\n  overflow-x: hidden;\n  overflow-y: auto;\n}";

/**
 * Tests if element is current :target
 *
 * @param {HTMLElement} el
 * @returns {boolean}
 */
function is(el) {
  let target = document.querySelector(':target');
  return (target === el)
}

/**
 * Tests if element contains current :target
 *
 * @param {HTMLElement} el
 * @returns {boolean}
 */
function within(el) {
  let target = el.querySelector(':target');
  return !!target
}

/**
 * Scrolls current :target into view (if present)
 */
function scrollIntoView() {
  let target = document.querySelector(':target');
  if (target) {
    target.scrollIntoView();
  }
}

/**
 * A Tabset contains related groups of screen elements that can be viewed one at a time. The Tabset component consist of three custom elements (and all three elements must be used together):
 * - `<bolt-tabset>`
 * - `<bolt-tablabel>`
 * - `<bolt-tabpanel>`
 *
 * `<bolt-tabset>` is the parent container for tabs and tabpanels.
 *
 * @class BoltTabsetElement
 * @element BoltTabsetElement
 * @extends {BoltElement}
 * @tagname bolt-tabset
 * @since 4.0.0
 *
 * @property {Number} activetab - (Optional) Zero-based index of the currently active tab+panel pair (0 = first tab, 1 = second tab, etc.). May be set either as an HTML attribute or a JavaScript property (both strategies produce the same result). Default is `0`.
 * @property {Boolean} borderless - (Optional) When present, removes left, right, and bottom borders.
 * @property {String} color - (Optional) By default, tabset follows global theme. `contextual` allows tabset to inherit context from a parent container's background class. Static colors are not affected by global or contextual theme (ex: `white`, `ultraLightGray`)
 *
 * @attribute {Boolean} scroll - (Optional) When present, allows panel content to scroll vertically. Use when the tabset height is limited.
 *
 * @slot list - Contains `<bolt-tablabel>` elements that serve as the clickable tab headers
 * @slot content - Contains `<bolt-tabpanel>` elements that hold the tab content
 *
 * @event {CustomEvent} bolt-tab-changed - Emitted when the active tab changes. Detail contains the active tab and tabpanel elements.
 *
 * @see https://bolt.nwie.net/web/components/tabset
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @example
 * <bolt-tabset activetab="0">
 *   <bolt-tablabel>Tab 1</bolt-tablabel>
 *   <bolt-tablabel>Tab 2</bolt-tablabel>
 *   <bolt-tablabel>Tab 3</bolt-tablabel>
 *
 *   <bolt-tabpanel>Content for tab 1</bolt-tabpanel>
 *   <bolt-tabpanel>Content for tab 2</bolt-tabpanel>
 *   <bolt-tabpanel>Content for tab 3</bolt-tabpanel>
 * </bolt-tabset>
 *
 */
class BoltTabsetElement extends BoltElement {
  /**
   * Returns the custom element tag name for registration
   * @readonly
   * @static
   * @returns {String} The element tag name 'bolt-tabset'
   */
  static get is() {
    return 'bolt-tabset'
  }

  /**
   * Returns the CSS styles for the component
   * @readonly
   * @static
   * @returns {CSSResult} The component's CSS styles
   */
  static get styles() {
    return CSS$4
  }

  /**
   * Defines the reactive properties for the component
   * @readonly
   * @static
   * @returns {Object} Property definitions with types and configuration
   */
  static get properties() {
    return {
      activetab: {
        type: Number,
        default: 0, // BoltElement enhancement
      },
      borderless: {type: Boolean, default: false},
      color: {type: String, default: '', reflect: true},
    }
  }

  /**
   * Lifecycle method called when the element is created.
   * Initializes default property values and binds event handler methods.
   *
   * @protected
   */
  $onCreate() {
    this.borderless = false;

    // internal defaults
    this._canScrollLeft = false;
    this._canScrollRight = false;

    this._onHashchange = this._onHashchange.bind(this);
    this._onWindowResize = this._onWindowResize.bind(this);
    this._sync = this._sync.bind(this);
    this._syncWithTarget = this._syncWithTarget.bind(this);
  }

  /**
   * Lifecycle method called when the element is connected to the DOM.
   * Sets up event listeners and performs initial synchronization.
   *
   * @protected
   */
  $onConnect() {
    this.$ensureId();
    this.addEventListener('bolttabclick', this._onTabClick);
    this.addEventListener('bolttabfocus', this._onTabFocus);
    window.addEventListener('hashchange', this._onHashchange);
    window.addEventListener('resize', this._onWindowResize);

    // Defer until next event loop to synchronize
    // (let children upgrade/connect first)
    setTimeout(() => {
      this._sync();
      this._syncWithTarget();
    });
  }

  /**
   * Lifecycle method called when the element is disconnected from the DOM.
   * Cleans up event listeners to prevent memory leaks.
   *
   * @protected
   */
  $onDisconnect() {
    this.removeEventListener('bolttabclick', this._onTabClick);
    this.removeEventListener('bolttabfocus', this._onTabFocus);
    window.removeEventListener('resize', this._onWindowResize);
    window.removeEventListener('hashchange', this._onHashchange);
  }

  /**
   * Lifecycle method called after the element has been updated for the first time.
   * Performs synchronization after initial render completion.
   *
   * @protected
   */
  firstUpdated() {
    setTimeout(() => {
      this._sync();
      this._syncWithTarget();
    });
  }

  /**
   * Lifecycle method called after the element has been updated.
   * Triggers synchronization when the activetab property changes.
   *
   * @protected
   * @param {Map} changedProperties - The properties that have changed
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'activetab') {
        this._sync();
      }
    });
  }

  /**
   * Renders the tabset component template.
   * Creates the complete tabbed interface with scroll buttons, tab list, and content area.
   *
   * @protected
   * @returns {TemplateResult} The component's HTML template
   */
  render() {
    return x`
      <div id="tabset" part="root">
        <header part="head">
          <button
            @click="${this._onScrollLeftClick}"
            aria-hidden="true"
            class="${this._canScrollLeft ? 'isVisible' : ''}"
            id="btnScrollLeft"
            tabindex="-1"
            type="button"
          >
            <bolt-icon fixed name="chevron-left" decorative></bolt-icon>
          </button>

          <div
            @keydown="${this._onTablistKeydown}"
            @scroll="${this._onTablistScroll}"
            id="tablist"
            role="tablist"
          >
            <slot
              @slotchange="${this._onSlotChange}"
              name="list"
            ></slot>
          </div>

          <button
            @click="${this._onScrollRightClick}"
            aria-hidden="true"
            class="${this._canScrollRight ? 'isVisible' : ''}"
            id="btnScrollRight"
            tabindex="-1"
            type="button"
          >
            <bolt-icon fixed name="chevron-right" decorative></bolt-icon>
          </button>
        </header>
        <div part="body" class="${this.borderless ? 'borderless' : ''}">
          <slot
            @slotchange="${this._onSlotChange}"
            name="content"
          ></slot>
        </div>
      </div>
    `
  }

  /* ---------- PROPERTIES ---------- */

  /**
   * Gets the currently active tab index.
   *
   * @returns {Number} The index of the active tab
   */
  get activetab() {
    return this.__activetab
  }
  /**
   * Sets the active tab index with validation.
   *
   * @param {Number|String} val - The tab index to activate (must be numeric)
   * @throws {TypeError} When val is not a number or number-like string
   */
  set activetab(val) {
    if (isNaN(val)) {
      throw new TypeError(`
        BoltTabsetElement#activetab expects a number or number-like string.
        Received ${typeof val}:${val}
      `)
    }
    let oldval = this.__activetab;
    this.__activetab = Number(val);
    this.requestUpdate('activetab', oldval);
  }

  /**
   * All direct `<bolt-tablabel>` children (as authored).
   * @readonly
   * @type {BoltTablabelElement[]}
   */
  get tabs() {
    let results = this.querySelectorAll(':scope > bolt-tablabel');
    return Array.from(results)
  }

  /**
   * All direct `<bolt-tabpanel>` children (as authored).
   * @readonly
   * @type {BoltTabpanelElement[]}
   */
  get tabpanels() {
    let results = this.querySelectorAll(':scope > bolt-tabpanel');
    return Array.from(results)
  }

  /* ---------- PRIVATE PROPERTIES ---------- */

  /**
   * Gets the left scroll button element from the shadow DOM.
   *
   * @private
   * @returns {HTMLButtonElement} The left scroll button element
   */
  get $btnScrollLeft() {
    return this.shadowRoot.querySelector('#btnScrollLeft')
  }

  /**
   * Gets the right scroll button element from the shadow DOM.
   *
   * @private
   * @returns {HTMLButtonElement} The right scroll button element
   */
  get $btnScrollRight() {
    return this.shadowRoot.querySelector('#btnScrollRight')
  }

  /**
   * Gets the tab list container element from the shadow DOM.
   *
   * @private
   * @returns {HTMLElement} The tab list container element
   */
  get $tablist() {
    return this.shadowRoot.querySelector('#tablist')
  }

  /**
   * Gets the computed padding values for the tab list container.
   *
   * @private
   * @returns {Object} Object containing left and right padding values as numbers
   */
  get $tablistPadding() {
    let tablistStyles = getComputedStyle(this.$tablist);

    // style values are strings with units (e.g., "4px")
    // parseFloat() converts it to a number for calculations
    let left = parseFloat(tablistStyles['padding-left']);
    let right = parseFloat(tablistStyles['padding-right']);

    return { left, right }
  }

  /* ---------- PUBLIC METHODS ---------- */
  // ...

  /* ---------- PRIVATE METHODS ---------- */

  /**
   * Recalculate if tablist "arrows" should be visible.
   *
   * @private
   */
  _checkTablistScroll() {
    let tablist = this.$tablist;
    let $scrollLeftMax = tablist.scrollWidth - tablist.offsetWidth;

    let $canScrollLeft = (tablist.scrollLeft > 0);
    if (this._canScrollLeft !== $canScrollLeft) {
      this._canScrollLeft = $canScrollLeft;
      this.requestUpdate();
    }

    let $canScrollRight = (tablist.scrollLeft < $scrollLeftMax);
    if (this._canScrollRight !== $canScrollRight) {
      this._canScrollRight = $canScrollRight;
      this.requestUpdate();
    }
  }


  /** @private */
  _scrollActiveTabIntoView() {
    let tab = this.tabs[this.activetab];
    // there may not be any <bolt-tab> children
    if (tab) {
      this._scrollTabIntoView(tab);
    }
  }

  /**
   * Called when a tab is clicked.  Useful when a partially-visible tab
   * is clicked by the user.
   *
   * @private
   * @param {HTMLElement} tab
   */
  _scrollTabIntoView(tab) {
    let min = 0;
    // multiplier to account for width of gradient in relation to arrow button (see CSS)
    let gradMultiplier = 2; // because... ::before { width: 200%; }
    let gradientWidth = this.$btnScrollLeft.offsetWidth * gradMultiplier;

    let overflow = _getOverflow(tab, this.$tablist, { box: 'content-box' });
    if (overflow.both) {
      // tab does not fit in scroll box
      return
    }

    if (!overflow.any) {
      // tab fits entirely within scroll box, but may be partially concealed
      // behind a scroll arrow (out of scope for MVP)
      return
    }

    // visible (aligns left edges of tab and scroll box)
    let left = tab.offsetLeft - this.offsetLeft;
    // fully visible (account for scroll arrow gradient)
    left -= gradientWidth;
    // account for scroll box padding
    left -= this.$tablistPadding.left;
    // scroll into view
    this._scrollTablistTo({
      left: (left < min ? min : left),
    });
  }

  /**
   * Scroll the tablist by a factor of the visible content.
   *
   * @private
   * @param {Boolean} [reverse] - scroll left, if true
   */
  _scrollTablist(reverse) {
    let tablist = this.$tablist;
    let min = 0;
    let max = tablist.scrollWidth - tablist.offsetWidth;
    // step by 75% of the scrollbox width (always show 25% of previous scroll)
    let step = Math.ceil(tablist.offsetWidth * 0.75);
    let left = tablist.scrollLeft;

    if (reverse) {
      // Scroll Backward/Left
      left -= step;
      this._scrollTablistTo({
        left: (left < min ? min : left),
      });
    } else {
      // Scroll Forward/Right
      left += step;
      this._scrollTablistTo({
        left: (left > max ? max : left),
      });
    }
  }

  /** @private */
  _scrollTablistTo(opts) {
    let tablist = this.$tablist;

    if ('scrollTo' in tablist) {
      tablist.scrollTo({
        behavior: 'smooth',
        ...opts,
      });
    } else {
      if (opts.left !== undefined) {
        tablist.scrollLeft = opts.left;
      }
    }
  }

  /**
   * Handles stepping/cycling through focusable tabs.
   *
   * @private
   * @param {boolean} [reverse=false]
   */
  _stepTabFocus(reverse=false) {
    let idx = this._focusIndex;
    let _max = this.tabs.length - 1;
    let newIdx;

    if (reverse) {
      // step backward
      newIdx = (idx === 0 ? _max : idx - 1);
    } else {
      // step forward
      newIdx = (idx === _max ? 0 : idx + 1);
    }

    if (!isNaN(newIdx)) {
      this._focusIndex = newIdx;
      this.tabs[newIdx].focus();
    }
  }

  /**
   * Synchronize internal and external state.
   * @private
   */
  _sync() {
    this._syncTemplate();
    this._syncChildren();
  }

  /**
   * Synchronize state with child elements in host document.
   * (i.e., sync external states)
   * @private
   */
  _syncChildren() {
    if (!this.isConnected) {
      return
    }

    // - pair up tabs and tabpanels (if not already)
    // - select active tab
    // - open active tabpanel
    let maxLength = Math.max(this.tabs.length, this.tabpanels.length);
    for (let idx = 0; idx < maxLength; idx++) {
      let isSelected = (idx === this.activetab);
      let tab = this.tabs[idx];
      let tabpanel = this.tabpanels[idx];

      // check if we have fewer tabs than panels
      if (tab) {
        tab.selected = isSelected;

        // we have a matching panel
        if (tabpanel) {
          tabpanel.$defaultAttr('aria-labelledby', tab.id);
        }
      }

      // check if we have fewer panels than tabs
      if (tabpanel) {
        tabpanel.open = isSelected;

        // we have a matching tab
        if (tab) {
          tab.$defaultAttr('aria-controls', tabpanel.id);
        }
      }
    }
  }

  /**
   * Synchronize internal state (primarily scroll state).
   * @private
   */
  _syncTemplate() {
    this._checkTablistScroll();
    this._scrollActiveTabIntoView();
  }

  /**
   * Synchronize active tab with location hash (i.e., `:target`)
   *
   * @private
   */
  _syncWithTarget() {
    if (!within(this)) {
      return
    }

    let _idxWithTarget = this.tabpanels.findIndex(tabpanel => {
      return (is(tabpanel) || within(tabpanel))
    });

    if (_idxWithTarget >= 0) {
      // target is actionable
      this.activetab = _idxWithTarget;
      setTimeout(() => {
        scrollIntoView();
      });
    }
  }

  /* ---------- EVENT HANDLERS (PRIVATE) ---------- */

  /**
   * @private
   * @param {Event} evt
   */
  _onHashchange(evt) {
    this._syncWithTarget();
  }

  /**
   * @private
   * @param {Event} evt
   */
  _onScrollLeftClick(evt) {
    this._scrollTablist(true);
  }

  /**
   * @private
   * @param {Event} evt
   */
  _onScrollRightClick(evt) {
    this._scrollTablist();
  }

  /**
   * @private
   * @param {Event} evt
   */
  _onSlotChange(evt) {
    this._sync();
  }

  /**
   * Event handler for internal, bubbling "bolttabclick" event.
   *
   * @private
   * @fires 'bolt-tab-changed'
   * @param {Event} evt
   */
  async _onTabClick(evt) {
    evt.stopPropagation();
    let idx = this.tabs.indexOf(evt.target);

    if (idx !== this.activetab) {
      this.activetab = idx;
      await this.updateComplete;
      this._scrollTabIntoView(evt.target);

      this.$emit('bolt-tab-changed', {
        detail: {
          tab: this.tabs[idx],
          tabpanel: this.tabpanels[idx],
        },
      });
    }
  }

  /**
   * Event handler for internal, bubbling "bolttabfocus" event.
   *
   * @private
   * @param {Event} evt
   */
  _onTabFocus(evt) {
    evt.stopPropagation();
    let tab = evt.target;
    this._scrollTabIntoView(tab);
    // memoize for logic enabling ArrowLeft/ArrowRight to change tab focus
    this._focusIndex = this.tabs.indexOf(tab);
  }

  /**
   * Handles accessible keyboard interaction
   * (i.e., arrow keys to cycle focus to prev/next tab)
   *
   * @private
   * @see https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-20
   * @param {Event} evt
   */
  _onTablistKeydown(evt) {
    switch (evt.key) {
      case 'Home': // focus 1st tab
        evt.preventDefault(); // don't scroll
        let tab = this.tabs[0];
        if (tab) {
          tab.focus();
        }
        break

      case 'End': // focus last tab
        let len = this.tabs.length;
        if (len > 0) {
          evt.preventDefault(); // don't scroll
          let tab = this.tabs[len - 1];
          if (tab) {
            tab.focus();
          }
        }
        break

      case 'ArrowLeft':
        evt.preventDefault(); // don't scroll
        this._stepTabFocus(true);
        break

      case 'ArrowRight':
        evt.preventDefault(); // don't scroll
        this._stepTabFocus();
        break
    }
  }

  /**
   * @private
   * @param {Event} evt
   */
  _onTablistScroll(evt) {
    this._checkTablistScroll();
  }

  /**
   * @private
   * @param {Event} evt
   */
  _onWindowResize(evt) {
    this._checkTablistScroll();
  }
}

// TODO: migrate to utility module so that it can be unit tested
/**
 * Calculate if given tab overflows the tablist scroll box
 *
 * @param {HTMLElement} parent
 * @param {HTMLElement} child
 * @param {Object] [opts={}]
 * @param {string} [opts.box='border-box'] - box model of parent to check overflow against
 * @returns {Object}
 * Results in an object containing predicate properties, indicating
 * whether the tab overflows a specific edge of the tablist scroll box.
 */
function _getOverflow(child, parent, opts={}) {
  let { box = 'border-box' } = opts;
  let _parent = parent.getBoundingClientRect();
  let _child = child.getBoundingClientRect();

  // default (i.e., "border-box")
  let _hMin = _parent.left;
  let _hMax = _parent.right;

  if (box === 'content-box') {
    let parentStyles = getComputedStyle(parent);
    // style values are strings with units (e.g., "4px")
    // parseFloat() converts it to a number for calculations
    let padLeft = parseFloat(parentStyles['padding-left']);
    let padRight = parseFloat(parentStyles['padding-right']);

    _hMin = _parent.left + padLeft;
    _hMax = _parent.right - padRight;
  }

  let left = _child.left < _hMin;
  let right = _child.right > _hMax;
  let both = left && right;
  let any = left || right;

  return { left, right, any, both }
}

/**
 * This module exports the tabset components and their initialization function.
 * The tabset components consist of:
 * - `<bolt-tablabel>`: Individual tab label for navigation
 * - `<bolt-tabpanel>`: Content panel associated with each tab
 * - `<bolt-tabset>`: Container that manages the tab navigation system
 *
 * @module bolt-tabset
 * @since 4.0.0
 *
 * @see {@link ./elements/bolt-tablabel|BoltTablabelElement}
 * @see {@link ./elements/bolt-tabpanel|BoltTabpanelElement}
 * @see {@link ./elements/bolt-tabset|BoltTabsetElement}
 */


/**
 * Initializes the tabset components by registering them as custom elements
 *
 * This function:
 * 1. Initializes dependencies (Icon component)
 * 2. Registers the BoltTablabelElement
 * 3. Registers the BoltTabpanelElement
 * 4. Registers the BoltTabsetElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$4() {
  // Upstream
  await initialize$y();

  // Local
  BoltTablabelElement.$define();
  BoltTabpanelElement.$define();
  BoltTabsetElement.$define();
}

var index$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltTablabelElement: BoltTablabelElement,
  BoltTabpanelElement: BoltTabpanelElement,
  BoltTabsetElement: BoltTabsetElement,
  initialize: initialize$4
});

var CSS$3 = ":host {\n  display: inline-block;\n}\n\n#root {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-size: 11px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 1.45;\n  display: inline-block;\n  font-weight: 500;\n  padding: 0 4px;\n  background-color: #d7d7d7;\n  color: #171717;\n}\n#root bolt-icon {\n  pointer-events: none;\n}\n#root.color--charcoal {\n  background-color: #171717;\n  color: white;\n}\n#root.color--darkBlue {\n  background-color: #141d4d;\n  color: white;\n}\n#root.color--darkGray {\n  background-color: #707070;\n  color: white;\n}\n#root.color--darkSeaBlue {\n  background-color: #005670;\n  color: white;\n}\n#root.color--deepPurple {\n  background-color: #8d0e5b;\n  color: white;\n}\n#root.color--lavender {\n  background-color: #d9aae5;\n  color: #171717;\n}\n#root.color--lemonYellow {\n  background-color: #f8e281;\n  color: #171717;\n}\n#root.color--mediumBlue {\n  background-color: #1a75de;\n  color: white;\n}\n#root.color--paleGray {\n  background-color: #d7d7d7;\n  color: #171717;\n}\n#root.color--seaBlue {\n  background-color: #6fb1be;\n  color: #171717;\n}\n#root.color--sunburstOrange {\n  background-color: #ff9b1a;\n  color: #171717;\n}\n#root.color--white {\n  background-color: white;\n  color: #171717;\n}\n#root.status--error {\n  background-color: var(--bolt-theme-error);\n  color: var(--bolt-theme-onError);\n}\n#root.status--info {\n  background-color: var(--bolt-theme-info);\n  color: var(--bolt-theme-onInfo);\n}\n#root.status--success {\n  background-color: var(--bolt-theme-success);\n  color: var(--bolt-theme-onSuccess);\n}\n#root.status--warning {\n  background-color: var(--bolt-theme-warning);\n  color: var(--bolt-theme-onWarning);\n}";

/**
 * Icon mappings for different tag status types.
 * Maps status names to their corresponding icon identifiers for visual indication.
 *
 * @constant {Object} STATUS_ICONS
 */
const STATUS_ICONS = {
  error: 'exclamation-circle-filled',
  info: 'info-square-filled',
  question: 'question-circle-filled',
  success: 'checkmark-bold-circle-filled',
  warning: 'exclamation-triangle-filled',
};

/**
 * Tag is used for displaying concise, contextual information such as labels, categories and statuses within your application.
 *
 * @class BoltTagElement
 * @element BoltTagElement
 * @extends {BoltElement}
 * @tagname bolt-tag
 * @since 6.2.0
 *
 * @property {String} label - (Required) The label text for the tag.
 * @property {String} status - (Optional) The `status` and `color` property should not be used together. The `status` property overrides the `color` property. Possible values: [`error`, `info`, `success`, `warning`]
 * @property {String} color - Defaults to `paleGray`. For a full list, refer to the {@link https://bolt.nwie.net/web/components/tag/|documentation}.
 *
 * @see https://bolt.nwie.net/web/components/tag
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @example
 * <!-- Tag with status -->
 * <bolt-tag label="Error" status="error"></bolt-tag>
 *
 * @example
 * <!-- Tag with color -->
 * <bolt-tag label="deepPurple" color="deepPurple"></bolt-tag>
 *
 */
class BoltTagElement extends BoltElement {
  /**
   * Returns the custom element tag name for registration
   * @readonly
   * @static
   * @returns {String} The element tag name 'bolt-tag'
   */
  static is = 'bolt-tag'

  /**
   * Returns the CSS styles for the component
   * @readonly
   * @static
   * @returns {CSSResult} The component's CSS styles
   */
  static styles = CSS$3

  /**
   * Defines the reactive properties for the component
   * @readonly
   * @static
   * @returns {Object} Property definitions with types and configuration
   */
  static properties = {
    color: { type: String, default: '' },
    label: { type: String, default: '' },
    status: { type: String, default: '' },
  }

  /**
   * Renders the tag component template.
   * Creates the tag structure with optional icon and label text.
   *
   * @protected
   * @returns {TemplateResult} The component's HTML template
   */
  render() {
    return x`
      <span
        id="root"
        class="${this._attrClass}"
      >
        ${ this._hasIcon ? x`
          <bolt-icon
            decorative
            fluid
            name="${this._iconName}"
            size="sm"
          ></bolt-icon>
        ` : ''}
        <span>${this.label}</span>
      </span>
    `
  }

  /**
   * Computes class names to apply to the root element.
   * Combines color and status modifiers into CSS class names.
   *
   * @private
   * @returns {String} Space-separated list of CSS class names
   */
  get _attrClass() {
    let result = [];

    if (this.color) {
      result.push(`color--${this.color}`);
    }
    if (this.status) {
      result.push(`status--${this.status}`);
    }

    return result.join(' ')
  }

  /**
   * Determines if an icon should be rendered based on status.
   * Returns true if the current status has a corresponding icon in STATUS_ICONS.
   *
   * @private
   * @returns {Boolean} True if an icon should be displayed
   */
  get _hasIcon() {
    return (this.status in STATUS_ICONS)
  }

  /**
   * Gets the icon name for the current status.
   * Returns the corresponding icon name from STATUS_ICONS or empty string if no status.
   *
   * @private
   * @returns {String} The icon name to use or empty string
   */
  get _iconName() {
    return STATUS_ICONS[this.status] || '';
  }
}

/**
 * This module exports the tag component and its initialization function.
 * Tag is used for displaying concise, contextual information such as labels, categories and statuses within your application.
 *
 * @module bolt-tag
 * @since 6.2.0
 *
 * @see {@link ./elements/bolt-tag|BoltTagElement}
 */


/**
 * Initializes the tag component by registering it as a custom element
 *
 * This function:
 * 1. Initializes dependencies (Icon component)
 * 2. Registers the BoltTagElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$3() {
  // Upstream
  await initialize$y();

  // Local
  BoltTagElement.$define();
}

var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltTagElement: BoltTagElement,
  initialize: initialize$3
});

var CSS$2 = ".bolt-annotation.bolt-optional {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  letter-spacing: 0px;\n  font-size: clamp(11px, 11px + 1px * (var(--bolt-typography-basis) - 360) / 840, 12px);\n  line-height: clamp(1.45, 1.45 + -0.12 * (var(--bolt-typography-basis) - 360) / 840, 1.33);\n  font-style: italic;\n  font-weight: 400;\n}\n\n:host,\n:host * {\n  /* css-core:utils/reset.component */\n  border: 0;\n  font: inherit;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  vertical-align: baseline;\n}\n\n:host {\n  display: block;\n}\n:host bolt-field-error {\n  margin-top: 4px;\n}\n\n:host([disabled]) {\n  opacity: 0.5;\n}\n\n#label-wrapper {\n  margin-bottom: 4px;\n}\n\n.visually-hidden {\n  border: 0 !important;\n  outline: none !important;\n  box-shadow: none !important;\n  width: 1px !important;\n  height: 1px !important;\n  clip: rect(1px, 1px, 1px, 1px); /* old & current Browsers */\n  clip-path: inset(50%); /* browsers in the future */\n  white-space: nowrap;\n  margin: -1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  z-index: -99999 !important;\n  color: transparent;\n  background-color: transparent;\n  text-shadow: none;\n}\n\n.bolt-textarea-wc {\n  margin-bottom: 20px;\n}\n.bolt-textarea-wc--input {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(14px, 14px + 2px * (var(--bolt-typography-basis) - 360) / 840, 16px);\n  line-height: clamp(1.43, 1.43 + 0.07 * (var(--bolt-typography-basis) - 360) / 840, 1.5);\n  background: var(--bolt-theme-inputSurface);\n  border-color: var(--bolt-theme-outline);\n  border-style: solid;\n  border-radius: 4px;\n  border-width: 1px;\n  box-sizing: border-box;\n  color: var(--bolt-theme-onSurface);\n  display: block;\n  padding: calc(var(--bolt-space-sm) - 1px) var(--bolt-space-sm);\n  text-decoration: none;\n  transition: background 350ms, border 350ms, color 350ms, box-shadow 350ms;\n  max-width: 100%;\n  resize: vertical;\n}\n.bolt-textarea-wc--input__width-full {\n  width: 100%;\n}\n.bolt-textarea-wc--input::placeholder {\n  color: var(--bolt-theme-onSurfaceVariant);\n  font-style: italic;\n}\n.bolt-textarea-wc--input__hover, .bolt-textarea-wc--input:hover:enabled:not(.bolt-textarea-wc--input__disabled) {\n  background: var(--bolt-theme-inputSurfaceHigh);\n}\n.bolt-textarea-wc--input__disabled:hover, .bolt-textarea-wc--input:disabled:hover {\n  cursor: not-allowed;\n}\n.bolt-textarea-wc--input__focus, .bolt-textarea-wc--input__focus:hover, .bolt-textarea-wc--input:focus:enabled, .bolt-textarea-wc--input:focus:enabled:hover {\n  /* css-core:context.focus */\n  box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n  outline: none;\n  text-decoration-color: transparent;\n  background: var(--bolt-theme-inputSurfaceHigh);\n}\n.bolt-textarea-wc--input__focus:not(.bolt-textarea-wc--input__has-error), .bolt-textarea-wc--input__focus:hover:not(.bolt-textarea-wc--input__has-error), .bolt-textarea-wc--input:focus:enabled:not(.bolt-textarea-wc--input__has-error), .bolt-textarea-wc--input:focus:enabled:hover:not(.bolt-textarea-wc--input__has-error) {\n  border-color: var(--bolt-theme-focus);\n}\n.bolt-textarea-wc--input__has-error {\n  border-color: var(--bolt-theme-error);\n  border-width: 2px;\n}\n.bolt-textarea-wc--input__has-error:focus:enabled, .bolt-textarea-wc--input__has-error:focus:enabled:hover {\n  /* css-core:context.focus */\n  box-shadow: 0 0 0 1px var(--bolt-context-surface), 0 0 0 4px var(--bolt-context-focus);\n  outline: none;\n  text-decoration-color: transparent;\n}\n.bolt-textarea-wc--label {\n  color: var(--bolt-context-onSurface);\n  font-weight: 500;\n}\n.bolt-textarea-wc--instructionaltext {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  letter-spacing: 0px;\n  font-size: clamp(11px, 11px + 1px * (var(--bolt-typography-basis) - 360) / 840, 12px);\n  line-height: clamp(1.45, 1.45 + -0.12 * (var(--bolt-typography-basis) - 360) / 840, 1.33);\n  color: var(--bolt-context-onSurface);\n  margin-top: 4px;\n}";

/**
 * Default data-test attribute values for the textarea component.
 * Used to provide consistent test selectors across the component.
 *
 * @constant {Object} DATATEST_DEFAULTS
 * @property {String} textarea - Default data-test value for the textarea element
 */
const DATATEST_DEFAULTS = {
  textarea: 'textarea',
};

/**
 * Text areas allow users to enter multiple lines of alphanumeric data.
 *
 * The `<bolt-textarea>` custom element creates a text area with a label and optional error text and character count:
 *
 * @class BoltTextareaElement
 * @element BoltTextareaElement
 * @extends {BoltElement}
 * @tagname bolt-textarea
 * @since 3.0.0
 *
 * @property {String} label - (Conditionally Required) The label text for the input. Required if `arialabel` or `arialabelledby` are NOT present.
 * @property {String} arialabel - (Conditionally Required) Sets the aria-label attribute of the underlying `<textarea>` element. Required if `label` or `arialabelledby` are NOT present.
 * @property {String} arialabelledby - (Conditionally Required) Sets the aria-labelledby attribute of the underlying `<textarea>` element. Required if `label` or `arialabel` are NOT present.
 * @property {String} value - The value for the input.
 * @property {Boolean} required - (Optional) If present, the field is required. Fields that are not required will show "(optional)".
 * @property {String} optionaltext - (Optional) Used to remove the "(optional)" text from non-required fields. Default is `show`. Possible values: [`show`, `hide`]
 * @property {Number} rows - (Optional) The number of rows on the `textarea`. Defaults to `4`.
 * @property {Number} cols - (Optional) Specifies the width of the `textarea` in terms of average character widths. If not present, it will span the full width of its container.
 * @property {Boolean} disabled - (Optional) If present, disables rendered interactive elements.
 * @property {String} error - (Optional) The error message to display after the input. Should not be used when component is `disabled`. For slotted field error see {@link https://bolt.nwie.net/web/components/field-error/#textarea-with-error-slot|textarea error slot}.
 * @property {Number} maxlength - (Optional)  The maximum number of characters allowed in the text area. Defaults to `250`.
 * @property {Boolean} showcount - (Optional) If present, the remaining character count (based on `maxlength`) will be displayed.
 * @property {Boolean} invalid - (Optional) If present, the field appears invalid.
 * @property {String} datatesttextarea - (Optional) Property to configure the `data-test` value on the underlying `<textarea>` element. Default is `textarea`.
 * @property {Boolean} spellcheck - (Optional) Defaults to `false`. Passed to native `<textarea>` element.
 * @property {String} autocomplete - (Optional) Defaults to `off`. Passed to native `<textarea>` element. Please see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete|possible values}.
 * @property {String} autocorrect - (Optional) Defaults to `on`. Passed to native `<textarea>` element. Possible values: [`on`, `off`]
 * @property {String} autocapitalize - (Optional) Defaults to `on`. Passed to native `<textarea>` element. Possible values: [`on`, `off`]
 * @property {String} inputmode - (Optional) Please see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode|standard behavior}. Passed to native `<textarea>` element.
 *
 * @slot help - Contains a `<bolt-contextual-help>` element for additional guidance
 * @slot error - Contains a `<bolt-field-error>` element for custom error messaging
 *
 * @event {Event} input - Emitted when the textarea value changes. The component's value property reflects the current text.
 * @event {Event} change - Emitted when the textarea loses focus after the value has changed.
 *
 * @see https://bolt.nwie.net/web/components/textarea
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @example
 * <bolt-textarea label="Comments" name="comments" rows="5"></bolt-textarea>
 *
 * @example
 * <!-- Textarea with character count and validation -->
 * <bolt-textarea
 *   label="Feedback"
 *   maxlength="500"
 *   showcount
 *   required
 *   name="feedback">
 * </bolt-textarea>
 *
 */
class BoltTextareaElement extends BoltElement {
    /**
     * Returns the custom element tag name for registration
     * @readonly
     * @static
     * @returns {String} The element tag name 'bolt-textarea'
     */
    static get is() {
      return 'bolt-textarea';
    }

    /**
     * Defines the reactive properties for the component
     * @readonly
     * @static
     * @returns {Object} Property definitions with types and configuration
     */
    static get properties() {
        return {
            autocapitalize: { type: String },
            autocomplete: { type: String },
            autocorrect: { type: String },
            datatesttextarea: { type: String, default: DATATEST_DEFAULTS.textarea },
            disabled: { type : Boolean, reflect: true },
            error: { type: String },
            inputmode: { type: String },
            label: { type: String },
            maxlength: { type: Number },
            name: { type: String },
            suggestion: { type: String },
            required: { type: Boolean },
            optionaltext: { type: String },
            rows: { type: Number },
            cols: { type: Number },
            showcount: { type: Boolean },
            size: { type: Number },
            spellcheck: { type: Boolean },
            state: { type: String },
            value: { type: String },
            arialabelledby: { type: String },
            arialabel: { type: String },
            invalid: { type: Boolean },
        }
    }

    /**
     * Creates an instance of BoltTextareaElement.
     * Initializes default property values and generates unique IDs for accessibility.
     *
     * @constructor
     */
    constructor() {
      super();

      this.autocapitalize = 'on';
      this.autocomplete = 'off';
      this.autocorrect = 'on';
      this.disabled = false;
      this.error = '';
      this.inputmode = "";
      this.label = '';
      this.maxlength = 250;
      this.name = '';
      this.suggestion = '';
      this.required = false;
      this.optionaltext = 'show';
      this.rows = 4;
      this.cols = '';
      this.showcount = false;
      this.spellcheck = true;
      this.state = '';
      this.value = '';
      this.hiddenlabel = false;
      this.invalid = false;

      this.arialabelledby = '';
      this._labelledbyText = '';
      this.arialabel = '';

      /** @private {String} Randomly generated ID for textfield*/
      this.generatedId = this.generateId();
      /** @private {String} Randomly generated ID for error (uses generatedId) */
      this.errorId = this.generateId('error');
      /** @private {String} Randomly generated ID for label (uses generatedId) */
      this.labelId = this.generateId('label');
      /** @private {String} Randomly generated ID for instructionaltext (uses generatedId) */
      this.instructionaltextId = this.generateId('instructionaltext');
    }

    /**
     * Lifecycle method called after the element has been updated.
     * Updates disabled state of help slot elements when disabled property changes.
     *
     * @protected
     * @param {Map} changedProperties - The properties that have changed
     */
    updated(changedProperties) {
      if (changedProperties.has('disabled')) {
        if (this.$helpSlot) {
          for (const $node of this.$helpSlot.assignedNodes()) {
            $node.disabledByContext = !!this.disabled;
          }
        }
      }
    }

    /**
     * Generates a unique ID for the textarea element or its sub-components.
     *
     * @private
     * @param {String} [type] - Optional type suffix for the ID
     * @returns {String} The generated unique ID
     */
    generateId(type) {
        return 'bolt-textarea-wc--' + (type ? (type + '--') : '') + Math.floor(Math.random() * 10000000);
    }

    /**
     * Returns the CSS styles for the component
     * @readonly
     * @static
     * @returns {CSSResult} The component's CSS styles
     */
    static get styles() {
      return CSS$2;
    }

    /**
     * Lifecycle method called when the element is connected to the DOM.
     * Sets up focusable attributes for keyboard navigation.
     *
     * @protected
     */
    $onConnect() {
      this.setAttribute('bolt-focusable', '');
    }

    /**
     * Synchronizes the component's value with the native textarea element's current value.
     * Updates the component's value property to match the native element.
     *
     * @private
     */
    setValueToInputValue(){
        let $input = this.shadowRoot.querySelector('.bolt-textarea-wc--input');
        if ($input) {
            this.value = $input.value;
        }
    }

    /**
     * Handles input events from the native textarea element.
     * Synchronizes the component value and re-dispatches the event.
     *
     * @private
     * @param {Event} e - The input event from the textarea element
     */
    handleInput(e){
      this.setValueToInputValue();

      e.stopPropagation();

      let relayedEvent = new Event(e.type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
      });
      this.dispatchEvent(relayedEvent);
    }

    /**
     * Handles change events from the native textarea element.
     * Re-dispatches the event to maintain event propagation.
     *
     * @private
     * @param {Event} e - The change event from the textarea element
     */
    handleChange(e){
      e.stopPropagation();

      let relayedEvent = new Event(e.type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
      });
      this.dispatchEvent(relayedEvent);
    }

    /**
     * Renders the textarea component template.
     * Creates the complete textarea interface including label, native textarea element, character count, and error handling.
     *
     * @protected
     * @returns {TemplateResult} The component's HTML template
     */
    render() {
      let determinedState = this.disabled ? 'disabled' : this.state;
      let determinedDisabled = (this.state === 'disabled') || this.disabled;

      let arrDescribedBy = [];
      arrDescribedBy.push(this.errorId);
      arrDescribedBy.push((this.showcount == true) ? this.instructionaltextId : '');
      let describedBy = arrDescribedBy.join(" ").trim();
      let attrArialabelledby = `labelledby-${this.generatedId}`;

      return x`
        ${this.label ?
          x`
            <div id="label-wrapper">
              <label for="${this.generatedId}"
                class="bolt-textarea-wc--label
                  bolt-textarea-wc--label__${determinedState}
                  ${this.hiddenlabel ? 'bolt-textarea-wc--label__hidden' : ''}
                "
                id="${this.labelId}"
              >
                ${this.label}
                ${!(this.required) && this.label.length > 0 && this.optionaltext == 'show'
                  ? x`<span class="bolt-annotation bolt-optional"> (optional)</span>`
                  : ''
                }
                ${ this._hasHelpText
                  ? x`
                    <span class="visually-hidden">
                      has tooltip
                    </span>
                  `
                  : x``
                }
              </label>
              <slot name="help" @slotchange="${this._onHelpSlotChange}"></slot>
            </div>
          `
          : ''
        }
        <textarea
          class="
            bolt-textarea-wc--input
            bolt-textarea-wc--input__${determinedState}
            ${this._isInvalid ? 'bolt-textarea-wc--input__has-error' : ''}
            ${this.cols ? '' : 'bolt-textarea-wc--input__width-full' }
          "
          data-test="${this.datatesttextarea || DATATEST_DEFAULTS.textarea}"
          id="${this.generatedId}"
          name="${this.name}"
          placeholder="${this.suggestion}"
          maxlength="${this.maxlength}"
          rows="${this.rows}"
          cols="${this.cols}"

          inputmode="${l(this.inputmode || null)}"
          autocapitalize="${this.autocapitalize}"
          autocomplete="${this.autocomplete}"
          autocorrect="${this.autocorrect}"
          spellcheck="${this.spellcheck}"
          ?required="${this.required}"
          ?disabled="${determinedDisabled}"
          aria-disabled="${determinedDisabled ? 'true' : 'false'}"
          aria-describedby="${l(describedBy || null)}"
          aria-invalid="${this._isInvalid}"
          aria-labelledby="${l(this._labelledbyText ? attrArialabelledby : undefined)}"
          aria-label="${l(this.arialabel || null)}"

          @input="${this.handleInput}"
          @change="${this.handleChange}"
        >${this.value}</textarea>
        ${ this.showcount
          ? x`
            <div
              class="bolt-textarea-wc--instructionaltext"
              id="${this.instructionaltextId}"
              aria-live="polite"
              aria-atomic="true"
            >
              Characters remaining: ${this.maxlength - this.value.length}
            </div>
          `
          : ''
        }
        <slot name="error" @slotchange="${this._onErrorSlotChange}" id="${this.errorId}">
           ${ this.error
            ? x`
              <bolt-field-error>
                ${this.error}
              </bolt-field-error>
            ` : ''
           }
        </slot>
        <div hidden id="${attrArialabelledby}">${this._labelledbyText}</div>
      `;
    }

    /**
     * Lifecycle method called before the element is updated.
     * Processes property changes, particularly for aria-labelledby updates.
     *
     * @protected
     * @param {Map} changedProperties - The properties that have changed
     */
    update(changedProperties) {
      changedProperties.forEach( (oldValue, propName) => {
        let value = this[propName];

        if (propName === 'arialabelledby') {
          this._labelledbyText = value ? this.$lookupInnerTexts(value) : '';
        }
      });
      super.update(changedProperties);
    }

    /**
     * Determines whether the component should update and synchronizes native textarea value.
     * Updates the native textarea's value when the component's value property changes.
     *
     * @protected
     * @param {Map} changedProperties - The properties that have changed
     * @returns {Boolean} Always returns true to allow updates
     */
    shouldUpdate(changedProperties){
        changedProperties.forEach((oldValue, propName) => {
            if(propName === 'value'){
                let $input = this.shadowRoot.querySelector('.bolt-textarea-wc--input');
                if($input) $input.value = this.value;
            }
        });
        return true;
    }

    /**
     * Attempts to forward focus to the native textarea element.
     * Safely handles cases where the shadow DOM may not be fully initialized.
     *
     * @public
     */
    focus() {
      /*
       * There's no guarantee that the shadowRoot exists or been populated
       * when this method is called, so we need to make sure we don't
       * attempt to focus a nonexistent element.
       */
      const textarea = this.shadowRoot?.querySelector('.bolt-textarea-wc--input');
      textarea?.focus();
    }

    /**
     * Handles slot change events from the help slot.
     * Updates the internal help text state and triggers a re-render for accessibility.
     *
     * @private
     * @param {Event} evt - The slotchange event
     */
    _onHelpSlotChange(evt) {
      this._hasHelpText = !!evt.target.assignedNodes().length;
      this.requestUpdate();
    }


    /**
     * Determines if the textarea should appear invalid.
     * Considers the invalid property, error messages, and slotted error elements.
     *
     * @private
     * @returns {Boolean} True if the element should appear invalid
     */
    get _isInvalid() {
        return Boolean(this.invalid || this.error || this.querySelector('[slot="error"]'))
    }

    /**
     * Gets the help slot element from the shadow DOM.
     * May return null if the element does not render a label.
     *
     * @private
     * @returns {HTMLSlotElement|null} The help slot element or null if not found
     */
    get $helpSlot() {
      return this.shadowRoot.querySelector('slot[name="help"]')
    }
}

/**
 * This module exports the textarea component and its initialization function.
 * The textarea component provides a multi-line text input field for collecting
 * longer text content from users, with built-in validation and error handling support.
 *
 * @module bolt-textarea
 * @since 3.0.0
 *
 * @see {@link ./elements/bolt-textarea|BoltTextareaElement}
 */


/**
 * Initializes the textarea component by registering it as a custom element
 *
 * This function:
 * 1. Initializes dependencies (FieldError component)
 * 2. Registers the BoltTextareaElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$2() {
  // Upstream
  await initialize$w();

  // Local
  BoltTextareaElement.$define();
}

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltTextareaElement: BoltTextareaElement,
  initialize: initialize$2
});

var CSS$1 = ":host,\n:host * {\n  /* css-core:utils/reset.component */\n  border: 0;\n  font: inherit;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  vertical-align: baseline;\n}\n\n:host {\n  flex: var(--bolt-tile-flex);\n  max-width: var(--bolt-tile-max-width);\n}\n\n.bolt-tile-wc {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  border: 1px solid var(--bolt-theme-outline);\n  border-radius: 4px;\n  height: 100%;\n  background: var(--bolt-theme-surface);\n  transition: background-color 350ms;\n}\n.bolt-tile-wc:hover, .bolt-tile-wc:focus {\n  background: var(--bolt-theme-inputSurfaceHigh);\n}\n.bolt-tile-wc:hover .bolt-tile-wc--caption-bg, .bolt-tile-wc:focus .bolt-tile-wc--caption-bg {\n  background-color: rgb(4.6, 61.4, 152.6);\n}\n.bolt-tile-wc:hover .bolt-tile-wc--img--zoom-true, .bolt-tile-wc:focus .bolt-tile-wc--img--zoom-true {\n  transform: scale(1.1) rotate(0.1deg);\n}\n@media (prefers-reduced-motion: reduce) {\n  .bolt-tile-wc:hover .bolt-tile-wc--img--zoom-true, .bolt-tile-wc:focus .bolt-tile-wc--img--zoom-true {\n    transform: none;\n  }\n}\n.bolt-tile-wc--img-container {\n  overflow: hidden;\n}\n.bolt-tile-wc--img-container-fill {\n  flex-grow: 1;\n}\n.bolt-tile-wc--img-container-fill .bolt-tile-wc--img {\n  padding-bottom: 0;\n}\n.bolt-tile-wc--img {\n  height: 100%;\n  min-height: 200px;\n  padding-bottom: 60%;\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  position: relative;\n  transform: scale(1);\n  transition: transform 650ms ease-out;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n}\n.bolt-tile-wc--body {\n  /* css-core:context.reset */\n  --bolt-context-surface: var(--bolt-theme-surface);\n  --bolt-context-onSurface: var(--bolt-theme-onSurface);\n  --bolt-context-onSurfaceVariant: var(--bolt-theme-onSurfaceVariant);\n  --bolt-context-outline: var(--bolt-theme-outline);\n  --bolt-context-outlineVariant: var(--bolt-theme-outlineVariant);\n  --bolt-context-focus: var(--bolt-theme-focus);\n  --bolt-context-link: var(--bolt-theme-link);\n  --bolt-context-accent: var(--bolt-theme-accent);\n  --bolt-context-accentHigh: var(--bolt-theme-accentHigh);\n  --bolt-context-accentHighest: var(--bolt-theme-accentHighest);\n  --bolt-context-onAccent: var(--bolt-theme-onAccent);\n  display: flex;\n  margin: var(--bolt-space-md);\n  color: var(--bolt-theme-onSurface);\n}\n.bolt-tile-wc--main {\n  flex-grow: 1;\n}\n.bolt-tile-wc--tile-subheading {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  letter-spacing: 0px;\n  font-size: clamp(10px, 10px + 1px * (var(--bolt-typography-basis) - 360) / 840, 11px);\n  line-height: clamp(1.6, 1.6 + -0.15 * (var(--bolt-typography-basis) - 360) / 840, 1.45);\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n.bolt-tile-wc--title-bar {\n  align-items: center;\n  margin-bottom: 4px;\n}\n.bolt-tile-wc--title-with-subheading {\n  align-items: flex-start;\n}\n.bolt-tile-wc--icon {\n  margin-right: 12px;\n  align-self: baseline;\n  max-width: 48px;\n  max-height: 48px;\n  flex-shrink: 0;\n}\n.bolt-tile-wc--thumbnail {\n  margin-right: 12px;\n  align-self: baseline;\n  max-width: 64px;\n  flex-shrink: 0;\n}\n.bolt-tile-wc--label {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(16px, 16px + 2px * (var(--bolt-typography-basis) - 360) / 840, 18px);\n  line-height: clamp(1.5, 1.5 + 0.06 * (var(--bolt-typography-basis) - 360) / 840, 1.56);\n  color: var(--bolt-theme-link);\n  display: flex;\n  flex-grow: 1;\n  justify-content: space-between;\n}\n.bolt-tile-wc--label bolt-icon {\n  height: clamp(16px, 16px + 8px * (var(--bolt-viewport-width) - 360) / 840, 24px);\n  width: clamp(16px, 16px + 8px * (var(--bolt-viewport-width) - 360) / 840, 24px);\n  color: var(--bolt-theme-link);\n  margin-left: 8px;\n  flex-shrink: 0;\n}\n.bolt-tile-wc--caption {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.bolt-tile-wc--caption-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: #0047b9;\n}\n.bolt-tile-wc--caption-text {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(16px, 16px + 2px * (var(--bolt-typography-basis) - 360) / 840, 18px);\n  line-height: clamp(1.5, 1.5 + 0.06 * (var(--bolt-typography-basis) - 360) / 840, 1.56);\n  position: relative;\n  text-align: center;\n  color: white;\n  font-weight: 500;\n  padding: 20px;\n}\n.bolt-tile-wc--content {\n  font-family: var(--bolt-fontFamily-sansSerif);\n  font-weight: 400;\n  font-size: clamp(14px, 14px + 2px * (var(--bolt-typography-basis) - 360) / 840, 16px);\n  line-height: clamp(1.43, 1.43 + 0.07 * (var(--bolt-typography-basis) - 360) / 840, 1.5);\n}\n.bolt-tile-wc.overlay-tile:hover .bolt-tile-wc--img, .bolt-tile-wc.overlay-tile:focus .bolt-tile-wc--img {\n  opacity: 0.85;\n}";

/**
 * Tiles allow users to choose from multiple options to explore content or complete tasks. They contain short overviews of information so users can quickly scan and make decisions.
 *
 * The `bolt-tile` component should be used inside of a `bolt-tile-group`. Each tile may have either an `icon` or `img` parameter, but not both. Slotted content is optional and will appear as body text on the tile if present. The tile with thumbnail variation cannot be combined with the icon parameter.
 *
 * @class BoltTileElement
 * @element BoltTileElement
 * @extends {BoltElement}
 * @tagname bolt-tile
 * @since 3.0.0
 *
 * @property {String} label - (Required) The label for the tile.
 * @property {String} subheading - (Optional) Subheading text displayed above the main tile label.
 * @property {String} imageheight - (Optional) By default, the image on a tile will be sized `proportional` to its width, and all image tiles in a row will have a consistent height. `fill` will cause the image to fill the available height on the tile, useful for using an image tile within advanced grid layouts. Possible values: [`proportional`, `fill`]
 * @property {String} zoom - (Optional) Disables image zoom on mouse hover/keyboard focus. Default is `"true"`. Possible values: [`true`, `false`]
 * @property {String} icon - (Optional) The file path to an icon to be displayed next to the tile label.
 * @property {String} utilityicon - (Optional) Configures the utility icon next to tile label text. Can be applied to one or more tiles in a tile-group. Default is `chevron-right`.
 * @property {String} img - (Optional) The file path to an image to be displayed on the tile.
 * @property {String} type -(Optional) `overlay` will display the label as an overlay for tiles that have an image but no body copy.
 * @property {String} href - (Optional) The URL the tile should navigate to when clicked.
 * @property {String} linktarget - (Optional) Passes a `target` attribute to the underlying link element. If the link opens in a new tab, this should be communicated either by the tile's content, or by adding a title to the link.
 * @property {String} linktitle - (Optional) Passes a `title` attribute to the underlying link element.
 * @property {String} bgposition - (Optional) Used to modify the background position for `overlay` tiles. Accepts any valid background-position CSS parameter, such as `center` (default), `top`, `bottom`, `left`, `right`, or percentage values.
 *
 * @slot thumbnail - Contains thumbnail content for default type tiles when no icon is provided
 *
 * @see https://bolt.nwie.net/web/components/tile
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @example
 * <bolt-tile
 *   label="Product Overview"
 *   href="/products"
 *   img="/images/product.jpg">
 * </bolt-tile>
 *
 */
class BoltTileElement extends BoltElement {
    static get is() {
      return 'bolt-tile';
    }

    /**
     * LitElement properties/attributes getter
     */
    /**
     * Defines the reactive properties for this element.
     * Specifies which attributes should trigger re-rendering when changed.
     *
     * @static
     * @readonly
     * @returns {Object} Property configuration object with type definitions
     * @public
     */
    static get properties() {
        return {
            type: { type: String },
            label: { type: String },
            subheading: { type: String },
            href: { type: String },
            zoom: { type: String },
            linktarget: {type: String },
            linktitle: { type: String },
            img: { type: String },
            icon: { type: String },
            utilityicon: { type: String },
            bgposition: { type: String },
            imageheight: { type: String }
        }
    }

    /**
   * Creates a new BoltTileElement instance and initializes the component.
   * Sets up the shadow DOM with styles and prepares the component for rendering.
   *
   * @constructor
   * @public
   */
  constructor() {
        super();
        this.type = 'default';
        this.label = '';
        this.subheading = '';
        this.href = '';
        this.zoom = 'true';
        this.img = '';
        this.icon = '';
        this.utilityicon = '';
        this.bgposition = 'center';
        this.imageheight = 'proportional';
    }

    /**
     * Generates the image content for the tile based on the tile type.
     * Returns either an overlay style background image or a standard image element.
     * Handles zoom effects and background positioning for overlay tiles.
     *
     * @returns {TemplateResult} HTML template for the tile image
     * @private
     */
    getImg() {
      if (this.type == 'overlay') {
        return x`
          <div
            class="
              bolt-tile-wc--img
              bolt-tile-wc--img--zoom-${this.zoom}
            "
            style="
              background-image: url('${this.img}');
              background-position: ${this.bgposition};
            "
          ></div>
        `
      } else {
        return x`
          <div
            class="
              bolt-tile-wc--img-container
              bolt-tile-wc--img-container-${this.imageheight}
            "
          >
            <div
              class="
                bolt-tile-wc--img
                bolt-tile-wc--img--zoom-${this.zoom}
              "
              style="
                background-image: url('${this.img}');
                background-position: ${this.bgposition};
              "
            ></div>
          </div>
        `
      }
    }

    /**
     * Provides the component's CSS styles from the imported stylesheet.
     * These styles are automatically applied to the shadow DOM.
     *
     * @static
     * @readonly
     * @returns {CSSResult} Compiled CSS styles for the component
     * @public
     */
    static get styles() {
        return CSS$1;
    }

    /**
     * Lifecycle hook called when the element is connected to the DOM.
     * Sets the bolt-focusable attribute to enable focus management.
     *
     * @protected
     */
    $onConnect() {
      this.setAttribute('bolt-focusable', '');
    }

    /**
     * Programmatically sets focus on the tile element.
     * Focuses the anchor element within the shadow DOM if it exists.
     * Provides keyboard accessibility for the tile component.
     *
     * @public
     */
    focus() {
      /*
       * There's no guarantee that the shadowRoot exists or been populated
       * when this method is called, so we need to make sure we don't
       * attempt to focus a nonexistent element.
       */
      this._root?.focus();
    }

    /**
     * Renders the tile component template with conditional content based on type.
     * Generates an anchor element containing image, icon, title, and content areas.
     * Handles both default and overlay tile styles with appropriate layouts.
     *
     * @returns {TemplateResult} The complete HTML template for the tile
     * @protected
     */
    render() {
      return x`
        <a
          class="
            bolt-tile-wc
            ${this.type}-tile
          "
          href="${this.href}"
          target="${l(this.linktarget || null)}"
          title="${l(this.linktitle || null)}"
          rel="${l(this.linktarget ? "noopener noreferrer" : undefined )}"
        >
          ${this.img ? this.getImg() : ''}
          ${this.type === 'overlay'
            ? x`
              <div class="bolt-tile-wc--caption">
                <div class="bolt-tile-wc--caption-bg"></div>
                <div class="bolt-tile-wc--caption-text">${this.label}</div>
              </div>
            `
            : x`
              <div class="bolt-tile-wc--body">
                ${this.icon ? x`
                <img
                  class="bolt-tile-wc--icon"
                  src="${this.icon}"
                  alt=""
                />
                ` : x`
                <div class="bolt-tile-wc--thumbnail">
                  <slot name="thumbnail"></slot>
                </div>
                `}

                <div class="bolt-tile-wc--main">
                  <div
                    class="
                      bolt-tile-wc--title-bar
                      ${this.subheading ? 'bolt-tile-wc--title-with-subheading' : ''}
                    "
                  >
                    <div class="bolt-tile-wc--title">
                      ${this.subheading ? x`
                        <div class="bolt-tile-wc--tile-subheading">${this.subheading}</div>
                      ` : ``}
                      <div class="bolt-tile-wc--label">
                        <span>${this.label}</span>
                        <bolt-icon
                          fixed
                          name="${l(this.utilityicon == "lock-closed" ? "lock-closed" : "chevron-right")}"
                          size="md"
                          decorative
                        ></bolt-icon>
                      </div>
                    </div>
                  </div>
                  <slot class="bolt-tile-wc--content"></slot>
                </div>
              </div>
            `
          }
        </a>
      `;
    }//render()

  /**
   * Gets the root anchor element in the shadow DOM for focus management.
   * Used by the focus() method to programmatically set focus on the tile.
   *
   * @private
   * @readonly
   * @type {?HTMLAnchorElement}
   */
  get _root() {
    return this.shadowRoot?.querySelector('a.bolt-tile-wc')
  }
}

var CSS = ":host,\n:host * {\n  /* css-core:utils/reset.component */\n  border: 0;\n  font: inherit;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  vertical-align: baseline;\n}\n\n:host {\n  width: 100%;\n  display: block;\n}\n\n::slotted(bolt-tile) {\n  padding-left: 16px;\n  padding-right: 16px;\n  min-width: 250px;\n}\n\n.bolt-tile-group-wc {\n  --bolt-tile-flex: 0 0 100%;\n  --bolt-tile-max-width: 100%;\n  width: 100%;\n}\n.bolt-tile-group-wc--container {\n  margin-left: -16px;\n  margin-right: -16px;\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 32px;\n}\n.bolt-tile-group-wc.tile-col-2 {\n  --bolt-tile-flex: 0 0 50%;\n  --bolt-tile-max-width: 50%;\n}\n.bolt-tile-group-wc.tile-col-3 {\n  --bolt-tile-flex: 0 0 calc(100% / 3);\n  --bolt-tile-max-width: calc(100% / 3);\n}\n.bolt-tile-group-wc.tile-col-4 {\n  --bolt-tile-flex: 0 0 25%;\n  --bolt-tile-max-width: 25%;\n}";

/**
 * Tiles allow users to choose from multiple options to explore content or complete tasks. They contain short overviews of information so users can quickly scan and make decisions.
 *
 * Use `bolt-tile` components within a `bolt-tile-group` to display related interactive content.
 *
 * @class BoltTileGroupElement
 * @element BoltTileGroupElement
 * @extends {BoltElement}
 * @tagname bolt-tile-group
 * @since 3.0.0
 *
 * @property {Number} columns - (Optional) Override the default column behavior by specifying `2`, `3`, or `4` columns of tiles.
 *
 * @slot (default) - Contains `<bolt-tile>` elements to be arranged in the responsive grid
 *
 * @see https://bolt.nwie.net/web/components/tile
 *
 * @includewith bolt-for-vscode - Component should be included with VS Code custom HTML data
 *
 * @example
 * <bolt-tile-group>
 *   <bolt-tile label="Tile 1" href="/page1"></bolt-tile>
 *   <bolt-tile label="Tile 2" href="/page2"></bolt-tile>
 *   <bolt-tile label="Tile 3" href="/page3"></bolt-tile>
 * </bolt-tile-group>
 *
 * @example
 * <!-- Fixed column layout -->
 * <bolt-tile-group columns="3">
 *   <bolt-tile label="Product A" href="/products/a"></bolt-tile>
 *   <bolt-tile label="Product B" href="/products/b"></bolt-tile>
 *   <bolt-tile label="Product C" href="/products/c"></bolt-tile>
 * </bolt-tile-group>
 */
class BoltTileGroupElement extends BoltElement {
    /**
     * Returns the custom element tag name for registration
     * @readonly
     * @static
     * @returns {String} The element tag name 'bolt-tile-group'
     */
    static get is() {
      return 'bolt-tile-group';
    }

    /**
     * Defines the reactive properties for the component
     * @readonly
     * @static
     * @returns {Object} Property definitions with types and configuration
     */
    static get properties() {
        return {
            columns: { type: Number },
            colShown: { type: Number }
        }
    }

    /**
     * Creates an instance of BoltTileGroupElement.
     * Initializes default properties and sets up the ResizeObserver for responsive behavior.
     *
     * @constructor
     */
    constructor() {
        super();
        this.columns = 0;
        this.didSyncChildren = false;

        this._resizeWatcher = new ResizeObserver(entry => {
            this._onComponentResize();
        });
    }

    /**
     * Lifecycle method called when the element is connected to the DOM.
     * Attaches the ResizeObserver to monitor width changes.
     *
     * @protected
     */
    $onConnect(){
        // Attach resize observer
        this._resizeWatcher.observe(this);
    }

    /**
     * Lifecycle method called when the element is disconnected from the DOM.
     * Cleans up the ResizeObserver to prevent memory leaks.
     *
     * @protected
     */
    $onDisconnect(){
        // Disconnect resize observer
        this._resizeWatcher.disconnect();
    }

    /**
     * Handles component resize events from the ResizeObserver.
     * Triggers width checking and component re-rendering for responsive behavior.
     *
     * @private
     */
    _onComponentResize(){
        this.checkWidth();
        this.requestUpdate();
    }

    /**
     * Lifecycle method called after the element has been updated.
     * Performs initial column calculation based on the number of child tiles on first update.
     *
     * @protected
     */
    updated(){
        if(!this.didSyncChildren){
            let $nodes = this.querySelectorAll(':scope > bolt-tile');
            let $nodeCount = $nodes.length;

            // Allow sensible column parameter to override
            if (this.columns < 2 || this.columns > 4) {
                // Treat single tile in group as 2 column
                if ($nodeCount < 2){
                    this.columns = 2;
                }
                // Calculate columns, prioritizing exact divisions, then higher remainders
                else if ($nodeCount < 5){
                   this.columns = $nodeCount;
                }
                else if ($nodeCount%4 == 0) {
                    this.columns = 4;
                } else if ($nodeCount%3 == 0){
                    this.columns = 3;
                } else if ($nodeCount%4 > $nodeCount%3) {
                    this.columns = 4;
                } else {
                    this.columns = 3;
                }
            }
            /** @private {Number} */
            this.colShown = this.columns;

            this.didSyncChildren = true;
            this.checkWidth();
        }
    }

    /**
     * Checks the component's width and adjusts the number of displayed columns responsively.
     * Implements breakpoints for mobile, tablet, and desktop layouts.
     *
     * @private
     */
    checkWidth(){
        setTimeout(() => {
            var $width = parseFloat(getComputedStyle(this).getPropertyValue('width'), 10);

            // Adjust column divisions based on available width
            if ($width < 550){
                this.colShown = 1;
            }
            else if ($width >= 550){
                if (this.columns > 1){
                    this.colShown = 2;
                }
            }
            if ($width >= 750){
                if (this.columns == 3){
                    this.colShown = 3;
                }
            }
            if ($width >= 1000){
                if (this.columns == 4){
                    this.colShown = 4;
                }
            }
        }, 0);
    }

    /**
     * Returns the CSS styles for the component
     * @readonly
     * @static
     * @returns {CSSResult} The component's CSS styles
     */
    static get styles() {
      return CSS;
    }

    /**
     * Renders the tile group component template.
     * Creates a responsive grid container with dynamic column classes.
     *
     * @protected
     * @returns {TemplateResult} The component's HTML template
     */
    render() {
        return x`
            <div class="bolt-tile-group-wc tile-col-${this.colShown}">
                <div class="bolt-tile-group-wc--container">
                  <slot class="bolt-tile-group-wc--slot"></slot>
                </div>
            </div>
        `;
    }
}

/**
 * This module exports the tile components and their initialization function.
 * The tile components consist of:
 * - `<bolt-tile>`: Individual tile that displays content in a card-like format
 * - `<bolt-tile-group>`: Container that groups multiple tiles together
 *
 * @module bolt-tile
 * @since 3.0.0
 *
 * @see {@link ./elements/bolt-tile|BoltTileElement}
 * @see {@link ./elements/bolt-tile-group|BoltTileGroupElement}
 */


/**
 * Initializes the tile components by registering them as custom elements
 *
 * This function:
 * 1. Initializes dependencies (Icon component)
 * 2. Registers the BoltTileElement
 * 3. Registers the BoltTileGroupElement
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 */
async function initialize$1() {
  // Upstream
  await initialize$y();

  // Local
  BoltTileElement.$define();
  BoltTileGroupElement.$define();
}

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BoltTileElement: BoltTileElement,
  BoltTileGroupElement: BoltTileGroupElement,
  initialize: initialize$1
});

var Components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Accordion: index$w,
  Autocomplete: index$r,
  Badge: index$q,
  Breadcrumbs: index$p,
  Button: index$o,
  ButtonBar: index$n,
  Checkbox: index$l,
  Chip: index$k,
  ContextualHelp: index$j,
  DatePicker: index$i,
  Divider: index$h,
  Field: index$m,
  FieldError: index$v,
  Header: index$f,
  Icon: index$x,
  Logo: index$g,
  Modal: index$e,
  Note: index$d,
  Notification: index$c,
  Overlay: index$u,
  Pagination: index$b,
  Password: index$a,
  ProgressBar: index$9,
  RadioButton: index$8,
  RevealButton: index$7,
  Select: index$6,
  Switch: index$5,
  Table: index$4,
  Tabset: index$3,
  Tag: index$2,
  Textarea: index$1,
  Textfield: index$s,
  Tile: index,
  WaitingIndicator: index$t
});

/**
 * @private
 * @description
 * Explicitly initialize components
 */
async function _initializeComponents() {
  for (let _name in Components) {
    let _component = Components[_name];
    await _component.initialize();
  }
}

/**
 * @private
 * @description
 * Update/apply `--bolt-viewport-width` CSS custom prop value.
 */
function _updateViewportWidthProp() {
  document
    .querySelector('html')
    .style
    .setProperty('--bolt-viewport-width', window.innerWidth);
}

/**
 * @private
 * @description
 * Handle window resize
 */
function _onWindowResize() {
  _updateViewportWidthProp();
}

/**
 * @private
 * @description
 * Initializes global CSS custom props
 */
async function _initializeCSSProps () {
  _updateViewportWidthProp();
  window.addEventListener('resize', _onWindowResize);
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('resize', _onWindowResize);
  });
}


/**
 * @description
 * Initialize Bolt (async)
 *
 * @example No Arguments
 * function start () {
 *   // continue...
 * }
 * Bolt.initialize();
 * start();
 *
 *
 * @example Then-able
 * function start () {
 *   // continue...
 * }
 * Bolt.initialize().then(start);
 *
 *
 * @example Async/Await
 * function start () {
 *   // continue...
 * }
 * async function load () {
 *   await Bolt.initialize();
 *   start();
 * }
 * load();
 *
 *
 * @returns {Promise}
 */
async function initialize() {
  await _initializeCSSProps();
  await _initializeComponents();
}


var Bolt = {
  Components,
  VERSION,
  initialize,
};

// Entrypoint to generate pre-compiled, auto-initializing, browser assets

// Even though this is async, we will not be waiting for it to finish/resolve.
Bolt.initialize();

export { Bolt as default };
